// Create-CEn7EAZs 295 — classname
// Lines 103987-104863 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function pye({ sessionId: e, sessionDir: t, assets: n, isActive: r }) {
  let { portalTarget: i, requestedAsset: a, consumeRequestedAsset: o } = ae(),
    { gameDesignData: s } = _c(),
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
      selectBone: U,
      setBrushMode: W,
      setBrushRadius: ne,
      setBrushStrength: G,
      setFalloffKind: re,
      setBrushHardness: ie,
      setOpacityCap: oe,
      setMirror: se,
      setShowOverlay: ce,
      setShowTexture: K,
      setShowBones: le,
      selectClip: de,
      setPlaybackSpeed: fe,
    } = w9(),
    pe = (0, X.useRef)(c);
  pe.current = c;
  let me = (0, X.useRef)(!0);
  (0, X.useEffect)(
    () => (
      (me.current = !0),
      () => {
        me.current = !1;
      }
    ),
    [],
  );
  let he = (0, X.useMemo)(
      () =>
        n.filter(
          (e) => e.asset_type === `character_3d` && !!e.rigged_model_path,
        ),
      [n],
    ),
    ge = (0, X.useMemo)(
      () => he.find((e) => (e.id || e.asset_name) === d) ?? null,
      [he, d],
    ),
    _e = (0, X.useRef)(null);
  _e.current = ge;
  let ve = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    ve.current = d;
  }, [d]),
    (0, X.useEffect)(() => {
      !d || ge || ee(null);
    }, [d, ge, ee]));
  let [ye, be] = (0, X.useState)(null),
    [q, xe] = (0, X.useState)(null),
    Se = (0, X.useRef)(null);
  Se.current = ye;
  let Ce = (0, X.useCallback)(
    (e, n) => vr.getAssetUrl(t, e.rigged_model_path, { version: n }),
    [t],
  );
  if (ge) {
    let e = ge.id || ge.asset_name;
    q !== e && (xe(e), be(Ce(ge, ge.modified)));
  } else q !== null && (xe(null), be(null));
  let [Te, Ee] = (0, X.useState)(null);
  (0, X.useEffect)(() => {
    if (r === !1 || he.length === 0) return;
    let e = o(`skin-weights`);
    if (!e || e.nonce === Te) return;
    Ee(e.nonce);
    let t = he.find(
      (t) => (t.id || t.asset_name) === e.assetId || t.asset_name === e.assetId,
    );
    if (t) {
      ee(t.id || t.asset_name);
      return;
    }
    pe.current({
      title: `${e.assetId} has no rig to paint`,
      description: `The Skin Weights editor opens rigged characters only.`,
    });
  }, [r, a, o, he, ee, Te]);
  let De = (0, X.useMemo)(() => {
      let e = s?.animation_plan;
      if (!e || !ge) return [];
      let t = e.characters?.find(
        (e) =>
          e.asset_id === (ge.id || ge.asset_name) ||
          e.asset_name === ge.asset_name,
      );
      if (!t) return [];
      let n = [];
      for (let e of t.animations || []) {
        let t = e.baked_animation_path || e.animation_path;
        t && n.push({ id: e.animation_id, name: e.name, path: t });
      }
      return n;
    }, [s, ge]),
    Oe = (0, X.useMemo)(() => {
      let e = De.find((e) => e.id === D);
      return e ? vr.getAssetUrl(t, e.path) : null;
    }, [De, D, t]),
    ke = (0, X.useCallback)(async () => {
      let t = ve.current;
      if (!t) return;
      let n = await S9(e, t);
      !me.current ||
        ve.current !== t ||
        (n.success &&
          w9.getState().setVersionState(n.current_version, n.versions));
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
        Zve({
          save: Qve,
          hasPending: (e) => Ae.current?.hasPending(e) ?? !1,
          owns: (e) => me.current && ve.current === e,
          setStatus: (e, t) => w9.getState().setSaveStatus(e, t),
          setVersionState: (e, t) => w9.getState().setVersionState(e, t),
          onRefused: (e, t) => {
            !me.current ||
              ve.current !== e ||
              (Pe.current = Xve(Pe.current, t.tick, t.baseline));
          },
          toast: (e, t) => pe.current({ title: e, description: t }),
          log: (e, t) => console.error(`[SkinWeights]`, e, t),
          isMounted: () => me.current,
        }),
      [],
    );
  Ae.current = (0, X.useMemo)(() => r9(Ie), [Ie]);
  let Le = (0, X.useCallback)(
    (t, n, r) => {
      let i = Yve({
        context: t,
        dirtyTick: Ne.current,
        savedTick: Pe.current,
        suppressed: r?.suppressed,
        primitiveCount: n.length,
      });
      if (i.kind === `skip`) return;
      if (i.kind === `error`) {
        (console.error(`[SkinWeights]`, i.message),
          me.current &&
            (w9.getState().setSaveStatus(`error`, i.message),
            pe.current({
              title: `Skin weights were not saved`,
              description: i.message,
            })));
        return;
      }
      let { blob: a, meta: o } = Jve(n, i.context.generationId),
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
      }, uye);
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
        let t = w9.getState(),
          n = x9();
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
      let e = _e.current;
      if (!e?.rigged_model_path) return;
      ((Ve.current = !0),
        (Pe.current = Ne.current),
        w9.getState().clearHistory(),
        w9.getState().setExternalChange(!1));
      let t = Ce(e, e.modified);
      t === Se.current ? l.current?.reload() : be(t);
    }, [Ce]),
    [Ke, qe] = (0, X.useState)(null),
    Je = (0, X.useCallback)(
      async (n) => {
        let r = ve.current,
          i = _e.current;
        if (!r || !i?.rigged_model_path) return;
        qe(n);
        let a = await $ve(e, r, n);
        if (!me.current) return;
        if ((qe(null), !a.success)) {
          let e = [a.error, a.error_code && `(${a.error_code})`]
            .filter(Boolean)
            .join(` `);
          pe.current({
            title: `Could not restore v${n}`,
            description: e || `The server rejected the restore.`,
          });
          return;
        }
        let o = w9.getState();
        ((Ve.current = !0),
          (Pe.current = Ne.current),
          o.clearHistory(),
          a.generation_id && Ue.current.add(a.generation_id));
        let s = x9();
        (Ue.current.add(s),
          o.setSessionGenerationId(s),
          a.versions && o.setVersionState(a.version ?? null, a.versions));
        let c = a.rigged_model_path || i.rigged_model_path,
          u = vr.getAssetUrl(t, c, { version: a.version ?? Date.now() });
        u === Se.current ? l.current?.reload() : be(u);
      },
      [e, t],
    ),
    Ye = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    if (!ge || !R) return;
    let t = ge.id || ge.asset_name,
      n = Ye.current;
    if (
      ((Ye.current = { key: t, modified: ge.modified }),
      !n || n.key !== t || n.modified === ge.modified)
    )
      return;
    let r = !1;
    return (
      (async () => {
        let n = await S9(e, t);
        if (r || !me.current || !n.success) return;
        let i = w9.getState();
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
  }, [ge?.modified ?? null, d, R, e]);
  let [Xe, Ze] = (0, X.useState)(``),
    Qe = (0, X.useMemo)(() => {
      let e = Xe.trim().toLowerCase();
      return m
        .map((e, t) => ({ name: e, index: t }))
        .filter((t) => !e || t.name.toLowerCase().includes(e));
    }, [m, Xe]),
    $e = (0, X.useCallback)((e) => {
      pe.current({ title: `Skin Weights`, description: e });
    }, []),
    et = (0, Z.jsx)(Lr, {
      className: `h-full`,
      children: (0, Z.jsxs)(`div`, {
        className: `flex flex-col text-[11px]`,
        children: [
          (0, Z.jsxs)(E9, {
            title: `Characters`,
            children: [
              he.length === 0 &&
                (0, Z.jsxs)(`div`, {
                  className: `p-4 text-center text-muted-foreground text-xs`,
                  children: [
                    (0, Z.jsx)(hn, {
                      className: `h-6 w-6 mx-auto mb-2 opacity-50`,
                    }),
                    (0, Z.jsx)(`p`, { children: `No rigged characters` }),
                    (0, Z.jsx)(`p`, {
                      className: `text-[10px] mt-1 text-muted-foreground/60`,
                      children: `Rig a character in the Animation editor`,
                    }),
                  ],
                }),
              he.map((e) => {
                let t = e.id || e.asset_name;
                return (0, Z.jsxs)(
                  `button`,
                  {
                    onClick: () => ee(t),
                    className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors border ${t === d ? `bg-primary/15 text-foreground border-primary/30` : `text-muted-foreground hover:bg-secondary border-transparent`}`,
                    children: [
                      (0, Z.jsx)(hn, { className: `h-3 w-3 shrink-0` }),
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
          (0, Z.jsxs)(E9, {
            title: `Bones (${m.length})`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `relative mb-1.5`,
                children: [
                  (0, Z.jsx)(kr, {
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
                        onClick: () => U(e.index, e.name),
                        className: `w-full flex items-center gap-2 px-2 py-1 rounded-lg text-left font-mono transition-colors border ${t ? `bg-primary/15 text-foreground border-primary/30` : `text-muted-foreground hover:bg-secondary border-transparent`}`,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `h-2.5 w-2.5 rounded-sm shrink-0`,
                            style: { background: t ? kve : Ave },
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
          (0, Z.jsxs)(E9, {
            title: `Pose`,
            children: [
              (0, Z.jsxs)(`button`, {
                onClick: () => {
                  (de(null), l.current?.resetPose());
                },
                className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors border ${D === null ? `bg-primary/15 text-foreground border-primary/30` : `text-muted-foreground hover:bg-secondary border-transparent`}`,
                children: [
                  (0, Z.jsx)(un, { className: `h-3 w-3 shrink-0` }),
                  ` Rest pose`,
                ],
              }),
              De.map((e) =>
                (0, Z.jsxs)(
                  `button`,
                  {
                    onClick: () => de(e.id),
                    className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-colors border ${e.id === D ? `bg-primary/15 text-foreground border-primary/30` : `text-muted-foreground hover:bg-secondary border-transparent`}`,
                    children: [
                      (0, Z.jsx)(cn, { className: `h-3 w-3 shrink-0` }),
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
          (0, Z.jsxs)(E9, {
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
      children: (0, Z.jsxs)(E9, {
        title: `Brush`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `grid grid-cols-4 gap-1 mb-2`,
            children: dye.map((e) =>
              (0, Z.jsx)(
                `button`,
                {
                  onClick: () => W(e.id),
                  className: `px-1 py-1 rounded border text-[10px] transition-colors ${_ === e.id ? `bg-primary/20 text-primary border-primary/30` : `text-muted-foreground border-transparent hover:bg-accent hover:text-foreground`}`,
                  children: e.label,
                },
                e.id,
              ),
            ),
          }),
          (0, Z.jsx)(O9, {
            label: `Radius`,
            value: v,
            min: 0.005,
            max: 0.5,
            step: 0.005,
            digits: 3,
            onChange: ne,
          }),
          (0, Z.jsx)(O9, {
            label: `Strength`,
            value: y,
            min: 0,
            max: 1,
            step: 0.01,
            digits: 2,
            onChange: G,
          }),
          (0, Z.jsx)(O9, {
            label: `Hardness`,
            value: x,
            min: 0,
            max: 1,
            step: 0.01,
            digits: 2,
            onChange: ie,
          }),
          (0, Z.jsx)(O9, {
            label: `Max weight`,
            value: S,
            min: 0,
            max: 1,
            step: 0.01,
            digits: 2,
            onChange: oe,
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
                onChange: (e) => re(e.target.value),
                className: `bg-muted border border-border rounded px-1.5 py-0.5 text-[11px] text-foreground focus:outline-none focus:border-primary/40 transition-colors`,
                children: fye.map((e) =>
                  (0, Z.jsx)(`option`, { value: e, children: e }, e),
                ),
              }),
            ],
          }),
          (0, Z.jsx)(mye, { label: `Mirror`, checked: C, onChange: se }),
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
              Icon: te,
              spin: !1,
              filled: !1,
            }
          : P === `saved`
            ? {
                label: I || `Saved`,
                className: `border-amber-500/40 text-amber-300 bg-amber-500/10`,
                Icon: we,
                spin: !1,
                filled: !0,
              }
            : {
                label: `Unedited`,
                className: `border-gray-600/40 text-gray-400 bg-gray-800/40`,
                Icon: we,
                spin: !1,
                filled: !1,
              };
  return (0, Z.jsxs)(`div`, {
    className: `h-full flex flex-col overflow-hidden bg-background`,
    children: [
      r !== !1 &&
        i &&
        (0, Qs.createPortal)(
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
                  ge &&
                    (0, Z.jsxs)(`span`, {
                      className: `text-xs text-primary truncate`,
                      children: [`— `, ge.asset_name?.replace(/_/g, ` `)],
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
                      (0, Z.jsx)(D9, {
                        active: w,
                        onClick: () => ce(!w),
                        icon: (0, Z.jsx)(ue, { className: `h-3.5 w-3.5` }),
                        label: `Weight heat map`,
                        title: `Tint the mesh by the selected bone's weight`,
                      }),
                      (0, Z.jsx)(D9, {
                        active: T,
                        onClick: () => K(!T),
                        icon: (0, Z.jsx)(en, { className: `h-3.5 w-3.5` }),
                        label: `Texture`,
                        title: `Show the character's own texture`,
                      }),
                      (0, Z.jsx)(D9, {
                        active: E,
                        onClick: () => le(!E),
                        icon: (0, Z.jsx)(Do, { className: `h-3.5 w-3.5` }),
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
                            children: (0, Z.jsx)(ln, {
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
                  (0, Z.jsx)(lye, {
                    ref: l,
                    modelUrl: ye,
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
                          (0, Z.jsx)(Do, {
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
                      : (0, Z.jsx)(cn, { className: `h-4 w-4` }),
                  }),
                  (0, Z.jsx)(`button`, {
                    onClick: () => l.current?.stop(),
                    disabled: j <= 0,
                    className: `p-1 rounded hover:bg-accent text-foreground/80 transition-colors disabled:opacity-40`,
                    title: `Stop`,
                    children: (0, Z.jsx)(Fs, { className: `h-3.5 w-3.5` }),
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
                    onChange: (e) => fe(Number(e.target.value)),
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
