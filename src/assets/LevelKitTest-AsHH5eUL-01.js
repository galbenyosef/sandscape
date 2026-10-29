// LevelKitTest-AsHH5eUL 01 — classname
// Lines 1-78 of readable/assets/LevelKitTest-AsHH5eUL.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./SceneEditor-NC7_0wmu.js";
import { t as i } from "./LevelDesignKitPanel-Cm6YODiQ.js";
import { t as a } from "./refresh-cw-Bg4R4J17.js";
import { A as o, T as s } from "./gameCreation-B6oXUVk-.js";
var c = e(t()),
  l = n();
function u() {
  let [e, t] = (0, c.useState)(``),
    [n, u] = (0, c.useState)(``),
    [d, f] = (0, c.useState)([]),
    [p, m] = (0, c.useState)(null);
  return (
    (0, c.useEffect)(() => {
      (async () => {
        try {
          let e = new URLSearchParams(window.location.search).get(`session`),
            n,
            r;
          if (e) ((r = e), (n = `sessions/${e}`));
          else {
            let e = await o.createSession();
            ((r = e.session_id),
              (n = e.session_dir || `sessions/${e.session_id}`));
          }
          (u(r), t(n));
          let i = await s.getScenes(n);
          i.success && f(i.scenes || []);
        } catch (e) {
          m(e instanceof Error ? e.message : `Failed to start session`);
        }
      })();
    }, []),
    p
      ? (0, l.jsx)(`div`, {
          className: `h-screen flex items-center justify-center bg-[#0f0a18] text-white`,
          children: (0, l.jsxs)(`div`, {
            className: `text-center text-sm`,
            children: [`Failed to start: `, p],
          }),
        })
      : e
        ? (0, l.jsxs)(`div`, {
            className: `h-screen flex bg-[#0f0a18]`,
            children: [
              (0, l.jsx)(`div`, {
                className: `w-80 shrink-0 border-r border-border/60 overflow-hidden`,
                children: (0, l.jsx)(i, { sessionDir: e, sessionId: n }),
              }),
              (0, l.jsx)(`div`, {
                className: `flex-1 relative`,
                children: (0, l.jsx)(r, {
                  scenes: d,
                  sessionDir: e,
                  onLoadScene: async (t, n) => s.loadScene(e, t, n),
                  onSaveScene: async (t, n, r) => s.saveScene(e, t, n, r),
                }),
              }),
            ],
          })
        : (0, l.jsx)(`div`, {
            className: `h-screen flex items-center justify-center bg-[#0f0a18] text-white`,
            children: (0, l.jsxs)(`div`, {
              className: `text-center`,
              children: [
                (0, l.jsx)(a, {
                  className: `h-8 w-8 mx-auto mb-4 animate-spin`,
                }),
                (0, l.jsx)(`p`, {
                  className: `text-sm`,
                  children: `Starting session…`,
                }),
              ],
            }),
          })
  );
}
