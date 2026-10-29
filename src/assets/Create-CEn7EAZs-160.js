// Create-CEn7EAZs 160 — tolowercase
// Lines 53208-53269 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var WH = UH({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: PH,
    ariaAutoComplete: null,
    ariaBusy: PH,
    ariaChecked: PH,
    ariaColCount: $,
    ariaColIndex: $,
    ariaColSpan: $,
    ariaControls: IH,
    ariaCurrent: null,
    ariaDescribedBy: IH,
    ariaDetails: null,
    ariaDisabled: PH,
    ariaDropEffect: IH,
    ariaErrorMessage: null,
    ariaExpanded: PH,
    ariaFlowTo: IH,
    ariaGrabbed: PH,
    ariaHasPopup: null,
    ariaHidden: PH,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: IH,
    ariaLevel: $,
    ariaLive: null,
    ariaModal: PH,
    ariaMultiLine: PH,
    ariaMultiSelectable: PH,
    ariaOrientation: null,
    ariaOwns: IH,
    ariaPlaceholder: null,
    ariaPosInSet: $,
    ariaPressed: PH,
    ariaReadOnly: PH,
    ariaRelevant: null,
    ariaRequired: PH,
    ariaRoleDescription: IH,
    ariaRowCount: $,
    ariaRowIndex: $,
    ariaRowSpan: $,
    ariaSelected: PH,
    ariaSetSize: $,
    ariaSort: null,
    ariaValueMax: $,
    ariaValueMin: $,
    ariaValueNow: $,
    ariaValueText: null,
    role: null,
  },
  transform(e, t) {
    return t === `role` ? t : `aria-` + t.slice(4).toLowerCase();
  },
});
function GH(e, t) {
  return t in e ? e[t] : t;
}
function KH(e, t) {
  return GH(e, t.toLowerCase());
}
