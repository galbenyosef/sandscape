// assets__gameCreation-7QUnbwLk 02 — websocket
// Lines 39-375 of readable/assets__gameCreation-7QUnbwLk.pretty.js (statement-aligned).
var c = class {
    websocket = null;
    sessionId = null;
    messageCallback = null;
    reconnectAttempts = 0;
    maxReconnectAttempts = 5;
    currentSession = null;
    isCreatingSession = !1;
    heartbeatInterval = null;
    reconnectTimer = null;
    isConnecting = !1;
    connectionGeneration = 0;
    onTaskFailed = null;
    onWorkflowFailed = null;
    onWorkflowStepFailed = null;
    onLLMFailover = null;
    onConnectionStateChange = null;
    async createSession(t, r) {
      if (this.isCreatingSession)
        return (
          console.log(`Session creation already in progress, waiting...`),
          await new Promise((e) => setTimeout(e, 100)),
          this.createSession(t, r)
        );
      try {
        this.isCreatingSession = !0;
        let i = await e(),
          a = await (
            await fetch(`${n.API_BASE_URL}/api/sessions`, {
              method: `POST`,
              headers: i,
              body: JSON.stringify({ name: t, target_platform: r }),
            })
          ).json();
        return ((this.currentSession = a), (this.isCreatingSession = !1), a);
      } catch (e) {
        throw (
          (this.isCreatingSession = !1),
          console.error(`Error creating session:`, e),
          e
        );
      }
    }
    async getChatHistory(t) {
      try {
        let r = t.split(`/`).pop() || t;
        console.log(`Calling chat history API with sessionName:`, r);
        let i = await e();
        return await (
          await fetch(
            `${n.API_BASE_URL}/api/chat/history/${encodeURIComponent(r)}`,
            { headers: i },
          )
        ).json();
      } catch (e) {
        throw (console.error(`Error getting chat history:`, e), e);
      }
    }
    async sendMessage(t, r) {
      try {
        if (this.websocket && this.websocket.readyState === WebSocket.OPEN)
          return (
            console.log(`Sending message via WebSocket:`, r),
            this.websocket.send(JSON.stringify({ message: r })),
            { success: !0, method: `websocket` }
          );
        {
          (console.warn(
            `[ChatService] WebSocket unavailable, falling back to HTTP. Real-time updates may be delayed.`,
          ),
            this.onConnectionStateChange?.(`reconnecting`));
          let i = await e();
          return {
            ...(await (
              await fetch(`${n.API_BASE_URL}/api/chat/message`, {
                method: `POST`,
                headers: i,
                body: JSON.stringify({ message: r, session_id: t }),
              })
            ).json()),
            method: `http`,
            degraded: !0,
          };
        }
      } catch (e) {
        throw (console.error(`Error sending message:`, e), e);
      }
    }
    waitForConnection(e = 5e3) {
      return new Promise((t, n) => {
        if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
          t();
          return;
        }
        let r = this.onConnectionStateChange,
          i = setTimeout(() => {
            ((this.onConnectionStateChange = r),
              n(Error(`WebSocket connection timeout`)));
          }, e);
        this.onConnectionStateChange = (e) => {
          (r?.(e),
            e === `connected`
              ? (clearTimeout(i), (this.onConnectionStateChange = r), t())
              : (e === `failed` || e === `disconnected`) &&
                (clearTimeout(i),
                (this.onConnectionStateChange = r),
                n(Error(`WebSocket connection ${e}`))));
        };
      });
    }
    async connectWebSocket(e, r) {
      if (
        this.websocket &&
        this.websocket.readyState === WebSocket.OPEN &&
        this.sessionId === e
      ) {
        (console.log(`WebSocket already connected to session:`, e),
          (this.messageCallback = r));
        return;
      }
      if (
        this.websocket &&
        this.websocket.readyState === WebSocket.CONNECTING &&
        this.sessionId === e
      ) {
        (console.log(
          `WebSocket connection already in progress for session:`,
          e,
        ),
          (this.messageCallback = r));
        return;
      }
      if (this.isConnecting) {
        console.log(`Connection attempt already in progress, waiting...`);
        for (
          let e = 0;
          e < 10 &&
          (await new Promise((e) => setTimeout(e, 100)), this.isConnecting);
          e++
        );
        if (
          this.websocket?.readyState === WebSocket.OPEN &&
          this.sessionId === e
        ) {
          this.messageCallback = r;
          return;
        }
      }
      this.isConnecting = !0;
      let i = ++this.connectionGeneration;
      try {
        if (this.websocket) {
          let e = this.websocket;
          ((this.websocket = null), this.stopHeartbeat(), e.close());
        }
        ((this.sessionId = e), (this.messageCallback = r));
        let a = await t();
        if (this.connectionGeneration !== i) {
          console.log(
            `WebSocket connect superseded while awaiting the auth token`,
          );
          return;
        }
        if (!a) {
          (console.error(`No auth token available for WebSocket connection`),
            (this.isConnecting = !1));
          return;
        }
        let o = `${n.WS_BASE_URL}/ws/chat/${e}?token=${encodeURIComponent(a)}`;
        console.log(`Connecting to WebSocket:`, o);
        let s = new WebSocket(o);
        ((this.websocket = s),
          (s.onopen = () => {
            this.websocket === s &&
              (console.log(`WebSocket connected`),
              (this.reconnectAttempts = 0),
              (this.isConnecting = !1),
              this.startHeartbeat(),
              this.onConnectionStateChange?.(`connected`));
          }),
          (s.onmessage = (e) => {
            if (this.websocket === s)
              try {
                let t = JSON.parse(e.data);
                (this.handleErrorMessage(t),
                  this.messageCallback && this.messageCallback(t));
              } catch (e) {
                console.error(`Error parsing WebSocket message:`, e);
              }
          }),
          (s.onclose = () => {
            this.websocket === s &&
              (console.log(`WebSocket disconnected`),
              this.stopHeartbeat(),
              (this.isConnecting = !1),
              (this.websocket = null),
              this.onConnectionStateChange?.(`disconnected`),
              this.attemptReconnect());
          }),
          (s.onerror = (e) => {
            this.websocket === s &&
              (console.error(`WebSocket error:`, e), (this.isConnecting = !1));
          }));
      } catch (e) {
        throw (
          console.error(`Error in connectWebSocket:`, e),
          (this.isConnecting = !1),
          e
        );
      }
    }
    startHeartbeat() {
      (this.stopHeartbeat(),
        (this.heartbeatInterval = setInterval(() => {
          this.websocket &&
            this.websocket.readyState === WebSocket.OPEN &&
            (console.log(`Sending heartbeat ping`),
            this.websocket.send(JSON.stringify({ type: `ping` })));
        }, 3e4)));
    }
    stopHeartbeat() {
      this.heartbeatInterval &&= (clearInterval(this.heartbeatInterval), null);
    }
    attemptReconnect() {
      let e = this.connectionGeneration;
      this.reconnectAttempts < this.maxReconnectAttempts && this.sessionId
        ? (this.reconnectAttempts++,
          console.warn(
            `[ChatService] Attempting WebSocket reconnect ${this.reconnectAttempts}/${this.maxReconnectAttempts}`,
          ),
          this.onConnectionStateChange?.(`reconnecting`),
          (this.reconnectTimer = setTimeout(async () => {
            ((this.reconnectTimer = null),
              this.connectionGeneration === e &&
                this.sessionId &&
                (await this.connectWebSocket(
                  this.sessionId,
                  this.messageCallback,
                )));
          }, 2e3 * this.reconnectAttempts)))
        : this.reconnectAttempts >= this.maxReconnectAttempts &&
          (console.error(
            `[ChatService] WebSocket reconnection failed after ${this.maxReconnectAttempts} attempts`,
          ),
          this.onConnectionStateChange?.(`failed`));
    }
    disconnectWebSocket() {
      (this.connectionGeneration++,
        (this.isConnecting = !1),
        this.stopHeartbeat(),
        (this.reconnectTimer &&= (clearTimeout(this.reconnectTimer), null)),
        (this.reconnectAttempts = 0));
      let e = this.websocket;
      ((this.websocket = null),
        e?.close(),
        (this.sessionId = null),
        (this.currentSession = null));
    }
    handleErrorMessage(e) {
      if (!e || typeof e != `object` || !(`type` in e)) return !1;
      switch (e.type) {
        case `task_failed`:
          if (i(e))
            return (
              console.error(
                `[ChatService] Task failed:`,
                e.data.task_name,
                e.data.error,
              ),
              this.onTaskFailed?.(e.data),
              !0
            );
          break;
        case `workflow_failed`:
          if (a(e))
            return (
              console.error(
                `[ChatService] Workflow failed:`,
                e.data.workflow_name,
                e.data.error,
              ),
              this.onWorkflowFailed?.(e.data),
              !0
            );
          break;
        case `workflow_step_failed`:
          if (o(e))
            return (
              console.error(
                `[ChatService] Workflow step failed:`,
                e.data.workflow_name,
                e.data.step_id,
                e.data.error,
              ),
              this.onWorkflowStepFailed?.(e.data),
              !0
            );
          break;
        case `llm_failover`:
          if (s(e))
            return (
              console.warn(
                `[ChatService] LLM failover:`,
                `${e.data.from_provider}/${e.data.from_model} -> ${e.data.to_provider}/${e.data.to_model}`,
                e.data.reason,
              ),
              this.onLLMFailover?.(e.data),
              !0
            );
          break;
      }
      return !1;
    }
  },
  l = r(`chat`, new c());
function u(e) {
  if (!e) return !1;
  let t =
    e instanceof Error ? e.message.toLowerCase() : String(e).toLowerCase();
  return [
    `network`,
    `fetch`,
    `timeout`,
    `econnrefused`,
    `enotfound`,
    `econnreset`,
    `socket`,
    `dns`,
    `offline`,
    `internet`,
    `connection`,
    `unreachable`,
    `failed to fetch`,
    `networkerror`,
    `load failed`,
  ].some((e) => t.includes(e));
}
