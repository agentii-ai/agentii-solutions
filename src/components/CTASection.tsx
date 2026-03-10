import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-foreground leading-tight tracking-tight mb-4">
          {t('cta.heading1')}
          <br />
          {t('cta.heading2')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {t('cta.description')}
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">{t('buttons.contactUs', { ns: 'common' })}</Button>
          <Button variant="outline" size="lg">
            {t('buttons.learnMore', { ns: 'common' })}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
