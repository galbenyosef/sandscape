// Create-CEn7EAZs 18 — state
// Lines 5866-6151 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function bl(e) {
  this.enabled !== !1 &&
    (this._pointers.length === 0 &&
      (this.domElement.setPointerCapture(e.pointerId),
      this.domElement.ownerDocument.addEventListener(
        `pointermove`,
        this._onPointerMove,
      ),
      this.domElement.ownerDocument.addEventListener(
        `pointerup`,
        this._onPointerUp,
      )),
    !this._isTrackingPointer(e) &&
      (this._addPointer(e),
      e.pointerType === `touch` ? this._onTouchStart(e) : this._onMouseDown(e),
      this._cursorStyle === `grab` &&
        (this.domElement.style.cursor = `grabbing`)));
}
function xl(e) {
  this.enabled !== !1 &&
    (e.pointerType === `touch` ? this._onTouchMove(e) : this._onMouseMove(e));
}
function Sl(e) {
  switch ((this._removePointer(e), this._pointers.length)) {
    case 0:
      (this.domElement.releasePointerCapture(e.pointerId),
        this.domElement.ownerDocument.removeEventListener(
          `pointermove`,
          this._onPointerMove,
        ),
        this.domElement.ownerDocument.removeEventListener(
          `pointerup`,
          this._onPointerUp,
        ),
        this.dispatchEvent(dl),
        (this.state = _l.NONE),
        this._cursorStyle === `grab` &&
          (this.domElement.style.cursor = `grab`));
      break;
    case 1:
      let t = this._pointers[0],
        n = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: n.x, pageY: n.y });
      break;
  }
}
function Cl(e) {
  let t;
  switch (e.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case Wi.DOLLY:
      if (this.enableZoom === !1) return;
      (this._handleMouseDownDolly(e), (this.state = _l.DOLLY));
      break;
    case Wi.ROTATE:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enablePan === !1) return;
        (this._handleMouseDownPan(e), (this.state = _l.PAN));
      } else {
        if (this.enableRotate === !1) return;
        (this._handleMouseDownRotate(e), (this.state = _l.ROTATE));
      }
      break;
    case Wi.PAN:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enableRotate === !1) return;
        (this._handleMouseDownRotate(e), (this.state = _l.ROTATE));
      } else {
        if (this.enablePan === !1) return;
        (this._handleMouseDownPan(e), (this.state = _l.PAN));
      }
      break;
    default:
      this.state = _l.NONE;
  }
  this.state !== _l.NONE && this.dispatchEvent(ul);
}
function wl(e) {
  switch (this.state) {
    case _l.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(e);
      break;
    case _l.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(e);
      break;
    case _l.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(e);
      break;
  }
}
function Tl(e) {
  this.enabled === !1 ||
    this.enableZoom === !1 ||
    this.state !== _l.NONE ||
    (e.preventDefault(),
    this.dispatchEvent(ul),
    this._handleMouseWheel(this._customWheelEvent(e)),
    this.dispatchEvent(dl));
}
function El(e) {
  this.enabled !== !1 && this._handleKeyDown(e);
}
function Dl(e) {
  switch ((this._trackPointer(e), this._pointers.length)) {
    case 1:
      switch (this.touches.ONE) {
        case Ea.ROTATE:
          if (this.enableRotate === !1) return;
          (this._handleTouchStartRotate(e), (this.state = _l.TOUCH_ROTATE));
          break;
        case Ea.PAN:
          if (this.enablePan === !1) return;
          (this._handleTouchStartPan(e), (this.state = _l.TOUCH_PAN));
          break;
        default:
          this.state = _l.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ea.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          (this._handleTouchStartDollyPan(e),
            (this.state = _l.TOUCH_DOLLY_PAN));
          break;
        case Ea.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          (this._handleTouchStartDollyRotate(e),
            (this.state = _l.TOUCH_DOLLY_ROTATE));
          break;
        default:
          this.state = _l.NONE;
      }
      break;
    default:
      this.state = _l.NONE;
  }
  this.state !== _l.NONE && this.dispatchEvent(ul);
}
function Ol(e) {
  switch ((this._trackPointer(e), this.state)) {
    case _l.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      (this._handleTouchMoveRotate(e), this.update());
      break;
    case _l.TOUCH_PAN:
      if (this.enablePan === !1) return;
      (this._handleTouchMovePan(e), this.update());
      break;
    case _l.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      (this._handleTouchMoveDollyPan(e), this.update());
      break;
    case _l.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      (this._handleTouchMoveDollyRotate(e), this.update());
      break;
    default:
      this.state = _l.NONE;
  }
}
function kl(e) {
  this.enabled !== !1 && e.preventDefault();
}
function Al(e) {
  e.key === `Control` &&
    ((this._controlActive = !0),
    this.domElement
      .getRootNode()
      .addEventListener(`keyup`, this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function jl(e) {
  e.key === `Control` &&
    ((this._controlActive = !1),
    this.domElement
      .getRootNode()
      .removeEventListener(`keyup`, this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function Ml(e) {
  let t = new xa(e);
  t.compileEquirectangularShader();
  let n = new $i(),
    r = new Ui(3359846),
    i = new Ui(1712691),
    a = new Ui(1118488),
    o = document.createElement(`canvas`);
  ((o.width = 512), (o.height = 512));
  let s = o.getContext(`2d`),
    c = s.createLinearGradient(0, 0, 0, 512);
  (c.addColorStop(0, `#${r.getHexString()}`),
    c.addColorStop(0.5, `#${i.getHexString()}`),
    c.addColorStop(1, `#${a.getHexString()}`),
    (s.fillStyle = c),
    s.fillRect(0, 0, 512, 512));
  let l = new Xi(o);
  ((l.mapping = 303), (n.background = l), (n.environment = l));
  let u = t.fromScene(n, 0.04).texture;
  return (t.dispose(), l.dispose(), u);
}
function Nl(e) {
  ((e.shadowMap.enabled = !0),
    (e.shadowMap.type = 2),
    (e.toneMapping = 4),
    (e.toneMappingExposure = 1.6),
    (e.outputColorSpace = fa));
}
function Pl(e, t) {
  e.background = new Ui(1316126);
  let n = Ml(t);
  e.environment = n;
  let r = new zi(13426175, 4473907, 1.2);
  e.add(r);
  let i = new va(16777215, 0.5);
  e.add(i);
  let a = new Vi(16772829, 1.8);
  (a.position.set(4, 8, 4),
    (a.castShadow = !0),
    (a.shadow.mapSize.width = 1024),
    (a.shadow.mapSize.height = 1024),
    (a.shadow.camera.near = 0.5),
    (a.shadow.camera.far = 25),
    (a.shadow.camera.left = -6),
    (a.shadow.camera.right = 6),
    (a.shadow.camera.top = 6),
    (a.shadow.camera.bottom = -6),
    (a.shadow.bias = -0.001),
    e.add(a));
  let o = new Vi(11189213, 0.7);
  (o.position.set(-4, 4, -2), e.add(o));
  let s = new Vi(8952251, 0.5);
  (s.position.set(-2, 3, -5), e.add(s));
  let c = new ca(new ji(30, 30), new Gee({ opacity: 0.25 }));
  ((c.rotation.x = -Math.PI / 2), (c.receiveShadow = !0), e.add(c));
  let l = new Ji(12, 24, 3355460, 2434357);
  return (
    (l.position.y = 0.001),
    Array.isArray(l.material)
      ? l.material.forEach((e) => {
          ((e.transparent = !0), (e.opacity = 0.35));
        })
      : ((l.material.transparent = !0), (l.material.opacity = 0.35)),
    e.add(l),
    { envMap: n, ground: c, grid: l, lights: [r, i, a, o, s] }
  );
}
function Fl(e, t) {
  e.traverse((e) => {
    if (e.isMesh) {
      ((e.castShadow = !0), (e.receiveShadow = !0));
      let n = e;
      if (n.material && n.material.isMeshStandardMaterial) {
        let e = n.material;
        ((e.envMap = t), (e.envMapIntensity = 1), (e.needsUpdate = !0));
      }
    }
  });
}
function Il(e) {
  let t = new ea().setFromObject(e);
  e.position.y -= t.min.y;
}
function Ll(e) {
  let t = new ea().setFromObject(e);
  return (t.min.y + t.max.y) / 2;
}
