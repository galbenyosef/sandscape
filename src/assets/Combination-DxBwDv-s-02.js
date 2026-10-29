// Combination-DxBwDv-s 02 — foreach
// Lines 342-561 of readable/assets/Combination-DxBwDv-s.pretty.js (statement-aligned).
function ue(e, t) {
  var n = (0, l.useState)(function () {
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
var de = typeof window < `u` ? l.useLayoutEffect : l.useEffect,
  z = new WeakMap();
function fe(e, t) {
  var n = ue(t || null, function (t) {
    return e.forEach(function (e) {
      return R(e, t);
    });
  });
  return (
    de(
      function () {
        var t = z.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          (r.forEach(function (e) {
            i.has(e) || R(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || R(e, a);
            }));
        }
        z.set(n, e);
      },
      [e],
    ),
    n
  );
}
function pe(e) {
  return e;
}
function me(e, t) {
  t === void 0 && (t = pe);
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
function he(e) {
  e === void 0 && (e = {});
  var t = me(null);
  return ((t.options = o({ async: !0, ssr: !1 }, e)), t);
}
var B = function (e) {
  var t = e.sideCar,
    n = s(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return l.createElement(r, o({}, n));
};
B.isSideCarExport = !0;
function ge(e, t) {
  return (e.useMedium(t), B);
}
var V = he(),
  H = function () {},
  U = l.forwardRef(function (e, t) {
    var n = l.useRef(null),
      r = l.useState({
        onScrollCapture: H,
        onWheelCapture: H,
        onTouchMoveCapture: H,
      }),
      i = r[0],
      a = r[1],
      c = e.forwardProps,
      u = e.children,
      d = e.className,
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
      C = s(e, [
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
      w = h,
      T = fe([n, t]),
      E = o(o({}, C), i);
    return l.createElement(
      l.Fragment,
      null,
      p &&
        l.createElement(w, {
          sideCar: V,
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
      c
        ? l.cloneElement(l.Children.only(u), o(o({}, E), { ref: T }))
        : l.createElement(x, o({}, E, { className: d, ref: T }), u),
    );
  });
((U.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (U.classNames = { fullWidth: L, zeroRight: I }));
var W,
  _e = function () {
    if (W) return W;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function ve() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = _e();
  return (t && e.setAttribute(`nonce`, t), e);
}
function ye(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function be(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
