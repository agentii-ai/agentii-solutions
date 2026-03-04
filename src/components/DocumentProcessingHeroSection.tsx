import { ArrowRight, CheckCircle2, FileSearch, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";

const bulletPoints = [
  "Extract fields, line items, and nested tables from statements, reports, and compliance documents.",
  "Every output includes confidence scores, field lineage, and evidence traces.",
  "Exception routing keeps agents moving — only edge cases reach human review.",
];

const metricCards = [
  {
    label: "Input mix",
    value: "PDF · scans · tables · forms",
    icon: FileSearch,
  },
  {
    label: "Output shape",
    value: "Fields · tables · reasoning trace",
    icon: TableProperties,
  },
  {
    label: "Validation",
    value: "Confidence scoring + review queue",
    icon: CheckCircle2,
  },
];

const fieldRows = [
  { label: "Net Revenue (Q3)", value: "$ 4,891,200" },
  { label: "Gross Profit", value: "$ 1,878,400" },
  { label: "Operating Income", value: "$ 937,700", active: true },
  { label: "Net Income", value: "$ 626,900" },
  { label: "EBITDA", value: "$ 1,071,600" },
  { label: "EPS — Diluted", value: "$ 3.09" },
];

const incomeStatementRows: { label: string; q1: string; q2: string; q3: string; bold?: boolean }[] = [
  { label: "Net Revenue", q1: "4,358,100", q2: "4,612,400", q3: "4,891,200", bold: true },
  { label: "Cost of Revenue", q1: "(2,738,711)", q2: "(2,887,300)", q3: "(3,012,800)" },
  { label: "Gross Profit", q1: "1,619,389", q2: "1,725,100", q3: "1,878,400", bold: true },
  { label: "Selling & Marketing", q1: "(312,400)", q2: "(328,100)", q3: "(341,600)" },
  { label: "General & Admin", q1: "(245,800)", q2: "(251,200)", q3: "(263,400)" },
  { label: "R&D Expenses", q1: "(189,600)", q2: "(195,400)", q3: "(201,800)" },
  { label: "Depreciation", q1: "(86,200)", q2: "(88,100)", q3: "(89,700)" },
  { label: "Amortization", q1: "(42,100)", q2: "(43,600)", q3: "(44,200)" },
  { label: "Restructuring", q1: "—", q2: "(12,400)", q3: "—" },
  { label: "Total OpEx", q1: "(876,100)", q2: "(918,800)", q3: "(940,700)", bold: true },
  { label: "Operating Income", q1: "743,289", q2: "806,300", q3: "937,700", bold: true },
  { label: "Interest Income", q1: "12,400", q2: "14,200", q3: "15,800" },
  { label: "Interest Expense", q1: "(68,900)", q2: "(65,200)", q3: "(61,400)" },
  { label: "FX Gain / (Loss)", q1: "(3,200)", q2: "7,800", q3: "(1,400)" },
  { label: "Other Income", q1: "8,200", q2: "3,800", q3: "9,400" },
  { label: "Pre-Tax Income", q1: "691,789", q2: "766,900", q3: "900,100", bold: true },
  { label: "Provision for Tax", q1: "(208,537)", q2: "(233,400)", q3: "(273,200)" },
  { label: "Net Income", q1: "483,232", q2: "533,500", q3: "626,900", bold: true },
  { label: "Basic EPS", q1: "2.41", q2: "2.67", q3: "3.13" },
  { label: "Diluted EPS", q1: "2.38", q2: "2.63", q3: "3.09" },
  { label: "Shares Out. (M)", q1: "200.4", q2: "200.0", q3: "200.2" },
  { label: "EBITDA", q1: "871,589", q2: "937,000", q3: "1,071,600", bold: true },
  { label: "Gross Margin %", q1: "37.2%", q2: "37.4%", q3: "38.4%" },
  { label: "Operating Margin %", q1: "17.1%", q2: "17.5%", q3: "19.2%" },
  { label: "Net Margin %", q1: "11.1%", q2: "11.6%", q3: "12.8%" },
];

const DocumentProcessingHeroSection = () => {
  return (
    <section className="bg-background pt-[88px] md:pt-[96px]">
      <div className="bg-navy text-slate-200">
        <div className="container mx-auto px-6 pt-16 pb-0 md:pt-24 lg:px-12 lg:pt-28">
          <div className="max-w-[820px] pb-14 md:pb-20">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="h-[3px] w-4 bg-primary" aria-hidden="true" />
              Solutions
            </div>
            <h1 className="font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
              Agent-use-ready
              <br />
              document extraction.
              <br />
              <span className="text-primary">Financial-grade precision.</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-primary-light">
        <div className="container mx-auto grid items-stretch gap-0 px-0 md:grid-cols-[minmax(0,560px)_1fr] lg:px-12">
          <div className="flex flex-col justify-between px-6 py-12 md:px-10 md:py-14 lg:px-12">
            <div>
              <p className="max-w-[520px] text-lg leading-relaxed text-foreground md:text-[20px]">
                Turn PDFs, scans, and forms into structured records with reasoning traces — so agents can act on the data, not just read it.
              </p>

              <div className="mt-8 space-y-5">
                {bulletPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center border border-primary/35 bg-background text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <p className="max-w-[520px] text-base leading-relaxed text-foreground">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-lg px-8">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="rounded-lg px-8">
                  Explore Features <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
              {metricCards.map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-background px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border-l border-border/70 px-4 py-10 md:px-8 lg:px-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px] opacity-70" aria-hidden="true" />
            <div className="absolute bottom-10 left-10 hidden h-14 w-14 border border-primary/25 md:block" aria-hidden="true" />
            <div className="absolute right-12 top-12 hidden h-12 w-12 border border-foreground/15 md:block" aria-hidden="true" />
            <div className="absolute bottom-16 left-16 hidden h-20 w-20 bg-[radial-gradient(circle,hsl(var(--foreground))_1.2px,transparent_1.2px)] bg-[length:10px_10px] opacity-90 md:block" aria-hidden="true" />

            <div className="relative flex min-h-[420px] items-center justify-center py-4 md:min-h-[540px]">
              <div className="relative w-full max-w-[560px]">
                <div className="absolute right-0 top-0 h-[480px] w-[74%] border border-border bg-background/95 shadow-sm md:h-[560px]">
                  <div className="flex h-full flex-col px-3 py-3 md:px-4 md:py-4">
                    <p className="text-center font-brand text-[12px] tracking-[-0.01em] text-foreground md:text-[14px]">CONSOLIDATED INCOME STATEMENT</p>
                    <p className="mb-1.5 text-center text-[7px] text-muted-foreground md:text-[8px]">Unaudited, in thousands ($)</p>
                    <div className="grid grid-cols-[1fr_46px_46px_46px] gap-x-1 border-b border-border/80 pb-1 text-[7px] font-semibold uppercase tracking-wider text-muted-foreground md:grid-cols-[1fr_54px_54px_54px] md:gap-x-1.5 md:text-[8px]">
                      <span />
                      <span className="text-right">Q1 FY24</span>
                      <span className="text-right">Q2 FY24</span>
                      <span className="text-right">Q3 FY24</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      {incomeStatementRows.map((row) => (
                        <div
                          key={row.label}
                          className={`grid grid-cols-[1fr_46px_46px_46px] gap-x-1 border-b border-border/30 py-[2px] text-[7.5px] tabular-nums md:grid-cols-[1fr_54px_54px_54px] md:gap-x-1.5 md:py-[3px] md:text-[9px] ${
                            row.bold ? "font-semibold text-foreground" : "text-foreground/70"
                          }`}
                        >
                          <span className="truncate pr-1">{row.label}</span>
                          <span className="text-right">{row.q1}</span>
                          <span className="text-right">{row.q2}</span>
                          <span className="text-right">{row.q3}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t-2 border-primary mt-1" />
                  </div>
                </div>

                <div className="relative mt-10 w-[68%] border border-border bg-secondary/80 px-5 py-5 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <p className="font-brand text-[18px] tracking-[-0.01em] text-foreground">Income statement</p>
                    <span className="inline-flex h-5 w-5 items-center justify-center bg-primary text-primary-foreground">‹</span>
                  </div>

                  <div className="space-y-4 py-4">
                    {fieldRows.map((row) => (
                      <div key={row.label} className="grid grid-cols-[1fr_auto] items-center gap-4 text-sm">
                        <span className="text-foreground">{row.label}</span>
                        <span className={`min-w-[120px] border px-3 py-1.5 text-right ${row.active ? "border-primary bg-background text-foreground shadow-sm" : "border-transparent bg-background/80 text-muted-foreground"}`}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button size="sm" className="mt-4 rounded-lg px-5">
                    Save
                  </Button>
                </div>

                <div className="absolute bottom-[52px] left-[52%] hidden w-[160px] rotate-[18deg] border-t-2 border-foreground/70 md:block" aria-hidden="true" />
                <div className="absolute bottom-8 right-6 hidden border border-primary bg-background px-3 py-1 text-xs font-medium text-foreground md:block" aria-hidden="true">
                  $ 626,900
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessingHeroSection;
