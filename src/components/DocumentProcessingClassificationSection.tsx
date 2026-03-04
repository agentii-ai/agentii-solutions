import { ArrowRight, FileText, FolderOpen, ScanSearch, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";

const classificationItems = [
  { label: "1040 Forms", icon: FileText },
  { label: "W2 Forms", icon: FolderOpen },
  { label: "Bank Statement", icon: FolderOpen },
  { label: "Invoice", icon: FolderOpen },
];

const extractionSignals = [
  "Layout cues",
  "Page intent",
  "Entity patterns",
  "Evidence trace",
];

const DocumentProcessingClassificationSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-16">
          <div className="relative overflow-hidden bg-secondary px-6 py-8 md:px-8 md:py-10 lg:px-10">
            <div className="absolute inset-0 opacity-40" aria-hidden="true">
              <div className="absolute -left-16 top-8 h-48 w-48 rounded-full border border-primary/20" />
              <div className="absolute right-6 -top-12 h-40 w-40 rounded-full border border-primary/15" />
              <div className="absolute left-10 bottom-4 h-28 w-28 rounded-full border border-primary/10" />
            </div>

            <div className="relative grid gap-5 md:grid-cols-[minmax(0,1fr)_176px] md:items-start">
              <div className="border border-border bg-foreground p-5 shadow-sm md:p-6">
                <div className="flex items-center gap-2 border-b border-background/10 pb-4">
                  <span className="h-2.5 w-2.5 bg-primary" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 bg-primary/70" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 bg-primary/40" aria-hidden="true" />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center border-2 border-dashed border-background/40 bg-primary text-primary-foreground">
                    <Tags className="h-5 w-5" />
                  </div>
                  <p className="max-w-[220px] text-right font-brand text-[28px] leading-[0.95] tracking-[-0.03em] text-background md:text-[36px]">
                    AUTO-
                    <br />
                    CLASSIFICATION
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {extractionSignals.map((signal, index) => (
                    <div
                      key={signal}
                      className="border border-background/10 bg-background/5 px-4 py-3 text-sm text-background/75"
                      style={{ width: `${100 - index * 10}%` }}
                    >
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-6 border border-background/10 bg-background p-3">
                  <div className="aspect-[4/3] w-full border border-border bg-[linear-gradient(135deg,hsl(var(--primary)/0.2),hsl(var(--background))_42%,hsl(var(--secondary)))]" />
                </div>
              </div>

              <div className="space-y-4 pt-2 md:pt-0">
                {classificationItems.map(({ label, icon: Icon }) => (
                  <article key={label} className="flex items-center gap-4 border border-border bg-background px-4 py-4 shadow-sm">
                    <div className="inline-flex h-11 w-11 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-lg leading-tight text-foreground">{label}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Document classification
            </p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
              Classify first. Extract with precision.
            </h2>
            <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-muted-foreground">
              Identify document types, segment pages, and route each section to the right extraction model — before extraction begins.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-border bg-card px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Signal model</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">Combine content, layout, and metadata cues for reliable routing.</p>
              </div>
              <div className="border border-border bg-card px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Ops control</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">Map categories to queues, workflows, or agent actions with clear review gates.</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                Learn More <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                View routing model
              </Button>
            </div>
            <div className="mt-8 flex items-start gap-3 border-l-2 border-primary pl-5">
              <ScanSearch className="mt-1 h-5 w-5 text-primary" />
              <p className="max-w-[520px] text-sm leading-relaxed text-foreground">
                Build custom document taxonomies for finance, operations, claims, or compliance-heavy workflows without sacrificing auditability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessingClassificationSection;
