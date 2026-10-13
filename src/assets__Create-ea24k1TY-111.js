// assets__Create-ea24k1TY 111 — key
// Lines 36381-36725 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var xA = (function (e) {
  function t() {
    return (cA(this, t), dA(this, t, arguments));
  }
  return (
    gA(t, e),
    uA(
      t,
      [
        {
          key: `getTickValueCoord`,
          value: function (e) {
            var t = e.coordinate,
              n = this.props,
              r = n.angle,
              i = n.cx,
              a = n.cy;
            return TD(i, a, t, r);
          },
        },
        {
          key: `getTickTextAnchor`,
          value: function () {
            var e = this.props.orientation,
              t;
            switch (e) {
              case `left`:
                t = `end`;
                break;
              case `right`:
                t = `start`;
                break;
              default:
                t = `middle`;
                break;
            }
            return t;
          },
        },
        {
          key: `getViewBox`,
          value: function () {
            var e = this.props,
              t = e.cx,
              n = e.cy,
              r = e.angle,
              i = e.ticks,
              a = (0, Qk.default)(i, function (e) {
                return e.coordinate || 0;
              });
            return {
              cx: t,
              cy: n,
              startAngle: r,
              endAngle: r,
              innerRadius:
                (0, $k.default)(i, function (e) {
                  return e.coordinate || 0;
                }).coordinate || 0,
              outerRadius: a.coordinate || 0,
            };
          },
        },
        {
          key: `renderAxisLine`,
          value: function () {
            var e = this.props,
              t = e.cx,
              n = e.cy,
              r = e.angle,
              i = e.ticks,
              a = e.axisLine,
              o = oA(e, eA),
              s = i.reduce(
                function (e, t) {
                  return [
                    Math.min(e[0], t.coordinate),
                    Math.max(e[1], t.coordinate),
                  ];
                },
                [1 / 0, -1 / 0],
              ),
              c = TD(t, n, s[0], r),
              l = TD(t, n, s[1], r),
              u = aA(
                aA(aA({}, Mh(o, !1)), {}, { fill: `none` }, Mh(a, !1)),
                {},
                { x1: c.x, y1: c.y, x2: l.x, y2: l.y },
              );
            return X.createElement(
              `line`,
              rA({ className: `recharts-polar-radius-axis-line` }, u),
            );
          },
        },
        {
          key: `renderTicks`,
          value: function () {
            var e = this,
              n = this.props,
              r = n.ticks,
              i = n.tick,
              a = n.angle,
              o = n.tickFormatter,
              s = n.stroke,
              c = oA(n, tA),
              l = this.getTickTextAnchor(),
              u = Mh(c, !1),
              d = Mh(i, !1),
              f = r.map(function (n, r) {
                var c = e.getTickValueCoord(n),
                  f = aA(
                    aA(
                      aA(
                        aA(
                          {
                            textAnchor: l,
                            transform: `rotate(${90 - a}, ${c.x}, ${c.y})`,
                          },
                          u,
                        ),
                        {},
                        { stroke: `none`, fill: s },
                        d,
                      ),
                      {},
                      { index: r },
                      c,
                    ),
                    {},
                    { payload: n },
                  );
                return X.createElement(
                  zh,
                  rA(
                    {
                      className: h(`recharts-polar-radius-axis-tick`, OD(i)),
                      key: `tick-${n.coordinate}`,
                    },
                    xh(e.props, n, r),
                  ),
                  t.renderTickItem(i, f, o ? o(n.value, r) : n.value),
                );
              });
            return X.createElement(
              zh,
              { className: `recharts-polar-radius-axis-ticks` },
              f,
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.ticks,
              n = e.axisLine,
              r = e.tick;
            return !t || !t.length
              ? null
              : X.createElement(
                  zh,
                  {
                    className: h(
                      `recharts-polar-radius-axis`,
                      this.props.className,
                    ),
                  },
                  n && this.renderAxisLine(),
                  r && this.renderTicks(),
                  PD.renderCallByParent(this.props, this.getViewBox()),
                );
          },
        },
      ],
      [
        {
          key: `renderTickItem`,
          value: function (e, t, n) {
            return X.isValidElement(e)
              ? X.cloneElement(e, t)
              : (0, Sh.default)(e)
                ? e(t)
                : X.createElement(
                    pb,
                    rA({}, t, {
                      className: `recharts-polar-radius-axis-tick-value`,
                    }),
                    n,
                  );
          },
        },
      ],
    )
  );
})(X.PureComponent);
(vA(xA, `displayName`, `PolarRadiusAxis`),
  vA(xA, `axisType`, `radiusAxis`),
  vA(xA, `defaultProps`, {
    type: `number`,
    radiusAxisId: 0,
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: `right`,
    stroke: `#ccc`,
    axisLine: !0,
    tick: !0,
    tickCount: 5,
    allowDataOverflow: !1,
    scale: `auto`,
    allowDuplicatedCategory: !0,
  }));
function SA(e) {
  "@babel/helpers - typeof";
  return (
    (SA =
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
    SA(e)
  );
}
function CA() {
  return (
    (CA = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    CA.apply(this, arguments)
  );
}
function wA(e, t) {
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
function TA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wA(Object(n), !0).forEach(function (t) {
          IA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function EA(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function DA(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, LA(r.key), r));
  }
}
function OA(e, t, n) {
  return (
    t && DA(e.prototype, t),
    n && DA(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function kA(e, t, n) {
  return (
    (t = NA(t)),
    AA(
      e,
      MA() ? Reflect.construct(t, n || [], NA(e).constructor) : t.apply(e, n),
    )
  );
}
function AA(e, t) {
  if (t && (SA(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return jA(e);
}
function jA(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function MA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (MA = function () {
    return !!e;
  })();
}
function NA(e) {
  return (
    (NA = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    NA(e)
  );
}
function PA(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && FA(e, t));
}
