// assets__Create-ea24k1TY 121 — symbol
// Lines 39657-40001 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function RN(e, t) {
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
function zN(e) {
  if (Array.isArray(e)) return e;
}
function BN() {
  return (
    (BN = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    BN.apply(this, arguments)
  );
}
var VN = function (e, t) {
    return X.isValidElement(e)
      ? X.cloneElement(e, t)
      : (0, Sh.default)(e)
        ? e(t)
        : X.createElement(
            `line`,
            BN({}, t, { className: `recharts-reference-line-line` }),
          );
  },
  HN = function (e, t, n, r, i, a, o, s, c) {
    var l = i.x,
      u = i.y,
      d = i.width,
      f = i.height;
    if (n) {
      var p = c.y,
        m = e.y.apply(p, { position: a });
      if (NM(c, `discard`) && !e.y.isInRange(m)) return null;
      var h = [
        { x: l + d, y: m },
        { x: l, y: m },
      ];
      return s === `left` ? h.reverse() : h;
    }
    if (t) {
      var g = c.x,
        _ = e.x.apply(g, { position: a });
      if (NM(c, `discard`) && !e.x.isInRange(_)) return null;
      var v = [
        { x: _, y: u + f },
        { x: _, y: u },
      ];
      return o === `top` ? v.reverse() : v;
    }
    if (r) {
      var y = c.segment.map(function (t) {
        return e.apply(t, { position: a });
      });
      return NM(c, `discard`) &&
        (0, _N.default)(y, function (t) {
          return !e.isInRange(t);
        })
        ? null
        : y;
    }
    return null;
  };
function UN(e) {
  var t = e.x,
    n = e.y,
    r = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    s = e.className;
  e.alwaysShow;
  var c = pN(),
    l = mN(i),
    u = hN(a),
    d = gN();
  if (!c || !d) return null;
  var f = HN(
    $M({ x: l.scale, y: u.scale }),
    lh(t),
    lh(n),
    r && r.length === 2,
    d,
    e.position,
    l.orientation,
    u.orientation,
    e,
  );
  if (!f) return null;
  var p = PN(f, 2),
    m = p[0],
    g = m.x,
    _ = m.y,
    v = p[1],
    y = v.x,
    b = v.y,
    x = AN(
      AN({ clipPath: NM(e, `hidden`) ? `url(#${c})` : void 0 }, Mh(e, !0)),
      {},
      { x1: g, y1: _, x2: y, y2: b },
    );
  return X.createElement(
    zh,
    { className: h(`recharts-reference-line`, s) },
    VN(o, x),
    PD.renderCallByParent(e, ZM({ x1: g, y1: _, x2: y, y2: b })),
  );
}
var WN = (function (e) {
  function t() {
    return (yN(this, t), SN(this, t, arguments));
  }
  return (
    DN(t, e),
    xN(t, [
      {
        key: `render`,
        value: function () {
          return X.createElement(UN, this.props);
        },
      },
    ])
  );
})(X.Component);
(jN(WN, `displayName`, `ReferenceLine`),
  jN(WN, `defaultProps`, {
    isFront: !1,
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    fill: `none`,
    stroke: `#ccc`,
    fillOpacity: 1,
    strokeWidth: 1,
    position: `middle`,
  }));
function GN() {
  return (
    (GN = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    GN.apply(this, arguments)
  );
}
function KN(e) {
  "@babel/helpers - typeof";
  return (
    (KN =
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
    KN(e)
  );
}
function qN(e, t) {
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
function JN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? qN(Object(n), !0).forEach(function (t) {
          aP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function YN(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function XN(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, oP(r.key), r));
  }
}
function ZN(e, t, n) {
  return (
    t && XN(e.prototype, t),
    n && XN(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function QN(e, t, n) {
  return (
    (t = nP(t)),
    $N(
      e,
      tP() ? Reflect.construct(t, n || [], nP(e).constructor) : t.apply(e, n),
    )
  );
}
function $N(e, t) {
  if (t && (KN(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return eP(e);
}
function eP(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function tP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (tP = function () {
    return !!e;
  })();
}
function nP(e) {
  return (
    (nP = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    nP(e)
  );
}
function rP(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && iP(e, t));
}
function iP(e, t) {
  return (
    (iP = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    iP(e, t)
  );
}
function aP(e, t, n) {
  return (
    (t = oP(t)),
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
function oP(e) {
  var t = sP(e, `string`);
  return KN(t) == `symbol` ? t : t + ``;
}
function sP(e, t) {
  if (KN(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (KN(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
