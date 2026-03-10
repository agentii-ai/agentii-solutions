import { useTranslation } from 'react-i18next';

const SyntheticUseCaseComparisonSection = () => {
  const { t } = useTranslation('usecases');

  const comparisonRows = t('syntheticUseCase.comparison.rows', { returnObjects: true }) as {
    capability: string; method: string; verification: string; scale: string; format: string;
  }[];

  const footerCards = t('syntheticUseCase.comparison.footerCards', { returnObjects: true }) as {
    label: string; value: string;
  }[];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--color-purple-dark))]">
              {t('syntheticUseCase.comparison.breadcrumb')}
            </p>
            <h2 className="mt-4 font-brand text-[34px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
              {t('syntheticUseCase.comparison.heading')}
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-base leading-8 text-muted-foreground md:text-lg">
              {t('syntheticUseCase.comparison.description')}
            </p>
          </div>

          <div className="mt-14 overflow-hidden border border-border bg-background shadow-[0_18px_50px_-34px_hsl(var(--color-navy)/0.18)]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead className="border-b border-border bg-secondary">
                  <tr className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    <th className="px-5 py-4 font-medium">{t('syntheticUseCase.comparison.tableHeaders.capability')}</th>
                    <th className="px-5 py-4 font-medium">{t('syntheticUseCase.comparison.tableHeaders.generationMethod')}</th>
                    <th className="px-5 py-4 font-medium">{t('syntheticUseCase.comparison.tableHeaders.verification')}</th>
                    <th className="px-5 py-4 font-medium">{t('syntheticUseCase.comparison.tableHeaders.scale')}</th>
                    <th className="px-5 py-4 font-medium">{t('syntheticUseCase.comparison.tableHeaders.outputFormat')}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.capability}
                      className={`border-b border-border transition-colors duration-150 hover:bg-[hsl(var(--color-gray-50))] ${index % 2 === 0 ? "bg-background" : "bg-[hsl(var(--color-gray-50))]"}`}
                    >
                      <td className="px-5 py-4 text-sm font-semibold text-[hsl(var(--color-purple-dark))]">{row.capability}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{row.method}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{row.verification}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{row.scale}</td>
                      <td className="px-5 py-4 font-mono-data text-[12px] text-muted-foreground">{row.format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
            {footerCards.map((card) => (
              <div key={card.label} className="bg-background px-6 py-5">
                <p className="font-mono-data text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{card.label}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticUseCaseComparisonSection;
