import { ArrowRight, Bot, DatabaseZap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const featureCards = [
  {
    title: "Field + table extraction",
    description:
      "Capture single fields, repeated sections, and full tabular structures from statements, reports, and operational documents.",
    icon: DatabaseZap,
  },
  {
    title: "Agent-ready validation",
    description:
      "Layer confidence thresholds, review states, and exception queues so agents know what can be executed automatically.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow orchestration",
    description:
      "Pass normalized document outputs into reconciliation, underwriting, compliance, or reporting agents with clear schemas.",
    icon: Bot,
  },
];

const pipelineRows = [
  ["Source", "PDFs, scans, statements, forms"],
  ["Parsing", "OCR + layout + table segmentation"],
  ["Structuring", "Typed JSON records + extracted evidence"],
  ["Downstream", "Agent actions, QA queues, analytics"],
];

const DocumentProcessingFeaturesSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Document system</p>
            <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
              Production-grade extraction for data-heavy operations.
            </h2>
            <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-muted-foreground">
              Built for teams that need more than OCR: schema control, table fidelity, traceable outputs, and clean handoff into agentic workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                Book a Demo
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                See pipeline <ArrowRight size={16} />
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
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Pipeline view</p>
              <h3 className="mt-4 font-brand text-[30px] leading-[1.04] tracking-[-0.02em] text-foreground md:text-[40px]">
                From raw document to trusted structured record.
              </h3>
              <p className="mt-4 max-w-[440px] text-base leading-relaxed text-muted-foreground">
                A lattice-style system view keeps the page aligned with the existing use-case architecture while introducing the document extraction workflow shown in the reference.
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
