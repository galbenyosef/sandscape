// SceneEditor-NC7_0wmu 75 — math
// Lines 36257-36480 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Wb(e, t) {
  let n = new nt();
  ((n.name = `__scene_editor_visualizers`),
    (n.userData.editorOnly = !0),
    (n.renderOrder = 1e3),
    e.updateMatrixWorld(!0));
  for (let r of t) {
    let t = e.getObjectByProperty(`uuid`, r.ownerUuid);
    if (!t || t.userData.editorOnly) continue;
    let i = t.userData,
      a = r.valuePath ? Zh(i, r.valuePath) : void 0,
      o = r.positionPath ? Zh(i, r.positionPath) : void 0,
      s = r.sizePath ? Zh(i, r.sizePath) : a,
      c = r.directionPath ? Zh(i, r.directionPath) : a,
      l = r.lookAtPath ? Zh(i, r.lookAtPath) : void 0,
      u = 2282478,
      d = null;
    if (r.kind === `sphere`)
      d = zb(
        Math.abs(typeof s == `number` ? s : typeof a == `number` ? a : 1),
        u,
      );
    else if (r.kind === `ring`)
      ((d = Rb(
        Math.abs(typeof s == `number` ? s : typeof a == `number` ? a : 1),
        u,
      )),
        (d.rotation.x = -Math.PI / 2));
    else if (r.kind === `point` || r.kind === `localPoint`) {
      let e = new nt();
      (e.add(Lb(new tt(0.12), u)),
        e.add(
          new G(
            new tt(0.17),
            new Ne({ color: u, transparent: !0, opacity: 0.18, depthTest: !1 }),
          ),
        ),
        (d = e));
    } else if (r.kind === `box`) {
      let e = Pb(s);
      d = Lb(new Lt(Math.abs(e.x), Math.abs(e.y), Math.abs(e.z)), u);
    } else if (r.kind === `plane`) {
      let e = Pb(s);
      d = Lb(new De(Math.abs(e.x), Math.abs(e.y)), u);
    } else if (r.kind === `direction`) {
      let e = Nb(c);
      if (e && e.lengthSq() > 0) {
        let n = Hb(t, o, !0);
        d = Bb(n, r.lookAtPath ? e : n.clone().add(e), u);
      }
    } else
      r.kind === `scalar`
        ? (d = Ub(String(a)))
        : r.kind === `color`
          ? (d = new G(
              new hn(0.16, 16, 10),
              new Ne({ color: Fb(a), depthTest: !1 }),
            ))
          : r.kind === `quaternion` &&
            Array.isArray(a) &&
            a.length >= 4 &&
            a.slice(0, 4).every((e) => typeof e == `number`) &&
            ((d = new rn(0.7)),
            d.quaternion.set(a[0], a[1], a[2], a[3]).normalize());
    if (d) {
      if (
        ((d.name = `visualizer:${r.id}`),
        (d.userData.editorOnly = !0),
        d.traverse((e) => {
          ((e.userData.editorOnly = !0), (e.renderOrder = 1e3));
        }),
        (r.kind === `point` || r.kind === `localPoint`) &&
          r.valuePath &&
          (d.userData.visualizerEdit = {
            id: r.id,
            ownerUuid: r.ownerUuid,
            valuePath: r.valuePath,
            local: r.kind === `localPoint` || !!r.positionPath,
          }),
        !d.userData.positionApplied)
      ) {
        let e =
          o ?? (r.kind === `point` || r.kind === `localPoint` ? a : void 0);
        d.position.copy(Hb(t, e, r.kind === `localPoint` || !!r.positionPath));
      }
      if (r.lookAtPath && r.kind !== `direction`) {
        let e = Nb(l);
        e && d.lookAt(e);
      }
      n.add(d);
    }
  }
  return n;
}
function Gb(e) {
  e.traverse((e) => {
    e instanceof G
      ? (e.geometry.dispose(),
        Array.isArray(e.material)
          ? e.material.forEach((e) => e.dispose())
          : e.material.dispose())
      : e instanceof Ge
        ? (e.material.map?.dispose(), e.material.dispose())
        : e instanceof Et && (e.geometry.dispose(), e.material.dispose());
  });
}
var Kb = `__scene_editor_light_visuals`,
  qb = 4491519,
  Jb = 1e3,
  Yb = 0.22,
  Xb = 0.42,
  Zb = 6,
  Qb = 0.5,
  $b = 6,
  ex = 5,
  tx = new U(),
  nx = new R();
function rx(e, t = 0.9) {
  return new zt({ color: e, transparent: !0, opacity: t, depthTest: !1 });
}
function ix(e) {
  let t = new ct();
  return (t.setAttribute(`position`, new et(e, 3)), t);
}
function ax(e, t) {
  return new kt(ix(e), t);
}
function ox(e, t, n = 48) {
  let r = [];
  for (let t = 0; t < n; t++) {
    let i = (t / n) * Math.PI * 2;
    r.push(Math.cos(i) * e, Math.sin(i) * e, 0);
  }
  return new jt(ix(r), t);
}
function sx(e, t, n, r, i = 24) {
  let a = [];
  for (let r = 0; r <= i; r++) {
    let o = t + ((n - t) * r) / i;
    a.push(Math.cos(o) * e, Math.sin(o) * e, 0);
  }
  return new Et(ix(a), r);
}
function cx(e, t) {
  let n = new nt(),
    r = ox(e, t),
    i = ox(e, t);
  i.rotation.x = Math.PI / 2;
  let a = ox(e, t);
  return ((a.rotation.y = Math.PI / 2), n.add(r, i, a), n);
}
function lx(e, t) {
  let n = [];
  for (let [r, i, a] of [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ])
    n.push(r * e, i * e, a * e, r * t, i * t, a * t);
  return n;
}
function ux(e, t) {
  let n = [];
  for (let r = 0; r < 8; r++) {
    let i = (r / 8) * Math.PI * 2,
      a = Math.cos(i),
      o = Math.sin(i);
    n.push(a * e, o * e, 0, a * t, o * t, 0);
  }
  return n;
}
function dx(e, t) {
  let n = [];
  for (let [r, i] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ])
    n.push(r * e, i * e, 0, r * e, i * e, t);
  return n;
}
function fx(e, t) {
  let n = Math.min(0.25, e * 0.25),
    r = n * 0.45;
  return ax(
    [
      0,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      e,
      r,
      0,
      e - n,
      0,
      0,
      e,
      -r,
      0,
      e - n,
      0,
      0,
      e,
      0,
      r,
      e - n,
      0,
      0,
      e,
      0,
      -r,
      e - n,
    ],
    t,
  );
}
