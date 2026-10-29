// Create-CEn7EAZs 180 — enter
// Lines 60376-60709 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function TY(e) {
  let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t) return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0],
    r = n.indexOf(`)`),
    i = aY(e, `(`),
    a = aY(e, `)`);
  for (; r !== -1 && i > a;)
    ((e += n.slice(0, r + 1)), (n = n.slice(r + 1)), (r = n.indexOf(`)`)), a++);
  return [e, n];
}
function EY(e, t) {
  let n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || SW(n) || xW(n)) && (!t || n !== 47);
}
IY.peek = FY;
function DY() {
  this.buffer();
}
function OY(e) {
  this.enter({ type: `footnoteReference`, identifier: ``, label: `` }, e);
}
function kY() {
  this.buffer();
}
function AY(e) {
  this.enter(
    { type: `footnoteDefinition`, identifier: ``, label: ``, children: [] },
    e,
  );
}
function jY(e) {
  let t = this.resume(),
    n = this.stack[this.stack.length - 1];
  (n.type,
    (n.identifier = uW(this.sliceSerialize(e)).toLowerCase()),
    (n.label = t));
}
function MY(e) {
  this.exit(e);
}
function NY(e) {
  let t = this.resume(),
    n = this.stack[this.stack.length - 1];
  (n.type,
    (n.identifier = uW(this.sliceSerialize(e)).toLowerCase()),
    (n.label = t));
}
function PY(e) {
  this.exit(e);
}
function FY() {
  return `[`;
}
function IY(e, t, n, r) {
  let i = n.createTracker(r),
    a = i.move(`[^`),
    o = n.enter(`footnoteReference`),
    s = n.enter(`reference`);
  return (
    (a += i.move(n.safe(n.associationId(e), { after: `]`, before: a }))),
    s(),
    o(),
    (a += i.move(`]`)),
    a
  );
}
function LY() {
  return {
    enter: {
      gfmFootnoteCallString: DY,
      gfmFootnoteCall: OY,
      gfmFootnoteDefinitionLabelString: kY,
      gfmFootnoteDefinition: AY,
    },
    exit: {
      gfmFootnoteCallString: jY,
      gfmFootnoteCall: MY,
      gfmFootnoteDefinitionLabelString: NY,
      gfmFootnoteDefinition: PY,
    },
  };
}
function RY(e) {
  let t = !1;
  return (
    e && e.firstLineBlank && (t = !0),
    {
      handlers: { footnoteDefinition: n, footnoteReference: IY },
      unsafe: [
        { character: `[`, inConstruct: [`label`, `phrasing`, `reference`] },
      ],
    }
  );
  function n(e, n, r, i) {
    let a = r.createTracker(i),
      o = a.move(`[^`),
      s = r.enter(`footnoteDefinition`),
      c = r.enter(`label`);
    return (
      (o += a.move(r.safe(r.associationId(e), { before: o, after: `]` }))),
      c(),
      (o += a.move(`]:`)),
      e.children &&
        e.children.length > 0 &&
        (a.shift(4),
        (o += a.move(
          (t
            ? `
`
            : ` `) +
            r.indentLines(r.containerFlow(e, a.current()), t ? BY : zY),
        ))),
      s(),
      o
    );
  }
}
function zY(e, t, n) {
  return t === 0 ? e : BY(e, t, n);
}
function BY(e, t, n) {
  return (n ? `` : `    `) + e;
}
var VY = [
  `autolink`,
  `destinationLiteral`,
  `destinationRaw`,
  `reference`,
  `titleQuote`,
  `titleApostrophe`,
];
KY.peek = qY;
function HY() {
  return {
    canContainEols: [`delete`],
    enter: { strikethrough: WY },
    exit: { strikethrough: GY },
  };
}
function UY() {
  return {
    unsafe: [{ character: `~`, inConstruct: `phrasing`, notInConstruct: VY }],
    handlers: { delete: KY },
  };
}
function WY(e) {
  this.enter({ type: `delete`, children: [] }, e);
}
function GY(e) {
  this.exit(e);
}
function KY(e, t, n, r) {
  let i = n.createTracker(r),
    a = n.enter(`strikethrough`),
    o = i.move(`~~`);
  return (
    (o += n.containerPhrasing(e, { ...i.current(), before: o, after: `~` })),
    (o += i.move(`~~`)),
    a(),
    o
  );
}
function qY() {
  return `~`;
}
function JY(e) {
  return e.length;
}
function YY(e, t) {
  let n = t || {},
    r = (n.align || []).concat(),
    i = n.stringLength || JY,
    a = [],
    o = [],
    s = [],
    c = [],
    l = 0,
    u = -1;
  for (; ++u < e.length;) {
    let t = [],
      r = [],
      a = -1;
    for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
      let o = XY(e[u][a]);
      if (n.alignDelimiters !== !1) {
        let e = i(o);
        ((r[a] = e), (c[a] === void 0 || e > c[a]) && (c[a] = e));
      }
      t.push(o);
    }
    ((o[u] = t), (s[u] = r));
  }
  let d = -1;
  if (typeof r == `object` && `length` in r) for (; ++d < l;) a[d] = ZY(r[d]);
  else {
    let e = ZY(r);
    for (; ++d < l;) a[d] = e;
  }
  d = -1;
  let f = [],
    p = [];
  for (; ++d < l;) {
    let e = a[d],
      t = ``,
      r = ``;
    e === 99
      ? ((t = `:`), (r = `:`))
      : e === 108
        ? (t = `:`)
        : e === 114 && (r = `:`);
    let i =
        n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length),
      o = t + `-`.repeat(i) + r;
    (n.alignDelimiters !== !1 &&
      ((i = t.length + i + r.length), i > c[d] && (c[d] = i), (p[d] = i)),
      (f[d] = o));
  }
  (o.splice(1, 0, f), s.splice(1, 0, p), (u = -1));
  let m = [];
  for (; ++u < o.length;) {
    let e = o[u],
      t = s[u];
    d = -1;
    let r = [];
    for (; ++d < l;) {
      let i = e[d] || ``,
        o = ``,
        s = ``;
      if (n.alignDelimiters !== !1) {
        let e = c[d] - (t[d] || 0),
          n = a[d];
        n === 114
          ? (o = ` `.repeat(e))
          : n === 99
            ? e % 2
              ? ((o = ` `.repeat(e / 2 + 0.5)), (s = ` `.repeat(e / 2 - 0.5)))
              : ((o = ` `.repeat(e / 2)), (s = o))
            : (s = ` `.repeat(e));
      }
      (n.delimiterStart !== !1 && !d && r.push(`|`),
        n.padding !== !1 &&
          !(n.alignDelimiters === !1 && i === ``) &&
          (n.delimiterStart !== !1 || d) &&
          r.push(` `),
        n.alignDelimiters !== !1 && r.push(o),
        r.push(i),
        n.alignDelimiters !== !1 && r.push(s),
        n.padding !== !1 && r.push(` `),
        (n.delimiterEnd !== !1 || d !== l - 1) && r.push(`|`));
    }
    m.push(n.delimiterEnd === !1 ? r.join(``).replace(/ +$/, ``) : r.join(``));
  }
  return m.join(`
`);
}
function XY(e) {
  return e == null ? `` : String(e);
}
function ZY(e) {
  let t = typeof e == `string` ? e.codePointAt(0) : 0;
  return t === 67 || t === 99
    ? 99
    : t === 76 || t === 108
      ? 108
      : t === 82 || t === 114
        ? 114
        : 0;
}
function QY(e, t, n, r) {
  let i = n.enter(`blockquote`),
    a = n.createTracker(r);
  (a.move(`> `), a.shift(2));
  let o = n.indentLines(n.containerFlow(e, a.current()), $Y);
  return (i(), o);
}
function $Y(e, t, n) {
  return `>` + (n ? `` : ` `) + e;
}
function eX(e, t) {
  return tX(e, t.inConstruct, !0) && !tX(e, t.notInConstruct, !1);
}
function tX(e, t, n) {
  if ((typeof t == `string` && (t = [t]), !t || t.length === 0)) return n;
  let r = -1;
  for (; ++r < t.length;) if (e.includes(t[r])) return !0;
  return !1;
}
function nX(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length;)
    if (
      n.unsafe[i].character ===
        `
` &&
      eX(n.stack, n.unsafe[i])
    )
      return /[ \t]/.test(r.before) ? `` : ` `;
  return `\\
`;
}
function rX(e, t) {
  let n = String(e),
    r = n.indexOf(t),
    i = r,
    a = 0,
    o = 0;
  if (typeof t != `string`) throw TypeError(`Expected substring`);
  for (; r !== -1;)
    (r === i ? ++a > o && (o = a) : (a = 1),
      (i = r + t.length),
      (r = n.indexOf(t, i)));
  return o;
}
function iX(e, t) {
  return !!(
    t.options.fences === !1 &&
    e.value &&
    !e.lang &&
    /[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  );
}
function aX(e) {
  let t = e.options.fence || "`";
  if (t !== "`" && t !== `~`)
    throw Error(
      "Cannot serialize code with `" +
        t +
        "` for `options.fence`, expected `` ` `` or `~`",
    );
  return t;
}
