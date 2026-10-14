// dist-IS-98_QU 01 — configurable
// Lines 1-18 of readable/assets/dist-IS-98_QU.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t } from "./jsx-runtime-BtyjnKZj.js";
import { n } from "./dist-CA4uZW3H.js";
var r = e(t(), 1),
  i = Object.defineProperty,
  a = (e, t) => i(e, `name`, { value: t, configurable: !0 }),
  o = r.useId || (() => void 0),
  s = 0;
function c(e) {
  let [t, i] = r.useState(o());
  return (
    n(() => {
      e || i((e) => e ?? String(s++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
a(c, `useId`);
