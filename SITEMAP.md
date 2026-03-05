# agentii.Solutions Website Sitemap

**Generated**: 2026-03-05
**Status**: Current implementation state

---

## 🗺️ Site Structure

### **Main Pages** (8 pages total)

| Route | Page Component | Status | Sections |
|-------|---------------|--------|----------|
| `/` | Index.tsx | ✅ Complete | 9 sections |
| `/about` | About.tsx | ✅ Complete | 1 section |
| `/solutions/document-processing` | DocumentProcessing.tsx | ✅ Complete | 8 sections |
| `/solutions/video-audio` | VideoAudioSolution.tsx | ✅ Complete | 6 sections |
| `/solutions/synthetic-data` | SyntheticDataSolution.tsx | ✅ Complete | 6 sections |
| `/use-cases/finance` | FinanceUseCase.tsx | ✅ Complete | 6 sections |
| `/use-cases/insurance` | InsuranceUseCase.tsx | ✅ Complete | 6 sections |
| `/use-cases/video-generation` | VideoUseCase.tsx | ⚠️ Incomplete | 1 section only |
| `*` (404) | NotFound.tsx | ✅ Complete | Error page |

---

## 📄 Page Details

### 1. **Landing Page** (`/`)
**Component**: `src/pages/Index.tsx`
**Sections** (9):
1. Navbar (shared)
2. HeroSection
3. SolutionsSection
4. MetricsBar
5. UseCasesSection
6. PipelineSection
7. DifferentiatorsSection
8. TestimonialsSection
9. CTASection
10. Footer (shared)

**Key Links**:
- Solutions cards → `/solutions/document-processing`, `/solutions/video-audio`, `/solutions/synthetic-data`
- Use cases section → Filters by category (Finance, Insurance, Video AI, Synthetic Data)

---

### 2. **About Page** (`/about`)
**Component**: `src/pages/About.tsx`
**Sections** (1):
- AboutHeroSection

**Special Features**:
- Uses `tone="about"` prop for Navbar (changes color scheme)
- Color bar visual element
- Company story and operating model

---

### 3. **Document Processing Solution** (`/solutions/document-processing`)
**Component**: `src/pages/DocumentProcessing.tsx`
**Sections** (8):
1. Navbar (shared)
2. DocumentProcessingHeroSection
3. DocumentProcessingFeaturesSection
4. DocumentProcessingIngestionSection
5. DocumentProcessingClassificationSection
6. DocumentProcessingTableSection
7. DocumentProcessingDataMappingSection
8. DocumentProcessingHumanReviewSection
9. DocumentProcessingCTASection
10. Footer (shared)

**Focus**: Financial document extraction, OCR, table extraction, GAAP/IFRS mapping

---

### 4. **Video & Audio Solution** (`/solutions/video-audio`)
**Component**: `src/pages/VideoAudioSolution.tsx`
**Sections** (6):
1. Navbar (shared)
2. VideoAudioHeroSection
3. VideoAudioCapabilitiesSection (8 annotation dimensions)
4. VideoAudioSceneUnderstandingSection
5. VideoAudioTrackingSegmentationSection
6. VideoAudioAnnotationShowcaseSection
7. VideoAudioCTASection
8. Footer (shared)

**Focus**: 8-dimension multimodal annotation for video generation models (Seedance, Sora, Veo, Kling)

---

### 5. **Synthetic Data Solution** (`/solutions/synthetic-data`)
**Component**: `src/pages/SyntheticDataSolution.tsx`
**Sections** (6):
1. Navbar (shared)
2. SyntheticDataHeroSection
3. SyntheticDataFabricationSection
4. SyntheticDataImpactSection
5. SyntheticDataBenefitsSection
6. SyntheticDataScaleSection
7. SyntheticDataSuiteSection
8. Footer (shared)

**Focus**: Training data for reasoning, coding, math, and tool-calling capabilities

---

### 6. **Finance Use Case** (`/use-cases/finance`)
**Component**: `src/pages/FinanceUseCase.tsx`
**Sections** (6):
1. Navbar (shared)
2. FinanceHeroSection
3. FinanceWorkflowsSection
4. DocumentProcessingFeaturesSection (shared)
5. DocumentProcessingTableSection (shared)
6. FinanceDataMappingSection
7. FinanceCTASection
8. Footer (shared)

**Focus**: Credit underwriting, AP reconciliation, regulatory compliance, loan booking

---

### 7. **Insurance Use Case** (`/use-cases/insurance`)
**Component**: `src/pages/InsuranceUseCase.tsx`
**Sections** (6):
1. Navbar (shared)
2. InsuranceHeroSection
3. InsuranceWorkflowsSection
4. DocumentProcessingFeaturesSection (shared)
5. DocumentProcessingTableSection (shared)
6. InsuranceDataMappingSection
7. InsuranceCTASection
8. Footer (shared)

**Focus**: Claims processing, underwriting, medical records review, policy administration

---

### 8. **Video Generation Use Case** (`/use-cases/video-generation`)
**Component**: `src/pages/VideoUseCase.tsx`
**Status**: ⚠️ **INCOMPLETE** - Only has hero section
**Sections** (1):
1. Navbar (shared)
2. VideoHeroSection
3. Footer (shared)

**Missing**: Overview, features, examples, benefits, CTA sections

---

## 🔗 Navigation Structure

### **Navbar Links**

#### Solutions Dropdown
**DATA SOLUTIONS**:
- Document Processing → `/solutions/document-processing` ✅
- Video & Audio Data → `/solutions/video-audio` ✅
- Synthetic Data → `/solutions/synthetic-data` ✅

**INDUSTRIES**:
- Financial Services → `#use-cases` (anchor link)
- Insurance → `#use-cases` (anchor link)

**CAPABILITIES**:
- Agentic Pipelines → `#pipeline` (anchor link)
- Multi-Format Ingestion → `#pipeline` (anchor link)
- Quality Assurance → `#pipeline` (anchor link)

#### Use Cases Dropdown
**BY INDUSTRY**:
- Finance & Banking → `#use-cases` ⚠️ **SHOULD BE** `/use-cases/finance`
- Insurance → `#use-cases` ⚠️ **SHOULD BE** `/use-cases/insurance`
- Video AI Training → `#use-cases` ⚠️ **SHOULD BE** `/use-cases/video-generation`

**BY APPLICATION**:
- Document Extraction → `#use-cases` (anchor link)
- Synthetic Generation → `#use-cases` (anchor link)
- Agent Training Data → `#use-cases` (anchor link)

#### Top-Level Links
- Platform → `#pipeline` (anchor link)
- Researches → `#differentiators` (anchor link)
- About → `/about` ✅

#### Action Buttons
- Request a Demo → `/request-demo` ⚠️ **PAGE DOES NOT EXIST**

---

### **Footer Links**

#### Solutions Column
- Document Processing → `#` ⚠️ **SHOULD BE** `/solutions/document-processing`
- Video & Audio → `#` ⚠️ **SHOULD BE** `/solutions/video-audio`
- Synthetic Data → `#` ⚠️ **SHOULD BE** `/solutions/synthetic-data`
- Custom Pipelines → `#` ⚠️ **NO PAGE EXISTS**

#### Company Column
- About → `#` ⚠️ **SHOULD BE** `/about`
- Careers → `#` ⚠️ **NO PAGE EXISTS**
- Partners → `#` ⚠️ **NO PAGE EXISTS**
- Press → `#` ⚠️ **NO PAGE EXISTS**

#### Resources Column
- Blog → `#` ⚠️ **NO PAGE EXISTS**
- Documentation → `#` ⚠️ **NO PAGE EXISTS**
- Support → `#` ⚠️ **NO PAGE EXISTS**
- API Reference → `#` ⚠️ **NO PAGE EXISTS**

#### Bottom Bar
- Privacy → `#` ⚠️ **NO PAGE EXISTS**
- Terms → `#` ⚠️ **NO PAGE EXISTS**
- EN / 中文 → Language switcher (not functional yet)

---

## 🚨 Issues Found

### **Critical Issues**

1. **Broken Navigation Links**:
   - Navbar "Use Cases" dropdown links to `#use-cases` instead of actual pages
   - Should link to: `/use-cases/finance`, `/use-cases/insurance`, `/use-cases/video-generation`

2. **Missing Page**:
   - `/request-demo` page does not exist but is linked from navbar buttons

3. **Incomplete Page**:
   - `/use-cases/video-generation` only has hero section (missing 5+ sections)

4. **Footer Links All Broken**:
   - All footer links point to `#` instead of actual routes
   - Many linked pages don't exist (Careers, Partners, Press, Blog, Documentation, Support, API Reference, Privacy, Terms)

### **Link Corrections Needed**

#### Navbar - Use Cases Dropdown
```typescript
// CURRENT (WRONG):
{ label: "Finance & Banking", href: "#use-cases" }
{ label: "Insurance", href: "#use-cases" }
{ label: "Video AI Training", href: "#use-cases" }

// SHOULD BE:
{ label: "Finance & Banking", href: "/use-cases/finance" }
{ label: "Insurance", href: "/use-cases/insurance" }
{ label: "Video AI Training", href: "/use-cases/video-generation" }
```

#### Footer - Solutions Column
```typescript
// CURRENT (WRONG):
["Document Processing", "Video & Audio", "Synthetic Data", "Custom Pipelines"]
// All link to "#"

// SHOULD BE:
[
  { label: "Document Processing", href: "/solutions/document-processing" },
  { label: "Video & Audio", href: "/solutions/video-audio" },
  { label: "Synthetic Data", href: "/solutions/synthetic-data" },
  { label: "Custom Pipelines", href: "#" } // Keep as # (no page)
]
```

#### Footer - Company Column
```typescript
// CURRENT (WRONG):
["About", "Careers", "Partners", "Press"]
// All link to "#"

// SHOULD BE:
[
  { label: "About", href: "/about" },
  { label: "Careers", href: "#" }, // Keep as # (no page yet)
  { label: "Partners", href: "#" }, // Keep as # (no page yet)
  { label: "Press", href: "#" } // Keep as # (no page yet)
]
```

---

## 📊 Component Inventory

### **Shared Components** (2)
- `Navbar.tsx` - Used on all pages
- `Footer.tsx` - Used on all pages

### **Landing Page Components** (8)
- `HeroSection.tsx`
- `SolutionsSection.tsx`
- `MetricsBar.tsx`
- `UseCasesSection.tsx`
- `PipelineSection.tsx`
- `DifferentiatorsSection.tsx`
- `TestimonialsSection.tsx`
- `CTASection.tsx`

### **About Page Components** (1)
- `AboutHeroSection.tsx`

### **Document Processing Components** (8)
- `DocumentProcessingHeroSection.tsx`
- `DocumentProcessingFeaturesSection.tsx`
- `DocumentProcessingIngestionSection.tsx`
- `DocumentProcessingClassificationSection.tsx`
- `DocumentProcessingTableSection.tsx`
- `DocumentProcessingDataMappingSection.tsx`
- `DocumentProcessingHumanReviewSection.tsx`
- `DocumentProcessingCTASection.tsx`

### **Video & Audio Components** (6)
- `VideoAudioHeroSection.tsx`
- `VideoAudioCapabilitiesSection.tsx`
- `VideoAudioSceneUnderstandingSection.tsx`
- `VideoAudioTrackingSegmentationSection.tsx`
- `VideoAudioAnnotationShowcaseSection.tsx`
- `VideoAudioCTASection.tsx`

### **Synthetic Data Components** (6)
- `SyntheticDataHeroSection.tsx`
- `SyntheticDataFabricationSection.tsx`
- `SyntheticDataImpactSection.tsx`
- `SyntheticDataBenefitsSection.tsx`
- `SyntheticDataScaleSection.tsx`
- `SyntheticDataSuiteSection.tsx`

### **Finance Use Case Components** (4)
- `FinanceHeroSection.tsx`
- `FinanceWorkflowsSection.tsx`
- `FinanceDataMappingSection.tsx`
- `FinanceCTASection.tsx`

### **Insurance Use Case Components** (4)
- `InsuranceHeroSection.tsx`
- `InsuranceWorkflowsSection.tsx`
- `InsuranceDataMappingSection.tsx`
- `InsuranceCTASection.tsx`

### **Video Use Case Components** (1)
- `VideoHeroSection.tsx` ⚠️ **INCOMPLETE PAGE**

---

## 🎯 Recommendations

### **Immediate Fixes Required**

1. **Fix Navbar Use Cases Links** (High Priority)
   - Update `src/components/Navbar.tsx` lines 64-66
   - Change from `#use-cases` to actual page routes

2. **Fix Footer Links** (High Priority)
   - Update `src/components/Footer.tsx`
   - Convert from simple string array to object array with hrefs
   - Link Solutions and About to actual pages

3. **Complete Video Use Case Page** (Medium Priority)
   - Add missing sections to `/use-cases/video-generation`
   - Create components for: Overview, Features, Examples, Benefits, CTA

4. **Create Request Demo Page** (Medium Priority)
   - Create `/request-demo` route and page component
   - Or change button links to `#contact` or modal

5. **Add i18n Support** (Low Priority - P3)
   - Language switcher exists but not functional
   - Need to implement i18n context and locale files

---

## 📈 Statistics

- **Total Pages**: 9 (8 main + 1 error page)
- **Complete Pages**: 7
- **Incomplete Pages**: 1 (VideoUseCase)
- **Missing Pages**: 1 (Request Demo)
- **Total Components**: 43 unique components
- **Shared Components**: 2 (Navbar, Footer)
- **Broken Links**: ~20+ (mostly in footer)
- **Working Routes**: 8/9

---

**Last Updated**: 2026-03-05
**Maintained By**: agentii.Solutions Development Team
