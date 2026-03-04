import { ArrowRight, CheckCircle2, FileSearch, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";

const bulletPoints = [
  "Plug-and-play document AI flows tuned for financial, operational, and compliance-heavy inputs.",
  "Extract single values, line items, and nested tables into machine-readable records agents can act on.",
  "Cut manual review with auditable outputs, schema validation, and exception routing.",
];

const metricCards = [
  {
    label: "Input mix",
    value: "PDF · scans · tables · forms",
    icon: FileSearch,
  },
  {
    label: "Output shape",
    value: "Fields · tables · reasoning trace",
    icon: TableProperties,
  },
  {
    label: "Validation",
    value: "Confidence scoring + review queue",
    icon: CheckCircle2,
  },
];

const fieldRows = [
  { label: "Ratios", value: "Current ratio" },
  { label: "Gross Profit", value: "$ 1,619,389" },
  { label: "Net Income", value: "$ 483,232", active: true },
  { label: "Net Sales", value: "$ 4,358,100" },
];

const statementRows = [
  "Income statement",
  "$ 4,358,100",
  "$ 1,619,389",
  "$ 483,232",
  "$ 4,358,100",
];

const DocumentProcessingHeroSection = () => {
  return (
    <section className="bg-background pt-[88px] md:pt-[96px]">
      <div className="bg-navy text-slate-200">
        <div className="container mx-auto px-6 pt-16 pb-0 md:pt-24 lg:px-12 lg:pt-28">
          <div className="max-w-[820px] pb-14 md:pb-20">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="h-[3px] w-4 bg-primary" aria-hidden="true" />
              Solutions
            </div>
            <h1 className="font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
              Document processing
              <br />
              for agent workflows.
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-primary-light">
        <div className="container mx-auto grid items-stretch gap-0 px-0 md:grid-cols-[minmax(0,560px)_1fr] lg:px-12">
          <div className="flex flex-col justify-between px-6 py-12 md:px-10 md:py-14 lg:px-12">
            <div>
              <p className="max-w-[520px] text-lg leading-relaxed text-foreground md:text-[20px]">
                Extract document data instantly and accurately with structured outputs designed for downstream agents, evaluations, and workflow automation.
              </p>

              <div className="mt-8 space-y-5">
                {bulletPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center border border-primary/35 bg-background text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <p className="max-w-[520px] text-base leading-relaxed text-foreground">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-lg px-8">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="rounded-lg px-8">
                  Explore Features <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
              {metricCards.map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-background px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border-l border-border/70 px-4 py-10 md:px-8 lg:px-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px] opacity-70" aria-hidden="true" />
            <div className="absolute bottom-10 left-10 hidden h-14 w-14 border border-primary/25 md:block" aria-hidden="true" />
            <div className="absolute right-12 top-12 hidden h-12 w-12 border border-foreground/15 md:block" aria-hidden="true" />
            <div className="absolute bottom-16 left-16 hidden h-20 w-20 bg-[radial-gradient(circle,hsl(var(--foreground))_1.2px,transparent_1.2px)] bg-[length:10px_10px] opacity-90 md:block" aria-hidden="true" />

            <div className="relative flex min-h-[320px] items-center justify-center py-4 md:min-h-[420px]">
              <div className="relative w-full max-w-[560px]">
                <div className="absolute right-0 top-0 h-[360px] w-[70%] border border-border bg-background/95 shadow-sm md:h-[420px]">
                  <div className="flex h-full flex-col justify-between px-8 py-8">
                    <p className="text-center font-brand text-[18px] tracking-[-0.01em] text-foreground">INCOME STATEMENT</p>
                    <div className="space-y-5">
                      {statementRows.slice(1).map((row) => (
                        <div key={row} className="flex items-center justify-between border-b border-border/70 pb-3 text-sm text-foreground">
                          <span className="h-3 w-28 bg-secondary" aria-hidden="true" />
                          <span>{row}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t-2 border-primary pt-4" />
                  </div>
                </div>

                <div className="relative mt-10 w-[68%] border border-border bg-[#efe7d7]/80 px-5 py-5 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <p className="font-brand text-[18px] tracking-[-0.01em] text-foreground">Income statement</p>
                    <span className="inline-flex h-5 w-5 items-center justify-center bg-primary text-primary-foreground">‹</span>
                  </div>

                  <div className="space-y-4 py-4">
                    {fieldRows.map((row) => (
                      <div key={row.label} className="grid grid-cols-[1fr_auto] items-center gap-4 text-sm">
                        <span className="text-foreground">{row.label}</span>
                        <span className={`min-w-[120px] border px-3 py-1.5 text-right ${row.active ? "border-primary bg-background text-foreground shadow-sm" : "border-transparent bg-background/80 text-muted-foreground"}`}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button size="sm" className="mt-4 rounded-lg px-5">
                    Save
                  </Button>
                </div>

                <div className="absolute bottom-[52px] left-[52%] hidden w-[160px] rotate-[18deg] border-t-2 border-foreground/70 md:block" aria-hidden="true" />
                <div className="absolute bottom-8 right-6 hidden border border-primary bg-background px-3 py-1 text-xs font-medium text-foreground md:block" aria-hidden="true">
                  $ 483,232
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessingHeroSection;
