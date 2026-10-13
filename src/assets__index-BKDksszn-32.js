// assets__index-BKDksszn 32 — children
// Lines 11251-11574 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
var Cl = ({ children: e }) => {
    let { user: t, isAuthenticated: n, loading: r } = Sr(),
      i = f(),
      [a, o] = (0, U.useState)(!1),
      [s, c] = (0, U.useState)(!0),
      u = (0, U.useRef)(null),
      d = (0, U.useRef)(null),
      p = (0, U.useRef)(0),
      m = yl.requiresAuth,
      h = Sl(i.pathname);
    return (
      (0, U.useEffect)(() => {
        let e = (p.current += 1),
          i = () => e === p.current;
        r ||
          (async () => {
            if (!m) {
              (o(!0), c(!1));
              return;
            }
            if (h) {
              (o(!0), c(!1));
              return;
            }
            if (!n || !t) {
              ((u.current = null), (d.current = null), o(!1), c(!1));
              return;
            }
            let e = u.current === t.id;
            c(d.current !== t.id);
            let r = (n) => {
              if (!i()) return;
              let r = gr(e, n);
              ((u.current = r ? t.id : null), (d.current = t.id), o(r));
            };
            try {
              let { data: e, error: n } = await C.from(`profiles`)
                .select(`preview_access`)
                .eq(`user_id`, t.id)
                .single();
              n
                ? (console.warn(`Error checking preview access:`, n),
                  r({ kind: `unavailable` }))
                : r({ kind: e?.preview_access === !0 ? `granted` : `revoked` });
            } catch (e) {
              (console.error(`Error checking preview access:`, e),
                r({ kind: `unavailable` }));
            } finally {
              i() && c(!1);
            }
          })();
      }, [t, n, r, m, h]),
      !m || h
        ? (0, W.jsx)(W.Fragment, { children: e })
        : r || s
          ? (0, W.jsx)(`div`, {
              className: `flex items-center justify-center min-h-screen bg-gray-900`,
              children: (0, W.jsxs)(`div`, {
                className: `text-center`,
                children: [
                  (0, W.jsx)(`div`, {
                    className: `animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500 mx-auto mb-4`,
                  }),
                  (0, W.jsx)(`p`, {
                    className: `text-gray-400`,
                    children: `Checking access...`,
                  }),
                ],
              }),
            })
          : a
            ? (0, W.jsx)(W.Fragment, { children: e })
            : (0, W.jsx)(`div`, {
                className: `flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-violet-950 to-gray-900`,
                children: (0, W.jsx)(`div`, {
                  className: `w-full max-w-md p-8 mx-4`,
                  children: (0, W.jsxs)(`div`, {
                    className: `bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8`,
                    children: [
                      (0, W.jsxs)(`div`, {
                        className: `text-center mb-6`,
                        children: [
                          (0, W.jsx)(`div`, {
                            className: `inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4`,
                            children: (0, W.jsx)(`svg`, {
                              className: `w-8 h-8 text-red-400`,
                              fill: `none`,
                              stroke: `currentColor`,
                              viewBox: `0 0 24 24`,
                              children: (0, W.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                strokeWidth: 2,
                                d: `M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`,
                              }),
                            }),
                          }),
                          (0, W.jsx)(`h2`, {
                            className: `text-2xl font-bold text-white mb-2`,
                            children: `Access Denied`,
                          }),
                          (0, W.jsx)(`p`, {
                            className: `text-gray-400 text-sm mb-6`,
                            children: n
                              ? `Your account doesn't have permission to access this preview environment.`
                              : `You must be logged in to access this preview environment.`,
                          }),
                        ],
                      }),
                      (0, W.jsxs)(`div`, {
                        className: `space-y-3`,
                        children: [
                          !n &&
                            (0, W.jsx)(l, {
                              to: `/auth?entryPoint=direct`,
                              className: `block w-full px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors text-center`,
                              children: `Sign In`,
                            }),
                          (0, W.jsx)(`a`, {
                            href: `https://sandscape.app`,
                            className: `block w-full px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-center border border-white/20`,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            children: `Go to Production Site`,
                          }),
                        ],
                      }),
                      (0, W.jsxs)(`div`, {
                        className: `mt-6 pt-6 border-t border-white/10`,
                        children: [
                          (0, W.jsxs)(`p`, {
                            className: `text-center text-xs text-gray-500`,
                            children: [
                              `Environment: `,
                              (0, W.jsx)(`span`, {
                                className: `text-violet-400 font-mono`,
                                children: yl.env,
                              }),
                            ],
                          }),
                          (0, W.jsx)(`p`, {
                            className: `text-center text-xs text-gray-500 mt-2`,
                            children: `Need access? Contact an administrator.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
    );
  },
  wl = () => {
    let [e, t] = (0, U.useState)(!1);
    if (!yl.showPreviewBanner || e) return null;
    let n = {
        preview: `Preview`,
        development: `Development`,
        local: `Local Development`,
        production: `Production`,
      },
      r = {
        preview: `bg-amber-500/90`,
        development: `bg-blue-500/90`,
        local: `bg-green-500/90`,
        production: `bg-gray-500/90`,
      },
      i = n[yl.env],
      a = r[yl.env];
    return (0, W.jsx)(`div`, {
      className: `fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none`,
      children: (0, W.jsx)(`div`, {
        className: `pointer-events-auto`,
        children: (0, W.jsxs)(`div`, {
          className: `${a} backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-lg border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500`,
          children: [
            (0, W.jsx)(`svg`, {
              className: `w-5 h-5 animate-pulse`,
              fill: `none`,
              stroke: `currentColor`,
              viewBox: `0 0 24 24`,
              children: (0, W.jsx)(`path`, {
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                strokeWidth: 2,
                d: `M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`,
              }),
            }),
            (0, W.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, W.jsxs)(`span`, {
                  className: `font-semibold`,
                  children: [i, ` Environment`],
                }),
                (0, W.jsx)(`span`, {
                  className: `text-white/80 text-sm`,
                  children: `•`,
                }),
                (0, W.jsx)(`span`, {
                  className: `text-white/90 text-sm`,
                  children: `for preview/development purposes only`,
                }),
              ],
            }),
            (0, W.jsx)(`button`, {
              onClick: () => t(!0),
              className: `ml-2 hover:bg-white/20 rounded-full p-1 transition-colors`,
              "aria-label": `Dismiss banner`,
              children: (0, W.jsx)(`svg`, {
                className: `w-4 h-4`,
                fill: `none`,
                stroke: `currentColor`,
                viewBox: `0 0 24 24`,
                children: (0, W.jsx)(`path`, {
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  strokeWidth: 2,
                  d: `M6 18L18 6M6 6l12 12`,
                }),
              }),
            }),
          ],
        }),
      }),
    });
  },
  Tl =
    /dynamically imported module|Importing a module script failed|Loading chunk/i;
function El({ error: e }) {
  let { t } = z(),
    n = Tl.test(e.message);
  return (0, W.jsxs)(`div`, {
    role: `alert`,
    className: `flex min-h-dvh flex-col items-center justify-center gap-3 px-6 text-center`,
    children: [
      (0, W.jsx)(`h1`, {
        className: `text-lg font-semibold text-foreground`,
        children: n
          ? t(`routeLoad.chunkTitle`, `This page couldn't load`)
          : t(`routeLoad.errorTitle`, `Something went wrong`),
      }),
      (0, W.jsx)(`p`, {
        className: `max-w-sm text-sm text-muted-foreground`,
        children: n
          ? t(`routeLoad.chunkBody`, `Check your connection, then reload.`)
          : e.message,
      }),
      (0, W.jsxs)(`div`, {
        className: `flex gap-2`,
        children: [
          (0, W.jsx)(P, {
            onClick: () => window.location.reload(),
            children: t(`routeLoad.reload`, `Reload`),
          }),
          (0, W.jsx)(P, {
            variant: `outline`,
            asChild: !0,
            children: (0, W.jsx)(`a`, {
              href: `/`,
              children: t(`routeLoad.home`, `Home`),
            }),
          }),
        ],
      }),
    ],
  });
}
var Dl = !1;
function Ol(e) {
  if (!(`serviceWorker` in navigator) || Dl) return;
  Dl = !0;
  let t = (t) => {
    e(() => {
      if (t.state === `activated` || navigator.serviceWorker.controller === t) {
        window.location.reload();
        return;
      }
      (navigator.serviceWorker.addEventListener(
        `controllerchange`,
        () => window.location.reload(),
        { once: !0 },
      ),
        t.postMessage({ type: `SKIP_WAITING` }));
    });
  };
  navigator.serviceWorker
    .register(`/sw.js`)
    .then((e) => {
      (e.waiting && t(e.waiting),
        e.addEventListener(`updatefound`, () => {
          let n = e.installing;
          n &&
            n.addEventListener(`statechange`, () => {
              n.state === `installed` &&
                navigator.serviceWorker.controller &&
                t(n);
            });
        }));
    })
    .catch((e) => {
      console.error(`[pwa] service worker registration failed`, e);
    });
}
function kl() {
  let { toast: e } = h(),
    { t } = z();
  return (
    (0, U.useEffect)(() => {
      Ol((n) => {
        e({
          title: t(`pwa.updateReady`, `A new version of Sandscape is ready`),
          duration: 1 / 0,
          action: (0, W.jsx)(Nn, {
            altText: t(`pwa.reload`, `Reload`),
            onClick: n,
            children: t(`pwa.reload`, `Reload`),
          }),
        });
      });
    }, [e, t]),
    null
  );
}
