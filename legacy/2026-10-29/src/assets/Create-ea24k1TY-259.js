// Create-ea24k1TY 259 — math
// Lines 86843-86980 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Y3(e) {
  return `${e.italic ? `italic ` : ``}${e.weight === `bold` ? `700 ` : `400 `}${e.font_size_px}px "${e.font_family}", sans-serif`;
}
function X3(e) {
  J3 ||= document.createElement(`canvas`).getContext(`2d`);
  let t = J3;
  if (!t) return { width: 10, height: 10 };
  t.font = Y3(e);
  let n = e.content.split(`
`),
    r = 1;
  for (let e of n) r = Math.max(r, t.measureText(e).width);
  let i = e.font_size_px * 1.2;
  return { width: Math.ceil(r), height: Math.ceil(i * Math.max(1, n.length)) };
}
function hme(e, t) {
  let { width: n, height: r } = X3(t),
    i = t.content.split(`
`),
    a = t.font_size_px * 1.2;
  ((e.font = Y3(t)),
    (e.fillStyle = t.color),
    (e.textBaseline = `middle`),
    (e.textAlign = t.align));
  let o = t.align === `left` ? -n / 2 : t.align === `right` ? n / 2 : 0;
  for (let t = 0; t < i.length; t++) {
    let n = -r / 2 + a * (t + 0.5);
    e.fillText(i[t], o, n);
  }
}
function Z3(e, t, n) {
  let r = e.text ? X3(e.text) : n.getNaturalSize(e);
  if (!r || r.width <= 0 || r.height <= 0) return null;
  let i = ame(r.width, r.height, e.text ? void 0 : e.crop);
  return {
    x: D3(e, `x`, t),
    y: D3(e, `y`, t),
    scale: D3(e, `scale`, t) / 100,
    rotationRad: (D3(e, `rotation`, t) * Math.PI) / 180,
    opacity: Math.max(0, Math.min(1, D3(e, `opacity`, t) / 100)),
    naturalWidth: r.width,
    naturalHeight: r.height,
    localLeft: i.left,
    localTop: i.top,
    localRight: i.right,
    localBottom: i.bottom,
  };
}
function Q3(e) {
  let t = e.scale,
    n = Math.cos(e.rotationRad),
    r = Math.sin(e.rotationRad);
  return [
    { x: e.localLeft * t, y: e.localTop * t },
    { x: e.localRight * t, y: e.localTop * t },
    { x: e.localRight * t, y: e.localBottom * t },
    { x: e.localLeft * t, y: e.localBottom * t },
  ].map((t) => ({ x: e.x + t.x * n - t.y * r, y: e.y + t.x * r + t.y * n }));
}
function gme(e, t, n) {
  let r = t - e.x,
    i = n - e.y,
    a = Math.cos(-e.rotationRad),
    o = Math.sin(-e.rotationRad),
    s = (r * a - i * o) / (e.scale || 1e-6),
    c = (r * o + i * a) / (e.scale || 1e-6);
  return (
    s >= e.localLeft &&
    s <= e.localRight &&
    c >= e.localTop &&
    c <= e.localBottom
  );
}
function $3(e, t, n, r) {
  let { width: i, height: a, background: o } = t.settings;
  (e.save(),
    e.beginPath(),
    e.rect(0, 0, i, a),
    e.clip(),
    (e.fillStyle = o),
    e.fillRect(0, 0, i, a));
  for (let i = t.tracks.length - 1; i >= 0; i--) {
    let a = t.tracks[i];
    if (!O3(a.kind) || a.hidden) continue;
    let o = a.clips[0];
    !o || !T3(o, n) || _me(e, o, n, r);
  }
  e.restore();
}
function _me(e, t, n, r) {
  let i = Z3(t, n, r);
  if (!i || i.scale === 0) return;
  let a = i.opacity * ime(t, n);
  if (!(a <= 0)) {
    if (
      (e.save(),
      (e.globalAlpha *= a),
      e.translate(i.x, i.y),
      e.rotate(i.rotationRad),
      e.scale(i.scale, i.scale),
      t.text)
    )
      hme(e, t.text);
    else {
      let a = r.getImageSource(t, w3(t, n));
      if (a) {
        let n = i.naturalWidth,
          r = i.naturalHeight,
          o = t.crop?.left ?? 0,
          s = t.crop?.top ?? 0,
          c = t.crop?.right ?? 0,
          l = t.crop?.bottom ?? 0;
        e.drawImage(
          a,
          o * n,
          s * r,
          Math.max(0.001, (1 - o - c) * n),
          Math.max(0.001, (1 - s - l) * r),
          i.localLeft,
          i.localTop,
          i.localRight - i.localLeft,
          i.localBottom - i.localTop,
        );
      }
    }
    e.restore();
  }
}
function e6(e, t, n, r, i) {
  for (let a of e.tracks) {
    if (!O3(a.kind) || a.hidden) continue;
    let e = a.clips[0];
    if (!e || !T3(e, t)) continue;
    let o = Z3(e, t, i);
    if (!(!o || o.opacity <= 0) && gme(o, n, r)) return { track: a, clip: e };
  }
  return null;
}
