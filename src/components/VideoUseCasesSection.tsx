import { Clapperboard, Music, AudioLines, Megaphone, Gamepad2, Database } from "lucide-react";

const useCases = [
  {
    title: "Film & Cinematic Production",
    description:
      "Multi-shot narrative, camera grammar, dialogue lip-sync, score annotation. Train models that understand scene continuity, shot composition, and audio-visual alignment across long-form content.",
    icon: Clapperboard,
    tags: ["Scene coherence", "Camera grammar", "Lip-sync", "Score annotation"],
  },
  {
    title: "Music Video Generation",
    description:
      "Beat-aligned visuals, lyric-to-lip-sync, song structure segmentation. Annotate temporal relationships between audio beats, visual transitions, and performer motion at frame level.",
    icon: Music,
    tags: ["Beat alignment", "Lyric sync", "Song structure", "Multi-track"],
  },
  {
    title: "Foley & Sound Design",
    description:
      "Action-sound correspondence, material labels, spatial audio, multi-track separation. Map every on-screen action to its acoustic signature with phoneme-level temporal precision.",
    icon: AudioLines,
    tags: ["Action-sound pairs", "Material labels", "Spatial audio", "Source separation"],
  },
  {
    title: "Advertising & Commercial",
    description:
      "Short-form generation, product scene understanding, multi-language dubbing. Annotate brand elements, camera control intent, and scene semantics for controllable commercial video.",
    icon: Megaphone,
    tags: ["Brand consistency", "Scene understanding", "Camera control", "Dubbing"],
  },
  {
    title: "Gaming & Interactive Media",
    description:
      "Physics-aware motion, character consistency, environmental sound. Label dynamic interactions, procedural camera paths, and spatial audio for real-time generation models.",
    icon: Gamepad2,
    tags: ["Physics motion", "Character consistency", "Environmental SFX", "Procedural camera"],
  },
  {
    title: "Training Pipeline at Scale",
    description:
      "100K+ hour automated pipelines, quality filtering, RLHF curation. End-to-end annotation infrastructure with multi-stage rejection, temporal alignment verification, and human-in-the-loop validation.",
    icon: Database,
    tags: ["100K+ hours", "Quality filtering", "Temporal precision", "RLHF curation"],
  },
];

const VideoUseCasesSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Video AI Training Use Cases
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            From Film Production to Foley Sound Design.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Six research-backed use cases spanning cinematic generation, music video production, and automated annotation at scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {useCases.map(({ title, description, icon: Icon, tags }) => (
            <article
              key={title}
              className="border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center border border-teal/20 bg-teal/10 text-teal">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-brand text-[24px] leading-tight text-foreground">{title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoUseCasesSection;
