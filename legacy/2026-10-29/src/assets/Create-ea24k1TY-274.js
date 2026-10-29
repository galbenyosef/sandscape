// Create-ea24k1TY 274 — domelement
// Lines 92765-92807 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function rhe(e) {
  if (this.domElement.ownerDocument.pointerLockElement)
    return { x: 0, y: 0, button: e.button };
  {
    let t = this.domElement.getBoundingClientRect();
    return {
      x: ((e.clientX - t.left) / t.width) * 2 - 1,
      y: (-(e.clientY - t.top) / t.height) * 2 + 1,
      button: e.button,
    };
  }
}
function ihe(e) {
  if (this.enabled)
    switch (e.pointerType) {
      case `mouse`:
      case `pen`:
        this.pointerHover(this._getPointer(e));
        break;
    }
}
function ahe(e) {
  this.enabled &&
    (document.pointerLockElement ||
      this.domElement.setPointerCapture(e.pointerId),
    this.domElement.addEventListener(`pointermove`, this._onPointerMove),
    this.pointerHover(this._getPointer(e)),
    this.pointerDown(this._getPointer(e)));
}
function ohe(e) {
  this.enabled && this.pointerMove(this._getPointer(e));
}
function she(e) {
  this.enabled &&
    (this.domElement.releasePointerCapture(e.pointerId),
    this.domElement.removeEventListener(`pointermove`, this._onPointerMove),
    this.pointerUp(this._getPointer(e)));
}
function $6(e, t, n) {
  let r = t.intersectObject(e, !0);
  for (let e = 0; e < r.length; e++) if (r[e].object.visible || n) return r[e];
  return !1;
}
