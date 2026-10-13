// assets__Create-ea24k1TY 134 — error
// Lines 44836-44854 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function DI(e) {
  return ![`performance_capture`, `uploaded`, `cut`, `retargeted`].includes(
    e.source || ``,
  );
}
async function OI(e) {
  let t = ``;
  try {
    let n = await e.json();
    t = typeof n?.detail == `string` ? n.detail : n?.error || ``;
  } catch {}
  if (e.status === 402 && t) {
    let e = t.indexOf(`: `);
    return e > 0
      ? { error: t.slice(e + 2), error_code: t.slice(0, e) }
      : { error: t };
  }
  return { error: t || `Server error: ${e.status}` };
}
