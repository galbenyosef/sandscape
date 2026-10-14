// Create-ea24k1TY 54 — cleartimeout
// Lines 17034-17043 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function gp(e, t) {
  let [n, r] = (0, X.useState)(e);
  return (
    (0, X.useEffect)(() => {
      let n = setTimeout(() => r(e), t);
      return () => clearTimeout(n);
    }, [e, t]),
    n
  );
}
