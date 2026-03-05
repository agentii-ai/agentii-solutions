import { ArrowRight, Brain, Code2, Pi, Wrench, Route, Eye, CheckCircle2 } from "lucide-react";

const useCases = [
  {
    title: "Chain-of-Thought Reasoning",
    subtitle: "Teach models to think step by step",
    description:
      "Generate multi-step reasoning traces with critique loops, evidence graphs, and self-correction paths. Models trained on these traces learn to decompose problems, verify intermediate steps, and recover from logical errors.",
    methods: "Self-Instruct · STaR · Process Reward Models · Rejection Sampling",
    benchmarks: "GSM8K · MATH · ARC · HotpotQA · MuSiQue",
    output: "Verified CoT traces with evidence links and confidence scores",
    metric: "3.2×",
    metricLabel: "reasoning accuracy on multi-hop benchmarks",
    icon: Brain,
    accent: "border-[hsl(var(--color-purple)/0.3)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]",
    accentBorder: "border-[hsl(var(--color-purple)/0.4)]",
  },
  {
    title: "Code Generation & Repair",
    subtitle: "Execution-verified samples with tests and patches",
    description:
      "Synthesize code problems, solutions, test suites, and failure recovery paths. Every sample executes in a sandbox — if the code doesn't run, it doesn't ship. Covers repo-level tasks, rare languages, and self-correction loops.",
    methods: "OSS-Instruct · Evol-Instruct · Genetic Instruct · SYNTHETIC-1",
    benchmarks: "HumanEval · MBPP · SWE-Bench · LiveCodeBench",
    output: "Runnable code with test suites, patches, and execution logs",
    metric: "95%",
    metricLabel: "sandbox execution pass rate",
    icon: Code2,
    accent: "border-[hsl(var(--color-cyan)/0.3)] bg-[hsl(var(--color-cyan-light))] text-[hsl(var(--color-teal-dark))]",
    accentBorder: "border-[hsl(var(--color-cyan)/0.4)]",
  },
  {
    title: "Mathematical Reasoning",
    subtitle: "Symbolic proofs with formal verification",
    description:
      "Evolve seed problems through rephrasing, reversal, and difficulty scaling. Each solution carries symbolic steps, intermediate checkpoints, and formal verification. Supports curriculum learning from arithmetic to competition-level proofs.",
    methods: "MetaMath · NuminaMath · DeepSeekMath · GRPO · Theorem Proving",
    benchmarks: "GSM8K · MATH · Olympiad · AMC/AIME",
    output: "Grounded numeric chains with step-level verification",
    metric: "90K+",
    metricLabel: "math training samples from seed evolution",
    icon: Pi,
    accent: "border-[hsl(var(--color-purple)/0.3)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]",
    accentBorder: "border-[hsl(var(--color-purple)/0.4)]",
  },
  {
    title: "Tool Calling & Function Use",
    subtitle: "Schema-safe trajectories with state tracking",
    description:
      "Synthesize multi-turn tool-calling scenarios with ambiguous intents, shifting goals, and execution failures. LLMs act as environment simulators, generating coherent API responses and state transitions. Agents learn when to clarify, act, or revise.",
    methods: "APIGen · ToolACE · BUTTON · TOUCAN · Environment Simulation",
    benchmarks: "ToolBench · API-Bank · BFCL · Nexus",
    output: "Validated tool-use trajectories with schema checks",
    metric: "99%",
    metricLabel: "schema validation pass rate",
    icon: Wrench,
    accent: "border-[hsl(var(--color-cyan)/0.3)] bg-[hsl(var(--color-cyan-light))] text-[hsl(var(--color-teal-dark))]",
    accentBorder: "border-[hsl(var(--color-cyan)/0.4)]",
  },
  {
    title: "Long-Horizon Planning",
    subtitle: "Trajectory synthesis for multi-step workflows",
    description:
      "Generate planning data that teaches models to decompose goals, maintain memory, and dynamically replan on failure. Plan-and-Act pipelines retroactively annotate successful trajectories with high-level plans. AgentGen invents diverse environments and tasks.",
    methods: "Plan-and-Act · AgentGen · WebArena · OSWorld · TheAgentCompany",
    benchmarks: "WebArena (57% SOTA) · OSWorld · MiniWoB++",
    output: "Grounded plan-action pairs with replanning branches",
    metric: "57%",
    metricLabel: "WebArena success rate (SOTA with Plan-and-Act)",
    icon: Route,
    accent: "border-[hsl(var(--color-purple)/0.3)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]",
    accentBorder: "border-[hsl(var(--color-purple)/0.4)]",
  },
  {
    title: "Multimodal & GUI Agents",
    subtitle: "Visual grounding with cross-modal reasoning",
    description:
      "Synthesize GUI navigation tasks, visual document comprehension, and cross-modal reasoning data. Knowledge graph frameworks like Graph2Eval generate multi-hop web interaction tasks. Supports VLMs, robotic VLA models, and RL in synthetic worlds.",
    methods: "Graph2Eval · VL-DAC · GUI Grounding · Knowledge Graph Sampling",
    benchmarks: "VisualWebArena · ScreenSpot · Mind2Web",
    output: "Spatial-aware interaction traces with visual-textual links",
    metric: "Multi-hop",
    metricLabel: "cross-modal reasoning with visual grounding",
    icon: Eye,
    accent: "border-[hsl(var(--color-cyan)/0.3)] bg-[hsl(var(--color-cyan-light))] text-[hsl(var(--color-teal-dark))]",
    accentBorder: "border-[hsl(var(--color-cyan)/0.4)]",
  },
];

const SyntheticUseCaseGridSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--color-purple-dark))]">
            6 agentic capabilities
          </p>
          <h2 className="mt-4 font-brand text-[34px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
            Each Capability Needs Its Own Training Data Shape.
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-base leading-8 text-muted-foreground md:text-lg">
            Reasoning traces look nothing like tool-calling trajectories. Code execution data requires sandbox verification. Planning data needs replanning branches. We handle the structural differences so you don't have to.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[1180px] space-y-6">
          {useCases.map(({ title, subtitle, description, methods, benchmarks, output, metric, metricLabel, icon: Icon, accent, accentBorder }, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={title}
                className="grid overflow-hidden border border-border bg-background shadow-sm lg:grid-cols-[1fr_auto]"
              >
                <div className={`flex flex-col justify-center p-8 lg:p-10 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center border ${accent}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-brand text-[24px] leading-tight tracking-[-0.02em] text-foreground md:text-[32px]">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-[560px] text-base leading-8 text-muted-foreground">
                    {description}
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--color-purple))]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Methods: </span>
                        {methods}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--color-purple))]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Benchmarks: </span>
                        {benchmarks}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--color-purple))]" />
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Output: </span>
                        {output}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`flex min-w-[280px] items-center justify-center border-t border-border bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)] p-8 lg:min-w-[320px] lg:border-t-0 ${!isEven ? "lg:order-1 lg:border-r" : "lg:border-l"}`}>
                  <div className="text-center">
                    <div className={`mx-auto flex h-28 w-28 items-center justify-center border ${accentBorder} bg-background shadow-[0_16px_40px_-20px_hsl(var(--color-purple)/0.3)]`}>
                      <span className="font-brand text-[36px] leading-none tracking-[-0.04em] text-foreground md:text-[44px]">
                        {metric}
                      </span>
                    </div>
                    <p className="mx-auto mt-5 max-w-[200px] text-sm leading-relaxed text-muted-foreground">
                      {metricLabel}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SyntheticUseCaseGridSection;
