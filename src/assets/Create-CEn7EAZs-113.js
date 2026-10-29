// Create-CEn7EAZs 113 — key
// Lines 37154-37498 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var LA = (function (e) {
  function t() {
    return (wA(this, t), DA(this, t, arguments));
  }
  return (
    MA(t, e),
    EA(
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
            return ID(i, a, t, r);
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
              a = (0, mA.default)(i, function (e) {
                return e.coordinate || 0;
              });
            return {
              cx: t,
              cy: n,
              startAngle: r,
              endAngle: r,
              innerRadius:
                (0, hA.default)(i, function (e) {
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
              o = SA(e, gA),
              s = i.reduce(
                function (e, t) {
                  return [
                    Math.min(e[0], t.coordinate),
                    Math.max(e[1], t.coordinate),
                  ];
                },
                [1 / 0, -1 / 0],
              ),
              c = ID(t, n, s[0], r),
              l = ID(t, n, s[1], r),
              u = xA(
                xA(xA({}, lh(o, !1)), {}, { fill: `none` }, lh(a, !1)),
                {},
                { x1: c.x, y1: c.y, x2: l.x, y2: l.y },
              );
            return X.createElement(
              `line`,
              yA({ className: `recharts-polar-radius-axis-line` }, u),
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
              c = SA(n, _A),
              l = this.getTickTextAnchor(),
              u = lh(c, !1),
              d = lh(i, !1),
              f = r.map(function (n, r) {
                var c = e.getTickValueCoord(n),
                  f = xA(
                    xA(
                      xA(
                        xA(
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
                  gh,
                  yA(
                    {
                      className: h(`recharts-polar-radius-axis-tick`, zD(i)),
                      key: `tick-${n.coordinate}`,
                    },
                    Qm(e.props, n, r),
                  ),
                  t.renderTickItem(i, f, o ? o(n.value, r) : n.value),
                );
              });
            return X.createElement(
              gh,
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
                  gh,
                  {
                    className: h(
                      `recharts-polar-radius-axis`,
                      this.props.className,
                    ),
                  },
                  n && this.renderAxisLine(),
                  r && this.renderTicks(),
                  GD.renderCallByParent(this.props, this.getViewBox()),
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
              : (0, $m.default)(e)
                ? e(t)
                : X.createElement(
                    fS,
                    yA({}, t, {
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
(PA(LA, `displayName`, `PolarRadiusAxis`),
  PA(LA, `axisType`, `radiusAxis`),
  PA(LA, `defaultProps`, {
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
function RA(e) {
  "@babel/helpers - typeof";
  return (
    (RA =
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
    RA(e)
  );
}
function zA() {
  return (
    (zA = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zA.apply(this, arguments)
  );
}
function BA(e, t) {
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
function VA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? BA(Object(n), !0).forEach(function (t) {
          QA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : BA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function HA(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function UA(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, $A(r.key), r));
  }
}
function WA(e, t, n) {
  return (
    t && UA(e.prototype, t),
    n && UA(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function GA(e, t, n) {
  return (
    (t = YA(t)),
    KA(
      e,
      JA() ? Reflect.construct(t, n || [], YA(e).constructor) : t.apply(e, n),
    )
  );
}
function KA(e, t) {
  if (t && (RA(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return qA(e);
}
function qA(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function JA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (JA = function () {
    return !!e;
  })();
}
function YA(e) {
  return (
    (YA = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    YA(e)
  );
}
function XA(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ZA(e, t));
}
