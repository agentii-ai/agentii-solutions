# Multi-Track Audio Annotation Taxonomy for Video Generation

**Research Focus**: Detailed taxonomy for annotating dialogue, music scores, sound effects, and ambient audio in video training data
**Date**: March 2, 2026
**Scope**: Practical annotation framework derived from SOTA model requirements

---

## Executive Summary

This document defines a comprehensive multi-track audio annotation taxonomy specifically designed for training DiT-based video generation models that produce synchronized audio. The taxonomy is derived from analysis of Seedance 1.5/2.0, OVI, HunyuanVideo-Foley, UniAVGen, and AutoMV annotation requirements.

Long-form videos contain multiple overlapping audio layers. For a video generation model to produce realistic, synchronized audio, training data must be annotated at the **track level** — each audio layer (dialogue, music, sound effects, ambient) requires distinct annotation schemas, temporal markers, and quality criteria.

---

## 1. Audio Track Classification

### 1.1 Primary Track Types

Every video segment's audio can be decomposed into four primary tracks:

| Track | Description | Generation Challenge | Model Examples |
|-------|-------------|---------------------|----------------|
| **Dialogue** | Human speech, narration, singing | Lip-sync, emotion, prosody | Seedance 2.0, UniAVGen, OVI |
| **Original Score / Music** | Background music, theme music, diegetic music | Mood matching, rhythm, genre | Seedance 2.0, AutoMV |
| **Scene Sound Effects** | Event-driven sounds (footsteps, impacts, doors) | Temporal precision, causality | HunyuanVideo-Foley, OVI |
| **Ambient / Room Tone** | Continuous environmental sound (wind, traffic, room hum) | Scene consistency, spatial audio | HunyuanVideo-Foley |

### 1.2 Track Presence Labels

For each video segment, annotate which tracks are present:

```json
{
  "track_presence": {
    "dialogue": true,
    "music": true,
    "sound_effects": true,
    "ambient": true
  },
  "dominant_track": "dialogue",
  "track_balance": {
    "dialogue_level_db": -6,
    "music_level_db": -18,
    "sfx_level_db": -12,
    "ambient_level_db": -24
  }
}
```

---

## 2. Dialogue Track Annotation

### 2.1 Speaker-Level Annotations

```json
{
  "track_type": "dialogue",
  "speakers": [
    {
      "speaker_id": "SPK_001",
      "speaker_type": "on_screen",
      "gender": "female",
      "age_range": "25-35",
      "language": "zh-CN",
      "dialect": "mandarin_standard",
      "voice_characteristics": {
        "pitch_range": "medium",
        "timbre": "warm",
        "speaking_rate": "normal"
      }
    }
  ]
}
```

**Speaker Type Categories**:
- `on_screen`: Visible speaker with lip movements
- `off_screen`: Speaker not visible (voiceover, phone call)
- `narrator`: Non-diegetic narration
- `singing`: Musical vocal performance

### 2.2 Utterance-Level Annotations

```json
{
  "utterances": [
    {
      "speaker_id": "SPK_001",
      "start_time": 1.200,
      "end_time": 3.850,
      "text": "我们去公园吧",
      "text_romanized": "wǒmen qù gōngyuán ba",
      "emotion": {
        "primary": "happy",
        "intensity": 0.7,
        "valence": 0.8,
        "arousal": 0.6
      },
      "prosody": {
        "speaking_rate_wpm": 180,
        "pitch_mean_hz": 220,
        "energy_level": "medium"
      },
      "lip_sync": {
        "quality": "high",
        "syncnet_confidence": 0.92,
        "offset_ms": 15
      }
    }
  ]
}
```

**Emotion Categories** (aligned with Seedance evaluation):
- `neutral`, `happy`, `sad`, `angry`, `surprised`, `fearful`, `disgusted`
- `tender`, `excited`, `anxious`, `contemplative`

### 2.3 Phoneme-Level Annotations (for lip-sync training)

```json
{
  "phoneme_alignment": [
    {
      "phoneme": "w",
      "start_time": 1.200,
      "end_time": 1.280,
      "viseme": "W",
      "lip_shape": "rounded"
    },
    {
      "phoneme": "o",
      "start_time": 1.280,
      "end_time": 1.400,
      "viseme": "O",
      "lip_shape": "open_rounded"
    }
  ]
}
```

**Viseme Categories** (visual phoneme equivalents):
- Bilabial: P, B, M (lips closed)
- Labiodental: F, V (lower lip to upper teeth)
- Open: A, AH (wide open mouth)
- Rounded: O, W, U (rounded lips)
- Spread: E, I (spread lips)
- Neutral: rest position

### 2.4 Dialogue Quality Metrics

| Metric | Scale | Description |
|--------|-------|-------------|
| Speech Clarity | 1-5 | Intelligibility of speech |
| Naturalness | 1-5 | How natural the speech sounds |
| Emotional Expressiveness | 1-5 | Richness of emotional delivery |
| Lip-Sync Accuracy | 1-5 | Visual-audio alignment quality |
| Dialect Accuracy | 1-5 | Correctness of dialect features |

---

## 3. Original Score / Music Track Annotation

### 3.1 Global Music Annotations

```json
{
  "track_type": "music",
  "music_type": "non_diegetic_score",
  "global_properties": {
    "genre": ["orchestral", "cinematic"],
    "sub_genre": "epic_trailer",
    "mood": {
      "primary": "tension",
      "secondary": "anticipation",
      "valence": -0.3,
      "arousal": 0.8,
      "energy": 0.7
    },
    "tempo_bpm": 120,
    "time_signature": "4/4",
    "key": "D_minor",
    "instrumentation": [
      "strings_ensemble",
      "brass_section",
      "timpani",
      "piano"
    ],
    "production_style": "cinematic_orchestral"
  }
}
```

**Music Type Categories**:
- `non_diegetic_score`: Background music not from scene source
- `diegetic_music`: Music from visible source (radio, band, street musician)
- `theme_music`: Recurring character/scene theme
- `transition_music`: Music bridging scene changes
- `stinger`: Short musical accent (shock, reveal)

### 3.2 Temporal Music Annotations

```json
{
  "music_segments": [
    {
      "start_time": 0.0,
      "end_time": 15.0,
      "section_type": "intro",
      "intensity_curve": [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
      "mood_progression": ["calm", "building", "tension"],
      "beat_timestamps": [0.0, 0.5, 1.0, 1.5, 2.0],
      "downbeat_timestamps": [0.0, 2.0, 4.0, 6.0],
      "phrase_boundaries": [0.0, 4.0, 8.0, 12.0]
    }
  ]
}
```

**Section Types** (from SongFormer / MIR analysis):
- `intro`, `verse`, `pre_chorus`, `chorus`, `bridge`
- `outro`, `interlude`, `breakdown`, `buildup`
- `stinger`, `transition`, `silence`

### 3.3 Scene-Music Correspondence

```json
{
  "scene_music_alignment": [
    {
      "scene_description": "Hero walks through dark forest",
      "music_function": "tension_building",
      "alignment_quality": 4,
      "mood_match": "high",
      "rhythm_match": {
        "walking_pace_matches_tempo": true,
        "action_beats_on_downbeats": true
      },
      "emotional_arc_match": {
        "scene_emotion": "anxious",
        "music_emotion": "suspenseful",
        "consistency": "high"
      }
    }
  ]
}
```

**Music Narrative Functions**:
- `tension_building`: Increasing suspense
- `resolution`: Emotional release
- `action_support`: Energizing action sequences
- `emotional_underscore`: Reinforcing character emotions
- `scene_setting`: Establishing location/time period
- `transition`: Bridging between scenes
- `comedic_punctuation`: Humorous musical accents
- `horror_atmosphere`: Creating dread/unease

### 3.4 Music Quality Metrics

| Metric | Scale | Description |
|--------|-------|-------------|
| Production Quality | 1-5 | Recording/mixing quality |
| Genre Authenticity | 1-5 | How well it fits the labeled genre |
| Mood Appropriateness | 1-5 | Match between music mood and scene |
| Temporal Alignment | 1-5 | Beat/rhythm alignment with visual action |
| Emotional Support | 1-5 | How well music enhances narrative emotion |
| Originality | 1-5 | Distinctiveness vs generic stock music |

---

## 4. Scene Sound Effects Track Annotation

### 4.1 Sound Event Annotations

```json
{
  "track_type": "sound_effects",
  "events": [
    {
      "event_id": "SFX_001",
      "start_time": 2.300,
      "end_time": 2.800,
      "category_l1": "object_interaction",
      "category_l2": "impact",
      "category_l3": "door_slam",
      "description": "Heavy wooden door slamming shut",
      "acoustic_properties": {
        "loudness_db": -8,
        "frequency_range": "low_mid",
        "duration_ms": 500,
        "attack_ms": 20,
        "decay_ms": 480
      },
      "spatial": {
        "position": "center_left",
        "distance": "near",
        "reverb": "indoor_medium"
      },
      "visual_correspondence": {
        "visual_event": "door_closing",
        "visual_frame_start": 55,
        "visual_frame_end": 67,
        "causal_type": "direct",
        "temporal_offset_ms": 0
      },
      "material": {
        "primary": "wood",
        "secondary": "metal_hinge",
        "surface": "hard"
      }
    }
  ]
}
```

### 4.2 Sound Effect Category Taxonomy

```
Level 1: Sound Effect Type
├── Human Sounds
│   ├── Body Movement (footsteps, clapping, rustling clothes)
│   ├── Vocal Non-Speech (breathing, coughing, laughing, crying)
│   └── Physical Interaction (eating, drinking, typing)
│
├── Object Interaction
│   ├── Impact (hitting, dropping, breaking, crashing)
│   ├── Friction (rubbing, scraping, sliding, grinding)
│   ├── Manipulation (opening, closing, pouring, tearing)
│   └── Deformation (bending, stretching, crushing, crumpling)
│
├── Environmental
│   ├── Weather (rain, thunder, wind, hail)
│   ├── Water (waves, dripping, splashing, flowing)
│   ├── Nature (birds, insects, leaves, branches)
│   └── Geological (earthquake, rockfall, avalanche)
│
├── Mechanical / Technical
│   ├── Vehicles (engine, brakes, horn, tires)
│   ├── Machinery (motor, gears, hydraulics, compressor)
│   ├── Electronics (beep, buzz, hum, static)
│   └── Tools (saw, drill, hammer, wrench)
│
├── Explosive / Destructive
│   ├── Explosions (blast, detonation, fireworks)
│   ├── Fire (crackling, roaring, sizzling)
│   └── Destruction (collapse, shatter, crumble)
│
└── Abstract / Designed
    ├── UI Sounds (notification, click, swipe)
    ├── Transitions (whoosh, sweep, rise)
    └── Impacts (cinematic hit, bass drop)
```

### 4.3 Causal Relationship Annotations

**Causality Types**:
- `direct`: Visual action directly produces sound (hammer hits nail → impact sound)
- `indirect`: Visual action implies sound (person walking → footsteps)
- `reactive`: Sound is a reaction to visual event (glass breaks → shatter sound)
- `ambient_triggered`: Environmental event triggers sound (wind → rustling leaves)
- `off_screen`: Sound source not visible but implied by context

**Temporal Relationship**:
- `synchronous`: Sound occurs at same time as visual event (±50ms)
- `anticipatory`: Sound slightly precedes visual event (e.g., whoosh before impact)
- `delayed`: Sound follows visual event (e.g., thunder after lightning)
- `continuous`: Sound persists throughout visual event (e.g., engine running)

### 4.4 Sound Effect Quality Metrics

| Metric | Scale | Description |
|--------|-------|-------------|
| Temporal Precision | 1-5 | Accuracy of onset/offset timing |
| Causal Plausibility | 1-5 | Does the sound match the visual cause? |
| Material Accuracy | 1-5 | Does the sound match the material? |
| Spatial Consistency | 1-5 | Does positioning match visual source? |
| Loudness Appropriateness | 1-5 | Is the volume level realistic? |
| Acoustic Realism | 1-5 | Does it sound like a real recording? |

---

## 5. Ambient / Room Tone Track Annotation

### 5.1 Environmental Annotations

```json
{
  "track_type": "ambient",
  "environment": {
    "location_type": "outdoor_urban",
    "specific_location": "city_street",
    "time_of_day": "afternoon",
    "weather": "clear",
    "crowd_density": "moderate"
  },
  "acoustic_properties": {
    "reverb_type": "outdoor_open",
    "reverb_time_ms": 200,
    "background_noise_level_db": -30,
    "frequency_profile": "broadband_with_low_traffic_rumble"
  },
  "ambient_elements": [
    {
      "element": "traffic_hum",
      "presence": "continuous",
      "level_db": -25,
      "description": "Distant traffic rumble"
    },
    {
      "element": "bird_chirping",
      "presence": "intermittent",
      "level_db": -35,
      "description": "Occasional bird calls"
    },
    {
      "element": "wind",
      "presence": "continuous",
      "level_db": -30,
      "description": "Light breeze"
    }
  ]
}
```

### 5.2 Environment Category Taxonomy

```
Indoor Environments
├── Residential (bedroom, kitchen, living room, bathroom)
├── Commercial (office, store, restaurant, cafe)
├── Public (hospital, school, library, museum)
├── Industrial (factory, warehouse, workshop)
├── Entertainment (theater, concert hall, bar, club)
└── Transport (car interior, train, airplane, elevator)

Outdoor Environments
├── Urban (city street, park, plaza, rooftop)
├── Suburban (residential street, garden, parking lot)
├── Rural (countryside, farm, village)
├── Nature (forest, beach, mountain, desert, river)
├── Water (ocean, lake, waterfall, rain)
└── Extreme (storm, blizzard, volcanic)
```

### 5.3 Ambient Continuity Annotations

```json
{
  "continuity": {
    "consistency_across_cuts": "high",
    "environment_changes": [
      {
        "timestamp": 5.0,
        "from_environment": "indoor_office",
        "to_environment": "outdoor_street",
        "transition_type": "hard_cut",
        "ambient_transition": "abrupt"
      }
    ],
    "persistent_elements": ["air_conditioning_hum"],
    "intermittent_elements": ["phone_ringing", "keyboard_typing"]
  }
}
```

### 5.4 Ambient Quality Metrics

| Metric | Scale | Description |
|--------|-------|-------------|
| Environmental Accuracy | 1-5 | Does ambient match the visual scene? |
| Spatial Realism | 1-5 | Does it sound like the depicted space? |
| Continuity | 1-5 | Is ambient consistent across the segment? |
| Immersiveness | 1-5 | Does it enhance the sense of presence? |
| Noise Level Appropriateness | 1-5 | Is background noise at realistic levels? |

---

## 6. Cross-Track Annotations

### 6.1 Track Interaction Labels

```json
{
  "cross_track_annotations": {
    "dialogue_music_relationship": {
      "music_ducks_for_dialogue": true,
      "music_supports_dialogue_emotion": true,
      "music_tempo_matches_speech_rhythm": false
    },
    "sfx_dialogue_relationship": {
      "sfx_interrupts_dialogue": false,
      "sfx_punctuates_dialogue": true,
      "sfx_masks_dialogue": false
    },
    "music_sfx_relationship": {
      "sfx_on_musical_beats": true,
      "music_builds_to_sfx_climax": true,
      "sfx_replaces_music_element": false
    },
    "overall_mix_quality": {
      "balance": 4,
      "clarity": 4,
      "depth": 3,
      "immersiveness": 4
    }
  }
}
```

### 6.2 Audio-Visual Scene Coherence

```json
{
  "scene_coherence": {
    "overall_score": 4.5,
    "dimensions": {
      "visual_audio_match": 5,
      "emotional_consistency": 4,
      "spatial_consistency": 4,
      "temporal_consistency": 5,
      "narrative_support": 4
    },
    "issues": [],
    "strengths": [
      "Excellent lip-sync throughout",
      "Music mood perfectly matches scene tension",
      "Footstep sounds match walking surface"
    ]
  }
}
```

---

## 7. Annotation Workflow for Multi-Track Audio

### 7.1 Recommended Pipeline

```
Step 1: Audio Source Separation
    Input: Mixed audio track
    Tool: htdemucs, Demucs v4
    Output: Separated tracks (vocals, drums, bass, other)
    ↓
Step 2: Track Classification
    Input: Separated tracks + original mix
    Tool: Audio classification model
    Output: Track type labels (dialogue, music, SFX, ambient)
    ↓
Step 3: Automated Pre-Annotation
    Input: Classified tracks + video
    Tools: Whisper (speech), SyncNet (lip-sync), MIR tools (music),
           Audio event detection (SFX), MLLM (captions)
    Output: Draft annotations per track
    ↓
Step 4: Human Review & Refinement
    Input: Draft annotations + audio-video playback
    Tool: Label Studio with custom audio-video interface
    Output: Refined annotations with quality ratings
    ↓
Step 5: Cross-Track Annotation
    Input: Per-track annotations
    Tool: Custom annotation interface
    Output: Track interaction labels, scene coherence scores
    ↓
Step 6: Quality Assurance
    Input: Complete annotations
    Tool: Inter-annotator agreement, automated consistency checks
    Output: Validated final annotations
```

### 7.2 Annotation Time Estimates

| Track Type | Automated Pre-Annotation | Human Refinement | Total per Minute of Video |
|------------|-------------------------|------------------|--------------------------|
| Dialogue | ~5 seconds | ~3 minutes | ~3 minutes |
| Music | ~10 seconds | ~2 minutes | ~2 minutes |
| Sound Effects | ~10 seconds | ~5 minutes | ~5 minutes |
| Ambient | ~5 seconds | ~1 minute | ~1 minute |
| Cross-Track | N/A | ~2 minutes | ~2 minutes |
| **Total** | **~30 seconds** | **~13 minutes** | **~13 minutes** |

### 7.3 Annotator Skill Requirements

| Track Type | Required Skills |
|------------|----------------|
| Dialogue | Linguistic knowledge, emotion recognition, phonetics |
| Music | Music theory, genre knowledge, production experience |
| Sound Effects | Foley knowledge, material acoustics, spatial audio |
| Ambient | Environmental acoustics, recording experience |
| Cross-Track | Audio mixing/mastering experience, film sound design |

---

## 8. Integration with Seedance-Label Platform

### 8.1 Label Studio Configuration

**Recommended Template Structure**:
```xml
<View>
  <Video name="video" value="$video_url"/>
  <AudioPlus name="audio" value="$audio_url"/>

  <!-- Track Presence -->
  <Header value="Track Presence"/>
  <Choices name="tracks_present" toName="audio" choice="multiple">
    <Choice value="dialogue"/>
    <Choice value="music"/>
    <Choice value="sound_effects"/>
    <Choice value="ambient"/>
  </Choices>

  <!-- Dialogue Annotations -->
  <Header value="Dialogue Track"/>
  <Labels name="dialogue_labels" toName="audio">
    <Label value="speech_on_screen"/>
    <Label value="speech_off_screen"/>
    <Label value="narration"/>
    <Label value="singing"/>
  </Labels>

  <!-- Music Annotations -->
  <Header value="Music Track"/>
  <Labels name="music_labels" toName="audio">
    <Label value="score_background"/>
    <Label value="diegetic_music"/>
    <Label value="theme_music"/>
    <Label value="transition"/>
  </Labels>

  <!-- Sound Effects Annotations -->
  <Header value="Sound Effects"/>
  <Labels name="sfx_labels" toName="audio">
    <Label value="human_sounds"/>
    <Label value="object_interaction"/>
    <Label value="environmental"/>
    <Label value="mechanical"/>
    <Label value="explosive"/>
  </Labels>

  <!-- Quality Ratings -->
  <Header value="Quality Assessment"/>
  <Rating name="audio_quality" toName="audio" maxRating="5"/>
  <Rating name="sync_quality" toName="audio" maxRating="5"/>
  <Rating name="expressiveness" toName="audio" maxRating="5"/>
</View>
```

### 8.2 Export Format

**Unified JSON Schema** (compatible with training pipelines):
```json
{
  "video_id": "clip_001",
  "duration": 10.0,
  "fps": 24,
  "audio_sr": 48000,
  "tracks": {
    "dialogue": { ... },
    "music": { ... },
    "sound_effects": { ... },
    "ambient": { ... }
  },
  "cross_track": { ... },
  "quality": { ... },
  "metadata": {
    "annotator_id": "ANN_001",
    "annotation_date": "2026-03-02",
    "annotation_time_seconds": 780,
    "confidence": 0.9
  }
}
```

---

## 9. Conclusion

This multi-track audio annotation taxonomy provides a comprehensive framework for labeling training data for video generation models. Key principles:

1. **Track-level decomposition**: Separate annotations for dialogue, music, sound effects, and ambient
2. **Hierarchical categorization**: Multi-level taxonomies for each track type
3. **Temporal precision**: Frame-level or sub-frame annotations where needed
4. **Quality assessment**: Both objective metrics and subjective ratings
5. **Cross-track relationships**: How tracks interact and support each other
6. **Automated pre-annotation**: MLLM and ML tools for scalability
7. **Human refinement**: Expert validation for quality assurance

This taxonomy directly supports training of models like Seedance 2.0 (dual-channel stereo, multi-track output), OVI (symmetric dual-branch), HunyuanVideo-Foley (Foley sound effects), and UniAVGen (unified audio-video generation).

---

**Document Version**: 1.0
**Last Updated**: March 2, 2026
