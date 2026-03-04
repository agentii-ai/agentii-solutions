import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
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

const navItems: NavItem[] = [
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      {
        heading: "DATA SOLUTIONS",
        items: [
          { label: "Document Processing", href: "#solutions" },
          { label: "Video & Audio Data", href: "#solutions" },
          { label: "Synthetic Data", href: "#solutions" },
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
    label: "Resources",
    href: "#differentiators",
  },
  {
    label: "About",
    href: "#about",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0 shrink-0">
          <span
            className={`font-brand text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-slate-200" : "text-primary"
            }`}
          >
            agentii
          </span>
          <span
            className={`text-xl font-medium transition-colors duration-300 ${
              scrolled ? "text-slate-200" : "text-foreground"
            }`}
          >
            .Solutions
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-150 border-b-2 ${
                  activeDropdown === item.label
                    ? scrolled
                      ? "border-teal text-white"
                      : "border-primary text-foreground"
                    : "border-transparent"
                } ${
                  scrolled
                    ? "text-slate-200 hover:text-white"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-0 pt-2"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-background border border-border shadow-lg min-w-[520px] p-6 flex gap-8">
                    {item.dropdown.map((col, colIdx) => (
                      <div key={colIdx} className="min-w-[140px]">
                        {col.heading && (
                          <p className="text-[11px] font-semibold text-muted-foreground tracking-[0.08em] uppercase mb-3">
                            {col.heading}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {col.items.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                className="text-[15px] font-medium text-foreground hover:text-primary transition-colors duration-150"
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

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Selector */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("__lang")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-150 ${
                scrolled
                  ? "border-slate-400/40 text-slate-400 hover:text-slate-200 hover:border-slate-200/40"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
              aria-label="Select language"
            >
              <Globe size={18} />
            </button>
            {activeDropdown === "__lang" && (
              <div
                className="absolute top-full right-0 mt-2 pt-0"
                onMouseEnter={() => handleMouseEnter("__lang")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-background border border-border rounded-lg shadow-lg min-w-[160px] p-2">
                  <p className="text-[11px] font-semibold text-muted-foreground tracking-[0.08em] uppercase px-3 pt-2 pb-2">
                    LANGUAGE
                  </p>
                  {[
                    { code: "EN", label: "English" },
                    { code: "中文", label: "中文" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        lang.code === "EN"
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          lang.code === "EN"
                            ? "border-foreground"
                            : "border-border"
                        }`}
                      >
                        {lang.code === "EN" && (
                          <span className="w-2 h-2 rounded-full bg-foreground" />
                        )}
                      </span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button
            size="sm"
            className="rounded-lg bg-teal hover:bg-teal-dark text-primary-foreground"
          >
            Request a Demo
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden transition-colors ${
            scrolled ? "text-slate-200" : "text-foreground"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-navy/98 backdrop-blur-md flex flex-col items-center justify-start pt-16 gap-8 z-50">
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
          <Button className="bg-teal hover:bg-teal-dark text-primary-foreground rounded-lg">
            Request a Demo
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
