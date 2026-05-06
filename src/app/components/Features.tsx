"use client";

import { useState } from "react";
import { Shield, Handshake, Languages, CircleCheck } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import { translations } from "../i18n/translations";

const features = [
  {
    icon: Shield,
    color: "text-[#FF6B00]",
    bg: "bg-orange-50",
    border: "border-[#FF6B00]",
    iconBorder: "border-[#FF6B00]",
    title: "Zero Anticipi",
    desc: "Gestiamo noi le spese mediche e legali durante la pratica. Non ti viene chiesto nulla in anticipo.",
  },
  {
    icon: Handshake,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-600",
    iconBorder: "border-blue-600",
    title: "Paghi solo se vinci",
    desc: "Il nostro compenso è una percentuale su quanto ottieni. Se non ricevi nulla, non ci devi nulla.",
  },
  {
    icon: Languages,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-600",
    iconBorder: "border-emerald-600",
    title: "Parliamo la tua lingua",
    desc: "Ti affianchiamo con supporto nella tua lingua per seguire ogni fase con chiarezza, senza sorprese.",
  },
];

export default function Features() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [mobileSlide, setMobileSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const changeSlide = (next: number, dir: "next" | "prev") => {
    if (isAnimating || next === mobileSlide) return;
    setDirection(dir);
    setPrevSlide(mobileSlide);
    setMobileSlide(next);
    setIsAnimating(true);
    window.setTimeout(() => {
      setPrevSlide(null);
      setIsAnimating(false);
    }, 500);
  };
  const onSwipeEnd = (endX: number) => {
    if (dragStartX === null) return;
    const delta = endX - dragStartX;
    if (Math.abs(delta) < 35) {
      setDragStartX(null);
      return;
    }
    if (delta < 0) changeSlide((mobileSlide + 1) % features.length, "next");
    else changeSlide((mobileSlide - 1 + features.length) % features.length, "prev");
    setDragStartX(null);
  };

  return (
    <section id="features" className="bg-white section-mobile px-4 sm:px-6 scroll-mt-52">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center section-header-mobile">
          <p className="section-eyebrow-mobile text-[#FF6B00]">
            {t.features.eyebrow ?? "PERCHE SCEGLIERE NOI"}
          </p>
          <h2 className="font-cal section-title-mobile sm:text-4xl md:text-5xl text-[#1A365D]">
            {t.features.titleLine1 ? (
              <>
                {t.features.titleLine1}
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                {t.features.titleLine2}
              </>
            ) : (
              t.features.title
            )}
          </h2>
          <p className="section-desc-mobile text-gray-500 max-w-2xl mx-auto">
            {t.features.desc}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-5 mb-10 section-after-desc-mobile">
          {features.map(({ icon: Icon, color, border, iconBorder }, i) => (
            <div
              key={t.features.items[i][0]}
              className={`relative pt-7 pb-5 px-4 rounded-xl border-2 ${border} hover:shadow-md transition-all duration-200 bg-white text-center`}
            >
              {/* Icon straddling the top border */}
              <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 ${iconBorder} flex items-center justify-center shadow-sm`}>
                <Icon size={18} className={color} strokeWidth={1.5} />
              </div>

              <h3 className="font-cal text-[#1A365D] text-lg mb-1.5">{t.features.items[i][0]}</h3>
              <p className="text-gray-500 leading-relaxed text-xs">{t.features.items[i][1]}</p>
            </div>
          ))}
        </div>

        <div className="sm:hidden section-after-desc-mobile mb-8">
          <div
            className="relative overflow-hidden min-h-[186px]"
            onTouchStart={(e) => setDragStartX(e.touches[0]?.clientX ?? null)}
            onTouchEnd={(e) => onSwipeEnd(e.changedTouches[0]?.clientX ?? 0)}
            onMouseDown={(e) => setDragStartX(e.clientX)}
            onMouseUp={(e) => onSwipeEnd(e.clientX)}
            onMouseLeave={() => setDragStartX(null)}
          >
            {prevSlide !== null && (
              <div className={`absolute inset-0 ${direction === "next" ? "animate-slide-out-left" : "animate-slide-out-right"}`}>
                {(() => {
                  const { icon: PrevIcon, color: prevColor, border: prevBorder, iconBorder: prevIconBorder } = features[prevSlide];
                  return (
                    <div className={`relative mt-4 pt-7 pb-5 px-4 rounded-xl border-2 ${prevBorder} bg-white text-center`}>
                      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 ${prevIconBorder} flex items-center justify-center shadow-sm`}>
                        <PrevIcon size={18} className={prevColor} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-cal text-[#1A365D] text-lg mb-1.5">{t.features.items[prevSlide][0]}</h3>
                      <p className="text-gray-500 leading-relaxed text-xs">{t.features.items[prevSlide][1]}</p>
                    </div>
                  );
                })()}
              </div>
            )}

            <div className={isAnimating ? (direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left") : ""}>
              {(() => {
                const { icon: Icon, color, border, iconBorder } = features[mobileSlide];
                return (
                  <div className={`relative mt-4 pt-7 pb-5 px-4 rounded-xl border-2 ${border} bg-white text-center`}>
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 ${iconBorder} flex items-center justify-center shadow-sm`}>
                      <Icon size={18} className={color} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-cal text-[#1A365D] text-lg mb-1.5">{t.features.items[mobileSlide][0]}</h3>
                    <p className="text-gray-500 leading-relaxed text-xs">{t.features.items[mobileSlide][1]}</p>
                  </div>
                );
              })()}
            </div>

          </div>

          <div className="flex justify-center gap-2 mt-2">
            {features.map((_, i) => (
              <button
                key={`feature-dot-${i}`}
                type="button"
                onClick={() => changeSlide(i, i > mobileSlide ? "next" : "prev")}
                className={`rounded-full transition-all duration-300 ${
                  i === mobileSlide ? "w-6 h-1.5 bg-[#FF6B00]" : "w-3.5 h-1.5 bg-gray-300"
                }`}
                aria-label={`Vai alla slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact-form"
            className="btn-mobile-unified inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] active:scale-95 text-white font-black shadow-md hover:shadow-xl transition-all duration-200 uppercase tracking-wide"
          >
            <span>{t.features.cta1} {t.features.cta2}</span>
            <CircleCheck size={20} strokeWidth={2} className="shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
