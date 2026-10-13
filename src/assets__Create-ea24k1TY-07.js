// assets__Create-ea24k1TY 07 — currentstate
// Lines 2245-2582 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function oc() {
  let e = [];
  return (
    ac.forEach((t) => {
      let n = t.visualParent || t.prerequisites[0];
      n &&
        e.push({
          id: `${n}-to-${t.id}`,
          source: n,
          target: t.id,
          type: `prerequisite`,
          active: !1,
          highlighted: !1,
        });
    }),
    e
  );
}
function sc(e) {
  return ac.find((t) => t.id === e);
}
function cc(e, t) {
  let n = sc(e);
  return n ? n.prerequisites.every((e) => t.has(e)) : !1;
}
function lc(e) {
  return ac
    .filter((t) => t.prerequisites.length > 0 && !Ps.has(t.id) && cc(t.id, e))
    .map((e) => e.id);
}
function uc(e, t) {
  let n = [],
    r = new Set(
      Array.from(t.values())
        .filter((e) => e.state === `complete` || e.state === `outdated`)
        .map((e) => e.id),
    );
  return (
    r.add(e),
    t.forEach((e) => {
      e.state === `locked` && cc(e.id, r) && n.push(e.id);
    }),
    n
  );
}
function dc(e) {
  let t = Array.from(e.values()).filter((e) => e.domain !== `project`),
    n = t.filter((e) => e.state === `complete`).length;
  return t.length > 0 ? (n / t.length) * 100 : 0;
}
var fc = new (class {
    listeners = new Set();
    currentState = this.getEmptyState();
    subscribe(e) {
      return (
        this.listeners.add(e),
        e(this.currentState),
        () => {
          this.listeners.delete(e);
        }
      );
    }
    getState() {
      return this.currentState;
    }
    handleExecutionState(e) {
      ((this.currentState = this.transformBackendState(e)),
        this.notifyListeners());
    }
    handleToolStart(e) {
      let t = {
        id: e.toolId,
        type: `tool`,
        name: e.toolName,
        toolName: e.toolName,
        status: `running`,
        startedAt: new Date().toISOString(),
        arguments: e.arguments,
      };
      (this.addToolToTree(t, e.workflowId, e.agentId),
        (this.currentState.isCodingAgentRunning = !0),
        this.notifyListeners());
    }
    handleToolEnd(e) {
      if (
        (this.updateToolInTree(e.toolId, {
          status: e.success ? `completed` : `failed`,
          completedAt: new Date().toISOString(),
          durationMs: e.durationMs,
          tokens: e.tokens,
          costUsd: e.costUsd,
          error: e.error,
        }),
        e.tokens &&
          (this.currentState.telemetry.totalTokens +=
            e.tokens.input + e.tokens.output),
        e.costUsd && (this.currentState.telemetry.totalCostUsd += e.costUsd),
        (this.currentState.telemetry.toolCalls += 1),
        e.durationMs)
      ) {
        let t = this.currentState.telemetry.avgToolDurationMs,
          n = this.currentState.telemetry.toolCalls;
        this.currentState.telemetry.avgToolDurationMs =
          (t * (n - 1) + e.durationMs) / n;
      }
      (this.updateParentStatuses(),
        (this.currentState.isCodingAgentRunning = this.hasRunningTools()),
        this.notifyListeners());
    }
    handleTelemetryUpdate(e) {
      (e.totalTokens !== void 0 &&
        (this.currentState.telemetry.totalTokens = e.totalTokens),
        e.totalCostUsd !== void 0 &&
          (this.currentState.telemetry.totalCostUsd = e.totalCostUsd),
        e.toolCalls !== void 0 &&
          (this.currentState.telemetry.toolCalls = e.toolCalls),
        e.avgToolDurationMs !== void 0 &&
          (this.currentState.telemetry.avgToolDurationMs = e.avgToolDurationMs),
        e.currentModel !== void 0 &&
          (this.currentState.telemetry.currentModel = e.currentModel),
        this.notifyListeners());
    }
    clear() {
      ((this.currentState = this.getEmptyState()), this.notifyListeners());
    }
    notifyListeners() {
      this.listeners.forEach((e) => {
        try {
          e(this.currentState);
        } catch (e) {
          console.error(`Error in developer service listener:`, e);
        }
      });
    }
    getEmptyState() {
      return {
        workflows: [],
        telemetry: {
          totalTokens: 0,
          totalCostUsd: 0,
          toolCalls: 0,
          avgToolDurationMs: 0,
        },
        isCodingAgentRunning: !1,
      };
    }
    transformBackendState(e) {
      let t = (e.workflows || []).map((e) => this.transformWorkflow(e));
      return {
        workflows: t,
        telemetry: {
          totalTokens: e.telemetry?.total_tokens || 0,
          totalCostUsd: e.telemetry?.total_cost_usd || 0,
          toolCalls: e.telemetry?.tool_calls || 0,
          avgToolDurationMs: e.telemetry?.avg_tool_duration_ms || 0,
          currentModel: e.telemetry?.current_model,
        },
        isCodingAgentRunning:
          e.isCodingAgentRunning || this.hasRunningToolsInTree(t),
      };
    }
    transformWorkflow(e) {
      let t = Object.values(e.steps || {}).map((e) => this.transformStep(e));
      return {
        id: e.workflow_id,
        type: `workflow`,
        name: e.workflow_name,
        status: this.mapStatus(e.status),
        startedAt: e.started_at,
        completedAt: e.completed_at,
        children: t.length > 0 ? t : void 0,
      };
    }
    transformStep(e) {
      let t = Object.values(e.agents || {}).map((e) => this.transformAgent(e));
      return {
        id: e.step_id,
        type: `step`,
        name: e.step_name,
        status: this.mapStatus(e.status),
        startedAt: e.started_at,
        completedAt: e.completed_at,
        children: t.length > 0 ? t : void 0,
      };
    }
    transformAgent(e) {
      let t = [];
      return (
        Object.values(e.active_tools || {}).forEach((e) => {
          t.push(this.transformTool(e));
        }),
        (e.completed_tools || []).forEach((e) => {
          t.push(this.transformTool(e));
        }),
        {
          id: e.agent_id,
          type: `agent`,
          name: e.agent_name,
          status: this.mapStatus(e.status),
          startedAt: e.started_at,
          completedAt: e.completed_at,
          children: t.length > 0 ? t : void 0,
        }
      );
    }
    transformTool(e) {
      let t =
        e.started_at && e.completed_at
          ? new Date(e.completed_at).getTime() -
            new Date(e.started_at).getTime()
          : void 0;
      return {
        id: e.tool_id,
        type: `tool`,
        name: e.tool_name,
        toolName: e.tool_name,
        status: this.mapStatus(e.status),
        startedAt: e.started_at,
        completedAt: e.completed_at,
        durationMs: t,
        arguments: e.arguments,
        result: e.result,
        error: e.error,
        tokens:
          e.tokens_input !== void 0 && e.tokens_output !== void 0
            ? { input: e.tokens_input, output: e.tokens_output }
            : void 0,
        costUsd: e.cost_usd,
      };
    }
    mapStatus(e) {
      switch (e?.toLowerCase()) {
        case `pending`:
          return `pending`;
        case `running`:
        case `in_progress`:
        case `in-progress`:
          return `running`;
        case `completed`:
        case `complete`:
        case `success`:
          return `completed`;
        case `failed`:
        case `error`:
          return `failed`;
        default:
          return `pending`;
      }
    }
    addToolToTree(e, t, n) {
      if (this.currentState.workflows.length === 0) {
        this.currentState.workflows.push({
          id: t || `default-workflow`,
          type: `workflow`,
          name: `Current Execution`,
          status: `running`,
          startedAt: new Date().toISOString(),
          children: [
            {
              id: n || `default-agent`,
              type: `agent`,
              name: `Coding Agent`,
              status: `running`,
              startedAt: new Date().toISOString(),
              children: [e],
            },
          ],
        });
        return;
      }
      let r = this.currentState.workflows[0];
      r.children ||= [];
      let i = r.children.find((e) => e.type === `agent` && (!n || e.id === n));
      (i ||
        ((i = {
          id: n || `default-agent`,
          type: `agent`,
          name: `Coding Agent`,
          status: `running`,
          startedAt: new Date().toISOString(),
          children: [],
        }),
        r.children.push(i)),
        (i.children ||= []),
        i.children.push(e));
    }
    updateToolInTree(e, t) {
      let n = (r) => {
        for (let i of r) {
          if (i.id === e) return (Object.assign(i, t), !0);
          if (i.children && n(i.children)) return !0;
        }
        return !1;
      };
      n(this.currentState.workflows);
    }
    hasRunningTools() {
      return this.hasRunningToolsInTree(this.currentState.workflows);
    }
    hasRunningToolsInTree(e) {
      for (let t of e)
        if (
          (t.type === `tool` && t.status === `running`) ||
          (t.children && this.hasRunningToolsInTree(t.children))
        )
          return !0;
      return !1;
    }
    updateParentStatuses() {
      let e = (t) => {
        !t.children ||
          t.children.length === 0 ||
          (t.children.forEach((t) => e(t)),
          t.children.every(
            (e) => e.status === `completed` || e.status === `failed`,
          ) &&
            ((t.status = t.children.some((e) => e.status === `failed`)
              ? `failed`
              : `completed`),
            (t.completedAt = new Date().toISOString())));
      };
      this.currentState.workflows.forEach((t) => e(t));
    }
  })(),
  pc = `Reconnected - earlier activity not retained`,
  mc = new Set([
    `narration`,
    `tool_start`,
    `tool_end`,
    `child_start`,
    `child_end`,
    `phase`,
  ]);
function hc(e) {
  if (!e) return Date.now();
  let t = Date.parse(e);
  return Number.isNaN(t) ? Date.now() : t;
}
