// AuthService-C8NFtVWb 01 — props
// Lines 1-186 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./preload-helper-Czpn1I53.js";
var i = e(t(), 1),
  a = Object.defineProperty,
  o = (e, t) => a(e, `name`, { value: t, configurable: !0 });
function s(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
o(s, `setRef`);
function c(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = s(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : s(e[t], null);
        }
      };
  };
}
o(c, `composeRefs`);
function l(...e) {
  return i.useCallback(c(...e), e);
}
(o(l, `useComposedRefs`), n());
var u = Object.defineProperty,
  d = (e, t) => u(e, `name`, { value: t, configurable: !0 }),
  f = d((e, t) => {
    let n = { ...t };
    for (let r in t) {
      let i = e[r],
        a = t[r];
      if (/^on[A-Z]/.test(r))
        if (i && a) {
          let e = typeof i == `function`,
            t = typeof a == `function`;
          n[r] = (...n) => {
            let r = t ? a(...n) : void 0;
            return (e && i(...n), r);
          };
        } else i && (n[r] = i);
      else
        r === `style`
          ? (n[r] = {
              ...(typeof i == `object` ? i : null),
              ...(typeof a == `object` ? a : null),
            })
          : r === `className`
            ? (n[r] = [i, a].filter(Boolean).join(` `))
            : r === `aria-describedby` && (n[r] = p(a, i));
    }
    return { ...e, ...n };
  }, `mergeProps`);
function p(...e) {
  let t = new Set();
  for (let n of e)
    if (typeof n == `string`)
      for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
  return t.size > 0 ? Array.from(t).join(` `) : void 0;
}
d(p, `concatAriaDescribedby`);
var m = i.createContext(f);
m.displayName = `SlotContext`;
function h(e) {
  let t = i.forwardRef((t, n) => {
    let r = i.useContext(m),
      { children: a, mergeProps: o = r, ...s } = t,
      c = null,
      u = !1,
      d = [];
    (ie(a) && typeof ce == `function` && (a = ce(a._payload)),
      i.Children.forEach(a, (e) => {
        if (ne(e)) {
          u = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (ie(n) && typeof ce == `function` && (n = ce(n._payload)),
            (c = ee(t, n)),
            d.push(c?.props?.children));
        } else d.push(e);
      }),
      c
        ? (c = i.cloneElement(c, void 0, d))
        : !u && i.Children.count(a) === 1 && i.isValidElement(a) && (c = a));
    let f = c ? te(c) : void 0,
      p = l(n, f);
    if (!c) {
      if (a || a === 0) throw Error(u ? se(e) : oe(e));
      return a;
    }
    let h = o(s, c.props ?? {});
    return (c.type !== i.Fragment && (h.ref = n ? p : f), i.cloneElement(c, h));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
d(h, `createSlot`);
var g = h(`Slot`),
  _ = Symbol.for(`radix.slottable`);
function v(e) {
  let t = d(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = _), t);
}
d(v, `createSlottable`);
var ee = d((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return i.isValidElement(t)
      ? i.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return i.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function te(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
d(te, `getElementRef`);
function ne(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === _
  );
}
d(ne, `isSlottable`);
var re = Symbol.for(`react.lazy`);
function ie(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === re &&
    `_payload` in e &&
    ae(e._payload)
  );
}
d(ie, `isLazyComponent`);
function ae(e) {
  return typeof e == `object` && !!e && `then` in e;
}
d(ae, `isPromiseLike`);
var oe = d(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  se = d(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  ce = i.use;
function y(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = y(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function le() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = y(e)) && (r && (r += ` `), (r += t));
  return r;
}
