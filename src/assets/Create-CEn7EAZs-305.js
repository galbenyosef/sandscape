// Create-CEn7EAZs 305 — current
// Lines 107955-108038 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function obe(e) {
  let t = {};
  if (
    (e.game_design_concept &&
      typeof e.game_design_concept == `object` &&
      (t.gameDesignConcept = e.game_design_concept),
    e.style_guide)
  ) {
    let n = bt({ style_guide: e.style_guide });
    n && (t.styleGuide = n);
  }
  if (e.audio_direction) {
    let n = iee({ audio_direction: e.audio_direction });
    n && (t.audioDirection = n);
  }
  if (e.design_documents) {
    let n = tee({ design_documents: e.design_documents });
    n && (t.designDocuments = n);
  }
  return (
    e.assets &&
      e.assets.length > 0 &&
      (t.assets = e.assets.map((e, t) => ({
        id: e.id || e.asset_id || `asset-${t}`,
        asset_name: e.asset_name || e.name || `Asset ${t + 1}`,
        asset_type: e.asset_type || e.type || `unknown`,
        description: e.description || ``,
        priority: e.priority,
        assigned_agent: e.assigned_agent,
        status: e.status || `planned`,
        concept_art_path: e.concept_art_path,
        model_3d_path: e.model_3d_path,
        audio_path: e.audio_path,
        sfx_path: e.sfx_path,
        generation_status: e.generation_status,
        rigged_model_path: e.rigged_model_path,
        tpose_image_path: e.tpose_image_path,
        body_plan: e.body_plan,
      }))),
    e.animation_plan && (t.animation_plan = e.animation_plan),
    e.voice_cast && (t.voice_cast = e.voice_cast),
    e.voiceover_script && (t.voiceover_script = e.voiceover_script),
    t
  );
}
var J9 = new Map();
function sbe(e, t = Date.now()) {
  J9.set(e, t);
}
function cbe(e) {
  for (let [t, n] of J9) e - n > 6e4 && J9.delete(t);
}
function lbe(e, t, n) {
  return t.size === 0
    ? e
    : e.filter((e) => {
        let r = e.id ? t.get(e.id) : void 0,
          i = e.asset_name ? t.get(e.asset_name) : void 0;
        return Math.max(r ?? 0, i ?? 0) <= n;
      });
}
function Y9(e, t, n = Date.now()) {
  return (cbe(n), lbe(e, J9, t));
}
function X9(e, t, n, r, i, a, o) {
  let s = (0, X.useRef)({ isEmpty: n, apply: r, clear: i });
  ((s.current = { isEmpty: n, apply: r, clear: i }),
    (0, X.useEffect)(() => {
      if (!t || s.current.isEmpty(t)) return;
      let n = setInterval(() => {
          e.current &&
            (console.log(a, t),
            s.current.apply(t, e.current),
            s.current.clear(),
            clearInterval(n));
        }, 100),
        r = setTimeout(() => {
          (clearInterval(n), console.warn(o));
        }, 5e3);
      return () => {
        (clearInterval(n), clearTimeout(r));
      };
    }, [t]));
}
