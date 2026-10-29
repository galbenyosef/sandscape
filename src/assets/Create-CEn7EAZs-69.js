// Create-CEn7EAZs 69 — math
// Lines 21901-22212 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function hh() {
  return (
    (hh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hh.apply(this, arguments)
  );
}
function lie(e, t) {
  if (e == null) return {};
  var n = uie(e, t),
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
function uie(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var gh = X.forwardRef(function (e, t) {
    var n = e.children,
      r = e.className,
      i = lie(e, cie),
      a = h(`recharts-layer`, r);
    return X.createElement(`g`, hh({ className: a }, lh(i, !0), { ref: t }), n);
  }),
  die = n((e, t) => {
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
  fie = n((e, t) => {
    var n = die();
    function r(e, t, r) {
      var i = e.length;
      return ((r = r === void 0 ? i : r), !t && r >= i ? e : n(e, t, r));
    }
    t.exports = r;
  }),
  _h = n((e, t) => {
    var n = RegExp(
      `[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`,
    );
    function r(e) {
      return n.test(e);
    }
    t.exports = r;
  }),
  pie = n((e, t) => {
    function n(e) {
      return e.split(``);
    }
    t.exports = n;
  }),
  mie = n((e, t) => {
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
  hie = n((e, t) => {
    var n = pie(),
      r = _h(),
      i = mie();
    function a(e) {
      return r(e) ? i(e) : n(e);
    }
    t.exports = a;
  }),
  gie = n((e, t) => {
    var n = fie(),
      r = _h(),
      i = hie(),
      a = Dm();
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
  _ie = n((e, t) => {
    t.exports = gie()(`toUpperCase`);
  });
function vh(e) {
  return function () {
    return e;
  };
}
var yh = Math.cos,
  bh = Math.sin,
  xh = Math.sqrt,
  Sh = Math.PI;
Sh / 2;
var Ch = 2 * Sh,
  wh = Math.PI,
  Th = 2 * wh,
  Eh = 1e-6,
  Dh = Th - Eh;
function Oh(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function kh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return Oh;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var Ah = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? Oh : kh(e)));
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
    else if (d > Eh)
      if (!(Math.abs(u * s - c * l) > Eh) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((wh - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > Eh && this._append`L${e + y * l},${t + y * u}`,
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
      : (Math.abs(this._x1 - c) > Eh || Math.abs(this._y1 - l) > Eh) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % Th) + Th),
        d > Dh
          ? this
              ._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > Eh &&
            this
              ._append`A${n},${n},0,${+(d >= wh)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this
      ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
function jh() {
  return new Ah();
}
jh.prototype = Ah.prototype;
function Mh(e) {
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
    () => new Ah(t)
  );
}
Array.prototype.slice;
function Nh(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function Ph(e) {
  this._context = e;
}
Ph.prototype = {
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
function Fh(e) {
  return new Ph(e);
}
function Ih(e) {
  return e[0];
}
function Lh(e) {
  return e[1];
}
