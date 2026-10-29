// gameCreation-B6oXUVk- 03 — error
// Lines 367-1245 of readable/assets/gameCreation-B6oXUVk-.pretty.js (statement-aligned).
var f = class {
    async fetchVisualReference(t, n, r) {
      let i = d(t, n),
        a = await e(),
        o = await fetch(i, { headers: a, signal: r });
      if (!o.ok) throw Error(`Reference image unavailable (${o.status})`);
      return o.blob();
    }
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
        let n = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${n} getting assets:`, e),
          {
            success: !1,
            assets: [],
            session_dir: t,
            error: l(e)
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
        let t = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} listing assets:`, e),
          {
            success: !1,
            assets: [],
            error: l(e)
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
        let t = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} getting asset:`, e),
          {
            success: !1,
            error: l(e)
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
        let t = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} adding asset:`, e),
          {
            success: !1,
            error: l(e)
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
        let t = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} updating asset:`, e),
          {
            success: !1,
            error: l(e)
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
        let t = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} deleting asset:`, e),
          {
            success: !1,
            error: l(e)
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
        let t = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} saving sheet playback:`, e),
          {
            success: !1,
            error: l(e)
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
        let t = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} saving sheet alignment:`, e),
          {
            success: !1,
            error: l(e)
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
        let t = l(e) ? `Network error` : `Error`;
        return (
          console.error(`[AssetService] ${t} AI modifying asset:`, e),
          {
            success: !1,
            error: l(e)
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
  p = r(`assets`, new f()),
  m = class {
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
  h = r(`scene`, new m()),
  g = class {
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
  _ = r(`game`, new g()),
  v = {
    ok: !1,
    running: [],
    completedNodes: [],
    unlockedNodes: [],
    interrupted: [],
  },
  y = class {
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
        if (!a.ok) return v;
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
          v
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
  b = r(`workflow`, new y());
