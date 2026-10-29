// Create-CEn7EAZs 131 — classname
// Lines 44207-44637 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var PI = ({ sessionDir: e }) => {
  let t = e.split(`/`).pop() || e,
    { toast: n } = u(),
    [r, i] = (0, X.useState)({}),
    [a, o] = (0, X.useState)(!1),
    [s, c] = (0, X.useState)(new Set()),
    [l, d] = (0, X.useState)(null),
    [f, p] = (0, X.useState)({}),
    [m, h] = (0, X.useState)(null),
    [g, _] = (0, X.useState)(null),
    v = (0, X.useCallback)(async () => {
      if (t) {
        o(!0);
        try {
          let e = await Sr.getIndex(t);
          i(e.paths || {});
        } catch (e) {
          (console.error(`Error loading file history:`, e), i({}));
        } finally {
          o(!1);
        }
      }
    }, [t]);
  ((0, X.useEffect)(() => {
    v();
  }, [v]),
    (0, X.useEffect)(
      () => () => {
        m?.objectUrl && URL.revokeObjectURL(m.objectUrl);
      },
      [m],
    ));
  let y = (0, X.useMemo)(() => wI(r), [r]),
    b = (e) => {
      c((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    },
    x = (0, X.useCallback)(
      async (e) => {
        let n = await Sr.getVersions(t, e);
        p((t) => ({ ...t, [e]: n.entries }));
      },
      [t],
    ),
    C = (e) => {
      if (l === e) {
        d(null);
        return;
      }
      (d(e), f[e] || x(e));
    },
    w = async (e, n) => {
      let r = OI(e);
      if ((m?.objectUrl && URL.revokeObjectURL(m.objectUrl), TI.has(r))) {
        let r = await Sr.getContentText(t, e, n.sha256);
        h({
          path: e,
          entry: n,
          kind: `text`,
          text: r ?? `(could not load this version)`,
        });
        return;
      }
      if (EI.has(r) || DI.has(r)) {
        let i = await Sr.getContentObjectUrl(t, e, n.sha256);
        if (!i) {
          h({ path: e, entry: n, kind: `none` });
          return;
        }
        h({
          path: e,
          entry: n,
          kind: EI.has(r) ? `image` : `audio`,
          objectUrl: i.url,
        });
        return;
      }
      h({ path: e, entry: n, kind: `none` });
    },
    T = async (e, r) => {
      let i = await Sr.getContentObjectUrl(t, e, r.sha256);
      if (!i) {
        n({
          title: `Download failed`,
          description: `Could not fetch this version.`,
          variant: `destructive`,
        });
        return;
      }
      let a = document.createElement(`a`);
      ((a.href = i.url),
        (a.download = CI(e).split(`/`).pop() || `file`),
        a.click(),
        URL.revokeObjectURL(i.url));
    },
    E = async (e, r) => {
      let i = CI(e);
      if (
        window.confirm(
          `Restore ${i} to the version from ${jI(r.at)}? The current file stays in history.`,
        )
      ) {
        _(r.sha256);
        try {
          let a = await Sr.checkout(t, e, r.sha256);
          if (!a.success) {
            n({
              title: `Restore failed`,
              description: a.error ?? `Unknown error`,
              variant: `destructive`,
            });
            return;
          }
          (n({
            title: `Version restored`,
            description:
              `${i} is back to the selected version` +
              (a.asset_updates.length
                ? ` and the asset ledger was updated.`
                : `.`),
          }),
            await v(),
            await x(e));
        } finally {
          _(null);
        }
      }
    },
    D = (e) => {
      let t = f[e];
      return t
        ? t.length === 0
          ? (0, Z.jsx)(`div`, {
              className: `pl-10 py-2 text-xs text-gray-500`,
              children: `No recorded versions.`,
            })
          : (0, Z.jsx)(`div`, {
              className: `pl-7 pr-1 pb-1 space-y-0.5`,
              children: [...t].reverse().map((n, r) => {
                let i = r === 0,
                  a = MI[n.source] ?? MI.baseline,
                  o = NI(n);
                return (0, Z.jsxs)(
                  `div`,
                  {
                    className: `flex items-center gap-1.5 rounded px-1.5 py-1 text-xs cursor-pointer border min-w-0 ${m?.path === e && m.entry.sha256 === n.sha256 ? `border-primary/50 bg-primary/10` : `border-transparent hover:bg-accent/50`}`,
                    title: o ? `by ${o}` : void 0,
                    onClick: () => void w(e, n),
                    children: [
                      (0, Z.jsxs)(`span`, {
                        className: `w-6 shrink-0 text-gray-400 font-mono`,
                        children: [`v`, t.length - r],
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `shrink-0 rounded px-1.5 py-0.5 ${a.className}`,
                        children: i ? `${a.label} · current` : a.label,
                      }),
                      (0, Z.jsxs)(`span`, {
                        className: `flex items-center gap-1 text-gray-500 min-w-0 truncate`,
                        children: [
                          (0, Z.jsx)(Rr, { className: `h-3 w-3 shrink-0` }),
                          (0, Z.jsx)(`span`, {
                            className: `truncate`,
                            children: jI(n.at),
                          }),
                        ],
                      }),
                      (0, Z.jsx)(`span`, { className: `flex-1` }),
                      (0, Z.jsx)(S, {
                        variant: `ghost`,
                        size: `sm`,
                        className: `h-6 w-6 p-0 shrink-0`,
                        title: `Download`,
                        onClick: (t) => {
                          (t.stopPropagation(), T(e, n));
                        },
                        children: (0, Z.jsx)(Vo, { className: `h-3.5 w-3.5` }),
                      }),
                      !i &&
                        (0, Z.jsx)(S, {
                          variant: `ghost`,
                          size: `sm`,
                          className: `h-6 w-6 p-0 shrink-0 text-amber-500 hover:text-amber-400`,
                          title: `Restore this version`,
                          disabled: g === n.sha256,
                          onClick: (t) => {
                            (t.stopPropagation(), E(e, n));
                          },
                          children: (0, Z.jsx)(un, {
                            className: `h-3.5 w-3.5`,
                          }),
                        }),
                    ],
                  },
                  `${n.sha256}-${n.at}`,
                );
              }),
            })
        : (0, Z.jsx)(`div`, {
            className: `pl-10 py-2 text-xs text-gray-500`,
            children: `Loading versions…`,
          });
    },
    O = (e, t, n) => {
      let r = [];
      for (let i of e.dirs.values()) {
        let e = `${t}${i.name}/`,
          a = s.has(e);
        r.push(
          (0, Z.jsxs)(
            `div`,
            {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer hover:bg-accent/50 text-sm`,
                  style: { paddingLeft: `${8 + n * 14}px` },
                  onClick: () => b(e),
                  children: [
                    a
                      ? (0, Z.jsx)(zr, {
                          className: `h-3.5 w-3.5 text-gray-500 shrink-0`,
                        })
                      : (0, Z.jsx)(Se, {
                          className: `h-3.5 w-3.5 text-gray-500 shrink-0`,
                        }),
                    a
                      ? (0, Z.jsx)(qr, {
                          className: `h-4 w-4 text-sky-400/80 shrink-0`,
                        })
                      : (0, Z.jsx)(ns, {
                          className: `h-4 w-4 text-sky-400/80 shrink-0`,
                        }),
                    (0, Z.jsx)(`span`, {
                      className: `truncate`,
                      children: i.name,
                    }),
                  ],
                }),
                a && O(i, e, n + 1),
              ],
            },
            e,
          ),
        );
      }
      for (let t of e.files) {
        let e = kI(t.name),
          i = l === t.fullPath;
        r.push(
          (0, Z.jsxs)(
            `div`,
            {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer text-sm ${i ? `bg-accent/60` : `hover:bg-accent/50`}`,
                  style: { paddingLeft: `${8 + n * 14}px` },
                  onClick: () => C(t.fullPath),
                  children: [
                    i
                      ? (0, Z.jsx)(zr, {
                          className: `h-3.5 w-3.5 text-gray-500 shrink-0`,
                        })
                      : (0, Z.jsx)(Se, {
                          className: `h-3.5 w-3.5 text-gray-500 shrink-0`,
                        }),
                    (0, Z.jsx)(e, {
                      className: `h-4 w-4 text-gray-400 shrink-0`,
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `truncate`,
                      children: t.name,
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `ml-auto shrink-0 rounded-full bg-secondary px-1.5 py-0.5 text-[10px] text-gray-400`,
                      title: `${t.summary.count} version${t.summary.count === 1 ? `` : `s`}`,
                      children: t.summary.count,
                    }),
                  ],
                }),
                i && D(t.fullPath),
              ],
            },
            t.fullPath,
          ),
        );
      }
      return r;
    },
    k = Object.keys(r).length > 0;
  return (0, Z.jsxs)(`div`, {
    className: `h-full flex flex-col`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between mb-4`,
        children: [
          (0, Z.jsxs)(`h3`, {
            className: `text-lg font-semibold flex items-center gap-2`,
            children: [(0, Z.jsx)(H, { className: `h-5 w-5` }), `File History`],
          }),
          (0, Z.jsx)(S, {
            variant: `outline`,
            size: `sm`,
            onClick: v,
            disabled: a,
            children: a ? `Loading…` : `Refresh`,
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `flex-grow flex flex-col gap-3 min-h-0`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `flex-1 bg-card rounded-lg border border-border p-2 min-h-0`,
            children:
              a && !k
                ? (0, Z.jsx)(`div`, {
                    className: `flex items-center justify-center h-32 text-gray-400`,
                    children: `Loading…`,
                  })
                : k
                  ? (0, Z.jsx)(Lr, {
                      className: `h-full`,
                      children: (0, Z.jsx)(`div`, {
                        className: `pr-2`,
                        children: O(y, ``, 0),
                      }),
                    })
                  : (0, Z.jsx)(`div`, {
                      className: `flex items-center justify-center h-full`,
                      children: (0, Z.jsxs)(`div`, {
                        className: `text-center text-gray-400 px-6`,
                        children: [
                          (0, Z.jsx)(H, {
                            className: `h-12 w-12 mx-auto mb-4 opacity-50`,
                          }),
                          (0, Z.jsx)(`p`, { children: `No file versions yet` }),
                          (0, Z.jsx)(`p`, {
                            className: `text-sm mt-1`,
                            children: `Versions are recorded when files change — a CLI push, an editor save, or a generated asset. Come back after the project moves.`,
                          }),
                        ],
                      }),
                    }),
          }),
          m &&
            (0, Z.jsxs)(`div`, {
              className: `h-[45%] shrink-0 bg-card rounded-lg border border-border p-3 min-h-0 flex flex-col`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `mb-2 flex items-start justify-between gap-2`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `min-w-0`,
                      children: [
                        (0, Z.jsx)(`div`, {
                          className: `font-medium text-sm truncate`,
                          children: CI(m.path),
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `text-xs text-gray-500 mt-0.5 flex items-center gap-2 flex-wrap`,
                          children: [
                            (0, Z.jsx)(`span`, { children: jI(m.entry.at) }),
                            (0, Z.jsx)(`span`, { children: AI(m.entry.size) }),
                            NI(m.entry) &&
                              (0, Z.jsxs)(`span`, {
                                children: [`by `, NI(m.entry)],
                              }),
                            (0, Z.jsx)(`span`, {
                              className: `font-mono`,
                              children: m.entry.sha256.slice(0, 12),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Z.jsx)(S, {
                      variant: `ghost`,
                      size: `sm`,
                      className: `h-6 px-2 shrink-0`,
                      onClick: () => h(null),
                      children: `Close`,
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex-1 min-h-0 border border-border rounded bg-background overflow-hidden`,
                  children: [
                    m.kind === `text` &&
                      (0, Z.jsx)(Lr, {
                        className: `h-full`,
                        children: (0, Z.jsx)(`pre`, {
                          className: `text-xs p-3 whitespace-pre-wrap break-words text-gray-300`,
                          children: m.text,
                        }),
                      }),
                    m.kind === `image` &&
                      m.objectUrl &&
                      (0, Z.jsx)(`div`, {
                        className: `h-full flex items-center justify-center p-3`,
                        children: (0, Z.jsx)(`img`, {
                          src: m.objectUrl,
                          alt: CI(m.path),
                          className: `max-h-full max-w-full object-contain`,
                        }),
                      }),
                    m.kind === `audio` &&
                      m.objectUrl &&
                      (0, Z.jsx)(`div`, {
                        className: `h-full flex items-center justify-center p-3`,
                        children: (0, Z.jsx)(`audio`, {
                          controls: !0,
                          src: m.objectUrl,
                          className: `w-full`,
                        }),
                      }),
                    m.kind === `none` &&
                      (0, Z.jsx)(`div`, {
                        className: `h-full flex items-center justify-center text-gray-500 text-sm`,
                        children: `No inline preview for this file type — use Download.`,
                      }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
};
