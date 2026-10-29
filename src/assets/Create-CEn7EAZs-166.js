// Create-CEn7EAZs 166 — left
// Lines 55535-55883 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function QW(e, t, n) {
  let r = this,
    i = { partial: !0, tokenize: x },
    a = 0,
    o = 0,
    s;
  return c;
  function c(e) {
    return l(e);
  }
  function l(t) {
    let n = r.events[r.events.length - 1];
    return (
      (a =
        n && n[1].type === `linePrefix`
          ? n[2].sliceSerialize(n[1], !0).length
          : 0),
      (s = t),
      e.enter(`codeFenced`),
      e.enter(`codeFencedFence`),
      e.enter(`codeFencedFenceSequence`),
      u(t)
    );
  }
  function u(t) {
    return t === s
      ? (o++, e.consume(t), u)
      : o < 3
        ? n(t)
        : (e.exit(`codeFencedFenceSequence`),
          bW(t) ? TW(e, d, `whitespace`)(t) : d(t));
  }
  function d(n) {
    return n === null || vW(n)
      ? (e.exit(`codeFencedFence`), r.interrupt ? t(n) : e.check(XW, h, b)(n))
      : (e.enter(`codeFencedFenceInfo`),
        e.enter(`chunkString`, { contentType: `string` }),
        f(n));
  }
  function f(t) {
    return t === null || vW(t)
      ? (e.exit(`chunkString`), e.exit(`codeFencedFenceInfo`), d(t))
      : bW(t)
        ? (e.exit(`chunkString`),
          e.exit(`codeFencedFenceInfo`),
          TW(e, p, `whitespace`)(t))
        : t === 96 && t === s
          ? n(t)
          : (e.consume(t), f);
  }
  function p(t) {
    return t === null || vW(t)
      ? d(t)
      : (e.enter(`codeFencedFenceMeta`),
        e.enter(`chunkString`, { contentType: `string` }),
        m(t));
  }
  function m(t) {
    return t === null || vW(t)
      ? (e.exit(`chunkString`), e.exit(`codeFencedFenceMeta`), d(t))
      : t === 96 && t === s
        ? n(t)
        : (e.consume(t), m);
  }
  function h(t) {
    return e.attempt(i, b, g)(t);
  }
  function g(t) {
    return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), _);
  }
  function _(t) {
    return a > 0 && bW(t) ? TW(e, v, `linePrefix`, a + 1)(t) : v(t);
  }
  function v(t) {
    return t === null || vW(t)
      ? e.check(XW, h, b)(t)
      : (e.enter(`codeFlowValue`), y(t));
  }
  function y(t) {
    return t === null || vW(t)
      ? (e.exit(`codeFlowValue`), v(t))
      : (e.consume(t), y);
  }
  function b(n) {
    return (e.exit(`codeFenced`), t(n));
  }
  function x(e, t, n) {
    let i = 0;
    return a;
    function a(t) {
      return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), c);
    }
    function c(t) {
      return (
        e.enter(`codeFencedFence`),
        bW(t)
          ? TW(
              e,
              l,
              `linePrefix`,
              r.parser.constructs.disable.null.includes(`codeIndented`)
                ? void 0
                : 4,
            )(t)
          : l(t)
      );
    }
    function l(t) {
      return t === s ? (e.enter(`codeFencedFenceSequence`), u(t)) : n(t);
    }
    function u(t) {
      return t === s
        ? (i++, e.consume(t), u)
        : i >= o
          ? (e.exit(`codeFencedFenceSequence`),
            bW(t) ? TW(e, d, `whitespace`)(t) : d(t))
          : n(t);
    }
    function d(r) {
      return r === null || vW(r) ? (e.exit(`codeFencedFence`), t(r)) : n(r);
    }
  }
}
function $W(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return t === null
      ? n(t)
      : (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), a);
  }
  function a(e) {
    return r.parser.lazy[r.now().line] ? n(e) : t(e);
  }
}
var eG = { name: `codeIndented`, tokenize: nG },
  tG = { partial: !0, tokenize: rG };
function nG(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (e.enter(`codeIndented`), TW(e, a, `linePrefix`, 5)(t));
  }
  function a(e) {
    let t = r.events[r.events.length - 1];
    return t &&
      t[1].type === `linePrefix` &&
      t[2].sliceSerialize(t[1], !0).length >= 4
      ? o(e)
      : n(e);
  }
  function o(t) {
    return t === null
      ? c(t)
      : vW(t)
        ? e.attempt(tG, o, c)(t)
        : (e.enter(`codeFlowValue`), s(t));
  }
  function s(t) {
    return t === null || vW(t)
      ? (e.exit(`codeFlowValue`), o(t))
      : (e.consume(t), s);
  }
  function c(n) {
    return (e.exit(`codeIndented`), t(n));
  }
}
function rG(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return r.parser.lazy[r.now().line]
      ? n(t)
      : vW(t)
        ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), i)
        : TW(e, a, `linePrefix`, 5)(t);
  }
  function a(e) {
    let a = r.events[r.events.length - 1];
    return a &&
      a[1].type === `linePrefix` &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(e)
      : vW(e)
        ? i(e)
        : n(e);
  }
}
var iG = { name: `codeText`, previous: oG, resolve: aG, tokenize: sG };
function aG(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === `lineEnding` || e[n][1].type === `space`) &&
    (e[t][1].type === `lineEnding` || e[t][1].type === `space`)
  ) {
    for (r = n; ++r < t;)
      if (e[r][1].type === `codeTextData`) {
        ((e[n][1].type = `codeTextPadding`),
          (e[t][1].type = `codeTextPadding`),
          (n += 2),
          (t -= 2));
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t;)
    i === void 0
      ? r !== t && e[r][1].type !== `lineEnding` && (i = r)
      : (r === t || e[r][1].type === `lineEnding`) &&
        ((e[i][1].type = `codeTextData`),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function oG(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === `characterEscape`
  );
}
function sG(e, t, n) {
  let r = 0,
    i,
    a;
  return o;
  function o(t) {
    return (e.enter(`codeText`), e.enter(`codeTextSequence`), s(t));
  }
  function s(t) {
    return t === 96
      ? (e.consume(t), r++, s)
      : (e.exit(`codeTextSequence`), c(t));
  }
  function c(t) {
    return t === null
      ? n(t)
      : t === 32
        ? (e.enter(`space`), e.consume(t), e.exit(`space`), c)
        : t === 96
          ? ((a = e.enter(`codeTextSequence`)), (i = 0), u(t))
          : vW(t)
            ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), c)
            : (e.enter(`codeTextData`), l(t));
  }
  function l(t) {
    return t === null || t === 32 || t === 96 || vW(t)
      ? (e.exit(`codeTextData`), c(t))
      : (e.consume(t), l);
  }
  function u(n) {
    return n === 96
      ? (e.consume(n), i++, u)
      : i === r
        ? (e.exit(`codeTextSequence`), e.exit(`codeText`), t(n))
        : ((a.type = `codeTextData`), l(n));
  }
}
var cG = class {
  constructor(e) {
    ((this.left = e ? [...e] : []), (this.right = []));
  }
  get(e) {
    if (e < 0 || e >= this.left.length + this.right.length)
      throw RangeError(
        "Cannot access index `" +
          e +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`",
      );
    return e < this.left.length
      ? this.left[e]
      : this.right[this.right.length - e + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(e, t) {
    let n = t ?? 1 / 0;
    return n < this.left.length
      ? this.left.slice(e, n)
      : e > this.left.length
        ? this.right
            .slice(
              this.right.length - n + this.left.length,
              this.right.length - e + this.left.length,
            )
            .reverse()
        : this.left
            .slice(e)
            .concat(
              this.right
                .slice(this.right.length - n + this.left.length)
                .reverse(),
            );
  }
  splice(e, t, n) {
    let r = t || 0;
    this.setCursor(Math.trunc(e));
    let i = this.right.splice(this.right.length - r, 1 / 0);
    return (n && lG(this.left, n), i.reverse());
  }
  pop() {
    return (this.setCursor(1 / 0), this.left.pop());
  }
  push(e) {
    (this.setCursor(1 / 0), this.left.push(e));
  }
  pushMany(e) {
    (this.setCursor(1 / 0), lG(this.left, e));
  }
  unshift(e) {
    (this.setCursor(0), this.right.push(e));
  }
  unshiftMany(e) {
    (this.setCursor(0), lG(this.right, e.reverse()));
  }
  setCursor(e) {
    if (!(
      e === this.left.length ||
      (e > this.left.length && this.right.length === 0) ||
      (e < 0 && this.left.length === 0)
    ))
      if (e < this.left.length) {
        let t = this.left.splice(e, 1 / 0);
        lG(this.right, t.reverse());
      } else {
        let t = this.right.splice(
          this.left.length + this.right.length - e,
          1 / 0,
        );
        lG(this.left, t.reverse());
      }
  }
};
function lG(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length;) (e.push(...t.slice(n, n + 1e4)), (n += 1e4));
}
