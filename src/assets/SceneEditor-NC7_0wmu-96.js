// SceneEditor-NC7_0wmu 96 — children
// Lines 45216-45558 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Vw = ({
  name: e,
  value: t,
  kind: n,
  sceneTextures: r,
  onSet: i,
  onUploadError: a,
}) => {
  let o = (0, Y.jsx)(`div`, {
    className: `text-[10px] text-foreground truncate`,
    title: e,
    children: e,
  });
  if (n === `number`) {
    let n = t;
    return (0, Y.jsxs)(`div`, {
      className: `p-1.5 rounded border border-border/40`,
      children: [
        o,
        (0, Y.jsxs)(`div`, {
          className: `flex items-center gap-2 mt-1`,
          children: [
            (0, Y.jsx)(`input`, {
              type: `range`,
              min: -10,
              max: 10,
              step: 0.01,
              value: n,
              onChange: (t) => i(e, parseFloat(t.target.value)),
              className: `flex-1 h-1 accent-primary`,
            }),
            (0, Y.jsx)(`div`, {
              className: `w-14`,
              children: (0, Y.jsx)(Bw, { value: n, onChange: (t) => i(e, t) }),
            }),
          ],
        }),
      ],
    });
  }
  if (n === `boolean`)
    return (0, Y.jsxs)(`div`, {
      className: `p-1.5 rounded border border-border/40 flex items-center justify-between`,
      children: [
        o,
        (0, Y.jsx)(`input`, {
          type: `checkbox`,
          checked: !!t,
          onChange: (t) => i(e, t.target.checked),
          className: `accent-primary`,
        }),
      ],
    });
  if (n === `color`) {
    let n = `#` + t.getHexString();
    return (0, Y.jsxs)(`div`, {
      className: `p-1.5 rounded border border-border/40 flex items-center gap-2`,
      children: [
        (0, Y.jsx)(`div`, { className: `flex-1 min-w-0`, children: o }),
        (0, Y.jsx)(`input`, {
          type: `color`,
          value: n,
          onChange: (t) => i(e, new W(t.target.value)),
          className: `w-6 h-6 rounded cursor-pointer border border-border`,
        }),
        (0, Y.jsx)(`span`, {
          className: `text-[9px] text-muted-foreground`,
          children: n,
        }),
      ],
    });
  }
  if (n === `vector2` || n === `vector3` || n === `vector4`) {
    let r = t,
      a =
        n === `vector2`
          ? [`x`, `y`]
          : n === `vector3`
            ? [`x`, `y`, `z`]
            : [`x`, `y`, `z`, `w`],
      s = r,
      c = (t, n) => {
        let a = r.clone();
        ((a[t] = n), i(e, a));
      };
    return (0, Y.jsxs)(`div`, {
      className: `p-1.5 rounded border border-border/40`,
      children: [
        o,
        (0, Y.jsx)(`div`, {
          className: `grid gap-1 mt-1`,
          style: { gridTemplateColumns: `repeat(${a.length}, minmax(0, 1fr))` },
          children: a.map((e) =>
            (0, Y.jsx)(
              Bw,
              { title: e.toUpperCase(), value: s[e], onChange: (t) => c(e, t) },
              e,
            ),
          ),
        }),
      ],
    });
  }
  return n === `texture`
    ? (0, Y.jsxs)(`div`, {
        className: `p-1.5 rounded border border-border/40`,
        children: [
          o,
          (0, Y.jsx)(`div`, {
            className: `mt-1`,
            children: (0, Y.jsx)(Rw, {
              texture: t,
              sceneTextures: r,
              onPick: (t) => i(e, t),
              onUploadError: a,
            }),
          }),
        ],
      })
    : (0, Y.jsxs)(`div`, {
        className: `p-1.5 rounded border border-border/40 flex items-center justify-between opacity-70`,
        children: [
          o,
          (0, Y.jsx)(`span`, {
            className: `text-[9px] text-muted-foreground`,
            children: `read-only`,
          }),
        ],
      });
};
function Hw({ label: e, value: t, onChange: n }) {
  return (0, Y.jsxs)(`div`, {
    children: [
      (0, Y.jsx)(`label`, {
        className: `text-[10px] text-muted-foreground`,
        children: e,
      }),
      (0, Y.jsx)(`textarea`, {
        value: t,
        onChange: (e) => n(e.target.value),
        spellCheck: !1,
        rows: 8,
        className: `w-full mt-1 bg-[#11141a] border border-border/60 rounded px-2 py-1.5 text-[10px] leading-relaxed text-foreground outline-none focus:border-primary/40 font-mono resize-y whitespace-pre`,
      }),
    ],
  });
}
var Uw = ({
    material: e,
    sceneRef: t,
    execute: n,
    onObjectChange: r,
    version: i,
    playing: a,
    setPlaying: o,
    compileError: s,
  }) => {
    let [c, l] = (0, J.useState)(null),
      [u, d] = (0, J.useState)(``),
      [f, p] = (0, J.useState)(``),
      m = (0, J.useRef)(null),
      h = (0, J.useRef)({ vertexShader: ``, fragmentShader: `` });
    (0, J.useEffect)(() => {
      let t = e.vertexShader ?? ``,
        n = e.fragmentShader ?? ``;
      if (m.current !== e.uuid) {
        ((m.current = e.uuid),
          (h.current = { vertexShader: t, fragmentShader: n }),
          d(t),
          p(n));
        return;
      }
      let r = h.current,
        i = t !== r.vertexShader || n !== r.fragmentShader,
        a = u === r.vertexShader && f === r.fragmentShader;
      i &&
        a &&
        ((h.current = { vertexShader: t, fragmentShader: n }), d(t), p(n));
    }, [e, i, u, f]);
    let g = u !== (e.vertexShader ?? ``) || f !== (e.fragmentShader ?? ``),
      _ = (0, J.useMemo)(() => (t.current ? Tw(t.current) : []), [t, i]),
      v = (0, J.useMemo)(() => {
        let t = e.uniforms ?? {};
        return Object.keys(t).map((e) => ({
          name: e,
          value: t[e]?.value,
          kind: jw(t[e]?.value),
        }));
      }, [e, i]),
      y = (0, J.useCallback)(
        (i, a) => {
          t.current && n(new Lh(t.current, r, e, i, a));
        },
        [t, e, n, r],
      ),
      b = () => {
        !t.current ||
          !g ||
          ((h.current = { vertexShader: u, fragmentShader: f }),
          n(new Rh(t.current, r, e, { vertexShader: u, fragmentShader: f })));
      },
      x = Lw(e);
    return (0, Y.jsxs)(`div`, {
      className: `flex-1 overflow-y-auto scrollbar-themed p-3 space-y-4`,
      children: [
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(zw, { children: `Animation` }),
            x
              ? (0, Y.jsxs)(`button`, {
                  onClick: () => o(!a),
                  className: `flex items-center gap-1.5 px-2 py-1 text-[10px] rounded bg-muted/30 hover:bg-muted/50 text-foreground`,
                  title: a
                    ? `Pause time uniform`
                    : `Advance the time uniform in the preview`,
                  children: [
                    a
                      ? (0, Y.jsx)(zn, { className: `w-3 h-3` })
                      : (0, Y.jsx)(S, { className: `w-3 h-3` }),
                    a ? `Pause` : `Play`,
                  ],
                })
              : (0, Y.jsxs)(`button`, {
                  onClick: () => {
                    y(`time`, 0);
                  },
                  className: `flex items-center gap-1.5 px-2 py-1 text-[10px] rounded bg-muted/30 hover:bg-muted/50 text-foreground`,
                  title: `Add a numeric 'time' uniform to animate this shader`,
                  children: [
                    (0, Y.jsx)(P, { className: `w-3 h-3` }),
                    ` Add time uniform`,
                  ],
                }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(zw, { children: `Uniforms` }),
            c &&
              (0, Y.jsx)(`div`, {
                className: `mb-2 text-[10px] text-destructive bg-destructive/10 border border-destructive/30 rounded px-2 py-1`,
                children: c,
              }),
            v.length === 0
              ? (0, Y.jsx)(`div`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: `No uniforms.`,
                })
              : (0, Y.jsx)(`div`, {
                  className: `space-y-1.5`,
                  children: v.map((e) =>
                    (0, Y.jsx)(
                      Vw,
                      {
                        name: e.name,
                        value: e.value,
                        kind: e.kind,
                        sceneTextures: _,
                        onSet: y,
                        onUploadError: l,
                      },
                      e.name,
                    ),
                  ),
                }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between mb-2`,
              children: [
                (0, Y.jsxs)(zw, {
                  children: [
                    `GLSL Source`,
                    g &&
                      (0, Y.jsx)(`span`, {
                        className: `ml-1.5 text-amber-400`,
                        title: `Unapplied changes`,
                        children: `●`,
                      }),
                  ],
                }),
                (0, Y.jsx)(`button`, {
                  onClick: b,
                  disabled: !g,
                  className: `px-2 py-0.5 text-[10px] rounded bg-primary/20 hover:bg-primary/30 text-foreground disabled:opacity-40 disabled:cursor-default`,
                  title: `Recompile the shader from the edited source`,
                  children: `Apply / Recompile`,
                }),
              ],
            }),
            s &&
              (0, Y.jsxs)(`div`, {
                className: `mb-2 text-[10px] text-destructive bg-destructive/10 border border-destructive/30 rounded px-2 py-1.5 whitespace-pre-wrap font-mono flex gap-1.5`,
                children: [
                  (0, Y.jsx)(w, { className: `w-3 h-3 flex-shrink-0 mt-0.5` }),
                  (0, Y.jsx)(`span`, { children: s }),
                ],
              }),
            (0, Y.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, Y.jsx)(Hw, {
                  label: `Vertex Shader`,
                  value: u,
                  onChange: d,
                }),
                (0, Y.jsx)(Hw, {
                  label: `Fragment Shader`,
                  value: f,
                  onChange: p,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ww = ({ label: e, value: t }) =>
    (0, Y.jsxs)(`div`, {
      className: `flex items-center justify-between py-0.5 text-[10px]`,
      children: [
        (0, Y.jsx)(`span`, { className: `text-muted-foreground`, children: e }),
        (0, Y.jsx)(`span`, {
          className: `text-foreground font-mono truncate ml-2 max-w-[60%] text-right`,
          children: t,
        }),
      ],
    }),
  Gw = ({ children: e }) =>
    (0, Y.jsx)(`h4`, {
      className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
      children: e,
    });
function Kw(e) {
  let t = Object.getPrototypeOf(e);
  return typeof e.onBeforeCompile == `function` &&
    e.onBeforeCompile !== t?.onBeforeCompile
    ? `Has a custom onBeforeCompile patch — its appearance is defined in code, not in editable params.`
    : `Unsupported material type (${e.type}) — no structured editor available.`;
}
