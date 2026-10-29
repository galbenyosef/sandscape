// Create-CEn7EAZs 181 — move
// Lines 60710-61047 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function oX(e, t, n, r) {
  let i = aX(n),
    a = e.value || ``,
    o = i === "`" ? `GraveAccent` : `Tilde`;
  if (iX(e, n)) {
    let e = n.enter(`codeIndented`),
      t = n.indentLines(a, sX);
    return (e(), t);
  }
  let s = n.createTracker(r),
    c = i.repeat(Math.max(rX(a, i) + 1, 3)),
    l = n.enter(`codeFenced`),
    u = s.move(c);
  if (e.lang) {
    let t = n.enter(`codeFencedLang${o}`);
    ((u += s.move(
      n.safe(e.lang, { before: u, after: ` `, encode: ["`"], ...s.current() }),
    )),
      t());
  }
  if (e.lang && e.meta) {
    let t = n.enter(`codeFencedMeta${o}`);
    ((u += s.move(` `)),
      (u += s.move(
        n.safe(e.meta, {
          before: u,
          after: `
`,
          encode: ["`"],
          ...s.current(),
        }),
      )),
      t());
  }
  return (
    (u += s.move(`
`)),
    a &&
      (u += s.move(
        a +
          `
`,
      )),
    (u += s.move(c)),
    l(),
    u
  );
}
function sX(e, t, n) {
  return (n ? `` : `    `) + e;
}
function cX(e) {
  let t = e.options.quote || `"`;
  if (t !== `"` && t !== `'`)
    throw Error(
      "Cannot serialize title with `" +
        t +
        "` for `options.quote`, expected `\"`, or `'`",
    );
  return t;
}
function lX(e, t, n, r) {
  let i = cX(n),
    a = i === `"` ? `Quote` : `Apostrophe`,
    o = n.enter(`definition`),
    s = n.enter(`label`),
    c = n.createTracker(r),
    l = c.move(`[`);
  return (
    (l += c.move(
      n.safe(n.associationId(e), { before: l, after: `]`, ...c.current() }),
    )),
    (l += c.move(`]: `)),
    s(),
    !e.url || /[\0- \u007F]/.test(e.url)
      ? ((s = n.enter(`destinationLiteral`)),
        (l += c.move(`<`)),
        (l += c.move(n.safe(e.url, { before: l, after: `>`, ...c.current() }))),
        (l += c.move(`>`)))
      : ((s = n.enter(`destinationRaw`)),
        (l += c.move(
          n.safe(e.url, {
            before: l,
            after: e.title
              ? ` `
              : `
`,
            ...c.current(),
          }),
        ))),
    s(),
    e.title &&
      ((s = n.enter(`title${a}`)),
      (l += c.move(` ` + i)),
      (l += c.move(n.safe(e.title, { before: l, after: i, ...c.current() }))),
      (l += c.move(i)),
      s()),
    o(),
    l
  );
}
function uX(e) {
  let t = e.options.emphasis || `*`;
  if (t !== `*` && t !== `_`)
    throw Error(
      "Cannot serialize emphasis with `" +
        t +
        "` for `options.emphasis`, expected `*`, or `_`",
    );
  return t;
}
function dX(e) {
  return `&#x` + e.toString(16).toUpperCase() + `;`;
}
function fX(e, t, n) {
  let r = MW(e),
    i = MW(t);
  return r === void 0
    ? i === void 0
      ? n === `_`
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !1 }
      : i === 1
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !0 }
    : r === 1
      ? i === void 0
        ? { inside: !1, outside: !1 }
        : i === 1
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !1 }
      : i === void 0
        ? { inside: !1, outside: !1 }
        : i === 1
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 };
}
pX.peek = mX;
function pX(e, t, n, r) {
  let i = uX(n),
    a = n.enter(`emphasis`),
    o = n.createTracker(r),
    s = o.move(i),
    c = o.move(n.containerPhrasing(e, { after: i, before: s, ...o.current() })),
    l = c.charCodeAt(0),
    u = fX(r.before.charCodeAt(r.before.length - 1), l, i);
  u.inside && (c = dX(l) + c.slice(1));
  let d = c.charCodeAt(c.length - 1),
    f = fX(r.after.charCodeAt(0), d, i);
  f.inside && (c = c.slice(0, -1) + dX(d));
  let p = o.move(i);
  return (
    a(),
    (n.attentionEncodeSurroundingInfo = {
      after: f.outside,
      before: u.outside,
    }),
    s + c + p
  );
}
function mX(e, t, n) {
  return n.options.emphasis || `*`;
}
function hX(e, t) {
  let n = !1;
  return (
    nJ(e, function (e) {
      if ((`value` in e && /\r?\n|\r/.test(e.value)) || e.type === `break`)
        return ((n = !0), !1);
    }),
    !!((!e.depth || e.depth < 3) && ZU(e) && (t.options.setext || n))
  );
}
function gX(e, t, n, r) {
  let i = Math.max(Math.min(6, e.depth || 1), 1),
    a = n.createTracker(r);
  if (hX(e, n)) {
    let t = n.enter(`headingSetext`),
      r = n.enter(`phrasing`),
      o = n.containerPhrasing(e, {
        ...a.current(),
        before: `
`,
        after: `
`,
      });
    return (
      r(),
      t(),
      o +
        `
` +
        (i === 1 ? `=` : `-`).repeat(
          o.length -
            (Math.max(
              o.lastIndexOf(`\r`),
              o.lastIndexOf(`
`),
            ) +
              1),
        )
    );
  }
  let o = `#`.repeat(i),
    s = n.enter(`headingAtx`),
    c = n.enter(`phrasing`);
  a.move(o + ` `);
  let l = n.containerPhrasing(e, {
    before: `# `,
    after: `
`,
    ...a.current(),
  });
  return (
    /^[\t ]/.test(l) && (l = dX(l.charCodeAt(0)) + l.slice(1)),
    (l = l ? o + ` ` + l : o),
    n.options.closeAtx && (l += ` ` + o),
    c(),
    s(),
    l
  );
}
_X.peek = vX;
function _X(e) {
  return e.value || ``;
}
function vX() {
  return `<`;
}
yX.peek = bX;
function yX(e, t, n, r) {
  let i = cX(n),
    a = i === `"` ? `Quote` : `Apostrophe`,
    o = n.enter(`image`),
    s = n.enter(`label`),
    c = n.createTracker(r),
    l = c.move(`![`);
  return (
    (l += c.move(n.safe(e.alt, { before: l, after: `]`, ...c.current() }))),
    (l += c.move(`](`)),
    s(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((s = n.enter(`destinationLiteral`)),
        (l += c.move(`<`)),
        (l += c.move(n.safe(e.url, { before: l, after: `>`, ...c.current() }))),
        (l += c.move(`>`)))
      : ((s = n.enter(`destinationRaw`)),
        (l += c.move(
          n.safe(e.url, {
            before: l,
            after: e.title ? ` ` : `)`,
            ...c.current(),
          }),
        ))),
    s(),
    e.title &&
      ((s = n.enter(`title${a}`)),
      (l += c.move(` ` + i)),
      (l += c.move(n.safe(e.title, { before: l, after: i, ...c.current() }))),
      (l += c.move(i)),
      s()),
    (l += c.move(`)`)),
    o(),
    l
  );
}
function bX() {
  return `!`;
}
xX.peek = SX;
function xX(e, t, n, r) {
  let i = e.referenceType,
    a = n.enter(`imageReference`),
    o = n.enter(`label`),
    s = n.createTracker(r),
    c = s.move(`![`),
    l = n.safe(e.alt, { before: c, after: `]`, ...s.current() });
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
function SX() {
  return `!`;
}
CX.peek = wX;
function CX(e, t, n) {
  let r = e.value || ``,
    i = "`",
    a = -1;
  for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = ` ` + r + ` `);
    ++a < n.unsafe.length;
  ) {
    let e = n.unsafe[a],
      t = n.compilePattern(e),
      i;
    if (e.atBreak)
      for (; (i = t.exec(r));) {
        let e = i.index;
        (r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--,
          (r = r.slice(0, e) + ` ` + r.slice(i.index + 1)));
      }
  }
  return i + r + i;
}
function wX() {
  return "`";
}
function TX(e, t) {
  let n = ZU(e);
  return !!(
    !t.options.resourceLink &&
    e.url &&
    !e.title &&
    e.children &&
    e.children.length === 1 &&
    e.children[0].type === `text` &&
    (n === e.url || `mailto:` + n === e.url) &&
    /^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  );
}
EX.peek = DX;
