// Create-ea24k1TY 162 — chunkflow
// Lines 54082-54418 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function LU(e, t, n) {
  let r = [],
    i = -1;
  for (; ++i < e.length;) r[i] = IU(e[i], t, n);
  return r.join(``);
}
function RU(e) {
  return !!(e && typeof e == `object`);
}
var zU = document.createElement(`i`);
function BU(e) {
  let t = `&` + e + `;`;
  zU.innerHTML = t;
  let n = zU.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== `semi` ? !1 : n !== t && n;
}
function VU(e, t, n, r) {
  let i = e.length,
    a = 0,
    o;
  if (
    ((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    ((o = Array.from(r)), o.unshift(t, n), e.splice(...o));
  else
    for (n && e.splice(t, n); a < r.length;)
      ((o = r.slice(a, a + 1e4)),
        o.unshift(t, 0),
        e.splice(...o),
        (a += 1e4),
        (t += 1e4));
}
function HU(e, t) {
  return e.length > 0 ? (VU(e, e.length, 0, t), e) : t;
}
var UU = {}.hasOwnProperty;
function WU(e) {
  let t = {},
    n = -1;
  for (; ++n < e.length;) GU(t, e[n]);
  return t;
}
function GU(e, t) {
  let n;
  for (n in t) {
    let r = (UU.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      i = t[n],
      a;
    if (i)
      for (a in i) {
        UU.call(r, a) || (r[a] = []);
        let e = i[a];
        KU(r[a], Array.isArray(e) ? e : e ? [e] : []);
      }
  }
}
function KU(e, t) {
  let n = -1,
    r = [];
  for (; ++n < t.length;) (t[n].add === `after` ? e : r).push(t[n]);
  VU(e, 0, 0, r);
}
function qU(e, t) {
  let n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) == 65535 ||
    (n & 65535) == 65534 ||
    n > 1114111
    ? `�`
    : String.fromCodePoint(n);
}
function JU(e) {
  return e
    .replace(/[\t\n\r ]+/g, ` `)
    .replace(/^ | $/g, ``)
    .toLowerCase()
    .toUpperCase();
}
var YU = sW(/[A-Za-z]/),
  XU = sW(/[\dA-Za-z]/),
  ZU = sW(/[#-'*+\--9=?A-Z^-~]/);
function QU(e) {
  return e !== null && (e < 32 || e === 127);
}
var $U = sW(/\d/),
  eW = sW(/[\dA-Fa-f]/),
  tW = sW(/[!-/:-@[-`{-~]/);
function nW(e) {
  return e !== null && e < -2;
}
function rW(e) {
  return e !== null && (e < 0 || e === 32);
}
function iW(e) {
  return e === -2 || e === -1 || e === 32;
}
var aW = sW(/\p{P}|\p{S}/u),
  oW = sW(/\s/);
function sW(e) {
  return t;
  function t(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function cW(e) {
  let t = [],
    n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length;) {
    let a = e.charCodeAt(n),
      o = ``;
    if (a === 37 && XU(e.charCodeAt(n + 1)) && XU(e.charCodeAt(n + 2))) i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) ||
        (o = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      let t = e.charCodeAt(n + 1);
      a < 56320 && t > 56319 && t < 57344
        ? ((o = String.fromCharCode(a, t)), (i = 1))
        : (o = `�`);
    } else o = String.fromCharCode(a);
    ((o &&=
      (t.push(e.slice(r, n), encodeURIComponent(o)), (r = n + i + 1), ``)),
      (i &&= ((n += i), 0)));
  }
  return t.join(``) + e.slice(r);
}
function lW(e, t, n, r) {
  let i = r ? r - 1 : 1 / 0,
    a = 0;
  return o;
  function o(r) {
    return iW(r) ? (e.enter(n), s(r)) : t(r);
  }
  function s(r) {
    return iW(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
  }
}
var uW = { tokenize: dW };
function dW(e) {
  let t = e.attempt(this.parser.constructs.contentInitial, r, i),
    n;
  return t;
  function r(n) {
    if (n === null) {
      e.consume(n);
      return;
    }
    return (
      e.enter(`lineEnding`),
      e.consume(n),
      e.exit(`lineEnding`),
      lW(e, t, `linePrefix`)
    );
  }
  function i(t) {
    return (e.enter(`paragraph`), a(t));
  }
  function a(t) {
    let r = e.enter(`chunkText`, { contentType: `text`, previous: n });
    return (n && (n.next = r), (n = r), o(t));
  }
  function o(t) {
    if (t === null) {
      (e.exit(`chunkText`), e.exit(`paragraph`), e.consume(t));
      return;
    }
    return nW(t) ? (e.consume(t), e.exit(`chunkText`), a) : (e.consume(t), o);
  }
}
var fW = { tokenize: mW },
  pW = { tokenize: hW };
function mW(e) {
  let t = this,
    n = [],
    r = 0,
    i,
    a,
    o;
  return s;
  function s(i) {
    if (r < n.length) {
      let a = n[r];
      return ((t.containerState = a[1]), e.attempt(a[0].continuation, c, l)(i));
    }
    return l(i);
  }
  function c(e) {
    if ((r++, t.containerState._closeFlow)) {
      ((t.containerState._closeFlow = void 0), i && v());
      let n = t.events.length,
        a = n,
        o;
      for (; a--;)
        if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
          o = t.events[a][1].end;
          break;
        }
      _(r);
      let s = n;
      for (; s < t.events.length;) ((t.events[s][1].end = { ...o }), s++);
      return (
        VU(t.events, a + 1, 0, t.events.slice(n)),
        (t.events.length = s),
        l(e)
      );
    }
    return s(e);
  }
  function l(a) {
    if (r === n.length) {
      if (!i) return f(a);
      if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return ((t.containerState = {}), e.check(pW, u, d)(a));
  }
  function u(e) {
    return (i && v(), _(r), f(e));
  }
  function d(e) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length),
      (o = t.now().offset),
      m(e)
    );
  }
  function f(n) {
    return ((t.containerState = {}), e.attempt(pW, p, m)(n));
  }
  function p(e) {
    return (r++, n.push([t.currentConstruct, t.containerState]), f(e));
  }
  function m(n) {
    if (n === null) {
      (i && v(), _(0), e.consume(n));
      return;
    }
    return (
      (i ||= t.parser.flow(t.now())),
      e.enter(`chunkFlow`, { _tokenizer: i, contentType: `flow`, previous: a }),
      h(n)
    );
  }
  function h(n) {
    if (n === null) {
      (g(e.exit(`chunkFlow`), !0), _(0), e.consume(n));
      return;
    }
    return nW(n)
      ? (e.consume(n),
        g(e.exit(`chunkFlow`)),
        (r = 0),
        (t.interrupt = void 0),
        s)
      : (e.consume(n), h);
  }
  function g(e, n) {
    let s = t.sliceStream(e);
    if (
      (n && s.push(null),
      (e.previous = a),
      a && (a.next = e),
      (a = e),
      i.defineSkip(e.start),
      i.write(s),
      t.parser.lazy[e.start.line])
    ) {
      let e = i.events.length;
      for (; e--;)
        if (
          i.events[e][1].start.offset < o &&
          (!i.events[e][1].end || i.events[e][1].end.offset > o)
        )
          return;
      let n = t.events.length,
        a = n,
        s,
        c;
      for (; a--;)
        if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
          if (s) {
            c = t.events[a][1].end;
            break;
          }
          s = !0;
        }
      for (_(r), e = n; e < t.events.length;)
        ((t.events[e][1].end = { ...c }), e++);
      (VU(t.events, a + 1, 0, t.events.slice(n)), (t.events.length = e));
    }
  }
  function _(r) {
    let i = n.length;
    for (; i-- > r;) {
      let r = n[i];
      ((t.containerState = r[1]), r[0].exit.call(t, e));
    }
    n.length = r;
  }
  function v() {
    (i.write([null]),
      (a = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0));
  }
}
function hW(e, t, n) {
  return lW(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    `linePrefix`,
    this.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4,
  );
}
function gW(e) {
  if (e === null || rW(e) || oW(e)) return 1;
  if (aW(e)) return 2;
}
function _W(e, t, n) {
  let r = [],
    i = -1;
  for (; ++i < e.length;) {
    let a = e[i].resolveAll;
    a && !r.includes(a) && ((t = a(t, n)), r.push(a));
  }
  return t;
}
var vW = { name: `attention`, resolveAll: yW, tokenize: bW };
