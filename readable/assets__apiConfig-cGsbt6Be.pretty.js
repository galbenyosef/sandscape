import { a as e, n as t } from "./AuthService-CQeU_0bQ.js";
var n = {
  get API_BASE_URL() {
    return (
      r(`http`) ?? e(`https://sandscape-prod.fly.dev`, `http://localhost:8022`)
    );
  },
  get WS_BASE_URL() {
    return r(`ws`) ?? e(`wss://sandscape-prod.fly.dev`, `ws://localhost:8022`);
  },
};
function r(e) {
  if (typeof location > `u`) return null;
  let t = location.pathname;
  return !t.startsWith(`/tour`) || t.startsWith(`/tour/claim`)
    ? null
    : `${e === `ws` ? location.origin.replace(/^http/, `ws`) : location.origin}/tour-api`;
}
async function i() {
  let {
      data: { session: e },
    } = await t.auth.getSession(),
    n = e?.access_token;
  return {
    "Content-Type": `application/json`,
    ...(n ? { Authorization: `Bearer ${n}` } : {}),
  };
}
async function a() {
  let {
    data: { session: e },
  } = await t.auth.getSession();
  return e?.access_token || null;
}
export { i as n, a as r, n as t };
