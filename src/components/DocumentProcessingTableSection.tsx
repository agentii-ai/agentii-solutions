import { ArrowRight, CheckCheck, FileSpreadsheet, PenTool, PlugZap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const tableRows = [
  ["Unit", "Floorplan", "Move-in", "Lease End", "Balance"],
  ["01-13", "2A", "03/27/2023", "03/31/2025", "-427.00"],
  ["02-17", "2A", "12/16/2024", "12/18/2024", "+1.00"],
  ["03-08", "1B", "06/08/2024", "06/30/2025", "-276.00"],
];

const toolIcons = [CheckCheck, FileSpreadsheet, PenTool];

const DocumentProcessingTableSection = () => {
  const { t } = useTranslation('solutions');

  const workflowTabs = t('documentProcessing.table.tabs', { returnObjects: true }) as string[];

  return (
    <section className="bg-foreground py-20 text-background md:py-24 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto flex max-w-[820px] flex-wrap justify-center gap-3">
          {workflowTabs.map((tab, index) => (
            <div
              key={tab}
              className={`px-5 py-3 text-sm font-semibold tracking-[-0.01em] md:px-7 ${
                index === 0
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background/20 text-background/88"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-background/60">
              {t('documentProcessing.table.breadcrumb')}
            </p>
            <h2 className="mt-5 max-w-[460px] font-brand text-[36px] leading-[1.04] tracking-[-0.03em] text-background md:text-[48px] lg:text-[58px]">
              {t('documentProcessing.table.heading')}
            </h2>
            <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-background/78">
              {t('documentProcessing.table.description')}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-background/15 bg-background/5 px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">{t('documentProcessing.table.tableFidelity')}</p>
                <p className="mt-2 text-sm leading-relaxed text-background/80">{t('documentProcessing.table.tableFidelityDesc')}</p>
              </div>
              <div className="border border-background/15 bg-background/5 px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">{t('documentProcessing.table.agentHandoff')}</p>
                <p className="mt-2 text-sm leading-relaxed text-background/80">{t('documentProcessing.table.agentHandoffDesc')}</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-lg px-8">
                {t('documentProcessing.table.talkToExpert')} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg border-background/30 bg-background text-foreground hover:bg-background/90 px-8">
                {t('documentProcessing.table.checkSupportDocs')}
              </Button>
            </div>
          </div>

          <div className="bg-secondary px-6 py-8 text-foreground shadow-sm md:px-8 md:py-10 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_112px] lg:items-center">
              <div className="relative min-h-[420px] overflow-hidden border border-border bg-background px-5 py-5">
                <div className="absolute left-[20%] top-[18%] h-[72%] w-[34%] rotate-[-17deg] border border-border bg-background/90 shadow-sm" />
                <div className="absolute left-[42%] top-[8%] h-[80%] w-[44%] rotate-[-4deg] border border-border bg-background/95 shadow-sm" />

                <div className="relative ml-auto h-[84%] w-[64%] border border-border bg-background shadow-sm">
                  <div className="border-b-8 border-primary px-5 py-4">
                    <p className="text-center text-sm font-semibold tracking-[0.08em] text-foreground">Acord Forms</p>
                  </div>

                  <div className="px-5 py-4">
                    <div className="mb-4 grid grid-cols-[34px_28px_1fr_1fr_52px] gap-1.5 border-b border-border pb-3 text-[8px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                      {tableRows[0].map((cell) => (
                        <span key={cell}>{cell}</span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {tableRows.slice(1).map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-[34px_28px_1fr_1fr_52px] gap-1.5 bg-secondary/60 px-3 py-3 text-[10px] tabular-nums text-foreground">
                          {row.map((cell) => (
                            <span key={cell}>{cell}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:h-full">
                <div className="border-2 border-dashed border-primary/50 px-3 py-5">
                  <div className="flex flex-col gap-4">
                    {toolIcons.map((Icon, index) => (
                      <div
                        key={index}
                        className={`inline-flex h-14 w-14 items-center justify-center border ${
                          index === 1
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 border-l-2 border-primary pl-5">
              <PlugZap className="mt-1 h-5 w-5 text-primary" />
              <p className="max-w-[560px] text-sm leading-relaxed text-foreground">
                {t('documentProcessing.table.designNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentProcessingTableSection;
