import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const AgenticSearchCTASection = () => {
  const { t } = useTranslation('research');

  return (
    <section className="bg-secondary py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {t('cta.breadcrumb')}
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            {t('cta.heading')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t('cta.description')}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-lg px-8">
              {t('buttons.requestDemo', { ns: 'common' })} <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" className="rounded-lg px-8">
              {t('cta.readDocumentation')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchCTASection;
