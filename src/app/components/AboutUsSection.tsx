export default function AboutUsSection() {
  return (
    <section id="about-us" className="bg-[#F8F9FA] section-mobile px-4 sm:px-6 scroll-mt-52">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] gap-8 lg:gap-10">
        <div className="flex flex-col h-full">
          <p className="section-eyebrow-mobile text-[#FF6B00] uppercase">Chi siamo</p>
          <h2 className="font-cal section-title-mobile md:text-6xl text-[#1A365D] leading-[1.05]">
            Non una piattaforma anonima.
            <br />
            Persone reali al tuo fianco.
          </h2>
          <p className="section-desc-mobile text-gray-600 mb-8 max-w-2xl">
            Siamo un team di consulenti e legali specializzati in risarcimento del danno. Lavoriamo per conto del
            cittadino — non delle assicurazioni. La nostra missione è garantire che ogni persona, indipendentemente
            dalla propria lingua o situazione economica, ottenga quello che la legge gli riconosce.
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mt-auto">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-[#1E447B] text-white font-black text-xl flex items-center justify-center shrink-0">
                RS
              </div>
              <div>
                <p className="font-black text-xl text-[#1A365D] leading-tight">Responsabile Pratiche</p>
                <p className="font-bold text-[#FF6B00] mt-1 text-sm">Consulente Senior in Risarcimento Danni</p>
                <p className="text-gray-600 leading-relaxed mt-3 text-sm">
                  Oltre 15 anni di esperienza nella gestione di pratiche di infortunio, malasanità e sinistri
                  stradali. Supervisiona personalmente ogni pratica aperta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
              <p className="font-black text-3xl text-[#1A365D] leading-none">200+</p>
              <p className="text-gray-500 text-xs mt-1.5">pratiche gestite</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
              <p className="font-black text-3xl text-[#1A365D] leading-none">94%</p>
              <p className="text-gray-500 text-xs mt-1.5">chiuse in stragiudiziale</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
              <p className="font-black text-3xl text-[#1A365D] leading-none">€ 48k</p>
              <p className="text-gray-500 text-xs mt-1.5">risarcimento medio</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
              <p className="font-black text-3xl text-[#1A365D] leading-none">6</p>
              <p className="text-gray-500 text-xs mt-1.5">lingue di assistenza</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-[10px] font-black tracking-[0.2em] text-[#1A365D]/70 uppercase mb-4">Garanzie e Affiliazioni</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-700 font-black text-[10px] flex items-center justify-center shrink-0">
                  GDPR
                </div>
                <div>
                  <p className="font-black text-[#1A365D] text-sm">Conformità GDPR certificata</p>
                  <p className="text-gray-600 text-sm">Trattamento dei dati personali conforme al Regolamento UE 2016/679</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 text-base flex items-center justify-center shrink-0">
                  ⚖
                </div>
                <div>
                  <p className="font-black text-[#1A365D] text-sm">Consulenti legali specializzati</p>
                  <p className="text-gray-600 text-sm">
                    Rete di avvocati specializzati in responsabilità civile e diritto del lavoro
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 text-base flex items-center justify-center shrink-0">
                  🌍
                </div>
                <div>
                  <p className="font-black text-[#1A365D] text-sm">Assistenza multilingua attiva</p>
                  <p className="text-gray-600 text-sm">
                    Pratiche seguite in italiano, arabo, albanese, rumeno, francese e inglese
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
