import { ArrowRight, Database, Network, Sigma } from "lucide-react";
import { Button } from "@/components/ui/button";

const benchmarkRows = [
  { label: "Traditional RAG", value: "Keyword matching on policy text — misses clause relationships and coverage conditions", pct: 28 },
  { label: "KG-RAG", value: "Knowledge graph reasoning — better on structured policies, fails on unstructured claims", pct: 65 },
  { label: "Agentic Search", value: "Multi-agent verification across claims, policies, and medical records — production-grade accuracy", pct: 99 },
];

const capabilities = [
  {
    title: "Claims Reasoning",
    description: "Agents traverse entity graphs connecting claimants → policies → coverages → exclusions. Every coverage determination is traceable to specific policy clauses and claim evidence.",
    icon: Network,
  },
  {
    title: "Policy Retrieval",
    description: "Route queries to exact clauses, endorsements, and coverage terms — with evidence traces. 'Is flood damage covered?' resolves to Section 4.2.1, Endorsement E-17, not a text similarity guess.",
    icon: Database,
  },
  {
    title: "Reserve Calculation",
    description: "Anchor loss calculations to normalized claim values with source lineage. Reserve estimates, subrogation amounts, and payout calculations stay reliable because every number traces to a document.",
    icon: Sigma,
  },
];

const InsuranceDataMappingSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Data mapping
            </p>
            <h2 className="mt-5 max-w-[520px] font-brand text-[36px] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[62px]">
              Claims accuracy that adjusters trust.
            </h2>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              Traditional search fails on insurance questions because policies are clause-heavy and claims span multiple documents. Our agentic data maps build entity graphs across claimants, policies, and evidence — so agents resolve claims with precision, not guesswork.
            </p>

            <div className="mt-8 max-w-[560px] space-y-4 border-l-2 border-primary pl-5">
              <p className="text-sm leading-relaxed text-foreground">
                The data map connects claimants to policies to coverages to exclusions — with every field traceable to its source document, page, and clause.
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                This is the layer that separates keyword-matching from adjudication-grade retrieval: every query resolves to the correct coverage term, condition, and evidence trace.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                Read the Benchmark <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8">
                See Example Queries
              </Button>
            </div>
          </div>

          <div className="border border-border bg-secondary p-6 shadow-sm md:p-8">
            <div className="border border-border bg-background p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Claims Q&A Accuracy
                  </p>
                  <p className="mt-2 font-brand text-[28px] leading-tight text-foreground">
                    Benchmark Comparison
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                {benchmarkRows.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {row.label}
                      </p>
                      <p className="font-brand text-[20px] text-primary">{row.pct}%</p>
                    </div>
                    <div className="mt-2 h-2 w-full bg-secondary">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div key={title} className="border border-border bg-background p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary-light text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-brand text-[18px] leading-tight text-foreground">{title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceDataMappingSection;
