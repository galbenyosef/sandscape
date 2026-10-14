// assets__Create-ea24k1TY 268 — current
// Lines 90282-90557 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Gme(e, t, n) {
  let r = (0, X.useRef)(null),
    i = (0, X.useRef)(null),
    a = (0, X.useRef)(!1),
    o = (0, X.useRef)(!1),
    s = (0, X.useRef)(0),
    c = (0, X.useRef)(0),
    l = (0, X.useRef)(null),
    u = (0, X.useRef)(new Set()),
    d = (0, X.useRef)(n);
  d.current = n;
  let f = (0, X.useCallback)(
      () => ((r.current ||= new AudioContext()), r.current),
      [],
    ),
    p = (0, X.useRef)(e);
  p.current = e;
  let m = (0, X.useCallback)(() => b3(p.current()), []),
    h = (0, X.useCallback)(
      () =>
        !a.current || !r.current
          ? s.current
          : s.current + (r.current.currentTime - c.current),
      [],
    ),
    g = (0, X.useCallback)(() => {
      let e = { time: h(), duration: m(), playing: a.current };
      u.current.forEach((t) => t(e));
    }, [h, m]),
    _ = (0, X.useCallback)(
      (e) => {
        let n = p.current();
        for (let r of n.tracks) {
          if (r.kind !== `video`) continue;
          let n = r.clips[0];
          if (!n) continue;
          let i = t.getVideoElement(n.asset, n.id);
          i && e(n, i);
        }
      },
      [t],
    ),
    v = (0, X.useCallback)(
      (e) => {
        _((t, n) => {
          if (T3(t, e)) {
            let r = Math.min(
              w3(t, e),
              Math.max(0, (n.duration || 1 / 0) - 0.01),
            );
            a.current
              ? (!n.seeking &&
                  Math.abs(n.currentTime - r) > Wme &&
                  (n.currentTime = r),
                n.paused && !n.ended && n.play().catch(() => {}))
              : (n.paused || n.pause(),
                !n.seeking &&
                  Math.abs(n.currentTime - r) > 1 / 60 &&
                  (n.currentTime = r));
          } else n.paused || n.pause();
        });
      },
      [_],
    ),
    y = (0, X.useCallback)(() => {
      (i.current?.stop(), (i.current = null));
    }, []),
    b = (0, X.useCallback)(
      (e) => {
        y();
        let n = f();
        i.current = xme(
          n,
          p.current(),
          (e) => (t.ensureAudioBuffer(e.asset), t.getAudioBuffer(e.asset)),
          e,
          n.currentTime,
          n.destination,
        );
      },
      [f, t, y],
    ),
    x = (0, X.useCallback)(() => {
      l.current !== null &&
        (cancelAnimationFrame(l.current), (l.current = null));
    }, []),
    S = (0, X.useCallback)(() => {
      a.current &&
        ((s.current = Math.min(h(), m())),
        (a.current = !1),
        y(),
        x(),
        v(s.current),
        g());
    }, [h, g, m, x, v, y]),
    C = (0, X.useCallback)(() => {
      if (!a.current) return;
      let e = m(),
        t = h();
      if (t >= e)
        if (o.current)
          ((s.current = 0), (c.current = f().currentTime), b(0), v(0), g());
        else {
          (S(), (s.current = e), g());
          return;
        }
      else (v(t), g());
      l.current = requestAnimationFrame(C);
    }, [b, h, g, f, m, S, v]),
    w = (0, X.useCallback)(() => {
      if (a.current || !d.current) return;
      let e = f();
      e.state === `suspended` && e.resume();
      let t = m();
      (s.current >= t - 0.001 && (s.current = 0),
        (c.current = e.currentTime),
        (a.current = !0),
        b(s.current),
        v(s.current),
        x(),
        (l.current = requestAnimationFrame(C)),
        g());
    }, [b, g, f, m, x, v, C]),
    T = (0, X.useCallback)(
      (e) => {
        let t = Math.max(0, Math.min(e, m()));
        ((s.current = t),
          a.current && ((c.current = f().currentTime), b(t)),
          v(t),
          g());
      },
      [b, g, f, m, v],
    ),
    E = (0, X.useCallback)(() => {
      (S(), (s.current = 0), v(0), g());
    }, [g, S, v]),
    D = (0, X.useCallback)(() => {
      a.current ? S() : w();
    }, [S, w]),
    O = (0, X.useCallback)(
      (e) => (
        u.current.add(e),
        e({ time: h(), duration: m(), playing: a.current }),
        () => {
          u.current.delete(e);
        }
      ),
      [h, m],
    ),
    k = (0, X.useCallback)(() => {
      a.current &&
        ((s.current = h()), (c.current = f().currentTime), b(s.current));
    }, [b, h, f]);
  return (
    (0, X.useEffect)(() => {
      n ||
        (S(),
        _((e, t) => {
          t.paused || t.pause();
        }));
    }, [n, S, _]),
    (0, X.useEffect)(
      () => () => {
        (y(), x(), r.current && r.current.close(), (r.current = null));
      },
      [x, y],
    ),
    (0, X.useMemo)(
      () => ({
        play: w,
        pause: S,
        stop: E,
        seek: T,
        togglePlay: D,
        isPlaying: () => a.current,
        getCurrentTime: h,
        getDuration: m,
        setLoop: (e) => {
          o.current = e;
        },
        getLoop: () => o.current,
        subscribePlayhead: O,
        restartIfPlaying: k,
      }),
      [w, S, E, T, D, h, m, O, k],
    )
  );
}
var x6 = `video_composition`,
  S6 = new (class {
    async saveVideoState(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/video-state`,
            { method: `PUT`, headers: r, body: JSON.stringify(n) },
          );
        return i.ok
          ? await i.json()
          : (console.error(
              `[VideoStateService] saveVideoState HTTP error: ${i.status}`,
            ),
            { success: !1, error: `Server error: ${i.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[VideoStateService] ${t} saving video state:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to save the composition. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to save video state`,
          }
        );
      }
    }
    async createVideoAsset(e, t) {
      try {
        let n = await An(),
          r = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets`,
            {
              method: `POST`,
              headers: n,
              body: JSON.stringify({
                session_id: e,
                asset_name: t,
                asset_type: x6,
                description: `Video composition`,
                priority: `medium`,
                format: `mp4`,
              }),
            },
          );
        return r.ok
          ? await r.json()
          : (console.error(
              `[VideoStateService] createVideoAsset HTTP error: ${r.status}`,
            ),
            { success: !1, error: `Server error: ${r.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[VideoStateService] ${t} creating video asset:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to create the composition. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to create video asset`,
          }
        );
      }
    }
  })();
function C6(e) {
  let t = new Set();
  for (let n of e.tracks) for (let e of n.clips) t.add(N3(e.asset));
  for (let n of e.media) t.add(N3({ source: `local`, media_id: n.media_id }));
  return t;
}
var Kme = 1500,
  w6 = (e) => e.split(`/`).pop() || e;
function qme(e) {
  return {
    ...e,
    tracks: e.tracks.map((e) => ({
      ...e,
      clips: e.clips.filter((e) => e.asset.source !== `local`),
    })),
    media: [],
  };
}
