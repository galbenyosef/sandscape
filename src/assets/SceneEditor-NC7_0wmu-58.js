// SceneEditor-NC7_0wmu 58 — material
// Lines 30890-31074 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var jh = class extends Ks {
    updatable = !0;
    material;
    key;
    oldValue;
    newValue;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetMaterialPropertyCommand`),
        (this.name = `Set Material Property: ` + r),
        (this.attributeName = n.uuid + `:` + r),
        (this.object = n),
        (this.material = n),
        (this.key = r),
        (this.oldValue = Ah(n[r])),
        (this.newValue = Ah(i)));
    }
    apply(e) {
      let t = this.material,
        n = t[this.key];
      ((n instanceof W && e instanceof W) ||
      (n instanceof V && e instanceof V) ||
      (n instanceof U && e instanceof U) ||
      (n instanceof vn && e instanceof vn)
        ? n.copy(e)
        : (t[this.key] =
            e instanceof W ||
            e instanceof V ||
            e instanceof U ||
            e instanceof vn
              ? e.clone()
              : e),
        (this.material.needsUpdate = !0),
        this.onObjectChange(this.scene));
    }
    execute() {
      this.apply(this.newValue);
    }
    undo() {
      this.apply(this.oldValue);
    }
    update(e) {
      this.newValue = e.newValue;
    }
  },
  Mh = class extends Ks {
    material;
    mapKey;
    oldTexture;
    newTexture;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `AssignTextureCommand`),
        (this.name = (i ? `Assign Texture: ` : `Clear Texture: `) + r),
        (this.material = n),
        (this.mapKey = r),
        (this.oldTexture = n[r] ?? null),
        (this.newTexture = i));
    }
    apply(e) {
      ((this.material[this.mapKey] = e),
        (this.material.needsUpdate = !0),
        this.onObjectChange(this.scene));
    }
    execute() {
      this.apply(this.newTexture);
    }
    undo() {
      this.apply(this.oldTexture);
    }
  },
  Nh = class extends Ks {
    updatable = !0;
    texture;
    key;
    oldValue;
    newValue;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetTexturePropertyCommand`),
        (this.name = `Set Texture Property: ` + r),
        (this.attributeName = n.uuid + `:` + r),
        (this.object = n),
        (this.texture = n),
        (this.key = r),
        (this.oldValue = this.read()),
        (this.newValue = i));
    }
    read() {
      switch (this.key) {
        case `wrapS`:
          return this.texture.wrapS;
        case `wrapT`:
          return this.texture.wrapT;
        case `repeatX`:
          return this.texture.repeat.x;
        case `repeatY`:
          return this.texture.repeat.y;
      }
    }
    apply(e) {
      switch (this.key) {
        case `wrapS`:
          this.texture.wrapS = e;
          break;
        case `wrapT`:
          this.texture.wrapT = e;
          break;
        case `repeatX`:
          this.texture.repeat.x = e;
          break;
        case `repeatY`:
          this.texture.repeat.y = e;
          break;
      }
      ((this.texture.needsUpdate = !0), this.onObjectChange(this.scene));
    }
    execute() {
      this.apply(this.newValue);
    }
    undo() {
      this.apply(this.oldValue);
    }
    update(e) {
      this.newValue = e.newValue;
    }
  },
  Ph = class extends Ks {
    oldMaterial;
    newMaterial;
    refs = [];
    applied = `old`;
    onActiveMaterialChange;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `ConvertMaterialCommand`),
        (this.name = `Convert Material: ` + r.type),
        (this.oldMaterial = n),
        (this.newMaterial = r),
        (this.onActiveMaterialChange = i),
        e.traverse((e) => {
          let t = e;
          !t.isMesh ||
            !t.material ||
            (Array.isArray(t.material)
              ? t.material.forEach((e, r) => {
                  e &&
                    e.uuid === n.uuid &&
                    this.refs.push({ mesh: t, index: r });
                })
              : t.material.uuid === n.uuid &&
                this.refs.push({ mesh: t, index: -1 }));
        }));
    }
    assign(e) {
      for (let { mesh: t, index: n } of this.refs)
        (n < 0
          ? (t.material = e)
          : Array.isArray(t.material) && (t.material[n] = e),
          this.onObjectChange(t));
    }
    execute() {
      (this.assign(this.newMaterial),
        (this.applied = `new`),
        this.onActiveMaterialChange?.(this.newMaterial.uuid));
    }
    undo() {
      (this.assign(this.oldMaterial),
        (this.applied = `old`),
        this.onActiveMaterialChange?.(this.oldMaterial.uuid));
    }
    dispose() {
      (this.applied === `new` ? this.oldMaterial : this.newMaterial).dispose();
    }
  };
function Fh(e) {
  return e instanceof W || e instanceof V || e instanceof U || e instanceof vn
    ? e.clone()
    : e;
}
function Ih(e, t) {
  let n = e?.isTexture === !0,
    r = t?.isTexture === !0;
  return n || r ? !0 : typeof e != typeof t;
}
