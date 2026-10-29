// Create-CEn7EAZs 143 — root
// Lines 47974-48284 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function VB(e, t) {
  if (isNaN((e = +e)) || isNaN((t = +t))) return this;
  var n = this._x0,
    r = this._y0,
    i = this._x1,
    a = this._y1;
  if (isNaN(n)) ((i = (n = Math.floor(e)) + 1), (a = (r = Math.floor(t)) + 1));
  else {
    for (
      var o = i - n || 1, s = this._root, c, l;
      n > e || e >= i || r > t || t >= a;
    )
      switch (
        ((l = ((t < r) << 1) | (e < n)),
        (c = [, , , ,]),
        (c[l] = s),
        (s = c),
        (o *= 2),
        l)
      ) {
        case 0:
          ((i = n + o), (a = r + o));
          break;
        case 1:
          ((n = i - o), (a = r + o));
          break;
        case 2:
          ((i = n + o), (r = a - o));
          break;
        case 3:
          ((n = i - o), (r = a - o));
          break;
      }
    this._root && this._root.length && (this._root = s);
  }
  return ((this._x0 = n), (this._y0 = r), (this._x1 = i), (this._y1 = a), this);
}
function HB() {
  var e = [];
  return (
    this.visit(function (t) {
      if (!t.length)
        do e.push(t.data);
        while ((t = t.next));
    }),
    e
  );
}
function UB(e) {
  return arguments.length
    ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
    : isNaN(this._x0)
      ? void 0
      : [
          [this._x0, this._y0],
          [this._x1, this._y1],
        ];
}
function WB(e, t, n, r, i) {
  ((this.node = e), (this.x0 = t), (this.y0 = n), (this.x1 = r), (this.y1 = i));
}
function GB(e, t, n) {
  var r,
    i = this._x0,
    a = this._y0,
    o,
    s,
    c,
    l,
    u = this._x1,
    d = this._y1,
    f = [],
    p = this._root,
    m,
    h;
  for (
    p && f.push(new WB(p, i, a, u, d)),
      n == null
        ? (n = 1 / 0)
        : ((i = e - n), (a = t - n), (u = e + n), (d = t + n), (n *= n));
    (m = f.pop());
  )
    if (!(
      !(p = m.node) ||
      (o = m.x0) > u ||
      (s = m.y0) > d ||
      (c = m.x1) < i ||
      (l = m.y1) < a
    ))
      if (p.length) {
        var g = (o + c) / 2,
          _ = (s + l) / 2;
        (f.push(
          new WB(p[3], g, _, c, l),
          new WB(p[2], o, _, g, l),
          new WB(p[1], g, s, c, _),
          new WB(p[0], o, s, g, _),
        ),
          (h = ((t >= _) << 1) | (e >= g)) &&
            ((m = f[f.length - 1]),
            (f[f.length - 1] = f[f.length - 1 - h]),
            (f[f.length - 1 - h] = m)));
      } else {
        var v = e - +this._x.call(null, p.data),
          y = t - +this._y.call(null, p.data),
          b = v * v + y * y;
        if (b < n) {
          var x = Math.sqrt((n = b));
          ((i = e - x), (a = t - x), (u = e + x), (d = t + x), (r = p.data));
        }
      }
  return r;
}
function KB(e) {
  if (
    isNaN((u = +this._x.call(null, e))) ||
    isNaN((d = +this._y.call(null, e)))
  )
    return this;
  var t,
    n = this._root,
    r,
    i,
    a,
    o = this._x0,
    s = this._y0,
    c = this._x1,
    l = this._y1,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  if (!n) return this;
  if (n.length)
    for (;;) {
      if (
        ((m = u >= (f = (o + c) / 2)) ? (o = f) : (c = f),
        (h = d >= (p = (s + l) / 2)) ? (s = p) : (l = p),
        (t = n),
        !(n = n[(g = (h << 1) | m)]))
      )
        return this;
      if (!n.length) break;
      (t[(g + 1) & 3] || t[(g + 2) & 3] || t[(g + 3) & 3]) &&
        ((r = t), (_ = g));
    }
  for (; n.data !== e;) if (((i = n), !(n = n.next))) return this;
  return (
    (a = n.next) && delete n.next,
    i
      ? (a ? (i.next = a) : delete i.next, this)
      : t
        ? (a ? (t[g] = a) : delete t[g],
          (n = t[0] || t[1] || t[2] || t[3]) &&
            n === (t[3] || t[2] || t[1] || t[0]) &&
            !n.length &&
            (r ? (r[_] = n) : (this._root = n)),
          this)
        : ((this._root = a), this)
  );
}
function qB(e) {
  for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
  return this;
}
function JB() {
  return this._root;
}
function YB() {
  var e = 0;
  return (
    this.visit(function (t) {
      if (!t.length)
        do ++e;
        while ((t = t.next));
    }),
    e
  );
}
function XB(e) {
  var t = [],
    n,
    r = this._root,
    i,
    a,
    o,
    s,
    c;
  for (
    r && t.push(new WB(r, this._x0, this._y0, this._x1, this._y1));
    (n = t.pop());
  )
    if (
      !e((r = n.node), (a = n.x0), (o = n.y0), (s = n.x1), (c = n.y1)) &&
      r.length
    ) {
      var l = (a + s) / 2,
        u = (o + c) / 2;
      ((i = r[3]) && t.push(new WB(i, l, u, s, c)),
        (i = r[2]) && t.push(new WB(i, a, u, l, c)),
        (i = r[1]) && t.push(new WB(i, l, o, s, u)),
        (i = r[0]) && t.push(new WB(i, a, o, l, u)));
    }
  return this;
}
function ZB(e) {
  var t = [],
    n = [],
    r;
  for (
    this._root &&
    t.push(new WB(this._root, this._x0, this._y0, this._x1, this._y1));
    (r = t.pop());
  ) {
    var i = r.node;
    if (i.length) {
      var a,
        o = r.x0,
        s = r.y0,
        c = r.x1,
        l = r.y1,
        u = (o + c) / 2,
        d = (s + l) / 2;
      ((a = i[0]) && t.push(new WB(a, o, s, u, d)),
        (a = i[1]) && t.push(new WB(a, u, s, c, d)),
        (a = i[2]) && t.push(new WB(a, o, d, u, l)),
        (a = i[3]) && t.push(new WB(a, u, d, c, l)));
    }
    n.push(r);
  }
  for (; (r = n.pop());) e(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function QB(e) {
  return e[0];
}
function $B(e) {
  return arguments.length ? ((this._x = e), this) : this._x;
}
function eV(e) {
  return e[1];
}
function tV(e) {
  return arguments.length ? ((this._y = e), this) : this._y;
}
function nV(e, t, n) {
  var r = new rV(t ?? QB, n ?? eV, NaN, NaN, NaN, NaN);
  return e == null ? r : r.addAll(e);
}
function rV(e, t, n, r, i, a) {
  ((this._x = e),
    (this._y = t),
    (this._x0 = n),
    (this._y0 = r),
    (this._x1 = i),
    (this._y1 = a),
    (this._root = void 0));
}
function iV(e) {
  for (var t = { data: e.data }, n = t; (e = e.next);)
    n = n.next = { data: e.data };
  return t;
}
var aV = (nV.prototype = rV.prototype);
((aV.copy = function () {
  var e = new rV(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
    t = this._root,
    n,
    r;
  if (!t) return e;
  if (!t.length) return ((e._root = iV(t)), e);
  for (n = [{ source: t, target: (e._root = [, , , ,]) }]; (t = n.pop());)
    for (var i = 0; i < 4; ++i)
      (r = t.source[i]) &&
        (r.length
          ? n.push({ source: r, target: (t.target[i] = [, , , ,]) })
          : (t.target[i] = iV(r)));
  return e;
}),
  (aV.add = RB),
  (aV.addAll = BB),
  (aV.cover = VB),
  (aV.data = HB),
  (aV.extent = UB),
  (aV.find = GB),
  (aV.remove = KB),
  (aV.removeAll = qB),
  (aV.root = JB),
  (aV.size = YB),
  (aV.visit = XB),
  (aV.visitAfter = ZB),
  (aV.x = $B),
  (aV.y = tV));
function oV(e) {
  return function () {
    return e;
  };
}
function sV(e) {
  return (e() - 0.5) * 1e-6;
}
function cV(e) {
  return e.x + e.vx;
}
function lV(e) {
  return e.y + e.vy;
}
