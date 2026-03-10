import { ArrowRight, ChevronRight, FileText, ScanSearch, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const DocumentProcessingClassificationSection = () => {
  const { t } = useTranslation('solutions');

  const classificationCategories = [
    { group: t('documentProcessing.classification.secFilings'), types: ["10-K", "10-Q", "8-K", "Exhibits"] },
    { group: t('documentProcessing.classification.taxForms'), types: ["1040", "W-2", "W-9"] },
    { group: t('documentProcessing.classification.banking'), types: ["Bank Statement", "Ledger"] },
    { group: t('documentProcessing.classification.commercial'), types: ["Invoice", "Receipt", "Contract"] },
  ];

  const extractionSignals = [
    t('documentProcessing.classification.layoutCues'),
    t('documentProcessing.classification.pageIntent'),
    t('documentProcessing.classification.entityPatterns'),
    t('documentProcessing.classification.evidenceTrace'),
  ];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-16">
          <div className="relative overflow-hidden bg-secondary px-6 py-8 md:px-8 md:py-10 lg:px-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px] opacity-50" aria-hidden="true" />

            <div className="relative grid gap-4 md:grid-cols-[0.40fr_0.60fr] md:items-stretch">
              <div className="flex flex-col border border-border bg-foreground p-5 shadow-sm">
                <div className="flex items-center gap-2 border-b border-background/10 pb-3">
                  <span className="h-2.5 w-2.5 bg-primary" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 bg-primary/70" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 bg-primary/40" aria-hidden="true" />
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-dashed border-background/40 bg-primary text-primary-foreground">
                    <Tags className="h-4 w-4" />
                  </div>
                  <p className="font-brand text-[18px] leading-[0.95] tracking-[-0.02em] text-background md:text-[22px]">
                    {t('documentProcessing.classification.autoClassification')}
                  </p>
                </div>

                <div className="mt-5 space-y-2">
                  {extractionSignals.map((signal, index) => (
                    <div
                      key={signal}
                      className="border border-background/10 bg-background/5 px-3 py-2 text-xs text-background/70"
                      style={{ width: `${100 - index * 8}%` }}
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6">
                  <span className="h-px flex-1 bg-background/20" />
                  <span className="inline-flex h-7 w-7 items-center justify-center bg-primary text-primary-foreground">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                {classificationCategories.map(({ group, types }) => (
                  <div key={group} className="border border-border bg-background px-4 py-3 shadow-sm">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{group}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {types.map((type) => (
                        <span key={type} className="inline-flex items-center gap-1.5 border border-border bg-secondary px-2.5 py-1.5 text-xs font-medium text-foreground">
                          <FileText className="h-3 w-3 text-primary" />
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t('documentProcessing.classification.breadcrumb')}
            </p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
              {t('documentProcessing.classification.heading')}
            </h2>
            <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-muted-foreground">
              {t('documentProcessing.classification.description')}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-border bg-card px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t('documentProcessing.classification.signalModel')}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{t('documentProcessing.classification.signalModelDesc')}</p>
              </div>
              <div className="border border-border bg-card px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t('documentProcessing.classification.opsControl')}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{t('documentProcessing.classification.opsControlDesc')}</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                {t('buttons.learnMore', { ns: 'common' })} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                {t('documentProcessing.classification.viewRoutingModel')}
              </Button>
            </div>
            <div className="mt-8 flex items-start gap-3 border-l-2 border-primary pl-5">
              <ScanSearch className="mt-1 h-5 w-5 text-primary" />
              <p className="max-w-[520px] text-sm leading-relaxed text-foreground">
                {t('documentProcessing.classification.taxonomyNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessingClassificationSection;
