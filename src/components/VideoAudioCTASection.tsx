import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const videoCards = [
  {
    title: "Model-Assisted Video Labeling",
    description:
      "Turn raw scenes into machine-readable supervision with temporal tags, object tracks, shot boundaries, and synchronized audio cues.",
    cta: "See the video flow",
    label: "Auto timeline",
    accent: "from-teal/24 via-background to-background",
    bars: ["w-10", "w-16", "w-12"],
  },
  {
    title: "Active Learning for Multimodal Review",
    description:
      "Prioritize uncertain frames, refine labels faster, and keep video, audio, and event annotations aligned in one review loop.",
    cta: "Explore refinement",
    label: "Human in loop",
    accent: "from-primary/14 via-background to-background",
    bars: ["w-14", "w-9", "w-16"],
  },
  {
    title: "Foundation Models for Scene Understanding",
    description:
      "Use multimodal foundation models to accelerate segmentation, tracking, speech alignment, and event extraction across long-form video.",
    cta: "View model layers",
    label: "Scene intelligence",
    accent: "from-teal/18 via-background to-background",
    bars: ["w-12", "w-12", "w-8"],
  },
];

const VideoAudioCTASection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex justify-center">
            <Button
              size="lg"
              className="min-h-11 rounded-lg bg-teal px-8 text-base font-medium text-primary-foreground hover:bg-teal-dark"
            >
              Start Your Annotation Pipeline
            </Button>
          </div>

          <div className="mx-auto mt-16 max-w-[920px] text-center">
            <h2 className="font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
              Model-Ready Training Data for Video Generation.
            </h2>
            <p className="mx-auto mt-6 max-w-[840px] text-base leading-8 text-muted-foreground md:text-lg">
              Scene semantics, persistent object tracking, physical motion, camera grammar, and multi-track audio—annotated at frame-level precision and structured for Seedance, Sora, and Veo training pipelines.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {videoCards.map(({ title, description, cta, label, accent, bars }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-[12px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_14px_36px_hsl(var(--color-navy)/0.10)]"
              >
                <div className={`relative border-b border-border bg-gradient-to-br ${accent} p-6`}>
                  <div className="rounded-[10px] border border-border bg-background p-4 shadow-sm">
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Video annotation flow</p>
                        <p className="mt-1 text-xs font-medium text-foreground">{label}</p>
                      </div>
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-teal/30 bg-teal/12 text-teal">
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] border border-border bg-navy">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--primary-foreground)/0.08)_1px,transparent_1px),linear-gradient(hsl(var(--primary-foreground)/0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--color-teal)/0.24),transparent_32%),radial-gradient(circle_at_78%_28%,hsl(var(--primary)/0.20),transparent_26%)]" />
                        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                          <span className="rounded-md border border-primary-foreground/15 bg-background/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-200">
                            00:12 / 02:40
                          </span>
                          <Sparkles className="h-4 w-4 text-teal" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-foreground/15 bg-background/15 text-primary-foreground backdrop-blur-sm">
                            <Play className="ml-1 h-6 w-6 fill-current" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 space-y-2">
                          <div className="flex h-8 items-center gap-2 rounded-md border border-teal/25 bg-background/10 px-3">
                            <span className="h-2 w-2 rounded-full bg-teal" />
                            <div className="h-1.5 flex-1 bg-primary-foreground/15">
                              <div className="h-full w-2/3 bg-teal" />
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {bars.map((bar, index) => (
                              <div key={index} className="rounded-md border border-primary-foreground/12 bg-background/10 px-2 py-2">
                                <div className="h-1.5 bg-primary-foreground/10">
                                  <div className={`h-full bg-teal ${bar}`} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-8 text-center">
                  <h3 className="font-brand text-[26px] leading-[1.18] tracking-[-0.02em] text-foreground">
                    {title}
                  </h3>
                  <p className="text-[17px] leading-8 text-muted-foreground">{description}</p>
                  <a
                    href="#contact"
                    className="inline-flex min-h-11 items-center justify-center gap-2 text-base font-medium text-primary transition-colors duration-200 hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAudioCTASection;
