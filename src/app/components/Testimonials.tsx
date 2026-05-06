"use client";

import { useState } from "react";
import { useLocale, type Locale } from "../i18n/LocaleContext";

const reviewsByLocale: Record<Locale, Array<{
  stars: string;
  quote: string;
  name: string;
  meta: string;
  result: string;
  initials: string;
}>> = {
  it: [
    {
      stars: "★★★★★",
      quote:
        "Avevo avuto un incidente in moto nel 2022. L'assicurazione mi aveva offerto 4.800 euro. Con loro ho ottenuto 31.500 euro. Non ci credevo nemmeno quando me l'hanno detto.",
      name: "Ahmed M.",
      meta: "Incidente stradale · Milano",
      result: "Risarcimento ottenuto: € 31.500",
      initials: "AM",
    },
    {
      stars: "★★★★★",
      quote:
        "Sono caduto da un'impalcatura in cantiere. L'INAIL mi aveva liquidato con una cifra che non copriva nemmeno le spese. Loro hanno calcolato il danno differenziale e alla fine ho ricevuto 1.300.000 euro. Una cifra che non avrei mai immaginato.",
      name: "Mario C.",
      meta: "Infortunio sul lavoro · Bergamo",
      result: "Risarcimento ottenuto: € 1.300.000",
      initials: "MC",
    },
    {
      stars: "★★★★★",
      quote:
        "Mio padre e morto dopo un intervento che non doveva andare cosi. Non sapevamo che potevamo fare qualcosa. Grazie a loro abbiamo ottenuto giustizia e un risarcimento per tutta la nostra famiglia.",
      name: "Radu P.",
      meta: "Sinistro mortale · Brescia",
      result: "Risarcimento ottenuto: € 320.000",
      initials: "RP",
    },
    {
      stars: "★★★★★",
      quote:
        "Dopo mesi di telefonate con la compagnia assicurativa ero bloccata. In poche settimane hanno rimesso ordine in tutta la pratica e hanno chiuso con un importo che non pensavo possibile.",
      name: "Elena G.",
      meta: "Incidente stradale · Torino",
      result: "Risarcimento ottenuto: € 48.000",
      initials: "EG",
    },
    {
      stars: "★★★★★",
      quote:
        "Avevo perso fiducia dopo due pareri contrastanti. Mi hanno spiegato ogni passaggio con chiarezza e hanno seguito il caso fino alla fine. Finalmente mi sono sentito tutelato davvero.",
      name: "Youssef A.",
      meta: "Errore medico · Modena",
      result: "Risarcimento ottenuto: € 210.000",
      initials: "YA",
    },
  ],
  en: [
    {
      stars: "★★★★★",
      quote: "After my motorcycle crash in 2022, insurance offered only 4,800 euro. With them I received 31,500 euro.",
      name: "Ahmed M.",
      meta: "Road accident · Milan",
      result: "Compensation obtained: € 31,500",
      initials: "AM",
    },
    {
      stars: "★★★★★",
      quote: "I fell from scaffolding. INAIL paid far too little. They calculated differential damage and I received 1,300,000 euro.",
      name: "Mario C.",
      meta: "Work injury · Bergamo",
      result: "Compensation obtained: € 1,300,000",
      initials: "MC",
    },
    {
      stars: "★★★★★",
      quote: "My father died after surgery. We did not know we had rights. They helped us obtain justice and compensation.",
      name: "Radu P.",
      meta: "Fatal claim · Brescia",
      result: "Compensation obtained: € 320,000",
      initials: "RP",
    },
    {
      stars: "★★★★★",
      quote: "I was stuck with the insurer for months. In a few weeks they reorganized everything and closed with a fair amount.",
      name: "Elena G.",
      meta: "Road accident · Turin",
      result: "Compensation obtained: € 48,000",
      initials: "EG",
    },
    {
      stars: "★★★★★",
      quote: "I had lost trust. They explained every step clearly and followed my case to the end.",
      name: "Youssef A.",
      meta: "Medical error · Modena",
      result: "Compensation obtained: € 210,000",
      initials: "YA",
    },
  ],
  fr: [
    { stars: "★★★★★", quote: "Apres mon accident de moto, l'assurance proposait 4 800 euros. Avec eux, j'ai obtenu 31 500 euros.", name: "Ahmed M.", meta: "Accident de la route · Milan", result: "Indemnisation obtenue: € 31.500", initials: "AM" },
    { stars: "★★★★★", quote: "Je suis tombe d'un echafaudage. Ils ont calcule le dommage reel et j'ai recu 1 300 000 euros.", name: "Mario C.", meta: "Accident du travail · Bergame", result: "Indemnisation obtenue: € 1.300.000", initials: "MC" },
    { stars: "★★★★★", quote: "Mon pere est decede apres une intervention. Ils nous ont aides a obtenir justice et indemnisation.", name: "Radu P.", meta: "Sinistre mortel · Brescia", result: "Indemnisation obtenue: € 320.000", initials: "RP" },
    { stars: "★★★★★", quote: "J'etais bloquee avec l'assurance. En peu de temps, ils ont organise le dossier et obtenu une offre correcte.", name: "Elena G.", meta: "Accident de la route · Turin", result: "Indemnisation obtenue: € 48.000", initials: "EG" },
    { stars: "★★★★★", quote: "J'avais perdu confiance. Ils ont tout explique clairement et suivi le dossier jusqu'au bout.", name: "Youssef A.", meta: "Erreur medicale · Modene", result: "Indemnisation obtenue: € 210.000", initials: "YA" },
  ],
  ro: [
    { stars: "★★★★★", quote: "Dupa accidentul de motocicleta, asigurarea oferea 4.800 euro. Cu ei am obtinut 31.500 euro.", name: "Ahmed M.", meta: "Accident rutier · Milano", result: "Despagubire obtinuta: € 31.500", initials: "AM" },
    { stars: "★★★★★", quote: "Am cazut de pe schela. Au calculat corect prejudiciul si am primit 1.300.000 euro.", name: "Mario C.", meta: "Accident de munca · Bergamo", result: "Despagubire obtinuta: € 1.300.000", initials: "MC" },
    { stars: "★★★★★", quote: "Tatal meu a murit dupa o interventie. Ne-au ajutat sa obtinem dreptate si despagubire.", name: "Radu P.", meta: "Sinistru mortal · Brescia", result: "Despagubire obtinuta: € 320.000", initials: "RP" },
    { stars: "★★★★★", quote: "Eram blocata cu asigurarea. Au reorganizat dosarul si au inchis cu o suma corecta.", name: "Elena G.", meta: "Accident rutier · Torino", result: "Despagubire obtinuta: € 48.000", initials: "EG" },
    { stars: "★★★★★", quote: "Nu mai aveam incredere. Au explicat clar fiecare pas si au dus cazul pana la final.", name: "Youssef A.", meta: "Eroare medicala · Modena", result: "Despagubire obtinuta: € 210.000", initials: "YA" },
  ],
  sq: [
    { stars: "★★★★★", quote: "Pas aksidentit me motor, sigurimi ofroi 4.800 euro. Me ta mora 31.500 euro.", name: "Ahmed M.", meta: "Aksident rrugor · Milano", result: "Demshperblim i marre: € 31.500", initials: "AM" },
    { stars: "★★★★★", quote: "Rash nga skela ne pune. Ata llogariten demshperblimin real dhe mora 1.300.000 euro.", name: "Mario C.", meta: "Aksident ne pune · Bergamo", result: "Demshperblim i marre: € 1.300.000", initials: "MC" },
    { stars: "★★★★★", quote: "Babai im vdiq pas nje nderhyrjeje. Falenderuar atyre morrem drejtesi dhe demshperblim.", name: "Radu P.", meta: "Sinister mortal · Brescia", result: "Demshperblim i marre: € 320.000", initials: "RP" },
    { stars: "★★★★★", quote: "Isha bllokuar me sigurimin. Brenda pak kohe e rregulluan dosjen dhe mbyllen me shume te drejte.", name: "Elena G.", meta: "Aksident rrugor · Torino", result: "Demshperblim i marre: € 48.000", initials: "EG" },
    { stars: "★★★★★", quote: "Kisha humbur besimin. Ma shpjeguan qarte cdo hap dhe e ndoqen ceshtjen deri ne fund.", name: "Youssef A.", meta: "Gabim mjekesor · Modena", result: "Demshperblim i marre: € 210.000", initials: "YA" },
  ],
  ar: [
    { stars: "★★★★★", quote: "بعد حادث الدراجة، عرضت شركة التأمين 4800 يورو فقط. معهم حصلت على 31,500 يورو.", name: "Ahmed M.", meta: "حادث مروري · ميلانو", result: "التعويض المحصل: € 31.500", initials: "AM" },
    { stars: "★★★★★", quote: "سقطت من سقالة في موقع العمل. حسبوا الضرر الحقيقي وحصلت على 1,300,000 يورو.", name: "Mario C.", meta: "اصابة عمل · بيرغامو", result: "التعويض المحصل: € 1.300.000", initials: "MC" },
    { stars: "★★★★★", quote: "توفي والدي بعد عملية. ساعدونا في الحصول على العدالة والتعويض للعائلة.", name: "Radu P.", meta: "حادث مميت · بريشيا", result: "التعويض المحصل: € 320.000", initials: "RP" },
    { stars: "★★★★★", quote: "كنت عالقة مع شركة التأمين. خلال اسابيع نظموا الملف واغلقوه بمبلغ عادل.", name: "Elena G.", meta: "حادث مروري · تورينو", result: "التعويض المحصل: € 48.000", initials: "EG" },
    { stars: "★★★★★", quote: "فقدت الثقة سابقا. شرحوا كل خطوة بوضوح وتابعوا القضية حتى النهاية.", name: "Youssef A.", meta: "خطا طبي · مودينا", result: "التعويض المحصل: € 210.000", initials: "YA" },
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

const reviews = [
  {
    stars: "★★★★★",
    quote:
      "Avevo avuto un incidente in moto nel 2022. L'assicurazione mi aveva offerto 4.800 euro. Con loro ho ottenuto 31.500 euro. Non ci credevo nemmeno quando me l'hanno detto.",
    name: "Ahmed M.",
    meta: "Incidente stradale · Milano",
    result: "Risarcimento ottenuto: € 31.500",
    initials: "AM",
  },
  {
    stars: "★★★★★",
    quote:
      "Sono caduto da un'impalcatura in cantiere. L'INAIL mi aveva liquidato con una cifra che non copriva nemmeno le spese. Loro hanno calcolato il danno differenziale e alla fine ho ricevuto 1.300.000 euro. Una cifra che non avrei mai immaginato.",
    name: "Mario C.",
    meta: "Infortunio sul lavoro · Bergamo",
    result: "Risarcimento ottenuto: € 1.300.000",
    initials: "MC",
  },
  {
    stars: "★★★★★",
    quote:
      "Mio padre è morto dopo un intervento che non doveva andare cosi. Non sapevamo che potevamo fare qualcosa. Grazie a loro abbiamo ottenuto giustizia e un risarcimento per tutta la nostra famiglia.",
    name: "Radu P.",
    meta: "Sinistro mortale · Brescia",
    result: "Risarcimento ottenuto: € 320.000",
    initials: "RP",
  },
  {
    stars: "★★★★★",
    quote:
      "Dopo mesi di telefonate con la compagnia assicurativa ero bloccata. In poche settimane hanno rimesso ordine in tutta la pratica e hanno chiuso con un importo che non pensavo possibile.",
    name: "Elena G.",
    meta: "Incidente stradale · Torino",
    result: "Risarcimento ottenuto: € 48.000",
    initials: "EG",
  },
  {
    stars: "★★★★★",
    quote:
      "Avevo perso fiducia dopo due pareri contrastanti. Mi hanno spiegato ogni passaggio con chiarezza e hanno seguito il caso fino alla fine. Finalmente mi sono sentito tutelato davvero.",
    name: "Youssef A.",
    meta: "Errore medico · Modena",
    result: "Risarcimento ottenuto: € 210.000",
    initials: "YA",
  },
];

export default function Testimonials() {
  const { locale } = useLocale();
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const copy = headerByLocale[locale];
  const activeReviews = reviewsByLocale[locale] ?? reviews;
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
                <p className="text-blue-100/95 italic leading-relaxed min-h-[155px]">"{review.quote}"</p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-[#FF9A45] flex items-center justify-center font-black text-xs">
                  {review.initials}
                </div>
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
                <p className="text-blue-100/95 italic leading-relaxed text-sm">"{previousReview.quote}"</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-[#FF9A45] flex items-center justify-center font-black text-[10px]">
                  {previousReview.initials}
                </div>
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
              <p className="text-blue-100/95 italic leading-relaxed text-sm">"{mobileReview.quote}"</p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-[#FF9A45] flex items-center justify-center font-black text-[10px]">
                {mobileReview.initials}
              </div>
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
