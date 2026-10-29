// Create-CEn7EAZs 97 — math
// Lines 31673-32022 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function noe(e) {
  return ooe(e) || aoe(e) || ioe(e) || roe();
}
function roe() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ioe(e, t) {
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
function aoe(e) {
  if (typeof Symbol < `u` && Symbol.iterator in Object(e)) return Array.from(e);
}
function ooe(e) {
  if (Array.isArray(e)) return DE(e);
}
function DE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var soe = function (e) {
    return e;
  },
  OE = { "@@functional/placeholder": !0 },
  kE = function (e) {
    return e === OE;
  },
  AE = function (e) {
    return function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          kE(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e.apply(void 0, arguments);
    };
  },
  coe = function e(t, n) {
    return t === 1
      ? n
      : AE(function () {
          var r = [...arguments],
            i = r.filter(function (e) {
              return e !== OE;
            }).length;
          return i >= t
            ? n.apply(void 0, r)
            : e(
                t - i,
                AE(function () {
                  var e = [...arguments],
                    t = r.map(function (t) {
                      return kE(t) ? e.shift() : t;
                    });
                  return n.apply(void 0, noe(t).concat(e));
                }),
              );
        });
  },
  jE = function (e) {
    return coe(e.length, e);
  },
  ME = function (e, t) {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  loe = jE(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (e) {
            return t[e];
          })
          .map(e);
  }),
  uoe = function () {
    var e = [...arguments];
    if (!e.length) return soe;
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
  NE = function (e) {
    return Array.isArray(e) ? e.reverse() : e.split(``).reverse.join(``);
  },
  PE = function (e) {
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
  FE = e(toe());
function doe(e) {
  return e === 0
    ? 1
    : Math.floor(new FE.default(e).abs().log(10).toNumber()) + 1;
}
function foe(e, t, n) {
  for (var r = new FE.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
var IE = {
  rangeStep: foe,
  getDigitCount: doe,
  interpolateNumber: jE(function (e, t, n) {
    var r = +e;
    return r + n * (+t - r);
  }),
  uninterpolateNumber: jE(function (e, t, n) {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  uninterpolateTruncation: jE(function (e, t, n) {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }),
};
function LE(e) {
  return hoe(e) || moe(e) || zE(e) || poe();
}
function poe() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function moe(e) {
  if (typeof Symbol < `u` && Symbol.iterator in Object(e)) return Array.from(e);
}
function hoe(e) {
  if (Array.isArray(e)) return BE(e);
}
function RE(e, t) {
  return voe(e) || _oe(e, t) || zE(e, t) || goe();
}
function goe() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zE(e, t) {
  if (e) {
    if (typeof e == `string`) return BE(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return BE(e, t);
  }
}
function BE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _oe(e, t) {
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
function voe(e) {
  if (Array.isArray(e)) return e;
}
function VE(e) {
  var t = RE(e, 2),
    n = t[0],
    r = t[1],
    i = n,
    a = r;
  return (n > r && ((i = r), (a = n)), [i, a]);
}
function HE(e, t, n) {
  if (e.lte(0)) return new FE.default(0);
  var r = IE.getDigitCount(e.toNumber()),
    i = new FE.default(10).pow(r),
    a = e.div(i),
    o = r === 1 ? 0.1 : 0.05,
    s = new FE.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
  return t ? s : new FE.default(Math.ceil(s));
}
function yoe(e, t, n) {
  var r = 1,
    i = new FE.default(e);
  if (!i.isint() && n) {
    var a = Math.abs(e);
    a < 1
      ? ((r = new FE.default(10).pow(IE.getDigitCount(e) - 1)),
        (i = new FE.default(Math.floor(i.div(r).toNumber())).mul(r)))
      : a > 1 && (i = new FE.default(Math.floor(e)));
  } else
    e === 0
      ? (i = new FE.default(Math.floor((t - 1) / 2)))
      : n || (i = new FE.default(Math.floor(e)));
  var o = Math.floor((t - 1) / 2);
  return uoe(
    loe(function (e) {
      return i.add(new FE.default(e - o).mul(r)).toNumber();
    }),
    ME,
  )(0, t);
}
function UE(e, t, n, r) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (n - 1)))
    return {
      step: new FE.default(0),
      tickMin: new FE.default(0),
      tickMax: new FE.default(0),
    };
  var a = HE(new FE.default(t).sub(e).div(n - 1), r, i),
    o;
  e <= 0 && t >= 0
    ? (o = new FE.default(0))
    : ((o = new FE.default(e).add(t).div(2)),
      (o = o.sub(new FE.default(o).mod(a))));
  var s = Math.ceil(o.sub(e).div(a).toNumber()),
    c = Math.ceil(new FE.default(t).sub(o).div(a).toNumber()),
    l = s + c + 1;
  return l > n
    ? UE(e, t, n, r, i + 1)
    : (l < n && ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
      {
        step: a,
        tickMin: o.sub(new FE.default(s).mul(a)),
        tickMax: o.add(new FE.default(c).mul(a)),
      });
}
function boe(e) {
  var t = RE(e, 2),
    n = t[0],
    r = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    s = RE(VE([n, r]), 2),
    c = s[0],
    l = s[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var u =
      l === 1 / 0
        ? [c].concat(
            LE(
              ME(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            LE(
              ME(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [l],
          );
    return n > r ? NE(u) : u;
  }
  if (c === l) return yoe(c, i, a);
  var d = UE(c, l, o, a),
    f = d.step,
    p = d.tickMin,
    m = d.tickMax,
    h = IE.rangeStep(p, m.add(new FE.default(0.1).mul(f)), f);
  return n > r ? NE(h) : h;
}
function xoe(e, t) {
  var n = RE(e, 2),
    r = n[0],
    i = n[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = RE(VE([r, i]), 2),
    s = o[0],
    c = o[1];
  if (s === -1 / 0 || c === 1 / 0) return [r, i];
  if (s === c) return [s];
  var l = Math.max(t, 2),
    u = HE(new FE.default(c).sub(s).div(l - 1), a, 0),
    d = [].concat(
      LE(
        IE.rangeStep(
          new FE.default(s),
          new FE.default(c).sub(new FE.default(0.99).mul(u)),
          u,
        ),
      ),
      [c],
    );
  return r > i ? NE(d) : d;
}
var Soe = PE(boe),
  Coe = PE(xoe),
  woe = `Invariant failed`;
function WE(e, t) {
  if (!e) throw Error(woe);
}
var Toe = [
  `offset`,
  `layout`,
  `width`,
  `dataKey`,
  `data`,
  `dataPointFormatter`,
  `xAxis`,
  `yAxis`,
];
