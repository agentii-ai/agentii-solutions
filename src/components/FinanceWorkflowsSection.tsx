import { ArrowRight, Building2, FileText, Scale, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflows = [
  {
    title: "Credit Underwriting",
    description: "Extract financial statements, tax returns, and bank statements into typed records. Agents calculate debt-service coverage ratios, verify income, and flag exceptions — all from structured data with field lineage.",
    icon: TrendingUp,
    documents: ["Tax returns", "Bank statements", "Financial statements"],
  },
  {
    title: "Accounts Payable Reconciliation",
    description: "Match invoices to purchase orders and payment records. Agents reconcile line items, detect discrepancies, and route exceptions to review queues — with full audit trails from source documents.",
    icon: FileText,
    documents: ["Invoices", "Purchase orders", "Payment records"],
  },
  {
    title: "Regulatory Compliance",
    description: "Extract data from 10-Ks, 10-Qs, and regulatory filings into GAAP/IFRS-mapped structures. Compliance agents verify disclosures, check calculations, and generate audit-ready reports.",
    icon: Scale,
    documents: ["10-K filings", "10-Q filings", "Regulatory reports"],
  },
  {
    title: "Commercial Loan Booking",
    description: "Process loan applications, credit memos, and collateral documents into structured records. Agents validate terms, calculate risk metrics, and route approvals — with evidence traces for every decision.",
    icon: Building2,
    documents: ["Loan applications", "Credit memos", "Collateral docs"],
  },
];

const FinanceWorkflowsSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Financial workflows
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            From documents to decisions — no manual data entry.
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

export default FinanceWorkflowsSection;
