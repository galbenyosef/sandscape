// Create-ea24k1TY 171 — stack
// Lines 57020-57535 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function AK(e) {
  let t = {
    transforms: [],
    canContainEols: [`emphasis`, `fragment`, `heading`, `paragraph`, `strong`],
    enter: {
      autolink: a(q),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: a(ie),
      blockQuote: a(G),
      characterEscape: T,
      characterReference: T,
      codeFenced: a(te),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(te, o),
      codeText: a(K, o),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: a(ne),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(re),
      hardBreakEscape: a(ae),
      hardBreakTrailing: a(ae),
      htmlFlow: a(oe, o),
      htmlFlowData: T,
      htmlText: a(oe, o),
      htmlTextData: T,
      image: a(se),
      label: o,
      link: a(q),
      listItem: a(le),
      listItemValue: f,
      listOrdered: a(ce, d),
      listUnordered: a(ce),
      paragraph: a(ue),
      reference: z,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(ie),
      strong: a(de),
      thematicBreak: a(pe),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: x,
      autolink: c(),
      autolinkEmail: W,
      autolinkProtocol: ee,
      blockQuote: c(),
      characterEscapeValue: E,
      characterReferenceMarkerHexadecimal: V,
      characterReferenceMarkerNumeric: V,
      characterReferenceValue: H,
      characterReference: U,
      codeFenced: c(g),
      codeFencedFence: h,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: m,
      codeFlowValue: E,
      codeIndented: c(_),
      codeText: c(j),
      codeTextData: E,
      data: E,
      definition: c(),
      definitionDestinationString: b,
      definitionLabelString: v,
      definitionTitleString: y,
      emphasis: c(),
      hardBreakEscape: c(O),
      hardBreakTrailing: c(O),
      htmlFlow: c(k),
      htmlFlowData: E,
      htmlText: c(A),
      htmlTextData: E,
      image: c(N),
      label: F,
      labelText: P,
      lineEnding: D,
      link: c(M),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: B,
      resourceDestinationString: I,
      resourceTitleString: L,
      resource: R,
      setextHeading: c(w),
      setextHeadingLineSequence: C,
      setextHeadingText: S,
      strong: c(),
      thematicBreak: c(),
    },
  };
  MK(t, (e || {}).mdastExtensions || []);
  let n = {};
  return r;
  function r(e) {
    let r = { type: `root`, children: [] },
      a = {
        stack: [r],
        tokenStack: [],
        config: t,
        enter: s,
        exit: l,
        buffer: o,
        resume: u,
        data: n,
      },
      c = [],
      d = -1;
    for (; ++d < e.length;)
      (e[d][1].type === `listOrdered` || e[d][1].type === `listUnordered`) &&
        (e[d][0] === `enter` ? c.push(d) : (d = i(e, c.pop(), d)));
    for (d = -1; ++d < e.length;) {
      let n = t[e[d][0]];
      OK.call(n, e[d][1].type) &&
        n[e[d][1].type].call(
          Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a),
          e[d][1],
        );
    }
    if (a.tokenStack.length > 0) {
      let e = a.tokenStack[a.tokenStack.length - 1];
      (e[1] || PK).call(a, void 0, e[0]);
    }
    for (
      r.position = {
        start: jK(
          e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 },
        ),
        end: jK(
          e.length > 0
            ? e[e.length - 2][1].end
            : { line: 1, column: 1, offset: 0 },
        ),
      },
        d = -1;
      ++d < t.transforms.length;
    )
      r = t.transforms[d](r) || r;
    return r;
  }
  function i(e, t, n) {
    let r = t - 1,
      i = -1,
      a = !1,
      o,
      s,
      c,
      l;
    for (; ++r <= n;) {
      let t = e[r];
      switch (t[1].type) {
        case `listUnordered`:
        case `listOrdered`:
        case `blockQuote`:
          (t[0] === `enter` ? i++ : i--, (l = void 0));
          break;
        case `lineEndingBlank`:
          t[0] === `enter` && (o && !l && !i && !c && (c = r), (l = void 0));
          break;
        case `linePrefix`:
        case `listItemValue`:
        case `listItemMarker`:
        case `listItemPrefix`:
        case `listItemPrefixWhitespace`:
          break;
        default:
          l = void 0;
      }
      if (
        (!i && t[0] === `enter` && t[1].type === `listItemPrefix`) ||
        (i === -1 &&
          t[0] === `exit` &&
          (t[1].type === `listUnordered` || t[1].type === `listOrdered`))
      ) {
        if (o) {
          let i = r;
          for (s = void 0; i--;) {
            let t = e[i];
            if (t[1].type === `lineEnding` || t[1].type === `lineEndingBlank`) {
              if (t[0] === `exit`) continue;
              (s && ((e[s][1].type = `lineEndingBlank`), (a = !0)),
                (t[1].type = `lineEnding`),
                (s = i));
            } else if (!(
              t[1].type === `linePrefix` ||
              t[1].type === `blockQuotePrefix` ||
              t[1].type === `blockQuotePrefixWhitespace` ||
              t[1].type === `blockQuoteMarker` ||
              t[1].type === `listItemIndent`
            ))
              break;
          }
          (c && (!s || c < s) && (o._spread = !0),
            (o.end = Object.assign({}, s ? e[s][1].start : t[1].end)),
            e.splice(s || r, 0, [`exit`, o, t[2]]),
            r++,
            n++);
        }
        if (t[1].type === `listItemPrefix`) {
          let i = {
            type: `listItem`,
            _spread: !1,
            start: Object.assign({}, t[1].start),
            end: void 0,
          };
          ((o = i),
            e.splice(r, 0, [`enter`, i, t[2]]),
            r++,
            n++,
            (c = void 0),
            (l = !0));
        }
      }
    }
    return ((e[t][1]._spread = a), n);
  }
  function a(e, t) {
    return n;
    function n(n) {
      (s.call(this, e(n), n), t && t.call(this, n));
    }
  }
  function o() {
    this.stack.push({ type: `fragment`, children: [] });
  }
  function s(e, t, n) {
    (this.stack[this.stack.length - 1].children.push(e),
      this.stack.push(e),
      this.tokenStack.push([t, n || void 0]),
      (e.position = { start: jK(t.start), end: void 0 }));
  }
  function c(e) {
    return t;
    function t(t) {
      (e && e.call(this, t), l.call(this, t));
    }
  }
  function l(e, t) {
    let n = this.stack.pop(),
      r = this.tokenStack.pop();
    if (r)
      r[0].type !== e.type &&
        (t ? t.call(this, e, r[0]) : (r[1] || PK).call(this, e, r[0]));
    else
      throw Error(
        "Cannot close `" +
          e.type +
          "` (" +
          eU({ start: e.start, end: e.end }) +
          `): it’s not open`,
      );
    n.position.end = jK(e.end);
  }
  function u() {
    return FU(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function f(e) {
    if (this.data.expectingFirstListItemValue) {
      let t = this.stack[this.stack.length - 2];
      ((t.start = Number.parseInt(this.sliceSerialize(e), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function p() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.lang = e;
  }
  function m() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.meta = e;
  }
  function h() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function g() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    ((t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ``)),
      (this.data.flowCodeInside = void 0));
  }
  function _() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.value = e.replace(/(\r?\n|\r)$/g, ``);
  }
  function v(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1];
    ((n.label = t), (n.identifier = JU(this.sliceSerialize(e)).toLowerCase()));
  }
  function y() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.title = e;
  }
  function b() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.url = e;
  }
  function x(e) {
    let t = this.stack[this.stack.length - 1];
    t.depth ||= this.sliceSerialize(e).length;
  }
  function S() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function C(e) {
    let t = this.stack[this.stack.length - 1];
    t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function T(e) {
    let t = this.stack[this.stack.length - 1].children,
      n = t[t.length - 1];
    ((!n || n.type !== `text`) &&
      ((n = fe()),
      (n.position = { start: jK(e.start), end: void 0 }),
      t.push(n)),
      this.stack.push(n));
  }
  function E(e) {
    let t = this.stack.pop();
    ((t.value += this.sliceSerialize(e)), (t.position.end = jK(e.end)));
  }
  function D(e) {
    let n = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      let t = n.children[n.children.length - 1];
      ((t.position.end = jK(e.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(n.type) &&
      (T.call(this, e), E.call(this, e));
  }
  function O() {
    this.data.atHardBreak = !0;
  }
  function k() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function A() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function j() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function M() {
    let e = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      let t = this.data.referenceType || `shortcut`;
      ((e.type += `Reference`),
        (e.referenceType = t),
        delete e.url,
        delete e.title);
    } else (delete e.identifier, delete e.label);
    this.data.referenceType = void 0;
  }
  function N() {
    let e = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      let t = this.data.referenceType || `shortcut`;
      ((e.type += `Reference`),
        (e.referenceType = t),
        delete e.url,
        delete e.title);
    } else (delete e.identifier, delete e.label);
    this.data.referenceType = void 0;
  }
  function P(e) {
    let t = this.sliceSerialize(e),
      n = this.stack[this.stack.length - 2];
    ((n.label = EK(t)), (n.identifier = JU(t).toLowerCase()));
  }
  function F() {
    let e = this.stack[this.stack.length - 1],
      t = this.resume(),
      n = this.stack[this.stack.length - 1];
    ((this.data.inReference = !0),
      n.type === `link` ? (n.children = e.children) : (n.alt = t));
  }
  function I() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.url = e;
  }
  function L() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.title = e;
  }
  function R() {
    this.data.inReference = void 0;
  }
  function z() {
    this.data.referenceType = `collapsed`;
  }
  function B(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1];
    ((n.label = t),
      (n.identifier = JU(this.sliceSerialize(e)).toLowerCase()),
      (this.data.referenceType = `full`));
  }
  function V(e) {
    this.data.characterReferenceType = e.type;
  }
  function H(e) {
    let t = this.sliceSerialize(e),
      n = this.data.characterReferenceType,
      r;
    n
      ? ((r = qU(t, n === `characterReferenceMarkerNumeric` ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (r = BU(t));
    let i = this.stack[this.stack.length - 1];
    i.value += r;
  }
  function U(e) {
    let t = this.stack.pop();
    t.position.end = jK(e.end);
  }
  function ee(e) {
    E.call(this, e);
    let t = this.stack[this.stack.length - 1];
    t.url = this.sliceSerialize(e);
  }
  function W(e) {
    E.call(this, e);
    let t = this.stack[this.stack.length - 1];
    t.url = `mailto:` + this.sliceSerialize(e);
  }
  function G() {
    return { type: `blockquote`, children: [] };
  }
  function te() {
    return { type: `code`, lang: null, meta: null, value: `` };
  }
  function K() {
    return { type: `inlineCode`, value: `` };
  }
  function ne() {
    return {
      type: `definition`,
      identifier: ``,
      label: null,
      title: null,
      url: ``,
    };
  }
  function re() {
    return { type: `emphasis`, children: [] };
  }
  function ie() {
    return { type: `heading`, depth: 0, children: [] };
  }
  function ae() {
    return { type: `break` };
  }
  function oe() {
    return { type: `html`, value: `` };
  }
  function se() {
    return { type: `image`, title: null, url: ``, alt: null };
  }
  function q() {
    return { type: `link`, title: null, url: ``, children: [] };
  }
  function ce(e) {
    return {
      type: `list`,
      ordered: e.type === `listOrdered`,
      start: null,
      spread: e._spread,
      children: [],
    };
  }
  function le(e) {
    return { type: `listItem`, spread: e._spread, checked: null, children: [] };
  }
  function ue() {
    return { type: `paragraph`, children: [] };
  }
  function de() {
    return { type: `strong`, children: [] };
  }
  function fe() {
    return { type: `text`, value: `` };
  }
  function pe() {
    return { type: `thematicBreak` };
  }
}
