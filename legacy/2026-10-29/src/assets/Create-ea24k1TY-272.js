// Create-ea24k1TY 272 — error
// Lines 91646-91754 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function z6(e) {
  return e instanceof Error
    ? e.message
    : e && typeof e == `object` && `message` in e
      ? String(e.message)
      : String(e);
}
function B6(e) {
  let t = e.material;
  return Array.isArray(t) ? t : t ? [t] : [];
}
function Qme(e) {
  return e instanceof _a || e instanceof la || e instanceof Yi;
}
function $me(e) {
  e.traverse((e) => {
    for (let t of B6(e)) {
      let e = t;
      for (let t of Object.keys(e)) {
        let n = e[t];
        n?.isTexture && (n.dispose?.(), (e[t] = null));
      }
    }
  });
}
function V6(e) {
  e.geometry?.dispose?.();
  for (let t of B6(e)) {
    let e = t;
    for (let t of Object.keys(e)) {
      let n = e[t];
      n?.isTexture && n.dispose?.();
    }
    t.dispose();
  }
}
function ehe(e) {
  e.traverse((e) => V6(e));
}
async function the(e) {
  let t = await e.arrayBuffer(),
    { FBXLoader: n, GLTFExporter: r } = await o(
      async () => {
        let { FBXLoader: e, GLTFExporter: t } = await import(
          `./three-stdlib-BJSGSXlY.js`
        ).then((e) => e.t);
        return { FBXLoader: e, GLTFExporter: t };
      },
      __vite__mapDeps([2, 1, 3]),
    ),
    i = (e, t) =>
      new Promise((n, i) => {
        new r().parse(
          e,
          (e) => {
            e instanceof ArrayBuffer
              ? n(e)
              : i(
                  Error(
                    `GLTF export returned JSON, not binary GLB (binary option ignored)`,
                  ),
                );
          },
          (e) => i(Error(`GLB export failed: ${z6(e)}`)),
          { binary: !0, animations: t },
        );
      }),
    a;
  try {
    a = new n().parse(t, ``);
  } catch (t) {
    throw Error(
      `Could not parse "${e.name}" as FBX. Binary FBX (7.4+) is supported; ASCII FBX is only partially supported by the browser loader. (${z6(t)})`,
    );
  }
  try {
    let t = a.animations ?? [];
    if (t.length === 0)
      throw Error(
        `"${e.name}" has no animation clips — upload an FBX with baked animation.`,
      );
    $me(a);
    let n = await i(a, t);
    if (n.byteLength <= 104857600)
      return {
        blob: new Blob([n], { type: `model/gltf-binary` }),
        warnings: [],
      };
    let r = [];
    a.traverse((e) => {
      Qme(e) && r.push(e);
    });
    for (let e of r) (e.parent?.remove(e), V6(e));
    for (let e of t)
      e.tracks = e.tracks.filter((e) => {
        let t = zi.parseTrackName(e.name);
        return !!zi.findNode(a, t.nodeName);
      });
    let o = await i(a, t);
    return {
      blob: new Blob([o], { type: `model/gltf-binary` }),
      warnings: [
        `The model's mesh was too large to upload — kept skeleton and animation only; the preview shows the skeleton.`,
      ],
    };
  } finally {
    ehe(a);
  }
}
