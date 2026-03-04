# Audio-Visual Synchronization Training for Video Generation Models

**Research Focus**: Synchronization mechanisms and training strategies for joint audio-video generation
**Date**: March 2, 2026
**Scope**: Deep dive into synchronization architectures from SOTA models (2024-2026)

---

## Executive Summary

This document analyzes how state-of-the-art video generation models achieve audio-visual synchronization through architectural design and training strategies. The research reveals that modern DiT-based models have moved beyond explicit synchronization losses to **implicit synchronization learning** through cross-modal attention and shared latent spaces.

### Key Architectural Patterns

1. **Dual-Branch DiT with Cross-Modal Fusion** (OVI, Seedance, HunyuanVideo-Foley)
2. **Asymmetric Cross-Modal Interaction** (UniAVGen)
3. **Synchformer-Based Temporal Alignment** (HunyuanVideo-Foley)
4. **Shared Timestep Training** (OVI, UniAVGen)
5. **Face-Aware Modulation** (UniAVGen)

---

## 1. Synchronization Architecture Patterns

### 1.1 Symmetric Dual-Branch Architecture (OVI)

**Core Design**:
```
Video Branch (DiT)          Audio Branch (DiT)
      ↓                            ↓
   [Self-Attention]          [Self-Attention]
      ↓                            ↓
   [Cross-Attention] ←→ [Cross-Attention]
      ↓                            ↓
   [FFN]                        [FFN]
      ↓                            ↓
   Video Output              Audio Output
```

**Key Features**:

1. **Symmetric Architecture**
   - Both branches use identical DiT structure
   - Same number of layers, attention heads, hidden dimensions
   - Equal representational capacity for both modalities

2. **Bidirectional Cross-Modal Fusion**
   - Audio branch attends to video features
   - Video branch attends to audio features
   - Synchronization signals propagate through entire network

3. **Scaled RoPE for Temporal Alignment**
   - Video: 31 frames → standard RoPE
   - Audio: 157 tokens → scaled RoPE (frequency × 31/157 ≈ 0.197)
   - **Result**: Audio and video tokens have consistent temporal attention patterns

**Training Strategy**:
```python
# Pseudo-code for OVI training
def train_step(video_latent, audio_latent, text_embedding, timestep):
    # Add noise to both modalities with shared timestep
    noisy_video = add_noise(video_latent, timestep)
    noisy_audio = add_noise(audio_latent, timestep)

    # Forward pass through dual-branch DiT
    pred_video, pred_audio = model(
        noisy_video,
        noisy_audio,
        text_embedding,
        timestep
    )

    # Flow matching loss for both branches
    loss_video = flow_matching_loss(pred_video, video_latent, timestep)
    loss_audio = flow_matching_loss(pred_audio, audio_latent, timestep)

    # Weighted combination (no explicit sync loss!)
    total_loss = 0.85 * loss_video + 0.15 * loss_audio

    return total_loss
```

**Key Insight**: No explicit synchronization loss required. The model learns lip-sync and action-sound alignment through:
- Paired audio-video sampling
- Shared timesteps
- Cross-modal attention mechanisms

**Annotation Requirements**:
- High-quality paired audio-video data
- Strict synchronization filtering (SyncNet: |offset|≤3, confidence>1.5)
- No need for explicit frame-level sync labels during training

---

### 1.2 Asymmetric Cross-Modal Interaction (UniAVGen)

**Core Innovation**: Different alignment strategies for A2V (audio-to-video) and V2A (video-to-audio)

**Architecture**:
```
Video Features (F_v)                Audio Features (F_a)
      ↓                                    ↓
[A2V Aligner]                        [V2A Aligner]
      ↓                                    ↓
Frame-level audio context      Interpolated video context
      ↓                                    ↓
[Cross-Attention]                    [Cross-Attention]
      ↓                                    ↓
Video with audio info            Audio with video info
```

**A2V Aligner (Audio-to-Video)**:
```python
# Pseudo-code for A2V alignment
def a2v_align(video_features, audio_features):
    """
    For each video frame, construct audio context window
    """
    T_v = video_features.shape[1]  # Number of video frames
    T_a = audio_features.shape[1]  # Number of audio tokens

    aligned_audio = []
    for t in range(T_v):
        # Map video frame to audio token range
        audio_start = int(t * T_a / T_v)
        audio_end = int((t + 1) * T_a / T_v)

        # Extract audio context for this frame
        audio_context = audio_features[:, audio_start:audio_end, :]

        # Aggregate (e.g., mean pooling)
        frame_audio = audio_context.mean(dim=1)
        aligned_audio.append(frame_audio)

    return torch.stack(aligned_audio, dim=1)
```

**V2A Aligner (Video-to-Audio)**:
```python
# Pseudo-code for V2A alignment
def v2a_align(video_features, audio_features):
    """
    For each audio token, interpolate video context
    """
    T_v = video_features.shape[1]  # Number of video frames
    T_a = audio_features.shape[1]  # Number of audio tokens

    aligned_video = []
    for t in range(T_a):
        # Map audio token to video frame position (continuous)
        video_pos = t * T_v / T_a

        # Interpolate between adjacent frames
        frame_idx = int(video_pos)
        alpha = video_pos - frame_idx

        if frame_idx + 1 < T_v:
            interpolated = (1 - alpha) * video_features[:, frame_idx, :] + \
                          alpha * video_features[:, frame_idx + 1, :]
        else:
            interpolated = video_features[:, frame_idx, :]

        aligned_video.append(interpolated)

    return torch.stack(aligned_video, dim=1)
```

**Key Differences**:
- **A2V**: Aggregates multiple audio tokens per video frame (many-to-one)
- **V2A**: Interpolates between video frames for each audio token (smooth transition)
- **Rationale**: Audio has higher temporal resolution than video, requires different alignment strategies

**Face-Aware Modulation (FAM)**:
```python
# Pseudo-code for FAM
def face_aware_modulation(video_features, audio_features, mask_predictor):
    # Predict soft mask for face region
    face_mask = mask_predictor(video_features)  # Shape: [B, T, H, W]

    # A2V: Modulate video features with mask
    audio_to_video = a2v_cross_attention(video_features, audio_features)
    modulated_video = video_features + face_mask * audio_to_video

    # V2A: Modulate audio features with masked video
    masked_video = video_features * face_mask
    video_to_audio = v2a_cross_attention(audio_features, masked_video)
    modulated_audio = audio_features + video_to_audio

    return modulated_video, modulated_audio
```

**Benefits**:
- **Efficiency**: Focus cross-modal interaction on face region (most important for lip-sync)
- **Quality**: Avoid background interference in audio generation
- **Flexibility**: Mask predictor learns dynamically, no manual face detection needed

**Annotation Requirements**:
- Face region masks (for supervised FAM training)
- Mask loss with decay schedule (λ_m linearly decays to 0)
- High-quality speaker identity labels
- Emotional state annotations (for emotion consistency)

---

### 1.3 Synchformer-Based Temporal Alignment (HunyuanVideo-Foley)

**Core Idea**: Use pre-trained synchronization features to guide audio generation

**Architecture Integration**:
```
Video Frames                    Audio Latent
      ↓                              ↓
[Visual Encoder]              [Audio DiT]
      ↓                              ↓
Visual Features               Audio Features
      ↓                              ↓
      └──────→ [Synchformer] ←──────┘
                     ↓
            Sync Features (frame-level)
                     ↓
            [Gated Modulation]
                     ↓
            Modulated Audio Features
```

**Synchformer Features**:
- Pre-trained on audio-visual synchronization task
- Outputs frame-level synchronization features
- Captures temporal correspondence between audio and video

**Gated Modulation Mechanism**:
```python
# Pseudo-code for sync feature modulation
def sync_modulation(audio_features, sync_features, timestep_embedding):
    # Combine sync features with timestep embedding
    modulation_signal = sync_features + timestep_embedding

    # Adaptive Layer Normalization (adaLN)
    scale, shift = adaLN(modulation_signal)

    # Gated modulation
    gate = sigmoid(linear(modulation_signal))
    modulated = gate * (scale * audio_features + shift)

    return modulated
```

**Training Strategy**:
- Synchformer features frozen (pre-trained)
- Modulation layers trained end-to-end
- No explicit sync loss, but sync features guide generation

**Annotation Requirements**:
- High-quality paired audio-video data for Synchformer pre-training
- Frame-level temporal alignment labels (for Synchformer training)
- No additional sync labels needed for Foley model training

---

### 1.4 Interleaved RoPE (HunyuanVideo-Foley)

**Problem**: Standard RoPE treats audio and video tokens independently, missing temporal correspondence

**Solution**: Interleave audio and video tokens along time dimension before applying RoPE

**Implementation**:
```python
# Pseudo-code for interleaved RoPE
def interleaved_rope(video_tokens, audio_tokens):
    """
    video_tokens: [B, T_v, D]  # T_v = 31 frames
    audio_tokens: [B, T_a, D]  # T_a = 157 tokens
    """
    # Upsample video tokens to match audio temporal resolution
    video_upsampled = interpolate(video_tokens, size=T_a)  # [B, T_a, D]

    # Interleave along time dimension
    interleaved = torch.stack([video_upsampled, audio_tokens], dim=2)  # [B, T_a, 2, D]
    interleaved = interleaved.reshape(B, T_a * 2, D)  # [B, 2*T_a, D]

    # Apply RoPE to interleaved sequence
    rope_features = apply_rope(interleaved)

    # De-interleave
    rope_features = rope_features.reshape(B, T_a, 2, D)
    video_rope = rope_features[:, :, 0, :]  # [B, T_a, D]
    audio_rope = rope_features[:, :, 1, :]  # [B, T_a, D]

    # Downsample video back to original resolution
    video_rope = downsample(video_rope, size=T_v)  # [B, T_v, D]

    return video_rope, audio_rope
```

**Benefits**:
- **Temporal coupling**: Audio and video tokens at same time index share positional information
- **Improved sync**: Model learns stronger temporal correspondence
- **Ablation result**: Replacing interleaved RoPE with standard RoPE degrades all metrics

**Annotation Requirements**:
- None (architectural change, no additional labels needed)

---

## 2. Training Strategies for Synchronization

### 2.1 Shared Timestep Training (OVI, UniAVGen)

**Core Principle**: Use same diffusion timestep for both audio and video branches

**Mathematical Formulation**:
```
# Standard diffusion (separate timesteps)
t_v ~ Uniform(0, 1)  # Video timestep
t_a ~ Uniform(0, 1)  # Audio timestep
x_v(t_v) = α(t_v) * x_v + σ(t_v) * ε_v
x_a(t_a) = α(t_a) * x_a + σ(t_a) * ε_a

# Shared timestep (OVI, UniAVGen)
t ~ Uniform(0, 1)  # Shared timestep
x_v(t) = α(t) * x_v + σ(t) * ε_v
x_a(t) = α(t) * x_a + σ(t) * ε_a
```

**Training Algorithm**:
```python
# Pseudo-code for shared timestep training
def train_step(video, audio, text):
    # Sample single timestep for both modalities
    t = torch.rand(batch_size)

    # Encode to latent space
    z_v = video_vae.encode(video)
    z_a = audio_vae.encode(audio)

    # Add noise with shared timestep
    z_v_noisy = alpha(t) * z_v + sigma(t) * torch.randn_like(z_v)
    z_a_noisy = alpha(t) * z_a + sigma(t) * torch.randn_like(z_a)

    # Predict velocity (flow matching)
    v_v_pred, v_a_pred = model(z_v_noisy, z_a_noisy, text, t)

    # Compute target velocity
    v_v_target = z_v - z_v_noisy
    v_a_target = z_a - z_a_noisy

    # Loss
    loss_v = mse_loss(v_v_pred, v_v_target)
    loss_a = mse_loss(v_a_pred, v_a_target)
    loss = lambda_v * loss_v + lambda_a * loss_a

    return loss
```

**Why It Works**:
- **Coupled denoising**: Audio and video denoise at same rate
- **Temporal alignment**: Both modalities at same "noise level" during training
- **Implicit synchronization**: Model learns to generate synchronized content without explicit loss

**Annotation Requirements**:
- High-quality paired audio-video data
- Strict temporal alignment (reject misaligned samples)
- No explicit sync labels needed

---

### 2.2 Representation Alignment (REPA) - HunyuanVideo-Foley

**Core Idea**: Align model's internal representations with pre-trained high-fidelity audio features

**Architecture**:
```
Audio DiT Block (Unimodal)
      ↓
Hidden State h
      ↓
[MLP Projection]
      ↓
Projected Features h'
      ↓
[Cosine Similarity] ←─── Pre-trained Audio Features (ATST-Frame)
      ↓
REPA Loss
```

**Mathematical Formulation**:
```
# REPA loss
h = DiT_audio(z_a, t)  # Hidden state from audio DiT block
h' = MLP(h)  # Project to same dimension as ATST features

f_atst = ATST_Frame.encode(audio)  # Pre-trained features (frozen)

L_repa = -cosine_similarity(h', f_atst)  # Negative cosine similarity
```

**Training Strategy**:
```python
# Pseudo-code for REPA training
def train_with_repa(video, audio, text):
    # Standard flow matching loss
    loss_fm = flow_matching_loss(video, audio, text)

    # REPA loss (only for audio branch)
    hidden_states = model.get_audio_hidden_states()  # From unimodal blocks
    projected = mlp_projection(hidden_states)

    # Extract pre-trained features
    with torch.no_grad():
        atst_features = atst_model.encode(audio)

    # Cosine similarity loss
    loss_repa = -cosine_similarity(projected, atst_features).mean()

    # Combined loss
    loss = loss_fm + lambda_repa * loss_repa

    return loss
```

**Key Design Choices** (from ablation study):
1. **Apply REPA to unimodal audio blocks** (not multimodal blocks)
   - Multimodal blocks focus on audio-video fusion
   - Unimodal blocks focus on audio quality refinement

2. **Apply REPA to shallow layers** (not deep layers)
   - Shallow layers: Better alignment, higher audio quality
   - Deep layers: Worse performance (features too abstract)

3. **Use ATST-Frame features** (not EAT or combined)
   - ATST-Frame: Best performance
   - EAT: Slightly worse
   - Combined (EAT + ATST): Worse (feature distribution mismatch)

**Annotation Requirements**:
- High-quality reference audio for ATST feature extraction
- No additional labels (ATST features extracted automatically)

---

### 2.3 Multi-Task Learning (UniAVGen)

**Training Stages**:
```
Stage 1: Audio Branch Pre-training
    ↓
Stage 2: Joint Audio-Video Training
    ↓
Stage 3: Multi-Task Learning
```

**Stage 3 Task Distribution**:
```python
# Task sampling ratios
tasks = {
    "joint_generation": 0.4,        # 4 parts
    "reference_audio_generation": 0.1,  # 1 part
    "audio_video_continuation": 0.1,    # 1 part
    "video_to_audio": 0.2,              # 2 parts
    "audio_to_video": 0.2               # 2 parts
}

# Training loop
for batch in dataloader:
    task = sample_task(tasks)

    if task == "joint_generation":
        loss = joint_av_loss(batch)
    elif task == "reference_audio_generation":
        loss = reference_audio_loss(batch)
    elif task == "audio_video_continuation":
        loss = continuation_loss(batch)
    elif task == "video_to_audio":
        loss = v2a_loss(batch)
    elif task == "audio_to_video":
        loss = a2v_loss(batch)

    loss.backward()
    optimizer.step()
```

**Benefits**:
- **Improved generalization**: Model learns multiple related tasks
- **Better synchronization**: V2A and A2V tasks reinforce audio-video correspondence
- **Flexible inference**: Single model supports multiple use cases

**Annotation Requirements**:
- **Joint generation**: Paired audio-video data
- **Reference audio**: Audio samples with speaker identity labels
- **Continuation**: Segmented audio-video clips with continuation labels
- **V2A**: Silent videos with ground-truth audio
- **A2V**: Audio clips with ground-truth video

---

### 2.4 Modality-Aware Classifier-Free Guidance (MA-CFG) - UniAVGen

**Problem**: Standard CFG is single-modal, doesn't enhance cross-modal dependencies

**Solution**: Separate guidance for audio and video branches

**Mathematical Formulation**:
```
# Standard CFG (single-modal)
ε_pred = ε_uncond + w * (ε_cond - ε_uncond)

# MA-CFG (cross-modal)
# Unconditional: No cross-modal interaction
ε_v_uncond, ε_a_uncond = model(z_v, z_a, text, t, cross_modal=False)

# Conditional: With cross-modal interaction
ε_v_cond, ε_a_cond = model(z_v, z_a, text, t, cross_modal=True)

# Separate guidance for each modality
ε_v_pred = ε_v_uncond + w_v * (ε_v_cond - ε_v_uncond)
ε_a_pred = ε_a_uncond + w_a * (ε_a_cond - ε_a_uncond)
```

**Implementation**:
```python
# Pseudo-code for MA-CFG inference
def sample_with_ma_cfg(text, w_video=7.5, w_audio=7.5, steps=50):
    # Initialize noise
    z_v = torch.randn(video_shape)
    z_a = torch.randn(audio_shape)

    for t in reversed(range(steps)):
        # Unconditional prediction (no cross-modal interaction)
        with torch.no_grad():
            eps_v_uncond, eps_a_uncond = model(
                z_v, z_a, text="", t=t,
                enable_cross_modal=False
            )

        # Conditional prediction (with cross-modal interaction)
        with torch.no_grad():
            eps_v_cond, eps_a_cond = model(
                z_v, z_a, text=text, t=t,
                enable_cross_modal=True
            )

        # Apply separate guidance
        eps_v = eps_v_uncond + w_video * (eps_v_cond - eps_v_uncond)
        eps_a = eps_a_uncond + w_audio * (eps_a_cond - eps_a_uncond)

        # Denoising step
        z_v = denoise_step(z_v, eps_v, t)
        z_a = denoise_step(z_a, eps_a, t)

    # Decode
    video = video_vae.decode(z_v)
    audio = audio_vae.decode(z_a)

    return video, audio
```

**Benefits**:
- **Enhanced synchronization**: Amplifies cross-modal signals
- **Better quality**: Separate control over video and audio fidelity
- **Flexible control**: Can adjust guidance strength per modality

**Annotation Requirements**:
- None (inference-time technique)

---

## 3. Synchronization Evaluation Metrics

### 3.1 Lip-Sync Metrics

**SyncNet Confidence**:
```python
# Pseudo-code for SyncNet evaluation
def evaluate_lip_sync(video, audio):
    # Extract face region and audio
    face_crops = extract_faces(video)
    audio_segment = extract_speech(audio)

    # SyncNet forward pass
    sync_score = syncnet(face_crops, audio_segment)

    metrics = {
        "confidence": sync_score.confidence,  # Higher is better
        "offset_frames": sync_score.offset,   # Should be close to 0
        "sync_quality": "high" if sync_score.confidence > 0.8 else "low"
    }

    return metrics
```

**Typical Thresholds**:
- **Confidence > 0.8**: Excellent lip-sync
- **Confidence 0.6-0.8**: Good lip-sync
- **Confidence < 0.6**: Poor lip-sync
- **Offset**: ±2 frames acceptable, ±5 frames noticeable

### 3.2 Temporal Alignment Metrics

**DeSync Score** (HunyuanVideo-Foley):
```python
# Pseudo-code for DeSync evaluation
def compute_desync(video, audio):
    # Extract visual events (e.g., object impacts)
    visual_events = detect_visual_events(video)

    # Extract audio events (e.g., impact sounds)
    audio_events = detect_audio_events(audio)

    # Match events and compute temporal offset
    offsets = []
    for v_event in visual_events:
        # Find closest audio event
        a_event = find_closest_audio_event(v_event, audio_events)

        # Compute temporal offset (in seconds)
        offset = abs(v_event.timestamp - a_event.timestamp)
        offsets.append(offset)

    # Average offset (lower is better)
    desync_score = np.mean(offsets)

    return desync_score
```

**Interpretation**:
- **DeSync < 0.1s**: Excellent synchronization
- **DeSync 0.1-0.2s**: Good synchronization
- **DeSync > 0.2s**: Poor synchronization (noticeable lag)

### 3.3 Semantic Alignment Metrics

**ImageBind Score**:
```python
# Pseudo-code for ImageBind evaluation
def compute_imagebind_score(video, audio):
    # Extract embeddings
    video_emb = imagebind.encode_video(video)
    audio_emb = imagebind.encode_audio(audio)

    # Cosine similarity
    similarity = cosine_similarity(video_emb, audio_emb)

    return similarity  # Range: [-1, 1], higher is better
```

**Interpretation**:
- **IB > 0.7**: Strong semantic alignment
- **IB 0.5-0.7**: Moderate semantic alignment
- **IB < 0.5**: Weak semantic alignment

**CLAP Score** (Text-Audio Alignment):
```python
# Pseudo-code for CLAP evaluation
def compute_clap_score(text, audio):
    # Extract embeddings
    text_emb = clap.encode_text(text)
    audio_emb = clap.encode_audio(audio)

    # Cosine similarity
    similarity = cosine_similarity(text_emb, audio_emb)

    return similarity  # Range: [-1, 1], higher is better
```

---

## 4. Practical Recommendations

### 4.1 Architecture Selection

**For Lip-Sync Heavy Applications** (dialogue, talking heads):
- **Recommended**: UniAVGen-style asymmetric cross-modal interaction + FAM
- **Key features**: Face-aware modulation, phoneme-level alignment
- **Annotation needs**: Face masks, phoneme timestamps, speaker identity

**For General Foley/Sound Effects**:
- **Recommended**: HunyuanVideo-Foley-style Synchformer + interleaved RoPE
- **Key features**: Pre-trained sync features, temporal coupling
- **Annotation needs**: High-quality paired data, event-sound correspondence

**For Music Video Generation**:
- **Recommended**: AutoMV-style multi-agent + beat alignment
- **Key features**: Beat tracking, rhythm-motion correspondence
- **Annotation needs**: Beat timestamps, song structure, lyric alignment

### 4.2 Training Strategy Selection

**For Large-Scale Training** (100K+ hours):
- **Recommended**: Shared timestep + automated filtering (OVI approach)
- **Benefits**: Scalable, no explicit sync loss needed
- **Requirements**: Strict sync filtering (SyncNet), high-quality paired data

**For High-Fidelity Audio**:
- **Recommended**: REPA (HunyuanVideo-Foley approach)
- **Benefits**: Professional-grade audio quality
- **Requirements**: Pre-trained audio features (ATST-Frame), reference audio

**For Multi-Task Flexibility**:
- **Recommended**: Multi-task learning (UniAVGen approach)
- **Benefits**: Single model for multiple use cases
- **Requirements**: Task-specific annotations, balanced task sampling

### 4.3 Evaluation Protocol

**Minimum Evaluation Suite**:
1. **Lip-Sync**: SyncNet confidence (for dialogue)
2. **Temporal Alignment**: DeSync score (for sound effects)
3. **Semantic Alignment**: ImageBind score (for overall correspondence)
4. **Text Alignment**: CLAP score (for prompt following)
5. **Subjective Quality**: MOS ratings (quality, sync, expressiveness)

**Recommended Benchmarks**:
- **MovieGen-Audio-Bench**: Comprehensive objective + subjective metrics
- **Kling-Audio-Eval**: Large-scale objective evaluation
- **VGGSound-Test**: Generalization to diverse audio-visual scenarios

---

## 5. Conclusion

Audio-visual synchronization in modern video generation models is achieved through:

1. **Architectural coupling**: Dual-branch DiT with cross-modal attention
2. **Temporal alignment**: Scaled RoPE, interleaved RoPE, Synchformer features
3. **Shared training**: Shared timesteps, paired sampling
4. **Implicit learning**: No explicit sync loss, model learns from data
5. **Specialized modules**: Face-aware modulation, asymmetric alignment

For the Seedance-Label project, implementing **strict synchronization filtering** (SyncNet-based) and **frame-level temporal annotations** will enable training of models with strong audio-visual synchronization, following the successful patterns from OVI, HunyuanVideo-Foley, and UniAVGen.

---

**Document Version**: 1.0
**Last Updated**: March 2, 2026
