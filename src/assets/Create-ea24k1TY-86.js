// Create-ea24k1TY 86 — opacity
// Lines 27278-27595 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function gx(e) {
  if (e instanceof vx) return new vx(e.h, e.s, e.l, e.opacity);
  if ((e instanceof zb || (e = rx(e)), !e)) return new vx();
  if (e instanceof vx) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    a = Math.max(t, n, r),
    o = NaN,
    s = a - i,
    c = (a + i) / 2;
  return (
    s
      ? ((o =
          t === a
            ? (n - r) / s + (n < r) * 6
            : n === a
              ? (r - t) / s + 2
              : (t - n) / s + 4),
        (s /= c < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (s = c > 0 && c < 1 ? 0 : o),
    new vx(o, s, c, e.opacity)
  );
}
function _x(e, t, n, r) {
  return arguments.length === 1 ? gx(e) : new vx(e, t, n, r ?? 1);
}
function vx(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Lb(
  vx,
  _x,
  Rb(zb, {
    brighter(e) {
      return (
        (e = e == null ? Vb : Vb ** +e),
        new vx(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Bb : Bb ** +e),
        new vx(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new cx(
        xx(e >= 240 ? e - 240 : e + 120, i, r),
        xx(e, i, r),
        xx(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new vx(yx(this.h), bx(this.s), bx(this.l), fx(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      let e = fx(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${yx(this.h)}, ${bx(this.s) * 100}%, ${bx(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function yx(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function bx(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function xx(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
        ? n
        : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t) * 255
  );
}
var Sx = (e) => () => e;
function Cx(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function wx(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function Tx(e) {
  return (e = +e) == 1
    ? Ex
    : function (t, n) {
        return n - t ? wx(t, n, e) : Sx(isNaN(t) ? n : t);
      };
}
function Ex(e, t) {
  var n = t - e;
  return n ? Cx(e, n) : Sx(isNaN(e) ? t : e);
}
var Dx = (function e(t) {
  var n = Tx(t);
  function r(e, t) {
    var r = n((e = sx(e)).r, (t = sx(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = Ex(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)),
        (e.g = i(t)),
        (e.b = a(t)),
        (e.opacity = o(t)),
        e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function Ox(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function kx(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ax(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = Array(r),
    a = Array(n),
    o;
  for (o = 0; o < r; ++o) i[o] = zx(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function jx(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Mx(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function Nx(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e != `object` || !e) && (e = {}),
  (typeof t != `object` || !t) && (t = {}),
  t))
    i in e ? (n[i] = zx(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var Px = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Fx = new RegExp(Px.source, `g`);
function Ix(e) {
  return function () {
    return e;
  };
}
function Lx(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function Rx(e, t) {
  var n = (Px.lastIndex = Fx.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = Px.exec(e)) && (i = Fx.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: Mx(r, i) })),
      (n = Fx.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? Lx(c[0].x)
        : Ix(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function zx(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? Sx(t)
    : (n === `number`
        ? Mx
        : n === `string`
          ? (r = rx(t))
            ? ((t = r), Dx)
            : Rx
          : t instanceof rx
            ? Dx
            : t instanceof Date
              ? jx
              : kx(t)
                ? Ox
                : Array.isArray(t)
                  ? Ax
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? Nx
                    : Mx)(e, t);
}
function Bx(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
var Vx = 180 / Math.PI,
  Hx = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Ux(e, t, n, r, i, a) {
  var o, s, c;
  return (
    (o = Math.sqrt(e * e + t * t)) && ((e /= o), (t /= o)),
    (c = e * n + t * r) && ((n -= e * c), (r -= t * c)),
    (s = Math.sqrt(n * n + r * r)) && ((n /= s), (r /= s), (c /= s)),
    e * r < t * n && ((e = -e), (t = -t), (c = -c), (o = -o)),
    {
      translateX: i,
      translateY: a,
      rotate: Math.atan2(t, e) * Vx,
      skewX: Math.atan(c) * Vx,
      scaleX: o,
      scaleY: s,
    }
  );
}
var Wx;
function Gx(e) {
  let t = new (typeof DOMMatrix == `function` ? DOMMatrix : WebKitCSSMatrix)(
    e + ``,
  );
  return t.isIdentity ? Hx : Ux(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Kx(e) {
  return e == null ||
    ((Wx ||= document.createElementNS(`http://www.w3.org/2000/svg`, `g`)),
    Wx.setAttribute(`transform`, e),
    !(e = Wx.transform.baseVal.consolidate()))
    ? Hx
    : ((e = e.matrix), Ux(e.a, e.b, e.c, e.d, e.e, e.f));
}
