// Create-ea24k1TY 151 — current
// Lines 50452-50801 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function zV(e) {
  e.traverse((e) => {
    let t = e;
    t.geometry?.dispose();
    let n = Array.isArray(t.material)
      ? t.material
      : t.material
        ? [t.material]
        : [];
    for (let e of n) {
      for (let t of Object.values(e)) t instanceof wi && t.dispose();
      e.dispose();
    }
    e instanceof da && e.skeleton.dispose();
  });
}
function BV({
  modelUrl: e,
  animationUrl: t,
  range: n,
  loop: r,
  rootMotion: i,
  onDuration: a,
}) {
  let o = (0, X.useRef)(null),
    [s, c] = (0, X.useState)(!1),
    [l, u] = (0, X.useState)(0),
    [d, f] = (0, X.useState)(!0),
    [p, m] = (0, X.useState)(null),
    h = (0, X.useRef)(0),
    g = (0, X.useRef)(() => void 0),
    _ = (0, X.useRef)({
      range: n,
      loop: r,
      rootMotion: i,
      playing: s,
      onDuration: a,
    });
  return (
    (_.current = {
      range: n,
      loop: r,
      rootMotion: i,
      playing: s,
      onDuration: a,
    }),
    (0, X.useEffect)(() => {
      ((h.current = n[0]), u(n[0]));
    }, [n[0]]),
    (0, X.useEffect)(() => {
      h.current > n[1] && ((h.current = n[1]), u(n[1]));
    }, [n[1]]),
    (0, X.useEffect)(() => {
      let n = o.current;
      if (!n) return;
      let r = !1,
        i = 0,
        a,
        s,
        l = 0,
        d,
        p = !1,
        v = new Y(),
        y = new Y(),
        b = new Y(),
        x = new Y(),
        S = new Y(),
        w = [],
        T = new AbortController(),
        E = new oa(),
        D = new ji(35, 1, 0.01, 1e4),
        O;
      try {
        O = new Ta({ antialias: !0, alpha: !0 });
      } catch {
        (m(
          `3D preview is unavailable on this device. You can still save your clip.`,
        ),
          f(!1));
        return;
      }
      (O.setPixelRatio(Math.min(devicePixelRatio, 2)),
        (O.outputColorSpace = Sa),
        n.appendChild(O.domElement));
      let k = new hl(D, O.domElement);
      ((k.enableDamping = !0),
        (k.enablePan = !1),
        (k.touches.ONE = Ra.ROTATE),
        (k.touches.TWO = Ra.DOLLY_PAN),
        E.add(new Ri(16777215, 5858679, 2.5)));
      let A = new Bi(16777215, 3);
      (A.position.set(3, 5, 4), E.add(A));
      let j = new ResizeObserver(() => {
        let { width: e, height: t } = n.getBoundingClientRect();
        !e ||
          !t ||
          ((D.aspect = e / t), D.updateProjectionMatrix(), O.setSize(e, t, !1));
      });
      (j.observe(n), f(!0), m(null), c(!1));
      let M = new C(),
        N = async (e) => {
          let t = await fetch(e, { signal: T.signal });
          if (!t.ok) throw Error(`The animation file could not be loaded`);
          let n = await M.parseAsync(
            await t.arrayBuffer(),
            new URL(`.`, e).href,
          );
          if (r) throw (zV(n.scene), Error(`Preview closed`));
          return (w.push(n.scene), n);
        };
      (async () => {
        let n = await N(t),
          r = !1;
        return (
          n.scene.traverse((e) => {
            e.geometry?.getAttribute(`position`)?.count > 3 && (r = !0);
          }),
          [n, !r && e ? await N(e) : null]
        );
      })()
        .then(([e, t]) => {
          if (r) return;
          let n = t?.scene || e.scene,
            i = e.animations[0];
          if (!i || i.duration <= 0)
            throw Error(`This file has no playable animation`);
          (E.add(n),
            (a = new xa(n)),
            (s = a.clipAction(i)),
            (l = i.duration),
            s.setLoop(za, 1),
            (s.clampWhenFinished = !0),
            s.play(),
            a.setTime(0),
            n.updateMatrixWorld(!0));
          let o = 0;
          n.traverse((e) => {
            e.isMesh && o++;
          });
          for (let e of [
            `Hips`,
            `hips`,
            `Root`,
            `root`,
            `Armature`,
            `armature`,
          ])
            if (((d = n.getObjectByName(e)), d)) break;
          (d ||
            n.traverse((e) => {
              !d && e instanceof da && (d = e.skeleton.bones[0]);
            }),
            d &&
              (v.copy(d.position),
              (p = i.tracks.some((e) => {
                let t = zi.parseTrackName(e.name);
                return (
                  t.propertyName === `position` &&
                  (t.nodeName === d?.name ||
                    t.nodeName === d?.uuid ||
                    (t.objectName === `bones` && t.objectIndex === d?.name))
                );
              }))),
            n.updateMatrixWorld(!0),
            d?.getWorldPosition(y));
          let c = new sa().setFromObject(n),
            u = new sa();
          (n.traverse((e) => {
            e instanceof aa && u.expandByPoint(e.getWorldPosition(new Y()));
          }),
            (!o ||
              u.getSize(new Y()).length() > c.getSize(new Y()).length() * 20) &&
              (E.add(new pa(n)), c.union(u)),
            c.isEmpty() &&
              ((c = new sa()),
              n.traverse((e) => c.expandByPoint(e.getWorldPosition(new Y())))));
          let m = Math.max(c.getSize(new Y()).length(), 1);
          c.getCenter(S);
          let b = new Xi(m * 2.5, 16, 5660785, 3489096);
          ((b.position.y = c.min.y),
            E.add(b),
            (g.current = () => {
              k.target.copy(S);
              let e =
                (m * 1.15) /
                (2 * Math.tan(Si.degToRad(D.fov / 2)) * Math.min(D.aspect, 1));
              (D.position
                .copy(S)
                .add(new Y(0.3, 0.1, 1).normalize().multiplyScalar(e)),
                k.update());
            }),
            g.current(),
            (h.current = 0),
            _.current.onDuration(i.duration),
            f(!1));
        })
        .catch((e) => {
          r || (m(e.message), f(!1));
        });
      let P = performance.now(),
        F = P,
        I = (e) => {
          if (r) return;
          let t = _.current,
            n = Math.min((e - P) / 1e3, 0.1);
          ((P = e),
            a &&
              (t.playing &&
                document.visibilityState === `visible` &&
                ((h.current += n),
                h.current >= t.range[1] &&
                  ((h.current = t.loop ? t.range[0] : t.range[1]),
                  t.loop || c(!1))),
              s && (s.paused = !1),
              d && p && d.position.copy(v),
              a.setTime(Math.min(h.current, l - 1e-6)),
              d &&
                p &&
                (v.copy(d.position),
                t.rootMotion !== `keep` &&
                  ((d.position.x = 0),
                  (d.position.z = 0),
                  t.rootMotion === `all` && (d.position.y = 0))),
              d &&
                (d.getWorldPosition(b),
                x.subVectors(b, y).setY(0),
                D.position.add(x),
                k.target.add(x),
                S.add(x),
                y.copy(b)),
              e - F > 100 && (u(h.current), (F = e))),
            k.update(),
            O.render(E, D),
            (i = requestAnimationFrame(I)));
        };
      return (
        (i = requestAnimationFrame(I)),
        () => {
          ((r = !0),
            T.abort(),
            cancelAnimationFrame(i),
            j.disconnect(),
            k.dispose(),
            a?.stopAllAction(),
            a && a.uncacheRoot(a.getRoot()));
          let e = new Set([...w, E]);
          (w.forEach((e) => e.removeFromParent()),
            e.forEach(zV),
            O.dispose(),
            O.forceContextLoss(),
            O.domElement.remove());
        }
      );
    }, [e, t]),
    (0, Z.jsxs)(`div`, {
      children: [
        (0, Z.jsxs)(`div`, {
          className: `motion-stage motion-model-stage`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `motion-three-host`,
              ref: o,
              "aria-label": `Interactive animation preview`,
            }),
            d &&
              (0, Z.jsxs)(`div`, {
                className: `motion-stage-overlay`,
                role: `status`,
                children: [
                  (0, Z.jsx)(J, { className: `animate-spin` }),
                  (0, Z.jsx)(`span`, { children: `Loading animation` }),
                ],
              }),
            p &&
              (0, Z.jsx)(`div`, {
                className: `motion-stage-overlay`,
                role: `alert`,
                children: (0, Z.jsx)(`p`, { children: p }),
              }),
            (0, Z.jsx)(`button`, {
              className: `motion-view-reset motion-icon-button`,
              onClick: () => g.current(),
              "aria-label": `Reset 3D camera`,
              children: (0, Z.jsx)(Sn, { size: 16 }),
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `motion-playback`,
          children: [
            (0, Z.jsx)(`button`, {
              className: `motion-icon-button`,
              disabled: d || !!p,
              "aria-label": s ? `Pause animation` : `Play animation`,
              onClick: () => {
                (h.current >= n[1] && (h.current = n[0]), c(!s));
              },
              children: s
                ? (0, Z.jsx)(N, { size: 19 })
                : (0, Z.jsx)(bn, { size: 19 }),
            }),
            (0, Z.jsx)(`input`, {
              type: `range`,
              "aria-label": `Animation playhead`,
              min: n[0],
              max: n[1] || 1,
              step: 0.01,
              value: l,
              disabled: d || !!p,
              onChange: (e) => {
                (c(!1), (h.current = Number(e.target.value)), u(h.current));
              },
            }),
            (0, Z.jsx)(`span`, { children: kV(l) }),
          ],
        }),
      ],
    })
  );
}
function VV({
  isBaking: e,
  bakeError: t,
  dirty: n,
  bakeStale: r,
  animationPath: i,
  bakedPath: a,
}) {
  return e
    ? `baking`
    : t
      ? `failed`
      : n || r
        ? `edited`
        : a && a !== i
          ? `baked`
          : `original`;
}
function HV(e) {
  return e.weight <= 0 ? !1 : e.rotation ? !0 : e.offset.some((e) => e !== 0);
}
function UV({ status: e, ikEnabled: t, ikKeys: n, footLockKeys: r }) {
  if (e !== `baked`) return { ik: !1, footLock: !1 };
  let i = new Set(t),
    a = n.filter((e) => i.has(e.effector)),
    o =
      a.some((e) => e.effector === `hips` && HV(e)) &&
      a.some((e) => e.effector !== `hips`);
  return { ik: a.some(HV) || o, footLock: r.some((e) => e.weight > 0) };
}
