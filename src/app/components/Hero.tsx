"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HardHat, Stethoscope, Car, HeartCrack, ChevronRight, CircleCheck, Phone } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import { translations } from "../i18n/translations";

const categories = [
  {
    icon: HardHat,
    label: "Infortunio sul lavoro",
    desc: "In cantiere, in ufficio o in itinere",
    bg: "bg-orange-50 hover:bg-orange-100",
    border: "border-orange-200",
    iconColor: "text-[#FF6B00]",
  },
  {
    icon: Stethoscope,
    label: "Errore medico",
    desc: "Visita, intervento o diagnosi",
    bg: "bg-blue-50 hover:bg-blue-100",
    border: "border-blue-200",
    iconColor: "text-[#1A365D]",
  },
  {
    icon: Car,
    label: "Incidente stradale",
    desc: "Auto, moto, bici o pedone",
    bg: "bg-emerald-50 hover:bg-emerald-100",
    border: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: HeartCrack,
    label: "Sinistro mortale",
    desc: "Risarcimento per le famiglie",
    bg: "bg-red-50 hover:bg-red-100",
    border: "border-red-200",
    iconColor: "text-red-600",
  },
];

export default function Hero() {
  const { locale } = useLocale();
  const t = translations[locale];
  const pills = t.hero.pills;
  const categoriesI18n = t.hero.categories;
  const statsByLocale = {
    it: [
      { value: 200, suffix: "+", label: "Pratiche gestite con successo" },
      { value: 80, suffix: "", label: "Infortuni sul lavoro" },
      { value: 70, suffix: "", label: "Incidenti stradali" },
      { value: 50, suffix: "", label: "Errori medici" },
      { value: 24, suffix: "h", label: "Risposta garantita" },
    ],
    en: [
      { value: 200, suffix: "+", label: "Cases successfully handled" },
      { value: 80, suffix: "", label: "Work injury claims" },
      { value: 70, suffix: "", label: "Road accident claims" },
      { value: 50, suffix: "", label: "Medical error claims" },
      { value: 24, suffix: "h", label: "Response guaranteed" },
    ],
    fr: [
      { value: 200, suffix: "+", label: "Dossiers traites avec succes" },
      { value: 80, suffix: "", label: "Accidents du travail" },
      { value: 70, suffix: "", label: "Accidents de la route" },
      { value: 50, suffix: "", label: "Erreurs medicales" },
      { value: 24, suffix: "h", label: "Reponse garantie" },
    ],
    ro: [
      { value: 200, suffix: "+", label: "Dosare gestionate cu succes" },
      { value: 80, suffix: "", label: "Accidente de munca" },
      { value: 70, suffix: "", label: "Accidente rutiere" },
      { value: 50, suffix: "", label: "Erori medicale" },
      { value: 24, suffix: "h", label: "Raspuns garantat" },
    ],
    sq: [
      { value: 200, suffix: "+", label: "Ceshtje te menaxhuara me sukses" },
      { value: 80, suffix: "", label: "Aksidente ne pune" },
      { value: 70, suffix: "", label: "Aksidente rrugore" },
      { value: 50, suffix: "", label: "Gabime mjekesore" },
      { value: 24, suffix: "h", label: "Pergjigje e garantuar" },
    ],
    ar: [
      { value: 200, suffix: "+", label: "ملفات اديرت بنجاح" },
      { value: 80, suffix: "", label: "اصابات عمل" },
      { value: 70, suffix: "", label: "حوادث سير" },
      { value: 50, suffix: "", label: "اخطاء طبية" },
      { value: 24, suffix: "h", label: "رد مضمون" },
    ],
  } as const;
  const stats = useMemo(
    () =>
      t.hero.stats ??
      statsByLocale[locale] ??
      statsByLocale.it,
    [t.hero.stats, locale]
  );
  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [started, setStarted] = useState(false);
  const [counters, setCounters] = useState<number[]>(() => stats.map(() => 0));

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1700;
    const startAt = performance.now();
    let frameId = 0;
    const targetValues = stats.map((item: { value: number }) => item.value);

    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / duration, 1);
      // Ease-out esponenziale: rallenta nettamente vicino al valore finale.
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCounters(targetValues.map((target: number) => Math.round(target * eased)));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, stats]);

  return (
    <section id="hero" className="overflow-hidden scroll-mt-52">

      {/* ── HERO BACKGROUND ── */}
      <div className="relative min-h-[90svh] lg:min-h-screen flex items-start lg:items-center bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-16 w-[320px] h-[320px] rounded-full bg-[#1A365D]/12 blur-3xl" />
          <div className="absolute top-[28%] -right-20 w-[300px] h-[300px] rounded-full bg-[#FF6B00]/14 blur-3xl" />
          <div className="absolute -bottom-24 left-[22%] w-[360px] h-[360px] rounded-full bg-[#1A365D]/10 blur-3xl" />
          <div className="absolute bottom-12 right-[8%] w-[220px] h-[220px] rounded-full bg-[#FF6B00]/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(26,54,93,0.10),transparent_40%),radial-gradient(circle_at_80%_35%,rgba(255,107,0,0.10),transparent_40%)]" />
        </div>

        {/* Content: centered on mobile, left-aligned on desktop */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-[154px] sm:pt-[172px] lg:pt-[190px] pb-8">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-7">

            {/* Pills — single row, compact on mobile */}
            <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm overflow-hidden">
              {pills.map((p: string, i: number) => (
                <div key={p} className="flex items-center">
                  <span className="flex items-center gap-1 px-2 py-2 lg:px-5 lg:py-3 text-[11px] lg:text-base font-semibold text-gray-700 whitespace-nowrap">
                    <CircleCheck size={12} className="text-[#28A745] shrink-0 lg:hidden" strokeWidth={2.5} />
                    <CircleCheck size={16} className="text-[#28A745] shrink-0 hidden lg:block" strokeWidth={2.5} />
                    {p}
                  </span>
                  {i < pills.length - 1 && (
                    <span className="w-px h-4 lg:h-6 bg-gray-200 shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-cal text-[2.2rem] md:text-[3.2rem] lg:text-[4.5rem] text-[#1A365D] leading-[1.02] mb-0 lg:whitespace-nowrap">
                {t.hero.title}
              </h1>
              <p className="font-cal text-[2.2rem] md:text-[3.2rem] lg:text-[4.5rem] text-[#FF6B00] leading-[1.02] mt-0">
                {t.hero.subtitleLine1 ?? t.hero.subtitle}
                <br />
                {t.hero.subtitleLine2 ?? ""}
              </p>
            </div>

            {/* Pre-CTA line */}
            <p className="text-[15px] sm:text-base md:text-lg font-semibold text-[#1A365D] max-w-[22rem] sm:max-w-3xl leading-relaxed text-pretty">
              {t.hero.description ?? t.hero.line}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact-form"
                className="btn-mobile-unified w-[270px] sm:w-[300px] inline-flex items-center justify-center gap-2.5 bg-[#FF6B00] hover:bg-[#e55f00] active:scale-95 text-white font-black shadow-lg shadow-orange-200 hover:shadow-xl transition-all duration-200 uppercase"
              >
                <CircleCheck size={18} strokeWidth={2.5} />
                {t.hero.ctaPrimary ?? t.hero.cta}
              </a>
              <a
                href="#contact-form"
                className="btn-mobile-unified w-[270px] sm:w-[300px] inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white active:scale-95 text-[#1A365D] border border-[#1A365D]/20 font-black shadow-sm hover:shadow-md transition-all duration-200 uppercase"
              >
                <Phone size={18} strokeWidth={2.5} />
                {t.hero.ctaSecondary ?? t.header.call}
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── CATEGORY CARDS ── */}
      <div className="bg-white max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
          {t.hero.catTitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, bg, border, iconColor }, i) => (
            <a
              key={categoriesI18n[i][0]}
              href="#contact-form"
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl border-2 ${bg} ${border} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200">
                <Icon size={24} className={iconColor} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1A365D] font-bold text-sm sm:text-base leading-snug">{categoriesI18n[i][0]}</p>
                <p className="text-gray-400 text-xs truncate">{categoriesI18n[i][1]}</p>
              </div>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-[#FF6B00] transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>

      <div ref={statsRef} className="bg-[#1A365D] py-5 sm:py-7 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-5 gap-1.5 sm:gap-4 md:gap-6 text-center">
          {stats.map((item: { value: number; suffix?: string; label: string }, index: number) => (
            <div key={item.label}>
              <p className="text-white font-black text-[1.6rem] sm:text-4xl leading-none">
                {counters[index]}
                {item.suffix ?? ""}
              </p>
              <p className="text-blue-200 text-[9px] sm:text-sm mt-1 sm:mt-2 leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
