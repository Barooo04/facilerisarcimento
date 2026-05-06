import type { Locale } from "./LocaleContext";

export const translations = {
  it: {
    header: {
      bannerPrefix:
        "Attenzione: i termini di prescrizione si avvicinano. Ogni giorno di attesa puo farti perdere il diritto al risarcimento.",
      bannerLink: "Verifica subito — è gratuito.",
      call: "Chiamaci Gratis",
      sections: ["Home", "Perche noi", "Servizi", "Come funziona", "Contatti"],
    },
    hero: {
      pills: ["Zero anticipi", "Paghi solo se vinci", "Nella tua lingua"],
      title: "Hai subito un danno?",
      subtitleLine1: "Ottieni subito il",
      subtitleLine2: "risarcimento completo.",
      description:
        "Ottieni il risarcimento danni che ti spetta per legge, non l'offerta minima dell'assicurazione. Assistenza legale senza anticipi, nella tua lingua.",
      ctaPrimary: "Scopri quanto ti spetta - gratis",
      ctaSecondary: "Chiamaci ora",
      note: "Risposta entro 24 ore · Nessun obbligo · Valutazione completamente gratuita",
      catTitle: "Cosa ti e successo?",
      categories: [
        ["Infortunio sul lavoro", "In cantiere, in ufficio o in itinere"],
        ["Errore medico", "Visita, intervento o diagnosi"],
        ["Incidente stradale", "Auto, moto, bici o pedone"],
        ["Sinistro mortale", "Risarcimento per le famiglie"],
      ],
    },
    features: {
      eyebrow: "PERCHE SCEGLIERE NOI",
      titleLine1: "Risarcimento su misura",
      titleLine2: "per il tuo caso.",
      title: "Perche scegliere noi",
      desc: "Risarcimento danni senza costi iniziali: avvocati specializzati, supporto multilingua e pagamento solo a risultato.",
      items: [
        ["Zero Anticipi", "Gestiamo noi le spese mediche e legali durante tutta la pratica. Non ti chiediamo nulla in anticipo, in nessuna fase del processo."],
        ["Paghi Solo se Vinci", "Il nostro compenso e una percentuale concordata sul risarcimento ottenuto. Se non ottieni niente, non ci devi assolutamente nulla. Il rischio e nostro."],
        ["Parliamo la Tua Lingua", "Supporto in italiano, arabo, rumeno, albanese, francese e inglese. Ogni fase della pratica viene seguita nella lingua in cui ti senti piu a tuo agio."],
      ],
      cta1: "Verifica Gratis",
      cta2: "il Tuo Caso",
    },
    services: {
      eyebrow: "I NOSTRI SERVIZI",
      titleLine1: "Quattro aree legali,",
      titleLine2: "un solo obiettivo.",
      title: "I nostri servizi",
      desc: "Infortuni, incidenti stradali, malasanità e sinistri mortali: valutiamo subito il tuo diritto al risarcimento.",
      cards: [
        {
          tag: "Infortuni sul Lavoro",
          title: "Infortuni sul Lavoro o in Itinere",
          body: "L'INAIL ti liquida una parte del danno - ma spesso non tutto quello a cui hai diritto. Esiste un risarcimento aggiuntivo, chiamato \"danno differenziale\", che molti lavoratori non conoscono. Noi lo facciamo valere.",
          bullets: [
            "Infortuni in cantiere o in fabbrica",
            "Incidenti nel tragitto casa-lavoro",
            "Malattie professionali (sordita, ernie, ecc.)",
          ],
        },
        {
          tag: "Malasanita",
          title: "Malasanita ed Errori Medici",
          body: "Un intervento andato male, una diagnosi ritardata, una complicanza evitabile: se la struttura sanitaria ha sbagliato, hai diritto a essere risarcito. Analizziamo la documentazione e verifichiamo le responsabilita.",
          bullets: [
            "Operazioni chirurgiche andate male",
            "Diagnosi errate o ritardate",
            "Complicanze post-operatorie evitabili",
          ],
        },
        {
          tag: "Incidenti Stradali",
          title: "Incidenti Stradali Gravi",
          body: "Le compagnie assicurative offrono sistematicamente meno di quanto dovuto. Un professionista al tuo fianco fa spesso la differenza tra un'offerta inadeguata e il risarcimento pieno a cui hai diritto.",
          bullets: [
            "Lesioni gravi a passeggeri e pedoni",
            "Danni al veicolo e alle cose",
            "Invalidita temporanea o permanente",
          ],
        },
        {
          tag: "Sinistri Mortali",
          title: "Perdita di un Familiare: il Risarcimento per le Famiglie",
          body: "Quando un incidente o una negligenza medica ha causato la morte di una persona cara, la famiglia ha il diritto di ottenere un risarcimento. Gestiamo l'intera pratica con discrezione e rispetto, senza richiedere alcun anticipo. Il tuo unico compito e ricordare - al resto pensiamo noi.",
          bullets: [
            "Morte da incidente stradale o sul lavoro",
            "Decesso per errore medico o negligenza sanitaria",
            "Danno da perdita del rapporto parentale (coniuge, figli, genitori)",
          ],
        },
      ],
      cta: "Verifica il tuo caso gratis",
    },
    how: {
      eyebrow: "COME FUNZIONA",
      titleLine1: "Risarcimento danni in",
      titleLine2: "3 passaggi chiari.",
      title: "Ottenere il risarcimento",
      accent: "richiede pochi passaggi.",
      desc: "Tre passaggi chiari per ottenere il risarcimento: analisi legale, strategia e gestione completa della pratica.",
      steps: [
        {
          title: "Contatto iniziale",
          desc: "Compila il modulo o chiamaci. Raccogliamo le prime informazioni sul tuo caso - senza alcun costo, senza alcun documento da preparare.",
          detail: "Nessun costo iniziale",
        },
        {
          title: "Valutiamo il caso",
          desc: "I nostri professionisti analizzano la documentazione. Ricevi un riscontro chiaro e onesto sulla possibilita di risarcimento e sull'importo stimato.",
          detail: "Valutazione entro 24-48 ore",
        },
        {
          title: "Ricevi il risarcimento",
          desc: "Seguiamo la pratica fino alla conclusione: trattativa, mediazione, eventuale giudizio. Il compenso e dovuto solo a risultato ottenuto.",
          detail: "Paghi solo a risultato ottenuto",
        },
      ],
      cta: "Inizia Ora dal Passo 1",
      note: "Gratuito - Nessun impegno - Risposta rapida",
    },
    contact: {
      urgency: "Attenzione: i termini di prescrizione scadono",
      title: "Non aspettare che sia",
      accent: "troppo tardi.",
      desc: "I termini di prescrizione possono farti perdere il risarcimento danni. Richiedi ora una valutazione legale gratuita e senza impegno.",
      trust: [
        "Nessun anticipo richiesto",
        "Assistenza nella tua lingua",
        "Legali ed esperti al tuo fianco",
        "Risposta garantita entro 24 ore",
        "Paghi solo se ottieni il risarcimento",
      ],
      social: "Gia scelto da oltre 2.400 persone",
      successTitle: "Richiesta ricevuta!",
      successDesc: "Ti contatteremo al piu presto. La consultazione e gratuita.",
      formTitle: "Richiedi assistenza gratuita",
      formSubtitle: "Compila il modulo, ti richiamiamo noi.",
      labels: {
        name: "Nome e Cognome",
        phone: "Numero di Telefono",
        language: "Che lingua parli?",
        caseType: "Cosa ti e successo?",
        privacy: "Accetto i termini e il trattamento dei dati ai sensi del GDPR.",
      },
      placeholders: {
        name: "Es. Mario Rossi",
        phone: "+39 333 000 0000",
        language: "Seleziona la tua lingua...",
        caseType: "Scegli il tipo di caso...",
      },
      errors: {
        phone: "Il numero di telefono e obbligatorio.",
        privacy: "Devi accettare i termini e il trattamento dei dati.",
      },
      loading: "Invio in corso...",
      submit: "Richiedi Assistenza Gratuita",
      languageOptions: ["Italiano", "Arabo", "Rumeno", "Albanese", "Francese", "Inglese", "Altro"],
      caseOptions: ["Infortunio sul Lavoro", "Problema in Ospedale / Errore Medico", "Incidente Stradale"],
    },
    footer: {
      tagline: "Assistenza legale per tutti. Zero anticipi.",
      links: ["Privacy Policy", "Cookie Policy", "Termini di Servizio", "Contatti"],
      rights: "Tutti i diritti riservati.",
      legal: "Il servizio e fornito in conformita con le norme vigenti in materia di assistenza legale.",
      disclaimer: "I risultati passati non garantiscono risultati futuri.",
    },
    fab: { aria: "Vai al modulo di contatto" },
  },
  en: {
    header: {
      bannerPrefix:
        "Warning: limitation deadlines are approaching. Every day of waiting may cost you your right to compensation.",
      bannerLink: "Check now - it is free.",
      call: "Call Us Free",
      sections: ["Home", "Why us", "Services", "How it works", "Contact"],
    },
    hero: {
      pills: ["No upfront fees", "Pay only if you win", "In your language"],
      title: "Have you suffered damage?",
      subtitleLine1: "Get the compensation",
      subtitleLine2: "you truly deserve.",
      description:
        "Not just what they offer you - what you are legally entitled to. We support you with no risk, no upfront fees, in your language.",
      ctaPrimary: "Find out what you deserve - free",
      ctaSecondary: "Call us now",
      note: "Reply within 24 hours · No obligation · Completely free evaluation",
      catTitle: "What happened to you?",
      categories: [
        ["Work injury", "On site, in office, or commute"],
        ["Medical error", "Visit, surgery, or diagnosis"],
        ["Road accident", "Car, bike, scooter, or pedestrian"],
        ["Fatal accident", "Compensation for families"],
      ],
    },
    features: {
      title: "Why choose us",
      desc: "Clear service, no upfront costs, support in your language.",
      items: [
        ["No Upfront Fees", "We cover costs while handling your case."],
        ["Pay only if you win", "If you get nothing, you pay nothing."],
        ["We speak your language", "Continuous and clear support."],
      ],
      cta1: "Free",
      cta2: "Case Review",
    },
    services: {
      title: "Our services",
      desc: "Three areas, one goal: the compensation you deserve.",
      cards: [
        {
          tag: "Work Injuries",
          title: "Work or Commuting Injuries",
          body: "We assess your case and prepare the claim correctly.",
          bullets: ["Construction or factory injuries", "Commute accidents", "Occupational diseases"],
        },
        {
          tag: "Medical Negligence",
          title: "Medical Errors and Negligence",
          body: "We review documents and verify liability.",
          bullets: ["Failed surgery", "Wrong or delayed diagnosis", "Avoidable complications"],
        },
        {
          tag: "Road Accidents",
          title: "Serious Road Accidents",
          body: "We manage your compensation request end-to-end.",
          bullets: ["Serious injuries", "Vehicle and property damages", "Temporary or permanent disability"],
        },
        {
          tag: "Fatal Accidents",
          title: "Loss of a Family Member: Compensation for Families",
          body: "When an accident or medical negligence causes the death of a loved one, the family has the right to compensation. We handle the entire case with discretion and respect, with no upfront payment required. Your only task is to remember - we handle the rest.",
          bullets: [
            "Death from road or workplace accident",
            "Death due to medical error or healthcare negligence",
            "Compensation for loss of family relationship (spouse, children, parents)",
          ],
        },
      ],
      cta: "Check your case for free",
    },
    how: {
      title: "Getting compensation",
      accent: "takes only a few steps.",
      desc: "Only 3 steps separate you from your compensation.",
      steps: [
        { title: "First contact", desc: "Fill the form or call us for a free first review.", detail: "No upfront cost" },
        { title: "Case assessment", desc: "We analyze your documents and give clear feedback.", detail: "Within 24-48 hours" },
        { title: "Get compensation", desc: "We support you until completion.", detail: "Pay only on success" },
      ],
      cta: "Start Now from Step 1",
      note: "Free - No obligation - Fast response",
    },
    contact: {
      urgency: "Warning: limitation deadlines are expiring",
      title: "Do not wait until it is",
      accent: "too late.",
      desc: "Fill in the form now: it is completely free, with no obligation.",
      trust: ["No upfront payment", "Support in your language", "Lawyers and experts by your side"],
      social: "Already chosen by over 2,400 people",
      successTitle: "Request received!",
      successDesc: "We will contact you shortly. Consultation is free.",
      formTitle: "Request free assistance",
      formSubtitle: "Fill the form, we call you back.",
      labels: {
        name: "Full name",
        phone: "Phone number",
        language: "Which language do you speak?",
        caseType: "What happened to you?",
        privacy: "I accept terms and data processing under GDPR.",
      },
      placeholders: {
        name: "e.g. John Smith",
        phone: "+39 333 000 0000",
        language: "Select your language...",
        caseType: "Choose your case type...",
      },
      errors: { phone: "Phone number is required.", privacy: "You must accept terms and data processing." },
      loading: "Sending...",
      submit: "Request Free Assistance",
      languageOptions: ["Italian", "Arabic", "Romanian", "Albanian", "French", "English", "Other"],
      caseOptions: ["Work injury", "Medical error / hospital issue", "Road accident"],
    },
    footer: {
      tagline: "Legal support for everyone. No upfront fees.",
      links: ["Privacy Policy", "Cookie Policy", "Terms of Service", "Contact"],
      rights: "All rights reserved.",
      legal: "The service is provided in compliance with current legal regulations.",
      disclaimer: "Past results do not guarantee future outcomes.",
    },
    fab: { aria: "Go to contact form" },
  },
  fr: {} as any,
  ro: {} as any,
  sq: {} as any,
  ar: {} as any,
} satisfies Record<Locale, any>;

translations.fr = structuredClone(translations.en);
translations.ro = structuredClone(translations.en);
translations.sq = structuredClone(translations.en);
translations.ar = structuredClone(translations.en);

translations.fr.header = {
  bannerPrefix:
    "Attention: les delais de prescription approchent. Chaque jour d attente peut vous faire perdre votre droit a indemnisation.",
  bannerLink: "Verifiez maintenant - c est gratuit.",
  call: "Appelez-nous Gratuitement",
  sections: ["Accueil", "Pourquoi nous", "Services", "Comment ca marche", "Contact"],
};
translations.fr.hero = {
  pills: ["Aucun acompte", "Payez seulement si gagne", "Dans votre langue"],
  title: "Vous avez subi un dommage ?",
  subtitle: "Obtenez votre indemnisation.",
  line: "Nous vous assistons sans risque.",
  cta: "Verifiez votre dossier gratuitement",
  catTitle: "Que s est-il passe ?",
  categories: [
    ["Accident du travail", "Sur chantier, au bureau ou en trajet"],
    ["Erreur medicale", "Consultation, intervention ou diagnostic"],
    ["Accident de la route", "Voiture, moto, velo ou pieton"],
  ],
};
translations.fr.features.title = "Pourquoi nous choisir";
translations.fr.features.desc = "Service clair, sans frais initiaux et assistance dans votre langue.";
translations.fr.features.items = [
  ["Aucun acompte", "Nous couvrons les frais pendant le dossier."],
  ["Payez si vous gagnez", "Si vous n obtenez rien, vous ne payez rien."],
  ["Nous parlons votre langue", "Assistance continue et claire."],
];
translations.fr.features.cta1 = "Verification Gratuite";
translations.fr.features.cta2 = "de Votre Dossier";
translations.fr.services = {
  title: "Nos services",
  desc: "Trois domaines, un seul objectif: l indemnisation que vous meritez.",
  cards: [
    {
      tag: "Accidents du Travail",
      title: "Accidents du Travail ou de Trajet",
      body: "Nous evaluons votre dossier et preparons correctement la demande.",
      bullets: [
        "Accidents sur chantier ou en usine",
        "Accidents pendant le trajet domicile-travail",
        "Maladies professionnelles",
      ],
    },
    {
      tag: "Negligence Medicale",
      title: "Erreurs Medicales et Negligence",
      body: "Nous analysons les documents et verifions les responsabilites.",
      bullets: [
        "Interventions chirurgicales ratees",
        "Diagnostics errones ou tardifs",
        "Complications post-operatoires evitables",
      ],
    },
    {
      tag: "Accidents Routiers",
      title: "Accidents Routiers Graves",
      body: "Nous vous accompagnons a chaque etape de la demande d indemnisation.",
      bullets: [
        "Blessures graves de passagers et pietons",
        "Dommages au vehicule et aux biens",
        "Invalidite temporaire ou permanente",
      ],
    },
  ],
  cta: "Verifiez votre dossier gratuitement",
};
translations.fr.how = {
  title: "Obtenir une indemnisation",
  accent: "demande quelques etapes.",
  desc: "3 etapes seulement vous separent de votre indemnisation.",
  steps: [
    {
      title: "Premier contact",
      desc: "Remplissez le formulaire ou appelez-nous pour une premiere evaluation gratuite.",
      detail: "Aucun frais initial",
    },
    {
      title: "Evaluation du dossier",
      desc: "Nous analysons vos documents et vous donnons un retour clair.",
      detail: "Evaluation sous 24-48 heures",
    },
    {
      title: "Recevez l indemnisation",
      desc: "Nous vous accompagnons jusqu a la conclusion.",
      detail: "Paiement uniquement en cas de succes",
    },
  ],
  cta: "Commencez Maintenant a l Etape 1",
  note: "Gratuit - Sans engagement - Reponse rapide",
};
translations.fr.contact.formTitle = "Demandez une assistance gratuite";
translations.fr.contact.formSubtitle = "Remplissez le formulaire, nous vous rappelons.";
translations.fr.contact.submit = "Demander une Assistance Gratuite";
translations.fr.contact.urgency = "Attention: les delais de prescription expirent";
translations.fr.contact.title = "N attendez pas qu il soit";
translations.fr.contact.accent = "trop tard.";
translations.fr.contact.desc = "Remplissez le formulaire maintenant: c est completement gratuit, sans engagement.";
translations.fr.contact.trust = [
  "Aucune avance requise",
  "Assistance dans votre langue",
  "Avocats et experts a vos cotes",
];
translations.fr.contact.social = "Deja choisi par plus de 2 400 personnes";
translations.fr.contact.successTitle = "Demande recue!";
translations.fr.contact.successDesc = "Nous vous contacterons rapidement. La consultation est gratuite.";
translations.fr.contact.labels = {
  name: "Nom et Prenom",
  phone: "Numero de Telephone",
  language: "Quelle langue parlez-vous?",
  caseType: "Que s est-il passe?",
  privacy: "J accepte les conditions et le traitement des donnees conformement au RGPD.",
};
translations.fr.contact.placeholders = {
  name: "Ex. Jean Dupont",
  phone: "+39 333 000 0000",
  language: "Selectionnez votre langue...",
  caseType: "Choisissez le type de dossier...",
};
translations.fr.contact.errors = {
  phone: "Le numero de telephone est obligatoire.",
  privacy: "Vous devez accepter les conditions et le traitement des donnees.",
};
translations.fr.contact.loading = "Envoi en cours...";
translations.fr.contact.languageOptions = ["Italien", "Arabe", "Roumain", "Albanais", "Francais", "Anglais", "Autre"];
translations.fr.contact.caseOptions = ["Accident du Travail", "Probleme Hospitalier / Erreur Medicale", "Accident Routier"];
translations.fr.footer = {
  tagline: "Assistance juridique pour tous. Aucun acompte.",
  links: ["Politique de Confidentialite", "Politique des Cookies", "Conditions de Service", "Contact"],
  rights: "Tous droits reserves.",
  legal: "Le service est fourni conformement aux regles juridiques en vigueur.",
  disclaimer: "Les resultats passes ne garantissent pas les resultats futurs.",
};
translations.fr.fab = { aria: "Aller au formulaire de contact" };

translations.ro.header = {
  bannerPrefix:
    "Atentie: termenele de prescriptie se apropie. Fiecare zi de asteptare iti poate pierde dreptul la despagubire.",
  bannerLink: "Verifica acum - este gratuit.",
  call: "Suna-ne Gratuit",
  sections: ["Acasa", "De ce noi", "Servicii", "Cum functioneaza", "Contact"],
};
translations.ro.hero = {
  pills: ["Fara avans", "Platesti doar daca castigi", "In limba ta"],
  title: "Ai suferit un prejudiciu?",
  subtitle: "Obtine despagubirea ta.",
  line: "Te asistam fara risc.",
  cta: "Verifica gratuit cazul tau",
  catTitle: "Ce ti s-a intamplat?",
  categories: [
    ["Accident de munca", "Pe santier, la birou sau in drum"],
    ["Eroare medicala", "Consult, operatie sau diagnostic"],
    ["Accident rutier", "Masina, moto, bicicleta sau pieton"],
  ],
};
translations.ro.features.title = "De ce sa ne alegi";
translations.ro.features.desc = "Serviciu clar, fara costuri initiale si suport in limba ta.";
translations.ro.features.items = [
  ["Fara Avans", "Acoperim costurile pe durata cazului."],
  ["Platesti doar daca castigi", "Daca nu obtii nimic, nu platesti nimic."],
  ["Vorbim limba ta", "Asistenta continua si explicatii clare."],
];
translations.ro.features.cta1 = "Verificare Gratuita";
translations.ro.features.cta2 = "a Cazului";
translations.ro.services = {
  title: "Serviciile noastre",
  desc: "Trei domenii, un singur obiectiv: despagubirea care ti se cuvine.",
  cards: [
    {
      tag: "Accidente de Munca",
      title: "Accidente de Munca sau in Drum",
      body: "Evaluam cazul si pregatim corect cererea.",
      bullets: [
        "Accidente pe santier sau in fabrica",
        "Accidente in drumul casa-serviciu",
        "Boli profesionale",
      ],
    },
    {
      tag: "Malpraxis Medical",
      title: "Erori Medicale si Malpraxis",
      body: "Analizam documentele si verificam raspunderile.",
      bullets: [
        "Interventii chirurgicale esuate",
        "Diagnostic gresit sau intarziat",
        "Complicatii post-operatorii evitabile",
      ],
    },
    {
      tag: "Accidente Rutiere",
      title: "Accidente Rutiere Grave",
      body: "Te asistam in toate etapele cererii de despagubire.",
      bullets: [
        "Leziuni grave pentru pasageri si pietoni",
        "Daune la vehicul si bunuri",
        "Invaliditate temporara sau permanenta",
      ],
    },
  ],
  cta: "Verifica gratuit cazul tau",
};
translations.ro.how = {
  title: "Obtinerea despagubirii",
  accent: "se face in cativa pasi.",
  desc: "Doar 3 pasi te despart de despagubirea ta.",
  steps: [
    {
      title: "Primul contact",
      desc: "Completezi formularul sau ne suni pentru o evaluare gratuita.",
      detail: "Fara cost initial",
    },
    {
      title: "Evaluarea cazului",
      desc: "Analizam documentele si iti oferim un raspuns clar.",
      detail: "Evaluare in 24-48 de ore",
    },
    {
      title: "Primeste despagubirea",
      desc: "Te insotim pana la finalizarea dosarului.",
      detail: "Platesti doar la rezultat",
    },
  ],
  cta: "Incepe Acum de la Pasul 1",
  note: "Gratuit - Fara obligatii - Raspuns rapid",
};
translations.ro.contact.formTitle = "Solicita asistenta gratuita";
translations.ro.contact.formSubtitle = "Completeaza formularul si te sunam noi.";
translations.ro.contact.submit = "Solicita Asistenta Gratuita";
translations.ro.contact.urgency = "Atentie: termenele de prescriptie expira";
translations.ro.contact.title = "Nu astepta sa fie";
translations.ro.contact.accent = "prea tarziu.";
translations.ro.contact.desc = "Completeaza formularul acum: este complet gratuit, fara obligatii.";
translations.ro.contact.trust = [
  "Fara avans solicitat",
  "Asistenta in limba ta",
  "Avocati si experti alaturi de tine",
];
translations.ro.contact.social = "Deja ales de peste 2.400 de persoane";
translations.ro.contact.successTitle = "Cerere primita!";
translations.ro.contact.successDesc = "Te contactam cat mai curand. Consultatia este gratuita.";
translations.ro.contact.labels = {
  name: "Nume si Prenume",
  phone: "Numar de Telefon",
  language: "Ce limba vorbesti?",
  caseType: "Ce ti s-a intamplat?",
  privacy: "Accept termenii si prelucrarea datelor conform GDPR.",
};
translations.ro.contact.placeholders = {
  name: "Ex. Ion Popescu",
  phone: "+39 333 000 0000",
  language: "Selecteaza limba ta...",
  caseType: "Alege tipul de caz...",
};
translations.ro.contact.errors = {
  phone: "Numarul de telefon este obligatoriu.",
  privacy: "Trebuie sa accepti termenii si prelucrarea datelor.",
};
translations.ro.contact.loading = "Se trimite...";
translations.ro.contact.languageOptions = ["Italiana", "Araba", "Romana", "Albaneza", "Franceza", "Engleza", "Alta"];
translations.ro.contact.caseOptions = ["Accident de Munca", "Problema in Spital / Eroare Medicala", "Accident Rutier"];
translations.ro.footer = {
  tagline: "Asistenta legala pentru toti. Fara avans.",
  links: ["Politica de Confidentialitate", "Politica Cookie", "Termeni de Serviciu", "Contact"],
  rights: "Toate drepturile rezervate.",
  legal: "Serviciul este furnizat in conformitate cu normele legale in vigoare.",
  disclaimer: "Rezultatele anterioare nu garanteaza rezultate viitoare.",
};
translations.ro.fab = { aria: "Mergi la formularul de contact" };

translations.sq.header = {
  bannerPrefix:
    "Kujdes: afatet e parashkrimit po afrohen. Cdo dite pritje mund te humbase te drejten per demshperblim.",
  bannerLink: "Verifiko tani - eshte falas.",
  call: "Na telefono Falas",
  sections: ["Kryefaqja", "Pse ne", "Sherbimet", "Si funksionon", "Kontakt"],
};
translations.sq.hero = {
  pills: ["Pa parapagese", "Paguan vetem nese fiton", "Ne gjuhen tende"],
  title: "Ke pesuar dem?",
  subtitle: "Merr demshperblimin tend.",
  line: "Te ndihmojme pa rrezik.",
  cta: "Verifiko rastin falas",
  catTitle: "Cfare te ka ndodhur?",
  categories: [
    ["Aksident ne pune", "Ne kantier, zyre ose gjate udhetimit"],
    ["Gabim mjekesor", "Vizite, nderhyrje ose diagnoze"],
    ["Aksident rrugor", "Makine, motor, biciklete ose kembesor"],
  ],
};
translations.sq.features.title = "Pse te na zgjidhni";
translations.sq.features.desc = "Sherbim i qarte, pa kosto fillestare dhe mbeshtetje ne gjuhen tende.";
translations.sq.features.items = [
  ["Pa Parapagese", "Ne mbulojme shpenzimet gjate ceshtjes."],
  ["Paguan vetem nese fiton", "Nese nuk merr asgje, nuk paguan asgje."],
  ["Flasim gjuhen tende", "Mbeshtetje e vazhdueshme dhe e qarte."],
];
translations.sq.features.cta1 = "Verifikim Falas";
translations.sq.features.cta2 = "i Rastit";
translations.sq.services = {
  title: "Sherbimet tona",
  desc: "Tre fusha, nje objektiv: demshperblimi qe meriton.",
  cards: [
    {
      tag: "Aksidente Pune",
      title: "Aksidente ne Pune ose gjate Udhetimit",
      body: "Vleresojme rastin dhe pergatisim sakte kerkesen.",
      bullets: [
        "Aksidente ne kantier ose fabrike",
        "Aksidente ne rrugen shtepi-pune",
        "Semundje profesionale",
      ],
    },
    {
      tag: "Gabime Mjekesore",
      title: "Gabime Mjekesore dhe Neglizhence",
      body: "Analizojme dokumentet dhe verifikojme pergjegjesite.",
      bullets: [
        "Nderhyrje kirurgjikale te pasuksesshme",
        "Diagnoze e gabuar ose e vonuar",
        "Komplikime post-operatori te shmangshme",
      ],
    },
    {
      tag: "Aksidente Rrugore",
      title: "Aksidente Rrugore te Renda",
      body: "Te ndjekim ne cdo hap te kerkeses per demshperblim.",
      bullets: [
        "Demtime te renda per pasagjere dhe kembesore",
        "Deme ne automjet dhe sende",
        "Invaliditet i perkohshem ose i perhershem",
      ],
    },
  ],
  cta: "Verifiko rastin falas",
};
translations.sq.how = {
  title: "Marrja e demshperblimit",
  accent: "kerkon pak hapa.",
  desc: "Vetem 3 hapa te ndajne nga demshperblimi yt.",
  steps: [
    {
      title: "Kontakti i pare",
      desc: "Ploteso formularin ose na telefono per vleresim falas.",
      detail: "Pa kosto fillestare",
    },
    {
      title: "Vleresojme rastin",
      desc: "Analizojme dokumentet dhe te japim pergjigje te qarte.",
      detail: "Vleresim brenda 24-48 oreve",
    },
    {
      title: "Merr demshperblimin",
      desc: "Te ndjekim deri ne perfundim te ceshtjes.",
      detail: "Paguan vetem me rezultat",
    },
  ],
  cta: "Fillo Tani nga Hapi 1",
  note: "Falas - Pa detyrim - Pergjigje e shpejte",
};
translations.sq.contact.formTitle = "Kerko asistence falas";
translations.sq.contact.formSubtitle = "Ploteso formularin, te telefonojme ne.";
translations.sq.contact.submit = "Kerko Asistence Falas";
translations.sq.contact.urgency = "Kujdes: afatet e parashkrimit po skadojne";
translations.sq.contact.title = "Mos prit derisa te behet";
translations.sq.contact.accent = "shume vone.";
translations.sq.contact.desc = "Ploteso formularin tani: eshte plotesisht falas, pa detyrime.";
translations.sq.contact.trust = [
  "Asnje parapagese e kerkuar",
  "Asistence ne gjuhen tende",
  "Avokate dhe eksperte ne krahun tend",
];
translations.sq.contact.social = "Zgjedhur tashme nga mbi 2.400 persona";
translations.sq.contact.successTitle = "Kerkesa u mor!";
translations.sq.contact.successDesc = "Do te te kontaktojme sa me shpejt. Konsulta eshte falas.";
translations.sq.contact.labels = {
  name: "Emri dhe Mbiemri",
  phone: "Numri i Telefonit",
  language: "Cilen gjuhe flet?",
  caseType: "Cfare te ka ndodhur?",
  privacy: "Pranoj kushtet dhe perpunimin e te dhenave sipas GDPR.",
};
translations.sq.contact.placeholders = {
  name: "P.sh. Mario Rossi",
  phone: "+39 333 000 0000",
  language: "Zgjidh gjuhen tende...",
  caseType: "Zgjidh llojin e rastit...",
};
translations.sq.contact.errors = {
  phone: "Numri i telefonit eshte i detyrueshem.",
  privacy: "Duhet te pranosh kushtet dhe perpunimin e te dhenave.",
};
translations.sq.contact.loading = "Duke derguar...";
translations.sq.contact.languageOptions = ["Italisht", "Arabisht", "Rumanisht", "Shqip", "Frengjisht", "Anglisht", "Tjeter"];
translations.sq.contact.caseOptions = ["Aksident ne Pune", "Problem ne Spital / Gabim Mjekesor", "Aksident Rrugor"];
translations.sq.footer = {
  tagline: "Asistence ligjore per te gjithe. Pa parapagese.",
  links: ["Politika e Privatesise", "Politika e Cookies", "Kushtet e Sherbimit", "Kontakt"],
  rights: "Te gjitha te drejtat e rezervuara.",
  legal: "Sherbimi ofrohet ne perputhje me rregullat ligjore ne fuqi.",
  disclaimer: "Rezultatet e kaluara nuk garantojne rezultate te ardhshme.",
};
translations.sq.fab = { aria: "Shko te formulari i kontaktit" };

translations.ar.header = {
  bannerPrefix:
    "تحذير: مهل التقادم تقترب. كل يوم انتظار قد يفقدك حقك في التعويض.",
  bannerLink: "تحقق الان - مجانا.",
  call: "اتصل بنا مجانا",
  sections: ["الرئيسية", "لماذا نحن", "الخدمات", "كيف يعمل", "اتصل"],
};
translations.ar.hero = {
  pills: ["بدون دفعة مقدمة", "ادفع فقط عند الفوز", "بلغتك"],
  title: "هل تعرضت لضرر؟",
  subtitle: "احصل على تعويضك.",
  line: "نساعدك بدون مخاطر.",
  cta: "تحقق من حالتك مجانا",
  catTitle: "ماذا حدث لك؟",
  categories: [
    ["اصابة عمل", "في موقع العمل او المكتب او الطريق"],
    ["خطا طبي", "فحص او جراحة او تشخيص"],
    ["حادث مروري", "سيارة او دراجة او مشاة"],
  ],
};
translations.ar.features.title = "لماذا تختارنا";
translations.ar.features.desc = "خدمة واضحة بدون تكاليف مسبقة ودعم بلغتك.";
translations.ar.features.items = [
  ["بدون دفعة مقدمة", "نغطي التكاليف خلال متابعة الملف."],
  ["ادفع فقط عند الفوز", "اذا لم تحصل على شيء فلن تدفع شيئا."],
  ["نتحدث لغتك", "دعم مستمر وواضح."],
];
translations.ar.features.cta1 = "تحقق مجانا";
translations.ar.features.cta2 = "من حالتك";
translations.ar.services = {
  title: "خدماتنا",
  desc: "ثلاثة مجالات وهدف واحد: التعويض الذي تستحقه.",
  cards: [
    {
      tag: "اصابات العمل",
      title: "اصابات العمل او اثناء التنقل",
      body: "نقيم حالتك ونعد الطلب بشكل صحيح.",
      bullets: [
        "اصابات في الورش او المصانع",
        "حوادث في طريق المنزل والعمل",
        "امراض مهنية",
      ],
    },
    {
      tag: "اخطاء طبية",
      title: "اخطاء طبية واهمال",
      body: "نراجع المستندات ونتحقق من المسؤوليات.",
      bullets: [
        "عمليات جراحية فاشلة",
        "تشخيص خاطئ او متاخر",
        "مضاعفات بعد الجراحة كان يمكن تفاديها",
      ],
    },
    {
      tag: "حوادث المرور",
      title: "حوادث مرور خطيرة",
      body: "نرافقك في كل مراحل طلب التعويض.",
      bullets: [
        "اصابات خطيرة للركاب والمشاة",
        "اضرار بالمركبة والممتلكات",
        "عجز مؤقت او دائم",
      ],
    },
  ],
  cta: "تحقق من حالتك مجانا",
};
translations.ar.how = {
  title: "الحصول على التعويض",
  accent: "يحتاج خطوات قليلة.",
  desc: "ثلاث خطوات فقط تفصلك عن التعويض.",
  steps: [
    {
      title: "التواصل الاول",
      desc: "املأ النموذج او اتصل بنا لتقييم اولي مجاني.",
      detail: "بدون تكلفة اولية",
    },
    {
      title: "تقييم الحالة",
      desc: "نحلل مستنداتك ونقدم لك ردا واضحا.",
      detail: "تقييم خلال 24-48 ساعة",
    },
    {
      title: "استلام التعويض",
      desc: "نرافقك حتى نهاية الاجراءات.",
      detail: "الدفع فقط عند النجاح",
    },
  ],
  cta: "ابدأ الان من الخطوة 1",
  note: "مجاني - بدون التزام - رد سريع",
};
translations.ar.contact.formTitle = "اطلب مساعدة مجانية";
translations.ar.contact.formSubtitle = "املأ النموذج وسنتصل بك.";
translations.ar.contact.submit = "اطلب مساعدة مجانية";
translations.ar.contact.urgency = "تحذير: مهل التقادم تنتهي";
translations.ar.contact.title = "لا تنتظر حتى يصبح";
translations.ar.contact.accent = "الاوان متاخرا.";
translations.ar.contact.desc = "املأ النموذج الان: الخدمة مجانية بالكامل وبدون التزام.";
translations.ar.contact.trust = [
  "لا توجد دفعة مقدمة",
  "دعم بلغتك",
  "محامون وخبراء الى جانبك",
];
translations.ar.contact.social = "تم اختياره بالفعل من قبل اكثر من 2400 شخص";
translations.ar.contact.successTitle = "تم استلام الطلب!";
translations.ar.contact.successDesc = "سنتواصل معك قريبا. الاستشارة مجانية.";
translations.ar.contact.labels = {
  name: "الاسم الكامل",
  phone: "رقم الهاتف",
  language: "ما اللغة التي تتحدثها؟",
  caseType: "ماذا حدث لك؟",
  privacy: "اوافق على الشروط ومعالجة البيانات وفقا لـ GDPR.",
};
translations.ar.contact.placeholders = {
  name: "مثال: ماريو روسي",
  phone: "+39 333 000 0000",
  language: "اختر لغتك...",
  caseType: "اختر نوع الحالة...",
};
translations.ar.contact.errors = {
  phone: "رقم الهاتف مطلوب.",
  privacy: "يجب قبول الشروط ومعالجة البيانات.",
};
translations.ar.contact.loading = "جار الارسال...";
translations.ar.contact.languageOptions = ["الايطالية", "العربية", "الرومانية", "الالبانية", "الفرنسية", "الانجليزية", "اخرى"];
translations.ar.contact.caseOptions = ["اصابة عمل", "مشكلة في المستشفى / خطا طبي", "حادث مروري"];
translations.ar.footer = {
  tagline: "دعم قانوني للجميع. بدون دفعة مقدمة.",
  links: ["سياسة الخصوصية", "سياسة ملفات الارتباط", "شروط الخدمة", "اتصل بنا"],
  rights: "جميع الحقوق محفوظة.",
  legal: "يتم تقديم الخدمة وفقا للقوانين واللوائح السارية.",
  disclaimer: "النتائج السابقة لا تضمن النتائج المستقبلية.",
};
translations.ar.fab = { aria: "اذهب الى نموذج التواصل" };

translations.fr.hero.categories.push(["Sinistre mortel", "Indemnisation pour les familles"]);
translations.ro.hero.categories.push(["Accident mortal", "Despagubire pentru familii"]);
translations.sq.hero.categories.push(["Aksident vdekjeprures", "Demshperblim per familjet"]);
translations.ar.hero.categories.push(["حادث مميت", "تعويض للعائلات"]);

translations.fr.services.cards.push({
  tag: "Sinistres Mortels",
  title: "Perte d un Proche: l Indemnisation pour les Familles",
  body: "Lorsqu un accident ou une negligence medicale provoque le deces d un proche, la famille a droit a une indemnisation. Nous gerons tout le dossier avec discretion et respect, sans aucun acompte.",
  bullets: [
    "Deces suite a un accident de la route ou du travail",
    "Deces pour erreur medicale ou negligence sanitaire",
    "Prejudice de perte du lien familial (conjoint, enfants, parents)",
  ],
});
translations.ro.services.cards.push({
  tag: "Accidente Mortale",
  title: "Pierderea unui Membru al Familiei: Despagubirea pentru Familii",
  body: "Cand un accident sau o eroare medicala a provocat decesul unei persoane dragi, familia are dreptul la despagubire. Gestionam intreaga procedura cu discretie si respect, fara avans.",
  bullets: [
    "Deces din accident rutier sau de munca",
    "Deces din eroare medicala sau neglijenta sanitara",
    "Daune pentru pierderea relatiei familiale (sot/sotie, copii, parinti)",
  ],
});
translations.sq.services.cards.push({
  tag: "Aksidente Mortale",
  title: "Humbja e nje Familjari: Demshperblim per Familjet",
  body: "Kur nje aksident ose neglizhence mjekesore shkakton vdekjen e nje personi te dashur, familja ka te drejte per demshperblim. Ne menaxhojme te gjithe praktiken me diskrecion dhe respekt, pa parapagese.",
  bullets: [
    "Vdekje nga aksident rrugor ose ne pune",
    "Vdekje nga gabim mjekesor ose neglizhence shendetesore",
    "Dem per humbjen e marredhenies familjare (bashkeshort, femije, prinder)",
  ],
});
translations.ar.services.cards.push({
  tag: "حوادث مميتة",
  title: "فقدان فرد من العائلة: التعويض للعائلات",
  body: "عندما يتسبب حادث او خطا طبي في وفاة شخص عزيز، يحق للعائلة الحصول على تعويض. ندير الملف بالكامل بسرية واحترام وبدون اي دفعة مقدمة.",
  bullets: [
    "وفاة بسبب حادث مروري او حادث عمل",
    "وفاة بسبب خطا طبي او اهمال صحي",
    "تعويض عن فقدان العلاقة العائلية (زوج/زوجة، ابناء، والدان)",
  ],
});

