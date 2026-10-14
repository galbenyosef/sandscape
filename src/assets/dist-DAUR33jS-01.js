// dist-DAUR33jS 01 — size
// Lines 1-297 of readable/assets/dist-DAUR33jS.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { i as r } from "./dist-CA4uZW3H.js";
import { f as i, m as a } from "./AuthService-CQeU_0bQ.js";
var o = e(t(), 1),
  s = n(),
  c = Object.defineProperty,
  l = (e, t) => c(e, `name`, { value: t, configurable: !0 });
function u(e) {
  let t = e + `CollectionProvider`,
    [n, c] = r(t),
    [u, d] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    f = l((e) => {
      let { scope: t, children: n } = e,
        r = o.useRef(null),
        i = o.useRef(new Map()).current;
      return (0, s.jsx)(u, {
        scope: t,
        itemMap: i,
        collectionRef: r,
        children: n,
      });
    }, `CollectionProvider`);
  f.displayName = t;
  let p = e + `CollectionSlot`,
    m = i(p),
    h = o.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = a(t, d(p, n).collectionRef);
      return (0, s.jsx)(m, { ref: i, children: r });
    });
  h.displayName = p;
  let g = e + `CollectionItemSlot`,
    _ = `data-radix-collection-item`,
    v = i(g),
    y = o.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        c = o.useRef(null),
        l = a(t, c),
        u = d(g, n);
      return (
        o.useEffect(
          () => (
            u.itemMap.set(c, { ref: c, ...i }),
            () => void u.itemMap.delete(c)
          ),
        ),
        (0, s.jsx)(v, { [_]: ``, ref: l, children: r })
      );
    });
  y.displayName = g;
  function b(t) {
    let n = d(e + `CollectionConsumer`, t);
    return o.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${_}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return (l(b, `useCollection`), [{ Provider: f, Slot: h, ItemSlot: y }, b, c]);
}
l(u, `createCollection`);
var d = new WeakMap(),
  f = class e extends Map {
    static {
      l(this, `OrderedDict`);
    }
    #e;
    constructor(e) {
      (super(e), (this.#e = [...super.keys()]), d.set(this, !0));
    }
    set(e, t) {
      return (
        d.get(this) &&
          (this.has(e) ? (this.#e[this.#e.indexOf(e)] = e) : this.#e.push(e)),
        super.set(e, t),
        this
      );
    }
    insert(e, t, n) {
      let r = this.has(t),
        i = this.#e.length,
        a = h(e),
        o = a >= 0 ? a : i + a,
        s = o < 0 || o >= i ? -1 : o;
      if (s === this.size || (r && s === this.size - 1) || s === -1)
        return (this.set(t, n), this);
      let c = this.size + +!r;
      a < 0 && o++;
      let l = [...this.#e],
        u,
        d = !1;
      for (let e = o; e < c; e++)
        if (o === e) {
          let i = l[e];
          (l[e] === t && (i = l[e + 1]),
            r && this.delete(t),
            (u = this.get(i)),
            this.set(t, n));
        } else {
          !d && l[e - 1] === t && (d = !0);
          let n = l[d ? e : e - 1],
            r = u;
          ((u = this.get(n)), this.delete(n), this.set(n, r));
        }
      return this;
    }
    with(t, n, r) {
      let i = new e(this);
      return (i.insert(t, n, r), i);
    }
    before(e) {
      let t = this.#e.indexOf(e) - 1;
      if (!(t < 0)) return this.entryAt(t);
    }
    setBefore(e, t, n) {
      let r = this.#e.indexOf(e);
      return r === -1 ? this : this.insert(r, t, n);
    }
    after(e) {
      let t = this.#e.indexOf(e);
      if (((t = t === -1 || t === this.size - 1 ? -1 : t + 1), t !== -1))
        return this.entryAt(t);
    }
    setAfter(e, t, n) {
      let r = this.#e.indexOf(e);
      return r === -1 ? this : this.insert(r + 1, t, n);
    }
    first() {
      return this.entryAt(0);
    }
    last() {
      return this.entryAt(-1);
    }
    clear() {
      return ((this.#e = []), super.clear());
    }
    delete(e) {
      let t = super.delete(e);
      return (t && this.#e.splice(this.#e.indexOf(e), 1), t);
    }
    deleteAt(e) {
      let t = this.keyAt(e);
      return t !== void 0 && this.delete(t);
    }
    at(e) {
      let t = p(this.#e, e);
      if (t !== void 0) return this.get(t);
    }
    entryAt(e) {
      let t = p(this.#e, e);
      if (t !== void 0) return [t, this.get(t)];
    }
    indexOf(e) {
      return this.#e.indexOf(e);
    }
    keyAt(e) {
      return p(this.#e, e);
    }
    from(e, t) {
      let n = this.indexOf(e);
      if (n === -1) return;
      let r = n + t;
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.at(r)
      );
    }
    keyFrom(e, t) {
      let n = this.indexOf(e);
      if (n === -1) return;
      let r = n + t;
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.keyAt(r)
      );
    }
    find(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return r;
        n++;
      }
    }
    findIndex(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return n;
        n++;
      }
      return -1;
    }
    filter(t, n) {
      let r = [],
        i = 0;
      for (let e of this) (Reflect.apply(t, n, [e, i, this]) && r.push(e), i++);
      return new e(r);
    }
    map(t, n) {
      let r = [],
        i = 0;
      for (let e of this)
        (r.push([e[0], Reflect.apply(t, n, [e, i, this])]), i++);
      return new e(r);
    }
    reduce(...e) {
      let [t, n] = e,
        r = 0,
        i = n ?? this.at(0);
      for (let n of this)
        ((i =
          r === 0 && e.length === 1
            ? n
            : Reflect.apply(t, this, [i, n, r, this])),
          r++);
      return i;
    }
    reduceRight(...e) {
      let [t, n] = e,
        r = n ?? this.at(-1);
      for (let n = this.size - 1; n >= 0; n--) {
        let i = this.at(n);
        r =
          n === this.size - 1 && e.length === 1
            ? i
            : Reflect.apply(t, this, [r, i, n, this]);
      }
      return r;
    }
    toSorted(t) {
      let n = [...this.entries()].sort(t);
      return new e(n);
    }
    toReversed() {
      let t = new e();
      for (let e = this.size - 1; e >= 0; e--) {
        let n = this.keyAt(e),
          r = this.get(n);
        t.set(n, r);
      }
      return t;
    }
    toSpliced(...t) {
      let n = [...this.entries()];
      return (n.splice(...t), new e(n));
    }
    slice(t, n) {
      let r = new e(),
        i = this.size - 1;
      if (t === void 0) return r;
      (t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1));
      for (let e = t; e <= i; e++) {
        let t = this.keyAt(e),
          n = this.get(t);
        r.set(t, n);
      }
      return r;
    }
    every(e, t) {
      let n = 0;
      for (let r of this) {
        if (!Reflect.apply(e, t, [r, n, this])) return !1;
        n++;
      }
      return !0;
    }
    some(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return !0;
        n++;
      }
      return !1;
    }
  };
function p(e, t) {
  if (`at` in Array.prototype) return Array.prototype.at.call(e, t);
  let n = m(e, t);
  return n === -1 ? void 0 : e[n];
}
l(p, `at`);
function m(e, t) {
  let n = e.length,
    r = h(t),
    i = r >= 0 ? r : n + r;
  return i < 0 || i >= n ? -1 : i;
}
l(m, `toSafeIndex`);
function h(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
l(h, `toSafeInteger`);
