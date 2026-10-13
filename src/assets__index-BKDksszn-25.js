// assets__index-BKDksszn 25 — pluralgenitive
// Lines 9079-9345 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
function Oc(e, t) {
  if (e.one !== void 0 && t === 1) return e.one;
  let n = t % 10,
    r = t % 100;
  return n === 1 && r !== 11
    ? e.singularNominative.replace(`{{count}}`, String(t))
    : n >= 2 && n <= 4 && (r < 10 || r > 20)
      ? e.singularGenitive.replace(`{{count}}`, String(t))
      : e.pluralGenitive.replace(`{{count}}`, String(t));
}
function Q(e) {
  return (t, n) =>
    n?.addSuffix
      ? n.comparison && n.comparison > 0
        ? e.future
          ? Oc(e.future, t)
          : `через ` + Oc(e.regular, t)
        : e.past
          ? Oc(e.past, t)
          : Oc(e.regular, t) + ` назад`
      : Oc(e.regular, t);
}
var kc = {
    lessThanXSeconds: Q({
      regular: {
        one: `меньше секунды`,
        singularNominative: `меньше {{count}} секунды`,
        singularGenitive: `меньше {{count}} секунд`,
        pluralGenitive: `меньше {{count}} секунд`,
      },
      future: {
        one: `меньше, чем через секунду`,
        singularNominative: `меньше, чем через {{count}} секунду`,
        singularGenitive: `меньше, чем через {{count}} секунды`,
        pluralGenitive: `меньше, чем через {{count}} секунд`,
      },
    }),
    xSeconds: Q({
      regular: {
        singularNominative: `{{count}} секунда`,
        singularGenitive: `{{count}} секунды`,
        pluralGenitive: `{{count}} секунд`,
      },
      past: {
        singularNominative: `{{count}} секунду назад`,
        singularGenitive: `{{count}} секунды назад`,
        pluralGenitive: `{{count}} секунд назад`,
      },
      future: {
        singularNominative: `через {{count}} секунду`,
        singularGenitive: `через {{count}} секунды`,
        pluralGenitive: `через {{count}} секунд`,
      },
    }),
    halfAMinute: (e, t) =>
      t?.addSuffix
        ? t.comparison && t.comparison > 0
          ? `через полминуты`
          : `полминуты назад`
        : `полминуты`,
    lessThanXMinutes: Q({
      regular: {
        one: `меньше минуты`,
        singularNominative: `меньше {{count}} минуты`,
        singularGenitive: `меньше {{count}} минут`,
        pluralGenitive: `меньше {{count}} минут`,
      },
      future: {
        one: `меньше, чем через минуту`,
        singularNominative: `меньше, чем через {{count}} минуту`,
        singularGenitive: `меньше, чем через {{count}} минуты`,
        pluralGenitive: `меньше, чем через {{count}} минут`,
      },
    }),
    xMinutes: Q({
      regular: {
        singularNominative: `{{count}} минута`,
        singularGenitive: `{{count}} минуты`,
        pluralGenitive: `{{count}} минут`,
      },
      past: {
        singularNominative: `{{count}} минуту назад`,
        singularGenitive: `{{count}} минуты назад`,
        pluralGenitive: `{{count}} минут назад`,
      },
      future: {
        singularNominative: `через {{count}} минуту`,
        singularGenitive: `через {{count}} минуты`,
        pluralGenitive: `через {{count}} минут`,
      },
    }),
    aboutXHours: Q({
      regular: {
        singularNominative: `около {{count}} часа`,
        singularGenitive: `около {{count}} часов`,
        pluralGenitive: `около {{count}} часов`,
      },
      future: {
        singularNominative: `приблизительно через {{count}} час`,
        singularGenitive: `приблизительно через {{count}} часа`,
        pluralGenitive: `приблизительно через {{count}} часов`,
      },
    }),
    xHours: Q({
      regular: {
        singularNominative: `{{count}} час`,
        singularGenitive: `{{count}} часа`,
        pluralGenitive: `{{count}} часов`,
      },
    }),
    xDays: Q({
      regular: {
        singularNominative: `{{count}} день`,
        singularGenitive: `{{count}} дня`,
        pluralGenitive: `{{count}} дней`,
      },
    }),
    aboutXWeeks: Q({
      regular: {
        singularNominative: `около {{count}} недели`,
        singularGenitive: `около {{count}} недель`,
        pluralGenitive: `около {{count}} недель`,
      },
      future: {
        singularNominative: `приблизительно через {{count}} неделю`,
        singularGenitive: `приблизительно через {{count}} недели`,
        pluralGenitive: `приблизительно через {{count}} недель`,
      },
    }),
    xWeeks: Q({
      regular: {
        singularNominative: `{{count}} неделя`,
        singularGenitive: `{{count}} недели`,
        pluralGenitive: `{{count}} недель`,
      },
    }),
    aboutXMonths: Q({
      regular: {
        singularNominative: `около {{count}} месяца`,
        singularGenitive: `около {{count}} месяцев`,
        pluralGenitive: `около {{count}} месяцев`,
      },
      future: {
        singularNominative: `приблизительно через {{count}} месяц`,
        singularGenitive: `приблизительно через {{count}} месяца`,
        pluralGenitive: `приблизительно через {{count}} месяцев`,
      },
    }),
    xMonths: Q({
      regular: {
        singularNominative: `{{count}} месяц`,
        singularGenitive: `{{count}} месяца`,
        pluralGenitive: `{{count}} месяцев`,
      },
    }),
    aboutXYears: Q({
      regular: {
        singularNominative: `около {{count}} года`,
        singularGenitive: `около {{count}} лет`,
        pluralGenitive: `около {{count}} лет`,
      },
      future: {
        singularNominative: `приблизительно через {{count}} год`,
        singularGenitive: `приблизительно через {{count}} года`,
        pluralGenitive: `приблизительно через {{count}} лет`,
      },
    }),
    xYears: Q({
      regular: {
        singularNominative: `{{count}} год`,
        singularGenitive: `{{count}} года`,
        pluralGenitive: `{{count}} лет`,
      },
    }),
    overXYears: Q({
      regular: {
        singularNominative: `больше {{count}} года`,
        singularGenitive: `больше {{count}} лет`,
        pluralGenitive: `больше {{count}} лет`,
      },
      future: {
        singularNominative: `больше, чем через {{count}} год`,
        singularGenitive: `больше, чем через {{count}} года`,
        pluralGenitive: `больше, чем через {{count}} лет`,
      },
    }),
    almostXYears: Q({
      regular: {
        singularNominative: `почти {{count}} год`,
        singularGenitive: `почти {{count}} года`,
        pluralGenitive: `почти {{count}} лет`,
      },
      future: {
        singularNominative: `почти через {{count}} год`,
        singularGenitive: `почти через {{count}} года`,
        pluralGenitive: `почти через {{count}} лет`,
      },
    }),
  },
  Ac = (e, t, n) => kc[e](t, n),
  jc = {
    date: H({
      formats: {
        full: `EEEE, d MMMM y 'г.'`,
        long: `d MMMM y 'г.'`,
        medium: `d MMM y 'г.'`,
        short: `dd.MM.y`,
      },
      defaultWidth: `full`,
    }),
    time: H({
      formats: {
        full: `H:mm:ss zzzz`,
        long: `H:mm:ss z`,
        medium: `H:mm:ss`,
        short: `H:mm`,
      },
      defaultWidth: `full`,
    }),
    dateTime: H({
      formats: { any: `{{date}}, {{time}}` },
      defaultWidth: `any`,
    }),
  },
  Mc = [
    `воскресенье`,
    `понедельник`,
    `вторник`,
    `среду`,
    `четверг`,
    `пятницу`,
    `субботу`,
  ];
function Nc(e) {
  let t = Mc[e];
  switch (e) {
    case 0:
      return `'в прошлое ` + t + ` в' p`;
    case 1:
    case 2:
    case 4:
      return `'в прошлый ` + t + ` в' p`;
    case 3:
    case 5:
    case 6:
      return `'в прошлую ` + t + ` в' p`;
  }
}
function Pc(e) {
  let t = Mc[e];
  return e === 2 ? `'во ` + t + ` в' p` : `'в ` + t + ` в' p`;
}
function Fc(e) {
  let t = Mc[e];
  switch (e) {
    case 0:
      return `'в следующее ` + t + ` в' p`;
    case 1:
    case 2:
    case 4:
      return `'в следующий ` + t + ` в' p`;
    case 3:
    case 5:
    case 6:
      return `'в следующую ` + t + ` в' p`;
  }
}
