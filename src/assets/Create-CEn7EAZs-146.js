// Create-CEn7EAZs 146 — lineto
// Lines 48913-48975 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function PV(e, t, n, r, i, a) {
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
function FV(e, t) {
  let n = e.x ?? 0,
    r = e.y ?? 0,
    i = t.x ?? 0,
    a = t.y ?? 0,
    o = n - i,
    s = r - a;
  if (o === 0 && s === 0) return { x: i, y: a };
  let c = (t.kind === `any` ? kV : DV) / 2,
    l = (t.kind === `any` ? AV : OV) / 2,
    u = Math.abs(o),
    d = Math.abs(s),
    f = u === 0 ? 1 / 0 : c / u,
    p = d === 0 ? 1 / 0 : l / d,
    m = Math.min(f, p);
  return { x: i + o * m, y: a + s * m };
}
function IV(e, t, n) {
  let r = FV(n, t),
    i = FV(t, n),
    a = i.x - r.x,
    o = i.y - r.y,
    s = Math.sqrt(a * a + o * o);
  if (s < 1) return;
  let c = a / s,
    l = o / s;
  (e.beginPath(),
    e.moveTo(r.x, r.y),
    e.lineTo(i.x, i.y),
    e.stroke(),
    e.beginPath(),
    e.moveTo(i.x, i.y),
    e.lineTo(i.x - 6 * c + 6 * 0.4 * l, i.y - 6 * l - 6 * 0.4 * c),
    e.lineTo(i.x - 6 * c - 6 * 0.4 * l, i.y - 6 * l + 6 * 0.4 * c),
    e.closePath(),
    e.fill());
}
var LV = {
    locomotion: `bg-blue-500/20 text-blue-300 border-blue-500/30`,
    combat: `bg-red-500/20 text-red-300 border-red-500/30`,
    interaction: `bg-green-500/20 text-green-300 border-green-500/30`,
    emote: `bg-yellow-500/20 text-yellow-300 border-yellow-500/30`,
    transition: `bg-purple-500/20 text-purple-300 border-purple-500/30`,
    environmental: `bg-cyan-500/20 text-cyan-300 border-cyan-500/30`,
  },
  RV = {
    critical: `text-red-400`,
    important: `text-yellow-400`,
    nice_to_have: `text-gray-400`,
  };
