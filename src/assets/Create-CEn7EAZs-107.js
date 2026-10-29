// Create-CEn7EAZs 107 — symbol
// Lines 35269-35614 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function PO(e, t, n) {
  return (
    (t = lle(t)),
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
function lle(e) {
  var t = ule(e, `string`);
  return jO(t) === `symbol` ? t : String(t);
}
function ule(e, t) {
  if (jO(e) !== `object` || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (jO(r) !== `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var dle = function (e, t) {
    return [Object.keys(e), Object.keys(t)].reduce(function (e, t) {
      return e.filter(function (e) {
        return t.includes(e);
      });
    });
  },
  fle = function (e) {
    return e;
  },
  ple = function (e) {
    return e.replace(/([A-Z])/g, function (e) {
      return `-${e.toLowerCase()}`;
    });
  },
  FO = function (e, t) {
    return Object.keys(t).reduce(function (n, r) {
      return NO(NO({}, n), {}, PO({}, r, e(r, t[r])));
    }, {});
  },
  IO = function (e, t, n) {
    return e
      .map(function (e) {
        return `${ple(e)} ${t}ms ${n}`;
      })
      .join(`,`);
  };
function mle(e, t) {
  return _le(e) || gle(e, t) || LO(e, t) || hle();
}
function hle() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gle(e, t) {
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
function _le(e) {
  if (Array.isArray(e)) return e;
}
function vle(e) {
  return xle(e) || ble(e) || LO(e) || yle();
}
function yle() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LO(e, t) {
  if (e) {
    if (typeof e == `string`) return RO(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return RO(e, t);
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
  if (Array.isArray(e)) return RO(e);
}
function RO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var zO = 1e-4,
  BO = function (e, t) {
    return [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1];
  },
  VO = function (e, t) {
    return e
      .map(function (e, n) {
        return e * t ** +n;
      })
      .reduce(function (e, t) {
        return e + t;
      });
  },
  HO = function (e, t) {
    return function (n) {
      return VO(BO(e, t), n);
    };
  },
  Sle = function (e, t) {
    return function (n) {
      var r = BO(e, t);
      return VO(
        [].concat(
          vle(
            r
              .map(function (e, t) {
                return e * t;
              })
              .slice(1),
          ),
          [0],
        ),
        n,
      );
    };
  },
  UO = function () {
    var e = [...arguments],
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3];
    if (e.length === 1)
      switch (e[0]) {
        case `linear`:
          ((t = 0), (n = 0), (r = 1), (i = 1));
          break;
        case `ease`:
          ((t = 0.25), (n = 0.1), (r = 0.25), (i = 1));
          break;
        case `ease-in`:
          ((t = 0.42), (n = 0), (r = 1), (i = 1));
          break;
        case `ease-out`:
          ((t = 0.42), (n = 0), (r = 0.58), (i = 1));
          break;
        case `ease-in-out`:
          ((t = 0), (n = 0), (r = 0.58), (i = 1));
          break;
        default:
          var a = e[0].split(`(`);
          if (
            a[0] === `cubic-bezier` &&
            a[1].split(`)`)[0].split(`,`).length === 4
          ) {
            var o = mle(
              a[1]
                .split(`)`)[0]
                .split(`,`)
                .map(function (e) {
                  return parseFloat(e);
                }),
              4,
            );
            ((t = o[0]), (n = o[1]), (r = o[2]), (i = o[3]));
          }
      }
    [t, r, n, i].every(function (e) {
      return typeof e == `number` && e >= 0 && e <= 1;
    });
    var s = HO(t, r),
      c = HO(n, i),
      l = Sle(t, r),
      u = function (e) {
        return e > 1 ? 1 : e < 0 ? 0 : e;
      },
      d = function (e) {
        for (var t = e > 1 ? 1 : e, n = t, r = 0; r < 8; ++r) {
          var i = s(n) - t,
            a = l(n);
          if (Math.abs(i - t) < zO || a < zO) return c(n);
          n = u(n - i / a);
        }
        return c(n);
      };
    return ((d.isStepper = !1), d);
  },
  Cle = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.stiff,
      n = t === void 0 ? 100 : t,
      r = e.damping,
      i = r === void 0 ? 8 : r,
      a = e.dt,
      o = a === void 0 ? 17 : a,
      s = function (e, t, r) {
        var a = r + ((-(e - t) * n - r * i) * o) / 1e3,
          s = (r * o) / 1e3 + e;
        return Math.abs(s - t) < zO && Math.abs(a) < zO ? [t, 0] : [s, a];
      };
    return ((s.isStepper = !0), (s.dt = o), s);
  },
  wle = function () {
    var e = [...arguments][0];
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return UO(e);
        case `spring`:
          return Cle();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return UO(e);
      }
    return typeof e == `function` ? e : null;
  };
function WO(e) {
  "@babel/helpers - typeof";
  return (
    (WO =
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
    WO(e)
  );
}
function GO(e) {
  return Dle(e) || Ele(e) || YO(e) || Tle();
}
function Tle() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ele(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Dle(e) {
  if (Array.isArray(e)) return XO(e);
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
    (t = Ole(t)),
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
function Ole(e) {
  var t = kle(e, `string`);
  return WO(t) === `symbol` ? t : String(t);
}
