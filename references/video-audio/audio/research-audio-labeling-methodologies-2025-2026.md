# Audio Labeling Methodologies for Video Generation Models (2025-2026)

**Research Focus**: State-of-the-art audio annotation and labeling techniques for training video generation models with DiT architectures
**Date**: March 2, 2026
**Scope**: Analysis of emerging methodologies from 2025-2026 research

---

## Executive Summary

This document synthesizes audio labeling methodologies from cutting-edge video generation research (2025-2026), focusing on how modern DiT-based models approach multi-track audio annotation for training data. The analysis reveals a paradigm shift from post-hoc audio generation to **native audio-visual joint training** with sophisticated labeling requirements.

### Key Findings

1. **Unified Multimodal Training**: All SOTA models (Seedance 2.0, OVI, HunyuanVideo-Foley, UniAVGen) use joint audio-video training rather than sequential generation
2. **Automated Annotation Pipelines**: Scaling to 100K+ hours requires MLLM-based automated annotation with selective human validation
3. **Multi-Track Awareness**: Explicit separation and labeling of dialogue, music, and sound effects tracks
4. **Frame-Level Precision**: Temporal alignment annotations at frame-level (33ms) or sub-frame (phoneme-level) granularity
5. **Representation Alignment**: Emerging trend of using pre-trained audio features to guide diffusion model training

---

## 1. Audio Track Decomposition Methodologies

### 1.1 Three-Track Paradigm (Seedance 2.0)

**Track Structure**:
```
Video Audio = Dialogue Track + Music Track + Sound Effects Track
```

**Labeling Requirements per Track**:

#### Dialogue Track
- **Speaker Identification**: Unique speaker IDs, voice characteristics
- **Linguistic Content**: Transcription (word-level timestamps)
- **Phoneme Alignment**: Sub-frame precision for lip-sync (using Whisper + refinement)
- **Emotional Tone**: Categorical labels (neutral, happy, sad, angry, surprised, etc.)
- **Prosody Markers**: Pitch contours, speaking rate, emphasis
- **Dialect/Language**: Specific language/dialect tags (Mandarin, Cantonese, Shanghainese, etc.)

**Annotation Tools**:
- Whisper (speech transcription)
- Forced alignment tools (phoneme-level timing)
- Emotion recognition models
- Manual validation for complex cases

#### Music Track
- **Genre/Style**: Multi-label classification (orchestral, electronic, jazz, rock, etc.)
- **Tempo/Rhythm**: BPM, time signature, beat markers
- **Mood/Emotion**: Emotional valence and arousal ratings
- **Instrumentation**: Instrument categories present
- **Narrative Function**: Scene-matching indicators (tension, resolution, transition)
- **Diegetic vs Non-Diegetic**: Source visibility in scene

**Annotation Tools**:
- Music information retrieval (MIR) tools
- Beat tracking algorithms
- Genre classification models
- Manual curation for narrative function

#### Sound Effects Track
- **Event Categories**: Hierarchical taxonomy (environmental, object interaction, ambient)
- **Spatial Positioning**: 3D coordinates or stereo positioning
- **Material/Texture**: Surface characteristics (metal, wood, glass, fabric)
- **Intensity Levels**: Loudness, impact force
- **Causal Relationships**: Visual action → sound mapping
- **Temporal Precision**: Onset/offset timestamps (millisecond accuracy)

**Annotation Tools**:
- Audio event detection models
- Spatial audio analysis
- Manual annotation for causal relationships

### 1.2 Audio Source Separation for Labeling

**htdemucs Approach** (AutoMV):
```
Original Audio
    ↓
htdemucs Separation
    ↓
├── Vocal Track (for lip-sync)
└── Instrumental Track (for background music)
```

**Benefits**:
- Enables separate processing of vocals and music
- Improves lip-sync accuracy (vocal-only audio for alignment)
- Allows independent control of music and dialogue levels

**Labeling Workflow**:
1. Separate audio into vocal/instrumental tracks
2. Annotate vocal track: transcription, phoneme timing, emotion
3. Annotate instrumental track: genre, tempo, mood
4. Annotate combined track: overall mix quality, balance

---

## 2. Temporal Alignment Annotation Methodologies

### 2.1 Frame-Level Synchronization (OVI, HunyuanVideo-Foley)

**SyncNet-Based Annotation**:
```python
# Pseudo-code for sync annotation
for video_segment in dataset:
    sync_score = SyncNet.compute_sync(video_segment)
    if sync_score.offset <= 3 and sync_score.confidence > 1.5:
        label = {
            "sync_quality": "high",
            "offset_frames": sync_score.offset,
            "confidence": sync_score.confidence
        }
    else:
        label = {"sync_quality": "low", "reject": True}
```

**Annotation Output**:
- **Offset**: Frame offset between audio and video (-3 to +3 frames acceptable)
- **Confidence**: Sync detection confidence score (>1.5 required)
- **Quality Label**: Binary (high/low) or continuous (0-1 scale)

**Use Cases**:
- Filtering training data (reject low-sync samples)
- Training synchronization modules (Synchformer)
- Evaluation metric (DeSync score)

### 2.2 Sub-Frame Phoneme Alignment (UniAVGen, Seedance)

**Forced Alignment Pipeline**:
```
Speech Audio
    ↓
Whisper Transcription
    ↓
Forced Alignment (Montreal Forced Aligner or similar)
    ↓
Phoneme-Level Timestamps
    ↓
Video Frame Mapping
```

**Annotation Granularity**:
- **Word-level**: Start/end timestamps for each word
- **Phoneme-level**: Start/end timestamps for each phoneme (10-100ms duration)
- **Frame mapping**: Which video frames correspond to each phoneme

**Example Annotation**:
```json
{
  "text": "Hello world",
  "words": [
    {"word": "Hello", "start": 0.0, "end": 0.5, "phonemes": [
      {"phoneme": "HH", "start": 0.0, "end": 0.1, "frames": [0, 1, 2]},
      {"phoneme": "AH", "start": 0.1, "end": 0.3, "frames": [3, 4, 5, 6, 7]},
      {"phoneme": "L", "start": 0.3, "end": 0.4, "frames": [8, 9, 10]},
      {"phoneme": "OW", "start": 0.4, "end": 0.5, "frames": [11, 12, 13]}
    ]},
    {"word": "world", "start": 0.6, "end": 1.1, "phonemes": [...]}
  ]
}
```

### 2.3 Beat-Motion Alignment (AutoMV)

**Music-Video Synchronization**:
```
Music Audio
    ↓
Beat Tracking (SongFormer)
    ↓
Beat Timestamps
    ↓
Motion Analysis (video)
    ↓
Beat-Motion Correspondence Labels
```

**Annotation Requirements**:
- **Beat timestamps**: Precise timing of each musical beat
- **Motion intensity**: Frame-by-frame motion magnitude
- **Alignment labels**: Which beats correspond to which motion events
- **Sync quality**: How well motion follows rhythm (1-5 scale)

**Use Cases**:
- Music video generation
- Dance video synthesis
- Rhythmic motion generation

---

## 3. Semantic Annotation Methodologies

### 3.1 MLLM-Based Audio Captioning (OVI, HunyuanVideo-Foley)

**Automated Caption Generation Pipeline**:
```
Video + Audio
    ↓
Multimodal LLM (Qwen2.5-Omni, Gemini, etc.)
    ↓
Audio Caption with Temporal Tags
```

**Caption Format** (OVI):
```
"A woman <S>says 'Hello, how are you?'<E> while <AUDCAP>birds chirping in the background<ENDAUDCAP>. <AUDCAP>Soft piano music plays<ENDAUDCAP>."
```

**Temporal Tags**:
- `<S>` and `<E>`: Speech segment boundaries
- `<AUDCAP>` and `<ENDAUDCAP>`: Audio description boundaries
- Enables model to learn temporal structure of audio events

**Caption Quality Requirements**:
- **Completeness**: All significant audio events described
- **Temporal accuracy**: Tags align with actual audio timing
- **Semantic richness**: Detailed acoustic characteristics (not just "music plays" but "soft piano music")
- **Disambiguation**: Distinguish between similar sounds (e.g., "dog barking" vs "wolf howling")

### 3.2 Hierarchical Audio Event Taxonomy

**Three-Level Hierarchy**:
```
Level 1: Audio Type (Speech, Music, Sound Effects, Ambient)
    ↓
Level 2: Event Category (e.g., for Sound Effects: Environmental, Object Interaction, Mechanical)
    ↓
Level 3: Specific Event (e.g., for Object Interaction: Door closing, Glass breaking, Footsteps)
```

**Example Taxonomy for Sound Effects**:
```
Sound Effects
├── Environmental
│   ├── Weather (rain, thunder, wind)
│   ├── Nature (birds, insects, water)
│   └── Urban (traffic, sirens, crowds)
├── Object Interaction
│   ├── Impact (hitting, dropping, breaking)
│   ├── Friction (rubbing, scraping, sliding)
│   └── Manipulation (opening, closing, pouring)
├── Mechanical
│   ├── Vehicles (engine, brakes, horn)
│   ├── Machinery (motor, gears, hydraulics)
│   └── Electronics (beep, buzz, hum)
└── Ambient
    ├── Room Tone (indoor ambience)
    ├── Outdoor Ambience (outdoor background)
    └── Spatial Characteristics (reverb, echo)
```

**Annotation Process**:
1. Identify all audio events in segment
2. Classify each event using 3-level taxonomy
3. Add temporal boundaries (start/end timestamps)
4. Add acoustic characteristics (loudness, pitch, timbre)
5. Add spatial information (left/right/center, distance)

### 3.3 Emotional and Thematic Annotation

**Emotional Dimensions** (Seedance 2.0):
- **Valence**: Positive to negative (-1 to +1)
- **Arousal**: Calm to excited (-1 to +1)
- **Dominance**: Submissive to dominant (-1 to +1)
- **Discrete Emotions**: Joy, sadness, anger, fear, surprise, disgust, neutral

**Thematic Tags**:
- **Narrative Function**: Tension, resolution, transition, climax, denouement
- **Scene Matching**: Action, romance, horror, comedy, drama
- **Cultural Context**: Western, Eastern, traditional, modern

**Annotation Guidelines**:
- Rate emotional dimensions on continuous scales
- Select all applicable discrete emotions (multi-label)
- Choose primary thematic function
- Consider cultural appropriateness

---

## 4. Quality Annotation Methodologies

### 4.1 Objective Quality Metrics (Automated)

**Signal Quality Metrics**:
```python
# Pseudo-code for automated quality annotation
def annotate_audio_quality(audio_file):
    metrics = {
        "snr_db": compute_snr(audio_file),  # Signal-to-noise ratio
        "dynamic_range_db": compute_dynamic_range(audio_file),
        "peak_level_db": compute_peak_level(audio_file),
        "rms_level_db": compute_rms_level(audio_file),
        "clipping_detected": detect_clipping(audio_file),
        "silence_ratio": compute_silence_ratio(audio_file),
        "frequency_range_hz": compute_frequency_range(audio_file),
        "sampling_rate_khz": audio_file.sampling_rate / 1000
    }
    return metrics
```

**Quality Thresholds** (HunyuanVideo-Foley):
- **SNR**: ≥20 dB (acceptable), ≥30 dB (high quality)
- **Sampling Rate**: ≥32 kHz (minimum), 48 kHz (preferred)
- **Silence Ratio**: ≤80% (reject if higher)
- **Clipping**: None detected (reject if present)

### 4.2 Perceptual Quality Metrics (Human-Annotated)

**SeedVideoBench 1.5 Quality Dimensions**:

1. **Production Quality (PQ)**: 1-5 scale
   - 1: Amateur quality, obvious artifacts
   - 3: Acceptable quality, minor issues
   - 5: Professional quality, broadcast-ready

2. **Naturalness**: 1-5 scale
   - 1: Clearly synthetic, unnatural
   - 3: Somewhat natural, some artifacts
   - 5: Indistinguishable from real recordings

3. **Clarity**: 1-5 scale
   - 1: Muddy, unclear, distorted
   - 3: Acceptable clarity, some noise
   - 5: Crystal clear, no noise

4. **Expressiveness**: 1-5 scale
   - 1: Flat, emotionless, monotone
   - 3: Some emotional variation
   - 5: Rich emotional expression, dynamic

**Annotation Protocol**:
- Multiple annotators per sample (3-5 recommended)
- Inter-annotator agreement calculation (Krippendorff's alpha)
- Consensus labels or averaged scores
- Expert validation for edge cases

### 4.3 Aesthetic Quality (AudioBox)

**Automated Aesthetic Scoring**:
- Pre-trained model evaluates audio aesthetics
- Output: Continuous score (0-1 or 0-100)
- Correlates with human aesthetic preferences
- Used for filtering training data (keep high-scoring samples)

**Use in HunyuanVideo-Foley Pipeline**:
```
Raw Audio Samples
    ↓
AudioBox Aesthetic Scoring
    ↓
Filter: Keep samples with score > threshold
    ↓
High-Quality Audio Dataset
```

---

## 5. Audio-Visual Correspondence Annotation

### 5.1 Semantic Alignment (ImageBind)

**Automated Semantic Alignment Verification**:
```python
# Pseudo-code for semantic alignment annotation
def annotate_semantic_alignment(video, audio):
    video_embedding = ImageBind.encode_video(video)
    audio_embedding = ImageBind.encode_audio(audio)
    similarity = cosine_similarity(video_embedding, audio_embedding)

    alignment_label = {
        "similarity_score": similarity,
        "alignment_quality": "high" if similarity > 0.7 else "low",
        "reject": similarity < 0.5
    }
    return alignment_label
```

**Interpretation**:
- **High similarity (>0.7)**: Audio semantically matches video content
- **Medium similarity (0.5-0.7)**: Partial match, may need review
- **Low similarity (<0.5)**: Mismatch, reject from training data

**Use Cases**:
- Data filtering (reject mismatched samples)
- Evaluation metric (IB score)
- Training signal for alignment losses

### 5.2 Causal Relationship Annotation (Manual)

**Action-Sound Correspondence**:
```json
{
  "video_event": {
    "type": "object_interaction",
    "action": "door_closing",
    "start_frame": 45,
    "end_frame": 60,
    "object": "wooden_door"
  },
  "audio_event": {
    "type": "sound_effect",
    "sound": "door_slam",
    "start_time": 1.5,
    "end_time": 1.8,
    "material": "wood",
    "intensity": "medium"
  },
  "correspondence": {
    "causal_relationship": "direct",  # direct, indirect, ambient
    "temporal_alignment": "synchronized",  # synchronized, delayed, early
    "spatial_alignment": "matched"  # matched, mismatched
  }
}
```

**Annotation Guidelines**:
- **Direct causality**: Visual action directly causes sound (e.g., hammer hitting nail)
- **Indirect causality**: Visual action indirectly causes sound (e.g., person walking → footsteps)
- **Ambient**: Sound is environmental, not caused by specific action
- **Temporal alignment**: Sound occurs at expected time relative to action
- **Spatial alignment**: Sound source location matches visual source

### 5.3 Lip-Sync Annotation (SyncNet + Manual Refinement)

**Automated Lip-Sync Detection**:
```
Video (face region) + Audio (speech)
    ↓
SyncNet Analysis
    ↓
Sync Confidence Score + Offset
    ↓
Manual Validation (if confidence < threshold)
```

**Annotation Output**:
```json
{
  "speaker_id": "person_1",
  "speech_segment": {
    "start_time": 2.5,
    "end_time": 5.3,
    "text": "Hello, how are you?"
  },
  "lip_sync": {
    "sync_quality": "high",
    "confidence": 0.92,
    "offset_frames": 1,
    "manual_validated": false
  },
  "phoneme_alignment": [
    {"phoneme": "HH", "start": 2.5, "end": 2.6, "lip_shape": "open"},
    {"phoneme": "AH", "start": 2.6, "end": 2.8, "lip_shape": "wide"},
    ...
  ]
}
```

---

## 6. Multi-Modal Annotation Integration

### 6.1 Unified Annotation Schema

**Integrated Audio-Video Annotation**:
```json
{
  "video_id": "sample_001",
  "duration_seconds": 10.0,
  "framerate": 24,
  "audio_sampling_rate": 48000,

  "global_labels": {
    "scene_type": "outdoor_urban",
    "overall_mood": "energetic",
    "audio_style": "cinematic"
  },

  "audio_tracks": [
    {
      "track_type": "dialogue",
      "speakers": [
        {
          "speaker_id": "person_1",
          "segments": [
            {
              "start": 1.0,
              "end": 3.5,
              "text": "Let's go to the park",
              "emotion": "happy",
              "phonemes": [...]
            }
          ]
        }
      ]
    },
    {
      "track_type": "music",
      "genre": "upbeat_pop",
      "tempo_bpm": 120,
      "mood": "cheerful",
      "beats": [0.0, 0.5, 1.0, 1.5, ...]
    },
    {
      "track_type": "sound_effects",
      "events": [
        {
          "event_type": "footsteps",
          "start": 0.5,
          "end": 9.5,
          "material": "concrete",
          "spatial_position": "center"
        },
        {
          "event_type": "car_passing",
          "start": 4.0,
          "end": 6.0,
          "spatial_position": "left_to_right"
        }
      ]
    }
  ],

  "synchronization": {
    "lip_sync_quality": 0.95,
    "action_sound_alignment": 0.88,
    "beat_motion_alignment": 0.92
  },

  "quality_metrics": {
    "audio_quality": {
      "snr_db": 35.2,
      "production_quality": 4.5,
      "naturalness": 4.2
    },
    "semantic_alignment": {
      "imagebind_score": 0.82,
      "clap_score": 0.76
    }
  }
}
```

### 6.2 Annotation Tool Requirements

**Essential Features**:
1. **Multi-track audio visualization**: Waveform + spectrogram for each track
2. **Video-audio synchronization**: Frame-accurate playback
3. **Temporal annotation**: Timeline-based event marking
4. **Hierarchical labeling**: Support for multi-level taxonomies
5. **Quality rating interface**: Likert scales, sliders, checkboxes
6. **Automated pre-annotation**: Integration with ML models (SyncNet, ImageBind, etc.)
7. **Collaboration features**: Multi-annotator support, consensus tools
8. **Export formats**: JSON, CSV, Label Studio format

**Recommended Tools**:
- **Label Studio**: Open-source, customizable, supports audio-video
- **CVAT**: Computer Vision Annotation Tool, supports temporal annotations
- **Custom tools**: Built on top of libraries like Wavesurfer.js, Video.js

---

## 7. Annotation Quality Assurance

### 7.1 Inter-Annotator Agreement

**Metrics**:
- **Krippendorff's Alpha**: For continuous and categorical labels
- **Cohen's Kappa**: For binary labels (two annotators)
- **Fleiss' Kappa**: For categorical labels (multiple annotators)
- **Intraclass Correlation Coefficient (ICC)**: For continuous ratings

**Acceptable Thresholds**:
- **α/κ > 0.8**: Excellent agreement
- **α/κ 0.6-0.8**: Good agreement
- **α/κ < 0.6**: Poor agreement, requires retraining or guideline revision

### 7.2 Annotation Validation Pipeline

**Multi-Stage Validation**:
```
Initial Annotation (Annotator A)
    ↓
Independent Annotation (Annotator B)
    ↓
Agreement Check
    ↓
├── High Agreement → Accept
├── Medium Agreement → Expert Review
└── Low Agreement → Re-annotate
```

**Validation Criteria**:
- **Temporal alignment**: Timestamps within ±100ms
- **Categorical labels**: Exact match or parent category match
- **Continuous ratings**: Within ±0.5 on 5-point scale
- **Text descriptions**: Semantic similarity >0.7 (using sentence embeddings)

### 7.3 Active Learning for Annotation Efficiency

**Uncertainty Sampling**:
```python
# Pseudo-code for active learning annotation
def select_samples_for_annotation(unlabeled_pool, model, budget):
    # Predict on unlabeled samples
    predictions = model.predict(unlabeled_pool)

    # Compute uncertainty (e.g., entropy, variance)
    uncertainties = compute_uncertainty(predictions)

    # Select most uncertain samples
    selected_samples = top_k(unlabeled_pool, uncertainties, k=budget)

    return selected_samples
```

**Benefits**:
- Reduces annotation cost (focus on informative samples)
- Improves model performance faster
- Identifies edge cases and difficult examples

---

## 8. Emerging Trends (2025-2026)

### 8.1 Representation Alignment (REPA)

**HunyuanVideo-Foley Innovation**:
- Use pre-trained audio features (ATST-Frame) to guide diffusion model training
- Align model's internal representations with high-fidelity audio features
- **Annotation implication**: Need high-quality reference audio for feature extraction

**Annotation Requirements**:
- **Reference audio**: Professional-grade recordings for feature extraction
- **Alignment labels**: Which generated audio should match which reference features
- **Quality validation**: Ensure reference audio is truly high-fidelity

### 8.2 VLM-Based Evaluation (Gemini-2.5-Pro)

**Automated Quality Assessment**:
- Use multimodal LLMs to evaluate audio-video alignment
- **Timbre consistency**: Does speaker voice match across segments?
- **Emotion consistency**: Does audio emotion match visual emotion?
- **Temporal alignment**: Are audio events synchronized with visual events?

**Annotation Workflow**:
```
Generated Audio-Video
    ↓
VLM Evaluation (Gemini-2.5-Pro)
    ↓
Automated Scores (timbre, emotion, temporal alignment)
    ↓
Human Validation (sample-based)
```

**Benefits**:
- Scalable evaluation (no human bottleneck)
- Consistent criteria across samples
- Detailed explanations (LLM can explain ratings)

### 8.3 Self-Supervised Synchronization Learning

**OVI Approach**:
- No explicit synchronization loss during training
- Model learns lip-sync and action-sound alignment through:
  - Paired audio-video sampling
  - Shared timesteps
  - Cross-modal attention

**Annotation Implication**:
- **Less need for explicit sync labels** during training
- **Still need sync labels for evaluation** (SyncNet, DeSync score)
- **Focus on high-quality paired data** rather than detailed sync annotations

---

## 9. Practical Recommendations for Seedance-Label

### 9.1 Annotation Priorities

**High Priority** (Essential for training):
1. **Audio track type**: Dialogue, music, sound effects, ambient
2. **Temporal boundaries**: Start/end timestamps for each audio event
3. **Semantic labels**: Event categories, emotional tone
4. **Quality ratings**: Production quality, naturalness (1-5 scale)
5. **Synchronization labels**: Lip-sync quality, action-sound alignment

**Medium Priority** (Improves quality):
1. **Phoneme-level alignment**: For dialogue tracks
2. **Beat markers**: For music tracks
3. **Spatial positioning**: For sound effects
4. **Causal relationships**: Action-sound correspondence
5. **Aesthetic ratings**: Overall audio aesthetics

**Low Priority** (Nice to have):
1. **Detailed acoustic characteristics**: Timbre, pitch contours
2. **Cultural context**: Cultural appropriateness tags
3. **Narrative function**: Detailed thematic annotations
4. **Material properties**: Surface textures for sound effects

### 9.2 Annotation Workflow

**Recommended Pipeline**:
```
1. Automated Pre-Processing
   - Audio presence detection
   - Silence ratio filtering
   - SNR calculation
   - Sampling rate normalization

2. Automated Pre-Annotation
   - MLLM audio captioning (Qwen, Gemini)
   - Audio classification (speech/music/effects)
   - Sync detection (SyncNet)
   - Semantic alignment (ImageBind)

3. Human Annotation
   - Review and refine automated annotations
   - Add missing labels (causal relationships, spatial positioning)
   - Quality ratings (production quality, naturalness, expressiveness)
   - Edge case handling

4. Quality Assurance
   - Inter-annotator agreement check
   - Expert validation (sample-based)
   - Automated consistency checks

5. Final Dataset
   - Export to unified JSON schema
   - Split into train/val/test sets
   - Document annotation guidelines
```

### 9.3 Tooling Recommendations

**Annotation Platform**:
- **Label Studio** (recommended): Open-source, customizable, supports audio-video
- **Custom UI**: Built on Wavesurfer.js + Video.js for specialized needs

**Automated Annotation**:
- **Whisper**: Speech transcription
- **SyncNet**: Lip-sync detection
- **ImageBind**: Semantic alignment
- **Qwen2.5-Omni / Gemini**: Audio captioning
- **htdemucs**: Audio source separation

**Quality Assurance**:
- **Krippendorff's Alpha**: Inter-annotator agreement
- **Active learning**: Uncertainty sampling for efficient annotation

---

## 10. Conclusion

Audio annotation for video generation models has evolved significantly in 2025-2026, with key trends including:

1. **Unified multimodal training**: Audio is a first-class modality, not an afterthought
2. **Automated annotation pipelines**: MLLM-based captioning scales to 100K+ hours
3. **Multi-track awareness**: Explicit separation of dialogue, music, and sound effects
4. **Frame-level precision**: Temporal alignment at 33ms or sub-frame granularity
5. **Representation alignment**: Pre-trained audio features guide training (REPA)
6. **VLM-based evaluation**: Automated quality assessment using multimodal LLMs

For the Seedance-Label project, implementing a **hybrid annotation pipeline** (automated pre-annotation + human refinement) with **multi-track awareness** and **frame-level temporal precision** will enable training of next-generation video generation models with high-fidelity, synchronized audio.

---

## References

### Key Papers Analyzed:
1. **Seedance 1.5 Pro & 2.0** - ByteDance (2024-2025)
2. **OVI** - Character AI & Yale University (2024)
3. **HunyuanVideo-Foley** - Tencent Hunyuan (2024)
4. **UniAVGen** - Nanjing University & Tencent Hunyuan (2024)
5. **AutoMV** - Beijing University of Posts & Telecommunications (2024)

### Key Tools & Models:
- **SyncNet**: Lip-sync detection
- **ImageBind**: Multimodal semantic alignment
- **Whisper**: Speech transcription
- **htdemucs**: Audio source separation
- **Qwen2.5-Omni / Gemini**: Audio captioning
- **AudioBox**: Aesthetic scoring
- **ATST-Frame**: Pre-trained audio features (REPA)

### Key Datasets:
- **Emilia**: Multilingual audio dataset
- **AudioSet**: General sound dataset
- **VGGSound**: Audio-visual dataset
- **MovieGen-Audio-Bench**: Audio generation evaluation
- **Kling-Audio-Eval**: Audio evaluation dataset

---

**Document Version**: 1.0
**Last Updated**: March 2, 2026
