// assets__Create-ea24k1TY 184 — assign
// Lines 61546-61743 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function MZ(e, t) {
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
    f = new DZ();
  for (; ++n < e.length;) {
    let p = e[n],
      m = p[1];
    p[0] === `enter`
      ? m.type === `tableHead`
        ? ((s = !1),
          c !== 0 && (PZ(f, t, c, l, u), (u = void 0), (c = 0)),
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
                  (d = NZ(f, t, a, i, void 0, d)),
                  (a = [0, 0, 0, 0])),
                (o[2] = n)))
            : m.type === `tableCellDivider` &&
              (r
                ? (r = !1)
                : (a[1] !== 0 &&
                    ((o[0] = o[1]), (d = NZ(f, t, a, i, void 0, d))),
                  (a = o),
                  (o = [a[1], n, 0, 0])))
      : m.type === `tableHead`
        ? ((s = !0), (c = n))
        : m.type === `tableRow` || m.type === `tableDelimiterRow`
          ? ((c = n),
            a[1] === 0
              ? o[1] !== 0 && (d = NZ(f, t, o, i, n, d))
              : ((o[0] = o[1]), (d = NZ(f, t, a, i, n, d))),
            (i = 0))
          : i &&
            (m.type === `data` ||
              m.type === `tableDelimiterMarker` ||
              m.type === `tableDelimiterFiller`) &&
            (o[3] = n);
  }
  for (
    c !== 0 && PZ(f, t, c, l, u), f.consume(t.events), n = -1;
    ++n < t.events.length;
  ) {
    let e = t.events[n];
    e[0] === `enter` &&
      e[1].type === `table` &&
      (e[1]._align = kZ(t.events, n));
  }
  return e;
}
function NZ(e, t, n, r, i, a) {
  let o = r === 1 ? `tableHeader` : r === 2 ? `tableDelimiter` : `tableData`;
  n[0] !== 0 &&
    ((a.end = Object.assign({}, FZ(t.events, n[0]))),
    e.add(n[0], 0, [[`exit`, a, t]]));
  let s = FZ(t.events, n[1]);
  if (
    ((a = { type: o, start: Object.assign({}, s), end: Object.assign({}, s) }),
    e.add(n[1], 0, [[`enter`, a, t]]),
    n[2] !== 0)
  ) {
    let i = FZ(t.events, n[2]),
      a = FZ(t.events, n[3]),
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
      ((a.end = Object.assign({}, FZ(t.events, i))),
      e.add(i, 0, [[`exit`, a, t]]),
      (a = void 0)),
    a
  );
}
function PZ(e, t, n, r, i) {
  let a = [],
    o = FZ(t.events, n);
  (i && ((i.end = Object.assign({}, o)), a.push([`exit`, i, t])),
    (r.end = Object.assign({}, o)),
    a.push([`exit`, r, t]),
    e.add(n + 1, 0, a));
}
function FZ(e, t) {
  let n = e[t],
    r = n[0] === `enter` ? `start` : `end`;
  return n[1][r];
}
var IZ = { name: `tasklistCheck`, tokenize: RZ };
function LZ() {
  return { text: { 91: IZ } };
}
function RZ(e, t, n) {
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
    return rW(t)
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
    return nW(r) ? t(r) : iW(r) ? e.check({ tokenize: zZ }, t, n)(r) : n(r);
  }
}
function zZ(e, t, n) {
  return lW(e, r, `whitespace`);
  function r(e) {
    return e === null ? n(e) : t(e);
  }
}
function BZ(e) {
  return WU([nZ(), vZ(), EZ(e), AZ(), LZ()]);
}
var VZ = {};
function HZ(e) {
  let t = this,
    n = e || VZ,
    r = t.data(),
    i = (r.micromarkExtensions ||= []),
    a = (r.fromMarkdownExtensions ||= []),
    o = (r.toMarkdownExtensions ||= []);
  (i.push(BZ(n)), a.push(GX()), o.push(KX(n)));
}
