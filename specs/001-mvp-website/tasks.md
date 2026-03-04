# Tasks: MVP Website with Lovable.dev Coding Pipeline

**Input**: Design documents from `/specs/001-mvp-website/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Frontend-only project: `src/`, `prompts/`, `screenshots/`, `references/` at repository root
- Components: `src/components/` with page-specific subdirectories
- Pages: `src/pages/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and naming system establishment

**Note**: Phase 0 from the plan (naming system & file organization) has already been completed. References, screenshots, and prompts are now organized with the `{NN}-{page-name}-{section-name}` naming convention.

- [ ] T001 Verify naming convention compliance across all references, screenshots, and prompts directories
- [ ] T002 [P] Create component subdirectories in src/components/ (landing/, usecase-finance/, usecase-video/)
- [ ] T003 [P] Create page files in src/pages/ (UseCaseFinance.tsx, UseCaseVideo.tsx, UseCaseSynthetic.tsx)
- [ ] T004 [P] Create i18n locale files in src/locales/ (en.json, zh.json)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Read and validate references/00-core/00-core-design-guidelines.md for prompt generation
- [ ] T006 [P] Create prompt template utility function to append design guidelines
- [ ] T007 [P] Verify all existing components (Navbar, Footer, HeroSection, etc.) follow design system
- [ ] T008 Update Navbar component to include language switcher (EN/中文) in src/components/Navbar.tsx
- [ ] T009 Update Footer component with company info and navigation links in src/components/Footer.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Developer Generates Page Section via Lovable.dev Prompt (Priority: P1) 🎯 MVP

**Goal**: Enable developers to generate any page section by locating prompt files, screenshots, and using Lovable.dev to produce code that matches the design system.

**Independent Test**: Select the Hero section, locate `prompts/landing/01-landing-hero-prompt.md`, verify it contains screenshot references and design guidelines, paste into Lovable.dev, and confirm generated code uses Futura typography, #3B82F6 blue, and 8px spacing grid.

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

**Independent Test**: Ask agent to prepare finance use case page assets, verify all prompts follow naming convention, include design guidelines, and reference correct screenshots.

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

**Independent Test**: Take any generated section, update headline text and CTA labels, verify component renders correctly without breaking.

### Implementation for User Story 3

- [ ] T036 [P] [US3] Refine Navbar component copy and add bilingual support in src/components/Navbar.tsx
- [ ] T037 [P] [US3] Refine HeroSection component copy in src/components/landing/HeroSection.tsx
- [ ] T038 [P] [US3] Refine SolutionsSection component copy in src/components/landing/SolutionsSection.tsx
- [ ] T039 [P] [US3] Refine MetricsBar component copy in src/components/landing/MetricsBar.tsx
- [ ] T040 [P] [US3] Refine PipelineSection component copy in src/components/landing/PipelineSection.tsx
- [ ] T041 [P] [US3] Refine UseCasesSection component copy in src/components/landing/UseCasesSection.tsx
- [ ] T042 [P] [US3] Refine DifferentiatorsSection component copy in src/components/landing/DifferentiatorsSection.tsx
- [ ] T043 [P] [US3] Refine TestimonialsSection component copy in src/components/landing/TestimonialsSection.tsx
- [ ] T044 [P] [US3] Refine CTASection component copy in src/components/landing/CTASection.tsx
- [ ] T045 [P] [US3] Refine Footer component copy in src/components/Footer.tsx
- [ ] T046 [US3] Verify all color values match design guidelines (#3B82F6, #14B8A6, #8B5CF6)
- [ ] T047 [US3] Verify all spacing follows 8px grid system
- [ ] T048 [US3] Verify all typography uses Futura for headers, Inter for body

**Checkpoint**: All landing page components are refined and ready for assembly

---

## Phase 6: User Story 4 - Full Landing Page Assembly from Generated Sections (Priority: P2)

**Goal**: Assemble all individually generated sections into a complete landing page with consistent styling and smooth scrolling.

**Independent Test**: Import all section components into Index page, verify visual consistency, scroll behavior, and responsive layout across desktop (1280px), tablet (768px), and mobile (375px).

### Implementation for User Story 4

- [ ] T049 [US4] Update Index page to import all landing sections in src/pages/Index.tsx
- [ ] T050 [US4] Verify section order: Navbar → Hero → Solutions → Metrics → Pipeline → UseCases → Differentiators → Testimonials → CTA → Footer
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

- [ ] T059 [P] Generate FinanceHero component using Lovable.dev in src/components/usecase-finance/FinanceHero.tsx
- [ ] T060 [P] Generate FinanceOverview component in src/components/usecase-finance/FinanceOverview.tsx
- [ ] T061 [P] Generate FinanceFeatures component in src/components/usecase-finance/FinanceFeatures.tsx
- [ ] T062 [P] Generate FinanceExamples component in src/components/usecase-finance/FinanceExamples.tsx
- [ ] T063 [P] Generate FinanceBenefits component in src/components/usecase-finance/FinanceBenefits.tsx
- [ ] T064 [P] Generate FinanceCTA component in src/components/usecase-finance/FinanceCTA.tsx
- [ ] T065 Assemble finance use case page in src/pages/UseCaseFinance.tsx
- [ ] T066 Test finance page responsive layout across all breakpoints
- [ ] T067 Verify finance page uses shared Navbar and Footer components

**Checkpoint**: Finance use case page is complete

---

## Phase 8: Video AI Use Case Page Implementation

**Goal**: Generate and assemble video AI use case page components

- [ ] T068 [P] Generate VideoHero component using Lovable.dev in src/components/usecase-video/VideoHero.tsx
- [ ] T069 [P] Generate VideoOverview component in src/components/usecase-video/VideoOverview.tsx
- [ ] T070 [P] Generate VideoFeatures component in src/components/usecase-video/VideoFeatures.tsx
- [ ] T071 [P] Generate VideoExamples component in src/components/usecase-video/VideoExamples.tsx
- [ ] T072 [P] Generate VideoBenefits component in src/components/usecase-video/VideoBenefits.tsx
- [ ] T073 [P] Generate VideoCTA component in src/components/usecase-video/VideoCTA.tsx
- [ ] T074 Assemble video use case page in src/pages/UseCaseVideo.tsx
- [ ] T075 Test video page responsive layout across all breakpoints
- [ ] T076 Verify video page uses shared Navbar and Footer components

**Checkpoint**: Video AI use case page is complete

---

## Phase 9: Synthetic Data Use Case Page Implementation

**Goal**: Generate and assemble synthetic data use case page components

**Note**: This page covers reasoning models, coding models, and agentic models as requested.

- [ ] T077 [P] Capture screenshots for synthetic data use case sections in screenshots/usecase-synthetic/
- [ ] T078 [P] Generate prompts for synthetic data use case in prompts/usecase-synthetic/
- [ ] T079 [P] Generate SyntheticHero component in src/components/usecase-synthetic/SyntheticHero.tsx
- [ ] T080 [P] Generate SyntheticOverview component in src/components/usecase-synthetic/SyntheticOverview.tsx
- [ ] T081 [P] Generate SyntheticFeatures component (reasoning, coding, agentic models) in src/components/usecase-synthetic/SyntheticFeatures.tsx
- [ ] T082 [P] Generate SyntheticExamples component in src/components/usecase-synthetic/SyntheticExamples.tsx
- [ ] T083 [P] Generate SyntheticBenefits component in src/components/usecase-synthetic/SyntheticBenefits.tsx
- [ ] T084 [P] Generate SyntheticCTA component in src/components/usecase-synthetic/SyntheticCTA.tsx
- [ ] T085 Assemble synthetic data use case page in src/pages/UseCaseSynthetic.tsx
- [ ] T086 Test synthetic page responsive layout across all breakpoints
- [ ] T087 Verify synthetic page uses shared Navbar and Footer components

**Checkpoint**: Synthetic data use case page is complete

---

## Phase 10: User Story 5 - Bilingual Content with Language Switching (Priority: P3)

**Goal**: Implement full bilingual support with English (default) and Simplified Chinese, with language toggle in navbar.

**Independent Test**: Click language switcher, verify all visible text on landing page changes to Chinese, then back to English.

### Implementation for User Story 5

- [ ] T088 [P] [US5] Extract all English text strings to src/locales/en.json
- [ ] T089 [P] [US5] Create Chinese translations in src/locales/zh.json
- [ ] T090 [US5] Implement i18n context provider in src/App.tsx
- [ ] T091 [US5] Update Navbar language switcher to toggle between EN/中文
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

- [ ] T100 [P] Add React Router navigation between pages in src/App.tsx
- [ ] T101 [P] Update Navbar links to navigate to use case pages
- [ ] T102 [P] Add 404 NotFound page handling
- [ ] T103 Run ESLint and fix all linting errors across all components
- [ ] T104 Run TypeScript type checking and fix all type errors
- [ ] T105 Optimize images - convert to WebP format, add lazy loading
- [ ] T106 Add meta tags for SEO in index.html
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

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Can run in parallel with US1
- **User Story 3 (P2)**: Depends on US1 prompts being generated and used in Lovable.dev
- **User Story 4 (P2)**: Depends on US3 refinement being complete
- **User Story 5 (P3)**: Depends on all pages being assembled (US4 + Phases 7-9)

### Within Each User Story

- **US1**: All prompt generation tasks (T010-T019) can run in parallel
- **US2**: All prompt generation tasks (T022-T033) can run in parallel
- **US3**: All refinement tasks (T036-T045) can run in parallel
- **US4**: Assembly must be sequential (import → test → verify)
- **US5**: Locale file creation can be parallel, component updates can be parallel

### Parallel Opportunities

- **Phase 1**: T002, T003, T004 can run in parallel
- **Phase 2**: T006, T007 can run in parallel
- **Phase 3 (US1)**: T010-T019 (all prompt generation) can run in parallel
- **Phase 4 (US2)**: T022-T033 (all prompt generation) can run in parallel
- **Phase 5 (US3)**: T036-T045 (all refinement) can run in parallel
- **Phase 7**: T059-T064 (all finance components) can run in parallel
- **Phase 8**: T068-T073 (all video components) can run in parallel
- **Phase 9**: T077-T084 (all synthetic components) can run in parallel
- **Phase 10 (US5)**: T088-T089 (locale files), T092-T095 (component updates) can run in parallel
- **Phase 11**: T100-T102, T103-T104 can run in parallel

---

## Parallel Example: User Story 1 (Prompt Generation)

```bash
# Launch all landing page prompt generation tasks together:
Task: "Generate prompt for 00-landing-navbar in prompts/landing/00-landing-navbar-prompt.md"
Task: "Generate prompt for 01-landing-hero in prompts/landing/01-landing-hero-prompt.md"
Task: "Generate prompt for 02-landing-solutions in prompts/landing/02-landing-solutions-prompt.md"
Task: "Generate prompt for 03-landing-metrics in prompts/landing/03-landing-metrics-prompt.md"
Task: "Generate prompt for 04-landing-pipeline in prompts/landing/04-landing-pipeline-prompt.md"
Task: "Generate prompt for 05-landing-usecases in prompts/landing/05-landing-usecases-prompt.md"
Task: "Generate prompt for 06-landing-differentiators in prompts/landing/06-landing-differentiators-prompt.md"
Task: "Generate prompt for 07-landing-testimonials in prompts/landing/07-landing-testimonials-prompt.md"
Task: "Generate prompt for 08-landing-cta in prompts/landing/08-landing-cta-prompt.md"
Task: "Generate prompt for 09-landing-footer in prompts/landing/09-landing-footer-prompt.md"
```

---

## Implementation Strategy

### MVP First (User Stories 1 & 2 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Landing page prompts)
4. Complete Phase 4: User Story 2 (Use case page prompts)
5. **STOP and VALIDATE**: Test that all prompts are ready for Lovable.dev
6. Use prompts to generate landing page components via Lovable.dev
7. Deploy/demo landing page

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Landing page prompts ready (MVP!)
3. Add User Story 2 → Test independently → All prompts ready
4. Add User Story 3 → Test independently → Code refined
5. Add User Story 4 → Test independently → Landing page assembled
6. Add Phases 7-9 → Test independently → All use case pages complete
7. Add User Story 5 → Test independently → Bilingual support complete
8. Each phase adds value without breaking previous work

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Landing prompts)
   - Developer B: User Story 2 (Use case prompts)
   - Developer C: Capture missing screenshots
3. After prompts ready:
   - Developer A: Generate landing components via Lovable.dev
   - Developer B: Generate finance components via Lovable.dev
   - Developer C: Generate video components via Lovable.dev
4. All developers: Refinement and assembly in parallel

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
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
