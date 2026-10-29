// Create-CEn7EAZs 310 — error
// Lines 109273-109597 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function ybe(e) {
  let {
    authLoading: t,
    canCreate: n,
    user: r,
    profileUsername: i,
    location: a,
    navigate: o,
    toast: s,
    setError: c,
    sessionInfo: l,
    setSessionInfo: u,
    setSessionDir: d,
    sessionInitialized: f,
    designTreeRef: p,
    stableWebSocketHandler: m,
    loadSessionData: h,
    setMessages: g,
    setIsTyping: _,
    setChatStatus: v,
    scrollChatToBottom: y,
    clearAllTasks: b,
  } = e;
  ((0, X.useEffect)(() => {
    if (f.current) return;
    let e = bn(a.pathname),
      l = new URLSearchParams(window.location.search).has(`session`);
    (!e && !l && (t || (r && !n))) ||
      ((f.current = !0),
      (async () => {
        try {
          let t = new URLSearchParams(window.location.search),
            n = e ? null : t.get(`session`),
            c = a.state?.initialPrompt;
          a.state && o(a.pathname + a.search, { replace: !0, state: {} });
          let l;
          if (n) {
            let e = (n.includes(`/`) && n.split(`/`).pop()) || n;
            try {
              let t = await _n(),
                n = await (
                  await fetch(`${yn.API_BASE_URL}/api/sessions/${e}`, {
                    headers: t,
                  })
                ).json();
              n.success &&
                n.session_dir &&
                (l = {
                  success: !0,
                  session_id: n.session_id || e,
                  session_dir: n.session_dir,
                  created_at: n.created_at || new Date().toISOString(),
                });
            } catch (e) {
              console.warn(
                `Failed to fetch session info, falling back to convention:`,
                e,
              );
            }
            l ||= {
              success: !0,
              session_id: e,
              session_dir: n.includes(`/`) ? n : `sessions/${n}`,
              created_at: new Date().toISOString(),
            };
          } else l = await gr.createSession(void 0, $r());
          if (l && l.success !== !0 && l.status === 403) {
            (s({
              title: `The alpha is open`,
              description: `Choose a plan to start creating.`,
            }),
              o(Wr, { replace: !0 }));
            return;
          }
          if (l.success) {
            (u(l),
              d(l.session_dir),
              v(`Connected`),
              await gr.connectWebSocket(l.session_id, m));
            let e = await gr.getChatHistory(l.session_dir);
            if (
              (e.success &&
                Array.isArray(e.history) &&
                (g((t) => S4(t, e.history)), y(100)),
              await h(l.session_dir),
              c)
            ) {
              setTimeout(() => {
                p.current &&
                  p.current.updateDesignData({
                    prompt: c,
                    title: `New Game Project`,
                    targetPlatform: `Web Browser`,
                  });
              }, 200);
              let e = {
                id: YV(),
                userId: r?.id ?? `unknown`,
                userName:
                  i ??
                  r?.user_metadata?.username ??
                  r?.email?.split(`@`)[0] ??
                  `You`,
                text: c,
                timestamp: new Date().toISOString(),
                isAI: !1,
              };
              (g((t) => [...t, e]), _(!0), v(`AI is thinking...`));
              let t = {
                id: `loading-${Date.now()}`,
                userId: `ai-assistant`,
                userName: pe,
                text: `Thinking...`,
                timestamp: new Date().toISOString(),
                isAI: !0,
                isLoading: !0,
              };
              g((e) => [...e, t]);
              try {
                await gr.waitForConnection(5e3);
              } catch {}
              try {
                await gr.sendMessage(l.session_id, c);
              } catch (e) {
                (console.error(`Failed to send initial prompt:`, e),
                  g((e) => e.filter((e) => !e.isLoading)),
                  _(!1),
                  v(`Ready`));
              }
            }
          }
        } catch (e) {
          (console.error(`Failed to initialize session:`, e),
            v(`Connection failed`),
            c({
              code: `NETWORK_CONNECTION_FAILED`,
              category: `network`,
              message: `Failed to connect to the game creation service`,
              recoverable: !0,
              timestamp: new Date().toISOString(),
            }));
        }
      })());
  }, [t, n, r?.id]),
    (0, X.useEffect)(
      () => () => {
        (gr.disconnectWebSocket(), b(), oc.clear());
      },
      [],
    ),
    (0, X.useEffect)(() => {
      l?.session_id && gr.connectWebSocket(l.session_id, m);
    }, [l?.session_id, m]),
    (0, X.useEffect)(() => {
      if (bn(a.pathname)) return;
      let e = l?.session_id;
      if (!e) return;
      let t = new URLSearchParams(a.search);
      t.get(`session`) !== e &&
        (t.set(`session`, e),
        o(`${a.pathname}?${t.toString()}`, { replace: !0 }));
    }, [l?.session_id, a.pathname, a.search, o]));
}
function bbe(e) {
  let {
      sessionDir: t,
      designTreeRef: n,
      activeWorkflowsRef: r,
      clearRing: i,
      failTask: a,
      setGeneratingAssetNames: o,
      setMessages: s,
      removeLoadingMessages: c,
      isInquiryThinking: l,
      setIsTyping: u,
      setChatStatus: d,
      setInquiryActive: f,
      resetPresence: p,
      setError: m,
      setDegradedMode: h,
      isDegradedMode: g,
      degradedModeInfo: _,
      toast: v,
      reconcileLiveRuns: y,
      loadSessionData: b,
    } = e,
    x = (0, X.useRef)(!1),
    S = (0, X.useRef)(t);
  S.current = t;
  let C = (0, X.useRef)(y);
  C.current = y;
  let w = (0, X.useRef)(b);
  ((w.current = b),
    (0, X.useEffect)(
      () => (
        (gr.onTaskFailed = (e) => {
          m({
            code: e.error.code,
            category: e.error.category,
            message: e.error.message,
            step_id: e.error.step_id,
            recoverable: e.error.recoverable,
            timestamp: e.error.timestamp,
            request_id: e.error.request_id,
          });
        }),
        (gr.onWorkflowFailed = (e) => {
          let t = S.current;
          (t && w.current(t),
            m({
              code: e.error.code,
              category: e.error.category,
              message: e.error.message,
              step_id: e.error.step_id,
              recoverable: e.error.recoverable,
              timestamp: e.error.timestamp,
              request_id: e.error.request_id,
            }));
          let s = Q9(`workflow_failed`, e);
          s?.kind === `close` && a(s.taskId, s.message);
          let c = null;
          if (e.task_id) {
            let t = r.current.get(e.task_id);
            if (t && n.current)
              ((c = t.nodeId),
                n.current.setNodeState(t.nodeId, t.previousState),
                i(t.nodeId),
                r.current.delete(e.task_id));
            else if (n.current && e.workflow_name) {
              let t = mt(
                e.workflow_name,
                e.workflow_display_name || e.workflow_name,
              );
              t.nodeId &&
                ((c = t.nodeId),
                n.current.setNodeState(t.nodeId, `available`),
                i(t.nodeId));
            }
          }
          if (c && n.current && (e.resumable || Tn(c) || dc(e.result))) {
            let t = e.result ?? {};
            n.current.setCodingResult?.(
              c,
              hc(
                c,
                {
                  ...t,
                  action_id: e.workflow_name,
                  resumable: e.resumable ?? t.resumable,
                  error: t.error ?? t.message ?? t.summary ?? e.error?.message,
                  success: !1,
                },
                !1,
              ),
            );
          }
          (o(new Set()), (l.current = !1), u(!1), d(`Ready`), oc.clear());
        }),
        (gr.onWorkflowStepFailed = (e) => {
          m({
            code: e.error.code,
            category: e.error.category,
            message: e.error.message,
            step_id: e.step_id,
            recoverable: e.error.recoverable,
            timestamp: e.error.timestamp,
            request_id: e.error.request_id,
          });
        }),
        (gr.onConnectionStateChange = (e) => {
          switch (e) {
            case `connected`:
              (g && _?.reason.includes(`WebSocket`) && h(!1),
                u(!1),
                c(),
                d(`Ready`),
                x.current &&
                  S.current &&
                  ((x.current = !1),
                  gr
                    .getChatHistory(S.current)
                    .then((e) => {
                      e.success &&
                        Array.isArray(e.history) &&
                        s((t) => S4(t, e.history));
                    })
                    .catch(() => {}),
                  C.current()));
              break;
            case `disconnected`:
              (console.warn(`[Create] WebSocket disconnected`),
                (x.current = !0),
                f(!1),
                p());
              break;
            case `reconnecting`:
              h(!0, `WebSocket connection lost - reconnecting...`, [
                `Real-time updates`,
                `Live task progress`,
              ]);
              break;
            case `failed`:
              (h(!0, `WebSocket connection failed - using HTTP fallback`, [
                `Real-time updates`,
                `Live task progress`,
                `Instant notifications`,
              ]),
                v({
                  variant: `destructive`,
                  title: `Connection Issue`,
                  description: `Live updates unavailable. Messages will still be sent via HTTP.`,
                }));
              break;
          }
        }),
        () => {
          ((gr.onTaskFailed = null),
            (gr.onWorkflowFailed = null),
            (gr.onWorkflowStepFailed = null),
            (gr.onConnectionStateChange = null));
        }
      ),
      [m, h, a, g, _, v],
    ));
}
