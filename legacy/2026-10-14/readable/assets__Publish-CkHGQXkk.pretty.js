import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { a as o, i as s, n as c, t as l } from "./dist-CA4uZW3H.js";
import { l as u, m as ee } from "./AuthService-CQeU_0bQ.js";
import { t as d } from "./dist-p2cW4AiE.js";
import { t as f } from "./dist-DkIQBCKf.js";
import { t as p } from "./button-Ap3ysi5G.js";
import {
  a as m,
  c as h,
  n as g,
  r as _,
  s as v,
  t as y,
} from "./switch-DR7KWk3q.js";
import { t as te } from "./circle-check-BVtsIJ9N.js";
import { n as b, t as x } from "./settings-2-Clz1ZubR.js";
import { n as ne, t as re } from "./lock-CAG5RccF.js";
import { t as S } from "./loader-circle-DBFTFT2k.js";
import { t as C } from "./rotate-ccw-FK7vjwP0.js";
import {
  a as ie,
  c as ae,
  i as w,
  n as oe,
  o as se,
  s as ce,
  t as le,
} from "./leaderboards-Bl1Xg4fx.js";
import { t as ue } from "./apiConfig-cGsbt6Be.js";
import { t as T } from "./useTranslation-BdauNPOZ.js";
import { t as de } from "./dist-IS-98_QU.js";
import { t as fe } from "./formatDistanceToNow-DhpKhUbk.js";
import { x as pe } from "./gameCreation-7QUnbwLk.js";
import {
  $ as me,
  H as E,
  L as he,
  V as D,
  X as O,
  Z as ge,
  _ as _e,
  c as ve,
  dt as ye,
  et as k,
  i as be,
  s as xe,
} from "./index-BKDksszn.js";
import { t as Se } from "./textarea-D_1TMYK2.js";
import {
  a as A,
  i as Ce,
  n as j,
  o as M,
  r as N,
  t as P,
} from "./card-DLIi0Qe8.js";
import {
  a as we,
  c as Te,
  i as Ee,
  n as De,
  o as Oe,
  r as ke,
  s as Ae,
  t as je,
} from "./alert-dialog-BwlBTuHq.js";
import { t as F } from "./confirm-dialog-B_bgaQuk.js";
import {
  i as Me,
  n as Ne,
  o as Pe,
  r as Fe,
  s as Ie,
  t as Le,
} from "./publish-IuClGqz5.js";
import { t as Re } from "./badge-B4-vVyqh.js";
var I = e(t(), 1),
  L = n(),
  R = Object.defineProperty,
  z = (e, t) => R(e, `name`, { value: t, configurable: !0 }),
  B = `Collapsible`,
  [V, ze] = s(B),
  [H, U] = V(B),
  Be = I.forwardRef(
    z(function (e, t) {
      let {
          __scopeCollapsible: n,
          open: r,
          defaultOpen: i,
          disabled: a,
          onOpenChange: o,
          ...s
        } = e,
        [c, l] = f({ prop: r, defaultProp: i ?? !1, onChange: o, caller: B });
      return (0, L.jsx)(H, {
        scope: n,
        disabled: a,
        contentId: de(),
        open: c,
        onOpenToggle: I.useCallback(() => l((e) => !e), [l]),
        children: (0, L.jsx)(d.div, {
          "data-state": K(c),
          "data-disabled": a ? `` : void 0,
          ...s,
          ref: t,
        }),
      });
    }, `Collapsible`),
  ),
  W = `CollapsibleTrigger`,
  Ve = I.forwardRef(
    z(function (e, t) {
      let { __scopeCollapsible: n, ...r } = e,
        i = U(W, n);
      return (0, L.jsx)(d.button, {
        type: `button`,
        "aria-controls": i.open ? i.contentId : void 0,
        "aria-expanded": i.open || !1,
        "data-state": K(i.open),
        "data-disabled": i.disabled ? `` : void 0,
        disabled: i.disabled,
        ...r,
        ref: t,
        onClick: o(e.onClick, i.onOpenToggle),
      });
    }, `CollapsibleTrigger`),
  ),
  G = `CollapsibleContent`,
  He = I.forwardRef(
    z(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = U(G, e.__scopeCollapsible);
      return (0, L.jsx)(l, {
        present: n || i.open,
        children: ({ present: e }) =>
          (0, L.jsx)(Ue, { ...r, ref: t, present: e }),
      });
    }, `CollapsibleContent`),
  ),
  Ue = I.forwardRef(
    z(function (e, t) {
      let { __scopeCollapsible: n, present: r, children: i, ...a } = e,
        o = U(G, n),
        [s, l] = I.useState(r),
        u = I.useRef(null),
        f = ee(t, u),
        p = I.useRef(0),
        m = p.current,
        h = I.useRef(0),
        g = h.current,
        _ = o.open || s,
        v = I.useRef(_),
        y = I.useRef(void 0);
      return (
        I.useEffect(() => {
          let e = requestAnimationFrame(() => (v.current = !1));
          return () => cancelAnimationFrame(e);
        }, []),
        c(() => {
          let e = u.current;
          if (e) {
            ((y.current = y.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName,
            }),
              (e.style.transitionDuration = `0s`),
              (e.style.animationName = `none`));
            let t = e.getBoundingClientRect();
            ((p.current = t.height),
              (h.current = t.width),
              v.current ||
                ((e.style.transitionDuration = y.current.transitionDuration),
                (e.style.animationName = y.current.animationName)),
              l(r));
          }
        }, [o.open, r]),
        (0, L.jsx)(d.div, {
          "data-state": K(o.open),
          "data-disabled": o.disabled ? `` : void 0,
          id: o.contentId,
          hidden: !_,
          ...a,
          ref: f,
          style: {
            "--radix-collapsible-content-height": m ? `${m}px` : void 0,
            "--radix-collapsible-content-width": g ? `${g}px` : void 0,
            ...e.style,
          },
          children: _ && i,
        })
      );
    }, `CollapsibleContentImpl`),
  );
function K(e) {
  return e ? `open` : `closed`;
}
z(K, `getState`);
var We = Be,
  Ge = Ve,
  Ke = He,
  qe = [`max`, `min`, `sum`, `count`, `avg`, `latest`],
  Je = [`all`, `daily`, `weekly`, `monthly`],
  q = `player`;
function Ye({ gameId: e, manifestStatus: t }) {
  let { t: n } = T(),
    { toast: r } = a(),
    [i, o] = (0, I.useState)(null),
    [s, c] = (0, I.useState)(!1),
    [l, u] = (0, I.useState)(!1),
    [ee, d] = (0, I.useState)(null),
    [f, m] = (0, I.useState)(!1),
    [h, g] = (0, I.useState)(null),
    [_, v] = (0, I.useState)(null),
    te = (0, I.useCallback)(async () => {
      if (e) {
        (c(!0), d(null));
        try {
          o(await w(e));
        } catch (e) {
          d(e instanceof Error ? e.message : String(e));
        } finally {
          c(!1);
        }
      }
    }, [e]);
  (0, I.useEffect)(() => {
    te();
  }, [te]);
  let b = async (e, t) => {
    u(!0);
    try {
      (await e(), await te(), t && r({ title: t }));
    } catch (e) {
      r({
        title: n(`publish.leaderboardSaveFailed`, `Could not save`),
        description: e instanceof Error ? e.message : String(e),
        variant: `destructive`,
      });
    } finally {
      u(!1);
    }
  };
  if (!e)
    return (0, L.jsxs)(J, {
      children: [
        (0, L.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: n(
            `publish.leaderboardPublishFirst`,
            `Publish once to set up leaderboards for this game.`,
          ),
        }),
        (0, L.jsx)(Xe, { status: t }),
      ],
    });
  if (s && !i)
    return (0, L.jsx)(J, {
      children: (0, L.jsxs)(`p`, {
        className: `flex items-center gap-2 text-sm text-muted-foreground`,
        children: [
          (0, L.jsx)(S, { className: `h-4 w-4 animate-spin` }),
          n(`publish.leaderboardLoading`, `Loading leaderboard settings…`),
        ],
      }),
    });
  if (ee)
    return (0, L.jsx)(J, {
      children: (0, L.jsx)(`p`, {
        className: `text-sm text-destructive`,
        children: ee,
      }),
    });
  let x = i?.manifest ?? null,
    ne = Object.keys(x?.metrics ?? {}),
    re = Object.keys(x?.dimensions ?? {});
  return (0, L.jsxs)(J, {
    children: [
      (0, L.jsxs)(`div`, {
        className: `flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4`,
        children: [
          (0, L.jsxs)(`div`, {
            children: [
              (0, L.jsx)(`p`, {
                className: `text-sm font-medium text-foreground`,
                children: n(`publish.leaderboard`, `Leaderboard`),
              }),
              (0, L.jsx)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: n(
                  `publish.leaderboardDesc`,
                  `Track top players to boost replayability.`,
                ),
              }),
            ],
          }),
          (0, L.jsx)(y, {
            checked: !!i?.enabled,
            disabled: l || !x,
            onCheckedChange: (t) =>
              b(
                () => se(e, t),
                t
                  ? n(`publish.leaderboardOn`, `Leaderboards are on`)
                  : n(`publish.leaderboardOff`, `Leaderboards are off`),
              ),
          }),
        ],
      }),
      i?.manifest_error &&
        (0, L.jsxs)(`p`, {
          className: `text-xs text-destructive`,
          children: [
            n(
              `publish.leaderboardManifestInvalid`,
              `This game's leaderboard file is invalid:`,
            ),
            ` `,
            i.manifest_error,
          ],
        }),
      !x &&
        !i?.manifest_error &&
        (0, L.jsx)(`p`, {
          className: `text-xs text-muted-foreground`,
          children: n(
            `publish.leaderboardNoManifest`,
            `This build ships no sandscape.leaderboard.json, so there is nothing to rank yet. Ask the assistant to "add a leaderboard", then publish again.`,
          ),
        }),
      x &&
        (0, L.jsxs)(`div`, {
          className: `space-y-3`,
          children: [
            (0, L.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, L.jsx)(D, {
                  className: `text-xs uppercase tracking-wide text-muted-foreground`,
                  children: n(`publish.leaderboardBoards`, `Boards`),
                }),
                (0, L.jsxs)(p, {
                  type: `button`,
                  variant: `outline`,
                  size: `sm`,
                  disabled: l || f,
                  onClick: () => m(!0),
                  children: [
                    (0, L.jsx)(k, { className: `mr-1 h-3.5 w-3.5` }),
                    n(`publish.leaderboardAddBoard`, `Add board`),
                  ],
                }),
              ],
            }),
            i.boards.length === 0 &&
              !f &&
              (0, L.jsx)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: n(
                  `publish.leaderboardNoBoards`,
                  `No boards yet. Add one, or publish a build whose manifest declares some.`,
                ),
              }),
            i.boards.map((t, n) =>
              (0, L.jsx)(
                Ze,
                {
                  board: t,
                  metricKeys: ne,
                  dimensionKeys: re,
                  manifest: x,
                  busy: l,
                  isFirst: n === 0,
                  isLast: n === i.boards.length - 1,
                  onPatch: (n) => b(() => ce(e, t.id, n)),
                  onReset: () => v(t),
                  onDelete: () => g(t),
                },
                t.id,
              ),
            ),
            f &&
              (0, L.jsx)(Qe, {
                metricKeys: ne,
                dimensionKeys: re,
                manifest: x,
                busy: l,
                onCancel: () => m(!1),
                onCreate: async (t) => {
                  (await b(
                    () => le(e, t),
                    n(`publish.leaderboardBoardAdded`, `Board added`),
                  ),
                    m(!1));
                },
              }),
          ],
        }),
      (0, L.jsx)(F, {
        open: _ !== null,
        onOpenChange: (e) => !e && v(null),
        title: n(`publish.leaderboardReset`, `Reset this board?`),
        description: n(
          `publish.leaderboardResetConfirm`,
          `The board starts empty from now on. Results are kept — other boards still count them.`,
        ),
        onConfirm: () => {
          let t = _;
          (v(null),
            t &&
              b(
                () => ie(e, t.id),
                n(`publish.leaderboardResetDone`, `Board reset`),
              ));
        },
      }),
      (0, L.jsx)(F, {
        open: h !== null,
        onOpenChange: (e) => !e && g(null),
        title: n(`publish.leaderboardDelete`, `Delete this board?`),
        description: n(
          `publish.leaderboardDeleteConfirm`,
          `The board disappears from the game page. Results are kept.`,
        ),
        onConfirm: () => {
          let t = h;
          (g(null),
            t &&
              b(
                () => oe(e, t.id),
                n(`publish.leaderboardDeleted`, `Board deleted`),
              ));
        },
      }),
    ],
  });
}
function J({ children: e }) {
  return (0, L.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, L.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, L.jsx)(ae, {
            className: `h-4 w-4 text-primary`,
            "aria-hidden": !0,
          }),
          (0, L.jsx)(`p`, {
            className: `text-sm font-medium text-foreground`,
            children: `Leaderboards`,
          }),
        ],
      }),
      e,
    ],
  });
}
function Xe({ status: e }) {
  let { t } = T();
  return e
    ? e.error
      ? (0, L.jsxs)(`p`, {
          className: `text-xs text-destructive`,
          children: [
            t(
              `publish.leaderboardManifestInvalid`,
              `This game's leaderboard file is invalid:`,
            ),
            ` `,
            e.error,
          ],
        })
      : e.present
        ? (0, L.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: t(
              `publish.leaderboardManifestFound`,
              `This build declares {{count}} board(s).`,
              { count: e.boards },
            ),
          })
        : (0, L.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: t(
              `publish.leaderboardNoManifest`,
              `This build ships no sandscape.leaderboard.json.`,
            ),
          })
    : null;
}
function Ze({
  board: e,
  metricKeys: t,
  dimensionKeys: n,
  manifest: r,
  busy: i,
  onPatch: a,
  onReset: o,
  onDelete: s,
}) {
  let { t: c } = T(),
    [l, u] = (0, I.useState)(e.title);
  return (
    (0, I.useEffect)(() => u(e.title), [e.title]),
    (0, L.jsxs)(`div`, {
      className: `space-y-3 rounded-lg border border-border bg-secondary/20 p-3`,
      children: [
        (0, L.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-2`,
          children: [
            (0, L.jsx)(E, {
              value: l,
              disabled: i,
              onChange: (e) => u(e.target.value),
              onBlur: () => l !== e.title && l.trim() && a({ title: l }),
              className: `h-8 max-w-[16rem] flex-1`,
              "aria-label": c(`publish.leaderboardBoardTitle`, `Board title`),
            }),
            (0, L.jsx)(Re, {
              variant: e.origin === `manifest` ? `secondary` : `outline`,
              children:
                e.origin === `manifest`
                  ? c(`publish.leaderboardOriginManifest`, `From the game`)
                  : c(`publish.leaderboardOriginCreator`, `Yours`),
            }),
            (0, L.jsx)(y, {
              checked: e.enabled,
              disabled: i,
              onCheckedChange: (e) => a({ enabled: e }),
              "aria-label": c(
                `publish.leaderboardBoardEnabled`,
                `Show this board`,
              ),
            }),
          ],
        }),
        (0, L.jsxs)(`div`, {
          className: `grid grid-cols-2 gap-2 sm:grid-cols-4`,
          children: [
            (0, L.jsx)(Y, {
              label: c(`publish.leaderboardGroupBy`, `Rank`),
              children: (0, L.jsxs)(g, {
                value: e.group_by,
                disabled: i,
                onValueChange: (e) => a({ group_by: e }),
                children: [
                  (0, L.jsx)(v, {
                    className: `h-8 text-xs`,
                    children: (0, L.jsx)(h, {}),
                  }),
                  (0, L.jsxs)(_, {
                    children: [
                      (0, L.jsx)(m, {
                        value: q,
                        children: c(`publish.leaderboardByPlayer`, `Players`),
                      }),
                      n.map((e) =>
                        (0, L.jsx)(
                          m,
                          { value: e, children: r.dimensions[e]?.label ?? e },
                          e,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
            (0, L.jsx)(Y, {
              label: c(`publish.leaderboardAggregate`, `By`),
              children: (0, L.jsxs)(g, {
                value: e.aggregate,
                disabled: i,
                onValueChange: (n) =>
                  a(
                    n === `count`
                      ? { aggregate: n, clear_metric: !0 }
                      : { aggregate: n, ...(e.metric ? {} : { metric: t[0] }) },
                  ),
                children: [
                  (0, L.jsx)(v, {
                    className: `h-8 text-xs`,
                    children: (0, L.jsx)(h, {}),
                  }),
                  (0, L.jsx)(_, {
                    children: qe
                      .filter((e) => e === `count` || t.length > 0)
                      .map((e) =>
                        (0, L.jsx)(
                          m,
                          {
                            value: e,
                            children: c(`publish.leaderboardAggregate_${e}`, e),
                          },
                          e,
                        ),
                      ),
                  }),
                ],
              }),
            }),
            e.aggregate !== `count` &&
              (0, L.jsx)(Y, {
                label: c(`publish.leaderboardMetric`, `Metric`),
                children: (0, L.jsxs)(g, {
                  value: e.metric ?? void 0,
                  disabled: i || t.length === 0,
                  onValueChange: (e) => a({ metric: e }),
                  children: [
                    (0, L.jsx)(v, {
                      className: `h-8 text-xs`,
                      children: (0, L.jsx)(h, {}),
                    }),
                    (0, L.jsx)(_, {
                      children: t.map((e) =>
                        (0, L.jsx)(
                          m,
                          { value: e, children: r.metrics[e]?.label ?? e },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            (0, L.jsx)(Y, {
              label: c(`publish.leaderboardPeriod`, `Window`),
              children: (0, L.jsxs)(g, {
                value: e.period,
                disabled: i,
                onValueChange: (e) => a({ period: e }),
                children: [
                  (0, L.jsx)(v, {
                    className: `h-8 text-xs`,
                    children: (0, L.jsx)(h, {}),
                  }),
                  (0, L.jsx)(_, {
                    children: Je.map((e) =>
                      (0, L.jsx)(
                        m,
                        { value: e, children: c(`leaderboard.period.${e}`, e) },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
        e.origin === `manifest` &&
          (0, L.jsx)(`p`, {
            className: `text-[11px] text-muted-foreground`,
            children: c(
              `publish.leaderboardManifestOwned`,
              `This board comes from the game. Changing anything here — including hiding it — makes it yours, and future builds will stop updating it.`,
            ),
          }),
        (0, L.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, L.jsxs)(p, {
              type: `button`,
              variant: `ghost`,
              size: `sm`,
              disabled: i,
              onClick: o,
              children: [
                (0, L.jsx)(C, { className: `mr-1 h-3.5 w-3.5` }),
                c(`publish.leaderboardResetAction`, `Reset`),
              ],
            }),
            e.origin === `creator` &&
              (0, L.jsxs)(p, {
                type: `button`,
                variant: `ghost`,
                size: `sm`,
                disabled: i,
                onClick: s,
                className: `text-destructive hover:text-destructive`,
                children: [
                  (0, L.jsx)(O, { className: `mr-1 h-3.5 w-3.5` }),
                  c(`publish.leaderboardDeleteAction`, `Delete`),
                ],
              }),
          ],
        }),
      ],
    })
  );
}
function Qe({
  metricKeys: e,
  dimensionKeys: t,
  manifest: n,
  busy: r,
  onCancel: i,
  onCreate: a,
}) {
  let { t: o } = T(),
    [s, c] = (0, I.useState)({
      title: ``,
      group_by: e.length > 0 ? q : (t[0] ?? q),
      metric: e[0] ?? null,
      aggregate: e.length > 0 ? `max` : `count`,
    }),
    l =
      s.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, `-`)
        .replace(/^-+|-+$/g, ``)
        .slice(0, 48) || `board-${Date.now().toString(36)}`,
    u = s.title.trim().length > 0 && (s.aggregate === `count` || !!s.metric);
  return (0, L.jsxs)(`div`, {
    className: `space-y-3 rounded-lg border border-dashed border-border p-3`,
    children: [
      (0, L.jsx)(E, {
        autoFocus: !0,
        value: s.title,
        disabled: r,
        placeholder: o(`publish.leaderboardBoardTitle`, `Board title`),
        onChange: (e) => c({ ...s, title: e.target.value }),
        className: `h-8`,
      }),
      (0, L.jsxs)(`div`, {
        className: `grid grid-cols-2 gap-2 sm:grid-cols-3`,
        children: [
          (0, L.jsx)(Y, {
            label: o(`publish.leaderboardGroupBy`, `Rank`),
            children: (0, L.jsxs)(g, {
              value: s.group_by,
              onValueChange: (e) => c({ ...s, group_by: e }),
              children: [
                (0, L.jsx)(v, {
                  className: `h-8 text-xs`,
                  children: (0, L.jsx)(h, {}),
                }),
                (0, L.jsxs)(_, {
                  children: [
                    (0, L.jsx)(m, {
                      value: q,
                      children: o(`publish.leaderboardByPlayer`, `Players`),
                    }),
                    t.map((e) =>
                      (0, L.jsx)(
                        m,
                        { value: e, children: n.dimensions[e]?.label ?? e },
                        e,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          }),
          (0, L.jsx)(Y, {
            label: o(`publish.leaderboardAggregate`, `By`),
            children: (0, L.jsxs)(g, {
              value: s.aggregate,
              onValueChange: (t) =>
                c({
                  ...s,
                  aggregate: t,
                  metric: t === `count` ? null : (s.metric ?? e[0] ?? null),
                }),
              children: [
                (0, L.jsx)(v, {
                  className: `h-8 text-xs`,
                  children: (0, L.jsx)(h, {}),
                }),
                (0, L.jsx)(_, {
                  children: qe.map((e) =>
                    (0, L.jsx)(
                      m,
                      {
                        value: e,
                        children: o(`publish.leaderboardAggregate_${e}`, e),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          }),
          s.aggregate !== `count` &&
            (0, L.jsx)(Y, {
              label: o(`publish.leaderboardMetric`, `Metric`),
              children: (0, L.jsxs)(g, {
                value: s.metric ?? void 0,
                onValueChange: (e) => c({ ...s, metric: e }),
                children: [
                  (0, L.jsx)(v, {
                    className: `h-8 text-xs`,
                    children: (0, L.jsx)(h, {}),
                  }),
                  (0, L.jsx)(_, {
                    children: e.map((e) =>
                      (0, L.jsx)(
                        m,
                        { value: e, children: n.metrics[e]?.label ?? e },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
        ],
      }),
      (0, L.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, L.jsx)(p, {
            type: `button`,
            size: `sm`,
            disabled: r || !u,
            onClick: () =>
              a({
                slug: l,
                title: s.title.trim(),
                group_by: s.group_by,
                metric: s.aggregate === `count` ? null : s.metric,
                aggregate: s.aggregate,
              }),
            children: o(`publish.leaderboardCreate`, `Create`),
          }),
          (0, L.jsx)(p, {
            type: `button`,
            variant: `ghost`,
            size: `sm`,
            disabled: r,
            onClick: i,
            children: o(`publish.leaderboardCancel`, `Cancel`),
          }),
        ],
      }),
    ],
  });
}
function Y({ label: e, children: t }) {
  return (0, L.jsxs)(`div`, {
    className: `space-y-1`,
    children: [
      (0, L.jsx)(D, {
        className: `text-[10px] uppercase tracking-wide text-muted-foreground`,
        children: e,
      }),
      t,
    ],
  });
}
var $e = 0.9;
function et(e) {
  return new Promise((t, n) => {
    let r = URL.createObjectURL(e),
      i = new Image();
    ((i.onload = () => {
      (URL.revokeObjectURL(r), t(i));
    }),
      (i.onerror = () => {
        (URL.revokeObjectURL(r), n(Error(`Could not decode image`)));
      }),
      (i.src = r));
  });
}
async function tt(e, t = 1600) {
  if (e.type === `image/webp` || typeof document > `u`) return e;
  try {
    let n = await et(e),
      r = n.naturalWidth || n.width,
      i = n.naturalHeight || n.height;
    if (!r || !i) return e;
    if (t && Math.max(r, i) > t) {
      let e = t / Math.max(r, i);
      ((r = Math.round(r * e)), (i = Math.round(i * e)));
    }
    let a = document.createElement(`canvas`);
    ((a.width = r), (a.height = i));
    let o = a.getContext(`2d`);
    if (!o) return e;
    ((o.imageSmoothingEnabled = !0),
      (o.imageSmoothingQuality = `high`),
      o.drawImage(n, 0, 0, r, i));
    let s = await new Promise((e) => a.toBlob(e, `image/webp`, $e));
    if (!s || s.type !== `image/webp`) return e;
    let c = e.name.replace(/\.[^./\\]+$/, ``) || `thumbnail`;
    return new File([s], `${c}.webp`, { type: `image/webp` });
  } catch {
    return e;
  }
}
var nt = [
  `Action`,
  `Adventure`,
  `Puzzle`,
  `Strategy`,
  `RPG`,
  `Simulation`,
  `Racing`,
  `Survival`,
];
function rt() {
  return {
    title: ``,
    tagline: ``,
    shortDescription: ``,
    detailedDescription: ``,
    genre: `Action`,
    tags: `AI generated, Sandscape`,
    visibility: `public`,
    platformCompat: `both`,
  };
}
var it = /^session_\d{8}_[0-9a-f]+$/i;
function at(e) {
  let t = (e ?? ``).trim();
  return !t || it.test(t) ? `` : t;
}
function ot(e) {
  return {
    title: e.title || e.name || ``,
    tagline: e.elevator_pitch || e.tagline || ``,
    shortDescription:
      e.elevator_pitch ||
      e.description ||
      e.player_experience ||
      e.unique_hook ||
      ``,
    detailedDescription:
      [
        e.elevator_pitch,
        e.setting_theme,
        e.player_experience,
        e.unique_hook,
        e.narrative_elements,
      ].filter(Boolean).join(`

`) || ``,
    genre: e.genre || e.genre_tags?.[0] || `Action`,
    tags:
      [...(e.genre_tags || []), e.art_style, e.perspective, e.target_audience]
        .filter(Boolean)
        .join(`, `) || `AI generated, Sandscape`,
    visibility: `public`,
    platformCompat: `both`,
  };
}
function st(e, t) {
  return {
    title: t.title ?? e.title,
    tagline: t.tagline ?? e.tagline,
    shortDescription: t.short_description ?? e.shortDescription,
    detailedDescription: t.detailed_description ?? e.detailedDescription,
    genre: t.genre ?? e.genre,
    tags: t.tags?.length ? t.tags.join(`, `) : e.tags,
    visibility: t.visibility ?? e.visibility,
    platformCompat: t.platform_compat ?? e.platformCompat,
  };
}
function X({ children: e }) {
  let { t } = T();
  return (0, L.jsxs)(`div`, {
    className: `relative`,
    title: t(`publish.comingSoon`, `Coming soon`),
    children: [
      (0, L.jsx)(`div`, {
        className: `opacity-40 pointer-events-none select-none`,
        children: e,
      }),
      (0, L.jsx)(`span`, {
        className: `absolute top-1 right-1 text-[9px] uppercase tracking-wider text-muted-foreground bg-secondary px-1.5 py-0.5 rounded`,
        children: t(`publish.soonBadge`, `Soon`),
      }),
    ],
  });
}
var ct = [`image/png`, `image/jpeg`, `image/webp`, `image/gif`],
  lt = 5 * 1024 * 1024,
  ut = [`video/mp4`, `video/quicktime`, `video/webm`],
  dt = 200 * 1024 * 1024;
function Z() {
  let e = r(),
    [t] = i(),
    { toast: n } = a(),
    { t: o, i18n: s } = T(),
    { trackEvent: c } = he(),
    [l, ee] = (0, I.useState)([]),
    d = (0, I.useRef)([]);
  d.current = l;
  let [f, C] = (0, I.useState)(``),
    [ie, ae] = (0, I.useState)(!0),
    [w, oe] = (0, I.useState)(!1),
    [se, ce] = (0, I.useState)(!1),
    [le, de] = (0, I.useState)(!1),
    [O, k] = (0, I.useState)(null),
    [F, R] = (0, I.useState)([]),
    [z, B] = (0, I.useState)(!1),
    [V, ze] = (0, I.useState)(!1),
    [H, U] = (0, I.useState)(null),
    [Be, W] = (0, I.useState)(null),
    [Ve, G] = (0, I.useState)(!1),
    [He, Ue] = (0, I.useState)(!1),
    [K, qe] = (0, I.useState)(null),
    [Je, q] = (0, I.useState)(null),
    [J, Xe] = (0, I.useState)(!1),
    [Ze, Qe] = (0, I.useState)(!1),
    [Y, $e] = (0, I.useState)(``),
    [et, it] = (0, I.useState)(nt),
    [Z, ft] = (0, I.useState)(rt),
    Q = l.find((e) => e.session_id === f)?.status === `completed`,
    pt = z || Ve;
  ((0, I.useEffect)(() => {
    be()
      .then((e) => {
        let t = e.filter((e) => e.status !== `archived`);
        (ee(t), ae(!1));
      })
      .catch((e) => {
        (console.error(`Failed to load projects:`, e), ae(!1));
      });
  }, []),
    (0, I.useEffect)(() => {
      if (ie || l.length === 0) return;
      let e = t.get(`session`);
      if (e) {
        let t = l.find((t) => t.session_id === e);
        if (t) {
          C(t.session_id);
          return;
        }
      }
      f || C(l[0].session_id);
    }, [t, l, ie]),
    (0, I.useEffect)(() => {
      if (!f) return;
      let e = !1;
      return (
        ft(rt()),
        k(null),
        B(!1),
        ze(!1),
        U(null),
        W(null),
        G(!1),
        Ue(!1),
        it(nt),
        oe(!0),
        (async () => {
          let [t, n, r] = await Promise.all([
            Fe(f).catch(
              (e) => (
                console.error(`Failed to load publish readiness:`, e),
                null
              ),
            ),
            Ne(f).catch(
              (e) => (console.error(`Failed to load publish draft:`, e), null),
            ),
            pe
              .getSessionContext(f)
              .catch(
                (e) => (console.error(`Failed to load context:`, e), null),
              ),
          ]);
          if (e) return;
          t &&
            (t.genre_options?.length && it(t.genre_options),
            G(t.has_gameplay),
            Ue(!0),
            qe(t.existing_game?.game_id ?? null),
            q(t.leaderboard_manifest ?? null));
          let i =
              r?.success && r.context ? r.context.game_design_concept : void 0,
            a = i ? ot(i) : rt(),
            o = d.current.find((e) => e.session_id === f);
          o &&
            (a = {
              ...a,
              title: a.title || at(o.name),
              shortDescription: a.shortDescription || o.description || ``,
            });
          let s = t?.existing_game;
          (s &&
            (a = {
              ...a,
              title: s.title || a.title,
              platformCompat: s.platform_compat ?? a.platformCompat,
            }),
            n && (a = st(a, n)),
            ft(a));
          let c = r?.success ? r.context?.thumbnail_path : void 0;
          if (t?.thumbnail_url) k(`${ue.API_BASE_URL}${t.thumbnail_url}`);
          else if (typeof c == `string` && c)
            if (c.startsWith(`http`)) (k(c), R([]));
            else {
              let e = `${ue.API_BASE_URL}/api/game/${f}/generated_assets`;
              (k(`${e}/assets/${c}`), R([`${e}/${c}`]));
            }
        })().finally(() => {
          e || oe(!1);
        }),
        () => {
          e = !0;
        }
      );
    }, [f]));
  let $ = (e, t) => {
      ft((n) => ({ ...n, [e]: t }));
    },
    mt = async () => {
      if (!f || !Z.title.trim()) {
        n({
          title: o(`publish.missingInfo`),
          description: o(`publish.missingInfoDesc`),
        });
        return;
      }
      ce(!0);
      try {
        let t = Z.tags
          .split(`,`)
          .map((e) => e.trim())
          .filter(Boolean);
        Z.genre && !t.includes(Z.genre) && t.unshift(Z.genre);
        let r = await Me({
          session_id: f,
          title: Z.title,
          description: Z.detailedDescription || Z.shortDescription || Z.tagline,
          tags: t,
          visibility: Z.visibility,
          ...(He ? { platform_compat: Z.platformCompat } : {}),
          thumbnail_url: O?.startsWith(`http`) ? O : void 0,
        });
        r.success && r.game_id
          ? (qe(r.game_id),
            (r.is_first_publish ?? !Q) &&
              c(`game_published`, {
                visibility: Z.visibility,
                gameplay_footage: z ? `new_upload` : `existing`,
                creation_surface: `publish_flow`,
              }),
            n({
              title: o(Q ? `publish.updated` : `publish.published`),
              description: o(
                Q ? `publish.updatedDesc` : `publish.publishedDesc`,
              ),
            }),
            e(`/play?g=${r.short_code || r.game_id}`))
          : n({
              title: o(`publish.publishFailed`),
              description:
                r.error ||
                o(`publish.somethingWentWrong`, `Something went wrong`),
            });
      } catch {
        n({
          title: o(`publish.error`),
          description: o(`publish.errorPublish`),
        });
      } finally {
        ce(!1);
      }
    },
    ht = () => {
      F.length > 0 ? (k(F[0]), R(F.slice(1))) : k(null);
    };
  return (0, L.jsxs)(`div`, {
    className: `min-h-[calc(100vh-4rem)] bg-background text-foreground`,
    children: [
      (0, L.jsxs)(`div`, {
        className: `mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-12`,
        children: [
          (0, L.jsxs)(`div`, {
            className: `mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between`,
            children: [
              (0, L.jsxs)(`div`, {
                children: [
                  (0, L.jsx)(`h1`, {
                    className: `text-3xl font-bold tracking-tight text-foreground`,
                    children: o(`publish.title`),
                  }),
                  (0, L.jsx)(`p`, {
                    className: `max-w-2xl text-sm text-muted-foreground`,
                    children: o(`publish.subtitle`),
                  }),
                ],
              }),
              (0, L.jsx)(Re, {
                variant: `secondary`,
                className: `w-fit text-xs uppercase tracking-wide text-muted-foreground`,
                children: o(`publish.creatorConsole`),
              }),
            ],
          }),
          (0, L.jsxs)(`div`, {
            className: `grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]`,
            children: [
              (0, L.jsxs)(P, {
                className: `min-w-0 h-fit xl:sticky xl:top-6`,
                children: [
                  (0, L.jsxs)(A, {
                    children: [
                      (0, L.jsx)(M, {
                        className: `text-lg`,
                        children: o(`publish.yourProjects`),
                      }),
                      (0, L.jsx)(N, {
                        className: `text-muted-foreground`,
                        children: o(`publish.selectProject`),
                      }),
                    ],
                  }),
                  (0, L.jsx)(j, {
                    className: `p-0`,
                    children: (0, L.jsx)(ve, {
                      className: `h-[520px] [&_[data-radix-scroll-area-viewport]>div]:!block`,
                      children: (0, L.jsx)(`div`, {
                        className: `space-y-2 p-4`,
                        children: ie
                          ? (0, L.jsx)(`div`, {
                              className: `flex items-center justify-center p-8`,
                              children: (0, L.jsx)(S, {
                                className: `h-6 w-6 animate-spin text-muted-foreground`,
                              }),
                            })
                          : l.length === 0
                            ? (0, L.jsxs)(`div`, {
                                className: `p-4 text-center text-sm text-muted-foreground`,
                                children: [
                                  (0, L.jsx)(`p`, {
                                    children: o(`publish.noProjects`),
                                  }),
                                  (0, L.jsx)(`p`, {
                                    className: `mt-1`,
                                    children: o(`publish.createFirst`),
                                  }),
                                ],
                              })
                            : l.map((e) =>
                                (0, L.jsxs)(
                                  `button`,
                                  {
                                    onClick: () => C(e.session_id),
                                    className: u(
                                      `w-full rounded-lg border p-4 text-left transition-colors`,
                                      e.session_id === f
                                        ? `border-primary/60 bg-primary/10`
                                        : `border-border bg-secondary/30 hover:border-border hover:bg-secondary/60`,
                                    ),
                                    children: [
                                      (0, L.jsxs)(`div`, {
                                        className: `flex items-start justify-between gap-2`,
                                        children: [
                                          (0, L.jsxs)(`div`, {
                                            className: `min-w-0`,
                                            children: [
                                              (0, L.jsx)(`p`, {
                                                className: `truncate text-sm font-semibold text-foreground`,
                                                children: e.name,
                                              }),
                                              (0, L.jsx)(`p`, {
                                                className: `text-xs text-muted-foreground`,
                                                children: o(
                                                  `publish.updatedAgo`,
                                                  `Updated {{time}}`,
                                                  {
                                                    time: fe(
                                                      new Date(e.updated_at),
                                                      {
                                                        addSuffix: !0,
                                                        locale: xe(s.language),
                                                      },
                                                    ),
                                                  },
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, L.jsx)(Re, {
                                            variant: `outline`,
                                            className: u(
                                              `text-[10px] uppercase`,
                                              e.status === `completed`
                                                ? `border-emerald-500/30 text-emerald-400`
                                                : `border-border text-muted-foreground`,
                                            ),
                                            children:
                                              e.status === `in_progress`
                                                ? o(
                                                    `publish.statusDraft`,
                                                    `draft`,
                                                  )
                                                : e.status === `completed`
                                                  ? o(
                                                      `publish.statusCompleted`,
                                                      `completed`,
                                                    )
                                                  : e.status,
                                          }),
                                        ],
                                      }),
                                      e.description &&
                                        (0, L.jsx)(`p`, {
                                          className: `mt-3 text-xs text-muted-foreground line-clamp-2`,
                                          children: e.description,
                                        }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                      }),
                    }),
                  }),
                  (0, L.jsx)(Ce, {
                    className: `flex flex-col gap-2 border-t border-border text-xs text-muted-foreground`,
                    children: (0, L.jsxs)(`div`, {
                      className: `flex w-full items-center justify-between`,
                      children: [
                        (0, L.jsx)(`span`, {
                          children: o(`publish.needNewSlot`),
                        }),
                        (0, L.jsx)(p, {
                          variant: `ghost`,
                          size: `sm`,
                          className: `text-xs text-muted-foreground hover:text-foreground`,
                          onClick: () => e(`/create`),
                          children: o(`publish.createNewProject`),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: `space-y-6`,
                children: [
                  w &&
                    (0, L.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-sm text-muted-foreground`,
                      children: [
                        (0, L.jsx)(S, { className: `h-4 w-4 animate-spin` }),
                        o(`publish.loadingProject`),
                      ],
                    }),
                  (0, L.jsxs)(P, {
                    children: [
                      (0, L.jsx)(A, {
                        className: `pb-6`,
                        children: (0, L.jsxs)(`div`, {
                          className: `flex items-start justify-between gap-4`,
                          children: [
                            (0, L.jsxs)(`div`, {
                              children: [
                                (0, L.jsx)(M, {
                                  className: `text-lg`,
                                  children: o(`publish.launchDetails`),
                                }),
                                (0, L.jsx)(N, {
                                  className: `text-muted-foreground`,
                                  children: o(`publish.launchDetailsDesc`),
                                }),
                              ],
                            }),
                            (0, L.jsx)(`span`, {
                              className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground`,
                              children: (0, L.jsx)(ge, {
                                className: `h-5 w-5`,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, L.jsxs)(j, {
                        className: `space-y-6`,
                        children: [
                          (0, L.jsxs)(`div`, {
                            className: `grid gap-4 md:grid-cols-2`,
                            children: [
                              (0, L.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, L.jsx)(D, {
                                    htmlFor: `title`,
                                    children: o(`publish.gameTitle`),
                                  }),
                                  (0, L.jsx)(E, {
                                    id: `title`,
                                    value: Z.title,
                                    onChange: (e) => $(`title`, e.target.value),
                                    placeholder: o(
                                      `publish.gameTitlePlaceholder`,
                                    ),
                                    disabled: w,
                                  }),
                                ],
                              }),
                              (0, L.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, L.jsx)(D, {
                                    htmlFor: `tagline`,
                                    children: o(`publish.tagline`),
                                  }),
                                  (0, L.jsx)(E, {
                                    id: `tagline`,
                                    value: Z.tagline,
                                    onChange: (e) =>
                                      $(`tagline`, e.target.value),
                                    placeholder: o(
                                      `publish.taglinePlaceholder`,
                                    ),
                                    disabled: w,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, L.jsxs)(`div`, {
                            className: `grid gap-4 md:grid-cols-2`,
                            children: [
                              (0, L.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, L.jsx)(D, {
                                    htmlFor: `genre`,
                                    children: o(`publish.primaryGenre`),
                                  }),
                                  (0, L.jsxs)(g, {
                                    value: Z.genre,
                                    onValueChange: (e) => $(`genre`, e),
                                    disabled: w,
                                    children: [
                                      (0, L.jsx)(v, {
                                        id: `genre`,
                                        children: (0, L.jsx)(h, {
                                          placeholder: o(`publish.chooseGenre`),
                                        }),
                                      }),
                                      (0, L.jsx)(_, {
                                        children: et.map((e) =>
                                          (0, L.jsx)(
                                            m,
                                            { value: e, children: e },
                                            e,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, L.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, L.jsx)(D, {
                                    htmlFor: `platformCompat`,
                                    children: o(
                                      `publish.compatibility`,
                                      `Compatibility`,
                                    ),
                                  }),
                                  (0, L.jsxs)(g, {
                                    value: Z.platformCompat,
                                    onValueChange: (e) =>
                                      $(`platformCompat`, e),
                                    disabled: w,
                                    children: [
                                      (0, L.jsx)(v, {
                                        id: `platformCompat`,
                                        children: (0, L.jsx)(h, {}),
                                      }),
                                      (0, L.jsxs)(_, {
                                        children: [
                                          (0, L.jsx)(m, {
                                            value: `both`,
                                            children: o(
                                              `publish.compatibilityBoth`,
                                              `Desktop & Mobile`,
                                            ),
                                          }),
                                          (0, L.jsx)(m, {
                                            value: `desktop`,
                                            children: o(
                                              `publish.compatibilityDesktop`,
                                              `Desktop only`,
                                            ),
                                          }),
                                          (0, L.jsx)(m, {
                                            value: `mobile`,
                                            children: o(
                                              `publish.compatibilityMobile`,
                                              `Mobile only`,
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, L.jsx)(`p`, {
                                    className: `text-[11px] text-muted-foreground`,
                                    children: o(
                                      `publish.compatibilityHint`,
                                      `Which devices your controls actually work on. Players see this before they launch.`,
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, L.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, L.jsx)(D, {
                                htmlFor: `tags`,
                                children: o(`publish.tags`),
                              }),
                              (0, L.jsx)(E, {
                                id: `tags`,
                                value: Z.tags,
                                onChange: (e) => $(`tags`, e.target.value),
                                placeholder: o(`publish.tagsPlaceholder`),
                                disabled: w,
                              }),
                            ],
                          }),
                          (0, L.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, L.jsx)(D, {
                                htmlFor: `shortDescription`,
                                children: o(`publish.shortDescription`),
                              }),
                              (0, L.jsx)(Se, {
                                id: `shortDescription`,
                                value: Z.shortDescription,
                                onChange: (e) =>
                                  $(`shortDescription`, e.target.value),
                                placeholder: o(
                                  `publish.shortDescriptionPlaceholder`,
                                ),
                                rows: 3,
                                disabled: w,
                              }),
                            ],
                          }),
                          (0, L.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, L.jsx)(D, {
                                htmlFor: `detailedDescription`,
                                children: o(`publish.detailedDescription`),
                              }),
                              (0, L.jsx)(Se, {
                                id: `detailedDescription`,
                                value: Z.detailedDescription,
                                onChange: (e) =>
                                  $(`detailedDescription`, e.target.value),
                                placeholder: o(
                                  `publish.detailedDescriptionPlaceholder`,
                                ),
                                rows: 6,
                                disabled: w,
                              }),
                            ],
                          }),
                          (0, L.jsxs)(`div`, {
                            className: `grid gap-4 md:grid-cols-2`,
                            children: [
                              (0, L.jsxs)(`div`, {
                                className: `space-y-3`,
                                children: [
                                  (0, L.jsx)(D, {
                                    children: o(`publish.coverArt`),
                                  }),
                                  (0, L.jsxs)(`div`, {
                                    className: `rounded-lg border border-dashed border-border bg-secondary/30 p-4 text-center`,
                                    children: [
                                      O
                                        ? (0, L.jsx)(`img`, {
                                            src: O,
                                            alt: o(
                                              `publish.coverArtPreviewAlt`,
                                              `Cover art preview`,
                                            ),
                                            className: `mx-auto max-h-48 rounded-lg object-cover`,
                                            onError: ht,
                                          })
                                        : (0, L.jsxs)(L.Fragment, {
                                            children: [
                                              (0, L.jsx)(ne, {
                                                className: `mx-auto h-8 w-8 text-muted-foreground`,
                                              }),
                                              (0, L.jsx)(`p`, {
                                                className: `mt-2 text-xs text-muted-foreground`,
                                                children: o(
                                                  `publish.coverArtUpload`,
                                                ),
                                              }),
                                            ],
                                          }),
                                      (0, L.jsxs)(`div`, {
                                        className: `mt-3 space-y-2`,
                                        children: [
                                          (0, L.jsx)(E, {
                                            value: Y,
                                            onChange: (e) => $e(e.target.value),
                                            placeholder: o(
                                              `publish.thumbnailPromptPlaceholder`,
                                            ),
                                            className: `text-xs`,
                                          }),
                                          (0, L.jsxs)(`div`, {
                                            className: `flex gap-2 justify-center`,
                                            children: [
                                              (0, L.jsxs)(p, {
                                                type: `button`,
                                                variant: `outline`,
                                                size: `sm`,
                                                onClick: async () => {
                                                  if (f) {
                                                    de(!0);
                                                    try {
                                                      let e = await Le(
                                                        f,
                                                        Y || void 0,
                                                      );
                                                      if (
                                                        e.success &&
                                                        e.thumbnail_url
                                                      ) {
                                                        let t =
                                                          e.thumbnail_url.startsWith(
                                                            `http`,
                                                          )
                                                            ? e.thumbnail_url
                                                            : `${ue.API_BASE_URL}${e.thumbnail_url}`;
                                                        (k(t),
                                                          R([]),
                                                          n({
                                                            title: o(
                                                              `publish.thumbnailGenerated`,
                                                            ),
                                                            description: o(
                                                              `publish.thumbnailReady`,
                                                            ),
                                                          }));
                                                      } else
                                                        n({
                                                          title: o(
                                                            `publish.generationFailed`,
                                                          ),
                                                          description:
                                                            e.error ||
                                                            o(
                                                              `publish.generationFailedDesc`,
                                                            ),
                                                        });
                                                    } catch {
                                                      n({
                                                        title:
                                                          o(`publish.error`),
                                                        description: o(
                                                          `publish.errorThumbnail`,
                                                        ),
                                                      });
                                                    } finally {
                                                      de(!1);
                                                    }
                                                  }
                                                },
                                                disabled: !f || le,
                                                className: `gap-1`,
                                                children: [
                                                  le
                                                    ? (0, L.jsx)(S, {
                                                        className: `h-3 w-3 animate-spin`,
                                                      })
                                                    : (0, L.jsx)(ge, {
                                                        className: `h-3 w-3`,
                                                      }),
                                                  o(
                                                    le
                                                      ? `publish.generating`
                                                      : `publish.generate`,
                                                  ),
                                                ],
                                              }),
                                              (0, L.jsx)(p, {
                                                type: `button`,
                                                variant: `outline`,
                                                size: `sm`,
                                                className: `gap-1`,
                                                asChild: !0,
                                                children: (0, L.jsxs)(`label`, {
                                                  htmlFor: `heroArt`,
                                                  className: `cursor-pointer`,
                                                  children: [
                                                    (0, L.jsx)(ne, {
                                                      className: `h-3 w-3`,
                                                    }),
                                                    o(`publish.upload`),
                                                  ],
                                                }),
                                              }),
                                              (0, L.jsx)(E, {
                                                id: `heroArt`,
                                                type: `file`,
                                                accept: `image/png,image/jpeg,image/webp,image/gif`,
                                                className: `hidden`,
                                                onChange: async (e) => {
                                                  let t = e.target.files?.[0];
                                                  if (
                                                    ((e.target.value = ``),
                                                    !(!t || !f))
                                                  ) {
                                                    if (!ct.includes(t.type)) {
                                                      n({
                                                        title: o(
                                                          `publish.invalidFileType`,
                                                        ),
                                                        description: o(
                                                          `publish.invalidFileTypeDesc`,
                                                        ),
                                                      });
                                                      return;
                                                    }
                                                    if (t.size > lt) {
                                                      n({
                                                        title:
                                                          o(
                                                            `publish.fileTooLarge`,
                                                          ),
                                                        description: o(
                                                          `publish.fileTooLargeDesc`,
                                                        ),
                                                      });
                                                      return;
                                                    }
                                                    try {
                                                      let e = await tt(t),
                                                        r = await Ie(f, e);
                                                      if (
                                                        r.success &&
                                                        r.thumbnail_url
                                                      ) {
                                                        let e =
                                                          r.thumbnail_url.startsWith(
                                                            `http`,
                                                          )
                                                            ? r.thumbnail_url
                                                            : `${ue.API_BASE_URL}${r.thumbnail_url}`;
                                                        (k(e),
                                                          R([]),
                                                          n({
                                                            title:
                                                              o(
                                                                `publish.uploaded`,
                                                              ),
                                                            description:
                                                              o(
                                                                `publish.uploadedDesc`,
                                                              ),
                                                          }));
                                                      } else
                                                        n({
                                                          title:
                                                            o(
                                                              `publish.uploadFailed`,
                                                            ),
                                                          description:
                                                            r.error ||
                                                            o(
                                                              `publish.uploadFailedDesc`,
                                                            ),
                                                        });
                                                    } catch {
                                                      n({
                                                        title:
                                                          o(
                                                            `publish.uploadFailed`,
                                                          ),
                                                        description: o(
                                                          `publish.uploadFailedDesc`,
                                                        ),
                                                      });
                                                    }
                                                  }
                                                },
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, L.jsxs)(`div`, {
                                className: `space-y-3`,
                                children: [
                                  (0, L.jsxs)(D, {
                                    children: [
                                      o(`publish.previewClip`),
                                      (0, L.jsx)(`span`, {
                                        className: `ml-2 text-[10px] uppercase tracking-wider text-muted-foreground`,
                                        children: o(
                                          `publish.gameplayOptional`,
                                          `Optional`,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, L.jsxs)(`div`, {
                                    className: u(
                                      `rounded-lg border border-dashed bg-secondary/30 p-4 text-center transition-colors`,
                                      pt
                                        ? `border-emerald-500/50`
                                        : H
                                          ? `border-destructive/50`
                                          : `border-border`,
                                    ),
                                    children: [
                                      pt
                                        ? (0, L.jsx)(te, {
                                            className: `mx-auto h-8 w-8 text-emerald-400`,
                                          })
                                        : (0, L.jsx)(b, {
                                            className: `mx-auto h-8 w-8 text-muted-foreground`,
                                          }),
                                      (0, L.jsx)(`p`, {
                                        className: `mt-2 text-xs text-muted-foreground`,
                                        children: z
                                          ? o(
                                              `publish.gameplayReady`,
                                              `Gameplay footage uploaded.`,
                                            )
                                          : Ve
                                            ? o(
                                                `publish.gameplayExisting`,
                                                `Existing gameplay footage will be kept. Upload to replace it.`,
                                              )
                                            : o(`publish.previewClipDesc`),
                                      }),
                                      (0, L.jsx)(`p`, {
                                        className: `mt-1 text-[11px] text-muted-foreground/80`,
                                        children: o(
                                          `publish.gameplayAutoplayHint`,
                                          `Used as the autoplay preview when players hover your game card.`,
                                        ),
                                      }),
                                      Be &&
                                        (0, L.jsx)(`p`, {
                                          className: `mt-1 truncate text-[11px] text-muted-foreground`,
                                          title: Be,
                                          children: Be,
                                        }),
                                      (0, L.jsxs)(`div`, {
                                        className: `mt-3 flex justify-center`,
                                        children: [
                                          (0, L.jsx)(p, {
                                            type: `button`,
                                            variant: `outline`,
                                            size: `sm`,
                                            className: `gap-1`,
                                            disabled: !f || V,
                                            asChild: !V,
                                            children: V
                                              ? (0, L.jsxs)(`span`, {
                                                  className: `inline-flex items-center gap-1`,
                                                  children: [
                                                    (0, L.jsx)(S, {
                                                      className: `h-3 w-3 animate-spin`,
                                                    }),
                                                    o(
                                                      `publish.gameplayConverting`,
                                                      `Converting…`,
                                                    ),
                                                  ],
                                                })
                                              : (0, L.jsxs)(`label`, {
                                                  htmlFor: `gameplayFootage`,
                                                  className: `cursor-pointer`,
                                                  children: [
                                                    (0, L.jsx)(b, {
                                                      className: `h-3 w-3`,
                                                    }),
                                                    pt
                                                      ? o(
                                                          `publish.gameplayReplace`,
                                                          `Replace`,
                                                        )
                                                      : o(`publish.upload`),
                                                  ],
                                                }),
                                          }),
                                          (0, L.jsx)(E, {
                                            id: `gameplayFootage`,
                                            type: `file`,
                                            accept: `video/mp4,video/quicktime,video/webm`,
                                            className: `hidden`,
                                            disabled: V,
                                            onChange: async (e) => {
                                              let t = e.target.files?.[0];
                                              if (
                                                ((e.target.value = ``),
                                                !t || !f)
                                              )
                                                return;
                                              if (
                                                (U(null), !ut.includes(t.type))
                                              ) {
                                                let e = o(
                                                  `publish.invalidVideoTypeDesc`,
                                                  `Use an MP4, MOV, or WebM video file.`,
                                                );
                                                (U(e),
                                                  n({
                                                    title: o(
                                                      `publish.invalidFileType`,
                                                    ),
                                                    description: e,
                                                  }));
                                                return;
                                              }
                                              if (t.size > dt) {
                                                let e = o(
                                                  `publish.gameplayTooLargeDesc`,
                                                  `Gameplay footage must be 200 MB or smaller.`,
                                                );
                                                (U(e),
                                                  n({
                                                    title:
                                                      o(`publish.fileTooLarge`),
                                                    description: e,
                                                  }));
                                                return;
                                              }
                                              let r = o(
                                                `publish.gameplayUploadFailedDesc`,
                                                `We couldn't process that footage. Please try again.`,
                                              );
                                              (ze(!0), B(!1), W(t.name));
                                              try {
                                                let e = await Pe(f, t);
                                                e.success
                                                  ? (B(!0),
                                                    n({
                                                      title: o(
                                                        `publish.gameplayUploaded`,
                                                        `Footage uploaded`,
                                                      ),
                                                      description: o(
                                                        `publish.gameplayUploadedDesc`,
                                                        `Your gameplay preview is ready.`,
                                                      ),
                                                    }))
                                                  : (W(null),
                                                    U(e.error || r),
                                                    n({
                                                      title:
                                                        o(
                                                          `publish.uploadFailed`,
                                                        ),
                                                      description: e.error || r,
                                                    }));
                                              } catch {
                                                (W(null),
                                                  U(r),
                                                  n({
                                                    title:
                                                      o(`publish.uploadFailed`),
                                                    description: r,
                                                  }));
                                              } finally {
                                                ze(!1);
                                              }
                                            },
                                          }),
                                        ],
                                      }),
                                      H &&
                                        (0, L.jsx)(`p`, {
                                          className: `mt-2 text-[11px] text-red-400`,
                                          children: H,
                                        }),
                                      !pt &&
                                        !H &&
                                        (0, L.jsx)(`p`, {
                                          className: `mt-2 text-[11px] text-primary`,
                                          children: o(
                                            `publish.gameplayEncouragement`,
                                            `You can publish without it, but games with gameplay footage get played far more often.`,
                                          ),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, L.jsxs)(P, {
                    children: [
                      (0, L.jsx)(A, {
                        className: `pb-6`,
                        children: (0, L.jsxs)(`div`, {
                          className: `flex items-start justify-between gap-4`,
                          children: [
                            (0, L.jsxs)(`div`, {
                              children: [
                                (0, L.jsx)(M, {
                                  className: `text-lg`,
                                  children: o(
                                    `publish.distribution`,
                                    `Distribution`,
                                  ),
                                }),
                                (0, L.jsx)(N, {
                                  className: `text-muted-foreground`,
                                  children: o(
                                    `publish.distributionDesc`,
                                    `Decide who can find your game, then send it live.`,
                                  ),
                                }),
                              ],
                            }),
                            (0, L.jsx)(`span`, {
                              className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground`,
                              children: (0, L.jsx)(me, {
                                className: `h-5 w-5`,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, L.jsx)(j, {
                        className: `space-y-6`,
                        children: (0, L.jsxs)(`div`, {
                          className: `flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4`,
                          children: [
                            (0, L.jsxs)(`div`, {
                              children: [
                                (0, L.jsx)(`p`, {
                                  className: `text-sm font-medium text-foreground`,
                                  children: o(`publish.visibility`),
                                }),
                                (0, L.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: o(`publish.visibilityDesc`),
                                }),
                                (0, L.jsx)(`div`, {
                                  className: `mt-3 grid gap-3`,
                                  children: [
                                    {
                                      value: `public`,
                                      label: o(`publish.visibilityPublic`),
                                      description: o(
                                        `publish.visibilityPublicDesc`,
                                      ),
                                    },
                                    {
                                      value: `unlisted`,
                                      label: o(`publish.visibilityUnlisted`),
                                      description: o(
                                        `publish.visibilityUnlistedDesc`,
                                      ),
                                    },
                                  ].map((e) =>
                                    (0, L.jsxs)(
                                      `button`,
                                      {
                                        type: `button`,
                                        disabled: w,
                                        className: u(
                                          `rounded-md border px-3 py-2 text-left text-xs transition-colors disabled:opacity-50`,
                                          Z.visibility === e.value
                                            ? `border-primary/60 bg-primary/10 text-foreground`
                                            : `border-border bg-secondary/30 hover:border-border hover:bg-secondary/60`,
                                        ),
                                        onClick: () => $(`visibility`, e.value),
                                        children: [
                                          (0, L.jsx)(`p`, {
                                            className: `font-medium capitalize`,
                                            children: e.label,
                                          }),
                                          (0, L.jsx)(`p`, {
                                            className: `text-[11px] text-muted-foreground`,
                                            children: e.description,
                                          }),
                                        ],
                                      },
                                      e.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            (0, L.jsx)(re, {
                              className: `h-10 w-10 shrink-0 text-muted-foreground`,
                            }),
                          ],
                        }),
                      }),
                      (0, L.jsxs)(Ce, {
                        className: `flex flex-col gap-4 border-t border-border`,
                        children: [
                          (0, L.jsx)(`div`, {
                            className: `flex flex-col gap-2 text-xs text-muted-foreground`,
                            children: (0, L.jsx)(`p`, {
                              children: o(`publish.moderationHint`),
                            }),
                          }),
                          Q &&
                            (0, L.jsx)(`p`, {
                              className: `text-xs text-amber-400`,
                              children: o(`publish.alreadyLive`),
                            }),
                          (0, L.jsxs)(p, {
                            size: `lg`,
                            className: `w-full gap-2`,
                            onClick: Q ? () => Xe(!0) : mt,
                            disabled: se || !f || !Z.title.trim() || V,
                            children: [
                              se
                                ? (0, L.jsx)(S, {
                                    className: `h-4 w-4 animate-spin`,
                                  })
                                : (0, L.jsx)(me, { className: `h-4 w-4` }),
                              o(
                                se
                                  ? Q
                                    ? `publish.updating`
                                    : `publish.publishing`
                                  : Q
                                    ? `publish.updateButton`
                                    : `publish.publishButton`,
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, L.jsx)(We, {
                    open: Ze,
                    onOpenChange: Qe,
                    asChild: !0,
                    children: (0, L.jsxs)(P, {
                      children: [
                        (0, L.jsx)(Ge, {
                          asChild: !0,
                          children: (0, L.jsx)(`button`, {
                            type: `button`,
                            className: `w-full text-left`,
                            "aria-label": o(
                              `publish.advancedSettings`,
                              `Advanced settings`,
                            ),
                            children: (0, L.jsx)(A, {
                              className: `pb-6`,
                              children: (0, L.jsxs)(`div`, {
                                className: `flex items-start justify-between gap-4`,
                                children: [
                                  (0, L.jsxs)(`div`, {
                                    children: [
                                      (0, L.jsx)(M, {
                                        className: `text-lg`,
                                        children: o(
                                          `publish.advancedSettings`,
                                          `Advanced settings`,
                                        ),
                                      }),
                                      (0, L.jsx)(N, {
                                        className: `text-muted-foreground`,
                                        children: o(
                                          `publish.advancedSettingsDesc`,
                                          `Monetization, ratings and community controls — not live yet, shown here so you know what's coming.`,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, L.jsxs)(`span`, {
                                    className: `flex items-center gap-2 text-muted-foreground`,
                                    children: [
                                      (0, L.jsx)(`span`, {
                                        className: `text-[10px] uppercase tracking-wider`,
                                        children: o(
                                          `publish.soonBadge`,
                                          `Soon`,
                                        ),
                                      }),
                                      (0, L.jsx)(`span`, {
                                        className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary`,
                                        children: (0, L.jsx)(x, {
                                          className: `h-5 w-5`,
                                        }),
                                      }),
                                      (0, L.jsx)(ye, {
                                        className: u(
                                          `h-5 w-5 transition-transform`,
                                          Ze && `rotate-180`,
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, L.jsx)(Ke, {
                          children: (0, L.jsxs)(j, {
                            className: `space-y-6`,
                            children: [
                              (0, L.jsxs)(`div`, {
                                className: `grid gap-4 md:grid-cols-2`,
                                children: [
                                  (0, L.jsx)(X, {
                                    children: (0, L.jsxs)(`div`, {
                                      className: `space-y-2`,
                                      children: [
                                        (0, L.jsx)(D, {
                                          children: o(
                                            `publish.estimatedPlaytime`,
                                          ),
                                        }),
                                        (0, L.jsx)(E, {
                                          value: o(
                                            `publish.estimatedPlaytimeValue`,
                                            `10-15 minutes`,
                                          ),
                                          disabled: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, L.jsx)(X, {
                                    children: (0, L.jsxs)(`div`, {
                                      className: `space-y-2`,
                                      children: [
                                        (0, L.jsx)(D, {
                                          children: o(`publish.ageRating`),
                                        }),
                                        (0, L.jsxs)(g, {
                                          value: `everyone`,
                                          disabled: !0,
                                          children: [
                                            (0, L.jsx)(v, {
                                              children: (0, L.jsx)(h, {}),
                                            }),
                                            (0, L.jsx)(_, {
                                              children: (0, L.jsx)(m, {
                                                value: `everyone`,
                                                children: o(
                                                  `publish.ageRatingEveryone`,
                                                  `Everyone`,
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, L.jsx)(_e, {}),
                              (0, L.jsx)(X, {
                                children: (0, L.jsxs)(`div`, {
                                  className: `grid gap-4 md:grid-cols-2`,
                                  children: [
                                    (0, L.jsxs)(`div`, {
                                      className: `space-y-2`,
                                      children: [
                                        (0, L.jsx)(D, {
                                          children: o(
                                            `publish.accessTier`,
                                            `Access tier`,
                                          ),
                                        }),
                                        (0, L.jsxs)(g, {
                                          value: `free`,
                                          disabled: !0,
                                          children: [
                                            (0, L.jsx)(v, {
                                              children: (0, L.jsx)(h, {}),
                                            }),
                                            (0, L.jsx)(_, {
                                              children: (0, L.jsx)(m, {
                                                value: `free`,
                                                children: o(
                                                  `publish.accessTierFree`,
                                                  `Free to play`,
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, L.jsxs)(`div`, {
                                      className: `space-y-2`,
                                      children: [
                                        (0, L.jsx)(D, {
                                          children: o(
                                            `publish.sandCoinPrice`,
                                            `Sand Coin price`,
                                          ),
                                        }),
                                        (0, L.jsx)(E, {
                                          type: `number`,
                                          placeholder: o(
                                            `publish.sandCoinPricePlaceholder`,
                                            `Set the entry price`,
                                          ),
                                          disabled: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, L.jsx)(X, {
                                children: (0, L.jsxs)(`div`, {
                                  className: `grid gap-4 md:grid-cols-2`,
                                  children: [
                                    (0, L.jsxs)(`div`, {
                                      className: `flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4`,
                                      children: [
                                        (0, L.jsxs)(`div`, {
                                          children: [
                                            (0, L.jsx)(`p`, {
                                              className: `text-sm font-medium text-foreground`,
                                              children: o(
                                                `publish.enableTipping`,
                                                `Enable tipping`,
                                              ),
                                            }),
                                            (0, L.jsx)(`p`, {
                                              className: `text-xs text-muted-foreground`,
                                              children: o(
                                                `publish.enableTippingDesc`,
                                                `Allow fans to drop Sand Coins after play sessions.`,
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, L.jsx)(y, {
                                          checked: !0,
                                          disabled: !0,
                                        }),
                                      ],
                                    }),
                                    (0, L.jsxs)(`div`, {
                                      className: `flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4`,
                                      children: [
                                        (0, L.jsxs)(`div`, {
                                          children: [
                                            (0, L.jsx)(`p`, {
                                              className: `text-sm font-medium text-foreground`,
                                              children: o(
                                                `publish.allowRemixing`,
                                                `Allow remixing`,
                                              ),
                                            }),
                                            (0, L.jsx)(`p`, {
                                              className: `text-xs text-muted-foreground`,
                                              children: o(
                                                `publish.allowRemixingDesc`,
                                                `Collaborators can build variants with attribution.`,
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, L.jsx)(y, {
                                          checked: !0,
                                          disabled: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, L.jsx)(_e, {}),
                              (0, L.jsx)(X, {
                                children: (0, L.jsxs)(`div`, {
                                  className: `space-y-4`,
                                  children: [
                                    (0, L.jsxs)(`div`, {
                                      className: `flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4`,
                                      children: [
                                        (0, L.jsxs)(`div`, {
                                          children: [
                                            (0, L.jsx)(`p`, {
                                              className: `text-sm font-medium text-foreground`,
                                              children: o(
                                                `publish.enableComments`,
                                                `Enable comments`,
                                              ),
                                            }),
                                            (0, L.jsx)(`p`, {
                                              className: `text-xs text-muted-foreground`,
                                              children: o(
                                                `publish.enableCommentsDesc`,
                                                `Open threaded conversations on your game page.`,
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, L.jsx)(y, {
                                          checked: !0,
                                          disabled: !0,
                                        }),
                                      ],
                                    }),
                                    (0, L.jsxs)(`div`, {
                                      className: `flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4`,
                                      children: [
                                        (0, L.jsxs)(`div`, {
                                          children: [
                                            (0, L.jsx)(`p`, {
                                              className: `text-sm font-medium text-foreground`,
                                              children: o(
                                                `publish.spectatorMode`,
                                                `Spectator mode`,
                                              ),
                                            }),
                                            (0, L.jsx)(`p`, {
                                              className: `text-xs text-muted-foreground`,
                                              children: o(
                                                `publish.spectatorModeDesc`,
                                                `Let community members watch live sessions.`,
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, L.jsx)(y, {
                                          checked: !0,
                                          disabled: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, L.jsx)(_e, {}),
                              (0, L.jsx)(Ye, { gameId: K, manifestStatus: Je }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, L.jsxs)(P, {
                    children: [
                      (0, L.jsxs)(A, {
                        className: `flex flex-col gap-2 pb-4`,
                        children: [
                          (0, L.jsx)(M, {
                            className: `text-lg`,
                            children: o(`publish.livePreview`),
                          }),
                          (0, L.jsx)(N, {
                            className: `text-muted-foreground`,
                            children: o(`publish.livePreviewDesc`),
                          }),
                        ],
                      }),
                      (0, L.jsxs)(j, {
                        className: `space-y-4`,
                        children: [
                          (0, L.jsx)(`div`, {
                            className: `rounded-xl border border-border bg-secondary/30 p-6`,
                            children: (0, L.jsxs)(`div`, {
                              className: `flex flex-col gap-4 md:flex-row`,
                              children: [
                                (0, L.jsx)(`div`, {
                                  className: `flex-shrink-0 overflow-hidden rounded-lg border border-border bg-background`,
                                  children: O
                                    ? (0, L.jsx)(`img`, {
                                        src: O,
                                        alt: o(`publish.coverAlt`, `Cover`),
                                        className: `h-32 w-48 object-cover`,
                                        onError: ht,
                                      })
                                    : (0, L.jsx)(`div`, {
                                        className: `flex h-32 w-48 items-center justify-center text-xs text-muted-foreground`,
                                        children: o(`publish.noCoverArt`),
                                      }),
                                }),
                                (0, L.jsxs)(`div`, {
                                  className: `flex-1 space-y-3 text-foreground`,
                                  children: [
                                    (0, L.jsxs)(`div`, {
                                      children: [
                                        (0, L.jsx)(`p`, {
                                          className: `text-lg font-semibold`,
                                          children:
                                            Z.title ||
                                            o(`publish.untitledExperience`),
                                        }),
                                        (0, L.jsx)(`p`, {
                                          className: `text-xs uppercase tracking-wide text-primary`,
                                          children: Z.genre,
                                        }),
                                      ],
                                    }),
                                    (0, L.jsx)(`p`, {
                                      className: `text-sm text-muted-foreground`,
                                      children:
                                        Z.shortDescription ||
                                        o(
                                          `publish.previewDescriptionPlaceholder`,
                                          `Describe the promise of your world to draw players in.`,
                                        ),
                                    }),
                                    (0, L.jsx)(`div`, {
                                      className: `flex flex-wrap gap-2 text-[11px] text-muted-foreground`,
                                      children: Z.tags
                                        .split(`,`)
                                        .map((e) => e.trim())
                                        .filter(Boolean)
                                        .map((e) =>
                                          (0, L.jsxs)(
                                            `span`,
                                            {
                                              className: `rounded-full bg-secondary px-2 py-1`,
                                              children: [`#`, e],
                                            },
                                            e,
                                          ),
                                        ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, L.jsx)(`p`, {
                            className: `text-xs text-muted-foreground`,
                            children: o(`publish.previewHint`),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, L.jsx)(je, {
        open: J,
        onOpenChange: Xe,
        children: (0, L.jsxs)(Ee, {
          children: [
            (0, L.jsxs)(Ae, {
              children: [
                (0, L.jsx)(Te, { children: o(`publish.updateConfirmTitle`) }),
                (0, L.jsx)(we, { children: o(`publish.updateConfirmDesc`) }),
              ],
            }),
            (0, L.jsxs)(Oe, {
              children: [
                (0, L.jsx)(ke, { children: o(`publish.cancel`) }),
                (0, L.jsx)(De, {
                  onClick: mt,
                  children: o(`publish.confirmUpdate`),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { Z as Publish, Z as default };
