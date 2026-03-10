import { ArrowRight, Building2, FileText, Scale, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const FinanceWorkflowsSection = () => {
  const { t } = useTranslation('usecases');

  const workflows = [
    {
      title: t('finance.workflows.creditUnderwriting'),
      description: t('finance.workflows.creditUnderwritingDesc'),
      icon: TrendingUp,
      documents: t('finance.workflows.creditUnderwritingDocs', { returnObjects: true }) as string[],
    },
    {
      title: t('finance.workflows.accountsPayable'),
      description: t('finance.workflows.accountsPayableDesc'),
      icon: FileText,
      documents: t('finance.workflows.accountsPayableDocs', { returnObjects: true }) as string[],
    },
    {
      title: t('finance.workflows.regulatoryCompliance'),
      description: t('finance.workflows.regulatoryComplianceDesc'),
      icon: Scale,
      documents: t('finance.workflows.regulatoryComplianceDocs', { returnObjects: true }) as string[],
    },
    {
      title: t('finance.workflows.commercialLoan'),
      description: t('finance.workflows.commercialLoanDesc'),
      icon: Building2,
      documents: t('finance.workflows.commercialLoanDocs', { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {t('finance.workflows.breadcrumb')}
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            {t('finance.workflows.heading')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t('finance.workflows.subheading')}
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
            {t('finance.workflows.exploreAllUseCases')} <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinanceWorkflowsSection;
