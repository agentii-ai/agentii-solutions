import { ArrowRight, Database, Network, Sigma } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const InsuranceDataMappingSection = () => {
  const { t } = useTranslation('usecases');

  const benchmarkRows = [
    { label: t('insurance.dataMapping.benchmarkRows.traditionalRag.label'), value: t('insurance.dataMapping.benchmarkRows.traditionalRag.value'), pct: 28 },
    { label: t('insurance.dataMapping.benchmarkRows.kgRag.label'), value: t('insurance.dataMapping.benchmarkRows.kgRag.value'), pct: 65 },
    { label: t('insurance.dataMapping.benchmarkRows.agenticSearch.label'), value: t('insurance.dataMapping.benchmarkRows.agenticSearch.value'), pct: 99 },
  ];

  const capabilities = [
    {
      title: t('insurance.dataMapping.capabilities.claimsReasoning.title'),
      description: t('insurance.dataMapping.capabilities.claimsReasoning.description'),
      icon: Network,
    },
    {
      title: t('insurance.dataMapping.capabilities.policyRetrieval.title'),
      description: t('insurance.dataMapping.capabilities.policyRetrieval.description'),
      icon: Database,
    },
    {
      title: t('insurance.dataMapping.capabilities.reserveCalculation.title'),
      description: t('insurance.dataMapping.capabilities.reserveCalculation.description'),
      icon: Sigma,
    },
  ];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t('insurance.dataMapping.breadcrumb')}
            </p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[62px]">
              {t('insurance.dataMapping.heading')}
            </h2>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              {t('insurance.dataMapping.description')}
            </p>

            <div className="mt-8 max-w-[560px] space-y-4 border-l-2 border-primary pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                {t('insurance.dataMapping.note1')}
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {t('insurance.dataMapping.note2')}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                {t('insurance.dataMapping.readBenchmark')} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                {t('insurance.dataMapping.seeExampleQueries')}
              </Button>
            </div>
          </div>

          <div className="border border-border bg-secondary p-6 shadow-sm md:p-8">
            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t('insurance.dataMapping.chartTitle')}
                  </p>
                  <p className="mt-2 font-brand text-[28px] leading-tight text-foreground">
                    {t('insurance.dataMapping.chartSubtitle')}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                {benchmarkRows.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {row.label}
                      </p>
                      <p className="font-brand text-[20px] text-primary">{row.pct}%</p>
                    </div>
                    <div className="mt-2 h-2 w-full bg-secondary">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div key={title} className="border border-border bg-background p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-brand text-[18px] leading-tight text-foreground">{title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceDataMappingSection;
