// Create-CEn7EAZs 17 — domelement
// Lines 5219-5865 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var ll = { type: `change` },
  ul = { type: `start` },
  dl = { type: `end` },
  fl = new Bee(),
  pl = new qee(),
  ml = Math.cos(70 * Ci.DEG2RAD),
  hl = new Y(),
  gl = 2 * Math.PI,
  _l = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  },
  vl = 1e-6,
  yl = class extends la {
    constructor(e, t = null) {
      (super(e, t),
        (this.state = _l.NONE),
        (this.target = new Y()),
        (this.cursor = new Y()),
        (this.minDistance = 0),
        (this.maxDistance = 1 / 0),
        (this.minZoom = 0),
        (this.maxZoom = 1 / 0),
        (this.minTargetRadius = 0),
        (this.maxTargetRadius = 1 / 0),
        (this.minPolarAngle = 0),
        (this.maxPolarAngle = Math.PI),
        (this.minAzimuthAngle = -1 / 0),
        (this.maxAzimuthAngle = 1 / 0),
        (this.enableDamping = !1),
        (this.dampingFactor = 0.05),
        (this.enableZoom = !0),
        (this.zoomSpeed = 1),
        (this.enableRotate = !0),
        (this.rotateSpeed = 1),
        (this.keyRotateSpeed = 1),
        (this.enablePan = !0),
        (this.panSpeed = 1),
        (this.screenSpacePanning = !0),
        (this.keyPanSpeed = 7),
        (this.zoomToCursor = !1),
        (this.autoRotate = !1),
        (this.autoRotateSpeed = 2),
        (this.keys = {
          LEFT: `ArrowLeft`,
          UP: `ArrowUp`,
          RIGHT: `ArrowRight`,
          BOTTOM: `ArrowDown`,
        }),
        (this.mouseButtons = {
          LEFT: Wi.ROTATE,
          MIDDLE: Wi.DOLLY,
          RIGHT: Wi.PAN,
        }),
        (this.touches = { ONE: Ea.ROTATE, TWO: Ea.DOLLY_PAN }),
        (this.target0 = this.target.clone()),
        (this.position0 = this.object.position.clone()),
        (this.zoom0 = this.object.zoom),
        (this._cursorStyle = `auto`),
        (this._domElementKeyEvents = null),
        (this._lastPosition = new Y()),
        (this._lastQuaternion = new gi()),
        (this._lastTargetPosition = new Y()),
        (this._quat = new gi().setFromUnitVectors(e.up, new Y(0, 1, 0))),
        (this._quatInverse = this._quat.clone().invert()),
        (this._spherical = new Zi()),
        (this._sphericalDelta = new Zi()),
        (this._scale = 1),
        (this._panOffset = new Y()),
        (this._rotateStart = new Ni()),
        (this._rotateEnd = new Ni()),
        (this._rotateDelta = new Ni()),
        (this._panStart = new Ni()),
        (this._panEnd = new Ni()),
        (this._panDelta = new Ni()),
        (this._dollyStart = new Ni()),
        (this._dollyEnd = new Ni()),
        (this._dollyDelta = new Ni()),
        (this._dollyDirection = new Y()),
        (this._mouse = new Ni()),
        (this._performCursorZoom = !1),
        (this._pointers = []),
        (this._pointerPositions = {}),
        (this._controlActive = !1),
        (this._onPointerMove = xl.bind(this)),
        (this._onPointerDown = bl.bind(this)),
        (this._onPointerUp = Sl.bind(this)),
        (this._onContextMenu = kl.bind(this)),
        (this._onMouseWheel = Tl.bind(this)),
        (this._onKeyDown = El.bind(this)),
        (this._onTouchStart = Dl.bind(this)),
        (this._onTouchMove = Ol.bind(this)),
        (this._onMouseDown = Cl.bind(this)),
        (this._onMouseMove = wl.bind(this)),
        (this._interceptControlDown = Al.bind(this)),
        (this._interceptControlUp = jl.bind(this)),
        this.domElement !== null && this.connect(this.domElement),
        this.update());
    }
    set cursorStyle(e) {
      ((this._cursorStyle = e),
        e === `grab`
          ? (this.domElement.style.cursor = `grab`)
          : (this.domElement.style.cursor = `auto`));
    }
    get cursorStyle() {
      return this._cursorStyle;
    }
    connect(e) {
      (super.connect(e),
        this.domElement.addEventListener(`pointerdown`, this._onPointerDown),
        this.domElement.addEventListener(`pointercancel`, this._onPointerUp),
        this.domElement.addEventListener(`contextmenu`, this._onContextMenu),
        this.domElement.addEventListener(`wheel`, this._onMouseWheel, {
          passive: !1,
        }),
        this.domElement
          .getRootNode()
          .addEventListener(`keydown`, this._interceptControlDown, {
            passive: !0,
            capture: !0,
          }),
        (this.domElement.style.touchAction = `none`));
    }
    disconnect() {
      (this.domElement.removeEventListener(`pointerdown`, this._onPointerDown),
        this.domElement.ownerDocument.removeEventListener(
          `pointermove`,
          this._onPointerMove,
        ),
        this.domElement.ownerDocument.removeEventListener(
          `pointerup`,
          this._onPointerUp,
        ),
        this.domElement.removeEventListener(`pointercancel`, this._onPointerUp),
        this.domElement.removeEventListener(`wheel`, this._onMouseWheel),
        this.domElement.removeEventListener(`contextmenu`, this._onContextMenu),
        this.stopListenToKeyEvents(),
        this.domElement
          .getRootNode()
          .removeEventListener(`keydown`, this._interceptControlDown, {
            capture: !0,
          }),
        (this.domElement.style.touchAction = ``));
    }
    dispose() {
      this.disconnect();
    }
    getPolarAngle() {
      return this._spherical.phi;
    }
    getAzimuthalAngle() {
      return this._spherical.theta;
    }
    getDistance() {
      return this.object.position.distanceTo(this.target);
    }
    listenToKeyEvents(e) {
      (e.addEventListener(`keydown`, this._onKeyDown),
        (this._domElementKeyEvents = e));
    }
    stopListenToKeyEvents() {
      this._domElementKeyEvents !== null &&
        (this._domElementKeyEvents.removeEventListener(
          `keydown`,
          this._onKeyDown,
        ),
        (this._domElementKeyEvents = null));
    }
    saveState() {
      (this.target0.copy(this.target),
        this.position0.copy(this.object.position),
        (this.zoom0 = this.object.zoom));
    }
    reset() {
      (this.target.copy(this.target0),
        this.object.position.copy(this.position0),
        (this.object.zoom = this.zoom0),
        this.object.updateProjectionMatrix(),
        this.dispatchEvent(ll),
        this.update(),
        (this.state = _l.NONE));
    }
    pan(e, t) {
      (this._pan(e, t), this.update());
    }
    dollyIn(e) {
      (this._dollyIn(e), this.update());
    }
    dollyOut(e) {
      (this._dollyOut(e), this.update());
    }
    rotateLeft(e) {
      (this._rotateLeft(e), this.update());
    }
    rotateUp(e) {
      (this._rotateUp(e), this.update());
    }
    update(e = null) {
      let t = this.object.position;
      (hl.copy(t).sub(this.target),
        hl.applyQuaternion(this._quat),
        this._spherical.setFromVector3(hl),
        this.autoRotate &&
          this.state === _l.NONE &&
          this._rotateLeft(this._getAutoRotationAngle(e)),
        this.enableDamping
          ? ((this._spherical.theta +=
              this._sphericalDelta.theta * this.dampingFactor),
            (this._spherical.phi +=
              this._sphericalDelta.phi * this.dampingFactor))
          : ((this._spherical.theta += this._sphericalDelta.theta),
            (this._spherical.phi += this._sphericalDelta.phi)));
      let n = this.minAzimuthAngle,
        r = this.maxAzimuthAngle;
      (isFinite(n) &&
        isFinite(r) &&
        (n < -Math.PI ? (n += gl) : n > Math.PI && (n -= gl),
        r < -Math.PI ? (r += gl) : r > Math.PI && (r -= gl),
        n <= r
          ? (this._spherical.theta = Math.max(
              n,
              Math.min(r, this._spherical.theta),
            ))
          : (this._spherical.theta =
              this._spherical.theta > (n + r) / 2
                ? Math.max(n, this._spherical.theta)
                : Math.min(r, this._spherical.theta))),
        (this._spherical.phi = Math.max(
          this.minPolarAngle,
          Math.min(this.maxPolarAngle, this._spherical.phi),
        )),
        this._spherical.makeSafe(),
        this.enableDamping === !0
          ? this.target.addScaledVector(this._panOffset, this.dampingFactor)
          : this.target.add(this._panOffset),
        this.target.sub(this.cursor),
        this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
        this.target.add(this.cursor));
      let i = !1;
      if (
        (this.zoomToCursor && this._performCursorZoom) ||
        this.object.isOrthographicCamera
      )
        this._spherical.radius = this._clampDistance(this._spherical.radius);
      else {
        let e = this._spherical.radius;
        ((this._spherical.radius = this._clampDistance(
          this._spherical.radius * this._scale,
        )),
          (i = e != this._spherical.radius));
      }
      if (
        (hl.setFromSpherical(this._spherical),
        hl.applyQuaternion(this._quatInverse),
        t.copy(this.target).add(hl),
        this.object.lookAt(this.target),
        this.enableDamping === !0
          ? ((this._sphericalDelta.theta *= 1 - this.dampingFactor),
            (this._sphericalDelta.phi *= 1 - this.dampingFactor),
            this._panOffset.multiplyScalar(1 - this.dampingFactor))
          : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)),
        this.zoomToCursor && this._performCursorZoom)
      ) {
        let e = null;
        if (this.object.isPerspectiveCamera) {
          let t = hl.length();
          e = this._clampDistance(t * this._scale);
          let n = t - e;
          (this.object.position.addScaledVector(this._dollyDirection, n),
            this.object.updateMatrixWorld(),
            (i = !!n));
        } else if (this.object.isOrthographicCamera) {
          let t = new Y(this._mouse.x, this._mouse.y, 0);
          t.unproject(this.object);
          let n = this.object.zoom;
          ((this.object.zoom = Math.max(
            this.minZoom,
            Math.min(this.maxZoom, this.object.zoom / this._scale),
          )),
            this.object.updateProjectionMatrix(),
            (i = n !== this.object.zoom));
          let r = new Y(this._mouse.x, this._mouse.y, 0);
          (r.unproject(this.object),
            this.object.position.sub(r).add(t),
            this.object.updateMatrixWorld(),
            (e = hl.length()));
        } else
          (console.warn(
            `WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`,
          ),
            (this.zoomToCursor = !1));
        e !== null &&
          (this.screenSpacePanning
            ? this.target
                .set(0, 0, -1)
                .transformDirection(this.object.matrix)
                .multiplyScalar(e)
                .add(this.object.position)
            : (fl.origin.copy(this.object.position),
              fl.direction.set(0, 0, -1).transformDirection(this.object.matrix),
              Math.abs(this.object.up.dot(fl.direction)) < ml
                ? this.object.lookAt(this.target)
                : (pl.setFromNormalAndCoplanarPoint(
                    this.object.up,
                    this.target,
                  ),
                  fl.intersectPlane(pl, this.target))));
      } else if (this.object.isOrthographicCamera) {
        let e = this.object.zoom;
        ((this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale),
        )),
          e !== this.object.zoom &&
            (this.object.updateProjectionMatrix(), (i = !0)));
      }
      return (
        (this._scale = 1),
        (this._performCursorZoom = !1),
        i ||
        this._lastPosition.distanceToSquared(this.object.position) > vl ||
        8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > vl ||
        this._lastTargetPosition.distanceToSquared(this.target) > vl
          ? (this.dispatchEvent(ll),
            this._lastPosition.copy(this.object.position),
            this._lastQuaternion.copy(this.object.quaternion),
            this._lastTargetPosition.copy(this.target),
            !0)
          : !1
      );
    }
    _getAutoRotationAngle(e) {
      return e === null
        ? (gl / 60 / 60) * this.autoRotateSpeed
        : (gl / 60) * this.autoRotateSpeed * e;
    }
    _getZoomScale(e) {
      let t = Math.abs(e * 0.01);
      return 0.95 ** (this.zoomSpeed * t);
    }
    _rotateLeft(e) {
      this._sphericalDelta.theta -= e;
    }
    _rotateUp(e) {
      this._sphericalDelta.phi -= e;
    }
    _panLeft(e, t) {
      (hl.setFromMatrixColumn(t, 0),
        hl.multiplyScalar(-e),
        this._panOffset.add(hl));
    }
    _panUp(e, t) {
      (this.screenSpacePanning === !0
        ? hl.setFromMatrixColumn(t, 1)
        : (hl.setFromMatrixColumn(t, 0), hl.crossVectors(this.object.up, hl)),
        hl.multiplyScalar(e),
        this._panOffset.add(hl));
    }
    _pan(e, t) {
      let n = this.domElement;
      if (this.object.isPerspectiveCamera) {
        let r = this.object.position;
        hl.copy(r).sub(this.target);
        let i = hl.length();
        ((i *= Math.tan(((this.object.fov / 2) * Math.PI) / 180)),
          this._panLeft((2 * e * i) / n.clientHeight, this.object.matrix),
          this._panUp((2 * t * i) / n.clientHeight, this.object.matrix));
      } else
        this.object.isOrthographicCamera
          ? (this._panLeft(
              (e * (this.object.right - this.object.left)) /
                this.object.zoom /
                n.clientWidth,
              this.object.matrix,
            ),
            this._panUp(
              (t * (this.object.top - this.object.bottom)) /
                this.object.zoom /
                n.clientHeight,
              this.object.matrix,
            ))
          : (console.warn(
              `WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`,
            ),
            (this.enablePan = !1));
    }
    _dollyOut(e) {
      this.object.isPerspectiveCamera || this.object.isOrthographicCamera
        ? (this._scale /= e)
        : (console.warn(
            `WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`,
          ),
          (this.enableZoom = !1));
    }
    _dollyIn(e) {
      this.object.isPerspectiveCamera || this.object.isOrthographicCamera
        ? (this._scale *= e)
        : (console.warn(
            `WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`,
          ),
          (this.enableZoom = !1));
    }
    _updateZoomParameters(e, t) {
      if (!this.zoomToCursor) return;
      this._performCursorZoom = !0;
      let n = this.domElement.getBoundingClientRect(),
        r = e - n.left,
        i = t - n.top,
        a = n.width,
        o = n.height;
      ((this._mouse.x = (r / a) * 2 - 1),
        (this._mouse.y = -(i / o) * 2 + 1),
        this._dollyDirection
          .set(this._mouse.x, this._mouse.y, 1)
          .unproject(this.object)
          .sub(this.object.position)
          .normalize());
    }
    _clampDistance(e) {
      return Math.max(this.minDistance, Math.min(this.maxDistance, e));
    }
    _handleMouseDownRotate(e) {
      this._rotateStart.set(e.clientX, e.clientY);
    }
    _handleMouseDownDolly(e) {
      (this._updateZoomParameters(e.clientX, e.clientX),
        this._dollyStart.set(e.clientX, e.clientY));
    }
    _handleMouseDownPan(e) {
      this._panStart.set(e.clientX, e.clientY);
    }
    _handleMouseMoveRotate(e) {
      (this._rotateEnd.set(e.clientX, e.clientY),
        this._rotateDelta
          .subVectors(this._rotateEnd, this._rotateStart)
          .multiplyScalar(this.rotateSpeed));
      let t = this.domElement;
      (this._rotateLeft((gl * this._rotateDelta.x) / t.clientHeight),
        this._rotateUp((gl * this._rotateDelta.y) / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd),
        this.update());
    }
    _handleMouseMoveDolly(e) {
      (this._dollyEnd.set(e.clientX, e.clientY),
        this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
        this._dollyDelta.y > 0
          ? this._dollyOut(this._getZoomScale(this._dollyDelta.y))
          : this._dollyDelta.y < 0 &&
            this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
        this._dollyStart.copy(this._dollyEnd),
        this.update());
    }
    _handleMouseMovePan(e) {
      (this._panEnd.set(e.clientX, e.clientY),
        this._panDelta
          .subVectors(this._panEnd, this._panStart)
          .multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd),
        this.update());
    }
    _handleMouseWheel(e) {
      (this._updateZoomParameters(e.clientX, e.clientY),
        e.deltaY < 0
          ? this._dollyIn(this._getZoomScale(e.deltaY))
          : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
        this.update());
    }
    _handleKeyDown(e) {
      let t = !1;
      switch (e.code) {
        case this.keys.UP:
          (e.ctrlKey || e.metaKey || e.shiftKey
            ? this.enableRotate &&
              this._rotateUp(
                (gl * this.keyRotateSpeed) / this.domElement.clientHeight,
              )
            : this.enablePan && this._pan(0, this.keyPanSpeed),
            (t = !0));
          break;
        case this.keys.BOTTOM:
          (e.ctrlKey || e.metaKey || e.shiftKey
            ? this.enableRotate &&
              this._rotateUp(
                (-gl * this.keyRotateSpeed) / this.domElement.clientHeight,
              )
            : this.enablePan && this._pan(0, -this.keyPanSpeed),
            (t = !0));
          break;
        case this.keys.LEFT:
          (e.ctrlKey || e.metaKey || e.shiftKey
            ? this.enableRotate &&
              this._rotateLeft(
                (gl * this.keyRotateSpeed) / this.domElement.clientHeight,
              )
            : this.enablePan && this._pan(this.keyPanSpeed, 0),
            (t = !0));
          break;
        case this.keys.RIGHT:
          (e.ctrlKey || e.metaKey || e.shiftKey
            ? this.enableRotate &&
              this._rotateLeft(
                (-gl * this.keyRotateSpeed) / this.domElement.clientHeight,
              )
            : this.enablePan && this._pan(-this.keyPanSpeed, 0),
            (t = !0));
          break;
      }
      t && (e.preventDefault(), this.update());
    }
    _handleTouchStartRotate(e) {
      if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
      else {
        let t = this._getSecondPointerPosition(e),
          n = 0.5 * (e.pageX + t.x),
          r = 0.5 * (e.pageY + t.y);
        this._rotateStart.set(n, r);
      }
    }
    _handleTouchStartPan(e) {
      if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
      else {
        let t = this._getSecondPointerPosition(e),
          n = 0.5 * (e.pageX + t.x),
          r = 0.5 * (e.pageY + t.y);
        this._panStart.set(n, r);
      }
    }
    _handleTouchStartDolly(e) {
      let t = this._getSecondPointerPosition(e),
        n = e.pageX - t.x,
        r = e.pageY - t.y,
        i = Math.sqrt(n * n + r * r);
      this._dollyStart.set(0, i);
    }
    _handleTouchStartDollyPan(e) {
      (this.enableZoom && this._handleTouchStartDolly(e),
        this.enablePan && this._handleTouchStartPan(e));
    }
    _handleTouchStartDollyRotate(e) {
      (this.enableZoom && this._handleTouchStartDolly(e),
        this.enableRotate && this._handleTouchStartRotate(e));
    }
    _handleTouchMoveRotate(e) {
      if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
      else {
        let t = this._getSecondPointerPosition(e),
          n = 0.5 * (e.pageX + t.x),
          r = 0.5 * (e.pageY + t.y);
        this._rotateEnd.set(n, r);
      }
      this._rotateDelta
        .subVectors(this._rotateEnd, this._rotateStart)
        .multiplyScalar(this.rotateSpeed);
      let t = this.domElement;
      (this._rotateLeft((gl * this._rotateDelta.x) / t.clientHeight),
        this._rotateUp((gl * this._rotateDelta.y) / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd));
    }
    _handleTouchMovePan(e) {
      if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
      else {
        let t = this._getSecondPointerPosition(e),
          n = 0.5 * (e.pageX + t.x),
          r = 0.5 * (e.pageY + t.y);
        this._panEnd.set(n, r);
      }
      (this._panDelta
        .subVectors(this._panEnd, this._panStart)
        .multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd));
    }
    _handleTouchMoveDolly(e) {
      let t = this._getSecondPointerPosition(e),
        n = e.pageX - t.x,
        r = e.pageY - t.y,
        i = Math.sqrt(n * n + r * r);
      (this._dollyEnd.set(0, i),
        this._dollyDelta.set(
          0,
          (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed,
        ),
        this._dollyOut(this._dollyDelta.y),
        this._dollyStart.copy(this._dollyEnd));
      let a = (e.pageX + t.x) * 0.5,
        o = (e.pageY + t.y) * 0.5;
      this._updateZoomParameters(a, o);
    }
    _handleTouchMoveDollyPan(e) {
      (this.enableZoom && this._handleTouchMoveDolly(e),
        this.enablePan && this._handleTouchMovePan(e));
    }
    _handleTouchMoveDollyRotate(e) {
      (this.enableZoom && this._handleTouchMoveDolly(e),
        this.enableRotate && this._handleTouchMoveRotate(e));
    }
    _addPointer(e) {
      this._pointers.push(e.pointerId);
    }
    _removePointer(e) {
      delete this._pointerPositions[e.pointerId];
      for (let t = 0; t < this._pointers.length; t++)
        if (this._pointers[t] == e.pointerId) {
          this._pointers.splice(t, 1);
          return;
        }
    }
    _isTrackingPointer(e) {
      for (let t = 0; t < this._pointers.length; t++)
        if (this._pointers[t] == e.pointerId) return !0;
      return !1;
    }
    _trackPointer(e) {
      let t = this._pointerPositions[e.pointerId];
      (t === void 0 &&
        ((t = new Ni()), (this._pointerPositions[e.pointerId] = t)),
        t.set(e.pageX, e.pageY));
    }
    _getSecondPointerPosition(e) {
      let t =
        e.pointerId === this._pointers[0]
          ? this._pointers[1]
          : this._pointers[0];
      return this._pointerPositions[t];
    }
    _customWheelEvent(e) {
      let t = e.deltaMode,
        n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
      switch (t) {
        case 1:
          n.deltaY *= 16;
          break;
        case 2:
          n.deltaY *= 100;
          break;
      }
      return (e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n);
    }
  };
