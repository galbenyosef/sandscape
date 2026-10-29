// Create-ea24k1TY 232 — classname
// Lines 78868-79112 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function V2(e) {
  return (e.asset_name || e.name || `Untitled`).replace(/_/g, ` `);
}
function H2(e) {
  if (!isFinite(e) || e < 0) return `00:00.0`;
  let t = Math.floor(e / 60),
    n = e % 60;
  return `${String(t).padStart(2, `0`)}:${n.toFixed(1).padStart(4, `0`)}`;
}
var U2 = ({ onClick: e, disabled: t, active: n, title: r, children: i }) =>
    (0, Z.jsx)(`button`, {
      type: `button`,
      onClick: e,
      disabled: t,
      title: r,
      className: `p-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${n ? `bg-purple-600/30 text-purple-300` : `hover:bg-gray-700/50`}`,
      children: i,
    }),
  Wde = ({
    engine: e,
    asset: t,
    clipVersion: n,
    bakeStatus: r,
    isDirty: i,
    onApply: a,
    onRevert: o,
  }) => {
    let s = Q0((e) => e.loop),
      c = Q0((e) => e.effects),
      [l, u] = (0, X.useState)(!1),
      d = (0, X.useRef)(null),
      f = (0, X.useRef)(0),
      [p, m] = (0, X.useState)(0);
    ((0, X.useEffect)(() => {
      (u(!1), (f.current = 0));
    }, [t?.asset_name, t?.name, t?.id]),
      (0, X.useEffect)(() => {
        let t = 0;
        return e.subscribePlayhead((n) => {
          f.current = n.time;
          let r = e.getBuffer(),
            i = r ? r.duration : n.duration;
          d.current && (d.current.textContent = `${H2(n.time)} / ${H2(i)}`);
          let a = performance.now();
          a - t > 250 && ((t = a), m((e) => e + 1));
        });
      }, [e]));
    let h = e.getBuffer(),
      g = h !== null,
      _ = h ? h.duration : 0,
      v = f.current,
      y = (0, X.useCallback)(() => {
        e.isPlaying() ? (e.pause(), u(!1)) : (e.play(), u(!0));
      }, [e]),
      b = (0, X.useCallback)(() => {
        (e.stop(), u(!1));
      }, [e]);
    (0, X.useEffect)(
      () =>
        e.subscribePlayhead(() => {
          let t = e.isPlaying();
          u((e) => (e === t ? e : t));
        }),
      [e],
    );
    let x = (0, X.useCallback)(
      (t) => {
        (e.seek(t), (f.current = t));
      },
      [e],
    );
    (0, X.useEffect)(() => {
      let e = (e) => {
        e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement ||
          (e.code === `Space` && (e.preventDefault(), y()));
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [y]);
    let S = (0, X.useCallback)(async () => {
        let n = e.getBuffer();
        if (!n) return;
        let r = _2(n, { loop: s, effects: c }),
          i = x2(r ? await r : n),
          a = t ? V2(t).replace(/\s+/g, `_`) + `.wav` : `export.wav`,
          o = URL.createObjectURL(i),
          l = document.createElement(`a`);
        ((l.href = o), (l.download = a), l.click(), URL.revokeObjectURL(o));
      }, [e, t, s, c]),
      C = c.filter((e) => e.enabled).length,
      w = [];
    return (
      s && w.push(`Loop ON`),
      C > 0 && w.push(`${C} effect${C === 1 ? `` : `s`}`),
      (0, Z.jsxs)(`div`, {
        className: `flex h-full flex-col bg-background text-foreground`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1 px-3 py-2 border-b border-gray-700/50 bg-[#111327]`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [
                  (0, Z.jsx)(U2, {
                    onClick: y,
                    disabled: !g,
                    title: l ? `Pause` : `Play (Space)`,
                    children: l
                      ? (0, Z.jsx)(N, { className: `h-4 w-4` })
                      : (0, Z.jsx)(bn, { className: `h-4 w-4` }),
                  }),
                  (0, Z.jsx)(U2, {
                    onClick: b,
                    disabled: !g,
                    title: `Stop`,
                    children: (0, Z.jsx)(Zo, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, Z.jsx)(`div`, { className: `w-px h-5 bg-gray-700/50 mx-1` }),
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [
                  (0, Z.jsxs)(`button`, {
                    type: `button`,
                    onClick: o,
                    disabled: !g || !i,
                    title: `Discard edits and reload the saved loop/effects`,
                    className: `flex items-center gap-1 px-2 py-1 rounded text-xs hover:bg-gray-700/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`,
                    children: [
                      (0, Z.jsx)(Sn, { className: `h-3.5 w-3.5` }),
                      `Revert`,
                    ],
                  }),
                  (0, Z.jsxs)(`button`, {
                    type: `button`,
                    onClick: a,
                    disabled: !g || r === `baking`,
                    title: `Bake the loop + effects into the in-game audio now`,
                    className: `flex items-center gap-1 px-2 py-1 rounded text-xs bg-emerald-600/25 text-emerald-200 hover:bg-emerald-600/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`,
                    children: [
                      r === `baking`
                        ? (0, Z.jsx)(J, {
                            className: `h-3.5 w-3.5 animate-spin`,
                          })
                        : (0, Z.jsx)(_n, { className: `h-3.5 w-3.5` }),
                      `Apply`,
                    ],
                  }),
                ],
              }),
              (0, Z.jsx)(`div`, { className: `w-px h-5 bg-gray-700/50 mx-1` }),
              (0, Z.jsx)(U2, {
                onClick: S,
                disabled: !g,
                title: `Export a copy as WAV (download)`,
                children: (0, Z.jsx)(_o, { className: `h-4 w-4` }),
              }),
              (0, Z.jsx)(`div`, { className: `flex-1` }),
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-3`,
                children: [
                  (0, Z.jsx)(B2, {
                    status: r,
                    title: `Whether the in-game audio reflects your edits`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-xs font-mono text-gray-500`,
                    ref: d,
                    children: [H2(v), ` / `, H2(_)],
                  }),
                ],
              }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `h-40 flex-shrink-0 px-3 pt-2`,
            children: g
              ? (0, Z.jsx)(wde, {
                  engine: e,
                  asset: t,
                  clipVersion: n,
                  onSeek: x,
                })
              : (0, Z.jsx)(`div`, {
                  className: `flex h-full items-center justify-center rounded-md bg-black/30 text-xs text-gray-600`,
                  children: `Select an audio asset to edit`,
                }),
          }),
          (0, Z.jsx)(`div`, {
            className: `flex-1 min-h-0 overflow-y-auto px-3 py-3`,
            children: (0, Z.jsxs)(`div`, {
              className: `flex flex-col gap-4 md:flex-row md:gap-5`,
              children: [
                (0, Z.jsx)(`div`, {
                  className: `md:w-2/5 md:flex-shrink-0`,
                  children: (0, Z.jsx)(Ede, { engine: e }),
                }),
                (0, Z.jsx)(`div`, {
                  className: `md:w-3/5 md:flex-shrink-0 md:min-w-0`,
                  children: (0, Z.jsx)(Hde, {}),
                }),
              ],
            }),
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between px-3 py-1.5 border-t border-gray-700/50 bg-[#111327] text-xs text-gray-500`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `truncate`,
                children: t ? V2(t) : `No clip loaded`,
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-4`,
                children: [
                  g &&
                    h &&
                    (0, Z.jsxs)(`span`, {
                      children: [
                        h.sampleRate,
                        `Hz / `,
                        h.numberOfChannels,
                        `ch`,
                      ],
                    }),
                  w.length > 0 &&
                    (0, Z.jsx)(`span`, {
                      className: `text-teal-300/80`,
                      children: w.join(` · `),
                    }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
function W2(e) {
  return (e.asset_name || e.name || `Untitled`).replace(/_/g, ` `);
}
