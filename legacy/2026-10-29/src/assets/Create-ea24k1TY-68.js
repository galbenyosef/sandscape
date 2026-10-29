// Create-ea24k1TY 68 — lineto
// Lines 21440-21779 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function ig(e, t) {
  var n = Vh(!0),
    r = null,
    i = tg,
    a = null,
    o = Qh(s);
  ((e = typeof e == `function` ? e : e === void 0 ? ng : Vh(e)),
    (t = typeof t == `function` ? t : t === void 0 ? rg : Vh(t)));
  function s(s) {
    var c,
      l = (s = $h(s)).length,
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
        ? ((e = typeof t == `function` ? t : Vh(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : Vh(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : Vh(!!e)), s)
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
function ag(e, t, n) {
  var r = null,
    i = Vh(!0),
    a = null,
    o = tg,
    s = null,
    c = Qh(l);
  ((e = typeof e == `function` ? e : e === void 0 ? ng : Vh(+e)),
    (t = typeof t == `function` ? t : Vh(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? rg : Vh(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = $h(l)).length,
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
    return ig().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : Vh(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : Vh(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : Vh(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : Vh(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : Vh(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : Vh(+e)), l)
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
        ? ((i = typeof e == `function` ? e : Vh(!!e)), l)
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
var og = class {
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
function bre(e) {
  return new og(e, !0);
}
function xre(e) {
  return new og(e, !1);
}
var sg = {
    draw(e, t) {
      let n = Wh(t / Gh);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, Kh));
    },
  },
  Sre = {
    draw(e, t) {
      let n = Wh(t / 5) / 2;
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
  cg = Wh(1 / 3),
  Cre = cg * 2,
  wre = {
    draw(e, t) {
      let n = Wh(t / Cre),
        r = n * cg;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  Tre = {
    draw(e, t) {
      let n = Wh(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Ere = 0.8908130915292852,
  lg = Uh(Gh / 10) / Uh((7 * Gh) / 10),
  Dre = Uh(Kh / 10) * lg,
  Ore = -Hh(Kh / 10) * lg,
  kre = {
    draw(e, t) {
      let n = Wh(t * Ere),
        r = Dre * n,
        i = Ore * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (Kh * t) / 5,
          o = Hh(a),
          s = Uh(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  ug = Wh(3),
  Are = {
    draw(e, t) {
      let n = -Wh(t / (ug * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-ug * n, -n),
        e.lineTo(ug * n, -n),
        e.closePath());
    },
  },
  dg = -0.5,
  fg = Wh(3) / 2,
  pg = 1 / Wh(12),
  jre = (pg / 2 + 1) * 3,
  Mre = {
    draw(e, t) {
      let n = Wh(t / jre),
        r = n / 2,
        i = n * pg,
        a = r,
        o = n * pg + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(dg * r - fg * i, fg * r + dg * i),
        e.lineTo(dg * a - fg * o, fg * a + dg * o),
        e.lineTo(dg * s - fg * c, fg * s + dg * c),
        e.lineTo(dg * r + fg * i, dg * i - fg * r),
        e.lineTo(dg * a + fg * o, dg * o - fg * a),
        e.lineTo(dg * s + fg * c, dg * c - fg * s),
        e.closePath());
    },
  };
function Nre(e, t) {
  let n = null,
    r = Qh(i);
  ((e = typeof e == `function` ? e : Vh(e || sg)),
    (t = typeof t == `function` ? t : Vh(t === void 0 ? 64 : +t)));
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
        ? ((e = typeof t == `function` ? t : Vh(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : Vh(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function mg() {}
function hg(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function gg(e) {
  this._context = e;
}
