// Create-ea24k1TY 231 — classname
// Lines 77737-78867 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var Ede = ({ engine: e, className: t }) => {
    let n = Q0((e) => e.loop),
      r = Q0((e) => e.effects),
      i = Q0((e) => e.enableLoop),
      a = Q0((e) => e.disableLoop),
      o = Q0((e) => e.setLoopRange),
      s = Q0((e) => e.setLoopCrossfade),
      c = (0, X.useRef)(null),
      [l, u] = (0, X.useState)(!1),
      d = X.useCallback(() => {
        let e = c.current;
        if (e) {
          try {
            e.stop();
          } catch {}
          try {
            e.disconnect();
          } catch {}
          c.current = null;
        }
        u(!1);
      }, []);
    (0, X.useEffect)(() => d, [d]);
    let f = e.getBuffer(),
      p = f ? f.duration : 0;
    (0, X.useEffect)(() => {
      d();
    }, [f, d]);
    let m = n ? n.in_sec : 0,
      h = n ? n.out_sec : p,
      g = Math.max(0, h - m),
      _ = g / 2,
      v = n ? n.crossfade_sec : j2,
      y = Math.min(v, _),
      b = Math.max(0, g - y),
      x = !!n && r.some((e) => e.enabled && Tde.has(e.type)),
      S = (e) => {
        if ((d(), e)) {
          let e = p > 0 ? p : 0,
            t = Math.min(j2, e / 2);
          i(0, e, t);
        } else a();
      },
      C = (e) => {
        if (!n) return;
        let t = Math.max(0, Math.min(e, n.out_sec));
        (o(t, n.out_sec), E(t, n.out_sec, n));
      },
      w = (e) => {
        if (!n) return;
        let t = Math.min(p || e, Math.max(e, n.in_sec));
        (o(n.in_sec, t), E(n.in_sec, t, n));
      },
      T = (e) => {
        if (!n) return;
        let t = Math.max(0, (n.out_sec - n.in_sec) / 2);
        s(Math.max(0, Math.min(e, t)));
      },
      E = (e, t, n) => {
        let r = Math.max(0, (t - e) / 2);
        n.crossfade_sec > r && s(r);
      },
      D = () => {
        if (l) {
          d();
          return;
        }
        if (!n || !f) return;
        let t = e.getAudioContext(),
          r = f.numberOfChannels,
          i = f.length,
          a = c2(new OfflineAudioContext(r, i, f.sampleRate), f, n);
        if (!a || a.length < 2) return;
        let o = ede(t, a);
        ((o.onended = () => {
          c.current === o && d();
        }),
          o.start(0),
          (c.current = o),
          u(!0));
      },
      O = !!n,
      k = O && p > 0 && b > 0;
    return (0, Z.jsxs)(`div`, {
      className: `flex flex-col gap-3 ${t ?? ``}`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, Z.jsxs)(`h4`, {
              className: `text-xs font-semibold text-gray-300 flex items-center gap-1.5`,
              children: [
                (0, Z.jsx)(Ro, { className: `h-3.5 w-3.5 text-teal-300` }),
                `Loop`,
              ],
            }),
            (0, Z.jsxs)(`label`, {
              className: `flex items-center gap-1.5 cursor-pointer select-none`,
              children: [
                (0, Z.jsx)(`input`, {
                  type: `checkbox`,
                  checked: O,
                  onChange: (e) => S(e.target.checked),
                  disabled: p <= 0,
                  className: `h-3.5 w-3.5 rounded border-gray-600 bg-gray-800 text-teal-500 focus:ring-teal-500/30 disabled:opacity-40`,
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-[11px] text-gray-400`,
                  children: `Enable loop`,
                }),
              ],
            }),
          ],
        }),
        O
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, Z.jsx)(`label`, {
                          className: `text-[11px] text-gray-400`,
                          children: `In`,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, Z.jsx)(`input`, {
                              type: `number`,
                              min: 0,
                              max: h,
                              step: 0.01,
                              value: m,
                              onChange: (e) => {
                                let t = Number(e.target.value);
                                Number.isNaN(t) || C(t);
                              },
                              className: M2,
                            }),
                            (0, Z.jsx)(`span`, {
                              className: `text-[10px] text-gray-500 w-3`,
                              children: `s`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, Z.jsx)(`label`, {
                          className: `text-[11px] text-gray-400`,
                          children: `Out`,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, Z.jsx)(`input`, {
                              type: `number`,
                              min: m,
                              max: p || void 0,
                              step: 0.01,
                              value: h,
                              onChange: (e) => {
                                let t = Number(e.target.value);
                                Number.isNaN(t) || w(t);
                              },
                              className: M2,
                            }),
                            (0, Z.jsx)(`span`, {
                              className: `text-[10px] text-gray-500 w-3`,
                              children: `s`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, Z.jsx)(`label`, {
                          className: `text-[11px] text-gray-400`,
                          children: `Crossfade`,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, Z.jsx)(`input`, {
                              type: `number`,
                              min: 0,
                              max: _,
                              step: 0.01,
                              value: v,
                              onChange: (e) => {
                                let t = Number(e.target.value);
                                Number.isNaN(t) || T(t);
                              },
                              className: M2,
                            }),
                            (0, Z.jsx)(`span`, {
                              className: `text-[10px] text-gray-500 w-3`,
                              children: `s`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`input`, {
                      type: `range`,
                      min: 0,
                      max: _ || 0.001,
                      step: 0.005,
                      value: y,
                      onChange: (e) => T(Number(e.target.value)),
                      className: `w-full h-1.5 accent-teal-500 cursor-pointer`,
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `rounded bg-gray-800/50 px-2.5 py-2 text-center`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `text-[11px] text-gray-400`,
                      children: [
                        `In `,
                        (0, Z.jsx)(`span`, {
                          className: `text-teal-300`,
                          children: N2(m),
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-gray-600 mx-1`,
                          children: `·`,
                        }),
                        `Out `,
                        (0, Z.jsx)(`span`, {
                          className: `text-teal-300`,
                          children: N2(h),
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-gray-600 mx-1`,
                          children: `·`,
                        }),
                        `Crossfade`,
                        ` `,
                        (0, Z.jsx)(`span`, {
                          className: `text-teal-300`,
                          children: N2(y),
                        }),
                      ],
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `text-[11px] text-gray-300 mt-1`,
                      children: [
                        (0, Z.jsx)(`span`, {
                          className: `text-gray-500`,
                          children: `→ seamless loop`,
                        }),
                        ` `,
                        (0, Z.jsxs)(`span`, {
                          className: `text-emerald-300 font-medium`,
                          children: [N2(b), ` s`],
                        }),
                      ],
                    }),
                  ],
                }),
                x &&
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-start gap-1.5 rounded border border-amber-500/30 bg-amber-500/5 px-2.5 py-1.5`,
                    children: [
                      (0, Z.jsx)(Tn, {
                        className: `h-3.5 w-3.5 text-amber-400 flex-shrink-0 mt-px`,
                      }),
                      (0, Z.jsx)(`p`, {
                        className: `text-[10px] text-amber-300/90 leading-snug`,
                        children: `Echo and fades break a seamless loop — their tails/ramps aren't periodic across the seam. Disable or remove them for a clean loop.`,
                      }),
                    ],
                  }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: D,
                  disabled: !k,
                  className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded text-xs transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${l ? `bg-teal-500/30 text-teal-200 border border-teal-500/40` : `bg-gray-800/40 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30`}`,
                  children: l
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(Zo, { className: `h-3 w-3` }),
                          `Stop preview`,
                        ],
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(bn, { className: `h-3 w-3` }),
                          `Preview loop`,
                        ],
                      }),
                }),
              ],
            })
          : (0, Z.jsx)(`div`, {
              className: `rounded-md border border-dashed border-gray-700/40 px-3 py-4 text-center`,
              children: (0, Z.jsx)(`p`, {
                className: `text-[11px] text-gray-500 leading-snug`,
                children: `Enable loop to set in/out points and a crossfade. A seamless, crossfaded copy is baked for the game — the original file is never changed.`,
              }),
            }),
      ],
    });
  },
  P2 = {
    fade_in: {
      label: `Fade In`,
      description: `Ramp volume up from silence`,
      Icon: rs,
    },
    fade_out: {
      label: `Fade Out`,
      description: `Ramp volume down to silence`,
      Icon: ns,
    },
    gain: { label: `Gain`, description: `Boost or cut the level`, Icon: Et },
    echo: { label: `Echo`, description: `Delayed feedback repeats`, Icon: Lo },
    normalize: {
      label: `Normalize`,
      description: `Scale peak to a target (measures source clip)`,
      Icon: wo,
    },
    eq: {
      label: `EQ`,
      description: `Multiband parametric equalizer`,
      Icon: Yo,
    },
    distortion: {
      label: `Distortion`,
      description: `Saturation / overdrive`,
      Icon: kn,
    },
    compressor: {
      label: `Compressor`,
      description: `Even out the dynamics`,
      Icon: vn,
    },
    bitcrush: {
      label: `Bitcrush`,
      description: `Lo-fi bit-depth reduction`,
      Icon: M,
    },
  },
  F2 = [
    `fade_in`,
    `fade_out`,
    `gain`,
    `eq`,
    `compressor`,
    `distortion`,
    `bitcrush`,
    `echo`,
    `normalize`,
  ],
  I2 = ({
    label: e,
    value: t,
    min: n,
    max: r,
    step: i,
    unit: a,
    onChange: o,
  }) => {
    let s = (e) => Math.min(r, Math.max(n, e));
    return (0, Z.jsxs)(`div`, {
      className: `space-y-1`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-[11px] text-gray-400`,
              children: e,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, Z.jsx)(`input`, {
                  type: `number`,
                  value: t,
                  min: n,
                  max: r,
                  step: i,
                  onChange: (e) => {
                    let t = Number(e.target.value);
                    Number.isNaN(t) || o(s(t));
                  },
                  className: `w-16 bg-gray-800/60 border border-gray-600/30 rounded px-1.5 py-0.5 text-[11px] text-gray-300 text-right focus:outline-none focus:border-purple-500/50`,
                }),
                a &&
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] text-gray-500 w-6`,
                    children: a,
                  }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(`input`, {
          type: `range`,
          value: t,
          min: n,
          max: r,
          step: i,
          onChange: (e) => o(s(Number(e.target.value))),
          className: `w-full h-1.5 accent-purple-500 cursor-pointer`,
        }),
      ],
    });
  },
  Dde = ({ effect: e, update: t }) =>
    (0, Z.jsxs)(`div`, {
      className: `space-y-2.5`,
      children: [
        (0, Z.jsx)(I2, {
          label: `Duration`,
          unit: `s`,
          value: e.params.duration_sec,
          min: 0,
          max: 5,
          step: 0.05,
          onChange: (e) => t({ duration_sec: e }),
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-[11px] text-gray-400`,
              children: `Curve`,
            }),
            (0, Z.jsxs)(`select`, {
              value: e.params.curve,
              onChange: (e) => t({ curve: e.target.value }),
              className: `bg-gray-800/60 border border-gray-600/30 rounded px-1.5 py-0.5 text-[11px] text-gray-300 focus:outline-none focus:border-purple-500/50`,
              children: [
                (0, Z.jsx)(`option`, {
                  value: `equalPower`,
                  children: `Equal Power`,
                }),
                (0, Z.jsx)(`option`, { value: `linear`, children: `Linear` }),
              ],
            }),
          ],
        }),
      ],
    }),
  Ode = ({ effect: e, update: t }) =>
    (0, Z.jsx)(I2, {
      label: `Gain`,
      unit: `dB`,
      value: e.params.gain_db,
      min: -24,
      max: 24,
      step: 0.5,
      onChange: (e) => t({ gain_db: e }),
    }),
  kde = ({ effect: e, update: t }) =>
    (0, Z.jsxs)(`div`, {
      className: `space-y-1.5`,
      children: [
        (0, Z.jsx)(I2, {
          label: `Target`,
          unit: `dBFS`,
          value: e.params.target_dbfs,
          min: -24,
          max: 0,
          step: 0.5,
          onChange: (e) => t({ target_dbfs: e }),
        }),
        (0, Z.jsx)(`p`, {
          className: `text-[10px] text-gray-500 leading-snug`,
          children: `Measures the source clip peak (pre-chain), not the post-effect signal.`,
        }),
      ],
    }),
  Ade = ({ effect: e, update: t }) =>
    (0, Z.jsxs)(`div`, {
      className: `space-y-2.5`,
      children: [
        (0, Z.jsx)(I2, {
          label: `Delay`,
          unit: `s`,
          value: e.params.delay_sec,
          min: 0,
          max: 0.9,
          step: 0.01,
          onChange: (e) => t({ delay_sec: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Feedback`,
          value: e.params.feedback,
          min: 0,
          max: 0.9,
          step: 0.01,
          onChange: (e) => t({ feedback: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Mix`,
          value: e.params.mix,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => t({ mix: e }),
        }),
      ],
    }),
  jde = [
    `lowpass`,
    `highpass`,
    `bandpass`,
    `lowshelf`,
    `highshelf`,
    `peaking`,
    `notch`,
  ],
  Mde = [
    {
      label: `Radio`,
      bands: [
        { filter_type: `highpass`, frequency_hz: 500, q: 0.7, gain_db: 0 },
        { filter_type: `lowpass`, frequency_hz: 3e3, q: 0.7, gain_db: 0 },
        { filter_type: `peaking`, frequency_hz: 1500, q: 1.5, gain_db: 6 },
      ],
    },
    {
      label: `Telephone`,
      bands: [
        { filter_type: `highpass`, frequency_hz: 300, q: 0.7, gain_db: 0 },
        { filter_type: `lowpass`, frequency_hz: 3400, q: 0.7, gain_db: 0 },
        { filter_type: `peaking`, frequency_hz: 1e3, q: 2, gain_db: 8 },
      ],
    },
    {
      label: `Flat`,
      bands: [{ filter_type: `peaking`, frequency_hz: 1e3, q: 1, gain_db: 0 }],
    },
  ],
  Nde = (e) => e === `peaking` || e === `lowshelf` || e === `highshelf`,
  Pde = ({ effect: e, update: t }) => {
    let n = e.params.bands,
      r = (e) => t({ bands: e }),
      i = (e, t) => r(n.map((n, r) => (r === e ? { ...n, ...t } : n))),
      a = (e) => r(n.filter((t, n) => n !== e));
    return (0, Z.jsxs)(`div`, {
      className: `space-y-2`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-1 flex-wrap`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] text-gray-500`,
              children: `Preset`,
            }),
            Mde.map((e) =>
              (0, Z.jsx)(
                `button`,
                {
                  type: `button`,
                  onClick: () => r(e.bands.map((e) => ({ ...e }))),
                  className: `px-1.5 py-0.5 rounded text-[10px] bg-gray-800/60 border border-gray-600/30 text-gray-300 hover:border-purple-500/50 transition-colors`,
                  children: e.label,
                },
                e.label,
              ),
            ),
          ],
        }),
        n.map((e, t) =>
          (0, Z.jsxs)(
            `div`,
            {
              className: `rounded border border-gray-700/40 p-1.5 space-y-1.5`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1`,
                  children: [
                    (0, Z.jsx)(`select`, {
                      value: e.filter_type,
                      onChange: (e) => i(t, { filter_type: e.target.value }),
                      className: `flex-1 bg-gray-800/60 border border-gray-600/30 rounded px-1 py-0.5 text-[10px] text-gray-300 focus:outline-none focus:border-purple-500/50`,
                      children: jde.map((e) =>
                        (0, Z.jsx)(`option`, { value: e, children: e }, e),
                      ),
                    }),
                    (0, Z.jsx)(`button`, {
                      type: `button`,
                      onClick: () => a(t),
                      className: `p-0.5 rounded text-gray-500 hover:text-red-400 hover:bg-gray-700/50 transition-colors`,
                      title: `Remove band`,
                      "aria-label": `Remove EQ band`,
                      children: (0, Z.jsx)(qr, { className: `h-3 w-3` }),
                    }),
                  ],
                }),
                (0, Z.jsx)(I2, {
                  label: `Freq`,
                  unit: `Hz`,
                  value: e.frequency_hz,
                  min: 20,
                  max: 18e3,
                  step: 10,
                  onChange: (e) => i(t, { frequency_hz: e }),
                }),
                (0, Z.jsx)(I2, {
                  label: `Q`,
                  value: e.q,
                  min: 0.1,
                  max: 18,
                  step: 0.1,
                  onChange: (e) => i(t, { q: e }),
                }),
                Nde(e.filter_type) &&
                  (0, Z.jsx)(I2, {
                    label: `Gain`,
                    unit: `dB`,
                    value: e.gain_db,
                    min: -24,
                    max: 24,
                    step: 0.5,
                    onChange: (e) => i(t, { gain_db: e }),
                  }),
              ],
            },
            t,
          ),
        ),
        (0, Z.jsxs)(`button`, {
          type: `button`,
          onClick: () =>
            r([
              ...n,
              { filter_type: `peaking`, frequency_hz: 1e3, q: 1, gain_db: 0 },
            ]),
          className: `w-full flex items-center justify-center gap-1 px-2 py-1 rounded border border-dashed border-gray-600/40 text-[11px] text-gray-400 hover:border-purple-500/40 hover:text-gray-200 transition-colors`,
          children: [(0, Z.jsx)(ni, { className: `h-3 w-3` }), `Add band`],
        }),
      ],
    });
  },
  Fde = ({ effect: e, update: t }) =>
    (0, Z.jsxs)(`div`, {
      className: `space-y-2.5`,
      children: [
        (0, Z.jsx)(I2, {
          label: `Drive`,
          value: e.params.drive,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => t({ drive: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Mix`,
          value: e.params.mix,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => t({ mix: e }),
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-[11px] text-gray-400`,
              children: `Oversample`,
            }),
            (0, Z.jsxs)(`select`, {
              value: e.params.oversample,
              onChange: (e) => t({ oversample: e.target.value }),
              className: `bg-gray-800/60 border border-gray-600/30 rounded px-1.5 py-0.5 text-[11px] text-gray-300 focus:outline-none focus:border-purple-500/50`,
              children: [
                (0, Z.jsx)(`option`, { value: `none`, children: `None` }),
                (0, Z.jsx)(`option`, { value: `2x`, children: `2×` }),
                (0, Z.jsx)(`option`, { value: `4x`, children: `4×` }),
              ],
            }),
          ],
        }),
      ],
    }),
  Ide = ({ effect: e, update: t }) =>
    (0, Z.jsxs)(`div`, {
      className: `space-y-2`,
      children: [
        (0, Z.jsx)(I2, {
          label: `Threshold`,
          unit: `dB`,
          value: e.params.threshold_db,
          min: -100,
          max: 0,
          step: 1,
          onChange: (e) => t({ threshold_db: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Ratio`,
          unit: `:1`,
          value: e.params.ratio,
          min: 1,
          max: 20,
          step: 0.5,
          onChange: (e) => t({ ratio: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Knee`,
          unit: `dB`,
          value: e.params.knee_db,
          min: 0,
          max: 40,
          step: 1,
          onChange: (e) => t({ knee_db: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Attack`,
          unit: `s`,
          value: e.params.attack_sec,
          min: 0,
          max: 1,
          step: 0.001,
          onChange: (e) => t({ attack_sec: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Release`,
          unit: `s`,
          value: e.params.release_sec,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => t({ release_sec: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Makeup`,
          unit: `dB`,
          value: e.params.makeup_db,
          min: 0,
          max: 24,
          step: 0.5,
          onChange: (e) => t({ makeup_db: e }),
        }),
      ],
    }),
  Lde = ({ effect: e, update: t }) =>
    (0, Z.jsxs)(`div`, {
      className: `space-y-2.5`,
      children: [
        (0, Z.jsx)(I2, {
          label: `Bits`,
          value: e.params.bits,
          min: 1,
          max: 16,
          step: 1,
          onChange: (e) => t({ bits: e }),
        }),
        (0, Z.jsx)(I2, {
          label: `Mix`,
          value: e.params.mix,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => t({ mix: e }),
        }),
      ],
    }),
  Rde = ({ effect: e, update: t }) => {
    switch (e.type) {
      case `fade_in`:
      case `fade_out`:
        return (0, Z.jsx)(Dde, { effect: e, update: t });
      case `gain`:
        return (0, Z.jsx)(Ode, { effect: e, update: t });
      case `echo`:
        return (0, Z.jsx)(Ade, { effect: e, update: t });
      case `normalize`:
        return (0, Z.jsx)(kde, { effect: e, update: t });
      case `eq`:
        return (0, Z.jsx)(Pde, { effect: e, update: t });
      case `distortion`:
        return (0, Z.jsx)(Fde, { effect: e, update: t });
      case `compressor`:
        return (0, Z.jsx)(Ide, { effect: e, update: t });
      case `bitcrush`:
        return (0, Z.jsx)(Lde, { effect: e, update: t });
    }
  },
  zde = ({
    effect: e,
    index: t,
    onToggle: n,
    onRemove: r,
    onUpdate: i,
    onReorder: a,
    listId: o,
  }) => {
    let s = P2[e.type],
      { Icon: c } = s,
      {
        sortableProps: l,
        isOver: u,
        dropSide: d,
      } = Te({
        listId: o,
        index: t,
        axis: `y`,
        onReorder: a,
        preview: () =>
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5 rounded-md border border-purple-500/40 bg-[#1a1d2e]/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
            children: [
              (0, Z.jsx)(c, {
                className: `h-3.5 w-3.5 text-purple-300 flex-shrink-0`,
              }),
              (0, Z.jsx)(`span`, {
                className: `truncate max-w-[160px]`,
                children: s.label,
              }),
            ],
          }),
      });
    return (0, Z.jsxs)(`div`, {
      ref: l.ref,
      "data-dnd-zone": l[`data-dnd-zone`],
      className: `relative rounded-md border bg-gray-800/40 transition-colors ${u ? `border-purple-500/60` : e.enabled ? `border-gray-600/30` : `border-gray-700/40`} ${e.enabled ? `` : `opacity-60`}`,
      children: [
        d === `before` &&
          (0, Z.jsx)(`div`, {
            className: `absolute -top-1 left-0 right-0 h-0.5 rounded bg-purple-500`,
          }),
        d === `after` &&
          (0, Z.jsx)(`div`, {
            className: `absolute -bottom-1 left-0 right-0 h-0.5 rounded bg-purple-500`,
          }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2 px-2 py-1.5`,
          children: [
            (0, Z.jsx)(`button`, {
              type: `button`,
              onPointerDown: l.onPointerDown,
              draggable: l.draggable,
              style: l.style,
              className: `cursor-grab active:cursor-grabbing text-gray-500 hover:text-gray-300 transition-colors`,
              title: `Drag to reorder`,
              "aria-label": `Drag to reorder effect`,
              children: (0, Z.jsx)(O, { className: `h-4 w-4` }),
            }),
            (0, Z.jsx)(c, {
              className: `h-3.5 w-3.5 text-purple-300 flex-shrink-0`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex-1 min-w-0`,
              children: [
                (0, Z.jsx)(`div`, {
                  className: `text-xs text-gray-200 truncate`,
                  children: s.label,
                }),
                (0, Z.jsx)(`div`, {
                  className: `text-[10px] text-gray-500 truncate`,
                  children: s.description,
                }),
              ],
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => n(e.id),
              className: `p-1 rounded transition-colors ${e.enabled ? `text-emerald-400 hover:bg-gray-700/50` : `text-gray-600 hover:bg-gray-700/50 hover:text-gray-400`}`,
              title: e.enabled ? `Disable effect` : `Enable effect`,
              "aria-pressed": e.enabled,
              children: (0, Z.jsx)(Dte, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => r(e.id),
              className: `p-1 rounded text-gray-500 hover:text-red-400 hover:bg-gray-700/50 transition-colors`,
              title: `Delete effect`,
              "aria-label": `Delete effect`,
              children: (0, Z.jsx)(qr, { className: `h-3.5 w-3.5` }),
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `px-3 pb-2.5 pt-0.5`,
          children: (0, Z.jsx)(Rde, { effect: e, update: (t) => i(e.id, t) }),
        }),
      ],
    });
  },
  Bde = 220,
  L2 = 4,
  R2 = 8,
  Vde = ({ onAdd: e }) => {
    let [t, n] = (0, X.useState)(!1),
      [r, i] = (0, X.useState)(null),
      a = (0, X.useRef)(null),
      o = (0, X.useRef)(null),
      s = (0, X.useCallback)(() => {
        let e = a.current;
        if (!e) return;
        let t = e.getBoundingClientRect(),
          n = window.innerWidth,
          r = window.innerHeight,
          o = Math.max(Bde, t.width),
          s = Math.min(Math.max(t.left, R2), n - o - R2),
          c = r - t.bottom,
          l = t.top;
        F2.length * 44 + 4 > c - L2 && l > c
          ? i({
              left: s,
              width: o,
              bottom: r - t.top + L2,
              maxHeight: Math.max(0, l - L2 - R2),
            })
          : i({
              left: s,
              width: o,
              top: t.bottom + L2,
              maxHeight: Math.max(0, c - L2 - R2),
            });
      }, []);
    return (
      (0, X.useLayoutEffect)(() => {
        if (!t) return;
        s();
        let e = () => s(),
          r = (e) => {
            let t = e.target;
            a.current?.contains(t) || o.current?.contains(t) || n(!1);
          };
        return (
          window.addEventListener(`resize`, e),
          window.addEventListener(`scroll`, e, !0),
          document.addEventListener(`mousedown`, r),
          () => {
            (window.removeEventListener(`resize`, e),
              window.removeEventListener(`scroll`, e, !0),
              document.removeEventListener(`mousedown`, r));
          }
        );
      }, [t, s]),
      (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsxs)(`button`, {
            ref: a,
            type: `button`,
            onClick: () => n((e) => !e),
            className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded border border-dashed border-gray-600/40 text-xs text-gray-400 hover:text-gray-200 hover:border-purple-500/40 hover:bg-gray-800/40 transition-colors`,
            children: [
              (0, Z.jsx)(ni, { className: `h-3.5 w-3.5` }),
              `Add effect`,
            ],
          }),
          t &&
            r &&
            (0, js.createPortal)(
              (0, Z.jsx)(`div`, {
                ref: o,
                className: `fixed z-[100] rounded-md border border-gray-600/40 bg-[#161922] shadow-lg shadow-black/40 overflow-y-auto`,
                style: {
                  left: r.left,
                  top: r.top,
                  bottom: r.bottom,
                  width: r.width,
                  maxHeight: r.maxHeight,
                },
                children: F2.map((t) => {
                  let r = P2[t],
                    { Icon: i } = r;
                  return (0, Z.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => {
                        (e(t), n(!1));
                      },
                      className: `w-full flex items-center gap-2 px-2.5 py-1.5 text-left hover:bg-gray-700/50 transition-colors`,
                      children: [
                        (0, Z.jsx)(i, {
                          className: `h-3.5 w-3.5 text-purple-300 flex-shrink-0`,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `min-w-0`,
                          children: [
                            (0, Z.jsx)(`div`, {
                              className: `text-xs text-gray-200`,
                              children: r.label,
                            }),
                            (0, Z.jsx)(`div`, {
                              className: `text-[10px] text-gray-500 truncate`,
                              children: r.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    t,
                  );
                }),
              }),
              document.body,
            ),
        ],
      })
    );
  },
  z2 = ({
    effects: e,
    onAdd: t,
    onUpdate: n,
    onToggle: r,
    onRemove: i,
    onReorder: a,
    title: o = `Effects`,
    subtitle: s = `Non-destructive · stack order = apply order`,
    emptyText:
      c = `No effects. Add fade, gain, EQ, compression, and more — the original file is never changed.`,
    className: l,
    compact: u = !1,
  }) => {
    let d = (0, X.useId)();
    return (0, Z.jsxs)(`div`, {
      className: `flex flex-col gap-2 ${l ?? ``}`,
      children: [
        !u &&
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            children: [
              (0, Z.jsx)(`h4`, {
                className: `text-xs font-semibold text-gray-300`,
                children: o,
              }),
              s &&
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] text-gray-500`,
                  children: s,
                }),
            ],
          }),
        e.length === 0
          ? (0, Z.jsx)(`div`, {
              className: `rounded-md border border-dashed border-gray-700/40 px-3 py-4 text-center`,
              children: (0, Z.jsx)(`p`, {
                className: `text-[11px] text-gray-500`,
                children: c,
              }),
            })
          : (0, Z.jsx)(`div`, {
              className: `flex flex-col gap-1.5`,
              children: e.map((e, t) =>
                (0, Z.jsx)(
                  zde,
                  {
                    effect: e,
                    index: t,
                    onToggle: r,
                    onRemove: i,
                    onUpdate: n,
                    onReorder: a,
                    listId: d,
                  },
                  e.id,
                ),
              ),
            }),
        (0, Z.jsx)(Vde, { onAdd: t }),
      ],
    });
  },
  Hde = ({ className: e }) => {
    let t = Q0((e) => e.effects),
      n = Q0((e) => e.addEffect),
      r = Q0((e) => e.updateEffect),
      i = Q0((e) => e.toggleEffect),
      a = Q0((e) => e.removeEffect),
      o = Q0((e) => e.reorderEffects);
    return (0, Z.jsx)(z2, {
      className: e,
      effects: t,
      onAdd: n,
      onUpdate: r,
      onToggle: i,
      onRemove: a,
      onReorder: o,
    });
  },
  Ude = {
    original: {
      label: `Original`,
      className: `border-gray-600/40 text-gray-400 bg-gray-800/40`,
    },
    edited: {
      label: `Edited`,
      className: `border-amber-500/40 text-amber-300 bg-amber-500/10`,
    },
    baking: {
      label: `Baking…`,
      className: `border-sky-500/40 text-sky-300 bg-sky-500/10`,
      spin: !0,
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
  B2 = ({
    status: e,
    title: t = `Whether the in-game file reflects your edits`,
  }) => {
    let n = Ude[e],
      r = e === `baking` ? J : e === `baked` ? Be : e === `failed` ? Tn : Se;
    return (0, Z.jsxs)(`span`, {
      className: `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${n.className}`,
      title: t,
      children: [
        (0, Z.jsx)(r, {
          className: `h-3 w-3 ${n.spin ? `animate-spin` : ``}`,
          fill: e === `baked` || e === `edited` ? `currentColor` : `none`,
        }),
        n.label,
      ],
    });
  };
