// Create-CEn7EAZs 89 — math
// Lines 28369-28703 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function aw(e, t, n, r) {
  function i(e) {
    return e.length ? e.pop() + ` ` : ``;
  }
  function a(e, r, i, a, o, s) {
    if (e !== i || r !== a) {
      var c = o.push(`translate(`, null, t, null, n);
      s.push({ i: c - 4, x: WC(e, i) }, { i: c - 2, x: WC(r, a) });
    } else (i || a) && o.push(`translate(` + i + t + a + n);
  }
  function o(e, t, n, a) {
    e === t
      ? t && n.push(i(n) + `rotate(` + t + r)
      : (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
        a.push({ i: n.push(i(n) + `rotate(`, null, r) - 2, x: WC(e, t) }));
  }
  function s(e, t, n, a) {
    e === t
      ? t && n.push(i(n) + `skewX(` + t + r)
      : a.push({ i: n.push(i(n) + `skewX(`, null, r) - 2, x: WC(e, t) });
  }
  function c(e, t, n, r, a, o) {
    if (e !== n || t !== r) {
      var s = a.push(i(a) + `scale(`, null, `,`, null, `)`);
      o.push({ i: s - 4, x: WC(e, n) }, { i: s - 2, x: WC(t, r) });
    } else (n !== 1 || r !== 1) && a.push(i(a) + `scale(` + n + `,` + r + `)`);
  }
  return function (t, n) {
    var r = [],
      i = [];
    return (
      (t = e(t)),
      (n = e(n)),
      a(t.translateX, t.translateY, n.translateX, n.translateY, r, i),
      o(t.rotate, n.rotate, r, i),
      s(t.skewX, n.skewX, r, i),
      c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i),
      (t = n = null),
      function (e) {
        for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
        return r.join(``);
      }
    );
  };
}
var ow = aw(rw, `px, `, `px)`, `deg)`),
  sw = aw(iw, `, `, `)`, `)`);
function cw(e, t) {
  t === void 0 && ((t = e), (e = ZC));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function lw(e) {
  return function () {
    return e;
  };
}
function uw(e) {
  return +e;
}
var dw = [0, 1];
function fw(e) {
  return e;
}
function pw(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : lw(isNaN(t) ? NaN : 0.5);
}
function mw(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function hw(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = pw(i, r)), (a = n(o, a))) : ((r = pw(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function gw(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = pw(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = bS(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function _w(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function vw() {
  var e = dw,
    t = dw,
    n = ZC,
    r,
    i,
    a,
    o = fw,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== fw && (o = mw(e[0], e[n - 1])),
      (s = n > 2 ? gw : hw),
      (c = l = null),
      d
    );
  }
  function d(i) {
    return i == null || isNaN((i = +i))
      ? a
      : (c ||= s(e.map(r), t, n))(r(o(i)));
  }
  return (
    (d.invert = function (n) {
      return o(i((l ||= s(t, e.map(r), WC))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, uw)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = QC), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : fw), u()) : o !== fw;
    }),
    (d.interpolate = function (e) {
      return arguments.length ? ((n = e), u()) : n;
    }),
    (d.unknown = function (e) {
      return arguments.length ? ((a = e), d) : a;
    }),
    function (e, t) {
      return ((r = e), (i = t), u());
    }
  );
}
function yw() {
  return vw()(fw, fw);
}
function bw(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function xw(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function Sw(e) {
  return ((e = xw(Math.abs(e))), e ? e[1] : NaN);
}
function Cw(e, t) {
  return function (n, r) {
    for (
      var i = n.length, a = [], o = 0, s = e[0], c = 0;
      i > 0 &&
      s > 0 &&
      (c + s + 1 > r && (s = Math.max(1, r - c)),
      a.push(n.substring((i -= s), i + s)),
      !((c += s + 1) > r));
    )
      s = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function ww(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var Tw =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ew(e) {
  if (!(t = Tw.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new Dw({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
Ew.prototype = Dw.prototype;
function Dw(e) {
  ((this.fill = e.fill === void 0 ? ` ` : e.fill + ``),
    (this.align = e.align === void 0 ? `>` : e.align + ``),
    (this.sign = e.sign === void 0 ? `-` : e.sign + ``),
    (this.symbol = e.symbol === void 0 ? `` : e.symbol + ``),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? `` : e.type + ``));
}
Dw.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? `0` : ``) +
    (this.width === void 0 ? `` : Math.max(1, this.width | 0)) +
    (this.comma ? `,` : ``) +
    (this.precision === void 0 ? `` : `.` + Math.max(0, this.precision | 0)) +
    (this.trim ? `~` : ``) +
    this.type
  );
};
function Ow(e) {
  out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case `.`:
        r = i = n;
        break;
      case `0`:
        (r === 0 && (r = n), (i = n));
        break;
      default:
        if (!+e[n]) break out;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var kw;
function Aw(e, t) {
  var n = xw(e, t);
  if (!n) return ((kw = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (kw = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + xw(e, Math.max(0, t + a - 1))[0];
}
function jw(e, t) {
  var n = xw(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var Mw = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: bw,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => jw(e * 100, t),
  r: jw,
  s: Aw,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Nw(e) {
  return e;
}
var Pw = Array.prototype.map,
  Fw = [
    `y`,
    `z`,
    `a`,
    `f`,
    `p`,
    `n`,
    `µ`,
    `m`,
    ``,
    `k`,
    `M`,
    `G`,
    `T`,
    `P`,
    `E`,
    `Z`,
    `Y`,
  ];
