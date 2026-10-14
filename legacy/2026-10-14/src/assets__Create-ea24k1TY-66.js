// assets__Create-ea24k1TY 66 — children
// Lines 20781-21127 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function mh(e, t, n) {
  return !e || !e.length
    ? null
    : e.find(function (e) {
        return (
          e && (typeof t == `function` ? t(e) : (0, ih.default)(e, t)) === n
        );
      });
}
function hh(e, t) {
  for (var n in e)
    if (
      {}.hasOwnProperty.call(e, n) &&
      (!{}.hasOwnProperty.call(t, n) || e[n] !== t[n])
    )
      return !1;
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r) && !{}.hasOwnProperty.call(e, r))
      return !1;
  return !0;
}
var gh = e(Mm());
function _h(e) {
  "@babel/helpers - typeof";
  return (
    (_h =
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
    _h(e)
  );
}
var Gne = [`viewBox`, `children`],
  Kne =
    `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
      `.`,
    ),
  vh = [`points`, `pathLength`],
  qne = { svg: Gne, polygon: vh, polyline: vh },
  yh =
    `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
      `.`,
    ),
  bh = function (e, t) {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (((0, X.isValidElement)(e) && (n = e.props), !(0, gh.default)(n)))
      return null;
    var r = {};
    return (
      Object.keys(n).forEach(function (e) {
        yh.includes(e) &&
          (r[e] =
            t ||
            function (t) {
              return n[e](n, t);
            });
      }),
      r
    );
  },
  Jne = function (e, t, n) {
    return function (r) {
      return (e(t, n, r), null);
    };
  },
  xh = function (e, t, n) {
    if (!(0, gh.default)(e) || _h(e) !== `object`) return null;
    var r = null;
    return (
      Object.keys(e).forEach(function (i) {
        var a = e[i];
        yh.includes(i) &&
          typeof a == `function` &&
          ((r ||= {}), (r[i] = Jne(a, t, n)));
      }),
      r
    );
  },
  Sh = e(Nm()),
  Yne = Bne(),
  Xne = [`children`],
  Zne = [`children`];
function Ch(e, t) {
  if (e == null) return {};
  var n = Qne(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function Qne(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var wh = {
    click: `onClick`,
    mousedown: `onMouseDown`,
    mouseup: `onMouseUp`,
    mouseover: `onMouseOver`,
    mousemove: `onMouseMove`,
    mouseout: `onMouseOut`,
    mouseenter: `onMouseEnter`,
    mouseleave: `onMouseLeave`,
    touchcancel: `onTouchCancel`,
    touchend: `onTouchEnd`,
    touchmove: `onTouchMove`,
    touchstart: `onTouchStart`,
    contextmenu: `onContextMenu`,
    dblclick: `onDoubleClick`,
  },
  Th = function (e) {
    return typeof e == `string`
      ? e
      : e
        ? e.displayName || e.name || `Component`
        : ``;
  },
  Eh = null,
  Dh = null,
  Oh = function e(t) {
    if (t === Eh && Array.isArray(Dh)) return Dh;
    var n = [];
    return (
      X.Children.forEach(t, function (t) {
        (0, ah.default)(t) ||
          ((0, Yne.isFragment)(t)
            ? (n = n.concat(e(t.props.children)))
            : n.push(t));
      }),
      (Dh = n),
      (Eh = t),
      n
    );
  };
function kh(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t)
      ? t.map(function (e) {
          return Th(e);
        })
      : [Th(t)]),
    Oh(e).forEach(function (e) {
      var t =
        (0, ih.default)(e, `type.displayName`) ||
        (0, ih.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
function Ah(e, t) {
  var n = kh(e, t);
  return n && n[0];
}
var jh = function (e) {
    if (!e || !e.props) return !1;
    var t = e.props,
      n = t.width,
      r = t.height;
    return !(!ch(n) || n <= 0 || !ch(r) || r <= 0);
  },
  $ne =
    `a.altGlyph.altGlyphDef.altGlyphItem.animate.animateColor.animateMotion.animateTransform.circle.clipPath.color-profile.cursor.defs.desc.ellipse.feBlend.feColormatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.font.font-face.font-face-format.font-face-name.font-face-url.foreignObject.g.glyph.glyphRef.hkern.image.line.lineGradient.marker.mask.metadata.missing-glyph.mpath.path.pattern.polygon.polyline.radialGradient.rect.script.set.stop.style.svg.switch.symbol.text.textPath.title.tref.tspan.use.view.vkern`.split(
      `.`,
    ),
  ere = function (e) {
    return e && e.type && (0, nh.default)(e.type) && $ne.indexOf(e.type) >= 0;
  },
  tre = function (e, t, n, r) {
    var i = qne?.[r] ?? [];
    return (
      t.startsWith(`data-`) ||
      (!(0, Sh.default)(e) && ((r && i.includes(t)) || Kne.includes(t))) ||
      (n && yh.includes(t))
    );
  },
  Mh = function (e, t, n) {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var r = e;
    if (((0, X.isValidElement)(e) && (r = e.props), !(0, gh.default)(r)))
      return null;
    var i = {};
    return (
      Object.keys(r).forEach(function (e) {
        tre(r?.[e], e, t, n) && (i[e] = r[e]);
      }),
      i
    );
  },
  Nh = function e(t, n) {
    if (t === n) return !0;
    var r = X.Children.count(t);
    if (r !== X.Children.count(n)) return !1;
    if (r === 0) return !0;
    if (r === 1)
      return Ph(Array.isArray(t) ? t[0] : t, Array.isArray(n) ? n[0] : n);
    for (var i = 0; i < r; i++) {
      var a = t[i],
        o = n[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!Ph(a, o)) return !1;
    }
    return !0;
  },
  Ph = function (e, t) {
    if ((0, ah.default)(e) && (0, ah.default)(t)) return !0;
    if (!(0, ah.default)(e) && !(0, ah.default)(t)) {
      var n = e.props || {},
        r = n.children,
        i = Ch(n, Xne),
        a = t.props || {},
        o = a.children,
        s = Ch(a, Zne);
      return r && o ? hh(i, s) && Nh(r, o) : !r && !o && hh(i, s);
    }
    return !1;
  },
  Fh = function (e, t) {
    var n = [],
      r = {};
    return (
      Oh(e).forEach(function (e, i) {
        if (ere(e)) n.push(e);
        else if (e) {
          var a = Th(e.type),
            o = t[a] || {},
            s = o.handler,
            c = o.once;
          if (s && (!c || !r[a])) {
            var l = s(e, a, i);
            (n.push(l), (r[a] = !0));
          }
        }
      }),
      n
    );
  },
  nre = function (e) {
    var t = e && e.type;
    return t && wh[t] ? wh[t] : null;
  },
  rre = function (e, t) {
    return Oh(t).indexOf(e);
  },
  ire = [
    `children`,
    `width`,
    `height`,
    `viewBox`,
    `className`,
    `style`,
    `title`,
    `desc`,
  ];
function Ih() {
  return (
    (Ih = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ih.apply(this, arguments)
  );
}
function are(e, t) {
  if (e == null) return {};
  var n = ore(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function ore(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Lh(e) {
  var t = e.children,
    n = e.width,
    r = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    s = e.title,
    c = e.desc,
    l = are(e, ire),
    u = i || { width: n, height: r, x: 0, y: 0 },
    d = h(`recharts-surface`, a);
  return X.createElement(
    `svg`,
    Ih({}, Mh(l, !0, `svg`), {
      className: d,
      width: n,
      height: r,
      style: o,
      viewBox: `${u.x} ${u.y} ${u.width} ${u.height}`,
    }),
    X.createElement(`title`, null, s),
    X.createElement(`desc`, null, c),
    t,
  );
}
var sre = [`children`, `className`];
