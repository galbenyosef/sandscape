// assets__Create-ea24k1TY 38 — asset_name
// Lines 12499-12521 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Vd = new Set(ot);
function Hd(e) {
  return !!e && Vd.has(e);
}
function Ud(e) {
  return {
    id: e.id,
    asset_name: e.asset_name,
    asset_type: e.asset_type,
    description: e.description || ``,
    concept_art_path: e.concept_art_path,
    name: e.asset_name,
    path: ``,
    size: 0,
    size_human: ``,
    modified: e.modified || 0,
    type: `image`,
    location: `registry`,
    last_updated: ``,
    priority: `medium`,
    format: `png`,
  };
}
