import { ArrowRight, FileImage, FolderKanban, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ingestionSources = [
  { label: "PDF", icon: FileImage },
  { label: "PNG", icon: FileImage },
  { label: "Email", icon: Inbox },
  { label: "HTML", icon: FileImage },
];

const destinationSystems = ["ERP", "CRM", "Claims", "Audit"];

const DocumentProcessingIngestionSection = () => {
  const { t } = useTranslation('solutions');
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              {t('documentProcessing.ingestion.breadcrumb')}
            </p>
            <h2 className={`mt-5 max-w-[520px] font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px] ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
              {t('documentProcessing.ingestion.heading')}
            </h2>
            <p className={`mt-6 max-w-[520px] text-lg leading-relaxed text-muted-foreground ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
              {t('documentProcessing.ingestion.description')}
            </p>
            <div className={`mt-8 max-w-[520px] space-y-4 border-l-2 border-primary pl-5 ${isVisible ? "animate-fade-in-left delay-300" : "opacity-0"}`}>
              <p className="text-sm leading-relaxed text-foreground">
                {t('documentProcessing.ingestion.supports')}
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {t('documentProcessing.ingestion.noChanges')}
              </p>
            </div>
            <div className={`mt-10 flex flex-wrap gap-4 ${isVisible ? "animate-scale-in delay-400" : "opacity-0"}`}>
              <Button size="lg" className="rounded-lg px-8">
                {t('buttons.learnMore', { ns: 'common' })} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                {t('documentProcessing.ingestion.seeIntakeModel')}
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden border border-border bg-secondary/40 p-6 shadow-sm md:p-8 lg:p-10">
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-60"
              aria-hidden="true"
            />

            <div className="relative grid min-h-[420px] grid-cols-[1.05fr_76px_0.95fr] items-center gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {ingestionSources.map(({ label, icon: Icon }, i) => (
                  <article
                    key={label}
                    className={`flex min-h-[112px] flex-col justify-between border border-border bg-background px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                    style={{ animationDelay: isVisible ? `${200 + i * 100}ms` : undefined }}
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{t('documentProcessing.ingestion.source')}</p>
                      <p className="mt-2 font-brand text-[22px] leading-none text-foreground">{label}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative flex h-full items-center justify-center">
                <div className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border origin-top ${isVisible ? "animate-draw-line" : "scale-y-0"}`} style={{ animationDelay: isVisible ? "500ms" : undefined }} aria-hidden="true" />
                <div className={`relative inline-flex h-16 w-16 items-center justify-center border-2 border-dashed border-primary/40 bg-background shadow-sm ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: isVisible ? "600ms" : undefined }}>
                  <div className="inline-flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                    <FolderKanban className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className={`space-y-4 border-l border-primary/20 bg-foreground px-5 py-5 text-background ${isVisible ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: isVisible ? "700ms" : undefined }}>
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-background/60">{t('documentProcessing.ingestion.destinations')}</p>
                {destinationSystems.map((system, i) => (
                  <div key={system} className={`flex items-center justify-between border border-background/15 bg-background/5 px-4 py-4 ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: isVisible ? `${800 + i * 80}ms` : undefined }}>
                    <span className="text-sm font-medium uppercase tracking-[0.16em] text-background/80">{system}</span>
                    <span className="h-2.5 w-2.5 bg-primary" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessingIngestionSection;
