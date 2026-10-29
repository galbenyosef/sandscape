// SceneEditor-NC7_0wmu 08 — shadow
// Lines 4819-5166 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function li(e, t, n) {
  let r = t.attributes,
    i = new wt();
  if (r.POSITION !== void 0) {
    let e = n.json.accessors[r.POSITION],
      t = e.min,
      a = e.max;
    if (t !== void 0 && a !== void 0) {
      if (
        (i.set(new U(t[0], t[1], t[2]), new U(a[0], a[1], a[2])), e.normalized)
      ) {
        let t = ai(Wr[e.componentType]);
        (i.min.multiplyScalar(t), i.max.multiplyScalar(t));
      }
    } else {
      console.warn(
        `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
      );
      return;
    }
  } else return;
  let a = t.targets;
  if (a !== void 0) {
    let e = new U(),
      t = new U();
    for (let r = 0, i = a.length; r < i; r++) {
      let i = a[r];
      if (i.POSITION !== void 0) {
        let r = n.json.accessors[i.POSITION],
          a = r.min,
          o = r.max;
        if (a !== void 0 && o !== void 0) {
          if (
            (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
            t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
            r.normalized)
          ) {
            let e = ai(Wr[r.componentType]);
            t.multiplyScalar(e);
          }
          e.max(t);
        } else
          console.warn(
            `THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`,
          );
      }
    }
    i.expandByVector(e);
  }
  e.boundingBox = i;
  let o = new sn();
  (i.getCenter(o.center),
    (o.radius = i.min.distanceTo(i.max) / 2),
    (e.boundingSphere = o));
}
function ui(e, t, n) {
  let r = t.attributes,
    i = [];
  function a(t, r) {
    return n.getDependency(`accessor`, t).then(function (t) {
      e.setAttribute(r, t);
    });
  }
  for (let t in r) {
    let n = Jr[t] || t.toLowerCase();
    n in e.attributes || i.push(a(r[t], n));
  }
  if (t.indices !== void 0 && !e.index) {
    let r = n.getDependency(`accessor`, t.indices).then(function (t) {
      e.setIndex(t);
    });
    i.push(r);
  }
  return (
    pe.workingColorSpace !== `srgb-linear` &&
      `COLOR_0` in r &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pe.workingColorSpace}" not supported.`,
      ),
    ei(e, t),
    li(e, t, n),
    Promise.all(i).then(function () {
      return t.targets === void 0 ? e : ti(e, t.targets, n);
    })
  );
}
function di(e) {
  return e.thumbnailPath
    ? `thumbnail`
    : e.conceptArtPath
      ? `concept`
      : e.modelPath
        ? `render`
        : `glyph`;
}
function fi(e, t, n) {
  return e === `render` && t && !n;
}
function pi(e) {
  ((e.shadowMap.enabled = !0),
    (e.shadowMap.type = 1),
    (e.toneMapping = 4),
    (e.toneMappingExposure = 1.2),
    (e.outputColorSpace = Ft),
    e.setPixelRatio(Math.min(window.devicePixelRatio, 2)));
}
function mi(e) {
  let t = new Qt(16777215, 0.5);
  ((t.userData.editorOnly = !0), e.add(t));
  let n = new He(16777215, 1.5);
  (n.position.set(5, 10, 7.5),
    (n.castShadow = !0),
    (n.shadow.mapSize.width = 2048),
    (n.shadow.mapSize.height = 2048),
    (n.shadow.camera.near = 0.5),
    (n.shadow.camera.far = 50),
    (n.shadow.camera.left = -10),
    (n.shadow.camera.right = 10),
    (n.shadow.camera.top = 10),
    (n.shadow.camera.bottom = -10),
    (n.shadow.bias = -0.001),
    (n.userData.editorOnly = !0),
    e.add(n));
  let r = new He(8947967, 0.4);
  (r.position.set(-5, 3, -5), (r.userData.editorOnly = !0), e.add(r));
  let i = new He(16777215, 0.3);
  return (
    i.position.set(0, 5, -10),
    (i.userData.editorOnly = !0),
    e.add(i),
    { ambientLight: t, keyLight: n, fillLight: r, rimLight: i }
  );
}
function hi(e) {
  let t = new tn(e);
  t.compileEquirectangularShader();
  let n = new bt(),
    r = document.createElement(`canvas`);
  ((r.width = 256), (r.height = 2));
  let i = r.getContext(`2d`),
    a = i.createLinearGradient(0, 0, 0, 2);
  (a.addColorStop(0, `#334466`),
    a.addColorStop(0.5, `#1a2233`),
    a.addColorStop(1, `#111118`),
    (i.fillStyle = a),
    i.fillRect(0, 0, 256, 2));
  let o = new pt(r);
  ((o.mapping = 303), (n.background = o), (n.environment = o));
  let s = t.fromScene(n, 0.04).texture;
  return (t.dispose(), o.dispose(), s);
}
function gi(e = 20, t = 20) {
  let n = new it(e, t, 4473924, 2236962);
  return ((n.userData.editorOnly = !0), n);
}
function _i() {
  let e = new G(
    new De(100, 100),
    new Ne({ visible: !1, transparent: !0, opacity: 0 }),
  );
  return (
    (e.rotation.x = -Math.PI / 2),
    (e.name = `__ground_plane`),
    (e.userData.editorOnly = !0),
    e
  );
}
var vi = null;
function yi() {
  return (
    vi ||
      ((vi = new Ut({ antialias: !0, alpha: !0, preserveDrawingBuffer: !0 })),
      vi.setPixelRatio(2),
      (vi.outputColorSpace = Ft),
      (vi.toneMapping = 4),
      (vi.toneMappingExposure = 1.2),
      (vi.shadowMap.enabled = !0),
      (vi.shadowMap.type = 2)),
    vi
  );
}
var bi = !1;
function xi() {
  bi ||= ((Oi.environment = hi(yi())), !0);
}
var Si = 48;
function Ci(e) {
  e.traverse((e) => {
    let t = e;
    t.isMesh &&
      (t.geometry?.dispose(),
      (Array.isArray(t.material) ? t.material : [t.material]).forEach((e) =>
        e?.dispose(),
      ));
  });
}
var wi = new dr(),
  Ti = new Map();
function Ei(e) {
  let t = Ti.get(e);
  if (t) return (Ti.delete(e), Ti.set(e, t), t);
  let n = new Promise((t, n) =>
    wi.load(
      e,
      (e) => t(e.scene),
      void 0,
      (t) => {
        (Ti.delete(e), n(t));
      },
    ),
  );
  for (Ti.set(e, n); Ti.size > Si;) {
    let e = Ti.keys().next().value,
      t = Ti.get(e);
    (Ti.delete(e), t?.then((e) => Ci(e)).catch(() => {}));
  }
  return n;
}
var Di = {
    floor: [1.7, 0.16, 1.7],
    ceiling: [1.7, 0.16, 1.7],
    arena_floor: [1.7, 0.16, 1.7],
    corridor_floor: [1.7, 0.16, 1.7],
    arena_ceiling: [1.7, 0.16, 1.7],
    corridor_ceiling: [1.7, 0.16, 1.7],
    wall: [1.7, 1.5, 0.2],
    corridor_wall: [1.7, 1.5, 0.2],
    arena_wall: [1.7, 1.5, 0.2],
    door: [0.25, 1.6, 1.4],
    column: [0.4, 1.8, 0.4],
    pillar: [0.45, 1.8, 0.45],
    beam: [1.9, 0.4, 0.4],
    trim: [1.9, 0.28, 0.28],
    hero_panel: [1.1, 1.3, 0.3],
    wall_panel: [0.95, 1.4, 0.22],
    light_socket: [1.1, 0.42, 1.1],
    prop: [0.85, 0.82, 0.85],
    decal: [1.2, 1.2, 0.06],
    floor_insert: [1.3, 0.12, 1.3],
  },
  Oi = new bt();
Oi.add(new H(16777215, 3158080, 0.5));
var ki = new He(16774374, 2.2);
(ki.position.set(2.5, 4, 3),
  (ki.castShadow = !0),
  ki.shadow.mapSize.set(1024, 1024),
  (ki.shadow.camera.near = 0.5),
  (ki.shadow.camera.far = 12),
  (ki.shadow.camera.left = -2),
  (ki.shadow.camera.right = 2),
  (ki.shadow.camera.top = 2),
  (ki.shadow.camera.bottom = -2),
  (ki.shadow.bias = -0.0015),
  Oi.add(ki));
var Ai = new He(12374271, 0.7);
(Ai.position.set(-3, 1.5, 2), Oi.add(Ai));
var ji = new He(16777215, 1.1);
(ji.position.set(-1.5, 2.5, -3), Oi.add(ji));
var Mi = new G(new De(8, 8), new qt({ opacity: 0.32 }));
((Mi.rotation.x = -Math.PI / 2),
  (Mi.position.y = -0.85),
  (Mi.receiveShadow = !0),
  Oi.add(Mi));
var Ni = new ke(34, 1, 0.1, 100);
(Ni.position.set(1.9, 1.8, 2.3), Ni.lookAt(0, 0, 0));
async function Pi(e, t, n, r) {
  let i;
  try {
    i = await Ei(e);
  } catch {
    return !1;
  }
  let [a, o, s] = Di[t] ?? [1.3, 1.3, 1.3];
  (i.scale.set(a, o, s),
    i.position.set(0, 0, 0),
    i.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    Oi.add(i));
  let c = yi();
  (xi(), c.setSize(r, r, !1), c.render(Oi, Ni), Oi.remove(i));
  let l = n.getContext(`2d`);
  return l
    ? (l.clearRect(0, 0, n.width, n.height),
      l.drawImage(c.domElement, 0, 0, n.width, n.height),
      !0)
    : !1;
}
var Fi = new G(new hn(0.85, 48, 32), new Te());
Fi.castShadow = !0;
var Ii = Fi.material;
function Li(e, t, n) {
  ((Fi.material = e),
    Fi.position.set(0, 0, 0),
    Fi.scale.setScalar(1),
    Oi.add(Fi));
  let r = yi();
  (xi(), r.setSize(n, n, !1));
  try {
    r.render(Oi, Ni);
  } catch (e) {
    return (
      console.warn(`[kitThumbnail] material preview failed to render`, e),
      Oi.remove(Fi),
      (Fi.material = Ii),
      !1
    );
  }
  (Oi.remove(Fi), (Fi.material = Ii));
  let i = t.getContext(`2d`);
  return i
    ? (i.clearRect(0, 0, t.width, t.height),
      i.drawImage(r.domElement, 0, 0, t.width, t.height),
      !0)
    : !1;
}
async function Ri(e, t, n) {
  let r;
  try {
    r = await Ei(e);
  } catch {
    return !1;
  }
  let i = new nt();
  (r.position.set(0, 0, 0), r.scale.set(1, 1, 1), r.updateMatrixWorld(!0));
  let a = new wt().setFromObject(r);
  if (a.isEmpty()) return !1;
  let o = Math.max(a.max.x - a.min.x, a.max.y - a.min.y, a.max.z - a.min.z);
  if (!(o > 0)) return !1;
  let s = 1.7 / o,
    c = a.getCenter(new U());
  (r.scale.setScalar(s),
    r.position.copy(c).multiplyScalar(-s),
    i.add(r),
    i.traverse((e) => {
      e.isMesh && (e.castShadow = !0);
    }),
    Oi.add(i));
  let l = yi();
  (xi(), l.setSize(n, n, !1), l.render(Oi, Ni), Oi.remove(i), i.remove(r));
  let u = t.getContext(`2d`);
  return u
    ? (u.clearRect(0, 0, t.width, t.height),
      u.drawImage(l.domElement, 0, 0, t.width, t.height),
      !0)
    : !1;
}
