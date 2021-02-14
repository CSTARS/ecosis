!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=87)}([function(t,e,i){"use strict";i.d(e,"a",function(){return n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:t=>t},function(t,e,i){"use strict";i.d(e,"a",function(){return o});i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class n{constructor(t){this.value=t.toString()}toString(){return this.value}}function r(t){if(t instanceof n)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const o=function(t,...e){const i=document.createElement("template");return i.innerHTML=e.reduce((e,i,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof n)return r(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(i)+t[o+1],t[0]),i}},function(t,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"g",function(){return r}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return s}),i.d(e,"i",function(){return a}),i.d(e,"e",function(){return l}),i.d(e,"f",function(){return h}),i.d(e,"a",function(){return d}),i.d(e,"h",function(){return p});i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t){return t.indexOf(".")>=0}function r(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function o(t,e){return 0===t.indexOf(e+".")}function s(t,e){return 0===e.indexOf(t+".")}function a(t,e,i){return e+i.slice(t.length)}function l(t,e){return t===e||o(t,e)||s(t,e)}function h(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function c(t){return Array.isArray(t)?h(t).split("."):t.toString().split(".")}function d(t,e,i){let n=t,r=c(e);for(let t=0;t<r.length;t++){if(!n)return;n=n[r[t]]}return i&&(i.path=r.join(".")),n}function p(t,e,i){let n=t,r=c(e),o=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(!(n=n[r[t]]))return}n[o]=i}else n[e]=i;return r.join(".")}},function(t,e,i){"use strict";var n=i(24),r=(i(5),i(7),i(22)),o=i(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t,e,i,n,r){let o;r&&(o="object"==typeof i&&null!==i)&&(n=t.__dataTemp[e]);let s=n!==i&&(n==n||i==i);return o&&s&&(t.__dataTemp[e]=i),s}const a=Object(o.a)(t=>{return class extends t{_shouldPropertyChange(t,e,i){return s(this,t,e,i,!0)}}}),l=Object(o.a)(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return s(this,t,e,i,this.mutableData)}}});a._mutablePropertyChange=s;var h=i(6),c=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let d=null;function p(){return d}p.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:p,writable:!0}});const u=Object(r.a)(p),f=a(u);const m=Object(r.a)(class{});class g extends m{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=this.children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,e,i)}}_showHideChildren(t){let e=this.children;for(let i=0;i<e.length;i++){let n=e[i];if(Boolean(t)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),Object(c.a)(Object(c.a)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const t=n.__polymerReplaced__;t&&Object(c.a)(Object(c.a)(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}g.prototype.__dataHost,g.prototype.__templatizeOptions,g.prototype._methodHost,g.prototype.__templatizeOwner,g.prototype.__hostProps;const _=a(g);function v(t){let e=t.__dataHost;return e&&e._methodHost||e}function y(t,e,i){let n=i.mutableData?_:g;S.mixin&&(n=S.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(t),function(t,e,i,n){let r=i.hostProps||{};for(let e in n.instanceProps){delete r[e];let i=n.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:x(e,i)})}if(n.forwardHostProp&&e.__dataHost)for(let e in r)t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}})}(r,t,e,i),r}function b(t,e,i){let n=i.forwardHostProp;if(n){let r=e.templatizeTemplateClass;if(!r){let t=i.mutableData?f:u;r=e.templatizeTemplateClass=class extends t{};let o=e.hostProps;for(let t in o)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:w(t,n)}),r.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){d=t,Object.setPrototypeOf(t,e.prototype),new e,d=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function w(t,e){return function(t,i,n){e.call(t.__templatizeOwner,i.substring("_host_".length),n[i])}}function x(t,e){return function(t,i,n){e.call(t.__templatizeOwner,t,i,n[i])}}function S(t,e,i){if(h.f&&!v(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let n=(e?e.constructor:g)._parseTemplate(t),r=n.templatizeInstanceClass;r||(r=y(t,n,i),n.templatizeInstanceClass=r),b(t,n,i);let o=class extends r{};return o.prototype._methodHost=v(t),o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=n.hostProps,o=o}function z(t,e){let i;for(;e;)if(i=e.__templatizeInstance){if(i.__dataHost==t)return i;e=i.__dataHost}else e=Object(c.a)(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var C=i(32);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P=Object(C.a)(l(Object(r.a)(HTMLElement)));customElements.define("dom-bind",class extends P{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),h.f)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(c.a)(Object(c.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(!(t=t||this.querySelector("template"))){let e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var k=i(15),L=i(13),M=i(17),E=i(2),A=i(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const T=l(k.a);class O extends T{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let t=Object(c.a)(Object(c.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=S(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let i=this.__instances;for(let n,r=0;r<i.length&&(n=i[r]);r++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if(Object(E.e)(this.as,e)){let n=t[this.itemsIndexAs];e==this.as&&(this.items[n]=i);let r=Object(E.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,e);this.notifyPath(r,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=L.a.debounce(this.__renderDebouncer,e>0?A.b.after(e):A.a,t.bind(this)),Object(M.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(M.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;this.__filterFn&&(e=e.filter((e,i,n)=>this.__filterFn(t[e],i,n))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i]));const i=this.__itemsIdxToInstIdx={};let n=0;const r=Math.min(e.length,this.__limit);for(;n<r;n++){let r=this.__instances[n],o=e[n],s=t[o];i[o]=n,r?(r._setPendingProperty(this.as,s),r._setPendingProperty(this.indexAs,n),r._setPendingProperty(this.itemsIndexAs,o),r._flushProperties()):this.__insertInstance(s,n,o)}for(let t=this.__instances.length-1;t>=n;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const i=Object(c.a)(e.root);for(let t=0;t<e.children.length;t++){let n=e.children[t];i.appendChild(n)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,i){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(t,e,i){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,t),n._setPendingProperty(this.indexAs,e),n._setPendingProperty(this.itemsIndexAs,i),n._flushProperties()):n=this.__stampInstance(t,e,i);let r=this.__instances[e+1],o=r?r.children[0]:this;return Object(c.a)(Object(c.a)(this).parentNode).insertBefore(n.root,o),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),n=i.indexOf("."),r=n<0?i:i.substring(0,n);if(r==parseInt(r,10)){let t=n<0?"":i.substring(n+1);this.__handleObservedPaths(t);let o=this.__itemsIdxToInstIdx[r],s=this.__instances[o];if(s){let i=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(i,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return z(this.template,t)}}customElements.define(O.is,O);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class I extends k.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=L.a.debounce(this.__renderDebouncer,A.a,()=>this.__render()),Object(M.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(c.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(c.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(M.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Object(c.a)(this).parentNode;if(t){if(!this.__ctor){let t=Object(c.a)(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Object(c.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=S(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(E.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Object(c.a)(this).previousSibling!==e[e.length-1])for(let i,n=0;n<e.length&&(i=e[n]);n++)Object(c.a)(t).insertBefore(i,this)}}else this.__instance=new this.__ctor,Object(c.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(c.a)(t[0]).parentNode;if(e){e=Object(c.a)(e);for(let i,n=0;n<t.length&&(i=t[n]);n++)e.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(I.is,I);var R=i(33),H=i(20);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let N=Object(o.a)(t=>{let e=Object(H.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){let i=e.base||[],n=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),n){let t=Object(R.a)(i,n);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let i=0;i<t.length;i++){let n=t[i];e.forEach((t,i)=>{t<n.index||(t>=n.index+n.removed.length?e.set(i,t+n.addedCount-n.removed.length):e.set(i,-1))});for(let t=0;t<n.addedCount;t++){let i=n.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}this.__updateLinks();let i=0;e.forEach((t,n)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,n)=>{e==t++&&this.deselect(n)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(k.a);class V extends N{static get is(){return"array-selector"}static get template(){return null}}customElements.define(V.is,V);i(38);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let D;D=a._mutablePropertyChange;Boolean;var j=i(1);i.d(e,"a",function(){return B}),i.d(e,"b",function(){return j.a});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const B=Object(n.a)(HTMLElement).prototype},function(t,e,i){"use strict";i(7);var n=i(0),r=(i(6),i(33)),o=i(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(n.a)(t);return s(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>s(t)?(t=t,Object(n.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){s(this._target)?this._listenSlots([this._target]):Object(n.a)(this._target).children&&(this._listenSlots(Object(n.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){s(this._target)?this._unlistenSlots([this._target]):Object(n.a)(this._target).children&&(this._unlistenSlots(Object(n.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,o.a.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Object(r.a)(e,this._effectiveNodes);for(let e,n=0;n<i.length&&(e=i[n]);n++)for(let i,n=0;n<e.removed.length&&(i=e.removed[n]);n++)t.removedNodes.push(i);for(let n,r=0;r<i.length&&(n=i[r]);r++)for(let i=n.index;i<n.index+n.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];s(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];s(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};i(17),i(13);i.d(e,"b",function(){return c}),i.d(e,"a",function(){return m});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l=Element.prototype,h=l.matches||l.matchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector||l.webkitMatchesSelector,c=function(t,e){return h.call(t,e)};class d{constructor(t){this.node=t}observeNodes(t){return new a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(n.a)(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=Object(n.a)(e).parentNode||Object(n.a)(e).host;return e===this.node}getOwnerRoot(){return Object(n.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(n.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(n.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(n.a)(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(n.a)(i).importNode(t,e)}getEffectiveChildNodes(){return a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let n,r=0,o=e.length;r<o&&(n=e[r]);r++)n.nodeType===Node.ELEMENT_NODE&&c(n,t)&&i.push(n);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function p(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}class u{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}d.prototype.cloneNode,d.prototype.appendChild,d.prototype.insertBefore,d.prototype.removeChild,d.prototype.replaceChild,d.prototype.setAttribute,d.prototype.removeAttribute,d.prototype.querySelector,d.prototype.querySelectorAll,d.prototype.parentNode,d.prototype.firstChild,d.prototype.lastChild,d.prototype.nextSibling,d.prototype.previousSibling,d.prototype.firstElementChild,d.prototype.lastElementChild,d.prototype.nextElementSibling,d.prototype.previousElementSibling,d.prototype.childNodes,d.prototype.children,d.prototype.classList,d.prototype.textContent,d.prototype.innerHTML;let f=d;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(d.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=d.prototype[e])}),p(t.prototype,["classList"]),f=t,Object.defineProperties(u.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}(d.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),p(d.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(t){this.node[n]=t},configurable:!0})}}(d.prototype,["textContent","innerHTML"]);const m=function(t){if((t=t||document)instanceof f)return t;if(t instanceof u)return t;let e=t.__domApi;return e||(e=t instanceof Event?new u(t):new f(t),t.__domApi=e),e}},function(t,e,i){"use strict";var n=i(24),r=i(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},s);function l(t,e,i,n){!function(t,e,i){const n=t._noAccessors,r=Object.getOwnPropertyNames(t);for(let o=0;o<r.length;o++){let s=r[o];if(!(s in i))if(n)e[s]=t[s];else{let i=Object.getOwnPropertyDescriptor(t,s);i&&(i.configurable=!0,Object.defineProperty(e,s,i))}}}(e,t,n);for(let t in o)e[t]&&(i[t]=i[t]||[],i[t].push(e[t]))}function h(t,e){for(const i in e){const n=t[i],r=e[i];t[i]=!("value"in r)&&n&&"value"in n?Object.assign({value:n.value},r):r}}function c(t,e,i){let n;const o={};class c extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let t,e=0;e<n.length;e++)(t=n[e]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){const e={};if(n)for(let t=0;t<n.length;t++)h(e,n[t].properties);return h(e,t.properties),e}static get observers(){let e=[];if(n)for(let t,i=0;i<n.length;i++)(t=n[i]).observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=o.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=c.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),r.b&&d(t);const e=Object.getPrototypeOf(this);let i=o.beforeRegister;if(i)for(let t=0;t<i.length;t++)i[t].call(e);if(i=o.registered)for(let t=0;t<i.length;t++)i[t].call(e)}}_applyListeners(){super._applyListeners();const t=o.listeners;if(t)for(let e=0;e<t.length;e++){const i=t[e];if(i)for(let t in i)this._addMethodEventListenerToNode(this,t,i[t])}}_ensureAttributes(){const t=o.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const i=t[e];for(let t in i)this._ensureAttribute(t,i[t])}super._ensureAttributes()}ready(){super.ready();let t=o.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=o.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=o.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,i){super.attributeChanged();let n=o.attributeChanged;if(n)for(let r=0;r<n.length;r++)n[r].call(this,t,e,i)}}if(i){Array.isArray(i)||(i=[i]);let t=e.prototype.behaviors;n=function t(e,i,n){i=i||[];for(let r=e.length-1;r>=0;r--){let o=e[r];o?Array.isArray(o)?t(o,i):i.indexOf(o)<0&&(!n||n.indexOf(o)<0)&&i.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,t),c.prototype.behaviors=t?t.concat(i):n}const d=e=>{n&&function(t,e,i){for(let n=0;n<e.length;n++)l(t,e[n],i,a)}(e,n,o),l(e,t,o,s)};return r.b||d(c.prototype),c.generatedFrom=t,c}i(7);i.d(e,"a",function(){return d});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const d=function(t){let e;return e="function"==typeof t?t:d.Class(t),customElements.define(e.is,e),e};d.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Object(n.a)(HTMLElement)):Object(n.a)(HTMLElement);return(i=c(t,i,t.behaviors)).is=i.prototype.is=t.is,i}},function(t,e,i){"use strict";i.d(e,"h",function(){return r}),i.d(e,"d",function(){return o}),i.d(e,"e",function(){return s}),i.d(e,"c",function(){return a}),i.d(e,"f",function(){return l}),i.d(e,"a",function(){return h}),i.d(e,"b",function(){return c}),i.d(e,"g",function(){return d});i(7);var n=i(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let o=Object(n.a)(document.baseURI||window.location.href);let s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let a=!1;let l=!1;let h=!1;let c=!1;let d=!1},function(t,e,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,i){"use strict";i.d(e,"a",function(){return o});i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;const o=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=n++;return function(n){let r=n.__mixinSet;if(r&&r[i])return n;let o=e,s=o.get(n);s||(s=t(n),o.set(n,s));let a=Object.create(s.__mixinSet||r||null);return a[i]=!0,s.__mixinSet=a,s}}},function(t,e,i){"use strict";i.d(e,"b",function(){return l}),i.d(e,"a",function(){return h});i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0,r=0,o=[],s=0,a=document.createTextNode("");new window.MutationObserver(function(){const t=o.length;for(let e=0;e<t;e++){let t=o[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}o.splice(0,t),r+=t}).observe(a,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},h={run:t=>(a.textContent=s++,o.push(t),n++),cancel(t){const e=t-r;if(e>=0){if(!o[e])throw new Error("invalid async handle: "+t);o[e]=null}}}},function(t,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return l});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=!(window.ShadyDOM&&window.ShadyDOM.inUse);let r,o;function s(t){r=(!t||!t.shimcssproperties)&&(n||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(o=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=r},function(t,e,i){t.exports={BaseModel:i(51),BaseStore:i(53),BaseService:i(55),BaseMixin:i(57),Mixin:i(58),EventBus:i(25),EventInterface:i(59),LitCorkUtils:i(60),fetch:i(41),LightDom:i(61)}},function(t,e,i){"use strict";i.d(e,"c",function(){return a}),i.d(e,"b",function(){return l}),i.d(e,"a",function(){return h});i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n,r,o=/(url\()([^)]*)(\))/g,s=/(^\/)|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if(void 0===n){n=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",n="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),n?new URL(t,e).href:(r||((r=document.implementation.createHTMLDocument("temp")).base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=e,r.anchor.href=t,r.anchor.href||t)}function l(t,e){return t.replace(o,function(t,i,n,r){return i+"'"+a(n.replace(/["']/g,""),e)+"'"+r})}function h(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return s});i(7),i(8),i(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,r.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof n?t._cancelAsync():t=new n,t.setConfig(e,i),t}}let r=new Set;const o=function(t){r.add(t)},s=function(){const t=Boolean(r.size);return r.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return a});i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n={},r=/-[a-z]/g,o=/([A-Z])/g;function s(t){return n[t]||(n[t]=t.indexOf("-")<0?t:t.replace(r,t=>t[1].toUpperCase()))}function a(t){return n[t]||(n[t]=t.replace(o,"-$1").toLowerCase())}},function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i(20),r=i(1);i.d(e,"b",function(){return r.a});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=Object(n.a)(HTMLElement)},function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"b",function(){return r}),i.d(e,"a",function(){return o});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/@media\s(.*)/},function(t,e,i){"use strict";i.d(e,"b",function(){return r});i(7);var n=i(13);i.d(e,"a",function(){return n.b});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(n.c)()}while(t||e)}},function(t,e,i){"use strict";i.d(e,"c",function(){return r}),i.d(e,"b",function(){return o}),i.d(e,"a",function(){return s});var n=i(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function o(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function s(t){const e=n.b.test(t)||n.c.test(t);return n.b.lastIndex=0,n.c.lastIndex=0,e}},function(t,e){t.exports='<dom-module id="shared-styles">\n  <template>\n    <style>\n      paper-material {\n        background: white;\n        display: block;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        background: rgb(77,182,172);\n        background: linear-gradient(90deg, rgba(77,182,172,1) 0%, rgba(0,134,125,0.7973564425770308) 65%, rgba(34,134,195,1) 100%);\n      }\n\n      input, select, button, textarea {\n        font-size        : var(--font-size);\n        font-weight      : var(--font-weight);\n        color            : var(--text-primary-color);\n        box-sizing       : border-box;\n      }\n\n      input, textarea, select {\n        border-radius: 4px;\n        background-color: white;\n        border: 1px solid var(--dark-background-color);\n        padding: 9px;\n        margin: 3px 1px;\n      }\n\n      input:focus {\n        border: 1px solid var(--default-primary-color);\n        outline: none;\n      }\n\n      input[disabled] {\n        background-color: var(--default-background-color);\n        color: var(--secondary-text-color);\n        cursor: not-allowed;\n      }\n\n      select {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n\n      select::after {\n        width: 0;\n        height: 0;\n        border-left: 4px solid transparent;\n        border-right: 4px solid transparent;\n        border-top: 7px solid #666;\n        margin-top: -3px;\n      }\n\n      .help {\n        color: var(--secondary-text-color);\n        font-size: 14px;\n      }\n\n      .narrow-container {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n      }\n      \n      .narrow-container > * {\n        max-width: var(--max-text-width);\n        width: 100%;\n      }\n\n      .container {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .container > * {\n        max-width: var(--max-width);\n        width: 100%;\n      }\n\n      .main-panel {\n        background-color: white;\n        padding: 40px;\n        margin: 10px;\n        border-radius: 4px;\n        border: 1px solid #ddd;\n      }\n\n      a, a:visited {\n        color: var(--text-primary-color);\n        cursor: pointer;\n        text-decoration: none;\n      }\n\n      a[highlight], a[highlight]:visited {\n        text-decoration: none;\n        color: var(--default-primary-color);\n      }\n\n      a:hover {\n        color: var(--default-primary-color);\n      }\n\n      a[inverse], a[inverse]:visited {\n        color: var(--inverse-text-color);\n      }\n\n      h1, h2, h3, h4 {\n        font-weight: 400;\n      }\n\n      h2.uheader {\n        border-bottom-width: 2px;\n        border-bottom-style: solid;\n        margin: 0 0 10px 0;\n        padding-bottom: 5px;\n      }\n\n      h2.uheader.blue, h2.uheader[color="blue"] {\n        border-bottom-color: var(--default-secondary-color);\n      }\n      h2.uheader.green, h2.uheader[color="green"] {\n        border-bottom-color: var(--default-primary-color);\n      }\n      h2.uheader.lightgreen, h2.uheader[color="lightgreen"] {\n        border-bottom-color: var(--light-primary-color);\n      }\n      h2.uheader.lightblue, h2.uheader[color="lightblue"] {\n        border-bottom-color: var(--light-secondary-color);\n      }\n      h2.uheader.dark, h2.uheader[color="dark"] {\n        border-bottom-color: var(--text-primary-color);\n      }\n\n      h3.uheader {\n        border-bottom-width: 2px;\n        border-bottom-style: solid;\n        margin: 0 0 8px 0;\n        padding-bottom: 0px;\n      }\n\n      h3.uheader.blue, h3.uheader[color="blue"] {\n        border-bottom-color: var(--default-secondary-color);\n      }\n      h3.uheader.green, h3.uheader[color="green"] {\n        border-bottom-color: var(--default-primary-color);\n      }\n      h3.uheader.lightgreen, h3.uheader[color="lightgreen"] {\n        border-bottom-color: var(--light-primary-color);\n      }\n      h3.uheader.lightblue, h3.uheader[color="lightblue"] {\n        border-bottom-color: var(--light-secondary-color);\n      }\n      h3.uheader.dark, h3.uheader[color="dark"] {\n        border-bottom-color: var(--text-primary-color);\n      }\n\n      .indent-panel {\n        margin-left: 45px;\n      }\n\n      @media(max-width: 750px) {\n        .main-panel {\n          padding: 25px;\n        }\n        .indent-panel {\n          margin-left: 10px;\n        }\n      }\n\n      @media(max-width: 600px) {\n        .main-panel {\n          padding: 15px;\n        }\n        .indent-panel {\n          margin-left: 5px;\n        }\n      }\n\n      .row {\n        display: flex;\n        margin-bottom: 35px;\n      }\n\n      .row:last-child {\n        margin-bottom: 0;\n      }\n\n      .row > * {\n        flex : 1;\n        padding-right: 10px;\n        padding-left: 10px;\n      }\n      .row > *:first-child {\n        padding-left: 0;\n      }\n      .row > *:last-child {\n        padding-right: 0;\n      }\n\n      @media(max-width: 768px) {\n        .row {\n          display: block;\n        }\n        .row > * {\n          padding: 0px;\n        }\n      }\n\n      /* HEADER */\n      .header {\n        display: flex;\n        align-items: center;\n        background: var(--default-primary-color);\n        padding: 10px;\n      }\n\n      .header[sandbox] {\n        background: var(--default-secondary-color);\n      }\n      \n      .header [main-title] {\n        flex: 1;\n        font-size: 22px;\n      }\n\n      .header [main-title] small {\n        font-size: 14px;\n      }\n\n      [icon="menu"], [main-title] {\n        color: var(--inverse-text-color);\n      }\n\n      paper-icon-button {\n        color: var(--inverse-text-color);\n      }\n\n      @keyframes show {\n        0%   { opacity: .5; transform: scale(.9) }\n        100% { opacity: 1; transform: scale(1) }\n      }\n\n      #menu {\n        position: absolute;\n        top: 50px;\n        right : 0;\n        background: var(--light-primary-color);\n        color: var(--default-background-color);\n        white-space: nowrap;\n        animation: show 250ms ease-out;\n        z-index: 1000;\n        border-radius: 0 0 6px 6px;\n        min-width: 150px;\n      }\n\n      #menu a {\n        color: var(--default-background-color);\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        border-bottom: 1px solid var(--default-background-color);\n        padding: 15px;\n        cursor: pointer;\n      }\n\n      #menu a:hover {\n        color: white;\n        /* background-color: var(--default-primary-color); */\n      }\n\n      #menu a:hover iron-icon {\n        transform: scale(1.5);\n      }\n\n      #menu a iron-icon {\n        transform: scale(1);\n        transition: transform 200ms ease-out;\n        margin-right: 15px;\n      }\n\n      @media(max-width: 768px) {\n        [main-title] small {\n          display: none;\n        }\n      }\n    </style>\n  </template>\n</dom-module>'},function(t,e,i){"use strict";i(7);var n=i(6),r=i(8),o=i(28),s=i(12),a=i(23),l=i(22);const h=[];var c=i(31);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const d=Object(r.a)(t=>{const e=Object(c.a)(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=function(t){const e={};for(let i in t){const n=t[i];e[i]="function"==typeof n?{type:n}:n}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,h.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var p=i(0);i.d(e,"a",function(){return m});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const u="3.2.0",f=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(r.a)(t=>{const e=d(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return u}static _finalizeClass(){super._finalizeClass();const t=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);var e;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):n.b||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let o in t)e=this.prototype,i=o,n=t[o],r=t,n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(i)?console.warn(`Cannot redefine computed property '${i}'.`):e._createComputedProperty(i,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(i)?e._createReadOnlyProperty(i,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(i)&&console.warn(`Cannot make readOnly property '${i}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(i)?e._createReflectedProperty(i):!1===n.reflectToAttribute&&e._hasReflectEffect(i)&&console.warn(`Cannot make reflected property '${i}' non-reflected.`),n.notify&&!e._hasNotifyEffect(i)?e._createNotifyingProperty(i):!1===n.notify&&e._hasNotifyEffect(i)&&console.warn(`Cannot make notify property '${i}' non-notify.`),n.observer&&e._createPropertyObserver(i,n.observer,r[n.observer]),e._addPropertyToAttributeMap(i);var e,i,n,r}static createObservers(t,e){const i=this.prototype;for(let n=0;n<t.length;n++)i._createMethodObserver(t[n],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!n.f||n.a)&&(e=a.a.import(t,"template"),n.f&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(s.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.d,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let n=e[i];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(s.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;!function(t,e,i,n){if(!f){const r=e.content.querySelectorAll("style"),s=Object(o.c)(e),a=Object(o.b)(i),l=e.content.firstElementChild;for(let i=0;i<a.length;i++){let r=a[i];r.textContent=t._processStyleText(r.textContent,n),e.content.insertBefore(r,l)}let h=0;for(let e=0;e<s.length;e++){let i=s[e],o=r[h];o!==i?(i=i.cloneNode(!0),o.parentNode.insertBefore(i,o)):h++,i.textContent=t._processStyleText(i.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i)}(this,e,t,i?Object(s.c)(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(p.a)(this);if(e.attachShadow)return t?(e.shadowRoot||e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(t),n.g&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(s.c)(this.importPath)),Object(s.c)(t,e)}static _parseTemplateContent(t,e,i){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,i)}static _addTemplatePropertyEffect(t,e,i){return!n.b||e in this._properties||console.warn(`Property '${e}' used in template but not declared in 'properties'; `+"attribute will not be observed."),super._addTemplatePropertyEffect(t,e,i)}}})},function(t,e,i){"use strict";i.d(e,"a",function(){return H}),i.d(e,"b",function(){return N}),i.d(e,"c",function(){return D});i(7);var n=i(9),r=i(13),o=i(6),s=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGestures",h="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=25,p=5,u=2500,f=["mousedown","mousemove","mouseup","click"],m=[0,1,4,2],g=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function _(t){return f.indexOf(t)>-1}let v=!1;function y(t){if(!_(t)&&"touchend"!==t)return a&&v&&o.c?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){v=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let b=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const w=[],x={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},S={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function z(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let C=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[h]={skip:!0},"click"===t.type)){let e=!1,n=A(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)w.push(n[t]);else if(i=n[t],x[i.localName]){let i=z(n[t]);for(let t=0;t<i.length;t++)e=e||w.indexOf(i[t])>-1}if(n[t]===L.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function P(t){let e=b?["click"]:f;for(let i,n=0;n<e.length;n++)i=e[n],t?(w.length=0,document.addEventListener(i,C,!0)):document.removeEventListener(i,C,!0)}function k(t){let e=t.type;if(!_(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!g&&(e=m[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let L={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function M(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function E(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){L.mouse.mouseIgnoreJob||P(!0),L.mouse.target=A(t)[0],L.mouse.mouseIgnoreJob=r.a.debounce(L.mouse.mouseIgnoreJob,n.b.after(u),function(){P(),L.mouse.target=null,L.mouse.mouseIgnoreJob=null})},!!v&&{passive:!0});const A=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],T={},O=[];function I(t){const e=A(t);return e.length>0?e[0]:t.target}function R(t){let e,i=t.type,n=t.currentTarget[l];if(!n)return;let r=n[i];if(r){if(!t[h]&&(t[h]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(L.touch.id=e.identifier),L.touch.id!==e.identifier)return;a||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)L.touch.x=e.clientX,L.touch.y=e.clientY,L.touch.scrollDecided=!1;else if("touchmove"===i){if(L.touch.scrollDecided)return;L.touch.scrollDecided=!0;let i=function(t){let e="auto",i=A(t);for(let t,n=0;n<i.length;n++)if((t=i[n])[c]){e=t[c];break}return e}(t),n=!1,r=Math.abs(L.touch.x-e.clientX),o=Math.abs(L.touch.y-e.clientY);t.cancelable&&("none"===i?n=!0:"pan-x"===i?n=o>r:"pan-y"===i&&(n=r>o)),n?t.preventDefault():B("track")}}(t)}if(!(e=t[h]).skip){for(let i,n=0;n<O.length;n++)r[(i=O[n]).name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let n,o=0;o<O.length;o++)r[(n=O[o]).name]&&!e[n.name]&&(e[n.name]=!0,n[i](t))}}}function H(t,e,i){return!!T[e]&&(function(t,e,i){let n=T[e],r=n.deps,o=n.name,s=t[l];s||(t[l]=s={});for(let e,i,n=0;n<r.length;n++)e=r[n],b&&_(e)&&"click"!==e||((i=s[e])||(s[e]=i={_count:0}),0===i._count&&t.addEventListener(e,R,y(e)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),n.touchAction&&D(t,n.touchAction)}(t,e,i),!0)}function N(t,e,i){return!!T[e]&&(function(t,e,i){let n=T[e],r=n.deps,o=n.name,s=t[l];if(s)for(let e,i,n=0;n<r.length;n++)e=r[n],(i=s[e])&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,R,y(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function V(t){O.push(t);for(let e=0;e<t.emits.length;e++)T[t.emits[e]]=t}function D(t,e){a&&t instanceof HTMLElement&&n.a.run(()=>{t.style.touchAction=e}),t[c]=e}function j(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,Object(s.a)(t).dispatchEvent(n),n.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function B(t){let e=function(t){for(let e,i=0;i<O.length;i++){e=O[i];for(let i,n=0;n<e.emits.length;n++)if((i=e.emits[n])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function F(t,e,i,n){e&&j(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(t){return B(t)}})}function $(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),r=Math.abs(t.y-i);return n>=p||r>=p}function U(t,e,i){if(!e)return;let n,r=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],s=o.x-t.x,a=o.y-t.y,l=0;r&&(n=o.x-r.x,l=o.y-r.y),j(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM&&n!==(n=n.shadowRoot.elementFromPoint(t,e));)n&&(i=n);return i}(i.clientX,i.clientY)}})}function q(t,e,i){let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),o=I(i||e);!o||S[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=d&&r<=d||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=I(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,r=t.pageY;return!(n>=i.left&&n<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(e))&&(t.prevent||j(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}V({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){E(this.info)},mousedown:function(t){if(!k(t))return;let e=I(t),i=this;M(this.info,function(t){k(t)||(F("up",e,t),E(i.info))},function(t){k(t)&&F("up",e,t),E(i.info)}),F("down",e,t)},touchstart:function(t){F("down",I(t),t.changedTouches[0],t)},touchend:function(t){F("up",I(t),t.changedTouches[0],t)}}),V({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,E(this.info)},mousedown:function(t){if(!k(t))return;let e=I(t),i=this,n=function(t){let n=t.clientX,r=t.clientY;$(i.info,n,r)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&B("tap"),i.info.addMove({x:n,y:r}),k(t)||(i.info.state="end",E(i.info)),e&&U(i.info,e,t),i.info.started=!0)};M(this.info,n,function(t){i.info.started&&n(t),E(i.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=I(t),i=t.changedTouches[0],n=i.clientX,r=i.clientY;$(this.info,n,r)&&("start"===this.info.state&&B("tap"),this.info.addMove({x:n,y:r}),U(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=I(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),U(this.info,e,i))}}),V({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){k(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){k(t)&&q(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){q(this.info,t.changedTouches[0],t)}})},function(t,e,i){"use strict";i(7);var n=i(0),r=i(8),o=i(2),s=i(14),a=i(30);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),h={"dom-if":!0,"dom-repeat":!0};function c(t){let e=t.getAttribute("is");if(e&&h[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;)t.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return t}function d(t,e){let i=e.parentInfo&&d(t,e.parentInfo);if(!i)return t;l.currentNode=i;for(let t=l.firstChild(),i=0;t;t=l.nextSibling())if(e.parentIndex===i++)return t}function p(t,e,i,n){n.id&&(e[n.id]=i)}function u(t,e,i){if(i.events&&i.events.length)for(let n,r=0,o=i.events;r<o.length&&(n=o[r]);r++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function f(t,e,i){i.templateInfo&&(e._templateInfo=i.templateInfo)}const m=Object(r.a)(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let n,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(r,e,i)||n,l.currentNode=r,l.firstChild()&&(n=this._parseTemplateChildNodes(r,e,i)||n),r.hasAttributes&&r.hasAttributes()&&(n=this._parseTemplateNodeAttributes(r,e,i)||n),n}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName){l.currentNode=t;for(let n,r=l.firstChild(),o=0;r;r=n){if("template"==r.localName&&(r=c(r)),l.currentNode=r,n=l.nextSibling(),r.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,n=l.nextSibling(),t.removeChild(i),i=n;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let s={parentIndex:o,parentInfo:i};this._parseTemplateNode(r,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),l.currentNode=r,l.parentNode()&&o++}}}static _parseTemplateNestedTemplate(t,e,i){let n=this._parseTemplate(t,e);return(n.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,i){let n=!1,r=Array.from(t.attributes);for(let o,s=r.length-1;o=r[s];s--)n=this._parseTemplateNodeAttribute(t,e,i,o.name,o.value)||n;return n}static _parseTemplateNodeAttribute(t,e,i,n,r){return"on-"===n.slice(0,3)?(t.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:r}),!0):"id"===n&&(i.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),i=e.nodeInfoList,n=e.content||t.content,r=document.importNode(n,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let o=r.nodeList=new Array(i.length);r.$={};for(let t,e=0,n=i.length;e<n&&(t=i[e]);e++){let i=o[e]=d(r,t);p(0,r.$,i,t),f(0,i,t),u(this,i,t)}return r=r}_addMethodEventListenerToNode(t,e,i,n){let r=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||t,0,i);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}}});var g=i(6);i.d(e,"a",function(){return q});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
let _=0;const v={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},y=/[A-Z]/;function b(t,e){let i=t[e];if(i){if(!t.hasOwnProperty(e)){i=t[e]=Object.create(t[e]);for(let t in i){let e=i[t],n=i[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}}else i=t[e]={};return i}function w(t,e,i,n,r,o){if(e){let s=!1,a=_++;for(let l in i)x(t,e,a,l,i,n,r,o)&&(s=!0);return s}return!1}function x(t,e,i,n,r,s,a,l){let h=!1,c=e[a?Object(o.g)(n):n];if(c)for(let e,o=0,d=c.length;o<d&&(e=c[o]);o++)e.info&&e.info.lastRun===i||a&&!S(n,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,n,r,s,e.info,a,l),h=!0);return h}function S(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!Object(o.b)(i,t))||!(!e.wildcard||!Object(o.c)(i,t))}return!0}function z(t,e,i,n,r){let o="string"==typeof r.method?t[r.method]:r.method,s=r.property;o?o.call(t,t.__data[s],n[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function C(t,e,i){let n=Object(o.g)(e);if(n!==e){return P(t,Object(s.a)(n)+"-changed",i[e],e),!0}return!1}function P(t,e,i,r){let o={value:i,queueProperty:!0};r&&(o.path=r),Object(n.a)(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function k(t,e,i,n,r,s){let a=(s?Object(o.g)(e):e)!=e?e:null,l=a?Object(o.a)(t,a):t.__data[e];a&&void 0===l&&(l=i[e]),P(t,r.eventName,l,a)}function L(t,e,i,n,r){let o=t.__data[e];g.e&&(o=Object(g.e)(o,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,o)}function M(t,e,i,n,r){let o=H(t,e,i,n,r),s=r.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,o,!0):t[s]=o}function E(t,e,i,n,r,o,a){i.bindings=i.bindings||[];let l={kind:n,target:r,parts:o,literal:a,isCompound:1!==o.length};if(i.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(s.a)(r)+"-changed",l.listenerNegate=e}let h=e.nodeInfoList.length;for(let i=0;i<l.parts.length;i++){let n=l.parts[i];n.compoundIndex=i,A(t,e,l,n,h)}}function A(t,e,i,n,r){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,s={index:r,binding:i,part:n,evaluator:t};for(let i=0;i<o.length;i++){let n=o[i];"string"==typeof n&&((n=B(n)).wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:T,info:s,trigger:n})}}}function T(t,e,i,n,r,s,a){let l=a[r.index],h=r.binding,c=r.part;if(s&&c.source&&e.length>c.source.length&&"property"==h.kind&&!h.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[h.target]){let n=i[e];e=Object(o.i)(c.source,h.target,e),l._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,i,n,r){r=function(t,e,i,n){if(i.isCompound){let r=t.__dataCompoundStorage[i.target];r[n.compoundIndex]=e,e=r.join("")}return"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,r,i,n),g.e&&(r=Object(g.e)(r,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,r,i.target);else{let n=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[v.READ_ONLY]&&e[v.READ_ONLY][n]||e._setPendingProperty(n,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,r)}}(t,l,h,c,r.evaluator._evaluateBinding(t,c,e,i,n,s))}}function O(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n[t].literal;let o=e.target;i[o]=r,e.literal&&"property"==e.kind&&(t[o]=e.literal)}}function I(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,function(t){!function(t,e,i,n,r){let s,a=t.detail,l=a&&a.path;l?(n=Object(o.i)(i,n,l),s=a&&a.value):s=t.currentTarget[i],s=r?!s:s,e[v.READ_ONLY]&&e[v.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,s,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,i.target,n.source,n.negate)})}}function R(t,e,i,n,r,o){o=e.static||o&&("object"!=typeof o||o[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:o};for(let r,o=0;o<e.args.length&&(r=e.args[o]);o++)r.literal||t._addPropertyEffect(r.rootProperty,i,{fn:n,info:s,trigger:r});o&&t._addPropertyEffect(e.methodName,i,{fn:n,info:s})}function H(t,e,i,n,r){let o=t._methodHost||t,s=o[r.methodName];if(s){let n=t._marshalArgs(r.args,e,i);return s.apply(o,n)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const N=[],V=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function D(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function j(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:N};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let i=B(t);return i.literal||(e.static=!1),i},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function B(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=Object(o.g)(e),i.structured=Object(o.d)(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function F(t,e,i){let n=Object(o.a)(t,i);return void 0===n&&(n=e[i]),n}function $(t,e,i,n){t.notifyPath(i+".splices",{indexSplices:n}),t.notifyPath(i+".length",e.length)}function U(t,e,i,n,r,o){$(t,e,i,[{index:n,addedCount:r,removed:o,object:e,type:"splice"}])}const q=Object(r.a)(t=>{const e=m(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return v}_initializeProperties(){super._initializeProperties(),Z.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[v.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==v.READ_ONLY);let n=b(this,e)[t];n||(n=this[e][t]=[]),n.push(i)}_removePropertyEffect(t,e,i){let n=b(this,e)[t],r=n.indexOf(i);r>=0&&n.splice(r,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,v.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,v.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,v.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,v.COMPUTE)}_setPendingPropertyOrPath(t,e,i,n){if(n||Object(o.g)(Array.isArray(t)?t[0]:t)!==t){if(!n){let i=Object(o.a)(this,t);if(!(t=Object(o.h)(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let n=t.__dataLinkedPaths;if(n){let r;for(let s in n){let a=n[s];Object(o.c)(s,e)?(r=Object(o.i)(s,a,e),t._setPendingPropertyOrPath(r,i,!0,!0)):Object(o.c)(a,e)&&(r=Object(o.i)(a,s,e),t._setPendingPropertyOrPath(r,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||(t[e]=i)}_setPendingProperty(t,e,i){let n=this.__dataHasPaths&&Object(o.d)(t),r=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[v.NOTIFY]&&this[v.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[v.READ_ONLY]&&this[v.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,i,n){let r=t[v.COMPUTE];if(r){let o=e;for(;w(t,r,o,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}}(this,e,i,n);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,i,n),this._flushClients(),w(this,this[v.REFLECT],e,i,n),w(this,this[v.OBSERVE],e,i,n),r&&function(t,e,i,n,r){let o,s,a=t[v.NOTIFY],l=_++;for(let s in e)e[s]&&(a&&x(t,a,l,s,i,n,r)?o=!0:r&&C(t,s,i)&&(o=!0));o&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,e,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[v.PROPAGATE]&&w(this,this[v.PROPAGATE],t,e,i);let n=this.__templateInfo;for(;n;)w(this,n.propertyEffects,t,e,i,n.nodeList),n=n.nextTemplateInfo}linkPaths(t,e){t=Object(o.f)(t),e=Object(o.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(o.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};$(this,Object(o.a)(this,t,i),i.path,e)}get(t,e){return Object(o.a)(e||this,t)}set(t,e,i){i?Object(o.h)(i,t,e):this[v.READ_ONLY]&&this[v.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},n=Object(o.a)(this,t,i),r=n.length,s=n.push(...e);return e.length&&U(this,n,i.path,r,e.length,[]),s}pop(t){let e={path:""},i=Object(o.a)(this,t,e),n=Boolean(i.length),r=i.pop();return n&&U(this,i,e.path,i.length,0,[r]),r}splice(t,e,i,...n){let r,s={path:""},a=Object(o.a)(this,t,s);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?a.splice(e):a.splice(e,i,...n),(n.length||r.length)&&U(this,a,s.path,e,n.length,r),r}shift(t){let e={path:""},i=Object(o.a)(this,t,e),n=Boolean(i.length),r=i.shift();return n&&U(this,i,e.path,0,0,[r]),r}unshift(t,...e){let i={path:""},n=Object(o.a)(this,t,i),r=n.unshift(...e);return e.length&&U(this,n,i.path,0,e.length,[]),r}notifyPath(t,e){let i;if(1==arguments.length){let n={path:""};e=Object(o.a)(this,t,n),i=n.path}else i=Array.isArray(t)?Object(o.f)(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,v.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let n={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,v.OBSERVE,{fn:z,info:n,trigger:{name:t}}),i&&this._addPropertyEffect(e,v.OBSERVE,{fn:z,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let i=j(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");R(this,i,v.OBSERVE,H,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,v.NOTIFY,{fn:k,info:{eventName:Object(s.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,v.REFLECT,{fn:L,info:{attrName:e}})}_createComputedProperty(t,e,i){let n=j(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");R(this,n,v.COMPUTE,M,t,i)}_marshalArgs(t,e,i){const n=this.__data,r=[];for(let s=0,a=t.length;s<a;s++){let{name:a,structured:l,wildcard:h,value:c,literal:d}=t[s];if(!d)if(h){const t=Object(o.c)(a,e),r=F(n,i,t?e:a);c={path:t?e:a,value:r,base:t?Object(o.a)(n,a):r}}else c=l?F(n,i,a):n[a];r[s]=c}return r}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),n=this.__templateInfo==i;if(!n)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e&&((i=Object.create(i)).wasPreBound=n,!n&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=i,i.previousTemplateInfo=t,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(i)}_stampTemplate(t){Z.beginHosting(this);let e=super._stampTemplate(t);Z.endHosting(this);let i=this._bindTemplate(t,!0);if(i.nodeList=e.nodeList,!i.wasPreBound){let t=i.childNodes=[];for(let i=e.firstChild;i;i=i.nextSibling)t.push(i)}return e.templateInfo=i,function(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let r=n[e],o=i[e],s=r.bindings;if(s)for(let e=0;e<s.length;e++){let i=s[e];O(o,i),I(o,t,i)}o.__dataHost=t}}(this,i),this.__dataReady&&w(this,i.propertyEffects,this.__data,null,!1,i.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,e,i){let n=super._parseTemplateNode(t,e,i);if(t.nodeType===Node.TEXT_NODE){let r=this._parseBindings(t.textContent,e);r&&(t.textContent=D(r)||" ",E(this,e,i,"text","textContent",r),n=!0)}return n}static _parseTemplateNodeAttribute(t,e,i,n,r){let o=this._parseBindings(r,e);if(o){let r=n,a="property";y.test(n)?a="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),a="attribute");let l=D(o);return l&&"attribute"==a&&("class"==n&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(n)),t.setAttribute(n,l)),"input"===t.localName&&"value"===r&&t.setAttribute(r,""),t.removeAttribute(r),"property"===a&&(n=Object(s.b)(n)),E(this,e,i,a,n,o,l),!0}return super._parseTemplateNodeAttribute(t,e,i,n,r)}static _parseTemplateNestedTemplate(t,e,i){let n=super._parseTemplateNestedTemplate(t,e,i),r=i.templateInfo.hostProps;for(let t in r)E(this,e,i,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}]);return n}static _parseBindings(t,e){let i,n=[],r=0;for(;null!==(i=V.exec(t));){i.index>r&&n.push({literal:t.slice(r,i.index)});let o=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,h="",c=-1;"{"==o&&(c=a.indexOf("::"))>0&&(h=a.substring(c+2),a=a.substring(0,c),l=!0);let d=j(a),p=[];if(d){let{args:t,methodName:i}=d;for(let e=0;e<t.length;e++){let i=t[e];i.literal||p.push(i)}let n=e.dynamicFns;(n&&n[i]||d.static)&&(p.push(i),d.dynamicFn=!0)}else p.push(a);n.push({source:a,mode:o,negate:s,customEvent:l,signature:d,dependencies:p,event:h}),r=V.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,i,n,r,s){let a;return a=e.signature?H(t,i,n,0,e.signature):i!=e.source?Object(o.a)(t,e.source):s&&Object(o.d)(i)?Object(o.a)(t,i):t.__data[i],e.negate&&(a=!a),a}}});const Z=new class{constructor(){this.stack=[]}registerHost(t){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(t)}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},function(t,e,i){"use strict";i.d(e,"a",function(){return h});i(7);var n=i(12),r=i(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o={},s={};function a(t,e){o[t]=s[t.toLowerCase()]=e}function l(t){return o[t]||s[t.toLowerCase()]}class h extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=l(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,n){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(n.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(n.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(r.f&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}h.prototype.modules=o,customElements.define("dom-module",h)},function(t,e,i){"use strict";var n=i(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function o(t){return function t(e,i){let n=i.substring(e.start,e.end-1);e.parsedCssText=e.cssText=n.trim();if(e.parent){let t=e.previous?e.previous.end:e.parent.start;n=(n=(n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})}(n=i.substring(t,e.start-1))).replace(c.multipleSpaces," ")).substring(n.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=n.trim();e.atRule=0===r.indexOf(u),e.atRule?0===r.indexOf(p)?e.type=a.MEDIA_RULE:r.match(c.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(c.multipleSpaces).pop()):0===r.indexOf(d)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let r=e.rules;if(r)for(let e,n=0,o=r.length;n<o&&(e=r[n]);n++)t(e,i);return e}(function(t){let e=new r;e.start=0,e.end=t.length;let i=e;for(let n=0,o=t.length;n<o;n++)if(t[n]===l){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;(i=new r).start=n+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[n]===h&&(i.end=n+1,i=i.parent||e);return e}(t=t.replace(c.comments,"").replace(c.port,"")),t)}function s(t,e,i=""){let n="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(d)}(i))for(let t,r=0,o=i.length;r<o&&(t=i[r]);r++)n=s(t,e,n);else(n=(n=e?t.cssText:function(t){return function(t){return t.replace(c.mixinApply,"").replace(c.varApply,"")}(t=function(t){return t.replace(c.customProp,"").replace(c.mixinProp,"")}(t))}(t.cssText)).trim())&&(n="  "+n+"\n")}return n&&(t.selector&&(i+=t.selector+" "+l+"\n"),i+=n,t.selector&&(i+=h+"\n\n")),i}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",h="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},d="--",p="@media",u="@";var f=i(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const m=new Set,g="shady-unscoped";function _(t){const e=t.textContent;if(!m.has(e)){m.add(e);const i=t.cloneNode(!0);document.head.appendChild(i)}}function v(t){return t.hasAttribute(g)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function y(t,e){return t?("string"==typeof t&&(t=o(t)),e&&w(t,e),s(t,n.c)):""}function b(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=o(t.textContent)),t.__cssRules||null}function w(t,e,i,n){if(!t)return;let r=!1,o=t.type;if(n&&o===a.MEDIA_RULE){let e=t.selector.match(f.a);e&&(window.matchMedia(e[1]).matches||(r=!0))}o===a.STYLE_RULE?e(t):i&&o===a.KEYFRAMES_RULE?i(t):o===a.MIXIN_RULE&&(r=!0);let s=t.rules;if(s&&!r)for(let t,r=0,o=s.length;r<o&&(t=s[r]);r++)w(t,e,i,n)}function x(t,e){let i=0;for(let n=e,r=t.length;n<r;n++)if("("===t[n])i++;else if(")"===t[n]&&0==--i)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const S="css-build";function z(t){if(void 0!==n.a)return n.a;if(void 0===t.__cssBuild){const e=t.getAttribute(S);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===S)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function C(t){return""!==z(t)}var P=i(18);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const k=/;\s*/m,L=/^\s*(initial)|(inherit)\s*$/,M=/\s*!important/,E="_-_";class A{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let T=null;class O{constructor(){this._currentElement=null,this._measureElement=null,this._map=new A}detectMixin(t){return Object(P.a)(t)}gatherStyles(t){const e=function(t){const e=[],i=t.querySelectorAll("style");for(let t=0;t<i.length;t++){const r=i[t];v(r)?n.d||(_(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}(t.content);if(e){const i=document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=b(t);return this.transformRules(i,e),t.textContent=y(i),i}transformCustomStyle(t){let e=b(t);return w(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=y(e),e}transformRules(t,e){this._currentElement=e,w(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(f.c,(t,i,n,r)=>this._produceCssProperties(t,i,n,r,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let n=!1;return w(e,e=>{(n=n||e===t)||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=f.b.exec(t);){let n=i[0],r=i[1],o=i.index,s=o+n.indexOf("@apply"),a=o+n.length,l=t.slice(0,s),h=t.slice(a),c=e?this._fallbacksFromPreviousRules(e):{};Object.assign(c,this._cssTextToMap(l));let d=this._atApplyToCssProperties(r,c);t=`${l}${d}${h}`,f.b.lastIndex=o+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(k,"");let i=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let r,o,s;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(r in a)s=e&&e[r],o=[r,": var(",t,E,r],s&&o.push(",",s.replace(M,"")),o.push(")"),M.test(a[r])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=L.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,n,r=t.split(";"),o={};for(let t,s,a=0;a<r.length;a++)(t=r[a])&&(s=t.split(":")).length>1&&(i=s[0].trim(),n=s.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(i,n)),o[i]=n);return o}_invalidateMixinEntry(t){if(T)for(let e in t.dependants)e!==this._currentElement&&T(e)}_produceCssProperties(t,e,i,n,r){if(i&&function t(e,i){let n=e.indexOf("var(");if(-1===n)return i(e,"","","");let r=x(e,n+3),o=e.substring(n+4,r),s=e.substring(0,n),a=t(e.substring(r+1),i),l=o.indexOf(",");return-1===l?i(s,o.trim(),"",a):i(s,o.substring(0,l).trim(),o.substring(l+1).trim(),a)}(i,(t,e)=>{e&&this._map.get(e)&&(n=`@apply ${e};`)}),!n)return t;let o=this._consumeCssProperties(""+n,r),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,h=this._map.get(e),c=h&&h.properties;c?l=Object.assign(Object.create(c),a):this._map.set(e,l);let d,p,u=[],f=!1;for(d in l)void 0===(p=a[d])&&(p="initial"),!c||d in c||(f=!0),u.push(`${e}${E}${d}: ${p}`);return f&&this._invalidateMixinEntry(h),h&&(h.properties=l),i&&(s=`${t};${s}`),`${s}${u.join("; ")};`}}O.prototype.detectMixin=O.prototype.detectMixin,O.prototype.transformStyle=O.prototype.transformStyle,O.prototype.transformCustomStyle=O.prototype.transformCustomStyle,O.prototype.transformRules=O.prototype.transformRules,O.prototype.transformRule=O.prototype.transformRule,O.prototype.transformTemplate=O.prototype.transformTemplate,O.prototype._separator=E,Object.defineProperty(O.prototype,"invalidCallback",{get:()=>T,set(t){T=t}});var I=O;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var R={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const H="_applyShimCurrentVersion",N="_applyShimNextVersion",V="_applyShimValidatingVersion",D=Promise.resolve();function j(t){let e=R[t];e&&function(t){t[H]=t[H]||0,t[V]=t[V]||0,t[N]=(t[N]||0)+1}(e)}function B(t){return t[H]===t[N]}function F(t){return!B(t)&&t[V]===t[N]}function $(t){t[V]=t[N],t._validating||(t._validating=!0,D.then(function(){t[H]=t[N],t._validating=!1}))}i(40);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const U=new I;class q{constructor(){this.customStyleInterface=null,U.invalidCallback=j}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{U.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),C(t))return;R[e]=t;let i=U.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&U.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(P.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}(t),i=R[e];if((!i||!C(i))&&i&&!B(i)){F(i)||(this.prepareTemplate(i,e),$(i));let n=t.shadowRoot;if(n){let t=n.querySelector("style");t&&(t.__cssRules=i._styleAst,t.textContent=y(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new q;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,i,n){t.flushCustomStyles(),t.prepareTemplate(e,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(P.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:n.c,nativeShadow:n.d,cssBuild:n.a,disableRuntime:n.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=U;var Z=i(20),W=i(32),K=i(30),G=i(8);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Y=/:host\(:dir\((ltr|rtl)\)\)/g,X=':host([dir="$1"])',J=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=':host([dir="$2"]) $1',tt=/:dir\((?:ltr|rtl)\)/,et=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),it=[];let nt=null,rt="";function ot(){rt=document.documentElement.getAttribute("dir")}function st(t){if(!t.__autoDirOptOut){t.setAttribute("dir",rt)}}function at(){ot(),rt=document.documentElement.getAttribute("dir");for(let t=0;t<it.length;t++)st(it[t])}const lt=Object(G.a)(t=>{et||nt||(ot(),(nt=new MutationObserver(at)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(K.a)(t);class i extends e{static _processStyleText(t,e){return t=super._processStyleText(t,e),!et&&tt.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=(e=e.replace(Y,X)).replace(J,Q)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(nt&&nt.takeRecords().length&&at(),it.push(this),st(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=it.indexOf(this);t>-1&&it.splice(t,1)}}}return i.__activateDir=!1,i});i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ht(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ht():window.addEventListener("DOMContentLoaded",ht);var ct=i(4),dt=i(21),pt=i(13),ut=i(9),ft=i(2),mt=i(0);i.d(e,"a",function(){return _t});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let gt=window.ShadyCSS;const _t=Object(G.a)(t=>{const e=lt(Object(W.a)(Object(Z.a)(t))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,i,n){e!==i&&(super.attributeChangedCallback(t,e,i,n),this.attributeChanged(t,e,i))}attributeChanged(t,e,i){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let n,r=0;r<i.length&&(n=i[r]);r++){let i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=e;let r=i.node||this;return Object(mt.a)(r).dispatchEvent(n),n}listen(t,e,i){t=t||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),r=n.get(t);r||(r={},n.set(t,r));let o=e+i;r[o]||(r[o]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let n=this.__boundListeners&&this.__boundListeners.get(t),r=e+i,o=n&&n[r];o&&(this._removeEventListenerFromNode(t,e,o),n[r]=null)}setScrollDirection(t,e){Object(dt.c)(e||this,i[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(mt.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(ct.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(ct.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(ct.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,n=0;i=t[n];n++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(ct.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}isLightDescendant(t){return this!==t&&Object(mt.a)(this).contains(t)&&Object(mt.a)(this).getRootNode()===Object(mt.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(mt.a)(t).getRootNode()}scopeSubtree(t,e){}getComputedStyleValue(t){return gt.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=pt.a.debounce(this._debouncers[t],i>0?ut.b.after(i):ut.a,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?ut.b.run(t.bind(this),e):~ut.a.run(t.bind(this))}cancelAsync(t){t<0?ut.a.cancel(~t):ut.b.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t];return i}elementMatches(t,e){return Object(ct.b)(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(Object(mt.a)(i).setAttribute(t,""),!0):(Object(mt.a)(i).removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,n){n=n||this,this.transform("translate3d("+t+","+e+","+i+")",n)}arrayDelete(t,e){let i;if(Array.isArray(t)){if((i=t.indexOf(e))>=0)return t.splice(i,1)}else{if((i=Object(ft.a)(this,t).indexOf(e))>=0)return this.splice(t,i,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return n.prototype.is="",n})},function(t,e,i){const n=i(52).EventEmitter;t.exports=new class extends n{constructor(){super(),this.setMaxListeners(1e4)}}},function(t,e,i){t.exports={AppStateModel:i(49),SpectraModel:i(67),PackageModel:i(69),OrganizationModel:i(76),GoogleModel:i(78),jsonldTransform:i(80),licenses:i(46)}},function(t,e,i){(function(e){var i=function(){"use strict";function t(t,e){return null!=e&&t instanceof e}var i,n,r;try{i=Map}catch(t){i=function(){}}try{n=Set}catch(t){n=function(){}}try{r=Promise}catch(t){r=function(){}}function o(s,l,h,c,d){"object"==typeof l&&(h=l.depth,c=l.prototype,d=l.includeNonEnumerable,l=l.circular);var p=[],u=[],f=void 0!==e;return void 0===l&&(l=!0),void 0===h&&(h=1/0),function s(h,m){if(null===h)return null;if(0===m)return h;var g,_;if("object"!=typeof h)return h;if(t(h,i))g=new i;else if(t(h,n))g=new n;else if(t(h,r))g=new r(function(t,e){h.then(function(e){t(s(e,m-1))},function(t){e(s(t,m-1))})});else if(o.__isArray(h))g=[];else if(o.__isRegExp(h))g=new RegExp(h.source,a(h)),h.lastIndex&&(g.lastIndex=h.lastIndex);else if(o.__isDate(h))g=new Date(h.getTime());else{if(f&&e.isBuffer(h))return g=e.allocUnsafe?e.allocUnsafe(h.length):new e(h.length),h.copy(g),g;t(h,Error)?g=Object.create(h):void 0===c?(_=Object.getPrototypeOf(h),g=Object.create(_)):(g=Object.create(c),_=c)}if(l){var v=p.indexOf(h);if(-1!=v)return u[v];p.push(h),u.push(g)}for(var y in t(h,i)&&h.forEach(function(t,e){var i=s(e,m-1),n=s(t,m-1);g.set(i,n)}),t(h,n)&&h.forEach(function(t){var e=s(t,m-1);g.add(e)}),h){var b;_&&(b=Object.getOwnPropertyDescriptor(_,y)),b&&null==b.set||(g[y]=s(h[y],m-1))}if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(h);for(y=0;y<w.length;y++){var x=w[y];(!(z=Object.getOwnPropertyDescriptor(h,x))||z.enumerable||d)&&(g[x]=s(h[x],m-1),z.enumerable||Object.defineProperty(g,x,{enumerable:!1}))}}if(d){var S=Object.getOwnPropertyNames(h);for(y=0;y<S.length;y++){var z,C=S[y];(z=Object.getOwnPropertyDescriptor(h,C))&&z.enumerable||(g[C]=s(h[C],m-1),Object.defineProperty(g,C,{enumerable:!1}))}}return g}(s,h)}function s(t){return Object.prototype.toString.call(t)}function a(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return o.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},o.__objToStr=s,o.__isDate=function(t){return"object"==typeof t&&"[object Date]"===s(t)},o.__isArray=function(t){return"object"==typeof t&&"[object Array]"===s(t)},o.__isRegExp=function(t){return"object"==typeof t&&"[object RegExp]"===s(t)},o.__getRegExpFlags=a,o}();t.exports&&(t.exports=i)}).call(this,i(71).Buffer)},function(t,e,i){"use strict";i.d(e,"c",function(){return p}),i.d(e,"b",function(){return u}),i.d(e,"a",function(){return m});var n=i(23),r=i(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o="link[rel=import][type~=css]",s="include",a="shady-unscoped";function l(t){return n.a.import(t)}function h(t){let e=t.body?t.body:t;const i=Object(r.b)(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function c(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...d(e[t]));return i}function d(t){const e=l(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...f(e));const i=e.querySelector("template");i&&t.push(...p(i,e.assetpath)),e._styles=t}return e._styles}function p(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let o=n[t],a=o.getAttribute(s);a&&i.push(...c(a).filter(function(t,e,i){return i.indexOf(t)===e})),e&&(o.textContent=Object(r.b)(o.textContent,e)),i.push(o)}t._styles=i}return t._styles}function u(t){let e=l(t);return e?f(e):[]}function f(t){const e=[],i=t.querySelectorAll(o);for(let t=0;t<i.length;t++){let n=i[t];if(n.import){const t=n.import,i=n.hasAttribute(a);if(i&&!t._unscopedStyle){const e=h(t);e.setAttribute(a,""),t._unscopedStyle=e}else t._style||(t._style=h(t));e.push(i?t._unscopedStyle:t._style)}}return e}function m(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=g(e[t]);return i}function g(t){let e=l(t);if(e&&void 0===e._cssText){let t=_(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const n=p(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function _(t){let e="",i=f(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}},function(t,e){t.exports='<custom-style>\n  <style is="custom-style">\n    html {\n      --default-primary-color : #00867d;\n      --primary-color         : var(--default-primary-color); /* alt name */\n      --light-primary-color   : #4db6ac;\n      --default-secondary-color : #2286c3;\n      --light-secondary-color   : #64b5f6;\n      --default-background-color : #F5F5F6;\n      --dark-background-color    : #E1E2E1;\n      --extra-dark-background-color : #616161;\n      \n      --text-primary-color      : #313534;\n      --text-light-color        : #4d5251;\n      --primary-text-color      : var(--text-primary-color);\n      --secondary-text-color    : #8c9794;\n      --disabled-text-color     : #aaa;\n      --inverse-text-color      : var(--default-background-color);\n      --max-width               : 1200px;\n      --max-text-width          : 650px;\n      --font-size               : 16px;\n      --font-weight             : 400;\n      --font-weight-heavy       : 700;\n      --form-break-margin       : 75px;\n      --color-red               : #d32f2f;\n      --color-orange            : #ff9800;\n      --color-green             : #388e3c;\n      /**\n       * Global Element Styles\n       */\n      /* paper-input */\n      --paper-input-container-color: var(--secondary-text-color);\n    }\n    body, html {\n      @apply --paper-font-common-base;\n      font-size        : var(--font-size);\n      font-weight      : var(--font-weight);\n      margin           : 0;\n      padding          : 0;\n      height           : 100%;\n      background-color : var(--default-background-color);\n      color            : var(--text-primary-color);\n      font-weight      : 400;\n    }\n  </style>\n</custom-style>'},function(t,e,i){"use strict";i.d(e,"a",function(){return l});i(7);var n=i(8),r=i(14),o=i(31);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)s[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(n.a)(t=>{const e=Object(o.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(r.b)(t[e]))}static attributeNameForProperty(t){return Object(r.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!s[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,i){"use strict";i.d(e,"a",function(){return a});i(7);var n=i(8),r=i(9),o=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=r.a,a=Object(n.a)(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let n=this.__data[t],r=this._shouldPropertyChange(t,e,n);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i))}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,n){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,n)}_attributeToProperty(t,e,i){if(!this.__serializing){const n=this.__dataAttributes,r=n&&n[t]||t;this[r]=this._deserializeValue(e,i||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const n=this._serializeValue(e);void 0===n?t.removeAttribute(i):("class"!==i&&"name"!==i&&"slot"!==i||(t=Object(o.a)(t)),t.setAttribute(i,n))}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}})},function(t,e,i){"use strict";i.d(e,"a",function(){return o});i(7);var n=i(8),r=i(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=Object(n.a)(t=>{return class extends t{_addEventListenerToNode(t,e,i){Object(r.a)(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){Object(r.b)(t,e,i)||super._removeEventListenerFromNode(t,e,i)}}})},function(t,e,i){"use strict";i.d(e,"a",function(){return h});i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t,e,i){return{index:t,removed:e,addedCount:i}}const r=0,o=1,s=2,a=3;function l(t,e,i,l,h,d){let p,u=0,f=0,m=Math.min(i-e,d-h);if(0==e&&0==h&&(u=function(t,e,i){for(let n=0;n<i;n++)if(!c(t[n],e[n]))return n;return i}(t,l,m)),i==t.length&&d==l.length&&(f=function(t,e,i){let n=t.length,r=e.length,o=0;for(;o<i&&c(t[--n],e[--r]);)o++;return o}(t,l,m-u)),h+=u,d-=f,(i-=f)-(e+=u)==0&&d-h==0)return[];if(e==i){for(p=n(e,[],0);h<d;)p.removed.push(l[h++]);return[p]}if(h==d)return[n(e,[],i-e)];let g=function(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],l=[];for(;e>0||i>0;){if(0==e){l.push(s),i--;continue}if(0==i){l.push(a),e--;continue}let h,c=t[e-1][i-1],d=t[e-1][i],p=t[e][i-1];(h=d<p?d<c?d:c:p<c?p:c)==c?(c==n?l.push(r):(l.push(o),n=c),e--,i--):h==d?(l.push(a),e--,n=d):(l.push(s),i--,n=p)}return l.reverse(),l}(function(t,e,i,n,r,o){let s=o-r+1,a=i-e+1,l=new Array(s);for(let t=0;t<s;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<s;i++)for(let o=1;o<a;o++)if(c(t[e+o-1],n[r+i-1]))l[i][o]=l[i-1][o-1];else{let t=l[i-1][o]+1,e=l[i][o-1]+1;l[i][o]=t<e?t:e}return l}(t,e,i,l,h,d));p=void 0;let _=[],v=e,y=h;for(let t=0;t<g.length;t++)switch(g[t]){case r:p&&(_.push(p),p=void 0),v++,y++;break;case o:p||(p=n(v,[],0)),p.addedCount++,v++,p.removed.push(l[y]),y++;break;case s:p||(p=n(v,[],0)),p.addedCount++,v++;break;case a:p||(p=n(v,[],0)),p.removed.push(l[y]),y++}return p&&_.push(p),_}function h(t,e){return l(t,0,t.length,e,0,e.length)}function c(t,e){return t===e}},function(t,e,i){var n=i(81);t.exports="string"==typeof n?n:n.toString()},function(t,e,i){t.exports={AppStateInterface:i(39),AppStateModel:i(50),AppStateStore:i(62),"app-route":i(88)}},function(t,e){t.exports=new class{constructor(){this.models={}}registerModel(t,e){if(this.models[t])throw new Error(`A model has already been registered with name: ${t}`);this.models[t]=e}getModel(t){if(!this.models[t])throw new Error(`No model has been registered with name: ${t}`);return this.models[t]}}},function(t,e){let i={};"undefined"!=typeof APP_CONFIG&&(i=APP_CONFIG.filterLabelMap);t.exports=new class{constructor(){this.HASH_SEARCH_ORDER=["text","filters","page","itemsPerPage"]}getFilterLabel(t){return i[t]?i[t]:t}getDefaultSearch(){return{text:"",filters:[],page:0,itemsPerPage:6}}getGeoFilter(){return APP_CONFIG.geoFilter}getGeoRadiusQuery(t,e,i){return{[this.getGeoFilter()]:{$near:{$geometry:{type:"Point",coordinates:[e,t]},$maxDistance:i}}}}getRestParams(t){return{text:encodeURIComponent(t.text||""),filters:JSON.stringify(t.filters||[]),start:t.page*t.itemsPerPage,stop:(t.page+1)*t.itemsPerPage}}getRestParamsStr(t){t=this.getRestParams(t);let e=[];for(let i in t)e.push(i+"="+encodeURIComponent(t[i]));return e.join("&")}getUrlPathFromQuery(t={}){return"/search/"+encodeURIComponent(t.text||"")+"/"+encodeURIComponent(JSON.stringify(t.filters||[]))+"/"+(t.page||0)+"/"+(t.itemsPerPage||6)}getQueryFromUrl(t){let e=this.getDefaultSearch();"string"==typeof t&&(t=t.replace(/^\/search/i,"").replace(/^\//,"").replace(/\/$/,"").split("/")),t.forEach((t,i)=>{t&&(e[this.HASH_SEARCH_ORDER[i]]=decodeURIComponent(t))});try{"string"==typeof e.filters&&(e.filters=JSON.parse(e.filters))}catch(t){console.error(t)}try{"string"==typeof e.page&&(e.page=parseInt(e.page))}catch(t){console.error(t)}try{"string"==typeof e.itemsPerPage&&(e.itemsPerPage=parseInt(e.itemsPerPage))}catch(t){console.error(t)}return e}}},function(t,e,i){"use strict";var n=i(40),r=i(18),o=i(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=new n.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){s.processStyles(),Object(r.c)(t,e)},styleElement(t){s.processStyles()},styleDocument(t){s.processStyles(),Object(r.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(r.b)(t,e),flushCustomStyles(){},nativeCss:o.c,nativeShadow:o.d,cssBuild:o.a,disableRuntime:o.b}),window.ShadyCSS.CustomStyleInterface=s;var a=i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const l="include",h=window.ShadyCSS.CustomStyleInterface;window.customElements.define("custom-style",class extends HTMLElement{constructor(){super(),this._style=null,h.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(l);return e&&(t.removeAttribute(l),t.textContent=Object(a.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}})},function(t,e){t.exports=t=>(class extends t{constructor(){super(),this._injectModel("AppStateModel")}ready(){super.ready(),this._onAppStateUpdate&&this._getAppState().then(t=>this._onAppStateUpdate(t))}_setAppState(t){return this.AppStateModel.set(t)}_getAppState(){return this.AppStateModel.get()}_setWindowLocation(t){this.AppStateModel.setLocation(t)}})},function(t,e,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n,r=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame(function(){o?o(t):(r||(r=new Promise(t=>{n=t}),"complete"===document.readyState?n():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&n()})),r.then(function(){t&&t()}))})}i.d(e,"a",function(){return d});const a="__seenByShadyCSS",l="__shadyCSSCachedStyle";let h=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,s(c))}addCustomStyle(t){t[a]||(t[a]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[l])return t[l];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[l])continue;const n=this.getStyleForCustomStyle(i);if(n){const t=n.__appliedElement||n;h&&h(t),i[l]=t}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>h,set(t){h=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})},function(t,e,i){i(56),t.exports=self.fetch.bind(self)},function(t,e,i){const{BaseStore:n}=i(11);t.exports=new class extends n{constructor(){super(),this.data={searchId:{spectra:0,spectraCount:0},stats:{},search:{},count:{}},this.events={SPECTRA_STATS_UPDATE:"spectra-stats-update",SPECTRA_SEARCH_UPDATE:"spectra-search-update",SPECTRA_COUNT_UPDATE:"spectra-count-update"}}setStatsLoading(t){this._setStatsState({state:this.STATE.LOADING,request:t})}setStatsLoaded(t){this._setStatsState({state:this.STATE.LOADED,payload:t})}setStatsError(t){this._setStatsState({state:this.STATE.ERROR,error:t})}_setStatsState(t){this.data.stats=t,this.emit(this.events.SPECTRA_STATS_UPDATE,t)}setSearchLoading(t,e){this._setSearchState({state:this.STATE.LOADING,request:t,metadata:e})}setSearchLoaded(t,e){this._setSearchState({state:this.STATE.LOADED,payload:t,metadata:e})}setSearchError(t,e){this._setSearchState({state:this.STATE.ERROR,error:t,metadata:e})}_setSearchState(t){this.data.search[t.metadata.name]=t,this.emit(this.events.SPECTRA_SEARCH_UPDATE,t)}setCountLoading(t,e){this._setCountState({state:this.STATE.LOADING,request:t,metadata:e})}setCountLoaded(t,e){this._setCountState({state:this.STATE.LOADED,payload:t,metadata:e})}setCountError(t,e){this._setCountState({state:this.STATE.ERROR,error:t,metadata:e})}_setCountState(t){this.data.search[t.metadata.name]=t,this.emit(this.events.SPECTRA_COUNT_UPDATE,t)}}},function(t,e,i){const{BaseStore:n}=i(11);t.exports=new class extends n{constructor(){super(),this.data={searchId:{package:0,packageCount:0,suggest:0},package:{},stats:{},search:{},suggest:{},count:{}},this.events={PACKAGE_UPDATE:"package-update",PACKAGE_STATS_UPDATE:"package-stats-update",PACKAGE_SEARCH_UPDATE:"package-search-update",PACKAGE_COUNT_UPDATE:"package-count-update",KEYWORD_SUGGEST_UPDATE:"keyword-suggest-update"}}setPackageLoading(t,e){this._setPackageState({state:this.STATE.LOADING,id:t,request:e})}setPackageLoaded(t,e){this._setPackageState({state:this.STATE.LOADED,id:t,payload:e})}setPackageError(t,e){this._setPackageState({state:this.STATE.ERROR,id:t,error:e})}_setPackageState(t){this.data.package[t.id]=t,this.emit(this.events.PACKAGE_UPDATE,t)}setStatsLoading(t){this._setStatsState({state:this.STATE.LOADING,request:t})}setStatsLoaded(t){this._setStatsState({state:this.STATE.LOADED,payload:t})}setStatsError(t){this._setStatsState({state:this.STATE.ERROR,error:t})}_setStatsState(t){this.data.stats=t,this.emit(this.events.STATS_UPDATE,t)}setSuggestLoading(t,e){this._setSuggestState({state:this.STATE.LOADING,request:t,metadata:e})}setSuggestLoaded(t,e){this._setSuggestState({state:this.STATE.LOADED,payload:t,metadata:e})}setSuggestError(t,e){this._setSuggestState({state:this.STATE.ERROR,error:t,metadata:e})}_setSuggestState(t){this.data.suggest[t.metadata.name]=t,this.emit(this.events.KEYWORD_SUGGEST_UPDATE,t)}setSearchLoading(t,e){this._setSearchState({state:this.STATE.LOADING,request:t,metadata:e})}setSearchLoaded(t,e){this._setSearchState({state:this.STATE.LOADED,payload:t,metadata:e})}setSearchError(t,e){this._setSearchState({state:this.STATE.ERROR,error:t,metadata:e})}_setSearchState(t){this.data.search[t.metadata.name]=t,this.emit(this.events.PACKAGE_SEARCH_UPDATE,t)}setCountLoading(t,e){this._setCountState({state:this.STATE.LOADING,request:t,metadata:e})}setCountLoaded(t,e){this._setCountState({state:this.STATE.LOADED,payload:t,metadata:e})}setCountError(t,e){this._setCountState({state:this.STATE.ERROR,error:t,metadata:e})}_setCountState(t){this.data.count[t.metadata.name]=t,this.emit(this.events.PACKAGE_COUNT_UPDATE,t)}}},function(t,e,i){const{BaseStore:n}=i(11);t.exports=new class extends n{constructor(){super(),this.data={},this.events={ORGANIZATION_UPDATE:"organization-update"}}setOrganizationLoading(t,e){this._setState({state:this.STATE.LOADING,id:t,request:e})}setOrganizationLoaded(t,e){this._setState({state:this.STATE.LOADED,id:t,payload:e})}setOrganizationError(t,e){this._setState({state:this.STATE.ERROR,id:t,error:e})}_setState(t){this.data[t.id]=t,this.emit(this.events.ORGANIZATION_UPDATE,t)}}},function(t,e,i){const{BaseStore:n}=i(11);t.exports=new class extends n{constructor(){super(),this.data={charts:{state:"init"}},this.events={GOOGLE_CHARTS_UPDATE:"google-charts-update"}}chartsLoading(t){this._setChartState({state:this.STATE.LOADING,request:t})}chartsLoaded(){this._setChartState({state:this.STATE.LOADED})}_setChartState(t){this.data.charts=t,this.emit(this.STATE.LOADED,this.data)}}},function(t,e){t.exports=[{label:"Creative Commons Attribution",url:"https://opendefinition.org/licenses/cc-by/"},{label:"Other (Open)",url:"https://opendefinition.org/od/2.1/en/"},{label:"Open Data Commons Attribution License",url:"https://opendefinition.org/licenses/odc-by/"},{label:"GNU Free Documentation License",url:"https://www.opendefinition.org/licenses/gfdl"},{label:"Other (Public Domain)",url:"https://opendefinition.org/okd/"},{label:"Creative Commons Attribution Share-Alike",url:"http://opendefinition.org/licenses/cc-by-sa/"},{label:"Open Data Commons Public Domain Dedication and License (PDDL)",url:"https://opendefinition.org/licenses/odc-pddl/"},{label:"Open Data Commons Open Database License (ODbL)",url:"http://opendefinition.org/licenses/odc-odbl/"},{label:"Creative Commons CCZero",url:"https://opendefinition.org/licenses/cc-zero/"},{label:"Creative Commons CCZero",url:"https://opendefinition.org/licenses/cc-zero/"},{label:"Other (Attribution)",url:"https://opendefinition.org/od/2.1/en/"},{label:"UK Open Government Licence (OGL)",url:"http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"},{label:"Creative Commons Non-Commercial (Any)",url:"https://creativecommons.org/licenses/by-nc/2.0/",open:!1}]},function(t,e,i){
/* @preserve
 * Leaflet 1.5.1+build.2e3e0ff, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t){"use strict";var e=Object.freeze;function i(t){var e,i,n,r;for(i=1,n=arguments.length;i<n;i++)for(e in r=arguments[i])t[e]=r[e];return t}Object.freeze=function(t){return t};var n=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function r(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var o=0;function s(t){return t._leaflet_id=t._leaflet_id||++o,t._leaflet_id}function a(t,e,i){var n,r,o,s;return s=function(){n=!1,r&&(o.apply(i,r),r=!1)},o=function(){n?r=arguments:(t.apply(i,arguments),setTimeout(s,e),n=!0)}}function l(t,e,i){var n=e[1],r=e[0],o=n-r;return t===n&&i?t:((t-r)%o+o)%o+r}function h(){return!1}function c(t,e){return e=void 0===e?6:e,+(Math.round(t+"e+"+e)+"e-"+e)}function d(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function p(t){return d(t).split(/\s+/)}function u(t,e){for(var i in t.hasOwnProperty("options")||(t.options=t.options?n(t.options):{}),e)t.options[i]=e[i];return t.options}function f(t,e,i){var n=[];for(var r in t)n.push(encodeURIComponent(i?r.toUpperCase():r)+"="+encodeURIComponent(t[r]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")}var m=/\{ *([\w_-]+) *\}/g;function g(t,e){return t.replace(m,function(t,i){var n=e[i];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(e)),n})}var _=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function v(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var y="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function b(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var w=0;function x(t){var e=+new Date,i=Math.max(0,16-(e-w));return w=e+i,window.setTimeout(t,i)}var S=window.requestAnimationFrame||b("RequestAnimationFrame")||x,z=window.cancelAnimationFrame||b("CancelAnimationFrame")||b("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function C(t,e,i){if(!i||S!==x)return S.call(window,r(t,e));t.call(e)}function P(t){t&&z.call(window,t)}var k=(Object.freeze||Object)({freeze:e,extend:i,create:n,bind:r,lastId:o,stamp:s,throttle:a,wrapNum:l,falseFn:h,formatNum:c,trim:d,splitWords:p,setOptions:u,getParamString:f,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:S,cancelFn:z,requestAnimFrame:C,cancelAnimFrame:P});function M(){}M.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},r=e.__super__=this.prototype,o=n(r);for(var s in o.constructor=e,e.prototype=o,this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(function(t){if("undefined"!=typeof L&&L&&L.Mixin){t=_(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}(t.includes),i.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=i(n(o.options),t.options)),i(o,t),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){r.callInitHooks&&r.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},e},M.include=function(t){return i(this.prototype,t),this},M.mergeOptions=function(t){return i(this.prototype.options,t),this},M.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var E={on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else{t=p(t);for(var r=0,o=t.length;r<o;r++)this._on(t[r],e,i)}return this},off:function(t,e,i){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=p(t);for(var r=0,o=t.length;r<o;r++)this._off(t[r],e,i)}else delete this._events;return this},_on:function(t,e,i){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),i===this&&(i=void 0);for(var r={fn:e,ctx:i},o=n,s=0,a=o.length;s<a;s++)if(o[s].fn===e&&o[s].ctx===i)return;o.push(r)},_off:function(t,e,i){var n,r,o;if(this._events&&(n=this._events[t]))if(e){if(i===this&&(i=void 0),n)for(r=0,o=n.length;r<o;r++){var s=n[r];if(s.ctx===i&&s.fn===e)return s.fn=h,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(r,1)}}else{for(r=0,o=n.length;r<o;r++)n[r].fn=h;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var r=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,a=o.length;s<a;s++){var l=o[s];l.fn.call(l.ctx||this,r)}this._firingCount--}}return n&&this._propagateEvent(r),this},listens:function(t,e){var i=this._events&&this._events[t];if(i&&i.length)return!0;if(e)for(var n in this._eventParents)if(this._eventParents[n].listens(t,e))return!0;return!1},once:function(t,e,i){if("object"==typeof t){for(var n in t)this.once(n,t[n],e);return this}var o=r(function(){this.off(t,e,i).off(t,o,i)},this);return this.on(t,e,i).on(t,o,i)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[s(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[s(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};E.addEventListener=E.on,E.removeEventListener=E.clearAllEventListeners=E.off,E.addOneTimeEventListener=E.once,E.fireEvent=E.fire,E.hasEventListeners=E.listens;var A=M.extend(E);function T(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var O=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};function I(t,e,i){return t instanceof T?t:_(t)?new T(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new T(t.x,t.y):new T(t,e,i)}function R(t,e){if(t)for(var i=e?[t,e]:t,n=0,r=i.length;n<r;n++)this.extend(i[n])}function H(t,e){return!t||t instanceof R?t:new R(t,e)}function N(t,e){if(t)for(var i=e?[t,e]:t,n=0,r=i.length;n<r;n++)this.extend(i[n])}function V(t,e){return t instanceof N?t:new N(t,e)}function D(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==i&&(this.alt=+i)}function j(t,e,i){return t instanceof D?t:_(t)&&"object"!=typeof t[0]?3===t.length?new D(t[0],t[1],t[2]):2===t.length?new D(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new D(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new D(t,e,i)}T.prototype={clone:function(){return new T(this.x,this.y)},add:function(t){return this.clone()._add(I(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(I(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new T(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new T(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=O(this.x),this.y=O(this.y),this},distanceTo:function(t){var e=(t=I(t)).x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return(t=I(t)).x===this.x&&t.y===this.y},contains:function(t){return t=I(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+c(this.x)+", "+c(this.y)+")"}},R.prototype={extend:function(t){return t=I(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new T((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new T(this.min.x,this.max.y)},getTopRight:function(){return new T(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return(t="number"==typeof t[0]||t instanceof T?I(t):H(t))instanceof R?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=H(t);var e=this.min,i=this.max,n=t.min,r=t.max,o=r.x>=e.x&&n.x<=i.x,s=r.y>=e.y&&n.y<=i.y;return o&&s},overlaps:function(t){t=H(t);var e=this.min,i=this.max,n=t.min,r=t.max,o=r.x>e.x&&n.x<i.x,s=r.y>e.y&&n.y<i.y;return o&&s},isValid:function(){return!(!this.min||!this.max)}},N.prototype={extend:function(t){var e,i,n=this._southWest,r=this._northEast;if(t instanceof D)e=t,i=t;else{if(!(t instanceof N))return t?this.extend(j(t)||V(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||r?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),r.lat=Math.max(i.lat,r.lat),r.lng=Math.max(i.lng,r.lng)):(this._southWest=new D(e.lat,e.lng),this._northEast=new D(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,r=Math.abs(e.lng-i.lng)*t;return new N(new D(e.lat-n,e.lng-r),new D(i.lat+n,i.lng+r))},getCenter:function(){return new D((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new D(this.getNorth(),this.getWest())},getSouthEast:function(){return new D(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof D||"lat"in t?j(t):V(t);var e,i,n=this._southWest,r=this._northEast;return t instanceof N?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=r.lat&&e.lng>=n.lng&&i.lng<=r.lng},intersects:function(t){t=V(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),r=t.getNorthEast(),o=r.lat>=e.lat&&n.lat<=i.lat,s=r.lng>=e.lng&&n.lng<=i.lng;return o&&s},overlaps:function(t){t=V(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),r=t.getNorthEast(),o=r.lat>e.lat&&n.lat<i.lat,s=r.lng>e.lng&&n.lng<i.lng;return o&&s},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=V(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}},D.prototype={equals:function(t,e){if(!t)return!1;t=j(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(void 0===e?1e-9:e)},toString:function(t){return"LatLng("+c(this.lat,t)+", "+c(this.lng,t)+")"},distanceTo:function(t){return $.distance(this,j(t))},wrap:function(){return $.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return V([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new D(this.lat,this.lng,this.alt)}};var B,F={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),r=this.transformation.transform(e.max,i);return new R(n,r)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?l(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?l(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new D(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,r=e.lng-i.lng;if(0===n&&0===r)return t;var o=t.getSouthWest(),s=t.getNorthEast(),a=new D(o.lat-n,o.lng-r),l=new D(s.lat-n,s.lng-r);return new N(a,l)}},$=i({},F,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,r=e.lat*i,o=Math.sin((e.lat-t.lat)*i/2),s=Math.sin((e.lng-t.lng)*i/2),a=o*o+Math.cos(n)*Math.cos(r)*s*s,l=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*l}}),U={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),r=Math.sin(n*e);return new T(this.R*t.lng*e,this.R*Math.log((1+r)/(1-r))/2)},unproject:function(t){var e=180/Math.PI;return new D((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(B=6378137*Math.PI,new R([-B,-B],[B,B]))};function q(t,e,i,n){if(_(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=e,this._c=i,this._d=n}function Z(t,e,i,n){return new q(t,e,i,n)}q.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new T((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};var W=i({},$,{code:"EPSG:3857",projection:U,transformation:function(){var t=.5/(Math.PI*U.R);return Z(t,.5,-t,.5)}()}),K=i({},W,{code:"EPSG:900913"});function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t,e){var i,n,r,o,s,a,l="";for(i=0,r=t.length;i<r;i++){for(s=t[i],n=0,o=s.length;n<o;n++)a=s[n],l+=(n?"L":"M")+a.x+" "+a.y;l+=e?kt?"z":"x":""}return l||"M0 0"}var X=document.documentElement.style,J="ActiveXObject"in window,Q=J&&!document.addEventListener,tt="msLaunchUri"in navigator&&!("documentMode"in document),et=Mt("webkit"),it=Mt("android"),nt=Mt("android 2")||Mt("android 3"),rt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ot=it&&Mt("Google")&&rt<537&&!("AudioNode"in window),st=!!window.opera,at=Mt("chrome"),lt=Mt("gecko")&&!et&&!st&&!J,ht=!at&&Mt("safari"),ct=Mt("phantom"),dt="OTransition"in X,pt=0===navigator.platform.indexOf("Win"),ut=J&&"transition"in X,ft="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!nt,mt="MozPerspective"in X,gt=!window.L_DISABLE_3D&&(ut||ft||mt)&&!dt&&!ct,_t="undefined"!=typeof orientation||Mt("mobile"),vt=_t&&et,yt=_t&&ft,bt=!window.PointerEvent&&window.MSPointerEvent,wt=!(!window.PointerEvent&&!bt),xt=!window.L_NO_TOUCH&&(wt||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),St=_t&&st,zt=_t&&lt,Ct=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Pt=!!document.createElement("canvas").getContext,kt=!(!document.createElementNS||!G("svg").createSVGRect),Lt=!kt&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}();function Mt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var Et=(Object.freeze||Object)({ie:J,ielt9:Q,edge:tt,webkit:et,android:it,android23:nt,androidStock:ot,opera:st,chrome:at,gecko:lt,safari:ht,phantom:ct,opera12:dt,win:pt,ie3d:ut,webkit3d:ft,gecko3d:mt,any3d:gt,mobile:_t,mobileWebkit:vt,mobileWebkit3d:yt,msPointer:bt,pointer:wt,touch:xt,mobileOpera:St,mobileGecko:zt,retina:Ct,canvas:Pt,svg:kt,vml:Lt}),At=bt?"MSPointerDown":"pointerdown",Tt=bt?"MSPointerMove":"pointermove",Ot=bt?"MSPointerUp":"pointerup",It=bt?"MSPointerCancel":"pointercancel",Rt=["INPUT","SELECT","OPTION"],Ht={},Nt=!1,Vt=0;function Dt(t,e,i,n){return"touchstart"===e?function(t,e,i){var n=r(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(Rt.indexOf(t.target.tagName)<0))return;He(t)}$t(t,e)});t["_leaflet_touchstart"+i]=n,t.addEventListener(At,n,!1),Nt||(document.documentElement.addEventListener(At,jt,!0),document.documentElement.addEventListener(Tt,Bt,!0),document.documentElement.addEventListener(Ot,Ft,!0),document.documentElement.addEventListener(It,Ft,!0),Nt=!0)}(t,i,n):"touchmove"===e?function(t,e,i){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&$t(t,e)};t["_leaflet_touchmove"+i]=n,t.addEventListener(Tt,n,!1)}(t,i,n):"touchend"===e&&function(t,e,i){var n=function(t){$t(t,e)};t["_leaflet_touchend"+i]=n,t.addEventListener(Ot,n,!1),t.addEventListener(It,n,!1)}(t,i,n),this}function jt(t){Ht[t.pointerId]=t,Vt++}function Bt(t){Ht[t.pointerId]&&(Ht[t.pointerId]=t)}function Ft(t){delete Ht[t.pointerId],Vt--}function $t(t,e){for(var i in t.touches=[],Ht)t.touches.push(Ht[i]);t.changedTouches=[t],e(t)}var Ut=bt?"MSPointerDown":wt?"pointerdown":"touchstart",qt=bt?"MSPointerUp":wt?"pointerup":"touchend",Zt="_leaflet_";function Wt(t,e,i){var n,r,o=!1,s=250;function a(t){var e;if(wt){if(!tt||"mouse"===t.pointerType)return;e=Vt}else e=t.touches.length;if(!(e>1)){var i=Date.now(),a=i-(n||i);r=t.touches?t.touches[0]:t,o=a>0&&a<=s,n=i}}function l(t){if(o&&!r.cancelBubble){if(wt){if(!tt||"mouse"===t.pointerType)return;var i,s,a={};for(s in r)i=r[s],a[s]=i&&i.bind?i.bind(r):i;r=a}r.type="dblclick",r.button=0,e(r),n=null}}return t[Zt+Ut+i]=a,t[Zt+qt+i]=l,t[Zt+"dblclick"+i]=e,t.addEventListener(Ut,a,!1),t.addEventListener(qt,l,!1),t.addEventListener("dblclick",e,!1),this}function Kt(t,e){var i=t[Zt+Ut+e],n=t[Zt+qt+e],r=t[Zt+"dblclick"+e];return t.removeEventListener(Ut,i,!1),t.removeEventListener(qt,n,!1),tt||t.removeEventListener("dblclick",r,!1),this}var Gt,Yt,Xt,Jt,Qt,te=ge(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ee=ge(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ie="webkitTransition"===ee||"OTransition"===ee?ee+"End":"transitionend";function ne(t){return"string"==typeof t?document.getElementById(t):t}function re(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||"auto"===i)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return"auto"===i?null:i}function oe(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function se(t){var e=t.parentNode;e&&e.removeChild(t)}function ae(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function le(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function he(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ce(t,e){if(void 0!==t.classList)return t.classList.contains(e);var i=fe(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function de(t,e){if(void 0!==t.classList)for(var i=p(e),n=0,r=i.length;n<r;n++)t.classList.add(i[n]);else if(!ce(t,e)){var o=fe(t);ue(t,(o?o+" ":"")+e)}}function pe(t,e){void 0!==t.classList?t.classList.remove(e):ue(t,d((" "+fe(t)+" ").replace(" "+e+" "," ")))}function ue(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function fe(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function me(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&function(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}(t,e)}function ge(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function _e(t,e,i){var n=e||new T(0,0);t.style[te]=(ut?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function ve(t,e){t._leaflet_pos=e,gt?_e(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function ye(t){return t._leaflet_pos||new T(0,0)}if("onselectstart"in document)Gt=function(){Le(window,"selectstart",He)},Yt=function(){Ee(window,"selectstart",He)};else{var be=ge(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Gt=function(){if(be){var t=document.documentElement.style;Xt=t[be],t[be]="none"}},Yt=function(){be&&(document.documentElement.style[be]=Xt,Xt=void 0)}}function we(){Le(window,"dragstart",He)}function xe(){Ee(window,"dragstart",He)}function Se(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(ze(),Jt=t,Qt=t.style.outline,t.style.outline="none",Le(window,"keydown",ze))}function ze(){Jt&&(Jt.style.outline=Qt,Jt=void 0,Qt=void 0,Ee(window,"keydown",ze))}function Ce(t){do{t=t.parentNode}while(!(t.offsetWidth&&t.offsetHeight||t===document.body));return t}function Pe(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var ke=(Object.freeze||Object)({TRANSFORM:te,TRANSITION:ee,TRANSITION_END:ie,get:ne,getStyle:re,create:oe,remove:se,empty:ae,toFront:le,toBack:he,hasClass:ce,addClass:de,removeClass:pe,setClass:ue,getClass:fe,setOpacity:me,testProp:ge,setTransform:_e,setPosition:ve,getPosition:ye,disableTextSelection:Gt,enableTextSelection:Yt,disableImageDrag:we,enableImageDrag:xe,preventOutline:Se,restoreOutline:ze,getSizedParentNode:Ce,getScale:Pe});function Le(t,e,i,n){if("object"==typeof e)for(var r in e)Ae(t,r,e[r],i);else{e=p(e);for(var o=0,s=e.length;o<s;o++)Ae(t,e[o],i,n)}return this}var Me="_leaflet_events";function Ee(t,e,i,n){if("object"==typeof e)for(var r in e)Te(t,r,e[r],i);else if(e){e=p(e);for(var o=0,s=e.length;o<s;o++)Te(t,e[o],i,n)}else{for(var a in t[Me])Te(t,a,t[Me][a]);delete t[Me]}return this}function Ae(t,e,i,n){var r=e+s(i)+(n?"_"+s(n):"");if(t[Me]&&t[Me][r])return this;var o=function(e){return i.call(n||t,e||window.event)},a=o;wt&&0===e.indexOf("touch")?Dt(t,e,o,r):!xt||"dblclick"!==e||!Wt||wt&&at?"addEventListener"in t?"mousewheel"===e?t.addEventListener("onwheel"in t?"wheel":"mousewheel",o,!1):"mouseenter"===e||"mouseleave"===e?(o=function(e){e=e||window.event,qe(t,e)&&a(e)},t.addEventListener("mouseenter"===e?"mouseover":"mouseout",o,!1)):("click"===e&&it&&(o=function(t){!function(t,e){var i=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=Be&&i-Be;n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?Ne(t):(Be=i,e(t))}(t,a)}),t.addEventListener(e,o,!1)):"attachEvent"in t&&t.attachEvent("on"+e,o):Wt(t,o,r),t[Me]=t[Me]||{},t[Me][r]=o}function Te(t,e,i,n){var r=e+s(i)+(n?"_"+s(n):""),o=t[Me]&&t[Me][r];if(!o)return this;wt&&0===e.indexOf("touch")?function(t,e,i){var n=t["_leaflet_"+e+i];"touchstart"===e?t.removeEventListener(At,n,!1):"touchmove"===e?t.removeEventListener(Tt,n,!1):"touchend"===e&&(t.removeEventListener(Ot,n,!1),t.removeEventListener(It,n,!1))}(t,e,r):!xt||"dblclick"!==e||!Kt||wt&&at?"removeEventListener"in t?"mousewheel"===e?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",o,!1):t.removeEventListener("mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,o,!1):"detachEvent"in t&&t.detachEvent("on"+e,o):Kt(t,r),t[Me][r]=null}function Oe(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Ue(t),this}function Ie(t){return Ae(t,"mousewheel",Oe),this}function Re(t){return Le(t,"mousedown touchstart dblclick",Oe),Ae(t,"click",$e),this}function He(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Ne(t){return He(t),Oe(t),this}function Ve(t,e){if(!e)return new T(t.clientX,t.clientY);var i=Pe(e),n=i.boundingClientRect;return new T((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var De=pt&&at?2*window.devicePixelRatio:lt?window.devicePixelRatio:1;function je(t){return tt?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/De:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}var Be,Fe={};function $e(t){Fe[t.type]=!0}function Ue(t){var e=Fe[t.type];return Fe[t.type]=!1,e}function qe(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}var Ze=(Object.freeze||Object)({on:Le,off:Ee,stopPropagation:Oe,disableScrollPropagation:Ie,disableClickPropagation:Re,preventDefault:He,stop:Ne,getMousePosition:Ve,getWheelDelta:je,fakeStop:$e,skipped:Ue,isExternalTarget:qe,addListener:Le,removeListener:Ee}),We=A.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=ye(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=C(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),ve(this._el,i),this.fire("step")},_complete:function(){P(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Ke=A.extend({options:{crs:W,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=u(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=r(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(j(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ee&&gt&&!St&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Le(this._proxy,ie,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){if(e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(j(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n){void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan));var r=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(r)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(gt?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(gt?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),r=this.getSize().divideBy(2),o=t instanceof T?t:this.latLngToContainerPoint(t),s=o.subtract(r).multiplyBy(1-1/n),a=this.containerPointToLatLng(r.add(s));return this.setView(a,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():V(t);var i=I(e.paddingTopLeft||e.padding||[0,0]),n=I(e.paddingBottomRight||e.padding||[0,0]),r=this.getBoundsZoom(t,!1,i.add(n));if((r="number"==typeof e.maxZoom?Math.min(e.maxZoom,r):r)===1/0)return{center:t.getCenter(),zoom:r};var o=n.subtract(i).divideBy(2),s=this.project(t.getSouthWest(),r),a=this.project(t.getNorthEast(),r),l=this.unproject(s.add(a).divideBy(2).add(o),r);return{center:l,zoom:r}},fitBounds:function(t,e){if(!(t=V(t)).isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=I(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new We,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){de(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(!1===(i=i||{}).animate||!gt)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),r=this.project(t),o=this.getSize(),s=this._zoom;t=j(t),e=void 0===e?s:e;var a=Math.max(o.x,o.y),l=a*this.getZoomScale(s,e),h=r.distanceTo(n)||1,c=1.42,d=c*c;function p(t){var e=t?-1:1,i=t?l:a,n=l*l-a*a+e*d*d*h*h,r=2*i*d*h,o=n/r,s=Math.sqrt(o*o+1)-o,c=s<1e-9?-18:Math.log(s);return c}function u(t){return(Math.exp(t)-Math.exp(-t))/2}function f(t){return(Math.exp(t)+Math.exp(-t))/2}var m=p(0);function g(t){return a*(f(m)*(u(e=m+c*t)/f(e))-u(m))/d;var e}var _=Date.now(),v=(p(1)-m)/c,y=i.duration?1e3*i.duration:1e3*v*.8;return this._moveStart(!0,i.noMoveStart),function i(){var o=(Date.now()-_)/y,l=function(t){return 1-Math.pow(1-t,1.5)}(o)*v;o<=1?(this._flyToFrame=C(i,this),this._move(this.unproject(n.add(r.subtract(n).multiplyBy(g(l)/h)),s),this.getScaleZoom(a/function(t){return a*(f(m)/f(m+c*t))}(l),s),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return(t=V(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,V(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){var i=I((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=I(e.paddingBottomRight||e.padding||[0,0]),r=this.getCenter(),o=this.project(r),s=this.project(t),a=this.getPixelBounds(),l=a.getSize().divideBy(2),h=H([a.min.add(i),a.max.subtract(n)]);if(!h.contains(s)){this._enforcingBounds=!0;var c=o.subtract(s),d=I(s.x+c.x,s.y+c.y);(s.x<h.min.x||s.x>h.max.x)&&(d.x=o.x-c.x,c.x>0?d.x+=l.x-i.x:d.x-=l.x-n.x),(s.y<h.min.y||s.y>h.max.y)&&(d.y=o.y-c.y,c.y>0?d.y+=l.y-i.y:d.y-=l.y-n.y),this.panTo(this.unproject(d),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var n=this.getSize(),o=e.divideBy(2).round(),s=n.divideBy(2).round(),a=o.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:n})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=r(this._handleGeolocationResponse,this),n=r(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,n,t):navigator.geolocation.getCurrentPosition(e,n,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new D(e,i),r=n.toBounds(2*t.coords.accuracy),o=this._locateOptions;if(o.setView){var s=this.getBoundsZoom(r);this.setView(n,o.maxZoom?Math.min(s,o.maxZoom):s)}var a={latlng:n,bounds:r,timestamp:t.timestamp};for(var l in t.coords)"number"==typeof t.coords[l]&&(a[l]=t.coords[l]);this.fire("locationfound",a)},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),se(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(P(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)se(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=oe("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new N(e,i)},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=V(t),i=I(i||[0,0]);var n=this.getZoom()||0,r=this.getMinZoom(),o=this.getMaxZoom(),s=t.getNorthWest(),a=t.getSouthEast(),l=this.getSize().subtract(i),h=H(this.project(a,n),this.project(s,n)).getSize(),c=gt?this.options.zoomSnap:1,d=l.x/h.x,p=l.y/h.y,u=e?Math.max(d,p):Math.min(d,p);return n=this.getScaleZoom(u,n),c&&(n=Math.round(n/(c/100))*(c/100),n=e?Math.ceil(n/c)*c:Math.floor(n/c)*c),Math.max(r,Math.min(o,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new T(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new R(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=void 0===e?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(j(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(I(t),e)},layerPointToLatLng:function(t){var e=I(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(j(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(j(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(V(t))},distance:function(t,e){return this.options.crs.distance(j(t),j(e))},containerPointToLayerPoint:function(t){return I(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return I(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(I(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)))},mouseEventToContainerPoint:function(t){return Ve(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=ne(t);if(!e)throw new Error("Map container not found.");if(e._leaflet_id)throw new Error("Map container is already initialized.");Le(e,"scroll",this._onScroll,this),this._containerId=s(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&gt,de(t,"leaflet-container"+(xt?" leaflet-touch":"")+(Ct?" leaflet-retina":"")+(Q?" leaflet-oldie":"")+(ht?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=re(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),ve(this._mapPane,new T(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(de(t.markerPane,"leaflet-zoom-hide"),de(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e){ve(this._mapPane,new T(0,0));var i=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var n=this._zoom!==e;this._moveStart(n,!1)._move(t,e)._moveEnd(n),this.fire("viewreset"),i&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i){void 0===e&&(e=this._zoom);var n=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return P(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){ve(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[s(this._container)]=this;var e=t?Ee:Le;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),gt&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){P(this._resizeRequest),this._resizeRequest=C(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],r="mouseout"===e||"mouseover"===e,o=t.target||t.srcElement,a=!1;o;){if((i=this._targets[s(o)])&&("click"===e||"preclick"===e)&&!t._simulated&&this._draggableMoved(i)){a=!0;break}if(i&&i.listens(e,!0)){if(r&&!qe(o,t))break;if(n.push(i),r)break}if(o===this._container)break;o=o.parentNode}return n.length||a||r||!qe(o,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!Ue(t)){var e=t.type;"mousedown"!==e&&"keypress"!==e&&"keyup"!==e&&"keydown"!==e||Se(t.target||t.srcElement),this._fireDOMEvent(t,e)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var r=i({},t);r.type="preclick",this._fireDOMEvent(r,r.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){var o=n[0];"contextmenu"===e&&o.listens(e,!0)&&He(t);var s={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var a=o.getLatLng&&(!o._radius||o._radius<=10);s.containerPoint=a?this.latLngToContainerPoint(o.getLatLng()):this.mouseEventToContainerPoint(t),s.layerPoint=this.containerPointToLayerPoint(s.containerPoint),s.latlng=a?o.getLatLng():this.layerPointToLatLng(s.layerPoint)}for(var l=0;l<n.length;l++)if(n[l].fire(e,s,!0),s.originalEvent._stopped||!1===n[l].options.bubblingMouseEvents&&-1!==v(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return ye(this._mapPane)||new T(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return H([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),r=this.getSize().divideBy(2),o=new R(n.subtract(r),n.add(r)),s=this._getBoundsOffset(o,i,e);return s.round().equals([0,0])?t:this.unproject(n.add(s),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new R(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=H(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),r=n.min.subtract(t.min),o=n.max.subtract(t.max),s=this._rebound(r.x,-o.x),a=this._rebound(r.y,-o.y);return new T(s,a)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=gt?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){pe(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(i)||(this.panBy(i,e),0))},_createAnimProxy:function(){var t=this._proxy=oe("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=te,i=this._proxy.style[e];_e(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),i===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),e=this.getZoom();_e(this._proxy,this.project(t,e),this.getZoomScale(e,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){se(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),r=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==i.animate&&!this.getSize().contains(r)||(C(function(){this._moveStart(!0,!1)._animateZoom(t,e,!0)},this),0))},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,de(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),setTimeout(r(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&pe(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),C(function(){this._moveEnd(!0)},this))}}),Ge=M.extend({options:{position:"topright"},initialize:function(t){u(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return de(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(se(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Ye=function(t){return new Ge(t)};Ke.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=oe("div",e+"control-container",this._container);function n(n,r){var o=e+n+" "+e+r;t[n+r]=oe("div",o,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)se(this._controlCorners[t]);se(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Xe=Ge.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in u(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Ge.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(s(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){de(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(de(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):pe(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return pe(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=oe("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),Re(e),Ie(e);var n=this._section=oe("section",t+"-list");i&&(this._map.on("click",this.collapse,this),it||Le(e,{mouseenter:this.expand,mouseleave:this.collapse},this));var r=this._layersLink=oe("a",t+"-toggle",e);r.href="#",r.title="Layers",xt?(Le(r,"click",Ne),Le(r,"click",this.expand,this)):Le(r,"focus",this.expand,this),i||this.expand(),this._baseLayersList=oe("div",t+"-base",n),this._separator=oe("div",t+"-separator",n),this._overlaysList=oe("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&s(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(r(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ae(this._baseLayersList),ae(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,r=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,r+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&r>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(s(t.target)),i=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+s(this),n),this._layerControlInputs.push(e),e.layerId=s(t.layer),Le(e,"click",this._onInputClick,this);var r=document.createElement("span");r.innerHTML=" "+t.name;var o=document.createElement("div");i.appendChild(o),o.appendChild(e),o.appendChild(r);var a=t.overlay?this._overlaysList:this._baseLayersList;return a.appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){var t,e,i=this._layerControlInputs,n=[],r=[];this._handlingClick=!0;for(var o=i.length-1;o>=0;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||r.push(e);for(o=0;o<r.length;o++)this._map.hasLayer(r[o])&&this._map.removeLayer(r[o]);for(o=0;o<n.length;o++)this._map.hasLayer(n[o])||this._map.addLayer(n[o]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),r=i.length-1;r>=0;r--)t=i[r],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),Je=Ge.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=oe("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,r){var o=oe("a",i,n);return o.innerHTML=t,o.href="#",o.title=e,o.setAttribute("role","button"),o.setAttribute("aria-label",e),Re(o),Le(o,"click",Ne),Le(o,"click",r,this),Le(o,"click",this._refocusOnMap,this),o},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";pe(this._zoomInButton,e),pe(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMinZoom())&&de(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMaxZoom())&&de(this._zoomInButton,e)}});Ke.mergeOptions({zoomControl:!0}),Ke.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Je,this.addControl(this.zoomControl))});var Qe=Ge.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e=oe("div","leaflet-control-scale"),i=this.options;return this._addScales(i,"leaflet-control-scale-line",e),t.on(i.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=oe("div",e,i)),t.imperial&&(this._iScale=oe("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e,i,n,r=3.2808399*t;r>5280?(e=r/5280,i=this._getRoundNum(e),this._updateScale(this._iScale,i+" mi",i/e)):(n=this._getRoundNum(r),this._updateScale(this._iScale,n+" ft",n/r))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return e*(i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1)}}),ti=Ge.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){u(this,t),this._attributions={}},onAdd:function(t){for(var e in t.attributionControl=this,this._container=oe("div","leaflet-control-attribution"),Re(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}}});Ke.mergeOptions({attributionControl:!0}),Ke.addInitHook(function(){this.options.attributionControl&&(new ti).addTo(this)}),Ge.Layers=Xe,Ge.Zoom=Je,Ge.Scale=Qe,Ge.Attribution=ti,Ye.layers=function(t,e,i){return new Xe(t,e,i)},Ye.zoom=function(t){return new Je(t)},Ye.scale=function(t){return new Qe(t)},Ye.attribution=function(t){return new ti(t)};var ei=M.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ei.addTo=function(t,e){return t.addHandler(e,this),this};var ii,ni={Events:E},ri=xt?"touchstart mousedown":"mousedown",oi={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},si={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},ai=A.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){u(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(Le(this._dragStartTarget,ri,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ai._dragging===this&&this.finishDrag(),Ee(this._dragStartTarget,ri,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!ce(this._element,"leaflet-zoom-anim")&&!(ai._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(ai._dragging=this,this._preventOutline&&Se(this._element),we(),Gt(),this._moving)))){this.fire("down");var e=t.touches?t.touches[0]:t,i=Ce(this._element);this._startPoint=new T(e.clientX,e.clientY),this._parentScale=Pe(i),Le(document,si[t.type],this._onMove,this),Le(document,oi[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var e=t.touches&&1===t.touches.length?t.touches[0]:t,i=new T(e.clientX,e.clientY)._subtract(this._startPoint);(i.x||i.y)&&(Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,He(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=ye(this._element).subtract(i),de(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),de(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,P(this._animRequest),this._lastEvent=t,this._animRequest=C(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),ve(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){for(var t in pe(document.body,"leaflet-dragging"),this._lastTarget&&(pe(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),si)Ee(document,si[t],this._onMove,this),Ee(document,oi[t],this._onUp,this);xe(),Yt(),this._moved&&this._moving&&(P(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,ai._dragging=!1}});function li(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=function(t,e){var i=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(i);n[0]=n[i-1]=1,function t(e,i,n,r,o){var s,a,l,h=0;for(a=r+1;a<=o-1;a++)(l=ui(e[a],e[r],e[o],!0))>h&&(s=a,h=l);h>n&&(i[s]=1,t(e,i,n,r,s),t(e,i,n,s,o))}(t,n,e,0,i-1);var r,o=[];for(r=0;r<i;r++)n[r]&&o.push(t[r]);return o}(t=function(t,e){for(var i=[t[0]],n=1,r=0,o=t.length;n<o;n++)s=t[n],a=t[r],l=void 0,h=void 0,l=a.x-s.x,h=a.y-s.y,l*l+h*h>e&&(i.push(t[n]),r=n);var s,a,l,h;return r<o-1&&i.push(t[o-1]),i}(t,i),i)}function hi(t,e,i){return Math.sqrt(ui(t,e,i,!0))}function ci(t,e,i,n,r){var o,s,a,l=n?ii:pi(t,i),h=pi(e,i);for(ii=h;;){if(!(l|h))return[t,e];if(l&h)return!1;s=di(t,e,o=l||h,i,r),a=pi(s,i),o===l?(t=s,l=a):(e=s,h=a)}}function di(t,e,i,n,r){var o,s,a=e.x-t.x,l=e.y-t.y,h=n.min,c=n.max;return 8&i?(o=t.x+a*(c.y-t.y)/l,s=c.y):4&i?(o=t.x+a*(h.y-t.y)/l,s=h.y):2&i?(o=c.x,s=t.y+l*(c.x-t.x)/a):1&i&&(o=h.x,s=t.y+l*(h.x-t.x)/a),new T(o,s,r)}function pi(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ui(t,e,i,n){var r,o=e.x,s=e.y,a=i.x-o,l=i.y-s,h=a*a+l*l;return h>0&&((r=((t.x-o)*a+(t.y-s)*l)/h)>1?(o=i.x,s=i.y):r>0&&(o+=a*r,s+=l*r)),a=t.x-o,l=t.y-s,n?a*a+l*l:new T(o,s)}function fi(t){return!_(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function mi(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),fi(t)}var gi=(Object.freeze||Object)({simplify:li,pointToSegmentDistance:hi,closestPointOnSegment:function(t,e,i){return ui(t,e,i)},clipSegment:ci,_getEdgeIntersection:di,_getBitCode:pi,_sqClosestPointOnSegment:ui,isFlat:fi,_flat:mi});function _i(t,e,i){var n,r,o,s,a,l,h,c,d,p=[1,4,2,8];for(r=0,h=t.length;r<h;r++)t[r]._code=pi(t[r],e);for(s=0;s<4;s++){for(c=p[s],n=[],r=0,h=t.length,o=h-1;r<h;o=r++)a=t[r],l=t[o],a._code&c?l._code&c||((d=di(l,a,c,e,i))._code=pi(d,e),n.push(d)):(l._code&c&&((d=di(l,a,c,e,i))._code=pi(d,e),n.push(d)),n.push(a));t=n}return t}var vi=(Object.freeze||Object)({clipPolygon:_i}),yi={project:function(t){return new T(t.lng,t.lat)},unproject:function(t){return new D(t.y,t.x)},bounds:new R([-180,-90],[180,90])},bi={R:6378137,R_MINOR:6356752.314245179,bounds:new R([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,r=this.R_MINOR/i,o=Math.sqrt(1-r*r),s=o*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),o/2);return n=-i*Math.log(Math.max(a,1e-10)),new T(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,r=this.R_MINOR/n,o=Math.sqrt(1-r*r),s=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(s),l=0,h=.1;l<15&&Math.abs(h)>1e-7;l++)e=o*Math.sin(a),e=Math.pow((1-e)/(1+e),o/2),h=Math.PI/2-2*Math.atan(s*e)-a,a+=h;return new D(a*i,t.x*i/n)}},wi=(Object.freeze||Object)({LonLat:yi,Mercator:bi,SphericalMercator:U}),xi=i({},$,{code:"EPSG:3395",projection:bi,transformation:function(){var t=.5/(Math.PI*bi.R);return Z(t,.5,-t,.5)}()}),Si=i({},$,{code:"EPSG:4326",projection:yi,transformation:Z(1/180,1,-1/180,.5)}),zi=i({},F,{projection:yi,transformation:Z(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});F.Earth=$,F.EPSG3395=xi,F.EPSG3857=W,F.EPSG900913=K,F.EPSG4326=Si,F.Simple=zi;var Ci=A.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[s(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[s(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.getAttribution&&e.attributionControl&&e.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),e.fire("layeradd",{layer:this})}}});Ke.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=s(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=s(t);return this._layers[e]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&s(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?_(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[s(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=s(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var r=this._zoomBoundLayers[n].options;t=void 0===r.minZoom?t:Math.min(t,r.minZoom),e=void 0===r.maxZoom?e:Math.max(e,r.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Pi=Ci.extend({initialize:function(t,e){var i,n;if(u(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return s(t)}}),ki=Pi.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Pi.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Pi.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new N;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),Li=M.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){u(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];"number"==typeof n&&(n=[n,n]);var r=I(n),o=I("shadow"===e&&i.shadowAnchor||i.iconAnchor||r&&r.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),r&&(t.style.width=r.x+"px",t.style.height=r.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return Ct&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),Mi=Li.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Mi.imagePath||(Mi.imagePath=this._detectIconPath()),(this.options.imagePath||Mi.imagePath)+Li.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=oe("div","leaflet-default-icon-path",document.body),e=re(t,"background-image")||re(t,"backgroundImage");return document.body.removeChild(t),e=null===e||0!==e.indexOf("url")?"":e.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ei=ei.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new ai(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),de(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&pe(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,r=this._marker.options.autoPanPadding,o=ye(e._icon),s=i.getPixelBounds(),a=i.getPixelOrigin(),l=H(s.min._subtract(a).add(r),s.max._subtract(a).subtract(r));if(!l.contains(o)){var h=I((Math.max(l.max.x,o.x)-l.max.x)/(s.max.x-l.max.x)-(Math.min(l.min.x,o.x)-l.min.x)/(s.min.x-l.min.x),(Math.max(l.max.y,o.y)-l.max.y)/(s.max.y-l.max.y)-(Math.min(l.min.y,o.y)-l.min.y)/(s.min.y-l.min.y)).multiplyBy(n);i.panBy(h,{animate:!1}),this._draggable._newPos._add(h),this._draggable._startPos._add(h),ve(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=C(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(P(this._panRequest),this._panRequest=C(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=ye(e._icon),r=e._map.layerPointToLatLng(n);i&&ve(i,n),e._latlng=r,t.latlng=r,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){P(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ai=Ci.extend({options:{icon:new Mi,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){u(this,e),this._latlng=j(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=j(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),de(i,e),t.keyboard&&(i.tabIndex="0"),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var r=t.icon.createShadow(this._shadow),o=!1;r!==this._shadow&&(this._removeShadow(),o=!0),r&&(de(r,e),r.alt=""),this._shadow=r,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),r&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),se(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&se(this._shadow),this._shadow=null},_setPos:function(t){ve(this._icon,t),this._shadow&&ve(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(de(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ei)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ei(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&me(this._icon,t),this._shadow&&me(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Ti=Ci.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return u(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t.hasOwnProperty("weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),Oi=Ti.extend({options:{fill:!0,radius:10},initialize:function(t,e){u(this,e),this._latlng=j(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=j(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Ti.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new R(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),Ii=Oi.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),u(this,e),this._latlng=j(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Ti.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===$.distance){var r=Math.PI/180,o=this._mRadius/$.R/r,s=i.project([e+o,t]),a=i.project([e-o,t]),l=s.add(a).divideBy(2),h=i.unproject(l).lat,c=Math.acos((Math.cos(o*r)-Math.sin(e*r)*Math.sin(h*r))/(Math.cos(e*r)*Math.cos(h*r)))/r;(isNaN(c)||0===c)&&(c=o/Math.cos(Math.PI/180*e)),this._point=l.subtract(i.getPixelOrigin()),this._radius=isNaN(c)?0:l.x-i.project([h,t-c]).x,this._radiusY=l.y-s.y}else{var d=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(d).x}this._updateBounds()}}),Ri=Ti.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){u(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e,i,n=1/0,r=null,o=ui,s=0,a=this._parts.length;s<a;s++)for(var l=this._parts[s],h=1,c=l.length;h<c;h++){e=l[h-1],i=l[h];var d=o(t,e,i,!0);d<n&&(n=d,r=o(t,e,i))}return r&&(r.distance=Math.sqrt(n)),r},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,e,i,n,r,o,s,a=this._rings[0],l=a.length;if(!l)return null;for(t=0,e=0;t<l-1;t++)e+=a[t].distanceTo(a[t+1])/2;if(0===e)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<l-1;t++)if(r=a[t],o=a[t+1],i=r.distanceTo(o),(n+=i)>e)return s=(n-e)/i,this._map.layerPointToLatLng([o.x-s*(o.x-r.x),o.y-s*(o.y-r.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=j(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new N,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return fi(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=fi(t),n=0,r=t.length;n<r;n++)i?(e[n]=j(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new R;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new T(t,t);this._pxBounds=new R([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)])},_projectLatlngs:function(t,e,i){var n,r,o=t[0]instanceof D,s=t.length;if(o){for(r=[],n=0;n<s;n++)r[n]=this._map.latLngToLayerPoint(t[n]),i.extend(r[n]);e.push(r)}else for(n=0;n<s;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var e,i,n,r,o,s,a,l=this._parts;for(e=0,n=0,r=this._rings.length;e<r;e++)for(a=this._rings[e],i=0,o=a.length;i<o-1;i++)(s=ci(a[i],a[i+1],t,i,!0))&&(l[n]=l[n]||[],l[n].push(s[0]),s[1]===a[i+1]&&i!==o-2||(l[n].push(s[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=li(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,r,o,s,a,l=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,o=this._parts.length;i<o;i++)for(a=this._parts[i],n=0,s=a.length,r=s-1;n<s;r=n++)if((e||0!==n)&&hi(t,a[r],a[n])<=l)return!0;return!1}});Ri._flat=mi;var Hi=Ri.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,e,i,n,r,o,s,a,l,h=this._rings[0],c=h.length;if(!c)return null;for(o=s=a=0,t=0,e=c-1;t<c;e=t++)i=h[t],n=h[e],r=i.y*n.x-n.y*i.x,s+=(i.x+n.x)*r,a+=(i.y+n.y)*r,o+=3*r;return l=0===o?h[0]:[s/o,a/o],this._map.layerPointToLatLng(l)},_convertLatLngs:function(t){var e=Ri.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof D&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){Ri.prototype._setLatLngs.call(this,t),fi(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return fi(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new T(e,e);if(t=new R(t.min.subtract(i),t.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,r=0,o=this._rings.length;r<o;r++)(n=_i(this._rings[r],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,i,n,r,o,s,a,l,h=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(r=0,a=this._parts.length;r<a;r++)for(e=this._parts[r],o=0,l=e.length,s=l-1;o<l;s=o++)i=e[o],n=e[s],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(h=!h);return h||Ri.prototype._containsPoint.call(this,t,!0)}}),Ni=ki.extend({initialize:function(t,e){u(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,r=_(t)?t:t.features;if(r){for(e=0,i=r.length;e<i;e++)((n=r[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var o=this.options;if(o.filter&&!o.filter(t))return this;var s=Vi(t,o);return s?(s.feature=Ui(t),s.defaultOptions=s.options,this.resetStyle(s),o.onEachFeature&&o.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});function Vi(t,e){var i,n,r,o,s="Feature"===t.type?t.geometry:t,a=s?s.coordinates:null,l=[],h=e&&e.pointToLayer,c=e&&e.coordsToLatLng||Di;if(!a&&!s)return null;switch(s.type){case"Point":return i=c(a),h?h(t,i):new Ai(i);case"MultiPoint":for(r=0,o=a.length;r<o;r++)i=c(a[r]),l.push(h?h(t,i):new Ai(i));return new ki(l);case"LineString":case"MultiLineString":return n=ji(a,"LineString"===s.type?0:1,c),new Ri(n,e);case"Polygon":case"MultiPolygon":return n=ji(a,"Polygon"===s.type?1:2,c),new Hi(n,e);case"GeometryCollection":for(r=0,o=s.geometries.length;r<o;r++){var d=Vi({geometry:s.geometries[r],type:"Feature",properties:t.properties},e);d&&l.push(d)}return new ki(l);default:throw new Error("Invalid GeoJSON object.")}}function Di(t){return new D(t[1],t[0],t[2])}function ji(t,e,i){for(var n,r=[],o=0,s=t.length;o<s;o++)n=e?ji(t[o],e-1,i):(i||Di)(t[o]),r.push(n);return r}function Bi(t,e){return e="number"==typeof e?e:6,void 0!==t.alt?[c(t.lng,e),c(t.lat,e),c(t.alt,e)]:[c(t.lng,e),c(t.lat,e)]}function Fi(t,e,i,n){for(var r=[],o=0,s=t.length;o<s;o++)r.push(e?Fi(t[o],e-1,i,n):Bi(t[o],n));return!e&&i&&r.push(r[0]),r}function $i(t,e){return t.feature?i({},t.feature,{geometry:e}):Ui(e)}function Ui(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var qi={toGeoJSON:function(t){return $i(this,{type:"Point",coordinates:Bi(this.getLatLng(),t)})}};function Zi(t,e){return new Ni(t,e)}Ai.include(qi),Ii.include(qi),Oi.include(qi),Ri.include({toGeoJSON:function(t){var e=!fi(this._latlngs),i=Fi(this._latlngs,e?1:0,!1,t);return $i(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Hi.include({toGeoJSON:function(t){var e=!fi(this._latlngs),i=e&&!fi(this._latlngs[0]),n=Fi(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),$i(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Pi.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),$i(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===e)return this.toMultiPoint(t);var i="GeometryCollection"===e,n=[];return this.eachLayer(function(e){if(e.toGeoJSON){var r=e.toGeoJSON(t);if(i)n.push(r.geometry);else{var o=Ui(r);"FeatureCollection"===o.type?n.push.apply(n,o.features):n.push(o)}}}),i?$i(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var Wi=Zi,Ki=Ci.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=V(e),u(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(de(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){se(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&le(this._image),this},bringToBack:function(){return this._map&&he(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=V(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:oe("img");de(e,"leaflet-image-layer"),this._zoomAnimated&&de(e,"leaflet-zoom-animated"),this.options.className&&de(e,this.options.className),e.onselectstart=h,e.onmousemove=h,e.onload=r(this.fire,this,"load"),e.onerror=r(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;_e(this._image,i,e)},_reset:function(){var t=this._image,e=new R(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();ve(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){me(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),Gi=Ki.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:oe("video");if(de(e,"leaflet-image-layer"),this._zoomAnimated&&de(e,"leaflet-zoom-animated"),e.onselectstart=h,e.onmousemove=h,e.onloadeddata=r(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src]}else{_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&e.style.hasOwnProperty("objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop;for(var s=0;s<this._url.length;s++){var a=oe("source");a.src=this._url[s],e.appendChild(a)}}}}),Yi=Ki.extend({_initImage:function(){var t=this._image=this._url;de(t,"leaflet-image-layer"),this._zoomAnimated&&de(t,"leaflet-zoom-animated"),t.onselectstart=h,t.onmousemove=h}}),Xi=Ci.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,e){u(this,t),this._source=e},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&me(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&me(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(me(this._container,0),this._removeTimeout=setTimeout(r(se,void 0,this._container),200)):se(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=j(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&le(this._container),this},bringToBack:function(){return this._map&&he(this._container),this},_prepareOpen:function(t,e,i){if(e instanceof Ci||(i=e,e=t),e instanceof ki)for(var n in t._layers){e=t._layers[n];break}if(!i)if(e.getCenter)i=e.getCenter();else{if(!e.getLatLng)throw new Error("Unable to get source layer LatLng.");i=e.getLatLng()}return this._source=e,this.update(),i},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=I(this.options.offset),i=this._getAnchor();this._zoomAnimated?ve(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,r=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=r+"px"}},_getAnchor:function(){return[0,0]}}),Ji=Xi.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){Xi.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Ti||this._source.on("preclick",Oe))},onRemove:function(t){Xi.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Ti||this._source.off("preclick",Oe))},getEvents:function(){var t=Xi.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",e=this._container=oe("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=oe("div",t+"-content-wrapper",e);if(this._contentNode=oe("div",t+"-content",i),Re(i),Ie(this._contentNode),Le(i,"contextmenu",Oe),this._tipContainer=oe("div",t+"-tip-container",e),this._tip=oe("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=oe("a",t+"-close-button",e);n.href="#close",n.innerHTML="&#215;",Le(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,r=this.options.maxHeight;r&&n>r?(e.height=r+"px",de(t,"leaflet-popup-scrolled")):pe(t,"leaflet-popup-scrolled"),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();ve(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var t=this._map,e=parseInt(re(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,r=new T(this._containerLeft,-i-this._containerBottom);r._add(ye(this._container));var o=t.layerPointToContainerPoint(r),s=I(this.options.autoPanPadding),a=I(this.options.autoPanPaddingTopLeft||s),l=I(this.options.autoPanPaddingBottomRight||s),h=t.getSize(),c=0,d=0;o.x+n+l.x>h.x&&(c=o.x+n-h.x+l.x),o.x-c-a.x<0&&(c=o.x-a.x),o.y+i+l.y>h.y&&(d=o.y+i-h.y+l.y),o.y-d-a.y<0&&(d=o.y-a.y),(c||d)&&t.fire("autopanstart").panBy([c,d])}},_onCloseButtonClick:function(t){this._close(),Ne(t)},_getAnchor:function(){return I(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});Ke.mergeOptions({closePopupOnClick:!0}),Ke.include({openPopup:function(t,e,i){return t instanceof Ji||(t=new Ji(i).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),Ci.include({bindPopup:function(t,e){return t instanceof Ji?(u(t,e),this._popup=t,t._source=this):(this._popup&&!e||(this._popup=new Ji(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,e){return this._popup&&this._map&&(e=this._popup._prepareOpen(this,t,e),this._map.openPopup(this._popup,e)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e=t.layer||t.target;this._popup&&this._map&&(Ne(t),e instanceof Ti?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===e?this.closePopup():this.openPopup(e,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var Qi=Xi.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){Xi.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){Xi.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=Xi.prototype.getEvents.call(this);return xt&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=oe("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e=this._map,i=this._container,n=e.latLngToContainerPoint(e.getCenter()),r=e.layerPointToContainerPoint(t),o=this.options.direction,s=i.offsetWidth,a=i.offsetHeight,l=I(this.options.offset),h=this._getAnchor();"top"===o?t=t.add(I(-s/2+l.x,-a+l.y+h.y,!0)):"bottom"===o?t=t.subtract(I(s/2-l.x,-l.y,!0)):"center"===o?t=t.subtract(I(s/2+l.x,a/2-h.y+l.y,!0)):"right"===o||"auto"===o&&r.x<n.x?(o="right",t=t.add(I(l.x+h.x,h.y-a/2+l.y,!0))):(o="left",t=t.subtract(I(s+h.x-l.x,a/2-h.y-l.y,!0))),pe(i,"leaflet-tooltip-right"),pe(i,"leaflet-tooltip-left"),pe(i,"leaflet-tooltip-top"),pe(i,"leaflet-tooltip-bottom"),de(i,"leaflet-tooltip-"+o),ve(i,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&me(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return I(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});Ke.include({openTooltip:function(t,e,i){return t instanceof Qi||(t=new Qi(i).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),Ci.include({bindTooltip:function(t,e){return t instanceof Qi?(u(t,e),this._tooltip=t,t._source=this):(this._tooltip&&!e||(this._tooltip=new Qi(e,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),xt&&(i.click=this._openTooltip)),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t,e){return this._tooltip&&this._map&&(e=this._tooltip._prepareOpen(this,t,e),this._map.openTooltip(this._tooltip,e),this._tooltip.options.interactive&&this._tooltip._container&&(de(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(pe(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var e=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(e,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var e,i,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(e),n=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(n)}});var tn=Li.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&"DIV"===t.tagName?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(ae(e),e.appendChild(i.html)):e.innerHTML=!1!==i.html?i.html:"",i.bgPos){var n=I(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});Li.Default=Mi;var en=Ci.extend({options:{tileSize:256,opacity:1,updateWhenIdle:_t,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){u(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),se(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(le(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(he(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=a(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof T?t:new T(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),r=0,o=i.length;r<o;r++)e=i[r].style.zIndex,i[r]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Q){me(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var r=this._tiles[n];if(r.current&&r.loaded){var o=Math.min(1,(t-r.loaded)/200);me(r.el,o),o<1?e=!0:(r.active?i=!0:this._onOpaqueTile(r),r.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(P(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this))}},_onOpaqueTile:h,_initContainer:function(){this._container||(this._container=oe("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(se(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],r=this._map;return n||((n=this._levels[t]={}).el=oe("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=r.project(r.unproject(r.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,r.getCenter(),r.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:h,_onRemoveLevel:h,_onCreateLevel:h,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(e=this._tiles[t]).retain=e.current;for(t in this._tiles)if((e=this._tiles[t]).current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)se(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var r=Math.floor(t/2),o=Math.floor(e/2),s=i-1,a=new T(+r,+o);a.z=+s;var l=this._tileCoordsToKey(a),h=this._tiles[l];return h&&h.active?(h.retain=!0,!0):(h&&h.loaded&&(h.retain=!0),s>n&&this._retainParent(r,o,s,n))},_retainChildren:function(t,e,i,n){for(var r=2*t;r<2*t+2;r++)for(var o=2*e;o<2*e+2;o++){var s=new T(r,o);s.z=i+1;var a=this._tileCoordsToKey(s),l=this._tiles[a];l&&l.active?l.retain=!0:(l&&l.loaded&&(l.retain=!0),i+1<n&&this._retainChildren(r,o,i+1,n))}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var r=this._clampZoom(Math.round(e));(void 0!==this.options.maxZoom&&r>this.options.maxZoom||void 0!==this.options.minZoom&&r<this.options.minZoom)&&(r=void 0);var o=this.options.updateWhenZooming&&r!==this._tileZoom;n&&!o||(this._tileZoom=r,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==r&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),r=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();gt?_e(t.el,r,n):ve(t.el,r)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,r=this._map.getPixelWorldBounds(this._tileZoom);r&&(this._globalTileRange=this._pxBoundsToTileRange(r)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),r=e.project(t,this._tileZoom).floor(),o=e.getSize().divideBy(2*n);return new R(r.subtract(o),r.add(o))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),r=this._pxBoundsToTileRange(n),o=r.getCenter(),s=[],a=this.options.keepBuffer,l=new R(r.getBottomLeft().subtract([a,-a]),r.getTopRight().add([a,-a]));if(!(isFinite(r.min.x)&&isFinite(r.min.y)&&isFinite(r.max.x)&&isFinite(r.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var h in this._tiles){var c=this._tiles[h].coords;c.z===this._tileZoom&&l.contains(new T(c.x,c.y))||(this._tiles[h].current=!1)}if(Math.abs(i-this._tileZoom)>1)this._setView(t,i);else{for(var d=r.min.y;d<=r.max.y;d++)for(var p=r.min.x;p<=r.max.x;p++){var u=new T(p,d);if(u.z=this._tileZoom,this._isValidTile(u)){var f=this._tiles[this._tileCoordsToKey(u)];f?f.current=!0:s.push(u)}}if(s.sort(function(t,e){return t.distanceTo(o)-e.distanceTo(o)}),0!==s.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(p=0;p<s.length;p++)this._addTile(s[p],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return V(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),r=n.add(i),o=e.unproject(n,t.z),s=e.unproject(r,t.z);return[o,s]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new N(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new T(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(se(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){de(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=h,t.onmousemove=h,Q&&this.options.opacity<1&&me(t,this.options.opacity),it&&!nt&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),r(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&C(r(this._tileReady,this,t,null,o)),ve(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(me(i.el,0),P(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(de(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Q||!this._map._fadeAnimated?C(this._pruneTiles,this):setTimeout(r(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new T(this._wrapX?l(t.x,this._wrapX):t.x,this._wrapY?l(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new R(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),nn=en.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,e){this._url=t,(e=u(this,e)).detectRetina&&Ct&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom++):(e.zoomOffset++,e.maxZoom--),e.minZoom=Math.max(0,e.minZoom)),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),it||this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return Le(i,"load",r(this._tileOnLoad,this,e,i)),Le(i,"error",r(this._tileOnError,this,e,i)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i.alt="",i.setAttribute("role","presentation"),i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:Ct?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return g(this._url,i(e,this.options))},_tileOnLoad:function(t,e){Q?setTimeout(r(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((e=this._tiles[t].el).onload=h,e.onerror=h,e.complete||(e.src=y,se(e),delete this._tiles[t]))},_removeTile:function(t){var e=this._tiles[t];if(e)return ot||e.el.setAttribute("src",y),en.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==y))return en.prototype._tileReady.call(this,t,e,i)}});function rn(t,e){return new nn(t,e)}var on=nn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var r in e)r in this.options||(n[r]=e[r]);var o=(e=u(this,e)).detectRetina&&Ct?2:1,s=this.getTileSize();n.width=s.x*o,n.height=s.y*o,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,nn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=H(i.project(e[0]),i.project(e[1])),r=n.min,o=n.max,s=(this._wmsVersion>=1.3&&this._crs===Si?[r.y,r.x,o.y,o.x]:[r.x,r.y,o.x,o.y]).join(","),a=nn.prototype.getTileUrl.call(this,t);return a+f(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+s},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});nn.WMS=on,rn.wms=function(t,e){return new on(t,e)};var sn=Ci.extend({options:{padding:.1,tolerance:0},initialize:function(t){u(this,t),s(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&de(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=ye(this._container),r=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),s=this._map.project(t,e),a=s.subtract(o),l=r.multiplyBy(-i).add(n).add(r).subtract(a);gt?_e(this._container,l,i):ve(this._container,l)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new R(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),an=sn.extend({getEvents:function(){var t=sn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){sn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Le(t,"mousemove",a(this._onMouseMove,32,this),this),Le(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Le(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){P(this._redrawRequest),delete this._ctx,se(this._container),Ee(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){sn.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=Ct?2:1;ve(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",Ct&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){sn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[s(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[s(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var e,i,n=t.options.dashArray.split(/[, ]+/),r=[];for(i=0;i<n.length;i++){if(e=Number(n[i]),isNaN(e))return;r.push(e)}t.options._dashArray=r}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||C(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new R,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,r,o,s=t._parts,a=s.length,l=this._ctx;if(a){for(l.beginPath(),i=0;i<a;i++){for(n=0,r=s[i].length;n<r;n++)o=s[i][n],l[n?"lineTo":"moveTo"](o.x,o.y);e&&l.closePath()}this._fillStroke(l,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),r=(Math.max(Math.round(t._radiusY),1)||n)/n;1!==r&&(i.save(),i.scale(1,r)),i.beginPath(),i.arc(e.x,e.y/r,n,0,2*Math.PI,!1),1!==r&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),r=this._drawFirst;r;r=r.next)(e=r.layer).options.interactive&&e._containsPoint(n)&&!this._map._draggableMoved(e)&&(i=e);i&&($e(t),this._fireEvent([i],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(pe(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,e){for(var i,n,r=this._drawFirst;r;r=r.next)(i=r.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(de(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;i&&(i.prev=n,n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t))}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;n&&(n.next=i,i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t))}}});function ln(t){return Pt?new an(t):null}var hn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),cn={_initContainer:function(){this._container=oe("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(sn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=hn("shape");de(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=hn("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[s(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;se(e),t.removeInteractiveTarget(e),delete this._layers[s(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,r=t._container;r.stroked=!!n.stroke,r.filled=!!n.fill,n.stroke?(e||(e=t._stroke=hn("stroke")),r.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=_(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(r.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=hn("fill")),r.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(r.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){le(t._container)},_bringToBack:function(t){he(t._container)}},dn=Lt?hn:G,pn=sn.extend({getEvents:function(){var t=sn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=dn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=dn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){se(this._container),Ee(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){sn.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),ve(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=dn("path");t.options.className&&de(e,t.options.className),t.options.interactive&&de(e,"leaflet-interactive"),this._updateStyle(t),this._layers[s(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){se(t._path),t.removeInteractiveTarget(t._path),delete this._layers[s(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Y(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,r="a"+i+","+n+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+r+2*i+",0 "+r+2*-i+",0 ";this._setPath(t,o)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){le(t._path)},_bringToBack:function(t){he(t._path)}});function un(t){return kt||Lt?new pn(t):null}Lt&&pn.include(cn),Ke.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var e=this._paneRenderers[t];return void 0===e&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&ln(t)||un(t)}});var fn=Hi.extend({initialize:function(t,e){Hi.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=V(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});pn.create=dn,pn.pointsToPath=Y,Ni.geometryToLayer=Vi,Ni.coordsToLatLng=Di,Ni.coordsToLatLngs=ji,Ni.latLngToCoords=Bi,Ni.latLngsToCoords=Fi,Ni.getFeature=$i,Ni.asFeature=Ui,Ke.mergeOptions({boxZoom:!0});var mn=ei.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Le(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ee(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){se(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),Gt(),we(),this._startPoint=this._map.mouseEventToContainerPoint(t),Le(document,{contextmenu:Ne,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=oe("div","leaflet-zoom-box",this._container),de(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new R(this._point,this._startPoint),i=e.getSize();ve(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(se(this._box),pe(this._container,"leaflet-crosshair")),Yt(),xe(),Ee(document,{contextmenu:Ne,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(r(this._resetState,this),0);var e=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});Ke.addInitHook("addHandler","boxZoom",mn),Ke.mergeOptions({doubleClickZoom:!0});var gn=ei.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,r=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(r):e.setZoomAround(t.containerPoint,r)}});Ke.addInitHook("addHandler","doubleClickZoom",gn),Ke.mergeOptions({dragging:!0,inertia:!nt,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var _n=ei.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new ai(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}de(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){pe(this._map._container,"leaflet-grab"),pe(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=V(this._map.options.maxBounds);this._offsetLimit=H(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,r=(n-e+i)%t+e-i,o=(n+e+i)%t-e-i,s=Math.abs(r+i)<Math.abs(o+i)?r:o;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=s},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var r=this._lastPos.subtract(this._positions[0]),o=(this._lastTime-this._times[0])/1e3,s=i.easeLinearity,a=r.multiplyBy(s/o),l=a.distanceTo([0,0]),h=Math.min(i.inertiaMaxSpeed,l),c=a.multiplyBy(h/l),d=h/(i.inertiaDeceleration*s),p=c.multiplyBy(-d/2).round();p.x||p.y?(p=e._limitOffset(p,e.options.maxBounds),C(function(){e.panBy(p,{duration:d,easeLinearity:s,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}});Ke.addInitHook("addHandler","dragging",_n),Ke.mergeOptions({keyboard:!0,keyboardPanDelta:80});var vn=ei.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),Le(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ee(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,i,n=this._panKeys={},r=this.keyCodes;for(e=0,i=r.left.length;e<i;e++)n[r.left[e]]=[-1*t,0];for(e=0,i=r.right.length;e<i;e++)n[r.right[e]]=[t,0];for(e=0,i=r.down.length;e<i;e++)n[r.down[e]]=[0,t];for(e=0,i=r.up.length;e<i;e++)n[r.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,i,n=this._zoomKeys={},r=this.keyCodes;for(e=0,i=r.zoomIn.length;e<i;e++)n[r.zoomIn[e]]=t;for(e=0,i=r.zoomOut.length;e<i;e++)n[r.zoomOut[e]]=-t},_addHooks:function(){Le(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ee(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i=t.keyCode,n=this._map;if(i in this._panKeys)n._panAnim&&n._panAnim._inProgress||(e=this._panKeys[i],t.shiftKey&&(e=I(e).multiplyBy(3)),n.panBy(e),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Ne(t)}}});Ke.addInitHook("addHandler","keyboard",vn),Ke.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var yn=ei.extend({addHooks:function(){Le(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ee(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=je(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(r(this._performZoom,this),n),Ne(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),r=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,o=i?Math.ceil(r/i)*i:r,s=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,s&&("center"===t.options.scrollWheelZoom?t.setZoom(e+s):t.setZoomAround(this._lastMousePos,e+s))}});Ke.addInitHook("addHandler","scrollWheelZoom",yn),Ke.mergeOptions({tap:!0,tapTolerance:15});var bn=ei.extend({addHooks:function(){Le(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ee(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(He(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var e=t.touches[0],i=e.target;this._startPos=this._newPos=new T(e.clientX,e.clientY),i.tagName&&"a"===i.tagName.toLowerCase()&&de(i,"leaflet-active"),this._holdTimeout=setTimeout(r(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",e))},this),1e3),this._simulateEvent("mousedown",e),Le(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),Ee(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var e=t.changedTouches[0],i=e.target;i&&i.tagName&&"a"===i.tagName.toLowerCase()&&pe(i,"leaflet-active"),this._simulateEvent("mouseup",e),this._isTapValid()&&this._simulateEvent("click",e)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new T(e.clientX,e.clientY),this._simulateEvent("mousemove",e)},_simulateEvent:function(t,e){var i=document.createEvent("MouseEvents");i._simulated=!0,e.target._simulatedClick=!0,i.initMouseEvent(t,!0,!0,window,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(i)}});xt&&!wt&&Ke.addInitHook("addHandler","tap",bn),Ke.mergeOptions({touchZoom:xt&&!nt,bounceAtZoomLimits:!0});var wn=ei.extend({addHooks:function(){de(this._map._container,"leaflet-touch-zoom"),Le(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){pe(this._map._container,"leaflet-touch-zoom"),Ee(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),Le(document,"touchmove",this._onTouchMove,this),Le(document,"touchend",this._onTouchEnd,this),He(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===o)return}else{var s=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1===o&&0===s.x&&0===s.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),P(this._animRequest);var a=r(e._move,e,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=C(a,this,!0),He(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,P(this._animRequest),Ee(document,"touchmove",this._onTouchMove),Ee(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});Ke.addInitHook("addHandler","touchZoom",wn),Ke.BoxZoom=mn,Ke.DoubleClickZoom=gn,Ke.Drag=_n,Ke.Keyboard=vn,Ke.ScrollWheelZoom=yn,Ke.Tap=bn,Ke.TouchZoom=wn,Object.freeze=e,t.version="1.5.1+build.2e3e0ffb",t.Control=Ge,t.control=Ye,t.Browser=Et,t.Evented=A,t.Mixin=ni,t.Util=k,t.Class=M,t.Handler=ei,t.extend=i,t.bind=r,t.stamp=s,t.setOptions=u,t.DomEvent=Ze,t.DomUtil=ke,t.PosAnimation=We,t.Draggable=ai,t.LineUtil=gi,t.PolyUtil=vi,t.Point=T,t.point=I,t.Bounds=R,t.bounds=H,t.Transformation=q,t.transformation=Z,t.Projection=wi,t.LatLng=D,t.latLng=j,t.LatLngBounds=N,t.latLngBounds=V,t.CRS=F,t.GeoJSON=Ni,t.geoJSON=Zi,t.geoJson=Wi,t.Layer=Ci,t.LayerGroup=Pi,t.layerGroup=function(t,e){return new Pi(t,e)},t.FeatureGroup=ki,t.featureGroup=function(t){return new ki(t)},t.ImageOverlay=Ki,t.imageOverlay=function(t,e,i){return new Ki(t,e,i)},t.VideoOverlay=Gi,t.videoOverlay=function(t,e,i){return new Gi(t,e,i)},t.SVGOverlay=Yi,t.svgOverlay=function(t,e,i){return new Yi(t,e,i)},t.DivOverlay=Xi,t.Popup=Ji,t.popup=function(t,e){return new Ji(t,e)},t.Tooltip=Qi,t.tooltip=function(t,e){return new Qi(t,e)},t.Icon=Li,t.icon=function(t){return new Li(t)},t.DivIcon=tn,t.divIcon=function(t){return new tn(t)},t.Marker=Ai,t.marker=function(t,e){return new Ai(t,e)},t.TileLayer=nn,t.tileLayer=rn,t.GridLayer=en,t.gridLayer=function(t){return new en(t)},t.SVG=pn,t.svg=un,t.Renderer=sn,t.Canvas=an,t.canvas=ln,t.Path=Ti,t.CircleMarker=Oi,t.circleMarker=function(t,e){return new Oi(t,e)},t.Circle=Ii,t.circle=function(t,e,i){return new Ii(t,e,i)},t.Polyline=Ri,t.polyline=function(t,e){return new Ri(t,e)},t.Polygon=Hi,t.polygon=function(t,e){return new Hi(t,e)},t.Rectangle=fn,t.rectangle=function(t,e){return new fn(t,e)},t.Map=Ke,t.map=function(t,e){return new Ke(t,e)};var xn=window.L;t.noConflict=function(){return window.L=xn,this},window.L=t}(e)},function(t,e,i){"use strict";var n=i(63),r=i(64),o=i(65);function s(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function a(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function l(t,e){var i=function(t){var e;switch(t.arrayFormat){case"index":return function(t,i,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=i):n[t]=i};case"bracket":return function(t,i,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],i):n[t]=[i]:n[t]=i};default:return function(t,e,i){void 0!==i[t]?i[t]=[].concat(i[t],e):i[t]=e}}}(e=r({arrayFormat:"none"},e)),n=Object.create(null);return"string"!=typeof t?n:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),r=e.shift(),s=e.length>0?e.join("="):void 0;s=void 0===s?null:o(s),i(o(r),s,n)}),Object.keys(n).sort().reduce(function(t,e){var i=n[e];return Boolean(i)&&"object"==typeof i&&!Array.isArray(i)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort(function(t,e){return Number(t)-Number(e)}).map(function(t){return e[t]}):e}(i):t[e]=i,t},Object.create(null))):n}e.extract=a,e.parse=l,e.stringify=function(t,e){!1===(e=r({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=function(){});var i=function(t){switch(t.arrayFormat){case"index":return function(e,i,n){return null===i?[s(e,t),"[",n,"]"].join(""):[s(e,t),"[",s(n,t),"]=",s(i,t)].join("")};case"bracket":return function(e,i){return null===i?s(e,t):[s(e,t),"[]=",s(i,t)].join("")};default:return function(e,i){return null===i?s(e,t):[s(e,t),"=",s(i,t)].join("")}}}(e);return t?Object.keys(t).sort(e.sort).map(function(n){var r=t[n];if(void 0===r)return"";if(null===r)return s(n,e);if(Array.isArray(r)){var o=[];return r.slice().forEach(function(t){void 0!==t&&o.push(i(n,t,o.length))}),o.join("&")}return s(n,e)+"="+s(r,e)}).filter(function(t){return t.length>0}).join("&"):""},e.parseUrl=function(t,e){return{url:t.split("?")[0]||"",query:l(a(t),e)}}},function(t,e,i){const{AppStateModel:n}=i(35),r=i(66);t.exports=new class extends n{constructor(){super(),this.store=r}set(t={}){if(window.location.hash){let t=window.location.hash.replace(/^#?/,"").split("/");return"result"===t[0]&&(t[0]="package"),"home"===t[0]&&(t=[]),this.setLocation("/"+t.join("/"))}return null!==this.getParameterByName("result")?this.setLocation("/package/"+this.getParameterByName("result")):(this._sendGA(),t.location&&t.location.path&&t.location.path.length&&(t.page=t.location.path[0]),t.page||(t.page="home"),"package"===t.page&&t.location.path.length<=1?this.setLocation(""):void super.set(t))}_sendGA(){APP_CONFIG.gaCode&&(gtag||console.warn("No global gtag variable set for analytics events"),this.lastGaLocation!==window.location.pathname&&(this.lastGaLocation=window.location.pathname,gtag("config",APP_CONFIG.gaCode,{page_path:window.location.pathname})))}getParameterByName(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null}}},function(t,e,i){var{BaseModel:n}=i(11);t.exports=class extends n{constructor(){super(),this.register("AppStateModel")}setLocationElement(t){this.locationElement=t}setLocation(t){if(!this.locationElement)return console.warn("Call to setWindowLocation but no locationElement set");this.locationElement.setWindowLocation(t)}async get(){return this.store.data}set(t){return this.store.set(t),this.get()}}},function(t,e,i){const n=i(25),r=i(36);t.exports=class{get EventBus(){return n}register(t){t||console.warn("Name not passed to register().  This will fail in IE, cause, you know, IE.");var e=t||this.__proto__.constructor.name;r.registerModel(e,this)}emit(t,e){setTimeout(()=>{n.emit(t,e)},0)}}},function(t,e,i){"use strict";var n,r="object"==typeof Reflect?Reflect:null,o=r&&"function"==typeof r.apply?r.apply:function(t,e,i){return Function.prototype.apply.call(t,e,i)};n=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var l=10;function h(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function c(t,e,i,n){var r,o,s,a;if("function"!=typeof i)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i);if(void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,i.listener?i.listener:i),o=t._events),s=o[e]),void 0===s)s=o[e]=i,++t._eventsCount;else if("function"==typeof s?s=o[e]=n?[i,s]:[s,i]:n?s.unshift(i):s.push(i),(r=h(t))>0&&s.length>r&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=s.length,a=l,console&&console.warn&&console.warn(a)}return t}function d(t,e,i){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:i},r=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,t))}.bind(n);return r.listener=i,n.wrapFn=r,r}function p(t,e,i){var n=t._events;if(void 0===n)return[];var r=n[e];return void 0===r?[]:"function"==typeof r?i?[r.listener||r]:[r]:i?function(t){for(var e=new Array(t.length),i=0;i<e.length;++i)e[i]=t[i].listener||t[i];return e}(r):f(r,r.length)}function u(t){var e=this._events;if(void 0!==e){var i=e[t];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function f(t,e){for(var i=new Array(e),n=0;n<e;++n)i[n]=t[n];return i}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");l=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return h(this)},a.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var n="error"===t,r=this._events;if(void 0!==r)n=n&&void 0===r.error;else if(!n)return!1;if(n){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=r[t];if(void 0===l)return!1;if("function"==typeof l)o(l,this,e);else{var h=l.length,c=f(l,h);for(i=0;i<h;++i)o(c[i],this,e)}return!0},a.prototype.addListener=function(t,e){return c(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return c(this,t,e,!0)},a.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,d(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,d(this,t,e)),this},a.prototype.removeListener=function(t,e){var i,n,r,o,s;if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(n=this._events))return this;if(void 0===(i=n[t]))return this;if(i===e||i.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,i.listener||e));else if("function"!=typeof i){for(r=-1,o=i.length-1;o>=0;o--)if(i[o]===e||i[o].listener===e){s=i[o].listener,r=o;break}if(r<0)return this;0===r?i.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(i,r),1===i.length&&(n[t]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[t]),this;if(0===arguments.length){var r,o=Object.keys(i);for(n=0;n<o.length;++n)"removeListener"!==(r=o[n])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=i[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},a.prototype.listeners=function(t){return p(this,t,!0)},a.prototype.rawListeners=function(t){return p(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):u.call(t,e)},a.prototype.listenerCount=u,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(t,e,i){const n=i(25),r=i(54);t.exports=class{constructor(){this.STATE={INIT:"init",LOADING:"loading",LOADED:"loaded",ERROR:"error",SAVING:"saving",SAVE_ERROR:"save-error",SAVE_SUCCESS:"save-success",DELETING:"deleting",DELETE_ERROR:"delete-error",DELETED:"deleted"}}get EventBus(){return n}emit(t,e){setTimeout(()=>{n.emit(t,e)},0)}stateChanged(t,e){return!((t||!e)&&(!t||e)&&(!t&&!e||t.state===e.state&&r(t,e)))}}},function(t,e,i){"use strict";var n=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty;t.exports=function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var s,a,l,h=n(e),c=n(i);if(h&&c){if((a=e.length)!=i.length)return!1;for(s=a;0!=s--;)if(!t(e[s],i[s]))return!1;return!0}if(h!=c)return!1;var d=e instanceof Date,p=i instanceof Date;if(d!=p)return!1;if(d&&p)return e.getTime()==i.getTime();var u=e instanceof RegExp,f=i instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==i.toString();var m=r(e);if((a=m.length)!==r(i).length)return!1;for(s=a;0!=s--;)if(!o.call(i,m[s]))return!1;for(s=a;0!=s--;)if(!t(e[l=m[s]],i[l]))return!1;return!0}return e!=e&&i!=i}},function(t,e,i){const n=i(41);t.exports=class{constructor(){this.rootUrl="","undefined"!=typeof window&&(this.rootUrl=window.location.protocol+"//"+window.location.host),this.ERROR_MESSAGES={REQUEST:"Request Error",STATUS_CODE:"Invalid status code",JSON:"Invalid JSON response",APPLICATION_ERROR:"Application Error"}}async request(t){if(!t.store){if(!this.store)return console.error(new Error("No store provided"));t.store=this.store}if(t.fetchOptions||(t.fetchOptions={}),t.fetchOptions.credentials||(t.fetchOptions.credentials="include"),t.json&&t.fetchOptions&&t.fetchOptions.body&&"object"==typeof t.fetchOptions.body&&(t.fetchOptions.body=JSON.stringify(t.fetchOptions.body),t.fetchOptions.headers||(t.fetchOptions.headers={}),t.fetchOptions.headers["Content-Type"]="application/json"),t.qs){let i=[];for(var e in t.qs)i.push(`${e}=${t.qs[e]}`);t.url+="?"+i.join("&")}if(t.checkCached){var i=t.checkCached();if(this.isLoaded(i))return i;if(this.isLoading(i)){if(!i.request)throw new Error("checkCached set but no request object found",i);return i.request}}let n=this._request(t);return t.onLoading&&t.onLoading(n),await n}_request(t){return t.fetchOptions||(t.fetchOptions={}),new Promise(async(e,i)=>{var r=null;try{r=await n(t.url,t.fetchOptions)}catch(e){return this._handleError(t,i,{error:!0,details:e,response:r,message:this.ERROR_MESSAGES.REQUEST})}if(r.status<200||r.status>299)return this._handleError(t,i,{error:!0,response:r,message:this.ERROR_MESSAGES.STATUS_CODE});if(r.headers.has("Content-Type")&&r.headers.get("Content-Type").match(/application\/json/i)){var o=null;try{o=await r.json()}catch(e){return this._handleError(t,i,{error:!0,details:e,response:r,message:this.ERROR_MESSAGES.JSON})}if(o.error)return this._handleError(t,i,{error:!0,details:o,response:r,message:this.ERROR_MESSAGES.APPLICATION_ERROR})}else o=await r.text();t.onLoad&&t.onLoad({response:r,body:o}),e({response:r,body:o})})}async _handleError(t,e,i){if(i.response&&!i.payload)if(i.response.headers.has("Content-Type")&&i.response.headers.get("Content-Type").match(/application\/json/i))try{i.payload=await i.response.json()}catch(t){i.payload={}}else i.payload=await i.response.text();t.onError&&t.onError(i),e(i)}isLoaded(t){return this.store?!(!t||t.state!==this.store.STATE.LOADED):console.warn("Checking LOADED state but no store set for service")}isLoading(t){return this.store?!(!t||t.state!==this.store.STATE.LOADING):console.warn("Checking LOADED state but no store set for service")}}},function(t,e,i){"use strict";i.r(e),i.d(e,"Headers",function(){return h}),i.d(e,"Request",function(){return g}),i.d(e,"Response",function(){return v}),i.d(e,"DOMException",function(){return b}),i.d(e,"fetch",function(){return w});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise(function(e,i){t.onload=function(){e(t.result)},t.onerror=function(){i(t.error)}})}function p(t){var e=new FileReader,i=d(e);return e.readAsArrayBuffer(t),i}function u(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=u(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=u(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t,e,i,n=c(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,i=d(e),e.readAsText(t),i;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),i=new Array(e.length),n=0;n<e.length;n++)i[n]=String.fromCharCode(e[n]);return i.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=s(t),e=a(e);var i=this.map[t];this.map[t]=i?i+", "+e:e},h.prototype.delete=function(t){delete this.map[s(t)]},h.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},h.prototype.set=function(t,e){this.map[s(t)]=a(e)},h.prototype.forEach=function(t,e){for(var i in this.map)this.map.hasOwnProperty(i)&&t.call(e,this.map[i],i,this)},h.prototype.keys=function(){var t=[];return this.forEach(function(e,i){t.push(i)}),l(t)},h.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),l(t)},h.prototype.entries=function(){var t=[];return this.forEach(function(e,i){t.push([i,e])}),l(t)},n.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t,e){var i,n,r=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=(i=e.method||this.method||"GET",n=i.toUpperCase(),m.indexOf(n)>-1?n:i),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function _(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var i=t.split("="),n=i.shift().replace(/\+/g," "),r=i.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(r))}}),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},f.call(g.prototype),f.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var y=[301,302,303,307,308];v.redirect=function(t,e){if(-1===y.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var b=self.DOMException;try{new b}catch(t){(b=function(t,e){this.message=t,this.name=e;var i=Error(t);this.stack=i.stack}).prototype=Object.create(Error.prototype),b.prototype.constructor=b}function w(t,e){return new Promise(function(i,r){var o=new g(t,e);if(o.signal&&o.signal.aborted)return r(new b("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var i=t.split(":"),n=i.shift().trim();if(n){var r=i.join(":").trim();e.append(n,r)}}),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var r="response"in s?s.response:s.responseText;i(new v(r,n))},s.onerror=function(){r(new TypeError("Network request failed"))},s.ontimeout=function(){r(new TypeError("Network request failed"))},s.onabort=function(){r(new b("Aborted","AbortError"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&n.blob&&(s.responseType="blob"),o.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),o.signal&&(o.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",a)}),s.send(void 0===o._bodyInit?null:o._bodyInit)})}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=h,self.Request=g,self.Response=v)},function(t,e){class i{ready(){this.listening=!0}}"undefined"!=typeof window&&(window.BaseMixin=i),t.exports=i},function(t,e){class i{constructor(t){this.superclass=t}with(...t){return t.reduce((t,e)=>e(t),this.superclass)}}const n=t=>new i(t);"undefined"!=typeof window&&(window.Mixin=n),t.exports=n},function(t,e,i){const n=i(25),r=i(36),o=t=>(class extends t{static get properties(){return{listening:{type:Boolean,value:!0,observer:"_onListenUpdate"}}}set bind(t){this._bind=Object.assign(this.bind,t)}get bind(){return this._bind||(this._bind={}),this._bind}constructor(){super(),this.bind={},this._eb_handlers={},this._eb_handlersSet=!1,this._eb_unregisterOnDetach=!0,this._debounce_handlers={}}ready(){super.ready(),this._eb_init()}connectedCallback(){super.connectedCallback(),this._eb_init()}_eb_init(){if(!this._eb_handlersSet)for(var t in this._eb_handlersSet=!0,this._debugEventInterface&&console.log(this.nodeName,"ready and connected to DOM, attaching event listeners",this.bind),this.bind)this[this.bind[t]]?this._eb_init_fn(t):console.warn(`${this.nodeName} could not bind event ${t} to ${this.bind[t]}`)}_eb_init_fn(t){this[this.bind[t]]=this[this.bind[t]].bind(this),this._eb_handlers[t]=(...e)=>{this.listening?(this._debugEventInterface&&console.log(this.nodeName,"received event",t,", triggering function:",this.bind[t]),this[this.bind[t]].apply(this,e)):this._debugEventInterface&&console.warn(this.nodeName,"ignoring",t,"event, element not listening")},n.on(t,this._eb_handlers[t])}disconnectedCallback(){if(super.disconnectedCallback(),this._debugEventInterface&&console.log(this.nodeName,"disconnected from DOM, removing event listeners"),this._eb_unregisterOnDetach&&this._eb_handlersSet)for(var t in this._eb_handlersSet=!1,this.bind){if(!this[this.bind[t]])continue;let e=n.listenerCount(t);n.removeListener(t,this._eb_handlers[t]),n.listenerCount(t)!==e-1&&console.warn(this.nodeName,"On element detach, failed to remove event listener for: ",t),this._debugEventInterface&&console.log(this.nodeName,"removing event listener for:",t)}}EventBus(){return n}_injectModel(...t){t.forEach(t=>{"string"==typeof t?this._injectModelStr(t):this._bindModelObj(t)})}_injectModelStr(t){this[t]=r.getModel(t),this._bindModelObj(this[t])}_bindModelObj(t){t.events&&this._registerModelEvents(t.events),t.store&&t.store.events&&this._registerModelEvents(t.store.events)}_registerModelEvents(t){for(var e in t){var i=this._getMethodNameFromEvent(t[e]);this[i]?(this._debugEventInterface&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!0),this.bind[t[e]]=i):this._debugEventInterface&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!1)}}_getMethodNameFromEvent(t){return"_on"+t.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}emit(t,e){n.emit(t,e)}fire(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}debounce(t,e,i){this._debounce_handlers[t]&&clearTimeout(this._debounce_handlers[t]),this._debounce_handlers[t]=setTimeout(()=>{delete this._debounce_handlers[t],e()},i)}_onListenUpdate(){}});"undefined"!=typeof window&&(window.EventInterface=o),t.exports=o},function(t,e,i){const n=i(25),r=i(36),o=t=>(class extends t{static get properties(){return{listening:{type:Boolean}}}set bind(t){this._bind=Object.assign(this.bind,t)}get bind(){return this._bind||(this._bind={}),this._bind}constructor(){super(),this.bind={},this._eb_handlers={},this._eb_handlersSet=!1,this._eb_unregisterOnDetach=!0,this._debounce_handlers={},this.listening=!0}connectedCallback(){super.connectedCallback(),this._eb_init()}_eb_init(){if(!this._eb_handlersSet)for(var t in this._eb_handlersSet=!0,this._debugLitCorkUtils&&console.log(this.nodeName,"ready and connected to DOM, attaching event listeners",this.bind),this.bind)this[this.bind[t]]?this._eb_init_fn(t):console.warn(`${this.nodeName} could not bind event ${t} to ${this.bind[t]}`)}_eb_init_fn(t){this[this.bind[t]]=this[this.bind[t]].bind(this),this._eb_handlers[t]=(...e)=>{this.listening?(this._debugLitCorkUtils&&console.log(this.nodeName,"received event",t,", triggering function:",this.bind[t]),this[this.bind[t]].apply(this,e)):this._debugLitCorkUtils&&console.warn(this.nodeName,"ignoring",t,"event, element not listening")},n.on(t,this._eb_handlers[t])}disconnectedCallback(){if(super.disconnectedCallback(),this._debugLitCorkUtils&&console.log(this.nodeName,"disconnected from DOM, removing event listeners"),this._eb_unregisterOnDetach&&this._eb_handlersSet)for(var t in this._eb_handlersSet=!1,this.bind){if(!this[this.bind[t]])continue;let e=n.listenerCount(t);n.removeListener(t,this._eb_handlers[t]),n.listenerCount(t)!==e-1&&console.warn(this.nodeName,"On element detach, failed to remove event listener for: ",t),this._debugLitCorkUtils&&console.log(this.nodeName,"removing event listener for:",t)}}EventBus(){return n}_injectModel(...t){t.forEach(t=>{"string"==typeof t?this._injectModelStr(t):this._bindModelObj(t)})}_injectModelStr(t){this[t]=r.getModel(t),this._bindModelObj(this[t])}_bindModelObj(t){t.events&&this._registerModelEvents(t.events),t.store&&t.store.events&&this._registerModelEvents(t.store.events)}_registerModelEvents(t){for(var e in t){var i=this._getMethodNameFromEvent(t[e]);this[i]?(this._debugLitCorkUtils&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!0),this.bind[t[e]]=i):this._debugLitCorkUtils&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!1)}}_getMethodNameFromEvent(t){return"_on"+t.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}emit(t,e){n.emit(t,e)}fire(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}byId(t){return this.shadowRoot?this.shadowRoot.querySelector("#"+t):this.querySelector("#"+t)}$(t){return this.shadowRoot?this.shadowRoot.querySelector(t):this.querySelector(t)}updated(t){t.has("listening")&&this._onListenUpdate()}_onListenUpdate(){}});"undefined"!=typeof window&&(window.LitCorkUtils=o),t.exports=o},function(t,e){t.exports=t=>(class extends t{_attachDom(t){if(window.ShadyDOM&&window.ShadyDOM.inUse)return super._attachDom(t);let e=t.querySelectorAll("style");for(var i=0;i<e.length;i++)e[i].parentNode.removeChild(e[i]),this._stylesInserted||(e[i].setAttribute("id",this.nodeName.toLowerCase()+"-styles"),document.head.appendChild(e[i]));return this.appendChild(t),t}querySelector(t){return this.shadowRoot?this.shadowRoot.querySelector(t):super.querySelector(t)}querySelectorAll(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):super.querySelectorAll(t)}})},function(t,e,i){const{BaseStore:n}=i(11);t.exports=class extends n{constructor(){super(),this.data={location:{}},this.events={APP_STATE_UPDATE:"app-state-update"}}set(t){this.stateChanged(this.data,t)&&(this.data=Object.assign({},this.data,t),this.emit(this.events.APP_STATE_UPDATE,this.data))}get(){return this.data}}},function(t,e,i){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},function(t,e,i){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),l=1;l<arguments.length;l++){for(var h in i=Object(arguments[l]))r.call(i,h)&&(a[h]=i[h]);if(n){s=n(i);for(var c=0;c<s.length;c++)o.call(i,s[c])&&(a[s[c]]=i[s[c]])}}return a}},function(t,e,i){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var i=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(i),o(n))}function s(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(n),i=1;i<e.length;i++)e=(t=o(e,i).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},i=r.exec(t);i;){try{e[i[0]]=decodeURIComponent(i[0])}catch(t){var n=s(i[0]);n!==i[0]&&(e[i[0]]=n)}i=r.exec(t)}e["%C2"]="�";for(var o=Object.keys(e),a=0;a<o.length;a++){var l=o[a];t=t.replace(new RegExp(l,"g"),e[l])}return t}(t)}}},function(t,e,i){const{AppStateStore:n}=i(35);t.exports=new class extends n{constructor(){super(),this.data.selectedRecord=null,this.data.selectedRecordMedia=null,this.events.SELECTED_RECORD_UPDATE="selected-record-update",this.events.SELECTED_RECORD_MEDIA_UPDATE="selected-record-media-update"}}},function(t,e,i){const{BaseModel:n}=i(11),r=i(68),o=i(42);t.exports=new class extends n{constructor(){super(),this.store=o,this.service=r,this.register("SpectraModel")}async count(t={},e="main"){try{await this.service.count(t,e)}catch(t){console.error(t)}return this.store.data.count[e]}async search(t={},e,i="main"){try{await this.service.search(t,e,i)}catch(t){console.error(t)}return this.store.data.search[i]}async stats(t,e){try{await this.service.stats(t,e)}catch(t){console.error(t)}return this.store.data.stats}}},function(t,e,i){const{BaseService:n}=i(11),r=i(42),o=i(37);t.exports=new class extends n{constructor(){super(),this.store=r}search(t,e,i){let n=this.store.data.searchId.spectra;this.store.data.searchId.spectra++;let r=`/api/spectra/search${e?"/"+e:""}?${o.getRestParamsStr(t)}`,s={searchId:n,query:t,path:r,name:i,packageId:e};return this.request({url:r,json:!0,onLoading:t=>this.store.setSearchLoading(t,s),onLoad:t=>{n===this.store.data.searchId.spectra-1&&this.store.setSearchLoaded(t.body,s)},onError:t=>{n===this.store.data.searchId.spectra-1&&this.store.setSearchError(t,s)}})}count(t,e,i){let n=this.store.data.searchId.spectraCount;this.store.data.searchId.spectraCount++;let r=`/api/spectra/count${e?"/"+e:""}?${o.getRestParamsStr(t)}`,s={searchId:n,query:t,path:r,name:i,packageId:e};return this.request({url:r,json:!0,onLoading:t=>this.store.setCountLoading(t,s),onLoad:t=>{n===this.store.data.searchId.spectraCount-1&&this.store.setCountLoaded(t.body,s)},onError:t=>{n===this.store.data.searchId.spectraCount-1&&this.store.setCountError(t,s)}})}stats(t,e){let i="";return t&&(i="?filter="+encodeURIComponent(JSON.stringify(t))),this.request({url:`/api/spectra/stats/${e}${i}`,json:!0,onLoading:t=>this.store.setStatsLoading(t),onLoad:t=>this.store.setStatsLoaded(t.body),onError:t=>this.store.setStatsError(t)})}}},function(t,e,i){const{BaseModel:n}=i(11),r=i(70),o=i(43),s=i(37),a=i(27);t.exports=new class extends n{constructor(){super(),this.store=o,this.service=r,this.utils=s,this.EventBus.on("app-state-update",t=>{"search"===t.page?this.search(s.getQueryFromUrl(window.location.pathname)):"package"===t.page&&this.get(t.location.path[1])}),this.register("PackageModel")}async get(t){let e=this.store.data.package[t];return e&&e.request?await e.request:await this.service.get(t),this.store.data.package[t]}async stats(){let t=this.store.data.stats;return t&&t.request?await t.request:await this.service.stats(),this.store.data.stats}async search(t={},e="main"){try{await this.service.search(t,e)}catch(t){console.error(t)}return this.store.data.search[e]}getCurrentSearchQuery(t="main"){let e=this.store.data.search[t];return e&&e.metadata&&e.metadata.query?a(e.metadata.query):s.getDefaultSearch()}async count(t={},e="main"){try{await this.service.count(t,e)}catch(t){}return this.store.data.count[e]}async suggest(t,e="main"){try{await this.service.suggest(t,e)}catch(t){}return this.store.data.suggest[e]}}},function(t,e,i){const{BaseService:n}=i(11),r=i(43),o=i(37);t.exports=new class extends n{constructor(){super(),this.store=r}get(t){return this.request({url:`/api/package/${t}`,json:!0,checkCached:()=>this.store.data.package[t],onLoading:e=>this.store.setPackageLoading(t,e),onLoad:e=>this.store.setPackageLoaded(t,e.body),onError:e=>this.store.setPackageError(t,e)})}stats(){return this.request({url:"/api/package/stats",json:!0,checkCached:()=>this.store.data.stats,onLoading:t=>this.store.setStatsLoading(t),onLoad:t=>this.store.setStatsLoaded(t.body),onError:t=>this.store.setStatsError(t)})}search(t,e){let i=this.store.data.searchId.package;this.store.data.searchId.package++;let n=`/api/package/search?${o.getRestParamsStr(t)}`,r={searchId:i,query:t,path:n,name:e};return this.request({url:n,json:!0,onLoading:t=>this.store.setSearchLoading(t,r),onLoad:e=>{if(i===this.store.data.searchId.package-1){e=e.body;for(let i in e.filters)e.filters[i]=e.filters[i].filter(e=>!t.filters.find(t=>t[i]&&t[i]===e.filter));this.store.setSearchLoaded(e,r)}},onError:t=>{i===this.store.data.searchId.package-1&&this.store.setSearchError(t,r)}})}count(t,e){let i=this.store.data.searchId.packageCount;this.store.data.searchId.packageCount++;let n=`/api/package/count?${o.getRestParamsStr(t)}`,r={searchId:i,query:t,path:n,name:e};return this.request({url:n,json:!0,onLoading:t=>this.store.setCountLoading(t,r),onLoad:t=>{i===this.store.data.searchId.packageCount-1&&this.store.setCountLoaded(t.body,r)},onError:t=>{i===this.store.data.searchId.packageCount-1&&this.store.setCountError(t,r)}})}suggest(t,e){let i=this.store.data.searchId.suggest;this.store.data.searchId.suggest++;let n=`/api/suggest/${t}`,r={searchId:i,text:t,path:n,name:e};return this.request({url:n,json:!0,onLoading:t=>this.store.setSuggestLoading(t,r),onLoad:t=>{i===this.store.data.searchId.suggest-1&&this.store.setSuggestLoaded(t.body,r)},onError:t=>{i===this.store.data.searchId.suggest-1&&this.store.setSuggestError(t,r)}})}}},function(t,e,i){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=i(73),r=i(74),o=i(75);function s(){return l.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return l.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=l.prototype:(null===t&&(t=new l(e)),t.length=e),t}function l(t,e,i){if(!(l.TYPED_ARRAY_SUPPORT||this instanceof l))return new l(t,e,i);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return d(this,t)}return h(this,t,e,i)}function h(t,e,i,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,i,n){if(e.byteLength,i<0||e.byteLength<i)throw new RangeError("'offset' is out of bounds");if(e.byteLength<i+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===i&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,i):new Uint8Array(e,i,n);l.TYPED_ARRAY_SUPPORT?(t=e).__proto__=l.prototype:t=p(t,e);return t}(t,e,i,n):"string"==typeof e?function(t,e,i){"string"==typeof i&&""!==i||(i="utf8");if(!l.isEncoding(i))throw new TypeError('"encoding" must be a valid string encoding');var n=0|f(e,i),r=(t=a(t,n)).write(e,i);r!==n&&(t=t.slice(0,r));return t}(t,e,i):function(t,e){if(l.isBuffer(e)){var i=0|u(e.length);return 0===(t=a(t,i)).length?t:(e.copy(t,0,0,i),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):p(t,e);if("Buffer"===e.type&&o(e.data))return p(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function d(t,e){if(c(e),t=a(t,e<0?0:0|u(e)),!l.TYPED_ARRAY_SUPPORT)for(var i=0;i<e;++i)t[i]=0;return t}function p(t,e){var i=e.length<0?0:0|u(e.length);t=a(t,i);for(var n=0;n<i;n+=1)t[n]=255&e[n];return t}function u(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function f(t,e){if(l.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var i=t.length;if(0===i)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":case void 0:return j(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return B(t).length;default:if(n)return j(t).length;e=(""+e).toLowerCase(),n=!0}}function m(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function g(t,e,i,n,r){if(0===t.length)return-1;if("string"==typeof i?(n=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,isNaN(i)&&(i=r?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(r)return-1;i=t.length-1}else if(i<0){if(!r)return-1;i=0}if("string"==typeof e&&(e=l.from(e,n)),l.isBuffer(e))return 0===e.length?-1:_(t,e,i,n,r);if("number"==typeof e)return e&=255,l.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,i):Uint8Array.prototype.lastIndexOf.call(t,e,i):_(t,[e],i,n,r);throw new TypeError("val must be string, number or Buffer")}function _(t,e,i,n,r){var o,s=1,a=t.length,l=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,l/=2,i/=2}function h(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(r){var c=-1;for(o=i;o<a;o++)if(h(t,o)===h(e,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===l)return c*s}else-1!==c&&(o-=o-c),c=-1}else for(i+l>a&&(i=a-l),o=i;o>=0;o--){for(var d=!0,p=0;p<l;p++)if(h(t,o+p)!==h(e,p)){d=!1;break}if(d)return o}return-1}function v(t,e,i,n){i=Number(i)||0;var r=t.length-i;n?(n=Number(n))>r&&(n=r):n=r;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[i+s]=a}return s}function y(t,e,i,n){return F(j(e,t.length-i),t,i,n)}function b(t,e,i,n){return F(function(t){for(var e=[],i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}(e),t,i,n)}function w(t,e,i,n){return b(t,e,i,n)}function x(t,e,i,n){return F(B(e),t,i,n)}function S(t,e,i,n){return F(function(t,e){for(var i,n,r,o=[],s=0;s<t.length&&!((e-=2)<0);++s)i=t.charCodeAt(s),n=i>>8,r=i%256,o.push(r),o.push(n);return o}(e,t.length-i),t,i,n)}function z(t,e,i){return 0===e&&i===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,i))}function C(t,e,i){i=Math.min(t.length,i);for(var n=[],r=e;r<i;){var o,s,a,l,h=t[r],c=null,d=h>239?4:h>223?3:h>191?2:1;if(r+d<=i)switch(d){case 1:h<128&&(c=h);break;case 2:128==(192&(o=t[r+1]))&&(l=(31&h)<<6|63&o)>127&&(c=l);break;case 3:o=t[r+1],s=t[r+2],128==(192&o)&&128==(192&s)&&(l=(15&h)<<12|(63&o)<<6|63&s)>2047&&(l<55296||l>57343)&&(c=l);break;case 4:o=t[r+1],s=t[r+2],a=t[r+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(l=(15&h)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(c=l)}null===c?(c=65533,d=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),r+=d}return function(t){var e=t.length;if(e<=P)return String.fromCharCode.apply(String,t);var i="",n=0;for(;n<e;)i+=String.fromCharCode.apply(String,t.slice(n,n+=P));return i}(n)}e.Buffer=l,e.SlowBuffer=function(t){+t!=t&&(t=0);return l.alloc(+t)},e.INSPECT_MAX_BYTES=50,l.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),l.poolSize=8192,l._augment=function(t){return t.__proto__=l.prototype,t},l.from=function(t,e,i){return h(null,t,e,i)},l.TYPED_ARRAY_SUPPORT&&(l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0})),l.alloc=function(t,e,i){return function(t,e,i,n){return c(e),e<=0?a(t,e):void 0!==i?"string"==typeof n?a(t,e).fill(i,n):a(t,e).fill(i):a(t,e)}(null,t,e,i)},l.allocUnsafe=function(t){return d(null,t)},l.allocUnsafeSlow=function(t){return d(null,t)},l.isBuffer=function(t){return!(null==t||!t._isBuffer)},l.compare=function(t,e){if(!l.isBuffer(t)||!l.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var i=t.length,n=e.length,r=0,o=Math.min(i,n);r<o;++r)if(t[r]!==e[r]){i=t[r],n=e[r];break}return i<n?-1:n<i?1:0},l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return l.alloc(0);var i;if(void 0===e)for(e=0,i=0;i<t.length;++i)e+=t[i].length;var n=l.allocUnsafe(e),r=0;for(i=0;i<t.length;++i){var s=t[i];if(!l.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,r),r+=s.length}return n},l.byteLength=f,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},l.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},l.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},l.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?C(this,0,t):function(t,e,i){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===i||i>this.length)&&(i=this.length),i<=0)return"";if((i>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return M(this,e,i);case"utf8":case"utf-8":return C(this,e,i);case"ascii":return k(this,e,i);case"latin1":case"binary":return L(this,e,i);case"base64":return z(this,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,i);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},l.prototype.equals=function(t){if(!l.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===l.compare(this,t)},l.prototype.inspect=function(){var t="",i=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,i).match(/.{2}/g).join(" "),this.length>i&&(t+=" ... ")),"<Buffer "+t+">"},l.prototype.compare=function(t,e,i,n,r){if(!l.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===n&&(n=0),void 0===r&&(r=this.length),e<0||i>t.length||n<0||r>this.length)throw new RangeError("out of range index");if(n>=r&&e>=i)return 0;if(n>=r)return-1;if(e>=i)return 1;if(this===t)return 0;for(var o=(r>>>=0)-(n>>>=0),s=(i>>>=0)-(e>>>=0),a=Math.min(o,s),h=this.slice(n,r),c=t.slice(e,i),d=0;d<a;++d)if(h[d]!==c[d]){o=h[d],s=c[d];break}return o<s?-1:s<o?1:0},l.prototype.includes=function(t,e,i){return-1!==this.indexOf(t,e,i)},l.prototype.indexOf=function(t,e,i){return g(this,t,e,i,!0)},l.prototype.lastIndexOf=function(t,e,i){return g(this,t,e,i,!1)},l.prototype.write=function(t,e,i,n){if(void 0===e)n="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)n=e,i=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(i)?(i|=0,void 0===n&&(n="utf8")):(n=i,i=void 0)}var r=this.length-e;if((void 0===i||i>r)&&(i=r),t.length>0&&(i<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return v(this,t,e,i);case"utf8":case"utf-8":return y(this,t,e,i);case"ascii":return b(this,t,e,i);case"latin1":case"binary":return w(this,t,e,i);case"base64":return x(this,t,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,e,i);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function k(t,e,i){var n="";i=Math.min(t.length,i);for(var r=e;r<i;++r)n+=String.fromCharCode(127&t[r]);return n}function L(t,e,i){var n="";i=Math.min(t.length,i);for(var r=e;r<i;++r)n+=String.fromCharCode(t[r]);return n}function M(t,e,i){var n=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>n)&&(i=n);for(var r="",o=e;o<i;++o)r+=D(t[o]);return r}function E(t,e,i){for(var n=t.slice(e,i),r="",o=0;o<n.length;o+=2)r+=String.fromCharCode(n[o]+256*n[o+1]);return r}function A(t,e,i){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>i)throw new RangeError("Trying to access beyond buffer length")}function T(t,e,i,n,r,o){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<o)throw new RangeError('"value" argument is out of bounds');if(i+n>t.length)throw new RangeError("Index out of range")}function O(t,e,i,n){e<0&&(e=65535+e+1);for(var r=0,o=Math.min(t.length-i,2);r<o;++r)t[i+r]=(e&255<<8*(n?r:1-r))>>>8*(n?r:1-r)}function I(t,e,i,n){e<0&&(e=4294967295+e+1);for(var r=0,o=Math.min(t.length-i,4);r<o;++r)t[i+r]=e>>>8*(n?r:3-r)&255}function R(t,e,i,n,r,o){if(i+n>t.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function H(t,e,i,n,o){return o||R(t,0,i,4),r.write(t,e,i,n,23,4),i+4}function N(t,e,i,n,o){return o||R(t,0,i,8),r.write(t,e,i,n,52,8),i+8}l.prototype.slice=function(t,e){var i,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),l.TYPED_ARRAY_SUPPORT)(i=this.subarray(t,e)).__proto__=l.prototype;else{var r=e-t;i=new l(r,void 0);for(var o=0;o<r;++o)i[o]=this[o+t]}return i},l.prototype.readUIntLE=function(t,e,i){t|=0,e|=0,i||A(t,e,this.length);for(var n=this[t],r=1,o=0;++o<e&&(r*=256);)n+=this[t+o]*r;return n},l.prototype.readUIntBE=function(t,e,i){t|=0,e|=0,i||A(t,e,this.length);for(var n=this[t+--e],r=1;e>0&&(r*=256);)n+=this[t+--e]*r;return n},l.prototype.readUInt8=function(t,e){return e||A(t,1,this.length),this[t]},l.prototype.readUInt16LE=function(t,e){return e||A(t,2,this.length),this[t]|this[t+1]<<8},l.prototype.readUInt16BE=function(t,e){return e||A(t,2,this.length),this[t]<<8|this[t+1]},l.prototype.readUInt32LE=function(t,e){return e||A(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},l.prototype.readUInt32BE=function(t,e){return e||A(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},l.prototype.readIntLE=function(t,e,i){t|=0,e|=0,i||A(t,e,this.length);for(var n=this[t],r=1,o=0;++o<e&&(r*=256);)n+=this[t+o]*r;return n>=(r*=128)&&(n-=Math.pow(2,8*e)),n},l.prototype.readIntBE=function(t,e,i){t|=0,e|=0,i||A(t,e,this.length);for(var n=e,r=1,o=this[t+--n];n>0&&(r*=256);)o+=this[t+--n]*r;return o>=(r*=128)&&(o-=Math.pow(2,8*e)),o},l.prototype.readInt8=function(t,e){return e||A(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},l.prototype.readInt16LE=function(t,e){e||A(t,2,this.length);var i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},l.prototype.readInt16BE=function(t,e){e||A(t,2,this.length);var i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},l.prototype.readInt32LE=function(t,e){return e||A(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},l.prototype.readInt32BE=function(t,e){return e||A(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},l.prototype.readFloatLE=function(t,e){return e||A(t,4,this.length),r.read(this,t,!0,23,4)},l.prototype.readFloatBE=function(t,e){return e||A(t,4,this.length),r.read(this,t,!1,23,4)},l.prototype.readDoubleLE=function(t,e){return e||A(t,8,this.length),r.read(this,t,!0,52,8)},l.prototype.readDoubleBE=function(t,e){return e||A(t,8,this.length),r.read(this,t,!1,52,8)},l.prototype.writeUIntLE=function(t,e,i,n){(t=+t,e|=0,i|=0,n)||T(this,t,e,i,Math.pow(2,8*i)-1,0);var r=1,o=0;for(this[e]=255&t;++o<i&&(r*=256);)this[e+o]=t/r&255;return e+i},l.prototype.writeUIntBE=function(t,e,i,n){(t=+t,e|=0,i|=0,n)||T(this,t,e,i,Math.pow(2,8*i)-1,0);var r=i-1,o=1;for(this[e+r]=255&t;--r>=0&&(o*=256);)this[e+r]=t/o&255;return e+i},l.prototype.writeUInt8=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,1,255,0),l.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},l.prototype.writeUInt16LE=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},l.prototype.writeUInt16BE=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):O(this,t,e,!1),e+2},l.prototype.writeUInt32LE=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):I(this,t,e,!0),e+4},l.prototype.writeUInt32BE=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):I(this,t,e,!1),e+4},l.prototype.writeIntLE=function(t,e,i,n){if(t=+t,e|=0,!n){var r=Math.pow(2,8*i-1);T(this,t,e,i,r-1,-r)}var o=0,s=1,a=0;for(this[e]=255&t;++o<i&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+i},l.prototype.writeIntBE=function(t,e,i,n){if(t=+t,e|=0,!n){var r=Math.pow(2,8*i-1);T(this,t,e,i,r-1,-r)}var o=i-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+i},l.prototype.writeInt8=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,1,127,-128),l.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},l.prototype.writeInt16LE=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},l.prototype.writeInt16BE=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):O(this,t,e,!1),e+2},l.prototype.writeInt32LE=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,4,2147483647,-2147483648),l.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):I(this,t,e,!0),e+4},l.prototype.writeInt32BE=function(t,e,i){return t=+t,e|=0,i||T(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),l.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):I(this,t,e,!1),e+4},l.prototype.writeFloatLE=function(t,e,i){return H(this,t,e,!0,i)},l.prototype.writeFloatBE=function(t,e,i){return H(this,t,e,!1,i)},l.prototype.writeDoubleLE=function(t,e,i){return N(this,t,e,!0,i)},l.prototype.writeDoubleBE=function(t,e,i){return N(this,t,e,!1,i)},l.prototype.copy=function(t,e,i,n){if(i||(i=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<i&&(n=i),n===i)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-i&&(n=t.length-e+i);var r,o=n-i;if(this===t&&i<e&&e<n)for(r=o-1;r>=0;--r)t[r+e]=this[r+i];else if(o<1e3||!l.TYPED_ARRAY_SUPPORT)for(r=0;r<o;++r)t[r+e]=this[r+i];else Uint8Array.prototype.set.call(t,this.subarray(i,i+o),e);return o},l.prototype.fill=function(t,e,i,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,i=this.length):"string"==typeof i&&(n=i,i=this.length),1===t.length){var r=t.charCodeAt(0);r<256&&(t=r)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<i)throw new RangeError("Out of range index");if(i<=e)return this;var o;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(o=e;o<i;++o)this[o]=t;else{var s=l.isBuffer(t)?t:j(new l(t,n).toString()),a=s.length;for(o=0;o<i-e;++o)this[o+e]=s[o%a]}return this};var V=/[^+\/0-9A-Za-z-_]/g;function D(t){return t<16?"0"+t.toString(16):t.toString(16)}function j(t,e){var i;e=e||1/0;for(var n=t.length,r=null,o=[],s=0;s<n;++s){if((i=t.charCodeAt(s))>55295&&i<57344){if(!r){if(i>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}r=i;continue}if(i<56320){(e-=3)>-1&&o.push(239,191,189),r=i;continue}i=65536+(r-55296<<10|i-56320)}else r&&(e-=3)>-1&&o.push(239,191,189);if(r=null,i<128){if((e-=1)<0)break;o.push(i)}else if(i<2048){if((e-=2)<0)break;o.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;o.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(i<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return o}function B(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(V,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,e,i,n){for(var r=0;r<n&&!(r+i>=e.length||r>=t.length);++r)e[r+i]=t[r];return r}}).call(this,i(72))},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";e.byteLength=function(t){var e=h(t),i=e[0],n=e[1];return 3*(i+n)/4-n},e.toByteArray=function(t){for(var e,i=h(t),n=i[0],s=i[1],a=new o(function(t,e,i){return 3*(e+i)/4-i}(0,n,s)),l=0,c=s>0?n-4:n,d=0;d<c;d+=4)e=r[t.charCodeAt(d)]<<18|r[t.charCodeAt(d+1)]<<12|r[t.charCodeAt(d+2)]<<6|r[t.charCodeAt(d+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=255&e;2===s&&(e=r[t.charCodeAt(d)]<<2|r[t.charCodeAt(d+1)]>>4,a[l++]=255&e);1===s&&(e=r[t.charCodeAt(d)]<<10|r[t.charCodeAt(d+1)]<<4|r[t.charCodeAt(d+2)]>>2,a[l++]=e>>8&255,a[l++]=255&e);return a},e.fromByteArray=function(t){for(var e,i=t.length,r=i%3,o=[],s=0,a=i-r;s<a;s+=16383)o.push(c(t,s,s+16383>a?a:s+16383));1===r?(e=t[i-1],o.push(n[e>>2]+n[e<<4&63]+"==")):2===r&&(e=(t[i-2]<<8)+t[i-1],o.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return o.join("")};for(var n=[],r=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,l=s.length;a<l;++a)n[a]=s[a],r[s.charCodeAt(a)]=a;function h(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=t.indexOf("=");return-1===i&&(i=e),[i,i===e?0:4-i%4]}function c(t,e,i){for(var r,o,s=[],a=e;a<i;a+=3)r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(n[(o=r)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return s.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,i,n,r){var o,s,a=8*r-n-1,l=(1<<a)-1,h=l>>1,c=-7,d=i?r-1:0,p=i?-1:1,u=t[e+d];for(d+=p,o=u&(1<<-c)-1,u>>=-c,c+=a;c>0;o=256*o+t[e+d],d+=p,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+t[e+d],d+=p,c-=8);if(0===o)o=1-h;else{if(o===l)return s?NaN:1/0*(u?-1:1);s+=Math.pow(2,n),o-=h}return(u?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,i,n,r,o){var s,a,l,h=8*o-r-1,c=(1<<h)-1,d=c>>1,p=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,u=n?0:o-1,f=n?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+d>=1?p/l:p*Math.pow(2,1-d))*l>=2&&(s++,l/=2),s+d>=c?(a=0,s=c):s+d>=1?(a=(e*l-1)*Math.pow(2,r),s+=d):(a=e*Math.pow(2,d-1)*Math.pow(2,r),s=0));r>=8;t[i+u]=255&a,u+=f,a/=256,r-=8);for(s=s<<r|a,h+=r;h>0;t[i+u]=255&s,u+=f,s/=256,h-=8);t[i+u-f]|=128*m}},function(t,e){var i={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==i.call(t)}},function(t,e,i){const{BaseModel:n}=i(11),r=i(77),o=i(44);t.exports=new class extends n{constructor(){super(),this.store=o,this.service=r,this.register("OrganizationModel")}async get(t){let e=this.store.data[t];return e&&"loading"===e.state?await e.request:await this.service.get(t),this.store.data[t]}}},function(t,e,i){const{BaseService:n}=i(11),r=i(44);t.exports=new class extends n{constructor(){super(),this.store=r}get(t){return this.request({url:`/api/organization/${t}`,json:!0,checkCached:()=>this.store.data[t],onLoading:e=>this.store.setOrganizationLoading(t,e),onLoad:e=>this.store.setOrganizationLoaded(t,e.body),onError:e=>this.store.setOrganizationError(t,e)})}}},function(t,e,i){const{BaseModel:n}=i(11),r=i(79),o=i(45);t.exports=new class extends n{constructor(){super(),this.store=o,this.service=r,this.register("GoogleModel")}async loadCharts(){let t=this.store.data.charts;return"loading"===t.state?await t.request:"init"===t.state&&await this.service.loadCharts(),this.store.data.charts}}},function(t,e,i){const{BaseService:n}=i(11),r=i(45);t.exports=new class extends n{constructor(){super(),this.store=r}loadCharts(){if("undefined"==typeof window)throw new Error("You are not in a browser!");if(!window.google||!window.google.charts)throw new Error("The base Google Charts script has not been loaded");let t=new Promise((t,e)=>{google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(()=>{this.store.chartsLoaded(),t()})});return this.store.chartsLoading(t),t}}},function(t,e,i){"use strict";const n=i(46);function r(t=""){let e=n.find(e=>e.label===t);return e?e.url:t}t.exports=function(t,e="https://ecosis.org"){var i={title:t.ecosis.package_title,description:t.ecosis.description,ldjson:null};console.log(t.ecosis.license);var n={"@context":"http://schema.org","@type":"Dataset",name:t.ecosis.package_title,datePublished:t.ecosis.created,description:t.ecosis.description,url:e+"/api/package/"+t.ecosis.package_name,license:r(t.ecosis.license),genre:"spectroscopy",provider:{"@type":"Organization",email:"info@ecosis.org",url:e,name:"EcoSIS",description:"Ecosystem Spectral Information System"},includedInDataCatalog:{"@type":"DataCatalog",name:"EcoSIS"},publisher:{"@type":"Organization",name:t.ecosis.organization},distribution:{"@type":"DataDownload",name:t.ecosis.package_name+".csv",contentUrl:e+"/api/package/"+t.ecosis.package_name+"/export/&metadata=true",fileFormat:"text/csv",encodingFormat:"CSV"}};return i.ldjson=n,t.Website&&(n.publisher.url=t.Website[0]),t.Author&&(n.author={"@type":"Person",name:t.Author[0]},t["Author Email"]&&(n.author.email=t["Author Email"][0])),t.Keywords&&(i.keywords=t.Keywords.join(", "),n.keywords=t.Keywords),t.ecosis.organization_info&&(n.publisher.image=t.ecosis.organization_info.image_display_url,n.publisher.description=t.ecosis.organization_info.description),i}},function(t,e,i){var n=i(82);(t.exports=i(83)(!1)).push([t.i,"/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url("+n(i(84))+");\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url("+n(i(85))+");\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url("+n(i(86))+');\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: "";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n',""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(o).concat([r]).join("\n")}var s;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,r=t=>"function"==typeof t&&n.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},a={},l={},h=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${h}--\x3e`,d=new RegExp(`${h}|${c}`),p="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let o=0,s=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=r.nextNode();if(null!==t){if(s++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)f(e[t].name,p)&&n++;for(;n-- >0;){const e=l[a],i=_.exec(e)[2],n=i.toLowerCase()+p,r=t.getAttribute(n);t.removeAttribute(n);const o=r.split(d);this.parts.push({type:"attribute",index:s,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(h)>=0){const n=t.parentNode,r=e.split(d),o=r.length-1;for(let e=0;e<o;e++){let i,o=r[e];if(""===o)i=g();else{const t=_.exec(o);null!==t&&f(t[2],p)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),i=document.createTextNode(o)}n.insertBefore(i,t),this.parts.push({type:"node",index:++s})}""===r[o]?(n.insertBefore(g(),t),i.push(t)):t.data=r[o],a+=o}}else if(8===t.nodeType)if(t.data===h){const e=t.parentNode;null!==t.previousSibling&&s!==o||(s++,e.insertBefore(g(),t)),o=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(h,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const f=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},m=t=>-1!==t.index,g=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,s=0,a=0,l=n.nextNode();for(;s<i.length;)if(r=i[s],m(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const o=_.exec(t);e+=null===o?t+(i?h:c):t.substr(0,o.index)+o[1]+o[2]+p+o[3]+h}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new z(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(b(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||b(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this.__commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const r of t)void 0===(i=e[n])&&(i=new C(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(r),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class k extends S{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends z{}let E=!1;try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=T(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new class{handleAttributeExpressions(t,e,i,n){const r=e[0];return"."===r?new k(t,e.slice(1),i).parts:"@"===r?[new A(t,e.slice(1),n.eventContext)]:"?"===r?[new P(t,e.slice(1),i)]:new S(t,e,i).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function I(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(h);return void 0===(i=e.keyString.get(n))&&(i=new u(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const R=new Map,H=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const N=(t,...e)=>new y(t,e,"html",O),V=133;function D(t,e){const{element:{content:i},parts:n}=t,r=document.createTreeWalker(i,V,null,!1);let o=B(n),s=n[o],a=-1,l=0;const h=[];let c=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(h.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,s=n[o=B(n,o)]}h.forEach(t=>t.parentNode.removeChild(t))}const j=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,V,null,!1);for(;i.nextNode();)e++;return e},B=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(m(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=(t,e)=>`${t}--${e}`;let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const U=t=>e=>{const i=F(e.type,t);let n=R.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(h);if(void 0===(r=n.keyString.get(o))){const i=e.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(i,t),r=new u(e,i),n.keyString.set(o,r)}return n.stringsArray.set(e.strings,r),r},q=["html","svg"],Z=new Set,W=(t,e,i)=>{Z.add(i);const n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(e.element,i);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{q.forEach(e=>{const i=R.get(F(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),D(t,i)})})})(i);const s=e.element.content;!function(t,e,i=null){const{element:{content:n},parts:r}=t;if(null==i)return void n.appendChild(e);const o=document.createTreeWalker(n,V,null,!1);let s=B(r),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=j(e),i.parentNode.insertBefore(e,i));-1!==s&&r[s].index===l;){if(a>0){for(;-1!==s;)r[s].index+=a,s=B(r,s);return}s=B(r,s)}}(e,o,s.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,i);const a=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)t.insertBefore(a.cloneNode(!0),t.firstChild);else{s.insertBefore(o,s.firstChild);const t=new Set;t.add(o),D(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(t,e)=>t;const K={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},G=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:G},X=Promise.resolve(!0),J=1,Q=4,tt=8,et=16,it=32;class nt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=X,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const n=this[t];this[i]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=G){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||K,r="function"==typeof n?n:n.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||K.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|it,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Y){const n=this.constructor,r=n._attributeNameForProperty(t,i);if(void 0!==r){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|tt,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~tt}}_attributeToProperty(t,e){if(this._updateState&tt)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i._classProperties.get(n)||Y;this._updateState=this._updateState|et,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~et}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,r=n._classProperties.get(t)||Y;n._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&et||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Q;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{t=i,e=n});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&it}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&J}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}nt.finalized=!0;const rt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const ot=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let n=0,r=e.length;n<r;n++){const r=e[n];Array.isArray(r)?t(r,i):i.push(r)}return i}(t);class st extends nt{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ot(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?rt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}st.finalized=!0,st.render=(t,e,i)=>{const n=i.scopeName,r=H.has(e),o=$&&11===e.nodeType&&!!e.host&&t instanceof y,a=o&&!Z.has(n),l=a?document.createDocumentFragment():e;if(((t,e,i)=>{let n=H.get(e);void 0===n&&(s(e,e.firstChild),H.set(e,n=new C(Object.assign({templateFactory:I},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:U(n)},i)),a){const t=H.get(l);H.delete(l),t.value instanceof v&&W(l,t.value.template,n),s(e,e.firstChild),e.appendChild(l),H.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};var at=t=>(t=t.replace(/<template\w*>/,"").replace(/<dom-module.*>/,"").replace(/<\/template\s*>.*/,"").replace(/<\/dom-module\s*>/,""),N([t])),lt=(i(38),i(19)),ht=i.n(lt);let ct=document.createElement("div");ct.style.display="none",ct.innerHTML=ht.a,document.head.appendChild(ct);var dt=i(3),pt=i(1);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ut=pt.a`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;ut.setAttribute("style","display: none;"),document.head.appendChild(ut.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ft=pt.a`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;ft.setAttribute("style","display: none;"),document.head.appendChild(ft.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const mt=pt.a`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(mt.setAttribute("style","display: none;"),document.head.appendChild(mt.content),!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const gt=pt.a`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;gt.setAttribute("style","display: none;"),document.head.appendChild(gt.content);var _t=i(29),vt=i.n(_t);let yt=document.createElement("div");yt.style.display="none",yt.innerHTML=vt.a,yt.id="ecosml-style-properties",document.head.appendChild(yt);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const bt=pt.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;bt.setAttribute("style","display: none;"),document.head.appendChild(bt.content);var wt=document.createElement("style");wt.textContent="[hidden] { display: none !important; }",document.head.appendChild(wt);var xt=i(5);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class St{constructor(t){St[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return St.types[t]&&St.types[t][e]}set value(t){var e=this.type,i=this.key;e&&i&&(e=St.types[e]=St.types[e]||{},null==t?delete e[i]:e[i]=t)}get list(){if(this.type){var t=St.types[this.type];return t?Object.keys(t).map(function(t){return zt[this.type][t]},this):[]}}byKey(t){return this.key=t,this.value}}St[" "]=function(){},St.types={};var zt=St.types;Object(xt.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new St({type:t,key:e});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new St({type:this.type,key:t}).value}});var Ct=i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(xt.a)({_template:pt.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:dt.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(Ct.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(Ct.a)(this.root).appendChild(this._img))}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(xt.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new St({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(t){return this.name+":"+t},this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var n=Object(Ct.a)(t.root||t);return n.insertBefore(i,n.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(Object(Ct.a)(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var t=Object.create(null);return Object(Ct.a)(this).querySelectorAll("[id]").forEach(function(e){t[e.id]=e}),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var n=t.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=n.getAttribute("viewBox")||"0 0 "+e+" "+e,s="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",o),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=s,r.appendChild(n).removeAttribute("id"),r}return null}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Pt=pt.a`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Pt.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const kt=pt.a`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;kt.setAttribute("style","display: none;"),document.head.appendChild(kt.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Lt={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Mt={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Et={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},At={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Tt=/[a-z0-9*]/,Ot=/U\+/,It=/^arrow/,Rt=/^space(bar)?/,Ht=/^escape$/;function Nt(t,e){var i="";if(t){var n=t.toLowerCase();" "===n||Rt.test(n)?i="space":Ht.test(n)?i="esc":1==n.length?e&&!Tt.test(n)||(i=n):i=It.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function Vt(t,e){return t.key?Nt(t.key,e):t.detail&&t.detail.key?Nt(t.detail.key,e):(i=t.keyIdentifier,n="",i&&(i in Mt?n=Mt[i]:Ot.test(i)?(i=parseInt(i.replace("U+","0x"),16),n=String.fromCharCode(i).toLowerCase()):n=i.toLowerCase()),n||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):Et[t]),e}(t.keyCode)||"");var i,n}function Dt(t,e){return Vt(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function jt(t){return t.trim().split(" ").map(function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce(function(t,e){var i=e.split(":"),n=i[0],r=i[1];return n in At?(t[At[n]]=!0,t.hasModifiers=!0):(t.key=n,t.event=r||"keydown"),t},{combo:t.split(":").shift()})}(t)})}const Bt={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=jt(e),n=0;n<i.length;++n)if(Dt(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map(function(t){return t.keyBindings});return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach(function(t){for(var e in t)this._addKeyBinding(e,t[e])},this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort(function(t,e){var i=t[0].hasModifiers;return i===e[0].hasModifiers?0:i?-1:1})},_addKeyBinding:function(t,e){jt(t).forEach(function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)},this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],r=t[i][1];if(Dt(n,e)&&(this._triggerKeyHandler(n,r,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var r=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,r),r.defaultPrevented&&i.preventDefault()}},Ft={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,i=Object(Ct.a)(e).localTarget;this.isLightDescendant(i)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,i=Object(Ct.a)(e).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},$t=[Bt,Ft];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Ut={distance:function(t,e,i,n){var r=t-i,o=e-n;return Math.sqrt(r*r+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function qt(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Zt(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(Ct.a)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}qt.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var i=Ut.distance(t,e,0,0),n=Ut.distance(t,e,this.width,0),r=Ut.distance(t,e,0,this.height),o=Ut.distance(t,e,this.width,this.height);return Math.max(i,n,r,o)}},Zt.MAX_RADIUS=300,Zt.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=Ut.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?Ut.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(t+e),Zt.MAX_RADIUS)+5,n=1.1-i/Zt.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/n,o=i*(1-Math.pow(80,-r));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=.3*this.mouseUpElapsedSeconds,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Zt.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Zt.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new qt(this.element)},draw:function(){var t,e,i;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Ut.now(),this.center?(this.xStart=e,this.yStart=i,this.slideDistance=Ut.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=i,this.slideDistance=Ut.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=Ut.now())},remove:function(){Object(Ct.a)(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Bt],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=Object(Ct.a)(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(t),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var t=new Zt(this);return Object(Ct.a)(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)(e=this.ripples[t]).draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){void 0!==e&&(t?this.downAction():this.upAction())}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Wt={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){Ft._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&Object(Ct.a)(e).appendChild(this._ripple),t){var i=Object(Ct.a)(this._rippleContainer||this),n=Object(Ct.a)(t).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}},Kt={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var t=1;this.disabled?t=0:this.active||this.pressed?t=4:this.receivedFocusFromKeyboard&&(t=3),this._setElevation(t)},_computeKeyboardClass:function(t){this.toggleClass("keyboard-focus",t)},_spaceKeyDownHandler:function(t){Ft._spaceKeyDownHandler.call(this,t),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(t){Ft._spaceKeyUpHandler.call(this,t),this.hasRipple()&&this._ripple.uiUpAction()}},Gt=[$t,Lt,Wt,Kt],Yt=dt.b`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Yt.setAttribute("strip-whitespace",""),Object(xt.a)({_template:Yt,is:"paper-button",behaviors:[Gt],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?Kt._calculateElevation.apply(this):this._setElevation(0)}});customElements.define("app-active-filters-panel",class extends st{static get properties(){return{filters:{type:Array},hasFilters:{type:Boolean}}}constructor(){super(),this.render=function(){return N`

<style>
  :host {
    display: block;
  }

  /* @keyframes show-button {
    0%   { opacity: 0; transform: scale(0) }
    100% { opacity: 1; transform: scale(1) }
  } */
  paper-button {
    color: var(--secondary-text-color);
    border: 1px solid var(--secondary-text-color);
    border-radius: 3;
    padding: 4px;
    font-size: 14px;

    /* animation: show-button 300ms ease-out; */
  }
  paper-button:hover, paper-button:focus {
    color: var(--light-primary-color);
    border: 1px solid var(--light-primary-color);
  }

  [has-filters] {
    margin-bottom: 15px;
  }

  .btn-layout {
    display: flex;
    align-items: center;
  }
</style>

<div ?has-filters="${this.hasFilters}">
  ${this.filters.map((t,e)=>N`
    <paper-button index="${e}" @click="${this._onRemoveFilterClicked}">
      <div class="btn-layout">
        <iron-icon icon="close"></iron-icon>
        <span>${t.label}<span ?hidden="${t.noValueLabel}">: ${t.value}</span></span>
      </div>
    </paper-button>`)}
</div>

`}.bind(this),this.filters=[]}updated(t){t.has("filters")&&(this.hasFilters=!!this.filters.length)}_onRemoveFilterClicked(t){let e=parseInt(t.currentTarget.getAttribute("index")),i=this.filters[e];t=new CustomEvent("remove-filter",{bubbles:!0,composed:!0,detail:i}),this.dispatchEvent(t)}});customElements.define("app-search-header",class extends st{static get properties(){return{text:{type:String},filters:{type:Array},suggestions:{type:Array},showSuggestions:{type:Boolean}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}

<style>
  :host {
    display: block;
    background-color: white;
    border-bottom: 1px solid #ddd;
  }
  .root {
    display: flex;
    justify-content: center;
  }
  input {
    display: block;
    width: 100%;
    padding: 5px;
    font-size: 22px;
    margin: 15px 0 0 0;
    height: 42px;
    background: #eee;
    color: var(--text-primary-color);
    border: none;
    box-sizing: border-box;
    border-radius: 0;
  }
  input:focus {
    border: none;
  }
  button {
    margin: 15px 0;
    color : white;
    background: var(--light-primary-color);
    border: 1px solid var(--light-primary-color);
    height: 42px;
    padding: 0 15px;
    border-left: none;
    border-radius: 0;
  }

  .suggest {
    position: relative;
  }

  .suggest > div {
    position: absolute;
    background: white;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1000;
    border: 1px solid #ddd;
    border-top: none;
    border-radius: 0 0 3px 3px;
    overflow: auto;
    max-height: 250px;
  }

  .suggest a {
    cursor: pointer;
  }

  .suggestion {
    padding: 5px;
    white-space: nowrap;
  }
</style>

<div class="root">
  <div style="flex:.66;">
    <input type="text" 
      placeholder="Search Spectra" 
      autocomplete="off"
      id="input" 
      @focus="${this._onFocus}"
      @keyup="${this._onKeyPress}" />
    <div class="suggest" ?hidden="${!this.showSuggestions}">
      <div>
        ${this.suggestions.map((t,e)=>N`
          <div class="suggestion"><a index="${e}" @click="${this._onSuggestClicked}">${t.label}</a></div>`)}
      </div>
    </div>
  </div>
  <div>
    <button @click="${this._onButtonClick}">
      <iron-icon icon="search"></iron-icon>
    </button>
  </div>
</div>

<div class="root">
  <app-active-filters-panel style="flex:.66" .filters="${this.filters}"></app-active-filters-panel>
</div>

`}.bind(this),this.text="",this.filters=[],this.showSuggestions=!1,window.addEventListener("click",t=>{if(!this.showSuggestions)return;let e=t.composedPath();-1===e.indexOf(this.inputEle)&&-1===e.indexOf(this.popupEle)&&(this.showSuggestions=!1)})}set value(t){this.shadowRoot.querySelector("#input").value=t||""}get value(){return this.shadowRoot.querySelector("#input").value}firstUpdated(){this.inputEle=this.shadowRoot.querySelector("input"),this.popupEle=this.shadowRoot.querySelector(".suggest > div")}updated(t){t.has("text")&&(this.value=this.text),t.has("suggestions")&&(this.showSuggestions=this.suggestions.length>0)}_onKeyPress(t){if(27===t.which&&this.showSuggestions)return this.showSuggestions=!1;13===t.which&&(t=new CustomEvent("text-search",{bubbles:this,detail:this.value}),this.dispatchEvent(t))}_onButtonClick(t){t=new CustomEvent("text-search",{bubbles:this,detail:this.value}),this.dispatchEvent(t)}_onSuggestClicked(t){let e=parseInt(t.currentTarget.getAttribute("index")),i=this.suggestions[e];t=new CustomEvent("suggestion-selected",{bubbles:!0,detail:i}),this.dispatchEvent(t)}_onFocus(){this.suggestions.length>0&&(this.showSuggestions=!0)}});customElements.define("app-search-pagination",class extends st{static get properties(){return{itemsPerPage:{type:Number,attribute:"items-per-page"},currentIndex:{type:Number,attribute:"current-index"},textMode:{type:Boolean,attribute:"text-mode"},textDisplay:{type:String,attribute:"text-display"},totalResults:{type:Number,attribute:"total-results"},numShownPages:{type:Number},pages:{type:Array},lastPageIndex:{type:Number},firstPage:{type:Boolean},lastPage:{type:Boolean},loading:{type:Boolean}}}constructor(){super(),this.render=function(){return N`

<style>
  :host {
    display: block;
  }
</style>  


<style>
  :host {
    display: block;
  }
  #root {
    display: flex;
    align-items: center;
  }
  .ellipsis {
    display: none;
  }
  paper-icon-button {
    color: var(--cork-color, --default-primary-color);
  }
  paper-icon-button[disabled] {
      color: var(--cork-disabled-color, var(--disabled-color, #ccc));
  }
  a {
    color: var(--cork-color, --default-primary-color);
    cursor: pointer;
    text-align: center;
    min-width: 20px;
    border-radius: 25px;
    display: inline-block;
    padding: 5px;
    margin: 0 3px;
    font-size: 14px;
    line-height: 20px;
  }
  a:hover {
    background: var(--cork-background-color-light, var(--light-background-color, #eee));
  }
  a[selected] {
    background: var(--cork-background-color, var(--medium-background-color, #ccc));
    color: white;
  }
  [hidden] {
    display: none;
  }
  .text-display {
    font-style: italic;
  }
</style>

<div id="root">
  <paper-icon-button 
    ?disabled="${this.firstPage}" 
    icon="arrow-back" 
    @click="${this.previous}">
  </paper-icon-button>

  <div style="flex:1"></div>

  <div ?hidden="${this.loading}">
    <div ?hidden="${!this.textMode}" class="text-display">${this.textDisplay}</div>
  </div>

  <div ?hidden="${this.textMode}">
    <a ?selected="${this.firstPage}" @click="${this._selectPage}" page="0">1</a>
    <a id="startEllipsis" class="ellipsis" @click="${this.previousSection}">...</a>

    ${this.pages.map(t=>N`<a ?selected="${t.selected}" @click="${this._selectPage}" page="${t.index}">${t.index}</a>`)}

    <a id="stopEllipsis" class="ellipsis" @click="${this.nextSection}">...</a>
    <a id="lastPage" ?selected="${this.lastPage}" @click="${this._selectPage}" page="${this.lastPageIndex}">${this.lastPageIndex}</a>
  </div>

  <div style="flex:1"></div>

  <paper-icon-button 
    ?disabled="${this.lastPage}" 
    icon="arrow-forward" 
    @click="${this.next}">
  </paper-icon-button>
</div>

  

`}.bind(this),this.itemsPerPage=10,this.currentIndex=1,this.textMode=!1,this.textDisplay="",this.totalResults=1,this.numShownPages=5,this.pages=[],this.lastPageIndex=1,this.firstPage=!0,this.lastPage=!1,this.loading=!1}updated(t){(t.has("currentIndex")||t.has("totalResults")||t.has("itemsPerPage"))&&(this.textDisplay=this._computeTextDisplay(this.currentIndex,this.totalResults,this.itemsPerPage),this._onPageChanged())}_computeTextDisplay(t,e,i){if(0===e)return"No results found";var n=t+i<e?t+i:e,r=t+1;return r>n&&(r=n),`Showing ${r} to ${n} of ${e}`}_onPageChanged(){this.firstPage=!1,this.lastPage=!1;var t=[];this.currentPage=Math.floor(this.currentIndex/this.itemsPerPage)+1;var e=Math.floor(this.numShownPages/2);this.lastPageIndex=Math.max(Math.ceil(this.totalResults/this.itemsPerPage),1);var i=this.currentPage-e,n=this.currentPage+e;i<1&&(n=1-i+n),n>this.lastPageIndex&&(i-=n-this.lastPageIndex,n=this.lastPageIndex),i<1&&(i=1),this.firstPage=1===this.currentPage,1===i&&(i=2),this.lastPage=this.currentPage===this.lastPageIndex,n===this.lastPageIndex&&(n=this.lastPageIndex-1);for(var r=i;r<=n;r++)t.push({index:r,selected:r===this.currentPage});this.shadowRoot.querySelector("#lastPage").style.display=this.lastPageIndex>1?"inline-block":"none",this.shadowRoot.querySelector("#startEllipsis").style.display=i>2?"inline-block":"none",this.shadowRoot.querySelector("#stopEllipsis").style.display=n<this.lastPageIndex-1?"inline-block":"none",this.pages=t}previous(){this._fireNav({page:this.currentPage-1,startIndex:(this.currentPage-2)*this.itemsPerPage})}next(){this._fireNav({page:this.currentPage+1,startIndex:this.currentPage*this.itemsPerPage})}_selectPage(t){var e=parseInt(t.currentTarget.getAttribute("page"));this._fireNav({page:e,startIndex:(e-1)*this.itemsPerPage})}previousSection(){var t=Math.floor(this.numShownPages/2)+1,e=this.pages[0].index-t;e<1&&(e=1),this._fireNav({page:e,startIndex:(e-1)*this.itemsPerPage})}nextSection(){var t=Math.floor(this.numShownPages/2)+1,e=this.pages[this.pages.length-1].index+t;e>this.lastPageIndex&&(e=this.lastPageIndex),this._fireNav({page:e,startIndex:(e-1)*this.itemsPerPage})}_fireNav(t){this.dispatchEvent(new CustomEvent("nav",{detail:t}))}});customElements.define("app-filter-list-row",class extends st{static get properties(){return{index:{type:Number,reflect:!0},label:{type:String},count:{type:String}}}constructor(){super(),this.render=function(){return N`

<style>
  :host {
    display: block;
    font-size: 14px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    color: var(--default-primary-color);
  }
  .label {
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 200px;
    display: block;
    overflow: hidden;
  }
</style>

<div style="display:flex; padding: 6px 5px">
  <div style="flex:1">
    <div class="label">
      <a tabindex="1">${this.label}</a>
    </div>
  </div>
  <div>${this.count}</div>
</div>

`}.bind(this),this.label="",this.count=""}_onKeyup(t){13===t.which&&this.dispatchEvent(new CustomEvent("click"))}setItem(t,e){this.index=t,this.label=e.label,this.count=e.count}});customElements.define("app-virtual-list",class extends st{static get properties(){return{maxHeight:{type:Array},items:{type:Array},renderedItems:{type:Array},itemHeight:{type:Number,attribute:"item-height"},loading:{type:Boolean}}}constructor(){super(),this.render=function(){return N`

<style>
  :host {
    display: block;
    height: 200px;
  }

  .root {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #scroll-panel {
    position: relative;
  }

  .virtual-item {
    position: absolute;
  }

  [hidden] {
    display: none;
  }
</style>  

<div class="root" @scroll="${this._onScroll}">
  <div id="scroll-panel" ?hidden="${this.loading}"></div>
</div>
`}.bind(this),this.items=[],this.itemHeight=25,this.renderedItems=[],this.trash=[],this.loading=!1}update(t){super.update(t)}firstUpdated(){this.scrollPanel=this.shadowRoot.querySelector("#scroll-panel"),this.root=this.shadowRoot.querySelector(".root"),this.height=this.offsetHeight;let t=Math.min(this.items.length,Math.ceil(this.height/this.itemHeight));for(let e=0;e<t;e++){let t=this._createElement();t.setItem(e,this.items[e]),this.renderedItems.push({index:e,ele:t})}this._layoutItems()}createItemElement(){return document.createElement("div")}_createElement(){let t=this.createItemElement();return t.style.height=this.itemHeight,t.className="virtual-item",this.scrollPanel.appendChild(t),t}updated(t){this.scrollPanel.style.height=this.items.length*this.itemHeight+"px",this._layoutItems()}_onScroll(t){this._layoutItems()}_layoutItems(){let t=this.root.scrollTop,e=Math.floor(t/this.itemHeight);this.height=this.offsetHeight;let i=Math.min(this.items.length,Math.ceil(this.height/this.itemHeight));for(let t=this.renderedItems.length-1;t>=0;t--){let n=this.renderedItems[t];(n.index<e||n.index>=e+i)&&(this.renderedItems.splice(t,1),this.trash.push(n),this.scrollPanel.removeChild(n.ele))}for(let t=e;t<e+i;t++){if(t>=this.items.length)continue;let e=this.renderedItems.find(e=>e.index===t);e||(this.trash.length?(e=this.trash.pop(),this.scrollPanel.appendChild(e.ele)):e={index:t,ele:this._createElement()},e.index=t,this.renderedItems.push(e))}for(let t of this.renderedItems)t.ele.setItem(t.index,this.items[t.index]),t.ele.style.top=t.index*this.itemHeight+"px",t.ele.style.left="5px",t.ele.style.right="5px"}});customElements.define("app-filter-panel",class extends st{static get properties(){return{label:{type:String},filter:{type:String},values:{type:Array},bucketsIronList:{type:Array},buckets:{type:Array},opened:{type:Boolean},radius:{type:String}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}

<style >
  :host {
    display: block;
    min-width: 250px;
  }
  .label {
    cursor: pointer;
    display: flex;
    color: var(--default-primary-color);
    padding: 10px 0;
    font-weight: bold;
    position: relative;
    /* outline: none !important; */
    background-color: white;
    border-bottom: 1px solid #ddd;
    padding-left: 15px;
  }
  .highlight {
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color:  var(--default-secondary-color);
    display: none;
  }
  .label:focus > .highlight {
    display: block;
  }
  #activeFilters > div {
    padding: 4px 5px;
  }
  .filter {
    display: flex;
    cursor: pointer;
    align-items: center;
    font-weight: bold;
    font-style: italic;
  }
  iron-icon[closed] {
    transform: rotate(-90deg);
  }
  iron-icon[clear] {
    color: var(--default-secondary-color);
    margin-right: 2px;
  }
  #smallList {
    overflow-y: auto;
    max-height: 200px;
  }
</style>

<div class="label" 
  @click="${this._onToggleClicked}" 
  @keyup="${this._onLabelKeyup}" 
  role="button" tabindex="1">
  <div style="flex:1">${this.label}</div>
  <iron-icon icon="arrow-drop-down" ?closed="${!this.opened}"></iron-icon>
  <div class="highlight"></div>
</div>

<div ?hidden="${!this.opened}">
  <!-- used for large lists -->
  <app-virtual-list 
    item-height="33"
    .items="${this.bucketsIronList}" 
    .createItemElement="${this._createVirtualListElement}">
  </app-virtual-list>
  
  <!-- used for small lists -->
  <div class="overflow" id="smallList">
    <div style="padding: 5px">
      ${this.buckets.map((t,e)=>N`<app-filter-list-row
          @click="${this._onListClicked}" 
          index="${e}"
          .label="${t.label}"
          .count="${t.count}">
        </app-filter-list-row>`)}
    </div>
  </div>
</div>

`}.bind(this),this._createVirtualListElement=this._createVirtualListElement.bind(this),this.filter="",this.values=[],this.buckets=[],this.bucketsIronList=[],this.opened=!1}firstUpdated(){this.radius&&(this.shadowRoot.querySelector(".label").style.borderRadius=this.radius)}updated(t){if(t.has("values")){let t=this.shadowRoot.querySelector("app-virtual-list"),e=this.shadowRoot.querySelector("#smallList");if(this.values.length>50){t.style.display="block",e.style.display="none";let i=t.scrollTop;this.bucketsIronList=this.values,this.buckets=[],t.scrollTop=i,requestAnimationFrame(()=>{t.scrollTop=i})}else t.style.display="none",e.style.display="block",this.bucketsIronList=[],this.buckets=this.values}t.has("opened")&&this.opened&&this.values.length>50&&this.shadowRoot.querySelector("app-virtual-list")._layoutItems()}_onLabelKeyup(t){13===t.which&&this._onToggleClicked()}_onToggleClicked(){this.opened=!this.opened}_createVirtualListElement(){let t=document.createElement("app-filter-list-row");return t.addEventListener("click",t=>{this._onListClicked(t)}),t}_onListClicked(t){let e=parseInt(t.currentTarget.getAttribute("index")),i=new CustomEvent("item-selected",{detail:{index:e,filter:this.filter,value:this.values[e]}});this.dispatchEvent(i)}});customElements.define("app-popup",class extends st{static get properties(){return{title:{type:String}}}constructor(){super(),this.render=function(){return N`

<style>
  :host {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    overflow: auto;
    z-index: 10000;
  }

  .layout {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-root {
    margin: 50px 15px;
    max-width: 600px;
    width: 100%;
    background: white;
    box-shadow: 0 0 5px #333;
  }

  .header {
    margin: 15px;
    display: flex;
    align-items: center;
  }

  .header h2 {
    flex: 1;
    margin: 0;
  }

</style>  

<div class="layout">
  <div class="content-root"
      role="dialog"
      aria-modal="true">
    <div class="header">
      <h2>${this.title}</h2>
      <div><paper-icon-button @click="${this.close}" icon="close"></paper-icon-button></div>
    </div>
    <slot></slot>
  </div>
</div>

`}.bind(this),this.title=""}connectedCallback(){super.connectedCallback(),this.attachedToBody||(this.attachedToBody=!0,this.parentNode.removeChild(this),document.body.appendChild(this),this.children.length>0&&(this.children[0].addEventListener("open",this.open.bind(this)),this.children[0].addEventListener("close",this.close.bind(this))))}open(){document.body.style.overflow="none",this.style.display="block",this.children.length>0&&this.children[0]._onOpen&&this.children[0]._onOpen()}close(){document.body.style.overflow="auto",this.style.display="none",this.children.length>0&&this.children[0]._onClose&&this.children[0]._onClose()}});var Xt=i(26),Jt=i(6),Qt=new Set;const te={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Qt.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():Jt.h||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Object(Ct.a)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(Qt.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Qt.delete(this):Qt.add(this)}};var ee=i(14);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class ie{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach(function(e){(!t||t.indexOf(e)<0)&&this.setItemSelected(e,!1)},this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,e){if(null!=t&&e!==this.isSelected(t)){if(e)this.selection.push(t);else{var i=this.selection.indexOf(t);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(t,e)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ne={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new ie(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Object(Ct.a)(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(t){return this.items?this.items.indexOf(t):-1},select:function(t){this.selected=t},selectPrevious:function(){var t=this.items.length,e=t-1;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))-1+t)%t),this.selected=this._indexToValue(e)},selectNext:function(){var t=0;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(t)},selectIndex:function(t){this.select(this._indexToValue(t))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(t){this.listen(this,t,"_activateHandler")},_removeListener:function(t){this.unlisten(this,t,"_activateHandler")},_activateEventChanged:function(t,e){this._removeListener(e),this._addListener(t)},_updateItems:function(){var t=Object(Ct.a)(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(t){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(t){return!this._excludedLocalNames[t.localName]},_valueToItem:function(t){return null==t?null:this.items[this._valueToIndex(t)]},_valueToIndex:function(t){if(!this.attrForSelected)return Number(t);for(var e,i=0;e=this.items[i];i++)if(this._valueForItem(e)==t)return i},_indexToValue:function(t){if(!this.attrForSelected)return t;var e=this.items[t];return e?this._valueForItem(e):void 0},_valueForItem:function(t){if(!t)return null;if(!this.attrForSelected){var e=this.indexOf(t);return-1===e?null:e}var i=t[Object(ee.b)(this.attrForSelected)];return null!=i?i:t.getAttribute(this.attrForSelected)},_applySelection:function(t,e){this.selectedClass&&this.toggleClass(this.selectedClass,e,t),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,e,t),this._selectionChange(),this.fire("iron-"+(e?"select":"deselect"),{item:t})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return Object(Ct.a)(t).observeNodes(function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})})},_activateHandler:function(t){for(var e=t.target,i=this.items;e&&e!=this;){var n=i.indexOf(e);if(n>=0){var r=this._indexToValue(n);return void this._itemActivate(r,e)}e=e.parentNode}},_itemActivate:function(t,e){this.fire("iron-activate",{selected:t,item:e},{cancelable:!0}).defaultPrevented||this.select(t)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[te,ne],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(t,e){this.async(this.notifyResize)}});i(35);var re=i(12);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var i=this._resolveSrc(t);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=Object(re.c)(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}});customElements.define("app-page-home",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{active:{type:Boolean},spectraCount:{type:String},lastAdded:{type:Array},organizations:{type:Array},keywords:{type:Array},themes:{type:Array},sandbox:{type:Boolean}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}
<style>
  :host {
    display: block;
  }

  .root {
    display: flex;
    justify-content: center;
  }
  .root.column {
    flex-direction: column;
  }
  .root > div {
    width: 100%;
    max-width: 1200px;
  }

  .count-label {
    background: #eee;
    border-radius: 20px;
    padding: 1px 5px;
    font-size: 13px;
  }

  .stat-row {
    padding: 3px;
    display: flex;
  }

  .stat-row > div:first-child {
    flex: 1;
  }

  .splash {
    margin-top: 0px;
    padding: 60px 0;
    text-align: center;
    min-height: 400px;
    width: 100%;
  }
  .splash h1 {
    color: white;
    letter-spacing: 10px;
    text-shadow: 0 0 15px #333;
    padding-left: 30px;
    padding-right: 30px;
  }
  .splash h1 div {
    font-size:2em;
  }
  .splash h3 {
    color: white;
    letter-spacing: 5px;
    text-shadow: 0 0 15px #333;
  }
  .splash-url {
    letter-spacing: 5px;
    color:white;
    margin: 20px 0;
    padding: 20px 0;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
  }

  @media(max-width: 680px) {
    .splash h1 {
      letter-spacing: 5px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .splash h1 div {
      font-size:1.5em;
    }
    .splash h3 {
      letter-spacing: 2px;
    }
    .splash-url {
      letter-spacing: 2px;
      margin: 10px 0;
      padding: 10px 0;
    }
  }

  .splash-text {
    position: absolute; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .jumbotron {
    margin-bottom : 0; 
    text-align : center;
    padding: 100px 0 50px 0;
  }

  .stats-container {
    background: #f8f8f8; 
    padding: 25px 0;
    display: flex;
    justify-content: center;
  }

  .max-width {
    max-width: 750px;
    width: 100%;
    box-sizing: border-box;
  }

  .stats-container-inner {
    display: flex;
  }

  @media(max-width: 768px) {
    .stats-container-inner {
      display: block;
    }
    .top-margin-sm {
      margin-top: 25px !important;
    }
  }

  .stat-container {
    flex: 1;
    margin: 5px;
  }

  .stat-container > div {
    background-color: white;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
  }

  .stat-container > div > div {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  #recently-added h3 {
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 2px;
    line-height: 26px;
  }

  .footer h3 {
    font-weight: bold;
    margin-top: 0;
  }

</style>  

<div class="root">
  <div style="margin: 15px; text-align: center">
    <h1 style="margin-bottom: 0; line-height: 36px">Ecological Spectral Information System</h1>

    <div>
      Welcome to the EcoSIS<span class="sandbox" ?hidden="${!this.sandbox}" style="font-weight:bold">&nbsp;Sandbox</span>, a useful tool for finding spectral data. <br />
      <p id="count" class="tlt" data-in-effect="fadeInDown" data-in-shuffle="true"></p>
    </div>

    <div>${this.spectraCount} and counting.</div>
  </div>
</div>

<div class="root">
  <div class="main-panel">

    <div class="row">
      <div>
        <h2 class="uheader blue">Top Organizations</h2>
        <div id="organization">
          ${this.organizations.map(t=>N`
            <div class="stat-row">
              <div><a href="${t.link}">${t.value}</a></div> 
              <div><span class="count-label">${t.count}</span></div>
            </div>
          `)}
        </div>
      </div>
      <div>
        <h2 class="uheader green top-margin-sm">Top Keywords</h2>
        <div id="Keywords">
          ${this.keywords.map(t=>N`
            <div class="stat-row">
              <div><a href="${t.link}">${t.value}</a></div>
              <div><span class="count-label">${t.count}</span></div>
            </div>
          `)}
        </div>
      </div>
      <div>
        <h2 class="uheader lightblue top-margin-sm">Top Themes</h2>
        <div id="Theme">
          ${this.themes.map(t=>N`
            <div class="stat-row">
              <div><a href="${t.link}">${t.value}</a></div> 
              <div><span class="count-label">${t.count}</span></div>
            </div>
          `)}
        </div>
      </div>
    </div>

  </div>
</div>

<div class="root">
  <div class="main-panel">

    <div>
      <h2 class="uheader lightgreen">Recently Added</h2>
      <div id="recently-added">
        ${this.lastAdded.map(t=>N`
          <div>
            <h3><a href="/package/${t.ecosis.package_name}">${t.ecosis.package_title}</a></h3> 
            <div style="font-style:italic"><a href="${t.ecosis.organization_link}">${t.ecosis.organization}</a></div>
            <div style="color: var(--text-light-color)">${t.ecosis.short_description}</div>
          </div>
        `)}
      </div>
    </div>

  </div>
</div>

<div class="root footer">
  <div class="main-panel">
    <div class="row">
      <div style="flex: 1">
        <h3 class="uheader blue">Contribute!</h3>
        <div>Data maintainers, add or edit spectra at <a id="mainainerLink" highlight href="http://data.ecosis.org">data.ecosis.org</a>.</div>
      
        <h3 class="uheader lightblue" style="margin-top: 35px;">Data Models</h3>
        <div>
          Looking for spectra data models? Check out <a highlight href="http://ecosml.org">ecosml.org</a>.
        </div>
      </div>
      <div style="flex: 1">
        <h3 class="uheader green top-margin-sm">Need Help?</h3>
        <div style="margin-bottom: 15px;">Visit the <a href="http://tutorial.ecosis.org/" highlight>EcoSIS Tutorials</a>. Or Contact:</div>
        <div style="margin-bottom: 10px; line-height: 22px;">
          <div><a href="mailto:info@ecosis.org" highlight>info@ecosis.org</a></div>
          <div>General EcoSIS questions and program information.</div>
        </div>
        <div style="line-height: 22px">
          <div><a href="mailto:help@ecosis.org" highlight>help@ecosis.org</a></div>
          <div>Technical help questions for EcoSIS applications and tools.</div>
        </div>

      </div>
    </div>
  </div>
</div>

<div class="root footer">
  <div class="main-panel">
    <div class="row">
      <div style="flex: 1">

        <h3>Sponsor</h3>

        <div style="display:flex; align-items: center">
          <div style="padding-right: 10px;">
            <a href="https://www.nasa.gov/">
              <img class="media-object" src="/assets/NASA_logo.png" style="max-width: 96px" alt="NASA Logo">
            </a>
          </div>
          <div>
            <h2 style="margin:0"><a href="https://www.nasa.gov/" target="_blank">NASA</a></h2>
            <b>Program:</b> Research Opportunities in Space and Earth Sciences<br />
            <b>Grant Number:</b> NNX13AK85A
          </div>
        </div>
      </div>
      <div style="width:25px; flex: 0"></div>
      <div style="flex: 1">

        <h3 class="top-margin-sm">Executive Team</h3>
        <div>
          <a href="http://labs.russell.wisc.edu/townsend/" target="_blanl">University of Wisconsin - Madison, EnSpec</a><br />
          <a href="http://www.cstars.ucdavis.edu/" target="_blanl">University of California - Davis, CSTARS</a><br />
          <a href="https://sites.google.com/site/ucsbviperlab/" target="_blanl">University of California - Santa Barabara, VIPER Lab</a><br />
          <a href="http://ursa.utah.edu/index.php" target="_blanl">University of Utah, URSA</a><br />
          <a href="http://www.calmit.unl.edu/" target="_blanl">University of Nebraska - Lincoln, CALMIT</a><br />
          <a href="http://www.jpl.nasa.gov/" target="_blanl">NASA, JPL</a><br />
          <a href="http://www.neonscience.org/science-design/collection-methods/airborne-remote-sensing" target="_blanl">NEON</a>
        </div>
      </div>
    </div>
  </div>
</div>

`}.bind(this),this.active=!1,this.organizations=[],this.keywords=[],this.themes=[],this.lastAdded=[],this.sandbox="prod"!=APP_CONFIG.serverEnv,this._injectModel("PackageModel")}updated(t){t.has("active")&&this._onActiveChanged()}async _onActiveChanged(){if(!this.active)return;let t=await this.PackageModel.stats();t=t.payload,this.spectraCount=(t.spectraCount+"").replace(/\B(?=(\d{3})+(?!\d))/g,","),this.lastAdded=t.lastAdded.map(t=>{let e=this.PackageModel.utils.getDefaultSearch();return e.filters.push({"ecosis.organization":t.ecosis.organization}),t.ecosis.organization_link=this.PackageModel.utils.getUrlPathFromQuery(e),t.ecosis.short_description=t.ecosis.description,t.ecosis.short_description.length>250&&(t.ecosis.short_description=t.ecosis.short_description.substr(0,247)+"..."),t}),this.organizations=t["ecosis.organization"].map(t=>this._appendLink(t,"ecosis.organization")),this.keywords=t.Keywords.map(t=>this._appendLink(t,"Keywords")),this.themes=t.Theme.map(t=>this._appendLink(t,"Theme"))}_appendLink(t,e){let i=this.PackageModel.utils.getDefaultSearch();return i.filters.push({[e]:t.value}),t.link=this.PackageModel.utils.getUrlPathFromQuery(i),t}});var oe=i(27),se=i.n(oe);const ae=["Theme","Target Type","Common Name"];customElements.define("app-search-result",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{package:{type:Object},organizationLink:{type:String},filters:{type:Array},shortDescription:{type:String}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}
<style>
  :host {
    display: block;
    margin-bottom: 50px;
  }

  h2 {
    margin: 0;
    line-height: 28px;
  }

  h2 a {
    color: var(--default-primary-color) !important;
  }

  .organization {
    font-style: italic;
    font-size: 18px;
    font-weight: bold;
  }

  .metadata-layout {
    display: flex;
  }

  .metadata-layout .description{
    flex: .666;
    padding-right: 5px;
    line-height: 18px;
  }
  .metadata-layout .filters{
    flex: .333;
    padding-left: 10px;
  }

  .filter-title {
    font-weight: bold;
    line-height: 14px;
  }

  .filter-group {
    margin-bottom: 5px;
    line-height: 22px;
  }

  .filter-filters {
    margin-bottom: 15px;
  }

  .filter {
    font-style: italic;
  }
</style>  

<h2 class="uheader green"><a href="/package/${this.package.ecosis.package_name}">${this.package.ecosis.package_title}</a></h2>
<div class="organization"><a href="${this.organizationLink}">${this.package.ecosis.organization}</a></div>

<div class="metadata-layout">
  <div class="description">
    ${this.shortDescription}
  </div>
  <div class="filters">
    ${this.filters.map(t=>N`
      <div class="filter-group">
        <div class="filter-title">${t.title}</div>
        <div class="filter-filters">${t.items}</div>
      </div>`)}
  </div>
</div>

`}.bind(this),this._injectModel("PackageModel"),this.package={},this.organizationLink="",this.filters=[],this.shortDescription=""}createRenderRoot(){return super.createRenderRoot()}updated(t){t.has("package")&&(this._renderOrgLink(),this._renderFilters(),this._renderDescription())}_renderDescription(){this.package.ecosis.description<300?this.shortDescription=this.package.ecosis.description:this.shortDescription=this.package.ecosis.description.substr(0,297)+"..."}_renderOrgLink(){let t=this.PackageModel.utils.getDefaultSearch();t.filters.push({"ecosis.organization":this.package.ecosis.organization}),this.organizationLink=this.PackageModel.utils.getUrlPathFromQuery(t)}_renderFilters(){this.filters=ae.map(t=>{if(!this.package[t])return null;let e=this.package[t].length;e>5&&(e=5);let i={title:t,items:se()(this.package[t]).splice(0,5).map((i,n)=>{let r=this.PackageModel.utils.getDefaultSearch();r.filters.push({[t]:i});let o=this.PackageModel.utils.getUrlPathFromQuery(r);return N`<a href="${o}" class="filter">${i}</a>${n<e-1?",":""} `})};return e>5&&i.items.push(N`<span>...</span>`),i}).filter(t=>null!==t)}});var le=i(34),he=i.n(le);i(47);customElements.define("app-location-filter",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{latitude:{type:String},longitude:{type:String},radius:{type:String},llmatches:{type:String},locateText:{type:String},locating:{type:Boolean}}}constructor(){super(),this.render=function(){return N`

<style>${he.a}</style>
<style>
  :host {
    display: block;
  }
  #map {
    height: 350px;
  }

  .info {
    display: flex;
    margin: 10px 20px 20px 20px;
    line-height: 26px;
    text-align: center;
    align-items: center;
  }

  .info > div {
    flex: 1;
  }

  .matches {
    text-align: center;
  }

  .count {
    background-color: var(--default-secondary-color);
    color: white;
    font-size: 64px;
    line-height: 76px;
    border-radius: 60px;
    padding: 10px 30px;
    margin-top: 15px;
    display: inline-block;
  }

  .title {
    color: var(--default-secondary-color);
    font-size: 18px;
    margin-top: 15px;
  }

  .warn {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin: 5px 10px;
    text-align: center;
  }

  .btns {
    display: flex;
    margin: 10px;
  }

  .break {
    margin-top: 10px;
    border-top: 1px solid var(--dark-background-color);
  }

  /* paper-button[cancel] {
    border-top: 1px solid var(--extra-dark-background-color);
    border-left: 1px solid var(--extra-dark-background-color);
    border-right: 1px solid var(--extra-dark-background-color);
  } */

  paper-button[locate], paper-button[set] {
    background-color: var(--light-secondary-color);
    color: white;
  }

  /* paper-button[set] {
    background-color: var(--default-primary-color);
  } */
</style>  


<div class="warn">*Datasets without geographic location information will not be included in your search results when the geographic filter is applied.</div>
<div id="map"></div>
<div ?hidden="${!L.Browser.mobile}" class="warn" style="padding: 5px">
  *Use two fingers to pan
</div>

<div class="info">
  <div>
    <div style="display: flex">
      <div style="flex: 1">
        <div class="title">Latitude</div>
        <div>${this.latitude}</div>
      </div>
      <div style="flex: 1">
        <div class="title">Longitude</div>
        <div>${this.longitude}</div>
      </div>
    </div>

    <div class="title">Radius</div>
    <div>${this.radius}</div>
  </div>
  <div class="matches">
    <div class="title">Packages</div>
    <div><span class="count">${this.llmatches}</span></div>
  </div>
</div>

<div class="break"></div>

<div class="btns">
  <div style="flex:1">
    <paper-button cancel @click="${this.close}">Cancel</paper-button>
  </div>
  <div>
    <paper-button locate @click="${this._onLocateClicked}" ?disabled="${this.locating}">${this.locateText}</paper-button>
    <paper-button set @click="${this._onSetFilterClicked}">Set Filter</paper-button>
  </div>
</div>
`}.bind(this),this.r=844906,this.llmatches="0",this.latitude="0",this.longitude="0",this.queryName="geoPreview",this.locateText="Locate Me",this.locating=!1,this._injectModel("AppStateModel","PackageModel")}_onOpen(){this._initMap(),this._updateRadius(),setTimeout(()=>{this.map.invalidateSize()},100),setTimeout(()=>{this.map.invalidateSize()},500)}firstUpdated(){navigator.geolocation||(this.shadowRoot.querySelector("paper-button[locate]").style.display="none")}_initMap(){this.map||(this.map=L.map(this.shadowRoot.querySelector("#map"),{dragging:!L.Browser.mobile}).setView([39.251,-97.85],4),L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map),this.circle=L.circle([39.251,-97.85],this.r,{fillColor:"#AA0000"}).addTo(this.map),this.map.on("zoomend",()=>this._updateRadius()),this.map.on("moveend",()=>this._updateRadius()))}async _updateRadius(){this.ll=this.map.getCenter();let t=this.ll;var e=this.map.getBounds();if(e){var i=L.latLng(e.getNorthEast().lat,t.lng),n=L.latLng(e.getSouthWest().lat,t.lng),r=i.distanceTo(n);this.r=r/2*.75}this.circle.setRadius(this.r),this.circle.setLatLng(t),this.latitude=t.wrap().lat.toFixed(3),this.longitude=t.wrap().lng.toFixed(3),this.radius=Math.round(621371e-9*this.r)+" miles";let o=this.PackageModel.getCurrentSearchQuery();o.page=0,o.filters=o.filters.filter(t=>!t[APP_CONFIG.geoFilter]),o.filters.push(this.PackageModel.utils.getGeoRadiusQuery(t.wrap().lat,t.wrap().lng,this.r));let s=await this.PackageModel.count(o,this.queryName);"loaded"===s.state&&(this.llmatches=s.payload.count+"")}_onLocateClicked(){this.locateText="Locating...",this.locating=!0,navigator.geolocation.getCurrentPosition(t=>{this.locateText="Locate Me",this.locating=!1,this.map.setView(L.latLng(t.coords.latitude,t.coords.longitude))},t=>{switch(this.locateText="Locate Me",this.locating=!1,t.code){case t.PERMISSION_DENIED:alert("User denied the request for Geolocation.");break;case t.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case t.TIMEOUT:alert("The request to get user location timed out.");break;case t.UNKNOWN_ERROR:alert("An unknown error occurred.")}})}_onSetFilterClicked(){let t=this.PackageModel.getCurrentSearchQuery();t.page=0,t.filters=t.filters.filter(t=>!t[APP_CONFIG.geoFilter]),t.filters.push(this.PackageModel.utils.getGeoRadiusQuery(this.ll.wrap().lat,this.ll.wrap().lng,this.r)),this.AppStateModel.setLocation(this.PackageModel.utils.getUrlPathFromQuery(t)),this.close()}open(){this.dispatchEvent(new CustomEvent("open"))}close(){this.dispatchEvent(new CustomEvent("close"))}});customElements.define("app-page-search",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{results:{type:Array},filters:{type:Array},showNoResults:{type:Boolean},itemsPerPage:{type:Number},currentIndex:{type:Number},total:{type:Number},mobileFiltersOpen:{type:Boolean},apiLink:{type:String},apiLinkLabel:{type:String}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}
<style>
  :host {
    display: block;
  }

  .layout {
    display: flex;
    position: relative;
  }

  .filters-border {
    border-radius: 0 3px 3px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }

  .filters-title {
    display: flex;
    padding: 16px;
    align-items: center;
    font-weight: bold;
  }

  .filters-title paper-icon-button {
    display: none;
    color: var(--text-primary-color);
  }

  .filters-toggle {
    padding: 10px;
    display: none;
  }

  iron-icon[icon="filter-list"] {
    vertical-align: text-bottom;
  }

  .location-label {
    cursor: pointer;
    display: flex;
    color: var(--default-primary-color);
    padding: 10px 0;
    font-weight: bold;
    position: relative;
    background-color: white;
    padding-left: 15px;
    border-radius: 0 0 3px 0;
    min-width: 250px;
  }

  .no-results {
    padding: 50px;
    text-align: center;
  }

  .api-link {
    text-align: center;
    color: var(--secondary-text-color);
    padding: 10px;
    font-size: 12px;
  }
  .api-link a {
    color: var(--secondary-text-color);
  }

  @keyframes slidein {
    from {
      left: -260px;
    }
    to {
      left: 0px;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media(max-width: 768px) {
    .filters {
      animation: 300ms slidein;
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      overflow-y: auto;
      background-color: var(--default-background-color);
      z-index: 1000;
    }

    .filters-border {
      border: none;
      border-radius: 0;
    }

    .filters-background {
      animation: 300ms fadein;
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5);
      z-index: 999;
    }

    .filters[open] {
      display: block;
    }

    .filters-background[open] {
      display: block;
    }

    .filters-title {
      background-color: white;
    }

    .filters-title paper-icon-button {
      display: inline-block;
    }

    .filters-toggle {
      display: flex;
    }
  }

</style>  

<app-popup id="locationPopup" title="Filter by Location">
  <app-location-filter></app-location-filter>
</app-popup>

<div class="layout">
  <div class="filters-background" ?open="${this.mobileFiltersOpen}"></div>
  <div class="filters" ?open="${this.mobileFiltersOpen}">
    <div class="filters-title">
      <div style="flex: 1"><iron-icon icon="filter-list"></iron-icon> Filters</div>
      <paper-icon-button @click="${this._toggleMobileFilters}" icon="close"></paper-icon-button>
    </div>

    <div class="filters-border">
      ${this.filters.map((t,e)=>N`<app-filter-panel 
          @item-selected="${this._onItemSelected}"
          radius=${0===e?"0 3px 0 0":""}
          .filter="${t.name}" 
          .label="${t.label}"
          .values="${t.values}">
          </app-filter-panel>`)}
      <div>
        <div class="location-label" tabindex="2" @click="${this._onOpenLocationClicked}">Location</div>
      </div>
    </div>
  </div>

  <div style="flex: 1; max-width: 1150px;">
    <div class="filters-toggle">
      <a @click="${this._toggleMobileFilters}"><iron-icon icon="filter-list"></iron-icon>  Filters</a>
    </div>
    <div style="text-align:center">
      <app-search-pagination 
        style="padding-top: 7px"
        text-mode 
        items-per-page="${this.itemsPerPage}"
        current-index="${this.currentIndex}"
        total-results="${this.total}"
        @nav="${this._onPaginationNav}">
      </app-search-pagination>
    </div>
    <div class="main-panel" ?hidden="${!this.results.length}">

      ${this.results.map(t=>N`<app-search-result .package="${t}"></app-search-result>`)}
    </div>
    <div class="no-results" ?hidden="${this.showNoResults}">
      No Search Results Found
    </div>
    <div style="text-align:center">
      <app-search-pagination
        style="padding: 10px 0 25px 0"
        items-per-page="${this.itemsPerPage}"
        current-index="${this.currentIndex}"
        total-results="${this.total}"
        @nav="${this._onPaginationNav}">
      </app-search-pagination>
    </div>

    <div class="api-link">
      API Link:<br /><a href="${this.apiLink}" target="_blank">${this.apiLinkLabel}</a>
    </div>
  </div>
</div>

<div class="root">
  <div style="padding: 75px 15px 40px 15px">
    <div itemtype="http://schema.org/Organization" itemprop="provider">
      <h2 itemprop="name" style="margin-bottom: 0px">EcoSIS</h2>
      <div class="help-block" style="margin-bottom: 0px" itemprop="description">Ecosystem Spectral Information System</div>
      <div>
        <a href="https://ecosis.org" itemprop="url" highlight>https://ecosis.org</a> |
        <a href="http://cstars.github.io/ecosis/" target="_blank" highlight>EcoSIS API Documentation</a> |
        <a href="mailto:info@ecosis.org" itemprop="email" highlight>info@ecosis.org</a> |
        <a href="mailto:help@ecosis.org" highlight>help@ecosis.org</a>

      </div>
    </div>
  </div>
</div>

`}.bind(this),this._injectModel("PackageModel","AppStateModel"),this.results=[],this.filters=[],this.showNoResults=!1,this.mobileFiltersOpen=!1,this.itemsPerPage=0,this.currentIndex=0,this.total=0,window.addEventListener("resize",()=>{let t=window.innerWidth;this.mobileFiltersOpen&&t>768&&(this.mobileFiltersOpen=!1)})}_onPackageSearchUpdate(t){if("loaded"!==t.state)return;this.results=t.payload.items,this.showNoResults=t.payload.total>0,this.total=t.payload.total,this.itemsPerPage=t.payload.stop-t.payload.start,this.currentIndex=t.payload.start;let e=[];for(let i in t.payload.filters)0!==t.payload.filters[i].length&&(t.payload.filters[i].sort((t,e)=>t.count>e.count?-1:t.count<e.count?1:t.filter>e.filter?1:t.filter<e.filter?-1:0),e.push({name:i,label:this.PackageModel.utils.getFilterLabel(i),values:t.payload.filters[i].map(t=>({label:t.filter,count:t.count}))}));this.apiLink=window.location.protocol+"//"+window.location.host+t.metadata.path,this.apiLinkLabel=window.location.protocol+"//"+window.location.host+decodeURIComponent(t.metadata.path),this.filters=e}_onPaginationNav(t){let e=this.PackageModel.getCurrentSearchQuery();e.page=t.detail.page-1,this.AppStateModel.setLocation(this.PackageModel.utils.getUrlPathFromQuery(e))}_onOpenLocationClicked(t){this.mobileFiltersOpen=!1,document.querySelector("#locationPopup").open()}_toggleMobileFilters(){this.mobileFiltersOpen=!this.mobileFiltersOpen}_onItemSelected(t){t=t.detail;let e=this.PackageModel.getCurrentSearchQuery();e.filters.push({[t.filter]:t.value.label}),e.page=0,this.AppStateModel.setLocation(this.PackageModel.utils.getUrlPathFromQuery(e))}});customElements.define("app-attr-info-popup",class extends st{static get properties(){return{filter:{type:String},description:{type:String},showing:{type:Boolean}}}constructor(){super(),this.render=function(){return N`

<style>
  :host {
    display: inline-block;
  }

  .popup-anchor {
    position : relative;
  }

  .popup {
    display: none;
    position: absolute;
    z-index: 1000;
    top: 2px;
    right: 0px;
    border: 1px solid white;
    color: white;
    background-color: rgba(0,0,0,.9);
    padding: 8px;
    width: 250px;
    border-radius: 3px;
    font-size: 14px;
  }
  .popup[showing] {
    display: block;
  }
</style>  

<paper-icon-button @click="${this._onClick}" icon="info"></paper-icon-button>
<div class="popup-anchor">
  <div class="popup" ?showing="${this.showing}">${this.description}</div>
<div>
`}.bind(this),this.showing=!1,window.addEventListener("click",t=>{this.showing&&(this.justClicked?this.justClicked=!1:t.composedPath().indexOf(this.popup)>-1||(this.showing=!1))})}firstUpdated(){if(this.popup=this.shadowRoot.querySelector(".popup"),!APP_CONFIG)return this.hide();if(!APP_CONFIG.schema)return this.hide();for(let t in APP_CONFIG.schema){let e=APP_CONFIG.schema[t].find(t=>t.name===this.filter);if(e)return e.description?void(this.description=e.description):this.hide()}this.hide()}_onClick(){this.showing||(this.justClicked=!0,this.showing=!0)}hide(){this.style.display="none"}});customElements.define("app-package-metadata",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{active:{type:Boolean},lastSearchUrl:{type:String},title:{type:String},license:{type:String},licenseUrl:{type:String},openData:{type:Boolean},keywords:{type:Array},description:{type:String},spectraCount:{type:Number},spectraWavelengths:{type:String},organizationId:{type:String},organizationName:{type:String},organizationImgUrl:{type:String},organizationDescription:{type:String},acquisitionMethod:{type:Array},samplePlatform:{type:Array},measurementVenue:{type:Array},targetType:{type:Array},targetSource:{type:Array},lightSource:{type:Array},lightSourceSpecifications:{type:Array},foreopticType:{type:Array},foreopticFieldOfView:{type:Array},foreopticSpecifications:{type:Array},theme:{type:Array},processingAveraged:{type:Array},processingInterpolated:{type:Array},processingResampled:{type:Array},processingInformationDetails:{type:Array},instrumentManufacturer:{type:Array},instrumentModel:{type:Array},instrumentSerialNumber:{type:Array},commonName:{type:Array},latinGenus:{type:Array},latinSpecies:{type:Array},usdaSymbol:{type:Array},vegetationType:{type:Array},citation:{type:String},datasetDoi:{type:String},website:{type:String},author:{type:Array},authorEmail:{type:Array},maintainer:{type:Array},maintainerEmail:{type:Array},fundingSource:{type:Array},fundingSourceGrantNumber:{type:Array},linkedResources:{type:Array},hasGeometry:{type:Boolean},apiLink:{type:String}}}constructor(){super(),this.render=function(){return N`

<style>${he.a}</style>
${at(ht.a)}
<style>
  :host {
    display: block;
  }

  h1 {
    margin: 30px 15px 0 15px;
    font-size: 28px;
  }

  h2, h3 {
    margin-top: 0;
  }

  h2.top-pad {
    margin-top: 30px;
  }

  .root {
    display: flex;
    justify-content: center;
  }
  .root.column {
    flex-direction: column;
  }
  .root > div {
    width: 100%;
    max-width: 1200px;
  }

  .org-large img {
    width: 128px;
    margin-right: 15px;
  }

  .org-small img {
    width: 64px;
    margin-right: 15px;
  }

  .org-small {
    display: none;
  }
  .org-large {
    display: flex;
  }

  .row table {
    width: 100%
  }

  .row table td:first-child {
    font-weight: bold;
    white-space: nowrap;
    padding-right: 5px;
  }

  .row table td:nth-child(2) {
    font-size: 14px;
  }

  .row table td:nth-child(3) {
    text-align: right;
  }

  .description {
    margin: 15px 0;
  }

  .spectra-count {
    font-weight: bold;
  }

  .links-list {
    max-height: 68px;
    overflow-y: auto;
  }

  .not-provided {
    color: var(--secondary-text-color);
  }

  .linked-resource {
    margin-bottom: 20px;
  }
  .linked-resource:last-child {
    margin-bottom: 0px;
  }
  .linked-resource > div:first-child {
    font-weight: bold;
  }

  #map {
    height: 350px;
  }

  @media(max-width: 768px) {
    h2.no-flex-top-pad {
      margin-top: 30px;
    }

    .row {
      display: block;
    }
    .row > * {
      padding: 0;
    }

    .org-small {
      display: block;
    }
    .org-large {
      display: none;
    }
  }
</style>

<div ?hidden="${!this.lastSearchUrl}" style="padding: 20px 0 0 15px;">
  <a href="${this.lastSearchUrl}">
    <iron-icon icon="arrow-back" style="vertical-align: bottom"></iron-icon>
    Back to Search
  </a>
</div>

<div class="root">
  <h1>${this.title}</h1>
</div>


<div class="root">
  <div class="main-panel">
    <div class="keywords">${this._createHtmlLinks("Keywords",this.keywords,t=>"#"+t)}</div>
    <div class="description">${this.description}</div>

    <div ?hidden="${!this.openData}"><a href="https://opendefinition.org/od/2.1/en/" target="_blank"><img src="/assets/od_blue.png" /></a></div>
    <div>
      License: <span class="spectra-count" ?hidden="${this.licenseUrl}">${this.license}</span>
      <a class="spectra-count" ?hidden="${!this.licenseUrl}" href="${this.licenseUrl}">
        ${this.license}
      </a>
    </div>
    <div>Spectra Count: <span class="spectra-count">${this.spectraCount} <span>${this.spectraWavelengths}</span></span></div>
  </div>
</div>

<div ?hidden="${!this.organizationName}" class="root">
  <div class="main-panel">
    <h2 class="uheader green" style="margin-bottom: 25px;">Organization</h2>
    <div>
      <div class="org-large">
        <div>
          <img src="${this.organizationImgUrl}" />
        </div>
        <div style="flex:1; padding-left: 15px">
          <h3>${this._createHtmlLink("ecosis.organization_id",this.organizationId,this.organizationName)}</h3>
          <div>${this.organizationDescription}</div>
        </div>
      </div>

      <div class="org-small">
        <div style="display: flex; align-items: center; padding-bottom: 25px;">
          <img src="${this.organizationImgUrl}" />
          <h3 style="margin:0">${this._createHtmlLink("ecosis.organization_id",this.organizationId,this.organizationName)}</h3>
        </div>
        <div>${this.organizationDescription}</div>
      </div>
    </div>
  </div>
</div>

<div class="root">
  <div class="main-panel">

    <div class="row">
      <div>
        <h2 class="uheader blue">Measurement</h2>
        <table>
          <tr>
            <td>Acquisition Method</td>
            <td>${this._createHtmlLinks("Acquisition Method",this.acquisitionMethod)}</td>
            <td><app-attr-info-popup filter="Acquisition Method"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Sample Platform</td>
            <td>${this._createHtmlLinks("Sample Platform",this.samplePlatform)}</td>
            <td><app-attr-info-popup filter="Sample Platform"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Measurement Venue</td>
            <td>${this._createHtmlLinks("Measurement Venue",this.measurementVenue)}</td>
            <td><app-attr-info-popup filter="Measurement Venue"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Target Type</td>
            <td>${this._createHtmlLinks("Target Type",this.targetType)}</td>
            <td><app-attr-info-popup filter="Target Type"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Measurement Quantity</td>
            <td>${this._createHtmlLinks("Measurement Quantity",this.measurementQuantity)}</td>
            <td><app-attr-info-popup filter="Measurement Quantity"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Index Name</td>
            <td>${this._createHtmlLinks("Index Name",this.indexName)}</td>
            <td><app-attr-info-popup filter="Index Name"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Target Status</td>
            <td>${this._createHtmlLinks("Target Status",this.targetStatus)}</td>
            <td><app-attr-info-popup filter="Target Status"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Light Source</td>
            <td>${this._createHtmlLinks("Light Source",this.lightSource)}</td>
            <td><app-attr-info-popup filter="Light Source"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Light Source Specifications</td>
            <td>${this._createHTMLText(this.lightSourceSpecifications)}</td>
            <td><app-attr-info-popup filter="Light Source Specifications"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Foreoptic Type</td>
            <td>${this._createHtmlLinks("Foreoptic Type",this.foreopticType)}</td>
            <td><app-attr-info-popup filter="Foreoptic Type"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Foreoptic Field of View</td>
            <td>${this._createHtmlLinks("Foreoptic Field of View",this.foreopticFieldOfView)}</td>
            <td><app-attr-info-popup filter=""></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Foreoptic Specifications</td>
            <td>${this._createHTMLText(this.foreopticSpecifications)}</td>
            <td><app-attr-info-popup filter="Foreoptic Specifications"></app-attr-info-popup></td>
          </tr>
        </table>
      </div>
      <div>
        <h2 class="uheader lightblue no-flex-top-pad">Theme</h2>
        <table>
          <tr>
            <td>Theme</td>
            <td>${this._createHtmlLinks("Theme",this.theme)}</td>
            <td><app-attr-info-popup filter="Theme"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Ecosystem Type</td>
            <td>${this._createHtmlLinks("Ecosystem Type",this.ecosystemType)}</td>
            <td><app-attr-info-popup filter="Ecosystem Type"></app-attr-info-popup></td>
          </tr>
        </table>

        <h2 class="uheader lightgreen top-pad">Processing Information</h2>
        <table>
          <tr>
            <td>Processing Averaged</td>
            <td>${this._createHtmlLinks("Processing Averaged",this.processingAveraged)}</td>
            <td><app-attr-info-popup filter="Processing Averaged"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Processing Interpolated</td>
            <td>${this._createHtmlLinks("Processing Interpolated",this.processingInterpolated)}</td>
            <td><app-attr-info-popup filter="Processing Interpolated"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Processing Resampled</td>
            <td>${this._createHtmlLinks("Processing Resampled",this.processingResampled)}</td>
            <td><app-attr-info-popup filter="Processing Resampled"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Processing Information Details</td>
            <td>${this._createHtmlLinks("Processing Information Details",this.processingInformationDetails)}</td>
            <td><app-attr-info-popup filter="Processing Information Details"></app-attr-info-popup></td>
          </tr>
        </table>

        <h2 class="uheader green top-pad">Instrument</h2>
        <table>
          <tr>
            <td>Instrument Manufacturer</td>
            <td>${this._createHtmlLinks("Instrument Manufacturer",this.instrumentManufacturer)}</td>
            <td><app-attr-info-popup filter="Instrument Manufacturer"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Instrument Model</td>
            <td>${this._createHtmlLinks("Instrument Model",this.instrumentModel)}</td>
            <td><app-attr-info-popup filter="Instrument Model"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Instrument Serial Number</td>
            <td>${this._createHTMLText(this.instrumentSerialNumber)}</td>
            <td><app-attr-info-popup filter="Instrument Serial Number"></app-attr-info-popup></td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</div>

<div class="root">
  <div class="main-panel">

    <div class="row">
      <div>
        <h2 class="uheader blue">Species</h2>
        <table>
          <tr>
            <td>Common Name</td>
            <td>${this._createHtmlLinks("Common Name",this.commonName)}</td>
            <td><app-attr-info-popup filter="Common Name"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Latin Genus</td>
            <td>${this._createHtmlLinks("Latin Genus",this.latinGenus)}</td>
            <td><app-attr-info-popup filter="Latin Genus"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Latin Species</td>
            <td>${this._createHtmlLinks("Latin Species",this.latinSpecies)}</td>
            <td><app-attr-info-popup filter="Latin Species"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>USDA Symbol</td>
            <td>${this._createHtmlLinks("USDA Symbol",this.usdaSymbol)}</td>
            <td><app-attr-info-popup filter="USDA Symbol"></app-attr-info-popup></td>
          </tr>
          <tr>
            <td>Vegetation Type</td>
            <td>${this._createHtmlLinks("Vegetation Type",this.vegetationType)}</td>
            <td><app-attr-info-popup filter="Vegetation Type"></app-attr-info-popup></td>
          </tr>
        </table>

      </div>
      <div>

        <h2 class="uheader lightblue no-flex-top-pad">Citation</h2>
          <table>
            <tr>
              <td>Citation</td>
              <td>${this._createHTMLText(this.citation)}</td>
              <td><app-attr-info-popup filter="Citation"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>${this.datasetDoiLabel}</td>
              <td>${this.datasetDoi}</td>
              <td><app-attr-info-popup filter=""></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Website</td>
              <td>${this._createExternalLink(this.website)}</td>
              <td><app-attr-info-popup filter="Citation DOI"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Author</td>
              <td>${this._createHtmlLinks("Author",this.author)}</td>
              <td><app-attr-info-popup filter="Author"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Author Email</td>
              <td>${this._createEmailLink(this.authorEmail)}</td>
              <td><app-attr-info-popup filter="Author Email"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Maintainer</td>
              <td>${this._createHtmlLinks("Maintainer",this.maintainer)}</td>
              <td><app-attr-info-popup filter="Maintainer"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Maintainer Email</td>
              <td>${this._createEmailLink(this.maintainerEmail)}</td>
              <td><app-attr-info-popup filter="Maintainer Email"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td>Funding Source</td>
              <td>${this._createHtmlLinks("Funding Source",this.fundingSource)}</td>
              <td><app-attr-info-popup filter="Funding Source"></app-attr-info-popup></td>
            </tr>
            <tr>
              <td style="white-space:normal">Funding Source Grant Number</td>
              <td>${this._createHTMLText(this.fundingSourceGrantNumber)}</td>
              <td><app-attr-info-popup filter="Funding Source Grant Number"></app-attr-info-popup></td>
            </tr>
          </table>
        </h2>

      </div>
    </div>

  </div>
</div>


<div class="root">
  <div class="main-panel">
    <h2 class="uheader lightgreen">Linked Resources</h2>
    <div ?hidden="${this.linkedResources.length}">
      ${this._createNotProvidedLabel()}
    </div>
    <div ?hidden="${!this.linkedResources.length}">
      ${this.linkedResources.map(t=>N`
        <div class="linked-resource">
          <div>${t.label}</div>
          <div><a href="${t.url}" style="word-break: break-all;" target="_blank" highlight>${t.url}</a></div>
        </div>
      `)}
    </div>
  </div>
</div>


<div class="root">
  <div class="main-panel">
    <h2 class="uheader lightblue">Location</h2>
    <div ?hidden="${this.hasGeometry}">
      ${this._createNotProvidedLabel()}
    </div>
    <div ?hidden="${!this.hasGeometry}" id="map"></div>
    <div ?hidden="${!L.Browser.mobile}" class="help">
      *Use two fingers to pan
    </div>
  </div>
</div>

<div class="root">
  <div class="main-panel">
    <h2 class="uheader blue">API Link</h2>
    <div><a href="${this.apiLink}" target="_blank" highlight>${this.apiLink}</a></div>
  </div>
</div>
`}.bind(this),this.reset(),this.lastSearchUrl="",this._injectModel("AppStateModel","PackageModel","OrganizationModel")}_onAppStateUpdate(t){"search"===t.page&&(this.lastSearchUrl=t.location.fullpath),"package"===t.page&&(t.location.path.length<=1||this.loadPackage(t.location.path[1]))}async loadPackage(t){this.packageId=t,this.reset();let e=await this.PackageModel.get(t);if(e.error)return console.error(e),alert(e.error.message);this.renderPackage(e.payload)}renderPackage(t){this.reset(t)}updated(t){t.has("hasGeometry")&&this.hasGeometry&&this._renderMap(),t.has("active")&&this.active&&this._updateMapSize()}_createHtmlLink(t,e,i){if(!e)return this._createNotProvidedLabel();let n=this.PackageModel.utils.getDefaultSearch();return n.filters.push({[t]:e}),n=this.PackageModel.utils.getUrlPathFromQuery(n),N`<a href="${n}" title="Filter by ${t} = ${e}" highlight>${i=i||e}</a> `}_createHtmlLinks(t,e,i){if(!e)return this._createNotProvidedLabel();Array.isArray(e)||(e=[e]),i||(i=t=>t);let n=this.PackageModel.utils.getDefaultSearch();return e=e.map(e=>{let r=se()(n);return r.filters.push({[t]:e}),{query:r=this.PackageModel.utils.getUrlPathFromQuery(r),value:i(e)}}),N`<div class="links-list">${e.map((i,n)=>n<e.length-1?N`<a href="${i.query}" title="Filter by ${t} = ${i.value}" highlight>${i.value}</a>, `:N`<a href="${i.query}" title="Filter by ${t} = ${i.value}" highlight>${i.value}</a>`)}</div> `}_createExternalLink(t){return t?N`<div class="links-list">${t.map((e,i)=>(e.match(/^http/)||(e="http://"+e),i<t.length-1?N`<a href="${e}" style="word-break: break-all;" target="_blank" highlight>${e}</a>, `:N`<a href="${e}" style="word-break: break-all;" target="_blank" highlight>${e}</a>`))}</div> `:this._createNotProvidedLabel()}_createEmailLink(t){return t?N`<div class="links-list">${t.map((e,i)=>i<t.length-1?N`<a href="mailto:${e}" highlight>${e}</a>, `:N`<a href="mailto:${e}" highlight>${e}</a>`)}</div> `:this._createNotProvidedLabel()}_createHTMLText(t){return t||this._createNotProvidedLabel()}_createNotProvidedLabel(){return N`<span class="not-provided">Not Provided</span> `}reset(t){t||(t={ecosis:{spectra_metadata_schema:{},linked_data:[]}});for(let e in t)Array.isArray(t[e])&&(t[e]=t[e].filter((i,n)=>t[e].indexOf(i)===n));this.package=t,this.organizationId=t.ecosis.organization_id,this.organizationName="",this.organizationImgUrl="",this.organizationDescription="",this.loadOrganization(t.ecosis.organization_id),this.title=t.ecosis.package_title||"",this.keywords=t.Keywords||[],this.description=t.ecosis.description,this.license=t.ecosis.license||"Not Provided",this.openData=!1,this.licenseUrl="";let e=Xt.licenses.find(t=>t.label===this.license);if(e&&(this.openData=!1!==e.open,this.licenseUrl=e.url),this.spectraCount=t.ecosis.spectra_count||0,this.spectraWavelengths="",t.ecosis.spectra_metadata_schema.units){let e=t.ecosis.spectra_metadata_schema.units.Wavelength||"",i=t.ecosis.spectra_metadata_schema.wavelengths.map(t=>parseFloat(t)),n=Math.min(...i),r=Math.max(...i);this.spectraWavelengths=`(${n}${e} to ${r}${e})`}this.acquisitionMethod=t["Acquisition Method"],this.samplePlatform=t["Sample Platform"],this.measurementVenue=t["Measurement Venue"],this.targetType=t["Target Type"],this.measurementQuantity=t["Measurement Quantity"],this.indexName=t["Index Name"],this.measurementUnits=t["Measurement Units"],this.wavelengthUnits=t["Wavelength Units"],this.targetStatus=t["Target Status"],this.lightSource=t["Light Source"],this.lightSourceSpecifications=t["Light Source Specifications"],this.foreopticType=t["Foreoptic Type"],this.foreopticFieldOfView=t["Foreoptic Field of View"],this.foreopticSpecifications=t["Foreoptic Specifications"],this.theme=t.Theme,this.ecosystemType=t["Ecosystem Type"],this.processingAveraged=t["Processing Averaged"],this.processingInterpolated=t["Processing Interpolated"],this.processingResampled=t["Processing Resampled"],this.processingInformationDetails=t["Processing Information Details"],this.instrumentManufacturer=t["Instrument Manufacturer"],this.instrumentModel=t["Instrument Model"],this.instrumentSerialNumber=t["Instrument Serial Number"],this.commonName=t["Common Name"],this.latinGenus=t["Latin Genus"],this.latinSpecies=t["Latin Species"],this.usdaSymbol=t["USDA Symbol"],this.vegetationType=t["Vegetation Type"],this.citation=t.Citation,this._renderDatasetDoi(t),this.website=t.Website,this.author=t.Author,this.authorEmail=t["Author Email"],this.maintainer=t.Maintainer,this.maintainerEmail=t["Maintainer Email"],this.fundingSource=t["Funding Source"],this.fundingSourceGrantNumber=t["Funding Source Grant Number"],t.ecosis.linked_data=t.ecosis.linked_data.map(t=>(t.url.match(/^10\./)&&(t.url="https://doi.org/"+t.url),t)),this.linkedResources=t.ecosis.linked_data.map(t=>(t.url.match(/^(http|ftp)/)||(t.url="http://"+t.url),t)),this.hasGeometry=!(!t.ecosis.geojson&&!t.ecosis.spectra_bbox_geojson),this.apiLink=window.location.protocol+"//"+window.location.host+"/api/package/"+encodeURI(t.ecosis.package_name)}_renderDatasetDoi(t){this.datasetDoiLabel="Dataset DOI",t.ecosis.doi?(this.datasetDoiLabel="EcoSIS DOI",this.datasetDoi=N`<a href="https://doi.org/${t.ecosis.doi}" target="_blank">${t.ecosis.doi}</a>`):t["Citation DOI"]?this.datasetDoi=N`<a href="https://doi.org/${t["Citation DOI"][0]}" target="_blank">${t["Citation DOI"][0]}</a>`:this.datasetDoi=this._createNotProvidedLabel()}_initMap(){this.layers=[],this.mapEle=this.shadowRoot.querySelector("#map"),this.map=L.map(this.mapEle,{scrollWheelZoom:!1,dragging:!L.Browser.mobile}).setView([42.065,-111.821],13),L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map)}_renderMap(){this.map?this.layers.forEach(function(t){t&&this.map.removeLayer(t)}.bind(this)):this._initMap(),this.layers=[],this.package.ecosis.geojson&&this.layers.push(L.geoJson(this.package.ecosis.geojson).addTo(this.map)),this.package.ecosis.spectra_bbox_geojson&&this.layers.push(L.geoJson(this.package.ecosis.spectra_bbox_geojson).addTo(this.map)),this._updateMapSize()}_updateMapSize(){this.map&&(this.map.invalidateSize(),setTimeout(()=>{this.map.invalidateSize(),this.layers.length&&this.map.fitBounds(this.layers[this.layers.length-1].getBounds())},100))}async loadOrganization(t){if(!t)return;let e=await this.OrganizationModel.get(t);if(e.id===this.package.ecosis.organization_id){if("error"===e.state)return console.error(e);this.organizationImgUrl=e.payload.image_display_url||"",this.organizationName=e.payload.display_name||"",this.organizationDescription=e.payload.description||""}}});customElements.define("app-package-download",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{packageName:{type:String},packageTitle:{type:String},includeMetadata:{type:Boolean},resources:{type:Array},downloadLink:{type:String}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}
<style>
  :host {
    display: block;
  }

  h1 {
    margin: 35px 15px 0 15px;
    font-size: 28px;
  }

  .root {
    display: flex;
    justify-content: center;
  }
  .root.column {
    flex-direction: column;
  }
  .root > div {
    width: 100%;
    max-width: 1200px;
  }

  .options {
    display: flex; 
    margin-top: 15px; 
    align-items: center;
  }

  .resource-download {
    padding-top: 5px;
    padding-bottom: 15px;
    word-break: break-all;
  }

  @media(max-width: 768px) {
    h3.no-flex-top-pad {
      margin-top: 30px;
    }

    .row {
      display: block;
    }
    .row > * {
      padding: 0;
    }
  }
</style>

<div class="root">
  <h1>${this.packageTitle}</h1>
</div>

<div class="root">
  <div class="main-panel">
    <div class="row">

      <div>
        <h3 class="uheader green">Download EcoSIS dataset as a single .csv file</h3>
        <div><a href="${this.downloadLink}" target="_blank" highlight><iron-icon icon="file-download"></iron-icon> Download Dataset</a></div>
        <div class="options">
          <div><input type="checkbox" id="include-metadata" @change="${this._onMetadataInputChange}"/></div>
          <div>&nbsp;<label for="include-metadata">Include linked ancillary metadata in download</label></div>
        </div>
      </div>
      
      <div>
        <h3 class="uheader blue no-flex-top-pad">Download original dataset resources</h3>
        ${this.resources.map(t=>N`
          <div class="resource-download">
            <a href="${t.url}" target="_blank" highlight><iron-icon icon="file-download"></iron-icon> ${t.name}</a>
          </div>
        `)}
      </div>
    </div>

  </div>
</div>

`}.bind(this),this.reset(),this._injectModel("AppStateModel","PackageModel")}_onAppStateUpdate(t){"package"===t.page&&(t.location.path.length<=1||this.loadPackage(t.location.path[1]))}async loadPackage(t){this.packageId=t,this.reset();let e=await this.PackageModel.get(t);this.renderPackage(e.payload)}reset(){this.packageName="",this.includeMetadata=!1,this.resources=[]}renderPackage(t){this.includeMetadata=!1,this.packageName=t.ecosis.package_name,this.packageTitle=t.ecosis.package_title,this.resources=t.ecosis.resources,this.updateDownloadLink()}_onMetadataInputChange(t){this.includeMetadata=!!t.currentTarget.checked,this.updateDownloadLink()}updateDownloadLink(){let t="/api/package/"+this.packageId+"/export";this.includeMetadata&&(t+="?metadata=true"),this.downloadLink=t}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ce=Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){ce.instance||(ce.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async(function(){this._text=t},100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});ce.instance=null,ce.requestAvailability=function(){ce.instance||(ce.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(ce.instance)};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
let de=null;const pe={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){de=new St({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return de&&de.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(t){return void 0===t&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return!this.hasValidator()||this._validator.validate(t)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[pe],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){ce.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(Ct.a)(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(Ct.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,i=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&i)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=pe.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ue={attached:function(){this.fire("addon-attached")},update:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[ue],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const fe=pt.a`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;fe.setAttribute("style","display: none;"),document.head.appendChild(fe.content),Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Object(ee.b)(this.attrForValue)},get _inputElement(){return Object(Ct.a)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;-1===this._addons.indexOf(e)&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===e.value||""===e.value)||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||0===e||"number"===t.type&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){var e;this.autoValidate&&t&&(e=t.validate?t.validate(this._inputElementValue):t.checkValidity(),this.invalid=!e);this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,n,r){var o="input-content";if(t)r&&(o+=" label-is-hidden"),n&&(o+=" is-invalid");else{var s=this.querySelector("label");e||r?(o+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?o+=" is-invalid":i&&(o+=" label-is-highlighted")):(s&&(this.$.labelAndInputContainer.style.position="relative"),n&&(o+=" is-invalid"))}return i&&(o+=" focused"),o},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[ue],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const me={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};i(23);var ge=i(15);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const _e={NextLabelID:1,NextAddonID:1,NextInputID:1},ve={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!ge.a&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t=t?t+" "+e:e},_onAddonAttached:function(t){var e=Object(Ct.a)(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+_e.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){Lt._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch(e){this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t,e=Object(Ct.a)(this.root).querySelector("label");e?(e.id?t=e.id:(t="paper-input-label-"+_e.NextLabelID++,e.id=t),this._ariaLabelledBy=t):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+_e.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement;t instanceof HTMLElement&&t!==document.body&&t!==document.documentElement||this._focusableElement.focus()}}},ye=[Lt,Bt,ve];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(xt.a)({is:"paper-input",_template:pt.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[ye,me],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const be={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(t){return(this._clampValue(t)-this.min)/(this.max-this.min)},_clampValue:function(t){return Math.min(this.max,Math.max(this.min,this._calcStep(t)))},_calcStep:function(t){if(t=parseFloat(t),!this.step)return t;var e=Math.round((t-this.min)/this.step);return this.step<1?e/(1/this.step)+this.min:e*this.step+this.min},_validateValue:function(){var t=this._clampValue(this.value);return this.value=this.oldValue=isNaN(t)?this.oldValue:t,this.value!==t},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(xt.a)({_template:pt.a`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[be],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(t){this.toggleClass("indeterminate",t,this.$.primaryProgress)},_transformProgress:function(t,e){var i="scaleX("+e/100+")";t.style.transform=t.style.webkitTransform=i},_mainRatioChanged:function(t){this._transformProgress(this.$.primaryProgress,t)},_progressChanged:function(t,e,i,n,r){t=this._clampValue(t),e=this._clampValue(e);var o=100*this._calcRatio(t),s=100*this._calcRatio(e);this._setSecondaryRatio(o),this._transformProgress(this.$.secondaryProgress,o),this._transformProgress(this.$.primaryProgress,s),this.secondaryProgress=t,r?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",e),this.setAttribute("aria-valuemin",i),this.setAttribute("aria-valuemax",n)},_disabledChanged:function(t){this.setAttribute("aria-disabled",t?"true":"false")},_hideSecondaryProgress:function(t){return 0===t}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const we={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=Wt._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}},xe=[$t,Lt,Wt,we];var Se=i(21);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ze=dt.b`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;ze.setAttribute("strip-whitespace",""),Object(xt.a)({_template:ze,is:"paper-slider",behaviors:[Bt,me,xe,be],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&Object(Se.c)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(t,e,i,n,r){this.setAttribute("aria-valuemin",e),this.setAttribute("aria-valuemax",i),this.setAttribute("aria-valuenow",t),this._positionKnob(100*this._calcRatio(t))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(t){this._setImmediateValue(this._calcStep(this._calcKnobPosition(t))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(t){return(this.max-this.min)*t/100+this.min},_onTrack:function(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd()}},_trackStart:function(t){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(t){this.dragging||this._trackStart(t);var e=this._isRTL?-1:1,i=Math.min(this._maxx,Math.max(this._minx,t.detail.dx*e));this._x=this._startx+i;var n=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(n);var r=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(r+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var t=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,t.transform=t.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(t){this._expandKnob(),t.preventDefault(),this.focus()},_bartrack:function(t){this._allowBarEvent(t)&&this._onTrack(t)},_barclick:function(t){this._w=this.$.sliderBar.offsetWidth;var e=this.$.sliderBar.getBoundingClientRect(),i=(t.detail.x-e.left)/this._w*100;this._isRTL&&(i=100-i);var n=this.ratio;this._setTransiting(!0),this._positionKnob(i),n===this.ratio&&this._setTransiting(!1),this.async(function(){this.fire("change",{composed:!0})}),t.preventDefault(),this.focus()},_bardown:function(t){this._allowBarEvent(t)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(t))},_knobTransitionEnd:function(t){t.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(t,e,i,n){n||this._setMarkers([]);var r=Math.round((i-e)/this.step);r>t&&(r=t),(r<0||!isFinite(r))&&(r=0),this._setMarkers(new Array(r))},_mergeClasses:function(t){return Object.keys(t).filter(function(e){return t[e]}).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(t){return!this.ignoreBarTouch||t.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(t){this._isRTL?this._incrementKey(t):this._decrementKey(t)},_rightKey:function(t){this._isRTL?this._decrementKey(t):this._incrementKey(t)},_incrementKey:function(t){this.disabled||("end"===t.detail.key?this.value=this.max:this.increment(),this.fire("change"),t.preventDefault())},_decrementKey:function(t){this.disabled||("home"===t.detail.key?this.value=this.min:this.decrement(),this.fire("change"),t.preventDefault())},_changeValue:function(t){this.value=t.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(t){t.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,we._createRipple.call(this)},_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=t?"":"none",this._ripple.holdDown=t)}});customElements.define("app-min-max-input",class extends st{static get properties(){return{min:{type:Number},max:{type:Number},absMin:{type:Number,attribute:"abs-min"},absMax:{type:Number,attribute:"abs-max"},step:{type:Number}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}
<style>
  :host {
    display: block;
  }

  .layout {
    display: flex;
  }
  .layout > div {
    flex: 1;
    padding: 3px 6px;
  }

  .label {
    font-size: 14px;
    font-style: italic;
  }

  input {
    box-sizing: border-box;
    width: 100%;
  }
</style>  


<div class="layout">
  <div>
    <div><input type="number" step="${this.step}" .value="${this.min}" @change="${this._onMinChange}" /></div>
    <div class="label">Min</div>
  </div>
  <div>
    <div><input type="number" step="${this.step}" .value="${this.max}" @change="${this._onMaxChange}" /></div>
    <div class="label">Max</div>
  </div>
</div>

`}.bind(this)}updated(t){(t.has("absMin")||t.has("absMax"))&&this.absMin&&this.absMax&&(this.step=(this.absMax-this.absMin)/10)}reset(){this.min=this.absMin,this.max=this.absMax}_onMinChange(t){let e=parseFloat(t.currentTarget.value);e>this.max?this.min=this.max:this.min=e,this._fireChange()}_onMaxChange(t){let e=parseFloat(t.currentTarget.value);e<this.min?this.max=this.min:this.max=e,this._fireChange()}_fireChange(){let t=new CustomEvent("range-value-change",{detail:{min:this.min,max:this.max}});this.dispatchEvent(t)}});customElements.define("app-spectra-viewer",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{active:{type:Boolean},packageId:{type:String},currentSearchCount:{type:Number},currentIndex:{type:Number},mc1:{type:Array},mc2:{type:Array},mobileFiltersOpen:{type:Boolean},googleChartStyles:{type:Array},packageTitle:{type:String},loading:{type:Boolean},freezeAxis:{type:Boolean},minWavelength:{type:Number},maxWavelength:{type:Number},absMinWavelength:{type:Number},absMaxWavelength:{type:Number},minReflectance:{type:Number},maxReflectance:{type:Number},absMinReflectance:{type:Number},absMaxReflectance:{type:Number},yAxisLabel:{type:Boolean},speciesFilters:{type:Array},filterCommonName:{type:Array},filterSpecies:{type:Array},filterGenus:{type:Array},selectedSpeciesFilter:{type:Array},statsMode:{type:Boolean}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}
<style>
  :host {
    display: block;
  }
  
  .chart {
    width: 100%;
    height: 400px;
  }

  @keyframes chartfadein {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .chart.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: chartfadein 400ms linear;
    font-size: 36px;
    color: var(--secondary-text-color);
  }

  paper-icon-button[chart-nav] {
    background-color: var(--light-primary-color);
    border-radius: 25px;
    color: white;
  }

  .metadata-item {
    word-break: break-all;
    flex: 0.5;
    margin: 8px;
    padding: 8px;
  }

  .layout {
    display: flex;
    position: relative;
  }

  .filters {
    width: 250px;
  }

  .filter-header {
    font-size: 18px;
    padding: 15px 0 0 5px;
    color: var(--default-primary-color);
    font-weight: bold;
  }

  .filter-header label[disabled] {
    color: var(--secondary-text-color);
    cursor: not-allowed;
  }

  .filter-panel {
    padding: 0 10px 15px 10px;
    border-bottom: 1px solid #ddd;
  }

  .filter-panel:last-child {
    border-bottom: none;
  }

  .filters-border {
    border-radius: 0 3px 3px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background-color: white;
  }

  .filters-title {
    display: flex;
    padding: 16px;
    align-items: center;
    font-weight: bold;
  }

  .filters-title paper-icon-button {
    display: none;
    color: var(--text-primary-color);
  }

  .filters-toggle {
    padding: 10px;
    display: none;
  }

  .package-title {
    padding: 16px;
    font-weight: bold;
    text-align: center;
  }

  iron-icon[icon="filter-list"] {
    vertical-align: text-bottom;
  }

  .chart-main-panel {
    padding-right: 0 !important;
    padding-left: 0 !important;
    margin-top: 1px !important;
  }

  paper-slider {
    width: 100%;
    --paper-slider-active-color : var(--light-primary-color);
    --paper-slider-secondary-color : var(--light-primary-color);
    --paper-slider-knob-color : var(--light-primary-color);
    --paper-slider-pin-color : var(--light-primary-color);
  }

  select {
    box-sizing: border-box;
    width: 100%;
    display: block;
  }

  .help {
    font-size: 14px;
    font-style: italic;
    color: var(--text-primary-color);
  }

  paper-button[reset] {
    display: block;
    color: var(--light-primary-color);
    text-align: center;
    font-weight: bold;
    border: 1px solid var(--light-primary-color);
  }

  @keyframes slidein {
    from {
      left: -260px;
    }
    to {
      left: 0px;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media(max-width: 768px) {
    .filters {
      animation: 300ms slidein;
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      overflow-y: auto;
      background-color: var(--default-background-color);
      z-index: 1000;
    }

    .filters-border {
      border: none;
      border-radius: 0;
    }

    .filters-background {
      animation: 300ms fadein;
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5);
      z-index: 999;
    }

    .filters[open] {
      display: block;
    }

    .filters-background[open] {
      display: block;
    }

    .filters-title {
      background-color: white;
    }

    .filters-title paper-icon-button {
      display: inline-block;
    }

    .filters-toggle {
      display: flex;
    }
  }
</style>

${this.googleChartStyles.map(t=>N`<link rel="stylesheet" href="${t}" />`)}

<div class="layout">
  <div class="filters-background" ?open="${this.mobileFiltersOpen}"></div>
  <div class="filters" ?open="${this.mobileFiltersOpen}">
    <div class="filters-title">
      <div style="flex: 1"><iron-icon icon="filter-list"></iron-icon> Filters</div>
      <paper-icon-button @click="${this._toggleMobileFilters}" icon="close"></paper-icon-button>
    </div>

    <div class="filters-border">
      <div>
        <div style="padding: 8px">
          <paper-button reset @click="${this._onResetClicked}">Reset</paper-button>
        </div>
        
        <div class="filter-panel">
          <div class="filter-header">
            <input id="freeze" type="checkbox" ?disabled="${this.statsMode}" @click="${this._toggleFreezeAxis}" .checked="${this.freezeAxis}" />
            <label for="freeze" ?disabled="${this.statsMode}">Freeze Axis</label>
          </div>
          <div class="help" style="padding-left: 5px">
            Keep X/Y axis filters as you navigate spectra.
          </div>
        </div>

        <div class="filter-panel">
          <div class="filter-header">Wavelength</div>
          <app-min-max-input 
            @range-value-change="${this._onWavelengthFilterChange}"
            .min=${this.minWavelength}
            .max=${this.maxWavelength}
            abs-max="${this.absMaxWavelength}"
            abs-min="${this.absMinWavelength}">
          </app-min-max-input>
        </div>

        <div class="filter-panel">
          <div class="filter-header">${this.yAxisLabel}</div>
          <app-min-max-input 
            @range-value-change="${this._onReflectanceFilterChange}"
            .min=${this.minReflectance}
            .max=${this.maxReflectance}
            abs-max="${this.absMaxReflectance}"
            abs-min="${this.absMinReflectance}">
          </app-min-max-input>
        </div>

        <div ?hidden="${!this.speciesFilters.length}" class="filter-panel" style="margin-right: 5px">
          <div class="filter-header">Species</div>
          <div>
            <select @change="${this._onSelectSpeciesFilterChange}" .value="${this.selectedSpeciesFilter}">
              ${this.speciesFilters.map(t=>N`<option value="${t}">${t}</option>`)}
            </select>
          </div>
          <iron-pages
            attr-for-selected="filter" 
            selected="${this.selectedSpeciesFilter}">
            <div filter="Common Name">
              <select @change="${this._onSelectSpeciesValueChange}">
                ${this.filterCommonName.map(t=>N`<option value="${t}">${t}</option>`)}
              </select>
            </div>
            <div filter="Latin Species">
              <select @change="${this._onSelectSpeciesValueChange}">
                ${this.filterSpecies.map(t=>N`<option value="${t}">${t}</option>`)}
              </select>
            </div>
            <div filter="Latin Genus">
              <select @change="${this._onSelectSpeciesValueChange}">
                ${this.filterGenus.map(t=>N`<option value="${t}">${t}</option>`)}
              </select>
            </div>
          </iron-pages>
        </div>

        <div class="filter-panel">
          <div class="filter-header">
            <input id="stats" type="checkbox" @click="${this._toggleStatsMode}" .checked="${this.statsMode}" />
            <label for="stats">Stats</label>
          </div>
          <div class="help" style="padding-left: 5px">
            Show stats for collection rather than individual spectra.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style="flex: 1; max-width: 1150px;">
    <div class="filters-toggle">
      <a @click="${this._toggleMobileFilters}"><iron-icon icon="filter-list"></iron-icon>  Filters</a>
    </div>
    <div class="package-title">
      ${this.packageTitle}
    </div>
    <div class="root">
      <div class="main-panel chart-main-panel">

        <div style="display: flex; align-items: center" ?hidden="${this.statsMode}">
          <paper-icon-button chart-nav
            icon="arrow-back"
            style="left: 10px;"
            @click="${this._onPreviousClicked}">
          </paper-icon-button>
          <div style="text-align:center; flex: 1">
            Spectra ${this.currentIndex+1} of ${this.currentSearchCount}
          </div>
          <paper-icon-button chart-nav
            icon="arrow-forward"
            style="right: 10px;"
            @click="${this._onNextClicked}">
          </paper-icon-button>
        </div>

        <div id="chart" class="chart" ?hidden="${this.loading}"></div>
        <div class="chart loading" ?hidden="${!this.loading}">
          <div>Loading...</div>
        </div>
        <div style="margin: 15px" ?hidden="${this.statsMode}">
          <paper-slider 
            pin 
            min="1" 
            value="${this.currentIndex+1}" 
            max="${this.currentSearchCount}"
            @change="${this._onSliderValueChange}">
          </paper-slider>
        </div>

      </div>
    </div>

    <div class="root" ?hidden="${this.statsMode}">
      <div class="main-panel">
        <h2 class="uheader lightblue">Metadata</h2>
        <div class="metadata-layout row">
          <div>
            ${this.mc1.map(t=>N`
              <div class="metadata-item">
                <div><b>${t.key}</b></div>
                <div>${t.value}</div>
              </div>
            `)}
          </div>
          <div>
            ${this.mc2.map(t=>N`
              <div class="metadata-item">
                <div><b>${t.key}</b></div>
                <div>${t.value}</div>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  
  </div>

</div>

`}.bind(this),this.active=!1,this.packageId="",this.initTimer=-1,this.redrawTimer=-1,this.currentIndex=0,this.currentSearchCount=0,this.mc1=[],this.mc2=[],this.mobileFiltersOpen=!1,this.googleChartStyles=[],this.minWavelength=0,this.maxWavelength=0,this.absMinWavelength=0,this.absMaxWavelength=0,this.speciesFilters=[],this.filterCommonName=[],this.filterSpecies=[],this.filterGenus=[],this.yAxisLabel="Y Axis",this.minReflectance=0,this.maxReflectance=0,this.absMinReflectance=0,this.absMaxReflectance=0,this.freezeAxis=!1,this.statsMode=!1,window.addEventListener("resize",()=>{this.windowInnerWidth=window.innerWidth,this.mobileFiltersOpen&&w>768&&(this.mobileFiltersOpen=!1),this.active&&this.redrawBuffered()}),this._injectModel("GoogleModel","PackageModel","SpectraModel","AppStateModel")}updated(t){t.has("active")&&this.active&&this.loadPackage()}firstUpdated(){this.chartEle=this.shadowRoot.getElementById("chart"),this.chartEles=Array.from(this.shadowRoot.querySelectorAll(".chart"))}_onAppStateUpdate(t){this.packageId="","package"===t.page&&(t.location.path.length<=1||(this.packageId=t.location.path[1],this.loadPackage()))}async loadPackage(){if(!this.packageId)return;let t=await this.PackageModel.get(this.packageId);"loaded"===t.state&&(this.qstr="",this.pkg=t.payload,this.packageTitle=this.pkg.ecosis.package_title,this.speciesFilters=[],this.filterCommonName=this.pkg["Common Name"]||[],this.filterCommonName.sort(),this.filterCommonName.length&&this.speciesFilters.push("Common Name"),this.filterSpecies=this.pkg["Latin Species"]||[],this.filterSpecies.sort(),this.filterSpecies.length&&this.speciesFilters.push("Latin Species"),this.filterGenus=this.pkg["Latin Genus"]||[],this.filterGenus.sort(),this.filterGenus.length&&this.speciesFilters.push("Latin Genus"),this.speciesFilters.length&&this.speciesFilters.unshift(""),this.selectedSpeciesFilter="",this.freezeAxis=!1,this.currentIndex=0,this.totalSpectraCount=this.pkg.ecosis.spectra_count||0,this.filters=[],this.statsMode=!1,await this.querySpectra())}querySpectra(){if(this.statsMode)return this._queryStats();this._querySpectra()}async _queryStats(){let t={filters:this.filters},e=JSON.stringify(t);if(this.smqstr===e)return void this.redraw();this.smqstr=e,this.loading=!0;let i=await this.SpectraModel.stats(t,this.packageId);if(this.loading=!1,"error"===i.state)return alert(i.error.message);if("loaded"!==i.state)return;let n,r,o=[];for(let t in i.payload){n=i.payload[t],r='<div style="padding:5px">';for(let t in n)r+="<b>"+t+"</b>: "+n[t].toFixed(5)+"<br />";r+="</div>",o.push([parseFloat(t),n.avg,r,n.min,n.max])}this.renderStats(o)}async _querySpectra(){let t={filters:this.filters,page:this.currentIndex,itemsPerPage:1},e=JSON.stringify(t);if(this.qstr===e)return void this.redraw();this.qstr=e,this.loading=!0;let i=await this.SpectraModel.search(t,this.packageId);if(this.loading=!1,"error"===i.state)return alert(i.error.message);if("loaded"===i.state){if(0===i.payload.items.length)return alert("Failed to load spectra");this.currentSearchCount=i.payload.total,this.renderSpectra(i.payload.items[0])}}async renderSpectra(t){await this.GoogleModel.loadCharts(),this._googleCssInjected||(this.googleChartStyles=Array.from(document.querySelectorAll('head link[rel="stylesheet"]')).filter(t=>t.href.match(/www.gstatic.com\/charts/)).map(t=>t.href),this._googleCssInjected=!0),this.chart||(this.chart=new google.visualization.LineChart(this.chartEle)),this.metadata=[],this.ecosisMetadata=[],this.wavelengths=[],this.allWavelengths=[];let e=Number.MAX_VALUE,i=Number.MIN_VALUE,n=Number.MAX_VALUE,r=Number.MIN_VALUE;for(let o in t)if("datapoints"===o)for(let o in t.datapoints){let s=parseFloat(o),a=parseFloat(t.datapoints[o]);s<e&&(e=s),s>i&&(i=s),a<n&&(n=a),a>r&&(r=a),this.allWavelengths.push([s,a])}else if("ecosis"===o)for(let e in t.ecosis)this.ecosisMetadata.push({key:e,value:t.ecosis[e]});else{if("_id"===o)continue;this.metadata.push({key:o,value:t[o]})}this.allWavelengths.sort((t,e)=>t[0]>e[0]?1:t[0]<e[0]?-1:0),this.freezeAxis||(this.minReflectance=n,this.maxReflectance=r),this.absMinReflectance=n,this.absMaxReflectance=r,this.updateChartOptions(),this.freezeAxis||(this.maxWavelength=i,this.minWavelength=e),this.absMaxWavelength=i,this.absMinWavelength=e,this.filterWavelenths();let o=[],s=[];this.metadata.forEach((t,e)=>{e%2==0?o.push(t):s.push(t)}),this.mc1=o,this.mc2=s,this.redraw()}renderStats(t){this.allWavelengths=t,this.allWavelengths.sort((t,e)=>t[0]>e[0]?1:t[0]<e[0]?-1:0);let e=Number.MAX_VALUE,i=Number.MIN_VALUE,n=Number.MAX_VALUE,r=Number.MIN_VALUE;for(let o of t)o[0]<e&&(e=o[0]),o[0]>i&&(i=o[0]),o[3]<n&&(n=o[3]),o[4]>r&&(r=o[4]);this.freezeAxis||(this.minReflectance=n,this.maxReflectance=r),this.absMinReflectance=n,this.absMaxReflectance=r,this.updateChartOptions(),this.freezeAxis||(this.maxWavelength=i,this.minWavelength=e),this.absMaxWavelength=i,this.absMinWavelength=e,this.filterWavelenths(),this.redraw()}redrawBuffered(){-1!==this.redrawTimer&&clearTimeout(this.redrawTimer),this.redrawTimer=setTimeout(()=>{this.redrawTimer=-1,this.redraw()},150)}redraw(){if(!this.chart||!this.chartData||!this.chartOptions)return;this.windowInnerWidth||(this.windowInnerWidth=window.innerWidth);let t=this.windowInnerWidth>1400?1400:this.windowInnerWidth;t-=24,this.windowInnerWidth>768?t-=250:t-=12,this.chartEles.forEach(e=>e.style.width=t+"px"),requestAnimationFrame(()=>this.chart.draw(this.chartData,this.chartOptions))}updateChartOptions(){let t={legend:{position:"none"},series:{0:{color:"#4db6ac"},1:{color:"#64b5f6"},2:{color:"#2286c3"}},vAxis:{},hAxis:{},tooltip:{isHtml:!0}};this.minReflectance===this.absMinReflectance&&this.maxReflectance===this.absMaxReflectance||(t.vAxis.viewWindow={min:this.minReflectance,max:this.maxReflectance});let e="";this.pkg["Measurement Quantity"]&&1===this.pkg["Measurement Quantity"].length&&(e=this.pkg["Measurement Quantity"][0]),this.pkg["Measurement Units"]&&1===this.pkg["Measurement Units"].length&&(e+=" ("+this.pkg["Measurement Units"][0]+")"),t.vAxis.title=e,this.yAxisLabel=e||"Y Axis",this.pkg["Wavelength Units"]&&1===this.pkg["Wavelength Units"].length&&("other"!==(e=this.pkg["Wavelength Units"][0])?t.hAxis.title="Wavelength ("+e+")":this.pkg["Wavelength Units Other"]&&1===this.pkg["Wavelength Units Other"].length&&(t.hAxis.title="Wavelength ("+this.pkg["Wavelength Units Other"][0]+")")),this.chartOptions=t}filterWavelenths(){this.wavelengths=this.allWavelengths.filter(t=>!(t[0]<this.minWavelength||t[0]>this.maxWavelength)).map(t=>((t=t.slice(0))[0]=t[0]+"",t)),this.statsMode?(this.chartData=new google.visualization.DataTable,this.chartData.addColumn("string","Wavelength"),this.chartData.addColumn("number","Average"),this.chartData.addColumn({id:"tooltip",type:"string",role:"tooltip",p:{html:!0}}),this.chartData.addColumn("number","Min"),this.chartData.addColumn("number","Max"),this.chartData.addRows(this.wavelengths)):(this.wavelengths.unshift(["Wavelength","Reflectance"]),this.chartData=google.visualization.arrayToDataTable(this.wavelengths))}_onWavelengthFilterChange(t){this.minWavelength=t.detail.min,this.maxWavelength=t.detail.max,this.filterWavelenths(),this.redraw()}_onPreviousClicked(){this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.currentSearchCount-1),this.querySpectra()}_onNextClicked(){this.currentIndex++,this.currentIndex===this.currentSearchCount&&(this.currentIndex=0),this.querySpectra()}_toggleMobileFilters(){this.mobileFiltersOpen=!this.mobileFiltersOpen}_onSliderValueChange(t){this.currentIndex=t.currentTarget.value-1,this.querySpectra()}_onSelectSpeciesFilterChange(t){if(this.selectedSpeciesFilter=t.currentTarget.value,this.selectedSpeciesFilter){let t="/^"+this.pkg[this.selectedSpeciesFilter][0]+"$/";this.filters=[{[this.selectedSpeciesFilter]:t}]}else this.filters=[];this.currentIndex=0,this.querySpectra()}_onSelectSpeciesValueChange(t){let e=t.currentTarget.value;this.filters=[{[this.selectedSpeciesFilter]:"/^"+e+"$/"}],this.currentIndex=0,this.querySpectra()}_onReflectanceFilterChange(t){this.minReflectance=t.detail.min,this.maxReflectance=t.detail.max,this.updateChartOptions(),this.redraw()}_toggleFreezeAxis(){this.freezeAxis=!this.freezeAxis,this.freezeAxis||(this.minReflectance=this.absMinReflectance,this.maxReflectance=this.absMaxReflectance,this.minWavelength=this.absMinWavelength,this.maxWavelength=this.absMaxWavelength),this.filterWavelenths(),this.updateChartOptions(),this.redraw()}_toggleStatsMode(){this.statsMode=!this.statsMode,this.qstr="",this.smqstr="",this.querySpectra()}_onResetClicked(){this.freezeAxis=!1,this.minReflectance=this.absMinReflectance,this.maxReflectance=this.absMaxReflectance,this.minWavelength=this.absMinWavelength,this.maxWavelength=this.absMaxWavelength,this.currentIndex=0,this.selectedSpeciesFilter="",this.filters=[],this.statsMode=!1,this.querySpectra()}});customElements.define("app-page-result",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{view:{type:String}}}constructor(){super(),this.render=function(){return N`

<style>
  :host {
    display: block;
  }

  .tabs {
    display: flex;
  }

  .tabs > div {
    flex: 1;
    padding: 15px 15px 13px 15px;
    text-align: center;
    cursor: pointer;
    background-color: white;
    border-bottom: 2px solid white;
  }

  .tabs > div[active] {
    border-bottom: 2px solid var(--default-primary-color);
    color: var(--default-primary-color);
    font-weight: bold;
  }

  @media(max-width: 500px) {
    .hidden-sm {
      display: none;
    }
  }

</style>  

<div class="tabs">
  <div 
    ?active="${"metadata"===this.view}" 
    @click="${this._onTabClicked}" 
    @keyup="${this._onTabKeyup}" 
    view="metadata"
    tabindex="1">
    Metadata
  </div>
  <div 
    ?active="${"download"===this.view}" 
    @click="${this._onTabClicked}" 
    @keyup="${this._onTabKeyup}" 
    view="download"
    tabindex="1">
    Download
  </div>
  <div 
    ?active="${"viewer"===this.view}" 
    @click="${this._onTabClicked}"
    @keyup="${this._onTabKeyup}" 
    view="viewer"
    tabindex="1">
    <span class="hidden-sm">Spectra </span>Viewer
  </div>
</div>

<iron-pages 
  selected-attribute="active"
  attr-for-selected="view" 
  selected="${this.view}">
  <app-package-metadata view="metadata"></app-package-metadata>
  <app-package-download view="download"></app-package-download>
  <app-spectra-viewer view="viewer"></app-spectra-viewer>
</iron-pages>

<div class="root">
  <div style="padding: 75px 15px 40px 15px">
    <div itemtype="http://schema.org/Organization" itemprop="provider">
      <h2 itemprop="name" style="margin-bottom: 0px">EcoSIS</h2>
      <div class="help-block" style="margin-bottom: 0px" itemprop="description">Ecosystem Spectral Information System</div>
      <div>
        <a href="https://ecosis.org" itemprop="url" highlight>https://ecosis.org</a> |
        <a href="http://cstars.github.io/ecosis/" target="_blank" highlight>EcoSIS API Documentation</a> |
        <a href="mailto:info@ecosis.org" itemprop="email" highlight>info@ecosis.org</a> |
        <a href="mailto:help@ecosis.org" highlight>help@ecosis.org</a>

      </div>
    </div>
  </div>
</div>
`}.bind(this),this.view="metadata",this._injectModel("AppStateModel")}_onAppStateUpdate(t){t.page!==this.page&&(this.view="metadata",this.page=t.page)}_onTabClicked(t){this.view=t.currentTarget.getAttribute("view")}_onTabKeyup(t){13===t.which&&this._onTabClicked(t)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(xt.a)({is:"paper-icon-button",_template:pt.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[xe],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var i=this.getAttribute("aria-label");i&&e!=i||this.setAttribute("aria-label",t)}});customElements.define("app-header",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{loading:{type:Boolean}}}constructor(){super(),this.loading=!1,this.loadingCount=0,this.loadingTimer=-1,this._injectModel("PackageModel","SpectraModel"),this.loadingRequests={package:!1,packageSearch:!1,spectraSearch:!1,spectraStats:!1},this.render=function(){return N`

${at(ht.a)}
<style>
  :host {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
  }

  /* https://cssgradient.io/ */
  .header {
    background: rgb(0,134,125);
    background: linear-gradient(90deg, rgba(0,134,125,1) 15%, rgba(77,182,179,1) 100%);
  }

  /*.header {
    /* background: rgb(0,134,125);
    background: linear-gradient(90deg, rgba(0,134,125,1) 0%, rgba(77,182,179,1) 50%, rgba(100,181,246,1) 100%);
  } */

  .btns {
    padding-left: 15px;
    display: flex;
    color: white;
  }

  .btns a, .btns a:visited, a[title], a[title]:visited  {
    color: white;
    text-decoration: none;
  }


  paper-progress {
    --paper-progress-active-color : var(--light-secondary-color);
    --paper-progress-secondary-color : var(--light-secondary-color);
    --paper-progress-container-color : transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
  }
</style>

<div class="header" sandbox$="[[sandbox]]">
  <div main-title>
    <a href="/" title>EcoSIS</a> 
    <span id="titleExtra"></span> 
    <small>Ecological Spectral Information System</small>
  </div>
  <div class="btns">
    <paper-icon-button icon="more-vert" @click="${this._onMenuIconClick}"></paper-icon-button>
  </div>
</div>

<div style="position: relative">
  <paper-progress indeterminate class="slow" ?hidden="${!this.loading}" ></paper-progress>
</div>
`}.bind(this)}_onPackageUpdate(t){this._handleUpdateEvent(t,"spectra")}_onPackageSearchUpdate(t){this._handleUpdateEvent(t,"packageSearch")}_onSpectraSearchUpdate(t){this._handleUpdateEvent(t,"spectraSearch")}_onSpectraStatsUpdate(t){this._handleUpdateEvent(t,"spectraStats")}_handleUpdateEvent(t,e){"loading"===t.state?this.loadingRequests[e]=!0:this.loadingRequests[e]=!1,-1!==this.loadingTimer&&clearTimeout(this.loadingTimer),this.loadingTimer=setTimeout(()=>{this.loadingTimer=-1,this.loading=this._isLoading()},100)}_isLoading(){return Object.values(this.loadingRequests).filter(t=>t).length>0}_onMenuIconClick(){this.dispatchEvent(new CustomEvent("open-menu"))}});customElements.define("ecosis-search-header",class extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{suggestions:{type:Array},filters:{type:Array},text:{type:String}}}constructor(){super(),this.render=function(){return N`

<style>
  :host {
    display: block;
  }
</style>

<app-search-header
  .text="${this.text}"
  .filters="${this.filters}"
  .suggestions="${this.suggestions}"
  @keyup="${this._onInputKeyup}"
  @text-search="${this._onTextSearch}"
  @suggestion-selected="${this._onSuggestionSelected}"
  @remove-filter="${this._onRemoveFilter}">
</app-search-header>

`}.bind(this),this.page="home",this.suggestions=[],this.filters=[],this.text="",this.suggestTimer=-1,this._injectModel("AppStateModel","PackageModel")}_onAppStateUpdate(t){this.page=t.page;let e="home"===t.page||"search"===t.page;this.style.display=e?"block":"none"}_onInputKeyup(t){if(27!==t.which)return t.currentTarget.value?void this._bufferedSuggest(t.currentTarget.value):(-1!==this.suggestTimer&&clearTimeout(this.suggestTimer),void(this.suggestions=[]))}_bufferedSuggest(t){-1!==this.suggestTimer&&clearTimeout(this.suggestTimer),this.suggestTimer=setTimeout(()=>{this.suggestTimer=-1,this.PackageModel.suggest(t)},100)}_onKeywordSuggestUpdate(t){"loading"===t.state&&(this.currentSuggestId=t.metadata.searchId),"loaded"===t.state&&this.currentSuggestId===t.metadata.searchId&&this.renderSuggestions(t.payload)}renderSuggestions(t){this.suggestions=t.map(t=>(t.label=N`<span style="font-size: 18px">${t.value}</span> <span style="font-size: 12px; color: #aaa">${this.PackageModel.utils.getFilterLabel(t.key)}</span>`,t))}_onTextSearch(t){let e=this.PackageModel.getCurrentSearchQuery();e.text=t.detail,e.page=0,this._search(e)}_onSuggestionSelected(t){this.text="",this.suggestions=[];let e=this.PackageModel.getCurrentSearchQuery(),i=JSON.stringify({[t.detail.key]:t.detail.value});if(e.page=0,-1!==e.filters.findIndex(t=>JSON.stringify(t)===i))return console.warn("Filter already in search",t.detail);e.text="",e.filters.push({[t.detail.key]:t.detail.value}),this._search(e)}_onRemoveFilter(t){let e=this.PackageModel.getCurrentSearchQuery(),i=JSON.stringify({[t.detail.key]:t.detail.value});e.page=0;let n=e.filters.findIndex(t=>JSON.stringify(t)===i);if(-1===n)return console.warn("Unable to find filter to remove: ",t.detail);e.filters.splice(n,1),this._search(e)}_search(t){this.AppStateModel.setLocation(this.PackageModel.utils.getUrlPathFromQuery(t))}_onPackageSearchUpdate(t){this.text=t.metadata.query.text,this.filters=t.metadata.query.filters.map(t=>{let e=Object.keys(t);return 0===e.length?t:e[0]===APP_CONFIG.geoFilter?{label:"Location Filter",noValueLabel:!0,key:e[0],value:t[e[0]]}:{label:this.PackageModel.utils.getFilterLabel(e[0]),key:e[0],value:t[e[0]]}})}}),i.d(e,"default",function(){return Ce});class Ce extends(Mixin(st).with(LitCorkUtils)){static get properties(){return{page:{type:String},openMenu:{type:Boolean},anchorTabIndex:{type:Number},appRoutes:{type:Array},lastSearchUrl:{type:String}}}constructor(){super(),this.render=function(){return N`

${at(ht.a)}
<style>
  :host {
    display: block;
    height: 100vh;
  }

  .menu-root {
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .main-content {
    will-change: transition;
    transform: translate(0px, 0px);
    transition: transform 250ms ease-out;
    position: absolute;
    top: 61px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .main-content[open-menu] {
    transform: translate(-150px, 0px);
  }

  .menu {
    will-change: transition;
    transition: transform 250ms ease-out;
    transform: translate(150px, 0px);
    z-index: 0;
    position: absolute;
    top: 61px;
    right: 0;
    bottom: 0;
    width: 150px;
    background: white;
    box-shadow: 0 0 5px #ccc inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }

  .menu[open-menu] {
    transform: translate(0px, 0px);
  }

  .menu a {
    display: block;
    text-align: center;
    font-size: 17px;
    margin-top: 20px;
  }

  .menu iron-icon {
    --iron-icon-width: 32px;
    --iron-icon-height: 32px;
  }

  .menu a span {
    display: block;
  }
</style>  

<app-route .appRoutes="${this.appRoutes}"></app-route>
<app-header @open-menu="${this._onOpenMenu}"></app-header>
<div class="menu-root">
  <div class="menu" ?open-menu="${this.openMenu}">
    <a href="/" tabindex="${this.anchorTabIndex}">
      <div>
        <iron-icon icon="home"></iron-icon> 
      </div>
      <span>Home</span>
    </a>
    <a href="${this.lastSearchUrl}" tabindex="${this.anchorTabIndex}">
      <iron-icon icon="search"></iron-icon> 
      <span>Search</span>
    </a>
    <a href="https://data.ecosis.org" target="_blank" tabindex="${this.anchorTabIndex}">
      <iron-icon icon="create"></iron-icon> 
      <span>Create/Edit</span>
    </a>
    <a href="${APP_CONFIG.ecosmlUrl}" target="_blank" tabindex="${this.anchorTabIndex}">
      <iron-icon icon="code"></iron-icon> 
      <span>Models</span>
    </a>
    <a href="https://github.com/CSTARS/ecosis/issues/new" target="_blank" tabindex="${this.anchorTabIndex}">
      <iron-icon icon="bug-report"></iron-icon> 
      <span>Report Issue</span>
    </a>
  </div>
  <div class="main-content" ?open-menu="${this.openMenu}">
    <ecosis-search-header></ecosis-search-header>
    <iron-pages 
      selected-attribute="active"
      attr-for-selected="page" 
      selected="${this.page}">
      <app-page-home page="home"></app-page-home>
      <app-page-search page="search"></app-page-search>
      <app-page-result page="package"></app-page-result>
    </iron-pages>
  </div>
</div>



`}.bind(this),this.appRoutes=APP_CONFIG.appRoutes,this.openMenu=!1,this.page="",this.lastSearchUrl="/search",window.addEventListener("click",t=>{if(this.openMenu)return t.composedPath?void(t.composedPath().indexOf(this.menuEle)>-1||t.composedPath().indexOf(this.appHeaderEle)>-1||(this.openMenu=!1)):console.warn("Browser does not support event.path")}),this._injectModel("AppStateModel","PackageModel","OrganizationModel")}firstUpdated(){this.menuEle=this.shadowRoot.querySelector(".menu"),this.appHeaderEle=this.shadowRoot.querySelector("app-header"),this.mainEle=this.shadowRoot.querySelector(".main-content"),this.seoEle=document.querySelector("#seo-jsonld"),this.titleEle=document.querySelector("title"),this.keywordsEle=document.querySelector('meta[name="keywords"]'),this.descriptionEle=document.querySelector('meta[name="description"]')}async _onAppStateUpdate(t){this.page=t.page,this.openMenu=!1,"search"===t.page&&(this.lastSearchUrl=t.location.fullpath),this.mainEle.scrollTo?this.mainEle.scrollTo(0,0):this.mainEle.scrollTop=0;try{if("package"!==this.page)this.seoEle.innerHTML="",this.titleEle.innerHTML=APP_CONFIG.seo.title,this.keywordsEle.setAttribute("content",APP_CONFIG.seo.keywords),this.descriptionEle.setAttribute("content",APP_CONFIG.seo.description);else{let e=await this.PackageModel.get(t.location.path[1]);e=e.payload;let i=await this.OrganizationModel.get(e.ecosis.organization_id);e.organization_info=i.payload;let n=Object(Xt.jsonldTransform)(e);this.seoEle.innerHTML=JSON.stringify(n.ldjson,"  ","  "),this.titleEle.innerHTML=n.title,this.keywordsEle.setAttribute("content",n.keywords),this.descriptionEle.setAttribute("content",n.description)}}catch(t){console.error("Failed to set jsonld seo tag",t)}}_onOpenMenu(){this.openMenu=!this.openMenu}updated(t){t.has("openMenu")&&(this.anchorTabIndex=this.openMenu?1:-1)}}customElements.define("ecosis-search",Ce)},function(t,e,i){"use strict";i.r(e);var n=i(15),r=(i(3),i(5)),o=i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)({is:"iron-location",_template:null,properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged"),this.listen(window,"location-changed","_urlChanged"),this.listen(window,"popstate","_urlChanged"),this.listen(document.body,"click","_globalOnClick"),this._lastChangedAt=window.performance.now()-(this.dwellTime-200),this._initialized=!0,this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged"),this.unlisten(window,"location-changed","_urlChanged"),this.unlisten(window,"popstate","_urlChanged"),this.unlisten(document.body,"click","_globalOnClick"),this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(this.__location.pathname),this.query=this.__location.search.substring(1),this._dontUpdateUrl=!1,this._updateUrl()},_getUrl:function(){var t=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),e="";this.query&&(e="?"+this.query.replace(/\#/g,"%23"),e=this.encodeSpaceAsPlusInQuery?e.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+"):e.replace(/\+/g,"%2B").replace(/ /g,"%20"));var i="";return this.hash&&(i="#"+window.encodeURI(this.hash)),t+e+i},_updateUrl:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(this.__location.pathname)||this.query!==this.__location.search.substring(1)||this.hash!==window.decodeURIComponent(this.__location.hash.substring(1)))){var t=this._getUrl(),e=new URL(t,this.__location.protocol+"//"+this.__location.host).href,i=window.performance.now(),n=this._lastChangedAt+this.dwellTime>i;this._lastChangedAt=i,n?window.history.replaceState({},"",e):window.history.pushState({},"",e),this.fire("location-changed",{},{node:window})}},_globalOnClick:function(t){if(!t.defaultPrevented){var e=this._getSameOriginLinkHref(t);e&&(t.preventDefault(),e!==this.__location.href&&(window.history.pushState({},"",e),this.fire("location-changed",{},{node:window})))}},_getSameOriginLinkHref:function(t){if(0!==t.button)return null;if(t.metaKey||t.ctrlKey||t.shiftKey)return null;for(var e=Object(o.a)(t).path,i=null,n=0;n<e.length;n++){var r=e[n];if("A"===r.tagName&&r.href){i=r;break}}if(!i)return null;if("_blank"===i.target)return null;if(("_top"===i.target||"_parent"===i.target)&&window.top!==window)return null;if(i.download)return null;var s,a,l,h=i.href;if(s=null!=document.baseURI?new URL(h,document.baseURI):new URL(h),a=this.__location.origin?this.__location.origin:this.__location.protocol+"//"+this.__location.host,s.origin)l=s.origin;else{var c=s.host,d=s.port,p=s.protocol;("https:"===p&&"443"===d||"http:"===p&&"80"===d)&&(c=s.hostname),l=p+"//"+c}if(l!==a)return null;var u=s.pathname+s.search+s.hash;return"/"!==u[0]&&(u="/"+u),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(u)?null:new URL(u,this.__location.href).href},_makeRegExp:function(t){return RegExp(t)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)({is:"iron-query-params",_template:null,properties:{paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:!0},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0,this.paramsObject=this._decodeParams(this.paramsString),this._dontReact=!1},paramsObjectChanged:function(){this._dontReact||(this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27"))},_encodeParams:function(t){var e=[];for(var i in t){var n=t[i];""===n?e.push(encodeURIComponent(i)):n&&e.push(encodeURIComponent(i)+"="+encodeURIComponent(n.toString()))}return e.join("&")},_decodeParams:function(t){for(var e={},i=(t=(t||"").replace(/\+/g,"%20")).split("&"),n=0;n<i.length;n++){var r=i[n].split("=");r[0]&&(e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||""))}return e}});var s=i(1);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const a={properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams"),this.linkPaths("queryParams","route.__queryParams")},_locationChanged:function(){this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams||(this.route={prefix:"",path:this.path,__queryParams:this.queryParams})},_routeChanged:function(){this.route&&(this.path=this.route.prefix+this.route.path)},_routeQueryParamsChanged:function(t){this.route&&(this.queryParams=t)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(r.a)({_template:s.a`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="[[urlSpaceRegex]]" dwell-time="[[dwellTime]]">
    </iron-location>
  `,is:"app-location",properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:"__onPathChanged"},_isReady:{type:Boolean},dwellTime:{type:Number}},behaviors:[a],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){this._isReady&&(this.useHashAsPath?this.__hash=this.path:this.__path=this.path)}});var l=i(11),h=i(48),c=i.n(h),d=i(39),p=i.n(d);customElements.define("app-route",class extends(Object(l.Mixin)(n.a).with(l.EventInterface,p.a)){static get template(){return n.b`<app-location url-space-regex="[[appRoutesRegex]]"></app-location>`}static get properties(){return{route:{type:Object},appRoutes:{type:Array,value:[]},appRoutesRegex:{type:RegExp,computed:"_makeRegex(appRoutes)"},debug:{type:Boolean,value:!1}}}constructor(){super(),this.AppStateModel.setLocationElement(this),this._setLocationObject();let t=window.location.href.replace(window.location.origin,"");window.history.replaceState({location:this.location},null,t),this._onLocationChange(),window.addEventListener("location-changed",t=>{this._replaceHistoryState(),this._onLocationChange()}),window.addEventListener("popstate",t=>{this.location=t.state.location,this._onLocationChange()})}ready(){super.ready(),this.debug&&this._initDebugging()}_replaceHistoryState(t){this._setLocationObject(t),window.history.replaceState({location:this.location},null,this.location.fullpath)}_initDebugging(){let t=history.pushState,e=history.replaceState;history.pushState=function(e){let i=new CustomEvent("history-push-state",{detail:e});return window.dispatchEvent(i),t.apply(history,arguments)},history.replaceState=function(t){let i=new CustomEvent("history-replace-state",{detail:t});return window.dispatchEvent(i),e.apply(history,arguments)},window.addEventListener("history-push-state",t=>console.log("history-push-state",t.detail)),window.addEventListener("history-replace-state",t=>console.log("history-replace-state",t.detail))}setWindowLocation(t){if("object"==typeof t){let e=t.path;if(t.qs){let i=[];for(let e in t.qs)i.push(encodeURIComponent(e)+"="+encodeURIComponent(t.qs[e]));e+="?"+i.join("&")}t.hash&&(e+="#"+t.hash),t=e}window.history.state&&window.history.state.location&&window.history.state.location.fullpath===t||(window.history.pushState({},null,t),this._replaceHistoryState(t),this._onLocationChange())}_makeRegex(){let t=this.appRoutes.map(t=>"/"+t+"(/.*)?");t.push("/");let e="^("+t.join("|")+")$";return e=new RegExp(e,"i")}_setLocationObject(t){return this.location={fullpath:t||window.location.href.replace(window.location.origin,""),pathname:window.location.pathname,path:window.location.pathname.replace(/(^\/|\/$)/g,"").split("/"),query:c.a.parse(window.location.search)},location}_onLocationChange(){this._setAppState({location:this.location})}})}]);