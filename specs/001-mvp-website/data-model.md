# Data Model: MVP Website Entities

**Feature Branch**: `001-mvp-website`
**Created**: 2026-03-04
**Phase**: 1.1 — Data Model Definition

---

## Entity Definitions

### 1. Page

Represents a complete web page in the MVP website.

**Attributes**:
- `page_name` (string, required): Kebab-case identifier (e.g., "landing", "usecase-finance", "usecase-video")
- `page_type` (enum, required): "landing" | "usecase"
- `route` (string, required): URL path (e.g., "/", "/use-cases/finance", "/use-cases/video")
- `title` (string, required): Page title for SEO and browser tab
- `description` (string, required): Meta description for SEO
- `sections` (array, required): Ordered list of section references

**Relationships**:
- `has_many` sections (ordered by section_number)
- `has_one` component file in `src/pages/`

**Validation Rules**:
- `page_name` must match directory names in screenshots/ and prompts/
- `route` must be unique across all pages
- `sections` array must contain at least 1 section
- Section numbers must be sequential (no gaps)

**State Transitions**: N/A (pages are static entities)

**Example**:
```json
{
  "page_name": "landing",
  "page_type": "landing",
  "route": "/",
  "title": "agentii.Solutions — Data by Agents, for Agents",
  "description": "Agentic-native data solutions for financial documents, video AI training, and synthetic reasoning data.",
  "sections": [
    { "section_number": "00", "section_name": "navbar" },
    { "section_number": "01", "section_name": "hero" },
    { "section_number": "02", "section_name": "solutions" },
    { "section_number": "03", "section_name": "metrics" },
    { "section_number": "04", "section_name": "pipeline" },
    { "section_number": "05", "section_name": "usecases" },
    { "section_number": "06", "section_name": "differentiators" },
    { "section_number": "07", "section_name": "testimonials" },
    { "section_number": "08", "section_name": "cta" },
    { "section_number": "09", "section_name": "footer" }
  ]
}
```

---

### 2. Section

Represents a discrete visual block within a page (e.g., Hero, Solutions, Footer).

**Attributes**:
- `section_number` (string, required): Two-digit numeric prefix ("00", "01", ... "09")
- `section_name` (string, required): Kebab-case identifier (e.g., "hero", "solutions", "navbar")
- `page_name` (string, required): Parent page identifier
- `component_name` (string, required): PascalCase React component name (e.g., "HeroSection", "Navbar")
- `component_path` (string, required): Relative path from repo root (e.g., "src/components/landing/HeroSection.tsx")
- `color_accent` (string, optional): Primary color for this section (e.g., "#3B82F6", "#14B8A6", "#8B5CF6")
- `is_shared` (boolean, required): Whether this component is shared across multiple pages (e.g., Navbar, Footer)
- `has_screenshots` (boolean, required): Whether screenshots exist for this section
- `has_prompt` (boolean, required): Whether a prompt file exists for this section

**Relationships**:
- `belongs_to` page
- `has_one` prompt
- `has_many` screenshots

**Validation Rules**:
- `section_number` must be two digits (00-99)
- `section_name` must match directory names in screenshots/ and prompts/
- `component_name` must be valid PascalCase identifier
- `component_path` must point to existing or planned .tsx file
- If `is_shared` is true, `component_path` must be at `src/components/` root level
- If `is_shared` is false, `component_path` must be in `src/components/{page_name}/`

**State Transitions**: N/A (sections are static entities)

**Example**:
```json
{
  "section_number": "01",
  "section_name": "hero",
  "page_name": "landing",
  "component_name": "HeroSection",
  "component_path": "src/components/landing/HeroSection.tsx",
  "color_accent": "#3B82F6",
  "is_shared": false,
  "has_screenshots": true,
  "has_prompt": true
}
```

---

### 3. Prompt

Represents a Lovable.dev prompt file for generating a specific section.

**Attributes**:
- `prompt_file_path` (string, required): Relative path from repo root (e.g., "prompts/landing/01-landing-hero-prompt.md")
- `section_reference` (object, required): Reference to parent section (page_name + section_number + section_name)
- `screenshot_references` (array, required): List of screenshot filenames to attach
- `design_guidelines_appended` (boolean, required): Whether the full design guidelines are appended to this prompt
- `content_sections` (object, required): Structured content of the prompt (context, content, layout, design_specs)
- `template_used` (string, optional): Which prompt template was used (e.g., "hero", "solutions", "usecases", "cta")

**Relationships**:
- `belongs_to` section
- `references_many` screenshots (via screenshot_references array)

**Validation Rules**:
- `prompt_file_path` must follow pattern: `prompts/{page_name}/{NN}-{page_name}-{section_name}-prompt.md`
- `section_reference` must point to an existing section
- `screenshot_references` array must contain at least 1 screenshot filename
- All screenshot filenames in `screenshot_references` must exist in the corresponding screenshot directory
- `design_guidelines_appended` must be true (enforced by prompt generation process)
- `content_sections` must include: context, content, layout, design_specs

**State Transitions**: N/A (prompts are static files)

**Example**:
```json
{
  "prompt_file_path": "prompts/landing/01-landing-hero-prompt.md",
  "section_reference": {
    "page_name": "landing",
    "section_number": "01",
    "section_name": "hero"
  },
  "screenshot_references": [
    "01-landing-hero-akira.png",
    "01-landing-hero-datarobot.png",
    "01-landing-hero-brightwave.png"
  ],
  "design_guidelines_appended": true,
  "content_sections": {
    "context": "Hero section for landing page, first impression for visitors",
    "content": "Headline: 'You have the data. Your agents don't.' ...",
    "layout": "Single-column layout, max-width 820px, headline + tagline + CTA buttons",
    "design_specs": "Futura 56-72px, #3B82F6 primary blue, 8px spacing grid"
  },
  "template_used": "hero"
}
```

---

### 4. Screenshot

Represents a PNG image of a competitor's page section used as visual reference.

**Attributes**:
- `file_path` (string, required): Relative path from repo root (e.g., "screenshots/landing/01-landing-hero/01-landing-hero-akira.png")
- `source_company` (string, required): Competitor name (e.g., "akira", "datarobot", "brightwave", "scale", "labellerr", "tonic")
- `descriptor` (string, optional): Additional context (e.g., "main", "cards", "workflow", "language-dropdown")
- `section_reference` (object, required): Reference to parent section (page_name + section_number + section_name)
- `capture_date` (string, optional): ISO date when screenshot was captured
- `notes` (string, optional): What design elements to reference from this screenshot

**Relationships**:
- `belongs_to` section
- `referenced_by_many` prompts

**Validation Rules**:
- `file_path` must follow pattern: `screenshots/{page_name}/{NN}-{page_name}-{section_name}/{NN}-{page_name}-{section_name}-{source}[-{descriptor}].png`
- `source_company` must be kebab-case
- `section_reference` must point to an existing section
- File must exist at `file_path` location

**State Transitions**: N/A (screenshots are static files)

**Example**:
```json
{
  "file_path": "screenshots/landing/01-landing-hero/01-landing-hero-akira.png",
  "source_company": "akira",
  "descriptor": null,
  "section_reference": {
    "page_name": "landing",
    "section_number": "01",
    "section_name": "hero"
  },
  "capture_date": "2026-03-04",
  "notes": "Reference the headline typography and CTA button placement"
}
```

---

## Entity Relationships Diagram

```
Page (1) ──has_many──> (N) Section
                            │
                            ├──has_one──> (1) Prompt
                            │                  │
                            │                  └──references_many──> (N) Screenshot
                            │
                            └──has_many──> (N) Screenshot
```

---

## Derived Entities (Computed, Not Stored)

### 5. Component

Represents a React component file generated from a prompt.

**Attributes** (computed from Section):
- `component_name`: From section.component_name
- `component_path`: From section.component_path
- `page_subdir`: Extracted from component_path (e.g., "landing", "usecase-finance", or null if shared)
- `is_shared`: From section.is_shared
- `generated_from_prompt`: Derived from section.has_prompt

**Relationships**:
- `belongs_to` section (1:1)

**Validation Rules**:
- Component file must exist at `component_path`
- Must be valid TypeScript React component
- Must pass ESLint and TypeScript type checking
- Must be imported in the corresponding page file (src/pages/)

---

## Data Integrity Rules

### Cross-Entity Validation

1. **Naming Consistency**: For any section, the following must all match:
   - Section directory name: `screenshots/{page_name}/{NN}-{page_name}-{section_name}/`
   - Prompt filename: `prompts/{page_name}/{NN}-{page_name}-{section_name}-prompt.md`
   - Screenshot filenames: `{NN}-{page_name}-{section_name}-{source}.png`

2. **Screenshot-Prompt Linkage**: Every screenshot referenced in a prompt's `screenshot_references` array must exist in the corresponding section's screenshot directory.

3. **Section Ordering**: Within a page, section numbers must be sequential starting from 00 (or 01 for use case pages). No gaps allowed.

4. **Shared Component Reuse**: If a section has `is_shared: true`, it must not have page-specific prompts or screenshots in use case pages (they reference the landing page versions).

5. **Design Guidelines Appendix**: Every prompt file must end with the full content of `references/00-core/00-core-design-guidelines.md`. This is enforced during prompt generation.

---

## Example: Complete Entity Graph for Landing Hero Section

```json
{
  "page": {
    "page_name": "landing",
    "page_type": "landing",
    "route": "/",
    "sections": [
      {
        "section_number": "01",
        "section_name": "hero",
        "component_name": "HeroSection",
        "component_path": "src/components/landing/HeroSection.tsx",
        "color_accent": "#3B82F6",
        "is_shared": false,
        "has_screenshots": true,
        "has_prompt": true,
        "prompt": {
          "prompt_file_path": "prompts/landing/01-landing-hero-prompt.md",
          "screenshot_references": [
            "01-landing-hero-akira.png",
            "01-landing-hero-datarobot.png",
            "01-landing-hero-brightwave.png"
          ],
          "design_guidelines_appended": true,
          "template_used": "hero"
        },
        "screenshots": [
          {
            "file_path": "screenshots/landing/01-landing-hero/01-landing-hero-akira.png",
            "source_company": "akira",
            "notes": "Reference headline typography and CTA placement"
          },
          {
            "file_path": "screenshots/landing/01-landing-hero/01-landing-hero-datarobot.png",
            "source_company": "datarobot",
            "notes": "Reference data visualization bar below hero"
          },
          {
            "file_path": "screenshots/landing/01-landing-hero/01-landing-hero-brightwave.png",
            "source_company": "brightwave",
            "notes": "Reference color scheme and spacing"
          }
        ]
      }
    ]
  }
}
```

---

## Usage in Development Pipeline

1. **Asset Preparation (Phase 0)**: Create directories and placeholder files for all sections based on the Page and Section entity definitions.

2. **Prompt Generation (Phase 1)**: For each section, generate a Prompt entity by:
   - Reading the section's screenshot directory
   - Populating `screenshot_references` with all .png files found
   - Appending the design guidelines from `references/00-core/00-core-design-guidelines.md`
   - Writing to the prompt file path

3. **Code Generation (Phase 2)**: For each section, use the Prompt entity to:
   - Paste prompt content into Lovable.dev
   - Attach all screenshots from `screenshot_references`
   - Save generated code to the section's `component_path`

4. **Page Assembly (Phase 3)**: For each page, import all section components in the correct order and render them in the page file.

5. **Validation (Phase 4)**: Verify data integrity rules across all entities before deployment.
