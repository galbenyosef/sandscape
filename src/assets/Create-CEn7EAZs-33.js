// Create-CEn7EAZs 33 — classname
// Lines 10416-10671 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var Gu = `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
  Ku = `min-h-[40px] rounded-lg border px-3 text-xs transition-colors`,
  qu = `border-white/20 bg-secondary text-foreground`,
  Ju = `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`,
  Yu = `flex gap-1 rounded-lg bg-secondary/30 p-1`,
  Xu = `min-h-[40px] flex-1 rounded-md px-3 text-xs font-medium transition-colors`,
  Zu = `bg-secondary text-foreground`,
  Qu = `text-muted-foreground hover:text-foreground`,
  $u = `rounded-lg border border-border bg-secondary/30 text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-white/25`,
  ed = `h-10 px-3 text-sm ${$u}`,
  td = `overflow-hidden rounded-lg border border-border`,
  nd = `rounded-lg border border-dashed border-border/60 bg-secondary/20`,
  rd = `ring-1 ring-white/40`,
  id = `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors`,
  ad = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function od(e, t = 8) {
  let n = e?.colorGroups,
    r = [
      ...(n?.primary ?? []),
      ...(n?.secondary ?? []),
      ...(n?.accent ?? []),
      ...(n?.neutral ?? []),
      ...(e?.colorPalette ?? []).map((e) => e?.hex ?? ``),
    ],
    i = new Set(),
    a = [];
  for (let e of r) {
    if (typeof e != `string`) continue;
    let n = e.trim();
    if (!ad.test(n)) continue;
    let r = n.toLowerCase();
    if (!i.has(r) && (i.add(r), a.push(n), a.length >= t)) break;
  }
  return a;
}
function sd(e, t = 3) {
  let n = new Set(),
    r = [];
  for (let i of e?.styleKeywords ?? []) {
    if (typeof i != `string`) continue;
    let e = i.trim();
    if (!e) continue;
    let a = e.toLowerCase();
    if (!n.has(a) && (n.add(a), r.push(e), r.length >= t)) break;
  }
  return r;
}
function cd(e) {
  let t = e?.visualStyle?.trim();
  if (t && (t.includes(` `) || t.length >= 6)) return t;
  let n = sd(e, 2);
  if (n.length > 0) return n.join(` · `);
  let r = e?.artStyleDescription?.trim();
  if (r) {
    let e = (r.match(/^[^.!?]+[.!?]?/)?.[0] ?? r).trim();
    return e.length > 90 ? `${e.slice(0, 87).trimEnd()}...` : e;
  }
  return t || null;
}
function ld({ styleGuide: e }) {
  let t = cd(e),
    n = od(e, 8),
    r = sd(e, 5).filter((e) => !t?.includes(e));
  return (0, Z.jsxs)(`div`, {
    children: [
      (0, Z.jsx)(`div`, { className: Gu, children: `Drawing in` }),
      (0, Z.jsx)(`div`, {
        className: `mt-1 text-sm text-foreground/90 leading-snug break-words`,
        children: t ?? `the style your Art Direction sets`,
      }),
      n.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex flex-wrap gap-1 mt-2.5`,
          children: n.map((e) =>
            (0, Z.jsx)(
              `span`,
              {
                className: `w-6 h-6 rounded-md border border-white/10 shrink-0`,
                style: { backgroundColor: e },
                title: e,
              },
              e,
            ),
          ),
        }),
      r.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex flex-wrap gap-1 mt-2`,
          children: r.map((e) =>
            (0, Z.jsx)(
              `span`,
              {
                className: `px-1.5 py-0.5 text-[10px] rounded bg-secondary text-muted-foreground max-w-full truncate`,
                title: e,
                children: e,
              },
              e,
            ),
          ),
        }),
    ],
  });
}
var ud = `Cut out to a transparent PNG`,
  dd = `Full image, no cut-out`,
  fd = [
    { type: `sprite_2d`, label: `Sprite`, icon: ws, hint: ud, cutOut: !0 },
    { type: `icon_2d`, label: `Icon`, icon: Is, hint: ud, cutOut: !0 },
    { type: `icon_set_2d`, label: `Icon set`, icon: ds, hint: ud, cutOut: !0 },
    { type: `hud_element_2d`, label: `HUD`, icon: os, hint: ud, cutOut: !0 },
    {
      type: `ui_element_2d`,
      label: `UI element`,
      icon: ete,
      hint: ud,
      cutOut: !0,
    },
    { type: `menu_design_2d`, label: `Menu`, icon: Cs, hint: dd, cutOut: !1 },
    {
      type: `background_2d`,
      label: `Background`,
      icon: ge,
      hint: dd,
      cutOut: !1,
    },
    {
      type: `texture_2d`,
      label: `Texture (tiles)`,
      icon: M,
      hint: `Seamless tile, no cut-out`,
      cutOut: !1,
    },
    {
      type: `particle_texture_2d`,
      label: `Particle`,
      icon: Nr,
      hint: ud,
      cutOut: !0,
    },
    {
      type: `sprite_sheet_2d`,
      label: `Sprite sheet`,
      icon: is,
      hint: ud,
      cutOut: !0,
    },
  ],
  pd = `sprite_2d`,
  md = new Map(fd.map((e) => [e.type, e]));
function hd(e) {
  return e ? md.get(e) : void 0;
}
function gd(e) {
  let t = hd(e);
  if (t) return t.label;
  if (!e) return `Other`;
  let n = e.replace(/_2d$/, ``).replace(/_/g, ` `).trim();
  return n ? n.charAt(0).toUpperCase() + n.slice(1) : `Other`;
}
function _d(e) {
  return hd(e)?.hint ?? ``;
}
function vd(e) {
  return hd(e)?.cutOut ?? !1;
}
function yd(e) {
  let t = new Map(),
    n = [];
  for (let r of e)
    if (r.asset_type && md.has(r.asset_type)) {
      let e = t.get(r.asset_type);
      e ? e.push(r) : t.set(r.asset_type, [r]);
    } else n.push(r);
  let r = [];
  for (let e of fd) {
    let n = t.get(e.type);
    n && n.length > 0 && r.push({ type: e.type, label: e.label, items: n });
  }
  return (
    n.length > 0 && r.push({ type: `other`, label: `Other`, items: n }),
    r
  );
}
function bd(e, t) {
  return e >= 2 && t >= e * 2;
}
function xd({
  name: e,
  assetType: t,
  imageUrl: n,
  showAlpha: r,
  isSelected: i,
  isGenerating: a,
  onSelect: o,
  checkerboard: s,
}) {
  let c = hd(t)?.icon,
    l = e?.replace(/_/g, ` `) || `Untitled`;
  return (0, Z.jsxs)(`button`, {
    type: `button`,
    onClick: o,
    "aria-pressed": i,
    className: `group text-left w-full min-w-0 focus:outline-none`,
    title: l,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${n ? `border` : `border border-dashed`} ${i ? `border-white/25 ${rd}` : n ? `border-border group-hover:border-white/20` : `border-border/50 group-hover:border-border`}`,
        children: [
          n
            ? (0, Z.jsx)(`img`, {
                src: n,
                alt: l,
                className: `w-full h-full object-contain`,
                style: r ? s : { backgroundColor: `#101014` },
              })
            : (0, Z.jsx)(`div`, {
                className: `w-full h-full bg-card flex items-center justify-center`,
                children: c
                  ? (0, Z.jsx)(c, {
                      className: `w-6 h-6 text-muted-foreground/30`,
                    })
                  : (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-muted-foreground/40`,
                      children: `?`,
                    }),
              }),
          a &&
            (0, Z.jsx)(`div`, {
              className: `absolute inset-0 bg-card/70 flex items-center justify-center`,
              children: (0, Z.jsx)(J, {
                className: `w-6 h-6 text-muted-foreground animate-spin`,
              }),
            }),
          !a &&
            (0, Z.jsx)(`span`, {
              className: `absolute top-1 right-1 w-2.5 h-2.5 rounded-full ring-2 ring-black/40 ${n ? `bg-green-500` : `bg-muted-foreground/40`}`,
              "aria-hidden": `true`,
            }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `mt-1 min-w-0`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `text-[11px] leading-tight truncate ${i ? `text-foreground` : `text-foreground/80`}`,
            children: l,
          }),
          (0, Z.jsx)(`div`, {
            className: `text-[9px] leading-tight text-muted-foreground/60 truncate`,
            children: gd(t),
          }),
        ],
      }),
    ],
  });
}
