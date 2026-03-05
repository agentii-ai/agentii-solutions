import { ArrowRight, FileText, Landmark, HeartPulse, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    title: "Financial Services",
    description: "SEC filings, bank statements, loan documents, financial statements. Agents calculate ratios, verify disclosures, and reconcile across documents with field-level evidence.",
    icon: Landmark,
    link: "/use-cases/finance",
  },
  {
    title: "Insurance",
    description: "ACORD forms, policy documents, claims files, medical records. Agents determine coverage, estimate reserves, and flag inconsistencies with clause-level traceability.",
    icon: HeartPulse,
    link: "/use-cases/insurance",
  },
  {
    title: "Legal & Compliance",
    description: "Contracts, regulatory filings, audit reports, disclosure documents. Agents extract obligations, compare terms, and verify compliance with cross-reference evidence.",
    icon: Scale,
    link: "#",
  },
  {
    title: "Document-Heavy Operations",
    description: "Any workflow where agents need to reason over structured and unstructured documents — invoices, applications, reports, correspondence — with production-grade accuracy.",
    icon: FileText,
    link: "/solutions/document-processing",
  },
];

const AgenticSearchUseCasesSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Applications
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            Where agentic search delivers.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Agentic search is purpose-built for regulated, document-heavy industries where accuracy isn't optional and every answer needs an evidence trail.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {useCases.map(({ title, description, icon: Icon, link }) => (
            <article
              key={title}
              className="border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-brand text-[24px] leading-tight text-foreground">{title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
              <a
                href={link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Explore use case <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchUseCasesSection;
