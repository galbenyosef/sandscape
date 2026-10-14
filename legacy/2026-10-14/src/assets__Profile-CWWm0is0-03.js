// assets__Profile-CWWm0is0 03 — classname
// Lines 825-1158 of readable/assets__Profile-CWWm0is0.pretty.js (statement-aligned).
function I(e) {
  if (!e) return null;
  let t = new Date(e);
  return Number.isNaN(t.getTime())
    ? null
    : t.toLocaleDateString(void 0, {
        year: `numeric`,
        month: `short`,
        day: `numeric`,
      });
}
function L(e) {
  if (e instanceof Error) return e.message;
  try {
    return JSON.stringify(e) || String(e);
  } catch {
    return String(e);
  }
}
function be({
  projects: e,
  loading: t,
  error: n,
  covers: r,
  brokenCovers: i,
  emptyKind: a,
  onOpen: o,
  onDelete: s,
  onCoverError: u,
  onRetry: f,
  onCreate: p,
}) {
  let { t: m } = d();
  if (t) return (0, P.jsx)(R, {});
  if (n)
    return (0, P.jsxs)(`div`, {
      className: `rounded-lg border border-dashed px-6 py-12 text-center`,
      children: [
        (0, P.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: m(`profile.projectsLoadFailed`, `Could not load projects`),
        }),
        (0, P.jsxs)(c, {
          variant: `outline`,
          size: `sm`,
          className: `mt-4`,
          onClick: f,
          children: [
            (0, P.jsx)(l, { className: `mr-2 h-4 w-4` }),
            m(`general.tryAgain`, `Try again`),
          ],
        }),
      ],
    });
  if (e.length === 0) {
    let e = a === `shared`;
    return (0, P.jsxs)(`div`, {
      className: `rounded-lg border border-dashed px-6 py-12 text-center`,
      children: [
        e
          ? (0, P.jsx)(g, {
              className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
            })
          : (0, P.jsx)(S, {
              className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
            }),
        (0, P.jsx)(`p`, {
          className: `font-medium`,
          children: e
            ? m(`profile.noSharedProjects`, `No shared projects yet`)
            : m(`profile.noProjects`, `No projects yet`),
        }),
        (0, P.jsx)(`p`, {
          className: `mx-auto mt-1 max-w-md text-sm text-muted-foreground`,
          children: e
            ? m(
                `profile.noSharedProjectsDescription`,
                `Projects appear here after you accept a collaboration invite.`,
              )
            : m(
                `profile.noProjectsDescription`,
                `Start a project and its latest cover art will appear here.`,
              ),
        }),
        !e &&
          p &&
          (0, P.jsx)(c, {
            className: `mt-5`,
            onClick: p,
            children: m(`profile.createFirstGame`, `Create Your First Game`),
          }),
      ],
    });
  }
  return (0, P.jsx)(`div`, {
    className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
    children: e.map((e) => {
      let t = i.has(e.session_id) ? void 0 : e.thumbnail_url || r[e.session_id],
        n = I(e.updated_at);
      return (0, P.jsxs)(
        k,
        {
          className: `group relative overflow-hidden transition-shadow hover:shadow-lg`,
          children: [
            (0, P.jsxs)(`button`, {
              type: `button`,
              className: `block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
              onClick: () => o(e.session_id),
              children: [
                (0, P.jsxs)(`div`, {
                  className: `relative aspect-video overflow-hidden bg-muted`,
                  children: [
                    t
                      ? (0, P.jsx)(`img`, {
                          src: t,
                          alt: m(
                            `profile.projectCoverAlt`,
                            `{{name}} cover art`,
                            { name: e.name },
                          ),
                          className: `h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]`,
                          onError: () => u(e.session_id),
                        })
                      : (0, P.jsx)(`div`, {
                          className: `flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50`,
                          children: (0, P.jsx)(S, {
                            className: `h-14 w-14 text-muted-foreground/60`,
                          }),
                        }),
                    (0, P.jsx)(`div`, {
                      className: `absolute bottom-2 left-2`,
                      children: (0, P.jsx)(`span`, {
                        className: `rounded px-2 py-1 text-xs font-medium ${e.status === `completed` ? `bg-green-600/90 text-white` : e.status === `archived` ? `bg-gray-600/90 text-white` : `bg-blue-600/90 text-white`}`,
                        children:
                          e.status === `in_progress`
                            ? m(`profile.statusInProgress`, `In Progress`)
                            : e.status === `completed`
                              ? m(`profile.statusCompleted`, `Completed`)
                              : m(`profile.statusArchived`, `Archived`),
                      }),
                    }),
                  ],
                }),
                (0, P.jsxs)(T, {
                  className: `pb-2`,
                  children: [
                    (0, P.jsx)(D, {
                      className: `truncate text-lg`,
                      children: e.name,
                    }),
                    e.description &&
                      (0, P.jsx)(O, {
                        className: `line-clamp-2`,
                        children: e.description,
                      }),
                  ],
                }),
                (0, P.jsx)(E, {
                  className: `pt-0`,
                  children:
                    n &&
                    (0, P.jsxs)(`div`, {
                      className: `flex items-center text-sm text-muted-foreground`,
                      children: [
                        (0, P.jsx)(y, { className: `mr-1 h-4 w-4` }),
                        n,
                      ],
                    }),
                }),
              ],
            }),
            s &&
              (0, P.jsx)(c, {
                variant: `destructive`,
                size: `icon`,
                className: `absolute right-2 top-2 h-8 w-8 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100`,
                "aria-label": m(`profile.deleteProject`, `Delete project`),
                onClick: (t) => s(e.id, t),
                children: (0, P.jsx)(_, { className: `h-4 w-4` }),
              }),
          ],
        },
        e.id,
      );
    }),
  });
}
function xe({ games: e, loading: t, error: n, onOpen: r, onRetry: i }) {
  let { t: a } = d();
  return t
    ? (0, P.jsx)(R, {})
    : n
      ? (0, P.jsxs)(`div`, {
          className: `rounded-lg border border-dashed px-6 py-12 text-center`,
          children: [
            (0, P.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: a(
                `profile.gamesLoadFailed`,
                `Could not load published games`,
              ),
            }),
            (0, P.jsxs)(c, {
              variant: `outline`,
              size: `sm`,
              className: `mt-4`,
              onClick: i,
              children: [
                (0, P.jsx)(l, { className: `mr-2 h-4 w-4` }),
                a(`general.tryAgain`, `Try again`),
              ],
            }),
          ],
        })
      : e.length === 0
        ? (0, P.jsxs)(`div`, {
            className: `rounded-lg border border-dashed px-6 py-12 text-center`,
            children: [
              (0, P.jsx)(v, {
                className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
              }),
              (0, P.jsx)(`p`, {
                className: `font-medium`,
                children: a(
                  `profile.noPublishedGames`,
                  `No published games yet`,
                ),
              }),
            ],
          })
        : (0, P.jsx)(`div`, {
            className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
            children: e.map((e) => {
              let t = I(e.publishedAt);
              return (0, P.jsx)(
                `button`,
                {
                  type: `button`,
                  className: `text-left`,
                  onClick: () => r(e),
                  children: (0, P.jsxs)(k, {
                    className: `h-full overflow-hidden transition-shadow hover:shadow-lg`,
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `aspect-video overflow-hidden bg-muted`,
                        children: e.thumbnail
                          ? (0, P.jsx)(`img`, {
                              src: e.thumbnail,
                              alt: a(
                                `profile.gameCoverAlt`,
                                `{{name}} cover art`,
                                { name: e.title },
                              ),
                              className: `h-full w-full object-cover`,
                            })
                          : (0, P.jsx)(`div`, {
                              className: `flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50`,
                              children: (0, P.jsx)(v, {
                                className: `h-14 w-14 text-muted-foreground/60`,
                              }),
                            }),
                      }),
                      (0, P.jsxs)(T, {
                        className: `pb-2`,
                        children: [
                          (0, P.jsx)(D, {
                            className: `truncate text-lg`,
                            children: e.title,
                          }),
                          e.description &&
                            (0, P.jsx)(O, {
                              className: `line-clamp-2`,
                              children: e.description,
                            }),
                        ],
                      }),
                      t &&
                        (0, P.jsx)(E, {
                          className: `pt-0 text-sm text-muted-foreground`,
                          children: a(
                            `profile.publishedOn`,
                            `Published {{date}}`,
                            { date: t },
                          ),
                        }),
                    ],
                  }),
                },
                e.id,
              );
            }),
          });
}
function R() {
  return (0, P.jsx)(`div`, {
    className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
    "aria-hidden": `true`,
    children: [0, 1, 2].map((e) =>
      (0, P.jsxs)(
        k,
        {
          className: `overflow-hidden`,
          children: [
            (0, P.jsx)(w, { className: `aspect-video w-full rounded-none` }),
            (0, P.jsxs)(T, {
              children: [
                (0, P.jsx)(w, { className: `h-5 w-2/3` }),
                (0, P.jsx)(w, { className: `h-4 w-full` }),
              ],
            }),
          ],
        },
        e,
      ),
    ),
  });
}
function z(e) {
  switch (e) {
    case `like`:
      return (0, P.jsx)(b, { className: `h-4 w-4 text-red-500` });
    case `comment`:
      return (0, P.jsx)(x, { className: `h-4 w-4 text-green-500` });
    case `follow`:
      return (0, P.jsx)(g, { className: `h-4 w-4 text-blue-500` });
    case `game_created`:
      return (0, P.jsx)(v, { className: `h-4 w-4 text-purple-500` });
    default:
      return (0, P.jsx)(b, { className: `h-4 w-4` });
  }
}
function B(e) {
  return p(e) || void 0;
}
