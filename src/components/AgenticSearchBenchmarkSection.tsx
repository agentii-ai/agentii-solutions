import { Database, Network, Sigma } from "lucide-react";
import { useTranslation } from "react-i18next";

const AgenticSearchBenchmarkSection = () => {
  const { t } = useTranslation('research');

  const benchmarkRows = [
    {
      label: t('benchmark.traditionalRag'),
      description: t('benchmark.traditionalRagDesc'),
      pct: 28,
    },
    {
      label: t('benchmark.kgRag'),
      description: t('benchmark.kgRagDesc'),
      pct: 65,
    },
    {
      label: t('benchmark.agenticSearch'),
      description: t('benchmark.agenticSearchDesc'),
      pct: 99,
    },
  ];

  const comparisonRows = [
    { dimension: t('benchmark.retrievalUnit'), rag: t('benchmark.ragRetrievalUnit'), agentic: t('benchmark.agenticRetrievalUnit') },
    { dimension: t('benchmark.queryResolution'), rag: t('benchmark.ragQueryResolution'), agentic: t('benchmark.agenticQueryResolution') },
    { dimension: t('benchmark.verification'), rag: t('benchmark.ragVerification'), agentic: t('benchmark.agenticVerification') },
    { dimension: t('benchmark.evidence'), rag: t('benchmark.ragEvidence'), agentic: t('benchmark.agenticEvidence') },
    { dimension: t('benchmark.structuredData'), rag: t('benchmark.ragStructuredData'), agentic: t('benchmark.agenticStructuredData') },
    { dimension: t('benchmark.failureMode'), rag: t('benchmark.ragFailureMode'), agentic: t('benchmark.agenticFailureMode') },
  ];

  const capabilities = [
    {
      title: t('benchmark.financialQA'),
      description: t('benchmark.financialQADesc'),
      icon: Sigma,
    },
    {
      title: t('benchmark.insuranceClaims'),
      description: t('benchmark.insuranceClaimsDesc'),
      icon: Network,
    },
    {
      title: t('benchmark.legalCompliance'),
      description: t('benchmark.legalComplianceDesc'),
      icon: Database,
    },
  ];

  return (
    <section className="bg-secondary py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t('benchmark.breadcrumb')}
            </p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[62px]">
              {t('benchmark.heading')}
            </h2>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              {t('benchmark.description')}
            </p>

            <div className="mt-10 grid gap-4">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div key={title} className="border border-border bg-background p-5">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-brand text-[18px] leading-tight text-foreground">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t('benchmark.documentQA')}
                </p>
                <p className="mt-2 font-brand text-[28px] leading-tight text-foreground">
                  {t('benchmark.benchmarkComparison')}
                </p>
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
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{row.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {t('benchmark.headToHead')}
              </p>
              <p className="mt-2 font-brand text-[22px] leading-tight text-foreground">
                {t('benchmark.ragVsAgentic')}
              </p>

              <div className="mt-6 space-y-0">
                {comparisonRows.map((row, index) => (
                  <div
                    key={row.dimension}
                    className={`grid grid-cols-[1fr_1fr_1fr] gap-4 py-4 ${
                      index !== comparisonRows.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold text-foreground">{row.dimension}</p>
                    <p className="text-xs text-muted-foreground">{row.rag}</p>
                    <p className="text-xs text-primary">{row.agentic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchBenchmarkSection;
