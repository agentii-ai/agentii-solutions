# CTA Section — agentii.Solutions Document Processing Solution

## Context

This is the final call-to-action section on the Document Processing solution page. It targets visitors who have scrolled through the full page — they understand the pipeline, capabilities, examples, and benefits. Now convert them. Use the teal background (Option 1 from the CTA template) to create visual contrast with the off-white benefits section above.

## Content

**Headline** (Futura, 36-48px, Weight 700, Color #FFFFFF):
Ready to make your financial documents agent-use-ready?

**Supporting Text** (Inter, 18-20px, Weight 400, Color #E5E7EB):
See how agentii.Solutions extracts chart semantics, table structures, and reasoning traces from your documents — in a live demo with your own files.

**Primary CTA Button**:
- Label: "Request a Demo"
- Style: White background (#FFFFFF), text Teal (#14B8A6), 16px vertical / 32px horizontal padding, 8px border radius
- Hover: #F9FAFB background + 2px lift + shadow

**Secondary CTA Button**:
- Label: "Contact Sales"
- Style: 2px solid white border, white text, transparent background
- Hover: White background, Teal text

**Trust Indicators** (below buttons, small text):
- "No credit card required"
- "Response within 24 hours"
- "SOC 2 Type II certified"

## Layout

- **Container**: Max-width 1280px, centered
- **Background**: #14B8A6 (Teal) — full-bleed
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Content Area**: Centered, max-width 720px
- **Headline**: Centered, margin-bottom 16px
- **Supporting Text**: Centered, margin-bottom 32px
- **CTA Buttons**: Centered, horizontal layout with 16px gap, wrap on mobile
- **Trust Indicators**: Centered, margin-top 24px, flex row with 24px gap

## Screenshots to Attach

- `07-solution-document-cta-akira.png` — Reference CTA section layout
- `07-solution-document-cta-datarobot.png` — Reference enterprise CTA with trust indicators
- `07-solution-document-cta-scale.png` — Reference conversion-focused CTA styling

## Design Specifications

### Typography
- **Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #FFFFFF
- **Supporting Text**: Inter, 18-20px, Weight 400, Color #E5E7EB, Line Height 1.6
- **Button Text**: Inter, 16px, Weight 500
- **Trust Indicators**: Inter, 14px, Weight 400, Color #E5E7EB

### Colors (Teal Background)
- **Background**: #14B8A6 (Teal)
- **Headline Text**: #FFFFFF
- **Supporting Text**: #E5E7EB
- **Primary Button**: Background #FFFFFF, Text #14B8A6
- **Primary Button Hover**: Background #F9FAFB, slight lift
- **Secondary Button**: Border 2px solid #FFFFFF, Text #FFFFFF
- **Secondary Button Hover**: Background #FFFFFF, Text #14B8A6
- **Trust Indicator Text**: #E5E7EB
- **Trust Indicator Dot/Icon**: #FFFFFF

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Supporting Text**: 16px
- **Supporting Text to Buttons**: 32px
- **Button Gap**: 16px horizontal
- **Buttons to Trust Indicators**: 24px
- **Trust Indicator Gap**: 24px horizontal

### Components — Buttons
- **Primary Button**: Padding 16px vertical / 32px horizontal, border-radius 8px, hover lift 2px + shadow
- **Secondary Button**: Padding 16px vertical / 32px horizontal, border-radius 8px, border 2px solid
- **Transition**: 200ms ease-out

### Responsive
- **Desktop (1280px+)**: Full layout, buttons horizontal, trust indicators horizontal
- **Tablet (768px-1279px)**: Headline 32-40px, buttons horizontal
- **Mobile (375px-767px)**: Headline 28-36px, buttons stack vertically (full-width), trust indicators wrap, padding 24px horizontal

### Accessibility
- **Section**: `<section>` with `aria-labelledby`
- **Buttons**: Minimum 44px height, clear focus states
- **Contrast**: White on Teal (#FFFFFF on #14B8A6) = 3.9:1 (AA for large text — headline qualifies)
- **Focus States**: 2-3px white outline

---

## Design Guidelines Appendix

<!-- IMPORTANT: Paste full content of references/00-core/00-core-design-guidelines.md below -->
