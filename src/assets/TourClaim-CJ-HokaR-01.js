// TourClaim-CJ-HokaR 01 — error
// Lines 1-135 of readable/assets/TourClaim-CJ-HokaR.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./button-Ap3ysi5G.js";
import { t as o } from "./loader-circle-DBFTFT2k.js";
import { n as s, t as c } from "./apiConfig-cGsbt6Be.js";
import { g as l } from "./index-BKDksszn.js";
var u = e(t());
async function d(e) {
  try {
    let t = await s(),
      n = await fetch(`${c.API_BASE_URL}/api/tour/clone`, {
        method: `POST`,
        headers: t,
        body: JSON.stringify({ pack_slug: e }),
      });
    if (!n.ok) {
      let t = `Server error: ${n.status}`;
      try {
        let e = await n.json();
        e?.detail && (t = String(e.detail));
      } catch {}
      return (
        console.error(`[TourService] clone ${e} failed: ${t}`),
        { success: !1, error: t }
      );
    }
    return await n.json();
  } catch (t) {
    let n = t instanceof TypeError;
    return (
      console.error(`[TourService] Error cloning ${e}:`, t),
      {
        success: !1,
        error: n
          ? `Network error: unable to clone the tour game. Please check your connection.`
          : t instanceof Error
            ? t.message
            : `Failed to clone the tour game`,
      }
    );
  }
}
var f = /^[a-z0-9][a-z0-9-]{0,63}$/;
function p(e) {
  return f.test(e);
}
function m(e) {
  return e.success && e.session_id
    ? { navigateTo: `/creating?session=${encodeURIComponent(e.session_id)}` }
    : { error: e.error || `Something went wrong setting up your game.` };
}
function h(e) {
  let t = !1;
  return async () => {
    if (!t) {
      t = !0;
      try {
        return await e();
      } finally {
        t = !1;
      }
    }
  };
}
var g = n();
function _() {
  let [e] = i(),
    t = r(),
    n = e.get(`pack`) ?? ``,
    [s, c] = (0, u.useState)({ status: `loading` }),
    f = (0, u.useRef)();
  f.current ||= h(async () => {
    if (!p(n)) {
      c({
        status: `error`,
        error: `That tour link is not valid (pack "${n}").`,
      });
      return;
    }
    c({ status: `loading` });
    let e = m(await d(n));
    e.navigateTo
      ? t(e.navigateTo, { replace: !0 })
      : c({
          status: `error`,
          error: e.error ?? `Something went wrong setting up your game.`,
        });
  });
  let _ = (0, u.useCallback)(() => {
      f.current?.();
    }, []),
    v = (0, u.useRef)(!1);
  return (
    (0, u.useEffect)(() => {
      v.current || ((v.current = !0), f.current?.());
    }, []),
    (0, g.jsxs)(`div`, {
      className: `flex h-[calc(100dvh-64px)] flex-col items-center justify-center gap-4 bg-background px-6 text-center`,
      children: [
        (0, g.jsx)(l, { title: `Your game` }),
        s.status === `loading`
          ? (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)(o, {
                  className: `h-8 w-8 animate-spin text-primary`,
                  "aria-label": `Setting up your game`,
                }),
                (0, g.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: `Setting up your game…`,
                }),
              ],
            })
          : (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)(`p`, {
                  className: `max-w-sm text-sm text-foreground`,
                  children: `We could not open your game.`,
                }),
                (0, g.jsx)(`p`, {
                  className: `max-w-sm text-xs text-muted-foreground`,
                  children: s.error,
                }),
                (0, g.jsx)(a, {
                  type: `button`,
                  onClick: _,
                  children: `Try again`,
                }),
              ],
            }),
      ],
    })
  );
}
