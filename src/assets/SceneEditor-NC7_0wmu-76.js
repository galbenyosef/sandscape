// SceneEditor-NC7_0wmu 76 — add
// Lines 36481-36827 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function px(e) {
  let t = new nt();
  t.name = `light_visual:${e.uuid}`;
  let n = new nt();
  t.add(n);
  let r = [],
    i = (e, t) => {
      let n = rx(e, t);
      return (r.push({ material: n, base: e }), n);
    },
    a = e.color.getHex(),
    o = null,
    s = null,
    c = null,
    l = !1,
    u = e,
    d = e,
    f = e,
    p = e,
    m = e;
  if (u.isPointLight)
    (n.add(cx(Yb, i(a))),
      n.add(ax(lx(Yb * 1.3, Yb * 2.1), i(a, 0.75))),
      u.distance > 0 && t.add(cx(u.distance, i(a, 0.15))));
  else if (d.isSpotLight) {
    (n.add(cx(Yb * 0.8, i(a))), (o = new nt()), (s = d.target));
    let e = d.distance > 0 ? d.distance : ex,
      r = Math.tan(Math.min(d.angle, Math.PI / 2 - 0.001)) * e,
      c = ox(r, i(a, 0.4));
    if (
      ((c.position.z = e),
      o.add(c),
      o.add(
        ax(
          [
            0,
            0,
            0,
            r,
            0,
            e,
            0,
            0,
            0,
            -r,
            0,
            e,
            0,
            0,
            0,
            0,
            r,
            e,
            0,
            0,
            0,
            0,
            -r,
            e,
          ],
          i(a, 0.4),
        ),
      ),
      d.penumbra > 0)
    ) {
      let t = ox(Math.tan(d.angle * (1 - d.penumbra)) * e, i(a, 0.2));
      ((t.position.z = e), o.add(t));
    }
    t.add(o);
  } else if (f.isDirectionalLight)
    ((o = new nt()),
      (s = f.target),
      (c = new nt()),
      c.add(ox(Yb, i(a))),
      c.add(ax(ux(Yb * 1.3, Yb * 2.1), i(a, 0.75))),
      n.add(c),
      o.add(ax(dx(Yb * 0.72, Yb * 2.6), i(a, 0.3))),
      o.add(fx(Yb * 3.4, i(a, 0.7))),
      n.add(o));
  else if (p.isHemisphereLight) {
    let e = i(a),
      t = i(p.groundColor.getHex()),
      r = ox(Yb, i(a, 0.45));
    ((r.rotation.x = Math.PI / 2), n.add(r));
    let o = sx(Yb, 0, Math.PI, e);
    o.rotation.y = Math.PI / 2;
    let s = sx(Yb, Math.PI, Math.PI * 2, t);
    ((s.rotation.y = Math.PI / 2),
      n.add(sx(Yb, 0, Math.PI, e), o, sx(Yb, Math.PI, Math.PI * 2, t), s));
    let c = fx(Yb * 2.6, i(a, 0.6));
    ((c.rotation.x = -Math.PI / 2), n.add(c));
  } else if (m.isRectAreaLight) {
    l = !0;
    let e = m.width / 2,
      n = m.height / 2;
    t.add(
      ax(
        [
          e,
          n,
          0,
          -e,
          n,
          0,
          -e,
          n,
          0,
          -e,
          -n,
          0,
          -e,
          -n,
          0,
          e,
          -n,
          0,
          e,
          -n,
          0,
          e,
          n,
          0,
        ],
        i(a),
      ),
    );
    let r = new nt();
    ((r.rotation.y = Math.PI),
      r.add(fx(Math.max(e, n, 0.2) * 1.6, i(a, 0.7))),
      t.add(r));
  } else (n.add(cx(Yb * 0.7, i(a))), n.add(cx(Yb * 1.25, i(a, 0.28))));
  let h = new G(new hn(Xb, 10, 8), new Ne());
  return (
    (h.visible = !1),
    (h.userData.lightPick = e.uuid),
    n.add(h),
    {
      light: e,
      root: t,
      scaled: n,
      aim: o,
      target: s,
      billboard: c,
      followRotation: l,
      pick: h,
      tinted: r,
      selected: !1,
    }
  );
}
function mx(e, t) {
  let n = [e.uuid];
  return (
    e.traverse((e) => {
      let r = e;
      if (!r.isLight || t(e)) return;
      let i = r,
        a = r,
        o = r,
        s = r;
      n.push(
        [
          r.uuid,
          r.type,
          r.color.getHex(),
          i.isPointLight || a.isSpotLight ? String(i.distance) : ``,
          a.isSpotLight ? `${a.angle},${a.penumbra}` : ``,
          o.isHemisphereLight ? o.groundColor.getHex() : ``,
          s.isRectAreaLight ? `${s.width},${s.height}` : ``,
        ].join(`|`),
      );
    }),
    n.join(`;`)
  );
}
function hx(e, t) {
  let n = new nt();
  ((n.name = Kb), (n.renderOrder = Jb), e.updateMatrixWorld(!0));
  let r = [];
  return (
    e.traverse((e) => {
      if (!e.isLight || t(e)) return;
      let i = px(e);
      (r.push(i), n.add(i.root));
    }),
    n.traverse((e) => {
      ((e.renderOrder = Jb), (e.userData.editorOnly = !0));
    }),
    (n.userData.lightEntries = r),
    n
  );
}
function gx(e, t, n) {
  let r = e.userData.lightEntries;
  if (r?.length)
    for (let e of r) {
      let { light: r, root: i } = e;
      if (((i.visible = r.parent !== null && !n.isHidden(r)), !i.visible))
        continue;
      (r.getWorldPosition(i.position),
        e.followRotation && r.getWorldQuaternion(i.quaternion),
        e.scaled.scale.setScalar(
          fe.clamp(t.position.distanceTo(i.position) / Zb, Qb, $b),
        ),
        e.billboard &&
          (t.getWorldQuaternion(nx), e.billboard.quaternion.copy(nx)),
        e.aim &&
          e.target &&
          (e.target.updateWorldMatrix(!0, !1),
          e.target.getWorldPosition(tx),
          tx.distanceToSquared(i.position) > 1e-8 && e.aim.lookAt(tx)));
      let a = n.isSelected(r.uuid);
      if (a !== e.selected) {
        e.selected = a;
        for (let { material: t, base: n } of e.tinted)
          t.color.setHex(a ? qb : n);
      }
    }
}
function _x(e) {
  let t = e?.userData.lightEntries;
  if (!t?.length) return [];
  let n = [];
  for (let e of t) e.root.visible && n.push(e.pick);
  return n;
}
function vx(e) {
  let t = e;
  for (; t;) {
    let e = t.userData.lightPick;
    if (typeof e == `string`) return e;
    t = t.parent;
  }
  return null;
}
function yx(e) {
  let t = new Set(),
    n = (e) => {
      !e || t.has(e) || (t.add(e), e.dispose());
    };
  (e.traverse((e) => {
    let t = e;
    n(t.geometry);
    let r = t.material;
    Array.isArray(r) ? r.forEach(n) : n(r);
  }),
    delete e.userData.lightEntries);
}
var bx = `generated_assets/`;
function xx(e) {
  let t = e.lastIndexOf(bx);
  for (; t > 0;) {
    if (e[t - 1] === `/`) return t;
    t = e.lastIndexOf(bx, t - 1);
  }
  return t === 0 ? 0 : -1;
}
function Sx(e) {
  let t = e;
  try {
    t = decodeURIComponent(e);
  } catch {}
  let n = xx(t);
  if (n >= 0) return t.slice(n + 17);
  if (/^https?:\/\//i.test(t))
    try {
      let e = new URL(t).pathname.split(`/`).pop() || ``;
      try {
        t = decodeURIComponent(e);
      } catch {
        t = e;
      }
      let n = xx(t);
      if (n >= 0) return t.slice(n + 17);
    } catch {
      return e;
    }
  return t.replace(/^\.?\//, ``);
}
function Cx(e, t) {
  return /^(https?:|data:|blob:)/i.test(e) ? e : t(Sx(e));
}
var wx = new Set([
  `floor`,
  `wall`,
  `corridor_wall`,
  `arena_wall`,
  `ceiling`,
  `door`,
  `trim`,
  `beam`,
]);
function Tx(e) {
  e.traverse((e) => {
    let t = e;
    if (typeof t.dispose == `function` && e.constructor.name === `SplatMesh`) {
      t.dispose();
      return;
    }
    t.isMesh &&
      (t.geometry?.dispose(),
      (Array.isArray(t.material) ? t.material : [t.material]).forEach((e) =>
        e?.dispose(),
      ));
  });
}
var Ex = 64;
on.enabled = !0;
function Dx(e) {
  let t = e;
  for (; t;) {
    if (
      t.userData.editorOnly &&
      !t.userData.editorAssetContent &&
      !t.userData.editorAssetPlaceholder
    )
      return !0;
    t = t.parent;
  }
  return !1;
}
var Ox = 16756768,
  kx = new U(),
  Ax = new U(),
  jx = new U(),
  Mx = new U(),
  Nx = 4491519,
  Px = 2842526;
function Fx(e) {
  if (e.length === 0) return null;
  let t = new wt();
  for (let n of e) t.expandByObject(n);
  let n = new U();
  if (!t.isEmpty()) return t.getCenter(n);
  let r = new U();
  for (let t of e) n.add(t.getWorldPosition(r));
  return n.divideScalar(e.length);
}
function Ix(e, t, n) {
  if (n[t.uuid] === !1) return !0;
  let r = e;
  for (; r && r !== t;) {
    if (n[r.uuid] === !1) return !0;
    r = r.parent;
  }
  return !1;
}
