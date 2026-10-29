// AuthService-C8NFtVWb 12 — clear
// Lines 4662-4691 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
function Rn() {
  let e = new Map();
  return {
    get length() {
      return e.size;
    },
    clear() {
      e.clear();
    },
    getItem(t) {
      return e.has(t) ? e.get(t) : null;
    },
    key(t) {
      return Array.from(e.keys())[t] ?? null;
    },
    removeItem(t) {
      e.delete(t);
    },
    setItem(t, n) {
      e.set(t, String(n));
    },
  };
}
function zn() {
  try {
    if (typeof globalThis < `u` && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {}
  return Rn();
}
