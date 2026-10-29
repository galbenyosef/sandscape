// avatarUtils-CHOc69Ms 01 — startswith
// Lines 1-7 of readable/assets/avatarUtils-CHOc69Ms.pretty.js (statement-aligned).
import { n as e } from "./AuthService-C8NFtVWb.js";
var t = (t) => {
  if (t)
    return t.startsWith(`http://`) || t.startsWith(`https://`)
      ? t
      : e.storage.from(`avatars`).getPublicUrl(t).data.publicUrl;
};
