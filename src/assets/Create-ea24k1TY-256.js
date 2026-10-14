// Create-ea24k1TY 256 — math
// Lines 85914-86433 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var B3 = {
    doc: v3(),
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
  V3 = [],
  H3 = [],
  U3 = 0,
  W3 = !1,
  G3 = Ee()((e, t) => {
    let n = (n) => {
      let r = t().doc,
        i = n(r);
      i !== r &&
        (U3 > 0 ? (W3 ||= (V3.push(r), !0)) : V3.push(r),
        V3.length > ume && V3.shift(),
        (H3 = []),
        e({
          doc: i,
          docVersion: t().docVersion + 1,
          canUndo: !0,
          canRedo: !1,
        }));
    };
    return {
      ...B3,
      loadDoc: (n) => {
        ((V3 = []),
          (H3 = []),
          (U3 = 0),
          (W3 = !1),
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
        ((V3 = []),
          (H3 = []),
          (U3 = 0),
          (W3 = !1),
          e({
            ...B3,
            doc: v3(),
            docVersion: t().docVersion + 1,
            docEpoch: t().docEpoch + 1,
          }));
      },
      undo: () => {
        if (U3 > 0) return;
        let n = V3.pop();
        n &&
          (H3.push(t().doc),
          e({
            doc: n,
            docVersion: t().docVersion + 1,
            canUndo: V3.length > 0,
            canRedo: !0,
            selectedKeyframe: null,
          }));
      },
      redo: () => {
        if (U3 > 0) return;
        let n = H3.pop();
        n &&
          (V3.push(t().doc),
          e({
            doc: n,
            docVersion: t().docVersion + 1,
            canUndo: !0,
            canRedo: H3.length > 0,
            selectedKeyframe: null,
          }));
      },
      beginGesture: () => {
        ((U3 += 1), U3 === 1 && (W3 = !1));
      },
      endGesture: () => {
        ((U3 = Math.max(0, U3 - 1)), U3 === 0 && (W3 = !1));
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
      setZoom: (t) => e({ pxPerSec: Math.min(fme, Math.max(dme, t)) }),
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
        let a = u3(`trk`),
          o = {
            id: u3(`clip`),
            asset: r,
            start_sec: Math.max(0, i.start_sec),
            duration_sec: Math.max(f3, i.duration_sec),
            in_sec: 0,
            transform: rme(i.x, i.y),
            ...(i.text ? { text: i.text } : {}),
            ...(t === `video` && i.with_audio !== !1 ? { audio: g3() } : {}),
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
            id: u3(`clip`),
            asset: r,
            start_sec: Math.max(0, i.start_sec),
            duration_sec: Math.max(f3, i.duration_sec),
            in_sec: 0,
            audio: g3(),
          },
          o = t;
        return (
          n((e) => {
            let t = o
              ? e.tracks.find((e) => e.id === o && e.kind === `audio`)
              : null;
            if (t)
              return F3(e, t.id, (e) => ({ ...e, clips: [...e.clips, a] }));
            o = u3(`trk`);
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
            duration_sec: Math.max(f3, e.duration_sec || 5),
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
      renameTrack: (e, t) => n((n) => F3(n, e, (e) => ({ ...e, name: t }))),
      setTrackMuted: (e, t) => n((n) => F3(n, e, (e) => ({ ...e, muted: t }))),
      setTrackHidden: (e, t) =>
        n((n) => F3(n, e, (e) => ({ ...e, hidden: t }))),
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
        n((n) => I3(n, e, t, (e) => ({ ...e, start_sec: Math.max(0, r) }))),
      moveAudioClipToTrack: (r, i, a, o) => {
        (n((e) => {
          let t = L3(e, r, a),
            n = e.tracks.find((e) => e.id === i);
          if (!t || !n || n.kind !== `audio`) return e;
          let s = F3(e, r, (e) => ({
            ...e,
            clips: e.clips.filter((e) => e.id !== a),
          }));
          return (
            (s = F3(s, i, (e) => ({
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
            return I3(e, r, i, (e) => ({ ...e, start_sec: Math.max(0, a) }));
          o = u3(`trk`);
          let s = {
              id: o,
              kind: `audio`,
              name: t.name,
              muted: t.muted,
              hidden: t.hidden,
              clips: [{ ...n, start_sec: Math.max(0, a) }],
            },
            c = F3(e, r, (e) => ({
              ...e,
              clips: e.clips.filter((e) => e.id !== i),
            }));
          return { ...c, tracks: [...c.tracks, s] };
        }),
          o && t().selectedClipId === i && e({ selectedTrackId: o }));
      },
      trimClipLeft: (e, t, r, i) =>
        n((n) =>
          I3(n, e, t, (e) => {
            let t = y3(e),
              n = Math.min(r, t - f3);
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
          I3(n, e, t, (e) => {
            let t = Math.max(r, e.start_sec + f3);
            return (
              i !== null && (t = Math.min(t, e.start_sec + (i - e.in_sec))),
              { ...e, duration_sec: Math.max(f3, t - e.start_sec) }
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
          if (s <= o.start_sec + 0.05 || s >= y3(o) - 0.05) return n;
          let c = { ...o, duration_sec: s - o.start_sec };
          delete c.fade_out_sec;
          let l = {
            ...o,
            id: u3(`clip`),
            start_sec: s,
            in_sec: o.in_sec + (s - o.start_sec),
            duration_sec: y3(o) - s,
          };
          if ((delete l.fade_in_sec, a.kind === `audio`))
            return F3(n, e, (e) => ({
              ...e,
              clips: e.clips.flatMap((e) => (e.id === t ? [c, l] : [e])),
            }));
          let u = {
              id: u3(`trk`),
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
            : O3(t.kind) || t.clips.length <= 1
              ? { ...e, tracks: e.tracks.filter((e) => e.id !== r) }
              : F3(e, r, (e) => ({
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
          I3(n, e, t, (e) =>
            e.audio ? { ...e, audio: { ...e.audio, ...r } } : e,
          ),
        ),
      setClipFade: (e, t, r) =>
        n((n) =>
          I3(n, e, t, (e) => {
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
          I3(n, e, t, (e) => {
            let t = S3({
                ...(e.crop ?? { left: 0, top: 0, right: 0, bottom: 0 }),
                ...r,
              }),
              n = { ...e };
            return (C3(t) ? (n.crop = t) : delete n.crop, n);
          }),
        ),
      setTextStyle: (e, t, r) =>
        n((n) =>
          I3(n, e, t, (e) =>
            e.text ? { ...e, text: { ...e.text, ...r } } : e,
          ),
        ),
      setTransformValueAt: (e, t, r, i, a) =>
        n((n) => {
          let o = L3(n, e, t);
          if (!o?.transform) return n;
          let s = o.transform[r];
          if (!s.keyframes || s.keyframes.length === 0)
            return z3(n, e, t, r, () => ({ value: i }));
          let c = x3(o, a),
            l = s.keyframes.find((e) => Math.abs(e.time_sec - c) < 1e-4),
            u = l
              ? s.keyframes.map((e) => (e.id === l.id ? { ...e, value: i } : e))
              : R3([
                  ...s.keyframes,
                  { id: u3(`kf`), time_sec: c, value: i, easing: `linear` },
                ]);
          return z3(n, e, t, r, (e) => ({ ...e, keyframes: u }));
        }),
      setPropAnimated: (e, t, r, i, a) =>
        n((n) => {
          let o = L3(n, e, t);
          if (!o?.transform) return n;
          let s = o.transform[r],
            c = x3(o, a);
          if (i)
            return s.keyframes && s.keyframes.length > 0
              ? n
              : z3(n, e, t, r, (e) => ({
                  ...e,
                  keyframes: [
                    {
                      id: u3(`kf`),
                      time_sec: c,
                      value: e.value,
                      easing: `linear`,
                    },
                  ],
                }));
          let l = E3(s, c);
          return z3(n, e, t, r, () => ({ value: l }));
        }),
      addKeyframeAt: (e, t, r, i) =>
        n((n) => {
          let a = L3(n, e, t);
          if (!a?.transform) return n;
          let o = a.transform[r],
            s = x3(a, i),
            c = E3(o, s);
          if (o.keyframes?.some((e) => Math.abs(e.time_sec - s) < 1e-4))
            return n;
          let l = R3([
            ...(o.keyframes ?? []),
            { id: u3(`kf`), time_sec: s, value: c, easing: `linear` },
          ]);
          return z3(n, e, t, r, (e) => ({ ...e, keyframes: l }));
        }),
      moveKeyframe: (e, t, r, i, a) =>
        n((n) =>
          z3(n, e, t, r, (e) =>
            e.keyframes
              ? {
                  ...e,
                  keyframes: R3(
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
          z3(e, r, i, a, (e) => {
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
