// Create-CEn7EAZs 93 — slice
// Lines 29649-29998 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Uie(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = KT(i),
    u = qT(i),
    d = KT(a),
    f = qT(a),
    p = KT(o),
    m = qT(o),
    h = KT(s),
    g = qT(s),
    _ = KT(c),
    v = qT(c),
    y = {
      a: N,
      A: P,
      b: F,
      B: I,
      c: null,
      d: QT,
      e: QT,
      f: fae,
      g: Sae,
      G: wae,
      H: lae,
      I: uae,
      j: dae,
      L: $T,
      m: pae,
      M: mae,
      p: L,
      q: R,
      Q: aE,
      s: oE,
      S: hae,
      u: gae,
      U: _ae,
      V: vae,
      w: yae,
      W: bae,
      x: null,
      X: null,
      y: xae,
      Y: Cae,
      Z: Tae,
      "%": iE,
    },
    b = {
      a: z,
      A: B,
      b: V,
      B: H,
      c: null,
      d: tE,
      e: tE,
      f: kae,
      g: zae,
      G: Vae,
      H: Eae,
      I: Dae,
      j: Oae,
      L: nE,
      m: Aae,
      M: jae,
      p: ee,
      q: te,
      Q: aE,
      s: oE,
      S: Mae,
      u: Nae,
      U: Pae,
      V: Fae,
      w: Iae,
      W: Lae,
      x: null,
      X: null,
      y: Rae,
      Y: Bae,
      Z: Hae,
      "%": iE,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: XT,
      e: XT,
      f: aae,
      g: YT,
      G: JT,
      H: ZT,
      I: ZT,
      j: tae,
      L: iae,
      m: eae,
      M: nae,
      p: T,
      q: $ie,
      Q: sae,
      s: cae,
      S: rae,
      u: Jie,
      U: Yie,
      V: Xie,
      w: qie,
      W: Zie,
      x: j,
      X: M,
      y: YT,
      Y: JT,
      Z: Qie,
      "%": oae,
    };
  ((y.x = S(n, y)),
    (y.X = S(r, y)),
    (y.c = S(t, y)),
    (b.x = S(n, b)),
    (b.X = S(r, b)),
    (b.c = S(t, b)));
  function S(e, t) {
    return function (n) {
      var r = [],
        i = -1,
        a = 0,
        o = e.length,
        s,
        c,
        l;
      for (n instanceof Date || (n = new Date(+n)); ++i < o;)
        e.charCodeAt(i) === 37 &&
          (r.push(e.slice(a, i)),
          (c = UT[(s = e.charAt(++i))]) == null
            ? (c = s === `e` ? ` ` : `0`)
            : (s = e.charAt(++i)),
          (l = t[s]) && (s = l(n, c)),
          r.push(s),
          (a = i + 1));
      return (r.push(e.slice(a, i)), r.join(``));
    };
  }
  function C(e, t) {
    return function (n) {
      var r = HT(1900, void 0, 1),
        i = w(r, e, (n += ``), 0),
        a,
        o;
      if (i != n.length) return null;
      if (`Q` in r) return new Date(r.Q);
      if (`s` in r) return new Date(r.s * 1e3 + (`L` in r ? r.L : 0));
      if (
        (t && !(`Z` in r) && (r.Z = 0),
        `p` in r && (r.H = (r.H % 12) + r.p * 12),
        r.m === void 0 && (r.m = `q` in r ? r.q : 0),
        `V` in r)
      ) {
        if (r.V < 1 || r.V > 53) return null;
        (`w` in r || (r.w = 1),
          `Z` in r
            ? ((a = VT(HT(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? NT.ceil(a) : NT(a)),
              (a = TT.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = BT(HT(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? kT.ceil(a) : kT(a)),
              (a = wT.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? VT(HT(r.y, 0, 1)).getUTCDay()
              : BT(HT(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), VT(r))
        : BT(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in UT ? t.charAt(i++) : s]),
          !c || (r = c(e, n, r)) < 0)
        )
          return -1;
      } else if (s != n.charCodeAt(r++)) return -1;
    }
    return r;
  }
  function T(e, t, n) {
    var r = l.exec(t.slice(n));
    return r ? ((e.p = u.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function E(e, t, n) {
    var r = p.exec(t.slice(n));
    return r ? ((e.w = m.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function D(e, t, n) {
    var r = d.exec(t.slice(n));
    return r ? ((e.w = f.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function O(e, t, n) {
    var r = _.exec(t.slice(n));
    return r ? ((e.m = v.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function k(e, t, n) {
    var r = h.exec(t.slice(n));
    return r ? ((e.m = g.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function A(e, n, r) {
    return w(e, t, n, r);
  }
  function j(e, t, r) {
    return w(e, n, t, r);
  }
  function M(e, t, n) {
    return w(e, r, t, n);
  }
  function N(e) {
    return o[e.getDay()];
  }
  function P(e) {
    return a[e.getDay()];
  }
  function F(e) {
    return c[e.getMonth()];
  }
  function I(e) {
    return s[e.getMonth()];
  }
  function L(e) {
    return i[+(e.getHours() >= 12)];
  }
  function R(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function z(e) {
    return o[e.getUTCDay()];
  }
  function B(e) {
    return a[e.getUTCDay()];
  }
  function V(e) {
    return c[e.getUTCMonth()];
  }
  function H(e) {
    return s[e.getUTCMonth()];
  }
  function ee(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function te(e) {
    return 1 + ~~(e.getUTCMonth() / 3);
  }
  return {
    format: function (e) {
      var t = S((e += ``), y);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    parse: function (e) {
      var t = C((e += ``), !1);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcFormat: function (e) {
      var t = S((e += ``), b);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcParse: function (e) {
      var t = C((e += ``), !0);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
  };
}
var UT = { "-": ``, _: ` `, 0: `0` },
  WT = /^\s*\d+/,
  Wie = /^%/,
  Gie = /[\\^$*+?|[\]().{}]/g;
function GT(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Kie(e) {
  return e.replace(Gie, `\\$&`);
}
function KT(e) {
  return RegExp(`^(?:` + e.map(Kie).join(`|`) + `)`, `i`);
}
function qT(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function qie(e, t, n) {
  var r = WT.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function Jie(e, t, n) {
  var r = WT.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function Yie(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function Xie(e, t, n) {
  var r = WT.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
