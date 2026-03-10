import { ArrowRight, Play, ScanLine, Volume2, Waves, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const VideoAudioHeroSection = () => {
  const { t } = useTranslation('solutions');

  const signalTracks = [
    { label: t('videoAudio.scene'), value: t('videoAudio.sceneValue'), width: "w-[88%]", tone: "bg-teal" },
    { label: t('videoAudio.tracking'), value: t('videoAudio.trackingValue'), width: "w-[76%]", tone: "bg-cyan" },
    { label: t('videoAudio.motion'), value: t('videoAudio.motionValue'), width: "w-[72%]", tone: "bg-primary" },
    { label: t('videoAudio.audio'), value: t('videoAudio.audioValue'), width: "w-[68%]", tone: "bg-teal/80" },
  ];

  const trustIndicators = [
    {
      icon: ScanLine,
      title: t('videoAudio.hours100k'),
      copy: t('videoAudio.hours100kDesc'),
    },
    {
      icon: Volume2,
      title: t('videoAudio.frameLevelPrecision'),
      copy: t('videoAudio.frameLevelPrecisionDesc'),
    },
    {
      icon: Waves,
      title: t('videoAudio.modelCompatibility'),
      copy: t('videoAudio.modelCompatibilityDesc'),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-navy text-slate-200 pt-[88px] md:pt-[96px]">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,hsl(var(--color-teal)/0.18),transparent_34%),radial-gradient(circle_at_48%_32%,hsl(var(--primary)/0.14),transparent_26%),linear-gradient(90deg,hsl(var(--color-navy)/0.58)_0%,hsl(var(--color-navy)/0.78)_42%,hsl(var(--color-navy)/0.96)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[58%] bg-[repeating-linear-gradient(180deg,transparent_0,transparent_11px,hsl(var(--color-slate-200)/0.18)_12px,transparent_13px)] opacity-55 animate-pulse" />
        <div className="absolute inset-y-0 left-0 w-[52%] bg-[radial-gradient(circle_at_24%_48%,hsl(var(--color-cyan)/0.28)_0%,transparent_34%),radial-gradient(circle_at_34%_58%,hsl(var(--color-warning)/0.18)_0%,transparent_26%),radial-gradient(circle_at_14%_24%,hsl(var(--color-teal)/0.18)_0%,transparent_24%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--color-slate-700)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--color-slate-700)/0.14)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />
      </div>

      <div className="container relative mx-auto px-6 pb-20 pt-16 lg:px-12 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] lg:gap-16">
          <div className="max-w-[760px]">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="h-px w-10 bg-teal" aria-hidden="true" />
              {t('videoAudio.breadcrumb')}
            </div>
            <p className="mb-5 max-w-[520px] text-[18px] leading-relaxed text-slate-300 md:text-[22px]">
              {t('videoAudio.subtitle')}
            </p>
            <h1 className="max-w-[980px] font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-white md:text-[64px] lg:text-[78px]">
              {t('videoAudio.heroTitle')}
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-slate-300 md:text-[18px]">
              {t('videoAudio.heroDescription')}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg bg-teal px-8 text-primary-foreground hover:bg-teal-dark">
                {t('buttons.requestDemo', { ns: 'common' })}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border-slate-200/70 bg-transparent px-8 text-slate-200 hover:bg-slate-200 hover:text-navy"
              >
                {t('buttons.seeLabeledOutputs', { ns: 'common' })} <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-[72%] w-px bg-slate-700/60 lg:block" aria-hidden="true" />
            <div className="relative overflow-hidden border border-slate-700/70 bg-slate/70 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-slate-700/70 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-teal/40 bg-navy text-teal">
                    <Clapperboard className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">{t('videoAudio.liveLabeled')}</p>
                    <p className="mt-1 text-sm text-slate-300">{t('videoAudio.playingAnnotation')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  <Play className="h-3.5 w-3.5 text-teal" />
                  {t('videoAudio.active')}
                </div>
              </div>

              <div className="relative aspect-[4/5] min-h-[460px] overflow-hidden bg-navy">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,hsl(var(--color-teal)/0.28),transparent_24%),radial-gradient(circle_at_38%_54%,hsl(var(--color-cyan)/0.22),transparent_26%),radial-gradient(circle_at_18%_72%,hsl(var(--primary)/0.18),transparent_20%),linear-gradient(90deg,hsl(var(--color-navy)/0.18)_0%,hsl(var(--color-navy)/0.58)_40%,hsl(var(--color-navy)/0.92)_100%)]" />
                <div className="absolute inset-y-0 left-0 w-[60%] bg-[repeating-linear-gradient(180deg,transparent_0,transparent_10px,hsl(var(--color-slate-200)/0.18)_11px,transparent_13px)] opacity-70" />
                <div className="absolute inset-y-0 left-[6%] w-[42%] bg-[radial-gradient(circle_at_36%_38%,hsl(var(--color-warning)/0.18)_0%,transparent_18%),radial-gradient(circle_at_50%_58%,hsl(var(--color-cyan)/0.18)_0%,transparent_20%),radial-gradient(circle_at_44%_70%,hsl(var(--color-teal)/0.18)_0%,transparent_22%)] blur-xl" />
                <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,hsl(var(--color-navy)/0.88),transparent)]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,hsl(var(--color-navy)/0.94),transparent)]" />

                <div className="absolute left-5 top-5 border border-slate-200/20 bg-navy/70 px-3 py-2 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">{t('videoAudio.shotLabel')}</p>
                  <p className="mt-1 text-sm text-white">{t('videoAudio.wideUrban')}</p>
                </div>
                <div className="absolute right-5 top-5 border border-teal/30 bg-navy/75 px-3 py-2 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">{t('videoAudio.camera')}</p>
                  <p className="mt-1 text-sm text-slate-200">{t('videoAudio.trackingLeftRight')}</p>
                </div>
                <div className="absolute left-5 right-5 bottom-5 border border-slate-700/70 bg-navy/88 p-4 backdrop-blur-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">{t('videoAudio.dimensionStack')}</p>
                      <p className="mt-1 text-sm text-slate-300">{t('videoAudio.dimensionStackDesc')}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 border border-teal/30 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-teal">
                      <span className="h-2 w-2 bg-teal" aria-hidden="true" />
                      {t('videoAudio.timecoded')}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {signalTracks.map((track) => (
                      <div key={track.label} className="grid grid-cols-[88px_minmax(0,1fr)_132px] items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        <span>{track.label}</span>
                        <div className="h-2 overflow-hidden bg-slate-700/70">
                          <div className={`h-full ${track.width} ${track.tone}`} />
                        </div>
                        <span className="text-right normal-case tracking-normal text-slate-300">{track.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-px border border-slate-700/70 bg-slate-700/70 md:grid-cols-3">
              {trustIndicators.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="bg-navy/95 px-5 py-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    <Icon className="h-4 w-4 text-teal" />
                    {title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAudioHeroSection;
