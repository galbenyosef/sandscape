// button-gyaE5cND 01 — classname
// Lines 1-132 of readable/assets/button-gyaE5cND.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { d as r, l as i, u as a } from "./AuthService-C8NFtVWb.js";
var o = e(t()),
  s = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  c = a,
  l = (e, t) => (n) => {
    if (t?.variants == null) return c(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = s(t) || s(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return c(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  u = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  d = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  f = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  p = (0, o.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: s,
        ...c
      },
      l,
    ) =>
      (0, o.createElement)(
        `svg`,
        {
          ref: l,
          ...f,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: d(`lucide`, i),
          ...c,
        },
        [
          ...s.map(([e, t]) => (0, o.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  m = (e, t) => {
    let n = (0, o.forwardRef)(({ className: n, ...r }, i) =>
      (0, o.createElement)(p, {
        ref: i,
        iconNode: t,
        className: d(`lucide-${u(e)}`, n),
        ...r,
      }),
    );
    return ((n.displayName = `${e}`), n);
  },
  h = n(),
  g = l(
    `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground hover:bg-primary/90`,
          destructive: `bg-destructive text-destructive-foreground hover:bg-destructive/90`,
          outline: `border border-input bg-secondary hover:bg-accent hover:text-accent-foreground`,
          secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
          ghost: `hover:bg-accent hover:text-accent-foreground`,
          link: `text-primary underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-10 px-4 py-2`,
          sm: `h-9 rounded-md px-3`,
          lg: `h-11 rounded-md px-8`,
          icon: `h-10 w-10`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  ),
  _ = o.forwardRef(
    ({ className: e, variant: t, size: n, asChild: a = !1, ...o }, s) =>
      (0, h.jsx)(a ? r : `button`, {
        className: i(g({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      }),
  );
_.displayName = `Button`;
