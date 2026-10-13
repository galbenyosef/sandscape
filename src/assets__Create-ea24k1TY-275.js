// assets__Create-ea24k1TY 275 — math
// Lines 92808-93434 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var e8 = new Ei(),
  t8 = new Y(0, 1, 0),
  n8 = new Y(0, 0, 0),
  r8 = new vi(),
  i8 = new _i(),
  a8 = new _i(),
  o8 = new Y(),
  s8 = new vi(),
  c8 = new Y(1, 0, 0),
  l8 = new Y(0, 1, 0),
  u8 = new Y(0, 0, 1),
  d8 = new Y(),
  f8 = new Y(),
  p8 = new Y(),
  che = class extends Oi {
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
  lhe = class extends Oi {
    constructor() {
      (super(),
        (this.isTransformControlsGizmo = !0),
        (this.type = `TransformControlsGizmo`));
      let e = new Fi({
          depthTest: !1,
          depthWrite: !1,
          fog: !1,
          toneMapped: !1,
          transparent: !0,
        }),
        t = new wa({
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
      let m = new Pi(0, 0.04, 0.1, 12);
      m.translate(0, 0.05, 0);
      let h = new Ca(0.08, 0.08, 0.08);
      h.translate(0, 0.04, 0);
      let g = new Qi();
      g.setAttribute(`position`, new Ki([0, 0, 0, 1, 0, 0], 3));
      let _ = new Pi(0.0075, 0.0075, 0.5, 3);
      _.translate(0, 0.25, 0);
      function v(e, t) {
        let n = new ya(e, 0.0075, 3, 64, t * Math.PI * 2);
        return (n.rotateY(Math.PI / 2), n.rotateX(Math.PI / 2), n);
      }
      function y() {
        let e = new Qi();
        return (e.setAttribute(`position`, new Ki([0, 0, 0, 1, 1, 1], 3)), e);
      }
      let b = {
          X: [
            [new _a(m, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
            [new _a(m, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
            [new _a(_, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
          ],
          Y: [
            [new _a(m, a), [0, 0.5, 0]],
            [new _a(m, a), [0, -0.5, 0], [Math.PI, 0, 0]],
            [new _a(_, a)],
          ],
          Z: [
            [new _a(m, o), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
            [new _a(m, o), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
            [new _a(_, o), null, [Math.PI / 2, 0, 0]],
          ],
          XYZ: [[new _a(new qi(0.1, 0), u), [0, 0, 0]]],
          XY: [[new _a(new Ca(0.15, 0.15, 0.01), l), [0.15, 0.15, 0]]],
          YZ: [
            [
              new _a(new Ca(0.15, 0.15, 0.01), s),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new _a(new Ca(0.15, 0.15, 0.01), c),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
        },
        x = {
          X: [
            [
              new _a(new Pi(0.2, 0, 0.6, 4), n),
              [0.3, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
            [
              new _a(new Pi(0.2, 0, 0.6, 4), n),
              [-0.3, 0, 0],
              [0, 0, Math.PI / 2],
            ],
          ],
          Y: [
            [new _a(new Pi(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
            [new _a(new Pi(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [
              new _a(new Pi(0.2, 0, 0.6, 4), n),
              [0, 0, 0.3],
              [Math.PI / 2, 0, 0],
            ],
            [
              new _a(new Pi(0.2, 0, 0.6, 4), n),
              [0, 0, -0.3],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new _a(new qi(0.2, 0), n)]],
          XY: [[new _a(new Ca(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]],
          YZ: [
            [
              new _a(new Ca(0.2, 0.2, 0.01), n),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new _a(new Ca(0.2, 0.2, 0.01), n),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
        },
        S = {
          START: [[new _a(new qi(0.01, 2), r), null, null, null, `helper`]],
          END: [[new _a(new qi(0.01, 2), r), null, null, null, `helper`]],
          DELTA: [[new la(y(), r), null, null, null, `helper`]],
          X: [[new la(g, r), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]],
          Y: [
            [
              new la(g, r),
              [0, -1e3, 0],
              [0, 0, Math.PI / 2],
              [1e6, 1, 1],
              `helper`,
            ],
          ],
          Z: [
            [
              new la(g, r),
              [0, 0, -1e3],
              [0, -Math.PI / 2, 0],
              [1e6, 1, 1],
              `helper`,
            ],
          ],
        },
        C = {
          XYZE: [[new _a(v(0.5, 1), p), null, [0, Math.PI / 2, 0]]],
          X: [[new _a(v(0.5, 0.5), i)]],
          Y: [[new _a(v(0.5, 0.5), a), null, [0, 0, -Math.PI / 2]]],
          Z: [[new _a(v(0.5, 0.5), o), null, [0, Math.PI / 2, 0]]],
          E: [[new _a(v(0.75, 1), d), null, [0, Math.PI / 2, 0]]],
        },
        w = {
          AXIS: [[new la(g, r), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]],
        },
        T = {
          XYZE: [[new _a(new Ba(0.25, 10, 8), n)]],
          X: [
            [
              new _a(new ya(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [0, -Math.PI / 2, -Math.PI / 2],
            ],
          ],
          Y: [
            [
              new _a(new ya(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [Math.PI / 2, 0, 0],
            ],
          ],
          Z: [
            [
              new _a(new ya(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
          ],
          E: [[new _a(new ya(0.75, 0.1, 2, 24), n)]],
        },
        E = {
          X: [
            [new _a(h, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
            [new _a(_, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
            [new _a(h, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
          ],
          Y: [
            [new _a(h, a), [0, 0.5, 0]],
            [new _a(_, a)],
            [new _a(h, a), [0, -0.5, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [new _a(h, o), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
            [new _a(_, o), [0, 0, 0], [Math.PI / 2, 0, 0]],
            [new _a(h, o), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
          ],
          XY: [[new _a(new Ca(0.15, 0.15, 0.01), l), [0.15, 0.15, 0]]],
          YZ: [
            [
              new _a(new Ca(0.15, 0.15, 0.01), s),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new _a(new Ca(0.15, 0.15, 0.01), c),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new _a(new Ca(0.1, 0.1, 0.1), u)]],
        },
        D = {
          X: [
            [
              new _a(new Pi(0.2, 0, 0.6, 4), n),
              [0.3, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
            [
              new _a(new Pi(0.2, 0, 0.6, 4), n),
              [-0.3, 0, 0],
              [0, 0, Math.PI / 2],
            ],
          ],
          Y: [
            [new _a(new Pi(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
            [new _a(new Pi(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [
              new _a(new Pi(0.2, 0, 0.6, 4), n),
              [0, 0, 0.3],
              [Math.PI / 2, 0, 0],
            ],
            [
              new _a(new Pi(0.2, 0, 0.6, 4), n),
              [0, 0, -0.3],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XY: [[new _a(new Ca(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]],
          YZ: [
            [
              new _a(new Ca(0.2, 0.2, 0.01), n),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new _a(new Ca(0.2, 0.2, 0.01), n),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new _a(new Ca(0.2, 0.2, 0.2), n), [0, 0, 0]]],
        },
        O = {
          X: [[new la(g, r), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]],
          Y: [
            [
              new la(g, r),
              [0, -1e3, 0],
              [0, 0, Math.PI / 2],
              [1e6, 1, 1],
              `helper`,
            ],
          ],
          Z: [
            [
              new la(g, r),
              [0, 0, -1e3],
              [0, -Math.PI / 2, 0],
              [1e6, 1, 1],
              `helper`,
            ],
          ],
        };
      function k(e) {
        let t = new Oi();
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
          : a8;
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
                  (K6.setFromEuler(e8.set(0, 0, 0)),
                  r.quaternion.copy(t).multiply(K6),
                  Math.abs(t8.copy(c8).applyQuaternion(t).dot(this.eye)) >
                    0.9 && (r.visible = !1)),
                this.axis === `Y` &&
                  (K6.setFromEuler(e8.set(0, 0, Math.PI / 2)),
                  r.quaternion.copy(t).multiply(K6),
                  Math.abs(t8.copy(l8).applyQuaternion(t).dot(this.eye)) >
                    0.9 && (r.visible = !1)),
                this.axis === `Z` &&
                  (K6.setFromEuler(e8.set(0, Math.PI / 2, 0)),
                  r.quaternion.copy(t).multiply(K6),
                  Math.abs(t8.copy(u8).applyQuaternion(t).dot(this.eye)) >
                    0.9 && (r.visible = !1)),
                this.axis === `XYZE` &&
                  (K6.setFromEuler(e8.set(0, Math.PI / 2, 0)),
                  t8.copy(this.rotationAxis),
                  r.quaternion.setFromRotationMatrix(r8.lookAt(n8, t8, l8)),
                  r.quaternion.multiply(K6),
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
                      W6.set(1e-10, 1e-10, 1e-10)
                        .add(this.worldPositionStart)
                        .sub(this.worldPosition)
                        .multiplyScalar(-1),
                      W6.applyQuaternion(
                        this.worldQuaternionStart.clone().invert(),
                      ),
                      r.scale.copy(W6),
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
            Math.abs(t8.copy(c8).applyQuaternion(t).dot(this.eye)) > e &&
            (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `Y` &&
              Math.abs(t8.copy(l8).applyQuaternion(t).dot(this.eye)) > e &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `Z` &&
              Math.abs(t8.copy(u8).applyQuaternion(t).dot(this.eye)) > e &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `XY` &&
              Math.abs(t8.copy(u8).applyQuaternion(t).dot(this.eye)) < n &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `YZ` &&
              Math.abs(t8.copy(c8).applyQuaternion(t).dot(this.eye)) < n &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)),
            r.name === `XZ` &&
              Math.abs(t8.copy(l8).applyQuaternion(t).dot(this.eye)) < n &&
              (r.scale.set(1e-10, 1e-10, 1e-10), (r.visible = !1)));
        } else
          this.mode === `rotate` &&
            (i8.copy(t),
            t8.copy(this.eye).applyQuaternion(K6.copy(t).invert()),
            r.name.search(`E`) !== -1 &&
              r.quaternion.setFromRotationMatrix(r8.lookAt(this.eye, n8, l8)),
            r.name === `X` &&
              (K6.setFromAxisAngle(c8, Math.atan2(-t8.y, t8.z)),
              K6.multiplyQuaternions(i8, K6),
              r.quaternion.copy(K6)),
            r.name === `Y` &&
              (K6.setFromAxisAngle(l8, Math.atan2(t8.x, t8.z)),
              K6.multiplyQuaternions(i8, K6),
              r.quaternion.copy(K6)),
            r.name === `Z` &&
              (K6.setFromAxisAngle(u8, Math.atan2(t8.y, t8.x)),
              K6.multiplyQuaternions(i8, K6),
              r.quaternion.copy(K6)));
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
  uhe = class extends _a {
    constructor() {
      (super(
        new Ai(1e5, 1e5, 2, 2),
        new Fi({
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
        d8.copy(c8).applyQuaternion(t === `local` ? this.worldQuaternion : a8),
        f8.copy(l8).applyQuaternion(t === `local` ? this.worldQuaternion : a8),
        p8.copy(u8).applyQuaternion(t === `local` ? this.worldQuaternion : a8),
        t8.copy(f8),
        this.mode)
      ) {
        case `translate`:
        case `scale`:
          switch (this.axis) {
            case `X`:
              (t8.copy(this.eye).cross(d8), o8.copy(d8).cross(t8));
              break;
            case `Y`:
              (t8.copy(this.eye).cross(f8), o8.copy(f8).cross(t8));
              break;
            case `Z`:
              (t8.copy(this.eye).cross(p8), o8.copy(p8).cross(t8));
              break;
            case `XY`:
              o8.copy(p8);
              break;
            case `YZ`:
              o8.copy(d8);
              break;
            case `XZ`:
              (t8.copy(p8), o8.copy(f8));
              break;
            case `XYZ`:
            case `E`:
              o8.set(0, 0, 0);
              break;
          }
          break;
        default:
          o8.set(0, 0, 0);
      }
      (o8.length() === 0
        ? this.quaternion.copy(this.cameraQuaternion)
        : (s8.lookAt(W6.set(0, 0, 0), o8, t8),
          this.quaternion.setFromRotationMatrix(s8)),
        super.updateMatrixWorld(e));
    }
  };
