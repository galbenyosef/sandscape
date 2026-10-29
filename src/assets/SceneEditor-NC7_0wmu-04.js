// SceneEditor-NC7_0wmu 04 — register
// Lines 2564-2858 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function cr(e, t) {
  if (t === 0)
    return (
      console.warn(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`,
      ),
      e
    );
  if (t === 2 || t === 1) {
    let n = e.getIndex();
    if (n === null) {
      let t = [],
        r = e.getAttribute(`position`);
      if (r !== void 0) {
        for (let e = 0; e < r.count; e++) t.push(e);
        (e.setIndex(t), (n = e.getIndex()));
      } else
        return (
          console.error(
            `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`,
          ),
          e
        );
    }
    let r = n.count - 2,
      i = [];
    if (t === 2)
      for (let e = 1; e <= r; e++)
        (i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1)));
    else
      for (let e = 0; e < r; e++)
        e % 2 == 0
          ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2)))
          : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
    i.length / 3 !== r &&
      console.error(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`,
      );
    let a = e.clone();
    return (a.setIndex(i), a.clearGroups(), a);
  } else
    return (
      console.error(
        `THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,
        t,
      ),
      e
    );
}
function lr(e) {
  let t = new Map(),
    n = new Map(),
    r = e.clone();
  return (
    ur(e, r, function (e, r) {
      (t.set(r, e), n.set(e, r));
    }),
    r.traverse(function (e) {
      if (!e.isSkinnedMesh) return;
      let r = e,
        i = t.get(e),
        a = i.skeleton.bones;
      ((r.skeleton = i.skeleton.clone()),
        r.bindMatrix.copy(i.bindMatrix),
        (r.skeleton.bones = a.map(function (e) {
          return n.get(e);
        })),
        r.bind(r.skeleton, r.bindMatrix));
    }),
    r
  );
}
function ur(e, t, n) {
  n(e, t);
  for (let r = 0; r < e.children.length; r++)
    ur(e.children[r], t.children[r], n);
}
var dr = class extends Ke {
  constructor(e) {
    (super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new vr(e);
      }),
      this.register(function (e) {
        return new yr(e);
      }),
      this.register(function (e) {
        return new Or(e);
      }),
      this.register(function (e) {
        return new kr(e);
      }),
      this.register(function (e) {
        return new Ar(e);
      }),
      this.register(function (e) {
        return new xr(e);
      }),
      this.register(function (e) {
        return new Sr(e);
      }),
      this.register(function (e) {
        return new Cr(e);
      }),
      this.register(function (e) {
        return new wr(e);
      }),
      this.register(function (e) {
        return new _r(e);
      }),
      this.register(function (e) {
        return new Tr(e);
      }),
      this.register(function (e) {
        return new br(e);
      }),
      this.register(function (e) {
        return new Dr(e);
      }),
      this.register(function (e) {
        return new Er(e);
      }),
      this.register(function (e) {
        return new hr(e);
      }),
      this.register(function (e) {
        return new jr(e, mr.EXT_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new jr(e, mr.KHR_MESHOPT_COMPRESSION);
      }),
      this.register(function (e) {
        return new Mr(e);
      }));
  }
  load(e, t, n, r) {
    let i = this,
      a;
    if (this.resourcePath !== ``) a = this.resourcePath;
    else if (this.path !== ``) {
      let t = ue.extractUrlBase(e);
      a = ue.resolveURL(t, this.path);
    } else a = ue.extractUrlBase(e);
    this.manager.itemStart(e);
    let o = function (t) {
        (r ? r(t) : console.error(t),
          i.manager.itemError(e),
          i.manager.itemEnd(e));
      },
      s = new Ye(this.manager);
    (s.setPath(this.path),
      s.setResponseType(`arraybuffer`),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        function (n) {
          try {
            i.parse(
              n,
              a,
              function (n) {
                (t(n), i.manager.itemEnd(e));
              },
              o,
            );
          } catch (e) {
            o(e);
          }
        },
        n,
        o,
      ));
  }
  setDRACOLoader(e) {
    return ((this.dracoLoader = e), this);
  }
  setKTX2Loader(e) {
    return ((this.ktx2Loader = e), this);
  }
  setMeshoptDecoder(e) {
    return ((this.meshoptDecoder = e), this);
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, r) {
    let i,
      a = {},
      o = {},
      s = new TextDecoder();
    if (typeof e == `string`) i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (s.decode(new Uint8Array(e, 0, 4)) === Nr) {
        try {
          a[mr.KHR_BINARY_GLTF] = new Ir(e);
        } catch (e) {
          r && r(e);
          return;
        }
        i = JSON.parse(a[mr.KHR_BINARY_GLTF].content);
      } else i = JSON.parse(s.decode(e));
    else i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      r &&
        r(
          Error(
            `THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`,
          ),
        );
      return;
    }
    let c = new ci(i, {
      path: t || this.resourcePath || ``,
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let e = 0; e < this.pluginCallbacks.length; e++) {
      let t = this.pluginCallbacks[e](c);
      (t.name ||
        console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),
        (o[t.name] = t),
        (a[t.name] = !0));
    }
    if (i.extensionsUsed)
      for (let e = 0; e < i.extensionsUsed.length; ++e) {
        let t = i.extensionsUsed[e],
          n = i.extensionsRequired || [];
        switch (t) {
          case mr.KHR_MATERIALS_UNLIT:
            a[t] = new gr();
            break;
          case mr.KHR_DRACO_MESH_COMPRESSION:
            a[t] = new Lr(i, this.dracoLoader);
            break;
          case mr.KHR_TEXTURE_TRANSFORM:
            a[t] = new Rr();
            break;
          case mr.KHR_MESH_QUANTIZATION:
            a[t] = new zr();
            break;
          default:
            n.indexOf(t) >= 0 &&
              o[t] === void 0 &&
              console.warn(`THREE.GLTFLoader: Unknown extension "` + t + `".`);
        }
      }
    (c.setExtensions(a), c.setPlugins(o), c.parse(n, r));
  }
  parseAsync(e, t) {
    let n = this;
    return new Promise(function (r, i) {
      n.parse(e, t, r, i);
    });
  }
};
function fr() {
  let e = {};
  return {
    get: function (t) {
      return e[t];
    },
    add: function (t, n) {
      e[t] = n;
    },
    remove: function (t) {
      delete e[t];
    },
    removeAll: function () {
      e = {};
    },
  };
}
function pr(e, t, n) {
  let r = e.json.materials[t];
  return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
