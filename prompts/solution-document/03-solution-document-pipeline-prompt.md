# ETL Pipeline Section — agentii.Solutions Document Processing Solution

## Context

This section visualizes the Extract-Transform-Load pipeline for financial document processing. It demonstrates how agentii.Solutions converts raw PDFs into agent-use-ready structured data. The section should use data pipeline visualizations with straight lines and 90-degree angles per the lattice architecture principle.

## Content

**Section Headline** (Futura, 36-48px, Weight 700, Color #1F2937):
Extract. Transform. Load. Agent-Ready.

**Section Description** (Inter, 16-18px, Weight 400, Color #6B7280):
Our agentic pipeline processes financial documents through three stages, capturing not just data but the reasoning behind every extraction decision.

**Pipeline Stage 1 — Extract**:
- Icon: Document with scan lines (Primary Blue #3B82F6)
- Title: "Extract"
- Description: "OCR with layout preservation. Chart image extraction. Table structure recognition. Nested table handling."
- Technical Detail: "Processes 50+ document formats including 10-K, 10-Q, bank statements, earnings reports."

**Pipeline Stage 2 — Transform**:
- Icon: Gear/cog with data flow (Primary Blue #3B82F6)
- Title: "Transform"
- Description: "Chart semantics extraction. Table-to-JSON mapping. GAAP/IFRS compliance validation. Reasoning trace generation."
- Technical Detail: "Captures decision paths: 'This is a balance sheet because...' with confidence scores."

**Pipeline Stage 3 — Load**:
- Icon: Database/JSON structure (Teal #14B8A6)
- Title: "Load"
- Description: "Agent-use-ready JSON output. No post-processing required. Semantic annotations included. Tool call logs embedded."
- Technical Detail: "Agents can directly query, analyze, and act on the structured data."

**Visual Element**: Large horizontal pipeline diagram showing:
- PDF icon → Extract node → Transform node → Load node → JSON output
- Arrows connecting each stage (straight lines, 90-degree angles)
- Data flowing through the pipeline (animated or static)
- Use Primary Blue (#3B82F6) for pipeline structure
- Use Teal (#14B8A6) for output highlight

## Layout

- **Container**: Max-width 1280px, centered
- **Background**: White (#FFFFFF)
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Centered, margin-bottom 16px
- **Description**: Centered, max-width 640px, margin-bottom 64px
- **Pipeline Visual**: Full-width (max 1100px), centered, margin-bottom 48px
- **Stage Cards**: 3-column grid on desktop, single column on mobile
- **Card Spacing**: 24px gap between cards

## Screenshots to Attach

- `03-solution-document-pipeline-unstructured.png` — Reference document parsing pipeline visualization
- `03-solution-document-pipeline-datarobot.png` — Reference data pipeline flow diagram
- `03-solution-document-pipeline-scale.png` — Reference ETL process visualization

## Design Specifications

### Typography
- **Section Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #1F2937
- **Section Description**: Inter, 16-18px, Weight 400, Color #6B7280
- **Stage Title**: Futura, 24px, Weight 600, Color #1F2937
- **Stage Description**: Inter, 16px, Weight 400, Color #6B7280, Line Height 1.5

### Colors
- **Background**: #FFFFFF
- **Pipeline Structure**: #3B82F6 (Primary Blue)
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
- **Icon Size**: 48px × 48px, Primary Blue or Teal
- **Icon to Title**: 16px margin
- **Title to Description**: 12px margin

### Pipeline Visualization
- **Nodes**: Circles or rounded squares, 80px × 80px, Primary Blue fill
- **Arrows**: 4px width, Primary Blue, straight lines with 90-degree angles
- **Labels**: Inter 14px, Weight 600, positioned above nodes
- **Data Flow**: Optional animated dots moving along arrows (200ms ease-out)

### Responsive
- **Desktop (1280px+)**: 3-column stage card grid, full pipeline visual
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
