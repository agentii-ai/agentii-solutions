import { Bot, GitBranch, Layers, Network, RefreshCw, Shield } from "lucide-react";

const architectureLayers = [
  {
    title: "Entity Graph Construction",
    description:
      "Documents are parsed into structured entity graphs — not flat chunks. Entities (issuers, accounts, clauses, claimants) are connected by typed relationships. Agents traverse these graphs to resolve queries, not scan text.",
    icon: Network,
  },
  {
    title: "Multi-Agent Verification",
    description:
      "Multiple specialized agents independently retrieve and reason over the same query. A verification agent cross-checks answers, flags disagreements, and escalates ambiguity — eliminating single-point-of-failure hallucinations.",
    icon: Bot,
  },
  {
    title: "Iterative Refinement",
    description:
      "When initial retrieval is insufficient, agents decompose the query, retrieve additional context, and re-reason. Each iteration narrows the answer space until confidence thresholds are met or the query is escalated.",
    icon: RefreshCw,
  },
  {
    title: "Field-Level Lineage",
    description:
      "Every retrieved value carries provenance: source document, page, table, row, cell. Agents don't just return answers — they return evidence chains that auditors and compliance teams can verify.",
    icon: GitBranch,
  },
  {
    title: "Schema-Aware Retrieval",
    description:
      "Queries resolve against typed schemas, not raw text. 'What is the debt-service coverage ratio?' maps to a specific calculation over specific fields — not a keyword search for 'debt service'.",
    icon: Layers,
  },
  {
    title: "Confidence-Gated Output",
    description:
      "Every answer includes a confidence score. High-confidence answers flow to downstream agents automatically. Low-confidence answers route to human review with the specific evidence that triggered uncertainty.",
    icon: Shield,
  },
];

const AgenticSearchArchitectureSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Architecture
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            How agentic search works.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Agentic search replaces single-pass retrieval with a multi-agent system that constructs, verifies, and refines answers iteratively — achieving production-grade accuracy on complex document queries.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {architectureLayers.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-brand text-[22px] leading-tight text-foreground">
                {title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchArchitectureSection;
