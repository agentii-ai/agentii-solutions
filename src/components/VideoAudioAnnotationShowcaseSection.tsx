import { Play, ScanLine, Waves, Camera, Zap } from "lucide-react";
import { useTranslation } from 'react-i18next';

const icons = [Zap, Camera, Waves, ScanLine];
const tones = [
  "from-teal/30 via-background to-background",
  "from-primary/20 via-background to-background",
  "from-teal/20 via-background to-background",
  "from-primary/15 via-background to-background",
];

const VideoAudioAnnotationShowcaseSection = () => {
  const { t } = useTranslation('solutions');

  const items = t('videoAudio.annotationShowcase.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    metric: string;
    overlay: string;
  }>;

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-primary-foreground md:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground) / 0.18) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">{t('videoAudio.annotationShowcase.breadcrumb')}</p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.04] tracking-[-0.03em] md:text-[48px] lg:text-[56px]">
            {t('videoAudio.annotationShowcase.heading')}
          </h2>
          <p className="mt-6 text-base leading-7 text-primary-foreground/78 md:text-lg">
            {t('videoAudio.annotationShowcase.description')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {items.map((item, index) => {
            const Icon = icons[index];
            const tone = tones[index];
            return (
              <article
                key={index}
                className="overflow-hidden rounded-xl border border-primary-foreground/12 bg-background text-foreground shadow-[0_8px_30px_hsl(var(--background)/0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_hsl(var(--background)/0.24)]"
              >
                <div className={`relative h-64 border-b border-border bg-gradient-to-br ${tone}`}>
                  <div className="absolute left-5 right-5 top-5 flex items-center gap-3 rounded-lg bg-background/92 px-4 py-2 shadow-sm backdrop-blur-sm">
                    <Play className="h-4 w-4 text-teal" />
                    <div className="h-1.5 flex-1 bg-border">
                      <div className="h-full w-2/3 bg-teal" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">04:23 / 12:00</span>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 top-20 border border-primary-foreground/12 bg-gradient-to-br from-background/10 to-transparent">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--primary-foreground)/0.07)_1px,transparent_1px),linear-gradient(hsl(var(--primary-foreground)/0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-teal/30 bg-background/90 px-3 py-2">
                      <Icon className="h-4 w-4 text-teal" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">{item.overlay}</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                      <div className="space-y-2">
                        <div className="h-16 w-24 border border-teal/35 bg-teal/12" />
                        <div className="h-10 w-32 border border-primary/30 bg-primary/10" />
                      </div>
                      <div className="h-24 w-24 border border-primary-foreground/20 bg-background/70" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-8">
                  <h3 className="font-brand text-[28px] leading-tight tracking-[-0.02em] text-foreground">{item.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{item.description}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{item.metric}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoAudioAnnotationShowcaseSection;
