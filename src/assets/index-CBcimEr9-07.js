// index-CBcimEr9 07 — error
// Lines 2054-2383 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function ei(e) {
  return (
    (0, H.useEffect)(() => {
      var t;
      e.beforeSend &&
        ((t = window.va) == null || t.call(window, `beforeSend`, e.beforeSend));
    }, [e.beforeSend]),
    (0, H.useEffect)(() => {
      Xr(
        {
          framework: e.framework || `react`,
          basePath: e.basePath ?? Qr(),
          ...(e.route !== void 0 && { disableAutoTrack: !0 }),
          ...e,
        },
        e.configString ?? $r(),
      );
    }, []),
    (0, H.useEffect)(() => {
      e.route && e.path && Zr({ route: e.route, path: e.path });
    }, [e.route, e.path]),
    null
  );
}
var ti = `
  *,
  sender:profiles!notifications_sender_profile_fkey(user_id, username, avatar_url),
  game:games!notifications_game_id_fkey(id, title, thumbnail_url, short_code)
`,
  ni = `*`;
async function ri(e) {
  let t = e;
  if (t.sender_user_id) {
    let { data: e } = await C.from(`profiles`)
      .select(`user_id, username, avatar_url`)
      .eq(`user_id`, t.sender_user_id)
      .single();
    e && (t.sender = e);
  }
  if (t.game_id) {
    let { data: e } = await C.from(`games`)
      .select(`id, title, thumbnail_url, short_code`)
      .eq(`id`, t.game_id)
      .single();
    e && (t.game = e);
  }
  return t;
}
var ii = {
  new_follower: !0,
  game_like: !0,
  game_comment: !0,
  comment_reply: !0,
  chat_mention: !0,
};
async function ai() {
  let { data: e, error: t } = await C.auth.getUser();
  if (t || !e?.user) throw Error(`Not authenticated`);
  let { data: n, error: r } = await C.from(`profiles`)
    .select(`notification_prefs`)
    .eq(`user_id`, e.user.id)
    .single();
  if (r) throw r;
  return { ...ii, ...(n?.notification_prefs ?? {}) };
}
async function oi(e) {
  let { data: t, error: n } = await C.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { error: r } = await C.from(`profiles`)
    .update({ notification_prefs: e })
    .eq(`user_id`, t.user.id);
  if (r) throw r;
}
async function si(e = 50, t = 0) {
  let { data: n, error: r } = await C.auth.getUser();
  if (r || !n?.user) throw Error(`Not authenticated`);
  let { data: i, error: a } = await C.from(`notifications`)
    .select(ti)
    .eq(`recipient_user_id`, n.user.id)
    .order(`created_at`, { ascending: !1 })
    .range(t, t + e - 1);
  if (!a && i)
    return i.map((e) => ({
      ...e,
      sender: e.sender || void 0,
      game: e.game || void 0,
    }));
  console.warn(
    `Notification FK join failed, using fallback queries:`,
    a?.message,
  );
  let { data: o, error: s } = await C.from(`notifications`)
    .select(ni)
    .eq(`recipient_user_id`, n.user.id)
    .order(`created_at`, { ascending: !1 })
    .range(t, t + e - 1);
  if (s) throw s;
  return Promise.all((o || []).map(ri));
}
async function ci() {
  let { data: e, error: t } = await C.auth.getUser();
  if (t || !e?.user) return 0;
  let { count: n, error: r } = await C.from(`notifications`)
    .select(`*`, { count: `exact`, head: !0 })
    .eq(`recipient_user_id`, e.user.id)
    .eq(`is_read`, !1);
  if (r) throw r;
  return n || 0;
}
async function li(e) {
  let { data: t, error: n } = await C.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { error: r } = await C.from(`notifications`)
    .update({ is_read: !0 })
    .eq(`id`, e)
    .eq(`recipient_user_id`, t.user.id);
  if (r) throw r;
}
async function ui() {
  let { data: e, error: t } = await C.auth.getUser();
  if (t || !e?.user) throw Error(`Not authenticated`);
  let { error: n } = await C.from(`notifications`)
    .update({ is_read: !0 })
    .eq(`recipient_user_id`, e.user.id)
    .eq(`is_read`, !1);
  if (n) throw n;
}
async function di(e) {
  let { data: t, error: n } = await C.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { error: r } = await C.from(`notifications`)
    .delete()
    .eq(`id`, e)
    .eq(`recipient_user_id`, t.user.id);
  if (r) throw r;
}
function fi(e, t) {
  let n = C.channel(`notifications:${e}`)
    .on(
      `postgres_changes`,
      {
        event: `INSERT`,
        schema: `public`,
        table: `notifications`,
        filter: `recipient_user_id=eq.${e}`,
      },
      async (e) => {
        let { data: n, error: r } = await C.from(`notifications`)
          .select(ti)
          .eq(`id`, e.new.id)
          .single();
        if (!r && n) {
          t({ ...n, sender: n.sender || void 0, game: n.game || void 0 });
          return;
        }
        console.warn(
          `Realtime notification FK join failed, using fallback:`,
          r?.message,
        );
        let { data: i, error: a } = await C.from(`notifications`)
          .select(ni)
          .eq(`id`, e.new.id)
          .single();
        if (a || !i) {
          console.error(
            `Failed to fetch notification even without joins:`,
            a?.message,
          );
          return;
        }
        t(await ri(i));
      },
    )
    .subscribe();
  return () => {
    C.removeChannel(n);
  };
}
function pi(e, t) {
  return t ? e.replace(/\{\{(\w+)\}\}/g, (e, n) => String(t[n] ?? ``)) : e;
}
function mi(e, t) {
  let n = t ?? ((e, t, n) => pi(t, n)),
    r = e.sender?.username || n(`notifications.someone`, `Someone`),
    i = e.game?.title || n(`notifications.aGame`, `a game`);
  switch (e.type) {
    case `new_follower`:
      return n(
        `notifications.msgNewFollower`,
        `{{name}} started following you`,
        { name: r },
      );
    case `game_like`:
      return n(
        `notifications.msgGameLike`,
        `{{name}} liked your game "{{game}}"`,
        { name: r, game: i },
      );
    case `game_comment`:
      return n(
        `notifications.msgGameComment`,
        `{{name}} commented on your game "{{game}}"`,
        { name: r, game: i },
      );
    case `comment_reply`:
      return n(
        `notifications.msgCommentReply`,
        `{{name}} replied to your comment`,
        { name: r },
      );
    case `collab_invite`:
      return n(
        `notifications.msgCollabInvite`,
        `{{name}} invited you to collaborate on a project`,
        { name: r },
      );
    case `chat_mention`:
      return n(
        `notifications.msgChatMention`,
        `{{name}} mentioned you in chat`,
        { name: r },
      );
    default:
      return n(`notifications.msgDefault`, `You have a new notification`);
  }
}
function hi(e) {
  switch (e.type) {
    case `new_follower`:
      return `/profile/${e.sender_user_id}`;
    case `game_like`:
    case `game_comment`:
    case `comment_reply`:
      return e.game?.short_code
        ? `/play?g=${e.game.short_code}`
        : e.game_id
          ? `/play?g=${e.game_id}`
          : `/`;
    case `collab_invite`: {
      let t = e.room_id || e.metadata?.session_id;
      return t ? `/creating?session=${t}` : `/`;
    }
    case `chat_mention`: {
      let t = e.room_id || e.metadata?.session_id;
      return t ? `/creating?session=${t}` : `/`;
    }
    default:
      return `/`;
  }
}
var gi = (0, H.createContext)(void 0);
function _i({ children: e }) {
  let { user: t, isAuthenticated: n } = G(),
    [r, i] = (0, H.useState)([]),
    [a, o] = (0, H.useState)(0),
    [s, c] = (0, H.useState)(!1),
    l = (0, H.useCallback)(async () => {
      if (n) {
        c(!0);
        try {
          let [e, t] = await Promise.all([si(50, 0), ci()]);
          (i(e), o(t));
        } catch (e) {
          console.error(`Error fetching notifications:`, e);
        } finally {
          c(!1);
        }
      }
    }, [n]);
  ((0, H.useEffect)(() => {
    n ? l() : (i([]), o(0));
  }, [n, l]),
    (0, H.useEffect)(() => {
      if (t?.id)
        return fi(t.id, (e) => {
          (i((t) => [e, ...t]), e.is_read || o((e) => e + 1));
        });
    }, [t?.id]));
  let u = (0, H.useCallback)(async (e) => {
      try {
        (await li(e),
          i((t) => t.map((t) => (t.id === e ? { ...t, is_read: !0 } : t))),
          o((e) => Math.max(0, e - 1)));
      } catch (e) {
        console.error(`Error marking notification as read:`, e);
      }
    }, []),
    d = (0, H.useCallback)(async () => {
      try {
        (await ui(), i((e) => e.map((e) => ({ ...e, is_read: !0 }))), o(0));
      } catch (e) {
        console.error(`Error marking all notifications as read:`, e);
      }
    }, []),
    f = (0, H.useCallback)(
      async (e) => {
        try {
          let t = r.find((t) => t.id === e);
          (await di(e),
            i((t) => t.filter((t) => t.id !== e)),
            t && !t.is_read && o((e) => Math.max(0, e - 1)));
        } catch (e) {
          console.error(`Error removing notification:`, e);
        }
      },
      [r],
    ),
    p = (0, H.useCallback)(() => {
      (i([]), o(0));
    }, []);
  return (0, U.jsx)(gi.Provider, {
    value: {
      notifications: r,
      unreadCount: a,
      loading: s,
      fetchNotifications: l,
      markAsRead: u,
      markAllAsRead: d,
      removeNotification: f,
      clearNotifications: p,
    },
    children: e,
  });
}
function vi() {
  let e = (0, H.useContext)(gi);
  if (!e)
    throw Error(`useNotifications must be used within a NotificationProvider`);
  return e;
}
