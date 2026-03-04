import { Play, Sparkles, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const colorBar = [
  "bg-navy w-16",
  "bg-navy w-6",
  "bg-slate-400 w-3",
  "bg-slate-400 w-2.5",
  "bg-primary w-2.5",
  "bg-teal w-2.5",
  "bg-purple w-2.5",
  "bg-primary w-3",
  "bg-teal w-4",
  "bg-purple w-3",
  "bg-navy w-2.5",
  "bg-slate-400 w-3",
  "bg-primary w-8",
  "bg-teal w-10",
];

const signals = [
  {
    label: "Founded",
    value: "Agentic systems for production data work.",
    icon: Sparkles,
  },
  {
    label: "Global Team",
    value: "Experts with cross-market delivery depth.",
    icon: Users2,
  },
  {
    label: "Watch Story",
    value: "Strategy, research, and execution in one stack.",
    icon: Play,
  },
];

const AboutHeroSection = () => {
  return (
    <section className="bg-background pt-[72px]">
      <div className="bg-teal-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex min-h-[340px] items-end py-16 md:min-h-[420px] md:py-20 lg:min-h-[520px] lg:py-24">
            <div className="max-w-[720px]">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gray-700">About</p>
              <h1 className="font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-foreground md:text-[68px] lg:text-[84px]">
                About agentii.Solutions
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy bg-background">
        <div className="mx-auto flex max-w-[1280px] gap-[6px] overflow-hidden px-0 py-0">
          {colorBar.map((bar, index) => (
            <span key={index} className={`${bar} block h-3 shrink-0`} aria-hidden="true" />
          ))}
          <span className="block h-3 flex-1 bg-teal-light" aria-hidden="true" />
        </div>
      </div>

      <div className="bg-secondary py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-[920px]">
            <h2 className="font-brand text-[34px] leading-[1.05] tracking-[-0.02em] text-foreground md:text-[48px] lg:text-[60px]">
              We build agentic-native data systems that make AI useful in production.
            </h2>
          </div>

          <div className="mt-12 grid gap-0 border border-border bg-background lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
              <div>
                <div className="mb-8 h-1.5 w-10 bg-purple" aria-hidden="true" />
                <p className="max-w-[480px] text-lg leading-relaxed text-foreground">
                  Since our founding, we have focused on structured data for agents: document intelligence, multimodal training sets, and synthetic reasoning traces that can be trusted in real workflows.
                </p>
                <p className="mt-6 max-w-[480px] text-base leading-relaxed text-muted-foreground">
                  We combine research fluency, delivery rigor, and lattice-based system design to turn raw enterprise inputs into machine-readable assets for training, evaluation, and automation.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-lg px-8">
                  Explore customer stories
                </Button>
                <Button variant="outline" size="lg" className="rounded-lg px-8">
                  Our platform approach
                </Button>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border-t border-border bg-teal-light lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-70" aria-hidden="true" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-border" aria-hidden="true" />
              <div className="absolute right-10 top-10 h-24 w-24 border border-primary/30" aria-hidden="true" />
              <div className="absolute right-20 top-20 h-24 w-24 border border-purple/30" aria-hidden="true" />

              <div className="relative flex h-full flex-col justify-between p-8 md:p-10 lg:p-12">
                <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
                  {signals.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="bg-background px-4 py-4">
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                        <Icon className="h-4 w-4 text-primary" />
                        {label}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-foreground">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 self-end border border-navy bg-background px-5 py-4 shadow-sm">
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">Operating model</p>
                  <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-foreground">
                    Research-grade data design, production-grade execution, and measurable outcomes for enterprise AI teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
