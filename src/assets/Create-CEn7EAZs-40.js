// Create-CEn7EAZs 40 — asset_name
// Lines 13138-13160 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var vf = new Set(st);
function yf(e) {
  return !!e && vf.has(e);
}
function bf(e) {
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
