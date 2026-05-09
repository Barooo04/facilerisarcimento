import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LocaleProvider } from "../i18n/LocaleContext";

const updatedAt = "9 maggio 2026";

export default function PrivacyPolicyPage() {
  return (
    <LocaleProvider>
      <Header />
      <main className="bg-[#F8F9FA] min-h-screen px-4 sm:px-6 pt-[170px] pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-10">
          <h1 className="font-cal text-3xl sm:text-4xl text-[#1A365D]">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mt-2">Ultimo aggiornamento: {updatedAt}</p>

          <div className="mt-8 space-y-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">1. Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento dei dati personali raccolti tramite il sito RisarcimentoSemplice
                (di seguito, &quot;Sito&quot;) e il soggetto che gestisce il servizio legale descritto nelle pagine del Sito.
                Per richieste privacy puoi usare il modulo contatti presente in homepage.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">2. Normativa di riferimento</h2>
              <p>
                Il trattamento e svolto nel rispetto del Regolamento (UE) 2016/679 (GDPR), del d.lgs. 196/2003 come
                modificato dal d.lgs. 101/2018 e delle norme applicabili in materia di comunicazioni elettroniche.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">3. Dati trattati</h2>
              <p>
                Possiamo trattare dati identificativi e di contatto (es. nome, telefono, lingua preferita), dati relativi
                alla richiesta inviata tramite form e dati tecnici di navigazione strettamente necessari al funzionamento
                del Sito.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">4. Finalita e basi giuridiche</h2>
              <p>
                I dati sono trattati per: (a) gestire richieste di contatto e pre-valutazione del caso; (b) adempiere a
                obblighi di legge; (c) tutelare diritti del titolare in sede stragiudiziale o giudiziale.
              </p>
              <p className="mt-2">
                La base giuridica e, a seconda dei casi: art. 6, par. 1, lett. b) GDPR (misure precontrattuali su
                richiesta dell&apos;interessato), lett. c) (obbligo legale), lett. f) (legittimo interesse) o consenso dove
                richiesto.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">5. Natura del conferimento</h2>
              <p>
                Il conferimento dei dati contrassegnati come necessari nel modulo e indispensabile per ricevere una
                risposta. Il mancato conferimento puo impedire la gestione della richiesta.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">6. Conservazione</h2>
              <p>
                I dati sono conservati per il tempo necessario alle finalita indicate e, in ogni caso, entro i termini di
                legge applicabili in materia civilistica, fiscale e di responsabilita professionale.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">7. Destinatari e trasferimenti</h2>
              <p>
                I dati possono essere comunicati a fornitori tecnici e professionisti coinvolti nella gestione della
                pratica, nominati ove necessario responsabili del trattamento ai sensi dell&apos;art. 28 GDPR. Eventuali
                trasferimenti extra-SEE avvengono solo in presenza delle garanzie previste dagli artt. 44 e ss. GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">8. Diritti degli interessati</h2>
              <p>
                Puoi esercitare i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilita
                (artt. 15-22 GDPR), nonche revocare eventuali consensi gia prestati. Hai anche diritto di proporre
                reclamo al Garante per la protezione dei dati personali.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-[#1A365D] mb-2">9. Aggiornamenti</h2>
              <p>
                Questa informativa puo essere aggiornata per adeguamenti normativi o evoluzioni del servizio. La versione
                pubblicata su questa pagina e quella applicabile.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-sm">
            <Link href="/" className="text-[#FF6B00] underline hover:no-underline">Torna alla home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </LocaleProvider>
  );
}
