// assets__ErrorBoundary-CNubh4T- 05 — children
// Lines 1521-1863 of readable/assets__ErrorBoundary-CNubh4T-.pretty.js (statement-aligned).
function Fn(e) {
  let t = e?.design_documents;
  if (!t || typeof t != `object` || Array.isArray(t)) return null;
  let n = {};
  for (let e of xe) {
    let r = t[e];
    !r ||
      typeof r != `object` ||
      (n[e] = {
        content: typeof r.content == `string` ? r.content : void 0,
        title: typeof r.title == `string` ? r.title : void 0,
        updated_at: typeof r.updated_at == `string` ? r.updated_at : void 0,
        current_version:
          typeof r.current_version == `number` ? r.current_version : void 0,
      });
  }
  return Object.keys(n).length > 0 ? n : null;
}
function In(e) {
  let t =
    e?.assets ||
    e?.response?.assets ||
    e?.steps?.plan_assets?.result?.response?.assets ||
    e?.asset_plan?.assets;
  return !t || !Array.isArray(t)
    ? null
    : t.map((e, t) => ({
        id: e.id || e.asset_id || `asset-${t}`,
        asset_name: e.asset_name || e.name || `Asset ${t + 1}`,
        asset_type: e.asset_type || e.type || `unknown`,
        description: e.description || ``,
        concept_art_path: e.concept_art_path || e.image_path,
        model_3d_path: e.model_3d_path || e.model_path,
        rigged_model_path: e.rigged_model_path,
        body_plan: e.body_plan,
        status: e.status || `planned`,
      }));
}
function Ln(e) {
  let t =
    e?.game_plan ||
    e?.response?.game_plan ||
    e?.steps?.planner_plan_game?.result?.response?.game_plan;
  return t
    ? {
        mechanics: t.mechanics || t.core_mechanics || [],
        objectives: t.objectives || t.goals || [],
        controls: t.controls || t.control_scheme || ``,
        gameplayLoop: t.gameplay_loop || t.core_loop || ``,
        winLoseConditions: t.win_lose_conditions || t.end_conditions || ``,
      }
    : null;
}
function Rn(e) {
  let t =
    e?.game_design_concept ||
    e?.response?.game_design_concept ||
    e?.steps?.game_designer_design_concept?.response?.game_design_concept ||
    e?.steps?.scope_manager_validate_scope?.response?.game_design_concept;
  if (!t || typeof t != `object`) return null;
  let n = t.core_gameplay_loop,
    r = Array.isArray(n)
      ? n.map((e) => ({
          name: e.name || ``,
          description: e.description || ``,
          emoji: e.emoji || ``,
          color: e.color || `#888888`,
        }))
      : [];
  return {
    title: t.title || ``,
    elevator_pitch: t.elevator_pitch || ``,
    genre_tags: t.genre_tags || [],
    perspective: t.perspective || ``,
    art_style: t.art_style || ``,
    core_mechanics: t.core_mechanics || [],
    setting_theme: t.setting_theme || ``,
    player_experience: t.player_experience || ``,
    target_audience: t.target_audience || ``,
    unique_hook: t.unique_hook || ``,
    narrative_elements: t.narrative_elements || ``,
    technical_scope: t.technical_scope || ``,
    core_gameplay_loop: r,
    key_art_path: t.key_art_path || void 0,
  };
}
function zn(e) {
  let t = Rn(e);
  return t ? { gameDesignConcept: t } : null;
}
function Bn(e) {
  return $[e] ?? null;
}
var Vn = {
  concept_lock_in: `Locking in your concept`,
  style_guide: `Creating style guide`,
  asset_plan: `Planning assets`,
  build_first_playable: `Building first playable`,
  quality_pass: `Running quality checks`,
  concept_art: `Generating concept art`,
  "2d_assets": `Generating 2D assets`,
  character_sheet: `Drawing a 2D character sheet`,
  animation_sheet: `Drawing a 2D animation sheet`,
  "3d_assets": `Creating 3D assets`,
  physics_friendly_shapes: `Preparing physics shapes`,
  orientation_clinic: `Fixing asset orientations`,
  audio_direction: `Defining the audio direction`,
  sfx_generation: `Generating sound effects`,
  music_generation: `Generating music`,
  gdd: `Writing the game design document`,
  tdd: `Writing the technical design document`,
  uiux_direction: `Writing the UI/UX direction`,
  experience_bible: `Writing the experience bible`,
  feature_list: `Writing the feature list`,
  voice_production: `Producing voiceovers`,
  voice_drop_in: `Integrating voiceovers`,
  "3d_drop_in": `Integrating 3D assets`,
  sfx_drop_in: `Adding sound effects`,
  music_drop_in: `Adding music`,
  change_requests: `Processing changes`,
  gameplay_patch: `Applying gameplay changes`,
  concept_redraw: `Redrawing concepts`,
  "2d_redraw": `Redrawing 2D asset`,
  level_import: `Importing the current level`,
  character_concepts: `Drawing character concepts`,
  character_concept_redraw: `Redrawing a character concept`,
  character_rigging: `Creating characters`,
  animation_planning: `Planning animations`,
  animation_generation: `Generating animations`,
  animation_drop_in: `Integrating animations`,
  environment_map: `Generating environment map`,
  splat_world: `Generating splat world`,
  pano_to_splat: `Converting panorama to splat world`,
  initial_planning: `Planning your game`,
  generate_style_guide: `Creating style guide`,
  plan_assets: `Planning assets`,
  concept_art_generation: `Generating concept art`,
  "3d_asset_creation": `Creating 3D assets`,
  full_game_development: `Building your game`,
  initial_development_with_debug: `Building your game`,
  game_validation_and_recommendations: `Quality check`,
  asset_integration_with_debug: `Integrating assets`,
};
function Hn(e, t, n, r = !1, i) {
  let a = $[e],
    o = {},
    s = Nn(n);
  s && (o.styleGuide = s);
  let c = Pn(n);
  c && (o.audioDirection = c);
  let l = Fn(n);
  l && (o.designDocuments = l);
  let u = In(n);
  u && (o.assets = u);
  let d = Ln(n);
  d && (o.gamePlan = d);
  let f = zn(n);
  f && (o = { ...o, ...f });
  let p = n?.voiceover_script || n?.response?.voiceover_script;
  p && (o.voiceover_script = p);
  let m = n?.voice_cast || n?.response?.voice_cast;
  m && (o.voice_cast = m);
  let h =
    Vn[e] || t || e.replace(/_/g, ` `).replace(/\b\w/g, (e) => e.toUpperCase());
  return {
    completedNode: a ? { nodeId: a, state: `complete` } : null,
    designData: Object.keys(o).length > 0 ? { gameDesignData: o } : null,
    displayName: h,
    needsValidation: r,
    validationPrompt: i,
  };
}
function Un(e, t) {
  return {
    nodeId: $[e],
    displayName:
      Vn[e] ||
      t ||
      e.replace(/_/g, ` `).replace(/\b\w/g, (e) => e.toUpperCase()),
  };
}
function Wn(e) {
  let t = e.toLowerCase();
  for (let [e, n] of Object.entries(Vn)) if (t.includes(e)) return n;
  for (let [e, n] of Object.entries({
    initial_development: `Building your game`,
    asset_integration: `Adding assets to game`,
    debug_loop: `Testing and fixing`,
    game_validation: `Quality check`,
  }))
    if (t.includes(e)) return n;
  return e.replace(/_/g, ` `).replace(/\b\w/g, (e) => e.toUpperCase());
}
function Gn({ users: e, ownerUserId: t }) {
  return e.length === 0
    ? null
    : (0, k.jsx)(le, {
        delayDuration: 300,
        children: (0, k.jsx)(`div`, {
          className: `flex items-center gap-1`,
          children: (0, k.jsx)(he, {
            mode: `popLayout`,
            children: e.map((e) => {
              let n = e.user_id === t,
                r = e.active_workflow
                  ? Wn(e.active_workflow)
                  : e.current_activity || `Idle`;
              return (0, k.jsx)(
                me.div,
                {
                  initial: { opacity: 0, scale: 0 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.5 },
                  transition: { duration: 0.2 },
                  className: `relative`,
                  children: (0, k.jsxs)(ue, {
                    children: [
                      (0, k.jsx)(C, {
                        asChild: !0,
                        children: (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsxs)(D, {
                              className: `h-8 w-8`,
                              children: [
                                (0, k.jsx)(pe, { src: e.avatar_url ?? void 0 }),
                                (0, k.jsx)(fe, {
                                  className: `text-[10px]`,
                                  children: (
                                    e.username?.[0] ?? `?`
                                  ).toUpperCase(),
                                }),
                              ],
                            }),
                            (0, k.jsx)(`span`, {
                              className: `absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-1 ring-background`,
                            }),
                            n &&
                              (0, k.jsx)(w, {
                                className: `absolute -top-1 -right-1 h-2.5 w-2.5 text-amber-500`,
                              }),
                          ],
                        }),
                      }),
                      (0, k.jsxs)(S, {
                        side: `bottom`,
                        className: `text-xs`,
                        children: [e.username, ` — `, r],
                      }),
                    ],
                  }),
                },
                e.user_id,
              );
            }),
          }),
        }),
      });
}
var Kn = `royaume-des-pepins`,
  qn = `sandscape.tourCard.dismissed`;
function Jn(e) {
  return !e.inTour && !e.hasCreatedBefore && !e.dismissed && !e.tourFinished;
}
function Yn() {
  try {
    return localStorage.getItem(qn) === `1`;
  } catch {
    return !1;
  }
}
function Xn() {
  try {
    localStorage.setItem(qn, `1`);
  } catch {}
}
var Zn = (0, O.createContext)(void 0);
function Qn() {
  return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
function $n({ children: e }) {
  let [t, n] = (0, O.useState)(null),
    [r, i] = (0, O.useState)([]),
    [a, o] = (0, O.useState)(null),
    s = (0, O.useCallback)((e) => {
      let t = { ...e, id: Qn(), dismissed: !1 };
      (n(t),
        i((e) => [t, ...e]),
        console.error(`[ErrorContext] ${e.category}/${e.code}: ${e.message}`, {
          step_id: e.step_id,
          recoverable: e.recoverable,
          request_id: e.request_id,
        }));
    }, []),
    c = (0, O.useCallback)(() => {
      (t &&
        i((e) => e.map((e) => (e.id === t.id ? { ...e, dismissed: !0 } : e))),
        n(null));
    }, [t]),
    l = (0, O.useCallback)(() => {
      (n(null), i([]));
    }, []),
    u = (0, O.useCallback)(
      (e, t, n) => {
        e
          ? (o({
              active: !0,
              reason: t || `Unknown degradation`,
              startedAt: new Date().toISOString(),
              affectedFeatures: n || [],
            }),
            console.warn(`[ErrorContext] Entering degraded mode: ${t}`, {
              affectedFeatures: n,
            }))
          : (a && console.info(`[ErrorContext] Exiting degraded mode`),
            o(null));
      },
      [a],
    ),
    d = (0, O.useCallback)((e) => r.filter((t) => t.category === e), [r]),
    f = r.some((e) => !e.dismissed && !e.recoverable),
    p = a?.active ?? !1,
    m = (0, O.useMemo)(
      () => ({
        currentError: t,
        errors: r,
        isDegradedMode: p,
        degradedModeInfo: a,
        setError: s,
        clearError: c,
        clearAllErrors: l,
        setDegradedMode: u,
        getErrorsByCategory: d,
        hasUnrecoverableError: f,
      }),
      [t, r, p, a, s, c, l, u, d, f],
    );
  return (0, k.jsx)(Zn.Provider, { value: m, children: e });
}
function er() {
  let e = (0, O.useContext)(Zn);
  if (!e) throw Error(`useError must be used within an ErrorProvider`);
  return e;
}
