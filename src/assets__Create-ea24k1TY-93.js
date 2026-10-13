// assets__Create-ea24k1TY 93 — copy
// Lines 29570-29815 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function OT() {
  return Ab.apply(
    ET(YC, XC, qC, GC, LC, EC, wC, SC, bC, ST).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function kT() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = eS,
    s = !1,
    c;
  function l(e) {
    return e == null || isNaN((e = +e))
      ? c
      : o(
          i === 0
            ? 0.5
            : ((e = (a(e) - n) * i), s ? Math.max(0, Math.min(1, e)) : e),
        );
  }
  ((l.domain = function (o) {
    return arguments.length
      ? (([e, t] = o),
        (n = a((e = +e))),
        (r = a((t = +t))),
        (i = n === r ? 0 : 1 / (r - n)),
        l)
      : [e, t];
  }),
    (l.clamp = function (e) {
      return arguments.length ? ((s = !!e), l) : s;
    }),
    (l.interpolator = function (e) {
      return arguments.length ? ((o = e), l) : o;
    }));
  function u(e) {
    return function (t) {
      var n, r;
      return arguments.length ? (([n, r] = t), (o = e(n, r)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = u(zx)),
    (l.rangeRound = u(Bx)),
    (l.unknown = function (e) {
      return arguments.length ? ((c = e), l) : c;
    }),
    function (o) {
      return (
        (a = o),
        (n = o(e)),
        (r = o(t)),
        (i = n === r ? 0 : 1 / (r - n)),
        l
      );
    }
  );
}
function AT(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function jT() {
  var e = NS(kT()(eS));
  return (
    (e.copy = function () {
      return AT(e, jT());
    }),
    jb.apply(e, arguments)
  );
}
function MT() {
  var e = GS(kT()).domain([1, 10]);
  return (
    (e.copy = function () {
      return AT(e, MT()).base(e.base());
    }),
    jb.apply(e, arguments)
  );
}
function NT() {
  var e = YS(kT());
  return (
    (e.copy = function () {
      return AT(e, NT()).constant(e.constant());
    }),
    jb.apply(e, arguments)
  );
}
function PT() {
  var e = eC(kT());
  return (
    (e.copy = function () {
      return AT(e, PT()).exponent(e.exponent());
    }),
    jb.apply(e, arguments)
  );
}
function FT() {
  return PT.apply(null, arguments).exponent(0.5);
}
function IT() {
  var e = [],
    t = eS;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((vb(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(mb), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => Yae(e, r / t));
    }),
    (n.copy = function () {
      return IT(t).domain(e);
    }),
    jb.apply(n, arguments)
  );
}
function LT() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = eS,
    u,
    d = !1,
    f;
  function p(e) {
    return isNaN((e = +e))
      ? f
      : ((e = 0.5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c)),
        l(d ? Math.max(0, Math.min(1, e)) : e));
  }
  ((p.domain = function (l) {
    return arguments.length
      ? (([e, t, n] = l),
        (i = u((e = +e))),
        (a = u((t = +t))),
        (o = u((n = +n))),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p)
      : [e, t, n];
  }),
    (p.clamp = function (e) {
      return arguments.length ? ((d = !!e), p) : d;
    }),
    (p.interpolator = function (e) {
      return arguments.length ? ((l = e), p) : l;
    }));
  function m(e) {
    return function (t) {
      var n, r, i;
      return arguments.length
        ? (([n, r, i] = t), (l = Xx(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(zx)),
    (p.rangeRound = m(Bx)),
    (p.unknown = function (e) {
      return arguments.length ? ((f = e), p) : f;
    }),
    function (l) {
      return (
        (u = l),
        (i = l(e)),
        (a = l(t)),
        (o = l(n)),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p
      );
    }
  );
}
function RT() {
  var e = NS(LT()(eS));
  return (
    (e.copy = function () {
      return AT(e, RT());
    }),
    jb.apply(e, arguments)
  );
}
function zT() {
  var e = GS(LT()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return AT(e, zT()).base(e.base());
    }),
    jb.apply(e, arguments)
  );
}
function BT() {
  var e = YS(LT());
  return (
    (e.copy = function () {
      return AT(e, BT()).constant(e.constant());
    }),
    jb.apply(e, arguments)
  );
}
function VT() {
  var e = eC(LT());
  return (
    (e.copy = function () {
      return AT(e, VT()).exponent(e.exponent());
    }),
    jb.apply(e, arguments)
  );
}
function HT() {
  return VT.apply(null, arguments).exponent(0.5);
}
