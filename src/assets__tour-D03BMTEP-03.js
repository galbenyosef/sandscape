// assets__tour-D03BMTEP 03 — height
// Lines 620-953 of readable/assets__tour-D03BMTEP.pretty.js (statement-aligned).
function be() {
  return {
    read(e) {
      try {
        let t = localStorage.getItem(W(e));
        if (!t) return null;
        let n = JSON.parse(t);
        if (!n || typeof n != `object`) return null;
        let r = n;
        if (typeof r.stepIndex != `number`) return null;
        let i = { stepIndex: r.stepIndex };
        return (
          typeof r.completedAt == `number` && (i.completedAt = r.completedAt),
          typeof r.skippedAt == `number` && (i.skippedAt = r.skippedAt),
          i
        );
      } catch {
        return null;
      }
    },
    write(e, t) {
      try {
        localStorage.setItem(W(e), JSON.stringify(t));
      } catch {}
      t.completedAt == null
        ? t.skippedAt != null && ye(e, `skipped`, t.skippedAt)
        : ye(e, `completed`, t.completedAt);
    },
  };
}
function xe(e) {
  return e != null && (e.completedAt != null || e.skippedAt != null);
}
function Se(e) {
  return K(e) != null;
}
function Ce(e) {
  let t = be();
  return xe(t.read(e)) ? (t.write(e, { stepIndex: 0 }), !0) : !1;
}
var q = `off`,
  J = new Set();
function we(e) {
  if (q !== e) {
    q = e;
    for (let e of J) e();
  }
}
function Te() {
  return q === `running`;
}
function Ee() {
  return q === `ended`;
}
function De(e) {
  return (
    J.add(e),
    () => {
      J.delete(e);
    }
  );
}
function Oe() {
  return (0, D.useSyncExternalStore)(De, Te, () => !1);
}
function ke() {
  return (0, D.useSyncExternalStore)(De, Ee, () => !1);
}
function Ae(e) {
  let t = null;
  return function (n, r, i) {
    if (!n || !i) {
      t = null;
      return;
    }
    let a = `${r}:${i.id}`;
    t !== a && ((t = a), i.onEnter && e(i.onEnter));
  };
}
var Y = `sandscape:tour-event`;
function X(e, t) {
  typeof window > `u` ||
    window.dispatchEvent(
      new CustomEvent(Y, { detail: { name: e, detail: t } }),
    );
}
function je(e) {
  if (typeof window > `u`) return () => {};
  let t = (t) => {
    let n = t;
    !n.detail ||
      typeof n.detail.name != `string` ||
      e(n.detail.name, n.detail.detail);
  };
  return (
    window.addEventListener(Y, t),
    () => window.removeEventListener(Y, t)
  );
}
function Me(e) {
  return { "data-tour": e };
}
function Ne(e) {
  let t = document.querySelectorAll(`[data-tour]`);
  for (let n of t) if (n.getAttribute(`data-tour`) === e) return n;
  return null;
}
function Pe(e) {
  let t = e.getBoundingClientRect();
  return { top: t.top, left: t.left, width: t.width, height: t.height };
}
function Fe(e, t) {
  return e === t
    ? !0
    : !e || !t
      ? !1
      : Math.abs(e.top - t.top) < 0.5 &&
        Math.abs(e.left - t.left) < 0.5 &&
        Math.abs(e.width - t.width) < 0.5 &&
        Math.abs(e.height - t.height) < 0.5;
}
function Ie(e, t, n = pe) {
  let [r, i] = (0, D.useState)({ rect: null, status: `idle` });
  return (
    (0, D.useEffect)(() => {
      if (!t || e === null) {
        i({ rect: null, status: `idle` });
        return;
      }
      let r = 0,
        a = null,
        o = `idle`,
        s = !1,
        c = performance.now(),
        l = 0,
        u = () => {
          let t = Ne(e);
          if (t) {
            let e = Pe(t),
              n = performance.now();
            (o !== `found` || !Fe(e, a) || n - l >= 250) &&
              ((a = e),
              (o = `found`),
              (l = n),
              i({ rect: e, status: `found` }));
          } else {
            let t = performance.now() - c > n ? `missing` : `searching`;
            (t !== o && ((a = null), (o = t), i({ rect: null, status: t })),
              t === `missing` &&
                !s &&
                ((s = !0),
                console.error(
                  `[tour] anchor "${e}" not found after ${n}ms — step cannot spotlight it`,
                )));
          }
          r = requestAnimationFrame(u);
        };
      return ((r = requestAnimationFrame(u)), () => cancelAnimationFrame(r));
    }, [e, t, n]),
    r
  );
}
function Le(e, t, n, r, i) {
  if (typeof document > `u`) return;
  let a = document.elementsFromPoint(t, n).find((t) => !e || !e.contains(t));
  for (let e = a; e && e !== document.body; e = e.parentElement) {
    let t = getComputedStyle(e),
      n = /(auto|scroll)/.test(t.overflowY) && e.scrollHeight > e.clientHeight,
      a = /(auto|scroll)/.test(t.overflowX) && e.scrollWidth > e.clientWidth;
    if ((n && i !== 0) || (a && r !== 0)) {
      e.scrollBy({ top: n ? i : 0, left: a ? r : 0 });
      return;
    }
  }
}
function Re() {
  return typeof window > `u`
    ? { cx: 0, cy: 0 }
    : { cx: window.innerWidth / 2, cy: window.innerHeight / 2 };
}
function ze({ cutout: e, radius: t, allowInteraction: n }) {
  let r = I(),
    i = (0, D.useRef)(null),
    a = (0, D.useRef)(null),
    o = F(0, V),
    s = F(0, V),
    c = F(0, V),
    l = F(0, V);
  (0, D.useEffect)(() => {
    let { cx: t, cy: n } = Re(),
      a = e ?? { left: t, top: n, width: 0, height: 0 },
      u = i.current === null,
      d = (e, t) => {
        r || u ? e.jump(t) : e.set(t);
      };
    (d(o, a.left), d(s, a.top), d(c, a.width), d(l, a.height), (i.current = e));
  }, [e, r, o, s, c, l]);
  let u = P(() => o.get() + c.get()),
    d = P(() => s.get() + l.get()),
    f = e === null || !n;
  return (0, E.jsxs)(`div`, {
    ref: a,
    className: `fixed inset-0`,
    style: { zIndex: H, pointerEvents: `none` },
    children: [
      (0, E.jsx)(_.div, {
        style: {
          position: `absolute`,
          top: 0,
          left: 0,
          x: o,
          y: s,
          width: c,
          height: l,
          borderRadius: t,
          boxShadow: `0 0 0 9999px rgba(0, 0, 0, ${fe})`,
          pointerEvents: `none`,
        },
      }),
      f
        ? (0, E.jsx)(`div`, {
            style: { position: `absolute`, inset: 0, pointerEvents: `auto` },
            onWheel: (t) => {
              !e ||
                t.clientX < e.left ||
                t.clientX > e.left + e.width ||
                t.clientY < e.top ||
                t.clientY > e.top + e.height ||
                Le(a.current, t.clientX, t.clientY, t.deltaX, t.deltaY);
            },
          })
        : (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)(_.div, {
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  height: s,
                  pointerEvents: `auto`,
                },
              }),
              (0, E.jsx)(_.div, {
                style: {
                  position: `absolute`,
                  left: 0,
                  right: 0,
                  top: d,
                  bottom: 0,
                  pointerEvents: `auto`,
                },
              }),
              (0, E.jsx)(_.div, {
                style: {
                  position: `absolute`,
                  top: s,
                  left: 0,
                  width: o,
                  height: l,
                  pointerEvents: `auto`,
                },
              }),
              (0, E.jsx)(_.div, {
                style: {
                  position: `absolute`,
                  top: s,
                  left: u,
                  right: 0,
                  height: l,
                  pointerEvents: `auto`,
                },
              }),
            ],
          }),
    ],
  });
}
var Z = 12;
function Be(e, t, n, r) {
  switch (e) {
    case `bottom`:
      return t.top + t.height + 16 + r.height + Z <= n.height;
    case `top`:
      return t.top - 16 - r.height - Z >= 0;
    case `right`:
      return t.left + t.width + 16 + r.width + Z <= n.width;
    case `left`:
      return t.left - 16 - r.width - Z >= 0;
  }
}
function Q(e, t, n) {
  return n < t ? t : Math.min(n, Math.max(t, e));
}
function Ve(e, t, n, r = `auto`) {
  if (!e || r === `center`)
    return {
      top: Q((t.height - n.height) / 2, Z, t.height - n.height - Z),
      left: Q((t.width - n.width) / 2, Z, t.width - n.width - Z),
      placement: `center`,
    };
  let i = [`bottom`, `top`, `right`, `left`],
    a =
      (r === `auto` ? i : [r, ...i.filter((e) => e !== r)]).find((r) =>
        Be(r, e, t, n),
      ) ?? `bottom`,
    o = e.left + e.width / 2,
    s = e.top + e.height / 2,
    c = t.width - n.width - Z,
    l = t.height - n.height - Z,
    u,
    d;
  switch (a) {
    case `bottom`:
      ((u = e.top + e.height + 16), (d = o - n.width / 2));
      break;
    case `top`:
      ((u = e.top - 16 - n.height), (d = o - n.width / 2));
      break;
    case `right`:
      ((d = e.left + e.width + 16), (u = s - n.height / 2));
      break;
    case `left`:
      ((d = e.left - 16 - n.width), (u = s - n.height / 2));
      break;
  }
  return { top: Q(u, Z, l), left: Q(d, Z, c), placement: a };
}
function He(e, t, n) {
  return !!e && t !== n;
}
function $(e) {
  return /\.(webp|png|jpe?g|avif)(\?|$)/i.test(e ?? ``);
}
