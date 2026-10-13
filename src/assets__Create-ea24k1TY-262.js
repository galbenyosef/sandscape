// assets__Create-ea24k1TY 262 — asset
// Lines 88009-88166 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
async function wme(e, t, n, r, i) {
  let a = b3(e),
    o = Math.max(1, Math.ceil(a * n.fps - 1e-6)),
    s = () => {
      if (i?.aborted) throw new l6();
    },
    c = (e) =>
      i
        ? Promise.race([
            e,
            new Promise((e, t) => {
              if (i.aborted) return t(new l6());
              i.addEventListener(`abort`, () => t(new l6()), { once: !0 });
            }),
          ])
        : e;
  r({ phase: `preparing`, framesDone: 0, framesTotal: o });
  let l = await c6(n.format, n.width, n.height);
  if (!l.video)
    throw Error(
      `This browser cannot encode ${n.format === `mp4` ? `H.264` : `VP9/VP8`} video (WebCodecs).`,
    );
  let u = [];
  for (let t of e.tracks)
    for (let e of t.clips) {
      if (e.asset.source === `text`) continue;
      let n = O3(t.kind) && !t.hidden,
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
  let p = await c(Sme(e, (e) => t.getAudioBuffer(e.asset)));
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
      let a = new Cme(i);
      (await a.prepare(), m.set(e.id, a));
    }
    s();
    let i = new Bee();
    g = new Iee({
      format: n.format === `mp4` ? new zee() : new Nee(),
      target: i,
    });
    let a = document.createElement(`canvas`);
    ((a.width = Math.max(2, Math.floor(n.width / 2) * 2)),
      (a.height = Math.max(2, Math.floor(n.height / 2) * 2)));
    let c = a.getContext(`2d`);
    if (!c) throw Error(`Could not create export canvas context`);
    let d = new Lee(a, { codec: l.video, bitrate: s6[n.quality] });
    g.addVideoTrack(d, { frameRate: n.fps });
    let f = null;
    (p &&
      l.audio &&
      ((f = new kee({ codec: l.audio, bitrate: s6[n.quality] })),
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
        $3(c, e, n, v),
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
function Tme(e, t) {
  let n = URL.createObjectURL(e),
    r = document.createElement(`a`);
  ((r.href = n),
    (r.download = t),
    document.body.appendChild(r),
    r.click(),
    r.remove(),
    setTimeout(() => URL.revokeObjectURL(n), 1e4));
}
