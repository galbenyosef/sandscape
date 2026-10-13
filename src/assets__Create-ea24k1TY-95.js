// assets__Create-ea24k1TY 95 — math
// Lines 30900-31249 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function $T(e) {
  return rE(e) || nE(e) || tE(e) || eE();
}
function eE() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tE(e, t) {
  if (e) {
    if (typeof e == `string`) return iE(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return iE(e, t);
  }
}
function nE(e) {
  if (typeof Symbol < `u` && Symbol.iterator in Object(e)) return Array.from(e);
}
function rE(e) {
  if (Array.isArray(e)) return iE(e);
}
function iE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var aE = function (e) {
    return e;
  },
  oE = { "@@functional/placeholder": !0 },
  sE = function (e) {
    return e === oE;
  },
  cE = function (e) {
    return function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          sE(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e.apply(void 0, arguments);
    };
  },
  lE = function e(t, n) {
    return t === 1
      ? n
      : cE(function () {
          var r = [...arguments],
            i = r.filter(function (e) {
              return e !== oE;
            }).length;
          return i >= t
            ? n.apply(void 0, r)
            : e(
                t - i,
                cE(function () {
                  var e = [...arguments],
                    t = r.map(function (t) {
                      return sE(t) ? e.shift() : t;
                    });
                  return n.apply(void 0, $T(t).concat(e));
                }),
              );
        });
  },
  uE = function (e) {
    return lE(e.length, e);
  },
  dE = function (e, t) {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  fE = uE(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (e) {
            return t[e];
          })
          .map(e);
  }),
  pE = function () {
    var e = [...arguments];
    if (!e.length) return aE;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce(
        function (e, t) {
          return t(e);
        },
        n.apply(void 0, arguments),
      );
    };
  },
  mE = function (e) {
    return Array.isArray(e) ? e.reverse() : e.split(``).reverse.join(``);
  },
  hE = function (e) {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return t &&
        r.every(function (e, n) {
          return e === t[n];
        })
        ? n
        : ((t = r), (n = e.apply(void 0, r)), n);
    };
  },
  gE = e(QT());
function _E(e) {
  return e === 0
    ? 1
    : Math.floor(new gE.default(e).abs().log(10).toNumber()) + 1;
}
function vE(e, t, n) {
  for (var r = new gE.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
var yE = {
  rangeStep: vE,
  getDigitCount: _E,
  interpolateNumber: uE(function (e, t, n) {
    var r = +e;
    return r + n * (+t - r);
  }),
  uninterpolateNumber: uE(function (e, t, n) {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  uninterpolateTruncation: uE(function (e, t, n) {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }),
};
function bE(e) {
  return CE(e) || SE(e) || EE(e) || xE();
}
function xE() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SE(e) {
  if (typeof Symbol < `u` && Symbol.iterator in Object(e)) return Array.from(e);
}
function CE(e) {
  if (Array.isArray(e)) return DE(e);
}
function wE(e, t) {
  return kE(e) || OE(e, t) || EE(e, t) || TE();
}
function TE() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EE(e, t) {
  if (e) {
    if (typeof e == `string`) return DE(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return DE(e, t);
  }
}
function DE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function OE(e, t) {
  if (!(typeof Symbol > `u` || !(Symbol.iterator in Object(e)))) {
    var n = [],
      r = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t));
        r = !0
      );
    } catch (e) {
      ((i = !0), (a = e));
    } finally {
      try {
        !r && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function kE(e) {
  if (Array.isArray(e)) return e;
}
function AE(e) {
  var t = wE(e, 2),
    n = t[0],
    r = t[1],
    i = n,
    a = r;
  return (n > r && ((i = r), (a = n)), [i, a]);
}
function jE(e, t, n) {
  if (e.lte(0)) return new gE.default(0);
  var r = yE.getDigitCount(e.toNumber()),
    i = new gE.default(10).pow(r),
    a = e.div(i),
    o = r === 1 ? 0.1 : 0.05,
    s = new gE.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
  return t ? s : new gE.default(Math.ceil(s));
}
function Qae(e, t, n) {
  var r = 1,
    i = new gE.default(e);
  if (!i.isint() && n) {
    var a = Math.abs(e);
    a < 1
      ? ((r = new gE.default(10).pow(yE.getDigitCount(e) - 1)),
        (i = new gE.default(Math.floor(i.div(r).toNumber())).mul(r)))
      : a > 1 && (i = new gE.default(Math.floor(e)));
  } else
    e === 0
      ? (i = new gE.default(Math.floor((t - 1) / 2)))
      : n || (i = new gE.default(Math.floor(e)));
  var o = Math.floor((t - 1) / 2);
  return pE(
    fE(function (e) {
      return i.add(new gE.default(e - o).mul(r)).toNumber();
    }),
    dE,
  )(0, t);
}
function ME(e, t, n, r) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (n - 1)))
    return {
      step: new gE.default(0),
      tickMin: new gE.default(0),
      tickMax: new gE.default(0),
    };
  var a = jE(new gE.default(t).sub(e).div(n - 1), r, i),
    o;
  e <= 0 && t >= 0
    ? (o = new gE.default(0))
    : ((o = new gE.default(e).add(t).div(2)),
      (o = o.sub(new gE.default(o).mod(a))));
  var s = Math.ceil(o.sub(e).div(a).toNumber()),
    c = Math.ceil(new gE.default(t).sub(o).div(a).toNumber()),
    l = s + c + 1;
  return l > n
    ? ME(e, t, n, r, i + 1)
    : (l < n && ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
      {
        step: a,
        tickMin: o.sub(new gE.default(s).mul(a)),
        tickMax: o.add(new gE.default(c).mul(a)),
      });
}
function $ae(e) {
  var t = wE(e, 2),
    n = t[0],
    r = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    s = wE(AE([n, r]), 2),
    c = s[0],
    l = s[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var u =
      l === 1 / 0
        ? [c].concat(
            bE(
              dE(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            bE(
              dE(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [l],
          );
    return n > r ? mE(u) : u;
  }
  if (c === l) return Qae(c, i, a);
  var d = ME(c, l, o, a),
    f = d.step,
    p = d.tickMin,
    m = d.tickMax,
    h = yE.rangeStep(p, m.add(new gE.default(0.1).mul(f)), f);
  return n > r ? mE(h) : h;
}
function eoe(e, t) {
  var n = wE(e, 2),
    r = n[0],
    i = n[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = wE(AE([r, i]), 2),
    s = o[0],
    c = o[1];
  if (s === -1 / 0 || c === 1 / 0) return [r, i];
  if (s === c) return [s];
  var l = Math.max(t, 2),
    u = jE(new gE.default(c).sub(s).div(l - 1), a, 0),
    d = [].concat(
      bE(
        yE.rangeStep(
          new gE.default(s),
          new gE.default(c).sub(new gE.default(0.99).mul(u)),
          u,
        ),
      ),
      [c],
    );
  return r > i ? mE(d) : d;
}
var toe = hE($ae),
  noe = hE(eoe),
  roe = `Invariant failed`;
function NE(e, t) {
  if (!e) throw Error(roe);
}
var ioe = [
  `offset`,
  `layout`,
  `width`,
  `dataKey`,
  `data`,
  `dataPointFormatter`,
  `xAxis`,
  `yAxis`,
];
