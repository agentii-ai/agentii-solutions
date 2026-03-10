import { ArrowRight, FileText, Landmark, HeartPulse, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const AgenticSearchUseCasesSection = () => {
  const { t } = useTranslation('research');

  const useCases = [
    {
      title: t('useCases.financialServices'),
      description: t('useCases.financialServicesDesc'),
      icon: Landmark,
      link: "/use-cases/finance",
    },
    {
      title: t('useCases.insurance'),
      description: t('useCases.insuranceDesc'),
      icon: HeartPulse,
      link: "/use-cases/insurance",
    },
    {
      title: t('useCases.legalCompliance'),
      description: t('useCases.legalComplianceDesc'),
      icon: Scale,
      link: "#",
    },
    {
      title: t('useCases.documentHeavy'),
      description: t('useCases.documentHeavyDesc'),
      icon: FileText,
      link: "/solutions/document-processing",
    },
  ];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {t('useCases.breadcrumb')}
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            {t('useCases.heading')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t('useCases.description')}
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
                {t('useCases.exploreUseCase')} <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchUseCasesSection;
