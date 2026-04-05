import Image from "next/image";
import { HardHat, Stethoscope, Car, ChevronRight, CircleCheck } from "lucide-react";

const services = [
  {
    icon: HardHat,
    tag: "Infortuni sul Lavoro",
    title: "Infortuni sul Lavoro o in Itinere",
    body: "Anche se pensi sia colpa tua, potresti avere diritto a un maxi-risarcimento oltre a quello dell'INAIL. Non aver paura di denunciare: ti proteggiamo noi.",
    bullets: [
      "Infortuni in cantiere o in fabbrica",
      "Incidenti nel tragitto casa-lavoro",
      "Malattie professionali (sordità, ernie, ecc.)",
    ],
    image: "/card1.jpg",
    tag_bg: "bg-orange-100 text-orange-700",
  },
  {
    icon: Stethoscope,
    tag: "Malasanità",
    title: "Malasanità ed Errori Medici",
    body: "Un'operazione andata male? Una diagnosi sbagliata? I medici hanno assicurazioni fatte apposta per pagare questi errori. Sappiamo come fartele pagare.",
    bullets: [
      "Operazioni chirurgiche andate male",
      "Diagnosi errate o ritardate",
      "Complicanze post-operatorie evitabili",
    ],
    image: "/card2.jpg",
    tag_bg: "bg-blue-100 text-blue-700",
  },
  {
    icon: Car,
    tag: "Incidenti Stradali",
    title: "Incidenti Stradali Gravi",
    body: "Se hai subito lesioni, l'assicurazione cercherà di darti il minimo possibile. Noi lottiamo per farti avere il massimo per i danni fisici e materiali.",
    bullets: [
      "Lesioni gravi a passeggeri e pedoni",
      "Danni al veicolo e alle cose",
      "Invalidità temporanea o permanente",
    ],
    image: "/card3.jpg",
    tag_bg: "bg-emerald-100 text-emerald-700",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F8F9FA] py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-cal text-3xl sm:text-4xl md:text-5xl text-[#1A365D] mb-4">
            I nostri servizi
          </h2>
          <p className="text-gray-500 text-lg">
            Tre aree, un solo obiettivo: farti avere i soldi che meriti.
          </p>
        </div>

        {/* Zig-zag rows */}
        <div className="flex flex-col gap-10">
          {services.map(({ tag, title, body, bullets, image, tag_bg }, i) => (
            <div
              key={title}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-0 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white`}
            >
              {/* Visual panel — photo background */}
              <div className="relative md:w-2/5 min-h-[260px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text panel */}
              <div className="md:w-3/5 p-8 sm:p-10 flex flex-col justify-center">
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tag_bg} mb-4 self-start`}>
                  {tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1A365D] mb-4 leading-tight">
                  {title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{body}</p>
                <ul className="space-y-2 mb-6">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CircleCheck size={16} className="text-[#28A745] shrink-0 mt-0.5" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 text-[#FF6B00] font-bold text-sm hover:gap-3 transition-all"
                >
                  Verifica il tuo caso gratis <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
