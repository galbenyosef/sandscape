// Create-ea24k1TY 125 — array
// Lines 40992-41244 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function uF(e) {
  if (Array.isArray(e)) return e;
}
function dF(e, t) {
  if (e == null) return {};
  var n = fF(e, t),
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
function fF(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function pF(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function mF(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, jF(r.key), r));
  }
}
function hF(e, t, n) {
  return (
    t && mF(e.prototype, t),
    n && mF(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function gF(e, t, n) {
  return (
    (t = bF(t)),
    _F(
      e,
      yF() ? Reflect.construct(t, n || [], bF(e).constructor) : t.apply(e, n),
    )
  );
}
function _F(e, t) {
  if (t && (aF(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return vF(e);
}
function vF(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function yF() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (yF = function () {
    return !!e;
  })();
}
function bF(e) {
  return (
    (bF = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    bF(e)
  );
}
function xF(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && SF(e, t));
}
function SF(e, t) {
  return (
    (SF = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    SF(e, t)
  );
}
function CF(e) {
  return DF(e) || EF(e) || TF(e) || wF();
}
function wF() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TF(e, t) {
  if (e) {
    if (typeof e == `string`) return OF(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return OF(e, t);
  }
}
function EF(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function DF(e) {
  if (Array.isArray(e)) return OF(e);
}
function OF(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kF(e, t) {
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
      ? kF(Object(n), !0).forEach(function (t) {
          AF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function AF(e, t, n) {
  return (
    (t = jF(t)),
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
function jF(e) {
  var t = MF(e, `string`);
  return aF(t) == `symbol` ? t : t + ``;
}
function MF(e, t) {
  if (aF(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (aF(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var NF = { xAxis: [`bottom`, `top`], yAxis: [`left`, `right`] },
  PF = { width: `100%`, height: `100%` },
  FF = { x: 0, y: 0 };
function IF(e) {
  return e;
}
var LF = function (e, t) {
    return t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius;
  },
  RF = function (e, t, n, r) {
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
          Q(Q({}, r), TD(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        c = r.angle;
      return Q(Q(Q({}, r), TD(r.cx, r.cy, s, c)), {}, { angle: c, radius: s });
    }
    return FF;
  },
  zF = function (e, t) {
    var n = t.graphicalItems,
      r = t.dataStartIndex,
      i = t.dataEndIndex,
      a = (n ?? []).reduce(function (e, t) {
        var n = t.props.data;
        return n && n.length ? [].concat(CF(e), CF(n)) : e;
      }, []);
    return a.length > 0
      ? a
      : e && e.length && ch(r) && ch(i)
        ? e.slice(r, i + 1)
        : [];
  };
function BF(e) {
  return e === `number` ? [0, `auto`] : void 0;
}
