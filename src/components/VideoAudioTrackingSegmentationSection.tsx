import { ArrowRight, BoxSelect, ScanSearch, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const trackingCards = [
  {
    title: "Bounding box tracking",
    description:
      "Track entities across frames with persistent IDs, motion continuity, and event-aware labels so agents can follow who moved, what changed, and when it happened.",
    metric: "Persistent IDs · motion traces · temporal linking",
    alignment: "left",
    icon: BoxSelect,
  },
  {
    title: "Segmentation",
    description:
      "Capture object boundaries with mask-level precision so scene understanding stays machine-readable for retrieval, reasoning, and downstream numerical analysis.",
    metric: "Instance masks · contour precision · scene geometry",
    alignment: "right",
    icon: ScanSearch,
  },
];

const VideoAudioTrackingSegmentationSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">Scene understanding object tracking</p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
            Bounding boxes and segmentation become a usable data map for agents.
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
            Our processing solution builds a data map for agents, turning tracked objects and segmented scenes into structured sources that greatly increase agentic work after processing.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
            That data map is key to accurate agentic reasoning, sharper retrieval, and more reliable numerical calculation across downstream workflows.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {trackingCards.map(({ title, description, metric, alignment, icon: Icon }) => (
            <article
              key={title}
              className="grid overflow-hidden border border-border bg-secondary shadow-sm lg:grid-cols-2"
            >
              <div className={`flex items-center p-8 md:p-10 ${alignment === "right" ? "lg:order-2" : ""}`}>
                <div className="max-w-xl">
                  <div className="inline-flex h-11 w-11 items-center justify-center border border-teal/20 bg-teal/10 text-teal">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-brand text-[28px] leading-tight tracking-[-0.02em] text-foreground md:text-[34px]">
                    {title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{description}</p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{metric}</p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="mt-8 rounded-lg border-teal bg-transparent px-8 text-teal hover:bg-teal hover:text-navy"
                  >
                    Review output <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className={`relative min-h-[320px] border-t border-border bg-card lg:min-h-[380px] ${alignment === "right" ? "lg:order-1 lg:border-r lg:border-t-0" : "lg:border-l lg:border-t-0"}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:28px_28px] opacity-55" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,hsl(var(--color-teal)/0.14),transparent_20%),radial-gradient(circle_at_72%_40%,hsl(var(--primary)/0.1),transparent_22%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)]" />

                <div className="absolute left-5 right-5 top-5 flex items-center gap-3 border border-border bg-background/92 px-4 py-3 shadow-sm">
                  <Play className="h-4 w-4 text-teal" />
                  <div className="h-1.5 flex-1 bg-border">
                    <div className={`h-full ${alignment === "right" ? "w-[68%]" : "w-[74%]"} bg-teal`} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {alignment === "right" ? "segmentation" : "tracking"}
                  </span>
                </div>

                <div className="absolute inset-x-6 bottom-6 top-20 overflow-hidden border border-border bg-background/70">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.02),hsl(var(--background)/0.18))]" />
                  <div className="absolute left-[10%] top-[20%] h-28 w-20 border-2 border-teal bg-teal/10" />
                  <div className="absolute left-[32%] top-[34%] h-24 w-16 border-2 border-primary bg-primary/10" />
                  <div className="absolute right-[12%] top-[18%] h-32 w-24 border-2 border-teal/80 bg-transparent" />

                  <div className="absolute left-[12%] top-[22%] h-24 w-16 bg-teal/15 blur-[1px]" />
                  <div className="absolute left-[34%] top-[36%] h-20 w-12 bg-primary/15 blur-[1px]" />
                  <div className={`absolute right-[14%] top-[20%] ${alignment === "right" ? "h-28 w-20 rounded-[40%] border border-teal bg-teal/20" : "h-28 w-20 border-2 border-teal/80 bg-transparent"}`} />

                  <div className="absolute inset-x-4 bottom-4 border border-border bg-background/95 p-3 shadow-sm">
                    <div className="grid gap-2 md:grid-cols-[120px_minmax(0,1fr)] md:items-center">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {alignment === "right" ? "Mask quality" : "Track quality"}
                      </p>
                      <div className="h-2 bg-border">
                        <div className={`h-full ${alignment === "right" ? "w-[82%]" : "w-[76%]"} bg-teal`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoAudioTrackingSegmentationSection;
