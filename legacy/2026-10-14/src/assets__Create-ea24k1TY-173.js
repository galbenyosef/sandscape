// assets__Create-ea24k1TY 173 — children
// Lines 57873-58207 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function rq(e, t) {
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
      a = ZH(t.children[1]),
      o = XH(t.children[t.children.length - 1]);
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
function iq(e, t, n) {
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
function aq(e, t) {
  let n = {
    type: `element`,
    tagName: `td`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
var oq = 9,
  sq = 32;
function cq(e) {
  let t = String(e),
    n = /\r?\n|\r/g,
    r = n.exec(t),
    i = 0,
    a = [];
  for (; r;)
    (a.push(lq(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t)));
  return (a.push(lq(t.slice(i), i > 0, !1)), a.join(``));
}
function lq(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let t = e.codePointAt(r);
    for (; t === oq || t === sq;) (r++, (t = e.codePointAt(r)));
  }
  if (n) {
    let t = e.codePointAt(i - 1);
    for (; t === oq || t === sq;) (i--, (t = e.codePointAt(i - 1)));
  }
  return i > r ? e.slice(r, i) : ``;
}
function uq(e, t) {
  let n = { type: `text`, value: cq(String(t.value)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function dq(e, t) {
  let n = { type: `element`, tagName: `hr`, properties: {}, children: [] };
  return (e.patch(t, n), e.applyData(t, n));
}
var fq = {
  blockquote: IK,
  break: LK,
  code: RK,
  delete: zK,
  emphasis: BK,
  footnoteReference: VK,
  heading: HK,
  html: UK,
  imageReference: GK,
  image: KK,
  inlineCode: qK,
  linkReference: JK,
  link: YK,
  listItem: XK,
  list: $K,
  paragraph: eq,
  root: tq,
  strong: nq,
  table: rq,
  tableCell: aq,
  tableRow: iq,
  text: uq,
  thematicBreak: dq,
  toml: pq,
  yaml: pq,
  definition: pq,
  footnoteDefinition: pq,
};
function pq() {}
var mq = typeof self == `object` ? self : globalThis,
  hq = (e, t) => {
    switch (e) {
      case `Function`:
      case `SharedWorker`:
      case `Worker`:
      case `eval`:
      case `setInterval`:
      case `setTimeout`:
        throw TypeError(`unable to deserialize ` + e);
    }
    return new mq[e](t);
  },
  gq = (e, t) => {
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
            return n(typeof mq[e] == `function` ? hq(e, t) : Error(t), i);
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
        return n(hq(a, o), i);
      };
    return r;
  },
  _q = (e) => gq(new Map(), e)(0),
  vq = ``,
  { toString: yq } = {},
  { keys: bq } = Object,
  xq = (e) => {
    let t = typeof e;
    if (t !== `object` || !e) return [0, t];
    let n = yq.call(e).slice(8, -1);
    switch (n) {
      case `Array`:
        return [1, vq];
      case `Object`:
        return [2, vq];
      case `Date`:
        return [3, vq];
      case `RegExp`:
        return [4, vq];
      case `Map`:
        return [5, vq];
      case `Set`:
        return [6, vq];
      case `DataView`:
        return [1, n];
    }
    return n.includes(`Array`)
      ? [1, n]
      : e instanceof Error
        ? [7, e.name || `Error`]
        : [2, n];
  },
  Sq = ([e, t]) => e === 0 && (t === `function` || t === `symbol`),
  Cq = (e, t, n, r) => {
    let i = (e, t) => {
        let i = r.push(e) - 1;
        return (n.set(t, i), i);
      },
      a = (r) => {
        if (n.has(r)) return n.get(r);
        let [o, s] = xq(r);
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
            for (let t of bq(r))
              (e || !Sq(xq(r[t]))) && n.push([a(t), a(r[t])]);
            return c;
          }
          case 3:
            return i([o, isNaN(r.getTime()) ? vq : r.toISOString()], r);
          case 4: {
            let { source: e, flags: t } = r;
            return i([o, { source: e, flags: t }], r);
          }
          case 5: {
            let t = [],
              n = i([o, t], r);
            for (let [n, i] of r)
              (e || !(Sq(xq(n)) || Sq(xq(i)))) && t.push([a(n), a(i)]);
            return n;
          }
          case 6: {
            let t = [],
              n = i([o, t], r);
            for (let n of r) (e || !Sq(xq(n))) && t.push(a(n));
            return n;
          }
        }
        let { message: c } = r;
        return i([o, { name: s, message: c }], r);
      };
    return a;
  },
  wq = (e, { json: t, lossy: n } = {}) => {
    let r = [];
    return (Cq(!(t || n), !!t, new Map(), r)(e), r);
  },
  Tq =
    typeof structuredClone == `function`
      ? (e, t) =>
          t && (`json` in t || `lossy` in t) ? _q(wq(e, t)) : structuredClone(e)
      : (e, t) => _q(wq(e, t));
function Eq(e, t) {
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
function Dq(e, t) {
  return `Back to reference ` + (e + 1) + (t > 1 ? `-` + t : ``);
}
