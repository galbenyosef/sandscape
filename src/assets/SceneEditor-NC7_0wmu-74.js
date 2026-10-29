// SceneEditor-NC7_0wmu 74 — material
// Lines 35958-36256 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Cb(e) {
  return (t) => {
    ((t.uniforms.uMacroStrength = ab.uMacroStrength),
      (t.uniforms.uMacroSeed = ab.uMacroSeed),
      (t.uniforms.uMacroGrime = ab.uMacroGrime),
      (t.uniforms.uMacroRough = ab.uMacroRough),
      (t.uniforms.uTriScale = ab.uTriScale),
      (t.uniforms.uProjBlend = ab.uProjBlend),
      (t.uniforms.uTexRot = ab.uTexRot),
      (t.uniforms.uPomDepth = ab.uPomDepth),
      (t.vertexShader = t.vertexShader
        .replace(`#include <common>`, `#include <common>\n${pb}`)
        .replace(`#include <begin_vertex>`, `#include <begin_vertex>\n${mb}`)));
    let n =
        e === `triplanar`
          ? vb + gb
          : e === `pom`
            ? xb + gb
            : `#include <map_fragment>\n${gb}`,
      r = t.fragmentShader
        .replace(`#include <common>`, `#include <common>\n${hb}`)
        .replace(`#include <map_fragment>`, n)
        .replace(
          `#include <roughnessmap_fragment>`,
          `#include <roughnessmap_fragment>\n${_b}`,
        );
    (e === `pom` &&
      (r = r
        .replace(
          `#include <roughnessmap_pars_fragment>`,
          `#include <roughnessmap_pars_fragment>\n${bb}`,
        )
        .replace(`#include <normal_fragment_maps>`, Sb)),
      (t.fragmentShader = r));
  };
}
var wb = Cb(`triplanar`),
  Tb = Cb(`uv`),
  Eb = Cb(`pom`);
function Db(e, t, n) {
  let r = n?.authoredUV === !0 || n?.uvOverridden === !0,
    i = ob && !r && !!t && yb.has(t);
  e.traverse((e) => {
    let t = e;
    if (!t.isMesh) return;
    let n = Array.isArray(t.material) ? t.material : [t.material];
    for (let e of n) {
      let t = e;
      if (!t || !t.isMeshStandardMaterial || t.userData.macroShader) continue;
      let n = sb && !r && t.roughnessMap ? `pom` : i ? `triplanar` : `uv`,
        a = n === `pom` ? Eb : n === `triplanar` ? wb : Tb;
      if (n !== `uv`)
        for (let e of [t.map, t.roughnessMap, t.normalMap])
          e &&
            (e.wrapS !== 1e3 || e.wrapT !== 1e3) &&
            ((e.wrapS = $t), (e.wrapT = $t), (e.needsUpdate = !0));
      ((t.onBeforeCompile = a),
        (t.customProgramCacheKey = () => `procKitShader_${n}_v6`),
        (t.userData.macroShader = !0),
        (t.needsUpdate = !0));
    }
  });
}
var Ob = `__sandscape_wireframe_overlay`,
  kb = `__sandscape_collision_overlay`;
function Ab(e) {
  return e === `off` ? `shaded` : e;
}
function jb(e, t) {
  let n = e;
  for (; n;) {
    let e = t[n.uuid];
    if (e) return e;
    n = n.parent;
  }
}
function Mb() {
  let e = X((e) => e.viewMode),
    t = X((e) => e.shadingMode),
    n = X((e) => e.wireframeMode),
    r = X((e) => e.showColliders),
    i = X((e) => e.objectDisplayModes),
    a = (0, J.useRef)(new WeakMap()),
    o = (0, J.useRef)(null),
    s = (0, J.useCallback)((e) => {
      if (a.current.has(e)) return;
      let t = e.material;
      a.current.set(e, { material: t, map: t.map ?? null });
    }, []);
  return {
    applyViewMode: (0, J.useCallback)(
      (c) => {
        let l = o.current;
        (l &&
          l.viewMode === e &&
          l.shadingMode === t &&
          l.wireframeMode === n &&
          l.showColliders === r &&
          l.objectDisplayModes === i) ||
          ((o.current = {
            viewMode: e,
            shadingMode: t,
            wireframeMode: n,
            showColliders: r,
            objectDisplayModes: i,
          }),
          c.traverse((o) => {
            if (!(o instanceof G) || o.userData[Ob] || o.userData[kb]) return;
            s(o);
            let c = a.current.get(o);
            if (!c) return;
            let l = jb(o, i) ?? Ab(n),
              u = c.material;
            if (e === `unlit`)
              if (o.material instanceof Ne) {
                let e = o.material;
                ((e.map = t === `textured` ? c.map : null),
                  (e.wireframe = l === `wireframe`),
                  (e.needsUpdate = !0));
              } else {
                let e = new Ne();
                (u.color && e.color.set(u.color.getHex()),
                  t === `textured` && c.map && (e.map = c.map),
                  (e.wireframe = l === `wireframe`),
                  (o.material = e));
              }
            else {
              if (
                o.material instanceof Ne &&
                (u instanceof Te || u instanceof _e)
              ) {
                let e = o.material;
                ((o.material = u), e.dispose());
              }
              let e = o.material;
              ((e.map = t === `textured` ? c.map : null),
                (e.wireframe = l === `wireframe`),
                (e.needsUpdate = !0));
            }
            let d = o.children.find((e) => e.userData[Ob]);
            if (l === `overlay`) {
              if (!d) {
                let e = new Ne({
                    color: 0,
                    wireframe: !0,
                    transparent: !0,
                    opacity: 0.3,
                    depthTest: !0,
                  }),
                  t = new G(o.geometry, e);
                ((t.userData[Ob] = !0),
                  (t.userData.editorOnly = !0),
                  (t.raycast = () => {}),
                  o.add(t));
              }
            } else d && (o.remove(d), d.material && d.material.dispose());
            let f = o.children.find((e) => e.userData[kb]);
            if (r) {
              if (!f) {
                let e = new Ne({
                    color: 65535,
                    wireframe: !0,
                    transparent: !0,
                    opacity: 0.6,
                  }),
                  t = new G(o.geometry, e);
                ((t.userData[kb] = !0),
                  (t.userData.collisionOverlay = !0),
                  (t.userData.editorOnly = !0),
                  (t.raycast = () => {}),
                  o.add(t));
              }
            } else f && (o.remove(f), f.material && f.material.dispose());
          }));
      },
      [e, t, n, r, i, s],
    ),
    viewMode: e,
    shadingMode: t,
    wireframeMode: n,
  };
}
function Nb(e) {
  if (
    Array.isArray(e) &&
    e.length >= 3 &&
    e.slice(0, 3).every((e) => typeof e == `number`)
  )
    return new U(e[0], e[1], e[2]);
  if (typeof e == `object` && e) {
    let t = e;
    if (
      typeof t.x == `number` &&
      typeof t.y == `number` &&
      typeof t.z == `number`
    )
      return new U(t.x, t.y, t.z);
  }
  return null;
}
function Pb(e, t = 1) {
  return typeof e == `number`
    ? new U(e, e, e)
    : Nb(e) ||
        (Array.isArray(e) &&
        e.length >= 2 &&
        typeof e[0] == `number` &&
        typeof e[1] == `number`
          ? new U(e[0], e[1], 0.02)
          : new U(t, t, t));
}
function Fb(e) {
  if (typeof e == `number`) return new W(e);
  if (typeof e == `string`)
    try {
      return new W(e);
    } catch {
      return new W(2282478);
    }
  if (
    Array.isArray(e) &&
    e.length >= 3 &&
    e.slice(0, 3).every((e) => typeof e == `number`)
  ) {
    let t = e.slice(0, 3).every((e) => e >= 0 && e <= 1);
    return new W(
      t ? e[0] : e[0] / 255,
      t ? e[1] : e[1] / 255,
      t ? e[2] : e[2] / 255,
    );
  }
  return new W(2282478);
}
function Ib(e) {
  return new zt({ color: e, transparent: !0, opacity: 0.7, depthTest: !1 });
}
function Lb(e, t) {
  let n = new kt(new Ze(e), Ib(t));
  return (e.dispose(), n);
}
function Rb(e, t) {
  let n = [];
  for (let t = 0; t < 64; t++) {
    let r = (t / 64) * Math.PI * 2;
    n.push(new U(Math.cos(r) * e, Math.sin(r) * e, 0));
  }
  return new jt(new ct().setFromPoints(n), Ib(t));
}
function zb(e, t) {
  let n = new nt(),
    r = Rb(e, t),
    i = Rb(e, t);
  i.rotation.x = Math.PI / 2;
  let a = Rb(e, t);
  return ((a.rotation.y = Math.PI / 2), n.add(r, i, a), n);
}
function Bb(e, t, n) {
  let r = t.clone().sub(e),
    i = r.length();
  if (i <= 1e-6) return null;
  let a = r.normalize(),
    o = new nt(),
    s = new Et(new ct().setFromPoints([e, t]), Ib(n));
  o.add(s);
  let c = Math.min(0.2, i * 0.25),
    l = new U(0, 1, 0);
  Math.abs(a.dot(l)) > 0.95 && l.set(1, 0, 0);
  let u = new U()
      .crossVectors(a, l)
      .normalize()
      .multiplyScalar(c * 0.5),
    d = t.clone().addScaledVector(a, -c),
    f = new kt(
      new ct().setFromPoints([t, d.clone().add(u), t, d.clone().sub(u)]),
      Ib(n),
    );
  return (o.add(f), (o.userData.positionApplied = !0), o);
}
function Vb(e) {
  return e.getWorldPosition(new U());
}
function Hb(e, t, n) {
  let r = Nb(t);
  return r ? (e instanceof bt ? r : n ? e.localToWorld(r) : r) : Vb(e);
}
function Ub(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 256), (t.height = 64));
  let n = t.getContext(`2d`);
  ((n.fillStyle = `rgba(0,0,0,0.7)`),
    n.fillRect(0, 0, t.width, t.height),
    (n.fillStyle = `#67e8f9`),
    (n.font = `28px sans-serif`),
    (n.textAlign = `center`),
    (n.textBaseline = `middle`),
    n.fillText(e, t.width / 2, t.height / 2));
  let r = new Ge(new le({ map: new pt(t), depthTest: !1 }));
  return (r.scale.set(1.6, 0.4, 1), r);
}
