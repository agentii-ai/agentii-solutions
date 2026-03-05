# Audio Data Pipelines and Datasets for Video Generation Models

**Research Focus**: Large-scale audio-visual dataset construction, filtering, and annotation pipelines
**Date**: March 2, 2026
**Scope**: Detailed analysis of data pipelines from SOTA models (2024-2026)

---

## Executive Summary

Training video generation models with synchronized audio requires massive, high-quality audio-visual datasets. This document analyzes the data pipeline architectures from six SOTA models, comparing their approaches to data collection, filtering, annotation, and quality assurance. The key finding is that **automated pipelines with strict multi-stage filtering** are essential for scaling beyond 10K hours while maintaining quality.

---

## 1. Dataset Landscape Overview

### 1.1 Existing Public Datasets

| Dataset | Size | Audio Type | Video | Quality | Use Case |
|---------|------|-----------|-------|---------|----------|
| **AudioSet** | 5.8K hrs | General sound | YouTube clips | Mixed | Audio classification, pretraining |
| **VGGSound** | 550 hrs | General sound | YouTube clips | Mixed | V2A evaluation, training |
| **AudioCaps** | 46K clips | Captioned audio | AudioSet subset | Medium | Audio captioning |
| **Clotho** | 30 hrs | Captioned audio | None | High | Audio captioning |
| **MUSIC** | 714 clips | Musical instruments | YouTube | Medium | Music-visual correspondence |
| **Greatest Hits** | 977 clips | Impact sounds | Controlled | High | Foley sound generation |
| **Emilia** | Large | Multilingual speech | None | High | Speech synthesis (UniAVGen) |
| **LibriTTS** | 585 hrs | English speech | None | High | TTS evaluation |
| **Song Describer** | - | Music | None | High | Music captioning |

**Critical Gap**: Public datasets total ~550 hours of paired audio-video data — far too small for training SOTA models. This drives the need for proprietary large-scale pipelines.

### 1.2 Proprietary Datasets (from Analyzed Papers)

| Model | Dataset Size | Audio Types | Key Features |
|-------|-------------|-------------|--------------|
| **HunyuanVideo-Foley** | 100K hours | Sound effects, music, speech | Automated pipeline, multi-stage filtering |
| **OVI** | Millions of videos | Speech, sound effects | Strict sync filtering, temporal tags |
| **Seedance 1.0/1.5/2.0** | Not disclosed (large) | All types | Multi-source, bilingual captioning |
| **UniAVGen** | 1.3M samples | Speech (primarily) | Real-person AV data + Emilia |
| **AutoMV** | 30 songs (eval) | Music | YouTube professional MV |

---

## 2. Data Pipeline Architectures

### 2.1 HunyuanVideo-Foley Pipeline (100K Hours)

**The most detailed and well-documented pipeline in the analyzed papers.**

```
┌─────────────────────────────────────────────────────┐
│                RAW VIDEO COLLECTION                  │
│  Sources: Web crawling, licensed content, internal   │
│  Scale: >> 100K hours (before filtering)             │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│              STAGE 1: BASIC FILTERING                │
│                                                      │
│  ✗ Remove videos without audio track                 │
│  ✗ Remove videos with silence > 80%                  │
│  ✗ Remove videos with sampling rate < 32kHz          │
│  ✗ Remove videos shorter than minimum duration       │
│                                                      │
│  Rejection rate: ~40-60% (estimated)                 │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│            STAGE 2: QUALITY ASSESSMENT               │
│                                                      │
│  AudioBox Aesthetic Scoring:                         │
│    → Evaluate overall audio aesthetic quality        │
│    → Filter below threshold                          │
│                                                      │
│  Signal-to-Noise Ratio (SNR):                        │
│    → Compute SNR for each sample                     │
│    → Filter low-SNR samples (< 20dB threshold)       │
│                                                      │
│  Rejection rate: ~20-30% (estimated)                 │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│         STAGE 3: ALIGNMENT VERIFICATION              │
│                                                      │
│  Semantic Alignment (ImageBind):                     │
│    → Compute video-audio embedding similarity        │
│    → Filter semantically mismatched pairs            │
│                                                      │
│  Temporal Alignment (AV-align):                      │
│    → Verify frame-level audio-visual sync            │
│    → Filter temporally misaligned pairs              │
│                                                      │
│  Rejection rate: ~15-25% (estimated)                 │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│          STAGE 4: AUTOMATED ANNOTATION               │
│                                                      │
│  Speech/Music Detection:                             │
│    → Classify audio segments as speech/music/other   │
│    → Generate presence labels per track type         │
│                                                      │
│  Audio Classification:                               │
│    → Categorize sound events (AudioSet ontology)     │
│    → Generate event-level labels                     │
│                                                      │
│  Audio Captioning (GenAU):                           │
│    → Generate natural language descriptions          │
│    → Include acoustic characteristics                │
│                                                      │
│  Output: Text-Video-Audio triplets with annotations  │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│              FINAL DATASET: 100K HOURS               │
│                                                      │
│  Format: Text-Video-Audio triplets                   │
│  Audio: 48kHz, high-fidelity                         │
│  Annotations: Captions + category labels             │
│  Quality: Verified semantic + temporal alignment     │
└─────────────────────────────────────────────────────┘
```

**Key Design Decisions**:
1. **Multi-stage filtering**: Each stage removes different types of bad data
2. **Automated annotation**: No human annotation at scale (GenAU for captions)
3. **Dual alignment verification**: Both semantic (ImageBind) and temporal (AV-align)
4. **Quality-first**: Aggressive filtering ensures high-quality training data

---

### 2.2 OVI Pipeline (Millions of Videos)

```
┌─────────────────────────────────────────────────────┐
│              DATA COLLECTION (TWO TYPES)             │
│                                                      │
│  Type A: Paired Audio-Video Data                     │
│    → Human/non-human multi-scenario                  │
│    → For learning audio-video modality alignment     │
│                                                      │
│  Type B: Pure Audio Data                             │
│    → 12-second long audio (pretraining)              │
│    → 5-second short audio (fine-tuning)              │
│    → For acoustic foundation model training          │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│     PAIRED AV DATA PROCESSING (4 STEPS)              │
│                                                      │
│  Step 1: Segmentation & Filtering                    │
│    → Scene detection → 121-frame segments            │
│    → Filter low-resolution videos                    │
│    → Filter static/near-static videos                │
│    → Balance: single/multi/no-person ratios          │
│                                                      │
│  Step 2: Synchronization Detection                   │
│    → SyncNet analysis on speech segments             │
│    → Strict thresholds:                              │
│      |offset| ≤ 3 frames                             │
│      confidence > 1.5                                │
│      minimum volume > -60dB                          │
│    → Reject lip-sync failures                        │
│                                                      │
│  Step 3: Caption Annotation                          │
│    → MLLM generates detailed descriptions            │
│    → Speech segments: <S>text<E> tags                │
│    → Audio descriptions: <AUDCAP>desc<ENDAUDCAP>     │
│    → Captures visual AND acoustic events             │
│                                                      │
│  Step 4: Packaging                                   │
│    → Unify resolution: 720×720                       │
│    → Extract frames: 24fps → byte format             │
│    → Audio: raw waveform bytes                       │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│     PURE AUDIO DATA PROCESSING                       │
│                                                      │
│  Extract two durations:                              │
│    → 12-second (pretraining): speech-focused         │
│    → 5.04-second (fine-tuning): matches 121 frames   │
│                                                      │
│  MLLM annotation:                                    │
│    → Speech transcription (if speech present)        │
│    → Audio description (always)                      │
│    → Simplified pipeline (no video processing)       │
└─────────────────────────────────────────────────────┘
```

**Key Design Decisions**:
1. **Two data types**: Paired AV for alignment, pure audio for acoustic quality
2. **Strict sync filtering**: SyncNet with tight thresholds (|offset|≤3, confidence>1.5)
3. **Temporal tags in captions**: `<S>/<E>` for speech, `<AUDCAP>/<ENDAUDCAP>` for audio
4. **Person balance**: Explicit balancing of single/multi/no-person videos
5. **Fixed segment length**: 121 frames (5.04s at 24fps) for consistent training

---

### 2.3 Seedance Pipeline (Multi-Source)

```
┌─────────────────────────────────────────────────────┐
│         MULTI-SOURCE DATA COLLECTION                 │
│                                                      │
│  Sources: Public/licensed video libraries             │
│  Diversity axes:                                     │
│    → Duration (short clips to long videos)           │
│    → Resolution (480p to 4K)                         │
│    → Subject (people, animals, objects, scenes)      │
│    → Scene (indoor, outdoor, studio, nature)         │
│    → Style (realistic, animated, artistic)           │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│         MULTI-STAGE DATA REFINEMENT                  │
│                                                      │
│  Stage 1: Shot-Aware Temporal Segmentation           │
│    → Scene detection for shot boundaries             │
│    → Segment into coherent shots                     │
│                                                      │
│  Stage 2: Visual Overlay Correction                  │
│    → Remove logos, watermarks                        │
│    → Remove burned-in subtitles                      │
│    → Clean visual artifacts                          │
│                                                      │
│  Stage 3: Quality & Safety Filtering                 │
│    → Technical quality assessment                    │
│    → Content safety filtering                        │
│    → Remove inappropriate content                    │
│                                                      │
│  Stage 4: Semantic Deduplication                     │
│    → Remove near-duplicate clips                     │
│    → Ensure content diversity                        │
│                                                      │
│  Stage 5: Distribution Rebalancing                   │
│    → Address class imbalance                         │
│    → Ensure representation across categories         │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│         VIDEO CAPTIONING & ENCODING                  │
│                                                      │
│  Bilingual Dense Video Captioning (Tarsier2-based):  │
│    → Static features: objects, scene, style          │
│    → Dynamic features: motion, actions, events       │
│    → Chinese + English descriptions                  │
│                                                      │
│  VAE Encoding:                                       │
│    → Compress video to latent representations        │
│    → Generate visual embeddings for training         │
│                                                      │
│  Audio Processing (Seedance 1.5/2.0):                │
│    → Audio quality assessment                        │
│    → Audio-visual alignment verification             │
│    → Multi-track audio description                   │
└─────────────────────────────────────────────────────┘
```

**Key Design Decisions**:
1. **Multi-source diversity**: Maximize coverage across all dimensions
2. **Visual cleanup**: Remove overlays that could confuse the model
3. **Semantic deduplication**: Prevent overfitting to repeated content
4. **Distribution rebalancing**: Address long-tail distribution issues
5. **Bilingual captioning**: Chinese + English for multilingual support

---

### 2.4 UniAVGen Pipeline (1.3M Samples)

```
┌─────────────────────────────────────────────────────┐
│         THREE-STAGE DATA STRATEGY                    │
│                                                      │
│  Stage 1 Data: Emilia Multilingual Audio             │
│    → Large-scale multilingual speech dataset         │
│    → Used for audio branch pretraining               │
│    → No video component needed                       │
│                                                      │
│  Stage 2 Data: Proprietary Real-Person AV            │
│    → Real human speakers with video                  │
│    → High-quality lip-sync ground truth              │
│    → Face region annotations                         │
│    → Used for joint AV training                      │
│                                                      │
│  Stage 3 Data: Multi-Task Samples                    │
│    → 5 task types with specific data requirements    │
│    → Task ratio: 4:1:1:2:2                           │
│    → Used for multi-task fine-tuning                 │
└─────────────────────────────────────────────────────┘
```

**Key Design Decisions**:
1. **Staged data strategy**: Different data for different training phases
2. **Small but high-quality**: 1.3M samples (vs OVI's millions) but carefully curated
3. **Face-focused**: Emphasis on real-person data with face annotations
4. **Multi-task data**: Explicit task-specific data preparation

---

### 2.5 AutoMV Pipeline (Music-Specific)

```
┌─────────────────────────────────────────────────────┐
│         MUSIC-SPECIFIC PREPROCESSING                 │
│                                                      │
│  Input: Complete song audio file                     │
│                                                      │
│  Step 1: Music Analysis (Qwen2.5-Omni)              │
│    → Style, mood, instruments, vocal attributes      │
│    → Natural language description                    │
│                                                      │
│  Step 2: Structure Segmentation (SongFormer)         │
│    → Intro / Verse / Pre-Chorus / Chorus / Bridge    │
│    → Timestamps for each section                     │
│    → Semantic grouping for shot planning             │
│                                                      │
│  Step 3: Source Separation (htdemucs)                │
│    → Vocal track (for lip-sync)                      │
│    → Instrumental track (for background)             │
│                                                      │
│  Step 4: Lyric Transcription (Whisper + Gemini)      │
│    → Word-level transcription                        │
│    → Timestamp optimization                          │
│    → Precise lyric-audio alignment                   │
│                                                      │
│  Output: Structured music metadata for MV generation │
└─────────────────────────────────────────────────────┘
```

**Key Design Decisions**:
1. **Music-domain specific**: Tailored for music video generation
2. **Source separation**: Critical for lip-sync in singing scenes
3. **Structure-aware**: Song structure drives video shot planning
4. **Multi-tool pipeline**: Different tools for different aspects

---

## 3. Audio Annotation Tools Comparison

### 3.1 Speech/Dialogue Annotation

| Tool | Purpose | Used By | Accuracy | Speed |
|------|---------|---------|----------|-------|
| **Whisper** | Speech transcription | OVI, AutoMV, UniAVGen | High (WER ~5-10%) | Fast |
| **Gemini** | Transcription refinement | AutoMV | Very High | Medium |
| **Forced Aligner** | Phoneme alignment | UniAVGen (implied) | High | Fast |
| **SyncNet** | Lip-sync detection | OVI, UniAVGen | High | Fast |

### 3.2 Music Annotation

| Tool | Purpose | Used By | Output |
|------|---------|---------|--------|
| **SongFormer** | Structure segmentation | AutoMV | Section labels + timestamps |
| **Qwen2.5-Omni** | Music description | AutoMV | NL description (style, mood, instruments) |
| **htdemucs** | Source separation | AutoMV | Vocal + instrumental tracks |
| **Beat tracking** | Tempo/rhythm | AutoMV (implied) | BPM, beat timestamps |

### 3.3 Sound Effect Annotation

| Tool | Purpose | Used By | Output |
|------|---------|---------|--------|
| **Audio classification** | Event categorization | HunyuanVideo-Foley | Category labels |
| **Speech/music detection** | Track type classification | HunyuanVideo-Foley | Presence labels |
| **GenAU** | Audio captioning | HunyuanVideo-Foley | NL descriptions |
| **AudioBox** | Aesthetic scoring | HunyuanVideo-Foley | Quality scores |

### 3.4 Alignment Verification

| Tool | Purpose | Used By | Output |
|------|---------|---------|--------|
| **ImageBind** | Semantic alignment | HunyuanVideo-Foley | Similarity score |
| **AV-align** | Temporal alignment | HunyuanVideo-Foley | Alignment score |
| **SyncNet** | Lip-sync alignment | OVI | Offset + confidence |
| **Synchformer** | Frame-level sync features | HunyuanVideo-Foley | Sync feature vectors |

---

## 4. Audio VAE Architectures (for Latent Space Training)

### 4.1 DAC-VAE (HunyuanVideo-Foley)

**Architecture**: Modified Descript Audio Codec (DAC) with variational autoencoder

**Key Modifications**:
- Replace discrete quantization with continuous VAE
- KL divergence loss instead of quantization loss
- 128-dimensional continuous latent space
- 48kHz output (professional-grade)

**Training Data**: 100K hours of audio
**Training Steps**: 700K steps

**Performance** (vs baselines):
| Metric | DAC-VAE | Original DAC | Stable Audio Open VAE |
|--------|---------|-------------|----------------------|
| PESQ ↑ | Best | Medium | Lower |
| STOI ↑ | Best | Medium | Lower |
| SI-SDR ↑ | Best | Medium | Lower |
| Mel Distance ↓ | Best | Medium | Higher |

### 4.2 1D-VAE (OVI)

**Architecture**: 1D variational autoencoder for audio

**Characteristics**:
- 16kHz output (limitation acknowledged)
- Compact latent space
- BigVGAN decoder for waveform reconstruction

**Limitation**: 16kHz sampling rate limits audio bandwidth and spatial realism. Authors note this as a key area for improvement.

### 4.3 Audio Tokenization Comparison

| Model | VAE Type | Sampling Rate | Latent Dim | Decoder |
|-------|----------|--------------|------------|---------|
| HunyuanVideo-Foley | DAC-VAE (continuous) | 48kHz | 128 | DAC-VAE decoder |
| OVI | 1D-VAE | 16kHz | - | BigVGAN |
| UniAVGen | Wan-based | - | - | - |
| Seedance 2.0 | Proprietary | 48kHz (implied) | - | - |

---

## 5. Data Quality Metrics and Thresholds

### 5.1 Audio Quality Thresholds

| Metric | Minimum | Recommended | Source |
|--------|---------|-------------|--------|
| Sampling Rate | 32kHz | 48kHz | HunyuanVideo-Foley |
| SNR | 20dB | 30dB+ | HunyuanVideo-Foley |
| Silence Ratio | <80% | <50% | HunyuanVideo-Foley |
| Clipping | None | None | General best practice |
| Dynamic Range | >20dB | >40dB | General best practice |

### 5.2 Synchronization Thresholds

| Metric | Minimum | Recommended | Source |
|--------|---------|-------------|--------|
| SyncNet Offset | ≤5 frames | ≤3 frames | OVI |
| SyncNet Confidence | >1.0 | >1.5 | OVI |
| Minimum Volume | >-60dB | >-40dB | OVI |
| ImageBind Similarity | >0.3 | >0.5 | HunyuanVideo-Foley |
| DeSync Score | <0.5s | <0.2s | HunyuanVideo-Foley |

### 5.3 Content Quality Thresholds

| Metric | Minimum | Recommended | Source |
|--------|---------|-------------|--------|
| AudioBox Aesthetic | >0.3 | >0.5 | HunyuanVideo-Foley |
| Caption Length | >5 words | >15 words | OVI |
| Video Resolution | 480p | 720p+ | OVI, Seedance |
| Frame Rate | 12fps | 24fps | OVI, Seedance |

---

## 6. Scaling Considerations

### 6.1 Compute Requirements

| Pipeline Stage | Compute Type | Estimated Cost per 1K Hours |
|---------------|-------------|---------------------------|
| Basic Filtering | CPU | Low (~$10) |
| Quality Assessment | GPU (AudioBox) | Medium (~$50) |
| Alignment Verification | GPU (ImageBind, AV-align) | Medium (~$100) |
| Audio Captioning | GPU (MLLM) | High (~$500) |
| Speech Transcription | GPU (Whisper) | Medium (~$50) |
| Source Separation | GPU (htdemucs) | Medium (~$100) |
| **Total** | **Mixed** | **~$800 per 1K hours** |

### 6.2 Storage Requirements

| Data Type | Size per Hour | 100K Hours |
|-----------|-------------|------------|
| Raw Video (720p, 24fps) | ~3 GB | ~300 TB |
| Raw Audio (48kHz, 16-bit) | ~350 MB | ~35 TB |
| Latent Representations | ~50 MB | ~5 TB |
| Annotations (JSON) | ~1 MB | ~100 GB |
| **Total** | **~3.4 GB** | **~340 TB** |

### 6.3 Pipeline Throughput

| Stage | Throughput (hours/GPU-hour) | Bottleneck |
|-------|---------------------------|------------|
| Basic Filtering | ~1000 | CPU I/O |
| Quality Assessment | ~100 | GPU inference |
| Alignment Verification | ~50 | GPU inference |
| Audio Captioning | ~10 | MLLM inference |
| **Overall Pipeline** | **~10** | **MLLM captioning** |

**Scaling Strategy**:
- Parallelize across multiple GPUs
- Use smaller/faster models for initial filtering
- Reserve large MLLMs for final captioning stage
- Cache intermediate results

---

## 7. Recommendations for Seedance-Label

### 7.1 Minimum Viable Pipeline

For initial dataset construction (target: 10K hours):

```
Stage 1: Collection & Basic Filtering (CPU)
    → Audio presence, silence ratio, sampling rate
    → Estimated rejection: 50%

Stage 2: Quality Filtering (GPU)
    → SNR computation
    → Basic audio classification (speech/music/other)
    → Estimated rejection: 25%

Stage 3: Alignment Verification (GPU)
    → ImageBind semantic alignment
    → SyncNet lip-sync detection (for speech segments)
    → Estimated rejection: 20%

Stage 4: Automated Annotation (GPU)
    → Whisper transcription (for speech)
    → Audio event detection (for sound effects)
    → MLLM captioning (for all samples)
    → No rejection, annotation only

Stage 5: Human Validation (Manual)
    → Sample-based quality check (5-10% of dataset)
    → Edge case refinement
    → Quality rating annotation
```

### 7.2 Advanced Pipeline (for 100K+ hours)

Add to minimum viable pipeline:

- **Source separation** (htdemucs) for multi-track annotation
- **Beat tracking** for music-containing segments
- **Phoneme alignment** for dialogue segments
- **Spatial audio analysis** for sound effect positioning
- **Distribution rebalancing** to address class imbalance
- **Semantic deduplication** to prevent overfitting

### 7.3 Integration with Label Studio

**Pre-annotation workflow**:
1. Run automated pipeline on raw data
2. Import pre-annotated data into Label Studio
3. Human annotators review and refine
4. Export validated annotations for training

**Label Studio task types**:
- **Audio classification**: Track type labeling
- **Audio segmentation**: Temporal event boundaries
- **Audio captioning**: Natural language descriptions
- **Quality rating**: Likert scale assessments
- **Synchronization review**: Audio-video alignment verification

---

## 8. Key Datasets and Benchmarks Reference

### 8.1 Training Datasets

| Dataset | Type | Size | Audio | Video | Annotations |
|---------|------|------|-------|-------|-------------|
| AudioSet | Classification | 5.8K hrs | General | YouTube | 527 classes |
| VGGSound | AV Correspondence | 550 hrs | General | YouTube | 310 classes |
| Emilia | Speech | Large | Multilingual | None | Transcriptions |
| LibriTTS | Speech | 585 hrs | English | None | Transcriptions |
| MUSIC | Music-Visual | 714 clips | Instruments | YouTube | Instrument labels |

### 8.2 Evaluation Benchmarks

| Benchmark | Focus | Metrics | Used By |
|-----------|-------|---------|---------|
| MovieGen-Audio-Bench | V2A generation | PQ, PC, CE, CU, IB, DeSync, CLAP, MOS | HunyuanVideo-Foley |
| Kling-Audio-Eval | V2A generation | FD, KL, IS, PQ, IB, DeSync, CLAP | HunyuanVideo-Foley |
| VGGSound-Test | V2A generation | FD, KL, IS | HunyuanVideo-Foley |
| SeedVideoBench 1.5 | AV joint generation | Audio prompt following, quality, sync, expressiveness | Seedance 1.5/2.0 |

### 8.3 Evaluation Metrics Glossary

| Metric | Full Name | Direction | What It Measures |
|--------|-----------|-----------|-----------------|
| FD_PANNs | Fréchet Distance (PANNs) | ↓ | Distribution match (audio quality) |
| FD_PASST | Fréchet Distance (PASST) | ↓ | Distribution match (audio quality) |
| KL | Kullback-Leibler Divergence | ↓ | Distribution match |
| IS | Inception Score | ↑ | Perceptual quality + diversity |
| PQ | Production Quality | ↑ | Overall audio production quality |
| PC | Perceptual Clarity | ↓ | Noise/artifact level |
| CE | Content Expressiveness | ↑ | Emotional/thematic richness |
| CU | Content Usefulness | ↑ | Practical applicability |
| IB | ImageBind Score | ↑ | Visual-semantic alignment |
| DeSync | Desynchronization Score | ↓ | Temporal misalignment |
| CLAP | CLAP Score | ↑ | Text-audio semantic alignment |
| MOS-Q | Mean Opinion Score - Quality | ↑ | Subjective audio quality |
| MOS-S | Mean Opinion Score - Semantic | ↑ | Subjective semantic alignment |
| MOS-T | Mean Opinion Score - Temporal | ↑ | Subjective temporal alignment |
| WER | Word Error Rate | ↓ | Speech transcription accuracy |
| LS | Lip Synchronization | ↑ | SyncNet-based lip-sync quality |
| TC | Timbre Consistency | ↑ | Speaker voice consistency |
| EC | Emotion Consistency | ↑ | Audio-visual emotion match |

---

## 9. Conclusion

Building large-scale audio-visual datasets for video generation requires:

1. **Automated multi-stage pipelines**: Manual annotation doesn't scale beyond ~1K hours
2. **Strict quality filtering**: Multiple stages targeting different quality dimensions
3. **Dual alignment verification**: Both semantic (ImageBind) and temporal (SyncNet/AV-align)
4. **MLLM-based captioning**: Rich natural language descriptions at scale
5. **Domain-specific tools**: Different tools for speech, music, and sound effects
6. **Quality-over-quantity**: Aggressive filtering (50-70% rejection) ensures training quality

The HunyuanVideo-Foley pipeline (100K hours) represents the current gold standard for automated audio-visual dataset construction, while OVI's strict synchronization filtering and Seedance's distribution rebalancing provide complementary best practices.

---

**Document Version**: 1.0
**Last Updated**: March 2, 2026
