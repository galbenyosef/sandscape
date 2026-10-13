// assets__switch-DR7KWk3q 01 — current
// Lines 1-145 of readable/assets__switch-DR7KWk3q.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import { a as i, i as a, n as o, r as s, t as c } from "./dist-CA4uZW3H.js";
import { f as l, l as u, m as d } from "./AuthService-CQeU_0bQ.js";
import { t as f } from "./dist-DAUR33jS.js";
import { t as p } from "./dist-p2cW4AiE.js";
import { a as m, i as h, n as g, r as _, t as v } from "./dist-BWh9CVbU.js";
import {
  a as y,
  i as b,
  n as x,
  r as S,
  t as C,
} from "./Combination-CJArERGX.js";
import { t as w } from "./dist-DkIQBCKf.js";
import { t as T } from "./dist-7AcSgfoz.js";
import { r as E } from "./button-Ap3ysi5G.js";
import { t as D } from "./check-DVcwwxJi.js";
import { t as O } from "./dist-C7e-qgX5.js";
import { t as k } from "./dist-IS-98_QU.js";
import { t as A } from "./dist-C4TAXPHx.js";
import { t as j } from "./dist-D8Wfxh48.js";
import { dt as M } from "./index-BKDksszn.js";
var N = E(`ChevronUp`, [[`path`, { d: `m18 15-6-6-6 6`, key: `153udz` }]]),
  ee = e(r(), 1),
  P = e(t(), 1),
  F = Object.defineProperty,
  I = (e, t) => F(e, `name`, { value: t, configurable: !0 });
function L(e) {
  let t = P.useRef({ value: e, previous: e });
  return P.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
I(L, `usePrevious`);
var R = n(),
  z = Object.defineProperty,
  B = (e, t) => z(e, `name`, { value: t, configurable: !0 }),
  V = [` `, `Enter`, `ArrowUp`, `ArrowDown`],
  H = [` `, `Enter`],
  U = `Select`,
  [W, G, te] = f(U),
  [K, ne] = a(U, [te, h]),
  q = h(),
  [re, J] = K(U),
  [ie, ae] = K(U);
function oe(e) {
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
    g = q(t),
    [_, y] = P.useState(null),
    [b, x] = P.useState(null),
    [S, C] = P.useState(!1),
    T = O(l),
    [E, D] = w({ prop: r, defaultProp: i ?? !1, onChange: a, caller: U }),
    [A, j] = w({ prop: o, defaultProp: s, onChange: c, caller: U }),
    M = P.useRef(null),
    N = P.useRef(A);
  P.useEffect(() => {
    let e = m ? _?.ownerDocument.getElementById(m) : _?.form;
    if (e instanceof HTMLFormElement) {
      let t = B(() => j(N.current), `reset`);
      return (
        e.addEventListener(`reset`, t),
        () => e.removeEventListener(`reset`, t)
      );
    }
  }, [m, _, j]);
  let ee = !_ || !!m || !!_.closest(`form`),
    [F, I] = P.useState(new Set()),
    L = k(),
    z = Array.from(F)
      .map((e) => e.props.value)
      .join(`;`),
    V = P.useCallback((e) => {
      I((t) => new Set(t).add(e));
    }, []),
    H = P.useCallback((e) => {
      I((t) => {
        let n = new Set(t);
        return (n.delete(e), n);
      });
    }, []),
    G = {
      required: p,
      trigger: _,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: L,
      value: A,
      onValueChange: j,
      open: E,
      onOpenChange: D,
      dir: T,
      triggerPointerDownPosRef: M,
      disabled: f,
      name: u,
      autoComplete: d,
      form: m,
      nativeOptions: F,
      nativeSelectKey: z,
      isFormControl: ee,
    };
  return (0, R.jsx)(v, {
    ...g,
    children: (0, R.jsx)(re, {
      scope: t,
      ...G,
      children: (0, R.jsx)(W.Provider, {
        scope: t,
        children: (0, R.jsx)(ie, {
          scope: t,
          onNativeOptionAdd: V,
          onNativeOptionRemove: H,
          children: Je(h) ? h(G) : n,
        }),
      }),
    }),
  });
}
B(oe, `SelectProvider`);
