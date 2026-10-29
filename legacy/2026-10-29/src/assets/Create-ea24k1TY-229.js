// Create-ea24k1TY 229 — current
// Lines 77345-77717 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var wde = ({
  engine: e,
  asset: t,
  clipVersion: n,
  selection: r = null,
  onSelectionChange: i,
  onSeek: a,
}) => {
  let o = (0, X.useRef)(null),
    s = (0, X.useRef)(null),
    c = (0, X.useRef)(null),
    l = Q0((e) => e.loop),
    u = Q0((e) => e.draggingLoopHandle),
    d = Q0((e) => e.enableLoop),
    f = Q0((e) => e.setLoopRange),
    p = Q0((e) => e.setLoopCrossfade),
    m = Q0((e) => e.setDraggingLoopHandle),
    h = (0, X.useRef)(l);
  h.current = l;
  let g = (0, X.useRef)(r);
  g.current = r;
  let _ = (0, X.useRef)(t);
  _.current = t;
  let v = (0, X.useRef)(`none`),
    y = (0, X.useRef)(0),
    b = (0, X.useRef)(0),
    x = (0, X.useCallback)(() => {
      let t = e.getBuffer();
      return t && t.duration > 0 ? t.duration : 0;
    }, [e]),
    S = (0, X.useCallback)(
      (e, t) => {
        let n = x();
        if (t <= 0 || n <= 0) return 0;
        let r = (e / t) * n;
        return Math.max(0, Math.min(n, r));
      },
      [x],
    ),
    C = (0, X.useCallback)(
      (e, t) => {
        let n = x();
        return n <= 0 ? 0 : (e / n) * t;
      },
      [x],
    ),
    w = (0, X.useCallback)(() => {
      let t = s.current;
      if (!t) return;
      let n = t.getContext(`2d`);
      if (!n) return;
      let r = window.devicePixelRatio || 1,
        i = t.width / r,
        a = t.height / r;
      (n.setTransform(r, 0, 0, r, 0, 0), n.clearRect(0, 0, i, a));
      let o = x(),
        c = h.current;
      if (c && o > 0) {
        let e = C(c.in_sec, i),
          t = C(c.out_sec, i);
        ((n.fillStyle = vde), n.fillRect(e, 0, t - e, a));
      }
      let l = g.current;
      if (l && o > 0) {
        let e = C(l.start, i),
          t = C(l.end, i);
        ((n.fillStyle = bde),
          n.fillRect(e, 0, t - e, a),
          (n.strokeStyle = xde),
          (n.lineWidth = 1),
          n.beginPath(),
          n.moveTo(e, 0),
          n.lineTo(e, a),
          n.moveTo(t, 0),
          n.lineTo(t, a),
          n.stroke());
      }
      ((n.strokeStyle = `rgba(107, 114, 128, 0.3)`),
        (n.lineWidth = 1),
        n.beginPath(),
        n.moveTo(0, a / 2),
        n.lineTo(i, a / 2),
        n.stroke());
      let u = e.getPeaks();
      if (u.length > 0) {
        let e = a / 2,
          t = a / 2 - 4;
        ((n.fillStyle = Cde(_.current)), (n.globalAlpha = 0.8));
        for (let r = 0; r < u.length && r < i; r++) {
          let { min: i, max: a } = u[r],
            o = e - a * t,
            s = e - i * t,
            c = Math.max(1, s - o);
          n.fillRect(r, o, 1, c);
        }
        n.globalAlpha = 1;
      }
      if (c && o > 0) {
        let e = C(c.in_sec, i),
          t = C(c.out_sec, i);
        ((n.strokeStyle = yde),
          (n.lineWidth = 2),
          n.beginPath(),
          n.moveTo(e, 0),
          n.lineTo(e, a),
          n.moveTo(t, 0),
          n.lineTo(t, a),
          n.stroke(),
          (n.fillStyle = _de),
          n.fillRect(e - 6 / 2, 0, 6, 12),
          n.fillRect(t - 6 / 2, a - 12, 6, 12));
        let r = C(c.crossfade_sec, i);
        r > 0.5 &&
          (n.save(),
          (n.fillStyle = `rgba(94, 234, 212, 0.14)`),
          n.beginPath(),
          n.moveTo(e, a),
          n.lineTo(e + r, 0),
          n.lineTo(e, 0),
          n.closePath(),
          n.fill(),
          n.beginPath(),
          n.moveTo(t, a),
          n.lineTo(t - r, 0),
          n.lineTo(t, 0),
          n.closePath(),
          n.fill(),
          (n.strokeStyle = D2),
          (n.lineWidth = 2),
          n.beginPath(),
          n.moveTo(e, a),
          n.lineTo(e + r, 0),
          n.moveTo(t - r, 0),
          n.lineTo(t, a),
          n.stroke(),
          A2(n, e + r),
          A2(n, t - r),
          n.restore());
      }
    }, [e, x, C]),
    T = (0, X.useCallback)(() => {
      let t = s.current,
        n = o.current;
      if (!t || !n) return;
      let r = window.devicePixelRatio || 1,
        i = n.getBoundingClientRect();
      ((t.width = Math.max(1, Math.floor(i.width * r))),
        (t.height = Math.max(1, Math.floor(i.height * r))),
        (t.style.width = `${i.width}px`),
        (t.style.height = `${i.height}px`),
        e.recomputePeaks(Math.floor(i.width)),
        w());
    }, [e, w]);
  ((0, X.useEffect)(() => {
    let e = o.current;
    if (!e) return;
    let t,
      n = new ResizeObserver(() => {
        (clearTimeout(t), (t = setTimeout(T, 100)));
      });
    return (
      n.observe(e),
      T(),
      () => {
        (clearTimeout(t), n.disconnect());
      }
    );
  }, [T]),
    (0, X.useEffect)(() => {
      w();
    }, [w, l, r, t]),
    (0, X.useEffect)(() => {
      n !== void 0 && T();
    }, [n, T]),
    (0, X.useEffect)(
      () =>
        e.subscribePlayhead((e) => {
          let t = c.current,
            n = s.current;
          if (!t || !n) return;
          let r = n.clientWidth,
            i;
          if (e.looping) {
            let t = h.current,
              n = x();
            i =
              t && n > 0 && e.duration > 0
                ? (t.in_sec + (e.time % e.duration)) / n
                : e.duration > 0
                  ? e.time / e.duration
                  : 0;
          } else i = e.duration > 0 ? e.time / e.duration : 0;
          ((i = Math.max(0, Math.min(1, i))),
            (t.style.transform = `translateX(${i * r}px)`));
        }),
      [e, x],
    ));
  let E = (0, X.useCallback)(
      (e, t) => {
        let n = h.current,
          r = x();
        if (!n || r <= 0) return { kind: `empty` };
        let i = C(n.in_sec, t),
          a = C(n.out_sec, t),
          o = C(n.crossfade_sec, t);
        if (o > 0.5) {
          if (Math.abs(e - (i + o)) <= k2)
            return { kind: `crossfade`, side: `in` };
          if (Math.abs(e - (a - o)) <= k2)
            return { kind: `crossfade`, side: `out` };
        }
        return Math.abs(e - i) <= O2
          ? { kind: `grip`, side: `in` }
          : Math.abs(e - a) <= O2
            ? { kind: `grip`, side: `out` }
            : { kind: `empty` };
      },
      [x, C],
    ),
    D = (0, X.useCallback)(
      (e) => {
        let t = s.current;
        if (!t || x() <= 0) return;
        let n = t.getBoundingClientRect(),
          r = n.width,
          a = e.clientX - n.left;
        b.current = a;
        let o = E(a, r),
          c = h.current;
        if (o.kind === `crossfade` && c) {
          ((v.current = `crossfade`),
            m(`crossfade`),
            t.setPointerCapture(e.pointerId),
            e.preventDefault());
          return;
        }
        if (o.kind === `grip` && c) {
          ((v.current = o.side),
            (y.current = o.side === `in` ? c.out_sec : c.in_sec),
            m(o.side),
            t.setPointerCapture(e.pointerId),
            e.preventDefault());
          return;
        }
        ((v.current = `seek`), i?.(null), t.setPointerCapture(e.pointerId));
      },
      [x, E, m, i],
    ),
    O = (0, X.useCallback)(
      (e) => {
        let t = v.current;
        if (t === `none`) return;
        let n = s.current;
        if (!n) return;
        let r = n.getBoundingClientRect(),
          a = r.width,
          o = e.clientX - r.left,
          c = x(),
          l = h.current;
        if (t === `in` || t === `out`) {
          if (!l) return;
          let e = S(o, a),
            n = y.current,
            r = 0.001;
          if (t === `in`) {
            let t = Math.min(e, n - r);
            f(Math.max(0, t), n);
          } else {
            let t = Math.max(e, n + r);
            f(n, Math.min(c, t));
          }
          return;
        }
        if (t === `crossfade`) {
          if (!l) return;
          let e = l.out_sec - l.in_sec;
          if (e <= 0) return;
          let t = C(l.in_sec, a),
            n = C(l.out_sec, a),
            r =
              Math.abs(o - t) <= Math.abs(o - n)
                ? S(o, a) - l.in_sec
                : l.out_sec - S(o, a),
            i = e / 2;
          p(Math.max(0, Math.min(i, r)));
          return;
        }
        let u = Math.abs(o - b.current);
        if (
          (t === `seek` && u > Sde && (v.current = `selection`),
          v.current === `selection`)
        ) {
          let e = S(b.current, a),
            t = S(o, a);
          i?.({ start: Math.min(e, t), end: Math.max(e, t) });
        }
      },
      [x, S, C, f, p, i],
    ),
    k = (0, X.useCallback)(
      (e) => {
        let t = v.current;
        if (t === `none`) return;
        let n = s.current;
        if (n)
          try {
            n.releasePointerCapture(e.pointerId);
          } catch {}
        if (t === `seek`) {
          let t = n?.getBoundingClientRect();
          if (t) {
            let n = e.clientX - t.left;
            a(S(n, t.width));
          }
        }
        ((t === `in` || t === `out` || t === `crossfade`) && m(null),
          (v.current = `none`));
      },
      [S, a, m],
    ),
    A = (0, X.useCallback)(() => {
      let e = x();
      e <= 0 || d(0, e);
    }, [x, d]);
  return (0, Z.jsxs)(`div`, {
    ref: o,
    style: { position: `relative`, width: `100%`, height: `100%` },
    className: `bg-black/40 rounded-md overflow-hidden`,
    children: [
      (0, Z.jsx)(`canvas`, {
        ref: s,
        style: {
          display: `block`,
          width: `100%`,
          height: `100%`,
          cursor:
            u === `crossfade`
              ? `col-resize`
              : u === `in` || u === `out`
                ? `ew-resize`
                : `crosshair`,
          touchAction: `none`,
        },
        onPointerDown: D,
        onPointerMove: O,
        onPointerUp: k,
        onPointerCancel: k,
      }),
      (0, Z.jsx)(`div`, {
        ref: c,
        style: {
          position: `absolute`,
          top: 0,
          left: 0,
          width: `2px`,
          height: `100%`,
          backgroundColor: `#ffffff`,
          pointerEvents: `none`,
          transform: `translateX(0px)`,
          willChange: `transform`,
        },
      }),
      !l &&
        (0, Z.jsx)(`button`, {
          type: `button`,
          onClick: A,
          className: `absolute bottom-1 right-1 text-[10px] px-1.5 py-0.5 rounded bg-teal-600/80 text-white hover:bg-teal-500`,
          title: `Enable a seamless loop spanning the whole clip`,
          children: `+ Loop`,
        }),
    ],
  });
};
