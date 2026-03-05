# Audio Annotation & Labeling for Video Generation Models
## Comprehensive Research Analysis (2024–2026)

**Compiled:** March 2, 2026  
**Focus:** How audio is annotated/labeled—specifically original scores, scene-related sounds, dialog, and multitrack audio—to train state-of-the-art video generation models with DiT architectures  
**Key Models Covered:** Seedance 1.0 / 1.5 pro, Movie Gen, Veo 3 / 3.1, MMAudio, HunyuanVideo-Foley, Kling-Foley, UniVerse-1, UniAVGen, JavisDiT, YingSound

---

## 1. Executive Summary

Training modern audio-visual generation models requires curating millions to hundreds of thousands of hours of video paired with rich, semantically accurate, temporally aligned audio labels. The field has converged on a **multi-track audio taxonomy** distinguishing at minimum three classes:

| Track Type | Description | Annotation Challenges |
|---|---|---|
| **Dialog / Speech** | Spoken words, lip-synced vocals | Temporal alignment to frames, language/dialect tags, ASR transcripts |
| **Original Score / Music (BGM)** | Background music, underscore, film score | Genre, mood, tempo, beat markers, source-separation from SFX/dialog |
| **Scene-Related Sounds / Foley / SFX** | Ambient, diegetic effects, environmental audio | Event-class labels, temporal onset/offset, multi-event overlap |

The dominant pipeline is **automated annotation at scale**, supplemented by human verification, because the data volumes needed (tens of thousands to hundreds of thousands of hours) make manual-only annotation infeasible.

---

## 2. Seedance 1.0 — Video-Only Baseline (arXiv:2506.09113, June 2025)

### Architecture
ByteDance's Seedance 1.0 is a **video-only** DiT foundation model based on flow matching with velocity prediction. It uses decoupled spatial and temporal layers with interleaved multimodal positional encoding.

### Data Curation & Captioning
Seedance 1.0 lays the groundwork for audio-visual generation by establishing a rigorous multi-stage video data pipeline:
- **Multi-source, multi-perspective curation**: diverse categories, styles, and sources
- **Precision video captioning system**: ensures accurate interpretation of user instructions; enabling fluent generation of complex video narratives
- **Multi-stage training**: pre-training → continue training (CT) → supervised fine-tuning (SFT) → RLHF
- **Resolution-aware noise scheduling**: higher-resolution/longer videos receive greater noise perturbation via logit-normal time sampling

### Audio Relevance
Seedance 1.0 is a **silent model** — it does not generate audio. However, its video captioning infrastructure and training pipeline directly informed Seedance 1.5 pro's extension to joint audio-visual generation.

---

## 3. Seedance 1.5 Pro — Native Audio-Visual Joint Generation (arXiv:2512.13507, December 2025)

### Architecture
Seedance 1.5 pro is a **dual-branch Diffusion Transformer (DiT)** model where video and audio streams are processed in parallel and fused via cross-modal attention modules. It extends the **MMDiT backbone** (from Stable Diffusion 3 / Flux) with:
- Explicit cross-modal fusion blocks
- Joint attention-based synchronization
- Parallel video and audio latent diffusion

### Multi-Stage Data Pipeline
The data pipeline is a core technical contribution:

1. **Large-scale collection**: professional-grade audio-visual datasets curated from diverse sources
2. **Curriculum-based data scheduling**: the model is progressively exposed to increasingly complex examples during training — starting with simpler audio-visual pairs and advancing to complex multi-speaker, multi-event scenarios
3. **Advanced captioning system**: rich, professional-grade descriptions covering both visual and audio modalities, enabling precise conditional generation
4. **Video-audio coherence prioritization**: clips are filtered or scored based on audio-visual synchrony quality

### Audio Stream Labeling
The benchmark **SeedVideoBench-1.5** reveals how audio was annotated:
- **Vocal types**: speech type (dialog, monologue), singing, non-verbal vocalizations
- **Vocal attributes**: language, dialect, emotional tone, prosody quality
- **Non-speech audio properties**: event categories, temporal dynamics, intensity profiles, spatial characteristics
- **Multidimensional labeling for audio stream**: combined tags enabling the reward models used in RLHF to evaluate audio quality across multiple dimensions

### Post-Training
- **SFT** on high-quality audio-visual datasets
- **RLHF** with multi-dimensional reward models specifically designed for audio-visual contexts: audio quality, visual quality, audio-visual synchrony, and lip-sync accuracy
- Evaluation extends to real-world scenarios including advertising, micro-dramas, and narrative-driven content

### Key Capabilities from Audio Annotation
- Precise multilingual and dialect lip-syncing (enabled by per-utterance language/dialect labels in training data)
- Dynamic cinematic camera control coordinated with audio events
- Enhanced narrative coherence across multi-shot sequences

---

## 4. Movie Gen — Meta's Multimodal Foundation (arXiv:2410.13720, October 2024 / February 2025)

### Architecture
A 30B-parameter transformer trained on a 73K token context window (up to 16 seconds at 16fps). Generates 1080p HD video with synchronized audio including background music and sound effects.

### Audio Generation Details
Movie Gen uses a dedicated **Movie Gen Audio** model that generates synchronized audio conditioned on video content. The audio model generates:
- **Sound effects** matched to on-screen actions
- **Background music** appropriate to the scene
- **Ambient noise** aligned to the visual environment

### Training Data Annotation
The 92-page Movie Gen technical report describes their audio annotation approach:
- Paired audio-visual datasets at 100M+ video-text pairs
- Audio captions describing both semantic content and temporal structure
- Source-separation to create clean training targets for each audio track type
- Human verification of audio-visual alignment quality

---

## 5. MMAudio — Multimodal Joint Training (arXiv:2412.15322, CVPR 2025)

### Architecture
MMAudio uses a **multimodal transformer** based on **MM-DiT blocks** (from SD3) with three parallel branches: video, text, and audio. It adds:
- **Aligned RoPE positional embeddings** to synchronize sequences of different frame rates
- **1D convolutional MLPs (ConvMLPs)** to capture local temporal structure  
- **Conditional synchronization module** that injects frame-aligned (24 fps) visual features for temporal alignment

### Training Datasets
MMAudio was trained on a combination of:
- **AudioSet** — large-scale audio event dataset with frame-level annotations
- **VGGSound** — YouTube video-audio pairs with audio classification labels
- **Freesound** — sound effects and ambient audio
- **AudioCaps** — audio with human-written text captions
- **WavCaps** — 7,600 hours of weakly-captioned audio from web sources

### Key Annotation Innovation: Multimodal Joint Training
The key insight of MMAudio is that **joint training on audio-text and audio-video data simultaneously** overcomes the scarcity of paired audio-visual annotations:
- Audio-text data (abundant) teaches semantic audio understanding
- Audio-visual data (sparse but temporally rich) teaches synchronization
- The unified MM-DiT architecture processes both data types in the same forward pass

### Results
157M-parameter model generates synchronized 8-second clips in 1.23 seconds; competitive with dedicated text-to-audio models despite being video-conditioned.

---

## 6. HunyuanVideo-Foley — Scalable Data Pipeline (arXiv:2508.16930, August 2025)

### Architecture
Tencent's HunyuanVideo-Foley uses:
- **18 MMDiT layers** (multimodal, processing audio + video + text jointly)
- **36 unimodal audio DiT layers** (audio stream only)
- Input encoders: **CLAP** (text), **SigLIP-2** (visual), **DAC-VAE** (audio)
- **REPA loss** (Representation Alignment) using pre-trained self-supervised audio features to guide latent diffusion training
- **Synchformer-based** frame-level synchronization with gated modulation

### Data Pipeline — Most Detailed Public Description

HunyuanVideo-Foley curated a **100,000-hour TV2A (Text-Video-to-Audio) dataset** via the following pipeline:

**Stage 1: Input Curation**
- Raw video datasets processed; videos without audio discarded
- Long videos segmented into 8-second clips via scene detection
- Segments with >80% silence ratio filtered out

**Stage 2: Quality Assurance**
- Bandwidth analysis: effective sampling rate must exceed 32 kHz
- Signal-to-noise ratio (SNR) filtering
- AudioBox-aesthetic-toolkit for perceptual quality scoring

**Stage 3: Automated Annotation**
- **Audio classification models** tag each segment with event categories
- **Speech-music detection models** distinguish between dialog, music, SFX, and silence
- These categorical tags enable **supervised class balancing** in training batches
- **Audio captions** generated via GenAU (automatic captioning model) providing concise textual descriptions of audio content

**Stage 4: Training Use**
- Category distribution balanced across speech-heavy, music-heavy, and SFX-heavy segments
- Text captions serve as conditioning signals for text-video-to-audio (TV2A) generation

### Key Contribution
The **speech-music detection** annotation step explicitly categorizes each clip as containing predominantly speech, music, SFX, or mixed audio — a structured multi-track taxonomy enabling the model to learn distinct generation behaviors for each category.

---

## 7. UniVerse-1 — Online Data Annotation Pipeline (arXiv:2509.06155, September 2025)

### Architecture
UniVerse-1 is a Veo3-like open-source model using a **Stitching of Experts (SoE)** paradigm: the WAN2.1 video generation model fused at block level with the Ace-step music generation model via **cross-modal MLP connectors**. Training used 7,600 hours of audio-video data.

### Critical Innovation: Online Data Annotation Pipeline

UniVerse-1 identified a fundamental problem with **offline/static annotation**: when fixed-length training clips are randomly sampled from pre-annotated videos, there is a **temporal and semantic misalignment** between the sampled clip and the pre-existing global caption. For audio specifically, even minor temporal shifts invalidate an audio annotation.

**Solution**: An **online data annotation pipeline** that:
- Runs as a dedicated server process concurrently with training
- Dynamically fetches raw video
- Processes clips in real-time to generate precisely aligned data-annotation pairs
- Populates a shared buffer consumed by the training process

This approach guarantees that every annotation describes exactly the clip being trained on at that moment — critical for audio-visual synchronization tasks.

### Verse-Bench Dataset Annotation
For evaluation, UniVerse-1 created the **Verse-Bench** benchmark with three annotation subsets:
- **Set1-I**: image-text pairs annotated with LLM-generated video/audio captions and **manual annotation** (205 samples)
- **Set2-V**: YouTube/Bilibili video clips annotated with LLM-generated captions and **Whisper-based ASR transcripts**, then human-verified (295 samples)  
- **Set3-Ted**: TED Talks processed with the same pipeline (100 samples)

---

## 8. UniAVGen — Asymmetric Cross-Modal Architecture (arXiv:2511.03334, November 2025)

Tencent Hunyuan's UniAVGen uses **dual parallel DiTs** for video and audio streams with cross-modal interaction layers. It demonstrates strong generalization to out-of-distribution domains (e.g., anime characters), compared to competitors like Ovi and UniVerse-1.

Training tasks supported:
1. **Joint audio-video generation** (default): text + reference image → synchronized audio + video
2. **Audio-driven video synthesis**: audio + text → video with lip sync
3. **Video-to-audio synthesis**: silent video + text → matching audio
4. **Audio-visual editing**: joint editing of both modalities

---

## 9. JavisDiT — Spatio-Temporal Prior Estimation (arXiv:2503.23377, March 2025)

### Architecture
JavisDiT uses a **dual-branch DiT** where each branch (video, audio) has:
- **ST-SelfAttn**: intra-modal aggregation
- **CrossAttn**: coarse text semantic injection
- **ST-CrossAttn**: fine-grained spatio-temporal prior integration
- **Bi-CrossAttn**: video-audio fusion

### Spatio-Temporal Prior Annotation
Rather than explicitly labeling audio event locations in training data, JavisDiT learns to **estimate** spatial and temporal priors from text prompts at inference. A lightweight 4-layer transformer estimates spatial tokens (where sounds originate in the frame) and temporal tokens (when events occur), trained to predict the mean and variance of Gaussian distributions over location-time space.

This approach bypasses the need for dense spatio-temporal audio event annotation during training.

---

## 10. JavisDiT++ — Audio-Video Direct Preference Optimization (arXiv:2602.19163, February 2026)

An extension of JavisDiT adding:
- **Modality-Specific Mixture-of-Experts (MS-MoE)**: separate FFN layers per modality with shared self-attention
- **Temporal-Aligned RoPE (TA-RoPE)**: aligns audio and video token position IDs on a unified temporal axis, enabling frame-level synchronization without explicit onset annotations
- **Audio-Video DPO (AV-DPO)**: preference optimization using multi-dimensional reward models evaluating quality, consistency, and synchrony

### Preference Data Curation
AV-DPO requires curated preference data with **winning/losing pairs** across dimensions:
- Audio quality
- Video quality  
- Audio-visual consistency
- Temporal synchrony
Reward models score each dimension, and normalized modality-aware ranking selects the preference pairs.

---

## 11. YingSound — Industrial-Level V2A with Human-in-the-Loop (arXiv:2412.09168, December 2024)

### Data Collection Pipeline (Most Detailed for SFX)

YingSound provides the most explicit description of a **sound-effects-focused** annotation pipeline:

**Step 1: Collection**
- Industrial-level video data collection at scale

**Step 2: Annotation**
- Human-in-the-loop for quality-critical annotations
- Precise **timestamp annotations** for each sound event
- **Label annotations**: sound event categories aligned with industry taxonomies

**Step 3: Filtering**
- **AV-Align metric**: filters low temporal alignment scores (audio-visual sync)
- **CLIP scoring**: filters semantically misaligned video-audio pairs
- **CLAP scoring**: additional semantic alignment filtering
- **Background music detection**: removes clips where BGM dominates SFX signal
- **ASR (Automatic Speech Recognition)**: removes speech-dominated clips

**Step 4: Cutting**
- Precise timestamp-based segmentation into clean, event-labeled clips

**Step 5: Output**
- High-quality audio-video-text dataset for SFX generation training

### Key Annotation Insight
YingSound explicitly states that **pure background music and speech must be detected and excluded** when building SFX-focused training data, demonstrating that the three track types (dialog, BGM, SFX) must be **independently annotated and separated** for targeted generation models.

---

## 12. Veo 3 / 3.1 — Google DeepMind's Unified Architecture (May 2025 / October 2025)

Veo 3 (released at Google I/O 2025) and its update Veo 3.1 (October 2025) are **closed-source** but represent the industry benchmark. Key technical facts from Google's documentation:

### Joint Latent Diffusion
The diffusion process is applied **jointly to temporal audio latents and spatio-temporal video latents** within a unified transformer. Audio and video are denoised together as components of a single data structure — the model does not treat audio as a post-generation step.

### Training Data
According to Google's technical documentation, Veo 3.1 was trained on **millions of hours of video paired with corresponding audio tracks**, with both modalities temporally aligned. The model learned:
- Footsteps sound different on wood vs. concrete (material-conditioned SFX)
- Glass shattering creates correlated visual and audio patterns (event-onset alignment)
- Dialogue lip-sync requires frame-perfect timing (sub-frame precision ASR alignment)

### Output Capabilities
- 4K video at 24fps  
- 48kHz stereo audio
- Simultaneous generation of: dialogue, SFX, ambient soundscapes, and implicit background music
- Prompt-controlled audio: Veo 3.1 enables precise audio direction within text prompts

### Data Annotation Strategy
Inferred from Google's Gemini-based data pipeline: Gemini models are used as **automated annotators** to create a proprietary training dataset with rich audio-visual descriptions — a "data flywheel" where the multimodal language model quality directly drives training data quality.

---

## 13. Sora 2 — OpenAI (2025)

While technical details remain sparse, Sora 2 generates synchronized audio-visual content. Referenced as a competitive target for open-source models in the 2025-2026 literature.

---

## 14. AutoCap & AutoReCap-XL — Scalable Audio Captioning (arXiv:2406.19388, GenAu)

GenAu proposes a **scalable dataset collection pipeline** for ambient audio generation:
- **AutoReCap-XL**: 47M+ audio clips (largest ambient audio-text dataset at time of publication)
- **AutoCap**: automatic audio captioning using a Q-Former module that leverages audio metadata, achieving significant CIDEr score improvements over prior models
- This work directly underpins HunyuanVideo-Foley's annotation pipeline (they use GenAU for caption generation)

---

## 15. Open Screen Sound Library (OSSL) — Film Music Annotation (arXiv:2506.12573, June 2025)

A dataset of ~36.5 hours of public-domain movie clips paired with soundtracks and **human-annotated mood information**.

### Annotation Methodology
- Long videos automatically segmented into musical segments via timestamp detection
- **Chroma similarity** used to map segments to their corresponding soundtrack (85% accuracy)
- **Manual quality inspection** by human evaluators to verify and filter incorrect mappings
- **Mood annotations**: human-assigned emotional labels per segment

### Significance
Demonstrates that **film music (original scores)** requires specialized annotation methodology combining automated audio-matching techniques with human emotional labeling — mood being the primary attribute that determines which soundtrack is appropriate for a scene.

---

## 16. Comparative Analysis: Audio Track Type Annotation

### Dialog / Speech Track
| Annotation Attribute | Method | Used By |
|---|---|---|
| ASR transcript | Whisper or equivalent | UniVerse-1, HunyuanVideo-Foley, YingSound |
| Language / dialect tag | Language classifier | Seedance 1.5 pro |
| Lip-sync quality score | Synchformer / AV-sync models | HunyuanVideo-Foley, Seedance 1.5 pro |
| Phoneme timing | Forced alignment | JavisDiT spatio-temporal priors |
| Speaker identity | ASR + diarization | YingSound |

### Original Score / Background Music Track
| Annotation Attribute | Method | Used By |
|---|---|---|
| Music / non-music detection | Audio classifier | HunyuanVideo-Foley, YingSound |
| Genre classification | CNN/Transformer classifier | Video-music datasets |
| Mood annotation | Human labeling | OSSL dataset |
| Beat / tempo markers | Beat tracking algorithm | V2M survey models |
| Chroma features for source matching | Chroma similarity | OSSL |
| Melody / intensity / emotion | Signal processing + human | V2M models (Wu et al. 2025) |

### Scene-Related Sounds / Foley / SFX Track
| Annotation Attribute | Method | Used By |
|---|---|---|
| Event class label | Audio classification (PANN, PANNs) | HunyuanVideo-Foley, MMAudio |
| Temporal onset / offset | Audio event detection | YingSound, HunyuanVideo-Foley |
| Multi-label for overlapping events | Multi-label classifier | AudioSet ontology |
| Spatial source (on/off screen) | Trained V2A models + human eval | SelVA paper |
| Audio-visual temporal alignment score | AV-Align metric | YingSound |
| Semantic alignment score | CLAP scoring | YingSound, MMAudio |

---

## 17. Key Annotation Challenges & Solutions

### Challenge 1: Temporal Misalignment in Static Annotations
**Problem**: Pre-computed captions describe the full video, but training uses random short clips. The caption may describe events not present in the sampled clip.  
**Solution**: **Online annotation pipeline** (UniVerse-1) — annotations generated in real-time for exactly the clip being trained on.

### Challenge 2: Multi-Track Separation
**Problem**: Real-world video audio is a mixture of dialog, BGM, and SFX. A single caption cannot capture all three tracks for generation conditioning.  
**Solutions**:
- **Source separation filtering** (YingSound): exclude clips where BGM drowns out SFX
- **Track-type classification** (HunyuanVideo-Foley): annotate each segment's dominant track type for balanced sampling
- **Multi-class labeling** (AudioSet ontology): ontological taxonomy covering 632 event categories across all track types

### Challenge 3: Data Scarcity for High-Quality Paired Audio-Visual Data
**Problem**: Labeled, temporally aligned audio-visual data is scarce compared to image-text or audio-text data.  
**Solutions**:
- **Multimodal joint training** (MMAudio): train jointly on abundant audio-text AND sparse audio-visual data
- **Automated captioning** (AutoCap, GenAU): generate captions from audio signals at scale
- **Scalable curation pipelines** (HunyuanVideo-Foley): 100k-hour datasets via automated annotation

### Challenge 4: Modality Imbalance in Multi-Track Models
**Problem**: Models trained on unbalanced data over-generate one track type (e.g., always generating BGM even for SFX prompts).  
**Solution**: **Category-balanced sampling** using the speech-music-SFX category tags during training batching (HunyuanVideo-Foley).

### Challenge 5: Sub-Frame Precision for Lip Sync
**Problem**: Dialog requires frame-perfect synchronization between mouth movements and phoneme audio.  
**Solution**: Multi-stage training with increasing lip-sync quality requirements; SFT on high-precision lip-sync datasets; RLHF with Synchformer-based lip-sync reward models (Seedance 1.5 pro, UniAVGen).

---

## 18. Evaluation Metrics for Audio Annotation Quality

| Metric | Purpose |
|---|---|
| **CLAP score** | Semantic alignment between generated audio and text description |
| **FD (Fréchet Distance) / KL Divergence** | Distribution matching (audio quality) |
| **Inception Score (IS)** | Audio quality / diversity |
| **AV-Align** | Temporal alignment between audio events and video frames |
| **Synchformer** | Lip-sync accuracy (speech-specific temporal alignment) |
| **SeedVideoBench-1.5** | Multi-dimensional evaluation including vocal types, attributes, non-speech properties |
| **Verse-Bench** | Unified benchmark for joint audio-video generation |
| **MovieGen-Audio-Bench** | Standardized evaluation across V2A models |
| **Kling-Audio-Eval** | Commercial audio generation benchmark |
| **5-point Likert scale + GSB** | Human perceptual quality evaluation |

---

## 19. Emerging Directions (2025–2026)

### Multi-Track Separate Generation
The SVA framework (Semantically Consistent Video-to-Audio) and SelVA (Selective V2A) both explore **track-selective generation** — generating only the audio track relevant to a specific sound source (e.g., only the dog's bark, not the background traffic). This requires:
- **Track-selective labels**: which sound source is the annotation target?
- **Negative guidance**: during generation, condition away from already-generated tracks

### Diegetic vs. Non-Diegetic Audio Annotation
Film production distinguishes between:
- **Diegetic audio** (sounds within the story world that characters can hear)
- **Non-diegetic audio** (narration, original score)

Current models conflate these; future annotation pipelines may require explicit diegetic/non-diegetic labels to enable cinematically correct generation.

### Continuous / Long-Form Generation
For videos beyond 8 seconds (up to 60+ seconds with scene extension), audio annotation must capture:
- Temporal evolution of music (key changes, dynamic shifts)
- Dialog across multiple shots
- Consistent sound environment across cuts

### 3D / Spatial Audio
Veo 3.1 and Sora 2 reference stereo/spatial audio output. Future annotation will require:
- Spatial audio labels (azimuth, elevation of sound sources)
- Binaural rendering metadata

---

## 20. Recommended Annotation Pipeline for Multi-Track Audio Generation

Based on the synthesis of all reviewed works, a comprehensive annotation pipeline for training joint audio-visual generation models should include:

```
INPUT VIDEO
    │
    ▼
[Stage 1: Segmentation]
├── Scene detection → 4–10 second clips
├── Silence ratio filtering (< 80% silence)
└── Audio quality filtering (SNR, bandwidth ≥ 32kHz)
    │
    ▼
[Stage 2: Track Separation & Classification]
├── Speech/Music/SFX/Mixed classifier → dominant track label
├── ASR → speech transcript + language/dialect tags
├── Music detection → BGM presence flag + beat markers + mood
└── Audio event detection → SFX event labels + temporal onset/offset
    │
    ▼
[Stage 3: Multimodal Alignment Scoring]
├── AV-Align score → temporal synchrony filter
├── CLAP score → semantic coherence filter
└── Synchformer → lip-sync score (for speech clips)
    │
    ▼
[Stage 4: Caption Generation]
├── GenAU / AutoCap → audio caption (1–2 sentences describing audio)
├── Video caption model → visual scene description
└── Combined AV caption → joint text conditioning signal
    │
    ▼
[Stage 5: Quality Verification]
├── Human-in-the-loop for borderline cases
├── Aesthetic scoring (AudioBox)
└── Modality balance check (ensure track-type diversity)
    │
    ▼
[Stage 6: Online Alignment during Training]
└── Real-time re-annotation of sampled training clips
    (eliminates temporal misalignment artifacts)
```

---

## 21. References

| Paper | Venue | arXiv | Year |
|---|---|---|---|
| Seedance 1.0 (ByteDance) | Technical Report | 2506.09113 | 2025 |
| Seedance 1.5 pro (ByteDance) | Technical Report | 2512.13507 | 2025 |
| Movie Gen (Meta) | Technical Report | 2410.13720 | 2024 |
| MMAudio (CVPR) | CVPR 2025 | 2412.15322 | 2024/2025 |
| HunyuanVideo-Foley (Tencent) | Technical Report | 2508.16930 | 2025 |
| Kling-Foley (Kuaishou) | Technical Report | 2506.19774 | 2025 |
| UniVerse-1 | Technical Report | 2509.06155 | 2025 |
| UniAVGen (Tencent) | Technical Report | 2511.03334 | 2025 |
| JavisDiT | CVPR 2025 | 2503.23377 | 2025 |
| JavisDiT++ | arxiv | 2602.19163 | 2026 |
| YingSound (industrial V2A) | Technical Report | 2412.09168 | 2024 |
| GenAu + AutoCap | ICML 2025 | 2406.19388 | 2024/2025 |
| OSSL (film music dataset) | arxiv | 2506.12573 | 2025 |
| SelVA (selective V2A) | arxiv | 2512.02650 | 2025 |
| SVA (semantically consistent V2A) | arxiv | 2404.16305 | 2024 |
| Taming Data for Audio Generation | ICML 2025 | 2406.19388 | 2024 |
| Veo 3 / 3.1 (Google DeepMind) | Closed-source | Tech Report | 2025 |
| V2M Survey | arxiv | 2502.12489 | 2025 |
| Unified multi-task AV generation | arxiv | 2601.04151 | 2026 |
