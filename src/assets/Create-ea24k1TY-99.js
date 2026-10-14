// Create-ea24k1TY 99 — math
// Lines 32459-32801 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function yD(e) {
  "@babel/helpers - typeof";
  return (
    (yD =
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
    yD(e)
  );
}
function bD(e, t) {
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
function xD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bD(Object(n), !0).forEach(function (t) {
          SD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function SD(e, t, n) {
  return (
    (t = Woe(t)),
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
function Woe(e) {
  var t = Goe(e, `string`);
  return yD(t) == `symbol` ? t : t + ``;
}
function Goe(e, t) {
  if (yD(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (yD(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Koe(e, t) {
  return Xoe(e) || Yoe(e, t) || Joe(e, t) || qoe();
}
function qoe() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Joe(e, t) {
  if (e) {
    if (typeof e == `string`) return CD(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return CD(e, t);
  }
}
function CD(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Yoe(e, t) {
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
function Xoe(e) {
  if (Array.isArray(e)) return e;
}
var wD = Math.PI / 180,
  Zoe = function (e) {
    return (e * 180) / Math.PI;
  },
  TD = function (e, t, n, r) {
    return { x: e + Math.cos(-wD * r) * n, y: t + Math.sin(-wD * r) * n };
  },
  ED = function (e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { top: 0, right: 0, bottom: 0, left: 0 };
    return (
      Math.min(
        Math.abs(e - (n.left || 0) - (n.right || 0)),
        Math.abs(t - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  Qoe = function (e, t, n, r, i) {
    var a = e.width,
      o = e.height,
      s = e.startAngle,
      c = e.endAngle,
      l = dh(e.cx, a, a / 2),
      u = dh(e.cy, o, o / 2),
      d = ED(a, o, n),
      f = dh(e.innerRadius, d, 0),
      p = dh(e.outerRadius, d, d * 0.8);
    return Object.keys(t).reduce(function (e, n) {
      var a = t[n],
        o = a.domain,
        d = a.reversed,
        m;
      if ((0, ah.default)(a.range))
        (r === `angleAxis` ? (m = [s, c]) : r === `radiusAxis` && (m = [f, p]),
          d && (m = [m[1], m[0]]));
      else {
        m = a.range;
        var h = Koe(m, 2);
        ((s = h[0]), (c = h[1]));
      }
      var g = Foe(a, i),
        _ = g.realScaleType,
        v = g.scale;
      (v.domain(o).range(m), Ioe(v));
      var y = Boe(v, xD(xD({}, a), {}, { realScaleType: _ })),
        b = xD(
          xD(xD({}, a), y),
          {},
          {
            range: m,
            radius: p,
            realScaleType: _,
            scale: v,
            cx: l,
            cy: u,
            innerRadius: f,
            outerRadius: p,
            startAngle: s,
            endAngle: c,
          },
        );
      return xD(xD({}, e), {}, SD({}, n, b));
    }, {});
  },
  $oe = function (e, t) {
    var n = e.x,
      r = e.y,
      i = t.x,
      a = t.y;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  ese = function (e, t) {
    var n = e.x,
      r = e.y,
      i = t.cx,
      a = t.cy,
      o = $oe({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: Zoe(c), angleInRadian: c }
    );
  },
  tse = function (e) {
    var t = e.startAngle,
      n = e.endAngle,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  nse = function (e, t) {
    var n = t.startAngle,
      r = t.endAngle,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  DD = function (e, t) {
    var n = e.x,
      r = e.y,
      i = ese({ x: n, y: r }, t),
      a = i.radius,
      o = i.angle,
      s = t.innerRadius,
      c = t.outerRadius;
    if (a < s || a > c) return !1;
    if (a === 0) return !0;
    var l = tse(t),
      u = l.startAngle,
      d = l.endAngle,
      f = o,
      p;
    if (u <= d) {
      for (; f > d;) f -= 360;
      for (; f < u;) f += 360;
      p = f >= u && f <= d;
    } else {
      for (; f > u;) f -= 360;
      for (; f < d;) f += 360;
      p = f >= d && f <= u;
    }
    return p ? xD(xD({}, t), {}, { radius: a, angle: nse(f, t) }) : null;
  },
  OD = function (e) {
    return !(0, X.isValidElement)(e) &&
      !(0, Sh.default)(e) &&
      typeof e != `boolean`
      ? e.className
      : ``;
  };
function kD(e) {
  "@babel/helpers - typeof";
  return (
    (kD =
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
    kD(e)
  );
}
var rse = [`offset`];
function ise(e) {
  return cse(e) || sse(e) || ose(e) || ase();
}
function ase() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ose(e, t) {
  if (e) {
    if (typeof e == `string`) return AD(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return AD(e, t);
  }
}
function sse(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function cse(e) {
  if (Array.isArray(e)) return AD(e);
}
function AD(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function lse(e, t) {
  if (e == null) return {};
  var n = use(e, t),
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
