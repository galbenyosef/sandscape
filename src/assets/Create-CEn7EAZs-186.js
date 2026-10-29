// Create-CEn7EAZs 186 — assign
// Lines 62329-62526 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function JZ(e, t) {
  let n = -1,
    r = !0,
    i = 0,
    a = [0, 0, 0, 0],
    o = [0, 0, 0, 0],
    s = !1,
    c = 0,
    l,
    u,
    d,
    f = new UZ();
  for (; ++n < e.length;) {
    let p = e[n],
      m = p[1];
    p[0] === `enter`
      ? m.type === `tableHead`
        ? ((s = !1),
          c !== 0 && (XZ(f, t, c, l, u), (u = void 0), (c = 0)),
          (l = {
            type: `table`,
            start: Object.assign({}, m.start),
            end: Object.assign({}, m.end),
          }),
          f.add(n, 0, [[`enter`, l, t]]))
        : m.type === `tableRow` || m.type === `tableDelimiterRow`
          ? ((r = !0),
            (d = void 0),
            (a = [0, 0, 0, 0]),
            (o = [0, n + 1, 0, 0]),
            s &&
              ((s = !1),
              (u = {
                type: `tableBody`,
                start: Object.assign({}, m.start),
                end: Object.assign({}, m.end),
              }),
              f.add(n, 0, [[`enter`, u, t]])),
            (i = m.type === `tableDelimiterRow` ? 2 : u ? 3 : 1))
          : i &&
              (m.type === `data` ||
                m.type === `tableDelimiterMarker` ||
                m.type === `tableDelimiterFiller`)
            ? ((r = !1),
              o[2] === 0 &&
                (a[1] !== 0 &&
                  ((o[0] = o[1]),
                  (d = YZ(f, t, a, i, void 0, d)),
                  (a = [0, 0, 0, 0])),
                (o[2] = n)))
            : m.type === `tableCellDivider` &&
              (r
                ? (r = !1)
                : (a[1] !== 0 &&
                    ((o[0] = o[1]), (d = YZ(f, t, a, i, void 0, d))),
                  (a = o),
                  (o = [a[1], n, 0, 0])))
      : m.type === `tableHead`
        ? ((s = !0), (c = n))
        : m.type === `tableRow` || m.type === `tableDelimiterRow`
          ? ((c = n),
            a[1] === 0
              ? o[1] !== 0 && (d = YZ(f, t, o, i, n, d))
              : ((o[0] = o[1]), (d = YZ(f, t, a, i, n, d))),
            (i = 0))
          : i &&
            (m.type === `data` ||
              m.type === `tableDelimiterMarker` ||
              m.type === `tableDelimiterFiller`) &&
            (o[3] = n);
  }
  for (
    c !== 0 && XZ(f, t, c, l, u), f.consume(t.events), n = -1;
    ++n < t.events.length;
  ) {
    let e = t.events[n];
    e[0] === `enter` &&
      e[1].type === `table` &&
      (e[1]._align = GZ(t.events, n));
  }
  return e;
}
function YZ(e, t, n, r, i, a) {
  let o = r === 1 ? `tableHeader` : r === 2 ? `tableDelimiter` : `tableData`;
  n[0] !== 0 &&
    ((a.end = Object.assign({}, ZZ(t.events, n[0]))),
    e.add(n[0], 0, [[`exit`, a, t]]));
  let s = ZZ(t.events, n[1]);
  if (
    ((a = { type: o, start: Object.assign({}, s), end: Object.assign({}, s) }),
    e.add(n[1], 0, [[`enter`, a, t]]),
    n[2] !== 0)
  ) {
    let i = ZZ(t.events, n[2]),
      a = ZZ(t.events, n[3]),
      o = {
        type: `tableContent`,
        start: Object.assign({}, i),
        end: Object.assign({}, a),
      };
    if ((e.add(n[2], 0, [[`enter`, o, t]]), r !== 2)) {
      let r = t.events[n[2]],
        i = t.events[n[3]];
      if (
        ((r[1].end = Object.assign({}, i[1].end)),
        (r[1].type = `chunkText`),
        (r[1].contentType = `text`),
        n[3] > n[2] + 1)
      ) {
        let t = n[2] + 1,
          r = n[3] - n[2] - 1;
        e.add(t, r, []);
      }
    }
    e.add(n[3] + 1, 0, [[`exit`, o, t]]);
  }
  return (
    i !== void 0 &&
      ((a.end = Object.assign({}, ZZ(t.events, i))),
      e.add(i, 0, [[`exit`, a, t]]),
      (a = void 0)),
    a
  );
}
function XZ(e, t, n, r, i) {
  let a = [],
    o = ZZ(t.events, n);
  (i && ((i.end = Object.assign({}, o)), a.push([`exit`, i, t])),
    (r.end = Object.assign({}, o)),
    a.push([`exit`, r, t]),
    e.add(n + 1, 0, a));
}
function ZZ(e, t) {
  let n = e[t],
    r = n[0] === `enter` ? `start` : `end`;
  return n[1][r];
}
var QZ = { name: `tasklistCheck`, tokenize: eQ };
function $Z() {
  return { text: { 91: QZ } };
}
function eQ(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
      ? n(t)
      : (e.enter(`taskListCheck`),
        e.enter(`taskListCheckMarker`),
        e.consume(t),
        e.exit(`taskListCheckMarker`),
        a);
  }
  function a(t) {
    return yW(t)
      ? (e.enter(`taskListCheckValueUnchecked`),
        e.consume(t),
        e.exit(`taskListCheckValueUnchecked`),
        o)
      : t === 88 || t === 120
        ? (e.enter(`taskListCheckValueChecked`),
          e.consume(t),
          e.exit(`taskListCheckValueChecked`),
          o)
        : n(t);
  }
  function o(t) {
    return t === 93
      ? (e.enter(`taskListCheckMarker`),
        e.consume(t),
        e.exit(`taskListCheckMarker`),
        e.exit(`taskListCheck`),
        s)
      : n(t);
  }
  function s(r) {
    return vW(r) ? t(r) : bW(r) ? e.check({ tokenize: tQ }, t, n)(r) : n(r);
  }
}
function tQ(e, t, n) {
  return TW(e, r, `whitespace`);
  function r(e) {
    return e === null ? n(e) : t(e);
  }
}
function nQ(e) {
  return oW([vZ(), PZ(), HZ(e), KZ(), $Z()]);
}
var rQ = {};
function iQ(e) {
  let t = this,
    n = e || rQ,
    r = t.data(),
    i = (r.micromarkExtensions ||= []),
    a = (r.fromMarkdownExtensions ||= []),
    o = (r.toMarkdownExtensions ||= []);
  (i.push(nQ(n)), a.push(sZ()), o.push(cZ(n)));
}
