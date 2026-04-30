export default function AboutUsSection() {
  return (
    <section id="about-us" className="bg-[#F8F9FA] py-20 px-4 sm:px-6 scroll-mt-52">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] gap-8 lg:gap-10">
        <div className="flex flex-col h-full">
          <p className="text-xs font-black tracking-[0.2em] text-[#FF6B00] mb-4 uppercase">Chi siamo</p>
          <h2 className="font-cal text-4xl md:text-6xl text-[#1A365D] leading-[1.05] mb-6">
            Non una piattaforma anonima.
            <br />
            Persone reali al tuo fianco.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Siamo un team di consulenti e legali specializzati in risarcimento del danno. Lavoriamo per conto del
            cittadino — non delle assicurazioni. La nostra missione è garantire che ogni persona, indipendentemente
            dalla propria lingua o situazione economica, ottenga quello che la legge gli riconosce.
          </p>

          <div className="relative bg-gradient-to-br from-[#FF6B00]/35 via-[#FF8A2A]/28 to-[#FFB066]/22 backdrop-blur-md rounded-2xl border border-[#FF8A2A]/45 p-6 overflow-hidden shadow-[0_12px_35px_-18px_rgba(255,107,0,0.65)] mt-auto">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.35),transparent_40%)]" />
            <p className="relative text-xs font-black tracking-[0.2em] text-[#C75400] uppercase mb-3">
              Perché siamo diversi da un avvocato tradizionale
            </p>
            <p className="relative text-[#7A3A10] leading-relaxed font-medium">
              Un avvocato tradizionale ti chiede un anticipo e lavora per studio. Noi lavoriamo a risultato:
              guadagniamo solo quando tu guadagni. Inoltre, a differenza di uno studio legale monolingua, gestiamo
              pratiche in 6 lingue e siamo specializzati esclusivamente nel risarcimento del danno — non facciamo
              divorzi, contratti o penale. Solo questo.
            </p>
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

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
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
      </div>
    </section>
  );
}
