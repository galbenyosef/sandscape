// Create-CEn7EAZs 176 — children
// Lines 58991-59334 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Wq(e) {
  let t =
      typeof e.options.clobberPrefix == `string`
        ? e.options.clobberPrefix
        : `user-content-`,
    n = e.options.footnoteBackContent || Hq,
    r = e.options.footnoteBackLabel || Uq,
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
      l = wW(o.toLowerCase()),
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
          properties: { ...Vq(o), id: `footnote-label` },
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
var Gq = function (e) {
  if (e == null) return Xq;
  if (typeof e == `function`) return Yq(e);
  if (typeof e == `object`) return Array.isArray(e) ? Kq(e) : qq(e);
  if (typeof e == `string`) return Jq(e);
  throw Error(`Expected function, string, or object as test`);
};
function Kq(e) {
  let t = [],
    n = -1;
  for (; ++n < e.length;) t[n] = Gq(e[n]);
  return Yq(r);
  function r(...e) {
    let n = -1;
    for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
    return !1;
  }
}
function qq(e) {
  let t = e;
  return Yq(n);
  function n(n) {
    let r = n,
      i;
    for (i in e) if (r[i] !== t[i]) return !1;
    return !0;
  }
}
function Jq(e) {
  return Yq(t);
  function t(t) {
    return t && t.type === e;
  }
}
function Yq(e) {
  return t;
  function t(t, n, r) {
    return !!(
      Zq(t) && e.call(this, t, typeof n == `number` ? n : void 0, r || void 0)
    );
  }
}
function Xq() {
  return !0;
}
function Zq(e) {
  return typeof e == `object` && !!e && `type` in e;
}
function Qq(e) {
  return e;
}
var $q = [];
function eJ(e, t, n, r) {
  let i;
  typeof t == `function` && typeof n != `function`
    ? ((r = n), (n = t))
    : (i = t);
  let a = Gq(i),
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
        value: `node (` + Qq(e.type + (t ? `<` + t + `>` : ``)) + `)`,
      });
    }
    return u;
    function u() {
      let l = $q,
        u,
        d,
        f;
      if (
        (!t || a(e, i, c[c.length - 1] || void 0)) &&
        ((l = tJ(n(e, c))), l[0] === !1)
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
function tJ(e) {
  return Array.isArray(e)
    ? e
    : typeof e == `number`
      ? [!0, e]
      : e == null
        ? $q
        : [e];
}
function nJ(e, t, n, r) {
  let i, a, o;
  (typeof t == `function` && typeof n != `function`
    ? ((a = void 0), (o = t), (i = n))
    : ((a = t), (o = n), (i = r)),
    eJ(e, a, s, i));
  function s(e, t) {
    let n = t[t.length - 1],
      r = n ? n.children.indexOf(e) : void 0;
    return o(e, r, n);
  }
}
var rJ = {}.hasOwnProperty,
  iJ = {};
function aJ(e, t) {
  let n = t || iJ,
    r = new Map(),
    i = new Map(),
    a = {
      all: s,
      applyData: sJ,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: new Map(),
      footnoteOrder: [],
      handlers: { ...Oq, ...n.handlers },
      one: o,
      options: n,
      patch: oJ,
      wrap: lJ,
    };
  return (
    nJ(e, function (e) {
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
    if (rJ.call(a.handlers, n) && r) return r(a, e, t);
    if (a.options.passThrough && a.options.passThrough.includes(n)) {
      if (`children` in e) {
        let { children: t, ...n } = e,
          r = Vq(n);
        return ((r.children = a.all(e)), r);
      }
      return Vq(e);
    }
    return (a.options.unknownHandler || cJ)(a, e, t);
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
            (!Array.isArray(i) && i.type === `text` && (i.value = uJ(i.value)),
            !Array.isArray(i) && i.type === `element`)
          ) {
            let e = i.children[0];
            e && e.type === `text` && (e.value = uJ(e.value));
          }
          Array.isArray(i) ? t.push(...i) : t.push(i);
        }
      }
    }
    return t;
  }
}
function oJ(e, t) {
  e.position && (t.position = hU(e));
}
function sJ(e, t) {
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
      n.type === `element` && i && Object.assign(n.properties, Vq(i)),
      `children` in n && n.children && r != null && (n.children = r));
  }
  return n;
}
function cJ(e, t) {
  let n = t.data || {},
    r =
      `value` in t && !(rJ.call(n, `hProperties`) || rJ.call(n, `hChildren`))
        ? { type: `text`, value: t.value }
        : {
            type: `element`,
            tagName: `div`,
            properties: {},
            children: e.all(t),
          };
  return (e.patch(t, r), e.applyData(t, r));
}
function lJ(e, t) {
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
function uJ(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32;) (t++, (n = e.charCodeAt(t)));
  return e.slice(t);
}
