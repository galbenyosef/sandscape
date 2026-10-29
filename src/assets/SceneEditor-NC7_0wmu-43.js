// SceneEditor-NC7_0wmu 43 — emptyuint32x4
// Lines 26510-26577 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
((Gp.emptyUint32x4 = (() => {
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
  (Gp.emptyUint32x2 = (() => {
    let { width: e, height: t, depth: n, maxSplats: r } = du(1),
      i = new Re(new Uint32Array(r * 2), e, t, n);
    return (
      (i.format = Xt),
      (i.type = B),
      (i.internalFormat = `RG32UI`),
      (i.needsUpdate = !0),
      i
    );
  })()),
  (Gp.emptyIndicesTexture = (() => {
    let e = new ge(new Uint32Array(4096 * 4), 4096, 1);
    return (
      (e.format = Vt),
      (e.type = B),
      (e.internalFormat = `RGBA32UI`),
      (e.needsUpdate = !0),
      e
    );
  })()),
  (Gp.emptyPackedTexture = Gp.emptyUint32x4),
  (Gp.emptyExtTexture = Gp.emptyUint32x4),
  (Gp.emptySh1Texture = Gp.emptyUint32x2),
  (Gp.emptySh2Texture = Gp.emptyUint32x4),
  (Gp.emptySh3Texture = Gp.emptyUint32x4),
  (Gp.emptyExtSh1Texture = Gp.emptyUint32x4),
  (Gp.emptyExtSh2Texture = Gp.emptyUint32x4),
  (Gp.emptyExtSh3Texture = Gp.emptyUint32x4),
  (Gp.emptyExtSh3BTexture = Gp.emptyUint32x4));
var Kp = Gp;
function qp(e, t) {
  if (!e.properties.has(t)) throw Error(`texture not found`);
  let n = e.properties.get(t).__webglTexture;
  if (!n) throw Error(`texture not found`);
  return n;
}
var Jp = rp();
async function Yp({
  url: e,
  requestHeader: t,
  withCredentials: n,
  offset: r,
  bytes: i,
}) {
  let a = new Request(e, {
    headers: t ? new Headers(t) : void 0,
    credentials: n ? `include` : `same-origin`,
  });
  r !== void 0 &&
    i !== void 0 &&
    a.headers.set(`Range`, `bytes=${r}-${r + i - 1}`);
  let o = await fetch(a);
  if (!o.ok || !o.body)
    throw Error(`Failed to fetch "${e}": ${o.status} ${o.statusText}`);
  return new Uint8Array(await o.arrayBuffer());
}
