// Create-CEn7EAZs 179 — children
// Lines 60034-60375 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function JJ(e) {
  return typeof e == `string` || YJ(e);
}
function YJ(e) {
  return !!(
    e &&
    typeof e == `object` &&
    `byteLength` in e &&
    `byteOffset` in e
  );
}
var XJ = [],
  ZJ = { allowDangerousHtml: !0 },
  QJ = /^(https?|ircs?|mailto|xmpp)$/i,
  $J = [
    { from: `astPlugins`, id: `remove-buggy-html-in-markdown-parser` },
    { from: `allowDangerousHtml`, id: `remove-buggy-html-in-markdown-parser` },
    {
      from: `allowNode`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `allowElement`,
    },
    {
      from: `allowedTypes`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `allowedElements`,
    },
    { from: `className`, id: `remove-classname` },
    {
      from: `disallowedTypes`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `disallowedElements`,
    },
    { from: `escapeHtml`, id: `remove-buggy-html-in-markdown-parser` },
    { from: `includeElementIndex`, id: `#remove-includeelementindex` },
    {
      from: `includeNodeIndex`,
      id: `change-includenodeindex-to-includeelementindex`,
    },
    { from: `linkTarget`, id: `remove-linktarget` },
    {
      from: `plugins`,
      id: `change-plugins-to-remarkplugins`,
      to: `remarkPlugins`,
    },
    { from: `rawSourcePos`, id: `#remove-rawsourcepos` },
    {
      from: `renderers`,
      id: `change-renderers-to-components`,
      to: `components`,
    },
    { from: `source`, id: `change-source-to-children`, to: `children` },
    { from: `sourcePos`, id: `#remove-sourcepos` },
    { from: `transformImageUri`, id: `#add-urltransform`, to: `urlTransform` },
    { from: `transformLinkUri`, id: `#add-urltransform`, to: `urlTransform` },
  ];
function eY(e) {
  let t = tY(e),
    n = nY(e);
  return rY(t.runSync(t.parse(n), n), e);
}
function tY(e) {
  let t = e.rehypePlugins || XJ,
    n = e.remarkPlugins || XJ,
    r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ZJ } : ZJ;
  return BJ().use(ZK).use(n).use(fJ, r).use(t);
}
function nY(e) {
  let t = e.children || ``,
    n = new MJ();
  return (typeof t == `string` ? (n.value = t) : `` + t, n);
}
function rY(e, t) {
  let n = t.allowedElements,
    r = t.allowElement,
    i = t.components,
    a = t.disallowedElements,
    o = t.skipHtml,
    s = t.unwrapDisallowed,
    c = t.urlTransform || iY;
  for (let e of $J)
    Object.hasOwn(t, e.from) &&
      `` + e.from + (e.to ? "use `" + e.to + "` instead" : `remove it`) + e.id;
  return (
    nJ(e, l),
    DU(e, {
      Fragment: Z.Fragment,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: Z.jsx,
      jsxs: Z.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function l(e, t, i) {
    if (e.type === `raw` && i && typeof t == `number`)
      return (
        o
          ? i.children.splice(t, 1)
          : (i.children[t] = { type: `text`, value: e.value }),
        t
      );
    if (e.type === `element`) {
      let t;
      for (t in YU)
        if (Object.hasOwn(YU, t) && Object.hasOwn(e.properties, t)) {
          let n = e.properties[t],
            r = YU[t];
          (r === null || r.includes(e.tagName)) &&
            (e.properties[t] = c(String(n || ``), t, e));
        }
    }
    if (e.type === `element`) {
      let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
      if (
        (!o && r && typeof t == `number` && (o = !r(e, t, i)),
        o && i && typeof t == `number`)
      )
        return (
          s && e.children
            ? i.children.splice(t, 1, ...e.children)
            : i.children.splice(t, 1),
          t
        );
    }
  }
}
function iY(e) {
  let t = e.indexOf(`:`),
    n = e.indexOf(`?`),
    r = e.indexOf(`#`),
    i = e.indexOf(`/`);
  return t === -1 ||
    (i !== -1 && t > i) ||
    (n !== -1 && t > n) ||
    (r !== -1 && t > r) ||
    QJ.test(e.slice(0, t))
    ? e
    : ``;
}
function aY(e, t) {
  let n = String(e);
  if (typeof t != `string`) throw TypeError(`Expected character`);
  let r = 0,
    i = n.indexOf(t);
  for (; i !== -1;) (r++, (i = n.indexOf(t, i + t.length)));
  return r;
}
function oY(e) {
  if (typeof e != `string`) throw TypeError(`Expected a string`);
  return e.replace(/[|\\{}()[\]^$+*?.]/g, `\\$&`).replace(/-/g, `\\x2d`);
}
function sY(e, t, n) {
  let r = Gq((n || {}).ignore || []),
    i = cY(t),
    a = -1;
  for (; ++a < i.length;) eJ(e, `text`, o);
  function o(e, t) {
    let n = -1,
      i;
    for (; ++n < t.length;) {
      let e = t[n],
        a = i ? i.children : void 0;
      if (r(e, a ? a.indexOf(e) : void 0, i)) return;
      i = e;
    }
    if (i) return s(e, t);
  }
  function s(e, t) {
    let n = t[t.length - 1],
      r = i[a][0],
      o = i[a][1],
      s = 0,
      c = n.children.indexOf(e),
      l = !1,
      u = [];
    r.lastIndex = 0;
    let d = r.exec(e.value);
    for (; d;) {
      let n = d.index,
        i = { index: d.index, input: d.input, stack: [...t, e] },
        a = o(...d, i);
      if (
        (typeof a == `string` &&
          (a = a.length > 0 ? { type: `text`, value: a } : void 0),
        a === !1
          ? (r.lastIndex = n + 1)
          : (s !== n && u.push({ type: `text`, value: e.value.slice(s, n) }),
            Array.isArray(a) ? u.push(...a) : a && u.push(a),
            (s = n + d[0].length),
            (l = !0)),
        !r.global)
      )
        break;
      d = r.exec(e.value);
    }
    return (
      l
        ? (s < e.value.length &&
            u.push({ type: `text`, value: e.value.slice(s) }),
          n.children.splice(c, 1, ...u))
        : (u = [e]),
      c + u.length
    );
  }
}
function cY(e) {
  let t = [];
  if (!Array.isArray(e))
    throw TypeError(`Expected find and replace tuple or list of tuples`);
  let n = !e[0] || Array.isArray(e[0]) ? e : [e],
    r = -1;
  for (; ++r < n.length;) {
    let e = n[r];
    t.push([lY(e[0]), uY(e[1])]);
  }
  return t;
}
function lY(e) {
  return typeof e == `string` ? new RegExp(oY(e), `g`) : e;
}
function uY(e) {
  return typeof e == `function`
    ? e
    : function () {
        return e;
      };
}
var dY = `phrasing`,
  fY = [`autolink`, `link`, `image`, `label`];
function pY() {
  return {
    transforms: [xY],
    enter: {
      literalAutolink: hY,
      literalAutolinkEmail: gY,
      literalAutolinkHttp: gY,
      literalAutolinkWww: gY,
    },
    exit: {
      literalAutolink: bY,
      literalAutolinkEmail: yY,
      literalAutolinkHttp: _Y,
      literalAutolinkWww: vY,
    },
  };
}
function mY() {
  return {
    unsafe: [
      {
        character: `@`,
        before: `[+\\-.\\w]`,
        after: `[\\-.\\w]`,
        inConstruct: dY,
        notInConstruct: fY,
      },
      {
        character: `.`,
        before: `[Ww]`,
        after: `[\\-.\\w]`,
        inConstruct: dY,
        notInConstruct: fY,
      },
      {
        character: `:`,
        before: `[ps]`,
        after: `\\/`,
        inConstruct: dY,
        notInConstruct: fY,
      },
    ],
  };
}
function hY(e) {
  this.enter({ type: `link`, title: null, url: ``, children: [] }, e);
}
function gY(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function _Y(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function vY(e) {
  this.config.exit.data.call(this, e);
  let t = this.stack[this.stack.length - 1];
  (t.type, (t.url = `http://` + this.sliceSerialize(e)));
}
function yY(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function bY(e) {
  this.exit(e);
}
function xY(e) {
  sY(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, SY],
      [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, CY],
    ],
    { ignore: [`link`, `linkReference`] },
  );
}
function SY(e, t, n, r, i) {
  let a = ``;
  if (
    !EY(i) ||
    (/^w/i.test(t) && ((n = t + n), (t = ``), (a = `http://`)), !wY(n))
  )
    return !1;
  let o = TY(n + r);
  if (!o[0]) return !1;
  let s = {
    type: `link`,
    title: null,
    url: a + t + o[0],
    children: [{ type: `text`, value: t + o[0] }],
  };
  return o[1] ? [s, { type: `text`, value: o[1] }] : s;
}
function CY(e, t, n, r) {
  return !EY(r, !0) || /[-\d_]$/.test(n)
    ? !1
    : {
        type: `link`,
        title: null,
        url: `mailto:` + t + `@` + n,
        children: [{ type: `text`, value: t + `@` + n }],
      };
}
function wY(e) {
  let t = e.split(`.`);
  return !(
    t.length < 2 ||
    (t[t.length - 1] &&
      (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
    (t[t.length - 2] &&
      (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
  );
}
