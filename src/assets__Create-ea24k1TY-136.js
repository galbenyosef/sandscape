// assets__Create-ea24k1TY 136 — array
// Lines 45520-45856 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function jI() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + ``) || r in n || /[\s.]/.test(r))
      throw Error(`illegal type: ` + r);
    n[r] = [];
  }
  return new MI(n);
}
function MI(e) {
  this._ = e;
}
function NI(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var n = ``,
        r = e.indexOf(`.`);
      if (
        (r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))),
        e && !t.hasOwnProperty(e))
      )
        throw Error(`unknown type: ` + e);
      return { type: e, name: n };
    });
}
MI.prototype = jI.prototype = {
  constructor: MI,
  on: function (e, t) {
    var n = this._,
      r = NI(e + ``, n),
      i,
      a = -1,
      o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o;)
        if ((i = (e = r[a]).type) && (i = PI(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != `function`)
      throw Error(`invalid callback: ` + t);
    for (; ++a < o;)
      if ((i = (e = r[a]).type)) n[i] = FI(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = FI(n[i], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new MI(e);
  },
  call: function (e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw Error(`unknown type: ` + e);
    for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) throw Error(`unknown type: ` + e);
    for (var r = this._[e], i = 0, a = r.length; i < a; ++i)
      r[i].value.apply(t, n);
  },
};
function PI(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t) return i.value;
}
function FI(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      ((e[r] = AI), (e = e.slice(0, r).concat(e.slice(r + 1))));
      break;
    }
  return (n != null && e.push({ name: t, value: n }), e);
}
var II = {
  svg: `http://www.w3.org/2000/svg`,
  xhtml: `http://www.w3.org/1999/xhtml`,
  xlink: `http://www.w3.org/1999/xlink`,
  xml: `http://www.w3.org/XML/1998/namespace`,
  xmlns: `http://www.w3.org/2000/xmlns/`,
};
function LI(e) {
  var t = (e += ``),
    n = t.indexOf(`:`);
  return (
    n >= 0 && (t = e.slice(0, n)) !== `xmlns` && (e = e.slice(n + 1)),
    II.hasOwnProperty(t) ? { space: II[t], local: e } : e
  );
}
function RI(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === `http://www.w3.org/1999/xhtml` &&
      t.documentElement.namespaceURI === `http://www.w3.org/1999/xhtml`
      ? t.createElement(e)
      : t.createElementNS(n, e);
  };
}
function zI(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function BI(e) {
  var t = LI(e);
  return (t.local ? zI : RI)(t);
}
function VI() {}
function HI(e) {
  return e == null
    ? VI
    : function () {
        return this.querySelector(e);
      };
}
function UI(e) {
  typeof e != `function` && (e = HI(e));
  for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i)
    for (
      var a = t[i], o = a.length, s = (r[i] = Array(o)), c, l, u = 0;
      u < o;
      ++u
    )
      (c = a[u]) &&
        (l = e.call(c, c.__data__, u, a)) &&
        (`__data__` in c && (l.__data__ = c.__data__), (s[u] = l));
  return new jR(r, this._parents);
}
function WI(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function GI() {
  return [];
}
function KI(e) {
  return e == null
    ? GI
    : function () {
        return this.querySelectorAll(e);
      };
}
function qI(e) {
  return function () {
    return WI(e.apply(this, arguments));
  };
}
function JI(e) {
  e = typeof e == `function` ? qI(e) : KI(e);
  for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = t[a], s = o.length, c, l = 0; l < s; ++l)
      (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
  return new jR(r, i);
}
function YI(e) {
  return function () {
    return this.matches(e);
  };
}
function XI(e) {
  return function (t) {
    return t.matches(e);
  };
}
var ZI = Array.prototype.find;
function QI(e) {
  return function () {
    return ZI.call(this.children, e);
  };
}
function $I() {
  return this.firstElementChild;
}
function eL(e) {
  return this.select(e == null ? $I : QI(typeof e == `function` ? e : XI(e)));
}
var tL = Array.prototype.filter;
function nL() {
  return Array.from(this.children);
}
function rL(e) {
  return function () {
    return tL.call(this.children, e);
  };
}
function iL(e) {
  return this.selectAll(
    e == null ? nL : rL(typeof e == `function` ? e : XI(e)),
  );
}
function aL(e) {
  typeof e != `function` && (e = YI(e));
  for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i)
    for (var a = t[i], o = a.length, s = (r[i] = []), c, l = 0; l < o; ++l)
      (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
  return new jR(r, this._parents);
}
function oL(e) {
  return Array(e.length);
}
function sL() {
  return new jR(this._enter || this._groups.map(oL), this._parents);
}
function cL(e, t) {
  ((this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t));
}
cL.prototype = {
  constructor: cL,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function lL(e) {
  return function () {
    return e;
  };
}
function uL(e, t, n, r, i, a) {
  for (var o = 0, s, c = t.length, l = a.length; o < l; ++o)
    (s = t[o]) ? ((s.__data__ = a[o]), (r[o] = s)) : (n[o] = new cL(e, a[o]));
  for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function dL(e, t, n, r, i, a, o) {
  var s,
    c,
    l = new Map(),
    u = t.length,
    d = a.length,
    f = Array(u),
    p;
  for (s = 0; s < u; ++s)
    (c = t[s]) &&
      ((f[s] = p = o.call(c, c.__data__, s, t) + ``),
      l.has(p) ? (i[s] = c) : l.set(p, c));
  for (s = 0; s < d; ++s)
    ((p = o.call(e, a[s], s, a) + ``),
      (c = l.get(p))
        ? ((r[s] = c), (c.__data__ = a[s]), l.delete(p))
        : (n[s] = new cL(e, a[s])));
  for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function fL(e) {
  return e.__data__;
}
function pL(e, t) {
  if (!arguments.length) return Array.from(this, fL);
  var n = t ? dL : uL,
    r = this._parents,
    i = this._groups;
  typeof e != `function` && (e = lL(e));
  for (
    var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0;
    l < a;
    ++l
  ) {
    var u = r[l],
      d = i[l],
      f = d.length,
      p = mL(e.call(u, u && u.__data__, l, r)),
      m = p.length,
      h = (s[l] = Array(m)),
      g = (o[l] = Array(m));
    n(u, d, h, g, (c[l] = Array(f)), p, t);
    for (var _ = 0, v = 0, y, b; _ < m; ++_)
      if ((y = h[_])) {
        for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
        y._next = b || null;
      }
  }
  return ((o = new jR(o, r)), (o._enter = s), (o._exit = c), o);
}
function mL(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function hL() {
  return new jR(this._exit || this._groups.map(oL), this._parents);
}
function gL(e, t, n) {
  var r = this.enter(),
    i = this,
    a = this.exit();
  return (
    typeof e == `function`
      ? ((r = e(r)), (r &&= r.selection()))
      : (r = r.append(e + ``)),
    t != null && ((i = t(i)), (i &&= i.selection())),
    n == null ? a.remove() : n(a),
    r && i ? r.merge(i).order() : i
  );
}
function _L(e) {
  for (
    var t = e.selection ? e.selection() : e,
      n = this._groups,
      r = t._groups,
      i = n.length,
      a = r.length,
      o = Math.min(i, a),
      s = Array(i),
      c = 0;
    c < o;
    ++c
  )
    for (
      var l = n[c], u = r[c], d = l.length, f = (s[c] = Array(d)), p, m = 0;
      m < d;
      ++m
    )
      (p = l[m] || u[m]) && (f[m] = p);
  for (; c < i; ++c) s[c] = n[c];
  return new jR(s, this._parents);
}
function vL() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n;)
    for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;)
      (o = r[i]) &&
        (a &&
          o.compareDocumentPosition(a) ^ 4 &&
          a.parentNode.insertBefore(o, a),
        (a = o));
  return this;
}
