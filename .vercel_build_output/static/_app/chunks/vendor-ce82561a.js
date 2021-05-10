function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(r)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(t,e,n,r){if(t){const i=l(t,e,n,r);return t[0](i)}}function l(t,e,r,i){return t[1]&&i?n(r.ctx.slice(),t[1](i(e))):r.ctx}function h(t,e,n,r,i,s,o){const a=function(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|i[r];return t}return e.dirty|i}return e.dirty}(e,r,i,s);if(a){const i=l(e,n,r,o);t.p(i,a)}}function d(t,e,n=e){return t.set(n),e}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),g=f?t=>requestAnimationFrame(t):t;const m=new Set;function y(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&g(y)}function v(t){let e;return 0===m.size&&g(y),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}let w=!1;const b=new Set;function E(t,e){w&&b.delete(e),e.parentNode!==t&&t.appendChild(e)}function T(t,e,n){w&&b.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function I(t){w?b.add(t):t.parentNode&&t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function C(){return k(" ")}function A(){return k("")}function D(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function R(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t){return Array.from(t.childNodes)}function M(t,e,n,r){for(;t.length>0;){const r=t.shift();if(r.nodeName===e){let t=0;const e=[];for(;t<r.attributes.length;){const i=r.attributes[t++];n[i.name]||e.push(i.name)}for(let n=0;n<e.length;n++)r.removeAttribute(e[n]);return r}I(r)}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):S(e)}function L(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return k(e)}function x(t){return L(t," ")}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function U(t,e){t.value=null==e?"":e}function V(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function F(t,e,n){t.classList[n?"add":"remove"](e)}function $(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const q=new Set;let B,j=0;function H(t,e,n,r,i,s,o,a=0){const c=16.666/r;let u="{\n";for(let m=0;m<=1;m+=c){const t=e+(n-e)*s(m);u+=100*m+`%{${o(t,1-t)}}\n`}const l=u+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${a}`,d=t.ownerDocument;q.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(S("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,j+=1,h}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-r.length;i&&(t.style.animation=r.join(", "),j-=i,j||g((()=>{j||(q.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),q.clear())})))}function W(t){B=t}function K(){if(!B)throw new Error("Function called outside component initialization");return B}function G(t){K().$$.on_mount.push(t)}function Y(t){K().$$.after_update.push(t)}function Q(){const t=K();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=$(e,n);r.slice().forEach((e=>{e.call(t,i)}))}}}function X(t,e){K().$$.context.set(t,e)}function J(t){return K().$$.context.get(t)}const Z=[],tt=[],et=[],nt=[],rt=Promise.resolve();let it=!1;function st(){it||(it=!0,rt.then(lt))}function ot(t){et.push(t)}function at(t){nt.push(t)}let ct=!1;const ut=new Set;function lt(){if(!ct){ct=!0;do{for(let t=0;t<Z.length;t+=1){const e=Z[t];W(e),ht(e.$$)}for(W(null),Z.length=0;tt.length;)tt.pop()();for(let t=0;t<et.length;t+=1){const e=et[t];ut.has(e)||(ut.add(e),e())}et.length=0}while(Z.length);for(;nt.length;)nt.pop()();it=!1,ct=!1,ut.clear()}}function ht(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}let dt;function ft(){return dt||(dt=Promise.resolve(),dt.then((()=>{dt=null}))),dt}function pt(t,e,n){t.dispatchEvent($(`${e?"intro":"outro"}${n}`))}const gt=new Set;let mt;function yt(){mt={r:0,c:[],p:mt}}function vt(){mt.r||s(mt.c),mt=mt.p}function wt(t,e){t&&t.i&&(gt.delete(t),t.i(e))}function bt(t,e,n,r){if(t&&t.o){if(gt.has(t))return;gt.add(t),mt.c.push((()=>{gt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const Et={duration:0};function Tt(n,r,i){let s,a,c=r(n,i),u=!1,l=0;function h(){s&&z(n,s)}function d(){const{delay:r=0,duration:i=300,easing:o=e,tick:d=t,css:f}=c||Et;f&&(s=H(n,0,1,i,r,o,f,l++)),d(0,1);const g=p()+r,m=g+i;a&&a.abort(),u=!0,ot((()=>pt(n,!0,"start"))),a=v((t=>{if(u){if(t>=m)return d(1,0),pt(n,!0,"end"),h(),u=!1;if(t>=g){const e=o((t-g)/i);d(e,1-e)}}return u}))}let f=!1;return{start(){f||(z(n),o(c)?(c=c(),ft().then(d)):d())},invalidate(){f=!1},end(){u&&(h(),u=!1)}}}const It="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function _t(t,e){bt(t,1,1,(()=>{e.delete(t.key)}))}function St(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const t in o)t in a||(r[t]=1);for(const t in a)i[t]||(n[t]=a[t],i[t]=1);t[s]=a}else for(const t in o)i[t]=1}for(const o in r)o in n||(n[o]=void 0);return n}function kt(t){return"object"==typeof t&&null!==t?t:{}}function Ct(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function At(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function Nt(t,e,n,i){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=t.$$;a&&a.m(e,n),i||ot((()=>{const e=c.map(r).filter(o);u?u.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(ot)}function Rt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(e,n,r,o,a,c,u=[-1]){const l=B;W(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:n.context||[]),callbacks:i(),dirty:u,skip_bound:!1};let d=!1;if(h.ctx=r?r(e,n.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),d&&function(t,e){-1===t.$$.dirty[0]&&(Z.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),d=!0,s(h.before_update),h.fragment=!!o&&o(h.ctx),n.target){if(n.hydrate){w=!0;const t=O(n.target);h.fragment&&h.fragment.l(t),t.forEach(I)}else h.fragment&&h.fragment.c();n.intro&&wt(e.$$.fragment),Nt(e,n.target,n.anchor,n.customElement),function(){w=!1;for(const t of b)t.parentNode.removeChild(t);b.clear()}(),lt()}W(l)}class Mt{$destroy(){Rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Lt=[];function xt(e,n=t){let r;const i=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!Lt.length;for(let n=0;n<i.length;n+=1){const t=i[n];t[1](),Lt.push(t,e)}if(t){for(let t=0;t<Lt.length;t+=2)Lt[t][0](Lt[t+1]);Lt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.push(c),1===i.length&&(r=n(s)||t),o(e),()=>{const t=i.indexOf(c);-1!==t&&i.splice(t,1),0===i.length&&(r(),r=null)}}}}var Pt;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */(function(t,e){var n;n=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function i(){}function s(e,n,s){if("undefined"!=typeof document){"number"==typeof(s=t({path:"/"},i.defaults,s)).expires&&(s.expires=new Date(1*new Date+864e5*s.expires)),s.expires=s.expires?s.expires.toUTCString():"";try{var o=JSON.stringify(n);/^[\{\[]/.test(o)&&(n=o)}catch(u){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var c in s)s[c]&&(a+="; "+c,!0!==s[c]&&(a+="="+s[c].split(";")[0]));return document.cookie=e+"="+n+a}}function o(t,n){if("undefined"!=typeof document){for(var i={},s=document.cookie?document.cookie.split("; "):[],o=0;o<s.length;o++){var a=s[o].split("="),c=a.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var u=e(a[0]);if(c=(r.read||r)(c,u)||e(c),n)try{c=JSON.parse(c)}catch(l){}if(i[u]=c,t===u)break}catch(l){}}return t?i[t]:i}}return i.set=s,i.get=function(t){return o(t,!1)},i.getJSON=function(t){return o(t,!0)},i.remove=function(e,n){s(e,"",t(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}((function(){}))},t.exports=n()})(Pt={exports:{}},Pt.exports);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ut=function(t,e){return(Ut=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};var Vt=function(){return(Vt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function Ft(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function $t(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function qt(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Bt(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function jt(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Ht(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{s=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,c=++i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var l=o<<4&240|a>>2;if(r.push(l),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wt=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Gt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function Yt(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function Qt(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Xt(){var t=Kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jt=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Zt.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}Ut(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),Zt=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?te(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new Jt(i,a,r);return c},t}();function te(t,e){return t.replace(ee,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var ee=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r];n(s[0],s[1])}return e.length?"&"+e.join("&"):""}function re(t){var e={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function ie(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}var se=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=oe),void 0===r.error&&(r.error=oe),void 0===r.complete&&(r.complete=oe);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function oe(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return t&&t._delegate?t._delegate:t}var ce=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),ue=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return t.prototype.get=function(t){void 0===t&&(t="[DEFAULT]");var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new Wt;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e=Vt({identifier:"[DEFAULT]",optional:!1},t),n=e.identifier,r=e.optional,i=this.normalizeInstanceIdentifier(n);if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(l){}try{for(var r=Bt(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=jt(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch(l){}}}catch(h){e={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return $t(this,void 0,void 0,(function(){var t;return qt(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Ht(Ht([],jt(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),jt(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.instanceIdentifier,i=void 0===r?"[DEFAULT]":r,s=t.options,o=void 0===s?{}:s,a=this.normalizeInstanceIdentifier(i);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var u=Bt(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var h=jt(l.value,2),d=h[0],f=h[1];a===this.normalizeInstanceIdentifier(d)&&f.resolve(c)}}catch(p){e={error:p}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}return c},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:i}),this.instances.set(n,s),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,he,de,fe=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new ue(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function pe(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(de=he||(he={}))[de.DEBUG=0]="DEBUG",de[de.VERBOSE=1]="VERBOSE",de[de.INFO=2]="INFO",de[de.WARN=3]="WARN",de[de.ERROR=4]="ERROR",de[de.SILENT=5]="SILENT";var ge={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},me=he.INFO,ye=((le={})[he.DEBUG]="log",le[he.VERBOSE]="log",le[he.INFO]="info",le[he.WARN]="warn",le[he.ERROR]="error",le),ve=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=ye[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,pe(["["+i+"]  "+t.name+":"],n))}},we=function(){function t(t){this.name=t,this._logLevel=me,this._logHandler=ve,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in he))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?ge[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,he.DEBUG],t)),this._logHandler.apply(this,pe([this,he.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,he.VERBOSE],t)),this._logHandler.apply(this,pe([this,he.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,he.INFO],t)),this._logHandler.apply(this,pe([this,he.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,he.WARN],t)),this._logHandler.apply(this,pe([this,he.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,pe([this,he.ERROR],t)),this._logHandler.apply(this,pe([this,he.ERROR],t))},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Ee=new we("@firebase/app"),Te={"@firebase/app-exp":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},Ie=new Map,_e=new Map;function Se(t,e){try{t.container.addComponent(e)}catch(n){Ee.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ke(t){const e=t.name;if(_e.has(e))return Ee.debug(`There were multiple attempts to register component ${e}.`),!1;_e.set(e,t);for(const n of Ie.values())Se(n,t);return!0}function Ce(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new Zt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ce("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Ae.create("bad-app-name",{appName:String(r)});if(Ie.has(r))throw Ae.create("duplicate-app",{appName:r});const i=new fe(r);for(const o of _e.values())i.addComponent(o);const s=new De(t,n,i);return Ie.set(r,s),s}function Re(t="[DEFAULT]"){const e=Ie.get(t);if(!e)throw Ae.create("no-app",{appName:t});return e}function Oe(){return Array.from(Ie.values())}function Me(t,e,n){var r;let i=null!==(r=Te[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ee.warn(t.join(" "))}ke(new ce(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;ke(new ce("platform-logger",(t=>new be(t)),"PRIVATE")),Me("@firebase/app-exp","0.0.900-exp.894b5da5a",Le),Me("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Me("firebase-exp","9.0.0-beta.1","app");const xe=new Zt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Pe=new we("@firebase/auth-exp");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){Pe.logLevel<=he.ERROR&&Pe.error(`Auth (9.0.0-beta.1): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw $e(t,...e)}function Fe(t,...e){return $e(t,...e)}function $e(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xe.create(t,...e)}function qe(t,e,...n){if(!t)throw $e(e,...n)}function Be(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ue(e),new Error(e)}function je(t,e){t||Be(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Map;function ze(t){je(t instanceof Function,"Expected a class definition");let e=He.get(t);return e?(je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,He.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Ke(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Ke()&&"https:"!==Ke()&&!Yt()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(t,e){this.shortDelay=t,this.longDelay=e,je(e>t,"Short delay should be less than long delay!"),this.isMobile=Gt()||Qt()}get(){return Ge()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Ze=new Ye(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function en(t,e,n,r,i={}){return nn(t,i,(()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=ne(Object.assign({key:t.config.apiKey},s)).slice(1),a=new(Xe.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&a.set("X-Firebase-Locale",t.languageCode),Xe.fetch()(sn(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function nn(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Je),e);try{const e=new on(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw an(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===e)throw an(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===e)throw an(t,"email-already-in-use",s);Ve(t,r[e]||e.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(i){if(i instanceof Jt)throw i;Ve(t,"network-request-failed")}}async function rn(t,e,n,r,i={}){const s=await en(t,e,n,r,i);return"mfaPendingCredential"in s&&Ve(t,"multi-factor-auth-required",{serverResponse:s}),s}function sn(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Qe(t.config,i):`${t.config.apiScheme}://${i}`}class on{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Fe(this.auth,"timeout"))),Ze.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function an(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Fe(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function un(t){return 1e3*Number(t)}function ln(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return Ue("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return zt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return t?JSON.parse(t):(Ue("Failed to decode base64 JWT payload"),null)}catch(i){return Ue("Caught error parsing JWT payload as JSON",i),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}class dn{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=cn(this.lastLoginAt),this.creationTime=cn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await hn(t,async function(t,e){return en(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));qe(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=Ft(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fn(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){qe(t.idToken,"internal-error"),qe(void 0!==t.idToken,"internal-error"),qe(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=ln(t);return qe(e,"internal-error"),qe(void 0!==e.exp,"internal-error"),qe(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return qe(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await nn(t,{},(()=>{const n=ne({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=sn(t,r,"/v1/token",`key=${i}`);return Xe.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new gn;return n&&(qe("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(qe("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(qe("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return Be("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){qe("string"==typeof t||void 0===t,"internal-error",{appName:e})}class yn{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Ft(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new dn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new fn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await hn(this,this.stsTokenManager.getToken(this.auth,t));return qe(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=ae(t),r=await n.getIdToken(e),i=ln(r);qe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cn(un(i.auth_time)),issuedAtTime:cn(un(i.iat)),expirationTime:cn(un(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=ae(t);await pn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(qe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new yn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){qe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await pn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await hn(this,async function(t,e){return en(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=e;qe(v&&T,t,"internal-error");const I=gn.fromJSON(this.name,T);qe("string"==typeof v,t,"internal-error"),mn(l,t.name),mn(h,t.name),qe("boolean"==typeof w,t,"internal-error"),qe("boolean"==typeof b,t,"internal-error"),mn(d,t.name),mn(f,t.name),mn(p,t.name),mn(g,t.name),mn(m,t.name),mn(y,t.name);const _=new yn({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((t=>Object.assign({},t)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(t,e,n=!1){const r=new gn;r.updateFromServerResponse(e);const i=new yn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await pn(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}vn.type="NONE";const wn=vn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e,n){return`firebase:${t}:${e}:${n}`}class En{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=bn(this.userKey,r.apiKey,i),this.fullPersistenceKey=bn("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?yn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new En(ze(wn),t,n);let r=ze(wn);for(const a of e)if(await a._isAvailable()){r=a;break}let i=null;const s=bn(n,t.config.apiKey,t.name);for(const a of e)try{const e=await a._get(s);if(e){const n=yn._fromJSON(t,e);a!==r&&(i=n);break}}catch(o){}return i&&await r._set(s,i.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(o){}}))),new En(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(In(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(An(e))return"Blackberry";if(Dn(e))return"Webos";if(_n(e))return"Safari";if((e.includes("chrome/")||Sn(e))&&!e.includes("edge/"))return"Chrome";if(Cn(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function In(t=Kt()){return/firefox\//i.test(t)}function _n(t=Kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sn(t=Kt()){return/crios\//i.test(t)}function kn(t=Kt()){return/iemobile/i.test(t)}function Cn(t=Kt()){return/android/i.test(t)}function An(t=Kt()){return/blackberry/i.test(t)}function Dn(t=Kt()){return/webos/i.test(t)}function Nn(t=Kt()){return/iphone|ipad|ipod/i.test(t)}function Rn(t=Kt()){return Nn(t)||Cn(t)||Dn(t)||An(t)||/windows phone/i.test(t)||kn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(t,e=[]){let n;switch(t){case"Browser":n=Tn(Kt());break;case"Worker":n=`${Tn(Kt())}-${t}`;break;default:n=t}return`${n}/JsCore/9.0.0-beta.1/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xn(this),this.idTokenSubscription=new xn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xe,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ze(e)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await En.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(t)):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(qe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){this.redirectInitializerError=n,await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await pn(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?ae(t):null;return e&&qe(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&qe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ze(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Zt("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ze(t)||this._popupRedirectResolver;qe(e,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[ze(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next,s=this._isInitialized?Promise.resolve():this._initializationPromise;return qe(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return qe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=On(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ln(t){return ae(t)}class xn{constructor(t){var e,n;this.auth=t,this.observer=null,this.addObserver=(n=new se((t=>this.observer=t),e)).subscribe.bind(n)}get next(){return qe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Be("not implemented")}_getIdTokenResponse(t){return Be("not implemented")}_linkToIdToken(t,e){return Be("not implemented")}_getReauthenticationResolver(t){return Be("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un extends Pn{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Un(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Un(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return rn(t,"POST","/v1/accounts:signInWithPassword",tn(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return rn(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}(t,{email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return async function(t,e){return en(t,"POST","/v1/accounts:update",e)}(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return rn(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e){return rn(t,"POST","/v1/accounts:signInWithIdp",tn(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){var e,n,r,i,s,o;const a=re(ie(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);qe(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=re(ie(t)).link,n=e?re(ie(e)).deep_link_id:null,r=re(ie(t)).deep_link_id;return(r?re(ie(r)).link:null)||r||n||e||t}(t);try{return new Fn(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(t,e){return Un._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Fn.parseLink(e);return qe(n,"argument-error"),Un._fromEmailAndCode(t,n.code,n.tenantId)}}$n.PROVIDER_ID="password",$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password",$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends qn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await yn._fromIdTokenResponse(t,n,r),s=Hn(n);return new jn({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Hn(n);return new jn({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Hn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Jt{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,zn.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new zn(t,e,n,r)}}function Wn(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw zn._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Kn(t,e,n=!1){const r="signIn",i=await Wn(t,r,e),s=await jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Gn(t,e,n){const r=Ln(t),i=await async function(t,e){return rn(t,"POST","/v1/accounts:signUp",tn(t,e))}(r,{returnSecureToken:!0,email:e,password:n}),s=await jn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Yn(t,e,n){return async function(t,e){return Kn(Ln(t),e)}(ae(t),$n.credential(e,n))}function Qn(t,e,n,r){return ae(t).onAuthStateChanged(e,n,r)}function Xn(t){return ae(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){qe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Zn{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Kt();return _n(t)||Nn(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Rn(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Xt()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}tr.type="LOCAL";const er=tr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new nr(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nr.receivers=[];class rr{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t="",e=20){return`${t}${Math.floor(Math.random()*Math.pow(10,e))}`}();r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sr(){return void 0!==ir().WorkerGlobalScope&&"function"==typeof ir().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const or="firebaseLocalStorageDb";class ar{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function cr(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ur(){const t=indexedDB.open(or,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;if(!n.objectStoreNames.contains("firebaseLocalStorage"))return await function(){const t=indexedDB.deleteDatabase(or);return new ar(t).toPromise()}(),ur();e(n)}))}))}async function lr(t,e,n){const r=cr(t,!0).put({fbase_key:e,value:n});return new ar(r).toPromise()}function hr(t,e){const n=cr(t,!0).delete(e);return new ar(n).toPromise()}class dr{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ur()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nr._getInstance(sr()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new rr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ur();return await lr(t,"__sak","1"),await hr(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>lr(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=cr(t,!1).get(e),r=await new ar(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>hr(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=cr(t,!1).getAll();return new ar(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}dr.type="LOCAL";const fr=dr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mr(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!mr(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Fe(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(gr(t))}saveEventToCache(t){this.cachedEventUids.add(gr(t)),this.lastProcessedEventTime=Date.now()}}function gr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function mr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vr=/^https?/;async function wr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t){return en(t,"GET","/v1/projects",{})}(t);for(const r of e)try{if(br(r))return}catch(n){}Ve(t,"unauthorized-domain")}function br(t){const e=We(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!vr.test(n))return!1;if(yr.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){return new Promise(((e,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=n,r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tr=new Ye(3e4,6e4);function Ir(){const t=ir().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function _r(t){return new Promise(((e,n)=>{var r,i,s;function o(){Ir(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ir(),n(Fe(t,"network-request-failed"))},timeout:Tr.get()})}if(null===(i=null===(r=ir().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=ir().gapi)||void 0===s?void 0:s.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return ir()[e]=()=>{gapi.load?o():n(Fe(t,"network-request-failed"))},Er(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw Sr=null,t}))}let Sr=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kr=new Ye(5e3,15e3),Cr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Ar=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dr(t){const e=t.config;qe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qe(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:"9.0.0-beta.1"},i=Ar.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ne(r).slice(1)}`}async function Nr(t){const e=await function(t){return Sr=Sr||_r(t),Sr}(t),n=ir().gapi;return qe(n,t,"internal-error"),e.open({where:document.body,url:Dr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=Fe(t,"network-request-failed"),s=ir().setTimeout((()=>{r(i)}),kr.get());function o(){ir().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Zn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Rr.type="SESSION";const Or=Rr,Mr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function xr(t,e,n,r=500,i=600){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),o=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Mr),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Kt().toLowerCase();n&&(a=Sn(u)?"_blank":n),In(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Kt()){var e;return Nn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Lr(null);const h=window.open(e||"",a,l);qe(h,t,"popup-blocked");try{h.focus()}catch(d){}return new Lr(h)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr extends Pn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Vn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Vn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ur(t){return Kn(t.auth,new Pr(t),t.bypassAuthState)}function Vr(t){const{auth:e,user:n}=t;return qe(n,e,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await hn(t,Wn(r,i,e,t),n);qe(s.idToken,r,"internal-error");const o=ln(s.idToken);qe(o,r,"internal-error");const{sub:a}=o;return qe(t.uid===a,r,"user-mismatch"),jn._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Ve(r,"user-mismatch"),s}}(n,new Pr(t),t.bypassAuthState)}async function Fr(t){const{auth:e,user:n}=t;return qe(n,e,"internal-error"),async function(t,e,n=!1){const r=await hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",r)}(n,new Pr(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $r=new Map;class qr extends class{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ur;case"linkViaPopup":case"linkViaRedirect":return Fr;case"reauthViaPopup":case"reauthViaRedirect":return Vr;default:Ve(this.auth,"internal-error")}}resolve(t){je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=$r.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return bn("pendingRedirect",t.config.apiKey,t.name)}(e),r="true"===await Br(t)._get(n);return await Br(t)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}$r.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Br(t){return ze(t._redirectPersistence)}async function jr(t,e,n=!1){const r=Ln(t),i=function(t,e){return e?ze(e):(qe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}(r,e),s=new qr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e,n,r,i,s){qe(t.config.authDomain,t,"auth-domain-config-required"),qe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:"9.0.0-beta.1",eventId:i};if(e instanceof qn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Bn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/__/auth/handler`;return Qe(t,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${ne(a).slice(1)}`}const zr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Or,this._completeRedirectFn=jr}async _openPopup(t,e,n,r){var i;je(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return xr(t,Hr(t,e,n,We(),r),`${s||""}${Math.floor(1e9*Math.random())}`);var s}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=Hr(t,e,n,We(),r),ir().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(je(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Nr(t),n=new pr(t);return e.register("authEvent",(e=>{qe(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),Ve(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=wr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Rn()||_n()||Nn()}};function Wr(t=Re()){const e=Ce(t,"auth-exp");return e.isInitialized()?e.getImmediate():function(t,e){const n=Ce(t,"auth-exp");n.isInitialized()&&Ve(n.getImmediate(),"already-initialized");return n.initialize({options:e})}(t,{popupRedirectResolver:zr,persistence:[fr,er]})}var Kr;new Ye(3e4,6e4),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Ye(2e3,1e4),Kr="Browser",ke(new ce("auth-exp",((t,{options:e})=>{const n=t.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(t=>{qe(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),qe(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:Kr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:On(Kr)},s=new Mn(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),ke(new ce("auth-internal",(t=>{const e=Ln(t.getProvider("auth-exp").getImmediate());return new Jn(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Me("@firebase/auth-exp","0.0.900-exp.894b5da5a",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Kr));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Gr=function(t,e){return(Gr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function Yr(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var Qr,Xr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Jr=Jr||{},Zr=Xr||self;function ti(){}function ei(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ni(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ri="closure_uid_"+(1e9*Math.random()>>>0),ii=0;function si(t,e,n){return t.call.apply(t.bind,arguments)}function oi(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ai(t,e,n){return(ai=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?si:oi).apply(null,arguments)}function ci(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ui(){return Date.now()}function li(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Kb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function hi(){this.j=this.j,this.i=this.i}hi.prototype.j=!1,hi.prototype.ja=function(){var t;!this.j&&(this.j=!0,this.G(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ri)&&t[ri]||(t[ri]=++ii))},hi.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var di=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},fi=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function pi(t){return Array.prototype.concat.apply([],arguments)}function gi(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function mi(t){return/^[\s\xa0]*$/.test(t)}var yi,vi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wi(t,e){return-1!=t.indexOf(e)}function bi(t,e){return t<e?-1:t>e?1:0}t:{var Ei=Zr.navigator;if(Ei){var Ti=Ei.userAgent;if(Ti){yi=Ti;break t}}yi=""}function Ii(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function _i(t){var e={};for(var n in t)e[n]=t[n];return e}var Si="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ki(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<Si.length;s++)n=Si[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ci(t){return Ci[" "](t),t}Ci[" "]=ti;var Ai,Di,Ni=wi(yi,"Opera"),Ri=wi(yi,"Trident")||wi(yi,"MSIE"),Oi=wi(yi,"Edge"),Mi=Oi||Ri,Li=wi(yi,"Gecko")&&!(wi(yi.toLowerCase(),"webkit")&&!wi(yi,"Edge"))&&!(wi(yi,"Trident")||wi(yi,"MSIE"))&&!wi(yi,"Edge"),xi=wi(yi.toLowerCase(),"webkit")&&!wi(yi,"Edge");function Pi(){var t=Zr.document;return t?t.documentMode:void 0}t:{var Ui="",Vi=(Di=yi,Li?/rv:([^\);]+)(\)|;)/.exec(Di):Oi?/Edge\/([\d\.]+)/.exec(Di):Ri?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Di):xi?/WebKit\/(\S+)/.exec(Di):Ni?/(?:Version)[ \/]?(\S+)/.exec(Di):void 0);if(Vi&&(Ui=Vi?Vi[1]:""),Ri){var Fi=Pi();if(null!=Fi&&Fi>parseFloat(Ui)){Ai=String(Fi);break t}}Ai=Ui}var $i,qi={};function Bi(t){return function(t,e){var n=qi;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(){for(var e=0,n=vi(String(Ai)).split("."),r=vi(String(t)).split("."),i=Math.max(n.length,r.length),s=0;0==e&&s<i;s++){var o=n[s]||"",a=r[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;e=bi(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||bi(0==o[2].length,0==a[2].length)||bi(o[2],a[2]),o=o[3],a=a[3]}while(0==e)}return 0<=e}))}if(Zr.document&&Ri){var ji=Pi();$i=ji||(parseInt(Ai,10)||void 0)}else $i=void 0;var Hi=$i,zi=!Ri||9<=Number(Hi),Wi=Ri&&!Bi("9"),Ki=function(){if(!Zr.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Zr.addEventListener("test",ti,e),Zr.removeEventListener("test",ti,e)}catch(n){}return t}();function Gi(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function Yi(t,e){if(Gi.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(Li){t:{try{Ci(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Qi[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}Gi.prototype.b=function(){this.defaultPrevented=!0},li(Yi,Gi);var Qi={2:"touch",3:"pen",4:"mouse"};Yi.prototype.b=function(){Yi.X.b.call(this);var t=this.c;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Wi)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(e){}};var Xi="closure_listenable_"+(1e6*Math.random()|0),Ji=0;function Zi(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ca=i,this.key=++Ji,this.Y=this.Z=!1}function ts(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.ca=null}function es(t){this.src=t,this.a={},this.b=0}function ns(t,e){var n=e.type;if(n in t.a){var r,i=t.a[n],s=di(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ts(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function rs(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.Y&&s.listener==e&&s.capture==!!n&&s.ca==r)return i}return-1}es.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.a[s])||(t=this.a[s]=[],this.b++);var o=rs(t,e,r,i);return-1<o?(e=t[o],n||(e.Z=!1)):((e=new Zi(e,this.src,s,!!r,i)).Z=n,t.push(e)),e};var is="closure_lm_"+(1e6*Math.random()|0),ss={};function os(t,e,n,r,i){if(r&&r.once)return cs(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)os(t,e[s],n,r,i);return null}return n=ms(n),t&&t[Xi]?t.va(e,n,ni(r)?!!r.capture:!!r,i):as(t,e,n,!1,r,i)}function as(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ni(i)?!!i.capture:!!i;if(o&&!zi)return null;var a=ps(t);if(a||(t[is]=a=new es(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){var t=fs,e=zi?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n};return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ki||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(hs(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function cs(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)cs(t,e[s],n,r,i);return null}return n=ms(n),t&&t[Xi]?t.wa(e,n,ni(r)?!!r.capture:!!r,i):as(t,e,n,!0,r,i)}function us(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)us(t,e[s],n,r,i);else r=ni(r)?!!r.capture:!!r,n=ms(n),t&&t[Xi]?(t=t.c,(e=String(e).toString())in t.a&&(-1<(n=rs(s=t.a[e],n,r,i))&&(ts(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.a[e],t.b--)))):t&&(t=ps(t))&&(e=t.a[e.toString()],t=-1,e&&(t=rs(e,n,r,i)),(n=-1<t?e[t]:null)&&ls(n))}function ls(t){if("number"!=typeof t&&t&&!t.Y){var e=t.src;if(e&&e[Xi])ns(e.c,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hs(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ps(e))?(ns(n,t),0==n.b&&(n.src=null,e[is]=null)):ts(t)}}}function hs(t){return t in ss?ss[t]:ss[t]="on"+t}function ds(t,e){var n=t.listener,r=t.ca||t.src;return t.Z&&ls(t),n.call(r,e)}function fs(t,e){if(t.Y)return!0;if(!zi){if(!e)t:{e=["window","event"];for(var n=Zr,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null;break t}e=n}return ds(t,e=new Yi(e,this))}return ds(t,new Yi(e,this))}function ps(t){return(t=t[is])instanceof es?t:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ms(t){return"function"==typeof t?t:(t[gs]||(t[gs]=function(e){return t.handleEvent(e)}),t[gs])}function ys(){hi.call(this),this.c=new es(this),this.J=this,this.C=null}function vs(t,e){var n,r=t.C;if(r)for(n=[];r;r=r.C)n.push(r);if(t=t.J,r=e.type||e,"string"==typeof e)e=new Gi(e,t);else if(e instanceof Gi)e.target=e.target||t;else{var i=e;ki(e=new Gi(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.a=n[s];i=ws(o,r,!0,e)&&i}if(i=ws(o=e.a=t,r,!0,e)&&i,i=ws(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=ws(o=e.a=n[s],r,!1,e)&&i}function ws(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.Y&&o.capture==n){var a=o.listener,c=o.ca||o.src;o.Z&&ns(t.c,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}li(ys,hi),ys.prototype[Xi]=!0,(Qr=ys.prototype).addEventListener=function(t,e,n,r){os(this,t,e,n,r)},Qr.removeEventListener=function(t,e,n,r){us(this,t,e,n,r)},Qr.G=function(){if(ys.X.G.call(this),this.c){var t,e=this.c;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)ts(n[r]);delete e.a[t],e.b--}}this.C=null},Qr.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},Qr.wa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)};var bs=Zr.JSON.stringify;function Es(){this.b=this.a=null}var Ts,Is=new(function(){function t(t,e){this.c=t,this.f=e,this.b=0,this.a=null}return t.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},t}())((function(){return new Ss}),(function(t){t.reset()}));function _s(){var t=Ds,e=null;return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Ss(){this.next=this.b=this.a=null}function ks(t){Zr.setTimeout((function(){throw t}),0)}function Cs(t,e){Ts||function(){var t=Zr.Promise.resolve(void 0);Ts=function(){t.then(Ns)}}(),As||(Ts(),As=!0),Ds.add(t,e)}Es.prototype.add=function(t,e){var n=Is.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Ss.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Ss.prototype.reset=function(){this.next=this.b=this.a=null};var As=!1,Ds=new Es;function Ns(){for(var t;t=_s();){try{t.a.call(t.b)}catch(n){ks(n)}var e=Is;e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}As=!1}function Rs(t,e){ys.call(this),this.b=t||1,this.a=e||Zr,this.f=ai(this.Za,this),this.g=ui()}function Os(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function Ms(t,e,n){if("function"==typeof t)n&&(t=ai(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ai(t.handleEvent,t)}return 2147483647<Number(e)?-1:Zr.setTimeout(t,e||0)}function Ls(t){t.a=Ms((function(){t.a=null,t.c&&(t.c=!1,Ls(t))}),t.h);var e=t.b;t.b=null,t.g.apply(null,e)}li(Rs,ys),(Qr=Rs.prototype).aa=!1,Qr.M=null,Qr.Za=function(){if(this.aa){var t=ui()-this.g;0<t&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),vs(this,"tick"),this.aa&&(Os(this),this.start()))}},Qr.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=ui())},Qr.G=function(){Rs.X.G.call(this),Os(this),delete this.a};var xs=function(t){function e(e,n){var r=t.call(this)||this;return r.g=e,r.h=n,r.b=null,r.c=!1,r.a=null,r}return function(t,e){function n(){this.constructor=t}Gr(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:Ls(this)},e.prototype.G=function(){t.prototype.G.call(this),this.a&&(Zr.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},e}(hi);function Ps(t){hi.call(this),this.b=t,this.a={}}li(Ps,hi);var Us=[];function Vs(t,e,n,r){Array.isArray(n)||(n&&(Us[0]=n.toString()),n=Us);for(var i=0;i<n.length;i++){var s=os(e,n[i],r||t.handleEvent,!1,t.b||t);if(!s)break;t.a[s.key]=s}}function Fs(t){Ii(t.a,(function(t,e){this.a.hasOwnProperty(e)&&ls(t)}),t),t.a={}}function $s(){this.a=!0}function qs(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.a)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return bs(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}Ps.prototype.G=function(){Ps.X.G.call(this),Fs(this)},Ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$s.prototype.info=function(){};var Bs={},js=null;function Hs(){return js=js||new ys}function zs(t){Gi.call(this,Bs.Fa,t)}function Ws(t){var e=Hs();vs(e,new zs(e,t))}function Ks(t,e){Gi.call(this,Bs.STAT_EVENT,t),this.stat=e}function Gs(t){var e=Hs();vs(e,new Ks(e,t))}function Ys(t){Gi.call(this,Bs.Ga,t)}function Qs(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Zr.setTimeout((function(){t()}),e)}Bs.Fa="serverreachability",li(zs,Gi),Bs.STAT_EVENT="statevent",li(Ks,Gi),Bs.Ga="timingevent",li(Ys,Gi);var Xs={NO_ERROR:0,$a:1,nb:2,mb:3,hb:4,lb:5,ob:6,Da:7,TIMEOUT:8,rb:9},Js={fb:"complete",Bb:"success",Ea:"error",Da:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",ib:"downloadprogress",Jb:"uploadprogress"};function Zs(){}function to(t){var e;return(e=t.a)||(e=t.a={}),e}function eo(){}Zs.prototype.a=null;var no,ro={OPEN:"a",eb:"b",Ea:"c",qb:"d"};function io(){Gi.call(this,"d")}function so(){Gi.call(this,"c")}function oo(){}function ao(t,e,n,r){this.g=t,this.c=e,this.f=n,this.S=r||1,this.J=new Ps(this),this.P=co,t=Mi?125:void 0,this.R=new Rs(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.T=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.V=this.C=this.U=this.I=!1}li(io,Gi),li(so,Gi),li(oo,Zs),no=new oo;var co=45e3,uo={},lo={};function ho(t,e,n){t.H=1,t.i=Lo(Ao(e)),t.j=n,t.I=!0,fo(t,null)}function fo(t,e){t.u=ui(),mo(t),t.l=Ao(t.i);var n=t.l,r=t.S;Array.isArray(r)||(r=[String(r)]),Ko(n.b,"t",r),t.D=0,t.a=qa(t.g,t.g.C?e:null),0<t.O&&(t.F=new xs(ai(t.Ca,t,t.a),t.O)),Vs(t.J,t.a,"readystatechange",t.Xa),e=t.B?_i(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),Ws(1),function(t,e,n,r,i,s){t.info((function(){if(t.a)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.c,t.m,t.l,t.f,t.S,t.j)}function po(t,e,n){for(var r=!0;!t.A&&t.D<n.length;){var i=go(t,n);if(i==lo){4==e&&(t.h=4,Gs(14),r=!1),qs(t.c,t.f,null,"[Incomplete Response]");break}if(i==uo){t.h=4,Gs(15),qs(t.c,t.f,n,"[Invalid Chunk]"),r=!1;break}qs(t.c,t.f,i,null),Eo(t,i)}4==e&&0==n.length&&(t.h=1,Gs(16),r=!1),t.b=t.b&&r,r?0<n.length&&!t.V&&(t.V=!0,(e=t.g).a==t&&e.U&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ma(e),e.F=!0,Gs(11))):(qs(t.c,t.f,n,"[Invalid Chunked Response]"),bo(t),wo(t))}function go(t,e){var n=t.D,r=e.indexOf("\n",n);return-1==r?lo:(n=Number(e.substring(n,r)),isNaN(n)?uo:(r+=1)+n>e.length?lo:(e=e.substr(r,n),t.D=r+n,e))}function mo(t){t.T=ui()+t.P,yo(t,t.P)}function yo(t,e){if(null!=t.o)throw Error("WatchDog timer not null");t.o=Qs(ai(t.Va,t),e)}function vo(t){t.o&&(Zr.clearTimeout(t.o),t.o=null)}function wo(t){0==t.g.v||t.A||Pa(t.g,t)}function bo(t){vo(t);var e=t.F;e&&"function"==typeof e.ja&&e.ja(),t.F=null,Os(t.R),Fs(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ja())}function Eo(t,e){try{var n=t.g;if(0!=n.v&&(n.a==t||ta(n.b,t)))if(n.I=t.N,!t.C&&ta(n.b,t)&&3==n.v){try{var r=n.ka.a.parse(e)}catch(m){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.j){if(n.a){if(!(n.a.u+3e3<t.u))break t;xa(n),_a(n)}Oa(n),Gs(18)}}else n.oa=i[1],0<n.oa-n.P&&37500>i[2]&&n.H&&0==n.o&&!n.m&&(n.m=Qs(ai(n.Sa,n),6e3));if(1>=Zo(n.b)&&n.ea){try{n.ea()}catch(m){}n.ea=void 0}}else Va(n,11)}else if((t.C||n.a==t)&&xa(n),!mi(e))for(e=r=n.ka.a.parse(e),r=0;r<e.length;r++)if(i=e[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ga=i[2];var s=i[3];null!=s&&(n.ha=s,n.c.info("VER="+n.ha));var o=i[4];null!=o&&(n.pa=o,n.c.info("SVER="+n.pa));var a=i[5];if(null!=a&&"number"==typeof a&&0<a){var c=1.5*a;n.D=c,n.c.info("backChannelRequestTimeoutMs_="+c)}c=n;var u=t.a;if(u){var l=u.a?u.a.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=c.b;!h.a&&(wi(l,"spdy")||wi(l,"quic")||wi(l,"h2"))&&(h.f=h.g,h.a=new Set,h.b&&(ea(h,h.b),h.b=null))}if(c.A){var d=u.a?u.a.getResponseHeader("X-HTTP-Session-Id"):null;d&&(c.na=d,Mo(c.B,c.A,d))}}n.v=3,n.f&&n.f.ta(),n.U&&(n.N=ui()-t.u,n.c.info("Handshake RTT: "+n.N+"ms"));var f=t;if((c=n).la=$a(c,c.C?c.ga:null,c.fa),f.C){na(c.b,f);var p=f,g=c.D;g&&p.setTimeout(g),p.o&&(vo(p),mo(p)),c.a=f}else Ra(c);0<n.g.length&&Ca(n)}else"stop"!=i[0]&&"close"!=i[0]||Va(n,7);else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?Va(n,7):Ia(n):"noop"!=i[0]&&n.f&&n.f.sa(i),n.o=0);Ws(4)}catch(m){}}function To(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ei(t)||"string"==typeof t)fi(t,e,void 0);else{if(t.L&&"function"==typeof t.L)var n=t.L();else if(t.K&&"function"==typeof t.K)n=void 0;else if(ei(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.K&&"function"==typeof t.K)return t.K();if("string"==typeof t)return t.split("");if(ei(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Io(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Io)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function _o(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];So(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={};for(n=e=0;e<t.a.length;)So(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++;t.a.length=n}}function So(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Qr=ao.prototype).setTimeout=function(t){this.P=t},Qr.Xa=function(t){t=t.target;var e=this.F;e&&3==wa(t)?e.f():this.Ca(t)},Qr.Ca=function(t){try{if(t==this.a)t:{var e=wa(this.a),n=this.a.ua(),r=this.a.W();if(!(3>e||3==e&&!Mi&&!this.a.$())){this.A||4!=e||7==n||Ws(8==n||0>=r?3:2),vo(this);var i=this.a.W();this.N=i;var s=this.a.$();if(this.b=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.c,this.m,this.l,this.f,this.S,e,i),this.b){if(this.U&&!this.C){e:{if(this.a){var o,a=this.a;if((o=a.a?a.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mi(o)){var c=o;break e}}c=null}if(!c){this.b=!1,this.h=3,Gs(12),bo(this),wo(this);break t}qs(this.c,this.f,c,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,Eo(this,c)}this.I?(po(this,e,s),Mi&&this.b&&3==e&&(Vs(this.J,this.R,"tick",this.Wa),this.R.start())):(qs(this.c,this.f,s,null),Eo(this,s)),4==e&&bo(this),this.b&&!this.A&&(4==e?Pa(this.g,this):(this.b=!1,mo(this)))}else 400==i&&0<s.indexOf("Unknown SID")?(this.h=3,Gs(12)):(this.h=0,Gs(13)),bo(this),wo(this)}}}catch(u){}},Qr.Wa=function(){if(this.a){var t=wa(this.a),e=this.a.$();this.D<e.length&&(vo(this),po(this,t,e),this.b&&4!=t&&mo(this))}},Qr.cancel=function(){this.A=!0,bo(this)},Qr.Va=function(){this.o=null;var t=ui();0<=t-this.T?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.c,this.l),2!=this.H&&(Ws(3),Gs(17)),bo(this),this.h=2,wo(this)):yo(this,this.T-t)},(Qr=Io.prototype).K=function(){_o(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},Qr.L=function(){return _o(this),this.a.concat()},Qr.get=function(t,e){return So(this.b,t)?this.b[t]:e},Qr.set=function(t,e){So(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},Qr.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var ko=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Co(t,e){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof Co){this.a=void 0!==e?e:t.a,Do(this,t.f),this.j=t.j,No(this,t.c),Ro(this,t.h),this.g=t.g,e=t.b;var n=new jo;n.c=e.c,e.a&&(n.a=new Io(e.a),n.b=e.b),Oo(this,n),this.i=t.i}else t&&(n=String(t).match(ko))?(this.a=!!e,Do(this,n[1]||"",!0),this.j=xo(n[2]||""),No(this,n[3]||"",!0),Ro(this,n[4]),this.g=xo(n[5]||"",!0),Oo(this,n[6]||"",!0),this.i=xo(n[7]||"")):(this.a=!!e,this.b=new jo(null,this.a))}function Ao(t){return new Co(t)}function Do(t,e,n){t.f=n?xo(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function No(t,e,n){t.c=n?xo(e,!0):e}function Ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.h=e}else t.h=null}function Oo(t,e,n){e instanceof jo?(t.b=e,function(t,e){e&&!t.f&&(Ho(t),t.c=null,t.a.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(zo(this,e),Ko(this,n,t))}),t)),t.f=e}(t.b,t.a)):(n||(e=Po(e,qo)),t.b=new jo(e,t.a))}function Mo(t,e,n){t.b.set(e,n)}function Lo(t){return Mo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ui()).toString(36)),t}function xo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Po(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Uo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Uo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Co.prototype.toString=function(){var t=[],e=this.f;e&&t.push(Po(e,Vo,!0),":");var n=this.c;return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(Po(e,Vo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(Po(n,"/"==n.charAt(0)?$o:Fo,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",Po(n,Bo)),t.join("")};var Vo=/[#\/\?@]/g,Fo=/[#\?:]/g,$o=/[#\?]/g,qo=/[#\?@]/g,Bo=/#/g;function jo(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Ho(t){t.a||(t.a=new Io,t.b=0,t.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function zo(t,e){Ho(t),e=Go(t,e),So(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,So((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&_o(t)))}function Wo(t,e){return Ho(t),e=Go(t,e),So(t.a.b,e)}function Ko(t,e,n){zo(t,e),0<n.length&&(t.c=null,t.a.set(Go(t,e),gi(n)),t.b+=n.length)}function Go(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(Qr=jo.prototype).add=function(t,e){Ho(this),this.c=null,t=Go(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},Qr.forEach=function(t,e){Ho(this),this.a.forEach((function(n,r){fi(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Qr.L=function(){Ho(this);for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},Qr.K=function(t){Ho(this);var e=[];if("string"==typeof t)Wo(this,t)&&(e=pi(e,this.a.get(Go(this,t))));else{t=this.a.K();for(var n=0;n<t.length;n++)e=pi(e,t[n])}return e},Qr.set=function(t,e){return Ho(this),this.c=null,Wo(this,t=Go(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},Qr.get=function(t,e){return t&&0<(t=this.K(t)).length?String(t[0]):e},Qr.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.L(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.K(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.c=t.join("&")};var Yo=function(t,e){this.b=t,this.a=e};function Qo(t){this.g=t||Xo,Zr.PerformanceNavigationTiming?t=0<(t=Zr.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Zr.ia&&Zr.ia.ya&&Zr.ia.ya()&&Zr.ia.ya().Lb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}var Xo=10;function Jo(t){return!!t.b||!!t.a&&t.a.size>=t.f}function Zo(t){return t.b?1:t.a?t.a.size:0}function ta(t,e){return t.b?t.b==e:!!t.a&&t.a.has(e)}function ea(t,e){t.a?t.a.add(e):t.b=e}function na(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function ra(t){var e,n;if(null!=t.b)return t.c.concat(t.b.s);if(null!=t.a&&0!==t.a.size){var r=t.c;try{for(var i=Yr(t.a.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.s)}}catch(a){e={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return gi(t.c)}function ia(){}function sa(){this.a=new ia}function oa(t,e,n){var r=n||"";try{To(t,(function(t,n){var i=t;ni(t)&&(i=bs(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function aa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}Qo.prototype.cancel=function(){var t,e;if(this.c=ra(this),this.b)this.b.cancel(),this.b=null;else if(this.a&&0!==this.a.size){try{for(var n=Yr(this.a.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.a.clear()}},ia.prototype.stringify=function(t){return Zr.JSON.stringify(t,void 0)},ia.prototype.parse=function(t){return Zr.JSON.parse(t,void 0)};var ca=Zr.JSON.parse;function ua(t){ys.call(this),this.headers=new Io,this.H=t||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=la,this.D=this.F=!1}li(ua,ys);var la="",ha=/^https?$/i,da=["POST","PUT"];function fa(t){return"content-type"==t.toLowerCase()}function pa(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,ga(t),ya(t)}function ga(t){t.u||(t.u=!0,vs(t,"complete"),vs(t,"error"))}function ma(t){if(t.b&&void 0!==Jr&&(!t.s[1]||4!=wa(t)||2!=t.W()))if(t.l&&4==wa(t))Ms(t.za,0,t);else if(vs(t,"readystatechange"),4==wa(t)){t.b=!1;try{var e,n=t.W();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.B).match(ko)[1]||null;if(!s&&Zr.self&&Zr.self.location){var o=Zr.self.location.protocol;s=o.substr(0,o.length-1)}i=!ha.test(s?s.toLowerCase():"")}e=i}if(e)vs(t,"complete"),vs(t,"success");else{t.h=6;try{var a=2<wa(t)?t.a.statusText:""}catch(c){a=""}t.f=a+" ["+t.W()+"]",ga(t)}}finally{ya(t)}}}function ya(t,e){if(t.a){va(t);var n=t.a,r=t.s[0]?ti:null;t.a=null,t.s=null,e||vs(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function va(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(Zr.clearTimeout(t.m),t.m=null)}function wa(t){return t.a?t.a.readyState:0}function ba(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return Ii(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Mo(t,e,n))}function Ea(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ta(t){this.pa=0,this.g=[],this.c=new $s,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.V=this.i=this.O=this.l=null,this.Oa=this.R=0,this.La=Ea("failFast",!1,t),this.H=this.m=this.j=this.h=this.f=null,this.S=!0,this.I=this.oa=this.P=-1,this.T=this.o=this.u=0,this.Ha=Ea("baseRetryDelayMs",5e3,t),this.Ra=Ea("retryDelaySeedMs",1e4,t),this.Ma=Ea("forwardChannelMaxRetries",2,t),this.ma=Ea("forwardChannelRequestTimeoutMs",2e4,t),this.Na=t&&t.g||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new Qo(t&&t.concurrentRequestLimit),this.ka=new sa,this.da=t&&t.fastHandshake||!1,this.Ia=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.S=!1),this.U=!this.da&&this.S&&t&&t.detectBufferingProxy||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null,(this.Ka=t&&t.c||!1)&&this.c.info("Opt-in to enable Chrome Origin Trials.")}function Ia(t){if(Sa(t),3==t.v){var e=t.R++,n=Ao(t.B);Mo(n,"SID",t.J),Mo(n,"RID",e),Mo(n,"TYPE","terminate"),Da(t,n),(e=new ao(t,t.c,e,void 0)).H=2,e.i=Lo(Ao(n)),n=!1,Zr.navigator&&Zr.navigator.sendBeacon&&(n=Zr.navigator.sendBeacon(e.i.toString(),"")),!n&&Zr.Image&&((new Image).src=e.i,n=!0),n||(e.a=qa(e.g,null),e.a.ba(e.i)),e.u=ui(),mo(e)}Fa(t)}function _a(t){t.a&&(Ma(t),t.a.cancel(),t.a=null)}function Sa(t){_a(t),t.j&&(Zr.clearTimeout(t.j),t.j=null),xa(t),t.b.cancel(),t.h&&("number"==typeof t.h&&Zr.clearTimeout(t.h),t.h=null)}function ka(t,e){t.g.push(new Yo(t.Oa++,e)),3==t.v&&Ca(t)}function Ca(t){Jo(t.b)||t.h||(t.h=!0,Cs(t.Ba,t),t.u=0)}function Aa(t,e){var n;n=e?e.f:t.R++;var r=Ao(t.B);Mo(r,"SID",t.J),Mo(r,"RID",n),Mo(r,"AID",t.P),Da(t,r),t.i&&t.l&&ba(r,t.i,t.l),n=new ao(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=Na(t,n,1e3),n.setTimeout(Math.round(.5*t.ma)+Math.round(.5*t.ma*Math.random())),ea(t.b,n),ho(n,r,e)}function Da(t,e){t.f&&To({},(function(t,n){Mo(e,n,t)}))}function Na(t,e,n){n=Math.min(t.g.length,n);var r=t.f?ai(t.f.Ja,t.f,t):null;t:for(var i=t.g,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].b,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].b,l=i[c].a;if(0>(u-=s))s=Math.max(0,i[c].b-100),a=!1;else try{oa(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.g.splice(0,n),e.s=t,r}function Ra(t){t.a||t.j||(t.T=1,Cs(t.Aa,t),t.o=0)}function Oa(t){return!(t.a||t.j||3<=t.o)&&(t.T++,t.j=Qs(ai(t.Aa,t),Ua(t,t.o)),t.o++,!0)}function Ma(t){null!=t.s&&(Zr.clearTimeout(t.s),t.s=null)}function La(t){t.a=new ao(t,t.c,"rpc",t.T),null===t.i&&(t.a.B=t.l),t.a.O=0;var e=Ao(t.la);Mo(e,"RID","rpc"),Mo(e,"SID",t.J),Mo(e,"CI",t.H?"0":"1"),Mo(e,"AID",t.P),Da(t,e),Mo(e,"TYPE","xmlhttp"),t.i&&t.l&&ba(e,t.i,t.l),t.D&&t.a.setTimeout(t.D);var n=t.a;t=t.ga,n.H=1,n.i=Lo(Ao(e)),n.j=null,n.I=!0,fo(n,t)}function xa(t){null!=t.m&&(Zr.clearTimeout(t.m),t.m=null)}function Pa(t,e){var n=null;if(t.a==e){xa(t),Ma(t),t.a=null;var r=2}else{if(!ta(t.b,e))return;n=e.s,na(t.b,e),r=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==r){n=e.j?e.j.length:0,e=ui()-e.u;var i=t.u;vs(r=Hs(),new Ys(r,n,e,i)),Ca(t)}else Ra(t);else if(3==(i=e.h)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Zo(t.b)>=t.b.f-(t.h?1:0)||(t.h?(t.g=e.s.concat(t.g),0):1==t.v||2==t.v||t.u>=(t.La?0:t.Ma)||(t.h=Qs(ai(t.Ba,t,e),Ua(t,t.u)),t.u++,0)))}(t,e)||2==r&&Oa(t)))switch(n&&0<n.length&&(e=t.b,e.c=e.c.concat(n)),i){case 1:Va(t,5);break;case 4:Va(t,10);break;case 3:Va(t,6);break;default:Va(t,2)}}function Ua(t,e){var n=t.Ha+Math.floor(Math.random()*t.Ra);return t.f||(n*=2),n*e}function Va(t,e){if(t.c.info("Error code "+e),2==e){var n=null;t.f&&(n=null);var r=ai(t.Ya,t);n||(n=new Co("//www.google.com/images/cleardot.gif"),Zr.location&&"http"==Zr.location.protocol||Do(n,"https"),Lo(n)),function(t,e){var n=new $s;if(Zr.Image){var r=new Image;r.onload=ci(aa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ci(aa,n,r,"TestLoadImage: error",!1,e),r.onabort=ci(aa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ci(aa,n,r,"TestLoadImage: timeout",!1,e),Zr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Gs(2);t.v=0,t.f&&t.f.ra(e),Fa(t),Sa(t)}function Fa(t){t.v=0,t.I=-1,t.f&&(0==ra(t.b).length&&0==t.g.length||(t.b.c.length=0,gi(t.g),t.g.length=0),t.f.qa())}function $a(t,e,n){var r=function(t){return t instanceof Co?Ao(t):new Co(t,void 0)}(n);if(""!=r.c)e&&No(r,e+"."+r.c),Ro(r,r.h);else{var i=Zr.location;r=function(t,e,n,r){var i=new Co(null,void 0);return t&&Do(i,t),e&&No(i,e),n&&Ro(i,n),r&&(i.g=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.V&&Ii(t.V,(function(t,e){Mo(r,e,t)})),e=t.A,n=t.na,e&&n&&Mo(r,e,n),Mo(r,"VER",t.ha),Da(t,r),r}function qa(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new ua(t.Na)).F=t.C,e}function Ba(){}function ja(){if(Ri&&!(10<=Number(Hi)))throw Error("Environmental error: no available transport.")}function Ha(t,e){ys.call(this),this.a=new Ta(e),this.o=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!mi(t)&&(this.a.i=t),this.m=e&&e.supportsCrossDomainXhr||!1,this.l=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mi(e)&&(this.a.A=e,null!==(t=this.b)&&e in t&&(e in(t=this.b)&&delete t[e])),this.f=new Ka(this)}function za(t){io.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function Wa(){so.call(this),this.status=1}function Ka(t){this.a=t}(Qr=ua.prototype).ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+t);e=e?e.toUpperCase():"GET",this.B=t,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?to(this.H):to(no),this.a.onreadystatechange=ai(this.za,this);try{this.A=!0,this.a.open(e,String(t),!0),this.A=!1}catch(s){return void pa(this,s)}t=n||"";var i=new Io(this.headers);r&&To(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=fa,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.L()),n=Zr.FormData&&t instanceof Zr.FormData,!(0<=di(da,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.a.setRequestHeader(e,t)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{va(this),0<this.o&&((this.D=function(t){return Ri&&Bi(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=ai(this.xa,this)):this.m=Ms(this.xa,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(s){pa(this,s)}},Qr.xa=function(){void 0!==Jr&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,vs(this,"timeout"),this.abort(8))},Qr.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,vs(this,"complete"),vs(this,"abort"),ya(this))},Qr.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),ya(this,!0)),ua.X.G.call(this)},Qr.za=function(){this.j||(this.A||this.l||this.g?ma(this):this.Ua())},Qr.Ua=function(){ma(this)},Qr.W=function(){try{return 2<wa(this)?this.a.status:-1}catch(Di){return-1}},Qr.$=function(){try{return this.a?this.a.responseText:""}catch(Di){return""}},Qr.Pa=function(t){if(this.a){var e=this.a.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ca(e)}},Qr.ua=function(){return this.h},Qr.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(Qr=Ta.prototype).ha=8,Qr.v=1,Qr.Ba=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++;var e,n=new ao(this,this.c,t,void 0),r=this.l;if(this.O&&(r?ki(r=_i(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)t:{for(var i=e=0;i<this.g.length;i++){var s=this.g[i];if(void 0===(s="__data__"in s.a&&"string"==typeof(s=s.a.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=i;break t}if(4096===e||i===this.g.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Na(this,n,e),Mo(i=Ao(this.B),"RID",t),Mo(i,"CVER",22),this.A&&Mo(i,"X-HTTP-Session-Id",this.A),Da(this,i),this.i&&r&&ba(i,this.i,r),ea(this.b,n),this.Ia&&Mo(i,"TYPE","init"),this.da?(Mo(i,"$req",e),Mo(i,"SID","null"),n.U=!0,ho(n,i,null)):ho(n,i,e),this.v=2}}else 3==this.v&&(t?Aa(this,t):0==this.g.length||Jo(this.b)||Aa(this))},Qr.Aa=function(){if(this.j=null,La(this),this.U&&!(this.F||null==this.a||0>=this.N)){var t=2*this.N;this.c.info("BP detection timer enabled: "+t),this.s=Qs(ai(this.Ta,this),t)}},Qr.Ta=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,Gs(10),_a(this),La(this))},Qr.Sa=function(){null!=this.m&&(this.m=null,_a(this),Oa(this),Gs(19))},Qr.Ya=function(t){t?(this.c.info("Successfully pinged google.com"),Gs(2)):(this.c.info("Failed to ping google.com"),Gs(1))},(Qr=Ba.prototype).ta=function(){},Qr.sa=function(){},Qr.ra=function(){},Qr.qa=function(){},Qr.Ja=function(){},ja.prototype.a=function(t,e){return new Ha(t,e)},li(Ha,ys),Ha.prototype.g=function(){this.a.f=this.f,this.m&&(this.a.C=!0);var t=this.a,e=this.o,n=this.b||void 0;Gs(0),t.fa=e,t.V=n||{},t.H=t.S,t.B=$a(t,null,t.fa),Ca(t)},Ha.prototype.close=function(){Ia(this.a)},Ha.prototype.h=function(t){if("string"==typeof t){var e={};e.__data__=t,ka(this.a,e)}else this.l?((e={}).__data__=bs(t),ka(this.a,e)):ka(this.a,t)},Ha.prototype.G=function(){this.a.f=null,delete this.f,Ia(this.a),delete this.a,Ha.X.G.call(this)},li(za,io),li(Wa,so),li(Ka,Ba),Ka.prototype.ta=function(){vs(this.a,"a")},Ka.prototype.sa=function(t){vs(this.a,new za(t))},Ka.prototype.ra=function(t){vs(this.a,new Wa(t))},Ka.prototype.qa=function(){vs(this.a,"b")},ja.prototype.createWebChannel=ja.prototype.a,Ha.prototype.send=Ha.prototype.h,Ha.prototype.open=Ha.prototype.g,Ha.prototype.close=Ha.prototype.close,Xs.NO_ERROR=0,Xs.TIMEOUT=8,Xs.HTTP_ERROR=6,Js.COMPLETE="complete",eo.EventType=ro,ro.OPEN="a",ro.CLOSE="b",ro.ERROR="c",ro.MESSAGE="d",ys.prototype.listen=ys.prototype.va,ua.prototype.listenOnce=ua.prototype.wa,ua.prototype.getLastError=ua.prototype.Qa,ua.prototype.getLastErrorCode=ua.prototype.ua,ua.prototype.getStatus=ua.prototype.W,ua.prototype.getResponseJson=ua.prototype.Pa,ua.prototype.getResponseText=ua.prototype.$,ua.prototype.send=ua.prototype.ba;var Ga=Xs,Ya=Js,Qa=Bs,Xa=10,Ja=11,Za=eo,tc=ua;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.t(t),this.i=t=>e.writeSequenceNumber(t))}t(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.i&&this.i(t),t}}ec.o=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rc extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new we("@firebase/firestore");function sc(){return ic.logLevel}function oc(t,...e){if(ic.logLevel<=he.DEBUG){const n=e.map(uc);ic.debug(`Firestore (8.4.1): ${t}`,...n)}}function ac(t,...e){if(ic.logLevel<=he.ERROR){const n=e.map(uc);ic.error(`Firestore (8.4.1): ${t}`,...n)}}function cc(t,...e){if(ic.logLevel<=he.WARN){const n=e.map(uc);ic.warn(`Firestore (8.4.1): ${t}`,...n)}}function uc(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t="Unexpected state"){const e="FIRESTORE (8.4.1) INTERNAL ASSERTION FAILED: "+t;throw ac(e),new Error(e)}function hc(t,e){t||lc()}function dc(t,e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{static u(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=fc(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function gc(t,e){return t<e?-1:t>e?1:0}function mc(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new rc(nc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new rc(nc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new rc(nc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rc(nc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return yc.fromMillis(Date.now())}static fromDate(t){return yc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new yc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gc(this.nanoseconds,t.nanoseconds):gc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.timestamp=t}static fromTimestamp(t){return new vc(t)}static min(){return new vc(new yc(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ec(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e,n){void 0===e?e=0:e>t.length&&lc(),void 0===n?n=t.length-e:n>t.length-e&&lc(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Tc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Tc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ic extends Tc{construct(t,e,n){return new Ic(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new rc(nc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ic(e)}static emptyPath(){return new Ic([])}}const _c=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Sc extends Tc{construct(t,e,n){return new Sc(t,e,n)}static isValidIdentifier(t){return _c.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Sc.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Sc(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new rc(nc.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new rc(nc.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new rc(nc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new rc(nc.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Sc(e)}static emptyPath(){return new Sc([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this.fields=t,t.sort(Sc.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return mc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Cc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Cc(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Cc.EMPTY_BYTE_STRING=new Cc("");const Ac=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dc(t){if(hc(!!t),"string"==typeof t){let e=0;const n=Ac.exec(t);if(hc(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Nc(t.seconds),nanos:Nc(t.nanos)}}function Nc(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Rc(t){return"string"==typeof t?Cc.fromBase64String(t):Cc.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Mc(t){const e=t.mapValue.fields.__previous_value__;return Oc(e)?Mc(e):e}function Lc(t){const e=Dc(t.mapValue.fields.__local_write_time__.timestampValue);return new yc(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){return null==t}function Pc(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uc{constructor(t){this.path=t}static fromPath(t){return new Uc(Ic.fromString(t))}static fromName(t){return new Uc(Ic.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Ic.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ic.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Uc(new Ic(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oc(t)?4:10:lc()}function Fc(t,e){const n=Vc(t);if(n!==Vc(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lc(t).isEqual(Lc(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Dc(t.timestampValue),r=Dc(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Rc(t.bytesValue).isEqual(Rc(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Nc(t.geoPointValue.latitude)===Nc(e.geoPointValue.latitude)&&Nc(t.geoPointValue.longitude)===Nc(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Nc(t.integerValue)===Nc(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Nc(t.doubleValue),r=Nc(e.doubleValue);return n===r?Pc(n)===Pc(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return mc(t.arrayValue.values||[],e.arrayValue.values||[],Fc);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(wc(n)!==wc(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Fc(n[i],r[i])))return!1;return!0}(t,e);default:return lc()}var r}function $c(t,e){return void 0!==(t.values||[]).find((t=>Fc(t,e)))}function qc(t,e){const n=Vc(t),r=Vc(e);if(n!==r)return gc(n,r);switch(n){case 0:return 0;case 1:return gc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Nc(t.integerValue||t.doubleValue),r=Nc(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Bc(t.timestampValue,e.timestampValue);case 4:return Bc(Lc(t),Lc(e));case 5:return gc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Rc(t),r=Rc(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=gc(n[i],r[i]);if(0!==t)return t}return gc(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=gc(Nc(t.latitude),Nc(e.latitude));return 0!==n?n:gc(Nc(t.longitude),Nc(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=qc(n[i],r[i]);if(t)return t}return gc(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=gc(r[o],s[o]);if(0!==t)return t;const e=qc(n[r[o]],i[s[o]]);if(0!==e)return e}return gc(r.length,s.length)}(t.mapValue,e.mapValue);default:throw lc()}}function Bc(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return gc(t,e);const n=Dc(t),r=Dc(e),i=gc(n.seconds,r.seconds);return 0!==i?i:gc(n.nanos,r.nanos)}function jc(t){return Hc(t)}function Hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Dc(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rc(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Uc.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Hc(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Hc(t.fields[i])}`;return n+"}"}(t.mapValue):lc();var e,n}function zc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function Kc(t){return!!t&&"arrayValue"in t}function Gc(t){return!!t&&"nullValue"in t}function Yc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qc(t){return!!t&&"mapValue"in t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t){this.overlayMap=new Map,this.partialValue=t}static empty(){return new Xc({mapValue:{}})}field(t){return Xc.extractNestedValue(this.buildProto(),t)}toProto(){return this.field(Sc.emptyPath())}set(t,e){this.setOverlay(t,e)}setAll(t){t.forEach(((t,e)=>{t?this.set(e,t):this.delete(e)}))}delete(t){this.setOverlay(t,null)}isEqual(t){return Fc(this.buildProto(),t.buildProto())}setOverlay(t,e){let n=this.overlayMap;for(let r=0;r<t.length-1;++r){const e=t.get(r);let i=n.get(e);i instanceof Map?n=i:i&&10===Vc(i)?(i=new Map(Object.entries(i.mapValue.fields||{})),n.set(e,i),n=i):(i=new Map,n.set(e,i),n=i)}n.set(t.lastSegment(),e)}applyOverlay(t,e){let n=!1;const r=Xc.extractNestedValue(this.partialValue,t),i=Qc(r)?Object.assign({},r.mapValue.fields):{};return e.forEach(((e,r)=>{if(e instanceof Map){const s=this.applyOverlay(t.child(r),e);null!=s&&(i[r]=s,n=!0)}else null!==e?(i[r]=e,n=!0):i.hasOwnProperty(r)&&(delete i[r],n=!0)})),n?{mapValue:{fields:i}}:null}buildProto(){const t=this.applyOverlay(Sc.emptyPath(),this.overlayMap);return null!=t&&(this.partialValue=t,this.overlayMap.clear()),this.partialValue}static extractNestedValue(t,e){if(e.isEmpty())return t;{let n=t;for(let t=0;t<e.length-1;++t){if(!n.mapValue.fields)return null;if(n=n.mapValue.fields[e.get(t)],!Qc(n))return null}return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}clone(){return new Xc(this.buildProto())}}function Jc(t){const e=[];return bc(t.fields||{},((t,n)=>{const r=new Sc([t]);if(Qc(n)){const t=Jc(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new kc(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zc{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Zc(t,0,vc.min(),Xc.empty(),0)}static newFoundDocument(t,e,n){return new Zc(t,1,e,n,0)}static newNoDocument(t,e){return new Zc(t,2,e,Xc.empty(),0)}static newUnknownDocument(t,e){return new Zc(t,3,e,Xc.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Xc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Xc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Zc&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Zc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.toProto())}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.h=null}}function eu(t,e=null,n=[],r=[],i=null,s=null,o=null){return new tu(t,e,n,r,i,s,o)}function nu(t){const e=dc(t);if(null===e.h){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+jc(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),xc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=gu(e.startAt)),e.endAt&&(t+="|ub:",t+=gu(e.endAt)),e.h=t}return e.h}function ru(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!yu(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Fc(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wu(t.startAt,e.startAt)&&wu(t.endAt,e.endAt)}function iu(t){return Uc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class su extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.l(t,e,n):new ou(t,e,n):"array-contains"===e?new lu(t,n):"in"===e?new hu(t,n):"not-in"===e?new du(t,n):"array-contains-any"===e?new fu(t,n):new su(t,e,n)}static l(t,e,n){return"in"===e?new au(t,n):new cu(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.m(qc(e,this.value)):null!==e&&Vc(this.value)===Vc(e)&&this.m(qc(e,this.value))}m(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return lc()}}g(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ou extends su{constructor(t,e,n){super(t,e,n),this.key=Uc.fromName(n.referenceValue)}matches(t){const e=Uc.comparator(t.key,this.key);return this.m(e)}}class au extends su{constructor(t,e){super(t,"in",e),this.keys=uu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class cu extends su{constructor(t,e){super(t,"not-in",e),this.keys=uu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function uu(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Uc.fromName(t.referenceValue)))}class lu extends su{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Kc(e)&&$c(e.arrayValue,this.value)}}class hu extends su{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$c(this.value.arrayValue,e)}}class du extends su{constructor(t,e){super(t,"not-in",e)}matches(t){if($c(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!$c(this.value.arrayValue,e)}}class fu extends su{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Kc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$c(this.value.arrayValue,t)))}}class pu{constructor(t,e){this.position=t,this.before=e}}function gu(t){return`${t.before?"b":"a"}:${t.position.map((t=>jc(t))).join(",")}`}class mu{constructor(t,e="asc"){this.field=t,this.dir=e}}function yu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function vu(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Uc.comparator(Uc.fromName(o.referenceValue),n.key):qc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function wu(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fc(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt}}function Eu(t){return new bu(t)}function Tu(t){return!xc(t.limit)&&"F"===t.limitType}function Iu(t){return!xc(t.limit)&&"L"===t.limitType}function _u(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Su(t){for(const e of t.filters)if(e.g())return e.field;return null}function ku(t){return null!==t.collectionGroup}function Cu(t){const e=dc(t);if(null===e.p){e.p=[];const t=Su(e),n=_u(e);if(null!==t&&null===n)t.isKeyField()||e.p.push(new mu(t)),e.p.push(new mu(Sc.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.p.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.p.push(new mu(Sc.keyField(),t))}}}return e.p}function Au(t){const e=dc(t);if(!e.T)if("F"===e.limitType)e.T=eu(e.path,e.collectionGroup,Cu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Cu(e)){const e="desc"===i.dir?"asc":"desc";t.push(new mu(i.field,e))}const n=e.endAt?new pu(e.endAt.position,!e.endAt.before):null,r=e.startAt?new pu(e.startAt.position,!e.startAt.before):null;e.T=eu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.T}function Du(t,e){return ru(Au(t),Au(e))&&t.limitType===e.limitType}function Nu(t){return`${nu(Au(t))}|lt:${t.limitType}`}function Ru(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${jc(e.value)}`;var e})).join(", ")}]`),xc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+gu(t.startAt)),t.endAt&&(e+=", endAt: "+gu(t.endAt)),`Target(${e})`}(Au(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Uc.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!vu(n.startAt,Cu(n),r)||n.endAt&&vu(n.endAt,Cu(n),r)));var n,r}function Mu(t){return(e,n)=>{let r=!1;for(const i of Cu(t)){const t=Lu(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Lu(t,e,n){const r=t.field.isKeyField()?Uc.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?qc(r,i):lc()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return lc()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e){if(t.I){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function Pu(t){return{integerValue:""+t}}function Uu(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Pu(e):xu(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this._=void 0}}function Fu(t,e,n){return t instanceof Bu?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ju?Hu(t,e):t instanceof zu?Wu(t,e):function(t,e){const n=qu(t,e),r=Gu(n)+Gu(t.A);return Wc(n)&&Wc(t.A)?Pu(r):xu(t.R,r)}(t,e)}function $u(t,e,n){return t instanceof ju?Hu(t,e):t instanceof zu?Wu(t,e):n}function qu(t,e){return t instanceof Ku?Wc(r=e)||(n=r)&&"doubleValue"in n?e:{integerValue:0}:null;var n,r}class Bu extends Vu{}class ju extends Vu{constructor(t){super(),this.elements=t}}function Hu(t,e){const n=Yu(e);for(const r of t.elements)n.some((t=>Fc(t,r)))||n.push(r);return{arrayValue:{values:n}}}class zu extends Vu{constructor(t){super(),this.elements=t}}function Wu(t,e){let n=Yu(e);for(const r of t.elements)n=n.filter((t=>!Fc(t,r)));return{arrayValue:{values:n}}}class Ku extends Vu{constructor(t,e){super(),this.R=t,this.A=e}}function Gu(t){return Nc(t.integerValue||t.doubleValue)}function Yu(t){return Kc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Qu{constructor(t,e){this.version=t,this.transformResults=e}}class Xu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xu}static exists(t){return new Xu(void 0,t)}static updateTime(t){return new Xu(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ju(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Zu{}function tl(t,e,n){var r;t instanceof sl?function(t,e,n){const r=t.value.clone(),i=cl(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ol?function(t,e,n){if(!Ju(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=cl(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(al(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function el(t,e,n){var r;t instanceof sl?function(t,e,n){if(!Ju(t.precondition,e))return;const r=t.value.clone(),i=ul(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(il(e),r).setHasLocalMutations()}(t,e,n):t instanceof ol?function(t,e,n){if(!Ju(t.precondition,e))return;const r=ul(t.fieldTransforms,n,e),i=e.data;i.setAll(al(t)),i.setAll(r),e.convertToFoundDocument(il(e),i).setHasLocalMutations()}(t,e,n):(r=e,Ju(t.precondition,r)&&r.convertToNoDocument(vc.min()))}function nl(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=qu(r.transform,t||null);null!=i&&(null==n&&(n=Xc.empty()),n.set(r.field,i))}return n||null}function rl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&mc(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof ju&&r instanceof ju||n instanceof zu&&r instanceof zu?mc(n.elements,r.elements,Fc):n instanceof Ku&&r instanceof Ku?Fc(n.A,r.A):n instanceof Bu&&r instanceof Bu);var n,r}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}function il(t){return t.isFoundDocument()?t.version:vc.min()}class sl extends Zu{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class ol extends Zu{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function al(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function cl(t,e,n){const r=new Map;hc(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$u(o,a,n[i]))}return r}function ul(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Fu(t,s,e))}return r}class ll extends Zu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class hl extends Zu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fl,pl;function gl(t){if(void 0===t)return ac("GRPC error has no .code"),nc.UNKNOWN;switch(t){case fl.OK:return nc.OK;case fl.CANCELLED:return nc.CANCELLED;case fl.UNKNOWN:return nc.UNKNOWN;case fl.DEADLINE_EXCEEDED:return nc.DEADLINE_EXCEEDED;case fl.RESOURCE_EXHAUSTED:return nc.RESOURCE_EXHAUSTED;case fl.INTERNAL:return nc.INTERNAL;case fl.UNAVAILABLE:return nc.UNAVAILABLE;case fl.UNAUTHENTICATED:return nc.UNAUTHENTICATED;case fl.INVALID_ARGUMENT:return nc.INVALID_ARGUMENT;case fl.NOT_FOUND:return nc.NOT_FOUND;case fl.ALREADY_EXISTS:return nc.ALREADY_EXISTS;case fl.PERMISSION_DENIED:return nc.PERMISSION_DENIED;case fl.FAILED_PRECONDITION:return nc.FAILED_PRECONDITION;case fl.ABORTED:return nc.ABORTED;case fl.OUT_OF_RANGE:return nc.OUT_OF_RANGE;case fl.UNIMPLEMENTED:return nc.UNIMPLEMENTED;case fl.DATA_LOSS:return nc.DATA_LOSS;default:return lc()}}(pl=fl||(fl={}))[pl.OK=0]="OK",pl[pl.CANCELLED=1]="CANCELLED",pl[pl.UNKNOWN=2]="UNKNOWN",pl[pl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pl[pl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pl[pl.NOT_FOUND=5]="NOT_FOUND",pl[pl.ALREADY_EXISTS=6]="ALREADY_EXISTS",pl[pl.PERMISSION_DENIED=7]="PERMISSION_DENIED",pl[pl.UNAUTHENTICATED=16]="UNAUTHENTICATED",pl[pl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pl[pl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pl[pl.ABORTED=10]="ABORTED",pl[pl.OUT_OF_RANGE=11]="OUT_OF_RANGE",pl[pl.UNIMPLEMENTED=12]="UNIMPLEMENTED",pl[pl.INTERNAL=13]="INTERNAL",pl[pl.UNAVAILABLE=14]="UNAVAILABLE",pl[pl.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ml{constructor(t,e){this.comparator=t,this.root=e||vl.EMPTY}insert(t,e){return new ml(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vl.BLACK,null,null))}remove(t){return new ml(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yl(this.root,t,this.comparator,!1)}getReverseIterator(){return new yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yl(this.root,t,this.comparator,!0)}}class yl{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vl{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:vl.RED,this.left=null!=r?r:vl.EMPTY,this.right=null!=i?i:vl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new vl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return vl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return vl.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw lc();if(this.right.isRed())throw lc();const t=this.left.check();if(t!==this.right.check())throw lc();return t+(this.isRed()?0:1)}}vl.EMPTY=null,vl.RED=!0,vl.BLACK=!1,vl.EMPTY=new class{constructor(){this.size=0}get key(){throw lc()}get value(){throw lc()}get color(){throw lc()}get left(){throw lc()}get right(){throw lc()}copy(t,e,n,r,i){return this}insert(t,e,n){return new vl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{constructor(t){this.comparator=t,this.data=new ml(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bl(this.data.getIterator())}getIteratorFrom(t){return new bl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof wl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new wl(this.comparator);return e.data=t,e}}class bl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new ml(Uc.comparator);function Tl(){return El}const Il=new ml(Uc.comparator);function _l(){return Il}const Sl=new ml(Uc.comparator);const kl=new wl(Uc.comparator);function Cl(...t){let e=kl;for(const n of t)e=e.add(n);return e}const Al=new wl(gc);function Dl(){return Al}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Rl.createSynthesizedTargetChangeForCurrentChange(t,e)),new Nl(vc.min(),n,Dl(),Tl(),Cl())}}class Rl{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Rl(Cc.EMPTY_BYTE_STRING,e,Cl(),Cl(),Cl())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e,n,r){this.P=t,this.removedTargetIds=e,this.key=n,this.v=r}}class Ml{constructor(t,e){this.targetId=t,this.V=e}}class Ll{constructor(t,e,n=Cc.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class xl{constructor(){this.S=0,this.D=Vl(),this.C=Cc.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}get current(){return this.N}get resumeToken(){return this.C}get O(){return 0!==this.S}get $(){return this.k}M(t){t.approximateByteSize()>0&&(this.k=!0,this.C=t)}F(){let t=Cl(),e=Cl(),n=Cl();return this.D.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:lc()}})),new Rl(this.C,this.N,t,e,n)}L(){this.k=!1,this.D=Vl()}B(t,e){this.k=!0,this.D=this.D.insert(t,e)}q(t){this.k=!0,this.D=this.D.remove(t)}U(){this.S+=1}K(){this.S-=1}j(){this.k=!0,this.N=!0}}class Pl{constructor(t){this.W=t,this.G=new Map,this.H=Tl(),this.J=Ul(),this.Y=new wl(gc)}X(t){for(const e of t.P)t.v&&t.v.isFoundDocument()?this.Z(e,t.v):this.tt(e,t.key,t.v);for(const e of t.removedTargetIds)this.tt(e,t.key,t.v)}et(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.st(e)&&n.M(t.resumeToken);break;case 1:n.K(),n.O||n.L(),n.M(t.resumeToken);break;case 2:n.K(),n.O||this.removeTarget(e);break;case 3:this.st(e)&&(n.j(),n.M(t.resumeToken));break;case 4:this.st(e)&&(this.it(e),n.M(t.resumeToken));break;default:lc()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.G.forEach(((t,n)=>{this.st(n)&&e(n)}))}rt(t){const e=t.targetId,n=t.V.count,r=this.ot(e);if(r){const t=r.target;if(iu(t))if(0===n){const n=new Uc(t.path);this.tt(e,n,Zc.newNoDocument(n,vc.min()))}else hc(1===n);else this.ct(e)!==n&&(this.it(e),this.Y=this.Y.add(e))}}ut(t){const e=new Map;this.G.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&iu(i.target)){const e=new Uc(i.target.path);null!==this.H.get(e)||this.at(r,e)||this.tt(r,e,Zc.newNoDocument(e,t))}n.$&&(e.set(r,n.F()),n.L())}}));let n=Cl();this.J.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ot(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new Nl(t,e,this.Y,this.H,n);return this.H=Tl(),this.J=Ul(),this.Y=new wl(gc),r}Z(t,e){if(!this.st(t))return;const n=this.at(t,e.key)?2:0;this.nt(t).B(e.key,n),this.H=this.H.insert(e.key,e),this.J=this.J.insert(e.key,this.ht(e.key).add(t))}tt(t,e,n){if(!this.st(t))return;const r=this.nt(t);this.at(t,e)?r.B(e,1):r.q(e),this.J=this.J.insert(e,this.ht(e).delete(t)),n&&(this.H=this.H.insert(e,n))}removeTarget(t){this.G.delete(t)}ct(t){const e=this.nt(t).F();return this.W.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}U(t){this.nt(t).U()}nt(t){let e=this.G.get(t);return e||(e=new xl,this.G.set(t,e)),e}ht(t){let e=this.J.get(t);return e||(e=new wl(gc),this.J=this.J.insert(t,e)),e}st(t){const e=null!==this.ot(t);return e||oc("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.G.get(t);return e&&e.O?null:this.W.lt(t)}it(t){this.G.set(t,new xl),this.W.getRemoteKeysForTarget(t).forEach((e=>{this.tt(t,e,null)}))}at(t,e){return this.W.getRemoteKeysForTarget(t).has(e)}}function Ul(){return new ml(Uc.comparator)}function Vl(){return new ml(Uc.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={asc:"ASCENDING",desc:"DESCENDING"},$l={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class ql{constructor(t,e){this.databaseId=t,this.I=e}}function Bl(t,e){return t.I?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jl(t,e){return t.I?e.toBase64():e.toUint8Array()}function Hl(t,e){return Bl(t,e.toTimestamp())}function zl(t){return hc(!!t),vc.fromTimestamp(function(t){const e=Dc(t);return new yc(e.seconds,e.nanos)}(t))}function Wl(t,e){return(n=t,new Ic(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Kl(t){const e=Ic.fromString(t);return hc(fh(e)),e}function Gl(t,e){return Wl(t.databaseId,e.path)}function Yl(t,e){const n=Kl(e);if(n.get(1)!==t.databaseId.projectId)throw new rc(nc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new rc(nc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Uc(Jl(n))}function Ql(t,e){return Wl(t.databaseId,e)}function Xl(t){return new Ic(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jl(t){return hc(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Zl(t,e,n){return{name:Gl(t,e),fields:n.toProto().mapValue.fields}}function th(t,e){return{documents:[Ql(t,e.path)]}}function eh(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Ql(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ql(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Yc(t.value))return{unaryFilter:{field:ch(t.field),op:"IS_NAN"}};if(Gc(t.value))return{unaryFilter:{field:ch(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Yc(t.value))return{unaryFilter:{field:ch(t.field),op:"IS_NOT_NAN"}};if(Gc(t.value))return{unaryFilter:{field:ch(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ch(t.field),op:ah(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:ch((e=t).field),direction:oh(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.I||xc(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=ih(e.startAt)),e.endAt&&(n.structuredQuery.endAt=ih(e.endAt)),n}function nh(t){let e=function(t){const e=Kl(t);return 4===e.length?Ic.emptyPath():Jl(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){hc(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=rh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new mu(uh((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,xc(e)?null:e}(n.limit));let c=null;n.startAt&&(c=sh(n.startAt));let u=null;return n.endAt&&(u=sh(n.endAt)),function(t,e,n,r,i,s,o,a){return new bu(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function rh(t){return t?void 0!==t.unaryFilter?[hh(t)]:void 0!==t.fieldFilter?[lh(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>rh(t))).reduce(((t,e)=>t.concat(e))):lc():[]}function ih(t){return{before:t.before,values:t.position}}function sh(t){const e=!!t.before,n=t.values||[];return new pu(n,e)}function oh(t){return Fl[t]}function ah(t){return $l[t]}function ch(t){return{fieldPath:t.canonicalString()}}function uh(t){return Sc.fromServerFormat(t.fieldPath)}function lh(t){return su.create(uh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return lc()}}(t.fieldFilter.op),t.fieldFilter.value)}function hh(t){switch(t.unaryFilter.op){case"IS_NAN":const e=uh(t.unaryFilter.field);return su.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=uh(t.unaryFilter.field);return su.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=uh(t.unaryFilter.field);return su.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=uh(t.unaryFilter.field);return su.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return lc()}}function dh(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&lc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gh(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gh?e:gh.resolve(e)}catch(e){return gh.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gh.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gh.reject(e)}static resolve(t){return new gh(((e,n)=>{e(t)}))}static reject(t){return new gh(((e,n)=>{n(t)}))}static waitFor(t){return new gh(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=gh.resolve(!1);for(const n of t)e=e.next((t=>t?gh.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function mh(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&tl(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&el(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&el(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(vc.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Cl())}isEqual(t){return this.batchId===t.batchId&&mc(this.mutations,t.mutations,((t,e)=>rl(t,e)))&&mc(this.baseMutations,t.baseMutations,((t,e)=>rl(t,e)))}}class vh{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){hc(t.mutations.length===n.length);let r=Sl;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new vh(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e,n,r,i=vc.min(),s=vc.min(),o=Cc.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new wh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new wh(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new wh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t){this.Lt=t}}function Eh(t){const e=nh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new bu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.Bt=new Ih}addToCollectionParentIndex(t,e){return this.Bt.add(e),gh.resolve()}getCollectionParents(t,e){return gh.resolve(this.Bt.getEntries(e))}}class Ih{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new wl(Ic.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new wl(Ic.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t){this.Ht=t}next(){return this.Ht+=2,this.Ht}static Jt(){return new _h(0)}static Yt(){return new _h(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh(t){if(t.code!==nc.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;oc("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){bc(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Ec(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ch{constructor(t,e,n){this.Ue=t,this._n=e,this.Ut=n}mn(t,e){return this._n.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.gn(t,e,n)))}gn(t,e,n){return this.Ue.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}yn(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}pn(t,e){return this.Ue.getEntries(t,e).next((e=>this.En(t,e).next((()=>e))))}En(t,e){return this._n.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.yn(e,t)))}getDocumentsMatchingQuery(t,e,n){return r=e,Uc.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(t,e.path):ku(e)?this.In(t,e,n):this.An(t,e,n);var r}Tn(t,e){return this.mn(t,new Uc(e)).next((t=>{let e=_l();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}In(t,e,n){const r=e.collectionGroup;let i=_l();return this.Ut.getCollectionParents(t,r).next((s=>gh.forEach(s,(s=>{const o=(a=e,c=s.child(r),new bu(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.An(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}An(t,e,n){let r,i;return this.Ue.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this._n.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Rn(t,i,r).next((t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Zc.newInvalidDocument(n),r=r.insert(n,i)),el(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{Ou(e,n)||(r=r.remove(t))})),r)))}Rn(t,e,n){let r=Cl();for(const s of e)for(const t of s.mutations)t instanceof ol&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Ue.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pn=n,this.bn=r}static vn(t,e){let n=Cl(),r=Cl();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ah(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{Vn(t){this.Sn=t}getDocumentsMatchingQuery(t,e,n,r){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(vc.min())?this.Dn(t,e):this.Sn.pn(t,r).next((i=>{const s=this.Cn(e,i);return(Tu(e)||Iu(e))&&this.Nn(e.limitType,s,r,n)?this.Dn(t,e):(sc()<=he.DEBUG&&oc("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ru(e)),this.Sn.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Cn(t,e){let n=new wl(Mu(t));return e.forEach(((e,r)=>{Ou(t,r)&&(n=n.add(r))})),n}Nn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Dn(t,e){return sc()<=he.DEBUG&&oc("QueryEngine","Using full collection scan to execute query:",Ru(e)),this.Sn.getDocumentsMatchingQuery(t,e,vc.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e,n,r){this.persistence=t,this.xn=e,this.R=r,this.kn=new ml(gc),this.On=new kh((t=>nu(t)),ru),this.$n=vc.min(),this._n=t.getMutationQueue(n),this.Mn=t.getRemoteDocumentCache(),this.qe=t.getTargetCache(),this.Fn=new Ch(this.Mn,this._n,this.persistence.getIndexManager()),this.Ke=t.getBundleCache(),this.xn.Vn(this.Fn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.kn)))}}async function Rh(t,e){const n=dc(t);let r=n._n,i=n.Fn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n._n.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Ch(n.Mn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=Cl();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.pn(t,o).next((t=>({Ln:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n._n=r,n.Fn=i,n.xn.Vn(n.Fn),s}function Oh(t){const e=dc(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qe.getLastRemoteSnapshotVersion(t)))}function Mh(t,e){const n=dc(t),r=e.snapshotVersion;let i=n.kn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Mn.newChangeBuffer({trackRemovals:!0});i=n.kn;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.qe.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.qe.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,d),u=a,h=e,hc((l=d).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.qe.updateTargetData(t,d))}var u,l,h}));let a=Tl();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=Cl();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Tl();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(vc.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):oc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(vc.min())){const e=n.qe.getLastRemoteSnapshotVersion(t).next((e=>n.qe.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return gh.waitFor(o).next((()=>s.apply(t))).next((()=>n.Fn.En(t,a))).next((()=>a))})).then((t=>(n.kn=i,t)))}function Lh(t,e){const n=dc(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n._n.getNextMutationBatchAfterBatchId(t,e))))}async function xh(t,e,n){const r=dc(t),i=r.kn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!mh(o))throw o;oc("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.kn=r.kn.remove(e),r.On.delete(i.target)}function Ph(t,e,n){const r=dc(t);let i=vc.min(),s=Cl();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=dc(t),i=r.On.get(n);return void 0!==i?gh.resolve(r.kn.get(i)):r.qe.getTargetData(e,n)}(r,t,Au(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.qe.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.xn.getDocumentsMatchingQuery(t,e,n?i:vc.min(),n?s:Cl()))).next((t=>({documents:t,Bn:s})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t){this.R=t,this.Qn=new Map,this.jn=new Map}getBundleMetadata(t,e){return gh.resolve(this.Qn.get(e))}saveBundleMetadata(t,e){var n;return this.Qn.set(e.id,{id:(n=e).id,version:n.version,createTime:zl(n.createTime)}),gh.resolve()}getNamedQuery(t,e){return gh.resolve(this.jn.get(e))}saveNamedQuery(t,e){return this.jn.set(e.name,{name:(n=e).name,query:Eh(n.bundledQuery),readTime:zl(n.readTime)}),gh.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Wn=new wl(Fh.Gn),this.zn=new wl(Fh.Hn)}isEmpty(){return this.Wn.isEmpty()}addReference(t,e){const n=new Fh(t,e);this.Wn=this.Wn.add(n),this.zn=this.zn.add(n)}Jn(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Yn(new Fh(t,e))}Xn(t,e){t.forEach((t=>this.removeReference(t,e)))}Zn(t){const e=new Uc(new Ic([])),n=new Fh(e,t),r=new Fh(e,t+1),i=[];return this.zn.forEachInRange([n,r],(t=>{this.Yn(t),i.push(t.key)})),i}ts(){this.Wn.forEach((t=>this.Yn(t)))}Yn(t){this.Wn=this.Wn.delete(t),this.zn=this.zn.delete(t)}es(t){const e=new Uc(new Ic([])),n=new Fh(e,t),r=new Fh(e,t+1);let i=Cl();return this.zn.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Fh(t,0),n=this.Wn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Fh{constructor(t,e){this.key=t,this.ns=e}static Gn(t,e){return Uc.comparator(t.key,e.key)||gc(t.ns,e.ns)}static Hn(t,e){return gc(t.ns,e.ns)||Uc.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e){this.Ut=t,this.referenceDelegate=e,this._n=[],this.ss=1,this.rs=new wl(Fh.Gn)}checkEmpty(t){return gh.resolve(0===this._n.length)}addMutationBatch(t,e,n,r){const i=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];const s=new yh(i,e,n,r);this._n.push(s);for(const o of r)this.rs=this.rs.add(new Fh(o.key,i)),this.Ut.addToCollectionParentIndex(t,o.key.path.popLast());return gh.resolve(s)}lookupMutationBatch(t,e){return gh.resolve(this.os(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.cs(n),i=r<0?0:r;return gh.resolve(this._n.length>i?this._n[i]:null)}getHighestUnacknowledgedBatchId(){return gh.resolve(0===this._n.length?-1:this.ss-1)}getAllMutationBatches(t){return gh.resolve(this._n.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Fh(e,0),r=new Fh(e,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([n,r],(t=>{const e=this.os(t.ns);i.push(e)})),gh.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new wl(gc);return e.forEach((t=>{const e=new Fh(t,0),r=new Fh(t,Number.POSITIVE_INFINITY);this.rs.forEachInRange([e,r],(t=>{n=n.add(t.ns)}))})),gh.resolve(this.us(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Uc.isDocumentKey(i)||(i=i.child(""));const s=new Fh(new Uc(i),0);let o=new wl(gc);return this.rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ns)),!0)}),s),gh.resolve(this.us(o))}us(t){const e=[];return t.forEach((t=>{const n=this.os(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){hc(0===this.hs(e.batchId,"removed")),this._n.shift();let n=this.rs;return gh.forEach(e.mutations,(r=>{const i=new Fh(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.rs=n}))}Gt(t){}containsKey(t,e){const n=new Fh(e,0),r=this.rs.firstAfterOrEqual(n);return gh.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this._n.length,gh.resolve()}hs(t,e){return this.cs(t)}cs(t){return 0===this._n.length?0:t-this._n[0].batchId}os(t){const e=this.cs(t);return e<0||e>=this._n.length?null:this._n[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e){this.Ut=t,this.ls=e,this.docs=new ml(Uc.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ls(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ut.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gh.resolve(n?n.document.clone():Zc.newInvalidDocument(e))}getEntries(t,e){let n=Tl();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Zc.newInvalidDocument(t))})),gh.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Tl();const i=new Uc(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Ou(e,i)&&(r=r.insert(i.key,i.clone()))}return gh.resolve(r)}fs(t,e){return gh.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Bh(this)}getSize(t){return gh.resolve(this.size)}}class Bh extends class{constructor(){this.changes=new kh((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:vc.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Zc.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gh.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Ie=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Ie.addEntry(t,r.document,this.getReadTime(n))):this.Ie.removeEntry(n)})),gh.waitFor(e)}getFromCache(t,e){return this.Ie.getEntry(t,e)}getAllFromCache(t,e){return this.Ie.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.persistence=t,this.ds=new kh((t=>nu(t)),ru),this.lastRemoteSnapshotVersion=vc.min(),this.highestTargetId=0,this.ws=0,this._s=new Vh,this.targetCount=0,this.gs=_h.Jt()}forEachTarget(t,e){return this.ds.forEach(((t,n)=>e(n))),gh.resolve()}getLastRemoteSnapshotVersion(t){return gh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gh.resolve(this.ws)}allocateTargetId(t){return this.highestTargetId=this.gs.next(),gh.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ws&&(this.ws=e),gh.resolve()}te(t){this.ds.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.gs=new _h(e),this.highestTargetId=e),t.sequenceNumber>this.ws&&(this.ws=t.sequenceNumber)}addTargetData(t,e){return this.te(e),this.targetCount+=1,gh.resolve()}updateTargetData(t,e){return this.te(e),gh.resolve()}removeTargetData(t,e){return this.ds.delete(e.target),this._s.Zn(e.targetId),this.targetCount-=1,gh.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ds.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ds.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),gh.waitFor(i).next((()=>r))}getTargetCount(t){return gh.resolve(this.targetCount)}getTargetData(t,e){const n=this.ds.get(e)||null;return gh.resolve(n)}addMatchingKeys(t,e,n){return this._s.Jn(e,n),gh.resolve()}removeMatchingKeys(t,e,n){this._s.Xn(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),gh.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._s.Zn(e),gh.resolve()}getMatchingKeysForTargetId(t,e){const n=this._s.es(e);return gh.resolve(n)}containsKey(t,e){return gh.resolve(this._s.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e){var n;this.ys={},this.Ne=new ec(0),this.xe=!1,this.xe=!0,this.referenceDelegate=t(this),this.qe=new jh(this),this.Ut=new Th,this.Ue=(n=this.Ut,new qh(n,(t=>this.referenceDelegate.ps(t)))),this.R=new bh(e),this.Ke=new Uh(this.R)}start(){return Promise.resolve()}shutdown(){return this.xe=!1,Promise.resolve()}get started(){return this.xe}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ut}getMutationQueue(t){let e=this.ys[t.toKey()];return e||(e=new $h(this.Ut,this.referenceDelegate),this.ys[t.toKey()]=e),e}getTargetCache(){return this.qe}getRemoteDocumentCache(){return this.Ue}getBundleCache(){return this.Ke}runTransaction(t,e,n){oc("MemoryPersistence","Starting transaction:",t);const r=new zh(this.Ne.next());return this.referenceDelegate.Es(),n(r).next((t=>this.referenceDelegate.Ts(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Is(t,e){return gh.or(Object.values(this.ys).map((n=>()=>n.containsKey(t,e))))}}class zh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Wh{constructor(t){this.persistence=t,this.As=new Vh,this.Rs=null}static Ps(t){return new Wh(t)}get bs(){if(this.Rs)return this.Rs;throw lc()}addReference(t,e,n){return this.As.addReference(n,e),this.bs.delete(n.toString()),gh.resolve()}removeReference(t,e,n){return this.As.removeReference(n,e),this.bs.add(n.toString()),gh.resolve()}markPotentiallyOrphaned(t,e){return this.bs.add(e.toString()),gh.resolve()}removeTarget(t,e){this.As.Zn(e.targetId).forEach((t=>this.bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Es(){this.Rs=new Set}Ts(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gh.forEach(this.bs,(n=>{const r=Uc.fromPath(n);return this.vs(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Rs=null,e.apply(t))))}updateLimboDocument(t,e){return this.vs(t,e).next((t=>{t?this.bs.delete(e.toString()):this.bs.add(e.toString())}))}ps(t){return 0}vs(t,e){return gh.or([()=>gh.resolve(this.As.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Is(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Kh.UNAUTHENTICATED=new Kh(null),Kh.GOOGLE_CREDENTIALS=new Kh("google-credentials-uid"),Kh.FIRST_PARTY=new Kh("first-party-uid");class Gh{constructor(){this.activeTargetIds=Dl()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}Cs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yh{constructor(){this.li=new Gh,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.li.Ds(t),this.fi[t]||"not-current"}updateQueryState(t,e,n){this.fi[t]=e}removeLocalQueryTarget(t){this.li.Cs(t)}isLocalQueryTarget(t){return this.li.activeTargetIds.has(t)}clearQueryState(t){delete this.fi[t]}getAllActiveQueryTargets(){return this.li.activeTargetIds}isActiveQueryTarget(t){return this.li.activeTargetIds.has(t)}start(){return this.li=new Gh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{di(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.wi=()=>this._i(),this.mi=()=>this.gi(),this.yi=[],this.pi()}di(t){this.yi.push(t)}shutdown(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)}pi(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)}_i(){oc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.yi)t(0)}gi(){oc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.yi)t(1)}static gt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.Ei=t.Ei,this.Ti=t.Ti}Ii(t){this.Ai=t}Ri(t){this.Pi=t}onMessage(t){this.bi=t}close(){this.Ti()}send(t){this.Ei(t)}vi(){this.Ai()}Vi(t){this.Pi(t)}Si(t){this.bi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Di=e+"://"+t.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Ni(t,e,n,r){const i=this.xi(t,e);oc("RestConnection","Sending: ",i,n);const s={};return this.ki(s,r),this.Oi(t,i,s,n).then((t=>(oc("RestConnection","Received: ",t),t)),(e=>{throw cc("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}$i(t,e,n,r){return this.Ni(t,e,n,r)}ki(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/8.4.1",t["X-Firebase-GMPID"]=this.databaseInfo.appId,t["Content-Type"]="text/plain",e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}xi(t,e){const n=Jh[t];return`${this.Di}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling}Oi(t,e,n,r){return new Promise(((i,s)=>{const o=new tc;o.listenOnce(Ya.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ga.NO_ERROR:const e=o.getResponseJson();oc("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Ga.TIMEOUT:oc("Connection",'RPC "'+t+'" timed out'),s(new rc(nc.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const n=o.getStatus();if(oc("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(nc).indexOf(e)>=0?e:nc.UNKNOWN}(t.status);s(new rc(e,t.message))}else s(new rc(nc.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new rc(nc.UNAVAILABLE,"Connection failed."));break;default:lc()}}finally{oc("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}Mi(t,e){const n=[this.Di,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new ja,i=Hs(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.ki(s.initMessageHeaders,e),Gt()||Qt()||Kt().indexOf("Electron/")>=0||Xt()||Kt().indexOf("MSAppHost/")>=0||Yt()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");oc("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,u=!1;const l=new Zh({Ei:t=>{u?oc("Connection","Not sending because WebChannel is closed:",t):(c||(oc("Connection","Opening WebChannel transport."),a.open(),c=!0),oc("Connection","WebChannel sending:",t),a.send(t))},Ti:()=>a.close()}),h=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return h(a,Za.EventType.OPEN,(()=>{u||oc("Connection","WebChannel transport opened.")})),h(a,Za.EventType.CLOSE,(()=>{u||(u=!0,oc("Connection","WebChannel transport closed"),l.Vi())})),h(a,Za.EventType.ERROR,(t=>{u||(u=!0,cc("Connection","WebChannel transport errored:",t),l.Vi(new rc(nc.UNAVAILABLE,"The operation could not be completed")))})),h(a,Za.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];hc(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){oc("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=fl[t];if(void 0!==e)return gl(e)}(t),n=i.message;void 0===e&&(e=nc.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.Vi(new rc(e,n)),a.close()}else oc("Connection","WebChannel received:",n),l.Si(n)}})),h(i,Qa.STAT_EVENT,(t=>{t.stat===Xa?oc("Connection","Detected buffering proxy"):t.stat===Ja&&oc("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.vi()}),0),l}}function ed(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){return new ql(t,!0)}class rd{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Se=t,this.timerId=e,this.Fi=n,this.Li=r,this.Bi=i,this.qi=0,this.Ui=null,this.Ki=Date.now(),this.reset()}reset(){this.qi=0}Qi(){this.qi=this.Bi}ji(t){this.cancel();const e=Math.floor(this.qi+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,e-n);r>0&&oc("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.qi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ui=this.Se.enqueueAfterDelay(this.timerId,r,(()=>(this.Ki=Date.now(),t()))),this.qi*=this.Li,this.qi<this.Fi&&(this.qi=this.Fi),this.qi>this.Bi&&(this.qi=this.Bi)}Gi(){null!==this.Ui&&(this.Ui.skipDelay(),this.Ui=null)}cancel(){null!==this.Ui&&(this.Ui.cancel(),this.Ui=null)}Wi(){return(Math.random()-.5)*this.qi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,e,n,r,i,s){this.Se=t,this.zi=n,this.Hi=r,this.Ji=i,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new rd(t,e)}tr(){return 1===this.state||2===this.state||4===this.state}er(){return 2===this.state}start(){3!==this.state?this.auth():this.nr()}async stop(){this.tr()&&await this.close(0)}sr(){this.state=0,this.Zi.reset()}ir(){this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,(()=>this.rr())))}cr(t){this.ur(),this.stream.send(t)}async rr(){if(this.er())return this.close(0)}ur(){this.Xi&&(this.Xi.cancel(),this.Xi=null)}async close(t,e){this.ur(),this.Zi.cancel(),this.Yi++,3!==t?this.Zi.reset():e&&e.code===nc.RESOURCE_EXHAUSTED?(ac(e.toString()),ac("Using maximum backoff delay to prevent overloading the backend."),this.Zi.Qi()):e&&e.code===nc.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ar(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ri(e)}ar(){}auth(){this.state=1;const t=this.hr(this.Yi),e=this.Yi;this.Ji.getToken().then((t=>{this.Yi===e&&this.lr(t)}),(e=>{t((()=>{const t=new rc(nc.UNKNOWN,"Fetching auth token failed: "+e.message);return this.dr(t)}))}))}lr(t){const e=this.hr(this.Yi);this.stream=this.wr(t),this.stream.Ii((()=>{e((()=>(this.state=2,this.listener.Ii())))})),this.stream.Ri((t=>{e((()=>this.dr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}nr(){this.state=4,this.Zi.ji((async()=>{this.state=0,this.start()}))}dr(t){return oc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}hr(t){return e=>{this.Se.enqueueAndForget((()=>this.Yi===t?e():(oc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sd extends id{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.R=r}wr(t){return this.Hi.Mi("Listen",t)}onMessage(t){this.Zi.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:lc(),s=e.targetChange.targetIds||[],o=function(t,e){return t.I?(hc(void 0===e||"string"==typeof e),Cc.fromBase64String(e||"")):(hc(void 0===e||e instanceof Uint8Array),Cc.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?nc.UNKNOWN:gl(t.code);return new rc(e,t.message||"")}(a);n=new Ll(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yl(t,r.document.name),s=zl(r.document.updateTime),o=new Xc({mapValue:{fields:r.document.fields}}),a=Zc.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ol(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yl(t,r.document),s=r.readTime?zl(r.readTime):vc.min(),o=Zc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ol([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yl(t,r.document),s=r.removedTargetIds||[];n=new Ol([],s,i,null)}else{if(!("filter"in e))return lc();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new dl(r),s=t.targetId;n=new Ml(s,i)}}var r;return n}(this.R,t),n=function(t){if(!("targetChange"in t))return vc.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?vc.min():e.readTime?zl(e.readTime):vc.min()}(t);return this.listener._r(e,n)}mr(t){const e={};e.database=Xl(this.R),e.addTarget=function(t,e){let n;const r=e.target;return n=iu(r)?{documents:th(t,r)}:{query:eh(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=jl(t,e.resumeToken):e.snapshotVersion.compareTo(vc.min())>0&&(n.readTime=Bl(t,e.snapshotVersion.toTimestamp())),n}(this.R,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return lc()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.R,t);n&&(e.labels=n),this.cr(e)}gr(t){const e={};e.database=Xl(this.R),e.removeTarget=t,this.cr(e)}}class od extends id{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.R=r,this.yr=!1}get pr(){return this.yr}start(){this.yr=!1,this.lastStreamToken=void 0,super.start()}ar(){this.yr&&this.Er([])}wr(t){return this.Hi.Mi("Write",t)}onMessage(t){if(hc(!!t.streamToken),this.lastStreamToken=t.streamToken,this.yr){this.Zi.reset();const e=function(t,e){return t&&t.length>0?(hc(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?zl(t.updateTime):zl(e);return n.isEqual(vc.min())&&(n=zl(e)),new Qu(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=zl(t.commitTime);return this.listener.Tr(n,e)}return hc(!t.writeResults||0===t.writeResults.length),this.yr=!0,this.listener.Ir()}Ar(){const t={};t.database=Xl(this.R),this.cr(t)}Er(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof sl)n={update:Zl(t,e.key,e.value)};else if(e instanceof ll)n={delete:Gl(t,e.key)};else if(e instanceof ol)n={update:Zl(t,e.key,e.data),updateMask:dh(e.fieldMask)};else{if(!(e instanceof hl))return lc();n={verify:Gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Bu)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ju)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zu)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ku)return{fieldPath:e.field.canonicalString(),increment:n.A};throw lc()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:Hl(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:lc())),n;var r,i}(this.R,t)))};this.cr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends class{}{constructor(t,e,n){super(),this.credentials=t,this.Hi=e,this.R=n,this.Rr=!1}Pr(){if(this.Rr)throw new rc(nc.FAILED_PRECONDITION,"The client has already been terminated.")}Ni(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Ni(t,e,n,r))).catch((t=>{throw t.code===nc.UNAUTHENTICATED&&this.credentials.invalidateToken(),t}))}$i(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.$i(t,e,n,r))).catch((t=>{throw t.code===nc.UNAUTHENTICATED&&this.credentials.invalidateToken(),t}))}terminate(){this.Rr=!1}}class cd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.br=0,this.vr=null,this.Vr=!0}Sr(){0===this.br&&(this.Dr("Unknown"),this.vr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.vr=null,this.Cr("Backend didn't respond within 10 seconds."),this.Dr("Offline"),Promise.resolve()))))}Nr(t){"Online"===this.state?this.Dr("Unknown"):(this.br++,this.br>=1&&(this.kr(),this.Cr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Dr("Offline")))}set(t){this.kr(),this.br=0,"Online"===t&&(this.Vr=!1),this.Dr(t)}Dr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Cr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(ac(e),this.Vr=!1):oc("OnlineStateTracker",e)}kr(){null!==this.vr&&(this.vr.cancel(),this.vr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Or=[],this.$r=new Map,this.Mr=new Set,this.Fr=[],this.Lr=i,this.Lr.di((t=>{n.enqueueAndForget((async()=>{vd(this)&&(oc("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=dc(t);e.Mr.add(4),await hd(e),e.Br.set("Unknown"),e.Mr.delete(4),await ld(e)}(this))}))})),this.Br=new cd(n,r)}}async function ld(t){if(vd(t))for(const e of t.Fr)await e(!0)}async function hd(t){for(const e of t.Fr)await e(!1)}function dd(t,e){const n=dc(t);n.$r.has(e.targetId)||(n.$r.set(e.targetId,e),yd(n)?md(n):Ld(n).er()&&pd(n,e))}function fd(t,e){const n=dc(t),r=Ld(n);n.$r.delete(e),r.er()&&gd(n,e),0===n.$r.size&&(r.er()?r.ir():vd(n)&&n.Br.set("Unknown"))}function pd(t,e){t.qr.U(e.targetId),Ld(t).mr(e)}function gd(t,e){t.qr.U(e),Ld(t).gr(e)}function md(t){t.qr=new Pl({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.$r.get(e)||null}),Ld(t).start(),t.Br.Sr()}function yd(t){return vd(t)&&!Ld(t).tr()&&t.$r.size>0}function vd(t){return 0===dc(t).Mr.size}function wd(t){t.qr=void 0}async function bd(t){t.$r.forEach(((e,n)=>{pd(t,e)}))}async function Ed(t,e){wd(t),yd(t)?(t.Br.Nr(e),md(t)):t.Br.set("Unknown")}async function Td(t,e,n){if(t.Br.set("Online"),e instanceof Ll&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.$r.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.$r.delete(r),t.qr.removeTarget(r))}(t,e)}catch(r){oc("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Id(t,r)}else if(e instanceof Ol?t.qr.X(e):e instanceof Ml?t.qr.rt(e):t.qr.et(e),!n.isEqual(vc.min()))try{const e=await Oh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.qr.ut(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.$r.get(r);i&&t.$r.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.$r.get(e);if(!n)return;t.$r.set(e,n.withResumeToken(Cc.EMPTY_BYTE_STRING,n.snapshotVersion)),gd(t,e);const r=new wh(n.target,e,1,n.sequenceNumber);pd(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){oc("RemoteStore","Failed to raise snapshot:",i),await Id(t,i)}}async function Id(t,e,n){if(!mh(e))throw e;t.Mr.add(1),await hd(t),t.Br.set("Offline"),n||(n=()=>Oh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{oc("RemoteStore","Retrying IndexedDB access"),await n(),t.Mr.delete(1),await ld(t)}))}function _d(t,e){return e().catch((n=>Id(t,n,e)))}async function Sd(t){const e=dc(t),n=xd(e);let r=e.Or.length>0?e.Or[e.Or.length-1].batchId:-1;for(;kd(e);)try{const t=await Lh(e.localStore,r);if(null===t){0===e.Or.length&&n.ir();break}r=t.batchId,Cd(e,t)}catch(i){await Id(e,i)}Ad(e)&&Dd(e)}function kd(t){return vd(t)&&t.Or.length<10}function Cd(t,e){t.Or.push(e);const n=xd(t);n.er()&&n.pr&&n.Er(e.mutations)}function Ad(t){return vd(t)&&!xd(t).tr()&&t.Or.length>0}function Dd(t){xd(t).start()}async function Nd(t){xd(t).Ar()}async function Rd(t){const e=xd(t);for(const n of t.Or)e.Er(n.mutations)}async function Od(t,e,n){const r=t.Or.shift(),i=vh.from(r,e,n);await _d(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Sd(t)}async function Md(t,e){e&&xd(t).pr&&await async function(t,e){if(function(t){switch(t){case nc.OK:return lc();case nc.CANCELLED:case nc.UNKNOWN:case nc.DEADLINE_EXCEEDED:case nc.RESOURCE_EXHAUSTED:case nc.INTERNAL:case nc.UNAVAILABLE:case nc.UNAUTHENTICATED:return!1;case nc.INVALID_ARGUMENT:case nc.NOT_FOUND:case nc.ALREADY_EXISTS:case nc.PERMISSION_DENIED:case nc.FAILED_PRECONDITION:case nc.ABORTED:case nc.OUT_OF_RANGE:case nc.UNIMPLEMENTED:case nc.DATA_LOSS:return!0;default:return lc()}}(n=e.code)&&n!==nc.ABORTED){const n=t.Or.shift();xd(t).sr(),await _d(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Sd(t)}var n}(t,e),Ad(t)&&Dd(t)}function Ld(t){return t.Ur||(t.Ur=function(t,e,n){const r=dc(t);return r.Pr(),new sd(e,r.Hi,r.credentials,r.R,n)}(t.datastore,t.asyncQueue,{Ii:bd.bind(null,t),Ri:Ed.bind(null,t),_r:Td.bind(null,t)}),t.Fr.push((async e=>{e?(t.Ur.sr(),yd(t)?md(t):t.Br.set("Unknown")):(await t.Ur.stop(),wd(t))}))),t.Ur}function xd(t){return t.Kr||(t.Kr=function(t,e,n){const r=dc(t);return r.Pr(),new od(e,r.Hi,r.credentials,r.R,n)}(t.datastore,t.asyncQueue,{Ii:Nd.bind(null,t),Ri:Md.bind(null,t),Ir:Rd.bind(null,t),Tr:Od.bind(null,t)}),t.Fr.push((async e=>{e?(t.Kr.sr(),await Sd(t)):(await t.Kr.stop(),t.Or.length>0&&(oc("RemoteStore",`Stopping write stream with ${t.Or.length} pending writes`),t.Or=[]))}))),t.Kr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Pd{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ph,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Pd(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rc(nc.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ud(t,e){if(ac("AsyncQueue",`${e}: ${t}`),mh(t))return new rc(nc.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Uc.comparator(e.key,n.key):(t,e)=>Uc.comparator(t.key,e.key),this.keyedMap=_l(),this.sortedSet=new ml(this.comparator)}static emptySet(t){return new Vd(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vd))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Vd;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.Qr=new ml(Uc.comparator)}track(t){const e=t.doc.key,n=this.Qr.get(e);n?0!==t.type&&3===n.type?this.Qr=this.Qr.insert(e,t):3===t.type&&1!==n.type?this.Qr=this.Qr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Qr=this.Qr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Qr=this.Qr.remove(e):1===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):lc():this.Qr=this.Qr.insert(e,t)}jr(){const t=[];return this.Qr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class $d{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new $d(t,e,Vd.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Du(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.Wr=void 0,this.listeners=[]}}class Bd{constructor(){this.queries=new kh((t=>Nu(t)),Du),this.onlineState="Unknown",this.Gr=new Set}}function jd(t,e){const n=dc(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Hr(i)&&(r=!0);e.Wr=i}}r&&zd(n)}function Hd(t,e,n){const r=dc(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function zd(t){t.Gr.forEach((t=>{t.next()}))}class Wd{constructor(t,e,n){this.query=t,this.Jr=e,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}Hr(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new $d(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Yr?this.Zr(t)&&(this.Jr.next(t),e=!0):this.eo(t,this.onlineState)&&(this.no(t),e=!0),this.Xr=t,e}onError(t){this.Jr.error(t)}zr(t){this.onlineState=t;let e=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,t)&&(this.no(this.Xr),e=!0),e}eo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.so&&n||t.docs.isEmpty()&&"Offline"!==e)}Zr(t){if(t.docChanges.length>0)return!0;const e=this.Xr&&this.Xr.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}no(t){t=$d.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Yr=!0,this.Jr.next(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.key=t}}class Gd{constructor(t){this.key=t}}class Yd{constructor(t,e){this.query=t,this.uo=e,this.ao=null,this.current=!1,this.ho=Cl(),this.mutatedKeys=Cl(),this.lo=Mu(t),this.fo=new Vd(this.lo)}get wo(){return this.uo}_o(t,e){const n=e?e.mo:new Fd,r=e?e.fo:this.fo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Tu(this.query)&&r.size===this.query.limit?r.last():null,c=Iu(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Ou(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.yo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.lo(l,a)>0||c&&this.lo(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),Tu(this.query)||Iu(this.query))for(;s.size>this.query.limit;){const t=Tu(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{fo:s,mo:n,Nn:o,mutatedKeys:i}}yo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.fo;this.fo=t.fo,this.mutatedKeys=t.mutatedKeys;const i=t.mo.jr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return lc()}};return n(t)-n(e)}(t.type,e.type)||this.lo(t.doc,e.doc))),this.po(n);const s=e?this.Eo():[],o=0===this.ho.size&&this.current?1:0,a=o!==this.ao;return this.ao=o,0!==i.length||a?{snapshot:new $d(this.query,t.fo,r,i,t.mutatedKeys,0===o,a,!1),To:s}:{To:s}}zr(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({fo:this.fo,mo:new Fd,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}}Io(t){return!this.uo.has(t)&&!!this.fo.has(t)&&!this.fo.get(t).hasLocalMutations}po(t){t&&(t.addedDocuments.forEach((t=>this.uo=this.uo.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.uo=this.uo.delete(t))),this.current=t.current)}Eo(){if(!this.current)return[];const t=this.ho;this.ho=Cl(),this.fo.forEach((t=>{this.Io(t.key)&&(this.ho=this.ho.add(t.key))}));const e=[];return t.forEach((t=>{this.ho.has(t)||e.push(new Gd(t))})),this.ho.forEach((n=>{t.has(n)||e.push(new Kd(n))})),e}Ao(t){this.uo=t.Bn,this.ho=Cl();const e=this._o(t.documents);return this.applyChanges(e,!0)}Ro(){return $d.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.ao)}}class Qd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Xd{constructor(t){this.key=t,this.Po=!1}}class Jd{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.bo={},this.vo=new kh((t=>Nu(t)),Du),this.Vo=new Map,this.So=new Set,this.Do=new ml(Uc.comparator),this.Co=new Map,this.No=new Vh,this.xo={},this.ko=new Map,this.Oo=_h.Yt(),this.onlineState="Unknown",this.$o=void 0}get isPrimaryClient(){return!0===this.$o}}async function Zd(t,e){const n=function(t){const e=dc(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sf.bind(null,e),e.bo._r=jd.bind(null,e.eventManager),e.bo.Fo=Hd.bind(null,e.eventManager),e}(t);let r,i;const s=n.vo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ro();else{const t=await function(t,e){const n=dc(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qe.getTargetData(t,e).next((i=>i?(r=i,gh.resolve(r)):n.qe.allocateTargetId(t).next((i=>(r=new wh(e,i,0,t.currentSequenceNumber),n.qe.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.kn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.kn=n.kn.insert(t.targetId,t),n.On.set(e,t.targetId)),t}))}(n.localStore,Au(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Mo=(e,n,r)=>async function(t,e,n,r){let i=e.view._o(n);i.Nn&&(i=await Ph(t.localStore,e.query,!1).then((({documents:t})=>e.view._o(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return df(t,e.targetId,o.To),o.snapshot}(t,e,n,r);const i=await Ph(t.localStore,e,!0),s=new Yd(e,i.Bn),o=s._o(i.documents),a=Rl.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);df(t,n,c.To);const u=new Qd(e,n,s);return t.vo.set(e,u),t.Vo.has(n)?t.Vo.get(n).push(e):t.Vo.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&dd(n.remoteStore,t)}return i}async function tf(t,e){const n=dc(t),r=n.vo.get(e),i=n.Vo.get(r.targetId);if(i.length>1)return n.Vo.set(r.targetId,i.filter((t=>!Du(t,e)))),void n.vo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),fd(n.remoteStore,r.targetId),lf(n,r.targetId)})).catch(Sh)):(lf(n,r.targetId),await xh(n.localStore,r.targetId,!0))}async function ef(t,e,n){const r=function(t){const e=dc(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=of.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=af.bind(null,e),e}(t);try{const t=await function(t,e){const n=dc(t),r=yc.now(),i=e.reduce(((t,e)=>t.add(e.key)),Cl());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Fn.pn(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=nl(t,s.get(t.key));null!=e&&o.push(new ol(t.key,e,Jc(e.toProto().mapValue),Xu.exists(!0)))}return n._n.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.xo[t.currentUser.toKey()];r||(r=new ml(gc)),r=r.insert(e,n),t.xo[t.currentUser.toKey()]=r}(r,t.batchId,n),await gf(r,t.changes),await Sd(r.remoteStore)}catch(i){const t=Ud(i,"Failed to persist write");n.reject(t)}}async function nf(t,e){const n=dc(t);try{const t=await Mh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Co.get(e);r&&(hc(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Po=!0:t.modifiedDocuments.size>0?hc(r.Po):t.removedDocuments.size>0&&(hc(r.Po),r.Po=!1))})),await gf(n,t,e)}catch(r){await Sh(r)}}function rf(t,e,n){const r=dc(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.vo.forEach(((n,r)=>{const i=r.view.zr(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=dc(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.zr(e)&&(r=!0)})),r&&zd(n)}(r.eventManager,e),t.length&&r.bo._r(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sf(t,e,n){const r=dc(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Co.get(e),s=i&&i.key;if(s){let t=new ml(Uc.comparator);t=t.insert(s,Zc.newNoDocument(s,vc.min()));const n=Cl().add(s),i=new Nl(vc.min(),new Map,new wl(gc),t,n);await nf(r,i),r.Do=r.Do.remove(s),r.Co.delete(e),pf(r)}else await xh(r.localStore,e,!1).then((()=>lf(r,e,n))).catch(Sh)}async function of(t,e){const n=dc(t),r=e.batch.batchId;try{const t=await function(t,e){const n=dc(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Mn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=gh.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);hc(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))}))})),o.next((()=>t._n.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n._n.performConsistencyCheck(t))).next((()=>n.Fn.pn(t,r)))}))}(n.localStore,e);uf(n,r,null),cf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gf(n,t)}catch(i){await Sh(i)}}async function af(t,e,n){const r=dc(t);try{const t=await function(t,e){const n=dc(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n._n.lookupMutationBatch(t,e).next((e=>(hc(null!==e),r=e.keys(),n._n.removeMutationBatch(t,e)))).next((()=>n._n.performConsistencyCheck(t))).next((()=>n.Fn.pn(t,r)))}))}(r.localStore,e);uf(r,e,n),cf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gf(r,t)}catch(i){await Sh(i)}}function cf(t,e){(t.ko.get(e)||[]).forEach((t=>{t.resolve()})),t.ko.delete(e)}function uf(t,e,n){const r=dc(t);let i=r.xo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.xo[r.currentUser.toKey()]=i}}function lf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vo.get(e))t.vo.delete(r),n&&t.bo.Fo(r,n);t.Vo.delete(e),t.isPrimaryClient&&t.No.Zn(e).forEach((e=>{t.No.containsKey(e)||hf(t,e)}))}function hf(t,e){t.So.delete(e.path.canonicalString());const n=t.Do.get(e);null!==n&&(fd(t.remoteStore,n),t.Do=t.Do.remove(e),t.Co.delete(n),pf(t))}function df(t,e,n){for(const r of n)r instanceof Kd?(t.No.addReference(r.key,e),ff(t,r)):r instanceof Gd?(oc("SyncEngine","Document no longer in limbo: "+r.key),t.No.removeReference(r.key,e),t.No.containsKey(r.key)||hf(t,r.key)):lc()}function ff(t,e){const n=e.key,r=n.path.canonicalString();t.Do.get(n)||t.So.has(r)||(oc("SyncEngine","New document in limbo: "+n),t.So.add(r),pf(t))}function pf(t){for(;t.So.size>0&&t.Do.size<t.maxConcurrentLimboResolutions;){const e=t.So.values().next().value;t.So.delete(e);const n=new Uc(Ic.fromString(e)),r=t.Oo.next();t.Co.set(r,new Xd(n)),t.Do=t.Do.insert(n,r),dd(t.remoteStore,new wh(Au(Eu(n.path)),r,2,ec.o))}}async function gf(t,e,n){const r=dc(t),i=[],s=[],o=[];r.vo.isEmpty()||(r.vo.forEach(((t,a)=>{o.push(r.Mo(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ah.vn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.bo._r(i),await async function(t,e){const n=dc(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gh.forEach(e,(e=>gh.forEach(e.Pn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>gh.forEach(e.bn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!mh(r))throw r;oc("LocalStore","Failed to update sequence numbers: "+r)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.kn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.kn=n.kn.insert(t,i)}}}(r.localStore,s))}async function mf(t,e){const n=dc(t);if(!n.currentUser.isEqual(e)){oc("SyncEngine","User change. New user:",e.toKey());const t=await Rh(n.localStore,e);n.currentUser=e,(r=n).ko.forEach((t=>{t.forEach((t=>{t.reject(new rc(nc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.ko.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await gf(n,t.Ln)}var r}function yf(t,e){const n=dc(t),r=n.Co.get(e);if(r&&r.Po)return Cl().add(r.key);{let t=Cl();const r=n.Vo.get(e);if(!r)return t;for(const e of r){const r=n.vo.get(e);t=t.unionWith(r.view.wo)}return t}}class vf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.R=nd(t.databaseInfo.databaseId),this.sharedClientState=this.Bo(t),this.persistence=this.qo(t),await this.persistence.start(),this.gcScheduler=this.Uo(t),this.localStore=this.Ko(t)}Uo(t){return null}Ko(t){return function(t,e,n,r){return new Nh(t,e,n,r)}(this.persistence,new Dh,t.initialUser,this.R)}qo(t){return new Hh(Wh.Ps,this.R)}Bo(t){return new Yh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>rf(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=mf.bind(null,this.syncEngine),await async function(t,e){const n=dc(t);e?(n.Mr.delete(2),await ld(n)):e||(n.Mr.add(2),await hd(n),n.Br.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Bd}createDatastore(t){const e=nd(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new td(r));var r,i;return i=t.credentials,new ad(i,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>rf(this.syncEngine,t,0),s=Xh.gt()?new Xh:new Qh,new ud(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Jd(t,e,n,r,i,s);return o&&(a.$o=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=dc(t);oc("RemoteStore","RemoteStore shutting down."),e.Mr.add(5),await hd(e),e.Lr.shutdown(),e.Br.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.jo(this.observer.next,t)}error(t){this.observer.error?this.jo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Wo(){this.muted=!0}jo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=Kh.UNAUTHENTICATED,this.clientId=pc.u(),this.credentialListener=()=>{},this.receivedInitialUser=new ph,this.credentials.setChangeListener((t=>{oc("FirestoreClient","Received user=",t.uid),this.user=t,this.credentialListener(t),this.receivedInitialUser.resolve()}))}async getConfiguration(){return await this.receivedInitialUser.promise,{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t,this.receivedInitialUser.promise.then((()=>this.credentialListener(this.user)))}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rc(nc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ph;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),t.resolve()}catch(e){const n=Ud(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Tf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(oc("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),oc("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((n=>{r.isEqual(n)||(r=n,t.asyncQueue.enqueueRetryable((async()=>{await Rh(e.localStore,n)})))})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new vf)),t.offlineComponents}(t);oc("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((n=>t.asyncQueue.enqueueRetryable((()=>async function(t,e){const n=dc(t);n.asyncQueue.verifyOperationInProgress(),oc("RemoteStore","RemoteStore received new credentials");const r=vd(n);n.Mr.add(3),await hd(n),r&&n.Br.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Mr.delete(3),await ld(n)}(e.remoteStore,n))))),t.onlineComponents=e}async function If(t){return t.onlineComponents||(oc("FirestoreClient","Using default OnlineComponentProvider"),await Tf(t,new wf)),t.onlineComponents}async function _f(t){const e=await If(t),n=e.eventManager;return n.onListen=Zd.bind(null,e.syncEngine),n.onUnlisten=tf.bind(null,e.syncEngine),n}function Sf(t,e,n={}){const r=new ph;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new bf({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=dc(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(t,o))),n.fromCache&&"server"===r.source?i.reject(new rc(nc.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Wd(n,s,{includeMetadataChanges:!0,so:!0});return async function(e,n){const r=dc(e),i=n.query;let s=!1,o=r.queries.get(i);if(o||(s=!0,o=new qd),s)try{o.Wr=await r.onListen(i)}catch(t){const r=Ud(t,`Initialization of query '${Ru(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.listeners.push(n),n.zr(r.onlineState),o.Wr&&n.Hr(o.Wr)&&zd(r)}(t,o)}(await _f(t),t.asyncQueue,e,n,r))),r.promise}class kf{constructor(t,e,n,r,i,s,o){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o}}class Cf{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Cf&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class Nf{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(t){this.changeListener=t,t(Kh.UNAUTHENTICATED)}removeChangeListener(){this.changeListener=null}}class Rf{constructor(t){this.oc=null,this.currentUser=Kh.UNAUTHENTICATED,this.receivedInitialUser=!1,this.cc=0,this.changeListener=null,this.forceRefresh=!1,this.oc=()=>{this.cc++,this.currentUser=this.uc(),this.receivedInitialUser=!0,this.changeListener&&this.changeListener(this.currentUser)},this.cc=0,this.auth=t.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.oc):(this.oc(null),t.get().then((t=>{this.auth=t,this.oc&&this.auth.addAuthTokenListener(this.oc)}),(()=>{})))}getToken(){const t=this.cc,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.cc!==t?(oc("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(hc("string"==typeof e.accessToken),new Df(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(t){this.changeListener=t,this.receivedInitialUser&&t(this.currentUser)}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.oc),this.oc=null,this.changeListener=null}uc(){const t=this.auth&&this.auth.getUid();return hc(null===t||"string"==typeof t),new Kh(t)}}class Of{constructor(t,e,n){this.ac=t,this.hc=e,this.lc=n,this.type="FirstParty",this.user=Kh.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.hc},e=this.ac.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.lc&&(t["X-Goog-Iam-Authorization-Token"]=this.lc),t}}class Mf{constructor(t,e,n){this.ac=t,this.hc=e,this.lc=n}getToken(){return Promise.resolve(new Of(this.ac,this.hc,this.lc))}setChangeListener(t){t(Kh.FIRST_PARTY)}removeChangeListener(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t,e,n){if(!n)throw new rc(nc.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xf(t){if(!Uc.isDocumentKey(t))throw new rc(nc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pf(t){if(Uc.isDocumentKey(t))throw new rc(nc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":lc()}function Vf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new rc(nc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uf(t);throw new rc(nc.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new rc(nc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new rc(nc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,function(t,e,n,r){if(!0===e&&!0===r)throw new rc(nc.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,e){this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1,t instanceof Cf?(this._databaseId=t,this._credentials=new Nf):(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new rc(nc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cf(t.options.projectId)}(t),this._credentials=new Rf(e))}get app(){if(!this._app)throw new rc(nc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new rc(nc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new Nf;switch(t.type){case"gapi":const e=t.client;return hc(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Mf(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new rc(nc.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Af.get(t);e&&(oc("ComponentProvider","Removing Datastore"),Af.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t,e,n){this._converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jf(this.firestore,this._converter,this._key.path.popLast())}withConverter(t){return new qf(this.firestore,t,this._key)}}class Bf{constructor(t,e,n){this._converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Bf(this.firestore,t,this._query)}}class jf extends Bf{constructor(t,e,n){super(t,e,Eu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qf(this.firestore,null,new Uc(t))}withConverter(t){return new jf(this.firestore,t,this._path)}}function Hf(t,e,...n){if(t=ae(t),Lf("collection","path",e),t instanceof $f){const r=Ic.fromString(e,...n);return Pf(r),new jf(t,null,r)}{if(!(t instanceof qf||t instanceof jf))throw new rc(nc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=Ic.fromString(t.path,...n).child(Ic.fromString(e));return Pf(r),new jf(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zf{constructor(){this.fc=Promise.resolve(),this.dc=[],this.wc=!1,this._c=[],this.mc=null,this.gc=!1,this.yc=[],this.Zi=new rd(this,"async_queue_retry"),this.Ec=()=>{const t=ed();t&&oc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Zi.Gi()};const t=ed();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ec)}get isShuttingDown(){return this.wc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Tc(),this.Ic(t)}enterRestrictedMode(){if(!this.wc){this.wc=!0;const t=ed();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ec)}}enqueue(t){return this.Tc(),this.wc?new Promise((t=>{})):this.Ic(t)}enqueueRetryable(t){this.enqueueAndForget((()=>(this.dc.push(t),this.Ac())))}async Ac(){if(0!==this.dc.length){try{await this.dc[0](),this.dc.shift(),this.Zi.reset()}catch(t){if(!mh(t))throw t;oc("AsyncQueue","Operation failed with retryable error: "+t)}this.dc.length>0&&this.Zi.ji((()=>this.Ac()))}}Ic(t){const e=this.fc.then((()=>(this.gc=!0,t().catch((t=>{throw this.mc=t,this.gc=!1,ac("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.gc=!1,t))))));return this.fc=e,e}enqueueAfterDelay(t,e,n){this.Tc(),this.yc.indexOf(t)>-1&&(e=0);const r=Pd.createAndSchedule(this,t,e,n,(t=>this.Rc(t)));return this._c.push(r),r}Tc(){this.mc&&lc()}verifyOperationInProgress(){}async Pc(){let t;do{t=this.fc,await t}while(t!==this.fc)}bc(t){for(const e of this._c)if(e.timerId===t)return!0;return!1}vc(t){return this.Pc().then((()=>{this._c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pc()}))}Vc(t){this.yc.push(t)}Rc(t){const e=this._c.indexOf(t);this._c.splice(e,1)}}class Wf extends $f{constructor(t,e){super(t,e),this._queue=new zf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Yf(this),this._firestoreClient.terminate()}}function Kf(t=Re()){return Ce(t,"firestore-exp").getImmediate()}function Gf(t){return t._firestoreClient||Yf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yf(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new kf(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling));var i,s,o,a;t._firestoreClient=new Ef(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new rc(nc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Sc(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xf(Cc.fromBase64String(t))}catch(e){throw new rc(nc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Xf(Cc.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new rc(nc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new rc(nc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gc(this._lat,t._lat)||gc(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=/^__.*__$/;class ep{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ol(t,this.data,this.fieldMask,e,this.fieldTransforms):new sl(t,this.data,e,this.fieldTransforms)}}function np(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw lc()}}class rp{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.R=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Dc(){return this.settings.Dc}Cc(t){return new rp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.R,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Nc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Cc({path:n,xc:!1});return r.kc(t),r}Oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Cc({path:n,xc:!1});return r.Sc(),r}$c(t){return this.Cc({path:void 0,xc:!0})}Mc(t){return pp(t,this.settings.methodName,this.settings.Fc||!1,this.path,this.settings.Lc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sc(){if(this.path)for(let t=0;t<this.path.length;t++)this.kc(this.path.get(t))}kc(t){if(0===t.length)throw this.Mc("Document fields must not be empty");if(np(this.Dc)&&tp.test(t))throw this.Mc('Document fields cannot begin and end with "__"')}}class ip{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.R=n||nd(t)}Bc(t,e,n,r=!1){return new rp({Dc:t,methodName:e,Lc:n,path:Sc.emptyPath(),xc:!1,Fc:r},this.databaseId,this.R,this.ignoreUndefinedProperties)}}function sp(t){const e=t._freezeSettings(),n=nd(t._databaseId);return new ip(t._databaseId,!!e.ignoreUndefinedProperties,n)}function op(t,e,n,r,i,s={}){const o=t.Bc(s.merge||s.mergeFields?2:0,e,n,i);lp("Data must be an object, but it was:",o,r);const a=cp(r,o);let c,u;if(s.merge)c=new kc(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=hp(e,r,n);if(!o.contains(i))throw new rc(nc.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);gp(t,i)||t.push(i)}c=new kc(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new ep(new Xc(a),c,u)}function ap(t,e){if(up(t=ae(t)))return lp("Unsupported field value:",e,t),cp(t,e);if(t instanceof Jf)return function(t,e){if(!np(e.Dc))throw e.Mc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Mc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xc&&4!==e.Dc)throw e.Mc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=ap(i,e.$c(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ae(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Uu(e.R,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=yc.fromDate(t);return{timestampValue:Bl(e.R,n)}}if(t instanceof yc){const n=new yc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Bl(e.R,n)}}if(t instanceof Zf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Xf)return{bytesValue:jl(e.R,t._byteString)};if(t instanceof qf){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Mc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wl(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Mc(`Unsupported field value: ${Uf(t)}`)}(t,e)}function cp(t,e){const n={};return Ec(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bc(t,((t,r)=>{const i=ap(r,e.Nc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function up(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof yc||t instanceof Zf||t instanceof Xf||t instanceof qf||t instanceof Jf)}function lp(t,e,n){if(!up(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Uf(n);throw"an object"===r?e.Mc(t+" a custom object"):e.Mc(t+" "+r)}var r}function hp(t,e,n){if((e=ae(e))instanceof Qf)return e._internalPath;if("string"==typeof e)return fp(t,e);throw pp("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const dp=new RegExp("[~\\*/\\[\\]]");function fp(t,e,n){if(e.search(dp)>=0)throw pp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qf(...e.split("."))._internalPath}catch(r){throw pp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pp(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new rc(nc.INVALID_ARGUMENT,a+t+c)}function gp(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new yp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.toProto())}}get(t){if(this._document){const e=this._document.data.field(vp("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class yp extends mp{data(){return super.data()}}function vp(t,e){return"string"==typeof e?fp(t,e):e instanceof Qf?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bp extends mp{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ep(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.toProto(),t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ep extends bp{data(t={}){return super.data(t)}}class Tp{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new wp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ep(this._firestore,this._userDataWriter,n.key,n,new wp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query._converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new rc(nc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Ep(t._firestore,t._userDataWriter,n.doc.key,n.doc,new wp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query._converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Ep(t._firestore,t._userDataWriter,e.doc.key,e.doc,new wp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query._converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Ip(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ip(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return lc()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t,...e){for(const n of e)t=n._apply(t);return t}class Sp extends class{}{constructor(t,e,n){super(),this.Kc=t,this.Qc=e,this.jc=n,this.type="where"}_apply(t){const e=sp(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new rc(nc.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Ap(o,s);const e=[];for(const n of o)e.push(Cp(r,t,n));a={arrayValue:{values:e}}}else a=Cp(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ap(o,s),a=function(t,e,n,r=!1){return ap(n,t.Bc(r?4:3,e))}(n,"where",o,"in"===s||"not-in"===s);const c=su.create(i,s,a);return function(t,e){if(e.g()){const n=Su(t);if(null!==n&&!n.isEqual(e.field))throw new rc(nc.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=_u(t);null!==r&&function(t,e,n){if(!n.isEqual(e))throw new rc(nc.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new rc(nc.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new rc(nc.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,0,e,t.firestore._databaseId,this.Kc,this.Qc,this.jc);return new Bf(t.firestore,t._converter,function(t,e){const n=t.filters.concat([e]);return new bu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function kp(t,e,n){const r=e,i=vp("where",t);return new Sp(i,r,n)}function Cp(t,e,n){if("string"==typeof(n=ae(n))){if(""===n)throw new rc(nc.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!ku(e)&&-1!==n.indexOf("/"))throw new rc(nc.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ic.fromString(n));if(!Uc.isDocumentKey(r))throw new rc(nc.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zc(t,new Uc(r))}if(n instanceof qf)return zc(t,n._key);throw new rc(nc.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uf(n)}.`)}function Ap(t,e){if(!Array.isArray(t)||0===t.length)throw new rc(nc.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new rc(nc.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}class Dp extends class{convertValue(t,e="none"){switch(Vc(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Nc(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Rc(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw lc()}}convertObject(t,e){const n={};return bc(t.fields||{},((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Zf(Nc(t.latitude),Nc(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Mc(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Lc(t));default:return null}}convertTimestamp(t){const e=Dc(t);return new yc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ic.fromString(t);hc(fh(n));const r=new Cf(n.get(1),n.get(3)),i=new Uc(n.popFirst(5));return r.isEqual(e)||ac(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new qf(this.firestore,null,e)}}function Np(t){t=Vf(t,Bf);const e=Vf(t.firestore,Wf),n=Gf(e),r=new Dp(e);return function(t){if(Iu(t)&&0===t.explicitOrderBy.length)throw new rc(nc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),Sf(n,t._query).then((n=>new Tp(e,r,t,n)))}function Rp(t,e){const n=Vf(t.firestore,Wf),r=function(t,e,...n){if(t=ae(t),1===arguments.length&&(e=pc.u()),Lf("doc","path",e),t instanceof $f){const r=Ic.fromString(e,...n);return xf(r),new qf(t,null,new Uc(r))}{if(!(t instanceof qf||t instanceof jf))throw new rc(nc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ic.fromString(e,...n));return xf(r),new qf(t.firestore,t instanceof jf?t._converter:null,new Uc(r))}}(t),i=function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}(t._converter,e);return function(t,e){return function(t,e){const n=new ph;return t.asyncQueue.enqueueAndForget((async()=>ef(await function(t){return If(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Gf(t),e)}(n,[op(sp(t.firestore),"addDoc",r._key,i,null!==t._converter,{}).toMutation(r._key,Xu.exists(!1))]).then((()=>r))}function Op(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Mp(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Lp(t){Mp(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function xp(t,e){Mp(2,arguments);var n=Lp(t).getTime(),r=Op(e);return new Date(n+r)}function Pp(t,e){Mp(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,s=null==i?0:Op(i),o=null==n.weekStartsOn?s:Op(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=Lp(t),c=a.getDay(),u=(c<o?7:0)+c-o;return a.setDate(a.getDate()-u),a.setHours(0,0,0,0),a}function Up(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function Vp(t){Mp(1,arguments);var e=Lp(t);return!isNaN(e)}function Fp(t,e){Mp(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,s=null==i?0:Op(i),o=null==n.weekStartsOn?s:Op(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=Lp(t),c=a.getDay(),u=6+(c<o?-7:0)-(c-o);return a.setDate(a.getDate()+u),a.setHours(23,59,59,999),a}ke(new ce("firestore-exp",((t,{options:e})=>{const n=t.getProvider("app-exp").getImmediate(),r=new Wf(n,t.getProvider("auth-internal"));return e&&r._setSettings(e),r}),"PUBLIC")),Me("@firebase/firestore","0.0.900-exp.894b5da5a",undefined);var $p={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function qp(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var Bp={date:qp({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:qp({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:qp({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},jp={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Hp(t){return function(e,n){var r,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,o=i.width?String(i.width):s;r=t.formattingValues[o]||t.formattingValues[s]}else{var a=t.defaultWidth,c=i.width?String(i.width):t.defaultWidth;r=t.values[c]||t.values[a]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function zp(t){return function(e,n){var r=String(e),i=n||{},s=i.width,o=s&&t.matchPatterns[s]||t.matchPatterns[t.defaultMatchWidth],a=r.match(o);if(!a)return null;var c,u=a[0],l=s&&t.parsePatterns[s]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,(function(t){return t.test(u)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,(function(t){return t.test(u)})),c=t.valueCallback?t.valueCallback(c):c,{value:c=i.valueCallback?i.valueCallback(c):c,rest:r.slice(u.length)}}}var Wp,Kp={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof $p[t]?$p[t]:1===e?$p[t].one:$p[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:Bp,formatRelative:function(t,e,n,r){return jp[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Hp({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Hp({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Hp({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Hp({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Hp({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Wp={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},i=n.match(Wp.matchPattern);if(!i)return null;var s=i[0],o=n.match(Wp.parsePattern);if(!o)return null;var a=Wp.valueCallback?Wp.valueCallback(o[0]):o[0];return{value:a=r.valueCallback?r.valueCallback(a):a,rest:n.slice(s.length)}}),era:zp({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:zp({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:zp({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:zp({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:zp({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Gp(t,e){Mp(2,arguments);var n=Op(e);return xp(t,-n)}function Yp(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Qp=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Yp("yy"===e?r%100:r,e.length)},Xp=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Yp(n+1,2)},Jp=function(t,e){return Yp(t.getUTCDate(),e.length)},Zp=function(t,e){return Yp(t.getUTCHours()%12||12,e.length)},tg=function(t,e){return Yp(t.getUTCHours(),e.length)},eg=function(t,e){return Yp(t.getUTCMinutes(),e.length)},ng=function(t,e){return Yp(t.getUTCSeconds(),e.length)},rg=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Yp(Math.floor(r*Math.pow(10,n-3)),e.length)};function ig(t){Mp(1,arguments);var e=1,n=Lp(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function sg(t){Mp(1,arguments);var e=Lp(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=ig(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=ig(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function og(t){Mp(1,arguments);var e=sg(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=ig(n);return r}function ag(t,e){Mp(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,s=null==i?0:Op(i),o=null==n.weekStartsOn?s:Op(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=Lp(t),c=a.getUTCDay(),u=(c<o?7:0)+c-o;return a.setUTCDate(a.getUTCDate()-u),a.setUTCHours(0,0,0,0),a}function cg(t,e){Mp(1,arguments);var n=Lp(t,e),r=n.getUTCFullYear(),i=e||{},s=i.locale,o=s&&s.options&&s.options.firstWeekContainsDate,a=null==o?1:Op(o),c=null==i.firstWeekContainsDate?a:Op(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(r+1,0,c),u.setUTCHours(0,0,0,0);var l=ag(u,e),h=new Date(0);h.setUTCFullYear(r,0,c),h.setUTCHours(0,0,0,0);var d=ag(h,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function ug(t,e){Mp(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,s=null==i?1:Op(i),o=null==n.firstWeekContainsDate?s:Op(n.firstWeekContainsDate),a=cg(t,e),c=new Date(0);c.setUTCFullYear(a,0,o),c.setUTCHours(0,0,0,0);var u=ag(c,e);return u}var lg="midnight",hg="noon",dg="morning",fg="afternoon",pg="evening",gg="night",mg={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return Qp(t,e)},Y:function(t,e,n,r){var i=cg(t,r),s=i>0?i:1-i;return"YY"===e?Yp(s%100,2):"Yo"===e?n.ordinalNumber(s,{unit:"year"}):Yp(s,e.length)},R:function(t,e){return Yp(sg(t),e.length)},u:function(t,e){return Yp(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Yp(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Yp(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Xp(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Yp(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=function(t,e){Mp(1,arguments);var n=Lp(t),r=ag(n,e).getTime()-ug(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):Yp(i,e.length)},I:function(t,e,n){var r=function(t){Mp(1,arguments);var e=Lp(t),n=ig(e).getTime()-og(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Yp(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Jp(t,e)},D:function(t,e,n){var r=function(t){Mp(1,arguments);var e=Lp(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Yp(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var i=t.getUTCDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return Yp(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var i=t.getUTCDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return Yp(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),i=0===r?7:r;switch(e){case"i":return String(i);case"ii":return Yp(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,i=t.getUTCHours();switch(r=12===i?hg:0===i?lg:i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,i=t.getUTCHours();switch(r=i>=17?pg:i>=12?fg:i>=4?dg:gg,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Zp(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):tg(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Yp(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Yp(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):eg(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):ng(t,e)},S:function(t,e){return rg(t,e)},X:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();if(0===i)return"Z";switch(e){case"X":return vg(i);case"XXXX":case"XX":return wg(i);case"XXXXX":case"XXX":default:return wg(i,":")}},x:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return vg(i);case"xxxx":case"xx":return wg(i);case"xxxxx":case"xxx":default:return wg(i,":")}},O:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+yg(i,":");case"OOOO":default:return"GMT"+wg(i,":")}},z:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+yg(i,":");case"zzzz":default:return"GMT"+wg(i,":")}},t:function(t,e,n,r){var i=r._originalDate||t;return Yp(Math.floor(i.getTime()/1e3),e.length)},T:function(t,e,n,r){return Yp((r._originalDate||t).getTime(),e.length)}};function yg(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;if(0===s)return n+String(i);var o=e||"";return n+String(i)+o+Yp(s,2)}function vg(t,e){return t%60==0?(t>0?"-":"+")+Yp(Math.abs(t)/60,2):wg(t,e)}function wg(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t);return r+Yp(Math.floor(i/60),2)+n+Yp(i%60,2)}function bg(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Eg(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var Tg={p:Eg,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),i=r[1],s=r[2];if(!s)return bg(t,e);switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",bg(i,e)).replace("{{time}}",Eg(s,e))}},Ig=["D","DD"],_g=["YY","YYYY"];function Sg(t){return-1!==Ig.indexOf(t)}function kg(t){return-1!==_g.indexOf(t)}function Cg(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Ag=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Dg=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ng=/^'([^]*?)'?$/,Rg=/''/g,Og=/[a-zA-Z]/;function Mg(t,e,n){Mp(2,arguments);var r=String(e),i=n||{},s=i.locale||Kp,o=s.options&&s.options.firstWeekContainsDate,a=null==o?1:Op(o),c=null==i.firstWeekContainsDate?a:Op(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=s.options&&s.options.weekStartsOn,l=null==u?0:Op(u),h=null==i.weekStartsOn?l:Op(i.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var d=Lp(t);if(!Vp(d))throw new RangeError("Invalid time value");var f=Up(d),p=Gp(d,f),g={firstWeekContainsDate:c,weekStartsOn:h,locale:s,_originalDate:d},m=r.match(Dg).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Tg[e])(t,s.formatLong,g):t})).join("").match(Ag).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Lg(n);var o=mg[r];if(o)return!i.useAdditionalWeekYearTokens&&kg(n)&&Cg(n,e,t),!i.useAdditionalDayOfYearTokens&&Sg(n)&&Cg(n,e,t),o(p,n,s.localize,g);if(r.match(Og))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return m}function Lg(t){return t.match(Ng)[1].replace(Rg,"'")}function xg(t){const e=t-1;return e*e*e+1}function Pg(t,{delay:n=0,duration:r=400,easing:i=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:i,css:t=>"opacity: "+t*s}}function Ug(t,{delay:e=0,duration:n=400,easing:r=xg,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,u="none"===a.transform?"":a.transform,l=c*(1-o);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*i}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-l*e}`}}const Vg=(t,e,n,r=0)=>{let i=new Date(e,t,1);i.setDate(i.getDate()-i.getDay()+r);let s=11===t?0:t+1,o=[];for(;i.getMonth()!==s||i.getDay()!==r||6!==o.length;){i.getDay()===r&&o.unshift({days:[],id:`${e}${t}${e}${o.length}`});const s=Object.assign({partOfMonth:i.getMonth()===t,day:i.getDate(),month:i.getMonth(),year:i.getFullYear(),date:new Date(i)},n(i));o[0].days.push(s),i.setDate(i.getDate()+1)}return o.reverse(),{month:t,year:e,weeks:o}};function Fg(t,e,n=null,r=0){t.setHours(0,0,0,0),e.setHours(0,0,0,0);let i=new Date(e.getFullYear(),e.getMonth()+1,1),s=[],o=new Date(t.getFullYear(),t.getMonth(),1),a=((t,e,n)=>{let r=new Date;return r.setHours(0,0,0,0),i=>{const s=i>=t&&i<=e;return{isInRange:s,selectable:s&&(!n||n(i)),isToday:i.getTime()===r.getTime()}}})(t,e,n);for(;o<i;)s.push(Vg(o.getMonth(),o.getFullYear(),a,r)),o.setMonth(o.getMonth()+1);return s}const $g=(t,e)=>t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear();function qg(t,e,n){const r=t.slice();return r[7]=e[n],r}function Bg(t){let e,n,r,i,s,o,a=t[7].date.getDate()+"";function c(){return t[6](t[7])}return{c(){e=S("div"),n=S("button"),r=k(a),i=C(),this.h()},l(t){e=M(t,"DIV",{class:!0});var s=O(e);n=M(s,"BUTTON",{class:!0,type:!0});var o=O(n);r=L(o,a),o.forEach(I),i=x(s),s.forEach(I),this.h()},h(){R(n,"class","day--label svelte-tl62dg"),R(n,"type","button"),F(n,"selected",$g(t[7].date,t[1])),F(n,"highlighted",$g(t[7].date,t[2])),F(n,"shake-date",t[3]&&$g(t[7].date,t[3])),F(n,"disabled",!t[7].selectable),R(e,"class","day svelte-tl62dg"),F(e,"outside-month",!t[7].partOfMonth),F(e,"is-today",t[7].isToday),F(e,"is-disabled",!t[7].selectable)},m(t,a){T(t,e,a),E(e,n),E(n,r),E(e,i),s||(o=D(n,"click",c),s=!0)},p(i,s){t=i,1&s&&a!==(a=t[7].date.getDate()+"")&&P(r,a),3&s&&F(n,"selected",$g(t[7].date,t[1])),5&s&&F(n,"highlighted",$g(t[7].date,t[2])),9&s&&F(n,"shake-date",t[3]&&$g(t[7].date,t[3])),1&s&&F(n,"disabled",!t[7].selectable),1&s&&F(e,"outside-month",!t[7].partOfMonth),1&s&&F(e,"is-today",t[7].isToday),1&s&&F(e,"is-disabled",!t[7].selectable)},d(t){t&&I(e),s=!1,o()}}}function jg(n){let r,i,a,c,u=n[0],l=[];for(let t=0;t<u.length;t+=1)l[t]=Bg(qg(n,u,t));return{c(){r=S("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){r=M(t,"DIV",{class:!0});var e=O(r);for(let n=0;n<l.length;n+=1)l[n].l(e);e.forEach(I),this.h()},h(){R(r,"class","week svelte-tl62dg")},m(t,e){T(t,r,e);for(let n=0;n<l.length;n+=1)l[n].m(r,null);c=!0},p(t,[e]){if(n=t,47&e){let t;for(u=n[0],t=0;t<u.length;t+=1){const i=qg(n,u,t);l[t]?l[t].p(i,e):(l[t]=Bg(i),l[t].c(),l[t].m(r,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=u.length}},i(t){c||(t&&ot((()=>{a&&a.end(1),i||(i=Tt(r,Ug,{x:50*n[4],duration:180,delay:90})),i.start()})),c=!0)},o(n){i&&i.invalidate(),n&&(a=function(n,r,i){let a,c=r(n,i),u=!0;const l=mt;function h(){const{delay:r=0,duration:i=300,easing:o=e,tick:h=t,css:d}=c||Et;d&&(a=H(n,1,0,i,r,o,d));const f=p()+r,g=f+i;ot((()=>pt(n,!1,"start"))),v((t=>{if(u){if(t>=g)return h(0,1),pt(n,!1,"end"),--l.r||s(l.c),!1;if(t>=f){const e=o((t-f)/i);h(1-e,e)}}return u}))}return l.r+=1,o(c)?ft().then((()=>{c=c(),h()})):h(),{end(t){t&&c.tick&&c.tick(1,0),u&&(a&&z(n,a),u=!1)}}}(r,Pg,{duration:180})),c=!1},d(t){t&&I(r),_(l,t),t&&a&&a.end()}}}function Hg(t,e,n){const r=Q();let{days:i}=e,{selected:s}=e,{highlighted:o}=e,{shouldShakeDate:a}=e,{direction:c}=e;return t.$$set=t=>{"days"in t&&n(0,i=t.days),"selected"in t&&n(1,s=t.selected),"highlighted"in t&&n(2,o=t.highlighted),"shouldShakeDate"in t&&n(3,a=t.shouldShakeDate),"direction"in t&&n(4,c=t.direction)},[i,s,o,a,c,r,t=>r("dateSelected",t.date)]}class zg extends Mt{constructor(t){super(),Ot(this,t,Hg,jg,a,{days:0,selected:1,highlighted:2,shouldShakeDate:3,direction:4})}}function Wg(t,e,n){const r=t.slice();return r[8]=e[n],r}function Kg(t,e){let n,r,i;return r=new zg({props:{days:e[8].days,selected:e[1],highlighted:e[2],shouldShakeDate:e[3],direction:e[4]}}),r.$on("dateSelected",e[7]),{key:t,first:null,c(){n=A(),At(r.$$.fragment),this.h()},l(t){n=A(),Dt(r.$$.fragment,t),this.h()},h(){this.first=n},m(t,e){T(t,n,e),Nt(r,t,e),i=!0},p(t,n){e=t;const i={};1&n&&(i.days=e[8].days),2&n&&(i.selected=e[1]),4&n&&(i.highlighted=e[2]),8&n&&(i.shouldShakeDate=e[3]),16&n&&(i.direction=e[4]),r.$set(i)},i(t){i||(wt(r.$$.fragment,t),i=!0)},o(t){bt(r.$$.fragment,t),i=!1},d(t){t&&I(n),Rt(r,t)}}}function Gg(t){let e,n,r=[],i=new Map,s=t[0].weeks;const o=t=>t[8].id;for(let a=0;a<s.length;a+=1){let e=Wg(t,s,a),n=o(e);i.set(n,r[a]=Kg(n,e))}return{c(){e=S("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=M(t,"DIV",{class:!0});var n=O(e);for(let e=0;e<r.length;e+=1)r[e].l(n);n.forEach(I),this.h()},h(){R(e,"class","month-container svelte-1kfve3b")},m(t,i){T(t,e,i);for(let n=0;n<r.length;n+=1)r[n].m(e,null);n=!0},p(t,[n]){31&n&&(s=t[0].weeks,yt(),r=function(t,e,n,r,i,s,o,a,c,u,l,h){let d=t.length,f=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],y=new Map,v=new Map;for(p=f;p--;){const t=h(i,s,p),a=n(t);let c=o.get(a);c?r&&c.p(t,e):(c=u(a,t),c.c()),y.set(a,m[p]=c),a in g&&v.set(a,Math.abs(p-g[a]))}const w=new Set,b=new Set;function E(t){wt(t,1),t.m(a,l),o.set(t.key,t),l=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],r=e.key,i=n.key;e===n?(l=e.first,d--,f--):y.has(i)?!o.has(r)||w.has(r)?E(e):b.has(i)?d--:v.get(r)>v.get(i)?(b.add(r),E(e)):(w.add(i),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)E(m[f-1]);return m}(r,n,o,1,t,s,i,e,_t,Kg,null,Wg),vt())},i(t){if(!n){for(let t=0;t<s.length;t+=1)wt(r[t]);n=!0}},o(t){for(let e=0;e<r.length;e+=1)bt(r[e]);n=!1},d(t){t&&I(e);for(let e=0;e<r.length;e+=1)r[e].d()}}}function Yg(t,e,n){let r,{id:i}=e,{visibleMonth:s}=e,{selected:o}=e,{highlighted:a}=e,{shouldShakeDate:c}=e,u=i;return t.$$set=t=>{"id"in t&&n(5,i=t.id),"visibleMonth"in t&&n(0,s=t.visibleMonth),"selected"in t&&n(1,o=t.selected),"highlighted"in t&&n(2,a=t.highlighted),"shouldShakeDate"in t&&n(3,c=t.shouldShakeDate)},t.$$.update=()=>{96&t.$$.dirty&&(n(4,r=u<i?1:-1),n(6,u=i))},[s,o,a,c,r,i,u,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)}]}class Qg extends Mt{constructor(t){super(),Ot(this,t,Yg,Gg,a,{id:5,visibleMonth:0,selected:1,highlighted:2,shouldShakeDate:3})}}function Xg(t,e,n){const r=t.slice();return r[15]=e[n],r[17]=n,r}function Jg(t){let e,n,r,i,s,o,a=t[15].abbrev+"";function c(...e){return t[14](t[15],t[17],...e)}return{c(){e=S("div"),n=S("span"),r=k(a),i=C(),this.h()},l(t){e=M(t,"DIV",{class:!0});var s=O(e);n=M(s,"SPAN",{class:!0});var o=O(n);r=L(o,a),o.forEach(I),i=x(s),s.forEach(I),this.h()},h(){R(n,"class","svelte-1l7yt84"),R(e,"class","month-selector--month svelte-1l7yt84"),F(e,"selected",t[17]===t[0]),F(e,"selectable",t[15].selectable)},m(t,a){T(t,e,a),E(e,n),E(n,r),E(e,i),s||(o=D(e,"click",c),s=!0)},p(n,i){t=n,64&i&&a!==(a=t[15].abbrev+"")&&P(r,a),1&i&&F(e,"selected",t[17]===t[0]),64&i&&F(e,"selectable",t[15].selectable)},d(t){t&&I(e),s=!1,o()}}}function Zg(e){let n,r,i,o,a,c,u,l,h,d,f,p,g,m,y,v,w=e[4][e[0]][0]+"",b=e[6],A=[];for(let t=0;t<b.length;t+=1)A[t]=Jg(Xg(e,b,t));return{c(){n=S("div"),r=S("div"),i=S("div"),o=S("i"),a=C(),c=S("div"),u=k(w),l=C(),h=k(e[1]),d=C(),f=S("div"),p=S("i"),g=C(),m=S("div");for(let t=0;t<A.length;t+=1)A[t].c();this.h()},l(t){n=M(t,"DIV",{class:!0});var s=O(n);r=M(s,"DIV",{class:!0});var y=O(r);i=M(y,"DIV",{class:!0});var v=O(i);o=M(v,"I",{class:!0}),O(o).forEach(I),v.forEach(I),a=x(y),c=M(y,"DIV",{class:!0});var b=O(c);u=L(b,w),l=x(b),h=L(b,e[1]),b.forEach(I),d=x(y),f=M(y,"DIV",{class:!0});var E=O(f);p=M(E,"I",{class:!0}),O(p).forEach(I),E.forEach(I),y.forEach(I),g=x(s),m=M(s,"DIV",{class:!0});var T=O(m);for(let e=0;e<A.length;e+=1)A[e].l(T);T.forEach(I),s.forEach(I),this.h()},h(){R(o,"class","arrow left svelte-1l7yt84"),R(i,"class","control svelte-1l7yt84"),F(i,"enabled",e[3]),R(c,"class","label svelte-1l7yt84"),R(p,"class","arrow right svelte-1l7yt84"),R(f,"class","control svelte-1l7yt84"),F(f,"enabled",e[2]),R(r,"class","heading-section svelte-1l7yt84"),R(m,"class","month-selector svelte-1l7yt84"),F(m,"open",e[5]),R(n,"class","title")},m(t,s){T(t,n,s),E(n,r),E(r,i),E(i,o),E(r,a),E(r,c),E(c,u),E(c,l),E(c,h),E(r,d),E(r,f),E(f,p),E(n,g),E(n,m);for(let e=0;e<A.length;e+=1)A[e].m(m,null);y||(v=[D(i,"click",e[12]),D(c,"click",e[8]),D(f,"click",e[13])],y=!0)},p(t,[e]){if(8&e&&F(i,"enabled",t[3]),17&e&&w!==(w=t[4][t[0]][0]+"")&&P(u,w),2&e&&P(h,t[1]),4&e&&F(f,"enabled",t[2]),577&e){let n;for(b=t[6],n=0;n<b.length;n+=1){const r=Xg(t,b,n);A[n]?A[n].p(r,e):(A[n]=Jg(r),A[n].c(),A[n].m(m,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=b.length}32&e&&F(m,"open",t[5])},i:t,o:t,d(t){t&&I(n),_(A,t),y=!1,s(v)}}}function tm(t,e,n){const r=Q();let i,{month:s}=e,{year:o}=e,{start:a}=e,{end:c}=e,{canIncrementMonth:u}=e,{canDecrementMonth:l}=e,{monthsOfYear:h}=e,d=!1;function f(){n(5,d=!d)}function p(t,{m:e,i:n}){t.stopPropagation(),e.selectable&&(r("monthSelected",n),f())}return t.$$set=t=>{"month"in t&&n(0,s=t.month),"year"in t&&n(1,o=t.year),"start"in t&&n(10,a=t.start),"end"in t&&n(11,c=t.end),"canIncrementMonth"in t&&n(2,u=t.canIncrementMonth),"canDecrementMonth"in t&&n(3,l=t.canDecrementMonth),"monthsOfYear"in t&&n(4,h=t.monthsOfYear)},t.$$.update=()=>{if(3090&t.$$.dirty){let t=a.getFullYear()===o,e=c.getFullYear()===o;n(6,i=h.map(((n,r)=>Object.assign({},{name:n[0],abbrev:n[1]},{selectable:!t&&!e||(!t||r>=a.getMonth())&&(!e||r<=c.getMonth())}))))}},[s,o,u,l,h,d,i,r,f,p,a,c,()=>r("incrementMonth",-1),()=>r("incrementMonth",1),(t,e,n)=>p(n,{m:t,i:e})]}class em extends Mt{constructor(t){super(),Ot(this,t,tm,Zg,a,{month:0,year:1,start:10,end:11,canIncrementMonth:2,canDecrementMonth:3,monthsOfYear:4})}}const{window:nm}=It,rm=t=>({}),im=t=>({}),sm=t=>({}),om=t=>({});function am(t){let e,n,r,i,o,a,c,l,d;ot(t[14]);const f=t[13].trigger,p=u(f,t,t[12],om),g=t[13].contents,m=u(g,t,t[12],im);return{c(){e=S("div"),n=S("div"),p&&p.c(),r=C(),i=S("div"),o=S("div"),a=S("div"),m&&m.c(),this.h()},l(t){e=M(t,"DIV",{class:!0});var s=O(e);n=M(s,"DIV",{class:!0});var c=O(n);p&&p.l(c),c.forEach(I),r=x(s),i=M(s,"DIV",{class:!0,style:!0});var u=O(i);o=M(u,"DIV",{class:!0});var l=O(o);a=M(l,"DIV",{class:!0});var h=O(a);m&&m.l(h),h.forEach(I),l.forEach(I),u.forEach(I),s.forEach(I),this.h()},h(){R(n,"class","trigger"),R(a,"class","contents-inner svelte-x1t286"),R(o,"class","contents svelte-x1t286"),R(i,"class","contents-wrapper svelte-x1t286"),V(i,"transform","translate(-50%,-50%) translate("+t[8]+"px, "+t[7]+"px)"),F(i,"visible",t[0]),F(i,"shrink",t[1]),R(e,"class","sc-popover svelte-x1t286")},m(s,u){T(s,e,u),E(e,n),p&&p.m(n,null),t[15](n),E(e,r),E(e,i),E(i,o),E(o,a),m&&m.m(a,null),t[16](o),t[17](i),t[18](e),c=!0,l||(d=[D(nm,"resize",t[14]),D(n,"click",t[9])],l=!0)},p(t,[e]){p&&p.p&&(!c||4096&e)&&h(p,f,t,t[12],e,sm,om),m&&m.p&&(!c||4096&e)&&h(m,g,t,t[12],e,rm,im),(!c||384&e)&&V(i,"transform","translate(-50%,-50%) translate("+t[8]+"px, "+t[7]+"px)"),1&e&&F(i,"visible",t[0]),2&e&&F(i,"shrink",t[1])},i(t){c||(wt(p,t),wt(m,t),c=!0)},o(t){bt(p,t),bt(m,t),c=!1},d(n){n&&I(e),p&&p.d(n),t[15](null),m&&m.d(n),t[16](null),t[17](null),t[18](null),l=!1,s(d)}}}function cm(t,e,n){let{$$slots:r={},$$scope:i}=e;const s=Q();let o,a,c,u,l,h=(t,e,n)=>{t.addEventListener(e,(function r(){n.apply(this,arguments),t.removeEventListener(e,r)}))},d=0,f=0,{open:p=!1}=e,{shrink:g}=e,{trigger:m}=e;const y=()=>{n(1,g=!0),h(u,"animationend",(()=>{n(1,g=!1),n(0,p=!1),s("closed")}))};function v(t){if(!p)return;let e=t.target;do{if(e===o)return}while(e=e.parentNode);y()}G((()=>{if(document.addEventListener("click",v),m)return c.appendChild(m.parentNode.removeChild(m)),()=>{document.removeEventListener("click",v)}}));const w=async()=>{p||n(0,p=!0),await(st(),rt);let t=l.getBoundingClientRect();return{top:t.top+-1*d,bottom:window.innerHeight-t.bottom+d,left:t.left+-1*f,right:document.body.clientWidth-t.right+f}};return t.$$set=t=>{"open"in t&&n(0,p=t.open),"shrink"in t&&n(1,g=t.shrink),"trigger"in t&&n(10,m=t.trigger),"$$scope"in t&&n(12,i=t.$$scope)},[p,g,o,a,c,u,l,d,f,async()=>{const{x:t,y:e}=await(async()=>{let t,e,n=await w();return e=a<480?n.bottom:n.top<0?Math.abs(n.top):n.bottom<0?n.bottom:0,t=n.left<0?Math.abs(n.left):n.right<0?n.right:0,{x:t,y:e}})();n(8,f=t),n(7,d=e),n(0,p=!0),s("opened")},m,y,i,r,function(){n(3,a=nm.innerWidth)},function(t){tt[t?"unshift":"push"]((()=>{c=t,n(4,c)}))},function(t){tt[t?"unshift":"push"]((()=>{u=t,n(5,u)}))},function(t){tt[t?"unshift":"push"]((()=>{l=t,n(6,l)}))},function(t){tt[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}class um extends Mt{constructor(t){super(),Ot(this,t,cm,am,a,{open:0,shrink:1,trigger:10,close:11})}get close(){return this.$$.ctx[11]}}const lm=(t,e,n)=>t.replace(new RegExp("#{"+e+"}","g"),n),hm=function(t,e,n){if(t=t.toString(),void 0===e)return t;if(t.length==e)return t;if(n=void 0!==n&&n,t.length<e)for(;e-t.length>0;)t="0"+t;else t.length>e&&(t=n?t.substring(t.length-e):t.substring(0,e));return t};let dm={daysOfWeek:[["Sunday","Sun"],["Monday","Mon"],["Tuesday","Tue"],["Wednesday","Wed"],["Thursday","Thu"],["Friday","Fri"],["Saturday","Sat"]],monthsOfYear:[["January","Jan"],["February","Feb"],["March","Mar"],["April","Apr"],["May","May"],["June","Jun"],["July","Jul"],["August","Aug"],["September","Sep"],["October","Oct"],["November","Nov"],["December","Dec"]]};var fm=[{key:"d",method:function(t){return hm(t.getDate(),2)}},{key:"D",method:function(t){return dm.daysOfWeek[t.getDay()][1]}},{key:"j",method:function(t){return t.getDate()}},{key:"l",method:function(t){return dm.daysOfWeek[t.getDay()][0]}},{key:"F",method:function(t){return dm.monthsOfYear[t.getMonth()][0]}},{key:"m",method:function(t){return hm(t.getMonth()+1,2)}},{key:"M",method:function(t){return dm.monthsOfYear[t.getMonth()][1]}},{key:"n",method:function(t){return t.getMonth()+1}},{key:"Y",method:function(t){return t.getFullYear()}},{key:"y",method:function(t){return hm(t.getFullYear(),2,!0)}}],pm=[{key:"a",method:function(t){return t.getHours()>11?"pm":"am"}},{key:"A",method:function(t){return t.getHours()>11?"PM":"AM"}},{key:"g",method:function(t){return t.getHours()%12||12}},{key:"G",method:function(t){return t.getHours()}},{key:"h",method:function(t){return hm(t.getHours()%12||12,2)}},{key:"H",method:function(t){return hm(t.getHours(),2)}},{key:"i",method:function(t){return hm(t.getMinutes(),2)}},{key:"s",method:function(t){return hm(t.getSeconds(),2)}}];const gm=(t={})=>{(t=>{Object.keys(t).forEach((e=>{dm[e]&&dm[e].length==t[e].length&&(dm[e]=t[e])}))})(t)},mm={left:37,up:38,right:39,down:40,pgup:33,pgdown:34,enter:13,escape:27,tab:9},ym=Object.keys(mm).map((t=>mm[t]));const vm=t=>({selected:1&t[0],formattedSelected:4&t[0]}),wm=t=>({selected:t[0],formattedSelected:t[2]});function bm(t,e,n){const r=t.slice();return r[63]=e[n],r}function Em(t){let e,n;return{c(){e=S("button"),n=k(t[2]),this.h()},l(r){e=M(r,"BUTTON",{class:!0,type:!0});var i=O(e);n=L(i,t[2]),i.forEach(I),this.h()},h(){R(e,"class","calendar-button svelte-1jpaezg"),R(e,"type","button")},m(t,r){T(t,e,r),E(e,n)},p(t,e){4&e[0]&&P(n,t[2])},d(t){t&&I(e)}}}function Tm(t){let e,n;const r=t[40].default,i=u(r,t,t[47],wm),s=i||function(t){let e,n=!t[1]&&Em(t);return{c(){n&&n.c(),e=A()},l(t){n&&n.l(t),e=A()},m(t,r){n&&n.m(t,r),T(t,e,r)},p(t,r){t[1]?n&&(n.d(1),n=null):n?n.p(t,r):(n=Em(t),n.c(),n.m(e.parentNode,e))},d(t){n&&n.d(t),t&&I(e)}}}(t);return{c(){e=S("div"),s&&s.c(),this.h()},l(t){e=M(t,"DIV",{slot:!0,class:!0});var n=O(e);s&&s.l(n),n.forEach(I),this.h()},h(){R(e,"slot","trigger"),R(e,"class","svelte-1jpaezg")},m(t,r){T(t,e,r),s&&s.m(e,null),n=!0},p(t,e){i?i.p&&(!n||5&e[0]|65536&e[1])&&h(i,r,t,t[47],e,vm,wm):s&&s.p&&6&e[0]&&s.p(t,e)},i(t){n||(wt(s,t),n=!0)},o(t){bt(s,t),n=!1},d(t){t&&I(e),s&&s.d(t)}}}function Im(e){let n,r,i=e[63][1]+"";return{c(){n=S("span"),r=k(i),this.h()},l(t){n=M(t,"SPAN",{class:!0});var e=O(n);r=L(e,i),e.forEach(I),this.h()},h(){R(n,"class","svelte-1jpaezg")},m(t,e){T(t,n,e),E(n,r)},p:t,d(t){t&&I(n)}}}function _m(t){let e,n,r,i,s,o,a,c;r=new em({props:{month:t[6],year:t[7],canIncrementMonth:t[15],canDecrementMonth:t[16],start:t[3],end:t[4],monthsOfYear:t[5]}}),r.$on("monthSelected",t[41]),r.$on("incrementMonth",t[42]);let u=t[18],l=[];for(let h=0;h<u.length;h+=1)l[h]=Im(bm(t,u,h));return a=new Qg({props:{visibleMonth:t[8],selected:t[0],highlighted:t[10],shouldShakeDate:t[11],id:t[14]}}),a.$on("dateSelected",t[43]),{c(){e=S("div"),n=S("div"),At(r.$$.fragment),i=C(),s=S("div");for(let t=0;t<l.length;t+=1)l[t].c();o=C(),At(a.$$.fragment),this.h()},l(t){e=M(t,"DIV",{slot:!0,class:!0});var c=O(e);n=M(c,"DIV",{class:!0});var u=O(n);Dt(r.$$.fragment,u),i=x(u),s=M(u,"DIV",{class:!0});var h=O(s);for(let e=0;e<l.length;e+=1)l[e].l(h);h.forEach(I),o=x(u),Dt(a.$$.fragment,u),u.forEach(I),c.forEach(I),this.h()},h(){R(s,"class","legend svelte-1jpaezg"),R(n,"class","calendar svelte-1jpaezg"),R(e,"slot","contents"),R(e,"class","svelte-1jpaezg")},m(t,u){T(t,e,u),E(e,n),Nt(r,n,null),E(n,i),E(n,s);for(let e=0;e<l.length;e+=1)l[e].m(s,null);E(n,o),Nt(a,n,null),c=!0},p(t,e){const n={};if(64&e[0]&&(n.month=t[6]),128&e[0]&&(n.year=t[7]),32768&e[0]&&(n.canIncrementMonth=t[15]),65536&e[0]&&(n.canDecrementMonth=t[16]),8&e[0]&&(n.start=t[3]),16&e[0]&&(n.end=t[4]),32&e[0]&&(n.monthsOfYear=t[5]),r.$set(n),262144&e[0]){let n;for(u=t[18],n=0;n<u.length;n+=1){const r=bm(t,u,n);l[n]?l[n].p(r,e):(l[n]=Im(r),l[n].c(),l[n].m(s,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=u.length}const i={};256&e[0]&&(i.visibleMonth=t[8]),1&e[0]&&(i.selected=t[0]),1024&e[0]&&(i.highlighted=t[10]),2048&e[0]&&(i.shouldShakeDate=t[11]),16384&e[0]&&(i.id=t[14]),a.$set(i)},i(t){c||(wt(r.$$.fragment,t),wt(a.$$.fragment,t),c=!0)},o(t){bt(r.$$.fragment,t),bt(a.$$.fragment,t),c=!1},d(t){t&&I(e),Rt(r),_(l,t),Rt(a)}}}function Sm(t){let e,n,r,i,s;function o(e){t[45](e)}function a(e){t[46](e)}let c={trigger:t[1],$$slots:{contents:[_m],trigger:[Tm]},$$scope:{ctx:t}};return void 0!==t[12]&&(c.open=t[12]),void 0!==t[13]&&(c.shrink=t[13]),n=new um({props:c}),t[44](n),tt.push((()=>Ct(n,"open",o))),tt.push((()=>Ct(n,"shrink",a))),n.$on("opened",t[23]),n.$on("closed",t[22]),{c(){e=S("div"),At(n.$$.fragment),this.h()},l(t){e=M(t,"DIV",{class:!0,style:!0});var r=O(e);Dt(n.$$.fragment,r),r.forEach(I),this.h()},h(){R(e,"class","datepicker svelte-1jpaezg"),R(e,"style",t[17]),F(e,"open",t[12]),F(e,"closing",t[13])},m(t,r){T(t,e,r),Nt(n,e,null),s=!0},p(t,o){const a={};2&o[0]&&(a.trigger=t[1]),118271&o[0]|65536&o[1]&&(a.$$scope={dirty:o,ctx:t}),!r&&4096&o[0]&&(r=!0,a.open=t[12],at((()=>r=!1))),!i&&8192&o[0]&&(i=!0,a.shrink=t[13],at((()=>i=!1))),n.$set(a),(!s||131072&o[0])&&R(e,"style",t[17]),4096&o[0]&&F(e,"open",t[12]),8192&o[0]&&F(e,"closing",t[13])},i(t){s||(wt(n.$$.fragment,t),s=!0)},o(t){bt(n.$$.fragment,t),s=!1},d(r){r&&I(e),t[44](null),Rt(n)}}}function km(t,e,n){let r,i,s,o,a,c,u,l,{$$slots:h={},$$scope:d}=e;const f=Q(),p=new Date,g=31536e6;let m,{format:y="#{m}/#{d}/#{Y}"}=e,{start:v=new Date(Date.now()-g)}=e,{end:w=new Date(Date.now()+g)}=e,{selected:b=p}=e,{dateChosen:E=!1}=e,{trigger:T=null}=e,{selectableCallback:I=null}=e,{weekStart:_=0}=e,{daysOfWeek:S=[["Sunday","Sun"],["Monday","Mon"],["Tuesday","Tue"],["Wednesday","Wed"],["Thursday","Thu"],["Friday","Fri"],["Saturday","Sat"]]}=e,{monthsOfYear:k=[["January","Jan"],["February","Feb"],["March","Mar"],["April","Apr"],["May","May"],["June","Jun"],["July","Jul"],["August","Aug"],["September","Sep"],["October","Oct"],["November","Nov"],["December","Dec"]]}=e;b=b.getTime()<v.getTime()||b.getTime()>w.getTime()?v:b;let{style:C=""}=e,{buttonBackgroundColor:A="#fff"}=e,{buttonBorderColor:D="#eee"}=e,{buttonTextColor:N="#333"}=e,{highlightColor:R="#f7901e"}=e,{dayBackgroundColor:O="none"}=e,{dayTextColor:M="#4a4a4a"}=e,{dayHighlightedBackgroundColor:L="#efefef"}=e,{dayHighlightedTextColor:x="#4a4a4a"}=e;gm({daysOfWeek:S,monthsOfYear:k});let P,U=0===_?S:(()=>{let t=S.slice();return t.push(t.shift()),t})(),V=p,F=!1,$=p.getMonth(),q=p.getFullYear(),B=!1,j=!1;p.setHours(0,0,0,0);let H=0,{formattedSelected:z}=e;function W(t){n(6,$=t),n(10,V=new Date(q,$,1))}function K(t,e=1){if(1===t&&!c)return;if(-1===t&&!u)return;let r=new Date(q,$,1);r.setMonth(r.getMonth()+t),n(6,$=r.getMonth()),n(7,q=r.getFullYear()),n(10,V=new Date(q,$,e))}G((()=>{n(6,$=b.getMonth()),n(7,q=b.getFullYear())}));const Y=(t,e,n)=>{let i=r.find((e=>e.month===t&&e.year===n));if(!i)return null;for(let r=0;r<i.weeks.length;++r)for(let s=0;s<i.weeks[r].days.length;++s){let o=i.weeks[r].days[s];if(o.month===t&&o.day===e&&o.year===n)return o}return null};function X(t){let e=new Date(V);e.setDate(V.getDate()+t);let r=Y(e.getMonth(),e.getDate(),e.getFullYear());r&&r.isInRange&&(n(10,V=e),t>0&&V>o&&K(1,V.getDate()),t<0&&V<a&&K(-1,V.getDate()))}function J(t){!function(t){T&&n(1,T.innerHTML=t,T)}(t)}function Z(t){return function(t){const e=Y(t.getMonth(),t.getDate(),t.getFullYear());return e&&e.selectable}(t)?(rt(),n(0,b=t),n(24,E=!0),J(z),f("dateSelected",{date:t})):(e=t,clearTimeout(P),n(11,F=e),void(P=setTimeout((()=>{n(11,F=!1)}),700)));var e}function et(t){if(-1!==ym.indexOf(t.keyCode))switch(t.preventDefault(),t.keyCode){case mm.left:X(-1);break;case mm.up:X(-7);break;case mm.right:X(1);break;case mm.down:X(7);break;case mm.pgup:K(-1);break;case mm.pgdown:K(1);break;case mm.escape:rt();break;case mm.enter:Z(V)}}function nt(){document.removeEventListener("keydown",et),f("close")}function rt(){m.close(),nt()}return t.$$set=t=>{"format"in t&&n(25,y=t.format),"start"in t&&n(3,v=t.start),"end"in t&&n(4,w=t.end),"selected"in t&&n(0,b=t.selected),"dateChosen"in t&&n(24,E=t.dateChosen),"trigger"in t&&n(1,T=t.trigger),"selectableCallback"in t&&n(26,I=t.selectableCallback),"weekStart"in t&&n(27,_=t.weekStart),"daysOfWeek"in t&&n(28,S=t.daysOfWeek),"monthsOfYear"in t&&n(5,k=t.monthsOfYear),"style"in t&&n(29,C=t.style),"buttonBackgroundColor"in t&&n(30,A=t.buttonBackgroundColor),"buttonBorderColor"in t&&n(31,D=t.buttonBorderColor),"buttonTextColor"in t&&n(32,N=t.buttonTextColor),"highlightColor"in t&&n(33,R=t.highlightColor),"dayBackgroundColor"in t&&n(34,O=t.dayBackgroundColor),"dayTextColor"in t&&n(35,M=t.dayTextColor),"dayHighlightedBackgroundColor"in t&&n(36,L=t.dayHighlightedBackgroundColor),"dayHighlightedTextColor"in t&&n(37,x=t.dayHighlightedTextColor),"formattedSelected"in t&&n(2,z=t.formattedSelected),"$$scope"in t&&n(47,d=t.$$scope)},t.$$.update=()=>{if(201326616&t.$$.dirty[0]&&n(39,r=Fg(v,w,I,_)),192&t.$$.dirty[0]|256&t.$$.dirty[1]){n(38,H=0);for(let t=0;t<r.length;t+=1)r[t].month===$&&r[t].year===q&&n(38,H=t)}384&t.$$.dirty[1]&&n(8,i=r[H]),192&t.$$.dirty[0]&&n(14,s=q+$/100),256&t.$$.dirty[0]&&(o=i.weeks[i.weeks.length-1].days[6].date),256&t.$$.dirty[0]&&(a=i.weeks[0].days[0].date),384&t.$$.dirty[1]&&n(15,c=H<r.length-1),128&t.$$.dirty[1]&&n(16,u=H>0),1610612736&t.$$.dirty[0]|127&t.$$.dirty[1]&&n(17,l=`\n    --button-background-color: ${A};\n    --button-border-color: ${D};\n    --button-text-color: ${N};\n    --highlight-color: ${R};\n    --day-background-color: ${O};\n    --day-text-color: ${M};\n    --day-highlighted-background-color: ${L};\n    --day-highlighted-text-color: ${x};\n    ${C}\n  `),33554433&t.$$.dirty[0]&&n(2,z="function"==typeof y?y(b):((t,e="#{m}/#{d}/#{Y}")=>(fm.forEach((n=>{-1!=e.indexOf(`#{${n.key}}`)&&(e=lm(e,n.key,n.method(t)))})),pm.forEach((n=>{-1!=e.indexOf(`#{${n.key}}`)&&(e=lm(e,n.key,n.method(t)))})),e))(b,y))},[b,T,z,v,w,k,$,q,i,m,V,F,B,j,s,c,u,l,U,W,K,Z,nt,function(){n(10,V=new Date(b)),n(6,$=b.getMonth()),n(7,q=b.getFullYear()),document.addEventListener("keydown",et),f("open")},E,y,I,_,S,C,A,D,N,R,O,M,L,x,H,r,h,t=>W(t.detail),t=>K(t.detail),t=>Z(t.detail),function(t){tt[t?"unshift":"push"]((()=>{m=t,n(9,m)}))},function(t){B=t,n(12,B)},function(t){j=t,n(13,j)},d]}class Cm extends Mt{constructor(t){super(),Ot(this,t,km,Sm,a,{format:25,start:3,end:4,selected:0,dateChosen:24,trigger:1,selectableCallback:26,weekStart:27,daysOfWeek:28,monthsOfYear:5,style:29,buttonBackgroundColor:30,buttonBorderColor:31,buttonTextColor:32,highlightColor:33,dayBackgroundColor:34,dayTextColor:35,dayHighlightedBackgroundColor:36,dayHighlightedTextColor:37,formattedSelected:2},[-1,-1,-1])}}export{Pp as $,n as A,yt as B,xt as C,E as D,t as E,Wr as F,Xn as G,D as H,N as I,u as J,h as K,c as L,Oe as M,Ne as N,Qn as O,d as P,J as Q,Cm as R,Mt as S,U as T,ot as U,Tt as V,Pg as W,s as X,Q as Y,tt as Z,Mg as _,O as a,Fp as a0,_ as a1,Kf as a2,_p as a3,kp as a4,Hf as a5,Np as a6,Rp as a7,Gn as a8,Yn as a9,R as b,M as c,I as d,S as e,T as f,L as g,P as h,Ot as i,At as j,C as k,A as l,Dt as m,x as n,Nt as o,St as p,kt as q,bt as r,a as s,k as t,vt as u,wt as v,Rt as w,X as x,Y as y,G as z};
