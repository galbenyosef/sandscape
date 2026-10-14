// Create-ea24k1TY 169 — end
// Lines 56420-56684 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function QG(e, t) {
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
function $G(e, t, n) {
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
        iW(t) ? lW(e, c, `lineSuffix`)(t) : c(t));
  }
  function c(r) {
    return r === null || nW(r) ? (e.exit(`setextHeadingLine`), t(r)) : n(r);
  }
}
var eK = { tokenize: tK };
function tK(e) {
  let t = this,
    n = e.attempt(
      wW,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        lW(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(XW, i)),
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
var nK = { resolveAll: oK() },
  rK = aK(`string`),
  iK = aK(`text`);
function aK(e) {
  return { resolveAll: oK(e === `text` ? sK : void 0), tokenize: t };
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
function oK(e) {
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
function sK(e, t) {
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
var cK = t({
    attentionMarkers: () => gK,
    contentInitial: () => uK,
    disable: () => _K,
    document: () => lK,
    flow: () => fK,
    flowInitial: () => dK,
    insideSpan: () => hK,
    string: () => pK,
    text: () => mK,
  }),
  lK = {
    42: UG,
    43: UG,
    45: UG,
    48: UG,
    49: UG,
    50: UG,
    51: UG,
    52: UG,
    53: UG,
    54: UG,
    55: UG,
    56: UG,
    57: UG,
    62: EW,
  },
  uK = { 91: aG },
  dK = { [-2]: RW, [-1]: RW, 32: RW },
  fK = {
    35: dG,
    42: VG,
    45: [ZG, VG],
    60: gG,
    61: ZG,
    95: VG,
    96: FW,
    126: FW,
  },
  pK = { 38: MW, 92: AW },
  mK = {
    [-5]: zG,
    [-4]: zG,
    [-3]: zG,
    33: FG,
    38: MW,
    42: vW,
    60: [SW, CG],
    91: LG,
    92: [lG, AW],
    93: TG,
    95: vW,
    96: HW,
  },
  hK = { null: [vW, nK] },
  gK = { null: [42, 95] },
  _K = { null: [] };
