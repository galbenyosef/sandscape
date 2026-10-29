// SceneEditor-NC7_0wmu 100 — current
// Lines 46396-47841 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var oT = ({
  scenes: e,
  sessionDir: t,
  onLoadScene: n,
  onSaveScene: r,
  onOpenKitGenerator: i,
  onRegisterFlush: a,
  isActive: s,
  sceneReloadSignal: c,
}) => {
  let { portalTarget: l, requestedAsset: u, consumeRequestedAsset: d } = Yi(),
    f = (0, J.useRef)(null),
    p = (0, J.useRef)(null),
    m = (0, J.useRef)(null),
    h = (0, J.useRef)(null),
    g = (0, J.useRef)(null),
    _ = (0, J.useCallback)((e) => {
      let t = e.userData?.modelPath;
      typeof t == `string` && t && g.current?.(e, t);
    }, []),
    v = (0, J.useRef)(null),
    y = (0, J.useRef)(null),
    b = (0, J.useRef)(null),
    {
      historyRef: x,
      execute: S,
      undo: C,
      redo: w,
      clear: T,
      markClean: E,
      isDirty: D,
    } = Js(),
    O = X((e) => e.activeSceneName),
    k = X((e) => e.scenes),
    A = X(to),
    M = X((e) => e.setScenes),
    N = X((e) => e.setActiveSceneName),
    P = X((e) => e.setSelectedObjectUuid),
    F = X((e) => e.setSelectedObjectUuids),
    ee = X((e) => e.setObjectsEditorVisible),
    I = X((e) => e.incrementSceneGraphVersion),
    te = X((e) => e.incrementObjectChangeVersion),
    ne = X((e) => e.activeMaterialUuid),
    L = X((e) => e.materialEditorOpen),
    R = X((e) => e.openMaterialEditor),
    re = X((e) => e.closeMaterialEditor),
    ie = X((e) => e.setActiveMaterialUuid);
  (X((e) => e.procPaintMode),
    X((e) => e.procBrushZone),
    X((e) => e.procBrushSize),
    X((e) => e.procLayout));
  let z = X((e) => e.procZoneMap),
    ae = X((e) => e.procParams),
    oe = X((e) => e.procParams.ceilings),
    se = X((e) => e.procParams.placeProps),
    ce = X((e) => e.procParams.lightSockets),
    le = X((e) => e.procParams.wallSockets),
    ue = X((e) => e.procParams.wallSocketStride),
    de = X((e) => e.procParams.lightSocketArenaStride),
    fe = X((e) => e.procParams.lightSocketCorridorStride),
    pe = X((e) => e.procParams.lightSocketSize),
    he = X((e) => e.procParams.perCellTiling),
    ge = X((e) => e.procParams.placeColumns),
    B = X((e) => e.procParams.arenaColumnStride),
    _e = X((e) => e.procParams.structuralBreakup),
    ve = X((e) => e.procParams.columnStride),
    ye = X((e) => e.procParams.floorCeilingDetail),
    be = X((e) => e.procParams.procLighting),
    xe = X((e) => e.procParams.procLightIntensity);
  J.useMemo(
    () => wa(z, ae.gridWidth, ae.gridDepth),
    [z, ae.gridWidth, ae.gridDepth],
  );
  let Se = (0, J.useRef)(null),
    Ce = (0, J.useRef)(null),
    we = (0, J.useRef)(null);
  ((0, J.useEffect)(
    () => () => {
      Se.current && clearTimeout(Se.current);
    },
    [],
  ),
    (0, J.useCallback)((e) => {
      let t = X.getState();
      (t.setProcZoneMap(e),
        t.procPaintMode &&
          t.procLivePaint &&
          (Se.current && clearTimeout(Se.current),
          (Se.current = setTimeout(() => {
            ((Se.current = null), we.current?.());
          }, 350))));
    }, []),
    (0, J.useCallback)(() => {
      X.getState().setProcPaintMode(!1);
    }, []));
  let [Ee, De] = (0, J.useState)(!1),
    [Oe, ke] = (0, J.useState)(`object`),
    Ae = [`object`],
    V = (0, J.useRef)(0),
    je = (0, J.useRef)(null),
    Me = (0, J.useRef)(!1),
    Ne = (0, J.useRef)(!1),
    Pe = (0, J.useRef)(!1),
    [Fe, Ie] = (0, J.useState)(!1);
  (0, J.useEffect)(() => {
    if (!t) return;
    let e = !1;
    return (
      Ie(!1),
      j
        .getScenes(t)
        .then((t) => {
          e || (t.success && M(iT(t.scenes)), Ie(!0));
        })
        .catch(() => {
          e || Ie(!0);
        }),
      () => {
        e = !0;
      }
    );
  }, [t, M]);
  let Le = X((e) => e.objectChangeVersion),
    Re = X((e) => e.sceneGraphVersion),
    ze = (0, J.useRef)({ uuid: null, object: null }),
    Be = J.useMemo(() => {
      if (!A || !f.current)
        return ((ze.current = { uuid: null, object: null }), null);
      let e = ze.current;
      if (e.uuid === A && e.object && e.object.parent) return e.object;
      let t = f.current.getObjectByProperty(`uuid`, A) ?? null;
      return ((ze.current = { uuid: A, object: t }), t);
    }, [A, Le, Re]),
    H = (0, J.useCallback)(() => {
      te();
    }, [te]),
    Ve = (0, J.useCallback)(() => {
      I();
    }, [I]),
    He = (0, J.useRef)(null),
    U = (0, J.useRef)(null),
    Ue = (0, J.useRef)(!1),
    We = (0, J.useRef)(0),
    Ge = (0, J.useRef)(0),
    Ke = (0, J.useRef)(() => {}),
    W = (0, J.useCallback)(async () => {
      if (!f.current || !O || Me.current || Ne.current || Pe.current) return;
      let e = X.getState(),
        n = e.activeSceneId;
      if (!n) throw Error(`Load a scene before saving its edits`);
      rT(f.current, {
        source: e.environmentSource,
        assetPath: e.environmentHdrUrl,
        useAsBackground: e.environmentAsBackground,
        toneMappingExposure: e.toneMappingExposure,
      });
      let i = f.current;
      ((i.userData.sandscapePivot = { version: 2, policy: `per-type` }),
        sv(i),
        delete i.userData.sandscapeProcgen);
      let a = e.procZoneMap,
        o = !Ta(a);
      if (e.procLayout) {
        let t = {
          version: 3,
          layout: { ...e.procLayout, seedLocked: e.procSeedLocked },
          overrides: Lv(i, e.procLayout),
          zoneMap: o ? a : void 0,
        };
        i.userData.sandscapeProcgen = t;
      } else o && (i.userData.sandscapeProcgen = { version: 3, zoneMap: a });
      let s = X.getState(),
        c = `${s.objectChangeVersion}|${s.sceneGraphVersion}`,
        l = [];
      for (let e of [...i.children])
        e.userData.proc &&
          !(e.userData.assetId && e.userData.modelPath) &&
          l.push({ node: e, index: i.children.indexOf(e) });
      for (let e of l) i.remove(e.node);
      let u,
        d = null;
      try {
        ((u = ag(i)),
          (d = Wi(
            l.map((e) => e.node),
            { source: O, seed: e.procLayout?.seed },
          )));
      } finally {
        l.sort((e, t) => e.index - t.index);
        for (let e of l)
          (i.children.splice(Math.min(e.index, i.children.length), 0, e.node),
            (e.node.parent = i));
      }
      let p = await r(O, u, n),
        m = d
          ? `${O}|${JSON.stringify(i.userData.sandscapeProcgen ?? null)}`
          : null;
      if (p.success && d && m !== je.current)
        try {
          let e = Hi(p.scene_name || O),
            n = await j.getScenes(t);
          if (!n.success)
            throw Error(`Could not resolve the companion scene identity`);
          let i = n.scenes.find((t) => t.scene_name === e),
            a = await r(e, d, i?.asset_id);
          a.success
            ? (je.current = m)
            : console.warn(`[blockout-bake] companion bake rejected:`, a);
        } catch (e) {
          console.warn(`[blockout-bake] companion bake not written:`, e);
        }
      if (!p.success) {
        let e = p.error ?? p.detail ?? `The server rejected the scene save`;
        throw Error(e);
      }
      let h = X.getState();
      (h.activeSceneId === n &&
        `${h.objectChangeVersion}|${h.sceneGraphVersion}` === c &&
        E(),
        h.activeSceneId === n &&
          typeof p.modified == `number` &&
          (He.current = p.modified));
    }, [O, r, E, t]),
    qe = (0, J.useCallback)(() => {
      if (U.current) return U.current;
      let e = W().finally(() => {
        ((U.current = null), Ue.current && ((Ue.current = !1), Ke.current()));
      });
      return ((U.current = e), e);
    }, [W]),
    Je = (0, J.useCallback)(
      async (e, t = {}) => {
        if (!f.current) return;
        Se.current &&= (clearTimeout(Se.current), null);
        let r = ++V.current;
        De(!0);
        try {
          let i =
              t.assetId ??
              X.getState().scenes.find(
                (t) => t.scene_name === e || t.name === e,
              )?.asset_id,
            a = await n(e, i);
          if (r !== V.current || !f.current) return;
          if (a.success && a.scene_data) {
            let n = await new Xe().parseAsync(a.scene_data);
            if (r !== V.current || !f.current) return;
            if (t.silent && D()) {
              ((Ue.current = !0),
                o.info(
                  `A newer version of this scene is available — save or discard your changes to load it.`,
                ));
              return;
            }
            let s = [];
            if (
              (f.current.children.forEach((e) => {
                e.userData.editorOnly && s.push(e);
              }),
              f.current.children
                .filter((e) => !e.userData.editorOnly)
                .forEach((e) => og(e)),
              f.current.background instanceof me &&
                !f.current.background.userData?.editorManaged &&
                f.current.background.dispose(),
              f.current.clear(),
              s.forEach((e) => f.current.add(e)),
              n instanceof bt)
            ) {
              (f.current.copy(n, !1),
                (f.current.uuid = n.uuid),
                n.children.slice().forEach((e) => {
                  f.current.add(e);
                }));
              let e = nT(n);
              n.userData.sandscapeEnvironment && rT(f.current, e);
              let t = X.getState();
              (t.setEnvironmentSource(e.source),
                t.setEnvironmentHdrUrl(e.assetPath),
                t.setEnvironmentAsBackground(e.useAsBackground),
                t.setToneMappingExposure(e.toneMappingExposure));
              {
                let e = X.getState();
                ct.current = `${e.environmentSource}|${e.environmentHdrUrl}|${e.environmentAsBackground}|${e.toneMappingExposure}`;
              }
            } else f.current.add(n);
            let c = [];
            f.current.traverse((e) => {
              !e.userData.editorOnly && rg(e) && c.push(e);
            });
            let l = X.getState().scenes.find(
                (t) => t.scene_name === e || t.name === e,
              )?.modified,
              u = c.filter(
                (e) => e.userData?.modelPath && !yg(e.userData?.pivot),
              ).length;
            for (let e of c) {
              let t = e.userData.modelPath;
              if (typeof t != `string` || !t) continue;
              l != null && (e.userData.assetModified = l);
              let n = new Lt(1, 1, 1),
                r = Tg(j_(e));
              n.translate(r.x, r.y, r.z);
              let i = new G(n, new Te({ color: 8947848, wireframe: !0 }));
              ((i.name = `${e.name || `Asset`} (loading)`),
                (i.userData.editorOnly = !0),
                (i.userData.editorAssetPlaceholder = !0),
                e.add(i),
                g.current?.(e, t));
            }
            u > 0 &&
              (console.info(
                `[SceneEditor] re-origined ${u} asset(s) to their per-type pivot; save to persist the corrected transforms.`,
              ),
              o.info(
                `Updated ${u} asset${u === 1 ? `` : `s`} to the new pivot convention. Nothing moved — save to keep it.`,
              ));
            let d = typeof a.modified == `number` ? a.modified : l;
            d != null && (He.current = d);
            let p = n.userData?.sandscapeProcgen ?? null,
              m = X.getState();
            if (p && p.layout) {
              let e = { ...$i, ...p.layout.params },
                t = ka(p.zoneMap ?? p.layout.zones ?? null) ?? null,
                n = {
                  ...p.layout,
                  params: e,
                  pivots: p.layout.pivots ?? {},
                  cells: Va(p.layout.cells ?? []),
                  ...(p.layout.zones ? { zones: t ?? p.layout.zones } : {}),
                };
              (m.setProcLayout(n),
                m.setProcSeed(n.seed),
                m.setProcSeedLocked(!!n.seedLocked),
                m.setProcMode(n.mode),
                m.setProcGenerator(n.generator),
                m.setProcZoneMap(t),
                m.setProcParams(e));
              let r = new Set();
              f.current.traverse((e) => {
                let t = e.userData?.layoutPieceId;
                t && e.userData?.assetId && e.userData?.modelPath && r.add(t);
              });
              let i = p.overrides || {},
                a = p.version ?? 1;
              if (a < 2) {
                let e = $v(n, i);
                ((i = e.overrides),
                  console.info(
                    `[SceneEditor] procgen blob v${a} -> v2: corrected ${e.corrected} piece override(s) to the min-corner pivot` +
                      (e.dropped
                        ? `, dropped ${e.dropped} whose piece no longer exists`
                        : ``),
                  ));
              }
              if (a < 3) {
                let e = Qv(i);
                ((i = e.overrides),
                  e.dropped &&
                    console.info(
                      `[SceneEditor] procgen blob v${a} -> v3: dropped ${e.dropped} gameplay-marker transform override(s) — a marker is now a point at its icon centre, so each is back on the tile it marks`,
                    ));
              }
              Rv(n, i, r).forEach((e) => f.current.add(e));
            } else
              (m.resetProcgen(), p?.zoneMap && m.setProcZoneMap(ka(p.zoneMap)));
            return (
              T(),
              X.getState().clearSceneEditorMetadata(),
              X.setState({ activeSceneId: a.asset_id ?? i ?? null }),
              N(e),
              P(null),
              I(),
              b.current?.(),
              !0
            );
          }
        } catch (e) {
          console.error(`Failed to load scene:`, e);
        } finally {
          r === V.current && De(!1);
        }
      },
      [n, T, N, P, I, D],
    ),
    Ye = (0, J.useCallback)(
      async (e) => {
        let { activeSceneId: n, activeSceneName: r } = X.getState();
        if (!(!r || !n || Pe.current)) {
          Pe.current = !0;
          try {
            await U.current?.catch(() => {});
            let i = await j.restoreScene(t, r, e, n);
            if (!i.success) {
              o.error(i.error || `Could not restore that version`);
              return;
            }
            (X.getState().activeSceneId === n &&
              (E(), await Je(r, { assetId: n })),
              i.error ? o.warning(i.error) : o.success(`Scene restored`));
          } catch (e) {
            (console.error(`Failed to restore scene:`, e),
              o.error(`Could not restore that version`));
          } finally {
            ((Pe.current = !1),
              Ue.current && ((Ue.current = !1), Ke.current()));
          }
        }
      },
      [t, E, Je],
    ),
    Ze = (0, J.useCallback)(() => {
      (V.current++, De(!1), (He.current = null));
      let e = f.current;
      if (e) {
        let t = e.children.filter((e) => e.userData.editorOnly);
        (e.children.filter((e) => !e.userData.editorOnly).forEach((e) => og(e)),
          e.clear(),
          t.forEach((t) => e.add(t)),
          delete e.userData[I_]);
      }
      (X.getState().resetProcgen(), T(), N(null), P(null), I(), b.current?.());
    }, [T, N, P, I]),
    Qe = (0, J.useCallback)(
      async (e) => {
        let n = X.getState(),
          r = n.scenes.find((t) => t.scene_name === e || t.name === e),
          i = n.activeSceneName === e;
        i && (Ne.current = !0);
        try {
          let a = await j.deleteScene(t, e, r?.asset_id);
          if (!a.success) {
            o.error(a.error || `Could not delete that scene`);
            return;
          }
          i && E();
          let s = n.scenes.filter((e) => e !== r);
          (n.setScenes(s),
            i &&
              (s.length
                ? (await tt.current(s[0].scene_name, { silent: !0 }),
                  N(s[0].scene_name))
                : Ze()),
            o.success(`Deleted "${e}"`));
        } catch (e) {
          (console.error(`Failed to delete scene:`, e),
            o.error(`Could not delete that scene`));
        } finally {
          (i && (Ne.current = !1),
            Ue.current && ((Ue.current = !1), Ke.current()));
        }
      },
      [t, E, Ze, N],
    ),
    $e = (0, J.useCallback)(
      async (e, n) => {
        let r = n.trim();
        if (r === e) return !0;
        if (!r) return (o.error(`A level needs a name`), !1);
        let i = X.getState(),
          a = i.scenes.find((t) => t.scene_name === e || t.name === e),
          s = aT(r);
        if (!s || s === `.json`)
          return (o.error(`That name cannot be used for a level`), !1);
        if (Ui(s))
          return (
            o.error(`"…blockout" is reserved for generated bake files`),
            !1
          );
        if (i.scenes.some((e) => e !== a && aT(e.scene_name) === s))
          return (o.error(`A level named "${r}" already exists`), !1);
        let c = i.activeSceneName === e;
        if (c && D())
          try {
            await qe();
          } catch (e) {
            return (
              console.error(`Failed to save before rename:`, e),
              o.error(`Could not save pending changes — rename cancelled`),
              !1
            );
          }
        Me.current = !0;
        try {
          let n = await j.renameScene(t, e, r, a?.asset_id);
          if (!n.success)
            return (o.error(n.error || `Could not rename that level`), !1);
          let i = X.getState(),
            s = a?.asset_id;
          return (
            i.setScenes(
              i.scenes.map((t) =>
                (s ? t.asset_id === s : t.scene_name === e)
                  ? { ...t, scene_name: r }
                  : t,
              ),
            ),
            c && (N(r), (je.current = null)),
            n.warning ? o.warning(n.warning) : o.success(`Renamed to "${r}"`),
            !0
          );
        } catch (e) {
          return (
            console.error(`Failed to rename scene:`, e),
            o.error(`Could not rename that level`),
            !1
          );
        } finally {
          ((Me.current = !1), Ue.current && ((Ue.current = !1), Ke.current()));
        }
      },
      [t, D, qe, N],
    ),
    et = (0, J.useCallback)(
      async (e) => {
        if (f.current) {
          if (O && D())
            try {
              await qe();
            } catch (e) {
              console.error(`Failed to save before scene switch:`, e);
            }
          await Je(e);
        }
      },
      [Je, O, D, qe],
    );
  (0, J.useEffect)(() => {
    if (s === !1 || !Fe) return;
    let e = d(`level`);
    if (!e) return;
    let t = k.find(
      (t) =>
        t.scene_name === e.assetId ||
        t.name === e.assetId ||
        t.asset_id === e.assetId,
    );
    if (t) {
      et(t.scene_name || t.name || ``);
      return;
    }
    o.info(`Open “${e.assetId}” from the Level Editor sidebar`, {
      description: `Only scenes open directly; env maps, worlds and HDRIs are applied from the asset browser.`,
    });
  }, [s, Fe, u, d, k, et]);
  let tt = (0, J.useRef)(Je);
  tt.current = Je;
  let nt = (0, J.useCallback)(
    async (e = {}) => {
      if (!t) return;
      if (U.current || Me.current || Ne.current || Pe.current) {
        Ue.current = !0;
        return;
      }
      let n = ++We.current,
        r = X.getState().activeSceneId,
        i = null;
      try {
        let e = await j.getScenes(t);
        e.success
          ? (i = iT(e.scenes))
          : console.warn(`[SceneEditor] scene list refresh refused:`, e.error);
      } catch (e) {
        console.warn(
          `[SceneEditor] scene list refresh failed, keeping the stale list:`,
          e,
        );
      }
      if (n !== We.current) return;
      if (U.current || Me.current || Ne.current || Pe.current) {
        Ue.current = !0;
        return;
      }
      if (!i) return;
      M(i);
      let a = X.getState();
      if (a.activeSceneId !== r) return;
      let s = a.activeSceneName;
      if (!s || !a.activeSceneId) return (e.force && on.clear(), !0);
      let c = eT(i, a.activeSceneId, D(), He.current, !!e.force),
        l = c.entry;
      if ((l && l.scene_name !== s && N(l.scene_name), c.action === `deleted`))
        return (e.force && on.clear(), Ze(), !0);
      if (c.action === `deleted-dirty`) {
        o.info(
          `This scene was deleted elsewhere. Your unsaved edits remain in this tab.`,
        );
        return;
      }
      if (c.action === `conflict`) {
        ((Ue.current = !0),
          o.info(
            `A newer version of this scene is available — save or discard your changes to load it.`,
          ));
        return;
      }
      if (c.action === `unchanged`) return !0;
      if (l)
        return (
          e.force && on.clear(),
          (await tt.current(l.scene_name, {
            silent: !0,
            assetId: l.asset_id,
          })) && n === We.current
        );
    },
    [t, M, D, Ze, N],
  );
  ((0, J.useEffect)(
    () => () => {
      We.current++;
    },
    [t],
  ),
    (0, J.useEffect)(() => {
      if (c === void 0) return;
      let e = c.assetRevision !== Ge.current;
      nt({ force: e }).then((e) => {
        e && !Ue.current && !D() && (Ge.current = c.assetRevision);
      });
    }, [c]),
    (Ke.current = () => {
      nt({ force: c !== void 0 && c.assetRevision !== Ge.current }).then(
        (e) => {
          e && c && !Ue.current && !D() && (Ge.current = c.assetRevision);
        },
      );
    }));
  let rt = (0, J.useRef)(s);
  ((0, J.useEffect)(() => {
    let e = rt.current === !1 && s === !0;
    ((rt.current = s), e && Ke.current());
  }, [s]),
    nc({ isDirty: D, onSave: qe, debounceMs: 3e3, enabled: !!O && !Ee }));
  let it = X((e) => e.environmentSource),
    at = X((e) => e.environmentHdrUrl),
    ot = X((e) => e.environmentAsBackground),
    st = X((e) => e.toneMappingExposure),
    ct = (0, J.useRef)(``),
    lt = (0, J.useRef)(qe);
  lt.current = qe;
  let ut = (0, J.useRef)(D);
  ut.current = D;
  let dt = (0, J.useRef)(O);
  ((dt.current = O),
    (0, J.useEffect)(() => {
      a?.(() => {
        dt.current && ut.current() && lt.current();
      });
    }, [a]),
    (0, J.useEffect)(() => {
      let e = `${it}|${at}|${ot}|${st}`;
      if (ct.current === ``) {
        ct.current = e;
        return;
      }
      if (ct.current === e || !O || Ee) return;
      ct.current = e;
      let t = setTimeout(() => lt.current(), 3e3);
      return () => clearTimeout(t);
    }, [it, at, ot, st, O, Ee]));
  let ft = (0, J.useCallback)(
      (e) => {
        !f.current ||
          !x.current ||
          (S(new Bh(f.current, H, e)), Ve(), P(e.uuid));
      },
      [S, H, Ve, P],
    ),
    pt = (0, J.useCallback)(
      (e) => {
        let t = f.current;
        if (!t || !x.current) return;
        let n = pv(
          e
            .map((e) => t.getObjectByProperty(`uuid`, e))
            .filter((e) => !!e && !e.userData.editorOnly && !e.userData.locked),
        );
        if (n.length === 0) return;
        let { doors: r, rest: i } = ly(n),
          a = r.length ? cy(t, H, r) : null,
          o = a ? i : n,
          s = o.map((e) => new Vh(t, H, e));
        if ((a && s.push(a), s.length !== 0)) {
          if (s.length === 1 && !a) S(s[0]);
          else {
            let e = new Uh(t, H, s);
            ((e.name =
              a && !o.length
                ? a.name
                : `Remove ${o.length + r.length} Objects`),
              (e.changesSceneGraph = !0),
              S(e));
          }
          (Ve(), P(null));
        }
      },
      [S, H, Ve, P],
    );
  ((Ce.current = (0, J.useCallback)(() => {
    if (!f.current) return;
    Se.current &&= (clearTimeout(Se.current), null);
    let e = X.getState(),
      t = dC(e.procGenerator);
    if (t) {
      e.setProcIsGenerating(!0);
      try {
        let n = e.procLayout,
          r = [];
        if (e.procPreserveEdits && n) {
          let e = new Set();
          (Mv(f.current).forEach((t) => {
            t.userData.locked && t.userData.cellId && e.add(t.userData.cellId);
          }),
            (r = n.cells
              .filter((t) => e.has(t.id))
              .map((e) => ({ ...e, locked: !0 }))));
        }
        let i = wa(
            e.procZoneMap,
            e.procParams.gridWidth,
            e.procParams.gridDepth,
          ),
          a = e.procZoneMap,
          s = e.procPreserveEdits ? i : Da(i),
          c = t.generate(e.procSeed, e.procMode, e.procParams, {
            lockedCells: r,
          });
        ((c.seedLocked = e.procSeedLocked), (c.pivots = { ...T_ }));
        let l = Va((n?.cells ?? []).filter((e) => e.id.startsWith(`paint:`)));
        if (c.cells.length === 0 && l.length === 0) {
          o.error(
            `Generation produced an empty level — try a larger grid or smaller rooms.`,
          );
          return;
        }
        ((c.cells = [...l, ...c.cells]), (c.zones = Ta(s) ? void 0 : s));
        let u = Gv(f.current, H, c, n, {
          preserveLocked: e.procPreserveEdits,
          preserveEdits: e.procPreserveEdits,
          setLayout: (e) => {
            let t = X.getState();
            (t.setProcLayout(e), t.setProcZoneMap(e === c ? s : a));
          },
        });
        (S(u), Ve(), b.current?.(), P(null));
      } finally {
        X.getState().setProcIsGenerating(!1);
      }
    }
  }, [S, H, Ve, P])),
    (we.current = (0, J.useCallback)(() => {
      if (!f.current) return;
      Se.current &&= (clearTimeout(Se.current), null);
      let e = X.getState(),
        t = e.procParams,
        n = ka(wa(e.procZoneMap, t.gridWidth, t.gridDepth));
      n !== e.procZoneMap && e.setProcZoneMap(n);
      let r = e.procLayout,
        i = (r?.cells ?? []).filter((e) => !e.id.startsWith(`paint:`)),
        a = Ua(n, t),
        o = !!(
          n.walls?.length ||
          n.doors?.length ||
          n.opens?.length ||
          ra.some((e) => da(n, e)?.length)
        );
      if (!i.length && !a.length && !o) return;
      let s = {
          version: 1,
          generator: r?.generator ?? e.procGenerator,
          mode: r?.mode ?? e.procMode,
          seed: r?.seed ?? e.procSeed,
          seedLocked: e.procSeedLocked,
          params: t,
          cells: [...a, ...i],
          connections: r?.connections ?? [],
          zones: Ta(n) ? void 0 : n,
          pivots: r ? r.pivots : { ...T_ },
        },
        c = r?.zones ?? null,
        l = Ta(n) ? null : n,
        u = qv(f.current, H, s, r, {
          onApply: () => {
            let e = X.getState();
            (e.setProcLayout(s), e.setProcZoneMap(l));
          },
          onRevert: () => {
            let e = X.getState();
            (e.setProcLayout(r), e.setProcZoneMap(c));
          },
        });
      if (!u.changesSceneGraph && l === c) return;
      (S(u), Ve(), b.current?.());
      let d = to(X.getState());
      d && !f.current.getObjectByProperty(`uuid`, d) && P(null);
    }, [S, H, Ve, P])),
    (0, J.useCallback)(() => {
      let e = X.getState(),
        t = Ea(
          wa(e.procZoneMap, e.procParams.gridWidth, e.procParams.gridDepth),
        );
      (e.setProcZoneMap(t), we.current?.());
    }, []));
  let mt = `${ce}|${le}|${ue}|${de}|${fe}|${pe}`,
    ht = `${_e}|${ve}|${ye}|${ge}|${B}`,
    gt = (0, J.useRef)(`${oe}|${se}|${mt}|${he}|${ht}`),
    _t = (0, J.useRef)(oe),
    vt = (0, J.useRef)(ye),
    yt = (0, J.useRef)(ge);
  ((0, J.useEffect)(() => {
    let e = `${oe}|${se}|${mt}|${he}|${ht}`;
    if (gt.current === e) return;
    let t = _t.current !== oe,
      n = vt.current !== ye,
      r = yt.current !== ge;
    if (!f.current || Ee) return;
    ((gt.current = e), (_t.current = oe), (vt.current = ye), (yt.current = ge));
    let i = f.current,
      a = X.getState(),
      o = a.procLayout;
    if (!o) return;
    let s = { ...o, params: { ...a.procParams } },
      c = (e) => X.getState().setProcLayout(e),
      l = qv(i, H, s, o, { onApply: () => c(s), onRevert: () => c(o) }),
      u = [],
      d = [],
      p = [],
      m = (e, t, n) => {
        if (e)
          for (let e of Mv(i))
            t.includes(e.userData.procKind) &&
              e.userData.assetId &&
              ((n ? d : u).push(e.uuid), n && e.visible === !1 && p.push(e));
      };
    (m(t, [`ceiling`], oe),
      m(n, [`floor_insert`], ye),
      m(r, [`pillar`], ge),
      u.length && ee(u, !1),
      d.length && ee(d, !0));
    let h = [
      ...(l.changesSceneGraph ? [l] : []),
      ...p.map((e) => new Gh(i, H, e, !0)),
    ];
    h.length &&
      (S(h.length === 1 ? h[0] : new Uh(i, H, h)), Ve(), b.current?.());
  }, [oe, se, mt, he, ht, ye, ge, Ee, S, H, Ve, ee]),
    (0, J.useEffect)(() => {
      !f.current ||
        Ee ||
        (_w(f.current, X.getState().procParams), b.current?.());
    }, [be, xe, Re, Ee]),
    (0, J.useCallback)(() => {
      if (!f.current) return;
      Se.current &&= (clearTimeout(Se.current), null);
      let e = X.getState(),
        t = Jv(f.current, H, e.procLayout, (e) =>
          X.getState().setProcLayout(e),
        );
      (S(t), Ve(), b.current?.(), P(null));
    }, [S, H, Ve, P]),
    (0, J.useCallback)(() => {
      if (!f.current) return;
      let e = X.getState();
      if (!e.procLayout) return;
      let t = Zv(
        f.current,
        H,
        e.procLayout,
        T_,
        (e) => X.getState().setProcLayout(e),
        _,
      );
      if (!t) {
        o.info(`Nothing to re-pivot.`);
        return;
      }
      (S(t.command),
        Ve(),
        b.current?.(),
        P(null),
        o.success(
          `Re-pivoted ${t.changed} piece${t.changed === 1 ? `` : `s`}. Nothing moved.`,
        ));
    }, [S, H, Ve, P, _]),
    (0, J.useCallback)(() => {
      if (!f.current) return;
      let e = to(X.getState());
      if (!e) return;
      let t = f.current.getObjectByProperty(`uuid`, e);
      if (!t || !t.userData.proc) return;
      let n = t.userData.cellId,
        r = !t.userData.locked,
        i = Mv(f.current).filter((e) => e.userData.cellId === n);
      if (!i.length) return;
      let a = new Uh(
        f.current,
        H,
        i.map((e) => new Wh(f.current, H, e, `locked`, r)),
      );
      ((a.name = r ? `Lock Region` : `Unlock Region`), S(a), b.current?.());
    }, [S, H]),
    (0, J.useCallback)(
      (e) => {
        if (!f.current) return;
        let t = X.getState();
        if (!t.procLayout) return;
        let n = wC(t.procKitManifest ?? xC, t.procAssetPack),
          r = t.procLayout.params,
          i = {};
        for (let e of t.procLayout.cells) i[e.id] = e.kind;
        let a = VC(
          f.current,
          n,
          t.procSeed,
          void 0,
          {
            cellSize: r.cellSize,
            wallHeight: r.wallHeight,
            arenaHeightMult: r.arenaHeightMult,
            cellKinds: i,
            variation: t.procParams.kitTileVariation,
            density: t.procParams.kitTileDensity,
            enabled: t.procParams.kitTiling ?? !0,
          },
          e,
        );
        if (!a.length) {
          o.error(
            e
              ? `No grey-box "${e}" pieces to replace (already assets, or none in this layout).`
              : `No matching kit assets — pick a kit, or add GLBs to public/procgen-kit/.`,
          );
          return;
        }
        let s = HC(f.current, H, a);
        (S(s),
          Ve(),
          a.forEach((e) => g.current?.(e.wrapper, e.modelPath)),
          b.current?.(),
          P(null));
      },
      [S, H, Ve, P],
    ),
    (0, J.useCallback)(
      (e) => {
        if (!f.current) return;
        let t = X.getState(),
          n = wC(t.procKitManifest ?? xC, t.procAssetPack),
          r = e ? (t) => UC(t, e, n) : void 0,
          i = WC(f.current, H, r);
        if (i.commands.length === 0) {
          o.error(
            e
              ? `No asset-replaced "${e}" pieces to revert.`
              : `No asset-replaced pieces to revert.`,
          );
          return;
        }
        (S(i), Ve(), b.current?.(), P(null));
      },
      [S, H, Ve, P],
    ));
  let xt = (0, J.useCallback)(() => {
      let e = f.current;
      if (!e || !y.current) return;
      let t = X.getState()
        .selectedObjectUuids.map((t) => e.getObjectByProperty(`uuid`, t))
        .filter((e) => !!e && !e.userData.editorOnly);
      t.length > 0 && y.current(t);
    }, []),
    St = (0, J.useCallback)(
      (e) => {
        let t = f.current;
        if (!t || !x.current) return;
        let n = pv(
          e
            .map((e) => t.getObjectByProperty(`uuid`, e))
            .filter((e) => !!e && !e.userData.editorOnly),
        );
        if (n.length === 0) return;
        let { grid: r, rest: i } = gy(n),
          a = r.length ? hy(t, H, r) : null,
          s = (a ? i : n).map((e) => fv(e, t)),
          c = s.map(({ clone: e, parent: n }) => new Bh(t, H, e, n));
        if (
          (a?.command && c.push(a.command),
          a?.skipped &&
            o.error(
              a.skipped > 1
                ? `${a.skipped} pieces had no free cell to duplicate into`
                : `That piece has no free cell to duplicate into`,
            ),
          c.length === 0)
        )
          return;
        let l = s.length + (a?.placed ?? 0);
        if (c.length === 1 && !a?.command) S(c[0]);
        else {
          let e = new Uh(t, H, c);
          ((e.name = l > 1 ? `Duplicate ${l} Objects` : `Duplicate Object`),
            (e.changesSceneGraph = !0),
            S(e));
        }
        for (let { wrappers: e } of s)
          for (let t of e) {
            let e = t.userData.modelPath;
            e && g.current && g.current(t, e);
          }
        Ve();
        let u = [
          ...s.map(({ clone: e }) => e.uuid),
          ...(a?.markerLanded ?? [])
            .map((e) => Ty(t, e)?.uuid)
            .filter((e) => !!e),
          ...(a?.doorLanded ?? [])
            .map((e) => uy(t, e)?.uuid)
            .filter((e) => !!e),
        ];
        u.length && F(u);
      },
      [S, H, Ve, F],
    ),
    Ct = (0, J.useCallback)(
      (e, t) => {
        let n = f.current;
        if (!n || !x.current) return;
        let r = n.getObjectByProperty(`uuid`, e);
        if (!r || r.userData.editorOnly) return;
        let i = t ? n.getObjectByProperty(`uuid`, t) : n;
        if (
          !i ||
          (i !== n && i.userData.editorOnly) ||
          r === i ||
          r.parent === i
        )
          return;
        let a = i;
        for (; a;) {
          if (a === r) return;
          a = a.parent;
        }
        (S(new Hh(n, H, r, i, void 0, !0)), Ve());
      },
      [S, H, Ve],
    ),
    wt = (0, J.useCallback)(
      (e, t) => {
        let n = f.current;
        if (!n || !x.current) return;
        let r = n.getObjectByProperty(`uuid`, e);
        if (!r || r.userData.editorOnly) return;
        let i = $_(n, t);
        if (!i) return;
        if (rg(r)) {
          let e = J_(W_(r), { materialUuid: t });
          S(new lv(n, H, { scope: `instance`, object: r }, e, _));
          return;
        }
        let a = [];
        if (
          (r.traverse((e) => {
            e.isMesh && !e.userData.editorOnly && a.push(e);
          }),
          a.length !== 0)
        )
          if (a.length === 1) S(new kh(n, H, a[0], i));
          else {
            let e = a.map((e) => new kh(n, H, e, i));
            S(new Uh(n, H, e));
          }
      },
      [S, H, _],
    ),
    Tt = J.useMemo(() => {
      if (!ne || !f.current) return null;
      let e = null;
      return (
        f.current.traverse((t) => {
          if (e) return;
          let n = t.material;
          if (!n) return;
          let r = Array.isArray(n) ? n : [n];
          for (let t of r)
            if (t.uuid === ne) {
              e = t;
              break;
            }
        }),
        e
      );
    }, [ne, Re, Le]),
    Et = J.useMemo(() => {
      if (!Be) return null;
      let e = null;
      return (
        Be.traverse((t) => {
          if (e) return;
          let n = t;
          n.isMesh && n.geometry && (e = n.geometry);
        }),
        e
      );
    }, [Be, Re]),
    Dt = (0, J.useCallback)(
      (e) => {
        R(e);
      },
      [R],
    ),
    Ot = (0, J.useCallback)(() => {
      let e = f.current;
      if (!e || !x.current) return;
      let t = A ? e.getObjectByProperty(`uuid`, A) : null,
        n = [];
      if (
        (t?.traverse((e) => {
          e.isMesh && !e.userData.editorOnly && n.push(e);
        }),
        n.length === 0)
      ) {
        console.warn(
          `[MaterialEditor] Select a mesh first — new materials must be assigned to persist.`,
        );
        return;
      }
      let r = new Te({ color: 8421504, roughness: 0.5, metalness: 0.1 });
      r.name = `New Material`;
      let i = n.map((t) => new kh(e, H, t, r));
      (S(i.length === 1 ? i[0] : new Uh(e, H, i)), R(r.uuid));
    }, [S, H, A, R]),
    kt = (0, J.useCallback)(() => {
      let e = f.current;
      if (!e || !x.current) return;
      let t = A ? e.getObjectByProperty(`uuid`, A) : null,
        n = [];
      if (
        (t?.traverse((e) => {
          e.isMesh && !e.userData.editorOnly && n.push(e);
        }),
        n.length === 0)
      ) {
        console.warn(
          `[MaterialEditor] Select a mesh first — new shader materials must be assigned to persist.`,
        );
        return;
      }
      let r = Iw(),
        i = n.map((t) => new kh(e, H, t, r));
      (S(i.length === 1 ? i[0] : new Uh(e, H, i)), R(r.uuid));
    }, [S, H, A, R]),
    At = (0, J.useCallback)(
      (e) => {
        let t = f.current;
        if (!t || !x.current) return;
        let n = null;
        if (
          (t.traverse((t) => {
            if (n) return;
            let r = t.material;
            if (!r) return;
            let i = Array.isArray(r) ? r : [r];
            for (let t of i)
              if (t.uuid === e) {
                n = t;
                break;
              }
          }),
          !n)
        )
          return;
        let r = n.clone();
        r.name = `${n.name || n.type} Copy`;
        let i = A ? t.getObjectByProperty(`uuid`, A) : null,
          a = [];
        if (
          (i?.traverse((e) => {
            e.isMesh && !e.userData.editorOnly && a.push(e);
          }),
          a.length === 0)
        ) {
          console.warn(
            `[MaterialEditor] Duplicated material is unassigned — assign it to a mesh to persist.`,
          );
          return;
        }
        let o = a.map((e) => new kh(t, H, e, r));
        (S(o.length === 1 ? o[0] : new Uh(t, H, o)), R(r.uuid));
      },
      [S, H, A, R],
    ),
    jt = (0, J.useCallback)(async () => {
      let e = X.getState(),
        n = e.scenes,
        i = new Set(n.map((e) => aT(e.scene_name))),
        a = n.length + 1,
        o = `Level ${a}`;
      for (; i.has(aT(o));) (a++, (o = `Level ${a}`));
      let s = new bt();
      s.name = o;
      let c = s.toJSON(),
        l = await r(o, c);
      if (l.success) {
        let r = {
          asset_id: l.asset_id,
          name: l.scene_file || ``,
          path: l.scene_path || ``,
          relative_path: l.relative_path || ``,
          scene_name: o,
          size: 0,
          modified: l.modified ?? Date.now() / 1e3,
          location: `scenes`,
          session: t.split(`/`).pop() || t,
        };
        (e.setScenes([...n, r]), et(o));
      }
    }, [r, t, et]),
    Mt = (0, J.useCallback)(
      (e) => {
        let t = X.getState();
        switch (e) {
          case `undo`:
            C();
            break;
          case `redo`:
            w();
            break;
          case `translate`:
            t.setTransformMode(`translate`);
            break;
          case `rotate`:
            t.setTransformMode(`rotate`);
            break;
          case `scale`:
            t.setTransformMode(`scale`);
            break;
          case `toggleGrid`:
            t.toggleGrid();
            break;
          case `toggleSnap`:
            t.setSnapEnabled(!t.snapEnabled);
            break;
          case `toggleMagnet`:
            t.setMagnetEnabled(!t.magnetEnabled);
            break;
          case `dropToGround`:
            xt();
            break;
          case `save`:
            qe();
            break;
          case `deleteSelected`:
            t.selectedObjectUuids.length > 0 && pt(t.selectedObjectUuids);
            break;
          case `duplicate`:
            t.selectedObjectUuids.length > 0 && St(t.selectedObjectUuids);
            break;
          case `focusSelected`: {
            let e = f.current;
            if (!e || !v.current) break;
            let n = t.selectedObjectUuids
              .map((t) => e.getObjectByProperty(`uuid`, t))
              .filter((e) => !!e && !e.userData.editorOnly);
            n.length > 0 && v.current(n);
            break;
          }
        }
      },
      [C, w, qe, pt, St],
    ),
    Nt = (0, J.useCallback)(async () => {
      let [e, n] = await Promise.all([CC(), t ? cw(t) : Promise.resolve([])]),
        r = lw(e, n),
        i = X.getState();
      (i.setProcKitManifest(r),
        !(i.procAssetPack && r.packs.some((e) => e.id === i.procAssetPack)) &&
          r.packs.length &&
          i.setProcAssetPack(r.packs[0].id));
    }, [t]);
  ((0, J.useEffect)(() => {
    Nt();
    let e = () => {
      Nt();
    };
    return (
      window.addEventListener(`sandscape-kits-updated`, e),
      () => window.removeEventListener(`sandscape-kits-updated`, e)
    );
  }, [Nt]),
    (0, J.useEffect)(() => {
      A &&
        (f.current?.getObjectByProperty(`uuid`, A)?.userData?.proc ||
          ke(`object`));
    }, [A]));
  let { shortcuts: Pt, setShortcut: Ft } = tc({
      containerRef: h,
      onAction: Mt,
      enabled: s !== !1,
    }),
    It = (0, Y.jsx)(yS, {
      scenes: k,
      activeSceneName: O,
      onSelectScene: et,
      onNewScene: jt,
      onDeleteScene: Qe,
      onRenameScene: $e,
      onRestoreScene: Ye,
      sceneRef: f,
      onAddObject: ft,
      onDeleteObjects: pt,
      onDuplicateObjects: St,
      onReparentObject: Ct,
      onAssignMaterial: wt,
      onOpenMaterial: Dt,
      onCreateMaterial: Ot,
      onDuplicateMaterial: At,
      sessionDir: t,
    });
  return (0, Y.jsxs)(`div`, {
    ref: h,
    className: `flex h-full`,
    tabIndex: -1,
    children: [
      s !== !1 &&
        l &&
        (0, sr.createPortal)(
          (0, Y.jsx)(`div`, {
            className: `flex flex-col h-full`,
            "data-editor-shortcut-scope": ``,
            children: It,
          }),
          l,
        ),
      s !== !1 &&
        !l &&
        (0, Y.jsx)(`div`, {
          className: `w-56 flex-shrink-0 border-r border-border flex flex-col bg-card overflow-y-auto`,
          children: It,
        }),
      (0, Y.jsxs)(`div`, {
        className: `flex-1 flex min-w-0`,
        children: [
          (0, Y.jsxs)(Us, {
            direction: `horizontal`,
            className: `flex-1 min-w-0`,
            children: [
              !1,
              (0, Y.jsx)(
                Ws,
                {
                  id: `proc-viewport`,
                  order: 2,
                  minSize: 30,
                  children: (0, Y.jsxs)(`div`, {
                    className: `h-full relative min-h-0 overflow-hidden`,
                    children: [
                      (0, Y.jsx)(zx, {
                        sceneRef: f,
                        cameraRef: p,
                        rendererRef: m,
                        historyRef: x,
                        loadModelRef: g,
                        focusObjectRef: v,
                        dropToGroundRef: y,
                        invalidateRef: b,
                        editorContainerRef: h,
                        onObjectChange: H,
                        onSceneGraphChange: Ve,
                        sessionDir: t,
                        isActive: s,
                        onAssignMaterial: wt,
                      }),
                      (0, Y.jsx)(eS, {
                        onUndo: C,
                        onRedo: w,
                        onDropToGround: xt,
                        shortcuts: Pt,
                        onSetShortcut: Ft,
                      }),
                      Ee &&
                        (0, Y.jsx)(`div`, {
                          className: `absolute inset-0 flex items-center justify-center bg-background/50 z-20`,
                          children: (0, Y.jsx)(`span`, {
                            className: `text-sm text-muted-foreground`,
                            children: `Loading level...`,
                          }),
                        }),
                    ],
                  }),
                },
                `proc-viewport`,
              ),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: `w-72 flex-shrink-0 border-l border-border bg-card overflow-hidden flex flex-col`,
            children:
              L && Tt
                ? (0, Y.jsx)(Zw, {
                    material: Tt,
                    sceneRef: f,
                    selectedGeometry: Et,
                    execute: S,
                    onObjectChange: H,
                    onClose: re,
                    onMaterialReplaced: (e) => R(e),
                    onActiveMaterialChange: (e) => ie(e),
                    onCreateShaderMaterial: kt,
                  })
                : (0, Y.jsxs)(`div`, {
                    className: `flex flex-col overflow-hidden min-h-0`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `flex items-center border-b border-border px-1 sticky top-0 bg-card z-10`,
                        children: Ae.map((e) =>
                          (0, Y.jsx)(
                            `button`,
                            {
                              onClick: () => ke(e),
                              className: `px-3 py-2 text-[11px] font-medium transition-colors ${Oe === e ? `text-foreground border-b-2 border-primary` : `text-muted-foreground hover:text-foreground`}`,
                              children:
                                e === `object` ? `Properties` : `Generate`,
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `overflow-y-auto scrollbar-themed`,
                        children: (0, Y.jsx)(rC, {
                          object: Be,
                          sceneRef: f,
                          execute: S,
                          onObjectChange: H,
                          sessionDir: t,
                          remountAsset: _,
                        }),
                      }),
                    ],
                  }),
          }),
        ],
      }),
    ],
  });
};
