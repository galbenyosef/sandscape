// Create-CEn7EAZs 56 — bne
// Lines 17690-17707 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var xp = `build_first_playable`,
  Sp = `build_first_playable_quick`;
function Bne(e) {
  return `sandscape.assetBudget.${e}`;
}
function Vne(e) {
  return `sandscape.buildPrompt.${e}`;
}
function Hne(e, t) {
  let [n, r] = (0, X.useState)(e);
  return (
    (0, X.useEffect)(() => {
      let n = setTimeout(() => r(e), t);
      return () => clearTimeout(n);
    }, [e, t]),
    n
  );
}
