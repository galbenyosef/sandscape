// Create-ea24k1TY 77 — symbol
// Lines 24477-24812 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function pae() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mae(e, t) {
  if (e) {
    if (typeof e == `string`) return uv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return uv(e, t);
  }
}
function uv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function hae(e, t) {
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
function gae(e) {
  if (Array.isArray(e)) return e;
}
function dv(e, t) {
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
function fv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? dv(Object(n), !0).forEach(function (t) {
          _ae(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _ae(e, t, n) {
  return (
    (t = vae(t)),
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
function vae(e) {
  var t = yae(e, `string`);
  return cv(t) == `symbol` ? t : t + ``;
}
function yae(e, t) {
  if (cv(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (cv(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function bae(e) {
  return Array.isArray(e) && lh(e[0]) && lh(e[1]) ? e.join(` ~ `) : e;
}
var pv = function (e) {
  var t = e.separator,
    n = t === void 0 ? ` : ` : t,
    r = e.contentStyle,
    i = r === void 0 ? {} : r,
    a = e.itemStyle,
    o = a === void 0 ? {} : a,
    s = e.labelStyle,
    c = s === void 0 ? {} : s,
    l = e.payload,
    u = e.formatter,
    d = e.itemSorter,
    f = e.wrapperClassName,
    p = e.labelClassName,
    m = e.label,
    g = e.labelFormatter,
    _ = e.accessibilityLayer,
    v = _ !== void 0 && _,
    y = function () {
      if (l && l.length) {
        var e = { padding: 0, margin: 0 },
          t = (d ? (0, sv.default)(l, d) : l).map(function (e, t) {
            if (e.type === `none`) return null;
            var r = fv(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: e.color || `#000`,
                },
                o,
              ),
              i = e.formatter || u || bae,
              a = e.value,
              s = e.name,
              c = a,
              d = s;
            if (i && c != null && d != null) {
              var f = i(a, s, e, t, l);
              if (Array.isArray(f)) {
                var p = fae(f, 2);
                ((c = p[0]), (d = p[1]));
              } else c = f;
            }
            return X.createElement(
              `li`,
              {
                className: `recharts-tooltip-item`,
                key: `tooltip-item-${t}`,
                style: r,
              },
              lh(d)
                ? X.createElement(
                    `span`,
                    { className: `recharts-tooltip-item-name` },
                    d,
                  )
                : null,
              lh(d)
                ? X.createElement(
                    `span`,
                    { className: `recharts-tooltip-item-separator` },
                    n,
                  )
                : null,
              X.createElement(
                `span`,
                { className: `recharts-tooltip-item-value` },
                c,
              ),
              X.createElement(
                `span`,
                { className: `recharts-tooltip-item-unit` },
                e.unit || ``,
              ),
            );
          });
        return X.createElement(
          `ul`,
          { className: `recharts-tooltip-item-list`, style: e },
          t,
        );
      }
      return null;
    },
    b = fv(
      {
        margin: 0,
        padding: 10,
        backgroundColor: `#fff`,
        border: `1px solid #ccc`,
        whiteSpace: `nowrap`,
      },
      i,
    ),
    x = fv({ margin: 0 }, c),
    S = !(0, ah.default)(m),
    C = S ? m : ``,
    w = h(`recharts-default-tooltip`, f),
    T = h(`recharts-tooltip-label`, p);
  S && g && l != null && (C = g(m, l));
  var E = v ? { role: `status`, "aria-live": `assertive` } : {};
  return X.createElement(
    `div`,
    lv({ className: w, style: b }, E),
    X.createElement(
      `p`,
      { className: T, style: x },
      X.isValidElement(C) ? C : `${C}`,
    ),
    y(),
  );
};
function mv(e) {
  "@babel/helpers - typeof";
  return (
    (mv =
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
    mv(e)
  );
}
function hv(e, t, n) {
  return (
    (t = gv(t)),
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
function gv(e) {
  var t = _v(e, `string`);
  return mv(t) == `symbol` ? t : t + ``;
}
function _v(e, t) {
  if (mv(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (mv(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var vv = `recharts-tooltip-wrapper`,
  yv = { visibility: `hidden` };
function bv(e) {
  var t = e.coordinate,
    n = e.translateX,
    r = e.translateY;
  return h(
    vv,
    hv(
      hv(
        hv(
          hv({}, `${vv}-right`, ch(n) && t && ch(t.x) && n >= t.x),
          `${vv}-left`,
          ch(n) && t && ch(t.x) && n < t.x,
        ),
        `${vv}-bottom`,
        ch(r) && t && ch(t.y) && r >= t.y,
      ),
      `${vv}-top`,
      ch(r) && t && ch(t.y) && r < t.y,
    ),
  );
}
function xv(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    s = e.tooltipDimension,
    c = e.viewBox,
    l = e.viewBoxDimension;
  if (a && ch(a[r])) return a[r];
  var u = n[r] - s - i,
    d = n[r] + i;
  return t[r]
    ? o[r]
      ? u
      : d
    : o[r]
      ? u < c[r]
        ? Math.max(d, c[r])
        : Math.max(u, c[r])
      : d + s > c[r] + l
        ? Math.max(u, c[r])
        : Math.max(d, c[r]);
}
function Sv(e) {
  var t = e.translateX,
    n = e.translateY;
  return {
    transform: e.useTranslate3d
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
