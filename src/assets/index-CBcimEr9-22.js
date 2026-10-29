// index-CBcimEr9 22 — other
// Lines 8372-8756 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
var fc = {
    lastWeek: (e, t, n) => {
      let r = e.getDay();
      return vs(e, t, n) ? uc(r) : lc(r);
    },
    yesterday: `'вчера в' p`,
    today: `'сегодня в' p`,
    tomorrow: `'завтра в' p`,
    nextWeek: (e, t, n) => {
      let r = e.getDay();
      return vs(e, t, n) ? uc(r) : dc(r);
    },
    other: `P`,
  },
  pc = {
    code: `ru`,
    formatDistance: oc,
    formatLong: sc,
    formatRelative: (e, t, n, r) => {
      let i = fc[e];
      return typeof i == `function` ? i(t, n, r) : i;
    },
    localize: {
      ordinalNumber: (e, t) => {
        let n = Number(e),
          r = t?.unit,
          i;
        return (
          (i =
            r === `date`
              ? `-е`
              : r === `week` || r === `minute` || r === `second`
                ? `-я`
                : `-й`),
          n + i
        );
      },
      era: z({
        values: {
          narrow: [`до н.э.`, `н.э.`],
          abbreviated: [`до н. э.`, `н. э.`],
          wide: [`до нашей эры`, `нашей эры`],
        },
        defaultWidth: `wide`,
      }),
      quarter: z({
        values: {
          narrow: [`1`, `2`, `3`, `4`],
          abbreviated: [`1-й кв.`, `2-й кв.`, `3-й кв.`, `4-й кв.`],
          wide: [`1-й квартал`, `2-й квартал`, `3-й квартал`, `4-й квартал`],
        },
        defaultWidth: `wide`,
        argumentCallback: (e) => e - 1,
      }),
      month: z({
        values: {
          narrow: [`Я`, `Ф`, `М`, `А`, `М`, `И`, `И`, `А`, `С`, `О`, `Н`, `Д`],
          abbreviated: [
            `янв.`,
            `фев.`,
            `март`,
            `апр.`,
            `май`,
            `июнь`,
            `июль`,
            `авг.`,
            `сент.`,
            `окт.`,
            `нояб.`,
            `дек.`,
          ],
          wide: [
            `январь`,
            `февраль`,
            `март`,
            `апрель`,
            `май`,
            `июнь`,
            `июль`,
            `август`,
            `сентябрь`,
            `октябрь`,
            `ноябрь`,
            `декабрь`,
          ],
        },
        defaultWidth: `wide`,
        formattingValues: {
          narrow: [`Я`, `Ф`, `М`, `А`, `М`, `И`, `И`, `А`, `С`, `О`, `Н`, `Д`],
          abbreviated: [
            `янв.`,
            `фев.`,
            `мар.`,
            `апр.`,
            `мая`,
            `июн.`,
            `июл.`,
            `авг.`,
            `сент.`,
            `окт.`,
            `нояб.`,
            `дек.`,
          ],
          wide: [
            `января`,
            `февраля`,
            `марта`,
            `апреля`,
            `мая`,
            `июня`,
            `июля`,
            `августа`,
            `сентября`,
            `октября`,
            `ноября`,
            `декабря`,
          ],
        },
        defaultFormattingWidth: `wide`,
      }),
      day: z({
        values: {
          narrow: [`В`, `П`, `В`, `С`, `Ч`, `П`, `С`],
          short: [`вс`, `пн`, `вт`, `ср`, `чт`, `пт`, `сб`],
          abbreviated: [`вск`, `пнд`, `втр`, `срд`, `чтв`, `птн`, `суб`],
          wide: [
            `воскресенье`,
            `понедельник`,
            `вторник`,
            `среда`,
            `четверг`,
            `пятница`,
            `суббота`,
          ],
        },
        defaultWidth: `wide`,
      }),
      dayPeriod: z({
        values: {
          narrow: {
            am: `ДП`,
            pm: `ПП`,
            midnight: `полн.`,
            noon: `полд.`,
            morning: `утро`,
            afternoon: `день`,
            evening: `веч.`,
            night: `ночь`,
          },
          abbreviated: {
            am: `ДП`,
            pm: `ПП`,
            midnight: `полн.`,
            noon: `полд.`,
            morning: `утро`,
            afternoon: `день`,
            evening: `веч.`,
            night: `ночь`,
          },
          wide: {
            am: `ДП`,
            pm: `ПП`,
            midnight: `полночь`,
            noon: `полдень`,
            morning: `утро`,
            afternoon: `день`,
            evening: `вечер`,
            night: `ночь`,
          },
        },
        defaultWidth: `any`,
        formattingValues: {
          narrow: {
            am: `ДП`,
            pm: `ПП`,
            midnight: `полн.`,
            noon: `полд.`,
            morning: `утра`,
            afternoon: `дня`,
            evening: `веч.`,
            night: `ночи`,
          },
          abbreviated: {
            am: `ДП`,
            pm: `ПП`,
            midnight: `полн.`,
            noon: `полд.`,
            morning: `утра`,
            afternoon: `дня`,
            evening: `веч.`,
            night: `ночи`,
          },
          wide: {
            am: `ДП`,
            pm: `ПП`,
            midnight: `полночь`,
            noon: `полдень`,
            morning: `утра`,
            afternoon: `дня`,
            evening: `вечера`,
            night: `ночи`,
          },
        },
        defaultFormattingWidth: `wide`,
      }),
    },
    match: {
      ordinalNumber: st({
        matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
        parsePattern: /\d+/i,
        valueCallback: (e) => parseInt(e, 10),
      }),
      era: B({
        matchPatterns: {
          narrow: /^((до )?н\.?\s?э\.?)/i,
          abbreviated: /^((до )?н\.?\s?э\.?)/i,
          wide: /^(до нашей эры|нашей эры|наша эра)/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/^д/i, /^н/i] },
        defaultParseWidth: `any`,
      }),
      quarter: B({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
          wide: /^[1234](-?[ыои]?й?)? квартал/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: `any`,
        valueCallback: (e) => e + 1,
      }),
      month: B({
        matchPatterns: {
          narrow: /^[яфмаисонд]/i,
          abbreviated:
            /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
          wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [
            /^я/i,
            /^ф/i,
            /^м/i,
            /^а/i,
            /^м/i,
            /^и/i,
            /^и/i,
            /^а/i,
            /^с/i,
            /^о/i,
            /^н/i,
            /^я/i,
          ],
          any: [
            /^я/i,
            /^ф/i,
            /^мар/i,
            /^ап/i,
            /^ма[йя]/i,
            /^июн/i,
            /^июл/i,
            /^ав/i,
            /^с/i,
            /^о/i,
            /^н/i,
            /^д/i,
          ],
        },
        defaultParseWidth: `any`,
      }),
      day: B({
        matchPatterns: {
          narrow: /^[впсч]/i,
          short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
          abbreviated:
            /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
          wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
          any: [
            /^в[ос]/i,
            /^п[он]/i,
            /^в/i,
            /^ср/i,
            /^ч/i,
            /^п[ят]/i,
            /^с[уб]/i,
          ],
        },
        defaultParseWidth: `any`,
      }),
      dayPeriod: B({
        matchPatterns: {
          narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
          abbreviated:
            /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
          wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i,
        },
        defaultMatchWidth: `wide`,
        parsePatterns: {
          any: {
            am: /^дп/i,
            pm: /^пп/i,
            midnight: /^полн/i,
            noon: /^полд/i,
            morning: /^у/i,
            afternoon: /^д[ен]/i,
            evening: /^в/i,
            night: /^н/i,
          },
        },
        defaultParseWidth: `any`,
      }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
  },
  mc = {
    lessThanXSeconds: { one: `不到 1 秒`, other: `不到 {{count}} 秒` },
    xSeconds: { one: `1 秒`, other: `{{count}} 秒` },
    halfAMinute: `半分钟`,
    lessThanXMinutes: { one: `不到 1 分钟`, other: `不到 {{count}} 分钟` },
    xMinutes: { one: `1 分钟`, other: `{{count}} 分钟` },
    xHours: { one: `1 小时`, other: `{{count}} 小时` },
    aboutXHours: { one: `大约 1 小时`, other: `大约 {{count}} 小时` },
    xDays: { one: `1 天`, other: `{{count}} 天` },
    aboutXWeeks: { one: `大约 1 个星期`, other: `大约 {{count}} 个星期` },
    xWeeks: { one: `1 个星期`, other: `{{count}} 个星期` },
    aboutXMonths: { one: `大约 1 个月`, other: `大约 {{count}} 个月` },
    xMonths: { one: `1 个月`, other: `{{count}} 个月` },
    aboutXYears: { one: `大约 1 年`, other: `大约 {{count}} 年` },
    xYears: { one: `1 年`, other: `{{count}} 年` },
    overXYears: { one: `超过 1 年`, other: `超过 {{count}} 年` },
    almostXYears: { one: `将近 1 年`, other: `将近 {{count}} 年` },
  },
  hc = (e, t, n) => {
    let r,
      i = mc[e];
    return (
      (r =
        typeof i == `string`
          ? i
          : t === 1
            ? i.one
            : i.other.replace(`{{count}}`, String(t))),
      n?.addSuffix
        ? n.comparison && n.comparison > 0
          ? r + `内`
          : r + `前`
        : r
    );
  },
  gc = {
    date: V({
      formats: {
        full: `y'年'M'月'd'日' EEEE`,
        long: `y'年'M'月'd'日'`,
        medium: `yyyy-MM-dd`,
        short: `yy-MM-dd`,
      },
      defaultWidth: `full`,
    }),
    time: V({
      formats: {
        full: `zzzz a h:mm:ss`,
        long: `z a h:mm:ss`,
        medium: `a h:mm:ss`,
        short: `a h:mm`,
      },
      defaultWidth: `full`,
    }),
    dateTime: V({
      formats: {
        full: `{{date}} {{time}}`,
        long: `{{date}} {{time}}`,
        medium: `{{date}} {{time}}`,
        short: `{{date}} {{time}}`,
      },
      defaultWidth: `full`,
    }),
  };
