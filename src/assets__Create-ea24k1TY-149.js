// assets__Create-ea24k1TY 149 — children
// Lines 49653-49906 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function jV({
  duration: e,
  value: t,
  onChange: n,
  disabled: r,
  label: i = `Clip range`,
  maxDuration: a = e,
  compact: o = !1,
}) {
  let s = Math.min(0.1, e),
    c = (r) => n(OV(r, t, e, a));
  return (0, Z.jsxs)(`div`, {
    className: `motion-range`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `motion-range-heading`,
        children: [
          (0, Z.jsx)(`span`, { children: o ? `${kV(t[0])} – ${kV(t[1])}` : i }),
          (0, Z.jsxs)(`strong`, { children: [(t[1] - t[0]).toFixed(1), `s`] }),
        ],
      }),
      (0, Z.jsxs)(Rp, {
        min: 0,
        max: e || 1,
        step: 0.01,
        minStepsBetweenThumbs: Math.ceil(s / 0.01),
        value: t,
        disabled: r || e <= 0,
        onValueChange: (e) => c(e),
        className: `motion-range-slider`,
        children: [
          (0, Z.jsx)(Gp, {
            className: `motion-range-track`,
            children: (0, Z.jsx)(qp, { className: `motion-range-fill` }),
          }),
          (0, Z.jsx)(em, {
            "aria-label": `${i} in point`,
            "aria-valuetext": `${t[0].toFixed(2)} seconds`,
            className: `motion-range-thumb`,
          }),
          (0, Z.jsx)(em, {
            "aria-label": `${i} out point`,
            "aria-valuetext": `${t[1].toFixed(2)} seconds`,
            className: `motion-range-thumb`,
          }),
        ],
      }),
      !o &&
        (0, Z.jsxs)(`div`, {
          className: `motion-range-inputs`,
          children: [
            (0, Z.jsxs)(`label`, {
              children: [
                `In `,
                (0, Z.jsx)(AV, {
                  ariaLabel: `${i} in seconds`,
                  min: Math.max(0, t[1] - a),
                  max: Math.max(0, t[1] - s),
                  value: t[0],
                  disabled: r,
                  onCommit: (e) => c([e, t[1]]),
                }),
                (0, Z.jsx)(`span`, { children: `s` }),
              ],
            }),
            (0, Z.jsxs)(`label`, {
              children: [
                `Out `,
                (0, Z.jsx)(AV, {
                  ariaLabel: `${i} out seconds`,
                  min: t[0] + s,
                  max: Math.min(e, t[0] + a),
                  value: t[1],
                  disabled: r,
                  onCommit: (e) => c([t[0], e]),
                }),
                (0, Z.jsx)(`span`, { children: `s` }),
              ],
            }),
          ],
        }),
    ],
  });
}
async function MV(e, t) {
  let {
    Input: n,
    BlobSource: r,
    ALL_FORMATS: i,
    Output: a,
    BufferTarget: s,
    Mp4OutputFormat: c,
    WebMOutputFormat: l,
    Conversion: u,
  } = await o(
    async () => {
      let {
        Input: e,
        BlobSource: t,
        ALL_FORMATS: n,
        Output: r,
        BufferTarget: i,
        Mp4OutputFormat: a,
        WebMOutputFormat: o,
        Conversion: s,
      } = await import(`./src-C4EM-vcD.js`).then((e) => e.t);
      return {
        Input: e,
        BlobSource: t,
        ALL_FORMATS: n,
        Output: r,
        BufferTarget: i,
        Mp4OutputFormat: a,
        WebMOutputFormat: o,
        Conversion: s,
      };
    },
    __vite__mapDeps([0, 1]),
  );
  t.throwIfAborted();
  let d = new n({ source: new r(e), formats: i }),
    f,
    p = () => {
      f?.cancel();
    };
  t.addEventListener(`abort`, p);
  try {
    let n = await d.computeDuration();
    if (!Number.isFinite(n) || n <= 0)
      throw Error(`This video has no readable duration. Try another take.`);
    if (n > 120.1) throw Error(`Choose a video of 2 minutes or less.`);
    let r = e.type.includes(`webm`) || e.name.toLowerCase().endsWith(`.webm`),
      i = new s(),
      o = new a({
        target: i,
        format: r ? new l() : new c({ fastStart: `in-memory` }),
      });
    if (
      ((f = await u.init({ input: d, output: o, audio: { discard: !0 } })),
      t.throwIfAborted(),
      !f.isValid)
    )
      throw Error(`This video cannot be prepared. Try an MP4 recording.`);
    if ((await f.execute(), t.throwIfAborted(), !i.buffer))
      throw Error(`The recording could not be finalized.`);
    return {
      file: new File(
        [i.buffer],
        e.name.replace(/\.[^.]+$/, ``) + (r ? `.webm` : `.mp4`),
        { type: r ? `video/webm` : `video/mp4` },
      ),
      duration: n,
    };
  } finally {
    (t.removeEventListener(`abort`, p), d.dispose());
  }
}
var NV = () =>
    typeof crypto < `u` && crypto.randomUUID
      ? crypto.randomUUID()
      : `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function (e) {
          let t = (Math.random() * 16) | 0;
          return (e === `x` ? t : (t & 3) | 8).toString(16);
        }),
  PV = new Map(),
  FV = Promise.resolve();
function IV(e) {
  let t = PV.get(e);
  if (t) return t;
  let n = FV.then(async () => {
    let { scene: t } = await new C().loadAsync(e),
      n;
    try {
      ((n = new Ta({ alpha: !0, antialias: !0 })),
        n.setSize(160, 160),
        (n.outputColorSpace = Sa));
      let e = new oa();
      e.add(t, new Ri(16777215, 6582400, 3));
      let r = new Bi(16777215, 3);
      (r.position.set(2, 4, 5), e.add(r));
      let i = new sa().setFromObject(t),
        a = i.getCenter(new Y()),
        o = i.getSize(new Y()),
        s = new ji(35, 1, 0.01, 1e4),
        c = (Math.max(o.x, o.y, o.z, 0.1) * 0.6) / Math.tan(Si.degToRad(17.5));
      return (
        s.position
          .copy(a)
          .add(new Y(0.15, 0.05, 1).normalize().multiplyScalar(c)),
        s.lookAt(a),
        n.render(e, s),
        n.domElement.toDataURL(`image/png`)
      );
    } finally {
      (t.traverse((e) => {
        let t = e;
        t.geometry?.dispose();
        let n = Array.isArray(t.material)
          ? t.material
          : t.material
            ? [t.material]
            : [];
        for (let e of n) {
          for (let t of Object.values(e))
            t instanceof wi &&
              (typeof ImageBitmap < `u` &&
                t.image instanceof ImageBitmap &&
                t.image.close(),
              t.dispose());
          e.dispose();
        }
        e instanceof da && e.skeleton.dispose();
      }),
        n?.dispose(),
        n?.forceContextLoss());
    }
  });
  return (
    (FV = n.then(
      () => void 0,
      () => void 0,
    )),
    PV.set(e, n),
    PV.size > 24 && PV.delete(PV.keys().next().value),
    n
  );
}
function LV({ imageUrl: e, modelUrl: t }) {
  let [n, r] = (0, X.useState)(),
    [i, a] = (0, X.useState)(),
    o = e && e !== n ? e : i?.url === t ? i?.image : void 0;
  return (
    (0, X.useEffect)(() => {
      if (o || !t) return;
      let e = !1;
      return (
        IV(t)
          .then((n) => {
            e || a({ url: t, image: n });
          })
          .catch(() => {}),
        () => {
          e = !0;
        }
      );
    }, [o, t]),
    o
      ? (0, Z.jsx)(`img`, { src: o, alt: ``, onError: () => r(e) })
      : (0, Z.jsx)(`span`, {
          className: `motion-character-placeholder`,
          children: (0, Z.jsx)(On, { size: 26 }),
        })
  );
}
