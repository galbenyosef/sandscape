// Create-ea24k1TY 18 — classname
// Lines 5819-5890 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function ane({
  isOpen: e,
  onClose: t,
  title: n,
  message: r = `The 3D model has not been generated yet.`,
}) {
  return e
    ? (0, Z.jsx)(`div`, {
        className: `fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4`,
        onClick: t,
        children: (0, Z.jsxs)(`div`, {
          className: `bg-card rounded-xl border border-border max-w-sm w-full overflow-hidden`,
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, Z.jsxs)(`div`, {
              className: `px-4 py-3 border-b border-border flex items-center justify-between`,
              children: [
                (0, Z.jsx)(`h3`, {
                  className: `text-sm font-semibold text-white truncate`,
                  children: n,
                }),
                (0, Z.jsx)(x, {
                  variant: `ghost`,
                  size: `sm`,
                  onClick: t,
                  className: `text-muted-foreground hover:text-white -mr-2`,
                  children: (0, Z.jsx)(li, { className: `h-4 w-4` }),
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `p-6 text-center`,
              children: [
                (0, Z.jsx)(`div`, {
                  className: `w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center`,
                  children: (0, Z.jsx)(U, {
                    className: `h-8 w-8 text-muted-foreground/60`,
                  }),
                }),
                (0, Z.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: r,
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
function Cl(e, t) {
  let n = [];
  e.traverse((e) => {
    e instanceof _a && !e.userData.__lodWireOverlay && n.push(e);
  });
  for (let e of n) {
    let n = Array.isArray(e.material) ? e.material : [e.material];
    for (let e of n) e.wireframe = t === `wireframe`;
    let r = e.children.find((e) => e.userData.__lodWireOverlay);
    if (t === `both` && !r) {
      let t = new Fi({
          color: `#FF8800`,
          wireframe: !0,
          transparent: !0,
          opacity: 0.4,
          depthTest: !0,
        }),
        n = new _a(e.geometry, t);
      ((n.userData.__lodWireOverlay = !0), e.add(n));
    } else t !== `both` && r && (r.material.dispose(), e.remove(r));
  }
}
