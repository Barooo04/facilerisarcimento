import { HardHat, Stethoscope, Car, ChevronRight, CircleCheck } from "lucide-react";

const categories = [
  {
    icon: HardHat,
    label: "Infortunio sul Lavoro",
    desc: "In cantiere, ufficio o in strada",
    gradient: "from-orange-400 to-orange-600",
    bg: "bg-orange-50 hover:bg-orange-100",
    border: "border-orange-200",
    iconColor: "text-[#FF6B00]",
  },
  {
    icon: Stethoscope,
    label: "Errore Medico",
    desc: "Errore medico o chirurgico",
    gradient: "from-blue-400 to-blue-600",
    bg: "bg-blue-50 hover:bg-blue-100",
    border: "border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Car,
    label: "Incidente Stradale",
    desc: "Auto, moto, bici o pedone",
    gradient: "from-emerald-400 to-emerald-600",
    bg: "bg-emerald-50 hover:bg-emerald-100",
    border: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
];

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B00] font-semibold text-sm px-4 py-2 rounded-full border border-orange-200">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            Consulenza 100% Gratuita e Senza Impegno
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A365D] text-center leading-tight mb-6">
          Hai subito un danno?{" "}
          <span className="text-[#FF6B00]">Ottieni il risarcimento</span>{" "}
          che ti spetta.
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A365D] opacity-90">
            Non devi anticipare nemmeno un euro.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-4 leading-relaxed">
          Analizziamo il tuo caso gratis. Se non ottieni il risarcimento, non ci paghi nulla.
        </p>
        <p className="text-base sm:text-lg text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Assistenza legale e medica a costo zero e traduttori nella tua lingua.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            "Zero anticipi",
            "Paghi solo se vinci",
            "Traduttore gratis",
            "Risposta in 24h",
          ].map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 bg-[#28A745]/10 border border-[#28A745]/30 text-[#1a7a32] font-bold text-base sm:text-lg px-5 py-2.5 rounded-xl"
            >
              <CircleCheck size={22} className="text-[#28A745] shrink-0" strokeWidth={2} />
              {b}
            </span>
          ))}
        </div>

        {/* Category Cards */}
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Cosa ti è successo?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {categories.map(({ icon: Icon, label, desc, bg, border, iconColor }) => (
            <a
              key={label}
              href="#contact-form"
              className={`group flex flex-col items-center text-center p-7 rounded-2xl border-2 ${bg} ${border} transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={32} className={iconColor} strokeWidth={1.5} />
              </div>
              <h3 className="text-[#1A365D] font-bold text-lg mb-1">{label}</h3>
              <p className="text-gray-500 text-sm mb-4">{desc}</p>
              <span className="inline-flex items-center gap-1 text-[#FF6B00] font-semibold text-sm">
                Verifica gratis <ChevronRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
