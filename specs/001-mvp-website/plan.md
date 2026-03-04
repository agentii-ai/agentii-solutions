# Implementation Plan: MVP Website with Lovable.dev Coding Pipeline

**Branch**: `001-mvp-website` | **Date**: 2026-03-04 | **Spec**: [spec.md](./spec.md)

## Summary

Build an MVP website for agentii.Solutions consisting of a landing page and two use case pages (Finance & Banking, Video AI Training). Establish a systematic Lovable.dev-based development pipeline where references, competitor screenshots, and prompts follow a strict naming convention (`{NN}-{page-name}-{section-name}`), enabling both human developers and AI agents to quickly locate assets, generate prompts, and produce consistent code. The pipeline automates asset preparation, prompt generation with design guidelines appended, and code generation via Lovable.dev.

**Key Innovation**: Phase 0 establishes the naming and filing system first, organizing all existing references and screenshots into the new structure before any code generation begins. This ensures every subsequent development step follows a predictable, agent-friendly pattern.

## Technical Context

**Language/Version**: TypeScript 5.8.3, React 18.3.1
**Primary Dependencies**: Vite 5.4.19, Tailwind CSS 3.4.17, shadcn/ui (Radix UI), React Router 6.30.1
**Storage**: N/A (frontend-only static site, no backend)
**Testing**: Vitest 3.2.4, Testing Library, ESLint 9.32.0
**Target Platform**: Web (desktop 1280px, tablet 768px, mobile 375px), deployed via Vercel
**Project Type**: Frontend-only marketing website (static site generation)
**Performance Goals**: Lighthouse Performance > 90, Accessibility > 90, load time < 2 seconds
**Constraints**: WCAG AA compliance, bilingual (EN/中文), no backend/database
**Scale/Scope**: 3 pages (Landing, Finance Use Case, Video AI Use Case), 10 sections per page average, ~30 total sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Brand & Design Standards (Constitution Principle IV)

✅ **PASS** - The plan follows the agentii.Solutions design system:
- Uses `agentii-solutions-graphic-design-core.md` as single source of truth
- Enforces Futura typography, #3B82F6 primary blue, 8px spacing grid
- All prompts append full design guidelines to ensure consistency

### Bilingual Excellence (Constitution Principle V)

✅ **PASS** - Bilingual support planned:
- English as default (P1), Chinese as refinement layer (P3)
- Language switcher in navbar
- i18n structure defined in `src/locales/`

### Frontend-Only Simplicity (Constitution Principle VI)

✅ **PASS** - No backend complexity:
- Static site with Vite + React
- No authentication, database, or server-side logic
- Deployed via Vercel (static hosting)

### Competitive Differentiation (Constitution Principle VII)

✅ **PASS** - Differentiation maintained:
- Use case pages specifically target Finance/Banking and Video AI Training
- Screenshots from Akira.ai, Labellerr, Tonic.ai, Scale AI inform design but don't copy
- Agentic-native messaging ("Data by Agents, for Agents") prominent

### Agentic-Native Data Philosophy (Constitution Principle I)

✅ **PASS** - Messaging alignment:
- Landing page hero emphasizes agentic data solutions
- Solutions section highlights three agentic data areas
- Use case pages demonstrate agent-ready data outputs

**Constitution Check Result**: ✅ All gates passed. No violations to justify.

## Project Structure

### Documentation (this feature)

```text
specs/001-mvp-website/
├── plan.md              # This file
├── research.md          # Phase 0 output (naming conventions, file organization)
├── data-model.md        # Phase 1 output (page/section entity model)
├── quickstart.md        # Phase 1 output (developer workflow guide)
├── contracts/           # Phase 1 output (prompt templates)
│   ├── prompt-template-hero.md
│   ├── prompt-template-solutions.md
│   └── prompt-template-usecases.md
└── checklists/
    └── requirements.md  # Already created
```

### Source Code (repository root)

```text
agentii-solutions/
├── references/                                    # Research & design docs
│   ├── 00-core/                                   # Core design system (NEW)
│   │   ├── 00-core-design-guidelines.md           # Renamed from agentii-solutions-graphic-design-core.md
│   │   ├── 00-core-parent-brand.md                # Renamed from agentii graphic design.md
│   │   └── 00-core-solutions-design.md            # Renamed from agentii-solutions-design.md
│   ├── 01-market/                                 # Market research (NEW)
│   │   ├── 01-market-competitors.md               # Renamed from competitors.md
│   │   ├── 01-market-ai-labeling.md               # Renamed from ai labeling.md
│   │   ├── 01-market-video-labeling.md            # Renamed from video_labeling.md
│   │   └── 01-market-agentic-report.docx          # Renamed from Data_Annotation_Agentic_AI_Report_2026.docx
│   └── 02-archive/                                # Historical references (NEW)
│       └── 02-archive-design-comparison.md        # Renamed from design-comparison-old-version.md
│
├── screenshots/                                   # Competitor screenshots (organized by page)
│   ├── landing/                                   # Landing page screenshots
│   │   ├── 00-landing-navbar/
│   │   │   ├── 00-landing-navbar-akira.png        # Renamed from top-navgation-bar.png
│   │   │   └── 00-landing-navbar-datarobot.png    # New (to be captured)
│   │   ├── 01-landing-hero/
│   │   │   ├── 01-landing-hero-akira.png          # Renamed from akira_ai_website1.png
│   │   │   ├── 01-landing-hero-datarobot.png      # Renamed from hero-section-datarobot.png
│   │   │   └── 01-landing-hero-brightwave.png     # Renamed from brightwave-web1.png
│   │   ├── 02-landing-solutions/
│   │   │   ├── 02-landing-solutions-akira.png     # Renamed from akira_ai_website2.png
│   │   │   ├── 02-landing-solutions-datarobot.png # Renamed from datarobot-website1.png
│   │   │   └── 02-landing-solutions-brightwave.png # Renamed from brightwave-web2.png
│   │   ├── 03-landing-metrics/
│   │   │   └── 03-landing-metrics-datarobot.png   # New (to be captured)
│   │   ├── 04-landing-pipeline/
│   │   │   ├── 04-landing-pipeline-datarobot.png  # Renamed from datarobot-website2.png
│   │   │   └── 04-landing-pipeline-brightwave.png # Renamed from brightwave-web3.png
│   │   ├── 05-landing-usecases/
│   │   │   └── 05-landing-usecases-datarobot.png  # Renamed from datarobot-website3.png
│   │   ├── 06-landing-differentiators/
│   │   │   └── 06-landing-differentiators-akira.png # New (to be captured)
│   │   ├── 07-landing-testimonials/
│   │   │   └── 07-landing-testimonials-datarobot.png # New (to be captured)
│   │   ├── 08-landing-cta/
│   │   │   └── 08-landing-cta-akira.png           # New (to be captured)
│   │   └── 09-landing-footer/
│   │       └── 09-landing-footer-akira.png        # New (to be captured)
│   ├── usecase-finance/                           # Finance use case page
│   │   ├── 00-usecase-finance-navbar/             # Shared navbar (reference landing)
│   │   ├── 01-usecase-finance-hero/
│   │   ├── 02-usecase-finance-overview/
│   │   ├── 03-usecase-finance-features/
│   │   ├── 04-usecase-finance-examples/
│   │   ├── 05-usecase-finance-benefits/
│   │   ├── 06-usecase-finance-cta/
│   │   └── 07-usecase-finance-footer/             # Shared footer (reference landing)
│   └── usecase-video/                             # Video AI use case page
│       ├── 00-usecase-video-navbar/               # Shared navbar (reference landing)
│       ├── 01-usecase-video-hero/
│       ├── 02-usecase-video-overview/
│       ├── 03-usecase-video-features/
│       ├── 04-usecase-video-examples/
│       ├── 05-usecase-video-benefits/
│       ├── 06-usecase-video-cta/
│       └── 07-usecase-video-footer/               # Shared footer (reference landing)
│
├── prompts/                                       # Lovable.dev prompts
│   ├── landing/                                   # Landing page prompts
│   │   ├── 00-landing-navbar-prompt.md
│   │   ├── 01-landing-hero-prompt.md
│   │   ├── 02-landing-solutions-prompt.md
│   │   ├── 03-landing-metrics-prompt.md
│   │   ├── 04-landing-pipeline-prompt.md
│   │   ├── 05-landing-usecases-prompt.md
│   │   ├── 06-landing-differentiators-prompt.md
│   │   ├── 07-landing-testimonials-prompt.md
│   │   ├── 08-landing-cta-prompt.md
│   │   └── 09-landing-footer-prompt.md
│   ├── usecase-finance/                           # Finance use case prompts
│   │   ├── 01-usecase-finance-hero-prompt.md
│   │   ├── 02-usecase-finance-overview-prompt.md
│   │   ├── 03-usecase-finance-features-prompt.md
│   │   ├── 04-usecase-finance-examples-prompt.md
│   │   ├── 05-usecase-finance-benefits-prompt.md
│   │   └── 06-usecase-finance-cta-prompt.md
│   └── usecase-video/                             # Video AI use case prompts
│       ├── 01-usecase-video-hero-prompt.md
│       ├── 02-usecase-video-overview-prompt.md
│       ├── 03-usecase-video-features-prompt.md
│       ├── 04-usecase-video-examples-prompt.md
│       ├── 05-usecase-video-benefits-prompt.md
│       └── 06-usecase-video-cta-prompt.md
│
├── src/                                           # Source code
│   ├── components/
│   │   ├── Navbar.tsx                             # Shared across all pages
│   │   ├── Footer.tsx                             # Shared across all pages
│   │   ├── landing/                               # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── MetricsBar.tsx
│   │   │   ├── PipelineSection.tsx
│   │   │   ├── UseCasesSection.tsx
│   │   │   ├── DifferentiatorsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── usecase-finance/                       # Finance use case sections
│   │   │   ├── FinanceHero.tsx
│   │   │   ├── FinanceOverview.tsx
│   │   │   ├── FinanceFeatures.tsx
│   │   │   ├── FinanceExamples.tsx
│   │   │   ├── FinanceBenefits.tsx
│   │   │   └── FinanceCTA.tsx
│   │   ├── usecase-video/                         # Video AI use case sections
│   │   │   ├── VideoHero.tsx
│   │   │   ├── VideoOverview.tsx
│   │   │   ├── VideoFeatures.tsx
│   │   │   ├── VideoExamples.tsx
│   │   │   ├── VideoBenefits.tsx
│   │   │   └── VideoCTA.tsx
│   │   └── ui/                                    # shadcn/ui components (existing)
│   ├── pages/
│   │   ├── Index.tsx                              # Landing page
│   │   ├── UseCaseFinance.tsx                     # Finance use case page
│   │   ├── UseCaseVideo.tsx                       # Video AI use case page
│   │   └── NotFound.tsx
│   └── locales/                                   # i18n (P3)
│       ├── en.json
│       └── zh.json
│
└── specs/
    └── 001-mvp-website/
        ├── spec.md
        ├── plan.md                                # This file
        ├── research.md                            # Phase 0 output
        ├── data-model.md                          # Phase 1 output
        ├── quickstart.md                          # Phase 1 output
        └── contracts/                             # Phase 1 output
```

**Structure Decision**: Frontend-only web application using the existing Vite + React + TypeScript + Tailwind stack. The structure organizes assets by page type (landing, usecase-finance, usecase-video) with consistent numeric prefixes for ordering. Shared components (Navbar, Footer) live at the root of `src/components/`, while page-specific sections are grouped in subdirectories.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

N/A - No constitution violations detected.

---

## Phase 0: Naming System & File Organization

**Goal**: Establish the `{NN}-{page-name}-{section-name}` naming convention across all references, screenshots, and prompts. Reorganize existing files into the new structure before any code generation begins.

### Phase 0.1: References Reorganization

**Objective**: Rename and reorganize all files in `references/` into three categories: core design (00-core), market research (01-market), and archive (02-archive).

**Tasks**:

1. **Create directory structure**:
   ```bash
   mkdir -p references/00-core
   mkdir -p references/01-market
   mkdir -p references/02-archive
   ```

2. **Rename and move core design files**:
   ```bash
   mv "references/agentii-solutions-graphic-design-core.md" "references/00-core/00-core-design-guidelines.md"
   mv "references/agentii graphic design.md" "references/00-core/00-core-parent-brand.md"
   mv "references/agentii-solutions-design.md" "references/00-core/00-core-solutions-design.md"
   ```

3. **Rename and move market research files**:
   ```bash
   mv "references/competitors.md" "references/01-market/01-market-competitors.md"
   mv "references/ai labeling.md" "references/01-market/01-market-ai-labeling.md"
   mv "references/video_labeling.md" "references/01-market/01-market-video-labeling.md"
   mv "references/Data_Annotation_Agentic_AI_Report_2026.docx" "references/01-market/01-market-agentic-report.docx"
   ```

4. **Rename and move archive files**:
   ```bash
   mv "references/design-comparison-old-version.md" "references/02-archive/02-archive-design-comparison.md"
   ```

5. **Update internal references**: Search all markdown files for references to old filenames and update paths.

**Deliverable**: `research.md` documenting the new references structure with a mapping table (old name → new name).

### Phase 0.2: Screenshots Reorganization

**Objective**: Rename existing screenshots to follow `{NN}-{page-name}-{section-name}-{source}.png` pattern and organize into page/section directories.

**Tasks**:

1. **Create directory structure**:
   ```bash
   mkdir -p screenshots/landing/{00-landing-navbar,01-landing-hero,02-landing-solutions,03-landing-metrics,04-landing-pipeline,05-landing-usecases,06-landing-differentiators,07-landing-testimonials,08-landing-cta,09-landing-footer}
   mkdir -p screenshots/usecase-finance/{00-usecase-finance-navbar,01-usecase-finance-hero,02-usecase-finance-overview,03-usecase-finance-features,04-usecase-finance-examples,05-usecase-finance-benefits,06-usecase-finance-cta,07-usecase-finance-footer}
   mkdir -p screenshots/usecase-video/{00-usecase-video-navbar,01-usecase-video-hero,02-usecase-video-overview,03-usecase-video-features,04-usecase-video-examples,05-usecase-video-benefits,06-usecase-video-cta,07-usecase-video-footer}
   ```

2. **Rename and move existing screenshots** (landing page):
   ```bash
   mv "screenshots/top-navgation-bar.png" "screenshots/landing/00-landing-navbar/00-landing-navbar-akira.png"
   mv "screenshots/akira_ai_website1.png" "screenshots/landing/01-landing-hero/01-landing-hero-akira.png"
   mv "screenshots/hero-section-datarobot.png" "screenshots/landing/01-landing-hero/01-landing-hero-datarobot.png"
   mv "screenshots/brightwave-web1.png" "screenshots/landing/01-landing-hero/01-landing-hero-brightwave.png"
   mv "screenshots/akira_ai_website2.png" "screenshots/landing/02-landing-solutions/02-landing-solutions-akira.png"
   mv "screenshots/datarobot-website1.png" "screenshots/landing/02-landing-solutions/02-landing-solutions-datarobot.png"
   mv "screenshots/brightwave-web2.png" "screenshots/landing/02-landing-solutions/02-landing-solutions-brightwave.png"
   mv "screenshots/datarobot-website2.png" "screenshots/landing/04-landing-pipeline/04-landing-pipeline-datarobot.png"
   mv "screenshots/brightwave-web3.png" "screenshots/landing/04-landing-pipeline/04-landing-pipeline-brightwave.png"
   mv "screenshots/datarobot-website3.png" "screenshots/landing/05-landing-usecases/05-landing-usecases-datarobot.png"
   mv "screenshots/language-drop-down-design.png" "screenshots/landing/00-landing-navbar/00-landing-navbar-language-dropdown.png"
   ```

3. **Archive reference screenshot**:
   ```bash
   mv "screenshots/agentii-solutions-reference.png" "references/02-archive/02-archive-reference-screenshot.png"
   ```

4. **Document missing screenshots**: Create a checklist in `research.md` listing which screenshots still need to be captured for each section.

**Deliverable**: `research.md` section documenting screenshot reorganization with a mapping table and missing screenshot checklist.

### Phase 0.3: Prompts Directory Setup

**Objective**: Create the prompts directory structure for all three pages (landing, usecase-finance, usecase-video).

**Tasks**:

1. **Create directory structure**:
   ```bash
   mkdir -p prompts/landing
   mkdir -p prompts/usecase-finance
   mkdir -p prompts/usecase-video
   ```

2. **Create placeholder prompt files** (landing page):
   ```bash
   touch prompts/landing/{00-landing-navbar-prompt.md,01-landing-hero-prompt.md,02-landing-solutions-prompt.md,03-landing-metrics-prompt.md,04-landing-pipeline-prompt.md,05-landing-usecases-prompt.md,06-landing-differentiators-prompt.md,07-landing-testimonials-prompt.md,08-landing-cta-prompt.md,09-landing-footer-prompt.md}
   ```

3. **Create placeholder prompt files** (finance use case):
   ```bash
   touch prompts/usecase-finance/{01-usecase-finance-hero-prompt.md,02-usecase-finance-overview-prompt.md,03-usecase-finance-features-prompt.md,04-usecase-finance-examples-prompt.md,05-usecase-finance-benefits-prompt.md,06-usecase-finance-cta-prompt.md}
   ```

4. **Create placeholder prompt files** (video AI use case):
   ```bash
   touch prompts/usecase-video/{01-usecase-video-hero-prompt.md,02-usecase-video-overview-prompt.md,03-usecase-video-features-prompt.md,04-usecase-video-examples-prompt.md,05-usecase-video-benefits-prompt.md,06-usecase-video-cta-prompt.md}
   ```

**Deliverable**: Empty prompt files in correct directory structure, documented in `research.md`.

### Phase 0.4: Naming Convention Documentation

**Objective**: Create comprehensive documentation of the naming convention for all asset types.

**Tasks**:

1. **Document naming patterns** in `research.md`:
   - References: `{NN}-{category}-{topic}.md`
   - Screenshots: `{NN}-{page-name}-{section-name}-{source}.png`
   - Prompts: `{NN}-{page-name}-{section-name}-prompt.md`
   - Components: `{PascalCase}.tsx` (existing convention)

2. **Create section-to-number mapping tables** for each page:
   - Landing page: 00-09 (10 sections)
   - Finance use case: 01-06 (6 sections, navbar/footer shared)
   - Video AI use case: 01-06 (6 sections, navbar/footer shared)

3. **Document rationale**: Explain why this naming convention enables agent-driven development and human navigation.

**Deliverable**: Complete `research.md` with naming convention documentation, mapping tables, and rationale.

### Phase 0 Deliverable

**File**: `specs/001-mvp-website/research.md`

**Contents**:
- Naming convention specification
- References reorganization mapping (old → new)
- Screenshots reorganization mapping (old → new)
- Missing screenshots checklist
- Section-to-number mapping for all 3 pages
- Rationale for naming decisions

---

## Phase 1: Design & Contracts

**Prerequisites**: Phase 0 complete (all files renamed and organized)

### Phase 1.1: Data Model

**Objective**: Define the entity model for pages, sections, prompts, and screenshots.

**Tasks**:

1. **Define Page entity**:
   - Attributes: page_name, page_type (landing/usecase), route, sections[]
   - Relationships: has_many sections

2. **Define Section entity**:
   - Attributes: section_number, section_name, page_name, component_name, color_accent, has_screenshots, has_prompt
   - Relationships: belongs_to page, has_one prompt, has_many screenshots

3. **Define Prompt entity**:
   - Attributes: prompt_file_path, section_reference, screenshot_references[], design_guidelines_appended
   - Relationships: belongs_to section

4. **Define Screenshot entity**:
   - Attributes: file_path, source_company, descriptor, section_reference
   - Relationships: belongs_to section

**Deliverable**: `specs/001-mvp-website/data-model.md` with entity definitions and relationships.

### Phase 1.2: Prompt Templates (Contracts)

**Objective**: Create reusable prompt templates for common section types.

**Tasks**:

1. **Create hero section template** (`contracts/prompt-template-hero.md`):
   - Structure: headline, tagline, CTA buttons, visual element
   - Design specs: Futura 56-72px, primary blue, 8px spacing
   - Screenshot references: hero screenshots from all sources
   - Design guidelines appendix

2. **Create solutions/features section template** (`contracts/prompt-template-solutions.md`):
   - Structure: 3-column card grid, color-coded by solution area
   - Design specs: 12px border radius, teal/purple/blue accents
   - Screenshot references: solutions/features screenshots
   - Design guidelines appendix

3. **Create use cases section template** (`contracts/prompt-template-usecases.md`):
   - Structure: industry-specific examples, data visualizations
   - Design specs: table-first layout, code blocks with JetBrains Mono
   - Screenshot references: use case screenshots
   - Design guidelines appendix

4. **Create CTA section template** (`contracts/prompt-template-cta.md`):
   - Structure: headline, description, primary button
   - Design specs: teal button, generous padding
   - Screenshot references: CTA screenshots
   - Design guidelines appendix

**Deliverable**: 4 prompt templates in `specs/001-mvp-website/contracts/` directory.

### Phase 1.3: Developer Quickstart Guide

**Objective**: Create a step-by-step guide for developers to use the pipeline.

**Tasks**:

1. **Document the 7-step workflow**:
   - Step 1: Identify section to build
   - Step 2: Locate prompt file by naming convention
   - Step 3: Review screenshot references
   - Step 4: Copy prompt + attach screenshots to Lovable.dev
   - Step 5: Save generated code to correct component path
   - Step 6: Refine copy and spacing
   - Step 7: Test responsive layout

2. **Provide examples**: Show complete workflow for one section (e.g., Hero).

3. **Document troubleshooting**: Common issues and solutions.

**Deliverable**: `specs/001-mvp-website/quickstart.md` with developer workflow guide.

### Phase 1.4: Agent Context Update

**Objective**: Update Claude Code agent context with new naming conventions and project structure.

**Tasks**:

1. **Run agent context script**:
   ```bash
   bash .specify/scripts/bash/update-agent-context.sh claude
   ```

2. **Verify context file updated**: Check that naming conventions and directory structure are documented in agent context.

**Deliverable**: Updated agent context file with Phase 1 design decisions.

### Phase 1 Deliverables

- `specs/001-mvp-website/data-model.md`
- `specs/001-mvp-website/contracts/prompt-template-hero.md`
- `specs/001-mvp-website/contracts/prompt-template-solutions.md`
- `specs/001-mvp-website/contracts/prompt-template-usecases.md`
- `specs/001-mvp-website/contracts/prompt-template-cta.md`
- `specs/001-mvp-website/quickstart.md`
- Updated agent context file

---

## Phase 2: Task Generation

**Prerequisites**: Phase 1 complete (data model, contracts, quickstart guide ready)

**Objective**: Generate detailed implementation tasks using `/speckit.tasks` command.

**Note**: This phase is NOT executed by `/speckit.plan`. It requires a separate `/speckit.tasks` command invocation.

**Expected Output**: `specs/001-mvp-website/tasks.md` with dependency-ordered tasks for:
- Landing page section generation (10 sections)
- Finance use case page generation (6 sections)
- Video AI use case page generation (6 sections)
- Bilingual localization (P3)
- Testing and deployment

---

## Summary

This plan establishes a systematic Lovable.dev-based development pipeline for the agentii.Solutions MVP website. Phase 0 is critical: it reorganizes all existing references and screenshots into the `{NN}-{page-name}-{section-name}` naming convention, creating a predictable structure that both humans and AI agents can navigate by filename alone. Phase 1 defines the data model, creates reusable prompt templates, and documents the developer workflow. Phase 2 (via `/speckit.tasks`) will generate the detailed implementation tasks.

**Key Success Factors**:
1. Strict adherence to naming convention from Phase 0 onward
2. All prompts include full design guidelines appendix
3. Screenshots organized by page and section for easy reference
4. Prompt templates reduce repetitive work across similar sections
5. Agent context updated to enable autonomous asset preparation

**Next Steps**:
1. Execute Phase 0 file reorganization
2. Generate `research.md` documenting the new structure
3. Execute Phase 1 design and contracts
4. Run `/speckit.tasks` to generate implementation tasks
