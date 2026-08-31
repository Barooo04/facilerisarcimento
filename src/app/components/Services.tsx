"use client";

import Image from "next/image";
import { HardHat, Car, HeartCrack, ChevronRight, CircleCheck } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import { translations } from "../i18n/translations";

const services = [
  {
    icon: HardHat,
    tag: "Infortuni sul Lavoro",
    title: "Infortuni sul Lavoro o in Itinere",
    body: "Anche quando la dinamica non è chiara, può esserci diritto a un risarcimento aggiuntivo rispetto alle tutele previste. Valutiamo la situazione e impostiamo la richiesta correttamente.",
    bullets: [
      "Infortuni in cantiere o in fabbrica",
      "Incidenti nel tragitto casa-lavoro",
      "Malattie professionali (sordità, ernie, ecc.)",
    ],
    image: "/card1.jpg",
    tag_bg: "bg-orange-100 text-orange-700",
  },
  {
    icon: Car,
    tag: "Incidenti Stradali",
    title: "Incidenti Stradali Gravi",
    body: "In presenza di danni fisici o materiali, la gestione della pratica fa la differenza. Seguiamo ogni fase della richiesta di risarcimento.",
    bullets: [
      "Lesioni gravi a passeggeri e pedoni",
      "Danni al veicolo e alle cose",
      "Invalidità temporanea o permanente",
    ],
    image: "/card3.jpg",
    tag_bg: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: HeartCrack,
    tag: "Sinistri Mortali",
    title: "Perdita di un Familiare: il Risarcimento per le Famiglie",
    body: "Quando un incidente ha causato la morte di una persona cara, la famiglia ha il diritto di ottenere un risarcimento. Gestiamo l'intera pratica con discrezione e rispetto, senza richiedere alcun anticipo. Il tuo unico compito è ricordare — al resto pensiamo noi.",
    bullets: [
      "Morte da incidente stradale o sul lavoro",
      "Danno da perdita del rapporto parentale (coniuge, figli, genitori)",
    ],
    image: "/card4-new.jpg",
    tag_bg: "bg-red-100 text-red-700",
  },
];

export default function Services() {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <section id="services" className="bg-[#F8F9FA] section-mobile px-4 sm:px-6 scroll-mt-52">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center section-header-mobile">
          <p className="section-eyebrow-mobile text-[#FF6B00]">
            {t.services.eyebrow ?? "I NOSTRI SERVIZI"}
          </p>
          <h2 className="font-cal section-title-mobile sm:text-4xl md:text-5xl text-[#1A365D]">
            {t.services.titleLine1 ? (
              <>
                {t.services.titleLine1}
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                {t.services.titleLine2}
              </>
            ) : (
              t.services.title
            )}
          </h2>
          <p className="section-desc-mobile text-gray-500 max-w-3xl mx-auto">
            {t.services.desc}
          </p>
        </div>

        {/* Zig-zag rowss */}
        <div className="flex flex-col gap-6 section-after-desc-mobile md:max-w-[820px] md:mx-auto">
          {services.map(({ image, tag_bg }, i) => (
            <div
              key={t.services.cards[i].title}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white`}
            >
              {/* Visual panel — photo background */}
              <div className="relative md:w-2/5 min-h-[185px] sm:min-h-[260px]">
                <Image
                  src={image}
                  alt={t.services.cards[i].title}
                  fill
                  className={`object-cover ${i === 2 ? "scale-x-[-1]" : ""}`}
                />
              </div>

              {/* Text panel */}
              <div className="md:w-3/5 p-5 sm:p-10 flex flex-col justify-center">
                <span className={`inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full ${tag_bg} mb-3 self-start`}>
                  {t.services.cards[i].tag}
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-[#1A365D] mb-3 leading-tight">
                  {t.services.cards[i].title}
                </h3>
                <ul className="space-y-1.5 mb-4">
                  {t.services.cards[i].bullets.map((b: string) => (
                    <li key={b} className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm">
                      <CircleCheck size={14} className="text-[#28A745] shrink-0 mt-0.5" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[#FF6B00] font-bold text-xs sm:text-sm hover:gap-3 transition-all"
                >
                  {t.services.cta} <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
