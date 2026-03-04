# Research: MVP Website Naming System & File Organization

**Feature Branch**: `001-mvp-website`
**Created**: 2026-03-04
**Phase**: 0 — Naming System & File Organization

---

## 1. Naming Convention Specification

### Pattern

All assets follow the pattern: `{NN}-{page-name}-{section-name}`

| Segment | Description | Examples |
| --- | --- | --- |
| `{NN}` | Two-digit numeric prefix for ordering | `00`, `01`, `02` ... `09` |
| `{page-name}` | Kebab-case page identifier | `landing`, `usecase-finance`, `usecase-video` |
| `{section-name}` | Kebab-case section identifier | `hero`, `solutions`, `navbar`, `cta` |

### Asset-Specific Patterns

| Asset Type | Full Pattern | Example |
| --- | --- | --- |
| Reference dir | `references/{NN}-{category}/` | `references/00-core/` |
| Reference file | `references/{NN}-{category}/{NN}-{category}-{topic}.md` | `references/00-core/00-core-design-guidelines.md` |
| Screenshot dir | `screenshots/{page-name}/{NN}-{page-name}-{section-name}/` | `screenshots/landing/01-landing-hero/` |
| Screenshot file | `{NN}-{page-name}-{section-name}-{source}.png` | `01-landing-hero-akira.png` |
| Prompt file | `prompts/{page-name}/{NN}-{page-name}-{section-name}-prompt.md` | `prompts/landing/01-landing-hero-prompt.md` |
| Component file | `src/components/{page-subdir}/{PascalCase}.tsx` | `src/components/landing/HeroSection.tsx` |
| Page file | `src/pages/{PascalCase}.tsx` | `src/pages/UseCaseFinance.tsx` |

### Rationale

- Numeric prefixes enforce visual ordering in file explorers and terminal listings
- Page-name segment prevents cross-page collisions (e.g., both landing and finance have a "hero")
- Kebab-case is universally readable by humans, agents, and CLI tools
- Source tag on screenshots identifies the competitor for quick visual reference
- The convention is self-documenting: reading a filename tells you the page, section, and source without opening the file

---

## 2. References Reorganization

### Directory Structure

```
references/
├── 00-core/                                    # Core design system
│   ├── 00-core-design-guidelines.md            # Essential guidelines (append to prompts)
│   ├── 00-core-parent-brand.md                 # agentii.ai parent brand design
│   └── 00-core-solutions-design.md             # agentii.Solutions full design doc
├── 01-market/                                  # Market research
│   ├── 01-market-competitors.md                # Competitive landscape
│   ├── 01-market-ai-labeling.md                # AI labeling market overview
│   ├── 01-market-video-labeling.md             # Video annotation companies
│   └── 01-market-agentic-report.docx           # 2026 agentic AI report
└── 02-archive/                                 # Historical / archived references
    ├── 02-archive-design-comparison.md          # Old vs new design comparison
    └── 02-archive-reference-screenshot.png      # Original reference screenshot
```

### Rename Mapping (Old → New)

| Old Path | New Path |
| --- | --- |
| `references/agentii-solutions-graphic-design-core.md` | `references/00-core/00-core-design-guidelines.md` |
| `references/agentii graphic design.md` | `references/00-core/00-core-parent-brand.md` |
| `references/agentii-solutions-design.md` | `references/00-core/00-core-solutions-design.md` |
| `references/competitors.md` | `references/01-market/01-market-competitors.md` |
| `references/ai labeling.md` | `references/01-market/01-market-ai-labeling.md` |
| `references/video_labeling.md` | `references/01-market/01-market-video-labeling.md` |
| `references/Data_Annotation_Agentic_AI_Report_2026.docx` | `references/01-market/01-market-agentic-report.docx` |
| `references/design-comparison-old-version.md` | `references/02-archive/02-archive-design-comparison.md` |

**Status**: ✅ All renames executed.

---

## 3. Screenshots Reorganization

### Rename Mapping (Old → New)

| Old Path | New Path | Section |
| --- | --- | --- |
| `screenshots/top-navgation-bar.png` | `screenshots/landing/00-landing-navbar/00-landing-navbar-akira.png` | Navbar |
| `screenshots/language-drop-down-design.png` | `screenshots/landing/00-landing-navbar/00-landing-navbar-language-dropdown.png` | Navbar |
| `screenshots/akira_ai_website1.png` | `screenshots/landing/01-landing-hero/01-landing-hero-akira.png` | Hero |
| `screenshots/hero-section-datarobot.png` | `screenshots/landing/01-landing-hero/01-landing-hero-datarobot.png` | Hero |
| `screenshots/brightwave-web1.png` | `screenshots/landing/01-landing-hero/01-landing-hero-brightwave.png` | Hero |
| `screenshots/akira_ai_website2.png` | `screenshots/landing/02-landing-solutions/02-landing-solutions-akira.png` | Solutions |
| `screenshots/datarobot-website1.png` | `screenshots/landing/02-landing-solutions/02-landing-solutions-datarobot.png` | Solutions |
| `screenshots/brightwave-web2.png` | `screenshots/landing/02-landing-solutions/02-landing-solutions-brightwave.png` | Solutions |
| `screenshots/datarobot-website2.png` | `screenshots/landing/04-landing-pipeline/04-landing-pipeline-datarobot.png` | Pipeline |
| `screenshots/brightwave-web3.png` | `screenshots/landing/04-landing-pipeline/04-landing-pipeline-brightwave.png` | Pipeline |
| `screenshots/datarobot-website3.png` | `screenshots/landing/05-landing-usecases/05-landing-usecases-datarobot.png` | Use Cases |
| `screenshots/agentii-solutions-reference.png` | `references/02-archive/02-archive-reference-screenshot.png` | (archived) |

**Status**: ✅ All renames executed.

### Missing Screenshots Checklist

Screenshots still needed for landing page sections:

- [ ] `screenshots/landing/03-landing-metrics/` — No screenshots yet. Capture metrics/stats bars from competitors (DataRobot, Scale AI, Akira).
- [ ] `screenshots/landing/06-landing-differentiators/` — No screenshots yet. Capture comparison/differentiator sections from competitors.
- [ ] `screenshots/landing/07-landing-testimonials/` — No screenshots yet. Capture testimonial/social proof sections from competitors.
- [ ] `screenshots/landing/08-landing-cta/` — No screenshots yet. Capture CTA/contact sections from competitors.
- [ ] `screenshots/landing/09-landing-footer/` — No screenshots yet. Capture footer designs from competitors.

Screenshots still needed for use case pages:

- [ ] `screenshots/usecase-finance/` — All sections need screenshots. Capture from: Akira.ai finance page, DataRobot industry pages, Scale AI financial services.
- [ ] `screenshots/usecase-video/` — All sections need screenshots. Capture from: Labellerr video page, Scale AI video annotation, Encord video tools.

---

## 4. Prompts Directory Structure

### Landing Page Prompts

```
prompts/landing/
├── 00-landing-navbar-prompt.md
├── 01-landing-hero-prompt.md
├── 02-landing-solutions-prompt.md
├── 03-landing-metrics-prompt.md
├── 04-landing-pipeline-prompt.md
├── 05-landing-usecases-prompt.md
├── 06-landing-differentiators-prompt.md
├── 07-landing-testimonials-prompt.md
├── 08-landing-cta-prompt.md
└── 09-landing-footer-prompt.md
```

### Finance Use Case Prompts

```
prompts/usecase-finance/
├── 01-usecase-finance-hero-prompt.md
├── 02-usecase-finance-overview-prompt.md
├── 03-usecase-finance-features-prompt.md
├── 04-usecase-finance-examples-prompt.md
├── 05-usecase-finance-benefits-prompt.md
└── 06-usecase-finance-cta-prompt.md
```

### Video AI Use Case Prompts

```
prompts/usecase-video/
├── 01-usecase-video-hero-prompt.md
├── 02-usecase-video-overview-prompt.md
├── 03-usecase-video-features-prompt.md
├── 04-usecase-video-examples-prompt.md
├── 05-usecase-video-benefits-prompt.md
└── 06-usecase-video-cta-prompt.md
```

**Status**: ✅ All placeholder files created.

---

## 5. Section-to-Number Mapping

### Landing Page (10 sections)

| Number | Section | Component | Screenshot Dir | Prompt File | Color |
| --- | --- | --- | --- | --- | --- |
| 00 | Navbar | `Navbar.tsx` (shared) | `00-landing-navbar/` | `00-landing-navbar-prompt.md` | — |
| 01 | Hero | `landing/HeroSection.tsx` | `01-landing-hero/` | `01-landing-hero-prompt.md` | Primary Blue |
| 02 | Solutions | `landing/SolutionsSection.tsx` | `02-landing-solutions/` | `02-landing-solutions-prompt.md` | Blue/Teal/Purple |
| 03 | Metrics Bar | `landing/MetricsBar.tsx` | `03-landing-metrics/` | `03-landing-metrics-prompt.md` | — |
| 04 | Pipeline | `landing/PipelineSection.tsx` | `04-landing-pipeline/` | `04-landing-pipeline-prompt.md` | — |
| 05 | Use Cases | `landing/UseCasesSection.tsx` | `05-landing-usecases/` | `05-landing-usecases-prompt.md` | — |
| 06 | Differentiators | `landing/DifferentiatorsSection.tsx` | `06-landing-differentiators/` | `06-landing-differentiators-prompt.md` | — |
| 07 | Testimonials | `landing/TestimonialsSection.tsx` | `07-landing-testimonials/` | `07-landing-testimonials-prompt.md` | — |
| 08 | CTA | `landing/CTASection.tsx` | `08-landing-cta/` | `08-landing-cta-prompt.md` | Teal |
| 09 | Footer | `Footer.tsx` (shared) | `09-landing-footer/` | `09-landing-footer-prompt.md` | — |

### Finance & Banking Use Case Page (6 sections + shared navbar/footer)

| Number | Section | Component | Screenshot Dir | Prompt File |
| --- | --- | --- | --- | --- |
| — | Navbar | `Navbar.tsx` (shared) | (reuse landing) | (reuse landing) |
| 01 | Hero | `usecase-finance/FinanceHero.tsx` | `01-usecase-finance-hero/` | `01-usecase-finance-hero-prompt.md` |
| 02 | Overview | `usecase-finance/FinanceOverview.tsx` | `02-usecase-finance-overview/` | `02-usecase-finance-overview-prompt.md` |
| 03 | Features | `usecase-finance/FinanceFeatures.tsx` | `03-usecase-finance-features/` | `03-usecase-finance-features-prompt.md` |
| 04 | Examples | `usecase-finance/FinanceExamples.tsx` | `04-usecase-finance-examples/` | `04-usecase-finance-examples-prompt.md` |
| 05 | Benefits | `usecase-finance/FinanceBenefits.tsx` | `05-usecase-finance-benefits/` | `05-usecase-finance-benefits-prompt.md` |
| 06 | CTA | `usecase-finance/FinanceCTA.tsx` | `06-usecase-finance-cta/` | `06-usecase-finance-cta-prompt.md` |
| — | Footer | `Footer.tsx` (shared) | (reuse landing) | (reuse landing) |

### Video AI Training Use Case Page (6 sections + shared navbar/footer)

| Number | Section | Component | Screenshot Dir | Prompt File |
| --- | --- | --- | --- | --- |
| — | Navbar | `Navbar.tsx` (shared) | (reuse landing) | (reuse landing) |
| 01 | Hero | `usecase-video/VideoHero.tsx` | `01-usecase-video-hero/` | `01-usecase-video-hero-prompt.md` |
| 02 | Overview | `usecase-video/VideoOverview.tsx` | `02-usecase-video-overview/` | `02-usecase-video-overview-prompt.md` |
| 03 | Features | `usecase-video/VideoFeatures.tsx` | `03-usecase-video-features/` | `03-usecase-video-features-prompt.md` |
| 04 | Examples | `usecase-video/VideoExamples.tsx` | `04-usecase-video-examples/` | `04-usecase-video-examples-prompt.md` |
| 05 | Benefits | `usecase-video/VideoBenefits.tsx` | `05-usecase-video-benefits/` | `05-usecase-video-benefits-prompt.md` |
| 06 | CTA | `usecase-video/VideoCTA.tsx` | `06-usecase-video-cta/` | `06-usecase-video-cta-prompt.md` |
| — | Footer | `Footer.tsx` (shared) | (reuse landing) | (reuse landing) |

---

## 6. Design Decisions

### Decision 1: Page-name in every filename

**Decision**: Include `{page-name}` in every filename, even when files are already inside a page-specific directory.

**Rationale**: Redundancy is intentional. When a developer or agent copies a filename to a prompt, chat, or issue, the page context travels with it. `01-landing-hero-akira.png` is self-documenting; `01-hero-akira.png` requires knowing which directory it came from.

**Alternatives considered**: Omitting page-name (shorter filenames) — rejected because it breaks self-documentation when files are referenced outside their directory context.

### Decision 2: Shared components (Navbar, Footer) at root level

**Decision**: Navbar and Footer components live at `src/components/Navbar.tsx` and `src/components/Footer.tsx`, not inside page subdirectories.

**Rationale**: These components are shared across all 3 pages. Placing them in a page-specific directory would create confusion about ownership. They get their own prompts and screenshots under the landing page (00-landing-navbar, 09-landing-footer) since that's where they're first designed.

**Alternatives considered**: Placing in `src/components/shared/` — rejected as unnecessary nesting for just 2 files.

### Decision 3: Use case pages start numbering at 01 (not 00)

**Decision**: Use case pages skip 00 (navbar) and start section numbering at 01 (hero).

**Rationale**: Navbar and Footer are shared components generated once under the landing page. Use case pages reuse them without regeneration. Starting at 01 makes it clear that the page's own content begins at the hero.

**Alternatives considered**: Including 00-navbar and 07-footer in every page — rejected as redundant since the components are identical across pages.

### Decision 4: References organized by category, not by page

**Decision**: References use category-based organization (00-core, 01-market, 02-archive) rather than page-based.

**Rationale**: References are cross-cutting — the design guidelines apply to all pages, market research informs all content. Page-based organization would require duplicating files or creating symlinks.

**Alternatives considered**: Page-based reference directories — rejected because most references serve multiple pages.

---

## 7. Prompt Structure Specification

Every prompt file MUST follow this structure:

```markdown
# {Section Name} — agentii.Solutions {Page Name}

## Context
Brief description of what this section does and its role in the page.

## Content
Exact text content for headlines, descriptions, buttons, and labels.

## Layout
Detailed layout description: grid structure, column counts, spacing, alignment.

## Screenshots to Attach
List of screenshot filenames to attach when pasting this prompt into Lovable.dev:
- `{NN}-{page-name}-{section-name}-{source}.png` — what to reference from this screenshot

## Design Specifications
Specific values pulled from the design guidelines:
- Typography: font, size, weight
- Colors: exact hex values
- Spacing: exact pixel values
- Components: border radius, shadows, hover states

---

## Design Guidelines Appendix

[Full content of references/00-core/00-core-design-guidelines.md pasted here]
```

---

## 8. Next Steps

1. ✅ Phase 0.1: References reorganized
2. ✅ Phase 0.2: Screenshots reorganized
3. ✅ Phase 0.3: Prompts directory created
4. ✅ Phase 0.4: Naming convention documented (this file)
5. → Phase 1.1: Generate data-model.md
6. → Phase 1.2: Generate prompt templates (contracts/)
7. → Phase 1.3: Generate quickstart.md
8. → Phase 1.4: Update agent context
