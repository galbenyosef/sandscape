// avatar-ixs41cq5 01 — jsx
// Lines 1-146 of readable/assets/avatar-ixs41cq5.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { i as r, n as i, r as a } from "./dist-CA4uZW3H.js";
import { l as o } from "./AuthService-CQeU_0bQ.js";
import { t as s } from "./dist-p2cW4AiE.js";
var c = e(t(), 1),
  l = n(),
  u = Object.defineProperty,
  d = (e, t) => u(e, `name`, { value: t, configurable: !0 }),
  f = `Avatar`,
  [p, m] = r(f),
  h = [0, () => void 0],
  [g, _] = p(f),
  v = c.forwardRef(
    d(function (e, t) {
      let { __scopeAvatar: n, ...r } = e,
        [i, a] = c.useState(`idle`),
        [o, u] = T();
      return (0, l.jsx)(g, {
        scope: n,
        imageLoadingStatus: i,
        setImageLoadingStatus: a,
        imageCount: o,
        setImageCount: u,
        children: (0, l.jsx)(s.span, { ...r, ref: t }),
      });
    }, `Avatar`),
  ),
  y = `AvatarImage`,
  b = c.forwardRef(
    d(function (e, t) {
      let { __scopeAvatar: n, src: r, onLoadingStatusChange: o, ...u } = e,
        d = _(y, n);
      d.setImageCount;
      let f = C(r, {
          referrerPolicy: u.referrerPolicy,
          crossOrigin: u.crossOrigin,
          loadingStatus: d.imageLoadingStatus,
          setLoadingStatus: d.setImageLoadingStatus,
        }),
        p = a((e) => {
          o?.(e);
        }),
        m = c.useRef(f);
      return (
        i(() => {
          let e = m.current;
          ((m.current = f), f !== e && p(f));
        }, [f, p]),
        f === `loaded` ? (0, l.jsx)(s.img, { ...u, ref: t, src: r }) : null
      );
    }, `AvatarImage`),
  ),
  x = `AvatarFallback`,
  S = c.forwardRef(
    d(function (e, t) {
      let { __scopeAvatar: n, delayMs: r, ...i } = e,
        a = _(x, n),
        [o, u] = c.useState(r === void 0);
      return (
        c.useEffect(() => {
          if (r !== void 0) {
            let e = window.setTimeout(() => u(!0), r);
            return () => window.clearTimeout(e);
          }
        }, [r]),
        o && a.imageLoadingStatus !== `loaded`
          ? (0, l.jsx)(s.span, { ...i, ref: t })
          : null
      );
    }, `AvatarFallback`),
  );
function C(
  e,
  { loadingStatus: t, setLoadingStatus: n, referrerPolicy: r, crossOrigin: a },
) {
  return (
    i(() => {
      if (!e) {
        n(`error`);
        return;
      }
      let t = new window.Image(),
        i = d((e) => {
          let t = e.currentTarget;
          n(w(t));
        }, `handleLoad`),
        o = d(() => n(`error`), `handleError`);
      return (
        t.addEventListener(`load`, i),
        t.addEventListener(`error`, o),
        r && (t.referrerPolicy = r),
        (t.crossOrigin = a ?? null),
        (t.src = e),
        n(w(t)),
        () => {
          (t.removeEventListener(`load`, i),
            t.removeEventListener(`error`, o),
            n(`idle`));
        }
      );
    }, [e, a, r, n]),
    t
  );
}
d(C, `useImageLoadingStatus`);
function w(e) {
  return e.complete ? (e.naturalWidth > 0 ? `loaded` : `error`) : `loading`;
}
d(w, `getImageLoadingStatus`);
function T() {
  return h;
}
d(T, `useImageCount`);
function E(e) {}
d(E, `useUpdateImageCount`);
var D = c.forwardRef(({ className: e, ...t }, n) =>
  (0, l.jsx)(v, {
    ref: n,
    className: o(
      `relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full`,
      e,
    ),
    ...t,
  }),
);
D.displayName = v.displayName;
var O = c.forwardRef(({ className: e, ...t }, n) =>
  (0, l.jsx)(b, {
    ref: n,
    className: o(`aspect-square h-full w-full`, e),
    ...t,
  }),
);
O.displayName = b.displayName;
var k = c.forwardRef(({ className: e, ...t }, n) =>
  (0, l.jsx)(S, {
    ref: n,
    className: o(
      `flex h-full w-full items-center justify-center rounded-full bg-muted`,
      e,
    ),
    ...t,
  }),
);
k.displayName = S.displayName;
