import { ArrowRight, Play, ScanLine, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const topBars = [
  "bg-teal/95 w-6",
  "bg-teal/80 w-4",
  "bg-primary/85 w-3",
  "bg-primary/65 w-2.5",
  "bg-cyan/85 w-3",
  "bg-teal/70 w-2.5",
  "bg-teal/55 w-4",
  "bg-slate-200/90 w-3",
  "bg-slate-200/70 w-2.5",
  "bg-slate-400/70 w-4",
  "bg-slate-400/45 w-5",
  "bg-primary/40 w-6",
  "bg-cyan/55 w-8",
  "bg-teal/70 w-12",
  "bg-teal/45 w-16",
];

const bottomBars = [
  "bg-teal/35 w-8",
  "bg-teal/55 w-3",
  "bg-primary/75 w-2.5",
  "bg-primary/90 w-3",
  "bg-cyan/80 w-2.5",
  "bg-teal/65 w-3",
  "bg-teal/45 w-4",
  "bg-primary/95 w-3",
  "bg-primary/80 w-2.5",
  "bg-slate-200/90 w-3",
  "bg-slate-200/65 w-4",
  "bg-slate-400/40 w-5",
  "bg-teal/35 w-16",
  "bg-cyan/35 w-20",
  "bg-primary/40 w-16",
  "bg-teal/55 w-24",
];

const signalCards = [
  {
    label: "Scene Graph",
    value: "Objects · motion · timing",
    icon: ScanLine,
  },
  {
    label: "Prompt Trace",
    value: "Frame-level semantic control",
    icon: Sparkles,
  },
  {
    label: "Playback",
    value: "Agent-ready video reasoning data",
    icon: Play,
  },
];

const VideoHeroSection = () => {
  return (
    <section className="bg-background pt-[88px] md:pt-[96px]">
      <div className="bg-navy text-slate-200">
        <div className="container mx-auto px-6 lg:px-12 pt-16 pb-0 md:pt-24 lg:pt-28">
          <div className="max-w-[820px] pb-14 md:pb-20">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="h-[3px] w-4 bg-teal" aria-hidden="true" />
              Use Cases
            </div>
            <h1 className="font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
              Agentic data for
              <br />
              video generation.
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container mx-auto grid items-stretch gap-0 px-0 md:grid-cols-[minmax(0,560px)_1fr] lg:px-12">
          <div className="flex flex-col justify-between px-6 py-10 md:px-10 md:py-12 lg:px-12">
            <div>
              <p className="max-w-[500px] text-lg leading-relaxed text-foreground md:text-[20px]">
                Turn scenes, motion, camera intent, and temporal consistency into machine-readable datasets that agents can use to train and evaluate video models.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-lg px-8">
                  Request a Demo
                </Button>
                <Button variant="outline" size="lg" className="rounded-lg px-8">
                  Explore Features <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
              {signalCards.map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-background px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    <Icon className="h-4 w-4 text-teal" />
                    {label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-navy px-4 py-6 md:px-0 md:py-0">
            <div className="absolute inset-y-0 left-0 hidden w-px bg-slate-700/70 md:block" aria-hidden="true" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--slate-700)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--slate-700)/0.2)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60" aria-hidden="true" />
            <div className="absolute right-8 top-8 hidden h-24 w-24 border border-teal/30 md:block" aria-hidden="true" />
            <div className="absolute right-16 top-16 hidden h-24 w-24 border border-primary/25 md:block" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-secondary" aria-hidden="true" />

            <div className="relative flex min-h-[260px] flex-col justify-center px-2 py-10 md:min-h-[320px] md:px-8 lg:px-10">
              <div className="mb-5 flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Video signal stack</p>
                  <p className="mt-2 text-sm text-slate-300">Frames, motion vectors, prompts, and evaluation traces.</p>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-teal" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500" aria-hidden="true" />
                </div>
              </div>

              <div className="relative flex h-[72px] items-end gap-[10px] md:mr-8 lg:mr-0">
                {topBars.map((bar, index) => (
                  <span
                    key={`top-${index}`}
                    className={`${bar} block h-full shrink-0 transition-transform duration-300 hover:-translate-y-1`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="relative mt-4 flex h-[72px] items-start gap-[10px] md:mr-0">
                {bottomBars.map((bar, index) => (
                  <span
                    key={`bottom-${index}`}
                    className={`${bar} block h-full shrink-0 transition-transform duration-300 hover:translate-y-1`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="mt-6 grid gap-px border border-slate-700/80 bg-slate-700/80 sm:grid-cols-3">
                <div className="bg-navy px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Input</p>
                  <p className="mt-2 text-sm text-slate-200">Prompt + storyboard + motion rules</p>
                </div>
                <div className="bg-navy px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Output</p>
                  <p className="mt-2 text-sm text-slate-200">Dense labels across time and scene state</p>
                </div>
                <div className="bg-navy px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Use</p>
                  <p className="mt-2 text-sm text-slate-200">Training, evals, and controllability benchmarks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroSection;
