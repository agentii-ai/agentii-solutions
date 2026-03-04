# Comprehensive Research Analysis: Audio Annotation/Labeling for Video Generation Models

**Research Date**: March 2, 2026
**Focus**: Audio annotation methodologies for training state-of-the-art video generation models with DiT architectures
**Scope**: Analysis of Seedance, OVI, HunyuanVideo-Foley, UniAVGen, AutoMV, and related SOTA models

---

## Executive Summary

This comprehensive analysis examines how state-of-the-art video generation models (2024-2026) approach audio annotation and labeling for training multimodal video-audio generation systems. The research reveals critical insights into:

1. **Multi-track audio annotation strategies** (dialogue, music, sound effects)
2. **Audio-visual synchronization labeling methodologies**
3. **Data pipeline architectures for large-scale audio-visual datasets**
4. **Audio quality and semantic alignment evaluation frameworks**

### Key Finding
Modern video generation models with DiT architectures (Seedance 1.5/2.0, OVI, HunyuanVideo-Foley, UniAVGen) have converged on **unified multimodal training approaches** that treat audio as a first-class modality alongside video, requiring sophisticated annotation pipelines that capture:
- **Temporal alignment** (frame-level synchronization)
- **Semantic correspondence** (audio-visual event matching)
- **Multi-track decomposition** (dialogue, music, ambient sound)
- **Quality metrics** (fidelity, naturalness, emotional alignment)

---

## 1. Audio Annotation Architectures in SOTA Models

### 1.1 Seedance 1.5 Pro & 2.0 (ByteDance)

**Architecture**: Dual-branch Diffusion Transformer (MMDiT) with native audio-video joint generation

#### Audio Annotation Strategy

**Multi-dimensional Audio Evaluation Framework** (SeedVideoBench 1.5):

1. **Audio Prompt Following** (音频提示词遵循)
   - Audio elements match user instructions
   - No semantic drift or missing sound effects
   - Correct dialect/language generation
   - **Annotation requirement**: Text descriptions of expected audio elements

2. **Audio Quality** (音频质量)
   - No clipping, truncation artifacts
   - Spatial soundfield realism
   - Natural timbre and clear signal
   - **Annotation requirement**: Quality ratings (1-5 scale)

3. **Audio-Visual Synchronization** (音视频同步)
   - Lip-sync accuracy (唇音匹配)
   - Sound effects aligned with visual events
   - Avoidance of "ventriloquism effect"
   - **Annotation requirement**: Frame-level temporal alignment labels

4. **Audio Expressiveness** (音频表现力)
   - Background music matches theme
   - Speech has emotional variation
   - Enhances narrative depth
   - **Annotation requirement**: Emotional/thematic tags

#### Data Pipeline Components

**Comprehensive Audio-Video Data Framework**:
- Multi-stage data curation pipeline
- Advanced captioning system for audio-video modalities
- Scalable infrastructure for paired audio-video processing
- **Priority**: Audio-video consistency, motion expressiveness

**Audio-Specific Annotations**:
- Professional-grade audio descriptions
- Multi-language/dialect labels (Mandarin, Cantonese, Shanghainese, Taiwanese Mandarin, etc.)
- Emotional tone markers
- Music genre/style tags
- Sound effect categories

#### Training Data Characteristics

**Seedance 2.0 Enhancements**:
- **Dual-channel stereo audio** capability
- Multi-track parallel output (background music, ambient sound, dialogue)
- 48kHz high-fidelity audio generation
- Frame-precise rhythm alignment

**Key Annotation Requirements**:
1. **Dialogue tracks**: Speaker identification, lip-sync markers, emotional tone
2. **Music tracks**: Genre, tempo, mood, scene-matching indicators
3. **Sound effects**: Event-sound correspondence, spatial positioning
4. **Temporal markers**: Beat alignment, scene transition audio cues

---

### 1.2 OVI (Character AI & Yale University)

**Architecture**: Symmetric dual-backbone DiT with chunked bidirectional cross-modal fusion

#### Audio Annotation Methodology

**Three-Stage Data Processing**:

1. **Paired Audio-Video Data**
   - Human/non-human multi-scenario data
   - Used for learning audio-video modality alignment
   - **Annotation**: Synchronization detection (SyncNet-based, |offset|≤3, confidence>1.5, min volume -60dB)

2. **Pure Audio Data**
   - 12-second long audio (pretraining): Human speech focus
   - 5-second short audio (fine-tuning): Mixed with sound effects
   - **Annotation**: Speech transcription + audio description via MLLM

3. **Caption Annotation**
   - MLLM-generated detailed annotations
   - Speech segments: `<S>` and `<E>` tags
   - Audio descriptions: `<AUDCAP>` and `<ENDAUDCAP>` tags
   - **Captures both visual and acoustic event temporality**

#### Audio-Visual Synchronization Labeling

**Strict Synchronization Filtering**:
- Scene detection → 121-frame segments
- Low-resolution/static video filtering
- Balance single-person/multi-person/no-person videos
- **SyncNet-based sync detection** with strict thresholds

**Key Innovation**: No explicit synchronization loss required during training. The model learns lip-sync, action-sound alignment through:
- Paired sampling
- Shared timesteps
- Cross-attention mechanisms between audio and video branches

---

### 1.3 HunyuanVideo-Foley (Tencent Hunyuan)

**Architecture**: Hybrid multimodal + unimodal transformer blocks with representation alignment

#### Audio Annotation Pipeline (100K Hours Dataset)

**Multi-Stage Automated Data Pipeline**:

1. **Basic Filtering**
   - Remove videos without audio
   - Filter silence >80%
   - Require sampling rate ≥32kHz

2. **Quality Assessment**
   - AudioBox aesthetic scoring
   - Signal-to-noise ratio (SNR) evaluation
   - **High-fidelity audio selection**

3. **Audio-Visual Alignment Verification**
   - **ImageBind**: Semantic alignment verification
   - **AV-align**: Temporal alignment verification
   - Ensures audio-visual correspondence

4. **Automated Annotation**
   - Speech/music detection
   - Audio classification → category labels
   - **GenAU**: Audio caption generation for each sample
   - **Result**: Text-video-audio triplets with rich semantic descriptions

#### Audio Quality Annotation Framework

**Evaluation Dimensions** (MovieGen-Audio-Bench, Kling-Audio-Eval):

1. **Production Quality (PQ)**: Overall audio fidelity
2. **Perceptual Clarity (PC)**: Noise and artifact levels
3. **Content Expressiveness (CE)**: Emotional and thematic richness
4. **Content Usefulness (CU)**: Practical applicability
5. **ImageBind Score (IB)**: Visual-semantic alignment
6. **DeSync Score**: Temporal misalignment measure
7. **CLAP Score**: Text-semantic alignment

**Subjective Metrics**:
- **MOS-Q**: Audio quality rating
- **MOS-S**: Semantic alignment rating
- **MOS-T**: Temporal alignment rating

#### Multi-Track Audio Considerations

**Foley Audio Focus**:
- Primarily scene-related sound effects
- Environmental ambience
- Object interaction sounds
- **Less emphasis on dialogue/music** (specialized Foley task)

**Annotation Requirements**:
- Event-sound correspondence labels
- Spatial audio positioning markers
- Material/texture sound characteristics
- Temporal onset/offset precision

---

### 1.4 UniAVGen (Nanjing University & Tencent Hunyuan)

**Architecture**: Asymmetric cross-modal interaction with face-aware modulation

#### Audio Annotation Strategy

**Three-Stage Training Data**:

1. **Stage 1: Audio Branch Training**
   - **Emilia multilingual audio dataset**
   - 160K training steps
   - Focus: Speech quality, linguistic diversity

2. **Stage 2: Joint Audio-Video Training**
   - **Proprietary real-person audio-video dataset**
   - Composite loss: video + audio + mask loss
   - 30K training steps
   - **Annotation**: Face region masks, lip-sync markers, speaker identity

3. **Stage 3: Multi-Task Learning**
   - 5 task types with 4:1:1:2:2 ratio:
     - Basic audio-video joint generation
     - Reference audio-guided generation (timbre control)
     - Audio-video continuation
     - Video-to-audio dubbing
     - Audio-driven video synthesis

#### Audio-Visual Consistency Annotation

**Evaluation Framework** (100 test samples):

1. **Audio Quality**
   - Production Quality (PQ)
   - Content Usefulness (CU)
   - Word Error Rate (WER) for speech

2. **Video Quality**
   - Subject Consistency (SC)
   - Dynamic Degree (DD)
   - Imaging Quality (IQ)

3. **Audio-Visual Consistency** (Core Focus)
   - **Lip Synchronization (LS)**: SyncNet evaluation
   - **Timbre Consistency (TC)**: Gemini-2.5-Pro evaluation
   - **Emotion Consistency (EC)**: Gemini-2.5-Pro evaluation

**Key Annotation Requirements**:
- Speaker identity labels
- Emotional state markers (per frame)
- Timbre reference samples
- Lip-sync ground truth (phoneme-level)

---

### 1.5 AutoMV (Beijing University of Posts & Telecommunications)

**Architecture**: Multi-agent system for music-to-video generation

#### Audio Annotation for Music Video Generation

**Music Information Retrieval (MIR) Tools**:

1. **Qwen2.5-Omni**
   - Song style, mood, instruments
   - Vocal attributes
   - **Natural language descriptions**

2. **SongFormer**
   - Song structure segmentation: intro/verse/chorus/bridge
   - **Semantic grouping for shot planning**

3. **htdemucs**
   - Vocal/accompaniment separation
   - **Supports lip-sync and lyric transcription**

4. **Whisper + Gemini**
   - Lyric transcription
   - Timestamp optimization
   - **Precise lyric-audio alignment**

#### Multi-Track Audio Considerations

**Music Video Audio Tracks**:
1. **Vocal track**: Separated for lip-sync generation
2. **Instrumental track**: Background music reference
3. **Combined track**: Final audio output

**Annotation Requirements**:
- Beat/tempo markers
- Song structure labels (verse, chorus, bridge)
- Lyric timestamps (word-level)
- Emotional arc annotations
- Musical intensity curves

---

## 2. Common Audio Annotation Patterns Across SOTA Models

### 2.1 Temporal Alignment Annotation

**Universal Requirements**:
- **Frame-level synchronization labels**
- **Event-sound correspondence markers**
- **Onset/offset timestamps** (millisecond precision)
- **Beat/rhythm alignment** (for music-related content)

**Annotation Tools**:
- SyncNet (lip-sync detection)
- AV-align (temporal alignment verification)
- Synchformer (frame-level synchronization features)

### 2.2 Semantic Annotation

**Multi-Level Semantic Labels**:

1. **Audio Event Categories**
   - Speech (dialogue, narration, singing)
   - Music (genre, mood, tempo)
   - Sound effects (environmental, object interaction, ambient)

2. **Audio Descriptions**
   - Natural language captions (MLLM-generated)
   - Detailed acoustic characteristics
   - Emotional/thematic tags

3. **Audio-Visual Correspondence**
   - Visual event → expected sound mapping
   - Spatial audio positioning
   - Causal relationships (action → sound)

### 2.3 Quality Annotation

**Objective Metrics**:
- Signal-to-noise ratio (SNR)
- Frequency response characteristics
- Dynamic range
- Sampling rate/bit depth

**Subjective Metrics**:
- Production quality ratings (1-5 or 1-10 scale)
- Naturalness scores
- Emotional expressiveness
- Aesthetic quality

### 2.4 Multi-Track Decomposition Annotation

**Track Separation Labels**:

1. **Dialogue Track**
   - Speaker identification
   - Emotional tone
   - Linguistic content (transcription)
   - Lip-sync markers

2. **Music Track**
   - Genre/style
   - Tempo/rhythm
   - Mood/emotion
   - Scene-matching indicators

3. **Sound Effects Track**
   - Event categories
   - Spatial positioning
   - Material/texture characteristics
   - Intensity levels

4. **Ambient Sound Track**
   - Environmental context
   - Atmospheric qualities
   - Background noise characteristics

---

## 3. Audio Annotation Challenges & Solutions

### 3.1 Data Scarcity Challenge

**Problem**: High-quality paired audio-video data is scarce (existing datasets ~550 hours)

**Solutions**:
1. **Automated annotation pipelines** (HunyuanVideo-Foley: 100K hours)
2. **MLLM-based caption generation** (OVI, HunyuanVideo-Foley)
3. **Multi-stage filtering** to ensure quality over quantity
4. **Synthetic data augmentation** (not widely adopted yet)

### 3.2 Modality Imbalance Challenge

**Problem**: Over-reliance on text modality, insufficient visual semantic response

**Solutions**:
1. **Dual-stage attention mechanisms** (UniAVGen)
2. **Asymmetric cross-modal interaction** (UniAVGen)
3. **Face-aware modulation** (UniAVGen)
4. **Balanced multimodal fusion** (HunyuanVideo-Foley, Seedance)

### 3.3 Synchronization Annotation Challenge

**Problem**: Frame-precise temporal alignment is labor-intensive

**Solutions**:
1. **Automated sync detection** (SyncNet, AV-align)
2. **Self-supervised learning** (no explicit sync loss required)
3. **Synchformer-based features** (HunyuanVideo-Foley)
4. **Shared timestep training** (OVI)

### 3.4 Multi-Track Annotation Challenge

**Problem**: Separating and labeling individual audio tracks (dialogue, music, effects)

**Solutions**:
1. **Audio source separation** (htdemucs for vocals/accompaniment)
2. **Audio classification models** (speech/music detection)
3. **Event-based annotation** (sound effect categories)
4. **Hierarchical labeling** (track → event → characteristics)

---

## 4. Audio Annotation Taxonomy for Video Generation

### 4.1 Temporal Dimension

**Annotation Types**:
- **Global**: Entire video duration
- **Segment**: Scene/shot-level (2-15 seconds)
- **Frame**: Frame-precise (33ms for 30fps)
- **Sub-frame**: Phoneme/beat-level (<33ms)

**Use Cases**:
- Global: Overall audio style, mood
- Segment: Scene-specific sound design
- Frame: Lip-sync, action-sound alignment
- Sub-frame: Musical beat alignment, phoneme timing

### 4.2 Semantic Dimension

**Annotation Hierarchy**:

```
Audio Annotation
├── Audio Type
│   ├── Speech
│   │   ├── Dialogue
│   │   ├── Narration
│   │   └── Singing
│   ├── Music
│   │   ├── Background Score
│   │   ├── Diegetic Music
│   │   └── Theme Music
│   └── Sound Effects
│       ├── Environmental
│       ├── Object Interaction
│       └── Ambient
├── Audio Characteristics
│   ├── Acoustic Properties
│   │   ├── Frequency Range
│   │   ├── Dynamic Range
│   │   └── Spatial Positioning
│   ├── Semantic Properties
│   │   ├── Event Category
│   │   ├── Emotional Tone
│   │   └── Narrative Function
│   └── Quality Properties
│       ├── Fidelity
│       ├── Naturalness
│       └── Aesthetic Quality
└── Audio-Visual Correspondence
    ├── Synchronization
    │   ├── Lip-Sync
    │   ├── Action-Sound Alignment
    │   └── Beat-Motion Alignment
    ├── Semantic Alignment
    │   ├── Visual Event → Sound Mapping
    │   ├── Emotional Consistency
    │   └── Thematic Coherence
    └── Spatial Alignment
        ├── Sound Source Localization
        ├── Acoustic Environment Matching
        └── Stereo/Spatial Audio Positioning
```

### 4.3 Quality Dimension

**Annotation Scales**:

1. **Objective Metrics** (Automated)
   - SNR (dB)
   - Frequency response (Hz)
   - Dynamic range (dB)
   - Sampling rate (kHz)

2. **Subjective Metrics** (Human-Annotated)
   - Production Quality: 1-5 or 1-10 scale
   - Naturalness: 1-5 scale
   - Emotional Expressiveness: 1-5 scale
   - Overall Satisfaction: 1-5 scale (MOS)

3. **Alignment Metrics** (Hybrid)
   - Lip-sync accuracy: SyncNet confidence score
   - Temporal alignment: DeSync score (lower is better)
   - Semantic alignment: CLAP/ImageBind score (higher is better)

---

## 5. Data Pipeline Architectures

### 5.1 HunyuanVideo-Foley Pipeline (100K Hours)

```
Raw Video Collection
    ↓
Basic Filtering (audio presence, silence ratio, sampling rate)
    ↓
Quality Assessment (AudioBox aesthetic, SNR)
    ↓
Alignment Verification (ImageBind semantic, AV-align temporal)
    ↓
Automated Annotation (speech/music detection, classification, GenAU captions)
    ↓
Final Dataset: Text-Video-Audio Triplets
```

**Key Features**:
- Fully automated (scalable to 100K+ hours)
- Multi-stage quality gates
- Semantic + temporal alignment verification
- Rich text annotations via MLLM

### 5.2 OVI Pipeline (Millions of Videos)

```
Data Collection (paired AV + pure audio)
    ↓
Segmentation & Filtering (scene detection, resolution/static filtering)
    ↓
Synchronization Detection (SyncNet, strict thresholds)
    ↓
Caption Annotation (MLLM with temporal tags)
    ↓
Packaging (720×720 video, 24fps, raw audio waveform bytes)
```

**Key Features**:
- Balanced single/multi/no-person video ratios
- Strict sync filtering (|offset|≤3, confidence>1.5)
- Temporal tags in captions (`<S>`, `<E>`, `<AUDCAP>`, `<ENDAUDCAP>`)
- Unified resolution/framerate

### 5.3 Seedance Pipeline (Multi-Source)

```
Multi-Source Data Collection (public/licensed)
    ↓
Multi-Stage Refinement (shot-aware segmentation, overlay removal, quality/safety filtering)
    ↓
Semantic Deduplication & Distribution Rebalancing
    ↓
Video Captioning (Tarsier2-based, bilingual, dense descriptions)
    ↓
VAE Encoding (visual embeddings)
    ↓
Final Dataset: Text + Visual Features
```

**Key Features**:
- Multi-source diversity (duration, resolution, subject, scene, style)
- Advanced bilingual captioning (static + dynamic features)
- Distribution rebalancing (address class imbalance)
- Integrated VAE encoding

---

## 6. Audio Evaluation Frameworks

### 6.1 SeedVideoBench 1.5 (Seedance)

**Audio-Specific Metrics**:

1. **Audio Prompt Following** (音频提示词遵循)
   - Evaluation: Human expert rating (1-5 scale)
   - Criteria: Element completeness, semantic accuracy, language/dialect correctness

2. **Audio Quality** (音频质量)
   - Evaluation: Human expert rating (1-5 scale)
   - Criteria: No artifacts, spatial realism, timbre naturalness, signal clarity

3. **Audio-Visual Synchronization** (音视频同步)
   - Evaluation: Human expert rating (1-5 scale)
   - Criteria: Lip-sync accuracy, sound-event alignment, no ventriloquism

4. **Audio Expressiveness** (音频表现力)
   - Evaluation: Human expert rating (1-5 scale)
   - Criteria: Music-theme matching, emotional variation, narrative enhancement

**Evaluation Method**:
- Absolute scoring (5-point Likert scale)
- GSB pairwise comparison (Good/Same/Bad)
- Professional evaluators (film directors, cinematographers, designers)

### 6.2 MovieGen-Audio-Bench & Kling-Audio-Eval

**Objective Metrics**:
- **FD_PANNs, FD_PASST**: Fréchet Distance (distribution matching)
- **KL**: Kullback-Leibler divergence
- **IS**: Inception Score (perceptual quality)
- **PQ**: Production Quality
- **PC**: Perceptual Clarity
- **CE**: Content Expressiveness
- **CU**: Content Usefulness
- **IB**: ImageBind score (visual-semantic alignment)
- **DeSync**: Temporal misalignment score
- **CLAP**: Text-semantic alignment

**Subjective Metrics**:
- **MOS-Q**: Mean Opinion Score - Quality
- **MOS-S**: Mean Opinion Score - Semantic alignment
- **MOS-T**: Mean Opinion Score - Temporal alignment

---

## 7. Key Insights for Audio Annotation in Video Generation

### 7.1 Critical Annotation Requirements

**For Training DiT-based Video-Audio Models**:

1. **Temporal Precision**
   - Frame-level synchronization labels (minimum)
   - Sub-frame precision for lip-sync (phoneme-level)
   - Beat/rhythm markers for music-related content

2. **Semantic Richness**
   - Natural language audio descriptions (MLLM-generated)
   - Multi-level categorization (type → event → characteristics)
   - Emotional/thematic tags

3. **Quality Assurance**
   - Automated quality filtering (SNR, aesthetic scoring)
   - Human validation for critical samples
   - Multi-stage verification (semantic + temporal alignment)

4. **Multi-Track Awareness**
   - Track separation labels (dialogue, music, effects, ambient)
   - Track-specific characteristics
   - Inter-track relationships (e.g., music supports dialogue emotion)

### 7.2 Annotation Efficiency Strategies

**Automated Annotation**:
- MLLM-based caption generation (OVI, HunyuanVideo-Foley)
- Audio classification models (speech/music/effects detection)
- Sync detection algorithms (SyncNet, AV-align)
- Quality assessment tools (AudioBox, SNR calculation)

**Human-in-the-Loop**:
- Quality validation (sample-based)
- Edge case annotation (complex scenes)
- Subjective metric evaluation (MOS, expressiveness)
- Error correction (automated annotation refinement)

**Hybrid Approaches**:
- Automated pre-annotation → human refinement
- Multi-stage filtering → final human validation
- Automated metrics → human interpretation

### 7.3 Emerging Trends (2025-2026)

**Based on Analyzed Papers**:

1. **Unified Multimodal Training**
   - Audio as first-class modality (not post-processing)
   - Joint audio-video latent spaces
   - Shared timestep training

2. **Representation Alignment**
   - Pre-trained audio features guide training (REPA in HunyuanVideo-Foley)
   - Cross-modal feature alignment losses
   - Self-supervised synchronization learning

3. **Multi-Task Learning**
   - Single model for multiple audio-video tasks
   - Task-specific annotation requirements
   - Flexible input/output modalities

4. **High-Fidelity Audio**
   - 48kHz sampling rate (HunyuanVideo-Foley, Seedance 2.0)
   - Dual-channel stereo (Seedance 2.0)
   - Professional-grade quality standards

5. **Automated Evaluation**
   - VLM-based quality assessment (Gemini-2.5-Pro)
   - Multi-dimensional objective metrics
   - Reduced reliance on human evaluation

---

## 8. Recommendations for Seedance-Label Project

### 8.1 Audio Annotation Taxonomy

**Proposed Dimensions** (aligned with SOTA practices):

1. **Audio Track Type**
   - Dialogue
   - Background Music
   - Sound Effects
   - Ambient Sound

2. **Temporal Alignment**
   - Frame-level sync markers
   - Event onset/offset timestamps
   - Beat/rhythm alignment (for music)

3. **Semantic Labels**
   - Audio event categories
   - Emotional tone
   - Narrative function
   - Natural language descriptions

4. **Quality Metrics**
   - Production quality (1-5 scale)
   - Naturalness (1-5 scale)
   - Synchronization accuracy (1-5 scale)
   - Expressiveness (1-5 scale)

5. **Audio-Visual Correspondence**
   - Lip-sync accuracy (for dialogue)
   - Action-sound alignment (for effects)
   - Mood-music matching (for scores)
   - Spatial positioning

### 8.2 Data Pipeline Recommendations

**Inspired by HunyuanVideo-Foley & OVI**:

1. **Automated Pre-Processing**
   - Audio presence detection
   - Silence ratio filtering
   - Sampling rate normalization
   - SNR-based quality filtering

2. **Alignment Verification**
   - SyncNet for lip-sync detection
   - ImageBind for semantic alignment
   - Custom temporal alignment tools

3. **Automated Annotation**
   - MLLM-based audio caption generation
   - Audio classification (speech/music/effects)
   - Event detection and categorization

4. **Human Validation**
   - Sample-based quality checks
   - Edge case refinement
   - Subjective metric evaluation

### 8.3 Evaluation Framework

**Multi-Dimensional Assessment** (inspired by SeedVideoBench 1.5):

1. **Audio Quality**
   - Fidelity, clarity, naturalness
   - No artifacts or distortions

2. **Audio-Visual Synchronization**
   - Lip-sync accuracy
   - Event-sound alignment
   - Temporal precision

3. **Audio Expressiveness**
   - Emotional richness
   - Narrative support
   - Thematic coherence

4. **Audio Prompt Following**
   - Instruction adherence
   - Element completeness
   - Creative appropriateness

---

## 9. Conclusion

The analysis of SOTA video generation models (Seedance, OVI, HunyuanVideo-Foley, UniAVGen, AutoMV) reveals a clear convergence toward **unified multimodal training** with sophisticated audio annotation requirements:

### Key Takeaways:

1. **Audio is a First-Class Modality**: Modern models treat audio as equal to video, requiring rich, multi-dimensional annotations

2. **Temporal Precision is Critical**: Frame-level (or sub-frame) synchronization labels are essential for high-quality audio-video generation

3. **Multi-Track Awareness**: Separate annotation of dialogue, music, and sound effects enables better control and quality

4. **Automated Pipelines are Essential**: Scaling to 100K+ hours requires automated annotation with human validation

5. **Evaluation Must Be Multi-Dimensional**: Quality, synchronization, expressiveness, and prompt-following all matter

6. **Representation Alignment is Emerging**: Using pre-trained audio features to guide training (REPA) shows promise

### For Seedance-Label Project:

The 13-dimension annotation taxonomy should incorporate:
- **Audio track type** (dialogue, music, effects, ambient)
- **Temporal alignment markers** (frame-level sync)
- **Semantic labels** (event categories, emotional tone)
- **Quality metrics** (production quality, naturalness, sync accuracy)
- **Audio-visual correspondence** (lip-sync, action-sound, mood-music)

This will enable training of next-generation video generation models (Seedance 2.0+, UniAVGen-style) that can generate synchronized, high-fidelity, multi-track audio alongside video.

---

## References

### Analyzed Papers:
1. **Seedance 1.5 Pro** (2512.13507v3) - ByteDance, December 2024
2. **Seedance 2.0** - ByteDance, 2025
3. **OVI** (2510.01284v1) - Character AI & Yale University, October 2024
4. **HunyuanVideo-Foley** (2508.16930v1) - Tencent Hunyuan, August 2024
5. **UniAVGen** (2511.03334v1) - Nanjing University & Tencent Hunyuan, November 2024
6. **AutoMV** (2512.12196v1) - Beijing University of Posts & Telecommunications, December 2024
7. **PhyGDPO** (2512.24551v2) - Meta, December 2024
8. **SPOTLIGHT** (2511.18102v1) - University of British Columbia, November 2024

### Key Datasets Mentioned:
- **Emilia**: Multilingual audio dataset (UniAVGen)
- **AudioSet**: General sound dataset
- **VGGSound**: Audio-visual dataset
- **MovieGen-Audio-Bench**: Audio generation evaluation benchmark
- **Kling-Audio-Eval**: Audio evaluation dataset
- **SeedVideoBench 1.5**: Seedance evaluation framework

### Key Tools & Models:
- **SyncNet**: Lip-sync detection
- **ImageBind**: Multimodal semantic alignment
- **AV-align**: Temporal alignment verification
- **Synchformer**: Audio-visual synchronization features
- **GenAU**: Audio caption generation
- **AudioBox**: Audio aesthetic scoring
- **htdemucs**: Audio source separation
- **Whisper**: Speech transcription
- **CLAP**: Text-audio alignment
- **Gemini-2.5-Pro**: Multimodal evaluation

---

**Document Version**: 1.0
**Last Updated**: March 2, 2026
**Author**: Research analysis based on SOTA papers (2024-2026)
