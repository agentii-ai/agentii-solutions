import { Upload, Bot, CheckCircle, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const PipelineSection = () => {
  const { t } = useTranslation('home');

  const steps = [
    { icon: Upload, label: t('pipeline.ingest.label'), description: t('pipeline.ingest.description'), color: "border-primary bg-primary/5" },
    { icon: Bot, label: t('pipeline.annotate.label'), description: t('pipeline.annotate.description'), color: "border-teal bg-teal/5" },
    { icon: CheckCircle, label: t('pipeline.validate.label'), description: t('pipeline.validate.description'), color: "border-teal bg-teal/5" },
    { icon: Send, label: t('pipeline.deliver.label'), description: t('pipeline.deliver.description'), color: "border-cyan bg-cyan/5" },
  ];

  return (
    <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero-mesh" />
      <div className="container relative mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-slate-200 leading-tight tracking-tight mb-4">
          {t('pipeline.heading')}
        </h2>
        <p className="text-lg text-slate-400 max-w-[560px] mb-16">
          {t('pipeline.subheading')}
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
