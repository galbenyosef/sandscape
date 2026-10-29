// SceneEditor-NC7_0wmu 64 — math
// Lines 32786-32982 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function o_(e, t, n, r, i, a, o) {
  let { W: s, D: c, cs: l, lineX: u, lineZ: d } = i,
    f = (e, t) => e >= 0 && e < s && t >= 0 && t < c,
    p = Math.max(0.2, a.lightSocketSize),
    m = Math.max(0.08, p * 0.3),
    h = Math.max(1, Math.floor(a.lightSocketArenaStride)),
    g = Math.max(0, Math.floor(a.lightSocketCorridorStride)),
    _ = (e, t) => o.has(e + t * s),
    v = (e, n, r, i) => {
      mg(`finsert:${r.id}:${e}:${n}`, `ceilplate`) < 0.08 ||
        t.push(
          $(
            `light_socket`,
            p,
            m,
            p,
            u(e) + l / 2,
            qg(r, a) - m / 2 - 0.005,
            d(n) + l / 2,
            r.id,
            i,
          ),
        );
    };
  for (let t of e.cells) {
    let e = Jg(t);
    if (t.kind === `arena` && e.w >= 3 && e.d >= 3) {
      let i = new Set();
      for (let a = e.z + 1; a < e.z + e.d - 1; a += h)
        for (let o = e.x + 1; o < e.x + e.w - 1; o += h) {
          if (n[r(o, a)] !== t) continue;
          let e = o,
            c = a;
          if (_(e, c)) {
            let l = [
              [1, 0],
              [0, 1],
              [-1, 0],
              [0, -1],
              [1, 1],
              [1, -1],
              [-1, 1],
              [-1, -1],
              [2, 0],
              [0, 2],
              [-2, 0],
              [0, -2],
            ]
              .map(([e, t]) => [o + e, a + t])
              .find(
                ([e, a]) =>
                  f(e, a) && n[r(e, a)] === t && !_(e, a) && !i.has(e + a * s),
              );
            if (!l) continue;
            [e, c] = l;
          }
          _(e, c) ||
            i.has(e + c * s) ||
            (i.add(e + c * s), v(e, c, t, `light:${t.id}:${e}:${c}`));
        }
    } else if (t.kind === `room` && e.w >= 2 && e.d >= 2) {
      let i = e.x + Math.floor(e.w / 2),
        a = e.z + Math.floor(e.d / 2);
      n[r(i, a)] === t && !_(i, a) && v(i, a, t, `light:${t.id}:C`);
    } else if (t.kind === `corridor` && g > 0) {
      let e = new Set();
      for (let i = 0; i < t.rects.length; i++) {
        let a = t.rects[i],
          o = a.w >= a.d,
          s = o ? a.w : a.d,
          c = o ? a.z + Math.floor(a.d / 2) : a.x + Math.floor(a.w / 2);
        for (let i = Math.floor(g / 2); i < s; i += g) {
          let s = o ? a.x + i : c,
            l = o ? c : a.z + i;
          !f(s, l) ||
            n[r(s, l)] !== t ||
            e.has(r(s, l)) ||
            _(s, l) ||
            (e.add(r(s, l)), v(s, l, t, `light:${t.id}:c:${s}:${l}`));
        }
      }
    }
  }
  if (a.wallSockets) {
    let i = a.wallThickness,
      o = Math.max(1, Math.floor(a.wallSocketStride)),
      s = Math.floor(o / 2),
      c = (e, t, i, a, o) => {
        if (!f(t, i) || n[r(t, i)] !== e) return !1;
        let s = f(a, o) ? n[r(a, o)] : null;
        return (
          s === null ||
          (s !== e && s.kind !== `corridor` && e.kind !== `corridor`)
        );
      },
      h = (e, t, n, r, i) => {
        let a = 0;
        for (let [l, u] of t)
          c(e, l, u, l + n, u + r) ? (a % o === s && i(l, u), a++) : (a = 0);
      },
      g = (e, t) => Array.from({ length: Math.max(0, t - e) }, (t, n) => e + n);
    for (let n of e.cells) {
      if (n.kind !== `room` && n.kind !== `arena` && n.kind !== `corridor`)
        continue;
      let e = Jg(n),
        r = e.x,
        o = e.x + e.w,
        s = e.z,
        c = e.z + e.d,
        f = Math.min(
          n.height * 0.6,
          a.wallHeight * 0.7,
          n.height - p / 2 - 0.1,
        );
      (h(
        n,
        g(r, o).map((e) => [e, s]),
        0,
        -1,
        (e) =>
          t.push(
            $(
              `light_socket`,
              p,
              p,
              m,
              u(e) + l / 2,
              f,
              d(s) + i / 2 + m / 2,
              n.id,
              `light:${n.id}:wN:${e}`,
            ),
          ),
      ),
        h(
          n,
          g(r, o).map((e) => [e, c - 1]),
          0,
          1,
          (e) =>
            t.push(
              $(
                `light_socket`,
                p,
                p,
                m,
                u(e) + l / 2,
                f,
                d(c) - i / 2 - m / 2,
                n.id,
                `light:${n.id}:wS:${e}`,
              ),
            ),
        ),
        h(
          n,
          g(s, c).map((e) => [r, e]),
          -1,
          0,
          (e, a) =>
            t.push(
              $(
                `light_socket`,
                m,
                p,
                p,
                u(r) + i / 2 + m / 2,
                f,
                d(a) + l / 2,
                n.id,
                `light:${n.id}:wW:${a}`,
              ),
            ),
        ),
        h(
          n,
          g(s, c).map((e) => [o - 1, e]),
          1,
          0,
          (e, r) =>
            t.push(
              $(
                `light_socket`,
                m,
                p,
                p,
                u(o) - i / 2 - m / 2,
                f,
                d(r) + l / 2,
                n.id,
                `light:${n.id}:wE:${r}`,
              ),
            ),
        ));
    }
  }
}
