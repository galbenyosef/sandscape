// Create-CEn7EAZs 224 — math
// Lines 76393-76736 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var Xue = class extends ca {
    constructor(e = new u0(), t = new d0({ color: Math.random() * 16777215 })) {
      (super(e, t), (this.isLineSegments2 = !0), (this.type = `LineSegments2`));
    }
    computeLineDistances() {
      let e = this.geometry,
        t = e.attributes.instanceStart,
        n = e.attributes.instanceEnd,
        r = new Float32Array(2 * t.count);
      for (let e = 0, i = 0, a = t.count; e < a; e++, i += 2)
        (p0.fromBufferAttribute(t, e),
          m0.fromBufferAttribute(n, e),
          (r[i] = i === 0 ? 0 : r[i - 1]),
          (r[i + 1] = r[i] + p0.distanceTo(m0)));
      let i = new sa(r, 2, 1);
      return (
        e.setAttribute(`instanceDistanceStart`, new ba(i, 1, 0)),
        e.setAttribute(`instanceDistanceEnd`, new ba(i, 1, 1)),
        this
      );
    }
    raycast(e, t) {
      let n = this.material.worldUnits,
        r = e.camera;
      r === null &&
        !n &&
        console.error(
          `LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`,
        );
      let i = e.params.Line2 === void 0 ? 0 : e.params.Line2.threshold || 0;
      T0 = e.ray;
      let a = this.matrixWorld,
        o = this.geometry,
        s = this.material;
      ((E0 = s.linewidth + i),
        o.boundingSphere === null && o.computeBoundingSphere(),
        C0.copy(o.boundingSphere).applyMatrix4(a));
      let c;
      if (
        ((c = n
          ? E0 * 0.5
          : D0(
              r,
              Math.max(r.near, C0.distanceToPoint(T0.origin)),
              s.resolution,
            )),
        (C0.radius += c),
        T0.intersectsSphere(C0) === !1)
      )
        return;
      (o.boundingBox === null && o.computeBoundingBox(),
        S0.copy(o.boundingBox).applyMatrix4(a));
      let l;
      ((l = n
        ? E0 * 0.5
        : D0(r, Math.max(r.near, S0.distanceToPoint(T0.origin)), s.resolution)),
        S0.expandByScalar(l),
        T0.intersectsBox(S0) !== !1 && (n ? Jue(this, t) : Yue(this, r, t)));
    }
    onBeforeRender(e) {
      let t = this.material.uniforms;
      t &&
        t.resolution &&
        (e.getViewport(f0),
        this.material.uniforms.resolution.value.set(f0.z, f0.w));
    }
  },
  O0 = Math.PI * 2,
  Zue = 0.1,
  Que = 10.111,
  k0 = 3.827,
  $ue = 1.25,
  ede = -0.42,
  tde = 0.1,
  nde = 0.02,
  rde = 1.24,
  A0 = new Y(0.34, 0.7, -0.1),
  j0 = 1.4,
  ide = 22.9,
  ade = 28.4,
  ode = 700,
  sde = 0.12,
  cde = 0.0095,
  lde = 0.006,
  ude = 0.7,
  dde = 1.85,
  M0 = 2,
  N0 = 0.45,
  P0 = 2.45,
  F0 = 4.45,
  I0 = 4.9,
  L0 = (N0 * 2) / Math.PI,
  R0 = 196870,
  z0 = 20,
  fde = 60,
  pde = 28,
  mde = {
    desktop: {
      bloom: !0,
      maxPixelRatio: 2,
      maxRenderPixels: 5e6,
      duneSegmentsX: 150,
      duneSegmentsY: 200,
      minFrameMs: 0,
      powerPreference: `high-performance`,
    },
    mobile: {
      bloom: !1,
      maxPixelRatio: 1.25,
      maxRenderPixels: 25e5,
      duneSegmentsX: 64,
      duneSegmentsY: 96,
      minFrameMs: 1e3 / 30,
      powerPreference: `default`,
    },
  },
  hde = `
  uniform float uTime;
  varying float vHeight;
  varying float vDist;

  float duneHeight(vec2 p) {
    float h = 0.0;
    h += sin(p.x * 0.16 + sin(p.y * 0.06) * 1.7) * 1.35;   // long rolling ridges
    h += sin(p.y * 0.20 - uTime * 0.30) * 0.95;            // crests drift into the distance
    h += sin((p.x * 0.44 + p.y * 0.33) - uTime * 0.12) * 0.38;
    h += sin(p.x * 0.85 - p.y * 0.55 + uTime * 0.18) * 0.18; // fine wind ripples
    return h;
  }

  void main() {
    vec3 pos = position;                 // geometry is pre-rotated into the XZ plane
    float h = duneHeight(vec2(pos.x, pos.z));
    pos.y += h;
    vHeight = h;

    vec4 world = modelMatrix * vec4(pos, 1.0);
    vec4 view = viewMatrix * world;
    vDist = -view.z;
    gl_Position = projectionMatrix * view;
  }
`,
  gde = `
  uniform vec3 uBase;
  uniform vec3 uCrest;
  uniform vec3 uFog;
  varying float vHeight;
  varying float vDist;

  void main() {
    float crest = smoothstep(0.1, 1.7, vHeight);
    vec3 col = mix(uBase, uCrest, crest);

    // Faint topographic contours riding the height field — echoes the wireframe
    // motif of the mark without being busy.
    float band = abs(fract(vHeight * 0.85 + 0.5) - 0.5);
    col += uCrest * smoothstep(0.05, 0.0, band) * 0.22;

    // Distance fog, so the horizon stays soft.
    float fog = clamp(1.0 - exp(-vDist * 0.056), 0.0, 1.0);
    col = mix(col, uFog, fog);

    gl_FragColor = vec4(col, 1.0);

    // A raw ShaderMaterial only gets the tone-map/encode FUNCTIONS prepended;
    // applying them is the shader's job (LineMaterial and MeshBasicMaterial
    // include these too). Without them the mobile tier — which renders straight
    // to the canvas — would write linear colour into an sRGB buffer and the
    // dunes would come out dark and blue next to the desktop tier. On the
    // composer path both are no-ops: it renders to a linear HDR target with
    // tone mapping forced off, and OutputPass does the work instead.
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
function B0(e) {
  return new Ui(e);
}
function _de(e) {
  let t = new $i();
  t.background = new Ui(R0);
  let n = new Mi(60, 1, 0.1, 500);
  (n.position.set(0, 2.4, 9), n.lookAt(0, 1.15, -28));
  let r = {
      uTime: { value: 0 },
      uBase: { value: B0(1050649) },
      uCrest: { value: B0(8272337) },
      uFog: { value: B0(R0) },
    },
    i = new ji(140, 260, e.duneSegmentsX, e.duneSegmentsY);
  i.rotateX(-Math.PI / 2);
  let a = new ca(
    i,
    new ta({ uniforms: r, vertexShader: hde, fragmentShader: gde }),
  );
  return (
    (a.position.z = -70),
    (a.frustumCulled = !1),
    t.add(a),
    { scene: t, camera: n, uniforms: r }
  );
}
function vde(e) {
  let t = e * 0.5,
    n = [
      [-t, -t, -t],
      [t, -t, -t],
      [t, t, -t],
      [-t, t, -t],
      [-t, -t, t],
      [t, -t, t],
      [t, t, t],
      [-t, t, t],
    ];
  return [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 4],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
  ].flatMap(([e, t]) => [...n[e], ...n[t]]);
}
function V0(e, t) {
  let n = Array(e.length);
  for (let r = 0; r < e.length; r += 3)
    ((n[r] = e[r] + t.x),
      (n[r + 1] = e[r + 1] + t.y),
      (n[r + 2] = e[r + 2] + t.z));
  return n;
}
function H0(e) {
  return e.attributes.instanceStart.data;
}
function U0(e, t, n, r) {
  let i = new u0();
  (i.setPositions(e), H0(i).setUsage(vi));
  let a = new Xue(
    i,
    new d0({
      color: t,
      linewidth: n,
      transparent: !0,
      opacity: r,
      blending: 2,
      depthWrite: !1,
    }),
  );
  return ((a.frustumCulled = !1), a);
}
function yde(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 256), (t.height = 256));
  let n = t.getContext(`2d`),
    r = n.createRadialGradient(256 / 2, 256 / 2, 0, 256 / 2, 256 / 2, 256 / 2);
  for (let [t, n] of e) r.addColorStop(t, n);
  return ((n.fillStyle = r), n.fillRect(0, 0, 256, 256), t);
}
function bde() {
  let e = new Xi(
    yde([
      [0, `rgba(210, 165, 255, 0.18)`],
      [0.24, `rgba(150, 70, 255, 0.08)`],
      [0.58, `rgba(78, 24, 165, 0.025)`],
      [1, `rgba(0, 0, 0, 0)`],
    ]),
  );
  e.colorSpace = fa;
  let t = new Hi(
    new xi({
      map: e,
      color: 10110463,
      transparent: !0,
      opacity: 0.13,
      blending: 2,
      depthWrite: !1,
    }),
  );
  return (t.scale.set(3.5, 3.5, 1), t);
}
function xde() {
  let e = document.createElement(`canvas`);
  ((e.width = 256), (e.height = 256));
  let t = e.getContext(`2d`);
  ((t.strokeStyle = `rgba(150, 92, 255, 0.85)`),
    (t.lineWidth = 1),
    t.beginPath());
  for (let e = -256; e < 256 * 2; e += 32)
    (t.moveTo(e, 0),
      t.lineTo(e + 256, 256),
      t.moveTo(e, 256),
      t.lineTo(e + 256, 0));
  t.stroke();
  let n = new Xi(e);
  ((n.wrapS = ya), (n.wrapT = ya), n.repeat.set(10, 10), (n.colorSpace = fa));
  let r = document.createElement(`canvas`);
  ((r.width = 256), (r.height = 256));
  let i = r.getContext(`2d`);
  ((i.fillStyle = `#000`), i.fillRect(0, 0, 256, 256));
  let a = i.createRadialGradient(
    256 / 2,
    256 / 2,
    0,
    256 / 2,
    256 / 2,
    256 / 2,
  );
  (a.addColorStop(0, `rgba(255, 255, 255, 1)`),
    a.addColorStop(0.3, `rgba(255, 255, 255, 0.45)`),
    a.addColorStop(0.5, `rgba(40, 40, 40, 0.04)`),
    a.addColorStop(1, `rgba(0, 0, 0, 0)`),
    (i.fillStyle = a),
    i.fillRect(0, 0, 256, 256));
  let o = new Xi(r);
  ((o.colorSpace = fa), o.repeat.set(4.25, 4.25), o.offset.set(0.382, 0.382));
  let s = new Ii({
    map: n,
    alphaMap: o,
    transparent: !0,
    opacity: 0.045,
    blending: 2,
    depthWrite: !1,
  });
  return new ca(new ji(48, 48), s);
}
function W0(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function Sde(e) {
  let t = e % I0;
  return t < M0
    ? 0
    : t < P0
      ? W0((t - M0) / N0)
      : t < F0
        ? 1
        : 1 - W0((t - F0) / N0);
}
