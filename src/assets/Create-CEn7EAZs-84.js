// Create-CEn7EAZs 84 — unit
// Lines 26771-27097 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Dx(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Ox(e) {
  if (Array.isArray(e)) return e;
}
function kx(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function Ax(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, Mx(r.key), r));
  }
}
function jx(e, t, n) {
  return (
    t && Ax(e.prototype, t),
    n && Ax(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Mx(e) {
  var t = Nx(e, `string`);
  return Sx(t) == `symbol` ? t : t + ``;
}
function Nx(e, t) {
  if (Sx(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Sx(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Px = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Fx = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Ix = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  Lx = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  Rx = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  zx = Object.keys(Rx),
  Bx = `NaN`;
function Vx(e, t) {
  return e * Rx[t];
}
var Hx = (function () {
  function e(t, n) {
    (kx(this, e),
      (this.num = t),
      (this.unit = n),
      (this.num = t),
      (this.unit = n),
      Number.isNaN(t) && (this.unit = ``),
      n !== `` && !Ix.test(n) && ((this.num = NaN), (this.unit = ``)),
      zx.includes(n) && ((this.num = Vx(t, n)), (this.unit = `px`)));
  }
  return jx(
    e,
    [
      {
        key: `add`,
        value: function (t) {
          return this.unit === t.unit
            ? new e(this.num + t.num, this.unit)
            : new e(NaN, ``);
        },
      },
      {
        key: `subtract`,
        value: function (t) {
          return this.unit === t.unit
            ? new e(this.num - t.num, this.unit)
            : new e(NaN, ``);
        },
      },
      {
        key: `multiply`,
        value: function (t) {
          return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
            ? new e(NaN, ``)
            : new e(this.num * t.num, this.unit || t.unit);
        },
      },
      {
        key: `divide`,
        value: function (t) {
          return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
            ? new e(NaN, ``)
            : new e(this.num / t.num, this.unit || t.unit);
        },
      },
      {
        key: `toString`,
        value: function () {
          return `${this.num}${this.unit}`;
        },
      },
      {
        key: `isNaN`,
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: `parse`,
        value: function (t) {
          var n = Cx(Lx.exec(t) ?? [], 3),
            r = n[1],
            i = n[2];
          return new e(parseFloat(r), i ?? ``);
        },
      },
    ],
  );
})();
function Ux(e) {
  if (e.includes(Bx)) return Bx;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var n = Cx(Px.exec(t) ?? [], 4),
      r = n[1],
      i = n[2],
      a = n[3],
      o = Hx.parse(r ?? ``),
      s = Hx.parse(a ?? ``),
      c = i === `*` ? o.multiply(s) : o.divide(s);
    if (c.isNaN()) return Bx;
    t = t.replace(Px, c.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var l = Cx(Fx.exec(t) ?? [], 4),
      u = l[1],
      d = l[2],
      f = l[3],
      p = Hx.parse(u ?? ``),
      m = Hx.parse(f ?? ``),
      h = d === `+` ? p.add(m) : p.subtract(m);
    if (h.isNaN()) return Bx;
    t = t.replace(Fx, h.toString());
  }
  return t;
}
var Wx = /\(([^()]*)\)/;
function Gx(e) {
  for (var t = e; t.includes(`(`);) {
    var n = Cx(Wx.exec(t), 2)[1];
    t = t.replace(Wx, Ux(n));
  }
  return t;
}
function Kx(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = Gx(t)), (t = Ux(t)), t);
}
function qx(e) {
  try {
    return Kx(e);
  } catch {
    return Bx;
  }
}
function Jx(e) {
  var t = qx(e.slice(5, -1));
  return t === Bx ? `` : t;
}
var Yx = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  Xx = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function Zx() {
  return (
    (Zx = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zx.apply(this, arguments)
  );
}
function Qx(e, t) {
  if (e == null) return {};
  var n = $x(e, t),
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
function $x(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function eS(e, t) {
  return aS(e) || iS(e, t) || nS(e, t) || tS();
}
function tS() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nS(e, t) {
  if (e) {
    if (typeof e == `string`) return rS(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return rS(e, t);
  }
}
function rS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function iS(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function aS(e) {
  if (Array.isArray(e)) return e;
}
