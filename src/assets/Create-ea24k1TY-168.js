// Create-ea24k1TY 168 — containerstate
// Lines 56087-56419 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function MG(e, t, n) {
  return r;
  function r(t) {
    return (
      e.enter(`resource`),
      e.enter(`resourceMarker`),
      e.consume(t),
      e.exit(`resourceMarker`),
      i
    );
  }
  function i(t) {
    return rW(t) ? iG(e, a)(t) : a(t);
  }
  function a(t) {
    return t === 41
      ? u(t)
      : tG(
          e,
          o,
          s,
          `resourceDestination`,
          `resourceDestinationLiteral`,
          `resourceDestinationLiteralMarker`,
          `resourceDestinationRaw`,
          `resourceDestinationString`,
          32,
        )(t);
  }
  function o(t) {
    return rW(t) ? iG(e, c)(t) : u(t);
  }
  function s(e) {
    return n(e);
  }
  function c(t) {
    return t === 34 || t === 39 || t === 40
      ? rG(
          e,
          l,
          n,
          `resourceTitle`,
          `resourceTitleMarker`,
          `resourceTitleString`,
        )(t)
      : u(t);
  }
  function l(t) {
    return rW(t) ? iG(e, u)(t) : u(t);
  }
  function u(r) {
    return r === 41
      ? (e.enter(`resourceMarker`),
        e.consume(r),
        e.exit(`resourceMarker`),
        e.exit(`resource`),
        t)
      : n(r);
  }
}
function NG(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return nG.call(
      r,
      e,
      a,
      o,
      `reference`,
      `referenceMarker`,
      `referenceString`,
    )(t);
  }
  function a(e) {
    return r.parser.defined.includes(
      JU(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
    )
      ? t(e)
      : n(e);
  }
  function o(e) {
    return n(e);
  }
}
function PG(e, t, n) {
  return r;
  function r(t) {
    return (
      e.enter(`reference`),
      e.enter(`referenceMarker`),
      e.consume(t),
      e.exit(`referenceMarker`),
      i
    );
  }
  function i(r) {
    return r === 93
      ? (e.enter(`referenceMarker`),
        e.consume(r),
        e.exit(`referenceMarker`),
        e.exit(`reference`),
        t)
      : n(r);
  }
}
var FG = { name: `labelStartImage`, resolveAll: TG.resolveAll, tokenize: IG };
function IG(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (
      e.enter(`labelImage`),
      e.enter(`labelImageMarker`),
      e.consume(t),
      e.exit(`labelImageMarker`),
      a
    );
  }
  function a(t) {
    return t === 91
      ? (e.enter(`labelMarker`),
        e.consume(t),
        e.exit(`labelMarker`),
        e.exit(`labelImage`),
        o)
      : n(t);
  }
  function o(e) {
    return e === 94 && `_hiddenFootnoteSupport` in r.parser.constructs
      ? n(e)
      : t(e);
  }
}
var LG = { name: `labelStartLink`, resolveAll: TG.resolveAll, tokenize: RG };
function RG(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (
      e.enter(`labelLink`),
      e.enter(`labelMarker`),
      e.consume(t),
      e.exit(`labelMarker`),
      e.exit(`labelLink`),
      a
    );
  }
  function a(e) {
    return e === 94 && `_hiddenFootnoteSupport` in r.parser.constructs
      ? n(e)
      : t(e);
  }
}
var zG = { name: `lineEnding`, tokenize: BG };
function BG(e, t) {
  return n;
  function n(n) {
    return (
      e.enter(`lineEnding`),
      e.consume(n),
      e.exit(`lineEnding`),
      lW(e, t, `linePrefix`)
    );
  }
}
var VG = { name: `thematicBreak`, tokenize: HG };
function HG(e, t, n) {
  let r = 0,
    i;
  return a;
  function a(t) {
    return (e.enter(`thematicBreak`), o(t));
  }
  function o(e) {
    return ((i = e), s(e));
  }
  function s(a) {
    return a === i
      ? (e.enter(`thematicBreakSequence`), c(a))
      : r >= 3 && (a === null || nW(a))
        ? (e.exit(`thematicBreak`), t(a))
        : n(a);
  }
  function c(t) {
    return t === i
      ? (e.consume(t), r++, c)
      : (e.exit(`thematicBreakSequence`),
        iW(t) ? lW(e, s, `whitespace`)(t) : s(t));
  }
}
var UG = {
    continuation: { tokenize: qG },
    exit: YG,
    name: `list`,
    tokenize: KG,
  },
  WG = { partial: !0, tokenize: XG },
  GG = { partial: !0, tokenize: JG };
function KG(e, t, n) {
  let r = this,
    i = r.events[r.events.length - 1],
    a =
      i && i[1].type === `linePrefix`
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    o = 0;
  return s;
  function s(t) {
    let i =
      r.containerState.type ||
      (t === 42 || t === 43 || t === 45 ? `listUnordered` : `listOrdered`);
    if (
      i === `listUnordered`
        ? !r.containerState.marker || t === r.containerState.marker
        : $U(t)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = i), e.enter(i, { _container: !0 })),
        i === `listUnordered`)
      )
        return (
          e.enter(`listItemPrefix`),
          t === 42 || t === 45 ? e.check(VG, n, l)(t) : l(t)
        );
      if (!r.interrupt || t === 49)
        return (e.enter(`listItemPrefix`), e.enter(`listItemValue`), c(t));
    }
    return n(t);
  }
  function c(t) {
    return $U(t) && ++o < 10
      ? (e.consume(t), c)
      : (!r.interrupt || o < 2) &&
          (r.containerState.marker
            ? t === r.containerState.marker
            : t === 41 || t === 46)
        ? (e.exit(`listItemValue`), l(t))
        : n(t);
  }
  function l(t) {
    return (
      e.enter(`listItemMarker`),
      e.consume(t),
      e.exit(`listItemMarker`),
      (r.containerState.marker = r.containerState.marker || t),
      e.check(wW, r.interrupt ? n : u, e.attempt(WG, f, d))
    );
  }
  function u(e) {
    return ((r.containerState.initialBlankLine = !0), a++, f(e));
  }
  function d(t) {
    return iW(t)
      ? (e.enter(`listItemPrefixWhitespace`),
        e.consume(t),
        e.exit(`listItemPrefixWhitespace`),
        f)
      : n(t);
  }
  function f(n) {
    return (
      (r.containerState.size =
        a + r.sliceSerialize(e.exit(`listItemPrefix`), !0).length),
      t(n)
    );
  }
}
function qG(e, t, n) {
  let r = this;
  return ((r.containerState._closeFlow = void 0), e.check(wW, i, a));
  function i(n) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      lW(e, t, `listItemIndent`, r.containerState.size + 1)(n)
    );
  }
  function a(n) {
    return r.containerState.furtherBlankLines || !iW(n)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(n))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(GG, t, o)(n));
  }
  function o(i) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      lW(
        e,
        e.attempt(UG, t, n),
        `linePrefix`,
        r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4,
      )(i)
    );
  }
}
function JG(e, t, n) {
  let r = this;
  return lW(e, i, `listItemIndent`, r.containerState.size + 1);
  function i(e) {
    let i = r.events[r.events.length - 1];
    return i &&
      i[1].type === `listItemIndent` &&
      i[2].sliceSerialize(i[1], !0).length === r.containerState.size
      ? t(e)
      : n(e);
  }
}
function YG(e) {
  e.exit(this.containerState.type);
}
function XG(e, t, n) {
  let r = this;
  return lW(
    e,
    i,
    `listItemPrefixWhitespace`,
    r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 5,
  );
  function i(e) {
    let i = r.events[r.events.length - 1];
    return !iW(e) && i && i[1].type === `listItemPrefixWhitespace`
      ? t(e)
      : n(e);
  }
}
var ZG = { name: `setextUnderline`, resolveTo: QG, tokenize: $G };
