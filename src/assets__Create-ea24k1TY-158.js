// assets__Create-ea24k1TY 158 — tolowercase
// Lines 52425-52486 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var OH = DH({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: vH,
    ariaAutoComplete: null,
    ariaBusy: vH,
    ariaChecked: vH,
    ariaColCount: $,
    ariaColIndex: $,
    ariaColSpan: $,
    ariaControls: bH,
    ariaCurrent: null,
    ariaDescribedBy: bH,
    ariaDetails: null,
    ariaDisabled: vH,
    ariaDropEffect: bH,
    ariaErrorMessage: null,
    ariaExpanded: vH,
    ariaFlowTo: bH,
    ariaGrabbed: vH,
    ariaHasPopup: null,
    ariaHidden: vH,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: bH,
    ariaLevel: $,
    ariaLive: null,
    ariaModal: vH,
    ariaMultiLine: vH,
    ariaMultiSelectable: vH,
    ariaOrientation: null,
    ariaOwns: bH,
    ariaPlaceholder: null,
    ariaPosInSet: $,
    ariaPressed: vH,
    ariaReadOnly: vH,
    ariaRelevant: null,
    ariaRequired: vH,
    ariaRoleDescription: bH,
    ariaRowCount: $,
    ariaRowIndex: $,
    ariaRowSpan: $,
    ariaSelected: vH,
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
function kH(e, t) {
  return t in e ? e[t] : t;
}
function AH(e, t) {
  return kH(e, t.toLowerCase());
}
