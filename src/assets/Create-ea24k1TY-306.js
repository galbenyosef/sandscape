// Create-ea24k1TY 306 — current
// Lines 107913-108136 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Rye(e) {
  let {
      sessionInfo: t,
      designTreeRef: n,
      pendingWorkflowContextRef: r,
      toast: i,
      setError: a,
      setChatStatus: o,
      handleSendMessage: s,
    } = e,
    c = (e) => {
      switch (e.error_code) {
        case `PREREQUISITE_NOT_MET`: {
          let t = e.prerequisites ?? [],
            n = t.filter((e) => e.state === `running`).map((e) => e.label),
            r = t.filter((e) => e.state !== `running`).map((e) => e.label),
            a = [];
          return (
            r.length > 0 && a.push(`run ${r.join(`, `)} first`),
            n.length > 0 &&
              a.push(
                `${n.join(`, `)} ${n.length > 1 ? `are` : `is`} still running — try again when it finishes`,
              ),
            i({
              title: `Not ready yet`,
              description:
                a.length > 0
                  ? `This step needs earlier work: ${a.join(`; `)}.`
                  : e.error || `This step needs earlier steps to finish first.`,
            }),
            !0
          );
        }
        case `INSUFFICIENT_BALANCE`:
          return (
            dn(
              i,
              `You need ${e.required_balance} Sandcoins but have ${e.current_balance}.`,
            ),
            !0
          );
        case `ACTION_ALREADY_IN_FLIGHT`:
          return (
            i({
              title: `Already running`,
              description: e.error || `This action is already in progress.`,
            }),
            !1
          );
        case `WORKFLOW_LOCKED`:
          return (
            i({
              title: `In use`,
              description: e.locked_by
                ? `${e.locked_by} is already running this. Try again when they finish.`
                : e.error || `Someone else is already running this.`,
            }),
            !1
          );
        case `CODING_ACCESS_REQUIRED`:
          return (
            i({
              title: `Coding access required`,
              description:
                e.error ||
                `Coding through Sandscape isn’t enabled on your account yet. Use your own coding agent via the CLI, or request access.`,
            }),
            !0
          );
        case `ACTION_COUNT_UNAVAILABLE`:
          return (
            i({
              title: `Nothing to do yet`,
              description: e.axis
                ? `This step needs ${e.axis}s before it can run.`
                : e.error || `This step has nothing to work on yet.`,
            }),
            !0
          );
        case `ACTION_PARAMS_INVALID`:
          return (
            console.error(
              `[Create] ACTION_PARAMS_INVALID for '${e.action_id}':`,
              e.violations,
            ),
            a({
              code: `WORKFLOW_STEP_FAILED`,
              category: `validation`,
              message: `This button sent something the server did not recognise. Please report this.`,
              recoverable: !0,
              timestamp: new Date().toISOString(),
            }),
            !0
          );
        default:
          return (
            a({
              code: `WORKFLOW_STEP_FAILED`,
              category: `internal`,
              message: e.error || `Failed to start`,
              recoverable: !0,
              timestamp: new Date().toISOString(),
            }),
            !0
          );
      }
    };
  return {
    handleExecuteWorkflow: async (e, l, u) => {
      if ((u?.chatOnly || Dr(`tour:generate-clicked`, e), u?.chatOnly)) {
        (n.current?.setNodeState(e, `available`), l && s(l));
        return;
      }
      let d = t?.session_id;
      if (!d) {
        (n.current?.setNodeState(e, `available`),
          i({
            title: `Error`,
            description: `No active session`,
            variant: `destructive`,
          }));
        return;
      }
      if (!(await Pn())) {
        (n.current?.setNodeState(e, `available`),
          i({
            title: `Actions unavailable`,
            description: `Could not reach the server to look up what this step runs. Check your connection and try again.`,
            variant: `destructive`,
          }));
        return;
      }
      let f;
      if (u?.actionId) {
        let t = Bn(u.actionId);
        if (!t) {
          (console.error(
            `[Create] '${e}' asked for action '${u.actionId}', which the server does not publish. Frontend and backend disagree about the catalog.`,
          ),
            n.current?.setNodeState(e, `available`),
            i({
              title: `Step unavailable`,
              description: `This step is not available on the server. Reload the page and try again.`,
              variant: `destructive`,
            }));
          return;
        }
        f = t.id;
      } else f = In(e)?.id ?? null;
      let p = f;
      if (!p) {
        (n.current?.setNodeState(e, `available`), l && s(l));
        return;
      }
      let m = pt(p, p),
        h = !1;
      (n.current &&
        m.nodeId &&
        ((h = Fye(r.current, m.nodeId, n.current.getNodeState(m.nodeId))),
        n.current.setNodeState(m.nodeId, `in-progress`)),
        o(Mt(p)));
      let g = () => {
        let t = m.nodeId;
        if (!t) {
          n.current?.setNodeState(e, `available`);
          return;
        }
        let i = Iye(r.current, t, h);
        i !== null && n.current?.setNodeState(t, i);
      };
      try {
        let e = await Un.invoke(p, d, Vn(p, l, u?.params));
        e.success || (c(e) && g(), o(`Ready`));
      } catch (e) {
        (console.error(`Execution error:`, e),
          a({
            code: `NETWORK_CONNECTION_FAILED`,
            category: `network`,
            message: `Failed to start this step`,
            recoverable: !0,
            timestamp: new Date().toISOString(),
          }),
          g(),
          o(`Ready`));
      }
    },
  };
}
var zye = [`workflow_complete`, `workflow_failed`];
function Z9(e) {
  return e?.display_mode === `thinking`;
}
function Q9(e, t) {
  let n = typeof t?.task_id == `string` ? t.task_id.trim() : ``;
  if (!n) return null;
  if (e === `workflow_started`) {
    if (Z9(t)) return null;
    let e = t.workflow_name || ``;
    return {
      kind: `open`,
      taskId: n,
      title: pt(e, t.workflow_display_name || e).displayName,
    };
  }
  if (zye.includes(e)) {
    let r = e === `workflow_complete`;
    return {
      kind: `close`,
      taskId: n,
      outcome: r ? `complete` : `failed`,
      message: r ? t.message : t.error?.message,
    };
  }
  return null;
}
function $9(e, t) {
  let n = e.current;
  if (!n) return;
  let r = n.getDesignData?.();
  if (!r?.assets) return;
  let i = r.assets,
    a = wf(i, t);
  a !== i && n.updateDesignData({ ...r, assets: a });
}
