import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f2240] text-blue-300 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <Image
              src="/logoFR.png"
              alt="FacileRisarcimento"
              width={0}
              height={0}
              sizes="280px"
              className="h-16 w-auto object-contain brightness-0 invert mb-2"
            />
            <p className="text-sm text-blue-400">
              Assistenza legale per tutti. Zero anticipi.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
            <a href="#contact-form" className="hover:text-white transition-colors">Contatti</a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-blue-500 leading-relaxed">
          <p>
            © {new Date().getFullYear()} RisarcimentoSemplice. Tutti i diritti riservati.
            Il servizio è fornito in conformità con le norme vigenti in materia di assistenza legale.
          </p>
          <p className="mt-2">
            I risultati passati non garantiscono risultati futuri. Ogni caso è valutato individualmente.
          </p>
        </div>
      </div>
    </footer>
  );
}
