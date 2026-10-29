// SceneEditor-NC7_0wmu 59 — newvalue
// Lines 31075-31424 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Lh = class extends Ks {
    updatable = !0;
    material;
    uniformName;
    oldValue;
    newValue;
    recompile;
    existedBefore;
    constructor(e, t, n, r, i) {
      super(e, t);
      let a = n;
      ((this.type = `SetUniformCommand`),
        (this.name = `Set Uniform: ` + r),
        (this.attributeName = n.uuid + `:uniform:` + r),
        (this.object = n),
        (this.material = a),
        (this.uniformName = r),
        (this.existedBefore = !!a.uniforms && a.uniforms[r] !== void 0));
      let o = a.uniforms?.[r]?.value;
      ((this.oldValue = Fh(o)),
        (this.newValue = Fh(i)),
        (this.recompile = Ih(o, i)));
    }
    apply(e) {
      let t = this.material.uniforms ?? (this.material.uniforms = {}),
        n = t[this.uniformName] ?? (t[this.uniformName] = { value: null }),
        r = n.value;
      ((r instanceof W && e instanceof W) ||
      (r instanceof V && e instanceof V) ||
      (r instanceof U && e instanceof U) ||
      (r instanceof vn && e instanceof vn)
        ? r.copy(e)
        : (n.value =
            e instanceof W ||
            e instanceof V ||
            e instanceof U ||
            e instanceof vn
              ? e.clone()
              : e),
        this.recompile && (this.material.needsUpdate = !0),
        this.onObjectChange(this.scene));
    }
    execute() {
      this.apply(this.newValue);
    }
    undo() {
      if (!this.existedBefore) {
        (this.material.uniforms &&
          delete this.material.uniforms[this.uniformName],
          this.recompile && (this.material.needsUpdate = !0),
          this.onObjectChange(this.scene));
        return;
      }
      this.apply(this.oldValue);
    }
    update(e) {
      this.newValue = e.newValue;
    }
  },
  Rh = class extends Ks {
    material;
    oldSource;
    newSource;
    constructor(e, t, n, r) {
      super(e, t);
      let i = n;
      ((this.type = `SetShaderSourceCommand`),
        (this.name = `Edit Shader Source`),
        (this.material = i),
        (this.oldSource = {}),
        (this.newSource = {}),
        r.vertexShader !== void 0 &&
          ((this.oldSource.vertexShader = i.vertexShader),
          (this.newSource.vertexShader = r.vertexShader)),
        r.fragmentShader !== void 0 &&
          ((this.oldSource.fragmentShader = i.fragmentShader),
          (this.newSource.fragmentShader = r.fragmentShader)));
    }
    apply(e) {
      (e.vertexShader !== void 0 &&
        (this.material.vertexShader = e.vertexShader),
        e.fragmentShader !== void 0 &&
          (this.material.fragmentShader = e.fragmentShader),
        (this.material.needsUpdate = !0),
        this.onObjectChange(this.scene));
    }
    execute() {
      this.apply(this.newSource);
    }
    undo() {
      this.apply(this.oldSource);
    }
  },
  zh = class extends Ks {
    sceneAttributeName;
    oldValue;
    newValue;
    constructor(e, t, n, r) {
      (super(e, t),
        (this.type = `SetSceneCommand`),
        (this.name = `Set Scene: ` + n),
        (this.attributeName = n),
        (this.sceneAttributeName = n),
        (this.oldValue = e[n]),
        (this.newValue = r));
    }
    execute() {
      ((this.scene[this.sceneAttributeName] = this.newValue),
        this.onObjectChange(this.scene));
    }
    undo() {
      ((this.scene[this.sceneAttributeName] = this.oldValue),
        this.onObjectChange(this.scene));
    }
  },
  Bh = class extends Ks {
    parent;
    constructor(e, t, n, r) {
      (super(e, t),
        (this.type = `AddObjectCommand`),
        (this.name = `Add Object: ` + n.name),
        (this.object = n),
        (this.changesSceneGraph = !0),
        (this.parent = r ?? e));
    }
    execute() {
      (this.parent.add(this.object), this.onObjectChange(this.object));
    }
    undo() {
      (this.parent.remove(this.object), this.onObjectChange(this.object));
    }
  },
  Vh = class extends Ks {
    parent;
    index;
    constructor(e, t, n) {
      (super(e, t),
        (this.type = `RemoveObjectCommand`),
        (this.name = `Remove Object: ` + n.name),
        (this.object = n),
        (this.changesSceneGraph = !0),
        (this.parent = n.parent),
        (this.index = this.parent ? this.parent.children.indexOf(n) : -1));
    }
    execute() {
      (this.parent && this.parent.remove(this.object),
        this.onObjectChange(this.object));
    }
    undo() {
      if (this.parent) {
        this.parent.add(this.object);
        let e = this.parent.children,
          t = e.indexOf(this.object);
        t !== this.index &&
          this.index >= 0 &&
          (e.splice(t, 1), e.splice(this.index, 0, this.object));
      }
      this.onObjectChange(this.object);
    }
  },
  Hh = class extends Ks {
    oldParent;
    oldIndex;
    newParent;
    newIndex;
    preserveWorld;
    oldPosition;
    oldQuaternion;
    oldScale;
    constructor(e, t, n, r, i, a = !1) {
      (super(e, t),
        (this.type = `MoveObjectCommand`),
        (this.name = `Move Object`),
        (this.changesSceneGraph = !0),
        (this.object = n),
        (this.oldParent = n.parent),
        (this.oldIndex = this.oldParent.children.indexOf(n)),
        (this.newParent = r),
        (this.preserveWorld = a),
        (this.oldPosition = n.position.clone()),
        (this.oldQuaternion = n.quaternion.clone()),
        (this.oldScale = n.scale.clone()),
        i === void 0
          ? (this.newIndex = r.children.length)
          : (this.newIndex = r.children.indexOf(i)),
        this.oldParent === this.newParent &&
          this.newIndex > this.oldIndex &&
          this.newIndex--);
    }
    execute() {
      this.preserveWorld
        ? this.newParent.attach(this.object)
        : (this.oldParent.remove(this.object), this.newParent.add(this.object));
      let e = this.newParent.children,
        t = e.indexOf(this.object);
      (t !== this.newIndex &&
        (e.splice(t, 1), e.splice(this.newIndex, 0, this.object)),
        this.onObjectChange(this.object));
    }
    undo() {
      (this.newParent.remove(this.object),
        this.oldParent.add(this.object),
        this.preserveWorld &&
          (this.object.position.copy(this.oldPosition),
          this.object.quaternion.copy(this.oldQuaternion),
          this.object.scale.copy(this.oldScale)));
      let e = this.oldParent.children,
        t = e.indexOf(this.object);
      (t !== this.oldIndex &&
        (e.splice(t, 1), e.splice(this.oldIndex, 0, this.object)),
        this.onObjectChange(this.object));
    }
  },
  Uh = class e extends Ks {
    cmdArray;
    get commands() {
      return this.cmdArray;
    }
    constructor(e, t, n = []) {
      (super(e, t),
        (this.type = `MultiCmdsCommand`),
        (this.name = `Multiple Changes`),
        (this.cmdArray = n),
        (this.changesSceneGraph = n.some((e) => e.changesSceneGraph)),
        (this.updatable = n.length > 0 && n.every((e) => e.updatable)),
        (this.object = n[0]?.object),
        (this.attributeName = n.map((e) => e.attributeName ?? ``).join(`|`)));
    }
    execute() {
      for (let e = 0; e < this.cmdArray.length; e++) this.cmdArray[e].execute();
    }
    undo() {
      for (let e = this.cmdArray.length - 1; e >= 0; e--)
        this.cmdArray[e].undo();
    }
    update(t) {
      if (!(t instanceof e)) return;
      let n = t.cmdArray;
      if (n.length === this.cmdArray.length) {
        for (let e = 0; e < this.cmdArray.length; e++) {
          let t = this.cmdArray[e],
            r = n[e];
          if (
            t.type !== r.type ||
            t.attributeName !== r.attributeName ||
            !t.updatable
          )
            return;
        }
        for (let e = 0; e < this.cmdArray.length; e++)
          this.cmdArray[e].update?.(n[e]);
      }
    }
  },
  Wh = class extends Ks {
    updatable = !0;
    key;
    oldValue;
    newValue;
    hadKey;
    constructor(e, t, n, r, i) {
      (super(e, t),
        (this.type = `SetUserDataCommand`),
        (this.name = `Set userData.${r}`),
        (this.object = n),
        (this.attributeName = r),
        (this.key = r),
        (this.hadKey = r in n.userData),
        (this.oldValue = n.userData[r]),
        (this.newValue = i));
    }
    execute() {
      (this.newValue === void 0
        ? delete this.object.userData[this.key]
        : (this.object.userData[this.key] = this.newValue),
        this.onObjectChange(this.object));
    }
    undo() {
      (this.hadKey
        ? (this.object.userData[this.key] = this.oldValue)
        : delete this.object.userData[this.key],
        this.onObjectChange(this.object));
    }
    update(e) {
      this.newValue = e.newValue;
    }
  },
  Gh = class extends Ks {
    updatable = !0;
    oldValue;
    newValue;
    constructor(e, t, n, r) {
      (super(e, t),
        (this.type = `SetVisibleCommand`),
        (this.name = `Set visible ${r}`),
        (this.object = n),
        (this.attributeName = `visible`),
        (this.oldValue = n.visible),
        (this.newValue = r));
    }
    execute() {
      ((this.object.visible = this.newValue), this.onObjectChange(this.object));
    }
    undo() {
      ((this.object.visible = this.oldValue), this.onObjectChange(this.object));
    }
    update(e) {
      this.newValue = e.newValue;
    }
  };
function Kh(e) {
  return e === void 0 ? e : JSON.parse(JSON.stringify(e));
}
function qh(e) {
  return e.replace(/~/g, `~0`).replace(/\//g, `~1`);
}
function Jh(e) {
  return e.replace(/~1/g, `/`).replace(/~0/g, `~`);
}
function Yh(e, t) {
  return `${e}/${qh(String(t))}`;
}
function Xh(e) {
  if (e === ``) return [];
  if (!e.startsWith(`/`)) throw Error(`Invalid JSON Pointer: ${e}`);
  return e.slice(1).split(`/`).map(Jh);
}
function Zh(e, t) {
  let n = e;
  for (let e of Xh(t))
    if (Array.isArray(n)) {
      if (!/^(0|[1-9]\d*)$/.test(e)) return;
      n = n[Number(e)];
    } else if (typeof n == `object` && n) {
      if (!Object.prototype.hasOwnProperty.call(n, e)) return;
      n = n[e];
    } else return;
  return n;
}
function Qh(e, t) {
  let n = Xh(t);
  if (n.length === 0)
    throw Error(`The root userData object cannot be replaced`);
  let r = n.pop(),
    i = n.length === 0 ? `` : `/${n.map(qh).join(`/`)}`,
    a = Zh(e, i);
  if (typeof a != `object` || !a)
    throw Error(`JSON Pointer parent does not exist: ${i}`);
  return { parent: a, token: r };
}
