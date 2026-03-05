import { ArrowRight, Database, Network, Sigma } from "lucide-react";
import { Button } from "@/components/ui/button";

const benchmarkRows = [
  { label: "Traditional RAG", value: "Keyword matching on raw text — 25-30% accuracy on financial Q&A", pct: 28 },
  { label: "KG-RAG", value: "Multi-hop reasoning over knowledge graphs — 65% accuracy, high construction cost", pct: 65 },
  { label: "Agentic Search", value: "Multi-agent verification + entity graphs — 99% accuracy on financial benchmarks", pct: 99 },
];

const capabilities = [
  {
    title: "Financial Reasoning",
    description: "Agents traverse entity graphs connecting issuers → accounts → transactions → obligations. No guesswork. Every relationship is explicit, typed, and traceable to source documents.",
    icon: Network,
  },
  {
    title: "Precision Retrieval",
    description: "Route queries to exact fields, tables, and entities — with evidence traces. 'What was Q3 revenue?' resolves to page 12, table B, row 3, cell 4 — not a fuzzy text match.",
    icon: Database,
  },
  {
    title: "Reliable Calculation",
    description: "Anchor numerical operations to normalized, typed values with GAAP/IFRS mapping. Debt ratios, margin calculations, and trend analysis stay reliable because every number is traceable.",
    icon: Sigma,
  },
];

const FinanceDataMappingSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Data mapping
            </p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[62px]">
              99% accuracy on financial Q&A. Not 25%.
            </h2>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              Traditional RAG fails on financial questions because it guesses from embeddings. Our agentic data maps build entity graphs, field lineage, and retrieval-ready indexes — so agents navigate with precision, not similarity.
            </p>

            <div className="mt-8 max-w-[560px] space-y-4 border-l-2 border-primary pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                The data map connects issuers to accounts to transactions — with every field traceable to its source coordinate (page, table, row, cell).
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                This is the layer that separates keyword-matching from financial-grade retrieval: every query resolves to the correct entity, time period, and evidence trace.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                Read the Benchmark <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                See Example Queries
              </Button>
            </div>
          </div>

          <div className="border border-border bg-secondary p-6 shadow-sm md:p-8">
            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Financial Q&A Accuracy
                  </p>
                  <p className="mt-2 font-brand text-[28px] leading-tight text-foreground">
                    Benchmark Comparison
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                {benchmarkRows.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {row.label}
                      </p>
                      <p className="font-brand text-[20px] text-primary">{row.pct}%</p>
                    </div>
                    <div className="mt-2 h-2 w-full bg-secondary">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div key={title} className="border border-border bg-background p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-brand text-[18px] leading-tight text-foreground">{title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceDataMappingSection;
