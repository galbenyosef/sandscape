// Create-CEn7EAZs 173 — stack
// Lines 57803-58318 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function KK(e) {
  let t = {
    transforms: [],
    canContainEols: [`emphasis`, `fragment`, `heading`, `paragraph`, `strong`],
    enter: {
      autolink: a(K),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: a(ae),
      blockQuote: a(W),
      characterEscape: T,
      characterReference: T,
      codeFenced: a(ne),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(ne, o),
      codeText: a(G, o),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: a(re),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(ie),
      hardBreakEscape: a(oe),
      hardBreakTrailing: a(oe),
      htmlFlow: a(se, o),
      htmlFlowData: T,
      htmlText: a(se, o),
      htmlTextData: T,
      image: a(ce),
      label: o,
      link: a(K),
      listItem: a(ue),
      listItemValue: f,
      listOrdered: a(le, d),
      listUnordered: a(le),
      paragraph: a(de),
      reference: z,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(ae),
      strong: a(fe),
      thematicBreak: a(me),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: x,
      autolink: c(),
      autolinkEmail: U,
      autolinkProtocol: te,
      blockQuote: c(),
      characterEscapeValue: E,
      characterReferenceMarkerHexadecimal: V,
      characterReferenceMarkerNumeric: V,
      characterReferenceValue: H,
      characterReference: ee,
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
  JK(t, (e || {}).mdastExtensions || []);
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
      WK.call(n, e[d][1].type) &&
        n[e[d][1].type].call(
          Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a),
          e[d][1],
        );
    }
    if (a.tokenStack.length > 0) {
      let e = a.tokenStack[a.tokenStack.length - 1];
      (e[1] || XK).call(a, void 0, e[0]);
    }
    for (
      r.position = {
        start: qK(
          e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 },
        ),
        end: qK(
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
      (e.position = { start: qK(t.start), end: void 0 }));
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
        (t ? t.call(this, e, r[0]) : (r[1] || XK).call(this, e, r[0]));
    else
      throw Error(
        "Cannot close `" +
          e.type +
          "` (" +
          gU({ start: e.start, end: e.end }) +
          `): it’s not open`,
      );
    n.position.end = qK(e.end);
  }
  function u() {
    return ZU(this.stack.pop());
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
    ((n.label = t), (n.identifier = uW(this.sliceSerialize(e)).toLowerCase()));
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
      ((n = pe()),
      (n.position = { start: qK(e.start), end: void 0 }),
      t.push(n)),
      this.stack.push(n));
  }
  function E(e) {
    let t = this.stack.pop();
    ((t.value += this.sliceSerialize(e)), (t.position.end = qK(e.end)));
  }
  function D(e) {
    let n = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      let t = n.children[n.children.length - 1];
      ((t.position.end = qK(e.end)), (this.data.atHardBreak = void 0));
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
    ((n.label = HK(t)), (n.identifier = uW(t).toLowerCase()));
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
      (n.identifier = uW(this.sliceSerialize(e)).toLowerCase()),
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
      ? ((r = lW(t, n === `characterReferenceMarkerNumeric` ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (r = nW(t));
    let i = this.stack[this.stack.length - 1];
    i.value += r;
  }
  function ee(e) {
    let t = this.stack.pop();
    t.position.end = qK(e.end);
  }
  function te(e) {
    E.call(this, e);
    let t = this.stack[this.stack.length - 1];
    t.url = this.sliceSerialize(e);
  }
  function U(e) {
    E.call(this, e);
    let t = this.stack[this.stack.length - 1];
    t.url = `mailto:` + this.sliceSerialize(e);
  }
  function W() {
    return { type: `blockquote`, children: [] };
  }
  function ne() {
    return { type: `code`, lang: null, meta: null, value: `` };
  }
  function G() {
    return { type: `inlineCode`, value: `` };
  }
  function re() {
    return {
      type: `definition`,
      identifier: ``,
      label: null,
      title: null,
      url: ``,
    };
  }
  function ie() {
    return { type: `emphasis`, children: [] };
  }
  function ae() {
    return { type: `heading`, depth: 0, children: [] };
  }
  function oe() {
    return { type: `break` };
  }
  function se() {
    return { type: `html`, value: `` };
  }
  function ce() {
    return { type: `image`, title: null, url: ``, alt: null };
  }
  function K() {
    return { type: `link`, title: null, url: ``, children: [] };
  }
  function le(e) {
    return {
      type: `list`,
      ordered: e.type === `listOrdered`,
      start: null,
      spread: e._spread,
      children: [],
    };
  }
  function ue(e) {
    return { type: `listItem`, spread: e._spread, checked: null, children: [] };
  }
  function de() {
    return { type: `paragraph`, children: [] };
  }
  function fe() {
    return { type: `strong`, children: [] };
  }
  function pe() {
    return { type: `text`, value: `` };
  }
  function me() {
    return { type: `thematicBreak` };
  }
}
