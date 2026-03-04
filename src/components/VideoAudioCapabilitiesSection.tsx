import { AudioLines, Clapperboard, ScanSearch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const annotationCards = [
  {
    title: "Scene / clip content annotation with multimodal models",
    description:
      "Label scenes, shot intent, actors, actions, and narrative events with synchronized visual and language signals so every clip becomes machine-readable.",
    detail: "Frame-level semantics · clip summaries · event indexing",
    icon: Clapperboard,
  },
  {
    title: "Object tracking and segmentation",
    description:
      "Track entities through time with temporal consistency, masks, and motion state so agents can follow what changed, where it moved, and why it matters.",
    detail: "Persistent IDs · motion traces · segmentation overlays",
    icon: ScanSearch,
  },
  {
    title: "Audio Sound Tracks and Music",
    description:
      "Separate dialogue, sound effects, ambience, and music into structured layers that support retrieval, reasoning, and downstream multimodal evaluation.",
    detail: "Dialogue turns · soundtrack cues · SFX timelines",
    icon: AudioLines,
  },
];

const VideoAudioCapabilitiesSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-10 border border-border bg-secondary p-6 shadow-sm md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:p-10">
          <div className="max-w-[520px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">Capability stack</p>
            <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
              Multimodal annotations become a data map agents can actually use.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our video and audio solution builds a data map for agents, turning labeled footage into structured multimodal sources that greatly improve agentic reasoning, retrieval, and numerical calculation after processing.
            </p>

            <div className="mt-8 space-y-4 border-l-2 border-teal pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                Instead of isolated labels, we connect scenes, objects, motion, dialogue, soundtrack layers, and evidence traces into one retrieval-ready structure.
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                That mapping layer is key to accurate agentic reasoning across time, sharper multimodal retrieval, and more reliable calculations on structured outputs.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg bg-teal px-8 text-primary-foreground hover:bg-teal-dark">
                Review labeled outputs <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border-teal bg-transparent px-8 text-teal hover:bg-teal hover:text-navy"
              >
                Talk to our team
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {annotationCards.map(({ title, description, detail, icon: Icon }) => (
              <article
                key={title}
                className="group flex h-full flex-col justify-between border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal/50 hover:shadow-md"
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center border border-teal/20 bg-teal/10 text-teal">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-brand text-[24px] leading-tight tracking-[-0.02em] text-foreground">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAudioCapabilitiesSection;
