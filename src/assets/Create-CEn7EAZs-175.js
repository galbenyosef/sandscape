// Create-CEn7EAZs 175 — children
// Lines 58656-58990 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function yq(e, t) {
  let n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    let n = {
      type: `element`,
      tagName: `thead`,
      properties: {},
      children: e.wrap([r], !0),
    };
    (e.patch(t.children[0], n), i.push(n));
  }
  if (n.length > 0) {
    let r = {
        type: `element`,
        tagName: `tbody`,
        properties: {},
        children: e.wrap(n, !0),
      },
      a = pU(t.children[1]),
      o = fU(t.children[t.children.length - 1]);
    (a && o && (r.position = { start: a, end: o }), i.push(r));
  }
  let a = {
    type: `element`,
    tagName: `table`,
    properties: {},
    children: e.wrap(i, !0),
  };
  return (e.patch(t, a), e.applyData(t, a));
}
function bq(e, t, n) {
  let r = n ? n.children : void 0,
    i = (r ? r.indexOf(t) : 1) === 0 ? `th` : `td`,
    a = n && n.type === `table` ? n.align : void 0,
    o = a ? a.length : t.children.length,
    s = -1,
    c = [];
  for (; ++s < o;) {
    let n = t.children[s],
      r = {},
      o = a ? a[s] : void 0;
    o && (r.align = o);
    let l = { type: `element`, tagName: i, properties: r, children: [] };
    (n && ((l.children = e.all(n)), e.patch(n, l), (l = e.applyData(n, l))),
      c.push(l));
  }
  let l = {
    type: `element`,
    tagName: `tr`,
    properties: {},
    children: e.wrap(c, !0),
  };
  return (e.patch(t, l), e.applyData(t, l));
}
function xq(e, t) {
  let n = {
    type: `element`,
    tagName: `td`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
var Sq = 9,
  Cq = 32;
function wq(e) {
  let t = String(e),
    n = /\r?\n|\r/g,
    r = n.exec(t),
    i = 0,
    a = [];
  for (; r;)
    (a.push(Tq(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t)));
  return (a.push(Tq(t.slice(i), i > 0, !1)), a.join(``));
}
function Tq(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let t = e.codePointAt(r);
    for (; t === Sq || t === Cq;) (r++, (t = e.codePointAt(r)));
  }
  if (n) {
    let t = e.codePointAt(i - 1);
    for (; t === Sq || t === Cq;) (i--, (t = e.codePointAt(i - 1)));
  }
  return i > r ? e.slice(r, i) : ``;
}
function Eq(e, t) {
  let n = { type: `text`, value: wq(String(t.value)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Dq(e, t) {
  let n = { type: `element`, tagName: `hr`, properties: {}, children: [] };
  return (e.patch(t, n), e.applyData(t, n));
}
var Oq = {
  blockquote: QK,
  break: $K,
  code: eq,
  delete: tq,
  emphasis: nq,
  footnoteReference: rq,
  heading: iq,
  html: aq,
  imageReference: sq,
  image: cq,
  inlineCode: lq,
  linkReference: uq,
  link: dq,
  listItem: fq,
  list: hq,
  paragraph: gq,
  root: _q,
  strong: vq,
  table: yq,
  tableCell: xq,
  tableRow: bq,
  text: Eq,
  thematicBreak: Dq,
  toml: kq,
  yaml: kq,
  definition: kq,
  footnoteDefinition: kq,
};
function kq() {}
var Aq = typeof self == `object` ? self : globalThis,
  jq = (e, t) => {
    switch (e) {
      case `Function`:
      case `SharedWorker`:
      case `Worker`:
      case `eval`:
      case `setInterval`:
      case `setTimeout`:
        throw TypeError(`unable to deserialize ` + e);
    }
    return new Aq[e](t);
  },
  Mq = (e, t) => {
    let n = (t, n) => (e.set(n, t), t),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        let [a, o] = t[i];
        switch (a) {
          case 0:
          case -1:
            return n(o, i);
          case 1: {
            let e = n([], i);
            for (let t of o) e.push(r(t));
            return e;
          }
          case 2: {
            let e = n({}, i);
            for (let [t, n] of o) e[r(t)] = r(n);
            return e;
          }
          case 3:
            return n(new Date(o), i);
          case 4: {
            let { source: e, flags: t } = o;
            return n(new RegExp(e, t), i);
          }
          case 5: {
            let e = n(new Map(), i);
            for (let [t, n] of o) e.set(r(t), r(n));
            return e;
          }
          case 6: {
            let e = n(new Set(), i);
            for (let t of o) e.add(r(t));
            return e;
          }
          case 7: {
            let { name: e, message: t } = o;
            return n(typeof Aq[e] == `function` ? jq(e, t) : Error(t), i);
          }
          case 8:
            return n(BigInt(o), i);
          case `BigInt`:
            return n(Object(BigInt(o)), i);
          case `ArrayBuffer`:
            return n(new Uint8Array(o).buffer, o);
          case `DataView`: {
            let { buffer: e } = new Uint8Array(o);
            return n(new DataView(e), o);
          }
        }
        return n(jq(a, o), i);
      };
    return r;
  },
  Nq = (e) => Mq(new Map(), e)(0),
  Pq = ``,
  { toString: Fq } = {},
  { keys: Iq } = Object,
  Lq = (e) => {
    let t = typeof e;
    if (t !== `object` || !e) return [0, t];
    let n = Fq.call(e).slice(8, -1);
    switch (n) {
      case `Array`:
        return [1, Pq];
      case `Object`:
        return [2, Pq];
      case `Date`:
        return [3, Pq];
      case `RegExp`:
        return [4, Pq];
      case `Map`:
        return [5, Pq];
      case `Set`:
        return [6, Pq];
      case `DataView`:
        return [1, n];
    }
    return n.includes(`Array`)
      ? [1, n]
      : e instanceof Error
        ? [7, e.name || `Error`]
        : [2, n];
  },
  Rq = ([e, t]) => e === 0 && (t === `function` || t === `symbol`),
  zq = (e, t, n, r) => {
    let i = (e, t) => {
        let i = r.push(e) - 1;
        return (n.set(t, i), i);
      },
      a = (r) => {
        if (n.has(r)) return n.get(r);
        let [o, s] = Lq(r);
        switch (o) {
          case 0: {
            let t = r;
            switch (s) {
              case `bigint`:
                ((o = 8), (t = r.toString()));
                break;
              case `function`:
              case `symbol`:
                if (e) throw TypeError(`unable to serialize ` + s);
                t = null;
                break;
              case `undefined`:
                return i([-1], r);
            }
            return i([o, t], r);
          }
          case 1: {
            if (s) {
              let e = r;
              return (
                s === `DataView`
                  ? (e = new Uint8Array(r.buffer))
                  : s === `ArrayBuffer` && (e = new Uint8Array(r)),
                i([s, [...e]], r)
              );
            }
            let e = [],
              t = i([o, e], r);
            for (let t of r) e.push(a(t));
            return t;
          }
          case 2: {
            if (s)
              switch (s) {
                case `BigInt`:
                  return i([s, r.toString()], r);
                case `Boolean`:
                case `Number`:
                case `String`:
                  return i([s, r.valueOf()], r);
              }
            if (t && `toJSON` in r) return a(r.toJSON());
            let n = [],
              c = i([o, n], r);
            for (let t of Iq(r))
              (e || !Rq(Lq(r[t]))) && n.push([a(t), a(r[t])]);
            return c;
          }
          case 3:
            return i([o, isNaN(r.getTime()) ? Pq : r.toISOString()], r);
          case 4: {
            let { source: e, flags: t } = r;
            return i([o, { source: e, flags: t }], r);
          }
          case 5: {
            let t = [],
              n = i([o, t], r);
            for (let [n, i] of r)
              (e || !(Rq(Lq(n)) || Rq(Lq(i)))) && t.push([a(n), a(i)]);
            return n;
          }
          case 6: {
            let t = [],
              n = i([o, t], r);
            for (let n of r) (e || !Rq(Lq(n))) && t.push(a(n));
            return n;
          }
        }
        let { message: c } = r;
        return i([o, { name: s, message: c }], r);
      };
    return a;
  },
  Bq = (e, { json: t, lossy: n } = {}) => {
    let r = [];
    return (zq(!(t || n), !!t, new Map(), r)(e), r);
  },
  Vq =
    typeof structuredClone == `function`
      ? (e, t) =>
          t && (`json` in t || `lossy` in t) ? Nq(Bq(e, t)) : structuredClone(e)
      : (e, t) => Nq(Bq(e, t));
function Hq(e, t) {
  let n = [{ type: `text`, value: `↩` }];
  return (
    t > 1 &&
      n.push({
        type: `element`,
        tagName: `sup`,
        properties: {},
        children: [{ type: `text`, value: String(t) }],
      }),
    n
  );
}
function Uq(e, t) {
  return `Back to reference ` + (e + 1) + (t > 1 ? `-` + t : ``);
}
