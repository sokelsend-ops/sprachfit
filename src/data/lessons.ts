export interface Vocabulary {
  german: string;
  arabic: string;
  type?: 'verb' | 'noun' | 'adjective' | 'time' | 'other';
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  examples: { german: string; arabic: string }[];
}

export interface Lesson {
  id: number;
  title: string;
  arabicTitle: string;
  objectives: string[];
  vocabulary: Vocabulary[];
  grammar: GrammarPoint[];
  keySentences: { german: string; arabic: string }[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Was ist passiert?",
    arabicTitle: "ماذا حدث؟",
    objectives: [
      "الحديث عن أحداث وقعت في الماضي باستخدام (Perfekt)",
      "سرد تجربة شخصية",
      "الإجابة عن سؤال: ماذا حدث؟",
      "ذكر السبب باستخدام weil",
      "التعبير عن الملكية باستخدام s mit Genitiv"
    ],
    vocabulary: [
      { german: "passieren", arabic: "يحدث", type: "verb" },
      { german: "lernen", arabic: "يتعلم", type: "verb" },
      { german: "arbeiten", arabic: "يعمل", type: "verb" },
      { german: "reisen", arabic: "يسافر", type: "verb" },
      { german: "fahren", arabic: "يسافر / يقود", type: "verb" },
      { german: "umziehen", arabic: "ينتقل للسكن", type: "verb" },
      { german: "gestern", arabic: "أمس", type: "time" },
      { german: "letztes Jahr", arabic: "السنة الماضية", type: "time" },
      { german: "früher", arabic: "سابقاً", type: "time" }
    ],
    grammar: [
      {
        title: "Perfekt (الماضي)",
        explanation: "يتكون من haben / sein + Partizip II. نستخدم sein مع أفعال الحركة وتغير الحالة.",
        examples: [
          { german: "Ich habe Deutsch gelernt.", arabic: "لقد تعلمت الألمانية." },
          { german: "Ich bin nach Berlin gefahren.", arabic: "سافرت إلى برلين." }
        ]
      },
      {
        title: "weil (لأن)",
        explanation: "تبدأ جملة فرعية وينتقل الفعل المصرف إلى نهاية الجملة.",
        examples: [
          { german: "Ich bleibe zu Hause, weil ich krank bin.", arabic: "أبقى في المنزل لأنني مريض." }
        ]
      }
    ],
    keySentences: [
      { german: "Was ist passiert?", arabic: "ماذا حدث؟" },
      { german: "Ich habe viel gelernt.", arabic: "لقد درست كثيراً." },
      { german: "Das ist Julias Tasche.", arabic: "هذه حقيبة يوليا." }
    ]
  },
  {
    id: 2,
    title: "Schulzeit und Zukunft",
    arabicTitle: "الحياة المدرسية والمستقبل",
    objectives: [
      "يتحدث بالتفصيل عن حياته المدرسية في الماضي",
      "يستخدم Modalverben im Präteritum",
      "يعبر عن رأيه بطريقة متنوعة",
      "يقارن بين الدراسة والتدريب المهني"
    ],
    vocabulary: [
      { german: "die Schulzeit", arabic: "الحياة المدرسية", type: "noun" },
      { german: "die Grundschule", arabic: "المدرسة الابتدائية", type: "noun" },
      { german: "das Gymnasium", arabic: "الثانوية العامة", type: "noun" },
      { german: "die Prüfung", arabic: "الامتحان", type: "noun" },
      { german: "das Studium", arabic: "الدراسة الجامعية", type: "noun" },
      { german: "die Ausbildung", arabic: "التدريب المهني", type: "noun" }
    ],
    grammar: [
      {
        title: "Modalverben im Präteritum",
        explanation: "müssen -> musste, können -> konnte, dürfen -> durfte. الفعل الأساسي يأتي في نهاية الجملة بصيغة المصدر.",
        examples: [
          { german: "Ich musste viel lernen.", arabic: "كان علي أن أدرس كثيراً." },
          { german: "Ich durfte kein Handy benutzen.", arabic: "لم يكن مسموحاً لي استخدام الهاتف." }
        ]
      }
    ],
    keySentences: [
      { german: "Wie war deine Schulzeit?", arabic: "كيف كانت حياتك المدرسية؟" },
      { german: "Ich wollte Arzt werden.", arabic: "كنت أريد أن أصبح طبيباً." }
    ]
  },
  {
    id: 3,
    title: "Meinung und Medien",
    arabicTitle: "الرأي والوسائل الإعلامية",
    objectives: [
      "التعبير عن الرأي الشخصي بأساليب مختلفة",
      "استخدام dass مع ضبط ترتيب الفعل",
      "تكوين المقارنة (Komparativ) والتفضيل (Superlativ)"
    ],
    vocabulary: [
      { german: "interessant", arabic: "ممتع", type: "adjective" },
      { german: "langweilig", arabic: "ممل", type: "adjective" },
      { german: "spannend", arabic: "مشوق", type: "adjective" },
      { german: "der Film", arabic: "الفيلم", type: "noun" },
      { german: "die Musik", arabic: "الموسيقى", type: "noun" }
    ],
    grammar: [
      {
        title: "Nebensatz mit dass",
        explanation: "تستخدم بمعنى 'أن' ويأتي الفعل في نهاية الجملة الجانبية.",
        examples: [
          { german: "Ich finde, dass der Film interessant ist.", arabic: "أرى أن الفيلم ممتع." }
        ]
      },
      {
        title: "Komparativ & Superlativ",
        explanation: "المقارنة: Adjektiv + er (kleiner als). التفضيل: am + Adjektiv + sten (am kleinsten).",
        examples: [
          { german: "Der Laptop ist teurer als das Tablet.", arabic: "الحاسوب المحمول أغلى من التابلت." },
          { german: "Dieser Film ist am besten.", arabic: "هذا الفيلم هو الأفضل." }
        ]
      }
    ],
    keySentences: [
      { german: "Wie findest du den Film?", arabic: "كيف تجد الفيلم؟" },
      { german: "Meiner Meinung nach ist das Internet wichtig.", arabic: "في رأيي الإنترنت مهم." }
    ]
  },
  {
    id: 4,
    title: "Gefühle und Feste",
    arabicTitle: "المشاعر والمناسبات",
    objectives: [
      "الحديث عن المشاعر والمناسبات المختلفة",
      "استخدام الجملة الفرعية مع wenn",
      "تعلم الأفعال الانعكاسية (Reflexive Verben)"
    ],
    vocabulary: [
      { german: "glücklich", arabic: "سعيد", type: "adjective" },
      { german: "traurig", arabic: "حزين", type: "adjective" },
      { german: "nervös", arabic: "متوتر", type: "adjective" },
      { german: "die Hochzeit", arabic: "الزفاف", type: "noun" },
      { german: "das Geschenk", arabic: "الهدية", type: "noun" }
    ],
    grammar: [
      {
        title: "wenn (عندما / إذا)",
        explanation: "تستخدم للشرط أو التكرار. الفعل يذهب للنهاية.",
        examples: [
          { german: "Ich freue mich, wenn du kommst.", arabic: "أفرح عندما تأتي." }
        ]
      },
      {
        title: "Reflexive Verben",
        explanation: "أفعال يعود تأثيرها على الفاعل (sich freuen, sich ärgern).",
        examples: [
          { german: "Ich freue mich auf die Party.", arabic: "أتطلع إلى الحفلة." }
        ]
      }
    ],
    keySentences: [
      { german: "Herzlichen Glückwunsch!", arabic: "مبروك!" },
      { german: "Alles Gute zum Geburtstag!", arabic: "كل سنة وأنت طيب!" }
    ]
  },
  {
    id: 5,
    title: "Stadtleben & Termine",
    arabicTitle: "حياة المدينة والمواعيد",
    objectives: [
      "التعامل في المواقف اليومية (البنك، الدوائر الحكومية)",
      "استخدام Konjunktiv II للطلب المهذب",
      "تعلم نهايات الصفات بعد أداة التعريف"
    ],
    vocabulary: [
      { german: "die Bank", arabic: "البنك", type: "noun" },
      { german: "die Polizei", arabic: "الشرطة", type: "noun" },
      { german: "das Krankenhaus", arabic: "المستشفى", type: "noun" },
      { german: "der Termin", arabic: "الموعد", type: "noun" }
    ],
    grammar: [
      {
        title: "Konjunktiv II (könnte/könnten)",
        explanation: "يستخدم للطلب المهذب جداً.",
        examples: [
          { german: "Könnten Sie mir bitte helfen?", arabic: "هل يمكن لحضرتك مساعدتي من فضلك؟" }
        ]
      }
    ],
    keySentences: [
      { german: "Wo ist die nächste Bank?", arabic: "أين أقرب بنك؟" },
      { german: "Ich möchte ein Konto eröffnen.", arabic: "أريد فتح حساب." }
    ]
  },
  {
    id: 6,
    title: "Arbeitswelt & Kommunikation",
    arabicTitle: "عالم العمل والتواصل",
    objectives: [
      "الحديث عن المهن والعمل الحديث",
      "استخدام فعل werden للمستقبل وتغير الحالة",
      "تعلم نهايات الصفات بعد أداة النكرة"
    ],
    vocabulary: [
      { german: "der Beruf", arabic: "المهنة", type: "noun" },
      { german: "das Homeoffice", arabic: "العمل من المنزل", type: "noun" },
      { german: "erfolgreich", arabic: "ناجح", type: "adjective" }
    ],
    grammar: [
      {
        title: "werden",
        explanation: "يستخدم للتعبير عن التغير (يصبح) أو المستقبل (Futur I).",
        examples: [
          { german: "Ich werde Arzt.", arabic: "سأصبح طبيباً." },
          { german: "Nächstes Jahr werde ich im Ausland arbeiten.", arabic: "السنة القادمة سأعمل في الخارج." }
        ]
      }
    ],
    keySentences: [
      { german: "Was sind Sie von Beruf?", arabic: "ما مهنتك؟" },
      { german: "Ich arbeite in einer Firma.", arabic: "أعمل في شركة." }
    ]
  },
  {
    id: 7,
    title: "Unterwegs & Mobil",
    arabicTitle: "في الطريق والتنقل",
    objectives: [
      "الاستفسار عن المعلومات بطريقة مهذبة",
      "تكوين الأسئلة غير المباشرة",
      "وصف الطريق باستخدام حروف الجر"
    ],
    vocabulary: [
      { german: "der Stau", arabic: "ازدحام", type: "noun" },
      { german: "die Verspätung", arabic: "تأخير", type: "noun" },
      { german: "pünktlich", arabic: "في الموعد", type: "adjective" }
    ],
    grammar: [
      {
        title: "Indirekte Fragen",
        explanation: "تبدأ بـ ...Ich möchte wissen أو ...Können Sie mir sagen. الفعل يذهب للنهاية.",
        examples: [
          { german: "Ich möchte wissen, wann der Zug kommt.", arabic: "أرغب في معرفة متى يصل القطار." }
        ]
      }
    ],
    keySentences: [
      { german: "Geh bis zur Kreuzung und dann rechts.", arabic: "امشِ حتى التقاطع ثم يميناً." }
    ]
  },
  {
    id: 8,
    title: "Erfolgreich lernen",
    arabicTitle: "التعلم الناجح",
    objectives: [
      "الحديث عن مشكلات التعلم وضغط الامتحانات",
      "إعطاء النصائح باستخدام sollen",
      "تقديم عرض قصير منظم"
    ],
    vocabulary: [
      { german: "die Motivation", arabic: "الدافع", type: "noun" },
      { german: "sich konzentrieren", arabic: "يركز", type: "verb" },
      { german: "vergessen", arabic: "ينسى", type: "verb" }
    ],
    grammar: [
      {
        title: "sollen (ينبغي)",
        explanation: "يستخدم لإعطاء النصائح والاقتراحات.",
        examples: [
          { german: "Du solltest mehr schlafen.", arabic: "ينبغي أن تنام أكثر." }
        ]
      }
    ],
    keySentences: [
      { german: "Mein Thema ist Prüfungsstress.", arabic: "موضوعي هو ضغط الامتحانات." }
    ]
  },
  {
    id: 9,
    title: "Gemeinsam aktiv",
    arabicTitle: "نشطون معاً",
    objectives: [
      "الحديث عن الرياضة والنشاط اليومي",
      "ربط الجمل بـ deshalb و trotzdem",
      "الأفعال التي تأخذ مفعولين (Dativ & Akkusativ)"
    ],
    vocabulary: [
      { german: "joggen", arabic: "يجري", type: "verb" },
      { german: "schwimmen", arabic: "يسبح", type: "verb" },
      { german: "begeistert", arabic: "متحمس", type: "adjective" }
    ],
    grammar: [
      {
        title: "deshalb & trotzdem",
        explanation: "deshalb (لذلك) للنتيجة، trotzdem (بالرغم من ذلك) للتناقض. الفعل يأتي مباشرة بعدهما.",
        examples: [
          { german: "Ich war müde, deshalb bin ich früh ins Bett gegangen.", arabic: "كنت متعباً، لذلك ذهبت للنوم مبكراً." }
        ]
      }
    ],
    keySentences: [
      { german: "Wir könnten am Samstag einen Ausflug machen.", arabic: "يمكننا القيام برحلة يوم السبت." }
    ]
  },
  {
    id: 10,
    title: "Nachbarn & Alltag",
    arabicTitle: "الجيران والحياة اليومية",
    objectives: [
      "الحديث عن السكن والعيش مع الآخرين",
      "الفرق بين als و wenn في الماضي",
      "تعلم حروف الجر المتغيرة (Wechselpräpositionen)"
    ],
    vocabulary: [
      { german: "die WG", arabic: "شقة مشتركة", type: "noun" },
      { german: "der Nachbar", arabic: "الجار", type: "noun" },
      { german: "ruhig", arabic: "هادئ", type: "adjective" }
    ],
    grammar: [
      {
        title: "als vs wenn",
        explanation: "als لحدث وقع مرة واحدة في الماضي. wenn لحدث متكرر أو شرط.",
        examples: [
          { german: "Als ich klein war, hatte ich Angst vor Hunden.", arabic: "عندما كنت صغيراً، كنت أخاف من الكلاب." }
        ]
      }
    ],
    keySentences: [
      { german: "Könntest du heute den Müll rausbringen?", arabic: "هل يمكنك إخراج القمامة اليوم؟" }
    ]
  },
  {
    id: 11,
    title: "Zeit & Wünsche",
    arabicTitle: "الوقت والأمنيات",
    objectives: [
      "التعبير عن الأمنيات باستخدام Konjunktiv II",
      "تقديم النصائح بطريقة مهذبة",
      "استخدام الأفعال المرتبطة بحروف جر"
    ],
    vocabulary: [
      { german: "die Freizeit", arabic: "وقت الفراغ", type: "noun" },
      { german: "der Wunsch", arabic: "الأمنية", type: "noun" },
      { german: "gestresst", arabic: "متوتر", type: "adjective" }
    ],
    grammar: [
      {
        title: "Konjunktiv II (hätte/wäre/würde)",
        explanation: "للتعبير عن أمنية غير متحققة. hätte (للملكية)، wäre (للحالة)، würde (للأفعال).",
        examples: [
          { german: "Ich hätte gern mehr Zeit.", arabic: "أتمنى لو كان لدي وقت أكثر." },
          { german: "Ich wäre gern zu Hause.", arabic: "أتمنى لو كنت في المنزل." }
        ]
      }
    ],
    keySentences: [
      { german: "An deiner Stelle würde ich mit dem Chef sprechen.", arabic: "لو كنت مكانك لتحدثت مع المدير." }
    ]
  },
  {
    id: 12,
    title: "Gute Unterhaltung",
    arabicTitle: "وقت ممتع",
    objectives: [
      "الحديث عن الترفيه والموسيقى والمهرجانات",
      "استخدام الجمل الموصولة (Relativsätze)",
      "وصف الصور واللوحات"
    ],
    vocabulary: [
      { german: "das Festival", arabic: "المهرجان", type: "noun" },
      { german: "berühmt", arabic: "مشهور", type: "adjective" },
      { german: "die Stimmung", arabic: "الأجواء", type: "noun" }
    ],
    grammar: [
      {
        title: "Relativsätze",
        explanation: "جملة إضافية تعطي معلومات أكثر عن شخص أو شيء. الفعل يذهب للنهاية.",
        examples: [
          { german: "Der Mann, der mir hilft, ist nett.", arabic: "الرجل الذي يساعدني لطيف." }
        ]
      }
    ],
    keySentences: [
      { german: "Das Bild wirkt ruhig.", arabic: "اللوحة توحي بالهدوء." }
    ]
  }
];
