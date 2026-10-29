// SceneEditor-NC7_0wmu 81 — jsx
// Lines 39173-39522 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function $x(e) {
  return e
    ? e
        .split(`+`)
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(`+`)
    : ``;
}
var eS = ({
  onUndo: e,
  onRedo: t,
  onDropToGround: n,
  shortcuts: r,
  onSetShortcut: i,
}) => {
  let [a, o] = (0, J.useState)(!1),
    [l, u] = (0, J.useState)(!1),
    p = X((e) => e.transformMode),
    h = X((e) => e.transformSpace),
    g = X((e) => e.snapEnabled),
    _ = X((e) => e.snapValues),
    v = X((e) => e.magnetEnabled),
    y = X((e) => e.setMagnetEnabled),
    b = X((e) => e.viewMode),
    S = X((e) => e.shadingMode),
    C = X((e) => e.wireframeMode),
    w = X((e) => e.showGrid),
    T = X((e) => e.showColliders),
    E = X((e) => e.showLightGizmos),
    D = X((e) => e.canUndo),
    O = X((e) => e.canRedo),
    k = X((e) => e.undoLabel),
    A = X((e) => e.redoLabel),
    j = X((e) => e.setTransformMode),
    M = X((e) => e.setTransformSpace),
    N = X((e) => e.setSnapEnabled),
    P = X((e) => e.setViewMode),
    ee = X((e) => e.setShadingMode),
    I = X((e) => e.setWireframeMode),
    te = X((e) => e.toggleGrid),
    ne = X((e) => e.toggleColliders),
    L = X((e) => e.toggleLightGizmos),
    R = `w-4 h-4`;
  return (0, Y.jsxs)(`div`, {
    className: `absolute top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5`,
    children: [
      (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-0.5 px-1.5 py-1 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-lg`,
        children: [
          (0, Y.jsx)(Zx, {
            active: p === `translate`,
            onClick: () => j(`translate`),
            icon: (0, Y.jsx)(Ln, { className: R }),
            title: `Move (V)`,
          }),
          (0, Y.jsx)(Zx, {
            active: p === `rotate`,
            onClick: () => j(`rotate`),
            icon: (0, Y.jsx)(Vn, { className: R }),
            title: `Rotate (C)`,
          }),
          (0, Y.jsx)(Zx, {
            active: p === `scale`,
            onClick: () => j(`scale`),
            icon: (0, Y.jsx)(x, { className: R }),
            title: `Scale (X)`,
          }),
          (0, Y.jsx)(Qx, {}),
          (0, Y.jsx)(Zx, {
            active: h === `world`,
            onClick: () => M(h === `local` ? `world` : `local`),
            icon: (0, Y.jsx)(m, { className: R }),
            title: `Space: ${h} (click to toggle)`,
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: `relative flex items-center gap-0.5 px-1.5 py-1 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-lg`,
        children: [
          (0, Y.jsx)(Zx, {
            active: g,
            onClick: () => N(!g),
            icon: (0, Y.jsx)(Hn, { className: R }),
            title: `Grid snap: ${_.translate}m / ${_.rotate}\u00b0 (${$x(r.toggleSnap)})`,
          }),
          (0, Y.jsx)(Zx, {
            active: v,
            onClick: () => y(!v),
            icon: (0, Y.jsx)(Pn, { className: R }),
            title: `Object magnet — snap flush to a neighbour (${$x(r.toggleMagnet)})`,
          }),
          (0, Y.jsx)(Zx, {
            onClick: n,
            icon: (0, Y.jsx)(xn, { className: R }),
            title: `Drop selection to ground (${$x(r.dropToGround)})`,
          }),
          (0, Y.jsx)(Zx, {
            active: l,
            onClick: () => u((e) => !e),
            icon: (0, Y.jsx)(F, { className: R }),
            title: `Snap settings`,
          }),
          (0, Y.jsx)(Qx, {}),
          (0, Y.jsx)(Zx, {
            active: w,
            onClick: te,
            icon: (0, Y.jsx)(On, { className: R }),
            title: `Grid (G)`,
          }),
          (0, Y.jsx)(Zx, {
            active: T,
            onClick: ne,
            icon: (0, Y.jsx)(Sn, { className: R }),
            title: `Colliders`,
          }),
          (0, Y.jsx)(Zx, {
            active: E,
            onClick: L,
            icon: (0, Y.jsx)(Nn, { className: R }),
            title: `Light gizmos`,
          }),
          l &&
            (0, Y.jsx)(Xx, {
              onClose: () => u(!1),
              onDropToGround: () => {
                (n(), u(!1));
              },
            }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-0.5 px-1.5 py-1 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-lg`,
        children: [
          (0, Y.jsx)(Zx, {
            active: b === `lit`,
            onClick: () => P(`lit`),
            icon: (0, Y.jsx)(d, { className: R }),
            title: `Lit`,
          }),
          (0, Y.jsx)(Zx, {
            active: b === `unlit`,
            onClick: () => P(`unlit`),
            icon: (0, Y.jsx)(c, { className: R }),
            title: `Unlit`,
          }),
          (0, Y.jsx)(Qx, {}),
          (0, Y.jsx)(Zx, {
            active: S === `textured`,
            onClick: () => ee(`textured`),
            icon: (0, Y.jsx)(s, { className: R }),
            title: `Textured`,
          }),
          (0, Y.jsx)(Zx, {
            active: S === `solid`,
            onClick: () => ee(`solid`),
            icon: (0, Y.jsx)(f, { className: R }),
            title: `Solid color`,
          }),
          (0, Y.jsx)(Qx, {}),
          (0, Y.jsx)(Zx, {
            active: C === `wireframe`,
            onClick: () => I(C === `wireframe` ? `off` : `wireframe`),
            icon: (0, Y.jsx)(Sn, { className: R }),
            title: `Wireframe`,
          }),
          (0, Y.jsx)(Zx, {
            active: C === `overlay`,
            onClick: () => I(C === `overlay` ? `off` : `overlay`),
            icon: (0, Y.jsx)(Mn, { className: R }),
            title: `Wireframe overlay`,
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-0.5 px-1.5 py-1 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-lg`,
        children: [
          (0, Y.jsx)(Zx, {
            disabled: !D,
            onClick: e,
            icon: (0, Y.jsx)(Wn, { className: R }),
            title: D ? `Undo: ${k}` : `Nothing to undo`,
          }),
          (0, Y.jsx)(Zx, {
            disabled: !O,
            onClick: t,
            icon: (0, Y.jsx)(Bn, { className: R }),
            title: O ? `Redo: ${A}` : `Nothing to redo`,
          }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: `flex items-center px-1 py-1 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-lg`,
        children: (0, Y.jsx)(Zx, {
          onClick: () => o(!0),
          icon: (0, Y.jsx)(jn, { className: R }),
          title: `Keyboard shortcuts`,
        }),
      }),
      (0, Y.jsx)(Hx, {
        open: a,
        onClose: () => o(!1),
        shortcuts: r,
        onSetShortcut: i,
      }),
    ],
  });
};
function tS(e) {
  let t = new Map(),
    n = new Map(),
    r = [
      `map`,
      `normalMap`,
      `roughnessMap`,
      `metalnessMap`,
      `emissiveMap`,
      `aoMap`,
      `alphaMap`,
    ];
  return (
    e.traverse((e) => {
      if (e.userData?.editorOnly) return;
      let i = e;
      if (!i.isMesh) return;
      let a = Array.isArray(i.material)
        ? i.material
        : i.material
          ? [i.material]
          : [];
      for (let e of a) {
        e && !t.has(e.uuid) && t.set(e.uuid, e);
        for (let t of r) {
          let r = e?.[t];
          r &&
            r.isTexture &&
            !n.has(r.uuid) &&
            n.set(
              r.uuid,
              r.name ||
                r.source?.data?.src?.split(`/`).pop() ||
                r.uuid.slice(0, 8),
            );
        }
      }
    }),
    {
      materials: [...t.values()],
      textures: [...n.entries()].map(([e, t]) => ({ uuid: e, name: t })),
    }
  );
}
function nS(e) {
  let t = e.color;
  return t && typeof t.getHexString == `function`
    ? `#${t.getHexString()}`
    : `#64748b`;
}
var rS = [
    { label: `Box`, factory: () => new Lt(1, 1, 1) },
    { label: `Sphere`, factory: () => new hn(0.5, 32, 16) },
    { label: `Cylinder`, factory: () => new Me(0.5, 0.5, 1, 32) },
    { label: `Capsule`, factory: () => new dn(0.3, 0.6, 4, 16) },
    { label: `Plane`, factory: () => new De(1, 1) },
    { label: `Cone`, factory: () => new Ie(0.5, 1, 32) },
    { label: `Torus`, factory: () => new Nt(0.4, 0.15, 16, 32) },
    { label: `TorusKnot`, factory: () => new ie(0.35, 0.1, 64, 16) },
    { label: `Circle`, factory: () => new We(0.5, 32) },
    { label: `Ring`, factory: () => new _t(0.3, 0.5, 32) },
    { label: `Dodecahedron`, factory: () => new _n(0.5) },
    { label: `Icosahedron`, factory: () => new L(0.5) },
    { label: `Octahedron`, factory: () => new tt(0.5) },
    { label: `Tetrahedron`, factory: () => new qe(0.5) },
  ],
  iS = [
    {
      label: `AmbientLight`,
      factory: () => {
        let e = new Qt(16777215, 0.5);
        return ((e.name = `AmbientLight`), e);
      },
    },
    {
      label: `DirectionalLight`,
      factory: () => {
        let e = new He(16777215, 1);
        return ((e.name = `DirectionalLight`), e.position.set(5, 10, 5), e);
      },
    },
    {
      label: `PointLight`,
      factory: () => {
        let e = new at(16777215, 1, 50);
        return ((e.name = `PointLight`), e.position.set(0, 3, 0), e);
      },
    },
    {
      label: `SpotLight`,
      factory: () => {
        let e = new fn(16777215, 1);
        return ((e.name = `SpotLight`), e.position.set(0, 5, 0), e);
      },
    },
    {
      label: `HemisphereLight`,
      factory: () => {
        let e = new H(16777215, 4473924, 1);
        return ((e.name = `HemisphereLight`), e.position.set(0, 10, 0), e);
      },
    },
  ],
  aS = () => new Te({ roughness: 0.5, metalness: 0.1, color: 8421504 });
function oS(e) {
  return e instanceof G
    ? Sn
    : e instanceof He
      ? d
      : e instanceof Qt || e instanceof at
        ? Nn
        : e instanceof fn
          ? E
          : e instanceof H
            ? d
            : e instanceof mn
              ? wn
              : e instanceof nt
                ? I
                : Sn;
}
function sS(e) {
  let t = [];
  for (let n of e.children) n.userData?.editorOnly || H_(n) || t.push(cS(n));
  return t;
}
function cS(e) {
  let t = [];
  for (let n of e.children) n.userData?.editorOnly || t.push(cS(n));
  return { object: e, children: t };
}
function lS(e) {
  return [
    e.name,
    e.type,
    e.userData?.assetName,
    e.userData?.assetId,
    e.userData?.modelPath,
  ]
    .filter(Boolean)
    .join(` `)
    .toLowerCase();
}
