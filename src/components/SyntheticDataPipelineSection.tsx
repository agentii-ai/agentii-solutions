import { ArrowRight, FileCode2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const syntheticRows = [
  {
    id: "SCN-204",
    type: "Reasoning",
    structure: "Evidence graph · critique loop",
    output: "Verified answer + trace",
  },
  {
    id: "CD-118",
    type: "Coding",
    structure: "Patch + tests + failure state",
    output: "Executable repair set",
  },
  {
    id: "MT-087",
    type: "Maths",
    structure: "Formula path · checkpoints",
    output: "Grounded numeric chain",
  },
  {
    id: "TC-332",
    type: "Tool call",
    structure: "Intent map · arguments",
    output: "Actionable agent workflow",
  },
];

const SyntheticDataPipelineSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-0 overflow-hidden border border-border bg-background shadow-[0_24px_80px_-40px_hsl(var(--color-navy)/0.28)] lg:grid-cols-[1fr_1.2fr]">
            <div className="relative border-b border-border p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div
                className="pointer-events-none absolute -left-10 top-16 hidden h-44 w-44 md:block"
                aria-hidden="true"
                style={{
                  background:
                    "repeating-radial-gradient(circle at center, hsl(var(--color-purple) / 0.45) 0 2px, transparent 2px 12px)",
                  clipPath: "polygon(0 50%, 65% 0, 100% 50%, 65% 100%)",
                  opacity: 0.35,
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-[hsl(var(--color-purple)/0.25)] bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono-data text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      Compound AI pipeline
                    </p>
                  </div>
                </div>

                <h2 className="mt-8 font-brand text-[32px] leading-tight tracking-[-0.02em] text-foreground md:text-[42px]">
                  Ideate, Generate, Verify.
                </h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                  Multi-agent pipelines — Ideator agents brainstorm edge cases, Generator agents synthesize trajectories, Evaluator agents verify correctness. The result: diverse, execution-verified training data at scale.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-lg px-8">
                    Book a Demo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-lg border-[hsl(var(--color-purple)/0.28)] px-8 text-[hsl(var(--color-purple-dark))] hover:bg-[hsl(var(--color-purple-light))] hover:text-[hsl(var(--color-purple-dark))]">
                    Explore Capabilities
                  </Button>
                </div>

                <div className="mt-8 border border-border bg-secondary p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-20 shrink-0 items-center justify-center bg-[linear-gradient(135deg,hsl(var(--color-navy))_0%,hsl(var(--color-purple-dark))_100%)] text-[hsl(var(--primary-foreground))]">
                      <FileCode2 className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm leading-6 text-muted-foreground">
                        Turn prompts, policies, and source records into machine-readable training assets.
                      </p>
                      <a
                        href="#"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-[hsl(var(--color-purple-dark))]"
                      >
                        Read the guide
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)] p-6 lg:p-8">
              <div className="overflow-hidden border border-[hsl(var(--color-navy))] bg-[hsl(var(--color-navy))] shadow-[0_24px_56px_-28px_hsl(var(--color-navy)/0.7)]">
                <div className="overflow-x-auto bg-background">
                  <table className="min-w-full border-collapse text-left">
                    <thead className="border-b border-border bg-secondary">
                      <tr className="font-mono-data text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        <th className="px-4 py-3 font-medium">ID</th>
                        <th className="px-4 py-3 font-medium">Mode</th>
                        <th className="px-4 py-3 font-medium">Structure</th>
                        <th className="px-4 py-3 font-medium">Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      {syntheticRows.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? "bg-background" : "bg-[hsl(var(--color-gray-50))]"}>
                          <td className="px-4 py-3 font-mono-data text-[12px] text-foreground">{row.id}</td>
                          <td className="px-4 py-3 text-sm font-medium text-foreground">{row.type}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground">{row.structure}</td>
                          <td className="px-4 py-3 text-sm text-foreground">{row.output}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-[hsl(var(--color-slate-700))] bg-[hsl(var(--color-navy))] p-4 text-[hsl(var(--color-slate-200))]">
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className="font-mono-data uppercase tracking-[0.2em] text-[hsl(var(--color-slate-400))]">
                      Prompt synthesis job
                    </span>
                    <span>7.6% complete</span>
                  </div>
                  <div className="mt-3 h-2 w-full bg-[hsl(var(--color-slate-700))]">
                    <div className="h-full w-[38%] bg-[hsl(var(--color-cyan))]" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Ideation", value: "12.4K", sub: "edge cases" },
                  { label: "Generation", value: "8.7K", sub: "trajectories" },
                  { label: "Verification", value: "99.2%", sub: "pass rate" },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="border border-border bg-background px-4 py-4 text-center">
                    <p className="font-mono-data text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
                    <p className="mt-2 font-brand text-[24px] leading-tight tracking-[-0.02em] text-foreground">{value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden border border-border bg-[hsl(var(--color-navy))] text-[hsl(var(--primary-foreground))] shadow-[0_24px_70px_-40px_hsl(var(--color-navy)/0.7)]">
            <div className="grid items-center gap-6 px-6 py-8 md:grid-cols-[1.2fr_auto] lg:px-10">
              <div className="relative overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-y-[-140%] left-[-8%] w-[78%] bg-[repeating-radial-gradient(circle_at_left,hsl(var(--color-purple))_0_2px,transparent_2px_14px)] opacity-70"
                  aria-hidden="true"
                  style={{ transform: "rotate(-10deg)" }}
                />
                <p className="relative max-w-[560px] font-brand text-[30px] leading-tight tracking-[-0.02em] text-[hsl(var(--primary-foreground))] md:text-[42px]">
                  Find the training data pipeline that fits your fine-tuning workflow.
                </p>
              </div>
              <Button size="lg" className="rounded-lg bg-[hsl(var(--color-purple-dark))] px-8 text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--color-purple))]">
                View pricing
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticDataPipelineSection;
