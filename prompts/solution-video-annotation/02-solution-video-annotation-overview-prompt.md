# Overview Section — agentii.Solutions Video Annotation Solution

## Context

This section provides a high-level overview of the Video Annotation solution, positioned immediately below the hero. It introduces the problem (traditional video annotation is frame-by-frame bounding boxes — useless for training video generation models) and the solution (agentic multimodal annotation that captures the 8 dimensions video generation models actually need). Use a white background to contrast with the dark hero above.

The key insight from our research: state-of-the-art video generation models (Seedance 2.0, Veo 3, Sora 2) have shifted from sequential audio-video pipelines to unified joint generation architectures. They need training data annotated across 8 dimensions simultaneously — not isolated labels. Traditional annotation companies (Scale AI, Labelbox, iMerit) still operate in the old paradigm of per-frame object detection. agentii.Solutions bridges this gap.

## Content

**Section Headline** (Futura, 36-48px, Weight 700, Color #1F2937):
Beyond Bounding Boxes. Multimodal Annotation for Video Generation.

**Section Description** (Inter, 16-18px, Weight 400, Color #6B7280):
Training Seedance, Sora, or Veo doesn't need more bounding boxes. It needs scene semantics, storytelling arcs, camera grammar, physical motion dynamics, and frame-precise audio-visual alignment — all annotated as a unified multimodal structure. That's what we build.

**Three Stat Cards** (horizontal row):

Card 1:
- Metric: "8"
- Label: "Annotation Dimensions"
- Detail: "Scene, story, tracking, motion, camera, dialogue, music, sound effects"

Card 2:
- Metric: "33ms"
- Label: "Temporal Precision"
- Detail: "Frame-level (30fps) and sub-frame phoneme-level alignment"

Card 3:
- Metric: "100K+"
- Label: "Hours Scalable"
- Detail: "Automated MLLM pipelines with selective human validation"

**Problem/Solution Block** (2-column layout):

Left Column — "Traditional Video Annotation":
- Frame-by-frame bounding boxes and segmentation masks
- Single-track labels (object detection OR audio — never both)
- No camera grammar, no storytelling, no physics awareness
- Manual annotation — caps at ~1K hours
- Output needs heavy post-processing for model training

Right Column — "agentii.Solutions":
- 8-dimension multimodal annotation in unified structure
- Multi-track parallel labels (video + audio + camera + motion)
- Camera grammar, narrative arcs, physical consistency built in
- Automated MLLM pipeline scales to 100K+ hours
- Model-ready output — direct input to DiT training pipelines

## Layout

- **Container**: Max-width 1280px, centered
- **Background**: #FFFFFF
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Left-aligned, margin-bottom 16px
- **Description**: Left-aligned, max-width 720px, margin-bottom 48px
- **Stat Cards**: 3-column grid, gap 24px, margin-bottom 64px
- **Problem/Solution Block**: 2-column grid, gap 32px
- **Left Column**: Background #F9FAFB, border 1px solid #E5E7EB, padding 32px, border-radius 12px
- **Right Column**: Background white, border 2px solid #8B5CF6, padding 32px, border-radius 12px

## Screenshots to Attach

- `02-solution-video-annotation-overview-encord.png` — Reference video annotation overview layout
- `02-solution-video-annotation-overview-v7.png` — Reference V7 Labs video annotation stats
- `02-solution-video-annotation-overview-scale.png` — Reference Scale AI enterprise overview

## Design Specifications

### Typography
- **Section Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #1F2937
- **Section Description**: Inter, 16-18px, Weight 400, Color #6B7280, Line Height 1.6
- **Stat Metric**: Futura, 48-56px, Weight 700, Color #8B5CF6
- **Stat Label**: Inter, 16px, Weight 600, Color #1F2937
- **Stat Detail**: Inter, 14px, Weight 400, Color #9CA3AF
- **Comparison Column Title**: Futura, 20px, Weight 600
- **Comparison List Items**: Inter, 15px, Weight 400, Line Height 1.6

### Colors
- **Background**: #FFFFFF
- **Stat Metric**: #8B5CF6 (Purple)
- **Traditional Column**: Background #F9FAFB, border #E5E7EB, title color #9CA3AF
- **agentii Column**: Background #FFFFFF, border #8B5CF6, title color #8B5CF6
- **List Bullet (Traditional)**: #E5E7EB (gray X or dash)
- **List Bullet (agentii)**: #8B5CF6 (purple checkmark)

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Description**: 16px
- **Description to Stat Cards**: 48px
- **Stat Cards to Comparison**: 64px
- **Stat Card Internal Padding**: 32px
- **Comparison Column Internal Padding**: 32px

### Components — Stat Cards
- **Border Radius**: 12px
- **Border**: 1px solid #E5E7EB
- **Padding**: 32px
- **Metric to Label**: 8px
- **Label to Detail**: 4px

### Responsive
- **Desktop (1280px+)**: 3-column stat cards, 2-column comparison
- **Tablet (768px-1279px)**: 3-column stat cards, 2-column comparison
- **Mobile (375px-767px)**: Single column for all, stacked vertically

---

## Design Guidelines Appendix

<!-- IMPORTANT: Paste full content of references/00-core/00-core-design-guidelines.md below -->
