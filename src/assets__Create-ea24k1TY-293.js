// assets__Create-ea24k1TY 293 — classname
// Lines 103208-104084 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Pve({ sessionId: e, sessionDir: t, assets: n, isActive: r }) {
  let { portalTarget: i, requestedAsset: a, consumeRequestedAsset: o } = ie(),
    { gameDesignData: s } = Pc(),
    { toast: c } = u(),
    l = (0, X.useRef)(null),
    {
      selectedAssetId: d,
      selectedBone: f,
      selectedBoneName: p,
      jointNames: m,
      primitiveCount: h,
      vertexCount: g,
      brushMode: _,
      brushRadius: v,
      brushStrength: y,
      falloffKind: b,
      brushHardness: x,
      opacityCap: S,
      mirror: C,
      showOverlay: w,
      showTexture: T,
      showBones: E,
      selectedClipId: D,
      isPlaying: O,
      time: k,
      duration: j,
      playbackSpeed: M,
      saveStatus: P,
      saveMessage: I,
      versions: L,
      sessionGenerationId: R,
      externalChange: z,
      undoStack: B,
      redoStack: V,
      selectAsset: ee,
      selectBone: W,
      setBrushMode: G,
      setBrushRadius: te,
      setBrushStrength: K,
      setFalloffKind: ne,
      setBrushHardness: re,
      setOpacityCap: ae,
      setMirror: oe,
      setShowOverlay: se,
      setShowTexture: q,
      setShowBones: ce,
      selectClip: ue,
      setPlaybackSpeed: de,
    } = T9(),
    fe = (0, X.useRef)(c);
  fe.current = c;
  let pe = (0, X.useRef)(!0);
  (0, X.useEffect)(
    () => (
      (pe.current = !0),
      () => {
        pe.current = !1;
      }
    ),
    [],
  );
  let me = (0, X.useMemo)(
      () =>
        n.filter(
          (e) => e.asset_type === `character_3d` && !!e.rigged_model_path,
        ),
      [n],
    ),
    he = (0, X.useMemo)(
      () => me.find((e) => (e.id || e.asset_name) === d) ?? null,
      [me, d],
    ),
    ge = (0, X.useRef)(null);
  ge.current = he;
  let _e = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    _e.current = d;
  }, [d]),
    (0, X.useEffect)(() => {
      !d || he || ee(null);
    }, [d, he, ee]));
  let [ve, ye] = (0, X.useState)(null),
    [be, xe] = (0, X.useState)(null),
    Ce = (0, X.useRef)(null);
  Ce.current = ve;
  let we = (0, X.useCallback)(
    (e, n) => jr.getAssetUrl(t, e.rigged_model_path, { version: n }),
    [t],
  );
  if (he) {
    let e = he.id || he.asset_name;
    be !== e && (xe(e), ye(we(he, he.modified)));
  } else be !== null && (xe(null), ye(null));
  let [Te, Ee] = (0, X.useState)(null);
  (0, X.useEffect)(() => {
    if (r === !1 || me.length === 0) return;
    let e = o(`skin-weights`);
    if (!e || e.nonce === Te) return;
    Ee(e.nonce);
    let t = me.find(
      (t) => (t.id || t.asset_name) === e.assetId || t.asset_name === e.assetId,
    );
    if (t) {
      ee(t.id || t.asset_name);
      return;
    }
    fe.current({
      title: `${e.assetId} has no rig to paint`,
      description: `The Skin Weights editor opens rigged characters only.`,
    });
  }, [r, a, o, me, ee, Te]);
  let De = (0, X.useMemo)(() => {
      let e = s?.animation_plan;
      if (!e || !he) return [];
      let t = e.characters?.find(
        (e) =>
          e.asset_id === (he.id || he.asset_name) ||
          e.asset_name === he.asset_name,
      );
      if (!t) return [];
      let n = [];
      for (let e of t.animations || []) {
        let t = e.baked_animation_path || e.animation_path;
        t && n.push({ id: e.animation_id, name: e.name, path: t });
      }
      return n;
    }, [s, he]),
    Oe = (0, X.useMemo)(() => {
      let e = De.find((e) => e.id === D);
      return e ? jr.getAssetUrl(t, e.path) : null;
    }, [De, D, t]),
    ke = (0, X.useCallback)(async () => {
      let t = _e.current;
      if (!t) return;
      let n = await C9(e, t);
      !pe.current ||
        _e.current !== t ||
        (n.success &&
          T9.getState().setVersionState(n.current_version, n.versions));
    }, [e]),
    Ae = (0, X.useRef)(null),
    [je, Me] = (0, X.useState)(0),
    Ne = (0, X.useRef)(0);
  Ne.current = je;
  let Pe = (0, X.useRef)(0),
    Fe = (0, X.useCallback)(() => {
      Me((e) => e + 1);
    }, []),
    Ie = (0, X.useMemo)(
      () =>
        vve({
          save: yve,
          hasPending: (e) => Ae.current?.hasPending(e) ?? !1,
          owns: (e) => pe.current && _e.current === e,
          setStatus: (e, t) => T9.getState().setSaveStatus(e, t),
          setVersionState: (e, t) => T9.getState().setVersionState(e, t),
          onRefused: (e, t) => {
            !pe.current ||
              _e.current !== e ||
              (Pe.current = _ve(Pe.current, t.tick, t.baseline));
          },
          toast: (e, t) => fe.current({ title: e, description: t }),
          log: (e, t) => console.error(`[SkinWeights]`, e, t),
          isMounted: () => pe.current,
        }),
      [],
    );
  Ae.current = (0, X.useMemo)(() => i9(Ie), [Ie]);
  let Le = (0, X.useCallback)(
    (t, n, r) => {
      let i = gve({
        context: t,
        dirtyTick: Ne.current,
        savedTick: Pe.current,
        suppressed: r?.suppressed,
        primitiveCount: n.length,
      });
      if (i.kind === `skip`) return;
      if (i.kind === `error`) {
        (console.error(`[SkinWeights]`, i.message),
          pe.current &&
            (T9.getState().setSaveStatus(`error`, i.message),
            fe.current({
              title: `Skin weights were not saved`,
              description: i.message,
            })));
        return;
      }
      let { blob: a, meta: o } = hve(n, i.context.generationId),
        s = Pe.current;
      ((Pe.current = i.tick),
        Ae.current?.push(i.context.assetId, {
          sessionId: e,
          blob: a,
          meta: o,
          tick: i.tick,
          baseline: s,
        }));
    },
    [e],
  );
  (0, X.useEffect)(() => {
    if (!d || !R || je === Pe.current) return;
    let e = { assetId: d, generationId: R },
      t = setTimeout(() => {
        Le(e, l.current?.getPrimitives() ?? []);
      }, jve);
    return () => clearTimeout(t);
  }, [je, d, R, Le]);
  let Re = (0, X.useRef)(null),
    ze = (0, X.useCallback)(() => {
      Le(Re.current, l.current?.getPrimitives() ?? []);
    }, [Le]),
    Be = (0, X.useRef)(ze);
  ((Be.current = ze),
    (0, X.useLayoutEffect)(
      () => () => {
        Be.current();
      },
      [],
    ));
  let Ve = (0, X.useRef)(!1),
    He = (0, X.useCallback)(
      (e) => {
        let t = Ve.current;
        ((Ve.current = !1), Le(Re.current, e, { suppressed: t }));
      },
      [Le],
    );
  ((0, X.useEffect)(() => {
    Re.current = d && R ? { assetId: d, generationId: R } : null;
  }, [d, R]),
    (0, X.useEffect)(() => {
      let e = () => {
          document.visibilityState === `hidden` && ze();
        },
        t = () => ze();
      return (
        document.addEventListener(`visibilitychange`, e),
        window.addEventListener(`beforeunload`, t),
        () => {
          (document.removeEventListener(`visibilitychange`, e),
            window.removeEventListener(`beforeunload`, t));
        }
      );
    }, [ze]));
  let Ue = (0, X.useRef)(new Set());
  (0, X.useEffect)(() => {
    Ue.current = new Set();
  }, [d]);
  let We = (0, X.useCallback)(
      (e) => {
        let t = T9.getState(),
          n = S9();
        (Ue.current.add(n),
          t.setSessionGenerationId(n),
          t.setExternalChange(!1),
          t.setSaveStatus(`idle`, null),
          (Pe.current = Ne.current),
          ke());
      },
      [ke],
    ),
    Ge = (0, X.useCallback)(() => {
      let e = ge.current;
      if (!e?.rigged_model_path) return;
      ((Ve.current = !0),
        (Pe.current = Ne.current),
        T9.getState().clearHistory(),
        T9.getState().setExternalChange(!1));
      let t = we(e, e.modified);
      t === Ce.current ? l.current?.reload() : ye(t);
    }, [we]),
    [Ke, qe] = (0, X.useState)(null),
    Je = (0, X.useCallback)(
      async (n) => {
        let r = _e.current,
          i = ge.current;
        if (!r || !i?.rigged_model_path) return;
        qe(n);
        let a = await bve(e, r, n);
        if (!pe.current) return;
        if ((qe(null), !a.success)) {
          let e = [a.error, a.error_code && `(${a.error_code})`]
            .filter(Boolean)
            .join(` `);
          fe.current({
            title: `Could not restore v${n}`,
            description: e || `The server rejected the restore.`,
          });
          return;
        }
        let o = T9.getState();
        ((Ve.current = !0),
          (Pe.current = Ne.current),
          o.clearHistory(),
          a.generation_id && Ue.current.add(a.generation_id));
        let s = S9();
        (Ue.current.add(s),
          o.setSessionGenerationId(s),
          a.versions && o.setVersionState(a.version ?? null, a.versions));
        let c = a.rigged_model_path || i.rigged_model_path,
          u = jr.getAssetUrl(t, c, { version: a.version ?? Date.now() });
        u === Ce.current ? l.current?.reload() : ye(u);
      },
      [e, t],
    ),
    Ye = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    if (!he || !R) return;
    let t = he.id || he.asset_name,
      n = Ye.current;
    if (
      ((Ye.current = { key: t, modified: he.modified }),
      !n || n.key !== t || n.modified === he.modified)
    )
      return;
    let r = !1;
    return (
      (async () => {
        let n = await C9(e, t);
        if (r || !pe.current || !n.success) return;
        let i = T9.getState();
        i.setVersionState(n.current_version, n.versions);
        let a = n.versions.reduce(
          (e, t) => (e === null || t.version > e.version ? t : e),
          null,
        );
        a && !Ue.current.has(a.generation_id) && i.setExternalChange(!0);
      })(),
      () => {
        r = !0;
      }
    );
  }, [he?.modified ?? null, d, R, e]);
  let [Xe, Ze] = (0, X.useState)(``),
    Qe = (0, X.useMemo)(() => {
      let e = Xe.trim().toLowerCase();
      return m
        .map((e, t) => ({ name: e, index: t }))
        .filter((t) => !e || t.name.toLowerCase().includes(e));
    }, [m, Xe]),
    $e = (0, X.useCallback)((e) => {
      fe.current({ title: `Skin Weights`, description: e });
    }, []),
    et = (0, Z.jsx)($r, {
      className: `h-full`,
      children: (0, Z.jsxs)(`div`, {
        className: `flex flex-col text-[11px]`,
        children: [
          (0, Z.jsxs)(D9, {
            title: `Characters`,
            children: [
              me.length === 0 &&
                (0, Z.jsxs)(`div`, {
                  className: `p-4 text-center text-muted-foreground text-xs`,
                  children: [
                    (0, Z.jsx)(On, {
                      className: `h-6 w-6 mx-auto mb-2 opacity-50`,
                    }),
                    (0, Z.jsx)(`p`, { children: `No rigged characters` }),
                    (0, Z.jsx)(`p`, {
                      className: `text-[10px] mt-1 text-muted-foreground/60`,
                      children: `Rig a character in the Animation editor`,
                    }),
                  ],
                }),
              me.map((e) => {
                let t = e.id || e.asset_name;
                return (0, Z.jsxs)(
                  `button`,
                  {
                    onClick: () => ee(t),
                    className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors border ${t === d ? `bg-primary/15 text-foreground border-primary/30` : `text-muted-foreground hover:bg-secondary border-transparent`}`,
                    children: [
                      (0, Z.jsx)(On, { className: `h-3 w-3 shrink-0` }),
                      (0, Z.jsx)(`span`, {
                        className: `truncate`,
                        children: e.asset_name?.replace(/_/g, ` `),
                      }),
                    ],
                  },
                  t,
                );
              }),
            ],
          }),
          (0, Z.jsxs)(D9, {
            title: `Bones (${m.length})`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `relative mb-1.5`,
                children: [
                  (0, Z.jsx)(Gr, {
                    className: `h-3 w-3 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground`,
                  }),
                  (0, Z.jsx)(`input`, {
                    value: Xe,
                    onChange: (e) => Ze(e.target.value),
                    placeholder: `Filter bones`,
                    className: `w-full bg-muted border border-border text-foreground rounded pl-7 pr-2 py-1 text-[11px] placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40`,
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `max-h-56 overflow-y-auto`,
                children: [
                  Qe.length === 0 &&
                    (0, Z.jsx)(`div`, {
                      className: `p-3 text-center text-muted-foreground text-[10px]`,
                      children:
                        m.length === 0
                          ? `Load a character to list its bones`
                          : `No matching bones`,
                    }),
                  Qe.map((e) => {
                    let t = e.index === f;
                    return (0, Z.jsxs)(
                      `button`,
                      {
                        onClick: () => W(e.index, e.name),
                        className: `w-full flex items-center gap-2 px-2 py-1 rounded-lg text-left font-mono transition-colors border ${t ? `bg-primary/15 text-foreground border-primary/30` : `text-muted-foreground hover:bg-secondary border-transparent`}`,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `h-2.5 w-2.5 rounded-sm shrink-0`,
                            style: { background: t ? X_e : Z_e },
                          }),
                          (0, Z.jsx)(`span`, {
                            className: `truncate`,
                            children: e.name,
                          }),
                        ],
                      },
                      `${e.name}-${e.index}`,
                    );
                  }),
                ],
              }),
            ],
          }),
          (0, Z.jsxs)(D9, {
            title: `Pose`,
            children: [
              (0, Z.jsxs)(`button`, {
                onClick: () => {
                  (ue(null), l.current?.resetPose());
                },
                className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors border ${D === null ? `bg-primary/15 text-foreground border-primary/30` : `text-muted-foreground hover:bg-secondary border-transparent`}`,
                children: [
                  (0, Z.jsx)(Sn, { className: `h-3 w-3 shrink-0` }),
                  ` Rest pose`,
                ],
              }),
              De.map((e) =>
                (0, Z.jsxs)(
                  `button`,
                  {
                    onClick: () => ue(e.id),
                    className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors border ${e.id === D ? `bg-primary/15 text-foreground border-primary/30` : `text-muted-foreground hover:bg-secondary border-transparent`}`,
                    children: [
                      (0, Z.jsx)(bn, { className: `h-3 w-3 shrink-0` }),
                      (0, Z.jsx)(`span`, {
                        className: `truncate`,
                        children: e.name,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
              De.length === 0 &&
                (0, Z.jsx)(`div`, {
                  className: `p-3 text-center text-muted-foreground text-[10px]`,
                  children: `No generated clips for this character`,
                }),
              (0, Z.jsx)(`p`, {
                className: `text-[10px] text-muted-foreground px-1 pt-1`,
                children: `Posing is a preview only — it is never saved with the weights.`,
              }),
            ],
          }),
          (0, Z.jsxs)(D9, {
            title: `Version history`,
            children: [
              L.length === 0 &&
                (0, Z.jsx)(`div`, {
                  className: `p-3 text-center text-muted-foreground text-[10px]`,
                  children: `No saved versions yet`,
                }),
              [...L]
                .sort((e, t) => t.version - e.version)
                .map((e) =>
                  (0, Z.jsxs)(
                    `div`,
                    {
                      className: `flex items-center gap-2 px-2 py-1 rounded-lg border border-transparent text-muted-foreground transition-colors hover:bg-secondary`,
                      children: [
                        (0, Z.jsx)(H, {
                          className: `h-3 w-3 text-muted-foreground shrink-0`,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `flex-1 min-w-0`,
                          children: [
                            (0, Z.jsxs)(`div`, {
                              className: `text-foreground/80`,
                              children: [`v`, e.version],
                            }),
                            (0, Z.jsx)(`div`, {
                              className: `text-[10px] text-muted-foreground truncate`,
                              children:
                                e.restored_from === void 0
                                  ? e.created_at || ``
                                  : `restored from v${e.restored_from}`,
                            }),
                          ],
                        }),
                        (0, Z.jsx)(`button`, {
                          onClick: () => Je(e.version),
                          disabled: Ke !== null,
                          className: `text-[10px] px-1.5 py-0.5 rounded border border-border hover:bg-accent disabled:opacity-50`,
                          children:
                            Ke === e.version
                              ? (0, Z.jsx)(J, {
                                  className: `h-3 w-3 animate-spin`,
                                })
                              : `Restore`,
                        }),
                      ],
                    },
                    e.version,
                  ),
                ),
            ],
          }),
        ],
      }),
    }),
    tt = (0, Z.jsx)(`div`, {
      className: `flex flex-col text-[11px]`,
      children: (0, Z.jsxs)(D9, {
        title: `Brush`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `grid grid-cols-4 gap-1 mb-2`,
            children: Mve.map((e) =>
              (0, Z.jsx)(
                `button`,
                {
                  onClick: () => G(e.id),
                  className: `px-1 py-1 rounded border text-[10px] transition-colors ${_ === e.id ? `bg-primary/20 text-primary border-primary/30` : `text-muted-foreground border-transparent hover:bg-accent hover:text-foreground`}`,
                  children: e.label,
                },
                e.id,
              ),
            ),
          }),
          (0, Z.jsx)(k9, {
            label: `Radius`,
            value: v,
            min: 0.005,
            max: 0.5,
            step: 0.005,
            digits: 3,
            onChange: te,
          }),
          (0, Z.jsx)(k9, {
            label: `Strength`,
            value: y,
            min: 0,
            max: 1,
            step: 0.01,
            digits: 2,
            onChange: K,
          }),
          (0, Z.jsx)(k9, {
            label: `Hardness`,
            value: x,
            min: 0,
            max: 1,
            step: 0.01,
            digits: 2,
            onChange: re,
          }),
          (0, Z.jsx)(k9, {
            label: `Max weight`,
            value: S,
            min: 0,
            max: 1,
            step: 0.01,
            digits: 2,
            onChange: ae,
          }),
          (0, Z.jsxs)(`label`, {
            className: `flex items-center justify-between py-1`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-muted-foreground`,
                children: `Falloff`,
              }),
              (0, Z.jsx)(`select`, {
                value: b,
                onChange: (e) => ne(e.target.value),
                className: `bg-muted border border-border rounded px-1.5 py-0.5 text-[11px] text-foreground focus:outline-none focus:border-primary/40 transition-colors`,
                children: Nve.map((e) =>
                  (0, Z.jsx)(`option`, { value: e, children: e }, e),
                ),
              }),
            ],
          }),
          (0, Z.jsx)(Fve, { label: `Mirror`, checked: C, onChange: oe }),
        ],
      }),
    }),
    nt =
      P === `saving`
        ? {
            label: `Saving`,
            className: `border-sky-500/40 text-sky-300 bg-sky-500/10`,
            Icon: J,
            spin: !0,
            filled: !1,
          }
        : P === `error`
          ? {
              label: `Not saved`,
              className: `border-red-500/40 text-red-300 bg-red-500/10`,
              Icon: U,
              spin: !1,
              filled: !1,
            }
          : P === `saved`
            ? {
                label: I || `Saved`,
                className: `border-amber-500/40 text-amber-300 bg-amber-500/10`,
                Icon: Se,
                spin: !1,
                filled: !0,
              }
            : {
                label: `Unedited`,
                className: `border-gray-600/40 text-gray-400 bg-gray-800/40`,
                Icon: Se,
                spin: !1,
                filled: !1,
              };
  return (0, Z.jsxs)(`div`, {
    className: `h-full flex flex-col overflow-hidden bg-background`,
    children: [
      r !== !1 &&
        i &&
        (0, js.createPortal)(
          (0, Z.jsx)(`div`, {
            className: `flex flex-col h-full`,
            children: et,
          }),
          i,
        ),
      (0, Z.jsxs)(`div`, {
        className: `flex flex-1 overflow-hidden min-h-0`,
        children: [
          r !== !1 &&
            !i &&
            (0, Z.jsx)(`div`, {
              className: `w-64 shrink-0 border-r border-border bg-card`,
              children: et,
            }),
          (0, Z.jsxs)(`div`, {
            className: `flex-1 flex flex-col min-w-0`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2 px-3 py-1.5 border-b border-border bg-card shrink-0`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-xs font-medium text-foreground/70`,
                    children: `Skin Weights`,
                  }),
                  he &&
                    (0, Z.jsxs)(`span`, {
                      className: `text-xs text-primary truncate`,
                      children: [`— `, he.asset_name?.replace(/_/g, ` `)],
                    }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[11px] text-muted-foreground font-mono`,
                    children: [
                      m.length,
                      ` bones · `,
                      h,
                      ` prim · `,
                      g.toLocaleString(),
                      ` verts`,
                    ],
                  }),
                  (0, Z.jsx)(`div`, { className: `flex-1` }),
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [
                      (0, Z.jsx)(O9, {
                        active: w,
                        onClick: () => se(!w),
                        icon: (0, Z.jsx)(le, { className: `h-3.5 w-3.5` }),
                        label: `Weight heat map`,
                        title: `Tint the mesh by the selected bone's weight`,
                      }),
                      (0, Z.jsx)(O9, {
                        active: T,
                        onClick: () => q(!T),
                        icon: (0, Z.jsx)(pn, { className: `h-3.5 w-3.5` }),
                        label: `Texture`,
                        title: `Show the character's own texture`,
                      }),
                      (0, Z.jsx)(O9, {
                        active: E,
                        onClick: () => ce(!E),
                        icon: (0, Z.jsx)(co, { className: `h-3.5 w-3.5` }),
                        label: `Skeleton`,
                        title: `Show the skeleton and its joint spheres`,
                      }),
                    ],
                  }),
                  (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border mx-1` }),
                  (0, Z.jsx)(`button`, {
                    type: `button`,
                    onClick: () => l.current?.undo(),
                    disabled: B.length === 0,
                    className: `rounded p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30`,
                    title: `Undo stroke (Ctrl+Z)`,
                    "aria-label": `Undo`,
                    children: (0, Z.jsx)(F, { className: `h-3.5 w-3.5` }),
                  }),
                  (0, Z.jsx)(`button`, {
                    type: `button`,
                    onClick: () => l.current?.redo(),
                    disabled: V.length === 0,
                    className: `rounded p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30`,
                    title: `Redo stroke (Ctrl+Shift+Z)`,
                    "aria-label": `Redo`,
                    children: (0, Z.jsx)(A, { className: `h-3.5 w-3.5` }),
                  }),
                  d &&
                    (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        P === `error` &&
                          (0, Z.jsx)(`button`, {
                            type: `button`,
                            onClick: Fe,
                            className: `rounded p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground`,
                            title: `Try the save again`,
                            "aria-label": `Retry save`,
                            children: (0, Z.jsx)(xn, {
                              className: `h-3.5 w-3.5`,
                            }),
                          }),
                        (0, Z.jsxs)(`span`, {
                          className: `inline-flex items-center gap-1 shrink-0 whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-medium ${nt.className}`,
                          title:
                            I ||
                            `Whether your weight edits have reached the server`,
                          children: [
                            (0, Z.jsx)(nt.Icon, {
                              className: `h-3 w-3 ${nt.spin ? `animate-spin` : ``}`,
                              fill: nt.filled ? `currentColor` : `none`,
                            }),
                            nt.label,
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              z &&
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border-b border-amber-500/30 text-[11px] text-amber-300 shrink-0`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      children: `Rig changed elsewhere — your view is behind.`,
                    }),
                    (0, Z.jsx)(`button`, {
                      onClick: Ge,
                      className: `px-2 py-0.5 rounded border border-amber-400/40 hover:bg-amber-500/20`,
                      children: `Reload`,
                    }),
                  ],
                }),
              (0, Z.jsxs)(`div`, {
                className: `flex-1 relative min-h-0`,
                children: [
                  (0, Z.jsx)(Ave, {
                    ref: l,
                    modelUrl: ve,
                    clipUrl: Oe,
                    isActive: r,
                    onLoaded: We,
                    onStrokeEnd: Fe,
                    onBeforeModelSwap: He,
                    onError: $e,
                  }),
                  !d &&
                    (0, Z.jsx)(`div`, {
                      className: `absolute inset-0 flex items-center justify-center text-sm text-muted-foreground pointer-events-none`,
                      children: (0, Z.jsxs)(`div`, {
                        className: `text-center`,
                        children: [
                          (0, Z.jsx)(co, {
                            className: `h-10 w-10 mx-auto mb-3 opacity-30`,
                          }),
                          (0, Z.jsx)(`p`, {
                            children: `Select a rigged character to paint its weights`,
                          }),
                        ],
                      }),
                    }),
                  d &&
                    !p &&
                    (0, Z.jsx)(`div`, {
                      className: `absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-black/70 text-[11px] text-white/80 pointer-events-none`,
                      children: `Pick a bone — click a joint sphere or choose one in the list`,
                    }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2 px-3 py-1.5 border-t border-border bg-card shrink-0`,
                children: [
                  (0, Z.jsx)(`button`, {
                    onClick: () => (O ? l.current?.pause() : l.current?.play()),
                    disabled: j <= 0,
                    className: `p-1.5 rounded hover:bg-accent text-foreground/80 transition-colors disabled:opacity-40`,
                    title: O ? `Pause` : `Play`,
                    children: O
                      ? (0, Z.jsx)(N, { className: `h-4 w-4` })
                      : (0, Z.jsx)(bn, { className: `h-4 w-4` }),
                  }),
                  (0, Z.jsx)(`button`, {
                    onClick: () => l.current?.stop(),
                    disabled: j <= 0,
                    className: `p-1 rounded hover:bg-accent text-foreground/80 transition-colors disabled:opacity-40`,
                    title: `Stop`,
                    children: (0, Z.jsx)(Zo, { className: `h-3.5 w-3.5` }),
                  }),
                  (0, Z.jsx)(`input`, {
                    type: `range`,
                    min: 0,
                    max: Math.max(j, 0.001),
                    step: 0.01,
                    value: Math.min(k, j),
                    disabled: j <= 0,
                    onChange: (e) => l.current?.seek(Number(e.target.value)),
                    className: `flex-1 h-1 accent-primary`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[11px] text-muted-foreground font-mono`,
                    children: [k.toFixed(2), `s / `, j.toFixed(2), `s`],
                  }),
                  (0, Z.jsxs)(`select`, {
                    value: M,
                    onChange: (e) => de(Number(e.target.value)),
                    className: `bg-muted border border-border text-[11px] text-foreground/80 rounded px-1.5 py-0.5`,
                    children: [
                      (0, Z.jsx)(`option`, { value: 0.25, children: `0.25x` }),
                      (0, Z.jsx)(`option`, { value: 0.5, children: `0.5x` }),
                      (0, Z.jsx)(`option`, { value: 1, children: `1x` }),
                      (0, Z.jsx)(`option`, { value: 2, children: `2x` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          d &&
            (0, Z.jsx)(`div`, {
              className: `w-64 border-l border-border bg-card flex flex-col overflow-y-auto`,
              children: tt,
            }),
        ],
      }),
    ],
  });
}
