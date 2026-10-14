// Create-ea24k1TY 226 — math
// Lines 76666-76984 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function tde(e, t, n, r, i) {
  let a = e.createGain();
  a.gain.value = 1;
  let o = Math.max(0, Math.min(r, o2 - 0.001)),
    s = Math.max(0, Math.min(i, 1)),
    c = Math.max(0.001, n * 2 + 0.1),
    l = e.createDelay(c);
  l.delayTime.value = Math.max(0, n);
  let u = e.createGain();
  u.gain.value = o;
  let d = e.createGain();
  d.gain.value = s;
  let f = e.createGain();
  return (
    (f.gain.value = 1 - s),
    t.connect(f),
    f.connect(a),
    t.connect(l),
    l.connect(u),
    u.connect(l),
    l.connect(d),
    d.connect(a),
    a
  );
}
function nde(e, t, n) {
  if (!n || n.length === 0) {
    let n = e.createGain();
    return (t.connect(n), n);
  }
  let r = e.sampleRate / 2,
    i = t;
  for (let t of n) {
    let n = e.createBiquadFilter();
    ((n.type = t.filter_type),
      (n.frequency.value = Math.max(10, Math.min(t.frequency_hz, r - 1))),
      (n.Q.value = Math.max(1e-4, t.q)),
      (n.gain.value = t.gain_db),
      i.connect(n),
      (i = n));
  }
  return i;
}
function rde(e) {
  let t = 1 + Math.max(0, Math.min(1, e)) * 80,
    n = 2048,
    r = new Float32Array(n),
    i = Math.tanh(t);
  for (let e = 0; e < n; e++) {
    let a = (e * 2) / (n - 1) - 1;
    r[e] = Math.tanh(t * a) / i;
  }
  return r;
}
function ide(e, t, n, r, i) {
  let a = e.createGain(),
    o = Math.max(0, Math.min(r, 1)),
    s = e.createWaveShaper();
  ((s.curve = rde(n)), (s.oversample = i));
  let c = e.createGain();
  c.gain.value = o;
  let l = e.createGain();
  return (
    (l.gain.value = 1 - o),
    t.connect(l),
    l.connect(a),
    t.connect(s),
    s.connect(c),
    c.connect(a),
    a
  );
}
function ade(e, t, n) {
  let r = e.createDynamicsCompressor();
  if (
    ((r.threshold.value = Math.max(-100, Math.min(n.threshold_db, 0))),
    (r.knee.value = Math.max(0, Math.min(n.knee_db, 40))),
    (r.ratio.value = Math.max(1, Math.min(n.ratio, 20))),
    (r.attack.value = Math.max(0, Math.min(n.attack_sec, 1))),
    (r.release.value = Math.max(0, Math.min(n.release_sec, 1))),
    t.connect(r),
    n.makeup_db && n.makeup_db !== 0)
  ) {
    let t = e.createGain();
    return ((t.gain.value = l2(n.makeup_db)), r.connect(t), t);
  }
  return r;
}
function ode(e, t) {
  let n = 2 / 2 ** Math.max(1, Math.min(16, Math.round(t))),
    r = Math.round(e / n) * n;
  return Math.max(-1, Math.min(1, r));
}
function sde(e) {
  let t = 65536,
    n = new Float32Array(t);
  for (let r = 0; r < t; r++) n[r] = ode((r * 2) / (t - 1) - 1, e);
  return n;
}
function cde(e, t, n, r) {
  let i = e.createGain(),
    a = Math.max(0, Math.min(r, 1)),
    o = e.createWaveShaper();
  ((o.curve = sde(n)), (o.oversample = `none`));
  let s = e.createGain();
  s.gain.value = a;
  let c = e.createGain();
  return (
    (c.gain.value = 1 - a),
    t.connect(c),
    c.connect(i),
    t.connect(o),
    o.connect(s),
    s.connect(i),
    i
  );
}
function lde(e, t) {
  let n = 0;
  for (let t = 0; t < e.numberOfChannels; t++) {
    let r = e.getChannelData(t);
    for (let e = 0; e < r.length; e++) {
      let t = Math.abs(r[e]);
      t > n && (n = t);
    }
  }
  return n <= 1e-6 ? 1 : l2(t) / n;
}
function m2(e) {
  let t = 0;
  for (let n of e.effects) {
    if (n.type !== `echo` || !n.enabled) continue;
    let { delay_sec: e, feedback: r } = n.params,
      i = Math.max(0, Math.min(r, o2 - 0.001)),
      a;
    ((a = i <= 1e-6 ? 1 : Math.ceil(Math.log(0.001) / Math.log(i))),
      (!Number.isFinite(a) || a < 1) && (a = 1),
      (t += Math.max(0, e) * a));
  }
  return Math.min(t, s2);
}
function ude(e) {
  let t = e.loop != null && e.loop.enabled,
    n = e.effects.some((e) => e.enabled);
  return !t && !n;
}
function h2(e, t, n, r) {
  let i = n.loop,
    a = r?.workingBuffer ?? t,
    o = !1;
  if (r?.workingBuffer) o = r.loopable ?? !1;
  else if (i && i.enabled) {
    let n = c2(e, t, i);
    n && ((a = n), (o = !0));
  }
  let s = e.createBufferSource();
  ((s.buffer = a), (s.loop = o));
  let c = e.currentTime,
    l = a.duration,
    u = s,
    d =
      r?.normalizeGain ??
      (() => {
        let e = n.effects.find((e) => e.type === `normalize` && e.enabled);
        if (!(!e || e.type !== `normalize`))
          return lde(a, e.params.target_dbfs);
      })(),
    f = (r?.resumeOffsetSec ?? 0) > 0;
  for (let t of n.effects)
    t.enabled &&
      ((f && (t.type === `fade_in` || t.type === `fade_out`)) ||
        (u = g2(e, u, t, c, l, d)));
  let p = a.sampleRate,
    m = a.length;
  return (
    o || (m += Math.ceil(m2(n) * p)),
    {
      outputNode: u,
      source: s,
      workingBuffer: a,
      renderLength: m,
      loopable: o,
      normalizeGain: d,
    }
  );
}
function g2(e, t, n, r, i, a) {
  switch (n.type) {
    case `gain`:
      return u2(e, t, n.params.gain_db);
    case `fade_in`:
      return f2(e, t, n.params.duration_sec, n.params.curve, r, i);
    case `fade_out`:
      return p2(e, t, n.params.duration_sec, n.params.curve, r, i);
    case `echo`:
      return tde(e, t, n.params.delay_sec, n.params.feedback, n.params.mix);
    case `normalize`: {
      if (a === void 0)
        throw Error(
          `audioGraph: normalize effect reached applyEffect without a measured gain — buildAudioGraph must resolve normalizeGain from the working clip.`,
        );
      let n = e.createGain();
      return ((n.gain.value = a), t.connect(n), n);
    }
    case `eq`:
      return nde(e, t, n.params.bands);
    case `distortion`:
      return ide(e, t, n.params.drive, n.params.mix, n.params.oversample);
    case `compressor`:
      return ade(e, t, n.params);
    case `bitcrush`:
      return cde(e, t, n.params.bits, n.params.mix);
  }
}
function _2(e, t) {
  if (ude(t)) return null;
  let n = e.sampleRate,
    r = e.numberOfChannels,
    i = h2(new OfflineAudioContext(r, 1, n), e, t),
    a = i.workingBuffer,
    o = Math.max(1, i.renderLength),
    s = i.normalizeGain,
    c = new OfflineAudioContext(r, o, n),
    l = h2(c, e, t, {
      workingBuffer: a,
      loopable: i.loopable,
      normalizeGain: s,
    });
  return (
    l.outputNode.connect(c.destination),
    l.source.start(0),
    c.startRendering()
  );
}
function v2(e) {
  let t = 0;
  for (let n of e.tracks)
    t = Math.max(t, m2({ loop: null, effects: n.effects }));
  let n = m2({ loop: null, effects: e.master.effects });
  return Math.min(t + n, s2);
}
function y2(e, t, n, r, i) {
  let a = t;
  for (let t of n)
    t.enabled && t.type !== `normalize` && (a = g2(e, a, t, r, i, void 0));
  return a;
}
function b2(e, t, n, r) {
  let i = Math.max(0, r?.cursorSec ?? 0),
    a = e.currentTime,
    o = [],
    s = i2(t, (e) => n.get(e)?.duration ?? 0),
    c = t.tracks.some((e) => e.solo && !e.mute),
    l = e.createGain(),
    u = a,
    d = Math.max(0, s - i);
  for (let r of t.tracks) {
    if (!(!r.mute && (!c || r.solo)) || r.clips.length === 0) continue;
    let t = e.createGain(),
      s = !1;
    for (let c of r.clips) {
      let r = n.get(c.asset_id);
      if (!r) continue;
      let l = r.duration,
        u = Math.max(0, Math.min(c.in_sec, l)),
        d = (c.out_sec > c.in_sec ? Math.min(c.out_sec, l) : l) - u;
      if (d <= 0) continue;
      let f = Math.max(0, c.start_sec);
      if (f + d <= i) continue;
      let p = f < i,
        m,
        h,
        g;
      if (!p) ((m = a + (f - i)), (h = u), (g = d));
      else {
        let e = i - f;
        ((m = a), (h = u + e), (g = d - e));
      }
      if (g <= 0) continue;
      let _ = e.createBufferSource();
      _.buffer = r;
      let v = u2(e, _, c.gain_db),
        y = p ? i - f : 0;
      if (c.fade_in_sec > 0 && c.fade_in_sec > y) {
        let t = c.fade_in_sec - y;
        v = f2(e, v, t, `equalPower`, m, g);
      }
      (c.fade_out_sec > 0 && (v = p2(e, v, c.fade_out_sec, `equalPower`, m, g)),
        v.connect(t),
        _.start(m, h, g),
        o.push(_),
        (s = !0));
    }
    if (!s) continue;
    let f = y2(e, t, r.effects, u, d);
    if (((f = u2(e, f, r.gain_db)), r.pan !== 0)) {
      let t = e.createStereoPanner();
      ((t.pan.value = Math.max(-1, Math.min(1, r.pan))), f.connect(t), (f = t));
    }
    f.connect(l);
  }
  let f = y2(e, l, t.master.effects, u, d);
  f = u2(e, f, t.master.gain_db);
  let p = Math.max(1, Math.ceil((d + v2(t)) * e.sampleRate));
  return { masterOutput: f, sources: o, durationSec: s, renderLength: p };
}
function dde(e, t, n) {
  if (a2(e)) return null;
  let r = n?.sampleRate ?? 44100,
    i = i2(e, (e) => t.get(e)?.duration ?? 0);
  if (i <= 0) return null;
  if (i > Que) throw Error(`mix too long to bake (max 10 min)`);
  let a = Math.max(1, Math.ceil((i + v2(e)) * r)),
    o = new OfflineAudioContext(2, a, r),
    s = b2(o, e, t, { cursorSec: 0 });
  return s.sources.length === 0
    ? null
    : (s.masterOutput.connect(o.destination), o.startRendering());
}
