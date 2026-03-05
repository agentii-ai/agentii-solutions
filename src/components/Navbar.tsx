import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownColumn {
  heading?: string;
  items: DropdownItem[];
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownColumn[];
}

type NavbarTone = "default" | "about" | "demo";

interface NavbarProps {
  tone?: NavbarTone;
}

const navItems: NavItem[] = [
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      {
        heading: "DATA SOLUTIONS",
        items: [
          { label: "Document Processing", href: "/solutions/document-processing" },
          { label: "Video & Audio Data", href: "/solutions/video-audio" },
          { label: "Synthetic Data", href: "/solutions/synthetic-data" },
        ],
      },
      {
        heading: "INDUSTRIES",
        items: [
          { label: "Financial Services", href: "#use-cases" },
          { label: "Insurance", href: "#use-cases" },
        ],
      },
      {
        heading: "CAPABILITIES",
        items: [
          { label: "Agentic Pipelines", href: "#pipeline" },
          { label: "Multi-Format Ingestion", href: "#pipeline" },
          { label: "Quality Assurance", href: "#pipeline" },
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    href: "#use-cases",
    dropdown: [
      {
        heading: "BY INDUSTRY",
        items: [
          { label: "Finance & Banking", href: "#use-cases" },
          { label: "Insurance", href: "#use-cases" },
          { label: "Video AI Training", href: "#use-cases" },
        ],
      },
      {
        heading: "BY APPLICATION",
        items: [
          { label: "Document Extraction", href: "#use-cases" },
          { label: "Synthetic Generation", href: "#use-cases" },
          { label: "Agent Training Data", href: "#use-cases" },
        ],
      },
    ],
  },
  {
    label: "Platform",
    href: "#pipeline",
  },
  {
    label: "Researches",
    href: "#differentiators",
  },
  {
    label: "About",
    href: "/about",
  },
];

const Navbar = ({ tone = "default" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTone = tone === "about";
  const demoTone = tone === "demo";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const navShellClass = scrolled
    ? "bg-navy/95 backdrop-blur-md shadow-lg"
    : aboutTone
      ? "bg-teal-light/95 backdrop-blur-sm border-b border-primary/10"
      : demoTone
        ? "bg-lilac-light/95 backdrop-blur-sm border-b border-foreground/10"
        : "bg-background/95 backdrop-blur-sm";

  const logoPrimaryClass = scrolled ? "text-slate-200" : aboutTone ? "text-navy" : demoTone ? "text-lilac-dark" : "text-primary";
  const logoSecondaryClass = scrolled ? "text-slate-200" : "text-foreground";
  const desktopLinkBaseClass = scrolled
    ? "text-slate-200 hover:text-white"
    : aboutTone
      ? "text-foreground hover:text-purple"
      : demoTone
        ? "text-foreground hover:text-lilac-dark"
        : "text-foreground hover:text-primary";
  const activeBorderClass = scrolled ? "border-teal text-white" : aboutTone ? "border-purple text-foreground" : demoTone ? "border-lilac-dark text-foreground" : "border-primary text-foreground";
  const actionButtonClass = aboutTone
    ? "rounded-lg bg-purple hover:bg-purple-dark text-primary-foreground"
    : demoTone
      ? "rounded-lg bg-lilac-dark hover:bg-lilac text-primary-foreground"
      : "rounded-lg bg-teal hover:bg-teal-dark text-primary-foreground";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navShellClass}`}>
      <div className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-12">
        <a href="/" className="flex shrink-0 items-center gap-0">
          <span className={`font-brand text-xl font-bold tracking-tight transition-colors duration-300 ${logoPrimaryClass}`}>
            agentii
          </span>
          <span className={`text-xl font-medium transition-colors duration-300 ${logoSecondaryClass}`}>
            .Solutions
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 border-b-2 px-4 py-2 text-[15px] font-medium transition-colors duration-150 ${
                  activeDropdown === item.label ? activeBorderClass : "border-transparent"
                } ${desktopLinkBaseClass}`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                  />
                )}
              </a>

              {item.dropdown && activeDropdown === item.label && (
                <div
                  className="absolute left-0 top-full mt-0 pt-2"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex min-w-[520px] gap-8 border border-border bg-background p-6 shadow-lg">
                    {item.dropdown.map((col, colIdx) => (
                      <div key={colIdx} className="min-w-[140px]">
                        {col.heading && (
                          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                            {col.heading}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {col.items.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                className="text-[15px] font-medium text-foreground transition-colors duration-150 hover:text-primary"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("__lang")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-150 ${
                scrolled
                  ? "border-slate-400/40 text-slate-400 hover:border-slate-200/40 hover:text-slate-200"
                  : aboutTone
                    ? "border-foreground/15 text-foreground hover:border-purple/50 hover:text-purple"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
              aria-label="Select language"
            >
              <Globe size={18} />
            </button>
            {activeDropdown === "__lang" && (
              <div
                className="absolute right-0 top-full mt-2 pt-0"
                onMouseEnter={() => handleMouseEnter("__lang")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="min-w-[160px] rounded-lg border border-border bg-background p-2 shadow-lg">
                  <p className="px-3 pt-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    LANGUAGE
                  </p>
                  {[
                    { code: "EN", label: "English" },
                    { code: "中文", label: "中文" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        lang.code === "EN"
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                          lang.code === "EN" ? "border-foreground" : "border-border"
                        }`}
                      >
                        {lang.code === "EN" && <span className="h-2 w-2 rounded-full bg-foreground" />}
                      </span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button size="sm" className={actionButtonClass} asChild>
            <a href="/request-demo">Request a Demo</a>
          </Button>
        </div>

        <button
          className={`lg:hidden transition-colors ${scrolled ? "text-slate-200" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-50 flex flex-col items-center justify-start gap-8 bg-navy/98 pt-16 backdrop-blur-md lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-slate-200 hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className={actionButtonClass} asChild>
            <a href="/request-demo">Request a Demo</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
