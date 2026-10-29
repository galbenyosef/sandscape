// Combination-DxBwDv-s 03 — body
// Lines 562-819 of readable/assets/Combination-DxBwDv-s.pretty.js (statement-aligned).
var xe = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = ve()) && (ye(t, n), be(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  Se = function () {
    var e = xe();
    return function (t, n) {
      l.useEffect(
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
  G = function () {
    var e = Se();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return (e(n, r), null);
    };
  },
  Ce = { left: 0, top: 0, right: 0, gap: 0 },
  K = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  we = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [K(n), K(r), K(i)];
  },
  Te = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return Ce;
    var t = we(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Ee = G(),
  q = `data-scroll-locked`,
  De = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${ce} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${q}] {
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
  
  .${I} {
    right: ${s}px ${r};
  }
  
  .${L} {
    margin-right: ${s}px ${r};
  }
  
  .${I} .${I} {
    right: 0 ${r};
  }
  
  .${L} .${L} {
    margin-right: 0 ${r};
  }
  
  body[${q}] {
    ${le}: ${s}px;
  }
`
    );
  },
  Oe = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    );
    return isFinite(e) ? e : 0;
  },
  ke = function () {
    l.useEffect(function () {
      return (
        document.body.setAttribute(q, (Oe() + 1).toString()),
        function () {
          var e = Oe() - 1;
          e <= 0
            ? document.body.removeAttribute(q)
            : document.body.setAttribute(q, e.toString());
        }
      );
    }, []);
  },
  Ae = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    ke();
    var a = l.useMemo(
      function () {
        return Te(i);
      },
      [i],
    );
    return l.createElement(Ee, { styles: De(a, !t, i, n ? `` : `!important`) });
  },
  J = !1;
if (typeof window < `u`)
  try {
    var Y = Object.defineProperty({}, "passive", {
      get: function () {
        return ((J = !0), !0);
      },
    });
    (window.addEventListener(`test`, Y, Y),
      window.removeEventListener(`test`, Y, Y));
  } catch {
    J = !1;
  }
var X = J ? { passive: !1 } : !1,
  je = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  Me = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !je(e) && n[t] === `visible`)
    );
  },
  Ne = function (e) {
    return Me(e, `overflowY`);
  },
  Pe = function (e) {
    return Me(e, `overflowX`);
  },
  Fe = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        Re(e, r))
      ) {
        var i = ze(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Ie = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  Le = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  Re = function (e, t) {
    return e === `v` ? Ne(t) : Pe(t);
  },
  ze = function (e, t) {
    return e === `v` ? Ie(t) : Le(t);
  },
  Be = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  Ve = function (e, t, n, r, i) {
    var a = Be(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = ze(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && Re(e, s) && ((d += h), (f += m));
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
  He = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Ue = function (e) {
    return e && `current` in e ? e.current : e;
  },
  We = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Ge = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  Ke = 0,
  Q = [];
