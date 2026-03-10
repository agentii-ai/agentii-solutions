import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const SyntheticDataImpactSection = () => {
  const { t } = useTranslation('solutions');

  const metrics = t('syntheticData.impact.stats', { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  const capabilities = t('syntheticData.impact.capabilities', { returnObjects: true }) as string[];

  return (
    <section className="bg-[hsl(var(--color-cyan-light)/0.32)] py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[920px] text-center">
            <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--color-purple-dark))]">
              {t('syntheticData.impact.breadcrumb')}
            </p>
            <h2 className="mt-4 font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[52px] lg:text-[64px]">
              {t('syntheticData.impact.heading')}
            </h2>
            <p className="mx-auto mt-6 max-w-[860px] text-lg leading-8 text-foreground/80 md:text-[20px]">
              {t('syntheticData.impact.description')}
            </p>
            <div className="mt-10 flex justify-center">
              <Button size="lg" className="rounded-lg bg-[hsl(var(--color-purple-dark))] px-8 text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--color-purple))]">
                {t('buttons.bookDemo', { ns: 'common' })}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border border-border bg-background px-6 py-7 shadow-[0_18px_50px_-34px_hsl(var(--color-purple)/0.28)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_-34px_hsl(var(--color-purple)/0.34)]"
              >
                <div className="font-brand text-[44px] leading-none tracking-[-0.04em] text-foreground md:text-[52px]">
                  {metric.value.slice(0, -1)}
                  <span className="text-[hsl(var(--color-cyan))]">{metric.value.slice(-1)}</span>
                </div>
                <p className="mt-4 text-lg leading-7 text-foreground/80">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-y border-[hsl(var(--color-gray-300)/0.9)] py-7">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-center md:grid-cols-4 lg:grid-cols-8">
              {capabilities.map((cap) => (
                <div key={cap} className="font-brand text-[24px] tracking-[-0.03em] text-[hsl(var(--color-charcoal))] opacity-90">
                  {cap}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <p className="font-brand text-[28px] leading-tight tracking-[-0.02em] text-foreground md:text-[40px]">
              {t('syntheticData.impact.caseStudy')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticDataImpactSection;
