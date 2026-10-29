// Create-CEn7EAZs 219 — current
// Lines 74586-74727 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Vue({ sessionId: e, active: t, iframeRef: n }) {
  let [r, i] = (0, X.useState)(0),
    [a, o] = (0, X.useState)(0),
    s = (0, X.useRef)([]),
    c = (0, X.useRef)(0),
    l = (0, X.useRef)(null),
    u = (0, X.useRef)(null),
    d = (0, X.useRef)(!1),
    f = (0, X.useCallback)(() => Date.now() - c.current, []),
    p = (0, X.useCallback)(
      (e, t) => {
        d.current && s.current.push({ ts: f(), type: e, details: t });
      },
      [f],
    ),
    m = (0, X.useCallback)(async () => {
      if (s.current.length === 0) return;
      let t = [...s.current];
      s.current = [];
      try {
        let n = await _n(),
          r = await (
            await fetch(`${yn.API_BASE_URL}/api/testing/${e}/events`, {
              method: `POST`,
              headers: n,
              body: JSON.stringify({ events: t }),
            })
          ).json();
        r.success && i(r.total_events);
      } catch (e) {
        ((s.current = [...t, ...s.current]),
          console.error(`Failed to flush events:`, e));
      }
    }, [e]),
    h = (0, X.useCallback)(() => {
      if (!d.current) return;
      let e = n.current;
      e?.contentWindow &&
        e.contentWindow.postMessage(
          { type: `sandscape_screenshot` },
          new URL(yn.API_BASE_URL).origin,
        );
    }, [n]),
    g = (0, X.useCallback)(
      async (t, n) => {
        try {
          let r = await _n();
          (
            await (
              await fetch(`${yn.API_BASE_URL}/api/testing/${e}/screenshot`, {
                method: `POST`,
                headers: r,
                body: JSON.stringify({ image_data: t, timestamp_ms: n }),
              })
            ).json()
          ).success && o((e) => e + 1);
        } catch (e) {
          console.error(`Failed to upload screenshot:`, e);
        }
      },
      [e],
    ),
    _ = (0, X.useCallback)(() => {
      h();
    }, [h]);
  return (
    (0, X.useEffect)(() => {
      if (!t) return;
      ((d.current = !0),
        (c.current = Date.now()),
        (s.current = []),
        i(0),
        o(0));
      let e = (e) => {
          p(`window_error`, {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno,
          });
        },
        r = (e) => {
          p(`unhandled_rejection`, { reason: String(e.reason) });
        },
        a = console.error,
        _ = console.warn;
      ((console.error = (...e) => {
        (p(`console_error`, { message: e.map(String).join(` `) }),
          a.apply(console, e));
      }),
        (console.warn = (...e) => {
          (p(`console_warn`, { message: e.map(String).join(` `) }),
            _.apply(console, e));
        }));
      let v = (e) => {
        let t = new URL(yn.API_BASE_URL).origin;
        if (
          (e.origin !== t && e.origin !== window.location.origin) ||
          e.source !== n.current?.contentWindow
        )
          return;
        let r = e.data;
        if (!(!r || typeof r != `object`)) {
          if (r.type === `sandscape_capture`)
            p(
              r.event?.type || `iframe_event`,
              r.event?.details || r.event || {},
            );
          else if (r.type === `sandscape_screenshot_result`) {
            let e = f();
            g(r.data, e);
          }
        }
      };
      return (
        window.addEventListener(`error`, e),
        window.addEventListener(`unhandledrejection`, r),
        window.addEventListener(`message`, v),
        (l.current = setInterval(m, zue)),
        (u.current = setInterval(h, Bue)),
        () => {
          ((d.current = !1),
            window.removeEventListener(`error`, e),
            window.removeEventListener(`unhandledrejection`, r),
            window.removeEventListener(`message`, v),
            (console.error = a),
            (console.warn = _),
            (l.current &&= (clearInterval(l.current), null)),
            (u.current &&= (clearInterval(u.current), null)),
            m());
        }
      );
    }, [t, p, m, h, f, g]),
    {
      eventCount: r,
      screenshotCount: a,
      onSpeechSegment: _,
      requestScreenshot: h,
      flushEvents: m,
    }
  );
}
