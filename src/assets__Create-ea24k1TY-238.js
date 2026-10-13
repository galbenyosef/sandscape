// assets__Create-ea24k1TY 238 — classname
// Lines 80236-80771 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var ife = ({
    clip: e,
    trackId: t,
    pxPerSec: n,
    engine: r,
    clipVersion: i,
    label: a,
    selected: o,
    grabOffsetFromClientX: s,
  }) => {
    let c = r4((e) => e.selectClip),
      l = r4((e) => e.removeClip),
      u = (0, X.useRef)(null),
      d = (0, X.useRef)(0),
      f = r.getBuffer(e.asset_id)?.duration ?? 0,
      p = r2(e, f),
      m = Math.max(8, Math.round(p * n)),
      h = Math.round(e.start_sec * n),
      { dragProps: g } = Ce({
        kind: `mix-clip`,
        payload: () => ({
          clip_id: e.id,
          track_id: t,
          grab_offset_sec: s(d.current, e),
        }),
        preview: () =>
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5 rounded-md border border-purple-500/40 bg-[#1a1d2e]/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
            children: [
              (0, Z.jsx)(jo, { className: `h-3 w-3 text-purple-300` }),
              (0, Z.jsx)(`span`, {
                className: `truncate max-w-[160px]`,
                children: a,
              }),
            ],
          }),
      }),
      _ = (0, X.useCallback)(
        (e) => {
          ((d.current = e.clientX), g.onPointerDown(e));
        },
        [g],
      );
    return (
      (0, X.useEffect)(() => {
        let t = u.current;
        if (!t) return;
        let n = m,
          i = a4 - 18;
        if (n <= 0) return;
        ((t.width = n), (t.height = i));
        let a = t.getContext(`2d`);
        if (!a) return;
        a.clearRect(0, 0, n, i);
        let s = r.getPeaks(e.asset_id, n, e.in_sec, e.out_sec);
        if (s.length === 0) return;
        a.fillStyle = o ? `rgba(216,180,254,0.85)` : `rgba(196,181,253,0.55)`;
        let c = i / 2;
        for (let e = 0; e < s.length; e++) {
          let t = s[e],
            n = c - t.max * c,
            r = c - t.min * c;
          a.fillRect(e, n, 1, Math.max(1, r - n));
        }
      }, [e.asset_id, e.in_sec, e.out_sec, m, r, o, i, f]),
      (0, Z.jsxs)(`div`, {
        role: `button`,
        tabIndex: 0,
        onPointerDown: _,
        style: { ...g.style, left: h, width: m, top: 4, height: a4 - 8 },
        draggable: !1,
        onClick: (t) => {
          (t.stopPropagation(), c(e.id));
        },
        className: `absolute rounded border overflow-hidden cursor-grab active:cursor-grabbing group ${o ? `border-purple-400/80 bg-purple-500/20` : `border-purple-700/50 bg-purple-900/30 hover:border-purple-500/60`}`,
        title: a,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between px-1 pt-0.5`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-[9px] text-purple-100/80 truncate`,
                children: a,
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                onClick: (n) => {
                  (n.stopPropagation(), l(t, e.id));
                },
                className: `opacity-0 group-hover:opacity-100 text-purple-200/70 hover:text-red-300 transition-opacity`,
                "aria-label": `Remove clip`,
                title: `Remove clip`,
                children: (0, Z.jsx)(qr, { className: `h-2.5 w-2.5` }),
              }),
            ],
          }),
          (0, Z.jsx)(`canvas`, { ref: u, className: `block w-full` }),
        ],
      })
    );
  },
  afe = ({
    track: e,
    pxPerSec: t,
    engine: n,
    clipVersion: r,
    selected: i,
    selectedClipId: a,
    labelOf: o,
    onSelectTrack: s,
    seekFromClientX: c,
    grabOffsetFromClientX: l,
    onLaneDrop: u,
  }) => {
    let { dropProps: d, isOver: f } = Oe({
      accept: [`audio-asset`, `mix-clip`],
      onDrop: (t, n) => u(t, n, e.id),
    });
    return (0, Z.jsxs)(`div`, {
      ...d,
      style: { height: a4 },
      onClick: (t) => {
        (s(e.id), c(t.clientX));
      },
      className: `relative border-b border-gray-800/60 ${f ? `bg-purple-500/15 ring-1 ring-inset ring-purple-500/50` : i ? `bg-purple-500/5` : ``}`,
      children: [
        (0, Z.jsx)(`span`, {
          className: `absolute left-1 top-0.5 z-10 text-[9px] text-gray-600 pointer-events-none`,
          children: e.name,
        }),
        e.clips.map((i) =>
          (0, Z.jsx)(
            ife,
            {
              clip: i,
              trackId: e.id,
              pxPerSec: t,
              engine: n,
              clipVersion: r,
              label: o(i.asset_id),
              selected: a === i.id,
              grabOffsetFromClientX: l,
            },
            i.id,
          ),
        ),
      ],
    });
  },
  ofe = ({ engine: e, clipVersion: t, labelOf: n, onDropAsset: r }) => {
    let i = r4((e) => e.activeMix?.tracks ?? []),
      a = r4((e) => e.pxPerSec),
      o = r4((e) => e.selectedTrackId),
      s = r4((e) => e.selectedClipId),
      c = r4((e) => e.selectTrack),
      l = r4((e) => e.setZoom),
      u = r4((e) => e.moveClip),
      d = r4((e) => e.moveClipToTrack),
      f = (0, X.useRef)(null),
      p = (0, X.useRef)(null),
      m = (0, X.useMemo)(() => {
        let t = nfe;
        for (let n of i)
          for (let r of n.clips) {
            let n = e.getBuffer(r.asset_id)?.duration ?? 0;
            t = Math.max(t, r.start_sec + r2(r, n));
          }
        return t + 2;
      }, [i, e, t]),
      h = Math.max(200, Math.round(m * a));
    (0, X.useEffect)(() => {
      let t = e.subscribePlayhead((e) => {
          let t = f.current;
          t && (t.style.transform = `translateX(${e.time * a}px)`);
        }),
        n = f.current;
      return (
        n && (n.style.transform = `translateX(${e.getCurrentTime() * a}px)`),
        t
      );
    }, [e, a]);
    let g = (0, X.useMemo)(() => {
        let e = 70 / a;
        return (
          [0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300].find((t) => t >= e) ?? 300
        );
      }, [a]),
      _ = (0, X.useMemo)(() => {
        let e = [];
        for (let t = 0; t <= m; t += g) e.push(t);
        return e;
      }, [m, g]),
      v = (0, X.useCallback)(
        (e) => {
          let t = p.current;
          if (!t) return 0;
          let n = e - t.getBoundingClientRect().left + t.scrollLeft;
          return Math.max(0, n / a);
        },
        [a],
      ),
      y = (0, X.useCallback)(
        (t) => {
          e.seek(v(t));
        },
        [e, v],
      ),
      b = (0, X.useCallback)((e, t) => Math.max(0, v(e) - t.start_sec), [v]),
      x = (0, X.useCallback)(
        (e, t, n) => {
          if (e.kind === `audio-asset`) {
            let i = e.payload,
              a = c4(v(t.x));
            r(n, i.id, a);
            return;
          }
          if (e.kind === `mix-clip`) {
            let r = e.payload,
              i = c4(Math.max(0, v(t.x) - r.grab_offset_sec));
            r.track_id === n
              ? u(n, r.clip_id, i)
              : d(r.track_id, n, r.clip_id, i);
          }
        },
        [v, u, d, r],
      );
    return (0, Z.jsxs)(`div`, {
      className: `flex flex-col`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-1 px-3 py-1.5 border-b border-gray-700/50 bg-[#111327]`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] text-gray-500 mr-1`,
              children: `Timeline`,
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => l(a / 1.4),
              className: `p-1 rounded text-gray-400 hover:bg-gray-700/50 hover:text-gray-200 transition-colors`,
              title: `Zoom out`,
              "aria-label": `Zoom out`,
              children: (0, Z.jsx)(us, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => l(a * 1.4),
              className: `p-1 rounded text-gray-400 hover:bg-gray-700/50 hover:text-gray-200 transition-colors`,
              title: `Zoom in`,
              "aria-label": `Zoom in`,
              children: (0, Z.jsx)(ls, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsxs)(`span`, {
              className: `text-[10px] font-mono text-gray-600 ml-1`,
              children: [Math.round(a), ` px/s`],
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          ref: p,
          className: `relative overflow-x-auto bg-[#0d0f1a]`,
          children: (0, Z.jsxs)(`div`, {
            style: { width: h },
            className: `relative`,
            children: [
              (0, Z.jsx)(`div`, {
                style: { height: o4 },
                className: `relative border-b border-gray-700/50 cursor-pointer select-none`,
                onClick: (e) => y(e.clientX),
                children: _.map((e) =>
                  (0, Z.jsxs)(
                    `div`,
                    {
                      style: { left: Math.round(e * a) },
                      className: `absolute top-0 bottom-0 flex items-end`,
                      children: [
                        (0, Z.jsx)(`div`, {
                          className: `w-px h-2 bg-gray-600/60`,
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-[9px] text-gray-500 ml-1 -mb-0.5`,
                          children: rfe(e),
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
              i.map((r) =>
                (0, Z.jsx)(
                  afe,
                  {
                    track: r,
                    pxPerSec: a,
                    engine: e,
                    clipVersion: t,
                    selected: o === r.id,
                    selectedClipId: s,
                    labelOf: n,
                    onSelectTrack: c,
                    seekFromClientX: y,
                    grabOffsetFromClientX: b,
                    onLaneDrop: x,
                  },
                  r.id,
                ),
              ),
              (0, Z.jsx)(`div`, {
                ref: f,
                style: {
                  height: o4 + i.length * a4,
                  transform: `translateX(0px)`,
                },
                className: `pointer-events-none absolute top-0 left-0 w-px bg-emerald-400/80 z-20`,
              }),
            ],
          }),
        }),
      ],
    });
  },
  l4 = ({
    label: e,
    value: t,
    min: n,
    max: r,
    step: i,
    unit: a,
    format: o,
    onChange: s,
  }) => {
    let c = (e) => Math.min(r, Math.max(n, e));
    return (0, Z.jsxs)(`div`, {
      className: `space-y-0.5`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-[10px] text-gray-400`,
              children: e,
            }),
            (0, Z.jsxs)(`span`, {
              className: `text-[10px] font-mono text-gray-500`,
              children: [o ? o(t) : t, a ? ` ${a}` : ``],
            }),
          ],
        }),
        (0, Z.jsx)(`input`, {
          type: `range`,
          value: t,
          min: n,
          max: r,
          step: i,
          onChange: (e) => s(c(Number(e.target.value))),
          className: `w-full h-1.5 accent-purple-500 cursor-pointer`,
        }),
      ],
    });
  },
  sfe = ({ track: e, canRemove: t }) => {
    let n = r4((e) => e.renameTrack),
      r = r4((e) => e.setTrackGain),
      i = r4((e) => e.setTrackPan),
      a = r4((e) => e.toggleMute),
      o = r4((e) => e.toggleSolo),
      s = r4((e) => e.removeTrack),
      c = r4((e) => e.selectedTrackId),
      l = r4((e) => e.selectTrack),
      u = r4((e) => e.addTrackEffect),
      d = r4((e) => e.updateTrackEffect),
      f = r4((e) => e.toggleTrackEffect),
      p = r4((e) => e.removeTrackEffect),
      m = r4((e) => e.reorderTrackEffects),
      h = c === e.id;
    return (0, Z.jsxs)(`div`, {
      onClick: () => l(e.id),
      className: `flex-shrink-0 w-44 rounded-md border bg-[#0d0f1a] p-2 flex flex-col gap-2 transition-colors ${h ? `border-purple-500/50` : `border-gray-700/50`}`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, Z.jsx)(`input`, {
              value: e.name,
              onChange: (t) => n(e.id, t.target.value),
              onClick: (e) => e.stopPropagation(),
              className: `flex-1 min-w-0 bg-transparent border-b border-transparent hover:border-gray-700/50 focus:border-purple-500/50 text-xs text-gray-200 px-0.5 py-0.5 focus:outline-none`,
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: (t) => {
                (t.stopPropagation(), s(e.id));
              },
              disabled: !t,
              title: t ? `Remove track` : `A mix needs at least one track`,
              className: `p-0.5 rounded text-gray-500 hover:text-red-400 hover:bg-gray-700/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`,
              "aria-label": `Remove track`,
              children: (0, Z.jsx)(qr, { className: `h-3 w-3` }),
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, Z.jsxs)(`button`, {
              type: `button`,
              onClick: (t) => {
                (t.stopPropagation(), a(e.id));
              },
              title: e.mute ? `Unmute` : `Mute`,
              "aria-pressed": e.mute,
              className: `flex-1 flex items-center justify-center gap-1 px-1.5 py-1 rounded text-[10px] font-medium transition-colors ${e.mute ? `bg-red-500/20 text-red-300 border border-red-500/40` : `bg-gray-800/40 text-gray-400 border border-gray-700/40 hover:text-gray-200`}`,
              children: [
                e.mute
                  ? (0, Z.jsx)(Ft, { className: `h-3 w-3` })
                  : (0, Z.jsx)(Et, { className: `h-3 w-3` }),
                `Mute`,
              ],
            }),
            (0, Z.jsxs)(`button`, {
              type: `button`,
              onClick: (t) => {
                (t.stopPropagation(), o(e.id));
              },
              title: e.solo ? `Unsolo` : `Solo`,
              "aria-pressed": e.solo,
              className: `flex-1 flex items-center justify-center gap-1 px-1.5 py-1 rounded text-[10px] font-medium transition-colors ${e.solo ? `bg-amber-500/20 text-amber-300 border border-amber-500/40` : `bg-gray-800/40 text-gray-400 border border-gray-700/40 hover:text-gray-200`}`,
              children: [(0, Z.jsx)(xte, { className: `h-3 w-3` }), `Solo`],
            }),
          ],
        }),
        (0, Z.jsx)(l4, {
          label: `Gain`,
          unit: `dB`,
          value: e.gain_db,
          min: -24,
          max: 12,
          step: 0.5,
          format: (e) => e.toFixed(1),
          onChange: (t) => r(e.id, t),
        }),
        (0, Z.jsx)(l4, {
          label: `Pan`,
          value: e.pan,
          min: -1,
          max: 1,
          step: 0.05,
          format: (e) =>
            e === 0
              ? `C`
              : e < 0
                ? `L${Math.round(-e * 100)}`
                : `R${Math.round(e * 100)}`,
          onChange: (t) => i(e.id, t),
        }),
        (0, Z.jsx)(`div`, {
          onClick: (e) => e.stopPropagation(),
          children: (0, Z.jsx)(z2, {
            compact: !0,
            effects: e.effects,
            emptyText: `No track effects.`,
            onAdd: (t) => u(e.id, t),
            onUpdate: (t, n) => d(e.id, t, n),
            onToggle: (t) => f(e.id, t),
            onRemove: (t) => p(e.id, t),
            onReorder: (t, n) => m(e.id, t, n),
          }),
        }),
      ],
    });
  },
  cfe = () => {
    let e = r4((e) => e.activeMix?.master.gain_db ?? 0),
      t = r4((e) => e.activeMix?.master.effects ?? []),
      n = r4((e) => e.setMasterGain),
      r = r4((e) => e.addMasterEffect),
      i = r4((e) => e.updateMasterEffect),
      a = r4((e) => e.toggleMasterEffect),
      o = r4((e) => e.removeMasterEffect),
      s = r4((e) => e.reorderMasterEffects);
    return (0, Z.jsxs)(`div`, {
      className: `flex-shrink-0 w-44 rounded-md border border-emerald-700/40 bg-[#0d0f1a] p-2 flex flex-col gap-2`,
      children: [
        (0, Z.jsx)(`div`, {
          className: `text-xs font-semibold text-emerald-300/90 px-0.5`,
          children: `Master`,
        }),
        (0, Z.jsx)(l4, {
          label: `Gain`,
          unit: `dB`,
          value: e,
          min: -24,
          max: 12,
          step: 0.5,
          format: (e) => e.toFixed(1),
          onChange: n,
        }),
        (0, Z.jsx)(z2, {
          compact: !0,
          effects: t,
          emptyText: `No master effects.`,
          onAdd: r,
          onUpdate: i,
          onToggle: a,
          onRemove: o,
          onReorder: s,
        }),
      ],
    });
  },
  lfe = () => {
    let e = r4((e) => e.activeMix?.tracks ?? []),
      t = r4((e) => e.addTrack);
    return (0, Z.jsxs)(`div`, {
      className: `flex gap-2 overflow-x-auto p-3`,
      children: [
        e.map((t) =>
          (0, Z.jsx)(sfe, { track: t, canRemove: e.length > 1 }, t.id),
        ),
        (0, Z.jsxs)(`button`, {
          type: `button`,
          onClick: () => t(),
          className: `flex-shrink-0 w-32 rounded-md border border-dashed border-gray-700/50 text-gray-400 hover:text-gray-200 hover:border-purple-500/40 transition-colors flex flex-col items-center justify-center gap-1 py-6`,
          children: [
            (0, Z.jsx)(ni, { className: `h-4 w-4` }),
            (0, Z.jsx)(`span`, {
              className: `text-[11px]`,
              children: `Add track`,
            }),
          ],
        }),
        (0, Z.jsx)(cfe, {}),
      ],
    });
  };
