// assets__Combination-CJArERGX 04 — current
// Lines 832-983 of readable/assets__Combination-CJArERGX.pretty.js (statement-aligned).
function Qe(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    i = d.useState(Ze++)[0],
    a = d.useState(Oe)[0],
    s = d.useRef(e);
  (d.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    d.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`);
          var t = o([e.lockRef.current], (e.shards || []).map(Je), !0).filter(
            Boolean,
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`);
            }),
            function () {
              (document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`);
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var c = d.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var i = Z(e),
        a = n.current,
        o = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(o) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = Ve(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = Ve(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (o || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return Ke(h, t, e, h === `h` ? o : c, !0);
    }, []),
    l = d.useCallback(function (e) {
      var n = e;
      if (!(!Q.length || Q[Q.length - 1] !== a)) {
        var r = `deltaY` in n ? qe(n) : Z(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              Ye(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var o = (s.current.shards || [])
            .map(Je)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (o.length > 0 ? c(n, o[0]) : !s.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    u = d.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: $e(r) };
      (t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1));
    }, []),
    f = d.useCallback(function (e) {
      ((n.current = Z(e)), (r.current = void 0));
    }, []),
    p = d.useCallback(function (t) {
      u(t.type, qe(t), t.target, c(t, e.lockRef.current));
    }, []),
    m = d.useCallback(function (t) {
      u(t.type, Z(t), t.target, c(t, e.lockRef.current));
    }, []);
  d.useEffect(function () {
    return (
      Q.push(a),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: m,
      }),
      document.addEventListener(`wheel`, l, Y),
      document.addEventListener(`touchmove`, l, Y),
      document.addEventListener(`touchstart`, f, Y),
      function () {
        ((Q = Q.filter(function (e) {
          return e !== a;
        })),
          document.removeEventListener(`wheel`, l, Y),
          document.removeEventListener(`touchmove`, l, Y),
          document.removeEventListener(`touchstart`, f, Y));
      }
    );
  }, []);
  var h = e.removeScrollBar,
    g = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    g ? d.createElement(a, { styles: Xe(i) }) : null,
    h
      ? d.createElement(Ie, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function $e(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
var et = be(H, Qe),
  $ = d.forwardRef(function (e, t) {
    return d.createElement(W, c({}, e, { ref: t, sideCar: et }));
  });
$.classNames = W.classNames;
