// assets__Create-ea24k1TY 122 — props
// Lines 40002-40346 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var cP = function (e) {
    var t = e.x,
      n = e.y,
      r = e.xAxis,
      i = e.yAxis,
      a = $M({ x: r.scale, y: i.scale }),
      o = a.apply({ x: t, y: n }, { bandAware: !0 });
    return NM(e, `discard`) && !a.isInRange(o) ? null : o;
  },
  lP = (function (e) {
    function t() {
      return (YN(this, t), QN(this, t, arguments));
    }
    return (
      rP(t, e),
      ZN(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              n = e.x,
              r = e.y,
              i = e.r;
            e.alwaysShow;
            var a = e.clipPathId,
              o = lh(n),
              s = lh(r);
            if (!o || !s) return null;
            var c = cP(this.props);
            if (!c) return null;
            var l = c.x,
              u = c.y,
              d = this.props,
              f = d.shape,
              p = d.className,
              m = JN(
                JN(
                  {
                    clipPath: NM(this.props, `hidden`) ? `url(#${a})` : void 0,
                  },
                  Mh(this.props, !0),
                ),
                {},
                { cx: l, cy: u },
              );
            return X.createElement(
              zh,
              { className: h(`recharts-reference-dot`, p) },
              t.renderDot(f, m),
              PD.renderCallByParent(this.props, {
                x: l - i,
                y: u - i,
                width: 2 * i,
                height: 2 * i,
              }),
            );
          },
        },
      ])
    );
  })(X.Component);
(aP(lP, `displayName`, `ReferenceDot`),
  aP(lP, `defaultProps`, {
    isFront: !1,
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: `#fff`,
    stroke: `#ccc`,
    fillOpacity: 1,
    strokeWidth: 1,
  }),
  aP(lP, `renderDot`, function (e, t) {
    return X.isValidElement(e)
      ? X.cloneElement(e, t)
      : (0, Sh.default)(e)
        ? e(t)
        : X.createElement(
            Lk,
            GN({}, t, {
              cx: t.cx,
              cy: t.cy,
              className: `recharts-reference-dot-dot`,
            }),
          );
  }));
function uP() {
  return (
    (uP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uP.apply(this, arguments)
  );
}
function dP(e) {
  "@babel/helpers - typeof";
  return (
    (dP =
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
    dP(e)
  );
}
function fP(e, t) {
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
function pP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fP(Object(n), !0).forEach(function (t) {
          wP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function mP(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function hP(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, TP(r.key), r));
  }
}
function gP(e, t, n) {
  return (
    t && hP(e.prototype, t),
    n && hP(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _P(e, t, n) {
  return (
    (t = xP(t)),
    vP(
      e,
      bP() ? Reflect.construct(t, n || [], xP(e).constructor) : t.apply(e, n),
    )
  );
}
function vP(e, t) {
  if (t && (dP(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return yP(e);
}
function yP(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function bP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (bP = function () {
    return !!e;
  })();
}
function xP(e) {
  return (
    (xP = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    xP(e)
  );
}
function SP(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && CP(e, t));
}
function CP(e, t) {
  return (
    (CP = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    CP(e, t)
  );
}
function wP(e, t, n) {
  return (
    (t = TP(t)),
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
function TP(e) {
  var t = EP(e, `string`);
  return dP(t) == `symbol` ? t : t + ``;
}
function EP(e, t) {
  if (dP(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (dP(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var DP = function (e, t, n, r, i) {
    var a = i.x1,
      o = i.x2,
      s = i.y1,
      c = i.y2,
      l = i.xAxis,
      u = i.yAxis;
    if (!l || !u) return null;
    var d = $M({ x: l.scale, y: u.scale }),
      f = {
        x: e ? d.x.apply(a, { position: `start` }) : d.x.rangeMin,
        y: n ? d.y.apply(s, { position: `start` }) : d.y.rangeMin,
      },
      p = {
        x: t ? d.x.apply(o, { position: `end` }) : d.x.rangeMax,
        y: r ? d.y.apply(c, { position: `end` }) : d.y.rangeMax,
      };
    return NM(i, `discard`) && (!d.isInRange(f) || !d.isInRange(p))
      ? null
      : XM(f, p);
  },
  OP = (function (e) {
    function t() {
      return (mP(this, t), _P(this, t, arguments));
    }
    return (
      SP(t, e),
      gP(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              n = e.x1,
              r = e.x2,
              i = e.y1,
              a = e.y2,
              o = e.className;
            e.alwaysShow;
            var s = e.clipPathId,
              c = lh(n),
              l = lh(r),
              u = lh(i),
              d = lh(a),
              f = this.props.shape;
            if (!c && !l && !u && !d && !f) return null;
            var p = DP(c, l, u, d, this.props);
            if (!p && !f) return null;
            var m = NM(this.props, `hidden`) ? `url(#${s})` : void 0;
            return X.createElement(
              zh,
              { className: h(`recharts-reference-area`, o) },
              t.renderRect(f, pP(pP({ clipPath: m }, Mh(this.props, !0)), p)),
              PD.renderCallByParent(this.props, p),
            );
          },
        },
      ])
    );
  })(X.Component);
(wP(OP, `displayName`, `ReferenceArea`),
  wP(OP, `defaultProps`, {
    isFront: !1,
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: `#ccc`,
    fillOpacity: 0.5,
    stroke: `none`,
    strokeWidth: 1,
  }),
  wP(OP, `renderRect`, function (e, t) {
    return X.isValidElement(e)
      ? X.cloneElement(e, t)
      : (0, Sh.default)(e)
        ? e(t)
        : X.createElement(
            bk,
            uP({}, t, { className: `recharts-reference-area-rect` }),
          );
  }));
function kP(e) {
  return NP(e) || MP(e) || jP(e) || AP();
}
function AP() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
