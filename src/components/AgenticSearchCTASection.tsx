import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgenticSearchCTASection = () => {
  return (
    <section className="bg-secondary py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Get started
          </p>
          <h2 className="mt-5 font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[60px]">
            See agentic search on your documents.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Upload your documents. Ask your hardest questions. See the difference between keyword matching and agent-grade retrieval — with full evidence traces.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-lg px-8">
              Request a Demo <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" className="rounded-lg px-8">
              Read the Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticSearchCTASection;
