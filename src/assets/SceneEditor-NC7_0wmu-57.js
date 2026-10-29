// SceneEditor-NC7_0wmu 57 — attributename
// Lines 30563-30889 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var yh = class e {
    constructor(e) {
      this.hand = e;
    }
    static newFromSnapshot(t, n) {
      let r = new e(t);
      r.joints = {};
      for (let e of rh) {
        let t = n[e];
        t &&
          (r.joints[e] = {
            position: new U(t.pos[0], t.pos[1], t.pos[2]),
            quaternion: new R(t.quat[0], t.quat[1], t.quat[2], t.quat[3]),
            radius: t.radius,
          });
      }
      return r;
    }
    valid() {
      return !!this.joints;
    }
    snapshotJoints() {
      if (!this.joints) return;
      let e = {};
      for (let t of rh) {
        let n = this.joints[t];
        n &&
          (e[t] = {
            pos: n.position.toArray().map(gh),
            quat: n.quaternion.toArray().map(gh),
            radius: gh(n.radius),
          });
      }
      return e;
    }
    toFlatArray() {
      if (!this.joints) return;
      let e = new Float32Array(176);
      e[0] = this.hand === `left` ? 0 : 1;
      let t = 1;
      for (let n of rh) {
        let r = this.joints[n];
        (r &&
          ((e[t] = r.position.x),
          (e[t + 1] = r.position.y),
          (e[t + 2] = r.position.z),
          (e[t + 3] = r.quaternion.x),
          (e[t + 4] = r.quaternion.y),
          (e[t + 5] = r.quaternion.z),
          (e[t + 6] = r.quaternion.w)),
          (t += 7));
      }
      return e;
    }
  },
  bh = class extends Qp {
    constructor(e) {
      (super({}),
        (this.scratchCenter = new U()),
        (this.scratchQuat = new R(0, 0, 0, 1)),
        (this.scratchScales = new U().setScalar(0.01)),
        (this.scratchColor = new W(1, 1, 1)),
        (this.hand = e));
    }
    updateJoints(e) {
      if (((this.visible = !1), !e || !this.packedSplats)) return;
      this.visible = !0;
      let t = 0;
      for (let n of rh) {
        let r = e[n];
        r &&
          (this.scratchCenter.copy(r.position),
          this.scratchQuat.copy(r.quaternion),
          this.scratchScales.set(r.radius, 0.75 * r.radius, 1.5 * r.radius),
          this.packedSplats.setSplat(
            t,
            this.scratchCenter,
            this.scratchScales,
            this.scratchQuat,
            0.75,
            this.scratchColor,
          ),
          (t += 1));
      }
      ((this.packedSplats.numSplats = t),
        (this.packedSplats.needsUpdate = !0),
        (this.numSplats = t),
        this.updateVersion());
    }
  },
  xh = ((e) => (
    (e.w = `wrist`),
    (e.t0 = `thumb-metacarpal`),
    (e.t1 = `thumb-phalanx-proximal`),
    (e.t2 = `thumb-phalanx-distal`),
    (e.t3 = `thumb-tip`),
    (e.i0 = `index-finger-metacarpal`),
    (e.i1 = `index-finger-phalanx-proximal`),
    (e.i2 = `index-finger-phalanx-intermediate`),
    (e.i3 = `index-finger-phalanx-distal`),
    (e.i4 = `index-finger-tip`),
    (e.m0 = `middle-finger-metacarpal`),
    (e.m1 = `middle-finger-phalanx-proximal`),
    (e.m2 = `middle-finger-phalanx-intermediate`),
    (e.m3 = `middle-finger-phalanx-distal`),
    (e.m4 = `middle-finger-tip`),
    (e.r0 = `ring-finger-metacarpal`),
    (e.r1 = `ring-finger-phalanx-proximal`),
    (e.r2 = `ring-finger-phalanx-intermediate`),
    (e.r3 = `ring-finger-phalanx-distal`),
    (e.r4 = `ring-finger-tip`),
    (e.p0 = `pinky-finger-metacarpal`),
    (e.p1 = `pinky-finger-phalanx-proximal`),
    (e.p2 = `pinky-finger-phalanx-intermediate`),
    (e.p3 = `pinky-finger-phalanx-distal`),
    (e.p4 = `pinky-finger-tip`),
    e
  ))(xh || {});
Object.keys(xh).length;
var Sh = ((e) => ((e.left = `left`), (e.right = `right`), e))(Sh || {});
(Object.keys(Sh),
  new U(0, 0, -1),
  new U(0, 0, 1),
  new U(-1, 0, 0),
  new U(1, 0, 0),
  new U(0, 1, 0),
  new U(0, -1, 0),
  new U(0, 0, -1),
  new U(0, 0, 1),
  new U(-1, 0, 0),
  new U(1, 0, 0),
  new U(0, 1, 0),
  new U(0, -1, 0),
  new U(0, 0, 1),
  new U(0, 0, -1),
  new U(0, -1, 0),
  new U(0, 1, 0),
  new U(-1, 0, 0),
  new U(1, 0, 0));
var Ch = class extends Ks {
    updatable = !0;
    oldPosition;
    newPosition;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetPositionCommand`),
        (this.name = `Set Position`),
        (this.object = n),
        (this.oldPosition = i?.clone() ?? n.position.clone()),
        (this.newPosition = r.clone()));
    }
    execute() {
      (this.object.position.copy(this.newPosition),
        this.object.updateMatrixWorld(!0),
        this.onObjectChange(this.object));
    }
    undo() {
      (this.object.position.copy(this.oldPosition),
        this.object.updateMatrixWorld(!0),
        this.onObjectChange(this.object));
    }
    update(e) {
      this.newPosition.copy(e.newPosition);
    }
  },
  wh = class extends Ks {
    updatable = !0;
    oldRotation;
    newRotation;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetRotationCommand`),
        (this.name = `Set Rotation`),
        (this.object = n),
        (this.oldRotation = i?.clone() ?? n.rotation.clone()),
        (this.newRotation = r.clone()));
    }
    execute() {
      (this.object.rotation.copy(this.newRotation),
        this.object.updateMatrixWorld(!0),
        this.onObjectChange(this.object));
    }
    undo() {
      (this.object.rotation.copy(this.oldRotation),
        this.object.updateMatrixWorld(!0),
        this.onObjectChange(this.object));
    }
    update(e) {
      this.newRotation.copy(e.newRotation);
    }
  },
  Th = class extends Ks {
    updatable = !0;
    oldScale;
    newScale;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetScaleCommand`),
        (this.name = `Set Scale`),
        (this.object = n),
        (this.oldScale = i?.clone() ?? n.scale.clone()),
        (this.newScale = r.clone()));
    }
    execute() {
      (this.object.scale.copy(this.newScale),
        this.object.updateMatrixWorld(!0),
        this.onObjectChange(this.object));
    }
    undo() {
      (this.object.scale.copy(this.oldScale),
        this.object.updateMatrixWorld(!0),
        this.onObjectChange(this.object));
    }
    update(e) {
      this.newScale.copy(e.newScale);
    }
  },
  Eh = class extends Ks {
    updatable = !0;
    _attributeName;
    oldValue;
    newValue;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetValueCommand`),
        (this.name = `Set Value: ` + r),
        (this.object = n),
        (this.attributeName = r),
        (this._attributeName = r),
        (this.oldValue = n[r]),
        (this.newValue = i));
    }
    execute() {
      ((this.object[this._attributeName] = this.newValue),
        this.onObjectChange(this.object));
    }
    undo() {
      ((this.object[this._attributeName] = this.oldValue),
        this.onObjectChange(this.object));
    }
    update(e) {
      this.newValue = e.newValue;
    }
  },
  Dh = class extends Ks {
    updatable = !0;
    _attributeName;
    oldValue;
    newValue;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetColorCommand`),
        (this.name = `Set Color: ` + r),
        (this.object = n),
        (this.attributeName = r),
        (this._attributeName = r),
        (this.oldValue = n[r].getHex()),
        (this.newValue = i));
    }
    execute() {
      (this.object[this._attributeName].setHex(this.newValue),
        this.onObjectChange(this.object));
    }
    undo() {
      (this.object[this._attributeName].setHex(this.oldValue),
        this.onObjectChange(this.object));
    }
    update(e) {
      this.newValue = e.newValue;
    }
  },
  Oh = class extends Ks {
    updatable = !0;
    _attributeName;
    oldValue;
    newValue;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetMaterialValueCommand`),
        (this.name = `Set Material Value: ` + r),
        (this.object = n),
        (this.attributeName = r),
        (this._attributeName = r));
      let a = n.material;
      ((this.oldValue = a[r]), (this.newValue = i));
    }
    execute() {
      let e = this.object.material;
      ((e[this._attributeName] = this.newValue),
        (e.needsUpdate = !0),
        this.onObjectChange(this.object));
    }
    undo() {
      let e = this.object.material;
      ((e[this._attributeName] = this.oldValue),
        (e.needsUpdate = !0),
        this.onObjectChange(this.object));
    }
    update(e) {
      this.newValue = e.newValue;
    }
  },
  kh = class extends Ks {
    mesh;
    oldMaterial;
    newMaterial;
    constructor(e, t, n, r) {
      (super(e, t),
        (this.type = `SetMaterialCommand`),
        (this.name = `Assign Material: ` + (r.name || r.type)),
        (this.object = n),
        (this.mesh = n),
        (this.oldMaterial = n.material),
        (this.newMaterial = r));
    }
    execute() {
      ((this.mesh.material = this.newMaterial), this.onObjectChange(this.mesh));
    }
    undo() {
      ((this.mesh.material = this.oldMaterial), this.onObjectChange(this.mesh));
    }
  };
function Ah(e) {
  return e instanceof W || e instanceof V || e instanceof U || e instanceof vn
    ? e.clone()
    : e;
}
