// Create-ea24k1TY 139 — local
// Lines 46541-46886 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function dz(e, t, n) {
  var r, i;
  if (typeof n != `function`) throw Error();
  return function () {
    var a = az(this, e),
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
function fz(e, t) {
  var n = this._id;
  if (((e += ``), arguments.length < 2)) {
    for (var r = oz(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === e) return o.value;
    return null;
  }
  return this.each((t == null ? uz : dz)(n, e, t));
}
function pz(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var e = az(this, r);
      (e.value ||= {})[t] = n.apply(this, arguments);
    }),
    function (e) {
      return oz(e, r).value[t];
    }
  );
}
function mz(e, t) {
  var n;
  return (
    typeof t == `number`
      ? Mx
      : t instanceof rx
        ? Dx
        : (n = rx(t))
          ? ((t = n), Dx)
          : Rx
  )(e, t);
}
function hz(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function gz(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function _z(e, t, n) {
  var r,
    i = n + ``,
    a;
  return function () {
    var o = this.getAttribute(e);
    return o === i ? null : o === r ? a : (a = t((r = o), n));
  };
}
function vz(e, t, n) {
  var r,
    i = n + ``,
    a;
  return function () {
    var o = this.getAttributeNS(e.space, e.local);
    return o === i ? null : o === r ? a : (a = t((r = o), n));
  };
}
function yz(e, t, n) {
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
function bz(e, t, n) {
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
function xz(e, t) {
  var n = LI(e),
    r = n === `transform` ? Yx : mz;
  return this.attrTween(
    e,
    typeof t == `function`
      ? (n.local ? bz : yz)(n, r, pz(this, `attr.` + e, t))
      : t == null
        ? (n.local ? gz : hz)(n)
        : (n.local ? vz : _z)(n, r, t),
  );
}
function Sz(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Cz(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function wz(e, t) {
  var n, r;
  function i() {
    var i = t.apply(this, arguments);
    return (i !== r && (n = (r = i) && Cz(e, i)), n);
  }
  return ((i._value = t), i);
}
function Tz(e, t) {
  var n, r;
  function i() {
    var i = t.apply(this, arguments);
    return (i !== r && (n = (r = i) && Sz(e, i)), n);
  }
  return ((i._value = t), i);
}
function Ez(e, t) {
  var n = `attr.` + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != `function`) throw Error();
  var r = LI(e);
  return this.tween(n, (r.local ? wz : Tz)(r, t));
}
function Dz(e, t) {
  return function () {
    iz(this, e).delay = +t.apply(this, arguments);
  };
}
function Oz(e, t) {
  return (
    (t = +t),
    function () {
      iz(this, e).delay = t;
    }
  );
}
function kz(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == `function` ? Dz : Oz)(t, e))
    : oz(this.node(), t).delay;
}
function Az(e, t) {
  return function () {
    az(this, e).duration = +t.apply(this, arguments);
  };
}
function jz(e, t) {
  return (
    (t = +t),
    function () {
      az(this, e).duration = t;
    }
  );
}
function Mz(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == `function` ? Az : jz)(t, e))
    : oz(this.node(), t).duration;
}
function Nz(e, t) {
  if (typeof t != `function`) throw Error();
  return function () {
    az(this, e).ease = t;
  };
}
function Pz(e) {
  var t = this._id;
  return arguments.length ? this.each(Nz(t, e)) : oz(this.node(), t).ease;
}
function Fz(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != `function`) throw Error();
    az(this, e).ease = n;
  };
}
function Iz(e) {
  if (typeof e != `function`) throw Error();
  return this.each(Fz(this._id, e));
}
function Lz(e) {
  typeof e != `function` && (e = YI(e));
  for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i)
    for (var a = t[i], o = a.length, s = (r[i] = []), c, l = 0; l < o; ++l)
      (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
  return new fB(r, this._parents, this._name, this._id);
}
function Rz(e) {
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
  return new fB(o, this._parents, this._name, this._id);
}
function zz(e) {
  return (e + ``)
    .trim()
    .split(/^|\s+/)
    .every(function (e) {
      var t = e.indexOf(`.`);
      return (t >= 0 && (e = e.slice(0, t)), !e || e === `start`);
    });
}
function Bz(e, t, n) {
  var r,
    i,
    a = zz(t) ? iz : az;
  return function () {
    var o = a(this, e),
      s = o.on;
    (s !== r && (i = (r = s).copy()).on(t, n), (o.on = i));
  };
}
function Vz(e, t) {
  var n = this._id;
  return arguments.length < 2
    ? oz(this.node(), n).on.on(e)
    : this.each(Bz(n, e, t));
}
function Hz(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Uz() {
  return this.on(`end.remove`, Hz(this._id));
}
function Wz(e) {
  var t = this._name,
    n = this._id;
  typeof e != `function` && (e = HI(e));
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
        rz(l[f], t, n, f, l, oz(u, n)));
  return new fB(a, this._parents, t, n);
}
function Gz(e) {
  var t = this._name,
    n = this._id;
  typeof e != `function` && (e = KI(e));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], l = c.length, u, d = 0; d < l; ++d)
      if ((u = c[d])) {
        for (
          var f = e.call(u, u.__data__, d, c),
            p,
            m = oz(u, n),
            h = 0,
            g = f.length;
          h < g;
          ++h
        )
          (p = f[h]) && rz(p, t, n, h, f, m);
        (a.push(f), o.push(u));
      }
  return new fB(a, o, t, n);
}
var Kz = MR.prototype.constructor;
function qz() {
  return new Kz(this._groups, this._parents);
}
function Jz(e, t) {
  var n, r, i;
  return function () {
    var a = zL(this, e),
      o = (this.style.removeProperty(e), zL(this, e));
    return a === o ? null : a === n && o === r ? i : (i = t((n = a), (r = o)));
  };
}
function Yz(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Xz(e, t, n) {
  var r,
    i = n + ``,
    a;
  return function () {
    var o = zL(this, e);
    return o === i ? null : o === r ? a : (a = t((r = o), n));
  };
}
