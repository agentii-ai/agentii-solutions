import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { t } = useTranslation('home');
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className={`text-3xl lg:text-[42px] font-semibold text-foreground leading-tight tracking-tight mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {t('cta.heading1')}
          <br />
          {t('cta.heading2')}
        </h2>
        <p className={`text-lg text-muted-foreground mb-8 ${isVisible ? "animate-fade-in-up delay-150" : "opacity-0"}`}>
          {t('cta.description')}
        </p>
        <div className={`flex justify-center gap-4 ${isVisible ? "animate-scale-in delay-300" : "opacity-0"}`}>
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
