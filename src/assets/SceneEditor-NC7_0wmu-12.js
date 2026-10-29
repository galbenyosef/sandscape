// SceneEditor-NC7_0wmu 12 — addeventlistener
// Lines 6188-6531 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var fo = (0, J.forwardRef)((e, t) =>
  (0, J.createElement)(uo, { ...e, forwardedRef: t }),
);
((uo.displayName = `Panel`), (fo.displayName = `forwardRef(Panel)`));
var po;
function mo() {
  return po;
}
var ho = null,
  go = !0,
  _o = -1,
  vo = null;
function yo(e, t) {
  if (t) {
    let e = (t & Io) !== 0,
      n = (t & Lo) !== 0,
      r = (t & Ro) !== 0,
      i = (t & zo) !== 0;
    if (e) return r ? `se-resize` : i ? `ne-resize` : `e-resize`;
    if (n) return r ? `sw-resize` : i ? `nw-resize` : `w-resize`;
    if (r) return `s-resize`;
    if (i) return `n-resize`;
  }
  switch (e) {
    case `horizontal`:
      return `ew-resize`;
    case `intersection`:
      return `move`;
    case `vertical`:
      return `ns-resize`;
  }
}
function bo() {
  vo !== null &&
    (document.head.removeChild(vo), (ho = null), (vo = null), (_o = -1));
}
function xo(e, t) {
  if (!go) return;
  let n = yo(e, t);
  if (ho !== n) {
    if (((ho = n), vo === null)) {
      vo = document.createElement(`style`);
      let e = mo();
      (e && vo.setAttribute(`nonce`, e), document.head.appendChild(vo));
    }
    if (_o >= 0) {
      var r;
      (r = vo.sheet) == null || r.removeRule(_o);
    }
    _o = vo.sheet?.insertRule(`*{cursor: ${n} !important;}`) ?? -1;
  }
}
function So(e) {
  return e.type === `keydown`;
}
function Co(e) {
  return e.type.startsWith(`pointer`);
}
function wo(e) {
  return e.type.startsWith(`mouse`);
}
function To(e) {
  if (Co(e)) {
    if (e.isPrimary) return { x: e.clientX, y: e.clientY };
  } else if (wo(e)) return { x: e.clientX, y: e.clientY };
  return { x: 1 / 0, y: 1 / 0 };
}
function Eo() {
  if (typeof matchMedia == `function`)
    return matchMedia(`(pointer:coarse)`).matches ? `coarse` : `fine`;
}
function Do(e, t, n) {
  return n
    ? e.x < t.x + t.width &&
        e.x + e.width > t.x &&
        e.y < t.y + t.height &&
        e.y + e.height > t.y
    : e.x <= t.x + t.width &&
        e.x + e.width >= t.x &&
        e.y <= t.y + t.height &&
        e.y + e.height >= t.y;
}
function Oo(e, t) {
  if (e === t) throw Error(`Cannot compare node with itself`);
  let n = { a: Po(e), b: Po(t) },
    r;
  for (; n.a.at(-1) === n.b.at(-1);)
    ((e = n.a.pop()), (t = n.b.pop()), (r = e));
  Z(
    r,
    `Stacking order can only be calculated for elements with a common ancestor`,
  );
  let i = { a: No(Mo(n.a)), b: No(Mo(n.b)) };
  if (i.a === i.b) {
    let e = r.childNodes,
      t = { a: n.a.at(-1), b: n.b.at(-1) },
      i = e.length;
    for (; i--;) {
      let n = e[i];
      if (n === t.a) return 1;
      if (n === t.b) return -1;
    }
  }
  return Math.sign(i.a - i.b);
}
var ko =
  /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function Ao(e) {
  let t = getComputedStyle(Fo(e) ?? e).display;
  return t === `flex` || t === `inline-flex`;
}
function jo(e) {
  let t = getComputedStyle(e);
  return !!(
    t.position === `fixed` ||
    (t.zIndex !== `auto` && (t.position !== `static` || Ao(e))) ||
    +t.opacity < 1 ||
    (`transform` in t && t.transform !== `none`) ||
    (`webkitTransform` in t && t.webkitTransform !== `none`) ||
    (`mixBlendMode` in t && t.mixBlendMode !== `normal`) ||
    (`filter` in t && t.filter !== `none`) ||
    (`webkitFilter` in t && t.webkitFilter !== `none`) ||
    (`isolation` in t && t.isolation === `isolate`) ||
    ko.test(t.willChange) ||
    t.webkitOverflowScrolling === `touch`
  );
}
function Mo(e) {
  let t = e.length;
  for (; t--;) {
    let n = e[t];
    if ((Z(n, `Missing node`), jo(n))) return n;
  }
  return null;
}
function No(e) {
  return (e && Number(getComputedStyle(e).zIndex)) || 0;
}
function Po(e) {
  let t = [];
  for (; e;) (t.push(e), (e = Fo(e)));
  return t;
}
function Fo(e) {
  let { parentNode: t } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
var Io = 1,
  Lo = 2,
  Ro = 4,
  zo = 8,
  Bo = Eo() === `coarse`,
  Vo = [],
  Ho = !1,
  Uo = new Map(),
  Wo = new Map(),
  Go = new Set();
function Ko(e, t, n, r, i) {
  let { ownerDocument: a } = t,
    o = {
      direction: n,
      element: t,
      hitAreaMargins: r,
      setResizeHandlerState: i,
    },
    s = Uo.get(a) ?? 0;
  return (
    Uo.set(a, s + 1),
    Go.add(o),
    ts(),
    function () {
      (Wo.delete(e), Go.delete(o));
      let t = Uo.get(a) ?? 1;
      if ((Uo.set(a, t - 1), ts(), t === 1 && Uo.delete(a), Vo.includes(o))) {
        let e = Vo.indexOf(o);
        (e >= 0 && Vo.splice(e, 1), $o(), i(`up`, !0, null));
      }
    }
  );
}
function qo(e) {
  let { target: t } = e,
    { x: n, y: r } = To(e);
  ((Ho = !0),
    Zo({ target: t, x: n, y: r }),
    ts(),
    Vo.length > 0 &&
      (ns(`down`, e),
      e.preventDefault(),
      Xo(t) || e.stopImmediatePropagation()));
}
function Jo(e) {
  let { x: t, y: n } = To(e);
  if ((Ho && e.buttons === 0 && ((Ho = !1), ns(`up`, e)), !Ho)) {
    let { target: r } = e;
    Zo({ target: r, x: t, y: n });
  }
  (ns(`move`, e), $o(), Vo.length > 0 && e.preventDefault());
}
function Yo(e) {
  let { target: t } = e,
    { x: n, y: r } = To(e);
  (Wo.clear(),
    (Ho = !1),
    Vo.length > 0 &&
      (e.preventDefault(), Xo(t) || e.stopImmediatePropagation()),
    ns(`up`, e),
    Zo({ target: t, x: n, y: r }),
    $o(),
    ts());
}
function Xo(e) {
  let t = e;
  for (; t;) {
    if (t.hasAttribute(ro.resizeHandle)) return !0;
    t = t.parentElement;
  }
  return !1;
}
function Zo({ target: e, x: t, y: n }) {
  Vo.splice(0);
  let r = null;
  ((e instanceof HTMLElement || e instanceof SVGElement) && (r = e),
    Go.forEach((e) => {
      let { element: i, hitAreaMargins: a } = e,
        o = i.getBoundingClientRect(),
        { bottom: s, left: c, right: l, top: u } = o,
        d = Bo ? a.coarse : a.fine;
      if (t >= c - d && t <= l + d && n >= u - d && n <= s + d) {
        if (
          r !== null &&
          document.contains(r) &&
          i !== r &&
          !i.contains(r) &&
          !r.contains(i) &&
          Oo(r, i) > 0
        ) {
          let e = r,
            t = !1;
          for (; e && !e.contains(i);) {
            if (Do(e.getBoundingClientRect(), o, !0)) {
              t = !0;
              break;
            }
            e = e.parentElement;
          }
          if (t) return;
        }
        Vo.push(e);
      }
    }));
}
function Qo(e, t) {
  Wo.set(e, t);
}
function $o() {
  let e = !1,
    t = !1;
  Vo.forEach((n) => {
    let { direction: r } = n;
    r === `horizontal` ? (e = !0) : (t = !0);
  });
  let n = 0;
  (Wo.forEach((e) => {
    n |= e;
  }),
    e && t
      ? xo(`intersection`, n)
      : e
        ? xo(`horizontal`, n)
        : t
          ? xo(`vertical`, n)
          : bo());
}
var es = new AbortController();
function ts() {
  (es.abort(), (es = new AbortController()));
  let e = { capture: !0, signal: es.signal };
  Go.size &&
    (Ho
      ? (Vo.length > 0 &&
          Uo.forEach((t, n) => {
            let { body: r } = n;
            t > 0 &&
              (r.addEventListener(`contextmenu`, Yo, e),
              r.addEventListener(`pointerleave`, Jo, e),
              r.addEventListener(`pointermove`, Jo, e));
          }),
        window.addEventListener(`pointerup`, Yo, e),
        window.addEventListener(`pointercancel`, Yo, e))
      : Uo.forEach((t, n) => {
          let { body: r } = n;
          t > 0 &&
            (r.addEventListener(`pointerdown`, qo, e),
            r.addEventListener(`pointermove`, Jo, e));
        }));
}
function ns(e, t) {
  Go.forEach((n) => {
    let { setResizeHandlerState: r } = n;
    r(e, Vo.includes(n), t);
  });
}
function rs() {
  let [e, t] = (0, J.useState)(0);
  return (0, J.useCallback)(() => t((e) => e + 1), []);
}
function Z(e, t) {
  if (!e) throw (console.error(t), Error(t));
}
function is(e, t, n = io) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function as(e, t, n = io) {
  return is(e, t, n) === 0;
}
function os(e, t, n) {
  return is(e, t, n) === 0;
}
function ss(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = t[r];
    if (!os(i, a, n)) return !1;
  }
  return !0;
}
function cs({ panelConstraints: e, panelIndex: t, size: n }) {
  let r = e[t];
  Z(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: i = 0,
    collapsible: a,
    maxSize: o = 100,
    minSize: s = 0,
  } = r;
  if (is(n, s) < 0)
    if (a) {
      let e = (i + s) / 2;
      n = is(n, e) < 0 ? i : s;
    } else n = s;
  return ((n = Math.min(o, n)), (n = parseFloat(n.toFixed(io))), n);
}
