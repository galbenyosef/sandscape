// Create-CEn7EAZs 218 — current
// Lines 74310-74585 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var n0 = new (class {
  async startTestingSession(e, t) {
    let n = await _n();
    return (
      await fetch(`${yn.API_BASE_URL}/api/testing/${e}/start`, {
        method: `POST`,
        headers: n,
        body: JSON.stringify({ game_url: t || null }),
      })
    ).json();
  }
  async stopTestingSession(e) {
    let t = await _n();
    return (
      await fetch(`${yn.API_BASE_URL}/api/testing/${e}/stop`, {
        method: `POST`,
        headers: t,
      })
    ).json();
  }
  async getTestingStatus(e) {
    let t = await _n();
    return (
      await fetch(`${yn.API_BASE_URL}/api/testing/${e}/status`, { headers: t })
    ).json();
  }
  async getTestingResults(e) {
    let t = await _n();
    return (
      await fetch(`${yn.API_BASE_URL}/api/testing/${e}/results`, { headers: t })
    ).json();
  }
  async uploadEvents(e, t) {
    let n = await _n();
    return (
      await fetch(`${yn.API_BASE_URL}/api/testing/${e}/events`, {
        method: `POST`,
        headers: n,
        body: JSON.stringify({ events: t }),
      })
    ).json();
  }
  async uploadScreenshot(e, t, n) {
    let r = await _n();
    return (
      await fetch(`${yn.API_BASE_URL}/api/testing/${e}/screenshot`, {
        method: `POST`,
        headers: r,
        body: JSON.stringify({ image_data: t, timestamp_ms: n }),
      })
    ).json();
  }
})();
function Lue() {
  return typeof navigator > `u` ||
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia
    ? typeof window < `u` &&
      (window.isSecureContext ||
        window.location.protocol === `https:` ||
        window.location.hostname === `localhost` ||
        window.location.hostname === `127.0.0.1`)
      ? {
          available: !1,
          reason: `Microphone API not available in this browser.`,
        }
      : {
          available: !1,
          reason: `Microphone requires HTTPS. Testing will capture events and screenshots only.`,
        }
    : { available: !0 };
}
function Rue({ sessionId: e, onSegmentFinalized: t }) {
  let n = Lue(),
    [r, i] = (0, X.useState)(n.available ? `idle` : `unavailable`),
    [a, o] = (0, X.useState)([]),
    [s, c] = (0, X.useState)(``),
    [l, u] = (0, X.useState)(0),
    [d, f] = (0, X.useState)(``),
    [p, m] = (0, X.useState)(n.reason || ``),
    h = (0, X.useRef)(null),
    g = (0, X.useRef)(null),
    _ = (0, X.useRef)(null),
    v = (0, X.useRef)(null),
    y = (0, X.useRef)(null),
    b = (0, X.useRef)(0),
    x = (0, X.useRef)(``),
    S = (0, X.useRef)(t);
  (0, X.useEffect)(() => {
    S.current = t;
  }, [t]);
  let C = a.map((e) => e.text).join(` `),
    w = r === `recording`,
    T = n.available,
    E = (0, X.useCallback)(async () => {
      if (!n.available)
        return (
          m(n.reason || `Microphone not available`),
          i(`unavailable`),
          !1
        );
      if (r !== `idle` && r !== `error` && r !== `unavailable`) return !1;
      (i(`connecting`), o([]), c(``), u(0), m(``));
      try {
        let t = await vn(),
          n = `${yn.WS_BASE_URL}/ws/transcribe/${e}?token=${t}`,
          r = new WebSocket(n);
        ((h.current = r),
          await new Promise((e, t) => {
            ((r.onopen = () => e()),
              (r.onerror = () => t(Error(`WebSocket connection failed`))),
              setTimeout(() => t(Error(`WebSocket connection timeout`)), 1e4));
          }),
          (r.onmessage = (e) => {
            try {
              let t = JSON.parse(e.data);
              switch (t.type) {
                case `transcription_started`:
                  (f(t.provider || ``), (x.current = t.provider || ``));
                  break;
                case `transcript_interim`:
                  c(t.text || ``);
                  break;
                case `transcript_final`:
                  if (t.segment) {
                    let e = t.segment;
                    (o((t) => [...t, e]), c(``), S.current?.(e));
                  }
                  break;
                case `transcription_stopped`:
                  break;
                case `transcription_error`:
                  console.error(`Transcription error:`, t.error);
                  break;
              }
            } catch (e) {
              console.error(`Error parsing transcription message:`, e);
            }
          }),
          (r.onclose = () => {
            i((e) => (e === `recording` ? `idle` : e));
          }),
          r.send(JSON.stringify({ type: `start_transcription` })));
        let a = await navigator.mediaDevices.getUserMedia({
          audio: {
            channelCount: 1,
            sampleRate: 16e3,
            echoCancellation: !0,
            noiseSuppression: !0,
          },
        });
        _.current = a;
        let s = new MediaRecorder(a, {
          mimeType: MediaRecorder.isTypeSupported(`audio/webm;codecs=opus`)
            ? `audio/webm;codecs=opus`
            : `audio/webm`,
        });
        return (
          (g.current = s),
          (s.ondataavailable = async (e) => {
            if (e.data.size > 0 && r.readyState === WebSocket.OPEN) {
              let t = await e.data.arrayBuffer();
              r.send(t);
            }
          }),
          s.start(250),
          (b.current = Date.now()),
          (v.current = setInterval(() => {
            u(Math.floor((Date.now() - b.current) / 1e3));
          }, 1e3)),
          setTimeout(() => {
            x.current === `chunked_whisper` &&
              g.current &&
              (y.current = setInterval(() => {
                let e = g.current,
                  t = h.current;
                !e ||
                  e.state === `inactive` ||
                  !t ||
                  t.readyState !== WebSocket.OPEN ||
                  (e.stop(),
                  (e.onstop = () => {
                    if (
                      (t.send(JSON.stringify({ type: `flush_chunk` })),
                      _.current && t.readyState === WebSocket.OPEN)
                    )
                      try {
                        e.start(250);
                      } catch {}
                  }));
              }, 8e3));
          }, 2e3),
          i(`recording`),
          !0
        );
      } catch (e) {
        let t = e instanceof Error ? e.message : String(e);
        return (
          console.error(`Failed to start recording:`, t),
          t.includes(`getUserMedia`) || t.includes(`mediaDevices`)
            ? m(
                `Microphone requires HTTPS. Testing will capture events and screenshots only.`,
              )
            : t.includes(`NotAllowedError`) || t.includes(`Permission`)
              ? m(
                  `Microphone permission denied. Testing will capture events and screenshots only.`,
                )
              : m(`Recording failed: ${t}`),
          i(`error`),
          O(),
          !1
        );
      }
    }, [e, r]),
    D = (0, X.useCallback)(async () => {
      if (r !== `recording` && r !== `error` && r !== `unavailable`) return;
      (i(`stopping`),
        g.current && g.current.state !== `inactive` && g.current.stop(),
        (_.current &&= (_.current.getTracks().forEach((e) => e.stop()), null)),
        (v.current &&= (clearInterval(v.current), null)),
        (y.current &&= (clearInterval(y.current), null)));
      let e = h.current;
      (e &&
        e.readyState === WebSocket.OPEN &&
        (e.send(JSON.stringify({ type: `stop_transcription` })),
        await new Promise((t) => {
          let n = e.onmessage,
            r = setTimeout(() => {
              ((e.onmessage = n), t());
            }, 3e3);
          e.onmessage = (i) => {
            n && n(i);
            try {
              JSON.parse(i.data).type === `transcription_stopped` &&
                (clearTimeout(r), (e.onmessage = n), t());
            } catch {}
          };
        }),
        e.close()),
        (h.current = null),
        (g.current = null),
        c(``),
        i(`idle`));
    }, [r]),
    O = (0, X.useCallback)(() => {
      (g.current && g.current.state !== `inactive` && g.current.stop(),
        (_.current &&= (_.current.getTracks().forEach((e) => e.stop()), null)),
        (h.current &&= (h.current.close(), null)),
        (v.current &&= (clearInterval(v.current), null)),
        (y.current &&= (clearInterval(y.current), null)),
        (g.current = null));
    }, []);
  return (
    (0, X.useEffect)(
      () => () => {
        O();
      },
      [O],
    ),
    {
      isRecording: w,
      micAvailable: T,
      status: r,
      segments: a,
      interimText: s,
      fullText: C,
      duration: l,
      provider: d,
      errorMessage: p,
      startRecording: E,
      stopRecording: D,
    }
  );
}
var zue = 5e3,
  Bue = 1e4;
