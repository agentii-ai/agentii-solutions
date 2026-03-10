import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const AgenticSearchHeroSection = () => {
  const { t } = useTranslation('research');

  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t('hero.breadcrumb')}
            </p>
            <h1 className="mt-5 font-brand text-[48px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[64px] lg:text-[80px]">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-lg px-8">
                {t('hero.readPaper')} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                {t('hero.seeLiveDemo')}
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-brand text-[48px] leading-tight text-primary">99%</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{t('hero.accuracy')}</p>
              <p className="mt-2 text-xs text-muted-foreground">{t('hero.accuracyNote')}</p>
            </div>
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-brand text-[48px] leading-tight text-primary">3-5x</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{t('hero.fasterQuery')}</p>
              <p className="mt-2 text-xs text-muted-foreground">{t('hero.fasterQueryNote')}</p>
            </div>
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-brand text-[48px] leading-tight text-primary">100%</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{t('hero.evidenceTraceability')}</p>
              <p className="mt-2 text-xs text-muted-foreground">{t('hero.evidenceTraceabilityNote')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchHeroSection;
