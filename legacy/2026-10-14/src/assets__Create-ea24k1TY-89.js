// assets__Create-ea24k1TY 89 — math
// Lines 28204-28525 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function GS(e) {
  let t = e(LS, RS),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = US(r)),
      (a = HS(r)),
      n()[0] < 0 ? ((i = WS(i)), (a = WS(a)), e(zS, BS)) : e(LS, RS),
      t
    );
  }
  return (
    (t.base = function (e) {
      return arguments.length ? ((r = +e), o()) : r;
    }),
    (t.domain = function (e) {
      return arguments.length ? (n(e), o()) : n();
    }),
    (t.ticks = (e) => {
      let t = n(),
        o = t[0],
        s = t[t.length - 1],
        c = s < o;
      c && ([o, s] = [s, o]);
      let l = i(o),
        u = i(s),
        d,
        f,
        p = e == null ? 10 : +e,
        m = [];
      if (!(r % 1) && u - l < p) {
        if (((l = Math.floor(l)), (u = Math.ceil(u)), o > 0)) {
          for (; l <= u; ++l)
            for (d = 1; d < r; ++d)
              if (((f = l < 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        } else
          for (; l <= u; ++l)
            for (d = r - 1; d >= 1; --d)
              if (((f = l > 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        m.length * 2 < p && (m = Cb(o, s, p));
      } else m = Cb(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = mS(n)).precision == null && (n.trim = !0),
          (n = ES(n))),
        e === 1 / 0)
      )
        return n;
      let o = Math.max(1, (r * e) / t.ticks().length);
      return (e) => {
        let t = e / a(Math.round(i(e)));
        return (t * r < r - 0.5 && (t *= r), t <= o ? n(e) : ``);
      };
    }),
    (t.nice = () =>
      n(
        IS(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function KS() {
  let e = GS(oS()).domain([1, 10]);
  return (
    (e.copy = () => aS(e, KS()).base(e.base())),
    Ab.apply(e, arguments),
    e
  );
}
function qS(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function JS(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function YS(e) {
  var t = 1,
    n = e(qS(t), JS(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(qS((t = +n)), JS(t)) : t;
    }),
    NS(n)
  );
}
function XS() {
  var e = YS(oS());
  return (
    (e.copy = function () {
      return aS(e, XS()).constant(e.constant());
    }),
    Ab.apply(e, arguments)
  );
}
function ZS(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function QS(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function $S(e) {
  return e < 0 ? -e * e : e * e;
}
function eC(e) {
  var t = e(eS, eS),
    n = 1;
  function r() {
    return n === 1 ? e(eS, eS) : n === 0.5 ? e(QS, $S) : e(ZS(n), ZS(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    NS(t)
  );
}
function tC() {
  var e = eC(oS());
  return (
    (e.copy = function () {
      return aS(e, tC()).exponent(e.exponent());
    }),
    Ab.apply(e, arguments),
    e
  );
}
function nC() {
  return tC.apply(null, arguments).exponent(0.5);
}
function rC(e) {
  return Math.sign(e) * e * e;
}
function iC(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function aC() {
  var e = sS(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = iC(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(rC(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, Qx)).map(rC)), i)
        : t.slice();
    }),
    (i.rangeRound = function (e) {
      return i.range(e).round(!0);
    }),
    (i.round = function (e) {
      return arguments.length ? ((n = !!e), i) : n;
    }),
    (i.clamp = function (t) {
      return arguments.length ? (e.clamp(t), i) : e.clamp();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return aC(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    Ab.apply(i, arguments),
    NS(i)
  );
}
function oC() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = Xae(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[vb(n, e)];
  }
  return (
    (a.invertExtent = function (r) {
      var i = t.indexOf(r);
      return i < 0
        ? [NaN, NaN]
        : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
    }),
    (a.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(mb), i());
    }),
    (a.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), i()) : t.slice();
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((r = e), a) : r;
    }),
    (a.quantiles = function () {
      return n.slice();
    }),
    (a.copy = function () {
      return oC().domain(e).range(t).unknown(r);
    }),
    Ab.apply(a, arguments)
  );
}
function sC() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[vb(r, e, 0, n)] : a;
  }
  function s() {
    var i = -1;
    for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
    return o;
  }
  return (
    (o.domain = function (n) {
      return arguments.length
        ? (([e, t] = n), (e = +e), (t = +t), s())
        : [e, t];
    }),
    (o.range = function (e) {
      return arguments.length
        ? ((n = (i = Array.from(e)).length - 1), s())
        : i.slice();
    }),
    (o.invertExtent = function (a) {
      var o = i.indexOf(a);
      return o < 0
        ? [NaN, NaN]
        : o < 1
          ? [e, r[0]]
          : o >= n
            ? [r[n - 1], t]
            : [r[o - 1], r[o]];
    }),
    (o.unknown = function (e) {
      return (arguments.length && (a = e), o);
    }),
    (o.thresholds = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return sC().domain([e, t]).range(i).unknown(a);
    }),
    Ab.apply(NS(o), arguments)
  );
}
function cC() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[vb(e, i, 0, r)] : n;
  }
  return (
    (i.domain = function (n) {
      return arguments.length
        ? ((e = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (n) {
      return arguments.length
        ? ((t = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (n) {
      var r = t.indexOf(n);
      return [e[r - 1], e[r]];
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((n = e), i) : n;
    }),
    (i.copy = function () {
      return cC().domain(e).range(t).unknown(n);
    }),
    Ab.apply(i, arguments)
  );
}
var lC = new Date(),
  uC = new Date();
