// Create-CEn7EAZs 123 — symbol
// Lines 40430-40774 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function eP(e, t) {
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
function tP(e) {
  if (Array.isArray(e)) return e;
}
function nP() {
  return (
    (nP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nP.apply(this, arguments)
  );
}
var rP = function (e, t) {
    return X.isValidElement(e)
      ? X.cloneElement(e, t)
      : (0, $m.default)(e)
        ? e(t)
        : X.createElement(
            `line`,
            nP({}, t, { className: `recharts-reference-line-line` }),
          );
  },
  iP = function (e, t, n, r, i, a, o, s, c) {
    var l = i.x,
      u = i.y,
      d = i.width,
      f = i.height;
    if (n) {
      var p = c.y,
        m = e.y.apply(p, { position: a });
      if (YM(c, `discard`) && !e.y.isInRange(m)) return null;
      var h = [
        { x: l + d, y: m },
        { x: l, y: m },
      ];
      return s === `left` ? h.reverse() : h;
    }
    if (t) {
      var g = c.x,
        _ = e.x.apply(g, { position: a });
      if (YM(c, `discard`) && !e.x.isInRange(_)) return null;
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
      return YM(c, `discard`) &&
        (0, NN.default)(y, function (t) {
          return !e.isInRange(t);
        })
        ? null
        : y;
    }
    return null;
  };
function aP(e) {
  var t = e.x,
    n = e.y,
    r = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    s = e.className;
  e.alwaysShow;
  var c = kN(),
    l = AN(i),
    u = jN(a),
    d = MN();
  if (!c || !d) return null;
  var f = iP(
    hN({ x: l.scale, y: u.scale }),
    Bm(t),
    Bm(n),
    r && r.length === 2,
    d,
    e.position,
    l.orientation,
    u.orientation,
    e,
  );
  if (!f) return null;
  var p = XN(f, 2),
    m = p[0],
    g = m.x,
    _ = m.y,
    v = p[1],
    y = v.x,
    b = v.y,
    x = KN(
      KN({ clipPath: YM(e, `hidden`) ? `url(#${c})` : void 0 }, lh(e, !0)),
      {},
      { x1: g, y1: _, x2: y, y2: b },
    );
  return X.createElement(
    gh,
    { className: h(`recharts-reference-line`, s) },
    rP(o, x),
    GD.renderCallByParent(e, pN({ x1: g, y1: _, x2: y, y2: b })),
  );
}
var oP = (function (e) {
  function t() {
    return (FN(this, t), RN(this, t, arguments));
  }
  return (
    UN(t, e),
    LN(t, [
      {
        key: `render`,
        value: function () {
          return X.createElement(aP, this.props);
        },
      },
    ])
  );
})(X.Component);
(qN(oP, `displayName`, `ReferenceLine`),
  qN(oP, `defaultProps`, {
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
function sP() {
  return (
    (sP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sP.apply(this, arguments)
  );
}
function cP(e) {
  "@babel/helpers - typeof";
  return (
    (cP =
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
    cP(e)
  );
}
function lP(e, t) {
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
function uP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? lP(Object(n), !0).forEach(function (t) {
          xP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : lP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function dP(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function fP(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, SP(r.key), r));
  }
}
function pP(e, t, n) {
  return (
    t && fP(e.prototype, t),
    n && fP(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function mP(e, t, n) {
  return (
    (t = vP(t)),
    hP(
      e,
      _P() ? Reflect.construct(t, n || [], vP(e).constructor) : t.apply(e, n),
    )
  );
}
function hP(e, t) {
  if (t && (cP(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return gP(e);
}
function gP(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function _P() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (_P = function () {
    return !!e;
  })();
}
function vP(e) {
  return (
    (vP = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    vP(e)
  );
}
function yP(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && bP(e, t));
}
function bP(e, t) {
  return (
    (bP = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    bP(e, t)
  );
}
function xP(e, t, n) {
  return (
    (t = SP(t)),
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
function SP(e) {
  var t = CP(e, `string`);
  return cP(t) == `symbol` ? t : t + ``;
}
function CP(e, t) {
  if (cP(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (cP(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
