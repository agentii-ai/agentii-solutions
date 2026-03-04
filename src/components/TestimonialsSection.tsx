const testimonials = [
  {
    quote: "agentii.Solutions transformed our document processing pipeline. What used to take weeks now takes hours with higher accuracy than manual review.",
    name: "Sarah Chen",
    title: "VP of Data Engineering, Global Investment Bank",
  },
  {
    quote: "The platform made it easy to bring together data across multiple formats — and helped us automate and accelerate the entire forecasting process.",
    name: "James Park",
    title: "Director of AI/ML, Fortune 500 Insurance",
  },
  {
    quote: "Their agentic approach to video data annotation reduced our training data costs by 60% while improving model accuracy across the board.",
    name: "Elena Volkov",
    title: "Head of AI Training, Video AI Startup",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero-mesh" />
      <div className="container relative mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-slate-200 leading-tight tracking-tight mb-16">
          Don't take our word for it
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-slate-700 bg-slate/50 p-6 lg:p-8 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-400/30"
            >
              <span className="text-3xl text-teal font-brand leading-none">"</span>
              <p className="text-[15px] text-slate-200 leading-relaxed mb-6 mt-2">
                {t.quote}
              </p>
              <div className="border-t border-slate-700 pt-4">
                <p className="text-sm font-semibold text-slate-200">{t.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
