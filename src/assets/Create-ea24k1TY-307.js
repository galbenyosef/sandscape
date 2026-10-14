// Create-ea24k1TY 307 — current
// Lines 108137-108464 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Bye(e) {
  let {
      sessionDir: t,
      user: n,
      designTreeRef: r,
      activeWorkflowsRef: i,
      pendingWorkflowContextRef: a,
      ringThrottleRef: o,
      clearRing: s,
      addOngoingTask: c,
      completeTask: l,
      setAssets: u,
      setGeneratingAssetNames: d,
      loadSessionData: f,
      bumpSceneReloadNonce: p,
      setMessages: m,
      setIsTyping: h,
      setChatStatus: g,
      isInquiryThinking: _,
      removeLoadingMessages: v,
      handleChatResponse: y,
      scrollChatToBottom: b,
      setInquiryActive: x,
      setInquiryTotal: S,
      setInquiryCurrentIndex: C,
      leftPanelRef: w,
      applyPresenceUpdate: T,
      applyLockUpdate: E,
      setTestingAnalysisReady: D,
      onFlowNodeStarted: O,
      onFlowNodeCompleted: k,
      setError: A,
      toast: j,
    } = e,
    M = (0, X.useCallback)((e) => {
      let t = e.asset_name;
      t && d((e) => new Set(e).add(t));
    }, []),
    N = (0, X.useCallback)((e) => {
      let t = e.asset_update,
        n = t?.asset_name || e.asset_name;
      if (
        (n &&
          d((e) => {
            let t = new Set(e);
            return (t.delete(n), t);
          }),
        t?.asset_name)
      ) {
        let e = {};
        for (let n of tye) t[n] && (e[n] = t[n]);
        Object.keys(e).length > 0 &&
          u((n) =>
            n.map((n) => (n.asset_name === t.asset_name ? { ...n, ...e } : n)),
          );
      }
    }, []),
    P = (0, X.useCallback)(
      (e) => {
        let t = Q9(`workflow_started`, e);
        if (t?.kind !== `open`) return;
        let n = t.taskId,
          o = e.workflow_name || ``,
          s = e.workflow_display_name || o;
        c(n, {
          title: t.title,
          description: `Working in background...`,
          type: `workflow`,
        });
        let l = pt(o, s);
        if (l.nodeId) {
          let t = Lye(a.current, l.nodeId, r.current?.getNodeState(l.nodeId));
          (i.current.set(n, { nodeId: l.nodeId, previousState: t }),
            O(l.nodeId, e),
            r.current?.setNodeState(l.nodeId, `in-progress`),
            r.current?.setNodeActiveWorkflow?.(l.nodeId, o),
            zn(l.nodeId) && r.current?.startCodingRun?.(l.nodeId, n));
        }
        g(Mt(o));
      },
      [c, O],
    ),
    F = (0, X.useCallback)(
      (e) => {
        let n = e.task_id,
          a = e.workflow_name || e.name,
          o = e.workflow_display_name || a,
          c = e.result || {},
          u = Q9(`workflow_complete`, e);
        if (
          (u?.kind === `close` && l(u.taskId, u.message),
          d(new Set()),
          a &&
            $ve.has(a) &&
            t &&
            Wn(`first_playable`, t.split(`/`).pop() || t, {
              workflow_variant: a,
              creation_surface: `game_creator`,
            }),
          n)
        ) {
          let e = i.current.get(n);
          (e && s(e.nodeId), i.current.delete(n));
        }
        if (r.current && a) {
          let t = Ct(a, o, c, e.needs_validation, e.validation_prompt);
          if (t.completedNode) {
            let n = t.completedNode.nodeId,
              i =
                zn(n) || Cc(c)
                  ? jc(
                      n,
                      { ...(c && typeof c == `object` ? c : {}), action_id: a },
                      !0,
                    )
                  : null,
              o = i && !i.success ? `available` : t.completedNode.state;
            (r.current.setNodeState(n, o),
              s(n),
              r.current.setNodeActiveWorkflow?.(n, null),
              i && r.current.setCodingResult?.(n, i),
              k(n, e));
          }
          t.designData &&
            r.current.updateDesignData(t.designData.gameDesignData);
        }
        ((_.current = !1), h(!1), g(`Ready`), fc.clear(), t && f(t), p(), qt());
      },
      [l, t, f, p, k],
    ),
    I = (0, X.useCallback)((e) => {
      if (!r.current || e.status === `error`) return;
      let t = e.node_id || null;
      if (
        (!t && e.task_id && (t = i.current.get(e.task_id)?.nodeId || null),
        !t && e.workflow_name && (t = nee(e.workflow_name)),
        !t && e.generation_type && (t = Ln(e.generation_type)),
        !t)
      )
        return;
      let n = typeof e.fraction == `number` ? e.fraction : void 0;
      (n === void 0 &&
        typeof e.step == `number` &&
        typeof e.total_steps == `number` &&
        e.total_steps > 0 &&
        (n = e.step / e.total_steps),
        e.status === `done` && n === void 0 && (n = 1));
      let a = e.status === `done` || (typeof n == `number` && n >= 1),
        s = Date.now();
      (!a && s - (o.current.get(t) || 0) < 125) ||
        (o.current.set(t, s),
        r.current.setNodeProgress?.(t, {
          taskId: e.task_id,
          fraction: n,
          step: typeof e.step == `number` ? e.step : void 0,
          totalSteps: typeof e.total_steps == `number` ? e.total_steps : void 0,
          phase: e.phase,
          updatedAt: s,
        }));
    }, []),
    L = (0, X.useCallback)(
      (e) => {
        if ((eye.has(e.type) && oee(), e.type !== `connection_test`)) {
          if (e.type === `message`) y(e.data || e);
          else if (e.type === `workflow_started`) {
            let t = e.data || e;
            Z9(t) ? ((_.current = !0), h(!0), g(`AI is thinking...`)) : P(t);
          } else if (e.type === `workflow_complete`) F(e.data || e);
          else if (e.type === `task_progress`) I(e.data || e);
          else if (e.type === `coding_activity`) {
            let t = gc(e.data || e);
            t && r.current?.appendCodingActivity?.(t);
          } else if (e.type === `task_started`) M(e.data || e);
          else if (e.type === `task_completed`) N(e.data || e);
          else if (e.type === `execution_state`)
            fc.handleExecutionState(e.data || e);
          else if (e.type === `tool_call_start`)
            fc.handleToolStart(e.data || e);
          else if (e.type === `tool_call_end`) fc.handleToolEnd(e.data || e);
          else if (e.type === `telemetry_update`)
            fc.handleTelemetryUpdate(e.data || e);
          else if (e.type === `balance_update`) qt();
          else if (e.type === `asset_updated`) {
            if (e.asset) {
              let t = { type: `asset_updated`, asset: e.asset };
              (u((e) => wf(e, t)),
                $9(r, t),
                e.asset.asset_type === `scene` && p(!1));
            }
          } else if (e.type === `asset_added`) {
            if (e.asset) {
              let t = { type: `asset_added`, asset: e.asset };
              (u((e) => wf(e, t)),
                $9(r, t),
                e.asset.asset_type === `scene` && p(!1));
            }
          } else if (e.type === `asset_removed`) {
            if (e.asset_id) {
              kye(e.asset_id);
              let t = { type: `asset_removed`, asset_id: e.asset_id };
              (u((e) => wf(e, t)), $9(r, t), p(!1));
            }
          } else if (e.type !== `asset_generation_started`) {
            if (e.type === `asset_generation_completed`) {
              t && f(t);
              let n = e.data?.generation_type || e.generation_type;
              if (r.current && n) {
                let e = Ln(n);
                e && (r.current.setNodeState(e, `complete`), s(e));
              }
            } else if (e.type === `asset_generation_failed`) {
              let t = e.data?.generation_type ?? e.generation_type;
              if (
                (A({
                  code: `ASSET_GENERATION_FAILED`,
                  category: `asset`,
                  message:
                    e.data?.error ?? e.error ?? `Asset generation failed`,
                  step_id: t,
                  recoverable: !0,
                  timestamp: new Date().toISOString(),
                }),
                r.current && t)
              ) {
                let e = Ln(t);
                e && s(e);
              }
            } else if (e.type === `asset_version_published`) (t && f(t), p());
            else if (e.type === `inquiry_question`) {
              let t = e.data || e,
                n = t.question,
                r = t.current_index ?? 0,
                i = t.total ?? 1;
              (v(),
                (_.current = !1),
                h(!1),
                x(!0),
                S(i),
                C(r),
                w.current?.isCollapsed() && w.current.expand());
              let a = {
                id: `inquiry-q-${r}-${Date.now()}`,
                userId: `ai-assistant`,
                userName: fe,
                text: ``,
                timestamp: new Date().toISOString(),
                isAI: !0,
                inquiryQuestion: n,
                inquiryIndex: r,
                inquiryTotal: i,
              };
              (m((e) => [
                ...e.filter(
                  (e) =>
                    !(
                      e.inquiryQuestion &&
                      e.inquiryIndex === r &&
                      e.inquiryQuestion.question === n?.question
                    ),
                ),
                a,
              ]),
                b(50));
            } else if (e.type === `inquiry_complete`)
              (x(!1), S(0), C(0), h(!0), g(`Starting workflow...`));
            else if (e.type !== `testing_session_started`) {
              if (e.type === `testing_session_stopped`)
                j({
                  title: `Testing session stopped`,
                  description: `Analyzing gameplay data...`,
                });
              else if (e.type === `testing_analysis_started`)
                j({
                  title: `Analysis started`,
                  description: `Processing transcript, events, and screenshots...`,
                });
              else if (e.type === `testing_analysis_complete`)
                e.data?.success
                  ? (D(!0),
                    j({
                      title: `Analysis complete`,
                      description: `Testing results are ready to view.`,
                    }))
                  : j({
                      title: `Analysis failed`,
                      description: e.data?.error || `Unknown error`,
                    });
              else if (e.type === `user_chat`) {
                let t = e.data || e;
                if (t.user_id === n?.id) return;
                let r = {
                  id: NV(),
                  userId: t.user_id,
                  userName: t.username || `Unknown`,
                  avatarUrl: t.avatar_url || null,
                  text: t.message,
                  timestamp: t.timestamp || new Date().toISOString(),
                  isAI: !1,
                };
                (m((e) => [...e, r]), b(50));
              } else if (e.type === `node_unlocked`) {
                let t = e.data || e;
                t.node_id && r.current?.unlockNode(t.node_id);
              } else if (e.type === `presence_update`) {
                let t = e.data?.users || [];
                T(t);
              } else if (e.type === `workflow_lock_update`) {
                let t = e.data?.locks || [];
                E(t);
              }
            }
          }
        }
      },
      [y, P, F, I, M, N, t, f, v, j, n],
    ),
    R = (0, X.useRef)(L);
  return (
    (0, X.useEffect)(() => {
      R.current = L;
    }, [L]),
    {
      stableWebSocketHandler: (0, X.useCallback)((e) => {
        R.current(e);
      }, []),
    }
  );
}
