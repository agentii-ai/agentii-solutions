const metrics = [
  { value: "98%", label: "Accuracy", color: "text-primary" },
  { value: "50+", label: "Formats Supported", color: "text-teal" },
  { value: "3x", label: "Faster Processing", color: "text-primary" },
  { value: "24/7", label: "Agent Uptime", color: "text-teal" },
];

const MetricsBar = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center py-6 ${
                i < metrics.length - 1 ? "lg:border-r lg:border-border" : ""
              }`}
            >
              <span className={`text-4xl lg:text-5xl font-bold font-mono ${m.color} mb-2`}>
                {m.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
