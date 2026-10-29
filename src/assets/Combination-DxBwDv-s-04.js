// Combination-DxBwDv-s 04 — current
// Lines 820-971 of readable/assets/Combination-DxBwDv-s.pretty.js (statement-aligned).
function qe(e) {
  var t = l.useRef([]),
    n = l.useRef([0, 0]),
    r = l.useRef(),
    a = l.useState(Ke++)[0],
    o = l.useState(G)[0],
    s = l.useRef(e);
  (l.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    l.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${a}`);
          var t = i([e.lockRef.current], (e.shards || []).map(Ue), !0).filter(
            Boolean,
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${a}`);
            }),
            function () {
              (document.body.classList.remove(`block-interactivity-${a}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${a}`);
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var c = l.useCallback(function (e, t) {
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
      var m = Fe(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = Fe(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (o || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return Ve(h, t, e, h === `h` ? o : c, !0);
    }, []),
    u = l.useCallback(function (e) {
      var n = e;
      if (!(!Q.length || Q[Q.length - 1] !== o)) {
        var r = `deltaY` in n ? He(n) : Z(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              We(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var a = (s.current.shards || [])
            .map(Ue)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (a.length > 0 ? c(n, a[0]) : !s.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    d = l.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: Je(r) };
      (t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1));
    }, []),
    f = l.useCallback(function (e) {
      ((n.current = Z(e)), (r.current = void 0));
    }, []),
    p = l.useCallback(function (t) {
      d(t.type, He(t), t.target, c(t, e.lockRef.current));
    }, []),
    m = l.useCallback(function (t) {
      d(t.type, Z(t), t.target, c(t, e.lockRef.current));
    }, []);
  l.useEffect(function () {
    return (
      Q.push(o),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: m,
      }),
      document.addEventListener(`wheel`, u, X),
      document.addEventListener(`touchmove`, u, X),
      document.addEventListener(`touchstart`, f, X),
      function () {
        ((Q = Q.filter(function (e) {
          return e !== o;
        })),
          document.removeEventListener(`wheel`, u, X),
          document.removeEventListener(`touchmove`, u, X),
          document.removeEventListener(`touchstart`, f, X));
      }
    );
  }, []);
  var h = e.removeScrollBar,
    g = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    g ? l.createElement(o, { styles: Ge(a) }) : null,
    h
      ? l.createElement(Ae, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function Je(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
var Ye = ge(V, qe),
  $ = l.forwardRef(function (e, t) {
    return l.createElement(U, o({}, e, { ref: t, sideCar: Ye }));
  });
$.classNames = U.classNames;
