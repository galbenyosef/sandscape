// assets__Combination-CJArERGX 02 — foreach
// Lines 351-573 of readable/assets__Combination-CJArERGX.pretty.js (statement-aligned).
function z(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
function me(e, t) {
  var n = (0, d.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var he = typeof window < `u` ? d.useLayoutEffect : d.useEffect,
  B = new WeakMap();
function ge(e, t) {
  var n = me(t || null, function (t) {
    return e.forEach(function (e) {
      return z(e, t);
    });
  });
  return (
    he(
      function () {
        var t = B.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          (r.forEach(function (e) {
            i.has(e) || z(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || z(e, a);
            }));
        }
        B.set(n, e);
      },
      [e],
    ),
    n
  );
}
function _e(e) {
  return e;
}
function ve(e, t) {
  t === void 0 && (t = _e);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n;
        ((n = []), t.forEach(e));
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        ((n = []), i.forEach(e), (t = n));
      }
      var a = function () {
          var n = t;
          ((t = []), n.forEach(e));
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      (o(),
        (n = {
          push: function (e) {
            (t.push(e), o());
          },
          filter: function (e) {
            return ((t = t.filter(e)), n);
          },
        }));
    },
  };
}
function ye(e) {
  e === void 0 && (e = {});
  var t = ve(null);
  return ((t.options = c({ async: !0, ssr: !1 }, e)), t);
}
var V = function (e) {
  var t = e.sideCar,
    n = l(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return d.createElement(r, c({}, n));
};
V.isSideCarExport = !0;
function be(e, t) {
  return (e.useMedium(t), V);
}
var H = ye(),
  U = function () {},
  W = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: U,
        onWheelCapture: U,
        onTouchMoveCapture: U,
      }),
      i = r[0],
      a = r[1],
      o = e.forwardProps,
      s = e.children,
      u = e.className,
      f = e.removeScrollBar,
      p = e.enabled,
      m = e.shards,
      h = e.sideCar,
      g = e.noRelative,
      _ = e.noIsolation,
      v = e.inert,
      y = e.allowPinchZoom,
      b = e.as,
      x = b === void 0 ? `div` : b,
      S = e.gapMode,
      ee = l(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      C = h,
      w = ge([n, t]),
      T = c(c({}, ee), i);
    return d.createElement(
      d.Fragment,
      null,
      p &&
        d.createElement(C, {
          sideCar: H,
          removeScrollBar: f,
          shards: m,
          noRelative: g,
          noIsolation: _,
          inert: v,
          setCallbacks: a,
          allowPinchZoom: !!y,
          lockRef: n,
          gapMode: S,
        }),
      o
        ? d.cloneElement(d.Children.only(s), c(c({}, T), { ref: w }))
        : d.createElement(x, c({}, T, { className: u, ref: w }), s),
    );
  });
((W.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (W.classNames = { fullWidth: R, zeroRight: L }));
var xe,
  Se = function () {
    if (xe) return xe;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function Ce() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = Se();
  return (t && e.setAttribute(`nonce`, t), e);
}
function we(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Te(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
