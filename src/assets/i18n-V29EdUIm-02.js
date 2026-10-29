// i18n-V29EdUIm 02 — proxy
// Lines 351-374 of readable/assets/i18n-V29EdUIm.pretty.js (statement-aligned).
function ee() {
  let e = [],
    t = Object.create(null),
    n;
  return (
    (t.get = (r, i) => (
      n?.revoke?.(),
      i === A ? e : (e.push(i), (n = Proxy.revocable(r, t)), n.proxy)
    )),
    Proxy.revocable(Object.create(null), t).proxy
  );
}
function j(e, t) {
  let { [A]: n } = e(ee()),
    r = t?.keySeparator ?? `.`,
    i = t?.nsSeparator ?? `:`;
  if (n.length > 1 && i) {
    let e = t?.ns,
      a = Array.isArray(e) ? e : null;
    if (a && a.length > 1 && a.slice(1).includes(n[0]))
      return `${n[0]}${i}${n.slice(1).join(r)}`;
  }
  return n.join(r);
}
