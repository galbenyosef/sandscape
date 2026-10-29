// Create-ea24k1TY 261 — end
// Lines 87805-88008 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function i6(e) {
  let t = [];
  for (let n of e.tracks) {
    if (n.muted) continue;
    let e = n.kind === `audio`;
    if (!e && n.kind !== `video`) continue;
    let r = e ? k3(n.clips) : [];
    for (let e of n.clips) {
      let n = e.audio;
      if (!n || n.muted) continue;
      let i = e.start_sec,
        a = y3(e),
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
var a6 = 65;
function bme(e, t, n, r) {
  let i = new Float32Array(a6);
  for (let a = 0; a < a6; a++) {
    let o = a / (a6 - 1),
      s = e + (t - e) * o;
    i[a] = (n ? Math.sin((s * Math.PI) / 2) : s) * r;
  }
  return i;
}
function o6(e, t, n, r, i, a, o) {
  let { clip: s } = n,
    c = s.start_sec,
    l = y3(s);
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
      h.setValueCurveAtTime(bme(s, c, e.equalPower, n.gain), p(r), i - r);
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
function xme(e, t, n, r, i, a) {
  let o = i6(t),
    s = [],
    c = e.createGain();
  c.connect(a);
  for (let t of o) {
    let a = n(t.clip);
    if (a)
      try {
        o6(e, c, t, a, r, i, s);
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
async function Sme(e, t, n = 48e3) {
  let r = b3(e),
    i = i6(e).filter((e) => t(e.clip));
  if (i.length === 0) return null;
  let a = Math.max(1, Math.ceil(r * n)),
    o = new OfflineAudioContext(2, a, n);
  for (let e of i) {
    let n = t(e.clip);
    n && o6(o, o.destination, e, n, 0, 0);
  }
  return o.startRendering();
}
var s6 = { low: jee, medium: Ree, high: Aee };
async function c6(e, t, n) {
  let r = e === `mp4` ? [`avc`] : [`vp9`, `vp8`],
    i = e === `mp4` ? [`aac`, `opus`] : [`opus`],
    a = null;
  for (let e of r)
    if (await Mee(e, { width: t, height: n })) {
      a = e;
      break;
    }
  let o = null;
  for (let e of i)
    if (await Fee(e)) {
      o = e;
      break;
    }
  return { video: a, audio: o };
}
var Cme = class {
    input;
    sink = null;
    ready;
    canvas;
    ctx;
    iterator = null;
    current = null;
    exhausted = !1;
    constructor(e) {
      ((this.input = new hi({ source: new mi(e), formats: gi })),
        (this.canvas = document.createElement(`canvas`)),
        (this.ctx = this.canvas.getContext(`2d`)),
        (this.ready = (async () => {
          let e = await this.input.getPrimaryVideoTrack();
          if (!e) throw Error(`Video file has no video track`);
          if (!(await e.canDecode()))
            throw Error(`Video codec not decodable in this browser`);
          ((this.canvas.width = e.displayWidth),
            (this.canvas.height = e.displayHeight),
            (this.sink = new Vee(e)));
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
  l6 = class extends Error {
    constructor() {
      (super(`Export cancelled`), (this.name = `ExportCancelledError`));
    }
  };
