import { AudioLines, Clapperboard, ScanSearch, ArrowRight, Camera, Zap, Music, Volume2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons = [Clapperboard, Users, ScanSearch, Zap, Camera, Volume2, Music, AudioLines];

const VideoAudioCapabilitiesSection = () => {
  const { t } = useTranslation('solutions');
  const { ref, isVisible } = useScrollReveal();

  const items = t('videoAudio.capabilities.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    detail: string;
  }>;

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="border border-border bg-secondary p-6 shadow-sm md:p-8 lg:p-10">
          <div className="max-w-[720px]">
            <p className={`text-xs font-semibold uppercase tracking-[0.28em] text-teal ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>{t('videoAudio.capabilities.breadcrumb')}</p>
            <h2 className={`mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px] ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
              {t('videoAudio.capabilities.heading')}
            </h2>
            <p className={`mt-6 text-lg leading-relaxed text-muted-foreground ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
              {t('videoAudio.capabilities.description')}
            </p>

            <div className="mt-8 space-y-4 border-l-2 border-teal pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                {t('videoAudio.capabilities.foundationNote1')}
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {t('videoAudio.capabilities.foundationNote2')}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg bg-teal px-8 text-primary-foreground hover:bg-teal-dark">
                {t('buttons.seeLabeledOutputs', { ns: 'common' })} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border-teal bg-transparent px-8 text-teal hover:bg-teal hover:text-navy"
              >
                {t('buttons.contactUs', { ns: 'common' })}
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => {
              const Icon = icons[index];
              return (
                <article
                  key={index}
                  className={`group flex h-full flex-col justify-between border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal/50 hover:shadow-md ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: isVisible ? `${400 + index * 100}ms` : undefined }}
                >
                  <div>
                    <div className={`inline-flex h-11 w-11 items-center justify-center border border-teal/20 bg-teal/10 text-teal ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: isVisible ? `${600 + index * 100}ms` : undefined }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-brand text-[24px] leading-tight tracking-[-0.02em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAudioCapabilitiesSection;
