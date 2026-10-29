// Create-CEn7EAZs 168 — consume
// Lines 56233-56556 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function wG(e, t, n) {
  return r;
  function r(t) {
    return yW(t) ? bG(e, i)(t) : n(t);
  }
  function i(t) {
    return yG(
      e,
      a,
      n,
      `definitionTitle`,
      `definitionTitleMarker`,
      `definitionTitleString`,
    )(t);
  }
  function a(t) {
    return bW(t) ? TW(e, o, `whitespace`)(t) : o(t);
  }
  function o(e) {
    return e === null || vW(e) ? t(e) : n(e);
  }
}
var TG = { name: `hardBreakEscape`, tokenize: EG };
function EG(e, t, n) {
  return r;
  function r(t) {
    return (e.enter(`hardBreakEscape`), e.consume(t), i);
  }
  function i(r) {
    return vW(r) ? (e.exit(`hardBreakEscape`), t(r)) : n(r);
  }
}
var DG = { name: `headingAtx`, resolve: OG, tokenize: kG };
function OG(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    a;
  return (
    e[r][1].type === `whitespace` && (r += 2),
    n - 2 > r && e[n][1].type === `whitespace` && (n -= 2),
    e[n][1].type === `atxHeadingSequence` &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === `whitespace`)) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: `atxHeadingText`, start: e[r][1].start, end: e[n][1].end }),
      (a = {
        type: `chunkText`,
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: `text`,
      }),
      rW(e, r, n - r + 1, [
        [`enter`, i, t],
        [`enter`, a, t],
        [`exit`, a, t],
        [`exit`, i, t],
      ])),
    e
  );
}
function kG(e, t, n) {
  let r = 0;
  return i;
  function i(t) {
    return (e.enter(`atxHeading`), a(t));
  }
  function a(t) {
    return (e.enter(`atxHeadingSequence`), o(t));
  }
  function o(t) {
    return t === 35 && r++ < 6
      ? (e.consume(t), o)
      : t === null || yW(t)
        ? (e.exit(`atxHeadingSequence`), s(t))
        : n(t);
  }
  function s(n) {
    return n === 35
      ? (e.enter(`atxHeadingSequence`), c(n))
      : n === null || vW(n)
        ? (e.exit(`atxHeading`), t(n))
        : bW(n)
          ? TW(e, s, `whitespace`)(n)
          : (e.enter(`atxHeadingText`), l(n));
  }
  function c(t) {
    return t === 35 ? (e.consume(t), c) : (e.exit(`atxHeadingSequence`), s(t));
  }
  function l(t) {
    return t === null || t === 35 || yW(t)
      ? (e.exit(`atxHeadingText`), s(t))
      : (e.consume(t), l);
  }
}
var AG =
    `address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(
      `.`,
    ),
  jG = [`pre`, `script`, `style`, `textarea`],
  MG = { concrete: !0, name: `htmlFlow`, resolveTo: FG, tokenize: IG },
  NG = { partial: !0, tokenize: RG },
  PG = { partial: !0, tokenize: LG };
function FG(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === `enter` && e[t][1].type === `htmlFlow`););
  return (
    t > 1 &&
      e[t - 2][1].type === `linePrefix` &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function IG(e, t, n) {
  let r = this,
    i,
    a,
    o,
    s,
    c;
  return l;
  function l(e) {
    return u(e);
  }
  function u(t) {
    return (e.enter(`htmlFlow`), e.enter(`htmlFlowData`), e.consume(t), d);
  }
  function d(s) {
    return s === 33
      ? (e.consume(s), f)
      : s === 47
        ? (e.consume(s), (a = !0), h)
        : s === 63
          ? (e.consume(s), (i = 3), r.interrupt ? t : I)
          : dW(s)
            ? (e.consume(s), (o = String.fromCharCode(s)), g)
            : n(s);
  }
  function f(a) {
    return a === 45
      ? (e.consume(a), (i = 2), p)
      : a === 91
        ? (e.consume(a), (i = 5), (s = 0), m)
        : dW(a)
          ? (e.consume(a), (i = 4), r.interrupt ? t : I)
          : n(a);
  }
  function p(i) {
    return i === 45 ? (e.consume(i), r.interrupt ? t : I) : n(i);
  }
  function m(i) {
    return i === `CDATA[`.charCodeAt(s++)
      ? (e.consume(i), s === 6 ? (r.interrupt ? t : O) : m)
      : n(i);
  }
  function h(t) {
    return dW(t) ? (e.consume(t), (o = String.fromCharCode(t)), g) : n(t);
  }
  function g(s) {
    if (s === null || s === 47 || s === 62 || yW(s)) {
      let c = s === 47,
        l = o.toLowerCase();
      return !c && !a && jG.includes(l)
        ? ((i = 1), r.interrupt ? t(s) : O(s))
        : AG.includes(o.toLowerCase())
          ? ((i = 6), c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s))
          : ((i = 7),
            r.interrupt && !r.parser.lazy[r.now().line]
              ? n(s)
              : a
                ? v(s)
                : y(s));
    }
    return s === 45 || fW(s)
      ? (e.consume(s), (o += String.fromCharCode(s)), g)
      : n(s);
  }
  function _(i) {
    return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
  }
  function v(t) {
    return bW(t) ? (e.consume(t), v) : E(t);
  }
  function y(t) {
    return t === 47
      ? (e.consume(t), E)
      : t === 58 || t === 95 || dW(t)
        ? (e.consume(t), b)
        : bW(t)
          ? (e.consume(t), y)
          : E(t);
  }
  function b(t) {
    return t === 45 || t === 46 || t === 58 || t === 95 || fW(t)
      ? (e.consume(t), b)
      : x(t);
  }
  function x(t) {
    return t === 61 ? (e.consume(t), S) : bW(t) ? (e.consume(t), x) : y(t);
  }
  function S(t) {
    return t === null || t === 60 || t === 61 || t === 62 || t === 96
      ? n(t)
      : t === 34 || t === 39
        ? (e.consume(t), (c = t), C)
        : bW(t)
          ? (e.consume(t), S)
          : w(t);
  }
  function C(t) {
    return t === c
      ? (e.consume(t), (c = null), T)
      : t === null || vW(t)
        ? n(t)
        : (e.consume(t), C);
  }
  function w(t) {
    return t === null ||
      t === 34 ||
      t === 39 ||
      t === 47 ||
      t === 60 ||
      t === 61 ||
      t === 62 ||
      t === 96 ||
      yW(t)
      ? x(t)
      : (e.consume(t), w);
  }
  function T(e) {
    return e === 47 || e === 62 || bW(e) ? y(e) : n(e);
  }
  function E(t) {
    return t === 62 ? (e.consume(t), D) : n(t);
  }
  function D(t) {
    return t === null || vW(t) ? O(t) : bW(t) ? (e.consume(t), D) : n(t);
  }
  function O(t) {
    return t === 45 && i === 2
      ? (e.consume(t), M)
      : t === 60 && i === 1
        ? (e.consume(t), N)
        : t === 62 && i === 4
          ? (e.consume(t), L)
          : t === 63 && i === 3
            ? (e.consume(t), I)
            : t === 93 && i === 5
              ? (e.consume(t), F)
              : vW(t) && (i === 6 || i === 7)
                ? (e.exit(`htmlFlowData`), e.check(NG, R, k)(t))
                : t === null || vW(t)
                  ? (e.exit(`htmlFlowData`), k(t))
                  : (e.consume(t), O);
  }
  function k(t) {
    return e.check(PG, A, R)(t);
  }
  function A(t) {
    return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), j);
  }
  function j(t) {
    return t === null || vW(t) ? k(t) : (e.enter(`htmlFlowData`), O(t));
  }
  function M(t) {
    return t === 45 ? (e.consume(t), I) : O(t);
  }
  function N(t) {
    return t === 47 ? (e.consume(t), (o = ``), P) : O(t);
  }
  function P(t) {
    if (t === 62) {
      let n = o.toLowerCase();
      return jG.includes(n) ? (e.consume(t), L) : O(t);
    }
    return dW(t) && o.length < 8
      ? (e.consume(t), (o += String.fromCharCode(t)), P)
      : O(t);
  }
  function F(t) {
    return t === 93 ? (e.consume(t), I) : O(t);
  }
  function I(t) {
    return t === 62
      ? (e.consume(t), L)
      : t === 45 && i === 2
        ? (e.consume(t), I)
        : O(t);
  }
  function L(t) {
    return t === null || vW(t)
      ? (e.exit(`htmlFlowData`), R(t))
      : (e.consume(t), L);
  }
  function R(n) {
    return (e.exit(`htmlFlow`), t(n));
  }
}
function LG(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return vW(t)
      ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), a)
      : n(t);
  }
  function a(e) {
    return r.parser.lazy[r.now().line] ? n(e) : t(e);
  }
}
function RG(e, t, n) {
  return r;
  function r(r) {
    return (
      e.enter(`lineEnding`),
      e.consume(r),
      e.exit(`lineEnding`),
      e.attempt(BW, t, n)
    );
  }
}
var zG = { name: `htmlText`, tokenize: BG };
