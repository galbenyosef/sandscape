// assets__Publish-CkHGQXkk 02 — children
// Lines 207-493 of readable/assets__Publish-CkHGQXkk.pretty.js (statement-aligned).
function Ye({ gameId: e, manifestStatus: t }) {
  let { t: n } = T(),
    { toast: r } = a(),
    [i, o] = (0, I.useState)(null),
    [s, c] = (0, I.useState)(!1),
    [l, u] = (0, I.useState)(!1),
    [ee, d] = (0, I.useState)(null),
    [f, m] = (0, I.useState)(!1),
    [h, g] = (0, I.useState)(null),
    [_, v] = (0, I.useState)(null),
    te = (0, I.useCallback)(async () => {
      if (e) {
        (c(!0), d(null));
        try {
          o(await w(e));
        } catch (e) {
          d(e instanceof Error ? e.message : String(e));
        } finally {
          c(!1);
        }
      }
    }, [e]);
  (0, I.useEffect)(() => {
    te();
  }, [te]);
  let b = async (e, t) => {
    u(!0);
    try {
      (await e(), await te(), t && r({ title: t }));
    } catch (e) {
      r({
        title: n(`publish.leaderboardSaveFailed`, `Could not save`),
        description: e instanceof Error ? e.message : String(e),
        variant: `destructive`,
      });
    } finally {
      u(!1);
    }
  };
  if (!e)
    return (0, L.jsxs)(J, {
      children: [
        (0, L.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: n(
            `publish.leaderboardPublishFirst`,
            `Publish once to set up leaderboards for this game.`,
          ),
        }),
        (0, L.jsx)(Xe, { status: t }),
      ],
    });
  if (s && !i)
    return (0, L.jsx)(J, {
      children: (0, L.jsxs)(`p`, {
        className: `flex items-center gap-2 text-sm text-muted-foreground`,
        children: [
          (0, L.jsx)(S, { className: `h-4 w-4 animate-spin` }),
          n(`publish.leaderboardLoading`, `Loading leaderboard settings…`),
        ],
      }),
    });
  if (ee)
    return (0, L.jsx)(J, {
      children: (0, L.jsx)(`p`, {
        className: `text-sm text-destructive`,
        children: ee,
      }),
    });
  let x = i?.manifest ?? null,
    ne = Object.keys(x?.metrics ?? {}),
    re = Object.keys(x?.dimensions ?? {});
  return (0, L.jsxs)(J, {
    children: [
      (0, L.jsxs)(`div`, {
        className: `flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4`,
        children: [
          (0, L.jsxs)(`div`, {
            children: [
              (0, L.jsx)(`p`, {
                className: `text-sm font-medium text-foreground`,
                children: n(`publish.leaderboard`, `Leaderboard`),
              }),
              (0, L.jsx)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: n(
                  `publish.leaderboardDesc`,
                  `Track top players to boost replayability.`,
                ),
              }),
            ],
          }),
          (0, L.jsx)(y, {
            checked: !!i?.enabled,
            disabled: l || !x,
            onCheckedChange: (t) =>
              b(
                () => se(e, t),
                t
                  ? n(`publish.leaderboardOn`, `Leaderboards are on`)
                  : n(`publish.leaderboardOff`, `Leaderboards are off`),
              ),
          }),
        ],
      }),
      i?.manifest_error &&
        (0, L.jsxs)(`p`, {
          className: `text-xs text-destructive`,
          children: [
            n(
              `publish.leaderboardManifestInvalid`,
              `This game's leaderboard file is invalid:`,
            ),
            ` `,
            i.manifest_error,
          ],
        }),
      !x &&
        !i?.manifest_error &&
        (0, L.jsx)(`p`, {
          className: `text-xs text-muted-foreground`,
          children: n(
            `publish.leaderboardNoManifest`,
            `This build ships no sandscape.leaderboard.json, so there is nothing to rank yet. Ask the assistant to "add a leaderboard", then publish again.`,
          ),
        }),
      x &&
        (0, L.jsxs)(`div`, {
          className: `space-y-3`,
          children: [
            (0, L.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, L.jsx)(D, {
                  className: `text-xs uppercase tracking-wide text-muted-foreground`,
                  children: n(`publish.leaderboardBoards`, `Boards`),
                }),
                (0, L.jsxs)(p, {
                  type: `button`,
                  variant: `outline`,
                  size: `sm`,
                  disabled: l || f,
                  onClick: () => m(!0),
                  children: [
                    (0, L.jsx)(k, { className: `mr-1 h-3.5 w-3.5` }),
                    n(`publish.leaderboardAddBoard`, `Add board`),
                  ],
                }),
              ],
            }),
            i.boards.length === 0 &&
              !f &&
              (0, L.jsx)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: n(
                  `publish.leaderboardNoBoards`,
                  `No boards yet. Add one, or publish a build whose manifest declares some.`,
                ),
              }),
            i.boards.map((t, n) =>
              (0, L.jsx)(
                Ze,
                {
                  board: t,
                  metricKeys: ne,
                  dimensionKeys: re,
                  manifest: x,
                  busy: l,
                  isFirst: n === 0,
                  isLast: n === i.boards.length - 1,
                  onPatch: (n) => b(() => ce(e, t.id, n)),
                  onReset: () => v(t),
                  onDelete: () => g(t),
                },
                t.id,
              ),
            ),
            f &&
              (0, L.jsx)(Qe, {
                metricKeys: ne,
                dimensionKeys: re,
                manifest: x,
                busy: l,
                onCancel: () => m(!1),
                onCreate: async (t) => {
                  (await b(
                    () => le(e, t),
                    n(`publish.leaderboardBoardAdded`, `Board added`),
                  ),
                    m(!1));
                },
              }),
          ],
        }),
      (0, L.jsx)(F, {
        open: _ !== null,
        onOpenChange: (e) => !e && v(null),
        title: n(`publish.leaderboardReset`, `Reset this board?`),
        description: n(
          `publish.leaderboardResetConfirm`,
          `The board starts empty from now on. Results are kept — other boards still count them.`,
        ),
        onConfirm: () => {
          let t = _;
          (v(null),
            t &&
              b(
                () => ie(e, t.id),
                n(`publish.leaderboardResetDone`, `Board reset`),
              ));
        },
      }),
      (0, L.jsx)(F, {
        open: h !== null,
        onOpenChange: (e) => !e && g(null),
        title: n(`publish.leaderboardDelete`, `Delete this board?`),
        description: n(
          `publish.leaderboardDeleteConfirm`,
          `The board disappears from the game page. Results are kept.`,
        ),
        onConfirm: () => {
          let t = h;
          (g(null),
            t &&
              b(
                () => oe(e, t.id),
                n(`publish.leaderboardDeleted`, `Board deleted`),
              ));
        },
      }),
    ],
  });
}
function J({ children: e }) {
  return (0, L.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, L.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, L.jsx)(ae, {
            className: `h-4 w-4 text-primary`,
            "aria-hidden": !0,
          }),
          (0, L.jsx)(`p`, {
            className: `text-sm font-medium text-foreground`,
            children: `Leaderboards`,
          }),
        ],
      }),
      e,
    ],
  });
}
function Xe({ status: e }) {
  let { t } = T();
  return e
    ? e.error
      ? (0, L.jsxs)(`p`, {
          className: `text-xs text-destructive`,
          children: [
            t(
              `publish.leaderboardManifestInvalid`,
              `This game's leaderboard file is invalid:`,
            ),
            ` `,
            e.error,
          ],
        })
      : e.present
        ? (0, L.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: t(
              `publish.leaderboardManifestFound`,
              `This build declares {{count}} board(s).`,
              { count: e.boards },
            ),
          })
        : (0, L.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: t(
              `publish.leaderboardNoManifest`,
              `This build ships no sandscape.leaderboard.json.`,
            ),
          })
    : null;
}
