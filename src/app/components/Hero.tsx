import Image from "next/image";
import { HardHat, Stethoscope, Car, ChevronRight, CircleCheck, ArrowRight, Phone } from "lucide-react";

const categories = [
  {
    icon: HardHat,
    label: "Infortunio sul Lavoro",
    desc: "In cantiere, ufficio o in strada",
    bg: "bg-orange-50 hover:bg-orange-100",
    border: "border-orange-200",
    iconColor: "text-[#FF6B00]",
  },
  {
    icon: Stethoscope,
    label: "Errore Medico",
    desc: "Visita, operazione o diagnosi",
    bg: "bg-blue-50 hover:bg-blue-100",
    border: "border-blue-200",
    iconColor: "text-[#1A365D]",
  },
  {
    icon: Car,
    label: "Incidente Stradale",
    desc: "Auto, moto, bici o pedone",
    bg: "bg-emerald-50 hover:bg-emerald-100",
    border: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
];

const pills = ["Zero anticipi", "Paghi solo se vinci", "Traduttore gratis"];

export default function Hero() {
  return (
    <section className="overflow-hidden">

      {/* ── HERO BACKGROUND ── */}
      <div className="relative min-h-screen flex items-start lg:items-center">

        {/* Mobile background */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image
            src="/heromobile.png"
            alt=""
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Desktop background */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content: centered on mobile, left-aligned on desktop */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-[220px] lg:pt-[90px] pb-8">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5">

            {/* Pills — single row, compact on mobile */}
            <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm overflow-hidden">
              {pills.map((p, i) => (
                <div key={p} className="flex items-center">
                  <span className="flex items-center gap-1 px-2 py-2 lg:px-5 lg:py-3 text-[11px] lg:text-base font-semibold text-gray-700 whitespace-nowrap">
                    <CircleCheck size={12} className="text-[#28A745] shrink-0 lg:hidden" strokeWidth={2.5} />
                    <CircleCheck size={16} className="text-[#28A745] shrink-0 hidden lg:block" strokeWidth={2.5} />
                    {p}
                  </span>
                  {i < pills.length - 1 && (
                    <span className="w-px h-4 lg:h-6 bg-gray-200 shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-cal text-[2.2rem] md:text-[3.2rem] lg:text-[4.5rem] text-[#1A365D] leading-[1.1] mb-1 lg:whitespace-nowrap">
                Hai subito un danno?
              </h1>
              <p className="font-cal text-[1.8rem] md:text-[2.6rem] lg:text-[3.6rem] text-[#FF6B00] leading-[1.1] lg:whitespace-nowrap">
                Ottieni il tuo risarcimento.
              </p>
            </div>

            {/* Pre-CTA line */}
            <p className="text-base sm:text-lg md:text-xl font-semibold text-[#1A365D] -mt-2">
              Ti aiutiamo senza rischi.
            </p>

            {/* CTA */}
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2.5 bg-[#FF6B00] hover:bg-[#e55f00] active:scale-95 text-white font-black text-base sm:text-lg px-7 py-4 rounded-2xl shadow-lg shadow-orange-200 hover:shadow-xl transition-all duration-200"
            >
              <Phone size={18} strokeWidth={2.5} />
              Verifica gratis il tuo caso
            </a>

          </div>
        </div>
      </div>

      {/* ── CATEGORY CARDS ── */}
      <div className="bg-white max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
          Cosa ti è successo?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map(({ icon: Icon, label, desc, bg, border, iconColor }) => (
            <a
              key={label}
              href="#contact-form"
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl border-2 ${bg} ${border} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200">
                <Icon size={24} className={iconColor} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1A365D] font-bold text-sm sm:text-base leading-snug">{label}</p>
                <p className="text-gray-400 text-xs truncate">{desc}</p>
              </div>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-[#FF6B00] transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
