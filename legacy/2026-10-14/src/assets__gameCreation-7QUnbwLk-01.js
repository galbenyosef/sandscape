// assets__gameCreation-7QUnbwLk 01 — imports
// Lines 1-38 of readable/assets__gameCreation-7QUnbwLk.pretty.js (statement-aligned).
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
