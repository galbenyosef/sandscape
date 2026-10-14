// Create-ea24k1TY 240 — classname
// Lines 80801-81513 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var pfe = {
    original: {
      label: `No mixdown`,
      className: `border-gray-600/40 text-gray-400 bg-gray-800/40`,
    },
    edited: {
      label: `Edited`,
      className: `border-amber-500/40 text-amber-300 bg-amber-500/10`,
    },
    baking: {
      label: `Baking…`,
      className: `border-sky-500/40 text-sky-300 bg-sky-500/10`,
    },
    baked: {
      label: `Baked`,
      className: `border-emerald-500/40 text-emerald-300 bg-emerald-500/10`,
    },
    failed: {
      label: `Bake failed`,
      className: `border-red-500/40 text-red-300 bg-red-500/10`,
    },
  },
  m4 = ({ status: e }) => {
    let t = pfe[e],
      n = e === `baking` ? J : e === `baked` ? Be : Se;
    return (0, Z.jsxs)(`span`, {
      className: `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${t.className}`,
      title: `Whether the baked mixdown reflects your edits`,
      children: [
        (0, Z.jsx)(n, {
          className: `h-3 w-3 ${e === `baking` ? `animate-spin` : ``}`,
          fill: e === `baked` || e === `edited` ? `currentColor` : `none`,
        }),
        t.label,
      ],
    });
  },
  mfe = ({ asset: e }) => (0, Z.jsx)(m4, { status: G2(f4(e)) }),
  hfe = ({
    mixes: e,
    busy: t,
    onOpen: n,
    onCreate: r,
    onRename: i,
    onDelete: a,
  }) => {
    let [o, s] = (0, X.useState)(null),
      [c, l] = (0, X.useState)(``);
    return (0, Z.jsxs)(`div`, {
      className: `flex h-full flex-col bg-background text-foreground`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between px-3 py-2 border-b border-gray-700/50 bg-[#111327]`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-gray-200`,
              children: [
                (0, Z.jsx)(B, { className: `h-4 w-4 text-purple-300` }),
                `Mixes`,
              ],
            }),
            (0, Z.jsxs)(`button`, {
              type: `button`,
              onClick: r,
              disabled: t,
              className: `flex items-center gap-1 px-2.5 py-1 rounded text-xs bg-purple-600/25 text-purple-200 hover:bg-purple-600/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors`,
              children: [
                t
                  ? (0, Z.jsx)(J, { className: `h-3.5 w-3.5 animate-spin` })
                  : (0, Z.jsx)(ni, { className: `h-3.5 w-3.5` }),
                `New mix`,
              ],
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `flex-1 overflow-y-auto p-3`,
          children:
            e.length === 0
              ? (0, Z.jsxs)(`div`, {
                  className: `rounded-md border border-dashed border-gray-700/40 px-4 py-10 text-center`,
                  children: [
                    (0, Z.jsx)(B, {
                      className: `h-8 w-8 text-gray-600 mx-auto mb-2`,
                    }),
                    (0, Z.jsx)(`p`, {
                      className: `text-sm text-gray-400`,
                      children: `No mixes yet`,
                    }),
                    (0, Z.jsx)(`p`, {
                      className: `text-[11px] text-gray-600 mt-1`,
                      children: `Create a multitrack mix from your audio assets — the mixdown bakes to its own file, sources are never changed.`,
                    }),
                  ],
                })
              : (0, Z.jsx)(`div`, {
                  className: `flex flex-col gap-1.5`,
                  children: e.map((e) => {
                    let t = ufe(e),
                      r = o === t;
                    return (0, Z.jsxs)(
                      `div`,
                      {
                        className: `flex items-center gap-2 rounded-md border border-gray-700/50 bg-[#0d0f1a] px-3 py-2 hover:border-purple-500/40 transition-colors`,
                        children: [
                          (0, Z.jsx)(B, {
                            className: `h-4 w-4 text-purple-300 flex-shrink-0`,
                          }),
                          r
                            ? (0, Z.jsx)(`input`, {
                                autoFocus: !0,
                                value: c,
                                onChange: (e) => l(e.target.value),
                                onKeyDown: (t) => {
                                  t.key === `Enter`
                                    ? (i(e, c.trim() || d4(e)), s(null))
                                    : t.key === `Escape` && s(null);
                                },
                                onBlur: () => {
                                  (i(e, c.trim() || d4(e)), s(null));
                                },
                                className: `flex-1 min-w-0 bg-gray-800/60 border border-gray-600/40 rounded px-1.5 py-0.5 text-sm text-gray-200 focus:outline-none focus:border-purple-500/50`,
                              })
                            : (0, Z.jsx)(`button`, {
                                type: `button`,
                                onClick: () => n(e),
                                className: `flex-1 min-w-0 text-left text-sm text-gray-200 truncate hover:text-purple-200 transition-colors`,
                                children: d4(e),
                              }),
                          (0, Z.jsx)(mfe, { asset: e }),
                          !r &&
                            (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => {
                                    (s(t), l(d4(e)));
                                  },
                                  className: `p-1 rounded text-gray-500 hover:text-gray-200 hover:bg-gray-700/50 transition-colors`,
                                  title: `Rename mix`,
                                  "aria-label": `Rename mix`,
                                  children: (0, Z.jsx)(di, {
                                    className: `h-3.5 w-3.5`,
                                  }),
                                }),
                                (0, Z.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => a(e),
                                  className: `p-1 rounded text-gray-500 hover:text-red-400 hover:bg-gray-700/50 transition-colors`,
                                  title: `Delete mix`,
                                  "aria-label": `Delete mix`,
                                  children: (0, Z.jsx)(qr, {
                                    className: `h-3.5 w-3.5`,
                                  }),
                                }),
                              ],
                            }),
                        ],
                      },
                      t,
                    );
                  }),
                }),
        }),
      ],
    });
  },
  gfe = ({ srcDurOf: e }) => {
    let t = r4((e) => e.activeMix),
      n = r4((e) => e.selectedClipId),
      r = r4((e) => e.setClipGain),
      i = r4((e) => e.setClipFades),
      a = r4((e) => e.trimClip),
      o = (0, X.useMemo)(() => {
        if (!t || !n) return null;
        for (let e of t.tracks) {
          let t = e.clips.find((e) => e.id === n);
          if (t) return { trackId: e.id, clip: t };
        }
        return null;
      }, [t, n]);
    if (!o) return null;
    let { trackId: s, clip: c } = o,
      l = e(c.asset_id),
      u = r2(c, l),
      d = (e, t, n, r, i, a, o) =>
        (0, Z.jsxs)(`label`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] text-gray-400 w-14`,
              children: e,
            }),
            (0, Z.jsx)(`input`, {
              type: `number`,
              value: Number(t.toFixed(3)),
              min: n,
              max: r,
              step: i,
              onChange: (e) => {
                let t = Number(e.target.value);
                Number.isNaN(t) || a(Math.min(r, Math.max(n, t)));
              },
              className: `w-20 bg-gray-800/60 border border-gray-600/30 rounded px-1.5 py-0.5 text-[11px] text-gray-300 text-right focus:outline-none focus:border-purple-500/50`,
            }),
            o &&
              (0, Z.jsx)(`span`, {
                className: `text-[10px] text-gray-500`,
                children: o,
              }),
          ],
        });
    return (0, Z.jsxs)(`div`, {
      className: `border-t border-gray-700/50 bg-[#0d0f1a] px-3 py-2`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between mb-1.5`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[11px] font-semibold text-gray-300`,
              children: `Selected clip`,
            }),
            (0, Z.jsxs)(`span`, {
              className: `text-[10px] text-gray-600 font-mono`,
              children: [
                `start `,
                c.start_sec.toFixed(2),
                `s · len `,
                u.toFixed(2),
                `s`,
              ],
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-2 gap-x-4 gap-y-1.5 md:grid-cols-3`,
          children: [
            d(`Gain`, c.gain_db, -24, 24, 0.5, (e) => r(s, c.id, e), `dB`),
            d(`Trim in`, c.in_sec, 0, l || 600, 0.05, (e) =>
              a(s, c.id, e, c.out_sec),
            ),
            d(`Trim out`, c.out_sec, 0, l || 600, 0.05, (e) =>
              a(s, c.id, c.in_sec, e),
            ),
            d(`Fade in`, c.fade_in_sec, 0, 10, 0.05, (e) =>
              i(s, c.id, e, c.fade_out_sec),
            ),
            d(`Fade out`, c.fade_out_sec, 0, 10, 0.05, (e) =>
              i(s, c.id, c.fade_in_sec, e),
            ),
          ],
        }),
        (0, Z.jsxs)(`p`, {
          className: `text-[10px] text-gray-600 mt-1`,
          children: [
            `Trim out ≤ in means "to clip end". Source length:`,
            ` `,
            l > 0 ? `${l.toFixed(2)}s` : `loading…`,
          ],
        }),
      ],
    });
  },
  _fe = ({
    sessionId: e,
    sessionDir: t,
    assets: n,
    isActive: r,
    refreshAssets: i,
  }) => {
    let a = r4((e) => e.activeMix),
      o = r4((e) => e.selectedMixAssetId),
      s = r4((e) => e.selectedTrackId),
      c = r4((e) => e.isDirty),
      l = r4((e) => e.mixBakeStatus),
      u = r4((e) => e.loadMix),
      d = r4((e) => e.setMixName),
      f = r4((e) => e.setMixRole),
      p = r4((e) => e.addClip),
      m = r4((e) => e.setMixBakeStatus),
      h = r4((e) => e.resetMix),
      g = (0, X.useMemo)(
        () => n.filter((e) => e.asset_type === `mix_audio`),
        [n],
      ),
      _ = (0, X.useMemo)(
        () => n.filter((e) => gt.includes(e.asset_type) && ffe(e)),
        [n],
      ),
      v = (0, X.useMemo)(() => {
        let e = new Map();
        for (let t of _) e.set(u4(t), t);
        return e;
      }, [_]),
      y = (0, X.useCallback)(
        (e) => {
          let n = v.get(e);
          return n ? jr.getAssetUrl(t, dfe(n), { version: n.modified }) : null;
        },
        [v, t],
      ),
      b = (0, X.useCallback)(
        (e) => {
          let t = v.get(e);
          return t ? d4(t) : e;
        },
        [v],
      ),
      x = Qde({
        getMix: (0, X.useCallback)(() => r4.getState().activeMix, []),
        resolveAssetUrl: y,
        isActive: r,
      }),
      [S, C] = (0, X.useState)(!1),
      w = (0, X.useRef)(null);
    (0, X.useEffect)(
      () =>
        x.subscribePlayhead((e) => {
          w.current &&
            (w.current.textContent = `${p4(e.time)} / ${p4(e.duration)}`);
          let t = x.isPlaying();
          C((e) => (e === t ? e : t));
        }),
      [x],
    );
    let [T, E] = (0, X.useState)(0),
      D = (0, X.useRef)(new Map()),
      O = (0, X.useMemo)(() => {
        if (!a) return ``;
        let e = new Set();
        for (let t of a.tracks) for (let n of t.clips) e.add(n.asset_id);
        return Array.from(e).sort().join(`
`);
      }, [a]),
      k = (0, X.useMemo)(
        () =>
          O === ``
            ? []
            : O.split(`
`),
        [O],
      ),
      A = (0, X.useCallback)(
        (e) => {
          let t = v.get(e);
          if (!t) return ``;
          let n = t.baked_audio_path || t.audio_path || t.sfx_path || ``;
          return n ? `${n}@${t.modified ?? ``}` : ``;
        },
        [v],
      );
    (0, X.useEffect)(() => {
      if (k.length === 0) return;
      let e = !1;
      for (let e of k) {
        let t = A(e);
        t &&
          D.current.get(e) !== t &&
          (x.evictBuffers([e]), D.current.set(e, t));
      }
      return (
        x.ensureBuffers(k).then((t) => {
          !e && t > 0 && E((e) => e + 1);
        }),
        () => {
          e = !0;
        }
      );
    }, [k, x, A]);
    let j = (0, X.useCallback)(() => {
        x.isPlaying() ? (x.pause(), C(!1)) : (x.play(), C(!0));
      }, [x]),
      M = (0, X.useCallback)(() => {
        (x.stop(), C(!1));
      }, [x]),
      P = (0, X.useCallback)(
        (e, t, n) => {
          (p(e, t, Math.max(0, n)),
            x.ensureBuffers([t]).then(() => E((e) => e + 1)));
        },
        [p, x],
      ),
      F = (0, X.useCallback)(
        (e) => JSON.stringify({ tracks: e.tracks, master: e.master }),
        [],
      ),
      I = (0, X.useCallback)(
        async (t, n, r) => {
          (r.rename && (await i4.renameMixAsset(e, t, n.name)),
            r.save && (await i4.saveMixState(e, t, n)));
          let a = null;
          if (r.bake) {
            let r = new Set();
            for (let e of n.tracks) for (let t of e.clips) r.add(t.asset_id);
            a2(n) || (await x.ensureBuffers(Array.from(r)));
            let i = Array.from(r).filter((e) => !x.getBuffers().has(e));
            if (r.size > 0 && i.length > 0)
              (console.warn(
                `[MixTab] Skipping mixdown bake: ${i.length} referenced clip(s) unresolved — prior mixdown left intact.`,
              ),
                (a = `edited`));
            else {
              let r = await i4.bakeMixdown(e, t, n, x.getBuffers());
              a = r.success
                ? r.mixdown_path
                  ? `baked`
                  : `original`
                : `edited`;
            }
          }
          return (await i?.(), a);
        },
        [e, x, i],
      ),
      L = (0, X.useRef)(``),
      R = (0, X.useRef)(``),
      z = (0, X.useRef)(``),
      B = (0, X.useRef)(0),
      V = (0, X.useRef)(null);
    ((0, X.useEffect)(() => {
      ((L.current = ``), (R.current = ``), (z.current = ``));
    }, [o]),
      (0, X.useEffect)(() => {
        if (!a || !o || !e) return;
        let t = JSON.stringify(a),
          n = F(a),
          r = a.name;
        if (L.current === ``) {
          ((L.current = t), (R.current = n), (z.current = r));
          return;
        }
        if (t === L.current) return;
        let i = o,
          s = a,
          c = setTimeout(() => {
            V.current = null;
            let e = L.current,
              a = R.current,
              o = z.current,
              c = r !== o,
              l = n !== a;
            ((L.current = t),
              (R.current = n),
              (z.current = r),
              l && m(`baking`));
            let u = ++B.current;
            I(i, s, { rename: c, save: !0, bake: l })
              .then((e) => {
                u === B.current && e && m(e);
              })
              .catch((t) => {
                (console.error(`[MixTab] Autosave failed:`, t),
                  Hr.error(
                    `Mix didn't save — your latest changes are not persisted.`,
                  ),
                  u === B.current &&
                    ((L.current = e),
                    (R.current = a),
                    (z.current = o),
                    l && m(`edited`)));
              });
          }, 1500);
        return (
          (V.current = c),
          () => {
            (clearTimeout(c), V.current === c && (V.current = null));
          }
        );
      }, [a, o, e, F, I, m]));
    let H = (0, X.useCallback)(() => {
        V.current &&= (clearTimeout(V.current), null);
        let t = r4.getState(),
          n = t.activeMix,
          r = t.selectedMixAssetId;
        if (!n || !r || !e) return Promise.resolve();
        let i = JSON.stringify(n);
        if (i === L.current) return Promise.resolve();
        let a = F(n),
          o = L.current,
          s = R.current,
          c = z.current,
          l = n.name !== c,
          u = a !== s;
        ((L.current = i),
          (R.current = a),
          (z.current = n.name),
          u && m(`baking`));
        let d = ++B.current;
        return I(r, n, { rename: l, save: !0, bake: u })
          .then((e) => {
            d === B.current && e && m(e);
          })
          .catch((e) => {
            (console.error(`[MixTab] Flush save failed:`, e),
              Hr.error(
                `Mix didn't save — your latest changes are not persisted.`,
              ),
              d === B.current &&
                ((L.current = o),
                (R.current = s),
                (z.current = c),
                u && m(`edited`)));
          });
      }, [e, F, I, m]),
      U = (0, X.useRef)(r);
    (0, X.useEffect)(() => {
      (U.current && !r && H(), (U.current = r));
    }, [r, H]);
    let ee = (0, X.useRef)(H);
    ((ee.current = H),
      (0, X.useEffect)(
        () => () => {
          ee.current();
        },
        [],
      ));
    let [W, G] = (0, X.useState)(!1),
      te = (0, X.useCallback)(
        (e) => {
          let t = f4(e),
            n = t.mix_state ?? n2(d4(e));
          u(n, u4(e), G2(t));
        },
        [u],
      ),
      K = (0, X.useCallback)(async () => {
        G(!0);
        try {
          let t = `Mix ${g.length + 1}`,
            n = await i4.createMixAsset(e, t, `music`),
            r = n.asset;
          if (!n.success || !r) {
            console.error(`[MixTab] createMixAsset failed:`, n.error);
            return;
          }
          let a = n2(t, `music`),
            o = r.id || r.asset_name || t,
            s = await i4.saveMixState(e, o, a);
          if (!s.success) {
            Hr.error(
              `Could not save the new mix — ` + (s.error || `unknown error`),
            );
            return;
          }
          (await i?.(), u(a, o, `original`));
        } catch (e) {
          console.error(`[MixTab] createMix failed:`, e);
        } finally {
          G(!1);
        }
      }, [e, g.length, i, u]),
      ne = (0, X.useCallback)(
        async (t, n) => {
          let r = u4(t);
          (await i4.renameMixAsset(e, r, n), await i?.());
        },
        [e, i],
      ),
      re = (0, X.useCallback)(
        async (t) => {
          let n = u4(t);
          (await i4.deleteMixAsset(e, n), o === n && h(), await i?.());
        },
        [e, o, h, i],
      ),
      ie = (0, X.useCallback)(async () => {
        if (!a || !o || !e) return;
        ((V.current &&= (clearTimeout(V.current), null)), m(`baking`));
        let t = ++B.current;
        try {
          let e = a.name !== z.current,
            n = await I(o, a, { rename: e, save: !0, bake: !0 });
          if (t !== B.current) return;
          (m(n ?? `baked`),
            (L.current = JSON.stringify(a)),
            (R.current = F(a)),
            (z.current = a.name));
        } catch (e) {
          (console.error(`[MixTab] Apply (bake) failed:`, e),
            t === B.current && m(`edited`));
        }
      }, [a, o, e, I, F, m]),
      ae = (0, X.useCallback)(async () => {
        (await H(), x.stop(), C(!1), h());
      }, [H, x, h]);
    return a
      ? (0, Z.jsxs)(`div`, {
          className: `flex h-full flex-col bg-background text-foreground`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 px-3 py-2 border-b border-gray-700/50 bg-[#111327]`,
              children: [
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: ae,
                  title: `Back to mixes`,
                  className: `p-1.5 rounded hover:bg-gray-700/50 transition-colors`,
                  children: (0, Z.jsx)(q, { className: `h-4 w-4` }),
                }),
                (0, Z.jsx)(`div`, { className: `w-px h-5 bg-gray-700/50` }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: j,
                  title: S ? `Pause` : `Play`,
                  className: `p-1.5 rounded hover:bg-gray-700/50 transition-colors`,
                  children: S
                    ? (0, Z.jsx)(N, { className: `h-4 w-4` })
                    : (0, Z.jsx)(bn, { className: `h-4 w-4` }),
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: M,
                  title: `Stop`,
                  className: `p-1.5 rounded hover:bg-gray-700/50 transition-colors`,
                  children: (0, Z.jsx)(Zo, { className: `h-4 w-4` }),
                }),
                (0, Z.jsx)(`div`, { className: `w-px h-5 bg-gray-700/50` }),
                (0, Z.jsx)(`input`, {
                  value: a.name,
                  onChange: (e) => d(e.target.value),
                  className: `min-w-0 w-40 bg-transparent border-b border-transparent hover:border-gray-700/50 focus:border-purple-500/50 text-sm text-gray-200 px-1 py-0.5 focus:outline-none`,
                  "aria-label": `Mix name`,
                }),
                (0, Z.jsxs)(`select`, {
                  value: a.mix_role,
                  onChange: (e) => f(e.target.value),
                  className: `bg-gray-800/60 border border-gray-600/30 rounded px-1.5 py-0.5 text-[11px] text-gray-300 focus:outline-none focus:border-purple-500/50`,
                  title: `Where the baked mixdown is routed at build time`,
                  children: [
                    (0, Z.jsx)(`option`, { value: `music`, children: `Music` }),
                    (0, Z.jsx)(`option`, { value: `sfx`, children: `SFX` }),
                  ],
                }),
                (0, Z.jsxs)(`button`, {
                  type: `button`,
                  onClick: ie,
                  disabled: l === `baking`,
                  title: `Bake the mixdown now`,
                  className: `flex items-center gap-1 px-2 py-1 rounded text-xs bg-emerald-600/25 text-emerald-200 hover:bg-emerald-600/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`,
                  children: [
                    l === `baking`
                      ? (0, Z.jsx)(J, { className: `h-3.5 w-3.5 animate-spin` })
                      : (0, Z.jsx)(_n, { className: `h-3.5 w-3.5` }),
                    `Apply`,
                  ],
                }),
                (0, Z.jsx)(`div`, { className: `flex-1` }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    c &&
                      l !== `baking` &&
                      (0, Z.jsx)(`span`, {
                        className: `text-[10px] text-amber-400/70`,
                        children: `unsaved`,
                      }),
                    (0, Z.jsx)(m4, { status: l }),
                    (0, Z.jsxs)(`span`, {
                      className: `text-xs font-mono text-gray-500`,
                      ref: w,
                      children: [p4(0), ` / `, p4(0)],
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex-1 min-h-0 overflow-y-auto`,
              children: [
                a.tracks.length > 0 &&
                  (0, Z.jsx)(`div`, {
                    className: `px-3 py-1 text-[10px] text-gray-500 bg-[#111327] border-b border-gray-700/50`,
                    children: `Drag audio from the asset list onto a track`,
                  }),
                (0, Z.jsx)(ofe, {
                  engine: x,
                  clipVersion: T,
                  labelOf: b,
                  onDropAsset: P,
                }),
                (0, Z.jsx)(gfe, {
                  srcDurOf: (e) => x.getBuffer(e)?.duration ?? 0,
                }),
                (0, Z.jsx)(lfe, {}),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between px-3 py-1.5 border-t border-gray-700/50 bg-[#111327] text-xs text-gray-500`,
              children: [
                (0, Z.jsx)(`span`, { className: `truncate`, children: a.name }),
                (0, Z.jsxs)(`span`, {
                  children: [
                    a.tracks.length,
                    ` track`,
                    a.tracks.length === 1 ? `` : `s`,
                    s
                      ? ` · selected: ${a.tracks.find((e) => e.id === s)?.name ?? `—`}`
                      : ``,
                  ],
                }),
              ],
            }),
          ],
        })
      : (0, Z.jsx)(hfe, {
          mixes: g,
          busy: W,
          onOpen: te,
          onCreate: K,
          onRename: ne,
          onDelete: re,
        });
  };
