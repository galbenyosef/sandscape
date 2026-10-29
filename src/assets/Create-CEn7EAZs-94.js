// Create-CEn7EAZs 94 — exec
// Lines 29999-30342 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Zie(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function JT(e, t, n) {
  var r = WT.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function YT(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function Qie(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function $ie(e, t, n) {
  var r = WT.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function eae(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function XT(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function tae(e, t, n) {
  var r = WT.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function ZT(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function nae(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function rae(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function iae(e, t, n) {
  var r = WT.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function aae(e, t, n) {
  var r = WT.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function oae(e, t, n) {
  var r = Wie.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function sae(e, t, n) {
  var r = WT.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function cae(e, t, n) {
  var r = WT.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function QT(e, t) {
  return GT(e.getDate(), t, 2);
}
function lae(e, t) {
  return GT(e.getHours(), t, 2);
}
function uae(e, t) {
  return GT(e.getHours() % 12 || 12, t, 2);
}
function dae(e, t) {
  return GT(1 + wT.count(LT(e), e), t, 3);
}
function $T(e, t) {
  return GT(e.getMilliseconds(), t, 3);
}
function fae(e, t) {
  return $T(e, t) + `000`;
}
function pae(e, t) {
  return GT(e.getMonth() + 1, t, 2);
}
function mae(e, t) {
  return GT(e.getMinutes(), t, 2);
}
function hae(e, t) {
  return GT(e.getSeconds(), t, 2);
}
function gae(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function _ae(e, t) {
  return GT(OT.count(LT(e) - 1, e), t, 2);
}
function eE(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? AT(e) : AT.ceil(e);
}
function vae(e, t) {
  return ((e = eE(e)), GT(AT.count(LT(e), e) + (LT(e).getDay() === 4), t, 2));
}
function yae(e) {
  return e.getDay();
}
function bae(e, t) {
  return GT(kT.count(LT(e) - 1, e), t, 2);
}
function xae(e, t) {
  return GT(e.getFullYear() % 100, t, 2);
}
function Sae(e, t) {
  return ((e = eE(e)), GT(e.getFullYear() % 100, t, 2));
}
function Cae(e, t) {
  return GT(e.getFullYear() % 1e4, t, 4);
}
function wae(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? AT(e) : AT.ceil(e)),
    GT(e.getFullYear() % 1e4, t, 4)
  );
}
function Tae(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    GT((t / 60) | 0, `0`, 2) +
    GT(t % 60, `0`, 2)
  );
}
function tE(e, t) {
  return GT(e.getUTCDate(), t, 2);
}
function Eae(e, t) {
  return GT(e.getUTCHours(), t, 2);
}
function Dae(e, t) {
  return GT(e.getUTCHours() % 12 || 12, t, 2);
}
function Oae(e, t) {
  return GT(1 + TT.count(RT(e), e), t, 3);
}
function nE(e, t) {
  return GT(e.getUTCMilliseconds(), t, 3);
}
function kae(e, t) {
  return nE(e, t) + `000`;
}
function Aae(e, t) {
  return GT(e.getUTCMonth() + 1, t, 2);
}
function jae(e, t) {
  return GT(e.getUTCMinutes(), t, 2);
}
function Mae(e, t) {
  return GT(e.getUTCSeconds(), t, 2);
}
function Nae(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Pae(e, t) {
  return GT(MT.count(RT(e) - 1, e), t, 2);
}
function rE(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? PT(e) : PT.ceil(e);
}
function Fae(e, t) {
  return (
    (e = rE(e)),
    GT(PT.count(RT(e), e) + (RT(e).getUTCDay() === 4), t, 2)
  );
}
function Iae(e) {
  return e.getUTCDay();
}
function Lae(e, t) {
  return GT(NT.count(RT(e) - 1, e), t, 2);
}
function Rae(e, t) {
  return GT(e.getUTCFullYear() % 100, t, 2);
}
function zae(e, t) {
  return ((e = rE(e)), GT(e.getUTCFullYear() % 100, t, 2));
}
function Bae(e, t) {
  return GT(e.getUTCFullYear() % 1e4, t, 4);
}
function Vae(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? PT(e) : PT.ceil(e)),
    GT(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Hae() {
  return `+0000`;
}
function iE() {
  return `%`;
}
function aE(e) {
  return +e;
}
function oE(e) {
  return Math.floor(e / 1e3);
}
var sE, cE, lE;
Uae({
  dateTime: `%x, %X`,
  date: `%-m/%-d/%Y`,
  time: `%-I:%M:%S %p`,
  periods: [`AM`, `PM`],
  days: [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ],
  shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
  months: [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ],
  shortMonths: [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ],
});
function Uae(e) {
  return (
    (sE = Uie(e)),
    (cE = sE.format),
    sE.parse,
    (lE = sE.utcFormat),
    sE.utcParse,
    sE
  );
}
function Wae(e) {
  return new Date(e);
}
function Gae(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function uE(e, t, n, r, i, a, o, s, c, l) {
  var u = yw(),
    d = u.invert,
    f = u.domain,
    p = l(`.%L`),
    m = l(`:%S`),
    h = l(`%I:%M`),
    g = l(`%I %p`),
    _ = l(`%a %d`),
    v = l(`%b %d`),
    y = l(`%B`),
    b = l(`%Y`);
  function x(e) {
    return (
      c(e) < e
        ? p
        : s(e) < e
          ? m
          : o(e) < e
            ? h
            : a(e) < e
              ? g
              : r(e) < e
                ? i(e) < e
                  ? _
                  : v
                : n(e) < e
                  ? y
                  : b
    )(e);
  }
  return (
    (u.invert = function (e) {
      return new Date(d(e));
    }),
    (u.domain = function (e) {
      return arguments.length ? f(Array.from(e, Gae)) : f().map(Wae);
    }),
    (u.ticks = function (t) {
      var n = f();
      return e(n[0], n[n.length - 1], t ?? 10);
    }),
    (u.tickFormat = function (e, t) {
      return t == null ? x : l(t);
    }),
    (u.nice = function (e) {
      var n = f();
      return (
        (!e || typeof e.range != `function`) &&
          (e = t(n[0], n[n.length - 1], e ?? 10)),
        e ? f(Ww(n, e)) : u
      );
    }),
    (u.copy = function () {
      return _w(u, uE(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function Kae() {
  return HS.apply(
    uE(Vie, Hie, LT, FT, OT, wT, ST, bT, yT, cE).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
