// Create-ea24k1TY 267 — entries
// Lines 89910-90281 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var Ume = class {
    entries = new Map();
    peaksCache = new Map();
    decodeCtx = null;
    disposed = !1;
    videoHost = null;
    getVideoHost() {
      if (!this.videoHost) {
        let e = document.createElement(`div`);
        (e.setAttribute(`aria-hidden`, `true`),
          (e.dataset.videoEditorPreviewHost = `true`),
          (e.style.cssText = `position:fixed;left:0;bottom:0;width:2px;height:2px;opacity:0;overflow:hidden;pointer-events:none;z-index:-1;`),
          document.body.appendChild(e),
          (this.videoHost = e));
      }
      return this.videoHost;
    }
    resolveSessionUrl = () => null;
    onChange = () => {};
    makeEntry(e, t) {
      return {
        blob: null,
        objectUrl: null,
        fileName: t,
        mediaType: e,
        visualMeta: null,
        imageBitmap: null,
        videoEls: new Map(),
        audioBuffer: null,
        audioState: e === `image` ? `none` : `pending`,
        audioPromise: null,
        loadPromise: null,
        missing: !1,
        loadFailed: !1,
      };
    }
    releaseVideoEls(e) {
      for (let t of e.videoEls.values())
        (t.pause(), t.removeAttribute(`src`), t.load(), t.remove());
      e.videoEls.clear();
    }
    async importLocalFile(e) {
      if (this.disposed) return null;
      let t = y6(e.type || e.name);
      if (!t) return null;
      let n = u3(`med`),
        r = N3({ source: `local`, media_id: n }),
        i = this.makeEntry(t, e.name);
      ((i.blob = e),
        (i.objectUrl = URL.createObjectURL(e)),
        this.entries.set(r, i));
      let a = 0,
        o = 0,
        s = 0;
      try {
        if (t === `video`) {
          let e = await b6(i.objectUrl);
          ((a = e.duration_sec),
            (o = e.width),
            (s = e.height),
            (i.visualMeta = e));
        } else
          t === `image`
            ? ((i.imageBitmap = await createImageBitmap(e)),
              (o = i.imageBitmap.width),
              (s = i.imageBitmap.height),
              (i.visualMeta = { width: o, height: s, duration_sec: 0 }))
            : (a = await Hme(i.objectUrl));
      } catch {
        return (this.evict(r), null);
      }
      return (
        this.onChange(`both`),
        {
          media_id: n,
          name: e.name,
          media_type: t,
          duration_sec: a,
          width: o,
          height: s,
          size_bytes: e.size,
        }
      );
    }
    registerMissingLocal(e) {
      let t = N3({ source: `local`, media_id: e.media_id });
      if (this.entries.get(t)?.blob) return;
      let n = this.makeEntry(e.media_type, e.name);
      ((n.missing = !0),
        (n.visualMeta =
          e.media_type === `audio`
            ? null
            : {
                width: e.width,
                height: e.height,
                duration_sec: e.duration_sec,
              }),
        this.entries.set(t, n));
    }
    async relinkLocalFile(e, t) {
      let n = N3({ source: `local`, media_id: e.media_id }),
        r = this.entries.get(n);
      if (!r) return !1;
      (r.objectUrl && URL.revokeObjectURL(r.objectUrl),
        this.releaseVideoEls(r),
        (r.blob = t),
        (r.objectUrl = URL.createObjectURL(t)),
        (r.missing = !1),
        (r.loadFailed = !1),
        (r.imageBitmap = null),
        (r.audioBuffer = null),
        (r.audioState = r.mediaType === `image` ? `none` : `pending`),
        (r.audioPromise = null),
        (r.loadPromise = null));
      try {
        r.mediaType === `image`
          ? ((r.imageBitmap = await createImageBitmap(t)),
            (r.visualMeta = {
              width: r.imageBitmap.width,
              height: r.imageBitmap.height,
              duration_sec: 0,
            }))
          : r.mediaType === `video` && (r.visualMeta = await b6(r.objectUrl));
      } catch {
        return ((r.missing = !0), this.onChange(`both`), !1);
      }
      return (this.invalidatePeaks(n), this.onChange(`both`), !0);
    }
    downgradeToMissing(e) {
      if (e.source === `text`) return;
      let t = this.entries.get(N3(e));
      t &&
        (t.objectUrl && URL.revokeObjectURL(t.objectUrl),
        t.imageBitmap?.close(),
        this.releaseVideoEls(t),
        (t.blob = null),
        (t.objectUrl = null),
        (t.imageBitmap = null),
        (t.audioBuffer = null),
        (t.audioState = t.mediaType === `image` ? `none` : `pending`),
        (t.audioPromise = null),
        (t.loadPromise = null),
        (t.missing = !0),
        this.invalidatePeaks(N3(e)),
        this.onChange(`both`));
    }
    isMissing(e) {
      return e.source === `text`
        ? !1
        : (this.entries.get(N3(e))?.missing ?? !1);
    }
    hasBytes(e) {
      return e.source === `text` || !!this.entries.get(N3(e))?.blob;
    }
    ensureLoaded(e) {
      if (this.disposed || e.source === `text`) return Promise.resolve();
      let t = N3(e),
        n = this.entries.get(t);
      if (n?.blob || n?.missing || n?.loadFailed)
        return n.loadPromise ?? Promise.resolve();
      if (n?.loadPromise) return n.loadPromise;
      if (e.source === `local`) return Promise.resolve();
      let r = this.resolveSessionUrl(e);
      if (!r) return Promise.resolve();
      let i = y6(e.path) ?? `image`;
      n || ((n = this.makeEntry(i, e.name)), this.entries.set(t, n));
      let a = (async () => {
        let e = await fetch(r);
        if (!e.ok) throw Error(`Failed to fetch asset (${e.status})`);
        let a = await e.blob();
        if (!this.disposed) {
          if (
            ((n.blob = a),
            (n.objectUrl = URL.createObjectURL(a)),
            i === `image`
              ? ((n.imageBitmap = await createImageBitmap(a)),
                (n.visualMeta = {
                  width: n.imageBitmap.width,
                  height: n.imageBitmap.height,
                  duration_sec: 0,
                }))
              : i === `video` && (n.visualMeta = await b6(n.objectUrl)),
            this.disposed)
          ) {
            this.evict(t);
            return;
          }
          this.onChange(`both`);
        }
      })().catch((t) => {
        (console.error(`[VideoEditor] asset load failed:`, e, t),
          (n.loadFailed = !0),
          (n.audioState = `failed`),
          (n.loadPromise = null),
          this.disposed || this.onChange(`both`));
      });
      return ((n.loadPromise = a), a);
    }
    hasLoadFailed(e) {
      return e.source === `text`
        ? !1
        : (this.entries.get(N3(e))?.loadFailed ?? !1);
    }
    retainOnly(e) {
      for (let t of [...this.entries.keys()]) e.has(t) || this.evict(t);
    }
    getVisualMeta(e) {
      return e.source === `text`
        ? null
        : (this.entries.get(N3(e))?.visualMeta ?? null);
    }
    getBlob(e) {
      return e.source === `text`
        ? null
        : (this.entries.get(N3(e))?.blob ?? null);
    }
    getImageBitmap(e) {
      return e.source === `text`
        ? null
        : (this.entries.get(N3(e))?.imageBitmap ?? null);
    }
    getVideoElement(e, t) {
      if (e.source === `text`) return null;
      let n = this.entries.get(N3(e));
      if (!n || !n.objectUrl || n.mediaType !== `video`) return null;
      let r = n.videoEls.get(t);
      return (
        r ||
          ((r = document.createElement(`video`)),
          (r.src = n.objectUrl),
          (r.muted = !0),
          (r.playsInline = !0),
          (r.preload = `auto`),
          (r.style.cssText = `width:2px;height:2px;`),
          (r.onloadeddata = () => this.onChange(`visual`)),
          (r.onseeked = () => this.onChange(`visual`)),
          this.getVideoHost().appendChild(r),
          n.videoEls.set(t, r)),
        r
      );
    }
    pruneVideoElements(e) {
      for (let t of this.entries.values())
        for (let [n, r] of [...t.videoEls])
          e.has(n) ||
            (r.pause(),
            r.removeAttribute(`src`),
            r.load(),
            r.remove(),
            t.videoEls.delete(n));
    }
    getAudioBuffer(e) {
      return e.source === `text`
        ? null
        : (this.entries.get(N3(e))?.audioBuffer ?? null);
    }
    ensureAudioBuffer(e) {
      if (e.source === `text`) return Promise.resolve();
      let t = N3(e),
        n = async () => {
          await this.ensureLoaded(e);
          let n = this.entries.get(t);
          if (!(!n?.blob || n.audioBuffer || n.mediaType === `image`)) {
            try {
              if (n.mediaType === `audio`) {
                let e = await n.blob.arrayBuffer();
                ((n.audioBuffer = await this.getDecodeCtx().decodeAudioData(e)),
                  (n.audioState = `ready`));
              } else
                ((n.audioBuffer = await this.decodeVideoAudio(n.blob)),
                  (n.audioState = n.audioBuffer ? `ready` : `none`));
            } catch (t) {
              ((n.audioState = `failed`),
                console.error(`[VideoEditor] audio decode failed:`, e, t));
            }
            (this.invalidatePeaks(t), this.onChange(`audio`));
          }
        },
        r = this.entries.get(t);
      if (r?.audioBuffer) return Promise.resolve();
      if (r?.audioPromise) return r.audioPromise;
      let i = n().finally(() => {
          let e = this.entries.get(t);
          e && (e.audioPromise = null);
        }),
        a = this.entries.get(t);
      return (a && (a.audioPromise = i), i);
    }
    getAudioState(e) {
      return e.source === `text`
        ? `none`
        : (this.entries.get(N3(e))?.audioState ?? `pending`);
    }
    async decodeVideoAudio(e) {
      let t = new hi({ source: new mi(e), formats: gi });
      try {
        let e = await t.getPrimaryAudioTrack();
        if (!e) return null;
        let n = new Pee(e),
          r = [],
          i = 0;
        for await (let { buffer: e, timestamp: t } of n.buffers())
          (r.push({ buffer: e, timestamp: t }),
            (i = Math.max(i, t + e.duration)));
        if (r.length === 0 || i <= 0) return null;
        let a = r[0].buffer.numberOfChannels,
          o = r[0].buffer.sampleRate,
          s = new AudioBuffer({
            length: Math.max(1, Math.ceil(i * o)),
            numberOfChannels: a,
            sampleRate: o,
          });
        for (let { buffer: e, timestamp: t } of r) {
          let n = Math.max(0, Math.round(t * o));
          for (let t = 0; t < a; t++) {
            let r = e.getChannelData(Math.min(t, e.numberOfChannels - 1)),
              i = s.length - n;
            s.getChannelData(t).set(
              i >= r.length ? r : r.subarray(0, Math.max(0, i)),
              n,
            );
          }
        }
        return s;
      } finally {
        t.dispose();
      }
    }
    getDecodeCtx() {
      return ((this.decodeCtx ||= new AudioContext()), this.decodeCtx);
    }
    getPeaks(e, t, n, r) {
      let i = this.getAudioBuffer(e);
      if (!i || t <= 0) return [];
      let a = `${N3(e)}|${t}|${n.toFixed(3)}|${r.toFixed(3)}`,
        o = this.peaksCache.get(a);
      if (o) return o;
      let s = C2(i, t, n, Math.min(r, i.duration));
      if (this.peaksCache.size > 400) {
        let e = this.peaksCache.keys().next().value;
        e !== void 0 && this.peaksCache.delete(e);
      }
      return (this.peaksCache.set(a, s), s);
    }
    invalidatePeaks(e) {
      for (let t of [...this.peaksCache.keys()])
        t.startsWith(`${e}|`) && this.peaksCache.delete(t);
    }
    evict(e) {
      let t = this.entries.get(e);
      t &&
        (t.objectUrl && URL.revokeObjectURL(t.objectUrl),
        t.imageBitmap?.close(),
        this.releaseVideoEls(t),
        this.entries.delete(e),
        this.invalidatePeaks(e));
    }
    evictRef(e) {
      e.source !== `text` && this.evict(N3(e));
    }
    dispose() {
      this.disposed = !0;
      for (let e of [...this.entries.keys()]) this.evict(e);
      (this.peaksCache.clear(),
        (this.videoHost &&= (this.videoHost.remove(), null)),
        (this.decodeCtx &&= (this.decodeCtx.close(), null)));
    }
    revive() {
      this.disposed = !1;
    }
  },
  Wme = 0.12;
