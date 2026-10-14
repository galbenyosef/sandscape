// Create-ea24k1TY 91 — slice
// Lines 28876-29225 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function nw(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = lw(i),
    u = uw(i),
    d = lw(a),
    f = uw(a),
    p = lw(o),
    m = uw(o),
    h = lw(s),
    g = uw(s),
    _ = lw(c),
    v = uw(c),
    y = {
      a: N,
      A: P,
      b: F,
      B: I,
      c: null,
      d: jw,
      e: jw,
      f: Iw,
      g: qw,
      G: Yw,
      H: Mw,
      I: Nw,
      j: Pw,
      L: Fw,
      m: Lw,
      M: Rw,
      p: L,
      q: R,
      Q: vT,
      s: yT,
      S: zw,
      u: Bw,
      U: Vw,
      V: Uw,
      w: Ww,
      W: Gw,
      x: null,
      X: null,
      y: Kw,
      Y: Jw,
      Z: Xw,
      "%": _T,
    },
    b = {
      a: z,
      A: B,
      b: V,
      B: H,
      c: null,
      d: Zw,
      e: Zw,
      f: nT,
      g: pT,
      G: hT,
      H: Qw,
      I: $w,
      j: eT,
      L: tT,
      m: rT,
      M: iT,
      p: U,
      q: ee,
      Q: vT,
      s: yT,
      S: aT,
      u: oT,
      U: sT,
      V: lT,
      w: uT,
      W: dT,
      x: null,
      X: null,
      y: fT,
      Y: mT,
      Z: gT,
      "%": _T,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: xw,
      e: xw,
      f: Dw,
      g: _w,
      G: gw,
      H: Cw,
      I: Cw,
      j: Sw,
      L: Ew,
      m: bw,
      M: ww,
      p: T,
      q: yw,
      Q: kw,
      s: Aw,
      S: Tw,
      u: fw,
      U: pw,
      V: mw,
      w: dw,
      W: hw,
      x: j,
      X: M,
      y: _w,
      Y: gw,
      Z: vw,
      "%": Ow,
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
          (c = rw[(s = e.charAt(++i))]) == null
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
      var r = tw(1900, void 0, 1),
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
            ? ((a = ew(tw(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? RC.ceil(a) : RC(a)),
              (a = EC.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = $C(tw(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? AC.ceil(a) : AC(a)),
              (a = TC.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? ew(tw(r.y, 0, 1)).getUTCDay()
              : $C(tw(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), ew(r))
        : $C(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in rw ? t.charAt(i++) : s]),
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
  function U(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function ee(e) {
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
var rw = { "-": ``, _: ` `, 0: `0` },
  iw = /^\s*\d+/,
  aw = /^%/,
  ow = /[\\^$*+?|[\]().{}]/g;
function sw(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function cw(e) {
  return e.replace(ow, `\\$&`);
}
function lw(e) {
  return RegExp(`^(?:` + e.map(cw).join(`|`) + `)`, `i`);
}
function uw(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function dw(e, t, n) {
  var r = iw.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function fw(e, t, n) {
  var r = iw.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function pw(e, t, n) {
  var r = iw.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function mw(e, t, n) {
  var r = iw.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
