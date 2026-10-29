// Create-CEn7EAZs 112 — symbol
// Lines 36908-37153 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var uA = function (e, t, n, r, i, a) {
    return `M${e},${i}v${r}M${a},${t}h${n}`;
  },
  dA = function (e) {
    var t = e.x,
      n = t === void 0 ? 0 : t,
      r = e.y,
      i = r === void 0 ? 0 : r,
      a = e.top,
      o = a === void 0 ? 0 : a,
      s = e.left,
      c = s === void 0 ? 0 : s,
      l = e.width,
      u = l === void 0 ? 0 : l,
      d = e.height,
      f = d === void 0 ? 0 : d,
      p = e.className,
      m = cA(e, tA),
      g = iA({ x: n, y: i, top: o, left: c, width: u, height: f }, m);
    return !zm(n) || !zm(i) || !zm(u) || !zm(f) || !zm(o) || !zm(c)
      ? null
      : X.createElement(
          `path`,
          nA({}, lh(g, !0), {
            className: h(`recharts-cross`, p),
            d: uA(n, i, u, f, o, c),
          }),
        );
  },
  fA = n((e, t) => {
    var n = wE(),
      r = TE(),
      i = jv();
    function a(e, t) {
      return e && e.length ? n(e, i(t, 2), r) : void 0;
    }
    t.exports = a;
  }),
  pA = n((e, t) => {
    var n = wE(),
      r = jv(),
      i = EE();
    function a(e, t) {
      return e && e.length ? n(e, r(t, 2), i) : void 0;
    }
    t.exports = a;
  }),
  mA = e(fA()),
  hA = e(pA()),
  gA = [`cx`, `cy`, `angle`, `ticks`, `axisLine`],
  _A = [`ticks`, `tick`, `angle`, `tickFormatter`, `stroke`];
function vA(e) {
  "@babel/helpers - typeof";
  return (
    (vA =
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
    vA(e)
  );
}
function yA() {
  return (
    (yA = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yA.apply(this, arguments)
  );
}
function bA(e, t) {
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
function xA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bA(Object(n), !0).forEach(function (t) {
          PA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function SA(e, t) {
  if (e == null) return {};
  var n = CA(e, t),
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
function CA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function wA(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function TA(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, FA(r.key), r));
  }
}
function EA(e, t, n) {
  return (
    t && TA(e.prototype, t),
    n && TA(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function DA(e, t, n) {
  return (
    (t = jA(t)),
    OA(
      e,
      AA() ? Reflect.construct(t, n || [], jA(e).constructor) : t.apply(e, n),
    )
  );
}
function OA(e, t) {
  if (t && (vA(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return kA(e);
}
function kA(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function AA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (AA = function () {
    return !!e;
  })();
}
function jA(e) {
  return (
    (jA = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    jA(e)
  );
}
function MA(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && NA(e, t));
}
function NA(e, t) {
  return (
    (NA = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    NA(e, t)
  );
}
function PA(e, t, n) {
  return (
    (t = FA(t)),
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
function FA(e) {
  var t = IA(e, `string`);
  return vA(t) == `symbol` ? t : t + ``;
}
function IA(e, t) {
  if (vA(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (vA(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
