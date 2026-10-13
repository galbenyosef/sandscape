// assets__Create-ea24k1TY 82 — unit
// Lines 25998-26324 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Ky(e, t) {
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
function qy(e) {
  if (Array.isArray(e)) return e;
}
function Jy(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function Yy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, xae(r.key), r));
  }
}
function Xy(e, t, n) {
  return (
    t && Yy(e.prototype, t),
    n && Yy(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function xae(e) {
  var t = Sae(e, `string`);
  return Vy(t) == `symbol` ? t : t + ``;
}
function Sae(e, t) {
  if (Vy(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Vy(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Zy = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Qy = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Cae = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  wae = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  $y = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  Tae = Object.keys($y),
  eb = `NaN`;
function Eae(e, t) {
  return e * $y[t];
}
var tb = (function () {
  function e(t, n) {
    (Jy(this, e),
      (this.num = t),
      (this.unit = n),
      (this.num = t),
      (this.unit = n),
      Number.isNaN(t) && (this.unit = ``),
      n !== `` && !Cae.test(n) && ((this.num = NaN), (this.unit = ``)),
      Tae.includes(n) && ((this.num = Eae(t, n)), (this.unit = `px`)));
  }
  return Xy(
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
          var n = Hy(wae.exec(t) ?? [], 3),
            r = n[1],
            i = n[2];
          return new e(parseFloat(r), i ?? ``);
        },
      },
    ],
  );
})();
function nb(e) {
  if (e.includes(eb)) return eb;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var n = Hy(Zy.exec(t) ?? [], 4),
      r = n[1],
      i = n[2],
      a = n[3],
      o = tb.parse(r ?? ``),
      s = tb.parse(a ?? ``),
      c = i === `*` ? o.multiply(s) : o.divide(s);
    if (c.isNaN()) return eb;
    t = t.replace(Zy, c.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var l = Hy(Qy.exec(t) ?? [], 4),
      u = l[1],
      d = l[2],
      f = l[3],
      p = tb.parse(u ?? ``),
      m = tb.parse(f ?? ``),
      h = d === `+` ? p.add(m) : p.subtract(m);
    if (h.isNaN()) return eb;
    t = t.replace(Qy, h.toString());
  }
  return t;
}
var rb = /\(([^()]*)\)/;
function Dae(e) {
  for (var t = e; t.includes(`(`);) {
    var n = Hy(rb.exec(t), 2)[1];
    t = t.replace(rb, nb(n));
  }
  return t;
}
function Oae(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = Dae(t)), (t = nb(t)), t);
}
function kae(e) {
  try {
    return Oae(e);
  } catch {
    return eb;
  }
}
function ib(e) {
  var t = kae(e.slice(5, -1));
  return t === eb ? `` : t;
}
var Aae = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  jae = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function ab() {
  return (
    (ab = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ab.apply(this, arguments)
  );
}
function ob(e, t) {
  if (e == null) return {};
  var n = Mae(e, t),
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
function Mae(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function sb(e, t) {
  return Iae(e) || Fae(e, t) || Pae(e, t) || Nae();
}
function Nae() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pae(e, t) {
  if (e) {
    if (typeof e == `string`) return cb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return cb(e, t);
  }
}
function cb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fae(e, t) {
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
function Iae(e) {
  if (Array.isArray(e)) return e;
}
