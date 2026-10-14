// assets__Following-D9N5_ADL 01 — children
// Lines 1-111 of readable/assets__Following-D9N5_ADL.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { l as r, n as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useTranslation-BdauNPOZ.js";
import { n as o, r as s, t as c } from "./avatar-ixs41cq5.js";
import { W as l, c as u, v as d } from "./index-BKDksszn.js";
import { r as f } from "./follow-CUqA0aWI.js";
import { n as p, t as m } from "./card-DLIi0Qe8.js";
var h = e(t()),
  g = n();
function _() {
  let { t: e } = a(),
    { id: t } = r(),
    { user: n } = l(),
    [_, v] = (0, h.useState)(!0),
    [y, b] = (0, h.useState)([]),
    x = (!t || t === `me`) && n ? n.id : t;
  return (
    (0, h.useEffect)(() => {
      (async () => {
        try {
          if (!x) {
            (b([]), v(!1));
            return;
          }
          v(!0);
          let e = await f(x);
          b(e);
        } catch (e) {
          (console.error(`Error fetching following:`, e), b([]));
        } finally {
          v(!1);
        }
      })();
    }, [x]),
    _
      ? (0, g.jsxs)(`div`, {
          className: `container mx-auto py-6 space-y-4`,
          children: [
            (0, g.jsx)(`h1`, {
              className: `text-2xl font-bold mb-6`,
              children: e(`following.title`, `Following`),
            }),
            (0, g.jsx)(d, { className: `h-12 w-full mb-2` }),
            (0, g.jsx)(d, { className: `h-12 w-full mb-2` }),
            (0, g.jsx)(d, { className: `h-12 w-full mb-2` }),
          ],
        })
      : (0, g.jsxs)(`div`, {
          className: `container mx-auto py-6`,
          children: [
            (0, g.jsx)(`div`, {
              className: `mb-6`,
              children: (0, g.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: e(`following.title`, `Following`),
              }),
            }),
            (0, g.jsx)(u, {
              className: `h-[calc(100vh-12rem)]`,
              children: (0, g.jsx)(`div`, {
                className: `space-y-4 pr-4`,
                children:
                  y.length === 0
                    ? (0, g.jsx)(`p`, {
                        className: `text-muted-foreground`,
                        children: e(`following.empty`, `Not following anyone.`),
                      })
                    : y.map((e) =>
                        (0, g.jsx)(
                          i,
                          {
                            to: `/profile/${e.id}`,
                            children: (0, g.jsx)(m, {
                              className: `hover:bg-muted/50 transition-colors`,
                              children: (0, g.jsxs)(p, {
                                className: `flex items-center gap-4 p-4`,
                                children: [
                                  (0, g.jsxs)(c, {
                                    className: `w-10 h-10`,
                                    children: [
                                      (0, g.jsx)(s, {
                                        src: e.avatar_url
                                          ? e.avatar_url
                                          : void 0,
                                        alt: e.username,
                                      }),
                                      (0, g.jsx)(o, {
                                        children: e.username?.[0],
                                      }),
                                    ],
                                  }),
                                  (0, g.jsx)(`div`, {
                                    children: (0, g.jsx)(`div`, {
                                      className: `font-semibold`,
                                      children: e.username,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          },
                          e.id,
                        ),
                      ),
              }),
            }),
          ],
        })
  );
}
