// Create-CEn7EAZs 253 — classname
// Lines 85369-85717 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var o3 = ({
    title: e,
    files: t,
    defaultExpanded: n = !0,
    actionIcon: r,
    actionTitle: i,
    onAction: a,
    onFileClick: o,
    showBadge: s = !0,
  }) => {
    let [c, l] = (0, X.useState)(n);
    return t.length === 0
      ? null
      : (0, Z.jsxs)(`div`, {
          className: `mb-2`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1 py-1 px-1 cursor-pointer hover:bg-secondary/50 rounded-sm`,
              onClick: () => l(!c),
              children: [
                c
                  ? (0, Z.jsx)(zr, { className: `h-3 w-3 text-gray-500` })
                  : (0, Z.jsx)(Se, { className: `h-3 w-3 text-gray-500` }),
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] uppercase font-semibold tracking-wider text-gray-500`,
                  children: e,
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] text-gray-600 ml-auto`,
                  children: t.length,
                }),
              ],
            }),
            c &&
              t.map((e) => {
                let t = Eme(e.path);
                return (0, Z.jsxs)(
                  `div`,
                  {
                    className: `flex items-center gap-1 py-0.5 px-2 ml-2 text-gray-400 hover:bg-secondary/50 rounded-sm group`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `flex-1 truncate text-xs ${t ? `text-gray-500` : `cursor-pointer hover:text-gray-200`}`,
                        onClick: t ? void 0 : () => o(e.path),
                        title: e.path,
                        children: e.path,
                      }),
                      t &&
                        (0, Z.jsx)(`span`, {
                          className: `text-[10px] px-1 rounded bg-gray-600/20 text-gray-500`,
                          children: `Binary`,
                        }),
                      s && Dme(e.status),
                      (0, Z.jsx)(`button`, {
                        className: `opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-200 p-0.5 transition-opacity`,
                        onClick: (t) => {
                          (t.stopPropagation(), a(e.path));
                        },
                        title: i,
                        children: r,
                      }),
                    ],
                  },
                  e.path,
                );
              }),
          ],
        });
  },
  Ome = ({
    sessionId: e,
    onDiffOpen: t,
    onCommitSelect: n,
    refreshKey: r,
    onCommitComplete: i,
  }) => {
    let [a, o] = (0, X.useState)(null),
      [s, c] = (0, X.useState)(!0),
      [l, u] = (0, X.useState)(``),
      [d, f] = (0, X.useState)(!1),
      [p, m] = (0, X.useState)(``),
      [h, g] = (0, X.useState)(0),
      _ = (0, X.useCallback)(async () => {
        if (e)
          try {
            (c(!0), m(``));
            let t = await k4.gitStatus(e);
            o(t);
          } catch (e) {
            (console.error(`Failed to load git status:`, e),
              m(e.message || `Failed to load git status`));
          } finally {
            c(!1);
          }
      }, [e]);
    (0, X.useEffect)(() => {
      _();
    }, [_, r]);
    let v = (0, X.useCallback)(
        async (t) => {
          try {
            (await k4.gitStage(e, [t]), await _());
          } catch (e) {
            (console.error(`Failed to stage:`, t, e),
              m(e.message || `Failed to stage file`));
          }
        },
        [e, _],
      ),
      y = (0, X.useCallback)(
        async (t) => {
          try {
            (await k4.gitUnstage(e, [t]), await _());
          } catch (e) {
            (console.error(`Failed to unstage:`, t, e),
              m(e.message || `Failed to unstage file`));
          }
        },
        [e, _],
      ),
      b = (0, X.useCallback)(async () => {
        if (!a) return;
        let t = [
          ...a.unstaged.map((e) => e.path),
          ...a.untracked.map((e) => e.path),
        ];
        if (t.length !== 0)
          try {
            (await k4.gitStage(e, t), await _());
          } catch (e) {
            (console.error(`Failed to stage all:`, e),
              m(e.message || `Failed to stage files`));
          }
      }, [e, a, _]),
      x = (0, X.useCallback)(async () => {
        if (!(!l.trim() || !a?.staged.length))
          try {
            (f(!0),
              await k4.gitCommit(e, l.trim()),
              u(``),
              g((e) => e + 1),
              await _(),
              i?.());
          } catch (e) {
            (console.error(`Failed to commit:`, e),
              m(e.message || `Commit failed`));
          } finally {
            f(!1);
          }
      }, [e, l, a, _, i]);
    if (s)
      return (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-center h-32 text-gray-500 text-xs`,
        children: [
          (0, Z.jsx)(ln, { className: `h-4 w-4 animate-spin mr-2` }),
          `Loading git status...`,
        ],
      });
    if (p && !a)
      return (0, Z.jsxs)(`div`, {
        className: `text-center text-xs text-gray-500 mt-4`,
        children: [
          (0, Z.jsx)(`p`, { className: `text-red-400`, children: p }),
          (0, Z.jsx)(`button`, {
            className: `mt-2 text-primary hover:underline`,
            onClick: _,
            children: `Retry`,
          }),
        ],
      });
    let S =
        a &&
        (a.staged.length > 0 ||
          a.unstaged.length > 0 ||
          a.untracked.length > 0),
      C = a && a.staged.length > 0 && l.trim().length > 0 && !d;
    return (0, Z.jsxs)(`div`, {
      className: `text-xs select-none flex flex-col h-full`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between mb-1 px-1`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-gray-500 uppercase text-[10px] font-semibold tracking-wider`,
              children: `Source Control`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex gap-1`,
              children: [
                S &&
                  (0, Z.jsx)(`button`, {
                    className: `text-gray-500 hover:text-gray-300 p-0.5`,
                    onClick: b,
                    title: `Stage all`,
                    children: (0, Z.jsx)(Br, { className: `h-3.5 w-3.5` }),
                  }),
                (0, Z.jsx)(`button`, {
                  className: `text-gray-500 hover:text-gray-300 p-0.5`,
                  onClick: _,
                  title: `Refresh`,
                  children: (0, Z.jsx)(ln, { className: `h-3.5 w-3.5` }),
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex-1 overflow-auto`,
          children: [
            (0, Z.jsx)(o3, {
              title: `Staged Changes`,
              files: a?.staged || [],
              actionIcon: (0, Z.jsx)(V, { className: `h-3 w-3` }),
              actionTitle: `Unstage`,
              onAction: y,
              onFileClick: (e) => t(e, !0),
            }),
            (0, Z.jsx)(o3, {
              title: `Changes`,
              files: a?.unstaged || [],
              actionIcon: (0, Z.jsx)(Br, { className: `h-3 w-3` }),
              actionTitle: `Stage`,
              onAction: v,
              onFileClick: (e) => t(e, !1),
            }),
            (0, Z.jsx)(o3, {
              title: `Untracked`,
              files: a?.untracked || [],
              actionIcon: (0, Z.jsx)(Br, { className: `h-3 w-3` }),
              actionTitle: `Stage`,
              onAction: v,
              onFileClick: (e) => t(e, !1),
              showBadge: !1,
            }),
            !S &&
              (0, Z.jsxs)(`div`, {
                className: `text-center text-gray-600 mt-8`,
                children: [
                  (0, Z.jsx)(cs, {
                    className: `h-8 w-8 mx-auto mb-2 opacity-30`,
                  }),
                  (0, Z.jsx)(`p`, { children: `No changes` }),
                ],
              }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `border-t border-border pt-2 mt-2 px-1`,
          children: [
            p &&
              a &&
              (0, Z.jsx)(`p`, {
                className: `text-red-400 text-[10px] mb-1`,
                children: p,
              }),
            (0, Z.jsx)(`textarea`, {
              className: `w-full bg-card text-gray-300 text-xs border border-border rounded px-2 py-1.5 resize-none focus:outline-none focus:border-muted-foreground/40 placeholder-gray-600`,
              rows: 3,
              placeholder: `Commit message...`,
              value: l,
              onChange: (e) => u(e.target.value),
              onKeyDown: (e) => {
                (e.ctrlKey || e.metaKey) &&
                  e.key === `Enter` &&
                  (e.preventDefault(), x());
              },
            }),
            (0, Z.jsx)(`button`, {
              className: `w-full mt-1 py-1.5 rounded text-xs font-medium transition-colors ${C ? `bg-primary text-white hover:bg-primary/80` : `bg-gray-700 text-gray-500 cursor-not-allowed`}`,
              disabled: !C,
              onClick: x,
              children: d
                ? `Committing...`
                : `Commit${a?.staged.length ? ` (${a.staged.length})` : ``}`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-[10px] text-gray-600 mt-1 text-center`,
              children: `Ctrl+Enter to commit`,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `border-t border-border pt-2 mt-2`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `px-1 mb-1`,
              children: (0, Z.jsx)(`span`, {
                className: `text-gray-500 uppercase text-[10px] font-semibold tracking-wider`,
                children: `History`,
              }),
            }),
            (0, Z.jsx)(wme, {
              sessionId: e,
              onCommitSelect: n || (() => {}),
              refreshKey: h,
            }),
          ],
        }),
      ],
    });
  },
  kme = ({
    original: e,
    modified: t,
    language: n = `plaintext`,
    filename: r,
  }) => {
    let i = (0, X.useCallback)((e, t) => {
      try {
        t.editor.defineTheme(`sandscape-dark`, a3);
      } catch {}
      t.editor.setTheme(`sandscape-dark`);
    }, []);
    return (0, Z.jsxs)(`div`, {
      className: `h-full flex flex-col`,
      children: [
        r &&
          (0, Z.jsx)(`div`, {
            className: `px-3 py-1 bg-card border-b border-border text-xs text-gray-400`,
            children: (0, Z.jsx)(`span`, {
              className: `font-mono`,
              children: r,
            }),
          }),
        (0, Z.jsx)(`div`, {
          className: `flex-1`,
          children: (0, Z.jsx)(hme, {
            height: `100%`,
            original: e,
            modified: t,
            language: n,
            theme: `sandscape-dark`,
            onMount: i,
            options: {
              readOnly: !0,
              renderSideBySide: !0,
              fontSize: 13,
              fontFamily: `'JetBrains Mono', 'Fira Code', Menlo, Monaco, monospace`,
              minimap: { enabled: !1 },
              lineNumbers: `on`,
              scrollBeyondLastLine: !1,
              renderOverviewRuler: !1,
              padding: { top: 8, bottom: 8 },
            },
          }),
        }),
      ],
    });
  };
