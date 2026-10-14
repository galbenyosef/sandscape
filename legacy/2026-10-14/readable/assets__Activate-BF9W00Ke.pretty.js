import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { t as o } from "./button-Ap3ysi5G.js";
import { t as s } from "./circle-check-BVtsIJ9N.js";
import { t as c } from "./shield-check-CAJ-dFVb.js";
import { t as l } from "./terminal-L5JMdm_r.js";
import { t as u } from "./triangle-alert-D-SEZi4r.js";
import { r as d, t as f } from "./apiConfig-cGsbt6Be.js";
import { H as p, V as m, W as h, u as g } from "./index-BKDksszn.js";
import {
  a as _,
  i as v,
  n as y,
  o as b,
  r as x,
  t as S,
} from "./card-DLIi0Qe8.js";
var C = e(t()),
  w = n();
function T(e) {
  let t = e.replace(/[\s-]/g, ``).toUpperCase();
  return t.length > 4 ? `${t.slice(0, 4)}-${t.slice(4, 8)}` : t;
}
function E() {
  let { isAuthenticated: e, loading: t } = h(),
    { toast: n } = a(),
    E = r(),
    [D] = i(),
    O = (0, C.useMemo)(() => T(D.get(`code`) ?? D.get(`user_code`) ?? ``), [D]),
    [k, A] = (0, C.useState)(O),
    [j, M] = (0, C.useState)(!1),
    [N, P] = (0, C.useState)(!1),
    [F, I] = (0, C.useState)(null);
  ((0, C.useEffect)(() => {
    O && A(O);
  }, [O]),
    (0, C.useEffect)(() => {
      if (!t && !e) {
        let e = T(k || O),
          t = e ? `/activate?code=${encodeURIComponent(e)}` : `/activate`;
        E(g(t, `device_activation`), { replace: !0 });
      }
    }, [t, e, k, O, E]));
  let L = (e) => {
      switch (e) {
        case `expired_token`:
          return `This code expired. Start a new login in your terminal.`;
        case `access_denied`:
          return `This request was denied.`;
        default:
          return `Code not recognized. Check it and try again.`;
      }
    },
    R = async () => {
      let e = T(k);
      if (!e) {
        I(`Enter the code shown in your terminal.`);
        return;
      }
      (M(!0), I(null));
      try {
        let t = await d();
        if (!t) {
          E(g(`/activate?code=${encodeURIComponent(e)}`, `device_activation`), {
            replace: !0,
          });
          return;
        }
        let r = await fetch(`${f.API_BASE_URL}/api/auth/device/verify`, {
          method: `POST`,
          headers: {
            Authorization: `Bearer ${t}`,
            "Content-Type": `application/json`,
          },
          body: JSON.stringify({ user_code: e }),
        });
        if (r.ok) {
          (P(!0),
            n({
              title: `Device approved`,
              description: `Return to your terminal to continue.`,
            }));
          return;
        }
        let i;
        try {
          let e = await r.json();
          i = e?.detail?.error ?? e?.error;
        } catch {
          i = void 0;
        }
        I(L(i));
      } catch {
        I(`Network error. Check your connection and try again.`);
      } finally {
        M(!1);
      }
    },
    z = () => {
      E(`/`);
    };
  return t || !e
    ? (0, w.jsx)(`div`, {
        className: `min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary p-4`,
      })
    : (0, w.jsx)(`div`, {
        className: `min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary p-4`,
        children: (0, w.jsx)(S, {
          className: `w-full max-w-md`,
          children: N
            ? (0, w.jsxs)(w.Fragment, {
                children: [
                  (0, w.jsxs)(_, {
                    children: [
                      (0, w.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, w.jsx)(s, {
                            className: `h-6 w-6 text-green-500`,
                          }),
                          (0, w.jsx)(b, { children: `Approved` }),
                        ],
                      }),
                      (0, w.jsx)(x, {
                        children: `Return to your terminal to continue. You can close this tab.`,
                      }),
                    ],
                  }),
                  (0, w.jsx)(y, {
                    children: (0, w.jsxs)(`div`, {
                      className: `rounded-md border border-border bg-muted/40 p-4 text-center`,
                      children: [
                        (0, w.jsx)(`p`, {
                          className: `text-sm text-muted-foreground`,
                          children: `Authorized code`,
                        }),
                        (0, w.jsx)(`p`, {
                          className: `mt-1 font-mono text-lg tracking-widest`,
                          children: T(k),
                        }),
                      ],
                    }),
                  }),
                  (0, w.jsx)(v, {
                    children: (0, w.jsx)(o, {
                      variant: `outline`,
                      className: `w-full`,
                      onClick: z,
                      children: `Done`,
                    }),
                  }),
                ],
              })
            : (0, w.jsxs)(w.Fragment, {
                children: [
                  (0, w.jsxs)(_, {
                    children: [
                      (0, w.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, w.jsx)(l, { className: `h-6 w-6 text-primary` }),
                          (0, w.jsx)(b, {
                            children: `Authorize Sandscape CLI`,
                          }),
                        ],
                      }),
                      (0, w.jsx)(x, {
                        children: `A command-line tool on your device is requesting access to your Sandscape account to clone and sync your projects. Only approve if you just started this from your own terminal.`,
                      }),
                    ],
                  }),
                  (0, w.jsxs)(y, {
                    className: `space-y-4`,
                    children: [
                      (0, w.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, w.jsx)(m, {
                            htmlFor: `user_code`,
                            children: `Confirm the code shown in your terminal`,
                          }),
                          (0, w.jsx)(p, {
                            id: `user_code`,
                            value: k,
                            onChange: (e) => {
                              (A(T(e.target.value)), F && I(null));
                            },
                            placeholder: `XXXX-XXXX`,
                            autoComplete: `off`,
                            spellCheck: !1,
                            className: `text-center font-mono text-lg tracking-widest`,
                            disabled: j,
                          }),
                        ],
                      }),
                      (0, w.jsxs)(`div`, {
                        className: `flex items-start gap-2 rounded-md border border-yellow-500/30 bg-yellow-500/10 p-3`,
                        children: [
                          (0, w.jsx)(u, {
                            className: `mt-0.5 h-4 w-4 shrink-0 text-yellow-500`,
                          }),
                          (0, w.jsx)(`p`, {
                            className: `text-xs text-muted-foreground`,
                            children: `Make sure this code matches the one printed by your terminal. Do not approve a code someone else sent you.`,
                          }),
                        ],
                      }),
                      F &&
                        (0, w.jsx)(`p`, {
                          className: `text-sm text-destructive`,
                          children: F,
                        }),
                    ],
                  }),
                  (0, w.jsxs)(v, {
                    className: `flex flex-col gap-2`,
                    children: [
                      (0, w.jsx)(o, {
                        className: `w-full`,
                        onClick: R,
                        disabled: j,
                        children: j
                          ? `Authorizing...`
                          : (0, w.jsxs)(w.Fragment, {
                              children: [
                                (0, w.jsx)(c, { className: `mr-2 h-4 w-4` }),
                                `Authorize`,
                              ],
                            }),
                      }),
                      (0, w.jsx)(o, {
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: z,
                        disabled: j,
                        children: `Cancel`,
                      }),
                    ],
                  }),
                ],
              }),
        }),
      });
}
export { E as Activate };
