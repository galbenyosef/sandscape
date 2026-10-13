// assets__Create-ea24k1TY 71 — math
// Lines 22417-22654 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Lg = {
    symbolCircle: sg,
    symbolCross: Sre,
    symbolDiamond: wre,
    symbolSquare: Tre,
    symbolStar: kre,
    symbolTriangle: Are,
    symbolWye: Mre,
  },
  nie = Math.PI / 180,
  rie = function (e) {
    return Lg[`symbol${(0, Mg.default)(e)}`] || sg;
  },
  iie = function (e, t, n) {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * nie;
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
  aie = function (e, t) {
    Lg[`symbol${(0, Mg.default)(e)}`] = t;
  },
  Rg = function (e) {
    var t = e.type,
      n = t === void 0 ? `circle` : t,
      r = e.size,
      i = r === void 0 ? 64 : r,
      a = e.sizeType,
      o = a === void 0 ? `area` : a,
      s = Ig(Ig({}, eie(e, Xre)), {}, { type: n, size: i, sizeType: o }),
      c = function () {
        var e = rie(n);
        return Nre()
          .type(e)
          .size(iie(i, o, n))();
      },
      l = s.className,
      u = s.cx,
      d = s.cy,
      f = Mh(s, !0);
    return u === +u && d === +d && i === +i
      ? X.createElement(
          `path`,
          Pg({}, f, {
            className: h(`recharts-symbols`, l),
            transform: `translate(${u}, ${d})`,
            d: c(),
          }),
        )
      : null;
  };
Rg.registerSymbol = aie;
function zg(e) {
  "@babel/helpers - typeof";
  return (
    (zg =
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
    zg(e)
  );
}
function Bg() {
  return (
    (Bg = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bg.apply(this, arguments)
  );
}
function Vg(e, t) {
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
function oie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Vg(Object(n), !0).forEach(function (t) {
          Kg(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Vg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sie(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function Hg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, qg(r.key), r));
  }
}
function cie(e, t, n) {
  return (
    t && Hg(e.prototype, t),
    n && Hg(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function lie(e, t, n) {
  return (
    (t = Wg(t)),
    uie(
      e,
      Ug() ? Reflect.construct(t, n || [], Wg(e).constructor) : t.apply(e, n),
    )
  );
}
function uie(e, t) {
  if (t && (zg(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return die(e);
}
function die(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function Ug() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Ug = function () {
    return !!e;
  })();
}
function Wg(e) {
  return (
    (Wg = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Wg(e)
  );
}
function fie(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Gg(e, t));
}
function Gg(e, t) {
  return (
    (Gg = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    Gg(e, t)
  );
}
function Kg(e, t, n) {
  return (
    (t = qg(t)),
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
function qg(e) {
  var t = pie(e, `string`);
  return zg(t) == `symbol` ? t : t + ``;
}
function pie(e, t) {
  if (zg(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (zg(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
