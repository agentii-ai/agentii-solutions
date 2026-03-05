import { ArrowRight, ClipboardCheck, FileText, HeartPulse, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflows = [
  {
    title: "Claims Processing",
    description: "Extract claim forms, loss reports, and supporting documents into typed records. Agents validate coverage, calculate reserves, and route approvals — with evidence traces linking every decision to source documents.",
    icon: ClipboardCheck,
    documents: ["ACORD forms", "Loss reports", "Police reports"],
  },
  {
    title: "Underwriting",
    description: "Process applications, financial statements, and risk assessments into structured records. Agents score risk, verify disclosures, and flag exceptions — all from GAAP-mapped data with field lineage.",
    icon: ShieldCheck,
    documents: ["Applications", "Financial statements", "Risk assessments"],
  },
  {
    title: "Medical Records Review",
    description: "Extract diagnoses, treatment histories, and billing codes from medical records and EOBs. Agents cross-reference claims against policy terms and flag inconsistencies for adjuster review.",
    icon: HeartPulse,
    documents: ["Medical records", "EOBs", "Physician notes"],
  },
  {
    title: "Policy Administration",
    description: "Parse policy documents, endorsements, and renewal packages into clause-mapped structures. Agents compare terms, detect coverage gaps, and generate compliance reports with full audit trails.",
    icon: FileText,
    documents: ["Policy documents", "Endorsements", "Renewal packages"],
  },
];

const InsuranceWorkflowsSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Insurance workflows
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            From intake to adjudication — no manual data entry.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every workflow starts with document extraction. Every extraction ends with agent-ready records.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {workflows.map(({ title, description, icon: Icon, documents }) => (
            <article
              key={title}
              className="border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-brand text-[24px] leading-tight text-foreground">{title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {documents.map((doc) => (
                  <span
                    key={doc}
                    className="inline-flex items-center border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="rounded-lg px-8">
            Explore All Use Cases <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceWorkflowsSection;
