# Prompt Template: CTA (Call-to-Action) Section

**Template Type**: CTA
**Use Cases**: Landing page CTA, use case page CTA, conversion-focused sections
**Last Updated**: 2026-03-04

---

## Template Structure

```markdown
# {Section Name} — agentii.Solutions {Page Name}

## Context

This is a call-to-action section designed to convert visitors into leads or customers. It should be bold, clear, and action-oriented with a single primary goal. The CTA should emphasize urgency or value without being pushy.

## Content

**Headline** (Futura 36-48px, Weight 700):
{Insert compelling headline — typically a question or bold statement}

**Supporting Text** (Inter 18-20px, Weight 400):
{Insert 1-2 sentences explaining what happens next or the value of taking action}

**Primary CTA Button**:
- Label: {e.g., "Request a Demo", "Contact Sales", "Get Started"}
- Action: {e.g., open contact form, navigate to demo page, scroll to form}

**Secondary CTA** (optional):
- Label: {e.g., "View Pricing", "Read Documentation"}
- Action: {e.g., navigate to pricing page, open docs}

**Trust Indicators** (optional):
{List any trust signals — e.g., "No credit card required", "Response within 24 hours", "Used by 100+ enterprises"}

## Layout

- **Container**: Max-width 1280px, centered
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Background**: Solid color (#3B82F6 or #14B8A6) or gradient
- **Content Area**: Centered, max-width 720px
- **Headline**: Centered, margin-bottom 16px
- **Supporting Text**: Centered, margin-bottom 32px
- **CTA Buttons**: Centered, horizontal layout with 16px gap
- **Trust Indicators**: Below buttons, small text, centered

## Screenshots to Attach

- `{NN}-{page-name}-cta-akira.png` — Reference CTA layout and button styling
- `{NN}-{page-name}-cta-datarobot.png` — Reference background treatment and color usage
- `{NN}-{page-name}-cta-brightwave.png` — Reference trust indicators and supporting text

## Design Specifications

### Typography
- **Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #FFFFFF (if on colored background) or #1F2937 (if on white)
- **Supporting Text**: Inter, 18-20px, Weight 400, Color #FFFFFF or #E5E7EB (if on colored background) or #6B7280 (if on white)
- **Button Text**: Inter, 16px, Weight 500
- **Trust Indicators**: Inter, 14px, Weight 400, Color #E5E7EB or #9CA3AF

### Colors

**Option 1: Teal Background (Recommended for CTA sections)**
- **Background**: #14B8A6 (teal)
- **Headline Text**: #FFFFFF
- **Supporting Text**: #E5E7EB
- **Primary Button Background**: #FFFFFF
- **Primary Button Text**: #14B8A6
- **Primary Button Hover**: #F9FAFB background, slight lift
- **Secondary Button Border**: 2px solid #FFFFFF
- **Secondary Button Text**: #FFFFFF
- **Secondary Button Hover**: #FFFFFF background, #14B8A6 text

**Option 2: Blue Background**
- **Background**: #3B82F6 (primary blue)
- **Headline Text**: #FFFFFF
- **Supporting Text**: #E5E7EB
- **Primary Button Background**: #FFFFFF
- **Primary Button Text**: #3B82F6
- **Primary Button Hover**: #F9FAFB background
- **Secondary Button**: Same as Option 1

**Option 3: White Background (Alternative)**
- **Background**: #FFFFFF
- **Headline Text**: #1F2937
- **Supporting Text**: #6B7280
- **Primary Button Background**: #14B8A6 (teal)
- **Primary Button Text**: #FFFFFF
- **Primary Button Hover**: #0D9488 (darker teal)
- **Secondary Button Border**: 2px solid #14B8A6
- **Secondary Button Text**: #14B8A6

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Supporting Text**: 16px
- **Supporting Text to Buttons**: 32px
- **Button Gap**: 16px horizontal
- **Buttons to Trust Indicators**: 24px

### Components — Buttons
- **Primary Button**:
  - Padding: 16px vertical, 32px horizontal (larger than standard for emphasis)
  - Border Radius: 8px
  - Font Size: 16px, Weight 500
  - Hover: Slight lift (2px) + shadow 0 4px 12px rgba(0,0,0,0.15)
  - Transition: 200ms ease-out

- **Secondary Button**:
  - Padding: 16px vertical, 32px horizontal
  - Border Radius: 8px
  - Border: 2px solid
  - Background: Transparent
  - Hover: Fill with border color, invert text color
  - Transition: 200ms ease-out

### Responsive Behavior
- **Desktop (1280px+)**: Full layout as described, buttons horizontal
- **Tablet (768px-1279px)**: Reduce headline to 32-40px, buttons horizontal
- **Mobile (375px-767px)**: Headline 28-36px, buttons stack vertically (full-width), padding 24px horizontal

### Accessibility
- **Section**: Semantic `<section>` with `aria-labelledby`
- **Buttons**: Minimum 44px height, clear focus states
- **Contrast**: White text on teal (#FFFFFF on #14B8A6) = 3.9:1 (AA for large text), White text on blue (#FFFFFF on #3B82F6) = 4.6:1 (AA)
- **Focus States**: 2-3px white outline on colored backgrounds, blue outline on white backgrounds

---

## Design Guidelines Appendix

{APPEND FULL CONTENT OF references/00-core/00-core-design-guidelines.md HERE}

---

## Example Usage

### Landing Page CTA

```markdown
# CTA Section — agentii.Solutions Landing Page

## Context
This is the final call-to-action section on the landing page, designed to convert visitors who have scrolled through all content and are ready to engage.

## Content

**Headline**:
Ready to make your data agent-ready?

**Supporting Text**:
Join 100+ enterprises using agentii.Solutions to power their agentic AI systems. Get started in days, not quarters.

**Primary CTA Button**:
- Label: "Request a Demo"
- Action: Open demo request modal

**Secondary CTA**:
- Label: "Contact Sales"
- Action: Scroll to contact form

**Trust Indicators**:
- "No credit card required"
- "Response within 24 hours"
- "SOC 2 Type II certified"

## Layout
{Use standard CTA layout with teal background (Option 1)}

## Screenshots to Attach
- `08-landing-cta-akira.png`
- `08-landing-cta-datarobot.png`
- `08-landing-cta-brightwave.png`

## Design Specifications
{Use Option 1: Teal Background specifications}
```

---

**Template Version**: 1.0.0
**Maintained By**: agentii.Solutions Design System
**Usage**: Copy this template, fill in the {placeholders}, and append the design guidelines to create a complete Lovable.dev prompt.
