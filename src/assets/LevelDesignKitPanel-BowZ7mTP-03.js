// LevelDesignKitPanel-BowZ7mTP 03 — prockind
// Lines 638-738 of readable/assets/LevelDesignKitPanel-BowZ7mTP.pretty.js (statement-aligned).
var G = [
  { label: `common`, value: 1 },
  { label: `uncommon`, value: 0.35 },
  { label: `rare`, value: 0.1 },
];
function xt(e) {
  let t = G[0].value;
  for (let n of G) Math.abs(n.value - e) < Math.abs(t - e) && (t = n.value);
  return t;
}
function St(e, t, n = 0.5) {
  let r = e.map((e) => (e > 0 ? e : 1)),
    i = r.reduce((e, t) => e + t, 0);
  if (!(i > 0) || t < 0 || t >= r.length) return 0;
  if (r.length === 1) return 1;
  let a = Math.min(1, Math.max(0, n)),
    o = 0;
  for (let e = 0; e < r.length; e += 1) {
    let n = r[e] / i;
    if (e === t) o += n * (1 - a);
    else {
      let s = i - r[e];
      s > 0 && (o += n * a * (r[t] / s));
    }
  }
  return o;
}
function K(e) {
  return /^kits\//i.test(e);
}
var q = /\.(glb|gltf)(\?.*)?$/i,
  J = /\/api\/game\/[^/]+\/(.+)$/i;
function Ct(e) {
  if (typeof e != `string` || !e.trim()) return null;
  let t = e.trim(),
    n = J.exec(t);
  if (n) {
    let e = n[1].split(`?`)[0];
    try {
      e = decodeURIComponent(e);
    } catch {}
    t = e.replace(/^generated_assets\//, ``);
  } else t = v(t).split(`?`)[0];
  return !q.test(t) || t.startsWith(`/`) || t.includes(`..`) || t.includes(`\0`)
    ? null
    : t;
}
function wt(e) {
  let t = e?.children;
  return Array.isArray(t) ? t : [];
}
function Tt(e) {
  let t = e?.object;
  if (!t) return [];
  let n = new Map(),
    r = wt(t);
  for (; r.length;) {
    let e = r.pop();
    r.push(...wt(e));
    let t = e?.userData;
    if (!t || typeof t != `object` || t.editorOnly || !t.isAssetReference)
      continue;
    let i = Ct(String(t.modelPath ?? ``));
    if (!i) continue;
    let a = n.get(i);
    if (a) {
      ((a.count += 1),
        !a.procKind &&
          typeof t.procKind == `string` &&
          (a.procKind = t.procKind));
      continue;
    }
    let o = i.split(`/`).pop() || i,
      s = typeof t.assetName == `string` ? t.assetName : ``;
    n.set(i, {
      source: i,
      label: o.replace(/\.(glb|gltf)$/i, ``),
      assetName: s && s !== o ? s : void 0,
      procKind: typeof t.procKind == `string` ? t.procKind : void 0,
      count: 1,
      alreadyKitArt: K(i),
    });
  }
  return [...n.values()].sort(
    (e, t) => t.count - e.count || e.source.localeCompare(t.source),
  );
}
var Et = 1.7;
function Dt(e) {
  e.traverse((e) => {
    let t = e;
    if (t.isMesh) {
      t.geometry?.dispose();
      for (let e of Array.isArray(t.material) ? t.material : [t.material])
        if (e) {
          for (let t of Object.values(e)) t?.isTexture && t.dispose();
          e.dispose();
        }
    }
  });
}
