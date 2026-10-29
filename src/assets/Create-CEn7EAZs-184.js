// Create-CEn7EAZs 184 — exit
// Lines 61741-62017 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function DZ(e, t, n) {
  return r;
  function r(t) {
    return (e.consume(t), i);
  }
  function i(e) {
    return fW(e) ? n(e) : t(e);
  }
}
function OZ(e) {
  return (
    e === null ||
    e === 40 ||
    e === 42 ||
    e === 95 ||
    e === 91 ||
    e === 93 ||
    e === 126 ||
    yW(e)
  );
}
function kZ(e) {
  return !dW(e);
}
function AZ(e) {
  return !(e === 47 || jZ(e));
}
function jZ(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || fW(e);
}
function MZ(e) {
  let t = e.length,
    n = !1;
  for (; t--;) {
    let r = e[t][1];
    if ((r.type === `labelLink` || r.type === `labelImage`) && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return (
    e.length > 0 &&
      !n &&
      (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
    n
  );
}
var NZ = { tokenize: VZ, partial: !0 };
function PZ() {
  return {
    document: {
      91: {
        name: `gfmFootnoteDefinition`,
        tokenize: RZ,
        continuation: { tokenize: zZ },
        exit: BZ,
      },
    },
    text: {
      91: { name: `gfmFootnoteCall`, tokenize: LZ },
      93: {
        name: `gfmPotentialFootnoteCall`,
        add: `after`,
        tokenize: FZ,
        resolveTo: IZ,
      },
    },
  };
}
function FZ(e, t, n) {
  let r = this,
    i = r.events.length,
    a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
    o;
  for (; i--;) {
    let e = r.events[i][1];
    if (e.type === `labelImage`) {
      o = e;
      break;
    }
    if (
      e.type === `gfmFootnoteCall` ||
      e.type === `labelLink` ||
      e.type === `label` ||
      e.type === `image` ||
      e.type === `link`
    )
      break;
  }
  return s;
  function s(i) {
    if (!o || !o._balanced) return n(i);
    let s = uW(r.sliceSerialize({ start: o.end, end: r.now() }));
    return s.codePointAt(0) !== 94 || !a.includes(s.slice(1))
      ? n(i)
      : (e.enter(`gfmFootnoteCallLabelMarker`),
        e.consume(i),
        e.exit(`gfmFootnoteCallLabelMarker`),
        t(i));
  }
}
function IZ(e, t) {
  let n = e.length;
  for (; n--;)
    if (e[n][1].type === `labelImage` && e[n][0] === `enter`) {
      e[n][1];
      break;
    }
  ((e[n + 1][1].type = `data`),
    (e[n + 3][1].type = `gfmFootnoteCallLabelMarker`));
  let r = {
      type: `gfmFootnoteCall`,
      start: Object.assign({}, e[n + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    i = {
      type: `gfmFootnoteCallMarker`,
      start: Object.assign({}, e[n + 3][1].end),
      end: Object.assign({}, e[n + 3][1].end),
    };
  (i.end.column++, i.end.offset++, i.end._bufferIndex++);
  let a = {
      type: `gfmFootnoteCallString`,
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    o = {
      type: `chunkString`,
      contentType: `string`,
      start: Object.assign({}, a.start),
      end: Object.assign({}, a.end),
    },
    s = [
      e[n + 1],
      e[n + 2],
      [`enter`, r, t],
      e[n + 3],
      e[n + 4],
      [`enter`, i, t],
      [`exit`, i, t],
      [`enter`, a, t],
      [`enter`, o, t],
      [`exit`, o, t],
      [`exit`, a, t],
      e[e.length - 2],
      e[e.length - 1],
      [`exit`, r, t],
    ];
  return (e.splice(n, e.length - n + 1, ...s), e);
}
function LZ(e, t, n) {
  let r = this,
    i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
    a = 0,
    o;
  return s;
  function s(t) {
    return (
      e.enter(`gfmFootnoteCall`),
      e.enter(`gfmFootnoteCallLabelMarker`),
      e.consume(t),
      e.exit(`gfmFootnoteCallLabelMarker`),
      c
    );
  }
  function c(t) {
    return t === 94
      ? (e.enter(`gfmFootnoteCallMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteCallMarker`),
        e.enter(`gfmFootnoteCallString`),
        (e.enter(`chunkString`).contentType = `string`),
        l)
      : n(t);
  }
  function l(s) {
    if (a > 999 || (s === 93 && !o) || s === null || s === 91 || yW(s))
      return n(s);
    if (s === 93) {
      e.exit(`chunkString`);
      let a = e.exit(`gfmFootnoteCallString`);
      return i.includes(uW(r.sliceSerialize(a)))
        ? (e.enter(`gfmFootnoteCallLabelMarker`),
          e.consume(s),
          e.exit(`gfmFootnoteCallLabelMarker`),
          e.exit(`gfmFootnoteCall`),
          t)
        : n(s);
    }
    return (yW(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l);
  }
  function u(t) {
    return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
  }
}
function RZ(e, t, n) {
  let r = this,
    i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
    a,
    o = 0,
    s;
  return c;
  function c(t) {
    return (
      (e.enter(`gfmFootnoteDefinition`)._container = !0),
      e.enter(`gfmFootnoteDefinitionLabel`),
      e.enter(`gfmFootnoteDefinitionLabelMarker`),
      e.consume(t),
      e.exit(`gfmFootnoteDefinitionLabelMarker`),
      l
    );
  }
  function l(t) {
    return t === 94
      ? (e.enter(`gfmFootnoteDefinitionMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteDefinitionMarker`),
        e.enter(`gfmFootnoteDefinitionLabelString`),
        (e.enter(`chunkString`).contentType = `string`),
        u)
      : n(t);
  }
  function u(t) {
    if (o > 999 || (t === 93 && !s) || t === null || t === 91 || yW(t))
      return n(t);
    if (t === 93) {
      e.exit(`chunkString`);
      let n = e.exit(`gfmFootnoteDefinitionLabelString`);
      return (
        (a = uW(r.sliceSerialize(n))),
        e.enter(`gfmFootnoteDefinitionLabelMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteDefinitionLabelMarker`),
        e.exit(`gfmFootnoteDefinitionLabel`),
        f
      );
    }
    return (yW(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u);
  }
  function d(t) {
    return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
  }
  function f(t) {
    return t === 58
      ? (e.enter(`definitionMarker`),
        e.consume(t),
        e.exit(`definitionMarker`),
        i.includes(a) || i.push(a),
        TW(e, p, `gfmFootnoteDefinitionWhitespace`))
      : n(t);
  }
  function p(e) {
    return t(e);
  }
}
function zZ(e, t, n) {
  return e.check(BW, t, e.attempt(NZ, t, n));
}
function BZ(e) {
  e.exit(`gfmFootnoteDefinition`);
}
function VZ(e, t, n) {
  let r = this;
  return TW(e, i, `gfmFootnoteDefinitionIndent`, 5);
  function i(e) {
    let i = r.events[r.events.length - 1];
    return i &&
      i[1].type === `gfmFootnoteDefinitionIndent` &&
      i[2].sliceSerialize(i[1], !0).length === 4
      ? t(e)
      : n(e);
  }
}
