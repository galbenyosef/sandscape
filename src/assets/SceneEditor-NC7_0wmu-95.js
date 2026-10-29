// SceneEditor-NC7_0wmu 95 — label
// Lines 44977-45215 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Sw(e, t) {
  let n;
  switch (t) {
    case `physical`:
      n = new _e();
      break;
    case `basic`:
      n = new Ne();
      break;
    case `lambert`:
      n = new Fe();
      break;
    default:
      n = new Te();
      break;
  }
  return (n.copy(e), (n.name = e.name), (n.needsUpdate = !0), n);
}
var Cw = [
    { key: `map`, label: `Albedo` },
    { key: `normalMap`, label: `Normal` },
    { key: `roughnessMap`, label: `Roughness` },
    { key: `metalnessMap`, label: `Metalness` },
    { key: `aoMap`, label: `AO` },
    { key: `emissiveMap`, label: `Emissive` },
  ],
  ww = [
    { value: 1, label: `Normal` },
    { value: 2, label: `Additive` },
    { value: 3, label: `Subtractive` },
    { value: 4, label: `Multiply` },
    { value: 0, label: `None` },
  ];
function Tw(e) {
  let t = new Map(),
    n = [...Cw.map((e) => e.key), `alphaMap`];
  return (
    e.traverse((e) => {
      let r = e;
      if (!r.isMesh || !r.material) return;
      let i = Array.isArray(r.material) ? r.material : [r.material];
      for (let e of i)
        for (let r of n) {
          let n = e[r];
          n && n.isTexture && !t.has(n.uuid) && t.set(n.uuid, n);
        }
    }),
    [...t.values()]
  );
}
var Ew = new Set(),
  Dw = new Set([...Cw.map((e) => e.key), `alphaMap`]);
function Ow(e) {
  return e instanceof Te || e instanceof _e
    ? {
        color: !0,
        emissive: !0,
        pbrScalars: !0,
        opacity: !0,
        wireframe: !0,
        flatShading: !0,
        side: !0,
        maps: Dw,
      }
    : e instanceof Ne
      ? {
          color: !0,
          emissive: !1,
          pbrScalars: !1,
          opacity: !0,
          wireframe: !0,
          flatShading: !1,
          side: !0,
          maps: new Set([`map`, `aoMap`, `alphaMap`]),
        }
      : e instanceof Fe || e instanceof Be
        ? {
            color: !0,
            emissive: !0,
            pbrScalars: !1,
            opacity: !0,
            wireframe: !0,
            flatShading: !0,
            side: !0,
            maps: new Set([
              `map`,
              `normalMap`,
              `aoMap`,
              `emissiveMap`,
              `alphaMap`,
            ]),
          }
        : (e instanceof zt || e instanceof st,
          {
            color: !0,
            emissive: !1,
            pbrScalars: !1,
            opacity: !0,
            wireframe: !1,
            flatShading: !1,
            side: !1,
            maps: Ew,
          });
}
function kw(e) {
  return Ow(e);
}
function Aw(e) {
  return e.name || e.source?.data?.src?.split(`/`).pop() || e.uuid.slice(0, 8);
}
function jw(e) {
  return typeof e == `number`
    ? `number`
    : typeof e == `boolean`
      ? `boolean`
      : e instanceof W
        ? `color`
        : e instanceof V
          ? `vector2`
          : e instanceof U
            ? `vector3`
            : e instanceof vn
              ? `vector4`
              : e?.isTexture === !0
                ? `texture`
                : `unknown`;
}
function Mw(e) {
  return e.isShaderMaterial === !0 || e.isRawShaderMaterial === !0;
}
var Nw = `varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
  Pw = `uniform vec3 color;
uniform float time;
varying vec2 vUv;

void main() {
  float pulse = 0.5 + 0.5 * sin(time + vUv.x * 6.2831);
  gl_FragColor = vec4(color * pulse, 1.0);
}`;
function Fw() {
  return { color: { value: new W(5217791) }, time: { value: 0 } };
}
function Iw() {
  let e = new Tt({ uniforms: Fw(), vertexShader: Nw, fragmentShader: Pw });
  return ((e.name = `Custom Shader`), e);
}
function Lw(e) {
  return typeof e.uniforms?.time?.value == `number`;
}
var Rw = ({
    texture: e,
    sceneTextures: t,
    colorData: n = !1,
    onPick: r,
    onUploadError: i,
  }) => {
    let a = (e) => {
      let t = URL.createObjectURL(e);
      new de().load(
        t,
        (i) => {
          ((i.name = e.name),
            (i.colorSpace = n ? Ft : ``),
            (i.needsUpdate = !0),
            r(i),
            URL.revokeObjectURL(t));
        },
        void 0,
        (n) => {
          (URL.revokeObjectURL(t),
            console.error(`[TexturePicker] Failed to load texture`, e.name, n),
            i?.(`Failed to load "${e.name}"`));
        },
      );
    };
    return (0, Y.jsxs)(`div`, {
      className: `flex items-center gap-1 flex-wrap`,
      children: [
        (0, Y.jsxs)(`select`, {
          value: e?.uuid ?? ``,
          onChange: (e) => {
            r(t.find((t) => t.uuid === e.target.value) ?? null);
          },
          className: `flex-1 min-w-0 bg-muted/30 border border-border/60 rounded px-1 py-0.5 text-[9px] text-foreground outline-none`,
          children: [
            (0, Y.jsx)(`option`, { value: ``, children: `— none —` }),
            t.map((e) =>
              (0, Y.jsx)(`option`, { value: e.uuid, children: Aw(e) }, e.uuid),
            ),
            e &&
              !t.some((t) => t.uuid === e.uuid) &&
              (0, Y.jsx)(`option`, { value: e.uuid, children: Aw(e) }),
          ],
        }),
        (0, Y.jsxs)(`label`, {
          className: `cursor-pointer text-muted-foreground hover:text-foreground`,
          title: `Upload texture`,
          children: [
            (0, Y.jsx)(T, { className: `w-3 h-3` }),
            (0, Y.jsx)(`input`, {
              type: `file`,
              accept: `image/*`,
              className: `hidden`,
              onChange: (e) => {
                let t = e.target.files?.[0];
                (t && a(t), (e.target.value = ``));
              },
            }),
          ],
        }),
        e &&
          (0, Y.jsx)(`button`, {
            onClick: () => r(null),
            className: `text-muted-foreground hover:text-destructive`,
            title: `Clear texture`,
            children: (0, Y.jsx)(N, { className: `w-3 h-3` }),
          }),
      ],
    });
  },
  zw = ({ children: e }) =>
    (0, Y.jsx)(`h4`, {
      className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
      children: e,
    });
function Bw({ value: e, onChange: t, title: n }) {
  return (0, Y.jsx)(Gx, {
    step: 0.01,
    value: Number.isFinite(e) ? e : 0,
    onCommit: t,
    title: n,
    className: `w-full bg-muted/30 border border-border/60 rounded px-1 py-0.5 text-[9px] text-foreground outline-none cursor-ew-resize`,
  });
}
