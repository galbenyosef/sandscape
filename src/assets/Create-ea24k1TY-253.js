// Create-ea24k1TY 253 — children
// Lines 84945-85515 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var l3 = { files: [], activeIndex: -1 },
  Qpe = ({ sessionId: e, isActive: t }) => {
    let [n, r] = (0, X.useState)(l3),
      i = n.files,
      a = n.activeIndex,
      [o, s] = (0, X.useState)(new Set()),
      c = (0, X.useRef)([]);
    c.current = n.files;
    let [l, u] = (0, X.useState)(`files`),
      [d, f] = (0, X.useState)(!1),
      [p, m] = (0, X.useState)(``),
      h = (0, X.useRef)(null),
      [g, _] = (0, X.useState)(null),
      [v, y] = (0, X.useState)(!1),
      [b, x] = (0, X.useState)(null),
      [S, C] = (0, X.useState)(null),
      [w, T] = (0, X.useState)(0),
      [E, D] = (0, X.useState)(0),
      O = (0, X.useRef)(new AbortController());
    ((0, X.useEffect)(
      () => (
        O.current.abort(),
        (O.current = new AbortController()),
        r(l3),
        s(new Set()),
        _(null),
        x(null),
        y(!1),
        C(null),
        m(``),
        f(!1),
        u(`files`),
        T((e) => e + 1),
        D((e) => e + 1),
        () => {
          O.current.abort();
        }
      ),
      [e],
    ),
      (0, X.useEffect)(
        () => () => {
          h.current && clearTimeout(h.current);
        },
        [],
      ));
    let k = a >= 0 && a < i.length ? i[a] : null,
      A = (0, X.useCallback)((e) => {
        (m(e),
          h.current && clearTimeout(h.current),
          (h.current = setTimeout(() => {
            (m(``), (h.current = null));
          }, 5e3)));
      }, []),
      j = (0, X.useCallback)(
        async (t) => {
          let n = c.current.findIndex((e) => e.path === t);
          if (n >= 0) {
            r((e) => ({ ...e, activeIndex: n }));
            return;
          }
          try {
            f(!0);
            let n = await A4.readFile(e, t, O.current.signal),
              i = {
                path: n.path,
                name: n.name,
                language: n.language,
                content: n.content || ``,
                originalContent: n.content || ``,
                binary: n.binary,
              };
            r((e) => {
              let n = e.files.findIndex((e) => e.path === t);
              return n >= 0
                ? { ...e, activeIndex: n }
                : { files: [...e.files, i], activeIndex: e.files.length };
            });
          } catch (e) {
            if (e.name === `AbortError`) return;
            (console.error(`Failed to open file:`, t, e),
              A(`Failed to open ${t}: ${e.message || `Unknown error`}`));
          } finally {
            f(!1);
          }
        },
        [e, A],
      ),
      M = (0, X.useCallback)((e) => {
        (s((t) => {
          let n = new Set(t);
          return (n.delete(e), n);
        }),
          r((t) => {
            let n = t.files.findIndex((t) => t.path === e);
            if (n === -1) return t;
            let r = t.files.filter((e, t) => t !== n),
              i;
            return (
              (i =
                r.length === 0
                  ? -1
                  : t.activeIndex === n
                    ? Math.min(Math.max(0, n - 1), r.length - 1)
                    : t.activeIndex > n
                      ? t.activeIndex - 1
                      : Math.min(t.activeIndex, r.length - 1)),
              { files: r, activeIndex: i }
            );
          }));
      }, []),
      N = (0, X.useCallback)(
        (e) => {
          let t = c.current[e];
          if (t) {
            if (o.has(t.path)) {
              _(t.path);
              return;
            }
            M(t.path);
          }
        },
        [o, M],
      ),
      P = (0, X.useCallback)((e, t) => {
        r((n) => ({
          ...n,
          files: n.files.map((n) => (n.path === e ? { ...n, content: t } : n)),
        }));
        let n = c.current.find((t) => t.path === e),
          i = n ? t !== n.originalContent : !1;
        s((t) => {
          let n = new Set(t);
          return (i ? n.add(e) : n.delete(e), n);
        });
      }, []),
      F = (0, X.useCallback)(
        async (t) => {
          let n = c.current.find((e) => e.path === t);
          if (!(!n || n.binary))
            try {
              (await A4.writeFile(e, t, n.content, O.current.signal),
                r((e) => ({
                  ...e,
                  files: e.files.map((e) =>
                    e.path === t ? { ...e, originalContent: e.content } : e,
                  ),
                })),
                s((e) => {
                  let n = new Set(e);
                  return (n.delete(t), n);
                }),
                D((e) => e + 1));
            } catch (e) {
              if (e.name === `AbortError`) return;
              (console.error(`Failed to save file:`, t, e),
                A(`Failed to save ${t}: ${e.message || `Unknown error`}`));
            }
        },
        [e, A],
      ),
      I = (0, X.useCallback)(
        (e) => {
          (e.ctrlKey || e.metaKey) &&
            e.key === `s` &&
            (e.preventDefault(), k && o.has(k.path) && F(k.path));
        },
        [k, o, F],
      ),
      L = (0, X.useCallback)(
        async (t, n) => {
          try {
            let i = await A4.gitDiff(e, t, n, O.current.signal),
              a = {
                path: `diff:${n ? `staged` : `unstaged`}:${t}`,
                name: `${t} (${n ? `Staged` : `Changes`})`,
                language: Hpe(t),
                content: i.modified,
                originalContent: i.original,
                binary: !1,
              };
            r((e) => {
              let t = c3(e.files, a);
              return { files: t.files, activeIndex: t.index };
            });
          } catch (e) {
            if (e.name === `AbortError`) return;
            (console.error(`Failed to open diff:`, t, e),
              A(
                `Failed to load diff for ${t}: ${e.message || `Unknown error`}`,
              ));
          }
        },
        [e, A],
      ),
      R = (0, X.useCallback)(
        async (t) => {
          try {
            let n = await A4.gitShow(e, t, O.current.signal),
              i = n.file_diffs.filter((e) => !e.binary);
            if (i.length === 0) {
              A(`No text file changes in this commit`);
              return;
            }
            let a = i.map(
                (e) => `// ── ${e.path} (${e.status}) ──\n${e.before}`,
              ).join(`

`),
              o = i.map((e) => `// ── ${e.path} (${e.status}) ──\n${e.after}`)
                .join(`

`),
              s = {
                path: `commit:${t}`,
                name: `Commit ${t.slice(0, 7)}: ${n.message}`,
                language: `plaintext`,
                content: o,
                originalContent: a,
                binary: !1,
              };
            r((e) => {
              let t = c3(e.files, s);
              return { files: t.files, activeIndex: t.index };
            });
          } catch (e) {
            if (e.name === `AbortError`) return;
            (console.error(`Failed to show commit:`, t, e),
              A(
                `Failed to load commit ${t.slice(0, 7)}: ${e.message || `Unknown error`}`,
              ));
          }
        },
        [e, A],
      ),
      z = (0, X.useCallback)(() => {
        T((e) => e + 1);
      }, []),
      B = (0, X.useCallback)(
        async (t, n) => {
          let r = [];
          for (let i of Array.from(t))
            try {
              await A4.uploadFile(e, i, n);
            } catch (e) {
              (console.error(`Failed to upload file:`, i.name, e),
                r.push(i.name));
            }
          (r.length > 0 && A(`Failed to upload: ${r.join(`, `)}`),
            T((e) => e + 1),
            D((e) => e + 1));
        },
        [e, A],
      ),
      V = (0, X.useCallback)(
        async (t) => {
          try {
            let n = await A4.downloadFile(e, t),
              r = URL.createObjectURL(n),
              i = document.createElement(`a`);
            ((i.href = r),
              (i.download = t.split(`/`).pop() || `file`),
              document.body.appendChild(i),
              i.click(),
              document.body.removeChild(i),
              setTimeout(() => URL.revokeObjectURL(r), 1e3));
          } catch (e) {
            (console.error(`Failed to download file:`, t, e),
              A(`Failed to download ${t}: ${e.message || `Unknown error`}`));
          }
        },
        [e, A],
      ),
      H = (0, X.useCallback)(async () => {
        if (v) return;
        let t = O.current.signal;
        try {
          y(!0);
          let n = await A4.downloadProjectZip(e);
          if (t.aborted) return;
          let r = URL.createObjectURL(n),
            i = document.createElement(`a`);
          ((i.href = r),
            (i.download = `project_${e}.zip`),
            document.body.appendChild(i),
            i.click(),
            document.body.removeChild(i),
            setTimeout(() => URL.revokeObjectURL(r), 1e3));
        } catch (e) {
          if (t.aborted) return;
          (console.error(`Failed to download project:`, e),
            A(`Failed to download project: ${e.message || `Unknown error`}`));
        } finally {
          t.aborted || y(!1);
        }
      }, [e, A, v]),
      ee = (0, X.useCallback)((e) => {
        x(e);
      }, []),
      W = (0, X.useCallback)(async () => {
        let t = b;
        if ((x(null), !t)) return;
        let n = e,
          i = O.current.signal;
        try {
          (y(!0), C({ loaded: 0, total: t.size }));
          let e = await A4.uploadProjectZip(n, t, (e, t) => {
            C({ loaded: e, total: t });
          });
          if ((C(null), i.aborted)) return;
          (r(l3), s(new Set()), T((e) => e + 1), D((e) => e + 1));
          let a = e.committed
            ? `Uploaded ${e.files_extracted} files (commit ${e.commit_hash})`
            : `Uploaded ${e.files_extracted} files`;
          (m(``), A(a));
        } catch (e) {
          if (i.aborted) return;
          (console.error(`Failed to upload project zip:`, e),
            A(`Failed to upload project: ${e.message || `Unknown error`}`));
        } finally {
          i.aborted || (y(!1), C(null));
        }
      }, [e, A, b]),
      { portalTarget: G } = ie(),
      te = S ? Math.round((S.loaded / S.total) * 100) : 0,
      K = S
        ? `${(S.loaded / (1024 * 1024)).toFixed(1)} / ${(S.total / (1024 * 1024)).toFixed(1)} MB`
        : ``,
      ne = (0, Z.jsxs)(`div`, {
        className: `flex flex-col h-full`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex border-b border-border shrink-0`,
            children: [
              (0, Z.jsxs)(`button`, {
                className: `flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium transition-colors ${l === `files` ? `text-foreground border-b-2 border-foreground/60 bg-secondary/40` : `text-muted-foreground hover:text-foreground/80`}`,
                onClick: () => u(`files`),
                children: [
                  (0, Z.jsx)(gte, { className: `h-3.5 w-3.5` }),
                  `Files`,
                ],
              }),
              (0, Z.jsxs)(`button`, {
                className: `flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium transition-colors ${l === `git` ? `text-foreground border-b-2 border-foreground/60 bg-secondary/40` : `text-muted-foreground hover:text-foreground/80`}`,
                onClick: () => u(`git`),
                children: [(0, Z.jsx)(To, { className: `h-3.5 w-3.5` }), `Git`],
              }),
            ],
          }),
          S &&
            (0, Z.jsxs)(`div`, {
              className: `px-3 py-2 border-b border-border shrink-0`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-xs text-muted-foreground mb-1`,
                  children: [
                    (0, Z.jsx)(En, { className: `h-3.5 w-3.5` }),
                    (0, Z.jsxs)(`span`, {
                      children: [`Uploading... `, te, `%`],
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `ml-auto font-mono text-[10px]`,
                      children: K,
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: `h-1.5 bg-secondary rounded-full overflow-hidden`,
                  children: (0, Z.jsx)(`div`, {
                    className: `h-full bg-primary rounded-full transition-[width] duration-200 ease-linear`,
                    style: { width: `${te}%` },
                  }),
                }),
              ],
            }),
          (0, Z.jsx)(`div`, {
            className: `flex-1 overflow-auto p-2 text-xs text-muted-foreground`,
            children:
              l === `files`
                ? (0, Z.jsx)(zfe, {
                    sessionId: e,
                    onFileOpen: j,
                    activeFilePath: k?.path,
                    refreshKey: w,
                    onUploadFiles: B,
                    onDownloadFile: V,
                    onDownloadProject: H,
                    onUploadProject: ee,
                    projectZipLoading: v,
                  })
                : (0, Z.jsx)(Ype, {
                    sessionId: e,
                    onDiffOpen: L,
                    onCommitSelect: R,
                    refreshKey: E,
                    onCommitComplete: z,
                  }),
          }),
        ],
      });
    return (0, Z.jsxs)(`div`, {
      className: `h-full flex flex-col bg-card text-foreground`,
      onKeyDown: I,
      tabIndex: 0,
      children: [
        t !== !1 && G && (0, js.createPortal)(ne, G),
        p &&
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border-b border-red-500/30 text-xs text-red-400`,
            children: [
              (0, Z.jsx)(U, { className: `h-3.5 w-3.5 flex-shrink-0` }),
              (0, Z.jsx)(`span`, { className: `flex-1`, children: p }),
              (0, Z.jsx)(`button`, {
                onClick: () => m(``),
                className: `hover:text-red-300`,
                children: (0, Z.jsx)(li, { className: `h-3.5 w-3.5` }),
              }),
            ],
          }),
        (0, Z.jsxs)(`div`, {
          className: `flex-1 flex overflow-hidden`,
          children: [
            t !== !1 &&
              !G &&
              (0, Z.jsx)(`div`, {
                className: `w-64 border-r border-border flex flex-col`,
                children: ne,
              }),
            (0, Z.jsxs)(`div`, {
              className: `flex-1 flex flex-col min-w-0`,
              children: [
                i.length > 0 &&
                  (0, Z.jsx)(`div`, {
                    className: `flex border-b border-border bg-card overflow-x-auto shrink-0`,
                    children: i.map((e, t) =>
                      (0, Z.jsxs)(
                        `div`,
                        {
                          className: `flex items-center gap-1 px-3 py-1.5 text-xs cursor-pointer border-r border-border/50 whitespace-nowrap ${t === a ? `bg-background text-foreground border-b-2 border-b-foreground/60` : `text-muted-foreground hover:text-foreground/80 hover:bg-background/50`}`,
                          onClick: () => r((e) => ({ ...e, activeIndex: t })),
                          children: [
                            o.has(e.path) &&
                              (0, Z.jsx)(`span`, {
                                className: `w-2 h-2 rounded-full bg-amber-400 flex-shrink-0`,
                                title: `Unsaved changes`,
                              }),
                            (0, Z.jsx)(`span`, { children: e.name }),
                            (0, Z.jsx)(`button`, {
                              className: `ml-1 text-muted-foreground/60 hover:text-foreground flex-shrink-0`,
                              onClick: (e) => {
                                (e.stopPropagation(), N(t));
                              },
                              children: `×`,
                            }),
                          ],
                        },
                        e.path,
                      ),
                    ),
                  }),
                (0, Z.jsxs)(`div`, {
                  className: `flex-1 overflow-hidden relative`,
                  children: [
                    d &&
                      (0, Z.jsx)(`div`, {
                        className: `absolute inset-0 z-10 flex items-center justify-center bg-background/80`,
                        children: (0, Z.jsx)(J, {
                          className: `h-6 w-6 animate-spin text-muted-foreground`,
                        }),
                      }),
                    k
                      ? Zpe(k.path)
                        ? (0, Z.jsx)(
                            Xpe,
                            {
                              original: k.originalContent,
                              modified: k.content,
                              language: k.language,
                              filename: k.name,
                            },
                            k.path,
                          )
                        : (0, Z.jsx)(
                            Upe,
                            { file: k, onChange: P, onSave: F, isActive: t },
                            k.path,
                          )
                      : (0, Z.jsx)(`div`, {
                          className: `h-full flex items-center justify-center text-muted-foreground text-sm`,
                          children: (0, Z.jsxs)(`div`, {
                            className: `text-center`,
                            children: [
                              (0, Z.jsx)(bt, {
                                className: `h-12 w-12 mx-auto mb-3 opacity-20`,
                              }),
                              (0, Z.jsx)(`p`, {
                                children: `Select a file to edit`,
                              }),
                              (0, Z.jsx)(`p`, {
                                className: `text-xs text-muted-foreground/50 mt-1`,
                                children: `Browse files or view git changes`,
                              }),
                            ],
                          }),
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(Ya, {
          open: g !== null,
          onOpenChange: (e) => {
            e || _(null);
          },
          children: (0, Z.jsxs)(Wa, {
            children: [
              (0, Z.jsxs)(Ja, {
                children: [
                  (0, Z.jsx)(Ua, { children: `Unsaved changes` }),
                  (0, Z.jsx)(Ha, {
                    children: `This file has unsaved changes. Close it anyway?`,
                  }),
                ],
              }),
              (0, Z.jsxs)(Ka, {
                children: [
                  (0, Z.jsx)(qa, { children: `Cancel` }),
                  (0, Z.jsx)(Ga, {
                    onClick: () => {
                      (g !== null && M(g), _(null));
                    },
                    children: `Close without saving`,
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, Z.jsx)(Ya, {
          open: b !== null,
          onOpenChange: (e) => {
            e || x(null);
          },
          children: (0, Z.jsxs)(Wa, {
            children: [
              (0, Z.jsxs)(Ja, {
                children: [
                  (0, Z.jsx)(Ua, { children: `Replace project files?` }),
                  (0, Z.jsxs)(Ha, {
                    children: [
                      `Uploading a zip will replace all existing project files. This cannot be undone.`,
                      o.size > 0 &&
                        ` You have ${o.size} unsaved file(s) that will be lost.`,
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(Ka, {
                children: [
                  (0, Z.jsx)(qa, { children: `Cancel` }),
                  (0, Z.jsx)(Ga, { onClick: W, children: `Replace all files` }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
