// Create-CEn7EAZs 65 — children
// Lines 20470-20876 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var rm = {
    worldSettings: {
      gravity: 9.8,
      worldWidth: 1920,
      worldHeight: 1080,
      backgroundColor: `#1a1a2e`,
    },
    characterSettings: {
      moveSpeed: 5,
      jumpHeight: 12,
      maxLives: 3,
      startingHealth: 100,
    },
    audioSettings: { musicVolume: 70, sfxVolume: 80 },
    gameplaySettings: {
      difficulty: `medium`,
      enablePowerups: !0,
      respawnTime: 3,
    },
  },
  ure = ({ sessionId: e, className: t = `` }) => {
    let [n, r] = (0, X.useState)(rm),
      [i, a] = (0, X.useState)(!1),
      o = (e, t, n) => {
        (r((r) => ({ ...r, [e]: { ...r[e], [t]: n } })), a(!0));
      };
    return (0, Z.jsxs)(`div`, {
      className: `h-full flex flex-col ${t}`,
      children: [
        (0, Z.jsx)(`div`, {
          className: `p-3 bg-amber-500/10 border-b border-amber-500/30`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 text-amber-400 text-xs`,
            children: [
              (0, Z.jsx)(pn, { className: `h-4 w-4 flex-shrink-0` }),
              (0, Z.jsxs)(`span`, {
                children: [
                  (0, Z.jsx)(`strong`, { children: `MOCK-UP:` }),
                  ` This settings panel contains placeholder data. Settings are not yet connected to the game engine.`,
                ],
              }),
            ],
          }),
        }),
        (0, Z.jsx)(`div`, {
          className: `p-4 border-b border-gray-700/50`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            children: [
              (0, Z.jsxs)(`h2`, {
                className: `text-lg font-semibold text-white flex items-center gap-2`,
                children: [
                  (0, Z.jsx)(gt, { className: `h-5 w-5 text-primary` }),
                  `Game Settings`,
                ],
              }),
              i &&
                (0, Z.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    (0, Z.jsx)(S, {
                      variant: `ghost`,
                      size: `sm`,
                      onClick: () => {
                        (r(rm), a(!1));
                      },
                      children: `Reset`,
                    }),
                    (0, Z.jsx)(S, {
                      size: `sm`,
                      onClick: () => {
                        (console.log(`Saving settings (mock):`, n), a(!1));
                      },
                      children: `Save Changes`,
                    }),
                  ],
                }),
            ],
          }),
        }),
        (0, Z.jsx)(Lr, {
          className: `flex-1`,
          children: (0, Z.jsxs)(`div`, {
            className: `p-4 space-y-6`,
            children: [
              (0, Z.jsxs)(im, {
                icon: (0, Z.jsx)(De, { className: `h-4 w-4` }),
                title: `World Settings`,
                children: [
                  (0, Z.jsx)(am, {
                    label: `Gravity`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Z.jsx)(nm, {
                          value: [n.worldSettings.gravity],
                          onValueChange: ([e]) =>
                            o(`worldSettings`, `gravity`, e),
                          min: 0,
                          max: 20,
                          step: 0.1,
                          className: `flex-1`,
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-sm text-gray-400 w-12 text-right`,
                          children: n.worldSettings.gravity.toFixed(1),
                        }),
                      ],
                    }),
                  }),
                  (0, Z.jsx)(am, {
                    label: `World Size`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex gap-2`,
                      children: [
                        (0, Z.jsx)(Ar, {
                          type: `number`,
                          value: n.worldSettings.worldWidth,
                          onChange: (e) =>
                            o(
                              `worldSettings`,
                              `worldWidth`,
                              parseInt(e.target.value) || 0,
                            ),
                          className: `w-24 bg-gray-800/50 border-gray-700`,
                          placeholder: `Width`,
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-gray-500 self-center`,
                          children: `x`,
                        }),
                        (0, Z.jsx)(Ar, {
                          type: `number`,
                          value: n.worldSettings.worldHeight,
                          onChange: (e) =>
                            o(
                              `worldSettings`,
                              `worldHeight`,
                              parseInt(e.target.value) || 0,
                            ),
                          className: `w-24 bg-gray-800/50 border-gray-700`,
                          placeholder: `Height`,
                        }),
                      ],
                    }),
                  }),
                  (0, Z.jsx)(am, {
                    label: `Background Color`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, Z.jsx)(`input`, {
                          type: `color`,
                          value: n.worldSettings.backgroundColor,
                          onChange: (e) =>
                            o(
                              `worldSettings`,
                              `backgroundColor`,
                              e.target.value,
                            ),
                          className: `w-10 h-8 rounded cursor-pointer`,
                        }),
                        (0, Z.jsx)(Ar, {
                          value: n.worldSettings.backgroundColor,
                          onChange: (e) =>
                            o(
                              `worldSettings`,
                              `backgroundColor`,
                              e.target.value,
                            ),
                          className: `w-28 bg-gray-800/50 border-gray-700 font-mono text-sm`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, Z.jsxs)(im, {
                icon: (0, Z.jsx)(hn, { className: `h-4 w-4` }),
                title: `Character Settings`,
                children: [
                  (0, Z.jsx)(am, {
                    label: `Move Speed`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Z.jsx)(nm, {
                          value: [n.characterSettings.moveSpeed],
                          onValueChange: ([e]) =>
                            o(`characterSettings`, `moveSpeed`, e),
                          min: 1,
                          max: 20,
                          step: 0.5,
                          className: `flex-1`,
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-sm text-gray-400 w-12 text-right`,
                          children: n.characterSettings.moveSpeed,
                        }),
                      ],
                    }),
                  }),
                  (0, Z.jsx)(am, {
                    label: `Jump Height`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Z.jsx)(nm, {
                          value: [n.characterSettings.jumpHeight],
                          onValueChange: ([e]) =>
                            o(`characterSettings`, `jumpHeight`, e),
                          min: 1,
                          max: 30,
                          step: 1,
                          className: `flex-1`,
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-sm text-gray-400 w-12 text-right`,
                          children: n.characterSettings.jumpHeight,
                        }),
                      ],
                    }),
                  }),
                  (0, Z.jsx)(am, {
                    label: `Max Lives`,
                    children: (0, Z.jsx)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [1, 3, 5, 99].map((e) =>
                        (0, Z.jsx)(
                          `button`,
                          {
                            onClick: () =>
                              o(`characterSettings`, `maxLives`, e),
                            className: `px-3 py-1.5 rounded text-sm transition-colors ${n.characterSettings.maxLives === e ? `bg-primary text-white` : `bg-gray-800/50 text-gray-400 hover:bg-gray-700/50`}`,
                            children: e === 99 ? `Unlimited` : e,
                          },
                          e,
                        ),
                      ),
                    }),
                  }),
                  (0, Z.jsx)(am, {
                    label: `Starting Health`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Z.jsx)(Ur, { className: `h-4 w-4 text-red-400` }),
                        (0, Z.jsx)(nm, {
                          value: [n.characterSettings.startingHealth],
                          onValueChange: ([e]) =>
                            o(`characterSettings`, `startingHealth`, e),
                          min: 10,
                          max: 200,
                          step: 10,
                          className: `flex-1`,
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-sm text-gray-400 w-12 text-right`,
                          children: n.characterSettings.startingHealth,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, Z.jsxs)(im, {
                icon: (0, Z.jsx)(Tt, { className: `h-4 w-4` }),
                title: `Audio Settings`,
                children: [
                  (0, Z.jsx)(am, {
                    label: `Music Volume`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Z.jsx)(nm, {
                          value: [n.audioSettings.musicVolume],
                          onValueChange: ([e]) =>
                            o(`audioSettings`, `musicVolume`, e),
                          min: 0,
                          max: 100,
                          step: 5,
                          className: `flex-1`,
                        }),
                        (0, Z.jsxs)(`span`, {
                          className: `text-sm text-gray-400 w-12 text-right`,
                          children: [n.audioSettings.musicVolume, `%`],
                        }),
                      ],
                    }),
                  }),
                  (0, Z.jsx)(am, {
                    label: `SFX Volume`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Z.jsx)(nm, {
                          value: [n.audioSettings.sfxVolume],
                          onValueChange: ([e]) =>
                            o(`audioSettings`, `sfxVolume`, e),
                          min: 0,
                          max: 100,
                          step: 5,
                          className: `flex-1`,
                        }),
                        (0, Z.jsxs)(`span`, {
                          className: `text-sm text-gray-400 w-12 text-right`,
                          children: [n.audioSettings.sfxVolume, `%`],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, Z.jsxs)(im, {
                icon: (0, Z.jsx)(Fr, { className: `h-4 w-4` }),
                title: `Gameplay Settings`,
                children: [
                  (0, Z.jsx)(am, {
                    label: `Difficulty`,
                    children: (0, Z.jsx)(`div`, {
                      className: `flex gap-2`,
                      children: [`easy`, `medium`, `hard`].map((e) =>
                        (0, Z.jsx)(
                          `button`,
                          {
                            onClick: () =>
                              o(`gameplaySettings`, `difficulty`, e),
                            className: `px-3 py-1.5 rounded text-sm capitalize transition-colors ${n.gameplaySettings.difficulty === e ? (e === `easy` ? `bg-green-600 text-white` : e === `medium` ? `bg-amber-600 text-white` : `bg-red-600 text-white`) : `bg-gray-800/50 text-gray-400 hover:bg-gray-700/50`}`,
                            children: e,
                          },
                          e,
                        ),
                      ),
                    }),
                  }),
                  (0, Z.jsx)(am, {
                    label: `Enable Powerups`,
                    children: (0, Z.jsx)(`button`, {
                      onClick: () =>
                        o(
                          `gameplaySettings`,
                          `enablePowerups`,
                          !n.gameplaySettings.enablePowerups,
                        ),
                      className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${n.gameplaySettings.enablePowerups ? `bg-primary` : `bg-gray-700`}`,
                      children: (0, Z.jsx)(`span`, {
                        className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${n.gameplaySettings.enablePowerups ? `translate-x-6` : `translate-x-1`}`,
                      }),
                    }),
                  }),
                  (0, Z.jsx)(am, {
                    label: `Respawn Time`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Z.jsx)(gn, {
                          className: `h-4 w-4 text-yellow-400`,
                        }),
                        (0, Z.jsx)(nm, {
                          value: [n.gameplaySettings.respawnTime],
                          onValueChange: ([e]) =>
                            o(`gameplaySettings`, `respawnTime`, e),
                          min: 0,
                          max: 10,
                          step: 0.5,
                          className: `flex-1`,
                        }),
                        (0, Z.jsxs)(`span`, {
                          className: `text-sm text-gray-400 w-16 text-right`,
                          children: [n.gameplaySettings.respawnTime, `s`],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  im = ({ icon: e, title: t, children: n }) =>
    (0, Z.jsxs)(`div`, {
      className: `bg-gray-800/30 rounded-lg p-4 border border-gray-700/30`,
      children: [
        (0, Z.jsxs)(`h3`, {
          className: `text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2`,
          children: [
            (0, Z.jsx)(`span`, { className: `text-primary`, children: e }),
            t,
          ],
        }),
        (0, Z.jsx)(`div`, { className: `space-y-4`, children: n }),
      ],
    }),
  am = ({ label: e, children: t }) =>
    (0, Z.jsxs)(`div`, {
      className: `flex flex-col gap-2`,
      children: [
        (0, Z.jsx)(`label`, {
          className: `text-sm text-gray-400`,
          children: e,
        }),
        t,
      ],
    });
