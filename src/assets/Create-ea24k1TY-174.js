// Create-ea24k1TY 174 — children
// Lines 58208-58551 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Oq(e) {
  let t =
      typeof e.options.clobberPrefix == `string`
        ? e.options.clobberPrefix
        : `user-content-`,
    n = e.options.footnoteBackContent || Eq,
    r = e.options.footnoteBackLabel || Dq,
    i = e.options.footnoteLabel || `Footnotes`,
    a = e.options.footnoteLabelTagName || `h2`,
    o = e.options.footnoteLabelProperties || { className: [`sr-only`] },
    s = [],
    c = -1;
  for (; ++c < e.footnoteOrder.length;) {
    let i = e.footnoteById.get(e.footnoteOrder[c]);
    if (!i) continue;
    let a = e.all(i),
      o = String(i.identifier).toUpperCase(),
      l = cW(o.toLowerCase()),
      u = 0,
      d = [],
      f = e.footnoteCounts.get(o);
    for (; f !== void 0 && ++u <= f;) {
      d.length > 0 && d.push({ type: `text`, value: ` ` });
      let e = typeof n == `string` ? n : n(c, u);
      (typeof e == `string` && (e = { type: `text`, value: e }),
        d.push({
          type: `element`,
          tagName: `a`,
          properties: {
            href: `#` + t + `fnref-` + l + (u > 1 ? `-` + u : ``),
            dataFootnoteBackref: ``,
            ariaLabel: typeof r == `string` ? r : r(c, u),
            className: [`data-footnote-backref`],
          },
          children: Array.isArray(e) ? e : [e],
        }));
    }
    let p = a[a.length - 1];
    if (p && p.type === `element` && p.tagName === `p`) {
      let e = p.children[p.children.length - 1];
      (e && e.type === `text`
        ? (e.value += ` `)
        : p.children.push({ type: `text`, value: ` ` }),
        p.children.push(...d));
    } else a.push(...d);
    let m = {
      type: `element`,
      tagName: `li`,
      properties: { id: t + `fn-` + l },
      children: e.wrap(a, !0),
    };
    (e.patch(i, m), s.push(m));
  }
  if (s.length !== 0)
    return {
      type: `element`,
      tagName: `section`,
      properties: { dataFootnotes: !0, className: [`footnotes`] },
      children: [
        {
          type: `element`,
          tagName: a,
          properties: { ...Tq(o), id: `footnote-label` },
          children: [{ type: `text`, value: i }],
        },
        {
          type: `text`,
          value: `
`,
        },
        {
          type: `element`,
          tagName: `ol`,
          properties: {},
          children: e.wrap(s, !0),
        },
        {
          type: `text`,
          value: `
`,
        },
      ],
    };
}
var kq = function (e) {
  if (e == null) return Pq;
  if (typeof e == `function`) return Nq(e);
  if (typeof e == `object`) return Array.isArray(e) ? Aq(e) : jq(e);
  if (typeof e == `string`) return Mq(e);
  throw Error(`Expected function, string, or object as test`);
};
function Aq(e) {
  let t = [],
    n = -1;
  for (; ++n < e.length;) t[n] = kq(e[n]);
  return Nq(r);
  function r(...e) {
    let n = -1;
    for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
    return !1;
  }
}
function jq(e) {
  let t = e;
  return Nq(n);
  function n(n) {
    let r = n,
      i;
    for (i in e) if (r[i] !== t[i]) return !1;
    return !0;
  }
}
function Mq(e) {
  return Nq(t);
  function t(t) {
    return t && t.type === e;
  }
}
function Nq(e) {
  return t;
  function t(t, n, r) {
    return !!(
      Fq(t) && e.call(this, t, typeof n == `number` ? n : void 0, r || void 0)
    );
  }
}
function Pq() {
  return !0;
}
function Fq(e) {
  return typeof e == `object` && !!e && `type` in e;
}
function Iq(e) {
  return e;
}
var Lq = [];
function Rq(e, t, n, r) {
  let i;
  typeof t == `function` && typeof n != `function`
    ? ((r = n), (n = t))
    : (i = t);
  let a = kq(i),
    o = r ? -1 : 1;
  s(e, void 0, [])();
  function s(e, i, c) {
    let l = e && typeof e == `object` ? e : {};
    if (typeof l.type == `string`) {
      let t =
        typeof l.tagName == `string`
          ? l.tagName
          : typeof l.name == `string`
            ? l.name
            : void 0;
      Object.defineProperty(u, "name", {
        value: `node (` + Iq(e.type + (t ? `<` + t + `>` : ``)) + `)`,
      });
    }
    return u;
    function u() {
      let l = Lq,
        u,
        d,
        f;
      if (
        (!t || a(e, i, c[c.length - 1] || void 0)) &&
        ((l = zq(n(e, c))), l[0] === !1)
      )
        return l;
      if (`children` in e && e.children) {
        let t = e;
        if (t.children && l[0] !== `skip`)
          for (
            d = (r ? t.children.length : -1) + o, f = c.concat(t);
            d > -1 && d < t.children.length;
          ) {
            let e = t.children[d];
            if (((u = s(e, d, f)()), u[0] === !1)) return u;
            d = typeof u[1] == `number` ? u[1] : d + o;
          }
      }
      return l;
    }
  }
}
function zq(e) {
  return Array.isArray(e)
    ? e
    : typeof e == `number`
      ? [!0, e]
      : e == null
        ? Lq
        : [e];
}
function Bq(e, t, n, r) {
  let i, a, o;
  (typeof t == `function` && typeof n != `function`
    ? ((a = void 0), (o = t), (i = n))
    : ((a = t), (o = n), (i = r)),
    Rq(e, a, s, i));
  function s(e, t) {
    let n = t[t.length - 1],
      r = n ? n.children.indexOf(e) : void 0;
    return o(e, r, n);
  }
}
var Vq = {}.hasOwnProperty,
  Hq = {};
function Uq(e, t) {
  let n = t || Hq,
    r = new Map(),
    i = new Map(),
    a = {
      all: s,
      applyData: Gq,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: new Map(),
      footnoteOrder: [],
      handlers: { ...fq, ...n.handlers },
      one: o,
      options: n,
      patch: Wq,
      wrap: qq,
    };
  return (
    Bq(e, function (e) {
      if (e.type === `definition` || e.type === `footnoteDefinition`) {
        let t = e.type === `definition` ? r : i,
          n = String(e.identifier).toUpperCase();
        t.has(n) || t.set(n, e);
      }
    }),
    a
  );
  function o(e, t) {
    let n = e.type,
      r = a.handlers[n];
    if (Vq.call(a.handlers, n) && r) return r(a, e, t);
    if (a.options.passThrough && a.options.passThrough.includes(n)) {
      if (`children` in e) {
        let { children: t, ...n } = e,
          r = Tq(n);
        return ((r.children = a.all(e)), r);
      }
      return Tq(e);
    }
    return (a.options.unknownHandler || Kq)(a, e, t);
  }
  function s(e) {
    let t = [];
    if (`children` in e) {
      let n = e.children,
        r = -1;
      for (; ++r < n.length;) {
        let i = a.one(n[r], e);
        if (i) {
          if (
            r &&
            n[r - 1].type === `break` &&
            (!Array.isArray(i) && i.type === `text` && (i.value = Jq(i.value)),
            !Array.isArray(i) && i.type === `element`)
          ) {
            let e = i.children[0];
            e && e.type === `text` && (e.value = Jq(e.value));
          }
          Array.isArray(i) ? t.push(...i) : t.push(i);
        }
      }
    }
    return t;
  }
}
function Wq(e, t) {
  e.position && (t.position = $H(e));
}
function Gq(e, t) {
  let n = t;
  if (e && e.data) {
    let t = e.data.hName,
      r = e.data.hChildren,
      i = e.data.hProperties;
    (typeof t == `string` &&
      (n.type === `element`
        ? (n.tagName = t)
        : (n = {
            type: `element`,
            tagName: t,
            properties: {},
            children: `children` in n ? n.children : [n],
          })),
      n.type === `element` && i && Object.assign(n.properties, Tq(i)),
      `children` in n && n.children && r != null && (n.children = r));
  }
  return n;
}
function Kq(e, t) {
  let n = t.data || {},
    r =
      `value` in t && !(Vq.call(n, `hProperties`) || Vq.call(n, `hChildren`))
        ? { type: `text`, value: t.value }
        : {
            type: `element`,
            tagName: `div`,
            properties: {},
            children: e.all(t),
          };
  return (e.patch(t, r), e.applyData(t, r));
}
function qq(e, t) {
  let n = [],
    r = -1;
  for (
    t &&
    n.push({
      type: `text`,
      value: `
`,
    });
    ++r < e.length;
  )
    (r &&
      n.push({
        type: `text`,
        value: `
`,
      }),
      n.push(e[r]));
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: `text`,
        value: `
`,
      }),
    n
  );
}
function Jq(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32;) (t++, (n = e.charCodeAt(t)));
  return e.slice(t);
}
