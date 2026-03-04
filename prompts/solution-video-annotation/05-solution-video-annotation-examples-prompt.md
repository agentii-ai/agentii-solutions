# Examples Section — agentii.Solutions Video Annotation Solution

## Context

This is the "show, don't tell" section. It demonstrates real annotation output examples from the Video Annotation pipeline — a cinematic scene annotated across all 8 dimensions, a multi-track audio annotation with frame-precise alignment, and a physical motion annotation showing how we label physics consistency. Use code blocks (JetBrains Mono) and multi-track timeline visualizations to make it feel technical and concrete.

The examples are grounded in real annotation patterns from our research: Seedance 2.0's multi-modal reference prompts, HunyuanVideo-Foley's audio-visual alignment data, OVI's cross-modal attention patterns, and SPOTLIGHT's error taxonomy.

## Content

**Section Headline** (Futura, 36-48px, Weight 700, Color #1F2937):
See the Annotation. Not a Promise — a Training Signal.

**Section Description** (Inter, 16-18px, Weight 400, Color #6B7280):
Real annotation output from real video clips. Every example below is model-ready — direct input to DiT training pipelines with no post-processing.

**Example 1 — Cinematic Scene Annotation (Left text, right code block)**:
- Title: "Wuxia Fight Scene → 8-Dimension Annotation"
- Description: "A 5-second martial arts scene annotated across all 8 dimensions simultaneously. The model receives scene semantics, camera grammar, physical motion, and synchronized audio tracks — everything needed to learn cinematic video generation."
- Code Block (JetBrains Mono, dark background #1F2937):
```json
{
  "clip_id": "wuxia-bamboo-001",
  "duration_s": 5.0,
  "fps": 24,
  "resolution": "1080p",
  "scene_content": {
    "subjects": ["white-robed swordsman", "straw-cloaked blade fighter"],
    "environment": "bamboo forest, rain, mist",
    "lighting": "overcast, diffused, dramatic lightning flash at 3.2s",
    "style": "wuxia cinematic, desaturated tones"
  },
  "narrative": {
    "beat": "climax",
    "tension": 0.95,
    "emotion": "intense confrontation → explosive release"
  },
  "tracking": [
    { "id": "char-01", "label": "swordsman", "frames": [0, 120], "pose": "combat_stance → lunge" },
    { "id": "char-02", "label": "blade_fighter", "frames": [0, 120], "pose": "defensive → counter" }
  ],
  "physical_motion": {
    "gravity": "consistent",
    "collision": "blade_contact at frame 78, mud_splash at frame 82",
    "material": "rain_droplets: physically_plausible, bamboo_leaves: wind_affected",
    "physics_score": 0.94
  },
  "camera": {
    "shots": [
      { "type": "medium_two_shot", "frames": [0, 36], "movement": "slow_push" },
      { "type": "extreme_slow_motion", "frames": [37, 96], "movement": "lateral_track" },
      { "type": "close_up", "frames": [97, 120], "movement": "static" }
    ]
  },
  "dialogue": null,
  "music": {
    "genre": "traditional_chinese_orchestral",
    "tempo_bpm": 140,
    "mood": "tension_building → explosive",
    "beat_markers": [0.0, 0.43, 0.86, 1.29, 1.71, 2.14, 2.57, 3.0, 3.21, 3.43]
  },
  "sound_effects": [
    { "event": "rain_ambient", "frames": [0, 120], "spatial": "surround" },
    { "event": "thunder_crack", "frame": 77, "spatial": "overhead" },
    { "event": "blade_clash", "frame": 78, "material": "steel_on_steel" },
    { "event": "mud_splash", "frame": 82, "material": "wet_earth" }
  ]
}
```

**Example 2 — Multi-Track Audio Annotation (Left text, right timeline visualization)**:
- Title: "Dialogue Scene → Frame-Precise Audio Alignment"
- Description: "A talking-head scene with background music and ambient sound, annotated with phoneme-level lip-sync alignment, speaker identification, and multi-track temporal boundaries. SyncNet-validated with offset ≤3 frames."
- Code Block (JetBrains Mono, dark background #1F2937):
```json
{
  "clip_id": "dialogue-cafe-042",
  "duration_s": 4.0,
  "audio_tracks": {
    "dialogue": {
      "speaker_id": "spk-female-01",
      "language": "zh-CN",
      "transcript": "这杯咖啡真的太好喝了",
      "phoneme_alignment": [
        { "phoneme": "zh", "start_ms": 120, "end_ms": 180, "lip_frame": 3 },
        { "phoneme": "e", "start_ms": 180, "end_ms": 240, "lip_frame": 5 },
        { "phoneme": "b", "start_ms": 280, "end_ms": 320, "lip_frame": 7 }
      ],
      "emotion": "delighted",
      "syncnet_confidence": 1.82,
      "syncnet_offset": 1
    },
    "music": {
      "genre": "jazz_lounge",
      "tempo_bpm": 92,
      "volume_db": -18,
      "role": "non_diegetic_background"
    },
    "ambient": {
      "scene": "indoor_cafe",
      "elements": ["espresso_machine_hiss", "distant_chatter", "cup_clink"],
      "room_tone": "warm_reverb"
    },
    "sound_effects": [
      { "event": "cup_set_down", "frame": 88, "material": "ceramic_on_wood" }
    ]
  },
  "quality": {
    "snr_db": 28,
    "sampling_rate_khz": 48,
    "imagebind_similarity": 0.72
  }
}
```

**Example 3 — Physics Annotation (Full-width code block)**:
- Title: "Physical Motion Validation — Error Detection & Scoring"
- Description: "Every clip is scored for physical consistency using the SPOTLIGHT error taxonomy. Physics violations are flagged with frame-precise timestamps, error categories, and severity scores — enabling models to learn what physically plausible motion looks like."
- Code Block (JetBrains Mono, dark background #1F2937):
```json
{
  "clip_id": "gymnastics-floor-017",
  "physics_validation": {
    "overall_score": 0.91,
    "errors": [
      {
        "type": "Motion",
        "severity": 2,
        "frames": [45, 52],
        "description": "Hair does not follow expected gravity arc during backflip rotation",
        "reasoning": "Hair strands maintain static position during 180° rotation. Expected: hair follows centripetal force trajectory with ~200ms delay."
      }
    ],
    "validated_physics": [
      { "property": "gravity", "status": "consistent", "confidence": 0.97 },
      { "property": "momentum_conservation", "status": "consistent", "confidence": 0.94 },
      { "property": "ground_contact", "status": "consistent", "confidence": 0.98 },
      { "property": "cloth_dynamics", "status": "minor_deviation", "confidence": 0.82 }
    ]
  }
}
```

## Layout

- **Container**: Max-width 1280px, centered
- **Background**: #FFFFFF
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Left-aligned, margin-bottom 16px
- **Description**: Left-aligned, max-width 720px, margin-bottom 64px
- **Example Layout**: Alternating left-right (zigzag) on desktop
  - Example 1: Text left (35%), code block right (65%)
  - Example 2: Text left (35%), code block right (65%)
  - Example 3: Full-width code block below text
- **Spacing Between Examples**: 64px vertical

## Screenshots to Attach

- `05-solution-video-annotation-examples-encord.png` — Reference video annotation output presentation
- `05-solution-video-annotation-examples-v7.png` — Reference tracking annotation output
- `05-solution-video-annotation-examples-labelbox.png` — Reference multimodal annotation output

## Design Specifications

### Typography
- **Section Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #1F2937
- **Section Description**: Inter, 16-18px, Weight 400, Color #6B7280
- **Example Title**: Futura, 24-28px, Weight 600, Color #1F2937
- **Example Description**: Inter, 16px, Weight 400, Color #6B7280, Line Height 1.5
- **Code Blocks**: JetBrains Mono, 14px, Weight 400
- **Table Headers**: Inter, 14px, Weight 600, Color #1F2937
- **Table Body**: Inter, 14px, Weight 400, Color #374151

### Colors
- **Background**: #FFFFFF
- **Code Block Background**: #1F2937 (navy)
- **Code Text**: #E5E7EB (light gray) with syntax highlighting
- **JSON Keys**: #C4B5FD (light purple)
- **JSON Strings**: #86EFAC (light green)
- **JSON Numbers**: #FDE68A (light yellow)
- **Physics Score High (>0.9)**: #10B981 (green)
- **Physics Score Medium (0.7-0.9)**: #F59E0B (amber)
- **Physics Score Low (<0.7)**: #EF4444 (red)

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Description**: 16px
- **Description to First Example**: 64px
- **Between Examples**: 64px
- **Example Title to Description**: 12px
- **Description to Code/Table**: 24px
- **Code Block Padding**: 24px internal

### Components — Code Blocks
- **Background**: #1F2937
- **Border Radius**: 8px
- **Padding**: 24px
- **Font**: JetBrains Mono, 14px
- **Line Height**: 1.6
- **Copy Button**: Top-right corner, subtle gray (#6B7280) with hover (#9CA3AF)

### Responsive
- **Desktop (1280px+)**: Alternating left-right layout, code blocks 65% width
- **Tablet (768px-1279px)**: Vertical stack, full-width code blocks
- **Mobile (375px-767px)**: Vertical stack, code blocks with horizontal scroll

### Accessibility
- **Code Blocks**: `<pre><code>` with `aria-label`
- **Contrast**: Code text on navy = 11.6:1 (AAA)

---

## Design Guidelines Appendix

<!-- IMPORTANT: Paste full content of references/00-core/00-core-design-guidelines.md below -->
