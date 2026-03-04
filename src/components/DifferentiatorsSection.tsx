import { Check } from "lucide-react";

const differentiators = [
  "Agentic-native architecture — not retrofitted automation",
  "Replace 50+ point AI tools with a unified platform",
  "Launch your first agent in days, not quarters",
  "Run anywhere: on-prem, hybrid, or cross-cloud",
  "Enterprise-grade security and compliance built-in",
  "Human-in-the-loop validation for production confidence",
];

const DifferentiatorsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-[42px] font-semibold text-foreground leading-tight tracking-tight mb-4">
              Why agentii.Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[480px]">
              Deliberately designed to unify complex enterprise environments.
            </p>
            <ul className="space-y-4">
              {differentiators.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-teal mt-0.5 shrink-0" />
                  <span className="text-[15px] text-foreground leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparison table */}
          <div className="border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-300">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-700 uppercase tracking-widest">Feature</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-primary uppercase tracking-widest">agentii</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-widest">Others</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Agentic-native", true, false],
                  ["Multi-modal support", true, false],
                  ["On-prem deployment", true, false],
                  ["Real-time monitoring", true, true],
                  ["Human-in-the-loop", true, false],
                  ["50+ format support", true, false],
                ].map(([feature, us, them], i) => (
                  <tr key={i} className="border-b border-border hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-foreground font-medium">{feature as string}</td>
                    <td className="px-4 py-3 text-center">
                      {us ? <Check size={16} className="text-teal mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {them ? <Check size={16} className="text-gray-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
