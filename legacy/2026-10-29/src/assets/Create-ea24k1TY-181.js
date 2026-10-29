// Create-ea24k1TY 181 — consume
// Lines 60615-60957 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function FX(e) {
  this.exit(e);
}
function IX(e) {
  this.enter({ type: `tableCell`, children: [] }, e);
}
function LX(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, RX));
  let n = this.stack[this.stack.length - 1];
  (n.type, (n.value = t), this.exit(e));
}
function RX(e, t) {
  return t === `|` ? t : e;
}
function zX(e) {
  let t = e || {},
    n = t.tableCellPadding,
    r = t.tablePipeAlign,
    i = t.stringLength,
    a = n ? ` ` : `|`;
  return {
    unsafe: [
      { character: `\r`, inConstruct: `tableCell` },
      {
        character: `
`,
        inConstruct: `tableCell`,
      },
      { atBreak: !0, character: `|`, after: `[	 :-]` },
      { character: `|`, inConstruct: `tableCell` },
      { atBreak: !0, character: `:`, after: `-` },
      { atBreak: !0, character: `-`, after: `[:|-]` },
    ],
    handlers: { inlineCode: f, table: o, tableCell: c, tableRow: s },
  };
  function o(e, t, n, r) {
    return l(u(e, n, r), e.align);
  }
  function s(e, t, n, r) {
    let i = l([d(e, n, r)]);
    return i.slice(
      0,
      i.indexOf(`
`),
    );
  }
  function c(e, t, n, r) {
    let i = n.enter(`tableCell`),
      o = n.enter(`phrasing`),
      s = n.containerPhrasing(e, { ...r, before: a, after: a });
    return (o(), i(), s);
  }
  function l(e, t) {
    return NY(e, { align: t, alignDelimiters: r, padding: n, stringLength: i });
  }
  function u(e, t, n) {
    let r = e.children,
      i = -1,
      a = [],
      o = t.enter(`table`);
    for (; ++i < r.length;) a[i] = d(r[i], t, n);
    return (o(), a);
  }
  function d(e, t, n) {
    let r = e.children,
      i = -1,
      a = [],
      o = t.enter(`tableRow`);
    for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
    return (o(), a);
  }
  function f(e, t, n) {
    let r = AX.inlineCode(e, t, n);
    return (n.stack.includes(`tableCell`) && (r = r.replace(/\|/g, `\\$&`)), r);
  }
}
function BX() {
  return {
    exit: {
      taskListCheckValueChecked: HX,
      taskListCheckValueUnchecked: HX,
      paragraph: UX,
    },
  };
}
function VX() {
  return {
    unsafe: [{ atBreak: !0, character: `-`, after: `[:|-]` }],
    handlers: { listItem: WX },
  };
}
function HX(e) {
  let t = this.stack[this.stack.length - 2];
  (t.type, (t.checked = e.type === `taskListCheckValueChecked`));
}
function UX(e) {
  let t = this.stack[this.stack.length - 2];
  if (t && t.type === `listItem` && typeof t.checked == `boolean`) {
    let e = this.stack[this.stack.length - 1];
    e.type;
    let n = e.children[0];
    if (n && n.type === `text`) {
      let r = t.children,
        i = -1,
        a;
      for (; ++i < r.length;) {
        let e = r[i];
        if (e.type === `paragraph`) {
          a = e;
          break;
        }
      }
      a === e &&
        ((n.value = n.value.slice(1)),
        n.value.length === 0
          ? e.children.shift()
          : e.position &&
            n.position &&
            typeof n.position.start.offset == `number` &&
            (n.position.start.column++,
            n.position.start.offset++,
            (e.position.start = Object.assign({}, n.position.start))));
    }
  }
  this.exit(e);
}
function WX(e, t, n, r) {
  let i = e.children[0],
    a = typeof e.checked == `boolean` && i && i.type === `paragraph`,
    o = `[` + (e.checked ? `x` : ` `) + `] `,
    s = n.createTracker(r);
  a && s.move(o);
  let c = AX.listItem(e, t, n, { ...r, ...s.current() });
  return (a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c);
  function l(e) {
    return e + o;
  }
}
function GX() {
  return [ZJ(), xY(), EY(), jX(), BX()];
}
function KX(e) {
  return { extensions: [QJ(), SY(e), DY(), zX(e), VX()] };
}
var qX = { tokenize: sZ, partial: !0 },
  JX = { tokenize: cZ, partial: !0 },
  YX = { tokenize: lZ, partial: !0 },
  XX = { tokenize: uZ, partial: !0 },
  ZX = { tokenize: dZ, partial: !0 },
  QX = { name: `wwwAutolink`, tokenize: aZ, previous: fZ },
  $X = { name: `protocolAutolink`, tokenize: oZ, previous: pZ },
  eZ = { name: `emailAutolink`, tokenize: iZ, previous: mZ },
  tZ = {};
function nZ() {
  return { text: tZ };
}
for (var rZ = 48; rZ < 123;)
  ((tZ[rZ] = eZ), rZ++, rZ === 58 ? (rZ = 65) : rZ === 91 && (rZ = 97));
((tZ[43] = eZ),
  (tZ[45] = eZ),
  (tZ[46] = eZ),
  (tZ[95] = eZ),
  (tZ[72] = [eZ, $X]),
  (tZ[104] = [eZ, $X]),
  (tZ[87] = [eZ, QX]),
  (tZ[119] = [eZ, QX]));
function iZ(e, t, n) {
  let r = this,
    i,
    a;
  return o;
  function o(t) {
    return !hZ(t) || !mZ.call(r, r.previous) || gZ(r.events)
      ? n(t)
      : (e.enter(`literalAutolink`), e.enter(`literalAutolinkEmail`), s(t));
  }
  function s(t) {
    return hZ(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
  }
  function c(t) {
    return t === 46
      ? e.check(ZX, u, l)(t)
      : t === 45 || t === 95 || XU(t)
        ? ((a = !0), e.consume(t), c)
        : u(t);
  }
  function l(t) {
    return (e.consume(t), (i = !0), c);
  }
  function u(o) {
    return a && i && YU(r.previous)
      ? (e.exit(`literalAutolinkEmail`), e.exit(`literalAutolink`), t(o))
      : n(o);
  }
}
function aZ(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (t !== 87 && t !== 119) || !fZ.call(r, r.previous) || gZ(r.events)
      ? n(t)
      : (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkWww`),
        e.check(qX, e.attempt(JX, e.attempt(YX, a), n), n)(t));
  }
  function a(n) {
    return (e.exit(`literalAutolinkWww`), e.exit(`literalAutolink`), t(n));
  }
}
function oZ(e, t, n) {
  let r = this,
    i = ``,
    a = !1;
  return o;
  function o(t) {
    return (t === 72 || t === 104) && pZ.call(r, r.previous) && !gZ(r.events)
      ? (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkHttp`),
        (i += String.fromCodePoint(t)),
        e.consume(t),
        s)
      : n(t);
  }
  function s(t) {
    if (YU(t) && i.length < 5)
      return ((i += String.fromCodePoint(t)), e.consume(t), s);
    if (t === 58) {
      let n = i.toLowerCase();
      if (n === `http` || n === `https`) return (e.consume(t), c);
    }
    return n(t);
  }
  function c(t) {
    return t === 47 ? (e.consume(t), a ? l : ((a = !0), c)) : n(t);
  }
  function l(t) {
    return t === null || QU(t) || rW(t) || oW(t) || aW(t)
      ? n(t)
      : e.attempt(JX, e.attempt(YX, u), n)(t);
  }
  function u(n) {
    return (e.exit(`literalAutolinkHttp`), e.exit(`literalAutolink`), t(n));
  }
}
function sZ(e, t, n) {
  let r = 0;
  return i;
  function i(t) {
    return (t === 87 || t === 119) && r < 3
      ? (r++, e.consume(t), i)
      : t === 46 && r === 3
        ? (e.consume(t), a)
        : n(t);
  }
  function a(e) {
    return e === null ? n(e) : t(e);
  }
}
function cZ(e, t, n) {
  let r, i, a;
  return o;
  function o(t) {
    return t === 46 || t === 95
      ? e.check(XX, c, s)(t)
      : t === null || rW(t) || oW(t) || (t !== 45 && aW(t))
        ? c(t)
        : ((a = !0), e.consume(t), o);
  }
  function s(t) {
    return (t === 95 ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), o);
  }
  function c(e) {
    return i || r || !a ? n(e) : t(e);
  }
}
function lZ(e, t) {
  let n = 0,
    r = 0;
  return i;
  function i(o) {
    return o === 40
      ? (n++, e.consume(o), i)
      : o === 41 && r < n
        ? a(o)
        : o === 33 ||
            o === 34 ||
            o === 38 ||
            o === 39 ||
            o === 41 ||
            o === 42 ||
            o === 44 ||
            o === 46 ||
            o === 58 ||
            o === 59 ||
            o === 60 ||
            o === 63 ||
            o === 93 ||
            o === 95 ||
            o === 126
          ? e.check(XX, t, a)(o)
          : o === null || rW(o) || oW(o)
            ? t(o)
            : (e.consume(o), i);
  }
  function a(t) {
    return (t === 41 && r++, e.consume(t), i);
  }
}
function uZ(e, t, n) {
  return r;
  function r(o) {
    return o === 33 ||
      o === 34 ||
      o === 39 ||
      o === 41 ||
      o === 42 ||
      o === 44 ||
      o === 46 ||
      o === 58 ||
      o === 59 ||
      o === 63 ||
      o === 95 ||
      o === 126
      ? (e.consume(o), r)
      : o === 38
        ? (e.consume(o), a)
        : o === 93
          ? (e.consume(o), i)
          : o === 60 || o === null || rW(o) || oW(o)
            ? t(o)
            : n(o);
  }
  function i(e) {
    return e === null || e === 40 || e === 91 || rW(e) || oW(e) ? t(e) : r(e);
  }
  function a(e) {
    return YU(e) ? o(e) : n(e);
  }
  function o(t) {
    return t === 59 ? (e.consume(t), r) : YU(t) ? (e.consume(t), o) : n(t);
  }
}
