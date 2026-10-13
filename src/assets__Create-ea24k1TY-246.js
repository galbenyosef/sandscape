// assets__Create-ea24k1TY 246 — classname
// Lines 83109-83462 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var j4 = ({
    node: e,
    depth: t,
    onFileOpen: n,
    activeFilePath: r,
    expandedDirs: i,
    toggleDir: a,
    onDownloadFile: o,
  }) => {
    if (e.type === `directory`) {
      let s = i.has(e.path || `__root__`),
        c = e.children || [];
      return (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1 py-0.5 px-1 cursor-pointer hover:bg-secondary/50 rounded-sm`,
            style: { paddingLeft: t * 12 + 4 },
            onClick: () => a(e.path || `__root__`),
            children: [
              s
                ? (0, Z.jsx)(ti, {
                    className: `h-3.5 w-3.5 text-gray-500 flex-shrink-0`,
                  })
                : (0, Z.jsx)(De, {
                    className: `h-3.5 w-3.5 text-gray-500 flex-shrink-0`,
                  }),
              s
                ? (0, Z.jsx)(ci, {
                    className: `h-4 w-4 text-muted-foreground flex-shrink-0`,
                  })
                : (0, Z.jsx)(So, {
                    className: `h-4 w-4 text-muted-foreground flex-shrink-0`,
                  }),
              (0, Z.jsx)(`span`, {
                className: `truncate text-gray-300`,
                children: e.name,
              }),
            ],
          }),
          s &&
            c.map((e) =>
              (0, Z.jsx)(
                j4,
                {
                  node: e,
                  depth: t + 1,
                  onFileOpen: n,
                  activeFilePath: r,
                  expandedDirs: i,
                  toggleDir: a,
                  onDownloadFile: o,
                },
                e.path,
              ),
            ),
        ],
      });
    }
    let s = e.path === r,
      c = e.binary === !0;
    return (0, Z.jsx)(Rfe, {
      node: e,
      isActive: s,
      isBinary: c,
      depth: t,
      onFileOpen: n,
      onDownloadFile: o,
    });
  },
  Rfe = ({
    node: e,
    isActive: t,
    isBinary: n,
    depth: r,
    onFileOpen: i,
    onDownloadFile: a,
  }) => {
    let [o, s] = (0, X.useState)(null);
    return (
      (0, X.useEffect)(() => {
        if (!o) return;
        let e = () => s(null);
        return (
          document.addEventListener(`click`, e),
          () => document.removeEventListener(`click`, e)
        );
      }, [o]),
      (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1 py-0.5 px-1 rounded-sm ${t ? `bg-secondary text-gray-100` : `text-gray-400 cursor-pointer hover:bg-secondary/50 hover:text-gray-200`}`,
            style: { paddingLeft: r * 12 + 20 },
            onClick: () => i(e.path),
            onContextMenu: (e) => {
              a && (e.preventDefault(), s({ x: e.clientX, y: e.clientY }));
            },
            title: n ? `${e.name} (binary - view info)` : e.name,
            children: [
              Lfe(e.name, n),
              (0, Z.jsx)(`span`, { className: `truncate`, children: e.name }),
              n &&
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] text-gray-600 ml-auto flex-shrink-0`,
                  children: `bin`,
                }),
            ],
          }),
          o &&
            a &&
            (0, Z.jsx)(`div`, {
              className: `fixed z-50 bg-card border border-border rounded shadow-lg py-1 text-xs`,
              style: { left: o.x, top: o.y },
              children: (0, Z.jsxs)(`button`, {
                className: `flex items-center gap-2 px-3 py-1.5 w-full text-left text-gray-300 hover:bg-secondary hover:text-gray-100`,
                onClick: () => {
                  (a(e.path), s(null));
                },
                children: [
                  (0, Z.jsx)(_o, { className: `h-3.5 w-3.5` }),
                  `Download`,
                ],
              }),
            }),
        ],
      })
    );
  },
  zfe = ({
    sessionId: e,
    onFileOpen: t,
    activeFilePath: n,
    refreshKey: r,
    onUploadFiles: i,
    onDownloadFile: a,
    onDownloadProject: o,
    onUploadProject: s,
    projectZipLoading: c,
  }) => {
    let [l, u] = (0, X.useState)(null),
      [d, f] = (0, X.useState)(!0),
      [p, m] = (0, X.useState)(``),
      [h, g] = (0, X.useState)(new Set([`__root__`])),
      [_, v] = (0, X.useState)(!1),
      y = (0, X.useRef)(null),
      b = (0, X.useRef)(null),
      x = (0, X.useCallback)(async () => {
        if (e)
          try {
            (f(!0), m(``));
            let t = await A4.listFiles(e);
            (u(t), g((e) => new Set([...e, `__root__`])));
          } catch (e) {
            (console.error(`Failed to load file tree:`, e),
              m(`Failed to load files`));
          } finally {
            f(!1);
          }
      }, [e]);
    (0, X.useEffect)(() => {
      x();
    }, [x, r]);
    let S = (0, X.useCallback)((e) => {
        g((t) => {
          let n = new Set(t);
          return (n.has(e) ? n.delete(e) : n.add(e), n);
        });
      }, []),
      C = (0, X.useCallback)(() => {
        if (!l) return;
        let e = new Set([`__root__`]),
          t = (n) => {
            n.type === `directory` &&
              (e.add(n.path || `__root__`), n.children?.forEach(t));
          };
        (t(l), g(e));
      }, [l]),
      w = (0, X.useCallback)(() => {
        g(new Set([`__root__`]));
      }, []),
      T = (0, X.useCallback)(
        (e) => {
          i && (e.preventDefault(), e.stopPropagation(), v(!0));
        },
        [i],
      ),
      E = (0, X.useCallback)((e) => {
        (e.preventDefault(), e.stopPropagation(), v(!1));
      }, []),
      D = (0, X.useCallback)(
        (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            v(!1),
            !(!i || !e.dataTransfer.files.length) &&
              i(e.dataTransfer.files, ``));
        },
        [i],
      ),
      O = (0, X.useCallback)(() => {
        y.current?.click();
      }, []),
      k = (0, X.useCallback)(
        (e) => {
          !i ||
            !e.target.files?.length ||
            (i(e.target.files, ``), (e.target.value = ``));
        },
        [i],
      ),
      A = (0, X.useCallback)(
        (e) => {
          !s ||
            !e.target.files?.length ||
            (s(e.target.files[0]), (e.target.value = ``));
        },
        [s],
      ),
      j;
    return (
      (j = d
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-center h-32 text-gray-500 text-xs`,
            children: [
              (0, Z.jsx)(xn, { className: `h-4 w-4 animate-spin mr-2` }),
              `Loading files...`,
            ],
          })
        : p
          ? (0, Z.jsxs)(`div`, {
              className: `text-center text-xs text-gray-500 mt-4`,
              children: [
                (0, Z.jsx)(`p`, { className: `text-red-400`, children: p }),
                (0, Z.jsx)(`button`, {
                  className: `mt-2 text-primary hover:underline`,
                  onClick: x,
                  children: `Retry`,
                }),
              ],
            })
          : !l || l.children?.length === 0
            ? (0, Z.jsxs)(`div`, {
                className: `text-center text-xs text-gray-500 mt-8`,
                children: [
                  (0, Z.jsx)(`p`, { children: `No files yet` }),
                  (0, Z.jsx)(`p`, {
                    className: `mt-1 text-gray-600`,
                    children: `Upload files or wait for code generation`,
                  }),
                ],
              })
            : l.children?.map((e) =>
                (0, Z.jsx)(
                  j4,
                  {
                    node: e,
                    depth: 0,
                    onFileOpen: t,
                    activeFilePath: n,
                    expandedDirs: h,
                    toggleDir: S,
                    onDownloadFile: a,
                  },
                  e.path,
                ),
              )),
      (0, Z.jsxs)(`div`, {
        className: `text-xs select-none ${_ ? `ring-2 ring-border ring-inset rounded` : ``}`,
        onDragOver: T,
        onDragLeave: E,
        onDrop: D,
        children: [
          (0, Z.jsx)(`input`, {
            ref: y,
            type: `file`,
            multiple: !0,
            className: `hidden`,
            onChange: k,
          }),
          (0, Z.jsx)(`input`, {
            ref: b,
            type: `file`,
            accept: `.zip`,
            className: `hidden`,
            onChange: A,
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between mb-1 px-1`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-gray-500 uppercase text-[10px] font-semibold tracking-wider`,
                children: `Explorer`,
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex gap-1`,
                children: [
                  i &&
                    (0, Z.jsx)(`button`, {
                      className: `text-gray-500 hover:text-gray-300 p-0.5`,
                      onClick: O,
                      title: `Upload files`,
                      children: (0, Z.jsx)(ni, { className: `h-3.5 w-3.5` }),
                    }),
                  o &&
                    (0, Z.jsx)(`button`, {
                      className: `text-gray-500 hover:text-gray-300 p-0.5 disabled:opacity-30 disabled:cursor-not-allowed`,
                      onClick: o,
                      disabled: c,
                      title: `Download project as zip`,
                      children: c
                        ? (0, Z.jsx)(xn, {
                            className: `h-3.5 w-3.5 animate-spin`,
                          })
                        : (0, Z.jsx)(_o, { className: `h-3.5 w-3.5` }),
                    }),
                  s &&
                    (0, Z.jsx)(`button`, {
                      className: `text-gray-500 hover:text-gray-300 p-0.5 disabled:opacity-30 disabled:cursor-not-allowed`,
                      onClick: () => b.current?.click(),
                      disabled: c,
                      title: `Upload project from zip`,
                      children: (0, Z.jsx)(oo, { className: `h-3.5 w-3.5` }),
                    }),
                  (0, Z.jsx)(`button`, {
                    className: `text-gray-500 hover:text-gray-300 p-0.5`,
                    onClick: C,
                    title: `Expand all`,
                    children: (0, Z.jsx)(ti, { className: `h-3.5 w-3.5` }),
                  }),
                  (0, Z.jsx)(`button`, {
                    className: `text-gray-500 hover:text-gray-300 p-0.5`,
                    onClick: w,
                    title: `Collapse all`,
                    children: (0, Z.jsx)(De, { className: `h-3.5 w-3.5` }),
                  }),
                  (0, Z.jsx)(`button`, {
                    className: `text-gray-500 hover:text-gray-300 p-0.5`,
                    onClick: x,
                    title: `Refresh`,
                    children: (0, Z.jsx)(xn, { className: `h-3.5 w-3.5` }),
                  }),
                ],
              }),
            ],
          }),
          j,
          _ &&
            (0, Z.jsx)(`div`, {
              className: `mt-2 py-3 text-center text-muted-foreground/60 border border-dashed border-border rounded`,
              children: `Drop files to upload`,
            }),
        ],
      })
    );
  };
