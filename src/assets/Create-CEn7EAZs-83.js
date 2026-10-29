// Create-CEn7EAZs 83 — symbol
// Lines 26429-26770 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function ax(e, t) {
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
function ox(e) {
  if (Array.isArray(e)) return e;
}
var sx = (0, X.forwardRef)(function (e, t) {
    var n = e.aspect,
      r = e.initialDimension,
      i = r === void 0 ? { width: -1, height: -1 } : r,
      a = e.width,
      o = a === void 0 ? `100%` : a,
      s = e.height,
      c = s === void 0 ? `100%` : s,
      l = e.minWidth,
      u = l === void 0 ? 0 : l,
      d = e.minHeight,
      f = e.maxHeight,
      p = e.children,
      m = e.debounce,
      g = m === void 0 ? 0 : m,
      _ = e.id,
      v = e.className,
      y = e.onResize,
      b = e.style,
      x = b === void 0 ? {} : b,
      S = (0, X.useRef)(null),
      C = (0, X.useRef)();
    ((C.current = y),
      (0, X.useImperativeHandle)(t, function () {
        return Object.defineProperty(S.current, "current", {
          get: function () {
            return (
              console.warn(
                `The usage of ref.current.current is deprecated and will no longer be supported.`,
              ),
              S.current
            );
          },
          configurable: !0,
        });
      }));
    var w = tx(
        (0, X.useState)({ containerWidth: i.width, containerHeight: i.height }),
        2,
      ),
      T = w[0],
      E = w[1],
      D = (0, X.useCallback)(function (e, t) {
        E(function (n) {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []);
    (0, X.useEffect)(
      function () {
        var e = function (e) {
          var t,
            n = e[0].contentRect,
            r = n.width,
            i = n.height;
          (D(r, i), (t = C.current) == null || t.call(C, r, i));
        };
        g > 0 && (e = (0, Jb.default)(e, g, { trailing: !0, leading: !1 }));
        var t = new ResizeObserver(e),
          n = S.current.getBoundingClientRect(),
          r = n.width,
          i = n.height;
        return (
          D(r, i),
          t.observe(S.current),
          function () {
            t.disconnect();
          }
        );
      },
      [D, g],
    );
    var O = (0, X.useMemo)(
      function () {
        var e = T.containerWidth,
          t = T.containerHeight;
        if (e < 0 || t < 0) return null;
        Rm(o) || Rm(c);
        var r = Rm(o) ? e : o,
          i = Rm(c) ? t : c;
        n &&
          n > 0 &&
          (r ? (i = r / n) : i && (r = i * n), f && i > f && (i = f));
        var a = !Array.isArray(p) && nh(p.type).endsWith(`Chart`);
        return X.Children.map(p, function (e) {
          return X.isValidElement(e)
            ? (0, X.cloneElement)(
                e,
                Zb(
                  { width: r, height: i },
                  a
                    ? {
                        style: Zb(
                          {
                            height: `100%`,
                            width: `100%`,
                            maxHeight: i,
                            maxWidth: r,
                          },
                          e.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : e;
        });
      },
      [n, p, c, f, d, u, T, o],
    );
    return X.createElement(
      `div`,
      {
        id: _ ? `${_}` : void 0,
        className: h(`recharts-responsive-container`, v),
        style: Zb(
          Zb({}, x),
          {},
          { width: o, height: c, minWidth: u, minHeight: d, maxHeight: f },
        ),
        ref: S,
      },
      O,
    );
  }),
  cx = function (e) {
    return null;
  };
cx.displayName = `Cell`;
function lx(e) {
  "@babel/helpers - typeof";
  return (
    (lx =
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
    lx(e)
  );
}
function ux(e, t) {
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
function dx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ux(Object(n), !0).forEach(function (t) {
          fx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ux(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function fx(e, t, n) {
  return (
    (t = px(t)),
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
function px(e) {
  var t = mx(e, `string`);
  return lx(t) == `symbol` ? t : t + ``;
}
function mx(e, t) {
  if (lx(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (lx(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var hx = { widthCache: {}, cacheCount: 0 },
  gx = 2e3,
  _x = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  vx = `recharts_measurement_span`;
function yx(e) {
  var t = dx({}, e);
  return (
    Object.keys(t).forEach(function (e) {
      t[e] || delete t[e];
    }),
    t
  );
}
var bx = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Cb.isSsr) return { width: 0, height: 0 };
    var n = yx(t),
      r = JSON.stringify({ text: e, copyStyle: n });
    if (hx.widthCache[r]) return hx.widthCache[r];
    try {
      var i = document.getElementById(vx);
      i ||
        ((i = document.createElement(`span`)),
        i.setAttribute(`id`, vx),
        i.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(i));
      var a = dx(dx({}, _x), n);
      (Object.assign(i.style, a), (i.textContent = `${e}`));
      var o = i.getBoundingClientRect(),
        s = { width: o.width, height: o.height };
      return (
        (hx.widthCache[r] = s),
        ++hx.cacheCount > gx && ((hx.cacheCount = 0), (hx.widthCache = {})),
        s
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  xx = function (e) {
    return {
      top: e.top + window.scrollY - document.documentElement.clientTop,
      left: e.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function Sx(e) {
  "@babel/helpers - typeof";
  return (
    (Sx =
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
    Sx(e)
  );
}
function Cx(e, t) {
  return Ox(e) || Dx(e, t) || Tx(e, t) || wx();
}
function wx() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tx(e, t) {
  if (e) {
    if (typeof e == `string`) return Ex(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ex(e, t);
  }
}
function Ex(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
