// Create-CEn7EAZs 170 — containerstate
// Lines 56870-57202 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function JG(e, t, n) {
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
    return yW(t) ? bG(e, a)(t) : a(t);
  }
  function a(t) {
    return t === 41
      ? u(t)
      : _G(
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
    return yW(t) ? bG(e, c)(t) : u(t);
  }
  function s(e) {
    return n(e);
  }
  function c(t) {
    return t === 34 || t === 39 || t === 40
      ? yG(
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
    return yW(t) ? bG(e, u)(t) : u(t);
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
function YG(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return vG.call(
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
      uW(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
    )
      ? t(e)
      : n(e);
  }
  function o(e) {
    return n(e);
  }
}
function XG(e, t, n) {
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
var ZG = { name: `labelStartImage`, resolveAll: VG.resolveAll, tokenize: QG };
function QG(e, t, n) {
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
var $G = { name: `labelStartLink`, resolveAll: VG.resolveAll, tokenize: eK };
function eK(e, t, n) {
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
var tK = { name: `lineEnding`, tokenize: nK };
function nK(e, t) {
  return n;
  function n(n) {
    return (
      e.enter(`lineEnding`),
      e.consume(n),
      e.exit(`lineEnding`),
      TW(e, t, `linePrefix`)
    );
  }
}
var rK = { name: `thematicBreak`, tokenize: iK };
function iK(e, t, n) {
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
      : r >= 3 && (a === null || vW(a))
        ? (e.exit(`thematicBreak`), t(a))
        : n(a);
  }
  function c(t) {
    return t === i
      ? (e.consume(t), r++, c)
      : (e.exit(`thematicBreakSequence`),
        bW(t) ? TW(e, s, `whitespace`)(t) : s(t));
  }
}
var aK = {
    continuation: { tokenize: lK },
    exit: dK,
    name: `list`,
    tokenize: cK,
  },
  oK = { partial: !0, tokenize: fK },
  sK = { partial: !0, tokenize: uK };
function cK(e, t, n) {
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
        : hW(t)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = i), e.enter(i, { _container: !0 })),
        i === `listUnordered`)
      )
        return (
          e.enter(`listItemPrefix`),
          t === 42 || t === 45 ? e.check(rK, n, l)(t) : l(t)
        );
      if (!r.interrupt || t === 49)
        return (e.enter(`listItemPrefix`), e.enter(`listItemValue`), c(t));
    }
    return n(t);
  }
  function c(t) {
    return hW(t) && ++o < 10
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
      e.check(BW, r.interrupt ? n : u, e.attempt(oK, f, d))
    );
  }
  function u(e) {
    return ((r.containerState.initialBlankLine = !0), a++, f(e));
  }
  function d(t) {
    return bW(t)
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
function lK(e, t, n) {
  let r = this;
  return ((r.containerState._closeFlow = void 0), e.check(BW, i, a));
  function i(n) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      TW(e, t, `listItemIndent`, r.containerState.size + 1)(n)
    );
  }
  function a(n) {
    return r.containerState.furtherBlankLines || !bW(n)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(n))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(sK, t, o)(n));
  }
  function o(i) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      TW(
        e,
        e.attempt(aK, t, n),
        `linePrefix`,
        r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4,
      )(i)
    );
  }
}
function uK(e, t, n) {
  let r = this;
  return TW(e, i, `listItemIndent`, r.containerState.size + 1);
  function i(e) {
    let i = r.events[r.events.length - 1];
    return i &&
      i[1].type === `listItemIndent` &&
      i[2].sliceSerialize(i[1], !0).length === r.containerState.size
      ? t(e)
      : n(e);
  }
}
function dK(e) {
  e.exit(this.containerState.type);
}
function fK(e, t, n) {
  let r = this;
  return TW(
    e,
    i,
    `listItemPrefixWhitespace`,
    r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 5,
  );
  function i(e) {
    let i = r.events[r.events.length - 1];
    return !bW(e) && i && i[1].type === `listItemPrefixWhitespace`
      ? t(e)
      : n(e);
  }
}
var pK = { name: `setextUnderline`, resolveTo: mK, tokenize: hK };
