// Publish-Bh2itOnq 04 — children
// Lines 843-983 of readable/assets/Publish-Bh2itOnq.pretty.js (statement-aligned).
function J({ label: e, children: t }) {
  return (0, L.jsxs)(`div`, {
    className: `space-y-1`,
    children: [
      (0, L.jsx)(E, {
        className: `text-[10px] uppercase tracking-wide text-muted-foreground`,
        children: e,
      }),
      t,
    ],
  });
}
var et = 0.9;
function tt(e) {
  return new Promise((t, n) => {
    let r = URL.createObjectURL(e),
      i = new Image();
    ((i.onload = () => {
      (URL.revokeObjectURL(r), t(i));
    }),
      (i.onerror = () => {
        (URL.revokeObjectURL(r), n(Error(`Could not decode image`)));
      }),
      (i.src = r));
  });
}
async function nt(e, t = 1600) {
  if (e.type === `image/webp` || typeof document > `u`) return e;
  try {
    let n = await tt(e),
      r = n.naturalWidth || n.width,
      i = n.naturalHeight || n.height;
    if (!r || !i) return e;
    if (t && Math.max(r, i) > t) {
      let e = t / Math.max(r, i);
      ((r = Math.round(r * e)), (i = Math.round(i * e)));
    }
    let a = document.createElement(`canvas`);
    ((a.width = r), (a.height = i));
    let o = a.getContext(`2d`);
    if (!o) return e;
    ((o.imageSmoothingEnabled = !0),
      (o.imageSmoothingQuality = `high`),
      o.drawImage(n, 0, 0, r, i));
    let s = await new Promise((e) => a.toBlob(e, `image/webp`, et));
    if (!s || s.type !== `image/webp`) return e;
    let c = e.name.replace(/\.[^./\\]+$/, ``) || `thumbnail`;
    return new File([s], `${c}.webp`, { type: `image/webp` });
  } catch {
    return e;
  }
}
var rt = [
  `Action`,
  `Adventure`,
  `Puzzle`,
  `Strategy`,
  `RPG`,
  `Simulation`,
  `Racing`,
  `Survival`,
];
function it() {
  return {
    title: ``,
    tagline: ``,
    shortDescription: ``,
    detailedDescription: ``,
    genre: `Action`,
    tags: `AI generated, Sandscape`,
    visibility: `public`,
    platformCompat: `both`,
  };
}
var at = /^session_\d{8}_[0-9a-f]+$/i;
function ot(e) {
  let t = (e ?? ``).trim();
  return !t || at.test(t) ? `` : t;
}
function st(e) {
  return {
    title: e.title || e.name || ``,
    tagline: e.elevator_pitch || e.tagline || ``,
    shortDescription:
      e.elevator_pitch ||
      e.description ||
      e.player_experience ||
      e.unique_hook ||
      ``,
    detailedDescription:
      [
        e.elevator_pitch,
        e.setting_theme,
        e.player_experience,
        e.unique_hook,
        e.narrative_elements,
      ].filter(Boolean).join(`

`) || ``,
    genre: e.genre || e.genre_tags?.[0] || `Action`,
    tags:
      [...(e.genre_tags || []), e.art_style, e.perspective, e.target_audience]
        .filter(Boolean)
        .join(`, `) || `AI generated, Sandscape`,
    visibility: `public`,
    platformCompat: `both`,
  };
}
function ct(e, t) {
  return {
    title: t.title ?? e.title,
    tagline: t.tagline ?? e.tagline,
    shortDescription: t.short_description ?? e.shortDescription,
    detailedDescription: t.detailed_description ?? e.detailedDescription,
    genre: t.genre ?? e.genre,
    tags: t.tags?.length ? t.tags.join(`, `) : e.tags,
    visibility: t.visibility ?? e.visibility,
    platformCompat: t.platform_compat ?? e.platformCompat,
  };
}
function Y({ children: e }) {
  let { t } = T();
  return (0, L.jsxs)(`div`, {
    className: `relative`,
    title: t(`publish.comingSoon`, `Coming soon`),
    children: [
      (0, L.jsx)(`div`, {
        className: `opacity-40 pointer-events-none select-none`,
        children: e,
      }),
      (0, L.jsx)(`span`, {
        className: `absolute top-1 right-1 text-[9px] uppercase tracking-wider text-muted-foreground bg-secondary px-1.5 py-0.5 rounded`,
        children: t(`publish.soonBadge`, `Soon`),
      }),
    ],
  });
}
var lt = [`image/png`, `image/jpeg`, `image/webp`, `image/gif`],
  ut = 5 * 1024 * 1024,
  dt = [`video/mp4`, `video/quicktime`, `video/webm`],
  ft = 200 * 1024 * 1024;
