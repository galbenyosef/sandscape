// SceneEditor-NC7_0wmu 92 — math
// Lines 43953-44291 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function uC(e) {
  lC.set(e.id, e);
}
function dC(e) {
  return lC.get(e);
}
function fC(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0;
  for (let a of e)
    ((t = Math.min(t, a.x)),
      (n = Math.min(n, a.z)),
      (r = Math.max(r, a.x + a.w)),
      (i = Math.max(i, a.z + a.d)));
  return { x: t, z: n, w: r - t, d: i - n };
}
function pC(e) {
  return { cx: Math.floor(e.x + e.w / 2), cz: Math.floor(e.z + e.d / 2) };
}
function mC(e, t, n) {
  let r = Math.max(0, e.x),
    i = Math.max(0, e.z),
    a = Math.min(t, e.x + e.w),
    o = Math.min(n, e.z + e.d);
  return { x: r, z: i, w: Math.max(0, a - r), d: Math.max(0, o - i) };
}
function hC(e, t) {
  let n = Math.min(t.arenaMin, t.arenaMax),
    r = Math.max(t.arenaMin, t.arenaMax),
    i = () => ({
      wMin: n,
      wMax: r,
      dMin: n,
      dMax: r,
      kind: `arena`,
      margin: t.arenaSpacing,
    }),
    a = (e) => ({
      wMin: 2,
      wMax: e,
      dMin: 2,
      dMax: e,
      kind: `room`,
      margin: 1,
    });
  if (e === `arena`)
    return Array.from({ length: Math.max(1, t.arenaCount) }, i);
  if (e === `corridor`)
    return Array.from({ length: Math.max(2, t.roomCount) }, () => a(4));
  let o = Array.from({ length: Math.max(1, t.arenaCount) }, i),
    s = Array.from({ length: Math.max(2, Math.round(t.roomCount / 2)) }, () =>
      a(5),
    );
  return o.concat(s);
}
function gC(e) {
  let t = e.length;
  if (t < 2) return [];
  let n = Array(t).fill(!1);
  n[0] = !0;
  let r = [];
  for (let i = 1; i < t; i++) {
    let i = -1,
      a = -1,
      o = 1 / 0;
    for (let r = 0; r < t; r++)
      if (n[r])
        for (let s = 0; s < t; s++) {
          if (n[s]) continue;
          let t = Math.abs(e[r].cx - e[s].cx) + Math.abs(e[r].cz - e[s].cz);
          t < o && ((o = t), (i = r), (a = s));
        }
    a >= 0 && ((n[a] = !0), r.push([i, a]));
  }
  return r;
}
function _C(e, t, n, r, i, a, o, s) {
  let c = Math.floor(i / 2),
    l = (e, t, n) => {
      let r = Math.min(e, t),
        a = Math.max(e, t);
      return { x: r, z: n - c, w: a - r + 1, d: i };
    },
    u = (e, t, n) => {
      let r = Math.min(e, t),
        a = Math.max(e, t);
      return { x: n - c, z: r, w: i, d: a - r + 1 };
    };
  return (fg(a, 0.5) ? [l(e, n, t), u(t, r, n)] : [u(t, r, e), l(e, n, r)])
    .map((e) => mC(e, o, s))
    .filter((e) => e.w > 0 && e.d > 0);
}
function vC(e, t, n, r, i, a, o) {
  let s = Math.floor(i / 2),
    c;
  c =
    n === 0
      ? { x: e, z: t - s, w: r, d: i }
      : n === 1
        ? { x: e - r + 1, z: t - s, w: r, d: i }
        : n === 2
          ? { x: e - s, z: t, w: i, d: r }
          : { x: e - s, z: t - r + 1, w: i, d: r };
  let l = mC(c, a, o);
  return l.w > 0 && l.d > 0 ? [l] : [];
}
function yC(e, t, n, r) {
  let i = lg(e),
    a = Math.max(8, Math.floor(n.gridWidth)),
    o = Math.max(8, Math.floor(n.gridDepth)),
    s = Array(a * o).fill(!1),
    c = (e, t) => e + t * a,
    l = (e, t) => e >= 0 && e < a && t >= 0 && t < o,
    u = (e) => {
      for (let t = e.z; t < e.z + e.d; t++)
        for (let n = e.x; n < e.x + e.w; n++) l(n, t) && (s[c(n, t)] = !0);
    },
    d = (e, t) => {
      if (e.x < 1 || e.z < 1 || e.x + e.w > a - 1 || e.z + e.d > o - 1)
        return !1;
      for (let n = e.z - t; n < e.z + e.d + t; n++)
        for (let r = e.x - t; r < e.x + e.w + t; r++)
          if (l(r, n) && s[c(r, n)]) return !1;
      return !0;
    },
    f = [],
    p = [],
    m = r?.lockedCells ?? [];
  for (let e of m)
    (e.rects.forEach(u),
      f.push(e),
      e.kind !== `corridor` && p.push({ cell: e, ...pC(fC(e.rects)) }));
  let h = f.length,
    g = hC(t, n);
  for (let e of g)
    for (let t = 0; t < 40; t++) {
      let t = Math.min(dg(i, e.wMin, e.wMax), a - 2),
        r = Math.min(dg(i, e.dMin, e.dMax), o - 2),
        s = {
          x: dg(i, 1, Math.max(1, a - 1 - t)),
          z: dg(i, 1, Math.max(1, o - 1 - r)),
          w: t,
          d: r,
        };
      if (d(s, e.margin)) {
        u(s);
        let t = {
          id: `cell_${h++}`,
          kind: e.kind,
          rects: [s],
          height: Xi(n, e.kind),
        };
        (f.push(t), p.push({ cell: t, ...pC(s) }));
        break;
      }
    }
  let _ = [],
    v = 0;
  if (p.length >= 2) {
    let e = gC(p),
      r = (t, n) =>
        e.some((e) => (e[0] === t && e[1] === n) || (e[0] === n && e[1] === t)),
      s =
        t === `corridor`
          ? Math.max(n.loopChance, 0.25)
          : t === `hybrid`
            ? n.connectionComplexity * 0.5
            : n.loopChance,
      c = e.slice();
    for (let e = 0; e < p.length; e++)
      for (let t = e + 1; t < p.length; t++)
        !r(e, t) && fg(i, s) && c.push([e, t]);
    for (let [e, t] of c) {
      let r = p[e],
        s = p[t],
        c = _C(r.cx, r.cz, s.cx, s.cz, n.corridorWidth, i, a, o);
      c.length &&
        (c.forEach(u),
        f.push({
          id: `cor_${v++}`,
          kind: `corridor`,
          rects: c,
          height: n.wallHeight,
        }),
        _.push({ from: r.cell.id, to: s.cell.id, type: `corridor` }));
    }
    if (t !== `arena`) {
      let e = t === `corridor` ? n.branches : Math.round(n.branches * 0.5);
      for (let t = 0; t < e; t++) {
        let e = p[dg(i, 0, p.length - 1)],
          t = dg(
            i,
            Math.min(n.corridorLengthMin, n.corridorLengthMax),
            Math.max(n.corridorLengthMin, n.corridorLengthMax),
          ),
          r = dg(i, 0, 3),
          s = vC(e.cx, e.cz, r, t, n.corridorWidth, a, o);
        s.length &&
          (s.forEach(u),
          f.push({
            id: `cor_${v++}`,
            kind: `corridor`,
            rects: s,
            height: n.wallHeight,
          }));
      }
    }
  }
  return {
    version: 1,
    generator: `rooms`,
    mode: t,
    seed: e,
    seedLocked: !1,
    params: { ...n },
    cells: f,
    connections: _,
  };
}
uC({ id: `rooms`, label: `Rooms & Corridors`, generate: yC });
var bC = `/procgen-kit/`,
  xC = { version: 1, packs: [] };
function SC(e) {
  return e.startsWith(`/`) || /^https?:/.test(e) ? e : bC + e;
}
async function CC() {
  try {
    let e = await fetch(`/procgen-kit/manifest.json`, { cache: `no-cache` });
    if (!e.ok) return xC;
    let t = await e.json();
    return !t || !Array.isArray(t.packs)
      ? xC
      : { version: t.version ?? 1, packs: t.packs };
  } catch {
    return xC;
  }
}
function wC(e, t) {
  return t ? (e.packs.find((e) => e.id === t) ?? null) : (e.packs[0] ?? null);
}
function TC(e, t) {
  return e === `floor` || e === `ceiling`
    ? t === `arena`
      ? [`arena_${e}`, e, `corridor_${e}`]
      : t === `corridor`
        ? [`corridor_${e}`, e, `arena_${e}`]
        : [e, `corridor_${e}`, `arena_${e}`]
    : e === `arena_wall` || e === `corridor_wall`
      ? [e, `wall`]
      : e === `wall`
        ? [`wall`, `corridor_wall`]
        : [e];
}
function EC(e, t, n, r, i, a) {
  for (let o of TC(t, a)) {
    let t = DC(e, o);
    if (!t.length) continue;
    let a = OC(t, ug(n, `asset:${o}:${i ?? r}`)());
    if (a) return { asset: a, category: o };
  }
  return null;
}
function DC(e, t) {
  return e ? e.assets.filter((e) => e.category === t) : [];
}
function OC(e, t) {
  if (!e.length) return null;
  let n = e.map((e) => (e.weight && e.weight > 0 ? e.weight : 1)),
    r = t * n.reduce((e, t) => e + t, 0);
  for (let t = 0; t < e.length; t++) if (((r -= n[t]), r < 0)) return e[t];
  return e[e.length - 1];
}
var kC = new Set([
    `wall`,
    `corridor_wall`,
    `arena_wall`,
    `floor`,
    `ceiling`,
    `trim`,
    `beam`,
    `column`,
    `pillar`,
    `door`,
  ]),
  AC = new Set([`wall`, `corridor_wall`, `arena_wall`, `floor`, `ceiling`]);
function jC(e, t) {
  return e === `arena_wall`
    ? t.wallHeight * Math.max(1, t.arenaHeightMult ?? 1)
    : t.wallHeight;
}
function MC(e) {
  return e.userData.blockout?.dims || e.userData.dims || { w: 1, h: 1, d: 1 };
}
function NC(e, t, n, r, i = {}) {
  let a = MC(e),
    o = xg(e) ?? `min-corner`,
    s = new Se();
  (s.position.copy(e.position),
    s.rotation.copy(e.rotation),
    s.scale.set(a.w * e.scale.x, a.h * e.scale.y, a.d * e.scale.z),
    (s.visible = e.visible),
    (s.name = e.name),
    (s.userData = {
      ...e.userData,
      blockout: { procKind: e.userData.procKind, dims: a },
      assetId: n,
      assetName: r,
      modelPath: t,
      isAssetReference: !0,
      pivot: o,
      ...(i.tileWorldSize == null ? {} : { tileWorldSize: i.tileWorldSize }),
      ...(i.authoredUV ? { authoredUV: !0 } : {}),
      ...(i.canonicalAxis ? { canonicalAxis: i.canonicalAxis } : {}),
      ...(i.tiles ? { tiles: i.tiles } : {}),
      ...(i.kitCategory ? { kitCategory: i.kitCategory } : {}),
    }));
  let c = new Lt(1, 1, 1),
    l = Tg(o);
  c.translate(l.x, l.y, l.z);
  let u = new G(c, new Te({ color: 10132122, roughness: 0.92 }));
  return (
    (u.castShadow = !0),
    (u.receiveShadow = !0),
    (u.userData = { editorOnly: !0, editorAssetPlaceholder: !0 }),
    s.add(u),
    s
  );
}
function PC(e) {
  for (let t of e.children) {
    if (!t.userData?.editorAssetPlaceholder) continue;
    let e = t;
    e.geometry?.dispose();
    let n = e.material;
    Array.isArray(n) ? n.forEach((e) => e.dispose()) : n?.dispose();
  }
}
