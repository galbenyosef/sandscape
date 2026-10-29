// Create-CEn7EAZs 301 — jsx
// Lines 106734-107060 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function jye({
  headerTab: e,
  editorSubTabs: t,
  activeEditorTab: n,
  selectEditorTab: r,
  closeEditorTab: i,
  sessionDir: a,
  sessionInfo: o,
  assets: s,
  scenes: c,
  gameUrl: l,
  handleLoadScene: u,
  handleSaveScene: d,
  sceneReloadSignal: f,
  designDocumentsMeta: p,
  handleExecuteWorkflow: m,
  fetchAssets: h,
  loadSessionData: g,
  containerRef: _,
  testingAnalysisReady: v,
  openEditorTab: y,
  registerLevelEditorFlush: b,
}) {
  return (0, Z.jsx)(`div`, {
    "data-tour": `tour-workspace-panel`,
    className: `h-full m-1.5 mt-0 bg-card rounded-lg border border-border overflow-hidden`,
    children: (0, Z.jsx)(`div`, {
      className: `flex flex-col h-full`,
      children: (0, Z.jsxs)(`div`, {
        className: `flex-grow overflow-hidden min-h-0 relative`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `absolute inset-0`,
            style: { display: e === `editor` ? void 0 : `none` },
            children: (0, Z.jsxs)(Gue, {
              openTabs: t,
              activeTab: n,
              onTabSelect: r,
              onTabClose: i,
              children: [
                (0, Z.jsx)(`div`, {
                  className: `absolute inset-0 p-2`,
                  style: { display: n === `preview` ? void 0 : `none` },
                  children: (0, Z.jsx)(Ede, {
                    isActive: e === `editor` && n === `preview`,
                  }),
                }),
                t.includes(`level`) &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `level` ? void 0 : `none` },
                    children: (0, Z.jsx)(re, {
                      scenes: c,
                      sessionDir: a,
                      onLoadScene: u,
                      onSaveScene: d,
                      onOpenKitGenerator: void 0,
                      onRegisterFlush: b,
                      isActive: e === `editor` && n === `level`,
                      sceneReloadSignal: f,
                    }),
                  }),
                !1,
                t.includes(`assets`) &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `assets` ? void 0 : `none` },
                    children: (0, Z.jsx)(tpe, {
                      assets: s,
                      sessionDir: a,
                      sessionId: o?.session_id || ``,
                      onExecute: (e, t, n) => {
                        m(e, t, n);
                      },
                      isActive: e === `editor` && n === `assets`,
                    }),
                  }),
                t.includes(`image`) &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `image` ? void 0 : `none` },
                    children: (0, Z.jsx)(Aye, {
                      assets: s,
                      sessionDir: a,
                      isActive: e === `editor` && n === `image`,
                      refreshAssets: h,
                    }),
                  }),
                t.includes(`character`) &&
                  o?.session_id &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `character` ? void 0 : `none` },
                    children: (0, Z.jsx)(Eve, {
                      sessionId: o.session_id,
                      sessionDir: a,
                      assets: s,
                      onExecuteWorkflow: (e, t, n) => {
                        m(e, t, n);
                      },
                      isActive: e === `editor` && n === `character`,
                    }),
                  }),
                t.includes(`skin-weights`) &&
                  o?.session_id &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `skin-weights` ? void 0 : `none` },
                    children: (0, Z.jsx)(pye, {
                      sessionId: o.session_id,
                      sessionDir: a,
                      assets: s,
                      isActive: e === `editor` && n === `skin-weights`,
                    }),
                  }),
                t.includes(`sound`) &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `sound` ? void 0 : `none` },
                    children: (0, Z.jsx)(npe, {
                      sessionDir: a,
                      assets: s,
                      onExecuteWorkflow: (e, t) => {
                        m(e, t);
                      },
                      isActive: e === `editor` && n === `sound`,
                      refreshAssets: h,
                    }),
                  }),
                t.includes(`video`) &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `video` ? void 0 : `none` },
                    children: (0, Z.jsx)(Dhe, {
                      sessionDir: a,
                      assets: s,
                      isActive: e === `editor` && n === `video`,
                      refreshAssets: h,
                    }),
                  }),
                t.includes(`docs`) &&
                  o?.session_id &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `docs` ? void 0 : `none` },
                    children: (0, Z.jsx)(gye, {
                      sessionId: o.session_id,
                      isActive: e === `editor` && n === `docs`,
                      documentsMeta: p,
                    }),
                  }),
                t.includes(`code`) &&
                  o?.session_id &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0`,
                    style: { display: n === `code` ? void 0 : `none` },
                    children: (0, Z.jsx)(jme, {
                      sessionId: o.session_id,
                      isActive: e === `editor` && n === `code`,
                    }),
                  }),
              ],
            }),
          }),
          e === `game` &&
            (0, Z.jsx)(`div`, {
              className: `absolute inset-0 p-6`,
              children: (0, Z.jsx)(a0, {
                containerRef: _,
                gameUrl: l,
                sessionDir: a,
                isActive: e === `game`,
                onRefresh: async () => {
                  a && (await g(a));
                },
                analysisReady: v,
              }),
            }),
        ],
      }),
    }),
  });
}
var U9 = new Set([`build_first_playable`, `build_first_playable_quick`]),
  Mye = new Set([
    `asset_added`,
    `asset_updated`,
    `asset_removed`,
    `asset_generation_completed`,
    `asset_version_published`,
  ]),
  Nye = [
    `concept_art_path`,
    `model_3d_path`,
    `audio_path`,
    `sfx_path`,
    `baked_audio_path`,
    `collision_mesh_path`,
    `mixdown_path`,
    `rendered_video_path`,
    `segmented_model_path`,
  ],
  Pye = 1921,
  Fye = { chat: 18, chatMax: 28, workflow: 22, workflowMax: 32, editor: 60 },
  Iye = { chat: 24, chatMax: 32, workflow: 24, workflowMax: 42, editor: 49 };
function Lye() {
  return typeof window < `u` && window.innerWidth >= Pye ? Fye : Iye;
}
function Rye({
  recordMode: e,
  leftPanelRef: t,
  setIsLeftCollapsed: n,
  chatPanelInner: r,
  centerPanelInner: i,
  editorPanelInner: a,
}) {
  let [o] = (0, X.useState)(Lye);
  return e
    ? (0, Z.jsxs)(`div`, {
        className: `flex-1 min-h-0 flex overflow-hidden`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `h-full shrink-0${e ? ` record-chat-font` : ``}`,
            style: { width: 774 },
            children: r,
          }),
          (0, Z.jsx)(`div`, {
            className: `h-full shrink-0`,
            style: { width: 774 },
            children: i,
          }),
          (0, Z.jsx)(`div`, {
            className: `flex-1 min-w-0 h-full`,
            children: a,
          }),
        ],
      })
    : (0, Z.jsxs)(se, {
        direction: `horizontal`,
        className: `flex-1 min-h-0`,
        children: [
          (0, Z.jsx)(ie, {
            ref: t,
            defaultSize: o.chat,
            minSize: 12,
            maxSize: o.chatMax,
            collapsible: !0,
            collapsedSize: 2,
            onCollapse: () => n(!0),
            onExpand: () => n(!1),
            children: r,
          }),
          (0, Z.jsx)(W, { className: `w-0 bg-transparent` }),
          (0, Z.jsx)(ie, {
            defaultSize: o.workflow,
            minSize: 16,
            maxSize: o.workflowMax,
            children: i,
          }),
          (0, Z.jsx)(W, { className: `w-0 bg-transparent` }),
          (0, Z.jsx)(ie, { defaultSize: o.editor, minSize: 35, children: a }),
        ],
      });
}
function zye() {
  let { user: e } = Dr(),
    t = l(),
    [n, r] = (0, X.useState)(() => Mt()),
    [i, a] = (0, X.useState)(null),
    o = bn(t.pathname),
    s = lr(wt),
    u = o || !e || n || s;
  return (
    (0, X.useEffect)(() => {
      if (u || !e) return;
      let t = !1;
      return (
        Hr(e.id)
          .then((e) => {
            t || a(e.length > 0);
          })
          .catch(() => {
            t || a(!0);
          }),
        () => {
          t = !0;
        }
      );
    }, [u, e]),
    nee({ inTour: o, hasCreatedBefore: i ?? !0, dismissed: n, tourFinished: s })
      ? (0, Z.jsxs)(`div`, {
          className: `mx-4 mt-2 flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-2.5 text-sm`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-muted-foreground`,
              children: [
                (0, Z.jsx)(Po, {
                  className: `h-4 w-4 shrink-0 text-primary`,
                  "aria-hidden": !0,
                }),
                (0, Z.jsxs)(`span`, {
                  children: [
                    `New here?`,
                    ` `,
                    (0, Z.jsx)(c, {
                      to: `/tour`,
                      className: `font-medium text-primary hover:underline`,
                      children: `Take the 3-minute tour`,
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => {
                (ht(), r(!0));
              },
              "aria-label": `Dismiss tour invitation`,
              className: `text-muted-foreground transition-colors hover:text-foreground`,
              children: (0, Z.jsx)(Jr, { className: `h-4 w-4` }),
            }),
          ],
        })
      : null
  );
}
