// avatarUtils-CBd99uWq 01 — startswith
// Lines 1-7 of readable/assets/avatarUtils-CBd99uWq.pretty.js (statement-aligned).
import { n as e } from "./AuthService-CQeU_0bQ.js";
var t = (t) => {
  if (t)
    return t.startsWith(`http://`) || t.startsWith(`https://`)
      ? t
      : e.storage.from(`avatars`).getPublicUrl(t).data.publicUrl;
};
