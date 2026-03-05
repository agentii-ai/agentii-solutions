import { ArrowRight, Database, Network, Sigma, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";

const mappingRows = [
  { label: "KG-RAG", value: "Multi-hop reasoning over knowledge graphs — high construction cost, limited scalability", pct: 65 },
  { label: "NL2SQL", value: "Structured queries against relational databases — schema-dependent, structured data only", pct: 70 },
  { label: "Agentic Search", value: "Multi-agent verification + iterative refinement — production-grade financial accuracy", pct: 99 },
];

const capabilities = [
  {
    title: "Reasoning",
    description: "Agents traverse explicit semantic relationships instead of inferring structure from raw text. Entity graphs connect issuers to accounts to transactions — no guesswork.",
    icon: Network,
  },
  {
    title: "Retrieval",
    description: "Route each query to the exact field, table, and entity — with evidence traces. Traditional RAG hits 25-30% on financial questions. Agentic data maps reach 99%.",
    icon: Database,
  },
  {
    title: "Calculation",
    description: "Anchor numerical operations to normalized, typed values with source lineage. Comparisons, ratios, and totals stay reliable because every number is traceable.",
    icon: Sigma,
  },
];

const DocumentProcessingDataMappingSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="bg-background px-0 pb-12 pt-0 lg:px-0 lg:pb-0 lg:pr-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Data mapping</p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[62px]">
              Agents are only as reliable as the data map they retrieve.
            </h2>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              Traditional RAG achieves 25-30% accuracy on financial questions. Our agentic data maps achieve 99%. The difference: structured entity graphs, field-level lineage, and retrieval-ready indexes that agents can navigate with precision — not guess from raw embeddings.
            </p>

            <div className="mt-8 max-w-[560px] space-y-4 border-l-2 border-primary pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                The data map connects entities, fields, tables, and evidence locations — so agents operate on structured records, not fragmented document text.
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                This is the layer that separates keyword-matching from financial-grade retrieval: every query resolves to the correct entity, time period, and source coordinate.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                Explore the benchmark <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                Learn about our mapping
              </Button>
            </div>
          </div>

          <div className="border border-border bg-secondary p-4 shadow-sm md:p-6 lg:p-8">
            <div className="border border-border bg-background p-5 shadow-sm md:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Agent retrieval map</p>
                  <p className="mt-2 font-brand text-[26px] leading-tight tracking-[-0.02em] text-foreground md:text-[32px]">
                    Structured access across agent configurations
                  </p>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                  <TableProperties className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {mappingRows.map((row) => (
                  <div key={row.label} className="grid gap-3 md:grid-cols-[170px_1fr] md:items-center">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{row.label}</p>
                    <div className="relative h-10 overflow-hidden border border-border bg-secondary">
                      <div
                        className={`absolute inset-y-0 left-0 ${row.pct >= 99 ? "bg-primary" : "bg-primary/50"}`}
                        style={{ width: `${row.pct}%` }}
                        aria-hidden="true"
                      />
                      <div className="relative flex h-full items-center justify-between px-3 text-sm text-foreground">
                        <span className="truncate pr-3">{row.value}</span>
                        <span className="font-semibold">{row.pct}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <article key={title} className="border border-border bg-background px-4 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm">
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
