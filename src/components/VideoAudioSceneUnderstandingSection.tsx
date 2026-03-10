import { ArrowRight, Play, ScanSearch, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const icons = [ScanSearch, Waves];

const VideoAudioSceneUnderstandingSection = () => {
  const { t } = useTranslation('solutions');

  const items = t('videoAudio.sceneUnderstanding.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    metric: string;
  }>;

  return (
    <section className="bg-secondary py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="border border-border bg-background shadow-sm">
          <div className="grid gap-12 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-10 lg:py-12">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">{t('videoAudio.sceneUnderstanding.breadcrumb')}</p>
              <h2 className="mt-5 font-brand text-[34px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[44px] lg:text-[52px]">
                {t('videoAudio.sceneUnderstanding.heading')}
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                {t('videoAudio.sceneUnderstanding.description1')}
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                {t('videoAudio.sceneUnderstanding.description2')}
              </p>

              <div className="mt-8 space-y-4 border-l-2 border-teal pl-5">
                {items.map((item, index) => {
                  const Icon = icons[index];
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                        <Icon className="h-4 w-4 text-teal" />
                        {item.title}
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{item.metric}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-lg bg-teal px-8 text-primary-foreground hover:bg-teal-dark">
                  {t('buttons.exploreFeatures', { ns: 'common' })} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative w-full overflow-hidden border border-border bg-card shadow-sm">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:36px_36px] opacity-60" />
                <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background)/0.2)_100%)]" />

                <div className="relative border-b border-border bg-secondary/80 px-5 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">{t('videoAudio.sceneUnderstanding.liveSceneParsing')}</p>
                      <p className="mt-1 text-sm text-foreground">{t('videoAudio.sceneUnderstanding.liveSceneParsingDesc')}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 border border-teal/30 bg-background px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-teal">
                      <Play className="h-3.5 w-3.5" />
                      {t('videoAudio.active')}
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-[radial-gradient(circle_at_15%_20%,hsl(var(--color-teal)/0.18),transparent_20%),radial-gradient(circle_at_72%_32%,hsl(var(--primary)/0.12),transparent_22%),linear-gradient(180deg,hsl(var(--muted))_0%,hsl(var(--background))_100%)]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.02)_0%,hsl(var(--background)/0.28)_100%)]" />
                  <div className="absolute inset-x-10 top-10 h-32 border border-teal/30 bg-teal/10" />
                  <div className="absolute left-[12%] top-[34%] h-28 w-20 border border-primary/30 bg-primary/10" />
                  <div className="absolute left-[34%] top-[40%] h-32 w-24 border border-teal/40 bg-teal/15" />
                  <div className="absolute right-[14%] top-[28%] h-36 w-28 border border-border bg-background/65" />

                  <div className="absolute left-5 top-5 border border-border bg-background/92 px-3 py-2 shadow-sm">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{t('videoAudio.sceneUnderstanding.sceneLabel')}</p>
                    <p className="mt-1 text-sm text-foreground">{t('videoAudio.sceneUnderstanding.sceneLabelValue')}</p>
                  </div>

                  <div className="absolute right-5 top-5 w-[190px] border border-border bg-background/96 p-3 shadow-sm">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{t('videoAudio.sceneUnderstanding.multimodalLinks')}</p>
                    <div className="mt-3 space-y-2 text-[11px] text-foreground">
                      <div className="flex items-center justify-between border border-border px-2 py-1">
                        <span>{t('videoAudio.sceneUnderstanding.actors')}</span>
                        <span className="text-teal">{t('videoAudio.sceneUnderstanding.actorsValue')}</span>
                      </div>
                      <div className="flex items-center justify-between border border-border px-2 py-1">
                        <span>{t('videoAudio.sceneUnderstanding.dialogue')}</span>
                        <span className="text-teal">{t('videoAudio.sceneUnderstanding.dialogueValue')}</span>
                      </div>
                      <div className="flex items-center justify-between border border-border px-2 py-1">
                        <span>{t('videoAudio.sceneUnderstanding.intent')}</span>
                        <span className="text-teal">{t('videoAudio.sceneUnderstanding.intentValue')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 border border-border bg-background/94 p-4 shadow-sm">
                    <div className="grid gap-3 md:grid-cols-[120px_minmax(0,1fr)_136px] md:items-center">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{t('videoAudio.sceneUnderstanding.timeline')}</p>
                        <p className="mt-1 text-sm text-foreground">{t('videoAudio.sceneUnderstanding.timelineValue')}</p>
                      </div>
                      <div className="h-2 overflow-hidden bg-border">
                        <div className="h-full w-[72%] bg-teal" />
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:text-right">{t('videoAudio.sceneUnderstanding.timelineDetail')}</p>
                    </div>
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

export default VideoAudioSceneUnderstandingSection;
