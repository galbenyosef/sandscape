// Create-CEn7EAZs 263 — math
// Lines 88587-88935 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function r6(e) {
  let t = [];
  for (let n of e.tracks) {
    if (n.muted) continue;
    let e = n.kind === `audio`;
    if (!e && n.kind !== `video`) continue;
    let r = e ? O3(n.clips) : [];
    for (let e of n.clips) {
      let n = e.audio;
      if (!n || n.muted) continue;
      let i = e.start_sec,
        a = v3(e),
        o = e.fade_in_sec ?? 0,
        s = e.fade_out_sec ?? 0,
        c =
          o > 0 ? { start: i, end: Math.min(a, i + o), equalPower: !1 } : null,
        l =
          s > 0 ? { start: Math.max(i, a - s), end: a, equalPower: !1 } : null;
      for (let t of r)
        (t.b.id === e.id &&
          (c = { start: t.start_sec, end: t.end_sec, equalPower: !0 }),
          t.a.id === e.id &&
            (l = { start: t.start_sec, end: t.end_sec, equalPower: !0 }));
      if (c && l && c.end > l.start) {
        let e = Math.max(c.start, Math.min(l.end, (c.end + l.start) / 2));
        ((c = { ...c, end: e }),
          (l = { ...l, start: e }),
          c.end - c.start <= 0.001 && (c = null),
          l.end - l.start <= 0.001 && (l = null));
      }
      t.push({ clip: e, fadeIn: c, fadeOut: l, gain: n.gain });
    }
  }
  return t;
}
var i6 = 65;
function $me(e, t, n, r) {
  let i = new Float32Array(i6);
  for (let a = 0; a < i6; a++) {
    let o = a / (i6 - 1),
      s = e + (t - e) * o;
    i[a] = (n ? Math.sin((s * Math.PI) / 2) : s) * r;
  }
  return i;
}
function a6(e, t, n, r, i, a, o) {
  let { clip: s } = n,
    c = s.start_sec,
    l = v3(s);
  if (l <= i) return;
  let u = Math.max(c, i),
    d = s.in_sec + (u - c);
  if (d >= r.duration) return;
  let f = Math.min(l - u, r.duration - d);
  if (f <= 0) return;
  let p = (e) => a + (e - i),
    m = e.createGain();
  m.connect(t);
  let h = m.gain;
  h.setValueAtTime(n.gain, p(u));
  let g = (e, t) => {
    let r = Math.max(e.start, u),
      i = Math.min(e.end, l);
    if (i - r <= 0.001) {
      e.end <= u && h.setValueAtTime(t === `in` ? n.gain : 0, p(u));
      return;
    }
    let a = e.end - e.start,
      o = a > 0 ? (r - e.start) / a : 1,
      s = t === `in` ? o : 1 - o,
      c = +(t === `in`);
    try {
      h.setValueCurveAtTime($me(s, c, e.equalPower, n.gain), p(r), i - r);
    } catch {
      try {
        (h.setValueAtTime(s * n.gain, p(r)),
          h.linearRampToValueAtTime(c * n.gain, p(i)));
      } catch {}
    }
  };
  (n.fadeIn && n.fadeIn.end > u && g(n.fadeIn, `in`),
    n.fadeOut && n.fadeOut.end > u && g(n.fadeOut, `out`));
  let _ = e.createBufferSource();
  ((_.buffer = r), _.connect(m), _.start(p(u), d, f), o?.push(_));
}
function ehe(e, t, n, r, i, a) {
  let o = r6(t),
    s = [],
    c = e.createGain();
  c.connect(a);
  for (let t of o) {
    let a = n(t.clip);
    if (a)
      try {
        a6(e, c, t, a, r, i, s);
      } catch (e) {
        console.error(
          `[VideoEditor] failed to schedule audio clip:`,
          t.clip.id,
          e,
        );
      }
  }
  return {
    stop: () => {
      for (let e of s)
        try {
          (e.stop(), e.disconnect());
        } catch {}
      s.length = 0;
      try {
        c.disconnect();
      } catch {}
    },
  };
}
async function the(e, t, n = 48e3) {
  let r = y3(e),
    i = r6(e).filter((e) => t(e.clip));
  if (i.length === 0) return null;
  let a = Math.max(1, Math.ceil(r * n)),
    o = new OfflineAudioContext(2, a, n);
  for (let e of i) {
    let n = t(e.clip);
    n && a6(o, o.destination, e, n, 0, 0);
  }
  return o.startRendering();
}
var o6 = { low: ii, medium: fi, high: ri };
async function s6(e, t, n) {
  let r = e === `mp4` ? [`avc`] : [`vp9`, `vp8`],
    i = e === `mp4` ? [`aac`, `opus`] : [`opus`],
    a = null;
  for (let e of r)
    if (await oi(e, { width: t, height: n })) {
      a = e;
      break;
    }
  let o = null;
  for (let e of i)
    if (await li(e)) {
      o = e;
      break;
    }
  return { video: a, audio: o };
}
var nhe = class {
    input;
    sink = null;
    ready;
    canvas;
    ctx;
    iterator = null;
    current = null;
    exhausted = !1;
    constructor(e) {
      ((this.input = new ni({ source: new ei(e), formats: ai })),
        (this.canvas = document.createElement(`canvas`)),
        (this.ctx = this.canvas.getContext(`2d`)),
        (this.ready = (async () => {
          let e = await this.input.getPrimaryVideoTrack();
          if (!e) throw Error(`Video file has no video track`);
          if (!(await e.canDecode()))
            throw Error(`Video codec not decodable in this browser`);
          ((this.canvas.width = e.displayWidth),
            (this.canvas.height = e.displayHeight),
            (this.sink = new hi(e)));
        })()));
    }
    async prepare() {
      return this.ready;
    }
    async frameAt(e) {
      if (!this.sink || !this.ctx) return null;
      let t = Math.max(0, e);
      for (
        this.iterator ||= this.sink.samples(t);
        !this.exhausted && (!this.current || this.current.end <= t);
      ) {
        let e = await this.iterator.next();
        if (e.done || !e.value) {
          this.exhausted = !0;
          break;
        }
        let t = e.value;
        (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
          t.draw(this.ctx, 0, 0, this.canvas.width, this.canvas.height),
          (this.current = {
            start: t.timestamp,
            end: t.timestamp + (t.duration || 1 / 30),
          }),
          t.close());
      }
      return this.current ? this.canvas : null;
    }
    dispose() {
      (this.iterator?.return?.(), this.input.dispose());
    }
  },
  c6 = class extends Error {
    constructor() {
      (super(`Export cancelled`), (this.name = `ExportCancelledError`));
    }
  };
async function rhe(e, t, n, r, i) {
  let a = y3(e),
    o = Math.max(1, Math.ceil(a * n.fps - 1e-6)),
    s = () => {
      if (i?.aborted) throw new c6();
    },
    c = (e) =>
      i
        ? Promise.race([
            e,
            new Promise((e, t) => {
              if (i.aborted) return t(new c6());
              i.addEventListener(`abort`, () => t(new c6()), { once: !0 });
            }),
          ])
        : e;
  r({ phase: `preparing`, framesDone: 0, framesTotal: o });
  let l = await s6(n.format, n.width, n.height);
  if (!l.video)
    throw Error(
      `This browser cannot encode ${n.format === `mp4` ? `H.264` : `VP9/VP8`} video (WebCodecs).`,
    );
  let u = [];
  for (let t of e.tracks)
    for (let e of t.clips) {
      if (e.asset.source === `text`) continue;
      let n = D3(t.kind) && !t.hidden,
        r = !!e.audio && !e.audio.muted && !t.muted;
      (n || r) && u.push({ clip: e, needsVideo: n, needsAudio: r });
    }
  await c(Promise.all(u.map(({ clip: e }) => t.ensureLoaded(e.asset))));
  let d = u.filter(({ clip: e }) => !t.getBlob(e.asset));
  if (d.length > 0)
    throw Error(
      `Cannot export: ${d.length} media file(s) are missing. Relink or remove them first.`,
    );
  await c(
    Promise.all(
      u
        .filter((e) => e.needsAudio)
        .map(({ clip: e }) => t.ensureAudioBuffer(e.asset)),
    ),
  );
  let f = u.filter(
    (e) => e.needsAudio && t.getAudioState(e.clip.asset) === `failed`,
  );
  if (f.length > 0)
    throw Error(
      `Cannot export: audio could not be decoded for ${f.length} clip(s). Mute or remove them first.`,
    );
  (s(), r({ phase: `audio`, framesDone: 0, framesTotal: o }));
  let p = await c(the(e, (e) => t.getAudioBuffer(e.asset)));
  s();
  let m = new Map(),
    h = () => {
      for (let e of m.values()) e.dispose();
    },
    g = null;
  try {
    for (let { clip: e, needsVideo: n } of u) {
      if (!n) continue;
      let r = t.getVisualMeta(e.asset);
      if (!((r?.duration_sec ?? 0) > 0) || !r || r.width <= 0 || r.height <= 0)
        continue;
      let i = t.getBlob(e.asset);
      if (!i) continue;
      let a = new nhe(i);
      (await a.prepare(), m.set(e.id, a));
    }
    s();
    let i = new mi();
    g = new ui({ format: n.format === `mp4` ? new pi() : new si(), target: i });
    let a = document.createElement(`canvas`);
    ((a.width = Math.max(2, Math.floor(n.width / 2) * 2)),
      (a.height = Math.max(2, Math.floor(n.height / 2) * 2)));
    let c = a.getContext(`2d`);
    if (!c) throw Error(`Could not create export canvas context`);
    let d = new di(a, { codec: l.video, bitrate: o6[n.quality] });
    g.addVideoTrack(d, { frameRate: n.fps });
    let f = null;
    (p &&
      l.audio &&
      ((f = new ti({ codec: l.audio, bitrate: o6[n.quality] })),
      g.addAudioTrack(f)),
      await g.start());
    let h = p;
    (f && h && (await f.add(h), f.close(), (h = null)), s());
    let _ = new Map(),
      v = {
        getImageSource: (e, n) =>
          _.has(e.id) ? (_.get(e.id) ?? null) : t.getImageBitmap(e.asset),
        getNaturalSize: (e) => {
          let n = t.getVisualMeta(e.asset);
          return n ? { width: n.width, height: n.height } : null;
        },
      },
      y = a.width / e.settings.width,
      b = a.height / e.settings.height,
      x = 1 / n.fps;
    for (let t = 0; t < o; t++) {
      s();
      let n = t * x;
      _.clear();
      for (let t of e.tracks) {
        if (t.kind !== `video` || t.hidden) continue;
        let e = t.clips[0];
        if (!e || n < e.start_sec || n >= e.start_sec + e.duration_sec)
          continue;
        let r = m.get(e.id);
        if (!r) continue;
        let i = e.in_sec + (n - e.start_sec);
        _.set(e.id, await r.frameAt(i));
      }
      (c.setTransform(1, 0, 0, 1, 0, 0),
        c.clearRect(0, 0, a.width, a.height),
        c.setTransform(y, 0, 0, b, 0, 0),
        Q3(c, e, n, v),
        c.setTransform(1, 0, 0, 1, 0, 0),
        await d.add(n, x),
        r({ phase: `video`, framesDone: t + 1, framesTotal: o }),
        t % 15 == 0 && (await new Promise((e) => setTimeout(e, 0))));
    }
    (d.close(),
      r({ phase: `finalizing`, framesDone: o, framesTotal: o }),
      await g.finalize());
    let S = i.buffer;
    if (!S) throw Error(`Export produced no output`);
    let C = n.format === `mp4` ? `video/mp4` : `video/webm`;
    return {
      blob: new Blob([S], { type: C }),
      mimeType: C,
      extension: n.format,
      audioOmitted: !!p && !l.audio,
      audioCodec: p ? l.audio : null,
    };
  } catch (e) {
    if (g && g.state !== `finalized`)
      try {
        await g.cancel();
      } catch {}
    throw e;
  } finally {
    h();
  }
}
