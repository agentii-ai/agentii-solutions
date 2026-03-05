import { ArrowRight, Boxes, Database, FileText, Layers3 } from "lucide-react";

const suiteCards = [
  {
    title: "Reasoning Fabrication",
    description:
      "Generate agent-ready reasoning traces with structured evidence, critiques, and decision branches for repeatable evaluation.",
    icon: Layers3,
  },
  {
    title: "Structured Mapping",
    description:
      "Create high-fidelity data maps that turn processed records into machine-readable states for retrieval and numerical work.",
    icon: Database,
  },
  {
    title: "Textual Synthesis",
    description:
      "Produce controlled synthetic corpora for prompts, edge cases, and domain-specific examples used in agent training loops.",
    icon: FileText,
  },
] as const;

const SyntheticDataSuiteSection = () => {
  return (
    <section className="bg-secondary py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <article className="grid overflow-hidden border border-border bg-background shadow-[0_18px_50px_-34px_hsl(var(--color-navy)/0.18)] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <p className="font-mono-data text-[11px] uppercase tracking-[0.24em] text-[hsl(var(--color-purple-dark))]">
                Enterprise integrations
              </p>
              <h2 className="mt-4 max-w-[520px] font-brand text-[34px] leading-[1.06] tracking-[-0.03em] text-foreground md:text-[46px]">
                Cross-platform synthetic data workflows for enterprise systems.
              </h2>
              <p className="mt-5 max-w-[520px] text-[17px] leading-8 text-foreground/80">
                Our synthetic data solution builds a data map for agents, greatly increasing agentic work on structured data sources after processing. The data map is key to accurate agentic reasoning, retrieval, and numerical calculation.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-[hsl(var(--color-purple-dark))]"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-t border-border bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)] p-8 lg:min-h-[360px] lg:border-l lg:border-t-0 lg:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative flex w-full max-w-[420px] items-center justify-center">
                <div className="absolute left-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-[999px] border border-[hsl(var(--color-gray-300))] bg-background shadow-[0_16px_30px_-20px_hsl(var(--color-navy)/0.22)]">
                  <div className="absolute inset-x-3 top-5 h-8 rounded-[999px] border border-[hsl(var(--color-gray-500))] bg-secondary" />
                  <div className="absolute inset-x-3 top-12 h-px border-t border-[hsl(var(--color-gray-300))]" />
                  <div className="absolute inset-x-3 top-[58px] h-px border-t border-[hsl(var(--color-gray-300))]" />
                </div>

                <div className="relative z-10 flex h-40 w-40 items-center justify-center border border-[hsl(var(--color-teal-dark))] bg-[linear-gradient(180deg,hsl(var(--color-cyan-light))_0%,hsl(var(--color-cyan))_100%)] text-[hsl(var(--color-navy))] shadow-[0_24px_40px_-24px_hsl(var(--color-cyan)/0.55)]">
                  <Boxes className="h-12 w-12" />
                </div>

                <div className="absolute right-0 top-1/2 h-28 w-24 -translate-y-1/2 border border-[hsl(var(--color-gray-300))] bg-background shadow-[0_16px_30px_-20px_hsl(var(--color-navy)/0.22)]">
                  <div className="absolute inset-x-4 top-8 h-px border-t border-[hsl(var(--color-gray-300))]" />
                  <div className="absolute inset-x-4 top-14 h-px border-t border-[hsl(var(--color-gray-300))]" />
                  <div className="absolute inset-x-4 top-20 h-px border-t border-[hsl(var(--color-gray-300))]" />
                </div>

                <div
                  className="pointer-events-none absolute inset-x-4 bottom-0 h-24 opacity-60"
                  aria-hidden="true"
                  style={{
                    background:
                      "repeating-radial-gradient(circle at center, hsl(var(--color-purple) / 0.5) 0 1.5px, transparent 1.5px 12px)",
                    maskImage: "linear-gradient(to top, black, transparent)",
                  }}
                />
              </div>
            </div>
          </article>

          <div className="mt-20 text-center">
            <h3 className="font-brand text-[36px] leading-[1.08] tracking-[-0.03em] text-foreground md:text-[52px]">
              The synthetic data product suite
            </h3>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {suiteCards.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="overflow-hidden border border-border bg-background shadow-[0_18px_50px_-34px_hsl(var(--color-navy)/0.16)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_-34px_hsl(var(--color-purple)/0.24)]"
              >
                <div className="flex h-40 items-center justify-center border-b border-border bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)]">
                  <div className="flex h-24 w-24 items-center justify-center border border-[hsl(var(--color-teal-dark))] bg-[linear-gradient(180deg,hsl(var(--color-cyan-light))_0%,hsl(var(--color-cyan))_100%)] text-[hsl(var(--color-navy))] shadow-[0_16px_28px_-20px_hsl(var(--color-cyan)/0.5)]">
                    <Icon className="h-9 w-9" />
                  </div>
                </div>
                <div className="p-6 lg:p-7">
                  <h4 className="font-brand text-[28px] leading-tight tracking-[-0.02em] text-foreground">
                    {title}
                  </h4>
                  <p className="mt-4 text-[17px] leading-8 text-foreground/80">
                    {description}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-[hsl(var(--color-purple-dark))]"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticDataSuiteSection;
