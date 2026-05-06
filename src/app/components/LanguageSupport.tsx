"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "../i18n/LocaleContext";

export default function LanguageSupport() {
  const { locale } = useLocale();
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const guaranteeCards = [
    {
      icon: "GDPR",
      iconClass:
        "w-8 h-8 rounded-lg bg-green-50 text-green-700 font-black text-[10px] flex items-center justify-center shrink-0",
      title: "Conformità GDPR certificata",
      body: "Trattamento dei dati personali conforme al Regolamento UE 2016/679",
    },
    {
      icon: "⚖",
      iconClass:
        "w-8 h-8 rounded-lg bg-amber-50 text-amber-700 text-base flex items-center justify-center shrink-0",
      title: "Consulenti legali specializzati",
      body: "Rete di avvocati specializzati in responsabilità civile e diritto del lavoro",
    },
    {
      icon: "🌍",
      iconClass:
        "w-8 h-8 rounded-lg bg-blue-50 text-blue-700 text-base flex items-center justify-center shrink-0",
      title: "Assistenza multilingua attiva",
      body: "Pratiche seguite in italiano, arabo, albanese, rumeno, francese e inglese",
    },
  ];

  const changeSlide = (next: number) => {
    if (isAnimating || next === activeIdx) return;
    setPrevIdx(activeIdx);
    setActiveIdx(next);
    setIsAnimating(true);
    window.setTimeout(() => {
      setPrevIdx(null);
      setIsAnimating(false);
    }, 500);
  };
  const sectionCopy = {
    it: {
      eyebrow: "PARLIAMO LA TUA LINGUA",
      line1: "Assistenza legale",
      line2: "nella tua lingua.",
      line3: "Capisci tutto. Subito.",
      desc: "Assistenza legale multilingua per risarcimento danni: parli con un consulente chiaro, nella tua lingua, fin dal primo contatto.",
    },
    en: {
      eyebrow: "WE SPEAK YOUR LANGUAGE",
      line1: "No trusted lawyer yet?",
      line2: "Is legal Italian hard to understand?",
      line3: "No problem. We handle it for you.",
      desc: "Our service is built for people in difficult situations who do not know who to contact. Are you a foreign citizen? Afraid of not understanding legal steps? Had a bad experience before? We are here for this.",
    },
    fr: {
      eyebrow: "NOUS PARLONS VOTRE LANGUE",
      line1: "Vous n'avez pas d'avocat de confiance ?",
      line2: "Vous ne comprenez pas l'italien juridique ?",
      line3: "Aucun probleme. Nous nous en occupons.",
      desc: "Notre service est concu pour ceux qui se retrouvent dans une situation difficile sans savoir vers qui se tourner. Vous etes etranger ? Vous avez peur de ne pas comprendre ? Nous sommes la pour vous.",
    },
    ro: {
      eyebrow: "VORBIM LIMBA TA",
      line1: "Nu ai un avocat de incredere?",
      line2: "Nu intelegi italiana juridica?",
      line3: "Nicio problema. Ne ocupam noi.",
      desc: "Serviciul nostru este gandit pentru cei aflati intr-o situatie dificila, fara sa stie cui sa se adreseze. Esti strain? Ti-e teama ca nu intelegi? Suntem aici pentru tine.",
    },
    sq: {
      eyebrow: "FLASIM GJUHEN TENDE",
      line1: "Nuk ke nje avokat te besuar?",
      line2: "Nuk e kupton italishten juridike?",
      line3: "S'ka problem. Ne merremi me gjithcka.",
      desc: "Sherbimi yne eshte krijuar per ata qe gjenden ne veshtiresi dhe nuk dine kujt t'i drejtohen. Je i huaj? Ke frike se nuk kupton procesin? Jemi ketu per ty.",
    },
    ar: {
      eyebrow: "نتحدث لغتك",
      line1: "ليس لديك محام تثق به؟",
      line2: "لا تفهم الايطالية القانونية؟",
      line3: "لا مشكلة. نحن نهتم بالامر.",
      desc: "خدمتنا مخصصة لمن يمرون بظروف صعبة ولا يعرفون الى من يتوجهون. هل انت اجنبي؟ هل تخشى عدم الفهم؟ نحن هنا من اجلك.",
    },
  }[locale];

  return (
    <section id="language-support" className="bg-[#173A6A] section-mobile px-4 sm:px-6 scroll-mt-52">
      <div className="max-w-5xl mx-auto">
        <div className="text-left section-header-mobile max-w-3xl">
          <p className="section-eyebrow-mobile text-[#FFB066]">{sectionCopy.eyebrow}</p>
          <h2 className="font-cal section-title-mobile sm:text-4xl md:text-5xl text-white">
            {sectionCopy.line1}
            <br />
            {sectionCopy.line2}
            <br />
            {locale === "it" ? (
              <span className="text-[#FF8A2A]">
                <span className="sm:hidden">Nessun problema.</span>
                <span className="hidden sm:inline">Nessun problema. </span>
                <span className="block sm:inline">Ci pensiamo noi.</span>
              </span>
            ) : (
              <span className="text-[#FF8A2A]">{sectionCopy.line3}</span>
            )}
          </h2>
          <p className="section-desc-mobile text-blue-200">
            {sectionCopy.desc}
          </p>
        </div>

        <div className="section-after-desc-mobile space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 shrink-0">
                <Image
                  src="/resp.png"
                  alt="Responsabile pratiche"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-black text-xl text-[#1A365D] leading-tight">Responsabile Pratiche</p>
                <p className="font-bold text-[#FF6B00] mt-1 text-sm">Consulente Senior in Risarcimento Danni</p>
                <p className="text-gray-600 leading-relaxed mt-2 text-sm">
                  Oltre 15 anni di esperienza nella gestione di pratiche di infortunio, malasanità e sinistri
                  stradali. Supervisiona personalmente ogni pratica aperta.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black tracking-[0.2em] text-white/75 uppercase mb-3 px-1">
              Garanzie e Affiliazioni
            </p>

            <div className="hidden md:grid grid-cols-3 gap-3">
              {guaranteeCards.map((card) => (
                <div key={card.title} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className={card.iconClass}>{card.icon}</div>
                    <div>
                      <p className="font-black text-[#1A365D] text-sm">{card.title}</p>
                      <p className="text-gray-600 text-sm">{card.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden">
              <div className="relative overflow-hidden min-h-[106px]">
                {prevIdx !== null && (
                  <div className="absolute inset-0 animate-slide-out-left">
                    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className={guaranteeCards[prevIdx].iconClass}>{guaranteeCards[prevIdx].icon}</div>
                        <div>
                          <p className="font-black text-[#1A365D] text-sm">{guaranteeCards[prevIdx].title}</p>
                          <p className="text-gray-600 text-sm">{guaranteeCards[prevIdx].body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className={isAnimating ? "animate-slide-in-right" : ""}>
                  <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className={guaranteeCards[activeIdx].iconClass}>{guaranteeCards[activeIdx].icon}</div>
                      <div>
                        <p className="font-black text-[#1A365D] text-sm">{guaranteeCards[activeIdx].title}</p>
                        <p className="text-gray-600 text-sm">{guaranteeCards[activeIdx].body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-2">
                {guaranteeCards.map((_, i) => (
                  <button
                    key={`guarantee-dot-${i}`}
                    type="button"
                    onClick={() => changeSlide(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIdx ? "w-6 h-1.5 bg-[#FF8A2A]" : "w-3.5 h-1.5 bg-white/35"
                    }`}
                    aria-label={`Vai alla garanzia ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
