// Create-ea24k1TY 135 — error
// Lines 44855-45519 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var kI = new (class {
    async getCaptureCapabilities(e) {
      let t = await fetch(
        `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/performance-capture`,
        { headers: await An() },
      );
      if (!t.ok) throw Error((await OI(t)).error);
      return t.json();
    }
    async capturePerformance(e, t) {
      try {
        let n = new FormData();
        (n.append(`file`, t.file),
          n.append(`asset_id`, t.assetId),
          n.append(`name`, t.name),
          t.animationId && n.append(`animation_id`, t.animationId),
          n.append(`in_sec`, String(t.inSec)),
          n.append(`out_sec`, String(t.outSec)),
          n.append(`request_id`, t.requestId),
          n.append(`max_charge`, String(t.maxCharge)));
        let r = await jn(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/performance-capture`,
            {
              method: `POST`,
              headers: r ? { Authorization: `Bearer ${r}` } : {},
              body: n,
            },
          );
        return i.ok ? i.json() : { success: !1, ...(await OI(i)) };
      } catch (e) {
        return {
          success: !1,
          error: e instanceof Error ? e.message : `Could not submit this take`,
        };
      }
    }
    async savePanelClip(e, t) {
      try {
        let n = await fetch(
          `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/animation-clips/edit`,
          { method: `POST`, headers: await An(), body: JSON.stringify(t) },
        );
        return n.ok ? n.json() : { success: !1, ...(await OI(n)) };
      } catch (e) {
        return {
          success: !1,
          error: e instanceof Error ? e.message : `Could not save the clip`,
        };
      }
    }
    async getAnimationPlan(e) {
      try {
        let t = await An(),
          n = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/animation-plan`,
            { headers: t },
          );
        return n.ok
          ? await n.json()
          : (console.error(
              `[AnimationService] getAnimationPlan HTTP error: ${n.status}`,
            ),
            { success: !1, error: `Server error: ${n.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} getting animation plan:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to load animation plan. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to load animation plan`,
          }
        );
      }
    }
    async replaceAnimationPlan(e, t) {
      try {
        let n = await An(),
          r = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/animation-plan`,
            { method: `PUT`, headers: n, body: JSON.stringify(t) },
          );
        return r.ok
          ? await r.json()
          : { success: !1, error: `Server error: ${r.status}` };
      } catch (e) {
        return {
          success: !1,
          error: Mr(e)
            ? `Network error: Unable to save animation plan.`
            : e instanceof Error
              ? e.message
              : `Failed to save animation plan`,
        };
      }
    }
    async getCharacterAnimations(e, t) {
      try {
        let n = await An(),
          r = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations`,
            { headers: n },
          );
        if (!r.ok) {
          let e =
            r.status === 404
              ? `Character not found`
              : `Server error: ${r.status}`;
          return (
            console.error(
              `[AnimationService] getCharacterAnimations failed: ${e}`,
            ),
            { success: !1, error: e }
          );
        }
        return await r.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(
            `[AnimationService] ${t} getting character animations:`,
            e,
          ),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to load animations. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to load animations`,
          }
        );
      }
    }
    async updateAnimation(e, t, n, r) {
      try {
        let i = await An(),
          a = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations/${encodeURIComponent(n)}`,
            { method: `PATCH`, headers: i, body: JSON.stringify(r) },
          );
        if (!a.ok) {
          let e =
            a.status === 404
              ? `Animation not found`
              : `Server error: ${a.status}`;
          return (
            console.error(`[AnimationService] updateAnimation failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await a.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} updating animation:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to update animation. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to update animation`,
          }
        );
      }
    }
    async getStateMachine(e, t) {
      try {
        let n = await An(),
          r = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/state-machine`,
            { headers: n },
          );
        if (!r.ok) {
          let e =
            r.status === 404
              ? `State machine not found`
              : `Server error: ${r.status}`;
          return (
            console.error(`[AnimationService] getStateMachine failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await r.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} getting state machine:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to load state machine. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to load state machine`,
          }
        );
      }
    }
    async saveStateMachine(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/state-machine`,
            { method: `PUT`, headers: r, body: JSON.stringify(n) },
          );
        return i.ok
          ? await i.json()
          : (console.error(
              `[AnimationService] saveStateMachine HTTP error: ${i.status}`,
            ),
            { success: !1, error: `Server error: ${i.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} saving state machine:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to save state machine. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to save state machine`,
          }
        );
      }
    }
    async applyLoop(e, t, n, r, i, a) {
      try {
        let o = await An(),
          s = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations/${encodeURIComponent(n)}/loop`,
            {
              method: `POST`,
              headers: o,
              body: JSON.stringify({
                in_frame: r,
                out_frame: i,
                blend_frames: a,
              }),
            },
          );
        if (!s.ok) {
          let e =
            s.status === 404
              ? `Animation not found`
              : `Server error: ${s.status}`;
          return (
            console.error(`[AnimationService] applyLoop failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await s.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} applying loop:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to apply loop. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to apply loop`,
          }
        );
      }
    }
    async extractClip(e, t, n, r) {
      try {
        let i = await An(),
          a = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations/${encodeURIComponent(n)}/extract-clip`,
            { method: `POST`, headers: i, body: JSON.stringify(r) },
          );
        if (!a.ok) {
          let e =
            a.status === 404
              ? `Animation not found`
              : `Server error: ${a.status}`;
          return (
            console.error(`[AnimationService] extractClip failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await a.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} extracting clip:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to extract clip. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to extract clip`,
          }
        );
      }
    }
    async uploadLibraryAnimation(e, t) {
      try {
        let n = await jn(),
          r = new FormData();
        (r.append(`file`, t.file, t.fileName),
          r.append(`name`, t.name),
          t.sourceFile &&
            r.append(
              `source_file`,
              t.sourceFile,
              t.sourceFileName || `source.fbx`,
            ));
        let i = await fetch(
          `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/animation-library/upload`,
          {
            method: `POST`,
            headers: n ? { Authorization: `Bearer ${n}` } : {},
            body: r,
          },
        );
        if (!i.ok) {
          let { error: e } = await OI(i);
          return (
            console.error(
              `[AnimationService] uploadLibraryAnimation failed: ${e}`,
            ),
            { success: !1, error: e }
          );
        }
        return await i.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(
            `[AnimationService] ${t} uploading library animation:`,
            e,
          ),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to upload animation. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to upload animation`,
          }
        );
      }
    }
    async updateLibraryAnimation(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/animation-library/${encodeURIComponent(t)}`,
            { method: `PATCH`, headers: r, body: JSON.stringify(n) },
          );
        if (!i.ok) {
          let { error: e } = await OI(i);
          return (
            console.error(
              `[AnimationService] updateLibraryAnimation failed: ${e}`,
            ),
            { success: !1, error: e }
          );
        }
        return await i.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(
            `[AnimationService] ${t} updating library animation:`,
            e,
          ),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to update animation. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to update animation`,
          }
        );
      }
    }
    async deleteLibraryAnimation(e, t) {
      try {
        let n = await An(),
          r = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/animation-library/${encodeURIComponent(t)}`,
            { method: `DELETE`, headers: n },
          );
        if (!r.ok) {
          let { error: e } = await OI(r);
          return (
            console.error(
              `[AnimationService] deleteLibraryAnimation failed: ${e}`,
            ),
            { success: !1, error: e }
          );
        }
        return await r.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(
            `[AnimationService] ${t} deleting library animation:`,
            e,
          ),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to delete animation. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to delete animation`,
          }
        );
      }
    }
    async extractLibraryClip(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/animation-library/${encodeURIComponent(t)}/extract-clip`,
            { method: `POST`, headers: r, body: JSON.stringify(n) },
          );
        if (!i.ok) {
          let { error: e } = await OI(i);
          return (
            console.error(`[AnimationService] extractLibraryClip failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await i.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} extracting library clip:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to extract clip. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to extract clip`,
          }
        );
      }
    }
    async retargetLibraryAnimation(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/animation-library/${encodeURIComponent(t)}/retarget`,
            { method: `POST`, headers: r, body: JSON.stringify(n) },
          );
        if (!i.ok) {
          let { error: e, error_code: t } = await OI(i);
          return (
            console.error(
              `[AnimationService] retargetLibraryAnimation failed: ${e}`,
            ),
            { success: !1, error: e, error_code: t }
          );
        }
        return await i.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(
            `[AnimationService] ${t} retargeting library animation:`,
            e,
          ),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to retarget animation. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to retarget animation`,
          }
        );
      }
    }
    async addAnimation(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations`,
            { method: `POST`, headers: r, body: JSON.stringify(n) },
          );
        if (!i.ok) {
          let { error: e } = await OI(i);
          return (
            console.error(`[AnimationService] addAnimation failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await i.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} adding animation:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to add animation. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to add animation`,
          }
        );
      }
    }
    async stripRootMotion(e, t, n, r) {
      try {
        let i = await An(),
          a = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations/${encodeURIComponent(n)}/strip-root-motion`,
            { method: `POST`, headers: i, body: JSON.stringify({ mode: r }) },
          );
        if (!a.ok) {
          let e =
            a.status === 404
              ? `Animation not found`
              : `Server error: ${a.status}`;
          return (
            console.error(`[AnimationService] stripRootMotion failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await a.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} stripping root motion:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to strip root motion. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to strip root motion`,
          }
        );
      }
    }
    async saveAnimationState(e, t, n, r) {
      try {
        let i = await An(),
          a = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations/${encodeURIComponent(n)}/animation-state`,
            { method: `PUT`, headers: i, body: JSON.stringify(r) },
          );
        return a.ok
          ? await a.json()
          : { success: !1, error: `Server error: ${a.status}` };
      } catch (e) {
        return (
          console.error(`[AnimationService] Error saving animation state:`, e),
          {
            success: !1,
            error:
              e instanceof Error ? e.message : `Failed to save animation state`,
          }
        );
      }
    }
    async bake(e, t, n, r) {
      try {
        let i = await An(),
          a = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations/${encodeURIComponent(n)}/bake`,
            {
              method: `POST`,
              headers: i,
              ...(r ? { body: JSON.stringify(r) } : {}),
            },
          );
        return a.ok ? await a.json() : { success: !1, ...(await OI(a)) };
      } catch (e) {
        return (
          console.error(`[AnimationService] Error baking animation:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Failed to bake animation`,
          }
        );
      }
    }
    async regenerateAnimation(e, t, n, r) {
      try {
        let i = await An(),
          a = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations/${encodeURIComponent(n)}/generate`,
            {
              method: `POST`,
              headers: i,
              body: JSON.stringify({ feedback: r || `` }),
            },
          );
        if (!a.ok) {
          if (a.status === 404)
            return { success: !1, error: `Animation not found` };
          let { error: e, error_code: t } = await OI(a);
          return (
            console.error(
              `[AnimationService] regenerateAnimation failed: ${e}`,
            ),
            { success: !1, error: e, error_code: t }
          );
        }
        return await a.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} regenerating animation:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to regenerate animation. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to regenerate animation`,
          }
        );
      }
    }
    async retargetAnimation(e, t, n, r) {
      try {
        let i = await An(),
          a = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/animations/${encodeURIComponent(n)}/retarget`,
            { method: `POST`, headers: i, body: JSON.stringify(r) },
          );
        if (!a.ok) {
          let { error: e, error_code: t } = await OI(a);
          return (
            console.error(`[AnimationService] retargetAnimation failed: ${e}`),
            { success: !1, error: e, error_code: t }
          );
        }
        return await a.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AnimationService] ${t} retargeting animation:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to retarget animation. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to retarget animation`,
          }
        );
      }
    }
  })(),
  AI = { value: () => {} };
