// Create-CEn7EAZs 174 — children
// Lines 58319-58655 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function qK(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function JK(e, t) {
  let n = -1;
  for (; ++n < t.length;) {
    let r = t[n];
    Array.isArray(r) ? JK(e, r) : YK(e, r);
  }
}
function YK(e, t) {
  let n;
  for (n in t)
    if (WK.call(t, n))
      switch (n) {
        case `canContainEols`: {
          let r = t[n];
          r && e[n].push(...r);
          break;
        }
        case `transforms`: {
          let r = t[n];
          r && e[n].push(...r);
          break;
        }
        case `enter`:
        case `exit`: {
          let r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function XK(e, t) {
  throw Error(
    e
      ? "Cannot close `" +
          e.type +
          "` (" +
          gU({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          gU({ start: t.start, end: t.end }) +
          `) is open`
      : "Cannot close document, a token (`" +
          t.type +
          "`, " +
          gU({ start: t.start, end: t.end }) +
          `) is still open`,
  );
}
function ZK(e) {
  let t = this;
  t.parser = n;
  function n(n) {
    return GK(n, {
      ...t.data(`settings`),
      ...e,
      extensions: t.data(`micromarkExtensions`) || [],
      mdastExtensions: t.data(`fromMarkdownExtensions`) || [],
    });
  }
}
function QK(e, t) {
  let n = {
    type: `element`,
    tagName: `blockquote`,
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function $K(e, t) {
  let n = { type: `element`, tagName: `br`, properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: `text`,
        value: `
`,
      },
    ]
  );
}
function eq(e, t) {
  let n = t.value
      ? t.value +
        `
`
      : ``,
    r = {},
    i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = [`language-` + i[0]]);
  let a = {
    type: `element`,
    tagName: `code`,
    properties: r,
    children: [{ type: `text`, value: n }],
  };
  return (
    t.meta && (a.data = { meta: t.meta }),
    e.patch(t, a),
    (a = e.applyData(t, a)),
    (a = { type: `element`, tagName: `pre`, properties: {}, children: [a] }),
    e.patch(t, a),
    a
  );
}
function tq(e, t) {
  let n = {
    type: `element`,
    tagName: `del`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function nq(e, t) {
  let n = {
    type: `element`,
    tagName: `em`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function rq(e, t) {
  let n =
      typeof e.options.clobberPrefix == `string`
        ? e.options.clobberPrefix
        : `user-content-`,
    r = String(t.identifier).toUpperCase(),
    i = wW(r.toLowerCase()),
    a = e.footnoteOrder.indexOf(r),
    o,
    s = e.footnoteCounts.get(r);
  (s === void 0
    ? ((s = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length))
    : (o = a + 1),
    (s += 1),
    e.footnoteCounts.set(r, s));
  let c = {
    type: `element`,
    tagName: `a`,
    properties: {
      href: `#` + n + `fn-` + i,
      id: n + `fnref-` + i + (s > 1 ? `-` + s : ``),
      dataFootnoteRef: !0,
      ariaDescribedBy: [`footnote-label`],
    },
    children: [{ type: `text`, value: String(o) }],
  };
  e.patch(t, c);
  let l = { type: `element`, tagName: `sup`, properties: {}, children: [c] };
  return (e.patch(t, l), e.applyData(t, l));
}
function iq(e, t) {
  let n = {
    type: `element`,
    tagName: `h` + t.depth,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function aq(e, t) {
  if (e.options.allowDangerousHtml) {
    let n = { type: `raw`, value: t.value };
    return (e.patch(t, n), e.applyData(t, n));
  }
}
function oq(e, t) {
  let n = t.referenceType,
    r = `]`;
  if (
    (n === `collapsed`
      ? (r += `[]`)
      : n === `full` && (r += `[` + (t.label || t.identifier) + `]`),
    t.type === `imageReference`)
  )
    return [{ type: `text`, value: `![` + t.alt + r }];
  let i = e.all(t),
    a = i[0];
  a && a.type === `text`
    ? (a.value = `[` + a.value)
    : i.unshift({ type: `text`, value: `[` });
  let o = i[i.length - 1];
  return (
    o && o.type === `text`
      ? (o.value += r)
      : i.push({ type: `text`, value: r }),
    i
  );
}
function sq(e, t) {
  let n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return oq(e, t);
  let i = { src: wW(r.url || ``), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  let a = { type: `element`, tagName: `img`, properties: i, children: [] };
  return (e.patch(t, a), e.applyData(t, a));
}
function cq(e, t) {
  let n = { src: wW(t.url) };
  (t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title));
  let r = { type: `element`, tagName: `img`, properties: n, children: [] };
  return (e.patch(t, r), e.applyData(t, r));
}
function lq(e, t) {
  let n = { type: `text`, value: t.value.replace(/\r?\n|\r/g, ` `) };
  e.patch(t, n);
  let r = { type: `element`, tagName: `code`, properties: {}, children: [n] };
  return (e.patch(t, r), e.applyData(t, r));
}
function uq(e, t) {
  let n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return oq(e, t);
  let i = { href: wW(r.url || ``) };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  let a = { type: `element`, tagName: `a`, properties: i, children: e.all(t) };
  return (e.patch(t, a), e.applyData(t, a));
}
function dq(e, t) {
  let n = { href: wW(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  let r = { type: `element`, tagName: `a`, properties: n, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function fq(e, t, n) {
  let r = e.all(t),
    i = n ? pq(n) : mq(t),
    a = {},
    o = [];
  if (typeof t.checked == `boolean`) {
    let e = r[0],
      n;
    (e && e.type === `element` && e.tagName === `p`
      ? (n = e)
      : ((n = { type: `element`, tagName: `p`, properties: {}, children: [] }),
        r.unshift(n)),
      n.children.length > 0 && n.children.unshift({ type: `text`, value: ` ` }),
      n.children.unshift({
        type: `element`,
        tagName: `input`,
        properties: { type: `checkbox`, checked: t.checked, disabled: !0 },
        children: [],
      }),
      (a.className = [`task-list-item`]));
  }
  let s = -1;
  for (; ++s < r.length;) {
    let e = r[s];
    ((i || s !== 0 || e.type !== `element` || e.tagName !== `p`) &&
      o.push({
        type: `text`,
        value: `
`,
      }),
      e.type === `element` && e.tagName === `p` && !i
        ? o.push(...e.children)
        : o.push(e));
  }
  let c = r[r.length - 1];
  c &&
    (i || c.type !== `element` || c.tagName !== `p`) &&
    o.push({
      type: `text`,
      value: `
`,
    });
  let l = { type: `element`, tagName: `li`, properties: a, children: o };
  return (e.patch(t, l), e.applyData(t, l));
}
function pq(e) {
  let t = !1;
  if (e.type === `list`) {
    t = e.spread || !1;
    let n = e.children,
      r = -1;
    for (; !t && ++r < n.length;) t = mq(n[r]);
  }
  return t;
}
function mq(e) {
  return e.spread ?? e.children.length > 1;
}
function hq(e, t) {
  let n = {},
    r = e.all(t),
    i = -1;
  for (
    typeof t.start == `number` && t.start !== 1 && (n.start = t.start);
    ++i < r.length;
  ) {
    let e = r[i];
    if (
      e.type === `element` &&
      e.tagName === `li` &&
      e.properties &&
      Array.isArray(e.properties.className) &&
      e.properties.className.includes(`task-list-item`)
    ) {
      n.className = [`contains-task-list`];
      break;
    }
  }
  let a = {
    type: `element`,
    tagName: t.ordered ? `ol` : `ul`,
    properties: n,
    children: e.wrap(r, !0),
  };
  return (e.patch(t, a), e.applyData(t, a));
}
function gq(e, t) {
  let n = { type: `element`, tagName: `p`, properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function _q(e, t) {
  let n = { type: `root`, children: e.wrap(e.all(t)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function vq(e, t) {
  let n = {
    type: `element`,
    tagName: `strong`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
