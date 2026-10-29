// SceneEditor-NC7_0wmu 84 — children
// Lines 40963-41279 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function wS(e, t) {
  return (
    e.offset[0] === t.offset[0] &&
    e.offset[1] === t.offset[1] &&
    e.scale[0] === t.scale[0] &&
    e.scale[1] === t.scale[1]
  );
}
var TS = ({
    object: e,
    sceneRef: t,
    execute: n,
    onObjectChange: r,
    remountAsset: i,
  }) => {
    let a = X((e) => e.objectChangeVersion),
      o = X((e) => e.sceneGraphVersion),
      s = X((e) => e.openMaterialEditor),
      [c, l] = (0, J.useState)(`instance`),
      u = t.current,
      d = V_(e),
      f = String(e.userData?.assetName || e.userData?.procKind || `this asset`),
      p = (0, J.useMemo)(() => (u ? ev(u) : []), [u, a, o]),
      m = W_(e),
      h = u && d ? G_(u, d) : void 0,
      g = c === `instance` ? m : h,
      _ = u ? K_(u, e) : null,
      v = !d,
      y = (0, J.useCallback)(
        (t, a = [], o) => {
          if (!u) return;
          let s = J_(c === `instance` ? W_(e) : d ? G_(u, d) : void 0, t, a);
          n(
            new lv(
              u,
              r,
              c === `instance`
                ? { scope: `instance`, object: e }
                : { scope: `family`, assetId: d },
              s,
              i,
              e,
              o,
            ),
          );
        },
        [u, c, e, d, n, r, i],
      ),
      b = (0, J.useMemo)(
        () =>
          !u || !h?.materialUuid
            ? null
            : $_(u, h.materialUuid)?.name || `asset material`,
        [u, h?.materialUuid, a],
      ),
      x =
        g && `materialUuid` in g
          ? (g.materialUuid ?? SS)
          : c === `instance` && h?.materialUuid
            ? CS
            : SS,
      S = (e) => {
        if (e === CS) {
          y({}, [`materialUuid`]);
          return;
        }
        if (e === SS) {
          c === `instance` && h?.materialUuid
            ? y({ materialUuid: null })
            : y({}, [`materialUuid`]);
          return;
        }
        y({ materialUuid: e });
      },
      w = () => {
        let e = new Te({ color: 10132122, roughness: 0.6, metalness: 0.1 });
        ((e.name = `${f} Material`),
          y({ materialUuid: e.uuid }, [], e),
          s(e.uuid));
      },
      T = _?.materialUuid ?? null,
      E = g?.uv ?? B_,
      [D, O] = (0, J.useState)(null),
      k = D ?? E,
      A = (e) => {
        (O(null), wS(e, B_) ? y({}, [`uv`]) : y({ uv: e }));
      },
      j = (e, t, n) => {
        let r = { offset: [...k.offset], scale: [...k.scale] };
        return ((r[e][t] = n), r);
      },
      M = !!g?.uv,
      N = (e, t, n) =>
        (0, Y.jsxs)(
          `div`,
          {
            children: [
              (0, Y.jsx)(`label`, {
                className: `text-[10px] text-muted-foreground`,
                children: e,
              }),
              (0, Y.jsx)(Gx, {
                value: k[t][n],
                step: t === `offset` ? 0.05 : 0.1,
                "aria-label": e,
                onChange: (e) => O(j(t, n, e)),
                onCommit: (e) => A(j(t, n, e)),
              }),
            ],
          },
          `${t}${n}`,
        );
    return (0, Y.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Surface`,
            }),
            (0, Y.jsx)(`div`, {
              className: `flex items-center gap-0.5 p-0.5 rounded-md bg-muted/20`,
              children: xS.map(({ id: e, label: t }) =>
                (0, Y.jsx)(
                  `button`,
                  {
                    disabled: e === `family` && v,
                    onClick: () => l(e),
                    className: `flex-1 px-1.5 py-1 text-[10px] rounded transition-colors disabled:opacity-40 ${c === e ? `bg-primary/20 text-foreground` : `text-muted-foreground hover:text-foreground`}`,
                    title:
                      e === `family`
                        ? `Every placement of "${f}"`
                        : `Only this placement`,
                    children: t,
                  },
                  e,
                ),
              ),
            }),
            (0, Y.jsx)(`p`, {
              className: `mt-1 text-[9px] text-muted-foreground/70 leading-tight`,
              children:
                c === `family`
                  ? `Applies to every "${f}" in the scene.`
                  : `Applies to this object only, and outranks the all-instances setting.`,
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`label`, {
              className: `text-[10px] text-muted-foreground`,
              children: `Material`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, Y.jsxs)(`select`, {
                  value: x,
                  onChange: (e) => S(e.target.value),
                  className: `flex-1 min-w-0 bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors`,
                  children: [
                    c === `instance` &&
                      h?.materialUuid &&
                      (0, Y.jsxs)(`option`, {
                        value: CS,
                        children: [`Inherit — `, b],
                      }),
                    (0, Y.jsx)(`option`, {
                      value: SS,
                      children: `Asset default`,
                    }),
                    p.map((e) =>
                      (0, Y.jsx)(
                        `option`,
                        { value: e.uuid, children: e.name || e.type },
                        e.uuid,
                      ),
                    ),
                  ],
                }),
                (0, Y.jsx)(`button`, {
                  onClick: w,
                  className: `p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent/50`,
                  title: `Create a new material and use it here`,
                  children: (0, Y.jsx)(ee, { className: `w-3 h-3` }),
                }),
                (0, Y.jsx)(`button`, {
                  disabled: !T,
                  onClick: () => T && s(T),
                  className: `p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent/50 disabled:opacity-40`,
                  title: `Edit the material in force here`,
                  children: (0, Y.jsx)(ne, { className: `w-3 h-3` }),
                }),
              ],
            }),
            !!T &&
              !!e.userData?.proc &&
              (0, Y.jsx)(`p`, {
                className: `mt-1 text-[9px] text-amber-400/80 leading-tight`,
                children: `Replaces this piece's procedural kit shading (grime, triplanar, emissive lift).`,
              }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between mb-1`,
              children: [
                (0, Y.jsx)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: `UV offset & scale`,
                }),
                M &&
                  (0, Y.jsx)(`button`, {
                    onClick: () => A(B_),
                    className: `p-0.5 rounded text-muted-foreground hover:text-foreground`,
                    title: `Reset UVs at this scope`,
                    children: (0, Y.jsx)(C, { className: `w-2.5 h-2.5` }),
                  }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-1.5`,
              children: [
                N(`Offset U`, `offset`, 0),
                N(`Offset V`, `offset`, 1),
                N(`Scale U`, `scale`, 0),
                N(`Scale V`, `scale`, 1),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ES = [
    { key: `map`, label: `Albedo` },
    { key: `normalMap`, label: `Normal` },
    { key: `roughnessMap`, label: `Roughness` },
    { key: `metalnessMap`, label: `Metalness` },
    { key: `aoMap`, label: `AO` },
    { key: `emissiveMap`, label: `Emissive` },
  ];
function DS(e) {
  let t = [];
  return (
    e.isMesh && t.push(e),
    e.traverse((n) => {
      n !== e && n.isMesh && t.push(n);
    }),
    t
  );
}
function OS(e) {
  let t = Array.isArray(e.material) ? e.material[0] : e.material;
  return t instanceof Te || t instanceof _e ? t : null;
}
function kS({ texture: e }) {
  let t = (0, J.useRef)(null);
  return (
    (0, J.useEffect)(() => {
      let n = t.current;
      if (!n) return;
      let r = n.getContext(`2d`);
      if (r) {
        if (e?.image)
          try {
            r.drawImage(e.image, 0, 0, n.width, n.height);
            return;
          } catch {}
        ((r.fillStyle = `#3b3b3b`),
          r.fillRect(0, 0, n.width, n.height),
          (r.fillStyle = `#666`),
          (r.font = `10px sans-serif`),
          (r.textAlign = `center`),
          (r.textBaseline = `middle`),
          r.fillText(`?`, n.width / 2, n.height / 2));
      }
    }, [e]),
    (0, Y.jsx)(`canvas`, {
      ref: t,
      width: 40,
      height: 40,
      className: `rounded border border-border`,
    })
  );
}
function AS({ label: e, value: t, min: n, max: r, step: i, onChange: a }) {
  return (0, Y.jsxs)(`div`, {
    children: [
      (0, Y.jsx)(`label`, {
        className: `text-[10px] text-muted-foreground`,
        children: e,
      }),
      (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, Y.jsx)(`input`, {
            type: `range`,
            min: n,
            max: r,
            step: i,
            value: t,
            onChange: (e) => a(parseFloat(e.target.value)),
            className: `flex-1 h-1 accent-primary`,
          }),
          (0, Y.jsx)(`span`, {
            className: `text-[10px] text-muted-foreground w-8 text-right`,
            children: t.toFixed(2),
          }),
        ],
      }),
    ],
  });
}
