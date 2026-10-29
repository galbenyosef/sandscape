// ErrorBoundary-DpHQd_gF 04 — firstop
// Lines 1178-1515 of readable/assets/ErrorBoundary-DpHQd_gF.pretty.js (statement-aligned).
var on = [
  { tabId: `level`, label: `Level Editor`, icon: Ee },
  { tabId: `kit`, label: `Kit Generator`, icon: S },
  { tabId: `assets`, label: `Asset Editor`, icon: we },
  { tabId: `image`, label: `Image Editor`, icon: E },
  { tabId: `character`, label: `Animation Editor`, icon: se },
  { tabId: `skin-weights`, label: `Skin Weights`, icon: b },
  { tabId: `sound`, label: `Sound Editor`, icon: De },
  { tabId: `video`, label: `Video Editor`, icon: xe },
  { tabId: `docs`, label: `Documents`, icon: Ce },
  { tabId: `code`, label: `Code`, icon: Se },
].filter((e) => e.tabId !== `kit`);
function sn(e) {
  let t = (e.action_id || `work`).replace(/[_-]+/g, ` `).trim(),
    n = t.charAt(0).toUpperCase() + t.slice(1);
  return e.asset_name ? `${n} — ${e.asset_name}` : n;
}
var cn = [`sfx_audio`, `music_audio`, `voice_audio`],
  ln = [
    `building_3d`,
    `prop_3d`,
    `environmental_props_3d`,
    `vehicle_3d`,
    `weapon_3d`,
  ],
  un = [
    `ui_element_2d`,
    `hud_element_2d`,
    `sprite_sheet_2d`,
    `background_2d`,
    `icon_set_2d`,
    `menu_design_2d`,
    `texture_2d`,
    `icon_2d`,
    `sprite_2d`,
    `particle_texture_2d`,
  ],
  dn = [`character_sheet_2d`, `animation_sheet_2d`],
  Q = [`model_3d`, `collision`, `lod`, `segment`],
  fn = {
    character_3d: {
      firstOp: `character_concept`,
      followUps: [`character_creation`],
    },
    building_3d: { firstOp: `concept_art`, followUps: Q },
    prop_3d: { firstOp: `concept_art`, followUps: Q },
    vehicle_3d: { firstOp: `concept_art`, followUps: Q },
    weapon_3d: { firstOp: `concept_art`, followUps: Q },
    environmental_props_3d: { firstOp: `concept_art`, followUps: Q },
    ui_element_2d: { firstOp: `two_d`, followUps: [] },
    hud_element_2d: { firstOp: `two_d`, followUps: [] },
    sprite_sheet_2d: { firstOp: `two_d`, followUps: [] },
    background_2d: { firstOp: `two_d`, followUps: [] },
    icon_set_2d: { firstOp: `two_d`, followUps: [] },
    menu_design_2d: { firstOp: `two_d`, followUps: [] },
    texture_2d: { firstOp: `two_d`, followUps: [] },
    icon_2d: { firstOp: `two_d`, followUps: [] },
    sprite_2d: { firstOp: `two_d`, followUps: [] },
    particle_texture_2d: { firstOp: `two_d`, followUps: [] },
    character_sheet_2d: { firstOp: `character_sheet_2d`, followUps: [] },
    animation_sheet_2d: {
      firstOp: `animation_sheet_2d`,
      followUps: [],
      requiresSource: !0,
    },
    music_audio: { firstOp: `music`, followUps: [] },
    sfx_audio: { firstOp: `sfx`, followUps: [] },
    environment_map: { firstOp: `environment_map`, followUps: [] },
    splat_world: {
      firstOp: `splat_from_pano`,
      followUps: [],
      requiresSource: !0,
    },
  },
  pn = {
    character_3d: `3d`,
    building_3d: `3d`,
    prop_3d: `3d`,
    vehicle_3d: `3d`,
    weapon_3d: `3d`,
    environmental_props_3d: `3d`,
    ui_element_2d: `2d`,
    hud_element_2d: `2d`,
    sprite_sheet_2d: `2d`,
    background_2d: `2d`,
    icon_set_2d: `2d`,
    menu_design_2d: `2d`,
    texture_2d: `2d`,
    icon_2d: `2d`,
    sprite_2d: `2d`,
    particle_texture_2d: `2d`,
    character_sheet_2d: `2d`,
    animation_sheet_2d: `2d`,
    cover_art: `2d`,
    mood_board: `2d`,
    music_audio: `audio`,
    sfx_audio: `audio`,
    mix_audio: `audio`,
    voice_audio: `voice`,
    video_composition: `video`,
    environment_map: `world`,
    hdri: `world`,
    splat_world: `world`,
    scene: `world`,
    level: `meta`,
  };
function mn(e) {
  return !!e?.rigged_model_path;
}
var hn = [`biped`, `quadruped`, `other`],
  gn = { biped: `Biped`, quadruped: `Quadruped`, other: `Other` };
function _n(e) {
  return e?.body_plan ?? `biped`;
}
function vn(e) {
  return _n(e) === `biped`;
}
function yn(e) {
  return vn(e) || mn(e);
}
function bn(e) {
  return vn(e) ? !!e?.rigged_model_path : !!e?.model_3d_path;
}
function xn(e) {
  return e?.asset_type === `voice_audio`;
}
var $ = {
  concept_lock_in: `concept-lock-in`,
  style_guide: `style-guide`,
  asset_plan: `asset-plan`,
  build_first_playable: `build-first-playable`,
  build_first_playable_quick: `build-first-playable`,
  quality_pass: `quality-pass`,
  concept_art: `concept-art`,
  "2d_assets": `2d-assets`,
  character_sheet: `2d-animation`,
  animation_sheet: `2d-animation`,
  "3d_assets": `3d-assets`,
  physics_friendly_shapes: `physics-friendly-shapes`,
  orientation_clinic: `orientation-clinic`,
  audio_direction: `audio-direction`,
  sfx_generation: `sfx`,
  music_generation: `music`,
  gdd: `gdd`,
  tdd: `tdd`,
  uiux_direction: `uiux-direction`,
  experience_bible: `experience-bible`,
  feature_list: `feature-list`,
  voice_production: `voice-cast`,
  voice_drop_in: `voice-drop-in`,
  "3d_drop_in": `3d-drop-in`,
  sfx_drop_in: `sfx-drop-in`,
  music_drop_in: `music-drop-in`,
  character_concepts: `character-concepts`,
  character_concept_redraw: `character-concepts`,
  character_rigging: `character-rigging`,
  animation_planning: `animation-planning`,
  animation_generation: `animation-generation`,
  animation_drop_in: `animation-drop-in`,
  environment_map: `environment-map`,
  splat_world: `environment-map`,
  pano_to_splat: `environment-map`,
  change_requests: `build-first-playable`,
  gameplay_patch: `build-first-playable`,
  concept_redraw: `concept-art`,
  "2d_redraw": `2d-assets`,
  level_import: `level-design`,
  initial_planning: `concept-lock-in`,
  initial_planning_part_1: `concept-lock-in`,
  initial_planning_part1: `concept-lock-in`,
  generate_style_guide: `style-guide`,
  plan_assets: `asset-plan`,
  plan_game_assets: `asset-plan`,
  concept_art_generation: `concept-art`,
  generate_concept_art: `concept-art`,
  "3d_asset_creation": `3d-assets`,
  full_game_development: `build-first-playable`,
  full_game_development_minimal: `build-first-playable`,
  initial_development_with_debug: `build-first-playable`,
  game_validation_and_recommendations: `quality-pass`,
  asset_integration_with_debug: `3d-drop-in`,
};
Object.freeze(Object.keys($));
var Sn = { "audio-and-sfx": [`sfx`, `music`] },
  Cn = { audio_and_sfx: [`sfx_generation`, `music_generation`] };
function wn(e) {
  return e.flatMap((e) => Sn[e] ?? [e]);
}
function Tn(e) {
  return e.flatMap((e) => Cn[e] ?? [e]);
}
function En(e, t) {
  let n = new Set(Tn(t)),
    r = Tn([...e, ...t.filter((t) => !e.includes(t))]),
    i = [];
  for (let e of r) {
    let t = $[e];
    t && i.push({ nodeId: t, state: n.has(e) ? `outdated` : `complete` });
  }
  return i;
}
var Dn = new Set([
    `building_3d`,
    `prop_3d`,
    `environmental_props_3d`,
    `vehicle_3d`,
    `weapon_3d`,
    `item_3d`,
    `environment_3d`,
  ]),
  On = new Set([
    `ui_element_2d`,
    `hud_element_2d`,
    `sprite_sheet_2d`,
    `background_2d`,
    `icon_set_2d`,
    `menu_design_2d`,
    `texture_2d`,
    `icon_2d`,
    `sprite_2d`,
    `particle_texture_2d`,
  ]),
  kn = new Set([`character_sheet_2d`, `animation_sheet_2d`]),
  An = new Set([`character_3d`]),
  jn = new Set([
    `building_3d`,
    `prop_3d`,
    `environmental_props_3d`,
    `vehicle_3d`,
    `weapon_3d`,
  ]);
function Mn(e) {
  let t = [];
  return (
    e.some((e) => e.concept_art_path && Dn.has(e.asset_type ?? ``)) &&
      t.push(`concept_art`),
    e.some((e) => e.concept_art_path && On.has(e.asset_type ?? ``)) &&
      t.push(`2d_assets`),
    e.some((e) => e.concept_art_path && kn.has(e.asset_type ?? ``)) &&
      t.push(`character_sheet`),
    e.some((e) => e.concept_art_path && An.has(e.asset_type ?? ``)) &&
      t.push(`character_concepts`),
    e.some((e) => e.model_3d_path && jn.has(e.asset_type ?? ``)) &&
      t.push(`3d_assets`),
    e.some((e) => An.has(e.asset_type ?? ``) && bn(e)) &&
      t.push(`character_rigging`),
    e.some((e) => e.sfx_path && e.asset_type === `sfx_audio`) &&
      t.push(`sfx_generation`),
    e.some((e) => e.audio_path && e.asset_type === `music_audio`) &&
      t.push(`music_generation`),
    t
  );
}
function Nn(e) {
  let t = e?.style_guide;
  if (!t) return null;
  let n = t.color_palette || t.colors,
    r = [],
    i;
  if (
    n &&
    typeof n == `object` &&
    !Array.isArray(n) &&
    Object.values(n).length > 0 &&
    Object.values(n).every((e) => typeof e == `string`)
  )
    for (let [e, t] of Object.entries(n))
      r.push({ name: e.replace(/_/g, ` `), hex: t });
  else if (n && typeof n == `object` && !Array.isArray(n)) {
    let e = [`primary`, `secondary`, `accent`, `neutral`];
    i = {
      primary: Array.isArray(n.primary) ? n.primary : [],
      secondary: Array.isArray(n.secondary) ? n.secondary : [],
      accent: Array.isArray(n.accent) ? n.accent : [],
      neutral: Array.isArray(n.neutral) ? n.neutral : [],
      ui_colors:
        n.ui_colors && typeof n.ui_colors == `object` ? n.ui_colors : {},
    };
    for (let t of e) {
      let e = i[t];
      e.forEach((n, i) => {
        r.push({
          name: `${t.charAt(0).toUpperCase() + t.slice(1)}${e.length > 1 ? ` ${i + 1}` : ``}`,
          hex: n,
        });
      });
    }
  } else
    Array.isArray(n) &&
      n.forEach((e) => {
        r.push({
          name: e.name || e.color_name || `Color`,
          hex: e.hex || e.color || `#000000`,
        });
      });
  let a = t.visual_language,
    o = t.style_keywords || t.keywords || [];
  a?.form_factors &&
    o.push(
      ...Object.values(a.form_factors).filter((e) => typeof e == `string`),
    );
  let s = t.mood_references || t.references || a?.style_descriptors || [],
    c = t.material_style,
    l = (typeof c == `string` ? c : c?.type) || t.visual_style || ``;
  return {
    title: t.created_for?.split(`–`)[0]?.trim() || t.title || `Style Guide`,
    visualStyle: l,
    styleKeywords: o,
    colorPalette: r,
    colorGroups: i,
    moodReferences: s,
    artStyleDescription:
      t.created_for || t.summary || t.description || t.art_style || ``,
    notes: t.notes || ``,
    rawStyleGuide: t,
    moodBoardPath: t.mood_board_path || void 0,
    moodBoardImages: Array.isArray(t.mood_board_images)
      ? t.mood_board_images
      : void 0,
  };
}
function Pn(e) {
  let t = e?.audio_direction;
  if (!t || typeof t != `object` || Array.isArray(t)) return null;
  let n = (e) => (typeof e == `string` ? e : void 0),
    r = {
      instrumentation: n(t.instrumentation),
      tone: n(t.tone),
      tempoPreference: n(t.tempo_preference),
      reverbLevel: n(t.reverb_level),
      dynamicRange: n(t.dynamic_range),
      referenceMoods: Array.isArray(t.reference_moods)
        ? t.reference_moods.filter((e) => typeof e == `string`)
        : void 0,
      notes: n(t.notes),
    };
  return Object.values(r).some((e) => e !== void 0) ? r : null;
}
