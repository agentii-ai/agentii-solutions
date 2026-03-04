# agentii.Solutions Essential Design Guidelines

**Quick Reference for Lovable.dev Prompts**

---

## Brand Identity

**Website:** www.agentii.net
**Brand:** agentii.Solutions (business unit of agentii.ai)
**Philosophy:** Agentic-Native Data | Technology-Oriented Minimalism | Lattice Architecture

---

## Typography

### Primary Fonts
- **Brand/Headers:** Futura (geometric, modern) - 700 weight for H1/H2, 600 for H3
- **Body Text:** Inter or SF Pro Display - 400 weight, 16-18px
- **Code Blocks:** JetBrains Mono - 14-16px

### Type Scale
```
H1: Futura 56-72px, Weight 700, Letter Spacing -0.02em
H2: Futura 36-48px, Weight 700, Letter Spacing -0.01em
H3: Futura 28-32px, Weight 600, Letter Spacing 0
H4: Inter 20-24px, Weight 600
Body: Inter 16-18px, Weight 400, Line Height 1.5-1.6
Caption: Inter 12-14px, Weight 400
Code: JetBrains Mono 14-16px, Weight 400
```

---

## Color Palette

### Core Colors
```
Primary Blue:    #3B82F6  (brand signature - use liberally)
Purple Accent:   #8B5CF6  (Synthetic Data solution)
Teal Accent:     #14B8A6  (Video/Audio solution)
Navy Text:       #1F2937  (primary text)
White:           #FFFFFF  (primary background)
Off-White:       #F9FAFB  (secondary background)
Light Gray:      #E5E7EB  (dividers)
Medium Gray:     #9CA3AF  (secondary text)
```

### Solution Area Color Coding
- **Document Processing:** Primary Blue (#3B82F6)
- **Video & Audio:** Teal (#14B8A6)
- **Synthetic Data:** Purple (#8B5CF6)

---

## Layout System

### Spacing (8px Base Unit)
```
Padding:   16px (internal), 24px (cards), 32px (sections)
Margins:   24-48px (between sections), 64-96px (major breaks)
Gap:       16px (horizontal), 24px (vertical)
Container: Max-width 1280px, centered
```

### Grid System
- 12-column grid for desktop
- Modular card layouts (3-column for features, 2-column for details)
- Strict alignment to 8px grid
- Generous whitespace (60-100px vertical spacing)

---

## Components

### Buttons
```
Primary:
  - Background: #3B82F6
  - Text: White, Weight 500
  - Padding: 14px vertical, 28px horizontal
  - Border Radius: 8px
  - Hover: Darker blue (#2563EB) + subtle lift (2px)

Secondary:
  - Border: 2px solid #3B82F6
  - Text: #3B82F6, Weight 500
  - Background: Transparent
  - Hover: Background #3B82F6, Text White
```

### Cards
```
Border Radius: 12px
Padding: 24-32px
Shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover: Lift 4px + shadow 0 4px 12px rgba(0,0,0,0.15)
Border: 1px solid #E5E7EB (optional)
```

### Tables
```
Header: Navy (#1F2937), Weight 600, 14px
Rows: Alternating white/#F9FAFB
Border: 1px solid #E5E7EB
Padding: 12px 16px
Hover: Background #F3F4F6
```

---

## Design Principles

### 1. Lattice/Table-First Architecture
- Structured, grid-based layouts
- 90-degree angles, sharp corners (no rounded organic shapes)
- Data pipeline visualizations with straight lines
- Tabular data presentation

### 2. Minimalist Professional Restraint
- Limited color palette (3-4 colors per page)
- Generous whitespace
- No decorative elements without purpose
- Conservative animation (200-300ms ease-out)

### 3. Data-Forward Philosophy
- Show real examples, not marketing promises
- Interactive demos and code snippets
- Concrete use cases with specifications
- Technical depth for developer audience

### 4. Agentic-Native Messaging
- "Data by agents, for agents" positioning
- Emphasize machine-readable, semantically rich data
- Agent-to-agent workflow focus
- Reasoning traces and tool-calling datasets

---

## Interactive Elements

### Hover Effects
```
Buttons: Color change + 2px lift + shadow
Cards: 4px lift + enhanced shadow + border color shift
Links: Underline + color shift to #2563EB
Tables: Row background #F3F4F6
```

### Animations
```
Transitions: 200-300ms ease-out
Scroll Effects: Fade-in + slide-up (20px)
Loading: Skeleton screens (not spinners)
Micro-interactions: Subtle, purposeful only
```

---

## Accessibility

- **Contrast:** WCAG AAA compliance (7:1 minimum)
- **Focus States:** 2-3px blue outline (#3B82F6)
- **Touch Targets:** Minimum 44px height/width
- **Keyboard Navigation:** Full support required
- **Alt Text:** All images and data visualizations

---

## Content Presentation

### Hero Section
```
- Futura headline (56-72px)
- Tagline: "Data by Agents, for Agents"
- 3 solution cards (Document, Video, Synthetic)
- Primary CTA: "Explore Solutions" or "Book a Demo"
```

### Solution Sections
```
- Color-coded by solution area
- Feature cards (3-column grid)
- Interactive demos or code examples
- Technical specifications table
- Use case examples
```

### Bilingual Support
- Language switcher: EN / 中文 (top right)
- Professional translation quality
- Culturally appropriate examples
- Consistent technical terminology

---

## Brand Consistency with agentii.ai

### Maintain
- Same core blue (#3B82F6)
- Same spacing system (8px base)
- Same professional tone
- Same data-forward approach
- Same generous whitespace
- Same accessibility standards

### Differentiate
- Futura typography (vs. Inter only)
- Accent colors (purple, teal)
- Modular cards (vs. pure tables)
- Interactive demos
- Code examples
- Developer-friendly content

---

## Key Differentiators vs. Competitors

### vs. Akira.ai
- Financial industry specialization
- Agentic-native data philosophy
- Synthetic reasoning data focus

### vs. Labellerr
- Dual-channel DiT training focus
- Agent-generated annotations
- Financial document precision

### vs. Tonic.ai
- Reasoning data with tool calls
- Agentic capability training
- Multimodal-first architecture

---

## Mobile Responsive

```
Desktop: 1280px max-width
Tablet: 768px breakpoint, 2-column grids
Mobile: 375px minimum, single column, 16px padding
Typography: Scale down 20% on mobile (H1: 44-56px)
Navigation: Hamburger menu, sticky header
```

---

## Performance Requirements

- Load Time: < 2 seconds
- Lighthouse Score: > 90 (all categories)
- Image Optimization: WebP format, lazy loading
- Font Loading: Subset fonts, preload critical
- Animation: GPU-accelerated transforms only

---

## Quick Checklist for Every Page

- [ ] Futura for headlines, Inter for body
- [ ] Primary blue (#3B82F6) used prominently
- [ ] Solution area color coding applied
- [ ] 8px spacing grid followed
- [ ] 12px border radius on cards
- [ ] 8px border radius on buttons
- [ ] WCAG AAA contrast ratios
- [ ] Generous whitespace (64-96px sections)
- [ ] Sharp corners, 90-degree angles
- [ ] Data-forward content (examples, not promises)
- [ ] Bilingual support (EN/中文)
- [ ] Mobile responsive
- [ ] Hover effects on interactive elements
- [ ] Focus states visible

---

**Version:** 1.0.0
**Purpose:** Essential design reference for Lovable.dev prompts
**Usage:** Append this content to every page generation prompt for consistent design