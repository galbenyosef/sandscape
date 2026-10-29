// Create-CEn7EAZs 144 — index
// Lines 48285-48573 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function uV(e) {
  var t,
    n,
    r,
    i = 1,
    a = 1;
  typeof e != `function` && (e = oV(e == null ? 1 : +e));
  function o() {
    for (var e, o = t.length, c, l, u, d, f, p, m = 0; m < a; ++m)
      for (c = nV(t, cV, lV).visitAfter(s), e = 0; e < o; ++e)
        ((l = t[e]),
          (f = n[l.index]),
          (p = f * f),
          (u = l.x + l.vx),
          (d = l.y + l.vy),
          c.visit(h));
    function h(e, t, n, a, o) {
      var s = e.data,
        c = e.r,
        m = f + c;
      if (s) {
        if (s.index > l.index) {
          var h = u - s.x - s.vx,
            g = d - s.y - s.vy,
            _ = h * h + g * g;
          _ < m * m &&
            (h === 0 && ((h = sV(r)), (_ += h * h)),
            g === 0 && ((g = sV(r)), (_ += g * g)),
            (_ = ((m - (_ = Math.sqrt(_))) / _) * i),
            (l.vx += (h *= _) * (m = (c *= c) / (p + c))),
            (l.vy += (g *= _) * m),
            (s.vx -= h * (m = 1 - m)),
            (s.vy -= g * m));
        }
        return;
      }
      return t > u + m || a < u - m || n > d + m || o < d - m;
    }
  }
  function s(e) {
    if (e.data) return (e.r = n[e.data.index]);
    for (var t = (e.r = 0); t < 4; ++t) e[t] && e[t].r > e.r && (e.r = e[t].r);
  }
  function c() {
    if (t) {
      var r,
        i = t.length,
        a;
      for (n = Array(i), r = 0; r < i; ++r)
        ((a = t[r]), (n[a.index] = +e(a, r, t)));
    }
  }
  return (
    (o.initialize = function (e, n) {
      ((t = e), (r = n), c());
    }),
    (o.iterations = function (e) {
      return arguments.length ? ((a = +e), o) : a;
    }),
    (o.strength = function (e) {
      return arguments.length ? ((i = +e), o) : i;
    }),
    (o.radius = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : oV(+t)), c(), o)
        : e;
    }),
    o
  );
}
function dV(e) {
  return e.index;
}
function fV(e, t) {
  var n = e.get(t);
  if (!n) throw Error(`node not found: ` + t);
  return n;
}
function pV(e) {
  var t = dV,
    n = d,
    r,
    i = oV(30),
    a,
    o,
    s,
    c,
    l,
    u = 1;
  e ??= [];
  function d(e) {
    return 1 / Math.min(s[e.source.index], s[e.target.index]);
  }
  function f(t) {
    for (var n = 0, i = e.length; n < u; ++n)
      for (var o = 0, s, d, f, p, m, h, g; o < i; ++o)
        ((s = e[o]),
          (d = s.source),
          (f = s.target),
          (p = f.x + f.vx - d.x - d.vx || sV(l)),
          (m = f.y + f.vy - d.y - d.vy || sV(l)),
          (h = Math.sqrt(p * p + m * m)),
          (h = ((h - a[o]) / h) * t * r[o]),
          (p *= h),
          (m *= h),
          (f.vx -= p * (g = c[o])),
          (f.vy -= m * g),
          (d.vx += p * (g = 1 - g)),
          (d.vy += m * g));
  }
  function p() {
    if (o) {
      var n,
        i = o.length,
        l = e.length,
        u = new Map(o.map((e, n) => [t(e, n, o), e])),
        d;
      for (n = 0, s = Array(i); n < l; ++n)
        ((d = e[n]),
          (d.index = n),
          typeof d.source != `object` && (d.source = fV(u, d.source)),
          typeof d.target != `object` && (d.target = fV(u, d.target)),
          (s[d.source.index] = (s[d.source.index] || 0) + 1),
          (s[d.target.index] = (s[d.target.index] || 0) + 1));
      for (n = 0, c = Array(l); n < l; ++n)
        ((d = e[n]),
          (c[n] = s[d.source.index] / (s[d.source.index] + s[d.target.index])));
      ((r = Array(l)), m(), (a = Array(l)), h());
    }
  }
  function m() {
    if (o) for (var t = 0, i = e.length; t < i; ++t) r[t] = +n(e[t], t, e);
  }
  function h() {
    if (o) for (var t = 0, n = e.length; t < n; ++t) a[t] = +i(e[t], t, e);
  }
  return (
    (f.initialize = function (e, t) {
      ((o = e), (l = t), p());
    }),
    (f.links = function (t) {
      return arguments.length ? ((e = t), p(), f) : e;
    }),
    (f.id = function (e) {
      return arguments.length ? ((t = e), f) : t;
    }),
    (f.iterations = function (e) {
      return arguments.length ? ((u = +e), f) : u;
    }),
    (f.strength = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : oV(+e)), m(), f)
        : n;
    }),
    (f.distance = function (e) {
      return arguments.length
        ? ((i = typeof e == `function` ? e : oV(+e)), h(), f)
        : i;
    }),
    f
  );
}
var mV = 1664525,
  hV = 1013904223,
  gV = 4294967296;
function _V() {
  let e = 1;
  return () => (e = (mV * e + hV) % gV) / gV;
}
function vV(e) {
  return e.x;
}
function yV(e) {
  return e.y;
}
var bV = 10,
  xV = Math.PI * (3 - Math.sqrt(5));
function SV(e) {
  var t,
    n = 1,
    r = 0.001,
    i = 1 - r ** (1 / 300),
    a = 0,
    o = 0.6,
    s = new Map(),
    c = uz(d),
    l = qI(`tick`, `end`),
    u = _V();
  e ??= [];
  function d() {
    (f(), l.call(`tick`, t), n < r && (c.stop(), l.call(`end`, t)));
  }
  function f(r) {
    var c,
      l = e.length,
      u;
    r === void 0 && (r = 1);
    for (var d = 0; d < r; ++d)
      for (
        n += (a - n) * i,
          s.forEach(function (e) {
            e(n);
          }),
          c = 0;
        c < l;
        ++c
      )
        ((u = e[c]),
          u.fx == null ? (u.x += u.vx *= o) : ((u.x = u.fx), (u.vx = 0)),
          u.fy == null ? (u.y += u.vy *= o) : ((u.y = u.fy), (u.vy = 0)));
    return t;
  }
  function p() {
    for (var t = 0, n = e.length, r; t < n; ++t) {
      if (
        ((r = e[t]),
        (r.index = t),
        r.fx != null && (r.x = r.fx),
        r.fy != null && (r.y = r.fy),
        isNaN(r.x) || isNaN(r.y))
      ) {
        var i = bV * Math.sqrt(0.5 + t),
          a = t * xV;
        ((r.x = i * Math.cos(a)), (r.y = i * Math.sin(a)));
      }
      (isNaN(r.vx) || isNaN(r.vy)) && (r.vx = r.vy = 0);
    }
  }
  function m(t) {
    return (t.initialize && t.initialize(e, u), t);
  }
  return (
    p(),
    (t = {
      tick: f,
      restart: function () {
        return (c.restart(d), t);
      },
      stop: function () {
        return (c.stop(), t);
      },
      nodes: function (n) {
        return arguments.length ? ((e = n), p(), s.forEach(m), t) : e;
      },
      alpha: function (e) {
        return arguments.length ? ((n = +e), t) : n;
      },
      alphaMin: function (e) {
        return arguments.length ? ((r = +e), t) : r;
      },
      alphaDecay: function (e) {
        return arguments.length ? ((i = +e), t) : +i;
      },
      alphaTarget: function (e) {
        return arguments.length ? ((a = +e), t) : a;
      },
      velocityDecay: function (e) {
        return arguments.length ? ((o = 1 - e), t) : 1 - o;
      },
      randomSource: function (e) {
        return arguments.length ? ((u = e), s.forEach(m), t) : u;
      },
      force: function (e, n) {
        return arguments.length > 1
          ? (n == null ? s.delete(e) : s.set(e, m(n)), t)
          : s.get(e);
      },
      find: function (t, n, r) {
        var i = 0,
          a = e.length,
          o,
          s,
          c,
          l,
          u;
        for (r == null ? (r = 1 / 0) : (r *= r), i = 0; i < a; ++i)
          ((l = e[i]),
            (o = t - l.x),
            (s = n - l.y),
            (c = o * o + s * s),
            c < r && ((u = l), (r = c)));
        return u;
      },
      on: function (e, n) {
        return arguments.length > 1 ? (l.on(e, n), t) : l.on(e);
      },
    })
  );
}
