// assets__index-BKDksszn 14 — creator_id
// Lines 4158-4509 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
var Ha = (e, t) => Ba(e, t),
  Ua = (e) => [e, `both`],
  Wa = async (e) => {
    let { data: t, error: n } = await C.from(`games`)
      .select(`id,title,description,thumbnail_url,short_code,published_at`)
      .eq(`creator_id`, e)
      .eq(`status`, `published`)
      .eq(`visibility`, `public`)
      .eq(`is_placeholder`, !1)
      .order(`published_at`, { ascending: !1, nullsFirst: !1 });
    if (n) throw n;
    return (t || []).map((e) => ({
      id: e.id,
      title: e.title,
      description: e.description,
      thumbnail: Be(e.thumbnail_url),
      shortCode: e.short_code,
      publishedAt: e.published_at,
    }));
  },
  Ga = async (e = `all`, t, n) => {
    let r = C.from(`games`)
      .select(
        `
        id,
        title,
        description,
        thumbnail_url,
        preview_video_url,
        game_content_url,
        session_id,
        short_code,
        visibility,
        creator_id,
        like_count,
        comment_count,
        view_count,
        tags,
        status,
        is_live,
        is_placeholder,
        platform_compat,
        created_at,
        published_at
      `,
      )
      .eq(`status`, `published`)
      .eq(`visibility`, `public`);
    (n && (r = r.in(`platform_compat`, Ua(n))),
      e !== `all` && (r = r.contains(`tags`, [e])),
      (r =
        t === `trending`
          ? r
              .eq(`is_placeholder`, !1)
              .order(`view_count`, { ascending: !1 })
              .limit(8)
          : t === `new`
            ? r
                .eq(`is_placeholder`, !1)
                .order(`published_at`, { ascending: !1, nullsFirst: !1 })
                .order(`created_at`, { ascending: !1 })
                .limit(16)
            : r
                .order(`is_placeholder`, { ascending: !0 })
                .order(`created_at`, { ascending: !1 })));
    let { data: i, error: a } = await r;
    if (a) throw a;
    let o = i || [],
      s = await He(o.map((e) => e.creator_id)),
      c = Object.fromEntries(
        Object.entries(s).map(([e, t]) => [
          e,
          { name: t.username || `Unknown`, avatar: Re(t.avatar_url) },
        ]),
      );
    return {
      games: o.map((e) => ({
        _id: e.id,
        title: e.title,
        description: e.description,
        thumbnail: e.thumbnail_url,
        previewVideo: e.preview_video_url,
        creatorId: e.creator_id,
        creator: c[e.creator_id] || { name: `Unknown`, avatar: void 0 },
        likes: e.like_count,
        comments: e.comment_count,
        views: e.view_count,
        category: e.tags?.[0] || `other`,
        isLive: e.is_live,
        isPlaceholder: e.is_placeholder ?? !1,
        createdAt: e.created_at,
        publishedAt: e.published_at,
        gameContentUrl: e.game_content_url,
        shortCode: e.short_code,
        platformCompat: e.platform_compat,
      })),
    };
  },
  Ka = () =>
    new Promise((e) => {
      setTimeout(() => {
        e({
          categories: [
            { id: `all`, name: `All Games` },
            { id: `action`, name: `Action` },
            { id: `rpg`, name: `RPG` },
            { id: `puzzle`, name: `Puzzle` },
            { id: `racing`, name: `Racing` },
            { id: `strategy`, name: `Strategy` },
          ],
        });
      }, 500);
    }),
  qa = async (e) => {
    let { data: t, error: n } = await C.from(`games`)
      .select(
        `
        id,
        title,
        description,
        thumbnail_url,
        preview_video_url,
        game_content_url,
        session_id,
        short_code,
        visibility,
        creator_id,
        like_count,
        comment_count,
        view_count,
        tags,
        status,
        is_live,
        is_placeholder,
        platform_compat,
        created_at,
        published_at
      `,
      )
      .eq(`id`, e)
      .maybeSingle();
    if (n) throw n;
    if (!t) throw Error(`Game not found`);
    let r = { name: `Unknown`, avatar: void 0, _id: t.creator_id };
    if (t.creator_id) {
      let e = (await He([t.creator_id]))[t.creator_id];
      e &&
        (r = {
          _id: e.user_id,
          name: e.username || `Unknown`,
          avatar: Re(e.avatar_url),
        });
    }
    return {
      game: {
        _id: t.id,
        title: t.title,
        description: t.description,
        thumbnail: t.thumbnail_url,
        previewVideo: t.preview_video_url,
        creatorId: t.creator_id,
        creator: r,
        likes: t.like_count,
        comments: t.comment_count,
        views: t.view_count,
        category: t.tags?.[0] || `other`,
        isLive: t.is_live,
        isPlaceholder: t.is_placeholder ?? !1,
        createdAt: t.created_at,
        gameContentUrl: t.game_content_url,
        sessionId: t.session_id,
        shortCode: t.short_code,
        publishedAt: t.published_at,
        platformCompat: t.platform_compat,
      },
    };
  },
  Ja = async (e) => {
    let { data: t, error: n } = await C.from(`games`)
      .select(
        `
        id,
        title,
        description,
        thumbnail_url,
        preview_video_url,
        game_content_url,
        session_id,
        short_code,
        visibility,
        creator_id,
        like_count,
        comment_count,
        view_count,
        tags,
        status,
        is_live,
        is_placeholder,
        platform_compat,
        created_at,
        published_at
      `,
      )
      .eq(`short_code`, e)
      .maybeSingle();
    if (n) throw n;
    if (!t) throw Error(`Game not found`);
    let r = { name: `Unknown`, avatar: void 0, _id: t.creator_id };
    if (t.creator_id) {
      let e = (await He([t.creator_id]))[t.creator_id];
      e &&
        (r = {
          _id: e.user_id,
          name: e.username || `Unknown`,
          avatar: Re(e.avatar_url),
        });
    }
    return {
      game: {
        _id: t.id,
        title: t.title,
        description: t.description,
        thumbnail: t.thumbnail_url,
        previewVideo: t.preview_video_url,
        creatorId: t.creator_id,
        creator: r,
        likes: t.like_count,
        comments: t.comment_count,
        views: t.view_count,
        category: t.tags?.[0] || `other`,
        isLive: t.is_live,
        isPlaceholder: t.is_placeholder ?? !1,
        createdAt: t.created_at,
        gameContentUrl: t.game_content_url,
        sessionId: t.session_id,
        shortCode: t.short_code,
        publishedAt: t.published_at,
        platformCompat: t.platform_compat,
      },
    };
  },
  Ya = async (e) => {
    try {
      return await Ja(e);
    } catch {
      return await qa(e);
    }
  },
  Xa = async (e) => {
    let { data: t, error: n } = await C.from(`comments`)
      .select(
        `
        id,
        user_id,
        game_id,
        parent_comment_id,
        content,
        like_count,
        created_at
      `,
      )
      .eq(`game_id`, e)
      .order(`created_at`, { ascending: !1 });
    if (n) throw n;
    let r = Array.from(new Set((t || []).map((e) => e.user_id))),
      i = {};
    if (r.length > 0) {
      let { data: e, error: t } = await C.from(`profiles`)
        .select(`user_id,username,avatar_url`)
        .in(`user_id`, r);
      !t &&
        e &&
        (i = Object.fromEntries(
          e.map((e) => [
            e.user_id,
            { name: e.username || `Unknown`, avatar: Re(e.avatar_url) },
          ]),
        ));
    }
    let a = (t || []).map((e) => ({
        _id: e.id,
        user: {
          _id: e.user_id,
          ...(i[e.user_id] || { name: `Unknown`, avatar: void 0 }),
        },
        text: e.content,
        likes: e.like_count,
        replies: 0,
        createdAt: e.created_at,
        parentCommentId: e.parent_comment_id || null,
        children: [],
      })),
      o = Object.fromEntries(a.map((e) => [e._id, e])),
      s = [];
    for (let e of a)
      e.parentCommentId && o[e.parentCommentId]
        ? o[e.parentCommentId].children.push(e)
        : s.push(e);
    for (let e of a)
      (e.children.sort(
        (e, t) =>
          new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime(),
      ),
        (e.replies = e.children.length));
    return { comments: s };
  },
  Za = async (e, t) => {
    let { data: n, error: r } = await C.from(`games`)
      .select(`tags`)
      .eq(`id`, e)
      .maybeSingle();
    if (r) throw r;
    let i = n?.tags || [],
      a = C.from(`games`)
        .select(
          `
        id,
        title,
        short_code,
        thumbnail_url,
        view_count,
        creator_id,
        platform_compat
      `,
        )
        .neq(`id`, e)
        .eq(`status`, `published`)
        .eq(`visibility`, `public`)
        .limit(3)
        .order(`created_at`, { ascending: !1 });
    (t && (a = a.in(`platform_compat`, Ua(t))),
      i.length > 0 && (a = a.overlaps(`tags`, i)));
    let { data: o, error: s } = await a;
    if (s) throw s;
    let c = await He((o || []).map((e) => e.creator_id)),
      l = Object.fromEntries(
        Object.entries(c).map(([e, t]) => [
          e,
          { name: t.username || `Unknown`, avatar: Re(t.avatar_url) },
        ]),
      );
    return {
      games: (o || []).map((e) => ({
        _id: e.id,
        title: e.title,
        shortCode: e.short_code,
        thumbnail: e.thumbnail_url,
        creator: l[e.creator_id] || { name: `Unknown`, avatar: void 0 },
        views: e.view_count,
      })),
    };
  };
