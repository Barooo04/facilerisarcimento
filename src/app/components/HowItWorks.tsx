"use client";

import { useEffect, useState } from "react";
import { Phone, FileSearch, Banknote, CircleCheck, Rocket } from "lucide-react";

const DURATION = 4000;

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Contatto iniziale",
    desc: "Compila il modulo o chiamaci. Raccogliamo le prime informazioni sul tuo caso — senza alcun costo.",
    detail: "Nessun costo iniziale",
  },
  {
    number: "2",
    icon: FileSearch,
    title: "Valutiamo il caso",
    desc: "I nostri professionisti analizzano la documentazione. Ricevi un riscontro chiaro sulla possibilità di risarcimento.",
    detail: "Valutazione entro 24–48 ore",
  },
  {
    number: "3",
    icon: Banknote,
    title: "Ricevi il risarcimento",
    desc: "Seguiamo la pratica fino alla conclusione. Il compenso è dovuto solo a risultato ottenuto.",
    detail: "Paghi solo a risultato ottenuto",
  },
];

function StepCard({ number, icon: Icon, title, desc, detail, tick }: typeof steps[0] & { tick?: number }) {
  return (
    <div className="flex flex-col items-center text-center relative mt-10">
      {/* Number bubble straddling the top border of the card */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-lg shadow-orange-200 border-4 border-white">
        <span className="text-white font-black text-3xl leading-none">{number}</span>
      </div>

      {/* Card with progress bar embedded in the bottom border */}
      <div className="relative overflow-hidden bg-[#F8F9FA] rounded-2xl pt-14 pb-6 px-6 w-full">
        {/* Background icon */}
        <div className="absolute -top-2 -left-2 text-[#FF6B00] opacity-10 pointer-events-none">
          <Icon size={160} strokeWidth={1} />
        </div>

        <div className="relative z-10">
        <h3 className="text-[#1A365D] font-black text-xl mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28A745] bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
          <CircleCheck size={14} strokeWidth={2} />
          {detail}
        </span>
        </div>

        {/* Progress bar as bottom border */}
        {tick !== undefined && (
          <>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200" />
            <div
              key={tick}
              className="absolute bottom-0 left-0 h-1 bg-[#FF6B00]"
              style={{ animation: `progressBar ${DURATION}ms linear forwards` }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % steps.length);
      setTick((t) => t + 1);
    }, DURATION);
    return () => clearTimeout(timer);
  }, [active]);

  const goTo = (i: number) => {
    setActive(i);
    setTick((t) => t + 1);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-cal text-3xl sm:text-4xl md:text-5xl text-[#1A365D] mb-4">
            Ottenere il risarcimento{" "}
            <span className="text-[#FF6B00]">richiede pochi passaggi.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Solo 3 passaggi separano te dal tuo risarcimento.
          </p>
        </div>

        {/* MOBILE: carousel */}
        <div className="md:hidden">
          {/* Slide */}
          <div key={active} className="animate-fade-in">
            <StepCard {...steps[active]} tick={tick} />
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-3 bg-[#FF6B00]"
                    : "w-3 h-3 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Vai al passo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP: static 3-column grid */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
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
          <p className="mt-3 text-sm text-gray-400">Gratuito · Nessun impegno · Risposta rapida</p>
        </div>
      </div>
    </section>
  );
}
