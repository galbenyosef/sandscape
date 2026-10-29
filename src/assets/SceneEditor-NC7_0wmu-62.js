// SceneEditor-NC7_0wmu 62 — push
// Lines 32030-32540 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function n_(e) {
  let t = e.params,
    { W: n, D: r, cs: i, lineX: a, lineZ: o, cellAt: s } = Qg(t),
    c = [],
    l = e_(e, n, r),
    u = (e, t) => e + t * n,
    d = (e, t) => e >= 0 && e < n && t >= 0 && t < r,
    f = Bg(
      e.zones && e.zones.width === n && e.zones.depth === r ? e.zones : null,
      n,
      r,
    ),
    { doorV: p, doorH: m, wallV: h, wallH: g, openV: _, openH: v } = f,
    y = (e, t, n) => {
      if (!t.size) return e;
      let r = new Set(e);
      for (let e of t) n.has(e) || r.add(e);
      return r;
    },
    b = y(p, _, h),
    x = y(m, v, g),
    S = Vg(l, n, r, f),
    C =
      e.zones && e.zones.width === n && e.zones.depth === r
        ? ua(e.zones)
        : new Set();
  for (let s of e.cells)
    (t.perCellTiling ? Xg(s, l, n, r) : Yg(s, l, n, r)).forEach((e, n) => {
      let r = e.w * i,
        l = e.d * i,
        u = a(e.x) + r / 2,
        d = o(e.z) + l / 2,
        f = t.perCellTiling ? `${e.x}:${e.z}` : `${n}`,
        p = $(
          `floor`,
          r,
          t.floorThickness,
          l,
          u,
          -t.floorThickness / 2,
          d,
          s.id,
          `${s.id}:floor:${f}`,
        );
      if (C.size) {
        let t = [],
          n = [];
        for (let r = e.z; r < e.z + e.d; r++)
          for (let s = e.x; s < e.x + e.w; s++) {
            let e = ca(s, r);
            C.has(e) &&
              (t.push(e), n.push({ x: a(s) + i / 2, z: o(r) + i / 2 }));
          }
        t.length &&
          ((p.userData.special = !0),
          (p.userData.specialCells = t),
          (p.userData.specialCellsWorld = n));
      }
      (c.push(p),
        t.ceilings &&
          c.push(
            $(
              `ceiling`,
              r,
              t.floorThickness,
              l,
              u,
              qg(s, t) + t.floorThickness / 2,
              d,
              s.id,
              `${s.id}:ceiling:${f}`,
            ),
          ));
    });
  if (e.zones && e.zones.width === n && e.zones.depth === r)
    for (let n of [`spawn`, `encounter`])
      for (let r of [...la(e.zones, n)].sort()) {
        let e = Sa(r);
        !e ||
          !d(e.x, e.z) ||
          l[u(e.x, e.z)] != null ||
          c.push(
            $(
              `floor`,
              i,
              t.floorThickness,
              i,
              a(e.x) + i / 2,
              -t.floorThickness / 2,
              o(e.z) + i / 2,
              `level`,
              `zfloor:${n}:${e.x}:${e.z}`,
            ),
          );
      }
  let w = t.ceilings ? Gg(t) : 0,
    T = (e, n, r, i) => {
      let a = Zi(t, r?.kind);
      if (a <= 0) {
        i(e, n);
        return;
      }
      for (let t = 0; t < n; t += a) i(e + t, Math.min(a, n - t));
    },
    E = (e, n, r, s) => {
      let l = (s?.height ?? t.wallHeight) + w,
        u = o(n) + (r * i) / 2;
      c.push(
        $(
          Rg(s),
          t.wallThickness,
          l,
          r * i,
          a(e),
          l / 2,
          u,
          s?.id ?? `level`,
          `wall:V:${e}:${n}:${r}`,
        ),
      );
    },
    D = (e, n, r, s) => {
      let l = (s?.height ?? t.wallHeight) + w,
        u = a(n) + (r * i) / 2;
      c.push(
        $(
          Rg(s),
          r * i,
          l,
          t.wallThickness,
          u,
          l / 2,
          o(e),
          s?.id ?? `level`,
          `wall:H:${e}:${n}:${r}`,
        ),
      );
    },
    O = (e, t, n, r) => T(t, n, r, (t, n) => E(e, t, n, r)),
    k = (e, t, n, r) => T(t, n, r, (t, n) => D(e, t, n, r));
  for (let e = 0; e <= n; e++) {
    let i = null,
      a = (t) => {
        if (!i) return;
        let n = t - i.startZ;
        (n > 0 && O(e, i.startZ, n, i.ownerCell), (i = null));
      };
    for (let o = 0; o < r; o++) {
      let s = e * r + o;
      if (p.has(s) || (_.has(s) && !h.has(s))) {
        a(o);
        continue;
      }
      let c = zg(e > 0 ? l[u(e - 1, o)] : null, e < n ? l[u(e, o)] : null);
      if (!c) {
        a(o);
        continue;
      }
      if (t.perCellTiling) {
        O(e, o, 1, c.ownerCell);
        continue;
      }
      (i && (i.side !== c.side || i.ownerCell !== c.ownerCell) && a(o),
        (i ||= { startZ: o, ownerCell: c.ownerCell, side: c.side }));
    }
    a(r);
  }
  for (let e = 0; e <= r; e++) {
    let i = null,
      a = (t) => {
        if (!i) return;
        let n = t - i.startX;
        (n > 0 && k(e, i.startX, n, i.ownerCell), (i = null));
      };
    for (let o = 0; o < n; o++) {
      let s = e * n + o;
      if (m.has(s) || (v.has(s) && !g.has(s))) {
        a(o);
        continue;
      }
      let c = zg(e > 0 ? l[u(o, e - 1)] : null, e < r ? l[u(o, e)] : null);
      if (!c) {
        a(o);
        continue;
      }
      if (t.perCellTiling) {
        k(e, o, 1, c.ownerCell);
        continue;
      }
      (i && (i.side !== c.side || i.ownerCell !== c.ownerCell) && a(o),
        (i ||= { startX: o, ownerCell: c.ownerCell, side: c.side }));
    }
    a(n);
  }
  if (h.size || g.size || p.size || m.size) {
    let e = Math.max(0.2, i * 0.18, t.wallThickness * 1.5),
      s = Math.min(0.12, t.wallHeight * 0.042),
      d = Math.max(t.wallThickness * 0.8, 0.13),
      f = (e, t) => (e >= 0 && e < n && t >= 0 && t < r ? l[u(e, t)] : null),
      y = (e, t) =>
        t < 0 || t >= r
          ? !1
          : h.has(e * r + t) || p.has(e * r + t)
            ? !0
            : !_.has(e * r + t) &&
              !!zg(e > 0 ? l[u(e - 1, t)] : null, e < n ? l[u(e, t)] : null),
      b = (e, t) =>
        t < 0 || t >= n
          ? !1
          : g.has(e * n + t) || m.has(e * n + t)
            ? !0
            : !v.has(e * n + t) &&
              !!zg(e > 0 ? l[u(t, e - 1)] : null, e < r ? l[u(t, e)] : null),
      x = new Set(),
      S = (t, r, i, s) => {
        let l = t + r * (n + 1);
        x.has(l) ||
          (x.add(l),
          c.push(
            $(
              `column`,
              e,
              i,
              e,
              a(t),
              i / 2,
              o(r),
              s?.id ?? `level`,
              `pcol:${t}:${r}`,
            ),
          ));
      };
    for (let e of h) {
      if (p.has(e)) continue;
      let m = Math.floor(e / r),
        h = e - m * r,
        g = m > 0 ? l[u(m - 1, h)] : null,
        _ = m < n ? l[u(m, h)] : null;
      if (zg(g, _)) continue;
      let v = g ?? _,
        b = v?.height ?? t.wallHeight;
      c.push(
        $(
          Rg(v),
          t.wallThickness,
          b,
          i,
          a(m),
          b / 2,
          o(h) + i / 2,
          v?.id ?? `level`,
          `pwall:V:${m}:${h}`,
        ),
      );
      let x = f(m - 1, h),
        C = f(m, h);
      (x &&
        c.push(
          $(
            `trim`,
            d,
            s,
            i,
            a(m) - d / 2,
            s / 2,
            o(h) + i / 2,
            x.id,
            `ptrim:V:${m}:L:${h}`,
          ),
        ),
        C &&
          c.push(
            $(
              `trim`,
              d,
              s,
              i,
              a(m) + d / 2,
              s / 2,
              o(h) + i / 2,
              C.id,
              `ptrim:V:${m}:R:${h}`,
            ),
          ),
        y(m, h - 1) || S(m, h, b, v),
        y(m, h + 1) || S(m, h + 1, b, v));
    }
    for (let e of g) {
      if (m.has(e)) continue;
      let f = Math.floor(e / n),
        p = e - f * n,
        h = f > 0 ? l[u(p, f - 1)] : null,
        g = f < r ? l[u(p, f)] : null;
      if (zg(h, g)) continue;
      let _ = h ?? g,
        v = _?.height ?? t.wallHeight;
      c.push(
        $(
          Rg(_),
          i,
          v,
          t.wallThickness,
          a(p) + i / 2,
          v / 2,
          o(f),
          _?.id ?? `level`,
          `pwall:H:${f}:${p}`,
        ),
      );
      let y =
          p >= 0 && p < n && f - 1 >= 0 && f - 1 < r ? l[u(p, f - 1)] : null,
        x = p >= 0 && p < n && f >= 0 && f < r ? l[u(p, f)] : null;
      (y &&
        c.push(
          $(
            `trim`,
            i,
            s,
            d,
            a(p) + i / 2,
            s / 2,
            o(f) - d / 2,
            y.id,
            `ptrim:H:${f}:N:${p}`,
          ),
        ),
        x &&
          c.push(
            $(
              `trim`,
              i,
              s,
              d,
              a(p) + i / 2,
              s / 2,
              o(f) + d / 2,
              x.id,
              `ptrim:H:${f}:S:${p}`,
            ),
          ),
        b(f, p - 1) || S(p, f, v, _),
        b(f, p + 1) || S(p + 1, f, v, _));
    }
  }
  (t.placeProps &&
    (i_(
      e,
      c,
      l,
      u,
      { W: n, D: r, cs: i, lineX: a, lineZ: o },
      b,
      x,
      t.wallHeight,
    ),
    a_(c, l, u, { W: n, D: r, cs: i, lineX: a, lineZ: o })),
    t.placeColumns &&
      r_(e, c, l, u, { W: n, D: r, cs: i, lineX: a, lineZ: o }, t),
    t.structuralBreakup &&
      s_(e, c, l, u, { W: n, D: r, cs: i, lineX: a, lineZ: o }, t, b, x),
    t.floorCeilingDetail &&
      c_(e, c, l, u, { W: n, D: r, cs: i, lineX: a, lineZ: o }, t));
  let A = new Set();
  for (let e of c) {
    let t = String(e.userData.layoutPieceId);
    if (!t.startsWith(`column:`)) continue;
    let r = t.split(`:`),
      i = Number(r[r.length - 1]),
      a = Number(r[r.length - 2]);
    Number.isFinite(a) && Number.isFinite(i) && A.add(a + i * (n + 1));
  }
  let { framedV: j, framedH: M } = m_(c, l, u, {
    W: n,
    D: r,
    cs: i,
    lineX: a,
    lineZ: o,
    wallThickness: t.wallThickness,
    wallHeight: t.wallHeight,
    params: t,
    structuralBreakup: t.structuralBreakup,
    columnKeys: A,
    ceilEmbed: w,
    hasWall: S,
    openV: _,
    openH: v,
  });
  if (p.size || m.size) {
    let e = Math.max(Math.max(0.2, i * 0.18), t.wallThickness * 1.3),
      s = Math.max(t.wallThickness * 1.7, e + t.wallThickness * 0.5),
      d = i + i * 0.06,
      f = 0.08,
      h = (e, n) =>
        Math.min(
          e?.height ?? n?.height ?? t.wallHeight,
          n?.height ?? e?.height ?? t.wallHeight,
        );
    for (let e of p) {
      if (j.has(e)) continue;
      let p = Math.floor(e / r),
        m = e - p * r,
        g = p > 0 ? l[u(p - 1, m)] : null,
        _ = p < n ? l[u(p, m)] : null,
        v = g ?? _,
        y = h(g, _),
        b = Qi(t, y);
      (c.push(
        $(
          `door`,
          s,
          b,
          d,
          a(p),
          b / 2,
          o(m) + i / 2,
          v?.id ?? `level`,
          `pdoor:V:${p}:${m}`,
        ),
      ),
        y - b > 1e-4 &&
          c.push(
            $(
              Rg(v),
              t.wallThickness,
              y - b + f,
              i,
              a(p),
              (b - f + y) / 2,
              o(m) + i / 2,
              v?.id ?? `level`,
              `pheader:V:${p}:${m}`,
            ),
          ));
    }
    for (let e of m) {
      if (M.has(e)) continue;
      let p = Math.floor(e / n),
        m = e - p * n,
        g = p > 0 ? l[u(m, p - 1)] : null,
        _ = p < r ? l[u(m, p)] : null,
        v = g ?? _,
        y = h(g, _),
        b = Qi(t, y);
      (c.push(
        $(
          `door`,
          s,
          b,
          d,
          a(m) + i / 2,
          b / 2,
          o(p),
          v?.id ?? `level`,
          `pdoor:H:${p}:${m}`,
          Math.PI / 2,
        ),
      ),
        y - b > 1e-4 &&
          c.push(
            $(
              Rg(v),
              i,
              y - b + f,
              t.wallThickness,
              a(m) + i / 2,
              (b - f + y) / 2,
              o(p),
              v?.id ?? `level`,
              `pheader:H:${p}:${m}`,
            ),
          ));
    }
  }
  if (t.lightSockets) {
    let f = new Set(),
      p = new U();
    for (let e of c) {
      let t = e.userData.procKind;
      if (t !== `column` && t !== `pillar`) continue;
      let r = Dg(e, p),
        i = s(r.x, r.z);
      d(i.x, i.z) && f.add(i.x + i.z * n);
    }
    let m = Math.max(2, Math.floor(t.arenaColumnStride));
    for (let t of e.cells) {
      if (t.kind !== `arena`) continue;
      let e = Jg(t);
      if (!(e.w < 3 || e.d < 3))
        for (let i = e.z + 1; i < e.z + e.d - 1; i += m)
          for (let a = e.x + 1; a < e.x + e.w - 1; a += m)
            a >= 0 &&
              a < n &&
              i >= 0 &&
              i < r &&
              l[u(a, i)] === t &&
              f.add(a + i * n);
    }
    o_(e, c, l, u, { W: n, D: r, cs: i, lineX: a, lineZ: o }, t, f);
  }
  return (
    y_(e, c, {
      W: n,
      D: r,
      cs: i,
      lineX: a,
      lineZ: o,
      wallHeight: t.wallHeight,
    }),
    c
  );
}
