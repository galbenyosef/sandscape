// Create-ea24k1TY 150 — children
// Lines 49907-50451 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function RV({
  active: e,
  characters: t,
  plan: n,
  capabilities: r,
  cost: i,
  busy: a,
  disabled: o,
  onCapture: s,
}) {
  let [c, l] = (0, X.useState)(null),
    [u, d] = (0, X.useState)(null),
    [f, p] = (0, X.useState)(0),
    [m, h] = (0, X.useState)([0, 0]),
    [g, _] = (0, X.useState)(!1),
    [v, y] = (0, X.useState)(``),
    [b, x] = (0, X.useState)(``),
    [S, C] = (0, X.useState)(``),
    [w, T] = (0, X.useState)(null),
    [E, D] = (0, X.useState)(!1),
    O = (0, X.useRef)(null),
    k = (0, X.useRef)(null),
    A = (0, X.useRef)(null),
    j = (0, X.useRef)(null),
    M = (0, X.useRef)(null),
    P = Math.min(20, r?.max_capture_seconds ?? 20),
    F = t.find((e) => e.id === b) || t[0],
    I = F?.id || ``,
    L =
      n?.characters
        .find((e) => e.asset_id === I || e.asset_name === F?.name)
        ?.animations.filter(
          (e) =>
            (DI(e) || e.source === `performance_capture`) &&
            !e.animation_path &&
            e.status !== `generating`,
        ) ?? [],
    R = L.find((e) => e.animation_id === S),
    z = R?.name || v.trim(),
    B = async (e) => {
      O.current?.abort();
      let t = new AbortController();
      ((O.current = t), D(!0), T(null), l(e), p(0), h([0, 0]), _(!1));
      try {
        let n = await MV(e.file, t.signal);
        if (t.signal.aborted) return;
        (l(n), p(n.duration), h([0, Math.min(P, n.duration)]));
      } catch (e) {
        t.signal.aborted ||
          T(
            e instanceof Error ? e.message : `Could not prepare your recording`,
          );
      } finally {
        t.signal.aborted || D(!1);
      }
    },
    V = DV(B),
    H = V.phase !== `idle`,
    U = V.phase === `recording`,
    ee = a || o || E;
  ((0, X.useEffect)(() => () => O.current?.abort(), []),
    (0, X.useEffect)(() => {
      e || (V.stop(), j.current?.pause());
    }, [e, V.stop]),
    (0, X.useEffect)(() => {
      if (!c) {
        d(null);
        return;
      }
      let e = URL.createObjectURL(c.file);
      return (d({ take: c, url: e }), () => URL.revokeObjectURL(e));
    }, [c]));
  let G = u && u.take === c ? u.url : ``;
  (0, X.useEffect)(() => {
    A.current &&
      ((A.current.srcObject = V.stream),
      V.stream &&
        A.current.play().catch(() => T(`Tap the camera preview to start it.`)));
  }, [V.stream]);
  let te = (e) => {
      (j.current?.pause(),
        h(e),
        j.current && (j.current.currentTime = e[0] === m[0] ? e[1] : e[0]));
    },
    K = async () => {
      let e = j.current;
      if (e) {
        if (!e.paused) {
          e.pause();
          return;
        }
        (e.currentTime < m[0] || e.currentTime >= m[1] - 0.05) &&
          (e.currentTime = m[0]);
        try {
          await e.play();
        } catch {
          T(`This video cannot play in this browser. Try an MP4 recording.`);
        }
      }
    },
    ne = async () => {
      if (!c || i === null || a) return;
      j.current?.pause();
      let e = JSON.stringify([I, z, R?.animation_id, ...m]);
      ((!M.current || M.current.key !== e || M.current.file !== c.file) &&
        (M.current = { key: e, file: c.file, id: NV() }),
        await s({
          file: c.file,
          assetId: I,
          name: z,
          animationId: R?.animation_id,
          inSec: m[0],
          outSec: m[1],
          requestId: M.current.id,
          maxCharge: i,
        }));
    };
  return (0, Z.jsxs)(`div`, {
    className: `motion-capture`,
    children: [
      (0, Z.jsx)(`div`, {
        className: `motion-stage ${H ? `` : c ? `motion-stage-review` : `motion-stage-empty`}`,
        children: H
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(`video`, {
                  ref: A,
                  autoPlay: !0,
                  playsInline: !0,
                  muted: !0,
                  className: V.facing === `user` ? `motion-mirrored` : ``,
                  onClick: () => {
                    A.current?.play().catch(() => void 0);
                  },
                  "aria-label": `Live camera preview`,
                }),
                V.phase === `opening` &&
                  (0, Z.jsxs)(`div`, {
                    className: `motion-stage-overlay`,
                    children: [
                      (0, Z.jsx)(J, { className: `animate-spin` }),
                      (0, Z.jsx)(`span`, { children: `Opening camera` }),
                    ],
                  }),
                V.phase === `countdown` &&
                  (0, Z.jsx)(`div`, {
                    className: `motion-countdown`,
                    role: `status`,
                    "aria-live": `assertive`,
                    children: V.countdown,
                  }),
                U &&
                  (0, Z.jsxs)(`span`, {
                    className: `motion-recording`,
                    role: `status`,
                    children: [
                      (0, Z.jsx)(Se, { size: 10, fill: `currentColor` }),
                      ` `,
                      kV(V.elapsed),
                    ],
                  }),
                V.phase === `ready` &&
                  (0, Z.jsx)(`div`, {
                    className: `motion-frame-guide`,
                    "aria-hidden": `true`,
                  }),
              ],
            })
          : E
            ? (0, Z.jsxs)(`div`, {
                className: `motion-stage-overlay`,
                role: `status`,
                children: [
                  (0, Z.jsx)(J, { className: `animate-spin` }),
                  (0, Z.jsx)(`span`, { children: `Preparing your take` }),
                ],
              })
            : c && G
              ? (0, Z.jsx)(`video`, {
                  ref: j,
                  src: G,
                  playsInline: !0,
                  muted: !0,
                  preload: `metadata`,
                  "aria-label": `Recorded performance preview`,
                  onPlay: () => _(!0),
                  onPause: () => _(!1),
                  onLoadedMetadata: (e) => {
                    let t = e.currentTarget.duration;
                    Number.isFinite(t) && t > 0
                      ? (p(t),
                        h([0, Math.min(P, t)]),
                        t > (r?.max_video_seconds ?? 120) &&
                          T(`Choose a video of 2 minutes or less.`))
                      : c.duration ||
                        T(
                          `Could not read the video duration. Try exporting it as an MP4.`,
                        );
                  },
                  onTimeUpdate: (e) => {
                    e.currentTarget.currentTime >= m[1] &&
                      !e.currentTarget.paused &&
                      (e.currentTarget.pause(),
                      (e.currentTarget.currentTime = m[0]));
                  },
                  onError: () =>
                    T(
                      `This video cannot be opened. Try an MP4, MOV, or WebM file.`,
                    ),
                })
              : (0, Z.jsx)(`div`, {
                  className: `motion-stage-placeholder`,
                  children: (0, Z.jsx)(`div`, {
                    className: `motion-camera-mark`,
                    children: (0, Z.jsx)(Vo, { size: 38, strokeWidth: 1.25 }),
                  }),
                }),
      }),
      c &&
        !H &&
        !E &&
        (0, Z.jsx)(jV, {
          duration: f,
          value: m,
          onChange: te,
          maxDuration: P,
          compact: !0,
          disabled: ee,
          label: `Video in / out`,
        }),
      V.phase === `ready` &&
        (0, Z.jsxs)(`div`, {
          className: `motion-camera-controls`,
          children: [
            V.devices.length > 1 &&
              (0, Z.jsxs)(`select`, {
                "aria-label": `Camera lens`,
                value: V.deviceId,
                onChange: (e) => void V.open(V.facing, e.target.value),
                children: [
                  !V.devices.some((e) => e.deviceId === V.deviceId) &&
                    (0, Z.jsx)(`option`, {
                      value: ``,
                      children: `Current camera`,
                    }),
                  V.devices.map((e, t) =>
                    (0, Z.jsx)(
                      `option`,
                      {
                        value: e.deviceId,
                        children: e.label || `Camera ${t + 1}`,
                      },
                      e.deviceId,
                    ),
                  ),
                ],
              }),
            V.zoomRange &&
              (0, Z.jsxs)(`label`, {
                className: `motion-camera-zoom`,
                children: [
                  (0, Z.jsxs)(`span`, {
                    children: [Number(V.zoom.toFixed(1)), `×`],
                  }),
                  (0, Z.jsx)(`input`, {
                    type: `range`,
                    "aria-label": `Camera zoom`,
                    min: V.zoomRange.min,
                    max: V.zoomRange.max,
                    step: V.zoomRange.step,
                    value: V.zoom,
                    onChange: (e) => V.changeZoom(Number(e.target.value)),
                  }),
                ],
              }),
          ],
        }),
      (0, Z.jsx)(`div`, {
        className: `motion-capture-actions`,
        children:
          V.phase === `ready`
            ? (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsxs)(`button`, {
                    className: `motion-button motion-record-button`,
                    onClick: V.record,
                    children: [
                      (0, Z.jsx)(Se, { size: 16, fill: `currentColor` }),
                      ` Record`,
                    ],
                  }),
                  (0, Z.jsx)(`button`, {
                    className: `motion-icon-button`,
                    onClick: () =>
                      void V.open(V.facing === `user` ? `environment` : `user`),
                    "aria-label": `Switch front or rear camera`,
                    children: (0, Z.jsx)($o, { size: 20 }),
                  }),
                  (0, Z.jsx)(`button`, {
                    className: `motion-icon-button`,
                    onClick: V.stop,
                    "aria-label": `Close camera`,
                    children: (0, Z.jsx)(li, { size: 20 }),
                  }),
                ],
              })
            : H
              ? (0, Z.jsxs)(`button`, {
                  className: `motion-button motion-record-button`,
                  onClick: V.stop,
                  disabled: V.phase === `stopping`,
                  children: [
                    (0, Z.jsx)(Zo, { size: 16, fill: `currentColor` }),
                    ` `,
                    U
                      ? `Finish recording`
                      : V.phase === `stopping`
                        ? `Finishing take…`
                        : `Cancel`,
                  ],
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    c
                      ? (0, Z.jsxs)(`button`, {
                          className: `motion-button`,
                          disabled: !f || ee,
                          onClick: () => void K(),
                          children: [
                            g
                              ? (0, Z.jsx)(N, { size: 18 })
                              : (0, Z.jsx)(bn, { size: 18 }),
                            ` `,
                            g ? `Pause` : `Preview`,
                          ],
                        })
                      : (0, Z.jsxs)(`button`, {
                          className: `motion-button motion-button-primary`,
                          disabled: ee,
                          onClick: () => void V.open(),
                          children: [
                            (0, Z.jsx)(W, { size: 18 }),
                            ` Open camera`,
                          ],
                        }),
                    (0, Z.jsxs)(`button`, {
                      className: `motion-button`,
                      disabled: ee,
                      onClick: () => k.current?.click(),
                      children: [
                        (0, Z.jsx)(En, { size: 17 }),
                        ` `,
                        c ? `Replace` : `Upload video`,
                      ],
                    }),
                    c &&
                      (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          G &&
                            (0, Z.jsx)(`a`, {
                              href: G,
                              download: c.file.name,
                              className: `motion-icon-button`,
                              "aria-label": `Download your recording`,
                              children: (0, Z.jsx)(_o, { size: 17 }),
                            }),
                          (0, Z.jsx)(`button`, {
                            className: `motion-icon-button`,
                            disabled: ee,
                            onClick: () => void V.open(),
                            "aria-label": `Record another take`,
                            children: (0, Z.jsx)(W, { size: 17 }),
                          }),
                        ],
                      }),
                  ],
                }),
      }),
      (0, Z.jsx)(`input`, {
        ref: k,
        hidden: !0,
        type: `file`,
        accept: `video/mp4,video/quicktime,video/webm,video/x-matroska,.mp4,.mov,.webm,.mkv,.m4v`,
        onChange: (e) => {
          let t = e.target.files?.[0];
          if (((e.target.value = ``), t)) {
            if (t.size > (r?.max_video_bytes ?? 250 * 1024 * 1024)) {
              T(`Choose a video of 250 MiB or less.`);
              return;
            }
            B({ file: t });
          }
        },
      }),
      U
        ? (0, Z.jsxs)(`p`, {
            className: `motion-hint`,
            children: [
              (0, Z.jsx)(Ete, { size: 14 }),
              ` `,
              V.awake
                ? `Screen kept awake while recording.`
                : `Keep this screen open while recording.`,
              ` No audio recorded.`,
            ],
          })
        : !c &&
          (0, Z.jsx)(`p`, {
            className: `motion-hint`,
            children: `One person, good light, full body in view.`,
          }),
      (w || V.error) &&
        (0, Z.jsx)(`p`, {
          className: `motion-error`,
          role: `alert`,
          children: w || V.error,
        }),
      c &&
        !H &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsxs)(`div`, {
              className: `motion-form ${t.length === 1 ? `motion-form-single-character` : ``}`,
              children: [
                (0, Z.jsxs)(`fieldset`, {
                  disabled: ee,
                  className: `motion-character-field`,
                  children: [
                    (0, Z.jsx)(`legend`, { children: `Character` }),
                    (0, Z.jsx)(`div`, {
                      className: `motion-character-picker`,
                      children: t.map((e) =>
                        (0, Z.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            className: `motion-character-choice`,
                            "aria-pressed": I === e.id,
                            onClick: () => {
                              (x(e.id), C(``));
                            },
                            children: [
                              (0, Z.jsx)(LV, {
                                imageUrl: e.imageUrl,
                                modelUrl: e.modelUrl,
                              }),
                              (0, Z.jsx)(`span`, {
                                children: e.name.replace(/_/g, ` `),
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
                !!L.length &&
                  (0, Z.jsxs)(`fieldset`, {
                    disabled: ee,
                    className: `motion-plan-field`,
                    children: [
                      (0, Z.jsx)(`legend`, { children: `Animation` }),
                      (0, Z.jsxs)(`div`, {
                        className: `motion-plan-picker`,
                        children: [
                          L.map((e) =>
                            (0, Z.jsx)(
                              `button`,
                              {
                                type: `button`,
                                "aria-pressed":
                                  R?.animation_id === e.animation_id,
                                onClick: () => C(e.animation_id),
                                children: e.name,
                              },
                              e.animation_id,
                            ),
                          ),
                          (0, Z.jsx)(`button`, {
                            type: `button`,
                            "aria-pressed": !R,
                            onClick: () => C(``),
                            children: `Custom`,
                          }),
                        ],
                      }),
                    ],
                  }),
                !R &&
                  (0, Z.jsxs)(`label`, {
                    children: [
                      `Animation name`,
                      (0, Z.jsx)(`input`, {
                        value: v,
                        disabled: ee,
                        maxLength: 200,
                        placeholder: `Name this move`,
                        onChange: (e) => y(e.target.value),
                      }),
                    ],
                  }),
              ],
            }),
            !t.length &&
              (0, Z.jsx)(`p`, {
                className: `motion-hint`,
                children: `Create a rigged character to use this take.`,
              }),
            !r?.configured &&
              (0, Z.jsx)(`p`, {
                className: `motion-notice`,
                children: `Motion conversion is unavailable.`,
              }),
            r?.configured &&
              i === null &&
              (0, Z.jsx)(`p`, {
                className: `motion-notice`,
                children: `Conversion pricing is unavailable. Try again later.`,
              }),
            (0, Z.jsx)(an, {
              className: `motion-submit`,
              label: `Create animation`,
              loadingText: `Converting…`,
              isLoading: a,
              cost: i,
              onClick: () => void ne(),
              disabled:
                ee ||
                !r?.configured ||
                i === null ||
                !z ||
                !t.some((e) => e.id === I) ||
                !!w ||
                f <= 0 ||
                m[1] <= m[0] ||
                m[1] - m[0] > P + 0.001,
              icon: (0, Z.jsx)(Vo, { size: 18 }),
              checkBalance: !0,
            }),
          ],
        }),
    ],
  });
}
