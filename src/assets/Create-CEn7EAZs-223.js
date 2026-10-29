// Create-CEn7EAZs 223 — uniforms
// Lines 76177-76392 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var d0 = class extends ta {
    constructor(e) {
      (super({
        type: `LineMaterial`,
        uniforms: Li.clone(_a.line.uniforms),
        vertexShader: _a.line.vertexShader,
        fragmentShader: _a.line.fragmentShader,
        clipping: !0,
      }),
        (this.isLineMaterial = !0),
        this.setValues(e));
    }
    get color() {
      return this.uniforms.diffuse.value;
    }
    set color(e) {
      this.uniforms.diffuse.value = e;
    }
    get worldUnits() {
      return `WORLD_UNITS` in this.defines;
    }
    set worldUnits(e) {
      ((e === !0) !== this.worldUnits && (this.needsUpdate = !0),
        e === !0
          ? (this.defines.WORLD_UNITS = ``)
          : delete this.defines.WORLD_UNITS);
    }
    get linewidth() {
      return this.uniforms.linewidth.value;
    }
    set linewidth(e) {
      this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
    }
    get dashed() {
      return `USE_DASH` in this.defines;
    }
    set dashed(e) {
      ((e === !0) !== this.dashed && (this.needsUpdate = !0),
        e === !0 ? (this.defines.USE_DASH = ``) : delete this.defines.USE_DASH);
    }
    get dashScale() {
      return this.uniforms.dashScale.value;
    }
    set dashScale(e) {
      this.uniforms.dashScale.value = e;
    }
    get dashSize() {
      return this.uniforms.dashSize.value;
    }
    set dashSize(e) {
      this.uniforms.dashSize.value = e;
    }
    get dashOffset() {
      return this.uniforms.dashOffset.value;
    }
    set dashOffset(e) {
      this.uniforms.dashOffset.value = e;
    }
    get gapSize() {
      return this.uniforms.gapSize.value;
    }
    set gapSize(e) {
      this.uniforms.gapSize.value = e;
    }
    get opacity() {
      return this.uniforms.opacity.value;
    }
    set opacity(e) {
      this.uniforms && (this.uniforms.opacity.value = e);
    }
    get resolution() {
      return this.uniforms.resolution.value;
    }
    set resolution(e) {
      this.uniforms.resolution.value.copy(e);
    }
    get alphaToCoverage() {
      return `USE_ALPHA_TO_COVERAGE` in this.defines;
    }
    set alphaToCoverage(e) {
      this.defines &&
        ((e === !0) !== this.alphaToCoverage && (this.needsUpdate = !0),
        e === !0
          ? (this.defines.USE_ALPHA_TO_COVERAGE = ``)
          : delete this.defines.USE_ALPHA_TO_COVERAGE);
    }
  },
  f0 = new Aa(),
  p0 = new Y(),
  m0 = new Y(),
  h0 = new Aa(),
  g0 = new Aa(),
  _0 = new Aa(),
  v0 = new Y(),
  y0 = new _i(),
  b0 = new Kee(),
  x0 = new Y(),
  S0 = new ea(),
  C0 = new wa(),
  w0 = new Aa(),
  T0,
  E0;
function D0(e, t, n) {
  return (
    w0.set(0, 0, -t, 1).applyMatrix4(e.projectionMatrix),
    w0.multiplyScalar(1 / w0.w),
    (w0.x = E0 / n.width),
    (w0.y = E0 / n.height),
    w0.applyMatrix4(e.projectionMatrixInverse),
    w0.multiplyScalar(1 / w0.w),
    Math.abs(Math.max(w0.x, w0.y))
  );
}
function Jue(e, t) {
  let n = e.matrixWorld,
    r = e.geometry,
    i = r.attributes.instanceStart,
    a = r.attributes.instanceEnd,
    o = Math.min(r.instanceCount, i.count);
  for (let r = 0, s = o; r < s; r++) {
    (b0.start.fromBufferAttribute(i, r),
      b0.end.fromBufferAttribute(a, r),
      b0.applyMatrix4(n));
    let o = new Y(),
      s = new Y();
    (T0.distanceSqToSegment(b0.start, b0.end, s, o),
      s.distanceTo(o) < E0 * 0.5 &&
        t.push({
          point: s,
          pointOnLine: o,
          distance: T0.origin.distanceTo(s),
          object: e,
          face: null,
          faceIndex: r,
          uv: null,
          uv1: null,
        }));
  }
}
function Yue(e, t, n) {
  let r = t.projectionMatrix,
    i = e.material.resolution,
    a = e.matrixWorld,
    o = e.geometry,
    s = o.attributes.instanceStart,
    c = o.attributes.instanceEnd,
    l = Math.min(o.instanceCount, s.count),
    u = -t.near;
  (T0.at(1, _0),
    (_0.w = 1),
    _0.applyMatrix4(t.matrixWorldInverse),
    _0.applyMatrix4(r),
    _0.multiplyScalar(1 / _0.w),
    (_0.x *= i.x / 2),
    (_0.y *= i.y / 2),
    (_0.z = 0),
    v0.copy(_0),
    y0.multiplyMatrices(t.matrixWorldInverse, a));
  for (let t = 0, o = l; t < o; t++) {
    if (
      (h0.fromBufferAttribute(s, t),
      g0.fromBufferAttribute(c, t),
      (h0.w = 1),
      (g0.w = 1),
      h0.applyMatrix4(y0),
      g0.applyMatrix4(y0),
      h0.z > u && g0.z > u)
    )
      continue;
    if (h0.z > u) {
      let e = h0.z - g0.z,
        t = (h0.z - u) / e;
      h0.lerp(g0, t);
    } else if (g0.z > u) {
      let e = g0.z - h0.z,
        t = (g0.z - u) / e;
      g0.lerp(h0, t);
    }
    (h0.applyMatrix4(r),
      g0.applyMatrix4(r),
      h0.multiplyScalar(1 / h0.w),
      g0.multiplyScalar(1 / g0.w),
      (h0.x *= i.x / 2),
      (h0.y *= i.y / 2),
      (g0.x *= i.x / 2),
      (g0.y *= i.y / 2),
      b0.start.copy(h0),
      (b0.start.z = 0),
      b0.end.copy(g0),
      (b0.end.z = 0));
    let o = b0.closestPointToPointParameter(v0, !0);
    b0.at(o, x0);
    let l = Ci.lerp(h0.z, g0.z, o),
      d = l >= -1 && l <= 1,
      f = v0.distanceTo(x0) < E0 * 0.5;
    if (d && f) {
      (b0.start.fromBufferAttribute(s, t),
        b0.end.fromBufferAttribute(c, t),
        b0.start.applyMatrix4(a),
        b0.end.applyMatrix4(a));
      let r = new Y(),
        i = new Y();
      (T0.distanceSqToSegment(b0.start, b0.end, i, r),
        n.push({
          point: i,
          pointOnLine: r,
          distance: T0.origin.distanceTo(i),
          object: e,
          face: null,
          faceIndex: t,
          uv: null,
          uv1: null,
        }));
    }
  }
}
