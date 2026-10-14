// Create-ea24k1TY 281 — bge
// Lines 95812-95871 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function vge(e, t) {
  let n = e - 56 - 12 - 16;
  return !(n > 0) || !(t > 0) ? 4 : n / t;
}
var n7 = [1, 2, 5, 10, 15, 30, 60, 150, 300, 600, 1500, 3e3],
  yge = 6,
  bge = 60;
function xge(e) {
  let t = n7.find((t) => t * e >= yge) ?? n7[n7.length - 1];
  return {
    minor: t,
    major: n7.find((n) => n >= t && n % t === 0 && n * e >= bge) ?? t * 10,
  };
}
function r7(e, t, n) {
  let r = t * n + 12 + 16;
  return Math.max(0, r - (e - 56));
}
var Sge = 14,
  Cge = 7,
  i7 = 24,
  a7 = 28,
  o7 = 34,
  s7 = 64,
  c7 = 14,
  l7 = 78,
  u7 = 12,
  d7 = 90,
  f7 = 12,
  p7 = 102,
  m7 = 14,
  h7 = 116,
  wge = 130,
  g7 = (e, t) => e + t / 2,
  Tge = g7(s7, c7),
  Ege = g7(l7, u7),
  _7 = g7(d7, f7),
  Dge = g7(p7, m7),
  Oge = g7(h7, m7),
  kge = (e) => (e === `l` ? Dge : Oge),
  Age = (e) => (e === `l` ? p7 : h7),
  v7 = i7 - 12,
  jge = `rgba(200, 200, 210, 0.55)`,
  Mge = `#141020`,
  Nge = `#22d3ee`,
  Pge = `#fbbf24`,
  Fge = `rgba(74, 222, 128, 0.22)`,
  Ige = `rgba(74, 222, 128, 0.45)`,
  Lge = `#4ade80`,
  y7 = `#a855f7`,
  Rge = `#555`,
  zge = `#999`,
  Bge = `#0f0c18`,
  b7 = `45, 212, 191`,
  x7 = `251, 191, 36`,
  Vge = 16,
  Hge = 3;
function Uge(e) {
  return e.length > 9 ? `…${e.slice(-8)}` : e;
}
