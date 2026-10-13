// assets__Create-ea24k1TY 163 — exit
// Lines 54419-54751 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function yW(e, t) {
  let n = -1,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u;
  for (; ++n < e.length;)
    if (
      e[n][0] === `enter` &&
      e[n][1].type === `attentionSequence` &&
      e[n][1]._close
    ) {
      for (r = n; r--;)
        if (
          e[r][0] === `exit` &&
          e[r][1].type === `attentionSequence` &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          c =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          let d = { ...e[r][1].end },
            f = { ...e[n][1].start };
          (xW(d, -c),
            xW(f, c),
            (o = {
              type: c > 1 ? `strongSequence` : `emphasisSequence`,
              start: d,
              end: { ...e[r][1].end },
            }),
            (s = {
              type: c > 1 ? `strongSequence` : `emphasisSequence`,
              start: { ...e[n][1].start },
              end: f,
            }),
            (a = {
              type: c > 1 ? `strongText` : `emphasisText`,
              start: { ...e[r][1].end },
              end: { ...e[n][1].start },
            }),
            (i = {
              type: c > 1 ? `strong` : `emphasis`,
              start: { ...o.start },
              end: { ...s.end },
            }),
            (e[r][1].end = { ...o.start }),
            (e[n][1].start = { ...s.end }),
            (l = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (l = HU(l, [
                [`enter`, e[r][1], t],
                [`exit`, e[r][1], t],
              ])),
            (l = HU(l, [
              [`enter`, i, t],
              [`enter`, o, t],
              [`exit`, o, t],
              [`enter`, a, t],
            ])),
            (l = HU(
              l,
              _W(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t),
            )),
            (l = HU(l, [
              [`exit`, a, t],
              [`enter`, s, t],
              [`exit`, s, t],
              [`exit`, i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((u = 2),
                (l = HU(l, [
                  [`enter`, e[n][1], t],
                  [`exit`, e[n][1], t],
                ])))
              : (u = 0),
            VU(e, r - 1, n - r + 3, l),
            (n = r + l.length - u - 2));
          break;
        }
    }
  for (n = -1; ++n < e.length;)
    e[n][1].type === `attentionSequence` && (e[n][1].type = `data`);
  return e;
}
function bW(e, t) {
  let n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = gW(r),
    a;
  return o;
  function o(t) {
    return ((a = t), e.enter(`attentionSequence`), s(t));
  }
  function s(o) {
    if (o === a) return (e.consume(o), s);
    let c = e.exit(`attentionSequence`),
      l = gW(o),
      u = !l || (l === 2 && i) || n.includes(o),
      d = !i || (i === 2 && l) || n.includes(r);
    return (
      (c._open = !!(a === 42 ? u : u && (i || !d))),
      (c._close = !!(a === 42 ? d : d && (l || !u))),
      t(o)
    );
  }
}
function xW(e, t) {
  ((e.column += t), (e.offset += t), (e._bufferIndex += t));
}
var SW = { name: `autolink`, tokenize: CW };
function CW(e, t, n) {
  let r = 0;
  return i;
  function i(t) {
    return (
      e.enter(`autolink`),
      e.enter(`autolinkMarker`),
      e.consume(t),
      e.exit(`autolinkMarker`),
      e.enter(`autolinkProtocol`),
      a
    );
  }
  function a(t) {
    return YU(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
  }
  function o(e) {
    return e === 43 || e === 45 || e === 46 || XU(e) ? ((r = 1), s(e)) : l(e);
  }
  function s(t) {
    return t === 58
      ? (e.consume(t), (r = 0), c)
      : (t === 43 || t === 45 || t === 46 || XU(t)) && r++ < 32
        ? (e.consume(t), s)
        : ((r = 0), l(t));
  }
  function c(r) {
    return r === 62
      ? (e.exit(`autolinkProtocol`),
        e.enter(`autolinkMarker`),
        e.consume(r),
        e.exit(`autolinkMarker`),
        e.exit(`autolink`),
        t)
      : r === null || r === 32 || r === 60 || QU(r)
        ? n(r)
        : (e.consume(r), c);
  }
  function l(t) {
    return t === 64 ? (e.consume(t), u) : ZU(t) ? (e.consume(t), l) : n(t);
  }
  function u(e) {
    return XU(e) ? d(e) : n(e);
  }
  function d(n) {
    return n === 46
      ? (e.consume(n), (r = 0), u)
      : n === 62
        ? ((e.exit(`autolinkProtocol`).type = `autolinkEmail`),
          e.enter(`autolinkMarker`),
          e.consume(n),
          e.exit(`autolinkMarker`),
          e.exit(`autolink`),
          t)
        : f(n);
  }
  function f(t) {
    if ((t === 45 || XU(t)) && r++ < 63) {
      let n = t === 45 ? f : d;
      return (e.consume(t), n);
    }
    return n(t);
  }
}
var wW = { partial: !0, tokenize: TW };
function TW(e, t, n) {
  return r;
  function r(t) {
    return iW(t) ? lW(e, i, `linePrefix`)(t) : i(t);
  }
  function i(e) {
    return e === null || nW(e) ? t(e) : n(e);
  }
}
var EW = {
  continuation: { tokenize: OW },
  exit: kW,
  name: `blockQuote`,
  tokenize: DW,
};
function DW(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    if (t === 62) {
      let n = r.containerState;
      return (
        (n.open ||= (e.enter(`blockQuote`, { _container: !0 }), !0)),
        e.enter(`blockQuotePrefix`),
        e.enter(`blockQuoteMarker`),
        e.consume(t),
        e.exit(`blockQuoteMarker`),
        a
      );
    }
    return n(t);
  }
  function a(n) {
    return iW(n)
      ? (e.enter(`blockQuotePrefixWhitespace`),
        e.consume(n),
        e.exit(`blockQuotePrefixWhitespace`),
        e.exit(`blockQuotePrefix`),
        t)
      : (e.exit(`blockQuotePrefix`), t(n));
  }
}
function OW(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return iW(t)
      ? lW(
          e,
          a,
          `linePrefix`,
          r.parser.constructs.disable.null.includes(`codeIndented`)
            ? void 0
            : 4,
        )(t)
      : a(t);
  }
  function a(r) {
    return e.attempt(EW, t, n)(r);
  }
}
function kW(e) {
  e.exit(`blockQuote`);
}
var AW = { name: `characterEscape`, tokenize: jW };
function jW(e, t, n) {
  return r;
  function r(t) {
    return (
      e.enter(`characterEscape`),
      e.enter(`escapeMarker`),
      e.consume(t),
      e.exit(`escapeMarker`),
      i
    );
  }
  function i(r) {
    return tW(r)
      ? (e.enter(`characterEscapeValue`),
        e.consume(r),
        e.exit(`characterEscapeValue`),
        e.exit(`characterEscape`),
        t)
      : n(r);
  }
}
var MW = { name: `characterReference`, tokenize: NW };
function NW(e, t, n) {
  let r = this,
    i = 0,
    a,
    o;
  return s;
  function s(t) {
    return (
      e.enter(`characterReference`),
      e.enter(`characterReferenceMarker`),
      e.consume(t),
      e.exit(`characterReferenceMarker`),
      c
    );
  }
  function c(t) {
    return t === 35
      ? (e.enter(`characterReferenceMarkerNumeric`),
        e.consume(t),
        e.exit(`characterReferenceMarkerNumeric`),
        l)
      : (e.enter(`characterReferenceValue`), (a = 31), (o = XU), u(t));
  }
  function l(t) {
    return t === 88 || t === 120
      ? (e.enter(`characterReferenceMarkerHexadecimal`),
        e.consume(t),
        e.exit(`characterReferenceMarkerHexadecimal`),
        e.enter(`characterReferenceValue`),
        (a = 6),
        (o = eW),
        u)
      : (e.enter(`characterReferenceValue`), (a = 7), (o = $U), u(t));
  }
  function u(s) {
    if (s === 59 && i) {
      let i = e.exit(`characterReferenceValue`);
      return o === XU && !BU(r.sliceSerialize(i))
        ? n(s)
        : (e.enter(`characterReferenceMarker`),
          e.consume(s),
          e.exit(`characterReferenceMarker`),
          e.exit(`characterReference`),
          t);
    }
    return o(s) && i++ < a ? (e.consume(s), u) : n(s);
  }
}
var PW = { partial: !0, tokenize: LW },
  FW = { concrete: !0, name: `codeFenced`, tokenize: IW };
