# Tasks: MVP Website with Lovable.dev Coding Pipeline

**Input**: Design documents from `/specs/001-mvp-website/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

**Last Updated**: 2026-03-05 — Reconciled with actual codebase state. Many pages were built via Lovable.dev ahead of the original task plan. The site now has 8 pages and 43 components. Tasks marked [X] reflect work already done. New tasks added for issues discovered during code audit.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Frontend-only project: `src/`, `prompts/`, `screenshots/`, `references/` at repository root
- Components: `src/components/` (flat structure — NOT in page subdirectories as originally planned)
- Pages: `src/pages/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and naming system establishment

**Note**: Phase 0 from the plan (naming system & file organization) has already been completed. References, screenshots, and prompts are now organized with the `{NN}-{page-name}-{section-name}` naming convention.

- [X] T001 Verify naming convention compliance across all references, screenshots, and prompts directories
- [X] T002 [P] Create component subdirectories in src/components/ (landing/, usecase-finance/, usecase-video/) — NOTE: Components were placed flat in src/components/ instead of subdirectories. This is acceptable.
- [X] T003 [P] Create page files in src/pages/ — Pages created: Index.tsx, About.tsx, DocumentProcessing.tsx, VideoAudioSolution.tsx, SyntheticDataSolution.tsx, FinanceUseCase.tsx, InsuranceUseCase.tsx, VideoUseCase.tsx, NotFound.tsx
- [ ] T004 [P] Create i18n locale files in src/locales/ (en.json, zh.json)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [X] T005 Read and validate references/00-core/00-core-design-guidelines.md for prompt generation
- [ ] T006 [P] Create prompt template utility function to append design guidelines
- [X] T007 [P] Verify all existing components (Navbar, Footer, HeroSection, etc.) follow design system
- [X] T008 Update Navbar component to include language switcher (EN/中文) in src/components/Navbar.tsx — Language switcher UI exists but is not functional
- [ ] T009 Update Footer component with company info and navigation links in src/components/Footer.tsx — Footer exists but ALL links point to `#` instead of actual routes

**Checkpoint**: Foundation partially ready — Navbar and Footer need link fixes before full completion

---

## Phase 3: User Story 1 - Developer Generates Page Section via Lovable.dev Prompt (Priority: P1) 🎯 MVP

**Goal**: Enable developers to generate any page section by locating prompt files, screenshots, and using Lovable.dev to produce code that matches the design system.

### Implementation for User Story 1

- [ ] T010 [P] [US1] Generate prompt for 00-landing-navbar in prompts/landing/00-landing-navbar-prompt.md using hero template
- [ ] T011 [P] [US1] Generate prompt for 01-landing-hero in prompts/landing/01-landing-hero-prompt.md using hero template
- [ ] T012 [P] [US1] Generate prompt for 02-landing-solutions in prompts/landing/02-landing-solutions-prompt.md using solutions template
- [ ] T013 [P] [US1] Generate prompt for 03-landing-metrics in prompts/landing/03-landing-metrics-prompt.md
- [ ] T014 [P] [US1] Generate prompt for 04-landing-pipeline in prompts/landing/04-landing-pipeline-prompt.md
- [ ] T015 [P] [US1] Generate prompt for 05-landing-usecases in prompts/landing/05-landing-usecases-prompt.md using usecases template
- [ ] T016 [P] [US1] Generate prompt for 06-landing-differentiators in prompts/landing/06-landing-differentiators-prompt.md
- [ ] T017 [P] [US1] Generate prompt for 07-landing-testimonials in prompts/landing/07-landing-testimonials-prompt.md
- [ ] T018 [P] [US1] Generate prompt for 08-landing-cta in prompts/landing/08-landing-cta-prompt.md using cta template
- [ ] T019 [P] [US1] Generate prompt for 09-landing-footer in prompts/landing/09-landing-footer-prompt.md
- [ ] T020 [US1] Verify all landing page prompts include design guidelines appendix from references/00-core/00-core-design-guidelines.md
- [ ] T021 [US1] Verify all landing page prompts reference correct screenshot filenames from screenshots/landing/

**Checkpoint**: At this point, all landing page prompts are ready for Lovable.dev code generation

---

## Phase 4: User Story 2 - Claude Code Agent Prepares All Assets for a Page (Priority: P1)

**Goal**: Enable AI agents to automatically prepare prompts for any page by reading references, identifying screenshots, and generating prompts with design guidelines appended.

### Implementation for User Story 2

- [ ] T022 [P] [US2] Generate prompt for 01-usecase-finance-hero in prompts/usecase-finance/01-usecase-finance-hero-prompt.md
- [ ] T023 [P] [US2] Generate prompt for 02-usecase-finance-overview in prompts/usecase-finance/02-usecase-finance-overview-prompt.md
- [ ] T024 [P] [US2] Generate prompt for 03-usecase-finance-features in prompts/usecase-finance/03-usecase-finance-features-prompt.md
- [ ] T025 [P] [US2] Generate prompt for 04-usecase-finance-examples in prompts/usecase-finance/04-usecase-finance-examples-prompt.md
- [ ] T026 [P] [US2] Generate prompt for 05-usecase-finance-benefits in prompts/usecase-finance/05-usecase-finance-benefits-prompt.md
- [ ] T027 [P] [US2] Generate prompt for 06-usecase-finance-cta in prompts/usecase-finance/06-usecase-finance-cta-prompt.md
- [ ] T028 [P] [US2] Generate prompt for 01-usecase-video-hero in prompts/usecase-video/01-usecase-video-hero-prompt.md
- [ ] T029 [P] [US2] Generate prompt for 02-usecase-video-overview in prompts/usecase-video/02-usecase-video-overview-prompt.md
- [ ] T030 [P] [US2] Generate prompt for 03-usecase-video-features in prompts/usecase-video/03-usecase-video-features-prompt.md
- [ ] T031 [P] [US2] Generate prompt for 04-usecase-video-examples in prompts/usecase-video/04-usecase-video-examples-prompt.md
- [ ] T032 [P] [US2] Generate prompt for 05-usecase-video-benefits in prompts/usecase-video/05-usecase-video-benefits-prompt.md
- [ ] T033 [P] [US2] Generate prompt for 06-usecase-video-cta in prompts/usecase-video/06-usecase-video-cta-prompt.md
- [ ] T034 [US2] Verify all use case prompts include design guidelines appendix
- [ ] T035 [US2] Document agent workflow for prompt generation in specs/001-mvp-website/quickstart.md

**Checkpoint**: All prompts for landing, finance, and video pages are ready

---

## Phase 5: User Story 3 - Developer Refines Generated Code with Text Edits (Priority: P2)

**Goal**: Enable developers to refine Lovable.dev-generated code by editing copy, spacing, colors, and adding bilingual support.

**Note**: Components live in `src/components/` (flat), not in page subdirectories as originally planned.

### Implementation for User Story 3

- [ ] T036 [P] [US3] Refine Navbar component copy and add bilingual support in src/components/Navbar.tsx
- [ ] T037 [P] [US3] Refine HeroSection component copy in src/components/HeroSection.tsx
- [ ] T038 [P] [US3] Refine SolutionsSection component copy in src/components/SolutionsSection.tsx
- [ ] T039 [P] [US3] Refine MetricsBar component copy in src/components/MetricsBar.tsx
- [ ] T040 [P] [US3] Refine PipelineSection component copy in src/components/PipelineSection.tsx
- [ ] T041 [P] [US3] Refine UseCasesSection component copy in src/components/UseCasesSection.tsx
- [ ] T042 [P] [US3] Refine DifferentiatorsSection component copy in src/components/DifferentiatorsSection.tsx
- [ ] T043 [P] [US3] Refine TestimonialsSection component copy in src/components/TestimonialsSection.tsx
- [ ] T044 [P] [US3] Refine CTASection component copy in src/components/CTASection.tsx
- [ ] T045 [P] [US3] Refine Footer component copy in src/components/Footer.tsx
- [ ] T046 [US3] Verify all color values match design guidelines (#3B82F6, #14B8A6, #8B5CF6)
- [ ] T047 [US3] Verify all spacing follows 8px grid system
- [ ] T048 [US3] Verify all typography uses Futura for headers, Inter for body

**Checkpoint**: All landing page components are refined and ready for assembly

---

## Phase 6: User Story 4 - Full Landing Page Assembly from Generated Sections (Priority: P2)

**Goal**: Assemble all individually generated sections into a complete landing page with consistent styling and smooth scrolling.

### Implementation for User Story 4

- [X] T049 [US4] Update Index page to import all landing sections in src/pages/Index.tsx — All 9 sections imported and rendered
- [X] T050 [US4] Verify section order: Navbar → Hero → Solutions → Metrics → UseCases → Pipeline → Differentiators → Testimonials → CTA → Footer — NOTE: Actual order swaps UseCases before Pipeline (differs from original spec but works)
- [ ] T051 [US4] Test responsive layout at 1280px (desktop) - verify 3-column grids, full spacing
- [ ] T052 [US4] Test responsive layout at 768px (tablet) - verify 2-column grids, reduced spacing
- [ ] T053 [US4] Test responsive layout at 375px (mobile) - verify single column, stacked buttons
- [ ] T054 [US4] Verify smooth scrolling between sections
- [ ] T055 [US4] Verify consistent typography across all sections (Futura headers, Inter body)
- [ ] T056 [US4] Verify consistent color palette across all sections
- [ ] T057 [US4] Verify no horizontal overflow on any breakpoint
- [ ] T058 [US4] Run Lighthouse audit - verify Performance > 90, Accessibility > 90

**Checkpoint**: Landing page is fully assembled and tested

---

## Phase 7: Finance Use Case Page Implementation

**Goal**: Generate and assemble finance use case page components

**Status**: ✅ Page exists at `/use-cases/finance` with 6 sections. Components are in `src/components/` (flat).

- [X] T059 [P] Generate FinanceHeroSection component — src/components/FinanceHeroSection.tsx
- [X] T060 [P] Generate FinanceWorkflowsSection component — src/components/FinanceWorkflowsSection.tsx (replaces planned FinanceOverview)
- [X] T061 [P] Generate DocumentProcessingFeaturesSection (shared) — src/components/DocumentProcessingFeaturesSection.tsx
- [X] T062 [P] Generate DocumentProcessingTableSection (shared) — src/components/DocumentProcessingTableSection.tsx
- [X] T063 [P] Generate FinanceDataMappingSection component — src/components/FinanceDataMappingSection.tsx (replaces planned FinanceBenefits)
- [X] T064 [P] Generate FinanceCTASection component — src/components/FinanceCTASection.tsx
- [X] T065 Assemble finance use case page in src/pages/FinanceUseCase.tsx — Complete with 6 sections
- [ ] T066 Test finance page responsive layout across all breakpoints
- [X] T067 Verify finance page uses shared Navbar and Footer components

**Checkpoint**: Finance use case page is complete (pending responsive testing)

---

## Phase 8: Video AI Use Case Page Implementation

**Goal**: Generate and assemble video AI use case page components

**Status**: Two separate video pages exist:
- `/solutions/video-audio` — ✅ Complete (6 sections, VideoAudioSolution.tsx)
- `/use-cases/video-generation` — ⚠️ INCOMPLETE (only VideoHeroSection)

- [X] T068 [P] Generate VideoAudioHeroSection — src/components/VideoAudioHeroSection.tsx (for /solutions/video-audio)
- [X] T069 [P] Generate VideoAudioCapabilitiesSection — src/components/VideoAudioCapabilitiesSection.tsx
- [X] T070 [P] Generate VideoAudioSceneUnderstandingSection — src/components/VideoAudioSceneUnderstandingSection.tsx
- [X] T071 [P] Generate VideoAudioTrackingSegmentationSection — src/components/VideoAudioTrackingSegmentationSection.tsx
- [X] T072 [P] Generate VideoAudioAnnotationShowcaseSection — src/components/VideoAudioAnnotationShowcaseSection.tsx
- [X] T073 [P] Generate VideoAudioCTASection — src/components/VideoAudioCTASection.tsx
- [X] T074 Assemble video-audio solution page in src/pages/VideoAudioSolution.tsx — Complete
- [ ] T075 Test video-audio page responsive layout across all breakpoints
- [X] T076 Verify video-audio page uses shared Navbar and Footer components

**Checkpoint**: Video & Audio solution page is complete. Video Generation use case page needs work (see Phase 12).

---

## Phase 9: Synthetic Data Solution Page Implementation

**Goal**: Generate and assemble synthetic data solution page components

**Status**: ✅ Page exists at `/solutions/synthetic-data` with 6 sections.

- [X] T077 [P] Capture screenshots for synthetic data — Not needed (page built directly via Lovable.dev)
- [X] T078 [P] Generate prompts for synthetic data — Not needed (page built directly via Lovable.dev)
- [X] T079 [P] Generate SyntheticDataHeroSection — src/components/SyntheticDataHeroSection.tsx
- [X] T080 [P] Generate SyntheticDataFabricationSection — src/components/SyntheticDataFabricationSection.tsx
- [X] T081 [P] Generate SyntheticDataImpactSection — src/components/SyntheticDataImpactSection.tsx
- [X] T082 [P] Generate SyntheticDataBenefitsSection — src/components/SyntheticDataBenefitsSection.tsx
- [X] T083 [P] Generate SyntheticDataScaleSection — src/components/SyntheticDataScaleSection.tsx
- [X] T084 [P] Generate SyntheticDataSuiteSection — src/components/SyntheticDataSuiteSection.tsx
- [X] T085 Assemble synthetic data page in src/pages/SyntheticDataSolution.tsx — Complete with 6 sections
- [ ] T086 Test synthetic page responsive layout across all breakpoints
- [X] T087 Verify synthetic page uses shared Navbar and Footer components

**Checkpoint**: Synthetic data solution page is complete (pending responsive testing)

---

## Phase 10: User Story 5 - Bilingual Content with Language Switching (Priority: P3)

**Goal**: Implement full bilingual support with English (default) and Simplified Chinese, with language toggle in navbar.

### Implementation for User Story 5

- [ ] T088 [P] [US5] Extract all English text strings to src/locales/en.json
- [ ] T089 [P] [US5] Create Chinese translations in src/locales/zh.json
- [ ] T090 [US5] Implement i18n context provider in src/App.tsx
- [ ] T091 [US5] Update Navbar language switcher to toggle between EN/中文 (UI exists, needs functionality)
- [ ] T092 [P] [US5] Update all landing page components to use i18n strings
- [ ] T093 [P] [US5] Update all finance page components to use i18n strings
- [ ] T094 [P] [US5] Update all video page components to use i18n strings
- [ ] T095 [P] [US5] Update all synthetic page components to use i18n strings
- [ ] T096 [US5] Test language switching on landing page - verify all text changes
- [ ] T097 [US5] Test language switching on all use case pages
- [ ] T098 [US5] Verify technical terms remain consistent across languages
- [ ] T099 [US5] Verify Chinese translations are culturally appropriate

**Checkpoint**: Full bilingual support is implemented and tested

---

## Phase 11: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements that affect multiple pages

- [X] T100 [P] Add React Router navigation between pages in src/App.tsx — 8 routes configured
- [X] T101 [P] Update Navbar links to navigate to use case pages — Fixed all dropdown links to actual routes
- [X] T102 [P] Add 404 NotFound page handling — src/pages/NotFound.tsx exists with catch-all route
- [ ] T103 Run ESLint and fix all linting errors across all components
- [ ] T104 Run TypeScript type checking and fix all type errors
- [ ] T105 Optimize images - convert to WebP format, add lazy loading
- [X] T106 Add meta tags for SEO in index.html — Title, description, OG tags, Twitter cards present
- [ ] T107 Test all pages on physical mobile devices (iPhone, Android)
- [ ] T108 Run Lighthouse audit on all pages - verify Performance > 90, Accessibility > 90
- [ ] T109 Verify WCAG AA contrast ratios on all pages
- [ ] T110 Test keyboard navigation on all pages
- [ ] T111 Verify all images have alt text
- [ ] T112 Test smooth scrolling and section anchors
- [ ] T113 Final visual consistency check across all pages
- [ ] T114 Update README.md with project overview and development instructions
- [ ] T115 Run quickstart.md validation workflow

---

## Phase 12: NEW — Pages & Links Discovered During Code Audit (2026-03-05)

**Purpose**: Address gaps found during comprehensive codebase review. These are new pages and fixes not in the original plan.

### 12A: Incomplete Pages

- [ ] T116 [P] Complete Video Generation Use Case page (`/use-cases/video-generation`) — Currently only has VideoHeroSection. Needs: overview, features, examples, benefits, CTA sections in src/pages/VideoUseCase.tsx
- [ ] T117 [P] Flesh out About page (`/about`) — Currently only has AboutHeroSection. Consider adding: team, mission, values, timeline sections in src/pages/About.tsx

### 12B: Insurance Use Case Page (Not in Original Plan)

**Status**: ✅ Page exists at `/use-cases/insurance` with 6 sections. Was not in original tasks.md but was built via Lovable.dev.

- [X] T118 [P] Generate InsuranceHeroSection — src/components/InsuranceHeroSection.tsx
- [X] T119 [P] Generate InsuranceWorkflowsSection — src/components/InsuranceWorkflowsSection.tsx
- [X] T120 [P] Generate InsuranceDataMappingSection — src/components/InsuranceDataMappingSection.tsx
- [X] T121 [P] Generate InsuranceCTASection — src/components/InsuranceCTASection.tsx
- [X] T122 Assemble insurance use case page in src/pages/InsuranceUseCase.tsx
- [ ] T123 Test insurance page responsive layout across all breakpoints

### 12C: Document Processing Solution Page (Not in Original Plan)

**Status**: ✅ Page exists at `/solutions/document-processing` with 8 sections. Was not in original tasks.md but was built via Lovable.dev.

- [X] T124 [P] Generate DocumentProcessingHeroSection — src/components/DocumentProcessingHeroSection.tsx
- [X] T125 [P] Generate DocumentProcessingFeaturesSection — src/components/DocumentProcessingFeaturesSection.tsx
- [X] T126 [P] Generate DocumentProcessingIngestionSection — src/components/DocumentProcessingIngestionSection.tsx
- [X] T127 [P] Generate DocumentProcessingClassificationSection — src/components/DocumentProcessingClassificationSection.tsx
- [X] T128 [P] Generate DocumentProcessingTableSection — src/components/DocumentProcessingTableSection.tsx
- [X] T129 [P] Generate DocumentProcessingDataMappingSection — src/components/DocumentProcessingDataMappingSection.tsx
- [X] T130 [P] Generate DocumentProcessingHumanReviewSection — src/components/DocumentProcessingHumanReviewSection.tsx
- [X] T131 [P] Generate DocumentProcessingCTASection — src/components/DocumentProcessingCTASection.tsx
- [X] T132 Assemble document processing page in src/pages/DocumentProcessing.tsx
- [ ] T133 Test document processing page responsive layout across all breakpoints

### 12D: Navbar Link Fixes (Critical)

- [X] T134 Fix Navbar "Use Cases" dropdown — Change `Finance & Banking` href from `#use-cases` to `/use-cases/finance`
- [X] T135 Fix Navbar "Use Cases" dropdown — Change `Insurance` href from `#use-cases` to `/use-cases/insurance`
- [X] T136 Fix Navbar "Use Cases" dropdown — Change `Video AI Training` href from `#use-cases` to `/use-cases/video-generation`
- [X] T137 Fix Navbar "Industries" dropdown — Change `Financial Services` href from `#use-cases` to `/use-cases/finance`
- [X] T138 Fix Navbar "Industries" dropdown — Change `Insurance` href from `#use-cases` to `/use-cases/insurance`
- [ ] T139 Fix or remove Navbar "Request a Demo" button link — Currently points to `/request-demo` which does not exist. Either create the page or change to `#contact` / mailto link
- [X] T140 Fix Navbar top-level "Researches" label — Changed to "Research" (singular) in src/components/Navbar.tsx

### 12E: Footer Link Fixes (Critical)

- [X] T141 Fix Footer Solutions links — Change `Document Processing` href from `#` to `/solutions/document-processing`
- [X] T142 Fix Footer Solutions links — Change `Video & Audio` href from `#` to `/solutions/video-audio`
- [X] T143 Fix Footer Solutions links — Change `Synthetic Data` href from `#` to `/solutions/synthetic-data`
- [X] T144 Fix Footer Company links — Change `About` href from `#` to `/about`
- [X] T145 Fix Footer copyright year — Changed `© 2024` to `© 2026` in src/components/Footer.tsx
- [X] T146 Convert Footer from simple string arrays to objects with href properties to support proper linking

### 12F: Button Wording & Link Fixes Across All Pages

- [ ] T147 [P] Audit all "Contact Us" / "Request a Demo" buttons across all pages — Ensure they link to a consistent destination (mailto, form, or dedicated page)
- [ ] T148 [P] Fix all `href="#"` placeholder links in SyntheticData components (SyntheticDataSuiteSection, SyntheticDataHeroSection, SyntheticDataScaleSection, SyntheticDataBenefitsSection, SyntheticDataFabricationSection) — Replace with actual routes or remove
- [ ] T149 [P] Fix VideoAudioCTASection `href="#contact"` — `#contact` anchor does not exist on the page
- [ ] T150 [P] Fix SolutionsSection "Synthetic Data" card link — Currently `/use-cases/synthetic-data` but route is `/solutions/synthetic-data`
- [ ] T151 [P] Ensure all CTA buttons across all pages use consistent wording: "Request a Demo" (primary) and "Learn More" or "See Example Output" (secondary)

### 12G: OG/Meta Tag Fixes

- [ ] T152 Update index.html OG image — Currently points to lovable.dev placeholder image, should use agentii.Solutions branding
- [ ] T153 Update index.html Twitter card — Remove `@Lovable` twitter:site reference, replace with agentii handle

---

## Current Page Inventory (Actual State)

| Route | Page | Status | Sections |
|-------|------|--------|----------|
| `/` | Index.tsx | ✅ Complete | 9 sections |
| `/about` | About.tsx | ⚠️ Minimal | 1 section |
| `/solutions/document-processing` | DocumentProcessing.tsx | ✅ Complete | 8 sections |
| `/solutions/video-audio` | VideoAudioSolution.tsx | ✅ Complete | 6 sections |
| `/solutions/synthetic-data` | SyntheticDataSolution.tsx | ✅ Complete | 6 sections |
| `/use-cases/finance` | FinanceUseCase.tsx | ✅ Complete | 6 sections |
| `/use-cases/insurance` | InsuranceUseCase.tsx | ✅ Complete | 6 sections |
| `/use-cases/video-generation` | VideoUseCase.tsx | ⚠️ Incomplete | 1 section |
| `*` | NotFound.tsx | ✅ Complete | Error page |

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - US1 (Phase 3): Prompt generation for landing page
  - US2 (Phase 4): Prompt generation for use case pages
  - US3 (Phase 5): Code refinement (depends on US1 prompts being used)
  - US4 (Phase 6): Page assembly (depends on US3 refinement)
  - US5 (Phase 10): Bilingual support (depends on all pages being complete)
- **Use Case Pages (Phase 7-9)**: Depend on US1 and US2 prompts being ready
- **Polish (Phase 11)**: Depends on all pages being complete
- **NEW Phase 12**: Can start immediately — link fixes are independent of prompt generation

### Recommended Next Steps (Priority Order)

1. **Phase 12D+12E**: Fix Navbar and Footer links (T134-T146) — Quick wins, high impact
2. **Phase 12F**: Fix button links and wording (T147-T151) — Consistency pass
3. **T116**: Complete Video Generation Use Case page — Only incomplete page
4. **T009**: Finish Footer with proper link structure
5. **Phase 3-4**: Generate prompt files (if continuing the Lovable.dev pipeline workflow)
6. **Phase 10**: Bilingual support (P3, can defer)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Phase 0 (naming system) already complete - files are organized
- All prompts must include design guidelines appendix
- All components must follow design system (Futura, #3B82F6, 8px grid)
- Commit after each task or logical group
- Stop at any checkpoint to validate independently
- Use Lovable.dev for code generation, not manual coding
- Components are in `src/components/` (flat) — NOT in page subdirectories as originally planned
- The site has grown beyond the original 3-page plan to 8 pages with 43 components
- Insurance use case and Document Processing solution pages were added outside the original plan
- All prompt files in `prompts/` are still empty (0 bytes) — prompt generation has not started
