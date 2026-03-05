const comparisonRows = [
  {
    capability: "Reasoning",
    method: "Self-Instruct, STaR, PRMs",
    verification: "Multi-model consensus",
    scale: "100K+ traces",
    format: "JSON-L with CoT chains",
  },
  {
    capability: "Code",
    method: "OSS-Instruct, Evol-Instruct",
    verification: "Sandbox execution",
    scale: "50K+ samples",
    format: "Parquet with tests + logs",
  },
  {
    capability: "Math",
    method: "MetaMath, NuminaMath, GRPO",
    verification: "Formal proof validation",
    scale: "90K+ problems",
    format: "JSON-L with step proofs",
  },
  {
    capability: "Tool Calling",
    method: "APIGen, ToolACE, TOUCAN",
    verification: "Schema + state checks",
    scale: "30K+ trajectories",
    format: "JSON-L with tool schemas",
  },
  {
    capability: "Planning",
    method: "Plan-and-Act, AgentGen",
    verification: "Environment replay",
    scale: "20K+ trajectories",
    format: "JSON-L with plan-action pairs",
  },
  {
    capability: "Multimodal",
    method: "Graph2Eval, VL-DAC",
    verification: "Visual grounding checks",
    scale: "15K+ tasks",
    format: "Parquet with image refs",
  },
];

const SyntheticUseCaseComparisonSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--color-purple-dark))]">
              Unified requirements framework
            </p>
            <h2 className="mt-4 font-brand text-[34px] leading-[1.04] tracking-[-0.03em] text-foreground md:text-[48px] lg:text-[56px]">
              One Pipeline, Six Verification Strategies.
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-base leading-8 text-muted-foreground md:text-lg">
              Each capability maps to a specific generation method, verification strategy, scale target, and output format. The pipeline adapts — the quality bar doesn't.
            </p>
          </div>

          <div className="mt-14 overflow-hidden border border-border bg-background shadow-[0_18px_50px_-34px_hsl(var(--color-navy)/0.18)]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead className="border-b border-border bg-secondary">
                  <tr className="font-mono-data text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    <th className="px-5 py-4 font-medium">Capability</th>
                    <th className="px-5 py-4 font-medium">Generation Method</th>
                    <th className="px-5 py-4 font-medium">Verification</th>
                    <th className="px-5 py-4 font-medium">Scale</th>
                    <th className="px-5 py-4 font-medium">Output Format</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.capability}
                      className={`border-b border-border transition-colors duration-150 hover:bg-[hsl(var(--color-gray-50))] ${index % 2 === 0 ? "bg-background" : "bg-[hsl(var(--color-gray-50))]"}`}
                    >
                      <td className="px-5 py-4 text-sm font-semibold text-[hsl(var(--color-purple-dark))]">{row.capability}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{row.method}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{row.verification}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{row.scale}</td>
                      <td className="px-5 py-4 font-mono-data text-[12px] text-muted-foreground">{row.format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
            <div className="bg-background px-6 py-5">
              <p className="font-mono-data text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Training loops</p>
              <p className="mt-2 text-sm font-medium text-foreground">SFT · RLHF (PPO/GRPO/DPO) · Continuous Evaluation</p>
            </div>
            <div className="bg-background px-6 py-5">
              <p className="font-mono-data text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Infrastructure</p>
              <p className="mt-2 text-sm font-medium text-foreground">HuggingFace · Weights & Biases · NVIDIA NeMo · Vertex AI</p>
            </div>
            <div className="bg-background px-6 py-5">
              <p className="font-mono-data text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Compliance</p>
              <p className="mt-2 text-sm font-medium text-foreground">PII filtering · toxicity checks · deduplication · domain alignment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticUseCaseComparisonSection;
