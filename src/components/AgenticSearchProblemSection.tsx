import { AlertTriangle, Search, Shuffle } from "lucide-react";
import { useTranslation } from "react-i18next";

const AgenticSearchProblemSection = () => {
  const { t } = useTranslation('research');

  const problems = [
    {
      title: t('problem.semanticMismatch'),
      description: t('problem.semanticMismatchDesc'),
      icon: Search,
    },
    {
      title: t('problem.noReasoning'),
      description: t('problem.noReasoningDesc'),
      icon: Shuffle,
    },
    {
      title: t('problem.hallucination'),
      description: t('problem.hallucinationDesc'),
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="bg-secondary py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {t('problem.breadcrumb')}
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            {t('problem.heading')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t('problem.description')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {problems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border border-border bg-background p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center border border-destructive/20 bg-destructive/5 text-destructive">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-brand text-[24px] leading-tight text-foreground">
                {title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-border bg-background p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-destructive/20 bg-destructive/5 text-destructive">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div>
              <p className="font-brand text-[18px] leading-tight text-foreground">
                {t('problem.coreIssue')}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t('problem.coreIssueDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchProblemSection;
