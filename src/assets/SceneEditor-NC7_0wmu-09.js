// SceneEditor-NC7_0wmu 09 — encounter
// Lines 5167-5510 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var zi = new Set(),
  Bi = ({
    sessionDir: e,
    assetId: t,
    thumbnailPath: n,
    thumbnailVersion: r,
    conceptArtPath: i,
    modelPath: a,
    size: o = 64,
    fallback: s,
    className: c = ``,
  }) => {
    let l = (0, J.useRef)(null),
      u = (0, J.useRef)(null),
      [d, f] = (0, J.useState)(!1),
      [p, m] = (0, J.useState)(!1),
      h = di({ thumbnailPath: n, conceptArtPath: i, modelPath: a }),
      g =
        h === `thumbnail`
          ? A.getAssetUrl(e, n, { version: r ?? 0 })
          : h === `concept`
            ? A.getAssetUrl(e, i, !1)
            : null,
      _ = h === `render`;
    return (
      (0, J.useEffect)(() => {
        if (d || !_ || !l.current) return;
        let e = l.current,
          t = new IntersectionObserver(
            (e) => {
              e.some((e) => e.isIntersecting) && (f(!0), t.disconnect());
            },
            { root: null, rootMargin: `120px` },
          );
        return (t.observe(e), () => t.disconnect());
      }, [d, _]),
      (0, J.useEffect)(() => {
        if (!d || !_ || !u.current || !a) return;
        let n = !0,
          r = u.current;
        return (
          Ri(A.getAssetUrl(e, a, !1), r, o)
            .then((i) => {
              !n ||
                !i ||
                (m(!0),
                fi(h, i, zi.has(t)) &&
                  (zi.add(t),
                  r.toBlob((n) => {
                    if (!n) {
                      zi.delete(t);
                      return;
                    }
                    A.saveAssetThumbnail(e, t, n)
                      .catch(() => void 0)
                      .finally(() => zi.delete(t));
                  }, `image/png`)));
            })
            .catch(() => void 0),
          () => {
            n = !1;
          }
        );
      }, [d, _, h, a, e, t, o]),
      (0, Y.jsx)(`div`, {
        ref: l,
        className: `w-full h-full flex items-center justify-center ${c}`,
        children: g
          ? (0, Y.jsx)(`img`, {
              src: g,
              alt: ``,
              className: `w-full h-full object-cover`,
              loading: `lazy`,
            })
          : (0, Y.jsxs)(Y.Fragment, {
              children: [
                _ &&
                  (0, Y.jsx)(`canvas`, {
                    ref: u,
                    width: o * 2,
                    height: o * 2,
                    className: `w-full h-full ${p ? `` : `hidden`}`,
                  }),
                !p && s,
              ],
            }),
      })
    );
  },
  Vi = `.blockout`;
function Hi(e) {
  return `${e}${Vi}`;
}
function Ui(e) {
  return e.toLowerCase().endsWith(Vi);
}
function Wi(e, t) {
  if (!e.length) return null;
  let n = new bt();
  n.name = `${t.source} (blockout)`;
  let r = [];
  for (let t of e) {
    let e = t;
    if (!e.geometry) continue;
    t.matrixAutoUpdate && t.updateMatrix();
    let i = new G(new ct().copy(e.geometry), e.material);
    ((i.name = t.name),
      (i.visible = t.visible),
      (i.userData = { ...t.userData }),
      i.matrix.copy(t.matrix),
      i.matrix.decompose(i.position, i.quaternion, i.scale),
      r.push(i),
      n.add(i));
  }
  if (!r.length) return null;
  let i;
  try {
    i = n.toJSON();
  } finally {
    for (let e of r) e.geometry.dispose();
  }
  return (
    (i.object.userData = {
      sandscapeBlockoutBake: {
        version: 1,
        source: t.source,
        seed: t.seed ?? null,
        pieces: r.length,
        bakedAt: new Date().toISOString(),
      },
    }),
    i
  );
}
function Gi(e, t) {
  return e && e.tabId === t
    ? { taken: e, next: null }
    : { taken: null, next: e };
}
function Ki(e, t) {
  return e && e.tabId === t ? null : e;
}
var qi = (0, J.createContext)({
  portalTarget: null,
  setPortalTarget: () => {},
  sourceNode: null,
  setSourceNode: () => {},
  requestedAsset: null,
  consumeRequestedAsset: () => null,
});
function Ji({
  children: e,
  requestedAsset: t = null,
  consumeRequestedAsset: n = () => null,
}) {
  let [r, i] = (0, J.useState)(null),
    [a, o] = (0, J.useState)(null),
    s = (0, J.useCallback)((e) => {
      i(e);
    }, []),
    c = (0, J.useCallback)((e) => {
      o(e);
    }, []),
    l = (0, J.useMemo)(
      () => ({
        portalTarget: r,
        setPortalTarget: s,
        sourceNode: a,
        setSourceNode: c,
        requestedAsset: t,
        consumeRequestedAsset: n,
      }),
      [r, s, a, c, t, n],
    );
  return (0, Y.jsx)(qi.Provider, { value: l, children: e });
}
function Yi() {
  return (0, J.useContext)(qi);
}
function Xi(e, t) {
  return t === `arena`
    ? e.wallHeight * Math.max(1, e.arenaHeightMult ?? 1)
    : e.wallHeight;
}
function Zi(e, t) {
  return (
    (t === `arena`
      ? (e.arenaWallSegmentCells ?? e.wallSegmentCells)
      : e.wallSegmentCells) ?? 0
  );
}
function Qi(e, t) {
  let n = e.doorHeightRatio;
  if (n && n > 0) return Math.min(n * t, t);
  let r = e.doorHeight;
  return r && r > 0 ? Math.min(r, t) : t;
}
var $i = {
    cellSize: 4,
    wallHeight: 3.5,
    doorHeightRatio: 0.9,
    wallThickness: 0.5,
    floorThickness: 0.3,
    ceilings: !1,
    placeProps: !1,
    placeColumns: !1,
    arenaColumnStride: 3,
    lightSockets: !0,
    lightSocketArenaStride: 3,
    lightSocketCorridorStride: 3,
    lightSocketSize: 0.35,
    wallSockets: !0,
    wallSocketStride: 4,
    perCellTiling: !1,
    wallSegmentCells: 1,
    arenaWallSegmentCells: 2,
    structuralBreakup: !0,
    columnStride: 4,
    floorCeilingDetail: !0,
    procLighting: !0,
    procLightIntensity: 10,
    kitTiling: !0,
    kitTileVariation: 0.5,
    kitTileDensity: 1,
    macroVariation: 0.6,
    macroShader: !1,
    triplanar: !0,
    triplanarScale: 4,
    textureScale: 1,
    uvDensity: 1,
    projectionBlend: 4,
    textureRotation: 0,
    parallax: !1,
    parallaxDepth: 0.05,
    gridWidth: 24,
    gridDepth: 24,
    corridorWidth: 1,
    corridorLengthMin: 4,
    corridorLengthMax: 11,
    branches: 3,
    deadEndChance: 0.25,
    loopChance: 0.15,
    arenaCount: 3,
    arenaMin: 5,
    arenaMax: 10,
    arenaSpacing: 3,
    arenaHeightMult: 2,
    roomCount: 8,
    connectionComplexity: 0.3,
  },
  ea = {
    arena: 1,
    corridor: 2,
    blocked: 3,
    spawn: 4,
    encounter: 5,
    special: 6,
  };
Object.fromEntries(Object.entries(ea).map(([e, t]) => [t, e]));
var ta = [`arena`, `corridor`, `blocked`, `spawn`, `encounter`, `special`],
  na = {
    corridor: 1,
    arena: 3,
    blocked: 2,
    spawn: 1,
    encounter: 1,
    special: 1,
  },
  ra = [`spawn`, `encounter`, `special`];
function ia(e) {
  return ra.includes(e);
}
var aa = { spawn: `spawns`, encounter: `encounters`, special: `specials` },
  oa = {
    spawn: `spawnFacings`,
    encounter: `encounterFacings`,
    special: `specialFacings`,
  },
  sa = {
    spawn: `spawnOffsets`,
    encounter: `encounterOffsets`,
    special: `specialOffsets`,
  };
function ca(e, t) {
  return `${e},${t}`;
}
function la(e, t) {
  let n = new Set(e?.[aa[t]] ?? []);
  if (!e) return n;
  let r = ea[t];
  for (let t = 0; t < e.depth; t++)
    for (let i = 0; i < e.width; i++)
      e.cells[i + t * e.width] === r && n.add(ca(i, t));
  return n;
}
function ua(e) {
  return la(e, `special`);
}
function da(e, t) {
  return e[aa[t]];
}
function fa(e) {
  if (!Number.isFinite(e)) return 0;
  let t = e % 360;
  return t < 0 ? t + 360 : t;
}
function pa(e, t) {
  return e?.[oa[t]] ?? {};
}
function ma(e, t, n) {
  return fa(pa(e, t)[n] ?? 0);
}
function ha(e, t, n, r) {
  let i = oa[t],
    a = { ...(e[i] ?? {}) },
    o = fa(r);
  for (let e of n) o === 0 ? delete a[e] : (a[e] = o);
  return { ...e, [i]: a };
}
var ga = [0, 0, 0];
function _a(e) {
  return !e || (e[0] === 0 && e[1] === 0 && e[2] === 0);
}
function va(e, t) {
  return e?.[sa[t]] ?? {};
}
function ya(e, t, n) {
  let r = va(e, t)[n];
  return Array.isArray(r)
    ? [Number(r[0]) || 0, Number(r[1]) || 0, Number(r[2]) || 0]
    : [...ga];
}
function ba(e, t) {
  if (!e) return;
  let n = {};
  for (let [r, i] of Object.entries(e)) t(r) || (n[r] = i);
  return n;
}
function xa(e, t, n, r, i = !0) {
  let a = ba(e[oa[n]], r);
  a && (i || Object.keys(a).length) && (t[oa[n]] = a);
  let o = ba(e[sa[n]], r);
  o && (i || Object.keys(o).length) && (t[sa[n]] = o);
}
