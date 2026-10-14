// Create-ea24k1TY 105 — symbol
// Lines 34496-34841 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function CO(e, t, n) {
  return (
    (t = Hce(t)),
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
function Hce(e) {
  var t = Uce(e, `string`);
  return bO(t) === `symbol` ? t : String(t);
}
function Uce(e, t) {
  if (bO(e) !== `object` || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (bO(r) !== `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Wce = function (e, t) {
    return [Object.keys(e), Object.keys(t)].reduce(function (e, t) {
      return e.filter(function (e) {
        return t.includes(e);
      });
    });
  },
  Gce = function (e) {
    return e;
  },
  Kce = function (e) {
    return e.replace(/([A-Z])/g, function (e) {
      return `-${e.toLowerCase()}`;
    });
  },
  wO = function (e, t) {
    return Object.keys(t).reduce(function (n, r) {
      return SO(SO({}, n), {}, CO({}, r, e(r, t[r])));
    }, {});
  },
  TO = function (e, t, n) {
    return e
      .map(function (e) {
        return `${Kce(e)} ${t}ms ${n}`;
      })
      .join(`,`);
  };
function qce(e, t) {
  return Xce(e) || Yce(e, t) || EO(e, t) || Jce();
}
function Jce() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yce(e, t) {
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
function Xce(e) {
  if (Array.isArray(e)) return e;
}
function Zce(e) {
  return ele(e) || $ce(e) || EO(e) || Qce();
}
function Qce() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EO(e, t) {
  if (e) {
    if (typeof e == `string`) return DO(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return DO(e, t);
  }
}
function $ce(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function ele(e) {
  if (Array.isArray(e)) return DO(e);
}
function DO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var OO = 1e-4,
  kO = function (e, t) {
    return [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1];
  },
  AO = function (e, t) {
    return e
      .map(function (e, n) {
        return e * t ** +n;
      })
      .reduce(function (e, t) {
        return e + t;
      });
  },
  jO = function (e, t) {
    return function (n) {
      return AO(kO(e, t), n);
    };
  },
  tle = function (e, t) {
    return function (n) {
      var r = kO(e, t);
      return AO(
        [].concat(
          Zce(
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
  MO = function () {
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
            var o = qce(
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
    var s = jO(t, r),
      c = jO(n, i),
      l = tle(t, r),
      u = function (e) {
        return e > 1 ? 1 : e < 0 ? 0 : e;
      },
      d = function (e) {
        for (var t = e > 1 ? 1 : e, n = t, r = 0; r < 8; ++r) {
          var i = s(n) - t,
            a = l(n);
          if (Math.abs(i - t) < OO || a < OO) return c(n);
          n = u(n - i / a);
        }
        return c(n);
      };
    return ((d.isStepper = !1), d);
  },
  nle = function () {
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
        return Math.abs(s - t) < OO && Math.abs(a) < OO ? [t, 0] : [s, a];
      };
    return ((s.isStepper = !0), (s.dt = o), s);
  },
  rle = function () {
    var e = [...arguments][0];
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return MO(e);
        case `spring`:
          return nle();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return MO(e);
      }
    return typeof e == `function` ? e : null;
  };
function NO(e) {
  "@babel/helpers - typeof";
  return (
    (NO =
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
    NO(e)
  );
}
function PO(e) {
  return ole(e) || ale(e) || RO(e) || ile();
}
function ile() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ale(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function ole(e) {
  if (Array.isArray(e)) return zO(e);
}
function FO(e, t) {
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
function IO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? FO(Object(n), !0).forEach(function (t) {
          LO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : FO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function LO(e, t, n) {
  return (
    (t = sle(t)),
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
function sle(e) {
  var t = cle(e, `string`);
  return NO(t) === `symbol` ? t : String(t);
}
