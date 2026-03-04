# Prompt Template: Use Cases / Examples Section

**Template Type**: Use Cases
**Use Cases**: Landing page use cases, industry-specific examples, data output demonstrations
**Last Updated**: 2026-03-04

---

## Template Structure

```markdown
# {Section Name} — agentii.Solutions {Page Name}

## Context

This section demonstrates concrete use cases or examples of the solution in action. It should show real data outputs, code snippets, or interactive demonstrations rather than abstract descriptions. The focus is on "show, don't tell" — proving capability through tangible examples.

## Content

**Section Headline** (Futura 36-48px, Weight 700):
{Insert section headline}

**Section Description** (Inter 16-18px, Weight 400, optional):
{Insert supporting description}

**Use Case 1 — {Industry/Application}**:
- Title: {Use case title}
- Description: {2-3 sentences explaining the scenario}
- Example Output: {Describe what data/output is shown — table, code block, visualization}
- Key Metrics: {Optional — e.g., "98% accuracy", "10x faster"}

**Use Case 2 — {Industry/Application}**:
- Title: {Use case title}
- Description: {2-3 sentences}
- Example Output: {Describe output}
- Key Metrics: {Optional}

**Use Case 3 — {Industry/Application}**:
- Title: {Use case title}
- Description: {2-3 sentences}
- Example Output: {Describe output}
- Key Metrics: {Optional}

## Layout

- **Container**: Max-width 1280px, centered
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Left-aligned, margin-bottom 16px
- **Description**: Left-aligned, max-width 640px, margin-bottom 48px
- **Use Case Layout**: Alternating left-right layout (zigzag) or vertical stack
- **Example Output**: Code blocks with syntax highlighting, data tables, or interactive visualizations
- **Spacing Between Use Cases**: 64px vertical

## Screenshots to Attach

- `{NN}-{page-name}-{section-name}-akira.png` — Reference use case presentation style and data visualization
- `{NN}-{page-name}-{section-name}-scale.png` — Reference table layouts and code block styling
- `{NN}-{page-name}-{section-name}-datarobot.png` — Reference industry-specific examples

## Design Specifications

### Typography
- **Section Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #1F2937
- **Section Description**: Inter, 16-18px, Weight 400, Color #6B7280
- **Use Case Title**: Futura, 24-28px, Weight 600, Color #1F2937
- **Use Case Description**: Inter, 16px, Weight 400, Color #6B7280, Line Height 1.5
- **Code Blocks**: JetBrains Mono, 14-16px, Weight 400
- **Table Headers**: Inter, 14px, Weight 600, Color #1F2937
- **Table Body**: Inter, 14px, Weight 400, Color #374151

### Colors
- **Background**: #F9FAFB (light gray) or #FFFFFF
- **Code Block Background**: #1F2937 (navy) with syntax highlighting
- **Code Text**: #E5E7EB (light gray)
- **Table Header Background**: #F9FAFB
- **Table Border**: #E5E7EB
- **Table Row Hover**: #F3F4F6
- **Accent Highlights**: Use solution-specific colors (#3B82F6, #14B8A6, #8B5CF6)

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Description**: 16px
- **Description to First Use Case**: 48px
- **Between Use Cases**: 64px
- **Use Case Title to Description**: 12px
- **Description to Example Output**: 24px
- **Code Block Padding**: 24px internal
- **Table Cell Padding**: 12px vertical, 16px horizontal

### Components — Code Blocks
- **Background**: #1F2937 (navy)
- **Border Radius**: 8px
- **Padding**: 24px
- **Font**: JetBrains Mono, 14-16px
- **Syntax Highlighting**: Use standard syntax colors (keywords blue, strings green, comments gray)
- **Copy Button**: Top-right corner, subtle gray button with hover state

### Components — Data Tables
- **Border**: 1px solid #E5E7EB
- **Border Radius**: 8px (outer table)
- **Header Background**: #F9FAFB
- **Header Text**: Inter, 14px, Weight 600, Color #1F2937
- **Row Alternating**: White / #F9FAFB
- **Row Hover**: #F3F4F6
- **Cell Padding**: 12px vertical, 16px horizontal
- **Responsive**: Horizontal scroll on mobile or restructured layout

### Responsive Behavior
- **Desktop (1280px+)**: Alternating left-right layout for use cases
- **Tablet (768px-1279px)**: Vertical stack, full-width examples
- **Mobile (375px-767px)**: Vertical stack, code blocks with horizontal scroll, tables with horizontal scroll or simplified view

### Accessibility
- **Code Blocks**: Use `<pre><code>` with `aria-label` describing the code purpose
- **Tables**: Use semantic `<table>` with `<thead>`, `<tbody>`, `<th>`, `<td>` and `scope` attributes
- **Contrast**: Code text (#E5E7EB on #1F2937) = 11.6:1 (AAA)
- **Keyboard Navigation**: Tables and code blocks must be keyboard-accessible

---

## Design Guidelines Appendix

{APPEND FULL CONTENT OF references/00-core/00-core-design-guidelines.md HERE}

---

## Example Usage

### Landing Page Use Cases

```markdown
# Use Cases — agentii.Solutions Landing Page

## Context
This section demonstrates three concrete use cases across different industries, showing real data outputs and proving capability through tangible examples.

## Content

**Section Headline**:
See agentii.Solutions in Action

**Section Description**:
Real data outputs from real deployments. No mock-ups, no promises — just results.

**Use Case 1 — Financial Document Processing**:
- Title: "M&A Deal Analysis"
- Description: Extract structured data from 100+ page merger agreements, including financial terms, indemnification clauses, and termination fees. Agent-ready JSON output in seconds.
- Example Output: Interactive data table showing extracted fields (Deal Value, Termination Fee, Indemnification Cap) from 3 sample agreements
- Key Metrics: "98% field accuracy, 50x faster than manual review"

**Use Case 2 — Video AI Training Data**:
- Title: "Dual-Channel DiT Annotation"
- Description: Frame-by-frame semantic labeling for video generation models. Object tracking, camera motion, and soundtrack alignment in a unified workflow.
- Example Output: Video frame with bounding boxes, motion vectors, and audio waveform overlay
- Key Metrics: "10K frames/hour throughput, 95% annotation consistency"

**Use Case 3 — Synthetic Reasoning Data**:
- Title: "Tool-Calling Datasets"
- Description: Generate synthetic agent trajectories with reasoning traces, tool calls, and execution logs. Train LLMs to use APIs and external tools.
- Example Output: Code block showing a synthetic agent conversation with function calls and responses
- Key Metrics: "1M synthetic samples/day, verified execution correctness"

## Layout
{Use standard use cases layout as specified above}

## Screenshots to Attach
- `05-landing-usecases-akira.png`
- `05-landing-usecases-scale.png`
- `05-landing-usecases-datarobot.png`
```

---

**Template Version**: 1.0.0
**Maintained By**: agentii.Solutions Design System
**Usage**: Copy this template, fill in the {placeholders}, and append the design guidelines to create a complete Lovable.dev prompt.
