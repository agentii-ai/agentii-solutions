import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 lg:px-12 pt-[120px] pb-16 lg:pt-[160px] lg:pb-24">
        <div className="max-w-[820px]">
          <h1 className="font-brand text-[32px] md:text-[40px] lg:text-[52px] font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-6">
            Data by agents, for agents.
            <br />
            Agent-Use-Ready Data at Scale.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[580px] leading-relaxed mb-10">
            From financial documents to reasoning traces — structured for agents to act on, not humans to review.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="teal" size="lg" className="rounded-lg px-8">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="rounded-lg px-8">
              Request a Demo <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Abstract Data Visualization Bar */}
      <div className="w-full overflow-hidden px-6 lg:px-12 pb-0">
        <div className="container mx-auto">
          <div className="flex h-12 md:h-16 gap-[2px] items-end max-w-[900px]">
            {/* Row 1 - tall bars */}
            {[
              { w: "w-3", h: "h-full", bg: "bg-primary" },
              { w: "w-2", h: "h-full", bg: "bg-primary/80" },
              { w: "w-1.5", h: "h-[90%]", bg: "bg-foreground" },
              { w: "w-2", h: "h-full", bg: "bg-primary/60" },
              { w: "w-1", h: "h-[85%]", bg: "bg-foreground/70" },
              { w: "w-3", h: "h-full", bg: "bg-primary" },
              { w: "w-1.5", h: "h-[75%]", bg: "bg-teal" },
              { w: "w-2", h: "h-full", bg: "bg-foreground/50" },
              { w: "w-4", h: "h-[95%]", bg: "bg-primary/70" },
              { w: "w-1", h: "h-full", bg: "bg-foreground" },
              { w: "w-6", h: "h-full", bg: "bg-primary/40" },
              { w: "w-2", h: "h-[80%]", bg: "bg-teal/60" },
              { w: "w-3", h: "h-full", bg: "bg-foreground/80" },
              { w: "w-8", h: "h-[90%]", bg: "bg-primary/50" },
              { w: "w-1.5", h: "h-full", bg: "bg-teal" },
              { w: "w-4", h: "h-[85%]", bg: "bg-foreground/40" },
              { w: "w-12", h: "h-full", bg: "bg-primary/30" },
              { w: "w-3", h: "h-[70%]", bg: "bg-teal/80" },
              { w: "w-6", h: "h-full", bg: "bg-primary" },
              { w: "w-2", h: "h-[90%]", bg: "bg-foreground/60" },
              { w: "w-16", h: "h-full", bg: "bg-teal/40" },
              { w: "w-4", h: "h-[75%]", bg: "bg-primary/60" },
              { w: "w-24", h: "h-full", bg: "bg-teal/50" },
            ].map((bar, i) => (
              <div key={i} className={`${bar.w} ${bar.h} ${bar.bg} shrink-0`} />
            ))}
          </div>
          <div className="flex h-10 md:h-14 gap-[2px] items-start max-w-[600px] mt-[2px]">
            {[
              { w: "w-1", bg: "bg-primary" },
              { w: "w-1.5", bg: "bg-foreground/80" },
              { w: "w-1", bg: "bg-primary/70" },
              { w: "w-2", bg: "bg-foreground" },
              { w: "w-1", bg: "bg-primary/50" },
              { w: "w-1.5", bg: "bg-teal/80" },
              { w: "w-3", bg: "bg-primary/60" },
              { w: "w-1", bg: "bg-foreground/60" },
              { w: "w-4", bg: "bg-primary" },
              { w: "w-2", bg: "bg-teal" },
              { w: "w-6", bg: "bg-primary/40" },
              { w: "w-3", bg: "bg-foreground/30" },
              { w: "w-8", bg: "bg-teal/60" },
              { w: "w-4", bg: "bg-primary/80" },
              { w: "w-12", bg: "bg-teal/40" },
              { w: "w-6", bg: "bg-primary/50" },
            ].map((bar, i) => (
              <div key={i} className={`${bar.w} h-full ${bar.bg} shrink-0`} />
            ))}
          </div>
        </div>
      </div>

      {/* Dark Feature Strip */}
      <div className="bg-navy text-slate-200 py-16 lg:py-20 mt-0">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-brand text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.01em] mb-10 max-w-[720px]">
            The only agentic data platform
            built for outcomes — not endless pilots.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Transform 50+ document formats into agent-ready data.",
              "Launch your first data pipeline in days, not quarters.",
              "Deploy anywhere. On-prem. Hybrid. Cross-cloud.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border border-slate-700 px-5 py-4 bg-slate/50"
              >
                <span className="w-3 h-3 bg-teal shrink-0" />
                <span className="text-sm md:text-[15px] font-medium text-slate-200">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
