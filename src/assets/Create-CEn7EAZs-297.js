// Create-CEn7EAZs 297 — classname
// Lines 105044-105542 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function gye({ sessionId: e, isActive: t, documentsMeta: n }) {
  let { portalTarget: r } = ae(),
    [i, a] = (0, X.useState)({}),
    [o, s] = (0, X.useState)(`gdd`),
    [c, l] = (0, X.useState)({}),
    [u, d] = (0, X.useState)({}),
    [f, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(`preview`),
    [_, v] = (0, X.useState)(!1),
    [y, b] = (0, X.useState)(null),
    [x, S] = (0, X.useState)(!1),
    [C, w] = (0, X.useState)([]),
    [T, E] = (0, X.useState)(!1),
    [D, O] = (0, X.useState)(null),
    [k, A] = (0, X.useState)(!1),
    [j, M] = (0, X.useState)(!1),
    N = (0, X.useRef)({
      metas: i,
      drafts: c,
      loadedDocs: u,
      activeDocId: o,
      saving: _,
      historyOpen: x,
    });
  N.current = {
    metas: i,
    drafts: c,
    loadedDocs: u,
    activeDocId: o,
    saving: _,
    historyOpen: x,
  };
  let P = (0, X.useCallback)((e) => {
      let { drafts: t, loadedDocs: n } = N.current;
      return t[e] !== void 0 && t[e] !== (n[e]?.content ?? ``);
    }, []),
    F = c[o] !== void 0 && c[o] !== (u[o]?.content ?? ``),
    I = (0, X.useCallback)(async () => {
      let t = await xee(e);
      if (t.success && t.documents) {
        let e = {};
        for (let n of t.documents) e[n.doc_id] = n;
        return (a((t) => ({ ...t, ...e })), e);
      }
      return (t.error && b(t.error), null);
    }, [e]),
    L = (0, X.useCallback)(
      async (t, n = !1) => {
        let r = N.current.metas[t];
        if (!r) {
          (d((e) => (e[t] ? e : { ...e, [t]: { content: ``, version: null } })),
            l((e) => (e[t] === void 0 ? { ...e, [t]: `` } : e)));
          return;
        }
        let i = N.current.loadedDocs[t],
          o = i && i.version === (r.current_version ?? null);
        if (!n && o) return;
        if (!n && i && P(t)) {
          M(!0);
          return;
        }
        m(!0);
        let s = await bee(e, t);
        if ((m(!1), s.success && s.document)) {
          let e = s.document;
          (d((n) => ({
            ...n,
            [t]: { content: e.content, version: e.current_version ?? null },
          })),
            a((n) => ({
              ...n,
              [t]: {
                doc_id: t,
                title: e.title,
                updated_at: e.updated_at,
                current_version: e.current_version,
              },
            })),
            l((n) => ({ ...n, [t]: e.content })),
            t === N.current.activeDocId && M(!1));
        } else s.error && b(s.error);
      },
      [e, P],
    );
  ((0, X.useEffect)(() => {
    let e = !1;
    return (
      (async () => {
        let t = await I();
        if (e || !t) return;
        let n = Object.keys(t)[0];
        n && s(n);
      })(),
      () => {
        e = !0;
      }
    );
  }, [I]),
    (0, X.useEffect)(() => {
      L(o);
    }, [o, i, L]),
    (0, X.useEffect)(() => {
      if (!n) return;
      let e = lQ(n);
      Object.keys(e).length !== 0 &&
        a((t) => {
          let n = { ...t, ...e };
          return JSON.stringify(t) === JSON.stringify(n) ? t : n;
        });
    }, [n]));
  let R = (0, X.useCallback)(
    async (t) => {
      E(!0);
      let n = await Aee(e, t);
      (E(!1), w(n.success && n.versions ? uQ(n.versions) : []));
    },
    [e],
  );
  (0, X.useEffect)(() => {
    x && R(o);
  }, [x, o, R]);
  let z = (e, t) => {
      (s(e), O(null), M(!1), b(null), g(t ? `preview` : `edit`));
    },
    B = (0, X.useCallback)(async () => {
      let t = N.current.activeDocId,
        n = N.current.drafts[t];
      if (n === void 0 || N.current.saving || !P(t)) return;
      v(!0);
      let r = await jee(e, t, n);
      if ((v(!1), r.success && r.document)) {
        let e = r.document;
        (a((n) => ({ ...n, [t]: e })),
          d((r) => ({
            ...r,
            [t]: { content: n, version: e.current_version ?? null },
          })),
          M(!1),
          b(null),
          N.current.historyOpen && R(t));
      } else b(r.error || `Failed to save document`);
    }, [e, P, R]),
    V = (e) => {
      (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === `s` &&
        (e.preventDefault(), B());
    },
    ee = async (t) => {
      let n = await Oee(e, o, t);
      n.success && n.version ? O(n.version) : n.error && b(n.error);
    },
    te = async () => {
      if (!D || k) return;
      A(!0);
      let t = await Eee(e, o, D.version);
      if ((A(!1), t.success && t.document)) {
        let e = t.document,
          n = D.content;
        (a((t) => ({ ...t, [o]: e })),
          d((t) => ({
            ...t,
            [o]: { content: n, version: e.current_version ?? null },
          })),
          l((e) => ({ ...e, [o]: n })),
          O(null),
          M(!1),
          b(null),
          R(o));
      } else b(t.error || `Failed to restore version`);
    },
    U = async () => {
      (M(!1), await L(o, !0));
    },
    W = async () => {
      (await I(), await L(N.current.activeDocId));
    },
    ne = cQ(i),
    G = ne.find((e) => e.docId === o),
    re = c[o] ?? ``,
    ie = (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between px-3 py-2 border-b border-border`,
          children: [
            (0, Z.jsxs)(`span`, {
              className: `text-xs font-medium text-foreground flex items-center gap-1.5`,
              children: [
                (0, Z.jsx)(zt, {
                  className: `h-3.5 w-3.5 text-muted-foreground`,
                }),
                `Documents`,
              ],
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => void W(),
              className: `p-0.5 text-muted-foreground hover:text-foreground transition-colors`,
              title: `Refresh documents`,
              children: (0, Z.jsx)(ln, { className: `h-3 w-3` }),
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `flex-1 overflow-y-auto`,
          children: ne.map((e) => {
            let t = e.docId === o,
              n =
                c[e.docId] !== void 0 &&
                c[e.docId] !== (u[e.docId]?.content ?? ``);
            return (0, Z.jsxs)(
              `button`,
              {
                type: `button`,
                onClick: () => z(e.docId, e.exists),
                className: p(
                  `w-full px-3 py-2 text-left border-b border-border/50 transition-colors`,
                  t ? `bg-secondary` : `hover:bg-secondary/50`,
                ),
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 min-w-0`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: p(
                          `text-xs truncate`,
                          t
                            ? `text-foreground font-medium`
                            : `text-foreground/80`,
                        ),
                        children: e.title,
                      }),
                      n &&
                        (0, Z.jsx)(`span`, {
                          className: `h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0`,
                          title: `Unsaved changes`,
                        }),
                    ],
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `mt-0.5 text-[10px] text-muted-foreground/70 flex items-center gap-1.5`,
                    children: e.exists
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsxs)(`span`, {
                              className: `font-mono`,
                              children: [`v`, e.version ?? `?`],
                            }),
                            (0, Z.jsx)(`span`, { children: fQ(e.updatedAt) }),
                          ],
                        })
                      : (0, Z.jsx)(`span`, {
                          className: `italic`,
                          children: `Not created yet`,
                        }),
                  }),
                ],
              },
              e.docId,
            );
          }),
        }),
      ],
    });
  return (0, Z.jsxs)(`div`, {
    className: `flex h-full bg-background text-foreground`,
    onKeyDown: V,
    children: [
      t !== !1 &&
        r &&
        (0, Qs.createPortal)(
          (0, Z.jsx)(`div`, {
            className: `flex flex-col h-full`,
            children: ie,
          }),
          r,
        ),
      t !== !1 &&
        !r &&
        (0, Z.jsx)(`div`, {
          className: `w-56 flex-shrink-0 border-r border-border flex flex-col bg-card`,
          children: ie,
        }),
      (0, Z.jsxs)(`div`, {
        className: `flex-1 flex flex-col min-w-0`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 px-4 py-2 border-b border-border bg-card/50`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-sm font-medium truncate`,
                children: G?.title ?? `Document`,
              }),
              F &&
                (0, Z.jsx)(`span`, {
                  className: `h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0`,
                  title: `Unsaved changes`,
                }),
              G?.exists &&
                (0, Z.jsxs)(`span`, {
                  className: `text-[10px] font-mono text-muted-foreground/70`,
                  children: [`v`, G.version ?? `?`],
                }),
              (0, Z.jsxs)(`div`, {
                className: `ml-auto flex items-center gap-1.5`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center rounded-md border border-border overflow-hidden`,
                    children: [
                      (0, Z.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => {
                          (g(`edit`), O(null));
                        },
                        className: p(
                          `flex items-center gap-1 px-2.5 py-1 text-xs transition-colors`,
                          h === `edit` && !D
                            ? `bg-secondary text-foreground`
                            : `text-muted-foreground hover:text-foreground`,
                        ),
                        children: [
                          (0, Z.jsx)(Xr, { className: `h-3 w-3` }),
                          ` Edit`,
                        ],
                      }),
                      (0, Z.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => {
                          (g(`preview`), O(null));
                        },
                        className: p(
                          `flex items-center gap-1 px-2.5 py-1 text-xs transition-colors border-l border-border`,
                          h === `preview` || D
                            ? `bg-secondary text-foreground`
                            : `text-muted-foreground hover:text-foreground`,
                        ),
                        children: [
                          (0, Z.jsx)(Yr, { className: `h-3 w-3` }),
                          ` Preview`,
                        ],
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => S((e) => !e),
                    className: p(
                      `flex items-center gap-1 px-2.5 py-1 text-xs rounded-md border border-border transition-colors`,
                      x
                        ? `bg-secondary text-foreground`
                        : `text-muted-foreground hover:text-foreground`,
                    ),
                    title: `Version history`,
                    children: [
                      (0, Z.jsx)(H, { className: `h-3 w-3` }),
                      ` History`,
                    ],
                  }),
                  (0, Z.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => void B(),
                    disabled: !F || _,
                    className: p(
                      `flex items-center gap-1 px-2.5 py-1 text-xs rounded-md transition-colors`,
                      F && !_
                        ? `bg-primary text-primary-foreground hover:bg-primary/90`
                        : `bg-secondary text-muted-foreground/50 cursor-not-allowed`,
                    ),
                    title: `Save (Ctrl/Cmd+S) — every save creates a version`,
                    children: [
                      (0, Z.jsx)(As, { className: `h-3 w-3` }),
                      ` `,
                      _ ? `Saving…` : `Save`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          j &&
            !D &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border-b border-amber-500/20 text-xs text-amber-300`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `flex-1`,
                  children: `This document was updated in the session. Reloading replaces your unsaved edits.`,
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: () => void U(),
                  className: `px-2 py-0.5 rounded border border-amber-500/40 hover:bg-amber-500/20 transition-colors`,
                  children: `Reload`,
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: () => M(!1),
                  className: `p-0.5 hover:text-amber-100 transition-colors`,
                  title: `Dismiss`,
                  children: (0, Z.jsx)(Jr, { className: `h-3 w-3` }),
                }),
              ],
            }),
          y &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 px-4 py-1.5 bg-destructive/10 border-b border-destructive/20 text-xs text-red-300`,
              children: [
                (0, Z.jsx)(`span`, { className: `flex-1`, children: y }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: () => b(null),
                  className: `p-0.5 hover:text-red-100 transition-colors`,
                  title: `Dismiss`,
                  children: (0, Z.jsx)(Jr, { className: `h-3 w-3` }),
                }),
              ],
            }),
          D &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 px-4 py-1.5 bg-secondary/60 border-b border-border text-xs text-muted-foreground`,
              children: [
                (0, Z.jsx)(H, { className: `h-3 w-3` }),
                (0, Z.jsxs)(`span`, {
                  className: `flex-1`,
                  children: [
                    `Viewing v`,
                    D.version,
                    ` · `,
                    fQ(D.created_at),
                    ` — read-only`,
                  ],
                }),
                (0, Z.jsxs)(`button`, {
                  type: `button`,
                  onClick: () => void te(),
                  disabled: k,
                  className: `flex items-center gap-1 px-2 py-0.5 rounded border border-primary/40 text-primary hover:bg-primary/10 transition-colors disabled:opacity-50`,
                  children: [
                    (0, Z.jsx)(un, { className: `h-3 w-3` }),
                    ` `,
                    k ? `Restoring…` : `Restore this version`,
                  ],
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: () => O(null),
                  className: `px-2 py-0.5 rounded border border-border hover:bg-secondary transition-colors`,
                  children: `Back to current`,
                }),
              ],
            }),
          (0, Z.jsx)(`div`, {
            className: `flex-1 min-h-0 overflow-y-auto`,
            children:
              f && !D
                ? (0, Z.jsx)(`div`, {
                    className: `px-8 py-6 text-sm text-muted-foreground`,
                    children: `Loading document…`,
                  })
                : D
                  ? (0, Z.jsx)(`div`, {
                      className: `max-w-3xl mx-auto px-8 py-6 text-sm text-foreground/90`,
                      children: (0, Z.jsx)(sQ, { children: D.content }),
                    })
                  : h === `edit`
                    ? (0, Z.jsx)(`div`, {
                        className: `h-full max-w-3xl mx-auto px-8 py-6 flex flex-col`,
                        children: (0, Z.jsx)(`textarea`, {
                          value: re,
                          onChange: (e) =>
                            l((t) => ({ ...t, [o]: e.target.value })),
                          placeholder: `Write the ${G?.title ?? `document`} in markdown…`,
                          spellCheck: !1,
                          className: `flex-1 w-full resize-none bg-transparent outline-none text-sm leading-7 text-foreground/90 placeholder:text-muted-foreground/40`,
                        }),
                      })
                    : re.trim()
                      ? (0, Z.jsx)(`div`, {
                          className: `max-w-3xl mx-auto px-8 py-6 text-sm text-foreground/90`,
                          children: (0, Z.jsx)(sQ, { children: re }),
                        })
                      : (0, Z.jsx)(`div`, {
                          className: `px-8 py-6 text-sm text-muted-foreground italic`,
                          children: `Nothing here yet — switch to Edit to start writing.`,
                        }),
          }),
        ],
      }),
      x &&
        (0, Z.jsx)(hye, {
          versions: C,
          loading: T,
          currentVersion: G?.version ?? null,
          viewingVersion: D?.version ?? null,
          onSelectVersion: (e) => void ee(e),
          onClose: () => S(!1),
        }),
    ],
  });
}
