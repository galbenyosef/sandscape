// SceneEditor-NC7_0wmu 56 — controllers
// Lines 30245-30562 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var hh = class e {
  constructor(t) {
    ((this.lastControllersUpdate = 0),
      (this.hands = []),
      (this.renderer = t.renderer),
      (this.xr = navigator.xr),
      (this.mode = `initializing`),
      (this.onEnterXr = t.onEnterXr),
      (this.onExitXr = t.onExitXr),
      (this.enableHands = t.enableHands ?? !1),
      (this.controllers = t.controllers),
      Promise.resolve()
        .then(() => {
          if (!this.xr) {
            this.mode = `not_supported`;
            return;
          }
          if (!t.allowMobileXr && mh()) {
            this.mode = `not_supported`;
            return;
          }
          this.enableHands && (this.hands = [new yh(`left`), new yh(`right`)]);
          let n, r;
          if (
            (t.element
              ? (n = t.element)
              : t.elementId
                ? (n = document.getElementById(t.elementId) ?? void 0)
                : ((n = e.createButton()),
                  (r =
                    t.button == null || typeof t.button == `boolean`
                      ? {}
                      : t.button)),
            !n)
          )
            throw Error(`No element or button provided`);
          ((n.style.display = `none`),
            n.classList.add(`hidden`),
            (this.button = r),
            (this.element = n));
          let i = t.onMouseLeaveOpacity?.toString();
          return (
            i !== void 0 &&
              (n.addEventListener(`mouseleave`, () => {
                n.style.opacity = i;
              }),
              n.addEventListener(`mouseenter`, () => {
                n.style.opacity = ``;
              })),
            this.initializeXr(t)
          );
        })
        .then(() => t.onReady?.call(t, this.mode !== `not_supported`))
        .catch((e) => {
          alert(`Error initializing SparkXr: ${e}`);
        }));
  }
  async initializeXr(e) {
    if (!this.xr || !this.element) return;
    let t = this.element,
      n = {
        vr: [`immersive-vr`],
        ar: [`immersive-ar`],
        arvr: [`immersive-ar`, `immersive-vr`],
        vrar: [`immersive-vr`, `immersive-ar`],
      }[e.mode ?? `vrar`];
    if (!n) throw Error(`Invalid mode: ${e.mode}`);
    let r = null;
    for (let e of n)
      if (await this.xr.isSessionSupported(e)) {
        r = e;
        break;
      }
    if (!r) {
      this.mode = `not_supported`;
      return;
    }
    this.mode = r;
    let i = e.referenceSpaceType ?? `local`;
    ((this.renderer.xr.enabled = !0),
      this.renderer.xr.setReferenceSpaceType(i),
      e.fixedFoveation !== void 0 &&
        this.renderer.xr.setFoveation(e.fixedFoveation));
    let a = e.frameBufferScaleFactor ?? 0.5;
    this.renderer.xr.setFramebufferScaleFactor(a);
    let o = e.sessionInit?.optionalFeatures ?? [];
    e.enableHands && o.push(`hand-tracking`);
    let s = e.sessionInit?.requiredFeatures ?? [];
    (s.push(i),
      (this.sessionInit = {
        ...e.sessionInit,
        optionalFeatures: o,
        requiredFeatures: s,
      }),
      t.addEventListener(`click`, () => {
        this.toggleXr();
      }),
      this.updateElement());
  }
  async toggleXr() {
    var e, t;
    if (!(!this.xr || !this.sessionInit))
      if (this.session) this.session.end();
      else
        try {
          let n = this.mode,
            r = await this.xr.requestSession(n, this.sessionInit);
          this.session = r;
          let i = () => {
              var e;
              (r?.removeEventListener(`end`, i),
                r?.removeEventListener(`visibilitychange`, o),
                (this.session = void 0),
                this.updateElement(),
                (e = this.onExitXr) == null || e.call(this));
            },
            a = r.visibilityState,
            o = () => {
              (r?.visibilityState === `visible-blurred` &&
                a === `visible` &&
                r?.end(),
                (a = r?.visibilityState));
            };
          return (
            (e = this.session) == null || e.addEventListener(`end`, i),
            (t = this.session) == null ||
              t.addEventListener(`visibilitychange`, o),
            await this.renderer.xr.setSession(this.session),
            this.onEnterXr?.call(this)
          );
        } catch (e) {
          console.error(`Error requesting XR session`, e);
          return;
        }
  }
  updateElement() {
    let e = this.mode,
      t = this.element;
    if (t) {
      ((t.style.display = ``), t.classList.remove(`hidden`));
      let n = typeof this.button == `boolean` ? {} : this.button;
      if (n) {
        if (this.session) {
          let r =
              (e === `immersive-vr` ? n.exitVrHtml : n.exitArHtml) ??
              n.exitXrHtml,
            i =
              (e === `immersive-vr` ? n.exitVrText : n.exitArText) ??
              n.exitXrText;
          r
            ? (t.innerHTML = r)
            : i
              ? (t.textContent = i)
              : (t.textContent = e === `immersive-vr` ? `EXIT VR` : `EXIT AR`);
        } else {
          let r =
              (e === `immersive-vr` ? n.enterVrHtml : n.enterArHtml) ??
              n.enterXrHtml,
            i =
              (e === `immersive-vr` ? n.enterVrText : n.enterArText) ??
              n.enterXrText;
          r
            ? (t.innerHTML = r)
            : i
              ? (t.textContent = i)
              : (t.textContent =
                  e === `immersive-vr` ? `ENTER VR` : `ENTER AR`);
        }
        t.style.display = ``;
      }
    }
  }
  static createButton() {
    let e = document.createElement(`button`);
    return (
      Object.assign(e.style, {
        position: `absolute`,
        bottom: `20px`,
        left: `50%`,
        transform: `translateX(-50%)`,
        padding: `40px 40px`,
        border: `2px solid #fff`,
        borderRadius: `16px`,
        background: `rgba(0,0,0,0.1)`,
        color: `#fff`,
        font: `bold 28px sans-serif`,
        textAlign: `center`,
        userSelect: `none`,
        zIndex: `999`,
      }),
      document.body.appendChild(e),
      e
    );
  }
  xrSupported() {
    return !!this.xr;
  }
  left() {
    return this.hands[0];
  }
  right() {
    return this.hands[1];
  }
  updateControllers(e) {
    var t;
    let n = e.parent,
      r = performance.now(),
      i = (r - (this.lastControllersUpdate || r)) / 1e3;
    this.lastControllersUpdate = r;
    let a = {};
    for (let e of this.renderer.xr.getSession()?.inputSources ?? []) {
      let t = e.gamepad;
      t &&
        (e.handedness === `left` || e.handedness === `right`) &&
        ((a[e.handedness] = t),
        e.handedness === `left`
          ? (a.leftIsHand = !!e.hand)
          : e.handedness === `right` && (a.rightIsHand = !!e.hand));
    }
    let o = (this.controllers?.getRotate ?? $m)(a, this);
    if (
      (o.multiply(
        new U(
          this.controllers?.rotateSpeed ?? 4,
          this.controllers?.rotateSpeed ?? 4,
          this.controllers?.rollSpeed ?? 2,
        ),
      ),
      o.manhattanLength() > 0)
    ) {
      o.multiplyScalar(i);
      let r = new be(-o.y, -o.x, o.z, `YXZ`),
        a = new R().setFromEuler(r),
        s = e.getWorldPosition(new U());
      ((t = n.parent) == null || t.worldToLocal(s),
        n.position.sub(s),
        n.position.applyQuaternion(a),
        n.position.add(s),
        n.quaternion.premultiply(a));
    }
    let s = (this.controllers?.getMove ?? Qm)(a, this),
      c = this.controllers?.moveSpeed ?? 1;
    ((this.controllers?.getFast ?? eh)(a, this) && (c *= 5),
      (this.controllers?.getSlow ?? th)(a, this) && (c *= Zm),
      this.controllers?.moveHeading
        ? s.applyQuaternion(e.quaternion)
        : this.controllers?.moveDirection &&
          (_h.setFromQuaternion(e.quaternion, `YXZ`),
          (_h.x = 0),
          (_h.z = 0),
          vh.setFromEuler(_h),
          s.applyQuaternion(vh)),
      s.applyQuaternion(n.quaternion),
      s.multiplyScalar(i * c),
      n.position.add(s));
  }
  updateHands({ xrFrame: e }) {
    let t = this.renderer.xr.getSession();
    if (!t) return;
    let n = this.renderer.xr.getReferenceSpace();
    if (n && e.getJointPose) {
      for (let e of this.hands)
        e && ((e.lastJoints = e.joints), (e.joints = void 0));
      for (let r of t.inputSources) {
        if (!r.hand) continue;
        let t = r.handedness,
          i = this.hands[t === `left` ? 0 : 1];
        if (i)
          for (let t of rh) {
            let a = r.hand.get(nh[t]);
            if (a) {
              let r = e.getJointPose(a, n);
              if (r) {
                let { position: e, orientation: n } = r.transform;
                ((i.joints ||= {}),
                  (i.joints[t] = {
                    position: new U(e.x, e.y, e.z),
                    quaternion: new R(n.x, n.y, n.z, n.w),
                    radius: oh[t],
                  }));
              }
            }
          }
      }
    }
  }
  makeJointSplats(e) {
    let t = new bh(e);
    return (
      (t.onFrame = () => {
        let n = this.hands[e === `left` ? 0 : 1]?.joints;
        t.updateJoints(n);
      }),
      t
    );
  }
  snapshotHands(e) {
    return {
      time: e,
      hands: [this.hands[0]?.snapshotJoints(), this.hands[1]?.snapshotJoints()],
    };
  }
};
((hh.JointEnum = nh),
  (hh.JOINT_IDS = rh),
  (hh.NUM_JOINTS = ih),
  (hh.JOINT_INDEX = ah),
  (hh.JOINT_RADIUS = oh),
  (hh.JOINT_SEGMENTS = sh),
  (hh.JOINT_SEGMENT_STEPS = ch),
  (hh.JOINT_TIPS = lh),
  (hh.FINGER_TIPS = uh),
  (hh.Hand = dh),
  (hh.HANDS = fh));
var gh = (e) => Math.round(e * 1e4) / 1e4,
  _h = new be(0, 0, 0, `YXZ`),
  vh = new R();
new R();
