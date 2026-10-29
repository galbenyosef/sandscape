// Create-CEn7EAZs 139 — node
// Lines 46630-46967 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function FL(e) {
  e ||= IL;
  function t(t, n) {
    return t && n ? e(t.__data__, n.__data__) : !t - !n;
  }
  for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
    for (
      var o = n[a], s = o.length, c = (i[a] = Array(s)), l, u = 0;
      u < s;
      ++u
    )
      (l = o[u]) && (c[u] = l);
    c.sort(t);
  }
  return new qR(i, this._parents).order();
}
function IL(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function LL() {
  var e = arguments[0];
  return ((arguments[0] = this), e.apply(null, arguments), this);
}
function RL() {
  return Array.from(this);
}
function zL() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function BL() {
  let e = 0;
  for (let t of this) ++e;
  return e;
}
function VL() {
  return !this.node();
}
function HL(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && e.call(s, s.__data__, a, i);
  return this;
}
function UL(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function WL(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function GL(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function KL(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function qL(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function JL(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, n);
  };
}
function YL(e, t) {
  var n = $I(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null
      ? n.local
        ? WL
        : UL
      : typeof t == `function`
        ? n.local
          ? JL
          : qL
        : n.local
          ? KL
          : GL)(n, t),
  );
}
function XL(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function ZL(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function QL(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function $L(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function eR(e, t, n) {
  return arguments.length > 1
    ? this.each(
        (t == null ? ZL : typeof t == `function` ? $L : QL)(e, t, n ?? ``),
      )
    : tR(this.node(), e);
}
function tR(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    XL(e).getComputedStyle(e, null).getPropertyValue(t)
  );
}
function nR(e) {
  return function () {
    delete this[e];
  };
}
function rR(e, t) {
  return function () {
    this[e] = t;
  };
}
function iR(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function aR(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? nR : typeof t == `function` ? iR : rR)(e, t))
    : this.node()[e];
}
function oR(e) {
  return e.trim().split(/^|\s+/);
}
function sR(e) {
  return e.classList || new cR(e);
}
function cR(e) {
  ((this._node = e), (this._names = oR(e.getAttribute(`class`) || ``)));
}
cR.prototype = {
  add: function (e) {
    this._names.indexOf(e) < 0 &&
      (this._names.push(e),
      this._node.setAttribute(`class`, this._names.join(` `)));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 &&
      (this._names.splice(t, 1),
      this._node.setAttribute(`class`, this._names.join(` `)));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function lR(e, t) {
  for (var n = sR(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function uR(e, t) {
  for (var n = sR(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function dR(e) {
  return function () {
    lR(this, e);
  };
}
function fR(e) {
  return function () {
    uR(this, e);
  };
}
function pR(e, t) {
  return function () {
    (t.apply(this, arguments) ? lR : uR)(this, e);
  };
}
function mR(e, t) {
  var n = oR(e + ``);
  if (arguments.length < 2) {
    for (var r = sR(this.node()), i = -1, a = n.length; ++i < a;)
      if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == `function` ? pR : t ? dR : fR)(n, t));
}
function hR() {
  this.textContent = ``;
}
function gR(e) {
  return function () {
    this.textContent = e;
  };
}
function _R(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? ``;
  };
}
function vR(e) {
  return arguments.length
    ? this.each(e == null ? hR : (typeof e == `function` ? _R : gR)(e))
    : this.node().textContent;
}
function yR() {
  this.innerHTML = ``;
}
function bR(e) {
  return function () {
    this.innerHTML = e;
  };
}
function xR(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? ``;
  };
}
function SR(e) {
  return arguments.length
    ? this.each(e == null ? yR : (typeof e == `function` ? xR : bR)(e))
    : this.node().innerHTML;
}
function CR() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function wR() {
  return this.each(CR);
}
function TR() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ER() {
  return this.each(TR);
}
function DR(e) {
  var t = typeof e == `function` ? e : nL(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function OR() {
  return null;
}
function kR(e, t) {
  var n = typeof e == `function` ? e : nL(e),
    r = t == null ? OR : typeof t == `function` ? t : iL(t);
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null,
    );
  });
}
function AR() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function jR() {
  return this.each(AR);
}
function MR() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function NR() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function PR(e) {
  return this.select(e ? NR : MR);
}
function FR(e) {
  return arguments.length ? this.property(`__data__`, e) : this.node().__data__;
}
function IR(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function LR(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var t = ``,
        n = e.indexOf(`.`);
      return (
        n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
        { type: e, name: t }
      );
    });
}
function RR(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, a; n < i; ++n)
        ((a = t[n]),
          (!e.type || a.type === e.type) && a.name === e.name
            ? this.removeEventListener(a.type, a.listener, a.options)
            : (t[++r] = a));
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
