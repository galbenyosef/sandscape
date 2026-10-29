// SceneEditor-NC7_0wmu 88 — jsx
// Lines 42440-42740 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var KS = ({ owner: e, pointer: t, value: n, onCommit: r }) => {
    let i = X((e) => e.fieldInterpretations),
      a = X((e) => e.setFieldInterpretation),
      o = i[VS(e.uuid, t)] ?? `literal`;
    return (0, Y.jsxs)(`div`, {
      className: `ml-4 mb-1`,
      children: [
        (typeof n == `number` || typeof n == `string` || RS(n) || zS(n)) &&
          (0, Y.jsxs)(`select`, {
            value: o,
            onChange: (n) => a(e.uuid, t, n.target.value),
            className: `mb-1 bg-background border border-border rounded px-1 py-0.5 text-[9px]`,
            title: `Editor interpretation`,
            children: [
              (0, Y.jsx)(`option`, { value: `literal`, children: `literal` }),
              (0, Y.jsx)(`option`, { value: `vec3`, children: `vec3` }),
              (0, Y.jsx)(`option`, {
                value: `quaternion`,
                children: `quaternion`,
              }),
              (0, Y.jsx)(`option`, { value: `color`, children: `color` }),
              (0, Y.jsx)(`option`, {
                value: `dimensions`,
                children: `dimensions`,
              }),
              (0, Y.jsx)(`option`, { value: `asset`, children: `asset` }),
            ],
          }),
        (0, Y.jsx)(qS, {
          pointer: t,
          value: n,
          interpretation: o,
          onCommit: r,
        }),
      ],
    });
  },
  qS = ({ pointer: e, value: t, interpretation: n, onCommit: r }) => {
    let i = (0, J.useContext)(FS),
      [a, o] = (0, J.useState)(!1);
    if (
      typeof t == `string` &&
      (n === `asset` ||
        /\.(glb|gltf|spz|png|jpe?g|webp|hdr|mp3|wav|ogg)$/i.test(t))
    ) {
      let n = Sx(t),
        s = i.some((e) => e.path === n),
        c = a || (n !== `` && !s);
      return (0, Y.jsxs)(`div`, {
        className: `space-y-1`,
        children: [
          (0, Y.jsxs)(`select`, {
            value: s ? n : c ? `__custom__` : ``,
            onChange: (t) => {
              let n = t.target.value;
              if (n === `__custom__`) {
                o(!0);
                return;
              }
              (o(!1), r(e, n));
            },
            className: PS,
            children: [
              (0, Y.jsx)(`option`, {
                value: ``,
                children: `Select project asset…`,
              }),
              i.map((e) =>
                (0, Y.jsx)(
                  `option`,
                  { value: e.path, children: e.label },
                  e.path,
                ),
              ),
              (0, Y.jsx)(`option`, {
                value: `__custom__`,
                children: `Custom path…`,
              }),
            ],
          }),
          c && (0, Y.jsx)(YS, { value: n, onCommit: (t) => r(e, Sx(t)) }),
        ],
      });
    }
    if (n === `color`) {
      let n = ZS(t);
      if (n)
        return (0, Y.jsxs)(`div`, {
          className: `flex gap-2 items-center`,
          children: [
            (0, Y.jsx)(`input`, {
              type: `color`,
              value: n,
              onChange: (n) => r(e, QS(n.target.value, t)),
              className: `w-6 h-6`,
            }),
            (0, Y.jsx)(`span`, {
              className: `text-[10px] text-muted-foreground`,
              children: n,
            }),
          ],
        });
    }
    if (RS(t)) {
      let i =
        n === `quaternion`
          ? [`X`, `Y`, `Z`, `W`]
          : n === `dimensions`
            ? [`W`, `H`, `D`, `N`]
            : [`X`, `Y`, `Z`, `W`];
      return (0, Y.jsx)(`div`, {
        className: `grid gap-1 ${t.length <= 2 ? `grid-cols-2` : t.length === 3 ? `grid-cols-3` : `grid-cols-4`}`,
        children: t.map((n, a) =>
          (0, Y.jsx)(
            JS,
            {
              label: i[a] ?? String(a),
              value: n,
              onCommit: (n) => {
                let i = t.slice();
                ((i[a] = n), r(e, i));
              },
            },
            a,
          ),
        ),
      });
    }
    return zS(t)
      ? (0, Y.jsx)(`div`, {
          className: `grid grid-cols-3 gap-1`,
          children: [`x`, `y`, `z`].map((n) =>
            (0, Y.jsx)(
              JS,
              {
                label: n.toUpperCase(),
                value: t[n],
                onCommit: (i) => r(e, { ...t, [n]: i }),
              },
              n,
            ),
          ),
        })
      : typeof t == `number`
        ? (0, Y.jsx)(JS, { value: t, onCommit: (t) => r(e, t) })
        : typeof t == `boolean`
          ? (0, Y.jsxs)(`label`, {
              className: `flex gap-1.5 text-[11px] items-center`,
              children: [
                (0, Y.jsx)(`input`, {
                  type: `checkbox`,
                  checked: t,
                  onChange: (t) => r(e, t.target.checked),
                }),
                t ? `true` : `false`,
              ],
            })
          : typeof t == `string`
            ? (0, Y.jsx)(YS, { value: t, onCommit: (t) => r(e, t) })
            : t === null
              ? (0, Y.jsxs)(`select`, {
                  value: `null`,
                  onChange: (t) => {
                    let n = t.target.value;
                    n !== `null` && r(e, IS(n));
                  },
                  className: PS,
                  children: [
                    (0, Y.jsx)(`option`, { value: `null`, children: `null` }),
                    (0, Y.jsx)(`option`, {
                      value: `string`,
                      children: `convert to string`,
                    }),
                    (0, Y.jsx)(`option`, {
                      value: `number`,
                      children: `convert to number`,
                    }),
                    (0, Y.jsx)(`option`, {
                      value: `boolean`,
                      children: `convert to boolean`,
                    }),
                    (0, Y.jsx)(`option`, {
                      value: `object`,
                      children: `convert to object`,
                    }),
                    (0, Y.jsx)(`option`, {
                      value: `array`,
                      children: `convert to array`,
                    }),
                  ],
                })
              : (0, Y.jsx)(XS, { value: t, onCommit: (t) => r(e, t) });
  },
  JS = ({ label: e, value: t, onCommit: n }) =>
    (0, Y.jsxs)(`label`, {
      className: `min-w-0`,
      children: [
        e &&
          (0, Y.jsx)(`span`, {
            className: `text-[9px] text-muted-foreground`,
            children: e,
          }),
        (0, Y.jsx)(Gx, {
          value: t,
          step: 0.1,
          "aria-label": e || void 0,
          onCommit: (e) => {
            e !== t && n(e);
          },
          className: `${PS} cursor-ew-resize`,
        }),
      ],
    }),
  YS = ({ value: e, onCommit: t }) => {
    let [n, r] = (0, J.useState)(e);
    return (
      (0, J.useEffect)(() => r(e), [e]),
      (0, Y.jsx)(`input`, {
        value: n,
        onChange: (e) => r(e.target.value),
        onBlur: () => {
          n !== e && t(n);
        },
        onKeyDown: (e) => {
          e.key === `Enter` && t(n);
        },
        className: PS,
      })
    );
  },
  XS = ({ value: e, onCommit: t }) => {
    let [n, r] = (0, J.useState)(() => JSON.stringify(e, null, 2)),
      [i, a] = (0, J.useState)(!1);
    return (
      (0, J.useEffect)(() => r(JSON.stringify(e, null, 2)), [e]),
      (0, Y.jsxs)(`div`, {
        children: [
          (0, Y.jsx)(`textarea`, {
            value: n,
            onChange: (e) => {
              (r(e.target.value), a(!1));
            },
            onBlur: () => {
              try {
                (t(JSON.parse(n)), a(!1));
              } catch {
                a(!0);
              }
            },
            rows: Math.min(
              8,
              n.split(`
`).length + 1,
            ),
            className: `${PS} font-mono text-[10px] ${i ? `border-destructive` : ``}`,
          }),
          i &&
            (0, Y.jsx)(`span`, {
              className: `text-[9px] text-destructive`,
              children: `Invalid JSON`,
            }),
        ],
      })
    );
  };
function ZS(e) {
  if (typeof e == `number` && Number.isFinite(e))
    return `#${Math.max(0, Math.min(16777215, Math.round(e)))
      .toString(16)
      .padStart(6, `0`)}`;
  if (typeof e == `string` && /^#[0-9a-f]{6}$/i.test(e)) return e;
  if (RS(e) && e.length >= 3) {
    let t = e.every((e) => e >= 0 && e <= 1) ? 255 : 1;
    return `#${e
      .slice(0, 3)
      .map((e) =>
        Math.max(0, Math.min(255, Math.round(e * t)))
          .toString(16)
          .padStart(2, `0`),
      )
      .join(``)}`;
  }
  return null;
}
function QS(e, t) {
  let n = Number.parseInt(e.slice(1), 16);
  if (typeof t == `number`) return n;
  if (typeof t == `string`) return e;
  if (RS(t)) {
    let e = [n >> 16, (n >> 8) & 255, n & 255],
      r = t.slice(0, 3).every((e) => e >= 0 && e <= 1),
      i = t.slice();
    return (
      e.forEach((e, t) => {
        i[t] = r ? e / 255 : e;
      }),
      i
    );
  }
  return e;
}
