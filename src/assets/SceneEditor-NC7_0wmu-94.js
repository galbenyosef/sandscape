// SceneEditor-NC7_0wmu 94 — current
// Lines 44635-44976 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
async function aw(e, t) {
  let n = GC(e);
  return (
    await fetch(`${KC(n)}/${encodeURIComponent(t)}`, {
      method: `DELETE`,
      headers: await D(),
    })
  ).json();
}
function ow(e, t) {
  let n = GC(e);
  return `${O.API_BASE_URL}/api/game/${encodeURIComponent(n)}/generated_assets/${t}`;
}
function sw(e, t) {
  let n = (t.assets || [])
    .filter((e) => e && e.category && e.file)
    .map((t) => ({
      category: t.category,
      file: ow(e, t.file),
      label: t.label,
      weight: t.weight,
      tileWorldSize: t.tile_world_size,
      role: t.role,
      archCategory: t.arch_category,
      rarity: t.rarity,
      detailDensity: t.detail_density,
      materialFamily: t.material_family,
      structure: t.structure,
      authoredUV: t.authored_uv === !0,
      canonicalAxis: Sv(t.canonical_axis) ? t.canonical_axis : void 0,
      sourceSize:
        Array.isArray(t.source_size) &&
        t.source_size.length === 3 &&
        t.source_size.every((e) => typeof e == `number` && Number.isFinite(e))
          ? t.source_size
          : void 0,
    }));
  return n.length
    ? { id: t.kit_id, label: t.name || t.kit_id, assets: n }
    : null;
}
async function cw(e) {
  try {
    let t = await qC(e);
    return t
      ? t
          .filter((e) => e.status === `ready` || e.status === `partial`)
          .map((t) => sw(e, t))
          .filter((e) => e !== null)
      : [];
  } catch {
    return [];
  }
}
function lw(e, t) {
  let n = new Set(e.packs.map((e) => e.id)),
    r = t.filter((e) => !n.has(e.id));
  return { version: e.version, packs: [...e.packs, ...r] };
}
function uw(e) {
  let t = /^kit_(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})\d{2}_/.exec(e || ``);
  if (!t) return null;
  let [, n, r, i, a, o] = t.map(Number),
    s = new Date(Date.UTC(n, r - 1, i, a, o));
  if (Number.isNaN(s.getTime())) return null;
  let c = (e) => String(e).padStart(2, `0`);
  return `${s.toLocaleString(void 0, { month: `short` })} ${s.getDate()} ${c(s.getHours())}:${c(s.getMinutes())}`;
}
function dw(e) {
  let t = new Map();
  for (let n of e) t.set(n.label, (t.get(n.label) ?? 0) + 1);
  let n = new Map(),
    r = new Map();
  for (let i of e) {
    if ((t.get(i.label) ?? 0) < 2) {
      r.set(i.id, i.label);
      continue;
    }
    let e = (n.get(i.label) ?? 0) + 1;
    (n.set(i.label, e), r.set(i.id, `${i.label} · ${uw(i.id) ?? `#${e}`}`));
  }
  return r;
}
function fw(e, t) {
  let n = new Set(t.map((e) => e.trim().toLowerCase())),
    r = e.trim() || `Imported Kit`;
  if (!n.has(r.toLowerCase())) return r;
  for (let e = 2; e < 500; e += 1) {
    let t = `${r} ${e}`;
    if (!n.has(t.toLowerCase())) return t;
  }
  return r;
}
var pw = `proc_lights`,
  mw = 64,
  hw = 4;
function gw(e) {
  let t = e.children.filter((e) => e.userData?.procLight);
  for (let n of t) (n.traverse((e) => e.dispose?.()), e.remove(n));
}
function _w(e, t) {
  if ((gw(e), !t.procLighting)) return;
  let n = Mv(e)
    .filter((e) => e.userData?.procKind === `light_socket`)
    .sort((e, t) =>
      String(e.userData.layoutPieceId).localeCompare(
        String(t.userData.layoutPieceId),
      ),
    );
  if (!n.length) return;
  let r = new nt();
  ((r.name = pw), (r.userData = { procLight: !0, editorOnly: !0 }));
  let i = Math.max(0, t.procLightIntensity ?? 10),
    a = Math.max(0.5, t.wallHeight - 0.4),
    o = Math.min(n.length, mw),
    s = new U();
  for (let e = 0; e < o; e++) {
    let c = n[Math.floor((e * n.length) / o)],
      l = Dg(c, s),
      u = Math.max(0.5, l.y - 0.4),
      d = Math.min(16, Math.max(1, (u / a) ** 2)),
      f = Math.max(2, t.cellSize * 4.5, u * 2.2),
      p = new at(16766624, i * d, f, 2);
    (e < hw &&
      ((p.castShadow = !0),
      p.shadow.mapSize.set(512, 512),
      (p.shadow.bias = -0.004),
      (p.shadow.radius = 3),
      (p.shadow.camera.near = 0.2),
      (p.shadow.camera.far = f)),
      p.position.set(l.x, l.y - 0.4, l.z),
      (p.name = `proc_light_${e}`),
      (p.userData = { editorOnly: !0 }),
      r.add(p));
  }
  e.add(r);
}
var vw = ({
  material: e,
  geometry: t,
  version: n,
  playing: r = !1,
  onCompileError: i,
  className: a,
}) => {
  let o = (0, J.useRef)(null),
    s = (0, J.useRef)(null),
    c = (0, J.useRef)(null),
    l = (0, J.useRef)(null),
    u = (0, J.useRef)(null),
    d = (0, J.useRef)(null),
    f = (0, J.useRef)(null),
    p = (0, J.useRef)(0),
    m = (0, J.useRef)(!0),
    h = (0, J.useRef)(null),
    g = (0, J.useRef)(0),
    _ = (0, J.useRef)(null),
    v = (0, J.useRef)(null),
    y = (0, J.useRef)(-1),
    b = (0, J.useRef)(r),
    x = (0, J.useRef)(i);
  return (
    (b.current = r),
    (x.current = i),
    (0, J.useEffect)(() => {
      let t = o.current;
      if (!t) return;
      let n = new Ut({ antialias: !0, alpha: !0 });
      ((n.toneMapping = 4),
        (n.toneMappingExposure = 1),
        (n.outputColorSpace = Ft),
        n.setPixelRatio(Math.min(window.devicePixelRatio, 2)));
      let r = t.clientWidth || 240,
        i = t.clientHeight || 200;
      (n.setSize(r, i),
        t.appendChild(n.domElement),
        (s.current = n),
        (n.debug.onShaderError = (e, t, n, r) => {
          let i = e,
            a = i.getShaderInfoLog(n) ?? ``,
            o = i.getShaderInfoLog(r) ?? ``,
            s = [];
          (a.trim() &&
            s.push(
              `Vertex:
` + a.trim(),
            ),
            o.trim() &&
              s.push(
                `Fragment:
` + o.trim(),
              ),
            (_.current =
              s.join(`

`) || `Shader compile failed.`));
        }));
      let a = new ln();
      h.current = a;
      let S = new bt();
      c.current = S;
      let C = new tn(n),
        w = document.createElement(`canvas`);
      ((w.width = 16), (w.height = 16));
      let T = w.getContext(`2d`),
        E = T.createLinearGradient(0, 0, 0, 16);
      (E.addColorStop(0, `#9fb4cc`),
        E.addColorStop(1, `#2a3140`),
        (T.fillStyle = E),
        T.fillRect(0, 0, 16, 16));
      let D = new pt(w);
      D.mapping = 303;
      let O = C.fromEquirectangular(D);
      ((S.environment = O.texture), D.dispose(), C.dispose());
      let k = new ke(45, r / i, 0.1, 100);
      (k.position.set(0, 0, 2.6), (l.current = k));
      let A = new He(16777215, 2);
      (A.position.set(3, 4, 5), S.add(A));
      let j = new Qt(16777215, 0.4);
      S.add(j);
      let M = new hn(0.8, 48, 32);
      d.current = M;
      let N = e ? null : new Te();
      f.current = N;
      let P = new G(M, e ?? N);
      ((u.current = P), S.add(P));
      let F = () => {
          p.current = requestAnimationFrame(F);
          let e = a.getDelta();
          u.current && (u.current.rotation.y += 0.005);
          let t = null;
          if (b.current) {
            let n = u.current?.material?.uniforms?.time;
            if (n && typeof n.value == `number`) {
              g.current += e;
              let r = n.value;
              ((n.value = g.current),
                (t = () => {
                  n.value = r;
                }));
            }
          }
          let r = u.current?.material,
            i = r?.version ?? -1,
            o = !!r && i !== y.current;
          ((y.current = i),
            (_.current = null),
            n.render(S, k),
            t?.(),
            o &&
              _.current !== v.current &&
              ((v.current = _.current), x.current?.(_.current)));
        },
        ee = () => {
          p.current === 0 && (p.current = requestAnimationFrame(F));
        },
        I = () => {
          p.current !== 0 && (cancelAnimationFrame(p.current), (p.current = 0));
        },
        te = new IntersectionObserver(
          (e) => {
            let t = e[0]?.isIntersecting ?? !0;
            ((m.current = t), t ? ee() : I());
          },
          { threshold: 0 },
        );
      (te.observe(t), ee());
      let ne = new ResizeObserver(() => {
        let e = t.clientWidth || 240,
          r = t.clientHeight || 200;
        (n.setSize(e, r), (k.aspect = e / r), k.updateProjectionMatrix());
      });
      return (
        ne.observe(t),
        () => {
          (cancelAnimationFrame(p.current),
            te.disconnect(),
            ne.disconnect(),
            O.dispose(),
            M.dispose(),
            f.current?.dispose(),
            (f.current = null),
            A.dispose?.(),
            (S.environment = null),
            (n.debug.onShaderError = null),
            n.dispose(),
            n.domElement.parentNode &&
              n.domElement.parentNode.removeChild(n.domElement),
            (s.current = null),
            (c.current = null),
            (u.current = null),
            (h.current = null));
        }
      );
    }, []),
    (0, J.useEffect)(() => {
      let n = u.current;
      if (!n) return;
      let r = e != null && n.material !== e;
      e && (n.material = e);
      let i = t ?? d.current;
      (i && n.geometry !== i && (n.geometry = i),
        r && ((v.current = null), (y.current = -1), (g.current = 0)));
    }, [e, t, n]),
    (0, Y.jsx)(`div`, { ref: o, className: a })
  );
};
function yw(e) {
  let t = e.isShaderMaterial === !0 || e.isRawShaderMaterial === !0,
    n = Object.getPrototypeOf(e);
  return typeof e.onBeforeCompile == `function` &&
    e.onBeforeCompile !== n?.onBeforeCompile
    ? `locked`
    : t
      ? `shader`
      : e instanceof Te ||
          e instanceof _e ||
          e instanceof Ne ||
          e instanceof Fe ||
          e instanceof Be ||
          e instanceof zt ||
          e instanceof st
        ? `pbr`
        : `locked`;
}
var bw = [
  { value: `standard`, label: `Standard`, ctor: `MeshStandardMaterial` },
  { value: `physical`, label: `Physical`, ctor: `MeshPhysicalMaterial` },
  { value: `basic`, label: `Basic`, ctor: `MeshBasicMaterial` },
  { value: `lambert`, label: `Lambert`, ctor: `MeshLambertMaterial` },
];
function xw(e) {
  return e instanceof _e
    ? `physical`
    : e instanceof Te
      ? `standard`
      : e instanceof Ne
        ? `basic`
        : e instanceof Fe
          ? `lambert`
          : null;
}
