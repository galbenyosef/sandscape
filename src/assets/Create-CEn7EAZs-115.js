// Create-CEn7EAZs 115 — createelement
// Lines 37816-38147 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function pj(e, t) {
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
function mj(e) {
  if (Array.isArray(e)) return e;
}
function hj(e, t) {
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
function gj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? hj(Object(n), !0).forEach(function (t) {
          _j(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _j(e, t, n) {
  return (
    (t = vj(t)),
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
function vj(e) {
  var t = yj(e, `string`);
  return sj(t) == `symbol` ? t : t + ``;
}
function yj(e, t) {
  if (sj(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (sj(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var bj = function (e, t, n, r, i) {
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
  xj = {
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
  Sj = function (e) {
    var t = gj(gj({}, xj), e),
      n = (0, X.useRef)(),
      r = lj((0, X.useState)(-1), 2),
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
          yk,
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
              yk,
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
                cj({}, lh(t, !0), {
                  className: _,
                  d: bj(s, c, r, a, o),
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
            cj({}, lh(t, !0), { className: _, d: bj(o, s, c, l, u) }),
          ),
        );
  },
  Cj = e(aj()),
  wj = e(oj()),
  Tj = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function Ej(e) {
  "@babel/helpers - typeof";
  return (
    (Ej =
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
    Ej(e)
  );
}
function Dj(e, t) {
  if (e == null) return {};
  var n = Oj(e, t),
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
function Oj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function kj(e, t) {
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
function Aj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kj(Object(n), !0).forEach(function (t) {
          jj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jj(e, t, n) {
  return (
    (t = Mj(t)),
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
function Mj(e) {
  var t = Nj(e, `string`);
  return Ej(t) == `symbol` ? t : t + ``;
}
function Nj(e, t) {
  if (Ej(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Ej(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Pj(e, t) {
  return Aj(Aj({}, t), e);
}
function Fj(e, t) {
  return e === `symbols`;
}
function Ij(e) {
  var t = e.shapeType,
    n = e.elementProps;
  switch (t) {
    case `rectangle`:
      return X.createElement(Ik, n);
    case `trapezoid`:
      return X.createElement(Sj, n);
    case `sector`:
      return X.createElement(oO, n);
    case `symbols`:
      if (Fj(t, n)) return X.createElement(i_, n);
      break;
    default:
      return null;
  }
}
function Lj(e) {
  return (0, X.isValidElement)(e) ? e.props : e;
}
