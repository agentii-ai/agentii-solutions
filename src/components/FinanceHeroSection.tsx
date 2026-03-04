import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const topBars = [
  "bg-primary/95 w-6",
  "bg-primary/80 w-4",
  "bg-teal/90 w-3",
  "bg-teal/70 w-2.5",
  "bg-cyan/80 w-3",
  "bg-primary/70 w-2.5",
  "bg-primary/55 w-4",
  "bg-slate-200/90 w-3",
  "bg-slate-200/70 w-2.5",
  "bg-slate-400/70 w-4",
  "bg-slate-400/45 w-5",
  "bg-primary/35 w-6",
  "bg-teal/55 w-8",
  "bg-teal/70 w-12",
  "bg-primary/45 w-16",
];

const bottomBars = [
  "bg-primary/35 w-8",
  "bg-primary/55 w-3",
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
  "bg-primary/35 w-16",
  "bg-cyan/35 w-20",
  "bg-teal/40 w-16",
  "bg-teal/55 w-24",
];

const FinanceHeroSection = () => {
  return (
    <section className="bg-background pt-[88px] md:pt-[96px]">
      <div className="bg-navy text-slate-200">
        <div className="container mx-auto px-6 lg:px-12 pt-16 pb-0 md:pt-24 lg:pt-28">
          <div className="max-w-[760px] pb-14 md:pb-20">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="h-[3px] w-4 bg-primary" aria-hidden="true" />
              Use Cases
            </div>
            <h1 className="font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
              Agentic data for
              <br />
              finance workflows.
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container mx-auto grid items-end gap-0 px-0 md:grid-cols-[minmax(0,560px)_1fr] lg:px-12">
          <div className="px-6 py-10 md:px-10 md:py-12 lg:px-12">
            <p className="max-w-[460px] text-lg leading-relaxed text-foreground md:text-[20px]">
              Turn complex financial documents, reconciliations, and reasoning traces into machine-readable data that agents can execute on.
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

          <div className="relative min-h-[220px] overflow-hidden bg-navy px-4 py-6 md:min-h-[240px] md:px-0">
            <div className="absolute inset-y-0 left-0 hidden w-px bg-slate-700/70 md:block" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-secondary" aria-hidden="true" />

            <div className="relative flex h-[72px] items-end gap-[10px] md:ml-2 md:mr-8 lg:mr-0">
              {topBars.map((bar, index) => (
                <span
                  key={`top-${index}`}
                  className={`${bar} block h-full shrink-0 transition-transform duration-300 hover:-translate-y-1`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="relative mt-0 flex h-[72px] items-start gap-[10px] md:mr-0">
              {bottomBars.map((bar, index) => (
                <span
                  key={`bottom-${index}`}
                  className={`${bar} block h-full shrink-0 transition-transform duration-300 hover:translate-y-1`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceHeroSection;
