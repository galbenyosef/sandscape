// SceneEditor-NC7_0wmu 63 — math
// Lines 32541-32785 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function r_(e, t, n, r, i, a) {
  let { W: o, D: s, cs: c, lineX: l, lineZ: u } = i,
    d = Math.max(2, Math.floor(a.arenaColumnStride)),
    f = Math.max(0.2, c * 0.18, a.wallThickness * 1.5),
    p = Gg(a),
    m = Math.max(f, a.wallThickness * 1.3),
    h = Math.min(0.4, Math.max(0.18, a.wallHeight * 0.1)),
    g = (e, t) => e >= 0 && e < o && t >= 0 && t < s;
  for (let i of e.cells) {
    if (i.kind !== `arena`) continue;
    let e = Jg(i);
    if (e.w < 3 || e.d < 3) continue;
    let s = i.height - h - 0.02 - a.wallHeight * Kg,
      _ = s + Math.min(0.12, h * 0.45),
      v = i.height - 0.02 - s,
      y = i.height - 0.02 - v / 2,
      b = _ + p,
      x = (_ - p) / 2,
      S = (e, t) => e + t * (o + 1),
      C = new Set();
    for (let a = e.z + 1; a < e.z + e.d - 1; a += d)
      for (let o = e.x + 1; o < e.x + e.w - 1; o += d) {
        if (n[r(o, a)] !== i) continue;
        let e = l(o) + c / 2,
          s = u(a) + c / 2;
        t.push($(`pillar`, f, b, f, e, x, s, i.id, `pillar:${i.id}:${o}:${a}`));
        let d = f * 1.7,
          p = Math.min(0.12, i.height * 0.04);
        (t.push(
          $(`trim`, d, p, d, e, p / 2, s, i.id, `pilbase:${i.id}:${o}:${a}`),
        ),
          C.add(S(o, a)));
      }
    let w = (e, t, a, o, s) => {
        for (let c = 1; c <= s; c++)
          if (!g(e + a * c, t + o * c) || n[r(e + a * c, t + o * c)] !== i)
            return !1;
        return !0;
      },
      T = (e, n, r, a) =>
        t.push(
          $(`beam`, Math.abs(n - e) + m, v, m, (e + n) / 2, y, r, i.id, a),
        ),
      E = (e, n, r, a) =>
        t.push(
          $(`beam`, m, v, Math.abs(n - e) + m, r, y, (e + n) / 2, i.id, a),
        );
    for (let t = e.z + 1; t < e.z + e.d - 1; t += d)
      for (let n = e.x + 1; n < e.x + e.w - 1; n += d) {
        if (!C.has(S(n, t))) continue;
        let r = l(n) + c / 2,
          a = u(t) + c / 2;
        (C.has(S(n + d, t))
          ? T(r, l(n + d) + c / 2, a, `abeam:${i.id}:X:${n}:${t}`)
          : w(n, t, 1, 0, e.x + e.w - n) &&
            T(r, l(e.x + e.w), a, `abeam:${i.id}:Xe:${n}:${t}`),
          !C.has(S(n - d, t)) &&
            w(n, t, -1, 0, n - e.x) &&
            T(l(e.x), r, a, `abeam:${i.id}:Xw:${n}:${t}`),
          C.has(S(n, t + d))
            ? E(a, u(t + d) + c / 2, r, `abeam:${i.id}:Z:${n}:${t}`)
            : w(n, t, 0, 1, e.z + e.d - t) &&
              E(a, u(e.z + e.d), r, `abeam:${i.id}:Zs:${n}:${t}`),
          !C.has(S(n, t - d)) &&
            w(n, t, 0, -1, t - e.z) &&
            E(u(e.z), a, r, `abeam:${i.id}:Zn:${n}:${t}`));
      }
    for (let n = e.z + 1; n < e.z + e.d - 1; n += d)
      for (let r = e.x + 1; r < e.x + e.w - 1; r += d) {
        if (
          !C.has(S(r, n)) ||
          C.has(S(r + d, n)) ||
          C.has(S(r - d, n)) ||
          C.has(S(r, n + d)) ||
          C.has(S(r, n - d)) ||
          w(r, n, 1, 0, e.x + e.w - r) ||
          w(r, n, -1, 0, r - e.x) ||
          w(r, n, 0, 1, e.z + e.d - n) ||
          w(r, n, 0, -1, n - e.z)
        )
          continue;
        let a = l(r) + c / 2,
          o = u(n) + c / 2;
        t.push(
          $(`beam`, m * 2.5, v, m, a, y, o, i.id, `pcap:${i.id}:${r}:${n}`),
        );
      }
  }
}
function i_(e, t, n, r, i, a, o, s) {
  let { W: c, D: l, cs: u, lineX: d, lineZ: f } = i,
    p = (e, t, n) => Math.max(t, Math.min(n, e));
  for (let i of e.cells) {
    if (i.kind !== `room` && i.kind !== `arena`) continue;
    let e = Jg(i);
    if (!(i.kind === `arena` ? e.w >= 3 && e.d >= 3 : e.w >= 4 && e.d >= 4))
      continue;
    let m = e.x,
      h = e.x + e.w,
      g = e.z,
      _ = e.z + e.d,
      v = i.height ?? s;
    for (let e = g; e < _; e++)
      for (let s = m; s < h; s++) {
        if (
          !(s === m || s === h - 1 || e === g || e === _ - 1) ||
          n[r(s, e)] !== i
        )
          continue;
        let y = s > 0 ? n[r(s - 1, e)] : null,
          b = s < c - 1 ? n[r(s + 1, e)] : null,
          x = e > 0 ? n[r(s, e - 1)] : null,
          S = e < l - 1 ? n[r(s, e + 1)] : null,
          C = (e, t, n) =>
            t ? (n || e?.kind === `corridor` ? `open` : `wall`) : `in`,
          w = C(y, y !== i, a.has(s * l + e)),
          T = C(b, b !== i, a.has((s + 1) * l + e)),
          E = C(x, x !== i, o.has(e * c + s)),
          D = C(S, S !== i, o.has((e + 1) * c + s));
        if (
          w === `open` ||
          T === `open` ||
          E === `open` ||
          D === `open` ||
          (w !== `wall` && T !== `wall` && E !== `wall` && D !== `wall`) ||
          (w === `wall` && T === `wall`) ||
          (E === `wall` && D === `wall`)
        )
          continue;
        let O = `prop:${i.id}:${s}:${e}`;
        if (!hg(O, `rare`, `prop`)) continue;
        let k = w === `wall` ? -1 : +(T === `wall`),
          A = E === `wall` ? -1 : +(D === `wall`),
          j = d(s),
          M = f(e),
          N = 0.08,
          P = (e, t, n) =>
            n < 0 ? e + t / 2 + N : n > 0 ? e + u - t / 2 - N : e + u / 2,
          F = mg(O, `count`),
          ee = F < 0.15 ? 1 : F < 0.45 ? 2 : F < 0.78 ? 3 : 4,
          I = v * 0.8,
          te = (e, t, n, r) => {
            let i = u * (t + (n - t) * mg(e, `sz`)),
              a = mg(e, `el`) < 0.4 ? 1.25 + 0.5 * mg(e, `el2`) : 1,
              o = r === void 0 ? mg(e, `eax`) < 0.5 : r,
              s = i * (o ? a : 1),
              c = i * (o ? 1 : a);
            return { w: s, d: c, bh: Math.min(s, c) * (a > 1 ? 0.78 : 1) };
          },
          ne = k !== 0 && A === 0,
          L = ee >= 3 && (ne || (A !== 0 && k === 0)) ? 2 : 1,
          R = { cx: 0, cz: 0, w: 0, d: 0, top: 0 };
        for (let e = 0; e < L; e++) {
          let n = `${O}:${e}`,
            r = te(n, 0.3, L > 1 ? 0.4 : 0.46, L > 1 ? ne : void 0),
            a = p(r.bh, 0.2, I),
            o = k === 0 ? j + u / 2 : P(j, r.w, k),
            s = A === 0 ? M + u / 2 : P(M, r.d, A);
          if (L > 1) {
            let t = (e + 1) / (L + 1);
            ne ? (s = M + u * t) : (o = j + u * t);
          }
          (t.push($(`prop`, r.w, a, r.d, o, a / 2, s, i.id, n)),
            (R = { cx: o, cz: s, w: r.w, d: r.d, top: a }));
        }
        let re = R.top;
        for (let e = L; e < ee; e++) {
          let n = `${O}:${e}`,
            r = te(n, 0.26, 0.4);
          if (re + r.bh > I) break;
          let a = 0.4 * Math.min(R.w, R.d),
            o = (mg(n, `ox`) - 0.5) * 2 * a,
            s = (mg(n, `oz`) - 0.5) * 2 * a;
          (k < 0 ? (o = Math.abs(o)) : k > 0 && (o = -Math.abs(o)),
            A < 0 ? (s = Math.abs(s)) : A > 0 && (s = -Math.abs(s)));
          let c = R.cx + o,
            l = R.cz + s,
            u = (mg(n, `yaw`) - 0.5) * 0.5;
          (t.push($(`prop`, r.w, r.bh, r.d, c, re + r.bh / 2, l, i.id, n, u)),
            (R = { cx: c, cz: l, w: r.w, d: r.d, top: re + r.bh }),
            (re += r.bh));
        }
      }
  }
}
function a_(e, t, n, r) {
  let { W: i, D: a, cs: o, lineX: s, lineZ: c } = r,
    l = 0.7,
    u = 1.1,
    d = 0.18,
    f = (e, t) => e >= 0 && e < i && t >= 0 && t < a,
    p = (e, r, i, a, o) => {
      if (!f(e, r) || t[n(e, r)] !== o) return !1;
      let s = f(i, a) ? t[n(i, a)] : null;
      return s !== o && !(s && s.kind === `corridor`);
    };
  l_(t, n, i, a, (r, i, a, f, m, h) => {
    let g = m.kind === `corridor` ? h : m;
    if (!hg(`${g.id}:${r}:${i}:${a}`, `uncommon`, `wallpanel`)) return;
    let _ = Math.min(g.height * 0.5, 1.4);
    if (r === `V`) {
      let r = t[n(i - 1, a)] === g ? i - 1 : i,
        m = r === i ? i - 1 : i,
        h = r === i ? 1 : -1;
      for (let t of [a - 1, a + f])
        if (p(r, t, m, t, g)) {
          e.push(
            $(
              `wall_panel`,
              d,
              u,
              l,
              s(i) + (d / 2) * h,
              _,
              c(t) + o / 2,
              g.id,
              `wpanel:${g.id}:V:${i}:${t}`,
            ),
          );
          break;
        }
    } else {
      let r = t[n(a, i - 1)] === g ? i - 1 : i,
        m = r === i ? i - 1 : i,
        h = r === i ? 1 : -1;
      for (let t of [a - 1, a + f])
        if (p(t, r, t, m, g)) {
          e.push(
            $(
              `wall_panel`,
              l,
              u,
              d,
              s(t) + o / 2,
              _,
              c(i) + (d / 2) * h,
              g.id,
              `wpanel:${g.id}:H:${i}:${t}`,
            ),
          );
          break;
        }
    }
  });
}
