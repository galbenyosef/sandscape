// dist-BWh9CVbU 04 — height
// Lines 1041-1383 of readable/assets/dist-BWh9CVbU.pretty.js (statement-aligned).
function Ke(e) {
  let t = Y(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = q(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = M(n) !== a || M(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function qe(e) {
  return K(e) ? e : e.contextElement;
}
function Z(e) {
  let t = qe(e);
  if (!q(t)) return P(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Ke(t),
    o = (a ? M(n.width) : n.width) / r,
    s = (a ? M(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var Je = P(0);
function Ye(e) {
  let t = W(e);
  return !Be() || !t.visualViewport
    ? Je
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Xe(e, t, n) {
  return (t === void 0 && (t = !1), !!n && t && n === W(e));
}
function Q(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = qe(e),
    o = P(1);
  t && (r ? K(r) && (o = Z(r)) : (o = Z(e)));
  let s = Xe(a, n, r) ? Ye(a) : P(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a && r) {
    let e = W(a),
      t = K(r) ? W(r) : r,
      n = e,
      i = Ge(n);
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
        (i = Ge(n)));
    }
  }
  return pe({ width: u, height: d, x: c, y: l });
}
function Ze(e, t) {
  let n = He(e).scrollLeft;
  return t ? t.left + n : Q(G(e)).left + n;
}
function Qe(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - Ze(e, n), y: n.top + t.scrollTop };
}
function $e(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = G(r),
    s = t ? Pe(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = P(1),
    u = P(0),
    d = q(r);
  if ((d || !a) && ((U(r) !== `body` || Me(o)) && (c = He(r)), d)) {
    let e = Q(r);
    ((l = Z(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? Qe(o, c) : P(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function et(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function tt(e) {
  let t = He(e),
    n = e.ownerDocument.body,
    r = j(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = j(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + Ze(e),
    o = -t.scrollTop;
  return (
    Y(n).direction === `rtl` && (a += j(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  );
}
var nt = 25;
function rt(e, t, n) {
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
    let e = !Be() || t === `fixed`;
    r
      ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (u = o.offsetTop)));
  }
  if (Ze(a) <= 0) {
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
    o <= nt && (s -= o);
  }
  return { width: s, height: c, x: l, y: u };
}
function it(e, t) {
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
function at(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = rt(e, n, t);
  else if (t === `document`) r = tt(G(e));
  else if (K(t)) r = it(t, n);
  else {
    let n = Ye(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return pe(r);
}
function ot(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = We(e, [], !1).filter((e) => K(e) && U(e) !== `body`),
    i = null,
    a = Y(e).position === `fixed`,
    o = a ? X(e) : e;
  for (; K(o) && !Ve(o);) {
    let e = Y(o),
      t = Re(o),
      n = i ? i.position : a ? `fixed` : ``;
    (!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = X(o)));
  }
  return (t.set(e, r), r);
}
function st(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? Pe(t)
          ? []
          : ot(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = at(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = at(t, a[e], i);
    ((s = j(n.top, s)),
      (c = A(n.right, c)),
      (l = A(n.bottom, l)),
      (u = j(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function ct(e) {
  let { width: t, height: n } = Ke(e);
  return { width: t, height: n };
}
function lt(e, t, n) {
  let r = q(t),
    i = G(t),
    a = n === `fixed`,
    o = Q(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = P(0);
  if ((r || !a) && ((U(t) !== `body` || Me(i)) && (s = He(t)), r)) {
    let e = Q(t, !0, a, t);
    ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
  }
  !r && i && (c.x = Ze(i));
  let l = i && !r && !a ? Qe(i, s) : P(0);
  return {
    x: o.left + s.scrollLeft - c.x - l.x,
    y: o.top + s.scrollTop - c.y - l.y,
    width: o.width,
    height: o.height,
  };
}
function ut(e) {
  return Y(e).position === `static`;
}
function dt(e, t) {
  if (!q(e) || Y(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (G(e) === n && (n = n.ownerDocument.body), n);
}
function ft(e, t) {
  let n = W(e);
  if (Pe(e)) return n;
  if (!q(e)) {
    let t = X(e);
    for (; t && !Ve(t);) {
      if (K(t) && !ut(t)) return t;
      t = X(t);
    }
    return n;
  }
  let r = dt(e, t);
  for (; r && Ne(r) && ut(r);) r = dt(r, t);
  return r && Ve(r) && ut(r) && !Re(r) ? n : r || ze(e) || n;
}
var pt = async function (e) {
  let t = this.getOffsetParent || ft,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: lt(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function mt(e) {
  return Y(e).direction === `rtl`;
}
var ht = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $e,
  getDocumentElement: G,
  getClippingRect: st,
  getOffsetParent: ft,
  getElementRects: pt,
  getClientRects: et,
  getDimensions: ct,
  getScale: Z,
  isElement: K,
  isRTL: mt,
};
function gt(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function _t(e, t, n) {
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
    let m = N(d),
      h = N(a.clientWidth - (u + f)),
      g = N(a.clientHeight - (d + p)),
      _ = N(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: j(0, A(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!gt(l, e.getBoundingClientRect())) return s();
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
