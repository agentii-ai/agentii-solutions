import { ArrowRight, Database, ShieldCheck, Workflow } from "lucide-react";
import { useTranslation } from 'react-i18next';

const SyntheticDataScaleSection = () => {
  const { t } = useTranslation('solutions');

  const featureCards = (t('syntheticData.scale.items', { returnObjects: true }) as Array<{
    eyebrow: string;
    title: string;
    description: string;
  }>).map((item, index) => ({
    ...item,
    linkLabel: "Learn more",
    alignment: index === 1 ? "visual-right" : "visual-left",
    icon: [Database, Workflow, ShieldCheck][index],
  })) as const;

  const visualLabels = t('syntheticData.scale.visualLabels', { returnObjects: true }) as {
    testing: string;
    qa: string;
    staging: string;
  };

  return (
    <section className="bg-secondary py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--color-purple-dark))]">
              {t('syntheticData.scale.breadcrumb')}
            </p>
            <h2 className="mt-4 font-brand text-[34px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
              {t('syntheticData.scale.heading')}
            </h2>
          </div>

          <div className="mt-14 space-y-10">
            {featureCards.map(({ eyebrow, title, description, linkLabel, alignment, icon: Icon }) => {
              const visualFirst = alignment === "visual-left";

              return (
                <article
                  key={title}
                  className="grid gap-0 overflow-hidden border border-border bg-background shadow-[0_18px_50px_-34px_hsl(var(--color-navy)/0.18)] lg:grid-cols-2"
                >
                  <div
                    className={visualFirst ? "order-1 border-b border-border lg:order-1 lg:border-b-0 lg:border-r" : "order-2 border-t border-border lg:order-2 lg:border-l lg:border-t-0"}
                  >
                    <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)] p-8 lg:min-h-[340px] lg:p-10">
                      <div
                        className="pointer-events-none absolute inset-0 opacity-60"
                        aria-hidden="true"
                        style={{
                          background:
                            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
                          backgroundSize: "40px 40px",
                        }}
                      />

                      {eyebrow === t('syntheticData.scale.items.0.eyebrow') && (
                        <div className="relative flex w-full max-w-[360px] items-center justify-center">
                          <div className="absolute left-0 top-8 h-36 w-40 border border-[hsl(var(--color-gray-300))] bg-background shadow-[0_12px_30px_-20px_hsl(var(--color-navy)/0.18)]" />
                          <div className="absolute left-4 top-4 h-36 w-40 border border-[hsl(var(--color-gray-300))] bg-background shadow-[0_12px_30px_-20px_hsl(var(--color-navy)/0.18)]" />
                          <div className="relative h-40 w-44 border border-[hsl(var(--color-gray-300))] bg-background shadow-[0_18px_40px_-24px_hsl(var(--color-navy)/0.22)]">
                            <div className="flex h-full items-center justify-center">
                              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[hsl(var(--color-purple)/0.35)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]">
                                <Icon className="h-9 w-9" />
                              </div>
                            </div>
                            <div className="absolute -right-14 top-10 h-24 w-24 rounded-full border border-[hsl(var(--color-purple-dark))] bg-[linear-gradient(180deg,hsl(var(--color-purple))_0%,hsl(var(--color-purple-dark))_100%)] shadow-[0_18px_32px_-16px_hsl(var(--color-purple)/0.65)]" />
                            <div className="absolute -right-8 bottom-6 h-px w-20 border-t border-dashed border-[hsl(var(--color-gray-500))]" />
                          </div>
                        </div>
                      )}

                      {eyebrow === t('syntheticData.scale.items.1.eyebrow') && (
                        <div className="relative flex w-full max-w-[360px] items-center justify-center">
                          <div
                            className="pointer-events-none absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 opacity-90"
                            aria-hidden="true"
                            style={{
                              background:
                                "radial-gradient(circle at center, transparent 0 34%, hsl(var(--color-purple) / 0.8) 34.5% 35%, transparent 35.5%), repeating-radial-gradient(circle at center, hsl(var(--color-cyan) / 0.7) 0 2px, transparent 2px 12px)",
                              maskImage: "linear-gradient(90deg, transparent, black 18%, black 82%, transparent)",
                            }}
                          />
                          <div className="relative h-40 w-28 rounded-[999px] border border-[hsl(var(--color-purple-dark))] bg-[linear-gradient(180deg,hsl(var(--color-purple))_0%,hsl(var(--color-purple-dark))_100%)] shadow-[0_26px_44px_-20px_hsl(var(--color-purple)/0.65)]">
                            <div className="absolute inset-x-0 top-[22%] h-10 rounded-[999px] border-y border-[hsl(var(--primary-foreground)/0.55)]" />
                            <div className="absolute inset-x-0 top-[54%] h-10 rounded-[999px] border-y border-[hsl(var(--primary-foreground)/0.55)]" />
                          </div>
                        </div>
                      )}

                      {eyebrow === t('syntheticData.scale.items.2.eyebrow') && (
                        <div className="relative flex w-full max-w-[380px] items-center justify-center">
                          <div className="grid grid-cols-3 gap-6">
                            <div className="flex flex-col items-center gap-3">
                              <div className="h-16 w-20 border border-[hsl(var(--color-gray-300))] bg-background" />
                              <span className="font-mono-data text-[12px] uppercase tracking-[0.18em] text-muted-foreground">{visualLabels.testing}</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                              <div className="h-16 w-20 border border-[hsl(var(--color-gray-300))] bg-background" />
                              <span className="font-mono-data text-[12px] uppercase tracking-[0.18em] text-muted-foreground">{visualLabels.qa}</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                              <div className="h-16 w-20 border border-[hsl(var(--color-gray-300))] bg-background" />
                              <span className="font-mono-data text-[12px] uppercase tracking-[0.18em] text-muted-foreground">{visualLabels.staging}</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-1/2 flex h-20 w-28 -translate-x-1/2 items-center justify-center border border-[hsl(var(--color-teal-dark))] bg-[linear-gradient(180deg,hsl(var(--color-cyan-light))_0%,hsl(var(--color-cyan))_100%)] text-[hsl(var(--color-navy))] shadow-[0_18px_32px_-18px_hsl(var(--color-cyan)/0.5)]">
                            <Icon className="h-8 w-8" />
                          </div>
                          <div className="pointer-events-none absolute bottom-20 left-1/2 h-10 w-px -translate-x-1/2 border-l border-dashed border-[hsl(var(--color-gray-500))]" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={visualFirst ? "order-2" : "order-1"}>
                    <div className="flex h-full flex-col justify-center p-8 lg:p-10">
                      <p className="font-mono-data text-[11px] uppercase tracking-[0.24em] text-[hsl(var(--color-purple-dark))]">
                        {eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[520px] font-brand text-[32px] leading-[1.08] tracking-[-0.03em] text-foreground md:text-[42px]">
                        {title}
                      </h3>
                      <p className="mt-5 max-w-[520px] text-[17px] leading-8 text-foreground/80">
                        {description}
                      </p>
                      <a
                        href="#"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-[hsl(var(--color-purple-dark))]"
                      >
                        {t('buttons.learnMore', { ns: 'common' })}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticDataScaleSection;
