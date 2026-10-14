import { n as e, r as t, t as n } from "./apiConfig-cGsbt6Be.js";
import { i as r } from "./serviceProxy-CZRpABZv.js";
function i(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `type` in e &&
    e.type === `task_failed` &&
    `data` in e
  );
}
function a(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `type` in e &&
    e.type === `workflow_failed` &&
    `data` in e
  );
}
function o(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `type` in e &&
    e.type === `workflow_step_failed` &&
    `data` in e
  );
}
function s(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `type` in e &&
    e.type === `llm_failover` &&
    `data` in e
  );
}
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
var d = class {
    async getAssets(t) {
      try {
        let r = t.split(`/`).pop() || t,
          i = await e(),
          a = await fetch(
            `${n.API_BASE_URL}/api/assets?session_dir=${encodeURIComponent(r)}`,
            { headers: i },
          );
        return a.ok
          ? await a.json()
          : (console.error(
              `[AssetService] getAssets HTTP error: ${a.status} ${a.statusText}`,
            ),
            {
              success: !1,
              assets: [],
              session_dir: t,
              error: `Server error: ${a.status}`,
            });
      } catch (e) {
        let n = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${n} getting assets:`, e),
          {
            success: !1,
            assets: [],
            session_dir: t,
            error: u(e)
              ? `Network error: Unable to load assets. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to load assets`,
          }
        );
      }
    }
    async listAssets(t) {
      try {
        let r = await e(),
          i = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets`,
            { headers: r },
          );
        return i.ok
          ? await i.json()
          : (console.error(
              `[AssetService] listAssets HTTP error: ${i.status} ${i.statusText}`,
            ),
            { success: !1, assets: [], error: `Server error: ${i.status}` });
      } catch (e) {
        let t = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} listing assets:`, e),
          {
            success: !1,
            assets: [],
            error: u(e)
              ? `Network error: Unable to reach server. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to list assets`,
          }
        );
      }
    }
    async getAssetById(t, r) {
      try {
        let i = await e(),
          a = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets/${encodeURIComponent(r)}`,
            { headers: i },
          );
        if (!a.ok) {
          let e =
            a.status === 404 ? `Asset not found` : `Server error: ${a.status}`;
          return (
            console.error(`[AssetService] getAssetById failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await a.json();
      } catch (e) {
        let t = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} getting asset:`, e),
          {
            success: !1,
            error: u(e)
              ? `Network error: Unable to load asset. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to get asset`,
          }
        );
      }
    }
    async addAsset(t, r) {
      try {
        let i = await e(),
          a = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets`,
            {
              method: `POST`,
              headers: i,
              body: JSON.stringify({
                session_id: t,
                asset_name: r.asset_name,
                asset_type: r.asset_type,
                description: r.description || ``,
                priority: r.priority || `medium`,
                format: r.format || `glb`,
                generate: r.generate ?? !1,
                ...(r.source_asset_id
                  ? { source_asset_id: r.source_asset_id }
                  : {}),
                ...(r.body_plan ? { body_plan: r.body_plan } : {}),
              }),
            },
          );
        if (!a.ok) {
          let e = `Server error: ${a.status}`;
          try {
            let t = await a.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[AssetService] addAsset failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await a.json();
      } catch (e) {
        let t = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} adding asset:`, e),
          {
            success: !1,
            error: u(e)
              ? `Network error: Unable to add asset. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to add asset`,
          }
        );
      }
    }
    async updateAsset(t, r, i) {
      try {
        let a = await e(),
          o = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets/${encodeURIComponent(r)}`,
            {
              method: `PATCH`,
              headers: a,
              body: JSON.stringify({ session_id: t, ...i }),
            },
          );
        if (!o.ok) {
          let e =
            o.status === 404 ? `Asset not found` : `Server error: ${o.status}`;
          return (
            console.error(`[AssetService] updateAsset failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await o.json();
      } catch (e) {
        let t = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} updating asset:`, e),
          {
            success: !1,
            error: u(e)
              ? `Network error: Unable to update asset. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to update asset`,
          }
        );
      }
    }
    async deleteAsset(t, r) {
      try {
        let i = await e(),
          a = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets/${encodeURIComponent(r)}`,
            { method: `DELETE`, headers: i },
          );
        if (!a.ok) {
          let e =
            a.status === 404 ? `Asset not found` : `Server error: ${a.status}`;
          return (
            console.error(`[AssetService] deleteAsset failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await a.json();
      } catch (e) {
        let t = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} deleting asset:`, e),
          {
            success: !1,
            error: u(e)
              ? `Network error: Unable to delete asset. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to delete asset`,
          }
        );
      }
    }
    async putSheetPlayback(t, r, i) {
      try {
        let a = await e(),
          o = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets/${encodeURIComponent(r)}/sheet-playback`,
            { method: `PUT`, headers: a, body: JSON.stringify(i) },
          );
        if (!o.ok) {
          let e = `Server error: ${o.status}`;
          try {
            let t = await o.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[AssetService] putSheetPlayback failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await o.json();
      } catch (e) {
        let t = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} saving sheet playback:`, e),
          {
            success: !1,
            error: u(e)
              ? `Network error: Unable to save playback. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to save playback`,
          }
        );
      }
    }
    async putSheetAlignment(t, r, i) {
      try {
        let a = await e(),
          o = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets/${encodeURIComponent(r)}/sheet-alignment`,
            { method: `PUT`, headers: a, body: JSON.stringify(i) },
          );
        if (!o.ok) {
          let e = `Server error: ${o.status}`;
          try {
            let t = await o.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[AssetService] putSheetAlignment failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await o.json();
      } catch (e) {
        let t = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} saving sheet alignment:`, e),
          {
            success: !1,
            error: u(e)
              ? `Network error: Unable to save alignment. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to save alignment`,
          }
        );
      }
    }
    async aiModifyAsset(t, r, i, a) {
      try {
        let o = await e(),
          s = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets/ai-modify`,
            {
              method: `POST`,
              headers: o,
              body: JSON.stringify({
                session_id: t,
                operation: r,
                description: i,
                asset_id: a,
              }),
            },
          );
        return s.ok
          ? await s.json()
          : (console.error(
              `[AssetService] aiModifyAsset HTTP error: ${s.status}`,
            ),
            { success: !1, error: `Server error: ${s.status}` });
      } catch (e) {
        let t = u(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} AI modifying asset:`, e),
          {
            success: !1,
            error: u(e)
              ? `Network error: Unable to modify asset. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to AI modify asset`,
          }
        );
      }
    }
    async refinePrompt(t, r, i, a) {
      try {
        let o = await e(),
          s = await fetch(
            `${n.API_BASE_URL}/api/session/${encodeURIComponent(t)}/assets/${encodeURIComponent(r)}/refine-prompt`,
            {
              method: `POST`,
              headers: o,
              body: JSON.stringify({ current_prompt: i, user_comment: a }),
            },
          );
        return s.ok
          ? await s.json()
          : { success: !1, error: `Server error: ${s.status}` };
      } catch (e) {
        return (
          console.error(`[AssetService] Error refining prompt:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Failed to refine prompt`,
          }
        );
      }
    }
    async uploadConceptArt(e, r, i) {
      try {
        let a = await t(),
          o = new FormData();
        o.append(`file`, i);
        let s = await fetch(
          `${n.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(r)}/upload-concept`,
          {
            method: `POST`,
            headers: a ? { Authorization: `Bearer ${a}` } : {},
            body: o,
          },
        );
        return s.ok
          ? await s.json()
          : { success: !1, error: `Server error: ${s.status}` };
      } catch (e) {
        return (
          console.error(`[AssetService] Error uploading concept art:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Upload failed`,
          }
        );
      }
    }
    async upload3DModel(e, r, i) {
      try {
        let a = await t(),
          o = new FormData();
        o.append(`file`, i);
        let s = await fetch(
          `${n.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(r)}/upload-3d`,
          {
            method: `POST`,
            headers: a ? { Authorization: `Bearer ${a}` } : {},
            body: o,
          },
        );
        return s.ok
          ? await s.json()
          : { success: !1, error: `Server error: ${s.status}` };
      } catch (e) {
        return (
          console.error(`[AssetService] Error uploading 3D model:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Upload failed`,
          }
        );
      }
    }
    async saveSegmentedModel(e, r, i) {
      try {
        let a = await t(),
          o = new FormData();
        o.append(`file`, i);
        let s = await fetch(
          `${n.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(r)}/save-segments`,
          {
            method: `POST`,
            headers: a ? { Authorization: `Bearer ${a}` } : {},
            body: o,
          },
        );
        return s.ok
          ? await s.json()
          : { success: !1, error: `Server error: ${s.status}` };
      } catch (e) {
        return (
          console.error(`[AssetService] Error saving segmented model:`, e),
          { success: !1, error: e instanceof Error ? e.message : `Save failed` }
        );
      }
    }
    async saveAssetThumbnail(e, r, i) {
      try {
        let a = e.split(`/`).pop() || e,
          o = await t(),
          s = new FormData();
        s.append(`file`, i, `thumbnail.png`);
        let c = await fetch(
          `${n.API_BASE_URL}/api/session/${encodeURIComponent(a)}/assets/${encodeURIComponent(r)}/thumbnail`,
          {
            method: `POST`,
            headers: o ? { Authorization: `Bearer ${o}` } : {},
            body: s,
          },
        );
        return c.ok
          ? await c.json()
          : { success: !1, error: `Server error: ${c.status}` };
      } catch (e) {
        return {
          success: !1,
          error: e instanceof Error ? e.message : `Thumbnail save failed`,
        };
      }
    }
    getAssetUrl(e, t, r) {
      let i = e.split(`/`).pop() || e,
        a = t;
      if (t.includes(`sessions/`) && t.includes(i)) {
        let e = `sessions/${i}/`,
          n = t.indexOf(e);
        n !== -1 && (a = t.substring(n + e.length));
      }
      let o = `${n.API_BASE_URL}/api/game/${encodeURIComponent(i)}/${encodeURIComponent(a)}`;
      if (typeof r == `boolean` || r == null) return o;
      let s = r.version;
      return s != null && `${s}` != ``
        ? `${o}?v=${encodeURIComponent(String(s))}`
        : o;
    }
    async transformAsset(t, r, i, a, o = !0) {
      try {
        let s = await e(),
          c = await fetch(`${n.API_BASE_URL}/api/assets/transform`, {
            method: `POST`,
            headers: s,
            body: JSON.stringify({
              session_id: t,
              asset_path: r,
              asset_name: i,
              rotation: a,
              ground: o,
            }),
          });
        if (!c.ok) {
          let e = `Server error: ${c.status}`;
          try {
            let t = await c.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[AssetService] transformAsset failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await c.json();
      } catch (e) {
        return (
          console.error(`Error transforming asset:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Failed to transform asset`,
          }
        );
      }
    }
    async getScaleValues(t) {
      try {
        let r = await e();
        return await (
          await fetch(
            `${n.API_BASE_URL}/api/assets/scale-values/${encodeURIComponent(t)}`,
            { headers: r },
          )
        ).json();
      } catch (e) {
        return (
          console.error(`Error loading Scale Clinic values:`, e),
          {
            success: !1,
            session_id: t,
            scales: {},
            error:
              e instanceof Error
                ? e.message
                : `Failed to load Scale Clinic values`,
          }
        );
      }
    }
    async scaleAsset(t, r, i) {
      try {
        let a = await e();
        return await (
          await fetch(`${n.API_BASE_URL}/api/assets/scale`, {
            method: `POST`,
            headers: a,
            body: JSON.stringify({
              session_id: t,
              asset_name: r,
              scale_value: i,
            }),
          })
        ).json();
      } catch (e) {
        return (
          console.error(`Error scaling asset:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Failed to scale asset`,
          }
        );
      }
    }
  },
  f = r(`assets`, new d()),
  p = class {
    async getScenes(t) {
      try {
        let r = t.split(`/`).pop() || t,
          i = await e();
        return await (
          await fetch(
            `${n.API_BASE_URL}/api/scenes?session_dir=${encodeURIComponent(r)}`,
            { headers: i },
          )
        ).json();
      } catch (e) {
        throw (console.error(`Error getting scenes:`, e), e);
      }
    }
    async loadScene(t, r, i) {
      try {
        let a = t.split(`/`).pop() || t,
          o = await e();
        return await (
          await fetch(`${n.API_BASE_URL}/api/scenes/load`, {
            method: `POST`,
            headers: o,
            body: JSON.stringify({
              session_dir: a,
              scene_name: r,
              ...(i ? { asset_id: i } : {}),
            }),
          })
        ).json();
      } catch (e) {
        throw (console.error(`Error loading scene:`, e), e);
      }
    }
    async getSceneHistory(t, r, i) {
      try {
        let a = t.split(`/`).pop() || t,
          o = await e(),
          s = new URLSearchParams({ session_dir: a, scene_name: r });
        return (
          i && s.set(`asset_id`, i),
          await (
            await fetch(
              `${n.API_BASE_URL}/api/scenes/history?${s.toString()}`,
              { headers: o },
            )
          ).json()
        );
      } catch (e) {
        throw (console.error(`Error getting scene history:`, e), e);
      }
    }
    async restoreScene(t, r, i, a) {
      try {
        let o = t.split(`/`).pop() || t,
          s = await e();
        return await (
          await fetch(`${n.API_BASE_URL}/api/scenes/restore`, {
            method: `POST`,
            headers: s,
            body: JSON.stringify({
              session_dir: o,
              scene_name: r,
              revision_id: i,
              ...(a ? { asset_id: a } : {}),
            }),
          })
        ).json();
      } catch (e) {
        throw (console.error(`Error restoring scene:`, e), e);
      }
    }
    async deleteScene(t, r, i) {
      try {
        let a = t.split(`/`).pop() || t,
          o = await e();
        return await (
          await fetch(`${n.API_BASE_URL}/api/scenes/delete`, {
            method: `POST`,
            headers: o,
            body: JSON.stringify({
              session_dir: a,
              scene_name: r,
              ...(i ? { asset_id: i } : {}),
            }),
          })
        ).json();
      } catch (e) {
        throw (console.error(`Error deleting scene:`, e), e);
      }
    }
    async renameScene(t, r, i, a) {
      try {
        let o = t.split(`/`).pop() || t,
          s = await e();
        return await (
          await fetch(`${n.API_BASE_URL}/api/scenes/rename`, {
            method: `POST`,
            headers: s,
            body: JSON.stringify({
              session_dir: o,
              scene_name: r,
              new_name: i,
              ...(a ? { asset_id: a } : {}),
            }),
          })
        ).json();
      } catch (e) {
        throw (console.error(`Error renaming scene:`, e), e);
      }
    }
    async saveScene(t, r, i, a) {
      try {
        let o = t.split(`/`).pop() || t,
          s = await e();
        return await (
          await fetch(`${n.API_BASE_URL}/api/scenes/save`, {
            method: `POST`,
            headers: s,
            body: JSON.stringify({
              session_dir: o,
              scene_name: r,
              scene_data: i,
              ...(a ? { asset_id: a } : {}),
            }),
          })
        ).json();
      } catch (e) {
        throw (console.error(`Error saving scene:`, e), e);
      }
    }
  },
  m = r(`scene`, new p()),
  h = class {
    async getGameFiles(t) {
      try {
        let r = t.split(`/`).pop() || t,
          i = await e(),
          a = await (
            await fetch(
              `${n.API_BASE_URL}/api/game?session_dir=${encodeURIComponent(r)}`,
              { headers: i },
            )
          ).json();
        if (a.success && a.game_url) {
          let e = a.game_url.startsWith(`http`)
            ? a.game_url
            : `${n.API_BASE_URL}${a.game_url}`;
          return { ...a, game_url: e };
        }
        return a;
      } catch (e) {
        return (
          console.error(`Error getting game files:`, e),
          { success: !1, error: `Failed to load game` }
        );
      }
    }
    async refreshGame(e) {
      try {
        return await this.getGameFiles(e);
      } catch (e) {
        throw (console.error(`Error refreshing game:`, e), e);
      }
    }
  },
  g = r(`game`, new h()),
  _ = {
    ok: !1,
    running: [],
    completedNodes: [],
    unlockedNodes: [],
    interrupted: [],
  },
  v = class {
    async getCompletedWorkflows(t) {
      try {
        let r = await e(),
          i = await (
            await fetch(
              `${n.API_BASE_URL}/api/history?session_dir=${encodeURIComponent(t)}`,
              { headers: r },
            )
          ).json();
        if (!i.success)
          return { success: !0, completedWorkflows: [], dirtyWorkflows: [] };
        let a = i.dirty_workflows || [];
        return {
          success: !0,
          completedWorkflows: i.completed_workflows || [],
          dirtyWorkflows: a,
        };
      } catch (e) {
        return (
          console.error(`Error getting completed workflows:`, e),
          {
            success: !1,
            completedWorkflows: [],
            dirtyWorkflows: [],
            error:
              e instanceof Error
                ? e.message
                : `Failed to get completed workflows`,
          }
        );
      }
    }
    async getSessionInflight(t) {
      try {
        let r = t.split(`/`).pop() || t,
          i = await e(),
          a = await fetch(`${n.API_BASE_URL}/api/sessions/${r}/inflight`, {
            headers: i,
          });
        if (!a.ok) return _;
        let o = await a.json();
        return {
          ok: !0,
          running: Array.isArray(o?.running) ? o.running : [],
          completedNodes: Array.isArray(o?.completed_nodes)
            ? o.completed_nodes
            : [],
          unlockedNodes: Array.isArray(o?.unlocked_nodes)
            ? o.unlocked_nodes
            : [],
          interrupted: Array.isArray(o?.interrupted) ? o.interrupted : [],
        };
      } catch (e) {
        return (
          console.warn(`[inflight] could not restore session progress:`, e),
          _
        );
      }
    }
    async unlockNode(t, r) {
      try {
        let i = t.split(`/`).pop() || t,
          a = await e(),
          o = await fetch(
            `${n.API_BASE_URL}/api/sessions/${i}/nodes/${encodeURIComponent(r)}/unlock`,
            { method: `POST`, headers: a },
          );
        return o.ok
          ? await o.json()
          : { success: !1, error: `Server error: ${o.status}` };
      } catch (e) {
        return (
          console.warn(`[unlock] could not persist unlock of ${r}:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Failed to persist unlock`,
          }
        );
      }
    }
    async getSessionContext(t) {
      try {
        let r = await e(),
          i = await (
            await fetch(
              `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/context`,
              { headers: r },
            )
          ).json();
        return i.success
          ? {
              success: !0,
              context_version: i.context_version,
              needs_initialization: i.needs_initialization,
              backfill_status: i.backfill_status,
              context: i.context,
            }
          : { success: !1, error: i.error || `Failed to fetch context` };
      } catch (e) {
        return (
          console.error(`Error getting session context:`, e),
          {
            success: !1,
            error:
              e instanceof Error ? e.message : `Failed to get session context`,
          }
        );
      }
    }
    async triggerInitialization(t) {
      try {
        let r = await e();
        return await (
          await fetch(
            `${n.API_BASE_URL}/api/imports/${encodeURIComponent(t)}/backfill`,
            { method: `POST`, headers: r },
          )
        ).json();
      } catch (e) {
        return (
          console.error(`Error triggering initialization:`, e),
          {
            success: !1,
            error:
              e instanceof Error
                ? e.message
                : `Failed to trigger initialization`,
          }
        );
      }
    }
    async getInitializationStatus(t) {
      try {
        let r = await e();
        return await (
          await fetch(
            `${n.API_BASE_URL}/api/imports/${encodeURIComponent(t)}/backfill/status`,
            { headers: r },
          )
        ).json();
      } catch (e) {
        return (
          console.error(`Error getting initialization status:`, e),
          {
            success: !1,
            error:
              e instanceof Error
                ? e.message
                : `Failed to get initialization status`,
          }
        );
      }
    }
  },
  y = r(`workflow`, new v());
async function b(t, r) {
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/concept`,
        { method: `PUT`, headers: i, body: JSON.stringify(r) },
      );
    return a.ok
      ? await a.json()
      : { success: !1, error: `Server error (${a.status})` };
  } catch (e) {
    return (
      console.error(`[updateGameConcept] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to save concept`,
      }
    );
  }
}
function x() {
  if (typeof location > `u`) return !1;
  let e = location.pathname;
  return e.startsWith(`/tour`) && !e.startsWith(`/tour/claim`);
}
async function S(e) {
  try {
    let t = await e.json(),
      n = t?.detail ?? t?.error;
    if (typeof n == `string` && n.trim()) return n;
  } catch {}
  return `Server error (${e.status})`;
}
async function C(t, r) {
  if (x()) return { success: !0 };
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide`,
        { method: `PUT`, headers: i, body: JSON.stringify(r) },
      );
    return a.ok ? await a.json() : { success: !1, error: await S(a) };
  } catch (e) {
    return (
      console.error(`[updateStyleGuide] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to save style guide`,
      }
    );
  }
}
async function w(t, r) {
  try {
    let i = await e(),
      a = r ? JSON.stringify({ prompt: r }) : void 0;
    a && (i[`Content-Type`] = `application/json`);
    let o = await fetch(
      `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide/generate-mood-images`,
      { method: `POST`, headers: i, ...(a ? { body: a } : {}) },
    );
    return o.ok ? await o.json() : { success: !1, error: await S(o) };
  } catch (e) {
    return (
      console.error(`[generateMoodImages] Error:`, e),
      {
        success: !1,
        error:
          e instanceof Error ? e.message : `Failed to generate mood images`,
      }
    );
  }
}
async function T(t, r) {
  try {
    let i = await e(),
      a = r ? JSON.stringify({ prompt: r }) : void 0;
    a && (i[`Content-Type`] = `application/json`);
    let o = await fetch(
      `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide/generate-mood-image`,
      { method: `POST`, headers: i, ...(a ? { body: a } : {}) },
    );
    return o.ok ? await o.json() : { success: !1, error: await S(o) };
  } catch (e) {
    return (
      console.error(`[generateMoodImage] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to generate mood image`,
      }
    );
  }
}
async function E(t, r) {
  if (x()) return { success: !0 };
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide/render-composite`,
        { method: `POST`, headers: i, body: JSON.stringify(r) },
      );
    return a.ok ? await a.json() : { success: !1, error: await S(a) };
  } catch (e) {
    return (
      console.error(`[renderMoodBoardComposite] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to render composite`,
      }
    );
  }
}
async function D(t) {
  try {
    let r = await e(),
      i = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide/extract-palette`,
        { method: `POST`, headers: r },
      );
    return i.ok ? await i.json() : { success: !1, error: await S(i) };
  } catch (e) {
    return (
      console.error(`[extractPaletteFromMoodBoard] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to extract palette`,
      }
    );
  }
}
async function O(e = ``, t = ``, r = 50) {
  if (x()) return { keywords: [], suggestions: [], categories: [] };
  try {
    let i = new URLSearchParams();
    (e && i.set(`q`, e), t && i.set(`category`, t), i.set(`limit`, String(r)));
    let a = await fetch(`${n.API_BASE_URL}/api/style-keywords?${i}`);
    return a.ok
      ? await a.json()
      : { keywords: [], suggestions: [], categories: [] };
  } catch {
    return { keywords: [], suggestions: [], categories: [] };
  }
}
async function k(e = ``, t = ``, r = 30) {
  if (x()) return { references: [], categories: [] };
  try {
    let i = new URLSearchParams();
    (e && i.set(`q`, e), t && i.set(`category`, t), i.set(`limit`, String(r)));
    let a = await fetch(`${n.API_BASE_URL}/api/mood-references?${i}`);
    return a.ok ? await a.json() : { references: [], categories: [] };
  } catch {
    return { references: [], categories: [] };
  }
}
async function A(t, r) {
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/audio-direction`,
        { method: `PUT`, headers: i, body: JSON.stringify(r) },
      );
    return a.ok
      ? await a.json()
      : { success: !1, error: `Server error (${a.status})` };
  } catch (e) {
    return (
      console.error(`[updateAudioDirection] Error:`, e),
      {
        success: !1,
        error:
          e instanceof Error ? e.message : `Failed to save audio direction`,
      }
    );
  }
}
var j = [`gdd`, `tdd`, `uiux_direction`, `experience_bible`, `feature_list`],
  M = {
    gdd: `Game Design Document`,
    tdd: `Technical Design Document`,
    uiux_direction: `UI/UX Direction`,
    experience_bible: `Experience Bible`,
    feature_list: `Feature List`,
  };
async function N(t) {
  try {
    let r = await e(),
      i = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents`,
        { headers: r },
      );
    return i.ok
      ? await i.json()
      : { success: !1, error: `Server error (${i.status})` };
  } catch (e) {
    return (
      console.error(`[listDesignDocuments] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to list documents`,
      }
    );
  }
}
async function P(t, r) {
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}`,
        { headers: i },
      );
    return a.ok
      ? await a.json()
      : { success: !1, error: `Server error (${a.status})`, status: a.status };
  } catch (e) {
    return (
      console.error(`[getDesignDocument] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to load document`,
      }
    );
  }
}
async function F(t, r, i, a) {
  try {
    let o = await e(),
      s = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}`,
        {
          method: `PUT`,
          headers: o,
          body: JSON.stringify(
            a === void 0 ? { content: i } : { content: i, title: a },
          ),
        },
      );
    return s.ok
      ? await s.json()
      : { success: !1, error: `Server error (${s.status})` };
  } catch (e) {
    return (
      console.error(`[saveDesignDocument] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to save document`,
      }
    );
  }
}
async function I(t, r) {
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}/versions`,
        { headers: i },
      );
    return a.ok
      ? await a.json()
      : { success: !1, error: `Server error (${a.status})` };
  } catch (e) {
    return (
      console.error(`[listDesignDocumentVersions] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to list versions`,
      }
    );
  }
}
async function L(t, r, i) {
  try {
    let a = await e(),
      o = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}/versions/${i}`,
        { headers: a },
      );
    return o.ok
      ? await o.json()
      : { success: !1, error: `Server error (${o.status})` };
  } catch (e) {
    return (
      console.error(`[getDesignDocumentVersion] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to load version`,
      }
    );
  }
}
async function R(t, r, i) {
  try {
    let a = await e(),
      o = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}/restore`,
        { method: `POST`, headers: a, body: JSON.stringify({ version: i }) },
      );
    return o.ok
      ? await o.json()
      : { success: !1, error: `Server error (${o.status})` };
  } catch (e) {
    return (
      console.error(`[restoreDesignDocumentVersion] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to restore version`,
      }
    );
  }
}
var z = new (class {
    base(e) {
      return `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(e)}/files`;
    }
    async getIndex(t) {
      let n = await e(),
        r = await fetch(`${this.base(t)}/history`, { headers: n });
      return r.ok ? r.json() : { success: !1, paths: {} };
    }
    async getVersions(t, n) {
      let r = await e(),
        i = await fetch(
          `${this.base(t)}/history/entry?path=${encodeURIComponent(n)}`,
          { headers: r },
        );
      return i.ok ? i.json() : { success: !1, path: n, entries: [] };
    }
    async getContentObjectUrl(t, n, r) {
      let i = await e(),
        a = await fetch(
          `${this.base(t)}/history/content?path=${encodeURIComponent(n)}&sha256=${encodeURIComponent(r)}`,
          { headers: i },
        );
      if (!a.ok) return null;
      let o = await a.blob();
      return {
        url: URL.createObjectURL(o),
        contentType:
          a.headers.get(`content-type`) || `application/octet-stream`,
      };
    }
    async getContentText(t, n, r) {
      let i = await e(),
        a = await fetch(
          `${this.base(t)}/history/content?path=${encodeURIComponent(n)}&sha256=${encodeURIComponent(r)}`,
          { headers: i },
        );
      return a.ok ? a.text() : null;
    }
    async checkout(t, n, r) {
      let i = await e(),
        a = await fetch(`${this.base(t)}/checkout`, {
          method: `POST`,
          headers: { ...i, "Content-Type": `application/json` },
          body: JSON.stringify({ path: n, sha256: r }),
        });
      if (!a.ok) {
        let e = `Restore failed (${a.status})`;
        try {
          let t = await a.json();
          typeof t?.detail == `string` && (e = t.detail);
        } catch {}
        return {
          success: !1,
          path: n,
          sha256: r,
          asset_updates: [],
          new_version: null,
          error: e,
        };
      }
      return a.json();
    }
  })(),
  B = new (class {
    async transcribe(e, r = `audio.webm`) {
      try {
        let i = new FormData();
        i.append(`file`, e, r);
        let a = await t();
        return await (
          await fetch(`${n.API_BASE_URL}/api/transcribe`, {
            method: `POST`,
            headers: { ...(a ? { Authorization: `Bearer ${a}` } : {}) },
            body: i,
          })
        ).json();
      } catch (e) {
        return (
          console.error(`Error transcribing audio:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Transcription failed`,
          }
        );
      }
    }
    async getInfo() {
      try {
        let t = await e();
        return await (
          await fetch(`${n.API_BASE_URL}/api/transcribe/info`, { headers: t })
        ).json();
      } catch (e) {
        return (
          console.error(`Error getting transcription info:`, e),
          {
            success: !1,
            error:
              e instanceof Error
                ? e.message
                : `Failed to get transcription info`,
          }
        );
      }
    }
  })();
export {
  l as A,
  g as C,
  f as D,
  d as E,
  u as O,
  h as S,
  m as T,
  O as _,
  P as a,
  v as b,
  N as c,
  A as d,
  D as f,
  k as g,
  E as h,
  M as i,
  c as k,
  R as l,
  w as m,
  z as n,
  L as o,
  T as p,
  j as r,
  I as s,
  B as t,
  F as u,
  C as v,
  p as w,
  y as x,
  b as y,
};
