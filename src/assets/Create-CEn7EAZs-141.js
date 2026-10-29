// Create-CEn7EAZs 141 — local
// Lines 47314-47659 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Dz(e, t, n) {
  var r, i;
  if (typeof n != `function`) throw Error();
  return function () {
    var a = xz(this, e),
      o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: t, value: n }, c = 0, l = i.length; c < l; ++c)
        if (i[c].name === t) {
          i[c] = s;
          break;
        }
      c === l && i.push(s);
    }
    a.tween = i;
  };
}
function Oz(e, t) {
  var n = this._id;
  if (((e += ``), arguments.length < 2)) {
    for (var r = Sz(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === e) return o.value;
    return null;
  }
  return this.each((t == null ? Ez : Dz)(n, e, t));
}
function kz(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var e = xz(this, r);
      (e.value ||= {})[t] = n.apply(this, arguments);
    }),
    function (e) {
      return Sz(e, r).value[t];
    }
  );
}
function Az(e, t) {
  var n;
  return (
    typeof t == `number`
      ? WC
      : t instanceof hC
        ? zC
        : (n = hC(t))
          ? ((t = n), zC)
          : XC
  )(e, t);
}
function jz(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function Mz(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Nz(e, t, n) {
  var r,
    i = n + ``,
    a;
  return function () {
    var o = this.getAttribute(e);
    return o === i ? null : o === r ? a : (a = t((r = o), n));
  };
}
function Pz(e, t, n) {
  var r,
    i = n + ``,
    a;
  return function () {
    var o = this.getAttributeNS(e.space, e.local);
    return o === i ? null : o === r ? a : (a = t((r = o), n));
  };
}
function Fz(e, t, n) {
  var r, i, a;
  return function () {
    var o,
      s = n(this),
      c;
    return s == null
      ? void this.removeAttribute(e)
      : ((o = this.getAttribute(e)),
        (c = s + ``),
        o === c
          ? null
          : o === r && c === i
            ? a
            : ((i = c), (a = t((r = o), s))));
  };
}
function Iz(e, t, n) {
  var r, i, a;
  return function () {
    var o,
      s = n(this),
      c;
    return s == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((o = this.getAttributeNS(e.space, e.local)),
        (c = s + ``),
        o === c
          ? null
          : o === r && c === i
            ? a
            : ((i = c), (a = t((r = o), s))));
  };
}
function Lz(e, t) {
  var n = $I(e),
    r = n === `transform` ? sw : Az;
  return this.attrTween(
    e,
    typeof t == `function`
      ? (n.local ? Iz : Fz)(n, r, kz(this, `attr.` + e, t))
      : t == null
        ? (n.local ? Mz : jz)(n)
        : (n.local ? Pz : Nz)(n, r, t),
  );
}
function Rz(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function zz(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Bz(e, t) {
  var n, r;
  function i() {
    var i = t.apply(this, arguments);
    return (i !== r && (n = (r = i) && zz(e, i)), n);
  }
  return ((i._value = t), i);
}
function Vz(e, t) {
  var n, r;
  function i() {
    var i = t.apply(this, arguments);
    return (i !== r && (n = (r = i) && Rz(e, i)), n);
  }
  return ((i._value = t), i);
}
function Hz(e, t) {
  var n = `attr.` + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != `function`) throw Error();
  var r = $I(e);
  return this.tween(n, (r.local ? Bz : Vz)(r, t));
}
function Uz(e, t) {
  return function () {
    bz(this, e).delay = +t.apply(this, arguments);
  };
}
function Wz(e, t) {
  return (
    (t = +t),
    function () {
      bz(this, e).delay = t;
    }
  );
}
function Gz(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == `function` ? Uz : Wz)(t, e))
    : Sz(this.node(), t).delay;
}
function Kz(e, t) {
  return function () {
    xz(this, e).duration = +t.apply(this, arguments);
  };
}
function qz(e, t) {
  return (
    (t = +t),
    function () {
      xz(this, e).duration = t;
    }
  );
}
function Jz(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == `function` ? Kz : qz)(t, e))
    : Sz(this.node(), t).duration;
}
function Yz(e, t) {
  if (typeof t != `function`) throw Error();
  return function () {
    xz(this, e).ease = t;
  };
}
function Xz(e) {
  var t = this._id;
  return arguments.length ? this.each(Yz(t, e)) : Sz(this.node(), t).ease;
}
function Zz(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != `function`) throw Error();
    xz(this, e).ease = n;
  };
}
function Qz(e) {
  if (typeof e != `function`) throw Error();
  return this.each(Zz(this._id, e));
}
function $z(e) {
  typeof e != `function` && (e = dL(e));
  for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i)
    for (var a = t[i], o = a.length, s = (r[i] = []), c, l = 0; l < o; ++l)
      (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
  return new OB(r, this._parents, this._name, this._id);
}
function eB(e) {
  if (e._id !== this._id) throw Error();
  for (
    var t = this._groups,
      n = e._groups,
      r = t.length,
      i = n.length,
      a = Math.min(r, i),
      o = Array(r),
      s = 0;
    s < a;
    ++s
  )
    for (
      var c = t[s], l = n[s], u = c.length, d = (o[s] = Array(u)), f, p = 0;
      p < u;
      ++p
    )
      (f = c[p] || l[p]) && (d[p] = f);
  for (; s < r; ++s) o[s] = t[s];
  return new OB(o, this._parents, this._name, this._id);
}
function tB(e) {
  return (e + ``)
    .trim()
    .split(/^|\s+/)
    .every(function (e) {
      var t = e.indexOf(`.`);
      return (t >= 0 && (e = e.slice(0, t)), !e || e === `start`);
    });
}
function nB(e, t, n) {
  var r,
    i,
    a = tB(t) ? bz : xz;
  return function () {
    var o = a(this, e),
      s = o.on;
    (s !== r && (i = (r = s).copy()).on(t, n), (o.on = i));
  };
}
function rB(e, t) {
  var n = this._id;
  return arguments.length < 2
    ? Sz(this.node(), n).on.on(e)
    : this.each(nB(n, e, t));
}
function iB(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function aB() {
  return this.on(`end.remove`, iB(this._id));
}
function oB(e) {
  var t = this._name,
    n = this._id;
  typeof e != `function` && (e = iL(e));
  for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o)
    for (
      var s = r[o], c = s.length, l = (a[o] = Array(c)), u, d, f = 0;
      f < c;
      ++f
    )
      (u = s[f]) &&
        (d = e.call(u, u.__data__, f, s)) &&
        (`__data__` in u && (d.__data__ = u.__data__),
        (l[f] = d),
        yz(l[f], t, n, f, l, Sz(u, n)));
  return new OB(a, this._parents, t, n);
}
function sB(e) {
  var t = this._name,
    n = this._id;
  typeof e != `function` && (e = cL(e));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], l = c.length, u, d = 0; d < l; ++d)
      if ((u = c[d])) {
        for (
          var f = e.call(u, u.__data__, d, c),
            p,
            m = Sz(u, n),
            h = 0,
            g = f.length;
          h < g;
          ++h
        )
          (p = f[h]) && yz(p, t, n, h, f, m);
        (a.push(f), o.push(u));
      }
  return new OB(a, o, t, n);
}
var cB = JR.prototype.constructor;
function lB() {
  return new cB(this._groups, this._parents);
}
function uB(e, t) {
  var n, r, i;
  return function () {
    var a = tR(this, e),
      o = (this.style.removeProperty(e), tR(this, e));
    return a === o ? null : a === n && o === r ? i : (i = t((n = a), (r = o)));
  };
}
function dB(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function fB(e, t, n) {
  var r,
    i = n + ``,
    a;
  return function () {
    var o = tR(this, e);
    return o === i ? null : o === r ? a : (a = t((r = o), n));
  };
}
