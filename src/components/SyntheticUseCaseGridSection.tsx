import { Brain, Code2, Pi, Wrench, Route, Eye, CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

const useCaseStyles = [
  {
    icon: Brain,
    accent: "border-[hsl(var(--color-purple)/0.3)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]",
    accentBorder: "border-[hsl(var(--color-purple)/0.4)]",
  },
  {
    icon: Code2,
    accent: "border-[hsl(var(--color-cyan)/0.3)] bg-[hsl(var(--color-cyan-light))] text-[hsl(var(--color-teal-dark))]",
    accentBorder: "border-[hsl(var(--color-cyan)/0.4)]",
  },
  {
    icon: Pi,
    accent: "border-[hsl(var(--color-purple)/0.3)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]",
    accentBorder: "border-[hsl(var(--color-purple)/0.4)]",
  },
  {
    icon: Wrench,
    accent: "border-[hsl(var(--color-cyan)/0.3)] bg-[hsl(var(--color-cyan-light))] text-[hsl(var(--color-teal-dark))]",
    accentBorder: "border-[hsl(var(--color-cyan)/0.4)]",
  },
  {
    icon: Route,
    accent: "border-[hsl(var(--color-purple)/0.3)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]",
    accentBorder: "border-[hsl(var(--color-purple)/0.4)]",
  },
  {
    icon: Eye,
    accent: "border-[hsl(var(--color-cyan)/0.3)] bg-[hsl(var(--color-cyan-light))] text-[hsl(var(--color-teal-dark))]",
    accentBorder: "border-[hsl(var(--color-cyan)/0.4)]",
  },
];

const SyntheticUseCaseGridSection = () => {
  const { t } = useTranslation('usecases');

  const items = t('syntheticUseCase.grid.items', { returnObjects: true }) as {
    title: string; subtitle: string; description: string; methods: string;
    benchmarks: string; output: string; metric: string; metricLabel: string;
  }[];

  const useCases = items.map((item, i) => ({
    ...item,
    ...useCaseStyles[i],
  }));

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--color-purple-dark))]">
            {t('syntheticUseCase.grid.breadcrumb')}
          </p>
          <h2 className="mt-4 font-brand text-[34px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
            {t('syntheticUseCase.grid.heading')}
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-base leading-8 text-muted-foreground md:text-lg">
            {t('syntheticUseCase.grid.description')}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[1180px] space-y-6">
          {useCases.map(({ title, subtitle, description, methods, benchmarks, output, metric, metricLabel, icon: Icon, accent, accentBorder }, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={title}
                className="grid overflow-hidden border border-border bg-background shadow-sm lg:grid-cols-[1fr_auto]"
              >
                <div className={`flex flex-col justify-center p-8 lg:p-10 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center border ${accent}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-brand text-[24px] leading-tight tracking-[-0.02em] text-foreground md:text-[32px]">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-[560px] text-base leading-8 text-muted-foreground">
                    {description}
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--color-purple))]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{t('syntheticUseCase.grid.methodsLabel')}</span>
                        {methods}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--color-purple))]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{t('syntheticUseCase.grid.benchmarksLabel')}</span>
                        {benchmarks}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--color-purple))]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{t('syntheticUseCase.grid.outputLabel')}</span>
                        {output}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`flex min-w-[280px] items-center justify-center border-t border-border bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)] p-8 lg:min-w-[320px] lg:border-t-0 ${!isEven ? "lg:order-1 lg:border-r" : "lg:border-l"}`}>
                  <div className="text-center">
                    <div className={`mx-auto flex h-28 w-28 items-center justify-center border ${accentBorder} bg-background shadow-[0_16px_40px_-20px_hsl(var(--color-purple)/0.3)]`}>
                      <span className="font-brand text-[36px] leading-none tracking-[-0.04em] text-foreground md:text-[44px]">
                        {metric}
                      </span>
                    </div>
                    <p className="mx-auto mt-5 max-w-[200px] text-sm leading-relaxed text-muted-foreground">
                      {metricLabel}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SyntheticUseCaseGridSection;
