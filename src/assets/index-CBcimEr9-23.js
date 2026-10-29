// index-CBcimEr9 23 — narrow
// Lines 8757-9069 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function _c(e, t, n) {
  return vs(e, t, n)
    ? `eeee p`
    : e.getTime() > t.getTime()
      ? `'下个'eeee p`
      : `'上个'eeee p`;
}
var vc = {
    lastWeek: _c,
    yesterday: `'昨天' p`,
    today: `'今天' p`,
    tomorrow: `'明天' p`,
    nextWeek: _c,
    other: `PP p`,
  },
  yc = {
    en: ot,
    es: zs,
    fr: Qs,
    de: Ns,
    ja: rc,
    zh: {
      code: `zh-CN`,
      formatDistance: hc,
      formatLong: gc,
      formatRelative: (e, t, n, r) => {
        let i = vc[e];
        return typeof i == `function` ? i(t, n, r) : i;
      },
      localize: {
        ordinalNumber: (e, t) => {
          let n = Number(e);
          switch (t?.unit) {
            case `date`:
              return n.toString() + `日`;
            case `hour`:
              return n.toString() + `时`;
            case `minute`:
              return n.toString() + `分`;
            case `second`:
              return n.toString() + `秒`;
            default:
              return `第 ` + n.toString();
          }
        },
        era: z({
          values: {
            narrow: [`前`, `公元`],
            abbreviated: [`前`, `公元`],
            wide: [`公元前`, `公元`],
          },
          defaultWidth: `wide`,
        }),
        quarter: z({
          values: {
            narrow: [`1`, `2`, `3`, `4`],
            abbreviated: [`第一季`, `第二季`, `第三季`, `第四季`],
            wide: [`第一季度`, `第二季度`, `第三季度`, `第四季度`],
          },
          defaultWidth: `wide`,
          argumentCallback: (e) => e - 1,
        }),
        month: z({
          values: {
            narrow: [
              `一`,
              `二`,
              `三`,
              `四`,
              `五`,
              `六`,
              `七`,
              `八`,
              `九`,
              `十`,
              `十一`,
              `十二`,
            ],
            abbreviated: [
              `1月`,
              `2月`,
              `3月`,
              `4月`,
              `5月`,
              `6月`,
              `7月`,
              `8月`,
              `9月`,
              `10月`,
              `11月`,
              `12月`,
            ],
            wide: [
              `一月`,
              `二月`,
              `三月`,
              `四月`,
              `五月`,
              `六月`,
              `七月`,
              `八月`,
              `九月`,
              `十月`,
              `十一月`,
              `十二月`,
            ],
          },
          defaultWidth: `wide`,
        }),
        day: z({
          values: {
            narrow: [`日`, `一`, `二`, `三`, `四`, `五`, `六`],
            short: [`日`, `一`, `二`, `三`, `四`, `五`, `六`],
            abbreviated: [
              `周日`,
              `周一`,
              `周二`,
              `周三`,
              `周四`,
              `周五`,
              `周六`,
            ],
            wide: [
              `星期日`,
              `星期一`,
              `星期二`,
              `星期三`,
              `星期四`,
              `星期五`,
              `星期六`,
            ],
          },
          defaultWidth: `wide`,
        }),
        dayPeriod: z({
          values: {
            narrow: {
              am: `上`,
              pm: `下`,
              midnight: `凌晨`,
              noon: `午`,
              morning: `早`,
              afternoon: `下午`,
              evening: `晚`,
              night: `夜`,
            },
            abbreviated: {
              am: `上午`,
              pm: `下午`,
              midnight: `凌晨`,
              noon: `中午`,
              morning: `早晨`,
              afternoon: `中午`,
              evening: `晚上`,
              night: `夜间`,
            },
            wide: {
              am: `上午`,
              pm: `下午`,
              midnight: `凌晨`,
              noon: `中午`,
              morning: `早晨`,
              afternoon: `中午`,
              evening: `晚上`,
              night: `夜间`,
            },
          },
          defaultWidth: `wide`,
          formattingValues: {
            narrow: {
              am: `上`,
              pm: `下`,
              midnight: `凌晨`,
              noon: `午`,
              morning: `早`,
              afternoon: `下午`,
              evening: `晚`,
              night: `夜`,
            },
            abbreviated: {
              am: `上午`,
              pm: `下午`,
              midnight: `凌晨`,
              noon: `中午`,
              morning: `早晨`,
              afternoon: `中午`,
              evening: `晚上`,
              night: `夜间`,
            },
            wide: {
              am: `上午`,
              pm: `下午`,
              midnight: `凌晨`,
              noon: `中午`,
              morning: `早晨`,
              afternoon: `中午`,
              evening: `晚上`,
              night: `夜间`,
            },
          },
          defaultFormattingWidth: `wide`,
        }),
      },
      match: {
        ordinalNumber: st({
          matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i,
          parsePattern: /\d+/i,
          valueCallback: (e) => parseInt(e, 10),
        }),
        era: B({
          matchPatterns: {
            narrow: /^(前)/i,
            abbreviated: /^(前)/i,
            wide: /^(公元前|公元)/i,
          },
          defaultMatchWidth: `wide`,
          parsePatterns: { any: [/^(前)/i, /^(公元)/i] },
          defaultParseWidth: `any`,
        }),
        quarter: B({
          matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^第[一二三四]刻/i,
            wide: /^第[一二三四]刻钟/i,
          },
          defaultMatchWidth: `wide`,
          parsePatterns: { any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i] },
          defaultParseWidth: `any`,
          valueCallback: (e) => e + 1,
        }),
        month: B({
          matchPatterns: {
            narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
            abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
            wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i,
          },
          defaultMatchWidth: `wide`,
          parsePatterns: {
            narrow: [
              /^一/i,
              /^二/i,
              /^三/i,
              /^四/i,
              /^五/i,
              /^六/i,
              /^七/i,
              /^八/i,
              /^九/i,
              /^十(?!(一|二))/i,
              /^十一/i,
              /^十二/i,
            ],
            any: [
              /^一|1/i,
              /^二|2/i,
              /^三|3/i,
              /^四|4/i,
              /^五|5/i,
              /^六|6/i,
              /^七|7/i,
              /^八|8/i,
              /^九|9/i,
              /^十(?!(一|二))|10/i,
              /^十一|11/i,
              /^十二|12/i,
            ],
          },
          defaultParseWidth: `any`,
        }),
        day: B({
          matchPatterns: {
            narrow: /^[一二三四五六日]/i,
            short: /^[一二三四五六日]/i,
            abbreviated: /^周[一二三四五六日]/i,
            wide: /^星期[一二三四五六日]/i,
          },
          defaultMatchWidth: `wide`,
          parsePatterns: {
            any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i],
          },
          defaultParseWidth: `any`,
        }),
        dayPeriod: B({
          matchPatterns: {
            any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i,
          },
          defaultMatchWidth: `any`,
          parsePatterns: {
            any: {
              am: /^上午?/i,
              pm: /^下午?/i,
              midnight: /^午夜/i,
              noon: /^[中正]午/i,
              morning: /^早上/i,
              afternoon: /^下午/i,
              evening: /^晚上?/i,
              night: /^凌晨/i,
            },
          },
          defaultParseWidth: `any`,
        }),
      },
      options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
    },
    ar: Cs,
    ru: pc,
  };
function bc(e) {
  return yc[(e || `en`).split(`-`)[0]] || ot;
}
function xc(e) {
  return e.room_id || (e.metadata?.session_id ?? null);
}
