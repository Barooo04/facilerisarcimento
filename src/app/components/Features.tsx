import { Shield, Handshake, Languages, Clock, CircleCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    color: "text-[#FF6B00]",
    bg: "bg-orange-50",
    title: "Zero Anticipi",
    desc: "Paghiamo noi tutte le spese mediche e legali. Non devi tirare fuori nemmeno un euro oggi.",
    border: "border-[#1A365D]",
  },
  {
    icon: Handshake,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Paghi solo se vinci",
    desc: "Il nostro guadagno è una percentuale sui soldi che ti facciamo ottenere. Se non prendi nulla tu, non prendiamo nulla noi.",
    border: "border-[#FF6B00]",
  },
  {
    icon: Languages,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Parliamo la tua lingua",
    desc: "Ti diamo un traduttore gratis nella tua lingua per farti capire tutto al 100%, senza fregature.",
    border: "border-[#FF6B00]",
  },
  {
    icon: Clock,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Facciamo tutto noi",
    desc: "Niente stress o code. Pensa solo a guarire, alla burocrazia ci pensano i nostri esperti.",
    border: "border-[#1A365D]",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A365D] mb-4">
            Perché scegliere noi
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Conosciamo i tuoi problemi e abbiamo creato un servizio su misura per risolverli,
            senza farti rischiare nulla.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {features.map(({ icon: Icon, color, bg, title, desc, border }) => (
            <div
              key={title}
              className={`flex gap-5 p-6 sm:p-8 rounded-2xl border-2 ${border} hover:shadow-md transition-all duration-200 bg-white`}
            >
              <div className={`shrink-0 w-14 h-14 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon size={28} className={color} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[#1A365D] font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] active:scale-95 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wide"
          >
            <CircleCheck size={22} strokeWidth={2} />
            Verifica Gratis il Tuo Caso
          </a>
          <p className="mt-3 text-sm text-gray-400">Risposta entro 24 ore · Nessun impegno</p>
        </div>
      </div>
    </section>
  );
}
