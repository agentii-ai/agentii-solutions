import { AudioLines, Clapperboard, ScanSearch, ArrowRight, Camera, Zap, Music, Volume2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const annotationDimensions = [
  {
    title: "Scene Content & Semantics",
    description:
      "Dense scene descriptions: subjects, actions, environment, lighting, atmosphere, art style. The semantic foundation that all other dimensions reference.",
    detail: "Scene type · narrative beat · actor roles · event boundaries",
    icon: Clapperboard,
  },
  {
    title: "Narrative & Storytelling",
    description:
      "Emotional progression, dramatic tension, story beats, character motivations. Enables models to generate coherent storytelling—not just random motion.",
    detail: "Three-act structure · emotional valence · narrative function",
    icon: Users,
  },
  {
    title: "Object & Character Tracking",
    description:
      "Multi-object identity persistence across occlusions and scene changes. Character consistency labels maintained across shots with pose estimation.",
    detail: "Persistent IDs · cross-scene re-ID · keypoint tracking",
    icon: ScanSearch,
  },
  {
    title: "Physical Motion Dynamics",
    description:
      "Physics-aware motion labels: gravity, momentum, collision, material deformation. Annotates whether motion obeys real-world physical laws.",
    detail: "Physics scoring · collision detection · material properties",
    icon: Zap,
  },
  {
    title: "Camera Grammar & Cinematography",
    description:
      "Professional cinematography labels: shot types, camera movements (dolly, pan, crane), transitions, depth of field, composition rules.",
    detail: "Shot types · camera movements · transitions · composition",
    icon: Camera,
  },
  {
    title: "Dialogue & Speech",
    description:
      "Phoneme-level lip-sync alignment, speaker identification, emotion labels, multilingual/dialect support. Frame-precise word-to-mouth mapping.",
    detail: "Lip-sync · speaker ID · emotion · multilingual support",
    icon: Volume2,
  },
  {
    title: "Music & Score",
    description:
      "Beat markers, tempo detection, genre classification, mood labels. Enables models to generate video that moves in rhythm with music.",
    detail: "Beat markers · tempo · genre · mood · key progression",
    icon: Music,
  },
  {
    title: "Sound Effects & Ambient",
    description:
      "Causal action-sound correspondence: 'glass shatters because it hit the floor.' Material properties, spatial positioning, room tone.",
    detail: "Action-sound mapping · material labels · spatial audio",
    icon: AudioLines,
  },
];

const VideoAudioCapabilitiesSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="border border-border bg-secondary p-6 shadow-sm md:p-8 lg:p-10">
          <div className="max-w-[720px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">8 annotation dimensions</p>
            <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
              Scene Understanding Annotation: The Foundation for Video Generation.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              State-of-the-art video generation models don't train on isolated labels. They need 8 annotation dimensions working together—scene content, narrative arcs, object tracking, physical motion, camera grammar, dialogue, music, and sound effects—all synchronized to frame-level precision.
            </p>

            <div className="mt-8 space-y-4 border-l-2 border-teal pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                Scene understanding annotation is the semantic foundation. It classifies what's happening, who's involved, and why—so every other dimension has context.
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                The remaining 7 dimensions build on that foundation: tracking maintains identity, motion captures physics, camera encodes cinematography, and audio layers synchronize dialogue, music, and sound effects.
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

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {annotationDimensions.map(({ title, description, detail, icon: Icon }) => (
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
