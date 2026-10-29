// GameStoryFeed-Dif_KO0F 03 — current
// Lines 353-807 of readable/assets/GameStoryFeed-Dif_KO0F.pretty.js (statement-aligned).
function B() {
  let [e, t] = i(),
    n = r(),
    { user: o, isAuthenticated: s } = x(),
    { toast: l } = a(),
    { t: p, i18n: ee } = ie(),
    { trackEvent: te } = pe(),
    m = S(),
    ae = (0, F.useRef)(e.get(`g`) || ``),
    oe = (0, F.useRef)(y(e)),
    C = (0, F.useRef)(``),
    [T, E] = (0, F.useState)([]),
    [D, O] = (0, F.useState)(0),
    [k, A] = (0, F.useState)(4),
    [j, M] = (0, F.useState)(!0),
    [N, P] = (0, F.useState)(null),
    [L, R] = (0, F.useState)({}),
    [Se, z] = (0, F.useState)({}),
    [B, V] = (0, F.useState)({}),
    [Me, Ne] = (0, F.useState)({}),
    [Pe, Fe] = (0, F.useState)({}),
    H = (0, F.useRef)(new Set()),
    U = (0, F.useRef)(new Set()),
    [Ie, Le] = (0, F.useState)(!1),
    [W, G] = (0, F.useState)([]),
    [Re, ze] = (0, F.useState)(!1),
    [K, q] = (0, F.useState)(``),
    [J, Be] = (0, F.useState)(!1),
    Y = (0, F.useRef)(null),
    Ve = (0, F.useRef)(!1),
    X = (0, F.useRef)(null),
    Z = (0, F.useRef)(null),
    He = (0, F.useRef)(!1),
    Q = T[D],
    Ue = (e) => (e._id === C.current ? oe.current : `game_feed_suggestion`);
  ((0, F.useEffect)(() => {
    let e = !1;
    return (
      (async () => {
        (M(!0), P(null));
        try {
          let t = ae.current,
            { games: n } = await le(`all`, void 0, m),
            r = n,
            i = r.findIndex((e) => e.shortCode === t || e._id === t);
          if (i === -1 && t) {
            let { game: e } = await b(t);
            ((r = [e, ...r.filter((t) => t._id !== e._id)]), (i = 0));
          }
          if (e) return;
          let a = Math.max(0, i);
          ((C.current = r[a]?._id || ``),
            E(r),
            O(a),
            A(Math.max(4, a + Oe)),
            z(Object.fromEntries(r.map((e) => [e._id, e.likes ?? 0]))));
        } catch (t) {
          (console.error(`Error loading game feed:`, t),
            e || P(p(`game.notFound`, `Game not found`)));
        } finally {
          e || M(!1);
        }
      })(),
      () => {
        e = !0;
      }
    );
  }, [p, m]),
    (0, F.useLayoutEffect)(() => {
      if (j || Ve.current || !Y.current) return;
      let e = Y.current;
      (D > 0 && (e.scrollTop = e.clientHeight * D), (Ve.current = !0));
    }, [j, D]));
  let We = (0, F.useCallback)(() => {
      X.current === null &&
        (X.current = window.requestAnimationFrame(() => {
          X.current = null;
          let e = Y.current;
          if (!e || e.clientHeight === 0) return;
          let t = Math.round(e.scrollTop / e.clientHeight);
          O((e) => (e === t ? e : t));
        }));
    }, []),
    Ge = (0, F.useCallback)((e) => {
      let t = Y.current,
        n = e.touches[0];
      !t ||
        !n ||
        e.touches.length !== 1 ||
        t.clientHeight === 0 ||
        (Z.current = {
          x: n.clientX,
          y: n.clientY,
          page: Math.round(t.scrollTop / t.clientHeight),
        });
    }, []),
    Ke = (0, F.useCallback)(
      (e) => {
        let t = Y.current,
          n = Z.current,
          r = e.changedTouches[0];
        if (((Z.current = null), !t || !n || !r || t.clientHeight === 0))
          return;
        let i = r.clientX - n.x,
          a = r.clientY - n.y;
        if (Math.abs(a) < ke || Math.abs(a) <= Math.abs(i)) return;
        let o = a < 0 ? 1 : -1,
          s = Math.max(0, Math.min(T.length - 1, n.page + o));
        t.scrollTo({ top: s * t.clientHeight, behavior: `smooth` });
      },
      [T.length],
    );
  ((0, F.useEffect)(
    () => () => {
      X.current !== null && window.cancelAnimationFrame(X.current);
    },
    [],
  ),
    (0, F.useEffect)(() => {
      D + Oe >= k && k < T.length && A((e) => Math.min(T.length, e + 10));
    }, [D, k, T.length]),
    (0, F.useEffect)(() => {
      if (!Q || He.current) return;
      let n = Ae(Q),
        r = Ue(Q);
      n &&
        (n !== e.get(`g`) || r !== e.get(`game_source`)) &&
        t({ g: n, game_source: r }, { replace: !0 });
    }, [Q]),
    (0, F.useEffect)(() => {
      if (!Q) return;
      if (!s) {
        (R((e) => ({ ...e, [Q._id]: !1 })),
          Q.creatorId && V((e) => ({ ...e, [Q.creatorId]: !1 })));
        return;
      }
      let e = !1;
      return (
        (async () => {
          try {
            let t = await ge(Q._id);
            e || R((e) => ({ ...e, [Q._id]: t }));
          } catch (e) {
            console.error(`Error checking like status:`, e);
          }
          if (!(!Q.creatorId || Q.creatorId === o?.id))
            try {
              let t = await ve(Q.creatorId);
              e || V((e) => ({ ...e, [Q.creatorId]: t }));
            } catch (e) {
              console.error(`Error checking follow status:`, e);
            }
        })(),
        () => {
          e = !0;
        }
      );
    }, [Q, s, o?.id]));
  let $ = () => {
      let e = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      n(de(e, `play_gate`));
    },
    qe = async (e) => {
      if (!s) {
        $();
        return;
      }
      if (H.current.has(e._id)) return;
      (H.current.add(e._id), Ne((t) => ({ ...t, [e._id]: !0 })));
      let t = !!L[e._id];
      (R((n) => ({ ...n, [e._id]: !t })),
        z((n) => ({
          ...n,
          [e._id]: Math.max(0, (n[e._id] ?? 0) + (t ? -1 : 1)),
        })));
      try {
        t ? await me(e._id) : await he(e._id);
      } catch (n) {
        (console.error(`Error updating like status:`, n),
          R((n) => ({ ...n, [e._id]: t })),
          z((n) => ({
            ...n,
            [e._id]: Math.max(0, (n[e._id] ?? 0) + (t ? 1 : -1)),
          })),
          l({
            title: p(`game.toast.likeFailed`, `Failed to update like status.`),
            variant: `destructive`,
          }));
      } finally {
        (H.current.delete(e._id), Ne((t) => ({ ...t, [e._id]: !1 })));
      }
    },
    Je = async (e) => {
      if (!s) {
        $();
        return;
      }
      if (!e.creatorId || e.creatorId === o?.id || U.current.has(e.creatorId))
        return;
      (U.current.add(e.creatorId), Fe((t) => ({ ...t, [e.creatorId]: !0 })));
      let t = !!B[e.creatorId];
      V((n) => ({ ...n, [e.creatorId]: !t }));
      try {
        t ? await _e(e.creatorId) : await ye(e.creatorId);
      } catch (n) {
        (console.error(`Error updating follow status:`, n),
          V((n) => ({ ...n, [e.creatorId]: t })),
          l({
            title: p(
              `game.toast.followFailed`,
              `Failed to update follow status.`,
            ),
            variant: `destructive`,
          }));
      } finally {
        (U.current.delete(e.creatorId),
          Fe((t) => ({ ...t, [e.creatorId]: !1 })));
      }
    },
    Ye = async (e) => {
      (Le(!0), ze(!0));
      try {
        let { comments: t } = await fe(e._id);
        G(t);
      } catch (e) {
        (console.error(`Error loading comments:`, e), G([]));
      } finally {
        ze(!1);
      }
    },
    Xe = async () => {
      if (!(!Q || !K.trim() || J)) {
        if (!s) {
          $();
          return;
        }
        Be(!0);
        try {
          (await f(Q._id, K.trim()), q(``));
          let { comments: e } = await fe(Q._id);
          G(e);
        } catch (e) {
          (console.error(`Error posting comment:`, e),
            l({
              title: p(`game.toast.commentFailed`, `Failed to post comment.`),
              variant: `destructive`,
            }));
        } finally {
          Be(!1);
        }
      }
    },
    Ze = (e) => {
      He.current = !0;
      let t = Ue(e);
      (t === `game_feed_suggestion` &&
        te(re.events.SELECT_CONTENT, {
          content_type: `game`,
          content_id: `game_${e._id}`,
          game_id: e._id,
          game_title: e.title,
          game_source: t,
          source_game_id: C.current,
        }),
        document.documentElement
          .requestFullscreen?.({ navigationUI: `hide` })
          ?.catch(() => {}),
        n(`${ce(e, t)}&play=1`));
    },
    Qe = () => {
      window.history.length > 1 ? n(-1) : n(`/`);
    },
    $e = (0, F.useMemo)(() => T.slice(0, k), [T, k]);
  return j
    ? (0, I.jsx)(`div`, {
        className: `fixed inset-0 z-[60] flex items-center justify-center bg-black`,
        children: (0, I.jsx)(d, {
          className: `h-8 w-8 animate-spin text-white/70`,
        }),
      })
    : N || T.length === 0
      ? (0, I.jsxs)(`div`, {
          className: `fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-black text-white`,
          children: [
            (0, I.jsx)(`p`, {
              children: N ?? p(`game.notFound`, `Game not found`),
            }),
            (0, I.jsx)(c, {
              variant: `secondary`,
              onClick: () => n(`/`),
              children: p(`common.back`, `Back`),
            }),
          ],
        })
      : (0, I.jsxs)(`div`, {
          className: `fixed inset-0 z-[60] bg-black`,
          children: [
            Q &&
              (0, I.jsx)(w, {
                title: `${Q.title} | Sandscape`,
                description: Q.description || Q.title,
              }),
            (0, I.jsx)(`button`, {
              onClick: Qe,
              "aria-label": p(`common.back`, `Back`),
              className: `absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur`,
              children: (0, I.jsx)(u, { className: `h-5 w-5` }),
            }),
            (0, I.jsx)(`div`, {
              ref: Y,
              onScroll: We,
              onTouchStart: Ge,
              onTouchEnd: Ke,
              onTouchCancel: () => {
                Z.current = null;
              },
              className: `h-full w-full touch-pan-x snap-y snap-mandatory overflow-y-scroll overscroll-contain scrollbar-hide`,
              children: $e.map((e, t) =>
                (0, I.jsx)(
                  je,
                  {
                    game: e,
                    viewerPlatform: m,
                    isActive: t === D,
                    shouldMount: Math.abs(t - D) <= De,
                    isLiked: !!L[e._id],
                    likeCount: Se[e._id] ?? e.likes ?? 0,
                    isFollowing: !!B[e.creatorId],
                    canFollow: !!e.creatorId && e.creatorId !== o?.id,
                    isLikeLoading: !!Me[e._id],
                    isFollowLoading: !!Pe[e.creatorId],
                    onToggleLike: () => qe(e),
                    onToggleFollow: () => Je(e),
                    onOpenComments: () => Ye(e),
                    onPlay: () => Ze(e),
                  },
                  e._id,
                ),
              ),
            }),
            (0, I.jsx)(xe, {
              open: Ie,
              onOpenChange: (e) => {
                (Le(e), e || q(``));
              },
              children: (0, I.jsxs)(Ce, {
                side: `bottom`,
                overlayClassName: `z-[70]`,
                className: `z-[71] flex h-[70vh] flex-col p-0`,
                children: [
                  (0, I.jsxs)(we, {
                    className: `border-b border-border px-4 py-3`,
                    children: [
                      (0, I.jsxs)(Te, {
                        children: [
                          p(`game.comments`, `Comments`),
                          Q ? ` (${h(W.length)})` : ``,
                        ],
                      }),
                      (0, I.jsx)(Ee, {
                        className: `sr-only`,
                        children: p(
                          `game.commentsDescription`,
                          `View and add comments for this game`,
                        ),
                      }),
                    ],
                  }),
                  (0, I.jsx)(`div`, {
                    className: `flex-1 space-y-4 overflow-y-auto px-4 py-3`,
                    children: Re
                      ? (0, I.jsx)(`div`, {
                          className: `flex justify-center py-8`,
                          children: (0, I.jsx)(d, {
                            className: `h-5 w-5 animate-spin text-muted-foreground`,
                          }),
                        })
                      : W.length === 0
                        ? (0, I.jsx)(`p`, {
                            className: `py-8 text-center text-sm text-muted-foreground`,
                            children: p(`game.noComments`, `No comments yet`),
                          })
                        : W.map((e) =>
                            (0, I.jsxs)(
                              `div`,
                              {
                                className: `flex gap-3`,
                                children: [
                                  (0, I.jsxs)(se, {
                                    className: `h-8 w-8 shrink-0`,
                                    children: [
                                      (0, I.jsx)(_, { src: e.user.avatar }),
                                      (0, I.jsx)(g, {
                                        children: e.user.name?.[0] ?? `?`,
                                      }),
                                    ],
                                  }),
                                  (0, I.jsxs)(`div`, {
                                    className: `min-w-0 flex-1`,
                                    children: [
                                      (0, I.jsxs)(`div`, {
                                        className: `flex items-baseline gap-2`,
                                        children: [
                                          (0, I.jsx)(`span`, {
                                            className: `text-sm font-medium`,
                                            children: e.user.name,
                                          }),
                                          (0, I.jsx)(`span`, {
                                            className: `text-xs text-muted-foreground`,
                                            children: v(new Date(e.createdAt), {
                                              addSuffix: !0,
                                              locale: ue(ee.language),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, I.jsx)(`p`, {
                                        className: `break-words text-sm text-muted-foreground`,
                                        children: e.text,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e._id,
                            ),
                          ),
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `flex items-end gap-2 border-t border-border p-3`,
                    children: [
                      (0, I.jsx)(be, {
                        value: K,
                        onChange: (e) => q(e.target.value),
                        placeholder: p(`game.addComment`, `Add a comment...`),
                        rows: 1,
                        className: `max-h-24 min-h-[40px] resize-none`,
                      }),
                      (0, I.jsx)(c, {
                        size: `icon`,
                        onClick: Xe,
                        disabled: !K.trim() || J,
                        "aria-label": p(`game.postComment`, `Post comment`),
                        children: J
                          ? (0, I.jsx)(d, { className: `h-4 w-4 animate-spin` })
                          : (0, I.jsx)(ne, { className: `h-4 w-4` }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
}
