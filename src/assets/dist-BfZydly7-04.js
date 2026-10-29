// dist-BfZydly7 04 — height
// Lines 1040-1382 of readable/assets/dist-BfZydly7.pretty.js (statement-aligned).
function Ge(e) {
  let t = Y(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = q(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = j(n) !== a || j(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function Ke(e) {
  return K(e) ? e : e.contextElement;
}
function Z(e) {
  let t = Ke(e);
  if (!q(t)) return N(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Ge(t),
    o = (a ? j(n.width) : n.width) / r,
    s = (a ? j(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var qe = N(0);
function Je(e) {
  let t = W(e);
  return !ze() || !t.visualViewport
    ? qe
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Ye(e, t, n) {
  return (t === void 0 && (t = !1), !!n && t && n === W(e));
}
function Q(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = Ke(e),
    o = N(1);
  t && (r ? K(r) && (o = Z(r)) : (o = Z(e)));
  let s = Ye(a, n, r) ? Je(a) : N(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a && r) {
    let e = W(a),
      t = K(r) ? W(r) : r,
      n = e,
      i = We(n);
    for (; i && t !== n;) {
      let e = Z(i),
        t = i.getBoundingClientRect(),
        r = Y(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = W(i)),
        (i = We(n)));
    }
  }
  return fe({ width: u, height: d, x: c, y: l });
}
function Xe(e, t) {
  let n = Ve(e).scrollLeft;
  return t ? t.left + n : Q(G(e)).left + n;
}
function Ze(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - Xe(e, n), y: n.top + t.scrollTop };
}
function Qe(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = G(r),
    s = t ? Ne(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = N(1),
    u = N(0),
    d = q(r);
  if ((d || !a) && ((U(r) !== `body` || je(o)) && (c = Ve(r)), d)) {
    let e = Q(r);
    ((l = Z(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? Ze(o, c) : N(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function $e(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function et(e) {
  let t = Ve(e),
    n = e.ownerDocument.body,
    r = A(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = A(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + Xe(e),
    o = -t.scrollTop;
  return (
    Y(n).direction === `rtl` && (a += A(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  );
}
var tt = 25;
function nt(e, t, n) {
  n === void 0 && (n = `viewport`);
  let r = n === `layoutViewport`,
    i = W(e),
    a = G(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    let e = !ze() || t === `fixed`;
    r
      ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (u = o.offsetTop)));
  }
  if (Xe(a) <= 0) {
    let e = a.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      r =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      i = Math.abs(a.clientWidth - t.clientWidth - r),
      o =
        getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
    o <= tt && (s -= o);
  }
  return { width: s, height: c, x: l, y: u };
}
function rt(e, t) {
  let n = Q(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = Z(e);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function it(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = nt(e, n, t);
  else if (t === `document`) r = et(G(e));
  else if (K(t)) r = rt(t, n);
  else {
    let n = Je(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return fe(r);
}
function at(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = Ue(e, [], !1).filter((e) => K(e) && U(e) !== `body`),
    i = null,
    a = Y(e).position === `fixed`,
    o = a ? X(e) : e;
  for (; K(o) && !Be(o);) {
    let e = Y(o),
      t = Le(o),
      n = i ? i.position : a ? `fixed` : ``;
    (!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = X(o)));
  }
  return (t.set(e, r), r);
}
function ot(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? Ne(t)
          ? []
          : at(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = it(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = it(t, a[e], i);
    ((s = A(n.top, s)),
      (c = k(n.right, c)),
      (l = k(n.bottom, l)),
      (u = A(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function st(e) {
  let { width: t, height: n } = Ge(e);
  return { width: t, height: n };
}
function ct(e, t, n) {
  let r = q(t),
    i = G(t),
    a = n === `fixed`,
    o = Q(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = N(0);
  if ((r || !a) && ((U(t) !== `body` || je(i)) && (s = Ve(t)), r)) {
    let e = Q(t, !0, a, t);
    ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
  }
  !r && i && (c.x = Xe(i));
  let l = i && !r && !a ? Ze(i, s) : N(0);
  return {
    x: o.left + s.scrollLeft - c.x - l.x,
    y: o.top + s.scrollTop - c.y - l.y,
    width: o.width,
    height: o.height,
  };
}
function lt(e) {
  return Y(e).position === `static`;
}
function ut(e, t) {
  if (!q(e) || Y(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (G(e) === n && (n = n.ownerDocument.body), n);
}
function dt(e, t) {
  let n = W(e);
  if (Ne(e)) return n;
  if (!q(e)) {
    let t = X(e);
    for (; t && !Be(t);) {
      if (K(t) && !lt(t)) return t;
      t = X(t);
    }
    return n;
  }
  let r = ut(e, t);
  for (; r && Me(r) && lt(r);) r = ut(r, t);
  return r && Be(r) && lt(r) && !Le(r) ? n : r || Re(e) || n;
}
var ft = async function (e) {
  let t = this.getOffsetParent || dt,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: ct(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function pt(e) {
  return Y(e).direction === `rtl`;
}
var mt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qe,
  getDocumentElement: G,
  getClippingRect: ot,
  getOffsetParent: dt,
  getElementRects: ft,
  getClientRects: $e,
  getDimensions: st,
  getScale: Z,
  isElement: K,
  isRTL: pt,
};
function ht(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function gt(e, t, n) {
  let r = null,
    i,
    a = G(e);
  function o() {
    var e;
    (clearTimeout(i), (e = r) == null || e.disconnect(), (r = null));
  }
  function s(n, c) {
    (n === void 0 && (n = !1), c === void 0 && (c = 1), o());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((n || t(), !f || !p)) return;
    let m = M(d),
      h = M(a.clientWidth - (u + f)),
      g = M(a.clientHeight - (d + p)),
      _ = M(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: A(0, k(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!ht(l, e.getBoundingClientRect())) return s();
      if (n !== c) {
        if (!y) return s();
        n
          ? s(!1, n)
          : (i = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      r = new IntersectionObserver(b, { ...v, root: a.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, v);
    }
    r.observe(e);
  }
  let c = W(e),
    l = () => s(n);
  return (
    c.addEventListener(`resize`, l),
    s(!0),
    () => {
      (c.removeEventListener(`resize`, l), o());
    }
  );
}
