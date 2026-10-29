// SceneEditor-NC7_0wmu 68 — userdata
// Lines 33994-34335 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function J_(e, t, n = []) {
  let r = { ...(e ?? {}) };
  (`materialUuid` in t && (r.materialUuid = t.materialUuid),
    `uv` in t && (r.uv = t.uv));
  for (let e of n) delete r[e];
  return q_(r) ? void 0 : r;
}
function Y_(e, t) {
  !t || q_(t) ? delete e.userData[L_] : (e.userData[L_] = t);
}
function X_(e, t, n) {
  let r = U_(e);
  if (!n || q_(n)) {
    if (!r) return;
    (delete r.families[t],
      Object.keys(r.families).length === 0 && delete e.userData[I_]);
    return;
  }
  if (r) {
    r.families[t] = n;
    return;
  }
  e.userData[I_] = { version: 1, families: { [t]: n } };
}
function Z_(e, t) {
  let n = [];
  return (
    e.traverse((e) => {
      e.userData?.assetId === t && e.userData?.modelPath && n.push(e);
    }),
    n
  );
}
function Q_(e, t) {
  let n = e.material;
  n && (Array.isArray(n) ? n.forEach((e) => e && t(e)) : t(n));
}
function $_(e, t) {
  let n = null,
    r = (e) => {
      !n && e.uuid === t && (n = e);
    };
  return (
    e.traverse((e) => {
      !n && H_(e) && Q_(e, r);
    }),
    n ||
      (e.traverse((e) => {
        !n && !e.userData?.editorOnly && Q_(e, r);
      }),
      n) ||
      e.traverse((e) => {
        n || Q_(e, r);
      }),
    n
  );
}
function ev(e) {
  let t = new Map();
  return (
    e.traverse((e) => {
      e.userData?.editorOnly ||
        Q_(e, (e) => {
          t.has(e.uuid) || t.set(e.uuid, e);
        });
    }),
    [...t.values()]
  );
}
function tv(e, t) {
  ((t.userData = { ...t.userData, [z_]: !0 }),
    e.traverse((e) => {
      let n = e;
      n.isMesh && (n.material = t);
    }));
}
function nv(e) {
  return !!e?.userData?.[z_];
}
var rv = [
  `map`,
  `normalMap`,
  `roughnessMap`,
  `metalnessMap`,
  `aoMap`,
  `emissiveMap`,
  `alphaMap`,
];
function iv(e) {
  let t = Array.isArray(e.material)
    ? e.material
    : e.material
      ? [e.material]
      : [];
  for (let e of t)
    for (let t of rv) {
      let n = e[t];
      n?.isTexture &&
        ((n.wrapS === 1e3 && n.wrapT === 1e3) ||
          ((n.wrapS = $t), (n.wrapT = $t), (n.needsUpdate = !0)));
    }
}
function av(e, t) {
  let [n, r] = t.offset ?? B_.offset,
    [i, a] = t.scale ?? B_.scale;
  !Number.isFinite(n) ||
    !Number.isFinite(r) ||
    !Number.isFinite(i) ||
    !Number.isFinite(a) ||
    (n === 0 && r === 0 && i === 1 && a === 1) ||
    e.traverse((e) => {
      let t = e;
      if (!t.isMesh || !t.geometry) return;
      let o = t.geometry.getAttribute(`uv`);
      if (!o || o.itemSize < 2) return;
      let s = new Float32Array(o.count * 2);
      for (let e = 0; e < o.count; e += 1)
        ((s[e * 2] = o.getX(e) * i + n), (s[e * 2 + 1] = o.getY(e) * a + r));
      (t.geometry.setAttribute(`uv`, new Dt(s, 2)), iv(t));
    });
}
function ov(e) {
  for (let t of e.children) if (H_(t)) return t;
  return null;
}
function sv(e, t) {
  let n = new Set(),
    r = U_(e);
  if (r?.families)
    for (let e of Object.values(r.families))
      e?.materialUuid && n.add(e.materialUuid);
  e.traverse((e) => {
    let t = W_(e)?.materialUuid;
    t && n.add(t);
  });
  let i = ov(e),
    a = new Map();
  if (i)
    for (let e of Array.isArray(i.material) ? i.material : [i.material])
      e && a.set(e.uuid, e);
  let o = new Set(n);
  for (let e of a.keys()) o.delete(e);
  if (o.size > 0) {
    e.traverse((e) => {
      Q_(e, (e) => {
        o.has(e.uuid) && (a.set(e.uuid, e), o.delete(e.uuid));
      });
    });
    for (let e of t ?? [])
      e && o.has(e.uuid) && (a.set(e.uuid, e), o.delete(e.uuid));
  }
  if (
    (o.size > 0 &&
      console.warn(
        `[SceneEditor] surface override(s) reference materials that are not in this scene and cannot be preserved: ${[...o].join(`, `)}`,
      ),
    a.size === 0)
  ) {
    i && (e.remove(i), i.geometry?.dispose());
    return;
  }
  let s = [...a.entries()]
    .sort((e, t) => (e[0] < t[0] ? -1 : 1))
    .map(([, e]) => e);
  if (i) {
    i.material = s;
    return;
  }
  let c = new G(new ct(), s);
  ((c.name = `Material Library`),
    (c.visible = !1),
    (c.frustumCulled = !1),
    (c.userData[R_] = !0),
    e.add(c));
}
function cv(e) {
  return e ? JSON.parse(JSON.stringify(e)) : void 0;
}
var lv = class extends Ks {
    updatable = !0;
    target;
    next;
    before;
    remount;
    applied;
    pool = new Set();
    constructor(e, t, n, r, i, a, o) {
      if (
        (super(e, t),
        (this.type = `SetSurfaceOverrideCommand`),
        (this.target = n),
        (this.next = cv(r)),
        (this.applied = this.next),
        (this.remount = i),
        o && this.pool.add(o),
        (this.object = n.scope === `instance` ? n.object : a),
        (this.attributeName =
          n.scope === `instance`
            ? `instance:${n.object.uuid}`
            : `family:${n.assetId}`),
        (this.name =
          n.scope === `instance` ? `Set Object Surface` : `Set Asset Surface`),
        (this.before = cv(
          n.scope === `instance` ? W_(n.object) : G_(e, n.assetId),
        )),
        this.before?.materialUuid)
      ) {
        let t = $_(e, this.before.materialUuid);
        t && this.pool.add(t);
      }
      n.scope === `family` && !a && (this.updatable = !1);
    }
    affected() {
      return this.target.scope === `instance`
        ? [this.target.object]
        : Z_(this.scene, this.target.assetId);
    }
    write(e) {
      (this.target.scope === `instance`
        ? Y_(this.target.object, e)
        : X_(this.scene, this.target.assetId, e),
        sv(this.scene, this.pool));
      for (let e of this.affected()) this.remount?.(e);
      this.onObjectChange(this.object ?? this.scene);
    }
    execute() {
      this.write(cv(this.applied));
    }
    undo() {
      this.write(cv(this.before));
    }
    update(e) {
      let t = e;
      this.applied = cv(t.next);
      for (let e of t.pool) this.pool.add(e);
    }
  },
  uv = class extends Ks {
    light;
    oldSize;
    newSize;
    constructor(e, t, n, r) {
      (super(e, t),
        (this.type = `SetShadowMapSizeCommand`),
        (this.name = `Set Shadow Map Size`),
        (this.light = n),
        (this.object = n),
        (this.oldSize = n.shadow?.mapSize.x ?? 512),
        (this.newSize = r));
    }
    execute() {
      this.applySize(this.newSize);
    }
    undo() {
      this.applySize(this.oldSize);
    }
    applySize(e) {
      let t = this.light.shadow;
      t &&
        (t.mapSize.set(e, e),
        (t.map &&= (t.map.dispose(), null)),
        this.onObjectChange(this.light));
    }
  },
  dv = class extends Ks {
    updatable = !0;
    oldValue;
    newValue;
    constructor(e, t, n, r) {
      (super(e, t),
        (this.type = `SetLayerMaskCommand`),
        (this.name = `Set layer mask`),
        (this.object = n),
        (this.attributeName = `layers.mask`),
        (this.oldValue = n.layers.mask),
        (this.newValue = r >>> 0));
    }
    execute() {
      ((this.object.layers.mask = this.newValue),
        this.onObjectChange(this.object));
    }
    undo() {
      ((this.object.layers.mask = this.oldValue),
        this.onObjectChange(this.object));
    }
    update(e) {
      this.newValue = e.newValue;
    }
  };
function fv(e, t, n = {}) {
  let r = e.clone(!0);
  n.rename !== !1 && (r.name = `${e.name || e.type} Copy`);
  let i = [];
  r.traverse((e) => {
    e.userData?.modelPath && i.push(e);
  });
  for (let e of i) {
    let t = e.children.filter(
      (e) =>
        e.userData?.editorAssetContent || e.userData?.editorAssetPlaceholder,
    );
    for (let n of t) e.remove(n);
  }
  return { clone: r, parent: e.parent ?? t, wrappers: i };
}
function pv(e) {
  let t = new Set(e);
  return e.filter((e) => {
    let n = e.parent;
    for (; n;) {
      if (t.has(n)) return !1;
      n = n.parent;
    }
    return !0;
  });
}
var mv = new Set([
    `floor`,
    `wall`,
    `corridor_wall`,
    `arena_wall`,
    `ceiling`,
    `beam`,
    `trim`,
    `column`,
    `pillar`,
  ]),
  hv = { ceiling: 8, floor: 6, beam: 2.8, trim: 4, column: 2.4, pillar: 2.4 },
  gv = 64,
  _v = new Set([`floor`, `wall`, `corridor_wall`, `arena_wall`, `ceiling`]);
function vv(e, t) {
  return e ? (t && t > 0 ? t : (hv[e] ?? 4)) : 4;
}
function yv(e, t) {
  return !t || t <= 0 || !(e > 0) ? e : t / Math.max(1, Math.round(t / e));
}
function bv(e, t, n) {
  let r = vv(e, t),
    i = n?.textureScale && n.textureScale > 0 ? n.textureScale : 1,
    a = n?.uvDensity && n.uvDensity > 0 ? n.uvDensity : 1;
  return Math.max(0.25, (r * i) / a);
}
