import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LocaleProvider } from "../i18n/LocaleContext";

const updatedAt = "9 maggio 2026";

export default function CookiePolicyPage() {
  return (
    <LocaleProvider>
      <Header />
      <main className="bg-[#F8F9FA] min-h-screen px-4 sm:px-6 pt-[170px] pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-10">
          <h1 className="font-cal text-3xl sm:text-4xl text-[#1A365D]">Cookie Policy</h1>
          <p className="text-sm text-gray-500 mt-2">Ultimo aggiornamento: {updatedAt}</p>

          <div className="mt-8 space-y-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">1. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti inviano al dispositivo dell&apos;utente per migliorare
                funzionalita, sicurezza e fruizione del servizio.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">2. Fonti normative</h2>
              <p>
                Questa policy e redatta in conformita al GDPR, al d.lgs. 196/2003 (art. 122), alla Direttiva
                2002/58/CE (ePrivacy) e alle Linee guida cookie del Garante Privacy (provvedimento n. 231 del 10 giugno
                2021, docweb 9677876).
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">3. Cookie utilizzati dal Sito</h2>
              <p>
                Alla data di aggiornamento di questa pagina, il Sito utilizza solo cookie tecnici strettamente necessari
                al funzionamento e alla sicurezza del servizio.
              </p>
              <p className="mt-2">
                Non vengono installati cookie di profilazione o marketing senza consenso preventivo dell&apos;utente.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">4. Cookie di terze parti</h2>
              <p>
                Se in futuro verranno attivati strumenti di analisi o tracciamento di terze parti non tecnici, il Sito
                raccogliera prima un consenso libero, specifico e documentabile, con possibilita di revoca in ogni
                momento.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">5. Gestione preferenze</h2>
              <p>
                Puoi gestire o cancellare i cookie direttamente dalle impostazioni del browser. La disattivazione dei
                cookie tecnici potrebbe compromettere alcune funzioni del Sito.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">6. Diritti privacy</h2>
              <p>
                Per i diritti previsti dagli artt. 15-22 GDPR (accesso, cancellazione, opposizione, ecc.) consulta la
                nostra Privacy Policy e contattaci tramite il modulo presente in homepage.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-sm flex gap-4 flex-wrap">
            <Link href="/privacy-policy" className="text-[#FF6B00] underline hover:no-underline">Privacy Policy</Link>
            <Link href="/" className="text-[#FF6B00] underline hover:no-underline">Torna alla home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </LocaleProvider>
  );
}
