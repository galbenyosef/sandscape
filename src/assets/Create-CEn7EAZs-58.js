// Create-CEn7EAZs 58 — classname
// Lines 18258-18478 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var Cp = `level_import`,
  wp = `Takes about 10 — 20 minutes — longer on a large game. It runs in the background, so you can keep working while it does.`;
function Wne(e) {
  return (e || [])
    .filter((e) => e.asset_type === `scene`)
    .filter((e) => !!e.asset_name)
    .filter((e) => !z(e.asset_name))
    .map((e) => ({
      slug: e.asset_name,
      displayName: e.description?.trim() || e.asset_name,
      assetId: e.id,
    }));
}
function Gne(e, t) {
  let n = e === `complete` || t > 0;
  return {
    label: n ? `Re-import current Level` : `Import current Level`,
    tooltip: n
      ? `Capture the level your game builds again. This replaces a level of the same name with the code-built layout — the version you edited is kept in its version history.`
      : `Capture the level your game builds at runtime, save it as an editable level, and wire the game to play your edits`,
    replacesExisting: n,
  };
}
function Kne({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  onOpenEditorTab: a,
  codingFeed: o,
  codingResult: s,
  nodeProgress: c,
  onLocalCodingActivity: l,
}) {
  let [u, d] = (0, X.useState)(``),
    f = i ? i.split(`/`).pop() || i : ``,
    p = e.state === `in-progress`,
    m = e.state === `locked`,
    h = Ia(Ua(e.id)),
    g = Za({ actionId: Cp, sessionId: f || null, completedRun: s }),
    _ = (0, X.useMemo)(() => Wne(r), [r]),
    v = Gne(e.state, _.length),
    y = (e) =>
      e?.resume
        ? { actionId: s?.actionId || `level_import`, params: bp() }
        : { actionId: Cp, codingModels: g.payload },
    b = () => {
      if (g.blocked) return;
      let t = u.trim();
      (n?.(e.id, t || `Import the level the game boots into`, y()), d(``));
    },
    x = () => {
      n?.(e.id, `Resume the interrupted run and finish it`, y({ resume: !0 }));
    },
    S = !m && !p,
    C = (o?.events.length ?? 0) > 0;
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-start gap-2.5`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`,
            children: (0, Z.jsx)(B, { className: `h-4 w-4 text-primary` }),
          }),
          (0, Z.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, Z.jsx)(`p`, {
                className: `text-sm font-semibold text-foreground/90`,
                children: `Level Design`,
              }),
              (0, Z.jsx)(`p`, {
                className: `text-[11px] text-muted-foreground/60`,
                children: `Bring the level your game builds into the Level Editor — then your edits are what it plays.`,
              }),
            ],
          }),
        ],
      }),
      _.length > 0 &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 block`,
              children: `Levels`,
            }),
            _.map((e) =>
              (0, Z.jsxs)(
                `div`,
                {
                  className: `flex items-center justify-between gap-2 bg-card rounded px-3 py-2`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-xs text-muted-foreground truncate`,
                      children: e.displayName,
                    }),
                    (0, Z.jsx)(`div`, {
                      className: `w-20 flex-shrink-0`,
                      children: (0, Z.jsx)(_p, {
                        tabId: `level`,
                        label: `Open`,
                        assetId: e.assetId,
                        onOpenEditorTab: a,
                      }),
                    }),
                  ],
                },
                e.slug,
              ),
            ),
          ],
        }),
      m &&
        e.prerequisites.length > 0 &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 block`,
              children: `Prerequisites`,
            }),
            e.prerequisites.map((e) =>
              (0, Z.jsx)(
                `div`,
                {
                  className: `text-xs text-muted-foreground bg-card rounded px-3 py-2`,
                  children: e,
                },
                e,
              ),
            ),
          ],
        }),
      p &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, Z.jsx)(vc, { sessionId: f, isRunning: p, onLocalActivity: l }),
            (0, Z.jsx)(Nc, { feed: o, progress: c, running: p }),
          ],
        }),
      !p && s && (0, Z.jsx)(gp, { result: s, onResume: x }),
      !p && !s && C && (0, Z.jsx)(Nc, { feed: o, progress: null, running: !1 }),
      S &&
        n &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-2 pt-2 border-t border-border`,
          children: [
            (0, Z.jsx)(`textarea`, {
              value: u,
              onChange: (e) => d(e.target.value),
              className: `w-full h-16 bg-card border border-border rounded-lg p-2.5 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
              placeholder: `Optional — name another level ('import level 3') or add direction...`,
              disabled: t,
            }),
            (0, Z.jsx)(Sc, { choice: g }),
            (0, Z.jsx)($t, {
              onClick: b,
              className: `w-full`,
              disabled: t || g.blocked,
              cost: h,
              variant: v.replacesExisting ? `outline` : `default`,
              label: v.label,
              icon: v.replacesExisting
                ? (0, Z.jsx)(ln, { className: `h-4 w-4` })
                : (0, Z.jsx)(Vo, { className: `h-4 w-4` }),
              tooltip: v.tooltip,
              checkBalance: !0,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-start gap-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg`,
              children: [
                (0, Z.jsx)(Rr, {
                  className: `h-3 w-3 text-yellow-400 mt-0.5 shrink-0`,
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-[11px] text-yellow-400/90`,
                  children: wp,
                }),
              ],
            }),
            v.replacesExisting &&
              (0, Z.jsx)(`p`, {
                className: `text-[10px] text-muted-foreground/50`,
                children: `Re-importing replaces a level of the same name with a fresh capture of the code-built layout. The version you edited stays in its version history.`,
              }),
          ],
        }),
      m &&
        (0, Z.jsx)(`div`, {
          className: `flex items-center gap-2 p-3 bg-secondary/30 rounded-lg`,
          children: (0, Z.jsx)(`span`, {
            className: `text-sm text-muted-foreground/60`,
            children: `Complete prerequisites to unlock`,
          }),
        }),
      p &&
        !C &&
        (0, Z.jsxs)(`div`, {
          className: `flex flex-col items-center gap-1 py-2`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Importing the current level...`,
              ],
            }),
            (0, Z.jsx)(`span`, {
              className: `text-[11px] text-muted-foreground/60`,
              children: wp,
            }),
          ],
        }),
    ],
  });
}
