# Research: DiT Architecture Patterns for Joint Audio-Visual Generation
## Architecture Comparison & Audio-Visual Conditioning Strategies

**Compiled:** March 2, 2026  
**Focus:** How Diffusion Transformer (DiT) architectures integrate audio and video generation, and the implications for audio annotation/conditioning

---

## 1. Architecture Taxonomy

All major SOTA joint audio-visual generation models fall into four architectural patterns:

### Pattern A: Unified Single-Tower (Veo 3, Uniform)
```
Text Prompt → [Joint AV Latent DiT] → Video Latents + Audio Latents
                    ↑
        Audio tokens + Video tokens processed together
```
- Audio and video tokens occupy the same latent space
- Attention operates across modalities simultaneously
- **Training annotation requirement**: requires joint audio-visual captions; audio and video events must be described in a unified text prompt

### Pattern B: Dual-Branch with Cross-Modal Fusion (Seedance 1.5 pro, UniAVGen, JavisDiT)
```
Text Prompt ──────────────────────────────┐
                                          ↓
Video Branch (DiT) ←→ Cross-Modal Attn ←→ Audio Branch (DiT)
      ↓                                        ↓
  Video Latents                           Audio Latents
```
- Separate DiT branches for each modality
- Cross-modal attention modules enable information exchange
- **Training annotation requirement**: separate audio and video captions can be used; inter-modal correspondence is learned via the fusion layer

### Pattern C: Hybrid Multi-Modal + Uni-Modal (MMAudio, HunyuanVideo-Foley)
```
Video + Text → [N₁ MMDiT blocks] → [N₂ Audio-only DiT blocks] → Audio
```
- First N₁ blocks process all modalities jointly
- Last N₂ blocks refine audio only
- Enables fine-grained audio quality while maintaining cross-modal alignment
- MMAudio: 157M params, N₁=MM blocks, N₂=audio-only blocks
- HunyuanVideo-Foley: 18 MMDiT + 36 unimodal audio DiT layers

### Pattern D: Stitched Expert Fusion (UniVerse-1)
```
Pre-trained Video DiT (WAN2.1) + Pre-trained Audio DiT (Ace-step)
         ↕ Cross-modal MLP connectors between corresponding blocks
```
- No training from scratch; fuses already-specialized experts
- Avoids catastrophic forgetting of either modality
- **Training annotation requirement**: can leverage pre-existing annotations from each modality's original training data

---

## 2. Audio VAE / Latent Representation

All models compress audio to a latent representation before applying the diffusion process:

| Model | Audio Latent | Representation |
|---|---|---|
| Veo 3 / 3.1 | Temporal audio latents | Mel spectrogram → VAE |
| Seedance 1.5 pro | Audio latents | Details not public |
| MMAudio | Audio latents (16kHz or 44.1kHz) | VAE on mel spectrogram |
| HunyuanVideo-Foley | DAC-VAE latents | Descript Audio Codec VAE |
| UniVerse-1 | Ace-step audio tokens | Music-specialized codec |
| Movie Gen | Audio latents | VAE on mel spectrogram |

The standard pipeline: **Raw audio waveform → Mel spectrogram → VAE → Latent space → Diffusion**

---

## 3. Synchronization Mechanisms

Temporal synchronization between audio and video is the core challenge. Different approaches:

### Frame-Aligned Positional Embeddings (MMAudio)
- **Aligned RoPE**: Rotary positional embeddings aligned between audio (24fps extracted) and video frames
- Ensures audio tokens at time t attend to video tokens at time t
- **Annotation implication**: audio events must have frame-accurate onset/offset timestamps in training data

### Spatio-Temporal Prior Estimation (JavisDiT)
- Learns **spatial priors** (which region of the video produces sound) and **temporal priors** (when sound occurs)
- Does NOT require explicit spatial/temporal audio event annotations in training data
- Priors are latent tokens, not hard labels

### Conditional Synchronization Module (MMAudio, HunyuanVideo-Foley)
- Extracts high frame-rate visual features (Synchformer at 24-25fps)
- Injects frame-level visual features into audio generation via gated modulation
- **Annotation implication**: reduces need for explicit temporal annotations; the synchronization is learned from the visual signal directly

### Temporal-Aligned RoPE (JavisDiT++)
- Unifies audio and video token position IDs on a common temporal axis
- Enables frame-level synchronization without explicit onset annotations in training data

---

## 4. Text Conditioning: What Audio Annotations Become in Practice

The final form of audio annotations in training is as **text captions** conditioning the generation process. Key patterns:

### Separate Audio Captions
```
Video Caption: "A golden retriever leaps to catch a frisbee in a sunny park"
Audio Caption: "Dog panting and running footsteps on grass, crowd cheering in background"
```
Used by: HunyuanVideo-Foley (GenAU-generated captions), YingSound, MMAudio

### Joint AV Captions
```
Joint Caption: "In a sunny park, a golden retriever leaps to catch a frisbee. 
               You can hear the crowd cheering, the dog's panting, and footsteps 
               crunching on grass."
```
Used by: Veo 3 (Gemini-annotated), Seedance 1.5 pro

### Multi-Track Structured Captions
```
Scene: "A golden retriever catches a frisbee in a park"
Dialog: [none]
BGM: "Upbeat acoustic guitar, 120 BPM, happy mood"
SFX: "Dog panting, footsteps on grass, crowd cheering, frisbee whoosh"
```
Not yet a standard in public models, but implied by multi-track reward models in Seedance 1.5 pro

---

## 5. RLHF for Audio Quality: What Reward Models Evaluate

Post-training via RLHF requires defining what "good audio" means. Based on public papers:

### Seedance 1.5 pro (Multi-dimensional Audio RLHF)
- Audio quality (fidelity, artifacts)
- Audio-visual synchrony (do sounds match visual events?)
- Lip-sync accuracy (for dialog)
- Narrative coherence (does audio contribute to the scene's story?)
- Cultural/contextual appropriateness (developed with film directors)

### HunyuanVideo-Foley (Objective Metrics Used in Evaluation)
- Fréchet Distance (FD) — distribution quality
- KL Divergence — distribution matching
- AV-Align — temporal synchrony
- CLAP score — semantic alignment
- Inception Score (IS) — quality/diversity

### Key Implication for Annotation
RLHF requires **human preference labels** on generated audio-visual pairs. These annotations capture:
- Which of two generated videos has better audio-visual sync?
- Which has more appropriate background music?
- Which has clearer dialog?

These human preference annotations become the training signal for the reward model, which in turn shapes the model's understanding of what "good audio" means.

---

## 6. Open vs. Closed Source Landscape (as of March 2026)

| Model | Organization | Open Source | Audio Type |
|---|---|---|---|
| Veo 3 / 3.1 | Google DeepMind | ❌ Closed | Dialog + SFX + BGM |
| Sora 2 | OpenAI | ❌ Closed | Dialog + SFX + BGM |
| Seedance 1.5 pro | ByteDance | ❌ Closed | Dialog + SFX + BGM |
| MMAudio | Sony / UIUC | ✅ Open | SFX + ambient |
| HunyuanVideo-Foley | Tencent | ✅ Open | SFX + ambient (Foley) |
| Kling-Foley | Kuaishou | ❌ Closed | SFX |
| UniVerse-1 | Various | ✅ Open | SFX + BGM (limited) |
| UniAVGen | Tencent Hunyuan | Research | Dialog + SFX |
| JavisDiT++ | Various | Research | SFX + ambient |

---

## 7. Future Directions

### Multi-Track Conditioning
Models that explicitly condition on separate audio track prompts simultaneously:
```
Generate video + audio where:
  - Dialog track: "[transcript of what characters say]"
  - BGM track: "Tense orchestral score with strings"
  - SFX track: "Footsteps on gravel, distant thunder"
```

### Iterative Audio Refinement
Inspired by YingSound's Chain-of-Thought approach: generate draft audio → analyze → refine per track. Requires training data annotated with audio quality scores at the per-track level.

### Physics-Aware Audio Generation
Veo 3.1's documentation suggests training on physics-correlated audio (material-specific SFX). Annotation requirement: material labels in video datasets (what surface does the character walk on?) linked to corresponding audio signatures.

---

## References

- Seedance 1.5 pro: arXiv:2512.13507
- MMAudio: arXiv:2412.15322 (CVPR 2025)
- HunyuanVideo-Foley: arXiv:2508.16930
- UniVerse-1: arXiv:2509.06155
- UniAVGen: arXiv:2511.03334
- JavisDiT: arXiv:2503.23377
- JavisDiT++: arXiv:2602.19163
- Uniform (single-tower): arXiv:2502.03897
- JavisDiT++ unified multi-task AV: arXiv:2601.04151
- Veo 3 Technical Report: storage.googleapis.com/deepmind-media/veo/Veo-3-Tech-Report.pdf
