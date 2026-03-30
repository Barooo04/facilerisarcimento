"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

const languages = ["Italiano", "Arabo", "Rumeno", "Albanese", "Francese", "Inglese", "Altro"];
const caseTypes = [
  "Infortunio sul Lavoro",
  "Problema in Ospedale / Errore Medico",
  "Incidente Stradale",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = data.get("phone") as string;
    const privacy = data.get("privacy");

    if (!phone?.trim()) {
      setError("Il numero di telefono è obbligatorio.");
      setLoading(false);
      return;
    }
    if (!privacy) {
      setError("Devi accettare i termini e il trattamento dei dati.");
      setLoading(false);
      return;
    }

    // Simulated submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <section
      id="contact-form"
      className="bg-[#1A365D] py-20 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left: persuasion copy */}
          <div className="text-white">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 font-semibold text-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Attenzione: i termini di prescrizione scadono
            </div>

            <h2 className="font-cal text-3xl sm:text-4xl mb-6 leading-tight">
              Non aspettare che sia{" "}
              <span className="text-[#FF6B00]">troppo tardi.</span>
            </h2>

            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              La legge mette delle scadenze per richiedere i risarcimenti.
              Più aspetti, più rischi di perdere i tuoi soldi.
              <strong className="text-white"> Compila il modulo ora.</strong> La prima
              chiacchierata è{" "}
              <span className="text-[#FF6B00] font-bold">100% gratis</span> e senza impegno.
            </p>

            {/* Trust list */}
            <ul className="space-y-4">
              {[
                "Nessun anticipo richiesto",
                "Traduttore nella tua lingua",
                "Legali ed esperti al tuo fianco",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-100">
                  <CheckCircle2 size={20} className="text-[#28A745] shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-blue-300 text-sm mb-3">Già scelto da oltre 2.400 persone</p>
              <div className="flex -space-x-2">
                {["🧑🏻", "👩🏾", "🧔🏽", "👩🏻", "🧑🏿"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-[#FF6B00]/30 border-2 border-[#1A365D] flex items-center justify-center text-base"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle2 size={40} className="text-[#28A745]" />
                </div>
                <h3 className="text-2xl font-black text-[#1A365D] mb-3">
                  Richiesta ricevuta!
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Ti contatteremo al più presto, anche con un traduttore nella tua lingua.
                  La tua consultazione è completamente gratuita.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-[#1A365D] mb-1">
                  Richiedi assistenza gratuita
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Compila il modulo, ti richiamiamo noi.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                      Nome e Cognome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Es. Mario Rossi"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100 outline-none text-gray-800 placeholder-gray-300 transition-all text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                      Numero di Telefono{" "}
                      <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+39 333 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100 outline-none text-gray-800 placeholder-gray-300 transition-all text-sm"
                    />
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="language">
                      Che lingua parli?
                    </label>
                    <select
                      id="language"
                      name="language"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100 outline-none text-gray-800 transition-all text-sm bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Seleziona la tua lingua…</option>
                      {languages.map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                  {/* Case type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="caseType">
                      Cosa ti è successo?
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100 outline-none text-gray-800 transition-all text-sm bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Scegli il tipo di caso…</option>
                      {caseTypes.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 accent-[#FF6B00] cursor-pointer shrink-0"
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                      Accetto i{" "}
                      <a href="#" className="text-[#FF6B00] underline hover:no-underline">
                        termini e il trattamento dei dati
                      </a>{" "}
                      ai sensi del GDPR. I dati saranno usati solo per la gestione della tua pratica.
                    </label>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                      <AlertCircle size={16} className="shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] disabled:bg-orange-300 text-white font-black text-base py-4 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-150 uppercase tracking-wide mt-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Invio in corso…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Richiedi Assistenza Gratuita
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
