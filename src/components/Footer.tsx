import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language?.startsWith("zh") ? "zh" : "en";

  const switchLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "zh" : "en");
  };

  const footerLinks = {
    [t("footer.solutions")]: [
      { label: t("footer.documentProcessing"), href: "/solutions/document-processing" },
      { label: t("footer.videoAudio"), href: "/solutions/video-audio" },
      { label: t("footer.syntheticData"), href: "/solutions/synthetic-data" },
      { label: t("footer.customPipelines"), href: "#" },
    ],
    [t("footer.company")]: [
      { label: t("footer.about"), href: "/about" },
      { label: t("footer.careers"), href: "#" },
      { label: t("footer.partners"), href: "#" },
      { label: t("footer.press"), href: "#" },
    ],
    [t("footer.resources")]: [
      { label: t("footer.blog"), href: "#" },
      { label: t("footer.documentation"), href: "#" },
      { label: t("footer.support"), href: "#" },
      { label: t("footer.apiReference"), href: "#" },
    ],
  };

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
              {t("footer.tagline")}
            </p>
            <p className="text-xs text-slate-400">
              {t("footer.businessUnit")}{" "}
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
            {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-teal transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-teal transition-colors">
              {t("footer.terms")}
            </a>
            <button
              className="text-xs text-slate-400 hover:text-teal transition-colors"
              onClick={switchLanguage}
            >
              {currentLang === "en" ? "EN / 中文" : "中文 / EN"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
