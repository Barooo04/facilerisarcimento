"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale, type Locale } from "../i18n/LocaleContext";

type Review = {
  stars: string;
  quote: string;
  name: string;
  meta: string;
  result: string;
  avatar: string;
};

const reviewsByLocale: Record<Locale, Review[]> = {
  it: [
    {
      stars: "★★★★★",
      quote:
        "Dopo un tamponamento con colpo di frusta, in poche settimane ho ricevuto una valutazione chiara e una gestione completa della pratica.",
      name: "Arianna M.",
      meta: "Incidente stradale · Milano",
      result: "Risarcimento ottenuto: € 18.400",
      avatar: "/profiles/p2.jpg",
    },
    {
      stars: "★★★★☆",
      quote:
        "Mi hanno seguito passo dopo passo per l'infortunio in magazzino. Comunicazione semplice e documenti gestiti senza stress.",
      name: "Samir K.",
      meta: "Infortunio sul lavoro · Brescia",
      result: "Risarcimento ottenuto: € 42.000",
      avatar: "/profiles/p1.jpg",
    },
    {
      stars: "★★★★☆",
      quote:
        "Avevo bisogno di assistenza in francese per la pratica della mia famiglia. Tutto chiaro, risposte rapide e risultato concreto.",
      name: "Nassim B.",
      meta: "Sinistro mortale · Verona",
      result: "Risarcimento ottenuto: € 126.000",
      avatar: "/profiles/p3.jpg",
    },
    {
      stars: "★★★★★",
      quote:
        "Con loro ho evitato trattative confuse con l'assicurazione. Hanno chiuso il caso con un importo corretto e tempi precisi.",
      name: "Elena C.",
      meta: "Incidente stradale · Torino",
      result: "Risarcimento ottenuto: € 24.700",
      avatar: "/profiles/p5.jpg",
    },
  ],
  en: [
    {
      stars: "★★★★★",
      quote: "After a rear-end crash, they handled every step and gave me clear updates from day one.",
      name: "Arianna M.",
      meta: "Road accident · Milan",
      result: "Compensation obtained: € 18,400",
      avatar: "/profiles/p2.jpg",
    },
    {
      stars: "★★★★☆",
      quote: "They managed my workplace injury file with clear communication and practical support.",
      name: "Samir K.",
      meta: "Work injury · Brescia",
      result: "Compensation obtained: € 42,000",
      avatar: "/profiles/p1.jpg",
    },
    {
      stars: "★★★★☆",
      quote: "My family needed support in French and they kept the process simple and transparent.",
      name: "Nassim B.",
      meta: "Fatal claim · Verona",
      result: "Compensation obtained: € 126,000",
      avatar: "/profiles/p3.jpg",
    },
    {
      stars: "★★★★★",
      quote: "They closed my insurance claim with a fair amount and very clear timelines.",
      name: "Elena C.",
      meta: "Road accident · Turin",
      result: "Compensation obtained: € 24,700",
      avatar: "/profiles/p5.jpg",
    },
  ],
  fr: [
    { stars: "★★★★★", quote: "Apres un accident de voiture, ils ont gere le dossier du debut a la fin avec des explications tres claires.", name: "Arianna M.", meta: "Accident de la route · Milan", result: "Indemnisation obtenue: € 18.400", avatar: "/profiles/p2.jpg" },
    { stars: "★★★★☆", quote: "Pour mon accident du travail, j'ai eu un suivi serieux et une communication simple.", name: "Samir K.", meta: "Accident du travail · Brescia", result: "Indemnisation obtenue: € 42.000", avatar: "/profiles/p1.jpg" },
    { stars: "★★★★☆", quote: "Notre famille a ete accompagnee en francais avec beaucoup de clarte.", name: "Nassim B.", meta: "Sinistre mortel · Verone", result: "Indemnisation obtenue: € 126.000", avatar: "/profiles/p3.jpg" },
    { stars: "★★★★★", quote: "Dossier clos avec un montant coherent et un accompagnement constant.", name: "Elena C.", meta: "Accident de la route · Turin", result: "Indemnisation obtenue: € 24.700", avatar: "/profiles/p5.jpg" },
  ],
  ro: [
    { stars: "★★★★★", quote: "Dupa accidentul auto, au gestionat tot dosarul clar si rapid.", name: "Arianna M.", meta: "Accident rutier · Milano", result: "Despagubire obtinuta: € 18.400", avatar: "/profiles/p2.jpg" },
    { stars: "★★★★☆", quote: "Pentru accidentul de munca am primit asistenta constanta si explicatii simple.", name: "Samir K.", meta: "Accident de munca · Brescia", result: "Despagubire obtinuta: € 42.000", avatar: "/profiles/p1.jpg" },
    { stars: "★★★★☆", quote: "Familia noastra a fost sprijinita in franceza, cu pasi clari si bine organizati.", name: "Nassim B.", meta: "Sinistru mortal · Verona", result: "Despagubire obtinuta: € 126.000", avatar: "/profiles/p3.jpg" },
    { stars: "★★★★★", quote: "Cazul cu asigurarea s-a inchis bine, cu un rezultat concret.", name: "Elena C.", meta: "Accident rutier · Torino", result: "Despagubire obtinuta: € 24.700", avatar: "/profiles/p5.jpg" },
  ],
  sq: [
    { stars: "★★★★★", quote: "Pas aksidentit rrugor, menaxhuan ceshtjen time me qartesi nga fillimi deri ne fund.", name: "Arianna M.", meta: "Aksident rrugor · Milano", result: "Demshperblim i marre: € 18.400", avatar: "/profiles/p2.jpg" },
    { stars: "★★★★☆", quote: "Per aksidentin ne pune mora ndihme te rregullt dhe komunikim te thjeshte.", name: "Samir K.", meta: "Aksident ne pune · Brescia", result: "Demshperblim i marre: € 42.000", avatar: "/profiles/p1.jpg" },
    { stars: "★★★★☆", quote: "Familja ime mori mbeshtetje ne frengjisht me hapa te qarte.", name: "Nassim B.", meta: "Aksident vdekjeprures · Verona", result: "Demshperblim i marre: € 126.000", avatar: "/profiles/p3.jpg" },
    { stars: "★★★★★", quote: "Ceshtja me sigurimin u mbyll me rezultat te mire dhe pa konfuzion.", name: "Elena C.", meta: "Aksident rrugor · Torino", result: "Demshperblim i marre: € 24.700", avatar: "/profiles/p5.jpg" },
  ],
  ar: [
    { stars: "★★★★★", quote: "بعد حادث السيارة، تولوا الملف بالكامل مع شرح واضح في كل مرحلة.", name: "Arianna M.", meta: "حادث مروري · ميلانو", result: "التعويض المحصل: € 18.400", avatar: "/profiles/p2.jpg" },
    { stars: "★★★★☆", quote: "في اصابة العمل حصلت على متابعة منتظمة وخطوات واضحة.", name: "Samir K.", meta: "اصابة عمل · بريشيا", result: "التعويض المحصل: € 42.000", avatar: "/profiles/p1.jpg" },
    { stars: "★★★★☆", quote: "تلقت عائلتي دعما واضحا باللغة الفرنسية طوال الاجراءات.", name: "Nassim B.", meta: "حادث مميت · فيرونا", result: "التعويض المحصل: € 126.000", avatar: "/profiles/p3.jpg" },
    { stars: "★★★★★", quote: "تم اغلاق ملف التأمين بنتيجة ممتازة ومتابعة دقيقة.", name: "Elena C.", meta: "حادث مروري · تورينو", result: "التعويض المحصل: € 24.700", avatar: "/profiles/p5.jpg" },
  ],
};

const headerByLocale: Record<Locale, { eyebrow: string; title: string; desc: string }> = {
  it: {
    eyebrow: "COSA DICONO I NOSTRI CLIENTI",
    title: "Persone reali. Risultati documentati.",
    desc: "Recensioni reali su risarcimento danni ottenuto: casi chiusi con metodo legale, trasparenza e risultati concreti.",
  },
  en: {
    eyebrow: "WHAT OUR CLIENTS SAY",
    title: "Real people. Documented results.",
    desc: "We do not promise miracles — we promise commitment, professionalism, and the result your case deserves.",
  },
  fr: {
    eyebrow: "CE QUE DISENT NOS CLIENTS",
    title: "Des personnes reelles. Des resultats concrets.",
    desc: "Nous ne promettons pas des miracles — nous promettons serieux et professionnalisme.",
  },
  ro: {
    eyebrow: "CE SPUN CLIENTII NOSTRI",
    title: "Oameni reali. Rezultate documentate.",
    desc: "Nu promitem miracole — promitem implicare si profesionalism.",
  },
  sq: {
    eyebrow: "CFARE THONE KLIENTET TANE",
    title: "Njerez reale. Rezultate te dokumentuara.",
    desc: "Nuk premtojme mrekulli — premtojme perkushtim dhe profesionalizem.",
  },
  ar: {
    eyebrow: "ماذا يقول عملاؤنا",
    title: "اشخاص حقيقيون. نتائج موثقة.",
    desc: "لا نعد بالمعجزات — نعد بالالتزام والاحترافية.",
  },
};

export default function Testimonials() {
  const { locale } = useLocale();
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const copy = headerByLocale[locale];
  const activeReviews = reviewsByLocale[locale] ?? reviewsByLocale.it;
  const looped = [...activeReviews, ...activeReviews];
  const mobileReview = activeReviews[activeIdx] ?? activeReviews[0];
  const previousReview = prevIdx !== null ? activeReviews[prevIdx] : null;

  const changeSlide = (next: number, dir: "next" | "prev") => {
    if (isAnimating || next === activeIdx) return;
    setDirection(dir);
    setPrevIdx(activeIdx);
    setActiveIdx(next);
    setIsAnimating(true);
    window.setTimeout(() => {
      setPrevIdx(null);
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
    if (delta < 0) changeSlide((activeIdx + 1) % activeReviews.length, "next");
    else changeSlide((activeIdx - 1 + activeReviews.length) % activeReviews.length, "prev");
    setDragStartX(null);
  };

  return (
    <section id="testimonials" className="bg-[#173A6A] section-mobile px-4 sm:px-6 overflow-hidden scroll-mt-52">
      <div className="max-w-6xl mx-auto">
        <div className="text-center section-header-mobile">
          <p className="section-eyebrow-mobile text-[#FFB066]">{copy.eyebrow}</p>
          <h2 className="font-cal section-title-mobile sm:text-4xl md:text-5xl text-white leading-[1.08]">
            {copy.title}
          </h2>
          <p className="section-desc-mobile text-blue-200 max-w-2xl mx-auto">
            {copy.desc}
          </p>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="testimonial-marquee flex gap-4 w-max">
          {looped.map((review, idx) => (
            <article
              key={`${review.name}-${idx}`}
              className="w-[360px] rounded-2xl border border-white/10 bg-white/8 p-6 text-white flex flex-col"
            >
              <div className="flex-1">
                <p className="text-[#FFB13B] text-lg mb-3 tracking-wide">{review.stars}</p>
                <p className="text-blue-100/95 italic leading-relaxed min-h-[155px]">{review.quote}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="font-bold text-white text-sm leading-tight">{review.name}</p>
                  <p className="text-xs text-blue-200">{review.meta}</p>
                  <p className="text-xs text-[#FF9A45] font-bold mt-1">{review.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="md:hidden max-w-md mx-auto section-after-desc-mobile">
        <div
          className="relative overflow-hidden min-h-[240px]"
          onTouchStart={(e) => setDragStartX(e.touches[0]?.clientX ?? null)}
          onTouchEnd={(e) => onSwipeEnd(e.changedTouches[0]?.clientX ?? 0)}
          onMouseDown={(e) => setDragStartX(e.clientX)}
          onMouseUp={(e) => onSwipeEnd(e.clientX)}
          onMouseLeave={() => setDragStartX(null)}
        >
          {previousReview && (
            <article className={`absolute inset-0 w-full rounded-2xl border border-white/10 bg-white/8 px-10 py-4 text-white flex flex-col min-h-[240px] ${direction === "next" ? "animate-slide-out-left" : "animate-slide-out-right"}`}>
              <div className="flex-1">
                <p className="text-[#FFB13B] text-base mb-2 tracking-wide">{previousReview.stars}</p>
                <p className="text-blue-100/95 italic leading-relaxed text-sm">{previousReview.quote}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3">
                <Image
                  src={previousReview.avatar}
                  alt={previousReview.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="font-bold text-white text-xs leading-tight">{previousReview.name}</p>
                  <p className="text-[11px] text-blue-200">{previousReview.meta}</p>
                  <p className="text-[11px] text-[#FF9A45] font-bold mt-1">{previousReview.result}</p>
                </div>
              </div>
            </article>
          )}

          <article className={`w-full rounded-2xl border border-white/10 bg-white/8 p-4 text-white flex flex-col min-h-[240px] ${isAnimating ? (direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left") : ""}`}>
            <div className="flex-1">
              <p className="text-[#FFB13B] text-base mb-2 tracking-wide">{mobileReview.stars}</p>
              <p className="text-blue-100/95 italic leading-relaxed text-sm">{mobileReview.quote}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3">
              <Image
                src={mobileReview.avatar}
                alt={mobileReview.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover border border-white/20"
              />
              <div>
                <p className="font-bold text-white text-xs leading-tight">{mobileReview.name}</p>
                <p className="text-[11px] text-blue-200">{mobileReview.meta}</p>
                <p className="text-[11px] text-[#FF9A45] font-bold mt-1">{mobileReview.result}</p>
              </div>
            </div>
          </article>

        </div>

        <div className="flex justify-center gap-2 mt-2">
          {activeReviews.map((_, i) => (
            <button
              key={`review-dot-${i}`}
              type="button"
              onClick={() => changeSlide(i, i > activeIdx ? "next" : "prev")}
              className={`rounded-full transition-all duration-300 ${
                i === activeIdx ? "w-6 h-1.5 bg-[#FFB13B]" : "w-3.5 h-1.5 bg-white/30"
              }`}
              aria-label={`Vai alla recensione ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
