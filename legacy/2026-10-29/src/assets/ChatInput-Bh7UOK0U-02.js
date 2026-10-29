// ChatInput-Bh7UOK0U 02 — uniforms
// Lines 21-657 of readable/assets/ChatInput-Bh7UOK0U.pretty.js (statement-aligned).
var w = i(`ArrowRight`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  T = i(`Crosshair`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`line`, { x1: `22`, x2: `18`, y1: `12`, y2: `12`, key: `l9bcsi` }],
    [`line`, { x1: `6`, x2: `2`, y1: `12`, y2: `12`, key: `13hhkx` }],
    [`line`, { x1: `12`, x2: `12`, y1: `6`, y2: `2`, key: `10w3f3` }],
    [`line`, { x1: `12`, x2: `12`, y1: `22`, y2: `18`, key: `15g9kq` }],
  ]),
  E = i(`Flame`, [
    [
      `path`,
      {
        d: `M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`,
        key: `96xj49`,
      },
    ],
  ]),
  D = i(`Mountain`, [
    [`path`, { d: `m8 3 4 8 5-5 5 15H2L8 3z`, key: `otkl63` }],
  ]),
  O = i(`Shield`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
  ]),
  k = {
    name: `CopyShader`,
    uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`,
  },
  A = class extends S {
    constructor(e, t = `tDiffuse`) {
      (super(),
        (this.textureID = t),
        (this.uniforms = null),
        (this.material = null),
        e instanceof x
          ? ((this.uniforms = e.uniforms), (this.material = e))
          : e &&
            ((this.uniforms = g.clone(e.uniforms)),
            (this.material = new x({
              name: e.name === void 0 ? `unspecified` : e.name,
              defines: Object.assign({}, e.defines),
              uniforms: this.uniforms,
              vertexShader: e.vertexShader,
              fragmentShader: e.fragmentShader,
            }))),
        (this._fsQuad = new C(this.material)));
    }
    render(e, t, n) {
      (this.uniforms[this.textureID] &&
        (this.uniforms[this.textureID].value = n.texture),
        (this._fsQuad.material = this.material),
        this.renderToScreen
          ? (e.setRenderTarget(null), this._fsQuad.render(e))
          : (e.setRenderTarget(t),
            this.clear &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this._fsQuad.render(e)));
    }
    dispose() {
      (this.material.dispose(), this._fsQuad.dispose());
    }
  },
  j = class extends S {
    constructor(e, t) {
      (super(),
        (this.scene = e),
        (this.camera = t),
        (this.clear = !0),
        (this.needsSwap = !1),
        (this.inverse = !1));
    }
    render(e, t, n) {
      let r = e.getContext(),
        i = e.state;
      (i.buffers.color.setMask(!1),
        i.buffers.depth.setMask(!1),
        i.buffers.color.setLocked(!0),
        i.buffers.depth.setLocked(!0));
      let a, o;
      (this.inverse ? ((a = 0), (o = 1)) : ((a = 1), (o = 0)),
        i.buffers.stencil.setTest(!0),
        i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE),
        i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295),
        i.buffers.stencil.setClear(o),
        i.buffers.stencil.setLocked(!0),
        e.setRenderTarget(n),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        e.setRenderTarget(t),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        i.buffers.color.setLocked(!1),
        i.buffers.depth.setLocked(!1),
        i.buffers.color.setMask(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.stencil.setLocked(!1),
        i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295),
        i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP),
        i.buffers.stencil.setLocked(!0));
    }
  },
  M = class extends S {
    constructor() {
      (super(), (this.needsSwap = !1));
    }
    render(e) {
      (e.state.buffers.stencil.setLocked(!1),
        e.state.buffers.stencil.setTest(!1));
    }
  },
  N = class {
    constructor(e, t) {
      if (
        ((this.renderer = e),
        (this._pixelRatio = e.getPixelRatio()),
        t === void 0)
      ) {
        let n = e.getSize(new m());
        ((this._width = n.width),
          (this._height = n.height),
          (t = new p(
            this._width * this._pixelRatio,
            this._height * this._pixelRatio,
            { type: b },
          )),
          (t.texture.name = `EffectComposer.rt1`));
      } else ((this._width = t.width), (this._height = t.height));
      ((this.renderTarget1 = t),
        (this.renderTarget2 = t.clone()),
        (this.renderTarget2.texture.name = `EffectComposer.rt2`),
        (this.writeBuffer = this.renderTarget1),
        (this.readBuffer = this.renderTarget2),
        (this.renderToScreen = !0),
        (this.passes = []),
        (this.copyPass = new A(k)),
        (this.copyPass.material.blending = 0),
        (this.timer = new _()));
    }
    swapBuffers() {
      let e = this.readBuffer;
      ((this.readBuffer = this.writeBuffer), (this.writeBuffer = e));
    }
    addPass(e) {
      (this.passes.push(e),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio,
        ));
    }
    insertPass(e, t) {
      (this.passes.splice(t, 0, e),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio,
        ));
    }
    removePass(e) {
      let t = this.passes.indexOf(e);
      t !== -1 && this.passes.splice(t, 1);
    }
    isLastEnabledPass(e) {
      for (let t = e + 1; t < this.passes.length; t++)
        if (this.passes[t].enabled) return !1;
      return !0;
    }
    render(e) {
      (this.timer.update(), e === void 0 && (e = this.timer.getDelta()));
      let t = this.renderer.getRenderTarget(),
        n = !1;
      for (let t = 0, r = this.passes.length; t < r; t++) {
        let r = this.passes[t];
        if (r.enabled !== !1) {
          if (
            ((r.renderToScreen =
              this.renderToScreen && this.isLastEnabledPass(t)),
            r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
            r.needsSwap)
          ) {
            if (n) {
              let t = this.renderer.getContext(),
                n = this.renderer.state.buffers.stencil;
              (n.setFunc(t.NOTEQUAL, 1, 4294967295),
                this.copyPass.render(
                  this.renderer,
                  this.writeBuffer,
                  this.readBuffer,
                  e,
                ),
                n.setFunc(t.EQUAL, 1, 4294967295));
            }
            this.swapBuffers();
          }
          j !== void 0 &&
            (r instanceof j ? (n = !0) : r instanceof M && (n = !1));
        }
      }
      this.renderer.setRenderTarget(t);
    }
    reset(e) {
      if (e === void 0) {
        let t = this.renderer.getSize(new m());
        ((this._pixelRatio = this.renderer.getPixelRatio()),
          (this._width = t.width),
          (this._height = t.height),
          (e = this.renderTarget1.clone()),
          e.setSize(
            this._width * this._pixelRatio,
            this._height * this._pixelRatio,
          ));
      }
      (this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        (this.renderTarget1 = e),
        (this.renderTarget2 = e.clone()),
        (this.writeBuffer = this.renderTarget1),
        (this.readBuffer = this.renderTarget2));
    }
    setSize(e, t) {
      ((this._width = e), (this._height = t));
      let n = this._width * this._pixelRatio,
        r = this._height * this._pixelRatio;
      (this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r));
      for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(n, r);
    }
    setPixelRatio(e) {
      ((this._pixelRatio = e), this.setSize(this._width, this._height));
    }
    dispose() {
      (this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        this.copyPass.dispose());
    }
  },
  P = class extends S {
    constructor(e, t, n = null, r = null, i = null) {
      (super(),
        (this.scene = e),
        (this.camera = t),
        (this.overrideMaterial = n),
        (this.clearColor = r),
        (this.clearAlpha = i),
        (this.clear = !0),
        (this.clearDepth = !1),
        (this.needsSwap = !1),
        (this.isRenderPass = !0),
        (this._oldClearColor = new y()));
    }
    render(e, t, n) {
      let r = e.autoClear;
      e.autoClear = !1;
      let i, a;
      (this.overrideMaterial !== null &&
        ((a = this.scene.overrideMaterial),
        (this.scene.overrideMaterial = this.overrideMaterial)),
        this.clearColor !== null &&
          (e.getClearColor(this._oldClearColor),
          e.setClearColor(this.clearColor, e.getClearAlpha())),
        this.clearAlpha !== null &&
          ((i = e.getClearAlpha()), e.setClearAlpha(this.clearAlpha)),
        this.clearDepth == 1 && e.clearDepth(),
        e.setRenderTarget(this.renderToScreen ? null : n),
        this.clear === !0 &&
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        e.render(this.scene, this.camera),
        this.clearColor !== null && e.setClearColor(this._oldClearColor),
        this.clearAlpha !== null && e.setClearAlpha(i),
        this.overrideMaterial !== null && (this.scene.overrideMaterial = a),
        (e.autoClear = r));
    }
  },
  F = {
    name: `LuminosityHighPassShader`,
    uniforms: {
      tDiffuse: { value: null },
      luminosityThreshold: { value: 1 },
      smoothWidth: { value: 1 },
      defaultColor: { value: new y(0) },
      defaultOpacity: { value: 0 },
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
  },
  I = class e extends S {
    constructor(e, t = 1, n, r) {
      (super(),
        (this.strength = t),
        (this.radius = n),
        (this.threshold = r),
        (this.resolution = e === void 0 ? new m(256, 256) : new m(e.x, e.y)),
        (this.clearColor = new y(0, 0, 0)),
        (this.needsSwap = !1),
        (this.renderTargetsHorizontal = []),
        (this.renderTargetsVertical = []),
        (this.nMips = 5));
      let i = Math.round(this.resolution.x / 2),
        a = Math.round(this.resolution.y / 2);
      ((this.renderTargetBright = new p(i, a, { type: b })),
        (this.renderTargetBright.texture.name = `UnrealBloomPass.bright`),
        (this.renderTargetBright.texture.generateMipmaps = !1));
      for (let e = 0; e < this.nMips; e++) {
        let t = new p(i, a, { type: b });
        ((t.texture.name = `UnrealBloomPass.h` + e),
          (t.texture.generateMipmaps = !1),
          this.renderTargetsHorizontal.push(t));
        let n = new p(i, a, { type: b });
        ((n.texture.name = `UnrealBloomPass.v` + e),
          (n.texture.generateMipmaps = !1),
          this.renderTargetsVertical.push(n),
          (i = Math.round(i / 2)),
          (a = Math.round(a / 2)));
      }
      let o = F;
      ((this.highPassUniforms = g.clone(o.uniforms)),
        (this.highPassUniforms.luminosityThreshold.value = r),
        (this.highPassUniforms.smoothWidth.value = 0.01),
        (this.materialHighPassFilter = new x({
          uniforms: this.highPassUniforms,
          vertexShader: o.vertexShader,
          fragmentShader: o.fragmentShader,
        })),
        (this.separableBlurMaterials = []));
      let s = [6, 10, 14, 18, 22];
      ((i = Math.round(this.resolution.x / 2)),
        (a = Math.round(this.resolution.y / 2)));
      for (let e = 0; e < this.nMips; e++)
        (this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),
          (this.separableBlurMaterials[e].uniforms.invSize.value = new m(
            1 / i,
            1 / a,
          )),
          (i = Math.round(i / 2)),
          (a = Math.round(a / 2)));
      ((this.compositeMaterial = this._getCompositeMaterial(this.nMips)),
        (this.compositeMaterial.uniforms.blurTexture1.value =
          this.renderTargetsVertical[0].texture),
        (this.compositeMaterial.uniforms.blurTexture2.value =
          this.renderTargetsVertical[1].texture),
        (this.compositeMaterial.uniforms.blurTexture3.value =
          this.renderTargetsVertical[2].texture),
        (this.compositeMaterial.uniforms.blurTexture4.value =
          this.renderTargetsVertical[3].texture),
        (this.compositeMaterial.uniforms.blurTexture5.value =
          this.renderTargetsVertical[4].texture),
        (this.compositeMaterial.uniforms.bloomStrength.value = t),
        (this.compositeMaterial.uniforms.bloomRadius.value = 0.1));
      let c = [1, 0.8, 0.6, 0.4, 0.2];
      ((this.compositeMaterial.uniforms.bloomFactors.value = c),
        (this.bloomTintColors = [
          new v(1, 1, 1),
          new v(1, 1, 1),
          new v(1, 1, 1),
          new v(1, 1, 1),
          new v(1, 1, 1),
        ]),
        (this.compositeMaterial.uniforms.bloomTintColors.value =
          this.bloomTintColors),
        (this.copyUniforms = g.clone(k.uniforms)),
        (this.blendMaterial = new x({
          uniforms: this.copyUniforms,
          vertexShader: k.vertexShader,
          fragmentShader: k.fragmentShader,
          premultipliedAlpha: !0,
          blending: 2,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
        })),
        (this._oldClearColor = new y()),
        (this._oldClearAlpha = 1),
        (this._basic = new h()),
        (this._fsQuad = new C(null)));
    }
    dispose() {
      for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
        this.renderTargetsHorizontal[e].dispose();
      for (let e = 0; e < this.renderTargetsVertical.length; e++)
        this.renderTargetsVertical[e].dispose();
      this.renderTargetBright.dispose();
      for (let e = 0; e < this.separableBlurMaterials.length; e++)
        this.separableBlurMaterials[e].dispose();
      (this.compositeMaterial.dispose(),
        this.blendMaterial.dispose(),
        this._basic.dispose(),
        this._fsQuad.dispose());
    }
    setSize(e, t) {
      let n = Math.round(e / 2),
        r = Math.round(t / 2);
      this.renderTargetBright.setSize(n, r);
      for (let e = 0; e < this.nMips; e++)
        (this.renderTargetsHorizontal[e].setSize(n, r),
          this.renderTargetsVertical[e].setSize(n, r),
          (this.separableBlurMaterials[e].uniforms.invSize.value = new m(
            1 / n,
            1 / r,
          )),
          (n = Math.round(n / 2)),
          (r = Math.round(r / 2)));
    }
    render(t, n, r, i, a) {
      (t.getClearColor(this._oldClearColor),
        (this._oldClearAlpha = t.getClearAlpha()));
      let o = t.autoClear;
      ((t.autoClear = !1),
        t.setClearColor(this.clearColor, 0),
        a && t.state.buffers.stencil.setTest(!1),
        this.renderToScreen &&
          ((this._fsQuad.material = this._basic),
          (this._basic.map = r.texture),
          t.setRenderTarget(null),
          t.clear(),
          this._fsQuad.render(t)),
        (this.highPassUniforms.tDiffuse.value = r.texture),
        (this.highPassUniforms.luminosityThreshold.value = this.threshold),
        (this._fsQuad.material = this.materialHighPassFilter),
        t.setRenderTarget(this.renderTargetBright),
        t.clear(),
        this._fsQuad.render(t));
      let s = this.renderTargetBright;
      for (let n = 0; n < this.nMips; n++)
        ((this._fsQuad.material = this.separableBlurMaterials[n]),
          (this.separableBlurMaterials[n].uniforms.colorTexture.value =
            s.texture),
          (this.separableBlurMaterials[n].uniforms.direction.value =
            e.BlurDirectionX),
          t.setRenderTarget(this.renderTargetsHorizontal[n]),
          t.clear(),
          this._fsQuad.render(t),
          (this.separableBlurMaterials[n].uniforms.colorTexture.value =
            this.renderTargetsHorizontal[n].texture),
          (this.separableBlurMaterials[n].uniforms.direction.value =
            e.BlurDirectionY),
          t.setRenderTarget(this.renderTargetsVertical[n]),
          t.clear(),
          this._fsQuad.render(t),
          (s = this.renderTargetsVertical[n]));
      ((this._fsQuad.material = this.compositeMaterial),
        (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
        (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
        (this.compositeMaterial.uniforms.bloomTintColors.value =
          this.bloomTintColors),
        t.setRenderTarget(this.renderTargetsHorizontal[0]),
        t.clear(),
        this._fsQuad.render(t),
        (this._fsQuad.material = this.blendMaterial),
        (this.copyUniforms.tDiffuse.value =
          this.renderTargetsHorizontal[0].texture),
        a && t.state.buffers.stencil.setTest(!0),
        this.renderToScreen
          ? (t.setRenderTarget(null), this._fsQuad.render(t))
          : (t.setRenderTarget(r), this._fsQuad.render(t)),
        t.setClearColor(this._oldClearColor, this._oldClearAlpha),
        (t.autoClear = o));
    }
    _getSeparableBlurMaterial(e) {
      let t = [],
        n = e / 3;
      for (let r = 0; r < e; r++)
        t.push((0.39894 * Math.exp((-0.5 * r * r) / (n * n))) / n);
      return new x({
        defines: { KERNEL_RADIUS: e },
        uniforms: {
          colorTexture: { value: null },
          invSize: { value: new m(0.5, 0.5) },
          direction: { value: new m(0.5, 0.5) },
          gaussianCoefficients: { value: t },
        },
        vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
        fragmentShader: `

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`,
      });
    }
    _getCompositeMaterial(e) {
      return new x({
        defines: { NUM_MIPS: e },
        uniforms: {
          blurTexture1: { value: null },
          blurTexture2: { value: null },
          blurTexture3: { value: null },
          blurTexture4: { value: null },
          blurTexture5: { value: null },
          bloomStrength: { value: 1 },
          bloomFactors: { value: null },
          bloomTintColors: { value: null },
          bloomRadius: { value: 0 },
        },
        vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
        fragmentShader: `

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`,
      });
    }
  };
