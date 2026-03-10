import { ArrowRight, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const InsuranceCTASection = () => {
  const { t } = useTranslation('usecases');

  const industryTabs = t('insurance.cta.industryTabs', { returnObjects: true }) as string[];
  const useCaseColumns = t('insurance.cta.useCases', { returnObjects: true }) as string[][];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t('insurance.cta.breadcrumb')}
            </p>
            <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
              {t('insurance.cta.heading')}
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industryTabs.map((tab, index) => (
              <div
                key={tab}
                className={`px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition-colors duration-200 md:px-7 ${
                  index === 0
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {useCaseColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="border border-border bg-card p-8 shadow-sm">
                {column.map((item, itemIndex) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between gap-6 py-5 ${
                      itemIndex !== column.length - 1 ? "border-b border-border" : ""
                    } ${itemIndex === 0 ? "pt-2" : ""}`}
                  >
                    <p className="max-w-[250px] font-brand text-[22px] leading-[1.3] tracking-[-0.02em] text-foreground md:text-[24px]">
                      {item}
                    </p>
                    <div className="inline-flex h-10 w-10 items-center justify-center text-primary">
                      <CheckCheck className="h-5 w-5" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-lg text-muted-foreground">{t('insurance.cta.seeItWork')}</p>
            <Button size="lg" className="rounded-lg px-8">
              {t('buttons.requestDemo', { ns: 'common' })} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCTASection;
