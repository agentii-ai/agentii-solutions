# Hero Section — agentii.Solutions Document Processing Solution

## Context

This is the hero section for the Document Processing solution page. It is the dedicated deep-dive page for agentii.Solutions' financial document processing capabilities. The page color accent is Primary Blue (#3B82F6) per the design system. The hero must immediately communicate that this is not generic OCR — it's agent-native document intelligence for financial institutions.

## Content

**Headline** (Futura, 56-72px desktop / 44-56px mobile, Weight 700, Color white on dark navy background):
Financial Documents Your Agents Can Read, Reason, and Act On.

**Tagline** (Inter, 18-20px, Weight 400, Color #E5E7EB on dark navy):
From 10-K filings to bank statements — we extract charts, tables, and numerical data into agent-use-ready structures with full reasoning traces. No post-processing. No human review.

**Primary CTA Button**:
- Label: "Request a Demo"
- Style: White background (#FFFFFF), text Primary Blue (#3B82F6), 14px vertical / 28px horizontal padding, 8px border radius
- Hover: #F9FAFB background + 2px lift

**Secondary CTA Button**:
- Label: "See Example Output"
- Style: 2px solid white border, white text, transparent background
- Hover: White background, #0F172A text

**Background**: Deep navy gradient (#0F172A to #1E293B at 135deg) with subtle blue radial glow at 30% 50%.

**Visual Element**: On the right side (desktop) or below text (mobile), show a stylized document-to-data pipeline visualization:
- A PDF icon on the left
- Arrow flowing right through 3 processing stages (Extract → Transform → Load)
- Structured JSON output on the right
- Use Primary Blue (#3B82F6) for the pipeline arrows and nodes
- Use navy (#1F2937) for the document icon
- Use teal (#14B8A6) for the JSON output highlight

## Layout

- **Background**: Full-bleed dark navy gradient (#0F172A → #1E293B)
- **Container**: Max-width 1280px, centered
- **Content Area**: 2-column on desktop (60% text / 40% visual), single column on mobile
- **Headline**: Futura 56-72px desktop, 44-56px mobile, line-height 1.05, letter-spacing -0.02em, color #FFFFFF
- **Tagline**: Inter 18-20px, line-height 1.6, max-width 540px, color #E5E7EB, margin-bottom 40px
- **CTA Buttons**: Horizontal flex, gap 16px, wrap on mobile
- **Section Padding**: 120px top, 80px bottom (desktop) / 80px top, 64px bottom (mobile)

## Screenshots to Attach

- `01-solution-document-hero-daloopa.png` — Reference financial data extraction hero layout
- `01-solution-document-hero-unstructured.png` — Reference document parsing hero with pipeline visual
- `01-solution-document-hero-scale.png` — Reference enterprise document AI hero styling

## Design Specifications

### Typography
- **Headline**: Futura, 56-72px (desktop) / 44-56px (mobile), Weight 700, Color #FFFFFF, Letter Spacing -0.02em, Line Height 1.05
- **Tagline**: Inter, 18-20px, Weight 400, Color #E5E7EB, Line Height 1.6
- **Button Text**: Inter, 16px, Weight 500

### Colors (Dark Hero)
- **Background**: linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)
- **Headline Text**: #FFFFFF
- **Tagline Text**: #E5E7EB
- **Primary Button**: Background #FFFFFF, Text #3B82F6
- **Secondary Button**: Border 2px solid #FFFFFF, Text #FFFFFF

### Spacing
- **Section Padding**: 120px top, 80px bottom (desktop) / 80px top, 64px bottom (mobile)
- **Headline to Tagline**: 24px
- **Tagline to Buttons**: 40px
- **Button Gap**: 16px

### Responsive
- **Desktop (1280px+)**: 2-column layout (text left, visual right)
- **Tablet (768px-1279px)**: Single column, visual below text, headline 48-56px
- **Mobile (375px-767px)**: Single column, headline 44px, buttons stack vertically

### Accessibility
- **Headline**: `<h1>` tag
- **Buttons**: Minimum 44px height
- **Focus States**: 2-3px white outline on dark background
- **Contrast**: White on #0F172A = 17.4:1 (AAA)

---

## Design Guidelines Appendix

<!-- IMPORTANT: When using this prompt in Lovable.dev, paste the full content of references/00-core/00-core-design-guidelines.md below this line -->
