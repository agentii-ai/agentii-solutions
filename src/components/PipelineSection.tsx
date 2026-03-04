import { Upload, Bot, CheckCircle, Send } from "lucide-react";

const steps = [
  { icon: Upload, label: "Ingest", description: "Connect any data source — documents, video, audio, APIs", color: "border-primary bg-primary/5" },
  { icon: Bot, label: "Annotate", description: "AI agents process, classify, and enrich your data automatically", color: "border-teal bg-teal/5" },
  { icon: CheckCircle, label: "Validate", description: "Human-in-the-loop QA with real-time accuracy monitoring", color: "border-teal bg-teal/5" },
  { icon: Send, label: "Deliver", description: "Export agent-ready structured data to any downstream system", color: "border-cyan bg-cyan/5" },
];

const PipelineSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero-mesh" />
      <div className="container relative mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-slate-200 leading-tight tracking-tight mb-4">
          How it works
        </h2>
        <p className="text-lg text-slate-400 max-w-[560px] mb-16">
          Four steps from raw data to agent-ready intelligence.
        </p>

        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px border-t-2 border-dashed border-slate-700" />
              )}
              <div className={`w-16 h-16 flex items-center justify-center border-2 ${step.color} mb-4 transition-all duration-200 group-hover:scale-105`}>
                <step.icon size={24} className="text-teal" />
              </div>
              <span className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">
                {step.label}
              </span>
              <p className="text-sm text-slate-400 max-w-[200px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
