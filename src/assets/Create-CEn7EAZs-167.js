// Create-CEn7EAZs 167 — exit
// Lines 55884-56232 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function uG(e) {
  let t = {},
    n = -1,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u = new cG(e);
  for (; ++n < u.length;) {
    for (; n in t;) n = t[n];
    if (
      ((r = u.get(n)),
      n &&
        r[1].type === `chunkFlow` &&
        u.get(n - 1)[1].type === `listItemPrefix` &&
        ((c = r[1]._tokenizer.events),
        (a = 0),
        a < c.length && c[a][1].type === `lineEndingBlank` && (a += 2),
        a < c.length && c[a][1].type === `content`))
    )
      for (; ++a < c.length && c[a][1].type !== `content`;)
        c[a][1].type === `chunkText` &&
          ((c[a][1]._isInFirstContentOfListItem = !0), a++);
    if (r[0] === `enter`)
      r[1].contentType && (Object.assign(t, dG(u, n)), (n = t[n]), (l = !0));
    else if (r[1]._container) {
      for (a = n, i = void 0; a--;)
        if (
          ((o = u.get(a)),
          o[1].type === `lineEnding` || o[1].type === `lineEndingBlank`)
        )
          o[0] === `enter` &&
            (i && (u.get(i)[1].type = `lineEndingBlank`),
            (o[1].type = `lineEnding`),
            (i = a));
        else if (!(
          o[1].type === `linePrefix` || o[1].type === `listItemIndent`
        ))
          break;
      i &&
        ((r[1].end = { ...u.get(i)[1].start }),
        (s = u.slice(i, n)),
        s.unshift(r),
        u.splice(i, n - i + 1, s));
    }
  }
  return (rW(e, 0, 1 / 0, u.slice(0)), !l);
}
function dG(e, t) {
  let n = e.get(t)[1],
    r = e.get(t)[2],
    i = t - 1,
    a = [],
    o = n._tokenizer;
  o ||
    ((o = r.parser[n.contentType](n.start)),
    n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  let s = o.events,
    c = [],
    l = {},
    u,
    d,
    f = -1,
    p = n,
    m = 0,
    h = 0,
    g = [h];
  for (; p;) {
    for (; e.get(++i)[1] !== p;);
    (a.push(i),
      p._tokenizer ||
        ((u = r.sliceStream(p)),
        p.next || u.push(null),
        d && o.defineSkip(p.start),
        p._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(u),
        p._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = void 0)),
      (d = p),
      (p = p.next));
  }
  for (p = n; ++f < s.length;)
    s[f][0] === `exit` &&
      s[f - 1][0] === `enter` &&
      s[f][1].type === s[f - 1][1].type &&
      s[f][1].start.line !== s[f][1].end.line &&
      ((h = f + 1),
      g.push(h),
      (p._tokenizer = void 0),
      (p.previous = void 0),
      (p = p.next));
  for (
    o.events = [],
      p ? ((p._tokenizer = void 0), (p.previous = void 0)) : g.pop(),
      f = g.length;
    f--;
  ) {
    let t = s.slice(g[f], g[f + 1]),
      n = a.pop();
    (c.push([n, n + t.length - 1]), e.splice(n, 2, t));
  }
  for (c.reverse(), f = -1; ++f < c.length;)
    ((l[m + c[f][0]] = m + c[f][1]), (m += c[f][1] - c[f][0] - 1));
  return l;
}
var fG = { resolve: mG, tokenize: hG },
  pG = { partial: !0, tokenize: gG };
function mG(e) {
  return (uG(e), e);
}
function hG(e, t) {
  let n;
  return r;
  function r(t) {
    return (
      e.enter(`content`),
      (n = e.enter(`chunkContent`, { contentType: `content` })),
      i(t)
    );
  }
  function i(t) {
    return t === null ? a(t) : vW(t) ? e.check(pG, o, a)(t) : (e.consume(t), i);
  }
  function a(n) {
    return (e.exit(`chunkContent`), e.exit(`content`), t(n));
  }
  function o(t) {
    return (
      e.consume(t),
      e.exit(`chunkContent`),
      (n.next = e.enter(`chunkContent`, {
        contentType: `content`,
        previous: n,
      })),
      (n = n.next),
      i
    );
  }
}
function gG(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (
      e.exit(`chunkContent`),
      e.enter(`lineEnding`),
      e.consume(t),
      e.exit(`lineEnding`),
      TW(e, a, `linePrefix`)
    );
  }
  function a(i) {
    if (i === null || vW(i)) return n(i);
    let a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes(`codeIndented`) &&
      a &&
      a[1].type === `linePrefix` &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(i)
      : e.interrupt(r.parser.constructs.flow, n, t)(i);
  }
}
function _G(e, t, n, r, i, a, o, s, c) {
  let l = c || 1 / 0,
    u = 0;
  return d;
  function d(t) {
    return t === 60
      ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f)
      : t === null || t === 32 || t === 41 || mW(t)
        ? n(t)
        : (e.enter(r),
          e.enter(o),
          e.enter(s),
          e.enter(`chunkString`, { contentType: `string` }),
          h(t));
  }
  function f(n) {
    return n === 62
      ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t)
      : (e.enter(s), e.enter(`chunkString`, { contentType: `string` }), p(n));
  }
  function p(t) {
    return t === 62
      ? (e.exit(`chunkString`), e.exit(s), f(t))
      : t === null || t === 60 || vW(t)
        ? n(t)
        : (e.consume(t), t === 92 ? m : p);
  }
  function m(t) {
    return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
  }
  function h(i) {
    return !u && (i === null || i === 41 || yW(i))
      ? (e.exit(`chunkString`), e.exit(s), e.exit(o), e.exit(r), t(i))
      : u < l && i === 40
        ? (e.consume(i), u++, h)
        : i === 41
          ? (e.consume(i), u--, h)
          : i === null || i === 32 || i === 40 || mW(i)
            ? n(i)
            : (e.consume(i), i === 92 ? g : h);
  }
  function g(t) {
    return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
  }
}
function vG(e, t, n, r, i, a) {
  let o = this,
    s = 0,
    c;
  return l;
  function l(t) {
    return (e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u);
  }
  function u(l) {
    return s > 999 ||
      l === null ||
      l === 91 ||
      (l === 93 && !c) ||
      (l === 94 && !s && `_hiddenFootnoteSupport` in o.parser.constructs)
      ? n(l)
      : l === 93
        ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t)
        : vW(l)
          ? (e.enter(`lineEnding`), e.consume(l), e.exit(`lineEnding`), u)
          : (e.enter(`chunkString`, { contentType: `string` }), d(l));
  }
  function d(t) {
    return t === null || t === 91 || t === 93 || vW(t) || s++ > 999
      ? (e.exit(`chunkString`), u(t))
      : (e.consume(t), (c ||= !bW(t)), t === 92 ? f : d);
  }
  function f(t) {
    return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
  }
}
function yG(e, t, n, r, i, a) {
  let o;
  return s;
  function s(t) {
    return t === 34 || t === 39 || t === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(t),
        e.exit(i),
        (o = t === 40 ? 41 : t),
        c)
      : n(t);
  }
  function c(n) {
    return n === o
      ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
      : (e.enter(a), l(n));
  }
  function l(t) {
    return t === o
      ? (e.exit(a), c(o))
      : t === null
        ? n(t)
        : vW(t)
          ? (e.enter(`lineEnding`),
            e.consume(t),
            e.exit(`lineEnding`),
            TW(e, l, `linePrefix`))
          : (e.enter(`chunkString`, { contentType: `string` }), u(t));
  }
  function u(t) {
    return t === o || t === null || vW(t)
      ? (e.exit(`chunkString`), l(t))
      : (e.consume(t), t === 92 ? d : u);
  }
  function d(t) {
    return t === o || t === 92 ? (e.consume(t), u) : u(t);
  }
}
function bG(e, t) {
  let n;
  return r;
  function r(i) {
    return vW(i)
      ? (e.enter(`lineEnding`), e.consume(i), e.exit(`lineEnding`), (n = !0), r)
      : bW(i)
        ? TW(e, r, n ? `linePrefix` : `lineSuffix`)(i)
        : t(i);
  }
}
var xG = { name: `definition`, tokenize: CG },
  SG = { partial: !0, tokenize: wG };
function CG(e, t, n) {
  let r = this,
    i;
  return a;
  function a(t) {
    return (e.enter(`definition`), o(t));
  }
  function o(t) {
    return vG.call(
      r,
      e,
      s,
      n,
      `definitionLabel`,
      `definitionLabelMarker`,
      `definitionLabelString`,
    )(t);
  }
  function s(t) {
    return (
      (i = uW(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      t === 58
        ? (e.enter(`definitionMarker`),
          e.consume(t),
          e.exit(`definitionMarker`),
          c)
        : n(t)
    );
  }
  function c(t) {
    return yW(t) ? bG(e, l)(t) : l(t);
  }
  function l(t) {
    return _G(
      e,
      u,
      n,
      `definitionDestination`,
      `definitionDestinationLiteral`,
      `definitionDestinationLiteralMarker`,
      `definitionDestinationRaw`,
      `definitionDestinationString`,
    )(t);
  }
  function u(t) {
    return e.attempt(SG, d, d)(t);
  }
  function d(t) {
    return bW(t) ? TW(e, f, `whitespace`)(t) : f(t);
  }
  function f(a) {
    return a === null || vW(a)
      ? (e.exit(`definition`), r.parser.defined.push(i), t(a))
      : n(a);
  }
}
