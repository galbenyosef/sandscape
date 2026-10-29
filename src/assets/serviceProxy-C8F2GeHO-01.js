// serviceProxy-C8F2GeHO 01 — startswith
// Lines 1-76 of readable/assets/serviceProxy-C8F2GeHO.pretty.js (statement-aligned).
var e = { current: null },
  t = {},
  n = {
    coins: {
      getBalance: async () => ({
        success: !0,
        balance: 0,
        lifetime_earned: 0,
        lifetime_spent: 0,
      }),
      getActionPrices: async () => ({ success: !0, prices: [] }),
      invalidateBalance: () => {},
      formatCoins: (e) =>
        typeof e == `number` ? e.toLocaleString() : String(e),
    },
  },
  r = { chat: new Set([`disconnectWebSocket`]) },
  i = {
    chat: new Set([
      `onTaskFailed`,
      `onWorkflowFailed`,
      `onWorkflowStepFailed`,
      `onConnectionStateChange`,
    ]),
  };
function a(n) {
  let r = [],
    i = t[n];
  i && r.push(i);
  let a = e.current?.[n];
  return (a && a !== i && r.push(a), r);
}
function o(e) {
  let t = e ?? (typeof location > `u` ? `` : location.pathname);
  return t.startsWith(`/tour`) && !t.startsWith(`/tour/claim`);
}
function s(e) {
  return e.startsWith(`/creating`) || e.startsWith(`/tour`);
}
function c(r) {
  if (o()) {
    let t = e.current?.[r];
    if (t) return t;
    let i = n[r];
    if (i) return i;
  }
  return t[r];
}
function l(e, n) {
  return (
    (t[e] = n),
    new Proxy(n, {
      get(t, n) {
        if (typeof n == `string` && r[e]?.has(n))
          return (...t) => {
            let r;
            for (let i of a(e)) {
              let e = i[n];
              typeof e == `function` && (r = e.apply(i, t));
            }
            return r;
          };
        let i = c(e),
          o = Reflect.get(i, n, i);
        return typeof o == `function` ? o.bind(i) : o;
      },
      set(t, n, r) {
        if (typeof n == `string` && i[e]?.has(n)) {
          for (let t of a(e)) Reflect.set(t, n, r);
          return !0;
        }
        return Reflect.set(c(e), n, r);
      },
    })
  );
}
