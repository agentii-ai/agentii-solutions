# Prompt Template: Hero Section

**Template Type**: Hero
**Use Cases**: Landing page hero, use case page hero
**Last Updated**: 2026-03-04

---

## Template Structure

```markdown
# Hero Section — agentii.Solutions {Page Name}

## Context

This is the hero section for the {page name} page. It serves as the first impression for visitors and must immediately communicate the core value proposition. The hero should be bold, clear, and action-oriented.

## Content

**Headline** (Futura 56-72px, Weight 700):
{Insert headline text here — typically 2 lines max, bold statement}

**Tagline** (Inter 18-20px, Weight 400):
{Insert supporting tagline — 1-2 sentences explaining the value}

**Primary CTA Button**:
- Label: {e.g., "Contact Us", "Request a Demo", "Explore Solutions"}
- Action: {e.g., scroll to contact form, open modal, navigate to page}

**Secondary CTA Button** (optional):
- Label: {e.g., "Learn More", "View Use Cases"}
- Action: {e.g., scroll to next section, navigate to page}

**Visual Element** (optional):
{Describe any data visualization, abstract graphic, or image that accompanies the hero}

## Layout

- **Container**: Max-width 1280px, centered, padding 64px horizontal on desktop, 24px on mobile
- **Content Area**: Max-width 820px for text content, left-aligned
- **Headline**: Futura 56-72px on desktop (44-56px on mobile), line-height 1.05, letter-spacing -0.02em
- **Tagline**: Inter 18-20px, line-height 1.5-1.6, max-width 580px, margin-bottom 40px
- **CTA Buttons**: Horizontal flex layout, gap 16px, wrap on mobile
- **Vertical Spacing**: 120px padding-top on desktop (80px on mobile), 64px padding-bottom
- **Visual Element**: Below text content or as background element (specify placement)

## Screenshots to Attach

When using this template, attach the following screenshots from the section's screenshot directory:

- `{NN}-{page-name}-hero-akira.png` — Reference headline typography, CTA button placement, and overall layout structure
- `{NN}-{page-name}-hero-datarobot.png` — Reference data visualization elements and color usage
- `{NN}-{page-name}-hero-brightwave.png` — Reference spacing, whitespace, and modern aesthetic

## Design Specifications

### Typography
- **Headline**: Futura, 56-72px (desktop) / 44-56px (mobile), Weight 700, Color #1F2937, Letter Spacing -0.02em, Line Height 1.05
- **Tagline**: Inter, 18-20px, Weight 400, Color #6B7280, Line Height 1.5-1.6
- **Button Text**: Inter, 16px, Weight 500, Color #FFFFFF (primary) / #3B82F6 (secondary)

### Colors
- **Headline Text**: #1F2937 (navy)
- **Tagline Text**: #6B7280 (medium gray)
- **Primary Button Background**: #3B82F6 (primary blue)
- **Primary Button Hover**: #2563EB (darker blue)
- **Secondary Button Border**: 2px solid #3B82F6
- **Secondary Button Text**: #3B82F6
- **Secondary Button Hover Background**: #3B82F6
- **Secondary Button Hover Text**: #FFFFFF
- **Background**: #FFFFFF (white)

### Spacing
- **Section Padding**: 120px top, 64px bottom (desktop) / 80px top, 48px bottom (mobile)
- **Headline to Tagline**: 24px margin-bottom
- **Tagline to Buttons**: 40px margin-bottom
- **Button Gap**: 16px horizontal gap
- **Container Padding**: 64px horizontal (desktop) / 24px (mobile)

### Components
- **Primary Button**:
  - Padding: 14px vertical, 28px horizontal
  - Border Radius: 8px
  - Background: #3B82F6
  - Hover: Background #2563EB + 2px lift + shadow 0 4px 8px rgba(59, 130, 246, 0.3)
  - Transition: 200ms ease-out

- **Secondary Button**:
  - Padding: 14px vertical, 28px horizontal
  - Border Radius: 8px
  - Border: 2px solid #3B82F6
  - Background: Transparent
  - Hover: Background #3B82F6, Text #FFFFFF
  - Transition: 200ms ease-out

### Responsive Behavior
- **Desktop (1280px+)**: Full layout as described
- **Tablet (768px-1279px)**: Reduce headline to 48-56px, reduce padding to 48px horizontal
- **Mobile (375px-767px)**: Headline 44-56px, single column, buttons stack vertically, padding 24px horizontal

### Accessibility
- **Headline**: Semantic `<h1>` tag
- **Buttons**: Minimum 44px height for touch targets
- **Focus States**: 2-3px blue outline (#3B82F6) on keyboard focus
- **Contrast**: Headline (#1F2937 on #FFFFFF) = 16.1:1 (AAA), Tagline (#6B7280 on #FFFFFF) = 4.6:1 (AA)

---

## Design Guidelines Appendix

{APPEND FULL CONTENT OF references/00-core/00-core-design-guidelines.md HERE}

---

## Example Usage

### Landing Page Hero

```markdown
# Hero Section — agentii.Solutions Landing Page

## Context
This is the hero section for the landing page. It serves as the first impression for visitors and must immediately communicate that agentii.Solutions provides agentic-native data solutions.

## Content

**Headline**:
Data by agents, for agents.
Agent-Use-Ready Data at Scale.

**Tagline**:
From financial documents to reasoning traces — structured for agents to act on, not humans to review.

**Primary CTA Button**:
- Label: "Contact Us"
- Action: Scroll to contact form section

**Secondary CTA Button**:
- Label: "Request a Demo"
- Action: Open demo request modal

**Visual Element**:
Abstract data visualization bar below the hero text — horizontal bars of varying widths in primary blue, teal, and navy colors representing data pipelines.

## Layout
{Use standard hero layout as specified above}

## Screenshots to Attach
- `01-landing-hero-akira.png`
- `01-landing-hero-datarobot.png`
- `01-landing-hero-brightwave.png`

## Design Specifications
{Use standard design specs as specified above}
```

---

**Template Version**: 1.0.0
**Maintained By**: agentii.Solutions Design System
**Usage**: Copy this template, fill in the {placeholders}, and append the design guidelines to create a complete Lovable.dev prompt.
