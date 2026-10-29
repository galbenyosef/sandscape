// Create-ea24k1TY 296 — math
// Lines 104764-104980 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Rve(e, t) {
  let n = e.versioning?.[t];
  return (Array.isArray(n?.versions) ? n.versions : [])
    .map((e) => {
      if (typeof e == `string`) return e;
      let t = e.outputs;
      return t?.final_file || t?.raw_file || void 0;
    })
    .filter((e) => typeof e == `string` && e.length > 0);
}
var A9 = { brightness: 1, contrast: 1, saturation: 1 },
  j9 = {
    crop: null,
    rotate_deg: 0,
    flip_h: !1,
    flip_v: !1,
    adjustments: { ...A9 },
  },
  zve = [`brightness`, `contrast`, `saturation`],
  M9 = (e, t, n) => (Number.isFinite(e) ? Math.min(n, Math.max(t, e)) : t);
function N9(e) {
  return e.crop || e.rotate_deg !== 0 || e.flip_h || e.flip_v
    ? !1
    : zve.every((t) => Math.abs(e.adjustments[t] - 1) < 1e-6);
}
function Bve(e) {
  if (!e || typeof e != `object`) return { ...j9, adjustments: { ...A9 } };
  let t = e,
    n = null,
    r = t.crop;
  r &&
    typeof r == `object` &&
    (n = {
      x: M9(Number(r.x), 0, 1),
      y: M9(Number(r.y), 0, 1),
      width: M9(Number(r.width), 0.001, 1),
      height: M9(Number(r.height), 0.001, 1),
    });
  let i = Number(t.rotate_deg),
    a = i === 90 || i === 180 || i === 270 ? i : 0,
    o = t.adjustments || {},
    s = {
      brightness: M9(Number(o.brightness ?? 1), 0, 2),
      contrast: M9(Number(o.contrast ?? 1), 0, 2),
      saturation: M9(Number(o.saturation ?? 1), 0, 2),
    };
  return {
    crop: n,
    rotate_deg: a,
    flip_h: !!t.flip_h,
    flip_v: !!t.flip_v,
    adjustments: s,
  };
}
function Vve(e) {
  return e instanceof HTMLImageElement
    ? { w: e.naturalWidth || e.width, h: e.naturalHeight || e.height }
    : { w: e.width, h: e.height };
}
async function Hve(e, t) {
  let n = await fetch(e, { signal: t });
  if (!n.ok) throw Error(`Failed to load image (HTTP ${n.status})`);
  let r = await n.blob();
  return await createImageBitmap(r);
}
function P9(e, t) {
  let { w: n, h: r } = Vve(e),
    i = 0,
    a = 0,
    o = n,
    s = r;
  t.crop &&
    ((i = Math.min(n - 1, Math.max(0, Math.round(t.crop.x * n)))),
    (a = Math.min(r - 1, Math.max(0, Math.round(t.crop.y * r)))),
    (o = Math.max(1, Math.min(n - i, Math.round(t.crop.width * n)))),
    (s = Math.max(1, Math.min(r - a, Math.round(t.crop.height * r)))));
  let c = t.rotate_deg === 90 || t.rotate_deg === 270,
    l = c ? s : o,
    u = c ? o : s,
    d = document.createElement(`canvas`);
  ((d.width = Math.max(1, l)), (d.height = Math.max(1, u)));
  let f = d.getContext(`2d`);
  if (!f) return d;
  let p = t.adjustments;
  return (
    (f.filter = `brightness(${p.brightness}) contrast(${p.contrast}) saturate(${p.saturation})`),
    (f.imageSmoothingEnabled = !0),
    (f.imageSmoothingQuality = `high`),
    f.translate(l / 2, u / 2),
    f.scale(t.flip_h ? -1 : 1, t.flip_v ? -1 : 1),
    f.rotate((t.rotate_deg * Math.PI) / 180),
    f.drawImage(e, i, a, o, s, -o / 2, -s / 2, o, s),
    d
  );
}
function Uve(e, t) {
  let n = P9(e, t);
  return new Promise((e) => n.toBlob(e, `image/png`));
}
var F9 = (e, t, n) =>
  `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/${n}`;
function I9(e, t) {
  return {
    success: !1,
    error: Mr(e)
      ? `Network error: Unable to ${t}. Please check your connection.`
      : e instanceof Error
        ? e.message
        : `Failed to ${t}`,
  };
}
var L9 = new (class {
    async saveImageState(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(F9(e, t, `image-state`), {
            method: `PUT`,
            headers: r,
            body: JSON.stringify(n),
          });
        return i.ok
          ? await i.json()
          : { success: !1, error: `Server error: ${i.status}` };
      } catch (e) {
        return (
          console.error(`[ImageStateService] saveImageState failed:`, e),
          I9(e, `save the edits`)
        );
      }
    }
    async bakeImage(e, t, n, r) {
      try {
        let i = await jn(),
          a = new FormData();
        a.append(`state`, JSON.stringify(n));
        let o =
          r ??
          new Blob([new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])], {
            type: `image/png`,
          });
        a.append(`file`, o, `baked.png`);
        let s = await fetch(F9(e, t, `bake-image`), {
          method: `POST`,
          headers: i ? { Authorization: `Bearer ${i}` } : {},
          body: a,
        });
        return s.ok
          ? await s.json()
          : { success: !1, error: `Server error: ${s.status}` };
      } catch (e) {
        return (
          console.error(`[ImageStateService] bakeImage failed:`, e),
          I9(e, `bake the image`)
        );
      }
    }
    async aiEditImage(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(F9(e, t, `image-edit`), {
            method: `POST`,
            headers: r,
            body: JSON.stringify({ prompt: n }),
          });
        try {
          return await i.json();
        } catch {
          return { success: !1, error: `Server error: ${i.status}` };
        }
      } catch (e) {
        return (
          console.error(`[ImageStateService] aiEditImage failed:`, e),
          I9(e, `edit the image`)
        );
      }
    }
  })(),
  Wve = [
    { key: `brightness`, label: `Brightness` },
    { key: `contrast`, label: `Contrast` },
    { key: `saturation`, label: `Saturation` },
  ],
  R9 = `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
  z9 = `text-[10px] text-muted-foreground`,
  B9 = `bg-muted/30 border border-border/60 rounded px-1.5 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors disabled:opacity-40`,
  V9 = `p-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent text-muted-foreground hover:text-foreground`,
  H9 = `bg-primary/25 text-primary hover:bg-primary/30 hover:text-primary`,
  Gve = (e) => Math.min(2, Math.max(0, e));
function Kve({ value: e, disabled: t, onCommit: n, title: r }) {
  let i = e.toFixed(2),
    [a, o] = (0, X.useState)(i),
    [s, c] = (0, X.useState)(!1),
    [l, u] = (0, X.useState)(i);
  return (
    !s && l !== i && (u(i), o(i)),
    (0, Z.jsx)(`input`, {
      type: `number`,
      min: 0,
      max: 2,
      step: 0.01,
      value: a,
      disabled: t,
      title: r,
      onFocus: () => c(!0),
      onBlur: () => {
        (c(!1), o(i), u(i));
      },
      onChange: (e) => {
        let t = e.target.value;
        if ((o(t), t.trim() === ``)) return;
        let r = Number(t);
        Number.isFinite(r) && n(Gve(r));
      },
      className: p(B9, `w-14 text-right tabular-nums`),
    })
  );
}
