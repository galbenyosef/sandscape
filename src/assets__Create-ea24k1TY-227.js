// assets__Create-ea24k1TY 227 — current
// Lines 76985-77258 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function x2(e) {
  let t = e.numberOfChannels,
    n = e.sampleRate,
    r = (16 / 8) * t,
    i = n * r,
    a = e.length * r,
    o = 44 + a,
    s = new ArrayBuffer(o),
    c = new DataView(s);
  (S2(c, 0, `RIFF`),
    c.setUint32(4, o - 8, !0),
    S2(c, 8, `WAVE`),
    S2(c, 12, `fmt `),
    c.setUint32(16, 16, !0),
    c.setUint16(20, 1, !0),
    c.setUint16(22, t, !0),
    c.setUint32(24, n, !0),
    c.setUint32(28, i, !0),
    c.setUint16(32, r, !0),
    c.setUint16(34, 16, !0),
    S2(c, 36, `data`),
    c.setUint32(40, a, !0));
  let l = 44;
  for (let n = 0; n < e.length; n++)
    for (let r = 0; r < t; r++) {
      let t = e.getChannelData(r)[n],
        i = Math.max(-1, Math.min(1, t)),
        a = i < 0 ? i * 32768 : i * 32767;
      (c.setInt16(l, a, !0), (l += 2));
    }
  return new Blob([s], { type: `audio/wav` });
}
function S2(e, t, n) {
  for (let r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r));
}
function C2(e, t, n = 0, r = e.duration) {
  if (t <= 0 || e.length === 0) return [];
  let i = e.getChannelData(0),
    a = e.sampleRate,
    o = Math.floor(n * a),
    s = Math.floor(r * a);
  (o < 0 && (o = 0),
    o > i.length && (o = i.length),
    s < o && (s = o),
    s > i.length && (s = i.length));
  let c = Math.max(1, Math.floor((s - o) / t)),
    l = [];
  for (let e = 0; e < t; e++) {
    let t = o + e * c,
      n = Math.min(t + c, s),
      r = 1,
      a = -1;
    for (let e = t; e < n; e++) {
      let t = i[e];
      (t < r && (r = t), t > a && (a = t));
    }
    l.push({ min: r, max: a });
  }
  return l;
}
function fde(e) {
  return e.audio_path || e.sfx_path || e.path || e.name;
}
function pde(e) {
  let { sessionDir: t, getAudioState: n, isActive: r } = e,
    i = (0, X.useRef)(null),
    a = (0, X.useRef)(null),
    o = (0, X.useRef)(null),
    s = (0, X.useRef)(null),
    c = (0, X.useRef)([]),
    l = (0, X.useRef)(0),
    u = (0, X.useRef)(0),
    d = (0, X.useRef)(0),
    f = (0, X.useRef)(!1),
    p = (0, X.useRef)(0),
    m = (0, X.useRef)(!1),
    h = (0, X.useRef)(0),
    g = (0, X.useRef)(new Set()),
    _ = (0, X.useRef)(r !== !1);
  (0, X.useEffect)(() => {
    _.current = r !== !1;
  }, [r]);
  let v = (0, X.useCallback)(
      () => (
        (!i.current || i.current.state === `closed`) &&
          (i.current = new AudioContext()),
        i.current.state === `suspended` && i.current.resume(),
        i.current
      ),
      [],
    ),
    y = (0, X.useCallback)(() => {
      if (o.current) {
        try {
          o.current.stop();
        } catch {}
        try {
          o.current.disconnect();
        } catch {}
        o.current = null;
      }
      if (s.current) {
        try {
          s.current.disconnect();
        } catch {}
        s.current = null;
      }
    }, []),
    b = (0, X.useCallback)(() => {
      h.current &&= (cancelAnimationFrame(h.current), 0);
    }, []),
    x = (0, X.useCallback)(() => {
      if (g.current.size === 0) return;
      let e = { time: l.current, duration: p.current, looping: m.current };
      g.current.forEach((t) => {
        try {
          t(e);
        } catch {}
      });
    }, []),
    S = (0, X.useCallback)(() => {
      if (!_.current) {
        b();
        return;
      }
      let e = i.current;
      if (e && f.current) {
        let t = p.current,
          n = e.currentTime - u.current,
          r = d.current + n;
        (m.current && t > 0 ? (r %= t) : t > 0 && (r = Math.min(r, t)),
          (l.current = r),
          x());
      }
      h.current = requestAnimationFrame(S);
    }, [b, x]),
    C = (0, X.useCallback)(() => {
      (b(), (h.current = requestAnimationFrame(S)));
    }, [b, S]),
    w = (0, X.useCallback)(
      async (e, n) => {
        (y(), b(), (f.current = !1), (l.current = 0), (m.current = !1));
        try {
          let r = v(),
            i = fde(e),
            o = jr.getAssetUrl(t, i, { version: e.modified }),
            s = await fetch(o, { cache: `no-cache` });
          if (!s.ok) throw Error(`Failed to fetch audio: ${s.status}`);
          let l = await s.arrayBuffer(),
            u = await r.decodeAudioData(l);
          return (
            (a.current = u),
            (p.current = u.duration),
            (c.current = n > 0 ? C2(u, Math.floor(n)) : []),
            x(),
            u
          );
        } catch (e) {
          throw (
            console.error(`[useAudioEngine] Failed to load audio clip:`, e),
            (a.current = null),
            (c.current = []),
            (p.current = 0),
            x(),
            e
          );
        }
      },
      [t, v, y, b, x],
    ),
    T = (0, X.useCallback)(() => {
      let e = a.current;
      if (!e) return;
      let t = v();
      y();
      let r = Math.max(0, l.current),
        i = n(),
        c = h2(t, e, i, { resumeOffsetSec: r });
      ((m.current = c.loopable),
        (p.current = c.workingBuffer.duration),
        c.outputNode.connect(t.destination));
      let h = l.current;
      if (c.loopable && i.loop) {
        let e = c.workingBuffer.duration;
        ((h -= i.loop.in_sec), h < 0 && (h = 0), e > 0 && (h %= e));
      }
      (h < 0 && (h = 0),
        h >= p.current && (h = 0),
        (d.current = h),
        (u.current = t.currentTime),
        c.source.start(0, h),
        (o.current = c.source),
        (s.current = c.outputNode),
        (f.current = !0),
        (c.source.onended = () => {
          o.current === c.source &&
            ((f.current = !1), y(), m.current || ((l.current = 0), x()), b());
        }),
        C());
    }, [v, y, n, x, C, b]),
    E = (0, X.useCallback)(() => {
      (y(), (f.current = !1), b(), x());
    }, [y, b, x]),
    D = (0, X.useCallback)(() => {
      (y(), (f.current = !1), b(), (l.current = 0), x());
    }, [y, b, x]),
    O = (0, X.useCallback)(
      (e) => {
        let t = Math.max(0, e);
        f.current
          ? (y(), (f.current = !1), (l.current = t), T())
          : ((l.current = t), x());
      },
      [y, T, x],
    ),
    k = (0, X.useCallback)(() => f.current, []),
    A = (0, X.useCallback)(() => a.current, []),
    j = (0, X.useCallback)(() => c.current, []),
    M = (0, X.useCallback)(() => l.current, []),
    N = (0, X.useCallback)((e) => {
      let t = a.current;
      return !t || e <= 0
        ? ((c.current = []), c.current)
        : ((c.current = C2(t, Math.floor(e))), c.current);
    }, []),
    P = (0, X.useCallback)(
      (e) => (
        g.current.add(e),
        e({ time: l.current, duration: p.current, looping: m.current }),
        () => {
          g.current.delete(e);
        }
      ),
      [],
    );
  return (
    (0, X.useEffect)(() => {
      r === !1 && f.current && E();
    }, [r, E]),
    (0, X.useEffect)(
      () => () => {
        (b(),
          y(),
          g.current.clear(),
          (i.current &&= (i.current.close().catch(() => {}), null)));
      },
      [],
    ),
    (0, X.useMemo)(
      () => ({
        loadClip: w,
        play: T,
        pause: E,
        stop: D,
        seek: O,
        isPlaying: k,
        getBuffer: A,
        getPeaks: j,
        recomputePeaks: N,
        getCurrentTime: M,
        subscribePlayhead: P,
        getAudioContext: v,
      }),
      [w, T, E, D, O, k, A, j, N, M, P, v],
    )
  );
}
async function mde() {
  let e = await An();
  return (delete e[`Content-Type`], e);
}
function w2(e) {
  return `${(e.split(`/`).pop() || e).replace(/\.[^.]+$/, ``)}_baked.wav`;
}
