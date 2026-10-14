// Game-QkGXRHTR 04 — classname
// Lines 776-1652 of readable/assets/Game-QkGXRHTR.pretty.js (statement-aligned).
function Et() {
  let [e] = a(),
    t = r(),
    n = e.get(`g`),
    i = ye(),
    s = pe() && e.get(`play`) === `1`,
    { user: c, isAuthenticated: u } = me(),
    { t: d, i18n: f } = k(),
    { toast: _ } = o(),
    { trackEvent: v } = de(),
    y = ce(e),
    [b, x] = (0, z.useState)(null),
    [S, ee] = (0, z.useState)([]),
    [te, C] = (0, z.useState)([]),
    [w, T] = (0, z.useState)(!1),
    [A, ae] = (0, z.useState)(!1),
    [N, P] = (0, z.useState)(!1),
    [oe, he] = (0, z.useState)(!1),
    [_e, F] = (0, z.useState)(0),
    [Ce, Pe] = (0, z.useState)(0),
    Le = (0, z.useRef)(null),
    [Re, R] = (0, z.useState)(!1),
    [ze, Be] = (0, z.useState)(!1),
    [He, B] = (0, z.useState)(!0),
    [V, Ue] = (0, z.useState)(null),
    [U, We] = (0, z.useState)(null),
    [W, G] = (0, z.useState)(!1),
    [K, q] = (0, z.useState)(!1),
    [Ge, Ke] = (0, z.useState)(null),
    qe = (0, z.useRef)(new Set()),
    J = (0, z.useRef)(new Set()),
    Je = (0, z.useRef)(new Set()),
    Y = (0, z.useRef)(``),
    Ye = i,
    X =
      !!b &&
      !!b.platformCompat &&
      b.platformCompat !== `both` &&
      b.platformCompat !== Ye &&
      !K,
    Xe = !U && !X;
  ((0, z.useEffect)(() => {
    (async () => {
      if (n) {
        ((Y.current = ``), B(!0), Ue(null), q(!1));
        try {
          let e = await le(n),
            t = e.game._id,
            r = await Ee(t);
          ((Y.current = t), x(e.game), Pe(e.game.views ?? 0), ee(r.comments));
          try {
            let e = await Ae(t);
            F(e);
          } catch (t) {
            (console.error(`Error fetching like count:`, t),
              F(e.game.likes ?? 0));
          }
        } catch (e) {
          (console.error(`Error fetching game:`, e),
            Ue(d(`game.notFound`, `Game not found`)));
        } finally {
          B(!1);
        }
      }
    })();
  }, [n]),
    (0, z.useEffect)(() => {
      let e = b?._id;
      if (!e) return;
      let t = !1;
      return (
        (async () => {
          try {
            let n = await fe(e, i);
            t || C(n.games);
          } catch (e) {
            console.error(`Error fetching related games:`, e);
          }
        })(),
        () => {
          t = !0;
        }
      );
    }, [b?._id, i]),
    (0, z.useEffect)(() => {
      (async () => {
        if (!b || !c) {
          P(!1);
          return;
        }
        try {
          let e = await ke(b._id);
          P(e);
        } catch (e) {
          (console.error(`Error checking like status:`, e), P(!1));
        }
      })();
    }, [b, c]),
    (0, z.useEffect)(() => {
      (async () => {
        if (!b || !c || b.creator._id === c.id) {
          R(!1);
          return;
        }
        try {
          R(await Me(b.creator._id));
        } catch (e) {
          (console.error(`Error checking creator follow status:`, e), R(!1));
        }
      })();
    }, [b, c]),
    (0, z.useEffect)(() => {
      if (!b) return;
      (We(null), G(!1));
      let e = b._id || b.id || ``;
      if ((u || (delete wt[e], Ke(null)), b.isPlaceholder)) {
        (We(u ? `coming-soon` : `register-placeholder`), G(!0));
        return;
      }
      if (u) {
        !X &&
          b.gameContentUrl &&
          !qe.current.has(e) &&
          (qe.current.add(e), Ve(e));
        let t = wt[e];
        if (t) {
          Ke(t);
          return;
        }
        let n = !1;
        return (
          (async () => {
            try {
              let t = await E(),
                r = await fetch(`${D.API_BASE_URL}/api/published/play-token`, {
                  method: `POST`,
                  headers: t,
                  body: JSON.stringify({ game_id: e }),
                });
              if (!r.ok) throw Error(`play-token request failed (${r.status})`);
              let i = (await r.json())?.token;
              i && !n && ((wt[e] = i), Ke(i));
            } catch (e) {
              console.error(`Error fetching play-token:`, e);
            }
          })(),
          () => {
            n = !0;
          }
        );
      }
      if (!gt(e) && !_t()) {
        (We(`register-limit`), G(!0));
        return;
      }
      X || vt(e);
    }, [b, u, X]),
    (0, z.useEffect)(() => {
      if (!b || b.isPlaceholder || !b.gameContentUrl || X) return;
      let e = b._id || b.id || ``;
      !e ||
        J.current.has(e) ||
        (!u && !gt(e) && !_t()) ||
        (J.current.add(e),
        Ct(e, St())
          .then((t) => {
            Y.current === e && Pe(t.view_count);
          })
          .catch((t) => {
            (J.current.delete(e),
              console.warn(`Unable to record game view:`, t));
          }));
    }, [b, u, X]));
  let Ze = async () => {
      if (!(!b || oe)) {
        if (!u) {
          t(
            I(
              `${window.location.pathname}${window.location.search}`,
              `play_gate`,
            ),
          );
          return;
        }
        he(!0);
        try {
          N
            ? (await De(b._id), P(!1), F((e) => Math.max(0, e - 1)))
            : (await Oe(b._id), P(!0), F((e) => e + 1));
        } catch (e) {
          (console.error(`Error updating like status:`, e),
            _({
              title: d(
                `game.toast.likeFailed`,
                `Failed to update like status.`,
              ),
              variant: `destructive`,
            }));
        } finally {
          he(!1);
        }
      }
    },
    Qe = () => {
      if (!b) return;
      let e = `/create?remix=${encodeURIComponent(b._id)}`;
      t(u ? e : I(e, `create_gate`));
    },
    Z = () => {
      if (!b || b.isPlaceholder || !b.gameContentUrl || !Xe) return;
      let e = b._id || b.id || ``;
      !e ||
        Je.current.has(e) ||
        (!u && !gt(e) && !_t()) ||
        (Je.current.add(e),
        v(O.events.GAME_PLAY, {
          content_type: `game`,
          content_id: `game_${e}`,
          game_id: e,
          game_title: b.title,
          game_category: b.category,
          game_source: y,
          is_authenticated: u,
        }));
    },
    Q = (e) => {
      (v(O.events.SELECT_CONTENT, {
        content_type: `game`,
        content_id: `game_${e._id}`,
        game_id: e._id,
        game_title: e.title,
        game_source: `related_games`,
        source_game_id: b?._id,
      }),
        t(ue(e, `related_games`)));
    };
  return (
    (0, z.useEffect)(() => {
      let e = () => T(!!document.fullscreenElement);
      return (
        document.addEventListener(`fullscreenchange`, e),
        () => document.removeEventListener(`fullscreenchange`, e)
      );
    }, []),
    (0, z.useEffect)(() => {
      if (s)
        return () => {
          document.fullscreenElement &&
            document.exitFullscreen?.().catch(() => {});
        };
    }, [s]),
    n
      ? He
        ? (0, H.jsx)(`div`, {
            children: (0, H.jsxs)(`section`, {
              className: `mb-8`,
              children: [
                (0, H.jsx)(L, { className: `h-[88vh] w-full rounded-none` }),
                (0, H.jsx)(`div`, {
                  className: `border-t border-b bg-background/95`,
                  children: (0, H.jsxs)(`div`, {
                    className: `px-4 sm:px-6 md:px-8 py-4`,
                    children: [
                      (0, H.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-4`,
                        children: [
                          (0, H.jsx)(`div`, {
                            className: `flex items-center gap-3`,
                            children: (0, H.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, H.jsx)(L, { className: `h-7 w-48` }),
                                (0, H.jsxs)(`div`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    (0, H.jsx)(L, {
                                      className: `h-6 w-6 rounded-full`,
                                    }),
                                    (0, H.jsx)(L, { className: `h-4 w-28` }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, H.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, H.jsx)(L, {
                                className: `h-10 w-16 rounded-md`,
                              }),
                              (0, H.jsx)(L, {
                                className: `h-10 w-10 rounded-md`,
                              }),
                              (0, H.jsx)(L, {
                                className: `h-10 w-24 rounded-md`,
                              }),
                              (0, H.jsx)(L, {
                                className: `h-10 w-10 rounded-md`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, H.jsx)(L, { className: `mt-3 h-4 w-3/4` }),
                    ],
                  }),
                }),
              ],
            }),
          })
        : V || !b
          ? (0, H.jsxs)(`div`, {
              className: `min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center`,
              children: [
                (0, H.jsx)(`div`, {
                  className: `flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground`,
                  children: (0, H.jsx)(ve, { className: `h-8 w-8` }),
                }),
                (0, H.jsxs)(`div`, {
                  className: `space-y-1`,
                  children: [
                    (0, H.jsx)(`h1`, {
                      className: `text-xl font-semibold`,
                      children: V || d(`game.notFound`, `Game not found`),
                    }),
                    (0, H.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: d(
                        `game.removedOrIncorrect`,
                        `This game may have been removed or the link is incorrect.`,
                      ),
                    }),
                  ],
                }),
                (0, H.jsx)(p, {
                  onClick: () => t(`/`),
                  children: d(`game.backToGames`, `Back to games`),
                }),
              ],
            })
          : s
            ? (0, H.jsxs)(H.Fragment, {
                children: [
                  U &&
                    (0, H.jsx)(dt, {
                      open: W,
                      mode: U,
                      onClose: () => {
                        (G(!1), t(`/`));
                      },
                    }),
                  (0, H.jsxs)(`div`, {
                    className: `fixed inset-0 z-[70] bg-black`,
                    children: [
                      U
                        ? (0, H.jsx)(`div`, {
                            className: `flex h-full w-full items-center justify-center text-muted-foreground`,
                            children: (0, H.jsx)(ve, {
                              className: `h-10 w-10 opacity-40`,
                            }),
                          })
                        : X
                          ? (0, H.jsx)(Dt, {
                              builtFor: b.platformCompat,
                              onPlayAnyway: () => q(!0),
                            })
                          : b.gameContentUrl
                            ? (0, H.jsx)(`iframe`, {
                                ref: Le,
                                src: Tt(b.gameContentUrl, b.publishedAt, Ge),
                                className: `h-full w-full border-0`,
                                title: b.title || `Game`,
                                allow: `fullscreen`,
                                sandbox: `allow-scripts allow-same-origin allow-forms allow-pointer-lock`,
                                onLoad: Z,
                              })
                            : (0, H.jsx)(`div`, {
                                className: `flex h-full w-full items-center justify-center px-6 text-center text-muted-foreground`,
                                children: (0, H.jsx)(`p`, {
                                  children: d(
                                    `game.notAvailable`,
                                    `Game not available — no published build found.`,
                                  ),
                                }),
                              }),
                      !U &&
                        (0, H.jsx)(`button`, {
                          onClick: () => {
                            (document.fullscreenElement &&
                              document.exitFullscreen?.().catch(() => {}),
                              window.history.length > 1
                                ? t(-1)
                                : t(b ? ue(b) : `/`));
                          },
                          "aria-label": d(`game.exitGame`, `Exit game`),
                          className: `absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur`,
                          children: (0, H.jsx)(we, { className: `h-5 w-5` }),
                        }),
                    ],
                  }),
                ],
              })
            : (0, H.jsxs)(H.Fragment, {
                children: [
                  b &&
                    (0, H.jsx)(xe, {
                      title: `${b.title || `Play Game`} | Sandscape`,
                      description: `Play ${b.title || `this game`} created with Sandscape AI. ${b.description || d(`game.seoDescriptionFallback`, `Experience AI-generated gameplay, art, and mechanics.`)}`,
                      keywords: `${b.title}, AI game, play online games, ${b.category || `game created with AI`}, no-code game`,
                      ogType: `game`,
                      ogImage:
                        b.thumbnail ||
                        `https://sandscape.app/assets/videos/Sandscape_trailer_thumbnail.jpg`,
                      noindex: !0,
                    }),
                  U &&
                    (0, H.jsx)(dt, {
                      open: W,
                      mode: U,
                      onClose: () => {
                        (G(!1), t(`/`));
                      },
                    }),
                  (0, H.jsxs)(`div`, {
                    children: [
                      (0, H.jsxs)(`section`, {
                        className: `mb-8`,
                        children: [
                          (0, H.jsx)(`div`, {
                            className: `h-[88vh] relative bg-black`,
                            children: U
                              ? (0, H.jsx)(`div`, {
                                  className: `w-full h-full flex items-center justify-center text-muted-foreground`,
                                  children: (0, H.jsx)(ve, {
                                    className: `h-10 w-10 opacity-40`,
                                  }),
                                })
                              : X
                                ? (0, H.jsx)(Dt, {
                                    builtFor: b.platformCompat,
                                    onPlayAnyway: () => q(!0),
                                  })
                                : b.gameContentUrl
                                  ? (0, H.jsx)(`iframe`, {
                                      ref: Le,
                                      src: Tt(
                                        b.gameContentUrl,
                                        b.publishedAt,
                                        Ge,
                                      ),
                                      className: `w-full h-full border-0`,
                                      title: `Game`,
                                      allow: `fullscreen`,
                                      sandbox: `allow-scripts allow-same-origin allow-forms allow-pointer-lock`,
                                      onLoad: Z,
                                    })
                                  : (0, H.jsx)(`div`, {
                                      className: `w-full h-full flex items-center justify-center text-muted-foreground`,
                                      children: (0, H.jsx)(`p`, {
                                        children: d(
                                          `game.notAvailable`,
                                          `Game not available — no published build found.`,
                                        ),
                                      }),
                                    }),
                          }),
                          (0, H.jsx)(`div`, {
                            className: `bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-b`,
                            children: (0, H.jsxs)(`div`, {
                              className: `px-4 sm:px-6 md:px-8 py-4`,
                              children: [
                                (0, H.jsxs)(`div`, {
                                  className: `flex items-center justify-between gap-4`,
                                  children: [
                                    (0, H.jsx)(`div`, {
                                      className: `flex items-center gap-4`,
                                      children: (0, H.jsxs)(`div`, {
                                        children: [
                                          (0, H.jsx)(`h1`, {
                                            className: `text-2xl font-bold`,
                                            children: b.title,
                                          }),
                                          (0, H.jsxs)(`div`, {
                                            className: `flex items-center gap-2 mt-1`,
                                            children: [
                                              (0, H.jsxs)(M, {
                                                className: `h-6 w-6`,
                                                children: [
                                                  (0, H.jsx)(j, {
                                                    src: b.creator.avatar,
                                                  }),
                                                  (0, H.jsx)(ie, {
                                                    children: b.creator.name[0],
                                                  }),
                                                ],
                                              }),
                                              (0, H.jsx)(`span`, {
                                                className: `text-sm text-muted-foreground`,
                                                children: b.creator.name,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, H.jsxs)(`div`, {
                                      className: `flex items-center gap-2`,
                                      children: [
                                        (0, H.jsxs)(p, {
                                          onClick: Qe,
                                          className: `bg-primary hover:bg-primary/90 text-white`,
                                          children: [
                                            (0, H.jsx)(h, {
                                              className: `mr-2 h-4 w-4`,
                                            }),
                                            d(`game.remix`, `Remix`),
                                          ],
                                        }),
                                        (0, H.jsxs)(p, {
                                          variant: N ? `default` : `outline`,
                                          size: `icon`,
                                          onClick: Ze,
                                          disabled: oe,
                                          "aria-label": N
                                            ? d(`game.unlike`, `Unlike`)
                                            : d(`game.like`, `Like`),
                                          children: [
                                            (0, H.jsx)(Se, {
                                              className: l(
                                                `h-4 w-4`,
                                                N
                                                  ? `fill-red-500 text-red-500`
                                                  : ``,
                                              ),
                                            }),
                                            (0, H.jsx)(`span`, {
                                              className: `ml-1 text-sm`,
                                              children: _e,
                                            }),
                                          ],
                                        }),
                                        (0, H.jsx)(ne, {
                                          url: `${window.location.origin}${ue(b)}`,
                                          title: `Play ${b.title} on Sandscape`,
                                          text: `Check out ${b.title} - ${b.description || d(`game.shareTextFallback`, `An awesome game created on Sandscape!`)}`,
                                        }),
                                        b.creator._id !== c?.id &&
                                          (0, H.jsxs)(p, {
                                            variant: Re
                                              ? `outline`
                                              : `secondary`,
                                            onClick: async () => {
                                              if (!(!b || ze)) {
                                                if (!u) {
                                                  t(
                                                    I(
                                                      `${window.location.pathname}${window.location.search}`,
                                                      `play_gate`,
                                                    ),
                                                  );
                                                  return;
                                                }
                                                Be(!0);
                                                try {
                                                  Re
                                                    ? (await je(b.creator._id),
                                                      R(!1))
                                                    : (await Ne(b.creator._id),
                                                      R(!0));
                                                } catch (e) {
                                                  (console.error(
                                                    `Error following/unfollowing creator:`,
                                                    e,
                                                  ),
                                                    _({
                                                      title: d(
                                                        `game.toast.followFailed`,
                                                        `Failed to update follow status`,
                                                      ),
                                                      variant: `destructive`,
                                                    }));
                                                } finally {
                                                  Be(!1);
                                                }
                                              }
                                            },
                                            disabled: ze,
                                            children: [
                                              (0, H.jsx)(ge, {
                                                className: `mr-2 h-4 w-4`,
                                              }),
                                              Re
                                                ? d(`game.unfollow`, `Unfollow`)
                                                : d(`game.follow`, `Follow`),
                                            ],
                                          }),
                                        (0, H.jsx)(p, {
                                          variant: `outline`,
                                          size: `icon`,
                                          onClick: () => {
                                            let e = Le.current;
                                            e &&
                                              (document.fullscreenElement
                                                ? document.exitFullscreen?.()
                                                : e.requestFullscreen?.());
                                          },
                                          title: w
                                            ? d(
                                                `game.exitFullscreen`,
                                                `Exit fullscreen`,
                                              )
                                            : d(
                                                `game.fullscreen`,
                                                `Fullscreen`,
                                              ),
                                          "aria-label": w
                                            ? d(
                                                `game.exitFullscreen`,
                                                `Exit fullscreen`,
                                              )
                                            : d(
                                                `game.fullscreen`,
                                                `Fullscreen`,
                                              ),
                                          children: w
                                            ? (0, H.jsx)(g, {
                                                className: `h-4 w-4`,
                                              })
                                            : (0, H.jsx)(m, {
                                                className: `h-4 w-4`,
                                              }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                b.description &&
                                  (0, H.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => ae((e) => !e),
                                    className: `group mt-3 block w-full text-left`,
                                    "aria-expanded": A,
                                    children: [
                                      (0, H.jsxs)(`div`, {
                                        className: `relative`,
                                        children: [
                                          (0, H.jsx)(`p`, {
                                            className: l(
                                              `text-sm text-muted-foreground whitespace-pre-line`,
                                              A ? `` : `line-clamp-1`,
                                            ),
                                            children: b.description,
                                          }),
                                          !A &&
                                            (0, H.jsx)(`span`, {
                                              className: `pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent`,
                                            }),
                                        ],
                                      }),
                                      (0, H.jsx)(`span`, {
                                        className: `text-xs text-muted-foreground group-hover:text-foreground group-hover:underline`,
                                        children: A
                                          ? d(`game.showLess`, `Show less`)
                                          : d(`game.showMore`, `Show more`),
                                      }),
                                    ],
                                  }),
                                A &&
                                  (0, H.jsxs)(`div`, {
                                    className: `mt-3 pt-3 border-t flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground`,
                                    children: [
                                      b.category &&
                                        (0, H.jsx)(`span`, {
                                          className: `capitalize`,
                                          children: b.category,
                                        }),
                                      (0, H.jsxs)(`span`, {
                                        className: `flex items-center gap-1`,
                                        children: [
                                          (0, H.jsx)(be, {
                                            className: `h-3.5 w-3.5`,
                                          }),
                                          d(`game.views`, { count: Ce }),
                                        ],
                                      }),
                                      b.publishedAt &&
                                        (0, H.jsxs)(`span`, {
                                          children: [
                                            d(
                                              `game.publishedPrefix`,
                                              `Published `,
                                            ),
                                            se(new Date(b.publishedAt), {
                                              addSuffix: !0,
                                              locale: Te(f.language),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, H.jsx)(`section`, {
                        className: `pb-2`,
                        children: (0, H.jsx)(`div`, {
                          className: `px-4 sm:px-6 md:px-8`,
                          children: (0, H.jsx)(ct, {
                            gameId: b._id || b.id || ``,
                            currentUserId: c?.id,
                          }),
                        }),
                      }),
                      (0, H.jsx)(`section`, {
                        className: `py-8`,
                        children: (0, H.jsx)(`div`, {
                          className: `px-4 sm:px-6 md:px-8`,
                          children: (0, H.jsxs)(`div`, {
                            className: `grid grid-cols-1 md:grid-cols-3 gap-6`,
                            children: [
                              (0, H.jsxs)(`div`, {
                                className: `md:col-span-2 space-y-4`,
                                children: [
                                  (0, H.jsx)(`h2`, {
                                    className: `text-xl font-semibold`,
                                    children: d(`game.comments`, `Comments`),
                                  }),
                                  (0, H.jsx)(Ot, {
                                    gameId: b._id,
                                    onCommentAdded: (e) => ee((t) => [e, ...t]),
                                  }),
                                  (0, H.jsx)(`div`, {
                                    className: `space-y-4`,
                                    children:
                                      S.length === 0
                                        ? (0, H.jsx)(`p`, {
                                            className: `py-4 text-sm text-muted-foreground`,
                                            children: d(
                                              `game.beFirstToComment`,
                                              `Be the first to comment.`,
                                            ),
                                          })
                                        : S.map((e) =>
                                            (0, H.jsx)(
                                              kt,
                                              {
                                                comment: e,
                                                gameId: b._id,
                                                currentUserId: c?.id,
                                                isAuthenticated: u,
                                                onDeleted: (e) =>
                                                  ee((t) =>
                                                    t.filter(
                                                      (t) => t._id !== e,
                                                    ),
                                                  ),
                                              },
                                              e._id,
                                            ),
                                          ),
                                  }),
                                ],
                              }),
                              (0, H.jsxs)(`div`, {
                                className: `space-y-4`,
                                children: [
                                  (0, H.jsx)(`h2`, {
                                    className: `text-xl font-semibold`,
                                    children: d(
                                      `game.relatedGames`,
                                      `Related Games`,
                                    ),
                                  }),
                                  (0, H.jsx)(`div`, {
                                    className: `space-y-3`,
                                    children: te.map((e) =>
                                      (0, H.jsx)(
                                        Ie,
                                        {
                                          role: `button`,
                                          tabIndex: 0,
                                          onClick: () => Q(e),
                                          onKeyDown: (t) => {
                                            (t.key === `Enter` ||
                                              t.key === ` `) &&
                                              (t.preventDefault(), Q(e));
                                          },
                                          className: `cursor-pointer transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
                                          children: (0, H.jsx)(Fe, {
                                            className: `p-3`,
                                            children: (0, H.jsxs)(`div`, {
                                              className: `flex gap-3`,
                                              children: [
                                                re(e.thumbnail)
                                                  ? (0, H.jsx)(`img`, {
                                                      src: re(e.thumbnail),
                                                      alt: e.title,
                                                      className: `w-24 h-16 object-cover rounded-md bg-muted shrink-0`,
                                                      loading: `lazy`,
                                                    })
                                                  : (0, H.jsx)(`div`, {
                                                      className: `w-24 h-16 rounded-md bg-muted shrink-0`,
                                                    }),
                                                (0, H.jsxs)(`div`, {
                                                  children: [
                                                    (0, H.jsx)(`h3`, {
                                                      className: `font-medium line-clamp-1`,
                                                      children: e.title,
                                                    }),
                                                    (0, H.jsxs)(`div`, {
                                                      className: `flex items-center gap-2 mt-1`,
                                                      children: [
                                                        (0, H.jsxs)(M, {
                                                          className: `h-4 w-4`,
                                                          children: [
                                                            (0, H.jsx)(j, {
                                                              src: e.creator
                                                                .avatar,
                                                            }),
                                                            (0, H.jsx)(ie, {
                                                              children:
                                                                e.creator
                                                                  .name[0],
                                                            }),
                                                          ],
                                                        }),
                                                        (0, H.jsx)(`span`, {
                                                          className: `text-xs text-muted-foreground`,
                                                          children:
                                                            e.creator.name,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, H.jsxs)(`div`, {
                                                      className: `flex items-center gap-1 mt-1 text-xs text-muted-foreground`,
                                                      children: [
                                                        (0, H.jsx)(be, {
                                                          className: `h-3 w-3`,
                                                        }),
                                                        d(`game.views`, {
                                                          count: e.views ?? 0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        },
                                        e._id,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
      : (0, H.jsx)(`div`, {
          className: `min-h-screen flex items-center justify-center text-muted-foreground`,
          children: (0, H.jsx)(`p`, {
            children: d(
              `game.noGameSpecified`,
              `No game specified. Use a link like /play?g=CODE`,
            ),
          }),
        })
  );
}
