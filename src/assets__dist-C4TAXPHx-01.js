// assets__dist-C4TAXPHx 01 — array
// Lines 1-31 of readable/assets__dist-C4TAXPHx.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t } from "./jsx-runtime-BtyjnKZj.js";
import { n } from "./dist-CA4uZW3H.js";
var r = e(t(), 1),
  i = Object.defineProperty,
  a = (e, t) => i(e, `name`, { value: t, configurable: !0 });
function o(e) {
  let [t, i] = r.useState(void 0);
  return (
    n(() => {
      if (e) {
        i({ width: e.offsetWidth, height: e.offsetHeight });
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return;
          let n = t[0],
            r,
            a;
          if (`borderBoxSize` in n) {
            let e = n.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            ((r = t.inlineSize), (a = t.blockSize));
          } else ((r = e.offsetWidth), (a = e.offsetHeight));
          i({ width: r, height: a });
        });
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e));
      } else i(void 0);
    }, [e]),
    t
  );
}
a(o, `useSize`);
