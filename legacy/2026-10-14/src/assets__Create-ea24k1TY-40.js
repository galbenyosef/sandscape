// assets__Create-ea24k1TY 40 — classname
// Lines 12959-13265 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Gd = [`all`, `3d`, `2d`, `audio`, `voice`, `video`, `world`, `meta`],
  Kd = {
    all: `All`,
    "3d": `3D`,
    "2d": `2D`,
    audio: `Audio`,
    voice: `Voice`,
    video: `Video`,
    world: `World`,
    meta: `Meta`,
  };
function qd(e) {
  return `${e.asset_name} ${e.asset_type} ${e.description}`.toLowerCase();
}
function Jd(e, t) {
  let n = t.query.trim().toLowerCase(),
    r = [
      ...e.filter(
        (e) =>
          !(
            (t.group !== `all` && Ht[e.asset_type] !== t.group) ||
            (n && !qd(e).includes(n))
          ),
      ),
    ];
  return (
    t.sort === `name`
      ? r.sort((e, t) => (e.asset_name || ``).localeCompare(t.asset_name || ``))
      : r.sort((e, t) => (t.modified || 0) - (e.modified || 0)),
    r
  );
}
function Yd(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `_`)
    .replace(/^_+|_+$/g, ``)
    .replace(/_{2,}/g, `_`);
}
function Xd(e, t) {
  let n = Yd(e);
  return e.trim()
    ? n
      ? t.some((e) => Yd(e.asset_name || ``) === n)
        ? { slug: n, error: `An asset named "${n}" already exists` }
        : { slug: n, error: null }
      : { slug: n, error: `Name must contain a letter or number` }
    : { slug: n, error: `Name is required` };
}
function Zd(e) {
  switch (Ht[e.asset_type]) {
    case `3d`:
      return !!(e.model_3d_path || e.concept_art_path);
    case `2d`:
      return !!e.concept_art_path;
    case `audio`:
    case `voice`:
      return !!(e.audio_path || e.sfx_path);
    case `world`:
      return !!(e.splat_path || e.concept_art_path || e.model_3d_path);
    case `video`:
      return !!(e.rendered_video_path || e.video_path);
    default:
      return !1;
  }
}
function Qd(e, t) {
  return t.has(e.asset_name) ? `generating` : Zd(e) ? `done` : `pending`;
}
function $d(e) {
  if (!e || !(e.success === !1 || (!(`success` in e) && e.error))) return null;
  let t = e.error ?? e.error_code;
  return typeof t == `string` && t ? t : `the run was refused`;
}
function ef(e) {
  let t = We[e];
  return !!t && !t.requiresSource;
}
function tf() {
  let e = new Map();
  for (let t of Object.keys(We).filter(ef)) {
    let n = Ht[t];
    if (!n) continue;
    let r = e.get(n) ?? [];
    (r.push(t), e.set(n, r));
  }
  return [`3d`, `2d`, `audio`, `voice`, `video`, `world`, `meta`]
    .filter((t) => e.has(t))
    .map((t) => ({ group: t, types: e.get(t) }));
}
function nf(e) {
  return e === `character_3d`;
}
function rf(e) {
  let t = e.replace(/_/g, ` `).trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function af(e) {
  return e.split(`/`).pop() || e;
}
function of(e) {
  let t = [];
  for (let [n, r] of Object.entries(e))
    n.endsWith(`_path`) && typeof r == `string` && r && t.push(af(r));
  typeof e.lod_manifest == `string` &&
    e.lod_manifest &&
    t.push(af(e.lod_manifest));
  for (let n of e.lod_levels ?? []) n?.file && t.push(af(n.file));
  return [...new Set(t)];
}
var sf = {
  pending: {
    label: `Pending`,
    className: `bg-secondary/60 text-muted-foreground`,
  },
  generating: { label: `Generating`, className: `bg-primary/15 text-primary` },
  done: { label: `Done`, className: `bg-green-500/15 text-green-400` },
  outdated: { label: `Outdated`, className: `bg-amber-500/15 text-amber-400` },
};
function cf({
  asset: e,
  sessionDir: t,
  status: n,
  selected: r,
  view: i,
  onSelect: a,
}) {
  let [o, s] = (0, X.useState)(!1),
    c = jl(e.asset_type),
    l = c.icon,
    u = sf[n],
    d = e.concept_art_path,
    f = d && !o ? jr.getAssetUrl(t, d, { version: e.modified }) : null,
    p = n === `generating`,
    m = (0, Z.jsx)(`div`, {
      className: `absolute inset-0 flex items-center justify-center overflow-hidden bg-secondary/40 rounded`,
      style: { color: c.color },
      children: f
        ? (0, Z.jsx)(`img`, {
            src: f,
            alt: e.asset_name,
            className: `w-full h-full object-cover`,
            onError: () => s(!0),
          })
        : p
          ? (0, Z.jsx)(J, {
              className: `w-6 h-6 animate-spin`,
              style: { color: c.color },
            })
          : (0, Z.jsx)(E, {
              sessionDir: t,
              assetId: e.id || e.asset_name,
              thumbnailPath: e.thumbnail_path,
              thumbnailVersion: e.thumbnail_version,
              modelPath: e.model_3d_path,
              size: 96,
              fallback: (0, Z.jsx)(l, { className: `w-8 h-8 opacity-80` }),
            }),
    });
  return i === `list`
    ? (0, Z.jsxs)(`button`, {
        type: `button`,
        onClick: a,
        className: `w-full flex items-center gap-3 p-2 rounded-lg border text-left transition-colors ${r ? `border-primary/60 bg-primary/5` : `border-border bg-card hover:border-primary/30`}`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `relative w-12 h-12 shrink-0`,
            children: m,
          }),
          (0, Z.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [
              (0, Z.jsx)(`div`, {
                className: `text-sm font-medium text-foreground/90 truncate`,
                children: e.asset_name,
              }),
              (0, Z.jsx)(`div`, {
                className: `text-[11px] text-muted-foreground truncate`,
                children: rf(e.asset_type),
              }),
            ],
          }),
          (0, Z.jsx)(`span`, {
            className: `shrink-0 text-[10px] px-1.5 py-0.5 rounded ${u.className}`,
            children: u.label,
          }),
        ],
      })
    : (0, Z.jsxs)(`button`, {
        type: `button`,
        onClick: a,
        className: `group flex flex-col rounded-lg border p-2 text-left transition-colors ${r ? `border-primary/60 bg-primary/5` : `border-border bg-card hover:border-primary/30`}`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `relative aspect-square w-full mb-2`,
            children: m,
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between gap-1 mb-0.5`,
            children: [
              (0, Z.jsxs)(`span`, {
                className: `inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded`,
                style: { backgroundColor: `${c.color}22`, color: c.color },
                children: [
                  (0, Z.jsx)(l, { className: `w-2.5 h-2.5` }),
                  c.label,
                ],
              }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] px-1.5 py-0.5 rounded ${u.className}`,
                children: u.label,
              }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `text-sm font-medium text-foreground/90 truncate`,
            title: e.asset_name,
            children: e.asset_name,
          }),
          (0, Z.jsx)(`div`, {
            className: `text-[11px] text-muted-foreground truncate`,
            children: rf(e.asset_type),
          }),
        ],
      });
}
var lf = `px-1.5 py-0.5 text-[9px] leading-none rounded uppercase tracking-wide`;
function uf(e) {
  return e === `biped`
    ? `bg-secondary text-muted-foreground`
    : `bg-amber-400/10 text-amber-300/90`;
}
function df(e, t) {
  let n =
    e === `biped`
      ? `Biped — rigged for animation`
      : `${at[e]} — meshed, not rigged`;
  return t ? `${n}. Change the body plan.` : n;
}
function ff({
  asset: e,
  className: t = ``,
  onChange: n,
  disabled: r = !1,
  saving: i = !1,
}) {
  let a = Ge(e),
    o = uf(a);
  return n
    ? (0, Z.jsxs)(`span`, {
        className: `relative inline-flex items-center ${t}`,
        children: [
          (0, Z.jsx)(`select`, {
            value: a,
            disabled: r || i,
            "aria-label": `Body plan`,
            title: df(a, !0),
            onClick: (e) => e.stopPropagation(),
            onChange: (e) => n(e.target.value),
            className: `${lf} ${o} appearance-none pr-4 cursor-pointer border border-transparent
          hover:border-current/30 focus:outline-none focus:ring-1 focus:ring-primary/50
          disabled:cursor-default disabled:opacity-60`,
            children: Vt.map((e) =>
              (0, Z.jsx)(`option`, { value: e, children: at[e] }, e),
            ),
          }),
          i
            ? (0, Z.jsx)(J, {
                className: `pointer-events-none absolute right-0.5 w-2.5 h-2.5 animate-spin opacity-70`,
              })
            : (0, Z.jsx)(ti, {
                className: `pointer-events-none absolute right-0.5 w-2.5 h-2.5 opacity-60`,
              }),
        ],
      })
    : (0, Z.jsx)(`span`, {
        className: `${lf} ${o} ${t}`,
        title: df(a, !1),
        children: at[a],
      });
}
function pf(e, t) {
  if (e === `character_3d`) return Ot(t ?? void 0) ? `character` : `assets`;
  switch (Ht[e]) {
    case `3d`:
      return `assets`;
    case `2d`:
      return `image`;
    case `audio`:
    case `voice`:
      return `sound`;
    case `video`:
      return `video`;
    case `world`:
    case `meta`:
      return `level`;
    default:
      return;
  }
}
var mf = {
  character_creation: { label: `Create Character`, icon: Fo },
  model_3d: { label: `Generate 3D`, icon: I },
  collision: { label: `Collision`, icon: pe },
  lod: { label: `LOD`, icon: B },
  segment: { label: `Segment`, icon: Uo },
};
