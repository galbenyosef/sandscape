// Create-ea24k1TY 263 — children
// Lines 88167-88634 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var Eme = [
    { label: `Full`, factor: 1 },
    { label: `½`, factor: 0.5 },
    { label: `¼`, factor: 0.25 },
  ],
  Dme = ({ open: e, onOpenChange: t, mediaCache: n, engine: r }) => {
    let i = G3((e) => e.doc),
      [a, o] = (0, X.useState)(`mp4`),
      [s, c] = (0, X.useState)(1),
      [l, u] = (0, X.useState)(`high`),
      [d, f] = (0, X.useState)(!1),
      [p, m] = (0, X.useState)(null),
      [h, g] = (0, X.useState)({ mp4: !0, webm: !0 }),
      _ = (0, X.useRef)(null),
      v = (e) => Math.max(2, Math.floor((e * s) / 2) * 2),
      y = v(i.settings.width),
      b = v(i.settings.height),
      x = b3(i),
      S = !h.mp4 && !h.webm,
      C =
        typeof window < `u` &&
        (!window.isSecureContext || window.VideoEncoder === void 0);
    (0, X.useEffect)(() => {
      if (!e) return;
      let t = !1;
      return (
        (async () => {
          let e = await c6(`mp4`, y, b),
            n = await c6(`webm`, y, b);
          t ||
            (g({ mp4: !!e.video, webm: !!n.video }),
            !e.video && n.video && o(`webm`));
        })(),
        () => {
          t = !0;
        }
      );
    }, [e, y, b]);
    let w = (0, X.useCallback)(async () => {
        (r.pause(),
          f(!0),
          m({ phase: `preparing`, framesDone: 0, framesTotal: 1 }));
        let e = new AbortController();
        _.current = e;
        try {
          let r = await wme(
              G3.getState().doc,
              n,
              {
                format: a,
                width: y,
                height: b,
                fps: i.settings.fps,
                quality: l,
              },
              (e) => m({ ...e }),
              e.signal,
            ),
            o = i.name.replace(/[^\w\-. ]+/g, ``).trim() || `composition`;
          (Tme(r.blob, `${o}.${r.extension}`),
            r.audioOmitted
              ? Hr.warning(
                  `Exported without audio — this browser has no compatible audio encoder`,
                )
              : Hr.success(`Exported ${o}.${r.extension}`),
            t(!1));
        } catch (e) {
          e instanceof l6
            ? Hr.info(`Export cancelled`)
            : (console.error(`[VideoEditor] export failed:`, e),
              Hr.error(e instanceof Error ? e.message : `Export failed`));
        } finally {
          ((_.current = null), f(!1), m(null));
        }
      }, [i.name, i.settings.fps, r, a, n, t, b, y, l]),
      T = (0, X.useCallback)(() => {
        _.current?.abort();
      }, []);
    (0, X.useEffect)(() => () => _.current?.abort(), []);
    let E =
        p && p.framesTotal > 0
          ? Math.round((p.framesDone / p.framesTotal) * 100)
          : 0,
      D = (e, t = !1) =>
        `rounded-md border px-2.5 py-1.5 text-xs transition-colors ${t ? `cursor-not-allowed border-border text-gray-600` : e ? `border-violet-500/60 bg-violet-500/10 text-gray-100` : `border-border text-gray-300 hover:border-violet-500/40`}`;
    return (0, Z.jsx)(no, {
      open: e,
      onOpenChange: (e) => {
        d || t(e);
      },
      children: (0, Z.jsxs)($a, {
        className: `max-w-md`,
        children: [
          (0, Z.jsxs)(Za, {
            children: [
              (0, Z.jsx)(eo, { children: `Export composition` }),
              (0, Z.jsxs)(to, {
                children: [
                  `Rendered in your browser — `,
                  y,
                  `×`,
                  b,
                  ` · `,
                  i.settings.fps,
                  ` fps ·`,
                  ` `,
                  x.toFixed(1),
                  `s`,
                ],
              }),
            ],
          }),
          d
            ? (0, Z.jsxs)(`div`, {
                className: `py-2`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `mb-1.5 flex justify-between text-xs text-muted-foreground`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        children:
                          p?.phase === `video`
                            ? `Rendering frames ${p.framesDone}/${p.framesTotal}`
                            : p?.phase === `audio`
                              ? `Mixing audio…`
                              : p?.phase === `finalizing`
                                ? `Finalizing file…`
                                : `Preparing…`,
                      }),
                      (0, Z.jsxs)(`span`, {
                        className: `font-mono`,
                        children: [E, `%`],
                      }),
                    ],
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `h-2 overflow-hidden rounded-full bg-gray-800`,
                    children: (0, Z.jsx)(`div`, {
                      className: `h-full rounded-full bg-violet-500 transition-[width]`,
                      style: { width: `${E}%` },
                    }),
                  }),
                ],
              })
            : (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `mb-1 text-xs text-muted-foreground`,
                        children: `Format`,
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `flex gap-1.5`,
                        children: [
                          (0, Z.jsx)(`button`, {
                            type: `button`,
                            disabled: !h.mp4,
                            onClick: () => o(`mp4`),
                            className: D(a === `mp4`, !h.mp4),
                            title: h.mp4
                              ? `H.264 + AAC`
                              : `H.264 encoding not supported by this browser`,
                            children: `MP4 (H.264)`,
                          }),
                          (0, Z.jsx)(`button`, {
                            type: `button`,
                            disabled: !h.webm,
                            onClick: () => o(`webm`),
                            className: D(a === `webm`, !h.webm),
                            title: h.webm
                              ? `VP9/VP8 + Opus`
                              : `VP9/VP8 encoding not supported by this browser`,
                            children: `WebM (VP9)`,
                          }),
                        ],
                      }),
                      S &&
                        (0, Z.jsx)(`p`, {
                          className: `mt-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1.5 text-[11px] leading-snug text-amber-200/90`,
                          children: C
                            ? (0, Z.jsxs)(Z.Fragment, {
                                children: [
                                  `In-browser video encoding (WebCodecs) needs a `,
                                  (0, Z.jsx)(`b`, {
                                    children: `secure context`,
                                  }),
                                  `. Open the editor at `,
                                  (0, Z.jsxs)(`code`, {
                                    className: `font-mono`,
                                    children: [
                                      `http://localhost:`,
                                      (typeof window < `u` &&
                                        window.location.port) ||
                                        `5173`,
                                    ],
                                  }),
                                  ` `,
                                  `on this machine — or serve it over `,
                                  (0, Z.jsx)(`b`, { children: `HTTPS` }),
                                  ` — to enable MP4/WebM export. A plain-HTTP LAN address (e.g. `,
                                  (0, Z.jsx)(`code`, {
                                    className: `font-mono`,
                                    children: `http://192.168.…`,
                                  }),
                                  `) disables it.`,
                                ],
                              })
                            : (0, Z.jsxs)(Z.Fragment, {
                                children: [
                                  `This browser can’t encode H.264 or VP9/VP8 at `,
                                  y,
                                  `×`,
                                  b,
                                  `. Try a Chromium-based browser, or a smaller export resolution.`,
                                ],
                              }),
                        }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `mb-1 text-xs text-muted-foreground`,
                        children: `Resolution`,
                      }),
                      (0, Z.jsx)(`div`, {
                        className: `flex gap-1.5`,
                        children: Eme.map((e) =>
                          (0, Z.jsxs)(
                            `button`,
                            {
                              type: `button`,
                              onClick: () => c(e.factor),
                              className: D(s === e.factor),
                              children: [
                                e.label,
                                ` (`,
                                Math.floor((i.settings.width * e.factor) / 2) *
                                  2,
                                `×`,
                                Math.floor((i.settings.height * e.factor) / 2) *
                                  2,
                                `)`,
                              ],
                            },
                            e.label,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `mb-1 text-xs text-muted-foreground`,
                        children: `Quality`,
                      }),
                      (0, Z.jsx)(`div`, {
                        className: `flex gap-1.5`,
                        children: [`low`, `medium`, `high`].map((e) =>
                          (0, Z.jsx)(
                            `button`,
                            {
                              type: `button`,
                              onClick: () => u(e),
                              className: D(l === e),
                              children: e[0].toUpperCase() + e.slice(1),
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          (0, Z.jsx)(Qa, {
            children: d
              ? (0, Z.jsx)(`button`, {
                  type: `button`,
                  onClick: T,
                  className: `rounded-md border border-gray-700/60 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-gray-800/60`,
                  children: `Cancel export`,
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`button`, {
                      type: `button`,
                      onClick: () => t(!1),
                      className: `rounded-md border border-gray-700/60 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-gray-800/60`,
                      children: `Close`,
                    }),
                    (0, Z.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => void w(),
                      disabled: !h[a],
                      className: `rounded-md border border-primary/30 bg-primary/20 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/30 disabled:opacity-40`,
                      children: [`Export `, a.toUpperCase()],
                    }),
                  ],
                }),
          }),
        ],
      }),
    });
  },
  u6 = ({ open: e, onOpenChange: t, initial: n, onSubmit: r }) => {
    let [i, a] = (0, X.useState)(n ?? _3(`Your text`));
    (0, X.useEffect)(() => {
      e && a(n ?? _3(`Your text`));
    }, [e, n]);
    let o = (e) => a((t) => ({ ...t, ...e })),
      s = `w-full rounded border border-gray-700/60 bg-card px-2 py-1 text-xs text-gray-200 outline-none focus:border-violet-500/60`;
    return (0, Z.jsx)(no, {
      open: e,
      onOpenChange: t,
      children: (0, Z.jsxs)($a, {
        className: `max-w-md`,
        children: [
          (0, Z.jsxs)(Za, {
            children: [
              (0, Z.jsx)(eo, { children: n ? `Edit text` : `Add text` }),
              (0, Z.jsx)(to, {
                children: `Text layers support the same transforms and keyframes as images.`,
              }),
            ],
          }),
          (0, Z.jsxs)(`label`, {
            className: `text-xs text-muted-foreground`,
            children: [
              `Content`,
              (0, Z.jsx)(`textarea`, {
                value: i.content,
                onChange: (e) => o({ content: e.target.value }),
                rows: 3,
                className: `${s} mt-1 resize-y`,
                autoFocus: !0,
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-2`,
            children: [
              (0, Z.jsxs)(`label`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `Font`,
                  (0, Z.jsx)(`select`, {
                    value: i.font_family,
                    onChange: (e) => o({ font_family: e.target.value }),
                    className: `${s} mt-1`,
                    children: nme.map((e) =>
                      (0, Z.jsx)(`option`, { value: e, children: e }, e),
                    ),
                  }),
                ],
              }),
              (0, Z.jsxs)(`label`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `Size (px)`,
                  (0, Z.jsx)(`input`, {
                    value: String(i.font_size_px),
                    onChange: (e) =>
                      o({
                        font_size_px: Math.max(
                          4,
                          parseFloat(e.target.value) || 96,
                        ),
                      }),
                    inputMode: `numeric`,
                    className: `${s} mt-1`,
                  }),
                ],
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-end gap-3`,
            children: [
              (0, Z.jsxs)(`label`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `Color`,
                  (0, Z.jsx)(`div`, {
                    className: `mt-1`,
                    children: (0, Z.jsx)(`input`, {
                      type: `color`,
                      value: i.color,
                      onChange: (e) => o({ color: e.target.value }),
                      className: `h-7 w-9 cursor-pointer rounded border border-gray-700/60 bg-transparent`,
                      "aria-label": `Text color`,
                    }),
                  }),
                ],
              }),
              (0, Z.jsxs)(`label`, {
                className: `flex items-center gap-1.5 pb-1 text-xs text-muted-foreground`,
                children: [
                  (0, Z.jsx)(`input`, {
                    type: `checkbox`,
                    checked: i.weight === `bold`,
                    onChange: (e) =>
                      o({ weight: e.target.checked ? `bold` : `normal` }),
                  }),
                  `Bold`,
                ],
              }),
              (0, Z.jsxs)(`label`, {
                className: `flex items-center gap-1.5 pb-1 text-xs text-muted-foreground`,
                children: [
                  (0, Z.jsx)(`input`, {
                    type: `checkbox`,
                    checked: i.italic,
                    onChange: (e) => o({ italic: e.target.checked }),
                  }),
                  `Italic`,
                ],
              }),
              (0, Z.jsxs)(`label`, {
                className: `ml-auto text-xs text-muted-foreground`,
                children: [
                  `Align`,
                  (0, Z.jsxs)(`select`, {
                    value: i.align,
                    onChange: (e) => o({ align: e.target.value }),
                    className: `${s} mt-1`,
                    children: [
                      (0, Z.jsx)(`option`, { value: `left`, children: `Left` }),
                      (0, Z.jsx)(`option`, {
                        value: `center`,
                        children: `Center`,
                      }),
                      (0, Z.jsx)(`option`, {
                        value: `right`,
                        children: `Right`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Z.jsxs)(Qa, {
            children: [
              (0, Z.jsx)(`button`, {
                type: `button`,
                onClick: () => t(!1),
                className: `rounded-md border border-gray-700/60 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-gray-800/60`,
                children: `Cancel`,
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                onClick: () => {
                  (r(i), t(!1));
                },
                disabled: !i.content.trim(),
                className: `rounded-md border border-primary/30 bg-primary/20 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/30 disabled:opacity-40`,
                children: n ? `Apply` : `Add text`,
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ome = { x: 1, y: 1, scale: 1, rotation: 1, opacity: 0 };
