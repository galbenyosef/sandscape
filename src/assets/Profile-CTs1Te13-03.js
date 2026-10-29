// Profile-CTs1Te13 03 — classname
// Lines 865-1214 of readable/assets/Profile-CTs1Te13.pretty.js (statement-aligned).
function L(e) {
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
function R(e) {
  if (e instanceof Error) return e.message;
  try {
    return JSON.stringify(e) || String(e);
  } catch {
    return String(e);
  }
}
function we({
  projects: e,
  loading: t,
  error: n,
  covers: r,
  brokenCovers: i,
  emptyKind: a,
  onOpen: o,
  onDelete: s,
  onDuplicate: c,
  duplicatingSessionId: f = null,
  onCoverError: m,
  onRetry: h,
  onCreate: g,
}) {
  let { t: _ } = p();
  if (t) return (0, F.jsx)(z, {});
  if (n)
    return (0, F.jsxs)(`div`, {
      className: `rounded-lg border border-dashed px-6 py-12 text-center`,
      children: [
        (0, F.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: _(`profile.projectsLoadFailed`, `Could not load projects`),
        }),
        (0, F.jsxs)(l, {
          variant: `outline`,
          size: `sm`,
          className: `mt-4`,
          onClick: h,
          children: [
            (0, F.jsx)(d, { className: `mr-2 h-4 w-4` }),
            _(`general.tryAgain`, `Try again`),
          ],
        }),
      ],
    });
  if (e.length === 0) {
    let e = a === `shared`;
    return (0, F.jsxs)(`div`, {
      className: `rounded-lg border border-dashed px-6 py-12 text-center`,
      children: [
        e
          ? (0, F.jsx)(v, {
              className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
            })
          : (0, F.jsx)(C, {
              className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
            }),
        (0, F.jsx)(`p`, {
          className: `font-medium`,
          children: e
            ? _(`profile.noSharedProjects`, `No shared projects yet`)
            : _(`profile.noProjects`, `No projects yet`),
        }),
        (0, F.jsx)(`p`, {
          className: `mx-auto mt-1 max-w-md text-sm text-muted-foreground`,
          children: e
            ? _(
                `profile.noSharedProjectsDescription`,
                `Projects appear here after you accept a collaboration invite.`,
              )
            : _(
                `profile.noProjectsDescription`,
                `Start a project and its latest cover art will appear here.`,
              ),
        }),
        !e &&
          g &&
          (0, F.jsx)(l, {
            className: `mt-5`,
            onClick: g,
            children: _(`profile.createFirstGame`, `Create Your First Game`),
          }),
      ],
    });
  }
  return (0, F.jsx)(`div`, {
    className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
    children: e.map((e) => {
      let t = i.has(e.session_id) ? void 0 : e.thumbnail_url || r[e.session_id],
        n = L(e.updated_at);
      return (0, F.jsxs)(
        A,
        {
          className: `group relative overflow-hidden transition-shadow hover:shadow-lg`,
          children: [
            (0, F.jsxs)(`button`, {
              type: `button`,
              className: `block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
              onClick: () => o(e.session_id),
              children: [
                (0, F.jsxs)(`div`, {
                  className: `relative aspect-video overflow-hidden bg-muted`,
                  children: [
                    t
                      ? (0, F.jsx)(`img`, {
                          src: t,
                          alt: _(
                            `profile.projectCoverAlt`,
                            `{{name}} cover art`,
                            { name: e.name },
                          ),
                          className: `h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]`,
                          onError: () => m(e.session_id),
                        })
                      : (0, F.jsx)(`div`, {
                          className: `flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50`,
                          children: (0, F.jsx)(C, {
                            className: `h-14 w-14 text-muted-foreground/60`,
                          }),
                        }),
                    (0, F.jsx)(`div`, {
                      className: `absolute bottom-2 left-2`,
                      children: (0, F.jsx)(`span`, {
                        className: `rounded px-2 py-1 text-xs font-medium ${e.status === `completed` ? `bg-green-600/90 text-white` : e.status === `archived` ? `bg-gray-600/90 text-white` : `bg-blue-600/90 text-white`}`,
                        children:
                          e.status === `in_progress`
                            ? _(`profile.statusInProgress`, `In Progress`)
                            : e.status === `completed`
                              ? _(`profile.statusCompleted`, `Completed`)
                              : _(`profile.statusArchived`, `Archived`),
                      }),
                    }),
                  ],
                }),
                (0, F.jsxs)(E, {
                  className: `pb-2`,
                  children: [
                    (0, F.jsx)(O, {
                      className: `truncate text-lg`,
                      children: e.name,
                    }),
                    e.description &&
                      (0, F.jsx)(k, {
                        className: `line-clamp-2`,
                        children: e.description,
                      }),
                  ],
                }),
                (0, F.jsx)(D, {
                  className: `pt-0`,
                  children:
                    n &&
                    (0, F.jsxs)(`div`, {
                      className: `flex items-center text-sm text-muted-foreground`,
                      children: [
                        (0, F.jsx)(x, { className: `mr-1 h-4 w-4` }),
                        n,
                      ],
                    }),
                }),
              ],
            }),
            c &&
              (0, F.jsx)(l, {
                variant: `secondary`,
                size: `icon`,
                className: `absolute top-2 h-8 w-8 transition-opacity ${s ? `right-12` : `right-2`} ${f === e.session_id ? `opacity-100` : `opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100`}`,
                "aria-label":
                  f === e.session_id
                    ? _(`profile.duplicatingProject`, `Duplicating project`)
                    : _(`profile.duplicateProject`, `Duplicate project`),
                title: _(`profile.duplicateProject`, `Duplicate project`),
                disabled: f !== null,
                onClick: (t) => c(e.session_id, t),
                children:
                  f === e.session_id
                    ? (0, F.jsx)(u, { className: `h-4 w-4 animate-spin` })
                    : (0, F.jsx)(ee, { className: `h-4 w-4` }),
              }),
            s &&
              (0, F.jsx)(l, {
                variant: `destructive`,
                size: `icon`,
                className: `absolute right-2 top-2 h-8 w-8 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100`,
                "aria-label": _(`profile.deleteProject`, `Delete project`),
                onClick: (t) => s(e.id, t),
                children: (0, F.jsx)(y, { className: `h-4 w-4` }),
              }),
          ],
        },
        e.id,
      );
    }),
  });
}
function Te({ games: e, loading: t, error: n, onOpen: r, onRetry: i }) {
  let { t: a } = p();
  return t
    ? (0, F.jsx)(z, {})
    : n
      ? (0, F.jsxs)(`div`, {
          className: `rounded-lg border border-dashed px-6 py-12 text-center`,
          children: [
            (0, F.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: a(
                `profile.gamesLoadFailed`,
                `Could not load published games`,
              ),
            }),
            (0, F.jsxs)(l, {
              variant: `outline`,
              size: `sm`,
              className: `mt-4`,
              onClick: i,
              children: [
                (0, F.jsx)(d, { className: `mr-2 h-4 w-4` }),
                a(`general.tryAgain`, `Try again`),
              ],
            }),
          ],
        })
      : e.length === 0
        ? (0, F.jsxs)(`div`, {
            className: `rounded-lg border border-dashed px-6 py-12 text-center`,
            children: [
              (0, F.jsx)(b, {
                className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
              }),
              (0, F.jsx)(`p`, {
                className: `font-medium`,
                children: a(
                  `profile.noPublishedGames`,
                  `No published games yet`,
                ),
              }),
            ],
          })
        : (0, F.jsx)(`div`, {
            className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
            children: e.map((e) => {
              let t = L(e.publishedAt);
              return (0, F.jsx)(
                `button`,
                {
                  type: `button`,
                  className: `text-left`,
                  onClick: () => r(e),
                  children: (0, F.jsxs)(A, {
                    className: `h-full overflow-hidden transition-shadow hover:shadow-lg`,
                    children: [
                      (0, F.jsx)(`div`, {
                        className: `aspect-video overflow-hidden bg-muted`,
                        children: e.thumbnail
                          ? (0, F.jsx)(`img`, {
                              src: e.thumbnail,
                              alt: a(
                                `profile.gameCoverAlt`,
                                `{{name}} cover art`,
                                { name: e.title },
                              ),
                              className: `h-full w-full object-cover`,
                            })
                          : (0, F.jsx)(`div`, {
                              className: `flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50`,
                              children: (0, F.jsx)(b, {
                                className: `h-14 w-14 text-muted-foreground/60`,
                              }),
                            }),
                      }),
                      (0, F.jsxs)(E, {
                        className: `pb-2`,
                        children: [
                          (0, F.jsx)(O, {
                            className: `truncate text-lg`,
                            children: e.title,
                          }),
                          e.description &&
                            (0, F.jsx)(k, {
                              className: `line-clamp-2`,
                              children: e.description,
                            }),
                        ],
                      }),
                      t &&
                        (0, F.jsx)(D, {
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
function z() {
  return (0, F.jsx)(`div`, {
    className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
    "aria-hidden": `true`,
    children: [0, 1, 2].map((e) =>
      (0, F.jsxs)(
        A,
        {
          className: `overflow-hidden`,
          children: [
            (0, F.jsx)(T, { className: `aspect-video w-full rounded-none` }),
            (0, F.jsxs)(E, {
              children: [
                (0, F.jsx)(T, { className: `h-5 w-2/3` }),
                (0, F.jsx)(T, { className: `h-4 w-full` }),
              ],
            }),
          ],
        },
        e,
      ),
    ),
  });
}
function B(e) {
  switch (e) {
    case `like`:
      return (0, F.jsx)(S, { className: `h-4 w-4 text-red-500` });
    case `comment`:
      return (0, F.jsx)(ce, { className: `h-4 w-4 text-green-500` });
    case `follow`:
      return (0, F.jsx)(v, { className: `h-4 w-4 text-blue-500` });
    case `game_created`:
      return (0, F.jsx)(b, { className: `h-4 w-4 text-purple-500` });
    default:
      return (0, F.jsx)(S, { className: `h-4 w-4` });
  }
}
