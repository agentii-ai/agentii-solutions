import { ArrowRight, BoxSelect, ScanSearch, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const icons = [BoxSelect, ScanSearch];
const videos = ["/zootopia_clip9.mp4", "/f1_clip_10_seg.mp4"];
const alignments = ["left", "right"];

const VideoAudioTrackingSegmentationSection = () => {
  const { t } = useTranslation('solutions');

  const items = t('videoAudio.trackingSegmentation.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    metric: string;
  }>;

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">{t('videoAudio.trackingSegmentation.breadcrumb')}</p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
            {t('videoAudio.trackingSegmentation.heading')}
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
            {t('videoAudio.trackingSegmentation.description1')}
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
            {t('videoAudio.trackingSegmentation.description2')}
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {items.map((item, index) => {
            const Icon = icons[index];
            const video = videos[index];
            const alignment = alignments[index];
            return (
              <article
                key={index}
                className="grid overflow-hidden border border-border bg-secondary shadow-sm lg:grid-cols-2"
              >
                <div className={`flex items-center p-8 md:p-10 ${alignment === "right" ? "lg:order-2" : ""}`}>
                  <div className="max-w-xl">
                    <div className="inline-flex h-11 w-11 items-center justify-center border border-teal/20 bg-teal/10 text-teal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-brand text-[28px] leading-tight tracking-[-0.02em] text-foreground md:text-[34px]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{item.description}</p>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{item.metric}</p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="mt-8 rounded-lg border-teal bg-transparent px-8 text-teal hover:bg-teal hover:text-navy"
                    >
                      {t('buttons.learnMore', { ns: 'common' })} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className={`relative min-h-[320px] border-t border-border bg-foreground lg:min-h-[380px] ${alignment === "right" ? "lg:order-1 lg:border-r lg:border-t-0" : "lg:border-l lg:border-t-0"}`}>
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoAudioTrackingSegmentationSection;
