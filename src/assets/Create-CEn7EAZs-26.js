// Create-CEn7EAZs 26 — classname
// Lines 7988-8626 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var gu = 140,
  _u = ({ colors: e, harmonyType: t, activeTab: n, onColorPick: r }) => {
    let i = (0, X.useRef)(null),
      a = (0, X.useRef)(!1),
      o = (0, X.useRef)(0),
      s = (0, X.useCallback)((e) => {
        let t = i.current;
        if (!t) return { hue: 0, sat: 50 };
        let n = t.getBoundingClientRect(),
          r = window.devicePixelRatio || 1,
          a = gu / 2,
          o = gu / 2,
          s = gu / 2 - 4,
          c = ((e.clientX - n.left) * (t.width / n.width)) / r - a,
          l = ((e.clientY - n.top) * (t.height / n.height)) / r - o,
          u = Math.min(Math.sqrt(c * c + l * l), s);
        return {
          hue: ((Math.atan2(l, c) * 180) / Math.PI + 90 + 360) % 360,
          sat: Math.max((u / s) * 100, 3),
        };
      }, []),
      c = (0, X.useCallback)(
        (t) => {
          let n = i.current;
          if (!n || e.length === 0) return 0;
          let r = n.getBoundingClientRect(),
            a = window.devicePixelRatio || 1,
            o = gu / 2,
            s = gu / 2,
            c = gu / 2 - 4,
            l = ((t.clientX - r.left) * (n.width / r.width)) / a - o,
            u = ((t.clientY - r.top) * (n.height / r.height)) / a - s,
            d = 0,
            f = 1 / 0;
          for (let t = 0; t < e.length; t++) {
            let [n, r] = fu(e[t]),
              [i, a] = hu(n, r / 100, o, s, c),
              p = i - o - l,
              m = a - s - u,
              h = p * p + m * m;
            h < f && ((f = h), (d = t));
          }
          return d;
        },
        [e],
      ),
      l = (0, X.useCallback)(
        (t) => {
          if (!r) return;
          let i = n === `harmonies` ? 0 : c(t);
          ((o.current = i), (a.current = !0));
          let l = s(t),
            u = e[i] ? fu(e[i])[2] : 50;
          r(i, pu(l.hue, l.sat, u));
        },
        [r, c, s, e, n],
      ),
      u = (0, X.useCallback)(
        (t) => {
          if (!a.current || !r) return;
          let n = s(t),
            i = o.current,
            c = e[i] ? fu(e[i])[2] : 50;
          r(i, pu(n.hue, n.sat, c));
        },
        [r, s, e],
      ),
      d = (0, X.useCallback)(() => {
        a.current = !1;
      }, []);
    return (
      (0, X.useEffect)(() => {
        let r = i.current;
        if (!r) return;
        let a = r.getContext(`2d`);
        if (!a) return;
        let o = window.devicePixelRatio || 1,
          s = gu;
        ((r.width = s * o), (r.height = s * o), a.scale(o, o));
        let c = s / 2,
          l = s / 2,
          u = s / 2 - 4;
        a.clearRect(0, 0, s, s);
        let d = a.createImageData(r.width, r.height),
          f = d.data;
        for (let e = 0; e < r.height; e++)
          for (let t = 0; t < r.width; t++) {
            let n = t / o - c,
              i = e / o - l,
              a = Math.sqrt(n * n + i * i);
            if (a <= u) {
              let o = ((Math.atan2(i, n) * 180) / Math.PI + 90 + 360) % 360,
                s = (a / u) * 0.5,
                c = (e) => {
                  let t = (e + o / 30) % 12;
                  return 0.5 - s * Math.max(Math.min(t - 3, 9 - t, 1), -1);
                },
                l = (e * r.width + t) * 4;
              ((f[l] = Math.round(c(0) * 255)),
                (f[l + 1] = Math.round(c(8) * 255)),
                (f[l + 2] = Math.round(c(4) * 255)),
                (f[l + 3] = 255));
            }
          }
        if (
          (a.putImageData(d, 0, 0),
          a.beginPath(),
          a.arc(c * o, l * o, u * o, 0, Math.PI * 2),
          (a.lineWidth = 2 * o),
          (a.strokeStyle = `rgba(255,255,255,0.08)`),
          a.stroke(),
          e.length === 0)
        )
          return;
        let p = [];
        for (let t of e) {
          let [e, n] = fu(t),
            [r, i] = hu(e, n / 100, c, l, u);
          p.push({ x: r * o, y: i * o, color: t });
        }
        n === `harmonies` &&
          p.length >= 2 &&
          (a.save(),
          a.setLineDash([4 * o, 4 * o]),
          (a.lineWidth = 1.5 * o),
          (a.strokeStyle = `rgba(255,255,255,0.35)`),
          t === `complementary` && p.length >= 2
            ? (a.beginPath(),
              a.moveTo(p[0].x, p[0].y),
              a.lineTo(p[1].x, p[1].y),
              a.stroke())
            : t === `triadic` && p.length >= 3
              ? (a.beginPath(),
                a.moveTo(p[0].x, p[0].y),
                a.lineTo(p[1].x, p[1].y),
                a.lineTo(p[2].x, p[2].y),
                a.closePath(),
                a.stroke())
              : t === `analogous` && p.length >= 3
                ? (a.beginPath(),
                  a.moveTo(p[0].x, p[0].y),
                  a.lineTo(p[1].x, p[1].y),
                  a.lineTo(p[2].x, p[2].y),
                  a.stroke())
                : t === `split-complementary` &&
                  p.length >= 3 &&
                  (a.beginPath(),
                  a.moveTo(p[0].x, p[0].y),
                  a.lineTo(p[1].x, p[1].y),
                  a.moveTo(p[0].x, p[0].y),
                  a.lineTo(p[2].x, p[2].y),
                  a.stroke()),
          a.restore());
        for (let e = 0; e < p.length; e++) {
          let t = p[e];
          (a.beginPath(),
            a.arc(t.x, t.y, 7 * o, 0, Math.PI * 2),
            (a.fillStyle = `rgba(255,255,255,0.9)`),
            a.fill(),
            a.beginPath(),
            a.arc(t.x, t.y, 5 * o, 0, Math.PI * 2),
            (a.fillStyle = t.color),
            a.fill());
        }
      }, [e, t, n]),
      (0, Z.jsx)(`canvas`, {
        ref: i,
        style: { width: gu, height: gu },
        className: `block mx-auto cursor-crosshair`,
        onMouseDown: l,
        onMouseMove: u,
        onMouseUp: d,
        onMouseLeave: d,
      })
    );
  },
  vu = [
    { value: `complementary`, label: `Complementary` },
    { value: `analogous`, label: `Analogous` },
    { value: `triadic`, label: `Triadic` },
    { value: `split-complementary`, label: `Split-Comp` },
  ],
  yu = ({ harmonyType: e, onHarmonyChange: t, harmonyColors: n, onApply: r }) =>
    (0, Z.jsxs)(`div`, {
      className: `space-y-2`,
      children: [
        (0, Z.jsx)(`select`, {
          value: e,
          onChange: (e) => t(e.target.value),
          className: `w-full bg-secondary/60 border border-border rounded px-2 py-1 text-[10px] text-foreground/80 outline-none focus:border-primary/40`,
          children: vu.map((e) =>
            (0, Z.jsx)(
              `option`,
              { value: e.value, children: e.label },
              e.value,
            ),
          ),
        }),
        (0, Z.jsx)(`div`, {
          className: `flex items-center gap-1 flex-wrap`,
          children: n.map((e, t) =>
            (0, Z.jsx)(
              `div`,
              {
                className: `w-6 h-6 rounded border border-white/10`,
                style: { backgroundColor: e },
                title: e,
              },
              t,
            ),
          ),
        }),
        (0, Z.jsx)(`button`, {
          onClick: r,
          className: `w-full py-1.5 text-[10px] font-medium bg-primary/20 text-primary border border-border rounded hover:bg-primary/30 transition-colors`,
          children: `Apply to Palette`,
        }),
      ],
    }),
  bu = ({ onPick: e }) => {
    let [t, n] = (0, X.useState)(!1),
      r = (0, X.useRef)(e);
    return (
      (r.current = e),
      (0, X.useEffect)(() => {
        if (!t) return;
        document.body.style.cursor = `crosshair`;
        let e = (e) => {
            let t = e.target,
              i = t.tagName === `IMG` ? t : t.closest(`img`);
            if (i) {
              (e.preventDefault(), e.stopPropagation());
              let t = document.createElement(`canvas`);
              ((t.width = i.naturalWidth), (t.height = i.naturalHeight));
              let n = t.getContext(`2d`, { willReadFrequently: !0 });
              if (n) {
                n.drawImage(i, 0, 0);
                let t = i.getBoundingClientRect(),
                  a = Math.round(
                    ((e.clientX - t.left) / t.width) * i.naturalWidth,
                  ),
                  o = Math.round(
                    ((e.clientY - t.top) / t.height) * i.naturalHeight,
                  ),
                  [s, c, l] = n.getImageData(a, o, 1, 1).data;
                r.current(
                  `#${s.toString(16).padStart(2, `0`)}${c.toString(16).padStart(2, `0`)}${l.toString(16).padStart(2, `0`)}`,
                );
              }
            }
            ((document.body.style.cursor = ``), n(!1));
          },
          i = (e) => {
            e.key === `Escape` && ((document.body.style.cursor = ``), n(!1));
          };
        return (
          document.addEventListener(`click`, e, !0),
          document.addEventListener(`keydown`, i),
          () => {
            (document.removeEventListener(`click`, e, !0),
              document.removeEventListener(`keydown`, i),
              (document.body.style.cursor = ``));
          }
        );
      }, [t]),
      (0, Z.jsx)(`button`, {
        onClick: (e) => {
          (e.stopPropagation(), n(!0));
        },
        className: `p-0.5 transition-colors ${t ? `text-primary` : `text-muted-foreground/60 hover:text-primary`}`,
        title: t
          ? `Click any image to sample color (Esc to cancel)`
          : `Pick color from image`,
        children: (0, Z.jsx)(Ts, { className: `h-3 w-3` }),
      })
    );
  },
  xu = ({ hex: e, onChange: t, onClose: n }) => {
    let [r, i, a] = fu(e),
      [o, s] = (0, X.useState)(r),
      [c, l] = (0, X.useState)(i),
      [u, d] = (0, X.useState)(a),
      [f, p] = (0, X.useState)(e),
      m = (0, X.useRef)(t);
    m.current = t;
    let h = (0, X.useCallback)((e, t, n) => {
      let r = pu(e, t, n);
      (p(r), m.current(r));
    }, []);
    (0, X.useEffect)(() => {
      p(e);
      let [t, n, r] = fu(e);
      (s(t), l(n), d(r));
    }, [e]);
    let g = () => {
      let n = f.startsWith(`#`) ? f : `#${f}`;
      if (/^#[0-9a-fA-F]{6}$/.test(n)) {
        t(n);
        let [e, r, i] = fu(n);
        (s(e), l(r), d(i));
      } else p(e);
    };
    return (0, Z.jsxs)(`div`, {
      className: `mt-1.5 p-2.5 bg-card border border-border rounded-lg space-y-2 backdrop-blur-sm`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `w-8 h-8 rounded-md border border-white/10 shrink-0`,
              style: { backgroundColor: pu(o, c, u) },
            }),
            (0, Z.jsx)(`input`, {
              value: f,
              onChange: (e) => p(e.target.value),
              onBlur: g,
              onKeyDown: (e) => {
                (e.key === `Enter` && g(), e.key === `Escape` && n());
              },
              className: `flex-1 bg-secondary/60 border border-border rounded px-2 py-1 text-[11px] font-mono text-foreground/80 outline-none focus:border-primary/40 w-0`,
              maxLength: 7,
            }),
            (0, Z.jsx)(bu, { onPick: t }),
            (0, Z.jsx)(`button`, {
              onClick: n,
              className: `text-muted-foreground/60 hover:text-foreground/80 transition-colors p-0.5`,
              children: (0, Z.jsx)(Jr, { className: `h-3 w-3` }),
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[9px] uppercase tracking-wider text-muted-foreground/40 block mb-0.5`,
              children: `Hue`,
            }),
            (0, Z.jsx)(`input`, {
              type: `range`,
              min: 0,
              max: 360,
              value: o,
              onChange: (e) => {
                let t = Number(e.target.value);
                (s(t), h(t, c, u));
              },
              className: `w-full h-3 rounded-full appearance-none cursor-pointer`,
              style: {
                background: `linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)`,
              },
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[9px] uppercase tracking-wider text-muted-foreground/40 block mb-0.5`,
              children: `Saturation`,
            }),
            (0, Z.jsx)(`input`, {
              type: `range`,
              min: 0,
              max: 100,
              value: c,
              onChange: (e) => {
                let t = Number(e.target.value);
                (l(t), h(o, t, u));
              },
              className: `w-full h-3 rounded-full appearance-none cursor-pointer`,
              style: {
                background: `linear-gradient(to right, ${pu(o, 0, u)}, ${pu(o, 100, u)})`,
              },
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[9px] uppercase tracking-wider text-muted-foreground/40 block mb-0.5`,
              children: `Lightness`,
            }),
            (0, Z.jsx)(`input`, {
              type: `range`,
              min: 0,
              max: 100,
              value: u,
              onChange: (e) => {
                let t = Number(e.target.value);
                (d(t), h(o, c, t));
              },
              className: `w-full h-3 rounded-full appearance-none cursor-pointer`,
              style: {
                background: `linear-gradient(to right, #000000, ${pu(o, c, 50)}, #ffffff)`,
              },
            }),
          ],
        }),
      ],
    });
  },
  Su = {
    primary: `Primary`,
    secondary: `Secondary`,
    accent: `Accent`,
    neutral: `Neutral`,
  },
  Cu = ({
    group: e,
    colors: t,
    isActive: n,
    onSelect: r,
    onChange: i,
    editingSwatch: a,
    onEditSwatch: o,
  }) => {
    let s = a?.group === e,
      c = s ? a.index : -1,
      l = (t) => {
        (a?.group === e && a.index === t ? o(null) : o({ group: e, index: t }),
          r());
      },
      u = (e, n) => {
        let r = [...t];
        ((r[e] = n), i(r));
      },
      d = (n) => {
        if (t.length <= 1) return;
        let r = t.filter((e, t) => t !== n);
        (a?.group === e && o(null), i(r));
      },
      f = () => {
        let [e, n, a] = fu(t[t.length - 1] ?? `#888888`),
          o = pu((e + 30) % 360, n, a);
        (i([...t, o]), r());
      };
    return (0, Z.jsxs)(`div`, {
      children: [
        (0, Z.jsxs)(`div`, {
          role: `button`,
          tabIndex: 0,
          onClick: r,
          onKeyDown: (e) => {
            (e.key === `Enter` || e.key === ` `) && r();
          },
          className: `flex items-center gap-2 py-1.5 cursor-pointer transition-colors rounded-md -mx-1 px-1 ${n ? `bg-secondary/30` : `hover:bg-secondary/15`}`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[9px] font-medium uppercase tracking-wider text-muted-foreground/50 w-12 shrink-0 select-none truncate`,
              children: Su[e],
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1 overflow-x-auto min-w-0`,
              children: [
                t.map((e, n) =>
                  (0, Z.jsxs)(
                    `div`,
                    {
                      className: `relative group/swatch`,
                      children: [
                        (0, Z.jsx)(`button`, {
                          onClick: (e) => {
                            (e.stopPropagation(), l(n));
                          },
                          className: `w-6 h-6 rounded-md border hover:scale-110 transition-all cursor-pointer ${s && c === n ? `border-primary ring-1 ring-primary/40 scale-110` : `border-white/10`}`,
                          style: { backgroundColor: e },
                          title: e,
                        }),
                        t.length > 1 &&
                          (0, Z.jsx)(`button`, {
                            onClick: (e) => {
                              (e.stopPropagation(), d(n));
                            },
                            className: `absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-destructive/80 text-destructive-foreground flex items-center justify-center opacity-0 group-hover/swatch:opacity-100 transition-opacity`,
                            children: (0, Z.jsx)(Jr, {
                              className: `h-2.5 w-2.5`,
                            }),
                          }),
                      ],
                    },
                    n,
                  ),
                ),
                (0, Z.jsx)(`button`, {
                  onClick: (e) => {
                    (e.stopPropagation(), f());
                  },
                  className: `w-6 h-6 rounded-md border border-dashed border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground/40 hover:text-primary/60 transition-colors`,
                  children: (0, Z.jsx)(Br, { className: `h-3.5 w-3.5` }),
                }),
              ],
            }),
          ],
        }),
        s &&
          c >= 0 &&
          c < t.length &&
          (0, Z.jsx)(xu, {
            hex: t[c],
            onChange: (e) => u(c, e),
            onClose: () => o(null),
          }),
      ],
    });
  },
  wu = ({
    colorGroups: e,
    onColorGroupChange: t,
    onExtractPalette: n,
    isExtracting: r,
  }) => {
    let [i, a] = (0, X.useState)(`primary`),
      [o, s] = (0, X.useState)(`explore`),
      [c, l] = (0, X.useState)(`complementary`),
      [u, d] = (0, X.useState)(null),
      f = e[i] ?? [],
      p = mu(f[0] ?? `#6366f1`, c),
      m = o === `harmonies` ? p : f,
      h = () => {
        t(i, p);
      },
      g = (0, X.useCallback)(
        (e, n) => {
          if (o === `harmonies`) {
            let e = [...f];
            e.length === 0 ? t(i, [n]) : ((e[0] = n), t(i, e));
          } else {
            let r = [...f];
            r.length === 0
              ? t(i, [n])
              : e < r.length
                ? ((r[e] = n), t(i, r))
                : ((r[0] = n), t(i, r));
          }
        },
        [o, f, t, i],
      );
    return (0, Z.jsxs)(`div`, {
      className: `space-y-3 overflow-hidden`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between min-w-0`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1 min-w-0`,
              children: [
                (0, Z.jsx)(Ae, {
                  className: `h-3 w-3 text-muted-foreground/60 shrink-0`,
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 truncate`,
                  children: `Color Palette`,
                }),
              ],
            }),
            (0, Z.jsx)(`div`, {
              className: `flex items-center gap-0.5 shrink-0`,
              children: [
                { key: `explore`, label: `Explore` },
                { key: `harmonies`, label: `Harmonies` },
              ].map((e) =>
                (0, Z.jsx)(
                  `button`,
                  {
                    onClick: () => s(e.key),
                    className: `px-1.5 py-0.5 text-[11px] transition-colors ${o === e.key ? `text-primary border-b border-primary` : `text-muted-foreground hover:text-foreground/70`}`,
                    children: e.label,
                  },
                  e.key,
                ),
              ),
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex gap-2 overflow-hidden min-w-0`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `flex-1 min-w-0 overflow-hidden space-y-0.5`,
              children: [`primary`, `secondary`, `accent`, `neutral`].map((n) =>
                (0, Z.jsx)(
                  Cu,
                  {
                    group: n,
                    colors: e[n] ?? [],
                    isActive: i === n,
                    onSelect: () => a(n),
                    onChange: (e) => t(n, e),
                    editingSwatch: u,
                    onEditSwatch: d,
                  },
                  n,
                ),
              ),
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex-1 min-w-0 flex flex-col items-center gap-2`,
              children: [
                (0, Z.jsx)(_u, {
                  colors: m,
                  harmonyType: c,
                  activeTab: o,
                  onColorPick: g,
                }),
                o === `harmonies` &&
                  (0, Z.jsx)(yu, {
                    harmonyType: c,
                    onHarmonyChange: l,
                    harmonyColors: p,
                    onApply: h,
                  }),
                o === `explore` &&
                  (0, Z.jsx)(`p`, {
                    className: `text-[10px] text-muted-foreground/40 text-center leading-relaxed`,
                    children: `Click and drag color points on the wheel.`,
                  }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(`button`, {
          onClick: n,
          disabled: r,
          className: `w-full py-2 text-xs font-medium bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary border border-border rounded-lg transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed`,
          children: r
            ? (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(Nr, { className: `h-3.5 w-3.5 animate-spin` }),
                  `Extracting...`,
                ],
              })
            : (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(Nr, { className: `h-3.5 w-3.5` }),
                  `Generate Palette`,
                ],
              }),
        }),
      ],
    });
  };
