// assets__Create-ea24k1TY 35 — classname
// Lines 11105-11425 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Od({
  characterName: e,
  takenMoves: t,
  busy: n,
  error: r,
  disabled: i = !1,
  onAdd: a,
  onCancel: o,
}) {
  let [s, c] = (0, X.useState)(``),
    [l, u] = (0, X.useState)(!1),
    [d, f] = (0, X.useState)(8),
    [p, m] = (0, X.useState)(10),
    [h, g] = (0, X.useState)(rd(``)),
    [_, v] = (0, X.useState)(256),
    [y, b] = (0, X.useState)(``),
    S = s.trim(),
    C = !!S && t.has(sd(S)),
    w = !!S && !C && !n && !i,
    T = (e) => {
      (u(!1), c(e), g(rd(e)));
    };
  return (0, Z.jsxs)(`div`, {
    className: `space-y-3 border-t border-border pt-3`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, Z.jsxs)(`span`, {
            className: hu,
            children: [`New move for `, e],
          }),
          (0, Z.jsx)(`button`, {
            type: `button`,
            "aria-label": `Close`,
            onClick: o,
            className: `flex h-10 w-10 shrink-0 items-center justify-center rounded text-muted-foreground/60 hover:text-foreground`,
            children: (0, Z.jsx)(li, { className: `h-4 w-4` }),
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `flex flex-wrap gap-1.5`,
        children: [
          td.map((e) => {
            let n = t.has(sd(e)),
              r = !l && S.toLowerCase() === e.toLowerCase();
            return (0, Z.jsx)(
              `button`,
              {
                type: `button`,
                disabled: n || i,
                title: n ? `Already added` : void 0,
                onClick: () => T(e),
                className: `${gu} ${r ? _u : vu} ${n ? `cursor-not-allowed opacity-30 hover:border-border hover:text-muted-foreground` : ``}`,
                children: e,
              },
              e,
            );
          }),
          (0, Z.jsx)(`button`, {
            type: `button`,
            disabled: i,
            onClick: () => {
              (u(!0), c(``), g(rd(``)));
            },
            className: `${gu} ${l ? _u : vu}`,
            children: `Something else`,
          }),
        ],
      }),
      l &&
        (0, Z.jsx)(`input`, {
          type: `text`,
          autoFocus: !0,
          value: s,
          disabled: i,
          onChange: (e) => c(e.target.value),
          placeholder: `e.g. cast spell, roll`,
          className: `w-full ${wu}`,
        }),
      (0, Z.jsx)(Dd, {
        frameCount: d,
        onFrameCount: f,
        fps: p,
        onFps: m,
        loop: h,
        onLoop: g,
        cellHeight: _,
        onCellHeight: v,
        direction: y,
        onDirection: b,
        disabled: i || n,
      }),
      C &&
        (0, Z.jsxs)(`p`, {
          className: `text-[11px] text-amber-400`,
          children: [
            e,
            ` already has a `,
            S.toLowerCase(),
            `. Open it to redraw.`,
          ],
        }),
      r &&
        (0, Z.jsx)(`p`, { className: `text-[11px] text-red-400`, children: r }),
      (0, Z.jsx)(x, {
        onClick: () =>
          a({
            move: S,
            frameCount: d,
            fps: p,
            loop: h,
            cellHeight: _,
            direction: y,
          }),
        disabled: !w,
        variant: `secondary`,
        className: `h-10 w-full bg-secondary text-foreground hover:bg-secondary/70`,
        children: n
          ? (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` })
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(ni, { className: `mr-1 h-4 w-4` }),
                `Add `,
                S ? S.toLowerCase() : `move`,
              ],
            }),
      }),
      (0, Z.jsx)(`p`, {
        className: `text-[10px] text-muted-foreground/40`,
        children: `Adding is free. You pick the moment to draw it.`,
      }),
    ],
  });
}
function kd(e) {
  let [t, n] = (0, X.useState)(null);
  return (
    (0, X.useEffect)(() => {
      n(null);
      let t = new window.Image();
      return (
        (t.crossOrigin = `anonymous`),
        (t.onload = () => n(t)),
        (t.onerror = () => n(null)),
        (t.src = e),
        () => {
          ((t.onload = null), (t.onerror = null));
        }
      );
    }, [e]),
    t
  );
}
function Ad(e, t, n, r) {
  let i = e.getContext(`2d`);
  if (!i) return;
  let a = Math.max(1, n.columns),
    o = Math.max(1, n.frame_count),
    s = Math.max(1, n.frame_width),
    c = Math.max(1, n.frame_height),
    l = ((r % o) + o) % o,
    u = l % a,
    d = Math.floor(l / a);
  (i.clearRect(0, 0, e.width, e.height),
    (i.imageSmoothingEnabled = !1),
    i.drawImage(t, u * s, d * c, s, c, 0, 0, e.width, e.height));
}
function jd() {
  return (
    typeof window < `u` &&
    typeof window.matchMedia == `function` &&
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
  );
}
function Md({ imageUrl: e, meta: t, className: n = `` }) {
  let r = (0, X.useRef)(null),
    i = (0, X.useRef)(0),
    a = kd(e);
  return (
    (0, X.useEffect)(() => {
      let e = r.current;
      if (!e || !a) return;
      let { start: n, count: o } = pd(t);
      if (((i.current = n), Ad(e, a, t, n), jd())) return;
      let s = 1e3 / Math.max(1, t.fps),
        c = performance.now(),
        l = 0,
        u = (r) => {
          (r - c >= s &&
            ((c = r),
            (i.current = n + ((i.current - n + 1) % o)),
            Ad(e, a, t, i.current)),
            (l = requestAnimationFrame(u)));
        };
      return ((l = requestAnimationFrame(u)), () => cancelAnimationFrame(l));
    }, [a, t]),
    (0, Z.jsx)(`div`, {
      className: `relative flex h-full w-full items-center justify-center ${n}`,
      style: Ml,
      children: (0, Z.jsx)(`canvas`, {
        ref: r,
        width: t.frame_width,
        height: t.frame_height,
        className: `max-h-full max-w-full`,
        style: { imageRendering: `pixelated`, objectFit: `contain` },
      }),
    })
  );
}
function Nd({
  imageUrl: e,
  meta: t,
  frame: n,
  playing: r,
  previewFps: i,
  onFrameChange: a,
  onEnded: o,
}) {
  let s = (0, X.useRef)(null),
    c = kd(e);
  return (
    (0, X.useEffect)(() => {
      let e = s.current;
      !e || !c || Ad(e, c, t, n);
    }, [c, t, n]),
    (0, X.useEffect)(() => {
      if (!r || !c) return;
      let e = 1e3 / Math.max(1, i),
        { start: s, count: l } = pd(t),
        u = t.loop === !1,
        d = performance.now(),
        f = 0,
        p = n;
      u && (((p - s) % l) + l) % l === l - 1 && ((p = s), a(s));
      let m = (t) => {
        if (t - d >= e) {
          d = t;
          let e = (((p - s) % l) + l) % l;
          if (u && e === l - 1) {
            o?.();
            return;
          }
          ((p = s + ((e + 1) % l)), a(p));
        }
        f = requestAnimationFrame(m);
      };
      return ((f = requestAnimationFrame(m)), () => cancelAnimationFrame(f));
    }, [r, c, i, t.loop, t.frame_count, t.play_start, t.play_count, a, o]),
    (0, Z.jsx)(`div`, {
      className: `relative flex h-full w-full items-center justify-center`,
      style: Ml,
      children: (0, Z.jsx)(`canvas`, {
        ref: s,
        width: t.frame_width,
        height: t.frame_height,
        className: `max-h-full max-w-full`,
        style: { imageRendering: `pixelated`, objectFit: `contain` },
      }),
    })
  );
}
function Pd({
  move: e,
  characterName: t,
  sessionDir: n,
  selected: r,
  generating: i,
  onSelect: a,
}) {
  let o = e.concept_art_path
      ? jr.getAssetUrl(n, e.concept_art_path, {
          version: e.concept_art_version ?? e.modified ?? void 0,
        })
      : null,
    s = !!o && !!e.sheet_meta;
  return (0, Z.jsxs)(`button`, {
    type: `button`,
    onClick: a,
    className: `min-w-0 text-left`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `relative aspect-square overflow-hidden rounded-lg border transition-all ${o ? `border-border` : `border-dashed border-border/50`} ${r ? `border-white/25 ${Du}` : `hover:border-white/20`}`,
        children: [
          s
            ? (0, Z.jsx)(Md, { imageUrl: o, meta: e.sheet_meta })
            : o
              ? (0, Z.jsx)(`img`, {
                  src: o,
                  alt: e.asset_name,
                  className: `h-full w-full object-contain`,
                  style: Ml,
                })
              : (0, Z.jsx)(`div`, {
                  className: `flex h-full w-full items-center justify-center bg-card`,
                  children: i
                    ? (0, Z.jsx)(J, {
                        className: `h-5 w-5 animate-spin text-muted-foreground`,
                      })
                    : (0, Z.jsx)(Qt, {
                        className: `h-5 w-5 text-muted-foreground/30`,
                      }),
                }),
          i &&
            o &&
            (0, Z.jsx)(`div`, {
              className: `absolute inset-0 flex items-center justify-center bg-card/60`,
              children: (0, Z.jsx)(J, {
                className: `h-5 w-5 animate-spin text-muted-foreground`,
              }),
            }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `mt-1 truncate text-[10px] text-muted-foreground first-letter:uppercase`,
        children: fd(e.asset_name, t),
      }),
    ],
  });
}
