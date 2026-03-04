# Annotation Pipeline Section — agentii.Solutions Video Annotation Solution

## Context

This section visualizes the end-to-end video annotation pipeline — how agentii.Solutions transforms raw video footage into structured, multi-dimensional training data for video generation models. The pipeline is inspired by the automated annotation pipelines used by SOTA models (HunyuanVideo-Foley's 100K-hour pipeline, OVI's multi-stage data processing, Seedance's multi-source data refinement). The section should use data pipeline visualizations with straight lines and 90-degree angles per the lattice architecture principle.

Key technical insight: SOTA video generation models use multi-stage automated pipelines with 70-80% rejection rates to ensure quality. Our pipeline mirrors this approach: Ingest → Scene Split → Multi-Track Separation → MLLM Annotation → Quality Filtering → Human Validation → Export.

## Content

**Section Headline** (Futura, 36-48px, Weight 700, Color #1F2937):
Ingest. Analyze. Annotate. Model-Ready.

**Section Description** (Inter, 16-18px, Weight 400, Color #6B7280):
Our agentic pipeline processes raw video through six stages — splitting scenes, separating audio tracks, annotating 8 dimensions with multimodal LLMs, filtering for quality, and exporting structured training data that DiT models consume directly.

**Pipeline Stage 1 — Ingest & Scene Split**:
- Icon: Video filmstrip with scissors (Purple #8B5CF6)
- Title: "Ingest & Scene Split"
- Description: "Raw video ingestion with automatic scene detection. Shot boundary detection, keyframe extraction, and temporal segmentation into coherent 3-15 second clips."
- Technical Detail: "Supports 4K+, 24-60fps. Uses PySceneDetect + ffmpeg for shot-aware splitting."

**Pipeline Stage 2 — Multi-Track Separation**:
- Icon: Audio waveform splitting into tracks (Purple #8B5CF6)
- Title: "Multi-Track Separation"
- Description: "Audio source separation into four parallel tracks: dialogue, music, sound effects, and ambient. Video decomposition into visual layers for independent annotation."
- Technical Detail: "htdemucs for audio separation. Whisper for speech transcription. SyncNet for lip-sync detection."

**Pipeline Stage 3 — 8-Dimension MLLM Annotation**:
- Icon: Brain/neural network with 8 output branches (Purple #8B5CF6)
- Title: "8-Dimension MLLM Annotation"
- Description: "Multimodal LLMs (Qwen2.5-Omni, Gemini) annotate each clip across all 8 dimensions simultaneously: scene content, narrative arc, object tracking, physical motion, camera grammar, dialogue, music, and sound effects."
- Technical Detail: "Frame-level (33ms) temporal precision. Phoneme-level alignment for dialogue. Beat markers for music."

**Pipeline Stage 4 — Quality Filtering & Alignment Verification**:
- Icon: Filter funnel with checkmark (Purple #8B5CF6)
- Title: "Quality Filtering"
- Description: "Multi-stage quality assessment: SNR ≥20dB, sampling rate ≥32kHz, SyncNet lip-sync confidence >1.5, ImageBind semantic alignment >0.5. Aggressive filtering ensures only high-quality annotations pass through."
- Technical Detail: "70-80% rejection rate. Better 10K hours of excellent data than 100K hours of mediocre data."

**Pipeline Stage 5 — Human Validation**:
- Icon: Person with magnifying glass (Purple #8B5CF6)
- Title: "Expert Human Validation"
- Description: "Selective human review on 5-10% of annotations. Domain experts validate edge cases: complex physical interactions, nuanced emotional tones, ambiguous camera movements. Inter-annotator agreement >95%."
- Technical Detail: "Film directors and audio engineers validate cinematic and audio annotations."

**Pipeline Stage 6 — Export**:
- Icon: Database/JSON structure (Teal #14B8A6)
- Title: "Model-Ready Export"
- Description: "Unified JSON schema with all 8 annotation dimensions, temporal boundaries, confidence scores, and reasoning traces. Direct input to DiT training pipelines — no post-processing required."
- Technical Detail: "Compatible with Seedance, Sora, Veo, Kling, Wan training data formats."

**Visual Element**: Large horizontal pipeline diagram showing:
- Video icon → Stage 1 → Stage 2 → Stage 3 → Stage 4 → Stage 5 → Stage 6 → JSON output
- Arrows connecting each stage (straight lines, 90-degree angles)
- Data flowing through the pipeline
- Use Purple (#8B5CF6) for pipeline structure
- Use Teal (#14B8A6) for output highlight

## Layout

- **Container**: Max-width 1280px, centered
- **Background**: White (#FFFFFF)
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Centered, margin-bottom 16px
- **Description**: Centered, max-width 640px, margin-bottom 64px
- **Pipeline Visual**: Full-width (max 1100px), centered, margin-bottom 48px
- **Stage Cards**: 3-column grid on desktop (2 rows), single column on mobile
- **Card Spacing**: 24px gap between cards

## Screenshots to Attach

- `03-solution-video-annotation-pipeline-encord.png` — Reference video annotation pipeline visualization
- `03-solution-video-annotation-pipeline-scale.png` — Reference data pipeline flow diagram
- `03-solution-video-annotation-pipeline-v7.png` — Reference automated annotation pipeline

## Design Specifications

### Typography
- **Section Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #1F2937
- **Section Description**: Inter, 16-18px, Weight 400, Color #6B7280
- **Stage Title**: Futura, 24px, Weight 600, Color #1F2937
- **Stage Description**: Inter, 16px, Weight 400, Color #6B7280, Line Height 1.5

### Colors
- **Background**: #FFFFFF
- **Pipeline Structure**: #8B5CF6 (Purple)
- **Output Highlight**: #14B8A6 (Teal)
- **Card Background**: #FFFFFF
- **Card Border**: 1px solid #E5E7EB

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Description**: 16px
- **Description to Pipeline Visual**: 64px
- **Pipeline Visual to Stage Cards**: 48px
- **Card Grid Gap**: 24px
- **Card Internal Padding**: 32px

### Components — Stage Cards
- **Border Radius**: 12px
- **Border**: 1px solid #E5E7EB
- **Shadow**: 0 1px 3px rgba(0,0,0,0.1)
- **Hover**: Lift 4px + shadow 0 4px 12px rgba(0,0,0,0.15)
- **Icon Size**: 48px × 48px, Purple or Teal
- **Icon to Title**: 16px margin
- **Title to Description**: 12px margin

### Pipeline Visualization
- **Nodes**: Circles or rounded squares, 80px × 80px, Purple fill
- **Arrows**: 4px width, Purple, straight lines with 90-degree angles
- **Labels**: Inter 14px, Weight 600, positioned above nodes
- **Data Flow**: Optional animated dots moving along arrows (200ms ease-out)

### Responsive
- **Desktop (1280px+)**: 3-column stage card grid (2 rows), full pipeline visual
- **Tablet (768px-1279px)**: 2-column stage card grid, scaled pipeline visual
- **Mobile (375px-767px)**: Single column, vertical pipeline visual, reduced padding

### Accessibility
- **Section**: `<section>` with `aria-labelledby` pointing to headline
- **Stage Cards**: `<article>` or `<div role="group">` with descriptive labels
- **Pipeline Visual**: `<svg>` with `<title>` and `<desc>` for screen readers
- **Contrast**: All text meets WCAG AA minimum

---

## Design Guidelines Appendix

<!-- IMPORTANT: Paste full content of references/00-core/00-core-design-guidelines.md below -->
