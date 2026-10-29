import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{n as t,t as n}from"./jsx-runtime-BtyjnKZj.js";import{l as r}from"./AuthService-CQeU_0bQ.js";import{r as i,t as a}from"./button-Ap3ysi5G.js";import{t as o}from"./send-Bx2TrLH3.js";import{n as s,o as c,s as l}from"./tour-D03BMTEP.js";import{t as u}from"./gameCreation-7QUnbwLk.js";import{Z as d,x as f}from"./index-BKDksszn.js";import{Hn as p,Ln as m,Mt as h,Nn as g,On as _,Rn as v,T as y,Z as b,fn as x}from"./three.module-CvxFRqeD.js";import{n as S,t as C}from"./Pass-nC7Rn4Mq.js";var w=i(`ArrowRight`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),T=i(`Crosshair`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`22`,x2:`18`,y1:`12`,y2:`12`,key:`l9bcsi`}],[`line`,{x1:`6`,x2:`2`,y1:`12`,y2:`12`,key:`13hhkx`}],[`line`,{x1:`12`,x2:`12`,y1:`6`,y2:`2`,key:`10w3f3`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`18`,key:`15g9kq`}]]),E=i(`Flame`,[[`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`,key:`96xj49`}]]),D=i(`Mountain`,[[`path`,{d:`m8 3 4 8 5-5 5 15H2L8 3z`,key:`otkl63`}]]),O=i(`Shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),k={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},A=class extends S{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof x?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=g.clone(e.uniforms),this.material=new x({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new C(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},j=class extends S{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},M=class extends S{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},N=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new m);this._width=n.width,this._height=n.height,t=new p(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:b}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new A(k),this.copyPass.material.blending=0,this.timer=new _}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}j!==void 0&&(r instanceof j?n=!0:r instanceof M&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new m);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},P=class extends S{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new y}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},F={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new y(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

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

		}`},I=class e extends S{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new m(256,256):new m(e.x,e.y),this.clearColor=new y(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new p(i,a,{type:b}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new p(i,a,{type:b});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new p(i,a,{type:b});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=F;this.highPassUniforms=g.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new x({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new m(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=g.clone(k.uniforms),this.blendMaterial=new x({uniforms:this.copyUniforms,vertexShader:k.vertexShader,fragmentShader:k.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new y,this._oldClearAlpha=1,this._basic=new h,this._fsQuad=new C(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new m(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new x({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new m(.5,.5)},direction:{value:new m(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

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

				}`})}_getCompositeMaterial(e){return new x({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

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

				}`})}};I.BlurDirectionX=new m(1,0),I.BlurDirectionY=new m(0,1);var L=`Sandscape`,R=[`keksquad`,`pixypunk42`,`quantLlily`],z=e=>[L,...e??R],B=e(t()),V=n(),H=({users:e,onSelect:t,highlightedIndex:n})=>(0,V.jsxs)(`div`,{className:`absolute bottom-full left-0 mb-1 w-auto min-w-[150px] max-w-xs max-h-36 overflow-y-auto bg-card border border-border rounded-lg shadow-lg z-10`,style:{scrollbarWidth:`thin`,scrollbarColor:`rgba(79, 70, 229, 0.3) transparent`},children:[(0,V.jsx)(`style`,{children:`
        /* For WebKit browsers (Chrome, Safari) */
        .suggestion-popup::-webkit-scrollbar {
          width: 2px !important;
        }
        .suggestion-popup::-webkit-scrollbar-track {
          background: transparent !important;
        }
        .suggestion-popup::-webkit-scrollbar-thumb {
          background-color: rgba(79, 70, 229, 0.3) !important;
          border-radius: 20px !important;
        }
        .suggestion-popup::-webkit-scrollbar-thumb:hover {
          background-color: rgba(79, 70, 229, 0.6) !important;
        }
      `}),(0,V.jsx)(`div`,{className:`suggestion-popup w-full h-full overflow-y-auto`,children:e.map((e,r)=>(0,V.jsx)(`div`,{className:`p-2 hover:bg-indigo-600 cursor-pointer text-sm ${r===n?`bg-indigo-600`:``}`,onClick:()=>t(e),children:e===`Sandscape`?(0,V.jsxs)(`span`,{className:`text-primary font-bold flex items-center`,children:[`@`,e,` `,(0,V.jsx)(`span`,{className:`text-xs ml-1`,children:`🤖`})]}):(0,V.jsxs)(V.Fragment,{children:[`@`,e]})},e))})]});function U(e){let t=Math.floor(e/60),n=Math.floor(e%60);return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`}function W({onRecordingComplete:e,onError:t}={}){let[n,r]=(0,B.useState)(!1),[i,a]=(0,B.useState)(0),[o,s]=(0,B.useState)(null),[c,l]=(0,B.useState)(null),u=(0,B.useRef)(null),d=(0,B.useRef)(null),f=(0,B.useRef)([]),p=(0,B.useRef)(null),m=(0,B.useRef)(0);return(0,B.useEffect)(()=>()=>{p.current&&clearInterval(p.current),d.current&&d.current.getTracks().forEach(e=>e.stop())},[]),{isRecording:n,duration:i,error:o,hasPermission:c,startRecording:(0,B.useCallback)(async()=>{if(s(null),f.current=[],!window.isSecureContext){let e=`Microphone requires HTTPS or localhost`;s(e),t?.(e);return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){let e=`Your browser does not support audio recording`;s(e),t?.(e),l(!1);return}try{let e=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:44100}});d.current=e,l(!0);let n=MediaRecorder.isTypeSupported(`audio/webm;codecs=opus`)?`audio/webm;codecs=opus`:MediaRecorder.isTypeSupported(`audio/webm`)?`audio/webm`:`audio/mp4`,i=new MediaRecorder(e,{mimeType:n});u.current=i,i.ondataavailable=e=>{e.data.size>0&&f.current.push(e.data)},i.onerror=e=>{let n=e.message||`Recording error occurred`;s(n),t?.(n),r(!1)},i.start(1e3),r(!0),m.current=Date.now(),a(0),p.current=window.setInterval(()=>{let e=(Date.now()-m.current)/1e3;a(e)},100)}catch(e){let n=`Failed to access microphone`;e instanceof Error&&(e.name===`NotAllowedError`||e.name===`PermissionDeniedError`?(n=`Microphone permission denied`,l(!1)):n=e.name===`NotFoundError`?`No microphone found`:e.message),s(n),t?.(n)}},[t]),stopRecording:(0,B.useCallback)(async()=>new Promise(t=>{p.current&&=(clearInterval(p.current),null);let n=u.current;if(!n||n.state===`inactive`){r(!1),t(null);return}n.onstop=()=>{d.current&&=(d.current.getTracks().forEach(e=>e.stop()),null);let i=new Blob(f.current,{type:n.mimeType});f.current=[],r(!1),e?.(i),t(i)},n.stop()}),[e])}}function G({onTranscriptionComplete:e,onTranscriptionStart:t,disabled:n=!1,className:i=``}){let[a,o]=(0,B.useState)(!1),[s,c]=(0,B.useState)(null),{isRecording:l,duration:d,error:f,hasPermission:p,startRecording:m,stopRecording:h}=W({onRecordingComplete:(0,B.useCallback)(async n=>{o(!0),c(null),t?.();try{let t=await u.transcribe(n);t.success&&t.text?e?.(t.text):c(t.error||`Transcription failed`)}catch(e){let t=e instanceof Error?e.message:`Transcription failed`;c(t)}finally{o(!1)}},[e,t]),onError:(0,B.useCallback)(e=>{c(e)},[])}),g=(0,B.useCallback)(async()=>{c(null),l?await h():a||await m()},[l,a,h,m]),_=n||p===!1,v=a;return(0,V.jsxs)(`div`,{className:r(`relative inline-flex items-center gap-1`,i),children:[(0,V.jsx)(`button`,{type:`button`,onClick:g,disabled:_||v,className:r(`relative p-1.5 transition-colors duration-200`,`focus:outline-none`,l?`text-red-500`:_||v?`text-gray-600 cursor-not-allowed`:`text-gray-400 hover:text-gray-200`),title:p===!1?`Microphone permission denied`:l?`Stop recording`:v?`Transcribing...`:`Start voice input`,children:(0,V.jsx)(`svg`,{className:r(`w-5 h-5`,l&&`animate-pulse`),fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,strokeWidth:1.5,children:l?(0,V.jsx)(`rect`,{x:`6`,y:`6`,width:`12`,height:`12`,rx:`2`,fill:`currentColor`}):v?(0,V.jsxs)(`g`,{className:`animate-spin origin-center`,children:[(0,V.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,strokeWidth:`2`,stroke:`currentColor`,opacity:`0.25`,fill:`none`}),(0,V.jsx)(`path`,{d:`M12 2a10 10 0 0 1 10 10`,strokeWidth:`2`,stroke:`currentColor`,strokeLinecap:`round`,fill:`none`})]}):(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z`})})}),l&&(0,V.jsx)(`span`,{className:`text-xs font-mono text-red-400 tabular-nums`,children:U(d)})]})}function K(e){e.style.height=`44px`,e.scrollHeight>44&&(e.style.height=Math.min(e.scrollHeight,120)+`px`)}var q=({value:e,onChange:t,onSend:n,onTranscription:r,replyToMessage:i,onCancelReply:u,placeholder:p,disabled:m,isMultiUser:h,collaborators:g,variant:_=`default`})=>{let v=_===`hero`,y=f(),[b,x]=(0,B.useState)([]),[S,C]=(0,B.useState)(!1),[w,T]=(0,B.useState)(0),E=(0,B.useRef)(null);(0,B.useEffect)(()=>{let e=E.current;e&&K(e)},[e,v,i]),(0,B.useEffect)(()=>{let e=E.current,t=e?.parentElement;if(!e||!t)return;let n,r=0,i=new ResizeObserver(([t])=>{let i=t.contentRect.width;i!==n&&(n=i,cancelAnimationFrame(r),r=requestAnimationFrame(()=>K(e)))});return i.observe(t),()=>{i.disconnect(),cancelAnimationFrame(r)}},[]);let D=(0,B.useMemo)(()=>z(g),[g]),O=(0,B.useMemo)(()=>{let e=[...D].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`));return RegExp(`(@(?:${e.join(`|`)}))(?=\\s|$)`,`gi`)},[D]),k=()=>{if(!e)return null;let t=[],n=0,r;for(O.lastIndex=0;(r=O.exec(e))!==null;)r.index>n&&t.push((0,V.jsx)(`span`,{className:`invisible`,children:e.slice(n,r.index)},`t-${n}`)),t.push((0,V.jsx)(`span`,{className:`bg-primary/25 text-primary rounded px-0.5`,children:r[1]},`m-${r.index}`)),n=r.index+r[0].length;return n<e.length&&t.push((0,V.jsx)(`span`,{className:`invisible`,children:e.slice(n)},`t-${n}`)),n===0?null:t},A=e=>{let n=e.target.value;t(n);let r=n.match(/@([\w.-]+(?:\s[\w.-]+){0,2})$/);if(r){let e=r[1].toLowerCase(),t=D.filter(t=>t.toLowerCase().includes(e));x(t),C(t.length>0),T(0)}else C(!1)},j=c(),M=l(),N=n=>{t(e.replace(/@[\w.-]+(?:\s[\w.-]+){0,2}$/,`@${n} `)),C(!1)};return(0,V.jsxs)(V.Fragment,{children:[i&&(0,V.jsxs)(`div`,{className:`mb-2 p-2 bg-primary/10 border border-primary/30 rounded text-xs`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,V.jsxs)(`span`,{children:[`Replying to @`,i.userName]}),(0,V.jsx)(a,{variant:`ghost`,size:`sm`,className:`p-1 h-auto`,onClick:u,children:`x`})]}),(0,V.jsx)(`p`,{className:`text-gray-400 truncate`,children:i.text})]}),(0,V.jsxs)(`div`,{className:`mt-auto flex-shrink-0 relative`,children:[S&&(0,V.jsx)(H,{users:b,onSelect:N,highlightedIndex:w}),(0,V.jsxs)(`div`,{...s(`tour-chat-composer`),className:v?`relative flex items-end bg-card/85 backdrop-blur-md border border-border rounded-full shadow-[0_8px_30px_rgba(76,29,149,0.12)] focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/30 transition-colors dark:bg-[#100c18]/85 dark:border-white/12 dark:shadow-[0_8px_40px_rgba(0,0,0,0.45)]`:`relative flex items-end bg-card border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/50`,children:[v&&(0,V.jsx)(d,{className:`absolute left-5 bottom-[18px] h-5 w-5 text-primary/80 pointer-events-none z-[2]`}),(()=>{let e=k();return e?(0,V.jsx)(`div`,{"aria-hidden":!0,className:`absolute top-0 left-0 py-3 pr-24 w-full pointer-events-none whitespace-pre-wrap break-words text-transparent ${v?`pl-14`:`pl-4`}`,style:{font:`inherit`,lineHeight:`inherit`,minHeight:`44px`},children:e}):null})(),(0,V.jsx)(`textarea`,{"data-chat-composer":!0,placeholder:M?`Chat is off in the tour replay. Keep this game to carry on.`:p||(h?y?`Tag @Sandscape…`:`Tag @Sandscape to talk to the AI`:y?`Type your message…`:`Type your message or @suggest...`),value:e,onChange:A,disabled:m||M,onKeyDown:e=>{if(S&&b.length>0){if(e.key===`Tab`||e.key===`Enter`){e.preventDefault(),N(b[w]);return}if(e.key===`ArrowDown`){e.preventDefault(),T(e=>(e+1)%b.length);return}if(e.key===`ArrowUp`){e.preventDefault(),T(e=>(e-1+b.length)%b.length);return}if(e.key===`Escape`){e.preventDefault(),C(!1);return}}e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),m||n())},className:`bg-transparent placeholder-gray-400 resize-none min-h-[44px] max-h-[120px] overflow-y-auto py-3 pr-24 w-full caret-foreground focus:outline-none chat-textarea relative z-[1] ${v?`pl-14 text-[15px]`:`pl-4`} ${m||M?`opacity-50 cursor-not-allowed`:``}`,rows:1,style:{height:`auto`},ref:E}),(0,V.jsxs)(`div`,{className:`absolute right-2 bottom-2 flex items-center gap-1 z-[2]`,children:[(0,V.jsx)(G,{onTranscriptionComplete:e=>{r(e)},disabled:m||j||M}),(0,V.jsx)(a,{onClick:n,disabled:m||M,size:`icon`,className:`bg-primary hover:bg-primary/90 rounded-full h-8 w-8`,children:(0,V.jsx)(o,{className:`h-4 w-4`})})]})]})]})]})};export{N as a,E as c,P as i,T as l,L as n,O as o,I as r,D as s,q as t,w as u};