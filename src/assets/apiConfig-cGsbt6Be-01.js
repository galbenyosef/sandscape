// apiConfig-cGsbt6Be 01 — tourapibase
// Lines 1-34 of readable/assets/apiConfig-cGsbt6Be.pretty.js (statement-aligned).
import { a as e, n as t } from "./AuthService-CQeU_0bQ.js";
var apiConfig = {
  get API_BASE_URL() {
    return (
      tourApiBase(`http`) ?? e(`https://sandscape-prod.fly.dev`, `http://localhost:8022`)
    );
  },
  get WS_BASE_URL() {
    return tourApiBase(`ws`) ?? e(`wss://sandscape-prod.fly.dev`, `ws://localhost:8022`);
  },
};
function tourApiBase(e) {
  if (typeof location > `u`) return null;
  let t = location.pathname;
  return !t.startsWith(`/tour`) || t.startsWith(`/tour/claim`)
    ? null
    : `${e === `ws` ? location.origin.replace(/^http/, `ws`) : location.origin}/tour-api`;
}
async function authHeaders() {
  let {
      data: { session: e },
    } = await t.auth.getSession(),
    n = e?.access_token;
  return {
    "Content-Type": `application/json`,
    ...(n ? { Authorization: `Bearer ${n}` } : {}),
  };
}
async function getAccessToken() {
  let {
    data: { session: e },
  } = await t.auth.getSession();
  return e?.access_token || null;
}
