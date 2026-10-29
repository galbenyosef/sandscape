// SceneEditor-NC7_0wmu 39 — emptytexture
// Lines 24643-24661 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
((Lp.viewCenterUniform = new zd({ value: new U() })),
  (Lp.viewDirUniform = new zd({ value: new U() })),
  (Lp.sortRadialUniform = new Id({ value: !0 })),
  (Lp.emptyTexture = (() => {
    let { width: e, height: t, depth: n, maxSplats: r } = du(1),
      i = new Re(new Uint32Array(r * 4), e, t, n);
    return (
      (i.format = Vt),
      (i.type = B),
      (i.internalFormat = `RGBA32UI`),
      (i.needsUpdate = !0),
      i
    );
  })()),
  (Lp.emptyTextures = [Lp.emptyTexture, Lp.emptyTexture]),
  (Lp.programExtTemplate = new Gd(mp().computeUvec4x2Vec4Template)),
  (Lp.programTemplate = new Gd(mp().computeUvec4Vec4Template)),
  (Lp.generatorProgram = new WeakMap()),
  (Lp.fullScreenQuad = new bn(new Mt({ visible: !1 }))));
