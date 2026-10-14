// Create-ea24k1TY 282 — jsx
// Lines 95872-97216 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var Wge = ({ className: e = ``, isActive: t }) => {
    let n = (0, X.useRef)(null),
      r = (0, X.useRef)(null),
      i = (0, X.useRef)(!1),
      a = (0, X.useRef)(null),
      [o, s] = (0, X.useState)(1),
      [c, l] = (0, X.useState)(0),
      [u, d] = (0, X.useState)(0),
      {
        currentFrame: f,
        totalFrames: p,
        isPlaying: m,
        boneOffsets: h,
        ikKeys: g,
        ikEnabled: _,
        selectedBoneName: v,
        selectedEffector: y,
        selectedKey: b,
        plantRuntime: x,
        footLock: S,
        selectedAnimationId: C,
        loopInFrame: w,
        loopOutFrame: T,
        loopBlendFrames: E,
        clipInFrame: D,
        clipOutFrame: O,
        activePanel: k,
        setFrame: A,
        setLoopRange: j,
        setClipRange: M,
        setLoopBlendFrames: N,
        updateBoneOffset: P,
        removeBoneOffset: F,
        updateIKKey: I,
        removeIKKey: L,
        selectKey: R,
        selectEffector: z,
        updateFootLockKey: B,
        removeFootLockKey: V,
        pause: H,
        selectBone: U,
      } = R6(),
      [ee, W] = (0, X.useState)(null),
      [G, te] = (0, X.useState)(null),
      K = k === `clips`,
      ne = K ? D : w,
      re = K ? O : T,
      ie = K ? M : j,
      ae = (0, X.useRef)(null);
    ae.current = G;
    let oe = (0, X.useRef)(h);
    oe.current = h;
    let se = (0, X.useRef)(g);
    se.current = g;
    let q = (0, X.useRef)(S.keys);
    q.current = S.keys;
    let ce = (0, X.useMemo)(() => x5(S.keys), [S.keys]),
      le = (0, X.useMemo)(() => vge(u, p), [u, p]),
      ue = le * o,
      de = (0, X.useRef)(le);
    de.current = le;
    let fe = (0, X.useRef)(c);
    fe.current = c;
    let pe = (0, X.useRef)(u);
    pe.current = u;
    let me = (0, X.useRef)(p);
    me.current = p;
    let he = (0, X.useRef)(0);
    ((he.current = r7(u, p, ue)),
      (0, X.useEffect)(() => {
        (s(1), l(0));
      }, [C, p]),
      (0, X.useEffect)(() => {
        l((e) => Math.min(e, r7(u, p, ue)));
      }, [u, p, ue]));
    let ge = (0, X.useCallback)((e) => 68 + e * ue - c, [ue, c]),
      _e = (0, X.useCallback)(
        (e) => {
          let t = Math.round((e - 56 - 12 + c) / ue);
          return Math.max(0, Math.min(t, p));
        },
        [ue, c, p],
      ),
      ve = (0, X.useCallback)(
        (e, t) => {
          let n = (t, n, r) => {
            let i = null,
              a = 5;
            for (let o of t) {
              let t = Math.abs(e - ge(n(o)));
              if (t >= 5) continue;
              if (i === null) {
                ((i = o), (a = t));
                continue;
              }
              let s = t < a - 2,
                c = Math.abs(t - a) <= 2 && r(o) && !r(i);
              (s || c) && ((i = o), (a = t));
            }
            return i;
          };
          if (t >= s7 && t < l7) {
            let e = n(
              h.filter((e) => e.boneName === v),
              (e) => e.frame,
              () => !0,
            );
            if (e)
              return {
                kind: `offset`,
                id: e.id,
                frame: e.frame,
                boneName: e.boneName,
              };
          }
          if (t >= l7 && t < d7) {
            let e = n(
              h.filter((e) => e.boneName !== v),
              (e) => e.frame,
              () => !0,
            );
            if (e)
              return {
                kind: `offset`,
                id: e.id,
                frame: e.frame,
                boneName: e.boneName,
              };
          }
          if (t >= d7 && t < p7) {
            let e = n(
              g,
              (e) => e.frame,
              (e) => e.effector === y,
            );
            if (e)
              return {
                kind: `ik`,
                id: e.id,
                frame: e.frame,
                effector: e.effector,
              };
          }
          if (t >= p7 && t < wge) {
            let e = t < h7 ? `l` : `r`,
              r = n(
                S.keys.filter((t) => t.foot === e),
                (e) => e.frame,
                () => !0,
              );
            if (r)
              return { kind: `foot`, id: r.id, frame: r.frame, foot: r.foot };
          }
          return null;
        },
        [h, g, S.keys, ge, v, y],
      ),
      ye = (0, X.useCallback)(() => {
        let e = n.current;
        if (!e) return;
        let t = e.getContext(`2d`);
        if (!t) return;
        let { width: r, height: i } = e,
          a = window.devicePixelRatio || 1;
        (t.clearRect(0, 0, r, i), (t.fillStyle = Bge), t.fillRect(0, 0, r, i));
        let o = r / a,
          s = i / a;
        (t.save(),
          t.scale(a, a),
          t.save(),
          t.beginPath(),
          t.rect(56, 0, Math.max(0, o - 56), s),
          t.clip());
        let l = (e, n, r) => {
            let i = (e) => {
              (t.beginPath(),
                (t.strokeStyle = `rgba(${r}, 0.6)`),
                (t.lineWidth = 2),
                t.moveTo(e, v7),
                t.lineTo(e, s),
                t.stroke(),
                (t.fillStyle = `rgba(${r}, 0.85)`),
                t.beginPath(),
                t.roundRect(e - 3, v7, 6, 12, 2),
                t.fill());
            };
            (i(e), i(n));
          },
          { minor: u, major: d } = xge(ue),
          m = d,
          S = Math.max(0, Math.floor(c / ue)),
          k = Math.min(p, Math.ceil((c + o - 56) / ue));
        for (let e = S; e <= k; e++) {
          if (e % u !== 0) continue;
          let n = ge(e);
          if (n < -1 || n > o + 1) continue;
          let r = e % d === 0;
          (t.beginPath(),
            (t.strokeStyle = Rge),
            (t.lineWidth = r ? 1 : 0.5),
            t.moveTo(n, 0),
            t.lineTo(n, r ? Sge : Cge),
            t.stroke(),
            e % m === 0 &&
              e > 0 &&
              ((t.fillStyle = zge),
              (t.font = `9px monospace`),
              (t.textAlign = `center`),
              t.fillText(String(e), n, i7 - 4)));
        }
        if (
          (t.beginPath(),
          (t.strokeStyle = `#333`),
          (t.lineWidth = 1),
          t.moveTo(0, i7),
          t.lineTo(o, i7),
          t.stroke(),
          p > 0)
        ) {
          let e = ge(0),
            n = ge(p),
            r = o7 - 8;
          ((t.fillStyle = `rgba(168, 85, 247, 0.08)`),
            t.beginPath(),
            t.roundRect(e, 32, n - e, r, 4),
            t.fill(),
            (t.strokeStyle = `rgba(168, 85, 247, 0.15)`),
            (t.lineWidth = 1),
            t.stroke());
        }
        if (!K && T > w) {
          let e = ge(w),
            n = ge(T),
            r = ge(w + E),
            i = ge(T - E),
            a = a7;
          ((t.fillStyle = `rgba(${b7}, 0.06)`),
            t.fillRect(e, a, n - e, 62 - a),
            r > e &&
              (t.beginPath(),
              t.moveTo(e, a),
              t.lineTo(e, 62),
              t.lineTo(r, 62),
              t.closePath(),
              (t.fillStyle = `rgba(${b7}, 0.18)`),
              t.fill(),
              t.beginPath(),
              (t.strokeStyle = `rgba(${b7}, 0.6)`),
              (t.lineWidth = 1.5),
              t.moveTo(e, a),
              t.lineTo(r, 62),
              t.stroke()),
            n > i &&
              (t.beginPath(),
              t.moveTo(n, a),
              t.lineTo(n, 62),
              t.lineTo(i, 62),
              t.closePath(),
              (t.fillStyle = `rgba(${b7}, 0.18)`),
              t.fill(),
              t.beginPath(),
              (t.strokeStyle = `rgba(${b7}, 0.6)`),
              (t.lineWidth = 1.5),
              t.moveTo(n, a),
              t.lineTo(i, 62),
              t.stroke()),
            (t.strokeStyle = `rgba(${b7}, 0.35)`),
            (t.lineWidth = 1),
            t.strokeRect(e, a, n - e, 62 - a));
          let c = (e + n) / 2;
          c > 0 &&
            c < o &&
            ((t.fillStyle = `rgba(${b7}, 0.6)`),
            (t.font = `10px sans-serif`),
            (t.textAlign = `center`),
            t.fillText(`Loop Region`, c, 42));
          let u = `Blend ${E}f`;
          t.font = `9px sans-serif`;
          let d = t.measureText(u).width + 12,
            f = Math.max(66, s - Vge),
            p = (e) => {
              e < 0 ||
                e > o ||
                ((t.fillStyle = `rgba(${b7}, 0.12)`),
                t.beginPath(),
                t.roundRect(e - d / 2, f, d, 14, 3),
                t.fill(),
                (t.strokeStyle = `rgba(${b7}, 0.35)`),
                (t.lineWidth = 0.5),
                t.stroke(),
                (t.fillStyle = `rgba(${b7}, 0.85)`),
                (t.textAlign = `center`),
                t.fillText(u, e, f + 10.5));
            };
          (p((e + r) / 2), p((i + n) / 2));
          let m = (e) => {
            ((t.fillStyle = `rgba(${b7}, 0.9)`),
              t.beginPath(),
              t.moveTo(e, 58),
              t.lineTo(e + 3.5, 62),
              t.lineTo(e, 66),
              t.lineTo(e - 3.5, 62),
              t.closePath(),
              t.fill());
          };
          (m(r), m(i), l(e, n, b7));
        }
        if (K && O > D) {
          let e = ge(D),
            n = ge(O),
            r = a7;
          ((t.fillStyle = `rgba(${x7}, 0.06)`),
            t.fillRect(e, r, n - e, 62 - r),
            (t.strokeStyle = `rgba(${x7}, 0.35)`),
            (t.lineWidth = 1),
            t.strokeRect(e, r, n - e, 62 - r));
          let i = (e + n) / 2;
          (i > 0 &&
            i < o &&
            ((t.fillStyle = `rgba(${x7}, 0.7)`),
            (t.font = `10px sans-serif`),
            (t.textAlign = `center`),
            t.fillText(`Clip Range`, i, 42)),
            l(e, n, x7));
        }
        let A = (e, n, r, i, a, o) => {
            (t.beginPath(),
              (t.fillStyle = a),
              t.moveTo(e, n - i),
              t.lineTo(e + r, n),
              t.lineTo(e, n + i),
              t.lineTo(e - r, n),
              t.closePath(),
              t.fill(),
              o &&
                ((t.strokeStyle = `#ffffff`), (t.lineWidth = 1.5), t.stroke()));
          },
          j = G;
        if (h.length > 0) {
          for (let e of h) {
            if (e.boneName === v) continue;
            let t = ge(e.frame);
            t < -2 || t > o + 2 || A(t, Ege, 2.5, 3.5, `#6b6b7a`, !1);
          }
          for (let e of h) {
            if (e.boneName !== v) continue;
            let t = j && j.moved && j.id === e.id ? j.frame : e.frame,
              n = ge(t);
            if (n < -2 || n > o + 2) continue;
            let r = b?.kind === `offset` && b.id === e.id;
            A(n, Tge, r ? 5 : 4, r ? 7 : 5.5, `#ffdd00`, r);
          }
        }
        if (g.length > 0) {
          for (let e of g) {
            if (e.effector === y) continue;
            let t = ge(e.frame);
            t < -2 ||
              t > o + 2 ||
              A(t, _7, 2.5, 3, `rgba(34, 211, 238, 0.35)`, !1);
          }
          for (let e of g) {
            if (e.effector !== y) continue;
            let t = j && j.moved && j.id === e.id ? j.frame : e.frame,
              n = ge(t);
            if (n < -2 || n > o + 2) continue;
            let r = b?.kind === `ik` && b.id === e.id;
            A(
              n,
              _7,
              r ? 4.5 : 3.5,
              r ? 6.5 : 5,
              e.effector === `hips` ? Pge : Nge,
              r,
            );
          }
        }
        let M = (e) => {
          let n = ce.get(e),
            r = Age(e);
          if (!n || n.length === 0) return;
          ((t.fillStyle = `rgba(255, 255, 255, 0.04)`),
            t.fillRect(ge(0), r, ge(p) - ge(0), m7));
          for (let n of x) {
            if (n.foot !== e) continue;
            let i = ge(n.start),
              a = ge(n.end);
            ((t.fillStyle = Fge), t.fillRect(i, r, Math.max(2, a - i), m7));
          }
          let i = r + m7 - 1,
            a = m7 - 2;
          (t.beginPath(), t.moveTo(ge(0), i));
          for (let e = 0; e <= p; e++) {
            let r = Math.max(0, Math.min(1, S5(n, e)));
            t.lineTo(ge(e), i - r * a);
          }
          (t.lineTo(ge(p), i), t.closePath(), (t.fillStyle = Ige), t.fill());
          let s = kge(e);
          for (let e of n) {
            let t = j && j.moved && j.id === e.id ? j.frame : e.frame,
              n = ge(t);
            if (n < -2 || n > o + 2) continue;
            let r = b?.kind === `foot` && b.id === e.id;
            A(n, s, r ? 4.5 : 3.5, r ? 6.5 : 5, Lge, r);
          }
        };
        (M(`l`), M(`r`));
        let N = ge(f);
        if (
          (N >= -1 &&
            N <= o + 1 &&
            (t.beginPath(),
            (t.strokeStyle = y7),
            (t.lineWidth = 2),
            t.moveTo(N, 0),
            t.lineTo(N, s),
            t.stroke(),
            t.beginPath(),
            (t.fillStyle = y7),
            t.moveTo(N - 5, 0),
            t.lineTo(N + 5, 0),
            t.lineTo(N, 6),
            t.closePath(),
            t.fill()),
          t.restore(),
          (t.fillStyle = Mge),
          t.fillRect(0, 0, 56, s),
          (t.strokeStyle = `#2a2438`),
          (t.lineWidth = 1),
          t.beginPath(),
          t.moveTo(56.5, 0),
          t.lineTo(56.5, s),
          t.stroke(),
          C)
        ) {
          ((t.fillStyle = `rgba(255, 255, 255, 0.35)`),
            (t.font = `9px sans-serif`),
            (t.textAlign = `left`));
          let e = C.replace(/_/g, ` `),
            n = e.length > 10 ? `${e.slice(0, 9)}…` : e;
          t.fillText(n, 4, i7 - 8);
        }
        let P = (e, n, r, i = !1) => {
          ((t.fillStyle = i ? `rgba(200, 200, 210, 0.32)` : jge),
            (t.font = `9px sans-serif`),
            (t.textAlign = `right`),
            t.fillText(e, 50, n + r / 2 + 3));
        };
        (P(`Clip`, a7, o7),
          P(v ? Uge(v) : `Keys`, s7, c7),
          P(`other`, l7, u7, !0),
          P(`IK`, d7, f7, !(_.length > 0 || g.length > 0)),
          P(`Foot L`, p7, m7, !ce.has(`l`)),
          P(`Foot R`, h7, m7, !ce.has(`r`)),
          t.restore());
      }, [f, p, ue, c, ge, h, g, _, v, y, b, x, ce, S, w, T, E, K, D, O, G, C]),
      be = (0, X.useCallback)(() => {
        let e = n.current,
          t = r.current;
        if (!e || !t) return;
        let i = window.devicePixelRatio || 1,
          a = t.getBoundingClientRect();
        ((e.width = a.width * i),
          (e.height = a.height * i),
          (e.style.width = `${a.width}px`),
          (e.style.height = `${a.height}px`),
          d(a.width),
          ye());
      }, [ye]);
    (0, X.useEffect)(() => {
      be();
      let e = new ResizeObserver(be);
      return (r.current && e.observe(r.current), () => e.disconnect());
    }, [be]);
    let xe = t !== !1;
    (0, X.useEffect)(() => {
      if (m && xe) {
        let e = () => {
          (ye(), (a.current = requestAnimationFrame(e)));
        };
        return (
          (a.current = requestAnimationFrame(e)),
          () => {
            a.current && cancelAnimationFrame(a.current);
          }
        );
      } else xe && ye();
    }, [ye, m, xe]);
    let Se = (0, X.useCallback)(() => {
        let e = ae.current;
        if (!e) return;
        if (((ae.current = null), te(null), !e.moved)) {
          (R({ kind: e.kind, id: e.id }),
            e.kind === `offset` && e.boneName && U(e.boneName),
            e.kind === `ik` && e.effector && z(e.effector));
          return;
        }
        let t = e.frame;
        if (t === e.origFrame) return;
        if (e.kind === `offset`) {
          let n = oe.current.find((t) => t.id === e.id);
          if (!n) return;
          let r = oe.current.find(
            (r) => r.id !== e.id && r.boneName === n.boneName && r.frame === t,
          );
          (r && F(r.id), P(e.id, { frame: t }));
          return;
        }
        if (e.kind === `foot`) {
          let n = q.current.find((t) => t.id === e.id);
          if (!n) return;
          let r = q.current.find(
            (r) => r.id !== e.id && r.foot === n.foot && r.frame === t,
          );
          (r && V(r.id), B(e.id, { frame: t }));
          return;
        }
        let n = se.current.find((t) => t.id === e.id);
        if (!n) return;
        let r = se.current.find(
          (r) => r.id !== e.id && r.effector === n.effector && r.frame === t,
        );
        (r && L(r.id), I(e.id, { frame: t }));
      }, [R, U, z, F, P, L, I, V, B]),
      Ce = (0, X.useCallback)(
        (e) => {
          if (e.button !== 0) return;
          m && H();
          let t = n.current,
            r = t?.getBoundingClientRect();
          if (!r || !t) return;
          let a = e.clientX - r.left,
            o = e.clientY - r.top;
          if (a < 56) return;
          if (!K && T > w) {
            let e = ge(w + E),
              t = ge(T - E);
            if (
              Math.abs(o - 62) < 8 &&
              (Math.abs(a - e) < 8 || Math.abs(a - t) < 8)
            ) {
              W(`blend`);
              return;
            }
          }
          if (re > ne && o >= v7 && o < i7) {
            let e = ge(ne),
              t = ge(re);
            if (Math.abs(a - e) < 6) {
              W(`in`);
              return;
            }
            if (Math.abs(a - t) < 6) {
              W(`out`);
              return;
            }
          }
          let s = ve(a, o);
          if (s) {
            te({
              kind: s.kind,
              id: s.id,
              boneName: s.boneName,
              effector: s.effector,
              foot: s.foot,
              startX: a,
              origFrame: s.frame,
              frame: s.frame,
              moved: !1,
            });
            return;
          }
          ((i.current = !0), A(_e(a)));
        },
        [_e, ge, A, m, H, ve, K, ne, re, w, T, E],
      ),
      we = (0, X.useCallback)(
        (e) => {
          let t = n.current?.getBoundingClientRect();
          if (!t) return;
          let r = e.clientX - t.left;
          if (ee) {
            if (ee === `blend`) {
              let e = ge(w),
                t = ge(T),
                n = r - e,
                i = t - r,
                a = Math.min(n, i),
                o = Math.floor((T - w) / 2),
                s = Math.max(1, Math.min(o, Math.round(a / ue)));
              N(s);
            } else
              ee === `in`
                ? ie(Math.min(_e(r), re - 1), re)
                : ie(ne, Math.max(_e(r), ne + 1));
            return;
          }
          if (G) {
            let e = G.moved || Math.abs(r - G.startX) >= Hge;
            e &&
              !G.moved &&
              (G.kind === `offset` &&
                G.boneName &&
                G.boneName !== v &&
                U(G.boneName),
              G.kind === `ik` &&
                G.effector &&
                G.effector !== y &&
                z(G.effector));
            let t = e ? _e(r) : G.frame;
            (e !== G.moved || t !== G.frame) &&
              te({ ...G, moved: e, frame: t });
            return;
          }
          i.current && A(_e(r));
        },
        [_e, ge, A, ee, ie, N, ne, re, w, T, ue, p, G, v, y, U, z],
      ),
      Te = (0, X.useCallback)(() => {
        ((i.current = !1), W(null), Se());
      }, [Se]),
      Ee = (0, X.useCallback)(() => {
        ((i.current = !1), W(null));
      }, []),
      De = (0, X.useCallback)(
        (e) => {
          let t = n.current?.getBoundingClientRect();
          if (!t) return;
          let r = ve(e.clientX - t.left, e.clientY - t.top);
          r && A(r.frame);
        },
        [ve, A],
      ),
      Oe = (0, X.useCallback)(
        (e) => {
          e.preventDefault();
          let t = n.current?.getBoundingClientRect();
          if (!t) return;
          let r = e.clientX - t.left,
            i = e.clientY - t.top,
            a = ve(r, i);
          a &&
            (a.kind === `offset`
              ? F(a.id)
              : a.kind === `foot`
                ? V(a.id)
                : L(a.id));
        },
        [ve, F, L, V],
      ),
      ke = (0, X.useCallback)(
        (e) => {
          if (e.key !== `Delete` && e.key !== `Backspace`) return;
          if (b) {
            (e.preventDefault(),
              b.kind === `offset`
                ? F(b.id)
                : b.kind === `ik`
                  ? L(b.id)
                  : V(b.id));
            return;
          }
          if (!v) return;
          let t = h.find((e) => e.boneName === v && e.frame === f);
          t && (e.preventDefault(), F(t.id));
        },
        [b, v, h, f, F, L, V],
      );
    return (
      (0, X.useEffect)(() => {
        let e = () => {
          ((i.current = !1), W(null), Se());
        };
        return (
          window.addEventListener(`mouseup`, e),
          () => window.removeEventListener(`mouseup`, e)
        );
      }, [Se]),
      (0, X.useEffect)(() => {
        let e = n.current;
        if (!e) return;
        let t = (t) => {
          if ((t.preventDefault(), t.shiftKey)) {
            l((e) => Math.max(0, Math.min(he.current, e + t.deltaY * 0.5)));
            return;
          }
          let n = e.getBoundingClientRect(),
            r = t.clientX - n.left,
            i = t.deltaY > 0 ? 0.9 : 1.1;
          s((e) => {
            let t = Math.max(1, Math.min(40, e * i));
            if (t === e) return e;
            let n = de.current,
              a = n * e,
              o = n * t,
              s = ((r - 56 - 12 + fe.current) / a) * o + 56 + 12 - r,
              c = r7(pe.current, me.current, o);
            return (l(Math.max(0, Math.min(c, s))), t);
          });
        };
        return (
          e.addEventListener(`wheel`, t, { passive: !1 }),
          () => e.removeEventListener(`wheel`, t)
        );
      }, []),
      (0, Z.jsx)(`div`, {
        ref: r,
        className: `w-full min-h-0 ${e}`,
        children: (0, Z.jsx)(`canvas`, {
          ref: n,
          tabIndex: 0,
          className: `w-full h-full cursor-pointer outline-none`,
          onMouseDown: Ce,
          onMouseMove: we,
          onMouseUp: Te,
          onMouseLeave: Ee,
          onDoubleClick: De,
          onContextMenu: Oe,
          onKeyDown: ke,
        }),
      })
    );
  },
  Gge = ({
    characterName: e,
    showStateMachine: t,
    onToggleStateMachine: n,
    onOpenSkinWeights: r,
    compareAvailable: i,
    compareOn: a,
    onToggleCompare: o,
  }) => {
    let {
      viewMode: s,
      showGrid: c,
      showLoopGhosts: l,
      loopInFrame: u,
      loopOutFrame: d,
      setViewMode: f,
      toggleGrid: p,
      setShowLoopGhosts: m,
    } = R6();
    return (0, Z.jsxs)(`div`, {
      className: `flex items-center justify-between px-3 py-1.5 border-b border-border bg-card`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-xs font-medium text-foreground/70`,
              children: `Animation Editor`,
            }),
            e &&
              (0, Z.jsxs)(`span`, {
                className: `text-xs text-primary`,
                children: [`— `, e],
              }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, Z.jsx)(S7, {
              active: s === `mesh`,
              onClick: () => f(`mesh`),
              icon: (0, Z.jsx)(ui, { className: `h-3.5 w-3.5` }),
              label: `Mesh`,
            }),
            (0, Z.jsx)(S7, {
              active: s === `skeleton`,
              onClick: () => f(`skeleton`),
              icon: (0, Z.jsx)(co, { className: `h-3.5 w-3.5` }),
              label: `Bones`,
            }),
            (0, Z.jsx)(S7, {
              active: s === `mesh+skeleton`,
              onClick: () => f(`mesh+skeleton`),
              icon: (0, Z.jsx)(co, { className: `h-3.5 w-3.5` }),
              label: `Mesh + Bones`,
            }),
            (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border mx-1` }),
            (0, Z.jsx)(S7, {
              active: c,
              onClick: p,
              icon: (0, Z.jsx)(M, { className: `h-3.5 w-3.5` }),
              label: `Grid`,
            }),
            d > u &&
              (0, Z.jsx)(S7, {
                active: l,
                onClick: () => m(!l),
                icon: (0, Z.jsx)(B, { className: `h-3.5 w-3.5` }),
                label: `Loop Ghosts`,
              }),
            (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border mx-1` }),
            r &&
              (0, Z.jsx)(S7, {
                onClick: r,
                icon: (0, Z.jsx)(we, { className: `h-3.5 w-3.5` }),
                label: `Paint Weights`,
                title: `Open the Skin Weights editor`,
              }),
            (0, Z.jsx)(S7, {
              active: t,
              onClick: n,
              icon: (0, Z.jsx)(To, { className: `h-3.5 w-3.5` }),
              label: `State Machine`,
            }),
            i &&
              o &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border mx-1` }),
                  (0, Z.jsx)(S7, {
                    active: !!a,
                    onClick: o,
                    icon: (0, Z.jsx)(ate, { className: `h-3.5 w-3.5` }),
                    label: `Compare`,
                    title: `Compare with source`,
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  S7 = ({ active: e, onClick: t, icon: n, label: r, title: i }) =>
    (0, Z.jsxs)(`button`, {
      onClick: t,
      title: i,
      className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${e ? `bg-primary/20 text-primary-foreground/80 border border-primary/30` : `text-muted-foreground hover:bg-accent hover:text-foreground border border-transparent`}`,
      children: [n, r],
    }),
  Kge = {
    rotate: { min: -180, max: 180, step: 1 },
    translate: { min: -0.5, max: 0.5, step: 0.005 },
    scale: { min: 0.1, max: 3, step: 0.01 },
  },
  qge = [
    { mode: `rotate`, label: `Rotate`, Icon: D },
    { mode: `translate`, label: `Move`, Icon: w },
    { mode: `scale`, label: `Scale`, Icon: gn },
  ],
  Jge = () => {
    let {
        selectedBoneName: e,
        selectedBoneNames: t,
        boneOffsets: n,
        currentFrame: r,
        totalFrames: i,
        selectedKey: a,
        boneGizmoMode: o,
        setBoneGizmoMode: s,
        addBoneOffset: c,
        removeBoneOffset: l,
        updateBoneOffset: u,
        selectKey: d,
        setFrame: f,
      } = R6(),
      p = (0, X.useMemo)(
        () =>
          n.filter((t) => t.boneName === e).sort((e, t) => e.frame - t.frame),
        [n, e],
      ),
      m = (0, X.useMemo)(
        () =>
          a?.kind === `offset` ? (n.find((e) => e.id === a.id) ?? null) : null,
        [a, n],
      ),
      h = p.find((e) => e.frame === r) ?? null,
      g = m ?? h;
    if (!e)
      return (0, Z.jsx)(`div`, {
        className: `text-xs text-muted-foreground/50 text-center py-4`,
        children: `Click a bone in the viewport to offset it`,
      });
    let _ = o === `scale` ? j6 : o === `translate` ? A6 : k6,
      v = o === `scale` ? `scale` : o === `translate` ? `position` : `rotation`,
      y = (g ? g[v] : void 0) ?? _,
      b = Kge[o],
      x = () => {
        if (h) return;
        let t = c({ boneName: e, frame: r, rotation: [0, 0, 0] });
        d({ kind: `offset`, id: t });
      },
      S = () => {
        g && l(g.id);
      },
      C = (t, n) => {
        let i = [...y];
        if (((i[t] = n), !g)) {
          let t = c({
            boneName: e,
            frame: r,
            rotation: v === `rotation` ? i : [0, 0, 0],
            ...(v === `rotation` ? {} : { [v]: i }),
          });
          d({ kind: `offset`, id: t });
          return;
        }
        u(g.id, { [v]: i });
      },
      w = (e) => {
        if (!g) return;
        let t = Math.max(0, Math.min(Math.round(e), i));
        if (t === g.frame) return;
        let r = n.find(
          (e) => e.id !== g.id && e.boneName === g.boneName && e.frame === t,
        );
        (r && l(r.id), u(g.id, { frame: t }));
      };
    return (0, Z.jsxs)(`div`, {
      className: `text-xs space-y-3`,
      children: [
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-muted-foreground/50`,
              children: `Selected Bone:`,
            }),
            (0, Z.jsx)(`div`, {
              className: `text-yellow-300 font-mono mt-0.5`,
              children: e,
            }),
            t.length > 1 &&
              (0, Z.jsxs)(`div`, {
                className: `text-[10px] text-muted-foreground/60 mt-0.5`,
                children: [
                  `+`,
                  t.length - 1,
                  ` more selected — right-click for actions`,
                ],
              }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-muted-foreground/60`,
              children: g ? (m ? `Editing key` : `Key at playhead`) : `No key`,
            }),
            g &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-muted-foreground/40`,
                    children: `F`,
                  }),
                  (0, Z.jsx)(`input`, {
                    type: `number`,
                    min: 0,
                    max: i,
                    step: 1,
                    value: g.frame,
                    onChange: (e) => w(Number(e.target.value)),
                    title: `Move this key to another frame`,
                    className: `w-14 bg-muted border border-border text-foreground rounded px-1 py-0.5 text-[10px] text-center`,
                  }),
                  g.frame !== r &&
                    (0, Z.jsx)(`button`, {
                      onClick: () => f(g.frame),
                      title: `Move the playhead to this key`,
                      className: `p-0.5 text-muted-foreground/50 hover:text-foreground transition-colors`,
                      children: (0, Z.jsx)(fo, { className: `h-3 w-3` }),
                    }),
                ],
              }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `flex gap-1`,
          children: qge.map(({ mode: e, label: t, Icon: n }) =>
            (0, Z.jsxs)(
              `button`,
              {
                onClick: () => s(e),
                className: `flex-1 min-w-0 flex items-center justify-center gap-1 px-1.5 py-1 rounded text-[10px] transition-colors ${o === e ? `bg-primary/25 text-primary` : `bg-muted/30 text-muted-foreground hover:bg-muted/50`}`,
                children: [
                  (0, Z.jsx)(n, { className: `h-3 w-3 shrink-0` }),
                  (0, Z.jsx)(`span`, { className: `truncate`, children: t }),
                ],
              },
              e,
            ),
          ),
        }),
        (0, Z.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, Z.jsxs)(`h4`, {
              className: `font-semibold text-foreground/70`,
              children: [
                o === `rotate` && `Rotation offset (degrees)`,
                o === `translate` && `Translation offset (metres)`,
                o === `scale` && `Scale multiplier`,
              ],
            }),
            [`X`, `Y`, `Z`].map((e, t) =>
              (0, Z.jsx)(
                Yge,
                {
                  label: e,
                  value: y[t],
                  onChange: (e) => C(t, e),
                  color:
                    t === 0
                      ? `text-red-400`
                      : t === 1
                        ? `text-green-400`
                        : `text-blue-400`,
                  min: b.min,
                  max: b.max,
                  step: b.step,
                },
                e,
              ),
            ),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `flex gap-1.5`,
          children: g
            ? (0, Z.jsxs)(`button`, {
                onClick: S,
                className: `flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-red-500/20 text-red-300 rounded hover:bg-red-500/30 transition-colors`,
                children: [
                  (0, Z.jsx)(qr, { className: `h-3 w-3` }),
                  `Delete Keyframe (F`,
                  g.frame,
                  `)`,
                ],
              })
            : (0, Z.jsxs)(`button`, {
                onClick: x,
                className: `flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors`,
                children: [
                  (0, Z.jsx)(ni, { className: `h-3 w-3` }),
                  `Set Keyframe (F`,
                  r,
                  `)`,
                ],
              }),
        }),
        p.length > 0 &&
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsxs)(`h4`, {
                className: `font-semibold text-foreground/70 mb-1.5`,
                children: [`Keyframes (`, p.length, `)`],
              }),
              (0, Z.jsx)(`div`, {
                className: `space-y-0.5 max-h-32 overflow-y-auto`,
                children: p.map((e) =>
                  (0, Z.jsxs)(
                    `div`,
                    {
                      className: `w-full rounded flex items-center transition-colors ${e.id === g?.id ? `bg-primary/20` : `hover:bg-accent`}`,
                      children: [
                        (0, Z.jsxs)(`button`, {
                          onClick: () => d({ kind: `offset`, id: e.id }),
                          className: `flex-1 text-left px-2 py-1 flex items-center justify-between ${e.id === g?.id ? `text-foreground` : `text-muted-foreground`}`,
                          children: [
                            (0, Z.jsxs)(`span`, {
                              className: `font-mono`,
                              children: [`F`, e.frame],
                            }),
                            (0, Z.jsx)(`span`, {
                              className: `text-muted-foreground/50 text-[10px]`,
                              children: (e[v] ?? _)
                                .map((e) => e.toFixed(o === `rotate` ? 1 : 2))
                                .join(`, `),
                            }),
                          ],
                        }),
                        (0, Z.jsx)(`button`, {
                          onClick: () => f(e.frame),
                          title: `Move the playhead here`,
                          className: `px-1 py-1 text-muted-foreground/40 hover:text-foreground transition-colors`,
                          children: (0, Z.jsx)(fo, {
                            className: `h-2.5 w-2.5`,
                          }),
                        }),
                        (0, Z.jsx)(`button`, {
                          onClick: () => l(e.id),
                          title: `Delete keyframe`,
                          className: `px-1.5 py-1 text-muted-foreground/40 hover:text-red-400 transition-colors`,
                          children: (0, Z.jsx)(qr, {
                            className: `h-2.5 w-2.5`,
                          }),
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  },
  Yge = ({
    label: e,
    value: t,
    onChange: n,
    color: r,
    min: i,
    max: a,
    step: o,
  }) => {
    let s = o >= 1 ? 0 : o >= 0.01 ? 2 : 3;
    return (0, Z.jsxs)(`div`, {
      className: `flex items-center gap-2`,
      children: [
        (0, Z.jsx)(`span`, {
          className: `w-3 shrink-0 font-bold ${r}`,
          children: e,
        }),
        (0, Z.jsx)(`input`, {
          type: `range`,
          min: i,
          max: a,
          step: o,
          value: t,
          onChange: (e) => n(Number(e.target.value)),
          className: `min-w-0 flex-1 h-1 accent-primary`,
        }),
        (0, Z.jsx)(`input`, {
          type: `number`,
          min: i,
          max: a,
          step: o,
          value: Number(t.toFixed(s)),
          onChange: (e) => n(Number(e.target.value)),
          className: `w-14 shrink-0 bg-muted border border-border text-muted-foreground rounded px-1 py-0.5 text-[10px] text-center`,
        }),
      ],
    });
  },
  Xge = Object.defineProperty,
  C7 = (e, t) => Xge(e, `name`, { value: t, configurable: !0 }),
  w7 = `ContextMenu`,
  [Zge, Qge] = f(w7, [Ve]),
  T7 = Ve(),
  [$ge, E7] = Zge(w7),
  e_e = C7((e) => {
    let {
        __scopeContextMenu: t,
        children: n,
        onOpenChange: r,
        open: i,
        dir: a,
        modal: o = !0,
      } = e,
      s = X.useRef(!1),
      [c, l] = v({ prop: i, defaultProp: !1, onChange: r, caller: w7 }),
      u = T7(t);
    return (0, Z.jsx)($ge, {
      scope: t,
      open: c,
      onOpenChange: l,
      modal: o,
      hasInteractedRef: s,
      children: (0, Z.jsx)(ct, {
        ...u,
        dir: a,
        open: c,
        onOpenChange: l,
        modal: o,
        children: n,
      }),
    });
  }, `ContextMenu`),
  t_e = `ContextMenuTrigger`,
  n_e = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, disabled: r = !1, ...i } = e,
        a = E7(t_e, n),
        o = T7(n),
        [s, c] = X.useState({ x: 0, y: 0 }),
        l = X.useMemo(
          () => ({
            current: {
              getBoundingClientRect: C7(
                () => DOMRect.fromRect({ width: 0, height: 0, ...s }),
                `getBoundingClientRect`,
              ),
            },
          }),
          [s],
        ),
        u = X.useRef(0),
        f = X.useCallback(() => window.clearTimeout(u.current), []),
        p = C7((e) => {
          ((a.hasInteractedRef.current = !0),
            c({ x: e.clientX, y: e.clientY }),
            a.onOpenChange(!0));
        }, `handleOpen`);
      return (
        X.useEffect(() => f, [f]),
        X.useEffect(() => void (r && f()), [r, f]),
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(Ye, { ...o, virtualRef: l }),
            (0, Z.jsx)(_.span, {
              "data-state": a.open ? `open` : `closed`,
              "data-disabled": r ? `` : void 0,
              ...i,
              ref: t,
              style: { WebkitTouchCallout: `none`, ...e.style },
              onContextMenu: r
                ? e.onContextMenu
                : d(e.onContextMenu, (e) => {
                    (f(), p(e), e.preventDefault());
                  }),
              onPointerDown: r
                ? e.onPointerDown
                : d(
                    e.onPointerDown,
                    I7((e) => {
                      (f(),
                        a.open && a.onOpenChange(!1),
                        (u.current = window.setTimeout(() => p(e), 700)));
                    }),
                  ),
              onPointerMove: r ? e.onPointerMove : d(e.onPointerMove, I7(f)),
              onPointerCancel: r
                ? e.onPointerCancel
                : d(e.onPointerCancel, I7(f)),
              onPointerUp: r ? e.onPointerUp : d(e.onPointerUp, I7(f)),
            }),
          ],
        })
      );
    }, `ContextMenuTrigger`),
  ),
  r_e = C7((e) => {
    let { __scopeContextMenu: t, ...n } = e,
      r = T7(t);
    return (0, Z.jsx)(Ze, { ...r, ...n });
  }, `ContextMenuPortal`),
  i_e = `ContextMenuContent`,
  D7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = E7(i_e, n),
        a = T7(n),
        o = X.useRef(!1);
      return (0, Z.jsx)(lt, {
        ...a,
        ...r,
        ref: t,
        side: `right`,
        sideOffset: 2,
        align: `start`,
        onCloseAutoFocus: (t) => {
          (e.onCloseAutoFocus?.(t),
            !t.defaultPrevented && o.current && t.preventDefault(),
            (o.current = !1));
        },
        onInteractOutside: (t) => {
          (e.onInteractOutside?.(t),
            !t.defaultPrevented && !i.modal && (o.current = !0));
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-context-menu-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-context-menu-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-context-menu-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-context-menu-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      });
    }, `ContextMenuContent`),
  ),
  O7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(n);
      return (0, Z.jsx)(Nt, { ...i, ...r, ref: t });
    }, `ContextMenuLabel`),
  ),
  k7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(n);
      return (0, Z.jsx)(Je, { ...i, ...r, ref: t });
    }, `ContextMenuItem`),
  ),
  A7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(n);
      return (0, Z.jsx)(st, { ...i, ...r, ref: t });
    }, `ContextMenuCheckboxItem`),
  ),
  j7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(n);
      return (0, Z.jsx)(dt, { ...i, ...r, ref: t });
    }, `ContextMenuRadioItem`),
  ),
  M7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(n);
      return (0, Z.jsx)(Qe, { ...i, ...r, ref: t });
    }, `ContextMenuItemIndicator`),
  ),
  N7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(n);
      return (0, Z.jsx)(ut, { ...i, ...r, ref: t });
    }, `ContextMenuSeparator`),
  ),
  P7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(n);
      return (0, Z.jsx)(it, { ...i, ...r, ref: t });
    }, `ContextMenuSubTrigger`),
  ),
  F7 = X.forwardRef(
    C7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(n);
      return (0, Z.jsx)(ft, {
        ...i,
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-context-menu-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-context-menu-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-context-menu-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-context-menu-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      });
    }, `ContextMenuSubContent`),
  );
