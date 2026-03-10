import { ArrowRight, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const models = [
  { name: "Seedance 2.0", support: [true, true, true, true, true, true, true, true] },
  { name: "Veo 3", support: [true, true, true, true, true, true, false, true] },
  { name: "Sora 2", support: [true, true, true, true, true, false, false, false] },
  { name: "Kling", support: [true, true, true, true, false, false, false, false] },
  { name: "Wan", support: [true, true, true, true, false, false, false, false] },
  { name: "HunyuanVideo", support: [true, true, true, true, true, true, true, true] },
];

const VideoModelCompatibilitySection = () => {
  const { t } = useTranslation('usecases');

  const dimensions = t('video.compatibility.dimensions', { returnObjects: true }) as string[];
  const summaryCards = t('video.compatibility.summaryCards', { returnObjects: true }) as { label: string; value: string }[];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t('video.compatibility.breadcrumb')}
            </p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[62px]">
              {t('video.compatibility.heading')}
            </h2>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              {t('video.compatibility.description')}
            </p>

            <div className="mt-8 max-w-[560px] space-y-4 border-l-2 border-teal pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                {t('video.compatibility.note1')}
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {t('video.compatibility.note2')}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg bg-teal px-8 text-navy hover:bg-teal-dark">
                {t('buttons.requestDemo', { ns: 'common' })} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg border-teal px-8 text-teal hover:bg-teal hover:text-navy">
                {t('buttons.seeLabeledOutputs', { ns: 'common' })}
              </Button>
            </div>
          </div>

          <div className="border border-border bg-secondary p-6 shadow-sm md:p-8">
            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t('video.compatibility.matrixLabel')}
                </p>
                <p className="mt-2 font-brand text-[28px] leading-tight text-foreground">
                  {t('video.compatibility.matrixTitle')}
                </p>
              </div>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[540px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="pb-3 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {t('video.compatibility.modelHeader')}
                      </th>
                      {dimensions.map((dim) => (
                        <th
                          key={dim}
                          className="pb-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          {dim}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {models.map((model) => (
                      <tr key={model.name} className="border-b border-border last:border-0">
                        <td className="py-3.5 text-sm font-medium text-foreground">{model.name}</td>
                        {model.support.map((supported, i) => (
                          <td key={i} className="py-3.5 text-center">
                            {supported ? (
                              <Check className="mx-auto h-4 w-4 text-teal" />
                            ) : (
                              <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {summaryCards.map(({ label, value }) => (
                <div key={label} className="border border-border bg-background p-5">
                  <p className="font-brand text-[18px] leading-tight text-foreground">{label}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoModelCompatibilitySection;
