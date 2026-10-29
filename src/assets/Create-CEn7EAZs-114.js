// Create-CEn7EAZs 114 — props
// Lines 37499-37815 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function ZA(e, t) {
  return (
    (ZA = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    ZA(e, t)
  );
}
function QA(e, t, n) {
  return (
    (t = $A(t)),
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
function $A(e) {
  var t = ej(e, `string`);
  return RA(t) == `symbol` ? t : t + ``;
}
function ej(e, t) {
  if (RA(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (RA(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var tj = Math.PI / 180,
  nj = 1e-5,
  rj = (function (e) {
    function t() {
      return (HA(this, t), GA(this, t, arguments));
    }
    return (
      XA(t, e),
      WA(
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
                s = ID(n, r, i, e.coordinate),
                c = ID(n, r, i + (a === `inner` ? -1 : 1) * o, e.coordinate);
              return { x1: s.x, y1: s.y, x2: c.x, y2: c.y };
            },
          },
          {
            key: `getTickTextAnchor`,
            value: function (e) {
              var t = this.props.orientation,
                n = Math.cos(-e.coordinate * tj);
              return n > nj
                ? t === `outer`
                  ? `start`
                  : `end`
                : n < -nj
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
                o = VA(
                  VA({}, lh(this.props, !1)),
                  {},
                  { fill: `none` },
                  lh(i, !1),
                );
              if (a === `circle`)
                return X.createElement(
                  $k,
                  zA({ className: `recharts-polar-angle-axis-line` }, o, {
                    cx: t,
                    cy: n,
                    r,
                  }),
                );
              var s = this.props.ticks.map(function (e) {
                return ID(t, n, r, e.coordinate);
              });
              return X.createElement(
                Zk,
                zA({ className: `recharts-polar-angle-axis-line` }, o, {
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
                c = lh(this.props, !1),
                l = lh(i, !1),
                u = VA(VA({}, c), {}, { fill: `none` }, lh(a, !1)),
                d = r.map(function (n, r) {
                  var d = e.getTickLineCoord(n),
                    f = VA(
                      VA(
                        VA({ textAnchor: e.getTickTextAnchor(n) }, c),
                        {},
                        { stroke: `none`, fill: s },
                        l,
                      ),
                      {},
                      { index: r, payload: n, x: d.x2, y: d.y2 },
                    );
                  return X.createElement(
                    gh,
                    zA(
                      {
                        className: h(`recharts-polar-angle-axis-tick`, zD(i)),
                        key: `tick-${n.coordinate}`,
                      },
                      Qm(e.props, n, r),
                    ),
                    a &&
                      X.createElement(
                        `line`,
                        zA(
                          { className: `recharts-polar-angle-axis-tick-line` },
                          u,
                          d,
                        ),
                      ),
                    i && t.renderTickItem(i, f, o ? o(n.value, r) : n.value),
                  );
                });
              return X.createElement(
                gh,
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
                    gh,
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
                : (0, $m.default)(e)
                  ? e(t)
                  : X.createElement(
                      fS,
                      zA({}, t, {
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
(QA(rj, `displayName`, `PolarAngleAxis`),
  QA(rj, `axisType`, `angleAxis`),
  QA(rj, `defaultProps`, {
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
var ij = n((e, t) => {
    t.exports = iv()(Object.getPrototypeOf, Object);
  }),
  aj = n((e, t) => {
    var n = um(),
      r = ij(),
      i = dm(),
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
  oj = n((e, t) => {
    var n = um(),
      r = dm(),
      i = `[object Boolean]`;
    function a(e) {
      return e === !0 || e === !1 || (r(e) && n(e) == i);
    }
    t.exports = a;
  });
function sj(e) {
  "@babel/helpers - typeof";
  return (
    (sj =
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
    sj(e)
  );
}
function cj() {
  return (
    (cj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cj.apply(this, arguments)
  );
}
function lj(e, t) {
  return mj(e) || pj(e, t) || dj(e, t) || uj();
}
function uj() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dj(e, t) {
  if (e) {
    if (typeof e == `string`) return fj(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fj(e, t);
  }
}
function fj(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
