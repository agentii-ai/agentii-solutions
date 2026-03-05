import { Brain, Code2, Pi, Wrench } from "lucide-react";

const synthesisModes = [
  {
    title: "Reasoning Traces",
    description:
      "Multi-step chain-of-thought with critique loops and evidence graphs. Methods: Self-Instruct, STaR, Process Reward Models.",
    badge: "Verified",
    icon: Brain,
  },
  {
    title: "Code Execution",
    description:
      "Execution-aware samples with tests, patches, and error recovery. Methods: OSS-Instruct, Evol-Instruct, Genetic Instruct.",
    badge: "Runnable",
    icon: Code2,
  },
  {
    title: "Math Proofs",
    description:
      "Symbolic steps with checkpoints and formal verification. Methods: MetaMath, NuminaMath, theorem proving.",
    badge: "Proven",
    icon: Pi,
  },
  {
    title: "Tool Calling",
    description:
      "Schema-safe actions with argument validation and state tracking. Methods: APIGen, ToolACE, environment simulation.",
    badge: "Validated",
    icon: Wrench,
  },
];

const SyntheticDataFabricationSection = () => {
  return (
    <section className="bg-secondary py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--color-purple))]">
            Synthesis methods
          </p>
          <h2 className="mt-4 font-brand text-[34px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
            Generate Training Data From First Principles.
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-base leading-8 text-muted-foreground md:text-lg">
            We synthesize four core data modalities — each with domain-specific verification — so every sample an agent trains on is structurally sound.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1180px] gap-5 md:grid-cols-2">
          {synthesisModes.map(({ title, description, badge, icon: Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden border border-border bg-background p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[hsl(var(--color-purple)/0.4)] hover:shadow-[0_12px_40px_-16px_hsl(var(--color-purple)/0.18)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-[hsl(var(--color-purple)/0.2)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="shrink-0 border border-[hsl(var(--color-purple)/0.2)] bg-[hsl(var(--color-purple-light))] px-2.5 py-1 font-mono-data text-[11px] uppercase tracking-[0.16em] text-[hsl(var(--color-purple-dark))]">
                  {badge}
                </span>
              </div>
              <h3 className="mt-6 font-brand text-[24px] leading-tight tracking-[-0.02em] text-foreground md:text-[28px]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyntheticDataFabricationSection;
