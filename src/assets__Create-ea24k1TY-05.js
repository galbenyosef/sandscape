// assets__Create-ea24k1TY 05 — accent
// Lines 1602-1774 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Es(e, t, n, r) {
  let i = [];
  if (Ts(e, t)) i.push(dr(e, (ps(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    let a = ms(e, t, r),
      o = a.length;
    Qn(!!o, `No valid elements provided.`, `no-valid-elements`);
    for (let e = 0; e < o; e++) {
      let r = a[e],
        s = r instanceof Element ? Cs : ws;
      cr.has(r) || s(r);
      let c = cr.get(r),
        l = { ...n };
      (`delay` in l &&
        typeof l.delay == `function` &&
        (l.delay = l.delay(e, o)),
        i.push(...ar(c, { ...t, transition: l }, {})));
    }
  }
  return i;
}
function Ds(e, t, n) {
  let r = [];
  return (
    zte(
      e.map((e) => {
        if (Array.isArray(e) && typeof e[0] == `function`) {
          let t = e[0],
            n = sr(0);
          return (
            n.on(`change`, t),
            e.length === 1
              ? [n, [0, 1]]
              : e.length === 2
                ? [n, [0, 1], e[1]]
                : [n, e[1], e[2]]
          );
        }
        return e;
      }),
      t,
      n,
      { spring: Zn },
    ).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...Es(n, e, t));
    }),
    r
  );
}
function Os(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function ks(e = {}) {
  let { scope: t, reduceMotion: n, skipAnimations: r } = e;
  function i(e, i, a) {
    let o = [],
      s,
      c = {};
    if (
      (n !== void 0 && (c.reduceMotion = n),
      r !== void 0 && (c.skipAnimations = r),
      Os(e))
    ) {
      let { onComplete: n, ...r } = i || {};
      (typeof n == `function` && (s = n), (o = Ds(e, { ...c, ...r }, t)));
    } else {
      let { onComplete: n, ...r } = a || {};
      (typeof n == `function` && (s = n), (o = Es(e, i, { ...c, ...r }, t)));
    }
    let l = new Ate(o);
    return (
      s && l.finished.then(s),
      t &&
        (t.animations.push(l),
        l.finished.then(() => {
          er(t.animations, l);
        })),
      l
    );
  }
  return i;
}
var As = ks(),
  X = e(r()),
  js = e(a()),
  Ms = {
    concept: {
      primary: `#FFFEF5`,
      accent: `#FFE4B5`,
      glow: `rgba(255, 254, 245, 0.8)`,
    },
    "game-design": {
      primary: `#5BA8FF`,
      accent: `#40E0D0`,
      glow: `rgba(91, 168, 255, 0.7)`,
    },
    visuals: {
      primary: `#C85FFF`,
      accent: `#FF69B4`,
      glow: `rgba(200, 95, 255, 0.7)`,
    },
    audio: {
      primary: `#00FF9F`,
      accent: `#7FFFD4`,
      glow: `rgba(0, 255, 159, 0.7)`,
    },
    levels: {
      primary: `#FFAA33`,
      accent: `#FFD700`,
      glow: `rgba(255, 170, 51, 0.7)`,
    },
    ui: {
      primary: `#00FFFF`,
      accent: `#7FFFAA`,
      glow: `rgba(0, 255, 255, 0.7)`,
    },
    development: {
      primary: `#FF6B6B`,
      accent: `#FFA54F`,
      glow: `rgba(255, 107, 107, 0.7)`,
    },
    developer: {
      primary: `#00BFFF`,
      accent: `#9370DB`,
      glow: `rgba(0, 191, 255, 0.7)`,
    },
    project: {
      primary: `#A0AEC0`,
      accent: `#CBD5E0`,
      glow: `rgba(160, 174, 192, 0.7)`,
    },
  },
  Ns = {
    backgroundColor: `#0A0E27`,
    gridVisible: !1,
    particlesEnabled: !0,
    glowEnabled: !0,
    centerNodeSize: 80,
    mainNodeSize: 60,
    subNodeSize: 40,
    detailNodeSize: 30,
    branchAngle: 72,
    branchDistance: 200,
    levelDistance: 150,
    pulseSpeed: { locked: 5, available: 3, inProgress: 1, complete: 4 },
    maxParticles: 1e3,
    particleDensity: `high`,
    targetFPS: 60,
  },
  Ps = new Set([`quality-pass`]),
  Fs = [`concept-lock-in`];
function Is(e, t, n, r, i, a = [], o, s, c, l) {
  return {
    id: e,
    name: t,
    description: n,
    type: r,
    domain: i,
    position: { x: 0, y: 0 },
    size: r === `concept` ? 60 : r === `main` ? 50 : r === `sub` ? 40 : 30,
    state: a.length === 0 ? `available` : `locked`,
    prerequisites: a,
    visualParent: s,
    influences: [],
    unlocks: [],
    workflowId: o,
    workflows: o ? [o] : [],
    category: c,
    listChildren: l,
    animationState: { pulsePhase: Math.random(), glowIntensity: 0.5, scale: 1 },
  };
}
