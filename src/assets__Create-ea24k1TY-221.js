// assets__Create-ea24k1TY 221 — uniforms
// Lines 75397-75612 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var f0 = class extends ca {
    constructor(e) {
      (super({
        type: `LineMaterial`,
        uniforms: Ii.clone(Aa.line.uniforms),
        vertexShader: Aa.line.vertexShader,
        fragmentShader: Aa.line.fragmentShader,
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
  p0 = new Va(),
  m0 = new Y(),
  h0 = new Y(),
  g0 = new Va(),
  _0 = new Va(),
  v0 = new Va(),
  y0 = new Y(),
  b0 = new vi(),
  x0 = new Oa(),
  S0 = new Y(),
  C0 = new sa(),
  w0 = new Ia(),
  T0 = new Va(),
  E0,
  D0;
function O0(e, t, n) {
  return (
    T0.set(0, 0, -t, 1).applyMatrix4(e.projectionMatrix),
    T0.multiplyScalar(1 / T0.w),
    (T0.x = D0 / n.width),
    (T0.y = D0 / n.height),
    T0.applyMatrix4(e.projectionMatrixInverse),
    T0.multiplyScalar(1 / T0.w),
    Math.abs(Math.max(T0.x, T0.y))
  );
}
function hue(e, t) {
  let n = e.matrixWorld,
    r = e.geometry,
    i = r.attributes.instanceStart,
    a = r.attributes.instanceEnd,
    o = Math.min(r.instanceCount, i.count);
  for (let r = 0, s = o; r < s; r++) {
    (x0.start.fromBufferAttribute(i, r),
      x0.end.fromBufferAttribute(a, r),
      x0.applyMatrix4(n));
    let o = new Y(),
      s = new Y();
    (E0.distanceSqToSegment(x0.start, x0.end, s, o),
      s.distanceTo(o) < D0 * 0.5 &&
        t.push({
          point: s,
          pointOnLine: o,
          distance: E0.origin.distanceTo(s),
          object: e,
          face: null,
          faceIndex: r,
          uv: null,
          uv1: null,
        }));
  }
}
function gue(e, t, n) {
  let r = t.projectionMatrix,
    i = e.material.resolution,
    a = e.matrixWorld,
    o = e.geometry,
    s = o.attributes.instanceStart,
    c = o.attributes.instanceEnd,
    l = Math.min(o.instanceCount, s.count),
    u = -t.near;
  (E0.at(1, v0),
    (v0.w = 1),
    v0.applyMatrix4(t.matrixWorldInverse),
    v0.applyMatrix4(r),
    v0.multiplyScalar(1 / v0.w),
    (v0.x *= i.x / 2),
    (v0.y *= i.y / 2),
    (v0.z = 0),
    y0.copy(v0),
    b0.multiplyMatrices(t.matrixWorldInverse, a));
  for (let t = 0, o = l; t < o; t++) {
    if (
      (g0.fromBufferAttribute(s, t),
      _0.fromBufferAttribute(c, t),
      (g0.w = 1),
      (_0.w = 1),
      g0.applyMatrix4(b0),
      _0.applyMatrix4(b0),
      g0.z > u && _0.z > u)
    )
      continue;
    if (g0.z > u) {
      let e = g0.z - _0.z,
        t = (g0.z - u) / e;
      g0.lerp(_0, t);
    } else if (_0.z > u) {
      let e = _0.z - g0.z,
        t = (_0.z - u) / e;
      _0.lerp(g0, t);
    }
    (g0.applyMatrix4(r),
      _0.applyMatrix4(r),
      g0.multiplyScalar(1 / g0.w),
      _0.multiplyScalar(1 / _0.w),
      (g0.x *= i.x / 2),
      (g0.y *= i.y / 2),
      (_0.x *= i.x / 2),
      (_0.y *= i.y / 2),
      x0.start.copy(g0),
      (x0.start.z = 0),
      x0.end.copy(_0),
      (x0.end.z = 0));
    let o = x0.closestPointToPointParameter(y0, !0);
    x0.at(o, S0);
    let l = Si.lerp(g0.z, _0.z, o),
      d = l >= -1 && l <= 1,
      f = y0.distanceTo(S0) < D0 * 0.5;
    if (d && f) {
      (x0.start.fromBufferAttribute(s, t),
        x0.end.fromBufferAttribute(c, t),
        x0.start.applyMatrix4(a),
        x0.end.applyMatrix4(a));
      let r = new Y(),
        i = new Y();
      (E0.distanceSqToSegment(x0.start, x0.end, i, r),
        n.push({
          point: i,
          pointOnLine: r,
          distance: E0.origin.distanceTo(i),
          object: e,
          face: null,
          faceIndex: t,
          uv: null,
          uv1: null,
        }));
    }
  }
}
