// assets__Create-ea24k1TY 254 — math
// Lines 85516-85864 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function u3(e) {
  return `${e}_${typeof crypto < `u` && `randomUUID` in crypto ? crypto.randomUUID().slice(0, 8) : Math.random().toString(36).slice(2, 10)}`;
}
var d3 = 3600,
  f3 = 0.05,
  p3 = 0.05,
  $pe = 0.05,
  eme = [`x`, `y`, `scale`, `rotation`, `opacity`],
  m3 = {
    x: `Position X`,
    y: `Position Y`,
    scale: `Scale`,
    rotation: `Rotation`,
    opacity: `Opacity`,
  },
  tme = [
    { label: `1080p`, width: 1920, height: 1080, hint: `16:9 · YouTube` },
    { label: `4K`, width: 3840, height: 2160, hint: `16:9 · UHD` },
    { label: `720p`, width: 1280, height: 720, hint: `16:9` },
    {
      label: `Vertical`,
      width: 1080,
      height: 1920,
      hint: `9:16 · Reels / TikTok / Shorts`,
    },
    { label: `Square`, width: 1080, height: 1080, hint: `1:1 · Instagram` },
    { label: `Portrait`, width: 1080, height: 1350, hint: `4:5 · Instagram` },
  ],
  nme = [
    `Hanken Grotesk`,
    `Arial`,
    `Georgia`,
    `Times New Roman`,
    `Courier New`,
    `Impact`,
  ];
function h3(e) {
  return { value: e };
}
function rme(e, t) {
  return {
    x: h3(e),
    y: h3(t),
    scale: h3(100),
    rotation: h3(0),
    opacity: h3(100),
  };
}
function g3() {
  return { gain: 1, muted: !1 };
}
function _3(e) {
  return {
    content: e,
    font_family: `Hanken Grotesk`,
    font_size_px: 96,
    color: `#ffffff`,
    weight: `bold`,
    italic: !1,
    align: `center`,
  };
}
function v3(e = `Untitled composition`) {
  return {
    schema_version: 1,
    name: e,
    settings: {
      width: 1920,
      height: 1080,
      fps: 30,
      background: `#000000`,
      duration_mode: `auto`,
      fixed_duration_sec: 30,
    },
    tracks: [],
    media: [],
  };
}
function y3(e) {
  return e.start_sec + e.duration_sec;
}
function b3(e) {
  if (e.settings.duration_mode === `fixed`) {
    let t = e.settings.fixed_duration_sec;
    return Math.max(5, Number.isFinite(t) ? Math.min(d3, t) : 5);
  }
  let t = 0;
  for (let n of e.tracks) for (let e of n.clips) t = Math.max(t, y3(e));
  return Math.max(5, t);
}
function x3(e, t) {
  return t - (e.start_sec - e.in_sec);
}
function ime(e, t) {
  let n = e.start_sec,
    r = y3(e),
    i = e.fade_in_sec ?? 0,
    a = e.fade_out_sec ?? 0,
    o = i > 0 ? Math.min(r, n + i) : n,
    s = a > 0 ? Math.max(n, r - a) : r;
  if (i > 0 && a > 0 && o > s) {
    let e = Math.max(n, Math.min(r, (o + s) / 2));
    ((o = e), (s = e));
  }
  let c = 1;
  if (i > 0) {
    let e = o - n,
      r = e > 0 ? (t - n) / e : t < o ? 0 : 1;
    r < 1 && (c = Math.min(c, Math.max(0, r)));
  }
  if (a > 0) {
    let e = r - s,
      n = e > 0 ? (r - t) / e : t > s ? 0 : 1;
    n < 1 && (c = Math.min(c, Math.max(0, n)));
  }
  return c;
}
function S3(e) {
  let t = 1 - $pe,
    n = (e) =>
      typeof e == `number` && Number.isFinite(e)
        ? Math.max(0, Math.min(t, e))
        : 0,
    r = n(e?.left),
    i = n(e?.right),
    a = n(e?.top),
    o = n(e?.bottom);
  return (
    r + i > t && (r >= i ? (r = t - i) : (i = t - r)),
    a + o > t && (a >= o ? (a = t - o) : (o = t - a)),
    { left: r, top: a, right: i, bottom: o }
  );
}
function C3(e) {
  return !!e && (e.left > 0 || e.right > 0 || e.top > 0 || e.bottom > 0);
}
function ame(e, t, n) {
  let r = n?.left ?? 0,
    i = n?.top ?? 0,
    a = n?.right ?? 0,
    o = n?.bottom ?? 0;
  return {
    left: e * (r - 0.5),
    right: e * (0.5 - a),
    top: t * (i - 0.5),
    bottom: t * (0.5 - o),
  };
}
function w3(e, t) {
  return e.in_sec + (t - e.start_sec);
}
function T3(e, t) {
  return t >= e.start_sec && t < y3(e);
}
function E3(e, t) {
  let n = e.keyframes;
  if (!n || n.length === 0) return e.value;
  if (n.length === 1 || t <= n[0].time_sec) return n[0].value;
  let r = n[n.length - 1];
  if (t >= r.time_sec) return r.value;
  for (let e = 0; e < n.length - 1; e++) {
    let r = n[e],
      i = n[e + 1];
    if (t >= r.time_sec && t <= i.time_sec) {
      let e = i.time_sec - r.time_sec;
      if (e <= 0) return i.value;
      let n = (t - r.time_sec) / e;
      return r.value + (i.value - r.value) * n;
    }
  }
  return r.value;
}
function D3(e, t, n) {
  let r = e.transform;
  return r ? E3(r[t], x3(e, n)) : t === `scale` || t === `opacity` ? 100 : 0;
}
function O3(e) {
  return e === `video` || e === `image` || e === `text`;
}
function k3(e) {
  let t = [...e].sort((e, t) => e.start_sec - t.start_sec),
    n = [],
    r = null;
  for (let e of t) {
    if (!r) {
      r = e;
      continue;
    }
    let t = y3(r);
    (e.start_sec < t - 0.001 &&
      y3(e) > t &&
      n.push({ a: r, b: e, start_sec: e.start_sec, end_sec: t }),
      y3(e) > t && (r = e));
  }
  return n;
}
function A3(e, t, n, r) {
  return typeof e == `number` && Number.isFinite(e)
    ? Math.min(r, Math.max(n, e))
    : t;
}
function j3(e, t) {
  let n = e && typeof e == `object` ? e : {},
    r = {
      value:
        typeof n.value == `number` && Number.isFinite(n.value) ? n.value : t,
    };
  if (Array.isArray(n.keyframes)) {
    let e = [];
    for (let t of n.keyframes) {
      let n = t && typeof t == `object` ? t : {};
      typeof n.id == `string` &&
        (typeof n.time_sec != `number` ||
          !Number.isFinite(n.time_sec) ||
          typeof n.value != `number` ||
          !Number.isFinite(n.value) ||
          e.push({
            id: n.id,
            time_sec: n.time_sec,
            value: n.value,
            easing: `linear`,
          }));
    }
    (e.sort((e, t) => e.time_sec - t.time_sec),
      e.length > 0 && (r.keyframes = e));
  }
  return r;
}
function ome(e) {
  let t = e && typeof e == `object` ? e : {};
  return {
    x: j3(t.x, 0),
    y: j3(t.y, 0),
    scale: j3(t.scale, 100),
    rotation: j3(t.rotation, 0),
    opacity: j3(t.opacity, 100),
  };
}
function sme(e) {
  let t = e && typeof e == `object` ? e : {};
  return { gain: A3(t.gain, 1, 0, 2), muted: !!t.muted };
}
function cme(e) {
  let t = e && typeof e == `object` ? e : {},
    n = _3(typeof t.content == `string` ? t.content : ``);
  return {
    content: n.content,
    font_family:
      typeof t.font_family == `string` && t.font_family
        ? t.font_family
        : n.font_family,
    font_size_px: A3(t.font_size_px, n.font_size_px, 1, 2e3),
    color: typeof t.color == `string` && t.color ? t.color : n.color,
    weight: t.weight === `normal` || t.weight === `bold` ? t.weight : n.weight,
    italic: !!t.italic,
    align:
      t.align === `left` || t.align === `center` || t.align === `right`
        ? t.align
        : n.align,
  };
}
function lme(e) {
  if (!e || typeof e != `object`) return !1;
  let t = e;
  switch (t.source) {
    case `session`:
      return typeof t.asset_id == `string` && typeof t.path == `string`;
    case `local`:
      return typeof t.media_id == `string`;
    case `text`:
      return !0;
    default:
      return !1;
  }
}
function M3(e) {
  if (!e || typeof e != `object`) return null;
  let t = e;
  if (t.schema_version !== 1 || !Array.isArray(t.tracks)) return null;
  let n = (e, t, n, r) =>
      typeof e == `number` && Number.isFinite(e)
        ? Math.min(r, Math.max(n, e))
        : t,
    r = t.settings ?? {},
    i = {
      width: Math.floor(n(r.width, 1920, 16, 8192) / 2) * 2,
      height: Math.floor(n(r.height, 1080, 16, 8192) / 2) * 2,
      fps: n(r.fps, 30, 1, 120),
      background: typeof r.background == `string` ? r.background : `#000000`,
      duration_mode: r.duration_mode === `fixed` ? `fixed` : `auto`,
      fixed_duration_sec: n(r.fixed_duration_sec, 30, 1, d3),
    },
    a = [`video`, `image`, `text`, `audio`],
    o = [];
  for (let e of t.tracks) {
    let t = e;
    if (
      !t ||
      typeof t.id != `string` ||
      !a.includes(t.kind) ||
      !Array.isArray(t.clips)
    )
      continue;
    let r = [];
    for (let e of t.clips) {
      let t = e;
      if (!t || typeof t.id != `string` || !lme(t.asset)) continue;
      let i = n(t.duration_sec, f3, f3, 1e6),
        a = t.audio,
        o = n(t.fade_in_sec ?? a?.fade_in_sec, 0, 0, i),
        s = n(t.fade_out_sec ?? a?.fade_out_sec, 0, 0, i),
        c = {
          ...t,
          start_sec: n(t.start_sec, 0, 0, 1e6),
          duration_sec: i,
          in_sec: n(t.in_sec, 0, 0, 1e6),
        };
      (o > 0 ? (c.fade_in_sec = o) : delete c.fade_in_sec,
        s > 0 ? (c.fade_out_sec = s) : delete c.fade_out_sec);
      let l = S3(t.crop);
      (C3(l) ? (c.crop = l) : delete c.crop,
        t.transform !== void 0 && (c.transform = ome(t.transform)),
        t.audio !== void 0 && (c.audio = sme(t.audio)),
        t.text !== void 0 && (c.text = cme(t.text)),
        r.push(c));
    }
    r.length !== 0 &&
      o.push({
        id: t.id,
        kind: t.kind,
        name: typeof t.name == `string` ? t.name : `Track`,
        muted: !!t.muted,
        hidden: !!t.hidden,
        clips: O3(t.kind) ? r.slice(0, 1) : r,
      });
  }
  return {
    schema_version: 1,
    name:
      typeof t.name == `string` && t.name.trim()
        ? t.name
        : `Untitled composition`,
    settings: i,
    tracks: o,
    media: Array.isArray(t.media)
      ? t.media.filter((e) => e && typeof e.media_id == `string`)
      : [],
  };
}
