// SceneEditor-NC7_0wmu 80 — classname
// Lines 38654-39172 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Hx = ({ open: e, onClose: t, shortcuts: n, onSetShortcut: r }) => {
    let [i, a] = (0, J.useState)(null),
      [o, s] = (0, J.useState)(null);
    ((0, J.useEffect)(() => {
      if (!e) return;
      let n = (e) => {
        e.key === `Escape` && !i && (e.preventDefault(), t());
      };
      return (
        window.addEventListener(`keydown`, n),
        () => window.removeEventListener(`keydown`, n)
      );
    }, [e, t, i]),
      (0, J.useEffect)(() => {
        if (!i) return;
        let e = (e) => {
          (e.preventDefault(), e.stopPropagation());
          let t = e.key.toLowerCase();
          if ([`control`, `shift`, `alt`, `meta`].includes(t)) return;
          if (t === `escape`) {
            (a(null), s(null));
            return;
          }
          let o = ec(e),
            c = Object.entries(n).find(([e, t]) => t === o && e !== i);
          if (c) {
            let e = n[i];
            (r(c[0], e),
              s({ action: i, existingAction: c[0] }),
              setTimeout(() => s(null), 2e3));
          }
          (r(i, o), a(null));
        };
        return (
          window.addEventListener(`keydown`, e, !0),
          () => window.removeEventListener(`keydown`, e, !0)
        );
      }, [i, n, r]));
    let c = (0, J.useCallback)(() => {
      try {
        localStorage.removeItem(Ys);
      } catch {}
      for (let [e, t] of Object.entries(Xs)) r(e, t);
      (a(null), s(null));
    }, [r]);
    if (!e) return null;
    let l = Object.keys(n);
    return (0, Y.jsx)(`div`, {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm`,
      onClick: (e) => {
        e.target === e.currentTarget && !i && t();
      },
      children: (0, Y.jsxs)(`div`, {
        className: `w-full max-w-md bg-card border border-border rounded-lg shadow-2xl overflow-hidden`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `flex items-center justify-between px-4 py-3 border-b border-border`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, Y.jsx)(jn, { className: `w-4 h-4 text-primary` }),
                  (0, Y.jsx)(`span`, {
                    className: `text-[13px] font-semibold text-foreground`,
                    children: `Keyboard Shortcuts`,
                  }),
                ],
              }),
              (0, Y.jsx)(`button`, {
                onClick: t,
                className: `flex items-center justify-center w-6 h-6 rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors`,
                children: (0, Y.jsx)(te, { className: `w-3.5 h-3.5` }),
              }),
            ],
          }),
          o &&
            (0, Y.jsxs)(`div`, {
              className: `px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-[11px] text-yellow-400`,
              children: [
                `Swapped with "`,
                Bx[o.existingAction] || o.existingAction,
                `" to resolve conflict`,
              ],
            }),
          (0, Y.jsx)(`div`, {
            className: `max-h-[60vh] overflow-y-auto`,
            children: (0, Y.jsx)(`div`, {
              className: `divide-y divide-border`,
              children: l.map((e) => {
                let t = n[e],
                  r = Xs[e],
                  o = t !== r,
                  c = i === e;
                return (0, Y.jsxs)(
                  `div`,
                  {
                    className: `flex items-center justify-between px-4 py-2.5 hover:bg-accent/30 transition-colors`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `flex flex-col gap-0.5`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            className: `text-[12px] font-medium text-foreground`,
                            children: Bx[e] || e,
                          }),
                          o &&
                            (0, Y.jsxs)(`span`, {
                              className: `text-[10px] text-muted-foreground`,
                              children: [`Default: `, Vx(r)],
                            }),
                        ],
                      }),
                      (0, Y.jsx)(`button`, {
                        onClick: () => {
                          (a(c ? null : e), s(null));
                        },
                        className: `px-3 py-1 rounded text-[11px] font-mono transition-colors min-w-[80px] text-center ${c ? `bg-primary/30 text-primary border border-primary/50 animate-pulse` : o ? `bg-accent text-primary border border-primary/20 hover:border-primary/40` : `bg-accent text-foreground/70 border border-transparent hover:border-border`}`,
                        children: c ? `Press key...` : Vx(t),
                      }),
                    ],
                  },
                  e,
                );
              }),
            }),
          }),
          (0, Y.jsxs)(`div`, {
            className: `flex items-center justify-between px-4 py-3 border-t border-border`,
            children: [
              (0, Y.jsx)(`span`, {
                className: `text-[10px] text-muted-foreground`,
                children: `Click a binding to reassign`,
              }),
              (0, Y.jsxs)(`button`, {
                onClick: c,
                className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground border border-transparent hover:border-border transition-colors`,
                children: [
                  (0, Y.jsx)(C, { className: `w-3 h-3` }),
                  `Reset to Defaults`,
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ux = 3,
  Wx = 250,
  Gx = ({
    value: e,
    onCommit: t,
    onChange: n,
    step: r = 0.1,
    min: i,
    max: a,
    precision: o,
    disabled: s,
    title: c,
    className: l,
    "aria-label": u,
  }) => {
    let d = (0, J.useCallback)(
        (e) =>
          Number.isFinite(e)
            ? o === void 0
              ? String(parseFloat(e.toPrecision(12)))
              : e.toFixed(o)
            : ``,
        [o],
      ),
      [f, p] = (0, J.useState)(() => d(e)),
      m = (0, J.useRef)(!1),
      h = (0, J.useRef)(null),
      [g, _] = (0, J.useState)(!1),
      v = (0, J.useRef)(!1),
      y = (0, J.useRef)(e);
    y.current = e;
    let b = (0, J.useRef)(e);
    ((0, J.useEffect)(() => {
      m.current || h.current?.scrubbing || (p(d(e)), (b.current = e));
    }, [e, d]),
      (0, J.useEffect)(
        () => () => {
          h.current = null;
        },
        [],
      ));
    let x = (0, J.useCallback)(
        (e) => {
          let t = e;
          return (
            i !== void 0 && t < i && (t = i),
            a !== void 0 && t > a && (t = a),
            t
          );
        },
        [i, a],
      ),
      S = (0, J.useCallback)(
        (e) => (o === void 0 ? e : parseFloat(e.toFixed(o))),
        [o],
      ),
      C = (0, J.useCallback)(
        (e) => {
          let n = e.trim(),
            r = n === `` ? 0 : parseFloat(n),
            i = x(S(Number.isFinite(r) ? r : 0));
          p(d(i));
          let a = i !== b.current;
          ((b.current = i), a && t(i));
        },
        [x, S, d, t],
      ),
      w = (0, J.useCallback)(
        (e) => {
          let t =
            i !== void 0 && a !== void 0 && Number.isFinite(a - i)
              ? (a - i) / Wx
              : r;
          return (e.shiftKey && (t *= 10), e.altKey && (t /= 10), t);
        },
        [i, a, r],
      ),
      T = (0, J.useCallback)((e, t) => {
        let n = h.current;
        return (
          (h.current = null),
          _(!1),
          n?.scrubbing
            ? (e !== void 0 &&
                t?.hasPointerCapture?.(e) &&
                t.releasePointerCapture(e),
              !0)
            : !1
        );
      }, []),
      E = (t) => {
        if (s || t.button !== 0) return;
        let n = parseFloat(f);
        ((h.current = {
          startX: t.clientX,
          startValue: Number.isFinite(n) ? n : e,
          scrubbing: !1,
        }),
          (b.current = y.current),
          t.currentTarget.setPointerCapture?.(t.pointerId));
      },
      D = (e) => {
        let t = h.current;
        if (!t) return;
        if (e.buttons === 0) {
          T(e.pointerId, e.currentTarget);
          return;
        }
        let i = e.clientX - t.startX;
        if (!t.scrubbing) {
          if (Math.abs(i) < Ux) return;
          ((t.scrubbing = !0), _(!0));
        }
        let a = t.startValue + i * w(e),
          o = r > 0 ? Math.round(a / r) * r : a,
          s = x(S(parseFloat(o.toFixed(6))));
        (p(d(s)), n?.(s));
      },
      O = (e) => {
        T(e.pointerId, e.currentTarget) && C(f);
      },
      k = (e, n) => {
        let i = parseFloat(f),
          a = r * (n.shiftKey ? 10 : n.altKey ? 0.1 : 1) * e,
          o = x(S(parseFloat(((Number.isFinite(i) ? i : 0) + a).toFixed(6))));
        p(d(o));
        let s = o !== b.current;
        ((b.current = o), s && t(o));
      };
    return (0, Y.jsx)(`input`, {
      type: `text`,
      inputMode: `decimal`,
      value: f,
      disabled: s,
      title: c,
      "aria-label": u,
      onPointerDown: E,
      onPointerMove: D,
      onPointerUp: O,
      onPointerCancel: (e) => {
        T(e.pointerId, e.currentTarget);
      },
      onLostPointerCapture: (e) => {
        T(e.pointerId, e.currentTarget);
      },
      onFocus: () => {
        ((m.current = !0), (b.current = y.current));
      },
      onChange: (e) => {
        p(e.target.value);
        let t = parseFloat(e.target.value);
        Number.isFinite(t) && n?.(x(t));
      },
      onBlur: () => {
        if (((m.current = !1), v.current)) {
          v.current = !1;
          return;
        }
        C(f);
      },
      onKeyDown: (e) => {
        if (e.key === `Enter`) ((v.current = !0), C(f), e.currentTarget.blur());
        else if (e.key === `Escape`) {
          v.current = !0;
          let r = b.current;
          (p(d(r)), r !== y.current && (n?.(r), t(r)), e.currentTarget.blur());
        } else
          (e.key === `ArrowUp` || e.key === `ArrowDown`) &&
            (e.preventDefault(), k(e.key === `ArrowUp` ? 1 : -1, e));
      },
      className:
        (l ??
          `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors cursor-ew-resize disabled:opacity-50`) +
        (g ? ` select-none` : ``),
    });
  },
  Kx = [0.25, 0.5, 1],
  qx = [15, 45, 90],
  Jx = ({ label: e, value: t, unit: n, step: r, onChange: i }) =>
    (0, Y.jsxs)(`label`, {
      className: `flex items-center justify-between gap-2 text-xs`,
      children: [
        (0, Y.jsx)(`span`, { className: `text-muted-foreground`, children: e }),
        (0, Y.jsxs)(`span`, {
          className: `flex items-center gap-1`,
          children: [
            (0, Y.jsx)(Gx, {
              min: r,
              step: r,
              value: t,
              "aria-label": e,
              onCommit: (e) => {
                e > 0 && i(e);
              },
              className: `w-16 px-1.5 py-1 rounded bg-background border border-border text-right tabular-nums cursor-ew-resize`,
            }),
            (0, Y.jsx)(`span`, {
              className: `w-4 text-muted-foreground`,
              children: n,
            }),
          ],
        }),
      ],
    }),
  Yx = ({ active: e, onClick: t, children: n }) =>
    (0, Y.jsx)(`button`, {
      onClick: t,
      className: `px-1.5 py-0.5 rounded text-[11px] tabular-nums border transition-colors ${e ? `bg-primary/20 text-primary-foreground/80 border-primary/30` : `text-muted-foreground border-border hover:bg-accent hover:text-foreground`}`,
      children: n,
    }),
  Xx = ({ onClose: e, onDropToGround: t }) => {
    let n = X((e) => e.snapEnabled),
      r = X((e) => e.snapValues),
      i = X((e) => e.magnetEnabled),
      a = X((e) => e.magnetRadius),
      o = X((e) => e.procParams.cellSize),
      s = X((e) => e.setSnapEnabled),
      c = X((e) => e.setSnapValues),
      l = X((e) => e.setMagnetEnabled),
      u = X((e) => e.setMagnetRadius),
      d = [...new Set([...Kx, o])].sort((e, t) => e - t);
    return (0, Y.jsxs)(`div`, {
      className: `absolute top-full right-0 mt-1.5 w-64 p-3 rounded-xl bg-card border border-border shadow-xl z-50 space-y-3`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, Y.jsx)(`span`, {
              className: `text-xs font-medium`,
              children: `Snapping`,
            }),
            (0, Y.jsx)(`button`, {
              onClick: e,
              className: `text-muted-foreground hover:text-foreground`,
              children: (0, Y.jsx)(te, { className: `w-3.5 h-3.5` }),
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, Y.jsxs)(`button`, {
              onClick: () => s(!n),
              className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg border text-xs transition-colors ${n ? `bg-primary/20 text-primary-foreground/80 border-primary/30` : `text-muted-foreground border-border hover:bg-accent`}`,
              children: [
                (0, Y.jsx)(Hn, { className: `w-3.5 h-3.5` }),
                `Grid snap`,
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `space-y-1.5 pl-1`,
              children: [
                (0, Y.jsx)(Jx, {
                  label: `Move`,
                  unit: `m`,
                  step: 0.05,
                  value: r.translate,
                  onChange: (e) => c({ ...r, translate: e }),
                }),
                (0, Y.jsx)(`div`, {
                  className: `flex gap-1 justify-end`,
                  children: d.map((e) =>
                    (0, Y.jsx)(
                      Yx,
                      {
                        active: Math.abs(r.translate - e) < 1e-6,
                        onClick: () => c({ ...r, translate: e }),
                        children: e === o ? `${e} cell` : e,
                      },
                      e,
                    ),
                  ),
                }),
                (0, Y.jsx)(Jx, {
                  label: `Rotate`,
                  unit: `°`,
                  step: 1,
                  value: r.rotate,
                  onChange: (e) => c({ ...r, rotate: e }),
                }),
                (0, Y.jsx)(`div`, {
                  className: `flex gap-1 justify-end`,
                  children: qx.map((e) =>
                    (0, Y.jsxs)(
                      Yx,
                      {
                        active: Math.abs(r.rotate - e) < 1e-6,
                        onClick: () => c({ ...r, rotate: e }),
                        children: [e, `°`],
                      },
                      e,
                    ),
                  ),
                }),
                (0, Y.jsx)(Jx, {
                  label: `Scale`,
                  unit: `×`,
                  step: 0.05,
                  value: r.scale,
                  onChange: (e) => c({ ...r, scale: e }),
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: `space-y-2 pt-1 border-t border-border/60`,
          children: [
            (0, Y.jsxs)(`button`, {
              onClick: () => l(!i),
              className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg border text-xs transition-colors ${i ? `bg-primary/20 text-primary-foreground/80 border-primary/30` : `text-muted-foreground border-border hover:bg-accent`}`,
              children: [
                (0, Y.jsx)(Pn, { className: `w-3.5 h-3.5` }),
                `Object magnet`,
              ],
            }),
            (0, Y.jsxs)(`label`, {
              className: `flex items-center justify-between gap-2 text-xs pl-1`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-muted-foreground`,
                  children: `Radius`,
                }),
                (0, Y.jsxs)(`span`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, Y.jsx)(`input`, {
                      type: `range`,
                      min: 0.05,
                      max: 2,
                      step: 0.05,
                      value: a,
                      onChange: (e) => u(Number(e.target.value)),
                      className: `w-24`,
                    }),
                    (0, Y.jsx)(`span`, {
                      className: `w-8 text-right tabular-nums text-muted-foreground`,
                      children: a.toFixed(2),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsx)(`p`, {
              className: `text-[11px] leading-snug text-muted-foreground pl-1`,
              children: `Snaps the selection flush against a neighbour's face, edge or corner. Takes precedence over grid snap while a neighbour is in range.`,
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: `pt-1 border-t border-border/60`,
          children: (0, Y.jsxs)(`button`, {
            onClick: t,
            className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition-colors`,
            children: [
              (0, Y.jsx)(xn, { className: `w-3.5 h-3.5` }),
              `Drop selection to ground`,
            ],
          }),
        }),
      ],
    });
  },
  Zx = ({ active: e, disabled: t, onClick: n, icon: r, title: i }) =>
    (0, Y.jsx)(`button`, {
      onClick: n,
      disabled: t,
      title: i,
      className: `p-2 rounded-lg transition-colors ${t ? `text-muted-foreground/40 cursor-not-allowed` : e ? `bg-primary/20 text-primary-foreground/80 border border-primary/30` : `text-muted-foreground hover:bg-accent hover:text-foreground border border-transparent`}`,
      children: r,
    }),
  Qx = () => (0, Y.jsx)(`div`, { className: `w-px h-3.5 bg-border/50 mx-0.5` });
