// Create-CEn7EAZs 182 — move
// Lines 61048-61397 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function EX(e, t, n, r) {
  let i = cX(n),
    a = i === `"` ? `Quote` : `Apostrophe`,
    o = n.createTracker(r),
    s,
    c;
  if (TX(e, n)) {
    let t = n.stack;
    ((n.stack = []), (s = n.enter(`autolink`)));
    let r = o.move(`<`);
    return (
      (r += o.move(
        n.containerPhrasing(e, { before: r, after: `>`, ...o.current() }),
      )),
      (r += o.move(`>`)),
      s(),
      (n.stack = t),
      r
    );
  }
  ((s = n.enter(`link`)), (c = n.enter(`label`)));
  let l = o.move(`[`);
  return (
    (l += o.move(
      n.containerPhrasing(e, { before: l, after: `](`, ...o.current() }),
    )),
    (l += o.move(`](`)),
    c(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((c = n.enter(`destinationLiteral`)),
        (l += o.move(`<`)),
        (l += o.move(n.safe(e.url, { before: l, after: `>`, ...o.current() }))),
        (l += o.move(`>`)))
      : ((c = n.enter(`destinationRaw`)),
        (l += o.move(
          n.safe(e.url, {
            before: l,
            after: e.title ? ` ` : `)`,
            ...o.current(),
          }),
        ))),
    c(),
    e.title &&
      ((c = n.enter(`title${a}`)),
      (l += o.move(` ` + i)),
      (l += o.move(n.safe(e.title, { before: l, after: i, ...o.current() }))),
      (l += o.move(i)),
      c()),
    (l += o.move(`)`)),
    s(),
    l
  );
}
function DX(e, t, n) {
  return TX(e, n) ? `<` : `[`;
}
OX.peek = kX;
function OX(e, t, n, r) {
  let i = e.referenceType,
    a = n.enter(`linkReference`),
    o = n.enter(`label`),
    s = n.createTracker(r),
    c = s.move(`[`),
    l = n.containerPhrasing(e, { before: c, after: `]`, ...s.current() });
  ((c += s.move(l + `][`)), o());
  let u = n.stack;
  ((n.stack = []), (o = n.enter(`reference`)));
  let d = n.safe(n.associationId(e), { before: c, after: `]`, ...s.current() });
  return (
    o(),
    (n.stack = u),
    a(),
    i === `full` || !l || l !== d
      ? (c += s.move(d + `]`))
      : i === `shortcut`
        ? (c = c.slice(0, -1))
        : (c += s.move(`]`)),
    c
  );
}
function kX() {
  return `[`;
}
function AX(e) {
  let t = e.options.bullet || `*`;
  if (t !== `*` && t !== `+` && t !== `-`)
    throw Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bullet`, expected `*`, `+`, or `-`",
    );
  return t;
}
function jX(e) {
  let t = AX(e),
    n = e.options.bulletOther;
  if (!n) return t === `*` ? `-` : `*`;
  if (n !== `*` && n !== `+` && n !== `-`)
    throw Error(
      "Cannot serialize items with `" +
        n +
        "` for `options.bulletOther`, expected `*`, `+`, or `-`",
    );
  if (n === t)
    throw Error(
      "Expected `bullet` (`" +
        t +
        "`) and `bulletOther` (`" +
        n +
        "`) to be different",
    );
  return n;
}
function MX(e) {
  let t = e.options.bulletOrdered || `.`;
  if (t !== `.` && t !== `)`)
    throw Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bulletOrdered`, expected `.` or `)`",
    );
  return t;
}
function NX(e) {
  let t = e.options.rule || `*`;
  if (t !== `*` && t !== `-` && t !== `_`)
    throw Error(
      "Cannot serialize rules with `" +
        t +
        "` for `options.rule`, expected `*`, `-`, or `_`",
    );
  return t;
}
function PX(e, t, n, r) {
  let i = n.enter(`list`),
    a = n.bulletCurrent,
    o = e.ordered ? MX(n) : AX(n),
    s = e.ordered ? (o === `.` ? `)` : `.`) : jX(n),
    c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    let t = e.children ? e.children[0] : void 0;
    if (
      ((o === `*` || o === `-`) &&
        t &&
        (!t.children || !t.children[0]) &&
        n.stack[n.stack.length - 1] === `list` &&
        n.stack[n.stack.length - 2] === `listItem` &&
        n.stack[n.stack.length - 3] === `list` &&
        n.stack[n.stack.length - 4] === `listItem` &&
        n.indexStack[n.indexStack.length - 1] === 0 &&
        n.indexStack[n.indexStack.length - 2] === 0 &&
        n.indexStack[n.indexStack.length - 3] === 0 &&
        (c = !0),
      NX(n) === o && t)
    ) {
      let t = -1;
      for (; ++t < e.children.length;) {
        let n = e.children[t];
        if (
          n &&
          n.type === `listItem` &&
          n.children &&
          n.children[0] &&
          n.children[0].type === `thematicBreak`
        ) {
          c = !0;
          break;
        }
      }
    }
  }
  (c && (o = s), (n.bulletCurrent = o));
  let l = n.containerFlow(e, r);
  return ((n.bulletLastUsed = o), (n.bulletCurrent = a), i(), l);
}
function FX(e) {
  let t = e.options.listItemIndent || `one`;
  if (t !== `tab` && t !== `one` && t !== `mixed`)
    throw Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`",
    );
  return t;
}
function IX(e, t, n, r) {
  let i = FX(n),
    a = n.bulletCurrent || AX(n);
  t &&
    t.type === `list` &&
    t.ordered &&
    (a =
      (typeof t.start == `number` && t.start > -1 ? t.start : 1) +
      (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) +
      a);
  let o = a.length + 1;
  (i === `tab` ||
    (i === `mixed` && ((t && t.type === `list` && t.spread) || e.spread))) &&
    (o = Math.ceil(o / 4) * 4);
  let s = n.createTracker(r);
  (s.move(a + ` `.repeat(o - a.length)), s.shift(o));
  let c = n.enter(`listItem`),
    l = n.indentLines(n.containerFlow(e, s.current()), u);
  return (c(), l);
  function u(e, t, n) {
    return t
      ? (n ? `` : ` `.repeat(o)) + e
      : (n ? a : a + ` `.repeat(o - a.length)) + e;
  }
}
function LX(e, t, n, r) {
  let i = n.enter(`paragraph`),
    a = n.enter(`phrasing`),
    o = n.containerPhrasing(e, r);
  return (a(), i(), o);
}
var RX = Gq([
  `break`,
  `delete`,
  `emphasis`,
  `footnote`,
  `footnoteReference`,
  `image`,
  `imageReference`,
  `inlineCode`,
  `inlineMath`,
  `link`,
  `linkReference`,
  `mdxJsxTextElement`,
  `mdxTextExpression`,
  `strong`,
  `text`,
  `textDirective`,
]);
function zX(e, t, n, r) {
  return (
    e.children.some(function (e) {
      return RX(e);
    })
      ? n.containerPhrasing
      : n.containerFlow
  ).call(n, e, r);
}
function BX(e) {
  let t = e.options.strong || `*`;
  if (t !== `*` && t !== `_`)
    throw Error(
      "Cannot serialize strong with `" +
        t +
        "` for `options.strong`, expected `*`, or `_`",
    );
  return t;
}
VX.peek = HX;
function VX(e, t, n, r) {
  let i = BX(n),
    a = n.enter(`strong`),
    o = n.createTracker(r),
    s = o.move(i + i),
    c = o.move(n.containerPhrasing(e, { after: i, before: s, ...o.current() })),
    l = c.charCodeAt(0),
    u = fX(r.before.charCodeAt(r.before.length - 1), l, i);
  u.inside && (c = dX(l) + c.slice(1));
  let d = c.charCodeAt(c.length - 1),
    f = fX(r.after.charCodeAt(0), d, i);
  f.inside && (c = c.slice(0, -1) + dX(d));
  let p = o.move(i + i);
  return (
    a(),
    (n.attentionEncodeSurroundingInfo = {
      after: f.outside,
      before: u.outside,
    }),
    s + c + p
  );
}
function HX(e, t, n) {
  return n.options.strong || `*`;
}
function UX(e, t, n, r) {
  return n.safe(e.value, r);
}
function WX(e) {
  let t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw Error(
      "Cannot serialize rules with repetition `" +
        t +
        "` for `options.ruleRepetition`, expected `3` or more",
    );
  return t;
}
function GX(e, t, n) {
  let r = (NX(n) + (n.options.ruleSpaces ? ` ` : ``)).repeat(WX(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
var KX = {
  blockquote: QY,
  break: nX,
  code: oX,
  definition: lX,
  emphasis: pX,
  hardBreak: nX,
  heading: gX,
  html: _X,
  image: yX,
  imageReference: xX,
  inlineCode: CX,
  link: EX,
  linkReference: OX,
  list: PX,
  listItem: IX,
  paragraph: LX,
  root: zX,
  strong: VX,
  text: UX,
  thematicBreak: GX,
};
function qX() {
  return {
    enter: { table: JX, tableData: QX, tableHeader: QX, tableRow: XX },
    exit: {
      codeText: $X,
      table: YX,
      tableData: ZX,
      tableHeader: ZX,
      tableRow: ZX,
    },
  };
}
function JX(e) {
  let t = e._align;
  (this.enter(
    {
      type: `table`,
      align: t.map(function (e) {
        return e === `none` ? null : e;
      }),
      children: [],
    },
    e,
  ),
    (this.data.inTable = !0));
}
function YX(e) {
  (this.exit(e), (this.data.inTable = void 0));
}
function XX(e) {
  this.enter({ type: `tableRow`, children: [] }, e);
}
