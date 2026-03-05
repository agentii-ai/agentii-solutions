import { Play, ScanLine, Waves, Camera, Zap } from "lucide-react";

const annotationExamples = [
  {
    title: "Physical Motion Dynamics",
    description:
      "Gravity, momentum, collision, material deformation—annotated with physics scoring per frame. Models learn what physically plausible motion looks like.",
    metric: "Physics score · collision events · material properties",
    tone: "from-teal/30 via-background to-background",
    overlay: "Physical",
    icon: Zap,
  },
  {
    title: "Camera Grammar & Cinematography",
    description:
      "Shot types (close-up, wide, medium), camera movements (dolly, pan, crane, Hitchcock zoom), transitions, and composition rules—the vocabulary of cinematic generation.",
    metric: "Shot types · camera movements · transitions · composition",
    tone: "from-primary/20 via-background to-background",
    overlay: "Camera",
    icon: Camera,
  },
  {
    title: "Dialogue & Music",
    description:
      "Phoneme-level lip-sync with SyncNet validation (offset ≤3 frames). Beat markers and tempo detection for rhythm-aligned generation. Speaker ID and emotion labels across multilingual content.",
    metric: "Lip-sync · beat markers · speaker ID · emotion · multilingual",
    tone: "from-teal/20 via-background to-background",
    overlay: "Dialogue and Music",
    icon: Waves,
  },
  {
    title: "Sound Effects & Ambient",
    description:
      "Causal action-sound correspondence: blade clash at frame 78, mud splash at frame 82. Material property labels, spatial positioning, and room tone for physically plausible Foley audio.",
    metric: "Action-sound pairs · material labels · spatial audio · room tone",
    tone: "from-primary/15 via-background to-background",
    overlay: "SFX",
    icon: ScanLine,
  },
];

const VideoAudioAnnotationShowcaseSection = () => {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-primary-foreground md:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground) / 0.18) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">Dimensions 4–8: Motion, Camera, Audio</p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.04] tracking-[-0.03em] md:text-[48px] lg:text-[56px]">
            The Full Multimodal Stack: Motion, Camera, and Audio Layers.
          </h2>
          <p className="mt-6 text-base leading-7 text-primary-foreground/78 md:text-lg">
            Beyond scene semantics and object tracking, we annotate the dimensions that make video generation cinematic: physical motion dynamics, camera grammar, dialogue, music, and sound effects—all synchronized to frame-level precision.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {annotationExamples.map(({ title, description, metric, tone, overlay, icon: Icon }) => (
            <article
              key={title}
              className="overflow-hidden rounded-xl border border-primary-foreground/12 bg-background text-foreground shadow-[0_8px_30px_hsl(var(--background)/0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_hsl(var(--background)/0.24)]"
            >
              <div className={`relative h-64 border-b border-border bg-gradient-to-br ${tone}`}>
                <div className="absolute left-5 right-5 top-5 flex items-center gap-3 rounded-lg bg-background/92 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <Play className="h-4 w-4 text-teal" />
                  <div className="h-1.5 flex-1 bg-border">
                    <div className="h-full w-2/3 bg-teal" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">04:23 / 12:00</span>
                </div>

                <div className="absolute inset-x-5 bottom-5 top-20 border border-primary-foreground/12 bg-gradient-to-br from-background/10 to-transparent">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--primary-foreground)/0.07)_1px,transparent_1px),linear-gradient(hsl(var(--primary-foreground)/0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-teal/30 bg-background/90 px-3 py-2">
                    <Icon className="h-4 w-4 text-teal" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">{overlay}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <div className="space-y-2">
                      <div className="h-16 w-24 border border-teal/35 bg-teal/12" />
                      <div className="h-10 w-32 border border-primary/30 bg-primary/10" />
                    </div>
                    <div className="h-24 w-24 border border-primary-foreground/20 bg-background/70" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-8">
                <h3 className="font-brand text-[28px] leading-tight tracking-[-0.02em] text-foreground">{title}</h3>
                <p className="text-base leading-7 text-muted-foreground">{description}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoAudioAnnotationShowcaseSection;
