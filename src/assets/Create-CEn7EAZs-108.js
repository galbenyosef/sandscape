// Create-CEn7EAZs 108 — symbol
// Lines 35615-35959 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function kle(e, t) {
  if (WO(e) !== `object` || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (WO(r) !== `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Ale(e, t) {
  return Nle(e) || Mle(e, t) || YO(e, t) || jle();
}
function jle() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YO(e, t) {
  if (e) {
    if (typeof e == `string`) return XO(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return XO(e, t);
  }
}
function XO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Mle(e, t) {
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
function Nle(e) {
  if (Array.isArray(e)) return e;
}
var ZO = function (e, t, n) {
    return e + (t - e) * n;
  },
  QO = function (e) {
    return e.from !== e.to;
  },
  Ple = function e(t, n, r) {
    var i = FO(function (e, n) {
      if (QO(n)) {
        var r = Ale(t(n.from, n.to, n.velocity), 2),
          i = r[0],
          a = r[1];
        return qO(qO({}, n), {}, { from: i, velocity: a });
      }
      return n;
    }, n);
    return r < 1
      ? FO(function (e, t) {
          return QO(t)
            ? qO(
                qO({}, t),
                {},
                {
                  velocity: ZO(t.velocity, i[e].velocity, r),
                  from: ZO(t.from, i[e].from, r),
                },
              )
            : t;
        }, n)
      : e(t, i, r - 1);
  },
  Fle = function (e, t, n, r, i) {
    var a = dle(e, t),
      o = a.reduce(function (n, r) {
        return qO(qO({}, n), {}, JO({}, r, [e[r], t[r]]));
      }, {}),
      s = a.reduce(function (n, r) {
        return qO(
          qO({}, n),
          {},
          JO({}, r, { from: e[r], velocity: 0, to: t[r] }),
        );
      }, {}),
      c = -1,
      l,
      u,
      d = function () {
        return null;
      },
      f = function () {
        return FO(function (e, t) {
          return t.from;
        }, s);
      },
      p = function () {
        return !Object.values(s).filter(QO).length;
      };
    return (
      (d = n.isStepper
        ? function (r) {
            l ||= r;
            var a = (r - l) / n.dt;
            ((s = Ple(n, s, a)),
              i(qO(qO(qO({}, e), t), f(s))),
              (l = r),
              p() || (c = requestAnimationFrame(d)));
          }
        : function (a) {
            u ||= a;
            var s = (a - u) / r,
              l = FO(function (e, t) {
                return ZO.apply(void 0, GO(t).concat([n(s)]));
              }, o);
            if ((i(qO(qO(qO({}, e), t), l)), s < 1))
              c = requestAnimationFrame(d);
            else {
              var f = FO(function (e, t) {
                return ZO.apply(void 0, GO(t).concat([n(1)]));
              }, o);
              i(qO(qO(qO({}, e), t), f));
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
  $O = e(gce());
function ek(e) {
  "@babel/helpers - typeof";
  return (
    (ek =
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
    ek(e)
  );
}
var Ile = [
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
function Lle(e, t) {
  if (e == null) return {};
  var n = Rle(e, t),
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
function Rle(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    ((i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]));
  return n;
}
function tk(e) {
  return Hle(e) || Vle(e) || Ble(e) || zle();
}
function zle() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ble(e, t) {
  if (e) {
    if (typeof e == `string`) return nk(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return nk(e, t);
  }
}
function Vle(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Hle(e) {
  if (Array.isArray(e)) return nk(e);
}
function nk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function rk(e, t) {
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
function ik(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rk(Object(n), !0).forEach(function (t) {
          ak(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ak(e, t, n) {
  return (
    (t = lk(t)),
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
function ok(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function sk(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, lk(r.key), r));
  }
}
function ck(e, t, n) {
  return (
    t && sk(e.prototype, t),
    n && sk(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function lk(e) {
  var t = uk(e, `string`);
  return ek(t) === `symbol` ? t : String(t);
}
function uk(e, t) {
  if (ek(e) !== `object` || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (ek(r) !== `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function dk(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && fk(e, t));
}
