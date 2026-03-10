import { ArrowRight, DatabaseZap, Rocket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const SyntheticDataBenefitsSection = () => {
  const { t } = useTranslation('solutions');

  const benefitCards = [
    {
      title: t('syntheticData.benefits.scalability'),
      description: t('syntheticData.benefits.scalabilityDesc'),
      icon: DatabaseZap,
    },
    {
      title: t('syntheticData.benefits.verifiability'),
      description: t('syntheticData.benefits.verifiabilityDesc'),
      icon: Rocket,
    },
    {
      title: t('syntheticData.benefits.diversity'),
      description: t('syntheticData.benefits.diversityDesc'),
      icon: ShieldCheck,
    },
  ];

  const tableRows = t('syntheticData.benefits.outputFormats', { returnObjects: true }) as Array<{
    entity: string;
    state: string;
    metric: string;
    output: string;
  }>;
  return (
    <section className="bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)] py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="font-brand text-[34px] leading-[1.06] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
              {t('syntheticData.benefits.heading')}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {benefitCards.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border border-border bg-background p-6 shadow-[0_18px_50px_-34px_hsl(var(--color-purple)/0.2)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_64px_-34px_hsl(var(--color-purple)/0.28)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[hsl(var(--color-purple-light))] text-[hsl(var(--color-purple-dark))]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-brand text-[22px] leading-tight tracking-[-0.02em] text-foreground md:text-[30px]">
                  {title}
                </h3>
                <p className="mt-4 text-[17px] leading-8 text-foreground/80">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-[620px]">
              <p className="font-brand text-[34px] leading-[1.08] tracking-[-0.03em] text-foreground md:text-[52px]">
                {t('syntheticData.benefits.platformHeading')}
              </p>
            </div>
            <div className="lg:pt-6">
              <Button size="lg" className="rounded-lg bg-[hsl(var(--color-purple-dark))] px-8 text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--color-purple))]">
                {t('buttons.bookDemo', { ns: 'common' })}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-10 overflow-hidden border border-border bg-background shadow-[0_28px_80px_-42px_hsl(var(--color-navy)/0.28)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-border p-8 lg:border-b-0 lg:border-r lg:p-10">
                <p className="font-brand text-[26px] leading-tight tracking-[-0.02em] text-foreground md:text-[38px]">
                  {t('syntheticData.benefits.seedPromptsHeading')}
                </p>
                <p className="mt-5 text-[17px] leading-8 text-foreground/80">
                  {t('syntheticData.benefits.seedPromptsDescription')}
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--color-purple-dark))] transition-colors duration-200 hover:text-[hsl(var(--color-purple))]"
                >
                  {t('buttons.learnMore', { ns: 'common' })}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="bg-[linear-gradient(180deg,hsl(var(--color-gray-50))_0%,hsl(var(--background))_100%)] p-6 lg:p-8">
                <div className="overflow-hidden rounded-[14px] border border-[hsl(var(--color-gray-700))] bg-background shadow-[0_16px_44px_-24px_hsl(var(--color-navy)/0.4)]">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <span className="font-mono-data text-[12px] uppercase tracking-[0.18em] text-foreground">
                      {t('syntheticData.benefits.trainingDataFormats')}
                    </span>
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full border border-[hsl(var(--color-gray-500))]" />
                      <span className="h-2.5 w-2.5 rounded-full border border-[hsl(var(--color-gray-500))]" />
                      <span className="h-2.5 w-2.5 rounded-full border border-[hsl(var(--color-gray-500))]" />
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-left">
                      <thead className="bg-secondary">
                        <tr className="border-b border-border font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                          <th className="px-4 py-3 font-medium">{t('syntheticData.benefits.tableHeaders.id')}</th>
                          <th className="px-4 py-3 font-medium">{t('syntheticData.benefits.tableHeaders.entity')}</th>
                          <th className="px-4 py-3 font-medium">{t('syntheticData.benefits.tableHeaders.state')}</th>
                          <th className="px-4 py-3 font-medium">{t('syntheticData.benefits.tableHeaders.score')}</th>
                          <th className="px-4 py-3 font-medium">{t('syntheticData.benefits.tableHeaders.output')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableRows.map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-[hsl(var(--color-gray-50))]"}>
                            <td className="px-4 py-4 font-mono-data text-[12px] text-foreground">{index + 1}</td>
                            <td className="px-4 py-4 text-sm font-medium text-[hsl(var(--color-cyan-dark))]">{row.entity}</td>
                            <td className="px-4 py-4 text-sm text-foreground">{row.state}</td>
                            <td className="px-4 py-4 text-sm text-foreground">{row.metric}</td>
                            <td className="px-4 py-4 text-sm text-muted-foreground">{row.output}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticDataBenefitsSection;
