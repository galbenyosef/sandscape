// SceneEditor-NC7_0wmu 52 — gsplat
// Lines 29108-29166 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
((Nm.EMPTY_TEXTURE = new me()), (Nm.dynos = null));
var Pm = Nm,
  Fm = Rl(`
  float computeSort(Gsplat gsplat, bool sortRadial, vec3 sortOrigin, vec3 sortDirection, float sortDepthBias, bool sort360) {
    if (!isGsplatActive(gsplat.flags)) {
      return INFINITY;
    }

    vec3 center = gsplat.center - sortOrigin;
    float biasedDepth = dot(center, sortDirection) + sortDepthBias;
    if (!sort360 && (biasedDepth <= 0.0)) {
      return INFINITY;
    }

    return sortRadial ? length(center) : biasedDepth;
  }
`);
function Im({
  gsplat: e,
  sortRadial: t,
  sortOrigin: n,
  sortDirection: r,
  sortDepthBias: i,
  sort360: a,
}) {
  return Fl({
    inTypes: {
      gsplat: Wu,
      sortRadial: `bool`,
      sortOrigin: `vec3`,
      sortDirection: `vec3`,
      sortDepthBias: `float`,
      sort360: `bool`,
    },
    outTypes: { metric: `float` },
    globals: () => [rd, Fm],
    inputs: {
      gsplat: e,
      sortRadial: t,
      sortOrigin: n,
      sortDirection: r,
      sortDepthBias: i,
      sort360: a,
    },
    statements: ({ inputs: e, outputs: t }) => {
      let {
        gsplat: n,
        sortRadial: r,
        sortOrigin: i,
        sortDirection: a,
        sortDepthBias: o,
        sort360: s,
      } = e;
      return Ll(`
        ${t.metric} = computeSort(${n}, ${r}, ${i}, ${a}, ${o}, ${s});
      `);
    },
  }).outputs.metric;
}
