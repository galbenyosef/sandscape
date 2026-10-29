// Create-CEn7EAZs 73 — math
// Lines 23190-23427 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var $g = {
    symbolCircle: Uh,
    symbolCross: Wh,
    symbolDiamond: qh,
    symbolSquare: Jh,
    symbolStar: $h,
    symbolTriangle: tg,
    symbolWye: og,
  },
  e_ = Math.PI / 180,
  t_ = function (e) {
    return $g[`symbol${(0, Hg.default)(e)}`] || Uh;
  },
  n_ = function (e, t, n) {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * e_;
        return (
          1.25 * e * e * (Math.tan(r) - Math.tan(r * 2) * Math.tan(r) ** 2)
        );
      case `triangle`:
        return (Math.sqrt(3) * e * e) / 4;
      case `wye`:
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  r_ = function (e, t) {
    $g[`symbol${(0, Hg.default)(e)}`] = t;
  },
  i_ = function (e) {
    var t = e.type,
      n = t === void 0 ? `circle` : t,
      r = e.size,
      i = r === void 0 ? 64 : r,
      a = e.sizeType,
      o = a === void 0 ? `area` : a,
      s = qg(qg({}, Zg(e, Wg)), {}, { type: n, size: i, sizeType: o }),
      c = function () {
        var e = t_(n);
        return sg()
          .type(e)
          .size(n_(i, o, n))();
      },
      l = s.className,
      u = s.cx,
      d = s.cy,
      f = lh(s, !0);
    return u === +u && d === +d && i === +i
      ? X.createElement(
          `path`,
          Gg({}, f, {
            className: h(`recharts-symbols`, l),
            transform: `translate(${u}, ${d})`,
            d: c(),
          }),
        )
      : null;
  };
i_.registerSymbol = r_;
function a_(e) {
  "@babel/helpers - typeof";
  return (
    (a_ =
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
    a_(e)
  );
}
function o_() {
  return (
    (o_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    o_.apply(this, arguments)
  );
}
function s_(e, t) {
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
function c_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? s_(Object(n), !0).forEach(function (t) {
          y_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : s_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function l_(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function u_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, b_(r.key), r));
  }
}
function d_(e, t, n) {
  return (
    t && u_(e.prototype, t),
    n && u_(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function f_(e, t, n) {
  return (
    (t = g_(t)),
    p_(
      e,
      h_() ? Reflect.construct(t, n || [], g_(e).constructor) : t.apply(e, n),
    )
  );
}
function p_(e, t) {
  if (t && (a_(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return m_(e);
}
function m_(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function h_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (h_ = function () {
    return !!e;
  })();
}
function g_(e) {
  return (
    (g_ = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    g_(e)
  );
}
function __(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && v_(e, t));
}
function v_(e, t) {
  return (
    (v_ = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    v_(e, t)
  );
}
function y_(e, t, n) {
  return (
    (t = b_(t)),
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
function b_(e) {
  var t = x_(e, `string`);
  return a_(t) == `symbol` ? t : t + ``;
}
function x_(e, t) {
  if (a_(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (a_(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
