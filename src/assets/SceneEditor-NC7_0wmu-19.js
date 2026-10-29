// SceneEditor-NC7_0wmu 19 — subarray
// Lines 16612-16960 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function dc(e) {
  let t;
  try {
    if (((t = uc && (self.URL || self.webkitURL).createObjectURL(uc)), !t))
      throw ``;
    let n = new Worker(t, { name: e?.name });
    return (
      n.addEventListener(`error`, () => {
        (self.URL || self.webkitURL).revokeObjectURL(t);
      }),
      n
    );
  } catch {
    return new Worker(
      `data:text/javascript;charset=utf-8,` + encodeURIComponent(lc),
      { name: e?.name },
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
var fc = Uint8Array,
  pc = Uint16Array,
  mc = Int32Array,
  hc = new fc([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  gc = new fc([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  _c = new fc([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  vc = function (e, t) {
    for (var n = new pc(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
    for (var i = new mc(n[30]), r = 1; r < 30; ++r)
      for (var a = n[r]; a < n[r + 1]; ++a) i[a] = ((a - n[r]) << 5) | r;
    return { b: n, r: i };
  },
  yc = vc(hc, 2),
  bc = yc.b,
  xc = yc.r;
((bc[28] = 258), (xc[258] = 28));
for (var Sc = vc(gc, 0).b, Cc = new pc(32768), wc = 0; wc < 32768; ++wc) {
  var Tc = ((wc & 43690) >> 1) | ((wc & 21845) << 1);
  ((Tc = ((Tc & 52428) >> 2) | ((Tc & 13107) << 2)),
    (Tc = ((Tc & 61680) >> 4) | ((Tc & 3855) << 4)),
    (Cc[wc] = (((Tc & 65280) >> 8) | ((Tc & 255) << 8)) >> 1));
}
for (
  var Ec = function (e, t, n) {
      for (var r = e.length, i = 0, a = new pc(t); i < r; ++i)
        e[i] && ++a[e[i] - 1];
      var o = new pc(t);
      for (i = 1; i < t; ++i) o[i] = (o[i - 1] + a[i - 1]) << 1;
      var s;
      if (n) {
        s = new pc(1 << t);
        var c = 15 - t;
        for (i = 0; i < r; ++i)
          if (e[i])
            for (
              var l = (i << 4) | e[i],
                u = t - e[i],
                d = o[e[i] - 1]++ << u,
                f = d | ((1 << u) - 1);
              d <= f;
              ++d
            )
              s[Cc[d] >> c] = l;
      } else
        for (s = new pc(r), i = 0; i < r; ++i)
          e[i] && (s[i] = Cc[o[e[i] - 1]++] >> (15 - e[i]));
      return s;
    },
    Dc = new fc(288),
    wc = 0;
  wc < 144;
  ++wc
)
  Dc[wc] = 8;
for (var wc = 144; wc < 256; ++wc) Dc[wc] = 9;
for (var wc = 256; wc < 280; ++wc) Dc[wc] = 7;
for (var wc = 280; wc < 288; ++wc) Dc[wc] = 8;
for (var Oc = new fc(32), wc = 0; wc < 32; ++wc) Oc[wc] = 5;
var kc = Ec(Dc, 9, 1),
  Ac = Ec(Oc, 5, 1),
  jc = function (e) {
    for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
    return t;
  },
  Mc = function (e, t, n) {
    var r = (t / 8) | 0;
    return ((e[r] | (e[r + 1] << 8)) >> (t & 7)) & n;
  },
  Nc = function (e, t) {
    var n = (t / 8) | 0;
    return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >> (t & 7);
  },
  Pc = function (e) {
    return ((e + 7) / 8) | 0;
  },
  Fc = function (e, t, n) {
    return (
      (t == null || t < 0) && (t = 0),
      (n == null || n > e.length) && (n = e.length),
      new fc(e.subarray(t, n))
    );
  },
  Ic = [
    `unexpected EOF`,
    `invalid block type`,
    `invalid length/literal`,
    `invalid distance`,
    `stream finished`,
    `no stream handler`,
    ,
    `no callback`,
    `invalid UTF-8 data`,
    `extra field too long`,
    `date not in range 1980-2099`,
    `filename too long`,
    `stream finishing`,
    `invalid zip data`,
  ],
  Lc = function (e, t, n) {
    var r = Error(t || Ic[e]);
    if (
      ((r.code = e),
      Error.captureStackTrace && Error.captureStackTrace(r, Lc),
      !n)
    )
      throw r;
    return r;
  },
  Rc = function (e, t, n, r) {
    var i = e.length,
      a = r ? r.length : 0;
    if (!i || (t.f && !t.l)) return n || new fc(0);
    var o = !n,
      s = o || t.i != 2,
      c = t.i;
    o && (n = new fc(i * 3));
    var l = function (e) {
        var t = n.length;
        if (e > t) {
          var r = new fc(Math.max(t * 2, e));
          (r.set(n), (n = r));
        }
      },
      u = t.f || 0,
      d = t.p || 0,
      f = t.b || 0,
      p = t.l,
      m = t.d,
      h = t.m,
      g = t.n,
      _ = i * 8;
    do {
      if (!p) {
        u = Mc(e, d, 1);
        var v = Mc(e, d + 1, 3);
        if (((d += 3), !v)) {
          var y = Pc(d) + 4,
            b = e[y - 4] | (e[y - 3] << 8),
            x = y + b;
          if (x > i) {
            c && Lc(0);
            break;
          }
          (s && l(f + b),
            n.set(e.subarray(y, x), f),
            (t.b = f += b),
            (t.p = d = x * 8),
            (t.f = u));
          continue;
        } else if (v == 1) ((p = kc), (m = Ac), (h = 9), (g = 5));
        else if (v == 2) {
          var S = Mc(e, d, 31) + 257,
            C = Mc(e, d + 10, 15) + 4,
            w = S + Mc(e, d + 5, 31) + 1;
          d += 14;
          for (var T = new fc(w), E = new fc(19), D = 0; D < C; ++D)
            E[_c[D]] = Mc(e, d + D * 3, 7);
          d += C * 3;
          for (
            var O = jc(E), k = (1 << O) - 1, A = Ec(E, O, 1), D = 0;
            D < w;
          ) {
            var j = A[Mc(e, d, k)];
            d += j & 15;
            var y = j >> 4;
            if (y < 16) T[D++] = y;
            else {
              var M = 0,
                N = 0;
              for (
                y == 16
                  ? ((N = 3 + Mc(e, d, 3)), (d += 2), (M = T[D - 1]))
                  : y == 17
                    ? ((N = 3 + Mc(e, d, 7)), (d += 3))
                    : y == 18 && ((N = 11 + Mc(e, d, 127)), (d += 7));
                N--;
              )
                T[D++] = M;
            }
          }
          var P = T.subarray(0, S),
            F = T.subarray(S);
          ((h = jc(P)), (g = jc(F)), (p = Ec(P, h, 1)), (m = Ec(F, g, 1)));
        } else Lc(1);
        if (d > _) {
          c && Lc(0);
          break;
        }
      }
      s && l(f + 131072);
      for (var ee = (1 << h) - 1, I = (1 << g) - 1, te = d; ; te = d) {
        var M = p[Nc(e, d) & ee],
          ne = M >> 4;
        if (((d += M & 15), d > _)) {
          c && Lc(0);
          break;
        }
        if ((M || Lc(2), ne < 256)) n[f++] = ne;
        else if (ne == 256) {
          ((te = d), (p = null));
          break;
        } else {
          var L = ne - 254;
          if (ne > 264) {
            var D = ne - 257,
              R = hc[D];
            ((L = Mc(e, d, (1 << R) - 1) + bc[D]), (d += R));
          }
          var re = m[Nc(e, d) & I],
            ie = re >> 4;
          (re || Lc(3), (d += re & 15));
          var F = Sc[ie];
          if (ie > 3) {
            var R = gc[ie];
            ((F += Nc(e, d) & ((1 << R) - 1)), (d += R));
          }
          if (d > _) {
            c && Lc(0);
            break;
          }
          s && l(f + 131072);
          var z = f + L;
          if (f < F) {
            var ae = a - F,
              oe = Math.min(F, z);
            for (ae + f < 0 && Lc(3); f < oe; ++f) n[f] = r[ae + f];
          }
          for (; f < z; ++f) n[f] = n[f - F];
        }
      }
      ((t.l = p),
        (t.p = te),
        (t.b = f),
        (t.f = u),
        p && ((u = 1), (t.m = h), (t.d = m), (t.n = g)));
    } while (!u);
    return f != n.length && o ? Fc(n, 0, f) : n.subarray(0, f);
  },
  zc = new fc(0),
  Bc = function (e, t) {
    return e[t] | (e[t + 1] << 8);
  },
  Vc = function (e, t) {
    return (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0;
  },
  Hc = function (e, t) {
    return Vc(e, t) + Vc(e, t + 4) * 4294967296;
  },
  Uc = function (e) {
    (e[0] != 31 || e[1] != 139 || e[2] != 8) && Lc(6, `invalid gzip data`);
    var t = e[3],
      n = 10;
    t & 4 && (n += (e[10] | (e[11] << 8)) + 2);
    for (var r = ((t >> 3) & 1) + ((t >> 4) & 1); r > 0; r -= !e[n++]);
    return n + (t & 2);
  },
  Wc = (function () {
    function e(e, t) {
      (typeof e == `function` && ((t = e), (e = {})), (this.ondata = t));
      var n = e && e.dictionary && e.dictionary.subarray(-32768);
      ((this.s = { i: 0, b: n ? n.length : 0 }),
        (this.o = new fc(32768)),
        (this.p = new fc(0)),
        n && this.o.set(n));
    }
    return (
      (e.prototype.e = function (e) {
        if ((this.ondata || Lc(5), this.d && Lc(4), !this.p.length)) this.p = e;
        else if (e.length) {
          var t = new fc(this.p.length + e.length);
          (t.set(this.p), t.set(e, this.p.length), (this.p = t));
        }
      }),
      (e.prototype.c = function (e) {
        this.s.i = +(this.d = e || !1);
        var t = this.s.b,
          n = Rc(this.p, this.s, this.o);
        (this.ondata(Fc(n, t, this.s.b), this.d),
          (this.o = Fc(n, this.s.b - 32768)),
          (this.s.b = this.o.length),
          (this.p = Fc(this.p, (this.s.p / 8) | 0)),
          (this.s.p &= 7));
      }),
      (e.prototype.push = function (e, t) {
        (this.e(e), this.c(t));
      }),
      e
    );
  })();
function Gc(e, t) {
  return Rc(e, { i: 2 }, t && t.out, t && t.dictionary);
}
var Kc = (function () {
    function e(e, t) {
      ((this.v = 1), (this.r = 0), Wc.call(this, e, t));
    }
    return (
      (e.prototype.push = function (e, t) {
        if ((Wc.prototype.e.call(this, e), (this.r += e.length), this.v)) {
          var n = this.p.subarray(this.v - 1),
            r = n.length > 3 ? Uc(n) : 4;
          if (r > n.length) {
            if (!t) return;
          } else
            this.v > 1 && this.onmember && this.onmember(this.r - n.length);
          ((this.p = n.subarray(r)), (this.v = 0));
        }
        (Wc.prototype.c.call(this, t),
          this.s.f &&
            !this.s.l &&
            !t &&
            ((this.v = Pc(this.s.p) + 9),
            (this.s = { i: 0 }),
            (this.o = new fc(0)),
            this.push(new fc(0), t)));
      }),
      e
    );
  })(),
  qc = typeof TextDecoder < `u` && new TextDecoder();
