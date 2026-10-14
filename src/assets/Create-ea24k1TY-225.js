// Create-ea24k1TY 225 — math
// Lines 76317-76665 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function J0({ sessionId: e, className: t }) {
  let { gameDesignData: n, setGameDesignData: r } = Pc(),
    i = n?.gameDesignConcept?.title || ``,
    [a, o] = (0, X.useState)(!1),
    [s, c] = (0, X.useState)(i),
    l = (0, X.useRef)(null),
    u = (0, X.useRef)(!1);
  return (
    (0, X.useEffect)(() => {
      c(i);
    }, [i]),
    (0, X.useEffect)(() => {
      a && l.current?.select();
    }, [a]),
    Nn()
      ? (0, Z.jsx)(`span`, {
          className: p(
            `text-xs font-medium text-foreground/60 truncate max-w-[200px]`,
            t,
          ),
          children: i || `Untitled`,
        })
      : a
        ? (0, Z.jsx)(`input`, {
            ref: l,
            value: s,
            onChange: (e) => c(e.target.value),
            onBlur: () => {
              if (u.current) {
                u.current = !1;
                return;
              }
              o(!1);
              let t = s.trim();
              if (!(!t || t === i || !e)) {
                if (n && r) {
                  let e = n.gameDesignConcept;
                  e && r({ ...n, gameDesignConcept: { ...e, title: t } });
                }
                (Vr(e, { title: t }).catch(console.warn),
                  Xr(e, { name: t }).catch(console.warn));
              }
            },
            onKeyDown: (e) => {
              (e.key === `Enter` && l.current?.blur(),
                e.key === `Escape` && ((u.current = !0), c(i), o(!1)));
            },
            className: p(
              `text-xs font-medium text-foreground bg-transparent border-b border-primary/40 outline-none w-full max-w-[200px]`,
              t,
            ),
            maxLength: 80,
          })
        : (0, Z.jsx)(`span`, {
            className: p(
              `text-xs font-medium text-foreground/60 cursor-pointer hover:text-foreground/80 truncate max-w-[200px]`,
              t,
            ),
            onClick: () => o(!0),
            title: `Click to rename`,
            children: i || `Untitled`,
          })
  );
}
var Y0 = 0;
function Jue() {
  return ((Y0 += 1), `fx_${Date.now().toString(36)}_${Y0.toString(36)}`);
}
function X0(e) {
  let t = { id: Jue(), enabled: !0 };
  switch (e) {
    case `fade_in`:
      return {
        ...t,
        type: e,
        params: { duration_sec: 0.3, curve: `equalPower` },
      };
    case `fade_out`:
      return {
        ...t,
        type: e,
        params: { duration_sec: 0.3, curve: `equalPower` },
      };
    case `gain`:
      return { ...t, type: e, params: { gain_db: 0 } };
    case `echo`:
      return {
        ...t,
        type: e,
        params: { delay_sec: 0.25, feedback: 0.3, mix: 0.3 },
      };
    case `normalize`:
      return { ...t, type: e, params: { target_dbfs: -1 } };
    case `eq`:
      return {
        ...t,
        type: e,
        params: {
          bands: [
            { filter_type: `peaking`, frequency_hz: 1e3, q: 1, gain_db: 0 },
          ],
        },
      };
    case `distortion`:
      return {
        ...t,
        type: e,
        params: { drive: 0.3, mix: 1, oversample: `2x` },
      };
    case `compressor`:
      return {
        ...t,
        type: e,
        params: {
          threshold_db: -24,
          knee_db: 30,
          ratio: 4,
          attack_sec: 0.003,
          release_sec: 0.25,
          makeup_db: 0,
        },
      };
    case `bitcrush`:
      return { ...t, type: e, params: { bits: 8, mix: 1 } };
  }
}
var Yue = 0.05;
function Xue(e) {
  if (!e) return `original`;
  if (e.bake_stale) return `edited`;
  if (e.baked_audio_path) return `baked`;
  let t = e.audio_state;
  return t && (t.loop?.enabled || t.effects.some((e) => e.enabled))
    ? `edited`
    : `original`;
}
var Z0 = {
    selectedAssetId: null,
    loop: null,
    effects: [],
    activeTab: `edit`,
    bakeStatus: `original`,
    isDirty: !1,
    draggingLoopHandle: null,
  },
  Q0 = Ee((e) => ({
    ...Z0,
    selectAsset: (t) => e({ selectedAssetId: t, draggingLoopHandle: null }),
    enableLoop: (t, n, r = Yue) =>
      e({
        loop: { enabled: !0, in_sec: t, out_sec: n, crossfade_sec: r },
        isDirty: !0,
      }),
    disableLoop: () => e({ loop: null, isDirty: !0 }),
    setLoopRange: (t, n) =>
      e((e) =>
        e.loop
          ? { loop: { ...e.loop, in_sec: t, out_sec: n }, isDirty: !0 }
          : {},
      ),
    setLoopCrossfade: (t) =>
      e((e) =>
        e.loop ? { loop: { ...e.loop, crossfade_sec: t }, isDirty: !0 } : {},
      ),
    addEffect: (t) =>
      e((e) => ({ effects: [...e.effects, X0(t)], isDirty: !0 })),
    updateEffect: (t, n) =>
      e((e) => ({
        effects: e.effects.map((e) =>
          e.id === t ? { ...e, params: { ...e.params, ...n } } : e,
        ),
        isDirty: !0,
      })),
    toggleEffect: (t) =>
      e((e) => ({
        effects: e.effects.map((e) =>
          e.id === t ? { ...e, enabled: !e.enabled } : e,
        ),
        isDirty: !0,
      })),
    removeEffect: (t) =>
      e((e) => ({ effects: e.effects.filter((e) => e.id !== t), isDirty: !0 })),
    reorderEffects: (t, n) =>
      e((e) => {
        if (
          t === n ||
          t < 0 ||
          n < 0 ||
          t >= e.effects.length ||
          n >= e.effects.length
        )
          return {};
        let r = e.effects.slice(),
          [i] = r.splice(t, 1);
        return (r.splice(n, 0, i), { effects: r, isDirty: !0 });
      }),
    setActiveTab: (t) => e({ activeTab: t }),
    loadAudioState: (t) =>
      e({
        loop: t?.audio_state?.loop ?? null,
        effects: t?.audio_state?.effects ?? [],
        bakeStatus: Xue(t),
        isDirty: !1,
        draggingLoopHandle: null,
      }),
    setBakeStatus: (t) => e({ bakeStatus: t }),
    markClean: () => e({ isDirty: !1 }),
    reset: () => e(Z0),
    setDraggingLoopHandle: (t) => e({ draggingLoopHandle: t }),
  })),
  $0 = 0;
function e2(e) {
  return (($0 += 1), `${e}_${Date.now().toString(36)}_${$0.toString(36)}`);
}
function Zue(e, t = 0) {
  return {
    id: e2(`clip`),
    asset_id: e,
    start_sec: Math.max(0, t),
    in_sec: 0,
    out_sec: 0,
    gain_db: 0,
    fade_in_sec: 0,
    fade_out_sec: 0,
  };
}
function t2(e) {
  return {
    id: e2(`trk`),
    name: e,
    gain_db: 0,
    pan: 0,
    mute: !1,
    solo: !1,
    effects: [],
    clips: [],
  };
}
function n2(e, t = `music`) {
  return {
    id: e2(`mix`),
    name: e,
    mix_role: t,
    loop: null,
    tracks: [t2(`Track 1`)],
    master: { gain_db: 0, effects: [] },
  };
}
function r2(e, t) {
  let n = Math.max(0, Math.min(e.in_sec, t)),
    r = e.out_sec > e.in_sec ? Math.min(e.out_sec, t) : t;
  return Math.max(0, r - n);
}
function i2(e, t) {
  let n = 0;
  for (let r of e.tracks)
    for (let e of r.clips) {
      let r = r2(e, t(e.asset_id));
      n = Math.max(n, e.start_sec + r);
    }
  return n;
}
function a2(e) {
  return e.tracks.every((e) => e.clips.length === 0);
}
var o2 = 0.95,
  s2 = 10,
  Que = 600,
  $ue = 1024;
function c2(e, t, n) {
  let r = t.sampleRate,
    i = t.length,
    a = Math.round(n.in_sec * r),
    o = Math.round(n.out_sec * r);
  (a < 0 && (a = 0), o > i && (o = i));
  let s = o - a;
  if (s < 2) return null;
  let c = Math.round((n.crossfade_sec || 0) * r);
  c < 0 && (c = 0);
  let l = Math.floor(s / 2);
  c > l && (c = l);
  let u = s - c,
    d = t.numberOfChannels,
    f = e.createBuffer(d, u, r);
  for (let e = 0; e < d; e++) {
    let n = t.getChannelData(e),
      r = f.getChannelData(e);
    for (let e = 0; e < u; e++) r[e] = n[a + e];
    for (let e = 0; e < c; e++) {
      let t = (((e + 0.5) / c) * Math.PI) / 2,
        i = Math.sin(t),
        o = Math.cos(t),
        s = n[a + e],
        l = n[a + u + e];
      r[e] = s * i + l * o;
    }
  }
  return f;
}
function ede(e, t) {
  let n = e.createBufferSource();
  return ((n.buffer = t), (n.loop = !0), n.connect(e.destination), n);
}
function l2(e) {
  return 10 ** (e / 20);
}
function u2(e, t, n) {
  let r = e.createGain();
  return ((r.gain.value = l2(n)), t.connect(r), r);
}
function d2(e, t) {
  let n = $ue,
    r = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    let a = i / (n - 1),
      o;
    ((o =
      e === `equalPower`
        ? t
          ? Math.sin((a * Math.PI) / 2)
          : Math.cos((a * Math.PI) / 2)
        : t
          ? a
          : 1 - a),
      (r[i] = o));
  }
  return r;
}
function f2(e, t, n, r, i, a) {
  let o = e.createGain();
  t.connect(o);
  let s = Math.max(0, Math.min(n, a));
  if (s <= 0) return ((o.gain.value = 1), o);
  let c = d2(r, !0);
  return (
    o.gain.setValueCurveAtTime(c, i, s),
    o.gain.setValueAtTime(1, i + s),
    o
  );
}
function p2(e, t, n, r, i, a) {
  let o = e.createGain();
  t.connect(o);
  let s = Math.max(0, Math.min(n, a));
  if (s <= 0) return ((o.gain.value = 1), o);
  let c = i + (a - s),
    l = d2(r, !1);
  return (o.gain.setValueAtTime(1, i), o.gain.setValueCurveAtTime(l, c, s), o);
}
