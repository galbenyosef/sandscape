// assets__Create-ea24k1TY 96 — symbol
// Lines 31250-31589 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function PE(e) {
  "@babel/helpers - typeof";
  return (
    (PE =
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
    PE(e)
  );
}
function FE() {
  return (
    (FE = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    FE.apply(this, arguments)
  );
}
function aoe(e, t) {
  return loe(e) || coe(e, t) || soe(e, t) || ooe();
}
function ooe() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function soe(e, t) {
  if (e) {
    if (typeof e == `string`) return IE(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return IE(e, t);
  }
}
function IE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function coe(e, t) {
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
function loe(e) {
  if (Array.isArray(e)) return e;
}
function uoe(e, t) {
  if (e == null) return {};
  var n = doe(e, t),
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
function doe(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function foe(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function LE(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, HE(r.key), r));
  }
}
function poe(e, t, n) {
  return (
    t && LE(e.prototype, t),
    n && LE(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function moe(e, t, n) {
  return (
    (t = zE(t)),
    hoe(
      e,
      RE() ? Reflect.construct(t, n || [], zE(e).constructor) : t.apply(e, n),
    )
  );
}
function hoe(e, t) {
  if (t && (PE(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return goe(e);
}
function goe(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function RE() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (RE = function () {
    return !!e;
  })();
}
function zE(e) {
  return (
    (zE = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    zE(e)
  );
}
function _oe(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && BE(e, t));
}
function BE(e, t) {
  return (
    (BE = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    BE(e, t)
  );
}
function VE(e, t, n) {
  return (
    (t = HE(t)),
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
function HE(e) {
  var t = voe(e, `string`);
  return PE(t) == `symbol` ? t : t + ``;
}
function voe(e, t) {
  if (PE(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (PE(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var UE = (function (e) {
  function t() {
    return (foe(this, t), moe(this, t, arguments));
  }
  return (
    _oe(t, e),
    poe(t, [
      {
        key: `render`,
        value: function () {
          var e = this.props,
            t = e.offset,
            n = e.layout,
            r = e.width,
            i = e.dataKey,
            a = e.data,
            o = e.dataPointFormatter,
            s = e.xAxis,
            c = e.yAxis,
            l = Mh(uoe(e, ioe), !1);
          this.props.direction === `x` && s.type !== `number` && NE(!1);
          var u = a.map(function (e) {
            var a = o(e, i),
              u = a.x,
              d = a.y,
              f = a.value,
              p = a.errorVal;
            if (!p) return null;
            var m = [],
              h,
              g;
            if (Array.isArray(p)) {
              var _ = aoe(p, 2);
              ((h = _[0]), (g = _[1]));
            } else h = g = p;
            if (n === `vertical`) {
              var v = s.scale,
                y = d + t,
                b = y + r,
                x = y - r,
                S = v(f - h),
                C = v(f + g);
              (m.push({ x1: C, y1: b, x2: C, y2: x }),
                m.push({ x1: S, y1: y, x2: C, y2: y }),
                m.push({ x1: S, y1: b, x2: S, y2: x }));
            } else if (n === `horizontal`) {
              var w = c.scale,
                T = u + t,
                E = T - r,
                D = T + r,
                O = w(f - h),
                k = w(f + g);
              (m.push({ x1: E, y1: k, x2: D, y2: k }),
                m.push({ x1: T, y1: O, x2: T, y2: k }),
                m.push({ x1: E, y1: O, x2: D, y2: O }));
            }
            return X.createElement(
              zh,
              FE(
                {
                  className: `recharts-errorBar`,
                  key: `bar-${m.map(function (e) {
                    return `${e.x1}-${e.x2}-${e.y1}-${e.y2}`;
                  })}`,
                },
                l,
              ),
              m.map(function (e) {
                return X.createElement(
                  `line`,
                  FE({}, e, { key: `line-${e.x1}-${e.x2}-${e.y1}-${e.y2}` }),
                );
              }),
            );
          });
          return X.createElement(zh, { className: `recharts-errorBars` }, u);
        },
      },
    ])
  );
})(X.Component);
(VE(UE, `defaultProps`, {
  stroke: `black`,
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: `horizontal`,
}),
  VE(UE, `displayName`, `ErrorBar`));
function WE(e) {
  "@babel/helpers - typeof";
  return (
    (WE =
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
    WE(e)
  );
}
