/* global */
// ============================================
// BQT Partners — Content (EN / DE)
// Voice: first person, factual, no selling.
// No dashes as punctuation. No formal address.
// ============================================

const CONTENT = {
  en: {
    common: {
      legal: "Impressum",
      copyright: "© 2026 BQT Partners GmbH",
      submit: "Send",
      back: "Back",
      sectionEst: "Baar · Est. 2025",
      brandLine1: "BQT",
      brandLine2Em: "Partners.",
      brandLine3: "",
    },

    nav: {
      services: "Services",
      approach: "Approach",
      record: "Track Record",
      profile: "What we look for",
      founder: "Who",
      inquire: "Contact",
      switchAdvisory: "Advisory",
      switchCapital: "SME Succession",
    },

    splash: {
      topBrandLine: "BQT Partners GmbH · Baar",
      bottomLeft: "Baar / Zürich",
      bottomCenter: "One owner · Two practices",
      bottomRight: "© 2026",
      advisory: {
        index: "I",
        titleA: "Advisory",
        titleB: "",
        desc: "M&A, financing, corporate development and restructuring. Direct, confidential, no detours.",
        cta: "Advisory",
      },
      capital: {
        index: "II",
        titleA: "SME Succession",
        titleB: "",
        desc: "We acquire Swiss SMEs with our own capital and run them for the long term. No fund, no exit pressure.",
        cta: "SME Succession",
      },
    },

    advisory: {
      eyebrow: "I · Advisory",
      heroTitleA: "Advisory",
      heroTitleB: "",
      heroStatement: "I advise on acquisitions, financing and the situations in between. Before this: more than ten years of transaction work at Credit Suisse, Partners Group and JC Holding. Since 2025 under my own name.",
      heroMeta: [
        { label: "Office", value: "Baar / Zürich" },
        { label: "Founded", value: "2025" },
        { label: "Phone", value: "+41 76 307 57 99" },
      ],

      approachNum: "01 · Services",
      approachTitleA: "What I",
      approachTitleB: "do.",
      approachIntro: [
        "No theatre, no jargon. Four things I have been doing for more than ten years, with common sense and clean craft.",
        "If a situation does not fit, I say so in the first call. And if I know someone better suited, I share the name.",
      ],

      pillars: [
        {
          title: "M&A",
          sub: "Buyside",
          body: "Acquisitions from search to signature. Screening, valuation, due diligence, negotiation.",
          points: [
            "Target search and approach",
            "Valuation and offer structure",
            "Due diligence coordination",
            "Negotiation through closing",
          ],
        },
        {
          title: "Financing",
          sub: "From senior debt to equity",
          body: "The structure that fits the business, and the lender willing to carry it.",
          points: [
            "Raising and refinancing",
            "Senior debt and WC financings",
            "Mezz and equity like instruments",
            "Trade credit insurance",
          ],
        },
        {
          title: "Corporate Development",
          sub: "Building · Development",
          body: "Building structures that hold: holdings, finance functions, investments.",
          points: [
            "Building finance functions",
            "Holdings and investments",
            "Financial planning and liquidity",
            "Ownership transitions",
          ],
        },
        {
          title: "Restructuring",
          sub: "Corporate · Financial",
          body: "Reorganisation where it is needed: operational, financial or at group level.",
          points: [
            "Liquidity and capital structure",
            "Renegotiating covenants",
            "Reorganising group structures",
            "Special situations",
          ],
        },
      ],

      transactionsNum: "02 · Track Record",
      transactionsTitleA: "What I have",
      transactionsTitleB: "worked on.",
      transactionsIntro: "A selection from more than ten years. Partly under my own name, partly as an employee of Credit Suisse, Partners Group and JC Holding.",
      transactions: [
        { type: "Financing", desc: "Trade credit insurance programme with an insured credit line of EUR 50m for an international retail group." },
        { type: "Investment", desc: "Acquisition of a significant minority stake in a listed European company, including a joint venture with its largest shareholder." },
        { type: "Building", desc: "Built a service company with a volume above EUR 70m for a European fashion retail group, including its finance function. Today more than 40 employees." },
        { type: "Special Situations", desc: "Acquisition of a UK restaurant chain with more than 80 locations through a debt for equity swap." },
        { type: "Restructuring", desc: "Sale of a GBP 145m mezzanine tranche of a UK coffee chain at par, in the midst of Covid-19." },
        { type: "Financing", desc: "Bridge financing for the USD 43bn takeover of a Swiss agrochemicals group." },
      ],

      founderNum: "03 · Who",
      founderTitleA: "The person",
      founderTitleB: "behind.",
      founderIntro: "",
      founderRole: "Owner",
      founderBio: [
        "I founded BQT in early 2025. Before that I spent four years at JC Holding, responsible for finance, M&A and investments. Earlier stations: Partners Group in London and Baar with a focus on leveraged loans, real estate and special situations, and Credit Suisse in Zurich in structured finance and credit risk. More than ten years of transaction work in total.",
        "I am married, father of two and enjoy sports.",
      ],

      inquireNum: "04 · Contact",
      inquireTitleA: "Let\u2019s",
      inquireTitleB: "talk.",
      inquireIntro: "",
      inquireHeading: "",
      inquireBlurb: "",
      inquireContacts: [
        { dt: "Mail", dd: "cyril.bouquet@bqtpartners.com" },
        { dt: "Phone", dd: "+41 76 307 57 99" },
        { dt: "Office", dd: "Jöchlerweg 4D, 6340 Baar" },
      ],
    },

    capital: {
      eyebrow: "II · KMU Nachfolge",
      heroTitleA: "Übernehmen.",
      heroTitleB: "Weiterführen.",
      heroStatement: "We acquire Swiss SMEs with our own capital and carry them forward for the long term. So that what has been built over decades carries on. No fund, no deadline, no forced exit.",
      heroMeta: [
        { label: "Capital", value: "Our own" },
        { label: "Horizon", value: "Open" },
        { label: "Focus", value: "Swiss SMEs" },
      ],

      approachNum: "01 · Approach",
      approachTitleA: "How we",
      approachTitleB: "go about it.",
      approachIntro: [
        "Not a search fund, not a private equity vehicle. Our own money, a small circle of co investors, and time.",
        "Three steps, deliberately kept simple.",
      ],

      pillars: [
        {
          title: "Find",
          sub: "Succession and handover",
          body: "We look for solid companies without a successor, or with an owner who wants to step back. In direct conversation or via intermediaries.",
          points: [
            "Succession situations in German speaking Switzerland",
            "Direct contact with owners",
            "Pointers from intermediaries welcome",
            "Discretion from the start",
          ],
        },
        {
          title: "Buy",
          sub: "Fair and uncomplicated",
          body: "A price that works for both sides, a structure that does not burden the company, and a handover at the seller's pace.",
          points: [
            "Valuation derived transparently",
            "No overstretched debt structures",
            "Transition period as agreed",
            "Clear commitments, clearly documented",
          ],
        },
        {
          title: "Develop",
          sub: "With respect for what has grown",
          body: "What a company has built over decades remains its foundation. We develop what is there: customers, employees, name. Profits are reinvested first, management holds a stake.",
          points: [
            "No fund, no deadline",
            "Reinvestment before distribution",
            "Equity participation for management",
            "Add ons where they make sense",
          ],
        },
      ],

      profileNum: "02 · What we look for",
      profileTitleA: "Sound",
      profileTitleB: "familiar?",
      profileIntro: "If a company roughly fits this grid, a message is worth it. If it does not fit, we say so quickly and honestly.",
      profile: [
        { dt: "Sector", dd: "Secondary. It gets interesting where a business holds a good niche or does something better than others" },
        { dt: "Revenue", dd: "CHF 3 to 30m" },
        { dt: "Region", dd: "German speaking Switzerland" },
        { dt: "Situation", dd: "Succession, partial sale, or growth with a partner" },
      ],

      leadersNum: "03 · Leadership",
      leadersTitleA: "Keen to run",
      leadersTitleB: "an SME?",
      leadersIntro: "We are not only looking for companies, but also for people who want to run one. The same goes for anyone running an SME today, in the first or second row, who sees a succession solution but lacks the capital and transaction experience: let's talk.",
      leaders: [
        { dt: "Role", dd: "Managing an acquired SME" },
        { dt: "Stake", dd: "Expected. Whoever runs it invests alongside, so incentives are aligned" },
        { dt: "Approach", dd: "An informal meeting. When something fits, the call comes" },
      ],

      founderNum: "04 · Who",
      founderTitleA: "Who is",
      founderTitleB: "buying.",
      founderIntro: "Behind BQT is me, with my own capital and a small circle of co investors I have known for a long time. Nobody I owe an exit to.",
      founderRole: "Owner",
      founderBio: [
        "I founded BQT in early 2025. I started out at Credit Suisse, lending to Swiss companies. At Partners Group I then executed acquisitions and financings and supported companies through difficult phases. Most recently I spent four years in retail, responsible for the finances, acquisitions and investments of a large retail group, helping to build its structures from the ground up.",
        "I am married, father of two and enjoy sports.",
      ],
      founderFacts: [
        { dt: "Languages", dd: "German · English" },
        { dt: "Office", dd: "Jöchlerweg 4D, 6340 Baar" },
      ],

      inquireNum: "05 · Contact",
      inquireTitleA: "Selling or",
      inquireTitleB: "handing over?",
      inquireIntro: "An informal message is enough. Confidentiality goes without saying. If it does not fit, the answer comes quickly, with reasons.",
      inquireHeading: "",
      inquireBlurb: "Pointers to companies that might fit are welcome too.",
      inquireContacts: [
        { dt: "Mail", dd: "cyril.bouquet@bqtpartners.com" },
        { dt: "Phone", dd: "+41 76 307 57 99" },
        { dt: "Office", dd: "Jöchlerweg 4D, 6340 Baar" },
      ],
    },

    founder: {
      name: "Cyril Bouquet",
      nameEm: "",
      logosLabel: "Background",
      facts: [
        { dt: "CFA", dd: "Charterholder since 2016" },
        { dt: "Languages", dd: "German · English" },
      ],
      caption: "Cyril Bouquet · Zürich",
    },

    footer: {
      practices: "Practices",
      office: "Office",
      contact: "Contact",
      officeLines: ["Jöchlerweg 4D", "6340 Baar, Switzerland", "+41 76 307 57 99"],
      practiceLinks: { advisory: "Advisory", capital: "SME Succession" },
      bottomMid: { advisory: "Advisory", capital: "SME Succession" },
    },

    form: {
      q01: "Name.",
      q01p: "First and last",
      q02: "Mail.",
      q02p: "name@firm.com",
      q03: "Company / context.",
      q03p: "Optional",
      advisory: {
        q04: "What is it about?",
        natures: ["Buyside M&A", "Financing", "Restructuring", "Corporate development", "Other"],
        q05: "The situation, briefly.",
        q05p: "Two sentences are enough.",
      },
      capital: {
        q04: "Revenue band.",
        revenues: ["< CHF 3m", "CHF 3 to 10m", "CHF 10 to 30m", "CHF 30m+"],
        q05: "The business, in your own words.",
        q05p: "What it does and what this is about.",
        q06: "Role.",
        roles: ["Owner", "Manager", "Intermediary", "Other"],
      },
      leaders: {
        q01: "Name.",
        q02: "Mail.",
        q03: "About you, briefly (optional).",
        q03p: "Background, what appeals, what is missing.",
        q04: "LinkedIn (optional).",
        q04p: "linkedin.com/in/…",
      },
      disclaimer: "",
      successHead: "Received.",
      successBody: "I will get back to you promptly.",
    },
  },

  // ============================================
  // DEUTSCH
  // ============================================
  de: {
    common: {
      legal: "Impressum",
      copyright: "© 2026 BQT Partners GmbH",
      submit: "Senden",
      back: "Zurück",
      sectionEst: "Baar · Gegr. 2025",
      brandLine1: "BQT",
      brandLine2Em: "Partners.",
      brandLine3: "",
    },

    nav: {
      services: "Leistungen",
      approach: "Vorgehen",
      record: "Track Record",
      profile: "Suchprofil",
      founder: "Person",
      inquire: "Kontakt",
      switchAdvisory: "Advisory",
      switchCapital: "KMU Nachfolge",
    },

    splash: {
      topBrandLine: "BQT Partners GmbH · Baar",
      bottomLeft: "Baar / Zürich",
      bottomCenter: "Ein Inhaber · Zwei Bereiche",
      bottomRight: "© 2026",
      advisory: {
        index: "I",
        titleA: "Advisory",
        titleB: "",
        desc: "M&A, Finanzierung, Corporate Development und Restrukturierung. Direkt, vertraulich und ohne Umwege.",
        cta: "Advisory",
      },
      capital: {
        index: "II",
        titleA: "KMU Nachfolge",
        titleB: "",
        desc: "Wir übernehmen Schweizer KMU mit eigenem Kapital. Damit weiterläuft, was über Jahrzehnte aufgebaut wurde.",
        cta: "KMU Nachfolge",
      },
    },

    advisory: {
      eyebrow: "I · Advisory",
      heroTitleA: "Advisory",
      heroTitleB: "",
      heroStatement: "Ich berate bei Zukäufen, Finanzierungen und den Situationen dazwischen. Davor: über zehn Jahre Transaktionsarbeit bei Credit Suisse, Partners Group und JC Holding. Seit 2025 unter eigenem Namen.",
      heroMeta: [
        { label: "Standort", value: "Baar / Zürich" },
        { label: "Gegründet", value: "2025" },
        { label: "Telefon", value: "+41 76 307 57 99" },
      ],

      approachNum: "01 · Leistungen",
      approachTitleA: "Was ich",
      approachTitleB: "mache.",
      approachIntro: [
        "Kein Theater, kein Jargon. Vier Dinge, die ich seit über zehn Jahren mache: mit gesundem Menschenverstand und sauberem Handwerk.",
        "Wenn eine Situation nicht passt, sage ich das im ersten Gespräch. Und wenn ich jemanden kenne, der besser passt, nenne ich den Namen.",
      ],

      pillars: [
        {
          title: "M&A",
          sub: "Buyside",
          body: "Zukäufe von der Suche bis zur Unterschrift. Screening, Bewertung, Due Diligence, Verhandlung.",
          points: [
            "Zielsuche und Ansprache",
            "Bewertung und Angebotsstruktur",
            "Koordination der Due Diligence",
            "Verhandlung bis zum Closing",
          ],
        },
        {
          title: "Finanzierung",
          sub: "Von Senior Debt bis Equity",
          body: "Die Struktur, die zum Geschäft passt, und der Geldgeber, der sie mitträgt.",
          points: [
            "Aufnahme und Refinanzierung",
            "Senior Debt und WC Finanzierungen",
            "Mezz und EK-nahe Instrumente",
            "Warenkreditversicherung",
          ],
        },
        {
          title: "Corporate Development",
          sub: "Aufbau · Weiterentwicklung",
          body: "Strukturen aufbauen, die tragen: Holdings, Finanzfunktionen, Beteiligungen.",
          points: [
            "Aufbau von Finanzfunktionen",
            "Holdings und Beteiligungen",
            "Finanzplanung und Liquidität",
            "Eigentümerwechsel",
          ],
        },
        {
          title: "Restrukturierung",
          sub: "Corporate · Finanzierung",
          body: "Neuordnung, wo sie nötig ist: operativ, finanziell oder auf Stufe der Gruppe.",
          points: [
            "Liquidität und Kapitalstruktur",
            "Neuverhandlung von Covenants",
            "Neuordnung von Gruppenstrukturen",
            "Sondersituationen",
          ],
        },
      ],

      transactionsNum: "02 · Track Record",
      transactionsTitleA: "Woran ich",
      transactionsTitleB: "gearbeitet habe.",
      transactionsIntro: "Eine Auswahl aus über zehn Jahren. Teils unter eigenem Namen, teils als Angestellter bei Credit Suisse, Partners Group und JC Holding.",
      transactions: [
        { type: "Finanzierung", desc: "Warenkreditversicherungsprogramm mit EUR 50 Mio. versicherter Kreditlinie für eine internationale Handelsgruppe." },
        { type: "Beteiligung", desc: "Erwerb einer signifikanten Minderheitsbeteiligung an einem börsennotierten europäischen Unternehmen, inklusive Joint Venture mit dessen grösstem Aktionär." },
        { type: "Aufbau", desc: "Aufbau einer Servicegesellschaft mit über EUR 70 Mio. Volumen für eine europäische Modehandelsgruppe, inklusive Finanzfunktion. Heute über 40 Mitarbeitende." },
        { type: "Special Situations", desc: "Übernahme einer britischen Restaurantkette mit über 80 Standorten im Rahmen eines Debt for Equity Swap." },
        { type: "Restrukturierung", desc: "Verkauf einer GBP 145 Mio. Mezzanine Tranche einer britischen Kaffeehauskette zu pari, inmitten der Covid-19 Zeit." },
        { type: "Finanzierung", desc: "Brückenfinanzierung für die USD 43 Mrd. Übernahme eines Schweizer Agrochemiekonzerns." },
      ],

      founderNum: "03 · Person",
      founderTitleA: "Wer",
      founderTitleB: "dahintersteht.",
      founderIntro: "",
      founderRole: "Inhaber",
      founderBio: [
        "Ich habe BQT Anfang 2025 gegründet. Davor war ich vier Jahre bei JC Holding zuständig für Finance, M&A und Investments. Frühere Stationen: Partners Group in London und Baar mit Fokus auf Leveraged Loans, Real Estate und Special Situations sowie Credit Suisse in Zürich im Structured Finance und Kreditrisiko. Zusammen über zehn Jahre Transaktionsarbeit.",
        "Ich bin verheiratet, Vater von zwei Kindern und habe Freude an Sport.",
      ],

      inquireNum: "04 · Kontakt",
      inquireTitleA: "Lass uns",
      inquireTitleB: "sprechen.",
      inquireIntro: "",
      inquireHeading: "",
      inquireBlurb: "",
      inquireContacts: [
        { dt: "Mail", dd: "cyril.bouquet@bqtpartners.com" },
        { dt: "Telefon", dd: "+41 76 307 57 99" },
        { dt: "Standort", dd: "Jöchlerweg 4D, 6340 Baar" },
      ],
    },

    capital: {
      eyebrow: "II · KMU Nachfolge",
      heroTitleA: "Übernehmen.",
      heroTitleB: "Weiterführen.",
      heroStatement: "Wir übernehmen Schweizer KMU mit eigenem Kapital und führen sie langfristig weiter.\nDamit weiterläuft, was über Jahrzehnte aufgebaut wurde.\nKein Fonds, keine Laufzeit, kein Exitzwang.",
      heroMeta: [
        { label: "Kapital", value: "Eigenes" },
        { label: "Horizont", value: "Offen" },
        { label: "Fokus", value: "Schweizer KMU" },
      ],

      approachNum: "01 · Vorgehen",
      approachTitleA: "So gehen wir",
      approachTitleB: "vor.",
      approachIntro: [
        "Kein Search Fund, kein Private Equity Vehikel. Eigenes Geld, ein kleiner Kreis von Mitinvestoren und Zeit.",
      ],

      pillars: [
        {
          title: "Finden",
          sub: "Nachfolge und Übergabe",
          body: "Wir suchen solide Unternehmen ohne Nachfolger, oder mit einem Eigentümer, der kürzertreten will. Im direkten Gespräch oder über Vermittler.",
          points: [
            "Nachfolgesituationen in der Deutschschweiz",
            "Direkter Kontakt mit Inhabern",
            "Hinweise von Vermittlern willkommen",
            "Diskretion von Anfang an",
          ],
        },
        {
          title: "Kaufen",
          sub: "Fair und unkompliziert",
          body: "Ein Preis, der für beide Seiten stimmt, eine Struktur, die das Unternehmen nicht belastet, und eine Übergabe im Tempo des Verkäufers.",
          points: [
            "Bewertung nachvollziehbar hergeleitet",
            "Keine überdrehten Verschuldungsstrukturen",
            "Übergangszeit nach Absprache",
            "Klare Zusagen, klar dokumentiert",
          ],
        },
        {
          title: "Weiterentwickeln",
          sub: "Mit Respekt vor dem Gewachsenen",
          body: "Was ein Unternehmen über Jahrzehnte aufgebaut hat, bleibt die Grundlage. Wir entwickeln weiter, was da ist: Kunden, Mitarbeitende, Name.",
          points: [
            "Kein Fonds, keine Laufzeit",
            "Reinvestition vor Ausschüttung",
            "Beteiligung für die Geschäftsführung",
            "Zukäufe, wo sie Sinn ergeben",
          ],
        },
      ],

      profileNum: "02 · Suchprofil",
      profileTitleA: "Klingt das",
      profileTitleB: "bekannt?",
      profileIntro: "Passt ein Unternehmen ungefähr in dieses Raster, lohnt sich eine Nachricht. Passt es nicht, sagen wir das schnell und ehrlich.",
      profile: [
        { dt: "Branche", dd: "Zweitrangig. Spannend ist, wer eine interessante Nische besetzt oder etwas besser kann als andere" },
        { dt: "Umsatz", dd: "CHF 3 bis 30 Mio." },
        { dt: "Region", dd: "Deutschschweiz" },
        { dt: "Situation", dd: "Nachfolge, Teilverkauf oder Wachstum mit einem Partner" },
      ],

      leadersNum: "03 · Führung",
      leadersTitleA: "Lust, ein KMU",
      leadersTitleB: "zu führen?",
      leadersIntro: "Wir suchen nicht nur Unternehmen, sondern auch Leute, die eines führen wollen. Das gilt auch für alle, die heute in erster oder zweiter Reihe ein KMU führen und eine Nachfolgelösung sehen, denen aber Kapital und Transaktionserfahrung fehlen: Lass uns sprechen.",
      leaders: [
        { dt: "Rolle", dd: "Geschäftsführung eines übernommenen KMU" },
        { dt: "Beteiligung", dd: "Wer führt, investiert mit" },
        { dt: "Vorgehen", dd: "Unverbindliches Kennenlernen. Wenn es passt, definieren wir gemeinsam die nächsten Schritte" },
      ],

      leadersFormTitle: "Hier melden.",
      leadersFormSub: "Name und Mail reichen. Vertraulich und unverbindlich.",

      founderNum: "04 · Person",
      founderTitleA: "Wer da",
      founderTitleB: "kauft.",
      founderIntro: "Hinter BQT stehe ich, mit eigenem Kapital und einem kleinen Kreis von Mitinvestoren, die ich seit Jahren kenne und zu denen ein enges Vertrauensverhältnis besteht.",
      founderRole: "Inhaber",
      founderBio: [
        "Ich habe BQT Anfang 2025 gegründet. Angefangen habe ich bei der Credit Suisse in der Kreditvergabe an Schweizer Unternehmen. Bei Partners Group habe ich danach Übernahmen und Finanzierungen umgesetzt und Unternehmen durch schwierige Phasen begleitet. Zuletzt war ich vier Jahre im Einzelhandel: Dort habe ich die Finanzen, Zukäufe und Beteiligungen einer grossen Handelsgruppe verantwortet und die Strukturen dafür von Grund auf mit aufgebaut.",
        "Ich bin verheiratet, Vater von zwei Kindern und habe Freude an Sport.",
      ],
      founderFacts: [
        { dt: "Sprachen", dd: "Deutsch · Englisch" },
        { dt: "Standort", dd: "Jöchlerweg 4D, 6340 Baar" },
      ],

      inquireNum: "05 · Kontakt",
      inquireTitleA: "Verkaufen oder",
      inquireTitleB: "übergeben?",
      inquireIntro: "Eine formlose Nachricht reicht. Vertraulichkeit ist selbstverständlich. Feedback kommt innert kurzer Frist.",
      inquireHeading: "",
      inquireBlurb: "Auch Hinweise auf Unternehmen, die passen könnten, sind willkommen.",
      inquireContacts: [
        { dt: "Mail", dd: "cyril.bouquet@bqtpartners.com" },
        { dt: "Telefon", dd: "+41 76 307 57 99" },
        { dt: "Standort", dd: "Jöchlerweg 4D, 6340 Baar" },
      ],
    },

    founder: {
      name: "Cyril Bouquet",
      nameEm: "",
      logosLabel: "Stationen",
      facts: [
        { dt: "CFA", dd: "Charterholder seit 2016" },
        { dt: "Sprachen", dd: "Deutsch · Englisch" },
      ],
      caption: "Cyril Bouquet · Zürich",
    },

    footer: {
      practices: "Bereiche",
      office: "Standort",
      contact: "Kontakt",
      officeLines: ["Jöchlerweg 4D", "6340 Baar, Schweiz", "+41 76 307 57 99"],
      practiceLinks: { advisory: "Advisory", capital: "KMU Nachfolge" },
      bottomMid: { advisory: "Advisory", capital: "KMU Nachfolge" },
    },

    form: {
      q01: "Name.",
      q01p: "Vorname Nachname",
      q02: "Mail.",
      q02p: "name@firma.ch",
      q03: "Unternehmen / Kontext.",
      q03p: "Optional",
      advisory: {
        q04: "Worum geht es?",
        natures: ["Buyside M&A", "Finanzierung", "Restrukturierung", "Corporate Development", "Anderes"],
        q05: "Die Situation, kurz.",
        q05p: "Zwei Sätze reichen.",
      },
      capital: {
        q04: "Umsatzgrösse.",
        revenues: ["< CHF 3 Mio.", "CHF 3 bis 10 Mio.", "CHF 10 bis 30 Mio.", "CHF 30 Mio.+"],
        q05: "Das Geschäft, in eigenen Worten.",
        q05p: "Was es tut und worum es geht.",
        q06: "Rolle.",
        roles: ["Inhaber", "Geschäftsführer", "Vermittler", "Anderes"],
      },
      leaders: {
        q01: "Name.",
        q02: "Mail.",
        q03: "Kurz zur Person (optional).",
        q03p: "Werdegang, was reizt, was fehlt.",
        q04: "LinkedIn (optional).",
        q04p: "linkedin.com/in/…",
      },
      disclaimer: "",
      successHead: "Angekommen.",
      successBody: "Ich melde mich umgehend.",
    },
  },
};

// Die KMU Nachfolge Detailseite ist bewusst nur auf Deutsch verfügbar
CONTENT.en.capital = CONTENT.de.capital;

window.CONTENT = CONTENT;
