// assets__Create-ea24k1TY 301 — current
// Lines 106617-106869 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function gye(e, t) {
  let n = (0, X.useRef)(!1);
  ((0, X.useEffect)(() => {
    let e = () => {
      n.current && ((n.current = !1), t(null));
    };
    return (
      window.addEventListener(`popstate`, e),
      () => window.removeEventListener(`popstate`, e)
    );
  }, [t]),
    (0, X.useEffect)(() => {
      let t = window.history.state?.mobileNode === !0;
      if (e && !n.current) {
        if (t) {
          n.current = !0;
          return;
        }
        let e = window.history.state ?? {};
        (window.history.pushState(
          { ...e, idx: (e.idx ?? 0) + 1, mobileNode: !0 },
          ``,
        ),
          (n.current = !0));
      } else
        !e && n.current
          ? ((n.current = !1), window.history.back())
          : !e &&
            t &&
            (window.history.replaceState(
              { ...window.history.state, mobileNode: !1 },
              ``,
            ),
            window.history.back());
    }, [e]));
}
function _ye({
  headerTab: e,
  stageInner: t,
  gameInner: n,
  leftPanelRef: r,
  transcript: i,
  composer: a,
}) {
  let o = (0, X.useRef)(null),
    [s, c] = (0, X.useState)(92),
    l = (0, X.useCallback)((e) => c(e), []),
    u = (0, X.useCallback)(() => {
      o.current?.collapse();
    }, []),
    { treeState: d, selectNode: f } = Pc();
  gye(d.selectedNodeId, f);
  let p = !!d.selectedNodeId && d.nodes.has(d.selectedNodeId);
  return (
    (0, X.useEffect)(() => {
      e === `game` && o.current?.collapse();
    }, [e]),
    (0, X.useEffect)(() => {
      let e = {
        expand: () => o.current?.open(),
        collapse: () => o.current?.collapse(),
        isCollapsed: () => o.current?.detent === `peek`,
        isExpanded: () => o.current?.detent !== `peek`,
        getId: () => `mobile-chat-sheet`,
        getSize: () => 0,
        resize: () => {},
      };
      return (
        (r.current = e),
        () => {
          r.current === e && (r.current = null);
        }
      );
    }, [r]),
    (0, Z.jsxs)(`div`, {
      className: `flex flex-1 min-h-0 flex-col overflow-hidden`,
      children: [
        e !== `game` && (0, Z.jsx)(mye, {}),
        (0, Z.jsxs)(`div`, {
          className: `relative flex-1 min-h-0 overflow-hidden`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `absolute inset-0`,
              onPointerDownCapture: u,
              style: {
                paddingBottom: s,
                display: e === `game` ? `none` : void 0,
              },
              children: t,
            }),
            e === `game` &&
              (0, Z.jsx)(`div`, {
                className: `absolute inset-0 p-2`,
                onPointerDownCapture: u,
                style: { paddingBottom: s },
                children: n,
              }),
            e !== `game` && !p && (0, Z.jsx)(hye, { bottom: s + 12 }),
            (0, Z.jsx)(pye, {
              ref: o,
              transcript: i,
              composer: a,
              onPeekHeightChange: l,
              handleOnly: e === `game`,
            }),
          ],
        }),
      ],
    })
  );
}
function vye() {
  let [e, t] = (0, X.useState)(new Map()),
    n = (0, X.useRef)(new Map());
  return {
    tasks: e,
    addTask: (0, X.useCallback)((e, r) => {
      t((i) => {
        if (i.has(e)) return i;
        let a = {
            taskId: e,
            title: r.title,
            name: r.name,
            description: r.description || `Processing...`,
            status: `running`,
            startTime: Date.now(),
            type: r.type,
          },
          o = new Map(i);
        o.set(e, a);
        let s = setInterval(() => {
          t((r) => {
            let i = r.get(e);
            if (i && i.status === `running`) {
              if (Date.now() - i.startTime > 2700 * 1e3) {
                let a = new Map(r),
                  o = {
                    ...i,
                    status: `failed`,
                    completedTime: Date.now(),
                    errorMessage: `Task appears stuck — check session for results`,
                  };
                return (
                  a.set(e, o),
                  clearInterval(s),
                  n.current.delete(e),
                  setTimeout(() => {
                    t((t) => {
                      let n = new Map(t);
                      return (n.delete(e), n);
                    });
                  }, 1e4),
                  a
                );
              }
              return new Map(r);
            } else return (clearInterval(s), n.current.delete(e), r);
          });
        }, 1e3);
        return (n.current.set(e, s), o);
      });
    }, []),
    completeTask: (0, X.useCallback)((e, r) => {
      t((r) => {
        let i = new Map(r),
          a = i.get(e);
        if (a) {
          let r = n.current.get(e);
          (r && (clearInterval(r), n.current.delete(e)),
            (a.status = `completed`),
            (a.completedTime = Date.now()),
            i.set(e, a),
            setTimeout(() => {
              t((t) => {
                let n = new Map(t);
                return (n.delete(e), n);
              });
            }, 3e3));
        }
        return i;
      });
    }, []),
    failTask: (0, X.useCallback)((e, r) => {
      t((i) => {
        let a = new Map(i),
          o = a.get(e);
        if (o) {
          let i = n.current.get(e);
          (i && (clearInterval(i), n.current.delete(e)),
            (o.status = `failed`),
            (o.completedTime = Date.now()),
            (o.errorMessage = r),
            a.set(e, o),
            setTimeout(() => {
              t((t) => {
                let n = new Map(t);
                return (n.delete(e), n);
              });
            }, 1e4));
        }
        return a;
      });
    }, []),
    clearAllTasks: (0, X.useCallback)(() => {
      (n.current.forEach((e) => clearInterval(e)),
        n.current.clear(),
        t(new Map()));
    }, []),
    hasTask: (0, X.useCallback)((t) => e.has(t), [e]),
  };
}
function yye(e) {
  let t = 2e4,
    [n, r] = (0, X.useState)(e),
    [i, a] = (0, X.useState)(!1),
    [o, s] = (0, X.useState)(`Analyzing your idea...`),
    [c, l] = (0, X.useState)(0),
    u = (0, X.useRef)(0);
  return (
    (0, X.useEffect)(() => {
      if (!n) return;
      let e = [
          `Analyzing your idea...`,
          `Expanding on concept...`,
          `Refining details...`,
          `Formulating questions...`,
          `Preparing your workspace...`,
          `Almost ready...`,
        ],
        i = t / e.length,
        o = setTimeout(() => a(!0), 400),
        c = setInterval(() => {
          ((u.current = Math.min(u.current + 1, e.length - 1)),
            s(e[u.current]));
        }, i),
        d = Date.now(),
        f = setInterval(() => {
          let e = Date.now() - d;
          l(Math.min(e / t, 1));
        }, 200),
        p = setTimeout(() => r(!1), t);
      return () => {
        (clearTimeout(o), clearInterval(c), clearInterval(f), clearTimeout(p));
      };
    }, [n]),
    {
      showEntryOverlay: n,
      overlayContentVisible: i,
      overlayText: o,
      overlayProgress: c,
    }
  );
}
