// SceneEditor-NC7_0wmu 23 — math
// Lines 17690-18020 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function nu(e) {
  let t = [],
    n = new Set();
  function r(e) {
    e &&
      typeof e == `object` &&
      !n.has(e) &&
      (n.add(e),
      e instanceof ArrayBuffer
        ? t.push(e)
        : ArrayBuffer.isView(e)
          ? t.push(e.buffer)
          : Array.isArray(e)
            ? e.forEach(r)
            : Object.values(e).forEach(r));
  }
  return (r(e), t);
}
function ru(e, t) {
  return Array(e)
    .fill(null)
    .map((e, n) => t(n));
}
var iu = class {
  constructor({ allocate: e, dispose: t, valid: n }) {
    ((this.items = []),
      (this.allocate = e),
      (this.dispose = t),
      (this.valid = n));
  }
  alloc(e) {
    for (;;) {
      let t = this.items.pop();
      if (!t) break;
      if (this.valid(t, e)) return t;
      this.dispose && this.dispose(t);
    }
    return this.allocate(e);
  }
  free(e) {
    this.items.push(e);
  }
  disposeAll() {
    let e;
    for (e = this.items.pop(); e;)
      (this.dispose && this.dispose(e), (e = this.items.pop()));
  }
};
function au(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
  let g = t * 4,
    [_, v] = e;
  ((_[g] = ql(n)),
    (_[g + 1] = ql(r)),
    (_[g + 2] = ql(i)),
    (_[g + 3] = Yl(f)),
    (v[g] = Yl(p) | (Yl(m) << 16)),
    (v[g + 1] = Yl(h) | (Yl(Math.log(a)) << 16)),
    (v[g + 2] = Yl(Math.log(o)) | (Yl(Math.log(s)) << 16)),
    (v[g + 3] = Du(c, l, u, d)));
}
function ou(e, t) {
  let n = lu,
    r = t * 4,
    [i, a] = e;
  return (
    (n.center.x = Jl(i[r])),
    (n.center.y = Jl(i[r + 1])),
    (n.center.z = Jl(i[r + 2])),
    (n.opacity = Xl(i[r + 3] & 65535)),
    (n.color.r = Xl(a[r] & 65535)),
    (n.color.g = Xl(a[r] >>> 16)),
    (n.color.b = Xl(a[r + 1] & 65535)),
    (n.scales.x = Math.exp(Xl(a[r + 1] >>> 16))),
    (n.scales.y = Math.exp(Xl(a[r + 2] & 65535))),
    (n.scales.z = Math.exp(Xl(a[r + 2] >>> 16))),
    Ou(a[r + 3], n.quaternion),
    n
  );
}
function su(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
  let _ = g?.rgbMin ?? 0,
    v = (g?.rgbMax ?? 1) - _,
    y = tu((p - _) / v),
    b = tu((m - _) / v),
    x = tu((h - _) / v),
    S = tu(g?.lodOpacity ? 0.5 * f : f),
    C = Tu(cu.set(c, l, u, d)),
    w = C & 255,
    T = (C >>> 8) & 255,
    E = (C >>> 16) & 255,
    D = g?.lnScaleMin ?? -12,
    O = 254 / ((g?.lnScaleMax ?? 9) - D),
    k =
      a < el
        ? 0
        : Math.min(255, Math.max(1, Math.round((Math.log(a) - D) * O) + 1)),
    A =
      o < el
        ? 0
        : Math.min(255, Math.max(1, Math.round((Math.log(o) - D) * O) + 1)),
    j =
      s < el
        ? 0
        : Math.min(255, Math.max(1, Math.round((Math.log(s) - D) * O) + 1)),
    M = Yl(n),
    N = Yl(r),
    P = Yl(i),
    F = t * 4;
  ((e[F] = y | (b << 8) | (x << 16) | (S << 24)),
    (e[F + 1] = M | (N << 16)),
    (e[F + 2] = P | (w << 16) | (T << 24)),
    (e[F + 3] = k | (A << 8) | (j << 16) | (E << 24)));
}
var cu = new R(),
  lu = {
    center: new U(),
    scales: new U(),
    quaternion: new R(),
    color: new W(),
    opacity: 0,
  };
function uu(e, t, n) {
  let r = lu,
    i = t * 4,
    a = e[i],
    o = e[i + 1],
    s = e[i + 2],
    c = e[i + 3],
    l = n?.rgbMin ?? 0,
    u = (n?.rgbMax ?? 1) - l;
  (r.color.set(
    l + ((a & 255) / 255) * u,
    l + (((a >>> 8) & 255) / 255) * u,
    l + (((a >>> 16) & 255) / 255) * u,
  ),
    (r.opacity = ((a >>> 24) & 255) / 255),
    n?.lodOpacity && (r.opacity = 2 * r.opacity),
    r.center.set(Xl(o & 65535), Xl((o >>> 16) & 65535), Xl(s & 65535)));
  let d = n?.lnScaleMin ?? -12,
    f = ((n?.lnScaleMax ?? 9) - d) / 254,
    p = c & 255;
  r.scales.x = p === 0 ? 0 : Math.exp(d + (p - 1) * f);
  let m = (c >>> 8) & 255;
  r.scales.y = m === 0 ? 0 : Math.exp(d + (m - 1) * f);
  let h = (c >>> 16) & 255;
  return (
    (r.scales.z = h === 0 ? 0 : Math.exp(d + (h - 1) * f)),
    Eu(((s >>> 16) & 65535) | ((c >>> 8) & 16711680), r.quaternion),
    r
  );
}
function du(e) {
  let t = Q,
    n = Math.max(ol, Math.min(il, Math.ceil(e / t))),
    r = Math.ceil(e / (t * n));
  return { width: t, height: n, depth: r, maxSplats: t * n * r };
}
function fu() {
  return navigator.platform.toLowerCase().startsWith(`win`)
    ? !1
    : navigator.maxTouchPoints > 0 ||
        /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/.test(
          navigator.userAgent,
        );
}
function pu() {
  return (
    /Android/.test(navigator.userAgent) || /Tizen/.test(navigator.userAgent)
  );
}
function mu() {
  return !!navigator.xr && /Oculus/.test(navigator.userAgent);
}
function hu() {
  return /iPhone|iPad/.test(navigator.userAgent);
}
function gu() {
  return !!navigator.xr && hu() && /Safari/.test(navigator.userAgent) && fu();
}
function _u(e) {
  let t = new ln(e.autoStart);
  return (
    (t.startTime = e.startTime),
    (t.oldTime = e.oldTime),
    (t.elapsedTime = e.elapsedTime),
    (t.running = e.running),
    t
  );
}
var vu = Rl(`
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`);
function yu(e) {
  let t = new U();
  for (let n of e) t.add(n);
  return t.divideScalar(e.length);
}
function bu(e) {
  if (e.length === 0) return new R();
  let t = e[0].clone();
  for (let n = 1; n < e.length; n++)
    e[n].dot(e[0]) < 0
      ? ((t.x -= e[n].x), (t.y -= e[n].y), (t.z -= e[n].z), (t.w -= e[n].w))
      : ((t.x += e[n].x), (t.y += e[n].y), (t.z += e[n].z), (t.w += e[n].w));
  return t.normalize();
}
function xu(e, t) {
  let [n, r] = [new U(), new R()],
    [i, a] = [new U(), new R()];
  return (
    e.decompose(n, r, new U()),
    t.decompose(i, a, new U()),
    { distance: n.distanceTo(i), coorient: Math.abs(r.dot(a)) }
  );
}
function Su({ matrix1: e, matrix2: t, maxDistance: n, minCoorient: r }) {
  let { distance: i, coorient: a } = xu(e, t);
  return i <= n && (r == null || a >= r);
}
var Cu = new R(),
  wu = new U();
function Tu(e) {
  let t = Cu.copy(e).normalize();
  t.w < 0 && t.set(-t.x, -t.y, -t.z, -t.w);
  let n = 2 * Math.acos(t.w),
    r = Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z),
    i = r < 1e-6 ? wu.set(1, 0, 0) : wu.set(t.x, t.y, t.z).divideScalar(r),
    a = Math.abs(i.x) + Math.abs(i.y) + Math.abs(i.z),
    o = i.x / a,
    s = i.y / a;
  if (i.z < 0) {
    let e = o;
    ((o = (1 - Math.abs(s)) * (o >= 0 ? 1 : -1)),
      (s = (1 - Math.abs(e)) * (s >= 0 ? 1 : -1)));
  }
  let c = o * 0.5 + 0.5,
    l = s * 0.5 + 0.5,
    u = Math.round(c * 255),
    d = Math.round(l * 255);
  return (Math.round((255 / Math.PI) * n) << 16) | (d << 8) | u;
}
function Eu(e, t) {
  let n = e & 255,
    r = (e >>> 8) & 255,
    i = (e >>> 16) & 255,
    a = n / 255,
    o = r / 255,
    s = (a - 0.5) * 2,
    c = (o - 0.5) * 2,
    l = 1 - (Math.abs(s) + Math.abs(c)),
    u = Math.max(-l, 0);
  ((s += s >= 0 ? -u : u), (c += c >= 0 ? -u : u));
  let d = wu.set(s, c, l).normalize(),
    f = (i / 255) * Math.PI * 0.5,
    p = Math.sin(f),
    m = Math.cos(f);
  return (t.set(d.x * p, d.y * p, d.z * p, m), t);
}
function Du(e, t, n, r) {
  let i = Math.sqrt(e * e + t * t + n * n + r * r),
    a = (r < 0 ? -e : e) / i,
    o = (r < 0 ? -t : t) / i,
    s = (r < 0 ? -n : n) / i,
    c = (r < 0 ? -r : r) / i,
    l = 2 * Math.acos(c),
    u = Math.sqrt(a * a + o * o + s * s),
    d = u < 1e-6 ? 1 : a / u,
    f = u < 1e-6 ? 0 : o / u,
    p = u < 1e-6 ? 0 : s / u,
    m = Math.abs(d) + Math.abs(f) + Math.abs(p),
    h = d / m,
    g = f / m;
  if (p < 0) {
    let e = h;
    ((h = (1 - Math.abs(g)) * (h >= 0 ? 1 : -1)),
      (g = (1 - Math.abs(e)) * (g >= 0 ? 1 : -1)));
  }
  let _ = h * 0.5 + 0.5,
    v = g * 0.5 + 0.5,
    y = Math.round(_ * 1023),
    b = Math.round(v * 1023);
  return (Math.round((4095 / Math.PI) * l) << 20) | (b << 10) | y;
}
function Ou(e, t) {
  let n = e & 1023,
    r = (e >>> 10) & 1023,
    i = (e >>> 20) & 4095,
    a = n / 1023,
    o = r / 1023,
    s = (a - 0.5) * 2,
    c = (o - 0.5) * 2,
    l = 1 - (Math.abs(s) + Math.abs(c)),
    u = Math.max(-l, 0);
  ((s += s >= 0 ? -u : u), (c += c >= 0 ? -u : u));
  let d = Math.sqrt(s * s + c * c + l * l),
    f = d < 1e-6 ? 0 : s / d,
    p = d < 1e-6 ? 0 : c / d,
    m = d < 1e-6 ? 0 : l / d,
    h = (i / 4095) * Math.PI * 0.5,
    g = Math.sin(h),
    _ = Math.cos(h);
  return (t.set(f * g, p * g, m * g, _), t);
}
function ku(e, t) {
  let n = [],
    r = 0,
    i = null,
    a = new Kc((e, a) => {
      if ((n.push(e), (r += e.length), a || r >= t)) {
        let e = new Uint8Array(r),
          a = 0;
        for (let t of n) (e.set(t, a), (a += t.length));
        i = e.slice(0, t);
      }
    }),
    o = 1024,
    s = 0;
  for (; i == null && s < e.length;) {
    let t = e.slice(s, s + o);
    (a.push(t, !1), (s += o));
  }
  if (i == null && (a.push(new Uint8Array(), !0), i == null))
    throw Error(`Failed to decompress partial gzip`);
  return i;
}
