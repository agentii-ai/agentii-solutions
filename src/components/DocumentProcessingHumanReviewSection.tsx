import { ArrowRight, BadgeCheck, Check, FileText, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviewTabs = [
  "Document annotation",
  "Edge-case handling",
  "Shareable review screen",
  "Role-based access",
];

const reviewRows = [
  { label: "Invoice No", value: "RC20-0827", state: "flagged" },
  { label: "Vendor", value: "North Coast Supply", state: "resolved" },
  { label: "Total", value: "$5,480.00", state: "resolved" },
];

const HumanReviewSection = () => {
  return (
    <section className="bg-foreground py-20 text-background md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-background/58">Human review</p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-background md:text-[48px] lg:text-[60px]">
            Automate document review from end-to-end.
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1120px] flex-wrap justify-center gap-3">
          {reviewTabs.map((tab, index) => (
            <div
              key={tab}
              className={`px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition-colors duration-200 md:px-7 ${
                index === 1
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background/16 text-background/84"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:gap-16">
          <div>
            <h3 className="font-brand text-[32px] leading-[1.04] tracking-[-0.03em] text-background md:text-[40px]">
              Avoid any data oversights.
            </h3>
            <p className="mt-6 max-w-[460px] text-lg leading-relaxed text-background/78">
              Close automation gaps in extraction by routing uncertain fields into a reviewer workspace built for exceptions, evidence checks, and fast approval loops.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-background/15 bg-background/5 px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">Exception queue</p>
                <p className="mt-2 text-sm leading-relaxed text-background/80">
                  Escalate only low-confidence fields, ambiguous entities, or missing evidence.
                </p>
              </div>
              <div className="border border-background/15 bg-background/5 px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">Audit trail</p>
                <p className="mt-2 text-sm leading-relaxed text-background/80">
                  Keep reviewer actions, approvals, and corrections tied to the source record.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                Talk To An Expert <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg border-background/30 bg-background text-foreground hover:bg-background/90 px-8">
                Check Support Docs
              </Button>
            </div>
          </div>

          <div className="bg-background/8 p-4 md:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_220px] lg:items-center">
              <div className="relative min-h-[420px] overflow-hidden bg-secondary p-6 text-foreground md:p-8">
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-45"
                  aria-hidden="true"
                />

                <div className="relative mx-auto flex h-full max-w-[560px] items-center justify-center">
                  <div className="absolute left-10 top-14 h-[280px] w-[72%] border border-primary/10 bg-primary/10" aria-hidden="true" />

                  <article className="relative w-[72%] border border-border bg-background p-6 shadow-sm md:p-8">
                    <div className="absolute left-8 top-0 h-14 w-10 -translate-y-1/3 bg-primary shadow-sm" aria-hidden="true" />
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6 text-[13px] italic text-muted-foreground/90">
                        <span>From</span>
                        <span>To</span>
                      </div>
                      <div className="h-12 bg-secondary" aria-hidden="true" />
                      <div className="space-y-3">
                        <div className="h-3 w-4/5 bg-secondary" aria-hidden="true" />
                        <div className="h-3 w-3/5 bg-secondary" aria-hidden="true" />
                      </div>
                      <div className="flex items-end justify-between pt-12">
                        <span className="text-[22px] font-semibold tracking-[-0.03em] text-foreground">$,$$$</span>
                        <div className="h-16 w-28 border-b-2 border-foreground/90" aria-hidden="true" />
                      </div>
                    </div>
                  </article>

                  <div className="absolute right-0 top-10 hidden h-px w-24 border-t-2 border-dashed border-foreground/70 lg:block" aria-hidden="true" />
                  <div className="absolute right-8 top-3 hidden h-20 w-20 border border-cyan bg-cyan/10 text-cyan lg:flex lg:items-center lg:justify-center" aria-hidden="true">
                    <BadgeCheck className="h-8 w-8" />
                  </div>

                  <aside className="absolute bottom-6 right-2 w-[42%] min-w-[240px] border border-background/10 bg-foreground p-4 text-background shadow-sm md:right-0 md:p-5">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-background/55">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        Review queue
                      </div>
                      <span className="text-background/45">×</span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {reviewRows.map((row) => (
                        <div key={row.label} className="space-y-2">
                          <div
                            className={`border px-3 py-2 text-sm ${
                              row.state === "flagged"
                                ? "border-primary/60 bg-primary text-primary-foreground"
                                : "border-background/20 bg-background/5 text-background/88"
                            }`}
                          >
                            {row.value}
                          </div>
                          <div className="border border-background/25 px-3 py-2 text-sm text-background/72">{row.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex justify-end gap-3">
                      <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center border border-background/30 text-background/80 transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                        aria-label="Reject review item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                        aria-label="Approve review item"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                    </div>
                  </aside>
                </div>
              </div>

              <div className="space-y-4">
                <article className="border border-background/15 bg-background/5 px-4 py-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/25 bg-background text-primary">
                    <FileText className="h-4 w-4" />
                  </div>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">Reviewer controls</p>
                  <p className="mt-2 text-sm leading-relaxed text-background/80">
                    Approve, reject, or correct extracted values with source context preserved.
                  </p>
                </article>
                <article className="border border-background/15 bg-background/5 px-4 py-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/25 bg-background text-primary">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">Confidence routing</p>
                  <p className="mt-2 text-sm leading-relaxed text-background/80">
                    Send only edge cases to humans while trusted fields continue automatically.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanReviewSection;
