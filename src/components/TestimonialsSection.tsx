import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation('home');

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{ quote: string; name: string; title: string }>;

  return (
    <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero-mesh" />
      <div className="container relative mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-slate-200 leading-tight tracking-tight mb-16">
          {t('testimonials.heading')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="border border-slate-700 bg-slate/50 p-6 lg:p-8 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-400/30"
            >
              <span className="text-3xl text-teal font-brand leading-none">"</span>
              <p className="text-[15px] text-slate-200 leading-relaxed mb-6 mt-2">
                {item.quote}
              </p>
              <div className="border-t border-slate-700 pt-4">
                <p className="text-sm font-semibold text-slate-200">{item.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
