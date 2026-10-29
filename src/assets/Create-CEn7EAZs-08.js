// Create-CEn7EAZs 08 — seq
// Lines 2595-2880 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function sc(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    n = t.kind;
  if (typeof n != `string` || !ine.has(n)) return null;
  let r = (e) => (typeof e == `string` ? e : void 0);
  return {
    sessionId: r(t.session_id),
    taskId: r(t.task_id),
    actionId: r(t.action_id),
    nodeId: typeof t.node_id == `string` ? t.node_id : null,
    seq: typeof t.seq == `number` ? t.seq : 0,
    ts: typeof t.ts == `string` ? t.ts : new Date().toISOString(),
    kind: n,
    child: typeof t.child == `string` ? t.child : null,
    tool: typeof t.tool == `string` ? t.tool : null,
    toolCallId: typeof t.tool_call_id == `string` ? t.tool_call_id : null,
    summary: typeof t.summary == `string` ? t.summary : ``,
    path: typeof t.path == `string` ? t.path : null,
    ok: typeof t.ok == `boolean` ? t.ok : null,
    phase: typeof t.phase == `string` ? t.phase : null,
    skill: r(t.skill),
  };
}
function cc(e, t, n) {
  return { nodeId: e, taskId: t, startedAt: n ?? Date.now(), events: [] };
}
function one(e, t) {
  if (e.length === 0) return [t];
  if (t.seq >= e[e.length - 1].seq) return [...e, t];
  let n = e.length;
  for (let r = 0; r < e.length; r++)
    if (e[r].seq > t.seq) {
      n = r;
      break;
    }
  return [...e.slice(0, n), t, ...e.slice(n)];
}
function lc(e, t) {
  let n = e
    ? { ...e, taskId: e.taskId ?? t.taskId, actionId: e.actionId ?? t.actionId }
    : {
        nodeId: t.nodeId ?? ``,
        taskId: t.taskId,
        actionId: t.actionId,
        startedAt: ane(t.ts),
        events: [],
      };
  if (
    !t.local &&
    Number.isInteger(t.seq) &&
    n.events.some((e) => !e.local && e.seq === t.seq && e.kind === t.kind)
  )
    return n;
  let r = one(n.events, t),
    i = r.length > 500 ? r.slice(r.length - 500) : r;
  return { ...n, events: i };
}
function uc(e, t) {
  let n = e && e.events.length ? e.events[e.events.length - 1] : void 0;
  return {
    nodeId: e?.nodeId ?? null,
    taskId: e?.taskId,
    seq: n ? n.seq + 0.5 : 0,
    ts: new Date().toISOString(),
    kind: `narration`,
    child: null,
    tool: null,
    toolCallId: null,
    summary: t,
    path: null,
    ok: null,
    phase: null,
    local: !0,
  };
}
function sne(e, t) {
  if (e && e.taskId && t.taskId && e.taskId !== t.taskId) return e;
  let n = [...t.events].sort((e, t) => e.seq - t.seq),
    r = e ?? cc(n[0]?.nodeId ?? ``);
  if (t.truncated && n.length > 0) {
    let e = { ...uc(r, rne), nodeId: r.nodeId, seq: n[0].seq - 0.5 };
    r = lc(r, e);
  }
  for (let e of n) r = lc(r, e);
  return r;
}
function cne(e) {
  return e
    ? typeof e.resumeBudget == `number` && e.resumeBudget > 0
      ? e.resumeBudget
      : typeof e.assetSpend?.budget == `number` && e.assetSpend.budget > 0
        ? e.assetSpend.budget
        : null
    : null;
}
function dc(e) {
  if (!e || typeof e != `object`) return !1;
  let t = e;
  return (
    `features` in t || `asset_coverage` in t || `qa` in t || `resumable` in t
  );
}
function lne(e) {
  return e === !1 ? `failed` : e === !0 ? `ok` : `unknown`;
}
function une(e) {
  return e
    .split(/[_\s]+/)
    .filter(Boolean)
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(` `);
}
function fc(e) {
  let t = e.kind === `tool_end`,
    n = e.ok,
    r = (e.tool ?? ``).toLowerCase(),
    i = e.path ? e.path : null,
    a;
  switch (r) {
    case `draft`:
      a = t ? `Drafted` : `Drafting the next change`;
      break;
    case `read`:
      a = `Read`;
      break;
    case `write`:
      a = t ? `Wrote` : `Write`;
      break;
    case `edit`:
      a = t ? `Edited` : `Edit`;
      break;
    case `grep`:
      a = t ? `Searched` : `Search`;
      break;
    case `ls`:
      a = t ? `Listed` : `List`;
      break;
    case `bash`:
      a = t ? (n === !1 ? `Command failed` : `Command finished`) : `Command`;
      break;
    case `browser_qa`:
      a = t
        ? n === !1
          ? `Browser test failed`
          : `Browser test passed`
        : `Browser test`;
      break;
    case `report_result`:
      a = t ? `Reported` : `Report`;
      break;
    case `context_read`:
      a = `Read docs`;
      break;
    case `context_write`:
      a = `Update docs`;
      break;
    case `asset_get`:
    case `asset_delete`:
      a = `Assets`;
      break;
    case `asset_add`:
      a = `Registering asset`;
      break;
    case `asset_update`:
      a = `Updating asset`;
      break;
    case `generate_images_from_text`:
      a = `Generating images`;
      break;
    case `generate_image_fast`:
      a = `Generating a draft image`;
      break;
    case `edit_image`:
      a = `Editing an image`;
      break;
    case `generate_3d_asset_from_image`:
      a = `Generating a 3D model`;
      break;
    case `generate_audio_from_text`:
      a = `Generating music`;
      break;
    case `generate_sfx_from_text`:
      a = `Generating a sound effect`;
      break;
    case `speech_synthesis`:
      a = `Generating a voice line`;
      break;
    case `voice_design`:
      a = `Designing a voice`;
      break;
    case `voice_changer`:
      a = `Re-voicing audio`;
      break;
    case `rig_character_from_concept`:
      a = `Rigging a character`;
      break;
    case `generate_retargeted_animation`:
      a = `Generating an animation`;
      break;
    case `generate_animation`:
      a = `Generating animation`;
      break;
    case `add_animation`:
      a = `Planning animation`;
      break;
    case `update_animation`:
      a = `Updating animation`;
      break;
    case `strip_root_motion`:
      a = `Stripping root motion`;
      break;
    case `apply_loop`:
      a = `Looping an animation`;
      break;
    case `set_state_machine`:
      a = `Setting the state machine`;
      break;
    case `get_state_machine`:
      a = `Reading the state machine`;
      break;
    case `get_animation_plan`:
      a = `Reading the animation plan`;
      break;
    case `list_animations`:
      a = `Listing animations`;
      break;
    case `estimate_depth`:
      a = `Estimating depth`;
      break;
    case `list_voices`:
      a = `Listing voices`;
      break;
    case `append_work_log`:
      a = `Work log`;
      break;
    case `spawn_coder`:
      a = `Module`;
      break;
    default:
      a = r ? une(e.tool ?? r) : `Tool`;
      break;
  }
  return { verb: a, detail: i };
}
function pc(e) {
  return Array.isArray(e) ? e.filter((e) => typeof e == `string`) : [];
}
function mc(e) {
  let t = e.toLowerCase();
  return /pass|ok|success|green/.test(t)
    ? !0
    : (/skip/.test(t) || !/fail|error|red/.test(t)) && null;
}
function dne(e) {
  if (`qa` in e && e.qa != null) return e.qa;
  let t = e.report;
  if (t && typeof t == `object`) {
    let e = t.outputs;
    if (e && typeof e == `object`) return e.qa;
  }
}
function fne(e) {
  if (e == null) return;
  if (typeof e != `object`) {
    console.warn(`[parseCodingResult] asset_spend is not an object — ignoring`);
    return;
  }
  let t = e;
  if (typeof t.budget != `number` || typeof t.spent != `number`) {
    console.warn(
      `[parseCodingResult] asset_spend has no numeric budget/spent — ignoring`,
    );
    return;
  }
  let n = [];
  if (Array.isArray(t.created))
    for (let e of t.created) {
      if (!e || typeof e != `object`) continue;
      let t = e,
        r = typeof t.asset_name == `string` ? t.asset_name : null,
        i = typeof t.path == `string` ? t.path : null;
      r && i && n.push({ assetName: r, path: i });
    }
  return { budget: t.budget, spent: t.spent, created: n };
}
