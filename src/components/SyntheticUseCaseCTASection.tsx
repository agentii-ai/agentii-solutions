import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const SyntheticUseCaseCTASection = () => {
  const { t } = useTranslation('usecases');

  const footerCards = t('syntheticUseCase.cta.footerCards', { returnObjects: true }) as {
    label: string; value: string;
  }[];

  return (
    <section className="bg-[hsl(var(--color-navy))] py-20 text-[hsl(var(--primary-foreground))] md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_auto] lg:gap-16">
            <div className="relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-y-[-140%] left-[-8%] w-[78%] bg-[repeating-radial-gradient(circle_at_left,hsl(var(--color-purple))_0_2px,transparent_2px_14px)] opacity-70"
                aria-hidden="true"
                style={{ transform: "rotate(-10deg)" }}
              />
              <div className="relative">
                <p className="font-mono-data text-[11px] uppercase tracking-[0.28em] text-[hsl(var(--color-purple))]">
                  {t('syntheticUseCase.cta.breadcrumb')}
                </p>
                <h2 className="mt-4 max-w-[620px] font-brand text-[34px] leading-[1.06] tracking-[-0.03em] text-[hsl(var(--primary-foreground))] md:text-[48px]">
                  {t('syntheticUseCase.cta.heading')}
                </h2>
                <p className="mt-6 max-w-[520px] text-base leading-8 text-[hsl(var(--color-slate-300))]">
                  {t('syntheticUseCase.cta.description')}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="rounded-lg bg-[hsl(var(--color-purple-dark))] px-8 text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--color-purple))]">
                {t('buttons.bookDemo', { ns: 'common' })}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border-[hsl(var(--color-slate-500))] bg-transparent px-8 text-[hsl(var(--color-slate-200))] hover:bg-[hsl(var(--color-slate-200))] hover:text-[hsl(var(--color-navy))]"
              >
                {t('buttons.learnMore', { ns: 'common' })}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-14 grid gap-px border border-[hsl(var(--color-slate-700))] bg-[hsl(var(--color-slate-700))] md:grid-cols-3">
            {footerCards.map((card) => (
              <div key={card.label} className="bg-[hsl(var(--color-navy))] px-6 py-5">
                <p className="font-mono-data text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--color-slate-400))]">{card.label}</p>
                <p className="mt-2 text-sm text-[hsl(var(--color-slate-200))]">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticUseCaseCTASection;
