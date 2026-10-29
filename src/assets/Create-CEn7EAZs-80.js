// Create-CEn7EAZs 80 — symbol
// Lines 25586-25784 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function ib(e) {
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
      ? ((u = nb({
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
        (d = nb({
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
        (l = rb({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = eb),
    {
      cssProperties: l,
      cssClasses: tb({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function ab(e) {
  "@babel/helpers - typeof";
  return (
    (ab =
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
    ab(e)
  );
}
function ob(e, t) {
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
function sb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ob(Object(n), !0).forEach(function (t) {
          vb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ob(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function cb(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function lb(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, yb(r.key), r));
  }
}
function ub(e, t, n) {
  return (
    t && lb(e.prototype, t),
    n && lb(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function db(e, t, n) {
  return (
    (t = hb(t)),
    fb(
      e,
      mb() ? Reflect.construct(t, n || [], hb(e).constructor) : t.apply(e, n),
    )
  );
}
function fb(e, t) {
  if (t && (ab(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return pb(e);
}
function pb(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function mb() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (mb = function () {
    return !!e;
  })();
}
function hb(e) {
  return (
    (hb = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    hb(e)
  );
}
function gb(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && _b(e, t));
}
function _b(e, t) {
  return (
    (_b = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    _b(e, t)
  );
}
function vb(e, t, n) {
  return (
    (t = yb(t)),
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
function yb(e) {
  var t = bb(e, `string`);
  return ab(t) == `symbol` ? t : t + ``;
}
function bb(e, t) {
  if (ab(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (ab(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
