// assets__Create-ea24k1TY 285 — math
// Lines 99485-99583 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Q7(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.quadraticCurveTo(t + r, n, t + r, n + a),
    e.lineTo(t + r, n + i - a),
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
    e.lineTo(t + a, n + i),
    e.quadraticCurveTo(t, n + i, t, n + i - a),
    e.lineTo(t, n + a),
    e.quadraticCurveTo(t, n, t + a, n),
    e.closePath());
}
function I_e(e, t, n, r, i, a, o, s = Z7, c = 1.5) {
  let l = (t + r) / 2,
    u = (n + i) / 2,
    d = r - t,
    f = i - n,
    p = Math.sqrt(d * d + f * f);
  if (p < 1) return;
  let m = -f / p,
    h = d / p,
    g = l + m * a,
    _ = u + h * a;
  (e.beginPath(),
    (e.strokeStyle = s),
    (e.lineWidth = c * o),
    e.moveTo(t, n),
    e.quadraticCurveTo(g, _, r, i),
    e.stroke());
  let v = 0.98,
    y = 2 * (1 - v) * (g - t) + 2 * v * (r - g),
    b = 2 * (1 - v) * (_ - n) + 2 * v * (i - _),
    x = Math.sqrt(y * y + b * b);
  if (x < 0.01) return;
  let S = y / x,
    C = b / x,
    w = M_e * o;
  (e.beginPath(),
    (e.fillStyle = s),
    e.moveTo(r, i),
    e.lineTo(r - w * S + w * 0.4 * C, i - w * C - w * 0.4 * S),
    e.lineTo(r - w * S - w * 0.4 * C, i - w * C + w * 0.4 * S),
    e.closePath(),
    e.fill());
}
function L_e(e) {
  return (
    e.length !== 0 &&
    e.every((e, t) => {
      let n = (t % 3) * 220,
        r = Math.floor(t / 3) * 120;
      return e.position.x === n && e.position.y === r;
    })
  );
}
function R_e(e, t, n) {
  if (e.states.length === 0) return {};
  let r = e.transitions.some((e) => e.fromStateId === `*`),
    i = e.states.map((e) => ({ id: e.id }));
  r && i.push({ id: `__any__` });
  let a = new Set(i.map((e) => e.id)),
    o = e.transitions
      .map((e) => ({
        source: e.fromStateId === `*` ? `__any__` : e.fromStateId,
        target: e.toStateId,
      }))
      .filter((e) => a.has(e.source) && a.has(e.target)),
    s = t / 2,
    c = n / 2,
    l = Math.min(t, n) / 3;
  i.forEach((e, t) => {
    let n = (t / i.length) * Math.PI * 2;
    ((e.x = s + Math.cos(n) * l), (e.y = c + Math.sin(n) * l));
  });
  let u = q7 * 1.6,
    d = Math.hypot(q7, J7) / 2 + 12,
    f = oV(i)
      .force(`charge`, sV().strength(-1200))
      .force(
        `link`,
        ZB(o)
          .id((e) => e.id)
          .distance(u)
          .strength(0.6),
      )
      .force(`center`, xB(s, c).strength(0.05))
      .force(`collide`, JB(d).strength(0.9))
      .stop();
  for (let e = 0; e < 400; e++) f.tick();
  let p = {};
  for (let e of i)
    e.id !== `__any__` &&
      (p[e.id] = {
        x: Math.round((e.x ?? s) - q7 / 2),
        y: Math.round((e.y ?? c) - J7 / 2),
      });
  return p;
}
