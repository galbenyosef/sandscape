// Create-ea24k1TY 79 — state
// Lines 25012-25334 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var Bv = 1,
  Vv = (function (e) {
    function t() {
      var e;
      Dv(this, t);
      var n = [...arguments];
      return (
        (e = Av(this, t, [].concat(n))),
        Lv(e, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Lv(e, `handleKeyDown`, function (t) {
          t.key === `Escape` &&
            e.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: e.props.coordinate?.x ?? 0,
                y: e.props.coordinate?.y ?? 0,
              },
            });
        }),
        e
      );
    }
    return (
      Fv(t, e),
      kv(t, [
        {
          key: `updateBBox`,
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var e = this.wrapperNode.getBoundingClientRect();
              (Math.abs(e.width - this.state.lastBoundingBox.width) > Bv ||
                Math.abs(e.height - this.state.lastBoundingBox.height) > Bv) &&
                this.setState({
                  lastBoundingBox: { width: e.width, height: e.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: `componentDidMount`,
          value: function () {
            (document.addEventListener(`keydown`, this.handleKeyDown),
              this.updateBBox());
          },
        },
        {
          key: `componentWillUnmount`,
          value: function () {
            document.removeEventListener(`keydown`, this.handleKeyDown);
          },
        },
        {
          key: `componentDidUpdate`,
          value: function () {
            (this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (this.props.coordinate?.x !==
                  this.state.dismissedAtCoordinate.x ||
                  this.props.coordinate?.y !==
                    this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1));
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.active,
              r = t.allowEscapeViewBox,
              i = t.animationDuration,
              a = t.animationEasing,
              o = t.children,
              s = t.coordinate,
              c = t.hasPayload,
              l = t.isAnimationActive,
              u = t.offset,
              d = t.position,
              f = t.reverseDirection,
              p = t.useTranslate3d,
              m = t.viewBox,
              h = t.wrapperStyle,
              g = Cv({
                allowEscapeViewBox: r,
                coordinate: s,
                offsetTopLeft: u,
                position: d,
                reverseDirection: f,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: p,
                viewBox: m,
              }),
              _ = g.cssClasses,
              v = g.cssProperties,
              y = Ev(
                Ev(
                  { transition: l && n ? `transform ${i}ms ${a}` : void 0 },
                  v,
                ),
                {},
                {
                  pointerEvents: `none`,
                  visibility:
                    !this.state.dismissed && n && c ? `visible` : `hidden`,
                  position: `absolute`,
                  top: 0,
                  left: 0,
                },
                h,
              );
            return X.createElement(
              `div`,
              {
                tabIndex: -1,
                className: _,
                style: y,
                ref: function (t) {
                  e.wrapperNode = t;
                },
              },
              o,
            );
          },
        },
      ])
    );
  })(X.PureComponent),
  Hv = {
    isSsr: (function () {
      return !(
        typeof window < `u` &&
        window.document &&
        window.document.createElement &&
        window.setTimeout
      );
    })(),
    get: function (e) {
      return Hv[e];
    },
    set: function (e, t) {
      if (typeof e == `string`) Hv[e] = t;
      else {
        var n = Object.keys(e);
        n &&
          n.length &&
          n.forEach(function (t) {
            Hv[t] = e[t];
          });
      }
    },
  };
function Uv(e) {
  "@babel/helpers - typeof";
  return (
    (Uv =
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
    Uv(e)
  );
}
function Wv(e, t) {
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
function Gv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Wv(Object(n), !0).forEach(function (t) {
          ny(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Wv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Kv(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function qv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, ry(r.key), r));
  }
}
function Jv(e, t, n) {
  return (
    t && qv(e.prototype, t),
    n && qv(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Yv(e, t, n) {
  return (
    (t = $v(t)),
    Xv(
      e,
      Qv() ? Reflect.construct(t, n || [], $v(e).constructor) : t.apply(e, n),
    )
  );
}
function Xv(e, t) {
  if (t && (Uv(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return Zv(e);
}
function Zv(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function Qv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Qv = function () {
    return !!e;
  })();
}
function $v(e) {
  return (
    ($v = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    $v(e)
  );
}
function ey(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ty(e, t));
}
function ty(e, t) {
  return (
    (ty = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    ty(e, t)
  );
}
function ny(e, t, n) {
  return (
    (t = ry(t)),
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
function ry(e) {
  var t = iy(e, `string`);
  return Uv(t) == `symbol` ? t : t + ``;
}
function iy(e, t) {
  if (Uv(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Uv(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ay(e) {
  return e.dataKey;
}
function oy(e, t) {
  return X.isValidElement(e)
    ? X.cloneElement(e, t)
    : typeof e == `function`
      ? X.createElement(e, t)
      : X.createElement(pv, t);
}
