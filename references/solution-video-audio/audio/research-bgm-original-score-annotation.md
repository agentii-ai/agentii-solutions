# Research: Original Score & Background Music Annotation for Video Generation
## Focused Analysis on BGM/Score Track Labeling

**Compiled:** March 2, 2026  
**Focus:** How original scores (film music) and background music tracks are specifically annotated for training AI video generation models

---

## 1. The BGM Challenge in Video Generation

Background music (BGM) and original scores are fundamentally different from dialog and SFX in video generation training:

- **Causal relationship is indirect**: Music does not have a physical-visual causal link (a bark accompanies a dog opening its mouth; music is editorially chosen)
- **Temporal granularity differs**: SFX onset aligns to a video frame; music aligns to a scene segment (seconds to minutes)
- **Emotional/mood annotation required**: The same visual scene can appropriately use dramatically different musical scores depending on intended emotional tone
- **Compositional attributes**: Music has beat, key, tempo, instrumentation, genre, mood — attributes not needed for SFX or dialog labeling

---

## 2. Current SOTA Treatment of BGM in Training

### Most Models: BGM Removal or Exclusion

For models targeting **sound effects** or **dialog synchronization**, background music is typically **removed or filtered out**:

> **YingSound (2412.09168)**: "To eliminate pure background music and speech-involved segments, we utilize background music detection techniques and automatic speech recognition (ASR) to filter out audio with non-relevant content."

> **HunyuanVideo-Foley (2508.16930)**: Uses speech-music detection models to annotate segment type; enables class-balanced training that can deliberately include or exclude BGM-dominant clips.

### Implication
Models trained primarily for Foley/SFX generation treat BGM as **noise** to be removed, not a signal to be learned. This explains why these models generate only SFX when given a prompt — they never learned BGM generation.

---

## 3. Joint BGM + Video Generation: Video-to-Music Research Track

A parallel research track specifically addresses video-to-music (V2M) generation:

### Key Survey: Comprehensive Survey on V2M Generation (arXiv:2502.12489, 2025)

This survey covers all approaches to generating music conditioned on video. Relevant annotation methodologies:

**Visual Feature Extraction for Music Conditioning**:
- CLIP features (semantic visual content)
- I3D features (motion dynamics)
- VideoMAE features (spatiotemporal understanding)
- CAVP features (audio-visual pretrained representations)

**Music-Specific Conditioning Signals & Their Annotation Methods**:

| Conditioning Signal | Annotation Method |
|---|---|
| Dance genre | One-hot vector from manual or classifier labeling |
| Beat / tempo | Beat tracking algorithms (automated) |
| Melody | Music information retrieval (MIR) tools |
| Intensity | Signal processing (RMS energy over time) |
| Emotion / mood | **Human annotation** (most emotion datasets require human labelers) |
| Key / harmony | Chromagram analysis (automated) |
| Instrumentation | Music source separation (automated) |

**Critical finding**: "Wu et al. (2025) developed the first V2M generation model with multiple time-varying conditions: beat, melody, intensity, and emotion, offering fine-grained control over V2M generation. These control signals can be obtained via extracting using models or annotated by a music creator."

### Open Screen Sound Library (arXiv:2506.12573, June 2025)

The OSSL dataset is the first publicly available film music dataset with mood annotations:

- ~36.5 hours of public-domain movie clips
- Paired with corresponding soundtracks
- **Human-annotated mood labels** per segment

**Annotation Pipeline**:
1. Identify musical segments in films via timestamp detection
2. Map segments to corresponding soundtrack files via **chroma similarity** (85% accuracy)
3. **Manual quality inspection**: human evaluators verify and filter incorrect mappings
4. **Mood annotation**: human labelers assign emotional categories

**Key finding**: "Another missing element that plays a pivotal role in making film music is mood information, as dialogues and scenes alone are often insufficient to fully convey emotions, which explains why scripts typically include not only dialogues but also separate mood descriptions."

---

## 4. BGM Annotation Taxonomy

Based on the research corpus, a comprehensive BGM annotation taxonomy for video generation training should include:

### Segment-Level Labels
```yaml
bgm_segment:
  presence: bool              # Is BGM present in this clip?
  type: [score, source_music, ambient_music, none]
  diegetic: bool              # Can characters hear this music?
  
  # Temporal
  onset_frame: int
  offset_frame: int
  fade_in: bool
  fade_out: bool
  
  # Musical attributes
  genre: str                  # e.g., "orchestral", "electronic", "jazz"
  tempo_bpm: float            # beats per minute (automated)
  key: str                    # musical key (automated)
  instrumentation: [str]      # primary instruments
  
  # Emotional/mood
  mood: [str]                 # ["tense", "romantic", "triumphant", ...]
  valence: float              # -1.0 (negative) to 1.0 (positive)
  arousal: float              # 0.0 (calm) to 1.0 (energetic)
  
  # Scene relationship
  visual_event_alignment: str # "synchronized", "anticipatory", "retrospective"
  narrative_function: str     # "underscore", "leitmotif", "stinger", "sting"
```

### Track-Level Labels
```yaml
audio_track_composition:
  dominant_track: [dialog, bgm, sfx, mixed]
  dialog_ratio: float         # 0.0–1.0
  bgm_ratio: float            # 0.0–1.0
  sfx_ratio: float            # 0.0–1.0
  silence_ratio: float        # 0.0–1.0
  snr_db: float               # signal quality
```

---

## 5. AutoMV — Multi-Agent Music Video Generation (arXiv:2512.12196, December 2025)

AutoMV is a multi-agent system for generating music videos that demonstrates how complex audio annotation enables coordinated generation:

- A **Music Analyzer Agent** extracts music attributes (beat, tempo, rhythm, mood, style) from input audio
- A **Visual Designer Agent** uses these annotations to create visual elements that synchronize with music
- The annotation of music into structured symbolic representation (beats, segments, emotional arcs) enables automatic visual choreography

**Relevance**: Shows that for music-video scenarios, rich music annotation (not just caption text) is needed — beat positions, segment boundaries, and mood arcs are required for frame-accurate visual synchronization.

---

## 6. Recommendations for Original Score Annotation in Production Pipelines

For training models that can **generate original score audio** synchronized with video, the following annotation approach is recommended:

### Priority 1: Music Detection & Separation
- Use trained music/speech/SFX separation models (Demucs, MDX-Net) to isolate the BGM track
- Compute BGM presence probability per 1-second window
- Label each training clip with BGM presence, ratio, and quality score

### Priority 2: Scene-Music Alignment Annotation
- Use chroma similarity or audio fingerprinting to match BGM segments to source soundtracks
- Annotate scene boundaries (cuts, transitions) and their relationship to musical phrases (phrase-synchronized vs. independent cuts)

### Priority 3: Mood & Emotional Arc Labeling
- Automated: MIR tools for valence/arousal classification using pre-trained models
- Human: required for nuanced mood categories in edge cases
- Minimum taxonomy: [tense, neutral, uplifting, sad, triumphant, mysterious, romantic]

### Priority 4: Diegetic / Non-Diegetic Classification
- If a character in the video is shown playing or reacting to the music → diegetic (annotations should link to the visual source)
- If music plays over a scene without visual source → non-diegetic (annotations should describe narrative function)

### Priority 5: Leitmotif & Narrative Function
- Advanced annotation for long-form narrative videos
- Tags: [underscore, stinger/sting, theme/leitmotif, transition, source_music]
- Enables models to learn cinematically appropriate music placement

---

## 7. Research Gaps

1. **No publicly available large-scale film score annotation dataset** exists with all the attributes described above. OSSL (36.5 hours, mood-only) is the closest but highly limited.

2. **Diegetic/non-diegetic labels are absent** from all current training datasets, preventing models from learning the editorial distinction.

3. **Leitmotif / thematic continuity** across scenes has not been addressed in any current training annotation scheme.

4. **Multi-track generation conditioning** — where the model must generate BGM knowing what SFX and dialog are already present — is an open research problem requiring joint multi-track annotations.

---

## 8. Inference: How Seedance 1.5 Pro Likely Handles BGM

Based on publicly available information about the Seedance 1.5 pro pipeline (arXiv:2512.13507), the following can be inferred about BGM handling:

1. **Multi-stage data pipeline** with curriculum scheduling suggests early-stage training on clips with dominant single track types (clean SFX, clean dialog, clean music) before introducing mixed clips

2. **SeedVideoBench-1.5 non-speech audio properties** taxonomy likely includes music/non-music distinction and possibly mood or genre labels

3. **RLHF reward model** for audio would need to evaluate whether generated BGM is contextually appropriate — requiring human evaluators who rate BGM appropriateness, not just audio quality

4. The model's proficiency in **cinematic camera control** suggests deep training on professionally produced video (film/TV) where BGM is carefully synchronized to visual events — implying the training data was NOT filtered to remove BGM but rather included high-quality music-annotated content

5. **Advanced audio evaluation criteria developed with input from professional film directors** (mentioned in the SeedVideoBench-1.5 description) suggests that BGM annotation in their pipeline was guided by film industry professionals rather than purely automated tools

---

## References

- Seedance 1.5 pro: arXiv:2512.13507 (ByteDance, December 2025)
- OSSL Film Music Dataset: arXiv:2506.12573 (June 2025)
- V2M Survey: arXiv:2502.12489 (February 2025)
- YingSound V2A Pipeline: arXiv:2412.09168 (December 2024)
- HunyuanVideo-Foley: arXiv:2508.16930 (August 2025)
- AutoMV Multi-Agent Music Video: arXiv:2512.12196 (December 2025)
- GenAu / AutoCap: arXiv:2406.19388 (2024/2025)
