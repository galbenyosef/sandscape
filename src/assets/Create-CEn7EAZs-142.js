// Create-CEn7EAZs 142 — tween
// Lines 47660-47973 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function pB(e, t, n) {
  var r, i, a;
  return function () {
    var o = tR(this, e),
      s = n(this),
      c = s + ``;
    return (
      s ?? (c = s = (this.style.removeProperty(e), tR(this, e))),
      o === c ? null : o === r && c === i ? a : ((i = c), (a = t((r = o), s)))
    );
  };
}
function mB(e, t) {
  var n,
    r,
    i,
    a = `style.` + t,
    o = `end.` + a,
    s;
  return function () {
    var c = xz(this, e),
      l = c.on,
      u = c.value[a] == null ? (s ||= dB(t)) : void 0;
    ((l !== n || i !== u) && (r = (n = l).copy()).on(o, (i = u)), (c.on = r));
  };
}
function hB(e, t, n) {
  var r = (e += ``) == `transform` ? ow : Az;
  return t == null
    ? this.styleTween(e, uB(e, r)).on(`end.style.` + e, dB(e))
    : typeof t == `function`
      ? this.styleTween(e, pB(e, r, kz(this, `style.` + e, t))).each(
          mB(this._id, e),
        )
      : this.styleTween(e, fB(e, r, t), n).on(`end.style.` + e, null);
}
function gB(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function _B(e, t, n) {
  var r, i;
  function a() {
    var a = t.apply(this, arguments);
    return (a !== i && (r = (i = a) && gB(e, a, n)), r);
  }
  return ((a._value = t), a);
}
function vB(e, t, n) {
  var r = `style.` + (e += ``);
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != `function`) throw Error();
  return this.tween(r, _B(e, t, n ?? ``));
}
function yB(e) {
  return function () {
    this.textContent = e;
  };
}
function bB(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? ``;
  };
}
function xB(e) {
  return this.tween(
    `text`,
    typeof e == `function`
      ? bB(kz(this, `text`, e))
      : yB(e == null ? `` : e + ``),
  );
}
function SB(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function CB(e) {
  var t, n;
  function r() {
    var r = e.apply(this, arguments);
    return (r !== n && (t = (n = r) && SB(r)), t);
  }
  return ((r._value = e), r);
}
function wB(e) {
  var t = `text`;
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != `function`) throw Error();
  return this.tween(t, CB(e));
}
function TB() {
  for (
    var e = this._name,
      t = this._id,
      n = AB(),
      r = this._groups,
      i = r.length,
      a = 0;
    a < i;
    ++a
  )
    for (var o = r[a], s = o.length, c, l = 0; l < s; ++l)
      if ((c = o[l])) {
        var u = Sz(c, t);
        yz(c, e, n, l, o, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease,
        });
      }
  return new OB(r, this._parents, e, n);
}
function EB() {
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
      var n = xz(this, r),
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
var DB = 0;
function OB(e, t, n, r) {
  ((this._groups = e), (this._parents = t), (this._name = n), (this._id = r));
}
function kB(e) {
  return JR().transition(e);
}
function AB() {
  return ++DB;
}
var jB = JR.prototype;
OB.prototype = kB.prototype = {
  constructor: OB,
  select: oB,
  selectAll: sB,
  selectChild: jB.selectChild,
  selectChildren: jB.selectChildren,
  filter: $z,
  merge: eB,
  selection: lB,
  transition: TB,
  call: jB.call,
  nodes: jB.nodes,
  node: jB.node,
  size: jB.size,
  empty: jB.empty,
  each: jB.each,
  on: rB,
  attr: Lz,
  attrTween: Hz,
  style: hB,
  styleTween: vB,
  text: xB,
  textTween: wB,
  remove: aB,
  tween: Oz,
  delay: Gz,
  duration: Jz,
  ease: Xz,
  easeVarying: Qz,
  end: EB,
  [Symbol.iterator]: jB[Symbol.iterator],
};
function MB(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var NB = { time: null, delay: 0, duration: 250, ease: MB };
function PB(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]);)
    if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
  return n;
}
function FB(e) {
  var t, n;
  e instanceof OB
    ? ((t = e._id), (e = e._name))
    : ((t = AB()), ((n = NB).time = sz()), (e = e == null ? null : e + ``));
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, l = 0; l < s; ++l)
      (c = o[l]) && yz(c, e, t, l, o, n || PB(c, t));
  return new OB(r, this._parents, e, t);
}
((JR.prototype.interrupt = Tz), (JR.prototype.transition = FB));
var { abs: Ule, max: Wle, min: Gle } = Math;
([`w`, `e`].map(IB),
  [`n`, `s`].map(IB),
  [`n`, `w`, `e`, `s`, `nw`, `ne`, `sw`, `se`].map(IB));
function IB(e) {
  return { type: e };
}
function LB(e, t) {
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
function RB(e) {
  let t = +this._x.call(null, e),
    n = +this._y.call(null, e);
  return zB(this.cover(t, n), t, n, e);
}
function zB(e, t, n, r) {
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
function BB(e) {
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
    zB(this, o[n], s[n], e[n]);
  return this;
}
