// SceneEditor-NC7_0wmu 66 — start
// Lines 33333-33647 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function d_(e, t, n) {
  let {
      W: r,
      D: i,
      cs: a,
      lineX: o,
      lineZ: s,
      wallThickness: c,
      hasWall: l,
      openV: u,
      openH: d,
    } = n,
    f = Math.max(0.2, a * 0.18),
    p = Math.max(f, c * 1.3),
    m = [];
  (l_(e, t, r, i, (e, t, n, r, i, c) => {
    let l = r * a,
      u = (e === `V` ? s(n) : o(n)) + l / 2,
      d = r <= 1 || l <= a * 1.5;
    m.push({
      axis: e,
      line: t,
      start: n,
      len: r,
      a: i,
      b: c,
      span: l,
      center: u,
      normal: d,
    });
  }),
    m.sort((e, t) =>
      e.axis === t.axis
        ? e.line - t.line || e.start - t.start
        : e.axis < t.axis
          ? -1
          : 1,
    ));
  let h = Math.max(c * 1.7, p + c * 0.5),
    g = a * 0.03,
    _ = (e) => {
      let t = (e.normal ? h : c) / 2,
        n = e.normal ? g : 0;
      if (e.axis === `V`) {
        let r = o(e.line);
        return {
          x0: r - t,
          x1: r + t,
          z0: s(e.start) - n,
          z1: s(e.start) + e.span + n,
        };
      }
      let r = s(e.line);
      return {
        x0: o(e.start) - n,
        x1: o(e.start) + e.span + n,
        z0: r - t,
        z1: r + t,
      };
    },
    v = (e, t) => e.start < t.start + t.len && t.start < e.start + e.len,
    y = (e) =>
      l(e.axis, e.line, e.start - 1) || l(e.axis, e.line, e.start + e.len),
    b = [],
    x = m.filter((e) => !e.normal),
    S = new Set();
  for (let e of m) {
    if (!e.normal) {
      S.add(e);
      continue;
    }
    if (!y(e)) {
      S.add(e);
      continue;
    }
    b.some(
      (t) =>
        (t.axis === e.axis && Math.abs(t.line - e.line) <= 1 && v(t, e)) ||
        u_(_(e), _(t)),
    ) || x.some((t) => u_(_(e), _(t)))
      ? S.add(e)
      : b.push(e);
  }
  let C = new Set();
  if (u.size || d.size)
    for (let e of b) {
      let t = e.axis === `V` ? u : d,
        n = e.axis === `V` ? i : r;
      for (let r = e.start; r < e.start + e.len; r++)
        if (t.has(e.line * n + r)) {
          C.add(e);
          break;
        }
    }
  return {
    runs: m,
    kept: b,
    breakup: S,
    suppressed: C,
    footFor: _,
    proudThick: h,
    beamCS: p,
  };
}
function f_(e) {
  let t = [];
  for (let n = e.start; n < e.start + e.len; n++)
    t.push(`${e.axis}:${e.line}:${n}`);
  return t;
}
function p_(e, t, n) {
  let { W: r, D: i, cs: a, lineX: o, lineZ: s } = Qg(e);
  if (t.length !== r * i) return [];
  let c = Bg(n, r, i),
    { kept: l, suppressed: u } = d_(t, (e, t) => e + t * r, {
      W: r,
      D: i,
      cs: a,
      lineX: o,
      lineZ: s,
      wallThickness: e.wallThickness,
      hasWall: Vg(t, r, i, c),
      openV: c.openV,
      openH: c.openH,
    });
  return l
    .filter((e) => !u.has(e))
    .map((e) => ({ axis: e.axis, line: e.line, start: e.start, len: e.len }));
}
function m_(e, t, n, r) {
  let {
      W: i,
      D: a,
      cs: o,
      lineX: s,
      lineZ: c,
      wallThickness: l,
      wallHeight: u,
      params: d,
      structuralBreakup: f,
      columnKeys: p,
      ceilEmbed: m,
      hasWall: h,
      openV: g,
      openH: _,
    } = r,
    v = Math.min(0.4, Math.max(0.18, u * 0.1)),
    {
      runs: y,
      kept: b,
      breakup: x,
      suppressed: S,
      footFor: C,
      proudThick: w,
    } = d_(t, n, {
      W: i,
      D: a,
      cs: o,
      lineX: s,
      lineZ: c,
      wallThickness: l,
      hasWall: h,
      openV: g,
      openH: _,
    }),
    T = new Set(),
    E = new Set();
  for (let e of b)
    if (!S.has(e))
      for (let t = e.start; t < e.start + e.len; t++)
        e.axis === `V` ? T.add(e.line * a + t) : E.add(e.line * i + t);
  let D = y.filter((e) => !e.normal);
  for (let t of y) {
    let { axis: n, line: r, start: a, len: h, span: g, center: _ } = t,
      y = t.a.kind === `corridor` ? t.b : t.a,
      T = t.a.height >= t.b.height ? t.a : t.b,
      E = Math.min(t.a.height, t.b.height),
      O = Math.max(t.a.height, t.b.height),
      k = x.has(t) || S.has(t),
      A = k ? E : Qi(d, E);
    if (O - A > 1e-4) {
      let t = 0.08,
        i = O - A + m + t,
        o = `header:${n}:${r}:${a}:${h}`,
        u = (A - t + O + m) / 2,
        d = O - E > 1e-4 ? T : y;
      n === `V`
        ? e.push($(Rg(d), l, i, g, s(r), u, _, d.id, o))
        : e.push($(Rg(d), g, i, l, _, u, c(r), d.id, o));
    }
    let j = `door:${n}:${r}:${a}:${h}`;
    if (!k) {
      let t = w,
        i = g + o * 0.06;
      n === `V`
        ? e.push($(`door`, t, A, i, s(r), A / 2, _, y.id, j))
        : e.push($(`door`, t, A, i, _, A / 2, c(r), y.id, j, Math.PI / 2));
    } else if (!t.normal) {
      let d = Math.max(0.2, o * 0.18),
        m = Math.max(d, l * 1.5),
        _ =
          O - E > 1e-4 || !f
            ? E
            : Math.max(0.2, E - v - 0.02 - u * Kg + Math.min(0.12, v * 0.45)),
        x = (e, t) => {
          let r = (n === `V` ? m : d) / 2,
            i = (n === `V` ? d : m) / 2;
          return { x0: e - r, x1: e + r, z0: t - i, z1: t + i };
        },
        S = (e, n) => {
          let r = x(e, n);
          return (
            b.some((e) => u_(r, C(e))) || D.some((e) => e !== t && u_(r, C(e)))
          );
        },
        w = (t, r, i) =>
          e.push(
            n === `V`
              ? $(`column`, m, _, d, t, _ / 2, r, y.id, `${j}:${i}`)
              : $(`column`, d, _, m, t, _ / 2, r, y.id, `${j}:${i}`),
          ),
        T = (e, t) => e + t * (i + 1);
      if (n === `V`) {
        let e = c(a) + d / 2,
          t = c(a) + g - d / 2;
        (!p.has(T(r, a)) && !S(s(r), e) && w(s(r), e, `jambL`),
          !p.has(T(r, a + h)) && !S(s(r), t) && w(s(r), t, `jambR`));
      } else {
        let e = s(a) + d / 2,
          t = s(a) + g - d / 2;
        (!p.has(T(a, r)) && !S(e, c(r)) && w(e, c(r), `jambL`),
          !p.has(T(a + h, r)) && !S(t, c(r)) && w(t, c(r), `jambR`));
      }
    }
    let M = 0.05;
    n === `V`
      ? e.push($(`trim`, w, M, g, s(r), M / 2, _, y.id, `dsill:${n}:${r}:${a}`))
      : e.push(
          $(`trim`, g, M, w, _, M / 2, c(r), y.id, `dsill:${n}:${r}:${a}`),
        );
  }
  return { framedV: T, framedH: E };
}
function h_(e, t) {
  let { width: n, depth: r } = e,
    i = new Set(),
    a = (e, t) => e + t * n,
    o = (e, o) =>
      e >= 0 && e < n && o >= 0 && o < r && t(e, o) && !i.has(a(e, o)),
    s = [];
  for (let e = 0; e < r; e++)
    for (let t = 0; t < n; t++) {
      if (!o(t, e)) continue;
      let n = 1;
      for (; o(t + n, e);) n++;
      let c = 1;
      grow: for (; e + c < r;) {
        for (let r = t; r < t + n; r++) if (!o(r, e + c)) break grow;
        c++;
      }
      for (let r = e; r < e + c; r++)
        for (let e = t; e < t + n; e++) i.add(a(e, r));
      s.push({ x: t, z: e, w: n, d: c });
    }
  return s;
}
function g_(e, t) {
  return h_(e, (n, r) => e.cells[n + r * e.width] === t);
}
var __ = {
  [ea.spawn]: { color: 2600544, make: () => new Ie(0.5, 1.2, 4) },
  [ea.encounter]: { color: 9323693, make: () => new tt(0.6, 0) },
  [ea.special]: { color: 13937677, make: () => new L(0.6, 0) },
};
function v_() {
  let e = -0.42,
    t = 0.3,
    n = 0.1,
    r = [
      [
        [0, 0, -1],
        [-0.3, 0, e],
        [t, 0, e],
      ],
      [
        [-0.1, 0, e],
        [n, 0, e],
        [n, 0, 0],
      ],
      [
        [-0.1, 0, e],
        [n, 0, 0],
        [-0.1, 0, 0],
      ],
    ],
    i = [],
    a = [],
    o = [];
  for (let [e, n, s] of r)
    for (let [r, c] of [
      [[e, n, s], 1],
      [[s, n, e], -1],
    ])
      for (let e of r)
        (i.push(e[0], e[1], e[2]),
          a.push(0, c, 0),
          o.push(e[0] / (2 * t) + 0.5, e[2] + 0.5));
  let s = new ct();
  return (
    s.setAttribute(`position`, new et(i, 3)),
    s.setAttribute(`normal`, new et(a, 3)),
    s.setAttribute(`uv`, new et(o, 2)),
    s
  );
}
