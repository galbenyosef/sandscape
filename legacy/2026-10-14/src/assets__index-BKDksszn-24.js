// assets__index-BKDksszn 24 — other
// Lines 7235-9078 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
var Us = {
    lessThanXSeconds: {
      one: `أقل من ثانية`,
      two: `أقل من ثانيتين`,
      threeToTen: `أقل من {{count}} ثواني`,
      other: `أقل من {{count}} ثانية`,
    },
    xSeconds: {
      one: `ثانية واحدة`,
      two: `ثانيتان`,
      threeToTen: `{{count}} ثواني`,
      other: `{{count}} ثانية`,
    },
    halfAMinute: `نصف دقيقة`,
    lessThanXMinutes: {
      one: `أقل من دقيقة`,
      two: `أقل من دقيقتين`,
      threeToTen: `أقل من {{count}} دقائق`,
      other: `أقل من {{count}} دقيقة`,
    },
    xMinutes: {
      one: `دقيقة واحدة`,
      two: `دقيقتان`,
      threeToTen: `{{count}} دقائق`,
      other: `{{count}} دقيقة`,
    },
    aboutXHours: {
      one: `ساعة واحدة تقريباً`,
      two: `ساعتين تقريبا`,
      threeToTen: `{{count}} ساعات تقريباً`,
      other: `{{count}} ساعة تقريباً`,
    },
    xHours: {
      one: `ساعة واحدة`,
      two: `ساعتان`,
      threeToTen: `{{count}} ساعات`,
      other: `{{count}} ساعة`,
    },
    xDays: {
      one: `يوم واحد`,
      two: `يومان`,
      threeToTen: `{{count}} أيام`,
      other: `{{count}} يوم`,
    },
    aboutXWeeks: {
      one: `أسبوع واحد تقريبا`,
      two: `أسبوعين تقريبا`,
      threeToTen: `{{count}} أسابيع تقريبا`,
      other: `{{count}} أسبوعا تقريبا`,
    },
    xWeeks: {
      one: `أسبوع واحد`,
      two: `أسبوعان`,
      threeToTen: `{{count}} أسابيع`,
      other: `{{count}} أسبوعا`,
    },
    aboutXMonths: {
      one: `شهر واحد تقريباً`,
      two: `شهرين تقريبا`,
      threeToTen: `{{count}} أشهر تقريبا`,
      other: `{{count}} شهرا تقريباً`,
    },
    xMonths: {
      one: `شهر واحد`,
      two: `شهران`,
      threeToTen: `{{count}} أشهر`,
      other: `{{count}} شهرا`,
    },
    aboutXYears: {
      one: `سنة واحدة تقريباً`,
      two: `سنتين تقريبا`,
      threeToTen: `{{count}} سنوات تقريباً`,
      other: `{{count}} سنة تقريباً`,
    },
    xYears: {
      one: `سنة واحد`,
      two: `سنتان`,
      threeToTen: `{{count}} سنوات`,
      other: `{{count}} سنة`,
    },
    overXYears: {
      one: `أكثر من سنة`,
      two: `أكثر من سنتين`,
      threeToTen: `أكثر من {{count}} سنوات`,
      other: `أكثر من {{count}} سنة`,
    },
    almostXYears: {
      one: `ما يقارب سنة واحدة`,
      two: `ما يقارب سنتين`,
      threeToTen: `ما يقارب {{count}} سنوات`,
      other: `ما يقارب {{count}} سنة`,
    },
  },
  Ws = (e, t, n) => {
    let r = Us[e],
      i;
    return (
      (i =
        typeof r == `string`
          ? r
          : t === 1
            ? r.one
            : t === 2
              ? r.two
              : t <= 10
                ? r.threeToTen.replace(`{{count}}`, String(t))
                : r.other.replace(`{{count}}`, String(t))),
      n?.addSuffix
        ? n.comparison && n.comparison > 0
          ? `خلال ` + i
          : `منذ ` + i
        : i
    );
  },
  Gs = {
    date: H({
      formats: {
        full: `EEEE، do MMMM y`,
        long: `do MMMM y`,
        medium: `d MMM y`,
        short: `dd/MM/yyyy`,
      },
      defaultWidth: `full`,
    }),
    time: H({
      formats: {
        full: `HH:mm:ss`,
        long: `HH:mm:ss`,
        medium: `HH:mm:ss`,
        short: `HH:mm`,
      },
      defaultWidth: `full`,
    }),
    dateTime: H({
      formats: {
        full: `{{date}} 'عند الساعة' {{time}}`,
        long: `{{date}} 'عند الساعة' {{time}}`,
        medium: `{{date}}, {{time}}`,
        short: `{{date}}, {{time}}`,
      },
      defaultWidth: `full`,
    }),
  },
  Ks = {
    lastWeek: `eeee 'الماضي عند الساعة' p`,
    yesterday: `'الأمس عند الساعة' p`,
    today: `'اليوم عند الساعة' p`,
    tomorrow: `'غدا عند الساعة' p`,
    nextWeek: `eeee 'القادم عند الساعة' p`,
    other: `P`,
  },
  qs = {
    code: `ar`,
    formatDistance: Ws,
    formatLong: Gs,
    formatRelative: (e) => Ks[e],
    localize: {
      ordinalNumber: (e) => String(e),
      era: B({
        values: {
          narrow: [`ق`, `ب`],
          abbreviated: [`ق.م.`, `ب.م.`],
          wide: [`قبل الميلاد`, `بعد الميلاد`],
        },
        defaultWidth: `wide`,
      }),
      quarter: B({
        values: {
          narrow: [`1`, `2`, `3`, `4`],
          abbreviated: [`ر1`, `ر2`, `ر3`, `ر4`],
          wide: [`الربع الأول`, `الربع الثاني`, `الربع الثالث`, `الربع الرابع`],
        },
        defaultWidth: `wide`,
        argumentCallback: (e) => e - 1,
      }),
      month: B({
        values: {
          narrow: [`ي`, `ف`, `م`, `أ`, `م`, `ي`, `ي`, `أ`, `س`, `أ`, `ن`, `د`],
          abbreviated: [
            `يناير`,
            `فبراير`,
            `مارس`,
            `أبريل`,
            `مايو`,
            `يونيو`,
            `يوليو`,
            `أغسطس`,
            `سبتمبر`,
            `أكتوبر`,
            `نوفمبر`,
            `ديسمبر`,
          ],
          wide: [
            `يناير`,
            `فبراير`,
            `مارس`,
            `أبريل`,
            `مايو`,
            `يونيو`,
            `يوليو`,
            `أغسطس`,
            `سبتمبر`,
            `أكتوبر`,
            `نوفمبر`,
            `ديسمبر`,
          ],
        },
        defaultWidth: `wide`,
      }),
      day: B({
        values: {
          narrow: [`ح`, `ن`, `ث`, `ر`, `خ`, `ج`, `س`],
          short: [`أحد`, `اثنين`, `ثلاثاء`, `أربعاء`, `خميس`, `جمعة`, `سبت`],
          abbreviated: [
            `أحد`,
            `اثنين`,
            `ثلاثاء`,
            `أربعاء`,
            `خميس`,
            `جمعة`,
            `سبت`,
          ],
          wide: [
            `الأحد`,
            `الاثنين`,
            `الثلاثاء`,
            `الأربعاء`,
            `الخميس`,
            `الجمعة`,
            `السبت`,
          ],
        },
        defaultWidth: `wide`,
      }),
      dayPeriod: B({
        values: {
          narrow: {
            am: `ص`,
            pm: `م`,
            morning: `الصباح`,
            noon: `الظهر`,
            afternoon: `بعد الظهر`,
            evening: `المساء`,
            night: `الليل`,
            midnight: `منتصف الليل`,
          },
          abbreviated: {
            am: `ص`,
            pm: `م`,
            morning: `الصباح`,
            noon: `الظهر`,
            afternoon: `بعد الظهر`,
            evening: `المساء`,
            night: `الليل`,
            midnight: `منتصف الليل`,
          },
          wide: {
            am: `ص`,
            pm: `م`,
            morning: `الصباح`,
            noon: `الظهر`,
            afternoon: `بعد الظهر`,
            evening: `المساء`,
            night: `الليل`,
            midnight: `منتصف الليل`,
          },
        },
        defaultWidth: `wide`,
        formattingValues: {
          narrow: {
            am: `ص`,
            pm: `م`,
            morning: `في الصباح`,
            noon: `الظهر`,
            afternoon: `بعد الظهر`,
            evening: `في المساء`,
            night: `في الليل`,
            midnight: `منتصف الليل`,
          },
          abbreviated: {
            am: `ص`,
            pm: `م`,
            morning: `في الصباح`,
            noon: `الظهر`,
            afternoon: `بعد الظهر`,
            evening: `في المساء`,
            night: `في الليل`,
            midnight: `منتصف الليل`,
          },
          wide: {
            am: `ص`,
            pm: `م`,
            morning: `في الصباح`,
            noon: `الظهر`,
            afternoon: `بعد الظهر`,
            evening: `في المساء`,
            night: `في الليل`,
            midnight: `منتصف الليل`,
          },
        },
        defaultFormattingWidth: `wide`,
      }),
    },
    match: {
      ordinalNumber: nt({
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: (e) => parseInt(e, 10),
      }),
      era: V({
        matchPatterns: {
          narrow: /[قب]/,
          abbreviated: /[قب]\.م\./,
          wide: /(قبل|بعد) الميلاد/,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/قبل/, /بعد/] },
        defaultParseWidth: `any`,
      }),
      quarter: V({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /ر[1234]/,
          wide: /الربع (الأول|الثاني|الثالث|الرابع)/,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: `any`,
        valueCallback: (e) => e + 1,
      }),
      month: V({
        matchPatterns: {
          narrow: /^[أيفمسند]/,
          abbreviated:
            /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
          wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [
            /^ي/i,
            /^ف/i,
            /^م/i,
            /^أ/i,
            /^م/i,
            /^ي/i,
            /^ي/i,
            /^أ/i,
            /^س/i,
            /^أ/i,
            /^ن/i,
            /^د/i,
          ],
          any: [
            /^يناير/i,
            /^فبراير/i,
            /^مارس/i,
            /^أبريل/i,
            /^مايو/i,
            /^يونيو/i,
            /^يوليو/i,
            /^أغسطس/i,
            /^سبتمبر/i,
            /^أكتوبر/i,
            /^نوفمبر/i,
            /^ديسمبر/i,
          ],
        },
        defaultParseWidth: `any`,
      }),
      day: V({
        matchPatterns: {
          narrow: /^[حنثرخجس]/i,
          short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
          abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
          wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
          wide: [
            /^الأحد/i,
            /^الاثنين/i,
            /^الثلاثاء/i,
            /^الأربعاء/i,
            /^الخميس/i,
            /^الجمعة/i,
            /^السبت/i,
          ],
          any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i],
        },
        defaultParseWidth: `any`,
      }),
      dayPeriod: V({
        matchPatterns: {
          narrow:
            /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
          any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
        },
        defaultMatchWidth: `any`,
        parsePatterns: {
          any: {
            am: /^ص/,
            pm: /^م/,
            midnight: /منتصف الليل/,
            noon: /الظهر/,
            afternoon: /بعد الظهر/,
            morning: /في الصباح/,
            evening: /في المساء/,
            night: /في الليل/,
          },
        },
        defaultParseWidth: `any`,
      }),
    },
    options: { weekStartsOn: 6, firstWeekContainsDate: 1 },
  },
  Js = {
    lessThanXSeconds: {
      standalone: {
        one: `weniger als 1 Sekunde`,
        other: `weniger als {{count}} Sekunden`,
      },
      withPreposition: {
        one: `weniger als 1 Sekunde`,
        other: `weniger als {{count}} Sekunden`,
      },
    },
    xSeconds: {
      standalone: { one: `1 Sekunde`, other: `{{count}} Sekunden` },
      withPreposition: { one: `1 Sekunde`, other: `{{count}} Sekunden` },
    },
    halfAMinute: {
      standalone: `eine halbe Minute`,
      withPreposition: `einer halben Minute`,
    },
    lessThanXMinutes: {
      standalone: {
        one: `weniger als 1 Minute`,
        other: `weniger als {{count}} Minuten`,
      },
      withPreposition: {
        one: `weniger als 1 Minute`,
        other: `weniger als {{count}} Minuten`,
      },
    },
    xMinutes: {
      standalone: { one: `1 Minute`, other: `{{count}} Minuten` },
      withPreposition: { one: `1 Minute`, other: `{{count}} Minuten` },
    },
    aboutXHours: {
      standalone: { one: `etwa 1 Stunde`, other: `etwa {{count}} Stunden` },
      withPreposition: {
        one: `etwa 1 Stunde`,
        other: `etwa {{count}} Stunden`,
      },
    },
    xHours: {
      standalone: { one: `1 Stunde`, other: `{{count}} Stunden` },
      withPreposition: { one: `1 Stunde`, other: `{{count}} Stunden` },
    },
    xDays: {
      standalone: { one: `1 Tag`, other: `{{count}} Tage` },
      withPreposition: { one: `1 Tag`, other: `{{count}} Tagen` },
    },
    aboutXWeeks: {
      standalone: { one: `etwa 1 Woche`, other: `etwa {{count}} Wochen` },
      withPreposition: { one: `etwa 1 Woche`, other: `etwa {{count}} Wochen` },
    },
    xWeeks: {
      standalone: { one: `1 Woche`, other: `{{count}} Wochen` },
      withPreposition: { one: `1 Woche`, other: `{{count}} Wochen` },
    },
    aboutXMonths: {
      standalone: { one: `etwa 1 Monat`, other: `etwa {{count}} Monate` },
      withPreposition: { one: `etwa 1 Monat`, other: `etwa {{count}} Monaten` },
    },
    xMonths: {
      standalone: { one: `1 Monat`, other: `{{count}} Monate` },
      withPreposition: { one: `1 Monat`, other: `{{count}} Monaten` },
    },
    aboutXYears: {
      standalone: { one: `etwa 1 Jahr`, other: `etwa {{count}} Jahre` },
      withPreposition: { one: `etwa 1 Jahr`, other: `etwa {{count}} Jahren` },
    },
    xYears: {
      standalone: { one: `1 Jahr`, other: `{{count}} Jahre` },
      withPreposition: { one: `1 Jahr`, other: `{{count}} Jahren` },
    },
    overXYears: {
      standalone: { one: `mehr als 1 Jahr`, other: `mehr als {{count}} Jahre` },
      withPreposition: {
        one: `mehr als 1 Jahr`,
        other: `mehr als {{count}} Jahren`,
      },
    },
    almostXYears: {
      standalone: { one: `fast 1 Jahr`, other: `fast {{count}} Jahre` },
      withPreposition: { one: `fast 1 Jahr`, other: `fast {{count}} Jahren` },
    },
  },
  Ys = (e, t, n) => {
    let r,
      i = n?.addSuffix ? Js[e].withPreposition : Js[e].standalone;
    return (
      (r =
        typeof i == `string`
          ? i
          : t === 1
            ? i.one
            : i.other.replace(`{{count}}`, String(t))),
      n?.addSuffix
        ? n.comparison && n.comparison > 0
          ? `in ` + r
          : `vor ` + r
        : r
    );
  },
  Xs = {
    date: H({
      formats: {
        full: `EEEE, do MMMM y`,
        long: `do MMMM y`,
        medium: `do MMM y`,
        short: `dd.MM.y`,
      },
      defaultWidth: `full`,
    }),
    time: H({
      formats: {
        full: `HH:mm:ss zzzz`,
        long: `HH:mm:ss z`,
        medium: `HH:mm:ss`,
        short: `HH:mm`,
      },
      defaultWidth: `full`,
    }),
    dateTime: H({
      formats: {
        full: `{{date}} 'um' {{time}}`,
        long: `{{date}} 'um' {{time}}`,
        medium: `{{date}} {{time}}`,
        short: `{{date}} {{time}}`,
      },
      defaultWidth: `full`,
    }),
  },
  Zs = {
    lastWeek: `'letzten' eeee 'um' p`,
    yesterday: `'gestern um' p`,
    today: `'heute um' p`,
    tomorrow: `'morgen um' p`,
    nextWeek: `eeee 'um' p`,
    other: `P`,
  },
  Qs = (e, t, n, r) => Zs[e],
  $s = {
    narrow: [`v.Chr.`, `n.Chr.`],
    abbreviated: [`v.Chr.`, `n.Chr.`],
    wide: [`vor Christus`, `nach Christus`],
  },
  ec = {
    narrow: [`1`, `2`, `3`, `4`],
    abbreviated: [`Q1`, `Q2`, `Q3`, `Q4`],
    wide: [`1. Quartal`, `2. Quartal`, `3. Quartal`, `4. Quartal`],
  },
  tc = {
    narrow: [`J`, `F`, `M`, `A`, `M`, `J`, `J`, `A`, `S`, `O`, `N`, `D`],
    abbreviated: [
      `Jan`,
      `Feb`,
      `Mär`,
      `Apr`,
      `Mai`,
      `Jun`,
      `Jul`,
      `Aug`,
      `Sep`,
      `Okt`,
      `Nov`,
      `Dez`,
    ],
    wide: [
      `Januar`,
      `Februar`,
      `März`,
      `April`,
      `Mai`,
      `Juni`,
      `Juli`,
      `August`,
      `September`,
      `Oktober`,
      `November`,
      `Dezember`,
    ],
  },
  nc = {
    narrow: tc.narrow,
    abbreviated: [
      `Jan.`,
      `Feb.`,
      `März`,
      `Apr.`,
      `Mai`,
      `Juni`,
      `Juli`,
      `Aug.`,
      `Sep.`,
      `Okt.`,
      `Nov.`,
      `Dez.`,
    ],
    wide: tc.wide,
  },
  rc = {
    code: `de`,
    formatDistance: Ys,
    formatLong: Xs,
    formatRelative: Qs,
    localize: {
      ordinalNumber: (e) => Number(e) + `.`,
      era: B({ values: $s, defaultWidth: `wide` }),
      quarter: B({
        values: ec,
        defaultWidth: `wide`,
        argumentCallback: (e) => e - 1,
      }),
      month: B({ values: tc, formattingValues: nc, defaultWidth: `wide` }),
      day: B({
        values: {
          narrow: [`S`, `M`, `D`, `M`, `D`, `F`, `S`],
          short: [`So`, `Mo`, `Di`, `Mi`, `Do`, `Fr`, `Sa`],
          abbreviated: [`So.`, `Mo.`, `Di.`, `Mi.`, `Do.`, `Fr.`, `Sa.`],
          wide: [
            `Sonntag`,
            `Montag`,
            `Dienstag`,
            `Mittwoch`,
            `Donnerstag`,
            `Freitag`,
            `Samstag`,
          ],
        },
        defaultWidth: `wide`,
      }),
      dayPeriod: B({
        values: {
          narrow: {
            am: `vm.`,
            pm: `nm.`,
            midnight: `Mitternacht`,
            noon: `Mittag`,
            morning: `Morgen`,
            afternoon: `Nachm.`,
            evening: `Abend`,
            night: `Nacht`,
          },
          abbreviated: {
            am: `vorm.`,
            pm: `nachm.`,
            midnight: `Mitternacht`,
            noon: `Mittag`,
            morning: `Morgen`,
            afternoon: `Nachmittag`,
            evening: `Abend`,
            night: `Nacht`,
          },
          wide: {
            am: `vormittags`,
            pm: `nachmittags`,
            midnight: `Mitternacht`,
            noon: `Mittag`,
            morning: `Morgen`,
            afternoon: `Nachmittag`,
            evening: `Abend`,
            night: `Nacht`,
          },
        },
        defaultWidth: `wide`,
        formattingValues: {
          narrow: {
            am: `vm.`,
            pm: `nm.`,
            midnight: `Mitternacht`,
            noon: `Mittag`,
            morning: `morgens`,
            afternoon: `nachm.`,
            evening: `abends`,
            night: `nachts`,
          },
          abbreviated: {
            am: `vorm.`,
            pm: `nachm.`,
            midnight: `Mitternacht`,
            noon: `Mittag`,
            morning: `morgens`,
            afternoon: `nachmittags`,
            evening: `abends`,
            night: `nachts`,
          },
          wide: {
            am: `vormittags`,
            pm: `nachmittags`,
            midnight: `Mitternacht`,
            noon: `Mittag`,
            morning: `morgens`,
            afternoon: `nachmittags`,
            evening: `abends`,
            night: `nachts`,
          },
        },
        defaultFormattingWidth: `wide`,
      }),
    },
    match: {
      ordinalNumber: nt({
        matchPattern: /^(\d+)(\.)?/i,
        parsePattern: /\d+/i,
        valueCallback: (e) => parseInt(e),
      }),
      era: V({
        matchPatterns: {
          narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
          abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
          wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/^v/i, /^n/i] },
        defaultParseWidth: `any`,
      }),
      quarter: V({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](\.)? Quartal/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: `any`,
        valueCallback: (e) => e + 1,
      }),
      month: V({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated:
            /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
          wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^j[aä]/i,
            /^f/i,
            /^mär/i,
            /^ap/i,
            /^mai/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: `any`,
      }),
      day: V({
        matchPatterns: {
          narrow: /^[smdmf]/i,
          short: /^(so|mo|di|mi|do|fr|sa)/i,
          abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
          wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i],
        },
        defaultParseWidth: `any`,
      }),
      dayPeriod: V({
        matchPatterns: {
          narrow:
            /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
          abbreviated:
            /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
          wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          any: {
            am: /^v/i,
            pm: /^n/i,
            midnight: /^Mitte/i,
            noon: /^Mitta/i,
            morning: /morgens/i,
            afternoon: /nachmittags/i,
            evening: /abends/i,
            night: /nachts/i,
          },
        },
        defaultParseWidth: `any`,
      }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
  },
  ic = {
    lessThanXSeconds: {
      one: `menos de un segundo`,
      other: `menos de {{count}} segundos`,
    },
    xSeconds: { one: `1 segundo`, other: `{{count}} segundos` },
    halfAMinute: `medio minuto`,
    lessThanXMinutes: {
      one: `menos de un minuto`,
      other: `menos de {{count}} minutos`,
    },
    xMinutes: { one: `1 minuto`, other: `{{count}} minutos` },
    aboutXHours: {
      one: `alrededor de 1 hora`,
      other: `alrededor de {{count}} horas`,
    },
    xHours: { one: `1 hora`, other: `{{count}} horas` },
    xDays: { one: `1 día`, other: `{{count}} días` },
    aboutXWeeks: {
      one: `alrededor de 1 semana`,
      other: `alrededor de {{count}} semanas`,
    },
    xWeeks: { one: `1 semana`, other: `{{count}} semanas` },
    aboutXMonths: {
      one: `alrededor de 1 mes`,
      other: `alrededor de {{count}} meses`,
    },
    xMonths: { one: `1 mes`, other: `{{count}} meses` },
    aboutXYears: {
      one: `alrededor de 1 año`,
      other: `alrededor de {{count}} años`,
    },
    xYears: { one: `1 año`, other: `{{count}} años` },
    overXYears: { one: `más de 1 año`, other: `más de {{count}} años` },
    almostXYears: { one: `casi 1 año`, other: `casi {{count}} años` },
  },
  ac = (e, t, n) => {
    let r,
      i = ic[e];
    return (
      (r =
        typeof i == `string`
          ? i
          : t === 1
            ? i.one
            : i.other.replace(`{{count}}`, t.toString())),
      n?.addSuffix
        ? n.comparison && n.comparison > 0
          ? `en ` + r
          : `hace ` + r
        : r
    );
  },
  oc = {
    date: H({
      formats: {
        full: `EEEE, d 'de' MMMM 'de' y`,
        long: `d 'de' MMMM 'de' y`,
        medium: `d MMM y`,
        short: `dd/MM/y`,
      },
      defaultWidth: `full`,
    }),
    time: H({
      formats: {
        full: `HH:mm:ss zzzz`,
        long: `HH:mm:ss z`,
        medium: `HH:mm:ss`,
        short: `HH:mm`,
      },
      defaultWidth: `full`,
    }),
    dateTime: H({
      formats: {
        full: `{{date}} 'a las' {{time}}`,
        long: `{{date}} 'a las' {{time}}`,
        medium: `{{date}}, {{time}}`,
        short: `{{date}}, {{time}}`,
      },
      defaultWidth: `full`,
    }),
  },
  sc = {
    lastWeek: `'el' eeee 'pasado a la' p`,
    yesterday: `'ayer a la' p`,
    today: `'hoy a la' p`,
    tomorrow: `'mañana a la' p`,
    nextWeek: `eeee 'a la' p`,
    other: `P`,
  },
  cc = {
    lastWeek: `'el' eeee 'pasado a las' p`,
    yesterday: `'ayer a las' p`,
    today: `'hoy a las' p`,
    tomorrow: `'mañana a las' p`,
    nextWeek: `eeee 'a las' p`,
    other: `P`,
  },
  lc = {
    code: `es`,
    formatDistance: ac,
    formatLong: oc,
    formatRelative: (e, t, n, r) => (t.getHours() === 1 ? sc[e] : cc[e]),
    localize: {
      ordinalNumber: (e, t) => Number(e) + `º`,
      era: B({
        values: {
          narrow: [`AC`, `DC`],
          abbreviated: [`AC`, `DC`],
          wide: [`antes de cristo`, `después de cristo`],
        },
        defaultWidth: `wide`,
      }),
      quarter: B({
        values: {
          narrow: [`1`, `2`, `3`, `4`],
          abbreviated: [`T1`, `T2`, `T3`, `T4`],
          wide: [
            `1º trimestre`,
            `2º trimestre`,
            `3º trimestre`,
            `4º trimestre`,
          ],
        },
        defaultWidth: `wide`,
        argumentCallback: (e) => Number(e) - 1,
      }),
      month: B({
        values: {
          narrow: [`e`, `f`, `m`, `a`, `m`, `j`, `j`, `a`, `s`, `o`, `n`, `d`],
          abbreviated: [
            `ene`,
            `feb`,
            `mar`,
            `abr`,
            `may`,
            `jun`,
            `jul`,
            `ago`,
            `sep`,
            `oct`,
            `nov`,
            `dic`,
          ],
          wide: [
            `enero`,
            `febrero`,
            `marzo`,
            `abril`,
            `mayo`,
            `junio`,
            `julio`,
            `agosto`,
            `septiembre`,
            `octubre`,
            `noviembre`,
            `diciembre`,
          ],
        },
        defaultWidth: `wide`,
      }),
      day: B({
        values: {
          narrow: [`d`, `l`, `m`, `m`, `j`, `v`, `s`],
          short: [`do`, `lu`, `ma`, `mi`, `ju`, `vi`, `sá`],
          abbreviated: [`dom`, `lun`, `mar`, `mié`, `jue`, `vie`, `sáb`],
          wide: [
            `domingo`,
            `lunes`,
            `martes`,
            `miércoles`,
            `jueves`,
            `viernes`,
            `sábado`,
          ],
        },
        defaultWidth: `wide`,
      }),
      dayPeriod: B({
        values: {
          narrow: {
            am: `a`,
            pm: `p`,
            midnight: `mn`,
            noon: `md`,
            morning: `mañana`,
            afternoon: `tarde`,
            evening: `tarde`,
            night: `noche`,
          },
          abbreviated: {
            am: `AM`,
            pm: `PM`,
            midnight: `medianoche`,
            noon: `mediodia`,
            morning: `mañana`,
            afternoon: `tarde`,
            evening: `tarde`,
            night: `noche`,
          },
          wide: {
            am: `a.m.`,
            pm: `p.m.`,
            midnight: `medianoche`,
            noon: `mediodia`,
            morning: `mañana`,
            afternoon: `tarde`,
            evening: `tarde`,
            night: `noche`,
          },
        },
        defaultWidth: `wide`,
        formattingValues: {
          narrow: {
            am: `a`,
            pm: `p`,
            midnight: `mn`,
            noon: `md`,
            morning: `de la mañana`,
            afternoon: `de la tarde`,
            evening: `de la tarde`,
            night: `de la noche`,
          },
          abbreviated: {
            am: `AM`,
            pm: `PM`,
            midnight: `medianoche`,
            noon: `mediodia`,
            morning: `de la mañana`,
            afternoon: `de la tarde`,
            evening: `de la tarde`,
            night: `de la noche`,
          },
          wide: {
            am: `a.m.`,
            pm: `p.m.`,
            midnight: `medianoche`,
            noon: `mediodia`,
            morning: `de la mañana`,
            afternoon: `de la tarde`,
            evening: `de la tarde`,
            night: `de la noche`,
          },
        },
        defaultFormattingWidth: `wide`,
      }),
    },
    match: {
      ordinalNumber: nt({
        matchPattern: /^(\d+)(º)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
          return parseInt(e, 10);
        },
      }),
      era: V({
        matchPatterns: {
          narrow: /^(ac|dc|a|d)/i,
          abbreviated:
            /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
          wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          any: [/^ac/i, /^dc/i],
          wide: [
            /^(antes de cristo|antes de la era com[uú]n)/i,
            /^(despu[eé]s de cristo|era com[uú]n)/i,
          ],
        },
        defaultParseWidth: `any`,
      }),
      quarter: V({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^T[1234]/i,
          wide: /^[1234](º)? trimestre/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: `any`,
        valueCallback: (e) => e + 1,
      }),
      month: V({
        matchPatterns: {
          narrow: /^[efmajsond]/i,
          abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
          wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [
            /^e/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^en/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
        },
        defaultParseWidth: `any`,
      }),
      day: V({
        matchPatterns: {
          narrow: /^[dlmjvs]/i,
          short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
          abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
          wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
          any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i],
        },
        defaultParseWidth: `any`,
      }),
      dayPeriod: V({
        matchPatterns: {
          narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
          any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i,
        },
        defaultMatchWidth: `any`,
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mn/i,
            noon: /^md/i,
            morning: /mañana/i,
            afternoon: /tarde/i,
            evening: /tarde/i,
            night: /noche/i,
          },
        },
        defaultParseWidth: `any`,
      }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
  },
  uc = {
    lessThanXSeconds: {
      one: `moins d’une seconde`,
      other: `moins de {{count}} secondes`,
    },
    xSeconds: { one: `1 seconde`, other: `{{count}} secondes` },
    halfAMinute: `30 secondes`,
    lessThanXMinutes: {
      one: `moins d’une minute`,
      other: `moins de {{count}} minutes`,
    },
    xMinutes: { one: `1 minute`, other: `{{count}} minutes` },
    aboutXHours: { one: `environ 1 heure`, other: `environ {{count}} heures` },
    xHours: { one: `1 heure`, other: `{{count}} heures` },
    xDays: { one: `1 jour`, other: `{{count}} jours` },
    aboutXWeeks: {
      one: `environ 1 semaine`,
      other: `environ {{count}} semaines`,
    },
    xWeeks: { one: `1 semaine`, other: `{{count}} semaines` },
    aboutXMonths: { one: `environ 1 mois`, other: `environ {{count}} mois` },
    xMonths: { one: `1 mois`, other: `{{count}} mois` },
    aboutXYears: { one: `environ 1 an`, other: `environ {{count}} ans` },
    xYears: { one: `1 an`, other: `{{count}} ans` },
    overXYears: { one: `plus d’un an`, other: `plus de {{count}} ans` },
    almostXYears: { one: `presqu’un an`, other: `presque {{count}} ans` },
  },
  dc = (e, t, n) => {
    let r,
      i = uc[e];
    return (
      (r =
        typeof i == `string`
          ? i
          : t === 1
            ? i.one
            : i.other.replace(`{{count}}`, String(t))),
      n?.addSuffix
        ? n.comparison && n.comparison > 0
          ? `dans ` + r
          : `il y a ` + r
        : r
    );
  },
  fc = {
    date: H({
      formats: {
        full: `EEEE d MMMM y`,
        long: `d MMMM y`,
        medium: `d MMM y`,
        short: `dd/MM/y`,
      },
      defaultWidth: `full`,
    }),
    time: H({
      formats: {
        full: `HH:mm:ss zzzz`,
        long: `HH:mm:ss z`,
        medium: `HH:mm:ss`,
        short: `HH:mm`,
      },
      defaultWidth: `full`,
    }),
    dateTime: H({
      formats: {
        full: `{{date}} 'à' {{time}}`,
        long: `{{date}} 'à' {{time}}`,
        medium: `{{date}}, {{time}}`,
        short: `{{date}}, {{time}}`,
      },
      defaultWidth: `full`,
    }),
  },
  pc = {
    lastWeek: `eeee 'dernier à' p`,
    yesterday: `'hier à' p`,
    today: `'aujourd’hui à' p`,
    tomorrow: `'demain à' p'`,
    nextWeek: `eeee 'prochain à' p`,
    other: `P`,
  },
  mc = (e, t, n, r) => pc[e],
  hc = {
    narrow: [`av. J.-C`, `ap. J.-C`],
    abbreviated: [`av. J.-C`, `ap. J.-C`],
    wide: [`avant Jésus-Christ`, `après Jésus-Christ`],
  },
  gc = {
    narrow: [`T1`, `T2`, `T3`, `T4`],
    abbreviated: [`1er trim.`, `2ème trim.`, `3ème trim.`, `4ème trim.`],
    wide: [
      `1er trimestre`,
      `2ème trimestre`,
      `3ème trimestre`,
      `4ème trimestre`,
    ],
  },
  _c = {
    narrow: [`J`, `F`, `M`, `A`, `M`, `J`, `J`, `A`, `S`, `O`, `N`, `D`],
    abbreviated: [
      `janv.`,
      `févr.`,
      `mars`,
      `avr.`,
      `mai`,
      `juin`,
      `juil.`,
      `août`,
      `sept.`,
      `oct.`,
      `nov.`,
      `déc.`,
    ],
    wide: [
      `janvier`,
      `février`,
      `mars`,
      `avril`,
      `mai`,
      `juin`,
      `juillet`,
      `août`,
      `septembre`,
      `octobre`,
      `novembre`,
      `décembre`,
    ],
  },
  vc = {
    narrow: [`D`, `L`, `M`, `M`, `J`, `V`, `S`],
    short: [`di`, `lu`, `ma`, `me`, `je`, `ve`, `sa`],
    abbreviated: [`dim.`, `lun.`, `mar.`, `mer.`, `jeu.`, `ven.`, `sam.`],
    wide: [
      `dimanche`,
      `lundi`,
      `mardi`,
      `mercredi`,
      `jeudi`,
      `vendredi`,
      `samedi`,
    ],
  },
  yc = {
    narrow: {
      am: `AM`,
      pm: `PM`,
      midnight: `minuit`,
      noon: `midi`,
      morning: `mat.`,
      afternoon: `ap.m.`,
      evening: `soir`,
      night: `mat.`,
    },
    abbreviated: {
      am: `AM`,
      pm: `PM`,
      midnight: `minuit`,
      noon: `midi`,
      morning: `matin`,
      afternoon: `après-midi`,
      evening: `soir`,
      night: `matin`,
    },
    wide: {
      am: `AM`,
      pm: `PM`,
      midnight: `minuit`,
      noon: `midi`,
      morning: `du matin`,
      afternoon: `de l’après-midi`,
      evening: `du soir`,
      night: `du matin`,
    },
  },
  bc = (e, t) => {
    let n = Number(e),
      r = t?.unit;
    if (n === 0) return `0`;
    let i = [`year`, `week`, `hour`, `minute`, `second`],
      a;
    return ((a = n === 1 ? (r && i.includes(r) ? `ère` : `er`) : `ème`), n + a);
  },
  xc = [`MMM`, `MMMM`],
  Sc = {
    code: `fr`,
    formatDistance: dc,
    formatLong: fc,
    formatRelative: mc,
    localize: {
      preprocessor: (e, t) =>
        e.getDate() === 1 || !t.some((e) => e.isToken && xc.includes(e.value))
          ? t
          : t.map((e) =>
              e.isToken && e.value === `do` ? { isToken: !0, value: `d` } : e,
            ),
      ordinalNumber: bc,
      era: B({ values: hc, defaultWidth: `wide` }),
      quarter: B({
        values: gc,
        defaultWidth: `wide`,
        argumentCallback: (e) => e - 1,
      }),
      month: B({ values: _c, defaultWidth: `wide` }),
      day: B({ values: vc, defaultWidth: `wide` }),
      dayPeriod: B({ values: yc, defaultWidth: `wide` }),
    },
    match: {
      ordinalNumber: nt({
        matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i,
        parsePattern: /\d+/i,
        valueCallback: (e) => parseInt(e),
      }),
      era: V({
        matchPatterns: {
          narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
          abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
          wide: /^(avant Jésus-Christ|après Jésus-Christ)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/^av/i, /^ap/i] },
        defaultParseWidth: `any`,
      }),
      quarter: V({
        matchPatterns: {
          narrow: /^T?[1234]/i,
          abbreviated: /^[1234](er|ème|e)? trim\.?/i,
          wide: /^[1234](er|ème|e)? trimestre/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: `any`,
        valueCallback: (e) => e + 1,
      }),
      month: V({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated:
            /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
          wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^av/i,
            /^ma/i,
            /^juin/i,
            /^juil/i,
            /^ao/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: `any`,
      }),
      day: V({
        matchPatterns: {
          narrow: /^[lmjvsd]/i,
          short: /^(di|lu|ma|me|je|ve|sa)/i,
          abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
          wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
          any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i],
        },
        defaultParseWidth: `any`,
      }),
      dayPeriod: V({
        matchPatterns: {
          narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
          any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i,
        },
        defaultMatchWidth: `any`,
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^min/i,
            noon: /^mid/i,
            morning: /mat/i,
            afternoon: /ap/i,
            evening: /soir/i,
            night: /nuit/i,
          },
        },
        defaultParseWidth: `any`,
      }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
  },
  Cc = {
    lessThanXSeconds: {
      one: `1秒未満`,
      other: `{{count}}秒未満`,
      oneWithSuffix: `約1秒`,
      otherWithSuffix: `約{{count}}秒`,
    },
    xSeconds: { one: `1秒`, other: `{{count}}秒` },
    halfAMinute: `30秒`,
    lessThanXMinutes: {
      one: `1分未満`,
      other: `{{count}}分未満`,
      oneWithSuffix: `約1分`,
      otherWithSuffix: `約{{count}}分`,
    },
    xMinutes: { one: `1分`, other: `{{count}}分` },
    aboutXHours: { one: `約1時間`, other: `約{{count}}時間` },
    xHours: { one: `1時間`, other: `{{count}}時間` },
    xDays: { one: `1日`, other: `{{count}}日` },
    aboutXWeeks: { one: `約1週間`, other: `約{{count}}週間` },
    xWeeks: { one: `1週間`, other: `{{count}}週間` },
    aboutXMonths: { one: `約1か月`, other: `約{{count}}か月` },
    xMonths: { one: `1か月`, other: `{{count}}か月` },
    aboutXYears: { one: `約1年`, other: `約{{count}}年` },
    xYears: { one: `1年`, other: `{{count}}年` },
    overXYears: { one: `1年以上`, other: `{{count}}年以上` },
    almostXYears: { one: `1年近く`, other: `{{count}}年近く` },
  },
  wc = (e, t, n) => {
    n ||= {};
    let r,
      i = Cc[e];
    return (
      (r =
        typeof i == `string`
          ? i
          : t === 1
            ? n.addSuffix && i.oneWithSuffix
              ? i.oneWithSuffix
              : i.one
            : n.addSuffix && i.otherWithSuffix
              ? i.otherWithSuffix.replace(`{{count}}`, String(t))
              : i.other.replace(`{{count}}`, String(t))),
      n.addSuffix ? (n.comparison && n.comparison > 0 ? r + `後` : r + `前`) : r
    );
  },
  Tc = {
    date: H({
      formats: {
        full: `y年M月d日EEEE`,
        long: `y年M月d日`,
        medium: `y/MM/dd`,
        short: `y/MM/dd`,
      },
      defaultWidth: `full`,
    }),
    time: H({
      formats: {
        full: `H時mm分ss秒 zzzz`,
        long: `H:mm:ss z`,
        medium: `H:mm:ss`,
        short: `H:mm`,
      },
      defaultWidth: `full`,
    }),
    dateTime: H({
      formats: {
        full: `{{date}} {{time}}`,
        long: `{{date}} {{time}}`,
        medium: `{{date}} {{time}}`,
        short: `{{date}} {{time}}`,
      },
      defaultWidth: `full`,
    }),
  },
  Ec = {
    lastWeek: `先週のeeeeのp`,
    yesterday: `昨日のp`,
    today: `今日のp`,
    tomorrow: `明日のp`,
    nextWeek: `翌週のeeeeのp`,
    other: `P`,
  },
  Dc = {
    code: `ja`,
    formatDistance: wc,
    formatLong: Tc,
    formatRelative: (e, t, n, r) => Ec[e],
    localize: {
      ordinalNumber: (e, t) => {
        let n = Number(e);
        switch (String(t?.unit)) {
          case `year`:
            return `${n}年`;
          case `quarter`:
            return `第${n}四半期`;
          case `month`:
            return `${n}月`;
          case `week`:
            return `第${n}週`;
          case `date`:
            return `${n}日`;
          case `hour`:
            return `${n}時`;
          case `minute`:
            return `${n}分`;
          case `second`:
            return `${n}秒`;
          default:
            return `${n}`;
        }
      },
      era: B({
        values: {
          narrow: [`BC`, `AC`],
          abbreviated: [`紀元前`, `西暦`],
          wide: [`紀元前`, `西暦`],
        },
        defaultWidth: `wide`,
      }),
      quarter: B({
        values: {
          narrow: [`1`, `2`, `3`, `4`],
          abbreviated: [`Q1`, `Q2`, `Q3`, `Q4`],
          wide: [`第1四半期`, `第2四半期`, `第3四半期`, `第4四半期`],
        },
        defaultWidth: `wide`,
        argumentCallback: (e) => Number(e) - 1,
      }),
      month: B({
        values: {
          narrow: [
            `1`,
            `2`,
            `3`,
            `4`,
            `5`,
            `6`,
            `7`,
            `8`,
            `9`,
            `10`,
            `11`,
            `12`,
          ],
          abbreviated: [
            `1月`,
            `2月`,
            `3月`,
            `4月`,
            `5月`,
            `6月`,
            `7月`,
            `8月`,
            `9月`,
            `10月`,
            `11月`,
            `12月`,
          ],
          wide: [
            `1月`,
            `2月`,
            `3月`,
            `4月`,
            `5月`,
            `6月`,
            `7月`,
            `8月`,
            `9月`,
            `10月`,
            `11月`,
            `12月`,
          ],
        },
        defaultWidth: `wide`,
      }),
      day: B({
        values: {
          narrow: [`日`, `月`, `火`, `水`, `木`, `金`, `土`],
          short: [`日`, `月`, `火`, `水`, `木`, `金`, `土`],
          abbreviated: [`日`, `月`, `火`, `水`, `木`, `金`, `土`],
          wide: [
            `日曜日`,
            `月曜日`,
            `火曜日`,
            `水曜日`,
            `木曜日`,
            `金曜日`,
            `土曜日`,
          ],
        },
        defaultWidth: `wide`,
      }),
      dayPeriod: B({
        values: {
          narrow: {
            am: `午前`,
            pm: `午後`,
            midnight: `深夜`,
            noon: `正午`,
            morning: `朝`,
            afternoon: `午後`,
            evening: `夜`,
            night: `深夜`,
          },
          abbreviated: {
            am: `午前`,
            pm: `午後`,
            midnight: `深夜`,
            noon: `正午`,
            morning: `朝`,
            afternoon: `午後`,
            evening: `夜`,
            night: `深夜`,
          },
          wide: {
            am: `午前`,
            pm: `午後`,
            midnight: `深夜`,
            noon: `正午`,
            morning: `朝`,
            afternoon: `午後`,
            evening: `夜`,
            night: `深夜`,
          },
        },
        defaultWidth: `wide`,
        formattingValues: {
          narrow: {
            am: `午前`,
            pm: `午後`,
            midnight: `深夜`,
            noon: `正午`,
            morning: `朝`,
            afternoon: `午後`,
            evening: `夜`,
            night: `深夜`,
          },
          abbreviated: {
            am: `午前`,
            pm: `午後`,
            midnight: `深夜`,
            noon: `正午`,
            morning: `朝`,
            afternoon: `午後`,
            evening: `夜`,
            night: `深夜`,
          },
          wide: {
            am: `午前`,
            pm: `午後`,
            midnight: `深夜`,
            noon: `正午`,
            morning: `朝`,
            afternoon: `午後`,
            evening: `夜`,
            night: `深夜`,
          },
        },
        defaultFormattingWidth: `wide`,
      }),
    },
    match: {
      ordinalNumber: nt({
        matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
          return parseInt(e, 10);
        },
      }),
      era: V({
        matchPatterns: {
          narrow: /^(B\.?C\.?|A\.?D\.?)/i,
          abbreviated: /^(紀元[前後]|西暦)/i,
          wide: /^(紀元[前後]|西暦)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [/^B/i, /^A/i],
          any: [/^(紀元前)/i, /^(西暦|紀元後)/i],
        },
        defaultParseWidth: `any`,
      }),
      quarter: V({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^Q[1234]/i,
          wide: /^第[1234一二三四１２３４]四半期/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i],
        },
        defaultParseWidth: `any`,
        valueCallback: (e) => e + 1,
      }),
      month: V({
        matchPatterns: {
          narrow: /^([123456789]|1[012])/,
          abbreviated: /^([123456789]|1[012])月/i,
          wide: /^([123456789]|1[012])月/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          any: [
            /^1\D/,
            /^2/,
            /^3/,
            /^4/,
            /^5/,
            /^6/,
            /^7/,
            /^8/,
            /^9/,
            /^10/,
            /^11/,
            /^12/,
          ],
        },
        defaultParseWidth: `any`,
      }),
      day: V({
        matchPatterns: {
          narrow: /^[日月火水木金土]/,
          short: /^[日月火水木金土]/,
          abbreviated: /^[日月火水木金土]/,
          wide: /^[日月火水木金土]曜日/,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/],
        },
        defaultParseWidth: `any`,
      }),
      dayPeriod: V({
        matchPatterns: { any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i },
        defaultMatchWidth: `any`,
        parsePatterns: {
          any: {
            am: /^(A|午前)/i,
            pm: /^(P|午後)/i,
            midnight: /^深夜|真夜中/i,
            noon: /^正午/i,
            morning: /^朝/i,
            afternoon: /^午後/i,
            evening: /^夜/i,
            night: /^深夜/i,
          },
        },
        defaultParseWidth: `any`,
      }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
