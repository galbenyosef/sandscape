// Create-CEn7EAZs 283 — s_e
// Lines 96591-96650 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Zge(e, t) {
  let n = e - 56 - 12 - 16;
  return !(n > 0) || !(t > 0) ? 4 : n / t;
}
var t7 = [1, 2, 5, 10, 15, 30, 60, 150, 300, 600, 1500, 3e3],
  Qge = 6,
  $ge = 60;
function e_e(e) {
  let t = t7.find((t) => t * e >= Qge) ?? t7[t7.length - 1];
  return {
    minor: t,
    major: t7.find((n) => n >= t && n % t === 0 && n * e >= $ge) ?? t * 10,
  };
}
function n7(e, t, n) {
  let r = t * n + 12 + 16;
  return Math.max(0, r - (e - 56));
}
var t_e = 14,
  n_e = 7,
  r7 = 24,
  i7 = 28,
  a7 = 34,
  o7 = 64,
  s7 = 14,
  c7 = 78,
  l7 = 12,
  u7 = 90,
  d7 = 12,
  f7 = 102,
  p7 = 14,
  m7 = 116,
  r_e = 130,
  h7 = (e, t) => e + t / 2,
  i_e = h7(o7, s7),
  a_e = h7(c7, l7),
  g7 = h7(u7, d7),
  o_e = h7(f7, p7),
  s_e = h7(m7, p7),
  c_e = (e) => (e === `l` ? o_e : s_e),
  l_e = (e) => (e === `l` ? f7 : m7),
  _7 = r7 - 12,
  u_e = `rgba(200, 200, 210, 0.55)`,
  d_e = `#141020`,
  f_e = `#22d3ee`,
  p_e = `#fbbf24`,
  m_e = `rgba(74, 222, 128, 0.22)`,
  h_e = `rgba(74, 222, 128, 0.45)`,
  g_e = `#4ade80`,
  v7 = `#a855f7`,
  __e = `#555`,
  v_e = `#999`,
  y_e = `#0f0c18`,
  y7 = `45, 212, 191`,
  b7 = `251, 191, 36`,
  b_e = 16,
  x_e = 3;
function S_e(e) {
  return e.length > 9 ? `…${e.slice(-8)}` : e;
}
