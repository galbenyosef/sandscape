// SceneEditor-NC7_0wmu 99 — tonemappingexposure
// Lines 46259-46395 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Qw({ label: e, checked: t, onChange: n }) {
  return (0, Y.jsxs)(`div`, {
    className: `flex items-center justify-between py-0.5`,
    children: [
      (0, Y.jsx)(`span`, {
        className: `text-[11px] text-foreground`,
        children: e,
      }),
      (0, Y.jsx)(bS, { checked: t, onChange: n }),
    ],
  });
}
function $w({ material: e, setProp: t, version: n }) {
  let [r, i] = (0, J.useState)(0),
    [a, o] = (0, J.useState)(0),
    [s, c] = (0, J.useState)(1.5),
    [l, u] = (0, J.useState)(1);
  return (
    (0, J.useEffect)(() => {
      (i(e.clearcoat ?? 0),
        o(e.clearcoatRoughness ?? 0),
        c(e.ior ?? 1.5),
        u(e.specularIntensity ?? 1));
    }, [e, n]),
    (0, Y.jsxs)(`div`, {
      children: [
        (0, Y.jsx)(Xw, { children: `Clearcoat / Specular` }),
        (0, Y.jsx)(Jw, {
          label: `Clearcoat`,
          value: r,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => {
            (i(e), t(`clearcoat`, e));
          },
        }),
        (0, Y.jsx)(Jw, {
          label: `Clearcoat Roughness`,
          value: a,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => {
            (o(e), t(`clearcoatRoughness`, e));
          },
        }),
        (0, Y.jsx)(Jw, {
          label: `IOR`,
          value: s,
          min: 1,
          max: 2.33,
          step: 0.01,
          onChange: (e) => {
            (c(e), t(`ior`, e));
          },
        }),
        (0, Y.jsx)(Jw, {
          label: `Specular Intensity`,
          value: l,
          min: 0,
          max: 2,
          step: 0.01,
          onChange: (e) => {
            (u(e), t(`specularIntensity`, e));
          },
        }),
      ],
    })
  );
}
function eT(e, t, n, r, i) {
  let a = e.find((e) => e.asset_id === t);
  return a
    ? !i && r !== null && a.modified <= r
      ? { entry: a, action: `unchanged` }
      : { entry: a, action: n ? `conflict` : `reload` }
    : { action: n ? `deleted-dirty` : `deleted` };
}
function tT(e) {
  return typeof e == `object` && e && !Array.isArray(e) ? e : null;
}
function nT(e) {
  let t = tT(e.userData.rendering),
    n = tT(t?.environmentMap),
    r = typeof n?.path == `string` ? Sx(n.path) : null;
  if (r)
    return {
      source: `asset`,
      assetPath: r,
      useAsBackground: n?.background === !0,
      toneMappingExposure:
        typeof t?.toneMappingExposure == `number` ? t.toneMappingExposure : 1,
    };
  let i = tT(e.userData.sandscapeEnvironment),
    a = typeof i?.hdrUrl == `string` && i.hdrUrl ? Sx(i.hdrUrl) : null;
  return a && i?.source === `hdr`
    ? {
        source: `asset`,
        assetPath: a,
        useAsBackground: i.asBackground === !0,
        toneMappingExposure:
          typeof i.toneMappingExposure == `number` ? i.toneMappingExposure : 1,
      }
    : {
        source: e.environment ? `scene` : `none`,
        assetPath: null,
        useAsBackground: !!(e.environment && e.background === e.environment),
        toneMappingExposure:
          typeof t?.toneMappingExposure == `number`
            ? t.toneMappingExposure
            : typeof i?.toneMappingExposure == `number`
              ? i.toneMappingExposure
              : 1,
      };
}
function rT(e, t) {
  let n = { ...(tT(e.userData.rendering) ?? {}) };
  (t.source === `asset` && t.assetPath
    ? (n.environmentMap = {
        path: Sx(t.assetPath),
        background: t.useAsBackground,
      })
    : (t.source === `none` || t.source === `scene`) && delete n.environmentMap,
    (n.toneMappingExposure = t.toneMappingExposure),
    (e.userData.rendering = n),
    delete e.userData.sandscapeEnvironment);
}
function iT(e) {
  return (e || []).filter((e) => !Ui((e.name || ``).replace(/\.json$/i, ``)));
}
function aT(e) {
  return (e.split(/[\\/]/).pop() ?? e)
    .replace(/ /g, `_`)
    .toLowerCase()
    .replace(/\.json$/, ``);
}
