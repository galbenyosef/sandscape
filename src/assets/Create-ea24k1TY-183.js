// Create-ea24k1TY 183 — exit
// Lines 61235-61545 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function EZ(e) {
  let t = (e || {}).singleTilde,
    n = { name: `strikethrough`, tokenize: i, resolveAll: r };
  return (
    (t ??= !0),
    {
      text: { 126: n },
      insideSpan: { null: [n] },
      attentionMarkers: { null: [126] },
    }
  );
  function r(e, t) {
    let n = -1;
    for (; ++n < e.length;)
      if (
        e[n][0] === `enter` &&
        e[n][1].type === `strikethroughSequenceTemporary` &&
        e[n][1]._close
      ) {
        let r = n;
        for (; r--;)
          if (
            e[r][0] === `exit` &&
            e[r][1].type === `strikethroughSequenceTemporary` &&
            e[r][1]._open &&
            e[n][1].end.offset - e[n][1].start.offset ===
              e[r][1].end.offset - e[r][1].start.offset
          ) {
            ((e[n][1].type = `strikethroughSequence`),
              (e[r][1].type = `strikethroughSequence`));
            let i = {
                type: `strikethrough`,
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[n][1].end),
              },
              a = {
                type: `strikethroughText`,
                start: Object.assign({}, e[r][1].end),
                end: Object.assign({}, e[n][1].start),
              },
              o = [
                [`enter`, i, t],
                [`enter`, e[r][1], t],
                [`exit`, e[r][1], t],
                [`enter`, a, t],
              ],
              s = t.parser.constructs.insideSpan.null;
            (s && VU(o, o.length, 0, _W(s, e.slice(r + 1, n), t)),
              VU(o, o.length, 0, [
                [`exit`, a, t],
                [`enter`, e[n][1], t],
                [`exit`, e[n][1], t],
                [`exit`, i, t],
              ]),
              VU(e, r - 1, n - r + 3, o),
              (n = r + o.length - 2));
            break;
          }
      }
    for (n = -1; ++n < e.length;)
      e[n][1].type === `strikethroughSequenceTemporary` &&
        (e[n][1].type = `data`);
    return e;
  }
  function i(e, n, r) {
    let i = this.previous,
      a = this.events,
      o = 0;
    return s;
    function s(t) {
      return i === 126 && a[a.length - 1][1].type !== `characterEscape`
        ? r(t)
        : (e.enter(`strikethroughSequenceTemporary`), c(t));
    }
    function c(a) {
      let s = gW(i);
      if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
      if (o < 2 && !t) return r(a);
      let l = e.exit(`strikethroughSequenceTemporary`),
        u = gW(a);
      return (
        (l._open = !u || (u === 2 && !!s)),
        (l._close = !s || (s === 2 && !!u)),
        n(a)
      );
    }
  }
}
var DZ = class {
  constructor() {
    this.map = [];
  }
  add(e, t, n) {
    OZ(this, e, t, n);
  }
  consume(e) {
    if (
      (this.map.sort(function (e, t) {
        return e[0] - t[0];
      }),
      this.map.length === 0)
    )
      return;
    let t = this.map.length,
      n = [];
    for (; t > 0;)
      (--t,
        n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
        (e.length = this.map[t][0]));
    (n.push(e.slice()), (e.length = 0));
    let r = n.pop();
    for (; r;) {
      for (let t of r) e.push(t);
      r = n.pop();
    }
    this.map.length = 0;
  }
};
function OZ(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length;) {
      if (e.map[i][0] === t) {
        ((e.map[i][1] += n), e.map[i][2].push(...r));
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function kZ(e, t) {
  let n = !1,
    r = [];
  for (; t < e.length;) {
    let i = e[t];
    if (n) {
      if (i[0] === `enter`)
        i[1].type === `tableContent` &&
          r.push(e[t + 1][1].type === `tableDelimiterMarker` ? `left` : `none`);
      else if (i[1].type === `tableContent`) {
        if (e[t - 1][1].type === `tableDelimiterMarker`) {
          let e = r.length - 1;
          r[e] = r[e] === `left` ? `center` : `right`;
        }
      } else if (i[1].type === `tableDelimiterRow`) break;
    } else i[0] === `enter` && i[1].type === `tableDelimiterRow` && (n = !0);
    t += 1;
  }
  return r;
}
function AZ() {
  return { flow: { null: { name: `table`, tokenize: jZ, resolveAll: MZ } } };
}
function jZ(e, t, n) {
  let r = this,
    i = 0,
    a = 0,
    o;
  return s;
  function s(e) {
    let t = r.events.length - 1;
    for (; t > -1;) {
      let e = r.events[t][1].type;
      if (e === `lineEnding` || e === `linePrefix`) t--;
      else break;
    }
    let i = t > -1 ? r.events[t][1].type : null,
      a = i === `tableHead` || i === `tableRow` ? S : c;
    return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e);
  }
  function c(t) {
    return (e.enter(`tableHead`), e.enter(`tableRow`), l(t));
  }
  function l(e) {
    return e === 124 ? u(e) : ((o = !0), (a += 1), u(e));
  }
  function u(t) {
    return t === null
      ? n(t)
      : nW(t)
        ? a > 1
          ? ((a = 0),
            (r.interrupt = !0),
            e.exit(`tableRow`),
            e.enter(`lineEnding`),
            e.consume(t),
            e.exit(`lineEnding`),
            p)
          : n(t)
        : iW(t)
          ? lW(e, u, `whitespace`)(t)
          : ((a += 1),
            o && ((o = !1), (i += 1)),
            t === 124
              ? (e.enter(`tableCellDivider`),
                e.consume(t),
                e.exit(`tableCellDivider`),
                (o = !0),
                u)
              : (e.enter(`data`), d(t)));
  }
  function d(t) {
    return t === null || t === 124 || rW(t)
      ? (e.exit(`data`), u(t))
      : (e.consume(t), t === 92 ? f : d);
  }
  function f(t) {
    return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
  }
  function p(t) {
    return (
      (r.interrupt = !1),
      r.parser.lazy[r.now().line]
        ? n(t)
        : (e.enter(`tableDelimiterRow`),
          (o = !1),
          iW(t)
            ? lW(
                e,
                m,
                `linePrefix`,
                r.parser.constructs.disable.null.includes(`codeIndented`)
                  ? void 0
                  : 4,
              )(t)
            : m(t))
    );
  }
  function m(t) {
    return t === 45 || t === 58
      ? g(t)
      : t === 124
        ? ((o = !0),
          e.enter(`tableCellDivider`),
          e.consume(t),
          e.exit(`tableCellDivider`),
          h)
        : x(t);
  }
  function h(t) {
    return iW(t) ? lW(e, g, `whitespace`)(t) : g(t);
  }
  function g(t) {
    return t === 58
      ? ((a += 1),
        (o = !0),
        e.enter(`tableDelimiterMarker`),
        e.consume(t),
        e.exit(`tableDelimiterMarker`),
        _)
      : t === 45
        ? ((a += 1), _(t))
        : t === null || nW(t)
          ? b(t)
          : x(t);
  }
  function _(t) {
    return t === 45 ? (e.enter(`tableDelimiterFiller`), v(t)) : x(t);
  }
  function v(t) {
    return t === 45
      ? (e.consume(t), v)
      : t === 58
        ? ((o = !0),
          e.exit(`tableDelimiterFiller`),
          e.enter(`tableDelimiterMarker`),
          e.consume(t),
          e.exit(`tableDelimiterMarker`),
          y)
        : (e.exit(`tableDelimiterFiller`), y(t));
  }
  function y(t) {
    return iW(t) ? lW(e, b, `whitespace`)(t) : b(t);
  }
  function b(n) {
    return n === 124
      ? m(n)
      : n === null || nW(n)
        ? !o || i !== a
          ? x(n)
          : (e.exit(`tableDelimiterRow`), e.exit(`tableHead`), t(n))
        : x(n);
  }
  function x(e) {
    return n(e);
  }
  function S(t) {
    return (e.enter(`tableRow`), C(t));
  }
  function C(n) {
    return n === 124
      ? (e.enter(`tableCellDivider`),
        e.consume(n),
        e.exit(`tableCellDivider`),
        C)
      : n === null || nW(n)
        ? (e.exit(`tableRow`), t(n))
        : iW(n)
          ? lW(e, C, `whitespace`)(n)
          : (e.enter(`data`), w(n));
  }
  function w(t) {
    return t === null || t === 124 || rW(t)
      ? (e.exit(`data`), C(t))
      : (e.consume(t), t === 92 ? T : w);
  }
  function T(t) {
    return t === 92 || t === 124 ? (e.consume(t), w) : w(t);
  }
}
