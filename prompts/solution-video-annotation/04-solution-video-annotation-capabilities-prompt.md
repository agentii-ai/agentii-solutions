# Capabilities Section — agentii.Solutions Video Annotation Solution

## Context

This section showcases the 8 annotation dimensions that define agentii.Solutions' video annotation — the core technical differentiator. These 8 dimensions are derived directly from what SOTA video generation models (Seedance 2.0, Sora 2, Veo 3, HunyuanVideo-Foley, OVI, UniAVGen) actually require for training. Traditional annotation companies offer bounding boxes and segmentation. We offer the full multimodal annotation stack that DiT-based models consume.

The 8 dimensions come from our research analysis of 8 SOTA models: scene content, narrative/storytelling, object/character tracking, physical motion dynamics, camera grammar, dialogue/speech, music/score, and sound effects/ambient. Each dimension maps directly to a training signal these models use.

## Content

**Section Headline** (Futura, 36-48px, Weight 700, Color #1F2937):
8 Annotation Dimensions. One Unified Structure.

**Section Description** (Inter, 16-18px, Weight 400, Color #6B7280):
Every dimension maps to a training signal that video generation models actually use. Not generic labels — purpose-built annotation for DiT architectures.

**Dimension Card 1 — Scene Content & Semantics**:
- Icon: Eye/scene landscape (Purple #8B5CF6)
- Title: "Scene Content & Semantics"
- Description: "Dense scene descriptions: subjects, actions, environment, lighting, atmosphere, art style. Goes beyond 'what's in the frame' to capture the visual semantics models need for coherent generation."
- Technical Detail: "MLLM-generated captions (Qwen2.5-Omni, Gemini). Dual long/short caption format per Seedance 1.0 methodology."
- Models that use this: Seedance 1.0/1.5/2.0, Sora 2, Veo 3, Open-Sora 2.0

**Dimension Card 2 — Narrative & Storytelling Arcs**:
- Icon: Book/story arc curve (Purple #8B5CF6)
- Title: "Narrative & Storytelling"
- Description: "Scene-level narrative labels: emotional progression, dramatic tension, story beats, character motivations. Enables models to generate videos with coherent storytelling — not just random motion."
- Technical Detail: "Three-act structure mapping. Emotional valence/arousal per segment. Narrative function labels."
- Models that use this: Seedance 2.0 (multi-shot narrative), AutoMV (music video storytelling)

**Dimension Card 3 — Object & Character Tracking**:
- Icon: Person silhouette with tracking path (Purple #8B5CF6)
- Title: "Object & Character Tracking"
- Description: "Multi-object identity persistence across occlusions, scene changes, and camera cuts. Character consistency labels (age, appearance, clothing) maintained across shots. Pose estimation and keypoint tracking."
- Technical Detail: "Cross-scene re-identification. SAM 2 integration. DeepSORT-compatible tracking IDs."
- Models that use this: Seedance 2.0 (character consistency), Veo 3 (identity persistence)

**Dimension Card 4 — Physical Motion Dynamics**:
- Icon: Physics/gravity arrow with trajectory (Purple #8B5CF6)
- Title: "Physical Motion Dynamics"
- Description: "Physics-aware motion labels: gravity, momentum, collision, material deformation, fluid dynamics, cloth simulation. Annotates whether motion obeys real-world physical laws — critical for reducing physics violations in generated video."
- Technical Detail: "PhyGDPO-informed taxonomy. 6 error categories: Physics, Appearance, Logical, Motion, Anatomy, Adherence."
- Models that use this: PhyGDPO (Meta), Seedance 2.0 (physical consistency), Wan 2.1

**Dimension Card 5 — Camera Grammar & Cinematography**:
- Icon: Film camera with motion path (Purple #8B5CF6)
- Title: "Camera Grammar & Cinematography"
- Description: "Professional cinematography labels: shot types (close-up, wide, medium), camera movements (dolly, pan, tilt, crane, Hitchcock zoom), transitions (cut, dissolve, wipe), depth of field, and composition rules."
- Technical Detail: "Film-director validated taxonomy. Supports Seedance 1.5's cinematic camera control vocabulary."
- Models that use this: Seedance 1.0/1.5/2.0 (multi-shot cinematography), Sora 2

**Dimension Card 6 — Dialogue & Speech**:
- Icon: Speech bubble with waveform (Purple #8B5CF6)
- Title: "Dialogue & Speech"
- Description: "Phoneme-level lip-sync alignment, speaker identification, emotion labels, multilingual/dialect support. Frame-precise word-to-mouth mapping for natural talking-head generation."
- Technical Detail: "Whisper transcription + SyncNet validation. Offset ≤3 frames, confidence >1.5. Multi-language + dialect support (Seedance 1.5: Cantonese, Sichuan, Shanghai dialects)."
- Models that use this: Seedance 1.5/2.0, OVI, UniAVGen, HunyuanVideo-Foley

**Dimension Card 7 — Music & Score**:
- Icon: Musical note with beat markers (Purple #8B5CF6)
- Title: "Music & Score"
- Description: "Beat markers, tempo detection, genre classification, mood labels, key/chord progression. Enables models to generate video that moves in rhythm with music — visual cuts aligned to audio beats."
- Technical Detail: "SongFormer structure analysis. Beat-motion alignment. Diegetic vs. non-diegetic classification."
- Models that use this: Seedance 2.0 (dual-channel stereo), AutoMV (music video generation)

**Dimension Card 8 — Sound Effects & Ambient**:
- Icon: Speaker with sound waves (Purple #8B5CF6)
- Title: "Sound Effects & Ambient"
- Description: "Causal action-sound correspondence: 'glass shatters because it hit the floor.' Material property labels, spatial positioning, room tone. Enables models to generate physically plausible Foley audio synchronized to visual events."
- Technical Detail: "HunyuanVideo-Foley taxonomy. ImageBind semantic alignment. AudioBox aesthetic scoring. SNR ≥20dB threshold."
- Models that use this: HunyuanVideo-Foley (Tencent), Seedance 2.0, OVI

## Layout

- **Container**: Max-width 1280px, centered
- **Background**: #F9FAFB (off-white, alternating with white sections above/below)
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Centered, margin-bottom 16px
- **Description**: Centered, max-width 640px, margin-bottom 48px
- **Card Grid**: 2×4 grid on desktop (2 columns, 4 rows), single column on mobile
- **Card Gap**: 24px horizontal, 24px vertical
- **Card Internal Padding**: 32px

## Screenshots to Attach

- `04-solution-video-annotation-capabilities-encord.png` — Reference video annotation capability cards
- `04-solution-video-annotation-capabilities-v7.png` — Reference V7 Labs tracking capabilities
- `04-solution-video-annotation-capabilities-labelbox.png` — Reference multimodal annotation capabilities

## Design Specifications

### Typography
- **Section Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #1F2937
- **Section Description**: Inter, 16-18px, Weight 400, Color #6B7280, Line Height 1.6
- **Card Title**: Futura, 22-24px, Weight 600, Color #1F2937
- **Card Description**: Inter, 15-16px, Weight 400, Color #6B7280, Line Height 1.5
- **Card Technical Detail**: JetBrains Mono, 13px, Weight 400, Color #9CA3AF
- **Models Tag**: Inter, 12px, Weight 500, Color #8B5CF6

### Colors
- **Section Background**: #F9FAFB
- **Card Background**: #FFFFFF
- **Card Border**: 1px solid #E5E7EB
- **Card Hover Border**: #8B5CF6
- **Icon Color**: #8B5CF6
- **Technical Detail Background**: #F9FAFB (subtle code-block feel)
- **Models Tag Background**: #EDE9FE (light purple)

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Description**: 16px
- **Description to Cards**: 48px
- **Card Grid Gap**: 24px
- **Card Internal Padding**: 32px
- **Icon to Title**: 16px
- **Title to Description**: 12px
- **Description to Technical Detail**: 16px
- **Technical Detail to Models Tag**: 12px

### Components — Dimension Cards
- **Border Radius**: 12px
- **Border**: 1px solid #E5E7EB
- **Shadow**: 0 1px 3px rgba(0,0,0,0.1)
- **Hover**: Lift 4px + shadow 0 4px 12px rgba(0,0,0,0.15) + border color #8B5CF6
- **Transition**: 200-300ms ease-out
- **Icon Size**: 48px × 48px
- **Technical Detail**: Inline code-block style, padding 8px 12px, border-radius 6px, background #F9FAFB
- **Models Tag**: Inline pill, padding 4px 8px, border-radius 4px, background #EDE9FE

### Responsive
- **Desktop (1280px+)**: 2×4 card grid
- **Tablet (768px-1279px)**: 2×4 card grid
- **Mobile (375px-767px)**: Single column, full-width cards

---

## Design Guidelines Appendix

<!-- IMPORTANT: Paste full content of references/00-core/00-core-design-guidelines.md below -->
