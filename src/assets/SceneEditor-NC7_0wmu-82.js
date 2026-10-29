// SceneEditor-NC7_0wmu 82 — filter
// Lines 39523-39532 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function uS(e, t) {
  let n = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (n.length === 0) return e;
  let r = (e) => {
    let t = n.every((t) => lS(e.object).includes(t)),
      i = e.children.map(r).filter((e) => e !== null);
    return !t && i.length === 0 ? null : { object: e.object, children: i };
  };
  return e.map(r).filter((e) => e !== null);
}
