// Create-CEn7EAZs 121 — scale
// Lines 39804-40106 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
(VM(KM, `displayName`, `Brush`),
  VM(KM, `defaultProps`, {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: `#fff`,
    stroke: `#666`,
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1e3,
    alwaysShowText: !1,
  }));
var qM = n((e, t) => {
    var n = vy();
    function r(e, t) {
      var r;
      return (
        n(e, function (e, n, i) {
          return ((r = t(e, n, i)), !r);
        }),
        !!r
      );
    }
    t.exports = r;
  }),
  JM = n((e, t) => {
    var n = N_(),
      r = jv(),
      i = qM(),
      a = om(),
      o = My();
    function s(e, t, s) {
      var c = a(e) ? n : i;
      return (s && o(e, t, s) && (t = void 0), c(e, r(t, 3)));
    }
    t.exports = s;
  }),
  YM = function (e, t) {
    var n = e.alwaysShow,
      r = e.ifOverflow;
    return (n && (r = `extendDomain`), r === t);
  },
  XM = n((e, t) => {
    var n = Dy();
    function r(e, t, r) {
      t == `__proto__` && n
        ? n(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    t.exports = r;
  }),
  ZM = n((e, t) => {
    var n = XM(),
      r = gy(),
      i = jv();
    function a(e, t) {
      var a = {};
      return (
        (t = i(t, 3)),
        r(e, function (e, r, i) {
          n(a, r, t(e, r, i));
        }),
        a
      );
    }
    t.exports = a;
  }),
  QM = n((e, t) => {
    function n(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
        if (!t(e[n], n, e)) return !1;
      return !0;
    }
    t.exports = n;
  }),
  $M = n((e, t) => {
    var n = vy();
    function r(e, t) {
      var r = !0;
      return (
        n(e, function (e, n, i) {
          return ((r = !!t(e, n, i)), r);
        }),
        r
      );
    }
    t.exports = r;
  }),
  eN = n((e, t) => {
    var n = QM(),
      r = $M(),
      i = jv(),
      a = om(),
      o = My();
    function s(e, t, s) {
      var c = a(e) ? n : r;
      return (s && o(e, t, s) && (t = void 0), c(e, i(t, 3)));
    }
    t.exports = s;
  }),
  tN = e(ZM()),
  nN = e(eN());
function rN(e) {
  "@babel/helpers - typeof";
  return (
    (rN =
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
    rN(e)
  );
}
function iN(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function aN(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, uN(r.key), r));
  }
}
function oN(e, t, n) {
  return (
    t && aN(e.prototype, t),
    n && aN(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function sN(e, t) {
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
function cN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? sN(Object(n), !0).forEach(function (t) {
          lN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : sN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function lN(e, t, n) {
  return (
    (t = uN(t)),
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
function uN(e) {
  var t = dN(e, `string`);
  return rN(t) == `symbol` ? t : t + ``;
}
function dN(e, t) {
  if (rN(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (rN(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var fN = function (e, t) {
    var n = e.x,
      r = e.y,
      i = t.x,
      a = t.y;
    return {
      x: Math.min(n, i),
      y: Math.min(r, a),
      width: Math.abs(i - n),
      height: Math.abs(a - r),
    };
  },
  pN = function (e) {
    var t = e.x1,
      n = e.y1,
      r = e.x2,
      i = e.y2;
    return fN({ x: t, y: n }, { x: r, y: i });
  },
  mN = (function () {
    function e(t) {
      (iN(this, e), (this.scale = t));
    }
    return oN(
      e,
      [
        {
          key: `domain`,
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: `range`,
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: `rangeMin`,
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: `rangeMax`,
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: `bandwidth`,
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: `apply`,
          value: function (e) {
            var t =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              n = t.bandAware,
              r = t.position;
            if (e !== void 0) {
              if (r)
                switch (r) {
                  case `start`:
                    return this.scale(e);
                  case `middle`:
                    var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(e) + i;
                  case `end`:
                    var a = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(e) + a;
                  default:
                    return this.scale(e);
                }
              if (n) {
                var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(e) + o;
              }
              return this.scale(e);
            }
          },
        },
        {
          key: `isInRange`,
          value: function (e) {
            var t = this.range(),
              n = t[0],
              r = t[t.length - 1];
            return n <= r ? e >= n && e <= r : e >= r && e <= n;
          },
        },
      ],
      [
        {
          key: `create`,
          value: function (t) {
            return new e(t);
          },
        },
      ],
    );
  })();
lN(mN, `EPS`, 1e-4);
