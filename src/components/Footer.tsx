const footerLinks = {
  Solutions: [
    { label: "Document Processing", href: "/solutions/document-processing" },
    { label: "Video & Audio", href: "/solutions/video-audio" },
    { label: "Synthetic Data", href: "/solutions/synthetic-data" },
    { label: "Custom Pipelines", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
    { label: "API Reference", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-0 mb-4">
              <span className="font-brand text-lg font-bold text-slate-200 tracking-tight">
                agentii
              </span>
              <span className="text-lg font-medium text-slate-200">.Solutions</span>
            </div>
            <p className="text-sm text-slate-400 max-w-[280px] leading-relaxed mb-4">
              Agentic-native data solutions for financial document processing and video generation AI training.
            </p>
            <p className="text-xs text-slate-400">
              A business unit of{" "}
              <a href="https://agentii.ai" className="text-primary hover:text-teal transition-colors">
                agentii.ai
              </a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-teal transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2026 agentii.Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-teal transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-teal transition-colors">
              Terms
            </a>
            <button className="text-xs text-slate-400 hover:text-teal transition-colors">
              EN / 中文
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
