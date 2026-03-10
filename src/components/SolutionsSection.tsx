import { FileText, Video, Cpu } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const SolutionsSection = () => {
  const { t } = useTranslation('home');

  const solutions = [
    {
      icon: FileText,
      title: t('solutions.document.title'),
      description: t('solutions.document.description'),
      link: "/solutions/document-processing",
    },
    {
      icon: Video,
      title: t('solutions.video.title'),
      description: t('solutions.video.description'),
      link: "/solutions/video-audio",
    },
    {
      icon: Cpu,
      title: t('solutions.synthetic.title'),
      description: t('solutions.synthetic.description'),
      link: "/solutions/synthetic-data",
    },
  ];

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-foreground leading-tight tracking-tight mb-4">
          {t('solutions.heading')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mb-16">
          {t('solutions.subheading')}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="group border border-border p-6 lg:p-8 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-sm"
            >
              <s.icon size={32} className="text-teal mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{s.description}</p>
              <a
                href={s.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                {t('buttons.learnMore', { ns: 'common' })} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
