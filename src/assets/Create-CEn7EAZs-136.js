// Create-CEn7EAZs 136 — error
// Lines 45609-45627 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function UI(e) {
  return ![`performance_capture`, `uploaded`, `cut`, `retargeted`].includes(
    e.source || ``,
  );
}
async function WI(e) {
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
