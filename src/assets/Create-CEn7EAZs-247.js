// Create-CEn7EAZs 247 — jsx
// Lines 83567-83890 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function hpe({
  isLeftCollapsed: e,
  setIsLeftCollapsed: t,
  sessionInfo: n,
  presenceUsers: r,
  ownerUserId: i,
  setInviteDialogOpen: a,
  scrollAreaRef: o,
  messages: s,
  handleReplyToMessage: c,
  handleVote: l,
  handleInquiryAnswer: u,
  isTyping: d,
  ongoingTasks: f,
  inquiryActive: p,
  inquiryCurrentIndex: m,
  inquiryTotal: h,
  newMessage: g,
  setNewMessage: _,
  handleSendMessage: v,
  replyToMessage: y,
  setReplyToMessage: b,
  sessionUserCount: x,
}) {
  return (0, Z.jsx)(`div`, {
    className: `h-full m-1.5 mt-0 bg-card rounded-lg border border-border flex flex-col overflow-hidden`,
    "data-tour": `tour-chat-panel`,
    children: e
      ? (0, Z.jsx)(`div`, {
          className: `p-2 flex justify-center h-full`,
          children: (0, Z.jsx)(`button`, {
            onClick: () => {
              t(!1);
            },
            className: `p-2 hover:bg-accent rounded transition-colors`,
            title: `Expand chat`,
            children: (0, Z.jsx)(Ss, { className: `h-4 w-4` }),
          }),
        })
      : (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between px-3 pt-3 pb-2 shrink-0 border-b border-border`,
              children: [
                (0, Z.jsx)(q0, { sessionId: n?.session_id }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1`,
                  children: [
                    (0, Z.jsx)(eee, { users: r, ownerUserId: i }),
                    (0, Z.jsx)(S, {
                      variant: `ghost`,
                      size: `sm`,
                      className: `gap-1 h-7 text-xs px-1.5 text-muted-foreground hover:text-foreground`,
                      onClick: () => a(!0),
                      children: (0, Z.jsx)(Er, { className: `h-3 w-3` }),
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex flex-col flex-1 overflow-hidden p-3 pt-2`,
              children: [
                (0, Z.jsx)(D4, {
                  scrollAreaRef: o,
                  messages: s,
                  handleReplyToMessage: c,
                  handleVote: l,
                  handleInquiryAnswer: u,
                  isTyping: d,
                  ongoingTasks: f,
                }),
                (0, Z.jsx)(`div`, {
                  className: `shrink-0`,
                  children: (0, Z.jsx)(O4, {
                    inquiryActive: p,
                    inquiryCurrentIndex: m,
                    inquiryTotal: h,
                    newMessage: g,
                    setNewMessage: _,
                    handleSendMessage: v,
                    replyToMessage: y,
                    setReplyToMessage: b,
                    sessionUserCount: x,
                    presenceUsers: r,
                  }),
                }),
              ],
            }),
          ],
        }),
  });
}
var k4 = new (class {
  get baseUrl() {
    return `${yn.API_BASE_URL}/api/editor`;
  }
  async request(e, t = {}, n) {
    let r = await _n(),
      i = await fetch(`${this.baseUrl}${e}`, {
        ...t,
        headers: { ...r, ...(t.headers || {}) },
        signal: n,
      });
    if (!i.ok) {
      let e = await i.json().catch(() => ({ detail: i.statusText })),
        t = e.detail || e.error || `Request failed: ${i.status}`;
      throw Error(t);
    }
    return i.json();
  }
  async listFiles(e, t) {
    return this.request(`/files/${e}`, {}, t);
  }
  async readFile(e, t, n) {
    if (yn.API_BASE_URL.endsWith(`/tour-api`)) {
      let r = t.split(`/`).pop() || t,
        i = !/\.(js|mjs|json|html|css|md|txt|command|gitignore)$/i.test(r),
        a = await fetch(
          `${yn.API_BASE_URL}/api/game/${encodeURIComponent(e)}/${t}`,
          { signal: n },
        );
      if (!a.ok) throw Error(`Could not read ${t}`);
      let o = i ? null : await a.text(),
        s = /\.(js|mjs)$/i.test(r)
          ? `javascript`
          : r.split(`.`).pop() || `plaintext`;
      return {
        path: t,
        name: r,
        size: o?.length ?? 0,
        binary: i,
        language: s,
        content: o,
      };
    }
    let r = new URLSearchParams({ path: t });
    return this.request(`/file/${e}?${r}`, {}, n);
  }
  async writeFile(e, t, n, r) {
    return this.request(
      `/file/${e}`,
      { method: `PUT`, body: JSON.stringify({ path: t, content: n }) },
      r,
    );
  }
  async gitStatus(e, t) {
    return this.request(`/git/status/${e}`, {}, t);
  }
  async gitDiff(e, t, n = !1, r) {
    let i = new URLSearchParams({ path: t, staged: String(n) });
    return this.request(`/git/diff/${e}?${i}`, {}, r);
  }
  async gitStage(e, t, n) {
    return this.request(
      `/git/stage/${e}`,
      { method: `POST`, body: JSON.stringify({ paths: t }) },
      n,
    );
  }
  async gitUnstage(e, t, n) {
    return this.request(
      `/git/unstage/${e}`,
      { method: `POST`, body: JSON.stringify({ paths: t }) },
      n,
    );
  }
  async gitCommit(e, t, n) {
    return this.request(
      `/git/commit/${e}`,
      { method: `POST`, body: JSON.stringify({ message: t }) },
      n,
    );
  }
  async gitLog(e, t = 50, n) {
    let r = new URLSearchParams({ limit: String(t) });
    return this.request(`/git/log/${e}?${r}`, {}, n);
  }
  async gitShow(e, t, n) {
    let r = new URLSearchParams({ commit: t });
    return this.request(`/git/show/${e}?${r}`, {}, n);
  }
  async uploadFile(e, t, n = ``) {
    let r = await _n();
    delete r[`Content-Type`];
    let i = new FormData();
    (i.append(`file`, t), i.append(`path`, n));
    let a = await fetch(`${this.baseUrl}/upload/${e}`, {
      method: `POST`,
      headers: r,
      body: i,
    });
    if (!a.ok) {
      let e = await a.json().catch(() => ({ detail: a.statusText }));
      throw Error(e.detail || `Upload failed: ${a.status}`);
    }
    return a.json();
  }
  async downloadFile(e, t) {
    let n = await _n(),
      r = new URLSearchParams({ path: t }),
      i = await fetch(`${this.baseUrl}/download/${e}?${r}`, { headers: n });
    if (!i.ok) {
      let e = await i.json().catch(() => ({ detail: i.statusText }));
      throw Error(e.detail || `Download failed: ${i.status}`);
    }
    return i.blob();
  }
  async downloadProjectZip(e) {
    let t = await _n(),
      n = await fetch(`${this.baseUrl}/download-project/${e}`, { headers: t });
    if (!n.ok) {
      let e = await n.json().catch(() => ({ detail: n.statusText }));
      throw Error(e.detail || `Project download failed: ${n.status}`);
    }
    return n.blob();
  }
  async uploadProjectZip(e, t, n) {
    let r = await _n();
    delete r[`Content-Type`];
    let i = new FormData();
    return (
      i.append(`file`, t),
      new Promise((t, a) => {
        let o = new XMLHttpRequest();
        o.open(`POST`, `${this.baseUrl}/upload-project/${e}`);
        for (let [e, t] of Object.entries(r))
          e.toLowerCase() !== `content-type` && o.setRequestHeader(e, t);
        (n &&
          o.upload.addEventListener(`progress`, (e) => {
            e.lengthComputable && n(e.loaded, e.total);
          }),
          o.addEventListener(`load`, () => {
            if (o.status >= 200 && o.status < 300)
              try {
                t(JSON.parse(o.responseText));
              } catch {
                a(Error(`Invalid JSON response`));
              }
            else
              try {
                let e = JSON.parse(o.responseText);
                a(Error(e.detail || `Project upload failed: ${o.status}`));
              } catch {
                a(Error(`Project upload failed: ${o.status}`));
              }
          }),
          o.addEventListener(`error`, () =>
            a(Error(`Network error during upload`)),
          ),
          o.addEventListener(`abort`, () =>
            a(Object.assign(Error(`Upload aborted`), { name: `AbortError` })),
          ),
          o.send(i));
      })
    );
  }
})();
function gpe(e, t) {
  let n = e.split(`.`).pop()?.toLowerCase() || ``,
    r = `h-4 w-4 flex-shrink-0`;
  if (t)
    switch (n) {
      case `png`:
      case `jpg`:
      case `jpeg`:
      case `gif`:
      case `svg`:
      case `webp`:
      case `ico`:
      case `bmp`:
        return (0, Z.jsx)(Wo, { className: `${r} text-green-400` });
      case `glb`:
      case `gltf`:
      case `obj`:
      case `fbx`:
      case `stl`:
      case `dae`:
        return (0, Z.jsx)(I, { className: `${r} text-cyan-400` });
      case `mp3`:
      case `wav`:
      case `ogg`:
      case `flac`:
      case `aac`:
        return (0, Z.jsx)(Nt, { className: `${r} text-purple-400` });
      case `mp4`:
      case `webm`:
      case `avi`:
        return (0, Z.jsx)(Zt, { className: `${r} text-pink-400` });
      case `zip`:
      case `tar`:
      case `gz`:
        return (0, Z.jsx)(Co, { className: `${r} text-gray-400` });
      default:
        return (0, Z.jsx)(Yo, { className: `${r} text-gray-400` });
    }
  switch (n) {
    case `js`:
    case `mjs`:
    case `jsx`:
      return (0, Z.jsx)(Uo, { className: `${r} text-yellow-400` });
    case `ts`:
    case `tsx`:
      return (0, Z.jsx)(Uo, { className: `${r} text-blue-400` });
    case `html`:
    case `htm`:
      return (0, Z.jsx)(Uo, { className: `${r} text-orange-400` });
    case `css`:
    case `scss`:
    case `less`:
      return (0, Z.jsx)(Uo, { className: `${r} text-blue-300` });
    case `json`:
      return (0, Z.jsx)(Go, { className: `${r} text-yellow-300` });
    case `glsl`:
    case `vert`:
    case `frag`:
    case `shader`:
      return (0, Z.jsx)(ko, { className: `${r} text-emerald-400` });
    case `md`:
      return (0, Z.jsx)(zt, { className: `${r} text-gray-300` });
    default:
      return (0, Z.jsx)(zt, { className: `${r} text-gray-400` });
  }
}
