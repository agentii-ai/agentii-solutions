# Prompt Template: Solutions / Features Section

**Template Type**: Solutions
**Use Cases**: Landing page solutions, use case page features, capability showcases
**Last Updated**: 2026-03-04

---

## Template Structure

```markdown
# {Section Name} — agentii.Solutions {Page Name}

## Context

This section presents {number} solution/feature cards in a grid layout. Each card represents a distinct capability or service area, color-coded by solution type. The section should demonstrate concrete value through specific examples rather than marketing language.

## Content

**Section Headline** (Futura 36-48px, Weight 700):
{Insert section headline}

**Section Description** (Inter 16-18px, Weight 400, optional):
{Insert supporting description — 1-2 sentences}

**Card 1 — {Title}**:
- Icon/Visual: {Describe icon or visual element}
- Title: {Card title}
- Description: {2-3 sentences describing this solution/feature}
- Color Accent: {Hex value — e.g., #3B82F6 for Document Processing}
- CTA Link: {Optional link text and destination}

**Card 2 — {Title}**:
- Icon/Visual: {Describe icon or visual element}
- Title: {Card title}
- Description: {2-3 sentences}
- Color Accent: {Hex value — e.g., #14B8A6 for Video & Audio}
- CTA Link: {Optional}

**Card 3 — {Title}**:
- Icon/Visual: {Describe icon or visual element}
- Title: {Card title}
- Description: {2-3 sentences}
- Color Accent: {Hex value — e.g., #8B5CF6 for Synthetic Data}
- CTA Link: {Optional}

## Layout

- **Container**: Max-width 1280px, centered
- **Section Padding**: 96px vertical (desktop), 64px vertical (mobile)
- **Headline**: Centered or left-aligned, margin-bottom 16px
- **Description**: Centered or left-aligned, max-width 640px, margin-bottom 48px
- **Card Grid**: 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- **Card Gap**: 24px horizontal, 24px vertical
- **Card Internal Padding**: 32px

## Screenshots to Attach

- `{NN}-{page-name}-{section-name}-akira.png` — Reference card layout structure and spacing
- `{NN}-{page-name}-{section-name}-datarobot.png` — Reference color usage and visual hierarchy
- `{NN}-{page-name}-{section-name}-brightwave.png` — Reference modern card styling and hover effects

## Design Specifications

### Typography
- **Section Headline**: Futura, 36-48px (desktop) / 28-36px (mobile), Weight 700, Color #1F2937
- **Section Description**: Inter, 16-18px, Weight 400, Color #6B7280, Line Height 1.6
- **Card Title**: Futura, 24-28px, Weight 600, Color #1F2937
- **Card Description**: Inter, 16px, Weight 400, Color #6B7280, Line Height 1.5

### Colors
- **Background**: #FFFFFF or #F9FAFB (alternate with adjacent sections)
- **Card Background**: #FFFFFF
- **Card Border**: 1px solid #E5E7EB
- **Card Hover Border**: Color shifts to the card's accent color
- **Document Processing Accent**: #3B82F6 (blue)
- **Video & Audio Accent**: #14B8A6 (teal)
- **Synthetic Data Accent**: #8B5CF6 (purple)
- **Accent Usage**: Top border (3px), icon color, or subtle background tint

### Spacing
- **Section Padding**: 96px top and bottom (desktop) / 64px (mobile)
- **Headline to Description**: 16px
- **Description to Cards**: 48px
- **Card Grid Gap**: 24px
- **Card Internal Padding**: 32px
- **Card Icon to Title**: 16px
- **Card Title to Description**: 12px

### Components — Cards
- **Border Radius**: 12px
- **Shadow**: 0 1px 3px rgba(0,0,0,0.1)
- **Hover**: Lift 4px + shadow 0 4px 12px rgba(0,0,0,0.15) + border color shift to accent
- **Transition**: 200-300ms ease-out
- **Accent Indicator**: 3px top border in accent color, or colored icon, or subtle gradient

### Responsive Behavior
- **Desktop (1280px+)**: 3-column card grid
- **Tablet (768px-1279px)**: 2-column card grid
- **Mobile (375px-767px)**: 1-column, full-width cards, reduced padding (24px)

### Accessibility
- **Section**: Semantic `<section>` with `aria-labelledby` pointing to headline
- **Cards**: Use `<article>` or `<div role="group">` with descriptive labels
- **Color Coding**: Never rely on color alone — always pair with text labels or icons
- **Focus States**: 2-3px outline on card focus for keyboard navigation

---

## Design Guidelines Appendix

{APPEND FULL CONTENT OF references/00-core/00-core-design-guidelines.md HERE}
```

---

**Template Version**: 1.0.0
