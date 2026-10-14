// assets__Create-ea24k1TY 260 — current
// Lines 86981-87804 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var t6 = 7,
  n6 = 26,
  vme = ({ mediaCache: e, engine: t, isActive: n, onImportFiles: r }) => {
    let i = (0, X.useRef)(null),
      a = (0, X.useRef)(null),
      o = (0, X.useRef)({ zoom: 0.4, panX: 0, panY: 0, fit: !0 }),
      s = (0, X.useRef)(null),
      c = (0, X.useRef)(!1),
      [l, u] = (0, X.useState)(`fit`),
      [d, f] = (0, X.useState)(!1),
      p = (0, X.useRef)(d);
    p.current = d;
    let m = G3((e) => e.doc),
      h = G3((e) => e.docVersion),
      g = G3((e) => e.mediaVersion),
      _ = G3((e) => e.selectedTrackId),
      v = G3((e) => e.selectedClipId),
      y = (0, X.useRef)(m);
    y.current = m;
    let b = (0, X.useRef)({ trackId: _, clipId: v });
    b.current = { trackId: _, clipId: v };
    let x = (0, X.useMemo)(
        () => ({
          getImageSource: (t) => {
            if (t.asset.source === `text`) return null;
            let n = e.getVisualMeta(t.asset);
            if ((e.ensureLoaded(t.asset), n && n.duration_sec > 0)) {
              let n = e.getVideoElement(t.asset, t.id);
              return n && n.readyState >= 2 ? n : null;
            }
            return e.getImageBitmap(t.asset);
          },
          getNaturalSize: (t) => {
            if (t.asset.source === `text`) return null;
            let n = e.getVisualMeta(t.asset);
            return n ? { width: n.width, height: n.height } : null;
          },
        }),
        [e],
      ),
      S = (0, X.useCallback)(() => {
        let e = o.current;
        if (!e.fit) return;
        let t = i.current;
        if (!t) return;
        let { width: n, height: r } = t.getBoundingClientRect(),
          a = y.current.settings,
          s = Math.min((n - 32) / a.width, (r - 32) / a.height, 4);
        ((e.zoom = Math.max(0.01, s)),
          (e.panX = (n - a.width * e.zoom) / 2),
          (e.panY = (r - a.height * e.zoom) / 2));
      }, []),
      C = (0, X.useCallback)((e, t) => {
        let n = o.current,
          r = i.current?.getBoundingClientRect(),
          a = e - (r?.left ?? 0),
          s = t - (r?.top ?? 0);
        return { x: (a - n.panX) / n.zoom, y: (s - n.panY) / n.zoom };
      }, []),
      w = (0, X.useCallback)((e, t) => {
        let n = o.current;
        return { x: n.panX + e * n.zoom, y: n.panY + t * n.zoom };
      }, []),
      T = (0, X.useCallback)(
        (e, t, n, r, i) => {
          let a = e.scale,
            o = Math.cos(e.rotationRad),
            s = Math.sin(e.rotationRad);
          return [
            [t, n],
            [r, n],
            [r, i],
            [t, i],
          ].map(([t, n]) => {
            let r = t * a,
              i = n * a;
            return w(e.x + r * o - i * s, e.y + r * s + i * o);
          });
        },
        [w],
      ),
      E = (0, X.useCallback)(() => {
        let e = a.current,
          n = i.current;
        if (!e || !n) return;
        let r = n.getBoundingClientRect(),
          s = window.devicePixelRatio || 1,
          c = Math.max(1, Math.round(r.width)),
          l = Math.max(1, Math.round(r.height));
        (e.width !== c * s || e.height !== l * s) &&
          ((e.width = c * s),
          (e.height = l * s),
          (e.style.width = `${c}px`),
          (e.style.height = `${l}px`));
        let u = e.getContext(`2d`);
        if (!u) return;
        S();
        let d = o.current,
          f = y.current,
          m = t.getCurrentTime();
        (u.setTransform(s, 0, 0, s, 0, 0),
          u.clearRect(0, 0, c, l),
          (u.fillStyle = `#0c0e12`),
          u.fillRect(0, 0, c, l));
        let h = d.panX,
          g = d.panY,
          _ = f.settings.width * d.zoom,
          v = f.settings.height * d.zoom;
        ((u.strokeStyle = `rgba(255,255,255,0.12)`),
          (u.lineWidth = 1),
          u.strokeRect(h - 0.5, g - 0.5, _ + 1, v + 1),
          u.save(),
          u.translate(d.panX, d.panY),
          u.scale(d.zoom, d.zoom),
          $3(u, f, m, x),
          u.restore());
        let C = b.current;
        if (C.trackId && C.clipId) {
          let e = f.tracks.find((e) => e.id === C.trackId),
            t = e?.clips.find((e) => e.id === C.clipId);
          if (e && t && O3(e.kind) && T3(t, m)) {
            let n = Z3(t, m, x);
            if (n) {
              let t = Q3(n).map((e) => w(e.x, e.y)),
                r = e.kind === `video` || e.kind === `image`;
              if (p.current && r) {
                let e = T(
                  n,
                  -n.naturalWidth / 2,
                  -n.naturalHeight / 2,
                  n.naturalWidth / 2,
                  n.naturalHeight / 2,
                );
                (u.setLineDash([4, 3]),
                  (u.strokeStyle = `rgba(255,255,255,0.35)`),
                  (u.lineWidth = 1),
                  u.beginPath(),
                  e.forEach((e, t) =>
                    t === 0 ? u.moveTo(e.x, e.y) : u.lineTo(e.x, e.y),
                  ),
                  u.closePath(),
                  u.stroke(),
                  u.setLineDash([]),
                  (u.strokeStyle = `#22d3ee`),
                  (u.lineWidth = 1.5),
                  u.beginPath(),
                  t.forEach((e, t) =>
                    t === 0 ? u.moveTo(e.x, e.y) : u.lineTo(e.x, e.y),
                  ),
                  u.closePath(),
                  u.stroke());
                let r = [
                  { x: (t[0].x + t[1].x) / 2, y: (t[0].y + t[1].y) / 2 },
                  { x: (t[1].x + t[2].x) / 2, y: (t[1].y + t[2].y) / 2 },
                  { x: (t[2].x + t[3].x) / 2, y: (t[2].y + t[3].y) / 2 },
                  { x: (t[3].x + t[0].x) / 2, y: (t[3].y + t[0].y) / 2 },
                ];
                u.fillStyle = `#22d3ee`;
                for (let e of [...t, ...r])
                  (u.beginPath(),
                    u.rect(e.x - t6 / 2, e.y - t6 / 2, t6, t6),
                    u.fill());
              } else {
                ((u.strokeStyle = `#a78bfa`),
                  (u.lineWidth = 1.5),
                  u.beginPath(),
                  t.forEach((e, t) =>
                    t === 0 ? u.moveTo(e.x, e.y) : u.lineTo(e.x, e.y),
                  ),
                  u.closePath(),
                  u.stroke(),
                  (u.fillStyle = `#0c0e12`));
                for (let e of t)
                  (u.beginPath(),
                    u.rect(e.x - t6 / 2, e.y - t6 / 2, t6, t6),
                    u.fill(),
                    u.stroke());
                let e = { x: (t[0].x + t[1].x) / 2, y: (t[0].y + t[1].y) / 2 },
                  r = w(n.x, n.y),
                  i = e.x - r.x,
                  a = e.y - r.y,
                  o = Math.hypot(i, a) || 1,
                  s = e.x + (i / o) * n6,
                  c = e.y + (a / o) * n6;
                (u.beginPath(),
                  u.moveTo(e.x, e.y),
                  u.lineTo(s, c),
                  u.stroke(),
                  u.beginPath(),
                  u.arc(s, c, 4.5, 0, Math.PI * 2),
                  u.fill(),
                  u.stroke());
              }
            }
          }
        }
      }, [w, S, t, T, x]);
    ((0, X.useEffect)(() => {
      if (n) return t.subscribePlayhead(() => E());
    }, [t, E, n]),
      (0, X.useEffect)(() => {
        E();
      }, [E, h, g, n, _, v, d]),
      (0, X.useEffect)(() => {
        let e = i.current;
        if (!e) return;
        let t = new ResizeObserver(() => E());
        return (t.observe(e), () => t.disconnect());
      }, [E]));
    let D = (0, X.useCallback)(() => {
        let e = b.current;
        if (!e.trackId || !e.clipId) return null;
        let n = y.current.tracks.find((t) => t.id === e.trackId),
          r = n?.clips.find((t) => t.id === e.clipId);
        return !n || !r || !O3(n.kind) || !T3(r, t.getCurrentTime())
          ? null
          : { trackId: n.id, clip: r };
      }, [t]),
      O = (0, X.useCallback)(
        (e, n) => {
          let r = D();
          if (!r) return null;
          let a = i.current?.getBoundingClientRect(),
            o = e - (a?.left ?? 0),
            s = n - (a?.top ?? 0),
            c = Z3(r.clip, t.getCurrentTime(), x);
          if (!c) return null;
          let l = Q3(c).map((e) => w(e.x, e.y));
          for (let e = 0; e < l.length; e++)
            if (Math.hypot(l[e].x - o, l[e].y - s) <= 11) return e;
          let u = { x: (l[0].x + l[1].x) / 2, y: (l[0].y + l[1].y) / 2 },
            d = w(c.x, c.y),
            f = u.x - d.x,
            p = u.y - d.y,
            m = Math.hypot(f, p) || 1,
            h = u.x + (f / m) * n6,
            g = u.y + (p / m) * n6;
          return Math.hypot(h - o, g - s) <= 11 ? `rotate` : null;
        },
        [w, t, D, x],
      ),
      k = (0, X.useCallback)(
        (e, n) => {
          let r = D();
          if (!r) return null;
          let a = y.current.tracks.find((e) => e.id === r.trackId);
          if (!a || (a.kind !== `video` && a.kind !== `image`)) return null;
          let o = i.current?.getBoundingClientRect(),
            s = e - (o?.left ?? 0),
            c = n - (o?.top ?? 0),
            l = Z3(r.clip, t.getCurrentTime(), x);
          if (!l) return null;
          let u = Q3(l).map((e) => w(e.x, e.y)),
            d = [
              { p: u[0], e: { l: !0, t: !0, r: !1, b: !1 } },
              { p: u[1], e: { l: !1, t: !0, r: !0, b: !1 } },
              { p: u[2], e: { l: !1, t: !1, r: !0, b: !0 } },
              { p: u[3], e: { l: !0, t: !1, r: !1, b: !0 } },
              {
                p: { x: (u[0].x + u[1].x) / 2, y: (u[0].y + u[1].y) / 2 },
                e: { l: !1, t: !0, r: !1, b: !1 },
              },
              {
                p: { x: (u[1].x + u[2].x) / 2, y: (u[1].y + u[2].y) / 2 },
                e: { l: !1, t: !1, r: !0, b: !1 },
              },
              {
                p: { x: (u[2].x + u[3].x) / 2, y: (u[2].y + u[3].y) / 2 },
                e: { l: !1, t: !1, r: !1, b: !0 },
              },
              {
                p: { x: (u[3].x + u[0].x) / 2, y: (u[3].y + u[0].y) / 2 },
                e: { l: !0, t: !1, r: !1, b: !1 },
              },
            ];
          for (let e of d)
            if (Math.hypot(e.p.x - s, e.p.y - c) <= 11) return e.e;
          return null;
        },
        [w, t, D, x],
      ),
      A = (0, X.useCallback)(
        (e, n, r) => {
          let i = D();
          if (!i) return;
          let a = Z3(i.clip, t.getCurrentTime(), x);
          if (!a) return;
          let o = C(n, r),
            s = o.x - a.x,
            c = o.y - a.y,
            l = Math.cos(-a.rotationRad),
            u = Math.sin(-a.rotationRad),
            d = (s * l - c * u) / (a.scale || 1e-6),
            f = (s * u + c * l) / (a.scale || 1e-6),
            p = a.naturalWidth,
            m = a.naturalHeight,
            h = {};
          (e.l && (h.left = (d + p / 2) / p),
            e.r && (h.right = (p / 2 - d) / p),
            e.t && (h.top = (f + m / 2) / m),
            e.b && (h.bottom = (m / 2 - f) / m),
            G3.getState().setClipCrop(i.trackId, i.clip.id, h));
        },
        [t, D, x, C],
      ),
      j = (0, X.useCallback)(
        (e, n) => {
          let r = b.current;
          !r.trackId ||
            !r.clipId ||
            G3.getState().setTransformValueAt(
              r.trackId,
              r.clipId,
              e,
              n,
              t.getCurrentTime(),
            );
        },
        [t],
      ),
      M = (0, X.useCallback)(
        (e) => {
          if (e.button === 1 || c.current) {
            let t = o.current;
            ((s.current = {
              kind: `pan`,
              startX: e.clientX,
              startY: e.clientY,
              origPanX: t.panX,
              origPanY: t.panY,
            }),
              (t.fit = !1),
              e.target.setPointerCapture(e.pointerId));
            return;
          }
          if (e.button !== 0) return;
          let n = t.getCurrentTime(),
            r = G3.getState();
          if (p.current) {
            let t = k(e.clientX, e.clientY);
            if (t) {
              (r.beginGesture(),
                (s.current = { kind: `crop`, edges: t }),
                e.target.setPointerCapture(e.pointerId));
              return;
            }
            let i = C(e.clientX, e.clientY),
              a = e6(y.current, n, i.x, i.y, x);
            (a
              ? (r.selectClip(a.track.id, a.clip.id),
                (b.current = { trackId: a.track.id, clipId: a.clip.id }))
              : (r.selectClip(null, null),
                (b.current = { trackId: null, clipId: null })),
              E());
            return;
          }
          let a = O(e.clientX, e.clientY),
            l = D();
          if (a !== null && l) {
            let t = Z3(l.clip, n, x);
            if (!t) return;
            let o = w(t.x, t.y),
              c = i.current?.getBoundingClientRect(),
              u = e.clientX - (c?.left ?? 0),
              d = e.clientY - (c?.top ?? 0);
            (r.beginGesture(),
              a === `rotate`
                ? (s.current = {
                    kind: `rotate`,
                    centerSX: o.x,
                    centerSY: o.y,
                    startAngle: Math.atan2(d - o.y, u - o.x),
                    origRotation: D3(l.clip, `rotation`, n),
                  })
                : (s.current = {
                    kind: `scale`,
                    centerSX: o.x,
                    centerSY: o.y,
                    startDist: Math.max(4, Math.hypot(u - o.x, d - o.y)),
                    origScale: D3(l.clip, `scale`, n),
                  }),
              e.target.setPointerCapture(e.pointerId));
            return;
          }
          let u = C(e.clientX, e.clientY),
            d = e6(y.current, n, u.x, u.y, x);
          (d
            ? (r.selectClip(d.track.id, d.clip.id),
              (b.current = { trackId: d.track.id, clipId: d.clip.id }),
              r.beginGesture(),
              (s.current = {
                kind: `move`,
                startX: e.clientX,
                startY: e.clientY,
                origX: D3(d.clip, `x`, n),
                origY: D3(d.clip, `y`, n),
              }),
              e.target.setPointerCapture(e.pointerId))
            : (r.selectClip(null, null),
              (b.current = { trackId: null, clipId: null })),
            E());
        },
        [w, E, t, D, k, O, x, C],
      ),
      N = (0, X.useCallback)(
        (e) => {
          let t = s.current;
          if (!t) return;
          let n = o.current;
          if (t.kind === `pan`) {
            ((n.panX = t.origPanX + (e.clientX - t.startX)),
              (n.panY = t.origPanY + (e.clientY - t.startY)),
              u(`${Math.round(n.zoom * 100)}%`),
              E());
            return;
          }
          if (t.kind === `move`) {
            let r = (e.clientX - t.startX) / n.zoom,
              i = (e.clientY - t.startY) / n.zoom;
            (j(`x`, Math.round((t.origX + r) * 10) / 10),
              j(`y`, Math.round((t.origY + i) * 10) / 10));
            return;
          }
          if (t.kind === `crop`) {
            A(t.edges, e.clientX, e.clientY);
            return;
          }
          let r = i.current?.getBoundingClientRect(),
            a = e.clientX - (r?.left ?? 0),
            c = e.clientY - (r?.top ?? 0);
          if (t.kind === `scale`) {
            let e = Math.max(4, Math.hypot(a - t.centerSX, c - t.centerSY)),
              n =
                (Math.sign(t.origScale) || 1) *
                Math.max(
                  1,
                  Math.min(2e3, (Math.abs(t.origScale) * e) / t.startDist),
                );
            j(`scale`, Math.round(n * 10) / 10);
            return;
          }
          if (t.kind === `rotate`) {
            let n =
                ((Math.atan2(c - t.centerSY, a - t.centerSX) - t.startAngle) *
                  180) /
                Math.PI,
              r = t.origRotation + n;
            (e.shiftKey && (r = Math.round(r / 15) * 15),
              j(`rotation`, Math.round(r * 10) / 10));
          }
        },
        [A, E, j],
      ),
      P = (0, X.useCallback)(() => {
        if (!s.current) return;
        let e = s.current.kind !== `pan`;
        ((s.current = null), e && G3.getState().endGesture());
      }, []);
    ((0, X.useEffect)(() => {
      let e = a.current;
      if (!e) return;
      let t = (t) => {
        t.preventDefault();
        let n = o.current,
          r = e.getBoundingClientRect(),
          i = t.clientX - r.left,
          a = t.clientY - r.top,
          s = Math.exp(-t.deltaY * 0.0015),
          c = Math.max(0.02, Math.min(8, n.zoom * s));
        ((n.panX = i - ((i - n.panX) / n.zoom) * c),
          (n.panY = a - ((a - n.panY) / n.zoom) * c),
          (n.zoom = c),
          (n.fit = !1),
          u(`${Math.round(c * 100)}%`),
          E());
      };
      return (
        e.addEventListener(`wheel`, t, { passive: !1 }),
        () => e.removeEventListener(`wheel`, t)
      );
    }, [E]),
      (0, X.useEffect)(() => {
        if (!n) return;
        let e = (e) => {
            if (
              (e.code === `Space` && (c.current = !0),
              e.code === `KeyC` && !e.ctrlKey && !e.metaKey && !e.altKey)
            ) {
              let e = document.activeElement;
              (e &&
                (e.tagName === `INPUT` ||
                  e.tagName === `TEXTAREA` ||
                  e.isContentEditable)) ||
                f((e) => !e);
            }
          },
          t = (e) => {
            e.code === `Space` && (c.current = !1);
          };
        return (
          window.addEventListener(`keydown`, e),
          window.addEventListener(`keyup`, t),
          () => {
            (window.removeEventListener(`keydown`, e),
              window.removeEventListener(`keyup`, t));
          }
        );
      }, [n]));
    let F = (0, X.useCallback)(() => {
        ((o.current.fit = !0), u(`fit`), E());
      }, [E]),
      I = (0, X.useCallback)(
        (e) => {
          let t = o.current,
            n = i.current?.getBoundingClientRect(),
            r = (n?.width ?? 0) / 2,
            a = (n?.height ?? 0) / 2,
            s = Math.max(0.02, Math.min(8, t.zoom * e));
          ((t.panX = r - ((r - t.panX) / t.zoom) * s),
            (t.panY = a - ((a - t.panY) / t.zoom) * s),
            (t.zoom = s),
            (t.fit = !1),
            u(`${Math.round(s * 100)}%`),
            E());
        },
        [E],
      ),
      { dropProps: L, isOver: R } = Oe({
        accept: `comp-asset`,
        onDrop: (n, r) => {
          let i = n.payload,
            a = C(r.x, r.y);
          K3(e, i, { start_sec: t.getCurrentTime(), x: a.x, y: a.y });
        },
      }),
      [z, B] = (0, X.useState)(!1),
      H = (0, X.useCallback)(
        (e) => {
          (e.preventDefault(), B(!1));
          let t = Array.from(e.dataTransfer.files ?? []);
          t.length !== 0 && r(t, C(e.clientX, e.clientY));
        },
        [r, C],
      );
    return (0, Z.jsxs)(`div`, {
      ref: (e) => {
        ((i.current = e), L.ref(e));
      },
      "data-dnd-zone": L[`data-dnd-zone`],
      className: `relative h-full w-full overflow-hidden bg-card ${R || z ? `ring-2 ring-inset ring-violet-500/60` : ``}`,
      onDragOver: (e) => {
        e.dataTransfer.types.includes(`Files`) && (e.preventDefault(), B(!0));
      },
      onDragLeave: () => B(!1),
      onDrop: H,
      children: [
        (0, Z.jsx)(`canvas`, {
          ref: a,
          className: `block h-full w-full touch-none`,
          onPointerDown: M,
          onPointerMove: N,
          onPointerUp: P,
          onPointerCancel: P,
        }),
        (0, Z.jsx)(`div`, {
          className: `absolute left-3 top-3 z-10 flex items-center gap-0.5 rounded-lg border border-border bg-card/90 px-1 py-0.5 shadow-lg backdrop-blur-sm`,
          children: (0, Z.jsxs)(`button`, {
            type: `button`,
            onClick: () => f((e) => !e),
            className: `flex items-center gap-1 rounded px-1.5 py-1 text-[10px] font-medium transition-colors ${d ? `bg-cyan-500/20 text-cyan-300` : `text-muted-foreground hover:bg-gray-700/50 hover:text-gray-200`}`,
            title: `Crop (C) — drag the edges of the selected image or video`,
            "aria-label": `Toggle crop mode`,
            "aria-pressed": d,
            children: [(0, Z.jsx)(mo, { className: `h-3.5 w-3.5` }), `Crop`],
          }),
        }),
        (0, Z.jsxs)(`div`, {
          className: `absolute bottom-3 right-3 z-10 flex items-center gap-0.5 rounded-lg border border-border bg-card/90 px-1 py-0.5 shadow-lg backdrop-blur-sm`,
          children: [
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => I(1 / 1.25),
              className: `rounded p-1 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200`,
              title: `Zoom out`,
              "aria-label": `Zoom out`,
              children: (0, Z.jsx)(V, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: F,
              className: `min-w-[44px] rounded px-1.5 py-1 text-[10px] font-mono text-gray-300 transition-colors hover:bg-gray-700/50`,
              title: `Fit composition`,
              children: l,
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => I(1.25),
              className: `rounded p-1 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200`,
              title: `Zoom in`,
              "aria-label": `Zoom in`,
              children: (0, Z.jsx)(ni, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: F,
              className: `rounded p-1 text-muted-foreground transition-colors hover:bg-gray-700/50 hover:text-gray-200`,
              title: `Fit`,
              "aria-label": `Fit`,
              children: (0, Z.jsx)(Oo, { className: `h-3.5 w-3.5` }),
            }),
          ],
        }),
        (R || z) &&
          (0, Z.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0 z-10 flex items-center justify-center`,
            children: (0, Z.jsx)(`span`, {
              className: `rounded-md border border-violet-500/40 bg-card/95 px-3 py-1.5 text-xs text-violet-200 shadow-lg`,
              children: `Drop to add to composition`,
            }),
          }),
      ],
    });
  },
  r6 = (e) =>
    Math.max(
      16,
      Math.min(
        8192,
        Math.floor(Math.round(Number.isFinite(e) ? e : 0) / 2) * 2,
      ),
    ),
  yme = ({ open: e, onOpenChange: t }) => {
    let n = G3((e) => e.doc.settings),
      [r, i] = (0, X.useState)(String(n.width)),
      [a, o] = (0, X.useState)(String(n.height)),
      [s, c] = (0, X.useState)(String(n.fps)),
      [l, u] = (0, X.useState)(n.background),
      [d, f] = (0, X.useState)(n.duration_mode),
      [p, m] = (0, X.useState)(String(n.fixed_duration_sec));
    (0, X.useEffect)(() => {
      e &&
        (i(String(n.width)),
        o(String(n.height)),
        c(String(n.fps)),
        u(n.background),
        f(n.duration_mode),
        m(String(n.fixed_duration_sec)));
    }, [e, n]);
    let h = () => {
        (G3.getState().updateSettings({
          width: r6(parseFloat(r)),
          height: r6(parseFloat(a)),
          fps: Math.max(1, Math.min(120, Math.round(parseFloat(s) || 30))),
          background: l,
          duration_mode: d,
          fixed_duration_sec: Number.isFinite(parseFloat(p))
            ? Math.min(d3, Math.max(1, parseFloat(p)))
            : 30,
        }),
          t(!1));
      },
      g = `w-full rounded border border-gray-700/60 bg-card px-2 py-1 text-xs text-gray-200 outline-none focus:border-violet-500/60`;
    return (0, Z.jsx)(no, {
      open: e,
      onOpenChange: t,
      children: (0, Z.jsxs)($a, {
        className: `max-w-md`,
        children: [
          (0, Z.jsxs)(Za, {
            children: [
              (0, Z.jsx)(eo, { children: `Composition settings` }),
              (0, Z.jsx)(to, {
                children: `Canvas resolution, frame rate and duration for this composition.`,
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `grid grid-cols-3 gap-2`,
            children: [
              (0, Z.jsxs)(`label`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `Width`,
                  (0, Z.jsx)(`input`, {
                    value: r,
                    onChange: (e) => i(e.target.value),
                    inputMode: `numeric`,
                    className: g,
                  }),
                ],
              }),
              (0, Z.jsxs)(`label`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `Height`,
                  (0, Z.jsx)(`input`, {
                    value: a,
                    onChange: (e) => o(e.target.value),
                    inputMode: `numeric`,
                    className: g,
                  }),
                ],
              }),
              (0, Z.jsxs)(`label`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `FPS`,
                  (0, Z.jsx)(`input`, {
                    value: s,
                    onChange: (e) => c(e.target.value),
                    inputMode: `numeric`,
                    className: g,
                  }),
                ],
              }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `grid grid-cols-3 gap-1.5`,
            children: tme.map((e) =>
              (0, Z.jsxs)(
                `button`,
                {
                  type: `button`,
                  onClick: () => {
                    (i(String(e.width)), o(String(e.height)));
                  },
                  className: `rounded-md border px-2 py-1.5 text-left transition-colors ${String(e.width) === r && String(e.height) === a ? `border-violet-500/60 bg-violet-500/10` : `border-border hover:border-violet-500/40`}`,
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `text-[11px] font-medium text-gray-200`,
                      children: e.label,
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `text-[9px] text-gray-500`,
                      children: [e.width, `×`, e.height, ` · `, e.hint],
                    }),
                  ],
                },
                e.label,
              ),
            ),
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-end gap-3`,
            children: [
              (0, Z.jsxs)(`label`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `Background`,
                  (0, Z.jsxs)(`div`, {
                    className: `mt-1 flex items-center gap-1.5`,
                    children: [
                      (0, Z.jsx)(`input`, {
                        type: `color`,
                        value: l,
                        onChange: (e) => u(e.target.value),
                        className: `h-7 w-9 cursor-pointer rounded border border-gray-700/60 bg-transparent`,
                        "aria-label": `Background color`,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `font-mono text-[10px] text-gray-500`,
                        children: l,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(`label`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `Duration`,
                  (0, Z.jsxs)(`select`, {
                    value: d,
                    onChange: (e) => f(e.target.value),
                    className: `${g} mt-1`,
                    children: [
                      (0, Z.jsx)(`option`, {
                        value: `auto`,
                        children: `Auto (last clip end)`,
                      }),
                      (0, Z.jsx)(`option`, {
                        value: `fixed`,
                        children: `Fixed`,
                      }),
                    ],
                  }),
                ],
              }),
              d === `fixed` &&
                (0, Z.jsxs)(`label`, {
                  className: `text-xs text-muted-foreground`,
                  children: [
                    `Seconds`,
                    (0, Z.jsx)(`input`, {
                      value: p,
                      onChange: (e) => m(e.target.value),
                      inputMode: `numeric`,
                      className: `${g} mt-1 w-20`,
                    }),
                  ],
                }),
            ],
          }),
          (0, Z.jsxs)(Qa, {
            children: [
              (0, Z.jsx)(`button`, {
                type: `button`,
                onClick: () => t(!1),
                className: `rounded-md border border-gray-700/60 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-gray-800/60`,
                children: `Cancel`,
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                onClick: h,
                className: `rounded-md border border-primary/30 bg-primary/20 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/30`,
                children: `Apply`,
              }),
            ],
          }),
        ],
      }),
    });
  };
