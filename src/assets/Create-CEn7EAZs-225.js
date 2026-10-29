// Create-CEn7EAZs 225 — math
// Lines 76737-76764 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Cde(e) {
  if (e <= M0) return 0;
  if (e <= P0) {
    let t = (e - M0) / N0;
    return (N0 / Math.PI) * (1 - Math.cos(Math.PI * t));
  }
  if (e <= F0) return L0;
  let t = (e - F0) / N0;
  return L0 + (N0 / Math.PI) * (1 - Math.cos(Math.PI * t));
}
function wde(e) {
  let t = Math.floor(e / I0),
    n = t * 2 * L0 + Cde(e - t * I0);
  return k0 + Zue * e + Que * n;
}
function G0(e) {
  for (let t of Object.values(e)) t instanceof Ti && t.dispose();
  e.dispose();
}
function K0(e) {
  (e.traverse((e) => {
    let t = e;
    e.isSprite || t.geometry?.dispose?.();
    let n = t.material;
    Array.isArray(n) ? n.forEach(G0) : n && G0(n);
  }),
    e.clear());
}
