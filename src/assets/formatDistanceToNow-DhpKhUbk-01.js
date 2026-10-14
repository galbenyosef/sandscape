// formatDistanceToNow-DhpKhUbk 01 — other
// Lines 1-201 of readable/assets/formatDistanceToNow-DhpKhUbk.pretty.js (statement-aligned).
function e(e) {
  let t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == `object` && t === `[object Date]`)
    ? new e.constructor(+e)
    : typeof e == `number` ||
        t === `[object Number]` ||
        typeof e == `string` ||
        t === `[object String]`
      ? new Date(e)
      : new Date(NaN);
}
function t(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
var n = 365.2425,
  r = 43200,
  i = 3600 * 24;
(i * 7, ((i * n) / 12) * 3);
var a = {};
function o() {
  return a;
}
function s(t) {
  let n = e(t),
    r = new Date(
      Date.UTC(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
        n.getHours(),
        n.getMinutes(),
        n.getSeconds(),
        n.getMilliseconds(),
      ),
    );
  return (r.setUTCFullYear(n.getFullYear()), t - +r);
}
function c(t, n) {
  let r = e(t),
    i = e(n),
    a = r.getTime() - i.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function l(e) {
  return t(e, Date.now());
}
function u(t, n) {
  let r = e(t),
    i = e(n),
    a = r.getFullYear() - i.getFullYear(),
    o = r.getMonth() - i.getMonth();
  return a * 12 + o;
}
function d(e) {
  return (t) => {
    let n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function f(t, n) {
  return e(t) - +e(n);
}
function p(t) {
  let n = e(t);
  return (n.setHours(23, 59, 59, 999), n);
}
function m(t) {
  let n = e(t),
    r = n.getMonth();
  return (
    n.setFullYear(n.getFullYear(), r + 1, 0),
    n.setHours(23, 59, 59, 999),
    n
  );
}
function h(t) {
  let n = e(t);
  return +p(n) == +m(n);
}
function g(t, n) {
  let r = e(t),
    i = e(n),
    a = c(r, i),
    o = Math.abs(u(r, i)),
    s;
  if (o < 1) s = 0;
  else {
    (r.getMonth() === 1 && r.getDate() > 27 && r.setDate(30),
      r.setMonth(r.getMonth() - a * o));
    let n = c(r, i) === -a;
    (h(e(t)) && o === 1 && c(t, i) === 1 && (n = !1),
      (s = a * (o - Number(n))));
  }
  return s === 0 ? 0 : s;
}
function _(e, t, n) {
  let r = f(e, t) / 1e3;
  return d(n?.roundingMethod)(r);
}
var v = {
    lessThanXSeconds: {
      one: `less than a second`,
      other: `less than {{count}} seconds`,
    },
    xSeconds: { one: `1 second`, other: `{{count}} seconds` },
    halfAMinute: `half a minute`,
    lessThanXMinutes: {
      one: `less than a minute`,
      other: `less than {{count}} minutes`,
    },
    xMinutes: { one: `1 minute`, other: `{{count}} minutes` },
    aboutXHours: { one: `about 1 hour`, other: `about {{count}} hours` },
    xHours: { one: `1 hour`, other: `{{count}} hours` },
    xDays: { one: `1 day`, other: `{{count}} days` },
    aboutXWeeks: { one: `about 1 week`, other: `about {{count}} weeks` },
    xWeeks: { one: `1 week`, other: `{{count}} weeks` },
    aboutXMonths: { one: `about 1 month`, other: `about {{count}} months` },
    xMonths: { one: `1 month`, other: `{{count}} months` },
    aboutXYears: { one: `about 1 year`, other: `about {{count}} years` },
    xYears: { one: `1 year`, other: `{{count}} years` },
    overXYears: { one: `over 1 year`, other: `over {{count}} years` },
    almostXYears: { one: `almost 1 year`, other: `almost {{count}} years` },
  },
  y = (e, t, n) => {
    let r,
      i = v[e];
    return (
      (r =
        typeof i == `string`
          ? i
          : t === 1
            ? i.one
            : i.other.replace(`{{count}}`, t.toString())),
      n?.addSuffix
        ? n.comparison && n.comparison > 0
          ? `in ` + r
          : r + ` ago`
        : r
    );
  };
function b(e) {
  return (t = {}) => {
    let n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
var x = {
    date: b({
      formats: {
        full: `EEEE, MMMM do, y`,
        long: `MMMM do, y`,
        medium: `MMM d, y`,
        short: `MM/dd/yyyy`,
      },
      defaultWidth: `full`,
    }),
    time: b({
      formats: {
        full: `h:mm:ss a zzzz`,
        long: `h:mm:ss a z`,
        medium: `h:mm:ss a`,
        short: `h:mm a`,
      },
      defaultWidth: `full`,
    }),
    dateTime: b({
      formats: {
        full: `{{date}} 'at' {{time}}`,
        long: `{{date}} 'at' {{time}}`,
        medium: `{{date}}, {{time}}`,
        short: `{{date}}, {{time}}`,
      },
      defaultWidth: `full`,
    }),
  },
  S = {
    lastWeek: `'last' eeee 'at' p`,
    yesterday: `'yesterday at' p`,
    today: `'today at' p`,
    tomorrow: `'tomorrow at' p`,
    nextWeek: `eeee 'at' p`,
    other: `P`,
  },
  C = (e, t, n, r) => S[e];
function w(e) {
  return (t, n) => {
    let r = n?.context ? String(n.context) : `standalone`,
      i;
    if (r === `formatting` && e.formattingValues) {
      let t = e.defaultFormattingWidth || e.defaultWidth,
        r = n?.width ? String(n.width) : t;
      i = e.formattingValues[r] || e.formattingValues[t];
    } else {
      let t = e.defaultWidth,
        r = n?.width ? String(n.width) : e.defaultWidth;
      i = e.values[r] || e.values[t];
    }
    let a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
