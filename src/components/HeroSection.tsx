import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Video, Database } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] gradient-hero overflow-hidden flex items-center">
      {/* Mesh overlay */}
      <div className="absolute inset-0 gradient-hero-mesh" />

      <div className="container relative mx-auto px-6 lg:px-12 pt-[72px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="max-w-[640px]">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-teal mb-4">
              Agentic-Native Data Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-200 leading-[1.1] tracking-tight mb-6">
              Data by Agents,
              <br />
              for Agents.
            </h1>
            <p className="text-lg text-slate-400 max-w-[520px] leading-relaxed mb-8">
              The hard part? Making agentic AI work in the enterprise.
              That's where we come in. Transform unstructured data into
              agent-ready intelligence at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Contact Us
              </Button>
              <Button variant="outlineLight" size="lg">
                Learn More <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Hero Visual: Pipeline Diagram */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Pipeline nodes */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: FileText, label: "Document Ingestion", color: "border-primary", step: "01" },
                  { icon: Database, label: "AI Processing", color: "border-teal", step: "02" },
                  { icon: Video, label: "Multi-Modal Analysis", color: "border-teal", step: "03" },
                  { icon: ArrowRight, label: "Agent-Ready Output", color: "border-cyan", step: "04" },
                ].map((node, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="font-mono text-xs text-slate-400 w-6">{node.step}</span>
                    <div
                      className={`flex items-center gap-3 bg-slate/80 border ${node.color} px-5 py-4 w-full backdrop-blur-sm transition-all duration-200 hover:translate-x-1`}
                    >
                      <node.icon size={20} className="text-teal shrink-0" />
                      <span className="text-sm font-medium text-slate-200">{node.label}</span>
                    </div>
                    {i < 3 && (
                      <div className="absolute left-[38px] w-px h-4 bg-gray-300/20" style={{ top: `${88 + i * 68}px` }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
