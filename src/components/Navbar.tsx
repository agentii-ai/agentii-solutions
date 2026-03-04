import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Solutions", "Use Cases", "About"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-0">
          <span className="font-brand text-xl font-bold text-slate-200 tracking-tight">
            agentii
          </span>
          <span className="text-xl font-medium text-slate-200">.Solutions</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-[15px] font-medium text-slate-200 hover:text-primary transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors">
            <Globe size={16} />
            EN
          </button>
          <Button size="sm">Contact Us</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-slate-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-navy/98 backdrop-blur-md flex flex-col items-center justify-start pt-16 gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium text-slate-200 hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button>Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
