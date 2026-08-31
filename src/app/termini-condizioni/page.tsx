import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LocaleProvider } from "../i18n/LocaleContext";

const updatedAt = "9 maggio 2026";

export default function TermsPage() {
  return (
    <LocaleProvider>
      <Header />
      <main className="bg-[#F8F9FA] min-h-screen px-4 sm:px-6 pt-[170px] pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-10">
          <h1 className="font-cal text-3xl sm:text-4xl text-[#1A365D]">Termini e Condizioni</h1>
          <p className="text-sm text-gray-500 mt-2">Ultimo aggiornamento: {updatedAt}</p>

          <div className="mt-8 space-y-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">1. Oggetto del servizio</h2>
              <p>
                Il sito RisarcimentoSemplice fornisce informazioni e un canale di contatto per richiedere una
                pre-valutazione su pratiche di risarcimento danni (infortuni sul lavoro, incidenti
                stradali e sinistri mortali).
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">2. Natura delle informazioni</h2>
              <p>
                I contenuti del sito hanno finalita informativa generale e non costituiscono parere legale personalizzato
                ne instaurano automaticamente un mandato professionale.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">3. Presa in carico della pratica</h2>
              <p>
                L&apos;eventuale presa in carico avviene solo dopo verifica del caso e formalizzazione degli accordi
                professionali con il cliente, inclusi compensi, condizioni economiche e ambito del mandato.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">4. Obblighi dell&apos;utente</h2>
              <p>
                L&apos;utente si impegna a fornire dati veritieri, completi e aggiornati, e a non utilizzare il sito per scopi
                illeciti o contrari alla normativa vigente.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">5. Limitazione di responsabilita</h2>
              <p>
                Il gestore del sito non risponde per decisioni assunte dall&apos;utente in autonomia sulla base delle sole
                informazioni pubblicate online, ne per indisponibilita temporanee del sito dovute a manutenzione,
                aggiornamenti o cause tecniche non prevedibili.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">6. Proprieta intellettuale</h2>
              <p>
                Testi, elementi grafici, marchi e contenuti del sito sono protetti dalla normativa applicabile in materia
                di proprieta intellettuale e non possono essere riprodotti senza autorizzazione.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">7. Privacy e cookie</h2>
              <p>
                Il trattamento dei dati personali e disciplinato dalla Privacy Policy e dalla Cookie Policy, che
                costituiscono parte integrante dei presenti Termini.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">8. Legge applicabile e foro competente</h2>
              <p>
                I presenti Termini sono regolati dalla legge italiana. Per le controversie con consumatori resta fermo il
                foro previsto dalla normativa applicabile, incluso il Codice del Consumo dove pertinente.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-sm flex gap-4 flex-wrap">
            <Link href="/privacy-policy" className="text-[#FF6B00] underline hover:no-underline">Privacy Policy</Link>
            <Link href="/cookie-policy" className="text-[#FF6B00] underline hover:no-underline">Cookie Policy</Link>
            <Link href="/" className="text-[#FF6B00] underline hover:no-underline">Torna alla home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </LocaleProvider>
  );
}
