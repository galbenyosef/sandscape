// Create-ea24k1TY 74 — symbol
// Lines 23762-23959 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function O_(e, t, n) {
  return t === !0
    ? (0, D_.default)(e, n)
    : (0, Sh.default)(t)
      ? (0, D_.default)(e, t)
      : e;
}
function k_(e) {
  "@babel/helpers - typeof";
  return (
    (k_ =
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
    k_(e)
  );
}
var eae = [`ref`];
function A_(e, t) {
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
function j_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? A_(Object(n), !0).forEach(function (t) {
          H_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : A_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function M_(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function N_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, U_(r.key), r));
  }
}
function P_(e, t, n) {
  return (
    t && N_(e.prototype, t),
    n && N_(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function F_(e, t, n) {
  return (
    (t = z_(t)),
    I_(
      e,
      R_() ? Reflect.construct(t, n || [], z_(e).constructor) : t.apply(e, n),
    )
  );
}
function I_(e, t) {
  if (t && (k_(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return L_(e);
}
function L_(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function R_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (R_ = function () {
    return !!e;
  })();
}
function z_(e) {
  return (
    (z_ = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    z_(e)
  );
}
function B_(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && V_(e, t));
}
function V_(e, t) {
  return (
    (V_ = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    V_(e, t)
  );
}
function H_(e, t, n) {
  return (
    (t = U_(t)),
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
function U_(e) {
  var t = W_(e, `string`);
  return k_(t) == `symbol` ? t : t + ``;
}
function W_(e, t) {
  if (k_(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (k_(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function G_(e, t) {
  if (e == null) return {};
  var n = K_(e, t),
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
function K_(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function q_(e) {
  return e.value;
}
function J_(e, t) {
  if (X.isValidElement(e)) return X.cloneElement(e, t);
  if (typeof e == `function`) return X.createElement(e, t);
  t.ref;
  var n = G_(t, eae);
  return X.createElement(Yg, n);
}
