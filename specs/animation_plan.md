                                                                 │
│ Animation & Motion Design Plan — agentii.Solutions                                                                                                  │
│                                                                                                                                                     │
│ Current State                                                                                                                                       │
│                                                                                                                                                     │
│ The site is almost entirely static. The only real animation is the HeroSection data-bar slide-in (IntersectionObserver + inline styles). Everything │
│  else is limited to hover:-translate-y-1 card lifts. No scroll-triggered reveals, no section transitions, no progressive disclosure.                │
│                                                                                                                                                     │
│ Design Philosophy                                                                                                                                   │
│                                                                                                                                                     │
│ Inspired by apple.com's approach: animations should reveal information progressively, make the user feel the product's intelligence, and create a   │
│ sense of forward momentum as they scroll. Every animation must serve comprehension — not decoration.                                                │
│                                                                                                                                                     │
│ Zero new dependencies. Pure CSS animations + one lightweight useScrollReveal hook using IntersectionObserver (already proven in HeroSection).       │
│ Compatible with React 18 + Vite + Vercel.                                                                                                           │
│                                                                                                                                                     │
│ ---                                                                                                                                                 │
│ Implementation Plan                                                                                                                                 │
│                                                                                                                                                     │
│ Phase 1: Animation Infrastructure                                                                                                                   │
│                                                                                                                                                     │
│ 1.1 Create src/hooks/useScrollReveal.ts                                                                                                             │
│ A reusable hook that returns a ref and isVisible boolean. Uses IntersectionObserver with configurable threshold (default 0.15) and triggerOnce:     │
│ true. This replaces copy-pasting observer logic into every component.                                                                               │
│                                                                                                                                                     │
│ 1.2 Add CSS keyframes to src/index.css                                                                                                              │
│ Add these keyframe definitions under @layer utilities:                                                                                              │
│ - @keyframes fadeInUp — translateY(24px) + opacity 0 → 0 + 1 (0.6s cubic-bezier)                                                                    │
│ - @keyframes fadeInLeft — translateX(-32px) + opacity → 0 (0.6s)                                                                                    │
│ - @keyframes fadeInRight — translateX(32px) + opacity → 0 (0.6s)                                                                                    │
│ - @keyframes scaleIn — scale(0.92) + opacity → 1 + 1 (0.5s)                                                                                         │
│ - @keyframes drawLine — scaleX(0) → scaleX(1) (0.8s, transform-origin left)                                                                         │
│ - @keyframes countUp — for number counters (handled in JS)                                                                                          │
│ - @keyframes shimmer — subtle gradient sweep for loading/processing states                                                                          │
│ - @keyframes pulse-glow — soft glow pulse for active elements                                                                                       │
│                                                                                                                                                     │
│ 1.3 Add Tailwind animation utilities to tailwind.config.ts                                                                                          │
│ Register the keyframes and animation classes so they're available as animate-fade-in-up, animate-fade-in-left, etc. Add animation-delay utilities   │
│ for stagger patterns.                                                                                                                               │
│                                                                                                                                                     │
│ ---                                                                                                                                                 │
│ Phase 2: Landing Page — Section-by-Section                                                                                                          │
│                                                                                                                                                     │
│ 2.1 HeroSection (already animated — enhance)                                                                                                        │
│ - Keep existing data-bar animation (it's good)                                                                                                      │
│ - Add: headline text fades in with 0.1s stagger per line                                                                                            │
│ - Add: CTA buttons scale-in after headline completes                                                                                                │
│ - Add: feature strip items fade-in-up with 0.08s stagger when scrolled into view                                                                    │
│                                                                                                                                                     │
│ 2.2 SolutionsSection                                                                                                                                │
│ - Section heading + subheading: fadeInUp on scroll-reveal                                                                                           │
│ - 3 solution cards: staggered fadeInUp (0s, 0.12s, 0.24s delay)                                                                                     │
│ - Card icons: scaleIn with slight delay after card appears                                                                                          │
│ - Arrow links: slide-right on card hover (already partially there, enhance)                                                                         │
│                                                                                                                                                     │
│ 2.3 MetricsBar (dark section)                                                                                                                       │
│ - Heading: fadeInUp on reveal                                                                                                                       │
│ - 3 metric cards: staggered fadeInUp from left to right                                                                                             │
│ - Badge pills: scaleIn with delay after parent card                                                                                                 │
│ - Platform card (full-width): fadeInUp last, slightly slower                                                                                        │
│ - Add: subtle gradient shimmer across the section background on reveal                                                                              │
│                                                                                                                                                     │
│ 2.4 PipelineSection                                                                                                                                 │
│ - This is the most impactful animation opportunity                                                                                                  │
│ - 4 pipeline steps reveal sequentially (not simultaneously):                                                                                        │
│   - Step 1 (Ingest): fadeInUp immediately                                                                                                           │
│   - Connector line: drawLine animation (scaleX 0→1) after step 1                                                                                    │
│   - Step 2 (Annotate): fadeInUp after line draws                                                                                                    │
│   - Repeat pattern for steps 3 and 4                                                                                                                │
│ - Total sequence: ~2.4s, creating a "flow" feeling                                                                                                  │
│ - Step icons: gentle continuous pulse-glow after reveal                                                                                             │
│ - Numbers (01→04): count-up or typewriter reveal                                                                                                    │
│                                                                                                                                                     │
│ 2.5 UseCasesSection                                                                                                                                 │
│ - Heading: fadeInUp                                                                                                                                 │
│ - Category pills: staggered scaleIn (fast, 0.05s gaps)                                                                                              │
│ - Use case cards: staggered fadeInUp in grid order                                                                                                  │
│ - On category filter change: cards fade out (0.15s) then new set fades in (0.3s) — CSS transition on opacity + transform                            │
│                                                                                                                                                     │
│ 2.6 DifferentiatorsSection                                                                                                                          │
│ - Left column (checklist): each item fadeInLeft with 0.1s stagger                                                                                   │
│ - Check icons: scaleIn slightly after text                                                                                                          │
│ - Right column (comparison table): fadeInRight                                                                                                      │
│ - Table rows: staggered reveal top-to-bottom (0.06s per row)                                                                                        │
│ - Checkmark cells: scaleIn after row reveals                                                                                                        │
│                                                                                                                                                     │
│ 2.7 TestimonialsSection                                                                                                                             │
│ - 3 quote cards: staggered fadeInUp                                                                                                                 │
│ - Opening quote mark ": scaleIn with slight bounce                                                                                                  │
│ - Author info: fade in after quote text                                                                                                             │
│                                                                                                                                                     │
│ 2.8 CTASection                                                                                                                                      │
│ - Heading: fadeInUp                                                                                                                                 │
│ - Buttons: scaleIn with stagger                                                                                                                     │
│                                                                                                                                                     │
│ ---                                                                                                                                                 │
│ Phase 3: Document Processing Solution Page                                                                                                          │
│                                                                                                                                                     │
│ 3.1 DocumentProcessingHeroSection                                                                                                                   │
│ - Left column text: fadeInLeft                                                                                                                      │
│ - Bullet points: staggered fadeInUp (0.1s gaps)                                                                                                     │
│ - Right column (financial statement illustration): fadeInRight                                                                                      │
│ - Income statement rows: staggered reveal top-to-bottom (typewriter-like)                                                                           │
│ - Metric cards (bottom-left): staggered fadeInUp                                                                                                    │
│ - Active row highlight: gentle pulse animation                                                                                                      │
│                                                                                                                                                     │
│ 3.2 DocumentProcessingFeaturesSection                                                                                                               │
│ - Feature cards: staggered fadeInUp                                                                                                                 │
│ - Pipeline view diagram: fadeInRight                                                                                                                │
│ - Pipeline rows: sequential drawLine + label fade-in (like PipelineSection)                                                                         │
│                                                                                                                                                     │
│ 3.3 DocumentProcessingIngestionSection                                                                                                              │
│ - Source icons (PDF, PNG, Email, HTML): staggered scaleIn from left                                                                                 │
│ - Arrow/flow connector: drawLine                                                                                                                    │
│ - Destination systems: staggered scaleIn from right                                                                                                 │
│ - Creates a visual "flow" from sources → pipeline → destinations                                                                                    │
│                                                                                                                                                     │
│ 3.4 DocumentProcessingClassificationSection                                                                                                         │
│ - Classification tree/taxonomy: nodes appear with staggered scaleIn                                                                                 │
│ - Category labels: fadeInUp in groups                                                                                                               │
│ - Signal model cards: fadeInLeft                                                                                                                    │
│                                                                                                                                                     │
│ 3.5 DocumentProcessingDataMappingSection                                                                                                            │
│ - Benchmark bars (25%, 65%, 99%): animate width from 0 to final value on scroll                                                                     │
│ - Bar labels: fade in after bar reaches width                                                                                                       │
│ - Capability cards: staggered fadeInUp                                                                                                              │
│                                                                                                                                                     │
│ 3.6 DocumentProcessingHumanReviewSection                                                                                                            │
│ - Review queue illustration: fadeInRight                                                                                                            │
│ - Tab content: crossfade on tab switch                                                                                                              │
│ - Confidence routing diagram: progressive reveal                                                                                                    │
│                                                                                                                                                     │
│ ---                                                                                                                                                 │
│ Phase 4: Video & Audio Solution Page                                                                                                                │
│                                                                                                                                                     │
│ 4.1 VideoAudioHeroSection                                                                                                                           │
│ - Signal track bars: animate width from 0% to final width (staggered, like the landing hero bars)                                                   │
│ - "Active" badge: pulse-glow                                                                                                                        │
│ - Trust indicator cards: staggered fadeInUp                                                                                                         │
│ - Timecoded label: typewriter effect                                                                                                                │
│                                                                                                                                                     │
│ 4.2 VideoAudioCapabilitiesSection                                                                                                                   │
│ - 8 capability cards: staggered fadeInUp in 2-column grid order                                                                                     │
│ - Icons: scaleIn after card                                                                                                                         │
│                                                                                                                                                     │
│ 4.3 VideoAudioSceneUnderstandingSection                                                                                                             │
│ - Scene illustration panel: fadeInRight                                                                                                             │
│ - Timeline bars: animate width (like signal tracks)                                                                                                 │
│                                                                                                                                                     │
│ ---                                                                                                                                                 │
│ Phase 5: Synthetic Data Solution Page                                                                                                               │
│                                                                                                                                                     │
│ 5.1 SyntheticDataHeroSection                                                                                                                        │
│ - Capability tabs: staggered scaleIn                                                                                                                │
│ - Training tracks: staggered fadeInUp                                                                                                               │
│ - Orchestration nodes: sequential reveal with connector lines (drawLine between nodes)                                                              │
│ - Bottom stats: number count-up animation                                                                                                           │
│                                                                                                                                                     │
│ 5.2 SyntheticDataPipelineSection                                                                                                                    │
│ - Pipeline steps: sequential reveal (same pattern as landing PipelineSection)                                                                       │
│                                                                                                                                                     │
│ ---                                                                                                                                                 │
│ Phase 6: Global Polish                                                                                                                              │
│                                                                                                                                                     │
│ 6.1 Smooth section transitions                                                                                                                      │
│ - Add subtle background color transitions between sections using CSS scroll-snap hints (optional, test performance)                                 │
│                                                                                                                                                     │
│ 6.2 Navbar scroll effect                                                                                                                            │
│ - Already has scrolled state — enhance with smoother backdrop-blur transition                                                                       │
│                                                                                                                                                     │
│ 6.3 Page load sequence                                                                                                                              │
│ - First-paint: hero content fades in immediately (no scroll needed)                                                                                 │
│ - Navbar: slides down from top on load                                                                                                              │
│                                                                                                                                                     │
│ ---                                                                                                                                                 │
│ File Changes Summary                                                                                                                                │
│                                                                                                                                                     │
│ ┌────────────────────────────────────────────────────────────┬───────────────────────────────────────────┐                                          │
│ │                            File                            │                  Change                   │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/hooks/useScrollReveal.ts                               │ NEW — reusable IntersectionObserver hook  │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/index.css                                              │ ADD keyframe definitions                  │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ tailwind.config.ts                                         │ ADD animation utilities + delay utilities │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/HeroSection.tsx                             │ ENHANCE — text stagger, button scale-in   │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/SolutionsSection.tsx                        │ ADD scroll-reveal to cards                │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/MetricsBar.tsx                              │ ADD scroll-reveal to cards                │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/PipelineSection.tsx                         │ ADD sequential step reveal with line draw │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/UseCasesSection.tsx                         │ ADD scroll-reveal + filter transition     │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/DifferentiatorsSection.tsx                  │ ADD staggered checklist + table reveal    │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/TestimonialsSection.tsx                     │ ADD staggered card reveal                 │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/CTASection.tsx                              │ ADD fade-in                               │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/DocumentProcessingHeroSection.tsx           │ ADD text + illustration reveal            │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/DocumentProcessingFeaturesSection.tsx       │ ADD card + pipeline reveal                │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/DocumentProcessingIngestionSection.tsx      │ ADD flow animation                        │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/DocumentProcessingClassificationSection.tsx │ ADD taxonomy reveal                       │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/DocumentProcessingDataMappingSection.tsx    │ ADD bar width animation                   │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/DocumentProcessingHumanReviewSection.tsx    │ ADD review queue reveal                   │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/VideoAudioHeroSection.tsx                   │ ADD signal track width animation          │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/VideoAudioCapabilitiesSection.tsx           │ ADD staggered card reveal                 │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/SyntheticDataHeroSection.tsx                │ ADD orchestration node reveal             │                                          │
│ ├────────────────────────────────────────────────────────────┼───────────────────────────────────────────┤                                          │
│ │ src/components/SyntheticDataPipelineSection.tsx            │ ADD sequential step reveal                │                                          │
│ └────────────────────────────────────────────────────────────┴───────────────────────────────────────────┘                                          │
│                                                                                                                                                     │
│ Constraints                                                                                                                                         │
│                                                                                                                                                     │
│ - Zero new npm dependencies                                                                                                                         │
│ - All animations CSS-based (GPU-accelerated transforms + opacity)                                                                                   │
│ - prefers-reduced-motion: reduce respected globally                                                                                                 │
│ - No layout shift (all animated elements have fixed dimensions)                                                                                     │
│ - Vercel-compatible (no server-side requirements)                                                                                                   │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

