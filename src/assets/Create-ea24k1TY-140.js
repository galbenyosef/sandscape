// Create-ea24k1TY 140 — tween
// Lines 46887-47200 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Zz(e, t, n) {
  var r, i, a;
  return function () {
    var o = zL(this, e),
      s = n(this),
      c = s + ``;
    return (
      s ?? (c = s = (this.style.removeProperty(e), zL(this, e))),
      o === c ? null : o === r && c === i ? a : ((i = c), (a = t((r = o), s)))
    );
  };
}
function Qz(e, t) {
  var n,
    r,
    i,
    a = `style.` + t,
    o = `end.` + a,
    s;
  return function () {
    var c = az(this, e),
      l = c.on,
      u = c.value[a] == null ? (s ||= Yz(t)) : void 0;
    ((l !== n || i !== u) && (r = (n = l).copy()).on(o, (i = u)), (c.on = r));
  };
}
function $z(e, t, n) {
  var r = (e += ``) == `transform` ? Jx : mz;
  return t == null
    ? this.styleTween(e, Jz(e, r)).on(`end.style.` + e, Yz(e))
    : typeof t == `function`
      ? this.styleTween(e, Zz(e, r, pz(this, `style.` + e, t))).each(
          Qz(this._id, e),
        )
      : this.styleTween(e, Xz(e, r, t), n).on(`end.style.` + e, null);
}
function eB(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function tB(e, t, n) {
  var r, i;
  function a() {
    var a = t.apply(this, arguments);
    return (a !== i && (r = (i = a) && eB(e, a, n)), r);
  }
  return ((a._value = t), a);
}
function nB(e, t, n) {
  var r = `style.` + (e += ``);
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != `function`) throw Error();
  return this.tween(r, tB(e, t, n ?? ``));
}
function rB(e) {
  return function () {
    this.textContent = e;
  };
}
function iB(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? ``;
  };
}
function aB(e) {
  return this.tween(
    `text`,
    typeof e == `function`
      ? iB(pz(this, `text`, e))
      : rB(e == null ? `` : e + ``),
  );
}
function oB(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function sB(e) {
  var t, n;
  function r() {
    var r = e.apply(this, arguments);
    return (r !== n && (t = (n = r) && oB(r)), t);
  }
  return ((r._value = e), r);
}
function cB(e) {
  var t = `text`;
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != `function`) throw Error();
  return this.tween(t, sB(e));
}
function lB() {
  for (
    var e = this._name,
      t = this._id,
      n = mB(),
      r = this._groups,
      i = r.length,
      a = 0;
    a < i;
    ++a
  )
    for (var o = r[a], s = o.length, c, l = 0; l < s; ++l)
      if ((c = o[l])) {
        var u = oz(c, t);
        rz(c, e, n, l, o, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease,
        });
      }
  return new fB(r, this._parents, e, n);
}
function uB() {
  var e,
    t,
    n = this,
    r = n._id,
    i = n.size();
  return new Promise(function (a, o) {
    var s = { value: o },
      c = {
        value: function () {
          --i === 0 && a();
        },
      };
    (n.each(function () {
      var n = az(this, r),
        i = n.on;
      (i !== e &&
        ((t = (e = i).copy()),
        t._.cancel.push(s),
        t._.interrupt.push(s),
        t._.end.push(c)),
        (n.on = t));
    }),
      i === 0 && a());
  });
}
var dB = 0;
function fB(e, t, n, r) {
  ((this._groups = e), (this._parents = t), (this._name = n), (this._id = r));
}
function pB(e) {
  return MR().transition(e);
}
function mB() {
  return ++dB;
}
var hB = MR.prototype;
fB.prototype = pB.prototype = {
  constructor: fB,
  select: Wz,
  selectAll: Gz,
  selectChild: hB.selectChild,
  selectChildren: hB.selectChildren,
  filter: Lz,
  merge: Rz,
  selection: qz,
  transition: lB,
  call: hB.call,
  nodes: hB.nodes,
  node: hB.node,
  size: hB.size,
  empty: hB.empty,
  each: hB.each,
  on: Vz,
  attr: xz,
  attrTween: Ez,
  style: $z,
  styleTween: nB,
  text: aB,
  textTween: cB,
  remove: Uz,
  tween: fz,
  delay: kz,
  duration: Mz,
  ease: Pz,
  easeVarying: Iz,
  end: uB,
  [Symbol.iterator]: hB[Symbol.iterator],
};
function gB(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var _B = { time: null, delay: 0, duration: 250, ease: gB };
function vB(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]);)
    if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
  return n;
}
function yB(e) {
  var t, n;
  e instanceof fB
    ? ((t = e._id), (e = e._name))
    : ((t = mB()), ((n = _B).time = GR()), (e = e == null ? null : e + ``));
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, l = 0; l < s; ++l)
      (c = o[l]) && rz(c, e, t, l, o, n || vB(c, t));
  return new fB(r, this._parents, e, t);
}
((MR.prototype.interrupt = lz), (MR.prototype.transition = yB));
var { abs: Dle, max: Ole, min: kle } = Math;
([`w`, `e`].map(bB),
  [`n`, `s`].map(bB),
  [`n`, `w`, `e`, `s`, `nw`, `ne`, `sw`, `se`].map(bB));
function bB(e) {
  return { type: e };
}
function xB(e, t) {
  var n,
    r = 1;
  ((e ??= 0), (t ??= 0));
  function i() {
    var i,
      a = n.length,
      o,
      s = 0,
      c = 0;
    for (i = 0; i < a; ++i) ((o = n[i]), (s += o.x), (c += o.y));
    for (s = (s / a - e) * r, c = (c / a - t) * r, i = 0; i < a; ++i)
      ((o = n[i]), (o.x -= s), (o.y -= c));
  }
  return (
    (i.initialize = function (e) {
      n = e;
    }),
    (i.x = function (t) {
      return arguments.length ? ((e = +t), i) : e;
    }),
    (i.y = function (e) {
      return arguments.length ? ((t = +e), i) : t;
    }),
    (i.strength = function (e) {
      return arguments.length ? ((r = +e), i) : r;
    }),
    i
  );
}
function SB(e) {
  let t = +this._x.call(null, e),
    n = +this._y.call(null, e);
  return CB(this.cover(t, n), t, n, e);
}
function CB(e, t, n, r) {
  if (isNaN(t) || isNaN(n)) return e;
  var i,
    a = e._root,
    o = { data: r },
    s = e._x0,
    c = e._y0,
    l = e._x1,
    u = e._y1,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v;
  if (!a) return ((e._root = o), e);
  for (; a.length;)
    if (
      ((h = t >= (d = (s + l) / 2)) ? (s = d) : (l = d),
      (g = n >= (f = (c + u) / 2)) ? (c = f) : (u = f),
      (i = a),
      !(a = a[(_ = (g << 1) | h)]))
    )
      return ((i[_] = o), e);
  if (
    ((p = +e._x.call(null, a.data)),
    (m = +e._y.call(null, a.data)),
    t === p && n === m)
  )
    return ((o.next = a), i ? (i[_] = o) : (e._root = o), e);
  do
    ((i = i ? (i[_] = [, , , ,]) : (e._root = [, , , ,])),
      (h = t >= (d = (s + l) / 2)) ? (s = d) : (l = d),
      (g = n >= (f = (c + u) / 2)) ? (c = f) : (u = f));
  while ((_ = (g << 1) | h) == (v = ((m >= f) << 1) | (p >= d)));
  return ((i[v] = a), (i[_] = o), e);
}
function wB(e) {
  var t,
    n,
    r = e.length,
    i,
    a,
    o = Array(r),
    s = Array(r),
    c = 1 / 0,
    l = 1 / 0,
    u = -1 / 0,
    d = -1 / 0;
  for (n = 0; n < r; ++n)
    isNaN((i = +this._x.call(null, (t = e[n])))) ||
      isNaN((a = +this._y.call(null, t))) ||
      ((o[n] = i),
      (s[n] = a),
      i < c && (c = i),
      i > u && (u = i),
      a < l && (l = a),
      a > d && (d = a));
  if (c > u || l > d) return this;
  for (this.cover(c, l).cover(u, d), n = 0; n < r; ++n)
    CB(this, o[n], s[n], e[n]);
  return this;
}
