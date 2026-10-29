// SceneEditor-NC7_0wmu 48 — array
// Lines 27945-27992 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function wm(e) {
  try {
    let t;
    if (typeof e == `string`) t = e;
    else {
      let n = e instanceof ArrayBuffer ? new Uint8Array(e) : e;
      if (n.length > 65536) return;
      t = new TextDecoder().decode(n);
    }
    let n = JSON.parse(t);
    if (!n || typeof n != `object` || Array.isArray(n)) return;
    let r = n.version === 2;
    for (let e of [`means`, `scales`, `quats`, `sh0`]) {
      if (!n[e] || typeof n[e] != `object` || Array.isArray(n[e])) return;
      if (r) {
        if (
          !n[e].files ||
          ((e === `scales` || e === `sh0`) && !n[e].codebook) ||
          (e === `means` && (!n[e].mins || !n[e].maxs))
        )
          return;
      } else if (
        !n[e].shape ||
        !n[e].files ||
        (e !== `quats` && (!n[e].mins || !n[e].maxs))
      )
        return;
    }
    return n;
  } catch {
    return;
  }
}
function Tm(e) {
  try {
    let t = e instanceof ArrayBuffer ? new Uint8Array(e) : e,
      n = null,
      r = $c(t, {
        filter: ({ name: e }) =>
          e.split(/[\\/]/).pop() === `meta.json` ? ((n = e), !0) : !1,
      });
    if (!n) return;
    let i = wm(r[n]);
    return i ? { name: n, json: i } : void 0;
  } catch {
    return;
  }
}
