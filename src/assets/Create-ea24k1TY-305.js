// Create-ea24k1TY 305 — current
// Lines 107612-107912 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Nye(e) {
  let {
      assets: t,
      assetsLoaded: n,
      openEditorTab: r,
      toast: i,
      isMobile: a,
      showAssetsFolder: o,
    } = e,
    s = (0, X.useMemo)(
      () => new URLSearchParams(window.location.search).get(`asset`),
      [],
    ),
    c = (0, X.useRef)(!1);
  (0, X.useEffect)(() => {
    if (!s || c.current || !n) return;
    c.current = !0;
    let e = t.find((e) => e.id === s || e.asset_name === s);
    if (!e) {
      (console.warn(`[deep-link] Unknown asset id: ${s}`),
        i({
          title: `Asset not found`,
          description: `This session has no asset ${s}.`,
        }));
      return;
    }
    if (a) {
      (o(),
        i({
          title: e.asset_name,
          description: `Opened in the Assets folder. Editors are desktop only.`,
        }));
      return;
    }
    r(pf(e.asset_type, e) ?? `assets`, { assetId: e.id ?? e.asset_name });
  }, [s, t, n, r, i, a, o]);
}
function Pye(e) {
  let {
      sessionInfo: t,
      sessionDir: n,
      user: r,
      profileUsername: i,
      sessionUserCount: a,
      leftPanelRef: o,
      setError: s,
      loadSessionData: c,
    } = e,
    [l, u] = (0, X.useState)([]),
    [d, f] = (0, X.useState)(``),
    [p, m] = (0, X.useState)(!1),
    h = (0, X.useRef)(!1),
    [g, _] = (0, X.useState)(`Ready`),
    [v, y] = (0, X.useState)(null),
    b = (0, X.useRef)(null),
    x = (0, X.useCallback)((e) => {
      setTimeout(() => {
        if (b.current) {
          let e = b.current.querySelector(`[data-radix-scroll-area-viewport]`);
          e && (e.scrollTop = e.scrollHeight);
        }
      }, e);
    }, []),
    [S, C] = (0, X.useState)(!1),
    [w, T] = (0, X.useState)(0),
    [E, D] = (0, X.useState)(0),
    O = (0, X.useCallback)(() => {
      u((e) => e.filter((e) => !e.isLoading));
    }, []),
    k = (0, X.useCallback)(
      (e) => {
        (O(), h.current || m(!1));
        let t = {
          id: NV(),
          userId: `ai-assistant`,
          userName: fe,
          text: e.message || e.text || `I received your message.`,
          timestamp: new Date().toISOString(),
          isAI: !0,
          background_workflow: e.background_tasks || e.background_workflow,
        };
        (u((e) => [...e, t]),
          _(`Ready`),
          x(50),
          e.background_workflow && n && setTimeout(() => c(n), 2e3));
      },
      [O, n, c],
    ),
    A = async (e) => {
      let n = e || d.trim();
      if (!n || !t) return;
      let o = n.startsWith(`@suggest `),
        c = o ? n.substring(9) : n,
        l = {
          id: NV(),
          userId: r?.id ?? `unknown`,
          userName:
            i ?? r?.user_metadata?.username ?? r?.email?.split(`@`)[0] ?? `You`,
          text: c,
          timestamp: new Date().toISOString(),
          isSuggestion: o,
          upvotes: o ? 0 : void 0,
          downvotes: o ? 0 : void 0,
          replyToId: v?.id,
          replyToUserName: v?.userName,
          isAI: !1,
        };
      (u((e) => [...e, l]), e || f(``), y(null), x(50));
      let p = !(a > 1) || c.toLowerCase().includes(`@sandscape`);
      p && (m(!0), _(`AI is thinking...`));
      let h = {
        id: `loading-${Date.now()}`,
        userId: `ai-assistant`,
        userName: fe,
        text: `Thinking...`,
        timestamp: new Date().toISOString(),
        isAI: !0,
        isLoading: !0,
      };
      p && u((e) => [...e, h]);
      try {
        let e = await kr.sendMessage(t.session_id, c);
        e.success ||
          (O(),
          m(!1),
          _(`Ready`),
          s({
            code: `NETWORK_CONNECTION_FAILED`,
            category: `network`,
            message: e.error || `Failed to send message`,
            recoverable: !0,
            timestamp: new Date().toISOString(),
          }));
      } catch (e) {
        (console.error(`Failed to send message:`, e),
          O(),
          m(!1),
          _(`Connection error`),
          s({
            code: `NETWORK_CONNECTION_FAILED`,
            category: `network`,
            message: `Failed to send message`,
            recoverable: !0,
            timestamp: new Date().toISOString(),
          }));
      }
    },
    j = (0, X.useCallback)(
      async (e, n, r) => {
        u((t) =>
          t.map((t) =>
            t.id === e && !t.selectedOptionId
              ? { ...t, selectedOptionId: n, selectedOptionLabel: r }
              : t,
          ),
        );
        let i = () => {
          u((t) =>
            t.map((t) =>
              t.id === e && t.selectedOptionId === n
                ? {
                    ...t,
                    selectedOptionId: void 0,
                    selectedOptionLabel: void 0,
                  }
                : t,
            ),
          );
        };
        if (t) {
          (m(!0), _(`AI is thinking...`));
          try {
            let e = await kr.sendMessage(t.session_id, r);
            e.success ||
              (i(),
              m(!1),
              _(`Ready`),
              s({
                code: `NETWORK_CONNECTION_FAILED`,
                category: `network`,
                message: e.error || `Failed to send inquiry answer`,
                recoverable: !0,
                timestamp: new Date().toISOString(),
              }));
          } catch (e) {
            (console.error(`Failed to send inquiry answer:`, e),
              i(),
              m(!1),
              _(`Connection error`),
              s({
                code: `NETWORK_CONNECTION_FAILED`,
                category: `network`,
                message: `Failed to send inquiry answer`,
                recoverable: !0,
                timestamp: new Date().toISOString(),
              }));
          }
        }
      },
      [t],
    );
  return (
    (0, X.useEffect)(() => {
      if (!Nn()) return;
      let e,
        t = wr((t, n) => {
          if (t !== `tour:on-enter`) return;
          let r = Er(n);
          !r ||
            r.kind !== `chat-draft` ||
            !r.arg ||
            (f(r.arg),
            o.current?.isCollapsed() && o.current.expand(),
            clearTimeout(e),
            (e = setTimeout(() => {
              let e = document.querySelector(`textarea[data-chat-composer]`);
              e &&
                (e.focus(),
                e.setSelectionRange(e.value.length, e.value.length));
            }, 100)));
        });
      return () => {
        (clearTimeout(e), t());
      };
    }, [o]),
    {
      messages: l,
      setMessages: u,
      newMessage: d,
      setNewMessage: f,
      isTyping: p,
      setIsTyping: m,
      chatStatus: g,
      setChatStatus: _,
      isInquiryThinking: h,
      replyToMessage: v,
      setReplyToMessage: y,
      inquiryActive: S,
      setInquiryActive: C,
      inquiryTotal: w,
      setInquiryTotal: T,
      inquiryCurrentIndex: E,
      setInquiryCurrentIndex: D,
      scrollAreaRef: b,
      scrollChatToBottom: x,
      removeLoadingMessages: O,
      handleChatResponse: k,
      handleSendMessage: A,
      handleInquiryAnswer: j,
      handleReplyToMessage: (e) => {
        y(e);
        let t = document.querySelector(
          `textarea[placeholder*="Type your message"]`,
        );
        t && t.focus();
      },
      handleVote: (e, t) => {
        u((n) =>
          n.map((n) => {
            if (n.id === e && n.isSuggestion) {
              let e = { ...n };
              return (
                t === `up`
                  ? (e.upvotes = (e.upvotes || 0) + 1)
                  : (e.downvotes = (e.downvotes || 0) + 1),
                e
              );
            }
            return n;
          }),
        );
      },
      handleChatAboutNode: (e) => {
        let t = `@${e.replace(/-/g, `_`)} `;
        (f((e) => (e ? `${e}${t}` : t)),
          o.current?.isCollapsed() && o.current.expand(),
          setTimeout(() => {
            let e = document.querySelector(`textarea[data-chat-composer]`);
            e &&
              (e.focus(), e.setSelectionRange(e.value.length, e.value.length));
          }, 100));
      },
    }
  );
}
function Fye(e, t, n) {
  return n === `in-progress` ? !1 : (e.set(t, n ?? `available`), !0);
}
function Iye(e, t, n) {
  if (!n) return null;
  let r = e.get(t);
  return r === void 0 ? null : (e.delete(t), r);
}
function Lye(e, t, n) {
  let r = e.get(t);
  return r === void 0
    ? n === void 0 || n === `in-progress`
      ? `available`
      : n
    : (e.delete(t), r);
}
