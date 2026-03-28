import { Phone, FileSearch, Banknote, CircleCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Chiamata Gratuita",
    desc: "Compila il modulo o chiamaci. Ti risponderemo subito (anche con un traduttore) per ascoltare la tua storia.",
    detail: "Nessuna attesa, nessun costo",
  },
  {
    number: "2",
    icon: FileSearch,
    title: "Studiamo le carte",
    desc: "I nostri medici e legali valutano gratis i tuoi documenti. Ti diciamo subito quanti soldi puoi recuperare.",
    detail: "Valutazione entro 24–48 ore",
  },
  {
    number: "3",
    icon: Banknote,
    title: "Ricevi i soldi",
    desc: "Prenderemo la nostra percentuale solo dopo che i soldi del risarcimento saranno sul tuo conto in banca.",
    detail: "Paghi solo a risultato ottenuto",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A365D] mb-4">
            Ottenere i tuoi soldi è{" "}
            <span className="text-[#FF6B00]">facilissimo</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Solo 3 passi separano te dal tuo risarcimento.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ number, icon: Icon, title, desc, detail }) => (
              <div key={number} className="flex flex-col items-center text-center relative">
                {/* Number bubble */}
                <div className="relative z-10 w-28 h-28 rounded-full bg-[#FF6B00] flex flex-col items-center justify-center shadow-lg shadow-orange-200 mb-6">
                  <span className="text-white font-black text-4xl leading-none">{number}</span>
                </div>

                {/* Card */}
                <div className="bg-[#F8F9FA] rounded-2xl p-6 w-full">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                      <Icon size={20} className="text-[#FF6B00]" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-[#1A365D] font-black text-xl mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28A745] bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                    <CircleCheck size={14} strokeWidth={2} />
                    {detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 bg-[#FF6B00] hover:bg-[#e55f00] active:scale-95 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wide"
          >
            <Rocket size={20} strokeWidth={2} />
            Inizia Ora dal Passo 1
          </a>
          <p className="mt-3 text-sm text-gray-400">Gratuito · Nessun impegno · Risposta veloce</p>
        </div>
      </div>
    </section>
  );
}
