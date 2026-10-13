// assets__Create-ea24k1TY 223 — math
// Lines 75957-75984 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Wue(e) {
  if (e <= N0) return 0;
  if (e <= F0) {
    let t = (e - N0) / P0;
    return (P0 / Math.PI) * (1 - Math.cos(Math.PI * t));
  }
  if (e <= I0) return R0;
  let t = (e - I0) / P0;
  return R0 + (P0 / Math.PI) * (1 - Math.cos(Math.PI * t));
}
function Gue(e) {
  let t = Math.floor(e / L0),
    n = t * 2 * R0 + Wue(e - t * L0);
  return A0 + vue * e + yue * n;
}
function K0(e) {
  for (let t of Object.values(e)) t instanceof wi && t.dispose();
  e.dispose();
}
function q0(e) {
  (e.traverse((e) => {
    let t = e;
    e.isSprite || t.geometry?.dispose?.();
    let n = t.material;
    Array.isArray(n) ? n.forEach(K0) : n && K0(n);
  }),
    e.clear());
}
