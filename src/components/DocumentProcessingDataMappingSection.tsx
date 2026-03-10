import { ArrowRight, Database, Network, Sigma, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DocumentProcessingDataMappingSection = () => {
  const { t } = useTranslation('solutions');
  const { ref, isVisible } = useScrollReveal();

  const mappingRows = [
    { label: "KG-RAG", value: t('documentProcessing.dataMapping.kgRagDesc'), pct: 65 },
    { label: "NL2SQL", value: t('documentProcessing.dataMapping.nl2sqlDesc'), pct: 70 },
    { label: "Agentic Search", value: t('documentProcessing.dataMapping.agenticSearchDesc'), pct: 99 },
  ];

  const capabilities = [
    {
      title: t('documentProcessing.dataMapping.reasoning'),
      description: t('documentProcessing.dataMapping.reasoningDesc'),
      icon: Network,
    },
    {
      title: t('documentProcessing.dataMapping.retrieval'),
      description: t('documentProcessing.dataMapping.retrievalDesc'),
      icon: Database,
    },
    {
      title: t('documentProcessing.dataMapping.calculation'),
      description: t('documentProcessing.dataMapping.calculationDesc'),
      icon: Sigma,
    },
  ];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="bg-background px-0 pb-12 pt-0 lg:px-0 lg:pb-0 lg:pr-12">
            <p className={`text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>{t('documentProcessing.dataMapping.breadcrumb')}</p>
            <h2 className={`mt-5 max-w-[520px] font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[62px] ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
              {t('documentProcessing.dataMapping.heading')}
            </h2>
            <p className={`mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
              {t('documentProcessing.dataMapping.description')}
            </p>

            <div className={`mt-8 max-w-[560px] space-y-4 border-l-2 border-primary pl-5 ${isVisible ? "animate-fade-in-left delay-300" : "opacity-0"}`}>
              <p className="text-sm leading-relaxed text-foreground">
                {t('documentProcessing.dataMapping.dataMapNote1')}
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {t('documentProcessing.dataMapping.dataMapNote2')}
              </p>
            </div>

            <div className={`mt-10 flex flex-wrap gap-4 ${isVisible ? "animate-scale-in delay-400" : "opacity-0"}`}>
              <Button size="lg" className="rounded-lg px-8">
                {t('documentProcessing.dataMapping.exploreBenchmark')} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                {t('documentProcessing.dataMapping.learnAboutMapping')}
              </Button>
            </div>
          </div>

          <div className={`border border-border bg-secondary p-4 shadow-sm md:p-6 lg:p-8 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: isVisible ? "200ms" : undefined }}>
            <div className="border border-border bg-background p-5 shadow-sm md:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{t('documentProcessing.dataMapping.agentRetrievalMap')}</p>
                  <p className="mt-2 font-brand text-[26px] leading-tight tracking-[-0.02em] text-foreground md:text-[32px]">
                    {t('documentProcessing.dataMapping.structuredAccess')}
                  </p>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                  <TableProperties className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {mappingRows.map((row, i) => (
                  <div key={row.label} className="grid gap-3 md:grid-cols-[170px_1fr] md:items-center">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{row.label}</p>
                    <div className="relative h-10 overflow-hidden border border-border bg-secondary">
                      <div
                        className={`absolute inset-y-0 left-0 ${row.pct >= 99 ? "bg-primary" : "bg-primary/50"} ${isVisible ? "animate-bar-fill" : ""}`}
                        style={{ "--bar-width": `${row.pct}%`, width: isVisible ? undefined : "0%", animationDelay: isVisible ? `${500 + i * 150}ms` : undefined } as React.CSSProperties}
                        aria-hidden="true"
                      />
                      <div className={`relative flex h-full items-center justify-between px-3 text-sm text-foreground ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: isVisible ? `${700 + i * 150}ms` : undefined }}>
                        <span className="truncate pr-3">{row.value}</span>
                        <span className="font-semibold">{row.pct}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }, i) => (
                <article key={title} className={`border border-border bg-background px-4 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: isVisible ? `${800 + i * 120}ms` : undefined }}>
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-brand text-[22px] leading-tight text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessingDataMappingSection;
