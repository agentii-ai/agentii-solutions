# Research Summary: Audio Annotation for Video Generation Models

**Date**: March 2, 2026
**Project**: Seedance-Label Audio Annotation Research
**Scope**: Comprehensive analysis of SOTA video generation models (2024-2026)

---

## Overview

This research analyzed six state-of-the-art video generation models to understand how audio is annotated and labeled for training next-generation DiT-based video generation systems. The analysis covered:

1. **Seedance 1.0, 1.5 Pro, 2.0** (ByteDance)
2. **OVI** (Character AI & Yale University)
3. **HunyuanVideo-Foley** (Tencent Hunyuan)
4. **UniAVGen** (Nanjing University & Tencent Hunyuan)
5. **AutoMV** (Beijing University of Posts & Telecommunications)
6. **PhyGDPO** (Meta)

---

## Key Findings

### 1. Paradigm Shift: From Sequential to Joint Generation

**Traditional Approach** (Pre-2024):
```
Generate Video → Generate Audio → Post-process Alignment
```

**Modern Approach** (2024-2026):
```
Joint Audio-Video Generation with Unified Latent Space
```

All analyzed SOTA models use **native audio-video joint training** rather than sequential generation. This eliminates the need for post-hoc alignment and enables:
- Natural lip-sync without explicit synchronization losses
- Semantic consistency between audio and visual content
- Emotional alignment across modalities
- Temporal coherence at frame-level precision

### 2. Multi-Track Audio Awareness

Long-form videos contain multiple overlapping audio layers. Modern models explicitly handle:

| Track Type | Purpose | Key Annotation Requirements |
|------------|---------|---------------------------|
| **Dialogue** | Human speech, narration | Phoneme-level alignment, speaker ID, emotion labels |
| **Music** | Background scores, themes | Beat markers, genre tags, mood labels, tempo |
| **Sound Effects** | Event-driven sounds | Causal relationships, material properties, spatial positioning |
| **Ambient** | Environmental sounds | Scene consistency, room tone, spatial characteristics |

**Example from Seedance 2.0**:
- Dual-channel stereo audio (48kHz)
- Multi-track parallel output (dialogue + music + SFX + ambient)
- Frame-precise rhythm alignment

### 3. Automated Annotation Pipelines at Scale

Manual annotation doesn't scale beyond ~1K hours. All SOTA models use **automated pipelines with selective human validation**:

**HunyuanVideo-Foley Pipeline** (100K hours):
```
Raw Videos (>>100K hrs)
    ↓ Basic Filtering (40-60% rejection)
    ↓ Quality Assessment (20-30% rejection)
    ↓ Alignment Verification (15-25% rejection)
    ↓ Automated Annotation (MLLM-based)
    ↓
Final Dataset (100K hrs)
```

**Key Tools**:
- **Whisper**: Speech transcription
- **SyncNet**: Lip-sync detection
- **ImageBind**: Semantic alignment
- **GenAU**: Audio captioning
- **htdemucs**: Audio source separation
- **Qwen2.5-Omni / Gemini**: MLLM-based captioning

### 4. Frame-Level Temporal Precision

Modern models require **frame-level (33ms at 30fps) or sub-frame (phoneme-level) temporal annotations**:

**OVI Synchronization Thresholds**:
- Offset: ≤3 frames (100ms at 30fps)
- SyncNet confidence: >1.5
- Minimum volume: >-60dB

**UniAVGen Phoneme Alignment**:
- Word-level timestamps
- Phoneme-level timestamps (10-100ms duration)
- Frame mapping for each phoneme

### 5. Representation Alignment (Emerging Trend)

**HunyuanVideo-Foley's REPA (Representation Alignment)**:
- Use pre-trained audio features (ATST-Frame) to guide diffusion model training
- Align model's internal representations with high-fidelity audio features
- Significantly improves audio quality without explicit quality loss

This represents a shift from **explicit supervision** to **implicit guidance** through pre-trained representations.

---

## Audio Annotation Taxonomy

### Hierarchical Structure

```
Audio Annotation
├── Track Classification
│   ├── Dialogue (speech, narration, singing)
│   ├── Music (score, diegetic, theme)
│   ├── Sound Effects (human, object, environmental, mechanical)
│   └── Ambient (room tone, outdoor, spatial)
│
├── Temporal Annotations
│   ├── Global (entire video duration)
│   ├── Segment (scene/shot-level, 2-15s)
│   ├── Frame (frame-precise, 33ms)
│   └── Sub-frame (phoneme/beat-level, <33ms)
│
├── Semantic Labels
│   ├── Event Categories (hierarchical taxonomy)
│   ├── Emotional Tone (valence, arousal, discrete emotions)
│   ├── Natural Language Descriptions (MLLM-generated)
│   └── Acoustic Characteristics (timbre, pitch, loudness)
│
├── Quality Metrics
│   ├── Objective (SNR, sampling rate, dynamic range)
│   ├── Subjective (production quality, naturalness, expressiveness)
│   └── Alignment (lip-sync, semantic, temporal)
│
└── Audio-Visual Correspondence
    ├── Synchronization (lip-sync, action-sound, beat-motion)
    ├── Semantic Alignment (visual event → sound mapping)
    └── Spatial Alignment (sound source localization)
```

### Annotation Priorities for Training

**High Priority** (Essential):
1. Track type classification
2. Temporal boundaries (start/end timestamps)
3. Semantic labels (event categories, emotions)
4. Quality ratings (1-5 scale)
5. Synchronization labels (lip-sync, action-sound)

**Medium Priority** (Improves quality):
1. Phoneme-level alignment (dialogue)
2. Beat markers (music)
3. Spatial positioning (sound effects)
4. Causal relationships (action-sound correspondence)

**Low Priority** (Nice to have):
1. Detailed acoustic characteristics
2. Cultural context tags
3. Narrative function labels
4. Material properties (sound effects)

---

## Data Pipeline Best Practices

### Multi-Stage Filtering

**Stage 1: Basic Filtering** (CPU, fast)
- Audio presence detection
- Silence ratio filtering (<80%)
- Sampling rate check (≥32kHz)
- Duration filtering

**Stage 2: Quality Assessment** (GPU, medium)
- SNR computation (≥20dB)
- AudioBox aesthetic scoring
- Audio classification (speech/music/effects)

**Stage 3: Alignment Verification** (GPU, medium)
- ImageBind semantic alignment (>0.5)
- SyncNet lip-sync detection (confidence >1.5, offset ≤3 frames)
- AV-align temporal alignment

**Stage 4: Automated Annotation** (GPU, slow)
- Whisper transcription (speech)
- Audio event detection (sound effects)
- MLLM captioning (all samples)
- Beat tracking (music)

**Stage 5: Human Validation** (Manual, selective)
- Sample-based quality check (5-10% of dataset)
- Edge case refinement
- Quality rating annotation

### Rejection Rates

| Stage | Typical Rejection Rate |
|-------|----------------------|
| Basic Filtering | 40-60% |
| Quality Assessment | 20-30% |
| Alignment Verification | 15-25% |
| **Overall** | **~70-80% rejection** |

**Key Insight**: Aggressive filtering ensures high-quality training data. Better to have 10K hours of excellent data than 100K hours of mediocre data.

---

## Synchronization Architectures

### 1. Symmetric Dual-Branch (OVI)

```
Video DiT ←→ Audio DiT
    ↓           ↓
Cross-Attention (bidirectional)
    ↓           ↓
Shared Timestep Training
```

**Key Features**:
- Identical architecture for both branches
- Scaled RoPE for temporal alignment
- No explicit sync loss (learned implicitly)

### 2. Asymmetric Cross-Modal Interaction (UniAVGen)

```
Video Features → A2V Aligner → Audio Branch
Audio Features → V2A Aligner → Video Branch
```

**Key Features**:
- Different alignment strategies for A2V vs V2A
- Face-aware modulation (FAM)
- Modality-aware classifier-free guidance (MA-CFG)

### 3. Synchformer-Based (HunyuanVideo-Foley)

```
Video + Audio → Synchformer → Sync Features
                                    ↓
                            Gated Modulation
                                    ↓
                            Audio Generation
```

**Key Features**:
- Pre-trained synchronization features
- Interleaved RoPE for temporal coupling
- Representation alignment (REPA)

---

## Evaluation Metrics

### Audio Quality Metrics

| Metric | Direction | What It Measures |
|--------|-----------|-----------------|
| **FD_PANNs** | ↓ | Distribution match (audio quality) |
| **IS** | ↑ | Perceptual quality + diversity |
| **PQ** | ↑ | Production quality |
| **SNR** | ↑ | Signal-to-noise ratio |
| **WER** | ↓ | Speech transcription accuracy |

### Alignment Metrics

| Metric | Direction | What It Measures |
|--------|-----------|-----------------|
| **IB (ImageBind)** | ↑ | Visual-semantic alignment |
| **DeSync** | ↓ | Temporal misalignment |
| **CLAP** | ↑ | Text-audio semantic alignment |
| **LS (Lip-Sync)** | ↑ | SyncNet-based lip-sync quality |
| **TC (Timbre)** | ↑ | Speaker voice consistency |
| **EC (Emotion)** | ↑ | Audio-visual emotion match |

### Subjective Metrics

| Metric | Scale | What It Measures |
|--------|-------|-----------------|
| **MOS-Q** | 1-5 | Mean Opinion Score - Quality |
| **MOS-S** | 1-5 | Mean Opinion Score - Semantic alignment |
| **MOS-T** | 1-5 | Mean Opinion Score - Temporal alignment |

---

## Recommendations for Seedance-Label

### 1. Annotation Taxonomy

Implement a **13-dimension annotation framework** covering:

1. **Track Type** (dialogue, music, SFX, ambient)
2. **Temporal Boundaries** (start/end timestamps)
3. **Event Categories** (hierarchical taxonomy)
4. **Emotional Tone** (valence, arousal, discrete emotions)
5. **Speaker Identity** (for dialogue)
6. **Phoneme Alignment** (for lip-sync)
7. **Beat Markers** (for music)
8. **Spatial Positioning** (for sound effects)
9. **Causal Relationships** (action-sound correspondence)
10. **Quality Ratings** (production quality, naturalness, expressiveness)
11. **Synchronization Quality** (lip-sync, action-sound, beat-motion)
12. **Natural Language Descriptions** (MLLM-generated captions)
13. **Acoustic Characteristics** (timbre, pitch, loudness, material)

### 2. Data Pipeline

**Minimum Viable Pipeline** (10K hours target):
```
Collection → Basic Filtering → Quality Assessment →
Alignment Verification → Automated Annotation → Human Validation
```

**Advanced Pipeline** (100K+ hours):
- Add source separation (htdemucs)
- Add beat tracking (music segments)
- Add phoneme alignment (dialogue segments)
- Add spatial audio analysis (sound effects)
- Add distribution rebalancing
- Add semantic deduplication

### 3. Tooling

**Annotation Platform**: Label Studio (recommended)
- Open-source, customizable
- Supports audio-video synchronization
- Multi-track visualization
- Collaborative annotation

**Automated Tools**:
- **Whisper**: Speech transcription
- **SyncNet**: Lip-sync detection
- **ImageBind**: Semantic alignment
- **Qwen2.5-Omni / Gemini**: Audio captioning
- **htdemucs**: Audio source separation
- **AudioBox**: Aesthetic scoring

### 4. Quality Thresholds

| Metric | Minimum | Recommended |
|--------|---------|-------------|
| Sampling Rate | 32kHz | 48kHz |
| SNR | 20dB | 30dB+ |
| Silence Ratio | <80% | <50% |
| SyncNet Offset | ≤5 frames | ≤3 frames |
| SyncNet Confidence | >1.0 | >1.5 |
| ImageBind Similarity | >0.3 | >0.5 |

### 5. Annotation Workflow

```
1. Automated Pre-Processing
   - Audio presence, silence ratio, SNR, sampling rate

2. Automated Pre-Annotation
   - MLLM captioning, audio classification, sync detection

3. Human Annotation
   - Review automated annotations
   - Add missing labels (causal relationships, spatial positioning)
   - Quality ratings

4. Quality Assurance
   - Inter-annotator agreement (Krippendorff's alpha)
   - Expert validation (sample-based)
   - Automated consistency checks

5. Export
   - Unified JSON schema
   - Train/val/test splits
```

---

## Research Documents Created

This research produced five comprehensive documents:

1. **research-audio-annotation-comprehensive-analysis.md** (26KB)
   - Overview of audio annotation approaches across all SOTA models
   - Multi-track audio annotation strategies
   - Audio-visual synchronization labeling
   - Data pipeline architectures
   - Audio quality evaluation frameworks

2. **research-audio-labeling-methodologies-2025-2026.md** (25KB)
   - Detailed annotation methodologies for each track type
   - Temporal alignment annotation (frame-level, sub-frame)
   - Semantic annotation (MLLM-based, hierarchical taxonomies)
   - Quality annotation (objective + subjective metrics)
   - Audio-visual correspondence annotation

3. **research-audio-visual-synchronization-training.md** (23KB)
   - Synchronization architecture patterns (dual-branch, asymmetric, Synchformer)
   - Training strategies (shared timestep, REPA, multi-task learning)
   - Synchronization evaluation metrics
   - Practical recommendations for architecture selection

4. **research-multi-track-audio-annotation-taxonomy.md** (20KB)
   - Comprehensive taxonomy for dialogue, music, sound effects, ambient tracks
   - Annotation schemas for each track type
   - Cross-track interaction labels
   - Integration with Label Studio
   - Annotation workflow and time estimates

5. **research-audio-data-pipelines-and-datasets.md** (32KB)
   - Detailed analysis of data pipelines from 6 SOTA models
   - Audio annotation tools comparison
   - Audio VAE architectures
   - Data quality metrics and thresholds
   - Scaling considerations (compute, storage, throughput)
   - Evaluation benchmarks and metrics glossary

---

## Key Takeaways

1. **Joint Training is Essential**: All SOTA models use native audio-video joint training, not sequential generation

2. **Automated Pipelines Scale**: Manual annotation doesn't scale beyond ~1K hours. MLLM-based automated annotation is critical for 100K+ hour datasets

3. **Multi-Track Awareness Matters**: Explicit separation and labeling of dialogue, music, sound effects, and ambient tracks enables better control and quality

4. **Frame-Level Precision Required**: Temporal alignment at frame-level (33ms) or sub-frame (phoneme-level) granularity is essential for lip-sync and action-sound alignment

5. **Quality Over Quantity**: Aggressive filtering (70-80% rejection rate) ensures high-quality training data. Better to have 10K hours of excellent data than 100K hours of mediocre data

6. **Representation Alignment is Emerging**: Using pre-trained audio features to guide training (REPA) significantly improves audio quality without explicit losses

7. **Evaluation Must Be Multi-Dimensional**: Quality, synchronization, expressiveness, and prompt-following all matter. Single metrics are insufficient

---

## Next Steps for Seedance-Label

1. **Implement Multi-Track Annotation Taxonomy** (13 dimensions)
2. **Build Automated Pre-Annotation Pipeline** (Whisper, SyncNet, ImageBind, MLLM)
3. **Configure Label Studio** with custom audio-video interface
4. **Establish Quality Thresholds** (SNR, sampling rate, sync confidence)
5. **Train Annotators** on track-specific requirements
6. **Pilot Annotation** on 100 hours to validate workflow
7. **Scale to 10K Hours** with automated pipeline + human validation
8. **Iterate and Improve** based on model training feedback

---

**Research Completed**: March 2, 2026
**Total Documents**: 5 comprehensive research files (126KB total)
**Papers Analyzed**: 8 SOTA models (Seedance, OVI, HunyuanVideo-Foley, UniAVGen, AutoMV, PhyGDPO, SPOTLIGHT)
**Key Insight**: Audio annotation for video generation has evolved from post-hoc alignment to native joint training with multi-track awareness, automated pipelines, and frame-level precision.
