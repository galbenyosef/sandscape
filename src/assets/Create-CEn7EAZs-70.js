// Create-CEn7EAZs 70 — lineto
// Lines 22213-22552 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Rh(e, t) {
  var n = vh(!0),
    r = null,
    i = Fh,
    a = null,
    o = Mh(s);
  ((e = typeof e == `function` ? e : e === void 0 ? Ih : vh(e)),
    (t = typeof t == `function` ? t : t === void 0 ? Lh : vh(t)));
  function s(s) {
    var c,
      l = (s = Nh(s)).length,
      u,
      d = !1,
      f;
    for (r ?? (a = i((f = o()))), c = 0; c <= l; ++c)
      (!(c < l && n((u = s[c]), c, s)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(u, c, s), +t(u, c, s)));
    if (f) return ((a = null), f + `` || null);
  }
  return (
    (s.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : vh(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : vh(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : vh(!!e)), s)
        : n;
    }),
    (s.curve = function (e) {
      return arguments.length ? ((i = e), r != null && (a = i(r)), s) : i;
    }),
    (s.context = function (e) {
      return arguments.length
        ? (e == null ? (r = a = null) : (a = i((r = e))), s)
        : r;
    }),
    s
  );
}
function zh(e, t, n) {
  var r = null,
    i = vh(!0),
    a = null,
    o = Fh,
    s = null,
    c = Mh(l);
  ((e = typeof e == `function` ? e : e === void 0 ? Ih : vh(+e)),
    (t = typeof t == `function` ? t : vh(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? Lh : vh(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = Nh(l)).length,
      m,
      h = !1,
      g,
      _ = Array(p),
      v = Array(p);
    for (a ?? (s = o((g = c()))), u = 0; u <= p; ++u) {
      if (!(u < p && i((m = l[u]), u, l)) === h)
        if ((h = !h)) ((d = u), s.areaStart(), s.lineStart());
        else {
          for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f)
            s.point(_[f], v[f]);
          (s.lineEnd(), s.areaEnd());
        }
      h &&
        ((_[u] = +e(m, u, l)),
        (v[u] = +t(m, u, l)),
        s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
    }
    if (g) return ((s = null), g + `` || null);
  }
  function u() {
    return Rh().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : vh(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : vh(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : vh(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : vh(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : vh(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : vh(+e)), l)
        : n;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return u().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return u().x(e).y(n);
    }),
    (l.lineX1 = function () {
      return u().x(r).y(t);
    }),
    (l.defined = function (e) {
      return arguments.length
        ? ((i = typeof e == `function` ? e : vh(!!e)), l)
        : i;
    }),
    (l.curve = function (e) {
      return arguments.length ? ((o = e), a != null && (s = o(a)), l) : o;
    }),
    (l.context = function (e) {
      return arguments.length
        ? (e == null ? (a = s = null) : (s = o((a = e))), l)
        : a;
    }),
    l
  );
}
var Bh = class {
  constructor(e, t) {
    ((this._context = e), (this._x = t));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + e) / 2),
              this._y0,
              this._x0,
              t,
              e,
              t,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + t) / 2),
              e,
              this._y0,
              e,
              t,
            );
        break;
    }
    ((this._x0 = e), (this._y0 = t));
  }
};
function Vh(e) {
  return new Bh(e, !0);
}
function Hh(e) {
  return new Bh(e, !1);
}
var Uh = {
    draw(e, t) {
      let n = xh(t / Sh);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, Ch));
    },
  },
  Wh = {
    draw(e, t) {
      let n = xh(t / 5) / 2;
      (e.moveTo(-3 * n, -n),
        e.lineTo(-n, -n),
        e.lineTo(-n, -3 * n),
        e.lineTo(n, -3 * n),
        e.lineTo(n, -n),
        e.lineTo(3 * n, -n),
        e.lineTo(3 * n, n),
        e.lineTo(n, n),
        e.lineTo(n, 3 * n),
        e.lineTo(-n, 3 * n),
        e.lineTo(-n, n),
        e.lineTo(-3 * n, n),
        e.closePath());
    },
  },
  Gh = xh(1 / 3),
  Kh = Gh * 2,
  qh = {
    draw(e, t) {
      let n = xh(t / Kh),
        r = n * Gh;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  Jh = {
    draw(e, t) {
      let n = xh(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Yh = 0.8908130915292852,
  Xh = bh(Sh / 10) / bh((7 * Sh) / 10),
  Zh = bh(Ch / 10) * Xh,
  Qh = -yh(Ch / 10) * Xh,
  $h = {
    draw(e, t) {
      let n = xh(t * Yh),
        r = Zh * n,
        i = Qh * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (Ch * t) / 5,
          o = yh(a),
          s = bh(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  eg = xh(3),
  tg = {
    draw(e, t) {
      let n = -xh(t / (eg * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-eg * n, -n),
        e.lineTo(eg * n, -n),
        e.closePath());
    },
  },
  ng = -0.5,
  rg = xh(3) / 2,
  ig = 1 / xh(12),
  ag = (ig / 2 + 1) * 3,
  og = {
    draw(e, t) {
      let n = xh(t / ag),
        r = n / 2,
        i = n * ig,
        a = r,
        o = n * ig + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(ng * r - rg * i, rg * r + ng * i),
        e.lineTo(ng * a - rg * o, rg * a + ng * o),
        e.lineTo(ng * s - rg * c, rg * s + ng * c),
        e.lineTo(ng * r + rg * i, ng * i - rg * r),
        e.lineTo(ng * a + rg * o, ng * o - rg * a),
        e.lineTo(ng * s + rg * c, ng * c - rg * s),
        e.closePath());
    },
  };
function sg(e, t) {
  let n = null,
    r = Mh(i);
  ((e = typeof e == `function` ? e : vh(e || Uh)),
    (t = typeof t == `function` ? t : vh(t === void 0 ? 64 : +t)));
  function i() {
    let i;
    if (
      ((n ||= i = r()),
      e.apply(this, arguments).draw(n, +t.apply(this, arguments)),
      i)
    )
      return ((n = null), i + `` || null);
  }
  return (
    (i.type = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : vh(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : vh(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function cg() {}
function lg(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function ug(e) {
  this._context = e;
}
