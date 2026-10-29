// Create-CEn7EAZs 292 — error
// Lines 102692-103023 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Gve(e, t, n) {
  let r = [];
  return (
    e.traverse((e) => {
      let i = e;
      if (!i.isSkinnedMesh) return;
      let a = t.get(e);
      if (!a || typeof a.meshes != `number`)
        throw Error(
          `skinBuffers: SkinnedMesh "${i.name || `(unnamed)`}" has no glTF association — pass gltf.parser.associations from the SAME load as this scene`,
        );
      let o = a.meshes,
        s = typeof a.primitives == `number` ? a.primitives : 0,
        c = i.name || `(unnamed)`,
        l = i.skeleton;
      if (!l) throw Error(`skinBuffers: SkinnedMesh "${c}" has no skeleton`);
      let u = i.geometry,
        d = u9(u, `skinIndex`, i.name),
        f = u9(u, `skinWeight`, i.name),
        p = d.count;
      if (
        (`data` in d ? d.data.array : d.array) instanceof Uint8Array &&
        l.bones.length > 255
      )
        throw Error(
          `skinBuffers: SkinnedMesh "${c}" — this rig has ${l.bones.length} bones but stores joint indices as 8-bit — not supported yet`,
        );
      let m = new Uint16Array(p * 4),
        h = new Float32Array(p * 4),
        g = 0;
      for (let e = 0; e < p; e++) {
        let t = e * 4;
        ((m[t] = d.getX(e)),
          (m[t + 1] = d.getY(e)),
          (m[t + 2] = d.getZ(e)),
          (m[t + 3] = d.getW(e)),
          (h[t] = f.getX(e)),
          (h[t + 1] = f.getY(e)),
          (h[t + 2] = f.getZ(e)),
          (h[t + 3] = f.getW(e)),
          Wve(m, h, t));
        let n = 0;
        for (let e = 0; e < 4; e++) n += h[t + e];
        n <= 0 && (g += 1);
      }
      if (g > 0)
        throw Error(
          `skinBuffers: SkinnedMesh "${c}" (mesh ${o} primitive ${s}) arrives with ${g} vertex(es) carrying no bone weight at all. The backend refuses any save containing one, so this rig has to be re-rigged before it can be painted.`,
        );
      r.push({
        key: `${o}:${s}`,
        meshIndex: o,
        primitiveIndex: s,
        vertexCount: p,
        rows: { vertexCount: p, joints: m, weights: h },
        mesh: i,
        originalMaterial: i.material,
        jointNames: d9(l.bones, t, n),
      });
    }),
    r.sort(
      (e, t) =>
        e.meshIndex - t.meshIndex || e.primitiveIndex - t.primitiveIndex,
    ),
    r
  );
}
function f9(e) {
  return e.jointNames;
}
function p9(e, t) {
  let n = e.mesh.geometry,
    r = u9(n, `skinIndex`, e.mesh.name),
    i = u9(n, `skinWeight`, e.mesh.name),
    { joints: a, weights: o } = e.rows,
    s = (e) => {
      let t = e * 4;
      (r.setXYZW(e, a[t], a[t + 1], a[t + 2], a[t + 3]),
        i.setXYZW(e, o[t], o[t + 1], o[t + 2], o[t + 3]));
    };
  if (t) for (let e = 0; e < t.length; e++) s(t[e]);
  else for (let t = 0; t < e.vertexCount; t++) s(t);
  ((r.needsUpdate = !0), (i.needsUpdate = !0));
}
var m9 = new WeakMap();
function h9(e) {
  let t = m9.get(e.mesh);
  return (
    t ||
      ((t = {
        material: new Ii({ vertexColors: !0 }),
        original: e.mesh.geometry.getAttribute(`color`) ?? null,
        heat: null,
      }),
      m9.set(e.mesh, t)),
    t
  );
}
var g9 = [
  [0, [0.08, 0.09, 0.12]],
  [0.25, [0.1, 0.35, 0.85]],
  [0.5, [0.15, 0.75, 0.35]],
  [0.75, [0.95, 0.85, 0.2]],
  [1, [0.9, 0.15, 0.12]],
];
function Kve(e) {
  let t = e < 0 ? 0 : e > 1 ? 1 : e;
  for (let e = 1; e < g9.length; e++) {
    let [n, r] = g9[e];
    if (t <= n) {
      let [i, a] = g9[e - 1],
        o = n === i ? 0 : (t - i) / (n - i);
      return [
        a[0] + (r[0] - a[0]) * o,
        a[1] + (r[1] - a[1]) * o,
        a[2] + (r[2] - a[2]) * o,
      ];
    }
  }
  return g9[g9.length - 1][1];
}
function _9(e, t) {
  let n = e.mesh.geometry,
    r = h9(e),
    i = r.heat;
  ((!i || i.count !== e.vertexCount) &&
    ((i = new ra(new Float32Array(e.vertexCount * 3), 3)), (r.heat = i)),
    n.getAttribute(`color`) !== i && n.setAttribute(`color`, i));
  let a = i.array;
  for (let n = 0; n < e.vertexCount; n++) {
    let [r, i, o] = Kve(c9(e.rows, n, t));
    ((a[n * 3] = r), (a[n * 3 + 1] = i), (a[n * 3 + 2] = o));
  }
  i.needsUpdate = !0;
}
function qve(e, t) {
  if (!t) {
    e.mesh.material = e.originalMaterial;
    return;
  }
  e.mesh.material = h9(e).material;
}
function v9(e) {
  let t = m9.get(e.mesh);
  ((e.mesh.material = e.originalMaterial),
    t &&
      (t.original
        ? e.mesh.geometry.setAttribute(`color`, t.original)
        : e.mesh.geometry.deleteAttribute(`color`),
      t.material.dispose(),
      m9.delete(e.mesh)));
}
function Jve(e, t) {
  let n = 0;
  for (let t of e) n += t.vertexCount * 4 * 6;
  let r = new ArrayBuffer(n),
    i = new DataView(r),
    a = 0;
  for (let t of e) {
    let e = t.vertexCount * 4;
    for (let n = 0; n < e; n++)
      (i.setUint16(a, t.rows.joints[n], !0), (a += 2));
    for (let n = 0; n < e; n++)
      (i.setFloat32(a, t.rows.weights[n], !0), (a += 4));
  }
  let o = e.length > 0 ? f9(e[0]) : [];
  for (let t = 1; t < e.length; t++) {
    let n = f9(e[t]);
    if (n.length !== o.length || n.some((e, t) => e !== o[t]))
      throw Error(
        `skinBuffers: primitive ${e[t].key} uses a different skeleton than ${e[0].key} — a single joint_names cannot describe both`,
      );
  }
  return {
    blob: new Blob([r], { type: `application/octet-stream` }),
    meta: {
      generation_id: t,
      joint_names: o,
      primitives: e.map((e) => ({
        mesh: e.meshIndex,
        primitive: e.primitiveIndex,
        vertex_count: e.vertexCount,
      })),
    },
  };
}
function Yve(e) {
  return e.suppressed
    ? { kind: `skip`, reason: `suppressed` }
    : e.dirtyTick === e.savedTick
      ? { kind: `skip`, reason: `clean` }
      : e.context
        ? e.primitiveCount === 0
          ? {
              kind: `error`,
              message: `Unsaved weight edits could not be written — the skin was unloaded before the save ran.`,
            }
          : { kind: `save`, context: e.context, tick: e.dirtyTick }
        : { kind: `skip`, reason: `no-context` };
}
function Xve(e, t, n) {
  return e === t ? n : e;
}
function Zve(e) {
  return async function (t, n) {
    let r = (n) => {
      e.owns(t) && n();
    };
    r(() => e.setStatus(`saving`, null));
    let i;
    try {
      i = await e.save(n.sessionId, t, n.blob, n.meta);
    } catch (t) {
      (e.log(`save failed:`, t),
        (i = {
          success: !1,
          error: t instanceof Error ? t.message : `Save failed`,
        }));
    }
    if (e.hasPending(t)) return;
    if (i.success) {
      let t = i.version,
        n = i.versions,
        a = t === void 0 ? `Saved` : `Saved v${t}`;
      r(() => {
        (n && e.setVersionState(t ?? null, n), e.setStatus(`saved`, a));
      });
      return;
    }
    e.onRefused(t, n);
    let a = [i.error, i.error_code && `(${i.error_code})`]
      .filter(Boolean)
      .join(` `);
    (r(() => e.setStatus(`error`, a || `Could not save skin weights`)),
      e.isMounted() &&
        e.toast(
          `Skin weights were not saved`,
          a || `The server rejected the write. Paint again to retry.`,
        ));
  };
}
async function y9(e) {
  let t = null;
  try {
    t = await e.json();
  } catch {}
  let n = t ?? {},
    r = n.detail,
    i = r && typeof r == `object` && !Array.isArray(r) ? r : null,
    a = (e) => (typeof e == `string` ? e.trim() : ``),
    o = a(i?.error) || a(r) || a(n.error),
    s = i?.error_code ?? n.error_code,
    c = typeof s == `string` ? s : void 0;
  if (e.status === 402 && o && !c) {
    let e = o.indexOf(`: `);
    if (e > 0) return { error: o.slice(e + 2), error_code: o.slice(0, e) };
  }
  return {
    error: o || `Server error (${e.status})`,
    ...(c ? { error_code: c } : {}),
  };
}
function b9(e, t) {
  return {
    success: !1,
    error: yr(e) ? `Network error: ${t}` : e instanceof Error ? e.message : t,
  };
}
function x9() {
  let e = new Uint8Array(6),
    t = globalThis.crypto;
  if (t?.getRandomValues) t.getRandomValues(e);
  else
    for (let t = 0; t < e.length; t++) e[t] = Math.floor(Math.random() * 256);
  let n = ``;
  for (let t = 0; t < e.length; t++) n += e[t].toString(16).padStart(2, `0`);
  return n;
}
async function Qve(e, t, n, r) {
  try {
    let i = await vn(),
      a = new FormData();
    (a.append(`weights`, n, `skin_weights_${r.generation_id}.bin`),
      a.append(`meta`, JSON.stringify(r)));
    let o = await fetch(
      `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/skin-weights`,
      {
        method: `POST`,
        headers: i ? { Authorization: `Bearer ${i}` } : {},
        body: a,
      },
    );
    if (!o.ok) {
      let e = await y9(o);
      return (
        console.error(`[skinWeightsService] saveSkinWeights failed:`, e.error),
        { success: !1, ...e }
      );
    }
    return await o.json();
  } catch (e) {
    return (
      console.error(`[skinWeightsService] Error saving skin weights:`, e),
      b9(e, `Failed to save skin weights`)
    );
  }
}
async function $ve(e, t, n) {
  try {
    let r = await _n(),
      i = await fetch(
        `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/skin-weights/restore`,
        { method: `POST`, headers: r, body: JSON.stringify({ version: n }) },
      );
    if (!i.ok) {
      let e = await y9(i);
      return (
        console.error(
          `[skinWeightsService] restoreSkinWeights failed:`,
          e.error,
        ),
        { success: !1, ...e }
      );
    }
    return await i.json();
  } catch (e) {
    return (
      console.error(`[skinWeightsService] Error restoring skin weights:`, e),
      b9(e, `Failed to restore skin weights`)
    );
  }
}
