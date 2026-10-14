// assets__Create-ea24k1TY 199 — times
// Lines 67978-68096 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
o$.Utils = {
  insertKeyframe: function (e, t) {
    let n = 0.001,
      r = e.getValueSize(),
      i = new e.TimeBufferType(e.times.length + 1),
      a = new e.ValueBufferType(e.values.length + r),
      o = e.createInterpolant(new e.ValueBufferType(r)),
      s;
    if (e.times.length === 0) {
      i[0] = t;
      for (let e = 0; e < r; e++) a[e] = 0;
      s = 0;
    } else if (t < e.times[0]) {
      if (Math.abs(e.times[0] - t) < n) return 0;
      ((i[0] = t),
        i.set(e.times, 1),
        a.set(o.evaluate(t), 0),
        a.set(e.values, r),
        (s = 0));
    } else if (t > e.times[e.times.length - 1]) {
      if (Math.abs(e.times[e.times.length - 1] - t) < n)
        return e.times.length - 1;
      ((i[i.length - 1] = t),
        i.set(e.times, 0),
        a.set(e.values, 0),
        a.set(o.evaluate(t), e.values.length),
        (s = i.length - 1));
    } else
      for (let c = 0; c < e.times.length; c++) {
        if (Math.abs(e.times[c] - t) < n) return c;
        if (e.times[c] < t && e.times[c + 1] > t) {
          (i.set(e.times.slice(0, c + 1), 0),
            (i[c + 1] = t),
            i.set(e.times.slice(c + 1), c + 2),
            a.set(e.values.slice(0, (c + 1) * r), 0),
            a.set(o.evaluate(t), (c + 1) * r),
            a.set(e.values.slice((c + 1) * r), (c + 2) * r),
            (s = c + 1));
          break;
        }
      }
    return ((e.times = i), (e.values = a), s);
  },
  mergeMorphTargetTracks: function (e, t) {
    let n = [],
      r = {},
      i = e.tracks;
    for (let e = 0; e < i.length; ++e) {
      let a = i[e],
        o = zi.parseTrackName(a.name),
        s = zi.findNode(t, o.nodeName);
      if (
        o.propertyName !== `morphTargetInfluences` ||
        o.propertyIndex === void 0
      ) {
        n.push(a);
        continue;
      }
      if (
        a.createInterpolant !== a.InterpolantFactoryMethodDiscrete &&
        a.createInterpolant !== a.InterpolantFactoryMethodLinear
      ) {
        if (a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
          throw Error(
            `THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.`,
          );
        (console.warn(
          `THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead.`,
        ),
          (a = a.clone()),
          a.setInterpolation(Gee));
      }
      let c = s.morphTargetInfluences.length,
        l = s.morphTargetDictionary[o.propertyIndex];
      if (l === void 0)
        throw Error(
          `THREE.GLTFExporter: Morph target name not found: ` + o.propertyIndex,
        );
      let u;
      if (r[s.uuid] === void 0) {
        u = a.clone();
        let e = new u.ValueBufferType(c * u.times.length);
        for (let t = 0; t < u.times.length; t++) e[t * c + l] = u.values[t];
        ((u.name = (o.nodeName || ``) + `.morphTargetInfluences`),
          (u.values = e),
          (r[s.uuid] = u),
          n.push(u));
        continue;
      }
      let d = a.createInterpolant(new a.ValueBufferType(1));
      u = r[s.uuid];
      for (let e = 0; e < u.times.length; e++)
        u.values[e * c + l] = d.evaluate(u.times[e]);
      for (let e = 0; e < a.times.length; e++) {
        let t = this.insertKeyframe(u, a.times[e]);
        u.values[t * c + l] = a.values[e];
      }
    }
    return ((e.tracks = n), e);
  },
  toTypedBufferAttribute: function (e, t) {
    let n = new ua(new t(e.count * e.itemSize), e.itemSize, !1);
    if (!e.normalized && !e.isInterleavedBufferAttribute)
      return (n.array.set(e.array), n);
    for (let t = 0, r = e.count; t < r; t++)
      for (let r = 0; r < e.itemSize; r++)
        n.setComponent(t, r, e.getComponent(t, r));
    return n;
  },
};
var V$ = 180 / Math.PI,
  H$ = Math.PI / 180;
function U$(e) {
  return {
    position: [e.position.x, e.position.y, e.position.z],
    rotation: [e.rotation.x * V$, e.rotation.y * V$, e.rotation.z * V$],
    scale: [e.scale.x, e.scale.y, e.scale.z],
  };
}
