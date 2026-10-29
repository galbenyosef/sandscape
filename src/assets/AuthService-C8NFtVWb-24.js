// AuthService-C8NFtVWb 24 — headers
// Lines 11554-11768 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var uo = class extends Ma {
    constructor(e) {
      super(e);
    }
  },
  fo = class {
    constructor(e, t, n) {
      ((this.supabaseUrl = e), (this.supabaseKey = t));
      let r = lo(e);
      if (!t) throw Error(`supabaseKey is required.`);
      ((this.realtimeUrl = new URL(`realtime/v1`, r)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          `http`,
          `ws`,
        )),
        (this.authUrl = new URL(`auth/v1`, r)),
        (this.storageUrl = new URL(`storage/v1`, r)),
        (this.functionsUrl = new URL(`functions/v1`, r)));
      let i = `sb-${r.hostname.split(`.`)[0]}-auth-token`,
        a = {
          db: Ra,
          realtime: Ba,
          auth: Q(Q({}, za), {}, { storageKey: i }),
          global: La,
          tracePropagation: Va,
        },
        o = co(n ?? {}, a);
      ((this.settings = o),
        (this.storageKey = o.auth.storageKey ?? ``),
        (this.headers = o.global.headers ?? {}),
        o.accessToken
          ? ((this.accessToken = o.accessToken),
            (this.auth = new Proxy(
              {},
              {
                get: (e, t) => {
                  throw Error(
                    `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`,
                  );
                },
              },
            )))
          : (this.auth = this._initSupabaseAuthClient(
              o.auth ?? {},
              this.headers,
              o.global.fetch,
            )),
        (this.fetch = io(
          t,
          e,
          this._getAccessToken.bind(this),
          o.global.fetch,
          o.tracePropagation,
        )),
        (this.realtime = this._initRealtimeClient(
          Q(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
              fetch: this.fetch,
            },
            o.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((e) => this.realtime.setAuth(e))
            .catch((e) =>
              console.warn(`Failed to set initial Realtime auth token:`, e),
            ),
        (this.rest = new kt(new URL(`rest/v1`, r).href, {
          headers: this.headers,
          schema: o.db.schema,
          fetch: this.fetch,
          timeout: o.db.timeout,
          urlLengthLimit: o.db.urlLengthLimit,
        })),
        (this.storage = new Rr(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          n?.storage,
        )),
        o.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new ut(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, n = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(e, t, n);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var e = this;
      if (e.accessToken) return await e.accessToken();
      let { data: t } = await e.auth.getSession();
      return t.session?.access_token ?? e.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: n,
        storage: r,
        userStorage: i,
        storageKey: a,
        flowType: o,
        lock: s,
        debug: c,
        throwOnError: l,
        experimental: u,
        lockAcquireTimeout: d,
        skipAutoInitialize: f,
      },
      p,
      m,
    ) {
      let h = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new uo({
        url: this.authUrl.href,
        headers: Q(Q({}, h), p),
        storageKey: a,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: n,
        storage: r,
        userStorage: i,
        flowType: o,
        lock: s,
        debug: c,
        throwOnError: l,
        experimental: u,
        fetch: m,
        lockAcquireTimeout: d,
        skipAutoInitialize: f,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (e) => e.toLowerCase() === `authorization`,
        ),
      });
    }
    _initRealtimeClient(e) {
      return new Vn(
        this.realtimeUrl.href,
        Q(
          Q({}, e),
          {},
          { params: Q(Q({}, { apikey: this.supabaseKey }), e?.params) },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((e, t) => {
        this._handleTokenChanged(e, `CLIENT`, t?.access_token);
      });
    }
    _handleTokenChanged(e, t, n) {
      (e === `TOKEN_REFRESHED` || e === `SIGNED_IN`) &&
      this.changedAccessToken !== n
        ? ((this.changedAccessToken = n), this.realtime.setAuth(n))
        : e === `SIGNED_OUT` &&
          (this.realtime.setAuth(),
          t == `STORAGE` && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  },
  po = (e, t, n) => new fo(e, t, n);
function mo() {
  if (typeof window < `u`) return !1;
  let e = globalThis.process;
  if (!e) return !1;
  let t = e.version;
  if (t == null) return !1;
  let n = t.match(/^v(\d+)\./);
  return n ? parseInt(n[1], 10) <= 18 : !1;
}
mo() &&
  console.warn(
    `⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217`,
  );
function ho(e, t) {
  return e || t;
}
var go = /^[A-Za-z0-9][A-Za-z0-9_-]{2,29}$/;
function _o(e) {
  return e.trim();
}
function vo(e) {
  return go.test(_o(e));
}
var yo = ho(`https://rdfaagiybxrefnekhwrk.supabase.co`, ``),
  bo = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZmFhZ2l5YnhyZWZuZWtod3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5MTcxNTEsImV4cCI6MjA4MTI3NzE1MX0.Uyk_skyMi86r6Oav1vAhFjYqDM655uaoHgpom9FB-xQ`;
if (!yo) throw Error(`Supabase environment variables are not set`);
