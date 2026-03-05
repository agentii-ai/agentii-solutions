import { ArrowRight, BoxSelect, ScanSearch, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const trackingCards = [
  {
    title: "Object & Character Tracking",
    description:
      "Multi-object identity persistence across occlusions and scene changes. Persistent IDs maintain character consistency. Pose estimation and keypoint tracking capture movement. All tracking references the scene understanding foundation for context.",
    metric: "Persistent IDs · cross-scene re-ID · pose estimation · keypoint tracking",
    alignment: "left",
    video: "/zootopia_clip9.mp4",
    icon: BoxSelect,
  },
  {
    title: "Instance Segmentation",
    description:
      "Pixel-precise object boundaries frame-by-frame. Material property labels for physics modeling. Occlusion handling maintains mask quality. Segmentation references scene geometry and spatial relationships from the foundation layer.",
    metric: "Instance masks · material properties · occlusion handling · scene geometry",
    alignment: "right",
    video: "/f1_clip_10_seg.mp4",
    icon: ScanSearch,
  },
];

const VideoAudioTrackingSegmentationSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">Dimensions 2 & 3: Tracking & Segmentation</p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
            From Scene Semantics to Object-Level Precision.
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
            Once the scene foundation is established, we track individual entities across time. Persistent IDs maintain character consistency. Segmentation masks capture precise boundaries.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
            Both dimensions reference the scene understanding layer for context—tracking IDs map to scene actors, segmentation masks align with scene geometry.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {trackingCards.map(({ title, description, metric, alignment, video, icon: Icon }) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoAudioTrackingSegmentationSection;
