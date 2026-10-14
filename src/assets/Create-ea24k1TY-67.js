// Create-ea24k1TY 67 — math
// Lines 21128-21439 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Rh() {
  return (
    (Rh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rh.apply(this, arguments)
  );
}
function cre(e, t) {
  if (e == null) return {};
  var n = lre(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function lre(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var zh = X.forwardRef(function (e, t) {
    var n = e.children,
      r = e.className,
      i = cre(e, sre),
      a = h(`recharts-layer`, r);
    return X.createElement(`g`, Rh({ className: a }, Mh(i, !0), { ref: t }), n);
  }),
  ure = n((e, t) => {
    function n(e, t, n) {
      var r = -1,
        i = e.length;
      (t < 0 && (t = -t > i ? 0 : i + t),
        (n = n > i ? i : n),
        n < 0 && (n += i),
        (i = t > n ? 0 : (n - t) >>> 0),
        (t >>>= 0));
      for (var a = Array(i); ++r < i;) a[r] = e[r + t];
      return a;
    }
    t.exports = n;
  }),
  dre = n((e, t) => {
    var n = ure();
    function r(e, t, r) {
      var i = e.length;
      return ((r = r === void 0 ? i : r), !t && r >= i ? e : n(e, t, r));
    }
    t.exports = r;
  }),
  Bh = n((e, t) => {
    var n = RegExp(
      `[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`,
    );
    function r(e) {
      return n.test(e);
    }
    t.exports = r;
  }),
  fre = n((e, t) => {
    function n(e) {
      return e.split(``);
    }
    t.exports = n;
  }),
  pre = n((e, t) => {
    var n = `\\ud800-\\udfff`,
      r = `\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,
      i = `\\ufe0e\\ufe0f`,
      a = `[` + n + `]`,
      o = `[` + r + `]`,
      s = `\\ud83c[\\udffb-\\udfff]`,
      c = `(?:` + o + `|` + s + `)`,
      l = `[^` + n + `]`,
      u = `(?:\\ud83c[\\udde6-\\uddff]){2}`,
      d = `[\\ud800-\\udbff][\\udc00-\\udfff]`,
      f = `\\u200d`,
      p = c + `?`,
      m = `[` + i + `]?`,
      h = `(?:` + f + `(?:` + [l, u, d].join(`|`) + `)` + m + p + `)*`,
      g = m + p + h,
      _ = `(?:` + [l + o + `?`, o, u, d, a].join(`|`) + `)`,
      v = RegExp(s + `(?=` + s + `)|` + _ + g, `g`);
    function y(e) {
      return e.match(v) || [];
    }
    t.exports = y;
  }),
  mre = n((e, t) => {
    var n = fre(),
      r = Bh(),
      i = pre();
    function a(e) {
      return r(e) ? i(e) : n(e);
    }
    t.exports = a;
  }),
  hre = n((e, t) => {
    var n = dre(),
      r = Bh(),
      i = mre(),
      a = Xm();
    function o(e) {
      return function (t) {
        t = a(t);
        var o = r(t) ? i(t) : void 0,
          s = o ? o[0] : t.charAt(0),
          c = o ? n(o, 1).join(``) : t.slice(1);
        return s[e]() + c;
      };
    }
    t.exports = o;
  }),
  gre = n((e, t) => {
    t.exports = hre()(`toUpperCase`);
  });
function Vh(e) {
  return function () {
    return e;
  };
}
var Hh = Math.cos,
  Uh = Math.sin,
  Wh = Math.sqrt,
  Gh = Math.PI;
Gh / 2;
var Kh = 2 * Gh,
  qh = Math.PI,
  Jh = 2 * qh,
  Yh = 1e-6,
  _re = Jh - Yh;
function Xh(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function vre(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return Xh;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var Zh = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? Xh : vre(e)));
  }
  moveTo(e, t) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(e, t) {
    this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
  }
  quadraticCurveTo(e, t, n, r) {
    this._append`Q${+e},${+t},${(this._x1 = +n)},${(this._y1 = +r)}`;
  }
  bezierCurveTo(e, t, n, r, i, a) {
    this
      ._append`C${+e},${+t},${+n},${+r},${(this._x1 = +i)},${(this._y1 = +a)}`;
  }
  arcTo(e, t, n, r, i) {
    if (((e = +e), (t = +t), (n = +n), (r = +r), (i = +i), i < 0))
      throw Error(`negative radius: ${i}`);
    let a = this._x1,
      o = this._y1,
      s = n - e,
      c = r - t,
      l = a - e,
      u = o - t,
      d = l * l + u * u;
    if (this._x1 === null) this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
    else if (d > Yh)
      if (!(Math.abs(u * s - c * l) > Yh) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((qh - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > Yh && this._append`L${e + y * l},${t + y * u}`,
          this
            ._append`A${i},${i},0,0,${+(u * f > l * p)},${(this._x1 = e + b * s)},${(this._y1 = t + b * c)}`);
      }
  }
  arc(e, t, n, r, i, a) {
    if (((e = +e), (t = +t), (n = +n), (a = !!a), n < 0))
      throw Error(`negative radius: ${n}`);
    let o = n * Math.cos(r),
      s = n * Math.sin(r),
      c = e + o,
      l = t + s,
      u = 1 ^ a,
      d = a ? r - i : i - r;
    (this._x1 === null
      ? this._append`M${c},${l}`
      : (Math.abs(this._x1 - c) > Yh || Math.abs(this._y1 - l) > Yh) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % Jh) + Jh),
        d > _re
          ? this
              ._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > Yh &&
            this
              ._append`A${n},${n},0,${+(d >= qh)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this
      ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
function yre() {
  return new Zh();
}
yre.prototype = Zh.prototype;
function Qh(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        let e = Math.floor(n);
        if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
        t = e;
      }
      return e;
    }),
    () => new Zh(t)
  );
}
Array.prototype.slice;
function $h(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function eg(e) {
  this._context = e;
}
eg.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function tg(e) {
  return new eg(e);
}
function ng(e) {
  return e[0];
}
function rg(e) {
  return e[1];
}
