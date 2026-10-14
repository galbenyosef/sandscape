// index-BKDksszn 11 — error
// Lines 3055-3384 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
function Ti(e) {
  return (
    (0, U.useEffect)(() => {
      var t;
      e.beforeSend &&
        ((t = window.va) == null || t.call(window, `beforeSend`, e.beforeSend));
    }, [e.beforeSend]),
    (0, U.useEffect)(() => {
      xi(
        {
          framework: e.framework || `react`,
          basePath: e.basePath ?? Ci(),
          ...(e.route !== void 0 && { disableAutoTrack: !0 }),
          ...e,
        },
        e.configString ?? wi(),
      );
    }, []),
    (0, U.useEffect)(() => {
      e.route && e.path && Si({ route: e.route, path: e.path });
    }, [e.route, e.path]),
    null
  );
}
var Ei = `
  *,
  sender:profiles!notifications_sender_profile_fkey(user_id, username, avatar_url),
  game:games!notifications_game_id_fkey(id, title, thumbnail_url, short_code)
`,
  Di = `*`;
async function Oi(e) {
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
var ki = {
  new_follower: !0,
  game_like: !0,
  game_comment: !0,
  comment_reply: !0,
  chat_mention: !0,
};
async function Ai() {
  let { data: e, error: t } = await C.auth.getUser();
  if (t || !e?.user) throw Error(`Not authenticated`);
  let { data: n, error: r } = await C.from(`profiles`)
    .select(`notification_prefs`)
    .eq(`user_id`, e.user.id)
    .single();
  if (r) throw r;
  return { ...ki, ...(n?.notification_prefs ?? {}) };
}
async function ji(e) {
  let { data: t, error: n } = await C.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { error: r } = await C.from(`profiles`)
    .update({ notification_prefs: e })
    .eq(`user_id`, t.user.id);
  if (r) throw r;
}
async function Mi(e = 50, t = 0) {
  let { data: n, error: r } = await C.auth.getUser();
  if (r || !n?.user) throw Error(`Not authenticated`);
  let { data: i, error: a } = await C.from(`notifications`)
    .select(Ei)
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
    .select(Di)
    .eq(`recipient_user_id`, n.user.id)
    .order(`created_at`, { ascending: !1 })
    .range(t, t + e - 1);
  if (s) throw s;
  return Promise.all((o || []).map(Oi));
}
async function Ni() {
  let { data: e, error: t } = await C.auth.getUser();
  if (t || !e?.user) return 0;
  let { count: n, error: r } = await C.from(`notifications`)
    .select(`*`, { count: `exact`, head: !0 })
    .eq(`recipient_user_id`, e.user.id)
    .eq(`is_read`, !1);
  if (r) throw r;
  return n || 0;
}
async function Pi(e) {
  let { data: t, error: n } = await C.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { error: r } = await C.from(`notifications`)
    .update({ is_read: !0 })
    .eq(`id`, e)
    .eq(`recipient_user_id`, t.user.id);
  if (r) throw r;
}
async function Fi() {
  let { data: e, error: t } = await C.auth.getUser();
  if (t || !e?.user) throw Error(`Not authenticated`);
  let { error: n } = await C.from(`notifications`)
    .update({ is_read: !0 })
    .eq(`recipient_user_id`, e.user.id)
    .eq(`is_read`, !1);
  if (n) throw n;
}
async function Ii(e) {
  let { data: t, error: n } = await C.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { error: r } = await C.from(`notifications`)
    .delete()
    .eq(`id`, e)
    .eq(`recipient_user_id`, t.user.id);
  if (r) throw r;
}
function Li(e, t) {
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
          .select(Ei)
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
          .select(Di)
          .eq(`id`, e.new.id)
          .single();
        if (a || !i) {
          console.error(
            `Failed to fetch notification even without joins:`,
            a?.message,
          );
          return;
        }
        t(await Oi(i));
      },
    )
    .subscribe();
  return () => {
    C.removeChannel(n);
  };
}
function Ri(e, t) {
  return t ? e.replace(/\{\{(\w+)\}\}/g, (e, n) => String(t[n] ?? ``)) : e;
}
function zi(e, t) {
  let n = t ?? ((e, t, n) => Ri(t, n)),
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
function Bi(e) {
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
var Vi = (0, U.createContext)(void 0);
function Hi({ children: e }) {
  let { user: t, isAuthenticated: n } = Sr(),
    [r, i] = (0, U.useState)([]),
    [a, o] = (0, U.useState)(0),
    [s, c] = (0, U.useState)(!1),
    l = (0, U.useCallback)(async () => {
      if (n) {
        c(!0);
        try {
          let [e, t] = await Promise.all([Mi(50, 0), Ni()]);
          (i(e), o(t));
        } catch (e) {
          console.error(`Error fetching notifications:`, e);
        } finally {
          c(!1);
        }
      }
    }, [n]);
  ((0, U.useEffect)(() => {
    n ? l() : (i([]), o(0));
  }, [n, l]),
    (0, U.useEffect)(() => {
      if (t?.id)
        return Li(t.id, (e) => {
          (i((t) => [e, ...t]), e.is_read || o((e) => e + 1));
        });
    }, [t?.id]));
  let u = (0, U.useCallback)(async (e) => {
      try {
        (await Pi(e),
          i((t) => t.map((t) => (t.id === e ? { ...t, is_read: !0 } : t))),
          o((e) => Math.max(0, e - 1)));
      } catch (e) {
        console.error(`Error marking notification as read:`, e);
      }
    }, []),
    d = (0, U.useCallback)(async () => {
      try {
        (await Fi(), i((e) => e.map((e) => ({ ...e, is_read: !0 }))), o(0));
      } catch (e) {
        console.error(`Error marking all notifications as read:`, e);
      }
    }, []),
    f = (0, U.useCallback)(
      async (e) => {
        try {
          let t = r.find((t) => t.id === e);
          (await Ii(e),
            i((t) => t.filter((t) => t.id !== e)),
            t && !t.is_read && o((e) => Math.max(0, e - 1)));
        } catch (e) {
          console.error(`Error removing notification:`, e);
        }
      },
      [r],
    ),
    p = (0, U.useCallback)(() => {
      (i([]), o(0));
    }, []);
  return (0, W.jsx)(Vi.Provider, {
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
function Ui() {
  let e = (0, U.useContext)(Vi);
  if (!e)
    throw Error(`useNotifications must be used within a NotificationProvider`);
  return e;
}
