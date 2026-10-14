// formatDistanceToNow-DhpKhUbk 03 — formatdistance
// Lines 500-555 of readable/assets/formatDistanceToNow-DhpKhUbk.pretty.js (statement-aligned).
function j(t, n, i) {
  let a = o(),
    l = i?.locale ?? a.locale ?? A,
    u = c(t, n);
  if (isNaN(u)) throw RangeError(`Invalid time value`);
  let d = Object.assign({}, i, { addSuffix: i?.addSuffix, comparison: u }),
    f,
    p;
  u > 0 ? ((f = e(n)), (p = e(t))) : ((f = e(t)), (p = e(n)));
  let m = _(p, f),
    h = (s(p) - s(f)) / 1e3,
    v = Math.round((m - h) / 60),
    y;
  if (v < 2)
    return i?.includeSeconds
      ? m < 5
        ? l.formatDistance(`lessThanXSeconds`, 5, d)
        : m < 10
          ? l.formatDistance(`lessThanXSeconds`, 10, d)
          : m < 20
            ? l.formatDistance(`lessThanXSeconds`, 20, d)
            : m < 40
              ? l.formatDistance(`halfAMinute`, 0, d)
              : m < 60
                ? l.formatDistance(`lessThanXMinutes`, 1, d)
                : l.formatDistance(`xMinutes`, 1, d)
      : v === 0
        ? l.formatDistance(`lessThanXMinutes`, 1, d)
        : l.formatDistance(`xMinutes`, v, d);
  if (v < 45) return l.formatDistance(`xMinutes`, v, d);
  if (v < 90) return l.formatDistance(`aboutXHours`, 1, d);
  if (v < 1440) {
    let e = Math.round(v / 60);
    return l.formatDistance(`aboutXHours`, e, d);
  } else if (v < 2520) return l.formatDistance(`xDays`, 1, d);
  else if (v < 43200) {
    let e = Math.round(v / 1440);
    return l.formatDistance(`xDays`, e, d);
  } else if (v < 43200 * 2)
    return ((y = Math.round(v / r)), l.formatDistance(`aboutXMonths`, y, d));
  if (((y = g(p, f)), y < 12)) {
    let e = Math.round(v / r);
    return l.formatDistance(`xMonths`, e, d);
  } else {
    let e = y % 12,
      t = Math.trunc(y / 12);
    return e < 3
      ? l.formatDistance(`aboutXYears`, t, d)
      : e < 9
        ? l.formatDistance(`overXYears`, t, d)
        : l.formatDistance(`almostXYears`, t + 1, d);
  }
}
function M(e, t) {
  return j(e, l(e), t);
}
