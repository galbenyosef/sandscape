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
var M = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  presenceAffectsLayout: i = !0,
  mode: o = `sync`,
  propagate: s = !1,
  anchorX: c = `left`,
  anchorY: u = `top`,
  root: d,
}) => {
  let [f, p] = h(s),
    m = (0, D.useMemo)(() => j(e), [e]),
    g = s && !f ? [] : m.map(A),
    _ = (0, D.useRef)(!0),
    v = (0, D.useRef)(m),
    y = a(() => new Map()),
    b = (0, D.useRef)(new Set()),
    [S, C] = (0, D.useState)(m),
    [w, T] = (0, D.useState)(m);
  x(() => {
    ((_.current = !1), (v.current = m));
    for (let e = 0; e < w.length; e++) {
      let t = A(w[e]);
      g.includes(t)
        ? (y.delete(t), b.current.delete(t))
        : y.get(t) !== !0 && y.set(t, !1);
    }
  }, [w, g.length, g.join(`-`)]);
  let O = [];
  if (m !== S) {
    let e = [...m];
    for (let t = 0; t < w.length; t++) {
      let n = w[t],
        r = A(n);
      g.includes(r) || (e.splice(t, 0, n), O.push(n));
    }
    return (o === `wait` && O.length && (e = O), T(j(e)), C(m), null);
  }
  let { forceRender: k } = (0, D.useContext)(l);
  return (0, E.jsx)(E.Fragment, {
    children: w.map((e) => {
      let a = A(e),
        l = s && !f ? !1 : m === w || g.includes(a);
      return (0, E.jsx)(
        re,
        {
          isPresent: l,
          initial: !_.current || n ? void 0 : !1,
          custom: t,
          presenceAffectsLayout: i,
          mode: o,
          root: d,
          onExitComplete: l
            ? void 0
            : () => {
                if (b.current.has(a)) return;
                if (y.has(a)) (b.current.add(a), y.set(a, !0));
                else return;
                let e = !0;
                (y.forEach((t) => {
                  t || (e = !1);
                }),
                  e && (k?.(), T(v.current), s && p?.(), r && r()));
              },
          anchorX: c,
          anchorY: u,
          children: e,
        },
        a,
      );
    }),
  });
};
function N(e) {
  let t = a(() => u(e)),
    { isStatic: n } = (0, D.useContext)(g);
  if (n) {
    let [, n] = (0, D.useState)(e);
    (0, D.useEffect)(() => t.on(`change`, n), []);
  }
  return t;
}
function ae(e, t) {
  let n = N(t()),
    r = () => n.set(t());
  return (
    r(),
    x(() => {
      let t = () => i.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return () => {
        (n.forEach((e) => e()), p(r));
      };
    }),
    n
  );
}
function oe(e) {
  ((b.current = []), e());
  let t = ae(b.current, e);
  return ((b.current = void 0), t);
}
function P(e, t, n, r) {
  if (typeof e == `function`) return oe(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`)
    return ce(e, t, n, r);
  let i = typeof t == `function` ? t : S(t, n, r),
    a = Array.isArray(e) ? se(e, i) : se([e], ([e]) => i(e)),
    o = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    o &&
      !o.isTransformed &&
      typeof t != `function` &&
      Array.isArray(n) &&
      r?.clamp !== !1 &&
      (a.accelerate = {
        ...o,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...(r?.ease ? { ease: r.ease } : {}),
      }),
    a
  );
}
function se(e, t) {
  let n = a(() => []);
  return ae(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function ce(e, t, n, r) {
  let i = a(() => Object.keys(n)),
    o = a(() => ({}));
  for (let a of i) o[a] = P(e, t, n[a], r);
  return o;
}
function le(e, t = {}) {
  let { isStatic: n } = (0, D.useContext)(g),
    r = () => (y(e) ? e.get() : e);
  if (n) return P(r);
  let i = N(r());
  return (
    (0, D.useInsertionEffect)(() => C(i, e, t), [i, JSON.stringify(t)]),
    i
  );
}
function F(e, t = {}) {
  return le(e, { type: `spring`, ...t });
}
function I() {
  !m.current && d();
  let [e] = (0, D.useState)(v.current);
  return e;
}
var L = e(r()),
  R = `tour:on-enter`,
  z = `tour:step-entered`,
  B = `tour:wait-skipped`,
  ue = new Set([
    `chat-draft`,
    `select-node`,
    `open-editor`,
    `show-flow`,
    `show-game`,
    `open-editor-menu`,
  ]);
function de(e) {
  if (!e || typeof e != `object`) return null;
  let t = e;
  return typeof t.kind != `string` || !ue.has(t.kind)
    ? null
    : {
        kind: t.kind,
        arg: typeof t.arg == `string` ? t.arg : void 0,
        tab: typeof t.tab == `string` ? t.tab : void 0,
        assetId: typeof t.assetId == `string` ? t.assetId : void 0,
      };
}
var fe = 0.7,
  pe = 4e3,
  V = { stiffness: 320, damping: 34, mass: 0.9 },
  H = 2147483e3;
function me(e, t) {
  let n = e.advance;
  return (n.type === `event` || n.type === `wait`) && n.event === t;
}
function he(e) {
  return e.allowInteraction === void 0
    ? e.advance.type !== `next`
    : e.allowInteraction;
}
function ge(e, t) {
  let n = t,
    r = e.steps[t]?.resumeAt;
  if (r) {
    let t = e.steps.findIndex((e) => e.id === r);
    t >= 0 && (n = t);
  }
  for (; n > 0 && e.steps[n]?.advance.type === `wait`;) n--;
  return n;
}
function _e(e, t) {
  let n = Math.max(0, e.steps.length - 1);
  return t
    ? t.completedAt == null
      ? t.skippedAt == null
        ? { stepIndex: ge(e, U(t.stepIndex, 0, n)), status: `running` }
        : { stepIndex: U(t.stepIndex, 0, n), status: `skipped` }
      : { stepIndex: U(t.stepIndex, 0, n), status: `completed` }
    : { stepIndex: 0, status: `running` };
}
function U(e, t, n) {
  return Number.isFinite(e) ? Math.min(n, Math.max(t, Math.trunc(e))) : t;
}
function ve(e, t) {
  let n = t.now ?? Date.now,
    r = Math.max(0, e.steps.length - 1),
    i = new Set(),
    a = _e(e, t.storage.read(e.slug)),
    o = () => {
      for (let e of i) e(a);
    },
    s = (n, r) => {
      ((a = n), t.storage.write(e.slug, r), o());
    },
    c = () => {
      if (a.stepIndex >= r) {
        s(
          { stepIndex: r, status: `completed` },
          { stepIndex: r, completedAt: n() },
        );
        return;
      }
      let e = a.stepIndex + 1;
      s({ stepIndex: e, status: `running` }, { stepIndex: e });
    };
  return {
    getState: () => a,
    currentStep: () =>
      a.status === `running` ? (e.steps[a.stepIndex] ?? null) : null,
    subscribe(e) {
      return (
        i.add(e),
        () => {
          i.delete(e);
        }
      );
    },
    next() {
      a.status === `running` && c();
    },
    prev() {
      if (a.status !== `running` || a.stepIndex <= 0) return;
      let e = a.stepIndex - 1;
      s({ stepIndex: e, status: `running` }, { stepIndex: e });
    },
    goto(e) {
      let t = U(e, 0, r);
      s({ stepIndex: t, status: `running` }, { stepIndex: t });
    },
    skip() {
      a.status === `running` &&
        s(
          { stepIndex: a.stepIndex, status: `skipped` },
          { stepIndex: a.stepIndex, skippedAt: n() },
        );
    },
    complete() {
      a.status === `running` &&
        s(
          { stepIndex: a.stepIndex, status: `completed` },
          { stepIndex: a.stepIndex, completedAt: n() },
        );
    },
    handleEvent(t) {
      if (a.status !== `running`) return;
      let n = e.steps[a.stepIndex];
      n && me(n, t) && c();
    },
  };
}
var W = (e) => `sandscape.tour.${e}`,
  G = (e) => `sandscape.tour-history.${e}`;
function K(e) {
  try {
    let t = localStorage.getItem(G(e));
    if (!t) return null;
    let n = JSON.parse(t);
    if (!n || typeof n != `object`) return null;
    let {
      firstTerminalAt: r,
      lastTerminalAt: i,
      terminalCount: a,
      lastOutcome: o,
    } = n;
    return typeof r != `number` ||
      typeof i != `number` ||
      typeof a != `number` ||
      a < 1 ||
      (o !== `completed` && o !== `skipped`)
      ? null
      : {
          firstTerminalAt: r,
          lastTerminalAt: i,
          terminalCount: a,
          lastOutcome: o,
        };
  } catch {
    return null;
  }
}
function ye(e, t, n) {
  try {
    let r = K(e),
      i = {
        firstTerminalAt: r?.firstTerminalAt ?? n,
        lastTerminalAt: n,
        terminalCount: (r?.terminalCount ?? 0) + 1,
        lastOutcome: t,
      };
    localStorage.setItem(G(e), JSON.stringify(i));
  } catch {}
}
function be() {
  return {
    read(e) {
      try {
        let t = localStorage.getItem(W(e));
        if (!t) return null;
        let n = JSON.parse(t);
        if (!n || typeof n != `object`) return null;
        let r = n;
        if (typeof r.stepIndex != `number`) return null;
        let i = { stepIndex: r.stepIndex };
        return (
          typeof r.completedAt == `number` && (i.completedAt = r.completedAt),
          typeof r.skippedAt == `number` && (i.skippedAt = r.skippedAt),
          i
        );
      } catch {
        return null;
      }
    },
    write(e, t) {
      try {
        localStorage.setItem(W(e), JSON.stringify(t));
      } catch {}
      t.completedAt == null
        ? t.skippedAt != null && ye(e, `skipped`, t.skippedAt)
        : ye(e, `completed`, t.completedAt);
    },
  };
}
function xe(e) {
  return e != null && (e.completedAt != null || e.skippedAt != null);
}
function Se(e) {
  return K(e) != null;
}
function Ce(e) {
  let t = be();
  return xe(t.read(e)) ? (t.write(e, { stepIndex: 0 }), !0) : !1;
}
var q = `off`,
  J = new Set();
function we(e) {
  if (q !== e) {
    q = e;
    for (let e of J) e();
  }
}
function Te() {
  return q === `running`;
}
function Ee() {
  return q === `ended`;
}
function De(e) {
  return (
    J.add(e),
    () => {
      J.delete(e);
    }
  );
}
function Oe() {
  return (0, D.useSyncExternalStore)(De, Te, () => !1);
}
function ke() {
  return (0, D.useSyncExternalStore)(De, Ee, () => !1);
}
function Ae(e) {
  let t = null;
  return function (n, r, i) {
    if (!n || !i) {
      t = null;
      return;
    }
    let a = `${r}:${i.id}`;
    t !== a && ((t = a), i.onEnter && e(i.onEnter));
  };
}
var Y = `sandscape:tour-event`;
function X(e, t) {
  typeof window > `u` ||
    window.dispatchEvent(
      new CustomEvent(Y, { detail: { name: e, detail: t } }),
    );
}
function je(e) {
  if (typeof window > `u`) return () => {};
  let t = (t) => {
    let n = t;
    !n.detail ||
      typeof n.detail.name != `string` ||
      e(n.detail.name, n.detail.detail);
  };
  return (
    window.addEventListener(Y, t),
    () => window.removeEventListener(Y, t)
  );
}
function Me(e) {
  return { "data-tour": e };
}
function Ne(e) {
  let t = document.querySelectorAll(`[data-tour]`);
  for (let n of t) if (n.getAttribute(`data-tour`) === e) return n;
  return null;
}
function Pe(e) {
  let t = e.getBoundingClientRect();
  return { top: t.top, left: t.left, width: t.width, height: t.height };
}
function Fe(e, t) {
  return e === t
    ? !0
    : !e || !t
      ? !1
      : Math.abs(e.top - t.top) < 0.5 &&
        Math.abs(e.left - t.left) < 0.5 &&
        Math.abs(e.width - t.width) < 0.5 &&
        Math.abs(e.height - t.height) < 0.5;
}
function Ie(e, t, n = pe) {
  let [r, i] = (0, D.useState)({ rect: null, status: `idle` });
  return (
    (0, D.useEffect)(() => {
      if (!t || e === null) {
        i({ rect: null, status: `idle` });
        return;
      }
      let r = 0,
        a = null,
        o = `idle`,
        s = !1,
        c = performance.now(),
        l = 0,
        u = () => {
          let t = Ne(e);
          if (t) {
            let e = Pe(t),
              n = performance.now();
            (o !== `found` || !Fe(e, a) || n - l >= 250) &&
              ((a = e),
              (o = `found`),
              (l = n),
              i({ rect: e, status: `found` }));
          } else {
            let t = performance.now() - c > n ? `missing` : `searching`;
            (t !== o && ((a = null), (o = t), i({ rect: null, status: t })),
              t === `missing` &&
                !s &&
                ((s = !0),
                console.error(
                  `[tour] anchor "${e}" not found after ${n}ms — step cannot spotlight it`,
                )));
          }
          r = requestAnimationFrame(u);
        };
      return ((r = requestAnimationFrame(u)), () => cancelAnimationFrame(r));
    }, [e, t, n]),
    r
  );
}
function Le(e, t, n, r, i) {
  if (typeof document > `u`) return;
  let a = document.elementsFromPoint(t, n).find((t) => !e || !e.contains(t));
  for (let e = a; e && e !== document.body; e = e.parentElement) {
    let t = getComputedStyle(e),
      n = /(auto|scroll)/.test(t.overflowY) && e.scrollHeight > e.clientHeight,
      a = /(auto|scroll)/.test(t.overflowX) && e.scrollWidth > e.clientWidth;
    if ((n && i !== 0) || (a && r !== 0)) {
      e.scrollBy({ top: n ? i : 0, left: a ? r : 0 });
      return;
    }
  }
}
function Re() {
  return typeof window > `u`
    ? { cx: 0, cy: 0 }
    : { cx: window.innerWidth / 2, cy: window.innerHeight / 2 };
}
function ze({ cutout: e, radius: t, allowInteraction: n }) {
  let r = I(),
    i = (0, D.useRef)(null),
    a = (0, D.useRef)(null),
    o = F(0, V),
    s = F(0, V),
    c = F(0, V),
    l = F(0, V);
  (0, D.useEffect)(() => {
    let { cx: t, cy: n } = Re(),
      a = e ?? { left: t, top: n, width: 0, height: 0 },
      u = i.current === null,
      d = (e, t) => {
        r || u ? e.jump(t) : e.set(t);
      };
    (d(o, a.left), d(s, a.top), d(c, a.width), d(l, a.height), (i.current = e));
  }, [e, r, o, s, c, l]);
  let u = P(() => o.get() + c.get()),
    d = P(() => s.get() + l.get()),
    f = e === null || !n;
  return (0, E.jsxs)(`div`, {
    ref: a,
    className: `fixed inset-0`,
    style: { zIndex: H, pointerEvents: `none` },
    children: [
      (0, E.jsx)(_.div, {
        style: {
          position: `absolute`,
          top: 0,
          left: 0,
          x: o,
          y: s,
          width: c,
          height: l,
          borderRadius: t,
          boxShadow: `0 0 0 9999px rgba(0, 0, 0, ${fe})`,
          pointerEvents: `none`,
        },
      }),
      f
        ? (0, E.jsx)(`div`, {
            style: { position: `absolute`, inset: 0, pointerEvents: `auto` },
            onWheel: (t) => {
              !e ||
                t.clientX < e.left ||
                t.clientX > e.left + e.width ||
                t.clientY < e.top ||
                t.clientY > e.top + e.height ||
                Le(a.current, t.clientX, t.clientY, t.deltaX, t.deltaY);
            },
          })
        : (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(_.div, {
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  height: s,
                  pointerEvents: `auto`,
                },
              }),
              (0, E.jsx)(_.div, {
                style: {
                  position: `absolute`,
                  left: 0,
                  right: 0,
                  top: d,
                  bottom: 0,
                  pointerEvents: `auto`,
                },
              }),
              (0, E.jsx)(_.div, {
                style: {
                  position: `absolute`,
                  top: s,
                  left: 0,
                  width: o,
                  height: l,
                  pointerEvents: `auto`,
                },
              }),
              (0, E.jsx)(_.div, {
                style: {
                  position: `absolute`,
                  top: s,
                  left: u,
                  right: 0,
                  height: l,
                  pointerEvents: `auto`,
                },
              }),
            ],
          }),
    ],
  });
}
var Z = 12;
function Be(e, t, n, r) {
  switch (e) {
    case `bottom`:
      return t.top + t.height + 16 + r.height + Z <= n.height;
    case `top`:
      return t.top - 16 - r.height - Z >= 0;
    case `right`:
      return t.left + t.width + 16 + r.width + Z <= n.width;
    case `left`:
      return t.left - 16 - r.width - Z >= 0;
  }
}
function Q(e, t, n) {
  return n < t ? t : Math.min(n, Math.max(t, e));
}
function Ve(e, t, n, r = `auto`) {
  if (!e || r === `center`)
    return {
      top: Q((t.height - n.height) / 2, Z, t.height - n.height - Z),
      left: Q((t.width - n.width) / 2, Z, t.width - n.width - Z),
      placement: `center`,
    };
  let i = [`bottom`, `top`, `right`, `left`],
    a =
      (r === `auto` ? i : [r, ...i.filter((e) => e !== r)]).find((r) =>
        Be(r, e, t, n),
      ) ?? `bottom`,
    o = e.left + e.width / 2,
    s = e.top + e.height / 2,
    c = t.width - n.width - Z,
    l = t.height - n.height - Z,
    u,
    d;
  switch (a) {
    case `bottom`:
      ((u = e.top + e.height + 16), (d = o - n.width / 2));
      break;
    case `top`:
      ((u = e.top - 16 - n.height), (d = o - n.width / 2));
      break;
    case `right`:
      ((d = e.left + e.width + 16), (u = s - n.height / 2));
      break;
    case `left`:
      ((d = e.left - 16 - n.width), (u = s - n.height / 2));
      break;
  }
  return { top: Q(u, Z, l), left: Q(d, Z, c), placement: a };
}
function He(e, t, n) {
  return !!e && t !== n;
}
function $(e) {
  return /\.(webp|png|jpe?g|avif)(\?|$)/i.test(e ?? ``);
}
function Ue({
  step: e,
  cutout: t,
  stepIndex: n,
  stepCount: r,
  showNext: i,
  nextLabel: a,
  onNext: o,
  onSkip: s,
  ctaSlot: c,
}) {
  let l = (0, D.useRef)(null),
    u = I(),
    [d, f] = (0, D.useState)(null),
    [p, m] = (0, D.useState)(null),
    { mediaUrl: h, line1: g, line2: v } = e.bubble,
    y = He(h, p, e.id);
  return (
    (0, D.useLayoutEffect)(() => {
      let n = l.current;
      if (!n || typeof window > `u`) return;
      let r = { width: n.offsetWidth, height: n.offsetHeight },
        i = { width: window.innerWidth, height: window.innerHeight };
      f(Ve(t, i, r, e.placement ?? `auto`));
    }, [
      t,
      e.placement,
      e.id,
      e.bubble.line1,
      e.bubble.line2,
      e.bubble.mediaUrl,
      y,
    ]),
    (0, E.jsxs)(_.div, {
      ref: l,
      initial: { opacity: 0, y: 8, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 6, scale: 0.98 },
      transition: u
        ? { duration: 0 }
        : { type: `spring`, stiffness: 420, damping: 32, delay: 0.18 },
      className: `fixed w-80 max-w-[calc(100vw-24px)] overflow-hidden rounded-xl border border-border bg-card text-foreground shadow-2xl`,
      style: {
        top: d?.top ?? 0,
        left: d?.left ?? 0,
        zIndex: H + 1,
        visibility: d ? `visible` : `hidden`,
      },
      children: [
        y &&
          $(h) &&
          (0, E.jsx)(`img`, {
            src: h,
            alt: ``,
            onError: () => m(e.id),
            className: `block h-40 w-full bg-secondary object-cover`,
          }),
        y &&
          !$(h) &&
          (0, E.jsx)(`video`, {
            src: h,
            muted: !0,
            playsInline: !0,
            loop: !0,
            autoPlay: !0,
            onError: () => m(e.id),
            className: `block h-40 w-full bg-secondary object-cover`,
          }),
        (0, E.jsxs)(`div`, {
          className: `flex flex-col gap-3 p-4`,
          children: [
            (0, E.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                (0, E.jsx)(`p`, {
                  className: `text-sm font-medium leading-snug`,
                  children: g,
                }),
                v &&
                  (0, E.jsx)(`p`, {
                    className: `text-xs leading-snug text-muted-foreground`,
                    children: v,
                  }),
              ],
            }),
            (0, E.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, E.jsx)(`div`, {
                  className: `h-1 w-16 shrink-0 overflow-hidden rounded-full bg-foreground/20`,
                  role: `progressbar`,
                  "aria-valuenow": n + 1,
                  "aria-valuemin": 1,
                  "aria-valuemax": r,
                  "aria-label": `Step ${n + 1} of ${r}`,
                  children: (0, E.jsx)(`div`, {
                    className: `h-full rounded-full bg-primary transition-[width] duration-300`,
                    style: { width: `${((n + 1) / r) * 100}%` },
                  }),
                }),
                (0, E.jsxs)(`div`, {
                  className: `flex shrink-0 items-center gap-3`,
                  children: [
                    s &&
                      (0, E.jsx)(`button`, {
                        type: `button`,
                        onClick: s,
                        className: `text-xs text-muted-foreground transition-colors hover:text-foreground`,
                        children: `Skip`,
                      }),
                    c ||
                      (i &&
                        (0, E.jsx)(`button`, {
                          type: `button`,
                          onClick: o,
                          className: `rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90`,
                          children: a,
                        })),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var We = (0, D.createContext)(null);
function Ge(e, t) {
  return {
    top: e.top - t,
    left: e.left - t,
    width: e.width + t * 2,
    height: e.height + t * 2,
  };
}
function Ke({ pack: e, children: t, renderCta: n, renderEnded: r }) {
  let i = (0, D.useRef)(null);
  i.current ||= ve(e, { storage: be() });
  let a = i.current,
    [o, s] = (0, D.useState)(() => a.getState());
  ((0, D.useEffect)(() => a.subscribe(s), [a]),
    (0, D.useEffect)(() => je((e) => a.handleEvent(e)), [a]));
  let c = o.status === `running`,
    l = c ? (e.steps[o.stepIndex] ?? null) : null;
  (0, D.useEffect)(() => (we(c ? `running` : `ended`), () => we(`off`)), [c]);
  let u = (0, D.useRef)(null);
  ((u.current ||= Ae((e) => X(R, e))),
    (0, D.useEffect)(() => {
      (c && l && X(z, l.id), u.current?.(c, o.stepIndex, l));
    }, [c, l, o.stepIndex]));
  let d = e.skippable === !0;
  (0, D.useEffect)(() => {
    if (!c || !d) return;
    let e = (e) => {
      e.key === `Escape` && a.skip();
    };
    return (
      window.addEventListener(`keydown`, e),
      () => window.removeEventListener(`keydown`, e)
    );
  }, [c, d, a]);
  let f = l?.target ?? null,
    p = Ie(f, c),
    m = l?.spotlightPadding ?? 8,
    h = l?.spotlightRadius ?? 12,
    g = l && f && p.status === `found` && p.rect ? Ge(p.rect, m) : null,
    _ = l ? he(l) : !1,
    v = !!(l && f && p.status === `missing`),
    y =
      l != null &&
      (l.advance.type === `next` ||
        l.advance.type === `wait` ||
        l.showNextFallback === !0 ||
        (v && !0)),
    b = l?.cta && n ? n({ step: l, complete: () => a.complete() }) : null,
    x = (0, D.useMemo)(
      () => ({
        state: o,
        step: l,
        stepIndex: o.stepIndex,
        stepCount: e.steps.length,
        next: () => {
          if (l?.advance.type === `wait`) {
            let e = a.getState().stepIndex;
            if ((X(B), a.getState().stepIndex !== e)) return;
          }
          a.next();
        },
        prev: () => a.prev(),
        skip: () => a.skip(),
        goto: (e) => a.goto(e),
      }),
      [o, l, e.steps.length, a],
    ),
    S =
      c && l && typeof document < `u`
        ? (0, L.createPortal)(
            (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(ze, { cutout: g, radius: h, allowInteraction: _ }),
                (0, E.jsx)(M, {
                  mode: `wait`,
                  children: (0, E.jsx)(
                    Ue,
                    {
                      step: l,
                      cutout: g,
                      stepIndex: o.stepIndex,
                      stepCount: e.steps.length,
                      showNext: y,
                      nextLabel:
                        o.stepIndex >= e.steps.length - 1 ? `Done` : `Next`,
                      onNext: () => a.next(),
                      onSkip: d ? () => a.skip() : void 0,
                      ctaSlot: b,
                    },
                    l.id,
                  ),
                }),
                !1,
              ],
            }),
            document.body,
          )
        : null,
    C =
      !c && r && typeof document < `u`
        ? (0, L.createPortal)(
            (0, E.jsx)(`div`, {
              style: { zIndex: H + 1 },
              className: `fixed bottom-3 left-3 w-[22rem] max-w-[calc(100vw-24px)] rounded-xl border border-primary/40 bg-card px-4 py-3 text-foreground shadow-2xl`,
              children: r(),
            }),
            document.body,
          )
        : null;
  return (0, E.jsxs)(We.Provider, { value: x, children: [t, S, C] });
}
export {
  Ee as a,
  Se as c,
  z as d,
  B as f,
  M as g,
  N as h,
  je as i,
  Ce as l,
  I as m,
  Me as n,
  Oe as o,
  de as p,
  X as r,
  ke as s,
  Ke as t,
  R as u,
};
