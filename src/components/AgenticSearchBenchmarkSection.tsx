import { Database, Network, Sigma } from "lucide-react";

const benchmarkRows = [
  {
    label: "Traditional RAG",
    description: "Embedding similarity over chunked text — retrieves plausible passages, misses structural relationships and cross-document dependencies.",
    pct: 28,
  },
  {
    label: "KG-RAG",
    description: "Knowledge graph augmented retrieval — better on structured data, but fails when documents mix structured tables with unstructured narrative.",
    pct: 65,
  },
  {
    label: "Agentic Search",
    description: "Multi-agent verification with entity graphs, iterative refinement, and confidence-gated output — production-grade accuracy across document types.",
    pct: 99,
  },
];

const comparisonRows = [
  { dimension: "Retrieval unit", rag: "Text chunks (512-1024 tokens)", agentic: "Entity graph nodes + relationships" },
  { dimension: "Query resolution", rag: "Single-pass similarity search", agentic: "Iterative multi-agent reasoning" },
  { dimension: "Verification", rag: "None — trust first retrieval", agentic: "Cross-agent verification + confidence scoring" },
  { dimension: "Evidence", rag: "Passage reference (approximate)", agentic: "Field-level lineage (document, page, table, cell)" },
  { dimension: "Structured data", rag: "Flattened to text", agentic: "Preserved as typed schema with relationships" },
  { dimension: "Failure mode", rag: "Confident hallucination", agentic: "Escalation to human review" },
];

const capabilities = [
  {
    title: "Financial Q&A",
    description: "Tested on 10-K filings, bank statements, and loan documents. Queries include ratio calculations, cross-reference lookups, and multi-document reasoning.",
    icon: Sigma,
  },
  {
    title: "Insurance Claims",
    description: "Tested on ACORD forms, policy documents, and medical records. Queries include coverage determination, clause interpretation, and reserve estimation.",
    icon: Network,
  },
  {
    title: "Legal & Compliance",
    description: "Tested on regulatory filings, contracts, and audit reports. Queries include obligation extraction, term comparison, and disclosure verification.",
    icon: Database,
  },
];

const AgenticSearchBenchmarkSection = () => {
  return (
    <section className="bg-secondary py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Benchmarks
            </p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[62px]">
              Measured accuracy, not marketing claims.
            </h2>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              We benchmark against real-world document queries — not synthetic datasets. Every accuracy number comes from production-representative documents with human-verified ground truth.
            </p>

            <div className="mt-10 grid gap-4">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div key={title} className="border border-border bg-background p-5">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-brand text-[18px] leading-tight text-foreground">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Document Q&A Accuracy
                </p>
                <p className="mt-2 font-brand text-[28px] leading-tight text-foreground">
                  Benchmark Comparison
                </p>
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
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{row.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Head-to-head comparison
              </p>
              <p className="mt-2 font-brand text-[22px] leading-tight text-foreground">
                RAG vs Agentic Search
              </p>

              <div className="mt-6 space-y-0">
                {comparisonRows.map((row, index) => (
                  <div
                    key={row.dimension}
                    className={`grid grid-cols-[1fr_1fr_1fr] gap-4 py-4 ${
                      index !== comparisonRows.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold text-foreground">{row.dimension}</p>
                    <p className="text-xs text-muted-foreground">{row.rag}</p>
                    <p className="text-xs text-primary">{row.agentic}</p>
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

export default AgenticSearchBenchmarkSection;
