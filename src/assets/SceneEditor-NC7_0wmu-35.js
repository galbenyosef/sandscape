// SceneEditor-NC7_0wmu 35 — sdfs
// Lines 23584-23629 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Cp = class extends Se {
    constructor(e = {}) {
      super();
      let {
        type: t,
        invert: n,
        opacity: r,
        color: i,
        displace: a,
        radius: o,
      } = e;
      ((this.type = t ?? `sphere`),
        (this.invert = n ?? !1),
        (this.opacity = r ?? 1),
        (this.color = i ?? new W(1, 1, 1)),
        (this.displace = a ?? new U(0, 0, 0)),
        (this.radius = o ?? 0));
    }
  },
  wp = class e extends Se {
    constructor(t = {}) {
      let {
        name: n,
        rgbaBlendMode: r = `multiply`,
        sdfSmooth: i = 0,
        softEdge: a = 0,
        invert: o = !1,
        sdfs: s = null,
      } = t;
      (super(),
        (this.rgbaBlendMode = r),
        (this.sdfSmooth = i),
        (this.softEdge = a),
        (this.invert = o),
        (this.sdfs = s),
        (this.ordering = e.nextOrdering++),
        (this.name = n ?? `Edit ${this.ordering}`));
    }
    addSdf(e) {
      ((this.sdfs ??= []), this.sdfs.includes(e) || this.sdfs.push(e));
    }
    removeSdf(e) {
      this.sdfs != null && (this.sdfs = this.sdfs.filter((t) => t !== e));
    }
  };
wp.nextOrdering = 1;
