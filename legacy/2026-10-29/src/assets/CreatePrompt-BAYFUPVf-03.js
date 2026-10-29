// CreatePrompt-BAYFUPVf 03 — math
// Lines 551-900 of readable/assets/CreatePrompt-BAYFUPVf.pretty.js (statement-aligned).
function Ae(e) {
  let t = e >>> 0;
  return () => {
    t += 1831565813;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function je(e, t) {
  let n = Math.sin(e * 1.52 + t) * 0.29;
  return (
    (n += Math.sin(e * 2.86 - t * 2) * 0.11),
    (n += Math.sin(e * 0.52 + t) * 0.14),
    n
  );
}
function Me(e, t) {
  let n = (0.5 + 0.5 * Math.sin(e * 0.76 + t * 0.22)) ** 10,
    r = (0.5 + 0.5 * Math.sin(e * 1.31 + t * 0.31 + 2.1)) ** 14 * 0.72;
  return Math.min(1, n + r);
}
function Ne(e, t) {
  let n = Ae(1515078739),
    r = () => {
      let e = Math.max(n(), 1e-7),
        t = n();
      return Math.sqrt(-2 * Math.log(e)) * Math.cos(ue * t);
    },
    i = {
      uTime: { value: 0 },
      uTravelTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uPointer: { value: new F(100, 0) },
      uPointerStrength: { value: 0 },
      uAspect: { value: 1 },
      uCameraZ: { value: Y },
    },
    a = new B();
  a.background = new L(t.clear);
  let o = new P(46, 1, 0.1, 40);
  o.position.set(0, 0.15, Y);
  let s = ({
      count: a,
      spread: o,
      sizeMin: s,
      sizeMax: c,
      alphaMin: l,
      alphaMax: u,
      speedMin: d,
      speedMax: f,
      zRange: p = 0.8,
    }) => {
      let m = new Float32Array(a * 3),
        h = new Float32Array(a),
        g = new Float32Array(a),
        _ = new Float32Array(a),
        v = new Float32Array(a),
        y = new Float32Array(a),
        b = new Float32Array(a);
      for (let t = 0; t < a; t += 1) {
        let i = t * 3,
          a = n(),
          x = r() * o * e.spreadScale,
          S = n() ** 2.2;
        ((m[i] = M.lerp(-12, fe, n())),
          (m[i + 1] = 0),
          (m[i + 2] = (n() - 0.5) * p),
          (h[t] = x),
          (g[t] = M.lerp(s, c, n() ** 2.1) * e.sizeScale),
          (_[t] = a),
          (v[t] = M.clamp(0.2 + S * 0.76 + x * 0.13, 0, 1)),
          (y[t] = M.lerp(l, u, S) * Math.exp(-Math.abs(x) * 0.85)),
          (b[t] = M.lerp(d, f, n() ** 2.45)));
      }
      let x = new z();
      return (
        x.setAttribute(`position`, new H(m, 3)),
        x.setAttribute(`aSpread`, new H(h, 1)),
        x.setAttribute(`aSize`, new H(g, 1)),
        x.setAttribute(`aSeed`, new H(_, 1)),
        x.setAttribute(`aTint`, new H(v, 1)),
        x.setAttribute(`aAlpha`, new H(y, 1)),
        x.setAttribute(`aSpeed`, new H(b, 1)),
        (x.boundingSphere = new K(new I(), 20)),
        new R(
          x,
          new V({
            uniforms: i,
            vertexShader: ye(t),
            fragmentShader: be(t),
            transparent: !0,
            blending: t.blending,
            depthWrite: !1,
            depthTest: !1,
          }),
        )
      );
    },
    c = s({
      count: e.cloud,
      spread: 0.36,
      sizeMin: 1,
      sizeMax: 4.9,
      alphaMin: 0.055,
      alphaMax: 0.48,
      speedMin: 0.025,
      speedMax: 0.16,
      zRange: 1.5,
    });
  ((c.renderOrder = 2), a.add(c));
  let l = s({
    count: e.core,
    spread: 0.075,
    sizeMin: 1.15,
    sizeMax: 5.3,
    alphaMin: 0.16,
    alphaMax: 0.92,
    speedMin: 0.04,
    speedMax: 0.26,
    zRange: 0.5,
  });
  ((l.renderOrder = 4), a.add(l));
  let u = s({
    count: e.sparks,
    spread: 0.11,
    sizeMin: 1.35,
    sizeMax: 4.4,
    alphaMin: 0.18,
    alphaMax: 0.96,
    speedMin: 0.12,
    speedMax: 0.46,
    zRange: 0.65,
  });
  ((u.renderOrder = 6),
    a.add(u),
    a.add(
      ((r) => {
        let a = new Float32Array(r * 3),
          o = new Float32Array(r),
          s = new Float32Array(r),
          c = new Float32Array(r),
          l = new Float32Array(r);
        for (let t = 0; t < r; t += 1) {
          let r = t * 3,
            i = n() > 0.955;
          ((a[r] = M.lerp(-12.5, 12.5, n())),
            (a[r + 1] = M.lerp(-e.verticalExtent, e.verticalExtent, n())),
            (a[r + 2] = M.lerp(-2.2, 1.2, n())),
            (o[t] = i ? M.lerp(1.4, 3.8, n()) : M.lerp(0.55, 1.45, n())),
            (s[t] = n()),
            (c[t] = n()),
            (l[t] = i ? M.lerp(0.42, 0.96, n()) : M.lerp(0.025, 0.15, n())));
        }
        let u = new z();
        (u.setAttribute(`position`, new H(a, 3)),
          u.setAttribute(`aSize`, new H(o, 1)),
          u.setAttribute(`aSeed`, new H(s, 1)),
          u.setAttribute(`aTint`, new H(c, 1)),
          u.setAttribute(`aAlpha`, new H(l, 1)),
          (u.boundingSphere = new K(new I(), 20)));
        let d = new R(
          u,
          new V({
            uniforms: i,
            vertexShader: xe(t),
            fragmentShader: be(t),
            transparent: !0,
            blending: t.blending,
            depthWrite: !1,
            depthTest: !1,
          }),
        );
        return ((d.renderOrder = 1), d);
      })(e.dust),
    ),
    a.add(
      ((r) => {
        let a = new Float32Array(r * 3),
          o = new Float32Array(r),
          s = new Float32Array(r),
          c = new Float32Array(r),
          l = new Float32Array(r),
          u = new Float32Array(r),
          d = new Float32Array(r);
        for (let t = 0; t < r; t += 1) {
          let r = t * 3,
            i = n() > 0.83;
          ((a[r] = M.lerp(-12.5, 12.5, n())),
            (a[r + 1] = M.lerp(-e.verticalExtent, e.verticalExtent, n())),
            (a[r + 2] = M.lerp(-7.8, 3.6, n())),
            (o[t] = i ? M.lerp(3.2, 6.8, n()) : M.lerp(0.9, 2.35, n())),
            (s[t] = n()),
            (c[t] = n()),
            (l[t] = i ? M.lerp(0.58, 0.96, n()) : M.lerp(0.22, 0.62, n())),
            (u[t] = M.lerp(0.001, 0.008, n())),
            (d[t] = M.lerp(0.18, 0.72, n() ** 1.6)));
        }
        let f = new z();
        (f.setAttribute(`position`, new H(a, 3)),
          f.setAttribute(`aSize`, new H(o, 1)),
          f.setAttribute(`aSeed`, new H(s, 1)),
          f.setAttribute(`aTint`, new H(c, 1)),
          f.setAttribute(`aAlpha`, new H(l, 1)),
          f.setAttribute(`aSpeed`, new H(u, 1)),
          f.setAttribute(`aApproach`, new H(d, 1)),
          (f.boundingSphere = new K(new I(), 22)));
        let p = new R(
          f,
          new V({
            uniforms: i,
            vertexShader: Se(t),
            fragmentShader: Ce(t),
            transparent: !0,
            blending: t.blending,
            depthWrite: !1,
            depthTest: !1,
          }),
        );
        return ((p.renderOrder = 1.5), p);
      })(e.stars),
    ));
  let d = [],
    f = (e, t, n) => {
      let r = new V({
          uniforms: { uTravelTime: i.uTravelTime, uAspect: i.uAspect },
          vertexShader: we,
          fragmentShader: e,
          transparent: !0,
          blending: 1,
          depthWrite: !1,
          depthTest: !1,
        }),
        o = new te(new N(1, 1), r);
      ((o.position.z = t),
        (o.renderOrder = n),
        (o.frustumCulled = !1),
        a.add(o),
        d.push(o));
    },
    p = () => {
      i.uAspect.value = o.aspect;
      let e = Math.tan(M.degToRad(o.fov * 0.5));
      for (let t of d) {
        let n = Math.max(0.1, o.position.z - t.position.z),
          r = 2 * e * n * 1.04;
        (t.scale.set(r * o.aspect, r, 1), (t.position.y = o.position.y));
      }
    };
  (f(Ee(e.fbmOctaves, e.fogIntensity * t.fogScale, t), -4.5, 0),
    e.farFogOnly ||
      (f(De(e.fbmOctaves, e.fogIntensity * t.fogScale, t), -3.2, 0.35),
      f(Oe(e.fbmOctaves, t), 2.5, 10)));
  let m = t.lineColors.slice(e.lineFrom, e.lineTo),
    h = ke
      .slice(e.lineFrom, e.lineTo)
      .map((e) => Math.min(1, e * t.lineOpacityScale)),
    g = m.length,
    _ = (g - 1) * 0.5,
    v = e.linePoints,
    y = [];
  for (let e = 0; e < g; e += 1) {
    let n = new Float32Array(v * 3),
      r = new Float32Array(v * 3),
      i = new L(m[e]),
      o = new z(),
      s = new H(n, 3).setUsage(j),
      c = new H(r, 3).setUsage(j);
    (o.setAttribute(`position`, s), o.setAttribute(`color`, c));
    let l = new ee(
      o,
      new W({
        color: 16777215,
        vertexColors: !0,
        transparent: !0,
        opacity: h[e],
        blending: t.blending,
        depthWrite: !1,
        depthTest: !1,
      }),
    );
    ((l.renderOrder = 5),
      a.add(l),
      y.push({ line: l, layer: e, baseColor: i }));
  }
  return {
    scene: a,
    camera: o,
    uniforms: i,
    updateWaveGeometry: (e, t) => {
      for (let { line: n, layer: r, baseColor: i } of y) {
        let a = n.geometry.attributes.position.array,
          o = n.geometry.attributes.color.array,
          s = r - _,
          c = 1 - Math.min(1, Math.abs(s) / _),
          l = e + (s * 0.09 + Math.sin(t * 0.045 + r * 0.7) * 0.025 * (1 - c));
        for (let e = 0; e < v; e += 1) {
          let n = e / (v - 1),
            u = M.lerp(-12, fe, n),
            d = e * 3,
            f = Me(u + s * 0.15, t + s * 0.62),
            p =
              Math.sin(
                u * (0.71 + r * 0.016) +
                  l * (r % 2 == 0 ? 0.65 : -0.42) +
                  r * 0.93,
              ) *
              (0.004 + Math.abs(s) * 0.0065),
            m =
              Math.sin(
                u * (2.45 + r * 0.055) - l * (0.32 + r * 0.015) + r * 1.57,
              ) *
              (0.003 + Math.abs(s) * 0.0036),
            h =
              Math.sin(u * (6.4 + r * 0.09) + l * 0.21 + r * 0.73) *
              (0.0012 + Math.abs(s) * 0.0011),
            g =
              Math.sin(u * 3.2 + t * 0.09 + r) *
              f *
              (0.002 + Math.abs(s) * 0.0018),
            _ = p + m + h + g,
            y = 0.86 + 0.14 * Math.sin(t * 0.11 + r * 1.7 + u * 0.19),
            b = (0.05 + c * 0.09 + f * (1.08 + c * 1)) * y,
            x = f * (0.16 + c * 0.36);
          ((a[d] = u),
            (a[d + 1] = je(u + s * 0.012, l) + s * 0.014 + _),
            (a[d + 2] = s * 0.014),
            (o[d] = M.lerp(i.r, 1, x) * b),
            (o[d + 1] = M.lerp(i.g, 0.58, x) * b),
            (o[d + 2] = M.lerp(i.b, 1, x) * b));
        }
        ((n.geometry.attributes.position.needsUpdate = !0),
          (n.geometry.attributes.color.needsUpdate = !0));
      }
    },
    fitAtmosphere: p,
  };
}
function Pe(e) {
  (e.traverse((e) => {
    let t = e;
    t.geometry?.dispose();
    let n = t.material;
    Array.isArray(n) ? n.forEach((e) => e.dispose()) : n?.dispose();
  }),
    e.clear());
}
