// Create-CEn7EAZs 277 — math
// Lines 93587-94213 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var $6 = new Di(),
  e8 = new Y(0, 1, 0),
  t8 = new Y(0, 0, 0),
  n8 = new _i(),
  r8 = new gi(),
  i8 = new gi(),
  a8 = new Y(),
  o8 = new _i(),
  s8 = new Y(1, 0, 0),
  c8 = new Y(0, 1, 0),
  l8 = new Y(0, 0, 1),
  u8 = new Y(),
  d8 = new Y(),
  f8 = new Y(),
  Vhe = class extends ki {
    constructor(e) {
      (super(),
        (this.isTransformControlsRoot = !0),
        (this.controls = e),
        (this.visible = !1));
    }
    updateMatrixWorld(e) {
      let t = this.controls;
      (t.object !== void 0 &&
        (t.object.updateMatrixWorld(),
        t.object.parent === null
          ? console.error(
              `TransformControls: The attached 3D object must be a part of the scene graph.`,
            )
          : t.object.parent.matrixWorld.decompose(
              t._parentPosition,
              t._parentQuaternion,
              t._parentScale,
            ),
        t.object.matrixWorld.decompose(
          t.worldPosition,
          t.worldQuaternion,
          t._worldScale,
        ),
        t._parentQuaternionInv.copy(t._parentQuaternion).invert(),
        t._worldQuaternionInv.copy(t.worldQuaternion).invert()),
        t.camera.updateMatrixWorld(),
        t.camera.matrixWorld.decompose(
          t.cameraPosition,
          t.cameraQuaternion,
          t._cameraScale,
        ),
        t.camera.isOrthographicCamera
          ? t.camera.getWorldDirection(t.eye).negate()
          : t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),
        super.updateMatrixWorld(e));
    }
    dispose() {
      this.traverse(function (e) {
        (e.geometry && e.geometry.dispose(),
          e.material && e.material.dispose());
      });
    }
  },
  Hhe = class extends ki {
    constructor() {
      (super(),
        (this.isTransformControlsGizmo = !0),
        (this.type = `TransformControlsGizmo`));
      let e = new Ii({
          depthTest: !1,
          depthWrite: !1,
          fog: !1,
          toneMapped: !1,
          transparent: !0,
        }),
        t = new ma({
          depthTest: !1,
          depthWrite: !1,
          fog: !1,
          toneMapped: !1,
          transparent: !0,
        }),
        n = e.clone();
      n.opacity = 0.15;
      let r = t.clone();
      r.opacity = 0.5;
      let i = e.clone();
      i.color.setHex(16711680);
      let a = e.clone();
      a.color.setHex(65280);
      let o = e.clone();
      o.color.setHex(255);
      let s = e.clone();
      (s.color.setHex(16711680), (s.opacity = 0.5));
      let c = e.clone();
      (c.color.setHex(65280), (c.opacity = 0.5));
      let l = e.clone();
      (l.color.setHex(255), (l.opacity = 0.5));
      let u = e.clone();
      u.opacity = 0.25;
      let d = e.clone();
      (d.color.setHex(16776960), (d.opacity = 0.25));
      let f = e.clone();
      f.color.setHex(16776960);
      let p = e.clone();
      (p.color.setHex(7895160),
        (this.materialLib = {
          xAxis: i,
          yAxis: a,
          zAxis: o,
          active: f,
          xAxisTransparent: s,
          yAxisTransparent: c,
          zAxisTransparent: l,
          activeTransparent: d,
        }));
      let m = new Fi(0, 0.04, 0.1, 12);
      m.translate(0, 0.05, 0);
      let h = new pa(0.08, 0.08, 0.08);
      h.translate(0, 0.04, 0);
      let g = new Yi();
      g.setAttribute(`position`, new Gi([0, 0, 0, 1, 0, 0], 3));
      let _ = new Fi(0.0075, 0.0075, 0.5, 3);
      _.translate(0, 0.25, 0);
      function v(e, t) {
        let n = new ua(e, 0.0075, 3, 64, t * Math.PI * 2);
        return (n.rotateY(Math.PI / 2), n.rotateX(Math.PI / 2), n);
      }
      function y() {
        let e = new Yi();
        return (e.setAttribute(`position`, new Gi([0, 0, 0, 1, 1, 1], 3)), e);
      }
      let b = {
          X: [
            [new ca(m, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
            [new ca(m, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
            [new ca(_, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
          ],
          Y: [
            [new ca(m, a), [0, 0.5, 0]],
            [new ca(m, a), [0, -0.5, 0], [Math.PI, 0, 0]],
            [new ca(_, a)],
          ],
          Z: [
            [new ca(m, o), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
            [new ca(m, o), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
            [new ca(_, o), null, [Math.PI / 2, 0, 0]],
          ],
          XYZ: [[new ca(new Ki(0.1, 0), u), [0, 0, 0]]],
          XY: [[new ca(new pa(0.15, 0.15, 0.01), l), [0.15, 0.15, 0]]],
          YZ: [
            [
              new ca(new pa(0.15, 0.15, 0.01), s),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new ca(new pa(0.15, 0.15, 0.01), c),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
        },
        x = {
          X: [
            [
              new ca(new Fi(0.2, 0, 0.6, 4), n),
              [0.3, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
            [
              new ca(new Fi(0.2, 0, 0.6, 4), n),
              [-0.3, 0, 0],
              [0, 0, Math.PI / 2],
            ],
          ],
          Y: [
            [new ca(new Fi(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
            [new ca(new Fi(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [
              new ca(new Fi(0.2, 0, 0.6, 4), n),
              [0, 0, 0.3],
              [Math.PI / 2, 0, 0],
            ],
            [
              new ca(new Fi(0.2, 0, 0.6, 4), n),
              [0, 0, -0.3],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new ca(new Ki(0.2, 0), n)]],
          XY: [[new ca(new pa(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]],
          YZ: [
            [
              new ca(new pa(0.2, 0.2, 0.01), n),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new ca(new pa(0.2, 0.2, 0.01), n),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
        },
        S = {
          START: [[new ca(new Ki(0.01, 2), r), null, null, null, `helper`]],
          END: [[new ca(new Ki(0.01, 2), r), null, null, null, `helper`]],
          DELTA: [[new na(y(), r), null, null, null, `helper`]],
          X: [[new na(g, r), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]],
          Y: [
            [
              new na(g, r),
              [0, -1e3, 0],
              [0, 0, Math.PI / 2],
              [1e6, 1, 1],
              `helper`,
            ],
          ],
          Z: [
            [
              new na(g, r),
              [0, 0, -1e3],
              [0, -Math.PI / 2, 0],
              [1e6, 1, 1],
              `helper`,
            ],
          ],
        },
        C = {
          XYZE: [[new ca(v(0.5, 1), p), null, [0, Math.PI / 2, 0]]],
          X: [[new ca(v(0.5, 0.5), i)]],
          Y: [[new ca(v(0.5, 0.5), a), null, [0, 0, -Math.PI / 2]]],
          Z: [[new ca(v(0.5, 0.5), o), null, [0, Math.PI / 2, 0]]],
          E: [[new ca(v(0.75, 1), d), null, [0, Math.PI / 2, 0]]],
        },
        w = {
          AXIS: [[new na(g, r), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]],
        },
        T = {
          XYZE: [[new ca(new Oa(0.25, 10, 8), n)]],
          X: [
            [
              new ca(new ua(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [0, -Math.PI / 2, -Math.PI / 2],
            ],
          ],
          Y: [
            [
              new ca(new ua(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [Math.PI / 2, 0, 0],
            ],
          ],
          Z: [
            [
              new ca(new ua(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
          ],
          E: [[new ca(new ua(0.75, 0.1, 2, 24), n)]],
        },
        E = {
          X: [
            [new ca(h, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
            [new ca(_, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
            [new ca(h, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
          ],
          Y: [
            [new ca(h, a), [0, 0.5, 0]],
            [new ca(_, a)],
            [new ca(h, a), [0, -0.5, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [new ca(h, o), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
            [new ca(_, o), [0, 0, 0], [Math.PI / 2, 0, 0]],
            [new ca(h, o), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
          ],
          XY: [[new ca(new pa(0.15, 0.15, 0.01), l), [0.15, 0.15, 0]]],
          YZ: [
            [
              new ca(new pa(0.15, 0.15, 0.01), s),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new ca(new pa(0.15, 0.15, 0.01), c),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new ca(new pa(0.1, 0.1, 0.1), u)]],
        },
        D = {
          X: [
            [
              new ca(new Fi(0.2, 0, 0.6, 4), n),
              [0.3, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
            [
              new ca(new Fi(0.2, 0, 0.6, 4), n),
              [-0.3, 0, 0],
              [0, 0, Math.PI / 2],
            ],
          ],
          Y: [
            [new ca(new Fi(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
            [new ca(new Fi(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [
              new ca(new Fi(0.2, 0, 0.6, 4), n),
              [0, 0, 0.3],
              [Math.PI / 2, 0, 0],
            ],
            [
              new ca(new Fi(0.2, 0, 0.6, 4), n),
              [0, 0, -0.3],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XY: [[new ca(new pa(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]],
          YZ: [
            [
              new ca(new pa(0.2, 0.2, 0.01), n),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new ca(new pa(0.2, 0.2, 0.01), n),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new ca(new pa(0.2, 0.2, 0.2), n), [0, 0, 0]]],
        },
        O = {
          X: [[new na(g, r), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]],
          Y: [
            [
              new na(g, r),
              [0, -1e3, 0],
              [0, 0, Math.PI / 2],
              [1e6, 1, 1],
              `helper`,
            ],
          ],
          Z: [
            [
              new na(g, r),
              [0, 0, -1e3],
              [0, -Math.PI / 2, 0],
              [1e6, 1, 1],
              `helper`,
            ],
          ],
        };
      function k(e) {
        let t = new ki();
        for (let n in e)
          for (let r = e[n].length; r--;) {
            let i = e[n][r][0].clone(),
              a = e[n][r][1],
              o = e[n][r][2],
              s = e[n][r][3],
              c = e[n][r][4];
            ((i.name = n),
              (i.tag = c),
              a && i.position.set(a[0], a[1], a[2]),
              o && i.rotation.set(o[0], o[1], o[2]),
              s && i.scale.set(s[0], s[1], s[2]),
              i.updateMatrix());
            let l = i.geometry.clone();
            (l.applyMatrix4(i.matrix),
              (i.geometry = l),
              (i.renderOrder = 1 / 0),
              i.position.set(0, 0, 0),
              i.rotation.set(0, 0, 0),
              i.scale.set(1, 1, 1),
              t.add(i));
          }
        return t;
      }
      ((this.gizmo = {}),
        (this.picker = {}),
        (this.helper = {}),
        this.add((this.gizmo.translate = k(b))),
        this.add((this.gizmo.rotate = k(C))),
        this.add((this.gizmo.scale = k(E))),
        this.add((this.picker.translate = k(x))),
        this.add((this.picker.rotate = k(T))),
        this.add((this.picker.scale = k(D))),
        this.add((this.helper.translate = k(S))),
        this.add((this.helper.rotate = k(w))),
        this.add((this.helper.scale = k(O))),
        (this.picker.translate.visible = !1),
        (this.picker.rotate.visible = !1),
        (this.picker.scale.visible = !1));
    }
    updateMatrixWorld(e) {
      let t =
        (this.mode === `scale` ? `local` : this.space) === `local`
          ? this.worldQuaternion
          : i8;
      ((this.gizmo.translate.visible = this.mode === `translate`),
        (this.gizmo.rotate.visible = this.mode === `rotate`),
        (this.gizmo.scale.visible = this.mode === `scale`),
        (this.helper.translate.visible = this.mode === `translate`),
        (this.helper.rotate.visible = this.mode === `rotate`),
        (this.helper.scale.visible = this.mode === `scale`));
      let n = [];
      ((n = n.concat(this.picker[this.mode].children)),
        (n = n.concat(this.gizmo[this.mode].children)),
        (n = n.concat(this.helper[this.mode].children)));
      for (let e = 0; e < n.length; e++) {
        let r = n[e];
        ((r.visible = !0),
          r.rotation.set(0, 0, 0),
          r.position.copy(this.worldPosition));
        let i;
        if (
          ((i = this.camera.isOrthographicCamera
            ? (this.camera.top - this.camera.bottom) / this.camera.zoom
            : this.worldPosition.distanceTo(this.cameraPosition) *
              Math.min(
                (1.9 * Math.tan((Math.PI * this.camera.fov) / 360)) /
                  this.camera.zoom,
                7,
              )),
          r.scale.set(1, 1, 1).multiplyScalar((i * this.size) / 4),
          r.tag === `helper`)
        ) {
          ((r.visible = !1),
            r.name === `AXIS`
              ? ((r.visible = !!this.axis),
                this.axis === `X` &&
                  (G6.setFromEuler($6.set(0, 0, 0)),
                  r.quaternion.copy(t).multiply(G6),
                  Math.abs(e8.copy(s8).applyQuaternion(t).dot(this.eye)) >
                    0.9 && (r.visible = !1)),
                this.axis === `Y` &&
                  (G6.setFromEuler($6.set(0, 0, Math.PI / 2)),
                  r.quaternion.copy(t).multiply(G6),
                  Math.abs(e8.copy(c8).applyQuaternion(t).dot(this.eye)) >
                    0.9 && (r.visible = !1)),
                this.axis === `Z` &&
                  (G6.setFromEuler($6.set(0, Math.PI / 2, 0)),
                  r.quaternion.copy(t).multiply(G6),
                  Math.abs(e8.copy(l8).applyQuaternion(t).dot(this.eye)) >
                    0.9 && (r.visible = !1)),
                this.axis === `XYZE` &&
                  (G6.setFromEuler($6.set(0, Math.PI / 2, 0)),
                  e8.copy(this.rotationAxis),
                  r.quaternion.setFromRotationMatrix(n8.lookAt(t8, e8, c8)),
                  r.quaternion.multiply(G6),
                  (r.visible = this.dragging)),
                this.axis === `E` && (r.visible = !1))
              : r.name === `START`
                ? (r.position.copy(this.worldPositionStart),
                  (r.visible = this.dragging))
                : r.name === `END`
                  ? (r.position.copy(this.worldPosition),
                    (r.visible = this.dragging))
                  : r.name === `DELTA`
                    ? (r.position.copy(this.worldPositionStart),
                      r.quaternion.copy(this.worldQuaternionStart),
                      U6.set(1e-10, 1e-10, 1e-10)
                        .add(this.worldPositionStart)
                        .sub(this.worldPosition)
                        .multiplyScalar(-1),
                      U6.applyQuaternion(
                        this.worldQuaternionStart.clone().invert(),
                      ),
                      r.scale.copy(U6),
                      (r.visible = this.dragging))
                    : (r.quaternion.copy(t),
                      this.dragging
                        ? r.position.copy(this.worldPositionStart)
                        : r.position.copy(this.worldPosition),
                      this.axis &&
                        (r.visible = this.axis.search(r.name) !== -1)));
          continue;
        }
        if (
          (r.quaternion.copy(t),
          this.mode === `translate` || this.mode === `scale`)
        ) {
          let e = 0.99,
            n = 0.2;
          (r.name === `X` &&
            Math.abs(e8.copy(s8).applyQuaternion(t).dot(this.eye)) > e &&
            (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `Y` &&
              Math.abs(e8.copy(c8).applyQuaternion(t).dot(this.eye)) > e &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `Z` &&
              Math.abs(e8.copy(l8).applyQuaternion(t).dot(this.eye)) > e &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `XY` &&
              Math.abs(e8.copy(l8).applyQuaternion(t).dot(this.eye)) < n &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `YZ` &&
              Math.abs(e8.copy(s8).applyQuaternion(t).dot(this.eye)) < n &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `XZ` &&
              Math.abs(e8.copy(c8).applyQuaternion(t).dot(this.eye)) < n &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)));
        } else
          this.mode === `rotate` &&
            (r8.copy(t),
            e8.copy(this.eye).applyQuaternion(G6.copy(t).invert()),
            r.name.search(`E`) !== -1 &&
              r.quaternion.setFromRotationMatrix(n8.lookAt(this.eye, t8, c8)),
            r.name === `X` &&
              (G6.setFromAxisAngle(s8, Math.atan2(-e8.y, e8.z)),
              G6.multiplyQuaternions(r8, G6),
              r.quaternion.copy(G6)),
            r.name === `Y` &&
              (G6.setFromAxisAngle(c8, Math.atan2(e8.x, e8.z)),
              G6.multiplyQuaternions(r8, G6),
              r.quaternion.copy(G6)),
            r.name === `Z` &&
              (G6.setFromAxisAngle(l8, Math.atan2(e8.y, e8.x)),
              G6.multiplyQuaternions(r8, G6),
              r.quaternion.copy(G6)));
        ((r.visible = r.visible && (r.name.indexOf(`X`) === -1 || this.showX)),
          (r.visible = r.visible && (r.name.indexOf(`Y`) === -1 || this.showY)),
          (r.visible = r.visible && (r.name.indexOf(`Z`) === -1 || this.showZ)),
          (r.visible =
            r.visible &&
            (r.name.indexOf(`E`) === -1 ||
              (this.showX && this.showY && this.showZ))),
          (r.visible =
            r.visible && (r.name.indexOf(`XY`) === -1 || this.showXY)),
          (r.visible =
            r.visible && (r.name.indexOf(`YZ`) === -1 || this.showYZ)),
          (r.visible =
            r.visible && (r.name.indexOf(`XZ`) === -1 || this.showXZ)),
          (r.material._color = r.material._color || r.material.color.clone()),
          (r.material._opacity = r.material._opacity || r.material.opacity),
          r.material.color.copy(r.material._color),
          (r.material.opacity = r.material._opacity),
          this.enabled &&
            this.axis &&
            (r.name === this.axis ||
              this.axis.split(``).some(function (e) {
                return r.name === e;
              })) &&
            (r.material.color.copy(this.materialLib.active.color),
            (r.material.opacity = 1)));
      }
      super.updateMatrixWorld(e);
    }
  },
  Uhe = class extends ca {
    constructor() {
      (super(
        new ji(1e5, 1e5, 2, 2),
        new Ii({
          visible: !1,
          wireframe: !0,
          side: 2,
          transparent: !0,
          opacity: 0.1,
          toneMapped: !1,
        }),
      ),
        (this.isTransformControlsPlane = !0),
        (this.type = `TransformControlsPlane`));
    }
    updateMatrixWorld(e) {
      let t = this.space;
      switch (
        (this.position.copy(this.worldPosition),
        this.mode === `scale` && (t = `local`),
        u8.copy(s8).applyQuaternion(t === `local` ? this.worldQuaternion : i8),
        d8.copy(c8).applyQuaternion(t === `local` ? this.worldQuaternion : i8),
        f8.copy(l8).applyQuaternion(t === `local` ? this.worldQuaternion : i8),
        e8.copy(d8),
        this.mode)
      ) {
        case `translate`:
        case `scale`:
          switch (this.axis) {
            case `X`:
              (e8.copy(this.eye).cross(u8), a8.copy(u8).cross(e8));
              break;
            case `Y`:
              (e8.copy(this.eye).cross(d8), a8.copy(d8).cross(e8));
              break;
            case `Z`:
              (e8.copy(this.eye).cross(f8), a8.copy(f8).cross(e8));
              break;
            case `XY`:
              a8.copy(f8);
              break;
            case `YZ`:
              a8.copy(u8);
              break;
            case `XZ`:
              (e8.copy(f8), a8.copy(d8));
              break;
            case `XYZ`:
            case `E`:
              a8.set(0, 0, 0);
              break;
          }
          break;
        default:
          a8.set(0, 0, 0);
      }
      (a8.length() === 0
        ? this.quaternion.copy(this.cameraQuaternion)
        : (o8.lookAt(U6.set(0, 0, 0), a8, e8),
          this.quaternion.setFromRotationMatrix(o8)),
        super.updateMatrixWorld(e));
    }
  };
