// assets__Create-ea24k1TY 167 — consume
// Lines 55774-56086 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function wG(e, t, n) {
  let r = this,
    i,
    a,
    o;
  return s;
  function s(t) {
    return (e.enter(`htmlText`), e.enter(`htmlTextData`), e.consume(t), c);
  }
  function c(t) {
    return t === 33
      ? (e.consume(t), l)
      : t === 47
        ? (e.consume(t), x)
        : t === 63
          ? (e.consume(t), y)
          : YU(t)
            ? (e.consume(t), w)
            : n(t);
  }
  function l(t) {
    return t === 45
      ? (e.consume(t), u)
      : t === 91
        ? (e.consume(t), (a = 0), m)
        : YU(t)
          ? (e.consume(t), v)
          : n(t);
  }
  function u(t) {
    return t === 45 ? (e.consume(t), p) : n(t);
  }
  function d(t) {
    return t === null
      ? n(t)
      : t === 45
        ? (e.consume(t), f)
        : nW(t)
          ? ((o = d), N(t))
          : (e.consume(t), d);
  }
  function f(t) {
    return t === 45 ? (e.consume(t), p) : d(t);
  }
  function p(e) {
    return e === 62 ? M(e) : e === 45 ? f(e) : d(e);
  }
  function m(t) {
    return t === `CDATA[`.charCodeAt(a++)
      ? (e.consume(t), a === 6 ? h : m)
      : n(t);
  }
  function h(t) {
    return t === null
      ? n(t)
      : t === 93
        ? (e.consume(t), g)
        : nW(t)
          ? ((o = h), N(t))
          : (e.consume(t), h);
  }
  function g(t) {
    return t === 93 ? (e.consume(t), _) : h(t);
  }
  function _(t) {
    return t === 62 ? M(t) : t === 93 ? (e.consume(t), _) : h(t);
  }
  function v(t) {
    return t === null || t === 62
      ? M(t)
      : nW(t)
        ? ((o = v), N(t))
        : (e.consume(t), v);
  }
  function y(t) {
    return t === null
      ? n(t)
      : t === 63
        ? (e.consume(t), b)
        : nW(t)
          ? ((o = y), N(t))
          : (e.consume(t), y);
  }
  function b(e) {
    return e === 62 ? M(e) : y(e);
  }
  function x(t) {
    return YU(t) ? (e.consume(t), S) : n(t);
  }
  function S(t) {
    return t === 45 || XU(t) ? (e.consume(t), S) : C(t);
  }
  function C(t) {
    return nW(t) ? ((o = C), N(t)) : iW(t) ? (e.consume(t), C) : M(t);
  }
  function w(t) {
    return t === 45 || XU(t)
      ? (e.consume(t), w)
      : t === 47 || t === 62 || rW(t)
        ? T(t)
        : n(t);
  }
  function T(t) {
    return t === 47
      ? (e.consume(t), M)
      : t === 58 || t === 95 || YU(t)
        ? (e.consume(t), E)
        : nW(t)
          ? ((o = T), N(t))
          : iW(t)
            ? (e.consume(t), T)
            : M(t);
  }
  function E(t) {
    return t === 45 || t === 46 || t === 58 || t === 95 || XU(t)
      ? (e.consume(t), E)
      : D(t);
  }
  function D(t) {
    return t === 61
      ? (e.consume(t), O)
      : nW(t)
        ? ((o = D), N(t))
        : iW(t)
          ? (e.consume(t), D)
          : T(t);
  }
  function O(t) {
    return t === null || t === 60 || t === 61 || t === 62 || t === 96
      ? n(t)
      : t === 34 || t === 39
        ? (e.consume(t), (i = t), k)
        : nW(t)
          ? ((o = O), N(t))
          : iW(t)
            ? (e.consume(t), O)
            : (e.consume(t), A);
  }
  function k(t) {
    return t === i
      ? (e.consume(t), (i = void 0), j)
      : t === null
        ? n(t)
        : nW(t)
          ? ((o = k), N(t))
          : (e.consume(t), k);
  }
  function A(t) {
    return t === null ||
      t === 34 ||
      t === 39 ||
      t === 60 ||
      t === 61 ||
      t === 96
      ? n(t)
      : t === 47 || t === 62 || rW(t)
        ? T(t)
        : (e.consume(t), A);
  }
  function j(e) {
    return e === 47 || e === 62 || rW(e) ? T(e) : n(e);
  }
  function M(r) {
    return r === 62
      ? (e.consume(r), e.exit(`htmlTextData`), e.exit(`htmlText`), t)
      : n(r);
  }
  function N(t) {
    return (
      e.exit(`htmlTextData`),
      e.enter(`lineEnding`),
      e.consume(t),
      e.exit(`lineEnding`),
      P
    );
  }
  function P(t) {
    return iW(t)
      ? lW(
          e,
          F,
          `linePrefix`,
          r.parser.constructs.disable.null.includes(`codeIndented`)
            ? void 0
            : 4,
        )(t)
      : F(t);
  }
  function F(t) {
    return (e.enter(`htmlTextData`), o(t));
  }
}
var TG = { name: `labelEnd`, resolveAll: kG, resolveTo: AG, tokenize: jG },
  EG = { tokenize: MG },
  DG = { tokenize: NG },
  OG = { tokenize: PG };
function kG(e) {
  let t = -1,
    n = [];
  for (; ++t < e.length;) {
    let r = e[t][1];
    if (
      (n.push(e[t]),
      r.type === `labelImage` ||
        r.type === `labelLink` ||
        r.type === `labelEnd`)
    ) {
      let e = r.type === `labelImage` ? 4 : 2;
      ((r.type = `data`), (t += e));
    }
  }
  return (e.length !== n.length && VU(e, 0, e.length, n), e);
}
function AG(e, t) {
  let n = e.length,
    r = 0,
    i,
    a,
    o,
    s;
  for (; n--;)
    if (((i = e[n][1]), a)) {
      if (i.type === `link` || (i.type === `labelLink` && i._inactive)) break;
      e[n][0] === `enter` && i.type === `labelLink` && (i._inactive = !0);
    } else if (o) {
      if (
        e[n][0] === `enter` &&
        (i.type === `labelImage` || i.type === `labelLink`) &&
        !i._balanced &&
        ((a = n), i.type !== `labelLink`)
      ) {
        r = 2;
        break;
      }
    } else i.type === `labelEnd` && (o = n);
  let c = {
      type: e[a][1].type === `labelLink` ? `link` : `image`,
      start: { ...e[a][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    l = { type: `label`, start: { ...e[a][1].start }, end: { ...e[o][1].end } },
    u = {
      type: `labelText`,
      start: { ...e[a + r + 2][1].end },
      end: { ...e[o - 2][1].start },
    };
  return (
    (s = [
      [`enter`, c, t],
      [`enter`, l, t],
    ]),
    (s = HU(s, e.slice(a + 1, a + r + 3))),
    (s = HU(s, [[`enter`, u, t]])),
    (s = HU(
      s,
      _W(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t),
    )),
    (s = HU(s, [[`exit`, u, t], e[o - 2], e[o - 1], [`exit`, l, t]])),
    (s = HU(s, e.slice(o + 1))),
    (s = HU(s, [[`exit`, c, t]])),
    VU(e, a, e.length, s),
    e
  );
}
function jG(e, t, n) {
  let r = this,
    i = r.events.length,
    a,
    o;
  for (; i--;)
    if (
      (r.events[i][1].type === `labelImage` ||
        r.events[i][1].type === `labelLink`) &&
      !r.events[i][1]._balanced
    ) {
      a = r.events[i][1];
      break;
    }
  return s;
  function s(t) {
    return a
      ? a._inactive
        ? d(t)
        : ((o = r.parser.defined.includes(
            JU(r.sliceSerialize({ start: a.end, end: r.now() })),
          )),
          e.enter(`labelEnd`),
          e.enter(`labelMarker`),
          e.consume(t),
          e.exit(`labelMarker`),
          e.exit(`labelEnd`),
          c)
      : n(t);
  }
  function c(t) {
    return t === 40
      ? e.attempt(EG, u, o ? u : d)(t)
      : t === 91
        ? e.attempt(DG, u, o ? l : d)(t)
        : o
          ? u(t)
          : d(t);
  }
  function l(t) {
    return e.attempt(OG, u, d)(t);
  }
  function u(e) {
    return t(e);
  }
  function d(e) {
    return ((a._balanced = !0), n(e));
  }
}
