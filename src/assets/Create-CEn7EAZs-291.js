// Create-CEn7EAZs 291 — slice
// Lines 102361-102691 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function r9(e) {
  let t = new Set(),
    n = new Map();
  return {
    push: (r, i) => {
      if (t.has(r)) {
        n.set(r, i);
        return;
      }
      (t.add(r),
        (async () => {
          try {
            let t = i;
            for (; t !== void 0;) {
              let i = t;
              t = void 0;
              try {
                await e(r, i);
              } catch (e) {
                console.error(`[saveQueue] save chain step failed:`, e);
              }
              n.has(r) && ((t = n.get(r)), n.delete(r));
            }
          } finally {
            t.delete(r);
          }
        })());
    },
    isRunning: (e) => t.has(e),
    hasPending: (e) => n.has(e),
  };
}
var i9 = 16768256,
  a9 = 4500223,
  o9 = (e) => `#${e.toString(16).padStart(6, `0`)}`,
  kve = o9(i9),
  Ave = o9(a9),
  s9 = (e) => (e < 0 ? 0 : e > 1 ? 1 : e);
function jve(e, t, n) {
  if (t <= 0) return 1;
  if (t > 1) return 0;
  if (e === `constant`) return 1;
  let r = s9(n);
  if (r >= 1) return +(t < 1);
  let i = s9((t - r) / (1 - r)),
    a = 1 - i;
  switch (e) {
    case `linear`:
      return a;
    case `sharp`:
      return a * a * a;
    default:
      return a * a * (1 + 2 * i);
  }
}
function c9(e, t, n) {
  let r = t * 4,
    i = 0;
  for (let t = 0; t < 4; t++) e.joints[r + t] === n && (i += e.weights[r + t]);
  return i;
}
function Mve(e, t, n, r) {
  let i = t * 4,
    a = e.joints,
    o = e.weights,
    s = s9(r),
    c = -1;
  for (let e = 0; e < 4; e++)
    if (a[i + e] === n && o[i + e] > 0) {
      c = e;
      break;
    }
  if (c < 0) {
    if (s <= 0) return;
    for (let e = 0; e < 4; e++)
      if (o[i + e] <= 0) {
        c = e;
        break;
      }
    if (c < 0) {
      let e = 1 / 0;
      for (let t = 0; t < 4; t++) o[i + t] < e && ((e = o[i + t]), (c = t));
    }
    ((a[i + c] = n), (o[i + c] = 0));
  }
  let l = 0;
  for (let e = 0; e < 4; e++) e !== c && o[i + e] > 0 && (l += o[i + e]);
  if (l > 1e-12) {
    o[i + c] = s;
    let e = (1 - s) / l;
    for (let t = 0; t < 4; t++)
      t !== c && (o[i + t] = o[i + t] > 0 ? o[i + t] * e : 0);
  } else {
    for (let e = 0; e < 4; e++) e !== c && (o[i + e] = 0);
    o[i + c] = 1;
  }
}
function Nve(e, t, n) {
  let {
    mode: r,
    bone: i,
    strength: a,
    opacityCap: o,
    accum: s,
    adjacency: c,
  } = n;
  if (r === `smooth` && !c)
    throw Error(`applyStamp: mode 'smooth' requires an adjacency`);
  let l = null;
  if (r === `smooth` && c) {
    l = new Map();
    for (let n of t) {
      let t = n.vertex;
      l.has(t) || l.set(t, c9(e, t, i));
      for (let n = c.offsets[t]; n < c.offsets[t + 1]; n++) {
        let t = c.neighbors[n];
        l.has(t) || l.set(t, c9(e, t, i));
      }
    }
  }
  let u = [],
    d = new Set();
  for (let n of t) {
    let t = n.vertex;
    if (t < 0 || t >= e.vertexCount) continue;
    let f = s9(n.influence) * s9(a);
    if (f <= 0) continue;
    let p = o - s[t];
    if (p <= 0) continue;
    let m = f < p ? f : p,
      h = c9(e, t, i),
      g = h;
    switch (r) {
      case `replace`:
        g = h + (1 - h) * m;
        break;
      case `add`:
        g = h + m;
        break;
      case `subtract`:
        g = h - m;
        break;
      case `smooth`: {
        let n = c,
          r = 0,
          a = 0;
        for (let o = n.offsets[t]; o < n.offsets[t + 1]; o++) {
          let t = n.neighbors[o];
          ((r += l ? (l.get(t) ?? 0) : c9(e, t, i)), a++);
        }
        if (a === 0) continue;
        g = h + (r / a - h) * m;
        break;
      }
    }
    ((s[t] += m), Mve(e, t, i, s9(g)), d.has(t) || (d.add(t), u.push(t)));
  }
  return Uint32Array.from(u);
}
function Pve(e, t = 1e-5) {
  let n = Math.floor(e.length / 3),
    r = new Uint32Array(n),
    i = new Map(),
    a = 1 / t,
    o = 0;
  for (let t = 0; t < n; t++) {
    let n = Math.round(e[t * 3] * a),
      s = Math.round(e[t * 3 + 1] * a),
      c = Math.round(e[t * 3 + 2] * a),
      l = -1;
    for (let e = -1; e <= 1 && l < 0; e++)
      for (let t = -1; t <= 1 && l < 0; t++)
        for (let r = -1; r <= 1 && l < 0; r++) {
          let a = i.get(`${n + e},${s + t},${c + r}`);
          a !== void 0 && (l = a);
        }
    (l < 0 && (l = o++), (r[t] = l), i.set(`${n},${s},${c}`, l));
  }
  return r;
}
function Fve(e, t) {
  if (e.length === 0) return [];
  let n = new Map();
  for (let r of e) {
    let e = t[r.vertex],
      i = n.get(e);
    (i === void 0 || r.influence > i) && n.set(e, r.influence);
  }
  let r = [];
  for (let e = 0; e < t.length; e++) {
    let i = n.get(t[e]);
    i !== void 0 && r.push({ vertex: e, influence: i });
  }
  return r;
}
function Ive(e, t, n) {
  let r = Array(t);
  for (let e = 0; e < t; e++) r[e] = new Set();
  let i = (e, n) => {
      e !== n &&
        (e < 0 || n < 0 || e >= t || n >= t || (r[e].add(n), r[n].add(e)));
    },
    a = Math.floor(e ? e.length / 3 : t / 3);
  for (let t = 0; t < a; t++) {
    let n = e ? e[t * 3] : t * 3,
      r = e ? e[t * 3 + 1] : t * 3 + 1,
      a = e ? e[t * 3 + 2] : t * 3 + 2;
    (i(n, r), i(r, a), i(a, n));
  }
  if (n) {
    let e = new Map();
    for (let r = 0; r < t; r++) {
      let t = n[r],
        i = e.get(t);
      i ? i.push(r) : e.set(t, [r]);
    }
    let i = Array(t);
    for (let t of e.values()) {
      let e = new Set();
      for (let n of t) for (let t of r[n]) e.add(t);
      for (let n of t) e.delete(n);
      for (let n of t) i[n] = e;
    }
    r = i;
  }
  let o = new Uint32Array(t + 1),
    s = 0;
  for (let e = 0; e < t; e++) ((o[e] = s), (s += r[e].size));
  o[t] = s;
  let c = new Uint32Array(s),
    l = 0;
  for (let e = 0; e < t; e++) {
    let t = Array.from(r[e]).sort((e, t) => e - t);
    for (let e of t) c[l++] = e;
  }
  return { offsets: o, neighbors: c };
}
var Lve = [
    [`_l`, `_r`],
    [`_L`, `_R`],
    [`.l`, `.r`],
    [`.L`, `.R`],
    [`-l`, `-r`],
    [`-L`, `-R`],
  ],
  Rve = [
    [`Left`, `Right`],
    [`LEFT`, `RIGHT`],
    [`left`, `right`],
  ],
  zve = [
    [`l_`, `r_`],
    [`L_`, `R_`],
  ];
function Bve(e) {
  for (let [t, n] of Lve) {
    if (e.endsWith(t)) return e.slice(0, -t.length) + n;
    if (e.endsWith(n)) return e.slice(0, -n.length) + t;
  }
  for (let [t, n] of Rve) {
    let r = e.indexOf(t),
      i = e.indexOf(n);
    if (r >= 0 && (i < 0 || r < i))
      return e.slice(0, r) + n + e.slice(r + t.length);
    if (i >= 0) return e.slice(0, i) + t + e.slice(i + n.length);
  }
  for (let [t, n] of zve) {
    if (e.startsWith(t)) return n + e.slice(t.length);
    if (e.startsWith(n)) return t + e.slice(n.length);
  }
  return null;
}
function Vve(e) {
  let t = new Map();
  for (let n = 0; n < e.length; n++) t.has(e[n]) || t.set(e[n], n);
  let n = new Int32Array(e.length).fill(-1);
  for (let r = 0; r < e.length; r++) {
    let i = Bve(e[r]);
    if (i === null || i === e[r]) continue;
    let a = t.get(i);
    a !== void 0 && a !== r && (n[r] = a);
  }
  return n;
}
function l9(e, t) {
  let n = t.length,
    r = new Uint16Array(n * 4),
    i = new Float32Array(n * 4);
  for (let a = 0; a < n; a++) {
    let n = t[a] * 4,
      o = a * 4;
    for (let t = 0; t < 4; t++)
      ((r[o + t] = e.joints[n + t]), (i[o + t] = e.weights[n + t]));
  }
  return { vertices: Uint32Array.from(t), joints: r, weights: i };
}
function Hve(e, t) {
  for (let n = 0; n < t.vertices.length; n++) {
    let r = t.vertices[n] * 4,
      i = n * 4;
    for (let n = 0; n < 4; n++)
      ((e.joints[r + n] = t.joints[i + n]),
        (e.weights[r + n] = t.weights[i + n]));
  }
}
function u9(e, t, n) {
  let r = e.getAttribute(t);
  if (!r)
    throw Error(
      `skinBuffers: SkinnedMesh "${n}" has no ${t} attribute — it is not skinned`,
    );
  return r;
}
function Uve(e, t, n) {
  let r = t.get(e);
  if (!r || typeof r.nodes != `number`)
    throw Error(
      `skinBuffers: "${e.name || `(unnamed)`}" has no glTF node association — pass gltf.parser.associations and gltf.parser.json.nodes from the SAME load as this scene`,
    );
  let i = r.nodes;
  return n[i]?.name || `joint_${i}`;
}
function d9(e, t, n) {
  return e.map((e) => Uve(e, t, n));
}
function Wve(e, t, n) {
  for (let r = 0; r < 4; r++)
    for (let i = r + 1; i < 4; i++)
      e[n + i] === e[n + r] &&
        ((t[n + r] += t[n + i]), (t[n + i] = 0), (e[n + i] = 0));
}
