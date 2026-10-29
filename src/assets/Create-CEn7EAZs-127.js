// Create-CEn7EAZs 127 — array
// Lines 41765-42017 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function EF(e) {
  if (Array.isArray(e)) return e;
}
function DF(e, t) {
  if (e == null) return {};
  var n = OF(e, t),
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
function OF(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function kF(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function AF(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, qF(r.key), r));
  }
}
function jF(e, t, n) {
  return (
    t && AF(e.prototype, t),
    n && AF(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function MF(e, t, n) {
  return (
    (t = IF(t)),
    NF(
      e,
      FF() ? Reflect.construct(t, n || [], IF(e).constructor) : t.apply(e, n),
    )
  );
}
function NF(e, t) {
  if (t && (xF(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return PF(e);
}
function PF(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function FF() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (FF = function () {
    return !!e;
  })();
}
function IF(e) {
  return (
    (IF = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    IF(e)
  );
}
function LF(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && RF(e, t));
}
function RF(e, t) {
  return (
    (RF = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    RF(e, t)
  );
}
function zF(e) {
  return UF(e) || HF(e) || VF(e) || BF();
}
function BF() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VF(e, t) {
  if (e) {
    if (typeof e == `string`) return WF(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return WF(e, t);
  }
}
function HF(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function UF(e) {
  if (Array.isArray(e)) return WF(e);
}
function WF(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function GF(e, t) {
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
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? GF(Object(n), !0).forEach(function (t) {
          KF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : GF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function KF(e, t, n) {
  return (
    (t = qF(t)),
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
function qF(e) {
  var t = JF(e, `string`);
  return xF(t) == `symbol` ? t : t + ``;
}
function JF(e, t) {
  if (xF(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (xF(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var YF = { xAxis: [`bottom`, `top`], yAxis: [`left`, `right`] },
  XF = { width: `100%`, height: `100%` },
  ZF = { x: 0, y: 0 };
function QF(e) {
  return e;
}
var $F = function (e, t) {
    return t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius;
  },
  eI = function (e, t, n, r) {
    var i = t.find(function (e) {
      return e && e.index === n;
    });
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          o = r.radius;
        return Q(
          Q(Q({}, r), ID(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        c = r.angle;
      return Q(Q(Q({}, r), ID(r.cx, r.cy, s, c)), {}, { angle: c, radius: s });
    }
    return ZF;
  },
  tI = function (e, t) {
    var n = t.graphicalItems,
      r = t.dataStartIndex,
      i = t.dataEndIndex,
      a = (n ?? []).reduce(function (e, t) {
        var n = t.props.data;
        return n && n.length ? [].concat(zF(e), zF(n)) : e;
      }, []);
    return a.length > 0
      ? a
      : e && e.length && zm(r) && zm(i)
        ? e.slice(r, i + 1)
        : [];
  };
function nI(e) {
  return e === `number` ? [0, `auto`] : void 0;
}
