// assets__Create-ea24k1TY 236 — current
// Lines 79787-80046 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Qde(e) {
  let { getMix: t, resolveAssetUrl: n, isActive: r = !0 } = e,
    i = (0, X.useRef)(t);
  i.current = t;
  let a = (0, X.useRef)(n);
  a.current = n;
  let o = (0, X.useRef)(null),
    s = (0, X.useRef)(new Map()),
    c = (0, X.useRef)(new Map()),
    l = (0, X.useRef)(new Map()),
    u = (0, X.useRef)([]),
    d = (0, X.useRef)(null),
    f = (0, X.useRef)(0),
    p = (0, X.useRef)(0),
    m = (0, X.useRef)(0),
    h = (0, X.useRef)(!1),
    g = (0, X.useRef)(0),
    _ = (0, X.useRef)(0),
    v = (0, X.useRef)(new Set()),
    y = (0, X.useRef)(r);
  (0, X.useEffect)(() => {
    y.current = r;
  }, [r]);
  let b = (0, X.useCallback)(() => {
      if (!o.current) {
        let e = window.AudioContext || window.webkitAudioContext;
        o.current = new e();
      }
      return o.current;
    }, []),
    x = (0, X.useCallback)(() => {
      let e = i.current();
      return e ? i2(e, (e) => s.current.get(e)?.duration ?? 0) : 0;
    }, []),
    S = (0, X.useCallback)(() => {
      let e = { time: f.current, duration: g.current };
      v.current.forEach((t) => {
        try {
          t(e);
        } catch {}
      });
    }, []),
    C = (0, X.useCallback)(() => {
      _.current &&= (cancelAnimationFrame(_.current), 0);
    }, []),
    w = (0, X.useCallback)(() => {
      for (let e of u.current) {
        try {
          e.stop();
        } catch {}
        try {
          e.disconnect();
        } catch {}
      }
      if (((u.current = []), d.current)) {
        try {
          d.current.disconnect();
        } catch {}
        d.current = null;
      }
    }, []),
    T = (0, X.useCallback)(() => {
      if (!y.current) {
        C();
        return;
      }
      let e = o.current;
      if (e && h.current) {
        let t = e.currentTime - p.current,
          n = m.current + t,
          r = g.current;
        if (r > 0 && n >= r) {
          ((n = r),
            (f.current = n),
            S(),
            (h.current = !1),
            w(),
            (f.current = 0),
            S(),
            C());
          return;
        }
        ((f.current = n), S());
      }
      _.current = requestAnimationFrame(T);
    }, [C, S, w]),
    E = (0, X.useCallback)(() => {
      (C(), (_.current = requestAnimationFrame(T)));
    }, [C, T]),
    D = (0, X.useCallback)(
      async (e) => {
        let t = b(),
          n = 0,
          r = [];
        for (let i of e) {
          if (!i || s.current.has(i)) continue;
          let e = l.current.get(i);
          if (e) {
            r.push(e);
            continue;
          }
          let o = a.current(i);
          if (!o) continue;
          let u = (async () => {
            try {
              let e = await fetch(o, { cache: `no-cache` });
              if (!e.ok) return;
              let r = await e.arrayBuffer(),
                a = await t.decodeAudioData(r);
              (s.current.set(i, a), (n += 1));
              for (let e of Array.from(c.current.keys()))
                e.startsWith(`${i}:`) && c.current.delete(e);
            } catch {
            } finally {
              l.current.delete(i);
            }
          })();
          (l.current.set(i, u), r.push(u));
        }
        return (await Promise.all(r), n);
      },
      [b],
    ),
    O = (0, X.useCallback)(() => s.current, []),
    k = (0, X.useCallback)((e) => s.current.get(e) ?? null, []),
    A = (0, X.useCallback)((e, t, n, r) => {
      if (t <= 0) return [];
      let i = s.current.get(e);
      if (!i) return [];
      let a = Math.max(0, Math.min(n, i.duration)),
        o = r > n ? Math.min(r, i.duration) : i.duration,
        l = `${e}:${a.toFixed(4)}:${o.toFixed(4)}:${Math.floor(t)}`,
        u = c.current.get(l);
      if (u && u.length === Math.floor(t)) return u;
      let d = C2(i, Math.floor(t), a, o);
      return (c.current.set(l, d), d);
    }, []),
    j = (0, X.useCallback)((e) => {
      if (e === void 0) {
        (s.current.clear(), c.current.clear());
        return;
      }
      for (let t of e)
        if (t) {
          s.current.delete(t);
          for (let e of Array.from(c.current.keys()))
            e.startsWith(`${t}:`) && c.current.delete(e);
        }
    }, []),
    M = (0, X.useCallback)(
      (e) => {
        let t = i.current();
        if (!t) return;
        let n = b();
        (w(), (g.current = x()));
        let r = e ?? f.current;
        (r < 0 && (r = 0), g.current > 0 && r >= g.current && (r = 0));
        let a = b2(n, t, s.current, { cursorSec: r });
        if (a.sources.length === 0) {
          ((f.current = r), S());
          return;
        }
        (a.masterOutput.connect(n.destination),
          (d.current = a.masterOutput),
          (u.current = a.sources),
          (g.current = a.durationSec),
          (m.current = r),
          (p.current = n.currentTime),
          (f.current = r),
          (h.current = !0),
          E());
      },
      [b, w, x, S, E],
    ),
    N = (0, X.useCallback)(() => {
      if (!h.current) return;
      let e = o.current;
      if (e) {
        let t = e.currentTime - p.current;
        f.current = m.current + t;
      }
      ((h.current = !1), w(), C(), S());
    }, [w, C, S]),
    P = (0, X.useCallback)(() => {
      ((h.current = !1), w(), C(), (f.current = 0), S());
    }, [w, C, S]),
    F = (0, X.useCallback)(
      (e) => {
        let t = x();
        g.current = t;
        let n = e;
        (n < 0 && (n = 0),
          t > 0 && n > t && (n = t),
          (f.current = n),
          h.current ? M(n) : S());
      },
      [x, M, S],
    ),
    I = (0, X.useCallback)(() => h.current, []),
    L = (0, X.useCallback)(() => f.current, []),
    R = (0, X.useCallback)(() => {
      let e = x();
      return ((g.current = e), e);
    }, [x]),
    z = (0, X.useCallback)(
      (e) => (
        v.current.add(e),
        e({ time: f.current, duration: g.current }),
        () => {
          v.current.delete(e);
        }
      ),
      [],
    );
  return (
    (0, X.useEffect)(() => {
      r ? h.current && E() : C();
    }, [r, C, E]),
    (0, X.useEffect)(
      () => () => {
        (C(), w());
        let e = o.current;
        (e && e.state !== `closed` && e.close().catch(() => {}),
          (o.current = null));
      },
      [C, w],
    ),
    (0, X.useMemo)(
      () => ({
        ensureBuffers: D,
        evictBuffers: j,
        getBuffers: O,
        getBuffer: k,
        getPeaks: A,
        play: M,
        pause: N,
        stop: P,
        seek: F,
        isPlaying: I,
        getCurrentTime: L,
        getDuration: R,
        subscribePlayhead: z,
        getAudioContext: b,
      }),
      [D, j, O, k, A, M, N, P, F, I, L, R, z, b],
    )
  );
}
async function $de() {
  let e = await An();
  return (delete e[`Content-Type`], e);
}
function efe(e) {
  return `${(e || `mix`).replace(/[^A-Za-z0-9_-]+/g, `_`).replace(/^_+|_+$/g, ``) || `mix`}_mixdown.wav`;
}
function tfe(e, t) {
  for (let n of e.tracks)
    for (let e of n.clips) if (!t.has(e.asset_id)) return !1;
  return !0;
}
