import { ArrowRight, Bot, DatabaseZap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const DocumentProcessingFeaturesSection = () => {
  const { t } = useTranslation('solutions');

  const featureCards = [
    {
      title: t('documentProcessing.features.fieldTableExtraction'),
      description: t('documentProcessing.features.fieldTableExtractionDesc'),
      icon: DatabaseZap,
    },
    {
      title: t('documentProcessing.features.confidenceScored'),
      description: t('documentProcessing.features.confidenceScoredDesc'),
      icon: ShieldCheck,
    },
    {
      title: t('documentProcessing.features.agentHandoff'),
      description: t('documentProcessing.features.agentHandoffDesc'),
      icon: Bot,
    },
  ];

  const pipelineRows = [
    [t('documentProcessing.features.source'), t('documentProcessing.features.sourceValue')],
    [t('documentProcessing.features.parsing'), t('documentProcessing.features.parsingValue')],
    [t('documentProcessing.features.structuring'), t('documentProcessing.features.structuringValue')],
    [t('documentProcessing.features.downstream'), t('documentProcessing.features.downstreamValue')],
  ];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">{t('documentProcessing.features.breadcrumb')}</p>
            <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
              {t('documentProcessing.features.heading')}
            </h2>
            <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-muted-foreground">
              {t('documentProcessing.features.description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                {t('buttons.bookDemo', { ns: 'common' })}
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                {t('documentProcessing.features.seePipeline')} <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-brand text-[24px] leading-tight text-foreground">{title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border border-border bg-secondary p-6 md:p-8 lg:mt-20 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{t('documentProcessing.features.pipelineView')}</p>
              <h3 className="mt-4 font-brand text-[30px] leading-[1.04] tracking-[-0.02em] text-foreground md:text-[40px]">
                {t('documentProcessing.features.pipelineHeading')}
              </h3>
              <p className="mt-4 max-w-[440px] text-base leading-relaxed text-muted-foreground">
                {t('documentProcessing.features.pipelineDescription')}
              </p>
            </div>

            <div className="border border-border bg-background">
              {pipelineRows.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid gap-4 border-border px-5 py-4 md:grid-cols-[140px_1fr] ${index !== pipelineRows.length - 1 ? "border-b" : ""}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
                  <p className="text-sm leading-relaxed text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessingFeaturesSection;
