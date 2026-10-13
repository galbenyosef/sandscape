// assets__tour-D03BMTEP 01 — current
// Lines 1-290 of readable/assets__tour-D03BMTEP.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import {
  A as i,
  B as a,
  R as o,
  S as s,
  T as c,
  V as l,
  b as u,
  c as d,
  h as f,
  k as p,
  l as m,
  n as h,
  r as g,
  t as _,
  u as v,
  v as y,
  y as b,
  z as x,
} from "./proxy-gbdormya.js";
function S(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = c(i, a, o);
  return t ? s(r) : s;
}
function C(e, t, n = {}) {
  let r = e.get(),
    a = null,
    o = r,
    c,
    l = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
    u = () => {
      ((a &&= (a.stop(), null)), (e.animation = void 0));
    },
    d = () => {
      let t = T(e.get()),
        r = T(o);
      if (t === r) {
        u();
        return;
      }
      let i = a ? a.getGeneratorVelocity() : e.getVelocity();
      (u(),
        (a = new s({
          keyframes: [t, r],
          velocity: i,
          type: `spring`,
          restDelta: 0.001,
          restSpeed: 0.01,
          ...n,
          onUpdate: c,
        })));
    },
    f = () => {
      (d(),
        (e.animation = a ?? void 0),
        e.events.animationStart?.notify(),
        a?.then(() => {
          ((e.animation = void 0), e.events.animationComplete?.notify());
        }));
    };
  if (
    (e.attach((e, t) => {
      ((o = e), (c = (e) => t(w(e, l))), i.postRender(f));
    }, u),
    y(t))
  ) {
    let r = n.skipInitialAnimation === !0,
      i = t.on(`change`, (t) => {
        r ? ((r = !1), e.jump(w(t, l), !1)) : e.set(w(t, l));
      }),
      a = e.on(`destroy`, i);
    return () => {
      (i(), a());
    };
  }
  return u;
}
function w(e, t) {
  return t ? e + t : e;
}
function T(e) {
  return typeof e == `number` ? e : parseFloat(e);
}
var E = n(),
  D = e(t(), 1);
function O(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function k(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = O(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : O(e[t], null);
        }
      };
  };
}
function ee(...e) {
  return D.useCallback(k(...e), e);
}
var te = class extends D.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (f(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      let e = t.offsetParent,
        n = (f(e) && e.offsetWidth) || 0,
        r = (f(e) && e.offsetHeight) || 0,
        i = getComputedStyle(t),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(i.height)),
        (a.width = parseFloat(i.width)),
        (a.top = t.offsetTop),
        (a.left = t.offsetLeft),
        (a.right = n - a.width - a.left),
        (a.bottom = r - a.height - a.top),
        (a.direction = i.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function ne({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: a,
}) {
  let o = (0, D.useId)(),
    s = (0, D.useRef)(null),
    c = (0, D.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: `ltr`,
    }),
    { nonce: l } = (0, D.useContext)(g),
    u = ee(s, e.props?.ref ?? e?.ref);
  return (
    (0, D.useInsertionEffect)(() => {
      let {
        width: e,
        height: u,
        top: d,
        left: f,
        right: p,
        bottom: m,
        direction: h,
      } = c.current;
      if (t || a === !1 || !s.current || !e || !u) return;
      let g = h === `rtl`,
        _ =
          n === `left`
            ? g
              ? `right: ${p}`
              : `left: ${f}`
            : g
              ? `left: ${f}`
              : `right: ${p}`,
        v = r === `bottom` ? `bottom: ${m}` : `top: ${d}`;
      s.current.dataset.motionPopId = o;
      let y = document.createElement(`style`);
      l && (y.nonce = l);
      let b = i ?? document.head;
      return (
        b.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),
        () => {
          (s.current?.removeAttribute(`data-motion-pop-id`),
            b.contains(y) && b.removeChild(y));
        }
      );
    }, [t]),
    (0, E.jsx)(te, {
      isPresent: t,
      childRef: s,
      sizeRef: c,
      pop: a,
      children: a === !1 ? e : D.cloneElement(e, { ref: u }),
    })
  );
}
var re = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: c,
  anchorX: l,
  anchorY: u,
  root: d,
}) => {
  let f = a(ie),
    p = (0, D.useId)(),
    m = (0, D.useRef)(n),
    h = (0, D.useRef)(r);
  x(() => {
    ((m.current = n), (h.current = r));
  });
  let g = !0,
    _ = (0, D.useMemo)(
      () => (
        (g = !1),
        {
          id: p,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (e) => {
            f.set(e, !0);
            for (let e of f.values()) if (!e) return;
            r && r();
          },
          register: (e) => (
            f.set(e, !1),
            () => {
              (f.delete(e), !m.current && !f.size && h.current?.());
            }
          ),
        }
      ),
      [n, f, r],
    );
  return (
    s && g && (_ = { ..._ }),
    (0, D.useMemo)(() => {
      f.forEach((e, t) => f.set(t, !1));
    }, [n]),
    D.useEffect(() => {
      !n && !f.size && r && r();
    }, [n]),
    (e = (0, E.jsx)(ne, {
      pop: c === `popLayout`,
      isPresent: n,
      anchorX: l,
      anchorY: u,
      root: d,
      children: e,
    })),
    (0, E.jsx)(o.Provider, { value: _, children: e })
  );
};
function ie() {
  return new Map();
}
var A = (e) => e.key || ``;
function j(e) {
  let t = [];
  return (
    D.Children.forEach(e, (e) => {
      (0, D.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
