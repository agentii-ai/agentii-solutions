# Examples Section — agentii.Solutions Document Processing Solution

## Context

This is the "show, don't tell" section. It demonstrates real output examples from the Document Processing pipeline — a financial report with charts extracted into structured JSON, a table mapped to GAAP standards, and a reasoning trace showing how the agent made extraction decisions. Use code blocks (JetBrains Mono) and data tables to make it feel technical and concrete. This section is what separates agentii.Solutions from competitors who only show marketing screenshots.

## Content

**Section Headline** (Futura, 36-48px, Weight 700, Color #1F2937):
See the Output. Not a Promise — a Result.

**Section Description** (Inter, 16-18px, Weight 400, Color #6B7280):
Real extraction output from real financial documents. Every example below is agent-use-ready — no cleaning, no post-processing, no human review.

**Example 1 — Chart Extraction (Left text, right code block)**:
- Title: "Revenue Trend Chart → Structured Time-Series"
- Description: "A bar chart from a 10-K annual report is extracted into structured JSON with data points, axes, and metadata. The agent can immediately query 'What was Q3 revenue?' without parsing an image."
- Code Block (JetBrains Mono, dark background #1F2937):
```json
{
  "chart_type": "bar",
  "title": "Quarterly Revenue (FY2025)",
  "x_axis": { "label": "Quarter", "values": ["Q1", "Q2", "Q3", "Q4"] },
  "y_axis": { "label": "Revenue ($M)", "unit": "USD millions" },
  "data_series": [
    { "name": "Revenue", "values": [142.3, 158.7, 171.2, 189.4] }
  ],
  "source": { "document": "ACME_10K_2025.pdf", "page": 12 },
  "reasoning": "Identified as bar chart by axis labels and rectangular elements. Values extracted via OCR on bar labels with cross-validation against table on page 14."
}
```

**Example 2 — Table Extraction (Left text, right data table)**:
- Title: "Balance Sheet → GAAP-Mapped Structure"
- Description: "A balance sheet table from an earnings report is extracted with header recognition, row classification, and GAAP standard mapping. Nested subtotals and footnote references are preserved."
- Data Table:

| Field | Value | GAAP Category | Confidence |
|-------|-------|---------------|------------|
| Total Current Assets | $2,847M | Assets.Current | 0.99 |
| Property & Equipment | $1,234M | Assets.NonCurrent.PPE | 0.98 |
| Total Assets | $5,612M | Assets.Total | 0.99 |
| Current Liabilities | $1,456M | Liabilities.Current | 0.98 |
| Long-term Debt | $2,100M | Liabilities.NonCurrent.Debt | 0.97 |
| Stockholders' Equity | $2,056M | Equity.Total | 0.99 |

**Example 3 — Reasoning Trace (Full-width code block)**:
- Title: "Extraction Decision Log — Full Reasoning Trace"
- Description: "Every extraction decision is logged with reasoning, confidence, and alternative interpretations. Agents receive the 'why' behind every data point — not just the 'what'."
- Code Block (JetBrains Mono, dark background #1F2937):
```json
{
  "trace_id": "ext-2025-10k-acme-p12",
  "steps": [
    {
      "action": "classify_element",
      "input": "Visual element on page 12, coordinates (120, 340, 580, 720)",
      "output": "bar_chart",
      "reasoning": "Rectangular elements with consistent width, labeled x-axis with quarters, y-axis with dollar values. Confidence: 0.97",
      "alternatives": [{ "type": "stacked_bar", "confidence": 0.12 }]
    },
    {
      "action": "extract_data_points",
      "input": "bar_chart at page 12",
      "output": { "Q1": 142.3, "Q2": 158.7, "Q3": 171.2, "Q4": 189.4 },
      "reasoning": "OCR on bar labels. Cross-validated against 'Revenue Summary' table on page 14 — values match within 0.1% tolerance.",
      "tool_calls": ["ocr_extract", "table_cross_reference", "numerical_validation"]
    }
  ]
}
```

## Layout

- **Container**: Max-width 1280px, centered
- **Background**: #FFFFFF
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Left-aligned, margin-bottom 16px
- **Description**: Left-aligned, max-width 720px, margin-bottom 64px
- **Example Layout**: Alternating left-right (zigzag) on desktop
  - Example 1: Text left (40%), code block right (60%)
  - Example 2: Text left (40%), data table right (60%)
  - Example 3: Full-width code block below text
- **Spacing Between Examples**: 64px vertical

## Screenshots to Attach

- `05-solution-document-examples-daloopa.png` — Reference financial data output presentation
- `05-solution-document-examples-unstructured.png` — Reference parsed document output examples
- `05-solution-document-examples-llamaparse.png` — Reference code block output styling

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
- **JSON Keys**: #93C5FD (light blue)
- **JSON Strings**: #86EFAC (light green)
- **JSON Numbers**: #FDE68A (light yellow)
- **Table Header Background**: #F9FAFB
- **Table Border**: #E5E7EB
- **Table Row Hover**: #F3F4F6
- **Confidence High (>0.95)**: #10B981 (green)
- **Confidence Medium (0.8-0.95)**: #F59E0B (amber)

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

### Components — Data Tables
- **Border**: 1px solid #E5E7EB
- **Border Radius**: 8px (outer)
- **Header Background**: #F9FAFB
- **Header Text**: Inter, 14px, Weight 600
- **Row Alternating**: White / #F9FAFB
- **Row Hover**: #F3F4F6
- **Cell Padding**: 12px vertical, 16px horizontal

### Responsive
- **Desktop (1280px+)**: Alternating left-right layout, code blocks 60% width
- **Tablet (768px-1279px)**: Vertical stack, full-width code blocks
- **Mobile (375px-767px)**: Vertical stack, code blocks with horizontal scroll

### Accessibility
- **Code Blocks**: `<pre><code>` with `aria-label`
- **Tables**: Semantic `<table>` with `<thead>`, `<tbody>`, `<th scope>`
- **Contrast**: Code text on navy = 11.6:1 (AAA)

---

## Design Guidelines Appendix

<!-- IMPORTANT: Paste full content of references/00-core/00-core-design-guidelines.md below -->
