// switch-CkslyoJe 01 — current
// Lines 1-145 of readable/assets/switch-CkslyoJe.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import { a as i, i as a, n as o, r as s, t as c } from "./dist-CA4uZW3H.js";
import { f as l, l as u, m as d } from "./AuthService-C8NFtVWb.js";
import { t as f } from "./dist-C95o2tHc.js";
import { t as p } from "./dist-ByN-1XKv.js";
import {
  a as m,
  i as h,
  n as g,
  o as _,
  r as v,
  t as y,
} from "./dist-BfZydly7.js";
import { t as b } from "./dist-SzuULMPt.js";
import { n as x, t as S } from "./dist-ChIM81kv.js";
import { t as C } from "./dist-B8ylHDUS.js";
import { r as w } from "./button-gyaE5cND.js";
import { t as T } from "./check-8B-bFngd.js";
import { t as E } from "./dist-C7e-qgX5.js";
import { i as ee, n as D, r as te, t as O } from "./Combination-DxBwDv-s.js";
import { t as k } from "./dist-D8Wfxh48.js";
import { dt as A } from "./index-CBcimEr9.js";
var j = w(`ChevronUp`, [[`path`, { d: `m18 15-6-6-6 6`, key: `153udz` }]]),
  M = e(r(), 1),
  N = e(t(), 1),
  P = Object.defineProperty,
  F = (e, t) => P(e, `name`, { value: t, configurable: !0 });
function I(e) {
  let t = N.useRef({ value: e, previous: e });
  return N.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
F(I, `usePrevious`);
var L = n(),
  R = Object.defineProperty,
  z = (e, t) => R(e, `name`, { value: t, configurable: !0 }),
  B = [` `, `Enter`, `ArrowUp`, `ArrowDown`],
  V = [` `, `Enter`],
  H = `Select`,
  [U, W, ne] = f(H),
  [G, re] = a(H, [ne, h]),
  K = h(),
  [ie, q] = G(H),
  [ae, oe] = G(H);
function se(e) {
  let {
      __scopeSelect: t,
      children: n,
      open: r,
      defaultOpen: i,
      onOpenChange: a,
      value: o,
      defaultValue: s,
      onValueChange: c,
      dir: l,
      name: u,
      autoComplete: d,
      disabled: f,
      required: p,
      form: m,
      internal_do_not_use_render: h,
    } = e,
    g = K(t),
    [_, v] = N.useState(null),
    [b, C] = N.useState(null),
    [w, T] = N.useState(!1),
    ee = E(l),
    [D, te] = x({ prop: r, defaultProp: i ?? !1, onChange: a, caller: H }),
    [O, k] = x({ prop: o, defaultProp: s, onChange: c, caller: H }),
    A = N.useRef(null),
    j = N.useRef(O);
  N.useEffect(() => {
    let e = m ? _?.ownerDocument.getElementById(m) : _?.form;
    if (e instanceof HTMLFormElement) {
      let t = z(() => k(j.current), `reset`);
      return (
        e.addEventListener(`reset`, t),
        () => e.removeEventListener(`reset`, t)
      );
    }
  }, [m, _, k]);
  let M = !_ || !!m || !!_.closest(`form`),
    [P, F] = N.useState(new Set()),
    I = S(),
    R = Array.from(P)
      .map((e) => e.props.value)
      .join(`;`),
    B = N.useCallback((e) => {
      F((t) => new Set(t).add(e));
    }, []),
    V = N.useCallback((e) => {
      F((t) => {
        let n = new Set(t);
        return (n.delete(e), n);
      });
    }, []),
    W = {
      required: p,
      trigger: _,
      onTriggerChange: v,
      valueNode: b,
      onValueNodeChange: C,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: T,
      contentId: I,
      value: O,
      onValueChange: k,
      open: D,
      onOpenChange: te,
      dir: ee,
      triggerPointerDownPosRef: A,
      disabled: f,
      name: u,
      autoComplete: d,
      form: m,
      nativeOptions: P,
      nativeSelectKey: R,
      isFormControl: M,
    };
  return (0, L.jsx)(y, {
    ...g,
    children: (0, L.jsx)(ie, {
      scope: t,
      ...W,
      children: (0, L.jsx)(U.Provider, {
        scope: t,
        children: (0, L.jsx)(ae, {
          scope: t,
          onNativeOptionAdd: B,
          onNativeOptionRemove: V,
          children: Je(h) ? h(W) : n,
        }),
      }),
    }),
  });
}
z(se, `SelectProvider`);
