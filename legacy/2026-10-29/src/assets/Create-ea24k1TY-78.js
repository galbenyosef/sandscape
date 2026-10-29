// Create-ea24k1TY 78 — symbol
// Lines 24813-25011 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Cv(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    s = e.useTranslate3d,
    c = e.viewBox,
    l,
    u,
    d;
  return (
    o.height > 0 && o.width > 0 && n
      ? ((u = xv({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `x`,
          offsetTopLeft: r,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: c,
          viewBoxDimension: c.width,
        })),
        (d = xv({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `y`,
          offsetTopLeft: r,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: c,
          viewBoxDimension: c.height,
        })),
        (l = Sv({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = yv),
    {
      cssProperties: l,
      cssClasses: bv({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function wv(e) {
  "@babel/helpers - typeof";
  return (
    (wv =
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
    wv(e)
  );
}
function Tv(e, t) {
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
function Ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tv(Object(n), !0).forEach(function (t) {
          Lv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Dv(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function Ov(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, Rv(r.key), r));
  }
}
function kv(e, t, n) {
  return (
    t && Ov(e.prototype, t),
    n && Ov(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Av(e, t, n) {
  return (
    (t = Pv(t)),
    jv(
      e,
      Nv() ? Reflect.construct(t, n || [], Pv(e).constructor) : t.apply(e, n),
    )
  );
}
function jv(e, t) {
  if (t && (wv(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return Mv(e);
}
function Mv(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function Nv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Nv = function () {
    return !!e;
  })();
}
function Pv(e) {
  return (
    (Pv = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Pv(e)
  );
}
function Fv(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Iv(e, t));
}
function Iv(e, t) {
  return (
    (Iv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    Iv(e, t)
  );
}
function Lv(e, t, n) {
  return (
    (t = Rv(t)),
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
function Rv(e) {
  var t = zv(e, `string`);
  return wv(t) == `symbol` ? t : t + ``;
}
function zv(e, t) {
  if (wv(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (wv(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
