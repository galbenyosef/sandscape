// assets__Create-ea24k1TY 161 — data
// Lines 53735-54081 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function dU(e, t) {
  if (!t || t.Fragment === void 0)
    throw TypeError("Expected `Fragment` in options");
  let n = t.filePath || void 0,
    r;
  if (t.development) {
    if (typeof t.jsxDEV != `function`)
      throw TypeError("Expected `jsxDEV` in options when `development: true`");
    r = SU(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != `function`)
      throw TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != `function`)
      throw TypeError("Expected `jsxs` in production options");
    r = xU(n, t.jsx, t.jsxs);
  }
  let i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || `react`,
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === `svg` ? WH : UH,
      stylePropertyNameCase: t.stylePropertyNameCase || `dom`,
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    a = fU(i, e, void 0);
  return a && typeof a != `string`
    ? a
    : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function fU(e, t, n) {
  if (t.type === `element`) return pU(e, t, n);
  if (t.type === `mdxFlowExpression` || t.type === `mdxTextExpression`)
    return mU(e, t);
  if (t.type === `mdxJsxFlowElement` || t.type === `mdxJsxTextElement`)
    return gU(e, t, n);
  if (t.type === `mdxjsEsm`) return hU(e, t);
  if (t.type === `root`) return _U(e, t, n);
  if (t.type === `text`) return vU(e, t);
}
function pU(e, t, n) {
  let r = e.schema,
    i = r;
  (t.tagName.toLowerCase() === `svg` &&
    r.space === `html` &&
    ((i = WH), (e.schema = i)),
    e.ancestors.push(t));
  let a = OU(e, t.tagName, !1),
    o = CU(e, t),
    s = TU(e, t);
  return (
    lU.has(t.tagName) &&
      (s = s.filter(function (e) {
        return typeof e != `string` || !lH(e);
      })),
    yU(e, o, a, t),
    bU(o, s),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, a, o, n)
  );
}
function mU(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    let n = t.data.estree.body[0];
    return (n.type, e.evaluater.evaluateExpression(n.expression));
  }
  kU(e, t.position);
}
function hU(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(t.data.estree);
  kU(e, t.position);
}
function gU(e, t, n) {
  let r = e.schema,
    i = r;
  (t.name === `svg` && r.space === `html` && ((i = WH), (e.schema = i)),
    e.ancestors.push(t));
  let a = t.name === null ? e.Fragment : OU(e, t.name, !0),
    o = wU(e, t),
    s = TU(e, t);
  return (
    yU(e, o, a, t),
    bU(o, s),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, a, o, n)
  );
}
function _U(e, t, n) {
  let r = {};
  return (bU(r, TU(e, t)), e.create(t, e.Fragment, r, n));
}
function vU(e, t) {
  return t.value;
}
function yU(e, t, n, r) {
  typeof n != `string` && n !== e.Fragment && e.passNode && (t.node = r);
}
function bU(e, t) {
  if (t.length > 0) {
    let n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function xU(e, t, n) {
  return r;
  function r(e, r, i, a) {
    let o = Array.isArray(i.children) ? n : t;
    return a ? o(r, i, a) : o(r, i);
  }
}
function SU(e, t) {
  return n;
  function n(n, r, i, a) {
    let o = Array.isArray(i.children),
      s = ZH(n);
    return t(
      r,
      i,
      a,
      o,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0,
      },
      void 0,
    );
  }
}
function CU(e, t) {
  let n = {},
    r,
    i;
  for (i in t.properties)
    if (i !== `children` && oU.call(t.properties, i)) {
      let a = EU(e, i, t.properties[i]);
      if (a) {
        let [i, o] = a;
        e.tableCellAlignToStyle &&
        i === `align` &&
        typeof o == `string` &&
        uU.has(t.tagName)
          ? (r = o)
          : (n[i] = o);
      }
    }
  if (r) {
    let t = (n.style ||= {});
    t[e.stylePropertyNameCase === `css` ? `text-align` : `textAlign`] = r;
  }
  return n;
}
function wU(e, t) {
  let n = {};
  for (let r of t.attributes)
    if (r.type === `mdxJsxExpressionAttribute`)
      if (r.data && r.data.estree && e.evaluater) {
        let t = r.data.estree.body[0];
        t.type;
        let i = t.expression;
        i.type;
        let a = i.properties[0];
        (a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument)));
      } else kU(e, t.position);
    else {
      let i = r.name,
        a;
      if (r.value && typeof r.value == `object`)
        if (r.value.data && r.value.data.estree && e.evaluater) {
          let t = r.value.data.estree.body[0];
          (t.type, (a = e.evaluater.evaluateExpression(t.expression)));
        } else kU(e, t.position);
      else a = r.value === null || r.value;
      n[i] = a;
    }
  return n;
}
function TU(e, t) {
  let n = [],
    r = -1,
    i = e.passKeys ? new Map() : sU;
  for (; ++r < t.children.length;) {
    let a = t.children[r],
      o;
    if (e.passKeys) {
      let e =
        a.type === `element`
          ? a.tagName
          : a.type === `mdxJsxFlowElement` || a.type === `mdxJsxTextElement`
            ? a.name
            : void 0;
      if (e) {
        let t = i.get(e) || 0;
        ((o = e + `-` + t), i.set(e, t + 1));
      }
    }
    let s = fU(e, a, o);
    s !== void 0 && n.push(s);
  }
  return n;
}
function EU(e, t, n) {
  let r = BH(e.schema, t);
  if (!(n == null || (typeof n == `number` && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) && (n = r.commaSeparated ? rH(n) : GH(n)),
      r.property === `style`)
    ) {
      let t = typeof n == `object` ? n : DU(e, String(n));
      return (e.stylePropertyNameCase === `css` && (t = AU(t)), [`style`, t]);
    }
    return [
      e.elementAttributeNameCase === `react` && r.space
        ? IH[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function DU(e, t) {
  try {
    return (0, aU.default)(t, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle) return {};
    let n = t,
      r = new iU("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: n,
        ruleId: `style`,
        source: `hast-util-to-jsx-runtime`,
      });
    throw (
      (r.file = e.filePath || void 0),
      (r.url = `https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute`),
      r
    );
  }
}
function OU(e, t, n) {
  let r;
  if (!n) r = { type: `Literal`, value: t };
  else if (t.includes(`.`)) {
    let e = t.split(`.`),
      n = -1,
      i;
    for (; ++n < e.length;) {
      let t = sH(e[n])
        ? { type: `Identifier`, name: e[n] }
        : { type: `Literal`, value: e[n] };
      i = i
        ? {
            type: `MemberExpression`,
            object: i,
            property: t,
            computed: !!(n && t.type === `Literal`),
            optional: !1,
          }
        : t;
    }
    r = i;
  } else
    r =
      sH(t) && !/^[a-z]/.test(t)
        ? { type: `Identifier`, name: t }
        : { type: `Literal`, value: t };
  if (r.type === `Literal`) {
    let t = r.value;
    return oU.call(e.components, t) ? e.components[t] : t;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  kU(e);
}
function kU(e, t) {
  let n = new iU("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: `mdx-estree`,
    source: `hast-util-to-jsx-runtime`,
  });
  throw (
    (n.file = e.filePath || void 0),
    (n.url = `https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater`),
    n
  );
}
function AU(e) {
  let t = {},
    n;
  for (n in e) oU.call(e, n) && (t[jU(n)] = e[n]);
  return t;
}
function jU(e) {
  let t = e.replace(cU, MU);
  return (t.slice(0, 3) === `ms-` && (t = `-` + t), t);
}
function MU(e) {
  return `-` + e.toLowerCase();
}
var NU = {
    action: [`form`],
    cite: [`blockquote`, `del`, `ins`, `q`],
    data: [`object`],
    formAction: [`button`, `input`],
    href: [`a`, `area`, `base`, `link`],
    icon: [`menuitem`],
    itemId: null,
    manifest: [`html`],
    ping: [`a`, `area`],
    poster: [`video`],
    src: [
      `audio`,
      `embed`,
      `iframe`,
      `img`,
      `input`,
      `script`,
      `source`,
      `track`,
      `video`,
    ],
  },
  PU = {};
function FU(e, t) {
  let n = t || PU;
  return IU(
    e,
    typeof n.includeImageAlt != `boolean` || n.includeImageAlt,
    typeof n.includeHtml != `boolean` || n.includeHtml,
  );
}
function IU(e, t, n) {
  if (RU(e)) {
    if (`value` in e) return e.type === `html` && !n ? `` : e.value;
    if (t && `alt` in e && e.alt) return e.alt;
    if (`children` in e) return LU(e.children, t, n);
  }
  return Array.isArray(e) ? LU(e, t, n) : ``;
}
