// Create-CEn7EAZs 76 — symbol
// Lines 24535-24732 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Hv(e, t, n) {
  return t === !0
    ? (0, Vv.default)(e, n)
    : (0, $m.default)(t)
      ? (0, Vv.default)(e, t)
      : e;
}
function Uv(e) {
  "@babel/helpers - typeof";
  return (
    (Uv =
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
    Uv(e)
  );
}
var Wv = [`ref`];
function Gv(e, t) {
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
function Kv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Gv(Object(n), !0).forEach(function (t) {
          ry(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Gv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function qv(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function Jv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, iy(r.key), r));
  }
}
function Yv(e, t, n) {
  return (
    t && Jv(e.prototype, t),
    n && Jv(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Xv(e, t, n) {
  return (
    (t = ey(t)),
    Zv(
      e,
      $v() ? Reflect.construct(t, n || [], ey(e).constructor) : t.apply(e, n),
    )
  );
}
function Zv(e, t) {
  if (t && (Uv(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return Qv(e);
}
function Qv(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function $v() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return ($v = function () {
    return !!e;
  })();
}
function ey(e) {
  return (
    (ey = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    ey(e)
  );
}
function ty(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ny(e, t));
}
function ny(e, t) {
  return (
    (ny = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    ny(e, t)
  );
}
function ry(e, t, n) {
  return (
    (t = iy(t)),
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
function iy(e) {
  var t = ay(e, `string`);
  return Uv(t) == `symbol` ? t : t + ``;
}
function ay(e, t) {
  if (Uv(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Uv(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function oy(e, t) {
  if (e == null) return {};
  var n = sy(e, t),
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
function sy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function cy(e) {
  return e.value;
}
function ly(e, t) {
  if (X.isValidElement(e)) return X.cloneElement(e, t);
  if (typeof e == `function`) return X.createElement(e, t);
  t.ref;
  var n = oy(t, Wv);
  return X.createElement(C_, n);
}
