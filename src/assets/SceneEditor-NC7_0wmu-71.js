// SceneEditor-NC7_0wmu 71 — push
// Lines 34988-35312 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function ey(e, t) {
  let n = e.len * t.cs;
  return e.axis === `V`
    ? { x: t.lineX(e.line), z: t.lineZ(e.start) + n / 2 }
    : { x: t.lineX(e.start) + n / 2, z: t.lineZ(e.line) };
}
function ty(e) {
  let t = [];
  for (let n = e.run.start; n < e.run.start + e.run.len; n++)
    t.push({
      op: e.source === `auto` ? `open` : `erase`,
      edge: { axis: e.run.axis, line: e.run.line, idx: n },
    });
  return t;
}
function ny(e, t) {
  let n = e;
  for (let e of t)
    n =
      e.op === `open`
        ? Fa(n, e.edge)
        : e.op === `erase`
          ? Ia(n, e.edge)
          : Pa(n, e.edge);
  return n;
}
function ry(e, t) {
  return (
    t.axis === e.axis &&
    t.line === e.line &&
    t.idx >= e.start &&
    t.idx < e.start + e.len
  );
}
function iy(e, t, n, r = {}) {
  let { frame: i } = e,
    a = [],
    o = [],
    s = [];
  for (let a of n) {
    let n = x_(a.object);
    if (
      !n ||
      (a.object.position.set(a.fromX, a.object.position.y, a.fromZ),
      a.object.updateMatrixWorld(!0),
      t(a.object),
      a.object.userData.locked && !r.duplicate)
    )
      continue;
    let o = ey(n.run, i),
      c = o.x + (a.toX - a.fromX),
      l = o.z + (a.toZ - a.fromZ),
      u = Ma(e.storeZones, (c - i.originX) / i.cs, (l - i.originZ) / i.cs);
    !u || ry(n.run, u) || s.push({ door: n, to: u, object: a.object });
  }
  if (!s.length) return null;
  let c = [];
  if (!r.duplicate) for (let e of s) (c.push(...ty(e.door)), o.push(e.object));
  for (let e of s)
    (c.push({ op: `door`, edge: e.to }),
      a.push({ pieceId: `pdoor:${e.to.axis}:${e.to.line}:${e.to.idx}` }));
  return { edits: c, evict: o, landed: a, count: s.length };
}
function ay(e, t, n, r = {}) {
  let i = dy();
  if (!i) return null;
  let a = iy(i, t, n, r);
  if (!a) return null;
  let o = py(
    e,
    t,
    i,
    {
      layoutZones: ny(i.layoutZones, a.edits),
      storeZones: ny(i.storeZones, a.edits),
    },
    a.evict,
    sy(r.duplicate, a.count),
  );
  return o ? { command: o, landed: a.landed } : null;
}
function oy(e, t) {
  let { frame: n } = e,
    r = [],
    i = [],
    a = 0,
    o = new Set(e.storeZones.doors ?? []);
  for (let t of t_({ ...e.layout, zones: e.storeZones }))
    for (let e of f_(t)) o.add(e);
  for (let e of t) {
    let t = x_(e);
    if (!t) continue;
    let { axis: s, line: c, start: l, len: u } = t.run,
      d = s === `V` ? n.D : n.W,
      f = null;
    for (let e = 1; e <= d && !f; e++)
      for (let t of [l + u - 1 + e, l - e])
        if (!(t < 0 || t >= d) && !o.has(Aa(s, c, t))) {
          f = { axis: s, line: c, idx: t };
          break;
        }
    if (!f) {
      a++;
      continue;
    }
    (o.add(Aa(f.axis, f.line, f.idx)),
      r.push({ op: `door`, edge: f }),
      i.push({ pieceId: `pdoor:${f.axis}:${f.line}:${f.idx}` }));
  }
  return r.length || a ? { edits: r, landed: i, skipped: a } : null;
}
function sy(e, t) {
  let n = t > 1;
  return e
    ? n
      ? `Duplicate Doors`
      : `Duplicate Door`
    : n
      ? `Move Doors`
      : `Move Door`;
}
function cy(e, t, n) {
  let r = dy();
  if (!r) return null;
  let i = [],
    a = [];
  for (let e of n) {
    let t = x_(e);
    !t || e.userData.locked || (i.push(...ty(t)), a.push(e));
  }
  return a.length
    ? py(
        e,
        t,
        r,
        { layoutZones: ny(r.layoutZones, i), storeZones: ny(r.storeZones, i) },
        a,
        a.length > 1 ? `Remove ${a.length} Doors` : `Remove Door`,
      )
    : null;
}
function ly(e) {
  let t = [],
    n = [];
  for (let r of e) (x_(r) ? t : n).push(r);
  return { doors: t, rest: n };
}
function uy(e, t) {
  let n = null;
  return (
    e.traverse((e) => {
      n || (e.userData?.layoutPieceId === t.pieceId && (n = e));
    }),
    n
  );
}
function dy() {
  let e = X.getState(),
    t = e.procLayout;
  if (!t) return null;
  let n = Qg(t.params),
    r = e.procZoneMap;
  for (let e of [t.zones, r])
    if (e && (e.width !== n.W || e.depth !== n.D)) return null;
  let i = (e) => ka(wa(e ?? null, n.W, n.D));
  return {
    layout: t,
    frame: n,
    layoutZones: i(t.zones),
    storeZones: i(r ?? t.zones),
    storeRaw: r,
    hadLayoutZones: !!t.zones,
  };
}
var fy = class extends Ks {
  apply;
  revert;
  constructor(e, t, n, r) {
    (super(e, t),
      (this.apply = n),
      (this.revert = r),
      (this.type = `SyncGridEditCommand`),
      (this.name = `Sync Grid Edit`));
  }
  execute() {
    this.apply();
  }
  undo() {
    this.revert();
  }
};
function py(e, t, n, r, i, a) {
  let { layout: o, storeRaw: s } = n,
    c = i.map((n) => new Vh(e, t, n)),
    l = { ...o, zones: r.layoutZones },
    u;
  for (let e of c) e.execute();
  try {
    u = qv(e, t, l, o);
  } finally {
    for (let e = c.length - 1; e >= 0; e--) c[e].undo();
  }
  if (!c.length && !u.changesSceneGraph) return null;
  let d = new Uh(e, t, [
    new fy(
      e,
      t,
      () => {
        let e = X.getState();
        (e.setProcLayout(l), e.setProcZoneMap(r.storeZones));
      },
      () => {
        let e = X.getState();
        (e.setProcLayout(o), e.setProcZoneMap(s));
      },
    ),
    ...c,
    u,
  ]);
  return ((d.changesSceneGraph = !0), (d.updatable = !1), (d.name = a), d);
}
function my(e, t, n) {
  let r = dy();
  if (!r) return null;
  let i = { duplicate: n.duplicate },
    a = n.markerDrags.length ? by(r, t, n.markerDrags, i) : null,
    o = n.doorDrags.length ? iy(r, t, n.doorDrags, i) : null;
  if (!a && !o) return null;
  let s = { copy: !!n.duplicate },
    c = (e) => {
      let t = e;
      return (a && (t = Oa(t, a.moves, s)), o && (t = ny(t, o.edits)), t);
    },
    l =
      a && o
        ? n.duplicate
          ? `Duplicate Level Pieces`
          : `Move Level Pieces`
        : a
          ? Cy(n.duplicate, a.moves.length)
          : sy(n.duplicate, o.count),
    u = py(
      e,
      t,
      r,
      { layoutZones: c(r.layoutZones), storeZones: c(r.storeZones) },
      o?.evict ?? [],
      l,
    );
  return u
    ? { command: u, markerLanded: a?.landed ?? [], doorLanded: o?.landed ?? [] }
    : null;
}
function hy(e, t, n) {
  let r = dy();
  if (!r) return null;
  let i = xy(r, n),
    a = oy(r, n),
    o = (i?.moves.length ?? 0) + (a?.edits.length ?? 0),
    s = (i?.skipped ?? 0) + (a?.skipped ?? 0),
    c = {
      command: null,
      markerLanded: [],
      doorLanded: [],
      placed: 0,
      skipped: s,
    };
  if (!o) return c;
  let l = { copy: !0 },
    u = (e) => {
      let t = e;
      return (i && (t = Oa(t, i.moves, l)), a && (t = ny(t, a.edits)), t);
    },
    d = py(
      e,
      t,
      r,
      { layoutZones: u(r.layoutZones), storeZones: u(r.storeZones) },
      [],
      o > 1 ? `Duplicate ${o} Objects` : `Duplicate Object`,
    );
  return d
    ? {
        command: d,
        markerLanded: i?.landed ?? [],
        doorLanded: a?.landed ?? [],
        placed: o,
        skipped: s,
      }
    : c;
}
function gy(e) {
  let t = [],
    n = [];
  for (let r of e) (S_(r) || C_(r) ? t : n).push(r);
  return { grid: t, rest: n };
}
function _y(e) {
  let t = e.userData?.markerCells;
  if (!Array.isArray(t)) return [];
  let n = [];
  for (let e of t) {
    let t = Sa(String(e));
    t && n.push(t);
  }
  return n;
}
function vy(e, t, n) {
  let r = Math.min(...e.map((e) => e.x)),
    i = Math.max(...e.map((e) => e.x)),
    a = Math.min(...e.map((e) => e.z)),
    o = Math.max(...e.map((e) => e.z));
  return {
    x: n.lineX(r) + ((i - r + 1) * n.cs) / 2 + t[0],
    y: $g + t[1],
    z: n.lineZ(a) + ((o - a + 1) * n.cs) / 2 + t[2],
  };
}
function yy(e, t) {
  return (
    Math.abs(e[0] - t[0]) < 1e-4 &&
    Math.abs(e[1] - t[1]) < 1e-4 &&
    Math.abs(e[2] - t[2]) < 1e-4
  );
}
