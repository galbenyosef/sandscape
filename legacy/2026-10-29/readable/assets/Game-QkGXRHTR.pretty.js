import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, s as i, u as a } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as o } from "./useToast-QK0Q4gGT.js";
import { a as s, i as c } from "./dist-CA4uZW3H.js";
import { l } from "./AuthService-CQeU_0bQ.js";
import { t as u } from "./dist-p2cW4AiE.js";
import { t as d } from "./dist-DkIQBCKf.js";
import { i as f, t as p } from "./button-Ap3ysi5G.js";
import { n as m, t as h } from "./wand-sparkles-DuaVuhfE.js";
import { n as g, t as _ } from "./thumbs-up-3xlfzfdY.js";
import {
  a as v,
  c as y,
  i as b,
  n as x,
  o as S,
  r as ee,
  s as te,
  t as ne,
} from "./ShareMenu-DgMG0s-m.js";
import { t as C } from "./refresh-cw-CkwJF4P8.js";
import { c as w, r as T } from "./leaderboards-Bl1Xg4fx.js";
import { n as E, t as D } from "./apiConfig-cGsbt6Be.js";
import { c as O } from "./AnalyticsService-BMBbF9S-.js";
import { t as k } from "./useTranslation-BdauNPOZ.js";
import { t as A } from "./avatarUtils-CBd99uWq.js";
import { r as re } from "./gameUtils-hllMGYPh.js";
import { n as ie, r as j, t as M } from "./avatar-ixs41cq5.js";
import { t as ae } from "./dist-C7e-qgX5.js";
import { n as N, r as P, t as oe } from "./dist-BKqz_oOH.js";
import { t as se } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  A as ce,
  C as le,
  E as ue,
  L as de,
  O as fe,
  S as pe,
  W as me,
  X as he,
  Y as ge,
  _ as _e,
  at as ve,
  b as ye,
  ct as be,
  d as F,
  g as xe,
  it as Se,
  nt as Ce,
  q as we,
  s as Te,
  u as I,
  v as L,
  w as Ee,
} from "./index-BKDksszn.js";
import { a as De, i as Oe, r as ke, t as Ae } from "./gameLikes-CVeS3kbw.js";
import { a as je, i as Me, t as Ne } from "./follow-CUqA0aWI.js";
import { t as Pe } from "./textarea-D_1TMYK2.js";
import { n as Fe, t as Ie } from "./card-DLIi0Qe8.js";
import { t as Le } from "./confirm-dialog-B_bgaQuk.js";
import { i as Re, n as R, r as ze, t as Be } from "./tabs-Gm5XRVor.js";
import { n as Ve } from "./history-BgFRjxWz.js";
var z = e(t(), 1);
function He(e) {
  let t = e < 0 ? `-` : ``,
    n = Math.abs(Math.round(e)),
    r = n % 1e3,
    i = Math.floor(n / 1e3) % 60,
    a = Math.floor(n / 6e4) % 60,
    o = Math.floor(n / 36e5),
    s = (e, t = 2) => String(e).padStart(t, `0`),
    c = `${s(i)}.${s(r, 3)}`;
  return o > 0 ? `${t}${o}:${s(a)}:${c}` : `${t}${a}:${c}`;
}
function B(e, t, n) {
  if (e == null || !Number.isFinite(e)) return `—`;
  switch (t) {
    case `time_ms`:
      return He(e);
    case `percent`:
      return `${new Intl.NumberFormat(n, { maximumFractionDigits: 1 }).format(e)}%`;
    default:
      return new Intl.NumberFormat(n, {
        maximumFractionDigits: +!Number.isInteger(e),
      }).format(e);
  }
}
function V(e) {
  return `#${e}`;
}
var H = n(),
  Ue = Object.defineProperty,
  U = (e, t) => Ue(e, `name`, { value: t, configurable: !0 }),
  We = `Toggle`,
  W = z.forwardRef(
    U(function (e, t) {
      let { pressed: n, defaultPressed: r, onPressedChange: i, ...a } = e,
        [o, c] = d({ prop: n, onChange: i, defaultProp: r ?? !1, caller: We });
      return (0, H.jsx)(u.button, {
        type: `button`,
        "aria-pressed": o,
        "data-state": o ? `on` : `off`,
        "data-disabled": e.disabled ? `` : void 0,
        ...a,
        ref: t,
        onClick: s(e.onClick, () => {
          e.disabled || c(!o);
        }),
      });
    }, `Toggle`),
  ),
  G = Object.defineProperty,
  K = (e, t) => G(e, `name`, { value: t, configurable: !0 }),
  q = `ToggleGroup`,
  [Ge, Ke] = c(q, [P]),
  qe = P(),
  J = z.forwardRef(
    K(function (e, t) {
      let { type: n, ...r } = e;
      if (n === `single`)
        return (0, H.jsx)(Ye, { role: `radiogroup`, ...r, ref: t });
      if (n === `multiple`)
        return (0, H.jsx)(X, { role: `toolbar`, ...r, ref: t });
      throw Error(`Missing prop \`type\` expected on \`${q}\``);
    }, `ToggleGroup`),
  ),
  [Je, Y] = Ge(q),
  Ye = z.forwardRef(
    K(function (e, t) {
      let {
          value: n,
          defaultValue: r,
          onValueChange: i = K(() => {}, `onValueChange`),
          ...a
        } = e,
        [o, s] = d({ prop: n, defaultProp: r ?? ``, onChange: i, caller: q });
      return (0, H.jsx)(Je, {
        scope: e.__scopeToggleGroup,
        type: `single`,
        value: z.useMemo(() => (o ? [o] : []), [o]),
        onItemActivate: s,
        onItemDeactivate: z.useCallback(() => s(``), [s]),
        children: (0, H.jsx)(Qe, { ...a, ref: t }),
      });
    }, `ToggleGroupImplSingle`),
  ),
  X = z.forwardRef(
    K(function (e, t) {
      let {
          value: n,
          defaultValue: r,
          onValueChange: i = K(() => {}, `onValueChange`),
          ...a
        } = e,
        [o, s] = d({ prop: n, defaultProp: r ?? [], onChange: i, caller: q }),
        c = z.useCallback((e) => s((t = []) => [...t, e]), [s]),
        l = z.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
      return (0, H.jsx)(Je, {
        scope: e.__scopeToggleGroup,
        type: `multiple`,
        value: o,
        onItemActivate: c,
        onItemDeactivate: l,
        children: (0, H.jsx)(Qe, { ...a, ref: t }),
      });
    }, `ToggleGroupImplMultiple`),
  ),
  [Xe, Ze] = Ge(q),
  Qe = z.forwardRef(
    K(function (e, t) {
      let {
          __scopeToggleGroup: n,
          disabled: r = !1,
          rovingFocus: i = !0,
          orientation: a,
          dir: o,
          loop: s = !0,
          ...c
        } = e,
        l = qe(n),
        d = ae(o),
        f = { dir: d, ...c };
      return (0, H.jsx)(Xe, {
        scope: n,
        rovingFocus: i,
        disabled: r,
        children: i
          ? (0, H.jsx)(oe, {
              asChild: !0,
              ...l,
              orientation: a,
              dir: d,
              loop: s,
              children: (0, H.jsx)(u.div, { ...f, ref: t }),
            })
          : (0, H.jsx)(u.div, { ...f, ref: t }),
      });
    }, `ToggleGroupImpl`),
  ),
  Z = `ToggleGroupItem`,
  Q = z.forwardRef(
    K(function (e, t) {
      let n = Y(Z, e.__scopeToggleGroup),
        r = Ze(Z, e.__scopeToggleGroup),
        i = qe(e.__scopeToggleGroup),
        a = n.value.includes(e.value),
        o = r.disabled || e.disabled,
        s = { ...e, pressed: a, disabled: o },
        c = z.useRef(null);
      return r.rovingFocus
        ? (0, H.jsx)(N, {
            asChild: !0,
            ...i,
            focusable: !o,
            active: a,
            ref: c,
            children: (0, H.jsx)($e, { ...s, ref: t }),
          })
        : (0, H.jsx)($e, { ...s, ref: t });
    }, `ToggleGroupItem`),
  ),
  $e = z.forwardRef(
    K(function (e, t) {
      let { __scopeToggleGroup: n, value: r, ...i } = e,
        a = Y(Z, n),
        o = {
          role: `radio`,
          "aria-checked": e.pressed,
          "aria-pressed": void 0,
        };
      return (0, H.jsx)(W, {
        ...(a.type === `single` ? o : void 0),
        ...i,
        ref: t,
        onPressedChange: (e) => {
          e ? a.onItemActivate(r) : a.onItemDeactivate(r);
        },
      });
    }, `ToggleGroupItemImpl`),
  ),
  et = f(
    `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2`,
    {
      variants: {
        variant: {
          default: `bg-transparent`,
          outline: `border border-input bg-transparent hover:bg-accent hover:text-accent-foreground`,
        },
        size: {
          default: `h-10 px-3 min-w-10`,
          sm: `h-9 px-2.5 min-w-9`,
          lg: `h-11 px-5 min-w-11`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  ),
  tt = z.forwardRef(({ className: e, variant: t, size: n, ...r }, i) =>
    (0, H.jsx)(W, {
      ref: i,
      className: l(et({ variant: t, size: n, className: e })),
      ...r,
    }),
  );
tt.displayName = W.displayName;
var nt = z.createContext({ size: `default`, variant: `default` }),
  rt = z.forwardRef(
    ({ className: e, variant: t, size: n, children: r, ...i }, a) =>
      (0, H.jsx)(J, {
        ref: a,
        className: l(`flex items-center justify-center gap-1`, e),
        ...i,
        children: (0, H.jsx)(nt.Provider, {
          value: { variant: t, size: n },
          children: r,
        }),
      }),
  );
rt.displayName = J.displayName;
var it = z.forwardRef(
  ({ className: e, children: t, variant: n, size: r, ...i }, a) => {
    let o = z.useContext(nt);
    return (0, H.jsx)(Q, {
      ref: a,
      className: l(et({ variant: o.variant || n, size: o.size || r }), e),
      ...i,
      children: t,
    });
  },
);
it.displayName = Q.displayName;
var at = [`all`, `daily`, `weekly`, `monthly`],
  ot = 10,
  st = `__default__`;
function ct({ gameId: e, currentUserId: t, className: n }) {
  let { t: r, i18n: i } = k(),
    [a, o] = (0, z.useState)(null),
    [s, c] = (0, z.useState)(null),
    [u, d] = (0, z.useState)(!1),
    [f, m] = (0, z.useState)(!0),
    [h, g] = (0, z.useState)(null),
    [_, v] = (0, z.useState)(null),
    y = (0, z.useRef)(0),
    b = (0, z.useCallback)(async () => {
      if (!e) return;
      let t = ++y.current;
      (m(!0), g(null));
      try {
        let n = await T(e, {
          ...(a ? { period: a } : {}),
          limit: ot,
          aroundMe: !0,
        });
        if (t !== y.current) return;
        (d(n.enabled), c(n.boards));
      } catch (e) {
        if (t !== y.current) return;
        g(e instanceof Error ? e.message : String(e));
      } finally {
        t === y.current && m(!1);
      }
    }, [e, a]);
  if (
    ((0, z.useEffect)(
      () => (
        b(),
        () => {
          y.current++;
        }
      ),
      [b],
    ),
    !e)
  )
    return null;
  if (f && s === null)
    return (0, H.jsx)(Ie, {
      className: n,
      children: (0, H.jsxs)(Fe, {
        className: `space-y-3 p-4`,
        children: [
          (0, H.jsx)(L, { className: `h-5 w-40` }),
          (0, H.jsx)(L, { className: `h-4 w-full` }),
          (0, H.jsx)(L, { className: `h-4 w-full` }),
        ],
      }),
    });
  let x = s && s.some((e) => e.slug === _) ? _ : s?.[0]?.slug;
  return !u || !s || s.length === 0
    ? null
    : (0, H.jsx)(Ie, {
        className: n,
        children: (0, H.jsxs)(Fe, {
          className: `p-4 sm:p-6`,
          children: [
            (0, H.jsxs)(`div`, {
              className: `mb-4 flex flex-wrap items-center justify-between gap-3`,
              children: [
                (0, H.jsxs)(`h2`, {
                  className: `flex items-center gap-2 text-lg font-semibold text-foreground`,
                  children: [
                    (0, H.jsx)(w, {
                      className: `h-5 w-5 text-primary`,
                      "aria-hidden": !0,
                    }),
                    r(`leaderboard.title`, `Leaderboard`),
                  ],
                }),
                (0, H.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, H.jsxs)(rt, {
                      type: `single`,
                      value: a ?? st,
                      onValueChange: (e) => o(!e || e === st ? null : e),
                      "aria-label": r(`leaderboard.periodLabel`, `Time range`),
                      children: [
                        (0, H.jsx)(it, {
                          value: st,
                          size: `sm`,
                          className: `text-xs`,
                          children: r(`leaderboard.period.default`, `Default`),
                        }),
                        at.map((e) =>
                          (0, H.jsx)(
                            it,
                            {
                              value: e,
                              size: `sm`,
                              className: `text-xs`,
                              children: r(`leaderboard.period.${e}`, e),
                            },
                            e,
                          ),
                        ),
                      ],
                    }),
                    (0, H.jsx)(p, {
                      variant: `ghost`,
                      size: `icon`,
                      onClick: b,
                      disabled: f,
                      "aria-label": r(`leaderboard.refresh`, `Refresh`),
                      children: (0, H.jsx)(C, {
                        className: l(`h-4 w-4`, f && `animate-spin`),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            h
              ? (0, H.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: r(
                    `leaderboard.error`,
                    `Could not load the leaderboard right now.`,
                  ),
                })
              : s.length === 1
                ? (0, H.jsx)(lt, {
                    board: s[0],
                    currentUserId: t,
                    locale: i.language,
                  })
                : (0, H.jsxs)(Be, {
                    value: x,
                    onValueChange: v,
                    className: `w-full`,
                    children: [
                      (0, H.jsx)(ze, {
                        className: `mb-3 flex h-auto flex-wrap justify-start gap-1`,
                        children: s.map((e) =>
                          (0, H.jsx)(
                            Re,
                            {
                              value: e.slug,
                              className: `text-xs`,
                              children: e.title,
                            },
                            e.slug,
                          ),
                        ),
                      }),
                      s.map((e) =>
                        (0, H.jsx)(
                          R,
                          {
                            value: e.slug,
                            className: `mt-0`,
                            children: (0, H.jsx)(lt, {
                              board: e,
                              currentUserId: t,
                              locale: i.language,
                            }),
                          },
                          e.slug,
                        ),
                      ),
                    ],
                  }),
          ],
        }),
      });
}
function lt({ board: e, currentUserId: t, locale: n }) {
  let { t: r } = k();
  if (e.rows.length === 0)
    return (0, H.jsx)(`p`, {
      className: `py-6 text-center text-sm text-muted-foreground`,
      children: r(
        `leaderboard.empty`,
        `No results yet — be the first to play.`,
      ),
    });
  let i = e.me && !e.rows.some((e) => e.is_me);
  return (0, H.jsxs)(`div`, {
    className: `overflow-x-auto`,
    children: [
      (0, H.jsxs)(`table`, {
        className: `w-full text-sm`,
        children: [
          (0, H.jsx)(`thead`, {
            children: (0, H.jsxs)(`tr`, {
              className: `border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground`,
              children: [
                (0, H.jsx)(`th`, {
                  className: `w-12 py-2 pr-2 font-medium`,
                  children: r(`leaderboard.rank`, `#`),
                }),
                (0, H.jsx)(`th`, {
                  className: `py-2 pr-2 font-medium`,
                  children: e.group_label,
                }),
                (0, H.jsx)(`th`, {
                  className: `w-24 py-2 pl-2 text-right font-medium`,
                  children: e.metric_label ?? r(`leaderboard.entries`, `Plays`),
                }),
              ],
            }),
          }),
          (0, H.jsx)(`tbody`, {
            children: e.rows.map((r) =>
              (0, H.jsx)(
                ut,
                {
                  row: r,
                  board: e,
                  locale: n,
                  highlighted: !!r.is_me || (!!t && r.key === t),
                },
                r.key,
              ),
            ),
          }),
        ],
      }),
      i &&
        e.me &&
        (0, H.jsxs)(`p`, {
          className: `mt-3 border-t border-border pt-3 text-xs text-muted-foreground`,
          children: [
            r(`leaderboard.yourRank`, `Your rank`),
            `:`,
            ` `,
            (0, H.jsx)(`span`, {
              className: `font-medium text-foreground`,
              children: V(e.me.rank),
            }),
            ` · `,
            B(e.me.value, e.format, n),
          ],
        }),
    ],
  });
}
function ut({ row: e, board: t, locale: n, highlighted: r }) {
  let { t: i } = k(),
    a = t.group_by === `player`,
    o = a
      ? (e.player?.username ?? i(`leaderboard.unknownPlayer`, `Player`))
      : (e.label ?? e.key);
  return (0, H.jsxs)(`tr`, {
    className: l(
      `border-b border-border/50 last:border-0`,
      r && `bg-primary/5`,
    ),
    children: [
      (0, H.jsx)(`td`, {
        className: `py-2 pr-2 font-mono text-xs text-muted-foreground`,
        children: V(e.rank),
      }),
      (0, H.jsx)(`td`, {
        className: `py-2 pr-2`,
        children: (0, H.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            a
              ? (0, H.jsxs)(M, {
                  className: `h-6 w-6`,
                  children: [
                    (0, H.jsx)(j, { src: A(e.player?.avatar_url) }),
                    (0, H.jsx)(ie, { children: (o[0] ?? `?`).toUpperCase() }),
                  ],
                })
              : e.icon_url
                ? (0, H.jsx)(`img`, {
                    src: e.icon_url,
                    alt: ``,
                    className: `h-6 w-6 rounded object-cover`,
                  })
                : e.emoji
                  ? (0, H.jsx)(`span`, {
                      className: `text-base leading-none`,
                      "aria-hidden": !0,
                      children: e.emoji,
                    })
                  : null,
            (0, H.jsx)(`span`, {
              className: `truncate text-foreground`,
              children: o,
            }),
            r &&
              (0, H.jsx)(`span`, {
                className: `rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium uppercase text-primary`,
                children: i(`leaderboard.you`, `You`),
              }),
          ],
        }),
      }),
      (0, H.jsx)(`td`, {
        className: `py-2 pl-2 text-right font-medium tabular-nums text-foreground`,
        children: B(e.value, t.format, n),
      }),
    ],
  });
}
function dt({ open: e, mode: t, onClose: n }) {
  let a = r(),
    o = i(),
    { t: s } = k();
  if (!e) return null;
  let {
    title: c,
    message: l,
    showRegister: u,
  } = {
    "register-placeholder": {
      title: s(`playGate.placeholderTitle`, `Not playable yet`),
      message: s(
        `playGate.placeholderMessage`,
        `This game isn't available to play yet. Create a free account to play the full catalog of Sandscape games.`,
      ),
      showRegister: !0,
    },
    "register-limit": {
      title: s(`playGate.limitTitle`, `You've reached the free-play limit`),
      message: s(
        `playGate.limitMessage`,
        `You've played the maximum number of games for now. Create a free account to keep playing.`,
      ),
      showRegister: !0,
    },
    "coming-soon": {
      title: s(`playGate.comingSoonTitle`, `Coming soon`),
      message: s(
        `playGate.comingSoonMessage`,
        `This title isn't playable yet — check back soon.`,
      ),
      showRegister: !1,
    },
  }[t];
  return (0, H.jsx)(`div`, {
    className: `fixed inset-0 z-50 bg-black/50 flex items-center justify-center`,
    children: (0, H.jsx)(`div`, {
      className: `bg-background rounded-lg shadow-lg max-w-md w-full m-4 max-h-[90vh] overflow-y-auto`,
      children: (0, H.jsxs)(`div`, {
        className: `p-6`,
        children: [
          (0, H.jsxs)(`div`, {
            className: `flex justify-between items-center mb-4`,
            children: [
              (0, H.jsx)(`h2`, {
                className: `text-2xl font-bold`,
                children: c,
              }),
              (0, H.jsx)(p, {
                variant: `ghost`,
                size: `icon`,
                onClick: n,
                children: (0, H.jsx)(we, { className: `h-4 w-4` }),
              }),
            ],
          }),
          (0, H.jsx)(`p`, {
            className: `mb-6 text-muted-foreground`,
            children: l,
          }),
          (0, H.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              u &&
                (0, H.jsx)(p, {
                  className: `w-full`,
                  onClick: () => a(I(F(o), `play_gate`)),
                  children: s(
                    `playGate.createAccount`,
                    `Create a free account`,
                  ),
                }),
              (0, H.jsx)(p, {
                variant: u ? `ghost` : `default`,
                className: `w-full`,
                onClick: n,
                children: s(`general.close`, `Close`),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var ft = 1440 * 60 * 1e3,
  pt = `sandscape-played-games`;
function mt() {
  try {
    let e = localStorage.getItem(pt);
    if (!e) return [];
    let t = JSON.parse(e);
    if (!Array.isArray(t)) return [];
    let n = Date.now() - ft,
      r = new Set(),
      i = [];
    for (let e of t) {
      if (!e || typeof e != `object`) continue;
      let { id: t, ts: a } = e;
      typeof t != `string` ||
        typeof a != `number` ||
        a < n ||
        r.has(t) ||
        (r.add(t), i.push({ id: t, ts: a }));
    }
    return i;
  } catch {
    return [];
  }
}
function ht(e) {
  try {
    localStorage.setItem(pt, JSON.stringify(e));
  } catch {}
}
function gt(e) {
  return mt().some((t) => t.id === e);
}
function _t() {
  return mt().length < 3;
}
function vt(e) {
  let t = mt().filter((t) => t.id !== e);
  (t.push({ id: e, ts: Date.now() }), ht(t));
}
var yt = `sandscape-game-viewer-id`,
  bt =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  $ = null;
function xt() {
  if (typeof globalThis.crypto?.randomUUID == `function`)
    return globalThis.crypto.randomUUID();
  let e = new Uint8Array(16);
  if (typeof globalThis.crypto?.getRandomValues == `function`)
    globalThis.crypto.getRandomValues(e);
  else
    for (let t = 0; t < e.length; t += 1)
      e[t] = Math.floor(Math.random() * 256);
  ((e[6] = (e[6] & 15) | 64), (e[8] = (e[8] & 63) | 128));
  let t = Array.from(e, (e) => e.toString(16).padStart(2, `0`));
  return `${t.slice(0, 4).join(``)}-${t.slice(4, 6).join(``)}-${t.slice(6, 8).join(``)}-${t.slice(8, 10).join(``)}-${t.slice(10).join(``)}`;
}
function St() {
  if ($) return $;
  try {
    let e = window.localStorage.getItem(yt);
    if (e && bt.test(e)) return (($ = e.toLowerCase()), $);
  } catch {}
  $ = xt();
  try {
    window.localStorage.setItem(yt, $);
  } catch {}
  return $;
}
async function Ct(e, t) {
  let n = await fetch(
    `${D.API_BASE_URL}/api/published/${encodeURIComponent(e)}/view`,
    {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({ browser_id: t }),
    },
  );
  if (!n.ok) throw Error(`game-view request failed (${n.status})`);
  return n.json();
}
var wt = {};
function Tt(e, t, n) {
  let r = `${D.API_BASE_URL}${e}`,
    i = () => (r.includes(`?`) ? `&` : `?`);
  return (
    t && (r += `${i()}v=${new Date(t).getTime()}`),
    n && (r += `${i()}pt=${encodeURIComponent(n)}`),
    r
  );
}
function Et() {
  let [e] = a(),
    t = r(),
    n = e.get(`g`),
    i = ye(),
    s = pe() && e.get(`play`) === `1`,
    { user: c, isAuthenticated: u } = me(),
    { t: d, i18n: f } = k(),
    { toast: _ } = o(),
    { trackEvent: v } = de(),
    y = ce(e),
    [b, x] = (0, z.useState)(null),
    [S, ee] = (0, z.useState)([]),
    [te, C] = (0, z.useState)([]),
    [w, T] = (0, z.useState)(!1),
    [A, ae] = (0, z.useState)(!1),
    [N, P] = (0, z.useState)(!1),
    [oe, he] = (0, z.useState)(!1),
    [_e, F] = (0, z.useState)(0),
    [Ce, Pe] = (0, z.useState)(0),
    Le = (0, z.useRef)(null),
    [Re, R] = (0, z.useState)(!1),
    [ze, Be] = (0, z.useState)(!1),
    [He, B] = (0, z.useState)(!0),
    [V, Ue] = (0, z.useState)(null),
    [U, We] = (0, z.useState)(null),
    [W, G] = (0, z.useState)(!1),
    [K, q] = (0, z.useState)(!1),
    [Ge, Ke] = (0, z.useState)(null),
    qe = (0, z.useRef)(new Set()),
    J = (0, z.useRef)(new Set()),
    Je = (0, z.useRef)(new Set()),
    Y = (0, z.useRef)(``),
    Ye = i,
    X =
      !!b &&
      !!b.platformCompat &&
      b.platformCompat !== `both` &&
      b.platformCompat !== Ye &&
      !K,
    Xe = !U && !X;
  ((0, z.useEffect)(() => {
    (async () => {
      if (n) {
        ((Y.current = ``), B(!0), Ue(null), q(!1));
        try {
          let e = await le(n),
            t = e.game._id,
            r = await Ee(t);
          ((Y.current = t), x(e.game), Pe(e.game.views ?? 0), ee(r.comments));
          try {
            let e = await Ae(t);
            F(e);
          } catch (t) {
            (console.error(`Error fetching like count:`, t),
              F(e.game.likes ?? 0));
          }
        } catch (e) {
          (console.error(`Error fetching game:`, e),
            Ue(d(`game.notFound`, `Game not found`)));
        } finally {
          B(!1);
        }
      }
    })();
  }, [n]),
    (0, z.useEffect)(() => {
      let e = b?._id;
      if (!e) return;
      let t = !1;
      return (
        (async () => {
          try {
            let n = await fe(e, i);
            t || C(n.games);
          } catch (e) {
            console.error(`Error fetching related games:`, e);
          }
        })(),
        () => {
          t = !0;
        }
      );
    }, [b?._id, i]),
    (0, z.useEffect)(() => {
      (async () => {
        if (!b || !c) {
          P(!1);
          return;
        }
        try {
          let e = await ke(b._id);
          P(e);
        } catch (e) {
          (console.error(`Error checking like status:`, e), P(!1));
        }
      })();
    }, [b, c]),
    (0, z.useEffect)(() => {
      (async () => {
        if (!b || !c || b.creator._id === c.id) {
          R(!1);
          return;
        }
        try {
          R(await Me(b.creator._id));
        } catch (e) {
          (console.error(`Error checking creator follow status:`, e), R(!1));
        }
      })();
    }, [b, c]),
    (0, z.useEffect)(() => {
      if (!b) return;
      (We(null), G(!1));
      let e = b._id || b.id || ``;
      if ((u || (delete wt[e], Ke(null)), b.isPlaceholder)) {
        (We(u ? `coming-soon` : `register-placeholder`), G(!0));
        return;
      }
      if (u) {
        !X &&
          b.gameContentUrl &&
          !qe.current.has(e) &&
          (qe.current.add(e), Ve(e));
        let t = wt[e];
        if (t) {
          Ke(t);
          return;
        }
        let n = !1;
        return (
          (async () => {
            try {
              let t = await E(),
                r = await fetch(`${D.API_BASE_URL}/api/published/play-token`, {
                  method: `POST`,
                  headers: t,
                  body: JSON.stringify({ game_id: e }),
                });
              if (!r.ok) throw Error(`play-token request failed (${r.status})`);
              let i = (await r.json())?.token;
              i && !n && ((wt[e] = i), Ke(i));
            } catch (e) {
              console.error(`Error fetching play-token:`, e);
            }
          })(),
          () => {
            n = !0;
          }
        );
      }
      if (!gt(e) && !_t()) {
        (We(`register-limit`), G(!0));
        return;
      }
      X || vt(e);
    }, [b, u, X]),
    (0, z.useEffect)(() => {
      if (!b || b.isPlaceholder || !b.gameContentUrl || X) return;
      let e = b._id || b.id || ``;
      !e ||
        J.current.has(e) ||
        (!u && !gt(e) && !_t()) ||
        (J.current.add(e),
        Ct(e, St())
          .then((t) => {
            Y.current === e && Pe(t.view_count);
          })
          .catch((t) => {
            (J.current.delete(e),
              console.warn(`Unable to record game view:`, t));
          }));
    }, [b, u, X]));
  let Ze = async () => {
      if (!(!b || oe)) {
        if (!u) {
          t(
            I(
              `${window.location.pathname}${window.location.search}`,
              `play_gate`,
            ),
          );
          return;
        }
        he(!0);
        try {
          N
            ? (await De(b._id), P(!1), F((e) => Math.max(0, e - 1)))
            : (await Oe(b._id), P(!0), F((e) => e + 1));
        } catch (e) {
          (console.error(`Error updating like status:`, e),
            _({
              title: d(
                `game.toast.likeFailed`,
                `Failed to update like status.`,
              ),
              variant: `destructive`,
            }));
        } finally {
          he(!1);
        }
      }
    },
    Qe = () => {
      if (!b) return;
      let e = `/create?remix=${encodeURIComponent(b._id)}`;
      t(u ? e : I(e, `create_gate`));
    },
    Z = () => {
      if (!b || b.isPlaceholder || !b.gameContentUrl || !Xe) return;
      let e = b._id || b.id || ``;
      !e ||
        Je.current.has(e) ||
        (!u && !gt(e) && !_t()) ||
        (Je.current.add(e),
        v(O.events.GAME_PLAY, {
          content_type: `game`,
          content_id: `game_${e}`,
          game_id: e,
          game_title: b.title,
          game_category: b.category,
          game_source: y,
          is_authenticated: u,
        }));
    },
    Q = (e) => {
      (v(O.events.SELECT_CONTENT, {
        content_type: `game`,
        content_id: `game_${e._id}`,
        game_id: e._id,
        game_title: e.title,
        game_source: `related_games`,
        source_game_id: b?._id,
      }),
        t(ue(e, `related_games`)));
    };
  return (
    (0, z.useEffect)(() => {
      let e = () => T(!!document.fullscreenElement);
      return (
        document.addEventListener(`fullscreenchange`, e),
        () => document.removeEventListener(`fullscreenchange`, e)
      );
    }, []),
    (0, z.useEffect)(() => {
      if (s)
        return () => {
          document.fullscreenElement &&
            document.exitFullscreen?.().catch(() => {});
        };
    }, [s]),
    n
      ? He
        ? (0, H.jsx)(`div`, {
            children: (0, H.jsxs)(`section`, {
              className: `mb-8`,
              children: [
                (0, H.jsx)(L, { className: `h-[88vh] w-full rounded-none` }),
                (0, H.jsx)(`div`, {
                  className: `border-t border-b bg-background/95`,
                  children: (0, H.jsxs)(`div`, {
                    className: `px-4 sm:px-6 md:px-8 py-4`,
                    children: [
                      (0, H.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-4`,
                        children: [
                          (0, H.jsx)(`div`, {
                            className: `flex items-center gap-3`,
                            children: (0, H.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, H.jsx)(L, { className: `h-7 w-48` }),
                                (0, H.jsxs)(`div`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    (0, H.jsx)(L, {
                                      className: `h-6 w-6 rounded-full`,
                                    }),
                                    (0, H.jsx)(L, { className: `h-4 w-28` }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, H.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, H.jsx)(L, {
                                className: `h-10 w-16 rounded-md`,
                              }),
                              (0, H.jsx)(L, {
                                className: `h-10 w-10 rounded-md`,
                              }),
                              (0, H.jsx)(L, {
                                className: `h-10 w-24 rounded-md`,
                              }),
                              (0, H.jsx)(L, {
                                className: `h-10 w-10 rounded-md`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, H.jsx)(L, { className: `mt-3 h-4 w-3/4` }),
                    ],
                  }),
                }),
              ],
            }),
          })
        : V || !b
          ? (0, H.jsxs)(`div`, {
              className: `min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center`,
              children: [
                (0, H.jsx)(`div`, {
                  className: `flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground`,
                  children: (0, H.jsx)(ve, { className: `h-8 w-8` }),
                }),
                (0, H.jsxs)(`div`, {
                  className: `space-y-1`,
                  children: [
                    (0, H.jsx)(`h1`, {
                      className: `text-xl font-semibold`,
                      children: V || d(`game.notFound`, `Game not found`),
                    }),
                    (0, H.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: d(
                        `game.removedOrIncorrect`,
                        `This game may have been removed or the link is incorrect.`,
                      ),
                    }),
                  ],
                }),
                (0, H.jsx)(p, {
                  onClick: () => t(`/`),
                  children: d(`game.backToGames`, `Back to games`),
                }),
              ],
            })
          : s
            ? (0, H.jsxs)(H.Fragment, {
                children: [
                  U &&
                    (0, H.jsx)(dt, {
                      open: W,
                      mode: U,
                      onClose: () => {
                        (G(!1), t(`/`));
                      },
                    }),
                  (0, H.jsxs)(`div`, {
                    className: `fixed inset-0 z-[70] bg-black`,
                    children: [
                      U
                        ? (0, H.jsx)(`div`, {
                            className: `flex h-full w-full items-center justify-center text-muted-foreground`,
                            children: (0, H.jsx)(ve, {
                              className: `h-10 w-10 opacity-40`,
                            }),
                          })
                        : X
                          ? (0, H.jsx)(Dt, {
                              builtFor: b.platformCompat,
                              onPlayAnyway: () => q(!0),
                            })
                          : b.gameContentUrl
                            ? (0, H.jsx)(`iframe`, {
                                ref: Le,
                                src: Tt(b.gameContentUrl, b.publishedAt, Ge),
                                className: `h-full w-full border-0`,
                                title: b.title || `Game`,
                                allow: `fullscreen`,
                                sandbox: `allow-scripts allow-same-origin allow-forms allow-pointer-lock`,
                                onLoad: Z,
                              })
                            : (0, H.jsx)(`div`, {
                                className: `flex h-full w-full items-center justify-center px-6 text-center text-muted-foreground`,
                                children: (0, H.jsx)(`p`, {
                                  children: d(
                                    `game.notAvailable`,
                                    `Game not available — no published build found.`,
                                  ),
                                }),
                              }),
                      !U &&
                        (0, H.jsx)(`button`, {
                          onClick: () => {
                            (document.fullscreenElement &&
                              document.exitFullscreen?.().catch(() => {}),
                              window.history.length > 1
                                ? t(-1)
                                : t(b ? ue(b) : `/`));
                          },
                          "aria-label": d(`game.exitGame`, `Exit game`),
                          className: `absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur`,
                          children: (0, H.jsx)(we, { className: `h-5 w-5` }),
                        }),
                    ],
                  }),
                ],
              })
            : (0, H.jsxs)(H.Fragment, {
                children: [
                  b &&
                    (0, H.jsx)(xe, {
                      title: `${b.title || `Play Game`} | Sandscape`,
                      description: `Play ${b.title || `this game`} created with Sandscape AI. ${b.description || d(`game.seoDescriptionFallback`, `Experience AI-generated gameplay, art, and mechanics.`)}`,
                      keywords: `${b.title}, AI game, play online games, ${b.category || `game created with AI`}, no-code game`,
                      ogType: `game`,
                      ogImage:
                        b.thumbnail ||
                        `https://sandscape.app/assets/videos/Sandscape_trailer_thumbnail.jpg`,
                      noindex: !0,
                    }),
                  U &&
                    (0, H.jsx)(dt, {
                      open: W,
                      mode: U,
                      onClose: () => {
                        (G(!1), t(`/`));
                      },
                    }),
                  (0, H.jsxs)(`div`, {
                    children: [
                      (0, H.jsxs)(`section`, {
                        className: `mb-8`,
                        children: [
                          (0, H.jsx)(`div`, {
                            className: `h-[88vh] relative bg-black`,
                            children: U
                              ? (0, H.jsx)(`div`, {
                                  className: `w-full h-full flex items-center justify-center text-muted-foreground`,
                                  children: (0, H.jsx)(ve, {
                                    className: `h-10 w-10 opacity-40`,
                                  }),
                                })
                              : X
                                ? (0, H.jsx)(Dt, {
                                    builtFor: b.platformCompat,
                                    onPlayAnyway: () => q(!0),
                                  })
                                : b.gameContentUrl
                                  ? (0, H.jsx)(`iframe`, {
                                      ref: Le,
                                      src: Tt(
                                        b.gameContentUrl,
                                        b.publishedAt,
                                        Ge,
                                      ),
                                      className: `w-full h-full border-0`,
                                      title: `Game`,
                                      allow: `fullscreen`,
                                      sandbox: `allow-scripts allow-same-origin allow-forms allow-pointer-lock`,
                                      onLoad: Z,
                                    })
                                  : (0, H.jsx)(`div`, {
                                      className: `w-full h-full flex items-center justify-center text-muted-foreground`,
                                      children: (0, H.jsx)(`p`, {
                                        children: d(
                                          `game.notAvailable`,
                                          `Game not available — no published build found.`,
                                        ),
                                      }),
                                    }),
                          }),
                          (0, H.jsx)(`div`, {
                            className: `bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-b`,
                            children: (0, H.jsxs)(`div`, {
                              className: `px-4 sm:px-6 md:px-8 py-4`,
                              children: [
                                (0, H.jsxs)(`div`, {
                                  className: `flex items-center justify-between gap-4`,
                                  children: [
                                    (0, H.jsx)(`div`, {
                                      className: `flex items-center gap-4`,
                                      children: (0, H.jsxs)(`div`, {
                                        children: [
                                          (0, H.jsx)(`h1`, {
                                            className: `text-2xl font-bold`,
                                            children: b.title,
                                          }),
                                          (0, H.jsxs)(`div`, {
                                            className: `flex items-center gap-2 mt-1`,
                                            children: [
                                              (0, H.jsxs)(M, {
                                                className: `h-6 w-6`,
                                                children: [
                                                  (0, H.jsx)(j, {
                                                    src: b.creator.avatar,
                                                  }),
                                                  (0, H.jsx)(ie, {
                                                    children: b.creator.name[0],
                                                  }),
                                                ],
                                              }),
                                              (0, H.jsx)(`span`, {
                                                className: `text-sm text-muted-foreground`,
                                                children: b.creator.name,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, H.jsxs)(`div`, {
                                      className: `flex items-center gap-2`,
                                      children: [
                                        (0, H.jsxs)(p, {
                                          onClick: Qe,
                                          className: `bg-primary hover:bg-primary/90 text-white`,
                                          children: [
                                            (0, H.jsx)(h, {
                                              className: `mr-2 h-4 w-4`,
                                            }),
                                            d(`game.remix`, `Remix`),
                                          ],
                                        }),
                                        (0, H.jsxs)(p, {
                                          variant: N ? `default` : `outline`,
                                          size: `icon`,
                                          onClick: Ze,
                                          disabled: oe,
                                          "aria-label": N
                                            ? d(`game.unlike`, `Unlike`)
                                            : d(`game.like`, `Like`),
                                          children: [
                                            (0, H.jsx)(Se, {
                                              className: l(
                                                `h-4 w-4`,
                                                N
                                                  ? `fill-red-500 text-red-500`
                                                  : ``,
                                              ),
                                            }),
                                            (0, H.jsx)(`span`, {
                                              className: `ml-1 text-sm`,
                                              children: _e,
                                            }),
                                          ],
                                        }),
                                        (0, H.jsx)(ne, {
                                          url: `${window.location.origin}${ue(b)}`,
                                          title: `Play ${b.title} on Sandscape`,
                                          text: `Check out ${b.title} - ${b.description || d(`game.shareTextFallback`, `An awesome game created on Sandscape!`)}`,
                                        }),
                                        b.creator._id !== c?.id &&
                                          (0, H.jsxs)(p, {
                                            variant: Re
                                              ? `outline`
                                              : `secondary`,
                                            onClick: async () => {
                                              if (!(!b || ze)) {
                                                if (!u) {
                                                  t(
                                                    I(
                                                      `${window.location.pathname}${window.location.search}`,
                                                      `play_gate`,
                                                    ),
                                                  );
                                                  return;
                                                }
                                                Be(!0);
                                                try {
                                                  Re
                                                    ? (await je(b.creator._id),
                                                      R(!1))
                                                    : (await Ne(b.creator._id),
                                                      R(!0));
                                                } catch (e) {
                                                  (console.error(
                                                    `Error following/unfollowing creator:`,
                                                    e,
                                                  ),
                                                    _({
                                                      title: d(
                                                        `game.toast.followFailed`,
                                                        `Failed to update follow status`,
                                                      ),
                                                      variant: `destructive`,
                                                    }));
                                                } finally {
                                                  Be(!1);
                                                }
                                              }
                                            },
                                            disabled: ze,
                                            children: [
                                              (0, H.jsx)(ge, {
                                                className: `mr-2 h-4 w-4`,
                                              }),
                                              Re
                                                ? d(`game.unfollow`, `Unfollow`)
                                                : d(`game.follow`, `Follow`),
                                            ],
                                          }),
                                        (0, H.jsx)(p, {
                                          variant: `outline`,
                                          size: `icon`,
                                          onClick: () => {
                                            let e = Le.current;
                                            e &&
                                              (document.fullscreenElement
                                                ? document.exitFullscreen?.()
                                                : e.requestFullscreen?.());
                                          },
                                          title: w
                                            ? d(
                                                `game.exitFullscreen`,
                                                `Exit fullscreen`,
                                              )
                                            : d(
                                                `game.fullscreen`,
                                                `Fullscreen`,
                                              ),
                                          "aria-label": w
                                            ? d(
                                                `game.exitFullscreen`,
                                                `Exit fullscreen`,
                                              )
                                            : d(
                                                `game.fullscreen`,
                                                `Fullscreen`,
                                              ),
                                          children: w
                                            ? (0, H.jsx)(g, {
                                                className: `h-4 w-4`,
                                              })
                                            : (0, H.jsx)(m, {
                                                className: `h-4 w-4`,
                                              }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                b.description &&
                                  (0, H.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => ae((e) => !e),
                                    className: `group mt-3 block w-full text-left`,
                                    "aria-expanded": A,
                                    children: [
                                      (0, H.jsxs)(`div`, {
                                        className: `relative`,
                                        children: [
                                          (0, H.jsx)(`p`, {
                                            className: l(
                                              `text-sm text-muted-foreground whitespace-pre-line`,
                                              A ? `` : `line-clamp-1`,
                                            ),
                                            children: b.description,
                                          }),
                                          !A &&
                                            (0, H.jsx)(`span`, {
                                              className: `pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent`,
                                            }),
                                        ],
                                      }),
                                      (0, H.jsx)(`span`, {
                                        className: `text-xs text-muted-foreground group-hover:text-foreground group-hover:underline`,
                                        children: A
                                          ? d(`game.showLess`, `Show less`)
                                          : d(`game.showMore`, `Show more`),
                                      }),
                                    ],
                                  }),
                                A &&
                                  (0, H.jsxs)(`div`, {
                                    className: `mt-3 pt-3 border-t flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground`,
                                    children: [
                                      b.category &&
                                        (0, H.jsx)(`span`, {
                                          className: `capitalize`,
                                          children: b.category,
                                        }),
                                      (0, H.jsxs)(`span`, {
                                        className: `flex items-center gap-1`,
                                        children: [
                                          (0, H.jsx)(be, {
                                            className: `h-3.5 w-3.5`,
                                          }),
                                          d(`game.views`, { count: Ce }),
                                        ],
                                      }),
                                      b.publishedAt &&
                                        (0, H.jsxs)(`span`, {
                                          children: [
                                            d(
                                              `game.publishedPrefix`,
                                              `Published `,
                                            ),
                                            se(new Date(b.publishedAt), {
                                              addSuffix: !0,
                                              locale: Te(f.language),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, H.jsx)(`section`, {
                        className: `pb-2`,
                        children: (0, H.jsx)(`div`, {
                          className: `px-4 sm:px-6 md:px-8`,
                          children: (0, H.jsx)(ct, {
                            gameId: b._id || b.id || ``,
                            currentUserId: c?.id,
                          }),
                        }),
                      }),
                      (0, H.jsx)(`section`, {
                        className: `py-8`,
                        children: (0, H.jsx)(`div`, {
                          className: `px-4 sm:px-6 md:px-8`,
                          children: (0, H.jsxs)(`div`, {
                            className: `grid grid-cols-1 md:grid-cols-3 gap-6`,
                            children: [
                              (0, H.jsxs)(`div`, {
                                className: `md:col-span-2 space-y-4`,
                                children: [
                                  (0, H.jsx)(`h2`, {
                                    className: `text-xl font-semibold`,
                                    children: d(`game.comments`, `Comments`),
                                  }),
                                  (0, H.jsx)(Ot, {
                                    gameId: b._id,
                                    onCommentAdded: (e) => ee((t) => [e, ...t]),
                                  }),
                                  (0, H.jsx)(`div`, {
                                    className: `space-y-4`,
                                    children:
                                      S.length === 0
                                        ? (0, H.jsx)(`p`, {
                                            className: `py-4 text-sm text-muted-foreground`,
                                            children: d(
                                              `game.beFirstToComment`,
                                              `Be the first to comment.`,
                                            ),
                                          })
                                        : S.map((e) =>
                                            (0, H.jsx)(
                                              kt,
                                              {
                                                comment: e,
                                                gameId: b._id,
                                                currentUserId: c?.id,
                                                isAuthenticated: u,
                                                onDeleted: (e) =>
                                                  ee((t) =>
                                                    t.filter(
                                                      (t) => t._id !== e,
                                                    ),
                                                  ),
                                              },
                                              e._id,
                                            ),
                                          ),
                                  }),
                                ],
                              }),
                              (0, H.jsxs)(`div`, {
                                className: `space-y-4`,
                                children: [
                                  (0, H.jsx)(`h2`, {
                                    className: `text-xl font-semibold`,
                                    children: d(
                                      `game.relatedGames`,
                                      `Related Games`,
                                    ),
                                  }),
                                  (0, H.jsx)(`div`, {
                                    className: `space-y-3`,
                                    children: te.map((e) =>
                                      (0, H.jsx)(
                                        Ie,
                                        {
                                          role: `button`,
                                          tabIndex: 0,
                                          onClick: () => Q(e),
                                          onKeyDown: (t) => {
                                            (t.key === `Enter` ||
                                              t.key === ` `) &&
                                              (t.preventDefault(), Q(e));
                                          },
                                          className: `cursor-pointer transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
                                          children: (0, H.jsx)(Fe, {
                                            className: `p-3`,
                                            children: (0, H.jsxs)(`div`, {
                                              className: `flex gap-3`,
                                              children: [
                                                re(e.thumbnail)
                                                  ? (0, H.jsx)(`img`, {
                                                      src: re(e.thumbnail),
                                                      alt: e.title,
                                                      className: `w-24 h-16 object-cover rounded-md bg-muted shrink-0`,
                                                      loading: `lazy`,
                                                    })
                                                  : (0, H.jsx)(`div`, {
                                                      className: `w-24 h-16 rounded-md bg-muted shrink-0`,
                                                    }),
                                                (0, H.jsxs)(`div`, {
                                                  children: [
                                                    (0, H.jsx)(`h3`, {
                                                      className: `font-medium line-clamp-1`,
                                                      children: e.title,
                                                    }),
                                                    (0, H.jsxs)(`div`, {
                                                      className: `flex items-center gap-2 mt-1`,
                                                      children: [
                                                        (0, H.jsxs)(M, {
                                                          className: `h-4 w-4`,
                                                          children: [
                                                            (0, H.jsx)(j, {
                                                              src: e.creator
                                                                .avatar,
                                                            }),
                                                            (0, H.jsx)(ie, {
                                                              children:
                                                                e.creator
                                                                  .name[0],
                                                            }),
                                                          ],
                                                        }),
                                                        (0, H.jsx)(`span`, {
                                                          className: `text-xs text-muted-foreground`,
                                                          children:
                                                            e.creator.name,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, H.jsxs)(`div`, {
                                                      className: `flex items-center gap-1 mt-1 text-xs text-muted-foreground`,
                                                      children: [
                                                        (0, H.jsx)(be, {
                                                          className: `h-3 w-3`,
                                                        }),
                                                        d(`game.views`, {
                                                          count: e.views ?? 0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        },
                                        e._id,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
      : (0, H.jsx)(`div`, {
          className: `min-h-screen flex items-center justify-center text-muted-foreground`,
          children: (0, H.jsx)(`p`, {
            children: d(
              `game.noGameSpecified`,
              `No game specified. Use a link like /play?g=CODE`,
            ),
          }),
        })
  );
}
function Dt({ builtFor: e, onPlayAnyway: t }) {
  let { t: n } = k(),
    r =
      e === `desktop`
        ? n(
            `game.compat.desktopOnly`,
            `This game was made for desktop — it may not run properly on this device.`,
          )
        : n(
            `game.compat.mobileOnly`,
            `This game was made for mobile — it may not run properly on this device.`,
          );
  return (0, H.jsx)(`div`, {
    className: `flex h-full w-full items-center justify-center p-6`,
    children: (0, H.jsx)(Ie, {
      className: `max-w-md w-full`,
      children: (0, H.jsxs)(Fe, {
        className: `flex flex-col items-center gap-4 p-6 text-center`,
        children: [
          (0, H.jsx)(`div`, {
            className: `flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground`,
            children: (0, H.jsx)(y, { className: `h-6 w-6` }),
          }),
          (0, H.jsxs)(`div`, {
            className: `space-y-1`,
            children: [
              (0, H.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: n(`game.compat.title`, `Built for another device`),
              }),
              (0, H.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: r,
              }),
            ],
          }),
          (0, H.jsx)(p, {
            onClick: t,
            children: n(`game.compat.playAnyway`, `Play anyway`),
          }),
        ],
      }),
    }),
  });
}
function Ot({
  gameId: e,
  onCommentAdded: t,
  parentId: n,
  placeholder: i,
  submitLabel: a,
  autoFocus: s = !1,
  onCancel: c,
}) {
  let { isAuthenticated: l } = me(),
    u = r(),
    { t: d } = k(),
    { toast: f } = o(),
    [m, h] = (0, z.useState)(``),
    [g, _] = (0, z.useState)(!1),
    y = i ?? d(`game.commentPlaceholder`, `Add a comment...`),
    b = a ?? d(`game.post`, `Post`),
    x = async (r) => {
      if ((r.preventDefault(), !l)) {
        u(
          I(
            `${window.location.pathname}${window.location.search}`,
            `play_gate`,
          ),
        );
        return;
      }
      if (m.trim()) {
        _(!0);
        try {
          (t(n ? await S(e, n, m.trim()) : await v(e, m.trim())), h(``));
        } catch {
          f({
            title: n
              ? d(`game.toast.replyFailed`, `Failed to post reply.`)
              : d(`game.toast.commentFailed`, `Failed to post comment.`),
            variant: `destructive`,
          });
        } finally {
          _(!1);
        }
      }
    };
  return l
    ? (0, H.jsxs)(`form`, {
        onSubmit: x,
        className: `mb-4 space-y-2`,
        children: [
          (0, H.jsx)(Pe, {
            className: `min-h-0 resize-none`,
            rows: 2,
            placeholder: y,
            value: m,
            onChange: (e) => h(e.target.value),
            onKeyDown: (e) => {
              e.key === `Enter` && !e.shiftKey && (e.preventDefault(), x(e));
            },
            disabled: g,
            maxLength: 500,
            autoFocus: s,
          }),
          (0, H.jsxs)(`div`, {
            className: `flex items-center justify-end gap-2`,
            children: [
              c &&
                (0, H.jsx)(p, {
                  type: `button`,
                  variant: `ghost`,
                  onClick: c,
                  disabled: g,
                  children: d(`general.cancel`, `Cancel`),
                }),
              (0, H.jsx)(p, {
                type: `submit`,
                variant: `secondary`,
                disabled: g || !m.trim(),
                children: g ? d(`game.posting`, `Posting...`) : b,
              }),
            ],
          }),
        ],
      })
    : (0, H.jsx)(`div`, {
        className: `p-4 border rounded cursor-pointer hover:bg-muted/50 transition-colors`,
        onClick: () =>
          u(
            I(
              `${window.location.pathname}${window.location.search}`,
              `play_gate`,
            ),
          ),
        children: (0, H.jsx)(`p`, {
          className: `text-muted-foreground`,
          children: d(
            `game.registerToComment`,
            `Register to comment on this game`,
          ),
        }),
      });
}
function kt({
  comment: e,
  gameId: t,
  currentUserId: n,
  isAuthenticated: i,
  onDeleted: a,
  isReply: s = !1,
}) {
  let { t: c, i18n: u } = k(),
    d = r(),
    { toast: f } = o(),
    [m, h] = (0, z.useState)(!1),
    [g, v] = (0, z.useState)(e.likes),
    [y, S] = (0, z.useState)(!1),
    [ne, C] = (0, z.useState)(!1),
    [w, T] = (0, z.useState)(!1),
    [E, D] = (0, z.useState)(e.children || []),
    [O, A] = (0, z.useState)(!1),
    re = n === e.user._id;
  return (
    (0, z.useEffect)(() => {
      (async () => {
        if (n)
          try {
            let t = await ee(e._id);
            h(t);
          } catch (e) {
            console.error(`Error checking comment like status:`, e);
          }
      })();
    }, [e._id, n]),
    (0, H.jsxs)(`div`, {
      className: `space-y-2`,
      children: [
        (0, H.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [
            (0, H.jsxs)(M, {
              className: `h-8 w-8`,
              children: [
                (0, H.jsx)(j, { src: e.user.avatar }),
                (0, H.jsx)(ie, { children: e.user.name[0] }),
              ],
            }),
            (0, H.jsxs)(`div`, {
              className: `flex-1`,
              children: [
                (0, H.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, H.jsx)(`span`, {
                      className: `font-medium`,
                      children: e.user.name,
                    }),
                    (0, H.jsx)(`span`, {
                      className: `text-xs text-muted-foreground`,
                      children: se(new Date(e.createdAt), {
                        addSuffix: !0,
                        locale: Te(u.language),
                      }),
                    }),
                  ],
                }),
                (0, H.jsx)(`p`, {
                  className: `mt-1 text-sm`,
                  children: e.text,
                }),
                (0, H.jsxs)(`div`, {
                  className: `flex items-center gap-4 mt-2`,
                  children: [
                    (0, H.jsxs)(p, {
                      variant: `ghost`,
                      size: `sm`,
                      className: l(`gap-1`, m && `text-primary`),
                      onClick: async () => {
                        if (!y) {
                          if (!i) {
                            d(
                              I(
                                `${window.location.pathname}${window.location.search}`,
                                `play_gate`,
                              ),
                            );
                            return;
                          }
                          S(!0);
                          try {
                            m
                              ? (await te(e._id),
                                h(!1),
                                v((e) => Math.max(0, e - 1)))
                              : (await b(e._id), h(!0), v((e) => e + 1));
                          } catch (e) {
                            console.error(`Error updating comment like:`, e);
                          } finally {
                            S(!1);
                          }
                        }
                      },
                      disabled: y,
                      children: [
                        (0, H.jsx)(_, {
                          className: l(
                            `h-4 w-4`,
                            m && `fill-primary text-primary`,
                          ),
                        }),
                        g,
                      ],
                    }),
                    !s &&
                      (0, H.jsxs)(p, {
                        variant: `ghost`,
                        size: `sm`,
                        className: l(`gap-1`, O && `text-primary`),
                        onClick: () => {
                          if (!i) {
                            d(
                              I(
                                `${window.location.pathname}${window.location.search}`,
                                `play_gate`,
                              ),
                            );
                            return;
                          }
                          A((e) => !e);
                        },
                        children: [
                          (0, H.jsx)(Ce, { className: `h-4 w-4` }),
                          E.length > 0 ? E.length : c(`game.reply`, `Reply`),
                        ],
                      }),
                    re &&
                      (0, H.jsx)(p, {
                        variant: `ghost`,
                        size: `sm`,
                        className: `gap-1 text-muted-foreground hover:text-destructive`,
                        onClick: () => T(!0),
                        disabled: ne,
                        children: (0, H.jsx)(he, { className: `h-4 w-4` }),
                      }),
                  ],
                }),
                !s &&
                  (O || E.length > 0) &&
                  (0, H.jsxs)(`div`, {
                    className: `mt-3 space-y-3 border-l-2 border-muted pl-3`,
                    children: [
                      O &&
                        (0, H.jsx)(Ot, {
                          gameId: t,
                          parentId: e._id,
                          placeholder: c(`game.replyToPlaceholder`, {
                            name: e.user.name,
                          }),
                          submitLabel: c(`game.reply`, `Reply`),
                          autoFocus: !0,
                          onCommentAdded: (e) => {
                            (D((t) => [...t, e]), A(!1));
                          },
                          onCancel: () => A(!1),
                        }),
                      E.map((e) =>
                        (0, H.jsx)(
                          kt,
                          {
                            comment: e,
                            gameId: t,
                            currentUserId: n,
                            isAuthenticated: i,
                            onDeleted: (e) =>
                              D((t) => t.filter((t) => t._id !== e)),
                            isReply: !0,
                          },
                          e._id,
                        ),
                      ),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, H.jsx)(_e, {}),
        (0, H.jsx)(Le, {
          open: w,
          onOpenChange: T,
          onConfirm: async () => {
            if (!(ne || !re)) {
              (T(!1), C(!0));
              try {
                (await x(e._id), a(e._id));
              } catch (e) {
                (console.error(`Error deleting comment:`, e),
                  f({
                    title: c(
                      `game.toast.deleteFailed`,
                      `Failed to delete comment.`,
                    ),
                    variant: `destructive`,
                  }));
              } finally {
                C(!1);
              }
            }
          },
          title: c(`game.deleteCommentTitle`, `Delete comment?`),
          description: c(
            `game.deleteCommentDescription`,
            `This comment will be permanently removed. This action cannot be undone.`,
          ),
          confirmLabel: c(`game.delete`, `Delete`),
          confirmVariant: `destructive`,
          icon: (0, H.jsx)(he, { className: `h-5 w-5` }),
        }),
      ],
    })
  );
}
export { Et as Game };
