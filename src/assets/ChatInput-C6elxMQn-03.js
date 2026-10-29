// ChatInput-C6elxMQn 03 — current
// Lines 658-947 of readable/assets/ChatInput-C6elxMQn.pretty.js (statement-aligned).
((I.BlurDirectionX = new m(1, 0)), (I.BlurDirectionY = new m(0, 1)));
var L = `Sandscape`,
  R = [`keksquad`, `pixypunk42`, `quantLlily`],
  z = (e) => [L, ...(e ?? R)],
  B = e(t()),
  V = n(),
  H = ({ users: e, onSelect: t, highlightedIndex: n }) =>
    (0, V.jsxs)(`div`, {
      className: `absolute bottom-full left-0 mb-1 w-auto min-w-[150px] max-w-xs max-h-36 overflow-y-auto bg-card border border-border rounded-lg shadow-lg z-10`,
      style: {
        scrollbarWidth: `thin`,
        scrollbarColor: `rgba(79, 70, 229, 0.3) transparent`,
      },
      children: [
        (0, V.jsx)(`style`, {
          children: `
        /* For WebKit browsers (Chrome, Safari) */
        .suggestion-popup::-webkit-scrollbar {
          width: 2px !important;
        }
        .suggestion-popup::-webkit-scrollbar-track {
          background: transparent !important;
        }
        .suggestion-popup::-webkit-scrollbar-thumb {
          background-color: rgba(79, 70, 229, 0.3) !important;
          border-radius: 20px !important;
        }
        .suggestion-popup::-webkit-scrollbar-thumb:hover {
          background-color: rgba(79, 70, 229, 0.6) !important;
        }
      `,
        }),
        (0, V.jsx)(`div`, {
          className: `suggestion-popup w-full h-full overflow-y-auto`,
          children: e.map((e, r) =>
            (0, V.jsx)(
              `div`,
              {
                className: `p-2 hover:bg-indigo-600 cursor-pointer text-sm ${r === n ? `bg-indigo-600` : ``}`,
                onClick: () => t(e),
                children:
                  e === `Sandscape`
                    ? (0, V.jsxs)(`span`, {
                        className: `text-primary font-bold flex items-center`,
                        children: [
                          `@`,
                          e,
                          ` `,
                          (0, V.jsx)(`span`, {
                            className: `text-xs ml-1`,
                            children: `🤖`,
                          }),
                        ],
                      })
                    : (0, V.jsxs)(V.Fragment, { children: [`@`, e] }),
              },
              e,
            ),
          ),
        }),
      ],
    });
function U(e) {
  let t = Math.floor(e / 60),
    n = Math.floor(e % 60);
  return `${t.toString().padStart(2, `0`)}:${n.toString().padStart(2, `0`)}`;
}
function W({ onRecordingComplete: e, onError: t } = {}) {
  let [n, r] = (0, B.useState)(!1),
    [i, a] = (0, B.useState)(0),
    [o, s] = (0, B.useState)(null),
    [c, l] = (0, B.useState)(null),
    u = (0, B.useRef)(null),
    d = (0, B.useRef)(null),
    f = (0, B.useRef)([]),
    p = (0, B.useRef)(null),
    m = (0, B.useRef)(0);
  return (
    (0, B.useEffect)(
      () => () => {
        (p.current && clearInterval(p.current),
          d.current && d.current.getTracks().forEach((e) => e.stop()));
      },
      [],
    ),
    {
      isRecording: n,
      duration: i,
      error: o,
      hasPermission: c,
      startRecording: (0, B.useCallback)(async () => {
        if ((s(null), (f.current = []), !window.isSecureContext)) {
          let e = `Microphone requires HTTPS or localhost`;
          (s(e), t?.(e));
          return;
        }
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          let e = `Your browser does not support audio recording`;
          (s(e), t?.(e), l(!1));
          return;
        }
        try {
          let e = await navigator.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: !0,
              noiseSuppression: !0,
              sampleRate: 44100,
            },
          });
          ((d.current = e), l(!0));
          let n = MediaRecorder.isTypeSupported(`audio/webm;codecs=opus`)
              ? `audio/webm;codecs=opus`
              : MediaRecorder.isTypeSupported(`audio/webm`)
                ? `audio/webm`
                : `audio/mp4`,
            i = new MediaRecorder(e, { mimeType: n });
          ((u.current = i),
            (i.ondataavailable = (e) => {
              e.data.size > 0 && f.current.push(e.data);
            }),
            (i.onerror = (e) => {
              let n = e.message || `Recording error occurred`;
              (s(n), t?.(n), r(!1));
            }),
            i.start(1e3),
            r(!0),
            (m.current = Date.now()),
            a(0),
            (p.current = window.setInterval(() => {
              let e = (Date.now() - m.current) / 1e3;
              a(e);
            }, 100)));
        } catch (e) {
          let n = `Failed to access microphone`;
          (e instanceof Error &&
            (e.name === `NotAllowedError` || e.name === `PermissionDeniedError`
              ? ((n = `Microphone permission denied`), l(!1))
              : (n =
                  e.name === `NotFoundError`
                    ? `No microphone found`
                    : e.message)),
            s(n),
            t?.(n));
        }
      }, [t]),
      stopRecording: (0, B.useCallback)(
        async () =>
          new Promise((t) => {
            p.current &&= (clearInterval(p.current), null);
            let n = u.current;
            if (!n || n.state === `inactive`) {
              (r(!1), t(null));
              return;
            }
            ((n.onstop = () => {
              d.current &&=
                (d.current.getTracks().forEach((e) => e.stop()), null);
              let i = new Blob(f.current, { type: n.mimeType });
              ((f.current = []), r(!1), e?.(i), t(i));
            }),
              n.stop());
          }),
        [e],
      ),
    }
  );
}
function G({
  onTranscriptionComplete: e,
  onTranscriptionStart: t,
  disabled: n = !1,
  className: i = ``,
}) {
  let [a, o] = (0, B.useState)(!1),
    [s, c] = (0, B.useState)(null),
    {
      isRecording: l,
      duration: d,
      error: f,
      hasPermission: p,
      startRecording: m,
      stopRecording: h,
    } = W({
      onRecordingComplete: (0, B.useCallback)(
        async (n) => {
          (o(!0), c(null), t?.());
          try {
            let t = await u.transcribe(n);
            t.success && t.text
              ? e?.(t.text)
              : c(t.error || `Transcription failed`);
          } catch (e) {
            let t = e instanceof Error ? e.message : `Transcription failed`;
            c(t);
          } finally {
            o(!1);
          }
        },
        [e, t],
      ),
      onError: (0, B.useCallback)((e) => {
        c(e);
      }, []),
    }),
    g = (0, B.useCallback)(async () => {
      (c(null), l ? await h() : a || (await m()));
    }, [l, a, h, m]),
    _ = n || p === !1,
    v = a;
  return (0, V.jsxs)(`div`, {
    className: r(`relative inline-flex items-center gap-1`, i),
    children: [
      (0, V.jsx)(`button`, {
        type: `button`,
        onClick: g,
        disabled: _ || v,
        className: r(
          `relative p-1.5 transition-colors duration-200`,
          `focus:outline-none`,
          l
            ? `text-red-500`
            : _ || v
              ? `text-gray-600 cursor-not-allowed`
              : `text-gray-400 hover:text-gray-200`,
        ),
        title:
          p === !1
            ? `Microphone permission denied`
            : l
              ? `Stop recording`
              : v
                ? `Transcribing...`
                : `Start voice input`,
        children: (0, V.jsx)(`svg`, {
          className: r(`w-5 h-5`, l && `animate-pulse`),
          fill: `none`,
          stroke: `currentColor`,
          viewBox: `0 0 24 24`,
          strokeWidth: 1.5,
          children: l
            ? (0, V.jsx)(`rect`, {
                x: `6`,
                y: `6`,
                width: `12`,
                height: `12`,
                rx: `2`,
                fill: `currentColor`,
              })
            : v
              ? (0, V.jsxs)(`g`, {
                  className: `animate-spin origin-center`,
                  children: [
                    (0, V.jsx)(`circle`, {
                      cx: `12`,
                      cy: `12`,
                      r: `10`,
                      strokeWidth: `2`,
                      stroke: `currentColor`,
                      opacity: `0.25`,
                      fill: `none`,
                    }),
                    (0, V.jsx)(`path`, {
                      d: `M12 2a10 10 0 0 1 10 10`,
                      strokeWidth: `2`,
                      stroke: `currentColor`,
                      strokeLinecap: `round`,
                      fill: `none`,
                    }),
                  ],
                })
              : (0, V.jsx)(`path`, {
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  d: `M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z`,
                }),
        }),
      }),
      l &&
        (0, V.jsx)(`span`, {
          className: `text-xs font-mono text-red-400 tabular-nums`,
          children: U(d),
        }),
    ],
  });
}
function K(e) {
  ((e.style.height = `44px`),
    e.scrollHeight > 44 &&
      (e.style.height = Math.min(e.scrollHeight, 120) + `px`));
}
