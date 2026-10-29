// Create-CEn7EAZs 284 — jsx
// Lines 96651-97995 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var C_e = ({ className: e = ``, isActive: t }) => {
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
        selectBone: ee,
      } = L6(),
      [te, U] = (0, X.useState)(null),
      [W, ne] = (0, X.useState)(null),
      G = k === `clips`,
      re = G ? D : w,
      ie = G ? O : T,
      ae = G ? M : j,
      oe = (0, X.useRef)(null);
    oe.current = W;
    let se = (0, X.useRef)(h);
    se.current = h;
    let ce = (0, X.useRef)(g);
    ce.current = g;
    let K = (0, X.useRef)(S.keys);
    K.current = S.keys;
    let le = (0, X.useMemo)(() => b5(S.keys), [S.keys]),
      ue = (0, X.useMemo)(() => Zge(u, p), [u, p]),
      de = ue * o,
      fe = (0, X.useRef)(ue);
    fe.current = ue;
    let pe = (0, X.useRef)(c);
    pe.current = c;
    let me = (0, X.useRef)(u);
    me.current = u;
    let he = (0, X.useRef)(p);
    he.current = p;
    let ge = (0, X.useRef)(0);
    ((ge.current = n7(u, p, de)),
      (0, X.useEffect)(() => {
        (s(1), l(0));
      }, [C, p]),
      (0, X.useEffect)(() => {
        l((e) => Math.min(e, n7(u, p, de)));
      }, [u, p, de]));
    let _e = (0, X.useCallback)((e) => 68 + e * de - c, [de, c]),
      ve = (0, X.useCallback)(
        (e) => {
          let t = Math.round((e - 56 - 12 + c) / de);
          return Math.max(0, Math.min(t, p));
        },
        [de, c, p],
      ),
      ye = (0, X.useCallback)(
        (e, t) => {
          let n = (t, n, r) => {
            let i = null,
              a = 5;
            for (let o of t) {
              let t = Math.abs(e - _e(n(o)));
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
          if (t >= o7 && t < c7) {
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
          if (t >= c7 && t < u7) {
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
          if (t >= u7 && t < f7) {
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
          if (t >= f7 && t < r_e) {
            let e = t < m7 ? `l` : `r`,
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
        [h, g, S.keys, _e, v, y],
      ),
      be = (0, X.useCallback)(() => {
        let e = n.current;
        if (!e) return;
        let t = e.getContext(`2d`);
        if (!t) return;
        let { width: r, height: i } = e,
          a = window.devicePixelRatio || 1;
        (t.clearRect(0, 0, r, i), (t.fillStyle = y_e), t.fillRect(0, 0, r, i));
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
                t.moveTo(e, _7),
                t.lineTo(e, s),
                t.stroke(),
                (t.fillStyle = `rgba(${r}, 0.85)`),
                t.beginPath(),
                t.roundRect(e - 3, _7, 6, 12, 2),
                t.fill());
            };
            (i(e), i(n));
          },
          { minor: u, major: d } = e_e(de),
          m = d,
          S = Math.max(0, Math.floor(c / de)),
          k = Math.min(p, Math.ceil((c + o - 56) / de));
        for (let e = S; e <= k; e++) {
          if (e % u !== 0) continue;
          let n = _e(e);
          if (n < -1 || n > o + 1) continue;
          let r = e % d === 0;
          (t.beginPath(),
            (t.strokeStyle = __e),
            (t.lineWidth = r ? 1 : 0.5),
            t.moveTo(n, 0),
            t.lineTo(n, r ? t_e : n_e),
            t.stroke(),
            e % m === 0 &&
              e > 0 &&
              ((t.fillStyle = v_e),
              (t.font = `9px monospace`),
              (t.textAlign = `center`),
              t.fillText(String(e), n, r7 - 4)));
        }
        if (
          (t.beginPath(),
          (t.strokeStyle = `#333`),
          (t.lineWidth = 1),
          t.moveTo(0, r7),
          t.lineTo(o, r7),
          t.stroke(),
          p > 0)
        ) {
          let e = _e(0),
            n = _e(p),
            r = a7 - 8;
          ((t.fillStyle = `rgba(168, 85, 247, 0.08)`),
            t.beginPath(),
            t.roundRect(e, 32, n - e, r, 4),
            t.fill(),
            (t.strokeStyle = `rgba(168, 85, 247, 0.15)`),
            (t.lineWidth = 1),
            t.stroke());
        }
        if (!G && T > w) {
          let e = _e(w),
            n = _e(T),
            r = _e(w + E),
            i = _e(T - E),
            a = i7;
          ((t.fillStyle = `rgba(${y7}, 0.06)`),
            t.fillRect(e, a, n - e, 62 - a),
            r > e &&
              (t.beginPath(),
              t.moveTo(e, a),
              t.lineTo(e, 62),
              t.lineTo(r, 62),
              t.closePath(),
              (t.fillStyle = `rgba(${y7}, 0.18)`),
              t.fill(),
              t.beginPath(),
              (t.strokeStyle = `rgba(${y7}, 0.6)`),
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
              (t.fillStyle = `rgba(${y7}, 0.18)`),
              t.fill(),
              t.beginPath(),
              (t.strokeStyle = `rgba(${y7}, 0.6)`),
              (t.lineWidth = 1.5),
              t.moveTo(n, a),
              t.lineTo(i, 62),
              t.stroke()),
            (t.strokeStyle = `rgba(${y7}, 0.35)`),
            (t.lineWidth = 1),
            t.strokeRect(e, a, n - e, 62 - a));
          let c = (e + n) / 2;
          c > 0 &&
            c < o &&
            ((t.fillStyle = `rgba(${y7}, 0.6)`),
            (t.font = `10px sans-serif`),
            (t.textAlign = `center`),
            t.fillText(`Loop Region`, c, 42));
          let u = `Blend ${E}f`;
          t.font = `9px sans-serif`;
          let d = t.measureText(u).width + 12,
            f = Math.max(66, s - b_e),
            p = (e) => {
              e < 0 ||
                e > o ||
                ((t.fillStyle = `rgba(${y7}, 0.12)`),
                t.beginPath(),
                t.roundRect(e - d / 2, f, d, 14, 3),
                t.fill(),
                (t.strokeStyle = `rgba(${y7}, 0.35)`),
                (t.lineWidth = 0.5),
                t.stroke(),
                (t.fillStyle = `rgba(${y7}, 0.85)`),
                (t.textAlign = `center`),
                t.fillText(u, e, f + 10.5));
            };
          (p((e + r) / 2), p((i + n) / 2));
          let m = (e) => {
            ((t.fillStyle = `rgba(${y7}, 0.9)`),
              t.beginPath(),
              t.moveTo(e, 58),
              t.lineTo(e + 3.5, 62),
              t.lineTo(e, 66),
              t.lineTo(e - 3.5, 62),
              t.closePath(),
              t.fill());
          };
          (m(r), m(i), l(e, n, y7));
        }
        if (G && O > D) {
          let e = _e(D),
            n = _e(O),
            r = i7;
          ((t.fillStyle = `rgba(${b7}, 0.06)`),
            t.fillRect(e, r, n - e, 62 - r),
            (t.strokeStyle = `rgba(${b7}, 0.35)`),
            (t.lineWidth = 1),
            t.strokeRect(e, r, n - e, 62 - r));
          let i = (e + n) / 2;
          (i > 0 &&
            i < o &&
            ((t.fillStyle = `rgba(${b7}, 0.7)`),
            (t.font = `10px sans-serif`),
            (t.textAlign = `center`),
            t.fillText(`Clip Range`, i, 42)),
            l(e, n, b7));
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
          j = W;
        if (h.length > 0) {
          for (let e of h) {
            if (e.boneName === v) continue;
            let t = _e(e.frame);
            t < -2 || t > o + 2 || A(t, a_e, 2.5, 3.5, `#6b6b7a`, !1);
          }
          for (let e of h) {
            if (e.boneName !== v) continue;
            let t = j && j.moved && j.id === e.id ? j.frame : e.frame,
              n = _e(t);
            if (n < -2 || n > o + 2) continue;
            let r = b?.kind === `offset` && b.id === e.id;
            A(n, i_e, r ? 5 : 4, r ? 7 : 5.5, `#ffdd00`, r);
          }
        }
        if (g.length > 0) {
          for (let e of g) {
            if (e.effector === y) continue;
            let t = _e(e.frame);
            t < -2 ||
              t > o + 2 ||
              A(t, g7, 2.5, 3, `rgba(34, 211, 238, 0.35)`, !1);
          }
          for (let e of g) {
            if (e.effector !== y) continue;
            let t = j && j.moved && j.id === e.id ? j.frame : e.frame,
              n = _e(t);
            if (n < -2 || n > o + 2) continue;
            let r = b?.kind === `ik` && b.id === e.id;
            A(
              n,
              g7,
              r ? 4.5 : 3.5,
              r ? 6.5 : 5,
              e.effector === `hips` ? p_e : f_e,
              r,
            );
          }
        }
        let M = (e) => {
          let n = le.get(e),
            r = l_e(e);
          if (!n || n.length === 0) return;
          ((t.fillStyle = `rgba(255, 255, 255, 0.04)`),
            t.fillRect(_e(0), r, _e(p) - _e(0), p7));
          for (let n of x) {
            if (n.foot !== e) continue;
            let i = _e(n.start),
              a = _e(n.end);
            ((t.fillStyle = m_e), t.fillRect(i, r, Math.max(2, a - i), p7));
          }
          let i = r + p7 - 1,
            a = p7 - 2;
          (t.beginPath(), t.moveTo(_e(0), i));
          for (let e = 0; e <= p; e++) {
            let r = Math.max(0, Math.min(1, x5(n, e)));
            t.lineTo(_e(e), i - r * a);
          }
          (t.lineTo(_e(p), i), t.closePath(), (t.fillStyle = h_e), t.fill());
          let s = c_e(e);
          for (let e of n) {
            let t = j && j.moved && j.id === e.id ? j.frame : e.frame,
              n = _e(t);
            if (n < -2 || n > o + 2) continue;
            let r = b?.kind === `foot` && b.id === e.id;
            A(n, s, r ? 4.5 : 3.5, r ? 6.5 : 5, g_e, r);
          }
        };
        (M(`l`), M(`r`));
        let N = _e(f);
        if (
          (N >= -1 &&
            N <= o + 1 &&
            (t.beginPath(),
            (t.strokeStyle = v7),
            (t.lineWidth = 2),
            t.moveTo(N, 0),
            t.lineTo(N, s),
            t.stroke(),
            t.beginPath(),
            (t.fillStyle = v7),
            t.moveTo(N - 5, 0),
            t.lineTo(N + 5, 0),
            t.lineTo(N, 6),
            t.closePath(),
            t.fill()),
          t.restore(),
          (t.fillStyle = d_e),
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
          t.fillText(n, 4, r7 - 8);
        }
        let P = (e, n, r, i = !1) => {
          ((t.fillStyle = i ? `rgba(200, 200, 210, 0.32)` : u_e),
            (t.font = `9px sans-serif`),
            (t.textAlign = `right`),
            t.fillText(e, 50, n + r / 2 + 3));
        };
        (P(`Clip`, i7, a7),
          P(v ? S_e(v) : `Keys`, o7, s7),
          P(`other`, c7, l7, !0),
          P(`IK`, u7, d7, !(_.length > 0 || g.length > 0)),
          P(`Foot L`, f7, p7, !le.has(`l`)),
          P(`Foot R`, m7, p7, !le.has(`r`)),
          t.restore());
      }, [f, p, de, c, _e, h, g, _, v, y, b, x, le, S, w, T, E, G, D, O, W, C]),
      q = (0, X.useCallback)(() => {
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
          be());
      }, [be]);
    (0, X.useEffect)(() => {
      q();
      let e = new ResizeObserver(q);
      return (r.current && e.observe(r.current), () => e.disconnect());
    }, [q]);
    let xe = t !== !1;
    (0, X.useEffect)(() => {
      if (m && xe) {
        let e = () => {
          (be(), (a.current = requestAnimationFrame(e)));
        };
        return (
          (a.current = requestAnimationFrame(e)),
          () => {
            a.current && cancelAnimationFrame(a.current);
          }
        );
      } else xe && be();
    }, [be, m, xe]);
    let Se = (0, X.useCallback)(() => {
        let e = oe.current;
        if (!e) return;
        if (((oe.current = null), ne(null), !e.moved)) {
          (R({ kind: e.kind, id: e.id }),
            e.kind === `offset` && e.boneName && ee(e.boneName),
            e.kind === `ik` && e.effector && z(e.effector));
          return;
        }
        let t = e.frame;
        if (t === e.origFrame) return;
        if (e.kind === `offset`) {
          let n = se.current.find((t) => t.id === e.id);
          if (!n) return;
          let r = se.current.find(
            (r) => r.id !== e.id && r.boneName === n.boneName && r.frame === t,
          );
          (r && F(r.id), P(e.id, { frame: t }));
          return;
        }
        if (e.kind === `foot`) {
          let n = K.current.find((t) => t.id === e.id);
          if (!n) return;
          let r = K.current.find(
            (r) => r.id !== e.id && r.foot === n.foot && r.frame === t,
          );
          (r && V(r.id), B(e.id, { frame: t }));
          return;
        }
        let n = ce.current.find((t) => t.id === e.id);
        if (!n) return;
        let r = ce.current.find(
          (r) => r.id !== e.id && r.effector === n.effector && r.frame === t,
        );
        (r && L(r.id), I(e.id, { frame: t }));
      }, [R, ee, z, F, P, L, I, V, B]),
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
          if (!G && T > w) {
            let e = _e(w + E),
              t = _e(T - E);
            if (
              Math.abs(o - 62) < 8 &&
              (Math.abs(a - e) < 8 || Math.abs(a - t) < 8)
            ) {
              U(`blend`);
              return;
            }
          }
          if (ie > re && o >= _7 && o < r7) {
            let e = _e(re),
              t = _e(ie);
            if (Math.abs(a - e) < 6) {
              U(`in`);
              return;
            }
            if (Math.abs(a - t) < 6) {
              U(`out`);
              return;
            }
          }
          let s = ye(a, o);
          if (s) {
            ne({
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
          ((i.current = !0), A(ve(a)));
        },
        [ve, _e, A, m, H, ye, G, re, ie, w, T, E],
      ),
      we = (0, X.useCallback)(
        (e) => {
          let t = n.current?.getBoundingClientRect();
          if (!t) return;
          let r = e.clientX - t.left;
          if (te) {
            if (te === `blend`) {
              let e = _e(w),
                t = _e(T),
                n = r - e,
                i = t - r,
                a = Math.min(n, i),
                o = Math.floor((T - w) / 2),
                s = Math.max(1, Math.min(o, Math.round(a / de)));
              N(s);
            } else
              te === `in`
                ? ae(Math.min(ve(r), ie - 1), ie)
                : ae(re, Math.max(ve(r), re + 1));
            return;
          }
          if (W) {
            let e = W.moved || Math.abs(r - W.startX) >= x_e;
            e &&
              !W.moved &&
              (W.kind === `offset` &&
                W.boneName &&
                W.boneName !== v &&
                ee(W.boneName),
              W.kind === `ik` &&
                W.effector &&
                W.effector !== y &&
                z(W.effector));
            let t = e ? ve(r) : W.frame;
            (e !== W.moved || t !== W.frame) &&
              ne({ ...W, moved: e, frame: t });
            return;
          }
          i.current && A(ve(r));
        },
        [ve, _e, A, te, ae, N, re, ie, w, T, de, p, W, v, y, ee, z],
      ),
      Te = (0, X.useCallback)(() => {
        ((i.current = !1), U(null), Se());
      }, [Se]),
      Ee = (0, X.useCallback)(() => {
        ((i.current = !1), U(null));
      }, []),
      De = (0, X.useCallback)(
        (e) => {
          let t = n.current?.getBoundingClientRect();
          if (!t) return;
          let r = ye(e.clientX - t.left, e.clientY - t.top);
          r && A(r.frame);
        },
        [ye, A],
      ),
      Oe = (0, X.useCallback)(
        (e) => {
          e.preventDefault();
          let t = n.current?.getBoundingClientRect();
          if (!t) return;
          let r = e.clientX - t.left,
            i = e.clientY - t.top,
            a = ye(r, i);
          a &&
            (a.kind === `offset`
              ? F(a.id)
              : a.kind === `foot`
                ? V(a.id)
                : L(a.id));
        },
        [ye, F, L, V],
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
          ((i.current = !1), U(null), Se());
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
            l((e) => Math.max(0, Math.min(ge.current, e + t.deltaY * 0.5)));
            return;
          }
          let n = e.getBoundingClientRect(),
            r = t.clientX - n.left,
            i = t.deltaY > 0 ? 0.9 : 1.1;
          s((e) => {
            let t = Math.max(1, Math.min(40, e * i));
            if (t === e) return e;
            let n = fe.current,
              a = n * e,
              o = n * t,
              s = ((r - 56 - 12 + pe.current) / a) * o + 56 + 12 - r,
              c = n7(me.current, he.current, o);
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
  w_e = ({
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
    } = L6();
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
            (0, Z.jsx)(x7, {
              active: s === `mesh`,
              onClick: () => f(`mesh`),
              icon: (0, Z.jsx)(Yr, { className: `h-3.5 w-3.5` }),
              label: `Mesh`,
            }),
            (0, Z.jsx)(x7, {
              active: s === `skeleton`,
              onClick: () => f(`skeleton`),
              icon: (0, Z.jsx)(Do, { className: `h-3.5 w-3.5` }),
              label: `Bones`,
            }),
            (0, Z.jsx)(x7, {
              active: s === `mesh+skeleton`,
              onClick: () => f(`mesh+skeleton`),
              icon: (0, Z.jsx)(Do, { className: `h-3.5 w-3.5` }),
              label: `Mesh + Bones`,
            }),
            (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border mx-1` }),
            (0, Z.jsx)(x7, {
              active: c,
              onClick: p,
              icon: (0, Z.jsx)(M, { className: `h-3.5 w-3.5` }),
              label: `Grid`,
            }),
            d > u &&
              (0, Z.jsx)(x7, {
                active: l,
                onClick: () => m(!l),
                icon: (0, Z.jsx)(B, { className: `h-3.5 w-3.5` }),
                label: `Loop Ghosts`,
              }),
            (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border mx-1` }),
            r &&
              (0, Z.jsx)(x7, {
                onClick: r,
                icon: (0, Z.jsx)(xe, { className: `h-3.5 w-3.5` }),
                label: `Paint Weights`,
                title: `Open the Skin Weights editor`,
              }),
            (0, Z.jsx)(x7, {
              active: t,
              onClick: n,
              icon: (0, Z.jsx)(ss, { className: `h-3.5 w-3.5` }),
              label: `State Machine`,
            }),
            i &&
              o &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border mx-1` }),
                  (0, Z.jsx)(x7, {
                    active: !!a,
                    onClick: o,
                    icon: (0, Z.jsx)(No, { className: `h-3.5 w-3.5` }),
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
  x7 = ({ active: e, onClick: t, icon: n, label: r, title: i }) =>
    (0, Z.jsxs)(`button`, {
      onClick: t,
      title: i,
      className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${e ? `bg-primary/20 text-primary-foreground/80 border border-primary/30` : `text-muted-foreground hover:bg-accent hover:text-foreground border border-transparent`}`,
      children: [n, r],
    }),
  T_e = {
    rotate: { min: -180, max: 180, step: 1 },
    translate: { min: -0.5, max: 0.5, step: 0.005 },
    scale: { min: 0.1, max: 3, step: 0.01 },
  },
  E_e = [
    { mode: `rotate`, label: `Rotate`, Icon: D },
    { mode: `translate`, label: `Move`, Icon: w },
    { mode: `scale`, label: `Scale`, Icon: rn },
  ],
  D_e = () => {
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
      } = L6(),
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
    let _ = o === `scale` ? A6 : o === `translate` ? k6 : O6,
      v = o === `scale` ? `scale` : o === `translate` ? `position` : `rotation`,
      y = (g ? g[v] : void 0) ?? _,
      b = T_e[o],
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
                      children: (0, Z.jsx)(Fo, { className: `h-3 w-3` }),
                    }),
                ],
              }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `flex gap-1`,
          children: E_e.map(({ mode: e, label: t, Icon: n }) =>
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
                O_e,
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
                  (0, Z.jsx)(jr, { className: `h-3 w-3` }),
                  `Delete Keyframe (F`,
                  g.frame,
                  `)`,
                ],
              })
            : (0, Z.jsxs)(`button`, {
                onClick: x,
                className: `flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors`,
                children: [
                  (0, Z.jsx)(Br, { className: `h-3 w-3` }),
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
                          children: (0, Z.jsx)(Fo, {
                            className: `h-2.5 w-2.5`,
                          }),
                        }),
                        (0, Z.jsx)(`button`, {
                          onClick: () => l(e.id),
                          title: `Delete keyframe`,
                          className: `px-1.5 py-1 text-muted-foreground/40 hover:text-red-400 transition-colors`,
                          children: (0, Z.jsx)(jr, {
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
  O_e = ({
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
  k_e = Object.defineProperty,
  S7 = (e, t) => k_e(e, `name`, { value: t, configurable: !0 }),
  C7 = `ContextMenu`,
  [A_e, j_e] = f(C7, [He]),
  w7 = He(),
  [M_e, T7] = A_e(C7),
  N_e = S7((e) => {
    let {
        __scopeContextMenu: t,
        children: n,
        onOpenChange: r,
        open: i,
        dir: a,
        modal: o = !0,
      } = e,
      s = X.useRef(!1),
      [c, l] = y({ prop: i, defaultProp: !1, onChange: r, caller: C7 }),
      u = w7(t);
    return (0, Z.jsx)(M_e, {
      scope: t,
      open: c,
      onOpenChange: l,
      modal: o,
      hasInteractedRef: s,
      children: (0, Z.jsx)(lt, {
        ...u,
        dir: a,
        open: c,
        onOpenChange: l,
        modal: o,
        children: n,
      }),
    });
  }, `ContextMenu`),
  P_e = `ContextMenuTrigger`,
  F_e = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, disabled: r = !1, ...i } = e,
        a = T7(P_e, n),
        o = w7(n),
        [s, c] = X.useState({ x: 0, y: 0 }),
        l = X.useMemo(
          () => ({
            current: {
              getBoundingClientRect: S7(
                () => DOMRect.fromRect({ width: 0, height: 0, ...s }),
                `getBoundingClientRect`,
              ),
            },
          }),
          [s],
        ),
        u = X.useRef(0),
        f = X.useCallback(() => window.clearTimeout(u.current), []),
        p = S7((e) => {
          ((a.hasInteractedRef.current = !0),
            c({ x: e.clientX, y: e.clientY }),
            a.onOpenChange(!0));
        }, `handleOpen`);
      return (
        X.useEffect(() => f, [f]),
        X.useEffect(() => void (r && f()), [r, f]),
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(Xe, { ...o, virtualRef: l }),
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
                    F7((e) => {
                      (f(),
                        a.open && a.onOpenChange(!1),
                        (u.current = window.setTimeout(() => p(e), 700)));
                    }),
                  ),
              onPointerMove: r ? e.onPointerMove : d(e.onPointerMove, F7(f)),
              onPointerCancel: r
                ? e.onPointerCancel
                : d(e.onPointerCancel, F7(f)),
              onPointerUp: r ? e.onPointerUp : d(e.onPointerUp, F7(f)),
            }),
          ],
        })
      );
    }, `ContextMenuTrigger`),
  ),
  I_e = S7((e) => {
    let { __scopeContextMenu: t, ...n } = e,
      r = w7(t);
    return (0, Z.jsx)(Qe, { ...r, ...n });
  }, `ContextMenuPortal`),
  L_e = `ContextMenuContent`,
  E7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = T7(L_e, n),
        a = w7(n),
        o = X.useRef(!1);
      return (0, Z.jsx)(ut, {
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
  D7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = w7(n);
      return (0, Z.jsx)(Ft, { ...i, ...r, ref: t });
    }, `ContextMenuLabel`),
  ),
  O7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = w7(n);
      return (0, Z.jsx)(Ye, { ...i, ...r, ref: t });
    }, `ContextMenuItem`),
  ),
  k7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = w7(n);
      return (0, Z.jsx)(ct, { ...i, ...r, ref: t });
    }, `ContextMenuCheckboxItem`),
  ),
  A7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = w7(n);
      return (0, Z.jsx)(ft, { ...i, ...r, ref: t });
    }, `ContextMenuRadioItem`),
  ),
  j7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = w7(n);
      return (0, Z.jsx)($e, { ...i, ...r, ref: t });
    }, `ContextMenuItemIndicator`),
  ),
  M7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = w7(n);
      return (0, Z.jsx)(dt, { ...i, ...r, ref: t });
    }, `ContextMenuSeparator`),
  ),
  N7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = w7(n);
      return (0, Z.jsx)(at, { ...i, ...r, ref: t });
    }, `ContextMenuSubTrigger`),
  ),
  P7 = X.forwardRef(
    S7(function (e, t) {
      let { __scopeContextMenu: n, ...r } = e,
        i = w7(n);
      return (0, Z.jsx)(pt, {
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
