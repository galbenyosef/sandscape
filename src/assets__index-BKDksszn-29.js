// assets__index-BKDksszn 29 — error
// Lines 10339-10458 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
var Xc = async (e) => {
    let t = e;
    if (!t) {
      let {
        data: { user: e },
      } = await C.auth.getUser();
      if (!e) throw Error(`Not authenticated`);
      t = e.id;
    }
    let { data: n, error: r } = await C.from(`user_projects`)
      .select(`*`)
      .eq(`user_id`, t)
      .order(`updated_at`, { ascending: !1 });
    if (r) throw r;
    return n || [];
  },
  Zc = async () => {
    let e = await Te(),
      t = await fetch(`${Ee.API_BASE_URL}/api/sessions`, { headers: e }),
      n = null;
    try {
      n = await t.json();
    } catch {}
    if (!t.ok || n?.success !== !0)
      throw Error(n?.error || `Failed to load projects (${t.status})`);
    return {
      projects: (Array.isArray(n?.sessions) ? n.sessions : [])
        .filter(
          (e) => typeof e?.id == `string` && typeof e?.session_id == `string`,
        )
        .map((e) => ({
          id: e.id,
          user_id: e.user_id || ``,
          session_id: e.session_id,
          name: e.name || e.session_id,
          description: e.description ?? null,
          thumbnail_url: e.thumbnail_url ?? null,
          status: e.status || `in_progress`,
          created_at: e.created_at || ``,
          updated_at: e.updated_at || e.created_at || ``,
          role: e.role === `collaborator` ? `collaborator` : `owner`,
        }))
        .sort((e, t) => Date.parse(t.updated_at) - Date.parse(e.updated_at)),
      sharedProjectsError: n?.shared_projects_error || null,
    };
  },
  Qc = async (e) => {
    if (e.length === 0) return {};
    let { data: t, error: n } = await C.from(`games`)
      .select(`session_id, thumbnail_url`)
      .in(`session_id`, e)
      .eq(`status`, `published`)
      .not(`thumbnail_url`, `is`, null);
    if (n) throw n;
    let r = {};
    for (let e of t || []) {
      let t = Be(e.thumbnail_url);
      e.session_id && t && (r[e.session_id] = t);
    }
    return r;
  },
  $c = async (e) => {
    let {
      data: { user: t },
    } = await C.auth.getUser();
    if (!t) throw Error(`Not authenticated`);
    let { data: n, error: r } = await C.from(`user_projects`)
      .select(`*`)
      .eq(`user_id`, t.id)
      .eq(`session_id`, e)
      .maybeSingle();
    if (r) throw r;
    return n;
  },
  el = async (e) => {
    let {
      data: { user: t },
    } = await C.auth.getUser();
    if (!t) throw Error(`Not authenticated`);
    let { data: n, error: r } = await C.from(`user_projects`)
      .insert({
        user_id: t.id,
        session_id: e.session_id,
        name: e.name,
        description: e.description || null,
        thumbnail_url: e.thumbnail_url || null,
      })
      .select()
      .single();
    if (r) throw r;
    return n;
  },
  tl = async (e, t) => {
    let { data: n, error: r } = await C.from(`user_projects`)
      .update(t)
      .eq(`id`, e)
      .select()
      .single();
    if (r) throw r;
    return n;
  },
  nl = async (e, t) => {
    let {
      data: { user: n },
    } = await C.auth.getUser();
    if (!n) throw Error(`Not authenticated`);
    let r = await $c(e);
    if (r) return tl(r.id, t);
    if (!t.name) throw Error(`Name is required when creating a new project`);
    return el({
      session_id: e,
      name: t.name,
      description: t.description,
      thumbnail_url: t.thumbnail_url,
    });
  },
  rl = async (e) => {
    let { error: t } = await C.from(`user_projects`).delete().eq(`id`, e);
    if (t) throw t;
  };
