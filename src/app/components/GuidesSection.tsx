"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale, type Locale } from "../i18n/LocaleContext";

type Guide = {
  category: string;
  title: string;
  cta: string;
  sections: Array<{ heading?: string; text: string }>;
};

const guidesByLocale: Record<Locale, Guide[]> = {
  it: [
  {
    category: "Infortuni sul Lavoro",
    title: "Danno differenziale INAIL: cos'è e perché spetta a quasi tutti i lavoratori infortunati",
    cta: "Verifica il tuo caso — Gratis →",
    sections: [
      {
        text: "Se hai subito un infortunio sul lavoro, probabilmente hai già ricevuto una liquidazione dall'INAIL. Ma quello che l'INAIL ti ha pagato è quasi certamente meno di quanto hai diritto a ottenere per legge. La differenza si chiama danno differenziale, e in molti casi vale decine — o centinaia — di migliaia di euro.",
      },
      {
        heading: "Cosa copre l'INAIL e cosa non copre",
        text: "L'INAIL è un sistema di assicurazione obbligatoria che indennizza il lavoratore infortunato, ma copre solo una parte del danno: prevalentemente la riduzione della capacità lavorativa generica, calcolata secondo tabelle ministeriali che non tengono conto del danno biologico pieno, del danno morale, del danno esistenziale, né del lucro cessante effettivo. In sostanza, l'INAIL è un sistema di tutela parziale. Non è stato progettato per liquidare l'intero danno, ma per garantire una soglia minima di protezione al lavoratore.",
      },
      {
        heading: "Cos'è esattamente il danno differenziale",
        text: "Il danno differenziale è la differenza tra il valore del risarcimento calcolato secondo le regole del diritto civile (le cosiddette Tabelle del Tribunale di Milano, aggiornate al 2025) e quanto l'INAIL ha già corrisposto. Questa differenza deve essere pagata dal datore di lavoro — o dalla sua assicurazione — nei casi in cui sia configurabile una sua responsabilità per l'infortunio, ad esempio per violazione delle norme sulla sicurezza sul lavoro (D.Lgs. 81/2008).\n\nLa Corte di Cassazione ha confermato in più occasioni che il diritto al danno differenziale sussiste anche quando l'INAIL ha già liquidato il proprio indennizzo: le due azioni sono autonome e non si escludono.",
      },
      {
        heading: "Quando spetta il danno differenziale",
        text: "Il danno differenziale spetta quando: l'infortunio è avvenuto in occasione di lavoro o in itinere; è configurabile una responsabilità del datore di lavoro (anche parziale) per carenza di dispositivi di protezione, formazione insufficiente, macchine non conformi, ambienti non sicuri; il lavoratore ha riportato lesioni fisiche con postumi permanenti o temporanei significativi. Non è necessario che il datore di lavoro sia stato condannato penalmente: è sufficiente dimostrare la violazione delle norme prevenzionistiche in sede civile.",
      },
      {
        heading: "I termini di prescrizione",
        text: "Il diritto al danno differenziale si prescrive in 3 anni dal momento in cui il danno si è stabilizzato (cioè dalla consolidazione dei postumi), ai sensi dell'art. 2947 c.c. Non dal momento dell'infortunio, ma dalla stabilizzazione. Questo significa che anche chi ha subito l'infortunio anni fa potrebbe avere ancora tempo per agire — ma è fondamentale verificarlo subito.",
      },
      {
        heading: "Come si calcola",
        text: "Il calcolo segue uno schema preciso: si determina prima il valore del danno biologico permanente secondo le Tabelle di Milano 2025 (per una invalidità del 20%, ad esempio, si parla di circa €80.000 per un lavoratore di 40 anni); si aggiunge il danno morale nella misura personalizzata dal giudice (tipicamente dal 25% al 50% del biologico); si sommano il danno patrimoniale da lucro cessante (redditi persi durante la convalescenza e riduzione futura della capacità lavorativa); si sottrae quanto già corrisposto dall'INAIL. La cifra risultante è il danno differenziale che il datore deve risarcire.",
      },
      {
        text: "Non sai se hai ancora tempo o se ti spetta qualcosa? Contattaci: in 24 ore valutiamo gratuitamente il tuo caso e ti diciamo con chiarezza se esistono i presupposti per agire.",
      },
    ],
  },
  {
    category: "Incidenti Stradali",
    title: "Offerta assicurazione troppo bassa dopo incidente: cosa fare prima di firmare",
    cta: "Verifica l'offerta che hai ricevuto — Gratis →",
    sections: [
      {
        text: "Hai ricevuto un'offerta di risarcimento dalla compagnia assicurativa dopo un incidente stradale. Sembra una buona notizia — finalmente si chiude la questione. Ma quasi sempre, quella prima offerta è strutturalmente al ribasso. Le compagnie lo sanno: la maggior parte delle persone non conosce i propri diritti e accetta per stanchezza o sollievo. Firmare quella proposta è spesso l'errore più costoso che puoi fare.",
      },
      {
        heading: "Perché le assicurazioni offrono sempre meno",
        text: "Le compagnie assicurative hanno uffici liquidazione sinistri composti da professionisti il cui obiettivo è minimizzare il pagamento. Non sono contrari alla legge — semplicemente applicano le stime più basse tecnicamente sostenibili. Calcolano il danno biologico al valore minimo delle tabelle, ignorano sistematicamente il danno morale e quello esistenziale, trascurano il lucro cessante se il cliente non lo ha esplicitamente documentato, e speculano sull'incertezza del danneggiato.",
      },
      {
        heading: "Cosa comprende un risarcimento completo",
        text: "Un risarcimento pieno dopo un incidente stradale con lesioni comprende: il danno biologico temporaneo (circa €98 al giorno per inabilità assoluta secondo le Tabelle di Milano 2025); il danno biologico permanente per i postumi stabili, che cresce esponenzialmente con la percentuale di invalidità; il danno morale, che va da un minimo del 25% a un massimo del 50% del biologico; il danno patrimoniale per spese mediche sostenute e future; il lucro cessante per i giorni di lavoro persi; in alcuni casi, il danno estetico e il danno alla vita di relazione.",
      },
      {
        heading: "Come si contesta un'offerta inadeguata",
        text: "La contestazione si formalizza tramite lettera raccomandata o PEC alla compagnia, indicando le specifiche voci di danno contestate e l'importo ritenuto congruo. Prima di inviare qualsiasi comunicazione, è fondamentale avere una perizia medico-legale indipendente che quantifichi i postumi permanenti con precisione. Senza questa perizia, qualsiasi contestazione è priva di fondamento quantitativo e difficile da sostenere.\n\nSe la compagnia non risponde adeguatamente entro 30 giorni o la trattativa si inceppa, si può procedere con una mediazione obbligatoria (per controversie fino a €250.000) o direttamente con il giudizio civile. Il 94% delle nostre pratiche si chiude in via stragiudiziale: significa che nella quasi totalità dei casi la compagnia, di fronte a una contestazione documentata e professionalmente gestita, preferisce raggiungere un accordo.",
      },
      {
        heading: "Il termine per contestare",
        text: "Attenzione: non si può contestare un'offerta già formalmente accettata. Una volta che hai firmato la quietanza liberatoria, hai rinunciato a ogni ulteriore pretesa. Se hai già ricevuto un'offerta ma non l'hai ancora firmata, contattaci subito — hai ancora tempo per verificare se vale la pena contestarla. Se invece hai già firmato ma ritieni di essere stato indotto in errore o che ci siano vizi del consenso, esistono casi in cui è possibile agire ugualmente, ma è una strada più complessa.",
      },
      {
        text: "Hai ricevuto un'offerta? Mandacela o contattaci: valutiamo gratuitamente in 24 ore se è congrua o se è il caso di contestarla.",
      },
    ],
  },
  {
    category: "Infortuni sul Lavoro",
    title: "Infortunio in itinere: quando è riconosciuto e cosa puoi richiedere oltre all'INAIL",
    cta: "Verifica il tuo caso — Gratis →",
    sections: [
      {
        text: "L'infortunio in itinere è uno degli istituti più importanti e meno conosciuti del diritto del lavoro italiano. Significa semplicemente che se ti fai male durante il tragitto tra casa e lavoro — o tra due luoghi di lavoro — l'INAIL ti copre come se fossi infortunato in cantiere. Ma esiste anche qui un diritto aggiuntivo che va ben oltre la tutela INAIL.",
      },
      {
        heading: "Quando un infortunio è \"in itinere\"",
        text: "Un infortunio è riconosciuto come in itinere quando avviene: lungo il normale percorso di andata o ritorno tra abitazione e luogo di lavoro; durante il tragitto verso il luogo di consumazione del pasto, in assenza di mensa aziendale; nel percorso tra due distinti luoghi di lavoro dello stesso o di diversi datori; nella misura in cui non si siano effettuate deviazioni o soste per ragioni personali non necessitate. Il mezzo di trasporto può essere auto, moto, bicicletta, trasporto pubblico o anche a piedi. L'orario è tipicamente quello relativo all'inizio o fine del turno, con ragionevole margine.",
      },
      {
        heading: "Il caso del terzo responsabile",
        text: "Questa è la situazione più ricca di diritti: se durante il tragitto casa-lavoro sei stato investito o coinvolto in un incidente causato da un terzo (un altro veicolo), hai due azioni risarcitorie indipendenti. La prima è quella INAIL, che copre come descritto sopra. La seconda è quella verso l'assicurazione del responsabile civile dell'incidente — e questa copre il risarcimento pieno del danno biologico, morale e patrimoniale secondo le Tabelle di Milano, senza franchigie e senza i limiti tabellari dell'INAIL. Le due azioni non si escludono: l'INAIL paga il proprio indennizzo, e l'assicurazione del responsabile paga la differenza (danno differenziale) fino al risarcimento pieno.",
      },
      {
        heading: "Il caso dell'infortunio senza terzo responsabile",
        text: "Se invece sei caduto da solo (caduta dalla bici, scivolata, ecc.) senza coinvolgimento di terzi, hai solo la tutela INAIL. In questo caso non esiste una seconda azione verso terzi — a meno che l'incidente non sia avvenuto su una strada con buche o in condizioni di manutenzione non adeguata, nel qual caso potrebbe configurarsi una responsabilità del Comune o dell'ente proprietario della strada (art. 2051 c.c., responsabilità per cose in custodia).",
      },
      {
        heading: "Cosa fare immediatamente dopo l'infortunio in itinere",
        text: "Le azioni immediate che determinano se potrai esercitare tutti i tuoi diritti: 1) vai al pronto soccorso e fatti refertare — il referto medico è la prova del nesso causale; 2) denuncia l'infortunio al datore di lavoro entro due giorni; 3) se c'è stato un incidente stradale, chiedi il verbale alla polizia o carabinieri intervenuti; 4) conserva ogni scontrino e ricevuta medica; 5) non firmare nulla proposte dalla compagnia assicurativa prima di essere assistito da un professionista.",
      },
      {
        text: "Hai avuto un incidente nel tragitto casa-lavoro? Anche se l'INAIL ha già liquidato, potrebbe esserci ancora un risarcimento aggiuntivo da richiedere.",
      },
    ],
  },
  {
    category: "Malasanità",
    title: "Colpa medica: come si dimostra e cosa puoi risarcire secondo la Legge Gelli-Bianco",
    cta: "Richiedi valutazione gratuita →",
    sections: [
      {
        text: "La responsabilità medica è uno degli ambiti più complessi del diritto civile italiano, ma anche uno dei più significativi in termini di risarcimento. La Legge 24/2017 (cosiddetta Legge Gelli-Bianco) ha ridisegnato l'intero sistema, integrando la responsabilità della struttura sanitaria da quella del singolo medico, e introducendo il meccanismo delle linee guida accreditate come parametro di valutazione della colpa.",
      },
      {
        heading: "Struttura vs. medico: due responsabilità distinte",
        text: "Dopo la Gelli-Bianco, la struttura sanitaria (ospedale, clinica, RSA) risponde per responsabilità contrattuale ai sensi dell'art. 1218 c.c. — il termine di prescrizione è di 10 anni. Il singolo medico, invece, risponde per responsabilità extracontrattuale ai sensi dell'art. 2043 c.c. — il termine di prescrizione è di 5 anni. Questo significa che puoi agire contro la struttura anche quando l'azione contro il medico è già prescritta.",
      },
      {
        heading: "Cosa si deve dimostrare",
        text: "La prova della responsabilità medica richiede tre elementi: la condotta colposa del sanitario (scostamento dalle linee guida o dalle buone pratiche cliniche); il danno subito (fisico, psicologico, patrimoniale); il nesso causale tra la condotta e il danno. La Cassazione a Sezioni Unite (n. 577/2008) ha stabilito che l'onere probatorio è distribuito: il paziente deve provare il contratto con la struttura, il danno e il nesso causale; la struttura deve dimostrare di aver eseguito correttamente la prestazione o che il danno era imprevedibile.",
      },
      {
        heading: "Le linee guida come parametro",
        text: "La Gelli-Bianco ha introdotto il Sistema Nazionale Linee Guida (SNLG), che raccoglie le raccomandazioni cliniche accreditate per ogni disciplina. Lo scostamento ingiustificato da queste linee guida è la principale prova di colpa medica. Non è necessario che il medico abbia sbagliato in senso assoluto: è sufficiente dimostrare che, nel caso specifico, non ha seguito le indicazioni cliniche consolidate senza una ragione clinica documentata.",
      },
      {
        heading: "I danni risarcibili",
        text: "In una pratica di responsabilità medica si possono risarcire: il danno biologico (permanente e temporaneo); il danno morale da sofferenza soggettiva; il danno da perdita del rapporto parentale per i familiari in caso di decesso; il danno patrimoniale per spese mediche aggiuntive, cure riabilitative, assistenza; il danno da perdita di chance terapeutica (quando l'errore ha ridotto le possibilità di guarigione anche senza causare direttamente il decesso). Quest'ultima voce è particolarmente rilevante nei casi di diagnosi tardiva di tumori o patologie tempo-dipendenti.",
      },
      {
        heading: "Il procedimento obbligatorio di consulenza tecnica preventiva",
        text: "Prima di procedere in giudizio, la Gelli-Bianco impone un tentativo obbligatorio di conciliazione attraverso una Consulenza Tecnica Preventiva (CTP) ai sensi dell'art. 696-bis c.p.c., oppure una mediazione. Questo passaggio non è un ostacolo — spesso è il momento in cui la struttura, di fronte a una perizia tecnica solida, preferisce transigere senza arrivare in aula.",
      },
      {
        text: "Hai subito o sospetti di aver subito un errore medico? Valutiamo gratuitamente la documentazione clinica e ti diciamo se ci sono le basi per procedere.",
      },
    ],
  },
  {
    category: "Tabelle & Calcoli",
    title: "Tabelle danno biologico 2025: come si calcola il risarcimento per invalidità permanente",
    cta: "Richiedi stima gratuita →",
    sections: [
      {
        text: "Le Tabelle del Tribunale di Milano sono il principale strumento di calcolo del danno biologico non patrimoniale in Italia. Dal 2009 la Cassazione ha di fatto reso queste tabelle lo standard nazionale, e i giudici di tutta Italia vi fanno riferimento anche se possono discostarsene con motivazione. Capire come funzionano ti permette di avere un'idea concreta di quanto potresti ottenere.",
      },
      {
        heading: "Danno biologico temporaneo",
        text: "Copre il periodo dalla data dell'infortunio alla stabilizzazione dei postumi. Si calcola in giorni di inabilità: per ogni giorno di inabilità temporanea assoluta (ITA) — quando sei costretto a letto e non puoi svolgere alcuna attività — spettano circa €98 al giorno (valore 2025). Per i giorni di inabilità temporanea parziale (ITP) la somma viene ridotta proporzionalmente: al 75% corrisponde circa €73,50/giorno, al 50% circa €49/giorno. Se hai avuto una frattura con 90 giorni di ITA totale, il danno biologico temporaneo è già €8.820 — solo per questa voce.",
      },
      {
        heading: "Danno biologico permanente",
        text: "È la voce più rilevante nei casi gravi. Viene determinato da un medico legale che esprime la percentuale di invalidità permanente residua. Il valore per punto di invalidità non è lineare — cresce esponenzialmente con la percentuale, per riflettere l'impatto crescente sulla qualità della vita. A titolo orientativo (per un soggetto di 40 anni, valori 2025):\n\n5% di invalidità → circa € 24.000\n10% di invalidità → circa € 56.000\n20% di invalidità → circa € 128.000\n30% di invalidità → circa € 220.000\n50% di invalidità → circa € 480.000\n80% di invalidità → circa € 950.000\n\nL'età del danneggiato incide significativamente: più il soggetto è giovane, più alto è il valore del punto percentuale, perché dovrà convivere con l'invalidità per più anni.",
      },
      {
        heading: "Il danno morale: come si aggiunge",
        text: "Le Tabelle di Milano 2021 (aggiornate per il 2025) prevedono la personalizzazione del danno biologico attraverso una componente \"morale\" che viene calcolata in percentuale sul danno biologico stesso. L'intervallo tipico è tra il 25% e il 50%. Il giudice decide la percentuale in base alla effettiva sofferenza soggettiva dimostrata — malanni psicologici documentati, qualità della vita compromessa, vita di relazione ridotta. Un 20% di invalidità permanente con forte componente morale può quindi arrivare a €128.000 × 1,5 = €192.000 solo per biologico e morale.",
      },
      {
        heading: "Le voci che si sommano",
        text: "Al totale del danno biologico (temporaneo + permanente) e del danno morale si sommano separatamente: le spese mediche documentate (fatture, ricevute, scontrini); il lucro cessante per giorni di lavoro persi; la riduzione futura della capacità lavorativa specifica (se l'invalidità limita la tua specifica professione); le spese future per cure, riabilitazione, assistenza; il danno estetico se rilevante. Il risarcimento finale è la somma di tutte queste voci.",
      },
      {
        text: "Vuoi sapere concretamente quanto potresti ottenere nel tuo caso? Dimmi la percentuale di invalidità stimata e il tipo di danno: ti forniamo una stima orientativa gratuita.",
      },
    ],
  },
  ],
  en: [
    {
      category: "Work Injuries",
      title: "INAIL differential damage: what it is and why it is often due",
      cta: "Check your case - Free →",
      sections: [
        { text: "After a work accident, INAIL usually pays only part of the total damage. The remaining amount is called differential damage." },
        { heading: "When it applies", text: "It applies when employer responsibility can be shown (lack of safety, training, compliant equipment, safe environment)." },
        { heading: "Time limits", text: "In many cases, limitation starts from stabilization of permanent consequences, not from the accident date. Early review is essential." },
      ],
    },
    {
      category: "Road Accidents",
      title: "Insurance offer too low after an accident: what to do before signing",
      cta: "Review your offer - Free →",
      sections: [
        { text: "The first insurance offer is often lower than the full amount due by law. Signing too quickly can close your claim." },
        { heading: "What full compensation includes", text: "Temporary and permanent biological damage, moral damage, documented expenses, lost earnings and, where applicable, relational damage." },
        { heading: "How to challenge", text: "A technical medical assessment and a formal written challenge are usually required before negotiation or legal action." },
      ],
    },
    {
      category: "Work Injuries",
      title: "Commuting accident (in itinere): rights beyond INAIL",
      cta: "Check your case - Free →",
      sections: [
        { text: "An accident on the way to or from work may be recognized by INAIL as in itinere." },
        { heading: "If a third party caused the crash", text: "You may have two separate actions: INAIL protection and full civil compensation from the liable party’s insurer." },
        { heading: "What to do immediately", text: "Get medical reports, notify employer, collect police report (if any), keep receipts, and do not sign insurer documents without review." },
      ],
    },
    {
      category: "Medical Malpractice",
      title: "Medical fault: proof and compensation under Italian law",
      cta: "Request free evaluation →",
      sections: [
        { text: "Medical liability cases require proving fault, damage and causal link, often through specialist medico-legal evidence." },
        { heading: "Structure vs doctor", text: "Healthcare structure and physician can have different liability regimes and different limitation periods." },
        { heading: "Compensable damages", text: "Biological, moral, patrimonial damages and, in specific cases, loss of therapeutic chance may be claimed." },
      ],
    },
    {
      category: "Tables & Calculations",
      title: "Biological damage tables 2025: how compensation is estimated",
      cta: "Request free estimate →",
      sections: [
        { text: "Milan tables are the main benchmark to quantify non-economic damage in Italy." },
        { heading: "Main components", text: "Temporary damage, permanent damage, moral personalization and additional patrimonial items are assessed separately and then combined." },
        { heading: "Why this matters", text: "A structured estimate helps verify whether an insurance offer is fair before acceptance." },
      ],
    },
  ],
  fr: [
    {
      category: "Accidents du travail",
      title: "Prejudice différentiel INAIL: de quoi s'agit-il et quand il est dû",
      cta: "Vérifiez votre dossier - Gratuit →",
      sections: [
        { text: "Après un accident du travail, l'INAIL indemnise souvent seulement une partie du préjudice total." },
        { heading: "Quand cela s'applique", text: "Le différentiel est dû lorsqu'une responsabilité de l'employeur peut être démontrée (sécurité insuffisante, formation inadéquate, etc.)." },
        { heading: "Délais", text: "Dans de nombreux cas, il faut vérifier rapidement les délais de prescription à partir de la stabilisation des séquelles." },
      ],
    },
    {
      category: "Accidents de la route",
      title: "Offre d'assurance trop basse: que faire avant de signer",
      cta: "Vérifiez l'offre - Gratuit →",
      sections: [
        { text: "La première offre est souvent sous-évaluée. Signer sans vérification peut fermer toute réclamation future." },
        { heading: "Ce que couvre une indemnisation complète", text: "Préjudice biologique temporaire et permanent, préjudice moral, frais documentés et pertes de revenus." },
        { heading: "Comment contester", text: "Une expertise médico-légale indépendante et une contestation formelle sont généralement nécessaires." },
      ],
    },
    {
      category: "Accidents du travail",
      title: "Accident in itinere: vos droits au-delà de l'INAIL",
      cta: "Vérifiez votre dossier - Gratuit →",
      sections: [
        { text: "Un accident pendant le trajet domicile-travail peut être reconnu comme accident in itinere." },
        { heading: "S'il y a un tiers responsable", text: "Vous pouvez cumuler la protection INAIL et une action civile contre l'assureur du responsable." },
        { heading: "Actions immédiates", text: "Certificat médical, déclaration à l'employeur, constat/rapport, conservation des dépenses et prudence avant toute signature." },
      ],
    },
    {
      category: "Erreur médicale",
      title: "Faute médicale: preuve et indemnisation",
      cta: "Demandez une évaluation gratuite →",
      sections: [
        { text: "La responsabilité médicale exige de prouver faute, dommage et lien causal, avec support technique spécialisé." },
        { heading: "Établissement et médecin", text: "Les régimes de responsabilité et les délais peuvent être différents selon la partie visée." },
        { heading: "Préjudices réparables", text: "Préjudice biologique, moral, patrimonial et, selon les cas, perte de chance thérapeutique." },
      ],
    },
    {
      category: "Barèmes & Calculs",
      title: "Barèmes 2025 du dommage corporel: comment estimer l'indemnisation",
      cta: "Demandez une estimation gratuite →",
      sections: [
        { text: "Les barèmes de Milan sont la référence principale pour l'évaluation du dommage non patrimonial en Italie." },
        { heading: "Éléments de calcul", text: "Incapacité temporaire, invalidité permanente, composante morale et postes patrimoniaux additionnels." },
        { heading: "Utilité pratique", text: "Une estimation structurée permet de vérifier la cohérence d'une offre d'assurance." },
      ],
    },
  ],
  ro: [
    {
      category: "Accidente de munca",
      title: "Daunul diferential INAIL: ce este si cand se acorda",
      cta: "Verifica cazul tau - Gratuit →",
      sections: [
        { text: "Dupa un accident de munca, INAIL acopera de obicei doar o parte din prejudiciu." },
        { heading: "Cand se acorda", text: "Se acorda cand exista raspundere a angajatorului pentru siguranta insuficienta sau incalcari preventive." },
        { heading: "Termene", text: "Verificarea rapida a prescriptiei este esentiala, in special dupa stabilizarea sechelelor." },
      ],
    },
    {
      category: "Accidente rutiere",
      title: "Oferta de asigurare prea mica: ce faci inainte de semnare",
      cta: "Verifica oferta - Gratuit →",
      sections: [
        { text: "Prima oferta este frecvent sub valoarea reala. Semnarea poate inchide orice pretentie ulterioara." },
        { heading: "Ce include despagubirea completa", text: "Daun biologic temporar/permanent, daun moral, cheltuieli dovedite si venituri pierdute." },
        { heading: "Cum se contesta", text: "Este utila o expertiza medico-legala independenta si o contestatie formala catre asigurator." },
      ],
    },
    {
      category: "Accidente de munca",
      title: "Accident in itinere: drepturi suplimentare fata de INAIL",
      cta: "Verifica cazul tau - Gratuit →",
      sections: [
        { text: "Accidentul pe traseul casa-serviciu poate fi recunoscut ca in itinere." },
        { heading: "Daca exista tert responsabil", text: "Pot exista doua actiuni distincte: protectia INAIL si actiunea civila impotriva asigurarii tertului." },
        { heading: "Ce sa faci imediat", text: "Documente medicale, notificare angajator, raport politie, pastrarea cheltuielilor si atentie la semnari." },
      ],
    },
    {
      category: "Malpraxis medical",
      title: "Culpa medicala: dovada si despagubiri",
      cta: "Solicita evaluare gratuita →",
      sections: [
        { text: "Cazurile de malpraxis necesita proba culpei, a prejudiciului si a legaturii cauzale." },
        { heading: "Structura vs medic", text: "Regimul de raspundere si termenele de prescriptie pot fi diferite pentru unitate si medic." },
        { heading: "Daune reparabile", text: "Daune biologice, morale, patrimoniale si, in anumite cazuri, pierderea unei sanse terapeutice." },
      ],
    },
    {
      category: "Tabele si calcule",
      title: "Tabele daun biologic 2025: cum estimezi despagubirea",
      cta: "Solicita estimare gratuita →",
      sections: [
        { text: "Tabelele Tribunalului din Milano sunt standardul principal pentru evaluarea daunelor nepatrimoniale in Italia." },
        { heading: "Componente", text: "Daun temporar, daun permanent, componenta morala si voci patrimoniale suplimentare." },
        { heading: "De ce conteaza", text: "O estimare corecta te ajuta sa verifici daca oferta asigurarii este adecvata." },
      ],
    },
  ],
  sq: [
    {
      category: "Aksidente ne pune",
      title: "Demi diferencial INAIL: cfare eshte dhe kur te takon",
      cta: "Kontrollo rastin - Falas →",
      sections: [
        { text: "Pas nje aksidenti ne pune, INAIL zakonisht mbulon vetem nje pjese te demit total." },
        { heading: "Kur njihet", text: "Njihet kur mund te provohet pergjegjesia e punedhenesit per mungese sigurie ose masa parandaluese." },
        { heading: "Afatet", text: "Verifikimi i shpejte i afateve te parashkrimit eshte thelbesor." },
      ],
    },
    {
      category: "Aksidente rrugore",
      title: "Oferte e ulet nga sigurimi: cfare te besh para nenshkrimit",
      cta: "Kontrollo oferten - Falas →",
      sections: [
        { text: "Oferta e pare shpesh eshte me e ulet se demshperblimi real qe te takon." },
        { heading: "Cfare perfshin demshperblimi i plote", text: "Dem biologjik i perkohshem/perhershem, dem moral, shpenzime te dokumentuara dhe te ardhura te humbura." },
        { heading: "Si kundershtohet", text: "Ne shumicen e rasteve nevojitet vleresim mjeko-ligjor i pavarur dhe kundershtim formal." },
      ],
    },
    {
      category: "Aksidente ne pune",
      title: "Aksident in itinere: te drejta shtese pertej INAIL",
      cta: "Kontrollo rastin - Falas →",
      sections: [
        { text: "Aksidenti ne rrugen shtepi-pune mund te njihet si in itinere." },
        { heading: "Kur ka pale te trete pergjegjese", text: "Mund te ushtrohen dy rruge: mbrojtja INAIL dhe kerkim i demshperblimit civil ndaj sigurimit te pales pergjegjese." },
        { heading: "Hapat e menjehershem", text: "Raport mjekesor, njoftim punedhenesi, procesverbal policie, ruajtje fature dhe kujdes para cdo nenshkrimi." },
      ],
    },
    {
      category: "Gabim mjekesor",
      title: "Pergjegjesi mjekesore: si provohet dhe cfare demi kompensohet",
      cta: "Kerko vleresim falas →",
      sections: [
        { text: "Pergjegjesia mjekesore kerkon prove te fajit, demit dhe lidhjes shkak-pasoje." },
        { heading: "Struktura dhe mjeku", text: "Rregjimet e pergjegjesise dhe afatet mund te jene te ndryshme." },
        { heading: "Deme te demshperblueshme", text: "Dem biologjik, moral, pasuror dhe ne raste te caktuara humbje e mundesise terapeutike." },
      ],
    },
    {
      category: "Tabela dhe llogaritje",
      title: "Tabela 2025 e demit biologjik: si llogaritet demshperblimi",
      cta: "Kerko vleresim falas →",
      sections: [
        { text: "Tabelat e Milanos jane standardi kryesor per vleresimin e demit jopasuror ne Itali." },
        { heading: "Perberesit", text: "Dem i perkohshem, dem i perhershem, komponent moral dhe zera pasurore shtese." },
        { heading: "Pse eshte e rendesishme", text: "Te ndihmon te kuptosh nese oferta e sigurimit eshte reale apo e ulet." },
      ],
    },
  ],
  ar: [
    {
      category: "اصابات العمل",
      title: "الضرر التفاضلي INAIL: ما هو ومتى تستحقه",
      cta: "تحقق من حالتك - مجانا →",
      sections: [
        { text: "بعد اصابة العمل، تغطي INAIL غالبا جزءا فقط من الضرر الكلي، وليس كامل التعويض." },
        { heading: "متى يثبت الحق", text: "عند وجود مسؤولية على صاحب العمل بسبب نقص اجراءات السلامة او التدريب او الوقاية." },
        { heading: "المهل", text: "التحقق السريع من مدة التقادم ضروري، خاصة بعد استقرار الحالة الطبية." },
      ],
    },
    {
      category: "حوادث السير",
      title: "عرض تأمين منخفض بعد الحادث: ماذا تفعل قبل التوقيع",
      cta: "راجع العرض مجانا →",
      sections: [
        { text: "العرض الاول من شركة التأمين يكون غالبا اقل من المبلغ الحقيقي المستحق." },
        { heading: "ماذا يشمل التعويض الكامل", text: "الضرر البيولوجي المؤقت والدائم، الضرر المعنوي، المصاريف المثبتة، وفقدان الدخل." },
        { heading: "كيف يتم الاعتراض", text: "يفضل اعداد تقرير طبي قانوني مستقل وتقديم اعتراض مكتوب وموثق." },
      ],
    },
    {
      category: "اصابات العمل",
      title: "حادث الطريق الى العمل (in itinere): حقوق اضافية بجانب INAIL",
      cta: "تحقق من حالتك - مجانا →",
      sections: [
        { text: "يمكن اعتبار اصابة الطريق بين المنزل والعمل حادثا in itinere ضمن حماية INAIL." },
        { heading: "عند وجود طرف ثالث مسؤول", text: "قد توجد مطالبتان مستقلتان: حماية INAIL وتعويض مدني كامل من تأمين الطرف المسؤول." },
        { heading: "ماذا تفعل فورا", text: "تقرير طبي، ابلاغ جهة العمل، محضر الشرطة، حفظ الفواتير، وعدم التوقيع قبل المراجعة القانونية." },
      ],
    },
    {
      category: "الخطأ الطبي",
      title: "المسؤولية الطبية: كيف تثبت وما الذي يمكن تعويضه",
      cta: "اطلب تقييما مجانيا →",
      sections: [
        { text: "قضايا الخطأ الطبي تتطلب اثبات الخطأ والضرر والعلاقة السببية بينهما." },
        { heading: "المنشأة والطبيب", text: "قد تختلف مسؤولية المنشأة الصحية عن مسؤولية الطبيب في النظام القانوني ومدد التقادم." },
        { heading: "الاضرار القابلة للتعويض", text: "الضرر البيولوجي والمعنوي والمالي، وفي بعض الحالات فقدان فرصة علاجية." },
      ],
    },
    {
      category: "الجداول والحسابات",
      title: "جداول الضرر البيولوجي 2025: كيف يتم تقدير التعويض",
      cta: "اطلب تقديرا مجانيا →",
      sections: [
        { text: "تعد جداول ميلانو مرجعا رئيسيا في ايطاليا لتقدير الضرر غير المالي." },
        { heading: "العناصر الرئيسية", text: "ضرر مؤقت، ضرر دائم، عنصر معنوي، وعناصر مالية اضافية." },
        { heading: "الفائدة العملية", text: "التقدير المسبق يساعدك على معرفة ما اذا كان عرض التأمين عادلا قبل القبول." },
      ],
    },
  ],
};

const sectionHeaderByLocale: Record<Locale, { eyebrow: string; title1: string; title2: string; desc: string }> = {
  it: {
    eyebrow: "Guide gratuite",
    title1: "Conosci i tuoi diritti",
    title2: "prima di firmare.",
    desc: "Guide legali gratuite su infortuni, malasanità, incidenti stradali e calcolo risarcimento danni con esempi pratici.",
  },
  en: {
    eyebrow: "Free guides",
    title1: "Know your rights.",
    title2: "Before you even call us.",
    desc: "Practical guides written by our team to help you understand your case clearly. Open a guide to read it.",
  },
  fr: {
    eyebrow: "Guides gratuits",
    title1: "Connaissez vos droits.",
    title2: "Avant meme de nous appeler.",
    desc: "Guides pratiques rediges par nos consultants pour vous aider a comprendre votre situation. Ouvrez un guide pour le lire.",
  },
  ro: {
    eyebrow: "Ghiduri gratuite",
    title1: "Cunoaste-ti drepturile.",
    title2: "Chiar inainte sa ne suni.",
    desc: "Ghiduri practice pregatite de consultantii nostri pentru a intelege clar situatia ta. Deschide un ghid pentru detalii.",
  },
  sq: {
    eyebrow: "Udhezues falas",
    title1: "Njihe te drejtat e tua.",
    title2: "Edhe para se te na telefonosh.",
    desc: "Udhezues praktik nga konsultentet tane per te kuptuar me qarte situaten tende. Hape nje udhezues per ta lexuar.",
  },
  ar: {
    eyebrow: "ادلة مجانية",
    title1: "اعرف حقوقك.",
    title2: "حتى قبل ان تتصل بنا.",
    desc: "ادلة عملية كتبها مستشارونا لمساعدتك على فهم وضعك بوضوح. افتح اي دليل لقراءة التفاصيل.",
  },
};

const categoryStyles: Record<string, string> = {
  "Infortuni sul Lavoro": "text-[#C86A1A] bg-orange-50",
  "Incidenti Stradali": "text-[#265EA8] bg-blue-50",
  "Malasanità": "text-[#9C4B56] bg-rose-50",
  "Tabelle & Calcoli": "text-emerald-700 bg-emerald-50",
  "Tables & Calculations": "text-emerald-700 bg-emerald-50",
  "Barèmes & Calculs": "text-emerald-700 bg-emerald-50",
  "Tabele si calcule": "text-emerald-700 bg-emerald-50",
  "Tabela dhe llogaritje": "text-emerald-700 bg-emerald-50",
  "الجداول والحسابات": "text-emerald-700 bg-emerald-50",
};

export default function GuidesSection() {
  const { locale } = useLocale();
  const guides = guidesByLocale[locale];
  const copy = sectionHeaderByLocale[locale];
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="guide-gratuite" className="bg-white section-mobile px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl section-header-mobile">
          <p className="section-eyebrow-mobile text-[#FF6B00] uppercase">{copy.eyebrow}</p>
          <h2 className="font-cal section-title-mobile sm:text-4xl md:text-5xl text-[#1A365D]">
            {copy.title1}
            <br />
            {copy.title2}
          </h2>
          <p className="section-desc-mobile text-gray-500 max-w-3xl">
            {copy.desc}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden section-after-desc-mobile">
          {guides.map((guide, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={guide.title} className="border-b border-gray-200 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center gap-4 cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black tracking-[0.16em] uppercase mb-2 ${
                        categoryStyles[guide.category] ?? "text-[#1A365D] bg-gray-100"
                      }`}
                    >
                      {guide.category}
                    </span>
                    <p className="text-[#1A365D] font-black accordion-q-mobile sm:text-lg">{guide.title}</p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 bg-[#FAFBFD]">
                      <div className="text-gray-700 space-y-4 accordion-a-mobile sm:text-[15px]">
                        {guide.sections.map((section, idx) => (
                          <div key={`${guide.title}-section-${idx}`} className="pl-1">
                            {section.heading && (
                              <h3 className="font-black text-[#1A365D] accordion-q-mobile sm:text-base mb-2">{section.heading}</h3>
                            )}
                            {section.text.split("\n\n").map((paragraph, pIdx) => (
                              <div key={`${guide.title}-p-${idx}-${pIdx}`} className={pIdx > 0 ? "mt-3" : ""}>
                                {paragraph.split("\n").map((line, lIdx) => (
                                  <p
                                    key={`${guide.title}-l-${idx}-${pIdx}-${lIdx}`}
                                    className={`${lIdx > 0 ? "mt-1.5 pl-3" : ""}`}
                                  >
                                    {line}
                                  </p>
                                ))}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 bg-[#FFF6EF] border border-[#FFD7BD] rounded-xl p-4">
                        <a
                          href="#contact-form"
                          className="inline-flex items-center bg-[#FF6B00] hover:bg-[#e55f00] text-white font-black text-sm px-4 py-2.5 rounded-lg transition-colors"
                        >
                          {guide.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
