// AuthService-C8NFtVWb 25 — error
// Lines 11769-11991 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var $ = po(yo, bo, {
    auth: {
      flowType: `pkce`,
      detectSessionInUrl: !0,
      persistSession: !0,
      autoRefreshToken: !0,
    },
  }),
  xo = class e {
    static async signIn({ email: e, password: t, captchaToken: n }) {
      let { data: r, error: i } = await $.auth.signInWithPassword({
        email: e,
        password: t,
        options: n ? { captchaToken: n } : void 0,
      });
      if (i) throw i;
      return r;
    }
    static async requestEmailOtp(e, t) {
      let { data: n, error: r } = await $.auth.signInWithOtp({
        email: e,
        options: {
          shouldCreateUser: !0,
          captchaToken: t?.captchaToken,
          emailRedirectTo: t?.emailRedirectTo,
        },
      });
      if (r) throw r;
      return n;
    }
    static async verifyEmailOtp(e, t) {
      let { data: n, error: r } = await $.auth.verifyOtp({
        email: e,
        token: t,
        type: `email`,
      });
      if (r) throw r;
      return n;
    }
    static async signInWithOAuth(e, t) {
      let { data: n, error: r } = await $.auth.signInWithOAuth({
        provider: e,
        options: t ? { redirectTo: t } : void 0,
      });
      if (r) throw r;
      return n;
    }
    static async exchangeCodeForSession(e) {
      let { data: t, error: n } = await $.auth.exchangeCodeForSession(e);
      if (n) throw n;
      return t;
    }
    static async signOut() {
      let { error: e } = await $.auth.signOut();
      if (e) throw e;
    }
    static async resetPassword(e, t, n) {
      let { data: r, error: i } = await $.auth.resetPasswordForEmail(e, {
        redirectTo: t,
        captchaToken: n,
      });
      if (i) throw i;
      return r;
    }
    static async updatePassword(e) {
      let { data: t, error: n } = await $.auth.updateUser({ password: e });
      if (n) throw n;
      return t;
    }
    static async updateEmail(e, t) {
      let { data: n, error: r } = await $.auth.updateUser(
        { email: e },
        t ? { emailRedirectTo: t } : void 0,
      );
      if (r) throw r;
      return n;
    }
    static async deleteAccount() {
      let {
          data: { session: e },
        } = await $.auth.getSession(),
        t = e?.access_token;
      if (!t) throw Error(`Not authenticated`);
      let n = await fetch(`https://sandscape-prod.fly.dev/api/account`, {
        method: `DELETE`,
        headers: {
          Authorization: `Bearer ${t}`,
          "Content-Type": `application/json`,
        },
      });
      if (!n.ok) {
        let e = await n.text();
        throw Error(`Account deletion failed: ${e || n.status}`);
      }
      return n.json();
    }
    static async updateProfile(t) {
      let n = await e.getCurrentUser();
      if (!n) throw Error(`No user logged in`);
      let r = { ...t };
      if (
        r.username !== void 0 &&
        ((r.username = _o(r.username)), !vo(r.username))
      )
        throw Error(
          `Username must be 3-30 characters and use letters, numbers, _ or -`,
        );
      let { data: i, error: a } = await $.from(`profiles`)
        .update(r)
        .eq(`user_id`, n.id)
        .select(`user_id, username, bio, avatar_url`)
        .single();
      if (a) throw a;
      return i;
    }
    static async completeOnboarding(e, t) {
      let { data: n, error: r } = await $.rpc(`complete_onboarding`, {
        p_username: e,
        p_avatar_url: t ?? null,
      });
      if (r) throw r;
      return n;
    }
    static async recordSignupAttribution(e) {
      let { data: t, error: n } = await $.rpc(`record_signup_attribution`, {
        p_utm_source: e?.utm_source ?? null,
        p_utm_medium: e?.utm_medium ?? null,
        p_utm_campaign: e?.utm_campaign ?? null,
        p_utm_term: e?.utm_term ?? null,
        p_utm_content: e?.utm_content ?? null,
        p_referrer: e?.referrer ?? null,
        p_landing_page: e?.landing_page ?? null,
        p_first_touch_at: e?.first_touch_at ?? null,
        p_capture_surface: e?.capture_surface ?? null,
        p_click_ids: e?.click_ids ?? null,
        p_conversion_id: e?.conversion_id ?? null,
      });
      if (n) throw n;
      if (t !== `inserted` && t !== `duplicate` && t !== `ineligible`)
        throw Error(
          `record_signup_attribution returned an unknown outcome: ${String(t)}`,
        );
      return t;
    }
    static async getProfileAuthState(e) {
      let { data: t, error: n } = await $.from(`profiles`)
        .select(
          `username, can_create, onboarding_completed_at, coding_access, requested_coding_access_at`,
        )
        .eq(`user_id`, e)
        .maybeSingle();
      if (n) throw n;
      return t
        ? {
            username: t.username ?? null,
            canCreate: t.can_create === !0,
            onboardingCompletedAt: t.onboarding_completed_at ?? null,
            codingAccess: t.coding_access === !0,
            requestedCodingAccessAt: t.requested_coding_access_at ?? null,
          }
        : null;
    }
    static async getActiveSignInMethods() {
      let { data: e, error: t } = await $.rpc(`get_active_sign_in_methods`);
      if (t) throw t;
      let n = e ?? {},
        r = new Set([`google`, `github`, `apple`, `facebook`]);
      return {
        emailOtp: n.email_otp === !0,
        password: n.password === !0,
        providers: (n.providers ?? []).filter(
          (e) => typeof e == `string` && r.has(e),
        ),
      };
    }
    static async getProfile(t) {
      let n = await e.getCurrentUser(),
        { data: r, error: i } = await $.from(`profiles`)
          .select(`user_id, username, bio, avatar_url`)
          .eq(`user_id`, t)
          .maybeSingle();
      if (i) throw i;
      if (!r) throw Error(`Profile not found`);
      let { count: a, error: o } = await $.from(`followers`)
        .select(`*`, { count: `exact`, head: !0 })
        .eq(`followed_user_id`, t);
      if (o) throw o;
      let { count: s, error: c } = await $.from(`followers`)
        .select(`*`, { count: `exact`, head: !0 })
        .eq(`following_user_id`, t);
      if (c) throw c;
      let l = !1;
      if (n && n.id !== t) {
        let { data: e, error: r } = await $.from(`followers`)
          .select(`*`)
          .eq(`following_user_id`, n.id)
          .eq(`followed_user_id`, t)
          .maybeSingle();
        r || (l = !!e);
      }
      return { ...r, followers: a || 0, following: s || 0, is_following: l };
    }
    static async uploadAvatar(e, t) {
      let n = e.name.split(`.`).pop(),
        r = `${t}/${Date.now()}.${n}`,
        { data: i, error: a } = await $.storage
          .from(`avatars`)
          .upload(r, e, { upsert: !0 });
      if (a) throw a;
      return i;
    }
    static async getCurrentUser() {
      let { data: e } = await $.auth.getUser();
      return e.user ?? null;
    }
    static async getSession() {
      let { data: e } = await $.auth.getSession();
      return e.session ?? null;
    }
    static onAuthStateChange(e) {
      return $.auth.onAuthStateChange(e);
    }
  };
