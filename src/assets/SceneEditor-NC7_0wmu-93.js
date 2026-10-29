// SceneEditor-NC7_0wmu 93 — userdata
// Lines 44292-44634 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function FC(e) {
  let t = e.userData.blockout?.procKind || e.userData.procKind || `wall`,
    n = MC(e),
    r = xg(e) ?? `min-corner`,
    i = new G(Ig(t, n.w, n.h, n.d, r), Lg(t));
  return (
    i.position.copy(e.position),
    i.rotation.copy(e.rotation),
    i.scale.set(e.scale.x / n.w, e.scale.y / n.h, e.scale.z / n.d),
    (i.visible = e.visible),
    (i.castShadow = !0),
    (i.receiveShadow = !0),
    (i.name = `proc_${t}_${e.userData.cellId ?? `level`}`),
    (i.userData = {
      proc: !0,
      procKind: t,
      layoutPieceId: e.userData.layoutPieceId,
      cellId: e.userData.cellId,
      generatedBy: e.userData.generatedBy ?? `rooms`,
      dims: n,
      pivot: r,
      pivotAuto: e.userData.pivotAuto ?? r,
      locked: !!e.userData.locked,
      ...(e.userData.matOverride
        ? { matOverride: e.userData.matOverride }
        : {}),
    }),
    i
  );
}
function IC(e, t, n, r) {
  if (n.authoredUV !== !0 || !n.sourceSize) return;
  let i = e.userData.dims,
    a = My(t, n.canonicalAxis, i);
  if (!a || !i) return;
  let o = Ly({
    family: a,
    world: { w: e.scale.x, h: e.scale.y, d: e.scale.z },
    sourceSize: n.sourceSize,
    cellSize: r.cellSize,
    wallHeight: jC(t, r),
    slabTileWorld: vv(t, n.tileWorldSize),
    density: r.density,
  });
  e.updateMatrix();
  let s = xg(e) ?? `min-corner`;
  return { grid: o, centres: Vy(a, o, e.matrix, s) };
}
function LC(e, t, n) {
  let r = n.authoredUV === !0;
  return DC(e, t).filter((e) => e !== n && (e.authoredUV === !0) === r);
}
function RC(e, t, n, r, i, a, o) {
  let s = o.variation ?? 0.25;
  if (!(s > 0) || !i.length) return r;
  let c = ug(a, Hy(e, t.x, t.z, n, o.cellSize));
  return c() < s ? (OC(i, c()) ?? r) : r;
}
function zC(e, t, n, r, i, a, o, s) {
  let c = IC(e, t, r, s);
  if (!c) return;
  let { grid: l, centres: u } = c;
  if (l.nU * l.nV <= 1) return;
  let d = LC(a, n, r),
    f = [i],
    p = [],
    m = !1;
  for (let e = 0; e < u.length; e += 1) {
    let t = SC(RC(n, u[e], Math.floor(e / l.nU), r, d, o, s).file),
      i = f.indexOf(t);
    (i < 0 && ((i = f.length), f.push(t)), p.push(i), i !== 0 && (m = !0));
  }
  return {
    tiles: { n: [l.nU, l.nV], u: f, ...(m ? { i: p } : {}) },
    clamped: l.clamped === !0,
  };
}
function BC(e, t, n, r, i, a, o) {
  let s = IC(e, t, r, o);
  if (s)
    return s.grid.nU * s.grid.nV !== 1 || !s.centres.length
      ? void 0
      : RC(n, s.centres[0], 0, r, LC(i, n, r), a, o);
  if (!AC.has(t)) return;
  let c = LC(i, n, r);
  if (c.length) return RC(n, Dg(e), 0, r, c, a, o);
}
function VC(e, t, n, r, i, a) {
  let o = [],
    s = 0,
    c = 0,
    l = 0;
  for (let u of Mv(e)) {
    if (u.userData.assetId || u.userData.locked || (r && !r(u))) continue;
    let e = Av(u);
    if (!e) continue;
    let d = u.userData.procKind,
      f = u.userData.cellId,
      p = EC(
        t,
        d,
        n,
        e,
        kC.has(d) && f && f !== `level` ? f : void 0,
        f ? i?.cellKinds?.[f] : void 0,
      );
    if (!p) continue;
    let m = p.asset,
      h = p.category;
    if (a && h !== a) continue;
    let g = SC(m.file),
      _ = (e, t) =>
        NC(u, t, `kit:${e.file}`, e.label || e.file, {
          tileWorldSize: e.tileWorldSize,
          authoredUV: e.authoredUV,
          canonicalAxis: e.canonicalAxis,
          kitCategory: h,
        }),
      v = _(m, g),
      y = !!i && i.enabled !== !1,
      b = y ? zC(v, d, h, m, g, t, n, i) : void 0;
    if (b) ((v.userData.tiles = b.tiles), (s += 1), b.clamped && (c += 1));
    else if (y) {
      let e = BC(v, d, h, m, t, n, i);
      e &&
        e !== m &&
        (PC(v), (m = e), (g = SC(m.file)), (v = _(m, g)), (l += 1));
    }
    o.push({ blockout: u, wrapper: v, modelPath: g });
  }
  if (s || l) {
    let e = [
      ...(s ? [`tiled ${s}/${o.length} kit piece(s)`] : []),
      ...(l ? [`${l} single-tile piece(s) drew their own variant`] : []),
      ...(c
        ? [
            `${c} still stretched — the tile budget or the one-tile-per-cell rule capped them`,
          ]
        : []),
    ];
    console.info(`[procgen] ${e.join(`; `)}`);
  }
  return o;
}
function HC(e, t, n) {
  let r = Wv(
      e,
      t,
      n.map((e) => e.blockout),
    ),
    i = n.map((n) => new Bh(e, t, n.wrapper)),
    a = new Uh(e, t, [...r, ...i]);
  return ((a.name = `Replace with Assets (${n.length})`), a);
}
function UC(e, t, n) {
  let r = e.userData.kitCategory;
  if (r) return r === t;
  let i = e.userData.modelPath;
  if (i && n) {
    if (DC(n, t).some((e) => SC(e.file) === i)) return !0;
    if (n.assets.some((e) => SC(e.file) === i)) return !1;
  }
  return e.userData.procKind === t;
}
function WC(e, t, n) {
  let r = Mv(e).filter(
      (e) => e.userData.assetId && e.userData.modelPath && (!n || n(e)),
    ),
    i = Wv(e, t, r),
    a = r.map((n) => new Bh(e, t, FC(n))),
    o = new Uh(e, t, [...i, ...a]);
  return ((o.name = `Revert to Blockout`), o);
}
function GC(e) {
  return e.split(`/`).pop() || e;
}
var KC = (e) => `${O.API_BASE_URL}/api/sessions/${encodeURIComponent(e)}/kits`;
async function qC(e) {
  if (k()) return [];
  let t = GC(e);
  try {
    let e = await fetch(KC(t), { headers: await D() });
    if (!e.ok) return null;
    let n = await e.json();
    return Array.isArray(n?.kits) ? n.kits : [];
  } catch {
    return null;
  }
}
async function JC(e, t) {
  let n = GC(e),
    r = new FormData();
  r.append(`file`, t);
  let i = await D(),
    a = {},
    o = i.Authorization;
  o && (a.Authorization = o);
  let s = await fetch(`${KC(n)}/reference`, {
    method: `POST`,
    headers: a,
    body: r,
  });
  if (!s.ok) {
    let e = `Upload failed (${s.status})`;
    try {
      e = (await s.json())?.detail || e;
    } catch {}
    return { success: !1, error: e };
  }
  return s.json();
}
async function YC(e, t) {
  let n = null;
  try {
    n = await e.json();
  } catch {}
  if (e.ok) return n ?? { success: !0 };
  let r = XC(n?.detail ?? n?.error, `${t} (${e.status})`),
    i = /^([A-Z][A-Z_]+):\s*(.*)$/.exec(r);
  return i
    ? { success: !1, error_code: i[1], error: i[2] || r }
    : { success: !1, error: r };
}
function XC(e, t) {
  if (typeof e == `string` && e) return e;
  if (Array.isArray(e)) {
    let t = e
      .map((e) => {
        let t = Array.isArray(e?.loc)
            ? e.loc.filter((e) => e !== `body`).join(`.`)
            : ``,
          n = typeof e?.msg == `string` ? e.msg : ``;
        return t && n ? `${t}: ${n}` : n || t;
      })
      .filter(Boolean);
    if (t.length) return t.join(`; `);
  }
  if (e && typeof e == `object`) {
    let t = e.msg ?? e.message;
    if (typeof t == `string` && t) return t;
  }
  return t;
}
async function ZC(e, t) {
  let n = GC(e);
  return YC(
    await fetch(KC(n), {
      method: `POST`,
      headers: await D(),
      body: JSON.stringify(t),
    }),
    `Could not start kit generation`,
  );
}
async function QC(e, t, n) {
  let r = GC(e),
    i = await fetch(`${KC(r)}/import`, {
      method: `POST`,
      headers: await D(),
      body: JSON.stringify({ name: t, assets: n }),
    });
  if (!i.ok) {
    let e = `Import failed (${i.status})`;
    try {
      e = (await i.json())?.detail || e;
    } catch {}
    throw Error(e);
  }
  return i.json();
}
async function $C(e, t, n = {}) {
  let r = GC(e);
  return YC(
    await fetch(`${KC(r)}/${encodeURIComponent(t)}/regenerate`, {
      method: `POST`,
      headers: await D(),
      body: JSON.stringify(n),
    }),
    `Could not start the regeneration`,
  );
}
async function ew(e, t) {
  let n = GC(e),
    r = await fetch(`${KC(n)}/${encodeURIComponent(t)}/enable-tiling`, {
      method: `POST`,
      headers: await D(),
    });
  if (!r.ok) {
    let e = await r.text().catch(() => ``);
    throw Error(e || `Failed to enable tiling (${r.status})`);
  }
  return r.json();
}
async function tw(e, t) {
  let n = GC(e),
    r = await fetch(`${KC(n)}/${encodeURIComponent(t)}/split-regions`, {
      method: `POST`,
      headers: await D(),
    });
  if (!r.ok) {
    let e = await r.text().catch(() => ``);
    throw Error(e || `Failed to split kit regions (${r.status})`);
  }
  return r.json();
}
async function nw(e, t, n = {}) {
  let r = GC(e),
    i = await fetch(`${KC(r)}/${encodeURIComponent(t)}/variations`, {
      method: `POST`,
      headers: await D(),
      body: JSON.stringify(n),
    });
  if (!i.ok) {
    let e = await i.text().catch(() => ``),
      t = e;
    try {
      let n = JSON.parse(e);
      typeof n?.detail == `string` && (t = n.detail);
    } catch {}
    throw Error(t || `Failed to start variations (${i.status})`);
  }
  return i.json();
}
async function rw(e, t, n) {
  let r = GC(e);
  return (
    await fetch(`${KC(r)}/${encodeURIComponent(t)}`, {
      method: `PATCH`,
      headers: await D(),
      body: JSON.stringify({ name: n }),
    })
  ).json();
}
async function iw(e, t, n = ``) {
  let r = GC(e);
  return (
    await fetch(`${KC(r)}/${encodeURIComponent(t)}/duplicate`, {
      method: `POST`,
      headers: await D(),
      body: JSON.stringify({ name: n }),
    })
  ).json();
}
