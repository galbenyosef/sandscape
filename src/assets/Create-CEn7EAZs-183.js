// Create-CEn7EAZs 183 — consume
// Lines 61398-61740 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function ZX(e) {
  this.exit(e);
}
function QX(e) {
  this.enter({ type: `tableCell`, children: [] }, e);
}
function $X(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, eZ));
  let n = this.stack[this.stack.length - 1];
  (n.type, (n.value = t), this.exit(e));
}
function eZ(e, t) {
  return t === `|` ? t : e;
}
function tZ(e) {
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
    return YY(e, { align: t, alignDelimiters: r, padding: n, stringLength: i });
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
    let r = KX.inlineCode(e, t, n);
    return (n.stack.includes(`tableCell`) && (r = r.replace(/\|/g, `\\$&`)), r);
  }
}
function nZ() {
  return {
    exit: {
      taskListCheckValueChecked: iZ,
      taskListCheckValueUnchecked: iZ,
      paragraph: aZ,
    },
  };
}
function rZ() {
  return {
    unsafe: [{ atBreak: !0, character: `-`, after: `[:|-]` }],
    handlers: { listItem: oZ },
  };
}
function iZ(e) {
  let t = this.stack[this.stack.length - 2];
  (t.type, (t.checked = e.type === `taskListCheckValueChecked`));
}
function aZ(e) {
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
function oZ(e, t, n, r) {
  let i = e.children[0],
    a = typeof e.checked == `boolean` && i && i.type === `paragraph`,
    o = `[` + (e.checked ? `x` : ` `) + `] `,
    s = n.createTracker(r);
  a && s.move(o);
  let c = KX.listItem(e, t, n, { ...r, ...s.current() });
  return (a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c);
  function l(e) {
    return e + o;
  }
}
function sZ() {
  return [pY(), LY(), HY(), qX(), nZ()];
}
function cZ(e) {
  return { extensions: [mY(), RY(e), UY(), tZ(e), rZ()] };
}
var lZ = { tokenize: CZ, partial: !0 },
  uZ = { tokenize: wZ, partial: !0 },
  dZ = { tokenize: TZ, partial: !0 },
  fZ = { tokenize: EZ, partial: !0 },
  pZ = { tokenize: DZ, partial: !0 },
  mZ = { name: `wwwAutolink`, tokenize: xZ, previous: OZ },
  hZ = { name: `protocolAutolink`, tokenize: SZ, previous: kZ },
  gZ = { name: `emailAutolink`, tokenize: bZ, previous: AZ },
  _Z = {};
function vZ() {
  return { text: _Z };
}
for (var yZ = 48; yZ < 123;)
  ((_Z[yZ] = gZ), yZ++, yZ === 58 ? (yZ = 65) : yZ === 91 && (yZ = 97));
((_Z[43] = gZ),
  (_Z[45] = gZ),
  (_Z[46] = gZ),
  (_Z[95] = gZ),
  (_Z[72] = [gZ, hZ]),
  (_Z[104] = [gZ, hZ]),
  (_Z[87] = [gZ, mZ]),
  (_Z[119] = [gZ, mZ]));
function bZ(e, t, n) {
  let r = this,
    i,
    a;
  return o;
  function o(t) {
    return !jZ(t) || !AZ.call(r, r.previous) || MZ(r.events)
      ? n(t)
      : (e.enter(`literalAutolink`), e.enter(`literalAutolinkEmail`), s(t));
  }
  function s(t) {
    return jZ(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
  }
  function c(t) {
    return t === 46
      ? e.check(pZ, u, l)(t)
      : t === 45 || t === 95 || fW(t)
        ? ((a = !0), e.consume(t), c)
        : u(t);
  }
  function l(t) {
    return (e.consume(t), (i = !0), c);
  }
  function u(o) {
    return a && i && dW(r.previous)
      ? (e.exit(`literalAutolinkEmail`), e.exit(`literalAutolink`), t(o))
      : n(o);
  }
}
function xZ(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (t !== 87 && t !== 119) || !OZ.call(r, r.previous) || MZ(r.events)
      ? n(t)
      : (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkWww`),
        e.check(lZ, e.attempt(uZ, e.attempt(dZ, a), n), n)(t));
  }
  function a(n) {
    return (e.exit(`literalAutolinkWww`), e.exit(`literalAutolink`), t(n));
  }
}
function SZ(e, t, n) {
  let r = this,
    i = ``,
    a = !1;
  return o;
  function o(t) {
    return (t === 72 || t === 104) && kZ.call(r, r.previous) && !MZ(r.events)
      ? (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkHttp`),
        (i += String.fromCodePoint(t)),
        e.consume(t),
        s)
      : n(t);
  }
  function s(t) {
    if (dW(t) && i.length < 5)
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
    return t === null || mW(t) || yW(t) || SW(t) || xW(t)
      ? n(t)
      : e.attempt(uZ, e.attempt(dZ, u), n)(t);
  }
  function u(n) {
    return (e.exit(`literalAutolinkHttp`), e.exit(`literalAutolink`), t(n));
  }
}
function CZ(e, t, n) {
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
function wZ(e, t, n) {
  let r, i, a;
  return o;
  function o(t) {
    return t === 46 || t === 95
      ? e.check(fZ, c, s)(t)
      : t === null || yW(t) || SW(t) || (t !== 45 && xW(t))
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
function TZ(e, t) {
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
          ? e.check(fZ, t, a)(o)
          : o === null || yW(o) || SW(o)
            ? t(o)
            : (e.consume(o), i);
  }
  function a(t) {
    return (t === 41 && r++, e.consume(t), i);
  }
}
function EZ(e, t, n) {
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
          : o === 60 || o === null || yW(o) || SW(o)
            ? t(o)
            : n(o);
  }
  function i(e) {
    return e === null || e === 40 || e === 91 || yW(e) || SW(e) ? t(e) : r(e);
  }
  function a(e) {
    return dW(e) ? o(e) : n(e);
  }
  function o(t) {
    return t === 59 ? (e.consume(t), r) : dW(t) ? (e.consume(t), o) : n(t);
  }
}
