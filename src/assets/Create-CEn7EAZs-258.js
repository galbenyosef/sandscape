// Create-CEn7EAZs 258 — math
// Lines 86696-87215 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var z3 = {
    doc: _3(),
    docVersion: 0,
    docEpoch: 0,
    mediaVersion: 0,
    audioVersion: 0,
    selectedTrackId: null,
    selectedClipId: null,
    selectedKeyframe: null,
    expandedTrackIds: {},
    pxPerSec: 80,
    editingTextClip: null,
    canUndo: !1,
    canRedo: !1,
  },
  B3 = [],
  V3 = [],
  H3 = 0,
  U3 = !1,
  W3 = Ee()((e, t) => {
    let n = (n) => {
      let r = t().doc,
        i = n(r);
      i !== r &&
        (H3 > 0 ? (U3 ||= (B3.push(r), !0)) : B3.push(r),
        B3.length > Ume && B3.shift(),
        (V3 = []),
        e({
          doc: i,
          docVersion: t().docVersion + 1,
          canUndo: !0,
          canRedo: !1,
        }));
    };
    return {
      ...z3,
      loadDoc: (n) => {
        ((B3 = []),
          (V3 = []),
          (H3 = 0),
          (U3 = !1),
          e({
            doc: n,
            docVersion: t().docVersion + 1,
            docEpoch: t().docEpoch + 1,
            selectedTrackId: null,
            selectedClipId: null,
            selectedKeyframe: null,
            expandedTrackIds: {},
            canUndo: !1,
            canRedo: !1,
          }));
      },
      reset: () => {
        ((B3 = []),
          (V3 = []),
          (H3 = 0),
          (U3 = !1),
          e({
            ...z3,
            doc: _3(),
            docVersion: t().docVersion + 1,
            docEpoch: t().docEpoch + 1,
          }));
      },
      undo: () => {
        if (H3 > 0) return;
        let n = B3.pop();
        n &&
          (V3.push(t().doc),
          e({
            doc: n,
            docVersion: t().docVersion + 1,
            canUndo: B3.length > 0,
            canRedo: !0,
            selectedKeyframe: null,
          }));
      },
      redo: () => {
        if (H3 > 0) return;
        let n = V3.pop();
        n &&
          (B3.push(t().doc),
          e({
            doc: n,
            docVersion: t().docVersion + 1,
            canUndo: !0,
            canRedo: V3.length > 0,
            selectedKeyframe: null,
          }));
      },
      beginGesture: () => {
        ((H3 += 1), H3 === 1 && (U3 = !1));
      },
      endGesture: () => {
        ((H3 = Math.max(0, H3 - 1)), H3 === 0 && (U3 = !1));
      },
      bumpMediaVersion: () => e({ mediaVersion: t().mediaVersion + 1 }),
      bumpAudioVersion: () => e({ audioVersion: t().audioVersion + 1 }),
      selectClip: (t, n) =>
        e({ selectedTrackId: t, selectedClipId: n, selectedKeyframe: null }),
      selectKeyframe: (t) => e({ selectedKeyframe: t }),
      setEditingTextClip: (t) => e({ editingTextClip: t }),
      toggleTrackExpanded: (n) =>
        e({
          expandedTrackIds: {
            ...t().expandedTrackIds,
            [n]: !t().expandedTrackIds[n],
          },
        }),
      setZoom: (t) => e({ pxPerSec: Math.min(Gme, Math.max(Wme, t)) }),
      updateSettings: (e) =>
        n((t) => ({ ...t, settings: { ...t.settings, ...e } })),
      setCompName: (e) => n((t) => ({ ...t, name: e })),
      registerLocalMedia: (e) =>
        n((t) => ({
          ...t,
          media: [...t.media.filter((t) => t.media_id !== e.media_id), e],
        })),
      removeLocalMedia: (r) => {
        n((e) => {
          let t = (e) => e.asset.source === `local` && e.asset.media_id === r,
            n = e.tracks
              .map((e) => ({ ...e, clips: e.clips.filter((e) => !t(e)) }))
              .filter((e) => e.clips.length > 0);
          return {
            ...e,
            tracks: n,
            media: e.media.filter((e) => e.media_id !== r),
          };
        });
        let i = t().selectedTrackId;
        i &&
          !t().doc.tracks.some((e) => e.id === i) &&
          e({
            selectedTrackId: null,
            selectedClipId: null,
            selectedKeyframe: null,
          });
      },
      addVisualTrack: (t, r, i) => {
        let a = l3(`trk`),
          o = {
            id: l3(`clip`),
            asset: r,
            start_sec: Math.max(0, i.start_sec),
            duration_sec: Math.max(d3, i.duration_sec),
            in_sec: 0,
            transform: Ime(i.x, i.y),
            ...(i.text ? { text: i.text } : {}),
            ...(t === `video` && i.with_audio !== !1 ? { audio: h3() } : {}),
          },
          s = {
            id: a,
            kind: t,
            name: i.name,
            muted: !1,
            hidden: !1,
            clips: [o],
          };
        return (
          n((e) => ({ ...e, tracks: [s, ...e.tracks] })),
          e({ selectedTrackId: a, selectedClipId: o.id }),
          a
        );
      },
      addAudioClip: (t, r, i) => {
        let a = {
            id: l3(`clip`),
            asset: r,
            start_sec: Math.max(0, i.start_sec),
            duration_sec: Math.max(d3, i.duration_sec),
            in_sec: 0,
            audio: h3(),
          },
          o = t;
        return (
          n((e) => {
            let t = o
              ? e.tracks.find((e) => e.id === o && e.kind === `audio`)
              : null;
            if (t)
              return P3(e, t.id, (e) => ({ ...e, clips: [...e.clips, a] }));
            o = l3(`trk`);
            let n = {
              id: o,
              kind: `audio`,
              name: i.name,
              muted: !1,
              hidden: !1,
              clips: [a],
            };
            return { ...e, tracks: [...e.tracks, n] };
          }),
          e({ selectedTrackId: o, selectedClipId: a.id }),
          a.id
        );
      },
      addAssetFromPayload: (e, n) => {
        let { ref: r, media_type: i, name: a } = e;
        if (i === `audio`) {
          t().addAudioClip(n.audio_track_id ?? null, r, {
            name: a,
            start_sec: n.start_sec,
            duration_sec: Math.max(d3, e.duration_sec || 5),
          });
          return;
        }
        let o = t().doc,
          s = i === `video` && e.duration_sec > 0 ? e.duration_sec : 5;
        t().addVisualTrack(i, r, {
          name: a,
          start_sec: n.start_sec,
          duration_sec: s,
          x: n.x ?? o.settings.width / 2,
          y: n.y ?? o.settings.height / 2,
        });
      },
      removeTrack: (r) => {
        (n((e) => ({ ...e, tracks: e.tracks.filter((e) => e.id !== r) })),
          t().selectedTrackId === r &&
            e({
              selectedTrackId: null,
              selectedClipId: null,
              selectedKeyframe: null,
            }));
      },
      renameTrack: (e, t) => n((n) => P3(n, e, (e) => ({ ...e, name: t }))),
      setTrackMuted: (e, t) => n((n) => P3(n, e, (e) => ({ ...e, muted: t }))),
      setTrackHidden: (e, t) =>
        n((n) => P3(n, e, (e) => ({ ...e, hidden: t }))),
      reorderTracks: (e, t) =>
        n((n) => {
          if (e === t || e < 0 || e >= n.tracks.length) return n;
          let r = [...n.tracks],
            [i] = r.splice(e, 1);
          return (
            r.splice(Math.max(0, Math.min(r.length, t)), 0, i),
            { ...n, tracks: r }
          );
        }),
      moveClip: (e, t, r) =>
        n((n) => F3(n, e, t, (e) => ({ ...e, start_sec: Math.max(0, r) }))),
      moveAudioClipToTrack: (r, i, a, o) => {
        (n((e) => {
          let t = I3(e, r, a),
            n = e.tracks.find((e) => e.id === i);
          if (!t || !n || n.kind !== `audio`) return e;
          let s = P3(e, r, (e) => ({
            ...e,
            clips: e.clips.filter((e) => e.id !== a),
          }));
          return (
            (s = P3(s, i, (e) => ({
              ...e,
              clips: [...e.clips, { ...t, start_sec: Math.max(0, o) }],
            }))),
            (s = {
              ...s,
              tracks: s.tracks.filter((e) => e.id !== r || e.clips.length > 0),
            }),
            s
          );
        }),
          t().selectedClipId === a && e({ selectedTrackId: i }));
      },
      moveAudioClipToNewTrack: (r, i, a) => {
        let o = null;
        (n((e) => {
          let t = e.tracks.find((e) => e.id === r),
            n = t?.clips.find((e) => e.id === i);
          if (!t || !n || t.kind !== `audio`) return e;
          if (t.clips.length === 1)
            return F3(e, r, i, (e) => ({ ...e, start_sec: Math.max(0, a) }));
          o = l3(`trk`);
          let s = {
              id: o,
              kind: `audio`,
              name: t.name,
              muted: t.muted,
              hidden: t.hidden,
              clips: [{ ...n, start_sec: Math.max(0, a) }],
            },
            c = P3(e, r, (e) => ({
              ...e,
              clips: e.clips.filter((e) => e.id !== i),
            }));
          return { ...c, tracks: [...c.tracks, s] };
        }),
          o && t().selectedClipId === i && e({ selectedTrackId: o }));
      },
      trimClipLeft: (e, t, r, i) =>
        n((n) =>
          F3(n, e, t, (e) => {
            let t = v3(e),
              n = Math.min(r, t - d3);
            if (i !== null) {
              let r = e.start_sec - e.in_sec;
              n = Math.max(0, Math.max(n, r));
              let i = n - e.start_sec;
              return {
                ...e,
                start_sec: n,
                in_sec: Math.max(0, e.in_sec + i),
                duration_sec: t - n,
              };
            }
            n = Math.max(0, n);
            let a = n - e.start_sec,
              o = e.transform;
            if (o && a !== 0) {
              let e = { ...o };
              for (let t of Object.keys(e)) {
                let n = e[t];
                n.keyframes &&
                  n.keyframes.length > 0 &&
                  (e[t] = {
                    ...n,
                    keyframes: n.keyframes.map((e) => ({
                      ...e,
                      time_sec: e.time_sec - a,
                    })),
                  });
              }
              o = e;
            }
            return { ...e, start_sec: n, duration_sec: t - n, transform: o };
          }),
        ),
      trimClipRight: (e, t, r, i) =>
        n((n) =>
          F3(n, e, t, (e) => {
            let t = Math.max(r, e.start_sec + d3);
            return (
              i !== null && (t = Math.min(t, e.start_sec + (i - e.in_sec))),
              { ...e, duration_sec: Math.max(d3, t - e.start_sec) }
            );
          }),
        ),
      splitClipAt: (e, t, r) =>
        n((n) => {
          let i = n.tracks.findIndex((t) => t.id === e);
          if (i === -1) return n;
          let a = n.tracks[i],
            o = a.clips.find((e) => e.id === t);
          if (!o) return n;
          let s = r;
          if (s <= o.start_sec + 0.05 || s >= v3(o) - 0.05) return n;
          let c = { ...o, duration_sec: s - o.start_sec };
          delete c.fade_out_sec;
          let l = {
            ...o,
            id: l3(`clip`),
            start_sec: s,
            in_sec: o.in_sec + (s - o.start_sec),
            duration_sec: v3(o) - s,
          };
          if ((delete l.fade_in_sec, a.kind === `audio`))
            return P3(n, e, (e) => ({
              ...e,
              clips: e.clips.flatMap((e) => (e.id === t ? [c, l] : [e])),
            }));
          let u = {
              id: l3(`trk`),
              kind: a.kind,
              name: a.name,
              muted: a.muted,
              hidden: a.hidden,
              clips: [l],
            },
            d = n.tracks.map((e, n) =>
              n === i
                ? { ...e, clips: e.clips.map((e) => (e.id === t ? c : e)) }
                : e,
            );
          return (d.splice(i + 1, 0, u), { ...n, tracks: d });
        }),
      removeClip: (r, i) => {
        (n((e) => {
          let t = e.tracks.find((e) => e.id === r);
          return !t || !t.clips.some((e) => e.id === i)
            ? e
            : D3(t.kind) || t.clips.length <= 1
              ? { ...e, tracks: e.tracks.filter((e) => e.id !== r) }
              : P3(e, r, (e) => ({
                  ...e,
                  clips: e.clips.filter((e) => e.id !== i),
                }));
        }),
          t().selectedClipId === i &&
            e({
              selectedClipId: null,
              selectedTrackId: null,
              selectedKeyframe: null,
            }));
      },
      setClipAudio: (e, t, r) =>
        n((n) =>
          F3(n, e, t, (e) =>
            e.audio ? { ...e, audio: { ...e.audio, ...r } } : e,
          ),
        ),
      setClipFade: (e, t, r) =>
        n((n) =>
          F3(n, e, t, (e) => {
            let t = Math.max(0, e.duration_sec),
              n = { ...e };
            if (r.fade_in_sec !== void 0) {
              let e = Math.max(0, Math.min(t, r.fade_in_sec));
              e > 0 ? (n.fade_in_sec = e) : delete n.fade_in_sec;
            }
            if (r.fade_out_sec !== void 0) {
              let e = Math.max(0, Math.min(t, r.fade_out_sec));
              e > 0 ? (n.fade_out_sec = e) : delete n.fade_out_sec;
            }
            return n;
          }),
        ),
      setClipCrop: (e, t, r) =>
        n((n) =>
          F3(n, e, t, (e) => {
            let t = x3({
                ...(e.crop ?? { left: 0, top: 0, right: 0, bottom: 0 }),
                ...r,
              }),
              n = { ...e };
            return (S3(t) ? (n.crop = t) : delete n.crop, n);
          }),
        ),
      setTextStyle: (e, t, r) =>
        n((n) =>
          F3(n, e, t, (e) =>
            e.text ? { ...e, text: { ...e.text, ...r } } : e,
          ),
        ),
      setTransformValueAt: (e, t, r, i, a) =>
        n((n) => {
          let o = I3(n, e, t);
          if (!o?.transform) return n;
          let s = o.transform[r];
          if (!s.keyframes || s.keyframes.length === 0)
            return R3(n, e, t, r, () => ({ value: i }));
          let c = b3(o, a),
            l = s.keyframes.find((e) => Math.abs(e.time_sec - c) < 1e-4),
            u = l
              ? s.keyframes.map((e) => (e.id === l.id ? { ...e, value: i } : e))
              : L3([
                  ...s.keyframes,
                  { id: l3(`kf`), time_sec: c, value: i, easing: `linear` },
                ]);
          return R3(n, e, t, r, (e) => ({ ...e, keyframes: u }));
        }),
      setPropAnimated: (e, t, r, i, a) =>
        n((n) => {
          let o = I3(n, e, t);
          if (!o?.transform) return n;
          let s = o.transform[r],
            c = b3(o, a);
          if (i)
            return s.keyframes && s.keyframes.length > 0
              ? n
              : R3(n, e, t, r, (e) => ({
                  ...e,
                  keyframes: [
                    {
                      id: l3(`kf`),
                      time_sec: c,
                      value: e.value,
                      easing: `linear`,
                    },
                  ],
                }));
          let l = T3(s, c);
          return R3(n, e, t, r, () => ({ value: l }));
        }),
      addKeyframeAt: (e, t, r, i) =>
        n((n) => {
          let a = I3(n, e, t);
          if (!a?.transform) return n;
          let o = a.transform[r],
            s = b3(a, i),
            c = T3(o, s);
          if (o.keyframes?.some((e) => Math.abs(e.time_sec - s) < 1e-4))
            return n;
          let l = L3([
            ...(o.keyframes ?? []),
            { id: l3(`kf`), time_sec: s, value: c, easing: `linear` },
          ]);
          return R3(n, e, t, r, (e) => ({ ...e, keyframes: l }));
        }),
      moveKeyframe: (e, t, r, i, a) =>
        n((n) =>
          R3(n, e, t, r, (e) =>
            e.keyframes
              ? {
                  ...e,
                  keyframes: L3(
                    e.keyframes.map((e) =>
                      e.id === i ? { ...e, time_sec: Math.max(0, a) } : e,
                    ),
                  ),
                }
              : e,
          ),
        ),
      removeKeyframe: (r, i, a, o) => {
        (n((e) =>
          R3(e, r, i, a, (e) => {
            if (!e.keyframes) return e;
            let t = e.keyframes.filter((e) => e.id !== o);
            return t.length === 0
              ? { value: e.keyframes.find((e) => e.id === o)?.value ?? e.value }
              : { ...e, keyframes: t };
          }),
        ),
          t().selectedKeyframe?.keyframe_id === o &&
            e({ selectedKeyframe: null }));
      },
    };
  });
