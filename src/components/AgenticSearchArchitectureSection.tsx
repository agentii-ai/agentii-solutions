import { Bot, GitBranch, Layers, Network, RefreshCw, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const AgenticSearchArchitectureSection = () => {
  const { t } = useTranslation('research');

  const architectureLayers = [
    {
      title: t('architecture.entityGraph'),
      description: t('architecture.entityGraphDesc'),
      icon: Network,
    },
    {
      title: t('architecture.multiAgent'),
      description: t('architecture.multiAgentDesc'),
      icon: Bot,
    },
    {
      title: t('architecture.iterativeRefinement'),
      description: t('architecture.iterativeRefinementDesc'),
      icon: RefreshCw,
    },
    {
      title: t('architecture.fieldLineage'),
      description: t('architecture.fieldLineageDesc'),
      icon: GitBranch,
    },
    {
      title: t('architecture.schemaAware'),
      description: t('architecture.schemaAwareDesc'),
      icon: Layers,
    },
    {
      title: t('architecture.confidenceGated'),
      description: t('architecture.confidenceGatedDesc'),
      icon: Shield,
    },
  ];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {t('architecture.breadcrumb')}
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            {t('architecture.heading')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t('architecture.description')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {architectureLayers.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-brand text-[22px] leading-tight text-foreground">
                {title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchArchitectureSection;
