// SceneEditor-NC7_0wmu 87 — children
// Lines 42096-42439 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var HS = ({
    object: e,
    sceneRef: t,
    execute: n,
    onObjectChange: r,
    sessionDir: i,
  }) => {
    (X((e) => e.objectChangeVersion), X(to));
    let [a, o] = (0, J.useState)(``),
      [s, c] = (0, J.useState)(`string`),
      [l, u] = (0, J.useState)([]);
    if (
      ((0, J.useEffect)(() => {
        if (!i) return;
        let e = !1;
        return (
          A.getAssets(i)
            .then((t) => {
              if (e || !t.success) return;
              let n = new Map();
              for (let e of t.assets) {
                let t = [
                  e.model_3d_path,
                  e.splat_path,
                  e.concept_art_path,
                  e.audio_path,
                  e.sfx_path,
                  e.collision_mesh_path,
                  e.path,
                ];
                for (let r of t) {
                  if (!r) continue;
                  let t = Sx(r);
                  n.set(t, `${e.asset_name || e.name} — ${t}`);
                }
              }
              u([...n].map(([e, t]) => ({ path: e, label: t })));
            })
            .catch(() => {}),
          () => {
            e = !0;
          }
        );
      }, [i]),
      !e)
    )
      return (0, Y.jsx)(`div`, {
        className: `text-[11px] text-muted-foreground text-center py-4`,
        children: `No object selected`,
      });
    let d = (i, a) => {
        t.current && n(new ng(t.current, r, e, i, a));
      },
      f = (i) => {
        t.current && n(new ng(t.current, r, e, i, void 0, `remove`));
      },
      p = (i, a) => {
        t.current && n(new ng(t.current, r, e, i, a, `add`));
      },
      m = () => {
        let i = a.trim();
        !i ||
          NS.has(i) ||
          i in e.userData ||
          !t.current ||
          (n(new Wh(t.current, r, e, i, IS(s))), o(``));
      },
      h = Object.entries(e.userData).filter(([e]) => !NS.has(e));
    return (0, Y.jsx)(FS.Provider, {
      value: l,
      children: (0, Y.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          h.length === 0 &&
            (0, Y.jsx)(`div`, {
              className: `text-[10px] text-muted-foreground text-center py-2`,
              children: `No custom metadata`,
            }),
          h.map(([t, n]) =>
            (0, Y.jsx)(
              US,
              {
                owner: e,
                pointer: Yh(``, t),
                value: n,
                depth: 0,
                onCommit: d,
                onRemove: f,
                onAdd: p,
              },
              t,
            ),
          ),
          (0, Y.jsxs)(`div`, {
            className: `border-t border-border pt-2`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5`,
                children: `Add property`,
              }),
              (0, Y.jsxs)(`div`, {
                className: `flex gap-1`,
                children: [
                  (0, Y.jsx)(`input`, {
                    value: a,
                    placeholder: `key`,
                    onChange: (e) => o(e.target.value),
                    onKeyDown: (e) => {
                      e.key === `Enter` && m();
                    },
                    className: `${PS} min-w-0`,
                  }),
                  (0, Y.jsxs)(`select`, {
                    value: s,
                    onChange: (e) => c(e.target.value),
                    className: `bg-background border border-border rounded px-1 text-[10px]`,
                    children: [
                      (0, Y.jsx)(`option`, {
                        value: `string`,
                        children: `str`,
                      }),
                      (0, Y.jsx)(`option`, {
                        value: `number`,
                        children: `num`,
                      }),
                      (0, Y.jsx)(`option`, {
                        value: `boolean`,
                        children: `bool`,
                      }),
                      (0, Y.jsx)(`option`, { value: `null`, children: `null` }),
                      (0, Y.jsx)(`option`, {
                        value: `object`,
                        children: `obj`,
                      }),
                      (0, Y.jsx)(`option`, {
                        value: `array`,
                        children: `list`,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`button`, {
                    onClick: m,
                    disabled: !a.trim(),
                    className: `px-2 rounded border border-primary/30 bg-primary/20 text-[11px] disabled:opacity-30`,
                    children: `+`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  US = ({
    owner: e,
    pointer: t,
    value: n,
    depth: r,
    onCommit: i,
    onRemove: a,
    onAdd: o,
    arrayIndex: s,
    arrayLength: c,
  }) => {
    let l = `${e.uuid}:${t}`,
      u = X((e) => e.expandedPaths[l] ?? !1),
      d = X((e) => e.setPathExpanded),
      f = (e) => d(l, e),
      p = Array.isArray(n) || LS(n),
      m = RS(n),
      h = zS(n),
      g = (n) => {
        if (s === void 0) return;
        let r = t.slice(0, t.lastIndexOf(`/`)),
          a = Zh(e.userData, r);
        if (!Array.isArray(a)) return;
        let o = s + n;
        if (o < 0 || o >= a.length) return;
        let c = Kh(a),
          [l] = c.splice(s, 1);
        (c.splice(o, 0, l), i(r, c));
      };
    return (0, Y.jsxs)(`div`, {
      className:
        r === 0
          ? `border-b border-border/50 pb-2`
          : `ml-2 border-l border-border/40 pl-2`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `group flex items-center gap-1 min-h-5`,
          children: [
            p && !m && !h
              ? (0, Y.jsx)(`button`, {
                  onClick: () => f(!u),
                  className: `text-[10px] w-4`,
                  children: u ? `▾` : `▸`,
                })
              : (0, Y.jsx)(`span`, { className: `w-4` }),
            (0, Y.jsxs)(`span`, {
              className: `text-[10px] text-muted-foreground truncate flex-1`,
              title: t,
              children: [
                BS(t),
                (0, Y.jsx)(`span`, {
                  className: `ml-1 opacity-50`,
                  children: GS(n),
                }),
              ],
            }),
            s !== void 0 &&
              (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsx)(`button`, {
                    onClick: () => g(-1),
                    disabled: s === 0,
                    className: `text-[9px] disabled:opacity-20`,
                    title: `Move up`,
                    children: `↑`,
                  }),
                  (0, Y.jsx)(`button`, {
                    onClick: () => g(1),
                    disabled: s === (c ?? 0) - 1,
                    className: `text-[9px] disabled:opacity-20`,
                    title: `Move down`,
                    children: `↓`,
                  }),
                ],
              }),
            (0, Y.jsx)($S, { owner: e, pointer: t, value: n }),
            (0, Y.jsx)(`button`, {
              onClick: () => a(t),
              className: `text-[10px] text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100`,
              title: `Remove`,
              children: `×`,
            }),
          ],
        }),
        (!p || m || h) &&
          (0, Y.jsx)(KS, { owner: e, pointer: t, value: n, onCommit: i }),
        u &&
          Array.isArray(n) &&
          !m &&
          (0, Y.jsxs)(`div`, {
            className: `space-y-1`,
            children: [
              n.map((s, c) =>
                (0, Y.jsx)(
                  US,
                  {
                    owner: e,
                    pointer: Yh(t, c),
                    value: s,
                    depth: r + 1,
                    arrayIndex: c,
                    arrayLength: n.length,
                    onCommit: i,
                    onRemove: a,
                    onAdd: o,
                  },
                  `${t}:${c}`,
                ),
              ),
              (0, Y.jsx)(`button`, {
                onClick: () => o(`${t}/-`, null),
                className: `text-[10px] text-muted-foreground hover:text-foreground ml-2`,
                children: `+ item`,
              }),
            ],
          }),
        u &&
          LS(n) &&
          !h &&
          (0, Y.jsx)(WS, {
            owner: e,
            pointer: t,
            value: n,
            depth: r,
            onCommit: i,
            onRemove: a,
            onAdd: o,
          }),
      ],
    });
  },
  WS = ({
    owner: e,
    pointer: t,
    value: n,
    depth: r,
    onCommit: i,
    onRemove: a,
    onAdd: o,
  }) => {
    let [s, c] = (0, J.useState)(``);
    return (0, Y.jsxs)(`div`, {
      className: `space-y-1`,
      children: [
        Object.entries(n).map(([n, s]) =>
          (0, Y.jsx)(
            US,
            {
              owner: e,
              pointer: Yh(t, n),
              value: s,
              depth: r + 1,
              onCommit: i,
              onRemove: a,
              onAdd: o,
            },
            n,
          ),
        ),
        (0, Y.jsxs)(`div`, {
          className: `flex gap-1 ml-2`,
          children: [
            (0, Y.jsx)(`input`, {
              value: s,
              placeholder: `new key`,
              onChange: (e) => c(e.target.value),
              className: `${PS} min-w-0`,
            }),
            (0, Y.jsx)(`button`, {
              onClick: () => {
                let e = s.trim();
                !e || e in n || (o(Yh(t, e), null), c(``));
              },
              className: `px-1.5 text-[10px] border border-border rounded`,
              children: `+`,
            }),
          ],
        }),
      ],
    });
  };
function GS(e) {
  return e === null
    ? `null`
    : Array.isArray(e)
      ? `array[${e.length}]`
      : zS(e)
        ? `xyz`
        : typeof e;
}
