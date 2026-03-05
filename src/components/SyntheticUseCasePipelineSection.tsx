import { ArrowRight, Sparkles, ShieldCheck, Layers3, GitBranch } from "lucide-react";

const pipelineSteps = [
  {
    step: "01",
    label: "Seed",
    detail: "Domain prompts, policies, existing datasets, or task definitions",
    accent: "bg-[hsl(var(--color-purple))]",
  },
  {
    step: "02",
    label: "Evolve",
    detail: "Evol-Instruct generates harder, easier, and constraint-varied samples",
    accent: "bg-[hsl(var(--color-purple-dark))]",
  },
  {
    step: "03",
    label: "Synthesize",
    detail: "Compound AI agents generate reasoning traces, code, math, tool calls",
    accent: "bg-[hsl(var(--color-cyan))]",
  },
  {
    step: "04",
    label: "Verify",
    detail: "Sandbox execution, formal proofs, schema checks, multi-model consensus",
    accent: "bg-[hsl(var(--color-teal-dark))]",
  },
  {
    step: "05",
    label: "Export",
    detail: "JSON-L, Parquet, HuggingFace — ready for SFT, RLHF, or evaluation",
    accent: "bg-[hsl(var(--color-purple))]",
  },
];

const qualityDimensions = [
  {
    title: "Diversity",
    description: "Clustering-based metrics ensure semantic coverage across the full problem space. Prevents model collapse from narrow distributions.",
    icon: GitBranch,
  },
  {
    title: "Verifiability",
    description: "Execution-based filtering in sandboxes, formal proof validation, and multi-model consensus voting. Hallucinated samples never reach training.",
    icon: ShieldCheck,
  },
  {
    title: "Difficulty Adaptation",
    description: "Bidirectional evolution scales from trivial to expert-level. Dynamic difficulty adjusts to the model's current solvability frontier.",
    icon: Layers3,
  },
  {
    title: "Long-Context Coherence",
    description: "Document-grounded tasks and multi-turn simulations maintain logical consistency over massive token lengths. No context drift.",
    icon: Sparkles,
  },
];

const SyntheticUseCasePipelineSection = () => {
  return (
    <section className="bg-secondary py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--color-purple-dark))]">
              Synthesis pipeline
            </p>
            <h2 className="mt-4 font-brand text-[34px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
              Seed → Evolve → Synthesize → Verify → Export.
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-base leading-8 text-muted-foreground md:text-lg">
              One pipeline serves all six capabilities. The verification layer adapts per modality — sandbox execution for code, formal proofs for math, schema checks for tool calls, consensus voting for reasoning.
            </p>
          </div>

          <div className="mt-14 overflow-hidden border border-border bg-background shadow-sm">
            <div className="grid md:grid-cols-5">
              {pipelineSteps.map(({ step, label, detail, accent }, index) => (
                <div
                  key={step}
                  className={`relative flex flex-col p-6 ${index < pipelineSteps.length - 1 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center ${accent} font-mono-data text-[12px] font-medium text-[hsl(var(--primary-foreground))]`}>
                      {step}
                    </span>
                    <span className="font-brand text-[20px] tracking-[-0.02em] text-foreground">{label}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                  {index < pipelineSteps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block" aria-hidden="true">
                      <ArrowRight className="h-5 w-5 text-[hsl(var(--color-purple)/0.4)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <h3 className="font-brand text-[28px] leading-tight tracking-[-0.02em] text-foreground md:text-[40px]">
              Four Quality Dimensions Built Into Every Sample.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {qualityDimensions.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[hsl(var(--color-purple)/0.4)] hover:shadow-[0_12px_40px_-16px_hsl(var(--color-purple)/0.18)]"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-[hsl(var(--color-purple)/0.2)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 font-brand text-[20px] leading-tight tracking-[-0.02em] text-foreground">
                  {title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticUseCasePipelineSection;
