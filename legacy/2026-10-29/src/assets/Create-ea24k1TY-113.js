// Create-ea24k1TY 113 — createelement
// Lines 37043-37374 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function ZA(e, t) {
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
function QA(e) {
  if (Array.isArray(e)) return e;
}
function $A(e, t) {
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
function ej(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? $A(Object(n), !0).forEach(function (t) {
          tj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $A(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tj(e, t, n) {
  return (
    (t = nj(t)),
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
function nj(e) {
  var t = rj(e, `string`);
  return GA(t) == `symbol` ? t : t + ``;
}
function rj(e, t) {
  if (GA(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (GA(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ij = function (e, t, n, r, i) {
    var a = n - r,
      o = `M ${e},${t}`;
    return (
      (o += `L ${e + n},${t}`),
      (o += `L ${e + n - a / 2},${t + i}`),
      (o += `L ${e + n - a / 2 - r},${t + i}`),
      (o += `L ${e},${t} Z`),
      o
    );
  },
  aj = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  oj = function (e) {
    var t = ej(ej({}, aj), e),
      n = (0, X.useRef)(),
      r = qA((0, X.useState)(-1), 2),
      i = r[0],
      a = r[1];
    (0, X.useEffect)(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var e = n.current.getTotalLength();
          e && a(e);
        } catch {}
    }, []);
    var o = t.x,
      s = t.y,
      c = t.upperWidth,
      l = t.lowerWidth,
      u = t.height,
      d = t.className,
      f = t.animationEasing,
      p = t.animationDuration,
      m = t.animationBegin,
      g = t.isUpdateAnimationActive;
    if (
      o !== +o ||
      s !== +s ||
      c !== +c ||
      l !== +l ||
      u !== +u ||
      (c === 0 && l === 0) ||
      u === 0
    )
      return null;
    var _ = h(`recharts-trapezoid`, d);
    return g
      ? X.createElement(
          rk,
          {
            canBegin: i > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: u, x: o, y: s },
            to: { upperWidth: c, lowerWidth: l, height: u, x: o, y: s },
            duration: p,
            animationEasing: f,
            isActive: g,
          },
          function (e) {
            var r = e.upperWidth,
              a = e.lowerWidth,
              o = e.height,
              s = e.x,
              c = e.y;
            return X.createElement(
              rk,
              {
                canBegin: i > 0,
                from: `0px ${i === -1 ? 1 : i}px`,
                to: `${i}px 0px`,
                attributeName: `strokeDasharray`,
                begin: m,
                duration: p,
                easing: f,
              },
              X.createElement(
                `path`,
                KA({}, Mh(t, !0), {
                  className: _,
                  d: ij(s, c, r, a, o),
                  ref: n,
                }),
              ),
            );
          },
        )
      : X.createElement(
          `g`,
          null,
          X.createElement(
            `path`,
            KA({}, Mh(t, !0), { className: _, d: ij(o, s, c, l, u) }),
          ),
        );
  },
  sj = e(UA()),
  cj = e(WA()),
  lj = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function uj(e) {
  "@babel/helpers - typeof";
  return (
    (uj =
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
    uj(e)
  );
}
function dj(e, t) {
  if (e == null) return {};
  var n = fj(e, t),
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
function fj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function pj(e, t) {
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
function mj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pj(Object(n), !0).forEach(function (t) {
          hj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hj(e, t, n) {
  return (
    (t = gj(t)),
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
function gj(e) {
  var t = _j(e, `string`);
  return uj(t) == `symbol` ? t : t + ``;
}
function _j(e, t) {
  if (uj(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (uj(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function vj(e, t) {
  return mj(mj({}, t), e);
}
function yj(e, t) {
  return e === `symbols`;
}
function bj(e) {
  var t = e.shapeType,
    n = e.elementProps;
  switch (t) {
    case `rectangle`:
      return X.createElement(bk, n);
    case `trapezoid`:
      return X.createElement(oj, n);
    case `sector`:
      return X.createElement(YD, n);
    case `symbols`:
      if (yj(t, n)) return X.createElement(Rg, n);
      break;
    default:
      return null;
  }
}
function xj(e) {
  return (0, X.isValidElement)(e) ? e.props : e;
}
