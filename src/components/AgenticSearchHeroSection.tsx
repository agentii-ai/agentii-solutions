import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgenticSearchHeroSection = () => {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Research
            </p>
            <h1 className="mt-5 font-brand text-[48px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[64px] lg:text-[80px]">
              Achieving 99% accuracy with agentic search.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Traditional RAG achieves 25-30% accuracy on financial Q&A. Agentic search achieves 99%. The difference: multi-agent verification, iterative refinement, and structured entity graphs that agents navigate with precision — not guess from embeddings.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-lg px-8">
                Read the Full Paper <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                See Live Demo
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-brand text-[48px] leading-tight text-primary">99%</p>
              <p className="mt-2 text-sm font-semibold text-foreground">Accuracy on Financial Q&A</p>
              <p className="mt-2 text-xs text-muted-foreground">vs 25-30% with traditional RAG</p>
            </div>
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-brand text-[48px] leading-tight text-primary">3-5x</p>
              <p className="mt-2 text-sm font-semibold text-foreground">Faster Query Resolution</p>
              <p className="mt-2 text-xs text-muted-foreground">Multi-agent parallel processing</p>
            </div>
            <div className="border border-border bg-card p-8 text-center">
              <p className="font-brand text-[48px] leading-tight text-primary">100%</p>
              <p className="mt-2 text-sm font-semibold text-foreground">Evidence Traceability</p>
              <p className="mt-2 text-xs text-muted-foreground">Every answer links to source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchHeroSection;
