// Create-CEn7EAZs 95 — copy
// Lines 30343-30588 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function qae() {
  return HS.apply(
    uE(zie, Bie, RT, IT, MT, TT, CT, xT, yT, lE).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function dE() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = fw,
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
    (l.range = u(ZC)),
    (l.rangeRound = u(QC)),
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
function fE(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function pE() {
  var e = Vw(dE()(fw));
  return (
    (e.copy = function () {
      return fE(e, pE());
    }),
    US.apply(e, arguments)
  );
}
function mE() {
  var e = Jw(dE()).domain([1, 10]);
  return (
    (e.copy = function () {
      return fE(e, mE()).base(e.base());
    }),
    US.apply(e, arguments)
  );
}
function hE() {
  var e = Qw(dE());
  return (
    (e.copy = function () {
      return fE(e, hE()).constant(e.constant());
    }),
    US.apply(e, arguments)
  );
}
function gE() {
  var e = tT(dE());
  return (
    (e.copy = function () {
      return fE(e, gE()).exponent(e.exponent());
    }),
    US.apply(e, arguments)
  );
}
function Jae() {
  return gE.apply(null, arguments).exponent(0.5);
}
function _E() {
  var e = [],
    t = fw;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((bS(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(pS), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => zS(e, r / t));
    }),
    (n.copy = function () {
      return _E(t).domain(e);
    }),
    US.apply(n, arguments)
  );
}
function vE() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = fw,
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
        ? (([n, r, i] = t), (l = cw(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(ZC)),
    (p.rangeRound = m(QC)),
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
function yE() {
  var e = Vw(vE()(fw));
  return (
    (e.copy = function () {
      return fE(e, yE());
    }),
    US.apply(e, arguments)
  );
}
function bE() {
  var e = Jw(vE()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return fE(e, bE()).base(e.base());
    }),
    US.apply(e, arguments)
  );
}
function xE() {
  var e = Qw(vE());
  return (
    (e.copy = function () {
      return fE(e, xE()).constant(e.constant());
    }),
    US.apply(e, arguments)
  );
}
function SE() {
  var e = tT(vE());
  return (
    (e.copy = function () {
      return fE(e, SE()).exponent(e.exponent());
    }),
    US.apply(e, arguments)
  );
}
function Yae() {
  return SE.apply(null, arguments).exponent(0.5);
}
