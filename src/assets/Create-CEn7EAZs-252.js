// Create-CEn7EAZs 252 — classname
// Lines 85257-85368 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var wme = ({ sessionId: e, onCommitSelect: t, refreshKey: n }) => {
    let [r, i] = (0, X.useState)([]),
      [a, o] = (0, X.useState)(!0),
      [s, c] = (0, X.useState)(null),
      l = (0, X.useCallback)(async () => {
        if (e)
          try {
            (o(!0), c(null));
            let t = await k4.gitLog(e, 50);
            i(t);
          } catch (e) {
            (console.error(`Failed to load git log:`, e),
              c(e.message || `Failed to load commit history`));
          } finally {
            o(!1);
          }
      }, [e]);
    return (
      (0, X.useEffect)(() => {
        l();
      }, [l, n]),
      a && r.length === 0
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-center py-4 text-gray-500 text-xs`,
            children: [
              (0, Z.jsx)(ln, { className: `h-3 w-3 animate-spin mr-1` }),
              `Loading history...`,
            ],
          })
        : r.length === 0
          ? (0, Z.jsx)(`div`, {
              className: `text-center py-4 text-gray-600 text-xs`,
              children: `No commits yet`,
            })
          : (0, Z.jsxs)(`div`, {
              className: `max-h-48 overflow-auto`,
              children: [
                s &&
                  (0, Z.jsx)(`p`, {
                    className: `text-red-400 text-[10px] px-2 py-1`,
                    children: s,
                  }),
                r.map((e) =>
                  (0, Z.jsxs)(
                    `div`,
                    {
                      className: `flex items-start gap-1.5 py-1.5 px-2 cursor-pointer hover:bg-secondary/50 rounded-sm group`,
                      onClick: () => t(e.full_hash),
                      children: [
                        (0, Z.jsx)(cs, {
                          className: `h-3.5 w-3.5 text-gray-600 mt-0.5 flex-shrink-0`,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `min-w-0 flex-1`,
                          children: [
                            (0, Z.jsx)(`p`, {
                              className: `text-gray-300 truncate group-hover:text-gray-100`,
                              children: e.message,
                            }),
                            (0, Z.jsxs)(`div`, {
                              className: `flex items-center gap-2 text-[10px] text-gray-600`,
                              children: [
                                (0, Z.jsx)(`span`, {
                                  className: `font-mono text-muted-foreground`,
                                  children: e.hash,
                                }),
                                (0, Z.jsx)(`span`, { children: Cme(e.date) }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.full_hash,
                  ),
                ),
              ],
            })
    );
  },
  Tme = new Set([
    `png`,
    `jpg`,
    `jpeg`,
    `gif`,
    `bmp`,
    `webp`,
    `svg`,
    `ico`,
    `mp3`,
    `wav`,
    `ogg`,
    `mp4`,
    `webm`,
    `glb`,
    `gltf`,
    `fbx`,
    `obj`,
    `zip`,
    `tar`,
    `gz`,
  ]);
function Eme(e) {
  let t = e.split(`.`).pop()?.toLowerCase() || ``;
  return Tme.has(t);
}
function Dme(e) {
  return (0, Z.jsx)(`span`, {
    className: `text-[10px] font-bold px-1 rounded ${{ M: `bg-amber-500/20 text-amber-400`, A: `bg-green-500/20 text-green-400`, D: `bg-red-500/20 text-red-400`, R: `bg-blue-500/20 text-blue-400` }[e || ``] || `bg-gray-500/20 text-gray-400`}`,
    children: e || `?`,
  });
}
