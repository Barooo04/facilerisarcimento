"use client";

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

  return (
    <section id="features" className="bg-white py-20 px-4 sm:px-6 scroll-mt-52">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-black tracking-[0.2em] text-[#FF6B00] mb-4">
            {t.features.eyebrow ?? "PERCHE SCEGLIERE NOI"}
          </p>
          <h2 className="font-cal text-3xl sm:text-4xl md:text-5xl text-[#1A365D] mb-4">
            {t.features.titleLine1 ? (
              <>
                {t.features.titleLine1}
                <br />
                {t.features.titleLine2}
              </>
            ) : (
              t.features.title
            )}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.features.desc}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12 mt-10">
          {features.map(({ icon: Icon, color, border, iconBorder }, i) => (
            <div
              key={t.features.items[i][0]}
              className={`relative pt-10 pb-7 px-6 rounded-2xl border-2 ${border} hover:shadow-md transition-all duration-200 bg-white text-center`}
            >
              {/* Icon straddling the top border */}
              <div className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-2 ${iconBorder} flex items-center justify-center shadow-sm`}>
                <Icon size={26} className={color} strokeWidth={1.5} />
              </div>

              <h3 className="font-cal text-[#1A365D] text-xl mb-2">{t.features.items[i][0]}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{t.features.items[i][1]}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] active:scale-95 text-white font-black text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 uppercase tracking-wide"
          >
            <span>
              {t.features.cta1}
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              {t.features.cta2}
            </span>
            <CircleCheck size={20} strokeWidth={2} className="shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
