# Feature Specification: MVP Website with Lovable.dev Coding Pipeline

**Feature Branch**: `001-mvp-website`
**Created**: 2026-03-04
**Status**: Draft
**Input**: User description: "Generate the MVP version of the agentii.Solutions website with a Lovable.dev prompt-driven coding pipeline, consistent file naming, and screenshot-based development workflow"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Developer Generates a Page Section via Lovable.dev Prompt (Priority: P1)

A developer (human or AI agent) needs to generate a specific page section for the agentii.Solutions website. They navigate the project's file structure, locate the correct reference files, competitor screenshots, and design guidelines, then compose a Lovable.dev prompt. They paste the prompt into Lovable.dev along with the corresponding screenshot attachments. Lovable.dev generates code that matches the agentii.Solutions design system.

**Why this priority**: This is the core workflow — the entire development pipeline depends on being able to reliably go from references + screenshots to prompt to generated code. Without this, nothing else works.

**Independent Test**: Can be fully tested by selecting any single section (e.g., Hero), locating its reference files and screenshots by following the naming convention, composing the prompt from the template, and verifying Lovable.dev produces code that visually matches the design guidelines.

**Acceptance Scenarios**:

1. **Given** a developer wants to build the Hero section, **When** they navigate to `prompts/landing/`, **Then** they find `01-landing-hero-prompt.md` containing a ready-to-use prompt, screenshot attachment list, and the full design guidelines appended.
2. **Given** a developer pastes the Hero prompt into Lovable.dev with attached screenshots, **When** Lovable.dev generates the code, **Then** the output uses Futura for headlines, #3B82F6 as primary blue, 8px spacing grid, and matches the layout described in the prompt.
3. **Given** a developer wants to build any section, **When** they look at the file structure, **Then** the naming convention makes it immediately obvious which references, screenshots, and prompts belong to that section.

---

### User Story 2 - Claude Code Agent Prepares All Assets for a Page (Priority: P1)

A Claude Code agent receives a request to prepare the development assets for a specific page. The agent reads the references, identifies which competitor screenshots are relevant, generates the Lovable.dev prompt with the design guidelines appended, and organizes everything into the correct directory structure with consistent naming.

**Why this priority**: The agent-driven asset preparation is what makes this pipeline fast. Manual prompt writing is slow and error-prone; automated preparation with consistent naming is the multiplier.

**Independent Test**: Can be tested by asking the agent to prepare assets for the landing page. Verify that all output files follow the naming convention, prompts include the design guidelines, and screenshot references are correctly mapped.

**Acceptance Scenarios**:

1. **Given** an agent is asked to prepare the landing page, **When** it reads the references and constitution, **Then** it generates prompts for each section in the correct directory with correct naming.
2. **Given** an agent generates a prompt, **When** the prompt is reviewed, **Then** it includes: section-specific instructions, competitor screenshot references, and the full `agentii-solutions-graphic-design-core.md` content appended at the end.
3. **Given** multiple agents or developers work on different sections simultaneously, **When** they follow the naming convention, **Then** there are no file conflicts or ambiguity about which files belong to which section.

---

### User Story 3 - Developer Refines Generated Code with Text Edits (Priority: P2)

After Lovable.dev generates the initial code for a section, a developer reviews the output and makes refinements — adjusting copy, tweaking spacing, fixing color values, or updating content to match the bilingual requirements. The refinement happens through direct text editing in the codebase.

**Why this priority**: Generated code is rarely perfect on the first pass. The refinement step is essential but secondary to the generation pipeline itself.

**Independent Test**: Can be tested by taking any Lovable.dev-generated section, making text edits to copy and spacing values, and verifying the changes render correctly without breaking the component.

**Acceptance Scenarios**:

1. **Given** a generated Hero section with placeholder copy, **When** a developer updates the headline text and CTA labels, **Then** the component renders correctly with the new content.
2. **Given** a generated section needs bilingual support, **When** a developer adds Chinese translations following the i18n pattern, **Then** the language switcher toggles between English and Chinese correctly.

---

### User Story 4 - Full Landing Page Assembly from Generated Sections (Priority: P2)

All individually generated sections are assembled into a complete landing page. The page flows correctly from Navbar through Hero, Solutions, Metrics, Pipeline, Use Cases, Differentiators, Testimonials, CTA, to Footer, with consistent styling and smooth scrolling between sections.

**Why this priority**: Assembly is the integration step. Individual sections must work first (P1), then they come together.

**Independent Test**: Can be tested by importing all generated section components into the Index page and verifying visual consistency, scroll behavior, and responsive layout across desktop, tablet, and mobile breakpoints.

**Acceptance Scenarios**:

1. **Given** all 10 sections have been generated and refined, **When** they are assembled in the Index page, **Then** the page renders with consistent typography, colors, and spacing across all sections.
2. **Given** the assembled page is viewed on mobile (375px), **When** the user scrolls through all sections, **Then** every section is fully responsive with no horizontal overflow or broken layouts.

---

### User Story 5 - Bilingual Content with Language Switching (Priority: P3)

The website supports English (default) and Simplified Chinese with a language toggle in the navbar. All visible text content switches between languages. Technical terms remain consistent across both languages.

**Why this priority**: Bilingual support is a constitution requirement but can be layered on after the English MVP is complete.

**Independent Test**: Can be tested by clicking the language switcher and verifying all visible text on the landing page changes to Chinese, then back to English.

**Acceptance Scenarios**:

1. **Given** the page is in English, **When** a user clicks the 中文 language option, **Then** all headings, body text, button labels, and navigation items switch to Simplified Chinese.
2. **Given** the page is in Chinese, **When** a user clicks the EN language option, **Then** all content reverts to English.

---

### Edge Cases

- What happens when a screenshot file is missing for a section? The prompt file notes which screenshots are required and flags missing ones explicitly.
- What happens when Lovable.dev generates code that doesn't match the design system? The prompt includes explicit color hex values, font names, and spacing values so deviations are immediately visible during review.
- What happens when a new section is added that wasn't in the original plan? The naming convention uses numeric prefixes (01, 02, ...) allowing insertion of new sections without renaming existing ones.
- What happens when the same section needs multiple generation attempts? Each attempt's prompt can be versioned (e.g., `01-landing-hero-prompt-v2.md`).

## Requirements *(mandatory)*

### Functional Requirements

#### File Structure & Naming Convention

- **FR-001**: The project MUST follow a consistent directory structure where every page has a corresponding directory under `prompts/` containing section-level prompt files.
- **FR-002**: All files MUST use kebab-case naming with numeric prefixes for ordering: `{NN}-{page-name}-{section-name}` (e.g., `01-landing-hero`, `02-landing-solutions`, `03-landing-metrics`).
- **FR-003**: Screenshot files MUST follow the pattern `{NN}-{page-name}-{section-name}-{source}-{descriptor}.png` (e.g., `01-landing-hero-akira-main.png`, `02-landing-solutions-labellerr-cards.png`).
- **FR-004**: Prompt files MUST follow the pattern `{NN}-{page-name}-{section-name}-prompt.md` and live inside `prompts/landing/`.
- **FR-005**: Reference files in `references/` MUST use kebab-case and descriptive names indicating their content domain.

#### Prompt Generation Pipeline

- **FR-006**: Each prompt file MUST contain three parts: (1) section-specific generation instructions, (2) screenshot attachment list with filenames, (3) the full content of `agentii-solutions-graphic-design-core.md` appended at the end.
- **FR-007**: Prompts MUST specify exact color hex values, font names, spacing values, and component specs from the design guidelines — not vague references like "use the brand color."
- **FR-008**: Prompts MUST describe the section layout, content hierarchy, and interactive behaviors in enough detail for Lovable.dev to generate a complete, functional React component.
- **FR-009**: Each prompt MUST reference which competitor screenshots to attach and what design elements to draw inspiration from (e.g., "Use the card layout style from screenshot 02-solutions-akira-cards.png").

#### Landing Page Sections (MVP)

- **FR-010**: The MVP landing page MUST include these 10 sections in order: Navbar, Hero, Solutions (3 solution areas), Metrics Bar, Pipeline/How It Works, Use Cases, Differentiators, Testimonials, CTA, Footer.
- **FR-011**: The Hero section MUST display the brand name "agentii.Solutions" in Futura, the tagline "Data by Agents, for Agents", and primary CTA buttons.
- **FR-012**: The Solutions section MUST present three solution cards: Document Processing (blue #3B82F6), Video & Audio (teal #14B8A6), Synthetic Data (purple #8B5CF6) — each color-coded per the design guidelines.
- **FR-013**: The Navbar MUST include: logo, navigation links (Solutions, Use Cases, Platform, Resources, About), language switcher (EN/中文), and a CTA button.
- **FR-014**: The Footer MUST include: company info, navigation links, contact information, and copyright.

#### Code Output Standards

- **FR-015**: All generated code MUST be React components using TypeScript, Tailwind CSS, and shadcn/ui — matching the existing project stack.
- **FR-016**: Generated components MUST be placed in `src/components/` following the existing naming pattern (PascalCase, e.g., `HeroSection.tsx`).
- **FR-017**: All components MUST be responsive across desktop (1280px), tablet (768px), and mobile (375px) breakpoints.
- **FR-018**: All components MUST meet WCAG AA contrast ratios and include proper semantic HTML, alt text, and keyboard navigation support.

#### Refinement Workflow

- **FR-019**: After code generation, developers MUST be able to refine content by editing text strings directly in the component files without restructuring the component.
- **FR-020**: Copy text (headlines, descriptions, button labels) SHOULD be organized at the top of each component file or in a dedicated content object for easy editing.

### Key Entities

- **Section**: A discrete visual block of the landing page (e.g., Hero, Solutions, Footer). Has a numeric order, name, associated screenshots, prompt, and generated component.
- **Prompt**: A markdown file containing instructions for Lovable.dev to generate a specific section. Includes layout description, content, screenshot references, and design guidelines.
- **Screenshot**: A PNG image of a competitor's page section used as visual reference for Lovable.dev generation. Tagged by source company and section type.
- **Reference**: A markdown document containing research, competitive analysis, or design guidelines that informs prompt creation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A developer can go from "I need to build section X" to "I have a ready-to-paste Lovable.dev prompt with screenshots identified" in under 5 minutes by following the file naming convention.
- **SC-002**: 100% of prompt files include the complete design guidelines appendix, ensuring every generated section receives consistent design instructions.
- **SC-003**: Any developer or AI agent can identify which files belong to which section by reading the filename alone — no need to open files or read documentation.
- **SC-004**: The assembled MVP landing page renders all 10 sections with consistent typography (Futura headers, Inter body), color palette (#3B82F6 primary, #14B8A6 teal, #8B5CF6 purple), and spacing (8px grid) across desktop, tablet, and mobile.
- **SC-005**: The full MVP landing page (all 10 sections) can be generated and assembled within a single development sprint using the prompt pipeline.
- **SC-006**: Generated code passes the project's existing linting and type checking without errors.
- **SC-007**: The landing page achieves a Lighthouse Performance score above 90 and Accessibility score above 90.

## Assumptions

- Lovable.dev is the primary code generation tool and accepts markdown prompts with image attachments.
- The existing Vite + React + TypeScript + Tailwind + shadcn/ui stack is the target output for all generated code.
- Competitor screenshots will be manually captured by the developer and placed in the correct directories before prompt generation.
- The `agentii-solutions-graphic-design-core.md` file is the single source of truth for design consistency across all prompts.
- English is the default language; Chinese localization will be added as a refinement layer after the English MVP sections are generated.
- The existing components (Navbar, HeroSection, etc.) in `src/components/` represent a first iteration that may be regenerated or refined through this pipeline.

## MVP Directory Structure

```
agentii-solutions/
├── references/                                    # Research & design docs
│   ├── agentii-graphic-design.md                  # Parent brand design system
│   ├── agentii-solutions-design.md                # Solutions-specific design
│   ├── agentii-solutions-graphic-design-core.md   # Essential guidelines (append to prompts)
│   ├── competitors.md                             # Competitive landscape
│   ├── ai-labeling.md                             # Market research
│   ├── video-labeling.md                          # Video annotation research
│   ├── design-comparison-old-version.md           # Brand comparison reference
│   └── Data_Annotation_Agentic_AI_Report_2026.docx
│
├── screenshots/                                   # Competitor & inspiration screenshots
│   └── landing/                                   # Landing page screenshots
│       ├── 00-navbar/
│       │   ├── 00-navbar-akira-nav.png
│       │   └── 00-navbar-scale-nav.png
│       ├── 01-hero/
│       │   ├── 01-hero-akira-main.png
│       │   ├── 01-hero-labellerr-main.png
│       │   └── 01-hero-scale-main.png
│       ├── 02-solutions/
│       │   ├── 02-solutions-akira-cards.png
│       │   ├── 02-solutions-tonic-features.png
│       │   └── 02-solutions-labellerr-services.png
│       ├── 03-metrics/
│       │   └── 03-metrics-scale-stats.png
│       ├── 04-pipeline/
│       │   ├── 04-pipeline-akira-workflow.png
│       │   └── 04-pipeline-labellerr-process.png
│       ├── 05-usecases/
│       │   ├── 05-usecases-akira-finance.png
│       │   └── 05-usecases-scale-industries.png
│       ├── 06-differentiators/
│       │   └── 06-diff-tonic-comparison.png
│       ├── 07-testimonials/
│       │   └── 07-testimonials-scale-logos.png
│       ├── 08-cta/
│       │   └── 08-cta-akira-contact.png
│       └── 09-footer/
│           └── 09-footer-akira-footer.png
│
├── prompts/                                       # Lovable.dev prompts
│   └── landing/                                   # Landing page prompts
│       ├── 00-navbar-prompt.md
│       ├── 01-hero-prompt.md
│       ├── 02-solutions-prompt.md
│       ├── 03-metrics-prompt.md
│       ├── 04-pipeline-prompt.md
│       ├── 05-usecases-prompt.md
│       ├── 06-differentiators-prompt.md
│       ├── 07-testimonials-prompt.md
│       ├── 08-cta-prompt.md
│       └── 09-footer-prompt.md
│
├── src/                                           # Source code (Lovable.dev output)
│   ├── components/
│   │   ├── Navbar.tsx                             # 00-navbar
│   │   ├── HeroSection.tsx                        # 01-hero
│   │   ├── SolutionsSection.tsx                   # 02-solutions
│   │   ├── MetricsBar.tsx                         # 03-metrics
│   │   ├── PipelineSection.tsx                    # 04-pipeline
│   │   ├── UseCasesSection.tsx                    # 05-usecases
│   │   ├── DifferentiatorsSection.tsx             # 06-differentiators
│   │   ├── TestimonialsSection.tsx                # 07-testimonials
│   │   ├── CTASection.tsx                         # 08-cta
│   │   ├── Footer.tsx                             # 09-footer
│   │   └── ui/                                    # shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx                              # Landing page assembly
│   │   └── NotFound.tsx
│   └── locales/                                   # i18n translations (P3)
│       ├── en.json
│       └── zh.json
│
└── specs/
    └── 001-mvp-website/
        └── spec.md
```

### Naming Convention Summary

| Asset Type | Pattern | Example |
| --- | --- | --- |
| Screenshot dir | `screenshots/landing/{NN}-{section}/` | `screenshots/landing/01-hero/` |
| Screenshot file | `{NN}-{section}-{source}-{descriptor}.png` | `01-hero-akira-main.png` |
| Prompt file | `prompts/landing/{NN}-{section}-prompt.md` | `prompts/landing/01-hero-prompt.md` |
| Component file | `src/components/{PascalCase}.tsx` | `src/components/HeroSection.tsx` |
| Reference file | `references/{kebab-case-topic}.md` | `references/competitors.md` |
| Locale file | `src/locales/{lang-code}.json` | `src/locales/zh.json` |

### Section-to-Number Mapping

| Number | Section | Component | Color Accent |
| --- | --- | --- | --- |
| 00 | Navbar | `Navbar.tsx` | — |
| 01 | Hero | `HeroSection.tsx` | Primary Blue |
| 02 | Solutions | `SolutionsSection.tsx` | Blue / Teal / Purple |
| 03 | Metrics Bar | `MetricsBar.tsx` | — |
| 04 | Pipeline / How It Works | `PipelineSection.tsx` | — |
| 05 | Use Cases | `UseCasesSection.tsx` | — |
| 06 | Differentiators | `DifferentiatorsSection.tsx` | — |
| 07 | Testimonials | `TestimonialsSection.tsx` | — |
| 08 | CTA | `CTASection.tsx` | Teal |
| 09 | Footer | `Footer.tsx` | — |

## Development Pipeline Workflow

```
Step 1: PREPARE REFERENCES
  references/*.md → Read by agent → Extract section-specific content

Step 2: CAPTURE SCREENSHOTS
  Competitor websites → Manual capture → screenshots/landing/{NN}-{section}/

Step 3: GENERATE PROMPTS
  Agent reads: references + screenshots list + design-core.md
  Agent writes: prompts/landing/{NN}-{section}-prompt.md
  Each prompt = section instructions + screenshot list + design guidelines appendix

Step 4: GENERATE CODE VIA LOVABLE.DEV
  Developer pastes: prompt text + attaches screenshots
  Lovable.dev outputs: React/TypeScript component code
  Developer saves: src/components/{PascalCase}.tsx

Step 5: REFINE
  Developer edits: copy text, spacing tweaks, color adjustments
  Developer verifies: responsive layout, design consistency, accessibility

Step 6: ASSEMBLE
  All sections imported into src/pages/Index.tsx
  Full-page review: visual consistency, scroll behavior, mobile responsiveness

Step 7: LOCALIZE (P3)
  Extract text strings → src/locales/en.json + src/locales/zh.json
  Implement language switching via navbar toggle
```
