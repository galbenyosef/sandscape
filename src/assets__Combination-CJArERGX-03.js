// assets__Combination-CJArERGX 03 — body
// Lines 574-831 of readable/assets__Combination-CJArERGX.pretty.js (statement-aligned).
var Ee = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = Ce()) && (we(t, n), Te(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  De = function () {
    var e = Ee();
    return function (t, n) {
      d.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Oe = function () {
    var e = De();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return (e(n, r), null);
    };
  },
  ke = { left: 0, top: 0, right: 0, gap: 0 },
  G = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  Ae = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [G(n), G(r), G(i)];
  },
  je = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return ke;
    var t = Ae(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Me = Oe(),
  K = `data-scroll-locked`,
  Ne = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${fe} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${K}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${L} {
    right: ${s}px ${r};
  }
  
  .${R} {
    margin-right: ${s}px ${r};
  }
  
  .${L} .${L} {
    right: 0 ${r};
  }
  
  .${R} .${R} {
    margin-right: 0 ${r};
  }
  
  body[${K}] {
    ${pe}: ${s}px;
  }
`
    );
  },
  Pe = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    );
    return isFinite(e) ? e : 0;
  },
  Fe = function () {
    d.useEffect(function () {
      return (
        document.body.setAttribute(K, (Pe() + 1).toString()),
        function () {
          var e = Pe() - 1;
          e <= 0
            ? document.body.removeAttribute(K)
            : document.body.setAttribute(K, e.toString());
        }
      );
    }, []);
  },
  Ie = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    Fe();
    var a = d.useMemo(
      function () {
        return je(i);
      },
      [i],
    );
    return d.createElement(Me, { styles: Ne(a, !t, i, n ? `` : `!important`) });
  },
  q = !1;
if (typeof window < `u`)
  try {
    var J = Object.defineProperty({}, "passive", {
      get: function () {
        return ((q = !0), !0);
      },
    });
    (window.addEventListener(`test`, J, J),
      window.removeEventListener(`test`, J, J));
  } catch {
    q = !1;
  }
var Y = q ? { passive: !1 } : !1,
  Le = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  Re = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !Le(e) && n[t] === `visible`)
    );
  },
  ze = function (e) {
    return Re(e, `overflowY`);
  },
  Be = function (e) {
    return Re(e, `overflowX`);
  },
  Ve = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        We(e, r))
      ) {
        var i = X(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  He = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  Ue = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  We = function (e, t) {
    return e === `v` ? ze(t) : Be(t);
  },
  X = function (e, t) {
    return e === `v` ? He(t) : Ue(t);
  },
  Ge = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  Ke = function (e, t, n, r, i) {
    var a = Ge(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = X(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && We(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  Z = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  qe = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Je = function (e) {
    return e && `current` in e ? e.current : e;
  },
  Ye = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Xe = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  Ze = 0,
  Q = [];
