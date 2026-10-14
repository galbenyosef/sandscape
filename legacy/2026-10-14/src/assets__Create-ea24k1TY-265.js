// assets__Create-ea24k1TY 265 — classname
// Lines 88641-89875 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var kme = ({ track: e, clip: t, prop: n, engine: r }) => {
    let i = (0, X.useRef)(null),
      a = t.transform?.[n],
      o = !!a?.keyframes && a.keyframes.length > 0,
      s = a?.keyframes ?? [],
      c = 0.001,
      [l, u] = (0, X.useState)(!1);
    (0, X.useEffect)(
      () =>
        r.subscribePlayhead(({ time: e }) => {
          let r = i.current;
          r && document.activeElement !== r && (r.value = d6(n, D3(t, n, e)));
          let a = s.some((n) => Math.abs(f6(t, n) - e) < c);
          u((e) => (e === a ? e : a));
        }),
      [r, t, n],
    );
    let d = (0, X.useCallback)(() => {
        let a = i.current;
        if (!a) return;
        let o = parseFloat(a.value),
          s = D3(t, n, r.getCurrentTime());
        if (Number.isNaN(o)) {
          a.value = d6(n, s);
          return;
        }
        d6(n, o) !== d6(n, s) &&
          G3.getState().setTransformValueAt(
            e.id,
            t.id,
            n,
            o,
            r.getCurrentTime(),
          );
      }, [t, r, n, e.id]),
      f = (0, X.useCallback)(() => {
        let e = r.getCurrentTime(),
          n = s.map((e) => f6(t, e)).filter((t) => t < e - c);
        n.length > 0 && r.seek(Math.max(...n));
      }, [t, r, s]),
      p = (0, X.useCallback)(() => {
        let e = r.getCurrentTime(),
          n = s.map((e) => f6(t, e)).filter((t) => t > e + c);
        n.length > 0 && r.seek(Math.min(...n));
      }, [t, r, s]),
      m = (0, X.useCallback)(() => {
        let i = G3.getState(),
          a = r.getCurrentTime(),
          o = s.find((e) => Math.abs(f6(t, e) - a) < c);
        o
          ? i.removeKeyframe(e.id, t.id, n, o.id)
          : i.addKeyframeAt(e.id, t.id, n, a);
      }, [t, r, s, n, e.id]);
    return (0, Z.jsxs)(`div`, {
      className: `flex h-full items-center gap-1 border-b border-r border-gray-800/40 bg-card px-1.5 pl-7`,
      children: [
        (0, Z.jsx)(`button`, {
          type: `button`,
          onClick: () =>
            G3.getState().setPropAnimated(
              e.id,
              t.id,
              n,
              !o,
              r.getCurrentTime(),
            ),
          className: `shrink-0 rounded p-0.5 transition-colors hover:bg-gray-700/50 ${o ? `text-violet-300` : `text-gray-600 hover:text-gray-300`}`,
          title: o
            ? `Disable keyframing (freeze current value)`
            : `Enable keyframing`,
          "aria-label": `Toggle keyframing for ${m3[n]}`,
          children: (0, Z.jsx)(Se, {
            className: `h-2.5 w-2.5 ${o ? `fill-violet-300` : ``}`,
          }),
        }),
        (0, Z.jsx)(`span`, {
          className: `w-[64px] shrink-0 truncate text-[10px] text-muted-foreground`,
          children: m3[n],
        }),
        (0, Z.jsx)(`input`, {
          ref: i,
          defaultValue: d6(n, D3(t, n, r.getCurrentTime())),
          onBlur: d,
          onKeyDown: (e) => {
            (e.key === `Enter` && e.target.blur(), e.stopPropagation());
          },
          onPointerDown: (e) => e.stopPropagation(),
          className: `w-[58px] min-w-0 rounded border border-gray-700/60 bg-card px-1 py-px text-right font-mono text-[10px] text-gray-200 outline-none focus:border-violet-500/60`,
        }),
        (0, Z.jsxs)(`div`, {
          className: `ml-auto flex shrink-0 items-center`,
          children: [
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: f,
              disabled: s.length === 0,
              className: `rounded p-0.5 text-gray-500 transition-colors hover:bg-gray-700/50 hover:text-gray-200 disabled:opacity-30`,
              title: `Previous keyframe`,
              "aria-label": `Previous keyframe`,
              children: (0, Z.jsx)(ye, { className: `h-2.5 w-2.5` }),
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: m,
              className: `rounded p-0.5 transition-colors hover:bg-gray-700/50 ${l ? `text-amber-300` : `text-gray-500 hover:text-gray-200`}`,
              title: l
                ? `Remove keyframe at playhead`
                : `Add keyframe at playhead`,
              "aria-label": `Toggle keyframe at playhead`,
              children: (0, Z.jsx)(go, {
                className: `h-2.5 w-2.5 ${l ? `fill-amber-300` : ``}`,
              }),
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: p,
              disabled: s.length === 0,
              className: `rounded p-0.5 text-gray-500 transition-colors hover:bg-gray-700/50 hover:text-gray-200 disabled:opacity-30`,
              title: `Next keyframe`,
              "aria-label": `Next keyframe`,
              children: (0, Z.jsx)(De, { className: `h-2.5 w-2.5` }),
            }),
          ],
        }),
      ],
    });
  },
  Ame = ({
    track: e,
    clip: t,
    prop: n,
    pxPerSec: r,
    engine: i,
    timeFromClientX: a,
  }) => {
    let o = (0, X.useRef)(null),
      s = (0, X.useRef)(!1),
      c = G3((e) => e.selectedKeyframe),
      l = t.transform?.[n]?.keyframes ?? [],
      u = (0, X.useCallback)(
        (r) => (i) => {
          i.button !== 0 ||
            o.current ||
            (i.stopPropagation(),
            i.preventDefault(),
            (o.current = r),
            (s.current = !1),
            i.target.setPointerCapture(i.pointerId),
            G3.getState().beginGesture(),
            G3.getState().selectKeyframe({
              track_id: e.id,
              clip_id: t.id,
              prop: n,
              keyframe_id: r,
            }));
        },
        [t.id, n, e.id],
      ),
      d = (0, X.useCallback)(
        (r) => {
          let i = o.current;
          if (!i) return;
          s.current = !0;
          let c = a(r.clientX) - (t.start_sec - t.in_sec);
          G3.getState().moveKeyframe(e.id, t.id, n, i, c);
        },
        [t, n, a, e.id],
      ),
      f = (0, X.useCallback)(() => {
        o.current && ((o.current = null), G3.getState().endGesture());
      }, []);
    return (0, Z.jsxs)(`div`, {
      className: `relative h-full border-b border-gray-800/40 bg-card`,
      children: [
        (0, Z.jsx)(`div`, {
          className: `absolute inset-y-0 bg-white/[0.03]`,
          style: {
            left: Math.round(t.start_sec * r),
            width: Math.max(1, Math.round(t.duration_sec * r)),
          },
        }),
        l.map((a) => {
          let o = Math.round(f6(t, a) * r),
            l = c?.keyframe_id === a.id && c?.clip_id === t.id && c?.prop === n;
          return (0, Z.jsx)(
            `div`,
            {
              role: `button`,
              tabIndex: 0,
              onPointerDown: u(a.id),
              onPointerMove: d,
              onPointerUp: f,
              onPointerCancel: f,
              onClick: (r) => {
                if ((r.stopPropagation(), s.current)) {
                  s.current = !1;
                  return;
                }
                (i.seek(f6(t, a)),
                  G3.getState().selectKeyframe({
                    track_id: e.id,
                    clip_id: t.id,
                    prop: n,
                    keyframe_id: a.id,
                  }));
              },
              style: { left: o - 5 },
              className: `absolute top-1/2 z-10 h-[10px] w-[10px] -translate-y-1/2 cursor-ew-resize`,
              title: `${m3[n]} = ${d6(n, a.value)}`,
              children: (0, Z.jsx)(`div`, {
                className: `h-full w-full rotate-45 border ${l ? `border-white bg-amber-300` : `border-amber-200/80 bg-amber-400/90 hover:bg-amber-300`}`,
              }),
            },
            a.id,
          );
        }),
      ],
    });
  },
  p6 = ({ track: e, clip: t }) => {
    let n = t.audio;
    if (!n)
      return (0, Z.jsx)(`div`, {
        className: `h-full border-b border-r border-gray-800/40 bg-card`,
      });
    let r = (n, r, i) => {
      let a = parseFloat(r);
      if (Number.isNaN(a)) return;
      let o = Math.max(0, Math.min(i, a)),
        s = G3.getState();
      n === `gain`
        ? s.setClipAudio(e.id, t.id, { gain: o })
        : s.setClipFade(e.id, t.id, { [n]: o });
    };
    return (0, Z.jsxs)(`div`, {
      className: `flex h-full items-center gap-1.5 border-b border-r border-gray-800/40 bg-card px-1.5 pl-7 text-[10px] text-muted-foreground`,
      children: [
        (0, Z.jsxs)(`label`, {
          className: `flex items-center gap-1`,
          children: [
            `Gain`,
            (0, Z.jsx)(
              `input`,
              {
                defaultValue: n.gain.toFixed(2),
                onBlur: (e) => r(`gain`, e.target.value, 2),
                onKeyDown: (e) => {
                  (e.key === `Enter` && e.target.blur(), e.stopPropagation());
                },
                onPointerDown: (e) => e.stopPropagation(),
                className: `w-[44px] rounded border border-gray-700/60 bg-card px-1 py-px text-right font-mono text-[10px] text-gray-200 outline-none focus:border-violet-500/60`,
              },
              `g${n.gain}`,
            ),
          ],
        }),
        (0, Z.jsxs)(`label`, {
          className: `flex items-center gap-1`,
          children: [
            `In`,
            (0, Z.jsx)(
              `input`,
              {
                defaultValue: (t.fade_in_sec ?? 0).toFixed(2),
                onBlur: (e) => r(`fade_in_sec`, e.target.value, t.duration_sec),
                onKeyDown: (e) => {
                  (e.key === `Enter` && e.target.blur(), e.stopPropagation());
                },
                onPointerDown: (e) => e.stopPropagation(),
                className: `w-[44px] rounded border border-gray-700/60 bg-card px-1 py-px text-right font-mono text-[10px] text-gray-200 outline-none focus:border-violet-500/60`,
              },
              `i${t.fade_in_sec ?? 0}`,
            ),
          ],
        }),
        (0, Z.jsxs)(`label`, {
          className: `flex items-center gap-1`,
          children: [
            `Out`,
            (0, Z.jsx)(
              `input`,
              {
                defaultValue: (t.fade_out_sec ?? 0).toFixed(2),
                onBlur: (e) =>
                  r(`fade_out_sec`, e.target.value, t.duration_sec),
                onKeyDown: (e) => {
                  (e.key === `Enter` && e.target.blur(), e.stopPropagation());
                },
                onPointerDown: (e) => e.stopPropagation(),
                className: `w-[44px] rounded border border-gray-700/60 bg-card px-1 py-px text-right font-mono text-[10px] text-gray-200 outline-none focus:border-violet-500/60`,
              },
              `o${t.fade_out_sec ?? 0}`,
            ),
          ],
        }),
      ],
    });
  },
  m6 = 7,
  h6 = 9,
  jme = { video: Qt, image: pn, text: is, audio: jo },
  Mme = {
    video: {
      border: `border-sky-700/60`,
      bg: `bg-sky-900/40`,
      sel: `border-sky-400/90 bg-sky-500/25`,
    },
    image: {
      border: `border-emerald-700/60`,
      bg: `bg-emerald-900/40`,
      sel: `border-emerald-400/90 bg-emerald-500/25`,
    },
    text: {
      border: `border-amber-700/60`,
      bg: `bg-amber-900/40`,
      sel: `border-amber-400/90 bg-amber-500/25`,
    },
    audio: {
      border: `border-violet-700/60`,
      bg: `bg-violet-900/40`,
      sel: `border-violet-400/90 bg-violet-500/25`,
    },
  },
  Nme = ({
    clip: e,
    trackId: t,
    trackKind: n,
    pxPerSec: r,
    laneHeight: i,
    label: a,
    selected: o,
    mediaCache: s,
    audioVersion: c,
    timeFromClientX: l,
    snapTime: u,
    onSelect: d,
  }) => {
    let f = (0, X.useRef)(null),
      p = (0, X.useRef)(0),
      m = (0, X.useRef)(null),
      h = (0, X.useRef)(null),
      g = Math.round(e.start_sec * r),
      _ = Math.max(10, Math.round(e.duration_sec * r)),
      v = !!e.audio,
      y = jme[n],
      b = Mme[n],
      x = s.isMissing(e.asset),
      S = (0, X.useCallback)(() => {
        if (e.asset.source === `text` || n === `image`) return null;
        if (n === `audio`) {
          let t = s.getAudioBuffer(e.asset);
          return t ? t.duration : 1 / 0;
        }
        let t = s.getVisualMeta(e.asset);
        return t && t.duration_sec > 0 ? t.duration_sec : 1 / 0;
      }, [e, s, n]),
      { dragProps: C } = Ce({
        kind: `comp-clip`,
        payload: () => ({
          track_id: t,
          clip_id: e.id,
          track_kind: n,
          grab_offset_sec: Math.max(0, l(p.current) - e.start_sec),
        }),
        preview: () =>
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5 rounded-md border border-violet-500/40 bg-card/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
            children: [
              (0, Z.jsx)(y, { className: `h-3 w-3 text-violet-300` }),
              (0, Z.jsx)(`span`, {
                className: `max-w-[160px] truncate`,
                children: a,
              }),
            ],
          }),
        onDragStart: () => G3.getState().beginGesture(),
        onDragEnd: () => G3.getState().endGesture(),
      }),
      w = (0, X.useCallback)(
        (e) => {
          ((p.current = e.clientX), C.onPointerDown(e));
        },
        [C],
      ),
      T = (0, X.useCallback)(
        (e) => (t) => {
          t.button !== 0 ||
            m.current ||
            (t.stopPropagation(),
            t.preventDefault(),
            (m.current = { side: e }),
            t.target.setPointerCapture(t.pointerId),
            G3.getState().beginGesture());
        },
        [],
      ),
      E = (0, X.useCallback)(
        (n) => {
          let r = m.current;
          if (!r) return;
          let i = G3.getState(),
            a = u(l(n.clientX), n.altKey);
          r.side === `left`
            ? i.trimClipLeft(t, e.id, a, S())
            : i.trimClipRight(t, e.id, a, S());
        },
        [e.id, u, S, l, t],
      ),
      D = (0, X.useCallback)(() => {
        m.current && ((m.current = null), G3.getState().endGesture());
      }, []),
      O = (0, X.useCallback)(
        (e) => (t) => {
          t.button !== 0 ||
            h.current ||
            (t.stopPropagation(),
            t.preventDefault(),
            (h.current = { side: e }),
            t.target.setPointerCapture(t.pointerId),
            G3.getState().beginGesture());
        },
        [],
      ),
      k = (0, X.useCallback)(
        (n) => {
          let r = h.current;
          if (!r) return;
          let i = G3.getState(),
            a = l(n.clientX);
          if (r.side === `in`) {
            let n = Math.max(0, Math.min(a - e.start_sec, e.duration_sec));
            i.setClipFade(t, e.id, { fade_in_sec: Math.round(n * 100) / 100 });
          } else {
            let n = Math.max(
              0,
              Math.min(e.start_sec + e.duration_sec - a, e.duration_sec),
            );
            i.setClipFade(t, e.id, { fade_out_sec: Math.round(n * 100) / 100 });
          }
        },
        [e, l, t],
      ),
      A = (0, X.useCallback)(() => {
        h.current && ((h.current = null), G3.getState().endGesture());
      }, []);
    (0, X.useEffect)(() => {
      if (!v) return;
      let t = f.current;
      if (!t) return;
      let n = _,
        r = Math.max(8, i - 18);
      ((t.width = n), (t.height = r));
      let a = t.getContext(`2d`);
      if (!a) return;
      (a.clearRect(0, 0, n, r), s.ensureAudioBuffer(e.asset));
      let c = s.getPeaks(e.asset, n, e.in_sec, e.in_sec + e.duration_sec);
      if (c.length === 0) return;
      a.fillStyle = o ? `rgba(216,180,254,0.85)` : `rgba(196,181,253,0.55)`;
      let l = r / 2;
      for (let e = 0; e < c.length; e++) {
        let t = c[e],
          n = l - t.max * l,
          r = l - t.min * l;
        a.fillRect(e, n, 1, Math.max(1, r - n));
      }
    }, [e, v, i, s, c, o, _]);
    let j = Math.round((e.fade_in_sec ?? 0) * r),
      M = Math.round((e.fade_out_sec ?? 0) * r);
    return (0, Z.jsxs)(`div`, {
      role: `button`,
      tabIndex: 0,
      onPointerDown: w,
      onClick: (e) => {
        (e.stopPropagation(), d());
      },
      onDoubleClick: (n) => {
        e.text &&
          (n.stopPropagation(),
          G3.getState().setEditingTextClip({ track_id: t, clip_id: e.id }));
      },
      style: { ...C.style, left: g, width: _, top: 3, height: i - 6 },
      draggable: !1,
      className: `group absolute cursor-grab overflow-hidden rounded border active:cursor-grabbing ${o ? b.sel : `${b.border} ${b.bg} hover:brightness-125`} ${x ? `opacity-40` : ``}`,
      title: x ? `${a} (missing media — relink in the sidebar)` : a,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `pointer-events-none flex items-center gap-1 px-1.5 pt-0.5`,
          children: [
            (0, Z.jsx)(y, { className: `h-2.5 w-2.5 shrink-0 text-white/60` }),
            (0, Z.jsx)(`span`, {
              className: `truncate text-[9px] text-white/80`,
              children: a,
            }),
            x &&
              (0, Z.jsx)(`span`, {
                className: `text-[8px] text-red-300`,
                children: `missing`,
              }),
          ],
        }),
        v &&
          (0, Z.jsx)(`canvas`, {
            ref: f,
            className: `pointer-events-none block w-full`,
          }),
        (j > 1 || M > 1) &&
          (0, Z.jsxs)(`svg`, {
            className: `pointer-events-none absolute inset-0`,
            width: _,
            height: i - 6,
            "aria-hidden": !0,
            children: [
              j > 1 &&
                (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`polygon`, {
                      points: `0,${i - 6} ${j},0 0,0`,
                      fill: `rgba(94,234,212,0.14)`,
                    }),
                    (0, Z.jsx)(`line`, {
                      x1: 0,
                      y1: i - 6,
                      x2: j,
                      y2: 0,
                      stroke: `#5eead4`,
                      strokeWidth: 2,
                    }),
                  ],
                }),
              M > 1 &&
                (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`polygon`, {
                      points: `${_},${i - 6} ${_ - M},0 ${_},0`,
                      fill: `rgba(94,234,212,0.14)`,
                    }),
                    (0, Z.jsx)(`line`, {
                      x1: _ - M,
                      y1: 0,
                      x2: _,
                      y2: i - 6,
                      stroke: `#5eead4`,
                      strokeWidth: 2,
                    }),
                  ],
                }),
            ],
          }),
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(`div`, {
              onPointerDown: O(`in`),
              onPointerMove: k,
              onPointerUp: A,
              onPointerCancel: A,
              style: { left: Math.max(0, j - h6 / 2), width: h6, height: h6 },
              className: `absolute top-0 z-20 cursor-ew-resize rounded-b-sm border border-teal-300/80 bg-teal-400/80 opacity-0 transition-opacity group-hover:opacity-100`,
              title: `Fade in`,
            }),
            (0, Z.jsx)(`div`, {
              onPointerDown: O(`out`),
              onPointerMove: k,
              onPointerUp: A,
              onPointerCancel: A,
              style: { right: Math.max(0, M - h6 / 2), width: h6, height: h6 },
              className: `absolute top-0 z-20 cursor-ew-resize rounded-b-sm border border-teal-300/80 bg-teal-400/80 opacity-0 transition-opacity group-hover:opacity-100`,
              title: `Fade out`,
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          onPointerDown: T(`left`),
          onPointerMove: E,
          onPointerUp: D,
          onPointerCancel: D,
          style: { width: Math.min(m6, Math.max(2, Math.floor(_ / 3))) },
          className: `absolute inset-y-0 left-0 z-10 cursor-ew-resize border-l-2 border-transparent hover:border-white/70`,
          title: `Trim start`,
        }),
        (0, Z.jsx)(`div`, {
          onPointerDown: T(`right`),
          onPointerMove: E,
          onPointerUp: D,
          onPointerCancel: D,
          style: { width: Math.min(m6, Math.max(2, Math.floor(_ / 3))) },
          className: `absolute inset-y-0 right-0 z-10 cursor-ew-resize border-r-2 border-transparent hover:border-white/70`,
          title: `Trim end`,
        }),
      ],
    });
  },
  Pme = { video: Qt, image: pn, text: is, audio: jo },
  Fme = ({ track: e, index: t, height: n, expanded: r, selected: i }) => {
    let [a, o] = (0, X.useState)(!1),
      [s, c] = (0, X.useState)(e.name),
      l = Pme[e.kind],
      u = O3(e.kind),
      d = e.kind === `audio` || e.kind === `video`,
      {
        sortableProps: f,
        isDragging: p,
        isOver: m,
        dropSide: h,
      } = Te({
        listId: `video-tracks`,
        index: t,
        axis: `y`,
        onReorder: (e, t) => G3.getState().reorderTracks(e, t),
        preview: () =>
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5 rounded-md border border-violet-500/40 bg-card/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
            children: [
              (0, Z.jsx)(l, { className: `h-3 w-3 text-violet-300` }),
              (0, Z.jsx)(`span`, {
                className: `max-w-[140px] truncate`,
                children: e.name,
              }),
            ],
          }),
      }),
      g = (0, X.useCallback)(() => {
        o(!1);
        let t = s.trim();
        t && t !== e.name ? G3.getState().renameTrack(e.id, t) : c(e.name);
      }, [s, e.id, e.name]),
      _ = G3.getState;
    return (0, Z.jsxs)(`div`, {
      ...f,
      style: { ...f.style, height: n },
      className: `relative flex items-center gap-1 border-b border-r border-border bg-card px-1.5 ${i ? `bg-violet-500/10` : ``} ${p ? `opacity-40` : ``}`,
      onClick: () => G3.getState().selectClip(e.id, e.clips[0]?.id ?? null),
      children: [
        m &&
          h &&
          (0, Z.jsx)(`div`, {
            className: `pointer-events-none absolute inset-x-0 z-10 h-0.5 bg-violet-400 ${h === `before` ? `top-0` : `bottom-0`}`,
          }),
        (0, Z.jsx)(O, {
          className: `h-3 w-3 shrink-0 cursor-grab text-gray-600`,
        }),
        (0, Z.jsx)(`button`, {
          type: `button`,
          onClick: (t) => {
            (t.stopPropagation(), G3.getState().toggleTrackExpanded(e.id));
          },
          className: `shrink-0 rounded p-0.5 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200`,
          title: r ? `Collapse` : `Expand properties`,
          "aria-label": r ? `Collapse track` : `Expand track`,
          children: r
            ? (0, Z.jsx)(ti, { className: `h-3 w-3` })
            : (0, Z.jsx)(De, { className: `h-3 w-3` }),
        }),
        (0, Z.jsx)(l, { className: `h-3 w-3 shrink-0 text-gray-500` }),
        a
          ? (0, Z.jsx)(`input`, {
              autoFocus: !0,
              value: s,
              onChange: (e) => c(e.target.value),
              onBlur: g,
              onKeyDown: (t) => {
                (t.key === `Enter` && g(),
                  t.key === `Escape` && (c(e.name), o(!1)));
              },
              onPointerDown: (e) => e.stopPropagation(),
              className: `min-w-0 flex-1 rounded border border-violet-500/50 bg-transparent px-1 text-[11px] text-gray-100 outline-none`,
            })
          : (0, Z.jsx)(`span`, {
              className: `min-w-0 flex-1 cursor-text truncate text-[11px] text-gray-200`,
              onDoubleClick: (t) => {
                (t.stopPropagation(), c(e.name), o(!0));
              },
              title: `${e.name} (double-click to rename)`,
              children: e.name,
            }),
        u &&
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: (t) => {
              (t.stopPropagation(), _().setTrackHidden(e.id, !e.hidden));
            },
            className: `shrink-0 rounded p-0.5 transition-colors hover:bg-gray-700/50 ${e.hidden ? `text-red-400` : `text-muted-foreground hover:text-gray-200`}`,
            title: e.hidden ? `Show layer` : `Hide layer`,
            "aria-label": e.hidden ? `Show layer` : `Hide layer`,
            children: e.hidden
              ? (0, Z.jsx)(K, { className: `h-3 w-3` })
              : (0, Z.jsx)(ui, { className: `h-3 w-3` }),
          }),
        d &&
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: (t) => {
              (t.stopPropagation(), _().setTrackMuted(e.id, !e.muted));
            },
            className: `shrink-0 rounded p-0.5 transition-colors hover:bg-gray-700/50 ${e.muted ? `text-red-400` : `text-muted-foreground hover:text-gray-200`}`,
            title: e.muted ? `Unmute` : `Mute`,
            "aria-label": e.muted ? `Unmute` : `Mute`,
            children: e.muted
              ? (0, Z.jsx)(Ft, { className: `h-3 w-3` })
              : (0, Z.jsx)(Et, { className: `h-3 w-3` }),
          }),
        (0, Z.jsx)(`button`, {
          type: `button`,
          onClick: (t) => {
            (t.stopPropagation(), _().removeTrack(e.id));
          },
          className: `shrink-0 rounded p-0.5 text-gray-500 opacity-0 transition-all hover:bg-gray-700/50 hover:text-red-300 group-hover:opacity-100 [div:hover>&]:opacity-100`,
          title: `Delete track`,
          "aria-label": `Delete track`,
          children: (0, Z.jsx)(qr, { className: `h-3 w-3` }),
        }),
      ],
    });
  },
  g6 = 232,
  _6 = 24,
  Ime = 32,
  Lme = 48,
  Rme = 84,
  v6 = 26,
  zme = 8,
  Bme = ({
    engine: e,
    mediaCache: t,
    isActive: n,
    onAddText: r,
    onImportFilesAtTime: i,
  }) => {
    let a = G3((e) => e.doc),
      o = G3((e) => e.pxPerSec),
      s = G3((e) => e.setZoom),
      c = G3((e) => e.expandedTrackIds),
      l = G3((e) => e.selectedTrackId),
      u = G3((e) => e.selectedClipId),
      d = G3((e) => e.audioVersion),
      f = (0, X.useRef)(null),
      p = (0, X.useRef)(null),
      m = (0, X.useRef)(null),
      h = (0, X.useRef)(!1),
      [g, _] = (0, X.useState)(!1),
      [v, y] = (0, X.useState)(!1),
      b = b3(a),
      x = Math.max(b, 8) + 4,
      S = Math.max(300, Math.round(x * o)),
      C = (0, X.useCallback)(
        (e) => {
          let t = f.current;
          if (!t) return 0;
          let n = e - t.getBoundingClientRect().left + t.scrollLeft - g6;
          return Math.max(0, n / o);
        },
        [o],
      ),
      w = (0, X.useCallback)(
        (t, n, r) => {
          if (r) return Math.max(0, t);
          let i = Math.round(t / p3) * p3,
            a = zme / o,
            s = i,
            c = a,
            l = [e.getCurrentTime(), 0];
          for (let e of G3.getState().doc.tracks)
            for (let t of e.clips) t.id !== n && l.push(t.start_sec, y3(t));
          for (let e of l) {
            let n = Math.abs(t - e);
            n < c && ((s = e), (c = n));
          }
          return Math.max(0, s);
        },
        [e, o],
      );
    (0, X.useEffect)(
      () =>
        e.subscribePlayhead((e) => {
          let t = p.current;
          t && (t.style.transform = `translateX(${e.time * o}px)`);
          let n = m.current;
          (n &&
            (n.textContent = `${P3(e.time, a.settings.fps)} / ${P3(e.duration, a.settings.fps)}`),
            _((t) => (t === e.playing ? t : e.playing)));
        }),
      [e, o, a.settings.fps],
    );
    let T = (0, X.useCallback)(
        (t) => {
          t.button === 0 &&
            ((h.current = !0),
            t.target.setPointerCapture(t.pointerId),
            e.seek(C(t.clientX)));
        },
        [e, C],
      ),
      E = (0, X.useCallback)(
        (t) => {
          h.current && e.seek(C(t.clientX));
        },
        [e, C],
      ),
      D = (0, X.useCallback)(() => {
        h.current = !1;
      }, []),
      O = (0, X.useMemo)(() => {
        let e = 70 / o;
        return (
          [0.1, 0.25, 0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300].find(
            (t) => t >= e,
          ) ?? 300
        );
      }, [o]),
      k = (0, X.useMemo)(() => {
        let e = [];
        for (let t = 0; t <= x; t += O) e.push(Math.round(t * 1e3) / 1e3);
        return e;
      }, [x, O]),
      A = (0, X.useCallback)(
        (e, n, r) => {
          let i = G3.getState();
          if (e.kind === `comp-asset`) {
            let i = e.payload;
            K3(t, i, {
              start_sec: w(C(n.x)),
              audio_track_id: r?.kind === `audio` ? r.id : null,
            });
            return;
          }
          if (e.kind === `comp-clip`) {
            let t = e.payload,
              a = w(Math.max(0, C(n.x) - t.grab_offset_sec), t.clip_id);
            t.track_kind === `audio` &&
            r?.kind === `audio` &&
            r.id !== t.track_id
              ? i.moveAudioClipToTrack(t.track_id, r.id, t.clip_id, a)
              : t.track_kind === `audio` && r === null
                ? i.moveAudioClipToNewTrack(t.track_id, t.clip_id, a)
                : i.moveClip(t.track_id, t.clip_id, a);
          }
        },
        [w, C],
      ),
      j = Oe({
        accept: [`comp-asset`, `comp-clip`],
        onDrop: (e, t) => A(e, t, null),
      }),
      M = (0, X.useCallback)((e) => e.name, []),
      P = (0, X.useMemo)(() => {
        let n = [];
        return (
          a.tracks.forEach((r, i) => {
            let a = !!c[r.id],
              s = r.kind === `audio` ? (a ? Rme : Lme) : Ime,
              f = l === r.id;
            if (
              (n.push({
                key: r.id,
                height: s,
                header: (0, Z.jsx)(Fme, {
                  track: r,
                  index: i,
                  height: s,
                  expanded: a,
                  selected: f,
                }),
                lane: (0, Z.jsx)(Vme, {
                  track: r,
                  mainH: s,
                  mediaCache: t,
                  audioVersion: d,
                  pxPerSec: o,
                  selectedClipId: u,
                  engine: e,
                  timeFromClientX: C,
                  snapTime: w,
                  onLaneDrop: A,
                  label: M(r),
                }),
              }),
              a)
            )
              if (O3(r.kind)) {
                let t = r.clips[0];
                if (!t?.transform) return;
                for (let i of eme)
                  n.push({
                    key: `${r.id}:${i}`,
                    height: 24,
                    header: (0, Z.jsx)(kme, {
                      track: r,
                      clip: t,
                      prop: i,
                      engine: e,
                    }),
                    lane: (0, Z.jsx)(Ame, {
                      track: r,
                      clip: t,
                      prop: i,
                      pxPerSec: o,
                      engine: e,
                      timeFromClientX: C,
                    }),
                  });
                t.audio &&
                  n.push({
                    key: `${r.id}:audio`,
                    height: v6,
                    header: (0, Z.jsx)(p6, { track: r, clip: t }),
                    lane: (0, Z.jsx)(`div`, {
                      className: `h-full border-b border-gray-800/40 bg-card`,
                    }),
                  });
              } else {
                let e = r.clips.find((e) => e.id === u) ?? r.clips[0];
                e &&
                  n.push({
                    key: `${r.id}:audio`,
                    height: v6,
                    header: (0, Z.jsx)(p6, { track: r, clip: e }),
                    lane: (0, Z.jsx)(`div`, {
                      className: `h-full border-b border-gray-800/40 bg-card`,
                    }),
                  });
              }
          }),
          n
        );
      }, [a.tracks, e, c, A, M, t, d, o, u, l, w, C]),
      F = P.reduce((e, t) => e + t.height, 0),
      I = (0, X.useCallback)(() => {
        let t = G3.getState();
        t.selectedTrackId &&
          t.selectedClipId &&
          t.splitClipAt(
            t.selectedTrackId,
            t.selectedClipId,
            e.getCurrentTime(),
          );
      }, [e]),
      [L, R] = (0, X.useState)(!1);
    return (0, Z.jsxs)(`div`, {
      className: `flex h-full flex-col bg-card`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex shrink-0 items-center gap-1 border-b border-gray-700/50 bg-card px-2 py-1`,
          children: [
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => e.togglePlay(),
              className: `rounded p-1 text-gray-300 transition-colors hover:bg-gray-700/50 hover:text-white`,
              title: `Play/Pause (Space)`,
              "aria-label": `Play or pause`,
              children: g
                ? (0, Z.jsx)(N, { className: `h-4 w-4` })
                : (0, Z.jsx)(bn, { className: `h-4 w-4` }),
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => e.stop(),
              className: `rounded p-1 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200`,
              title: `Stop (to start)`,
              "aria-label": `Stop`,
              children: (0, Z.jsx)(Zo, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => {
                (e.setLoop(!v), y(!v));
              },
              className: `rounded p-1 transition-colors hover:bg-gray-700/50 ${v ? `text-violet-300` : `text-gray-500 hover:text-gray-300`}`,
              title: `Loop playback`,
              "aria-label": `Toggle loop`,
              children: (0, Z.jsx)(Ro, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`span`, {
              ref: m,
              className: `ml-2 select-none font-mono text-[11px] text-gray-300`,
              children: `00:00.00`,
            }),
            (0, Z.jsx)(`div`, { className: `mx-2 h-3.5 w-px bg-gray-700/60` }),
            (0, Z.jsxs)(`button`, {
              type: `button`,
              onClick: I,
              disabled: !u,
              className: `flex items-center gap-1 rounded px-1.5 py-1 text-[11px] text-gray-300 transition-colors hover:bg-gray-700/50 hover:text-white disabled:opacity-40`,
              title: `Split selected clip at playhead (S)`,
              children: [(0, Z.jsx)(Uo, { className: `h-3.5 w-3.5` }), `Split`],
            }),
            (0, Z.jsxs)(`button`, {
              type: `button`,
              onClick: r,
              className: `flex items-center gap-1 rounded px-1.5 py-1 text-[11px] text-gray-300 transition-colors hover:bg-gray-700/50 hover:text-white`,
              title: `Add a text layer at the playhead`,
              children: [(0, Z.jsx)(is, { className: `h-3.5 w-3.5` }), `Text`],
            }),
            (0, Z.jsxs)(`div`, {
              className: `ml-auto flex items-center gap-1`,
              children: [
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: () => s(o / 1.4),
                  className: `rounded p-1 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200`,
                  title: `Zoom out`,
                  "aria-label": `Zoom out timeline`,
                  children: (0, Z.jsx)(us, { className: `h-3.5 w-3.5` }),
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: () => s(o * 1.4),
                  className: `rounded p-1 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200`,
                  title: `Zoom in`,
                  "aria-label": `Zoom in timeline`,
                  children: (0, Z.jsx)(ls, { className: `h-3.5 w-3.5` }),
                }),
                (0, Z.jsxs)(`span`, {
                  className: `font-mono text-[10px] text-gray-600`,
                  children: [Math.round(o), ` px/s`],
                }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          ref: f,
          className: `relative min-h-0 flex-1 overflow-auto ${L ? `ring-2 ring-inset ring-violet-500/60` : ``}`,
          onDragOver: (e) => {
            e.dataTransfer.types.includes(`Files`) &&
              (e.preventDefault(), R(!0));
          },
          onDragLeave: () => R(!1),
          onDrop: (e) => {
            (e.preventDefault(), R(!1));
            let t = Array.from(e.dataTransfer.files ?? []);
            t.length > 0 && i(t, w(C(e.clientX)));
          },
          children: (0, Z.jsxs)(`div`, {
            style: { width: g6 + S },
            className: `relative`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `sticky top-0 z-30 flex`,
                style: { height: _6 },
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `sticky left-0 z-40 flex shrink-0 items-center border-b border-r border-gray-700/50 bg-card px-2`,
                    style: { width: g6 },
                    children: (0, Z.jsx)(`span`, {
                      className: `text-[10px] uppercase tracking-wide text-gray-600`,
                      children: `Tracks`,
                    }),
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `relative cursor-pointer select-none border-b border-gray-700/50 bg-card`,
                    style: { width: S },
                    onPointerDown: T,
                    onPointerMove: E,
                    onPointerUp: D,
                    onPointerCancel: D,
                    children: [
                      k.map((e) =>
                        (0, Z.jsxs)(
                          `div`,
                          {
                            style: { left: Math.round(e * o) },
                            className: `absolute bottom-0 top-0 flex items-end`,
                            children: [
                              (0, Z.jsx)(`div`, {
                                className: `h-2 w-px bg-gray-600/60`,
                              }),
                              (0, Z.jsx)(`span`, {
                                className: `-mb-0.5 ml-1 text-[9px] text-gray-500`,
                                children:
                                  e < 60
                                    ? `${e}s`
                                    : `${Math.floor(e / 60)}:${String(Math.round(e % 60)).padStart(2, `0`)}`,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                      (0, Z.jsx)(`div`, {
                        style: { left: Math.round(b * o) },
                        className: `absolute bottom-0 top-0 w-px bg-red-400/50`,
                        title: `Composition end`,
                      }),
                    ],
                  }),
                ],
              }),
              P.map((e) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    className: `flex`,
                    style: { height: e.height },
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `sticky left-0 z-20 shrink-0`,
                        style: { width: g6 },
                        children: e.header,
                      }),
                      (0, Z.jsx)(`div`, {
                        className: `relative`,
                        style: { width: S },
                        children: e.lane,
                      }),
                    ],
                  },
                  e.key,
                ),
              ),
              (0, Z.jsxs)(`div`, {
                className: `flex`,
                style: { height: Math.max(64, 160 - F) },
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `sticky left-0 z-20 shrink-0 border-r border-border bg-card/60`,
                    style: { width: g6 },
                  }),
                  (0, Z.jsx)(`div`, {
                    ...j.dropProps,
                    className: `relative flex items-center justify-center ${j.isOver ? `bg-violet-500/15 ring-1 ring-inset ring-violet-500/50` : ``}`,
                    style: { width: S },
                    onClick: (t) => e.seek(C(t.clientX)),
                    children:
                      a.tracks.length === 0 &&
                      (0, Z.jsx)(`span`, {
                        className: `pointer-events-none text-[11px] text-gray-600`,
                        children: `Drag media here from the assets panel — or drop files from your computer`,
                      }),
                  }),
                ],
              }),
              (0, Z.jsx)(`div`, {
                ref: p,
                style: { left: g6, height: _6 + F + 40 },
                className: `pointer-events-none absolute top-0 z-10 w-px bg-emerald-400/80`,
                children: (0, Z.jsx)(`div`, {
                  className: `-ml-[5px] h-0 w-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent border-t-emerald-400`,
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Vme = ({
    track: e,
    mainH: t,
    mediaCache: n,
    audioVersion: r,
    pxPerSec: i,
    selectedClipId: a,
    engine: o,
    label: s,
    timeFromClientX: c,
    snapTime: l,
    onLaneDrop: u,
  }) => {
    let { dropProps: d, isOver: f } = Oe({
        accept: [`comp-asset`, `comp-clip`],
        onDrop: (t, n) => u(t, n, e),
      }),
      p = e.kind === `audio` ? k3(e.clips) : [];
    return (0, Z.jsxs)(`div`, {
      ...d,
      className: `relative h-full border-b border-border ${f ? `bg-violet-500/15 ring-1 ring-inset ring-violet-500/50` : ``}`,
      onClick: (e) => o.seek(c(e.clientX)),
      children: [
        e.clips.map((o) =>
          (0, Z.jsx)(
            Nme,
            {
              clip: o,
              trackId: e.id,
              trackKind: e.kind,
              pxPerSec: i,
              laneHeight: t,
              label: o.text
                ? o.text.content.split(`
`)[0] || `Text`
                : s,
              selected: a === o.id,
              mediaCache: n,
              audioVersion: r,
              timeFromClientX: c,
              snapTime: (e, t) => l(e, o.id, t),
              onSelect: () => G3.getState().selectClip(e.id, o.id),
            },
            o.id,
          ),
        ),
        p.map((e) => {
          let n = Math.round(e.start_sec * i),
            r = Math.max(2, Math.round((e.end_sec - e.start_sec) * i)),
            a = t - 6;
          return (0, Z.jsxs)(
            `svg`,
            {
              className: `pointer-events-none absolute z-10`,
              style: { left: n, top: 3 },
              width: r,
              height: a,
              "aria-hidden": !0,
              children: [
                (0, Z.jsx)(`polygon`, {
                  points: `0,${a} ${r},0 0,0`,
                  fill: `rgba(94,234,212,0.12)`,
                }),
                (0, Z.jsx)(`polygon`, {
                  points: `0,0 ${r},${a} ${r},0`,
                  fill: `rgba(94,234,212,0.12)`,
                }),
                (0, Z.jsx)(`line`, {
                  x1: 0,
                  y1: a,
                  x2: r,
                  y2: 0,
                  stroke: `#5eead4`,
                  strokeWidth: 2,
                }),
                (0, Z.jsx)(`line`, {
                  x1: 0,
                  y1: 0,
                  x2: r,
                  y2: a,
                  stroke: `#5eead4`,
                  strokeWidth: 2,
                }),
              ],
            },
            `${e.a.id}:${e.b.id}`,
          );
        }),
      ],
    });
  };
