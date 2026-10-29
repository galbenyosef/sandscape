// Create-CEn7EAZs 78 — symbol
// Lines 24903-25249 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var fy = n((e, t) => {
    var n = lm(),
      r = q_(),
      i = om(),
      a = n ? n.isConcatSpreadable : void 0;
    function o(e) {
      return i(e) || r(e) || !!(a && e && e[a]);
    }
    t.exports = o;
  }),
  py = n((e, t) => {
    var n = B_(),
      r = fy();
    function i(e, t, a, o, s) {
      var c = -1,
        l = e.length;
      for (a ||= r, s ||= []; ++c < l;) {
        var u = e[c];
        t > 0 && a(u)
          ? t > 1
            ? i(u, t - 1, a, o, s)
            : n(s, u)
          : o || (s[s.length] = u);
      }
      return s;
    }
    t.exports = i;
  }),
  my = n((e, t) => {
    function n(e) {
      return function (t, n, r) {
        for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
          var c = o[e ? s : ++i];
          if (n(a[c], c, a) === !1) break;
        }
        return t;
      };
    }
    t.exports = n;
  }),
  hy = n((e, t) => {
    t.exports = my()();
  }),
  gy = n((e, t) => {
    var n = hy(),
      r = cv();
    function i(e, t) {
      return e && n(e, t, r);
    }
    t.exports = i;
  }),
  _y = n((e, t) => {
    var n = sv();
    function r(e, t) {
      return function (r, i) {
        if (r == null) return r;
        if (!n(r)) return e(r, i);
        for (
          var a = r.length, o = t ? a : -1, s = Object(r);
          (t ? o-- : ++o < a) && i(s[o], o, s) !== !1;
        );
        return r;
      };
    }
    t.exports = r;
  }),
  vy = n((e, t) => {
    var n = gy();
    t.exports = _y()(n);
  }),
  yy = n((e, t) => {
    var n = vy(),
      r = sv();
    function i(e, t) {
      var i = -1,
        a = r(e) ? Array(e.length) : [];
      return (
        n(e, function (e, n, r) {
          a[++i] = t(e, n, r);
        }),
        a
      );
    }
    t.exports = i;
  }),
  by = n((e, t) => {
    function n(e, t) {
      var n = e.length;
      for (e.sort(t); n--;) e[n] = e[n].value;
      return e;
    }
    t.exports = n;
  }),
  xy = n((e, t) => {
    var n = fm();
    function r(e, t) {
      if (e !== t) {
        var r = e !== void 0,
          i = e === null,
          a = e === e,
          o = n(e),
          s = t !== void 0,
          c = t === null,
          l = t === t,
          u = n(t);
        if (
          (!c && !u && !o && e > t) ||
          (o && s && l && !c && !u) ||
          (i && s && l) ||
          (!r && l) ||
          !a
        )
          return 1;
        if (
          (!i && !o && !u && e < t) ||
          (u && r && a && !i && !o) ||
          (c && r && a) ||
          (!s && a) ||
          !l
        )
          return -1;
      }
      return 0;
    }
    t.exports = r;
  }),
  Sy = n((e, t) => {
    var n = xy();
    function r(e, t, r) {
      for (
        var i = -1, a = e.criteria, o = t.criteria, s = a.length, c = r.length;
        ++i < s;
      ) {
        var l = n(a[i], o[i]);
        if (l) return i >= c ? l : l * (r[i] == `desc` ? -1 : 1);
      }
      return e.index - t.index;
    }
    t.exports = r;
  }),
  Cy = n((e, t) => {
    var n = Em(),
      r = Am(),
      i = jv(),
      a = yy(),
      o = by(),
      s = $_(),
      c = Sy(),
      l = Dv(),
      u = om();
    function d(e, t, d) {
      t = t.length
        ? n(t, function (e) {
            return u(e)
              ? function (t) {
                  return r(t, e.length === 1 ? e[0] : e);
                }
              : e;
          })
        : [l];
      var f = -1;
      return (
        (t = n(t, s(i))),
        o(
          a(e, function (e, r, i) {
            return {
              criteria: n(t, function (t) {
                return t(e);
              }),
              index: ++f,
              value: e,
            };
          }),
          function (e, t) {
            return c(e, t, d);
          },
        )
      );
    }
    t.exports = d;
  }),
  wy = n((e, t) => {
    function n(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    t.exports = n;
  }),
  Ty = n((e, t) => {
    var n = wy(),
      r = Math.max;
    function i(e, t, i) {
      return (
        (t = r(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var a = arguments, o = -1, s = r(a.length - t, 0), c = Array(s);
            ++o < s;
          )
            c[o] = a[t + o];
          o = -1;
          for (var l = Array(t + 1); ++o < t;) l[o] = a[o];
          return ((l[t] = i(c)), n(e, this, l));
        }
      );
    }
    t.exports = i;
  }),
  Ey = n((e, t) => {
    function n(e) {
      return function () {
        return e;
      };
    }
    t.exports = n;
  }),
  Dy = n((e, t) => {
    var n = _m();
    t.exports = (function () {
      try {
        var e = n(Object, `defineProperty`);
        return (e({}, ``, {}), e);
      } catch {}
    })();
  }),
  Oy = n((e, t) => {
    var n = Ey(),
      r = Dy(),
      i = Dv();
    t.exports = r
      ? function (e, t) {
          return r(e, `toString`, {
            configurable: !0,
            enumerable: !1,
            value: n(t),
            writable: !0,
          });
        }
      : i;
  }),
  ky = n((e, t) => {
    var n = Date.now;
    function r(e) {
      var t = 0,
        r = 0;
      return function () {
        var i = n(),
          a = 16 - (i - r);
        if (((r = i), a > 0)) {
          if (++t >= 800) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    t.exports = r;
  }),
  Ay = n((e, t) => {
    var n = Oy();
    t.exports = ky()(n);
  }),
  jy = n((e, t) => {
    var n = Dv(),
      r = Ty(),
      i = Ay();
    function a(e, t) {
      return i(r(e, t, n), e + ``);
    }
    t.exports = a;
  }),
  My = n((e, t) => {
    var n = ym(),
      r = sv(),
      i = X_(),
      a = mm();
    function o(e, t, o) {
      if (!a(o)) return !1;
      var s = typeof t;
      return (s == `number` ? r(o) && i(t, o.length) : s == `string` && t in o)
        ? n(o[t], e)
        : !1;
    }
    t.exports = o;
  }),
  Ny = e(
    n((e, t) => {
      var n = py(),
        r = Cy(),
        i = jy(),
        a = My();
      t.exports = i(function (e, t) {
        if (e == null) return [];
        var i = t.length;
        return (
          i > 1 && a(e, t[0], t[1])
            ? (t = [])
            : i > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]),
          r(e, n(t, 1), [])
        );
      });
    })(),
  );
function Py(e) {
  "@babel/helpers - typeof";
  return (
    (Py =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Py(e)
  );
}
function Fy() {
  return (
    (Fy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fy.apply(this, arguments)
  );
}
function Iy(e, t) {
  return Vy(e) || By(e, t) || Ry(e, t) || Ly();
}
