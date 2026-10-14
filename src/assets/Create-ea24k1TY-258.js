// Create-ea24k1TY 258 — classname
// Lines 86465-86842 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var pme = { video: Qt, image: pn, audio: jo },
  q3 = ({
    payload: e,
    subtitle: t,
    missing: n,
    onAdd: r,
    onRelink: i,
    onRemove: a,
  }) => {
    let o = pme[e.media_type],
      { dragProps: s } = Ce({
        kind: `comp-asset`,
        payload: e,
        disabled: n,
        preview: () =>
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5 rounded-md border border-violet-500/40 bg-card/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
            children: [
              (0, Z.jsx)(o, { className: `h-3 w-3 text-violet-300` }),
              (0, Z.jsx)(`span`, {
                className: `max-w-[160px] truncate`,
                children: e.name,
              }),
            ],
          }),
      });
    return (0, Z.jsxs)(`div`, {
      ...s,
      draggable: !1,
      className: `group flex items-center gap-2 rounded-md border border-transparent px-1.5 py-1 transition-colors hover:border-violet-500/30 hover:bg-violet-500/5 ${n ? `opacity-60` : `cursor-grab active:cursor-grabbing`}`,
      title: n
        ? `${e.name} — missing media, relink to use`
        : `${e.name} (drag to canvas or timeline)`,
      children: [
        (0, Z.jsx)(o, { className: `h-3.5 w-3.5 shrink-0 text-gray-500` }),
        (0, Z.jsxs)(`div`, {
          className: `min-w-0 flex-1`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `truncate text-[11px] text-gray-200`,
              children: e.name,
            }),
            (0, Z.jsx)(`div`, {
              className: `truncate text-[9px] text-gray-500`,
              children: n ? `missing — relink` : t,
            }),
          ],
        }),
        n && i
          ? (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: i,
              className: `shrink-0 rounded p-1 text-amber-300 transition-colors hover:bg-gray-700/50`,
              title: `Relink file`,
              "aria-label": `Relink ${e.name}`,
              children: (0, Z.jsx)(see, { className: `h-3 w-3` }),
            })
          : (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: r,
              className: `shrink-0 rounded p-1 text-gray-500 opacity-0 transition-all hover:bg-gray-700/50 hover:text-violet-300 group-hover:opacity-100`,
              title: `Add at playhead`,
              "aria-label": `Add ${e.name} at playhead`,
              children: (0, Z.jsx)(ni, { className: `h-3 w-3` }),
            }),
        a &&
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: a,
            className: `shrink-0 rounded p-1 text-gray-600 opacity-0 transition-all hover:bg-gray-700/50 hover:text-red-300 group-hover:opacity-100`,
            title: `Remove from library`,
            "aria-label": `Remove ${e.name}`,
            children: (0, Z.jsx)(qr, { className: `h-3 w-3` }),
          }),
      ],
    });
  },
  mme = ({
    assets: e,
    mediaCache: t,
    engine: n,
    onImportFiles: r,
    onOpenSettings: i,
    onOpenExport: a,
    onSaveProject: o,
    onOpenProject: s,
  }) => {
    let c = G3((e) => e.doc);
    G3((e) => e.mediaVersion);
    let l = (0, X.useRef)(null),
      u = (0, X.useRef)(null),
      d = (0, X.useRef)(null),
      f = (0, X.useRef)(null),
      [p, m] = (0, X.useState)(!1),
      h = c.name,
      { width: g, height: _, fps: v } = c.settings,
      y = (0, X.useCallback)(
        (e) => {
          K3(t, e, { start_sec: n.getCurrentTime() });
        },
        [n, t],
      ),
      b = (0, X.useCallback)(
        (e) => ({
          ref: { source: `local`, media_id: e.media_id },
          media_type: e.media_type,
          name: e.name,
          duration_sec: e.duration_sec,
          width: e.width,
          height: e.height,
        }),
        [],
      ),
      x = (0, X.useCallback)((e) => {
        ((f.current = e), d.current?.click());
      }, []),
      S = (0, X.useCallback)(
        async (e) => {
          let n = e.target.files?.[0],
            r = f.current;
          ((e.target.value = ``),
            !(!n || !r) &&
              ((await t.relinkLocalFile(r, n))
                ? (Hr.success(`Relinked ${r.name}`),
                  G3.getState().bumpMediaVersion())
                : Hr.error(`Could not read ${n.name}`)));
        },
        [t],
      ),
      C = [];
    for (let t of e) {
      if (!t.id) continue;
      let e = t.asset_name || t.name;
      if (t.type === `audio` || gt.includes(t.asset_type ?? ``)) {
        let n = t.baked_audio_path || t.audio_path || t.sfx_path || t.path;
        if (!n) continue;
        C.push({
          payload: {
            ref: { source: `session`, asset_id: t.id, path: n, name: e },
            media_type: `audio`,
            name: e,
            duration_sec: 0,
            width: 0,
            height: 0,
          },
          subtitle: `session audio`,
        });
      } else if (t.type === `image` || t.concept_art_path) {
        let n = t.concept_art_path || t.path;
        if (!n) continue;
        C.push({
          payload: {
            ref: { source: `session`, asset_id: t.id, path: n, name: e },
            media_type: `image`,
            name: e,
            duration_sec: 0,
            width: 0,
            height: 0,
          },
          subtitle: `session image`,
        });
      } else
        /\.(mp4|webm|mov)$/i.test(t.path ?? ``) &&
          C.push({
            payload: {
              ref: { source: `session`, asset_id: t.id, path: t.path, name: e },
              media_type: `video`,
              name: e,
              duration_sec: 0,
              width: 0,
              height: 0,
            },
            subtitle: `session video`,
          });
    }
    return (0, Z.jsxs)(`div`, {
      className: `flex h-full flex-col overflow-hidden bg-card ${p ? `ring-2 ring-inset ring-violet-500/60` : ``}`,
      onDragOver: (e) => {
        e.dataTransfer.types.includes(`Files`) && (e.preventDefault(), m(!0));
      },
      onDragLeave: () => m(!1),
      onDrop: (e) => {
        (e.preventDefault(), m(!1));
        let t = Array.from(e.dataTransfer.files ?? []);
        t.length > 0 && r(t);
      },
      children: [
        (0, Z.jsxs)(`div`, {
          className: `shrink-0 border-b border-border p-2.5`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1.5`,
              children: [
                (0, Z.jsx)(St, {
                  className: `h-3.5 w-3.5 shrink-0 text-violet-300`,
                }),
                (0, Z.jsx)(
                  `input`,
                  {
                    defaultValue: h,
                    onBlur: (e) => {
                      let t = e.target.value.trim();
                      t && t !== h && G3.getState().setCompName(t);
                    },
                    onKeyDown: (e) => {
                      (e.key === `Enter` && e.target.blur(),
                        e.stopPropagation());
                    },
                    className: `min-w-0 flex-1 rounded border border-transparent bg-transparent px-1 text-xs font-medium text-gray-100 outline-none transition-colors hover:border-gray-700/60 focus:border-violet-500/60`,
                    title: `Composition name`,
                  },
                  h,
                ),
              ],
            }),
            (0, Z.jsxs)(`button`, {
              type: `button`,
              onClick: i,
              className: `mt-1.5 flex w-full items-center gap-1.5 rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:border-violet-500/40 hover:text-gray-200`,
              title: `Composition settings`,
              children: [
                (0, Z.jsx)($t, { className: `h-3 w-3` }),
                g,
                `×`,
                _,
                ` · `,
                v,
                ` fps`,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `mt-1.5 flex gap-1`,
              children: [
                (0, Z.jsxs)(`button`, {
                  type: `button`,
                  onClick: a,
                  className: `flex flex-1 items-center justify-center gap-1 rounded-md border border-primary/30 bg-primary/20 px-2 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-primary/30`,
                  children: [
                    (0, Z.jsx)(_o, { className: `h-3 w-3` }),
                    `Export`,
                  ],
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: o,
                  className: `rounded-md border border-border p-1.5 text-muted-foreground transition-colors hover:border-violet-500/40 hover:text-gray-200`,
                  title: `Save project file (.sandscape-video.json)`,
                  "aria-label": `Save project file`,
                  children: (0, Z.jsx)(dte, { className: `h-3.5 w-3.5` }),
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: () => u.current?.click(),
                  className: `rounded-md border border-border p-1.5 text-muted-foreground transition-colors hover:border-violet-500/40 hover:text-gray-200`,
                  title: `Open project file`,
                  "aria-label": `Open project file`,
                  children: (0, Z.jsx)(ci, { className: `h-3.5 w-3.5` }),
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `shrink-0 p-2.5 pb-1`,
          children: [
            (0, Z.jsxs)(`button`, {
              type: `button`,
              onClick: () => l.current?.click(),
              className: `flex w-full items-center justify-center gap-1.5 rounded-md border border-dashed border-gray-700/70 px-2 py-2 text-[11px] text-muted-foreground transition-colors hover:border-violet-500/50 hover:text-gray-200`,
              children: [
                (0, Z.jsx)(En, { className: `h-3.5 w-3.5` }),
                `Import media…`,
              ],
            }),
            (0, Z.jsx)(`p`, {
              className: `mt-1 text-center text-[9px] text-gray-600`,
              children: `or drop files anywhere · stays local until you save`,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `min-h-0 flex-1 overflow-y-auto px-2 pb-3`,
          children: [
            c.media.length > 0 &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `px-1 pb-1 pt-2 text-[9px] font-medium uppercase tracking-wider text-gray-600`,
                    children: `Local media`,
                  }),
                  c.media.map((e) =>
                    (0, Z.jsx)(
                      q3,
                      {
                        payload: b(e),
                        subtitle:
                          e.media_type === `image`
                            ? `${e.width}×${e.height}`
                            : `${e.duration_sec.toFixed(1)}s${e.width ? ` · ${e.width}×${e.height}` : ``}`,
                        missing: t.isMissing({
                          source: `local`,
                          media_id: e.media_id,
                        }),
                        onAdd: () => y(b(e)),
                        onRelink: () => x(e),
                        onRemove: () => {
                          (t.downgradeToMissing({
                            source: `local`,
                            media_id: e.media_id,
                          }),
                            G3.getState().removeLocalMedia(e.media_id));
                        },
                      },
                      e.media_id,
                    ),
                  ),
                ],
              }),
            C.length > 0 &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `px-1 pb-1 pt-3 text-[9px] font-medium uppercase tracking-wider text-gray-600`,
                    children: `Session assets`,
                  }),
                  C.map(({ payload: e, subtitle: t }) =>
                    (0, Z.jsx)(
                      q3,
                      { payload: e, subtitle: t, onAdd: () => y(e) },
                      `${e.ref.source === `session` ? e.ref.asset_id : e.name}:${t}`,
                    ),
                  ),
                ],
              }),
            c.media.length === 0 &&
              C.length === 0 &&
              (0, Z.jsxs)(`p`, {
                className: `px-2 pt-6 text-center text-[10px] leading-relaxed text-gray-600`,
                children: [
                  `No media yet.`,
                  (0, Z.jsx)(`br`, {}),
                  `Import video, images or audio to start compositing.`,
                ],
              }),
          ],
        }),
        (0, Z.jsx)(`input`, {
          ref: l,
          type: `file`,
          multiple: !0,
          accept: `video/*,image/*,audio/*,.mp4,.webm,.mov,.mkv,.png,.jpg,.jpeg,.webp,.gif,.svg,.mp3,.wav,.ogg,.m4a,.aac,.flac`,
          className: `hidden`,
          onChange: (e) => {
            let t = Array.from(e.target.files ?? []);
            ((e.target.value = ``), t.length > 0 && r(t));
          },
        }),
        (0, Z.jsx)(`input`, {
          ref: u,
          type: `file`,
          accept: `.json,application/json`,
          className: `hidden`,
          onChange: (e) => {
            let t = e.target.files?.[0];
            ((e.target.value = ``), t && s(t));
          },
        }),
        (0, Z.jsx)(`input`, {
          ref: d,
          type: `file`,
          accept: `video/*,image/*,audio/*`,
          className: `hidden`,
          onChange: S,
        }),
      ],
    });
  },
  J3 = null;
