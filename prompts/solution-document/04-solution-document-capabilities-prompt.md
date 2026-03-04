# Capabilities Section — agentii.Solutions Document Processing Solution

## Context

This section showcases the specific technical capabilities of the Document Processing solution. It uses a 4-card grid to highlight the four core capabilities that differentiate agentii.Solutions from traditional document annotation companies (iMerit, Klatch, Scale AI, etc.). Each capability should feel concrete and technical — show what the system does, not marketing promises.

## Content

**Section Headline** (Futura, 36-48px, Weight 700, Color #1F2937):
What Makes Our Document Processing Agent-Native

**Section Description** (Inter, 16-18px, Weight 400, Color #6B7280):
Every capability is designed for one outcome: data your agents can consume directly, with the reasoning context they need to act autonomously.

**Capability Card 1 — Chart Semantics Extraction**:
- Icon: Bar chart with data points highlighted (Primary Blue #3B82F6)
- Title: "Chart Semantics Extraction"
- Description: "We don't just OCR charts — we extract the underlying data points, axes, legends, and data series. Bar charts become structured arrays. Pie charts become percentage breakdowns. Line charts become time-series data."
- Technical Detail: "Supports: bar, line, pie, scatter, waterfall, stacked, and combination charts"

**Capability Card 2 — Table Structure Recognition**:
- Icon: Grid/table with highlighted cells (Primary Blue #3B82F6)
- Title: "Table Structure Recognition"
- Description: "Identifies header rows, data rows, subtotals, and grand totals. Recognizes financial statement structures — balance sheets, income statements, cash flow statements — and maps them to GAAP/IFRS standards."
- Technical Detail: "Handles nested tables, merged cells, multi-page tables, and footnote references"

**Capability Card 3 — Reasoning Trace Generation**:
- Icon: Brain/neural network with decision path (Primary Blue #3B82F6)
- Title: "Reasoning Trace Generation"
- Description: "Every extraction decision is documented: 'This is a balance sheet because the header reads Total Assets and Total Liabilities.' Agents receive not just data but the reasoning behind every classification."
- Technical Detail: "Includes confidence scores, alternative interpretations, and validation steps"

**Capability Card 4 — Compliance-Ready Output**:
- Icon: Shield with checkmark (Primary Blue #3B82F6)
- Title: "Compliance-Ready Output"
- Description: "Financial-grade precision with full audit trails. Numerical accuracy with proper decimal handling. Provenance tracking from source document to structured output. SOC 2, GDPR, and financial data protection compliant."
- Technical Detail: "SEC filing format support, GAAP/IFRS accounting standard mapping"

## Layout

- **Container**: Max-width 1280px, centered
- **Background**: #F9FAFB (off-white, alternating with white sections above/below)
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Centered, margin-bottom 16px
- **Description**: Centered, max-width 640px, margin-bottom 48px
- **Card Grid**: 2×2 grid on desktop (2 columns, 2 rows), single column on mobile
- **Card Gap**: 24px horizontal, 24px vertical
- **Card Internal Padding**: 32px

## Screenshots to Attach

- `04-solution-document-capabilities-imerit.png` — Reference document automation capability cards
- `04-solution-document-capabilities-unstructured.png` — Reference parsing capabilities layout
- `04-solution-document-capabilities-kili.png` — Reference OCR/PDF capability presentation

## Design Specifications

### Typography
- **Section Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #1F2937
- **Section Description**: Inter, 16-18px, Weight 400, Color #6B7280, Line Height 1.6
- **Card Title**: Futura, 22-24px, Weight 600, Color #1F2937
- **Card Description**: Inter, 15-16px, Weight 400, Color #6B7280, Line Height 1.5
- **Card Technical Detail**: JetBrains Mono, 13px, Weight 400, Color #9CA3AF

### Colors
- **Section Background**: #F9FAFB
- **Card Background**: #FFFFFF
- **Card Border**: 1px solid #E5E7EB
- **Card Hover Border**: #3B82F6
- **Icon Color**: #3B82F6
- **Technical Detail Background**: #F9FAFB (subtle code-block feel)

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Description**: 16px
- **Description to Cards**: 48px
- **Card Grid Gap**: 24px
- **Card Internal Padding**: 32px
- **Icon to Title**: 16px
- **Title to Description**: 12px
- **Description to Technical Detail**: 16px

### Components — Capability Cards
- **Border Radius**: 12px
- **Border**: 1px solid #E5E7EB
- **Shadow**: 0 1px 3px rgba(0,0,0,0.1)
- **Hover**: Lift 4px + shadow 0 4px 12px rgba(0,0,0,0.15) + border color #3B82F6
- **Transition**: 200-300ms ease-out
- **Icon Size**: 48px × 48px
- **Technical Detail**: Inline code-block style, padding 8px 12px, border-radius 6px, background #F9FAFB

### Responsive
- **Desktop (1280px+)**: 2×2 card grid
- **Tablet (768px-1279px)**: 2×2 card grid
- **Mobile (375px-767px)**: Single column, full-width cards

---

## Design Guidelines Appendix

<!-- IMPORTANT: Paste full content of references/00-core/00-core-design-guidelines.md below -->
