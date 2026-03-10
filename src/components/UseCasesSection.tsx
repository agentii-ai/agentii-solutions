import { useState } from "react";
import { useTranslation } from "react-i18next";

const UseCasesSection = () => {
  const { t } = useTranslation('home');
  const [active, setActive] = useState("All");

  const categories = ["All", "Finance", "Insurance", "Video AI", "Synthetic Data"];

  const categoryDisplayMap: Record<string, string> = {
    "All": t('useCases.categories.all'),
    "Finance": t('useCases.categories.finance'),
    "Insurance": t('useCases.categories.insurance'),
    "Video AI": t('useCases.categories.videoAI'),
    "Synthetic Data": t('useCases.categories.syntheticData'),
  };

  const useCases = t('useCases.items', { returnObjects: true }) as Array<{ title: string; category: string; description: string }>;

  const filtered = active === "All" ? useCases : useCases.filter((u) => u.category === active);

  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-foreground leading-tight tracking-tight mb-4">
          {t('useCases.heading')}
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          {t('useCases.subheading')}
        </p>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium border transition-all duration-150 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-gray-300"
              }`}
            >
              {categoryDisplayMap[cat]}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((uc, i) => (
            <div
              key={i}
              className="border border-border p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-sm"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-dark bg-teal-light px-3 py-1 mb-4">
                {categoryDisplayMap[uc.category] ?? uc.category}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
