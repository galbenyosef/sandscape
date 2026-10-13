// assets__Create-ea24k1TY 112 — props
// Lines 36726-37042 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function FA(e, t) {
  return (
    (FA = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    FA(e, t)
  );
}
function IA(e, t, n) {
  return (
    (t = LA(t)),
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
function LA(e) {
  var t = RA(e, `string`);
  return SA(t) == `symbol` ? t : t + ``;
}
function RA(e, t) {
  if (SA(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (SA(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var zA = Math.PI / 180,
  BA = 1e-5,
  VA = (function (e) {
    function t() {
      return (EA(this, t), kA(this, t, arguments));
    }
    return (
      PA(t, e),
      OA(
        t,
        [
          {
            key: `getTickLineCoord`,
            value: function (e) {
              var t = this.props,
                n = t.cx,
                r = t.cy,
                i = t.radius,
                a = t.orientation,
                o = t.tickSize || 8,
                s = TD(n, r, i, e.coordinate),
                c = TD(n, r, i + (a === `inner` ? -1 : 1) * o, e.coordinate);
              return { x1: s.x, y1: s.y, x2: c.x, y2: c.y };
            },
          },
          {
            key: `getTickTextAnchor`,
            value: function (e) {
              var t = this.props.orientation,
                n = Math.cos(-e.coordinate * zA);
              return n > BA
                ? t === `outer`
                  ? `start`
                  : `end`
                : n < -BA
                  ? t === `outer`
                    ? `end`
                    : `start`
                  : `middle`;
            },
          },
          {
            key: `renderAxisLine`,
            value: function () {
              var e = this.props,
                t = e.cx,
                n = e.cy,
                r = e.radius,
                i = e.axisLine,
                a = e.axisLineType,
                o = TA(
                  TA({}, Mh(this.props, !1)),
                  {},
                  { fill: `none` },
                  Mh(i, !1),
                );
              if (a === `circle`)
                return X.createElement(
                  Lk,
                  CA({ className: `recharts-polar-angle-axis-line` }, o, {
                    cx: t,
                    cy: n,
                    r,
                  }),
                );
              var s = this.props.ticks.map(function (e) {
                return TD(t, n, r, e.coordinate);
              });
              return X.createElement(
                Fk,
                CA({ className: `recharts-polar-angle-axis-line` }, o, {
                  points: s,
                }),
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
                a = n.tickLine,
                o = n.tickFormatter,
                s = n.stroke,
                c = Mh(this.props, !1),
                l = Mh(i, !1),
                u = TA(TA({}, c), {}, { fill: `none` }, Mh(a, !1)),
                d = r.map(function (n, r) {
                  var d = e.getTickLineCoord(n),
                    f = TA(
                      TA(
                        TA({ textAnchor: e.getTickTextAnchor(n) }, c),
                        {},
                        { stroke: `none`, fill: s },
                        l,
                      ),
                      {},
                      { index: r, payload: n, x: d.x2, y: d.y2 },
                    );
                  return X.createElement(
                    zh,
                    CA(
                      {
                        className: h(`recharts-polar-angle-axis-tick`, OD(i)),
                        key: `tick-${n.coordinate}`,
                      },
                      xh(e.props, n, r),
                    ),
                    a &&
                      X.createElement(
                        `line`,
                        CA(
                          { className: `recharts-polar-angle-axis-tick-line` },
                          u,
                          d,
                        ),
                      ),
                    i && t.renderTickItem(i, f, o ? o(n.value, r) : n.value),
                  );
                });
              return X.createElement(
                zh,
                { className: `recharts-polar-angle-axis-ticks` },
                d,
              );
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.ticks,
                n = e.radius,
                r = e.axisLine;
              return n <= 0 || !t || !t.length
                ? null
                : X.createElement(
                    zh,
                    {
                      className: h(
                        `recharts-polar-angle-axis`,
                        this.props.className,
                      ),
                    },
                    r && this.renderAxisLine(),
                    this.renderTicks(),
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
                      CA({}, t, {
                        className: `recharts-polar-angle-axis-tick-value`,
                      }),
                      n,
                    );
            },
          },
        ],
      )
    );
  })(X.PureComponent);
(IA(VA, `displayName`, `PolarAngleAxis`),
  IA(VA, `axisType`, `angleAxis`),
  IA(VA, `defaultProps`, {
    type: `category`,
    angleAxisId: 0,
    scale: `auto`,
    cx: 0,
    cy: 0,
    orientation: `outer`,
    axisLine: !0,
    tickLine: !0,
    tickSize: 8,
    tick: !0,
    hide: !1,
    allowDuplicatedCategory: !0,
  }));
var HA = n((e, t) => {
    t.exports = l_()(Object.getPrototypeOf, Object);
  }),
  UA = n((e, t) => {
    var n = Om(),
      r = HA(),
      i = km(),
      a = `[object Object]`,
      o = Function.prototype,
      s = Object.prototype,
      c = o.toString,
      l = s.hasOwnProperty,
      u = c.call(Object);
    function d(e) {
      if (!i(e) || n(e) != a) return !1;
      var t = r(e);
      if (t === null) return !0;
      var o = l.call(t, `constructor`) && t.constructor;
      return typeof o == `function` && o instanceof o && c.call(o) == u;
    }
    t.exports = d;
  }),
  WA = n((e, t) => {
    var n = Om(),
      r = km(),
      i = `[object Boolean]`;
    function a(e) {
      return e === !0 || e === !1 || (r(e) && n(e) == i);
    }
    t.exports = a;
  });
function GA(e) {
  "@babel/helpers - typeof";
  return (
    (GA =
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
    GA(e)
  );
}
function KA() {
  return (
    (KA = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    KA.apply(this, arguments)
  );
}
function qA(e, t) {
  return QA(e) || ZA(e, t) || YA(e, t) || JA();
}
function JA() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YA(e, t) {
  if (e) {
    if (typeof e == `string`) return XA(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return XA(e, t);
  }
}
function XA(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
