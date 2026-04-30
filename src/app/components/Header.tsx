"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useLocale, type Locale } from "../i18n/LocaleContext";
import { translations } from "../i18n/translations";

const languages = [
  { code: "IT", flag: "🇮🇹", locale: "it" as Locale },
  { code: "AR", flag: "🇸🇦", locale: "ar" as Locale },
  { code: "SQ", flag: "🇦🇱", locale: "sq" as Locale },
  { code: "RO", flag: "🇷🇴", locale: "ro" as Locale },
  { code: "EN", flag: "🇬🇧", locale: "en" as Locale },
  { code: "FR", flag: "🇫🇷", locale: "fr" as Locale },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = translations[locale];
  const sectionLabels = {
    it: ["Home", "Perche noi", "Servizi", "Lingue", "Come funziona", "Testimonianze", "Chi siamo", "FAQ", "Guide", "Contatti"],
    en: ["Home", "Why us", "Services", "Languages", "How it works", "Testimonials", "About us", "FAQ", "Guides", "Contact"],
    fr: ["Accueil", "Pourquoi nous", "Services", "Langues", "Comment ca marche", "Temoignages", "Qui sommes-nous", "FAQ", "Guides", "Contact"],
    ro: ["Acasa", "De ce noi", "Servicii", "Limbi", "Cum functioneaza", "Testimoniale", "Despre noi", "FAQ", "Ghiduri", "Contact"],
    sq: ["Kryefaqja", "Pse ne", "Sherbime", "Gjuhet", "Si funksionon", "Deshmi", "Rreth nesh", "FAQ", "Udhezues", "Kontakt"],
    ar: ["الرئيسية", "لماذا نحن", "الخدمات", "اللغات", "كيف يعمل", "الشهادات", "من نحن", "الاسئلة", "الادلة", "اتصل"],
  }[locale];
  const sections = [
    { href: "#hero", label: sectionLabels[0] },
    { href: "#features", label: sectionLabels[1] },
    { href: "#services", label: sectionLabels[2] },
    { href: "#language-support", label: sectionLabels[3] },
    { href: "#how-it-works", label: sectionLabels[4] },
    { href: "#testimonials", label: sectionLabels[5] },
    { href: "#about-us", label: sectionLabels[6] },
    { href: "#faq", label: sectionLabels[7] },
    { href: "#guide-gratuite", label: sectionLabels[8] },
    { href: "#contact-form", label: sectionLabels[9] },
  ];
  const sectionIds = [
    "hero",
    "features",
    "services",
    "language-support",
    "how-it-works",
    "testimonials",
    "about-us",
    "faq",
    "guide-gratuite",
    "contact-form",
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const offset = 220;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (window.scrollY + offset >= element.offsetTop) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setMobileLangOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToId = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToId(targetId);
    setMobileMenuOpen(false);
    setMobileLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#E42A2A] text-white text-[10px] sm:text-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-1.5 sm:h-9 sm:py-0 flex items-center justify-center text-center">
          <span className="leading-tight">
            <span className="inline-flex w-2 h-2 rounded-full bg-white animate-pulse align-middle mr-1.5 -mt-[1px]" />
            {t.header.bannerPrefix}{" "}
            <a
              href="#contact-form"
              onClick={(e) => scrollTo(e, "contact-form")}
              className="underline font-semibold"
            >
              {t.header.bannerLink}
            </a>
          </span>
        </div>
      </div>

      <div className={`transition-all duration-300 bg-white ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-[72px] sm:h-[86px] flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="flex items-center select-none shrink-0">
            <Image
              src="/logo.svg"
              alt="FacileRisarcimento"
              width={0}
              height={0}
              sizes="(max-width: 640px) 145px, 210px"
              className="h-[40px] sm:h-[56px] w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-2 lg:gap-3 text-xs font-semibold text-[#1A365D]">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => setLocale(language.locale)}
                className={`px-1.5 py-1 rounded-full border transition-all cursor-pointer ${
                  locale === language.locale
                    ? "bg-transparent border-[#FF6B00] scale-110"
                    : "bg-transparent border-transparent hover:border-[#FF6B00] hover:scale-110"
                }`}
                aria-label={language.code}
              >
                <span aria-hidden className="text-3xl leading-none">
                  {language.flag}
                </span>
              </button>
            ))}
          </div>

          <div className="relative flex items-center gap-2">
            <a
              href="#contact-form"
              onClick={(e) => scrollTo(e, "contact-form")}
              className="font-bold px-2.5 sm:px-4 py-2 rounded-xl text-xs sm:text-base active:scale-95 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 shadow-sm bg-[#FF6B00] text-white hover:bg-[#e55f00]"
            >
              <Phone size={15} strokeWidth={2.5} />
              <span className="hidden sm:inline">{t.header.call}</span>
              <span className="sm:hidden">Chiama</span>
            </a>

            <div className="md:hidden relative">
              <button
                type="button"
                onClick={() => {
                  setMobileLangOpen((prev) => !prev);
                  setMobileMenuOpen(false);
                }}
                aria-label="Open language selector"
                className="h-10 rounded-xl border border-gray-200 text-[#1A365D] bg-white flex items-center justify-center cursor-pointer px-2.5 gap-1.5"
              >
                <span aria-hidden className="text-lg leading-none">
                  {languages.find((language) => language.locale === locale)?.flag ?? "🌐"}
                </span>
                <span className="text-[11px] font-black tracking-wide uppercase">{locale}</span>
                <ChevronDown size={14} className={`transition-transform ${mobileLangOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileLangOpen && (
                <div className="absolute top-[calc(100%+8px)] right-0 z-[60] w-[170px] rounded-xl border border-gray-200 bg-white shadow-xl p-2">
                  {languages.map((language) => (
                    <button
                      key={`mobile-dropdown-lang-${language.code}`}
                      type="button"
                      onClick={() => {
                        setLocale(language.locale);
                        setMobileLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                        locale === language.locale ? "bg-orange-50 text-[#FF6B00]" : "text-[#1A365D] hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-lg leading-none">{language.flag}</span>
                      <span>{language.code}</span>
                      {locale === language.locale && <ChevronDown size={14} className="ml-auto rotate-[-90deg]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                setMobileLangOpen(false);
              }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-10 h-10 rounded-xl border border-gray-200 text-[#1A365D] bg-white flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-[#F5F7FA] border-t border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-start md:justify-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap text-sm text-[#1A365D]">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={(e) => scrollTo(e, section.href.replace("#", ""))}
              className={`font-medium transition-colors border-b-2 pb-0.5 ${
                activeSection === section.href.replace("#", "")
                  ? "text-[#FF6B00] border-[#FF6B00]"
                  : "border-transparent hover:text-[#FF6B00]"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>

      <div className={`md:hidden fixed inset-0 z-[55] transition-all duration-300 ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <button
          type="button"
          aria-label="Close mobile menu backdrop"
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-[72px] border-b border-gray-200 px-4 flex items-center justify-between">
            <p className="text-sm font-black tracking-[0.12em] text-[#1A365D]">MENU</p>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
              className="w-9 h-9 rounded-lg border border-gray-200 text-[#1A365D] flex items-center justify-center cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-4 py-4 space-y-4">
            <nav className="flex flex-col gap-2">
              {sections.map((section) => {
                const id = section.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={`mobile-${section.href}`}
                    href={section.href}
                    onClick={(e) => scrollTo(e, id)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium border-l-2 transition-colors ${
                      isActive
                        ? "text-[#FF6B00] border-[#FF6B00] bg-orange-50"
                        : "text-[#1A365D] border-transparent bg-gray-50/60"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>

            <a
              href="#contact-form"
              onClick={(e) => scrollTo(e, "contact-form")}
              className="inline-flex items-center justify-center w-full font-bold px-4 py-2.5 rounded-xl text-sm active:scale-95 transition-all duration-300 gap-2 shadow-sm bg-[#FF6B00] text-white hover:bg-[#e55f00]"
            >
              <Phone size={16} strokeWidth={2.5} />
              <span>{t.header.call}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
