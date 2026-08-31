"use client";

import Image from "next/image";
import { useLocale } from "../i18n/LocaleContext";

export default function LanguageSupport() {
  const { locale } = useLocale();
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

  const profileCopy = {
    it: {
      title: "Marco Bianchi",
      role: "Responsabile pratiche risarcitorie",
      body: "Da piu di 15 anni segue casi di infortunio sul lavoro e incidenti stradali. E il referente che controlla la pratica dall'apertura fino alla chiusura.",
    },
    en: {
      title: "Case Manager",
      role: "Senior Compensation Consultant",
      body: "Over 15 years of experience handling work injury and road accident claims. Every case is personally supervised from start to finish.",
    },
    fr: {
      title: "Responsable des Dossiers",
      role: "Consultant Senior en Indemnisation",
      body: "Plus de 15 ans d experience dans la gestion des dossiers d accident du travail et d accidents routiers. Chaque dossier est suivi personnellement.",
    },
    ro: {
      title: "Responsabil Dosare",
      role: "Consultant Senior in Despagubiri",
      body: "Peste 15 ani de experienta in gestionarea dosarelor de accidente de munca, malpraxis si accidente rutiere. Fiecare dosar este supravegheat personal.",
    },
    sq: {
      title: "Pergjegjes i Ceshtjeve",
      role: "Konsulent Senior per Demshperblime",
      body: "Mbi 15 vite eksperience ne menaxhimin e ceshtjeve te aksidenteve ne pune, gabimeve mjekesore dhe aksidenteve rrugore. Cdo ceshtje ndiqet personalisht.",
    },
    ar: {
      title: "مسؤول الملفات",
      role: "مستشار اول في التعويضات",
      body: "اكثر من 15 سنة خبرة في ادارة ملفات اصابات العمل والاخطاء الطبية وحوادث السير. كل ملف تتم متابعته شخصيا من البداية حتى النهاية.",
    },
  }[locale];
  const [firstName, ...surnameParts] = profileCopy.title.split(" ");
  const surname = surnameParts.join(" ");

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

        <div className="section-after-desc-mobile">
          <div className="relative overflow-hidden rounded-3xl border border-[#b5c7e3] bg-gradient-to-br from-white via-[#f8fbff] to-[#eef4ff] p-5 sm:p-7 shadow-[0_20px_60px_-30px_rgba(3,20,50,0.45)]">
            <div className="pointer-events-none absolute -top-14 -right-16 h-44 w-44 rounded-full bg-[#1A365D]/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#FF6B00]/15 blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                  <Image
                    src="/resp.png"
                    alt="Responsabile pratiche"
                    width={88}
                    height={88}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-black text-[1.8rem] sm:text-[2.3rem] text-[#1A365D] leading-[0.92]">{firstName}</p>
                  <p className="font-black text-[1.8rem] sm:text-[2.3rem] text-[#1A365D] leading-[0.92]">{surname || profileCopy.title}</p>
                </div>
              </div>

              <p className="font-bold text-[#FF6B00] mt-4 text-lg sm:text-xl leading-tight">{profileCopy.role}</p>
              <p className="text-[#475569] leading-relaxed mt-5 text-[1.05rem] sm:text-[1.15rem]">
                {profileCopy.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
