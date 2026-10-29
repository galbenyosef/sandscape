// Create-CEn7EAZs 150 — current
// Lines 50133-50424 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function UV(e) {
  let [t, n] = (0, X.useState)(`idle`),
    [r, i] = (0, X.useState)(null),
    [a, o] = (0, X.useState)(`user`),
    [s, c] = (0, X.useState)(3),
    [l, u] = (0, X.useState)(0),
    [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(null),
    [h, g] = (0, X.useState)([]),
    [_, v] = (0, X.useState)(``),
    [y, b] = (0, X.useState)(null),
    [x, S] = (0, X.useState)(1),
    C = (0, X.useRef)(Promise.resolve()),
    w = (0, X.useRef)(null),
    T = (0, X.useRef)(null),
    E = (0, X.useRef)(0),
    D = (0, X.useRef)(),
    O = (0, X.useRef)(null),
    k = (0, X.useRef)(!1),
    A = (0, X.useRef)(e);
  A.current = e;
  let j = (0, X.useCallback)(() => {
      (w.current?.getTracks().forEach((e) => e.stop()), (w.current = null));
      let e = O.current;
      ((O.current = null),
        e && e.release().catch(() => void 0),
        k.current && (i(null), f(!1), b(null)));
    }, []),
    M = (0, X.useCallback)(() => {
      (clearInterval(D.current),
        T.current && T.current.state !== `inactive`
          ? (k.current && n(`stopping`), T.current.stop())
          : (E.current++, j(), k.current && n(`idle`)));
    }, [j]),
    N = (0, X.useCallback)(async () => {
      try {
        if (!navigator.wakeLock || document.visibilityState !== `visible`)
          return;
        let e = await navigator.wakeLock.request(`screen`);
        if (!k.current || T.current?.state !== `recording`) {
          await e.release();
          return;
        }
        ((O.current = e),
          f(!0),
          e.addEventListener(`release`, () => {
            k.current && f(!1);
          }));
      } catch {
        k.current && f(!1);
      }
    }, []),
    P = (0, X.useCallback)(
      async (e = `user`, t) => {
        if (T.current?.state === `recording`) return;
        let r = ++E.current;
        (j(), m(null), n(`opening`));
        try {
          if (
            !navigator.mediaDevices?.getUserMedia ||
            typeof MediaRecorder > `u`
          )
            throw Error(
              `Camera recording needs a supported browser on HTTPS. You can upload a video instead.`,
            );
          let a = await navigator.mediaDevices.getUserMedia({
            audio: !1,
            video: {
              ...(t
                ? { deviceId: { exact: t } }
                : { facingMode: { ideal: e } }),
              width: { ideal: 1280 },
              height: { ideal: 720 },
              frameRate: { ideal: 30, max: 30 },
            },
          });
          if (!k.current || r !== E.current) {
            a.getTracks().forEach((e) => e.stop());
            return;
          }
          ((w.current = a), i(a));
          let s = a.getVideoTracks()[0],
            c = s.getSettings(),
            l = c.facingMode;
          (o(l === `user` || l === `environment` ? l : e),
            v(c.deviceId || t || ``));
          let u = s.getCapabilities?.()?.zoom;
          (b(u && u.max > u.min ? { ...u, step: u.step || 0.1 } : null),
            S(c.zoom ?? u?.min ?? 1),
            n(`ready`),
            navigator.mediaDevices
              .enumerateDevices()
              .then((e) => {
                k.current &&
                  r === E.current &&
                  g(e.filter((e) => e.kind === `videoinput`));
              })
              .catch(() => {}),
            a.getVideoTracks().forEach((e) =>
              e.addEventListener(`ended`, () => {
                k.current &&
                  (m(
                    `The camera disconnected. Your recorded take has been kept.`,
                  ),
                  M());
              }),
            ));
        } catch (e) {
          if (!k.current || r !== E.current) return;
          (n(`idle`),
            m(
              e instanceof DOMException && e.name === `NotAllowedError`
                ? `Camera access was denied. Allow camera access in your browser settings, or upload a video.`
                : e instanceof Error
                  ? e.message
                  : `Could not open the camera`,
            ));
        }
      },
      [j, M],
    ),
    F = (0, X.useCallback)(
      (e) => {
        let t = w.current?.getVideoTracks()[0];
        if (!t || !y) return;
        let n = E.current,
          r = Math.max(
            y.min,
            Math.min(y.max, y.min + Math.round((e - y.min) / y.step) * y.step),
          );
        (S(r),
          (C.current = C.current.then(async () => {
            if (!(!k.current || n !== E.current || t.readyState !== `live`))
              try {
                await t.applyConstraints({ advanced: [{ zoom: r }] });
              } catch {
                k.current &&
                  n === E.current &&
                  (S(t.getSettings().zoom ?? y.min),
                  m(`This camera could not change zoom. Try another lens.`));
              }
          })));
      },
      [y],
    ),
    I = (0, X.useCallback)(() => {
      if (!w.current || T.current?.state === `recording`) return;
      (m(null), c(3), n(`countdown`));
      let e = 3;
      (clearInterval(D.current),
        (D.current = setInterval(() => {
          if ((e--, e > 0)) {
            c(e);
            return;
          }
          if ((clearInterval(D.current), w.current))
            try {
              let e = [`video/mp4`, `video/webm;codecs=vp8`, `video/webm`].find(
                  (e) => MediaRecorder.isTypeSupported(e),
                ),
                t = new MediaRecorder(w.current, {
                  ...(e ? { mimeType: e } : {}),
                  videoBitsPerSecond: 3e6,
                });
              T.current = t;
              let r = [],
                i = 0,
                a = performance.now();
              ((t.ondataavailable = (e) => {
                (e.data.size && (r.push(e.data), (i += e.data.size)),
                  i >= 95 * 1024 * 1024 && t.state === `recording` && M());
              }),
                (t.onerror = () => {
                  (k.current &&
                    m(
                      `Recording was interrupted. Review the take before using it.`,
                    ),
                    M());
                }),
                (t.onstop = () => {
                  (clearInterval(D.current), (T.current = null));
                  let e = (performance.now() - a) / 1e3;
                  if ((j(), !k.current)) return;
                  n(`idle`);
                  let i = t.mimeType || r[0]?.type || `video/webm`,
                    o = new File(
                      r,
                      `performance.${i.includes(`mp4`) ? `mp4` : `webm`}`,
                      { type: i },
                    );
                  o.size && e >= 0.2
                    ? A.current({ file: o, duration: e })
                    : m(`The take was too short. Record a little more motion.`);
                }),
                t.start(1e3),
                u(0),
                n(`recording`),
                N(),
                (D.current = setInterval(() => {
                  let e = (performance.now() - a) / 1e3;
                  (u(e), e >= 120 && M());
                }, 200)));
            } catch (e) {
              (j(),
                n(`idle`),
                m(
                  e instanceof Error ? e.message : `Could not start recording`,
                ));
            }
        }, 1e3)));
    }, [N, j, M]);
  return (
    (0, X.useEffect)(() => {
      k.current = !0;
      let e = () => {
        document.visibilityState === `hidden` && M();
      };
      return (
        document.addEventListener(`visibilitychange`, e),
        window.addEventListener(`pagehide`, M),
        () => {
          ((k.current = !1),
            E.current++,
            clearInterval(D.current),
            (T.current &&=
              ((T.current.onstop = null),
              (T.current.onerror = null),
              (T.current.ondataavailable = null),
              T.current.state !== `inactive` && T.current.stop(),
              null)),
            j(),
            document.removeEventListener(`visibilitychange`, e),
            window.removeEventListener(`pagehide`, M));
        }
      );
    }, [j, M]),
    {
      phase: t,
      stream: r,
      facing: a,
      devices: h,
      deviceId: _,
      zoomRange: y,
      zoom: x,
      changeZoom: F,
      countdown: s,
      elapsed: l,
      awake: d,
      error: p,
      open: P,
      record: I,
      stop: M,
    }
  );
}
function WV(e, t, n, r = n) {
  let i = Math.max(0, Math.min(n, r)),
    a = Math.min(0.1, i);
  if (e[0] !== t[0]) {
    let r = Math.max(a, Math.min(n, t[1]));
    return [Math.max(0, r - i, Math.min(e[0], r - a)), r];
  }
  let o = Math.max(0, Math.min(t[0], n - a));
  return [o, Math.max(o + a, Math.min(n, o + i, e[1]))];
}
var GV = (e) => `${Math.floor(e / 60)}:${(e % 60).toFixed(1).padStart(4, `0`)}`;
function KV({
  ariaLabel: e,
  value: t,
  min: n,
  max: r,
  disabled: i,
  onCommit: a,
}) {
  let [o, s] = (0, X.useState)(null);
  return (0, Z.jsx)(`input`, {
    type: `number`,
    inputMode: `decimal`,
    "aria-label": e,
    min: n,
    max: r,
    step: 0.01,
    value: o ?? Number(t.toFixed(2)),
    disabled: i,
    onChange: (e) => {
      s(e.currentTarget.value);
      let t = e.currentTarget.valueAsNumber;
      Number.isFinite(t) && a(t);
    },
    onBlur: () => s(null),
  });
}
