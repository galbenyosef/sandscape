// Create-CEn7EAZs 88 — opacity
// Lines 28051-28368 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function OC(e) {
  if (e instanceof AC) return new AC(e.h, e.s, e.l, e.opacity);
  if ((e instanceof ZS || (e = hC(e)), !e)) return new AC();
  if (e instanceof AC) return e;
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
    new AC(o, s, c, e.opacity)
  );
}
function kC(e, t, n, r) {
  return arguments.length === 1 ? OC(e) : new AC(e, t, n, r ?? 1);
}
function AC(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
YS(
  AC,
  kC,
  XS(ZS, {
    brighter(e) {
      return (
        (e = e == null ? $S : $S ** +e),
        new AC(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? QS : QS ** +e),
        new AC(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new bC(
        NC(e >= 240 ? e - 240 : e + 120, i, r),
        NC(e, i, r),
        NC(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new AC(jC(this.h), MC(this.s), MC(this.l), wC(this.opacity));
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
      let e = wC(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${jC(this.h)}, ${MC(this.s) * 100}%, ${MC(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function jC(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function MC(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function NC(e, t, n) {
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
var PC = (e) => () => e;
function FC(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function IC(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function LC(e) {
  return (e = +e) == 1
    ? RC
    : function (t, n) {
        return n - t ? IC(t, n, e) : PC(isNaN(t) ? n : t);
      };
}
function RC(e, t) {
  var n = t - e;
  return n ? FC(e, n) : PC(isNaN(e) ? t : e);
}
var zC = (function e(t) {
  var n = LC(t);
  function r(e, t) {
    var r = n((e = yC(e)).r, (t = yC(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = RC(e.opacity, t.opacity);
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
function BC(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function VC(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function HC(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = Array(r),
    a = Array(n),
    o;
  for (o = 0; o < r; ++o) i[o] = ZC(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function UC(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function WC(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function GC(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e != `object` || !e) && (e = {}),
  (typeof t != `object` || !t) && (t = {}),
  t))
    i in e ? (n[i] = ZC(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var KC = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  qC = new RegExp(KC.source, `g`);
function JC(e) {
  return function () {
    return e;
  };
}
function YC(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function XC(e, t) {
  var n = (KC.lastIndex = qC.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = KC.exec(e)) && (i = qC.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: WC(r, i) })),
      (n = qC.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? YC(c[0].x)
        : JC(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function ZC(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? PC(t)
    : (n === `number`
        ? WC
        : n === `string`
          ? (r = hC(t))
            ? ((t = r), zC)
            : XC
          : t instanceof hC
            ? zC
            : t instanceof Date
              ? UC
              : VC(t)
                ? BC
                : Array.isArray(t)
                  ? HC
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? GC
                    : WC)(e, t);
}
function QC(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
var $C = 180 / Math.PI,
  ew = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function tw(e, t, n, r, i, a) {
  var o, s, c;
  return (
    (o = Math.sqrt(e * e + t * t)) && ((e /= o), (t /= o)),
    (c = e * n + t * r) && ((n -= e * c), (r -= t * c)),
    (s = Math.sqrt(n * n + r * r)) && ((n /= s), (r /= s), (c /= s)),
    e * r < t * n && ((e = -e), (t = -t), (c = -c), (o = -o)),
    {
      translateX: i,
      translateY: a,
      rotate: Math.atan2(t, e) * $C,
      skewX: Math.atan(c) * $C,
      scaleX: o,
      scaleY: s,
    }
  );
}
var nw;
function rw(e) {
  let t = new (typeof DOMMatrix == `function` ? DOMMatrix : WebKitCSSMatrix)(
    e + ``,
  );
  return t.isIdentity ? ew : tw(t.a, t.b, t.c, t.d, t.e, t.f);
}
function iw(e) {
  return e == null ||
    ((nw ||= document.createElementNS(`http://www.w3.org/2000/svg`, `g`)),
    nw.setAttribute(`transform`, e),
    !(e = nw.transform.baseVal.consolidate()))
    ? ew
    : ((e = e.matrix), tw(e.a, e.b, e.c, e.d, e.e, e.f));
}
