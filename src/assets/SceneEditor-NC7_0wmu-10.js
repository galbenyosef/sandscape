// SceneEditor-NC7_0wmu 10 — cells
// Lines 5511-5838 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Sa(e) {
  let t = e.split(`,`);
  if (t.length !== 2) return null;
  let n = Number(t[0]),
    r = Number(t[1]);
  return Number.isFinite(n) && Number.isFinite(r) ? { x: n, z: r } : null;
}
function Ca(e, t) {
  return { width: e, depth: t, cells: Array(Math.max(1, e * t)).fill(0) };
}
function wa(e, t, n) {
  if (!e) return Ca(t, n);
  if (e.width === t && e.depth === n) return e;
  let r = Ca(t, n),
    i = Math.min(t, e.width),
    a = Math.min(n, e.depth);
  for (let n = 0; n < a; n++)
    for (let a = 0; a < i; a++) r.cells[a + n * t] = e.cells[a + n * e.width];
  let o = (e) => {
    let r = Sa(e);
    return !!r && r.x >= 0 && r.x < t && r.z >= 0 && r.z < n;
  };
  for (let t of ra) {
    let n = aa[t],
      i = (e[n] ?? []).filter(o);
    (i.length && (r[n] = i), xa(e, r, t, (e) => !o(e), !1));
  }
  let s = (e) => {
      if (!e?.length) return;
      let r = e.filter((e) => {
        let r = ja(e);
        return r
          ? r.axis === `V`
            ? r.line >= 0 && r.line <= t && r.idx >= 0 && r.idx < n
            : r.line >= 0 && r.line <= n && r.idx >= 0 && r.idx < t
          : !1;
      });
      return r.length ? r : void 0;
    },
    c = s(e.walls),
    l = s(e.doors),
    u = s(e.opens);
  return (c && (r.walls = c), l && (r.doors = l), u && (r.opens = u), r);
}
function Ta(e) {
  return (
    !e ||
    (e.cells.every((e) => e === 0) &&
      !e.walls?.length &&
      !e.doors?.length &&
      !e.opens?.length &&
      ra.every((t) => !e[aa[t]]?.length))
  );
}
function Ea(e) {
  return Ca(e.width, e.depth);
}
function Da(e) {
  let t = e.cells.some((e) => e === 99);
  if (!t && !e.opens?.length) return e;
  let n = { ...e };
  return (
    t && (n.cells = e.cells.map((e) => (e === 99 ? 0 : e))),
    e.opens?.length && delete n.opens,
    n
  );
}
function Oa(e, t, n = {}) {
  if (!t.length) return e;
  let r = { ...e };
  for (let i of ra) {
    let a = t.filter((e) => e.zone === i);
    if (!a.length) continue;
    let o = new Set(e[aa[i]] ?? []),
      s = { ...(e[oa[i]] ?? {}) },
      c = { ...(e[sa[i]] ?? {}) },
      l = [];
    for (let e of a) {
      if (e.from.length !== e.to.length)
        throw Error(
          "moveMarkerTags: `from` and `to` must be the same cells, index-paired",
        );
      let t = e.from.length === 1 ? e.offset : void 0;
      e.from.forEach((r, i) => {
        (l.push({
          key: e.to[i],
          deg: fa(e.facing ?? s[r] ?? 0),
          off: t ?? c[r] ?? ga,
        }),
          !n.copy && (o.delete(r), delete s[r], delete c[r]));
      });
    }
    for (let { key: t, deg: n, off: r } of l) {
      let i = Sa(t);
      !i ||
        i.x < 0 ||
        i.x >= e.width ||
        i.z < 0 ||
        i.z >= e.depth ||
        (o.add(t),
        n === 0 ? delete s[t] : (s[t] = n),
        _a(r) ? delete c[t] : (c[t] = [r[0], r[1], r[2]]));
    }
    ((r[aa[i]] = Array.from(o)), (r[oa[i]] = s), (r[sa[i]] = c));
  }
  return r;
}
function ka(e) {
  if (!e) return e;
  let t = new Map(ra.map((e) => [ea[e], e]));
  if (!e.cells.some((e) => t.has(e))) return e;
  let { width: n, depth: r } = e,
    i = e.cells,
    a = i.slice(),
    o = new Map(ra.map((t) => [t, new Set(e[aa[t]] ?? [])]));
  for (let e = 0; e < r; e++)
    for (let r = 0; r < n; r++) {
      let a = t.get(i[r + e * n]);
      a && o.get(a).add(ca(r, e));
    }
  let s = new Uint8Array(n * r);
  for (let e = 0; e < r; e++)
    for (let o = 0; o < n; o++) {
      let c = o + e * n;
      if (s[c] || !t.has(i[c])) continue;
      let l = [],
        u = [c];
      s[c] = 1;
      let d = [];
      for (; u.length;) {
        let e = u.pop();
        l.push(e);
        let a = e % n,
          o = (e - a) / n;
        for (let [e, c] of [
          [a - 1, o],
          [a + 1, o],
          [a, o - 1],
          [a, o + 1],
        ]) {
          if (e < 0 || e >= n || c < 0 || c >= r) continue;
          let a = e + c * n;
          t.has(i[a]) ? s[a] || ((s[a] = 1), u.push(a)) : d.push(a);
        }
      }
      let f = 0,
        p = 0;
      for (let e of d) {
        let t = i[e];
        if (za(t)) {
          if (f !== 0 && f !== t) {
            p = -1;
            break;
          }
          ((f = t), p++);
        }
      }
      let m = p * 2 > d.length ? f : 0;
      for (let e of l) a[e] = m;
    }
  let c = { ...e, cells: a };
  for (let e of ra) c[aa[e]] = Array.from(o.get(e));
  return c;
}
function Aa(e, t, n) {
  return `${e}:${t}:${n}`;
}
function ja(e) {
  let t = e.split(`:`);
  if (t.length !== 3) return null;
  let n = t[0],
    r = Number(t[1]),
    i = Number(t[2]);
  return (n !== `V` && n !== `H`) || !Number.isFinite(r) || !Number.isFinite(i)
    ? null
    : { axis: n, line: r, idx: i };
}
function Ma(e, t, n) {
  let { width: r, depth: i } = e;
  if (t < 0 || t > r || n < 0 || n > i) return null;
  let a = Math.round(t),
    o = Math.round(n);
  if (Math.abs(t - a) <= Math.abs(n - o)) {
    let e = Math.floor(n);
    return e >= 0 && e < i ? { axis: `V`, line: a, idx: e } : null;
  }
  let s = Math.floor(t);
  return s >= 0 && s < r ? { axis: `H`, line: o, idx: s } : null;
}
function Na(e, t, n) {
  let r = new Set(e ?? []);
  return (n ? r.add(t) : r.delete(t), Array.from(r));
}
function Pa(e, t) {
  let n = Aa(t.axis, t.line, t.idx);
  return {
    ...e,
    doors: Na(e.doors, n, !0),
    walls: Na(e.walls, n, !1),
    opens: Na(e.opens, n, !1),
  };
}
function Fa(e, t) {
  let n = Aa(t.axis, t.line, t.idx);
  return {
    ...e,
    opens: Na(e.opens, n, !0),
    walls: Na(e.walls, n, !1),
    doors: Na(e.doors, n, !1),
  };
}
function Ia(e, t) {
  let n = Aa(t.axis, t.line, t.idx);
  return { ...e, walls: Na(e.walls, n, !1), doors: Na(e.doors, n, !1) };
}
var La = { arena: `arena`, corridor: `corridor` },
  Ra = new Map(
    ta.flatMap((e) => {
      let t = La[e];
      return t ? [[ea[e], { id: `paint:${e}`, kind: t }]] : [];
    }),
  );
function za(e) {
  return Ra.get(e);
}
var Ba = new Set(ta.filter((e) => !La[e]).map((e) => `paint:${e}`));
function Va(e) {
  return e.some((e) => Ba.has(e.id)) ? e.filter((e) => !Ba.has(e.id)) : e;
}
function Ha(e, t, n) {
  let r = new Set(),
    i = (t, n) => t + n * e,
    a = (e, t) => n(e, t) && !r.has(i(e, t)),
    o = [];
  for (let n = 0; n < t; n++)
    for (let s = 0; s < e; s++) {
      if (!a(s, n)) continue;
      let c = 1;
      for (; s + c < e && a(s + c, n);) c++;
      let l = 1;
      grow: for (; n + l < t;) {
        for (let e = s; e < s + c; e++) if (!a(e, n + l)) break grow;
        l++;
      }
      for (let e = n; e < n + l; e++)
        for (let t = s; t < s + c; t++) r.add(i(t, e));
      o.push({ x: s, z: n, w: c, d: l });
    }
  return o;
}
function Ua(e, t) {
  let n = [];
  for (let r of ta) {
    let i = ea[r],
      a = za(i);
    if (!a) continue;
    let o = (t, n) => e.cells[t + n * e.width] === i,
      s = !1;
    for (let t = 0; t < e.cells.length && !s; t++) e.cells[t] === i && (s = !0);
    if (!s) continue;
    let c = Ha(e.width, e.depth, o);
    c.length &&
      n.push({ id: a.id, kind: a.kind, rects: c, height: Xi(t, a.kind) });
  }
  return n;
}
var Wa = {
    procSeed: 1,
    procSeedLocked: !1,
    procMode: `hybrid`,
    procGenerator: `rooms`,
    procParams: { ...$i },
    procLayout: null,
    procPreserveEdits: !0,
    procIsGenerating: !1,
    procPaintMode: !1,
    procZoneMap: null,
  },
  Ga = `sandscape-scene-editor-snap`,
  Ka = {
    snapEnabled: !1,
    snapValues: { translate: 1, rotate: 15, scale: 0.25 },
    magnetEnabled: !1,
    magnetRadius: 0.5,
  };
function qa(e) {
  return {
    translate: Math.max(0.001, e.translate),
    rotate: Math.max(0.001, e.rotate),
    scale: Math.max(0.001, e.scale),
  };
}
function Ja() {
  try {
    let e = typeof localStorage < `u` ? localStorage.getItem(Ga) : null;
    if (!e) return Ka;
    let t = JSON.parse(e);
    return {
      snapEnabled:
        typeof t.snapEnabled == `boolean` ? t.snapEnabled : Ka.snapEnabled,
      snapValues: qa({ ...Ka.snapValues, ...(t.snapValues ?? {}) }),
      magnetEnabled:
        typeof t.magnetEnabled == `boolean`
          ? t.magnetEnabled
          : Ka.magnetEnabled,
      magnetRadius:
        typeof t.magnetRadius == `number` && t.magnetRadius > 0
          ? t.magnetRadius
          : Ka.magnetRadius,
    };
  } catch {
    return Ka;
  }
}
function Ya(e) {
  try {
    typeof localStorage < `u` && localStorage.setItem(Ga, JSON.stringify(e));
  } catch {}
}
var Xa = Ja();
function Za(e) {
  return {
    snapEnabled: e.snapEnabled,
    snapValues: e.snapValues,
    magnetEnabled: e.magnetEnabled,
    magnetRadius: e.magnetRadius,
  };
}
