import { n as e } from "./AuthService-CQeU_0bQ.js";
var t = (t) => {
  if (t)
    return t.startsWith(`http://`) || t.startsWith(`https://`)
      ? t
      : e.storage.from(`avatars`).getPublicUrl(t).data.publicUrl;
};
export { t };
