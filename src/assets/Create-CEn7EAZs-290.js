// Create-CEn7EAZs 290 — jsx
// Lines 101150-102360 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var Q7 = 0.1,
  $7 = 4,
  e9 = [0.25, 0.5, 1, 2],
  Tve = { w: `translate`, e: `rotate`, r: `scale` },
  Eve = ({
    sessionId: e,
    sessionDir: t,
    assets: n,
    className: r = ``,
    onExecuteWorkflow: i,
    isActive: a,
  }) => {
    let [o, s] = (0, X.useState)(!1),
      [c, l] = (0, X.useState)({}),
      [d, f] = (0, X.useState)(null),
      p = d !== null,
      m = (0, X.useCallback)((e, t) => {
        l((n) => ({ ...n, [e]: t instanceof Error ? t.message : String(t) }));
      }, []),
      h = (0, X.useCallback)((e) => {
        l((t) => {
          if (!(e in t)) return t;
          let n = { ...t };
          return (delete n[e], n);
        });
      }, []),
      { toast: g } = u(),
      { portalTarget: _, requestedAsset: v, consumeRequestedAsset: y } = ae(),
      { openEditor: b } = Rt(),
      { gameDesignData: x, setGameDesignData: S } = _c(),
      C = x?.animation_plan,
      w = (0, X.useCallback)(async () => {
        if (!e) return;
        let t = await GI.getAnimationPlan(e);
        t.success &&
          t.animation_plan &&
          S((e) => ({ ...(e || {}), animation_plan: t.animation_plan }));
      }, [e, S]),
      T = (0, X.useMemo)(
        () => n.filter((e) => e.asset_type === `character_3d` && Dt(e)),
        [n],
      ),
      {
        selectedCharacterId: E,
        selectedAnimationId: D,
        selectedScope: O,
        compareMode: k,
        isPlaying: A,
        currentFrame: j,
        totalFrames: M,
        playbackSpeed: P,
        fps: F,
        stateMachine: I,
        loadStateMachine: L,
        loadCharacters: R,
        selectCharacter: z,
        selectAnimation: V,
        selectLibraryAnimation: H,
        setCompareMode: ee,
        selectedStateId: te,
        selectedTransitionId: U,
        play: W,
        pause: ne,
        stop: G,
        stepFrame: re,
        setPlaybackSpeed: ie,
        boneNames: oe,
        selectedBoneName: se,
        loopInFrame: ce,
        loopOutFrame: K,
        loopBlendFrames: le,
        loopConfigured: ue,
        isLoopPreview: de,
        setLoopPreview: fe,
        boneOffsets: pe,
        mutedBones: me,
        ikKeys: he,
        ikEnabled: ge,
        footLock: _e,
        plantRuntime: ve,
        limbStabilize: ye,
        stabilizeRuntime: be,
        bakeSampler: q,
        clipFileSampler: xe,
        positionOffset: Se,
        rootMotionConfig: Ce,
        loadAnimationState: we,
      } = L6(),
      Te = D ? (c[D] ?? null) : null,
      Ee = D != null && d === D;
    ((0, X.useEffect)(() => {
      O === `library` && s(!1);
    }, [O]),
      (0, X.useEffect)(() => {
        let e = C?.characters || [],
          t = T.map((t) => {
            let n = t.id || t.asset_name,
              r = e.find(
                (e) => e.asset_id === n || e.asset_name === t.asset_name,
              );
            return {
              assetId: n,
              assetName: t.asset_name || ``,
              riggedModelPath: t.rigged_model_path || t.model_3d_path || ``,
              animations: (r?.animations || []).map((e) => ({
                animationId: e.animation_id,
                name: e.name,
                animationPath: e.animation_path || ``,
                loop: e.loop,
                durationSec: e.duration_sec ?? e.estimated_duration_sec,
                category: e.category,
                status: e.status || `pending`,
                rootMotion: e.root_motion || !1,
                offsets: e.offsets || {
                  position: [0, 0, 0],
                  rotation: [0, 0, 0],
                },
                error: e.error,
                source: e.source,
                sourceFilePath: e.source_file_path,
                sourceTimeRangeSec: e.source_time_range_sec,
                bakeStale: e.bake_stale,
                cutFrom: e.cut_from,
                retargetedFrom: e.retargeted_from
                  ? {
                      assetId: e.retargeted_from.asset_id,
                      animationId: e.retargeted_from.animation_id,
                    }
                  : void 0,
              })),
            };
          });
        R(t);
      }, [C, T, R]),
      (0, X.useEffect)(() => {
        if (a === !1 || T.length === 0) return;
        let e = y(`character`);
        if (!e) return;
        let t = T.find(
          (t) =>
            (t.id || t.asset_name) === e.assetId || t.asset_name === e.assetId,
        );
        if (t) {
          z(t.id || t.asset_name);
          return;
        }
        g({
          title: `${e.assetId} is not a character in this project`,
          description: `The Animation Editor opens rigged characters only.`,
        });
      }, [a, v, y, T, z, g]));
    let De = T.find((e) => (e.id || e.asset_name) === E),
      Oe = (0, X.useMemo)(
        () =>
          (C?.characters || []).find(
            (e) => e.asset_id === E || e.asset_name === De?.asset_name,
          ),
        [C, E, De],
      ),
      ke = Oe?.animations?.find((e) => e.animation_id === D),
      Ae = O === `library`,
      je = (0, X.useMemo)(
        () =>
          (Ae && (C?.library || []).find((e) => e.animation_id === D)) || null,
        [Ae, C, D],
      ),
      Me = Ae ? je : (ke ?? null),
      Ne = Ae ? null : E,
      Pe = Ae
        ? je?.animation_path || null
        : De?.rigged_model_path || De?.model_3d_path || null,
      Fe = Ae ? je?.animation_path || null : ke?.animation_path || null,
      Ie = (0, X.useMemo)(() => {
        if (Ae || !ke || !Pe || !Fe) return null;
        let e = ke.retargeted_from;
        if (!e) return null;
        let t = { modelPath: Pe, animationPath: Fe, label: `Retargeted` };
        if (e.library) {
          let n = (C?.library || []).find(
            (t) => t.animation_id === e.animation_id,
          )?.animation_path;
          return n
            ? {
                source: { modelPath: n, animationPath: n, label: `Source` },
                target: t,
              }
            : null;
        }
        let n = T.find((t) => (t.id || t.asset_name) === e.asset_id),
          r = (C?.characters || [])
            .find(
              (t) =>
                t.asset_id === e.asset_id || t.asset_name === n?.asset_name,
            )
            ?.animations?.find((t) => t.animation_id === e.animation_id),
          i = n?.rigged_model_path || n?.model_3d_path || null,
          a = r?.animation_path || null;
        return !i || !a
          ? null
          : {
              source: { modelPath: i, animationPath: a, label: `Source` },
              target: t,
            };
      }, [Ae, ke, Pe, Fe, C, T]),
      Le = !!Ie;
    (0, X.useEffect)(() => {
      L(Oe?.state_machine ?? null);
    }, [Oe, L]);
    let Re = (0, X.useRef)(null),
      ze = (0, X.useRef)(Oe);
    ((ze.current = Oe),
      (0, X.useEffect)(() => {
        if (Ae || !D) return;
        let e = ze.current?.animations?.find((e) => e.animation_id === D),
          {
            droppedIkKeys: t,
            convertedFootPlants: n,
            droppedFootConfig: r,
          } = we(e?.animation_state ?? null);
        if (n > 0 || r) {
          let e = [];
          (n > 0 &&
            e.push(
              `${n} plant ${n === 1 ? `window` : `windows`} became foot-lock weight keys`,
            ),
            r &&
              e.push(
                `its strength, sensitivity, ease and ground-clamp settings were dropped`,
              ),
            g({
              title: `Foot lock converted from an older save`,
              description: `${e.join(`; `)}. One keyed weight per foot now drives both the position and the rotation hold.`,
            }));
        }
        t > 0 &&
          g({
            title: `Dropped ${t} IK ${t === 1 ? `key` : `keys`} from an older save`,
            description: `IK controllers now store an offset from the animation, which the old absolute targets cannot be converted into. Re-key them.`,
          });
      }, [Ae, D, we, g]));
    let Be = (0, X.useMemo)(
        () => ({
          bone_offsets: pe.map(Cve),
          loop_config:
            ue && K > ce
              ? { in_frame: ce, out_frame: K, blend_frames: le }
              : null,
          playback_speed: P,
          position_offset: Se,
          root_motion_config: Ce
            ? { stripped: Ce.stripped, strip_mode: Ce.stripMode }
            : null,
          muted_bones: me,
          ik_keys: he.map(
            ({ effector: e, frame: t, offset: n, rotation: r, weight: i }) => ({
              effector: e,
              frame: t,
              offset: n,
              rotation: r,
              weight: i,
            }),
          ),
          ik_enabled: ge,
          foot_lock: { keys: _e.keys.map(wve) },
          limb_stabilize: ye,
        }),
        [pe, ce, K, le, Se, Ce, me, he, ge, _e, P, ye],
      ),
      Ve = (0, X.useMemo)(
        () => ({
          state: {
            boneOffsets: pe,
            mutedBones: me,
            ikKeys: he,
            ikEnabled: ge,
            footLock: _e,
            plantRuntime: ve,
            limbStabilize: ye,
            stabilizeRuntime: be,
            rootMotionConfig: Ce,
          },
          loop:
            ue && K > ce ? { inFrame: ce, outFrame: K, blendFrames: le } : null,
          fps: F,
          speed: P,
        }),
        [pe, me, he, ge, _e, ve, Ce, ye, be, ce, K, le, ue, F, P],
      ),
      He = (0, X.useRef)(Promise.resolve()),
      Ue = (0, X.useCallback)((e) => {
        let t = He.current.catch(() => void 0).then(e);
        return ((He.current = t.catch(() => void 0)), t);
      }, []),
      We = (0, X.useCallback)(
        (t, n, r) =>
          Ue(async () => {
            let i = await GI.saveAnimationState(e, t, n, r);
            if (!i.success)
              throw Error(i.error || `Could not save animation edits`);
          }),
        [Ue, e],
      ),
      Ge = (0, X.useCallback)(
        (t, n, r, i, a) =>
          Ue(async () => {
            let o = await GI.saveAnimationState(e, t, n, r);
            if (!o.success)
              throw Error(o.error || `Could not save animation edits`);
            if (!i) throw Error(`No clip loaded to sample for the bake`);
            let s = await i(a),
              c = await GI.bake(e, t, n, s);
            if (!c.success)
              throw Error(c.error || `Could not bake animation edits`);
          }),
        [Ue, e],
      ),
      Ke = (0, X.useRef)(null),
      qe = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
      let e = qe.current;
      if (((qe.current = D), e && e !== D && Ke.current)) {
        let {
          charId: t,
          animId: n,
          state: r,
          sample: i,
          request: a,
        } = Ke.current;
        n === e &&
          (f(n),
          h(n),
          Ge(t, n, r, i, a)
            .then(() => w())
            .catch((e) => {
              (console.error(e),
                m(n, e),
                g({
                  title: `Could not bake the previous clip`,
                  description: e instanceof Error ? e.message : String(e),
                }));
            })
            .finally(() => f((e) => (e === n ? null : e))));
      }
      E &&
        D &&
        (Ke.current = {
          charId: E,
          animId: D,
          state: Be,
          sample: q,
          request: Ve,
        });
    }, [Be, Ve, E, D, q, w, Ge, g]);
    let [Je, Ye] = (0, X.useState)(``),
      Xe = (0, X.useMemo)(() => JSON.stringify(Be), [Be]),
      Ze = Je !== `` && Xe !== Je,
      Qe = (0, X.useRef)(null),
      $e = rH({
        isBaking: Ee,
        bakeError: Te,
        dirty: Ze,
        bakeStale: ke?.bake_stale,
        animationPath: ke?.animation_path,
        bakedPath: ke?.baked_animation_path,
      }),
      et = (0, X.useMemo)(
        () =>
          aH({ status: $e, ikEnabled: ge, ikKeys: he, footLockKeys: _e.keys }),
        [$e, ge, he, _e.keys],
      );
    ((0, X.useEffect)(() => {
      if (!E || !D) return;
      if (Je === ``) {
        Ye(Xe);
        return;
      }
      if (Xe === Je) return;
      let e = setTimeout(() => {
        ((Qe.current = null),
          We(E, D, Be)
            .then(() => (Ye(Xe), w()))
            .catch(console.error));
      }, 1500);
      return (
        (Qe.current = e),
        () => {
          (clearTimeout(e), Qe.current === e && (Qe.current = null));
        }
      );
    }, [Be, Xe, Je, E, D, w, We]),
      (0, X.useEffect)(() => {
        Ye(``);
      }, [D]));
    let tt = (0, X.useCallback)(async () => {
        if (!E || !D) throw Error(`Select an animation first`);
        Qe.current &&= (clearTimeout(Qe.current), null);
        let e = Je,
          t = D;
        (Ye(Xe), f(t), h(t));
        try {
          (await Ge(E, D, Be, q, Ve), await w());
        } catch (n) {
          throw (Ye(e), m(t, n), n);
        } finally {
          f((e) => (e === t ? null : e));
        }
      }, [E, D, Be, Xe, Je, Ve, q, Ge, w]),
      [nt, rt] = (0, X.useState)(null),
      it = (0, X.useCallback)(async () => {
        let t = E,
          n = ze.current?.animations ?? [];
        if (!t || n.length === 0) return;
        let r = n.filter((e) => e.animation_path);
        if (r.length === 0) {
          g({
            title: `Nothing to re-bake`,
            description: `This character has no generated clips yet.`,
          });
          return;
        }
        if (!xe) {
          g({
            title: `Cannot re-bake yet`,
            description: `The character rig is still loading.`,
            variant: `destructive`,
          });
          return;
        }
        rt({ done: 0, total: r.length });
        let i = [];
        try {
          for (let [n, a] of r.entries()) {
            rt({ done: n, total: r.length });
            try {
              if (a.animation_id === D) {
                await tt();
                continue;
              }
              let n = I6(a.animation_state ?? {}),
                r = await xe(a.animation_path, {
                  state: n.layers,
                  loop: n.loop,
                  fps: F,
                  speed: n.speed,
                });
              if (
                !(await Ue(async () => {
                  let n = await GI.bake(e, t, a.animation_id, r);
                  if (!n.success) throw Error(n.error || `bake failed`);
                })
                  .then(() => !0)
                  .catch(
                    (e) => (
                      i.push(
                        `${a.name || a.animation_id}: ${e instanceof Error ? e.message : String(e)}`,
                      ),
                      !1
                    ),
                  ))
              )
                continue;
            } catch (e) {
              i.push(
                `${a.name || a.animation_id}: ${e instanceof Error ? e.message : String(e)}`,
              );
            }
          }
          await w();
        } finally {
          rt(null);
        }
        let a = r.length - i.length;
        i.length === 0
          ? g({
              title: `Re-baked ${a} ${a === 1 ? `clip` : `clips`}`,
              description: `Every clip on this character now plays what the editor shows.`,
            })
          : (console.error(`[AnimationEditor] re-bake failures:`, i),
            g({
              title: `Re-baked ${a} of ${r.length}`,
              description: `${i.length} failed — ${i.slice(0, 2).join(`; `)}${i.length > 2 ? `; and ${i.length - 2} more` : ``}`,
              variant: `destructive`,
            }));
      }, [E, D, xe, F, e, tt, Ue, w, g]),
      at = (0, X.useCallback)(() => {
        tt().catch((e) => {
          (console.error(e),
            g({
              title: `Could not bake this clip`,
              description: e instanceof Error ? e.message : String(e),
            }));
        });
      }, [tt, g]),
      ot = (0, X.useCallback)(() => {
        ((Qe.current &&= (clearTimeout(Qe.current), null)),
          we(ke?.animation_state ?? null),
          Ye(``),
          D && h(D));
      }, [we, ke]),
      st = (0, X.useCallback)(async () => {
        await tt();
      }, [tt]),
      [ct, lt] = (0, X.useState)(!1),
      ut = (0, X.useCallback)(async () => {
        if (!(!E || !I)) {
          lt(!0);
          try {
            (await GI.saveStateMachine(e, E, I), await w());
          } finally {
            lt(!1);
          }
        }
      }, [e, E, I, w]),
      dt = (0, X.useCallback)(() => {
        if (!I) return;
        let e = JSON.stringify(I, null, 2),
          t = new Blob([e], { type: `application/json` }),
          n = URL.createObjectURL(t),
          r = document.createElement(`a`);
        ((r.href = n),
          (r.download = `state_machine_${E || `unknown`}.json`),
          r.click(),
          URL.revokeObjectURL(n));
      }, [I, E]),
      ft = (0, X.useCallback)(() => {
        let e = document.createElement(`input`);
        ((e.type = `file`),
          (e.accept = `.json`),
          (e.onchange = (e) => {
            let t = e.target.files?.[0];
            if (!t) return;
            let n = new FileReader();
            ((n.onload = () => {
              try {
                let e = JSON.parse(n.result);
                e.states && e.transitions && L(e);
              } catch {}
            }),
              n.readAsText(t));
          }),
          e.click());
      }, [L]),
      pt = Math.max(0, K - ce),
      mt = (0, Z.jsx)(Fhe, {
        characters: T,
        animationPlan: C,
        sessionDir: t,
        sessionId: e,
        onRigCharacter: i
          ? (e) => {
              i(V6, ``, { params: { target: e } });
            }
          : void 0,
        onUploaded: async (e) => {
          (await w(), e && H(e));
        },
      });
    return (
      (0, X.useEffect)(() => {
        if (a === !1) return;
        let e = Re.current,
          t = (t) => {
            if (t.ctrlKey || t.metaKey || t.altKey) return;
            let n = t.target;
            if (!n) return;
            let r = n.tagName;
            if (
              r === `INPUT` ||
              r === `TEXTAREA` ||
              r === `SELECT` ||
              n.isContentEditable ||
              (e && !e.contains(n) && n !== document.body)
            )
              return;
            let i = t.shiftKey ? 10 : 1;
            if (t.code === `Space`) {
              (t.preventDefault(), L6.getState().isPlaying ? ne() : W());
              return;
            }
            if (t.key === `ArrowLeft`) {
              (t.preventDefault(), re(-i));
              return;
            }
            if (t.key === `ArrowRight`) {
              (t.preventDefault(), re(i));
              return;
            }
            let a = Tve[t.key.toLowerCase()];
            if (a) {
              let e = L6.getState(),
                n = p8({
                  selectedEffector: e.selectedEffector,
                  ikEnabled: e.ikEnabled,
                  attachable: e.attachableEffectors,
                  selectedBoneName: e.selectedBoneName,
                });
              if (!m8(n, a)) return;
              (t.preventDefault(),
                n.kind === `effector`
                  ? e.setIkGizmoMode(a)
                  : e.setBoneGizmoMode(a));
            }
          };
        return (
          window.addEventListener(`keydown`, t),
          () => window.removeEventListener(`keydown`, t)
        );
      }, [a, W, ne, re]),
      (0, Z.jsxs)(`div`, {
        ref: Re,
        className: `h-full flex flex-col overflow-hidden bg-background ${r}`,
        children: [
          a !== !1 &&
            _ &&
            (0, Qs.createPortal)(
              (0, Z.jsx)(`div`, {
                className: `flex flex-col h-full`,
                children: mt,
              }),
              _,
            ),
          (0, Z.jsx)(w_e, {
            characterName: Ae ? je?.name || `Library` : De?.asset_name || null,
            boneCount: 0,
            showStateMachine: o,
            onToggleStateMachine: Ae ? () => {} : () => s(!o),
            onOpenSkinWeights:
              !Ae && E ? () => b(`skin-weights`, { assetId: E }) : void 0,
            compareAvailable: Le,
            compareOn: k,
            onToggleCompare: () => ee(!k),
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex-1 flex overflow-hidden min-h-0`,
            children: [
              a !== !1 &&
                !_ &&
                (0, Z.jsx)(`div`, {
                  className: `w-48 border-r border-border bg-card flex flex-col`,
                  children: mt,
                }),
              (0, Z.jsxs)(`div`, {
                className: `flex-1 flex flex-col relative min-w-0`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex-1 bg-background relative min-h-0`,
                    children: [
                      k && Ie
                        ? (0, Z.jsx)(eve, {
                            sessionDir: t,
                            source: Ie.source,
                            target: Ie.target,
                            isActive: a,
                          })
                        : Ae
                          ? D
                            ? Pe
                              ? (0, Z.jsx)(e7, {
                                  sessionDir: t,
                                  modelPath: Pe,
                                  animationPath: Fe,
                                  isActive: a,
                                })
                              : (0, Z.jsx)(`div`, {
                                  className: `h-full flex items-center justify-center text-muted-foreground text-sm`,
                                  children: (0, Z.jsxs)(`div`, {
                                    className: `text-center`,
                                    children: [
                                      (0, Z.jsx)(cn, {
                                        className: `h-10 w-10 mx-auto mb-3 opacity-30`,
                                      }),
                                      (0, Z.jsx)(`p`, {
                                        children: `This library entry has no playable file yet`,
                                      }),
                                    ],
                                  }),
                                })
                            : (0, Z.jsx)(`div`, {
                                className: `h-full flex items-center justify-center text-muted-foreground text-sm`,
                                children: (0, Z.jsxs)(`div`, {
                                  className: `text-center`,
                                  children: [
                                    (0, Z.jsx)(cn, {
                                      className: `h-10 w-10 mx-auto mb-3 opacity-30`,
                                    }),
                                    (0, Z.jsx)(`p`, {
                                      children: `Select a library animation`,
                                    }),
                                  ],
                                }),
                              })
                          : E
                            ? Pe
                              ? (0, Z.jsx)(e7, {
                                  sessionDir: t,
                                  modelPath: Pe,
                                  animationPath: Fe,
                                  isActive: a,
                                  registerSampler: !0,
                                })
                              : (0, Z.jsx)(`div`, {
                                  className: `h-full flex items-center justify-center text-muted-foreground text-sm`,
                                  children: (0, Z.jsxs)(`div`, {
                                    className: `text-center`,
                                    children: [
                                      (0, Z.jsx)(cn, {
                                        className: `h-10 w-10 mx-auto mb-3 opacity-30`,
                                      }),
                                      (0, Z.jsx)(`p`, {
                                        children: `No rigged model found for this character`,
                                      }),
                                    ],
                                  }),
                                })
                            : (0, Z.jsx)(`div`, {
                                className: `h-full flex items-center justify-center text-muted-foreground text-sm`,
                                children: (0, Z.jsxs)(`div`, {
                                  className: `text-center`,
                                  children: [
                                    (0, Z.jsx)(hn, {
                                      className: `h-10 w-10 mx-auto mb-3 opacity-30`,
                                    }),
                                    (0, Z.jsx)(`p`, {
                                      children: `Select a character to begin`,
                                    }),
                                  ],
                                }),
                              }),
                      !k &&
                        !Ae &&
                        o &&
                        (0, Z.jsxs)(`div`, {
                          className: `absolute inset-0 bg-background/95 z-10 flex flex-col`,
                          children: [
                            (0, Z.jsxs)(`div`, {
                              className: `flex items-center justify-between px-3 py-2 border-b border-border`,
                              children: [
                                (0, Z.jsxs)(`span`, {
                                  className: `text-xs font-medium text-foreground/80 flex items-center gap-2`,
                                  children: [
                                    (0, Z.jsx)(ss, {
                                      className: `h-3.5 w-3.5 text-primary`,
                                    }),
                                    `Animation State Machine`,
                                  ],
                                }),
                                (0, Z.jsxs)(`div`, {
                                  className: `flex items-center gap-1`,
                                  children: [
                                    (0, Z.jsx)(`button`, {
                                      onClick: ut,
                                      disabled: ct,
                                      title: `Save`,
                                      className: `p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50`,
                                      children: ct
                                        ? (0, Z.jsx)(J, {
                                            className: `h-3.5 w-3.5 animate-spin`,
                                          })
                                        : (0, Z.jsx)(As, {
                                            className: `h-3.5 w-3.5`,
                                          }),
                                    }),
                                    (0, Z.jsx)(`button`, {
                                      onClick: dt,
                                      title: `Export JSON`,
                                      className: `p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors`,
                                      children: (0, Z.jsx)(Vo, {
                                        className: `h-3.5 w-3.5`,
                                      }),
                                    }),
                                    (0, Z.jsx)(`button`, {
                                      onClick: ft,
                                      title: `Import JSON`,
                                      className: `p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors`,
                                      children: (0, Z.jsx)(mn, {
                                        className: `h-3.5 w-3.5`,
                                      }),
                                    }),
                                    (0, Z.jsx)(`div`, {
                                      className: `w-px h-4 bg-border mx-1`,
                                    }),
                                    (0, Z.jsx)(`button`, {
                                      onClick: () => s(!1),
                                      className: `text-muted-foreground hover:text-foreground transition-colors`,
                                      children: (0, Z.jsx)(on, {
                                        className: `h-3.5 w-3.5`,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Z.jsx)(mve, { className: `flex-1` }),
                          ],
                        }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `h-64 border-t border-border bg-card flex flex-col`,
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-1 px-3 py-1.5 border-b border-border`,
                        children: [
                          (0, Z.jsx)(`button`, {
                            onClick: () => re(-1),
                            className: `p-1 rounded hover:bg-accent text-foreground/80 transition-colors`,
                            title: `Step back (wraps at the start of the range)`,
                            children: (0, Z.jsx)(Qee, {
                              className: `h-3.5 w-3.5`,
                            }),
                          }),
                          (0, Z.jsx)(`button`, {
                            onClick: A ? ne : W,
                            className: `p-1.5 rounded hover:bg-accent text-foreground/80 transition-colors`,
                            title: A ? `Pause` : `Play`,
                            children: A
                              ? (0, Z.jsx)(N, { className: `h-4 w-4` })
                              : (0, Z.jsx)(cn, { className: `h-4 w-4` }),
                          }),
                          (0, Z.jsx)(`button`, {
                            onClick: G,
                            className: `p-1 rounded hover:bg-accent text-foreground/80 transition-colors`,
                            title: `Stop (reset to frame 0)`,
                            children: (0, Z.jsx)(Fs, {
                              className: `h-3.5 w-3.5`,
                            }),
                          }),
                          (0, Z.jsx)(`button`, {
                            onClick: () => re(1),
                            className: `p-1 rounded hover:bg-accent text-foreground/80 transition-colors`,
                            title: `Step forward (wraps at the end of the range)`,
                            children: (0, Z.jsx)(Ns, {
                              className: `h-3.5 w-3.5`,
                            }),
                          }),
                          (0, Z.jsx)(`div`, {
                            className: `w-px h-4 bg-border mx-1`,
                          }),
                          (0, Z.jsx)(Os, {
                            className: `h-3 w-3 ${de ? `text-blue-400` : `text-muted-foreground`}`,
                          }),
                          (0, Z.jsx)(`button`, {
                            onClick: () => D && pt > 0 && fe(!de),
                            className: `p-1 rounded text-[10px] transition-colors ${de ? `bg-blue-500/20 text-blue-300` : `text-muted-foreground hover:bg-accent`}`,
                            title: `Toggle loop preview`,
                            disabled: !D || pt <= 0,
                            children: (0, Z.jsx)(gt, { className: `h-3 w-3` }),
                          }),
                          (0, Z.jsx)(`div`, {
                            className: `w-px h-4 bg-border mx-1`,
                          }),
                          (0, Z.jsxs)(`span`, {
                            className: `text-[11px] text-foreground/80 font-mono`,
                            children: [`Frame: `, j, ` / `, M],
                          }),
                          (0, Z.jsxs)(`span`, {
                            className: `text-[11px] text-muted-foreground font-mono ml-1`,
                            children: [
                              `> `,
                              F > 0 ? (j / F).toFixed(2) : `0.00`,
                              `s / `,
                              F > 0 ? (M / F).toFixed(2) : `0.00`,
                              `s`,
                            ],
                          }),
                          (0, Z.jsx)(`div`, { className: `flex-1` }),
                          !Ae &&
                            D &&
                            (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(z2, {
                                  status: $e,
                                  title:
                                    Te ??
                                    `Whether the in-game clip reflects your edits`,
                                }),
                                (0, Z.jsxs)(`button`, {
                                  onClick: ot,
                                  disabled: !Ze || Ee,
                                  className: `flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-foreground/80 hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors`,
                                  title: `Discard unsaved edits and reload the clip's saved state`,
                                  children: [
                                    (0, Z.jsx)(un, { className: `h-3 w-3` }),
                                    `Revert`,
                                  ],
                                }),
                                (0, Z.jsxs)(`button`, {
                                  onClick: at,
                                  disabled: Ee || !q,
                                  className: `flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-emerald-600/25 text-emerald-200 hover:bg-emerald-600/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`,
                                  title: `Bake every edit into the in-game clip now`,
                                  children: [
                                    Ee
                                      ? (0, Z.jsx)(J, {
                                          className: `h-3 w-3 animate-spin`,
                                        })
                                      : (0, Z.jsx)(an, {
                                          className: `h-3 w-3`,
                                        }),
                                    `Apply`,
                                  ],
                                }),
                                (0, Z.jsxs)(`button`, {
                                  onClick: () => {
                                    it();
                                  },
                                  disabled: p || !!nt || !xe,
                                  className: `flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-foreground/80 hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors`,
                                  title: `Re-bake every clip on this character from its saved state`,
                                  children: [
                                    nt
                                      ? (0, Z.jsx)(J, {
                                          className: `h-3 w-3 animate-spin`,
                                        })
                                      : (0, Z.jsx)(B, { className: `h-3 w-3` }),
                                    nt
                                      ? `Re-baking ${nt.done + 1}/${nt.total}`
                                      : `Re-bake all`,
                                  ],
                                }),
                                (0, Z.jsx)(`div`, {
                                  className: `w-px h-4 bg-border mx-1`,
                                }),
                              ],
                            }),
                          (0, Z.jsx)(`span`, {
                            className: `text-[10px] text-muted-foreground`,
                            children: `Speed`,
                          }),
                          (0, Z.jsxs)(`select`, {
                            value: e9.includes(P) ? P : `custom`,
                            onChange: (e) => {
                              e.target.value !== `custom` &&
                                ie(Number(e.target.value));
                            },
                            className: `bg-muted border border-border text-[11px] text-foreground/80 rounded px-1.5 py-0.5`,
                            title: Ae
                              ? `Preview speed (library clips carry no saved edits)`
                              : `Baked into the clip`,
                            children: [
                              e9.map((e) =>
                                (0, Z.jsxs)(
                                  `option`,
                                  { value: e, children: [e, `x`] },
                                  e,
                                ),
                              ),
                              !e9.includes(P) &&
                                (0, Z.jsxs)(`option`, {
                                  value: `custom`,
                                  children: [P, `x`],
                                }),
                            ],
                          }),
                          (0, Z.jsx)(`input`, {
                            type: `number`,
                            min: Q7,
                            max: $7,
                            step: 0.05,
                            value: P,
                            onChange: (e) => {
                              let t = Number(e.target.value);
                              Number.isFinite(t) &&
                                ie(Math.min($7, Math.max(Q7, t)));
                            },
                            className: `w-14 bg-muted border border-border text-[11px] text-foreground/80 rounded px-1.5 py-0.5`,
                            title: `Clip speed (${Q7}-${$7}x)`,
                          }),
                        ],
                      }),
                      (0, Z.jsx)(C_e, { className: `flex-1`, isActive: a }),
                      (0, Z.jsx)(Ove, {}),
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `w-64 border-l border-border bg-card flex flex-col`,
                children: [
                  o &&
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 px-3 py-2 border-b border-border`,
                      children: [
                        (0, Z.jsx)(ss, { className: `h-3 w-3 text-primary` }),
                        (0, Z.jsx)(`span`, {
                          className: `text-[11px] text-primary/80 font-medium`,
                          children: `State Machine Properties`,
                        }),
                      ],
                    }),
                  (0, Z.jsx)(Lr, {
                    className: `flex-1`,
                    children: o
                      ? (0, Z.jsxs)(`div`, {
                          className: `p-3 space-y-3`,
                          children: [
                            (0, Z.jsx)(vve, { selectedStateId: te }),
                            (0, Z.jsx)(`div`, {
                              className: `border-t border-border`,
                            }),
                            (0, Z.jsx)(yve, { selectedTransitionId: U }),
                            (0, Z.jsx)(`div`, {
                              className: `border-t border-border`,
                            }),
                            (0, Z.jsx)(bve, {}),
                          ],
                        })
                      : (0, Z.jsxs)(`div`, {
                          className: `flex flex-col`,
                          children: [
                            (0, Z.jsx)(t9, {
                              title: `Animation Properties`,
                              defaultOpen: !0,
                              children: (0, Z.jsx)(Sve, {
                                sessionId: e,
                                scope: O,
                                assetId: Ne,
                                animation: Me,
                                onChanged: w,
                                onDeleted: async () => {
                                  (await w(), z(null));
                                },
                              }),
                            }),
                            !Ae &&
                              (0, Z.jsxs)(Z.Fragment, {
                                children: [
                                  (0, Z.jsx)(t9, {
                                    title: `Bones`,
                                    defaultOpen: !0,
                                    openOn: se,
                                    children: (0, Z.jsx)(q_e, {}),
                                  }),
                                  (0, Z.jsx)(t9, {
                                    title: `Motion Settings`,
                                    children: (0, Z.jsx)(D_e, {}),
                                  }),
                                  (0, Z.jsx)(t9, {
                                    title: `IK Targets`,
                                    badge:
                                      et.ik &&
                                      (0, Z.jsx)(n9, {
                                        layer: `IK controllers`,
                                      }),
                                    children: (0, Z.jsx)(Y_e, {}),
                                  }),
                                ],
                              }),
                            (0, Z.jsx)(t9, {
                              title: `Cut Clip`,
                              children: (0, Z.jsx)(Q_e, {
                                sessionId: e,
                                scope: O,
                                assetId: Ne,
                                animationId: D,
                                onPrepareSource: Ae ? void 0 : st,
                                onCreated: async (e, t) => {
                                  (await w(),
                                    Ae ? t && H(t) : (z(e), t && V(t)));
                                },
                              }),
                            }),
                            (0, Z.jsx)(t9, {
                              title: `Retarget`,
                              children: (0, Z.jsx)($_e, {
                                sessionId: e,
                                scope: O,
                                sourceAssetId: Ne,
                                animation: Me,
                                characters: T,
                                animationPlan: C,
                                onRetargeted: async (e, t) => {
                                  (await w(), z(e), t && V(t), ee(!0));
                                },
                                onRefresh: w,
                              }),
                            }),
                            !Ae &&
                              (0, Z.jsxs)(Z.Fragment, {
                                children: [
                                  (0, Z.jsx)(t9, {
                                    title: `Root Motion`,
                                    children: (0, Z.jsx)(tve, {
                                      animationId: D,
                                      boneNames: oe,
                                    }),
                                  }),
                                  (0, Z.jsx)(t9, {
                                    title: `Stabilize`,
                                    children: (0, Z.jsx)(ive, {}),
                                  }),
                                  (0, Z.jsx)(t9, {
                                    title: `Rest Pose`,
                                    children: (0, Z.jsx)(nve, {}),
                                  }),
                                  (0, Z.jsx)(t9, {
                                    title: `Foot Lock`,
                                    badge:
                                      et.footLock &&
                                      (0, Z.jsx)(n9, { layer: `Foot lock` }),
                                    children: (0, Z.jsx)(Z_e, {}),
                                  }),
                                  (0, Z.jsx)(t9, {
                                    title: `Additive`,
                                    comingSoon: !0,
                                    children: (0, Z.jsx)(`div`, {
                                      className: `text-[10px] text-muted-foreground text-center py-2`,
                                      children: `Additive blending — coming soon`,
                                    }),
                                  }),
                                  (0, Z.jsx)(t9, {
                                    title: `Mirroring`,
                                    comingSoon: !0,
                                    children: (0, Z.jsx)(`div`, {
                                      className: `text-[10px] text-muted-foreground text-center py-2`,
                                      children: `Animation mirroring — coming soon`,
                                    }),
                                  }),
                                  (0, Z.jsx)(t9, {
                                    title: `Advanced`,
                                    children: (0, Z.jsx)(ave, {}),
                                  }),
                                ],
                              }),
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  t9 = ({
    title: e,
    defaultOpen: t = !1,
    comingSoon: n = !1,
    badge: r,
    openOn: i,
    children: a,
  }) => {
    let [o, s] = (0, X.useState)(t);
    return (
      (0, X.useEffect)(() => {
        i && s(!0);
      }, [i]),
      (0, Z.jsxs)(`div`, {
        className: `border-b border-border`,
        children: [
          (0, Z.jsxs)(`button`, {
            onClick: () => !n && s(!o),
            className: `w-full flex items-center justify-between px-3 py-2 text-[11px] font-medium transition-colors ${n ? `text-muted-foreground/50 cursor-default` : o ? `text-foreground/80 bg-muted/30` : `text-muted-foreground hover:text-foreground/70 hover:bg-muted/30`}`,
            children: [
              (0, Z.jsxs)(`span`, {
                className: `flex items-center gap-1.5`,
                children: [
                  e,
                  n && (0, Z.jsx)(tn, { className: `h-2.5 w-2.5` }),
                  r,
                ],
              }),
              !n &&
                (o
                  ? (0, Z.jsx)(zr, { className: `h-3 w-3` })
                  : (0, Z.jsx)(Se, { className: `h-3 w-3` })),
            ],
          }),
          o &&
            !n &&
            (0, Z.jsx)(`div`, {
              className: `min-w-0 overflow-hidden px-3 pb-3 pt-1`,
              children: a,
            }),
        ],
      })
    );
  },
  n9 = ({ layer: e }) =>
    (0, Z.jsxs)(`span`, {
      className: `inline-flex items-center gap-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-1.5 py-px text-[9px] font-medium text-emerald-300`,
      title: `${e} are baked into the clip the game plays. They stay editable — any change re-arms Apply.`,
      children: [(0, Z.jsx)(Ve, { className: `h-2.5 w-2.5` }), `baked`],
    }),
  Dve = [`Timeline`, `Curves`, `Events`, `Notifies`],
  Ove = () => {
    let [e, t] = (0, X.useState)(`Timeline`);
    return (0, Z.jsx)(`div`, {
      className: `flex items-center border-t border-border px-2`,
      children: Dve.map((n) =>
        (0, Z.jsxs)(
          `button`,
          {
            onClick: () => n === `Timeline` && t(n),
            className: `px-3 py-1.5 text-[11px] font-medium transition-colors border-b-2 ${e === n ? `text-foreground border-primary` : n === `Timeline` ? `text-muted-foreground border-transparent hover:text-foreground/70` : `text-muted-foreground/50 border-transparent cursor-default`}`,
            title: n === `Timeline` ? void 0 : `Coming soon`,
            children: [
              n,
              n !== `Timeline` &&
                (0, Z.jsx)(`span`, {
                  className: `ml-1 text-[8px] text-muted-foreground/50 align-top`,
                  children: `soon`,
                }),
            ],
          },
          n,
        ),
      ),
    });
  };
