// SceneEditor-NC7_0wmu 67 — userdata
// Lines 33648-33993 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function y_(e, t, n) {
  let r = e.zones;
  if (!r || r.width !== n.W || r.depth !== n.D) return;
  let { cs: i, lineX: a, lineZ: o, wallHeight: s } = n;
  for (let e of g_(r, ea.blocked)) {
    let n = e.w * i,
      r = e.d * i,
      c = a(e.x) + n / 2,
      l = o(e.z) + r / 2,
      u = new Lt(n, s, r);
    u.translate(n / 2, s / 2, r / 2);
    let d = new G(
      u,
      new Te({
        color: 12597547,
        transparent: !0,
        opacity: 0.18,
        roughness: 1,
        metalness: 0,
      }),
    );
    (wg(c, s / 2, l, n, s, r, 0, d.position),
      (d.name = `proc_blocked_${e.x}_${e.z}`),
      (d.userData = {
        proc: !0,
        procKind: `blocked`,
        isCollision: !0,
        layoutPieceId: `blocked:${e.x}:${e.z}:${e.w}x${e.d}`,
        cellId: `level`,
        generatedBy: `rooms`,
        dims: { w: n, h: s, d: r },
        pivot: _g,
        pivotAuto: _g,
        locked: !1,
      }),
      t.push(d));
  }
  for (let e of ra) {
    let n = ea[e],
      s = __[n];
    if (!s) continue;
    let c = la(r, e);
    if (!c.size) continue;
    let l = new Map(),
      u = [];
    for (let t of c) {
      if (!_a(ya(r, e, t))) {
        u.push(t);
        continue;
      }
      let n = ma(r, e, t),
        i = l.get(n);
      (i || l.set(n, (i = new Set())), i.add(t));
    }
    let d = [];
    for (let e of u.sort()) {
      let t = Sa(e);
      t && d.push({ x: t.x, z: t.z, w: 1, d: 1 });
    }
    for (let e of [...l.keys()].sort((e, t) => e - t)) {
      let t = l.get(e);
      d.push(...h_(r, (e, n) => t.has(ca(e, n))));
    }
    for (let c of d) {
      let l = c.w === 1 && c.d === 1 ? ya(r, e, ca(c.x, c.z)) : [0, 0, 0],
        u = ma(r, e, ca(c.x, c.z)),
        d = a(c.x) + (c.w * i) / 2 + l[0],
        f = o(c.z) + (c.d * i) / 2 + l[2],
        p = new Te({
          color: s.color,
          emissive: s.color,
          emissiveIntensity: 0.4,
          roughness: 0.4,
          metalness: 0.1,
        }),
        m = new G(Ag([s.make(), v_()]), p);
      (m.position.set(d, $g + l[1], f),
        m.rotation.set(0, u * fe.DEG2RAD, 0),
        (m.castShadow = !0),
        (m.name = `proc_marker_${n}_${c.x}_${c.z}`),
        (m.userData = {
          proc: !0,
          procKind: `marker`,
          markerZone: n,
          markerZoneName: e,
          markerFacing: u,
          markerOffset: [l[0], l[1], l[2]],
          markerWorld: { x: d, y: $g + l[1], z: f },
          markerCells: w_(c),
          layoutPieceId: `marker:${n}:${c.x}:${c.z}`,
          cellId: `level`,
          generatedBy: `rooms`,
          locked: !1,
        }),
        t.push(m));
    }
  }
}
function b_(e, t) {
  e.rotation.set(0, t * fe.DEG2RAD, 0);
}
function x_(e) {
  let t = e.userData?.layoutPieceId;
  if (typeof t != `string`) return null;
  let n = t.split(`:`),
    r = n[1];
  if (r !== `V` && r !== `H`) return null;
  let i = Number(n[2]),
    a = Number(n[3]);
  if (!Number.isFinite(i) || !Number.isFinite(a)) return null;
  if (n[0] === `pdoor` && n.length === 4)
    return { source: `painted`, run: { axis: r, line: i, start: a, len: 1 } };
  if (n[0] === `door` && n.length === 5) {
    let e = Number(n[4]);
    return !Number.isFinite(e) || e < 1
      ? null
      : { source: `auto`, run: { axis: r, line: i, start: a, len: e } };
  }
  return null;
}
function S_(e) {
  return x_(e) !== null;
}
function C_(e) {
  return e.userData?.procKind === `marker` && ia(e.userData?.markerZoneName);
}
function w_(e) {
  let t = [];
  for (let n = e.z; n < e.z + e.d; n++)
    for (let r = e.x; r < e.x + e.w; r++) t.push(ca(r, n));
  return t.sort();
}
var T_ = {
  prop: `bottom-center`,
  character_3d: `bottom-center`,
  prop_3d: `bottom-center`,
  environmental_props_3d: `bottom-center`,
  vehicle_3d: `bottom-center`,
  weapon_3d: `bottom-center`,
};
function E_(e) {
  return (e && T_[e]) || `min-corner`;
}
function D_(e) {
  let t = e.userData?.procKind;
  if (typeof t == `string` && t) return t;
  let n = e.userData?.assetType;
  return typeof n == `string` && n ? n : void 0;
}
function O_(e) {
  return k_(e).mode;
}
function k_(e) {
  if (e.userData?.proc) {
    let t = e.userData.pivotAuto;
    if (yg(t)) return { mode: t, reason: `layout` };
    let n = xg(e);
    if (n) return { mode: n, reason: `layout` };
  }
  let t = D_(e);
  return t
    ? { mode: E_(t), reason: t }
    : A_(e)
      ? { mode: `bottom-center`, reason: `placed asset` }
      : { mode: gg, reason: `default` };
}
function A_(e) {
  return rg(e) && !bg(e);
}
function j_(e) {
  let t = e.userData?.pivotMode;
  return yg(t) ? t : O_(e);
}
function M_(e) {
  return {
    position: e.position.clone(),
    pivot: e.userData.pivot,
    hadPivot: `pivot` in e.userData,
    pivotMode: e.userData.pivotMode,
    hadPivotMode: `pivotMode` in e.userData,
    geometry: e.isMesh ? e.geometry : null,
  };
}
function N_(e, t) {
  if (
    (e.position.copy(t.position),
    t.hadPivot ? (e.userData.pivot = t.pivot) : delete e.userData.pivot,
    t.hadPivotMode
      ? (e.userData.pivotMode = t.pivotMode)
      : delete e.userData.pivotMode,
    t.geometry)
  ) {
    let n = e;
    ((n.geometry = t.geometry), n.geometry.computeBoundingSphere());
  }
  e.updateMatrixWorld(!0);
}
var P_ = class extends Ks {
    newMode;
    before;
    after = null;
    remount;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetPivotModeCommand`),
        (this.name = r ? `Set Pivot ${r}` : `Set Pivot Auto`),
        (this.object = n),
        (this.newMode = r),
        (this.remount = i),
        (this.before = M_(n)));
    }
    execute() {
      let e = this.object;
      if (rg(e)) {
        (this.newMode === void 0
          ? delete e.userData.pivotMode
          : (e.userData.pivotMode = this.newMode),
          this.remount?.(e),
          this.onObjectChange(e));
        return;
      }
      if (this.after) {
        (N_(e, this.after), this.onObjectChange(e));
        return;
      }
      this.newMode === void 0
        ? delete e.userData.pivotMode
        : (e.userData.pivotMode = this.newMode);
      let t = this.newMode ?? O_(e),
        n = xg(e) ?? `min-corner`;
      if (n !== t) {
        let r = e.userData.dims,
          i = e,
          a = String(e.userData.procKind ?? `wall`);
        if (r && i.isMesh) {
          let o = Sg(n, r.w, r.h, r.d)
            .sub(Sg(t, r.w, r.h, r.d))
            .multiply(e.scale)
            .applyQuaternion(e.quaternion);
          ((i.geometry = Ig(a, r.w, r.h, r.d, t)),
            i.geometry.computeBoundingSphere(),
            e.position.add(o));
        }
        e.userData.pivot = t;
      }
      (e.updateMatrixWorld(!0), (this.after = M_(e)), this.onObjectChange(e));
    }
    undo() {
      let e = this.object;
      (N_(e, this.before), rg(e) && this.remount?.(e), this.onObjectChange(e));
    }
  },
  F_ = class extends Ks {
    updatable = !0;
    zone;
    cells;
    oldFacing;
    newFacing;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetMarkerFacingCommand`),
        (this.name = `Set Marker Facing`),
        (this.attributeName = `markerFacing`),
        (this.object = n));
      let a = n.userData.markerZoneName;
      if (!ia(a))
        throw Error(
          `SetMarkerFacingCommand: ${n.name} is not a gameplay marker`,
        );
      ((this.zone = a),
        (this.cells = Array.isArray(n.userData.markerCells)
          ? [...n.userData.markerCells]
          : []),
        (this.oldFacing = fa(i ?? Number(n.userData.markerFacing ?? 0))),
        (this.newFacing = fa(r)));
    }
    execute() {
      this.apply(this.newFacing);
    }
    undo() {
      this.apply(this.oldFacing);
    }
    update(e) {
      this.newFacing = e.newFacing;
    }
    apply(e) {
      let t = this.object;
      (b_(t, e),
        (t.userData.markerFacing = e),
        t.updateMatrixWorld(!0),
        this.writeToLayout(e),
        this.onObjectChange(t));
    }
    writeToLayout(e) {
      if (!this.cells.length) return;
      let t = X.getState(),
        n = t.procLayout,
        r = (t) => ha(t, this.zone, this.cells, e);
      if (n?.zones) {
        let e = { ...n, zones: r(n.zones) };
        t.setProcLayout(e);
      }
      if (t.procZoneMap) t.setProcZoneMap(r(t.procZoneMap));
      else if (n?.zones) {
        let e = wa(n.zones, n.zones.width, n.zones.depth);
        t.setProcZoneMap(r(e));
      }
    }
  },
  I_ = `sandscapeMaterialOverrides`,
  L_ = `matOverride`,
  R_ = `sandscapeMaterialHolder`,
  z_ = `sandscapeShared`,
  B_ = { offset: [0, 0], scale: [1, 1] };
function V_(e) {
  let t = e.userData?.assetId;
  return typeof t == `string` && t ? t : null;
}
function H_(e) {
  return e.userData?.[R_] === !0;
}
function U_(e) {
  let t = e.userData?.[I_];
  if (!(!t || typeof t != `object` || !t.families)) return t;
}
function W_(e) {
  let t = e.userData?.[L_];
  return t && typeof t == `object` ? t : void 0;
}
function G_(e, t) {
  return U_(e)?.families?.[t];
}
function K_(e, t) {
  let n = W_(t),
    r = V_(t),
    i = e && r ? G_(e, r) : void 0;
  if (!n && !i) return null;
  let a = n && `materialUuid` in n ? n.materialUuid : i?.materialUuid,
    o = n && `uv` in n ? n.uv : i?.uv;
  if (a == null && o == null) return null;
  let s = {};
  return (a != null && (s.materialUuid = a), o != null && (s.uv = o), s);
}
function q_(e) {
  return !e || (!(`materialUuid` in e) && !(`uv` in e));
}
