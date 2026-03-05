# Bilingual Website & Vercel Deployment Guide

**Project**: agentii.Solutions
**Current Deployment**: https://agentii-solutions.vercel.app
**Target Domain**: www.agentii.net
**Languages**: English (default) + Chinese (中文)
**Tech Stack**: React 18.3.1 + Vite 5.4.19 + TypeScript + React Router 6.30.1

---

## Part 1: Vercel Free Plan & Custom Domain Setup

### Vercel Free (Hobby) Plan Limits

✅ **Included in Free Plan:**
- Unlimited deployments
- Custom domains (unlimited)
- Automatic HTTPS/SSL
- 100 GB bandwidth per month
- 6,000 build minutes per month
- Serverless Functions (100 GB-hours)
- Edge Functions (500,000 invocations)
- GitHub integration with auto-deploy

❌ **Not Included:**
- Team collaboration (requires Pro plan)
- Password protection
- Advanced analytics

**Verdict**: Free plan is perfect for agentii.net — custom domain, HTTPS, and auto-deploy from GitHub all included.

---

## Part 2: GoDaddy DNS Configuration for www.agentii.net

### Step 1: Add Domain in Vercel Dashboard

1. Go to https://vercel.com/franks-projects-2783f736/agentii-solutions
2. Click **Settings** → **Domains**
3. Add domain: `www.agentii.net`
4. Vercel will show DNS records to configure

### Step 2: Configure GoDaddy DNS Records

**Option A: www subdomain (Recommended)**

Login to GoDaddy → DNS Management for agentii.net → Add these records:

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| CNAME | www  | cname.vercel-dns.com           | 600  |
| A     | @    | 76.76.21.21                    | 600  |

**Option B: Apex domain (agentii.net) + www redirect**

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| A     | @    | 76.76.21.21                    | 600  |
| CNAME | www  | cname.vercel-dns.com           | 600  |

**Vercel DNS IPs (if A record needed):**
- Primary: `76.76.21.21`
- Secondary: `76.76.19.19` (optional)

### Step 3: Verify Domain in Vercel

1. After adding DNS records in GoDaddy, return to Vercel dashboard
2. Click **Verify** on the domain
3. DNS propagation takes 5-60 minutes
4. Once verified, Vercel auto-provisions SSL certificate (Let's Encrypt)
5. HTTPS will be live within 10 minutes

### Step 4: Set Primary Domain

In Vercel → Domains → Set `www.agentii.net` as **Primary Domain**
- This redirects `agentii-solutions.vercel.app` → `www.agentii.net`
- Also redirects `agentii.net` → `www.agentii.net` (if both configured)




  ┌──────┬──────┬─────────────┬──────────────┬─────┐
  │ Type │ Name │  Old Value  │  New Value   │ TTL │
  ├──────┼──────┼─────────────┼──────────────┼─────┤
  │ A    │ @    │ 76.76.21.21 │ 216.198.79.1 │ 600 │
  └──────┴──────┴─────────────┴──────────────┴─────┘

  2. Update the CNAME record (edit existing):

  ┌───────┬──────┬──────────────────────┬──────────────────────────────────────┬─────┐
  │ Type  │ Name │      Old Value       │              New Value               │ TTL │
  ├───────┼──────┼──────────────────────┼──────────────────────────────────────┼─────┤
  │ CNAME │ www  │ cname.vercel-dns.com │ b82e8c4cbba36872.vercel-dns-017.com. │ 600 │
  └───────┴──────┴──────────────────────┴──────────────────────────────────────┴─────┘


---

## Part 3: Bilingual Website Implementation

### Architecture Decision: 3 Options

#### **Option 1: react-i18next (Recommended)**
✅ Industry standard, 11M+ weekly downloads
✅ Hooks-based API (`useTranslation`)
✅ Lazy loading of translation files
✅ Namespace support for large apps
✅ SEO-friendly with language detection
✅ Works seamlessly with React Router

#### **Option 2: react-intl (FormatJS)**
⚠️ More complex API
⚠️ Heavier bundle size
✅ Better for complex pluralization/formatting

#### **Option 3: Custom Context + JSON**
⚠️ Reinventing the wheel
⚠️ No lazy loading, no SEO optimization
❌ Not recommended for production

**Decision: Use react-i18next**

---

use option A for bilingual implementation

## Part 4: react-i18next Implementation Plan

### Task 1: Install Dependencies

```bash
npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend
```

**Packages:**
- `i18next` — Core i18n framework
- `react-i18next` — React bindings with hooks
- `i18next-browser-languagedetector` — Auto-detect user language from browser
- `i18next-http-backend` — Lazy load translation files

### Task 2: Create Translation Files Structure

```
src/
├── i18n/
│   ├── config.ts                 # i18next configuration
│   └── locales/
│       ├── en/
│       │   ├── common.json       # Navbar, Footer, Buttons
│       │   ├── home.json         # Homepage content
│       │   ├── solutions.json    # Solutions pages
│       │   ├── usecases.json     # Use cases pages
│       │   └── about.json        # About page
│       └── zh/
│           ├── common.json
│           ├── home.json
│           ├── solutions.json
│           ├── usecases.json
│           └── about.json
```

### Task 3: Configure i18next

**File: `src/i18n/config.ts`**

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Lazy load translation files
  .use(LanguageDetector) // Auto-detect user language
  .use(initReactI18next) // React bindings
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    defaultNS: 'common',
    ns: ['common', 'home', 'solutions', 'usecases', 'about'],

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: true, // Show loading state while translations load
    },
  });

export default i18n;
```

### Task 4: Initialize i18n in App

**File: `src/main.tsx`**

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config"; // Import i18n config

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Task 5: Create Language Switcher Component

**File: `src/components/LanguageSwitcher.tsx`**

```typescript
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span>{i18n.language === 'en' ? '中文' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
```

### Task 6: Add Language Switcher to Navbar

**File: `src/components/Navbar.tsx`**

```typescript
import LanguageSwitcher from './LanguageSwitcher';

// Inside Navbar component, add before or after navigation links:
<LanguageSwitcher />
```

### Task 7: Create Translation Files

**File: `public/locales/en/common.json`**

```json
{
  "nav": {
    "solutions": "Solutions",
    "useCases": "Use Cases",
    "about": "About",
    "requestDemo": "Request Demo"
  },
  "footer": {
    "company": "Company",
    "solutions": "Solutions",
    "resources": "Resources",
    "copyright": "© 2026 agentii.Solutions. All rights reserved."
  },
  "buttons": {
    "learnMore": "Learn More",
    "bookDemo": "Book a Demo",
    "getStarted": "Get Started",
    "exploreFeatures": "Explore Features"
  }
}
```

**File: `public/locales/zh/common.json`**

```json
{
  "nav": {
    "solutions": "解决方案",
    "useCases": "应用场景",
    "about": "关于我们",
    "requestDemo": "申请演示"
  },
  "footer": {
    "company": "公司",
    "solutions": "解决方案",
    "resources": "资源",
    "copyright": "© 2026 agentii.Solutions. 版权所有。"
  },
  "buttons": {
    "learnMore": "了解更多",
    "bookDemo": "预约演示",
    "getStarted": "开始使用",
    "exploreFeatures": "探索功能"
  }
}
```

**File: `public/locales/en/home.json`**

```json
{
  "hero": {
    "tagline": "Data by Agents, for Agents",
    "headline": "Agentic-Native Data Solutions",
    "description": "Transform documents, video, and synthetic data into structured, machine-readable formats that agents can reason over, retrieve from, and act upon.",
    "cta": "Explore Solutions"
  },
  "solutions": {
    "document": {
      "title": "Document Processing",
      "description": "Extract structured data from financial documents, contracts, and reports with field-level confidence scores."
    },
    "video": {
      "title": "Video & Audio Annotation",
      "description": "8-dimension multimodal annotation for training video generation models like Seedance, Sora, and Veo."
    },
    "synthetic": {
      "title": "Synthetic Data",
      "description": "Generate training datasets for reasoning, code, math, and tool-calling with execution verification."
    }
  }
}
```

**File: `public/locales/zh/home.json`**

```json
{
  "hero": {
    "tagline": "由智能体创建，为智能体服务的数据",
    "headline": "智能体原生数据解决方案",
    "description": "将文档、视频和合成数据转换为结构化、机器可读的格式，使智能体能够推理、检索和执行操作。",
    "cta": "探索解决方案"
  },
  "solutions": {
    "document": {
      "title": "文档处理",
      "description": "从财务文档、合同和报告中提取结构化数据，提供字段级置信度分数。"
    },
    "video": {
      "title": "视频与音频标注",
      "description": "8维多模态标注，用于训练Seedance、Sora和Veo等视频生成模型。"
    },
    "synthetic": {
      "title": "合成数据",
      "description": "生成推理、代码、数学和工具调用的训练数据集，并进行执行验证。"
    }
  }
}
```

### Task 8: Use Translations in Components

**Example: Update HeroSection.tsx**

```typescript
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useTranslation('home'); // Load 'home' namespace

  return (
    <section>
      <p className="text-sm text-muted-foreground">
        {t('hero.tagline')}
      </p>
      <h1 className="font-brand text-6xl">
        {t('hero.headline')}
      </h1>
      <p className="text-lg">
        {t('hero.description')}
      </p>
      <Button>
        {t('hero.cta')}
      </Button>
    </section>
  );
};
```

**Example: Update Navbar.tsx**

```typescript
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav>
      <Link to="/solutions">{t('nav.solutions')}</Link>
      <Link to="/use-cases">{t('nav.useCases')}</Link>
      <Link to="/about">{t('nav.about')}</Link>
      <Link to="/request-demo">{t('nav.requestDemo')}</Link>
    </nav>
  );
};
```

### Task 9: Handle Loading State

**File: `src/App.tsx`**

```typescript
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
    <BrowserRouter>
      <Routes>
        {/* Your routes */}
      </Routes>
    </BrowserRouter>
  </Suspense>
);
```

### Task 10: SEO Optimization for Bilingual Content

**Update document title and meta tags per language:**

```typescript
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useSEO = (titleKey: string, descriptionKey: string) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t(titleKey);
    document.documentElement.lang = i18n.language;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t(descriptionKey));
    }
  }, [t, i18n.language, titleKey, descriptionKey]);
};

// Usage in page components:
const HomePage = () => {
  useSEO('home.meta.title', 'home.meta.description');
  // ...
};
```

---

## Part 5: Translation Workflow

### Option A: Manual Translation (Current)

1. Write English content first in JSON files
2. Send JSON files to professional translator
3. Receive Chinese translations
4. Copy into `zh/` folder
5. Test both languages

### Option B: AI-Assisted Translation (Faster)

1. Write English content in JSON
2. Use Claude/GPT-4 to translate to Chinese
3. Have native speaker review for accuracy
4. Iterate on technical terminology

**Recommended**: Option B for speed, with native speaker review for quality.

---

## Part 6: Deployment Checklist

### Pre-Deployment

- [ ] Install i18next dependencies
- [ ] Create translation file structure
- [ ] Configure i18next in `src/i18n/config.ts`
- [ ] Import i18n config in `main.tsx`
- [ ] Create LanguageSwitcher component
- [ ] Add LanguageSwitcher to Navbar
- [ ] Create English translation files (en/*.json)
- [ ] Create Chinese translation files (zh/*.json)
- [ ] Update all components to use `useTranslation` hook
- [ ] Test language switching locally
- [ ] Test lazy loading of translation files
- [ ] Verify localStorage persistence of language choice

### Vercel Deployment

- [ ] Push changes to GitHub main branch
- [ ] Vercel auto-deploys from GitHub (already configured)
- [ ] Verify deployment at agentii-solutions.vercel.app
- [ ] Test both languages on Vercel deployment

### Custom Domain Setup

- [ ] Login to Vercel dashboard
- [ ] Go to Project Settings → Domains
- [ ] Add domain: `www.agentii.net`
- [ ] Copy DNS records shown by Vercel
- [ ] Login to GoDaddy DNS Management
- [ ] Add CNAME record: `www` → `cname.vercel-dns.com`
- [ ] Add A record: `@` → `76.76.21.21`
- [ ] Wait 5-60 minutes for DNS propagation
- [ ] Verify domain in Vercel dashboard
- [ ] Set `www.agentii.net` as Primary Domain
- [ ] Wait 10 minutes for SSL certificate provisioning
- [ ] Test HTTPS at https://www.agentii.net
- [ ] Test language switching on production domain

---

## Part 7: File Structure After Implementation

```
agentii-solutions/
├── public/
│   └── locales/
│       ├── en/
│       │   ├── common.json
│       │   ├── home.json
│       │   ├── solutions.json
│       │   ├── usecases.json
│       │   └── about.json
│       └── zh/
│           ├── common.json
│           ├── home.json
│           ├── solutions.json
│           ├── usecases.json
│           └── about.json
├── src/
│   ├── i18n/
│   │   └── config.ts
│   ├── components/
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Navbar.tsx (updated)
│   │   └── ... (all components updated with useTranslation)
│   ├── hooks/
│   │   └── useSEO.ts (optional)
│   ├── main.tsx (updated)
│   └── App.tsx (wrapped in Suspense)
├── package.json (updated dependencies)
└── vercel.json (optional config)
```

---

## Part 8: Estimated Timeline

| Task | Time | Owner |
|------|------|-------|
| Install dependencies | 5 min | Dev |
| Create file structure | 10 min | Dev |
| Configure i18next | 15 min | Dev |
| Create LanguageSwitcher | 20 min | Dev |
| Create English translations | 2-4 hours | Content team |
| Create Chinese translations | 2-4 hours | Translator |
| Update all components | 4-6 hours | Dev |
| Test locally | 1 hour | QA |
| Deploy to Vercel | Auto | CI/CD |
| Configure GoDaddy DNS | 15 min | DevOps |
| DNS propagation wait | 5-60 min | — |
| SSL provisioning wait | 10 min | Vercel |
| Production testing | 1 hour | QA |

**Total**: 1-2 days (with translations ready)

---

## Part 9: Cost Breakdown

| Item | Cost |
|------|------|
| Vercel Hobby Plan | **$0/month** |
| Custom Domain (agentii.net) | Already owned |
| SSL Certificate | **$0** (Let's Encrypt via Vercel) |
| GitHub hosting | **$0** (public repo) |
| i18next libraries | **$0** (open source) |
| Professional translation | $0.08-0.15/word (optional) |

**Total Monthly Cost**: **$0**

---

## Part 10: Troubleshooting

### DNS Not Propagating

- Check DNS with: `nslookup www.agentii.net`
- Check DNS with: `dig www.agentii.net`
- Use https://dnschecker.org to verify global propagation
- GoDaddy DNS changes can take up to 48 hours (usually 5-60 min)

### SSL Certificate Not Provisioning

- Ensure DNS is fully propagated first
- Vercel requires valid DNS before issuing SSL
- Check Vercel dashboard for error messages
- Try removing and re-adding the domain

### Translations Not Loading

- Check browser console for 404 errors on `/locales/` files
- Verify JSON files are in `public/locales/` not `src/locales/`
- Check JSON syntax with `npm run build` (Vite validates)
- Clear browser cache and localStorage

### Language Not Persisting

- Check localStorage in browser DevTools
- Verify `i18nextLng` key exists in localStorage
- Check i18next config has `caches: ['localStorage']`

---

## Part 11: Future Enhancements

### Phase 2 (Optional)

- [ ] Add language-specific routes: `/en/about`, `/zh/about`
- [ ] Add hreflang tags for SEO: `<link rel="alternate" hreflang="zh" href="..." />`
- [ ] Add language detection from URL path
- [ ] Add RTL support (if adding Arabic/Hebrew later)
- [ ] Add translation management UI (i18nexus, Locize)
- [ ] Add automated translation CI/CD pipeline

---

## Part 12: Key Resources

**Vercel Documentation:**
- Custom Domains: https://vercel.com/docs/projects/domains
- DNS Configuration: https://vercel.com/docs/projects/domains/add-a-domain
- Free Plan Limits: https://vercel.com/docs/pricing

**i18next Documentation:**
- React Integration: https://react.i18next.com
- Configuration: https://www.i18next.com/overview/configuration-options
- Language Detection: https://github.com/i18next/i18next-browser-languageDetector

**GoDaddy DNS:**
- DNS Management: https://dcc.godaddy.com/manage/dns
- CNAME Records: https://www.godaddy.com/help/add-a-cname-record-19236

---

## Summary

✅ **Vercel Free Plan**: Supports custom domains, HTTPS, unlimited deployments
✅ **GoDaddy DNS**: Add CNAME (`www` → `cname.vercel-dns.com`) + A record (`@` → `76.76.21.21`)
✅ **Bilingual Solution**: react-i18next with lazy loading, localStorage persistence, SEO optimization
✅ **Zero Cost**: Everything runs on free tier
✅ **Timeline**: 1-2 days with translations ready
✅ **Auto-Deploy**: GitHub push → Vercel auto-deploys → Live at www.agentii.net

**Next Steps:**
1. Install i18next dependencies
2. Create translation file structure
3. Translate content (English → Chinese)
4. Update components with `useTranslation` hook
5. Test locally
6. Push to GitHub (auto-deploys to Vercel)
7. Configure GoDaddy DNS
8. Verify www.agentii.net is live with bilingual support
