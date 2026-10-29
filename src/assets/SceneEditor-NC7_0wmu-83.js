// SceneEditor-NC7_0wmu 83 — classname
// Lines 39533-40962 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var dS = ({ title: e, action: t }) =>
    (0, Y.jsxs)(`div`, {
      className: `flex items-center justify-between px-3 py-2 border-b border-border/60 bg-muted/10`,
      children: [
        (0, Y.jsx)(`span`, {
          className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground`,
          children: e,
        }),
        t,
      ],
    }),
  fS = ({
    node: e,
    depth: t,
    selectedUuids: n,
    primaryUuid: r,
    onSelect: i,
    expandedGroups: a,
    onToggleGroup: o,
    onReparentObject: s,
    onAssignMaterial: c,
    forceExpanded: d = !1,
  }) => {
    let { object: f, children: p } = e,
      m = n.has(f.uuid),
      g = f.uuid === r,
      _ = p.length > 0,
      v = d || a.has(f.uuid),
      y = oS(f),
      b = f instanceof nt || _,
      x = f.name || f.type,
      { dragProps: S } = u({
        kind: `scene-node`,
        payload: { uuid: f.uuid },
        preview: (0, Y.jsxs)(`div`, {
          className: `flex items-center gap-1.5 rounded-md border border-purple-500/40 bg-[#1a1d2e]/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
          children: [
            (0, Y.jsx)(y, { className: `w-3 h-3 flex-shrink-0` }),
            (0, Y.jsx)(`span`, {
              className: `truncate max-w-[160px]`,
              children: x,
            }),
          ],
        }),
      }),
      {
        dropProps: C,
        isOver: w,
        activeData: T,
      } = h({
        accept: [`scene-node`, `material`],
        onDrop: (e) => {
          if (e.kind === `material`) {
            c(f.uuid, e.payload.materialId);
            return;
          }
          let t = e.payload.uuid;
          t && t !== f.uuid && s(t, f.uuid);
        },
      }),
      E = w
        ? T?.kind === `material`
          ? `ring-1 ring-inset ring-emerald-400/70 bg-emerald-400/10`
          : `ring-1 ring-inset ring-primary/70 bg-primary/10`
        : ``;
    return (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsxs)(`button`, {
          ref: C.ref,
          "data-dnd-zone": C[`data-dnd-zone`],
          onPointerDown: S.onPointerDown,
          draggable: S.draggable,
          "data-node-uuid": f.uuid,
          onClick: (e) => {
            let t =
              e.ctrlKey || e.metaKey
                ? `toggle`
                : e.shiftKey
                  ? `add`
                  : `replace`;
            (i(f.uuid, t), t === `replace` && !d && b && _ && o(f.uuid));
          },
          className: `w-full flex items-center gap-1.5 px-2 py-1 text-[11px] rounded hover:bg-accent/50 ${E} ${g ? `bg-primary/15 text-foreground` : m ? `bg-primary/10 text-foreground` : `text-muted-foreground`}`,
          style: { ...S.style, paddingLeft: `${t * 16 + 8}px` },
          children: [
            b && _
              ? v
                ? (0, Y.jsx)(F, { className: `w-3 h-3 flex-shrink-0` })
                : (0, Y.jsx)(l, { className: `w-3 h-3 flex-shrink-0` })
              : (0, Y.jsx)(`span`, { className: `w-3 flex-shrink-0` }),
            (0, Y.jsx)(y, { className: `w-3 h-3 flex-shrink-0` }),
            (0, Y.jsx)(`span`, {
              className: `truncate`,
              children: f.name || f.type,
            }),
            !f.visible &&
              (0, Y.jsx)(Dn, {
                className: `w-3 h-3 flex-shrink-0 text-amber-400`,
                "aria-label": `Hidden in game`,
              }),
          ],
        }),
        v &&
          p.map((e) =>
            (0, Y.jsx)(
              fS,
              {
                node: e,
                depth: t + 1,
                selectedUuids: n,
                primaryUuid: r,
                onSelect: i,
                expandedGroups: a,
                onToggleGroup: o,
                onReparentObject: s,
                onAssignMaterial: c,
                forceExpanded: d,
              },
              e.object.uuid,
            ),
          ),
      ],
    });
  },
  pS = ({
    asset: e,
    sessionDir: t,
    selected: n,
    armed: r,
    busy: i,
    placedCount: a,
    onSelect: o,
    onArmDelete: s,
    onConfirmDelete: c,
    onCancelDelete: l,
  }) => {
    let d = e.id || e.asset_name,
      f = e.model_3d_path || e.splat_path || ``,
      p = e.thumbnail_path
        ? A.getAssetUrl(t, e.thumbnail_path, {
            version: e.thumbnail_version ?? 0,
          })
        : e.concept_art_path
          ? A.getAssetUrl(t, e.concept_art_path, !1)
          : void 0,
      m = e.splat_path ? `SPZ` : e.model_3d_path ? `3D` : `IMG`,
      h = (0, J.useRef)(null),
      g = (0, J.useRef)(r);
    (0, J.useEffect)(() => {
      (r && !g.current && h.current?.focus(), (g.current = r));
    }, [r]);
    let { dragProps: _ } = u({
      kind: `scene-asset`,
      payload: {
        assetId: d,
        name: e.asset_name,
        modelPath: f,
        thumbnailUrl: p,
        kind: e.splat_path ? `splat` : e.model_3d_path ? `3d` : `image`,
        assetType: e.asset_type,
      },
      preview: (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-1.5 rounded-md border border-purple-500/40 bg-[#1a1d2e]/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
        children: [
          p
            ? (0, Y.jsx)(`img`, {
                src: p,
                alt: ``,
                className: `w-4 h-4 rounded object-cover flex-shrink-0`,
              })
            : (0, Y.jsx)(Rn, { className: `w-3 h-3 flex-shrink-0` }),
          (0, Y.jsx)(`span`, {
            className: `truncate max-w-[160px]`,
            children: e.asset_name,
          }),
        ],
      }),
    });
    return (0, Y.jsxs)(`button`, {
      ref: h,
      onPointerDown: _.onPointerDown,
      draggable: _.draggable,
      style: _.style,
      onClick: o,
      onBlur: (e) => {
        r && !e.currentTarget.contains(e.relatedTarget) && l();
      },
      onKeyDown: (e) => {
        if (e.key === `Delete` || e.key === `Backspace`) {
          if (e.repeat) {
            (e.preventDefault(), e.stopPropagation());
            return;
          }
          if ((!r && !n) || (e.preventDefault(), e.stopPropagation(), i))
            return;
          r ? c() : s();
        } else
          e.key === `Escape` &&
            r &&
            (e.preventDefault(), e.stopPropagation(), l());
      },
      className: `group relative flex flex-col items-center gap-0.5 p-1 rounded-md border transition-all cursor-grab active:cursor-grabbing ${r ? `border-destructive/70 bg-destructive/10` : n ? `border-primary/60 bg-primary/10` : `border-border/50 hover:border-primary/50 hover:bg-accent/30`}`,
      title: e.description || e.asset_name,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `w-full aspect-[4/3] rounded bg-muted/30 overflow-hidden flex items-center justify-center relative`,
          children: [
            (0, Y.jsx)(Bi, {
              sessionDir: t,
              assetId: d,
              thumbnailPath: e.thumbnail_path,
              thumbnailVersion: e.thumbnail_version,
              conceptArtPath: e.concept_art_path,
              modelPath: e.model_3d_path,
              size: 96,
              fallback: (0, Y.jsx)(Rn, {
                className: `w-4 h-4 text-muted-foreground/40`,
              }),
            }),
            (0, Y.jsx)(`span`, {
              className: `absolute top-0.5 right-0.5 px-1 py-px text-[8px] font-medium rounded bg-black/50 text-white/70`,
              children: m,
            }),
            !r &&
              !i &&
              (0, Y.jsx)(`span`, {
                role: `button`,
                tabIndex: -1,
                "aria-label": `Delete ${e.asset_name}`,
                title: `Delete "${e.asset_name}" from the project`,
                onPointerDown: (e) => e.stopPropagation(),
                onClick: (e) => {
                  (e.stopPropagation(), s());
                },
                className: `absolute top-0.5 left-0.5 p-0.5 rounded bg-black/60 text-white/80 hover:text-destructive opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity`,
                children: (0, Y.jsx)(N, { className: `w-2.5 h-2.5` }),
              }),
          ],
        }),
        r
          ? (0, Y.jsxs)(`div`, {
              className: `w-full flex flex-col items-center gap-0.5`,
              children: [
                a > 0 &&
                  (0, Y.jsxs)(`span`, {
                    className: `text-[8px] text-amber-400 leading-tight text-center`,
                    children: [
                      `Used by `,
                      a,
                      ` object`,
                      a === 1 ? `` : `s`,
                      ` here`,
                    ],
                  }),
                (0, Y.jsxs)(`div`, {
                  className: `flex items-center gap-0.5 w-full`,
                  children: [
                    (0, Y.jsx)(`span`, {
                      role: `button`,
                      tabIndex: -1,
                      onPointerDown: (e) => e.stopPropagation(),
                      onClick: (e) => {
                        (e.stopPropagation(), i || c());
                      },
                      className: `flex-1 text-center px-1 py-0.5 text-[9px] rounded bg-destructive/80 text-destructive-foreground ${i ? `opacity-60` : `hover:bg-destructive`}`,
                      children: i ? `…` : `Delete`,
                    }),
                    (0, Y.jsx)(`span`, {
                      role: `button`,
                      tabIndex: -1,
                      onPointerDown: (e) => e.stopPropagation(),
                      onClick: (e) => {
                        (e.stopPropagation(), l());
                      },
                      className: `px-1 py-0.5 text-[9px] rounded text-muted-foreground hover:text-foreground`,
                      children: `Cancel`,
                    }),
                  ],
                }),
              ],
            })
          : (0, Y.jsx)(`span`, {
              className: `text-[9px] text-muted-foreground truncate w-full text-center leading-tight`,
              children: e.asset_name,
            }),
        (0, Y.jsx)(`span`, {
          className: `absolute inset-0 rounded-md border-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`,
        }),
      ],
    });
  },
  mS = 88,
  hS = ({
    material: e,
    isActive: t,
    usedBySelection: n,
    canAssign: r,
    changeVersion: i,
    onOpen: a,
    onDuplicate: o,
    onAssign: s,
  }) => {
    let c = nS(e),
      l = (0, J.useRef)(null),
      d = (0, J.useRef)(null),
      [f, p] = (0, J.useState)(!1),
      [m, h] = (0, J.useState)(!1);
    (0, J.useEffect)(() => {
      let e = l.current;
      if (!e || f) return;
      let t = new IntersectionObserver(
        (e) => {
          e.some((e) => e.isIntersecting) && (p(!0), t.disconnect());
        },
        { rootMargin: `120px` },
      );
      return (t.observe(e), () => t.disconnect());
    }, [f]);
    let g = t ? i : 0;
    (0, J.useEffect)(() => {
      !f || !d.current || h(Li(e, d.current, mS));
    }, [f, e, e.version, g]);
    let { dragProps: v } = u({
      kind: `material`,
      payload: { materialId: e.uuid },
      preview: (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-1.5 rounded-md border border-purple-500/40 bg-[#1a1d2e]/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
        children: [
          (0, Y.jsx)(`span`, {
            className: `w-3 h-3 rounded flex-shrink-0 border border-black/20`,
            style: { backgroundColor: c },
          }),
          (0, Y.jsx)(`span`, {
            className: `truncate max-w-[160px]`,
            children: e.name || e.type,
          }),
        ],
      }),
    });
    return (0, Y.jsxs)(`div`, {
      ref: l,
      "data-material-uuid": e.uuid,
      onPointerDown: v.onPointerDown,
      draggable: v.draggable,
      style: v.style,
      onClick: () => a(e.uuid),
      className: `group relative flex flex-col gap-0.5 p-1 rounded-md border cursor-pointer transition-colors ${t ? `border-primary/60 bg-primary/10` : n ? `border-emerald-400/70 bg-emerald-400/10` : `border-border/40 hover:border-primary/50 hover:bg-accent/30`}`,
      title: n
        ? `${e.type} — used by the selected object. Click to edit.`
        : `${e.type} — click to edit, drag onto an object to assign`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `w-full aspect-square rounded overflow-hidden flex items-center justify-center`,
          style: { backgroundColor: m ? void 0 : c },
          children: (0, Y.jsx)(`canvas`, {
            ref: d,
            width: mS * 2,
            height: mS * 2,
            className: `w-full h-full`,
          }),
        }),
        (0, Y.jsx)(`span`, {
          className: `text-[9px] text-foreground truncate leading-tight`,
          title: e.name || e.type,
          children: e.name || e.type,
        }),
        (0, Y.jsx)(`span`, {
          className: `text-[8px] text-muted-foreground/60 truncate leading-tight`,
          children: e.type.replace(`Material`, ``),
        }),
        (0, Y.jsxs)(`div`, {
          className: `absolute top-1 right-1 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity`,
          children: [
            r &&
              (0, Y.jsx)(`button`, {
                onClick: (t) => {
                  (t.stopPropagation(), s(e.uuid));
                },
                className: `p-0.5 rounded bg-black/60 text-white/80 hover:text-white`,
                title: `Apply to the selected object`,
                children: (0, Y.jsx)(Un, { className: `w-2.5 h-2.5` }),
              }),
            (0, Y.jsx)(`button`, {
              onClick: (t) => {
                (t.stopPropagation(), a(e.uuid));
              },
              className: `p-0.5 rounded bg-black/60 text-white/80 hover:text-white`,
              title: `Edit material`,
              children: (0, Y.jsx)(ne, { className: `w-2.5 h-2.5` }),
            }),
            (0, Y.jsx)(`button`, {
              onClick: (t) => {
                (t.stopPropagation(), o(e.uuid));
              },
              className: `p-0.5 rounded bg-black/60 text-white/80 hover:text-white`,
              title: `Duplicate material`,
              children: (0, Y.jsx)(_, { className: `w-2.5 h-2.5` }),
            }),
          ],
        }),
      ],
    });
  },
  gS = () => {
    let e = X((e) => e.saveState),
      t = X((e) => e.saveError);
    return e === `error`
      ? (0, Y.jsxs)(`div`, {
          className: `flex items-start gap-1.5 border-b border-destructive/50 bg-destructive/10 px-2 py-1 text-[10px] text-destructive`,
          title: t || void 0,
          children: [
            (0, Y.jsx)(Tn, { className: `mt-px h-3 w-3 flex-shrink-0` }),
            (0, Y.jsxs)(`span`, {
              className: `leading-tight`,
              children: [
                `Not saved — retrying. Keep this tab open.`,
                t
                  ? (0, Y.jsx)(`span`, {
                      className: `block opacity-80 truncate`,
                      children: t,
                    })
                  : null,
              ],
            }),
          ],
        })
      : null;
  },
  _S = () => {
    let e = X((e) => e.saveState),
      t = X((e) => e.saveError),
      n = X((e) => e.lastSavedAt);
    return e === `error`
      ? (0, Y.jsxs)(`div`, {
          className: `mx-2 mb-1 flex items-start gap-1.5 rounded border border-destructive/50 bg-destructive/10 px-2 py-1 text-[10px] text-destructive`,
          title: t || void 0,
          children: [
            (0, Y.jsx)(Tn, { className: `mt-px h-3 w-3 flex-shrink-0` }),
            (0, Y.jsxs)(`span`, {
              className: `leading-tight`,
              children: [
                `Not saved — retrying. Keep this tab open.`,
                t
                  ? (0, Y.jsx)(`span`, {
                      className: `block opacity-80 truncate`,
                      children: t,
                    })
                  : null,
              ],
            }),
          ],
        })
      : e === `saving`
        ? (0, Y.jsxs)(`div`, {
            className: `mx-2 mb-1 flex items-center gap-1.5 px-2 text-[10px] text-muted-foreground`,
            children: [
              (0, Y.jsx)(b, { className: `h-3 w-3 animate-spin` }),
              ` Saving…`,
            ],
          })
        : n
          ? (0, Y.jsxs)(`div`, {
              className: `mx-2 mb-1 px-2 text-[10px] text-muted-foreground`,
              children: [`Saved `, new Date(n).toLocaleTimeString()],
            })
          : null;
  },
  vS = ({ sessionDir: e, sceneName: t, onRestore: n }) => {
    let [r, i] = (0, J.useState)(!1),
      [a, o] = (0, J.useState)([]),
      [s, c] = (0, J.useState)(!1),
      [u, d] = (0, J.useState)(null),
      [f, p] = (0, J.useState)(null),
      m = X((e) => e.lastSavedAt),
      h = (0, J.useCallback)(async () => {
        (c(!0), d(null));
        try {
          let n = await j.getSceneHistory(e, t);
          n.success
            ? o(n.revisions || [])
            : d(n.error || `Could not load history`);
        } catch {
          d(`Could not load history`);
        } finally {
          c(!1);
        }
      }, [e, t]);
    return (
      (0, J.useEffect)(() => {
        r && h();
      }, [r, h, m]),
      (0, Y.jsxs)(`div`, {
        className: `px-2 pb-1.5`,
        children: [
          (0, Y.jsxs)(`button`, {
            onClick: () => i((e) => !e),
            className: `flex w-full items-center gap-1 px-2 py-1 text-[10px] text-muted-foreground hover:text-foreground`,
            children: [
              r
                ? (0, Y.jsx)(F, { className: `h-3 w-3` })
                : (0, Y.jsx)(l, { className: `h-3 w-3` }),
              (0, Y.jsx)(An, { className: `h-3 w-3` }),
              (0, Y.jsx)(`span`, { children: `Version history` }),
            ],
          }),
          r &&
            (0, Y.jsxs)(`div`, {
              className: `space-y-0.5 pl-4`,
              children: [
                s &&
                  (0, Y.jsx)(`div`, {
                    className: `px-1 py-1 text-[10px] text-muted-foreground`,
                    children: `Loading…`,
                  }),
                u &&
                  (0, Y.jsx)(`div`, {
                    className: `px-1 py-1 text-[10px] text-destructive`,
                    children: u,
                  }),
                !s &&
                  !u &&
                  a.length === 0 &&
                  (0, Y.jsx)(`div`, {
                    className: `px-1 py-1 text-[10px] text-muted-foreground`,
                    children: `No earlier versions yet`,
                  }),
                a.map((e) =>
                  (0, Y.jsxs)(
                    `div`,
                    {
                      className: `flex items-center gap-1.5 px-1 py-0.5`,
                      children: [
                        (0, Y.jsxs)(`span`, {
                          className: `flex-1 truncate text-[10px] text-muted-foreground`,
                          children: [
                            e.created_at
                              ? new Date(e.created_at).toLocaleString()
                              : e.id,
                            e.is_original &&
                              (0, Y.jsx)(`span`, {
                                className: `ml-1 rounded bg-primary/15 px-1 text-[9px] text-foreground`,
                                children: `original`,
                              }),
                          ],
                        }),
                        (0, Y.jsx)(`button`, {
                          disabled: f !== null,
                          onClick: async () => {
                            p(e.id);
                            try {
                              await n(e.id);
                            } finally {
                              p(null);
                            }
                          },
                          className: `rounded px-1 py-0.5 text-[10px] text-muted-foreground hover:bg-accent/50 hover:text-foreground disabled:opacity-50`,
                          title: `Roll the scene back to this version (the current one is archived first)`,
                          children: f === e.id ? `…` : `Restore`,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
        ],
      })
    );
  },
  yS = ({
    scenes: e,
    activeSceneName: t,
    onSelectScene: n,
    onNewScene: r,
    onDeleteScene: i,
    onRenameScene: a,
    onRestoreScene: s,
    sceneRef: c,
    onAddObject: u,
    onDeleteObjects: f,
    onDuplicateObjects: p,
    onReparentObject: m,
    onAssignMaterial: y,
    onOpenMaterial: x,
    onCreateMaterial: S,
    onDuplicateMaterial: C,
    sessionDir: w,
  }) => {
    let [T, E] = (0, J.useState)(`scene`),
      [D, O] = (0, J.useState)(null),
      [k, j] = (0, J.useState)(null),
      [P, L] = (0, J.useState)(null),
      [R, re] = (0, J.useState)(``),
      ie = (0, J.useRef)(!1),
      z = (0, J.useRef)(null),
      [ae, oe] = (0, J.useState)(``),
      [se, ce] = (0, J.useState)(`assets`),
      [le, ue] = (0, J.useState)(new Set()),
      [de, fe] = (0, J.useState)(!1),
      [pe, me] = (0, J.useState)(!1),
      [he, ge] = (0, J.useState)([]),
      [B, _e] = (0, J.useState)(!1),
      [ve, ye] = (0, J.useState)(null),
      [be, xe] = (0, J.useState)(null),
      [Se, Ce] = (0, J.useState)(null),
      [we, Te] = (0, J.useState)(null),
      [Ee, De] = (0, J.useState)(null),
      Oe = X((e) => e.selectedObjectUuids),
      ke = X(to),
      Ae = X((e) => e.setSelectedObjectUuid),
      V = X((e) => e.addSelectedObjectUuid),
      je = X((e) => e.toggleSelectedObjectUuid),
      Me = X((e) => e.sceneGraphVersion),
      Ne = X((e) => e.objectChangeVersion),
      Pe = X((e) => e.activeMaterialUuid),
      Fe = (0, J.useMemo)(
        () => (c.current ? tS(c.current) : { materials: [], textures: [] }),
        [c, Me, Ne],
      ),
      Ie = (0, J.useMemo)(() => (c.current ? sS(c.current) : []), [c, Me]),
      Le = (0, J.useMemo)(() => uS(Ie, ae), [Ie, ae]),
      Re = ae.trim().length > 0,
      { dropProps: ze, isOver: Be } = h({
        accept: `scene-node`,
        onDrop: (e) => {
          let t = e.payload.uuid;
          t && m(t, null);
        },
      });
    ((0, J.useEffect)(() => {
      if (!w) return;
      let e = !1;
      return (
        (async () => {
          (_e(!0), ye(null));
          try {
            let t = await A.getAssets(w);
            if (e) return;
            if (t.success) {
              let e = t.assets.filter(
                (e) =>
                  e.model_3d_path ||
                  e.splat_path ||
                  e.concept_art_path ||
                  e.type === `3d`,
              );
              ge(e);
            } else (ye(`Failed to load assets`), ge([]));
          } catch {
            e || (ye(`Failed to load assets`), ge([]));
          } finally {
            e || _e(!1);
          }
        })(),
        () => {
          e = !0;
        }
      );
    }, [w]),
      (0, J.useEffect)(() => {
        let e = c.current;
        if (!ke || !e) return;
        let t = null;
        if (
          (e.traverse((e) => {
            e.uuid === ke && (t = e);
          }),
          !t)
        )
          return;
        let n = [],
          r = t.parent;
        for (; r && r !== e;) (n.push(r.uuid), (r = r.parent));
        n.length &&
          ue((e) => {
            if (n.every((t) => e.has(t))) return e;
            let t = new Set(e);
            for (let e of n) t.add(e);
            return t;
          });
      }, [ke, c, Me]),
      (0, J.useEffect)(() => {
        !ke ||
          T !== `hierarchy` ||
          document
            .querySelector(`[data-node-uuid="${ke}"]`)
            ?.scrollIntoView({ block: `nearest` });
      }, [ke, le, T]));
    let H = (0, J.useMemo)(() => new Set(Oe), [Oe]),
      Ve = (0, J.useCallback)(
        (e, t) => {
          t === `toggle` ? je(e) : t === `add` ? V(e) : Ae(e);
        },
        [Ae, V, je],
      ),
      He = (0, J.useCallback)((e) => {
        ue((t) => {
          let n = new Set(t);
          return (n.has(e) ? n.delete(e) : n.add(e), n);
        });
      }, []),
      U = (0, J.useCallback)(
        (e, t) => {
          let n = e();
          n.computeBoundingBox();
          let r = n.boundingBox.min;
          n.translate(-r.x, -r.y, -r.z);
          let i = new G(n, aS());
          ((i.userData.pivot = _g),
            (i.name = t),
            (i.castShadow = !0),
            (i.receiveShadow = !0),
            u(i),
            fe(!1));
        },
        [u],
      ),
      Ue = (0, J.useCallback)(
        (e) => {
          (u(e()), me(!1));
        },
        [u],
      ),
      We = (0, J.useCallback)(() => {
        let e = new nt();
        ((e.name = `Group`), u(e));
      }, [u]);
    (0, J.useEffect)(() => {
      (T !== `library` || se !== `assets`) && Ce(null);
    }, [T, se]);
    let Ge = (0, J.useMemo)(() => {
        let e = new Set(),
          t = c.current;
        if (!t || Oe.length === 0 || T !== `library` || se !== `materials`)
          return e;
        let n = new Set(Oe),
          r = [];
        t.traverse((e) => {
          n.has(e.uuid) && r.push(e);
        });
        for (let n of r) {
          let r = K_(t, n);
          (r?.materialUuid && e.add(r.materialUuid),
            n.traverse((t) => {
              if (t.userData?.editorOnly) return;
              let n = t.material;
              if (n)
                for (let t of Array.isArray(n) ? n : [n]) t && e.add(t.uuid);
            }));
        }
        return e;
      }, [c, Oe, Ne, Me, T, se]),
      Ke = (0, J.useMemo)(
        () => Fe.materials.find((e) => Ge.has(e.uuid))?.uuid ?? null,
        [Fe.materials, Ge],
      ),
      W = (0, J.useRef)(null);
    (0, J.useEffect)(() => {
      if (T !== `library` || se !== `materials`) {
        W.current = null;
        return;
      }
      !Ke ||
        Ke === W.current ||
        ((W.current = Ke),
        document
          .querySelector(`[data-material-uuid="${Ke}"]`)
          ?.scrollIntoView({ block: `center` }));
    }, [Ke, T, se]);
    let qe = (0, J.useMemo)(() => {
        let e = new Map(),
          t = c.current;
        return (
          !t ||
            T !== `library` ||
            se !== `assets` ||
            t.traverse((t) => {
              let n = t.userData?.assetId;
              typeof n == `string` &&
                n &&
                t.userData?.modelPath &&
                e.set(n, (e.get(n) ?? 0) + 1);
            }),
          e
        );
      }, [c, Me, T, se]),
      Je = (0, J.useCallback)(
        async (e) => {
          let t = e.id || e.asset_name;
          (Te(t), De(null));
          try {
            let n = await A.deleteAsset(w, t);
            n.success
              ? (ge((e) => e.filter((e) => (e.id || e.asset_name) !== t)),
                xe((e) => (e === t ? null : e)),
                o.success(`Deleted "${e.asset_name}"`))
              : (De(
                  `Could not delete "${e.asset_name}" — ${n.error || `the server rejected it`}`,
                ),
                o.error(n.error || `Could not delete that asset`));
          } catch {
            (De(`Could not delete "${e.asset_name}" — network error`),
              o.error(`Could not delete that asset`));
          } finally {
            (Te(null), Ce(null));
          }
        },
        [w],
      );
    return (0, Y.jsxs)(`div`, {
      className: `h-full flex flex-col bg-card min-h-0`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `flex items-center border-b border-border px-1 flex-shrink-0`,
          children: [
            { id: `scene`, label: `Level` },
            { id: `hierarchy`, label: `Hierarchy` },
            { id: `library`, label: `Library` },
          ].map(({ id: e, label: t }) =>
            (0, Y.jsx)(
              `button`,
              {
                onClick: () => E(e),
                className: `px-3 py-2 text-[11px] font-medium transition-colors ${T === e ? `text-foreground border-b-2 border-primary` : `text-muted-foreground hover:text-foreground`}`,
                children: t,
              },
              e,
            ),
          ),
        }),
        (0, Y.jsx)(gS, {}),
        (0, Y.jsxs)(`div`, {
          className: `flex-1 min-h-0 flex flex-col`,
          children: [
            T === `scene` &&
              (0, Y.jsxs)(`div`, {
                className: `flex-1 min-h-0 flex flex-col`,
                children: [
                  (0, Y.jsx)(dS, { title: `Levels` }),
                  (0, Y.jsxs)(`div`, {
                    className: `flex-1 min-h-0 overflow-y-auto scrollbar-themed px-2 py-1.5 space-y-0.5`,
                    children: [
                      e.map((e) => {
                        let r = D === e.scene_name,
                          o = k === e.scene_name,
                          s = P === e.scene_name,
                          c = async () => {
                            if (!ie.current) {
                              ie.current = !0;
                              try {
                                (await a(e.scene_name, R))
                                  ? L(null)
                                  : z.current?.focus();
                              } finally {
                                ie.current = !1;
                              }
                            }
                          };
                        return (0, Y.jsxs)(
                          `div`,
                          {
                            className: `group w-full flex items-center gap-1 pr-1 rounded hover:bg-accent/50 ${t === e.scene_name ? `bg-primary/15 text-foreground` : `text-muted-foreground`}`,
                            children: [
                              s
                                ? (0, Y.jsx)(`input`, {
                                    autoFocus: !0,
                                    ref: z,
                                    value: R,
                                    "aria-label": `Rename ${e.scene_name}`,
                                    readOnly: ie.current,
                                    onChange: (e) => re(e.target.value),
                                    onKeyDown: (e) => {
                                      e.key === `Enter`
                                        ? (e.preventDefault(), c())
                                        : e.key === `Escape` &&
                                          (e.preventDefault(), L(null));
                                    },
                                    onBlur: () => {
                                      ie.current || L(null);
                                    },
                                    className: `flex-1 min-w-0 px-2 py-1 text-[11px] rounded bg-background border border-primary/60 text-foreground outline-none`,
                                  })
                                : (0, Y.jsxs)(`button`, {
                                    onClick: () => n(e.scene_name),
                                    disabled: o,
                                    className: `flex-1 min-w-0 flex items-center gap-1.5 px-2 py-1 text-[11px] text-left disabled:opacity-50`,
                                    children: [
                                      (0, Y.jsx)(`span`, {
                                        className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${t === e.scene_name ? `bg-primary` : `bg-transparent`}`,
                                      }),
                                      (0, Y.jsx)(`span`, {
                                        className: `truncate`,
                                        children: e.scene_name,
                                      }),
                                    ],
                                  }),
                              s
                                ? null
                                : r
                                  ? (0, Y.jsxs)(Y.Fragment, {
                                      children: [
                                        (0, Y.jsx)(`button`, {
                                          onClick: async () => {
                                            j(e.scene_name);
                                            try {
                                              await i(e.scene_name);
                                            } finally {
                                              (j(null), O(null));
                                            }
                                          },
                                          disabled: o,
                                          className: `px-1.5 py-0.5 text-[10px] rounded bg-destructive/80 text-destructive-foreground hover:bg-destructive disabled:opacity-50`,
                                          title: `Delete this level permanently from the session`,
                                          children: o ? `…` : `Delete`,
                                        }),
                                        (0, Y.jsx)(`button`, {
                                          onClick: () => O(null),
                                          disabled: o,
                                          className: `px-1 py-0.5 text-[10px] rounded text-muted-foreground hover:text-foreground disabled:opacity-50`,
                                          children: `Cancel`,
                                        }),
                                      ],
                                    })
                                  : (0, Y.jsxs)(Y.Fragment, {
                                      children: [
                                        (0, Y.jsx)(`button`, {
                                          onClick: () => {
                                            (L(e.scene_name), re(e.scene_name));
                                          },
                                          className: `p-1 rounded opacity-0 group-hover:opacity-100 focus:opacity-100 text-muted-foreground hover:text-foreground`,
                                          title: `Rename "${e.scene_name}"`,
                                          "aria-label": `Rename ${e.scene_name}`,
                                          children: (0, Y.jsx)(ne, {
                                            size: 12,
                                          }),
                                        }),
                                        (0, Y.jsx)(`button`, {
                                          onClick: () => O(e.scene_name),
                                          className: `p-1 rounded opacity-0 group-hover:opacity-100 focus:opacity-100 text-muted-foreground hover:text-destructive`,
                                          title: `Delete "${e.scene_name}"`,
                                          "aria-label": `Delete ${e.scene_name}`,
                                          children: (0, Y.jsx)(N, { size: 12 }),
                                        }),
                                      ],
                                    }),
                            ],
                          },
                          e.asset_id ?? e.name,
                        );
                      }),
                      (0, Y.jsxs)(`button`, {
                        onClick: r,
                        className: `w-full flex items-center gap-1.5 px-2 py-1 text-[11px] rounded text-muted-foreground hover:bg-accent/50 hover:text-foreground`,
                        children: [
                          (0, Y.jsx)(ee, {
                            className: `w-3 h-3 flex-shrink-0`,
                          }),
                          (0, Y.jsx)(`span`, { children: `New Level` }),
                        ],
                      }),
                    ],
                  }),
                  t &&
                    (0, Y.jsxs)(Y.Fragment, {
                      children: [
                        (0, Y.jsx)(_S, {}),
                        (0, Y.jsx)(vS, {
                          sessionDir: w,
                          sceneName: t,
                          onRestore: s,
                        }),
                      ],
                    }),
                ],
              }),
            T === `hierarchy` &&
              (0, Y.jsxs)(`div`, {
                className: `flex-1 min-h-0 flex flex-col`,
                children: [
                  (0, Y.jsx)(dS, {
                    title: `Hierarchy`,
                    action:
                      Oe.length > 0
                        ? (0, Y.jsxs)(`div`, {
                            className: `flex items-center -my-1`,
                            children: [
                              Oe.length > 1 &&
                                (0, Y.jsx)(`span`, {
                                  className: `px-1 text-[10px] text-muted-foreground tabular-nums`,
                                  children: Oe.length,
                                }),
                              (0, Y.jsx)(`button`, {
                                onClick: () => p(Oe),
                                className: `px-1.5 py-1.5 text-muted-foreground hover:text-foreground transition-colors`,
                                title: `Duplicate selection (Ctrl/Cmd+D)`,
                                children: (0, Y.jsx)(_, {
                                  className: `w-3 h-3`,
                                }),
                              }),
                              (0, Y.jsx)(`button`, {
                                onClick: () => f(Oe),
                                className: `px-1.5 py-1.5 text-muted-foreground hover:text-destructive transition-colors`,
                                title: `Delete selection`,
                                children: (0, Y.jsx)(N, {
                                  className: `w-3 h-3`,
                                }),
                              }),
                            ],
                          })
                        : void 0,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `flex-1 min-h-0 flex flex-col`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `px-2 py-1.5 border-b border-border/40 flex-shrink-0`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(M, {
                              className: `absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground/70`,
                            }),
                            (0, Y.jsx)(`input`, {
                              type: `search`,
                              value: ae,
                              onChange: (e) => oe(e.target.value),
                              placeholder: `Search objects`,
                              className: `h-7 w-full rounded-md border border-border/60 bg-muted/20 pl-7 pr-7 text-[11px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40`,
                            }),
                            Re &&
                              (0, Y.jsx)(`button`, {
                                type: `button`,
                                onClick: () => oe(``),
                                className: `absolute right-1.5 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded text-muted-foreground hover:bg-accent hover:text-foreground`,
                                title: `Clear search`,
                                "aria-label": `Clear hierarchy search`,
                                children: (0, Y.jsx)(te, {
                                  className: `h-3 w-3`,
                                }),
                              }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)(`div`, {
                        ref: ze.ref,
                        "data-dnd-zone": ze[`data-dnd-zone`],
                        className: `flex-1 min-h-0 overflow-y-auto scrollbar-themed px-1 py-1 space-y-0.5 ${Be ? `ring-1 ring-inset ring-primary/50 rounded` : ``}`,
                        children:
                          Ie.length === 0
                            ? (0, Y.jsx)(`div`, {
                                className: `px-3 py-3 text-[10px] text-muted-foreground text-center`,
                                children: `No objects in scene`,
                              })
                            : Re && Le.length === 0
                              ? (0, Y.jsx)(`div`, {
                                  className: `px-3 py-3 text-[10px] text-muted-foreground text-center`,
                                  children: `No matching objects`,
                                })
                              : Le.map((e) =>
                                  (0, Y.jsx)(
                                    fS,
                                    {
                                      node: e,
                                      depth: 0,
                                      selectedUuids: H,
                                      primaryUuid: ke,
                                      onSelect: Ve,
                                      expandedGroups: le,
                                      onToggleGroup: He,
                                      onReparentObject: m,
                                      onAssignMaterial: y,
                                      forceExpanded: Re,
                                    },
                                    e.object.uuid,
                                  ),
                                ),
                      }),
                    ],
                  }),
                ],
              }),
            T === `library` &&
              (0, Y.jsxs)(`div`, {
                className: `flex-1 min-h-0 flex flex-col`,
                children: [
                  (0, Y.jsx)(dS, { title: `Library` }),
                  (0, Y.jsx)(`div`, {
                    className: `flex-shrink-0 px-2 pt-1.5 pb-1 border-b border-border/40`,
                    children: (0, Y.jsx)(`div`, {
                      className: `flex items-center gap-0.5 p-0.5 rounded-md bg-muted/20`,
                      children: [
                        { id: `assets`, label: `Assets`, Icon: Rn },
                        { id: `materials`, label: `Materials`, Icon: g },
                        { id: `textures`, label: `Textures`, Icon: v },
                        { id: `add`, label: `Add`, Icon: ee },
                      ].map(({ id: e, label: t, Icon: n }) =>
                        (0, Y.jsx)(
                          `button`,
                          {
                            onClick: () => ce(e),
                            className: `flex-1 flex items-center justify-center gap-1 px-1.5 py-1 text-[10px] rounded transition-colors ${se === e ? `bg-primary/20 text-foreground` : `text-muted-foreground hover:text-foreground`}`,
                            title: t,
                            children: (0, Y.jsx)(n, { className: `w-3 h-3` }),
                          },
                          e,
                        ),
                      ),
                    }),
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `flex-1 min-h-0 overflow-y-auto scrollbar-themed px-2 py-1.5`,
                    children: [
                      se === `add` &&
                        (0, Y.jsxs)(`div`, {
                          className: `space-y-0.5`,
                          children: [
                            (0, Y.jsxs)(`div`, {
                              children: [
                                (0, Y.jsxs)(`button`, {
                                  onClick: () => fe(!de),
                                  className: `w-full flex items-center justify-between px-2 py-1.5 text-[11px] rounded text-muted-foreground hover:bg-accent/50 hover:text-foreground`,
                                  children: [
                                    (0, Y.jsxs)(`span`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, Y.jsx)(Sn, {
                                          className: `w-3 h-3`,
                                        }),
                                        `Primitives`,
                                      ],
                                    }),
                                    de
                                      ? (0, Y.jsx)(F, { className: `w-3 h-3` })
                                      : (0, Y.jsx)(l, { className: `w-3 h-3` }),
                                  ],
                                }),
                                de &&
                                  (0, Y.jsx)(`div`, {
                                    className: `ml-3 pl-2 border-l border-border space-y-0.5 py-0.5`,
                                    children: rS.map((e) =>
                                      (0, Y.jsxs)(
                                        `button`,
                                        {
                                          onClick: () => U(e.factory, e.label),
                                          className: `w-full flex items-center gap-1.5 px-2 py-1 text-[11px] rounded text-muted-foreground hover:bg-accent/50 hover:text-foreground`,
                                          children: [
                                            (0, Y.jsx)(Sn, {
                                              className: `w-3 h-3 flex-shrink-0`,
                                            }),
                                            (0, Y.jsx)(`span`, {
                                              children: e.label,
                                            }),
                                          ],
                                        },
                                        e.label,
                                      ),
                                    ),
                                  }),
                              ],
                            }),
                            (0, Y.jsxs)(`div`, {
                              children: [
                                (0, Y.jsxs)(`button`, {
                                  onClick: () => me(!pe),
                                  className: `w-full flex items-center justify-between px-2 py-1.5 text-[11px] rounded text-muted-foreground hover:bg-accent/50 hover:text-foreground`,
                                  children: [
                                    (0, Y.jsxs)(`span`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, Y.jsx)(d, { className: `w-3 h-3` }),
                                        `Lights`,
                                      ],
                                    }),
                                    pe
                                      ? (0, Y.jsx)(F, { className: `w-3 h-3` })
                                      : (0, Y.jsx)(l, { className: `w-3 h-3` }),
                                  ],
                                }),
                                pe &&
                                  (0, Y.jsx)(`div`, {
                                    className: `ml-3 pl-2 border-l border-border space-y-0.5 py-0.5`,
                                    children: iS.map((e) =>
                                      (0, Y.jsxs)(
                                        `button`,
                                        {
                                          onClick: () => Ue(e.factory),
                                          className: `w-full flex items-center gap-1.5 px-2 py-1 text-[11px] rounded text-muted-foreground hover:bg-accent/50 hover:text-foreground`,
                                          children: [
                                            (0, Y.jsx)(Nn, {
                                              className: `w-3 h-3 flex-shrink-0`,
                                            }),
                                            (0, Y.jsx)(`span`, {
                                              children: e.label,
                                            }),
                                          ],
                                        },
                                        e.label,
                                      ),
                                    ),
                                  }),
                              ],
                            }),
                            (0, Y.jsxs)(`button`, {
                              onClick: We,
                              className: `w-full flex items-center gap-1.5 px-2 py-1.5 text-[11px] rounded text-muted-foreground hover:bg-accent/50 hover:text-foreground`,
                              children: [
                                (0, Y.jsx)(I, { className: `w-3 h-3` }),
                                `Empty / Group`,
                              ],
                            }),
                          ],
                        }),
                      se === `assets` &&
                        (0, Y.jsxs)(Y.Fragment, {
                          children: [
                            B &&
                              (0, Y.jsx)(`div`, {
                                className: `flex items-center justify-center py-3`,
                                children: (0, Y.jsx)(b, {
                                  className: `w-4 h-4 text-muted-foreground animate-spin`,
                                }),
                              }),
                            ve &&
                              (0, Y.jsxs)(`div`, {
                                className: `flex flex-col items-center gap-1 py-3 text-center`,
                                children: [
                                  (0, Y.jsx)(Tn, {
                                    className: `w-4 h-4 text-destructive/70`,
                                  }),
                                  (0, Y.jsx)(`p`, {
                                    className: `text-[10px] text-destructive/70`,
                                    children: ve,
                                  }),
                                ],
                              }),
                            !B &&
                              !ve &&
                              he.length === 0 &&
                              (0, Y.jsxs)(`div`, {
                                className: `flex flex-col items-center gap-2 py-3 text-center`,
                                children: [
                                  (0, Y.jsx)(Rn, {
                                    className: `w-5 h-5 text-muted-foreground/50`,
                                  }),
                                  (0, Y.jsx)(`p`, {
                                    className: `text-[10px] text-muted-foreground`,
                                    children: `No assets available`,
                                  }),
                                ],
                              }),
                            Ee &&
                              (0, Y.jsxs)(`div`, {
                                className: `mb-1.5 flex items-start gap-1.5 rounded border border-destructive/50 bg-destructive/10 px-2 py-1 text-[10px] text-destructive`,
                                children: [
                                  (0, Y.jsx)(Tn, {
                                    className: `mt-px h-3 w-3 flex-shrink-0`,
                                  }),
                                  (0, Y.jsx)(`span`, {
                                    className: `leading-tight`,
                                    children: Ee,
                                  }),
                                  (0, Y.jsx)(`button`, {
                                    onClick: () => De(null),
                                    className: `ml-auto text-destructive/70 hover:text-destructive`,
                                    "aria-label": `Dismiss delete error`,
                                    children: (0, Y.jsx)(te, {
                                      className: `h-3 w-3`,
                                    }),
                                  }),
                                ],
                              }),
                            !B &&
                              he.length > 0 &&
                              (0, Y.jsx)(`div`, {
                                className: `grid gap-1.5`,
                                style: {
                                  gridTemplateColumns: `repeat(auto-fill, minmax(140px, 1fr))`,
                                },
                                children: he.map((e) => {
                                  let t = e.id || e.asset_name;
                                  return (0, Y.jsx)(
                                    pS,
                                    {
                                      asset: e,
                                      sessionDir: w,
                                      selected: be === t,
                                      armed: Se === t,
                                      busy: we === t,
                                      placedCount: qe.get(t) ?? 0,
                                      onSelect: () => {
                                        (xe(t), Ce(null));
                                      },
                                      onArmDelete: () => {
                                        (xe(t), Ce(t));
                                      },
                                      onConfirmDelete: () => {
                                        Je(e);
                                      },
                                      onCancelDelete: () => Ce(null),
                                    },
                                    t,
                                  );
                                }),
                              }),
                          ],
                        }),
                      se === `materials` &&
                        (0, Y.jsxs)(`div`, {
                          className: `space-y-1`,
                          children: [
                            (0, Y.jsxs)(`button`, {
                              onClick: S,
                              className: `w-full flex items-center gap-1.5 px-2 py-1 mb-1 text-[10px] rounded border border-dashed border-border/60 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors`,
                              title: `Create a new material and assign it to the selected object`,
                              children: [
                                (0, Y.jsx)(ee, {
                                  className: `w-3 h-3 flex-shrink-0`,
                                }),
                                (0, Y.jsx)(`span`, {
                                  children: `New material`,
                                }),
                              ],
                            }),
                            Fe.materials.length === 0
                              ? (0, Y.jsxs)(`div`, {
                                  className: `flex flex-col items-center gap-2 py-3 text-center`,
                                  children: [
                                    (0, Y.jsx)(g, {
                                      className: `w-5 h-5 text-muted-foreground/50`,
                                    }),
                                    (0, Y.jsx)(`p`, {
                                      className: `text-[10px] text-muted-foreground`,
                                      children: `No materials in scene`,
                                    }),
                                  ],
                                })
                              : (0, Y.jsxs)(Y.Fragment, {
                                  children: [
                                    (0, Y.jsx)(`p`, {
                                      className: `text-[9px] text-muted-foreground/70 px-0.5 pb-0.5 leading-tight`,
                                      children: `Click to edit. Drag onto an object in the viewport to assign.`,
                                    }),
                                    (0, Y.jsx)(`div`, {
                                      className: `grid grid-cols-2 gap-1.5`,
                                      children: Fe.materials.map((e) =>
                                        (0, Y.jsx)(
                                          hS,
                                          {
                                            material: e,
                                            isActive: Pe === e.uuid,
                                            usedBySelection: Ge.has(e.uuid),
                                            canAssign: !!ke,
                                            changeVersion: Ne,
                                            onOpen: x,
                                            onDuplicate: C,
                                            onAssign: (e) => {
                                              ke && y(ke, e);
                                            },
                                          },
                                          e.uuid,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                          ],
                        }),
                      se === `textures` &&
                        (Fe.textures.length === 0
                          ? (0, Y.jsxs)(`div`, {
                              className: `flex flex-col items-center gap-2 py-3 text-center`,
                              children: [
                                (0, Y.jsx)(v, {
                                  className: `w-5 h-5 text-muted-foreground/50`,
                                }),
                                (0, Y.jsx)(`p`, {
                                  className: `text-[10px] text-muted-foreground`,
                                  children: `No textures in scene`,
                                }),
                              ],
                            })
                          : (0, Y.jsx)(`div`, {
                              className: `space-y-1`,
                              children: Fe.textures.map((e) =>
                                (0, Y.jsxs)(
                                  `div`,
                                  {
                                    className: `flex items-center gap-2 px-2 py-1 rounded border border-border/40`,
                                    title: e.name,
                                    children: [
                                      (0, Y.jsx)(v, {
                                        className: `w-3.5 h-3.5 text-muted-foreground flex-shrink-0`,
                                      }),
                                      (0, Y.jsx)(`span`, {
                                        className: `text-[10px] text-foreground truncate`,
                                        children: e.name,
                                      }),
                                    ],
                                  },
                                  e.uuid,
                                ),
                              ),
                            })),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  bS = ({ checked: e, onChange: t }) =>
    (0, Y.jsx)(`button`, {
      type: `button`,
      role: `switch`,
      "aria-checked": e,
      onClick: () => t(!e),
      className: `relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${e ? `bg-primary/60` : `bg-muted`}`,
      children: (0, Y.jsx)(`span`, {
        className: `inline-block h-3 w-3 rounded-full bg-foreground shadow-sm transition-transform ${e ? `translate-x-3.5` : `translate-x-0.5`}`,
      }),
    }),
  xS = [
    { id: `instance`, label: `This object` },
    { id: `family`, label: `All instances` },
  ],
  SS = `__default__`,
  CS = `__inherit__`;
