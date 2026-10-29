// Create-CEn7EAZs 124 — props
// Lines 40775-41119 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var wP = function (e) {
    var t = e.x,
      n = e.y,
      r = e.xAxis,
      i = e.yAxis,
      a = hN({ x: r.scale, y: i.scale }),
      o = a.apply({ x: t, y: n }, { bandAware: !0 });
    return YM(e, `discard`) && !a.isInRange(o) ? null : o;
  },
  TP = (function (e) {
    function t() {
      return (dP(this, t), mP(this, t, arguments));
    }
    return (
      yP(t, e),
      pP(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              n = e.x,
              r = e.y,
              i = e.r;
            e.alwaysShow;
            var a = e.clipPathId,
              o = Bm(n),
              s = Bm(r);
            if (!o || !s) return null;
            var c = wP(this.props);
            if (!c) return null;
            var l = c.x,
              u = c.y,
              d = this.props,
              f = d.shape,
              p = d.className,
              m = uP(
                uP(
                  {
                    clipPath: YM(this.props, `hidden`) ? `url(#${a})` : void 0,
                  },
                  lh(this.props, !0),
                ),
                {},
                { cx: l, cy: u },
              );
            return X.createElement(
              gh,
              { className: h(`recharts-reference-dot`, p) },
              t.renderDot(f, m),
              GD.renderCallByParent(this.props, {
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
(xP(TP, `displayName`, `ReferenceDot`),
  xP(TP, `defaultProps`, {
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
  xP(TP, `renderDot`, function (e, t) {
    return X.isValidElement(e)
      ? X.cloneElement(e, t)
      : (0, $m.default)(e)
        ? e(t)
        : X.createElement(
            $k,
            sP({}, t, {
              cx: t.cx,
              cy: t.cy,
              className: `recharts-reference-dot-dot`,
            }),
          );
  }));
function EP() {
  return (
    (EP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    EP.apply(this, arguments)
  );
}
function DP(e) {
  "@babel/helpers - typeof";
  return (
    (DP =
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
    DP(e)
  );
}
function OP(e, t) {
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
function kP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? OP(Object(n), !0).forEach(function (t) {
          BP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : OP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function AP(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function jP(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, VP(r.key), r));
  }
}
function MP(e, t, n) {
  return (
    t && jP(e.prototype, t),
    n && jP(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function NP(e, t, n) {
  return (
    (t = LP(t)),
    PP(
      e,
      IP() ? Reflect.construct(t, n || [], LP(e).constructor) : t.apply(e, n),
    )
  );
}
function PP(e, t) {
  if (t && (DP(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return FP(e);
}
function FP(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function IP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (IP = function () {
    return !!e;
  })();
}
function LP(e) {
  return (
    (LP = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    LP(e)
  );
}
function RP(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && zP(e, t));
}
function zP(e, t) {
  return (
    (zP = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    zP(e, t)
  );
}
function BP(e, t, n) {
  return (
    (t = VP(t)),
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
function VP(e) {
  var t = HP(e, `string`);
  return DP(t) == `symbol` ? t : t + ``;
}
function HP(e, t) {
  if (DP(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (DP(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var UP = function (e, t, n, r, i) {
    var a = i.x1,
      o = i.x2,
      s = i.y1,
      c = i.y2,
      l = i.xAxis,
      u = i.yAxis;
    if (!l || !u) return null;
    var d = hN({ x: l.scale, y: u.scale }),
      f = {
        x: e ? d.x.apply(a, { position: `start` }) : d.x.rangeMin,
        y: n ? d.y.apply(s, { position: `start` }) : d.y.rangeMin,
      },
      p = {
        x: t ? d.x.apply(o, { position: `end` }) : d.x.rangeMax,
        y: r ? d.y.apply(c, { position: `end` }) : d.y.rangeMax,
      };
    return YM(i, `discard`) && (!d.isInRange(f) || !d.isInRange(p))
      ? null
      : fN(f, p);
  },
  WP = (function (e) {
    function t() {
      return (AP(this, t), NP(this, t, arguments));
    }
    return (
      RP(t, e),
      MP(t, [
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
              c = Bm(n),
              l = Bm(r),
              u = Bm(i),
              d = Bm(a),
              f = this.props.shape;
            if (!c && !l && !u && !d && !f) return null;
            var p = UP(c, l, u, d, this.props);
            if (!p && !f) return null;
            var m = YM(this.props, `hidden`) ? `url(#${s})` : void 0;
            return X.createElement(
              gh,
              { className: h(`recharts-reference-area`, o) },
              t.renderRect(f, kP(kP({ clipPath: m }, lh(this.props, !0)), p)),
              GD.renderCallByParent(this.props, p),
            );
          },
        },
      ])
    );
  })(X.Component);
(BP(WP, `displayName`, `ReferenceArea`),
  BP(WP, `defaultProps`, {
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
  BP(WP, `renderRect`, function (e, t) {
    return X.isValidElement(e)
      ? X.cloneElement(e, t)
      : (0, $m.default)(e)
        ? e(t)
        : X.createElement(
            Ik,
            EP({}, t, { className: `recharts-reference-area-rect` }),
          );
  }));
function GP(e) {
  return YP(e) || JP(e) || qP(e) || KP();
}
function KP() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
