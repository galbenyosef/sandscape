// Create-CEn7EAZs 264 — url
// Lines 88936-88945 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function ihe(e, t) {
  let n = URL.createObjectURL(e),
    r = document.createElement(`a`);
  ((r.href = n),
    (r.download = t),
    document.body.appendChild(r),
    r.click(),
    r.remove(),
    setTimeout(() => URL.revokeObjectURL(n), 1e4));
}
