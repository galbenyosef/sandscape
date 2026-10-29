// SceneEditor-NC7_0wmu 60 — userdata
// Lines 31425-31774 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function $h(e, t, n) {
  let { parent: r, token: i } = Qh(e, t);
  if (Array.isArray(r)) {
    if (!/^(0|[1-9]\d*)$/.test(i))
      throw Error(`Invalid array index in JSON Pointer: ${t}`);
    let e = Number(i);
    if (e < 0 || e >= r.length)
      throw Error(`Array index is out of range: ${t}`);
    r[e] = n;
    return;
  }
  if (!Object.prototype.hasOwnProperty.call(r, i))
    throw Error(`JSON Pointer target does not exist: ${t}`);
  r[i] = n;
}
function eg(e, t, n) {
  let { parent: r, token: i } = Qh(e, t);
  if (Array.isArray(r)) {
    if (i === `-`) {
      r.push(n);
      return;
    }
    if (!/^(0|[1-9]\d*)$/.test(i))
      throw Error(`Invalid array index in JSON Pointer: ${t}`);
    let e = Number(i);
    if (e < 0 || e > r.length)
      throw Error(`Array insertion index is out of range: ${t}`);
    r.splice(e, 0, n);
    return;
  }
  if (Object.prototype.hasOwnProperty.call(r, i))
    throw Error(`JSON Pointer target already exists: ${t}`);
  r[i] = n;
}
function tg(e, t) {
  let { parent: n, token: r } = Qh(e, t);
  if (Array.isArray(n)) {
    if (!/^(0|[1-9]\d*)$/.test(r))
      throw Error(`Invalid array index in JSON Pointer: ${t}`);
    let e = Number(r);
    if (e < 0 || e >= n.length)
      throw Error(`Array removal index is out of range: ${t}`);
    return n.splice(e, 1)[0];
  }
  if (!Object.prototype.hasOwnProperty.call(n, r))
    throw Error(`JSON Pointer target does not exist: ${t}`);
  let i = n[r];
  return (delete n[r], i);
}
var ng = class extends Ks {
  updatable = !0;
  pointer;
  operation;
  oldValue;
  newValue;
  constructor(e, t, n, r, i, a = `set`) {
    (super(e, t),
      (this.type = `SetUserDataPathCommand`),
      (this.name = `${a === `remove` ? `Remove` : a === `add` ? `Add` : `Set`} userData${r}`),
      (this.object = n),
      (this.attributeName = `${a}:${r}`),
      (this.pointer = r),
      (this.operation = a),
      (this.oldValue = Kh(Zh(n.userData, r))),
      (this.newValue = Kh(i)),
      a !== `set` && (this.updatable = !1));
  }
  execute() {
    (this.operation === `add`
      ? eg(this.object.userData, this.pointer, Kh(this.newValue))
      : this.operation === `remove`
        ? tg(this.object.userData, this.pointer)
        : $h(this.object.userData, this.pointer, Kh(this.newValue)),
      this.onObjectChange(this.object));
  }
  undo() {
    (this.operation === `add`
      ? tg(this.object.userData, this.pointer)
      : this.operation === `remove`
        ? eg(this.object.userData, this.pointer, Kh(this.oldValue))
        : $h(this.object.userData, this.pointer, Kh(this.oldValue)),
      this.onObjectChange(this.object));
  }
  update(e) {
    this.newValue = Kh(e.newValue);
  }
};
function rg(e) {
  return !!(e.userData?.isAssetReference || e.userData?.modelPath);
}
function ig(e) {
  return e.userData?.editorOnly === !0;
}
function ag(e) {
  let t = [],
    n = e.environment,
    r = e.background,
    i = n instanceof me && n.userData?.editorManaged === !0,
    a = r instanceof me && r.userData?.editorManaged === !0;
  e.traverse((n) => {
    if (n === e || !ig(n) || !n.parent) return;
    let r = n.parent;
    for (; r && r !== e;) {
      if (ig(r)) return;
      r = r.parent;
    }
    t.push({ node: n, parent: n.parent, index: n.parent.children.indexOf(n) });
  });
  for (let e of t) e.parent.remove(e.node);
  (i && (e.environment = null), a && (e.background = null));
  try {
    return e.toJSON();
  } finally {
    ((e.environment = n), (e.background = r));
    let i = new Map();
    for (let e of t) {
      let t = i.get(e.parent) ?? [];
      (t.push(e), i.set(e.parent, t));
    }
    for (let [e, t] of i) {
      t.sort((e, t) => e.index - t.index);
      for (let n of t)
        (e.children.splice(Math.min(n.index, e.children.length), 0, n.node),
          (n.node.parent = e));
    }
  }
}
function og(e, t = {}) {
  e.traverse((e) => {
    if (typeof e.dispose == `function` && e.constructor.name === `SplatMesh`) {
      e.dispose();
      return;
    }
    if (e instanceof G) {
      e.geometry?.dispose();
      let n = Array.isArray(e.material)
        ? e.material
        : e.material
          ? [e.material]
          : [];
      for (let e of n)
        (t.keepShared && e.userData?.sandscapeShared) || e.dispose();
    }
  });
}
function sg(e) {
  let t = 1779033703 ^ e.length;
  for (let n = 0; n < e.length; n++)
    ((t = Math.imul(t ^ e.charCodeAt(n), 3432918353)),
      (t = (t << 13) | (t >>> 19)));
  return (
    (t = Math.imul(t ^ (t >>> 16), 2246822507)),
    (t = Math.imul(t ^ (t >>> 13), 3266489909)),
    (t ^= t >>> 16) >>> 0
  );
}
function cg(e) {
  let t = e >>> 0;
  return function () {
    ((t |= 0), (t = (t + 1831565813) | 0));
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function lg(e) {
  return cg(sg(String(e >>> 0)));
}
function ug(e, t) {
  return cg(sg(`${e >>> 0}:${t}`));
}
function dg(e, t, n) {
  return n < t ? t : t + Math.floor(e() * (n - t + 1));
}
function fg(e, t) {
  return e() < t;
}
var pg = { common: 1, uncommon: 0.4, rare: 0.16, hero: 0.06 };
function mg(e, t = ``) {
  return sg(`${t}|${e}`) / 4294967296;
}
function hg(e, t, n = ``) {
  return mg(e, n) < (pg[t] ?? 1);
}
var gg = `min-corner`,
  _g = `min-corner`,
  vg = new U(0, 1, 0);
function yg(e) {
  return e === `min-corner` || e === `bottom-center`;
}
function bg(e) {
  return !!e.userData?.dims;
}
function xg(e) {
  let t = e.userData?.pivot;
  return yg(t) ? t : null;
}
function Sg(e, t, n, r, i = new U()) {
  return e === `bottom-center`
    ? i.set(0, n / 2, 0)
    : i.set(t / 2, n / 2, r / 2);
}
function Cg(e, t, n, r, i, a, o, s = 0, c = new U()) {
  return (
    Sg(e, i, a, o, c),
    s && c.applyAxisAngle(vg, s),
    c.set(t - c.x, n - c.y, r - c.z)
  );
}
function wg(e, t, n, r, i, a, o = 0, s = new U()) {
  return Cg(`min-corner`, e, t, n, r, i, a, o, s);
}
function Tg(e, t = new U()) {
  return Sg(e, 1, 1, 1, t);
}
function Eg(e, t, n = new U()) {
  return e === `bottom-center`
    ? n.set(-(t.min.x + t.max.x) / 2, -t.min.y, -(t.min.z + t.max.z) / 2)
    : n.set(-t.min.x, -t.min.y, -t.min.z);
}
function Dg(e, t = new U()) {
  let n = e.userData?.dims;
  return n
    ? (Sg(
        xg(e) ?? `min-corner`,
        n.w * e.scale.x,
        n.h * e.scale.y,
        n.d * e.scale.z,
        t,
      )
        .applyQuaternion(e.quaternion)
        .add(e.position),
      e.parent && e.parent.type !== `Scene` ? e.parent.localToWorld(t) : t)
    : e.getWorldPosition(t);
}
function Og(e, t, n) {
  let r = new wt().setFromObject(t),
    i =
      !r.isEmpty() &&
      Number.isFinite(r.min.x) &&
      Number.isFinite(r.min.y) &&
      Number.isFinite(r.min.z),
    a = bg(e);
  a ? Tg(n, t.position) : i ? Eg(n, r, t.position) : t.position.set(0, 0, 0);
  let o = !1;
  if (a || i) {
    let i = xg(e);
    if (i !== n) {
      let s = i ? (a ? Tg(i) : Eg(i, r)) : new U();
      (e.position.add(
        s.sub(t.position).multiply(e.scale).applyQuaternion(e.quaternion),
      ),
        (e.userData.pivot = n),
        (o = !0));
    }
  }
  return (
    (e.userData.contentOffset = t.position.toArray()),
    { box: r, boxUsable: i, hasDims: a, stamped: o }
  );
}
var kg = {
  floor: 7303023,
  ceiling: 5855577,
  wall: 10132122,
  arena_wall: 10722444,
  corridor_wall: 9213347,
  door: 11887901,
  wall_panel: 7305866,
  light_socket: 13615210,
  column: 5593180,
  beam: 5132629,
  trim: 6053731,
  pillar: 5593180,
  hero_panel: 8221792,
  decal: 12169892,
  floor_insert: 4474956,
  default: 8947848,
};
function Ag(e) {
  let t = [],
    n = [],
    r = [],
    i = (e, t) => {
      for (let n = 0; n < t.length; n++) e.push(t[n]);
    };
  for (let a of e) {
    let e = a.index ? a.toNonIndexed() : a;
    (i(t, e.attributes.position.array),
      i(n, e.attributes.normal.array),
      i(r, e.attributes.uv.array),
      e !== a && e.dispose(),
      a.dispose());
  }
  let a = new ct();
  return (
    a.setAttribute(`position`, new et(t, 3)),
    a.setAttribute(`normal`, new et(n, 3)),
    a.setAttribute(`uv`, new et(r, 2)),
    a.computeBoundingBox(),
    a.computeBoundingSphere(),
    a
  );
}
function jg(e) {
  return Ag(
    e.map((e) => {
      let t = new Lt(e.w, e.h, e.d);
      return (t.translate(e.cx, e.cy, e.cz), t);
    }),
  );
}
function Mg(e, t, n) {
  let r = e,
    i = n,
    a = Math.min(Math.max(i * 0.16, 0.15), i * 0.4),
    o = Math.min(Math.max(t * 0.16, 0.1), t * 0.5),
    s = t - o,
    c = -o / 2,
    l = t / 2 - o / 2,
    u = i / 2 - a / 2;
  return jg([
    { w: r, h: s, d: a, cx: 0, cy: c, cz: -u },
    { w: r, h: s, d: a, cx: 0, cy: c, cz: u },
    { w: r, h: o, d: i, cx: 0, cy: l, cz: 0 },
  ]);
}
function Ng(e, t, n) {
  let r = t * 0.4,
    i = e * 0.62,
    a = n * 0.62,
    o = t * 0.62;
  return jg([
    { w: e, h: r, d: n, cx: 0, cy: t / 2 - r / 2, cz: 0 },
    { w: i, h: o, d: a, cx: 0, cy: -t / 2 + o / 2, cz: 0 },
  ]);
}
function Pg(e, t, n) {
  let r = Math.min(0.16, t * 0.06),
    i = e * 1.25,
    a = n * 1.25,
    o = Math.max(0.1, t - r * 2);
  return jg([
    { w: i, h: r, d: a, cx: 0, cy: -t / 2 + r / 2, cz: 0 },
    { w: e, h: o, d: n, cx: 0, cy: 0, cz: 0 },
    { w: i, h: r, d: a, cx: 0, cy: t / 2 - r / 2, cz: 0 },
  ]);
}
