// SceneEditor-NC7_0wmu 24 — messages
// Lines 18021-18090 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Au = class {
    constructor() {
      ((this.messages = {}),
        (this.messageIdNext = 0),
        (this.worker = new dc()),
        (this.worker.onmessage = (e) => this.onMessage(e)));
    }
    makeMessageId() {
      return ++this.messageIdNext;
    }
    makeMessagePromiseId() {
      let e = this.makeMessageId();
      return {
        id: e,
        promise: new Promise((t, n) => {
          this.messages[e] = { resolve: t, reject: n };
        }),
      };
    }
    onMessage(e) {
      let { id: t, result: n, error: r } = e.data,
        i = this.messages[t];
      i && (delete this.messages[t], r ? i.reject(r) : i.resolve(n));
    }
    async call(e, t) {
      let { id: n, promise: r } = this.makeMessagePromiseId();
      return (
        this.worker.postMessage(
          { name: e, args: t, id: n },
          { transfer: nu(t) },
        ),
        r
      );
    }
  },
  ju = 4,
  Mu = 0,
  Nu = [],
  Pu = [];
async function Fu() {
  let e = Nu.shift();
  if (e) return e;
  if (Mu < ju) {
    let e = new Au();
    return ((Mu += 1), e);
  }
  return new Promise((e) => {
    Pu.push(e);
  });
}
function Iu(e) {
  if (Mu > ju) {
    --Mu;
    return;
  }
  let t = Pu.shift();
  if (t) {
    t(e);
    return;
  }
  Nu.push(e);
}
async function Lu(e) {
  let t = await Fu();
  try {
    return await e(t);
  } finally {
    Iu(t);
  }
}
