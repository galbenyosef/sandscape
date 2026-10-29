// Create-CEn7EAZs 148 — current
// Lines 49610-49766 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function BV(e, t) {
  let [n, r] = (0, X.useState)(null),
    [i, a] = (0, X.useState)(null),
    [o, s] = (0, X.useState)(!1),
    c = (0, X.useRef)(!1),
    l = (0, X.useRef)(!1),
    d = (0, X.useRef)(e);
  d.current = e;
  let { toast: f } = u(),
    p = (0, X.useRef)(t);
  ((p.current = t),
    (0, X.useEffect)(
      () => (
        (l.current = !0),
        () => {
          l.current = !1;
        }
      ),
      [],
    ),
    (0, X.useEffect)(() => {
      let t = !1;
      return (
        e &&
          GI.getCaptureCapabilities(e)
            .then((e) => {
              t || r(e);
            })
            .catch((e) => {
              t || a(e.message);
            }),
        () => {
          t = !0;
        }
      );
    }, [e]));
  let m = (0, X.useCallback)(async () => {
    let t = await GI.getAnimationPlan(e);
    if (!t.success || !t.animation_plan)
      throw Error(t.error || `Could not refresh the animation library`);
    p.current(t.animation_plan);
  }, [e]);
  return {
    capabilities: n,
    error: i,
    busy: o,
    capture: (0, X.useCallback)(
      async (t) => {
        if (c.current) return null;
        ((c.current = !0), s(!0), a(null));
        try {
          let n = await GI.capturePerformance(e, t);
          if ((Gt(), !l.current || d.current !== e)) return null;
          if (!n.success)
            return (
              a(
                Qt(f, n, {
                  title: `Capture could not be converted`,
                  fallback: `Please try this take again.`,
                }),
              ),
              null
            );
          if (!n.animation_plan)
            throw Error(
              `The server returned an incomplete animation plan. Reload the project to see your captured clip.`,
            );
          return (
            p.current(n.animation_plan),
            n.animation
              ? (f({ title: `Animation added`, description: n.animation.name }),
                n.animation)
              : (f({
                  title: `Take removed`,
                  description:
                    n.error || `This take was deleted while it was converting.`,
                }),
                null)
          );
        } catch (e) {
          return (
            a(e instanceof Error ? e.message : `Could not refresh animations`),
            null
          );
        } finally {
          ((c.current = !1), s(!1));
        }
      },
      [e, f],
    ),
    save: (0, X.useCallback)(
      async (t) => {
        if (c.current) return null;
        ((c.current = !0), s(!0), a(null));
        try {
          let n = await GI.savePanelClip(e, t);
          if (!l.current || d.current !== e) return null;
          if (!n.success || !n.animation)
            throw Error(n.error || `Could not save your clip`);
          if (!n.animation_plan)
            throw Error(
              `The clip was saved, but the server returned an incomplete animation plan. Reload the project to see it.`,
            );
          return (
            p.current(n.animation_plan),
            f({
              title: `Edited clip saved`,
              description: `The original animation is still in your library.`,
            }),
            n.animation
          );
        } catch (e) {
          return (
            a(e instanceof Error ? e.message : `Could not save your clip`),
            null
          );
        } finally {
          ((c.current = !1), s(!1));
        }
      },
      [e, f],
    ),
    bake: (0, X.useCallback)(
      async (t, n) => {
        if (!c.current) {
          ((c.current = !0), s(!0), a(null));
          try {
            let r = await GI.bake(e, t, n);
            if (!l.current || d.current !== e) return;
            if (!r.success)
              throw Error(r.error || `Could not prepare the animation`);
            await m();
          } catch (e) {
            a(
              e instanceof Error
                ? e.message
                : `Could not prepare the animation`,
            );
          } finally {
            ((c.current = !1), s(!1));
          }
        }
      },
      [e, m],
    ),
    refresh: m,
    clearError: () => a(null),
  };
}
var VV = {
  locomotion: `bg-blue-500/20 text-blue-300`,
  combat: `bg-red-500/20 text-red-300`,
  interaction: `bg-green-500/20 text-green-300`,
  emote: `bg-yellow-500/20 text-yellow-300`,
  transition: `bg-purple-500/20 text-purple-300`,
  environmental: `bg-cyan-500/20 text-cyan-300`,
};
