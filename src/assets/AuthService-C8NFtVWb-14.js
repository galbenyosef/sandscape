// AuthService-C8NFtVWb 14 — client
// Lines 5102-5451 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
function Un(e, t, n) {
  let r = new URL(t, e);
  if (n)
    for (let [e, t] of Object.entries(n))
      t !== void 0 && r.searchParams.set(e, t);
  return r.toString();
}
async function Wn(e) {
  return !e || e.type === `none`
    ? {}
    : e.type === `bearer`
      ? { Authorization: `Bearer ${e.token}` }
      : e.type === `header`
        ? { [e.name]: e.value }
        : e.type === `custom`
          ? await e.getHeaders()
          : {};
}
function Gn(e) {
  let t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: n, path: r, query: i, body: a, headers: o }) {
      let s = Un(e.baseUrl, r, i),
        c = await Wn(e.auth),
        l = await t(s, {
          method: n,
          headers: {
            ...(a ? { "Content-Type": `application/json` } : {}),
            ...c,
            ...o,
          },
          body: a ? JSON.stringify(a) : void 0,
        }),
        u = await l.text(),
        d = (l.headers.get(`content-type`) || ``).includes(`application/json`),
        f = d && u ? JSON.parse(u) : u;
      if (!l.ok) {
        let e = d ? f : void 0,
          t = e?.error;
        throw new Hn(t?.message ?? `Request failed with status ${l.status}`, {
          status: l.status,
          icebergType: t?.type,
          icebergCode: t?.code,
          details: e,
        });
      }
      return { status: l.status, headers: l.headers, data: f };
    },
  };
}
function Kn(e) {
  return e.join(``);
}
var qn = class {
  constructor(e, t = ``) {
    ((this.client = e), (this.prefix = t));
  }
  async listNamespaces(e) {
    let t = e ? { parent: Kn(e.namespace) } : void 0;
    return (
      await this.client.request({
        method: `GET`,
        path: `${this.prefix}/namespaces`,
        query: t,
      })
    ).data.namespaces.map((e) => ({ namespace: e }));
  }
  async createNamespace(e, t) {
    let n = { namespace: e.namespace, properties: t?.properties };
    return (
      await this.client.request({
        method: `POST`,
        path: `${this.prefix}/namespaces`,
        body: n,
      })
    ).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: `DELETE`,
      path: `${this.prefix}/namespaces/${Kn(e.namespace)}`,
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (
        await this.client.request({
          method: `GET`,
          path: `${this.prefix}/namespaces/${Kn(e.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(e) {
    try {
      return (
        await this.client.request({
          method: `HEAD`,
          path: `${this.prefix}/namespaces/${Kn(e.namespace)}`,
        }),
        !0
      );
    } catch (e) {
      if (e instanceof Hn && e.status === 404) return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (e) {
      if (e instanceof Hn && e.status === 409) return;
      throw e;
    }
  }
};
function Jn(e) {
  return e.join(``);
}
var Yn = class {
    constructor(e, t = ``, n) {
      ((this.client = e), (this.prefix = t), (this.accessDelegation = n));
    }
    async listTables(e) {
      return (
        await this.client.request({
          method: `GET`,
          path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(e, t) {
      let n = {};
      return (
        this.accessDelegation &&
          (n[`X-Iceberg-Access-Delegation`] = this.accessDelegation),
        (
          await this.client.request({
            method: `POST`,
            path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables`,
            body: t,
            headers: n,
          })
        ).data.metadata
      );
    }
    async updateTable(e, t) {
      let n = await this.client.request({
        method: `POST`,
        path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables/${e.name}`,
        body: t,
      });
      return {
        "metadata-location": n.data[`metadata-location`],
        metadata: n.data.metadata,
      };
    }
    async dropTable(e, t) {
      await this.client.request({
        method: `DELETE`,
        path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables/${e.name}`,
        query: { purgeRequested: String(t?.purge ?? !1) },
      });
    }
    async loadTable(e) {
      let t = {};
      return (
        this.accessDelegation &&
          (t[`X-Iceberg-Access-Delegation`] = this.accessDelegation),
        (
          await this.client.request({
            method: `GET`,
            path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables/${e.name}`,
            headers: t,
          })
        ).data.metadata
      );
    }
    async tableExists(e) {
      let t = {};
      this.accessDelegation &&
        (t[`X-Iceberg-Access-Delegation`] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: `HEAD`,
            path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables/${e.name}`,
            headers: t,
          }),
          !0
        );
      } catch (e) {
        if (e instanceof Hn && e.status === 404) return !1;
        throw e;
      }
    }
    async createTableIfNotExists(e, t) {
      try {
        return await this.createTable(e, t);
      } catch (n) {
        if (n instanceof Hn && n.status === 409)
          return await this.loadTable({ namespace: e.namespace, name: t.name });
        throw n;
      }
    }
  },
  Xn = class {
    constructor(e) {
      let t = `v1`;
      e.catalogName && (t += `/${e.catalogName}`);
      let n = e.baseUrl.endsWith(`/`) ? e.baseUrl : `${e.baseUrl}/`;
      ((this.client = Gn({ baseUrl: n, auth: e.auth, fetchImpl: e.fetch })),
        (this.accessDelegation = e.accessDelegation?.join(`,`)),
        (this.namespaceOps = new qn(this.client, t)),
        (this.tableOps = new Yn(this.client, t, this.accessDelegation)));
    }
    async listNamespaces(e) {
      return this.namespaceOps.listNamespaces(e);
    }
    async createNamespace(e, t) {
      return this.namespaceOps.createNamespace(e, t);
    }
    async dropNamespace(e) {
      await this.namespaceOps.dropNamespace(e);
    }
    async loadNamespaceMetadata(e) {
      return this.namespaceOps.loadNamespaceMetadata(e);
    }
    async listTables(e) {
      return this.tableOps.listTables(e);
    }
    async createTable(e, t) {
      return this.tableOps.createTable(e, t);
    }
    async updateTable(e, t) {
      return this.tableOps.updateTable(e, t);
    }
    async dropTable(e, t) {
      await this.tableOps.dropTable(e, t);
    }
    async loadTable(e) {
      return this.tableOps.loadTable(e);
    }
    async namespaceExists(e) {
      return this.namespaceOps.namespaceExists(e);
    }
    async tableExists(e) {
      return this.tableOps.tableExists(e);
    }
    async createNamespaceIfNotExists(e, t) {
      return this.namespaceOps.createNamespaceIfNotExists(e, t);
    }
    async createTableIfNotExists(e, t) {
      return this.tableOps.createTableIfNotExists(e, t);
    }
  };
function Zn(e) {
  "@babel/helpers - typeof";
  return (
    (Zn =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Zn(e)
  );
}
function Qn(e, t) {
  if (Zn(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Zn(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function $n(e) {
  var t = Qn(e, `string`);
  return Zn(t) == `symbol` ? t : t + ``;
}
function er(e, t, n) {
  return (
    (t = $n(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tr(Object(n), !0).forEach(function (t) {
          er(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tr(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var nr = class extends Error {
  constructor(e, t = `storage`, n, r) {
    (super(e),
      (this.__isStorageError = !0),
      (this.namespace = t),
      (this.name = t === `vectors` ? `StorageVectorsError` : `StorageError`),
      (this.status = n),
      (this.statusCode = r));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
};
function rr(e) {
  return typeof e == `object` && !!e && `__isStorageError` in e;
}
