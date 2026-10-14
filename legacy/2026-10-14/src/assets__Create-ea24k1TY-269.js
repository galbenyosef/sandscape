// assets__Create-ea24k1TY 269 — current
// Lines 90558-91026 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Jme = ({ sessionDir: e, assets: t, isActive: n, refreshAssets: r }) => {
    let i = n !== !1,
      { portalTarget: a, requestedAsset: o, consumeRequestedAsset: s } = ie();
    (0, X.useEffect)(() => {
      if (!i) return;
      let e = s(`video`);
      if (!e) return;
      let n = t.find((t) => t.id === e.assetId || t.asset_name === e.assetId);
      (n && n.asset_type === `video_composition`) ||
        Hr.warning(`${e.assetId} is not reviewable in the Video Editor`, {
          description: `The Video Editor opens the session composition only.`,
        });
    }, [i, o, s, t]);
    let [c, l] = (0, X.useState)(!1),
      [u, d] = (0, X.useState)(!1),
      [f, p] = (0, X.useState)(!1),
      m = G3((e) => e.editingTextClip),
      h = G3((e) => e.docVersion),
      g = G3((e) => e.canUndo),
      _ = G3((e) => e.canRedo),
      v = (0, X.useRef)(null);
    v.current ||= new Ume();
    let y = v.current,
      b = (0, X.useRef)(t);
    b.current = t;
    let x = (0, X.useRef)(e);
    ((x.current = e),
      (0, X.useEffect)(() => {
        ((y.resolveSessionUrl = (e) => {
          let t = b.current.find((t) => t.id === e.asset_id);
          return jr.getAssetUrl(x.current, e.path, { version: t?.modified });
        }),
          (y.onChange = (e) => {
            let t = G3.getState();
            (e !== `audio` && t.bumpMediaVersion(),
              e !== `visual` && t.bumpAudioVersion());
          }));
      }, [y]),
      (0, X.useEffect)(() => () => v.current?.dispose(), []));
    let S = Gme(
      (0, X.useCallback)(() => G3.getState().doc, []),
      y,
      i,
    );
    (0, X.useEffect)(() => {
      S.restartIfPlaying();
    }, [h, G3((e) => e.audioVersion), S]);
    let C = (0, X.useRef)(new Set());
    ((0, X.useEffect)(() => {
      let e = G3.getState().doc,
        t = new Set();
      for (let n of e.tracks) for (let e of n.clips) t.add(e.id);
      y.pruneVideoElements(t);
      let n = C6(e),
        r = !1;
      for (let e of C.current)
        if (!n.has(e)) {
          r = !0;
          break;
        }
      ((C.current = n), r && y.retainOnly(n));
    }, [h, y]),
      (0, X.useEffect)(() => {}, [S, y]));
    let w = (0, X.useRef)(null),
      T = (0, X.useRef)(null),
      E = (0, X.useRef)(null),
      D = (0, X.useCallback)(
        async (e) => {
          if (w.current) return w.current;
          let t = G3.getState().doc,
            n = await S6.createVideoAsset(e, t.name || `Composition`),
            i = n.asset;
          return !n.success || !i
            ? (console.error(
                `[VideoEditor] could not create the composition asset:`,
                n.error,
              ),
              null)
            : ((w.current = i.id || i.asset_name || null), r?.(), w.current);
        },
        [r],
      ),
      O = (0, X.useCallback)(
        async (e, t, n) => {
          let r = n;
          if (!r) {
            if (w6(x.current) !== t) {
              console.error(
                `[VideoEditor] dropping autosave: captured session`,
                t,
                `is no longer active and its asset was never created — refusing to PUT across sessions`,
              );
              return;
            }
            r = await D(t);
          }
          if (!r) return;
          let i = await S6.saveVideoState(t, r, e);
          i.success || console.error(`[VideoEditor] autosave failed:`, i.error);
        },
        [D],
      ),
      k = (0, X.useCallback)(() => {
        let e = T.current;
        e &&
          ((T.current = null),
          E.current && clearTimeout(E.current),
          O(e.doc, e.sessionId, e.assetId));
      }, [O]),
      j = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
      if (j.current !== e) {
        (k(),
          (j.current = e),
          y.revive(),
          (w.current = null),
          (M.current = ``));
        let t = G3.getState(),
          n = w6(e);
        (async () => {
          let r = null;
          try {
            let e = await jr.listAssets(n),
              t = e.success
                ? (e.assets || []).find((e) => e.asset_type === x6)
                : void 0;
            if (t) {
              w.current = t.id || t.asset_name || null;
              let e = t.video_state;
              e && (r = M3(e));
            }
          } catch (e) {
            console.error(`[VideoEditor] failed to restore composition:`, e);
          }
          if (j.current !== e) return;
          let i = r ?? v3();
          (t.loadDoc(i), y.retainOnly(C6(i)), (M.current = ``));
        })();
      }
      return () => {
        j.current = null;
      };
    }, [e, y, k]);
    let M = (0, X.useRef)(``);
    ((0, X.useEffect)(() => {
      let e = qme(G3.getState().doc),
        t = JSON.stringify(e);
      if (M.current === ``) {
        M.current = t;
        return;
      }
      if (t === M.current) return;
      E.current && clearTimeout(E.current);
      let n = w6(x.current),
        r = w.current;
      return (
        (T.current = { sessionId: n, assetId: r, doc: e }),
        (E.current = setTimeout(() => {
          ((M.current = t), (T.current = null), O(e, n, r));
        }, Kme)),
        () => {
          E.current && clearTimeout(E.current);
        }
      );
    }, [h, O]),
      (0, X.useEffect)(() => {
        M.current = ``;
      }, [e]),
      (0, X.useEffect)(() => () => k(), [k]));
    let N = (0, X.useCallback)(
        async (e, t) => {
          let n = G3.getState(),
            r = 0;
          for (let i of e) {
            let e = await y.importLocalFile(i);
            if (!e) {
              Hr.error(`Unsupported file: ${i.name}`);
              continue;
            }
            (n.registerLocalMedia(e),
              (r += 1),
              t &&
                (await K3(
                  y,
                  {
                    ref: { source: `local`, media_id: e.media_id },
                    media_type: e.media_type,
                    name: e.name,
                    duration_sec: e.duration_sec,
                    width: e.width,
                    height: e.height,
                  },
                  {
                    start_sec: t.start_sec ?? S.getCurrentTime(),
                    x: t.x,
                    y: t.y,
                  },
                )));
          }
          r > 0 && !t && Hr.success(`Imported ${r} file${r > 1 ? `s` : ``}`);
        },
        [S, y],
      ),
      P = (0, X.useCallback)(() => {
        let e = G3.getState().doc,
          t = new Blob([JSON.stringify(e, null, 2)], {
            type: `application/json`,
          }),
          n = URL.createObjectURL(t),
          r = document.createElement(`a`);
        ((r.href = n),
          (r.download = `${e.name.replace(/[^\w\-. ]+/g, ``).trim() || `composition`}.sandscape-video.json`),
          r.click(),
          setTimeout(() => URL.revokeObjectURL(n), 1e4),
          Hr.success(
            `Project file saved (local media must be relinked when reopened elsewhere)`,
          ));
      }, []),
      I = (0, X.useCallback)(
        async (e) => {
          try {
            let t = M3(JSON.parse(await e.text()));
            if (!t) {
              Hr.error(`Not a valid Sandscape video project file`);
              return;
            }
            (G3.getState().loadDoc(t), y.retainOnly(C6(t)));
            for (let e of t.media) y.registerMissingLocal(e);
            (S.stop(),
              Hr.success(`Opened "${t.name}"`),
              t.media.length > 0 &&
                Hr.info(`Relink local media from the assets panel`));
          } catch (e) {
            (console.error(`[VideoEditor] failed to open project:`, e),
              Hr.error(`Could not read the project file`));
          }
        },
        [S, y],
      ),
      L = (0, X.useCallback)(
        (e) => {
          let t = G3.getState(),
            { width: n, height: r } = t.doc.settings;
          t.addVisualTrack(
            `text`,
            { source: `text` },
            {
              name:
                e.content
                  .split(
                    `
`,
                  )[0]
                  .slice(0, 24) || `Text`,
              start_sec: S.getCurrentTime(),
              duration_sec: 5,
              x: n / 2,
              y: r / 2,
              text: e,
            },
          );
        },
        [S],
      ),
      R = (0, X.useMemo)(
        () =>
          m
            ? (G3.getState()
                .doc.tracks.find((e) => e.id === m.track_id)
                ?.clips.find((e) => e.id === m.clip_id)?.text ?? null)
            : null,
        [m, h],
      );
    (0, X.useEffect)(() => {
      if (!i) return;
      let e = (e) => {
        if (e.repeat) return;
        let t = e.target;
        if (
          t &&
          (t.tagName === `INPUT` ||
            t.tagName === `TEXTAREA` ||
            t.isContentEditable)
        )
          return;
        let n = G3.getState(),
          r = n.doc.settings.fps || 30,
          i = e.ctrlKey || e.metaKey;
        if (i && e.key.toLowerCase() === `z`) {
          (e.preventDefault(), e.shiftKey ? n.redo() : n.undo());
          return;
        }
        if (i && e.key.toLowerCase() === `y`) {
          (e.preventDefault(), n.redo());
          return;
        }
        switch (e.code) {
          case `Space`:
            (e.preventDefault(), S.togglePlay());
            return;
          case `ArrowLeft`:
            (e.preventDefault(),
              S.seek(S.getCurrentTime() - (e.shiftKey ? 1 : 1 / r)));
            return;
          case `ArrowRight`:
            (e.preventDefault(),
              S.seek(S.getCurrentTime() + (e.shiftKey ? 1 : 1 / r)));
            return;
          case `Home`:
            (e.preventDefault(), S.seek(0));
            return;
          case `End`:
            (e.preventDefault(), S.seek(S.getDuration()));
            return;
          case `KeyS`:
            !i &&
              n.selectedTrackId &&
              n.selectedClipId &&
              (e.preventDefault(),
              n.splitClipAt(
                n.selectedTrackId,
                n.selectedClipId,
                S.getCurrentTime(),
              ));
            return;
          case `Delete`:
          case `Backspace`: {
            let t = n.selectedKeyframe;
            if (t) {
              (e.preventDefault(),
                n.removeKeyframe(t.track_id, t.clip_id, t.prop, t.keyframe_id));
              return;
            }
            n.selectedTrackId &&
              n.selectedClipId &&
              (e.preventDefault(),
              n.removeClip(n.selectedTrackId, n.selectedClipId));
            return;
          }
          default:
        }
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [i, S]);
    let z = (0, Z.jsx)(mme, {
      assets: t,
      mediaCache: y,
      engine: S,
      onImportFiles: (e) => void N(e),
      onOpenSettings: () => l(!0),
      onOpenExport: () => d(!0),
      onSaveProject: P,
      onOpenProject: (e) => void I(e),
    });
    return (0, Z.jsxs)(`div`, {
      className: `flex h-full bg-card`,
      children: [
        i && a && (0, js.createPortal)(z, a),
        !a &&
          (0, Z.jsx)(`div`, {
            className: `w-64 shrink-0 border-r border-border`,
            children: z,
          }),
        (0, Z.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex shrink-0 items-center gap-1 border-b border-border bg-card px-2 py-1`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] uppercase tracking-wider text-gray-600`,
                  children: `Video Editor`,
                }),
                (0, Z.jsxs)(`div`, {
                  className: `ml-auto flex items-center gap-0.5`,
                  children: [
                    (0, Z.jsx)(`button`, {
                      type: `button`,
                      onClick: () => G3.getState().undo(),
                      disabled: !g,
                      className: `rounded p-1 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200 disabled:opacity-30`,
                      title: `Undo (Ctrl+Z)`,
                      "aria-label": `Undo`,
                      children: (0, Z.jsx)(F, { className: `h-3.5 w-3.5` }),
                    }),
                    (0, Z.jsx)(`button`, {
                      type: `button`,
                      onClick: () => G3.getState().redo(),
                      disabled: !_,
                      className: `rounded p-1 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200 disabled:opacity-30`,
                      title: `Redo (Ctrl+Shift+Z)`,
                      "aria-label": `Redo`,
                      children: (0, Z.jsx)(A, { className: `h-3.5 w-3.5` }),
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsxs)(oe, {
              direction: `vertical`,
              className: `min-h-0 flex-1`,
              children: [
                (0, Z.jsx)(re, {
                  defaultSize: 62,
                  minSize: 30,
                  children: (0, Z.jsx)(vme, {
                    mediaCache: y,
                    engine: S,
                    isActive: i,
                    onImportFiles: (e, t) =>
                      void N(e, {
                        start_sec: S.getCurrentTime(),
                        x: t?.x,
                        y: t?.y,
                      }),
                  }),
                }),
                (0, Z.jsx)(G, { className: `h-px bg-border` }),
                (0, Z.jsx)(re, {
                  defaultSize: 38,
                  minSize: 18,
                  children: (0, Z.jsx)(Bme, {
                    engine: S,
                    mediaCache: y,
                    isActive: i,
                    onAddText: () => p(!0),
                    onImportFilesAtTime: (e, t) => void N(e, { start_sec: t }),
                  }),
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(yme, { open: c, onOpenChange: l }),
        (0, Z.jsx)(Dme, { open: u, onOpenChange: d, mediaCache: y, engine: S }),
        (0, Z.jsx)(u6, {
          open: f,
          onOpenChange: p,
          initial: null,
          onSubmit: L,
        }),
        (0, Z.jsx)(u6, {
          open: !!m && !!R,
          onOpenChange: (e) => {
            e || G3.getState().setEditingTextClip(null);
          },
          initial: R,
          onSubmit: (e) => {
            m &&
              (G3.getState().setTextStyle(m.track_id, m.clip_id, e),
              G3.getState().setEditingTextClip(null));
          },
        }),
      ],
    });
  },
  T6 = [`hips`, `hand_l`, `hand_r`, `foot_l`, `foot_r`, `head`],
  Yme = [`hand_l`, `hand_r`, `foot_l`, `foot_r`],
  E6 = {
    hips: [`pelvis`, `Pelvis`, `Hips`, `hips`, `mixamorigHips`],
    hand_l: [`hand_l`],
    hand_r: [`hand_r`],
    foot_l: [`foot_l`],
    foot_r: [`foot_r`],
    head: [`head`],
  };
