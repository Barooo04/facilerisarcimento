"use client";

import { useLocale } from "../i18n/LocaleContext";

const supportCards = [
  {
    flag: "🇮🇹",
    lang: "ITALIANO",
    title: "Non hai un avvocato di fiducia?",
    body: "Ci rivolgiamo a chi non ha mai avuto un legale al proprio fianco, e a chi sulle pratiche perde ore preziose. Zero anticipi. Paghi solo se ottieni un risarcimento.",
    cta: "Verifica il tuo caso - Gratis",
    featured: true,
  },
  {
    flag: "🇸🇦",
    lang: "ARABO",
    title: "لا يوجد لديك محام تثق به؟",
    body: "نحن هنا لمساعدتك في فهم حقوقك القانونية ومتابعة قضيتك خطوة بخطوة، دون اي دفعة مقدمة.",
    cta: "تحقق من حالتك - مجانا",
  },
  {
    flag: "🇦🇱",
    lang: "SHQIP - ALBANESE",
    title: "Keni pesuar deme ne pune apo aksident?",
    body: "Ne mund t'ju ndihmojme te kuptoni te drejtat tuaja dhe te ndiqni ceshtjen pa asnje kosto paraprake.",
    cta: "Kontrolloni rastin tuaj - Falas",
  },
  {
    flag: "🇷🇴",
    lang: "ROMANA - RUMENO",
    title: "Ai suferit un prejudiciu la locul de munca?",
    body: "Nu esti singur. Verificam situatia ta si iti explicam clar ce poti obtine, fara costuri initiale.",
    cta: "Verifica-ti cazul - Gratuit",
  },
  {
    flag: "🇬🇧",
    lang: "ENGLISH",
    title: "Were you injured at work or in an accident?",
    body: "No lawyer needed, no upfront cost. We handle everything in English. You only pay if you receive compensation.",
    cta: "Check your case - Free",
  },
  {
    flag: "🇫🇷",
    lang: "FRANCAIS - FRANCESE",
    title: "Vous avez ete blesse au travail ou dans un accident ?",
    body: "Pas besoin d'avance, pas d'honoraires initiaux. Nous vous accompagnons en francais a chaque etape.",
    cta: "Verifiez votre cas - Gratuit",
  },
];

export default function LanguageSupport() {
  const { locale } = useLocale();
  const localeToCardLang: Record<string, string> = {
    it: "ITALIANO",
    ar: "ARABO",
    sq: "SHQIP - ALBANESE",
    ro: "ROMANA - RUMENO",
    en: "ENGLISH",
    fr: "FRANCAIS - FRANCESE",
  };
  const activeCard = supportCards.find((card) => card.lang === localeToCardLang[locale]) ?? supportCards[0];
  const sectionCopy = {
    it: {
      eyebrow: "PARLIAMO LA TUA LINGUA",
      line1: "Non hai un avvocato?",
      line2: "Non capisci l'italiano legale?",
      line3: "Nessun problema. Ci pensiamo noi.",
      desc: "Il nostro servizio e pensato esattamente per chi si trova in una situazione difficile senza sapere a chi rivolgersi. Sei straniero? Hai paura di non capire? Hai avuto un'esperienza negativa con un avvocato? Siamo qui per questo.",
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

        <div className="md:hidden section-after-desc-mobile">
          <article
            key={`${activeCard.lang}-${activeCard.title}`}
            className={`rounded-2xl border p-5 bg-white/7 backdrop-blur-[1px] h-full flex flex-col ${
              activeCard.featured ? "border-[#FF8A2A] shadow-[0_0_0_1px_rgba(255,138,42,0.35)]" : "border-white/10"
            }`}
          >
            <p className="text-xl mb-2">{activeCard.flag}</p>
            <p className="text-[10px] tracking-widest text-[#FFB066] font-bold mb-2">{activeCard.lang}</p>
            <h3 className="text-white font-black text-lg leading-tight mb-2">{activeCard.title}</h3>
            <p className="text-blue-100/85 text-sm leading-relaxed mb-4">{activeCard.body}</p>
            <a
              href="#contact-form"
              className="inline-flex items-center text-xs font-bold text-[#FF9A45] bg-white/10 rounded-lg px-3 py-1.5 hover:bg-white/20 transition-colors mt-auto"
            >
              {activeCard.cta}
            </a>
          </article>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 section-after-desc-mobile">
          {supportCards.map((card) => (
            <article
              key={`${card.lang}-${card.title}`}
              className={`rounded-2xl border p-5 bg-white/7 backdrop-blur-[1px] h-full flex flex-col ${
                card.featured ? "border-[#FF8A2A] shadow-[0_0_0_1px_rgba(255,138,42,0.35)]" : "border-white/10"
              }`}
            >
              <p className="text-xl mb-2">{card.flag}</p>
              <p className="text-[10px] tracking-widest text-[#FFB066] font-bold mb-2">{card.lang}</p>
              <h3 className="text-white font-black text-lg leading-tight mb-2">{card.title}</h3>
              <p className="text-blue-100/85 text-sm leading-relaxed mb-4">{card.body}</p>
              <a
                href="#contact-form"
                className="inline-flex items-center text-xs font-bold text-[#FF9A45] bg-white/10 rounded-lg px-3 py-1.5 hover:bg-white/20 transition-colors mt-auto"
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
