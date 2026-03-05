import { ArrowRight, CheckCircle2, FileSearch, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";

const bulletPoints = [
  "Extract fields, tables, and clauses from policies, claims, and medical records.",
  "Every output includes confidence scores, field lineage, and regulatory mapping.",
  "Exception routing sends ambiguous claims and edge cases to adjuster review.",
];

const metricCards = [
  { label: "Document types", value: "ACORD forms · policies · claims · medical records", icon: FileSearch },
  { label: "Output shape", value: "Typed JSON · clause-mapped · evidence traces", icon: TableProperties },
  { label: "Accuracy", value: "99% on claims data extraction benchmarks", icon: CheckCircle2 },
];

const InsuranceHeroSection = () => {
  return (
    <section className="bg-background pt-[88px] md:pt-[96px]">
      <div className="bg-navy text-slate-200">
        <div className="container mx-auto px-6 pt-16 pb-0 md:pt-24 lg:px-12 lg:pt-28">
          <div className="max-w-[820px] pb-14 md:pb-20">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="h-[3px] w-4 bg-primary" aria-hidden="true" />
              Use Cases · Insurance
            </div>
            <h1 className="font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
              Agent-use-ready data
              <br />
              for insurance operations.
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-primary-light">
        <div className="container mx-auto grid items-stretch gap-0 px-0 md:grid-cols-[minmax(0,560px)_1fr] lg:px-12">
          <div className="flex flex-col justify-between px-6 py-12 md:px-10 md:py-14 lg:px-12">
            <div>
              <p className="max-w-[520px] text-lg leading-relaxed text-foreground md:text-[20px]">
                Turn ACORD forms, policy documents, and claims files into structured records that underwriting, claims, and compliance agents act on — without manual data entry.
              </p>
              <div className="mt-8 space-y-5">
                {bulletPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-[15px] leading-relaxed text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                Request a Demo
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                See Example Output <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="border-l border-border bg-background p-6 md:p-8">
            <div className="grid gap-4">
              {metricCards.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-4 border border-border bg-card px-5 py-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHeroSection;
