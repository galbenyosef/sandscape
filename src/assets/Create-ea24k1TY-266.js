// Create-ea24k1TY 266 — test
// Lines 89876-89909 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function y6(e) {
  let t = e.toLowerCase();
  return /^video\//.test(t) || /\.(mp4|webm|mov|mkv|m4v)$/.test(t)
    ? `video`
    : /^image\//.test(t) || /\.(png|jpe?g|webp|gif|svg|bmp)$/.test(t)
      ? `image`
      : /^audio\//.test(t) || /\.(mp3|wav|ogg|m4a|aac|flac|oga)$/.test(t)
        ? `audio`
        : null;
}
async function b6(e) {
  return new Promise((t, n) => {
    let r = document.createElement(`video`);
    ((r.preload = `metadata`),
      (r.muted = !0),
      (r.onloadedmetadata = () =>
        t({
          width: r.videoWidth,
          height: r.videoHeight,
          duration_sec: r.duration || 0,
        })),
      (r.onerror = () => n(Error(`Failed to read video metadata`))),
      (r.src = e));
  });
}
async function Hme(e) {
  return new Promise((t, n) => {
    let r = document.createElement(`audio`);
    ((r.preload = `metadata`),
      (r.onloadedmetadata = () => t(r.duration || 0)),
      (r.onerror = () => n(Error(`Failed to read audio metadata`))),
      (r.src = e));
  });
}
