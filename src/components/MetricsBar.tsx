import { useTranslation } from 'react-i18next';
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MetricsBar = () => {
  const { t } = useTranslation('home');

  const solutionCards = [
    {
      title: t('metrics.foundational.title'),
      description: t('metrics.foundational.description'),
      accent: "text-teal",
    },
    {
      title: t('metrics.business.title'),
      description: t('metrics.business.description'),
      accent: "text-primary",
      badge: t('metrics.business.badge'),
      badgeNote: t('metrics.business.badgeNote'),
    },
    {
      title: t('metrics.purposeBuilt.title'),
      description: t('metrics.purposeBuilt.description'),
      accent: "text-teal",
    },
  ];
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-navy py-20 lg:py-24" aria-labelledby="platform-section-heading" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[720px] mb-10 lg:mb-12">
          <h2
            id="platform-section-heading"
            className={`font-brand text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.02em] text-slate-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {t('metrics.heading')}
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {solutionCards.map((card, i) => (
            <article
              key={card.title}
              className={`min-h-[264px] border border-slate-700/80 bg-slate/70 p-6 lg:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-slate-400 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: isVisible ? `${150 + i * 120}ms` : undefined }}
            >
              <h3 className={`font-brand text-[28px] font-semibold leading-tight ${card.accent}`}>
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-8 text-slate-400">{card.description}</p>

              {card.badge && (
                <div className="mt-10 border-t border-slate-700 pt-5">
                  <div className={`inline-flex items-center gap-3 ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: isVisible ? `${500 + i * 120}ms` : undefined }}>
                    <span className="font-brand text-xl font-bold text-slate-200">AI</span>
                    <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-slate-200">
                      {card.badge}
                    </span>
                  </div>
                  <p className="mt-4 max-w-[280px] text-sm leading-6 text-slate-400">{card.badgeNote}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <article className={`mt-3 border border-slate-700/80 bg-slate/70 p-6 lg:p-7 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: isVisible ? "600ms" : undefined }}>
          <h3 className="font-brand text-[28px] font-semibold leading-tight text-teal">
            {t('metrics.platform.title')}
          </h3>
          <p className="mt-2 max-w-[920px] text-lg leading-8 text-slate-400">
            {t('metrics.platform.description')}
          </p>

          <div className="mt-10 border-t border-slate-700 pt-5">
            <div className="inline-flex flex-wrap items-center gap-3">
              <span className="font-brand text-2xl font-bold text-slate-200">OPS</span>
              <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-slate-200">
                {t('metrics.platform.badge')}
              </span>
            </div>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-slate-400">
              {t('metrics.platform.badgeNote')}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MetricsBar;
