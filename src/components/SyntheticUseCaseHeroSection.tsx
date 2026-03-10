import { ArrowRight, Brain, Code2, Pi, Wrench, Route, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const capabilityIcons = [Brain, Code2, Pi, Wrench, Route, Eye];

const SyntheticUseCaseHeroSection = () => {
  const { t } = useTranslation('usecases');

  const capabilityCards = (t('syntheticUseCase.hero.capabilityCards', { returnObjects: true }) as { label: string; value: string }[]).map((card, i) => ({
    ...card,
    icon: capabilityIcons[i],
  }));

  return (
    <section className="bg-background pt-[88px] md:pt-[96px]">
      <div className="bg-navy text-slate-200">
        <div className="container mx-auto px-6 pt-16 pb-0 md:pt-24 lg:px-12 lg:pt-28">
          <div className="max-w-[820px] pb-14 md:pb-20">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="h-[3px] w-4 bg-purple" aria-hidden="true" />
              {t('syntheticUseCase.hero.breadcrumb')}
            </div>
            <h1 className="font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
              {t('syntheticUseCase.hero.title1')}
              <br />
              {t('syntheticUseCase.hero.title2')}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(var(--color-purple-light)/0.32)]">
        <div className="container mx-auto grid items-stretch gap-0 px-0 md:grid-cols-[minmax(0,560px)_1fr] lg:px-12">
          <div className="flex flex-col justify-between px-6 py-12 md:px-10 md:py-14 lg:px-12">
            <div>
              <p className="max-w-[520px] text-lg leading-relaxed text-foreground md:text-[20px]">
                {t('syntheticUseCase.hero.description')}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-lg bg-[hsl(var(--color-purple-dark))] px-8 text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--color-purple))]">
                  {t('buttons.requestDemo', { ns: 'common' })}
                </Button>
                <Button variant="outline" size="lg" className="rounded-lg border-[hsl(var(--color-purple-dark))] px-8 text-[hsl(var(--color-purple-dark))] hover:bg-[hsl(var(--color-purple-dark))] hover:text-[hsl(var(--primary-foreground))]">
                  {t('buttons.learnMore', { ns: 'common' })} <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-l border-border bg-background p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilityCards.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-4 border border-border bg-card px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-[hsl(var(--color-purple)/0.4)] hover:shadow-sm">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[hsl(var(--color-purple)/0.2)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticUseCaseHeroSection;
