// Create-CEn7EAZs 09 — push
// Lines 2881-2966 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function hc(e, t, n) {
  let r = t && typeof t == `object` ? t : {},
    i = [],
    a = [],
    o = r.features;
  if (Array.isArray(o)) {
    for (let e of o)
      if (typeof e == `string`) i.push(e);
      else if (e && typeof e == `object`) {
        let t = e,
          n = typeof t.name == `string` ? t.name : null;
        if (!n) continue;
        (typeof t.status == `string` ? t.status.toLowerCase() : `built`) ===
        `deferred`
          ? a.push({
              name: n,
              reason: typeof t.reason == `string` ? t.reason : null,
            })
          : i.push(n);
      }
  } else if (o && typeof o == `object`) {
    let e = o;
    for (let t of pc(e.built)) i.push(t);
    for (let t of pc(e.deferred)) a.push({ name: t, reason: null });
  }
  let s =
      r.asset_coverage && typeof r.asset_coverage == `object`
        ? r.asset_coverage
        : {},
    c = pc(s.integrated),
    l = pc(s.missing),
    u = pc(s.unreachable),
    d = null,
    f = null,
    p = [],
    m = dne(r);
  if (typeof m == `string`) ((d = m), (f = mc(m)));
  else if (typeof m == `boolean`) ((f = m), (d = m ? `pass` : `fail`));
  else if (m && typeof m == `object`) {
    let e = m;
    ((d = typeof e.status == `string` ? e.status : null),
      (p = pc(e.errors)),
      (f = typeof e.passed == `boolean` ? e.passed : d ? mc(d) : null));
  }
  let h = typeof r.success == `boolean` ? r.success : n,
    g =
      typeof r.error == `string` && r.error
        ? r.error
        : typeof r.message == `string` && r.message
          ? r.message
          : typeof r.summary == `string` && r.summary
            ? r.summary
            : null;
  return {
    nodeId: e,
    success: h,
    featuresBuilt: i,
    featuresDeferred: a,
    assetsIntegrated: c,
    assetsMissing: l,
    assetsUnreachable: u,
    qaStatus: d,
    qaOk: f,
    qaErrors: p,
    resumable: r.resumable === !0,
    actionId:
      typeof r.action_id == `string` && r.action_id ? r.action_id : void 0,
    reason: g,
    assetSpend: fne(r.asset_spend),
    resumeBudget:
      typeof r.asset_budget_coins == `number`
        ? r.asset_budget_coins
        : r.asset_budget_coins === null
          ? null
          : void 0,
    at: Date.now(),
  };
}
var Z = i(),
  gc = (0, X.createContext)(null),
  pne = 2450;
function _c() {
  let e = (0, X.useContext)(gc);
  if (!e) throw Error(`useDesignTree must be used within a DesignTreeProvider`);
  return e;
}
