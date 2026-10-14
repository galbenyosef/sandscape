// assets__Create-ea24k1TY 106 — symbol
// Lines 34842-35186 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function cle(e, t) {
  if (NO(e) !== `object` || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (NO(r) !== `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function lle(e, t) {
  return fle(e) || dle(e, t) || RO(e, t) || ule();
}
function ule() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RO(e, t) {
  if (e) {
    if (typeof e == `string`) return zO(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return zO(e, t);
  }
}
function zO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function dle(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function fle(e) {
  if (Array.isArray(e)) return e;
}
var BO = function (e, t, n) {
    return e + (t - e) * n;
  },
  VO = function (e) {
    return e.from !== e.to;
  },
  ple = function e(t, n, r) {
    var i = wO(function (e, n) {
      if (VO(n)) {
        var r = lle(t(n.from, n.to, n.velocity), 2),
          i = r[0],
          a = r[1];
        return IO(IO({}, n), {}, { from: i, velocity: a });
      }
      return n;
    }, n);
    return r < 1
      ? wO(function (e, t) {
          return VO(t)
            ? IO(
                IO({}, t),
                {},
                {
                  velocity: BO(t.velocity, i[e].velocity, r),
                  from: BO(t.from, i[e].from, r),
                },
              )
            : t;
        }, n)
      : e(t, i, r - 1);
  },
  mle = function (e, t, n, r, i) {
    var a = Wce(e, t),
      o = a.reduce(function (n, r) {
        return IO(IO({}, n), {}, LO({}, r, [e[r], t[r]]));
      }, {}),
      s = a.reduce(function (n, r) {
        return IO(
          IO({}, n),
          {},
          LO({}, r, { from: e[r], velocity: 0, to: t[r] }),
        );
      }, {}),
      c = -1,
      l,
      u,
      d = function () {
        return null;
      },
      f = function () {
        return wO(function (e, t) {
          return t.from;
        }, s);
      },
      p = function () {
        return !Object.values(s).filter(VO).length;
      };
    return (
      (d = n.isStepper
        ? function (r) {
            l ||= r;
            var a = (r - l) / n.dt;
            ((s = ple(n, s, a)),
              i(IO(IO(IO({}, e), t), f(s))),
              (l = r),
              p() || (c = requestAnimationFrame(d)));
          }
        : function (a) {
            u ||= a;
            var s = (a - u) / r,
              l = wO(function (e, t) {
                return BO.apply(void 0, PO(t).concat([n(s)]));
              }, o);
            if ((i(IO(IO(IO({}, e), t), l)), s < 1))
              c = requestAnimationFrame(d);
            else {
              var f = wO(function (e, t) {
                return BO.apply(void 0, PO(t).concat([n(1)]));
              }, o);
              i(IO(IO(IO({}, e), t), f));
            }
          }),
      function () {
        return (
          requestAnimationFrame(d),
          function () {
            cancelAnimationFrame(c);
          }
        );
      }
    );
  },
  HO = e(Yse());
function UO(e) {
  "@babel/helpers - typeof";
  return (
    (UO =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    UO(e)
  );
}
var hle = [
  `children`,
  `begin`,
  `duration`,
  `attributeName`,
  `easing`,
  `isActive`,
  `steps`,
  `from`,
  `to`,
  `canBegin`,
  `onAnimationEnd`,
  `shouldReAnimate`,
  `onAnimationReStart`,
];
function gle(e, t) {
  if (e == null) return {};
  var n = _le(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function _le(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    ((i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]));
  return n;
}
function WO(e) {
  return xle(e) || ble(e) || yle(e) || vle();
}
function vle() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yle(e, t) {
  if (e) {
    if (typeof e == `string`) return GO(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return GO(e, t);
  }
}
function ble(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function xle(e) {
  if (Array.isArray(e)) return GO(e);
}
function GO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function KO(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function qO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? KO(Object(n), !0).forEach(function (t) {
          JO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : KO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function JO(e, t, n) {
  return (
    (t = XO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Sle(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function YO(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, XO(r.key), r));
  }
}
function Cle(e, t, n) {
  return (
    t && YO(e.prototype, t),
    n && YO(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function XO(e) {
  var t = wle(e, `string`);
  return UO(t) === `symbol` ? t : String(t);
}
function wle(e, t) {
  if (UO(e) !== `object` || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (UO(r) !== `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Tle(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ZO(e, t));
}
