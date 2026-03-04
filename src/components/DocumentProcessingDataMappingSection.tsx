import { ArrowRight, Database, Network, Sigma, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";

const mappingRows = [
  { label: "Entity graph", value: "issuer → account → transaction → obligation" },
  { label: "Field lineage", value: "page 02 · table B · row 14 · cell 06" },
  { label: "Reasoning index", value: "retrieval-ready evidence + typed schema" },
];

const capabilities = [
  {
    title: "Reasoning",
    description: "Give agents explicit semantic relationships instead of forcing them to infer structure from raw text.",
    icon: Network,
  },
  {
    title: "Retrieval",
    description: "Route each query to the correct field, table, entity, and evidence trace with higher precision.",
    icon: Database,
  },
  {
    title: "Calculation",
    description: "Anchor numerical operations to normalized values so comparisons, ratios, and totals stay reliable.",
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
              Agents are only as reliable as the data map they can retrieve.
            </h2>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              Our document processing solution builds a data map for agents after extraction, turning processed documents into structured sources that support more accurate reasoning, retrieval, and numerical calculation.
            </p>

            <div className="mt-8 max-w-[560px] space-y-4 border-l-2 border-primary pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                The data map connects entities, fields, tables, and evidence locations so agentic workflows can operate on trustworthy structured records instead of fragmented document text.
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                This mapping layer is key to higher-confidence answers, sharper retrieval, and dependable computations across finance-heavy workflows.
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
                {mappingRows.map((row, index) => (
                  <div key={row.label} className="grid gap-3 md:grid-cols-[170px_1fr] md:items-center">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{row.label}</p>
                    <div className="relative h-10 overflow-hidden border border-border bg-secondary">
                      <div
                        className="absolute inset-y-0 left-0 bg-primary"
                        style={{ width: `${index === 0 ? 88 : index === 1 ? 82 : 94}%` }}
                        aria-hidden="true"
                      />
                      <div className="relative flex h-full items-center justify-between px-3 text-sm text-foreground">
                        <span className="truncate pr-3">{row.value}</span>
                        <span className="font-medium">{index === 0 ? "88%" : index === 1 ? "82%" : "94%"}</span>
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
