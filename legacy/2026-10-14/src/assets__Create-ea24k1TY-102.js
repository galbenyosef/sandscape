// assets__Create-ea24k1TY 102 — symbol
// Lines 33463-33807 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function UD(e) {
  "@babel/helpers - typeof";
  return (
    (UD =
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
    UD(e)
  );
}
function WD() {
  return (
    (WD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    WD.apply(this, arguments)
  );
}
function GD(e, t) {
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
function KD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? GD(Object(n), !0).forEach(function (t) {
          Ise(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : GD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ise(e, t, n) {
  return (
    (t = Lse(t)),
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
function Lse(e) {
  var t = Rse(e, `string`);
  return UD(t) == `symbol` ? t : t + ``;
}
function Rse(e, t) {
  if (UD(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (UD(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var zse = function (e, t) {
    return oh(t - e) * Math.min(Math.abs(t - e), 359.999);
  },
  qD = function (e) {
    var t = e.cx,
      n = e.cy,
      r = e.radius,
      i = e.angle,
      a = e.sign,
      o = e.isExternal,
      s = e.cornerRadius,
      c = e.cornerIsExternal,
      l = s * (o ? 1 : -1) + r,
      u = Math.asin(s / l) / wD,
      d = c ? i : i + a * u,
      f = TD(t, n, l, d),
      p = TD(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: TD(t, n, l * Math.cos(u * wD), m),
      theta: u,
    };
  },
  JD = function (e) {
    var t = e.cx,
      n = e.cy,
      r = e.innerRadius,
      i = e.outerRadius,
      a = e.startAngle,
      o = e.endAngle,
      s = zse(a, o),
      c = a + s,
      l = TD(t, n, i, a),
      u = TD(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = TD(t, n, r, a),
        p = TD(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  Bse = function (e) {
    var t = e.cx,
      n = e.cy,
      r = e.innerRadius,
      i = e.outerRadius,
      a = e.cornerRadius,
      o = e.forceCornerRadius,
      s = e.cornerIsExternal,
      c = e.startAngle,
      l = e.endAngle,
      u = oh(l - c),
      d = qD({
        cx: t,
        cy: n,
        radius: i,
        angle: c,
        sign: u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      f = d.circleTangency,
      p = d.lineTangency,
      m = d.theta,
      h = qD({
        cx: t,
        cy: n,
        radius: i,
        angle: l,
        sign: -u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      g = h.circleTangency,
      _ = h.lineTangency,
      v = h.theta,
      y = s ? Math.abs(c - l) : Math.abs(c - l) - m - v;
    if (y < 0)
      return o
        ? `M ${p.x},${p.y}
        a${a},${a},0,0,1,${a * 2},0
        a${a},${a},0,0,1,${-a * 2},0
      `
        : JD({
            cx: t,
            cy: n,
            innerRadius: r,
            outerRadius: i,
            startAngle: c,
            endAngle: l,
          });
    var b = `M ${p.x},${p.y}
    A${a},${a},0,0,${+(u < 0)},${f.x},${f.y}
    A${i},${i},0,${+(y > 180)},${+(u < 0)},${g.x},${g.y}
    A${a},${a},0,0,${+(u < 0)},${_.x},${_.y}
  `;
    if (r > 0) {
      var x = qD({
          cx: t,
          cy: n,
          radius: r,
          angle: c,
          sign: u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        S = x.circleTangency,
        C = x.lineTangency,
        w = x.theta,
        T = qD({
          cx: t,
          cy: n,
          radius: r,
          angle: l,
          sign: -u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        E = T.circleTangency,
        D = T.lineTangency,
        O = T.theta,
        k = s ? Math.abs(c - l) : Math.abs(c - l) - w - O;
      if (k < 0 && a === 0) return `${b}L${t},${n}Z`;
      b += `L${D.x},${D.y}
      A${a},${a},0,0,${+(u < 0)},${E.x},${E.y}
      A${r},${r},0,${+(k > 180)},${+(u > 0)},${S.x},${S.y}
      A${a},${a},0,0,${+(u < 0)},${C.x},${C.y}Z`;
    } else b += `L${t},${n}Z`;
    return b;
  },
  Vse = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  YD = function (e) {
    var t = KD(KD({}, Vse), e),
      n = t.cx,
      r = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      s = t.forceCornerRadius,
      c = t.cornerIsExternal,
      l = t.startAngle,
      u = t.endAngle,
      d = t.className;
    if (a < i || l === u) return null;
    var f = h(`recharts-sector`, d),
      p = a - i,
      m = dh(o, p, 0, !0),
      g =
        m > 0 && Math.abs(l - u) < 360
          ? Bse({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              cornerRadius: Math.min(m, p / 2),
              forceCornerRadius: s,
              cornerIsExternal: c,
              startAngle: l,
              endAngle: u,
            })
          : JD({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return X.createElement(
      `path`,
      WD({}, Mh(t, !0), { className: f, d: g, role: `img` }),
    );
  };
function XD(e) {
  "@babel/helpers - typeof";
  return (
    (XD =
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
    XD(e)
  );
}
function ZD() {
  return (
    (ZD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ZD.apply(this, arguments)
  );
}
function QD(e, t) {
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
function $D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? QD(Object(n), !0).forEach(function (t) {
          Hse(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : QD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
