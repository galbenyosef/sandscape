// dnd-DMxeXGsh 01 — key
// Lines 1-201 of readable/assets/dnd-DMxeXGsh.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import { r as i } from "./button-Ap3ysi5G.js";
var a = i(`ChevronRight`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  o = i(`Circle`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }]]),
  s = i(`Globe`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [
      `path`,
      { d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`, key: `13o1zl` },
    ],
    [`path`, { d: `M2 12h20`, key: `9i4pu4` }],
  ]),
  c = i(`Moon`, [
    [`path`, { d: `M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`, key: `a7tn18` }],
  ]),
  l = i(`Paintbrush`, [
    [`path`, { d: `m14.622 17.897-10.68-2.913`, key: `vj2p1u` }],
    [
      `path`,
      {
        d: `M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z`,
        key: `18tc5c`,
      },
    ],
    [
      `path`,
      {
        d: `M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15`,
        key: `ytzfxy`,
      },
    ],
  ]),
  u = i(`Palette`, [
    [
      `circle`,
      { cx: `13.5`, cy: `6.5`, r: `.5`, fill: `currentColor`, key: `1okk4w` },
    ],
    [
      `circle`,
      { cx: `17.5`, cy: `10.5`, r: `.5`, fill: `currentColor`, key: `f64h9f` },
    ],
    [
      `circle`,
      { cx: `8.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `fotxhn` },
    ],
    [
      `circle`,
      { cx: `6.5`, cy: `12.5`, r: `.5`, fill: `currentColor`, key: `qy21gx` },
    ],
    [
      `path`,
      {
        d: `M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z`,
        key: `12rzf8`,
      },
    ],
  ]),
  d = i(`Sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]),
  f = e(t(), 1),
  p = (e) => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let i = typeof e == `function` ? e(t) : e;
        if (!Object.is(i, t)) {
          let e = t;
          ((t =
            (r ?? (typeof i != `object` || !i)) ? i : Object.assign({}, t, i)),
            n.forEach((n) => n(t, e)));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => o,
        subscribe: (e) => (n.add(e), () => n.delete(e)),
      },
      o = (t = e(r, i, a));
    return a;
  },
  m = (e) => (e ? p(e) : p),
  h = (e) => e;
function g(e, t = h) {
  let n = f.useSyncExternalStore(
    e.subscribe,
    f.useCallback(() => t(e.getState()), [e, t]),
    f.useCallback(() => t(e.getInitialState()), [e, t]),
  );
  return (f.useDebugValue(n), n);
}
var _ = (e) => {
    let t = m(e),
      n = (e) => g(t, e);
    return (Object.assign(n, t), n);
  },
  v = (e) => (e ? _(e) : _),
  y = {
    active: !1,
    kind: null,
    payload: null,
    pointer: { x: 0, y: 0 },
    hoveredZoneId: null,
    canDrop: !1,
  },
  b = v((e) => ({
    ...y,
    begin: (t, n, r, i) =>
      e({
        active: !0,
        kind: t,
        payload: n,
        pointer: { x: r, y: i },
        hoveredZoneId: null,
        canDrop: !1,
      }),
    setPointer: (t, n) => e({ pointer: { x: t, y: n } }),
    setHover: (t, n) => e({ hoveredZoneId: t, canDrop: n }),
    clear: () => e(y),
  })),
  x = e(r()),
  S = n(),
  C = 14;
function w() {
  let e = b((e) => e.active),
    t = b((e) => e.pointer),
    n = k();
  return e
    ? (0, x.createPortal)(
        (0, S.jsx)(`div`, {
          className: `fixed left-0 top-0 z-[100] pointer-events-none`,
          style: {
            transform: `translate3d(${t.x + C}px, ${t.y + C}px, 0) scale(1.02)`,
            opacity: 0.92,
            filter: `drop-shadow(0 8px 20px rgba(0,0,0,0.55))`,
            willChange: `transform`,
          },
          children: n.current,
        }),
        document.body,
      )
    : null;
}
var T = (0, f.createContext)(null),
  E = 36,
  D = 18,
  O = (0, f.createContext)(null);
function k() {
  let e = (0, f.useContext)(O);
  if (!e) throw Error(`useDragGhost must be used within <DragProvider>`);
  return e;
}
function A() {
  let e = (0, f.useContext)(T);
  if (!e) throw Error(`useDragContext must be used within <DragProvider>`);
  return e;
}
function j(e, t) {
  let n = e;
  for (; n && n !== document.body && n instanceof HTMLElement;) {
    let e = getComputedStyle(n),
      r = t === `y` ? e.overflowY : e.overflowX,
      i = r === `auto` || r === `scroll`,
      a =
        t === `y`
          ? n.scrollHeight > n.clientHeight
          : n.scrollWidth > n.clientWidth;
    if (i && a) return n;
    n = n.parentElement;
  }
  let r = document.scrollingElement;
  return r &&
    (t === `y`
      ? r.scrollHeight > r.clientHeight
      : r.scrollWidth > r.clientWidth)
    ? r
    : null;
}
function M(e) {
  if (e === document.scrollingElement || e === document.documentElement)
    return {
      top: 0,
      bottom: window.innerHeight,
      left: 0,
      right: window.innerWidth,
    };
  let t = e.getBoundingClientRect();
  return { top: t.top, bottom: t.bottom, left: t.left, right: t.right };
}
