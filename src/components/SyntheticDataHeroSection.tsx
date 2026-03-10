import { ArrowRight, Binary, Blocks, Braces, Calculator, ChevronRight, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const SyntheticDataHeroSection = () => {
  const { t } = useTranslation('solutions');

  const capabilityTabs = t('syntheticData.capabilityTabs', { returnObjects: true }) as string[];

  const trainingTracks = [
    {
      label: t('syntheticData.reasoning'),
      detail: t('syntheticData.reasoningDesc'),
      icon: Sparkles,
    },
    {
      label: t('syntheticData.coding'),
      detail: t('syntheticData.codingDesc'),
      icon: Braces,
    },
    {
      label: t('syntheticData.maths'),
      detail: t('syntheticData.mathsDesc'),
      icon: Calculator,
    },
    {
      label: t('syntheticData.toolCalling'),
      detail: t('syntheticData.toolCallingDesc'),
      icon: Wrench,
    },
  ];

  const orchestrationNodes = [
    {
      label: t('syntheticData.sourceSignals'),
      value: t('syntheticData.sourceSignalsValue'),
      accent: "bg-purple",
    },
    {
      label: t('syntheticData.synthesisEngine'),
      value: t('syntheticData.synthesisEngineValue'),
      accent: "bg-primary",
    },
    {
      label: t('syntheticData.verificationLayer'),
      value: t('syntheticData.verificationLayerValue'),
      accent: "bg-cyan",
    },
    {
      label: t('syntheticData.trainingOutput'),
      value: t('syntheticData.trainingOutputValue'),
      accent: "bg-purple",
    },
  ];

  return (
    <section className="bg-background pt-[88px] md:pt-[96px]">
      <div className="bg-secondary">
        <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[920px] text-center">
            <div className="mb-6 inline-flex items-center gap-3 border border-border bg-background px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-[3px] w-4 bg-purple" aria-hidden="true" />
              {t('syntheticData.breadcrumb')}
            </div>
            <h1 className="font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-foreground md:text-[64px] lg:text-[80px]">
              {t('syntheticData.heroTitle')}
            </h1>
            <p className="mx-auto mt-6 max-w-[860px] text-lg leading-relaxed text-muted-foreground md:text-[20px]">
              {t('syntheticData.heroDescription')}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="rounded-lg px-8">
                {t('buttons.requestDemo', { ns: 'common' })} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                {t('buttons.exploreFeatures', { ns: 'common' })} <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-[1120px]">
            <div className="grid gap-3 md:grid-cols-4">
              {capabilityTabs.map((tab, index) => (
                <div
                  key={tab}
                  className={`border px-5 py-4 text-sm font-medium transition-all duration-300 ${
                    index === 2
                      ? "border-purple bg-background text-foreground shadow-[0_0_0_1px_hsl(var(--purple))]"
                      : "border-border bg-background text-muted-foreground hover:border-purple/60 hover:text-foreground"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>

            <div className="mt-4 grid overflow-hidden border border-border bg-background md:grid-cols-[360px_minmax(0,1fr)]">
              <div className="flex flex-col justify-between border-b border-border p-8 md:border-b-0 md:border-r">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center border border-purple/30 bg-purple/10 text-purple">
                    <Binary className="h-6 w-6" />
                  </div>
                  <h2 className="mt-8 font-brand text-[34px] leading-tight tracking-[-0.02em] text-foreground md:text-[42px]">
                    {t('syntheticData.trainingDataTitle')}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-foreground">
                    {t('syntheticData.trainingDataSubtitle')}
                  </p>
                  <p className="mt-4 max-w-[280px] text-base leading-relaxed text-muted-foreground">
                    {t('syntheticData.trainingDataDescription')}
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:text-purple"
                >
                  {t('buttons.learnMore', { ns: 'common' })}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--secondary))_55%,hsl(var(--purple)/0.08)_100%)] p-6 md:p-8">
                <div className="absolute inset-y-0 left-0 hidden w-px bg-border md:block" aria-hidden="true" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" aria-hidden="true" />

                <div className="relative grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <div className="border border-border bg-background/85 p-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                          {t('syntheticData.trainingPipeline')}
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          {t('syntheticData.trainingPipelineDesc')}
                        </p>
                      </div>
                      <div className="hidden items-center gap-2 sm:flex">
                        <span className="h-2.5 w-2.5 bg-purple" aria-hidden="true" />
                        <span className="h-2.5 w-2.5 bg-primary" aria-hidden="true" />
                        <span className="h-2.5 w-2.5 bg-cyan" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2">
                      {trainingTracks.map(({ label, detail, icon: Icon }) => (
                        <div key={label} className="bg-background p-4 transition-transform duration-300 hover:-translate-y-1">
                          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                            <Icon className="h-4 w-4 text-purple" />
                            {label}
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {orchestrationNodes.map(({ label, value, accent }, index) => (
                      <div key={label} className="relative border border-border bg-background/90 p-4 backdrop-blur-sm">
                        {index < orchestrationNodes.length - 1 && (
                          <div className="absolute left-6 top-full h-4 w-px bg-border" aria-hidden="true" />
                        )}
                        <div className="flex items-start gap-4">
                          <span className={`mt-1 h-3 w-3 shrink-0 ${accent}`} aria-hidden="true" />
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
                            <p className="mt-2 text-sm leading-relaxed text-foreground">{value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-6 grid gap-px border border-border bg-border md:grid-cols-3">
                  <div className="bg-background px-4 py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{t('syntheticData.samples100k')}</p>
                    <p className="mt-2 text-sm text-foreground">{t('syntheticData.samples100kDesc')}</p>
                  </div>
                  <div className="bg-background px-4 py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{t('syntheticData.executionVerified')}</p>
                    <p className="mt-2 text-sm text-foreground">{t('syntheticData.executionVerifiedDesc')}</p>
                  </div>
                  <div className="bg-background px-4 py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{t('syntheticData.rlhfReady')}</p>
                    <p className="mt-2 text-sm text-foreground">{t('syntheticData.rlhfReadyDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticDataHeroSection;
