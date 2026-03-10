import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ROW1_BARS = [
  { w: "w-3", h: "h-full", bg: "bg-primary" },
  { w: "w-2", h: "h-full", bg: "bg-primary/80" },
  { w: "w-1.5", h: "h-[90%]", bg: "bg-foreground" },
  { w: "w-2", h: "h-full", bg: "bg-primary/60" },
  { w: "w-1", h: "h-[85%]", bg: "bg-foreground/70" },
  { w: "w-3", h: "h-full", bg: "bg-primary" },
  { w: "w-1.5", h: "h-[75%]", bg: "bg-teal" },
  { w: "w-2", h: "h-full", bg: "bg-foreground/50" },
  { w: "w-4", h: "h-[95%]", bg: "bg-primary/70" },
  { w: "w-1", h: "h-full", bg: "bg-foreground" },
  { w: "w-6", h: "h-full", bg: "bg-primary/40" },
  { w: "w-2", h: "h-[80%]", bg: "bg-teal/60" },
  { w: "w-3", h: "h-full", bg: "bg-foreground/80" },
  { w: "w-8", h: "h-[90%]", bg: "bg-primary/50" },
  { w: "w-1.5", h: "h-full", bg: "bg-teal" },
  { w: "w-4", h: "h-[85%]", bg: "bg-foreground/40" },
  { w: "w-12", h: "h-full", bg: "bg-primary/30" },
  { w: "w-3", h: "h-[70%]", bg: "bg-teal/80" },
  { w: "w-6", h: "h-full", bg: "bg-primary" },
  { w: "w-2", h: "h-[90%]", bg: "bg-foreground/60" },
  { w: "w-16", h: "h-full", bg: "bg-teal/40" },
  { w: "w-4", h: "h-[75%]", bg: "bg-primary/60" },
  { w: "w-24", h: "h-full", bg: "bg-teal/50" },
];

const ROW2_BARS = [
  { w: "w-1", bg: "bg-primary" },
  { w: "w-1.5", bg: "bg-foreground/80" },
  { w: "w-1", bg: "bg-primary/70" },
  { w: "w-2", bg: "bg-foreground" },
  { w: "w-1", bg: "bg-primary/50" },
  { w: "w-1.5", bg: "bg-teal/80" },
  { w: "w-3", bg: "bg-primary/60" },
  { w: "w-1", bg: "bg-foreground/60" },
  { w: "w-4", bg: "bg-primary" },
  { w: "w-2", bg: "bg-teal" },
  { w: "w-6", bg: "bg-primary/40" },
  { w: "w-3", bg: "bg-foreground/30" },
  { w: "w-8", bg: "bg-teal/60" },
  { w: "w-4", bg: "bg-primary/80" },
  { w: "w-12", bg: "bg-teal/40" },
  { w: "w-6", bg: "bg-primary/50" },
];

const HeroSection = () => {
  const { t } = useTranslation('home');
  const [animationStarted, setAnimationStarted] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const barsRef = useRef<HTMLDivElement>(null);
  const MAX_LOOPS = 10;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animationStarted || loopCount >= MAX_LOOPS) return;

    const cycleDuration = 3200;
    const pauseBetweenLoops = 1000;

    const timer = setTimeout(() => {
      if (loopCount + 1 < MAX_LOOPS) {
        setAnimationStarted(false);
        setAnimationKey((prev) => prev + 1);
        setLoopCount((prev) => prev + 1);
        setTimeout(() => setAnimationStarted(true), 50);
      }
    }, cycleDuration + pauseBetweenLoops);

    return () => clearTimeout(timer);
  }, [animationStarted, loopCount]);

  const { ref: featureRef, isVisible: featureVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 lg:px-12 pt-[120px] pb-16 lg:pt-[160px] lg:pb-24">
        <div className="max-w-[820px]">
          <h1 className="font-brand text-[32px] md:text-[40px] lg:text-[52px] font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-6">
            <span className="block animate-fade-in-up">{t('hero.headline1')}</span>
            <span className="block animate-fade-in-up delay-100">{t('hero.headline2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[580px] leading-relaxed mb-10 animate-fade-in-up delay-200">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 animate-scale-in delay-400">
            <Button variant="teal" size="lg" className="rounded-lg px-8">
              {t('buttons.contactUs', { ns: 'common' })}
            </Button>
            <Button variant="outline" size="lg" className="rounded-lg px-8">
              {t('buttons.requestDemo', { ns: 'common' })} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Abstract Data Visualization Bar — animated data annotation process */}
      <div ref={barsRef} className="w-full overflow-hidden px-6 lg:px-12 pb-0">
        <div key={animationKey} className="container mx-auto">
          <div className="flex h-12 md:h-16 gap-[2px] items-end max-w-[900px]">
            {ROW1_BARS.map((bar, i) => (
              <div
                key={i}
                className={`${bar.w} ${bar.h} shrink-0 ${
                  animationStarted ? bar.bg : "bg-slate-800"
                }`}
                style={{
                  transform: animationStarted
                    ? "translateX(0)"
                    : "translateX(calc(900px - 100%))",
                  opacity: animationStarted ? 1 : 0,
                  transition: [
                    `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.065}s`,
                    `opacity 0.18s ease ${i * 0.065}s`,
                    `background-color 0.5s ease ${i * 0.065 + 0.55}s`,
                  ].join(", "),
                }}
              />
            ))}
          </div>
          <div className="flex h-10 md:h-14 gap-[2px] items-start max-w-[600px] mt-[2px]">
            {ROW2_BARS.map((bar, i) => {
              const delay = 0.35 + i * 0.065;
              return (
                <div
                  key={i}
                  className={`${bar.w} h-full shrink-0 ${
                    animationStarted ? bar.bg : "bg-slate-800"
                  }`}
                  style={{
                    transform: animationStarted
                      ? "translateX(0)"
                      : "translateX(calc(600px - 100%))",
                    opacity: animationStarted ? 1 : 0,
                    transition: [
                      `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                      `opacity 0.18s ease ${delay}s`,
                      `background-color 0.5s ease ${delay + 0.55}s`,
                    ].join(", "),
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Dark Feature Strip */}
      <div ref={featureRef} className="bg-navy text-slate-200 py-16 lg:py-20 mt-0">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className={`font-brand text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.01em] mb-10 max-w-[720px] transition-all duration-700 ${featureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {t('hero.featureHeadline').split('\n').map((line: string, i: number) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(t('hero.features', { returnObjects: true }) as string[]).map((text, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 border border-slate-700 px-5 py-4 bg-slate/50 ${featureVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: featureVisible ? `${i * 80}ms` : undefined }}
              >
                <span className="w-3 h-3 bg-teal shrink-0" />
                <span className="text-sm md:text-[15px] font-medium text-slate-200">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
