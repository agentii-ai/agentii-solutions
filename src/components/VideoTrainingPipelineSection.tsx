import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const VideoTrainingPipelineSection = () => {
  const { t } = useTranslation('usecases');

  const pipelineTabs = t('video.pipeline.tabs', { returnObjects: true }) as string[];
  const pipelineRows = t('video.pipeline.stages', { returnObjects: true }) as { stage: string; description: string }[];

  return (
    <section className="bg-foreground py-20 text-background md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto flex max-w-[820px] flex-wrap justify-center gap-3">
          {pipelineTabs.map((tab, index) => (
            <div
              key={tab}
              className={`px-5 py-3 text-sm font-semibold tracking-[-0.01em] md:px-7 ${
                index === 0
                  ? "bg-teal text-navy shadow-sm"
                  : "bg-background/20 text-background/88"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-background/60">
              {t('video.pipeline.breadcrumb')}
            </p>
            <h2 className="mt-5 max-w-[460px] font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-background md:text-[48px] lg:text-[58px]">
              {t('video.pipeline.heading')}
            </h2>
            <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-background/78">
              {t('video.pipeline.description')}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-background/15 bg-background/5 px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">{t('video.pipeline.rejectionRateLabel')}</p>
                <p className="mt-2 text-sm leading-relaxed text-background/80">{t('video.pipeline.rejectionRateValue')}</p>
              </div>
              <div className="border border-background/15 bg-background/5 px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">{t('video.pipeline.temporalPrecisionLabel')}</p>
                <p className="mt-2 text-sm leading-relaxed text-background/80">{t('video.pipeline.temporalPrecisionValue')}</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg bg-teal px-8 text-navy hover:bg-teal-dark">
                {t('buttons.contactUs', { ns: 'common' })} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg border-background/30 bg-background px-8 text-foreground hover:bg-background/90">
                {t('buttons.learnMore', { ns: 'common' })}
              </Button>
            </div>
          </div>

          <div className="bg-secondary px-6 py-8 text-foreground shadow-sm md:px-8 md:py-10 lg:px-10">
            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t('video.pipeline.pipelineLabel')}
                  </p>
                  <p className="mt-2 font-brand text-[28px] leading-tight text-foreground">
                    {t('video.pipeline.pipelineTitle')}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-0">
                {pipelineRows.map((row, index) => (
                  <div
                    key={row.stage}
                    className={`flex items-start gap-5 py-5 ${
                      index !== pipelineRows.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-teal/20 bg-teal/10 font-mono text-xs font-semibold text-teal">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-brand text-[18px] leading-tight text-foreground">{row.stage}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{row.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTrainingPipelineSection;
