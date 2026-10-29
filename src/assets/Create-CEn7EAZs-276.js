// Create-CEn7EAZs 276 — domelement
// Lines 93544-93586 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Ihe(e) {
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
function Lhe(e) {
  if (this.enabled)
    switch (e.pointerType) {
      case `mouse`:
      case `pen`:
        this.pointerHover(this._getPointer(e));
        break;
    }
}
function Rhe(e) {
  this.enabled &&
    (document.pointerLockElement ||
      this.domElement.setPointerCapture(e.pointerId),
    this.domElement.addEventListener(`pointermove`, this._onPointerMove),
    this.pointerHover(this._getPointer(e)),
    this.pointerDown(this._getPointer(e)));
}
function zhe(e) {
  this.enabled && this.pointerMove(this._getPointer(e));
}
function Bhe(e) {
  this.enabled &&
    (this.domElement.releasePointerCapture(e.pointerId),
    this.domElement.removeEventListener(`pointermove`, this._onPointerMove),
    this.pointerUp(this._getPointer(e)));
}
function Q6(e, t, n) {
  let r = t.intersectObject(e, !0);
  for (let e = 0; e < r.length; e++) if (r[e].object.visible || n) return r[e];
  return !1;
}
