// SceneEditor-NC7_0wmu 17 — current
// Lines 7715-7936 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Js() {
  let e = (0, J.useRef)(null);
  return (
    (0, J.useEffect)(() => {
      e.current ||= new qs(
        (e, t, n, r) => {
          X.getState().setHistoryState(e, t, n, r);
        },
        () => {
          X.getState().incrementObjectChangeVersion();
        },
        () => {
          X.getState().incrementSceneGraphVersion();
        },
      );
    }, []),
    {
      historyRef: e,
      execute: (0, J.useCallback)((t) => {
        e.current?.execute(t);
      }, []),
      undo: (0, J.useCallback)(() => {
        e.current?.undo();
      }, []),
      redo: (0, J.useCallback)(() => {
        e.current?.redo();
      }, []),
      clear: (0, J.useCallback)(() => {
        e.current?.clear();
      }, []),
      markClean: (0, J.useCallback)(() => {
        e.current?.markClean();
      }, []),
      isDirty: (0, J.useCallback)(() => e.current?.isDirty ?? !1, []),
    }
  );
}
var Ys = `sandscape-scene-editor-shortcuts`,
  Xs = {
    translate: `v`,
    rotate: `c`,
    scale: `x`,
    toggleGrid: `g`,
    toggleSnap: `n`,
    toggleMagnet: `m`,
    dropToGround: `end`,
    focusSelected: `f`,
    deleteSelected: `delete`,
    undo: `ctrl+z`,
    redo: `ctrl+shift+z`,
    duplicate: `ctrl+d`,
    groupSelection: `ctrl+g`,
    save: `ctrl+s`,
  },
  Zs = new Set([`INPUT`, `TEXTAREA`, `SELECT`]),
  Qs = { translate: `w`, rotate: `e`, scale: `r` };
function $s() {
  try {
    let e = localStorage.getItem(Ys);
    if (e) {
      let t = JSON.parse(e),
        n = !1;
      for (let [e, r] of Object.entries(Qs))
        t[e] === r && (delete t[e], (n = !0));
      return (
        n && localStorage.setItem(Ys, JSON.stringify(t)),
        { ...Xs, ...t }
      );
    }
  } catch {}
  return { ...Xs };
}
function ec(e) {
  let t = [];
  ((e.ctrlKey || e.metaKey) && t.push(`ctrl`),
    e.shiftKey && t.push(`shift`),
    e.altKey && t.push(`alt`));
  let n = e.key.toLowerCase();
  return (
    n !== `control` &&
      n !== `shift` &&
      n !== `alt` &&
      n !== `meta` &&
      t.push(n),
    t.join(`+`)
  );
}
function tc({ containerRef: e, onAction: t, enabled: n = !0 }) {
  let [r, i] = (0, J.useState)($s),
    a = (0, J.useRef)(r),
    o = (0, J.useRef)(t);
  ((a.current = r), (o.current = t));
  let s = (0, J.useRef)(new Map());
  return (
    (0, J.useEffect)(() => {
      let e = new Map();
      for (let [t, n] of Object.entries(a.current)) e.set(n, t);
      s.current = e;
    }, [r]),
    (0, J.useEffect)(() => {
      let t = e.current;
      if (!t || !n) return;
      let r = (e) => {
        let n = e.target;
        if (
          Zs.has(n.tagName) ||
          n.isContentEditable ||
          !(
            t.contains(n) ||
            n === document.body ||
            n.closest?.(`[data-editor-shortcut-scope]`)
          )
        )
          return;
        let r = ec(e),
          i = s.current.get(r);
        i && (e.preventDefault(), e.stopPropagation(), o.current(i));
      };
      return (
        document.addEventListener(`keydown`, r),
        () => document.removeEventListener(`keydown`, r)
      );
    }, [e, n]),
    {
      shortcuts: r,
      setShortcut: (0, J.useCallback)((e, t) => {
        i((n) => {
          let r = { ...n, [e]: t };
          try {
            localStorage.setItem(Ys, JSON.stringify(r));
          } catch {}
          return r;
        });
      }, []),
    }
  );
}
function nc({ isDirty: e, onSave: t, debounceMs: n = 3e3, enabled: r = !0 }) {
  let i = (0, J.useRef)(null),
    a = (0, J.useRef)(!1),
    o = (0, J.useRef)(t),
    s = (0, J.useRef)(e),
    c = (0, J.useRef)(0);
  ((o.current = t), (s.current = e));
  let l = X((e) => e.objectChangeVersion),
    u = X((e) => e.sceneGraphVersion),
    d = X((e) => e.setSaveState),
    f = (0, J.useRef)(d);
  f.current = d;
  let p = (0, J.useCallback)(async () => {
      ((a.current = !0), f.current(`saving`));
      try {
        return (await o.current(), (c.current = 0), f.current(`idle`), !0);
      } catch (e) {
        let t = e instanceof Error ? e.message : String(e);
        return (
          console.error(`[useAutoSave] save failed:`, e),
          f.current(`error`, t),
          !1
        );
      } finally {
        a.current = !1;
      }
    }, []),
    m = (0, J.useCallback)(
      (e) => {
        (i.current && clearTimeout(i.current),
          (i.current = setTimeout(async () => {
            if (((i.current = null), a.current)) {
              m();
              return;
            }
            s.current() &&
              ((await p())
                ? s.current() && m()
                : ((c.current = Math.min(Math.max(c.current * 2, n * 2), 3e4)),
                  m(c.current)));
          }, e ?? n)));
      },
      [n, p],
    );
  (0, J.useEffect)(() => {
    r && ((l === 0 && u === 0) || (s.current() && m()));
  }, [l, u, r, m]);
  let h = (0, J.useCallback)(async () => {
    ((i.current &&= (clearTimeout(i.current), null)),
      !a.current && s.current() && ((await p()) || m(c.current || n)));
  }, [p, m, n]);
  ((0, J.useEffect)(() => {
    if (!r) return;
    let e = () => {
        document.visibilityState === `hidden` && h();
      },
      t = () => {
        h();
      };
    return (
      document.addEventListener(`visibilitychange`, e),
      window.addEventListener(`pagehide`, t),
      () => {
        (document.removeEventListener(`visibilitychange`, e),
          window.removeEventListener(`pagehide`, t));
      }
    );
  }, [r, h]),
    (0, J.useEffect)(() => {
      if (!r) return;
      let e = (e) => {
        s.current() && (e.preventDefault(), (e.returnValue = ``));
      };
      return (
        window.addEventListener(`beforeunload`, e),
        () => window.removeEventListener(`beforeunload`, e)
      );
    }, [r]),
    (0, J.useEffect)(
      () => () => {
        h();
      },
      [h],
    ));
}
