const solutionCards = [
  {
    title: "Foundational agents",
    description:
      "Core data pipelines and evaluation layers that make enterprise agent systems stable, auditable, and fast to deploy.",
    accent: "text-teal",
  },
  {
    title: "Business agents",
    description:
      "Integrations, structured workflows, and machine-readable outputs that connect agent operations to production systems.",
    accent: "text-primary",
    badge: "CERTIFIED DELIVERY LAYER",
    badgeNote: "Built for workflow orchestration, semantic enrichment, and downstream system compatibility.",
  },
  {
    title: "Purpose-built agents",
    description:
      "Outcome-specific agent stacks designed for financial documents, multimodal review, and synthetic data generation.",
    accent: "text-teal",
  },
];

const MetricsBar = () => {
  return (
    <section className="bg-navy py-20 lg:py-24" aria-labelledby="platform-section-heading">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[720px] mb-10 lg:mb-12">
          <h2
            id="platform-section-heading"
            className="font-brand text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.02em] text-slate-200"
          >
            Deliberately designed to unify complex enterprise data environments.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {solutionCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[264px] border border-slate-700/80 bg-slate/70 p-6 lg:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-slate-400"
            >
              <h3 className={`font-brand text-[28px] font-semibold leading-tight ${card.accent}`}>
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-8 text-slate-400">{card.description}</p>

              {card.badge && (
                <div className="mt-10 border-t border-slate-700 pt-5">
                  <div className="inline-flex items-center gap-3">
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

        <article className="mt-3 border border-slate-700/80 bg-slate/70 p-6 lg:p-7">
          <h3 className="font-brand text-[28px] font-semibold leading-tight text-teal">
            Agent Workforce Platform
          </h3>
          <p className="mt-2 max-w-[920px] text-lg leading-8 text-slate-400">
            The end-to-end operating layer for secure, scalable, production-grade agent data workflows across document, video, and synthetic pipelines.
          </p>

          <div className="mt-10 border-t border-slate-700 pt-5">
            <div className="inline-flex flex-wrap items-center gap-3">
              <span className="font-brand text-2xl font-bold text-slate-200">OPS</span>
              <span className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-slate-200">
                CO-ENGINEERED FOR ENTERPRISE DEPLOYMENT
              </span>
            </div>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-slate-400">
              Governance, QA, and agent-ready delivery in one lattice-based platform built for regulated environments.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MetricsBar;
