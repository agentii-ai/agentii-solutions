import { useState } from "react";

const categories = ["All", "Finance", "Insurance", "Video AI", "Synthetic Data"];

const useCases = [
  { title: "Financial Statement Extraction", category: "Finance", description: "Automatically parse and structure 10-K, 10-Q, and annual reports into structured datasets." },
  { title: "Insurance Claims Processing", category: "Insurance", description: "Extract key data from claims forms, medical records, and policy documents at scale." },
  { title: "Video Training Data Pipeline", category: "Video AI", description: "Generate frame-level annotations and structured metadata for video model training." },
  { title: "Synthetic Financial Records", category: "Synthetic Data", description: "Create realistic synthetic transaction data for model training without privacy risks." },
  { title: "KYC Document Verification", category: "Finance", description: "Automate identity document processing and verification for compliance workflows." },
  { title: "Multi-Modal Content Analysis", category: "Video AI", description: "Process video, audio, and text simultaneously for comprehensive content understanding." },
];

const UseCasesSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? useCases : useCases.filter((u) => u.category === active);

  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-foreground leading-tight tracking-tight mb-4">
          Use cases by industry
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Built for outcomes — not endless pilots.
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
              {cat}
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
                {uc.category}
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
