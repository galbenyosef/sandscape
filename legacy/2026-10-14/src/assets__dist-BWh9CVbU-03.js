// assets__dist-BWh9CVbU 03 — crossaxis
// Lines 697-1040 of readable/assets__dist-BWh9CVbU.pretty.js (statement-aligned).
function xe(e) {
  return k.some((t) => e[t] >= 0);
}
var Se = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = I(e, t);
          switch (i) {
            case `referenceHidden`: {
              let e = be(
                await r.detectOverflow(t, {
                  ...a,
                  elementContext: `reference`,
                }),
                n.reference,
              );
              return {
                data: { referenceHiddenOffsets: e, referenceHidden: xe(e) },
              };
            }
            case `escaped`: {
              let e = be(
                await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                n.floating,
              );
              return { data: { escapedOffsets: e, escaped: xe(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Ce = new Set([`left`, `top`]);
async function we(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = L(n),
    s = R(n),
    c = V(n) === `y`,
    l = Ce.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = I(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var Te = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await we(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  Ee = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = I(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = V(i),
            p = z(f),
            m = u[p],
            h = u[f],
            g = (e, t) =>
              F(
                t + d[e === `y` ? `top` : `left`],
                t,
                t - d[e === `y` ? `bottom` : `right`],
              );
          (o && (m = g(p, m)), s && (h = g(f, h)));
          let _ = c.fn({ ...t, [p]: m, [f]: h });
          return {
            ..._,
            data: { x: _.x - n, y: _.y - r, enabled: { [p]: o, [f]: s } },
          };
        },
      }
    );
  },
  De = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = I(e, t),
            u = { x: n, y: r },
            d = V(i),
            f = z(d),
            p = u[f],
            m = u[d],
            h = I(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: h.mainAxis ?? 0, crossAxis: h.crossAxis ?? 0 };
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = Ce.has(L(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0);
            m < n ? (m = n) : m > r && (m = r);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  Oe = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          let { placement: n, rects: r, platform: i, elements: a } = t,
            { apply: o = () => {}, ...s } = I(e, t),
            c = await i.detectOverflow(t, s),
            l = L(n),
            u = R(n),
            d = V(n) === `y`,
            { width: f, height: p } = r.floating,
            m,
            h;
          l === `top` || l === `bottom`
            ? ((m = l),
              (h =
                u ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((h = l), (m = u === `end` ? `top` : `bottom`));
          let g = p - c.top - c.bottom,
            _ = f - c.left - c.right,
            v = A(p - c[m], g),
            y = A(f - c[h], _),
            b = t.middlewareData.shift,
            x = !b,
            S = v,
            C = y;
          (b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x &&
              !u &&
              (d
                ? (C = f - 2 * j(c.left, c.right))
                : (S = p - 2 * j(c.top, c.bottom))),
            await o({ ...t, availableWidth: C, availableHeight: S }));
          let w = await i.getDimensions(a.floating);
          return f !== w.width || p !== w.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ke() {
  return typeof window < `u`;
}
function U(e) {
  return Ae(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function W(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function G(e) {
  return ((Ae(e) ? e.ownerDocument : e.document) || window.document)
    ?.documentElement;
}
function Ae(e) {
  return ke() ? e instanceof Node || e instanceof W(e).Node : !1;
}
function K(e) {
  return ke() ? e instanceof Element || e instanceof W(e).Element : !1;
}
function q(e) {
  return ke() ? e instanceof HTMLElement || e instanceof W(e).HTMLElement : !1;
}
function je(e) {
  return !ke() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof W(e).ShadowRoot;
}
function Me(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = Y(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    i !== `inline` &&
    i !== `contents`
  );
}
function Ne(e) {
  return /^(table|td|th)$/.test(U(e));
}
function Pe(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var Fe = /transform|translate|scale|rotate|perspective|filter/,
  Ie = /paint|layout|strict|content/,
  J = (e) => !!e && e !== `none`,
  Le;
function Re(e) {
  let t = K(e) ? Y(e) : e;
  return (
    J(t.transform) ||
    J(t.translate) ||
    J(t.scale) ||
    J(t.rotate) ||
    J(t.perspective) ||
    (!Be() && (J(t.backdropFilter) || J(t.filter))) ||
    Fe.test(t.willChange || ``) ||
    Ie.test(t.contain || ``)
  );
}
function ze(e) {
  let t = X(e);
  for (; q(t) && !Ve(t);) {
    if (Re(t)) return t;
    if (Pe(t)) return null;
    t = X(t);
  }
  return null;
}
function Be() {
  return (
    (Le ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    Le
  );
}
function Ve(e) {
  return /^(html|body|#document)$/.test(U(e));
}
function Y(e) {
  return W(e).getComputedStyle(e);
}
function He(e) {
  return K(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function X(e) {
  if (U(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (je(e) && e.host) || G(e);
  return je(t) ? t.host : t;
}
function Ue(e) {
  let t = X(e);
  return Ve(t) ? (e.ownerDocument || e).body : q(t) && Me(t) ? t : Ue(t);
}
function We(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = Ue(e),
    i = r === e.ownerDocument?.body,
    a = W(r);
  if (i) {
    let e = Ge(a);
    return t.concat(
      a,
      a.visualViewport || [],
      Me(r) ? r : [],
      e && n ? We(e) : [],
    );
  } else return t.concat(r, We(r, [], n));
}
function Ge(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
