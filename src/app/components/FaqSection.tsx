"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale, type Locale } from "../i18n/LocaleContext";

const faqsByLocale: Record<Locale, Array<{ q: string; a: React.ReactNode }>> = {
  it: [
  {
    q: "Quanto mi costa affidarmi a voi?",
    a: (
      <>
        La valutazione iniziale e <strong>completamente gratuita</strong>. Se decidiamo di procedere, il compenso e
        una <strong>percentuale concordata sul risarcimento ottenuto</strong>. Se non otteniamo nulla,{" "}
        <strong>non ti chiediamo nemmeno un euro</strong>. Il rischio economico e <strong>interamente nostro</strong>.
      </>
    ),
  },
  {
    q: "Quanto tempo ci vuole per ottenere il risarcimento?",
    a: (
      <>
        Dipende dalla complessita del caso. Le pratiche piu semplici si concludono in <strong>3-6 mesi</strong>.
        Quelle piu articolate richiedono in media <strong>12-24 mesi</strong>. Ti aggiorneremo{" "}
        <strong>ad ogni passo importante</strong>.
      </>
    ),
  },
  {
    q: "Ho gia ricevuto un'offerta dall'assicurazione. E tardi?",
    a: (
      <>
        <strong>Quasi mai.</strong> Le compagnie offrono sistematicamente <strong>importi inferiori</strong> a quelli
        dovuti. Verifica con noi <strong>prima di accettare qualsiasi proposta</strong> - spesso c'e un margine{" "}
        <strong>molto significativo da recuperare</strong>.
      </>
    ),
  },
  {
    q: "Ho pochi documenti. Posso comunque procedere?",
    a: (
      <>
        <strong>Si.</strong> Siamo noi a raccogliere la documentazione: referti medici, verbali della polizia,
        relazioni INAIL. Il tuo compito e <strong>raccontarci cosa e successo</strong>. Il lavoro tecnico{" "}
        <strong>lo facciamo noi</strong>.
      </>
    ),
  },
  {
    q: "Lavorate anche con chi non parla italiano?",
    a: (
      <>
        <strong>Assolutamente si.</strong> Operiamo in italiano, arabo, rumeno, albanese, francese e inglese. Hai
        diritto di capire <strong>ogni fase nella tua lingua</strong>, e ci assicuriamo che sia cosi.
      </>
    ),
  },
  {
    q: "Sono passati anni dall'incidente. Ho ancora diritto?",
    a: (
      <>
        Dipende dal tipo di danno. I termini di prescrizione variano <strong>da 1 a 10 anni</strong>. Questo e
        esattamente il motivo per cui e importante <strong>verificare subito</strong>: ogni giorno che passa puo{" "}
        <strong>ridurre le tue possibilita</strong>.
      </>
    ),
  },
  ],
  en: [
    {
      q: "How much does it cost to work with you?",
      a: "The initial evaluation is completely free. If we proceed, our fee is an agreed percentage of the compensation. If we obtain nothing, you pay nothing.",
    },
    {
      q: "How long does compensation take?",
      a: "It depends on complexity. Simpler cases close in 3-6 months. More complex cases usually take 12-24 months.",
    },
    {
      q: "I already received an insurance offer. Is it too late?",
      a: "Almost never. Insurers often offer less than what is due. Check with us before accepting any proposal.",
    },
    {
      q: "I have few documents. Can I still proceed?",
      a: "Yes. We collect medical reports, police records and INAIL documents. You just tell us what happened.",
    },
    {
      q: "Do you also work with people who do not speak Italian?",
      a: "Absolutely yes. We work in Italian, Arabic, Romanian, Albanian, French and English.",
    },
    {
      q: "Many years have passed since the accident. Do I still have rights?",
      a: "It depends on the damage type. Limitation terms vary from 1 to 10 years, so it is important to verify quickly.",
    },
  ],
  fr: [
    { q: "Combien coute votre service ?", a: "L'evaluation initiale est gratuite. Si nous avançons, notre remuneration est un pourcentage du resultat obtenu. Si vous n'obtenez rien, vous ne payez rien." },
    { q: "Combien de temps faut-il pour obtenir l'indemnisation ?", a: "Cela depend de la complexite du dossier. Les cas simples prennent 3-6 mois. Les cas complexes prennent en moyenne 12-24 mois." },
    { q: "J'ai deja une offre de l'assurance. Est-il trop tard ?", a: "Presque jamais. Les assurances proposent souvent des montants inferieurs. Verifiez avec nous avant d'accepter." },
    { q: "J'ai peu de documents. Puis-je quand meme proceder ?", a: "Oui. Nous recuperons les pieces necessaires: rapports medicaux, proces-verbaux, documents INAIL." },
    { q: "Travaillez-vous avec ceux qui ne parlent pas italien ?", a: "Oui, absolument. Nous travaillons en italien, arabe, roumain, albanais, francais et anglais." },
    { q: "Des annees ont passe depuis l'accident. Ai-je encore des droits ?", a: "Cela depend du dommage. Les delais de prescription varient de 1 a 10 ans, donc il faut verifier rapidement." },
  ],
  ro: [
    { q: "Cat costa sa lucram impreuna?", a: "Evaluarea initiala este gratuita. Daca incepem procedura, onorariul este un procent din despagubirea obtinuta. Daca nu obtinem nimic, nu platesti nimic." },
    { q: "Cat dureaza pana obtin despagubirea?", a: "Depinde de complexitatea cazului. Cazurile simple dureaza 3-6 luni. Cazurile complexe dureaza in medie 12-24 luni." },
    { q: "Am primit deja o oferta de la asigurare. E prea tarziu?", a: "Aproape niciodata. Asigurarile ofera adesea mai putin decat se cuvine. Verifica cu noi inainte sa accepti." },
    { q: "Am putine documente. Pot continua totusi?", a: "Da. Noi colectam documentatia: rapoarte medicale, procese verbale, documente INAIL." },
    { q: "Lucrati si cu persoane care nu vorbesc italiana?", a: "Da, absolut. Lucram in italiana, araba, romana, albaneza, franceza si engleza." },
    { q: "Au trecut ani de la accident. Mai am drepturi?", a: "Depinde de tipul prejudiciului. Termenele de prescriptie variaza intre 1 si 10 ani." },
  ],
  sq: [
    { q: "Sa kushton sherbimi juaj?", a: "Vleresimi fillestar eshte falas. Nese vazhdojme, pagesa jone eshte perqindje nga demshperblimi. Nese nuk merr asgje, nuk paguan asgje." },
    { q: "Sa kohe duhet per te marre demshperblimin?", a: "Varet nga kompleksiteti i rastit. Rastet e thjeshta mbyllen ne 3-6 muaj. Rastet me te ndërlikuara ne 12-24 muaj." },
    { q: "Kam marre nje oferte nga sigurimi. Eshte vone?", a: "Pothuajse kurre. Sigurimet ofrojne shuma me te uleta. Verifiko me ne para se te pranosh." },
    { q: "Kam pak dokumente. Mund te vazhdoj?", a: "Po. Ne mbledhim dokumentet: raporte mjekesore, procesverbale policie dhe INAIL." },
    { q: "Punoni edhe me ata qe nuk flasin italisht?", a: "Po, sigurisht. Punojme ne italisht, arabisht, rumanisht, shqip, frengjisht dhe anglisht." },
    { q: "Kane kaluar vite nga aksidenti. Kam ende te drejta?", a: "Varet nga lloji i demit. Afatet e parashkrimit variojne nga 1 deri ne 10 vjet." },
  ],
  ar: [
    { q: "كم تكلفة العمل معكم؟", a: "التقييم الاولي مجاني بالكامل. اذا بدأنا الاجراءات، تكون اتعابنا نسبة من التعويض المحصل. اذا لم نحصل على شيء فلن تدفع شيئا." },
    { q: "كم يستغرق الحصول على التعويض؟", a: "يعتمد على تعقيد الحالة. الحالات البسيطة تنتهي خلال 3-6 اشهر، والمعقدة خلال 12-24 شهرا." },
    { q: "تلقيت عرضا من شركة التأمين. هل فات الاوان؟", a: "غالبا لا. شركات التأمين تقدم عادة مبالغ اقل من المستحق. تحقق معنا قبل القبول." },
    { q: "لدي وثائق قليلة. هل يمكنني المتابعة؟", a: "نعم. نحن نجمع الوثائق المطلوبة: التقارير الطبية، محاضر الشرطة، ووثائق INAIL." },
    { q: "هل تعملون مع من لا يتحدث الايطالية؟", a: "بالتاكيد نعم. نعمل بالايطالية والعربية والرومانية والالبانية والفرنسية والانجليزية." },
    { q: "مرت سنوات على الحادث. هل ما زال لدي حق؟", a: "يعتمد على نوع الضرر. مدد التقادم تتراوح بين سنة و10 سنوات، لذلك يجب التحقق بسرعة." },
  ],
};

const headerByLocale: Record<Locale, { eyebrow: string; l1: string; l2: string; desc: string }> = {
  it: {
    eyebrow: "LE TUE DOMANDE",
    l1: "Le domande che ci fanno sempre.",
    l2: "Le risposte che meriti.",
    desc: "Niente gergo legale, nessun giro di parole. Ecco tutto quello che devi sapere prima di decidere.",
  },
  en: {
    eyebrow: "YOUR QUESTIONS",
    l1: "Questions we hear every day.",
    l2: "Answers you deserve.",
    desc: "No legal jargon, no unclear language. Here is what you should know before deciding.",
  },
  fr: {
    eyebrow: "VOS QUESTIONS",
    l1: "Les questions les plus frequentes.",
    l2: "Les reponses que vous meritez.",
    desc: "Pas de jargon juridique, pas de confusion. Voici l'essentiel avant de decider.",
  },
  ro: {
    eyebrow: "INTREBARILE TALE",
    l1: "Intrebarile pe care le primim mereu.",
    l2: "Raspunsurile pe care le meriti.",
    desc: "Fara jargon juridic. Iata ce trebuie sa stii inainte sa decizi.",
  },
  sq: {
    eyebrow: "PYETJET E TUA",
    l1: "Pyetjet qe degjojme gjithmone.",
    l2: "Pergjigjet qe meriton.",
    desc: "Pa zhargon ligjor, pa fjale te kota. Ketu ke gjithcka qe duhet te dish.",
  },
  ar: {
    eyebrow: "اسئلتك",
    l1: "الاسئلة التي نسمعها دائما.",
    l2: "الاجابات التي تستحقها.",
    desc: "بدون مصطلحات قانونية معقدة. هذا كل ما تحتاج معرفته قبل القرار.",
  },
};

export default function FaqSection() {
  const { locale } = useLocale();
  const faqs = faqsByLocale[locale];
  const copy = headerByLocale[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F8F9FA] section-mobile px-4 sm:px-6 scroll-mt-52">
      <div className="max-w-5xl mx-auto">
        <div className="text-center section-header-mobile">
          <p className="section-eyebrow-mobile text-[#FF6B00]">{copy.eyebrow}</p>
          <h2 className="font-cal section-title-mobile sm:text-4xl md:text-5xl text-[#1A365D]">
            {copy.l1}
            <br />
            {copy.l2}
          </h2>
          <p className="section-desc-mobile text-gray-500 max-w-3xl mx-auto">
            {copy.desc}
          </p>
        </div>

        <div className="space-y-3 section-after-desc-mobile">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-start gap-4 cursor-pointer hover:bg-gray-50/70 transition-colors"
                >
                  <span className="w-7 h-7 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] shrink-0 flex items-center justify-center font-black">
                    ?
                  </span>
                  <span className="flex-1 font-black text-[#1A365D] accordion-q-mobile sm:text-lg">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 mt-1 text-[#1A365D] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-gray-600 accordion-a-mobile sm:text-[15px]">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
