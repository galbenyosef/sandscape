// Create-CEn7EAZs 171 — end
// Lines 57203-57467 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function mK(e, t) {
  let n = e.length,
    r,
    i,
    a;
  for (; n--;)
    if (e[n][0] === `enter`) {
      if (e[n][1].type === `content`) {
        r = n;
        break;
      }
      e[n][1].type === `paragraph` && (i = n);
    } else
      (e[n][1].type === `content` && e.splice(n, 1),
        !a && e[n][1].type === `definition` && (a = n));
  let o = {
    type: `setextHeading`,
    start: { ...e[r][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[i][1].type = `setextHeadingText`),
    a
      ? (e.splice(i, 0, [`enter`, o, t]),
        e.splice(a + 1, 0, [`exit`, e[r][1], t]),
        (e[r][1].end = { ...e[a][1].end }))
      : (e[r][1] = o),
    e.push([`exit`, o, t]),
    e
  );
}
function hK(e, t, n) {
  let r = this,
    i;
  return a;
  function a(t) {
    let a = r.events.length,
      s;
    for (; a--;)
      if (
        r.events[a][1].type !== `lineEnding` &&
        r.events[a][1].type !== `linePrefix` &&
        r.events[a][1].type !== `content`
      ) {
        s = r.events[a][1].type === `paragraph`;
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || s)
      ? (e.enter(`setextHeadingLine`), (i = t), o(t))
      : n(t);
  }
  function o(t) {
    return (e.enter(`setextHeadingLineSequence`), s(t));
  }
  function s(t) {
    return t === i
      ? (e.consume(t), s)
      : (e.exit(`setextHeadingLineSequence`),
        bW(t) ? TW(e, c, `lineSuffix`)(t) : c(t));
  }
  function c(r) {
    return r === null || vW(r) ? (e.exit(`setextHeadingLine`), t(r)) : n(r);
  }
}
var gK = { tokenize: _K };
function _K(e) {
  let t = this,
    n = e.attempt(
      BW,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        TW(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(fG, i)),
          `linePrefix`,
        ),
      ),
    );
  return n;
  function r(r) {
    if (r === null) {
      e.consume(r);
      return;
    }
    return (
      e.enter(`lineEndingBlank`),
      e.consume(r),
      e.exit(`lineEndingBlank`),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(r) {
    if (r === null) {
      e.consume(r);
      return;
    }
    return (
      e.enter(`lineEnding`),
      e.consume(r),
      e.exit(`lineEnding`),
      (t.currentConstruct = void 0),
      n
    );
  }
}
var vK = { resolveAll: SK() },
  yK = xK(`string`),
  bK = xK(`text`);
function xK(e) {
  return { resolveAll: SK(e === `text` ? CK : void 0), tokenize: t };
  function t(t) {
    let n = this,
      r = this.parser.constructs[e],
      i = t.attempt(r, a, o);
    return a;
    function a(e) {
      return c(e) ? i(e) : o(e);
    }
    function o(e) {
      if (e === null) {
        t.consume(e);
        return;
      }
      return (t.enter(`data`), t.consume(e), s);
    }
    function s(e) {
      return c(e) ? (t.exit(`data`), i(e)) : (t.consume(e), s);
    }
    function c(e) {
      if (e === null) return !0;
      let t = r[e],
        i = -1;
      if (t)
        for (; ++i < t.length;) {
          let e = t[i];
          if (!e.previous || e.previous.call(n, n.previous)) return !0;
        }
      return !1;
    }
  }
}
function SK(e) {
  return t;
  function t(t, n) {
    let r = -1,
      i;
    for (; ++r <= t.length;)
      i === void 0
        ? t[r] && t[r][1].type === `data` && ((i = r), r++)
        : (!t[r] || t[r][1].type !== `data`) &&
          (r !== i + 2 &&
            ((t[i][1].end = t[r - 1][1].end),
            t.splice(i + 2, r - i - 2),
            (r = i + 2)),
          (i = void 0));
    return e ? e(t, n) : t;
  }
}
function CK(e, t) {
  let n = 0;
  for (; ++n <= e.length;)
    if (
      (n === e.length || e[n][1].type === `lineEnding`) &&
      e[n - 1][1].type === `data`
    ) {
      let r = e[n - 1][1],
        i = t.sliceStream(r),
        a = i.length,
        o = -1,
        s = 0,
        c;
      for (; a--;) {
        let e = i[a];
        if (typeof e == `string`) {
          for (o = e.length; e.charCodeAt(o - 1) === 32;) (s++, o--);
          if (o) break;
          o = -1;
        } else if (e === -2) ((c = !0), s++);
        else if (e !== -1) {
          a++;
          break;
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (s = 0), s)) {
        let i = {
          type:
            n === e.length || c || s < 2 ? `lineSuffix` : `hardBreakTrailing`,
          start: {
            _bufferIndex: a ? o : r.start._bufferIndex + o,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s,
          },
          end: { ...r.end },
        };
        ((r.end = { ...i.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, i)
            : (e.splice(n, 0, [`enter`, i, t], [`exit`, i, t]), (n += 2)));
      }
      n++;
    }
  return e;
}
var wK = t({
    attentionMarkers: () => MK,
    contentInitial: () => EK,
    disable: () => NK,
    document: () => TK,
    flow: () => OK,
    flowInitial: () => DK,
    insideSpan: () => jK,
    string: () => kK,
    text: () => AK,
  }),
  TK = {
    42: aK,
    43: aK,
    45: aK,
    48: aK,
    49: aK,
    50: aK,
    51: aK,
    52: aK,
    53: aK,
    54: aK,
    55: aK,
    56: aK,
    57: aK,
    62: HW,
  },
  EK = { 91: xG },
  DK = { [-2]: eG, [-1]: eG, 32: eG },
  OK = {
    35: DG,
    42: rK,
    45: [pK, rK],
    60: MG,
    61: pK,
    95: rK,
    96: ZW,
    126: ZW,
  },
  kK = { 38: JW, 92: KW },
  AK = {
    [-5]: tK,
    [-4]: tK,
    [-3]: tK,
    33: ZG,
    38: JW,
    42: PW,
    60: [RW, zG],
    91: $G,
    92: [TG, KW],
    93: VG,
    95: PW,
    96: iG,
  },
  jK = { null: [PW, vK] },
  MK = { null: [42, 95] },
  NK = { null: [] };
