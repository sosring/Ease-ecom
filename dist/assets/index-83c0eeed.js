(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function To(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Ao(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=ye(s)?$f(s):Ao(s);if(i)for(const r in i)t[r]=i[r]}return t}else{if(ye(e))return e;if(he(e))return e}}const Ff=/;(?![^(]*\))/g,jf=/:([^]+)/,Bf=/\/\*.*?\*\//gs;function $f(e){const t={};return e.replace(Bf,"").split(Ff).forEach(n=>{if(n){const s=n.split(jf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function So(e){let t="";if(ye(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const s=So(e[n]);s&&(t+=s+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vf=To(Hf);function Il(e){return!!e||e===""}const Ur=e=>ye(e)?e:e==null?"":H(e)||he(e)&&(e.toString===Al||!V(e.toString))?JSON.stringify(e,wl,2):String(e),wl=(e,t)=>t&&t.__v_isRef?wl(e,t.value):Cn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:bl(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!H(t)&&!Sl(t)?String(t):t,le={},Sn=[],rt=()=>{},Wf=()=>!1,Kf=/^on[^a-z]/,Li=e=>Kf.test(e),Co=e=>e.startsWith("onUpdate:"),ke=Object.assign,Ro=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zf=Object.prototype.hasOwnProperty,Z=(e,t)=>zf.call(e,t),H=Array.isArray,Cn=e=>Mi(e)==="[object Map]",bl=e=>Mi(e)==="[object Set]",V=e=>typeof e=="function",ye=e=>typeof e=="string",Oo=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Tl=e=>he(e)&&V(e.then)&&V(e.catch),Al=Object.prototype.toString,Mi=e=>Al.call(e),qf=e=>Mi(e).slice(8,-1),Sl=e=>Mi(e)==="[object Object]",ko=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ri=To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Gf=/-(\w)/g,_t=xi(e=>e.replace(Gf,(t,n)=>n?n.toUpperCase():"")),Jf=/\B([A-Z])/g,Bn=xi(e=>e.replace(Jf,"-$1").toLowerCase()),Ui=xi(e=>e.charAt(0).toUpperCase()+e.slice(1)),hr=xi(e=>e?`on${Ui(e)}`:""),ls=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},di=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Cl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ba;const Xf=()=>Ba||(Ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Be;class Rl{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Ol(e){return new Rl(e)}function Yf(e,t=Be){t&&t.active&&t.effects.push(e)}function kl(){return Be}function Pl(e){Be&&Be.cleanups.push(e)}const Po=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Nl=e=>(e.w&zt)>0,Dl=e=>(e.n&zt)>0,Qf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=zt},Zf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];Nl(i)&&!Dl(i)?i.delete(e):t[n++]=i,i.w&=~zt,i.n&=~zt}t.length=n}},Fr=new WeakMap;let Xn=0,zt=1;const jr=30;let st;const cn=Symbol(""),Br=Symbol("");class No{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yf(this,s)}run(){if(!this.active)return this.fn();let t=st,n=Bt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=st,st=this,Bt=!0,zt=1<<++Xn,Xn<=jr?Qf(this):$a(this),this.fn()}finally{Xn<=jr&&Zf(this),zt=1<<--Xn,st=this.parent,Bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){st===this?this.deferStop=!0:this.active&&($a(this),this.onStop&&this.onStop(),this.active=!1)}}function $a(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Bt=!0;const Ll=[];function $n(){Ll.push(Bt),Bt=!1}function Hn(){const e=Ll.pop();Bt=e===void 0?!0:e}function ze(e,t,n){if(Bt&&st){let s=Fr.get(e);s||Fr.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=Po()),Ml(i)}}function Ml(e,t){let n=!1;Xn<=jr?Dl(e)||(e.n|=zt,n=!Nl(e)):n=!e.has(st),n&&(e.add(st),st.deps.push(e))}function bt(e,t,n,s,i,r){const o=Fr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&H(e)){const c=Cl(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":H(e)?ko(n)&&a.push(o.get("length")):(a.push(o.get(cn)),Cn(e)&&a.push(o.get(Br)));break;case"delete":H(e)||(a.push(o.get(cn)),Cn(e)&&a.push(o.get(Br)));break;case"set":Cn(e)&&a.push(o.get(cn));break}if(a.length===1)a[0]&&$r(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);$r(Po(c))}}function $r(e,t){const n=H(e)?e:[...e];for(const s of n)s.computed&&Ha(s);for(const s of n)s.computed||Ha(s)}function Ha(e,t){(e!==st||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ed=To("__proto__,__v_isRef,__isVue"),xl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Oo)),td=Do(),nd=Do(!1,!0),sd=Do(!0),Va=id();function id(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ee(this);for(let r=0,o=this.length;r<o;r++)ze(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(ee)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){$n();const s=ee(this)[t].apply(this,n);return Hn(),s}}),e}function Do(e=!1,t=!1){return function(s,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?Ed:$l:t?Bl:jl).get(s))return s;const o=H(s);if(!e&&o&&Z(Va,i))return Reflect.get(Va,i,r);const a=Reflect.get(s,i,r);return(Oo(i)?xl.has(i):ed(i))||(e||ze(s,"get",i),t)?a:pe(a)?o&&ko(i)?a:a.value:he(a)?e?Hl(a):gn(a):a}}const rd=Ul(),od=Ul(!0);function Ul(e=!1){return function(n,s,i,r){let o=n[s];if(Dn(o)&&pe(o)&&!pe(i))return!1;if(!e&&(!pi(i)&&!Dn(i)&&(o=ee(o),i=ee(i)),!H(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const a=H(n)&&ko(s)?Number(s)<n.length:Z(n,s),c=Reflect.set(n,s,i,r);return n===ee(r)&&(a?ls(i,o)&&bt(n,"set",s,i):bt(n,"add",s,i)),c}}function ad(e,t){const n=Z(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&bt(e,"delete",t,void 0),s}function cd(e,t){const n=Reflect.has(e,t);return(!Oo(t)||!xl.has(t))&&ze(e,"has",t),n}function ld(e){return ze(e,"iterate",H(e)?"length":cn),Reflect.ownKeys(e)}const Fl={get:td,set:rd,deleteProperty:ad,has:cd,ownKeys:ld},ud={get:sd,set(e,t){return!0},deleteProperty(e,t){return!0}},hd=ke({},Fl,{get:nd,set:od}),Lo=e=>e,Fi=e=>Reflect.getPrototypeOf(e);function Gs(e,t,n=!1,s=!1){e=e.__v_raw;const i=ee(e),r=ee(t);n||(t!==r&&ze(i,"get",t),ze(i,"get",r));const{has:o}=Fi(i),a=s?Lo:n?Uo:us;if(o.call(i,t))return a(e.get(t));if(o.call(i,r))return a(e.get(r));e!==i&&e.get(t)}function Js(e,t=!1){const n=this.__v_raw,s=ee(n),i=ee(e);return t||(e!==i&&ze(s,"has",e),ze(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Xs(e,t=!1){return e=e.__v_raw,!t&&ze(ee(e),"iterate",cn),Reflect.get(e,"size",e)}function Wa(e){e=ee(e);const t=ee(this);return Fi(t).has.call(t,e)||(t.add(e),bt(t,"add",e,e)),this}function Ka(e,t){t=ee(t);const n=ee(this),{has:s,get:i}=Fi(n);let r=s.call(n,e);r||(e=ee(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?ls(t,o)&&bt(n,"set",e,t):bt(n,"add",e,t),this}function za(e){const t=ee(this),{has:n,get:s}=Fi(t);let i=n.call(t,e);i||(e=ee(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&bt(t,"delete",e,void 0),r}function qa(){const e=ee(this),t=e.size!==0,n=e.clear();return t&&bt(e,"clear",void 0,void 0),n}function Ys(e,t){return function(s,i){const r=this,o=r.__v_raw,a=ee(o),c=t?Lo:e?Uo:us;return!e&&ze(a,"iterate",cn),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Qs(e,t,n){return function(...s){const i=this.__v_raw,r=ee(i),o=Cn(r),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...s),u=n?Lo:t?Uo:us;return!t&&ze(r,"iterate",c?Br:cn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function kt(e){return function(...t){return e==="delete"?!1:this}}function fd(){const e={get(r){return Gs(this,r)},get size(){return Xs(this)},has:Js,add:Wa,set:Ka,delete:za,clear:qa,forEach:Ys(!1,!1)},t={get(r){return Gs(this,r,!1,!0)},get size(){return Xs(this)},has:Js,add:Wa,set:Ka,delete:za,clear:qa,forEach:Ys(!1,!0)},n={get(r){return Gs(this,r,!0)},get size(){return Xs(this,!0)},has(r){return Js.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Ys(!0,!1)},s={get(r){return Gs(this,r,!0,!0)},get size(){return Xs(this,!0)},has(r){return Js.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Qs(r,!1,!1),n[r]=Qs(r,!0,!1),t[r]=Qs(r,!1,!0),s[r]=Qs(r,!0,!0)}),[e,n,t,s]}const[dd,pd,gd,md]=fd();function Mo(e,t){const n=t?e?md:gd:e?pd:dd;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const _d={get:Mo(!1,!1)},yd={get:Mo(!1,!0)},vd={get:Mo(!0,!1)},jl=new WeakMap,Bl=new WeakMap,$l=new WeakMap,Ed=new WeakMap;function Id(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wd(e){return e.__v_skip||!Object.isExtensible(e)?0:Id(qf(e))}function gn(e){return Dn(e)?e:xo(e,!1,Fl,_d,jl)}function bd(e){return xo(e,!1,hd,yd,Bl)}function Hl(e){return xo(e,!0,ud,vd,$l)}function xo(e,t,n,s,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=wd(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function $t(e){return Dn(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function Dn(e){return!!(e&&e.__v_isReadonly)}function pi(e){return!!(e&&e.__v_isShallow)}function Vl(e){return $t(e)||Dn(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Ln(e){return di(e,"__v_skip",!0),e}const us=e=>he(e)?gn(e):e,Uo=e=>he(e)?Hl(e):e;function Wl(e){Bt&&st&&(e=ee(e),Ml(e.dep||(e.dep=Po())))}function Kl(e,t){e=ee(e),e.dep&&$r(e.dep)}function pe(e){return!!(e&&e.__v_isRef===!0)}function jt(e){return zl(e,!1)}function Td(e){return zl(e,!0)}function zl(e,t){return pe(e)?e:new Ad(e,t)}class Ad{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ee(t),this._value=n?t:us(t)}get value(){return Wl(this),this._value}set value(t){const n=this.__v_isShallow||pi(t)||Dn(t);t=n?t:ee(t),ls(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:us(t),Kl(this))}}function He(e){return pe(e)?e.value:e}const Sd={get:(e,t,n)=>He(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function ql(e){return $t(e)?e:new Proxy(e,Sd)}function Cd(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=Od(e,n);return t}class Rd{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Od(e,t,n){const s=e[t];return pe(s)?s:new Rd(e,t,n)}var Gl;class kd{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Gl]=!1,this._dirty=!0,this.effect=new No(t,()=>{this._dirty||(this._dirty=!0,Kl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=ee(this);return Wl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Gl="__v_isReadonly";function Pd(e,t,n=!1){let s,i;const r=V(e);return r?(s=e,i=rt):(s=e.get,i=e.set),new kd(s,i,r||!i,n)}function Ht(e,t,n,s){let i;try{i=s?e(...s):e()}catch(r){ji(r,t,n)}return i}function Xe(e,t,n,s){if(V(e)){const r=Ht(e,t,n,s);return r&&Tl(r)&&r.catch(o=>{ji(o,t,n)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(Xe(e[r],t,n,s));return i}function ji(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){Ht(c,null,10,[e,o,a]);return}}Nd(e,n,i,s)}function Nd(e,t,n,s=!0){console.error(e)}let hs=!1,Hr=!1;const Se=[];let ht=0;const Rn=[];let vt=null,tn=0;const Jl=Promise.resolve();let Fo=null;function jo(e){const t=Fo||Jl;return e?t.then(this?e.bind(this):e):t}function Dd(e){let t=ht+1,n=Se.length;for(;t<n;){const s=t+n>>>1;fs(Se[s])<e?t=s+1:n=s}return t}function Bo(e){(!Se.length||!Se.includes(e,hs&&e.allowRecurse?ht+1:ht))&&(e.id==null?Se.push(e):Se.splice(Dd(e.id),0,e),Xl())}function Xl(){!hs&&!Hr&&(Hr=!0,Fo=Jl.then(Ql))}function Ld(e){const t=Se.indexOf(e);t>ht&&Se.splice(t,1)}function Md(e){H(e)?Rn.push(...e):(!vt||!vt.includes(e,e.allowRecurse?tn+1:tn))&&Rn.push(e),Xl()}function Ga(e,t=hs?ht+1:0){for(;t<Se.length;t++){const n=Se[t];n&&n.pre&&(Se.splice(t,1),t--,n())}}function Yl(e){if(Rn.length){const t=[...new Set(Rn)];if(Rn.length=0,vt){vt.push(...t);return}for(vt=t,vt.sort((n,s)=>fs(n)-fs(s)),tn=0;tn<vt.length;tn++)vt[tn]();vt=null,tn=0}}const fs=e=>e.id==null?1/0:e.id,xd=(e,t)=>{const n=fs(e)-fs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ql(e){Hr=!1,hs=!0,Se.sort(xd);const t=rt;try{for(ht=0;ht<Se.length;ht++){const n=Se[ht];n&&n.active!==!1&&Ht(n,null,14)}}finally{ht=0,Se.length=0,Yl(),hs=!1,Fo=null,(Se.length||Rn.length)&&Ql()}}function Ud(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||le;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||le;p&&(i=n.map(g=>ye(g)?g.trim():g)),f&&(i=n.map(Cl))}let a,c=s[a=hr(t)]||s[a=hr(_t(t))];!c&&r&&(c=s[a=hr(Bn(t))]),c&&Xe(c,e,6,i);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Xe(l,e,6,i)}}function Zl(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!V(e)){const c=l=>{const u=Zl(l,t,!0);u&&(a=!0,ke(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(he(e)&&s.set(e,null),null):(H(r)?r.forEach(c=>o[c]=null):ke(o,r),he(e)&&s.set(e,o),o)}function Bi(e,t){return!e||!Li(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,Bn(t))||Z(e,t))}let Je=null,$i=null;function gi(e){const t=Je;return Je=e,$i=e&&e.type.__scopeId||null,t}function eu(e){$i=e}function tu(){$i=null}function nu(e,t=Je,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ic(-1);const r=gi(t);let o;try{o=e(...i)}finally{gi(r),s._d&&ic(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function dr(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:v,inheritAttrs:w}=e;let U,O;const F=gi(e);try{if(n.shapeFlag&4){const W=i||s;U=ut(u.call(W,W,f,r,g,p,v)),O=c}else{const W=t;U=ut(W.length>1?W(r,{attrs:c,slots:a,emit:l}):W(r,null)),O=t.props?c:Fd(c)}}catch(W){ss.length=0,ji(W,e,1),U=Ce(ot)}let P=U;if(O&&w!==!1){const W=Object.keys(O),{shapeFlag:z}=P;W.length&&z&7&&(o&&W.some(Co)&&(O=jd(O,o)),P=qt(P,O))}return n.dirs&&(P=qt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),U=P,gi(F),U}const Fd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Li(n))&&((t||(t={}))[n]=e[n]);return t},jd=(e,t)=>{const n={};for(const s in e)(!Co(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Bd(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:c}=t,l=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ja(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Bi(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ja(s,o,l):!0:!!o;return!1}function Ja(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!Bi(n,r))return!0}return!1}function $d({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Hd=e=>e.__isSuspense;function Vd(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Md(e)}function oi(e,t){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[e]=t}}function pt(e,t,n=!1){const s=Ie||Je;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&V(t)?t.call(s.proxy):t}}const Zs={};function On(e,t,n){return su(e,t,n)}function su(e,t,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=le){const a=Ie;let c,l=!1,u=!1;if(pe(e)?(c=()=>e.value,l=pi(e)):$t(e)?(c=()=>e,s=!0):H(e)?(u=!0,l=e.some(P=>$t(P)||pi(P)),c=()=>e.map(P=>{if(pe(P))return P.value;if($t(P))return Tn(P);if(V(P))return Ht(P,a,2)})):V(e)?t?c=()=>Ht(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Xe(e,a,3,[p])}:c=rt,t&&s){const P=c;c=()=>Tn(P())}let f,p=P=>{f=O.onStop=()=>{Ht(P,a,4)}},g;if(ps)if(p=rt,t?n&&Xe(t,a,3,[c(),u?[]:void 0,p]):c(),i==="sync"){const P=Up();g=P.__watcherHandles||(P.__watcherHandles=[])}else return rt;let v=u?new Array(e.length).fill(Zs):Zs;const w=()=>{if(O.active)if(t){const P=O.run();(s||l||(u?P.some((W,z)=>ls(W,v[z])):ls(P,v)))&&(f&&f(),Xe(t,a,3,[P,v===Zs?void 0:u&&v[0]===Zs?[]:v,p]),v=P)}else O.run()};w.allowRecurse=!!t;let U;i==="sync"?U=w:i==="post"?U=()=>Ue(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),U=()=>Bo(w));const O=new No(c,U);t?n?w():v=O.run():i==="post"?Ue(O.run.bind(O),a&&a.suspense):O.run();const F=()=>{O.stop(),a&&a.scope&&Ro(a.scope.effects,O)};return g&&g.push(F),F}function Wd(e,t,n){const s=this.proxy,i=ye(e)?e.includes(".")?iu(s,e):()=>s[e]:e.bind(s,s);let r;V(t)?r=t:(r=t.handler,n=t);const o=Ie;Mn(this);const a=su(i,r.bind(s),n);return o?Mn(o):ln(),a}function iu(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Tn(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))Tn(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Tn(e[n],t);else if(bl(e)||Cn(e))e.forEach(n=>{Tn(n,t)});else if(Sl(e))for(const n in e)Tn(e[n],t);return e}function Kd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $o(()=>{e.isMounted=!0}),lu(()=>{e.isUnmounting=!0}),e}const qe=[Function,Array],zd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},setup(e,{slots:t}){const n=Au(),s=Kd();let i;return()=>{const r=t.default&&ou(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==ot){o=w;break}}const a=ee(e),{mode:c}=a;if(s.isLeaving)return pr(o);const l=Xa(o);if(!l)return pr(o);const u=Vr(l,a,s,n);Wr(l,u);const f=n.subTree,p=f&&Xa(f);let g=!1;const{getTransitionKey:v}=l.type;if(v){const w=v();i===void 0?i=w:w!==i&&(i=w,g=!0)}if(p&&p.type!==ot&&(!nn(l,p)||g)){const w=Vr(p,a,s,n);if(Wr(p,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},pr(o);c==="in-out"&&l.type!==ot&&(w.delayLeave=(U,O,F)=>{const P=ru(s,p);P[String(p.key)]=p,U._leaveCb=()=>{O(),U._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return o}}},qd=zd;function ru(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Vr(e,t,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:w,onAppear:U,onAfterAppear:O,onAppearCancelled:F}=t,P=String(e.key),W=ru(n,e),z=(k,J)=>{k&&Xe(k,s,9,J)},oe=(k,J)=>{const Y=J[1];z(k,J),H(k)?k.every(de=>de.length<=1)&&Y():k.length<=1&&Y()},K={mode:r,persisted:o,beforeEnter(k){let J=a;if(!n.isMounted)if(i)J=w||a;else return;k._leaveCb&&k._leaveCb(!0);const Y=W[P];Y&&nn(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),z(J,[k])},enter(k){let J=c,Y=l,de=u;if(!n.isMounted)if(i)J=U||c,Y=O||l,de=F||u;else return;let ve=!1;const Fe=k._enterCb=Ne=>{ve||(ve=!0,Ne?z(de,[k]):z(Y,[k]),K.delayedLeave&&K.delayedLeave(),k._enterCb=void 0)};J?oe(J,[k,Fe]):Fe()},leave(k,J){const Y=String(e.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return J();z(f,[k]);let de=!1;const ve=k._leaveCb=Fe=>{de||(de=!0,J(),Fe?z(v,[k]):z(g,[k]),k._leaveCb=void 0,W[Y]===e&&delete W[Y])};W[Y]=e,p?oe(p,[k,ve]):ve()},clone(k){return Vr(k,t,n,s)}};return K}function pr(e){if(Hi(e))return e=qt(e),e.children=null,e}function Xa(e){return Hi(e)?e.children?e.children[0]:void 0:e}function Wr(e,t){e.shapeFlag&6&&e.component?Wr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ou(e,t=!1,n){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ge?(o.patchFlag&128&&i++,s=s.concat(ou(o.children,t,a))):(t||o.type!==ot)&&s.push(a!=null?qt(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function au(e){return V(e)?{setup:e,name:e.name}:e}const ai=e=>!!e.type.__asyncLoader,Hi=e=>e.type.__isKeepAlive;function Gd(e,t){cu(e,"a",t)}function Jd(e,t){cu(e,"da",t)}function cu(e,t,n=Ie){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Vi(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Hi(i.parent.vnode)&&Xd(s,t,n,i),i=i.parent}}function Xd(e,t,n,s){const i=Vi(t,e,s,!0);uu(()=>{Ro(s[t],i)},n)}function Vi(e,t,n=Ie,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;$n(),Mn(n);const a=Xe(t,n,e,o);return ln(),Hn(),a});return s?i.unshift(r):i.push(r),r}}const Ct=e=>(t,n=Ie)=>(!ps||e==="sp")&&Vi(e,(...s)=>t(...s),n),Yd=Ct("bm"),$o=Ct("m"),Qd=Ct("bu"),Zd=Ct("u"),lu=Ct("bum"),uu=Ct("um"),ep=Ct("sp"),tp=Ct("rtg"),np=Ct("rtc");function sp(e,t=Ie){Vi("ec",e,t)}function Yt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&($n(),Xe(c,n,8,[e.el,a,e,t]),Hn())}}const hu="components";function fu(e,t){return rp(hu,e,!0,t)||e}const ip=Symbol();function rp(e,t,n=!0,s=!1){const i=Je||Ie;if(i){const r=i.type;if(e===hu){const a=Lp(r,!1);if(a&&(a===t||a===_t(t)||a===Ui(_t(t))))return r}const o=Ya(i[e]||r[e],t)||Ya(i.appContext[e],t);return!o&&s?r:o}}function Ya(e,t){return e&&(e[t]||e[_t(t)]||e[Ui(_t(t))])}function du(e,t,n,s){let i;const r=n&&n[s];if(H(e)||ye(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,r&&r[o])}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=t(e[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Kr=e=>e?Su(e)?Ko(e)||e.proxy:Kr(e.parent):null,ns=ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>Ho(e),$forceUpdate:e=>e.f||(e.f=()=>Bo(e.update)),$nextTick:e=>e.n||(e.n=jo.bind(e.proxy)),$watch:e=>Wd.bind(e)}),gr=(e,t)=>e!==le&&!e.__isScriptSetup&&Z(e,t),op={get({_:e},t){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(gr(s,t))return o[t]=1,s[t];if(i!==le&&Z(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,r[t];if(n!==le&&Z(n,t))return o[t]=4,n[t];zr&&(o[t]=0)}}const u=ns[t];let f,p;if(u)return t==="$attrs"&&ze(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==le&&Z(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,Z(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return gr(i,t)?(i[t]=n,!0):s!==le&&Z(s,t)?(s[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==le&&Z(e,o)||gr(t,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z(ns,o)||Z(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let zr=!0;function ap(e){const t=Ho(e),n=e.proxy,s=e.ctx;zr=!1,t.beforeCreate&&Qa(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:v,activated:w,deactivated:U,beforeDestroy:O,beforeUnmount:F,destroyed:P,unmounted:W,render:z,renderTracked:oe,renderTriggered:K,errorCaptured:k,serverPrefetch:J,expose:Y,inheritAttrs:de,components:ve,directives:Fe,filters:Ne}=t;if(l&&cp(l,s,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const se=o[ae];V(se)&&(s[ae]=se.bind(n))}if(i){const ae=i.call(n,n);he(ae)&&(e.data=gn(ae))}if(zr=!0,r)for(const ae in r){const se=r[ae],Ze=V(se)?se.bind(n,n):V(se.get)?se.get.bind(n,n):rt,Xt=!V(se)&&V(se.set)?se.set.bind(n):rt,et=Le({get:Ze,set:Xt});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>et.value,set:xe=>et.value=xe})}if(a)for(const ae in a)pu(a[ae],s,n,ae);if(c){const ae=V(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(se=>{oi(se,ae[se])})}u&&Qa(u,e,"c");function me(ae,se){H(se)?se.forEach(Ze=>ae(Ze.bind(n))):se&&ae(se.bind(n))}if(me(Yd,f),me($o,p),me(Qd,g),me(Zd,v),me(Gd,w),me(Jd,U),me(sp,k),me(np,oe),me(tp,K),me(lu,F),me(uu,W),me(ep,J),H(Y))if(Y.length){const ae=e.exposed||(e.exposed={});Y.forEach(se=>{Object.defineProperty(ae,se,{get:()=>n[se],set:Ze=>n[se]=Ze})})}else e.exposed||(e.exposed={});z&&e.render===rt&&(e.render=z),de!=null&&(e.inheritAttrs=de),ve&&(e.components=ve),Fe&&(e.directives=Fe)}function cp(e,t,n=rt,s=!1){H(e)&&(e=qr(e));for(const i in e){const r=e[i];let o;he(r)?"default"in r?o=pt(r.from||i,r.default,!0):o=pt(r.from||i):o=pt(r),pe(o)&&s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function Qa(e,t,n){Xe(H(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function pu(e,t,n,s){const i=s.includes(".")?iu(n,s):()=>n[s];if(ye(e)){const r=t[e];V(r)&&On(i,r)}else if(V(e))On(i,e.bind(n));else if(he(e))if(H(e))e.forEach(r=>pu(r,t,n,s));else{const r=V(e.handler)?e.handler.bind(n):t[e.handler];V(r)&&On(i,r,e)}}function Ho(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let c;return a?c=a:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(l=>mi(c,l,o,!0)),mi(c,t,o)),he(t)&&r.set(t,c),c}function mi(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&mi(e,r,n,!0),i&&i.forEach(o=>mi(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=lp[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const lp={data:Za,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Zt,directives:Zt,watch:hp,provide:Za,inject:up};function Za(e,t){return t?e?function(){return ke(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function up(e,t){return Zt(qr(e),qr(t))}function qr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?ke(ke(Object.create(null),e),t):t}function hp(e,t){if(!e)return t;if(!t)return e;const n=ke(Object.create(null),e);for(const s in t)n[s]=De(e[s],t[s]);return n}function fp(e,t,n,s=!1){const i={},r={};di(r,Ki,1),e.propsDefaults=Object.create(null),gu(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:bd(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function dp(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=ee(i),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Bi(e.emitsOptions,p))continue;const g=t[p];if(c)if(Z(r,p))g!==r[p]&&(r[p]=g,l=!0);else{const v=_t(p);i[v]=Gr(c,a,v,g,e,!1)}else g!==r[p]&&(r[p]=g,l=!0)}}}else{gu(e,t,i,r)&&(l=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=Bn(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Gr(c,a,f,void 0,e,!0)):delete i[f]);if(r!==a)for(const f in r)(!t||!Z(t,f))&&(delete r[f],l=!0)}l&&bt(e,"set","$attrs")}function gu(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(ri(c))continue;const l=t[c];let u;i&&Z(i,u=_t(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Bi(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ee(n),l=a||le;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Gr(i,c,f,l[f],e,!Z(l,f))}}return o}function Gr(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Mn(i),s=l[n]=c.call(null,t),ln())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Bn(n))&&(s=!0))}return s}function mu(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let c=!1;if(!V(e)){const u=f=>{c=!0;const[p,g]=mu(f,t,!0);ke(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!c)return he(e)&&s.set(e,Sn),Sn;if(H(r))for(let u=0;u<r.length;u++){const f=_t(r[u]);ec(f)&&(o[f]=le)}else if(r)for(const u in r){const f=_t(u);if(ec(f)){const p=r[u],g=o[f]=H(p)||V(p)?{type:p}:Object.assign({},p);if(g){const v=sc(Boolean,g.type),w=sc(String,g.type);g[0]=v>-1,g[1]=w<0||v<w,(v>-1||Z(g,"default"))&&a.push(f)}}}const l=[o,a];return he(e)&&s.set(e,l),l}function ec(e){return e[0]!=="$"}function tc(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function nc(e,t){return tc(e)===tc(t)}function sc(e,t){return H(t)?t.findIndex(n=>nc(n,e)):V(t)&&nc(t,e)?0:-1}const _u=e=>e[0]==="_"||e==="$stable",Vo=e=>H(e)?e.map(ut):[ut(e)],pp=(e,t,n)=>{if(t._n)return t;const s=nu((...i)=>Vo(t(...i)),n);return s._c=!1,s},yu=(e,t,n)=>{const s=e._ctx;for(const i in e){if(_u(i))continue;const r=e[i];if(V(r))t[i]=pp(i,r,s);else if(r!=null){const o=Vo(r);t[i]=()=>o}}},vu=(e,t)=>{const n=Vo(t);e.slots.default=()=>n},gp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ee(t),di(t,"_",n)):yu(t,e.slots={})}else e.slots={},t&&vu(e,t);di(e.slots,Ki,1)},mp=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=le;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(ke(i,t),!n&&a===1&&delete i._):(r=!t.$stable,yu(t,i)),o=t}else t&&(vu(e,t),o={default:1});if(r)for(const a in i)!_u(a)&&!(a in o)&&delete i[a]};function Eu(){return{app:null,config:{isNativeTag:Wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _p=0;function yp(e,t){return function(s,i=null){V(s)||(s=Object.assign({},s)),i!=null&&!he(i)&&(i=null);const r=Eu(),o=new Set;let a=!1;const c=r.app={_uid:_p++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Fp,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...u)):V(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,f){if(!a){const p=Ce(s,i);return p.appContext=r,u&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Ko(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function Jr(e,t,n,s,i=!1){if(H(e)){e.forEach((p,g)=>Jr(p,t&&(H(t)?t[g]:t),n,s,i));return}if(ai(s)&&!i)return;const r=s.shapeFlag&4?Ko(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=e,l=t&&t.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,Z(f,l)&&(f[l]=null)):pe(l)&&(l.value=null)),V(c))Ht(c,a,12,[o,u]);else{const p=ye(c),g=pe(c);if(p||g){const v=()=>{if(e.f){const w=p?Z(f,c)?f[c]:u[c]:c.value;i?H(w)&&Ro(w,r):H(w)?w.includes(r)||w.push(r):p?(u[c]=[r],Z(f,c)&&(f[c]=u[c])):(c.value=[r],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,Z(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,Ue(v,n)):v()}}}const Ue=Vd;function vp(e){return Ep(e)}function Ep(e,t){const n=Xf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=rt,insertStaticContent:v}=e,w=(h,d,m,_=null,E=null,T=null,C=!1,b=null,A=!!d.dynamicChildren)=>{if(h===d)return;h&&!nn(h,d)&&(_=S(h),xe(h,E,T,!0),h=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:I,ref:M,shapeFlag:N}=d;switch(I){case Wi:U(h,d,m,_);break;case ot:O(h,d,m,_);break;case mr:h==null&&F(d,m,_,C);break;case Ge:ve(h,d,m,_,E,T,C,b,A);break;default:N&1?z(h,d,m,_,E,T,C,b,A):N&6?Fe(h,d,m,_,E,T,C,b,A):(N&64||N&128)&&I.process(h,d,m,_,E,T,C,b,A,Q)}M!=null&&E&&Jr(M,h&&h.ref,T,d||h,!d)},U=(h,d,m,_)=>{if(h==null)s(d.el=a(d.children),m,_);else{const E=d.el=h.el;d.children!==h.children&&l(E,d.children)}},O=(h,d,m,_)=>{h==null?s(d.el=c(d.children||""),m,_):d.el=h.el},F=(h,d,m,_)=>{[h.el,h.anchor]=v(h.children,d,m,_,h.el,h.anchor)},P=({el:h,anchor:d},m,_)=>{let E;for(;h&&h!==d;)E=p(h),s(h,m,_),h=E;s(d,m,_)},W=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),i(h),h=m;i(d)},z=(h,d,m,_,E,T,C,b,A)=>{C=C||d.type==="svg",h==null?oe(d,m,_,E,T,C,b,A):J(h,d,E,T,C,b,A)},oe=(h,d,m,_,E,T,C,b)=>{let A,I;const{type:M,props:N,shapeFlag:x,transition:$,dirs:G}=h;if(A=h.el=o(h.type,T,N&&N.is,N),x&8?u(A,h.children):x&16&&k(h.children,A,null,_,E,T&&M!=="foreignObject",C,b),G&&Yt(h,null,_,"created"),N){for(const ie in N)ie!=="value"&&!ri(ie)&&r(A,ie,null,N[ie],T,h.children,_,E,R);"value"in N&&r(A,"value",null,N.value),(I=N.onVnodeBeforeMount)&&lt(I,_,h)}K(A,h,h.scopeId,C,_),G&&Yt(h,null,_,"beforeMount");const ce=(!E||E&&!E.pendingBranch)&&$&&!$.persisted;ce&&$.beforeEnter(A),s(A,d,m),((I=N&&N.onVnodeMounted)||ce||G)&&Ue(()=>{I&&lt(I,_,h),ce&&$.enter(A),G&&Yt(h,null,_,"mounted")},E)},K=(h,d,m,_,E)=>{if(m&&g(h,m),_)for(let T=0;T<_.length;T++)g(h,_[T]);if(E){let T=E.subTree;if(d===T){const C=E.vnode;K(h,C,C.scopeId,C.slotScopeIds,E.parent)}}},k=(h,d,m,_,E,T,C,b,A=0)=>{for(let I=A;I<h.length;I++){const M=h[I]=b?Dt(h[I]):ut(h[I]);w(null,M,d,m,_,E,T,C,b)}},J=(h,d,m,_,E,T,C)=>{const b=d.el=h.el;let{patchFlag:A,dynamicChildren:I,dirs:M}=d;A|=h.patchFlag&16;const N=h.props||le,x=d.props||le;let $;m&&Qt(m,!1),($=x.onVnodeBeforeUpdate)&&lt($,m,d,h),M&&Yt(d,h,m,"beforeUpdate"),m&&Qt(m,!0);const G=E&&d.type!=="foreignObject";if(I?Y(h.dynamicChildren,I,b,m,_,G,T):C||se(h,d,b,null,m,_,G,T,!1),A>0){if(A&16)de(b,d,N,x,m,_,E);else if(A&2&&N.class!==x.class&&r(b,"class",null,x.class,E),A&4&&r(b,"style",N.style,x.style,E),A&8){const ce=d.dynamicProps;for(let ie=0;ie<ce.length;ie++){const _e=ce[ie],tt=N[_e],vn=x[_e];(vn!==tt||_e==="value")&&r(b,_e,tt,vn,E,h.children,m,_,R)}}A&1&&h.children!==d.children&&u(b,d.children)}else!C&&I==null&&de(b,d,N,x,m,_,E);(($=x.onVnodeUpdated)||M)&&Ue(()=>{$&&lt($,m,d,h),M&&Yt(d,h,m,"updated")},_)},Y=(h,d,m,_,E,T,C)=>{for(let b=0;b<d.length;b++){const A=h[b],I=d[b],M=A.el&&(A.type===Ge||!nn(A,I)||A.shapeFlag&70)?f(A.el):m;w(A,I,M,null,_,E,T,C,!0)}},de=(h,d,m,_,E,T,C)=>{if(m!==_){if(m!==le)for(const b in m)!ri(b)&&!(b in _)&&r(h,b,m[b],null,C,d.children,E,T,R);for(const b in _){if(ri(b))continue;const A=_[b],I=m[b];A!==I&&b!=="value"&&r(h,b,I,A,C,d.children,E,T,R)}"value"in _&&r(h,"value",m.value,_.value)}},ve=(h,d,m,_,E,T,C,b,A)=>{const I=d.el=h?h.el:a(""),M=d.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:x,slotScopeIds:$}=d;$&&(b=b?b.concat($):$),h==null?(s(I,m,_),s(M,m,_),k(d.children,m,M,E,T,C,b,A)):N>0&&N&64&&x&&h.dynamicChildren?(Y(h.dynamicChildren,x,m,E,T,C,b),(d.key!=null||E&&d===E.subTree)&&Iu(h,d,!0)):se(h,d,m,M,E,T,C,b,A)},Fe=(h,d,m,_,E,T,C,b,A)=>{d.slotScopeIds=b,h==null?d.shapeFlag&512?E.ctx.activate(d,m,_,C,A):Ne(d,m,_,E,T,C,A):Ee(h,d,A)},Ne=(h,d,m,_,E,T,C)=>{const b=h.component=Op(h,_,E);if(Hi(h)&&(b.ctx.renderer=Q),kp(b),b.asyncDep){if(E&&E.registerDep(b,me),!h.el){const A=b.subTree=Ce(ot);O(null,A,d,m)}return}me(b,h,d,m,E,T,C)},Ee=(h,d,m)=>{const _=d.component=h.component;if(Bd(h,d,m))if(_.asyncDep&&!_.asyncResolved){ae(_,d,m);return}else _.next=d,Ld(_.update),_.update();else d.el=h.el,_.vnode=d},me=(h,d,m,_,E,T,C)=>{const b=()=>{if(h.isMounted){let{next:M,bu:N,u:x,parent:$,vnode:G}=h,ce=M,ie;Qt(h,!1),M?(M.el=G.el,ae(h,M,C)):M=G,N&&fr(N),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&lt(ie,$,M,G),Qt(h,!0);const _e=dr(h),tt=h.subTree;h.subTree=_e,w(tt,_e,f(tt.el),S(tt),h,E,T),M.el=_e.el,ce===null&&$d(h,_e.el),x&&Ue(x,E),(ie=M.props&&M.props.onVnodeUpdated)&&Ue(()=>lt(ie,$,M,G),E)}else{let M;const{el:N,props:x}=d,{bm:$,m:G,parent:ce}=h,ie=ai(d);if(Qt(h,!1),$&&fr($),!ie&&(M=x&&x.onVnodeBeforeMount)&&lt(M,ce,d),Qt(h,!0),N&&q){const _e=()=>{h.subTree=dr(h),q(N,h.subTree,h,E,null)};ie?d.type.__asyncLoader().then(()=>!h.isUnmounted&&_e()):_e()}else{const _e=h.subTree=dr(h);w(null,_e,m,_,h,E,T),d.el=_e.el}if(G&&Ue(G,E),!ie&&(M=x&&x.onVnodeMounted)){const _e=d;Ue(()=>lt(M,ce,_e),E)}(d.shapeFlag&256||ce&&ai(ce.vnode)&&ce.vnode.shapeFlag&256)&&h.a&&Ue(h.a,E),h.isMounted=!0,d=m=_=null}},A=h.effect=new No(b,()=>Bo(I),h.scope),I=h.update=()=>A.run();I.id=h.uid,Qt(h,!0),I()},ae=(h,d,m)=>{d.component=h;const _=h.vnode.props;h.vnode=d,h.next=null,dp(h,d.props,_,m),mp(h,d.children,m),$n(),Ga(),Hn()},se=(h,d,m,_,E,T,C,b,A=!1)=>{const I=h&&h.children,M=h?h.shapeFlag:0,N=d.children,{patchFlag:x,shapeFlag:$}=d;if(x>0){if(x&128){Xt(I,N,m,_,E,T,C,b,A);return}else if(x&256){Ze(I,N,m,_,E,T,C,b,A);return}}$&8?(M&16&&R(I,E,T),N!==I&&u(m,N)):M&16?$&16?Xt(I,N,m,_,E,T,C,b,A):R(I,E,T,!0):(M&8&&u(m,""),$&16&&k(N,m,_,E,T,C,b,A))},Ze=(h,d,m,_,E,T,C,b,A)=>{h=h||Sn,d=d||Sn;const I=h.length,M=d.length,N=Math.min(I,M);let x;for(x=0;x<N;x++){const $=d[x]=A?Dt(d[x]):ut(d[x]);w(h[x],$,m,null,E,T,C,b,A)}I>M?R(h,E,T,!0,!1,N):k(d,m,_,E,T,C,b,A,N)},Xt=(h,d,m,_,E,T,C,b,A)=>{let I=0;const M=d.length;let N=h.length-1,x=M-1;for(;I<=N&&I<=x;){const $=h[I],G=d[I]=A?Dt(d[I]):ut(d[I]);if(nn($,G))w($,G,m,null,E,T,C,b,A);else break;I++}for(;I<=N&&I<=x;){const $=h[N],G=d[x]=A?Dt(d[x]):ut(d[x]);if(nn($,G))w($,G,m,null,E,T,C,b,A);else break;N--,x--}if(I>N){if(I<=x){const $=x+1,G=$<M?d[$].el:_;for(;I<=x;)w(null,d[I]=A?Dt(d[I]):ut(d[I]),m,G,E,T,C,b,A),I++}}else if(I>x)for(;I<=N;)xe(h[I],E,T,!0),I++;else{const $=I,G=I,ce=new Map;for(I=G;I<=x;I++){const je=d[I]=A?Dt(d[I]):ut(d[I]);je.key!=null&&ce.set(je.key,I)}let ie,_e=0;const tt=x-G+1;let vn=!1,Ua=0;const qn=new Array(tt);for(I=0;I<tt;I++)qn[I]=0;for(I=$;I<=N;I++){const je=h[I];if(_e>=tt){xe(je,E,T,!0);continue}let ct;if(je.key!=null)ct=ce.get(je.key);else for(ie=G;ie<=x;ie++)if(qn[ie-G]===0&&nn(je,d[ie])){ct=ie;break}ct===void 0?xe(je,E,T,!0):(qn[ct-G]=I+1,ct>=Ua?Ua=ct:vn=!0,w(je,d[ct],m,null,E,T,C,b,A),_e++)}const Fa=vn?Ip(qn):Sn;for(ie=Fa.length-1,I=tt-1;I>=0;I--){const je=G+I,ct=d[je],ja=je+1<M?d[je+1].el:_;qn[I]===0?w(null,ct,m,ja,E,T,C,b,A):vn&&(ie<0||I!==Fa[ie]?et(ct,m,ja,2):ie--)}}},et=(h,d,m,_,E=null)=>{const{el:T,type:C,transition:b,children:A,shapeFlag:I}=h;if(I&6){et(h.component.subTree,d,m,_);return}if(I&128){h.suspense.move(d,m,_);return}if(I&64){C.move(h,d,m,Q);return}if(C===Ge){s(T,d,m);for(let N=0;N<A.length;N++)et(A[N],d,m,_);s(h.anchor,d,m);return}if(C===mr){P(h,d,m);return}if(_!==2&&I&1&&b)if(_===0)b.beforeEnter(T),s(T,d,m),Ue(()=>b.enter(T),E);else{const{leave:N,delayLeave:x,afterLeave:$}=b,G=()=>s(T,d,m),ce=()=>{N(T,()=>{G(),$&&$()})};x?x(T,G,ce):ce()}else s(T,d,m)},xe=(h,d,m,_=!1,E=!1)=>{const{type:T,props:C,ref:b,children:A,dynamicChildren:I,shapeFlag:M,patchFlag:N,dirs:x}=h;if(b!=null&&Jr(b,null,m,h,!0),M&256){d.ctx.deactivate(h);return}const $=M&1&&x,G=!ai(h);let ce;if(G&&(ce=C&&C.onVnodeBeforeUnmount)&&lt(ce,d,h),M&6)y(h.component,m,_);else{if(M&128){h.suspense.unmount(m,_);return}$&&Yt(h,null,d,"beforeUnmount"),M&64?h.type.remove(h,d,m,E,Q,_):I&&(T!==Ge||N>0&&N&64)?R(I,d,m,!1,!0):(T===Ge&&N&384||!E&&M&16)&&R(A,d,m),_&&yn(h)}(G&&(ce=C&&C.onVnodeUnmounted)||$)&&Ue(()=>{ce&&lt(ce,d,h),$&&Yt(h,null,d,"unmounted")},m)},yn=h=>{const{type:d,el:m,anchor:_,transition:E}=h;if(d===Ge){qs(m,_);return}if(d===mr){W(h);return}const T=()=>{i(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:C,delayLeave:b}=E,A=()=>C(m,T);b?b(h.el,T,A):A()}else T()},qs=(h,d)=>{let m;for(;h!==d;)m=p(h),i(h),h=m;i(d)},y=(h,d,m)=>{const{bum:_,scope:E,update:T,subTree:C,um:b}=h;_&&fr(_),E.stop(),T&&(T.active=!1,xe(C,h,d,m)),b&&Ue(b,d),Ue(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},R=(h,d,m,_=!1,E=!1,T=0)=>{for(let C=T;C<h.length;C++)xe(h[C],d,m,_,E)},S=h=>h.shapeFlag&6?S(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),L=(h,d,m)=>{h==null?d._vnode&&xe(d._vnode,null,null,!0):w(d._vnode||null,h,d,null,null,null,m),Ga(),Yl(),d._vnode=h},Q={p:w,um:xe,m:et,r:yn,mt:Ne,mc:k,pc:se,pbc:Y,n:S,o:e};let fe,q;return t&&([fe,q]=t(Q)),{render:L,hydrate:fe,createApp:yp(L,fe)}}function Qt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Iu(e,t,n=!1){const s=e.children,i=t.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Dt(i[r]),a.el=o.el),n||Iu(o,a)),a.type===Wi&&(a.el=o.el)}}function Ip(e){const t=e.slice(),n=[0];let s,i,r,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(i=n[n.length-1],e[i]<l){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<l?r=a+1:o=a;l<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const wp=e=>e.__isTeleport,Ge=Symbol(void 0),Wi=Symbol(void 0),ot=Symbol(void 0),mr=Symbol(void 0),ss=[];let it=null;function $e(e=!1){ss.push(it=e?null:[])}function bp(){ss.pop(),it=ss[ss.length-1]||null}let ds=1;function ic(e){ds+=e}function wu(e){return e.dynamicChildren=ds>0?it||Sn:null,bp(),ds>0&&it&&it.push(e),e}function nt(e,t,n,s,i,r){return wu(re(e,t,n,s,i,r,!0))}function bu(e,t,n,s,i){return wu(Ce(e,t,n,s,i,!0))}function Xr(e){return e?e.__v_isVNode===!0:!1}function nn(e,t){return e.type===t.type&&e.key===t.key}const Ki="__vInternal",Tu=({key:e})=>e??null,ci=({ref:e,ref_key:t,ref_for:n})=>e!=null?ye(e)||pe(e)||V(e)?{i:Je,r:e,k:t,f:!!n}:e:null;function re(e,t=null,n=null,s=0,i=null,r=e===Ge?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Tu(t),ref:t&&ci(t),scopeId:$i,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Je};return a?(Wo(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),ds>0&&!o&&it&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&it.push(c),c}const Ce=Tp;function Tp(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===ip)&&(e=ot),Xr(e)){const a=qt(e,t,!0);return n&&Wo(a,n),ds>0&&!r&&it&&(a.shapeFlag&6?it[it.indexOf(e)]=a:it.push(a)),a.patchFlag|=-2,a}if(Mp(e)&&(e=e.__vccOpts),t){t=Ap(t);let{class:a,style:c}=t;a&&!ye(a)&&(t.class=So(a)),he(c)&&(Vl(c)&&!H(c)&&(c=ke({},c)),t.style=Ao(c))}const o=ye(e)?1:Hd(e)?128:wp(e)?64:he(e)?4:V(e)?2:0;return re(e,t,n,s,i,o,r,!0)}function Ap(e){return e?Vl(e)||Ki in e?ke({},e):e:null}function qt(e,t,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=e,a=t?Sp(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Tu(a),ref:t&&t.ref?n&&i?H(i)?i.concat(ci(t)):[i,ci(t)]:ci(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Ss(e=" ",t=0){return Ce(Wi,null,e,t)}function _i(e="",t=!1){return t?($e(),bu(ot,null,e)):Ce(ot,null,e)}function ut(e){return e==null||typeof e=="boolean"?Ce(ot):H(e)?Ce(Ge,null,e.slice()):typeof e=="object"?Dt(e):Ce(Wi,null,String(e))}function Dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Wo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Wo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ki in t)?t._ctx=Je:i===3&&Je&&(Je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),s&64?(n=16,t=[Ss(t)]):n=8);e.children=t,e.shapeFlag|=n}function Sp(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=So([t.class,s.class]));else if(i==="style")t.style=Ao([t.style,s.style]);else if(Li(i)){const r=t[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function lt(e,t,n,s=null){Xe(e,t,7,[n,s])}const Cp=Eu();let Rp=0;function Op(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Cp,r={uid:Rp++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(s,i),emitsOptions:Zl(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Ud.bind(null,r),e.ce&&e.ce(r),r}let Ie=null;const Au=()=>Ie||Je,Mn=e=>{Ie=e,e.scope.on()},ln=()=>{Ie&&Ie.scope.off(),Ie=null};function Su(e){return e.vnode.shapeFlag&4}let ps=!1;function kp(e,t=!1){ps=t;const{props:n,children:s}=e.vnode,i=Su(e);fp(e,n,i,t),gp(e,s);const r=i?Pp(e,t):void 0;return ps=!1,r}function Pp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ln(new Proxy(e.ctx,op));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?Dp(e):null;Mn(e),$n();const r=Ht(s,e,0,[e.props,i]);if(Hn(),ln(),Tl(r)){if(r.then(ln,ln),t)return r.then(o=>{rc(e,o,t)}).catch(o=>{ji(o,e,0)});e.asyncDep=r}else rc(e,r,t)}else Cu(e,t)}function rc(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=ql(t)),Cu(e,n)}let oc;function Cu(e,t,n){const s=e.type;if(!e.render){if(!t&&oc&&!s.render){const i=s.template||Ho(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ke(ke({isCustomElement:r,delimiters:a},o),c);s.render=oc(i,l)}}e.render=s.render||rt}Mn(e),$n(),ap(e),Hn(),ln()}function Np(e){return new Proxy(e.attrs,{get(t,n){return ze(e,"get","$attrs"),t[n]}})}function Dp(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Np(e))},slots:e.slots,emit:e.emit,expose:t}}function Ko(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ql(Ln(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ns)return ns[n](e)},has(t,n){return n in t||n in ns}}))}function Lp(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Mp(e){return V(e)&&"__vccOpts"in e}const Le=(e,t)=>Pd(e,t,ps);function Ru(e,t,n){const s=arguments.length;return s===2?he(t)&&!H(t)?Xr(t)?Ce(e,null,[t]):Ce(e,t):Ce(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xr(n)&&(n=[n]),Ce(e,t,n))}const xp=Symbol(""),Up=()=>pt(xp),Fp="3.2.45",jp="http://www.w3.org/2000/svg",sn=typeof document<"u"?document:null,ac=sn&&sn.createElement("template"),Bp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?sn.createElementNS(jp,e):sn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>sn.createTextNode(e),createComment:e=>sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ac.innerHTML=s?`<svg>${e}</svg>`:e;const a=ac.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $p(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Hp(e,t,n){const s=e.style,i=ye(n);if(n&&!i){for(const r in n)Yr(s,r,n[r]);if(t&&!ye(t))for(const r in t)n[r]==null&&Yr(s,r,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const cc=/\s*!important$/;function Yr(e,t,n){if(H(n))n.forEach(s=>Yr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Vp(e,t);cc.test(n)?e.setProperty(Bn(s),n.replace(cc,""),"important"):e[s]=n}}const lc=["Webkit","Moz","ms"],_r={};function Vp(e,t){const n=_r[t];if(n)return n;let s=_t(t);if(s!=="filter"&&s in e)return _r[t]=s;s=Ui(s);for(let i=0;i<lc.length;i++){const r=lc[i]+s;if(r in e)return _r[t]=r}return t}const uc="http://www.w3.org/1999/xlink";function Wp(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(uc,t.slice(6,t.length)):e.setAttributeNS(uc,t,n);else{const r=Vf(t);n==null||r&&!Il(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Kp(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Il(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function zp(e,t,n,s){e.addEventListener(t,n,s)}function qp(e,t,n,s){e.removeEventListener(t,n,s)}function Gp(e,t,n,s,i=null){const r=e._vei||(e._vei={}),o=r[t];if(s&&o)o.value=s;else{const[a,c]=Jp(t);if(s){const l=r[t]=Qp(s,i);zp(e,a,l,c)}else o&&(qp(e,a,o,c),r[t]=void 0)}}const hc=/(?:Once|Passive|Capture)$/;function Jp(e){let t;if(hc.test(e)){t={};let s;for(;s=e.match(hc);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bn(e.slice(2)),t]}let yr=0;const Xp=Promise.resolve(),Yp=()=>yr||(Xp.then(()=>yr=0),yr=Date.now());function Qp(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xe(Zp(s,n.value),t,5,[s])};return n.value=e,n.attached=Yp(),n}function Zp(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const fc=/^on[a-z]/,eg=(e,t,n,s,i=!1,r,o,a,c)=>{t==="class"?$p(e,s,i):t==="style"?Hp(e,n,s):Li(t)?Co(t)||Gp(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tg(e,t,s,i))?Kp(e,t,s,r,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Wp(e,t,s,i))};function tg(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&fc.test(t)&&V(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||fc.test(t)&&ye(n)?!1:t in e}const ng={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};qd.props;const sg=["ctrl","shift","alt","meta"],ig={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>sg.some(n=>e[`${n}Key`]&&!t.includes(n))},rg=(e,t)=>(n,...s)=>{for(let i=0;i<t.length;i++){const r=ig[t[i]];if(r&&r(n,t))return}return e(n,...s)},og=ke({patchProp:eg},Bp);let dc;function ag(){return dc||(dc=vp(og))}const cg=(...e)=>{const t=ag().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=lg(s);if(!i)return;const r=t._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function lg(e){return ye(e)?document.querySelector(e):e}var ug=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Ou;const zi=e=>Ou=e,ku=Symbol();function Qr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var is;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(is||(is={}));function hg(){const e=Ol(!0),t=e.run(()=>jt({}));let n=[],s=[];const i=Ln({install(r){zi(i),i._a=r,r.provide(ku,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!ug?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Pu=()=>{};function pc(e,t,n,s=Pu){e.push(t);const i=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),s())};return!n&&kl()&&Pl(i),i}function En(e,...t){e.slice().forEach(n=>{n(...t)})}function Zr(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];Qr(i)&&Qr(s)&&e.hasOwnProperty(n)&&!pe(s)&&!$t(s)?e[n]=Zr(i,s):e[n]=s}return e}const fg=Symbol();function dg(e){return!Qr(e)||!e.hasOwnProperty(fg)}const{assign:Lt}=Object;function pg(e){return!!(pe(e)&&e.effect)}function gg(e,t,n,s){const{state:i,actions:r,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=i?i():{});const u=Cd(n.state.value[e]);return Lt(u,r,Object.keys(o||{}).reduce((f,p)=>(f[p]=Ln(Le(()=>{zi(n);const g=n._s.get(e);return o[p].call(g,g)})),f),{}))}return c=Nu(e,l,t,n,s,!0),c.$reset=function(){const f=i?i():{};this.$patch(p=>{Lt(p,f)})},c}function Nu(e,t,n={},s,i,r){let o;const a=Lt({actions:{}},n),c={deep:!0};let l,u,f=Ln([]),p=Ln([]),g;const v=s.state.value[e];!r&&!v&&(s.state.value[e]={}),jt({});let w;function U(K){let k;l=u=!1,typeof K=="function"?(K(s.state.value[e]),k={type:is.patchFunction,storeId:e,events:g}):(Zr(s.state.value[e],K),k={type:is.patchObject,payload:K,storeId:e,events:g});const J=w=Symbol();jo().then(()=>{w===J&&(l=!0)}),u=!0,En(f,k,s.state.value[e])}const O=Pu;function F(){o.stop(),f=[],p=[],s._s.delete(e)}function P(K,k){return function(){zi(s);const J=Array.from(arguments),Y=[],de=[];function ve(Ee){Y.push(Ee)}function Fe(Ee){de.push(Ee)}En(p,{args:J,name:K,store:z,after:ve,onError:Fe});let Ne;try{Ne=k.apply(this&&this.$id===e?this:z,J)}catch(Ee){throw En(de,Ee),Ee}return Ne instanceof Promise?Ne.then(Ee=>(En(Y,Ee),Ee)).catch(Ee=>(En(de,Ee),Promise.reject(Ee))):(En(Y,Ne),Ne)}}const W={_p:s,$id:e,$onAction:pc.bind(null,p),$patch:U,$reset:O,$subscribe(K,k={}){const J=pc(f,K,k.detached,()=>Y()),Y=o.run(()=>On(()=>s.state.value[e],de=>{(k.flush==="sync"?u:l)&&K({storeId:e,type:is.direct,events:g},de)},Lt({},c,k)));return J},$dispose:F},z=gn(W);s._s.set(e,z);const oe=s._e.run(()=>(o=Ol(),o.run(()=>t())));for(const K in oe){const k=oe[K];if(pe(k)&&!pg(k)||$t(k))r||(v&&dg(k)&&(pe(k)?k.value=v[K]:Zr(k,v[K])),s.state.value[e][K]=k);else if(typeof k=="function"){const J=P(K,k);oe[K]=J,a.actions[K]=k}}return Lt(z,oe),Lt(ee(z),oe),Object.defineProperty(z,"$state",{get:()=>s.state.value[e],set:K=>{U(k=>{Lt(k,K)})}}),s._p.forEach(K=>{Lt(z,o.run(()=>K({store:z,app:s._a,pinia:s,options:a})))}),v&&r&&n.hydrate&&n.hydrate(z.$state,v),l=!0,u=!0,z}function mg(e,t,n){let s,i;const r=typeof t=="function";typeof e=="string"?(s=e,i=r?n:t):(i=e,s=e.id);function o(a,c){const l=Au();return a=a||l&&pt(ku,null),a&&zi(a),a=Ou,a._s.has(s)||(r?Nu(s,t,i,a):gg(s,i,a)),a._s.get(s)}return o.$id=s,o}var gc;const Cs=typeof window<"u",_g=e=>typeof e=="string",yg=()=>{};Cs&&((gc=window==null?void 0:window.navigator)!=null&&gc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function vg(e){return typeof e=="function"?e():He(e)}function Eg(e){return e}function Ig(e){return kl()?(Pl(e),!0):!1}function Yn(e){var t;const n=vg(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Du=Cs?window:void 0;Cs&&window.document;Cs&&window.navigator;Cs&&window.location;function ei(...e){let t,n,s,i;if(_g(e[0])||Array.isArray(e[0])?([n,s,i]=e,t=Du):[t,n,s,i]=e,!t)return yg;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,f,p)=>(u.addEventListener(f,p,i),()=>u.removeEventListener(f,p,i)),c=On(()=>Yn(t),u=>{o(),u&&r.push(...n.flatMap(f=>s.map(p=>a(u,f,p))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return Ig(l),l}function wg(e,t,n={}){const{window:s=Du,ignore:i=[],capture:r=!0,detectIframe:o=!1}=n;if(!s)return;let a=!0,c;const l=g=>i.some(v=>{if(typeof v=="string")return Array.from(s.document.querySelectorAll(v)).some(w=>w===g.target||g.composedPath().includes(w));{const w=Yn(v);return w&&(g.target===w||g.composedPath().includes(w))}}),u=g=>{s.clearTimeout(c);const v=Yn(e);if(!(!v||v===g.target||g.composedPath().includes(v))){if(g.detail===0&&(a=!l(g)),!a){a=!0;return}t(g)}},f=[ei(s,"click",u,{passive:!0,capture:r}),ei(s,"pointerdown",g=>{const v=Yn(e);v&&(a=!g.composedPath().includes(v)&&!l(g))},{passive:!0}),ei(s,"pointerup",g=>{if(g.button===0){const v=g.composedPath();g.composedPath=()=>v,c=s.setTimeout(()=>u(g),50)}},{passive:!0}),o&&ei(s,"blur",g=>{var v;const w=Yn(e);((v=s.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(w!=null&&w.contains(s.document.activeElement))&&t(g)})].filter(Boolean);return()=>f.forEach(g=>g())}const eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},to="__vueuse_ssr_handlers__";eo[to]=eo[to]||{};eo[to];var mc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(mc||(mc={}));var bg=Object.defineProperty,_c=Object.getOwnPropertySymbols,Tg=Object.prototype.hasOwnProperty,Ag=Object.prototype.propertyIsEnumerable,yc=(e,t,n)=>t in e?bg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sg=(e,t)=>{for(var n in t||(t={}))Tg.call(t,n)&&yc(e,n,t[n]);if(_c)for(var n of _c(t))Ag.call(t,n)&&yc(e,n,t[n]);return e};const Cg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Sg({linear:Eg},Cg);const Rs=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},Rg=e=>(eu("data-v-20676f4f"),e=e(),tu(),e),Og={class:"nav-container"},kg={class:"primary-nav"},Pg={key:0,class:"secoundary-nav"},Ng=Rg(()=>re("button",{class:"cart-btn"},[Ss(" CART "),re("i",{class:"fas fa-shopping-cart"})],-1)),Dg={__name:"TheNavbar",setup(e){const t=jt(null),n=jt(null),s=jt(""),i=jt(""),r=()=>{n.value<=600?t.value=!t.value:t.value};wg(()=>s,()=>{n.value<=600?t.value=!1:t.value},{ignore:[i]});const o=()=>{n.value=window.innerWidth,n.value<=600?t.value=!1:t.value=!0};o(),window.addEventListener("resize",o);const a=[{name:"Home",path:"home"},{name:"PROFILE",path:"auth"}];return(c,l)=>{const u=fu("RouterLink");return $e(),nt("nav",Og,[re("div",{class:"inner-nav-cont",ref_key:"NavbarRef",ref:s},[re("div",kg,[re("h1",{onClick:l[0]||(l[0]=f=>c.$router.push({name:"home"}))}," Ease "),re("i",{onClick:r,class:"fas fa-bars",ref_key:"NavBtnRef",ref:i},null,512)]),t.value?($e(),nt("div",Pg,[($e(),nt(Ge,null,du(a,f=>Ce(u,{to:{name:f.path}},{default:nu(()=>[Ss(Ur(f.name),1)]),_:2},1032,["to"])),64)),Ng])):_i("",!0)],512)])}}},Lg=Rs(Dg,[["__scopeId","data-v-20676f4f"]]);/**
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
 *//**
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
 */const Lu=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Mg=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Lu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Mg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||l==null||f==null)throw Error();const p=r<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const v=l<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},xg=function(e){const t=Lu(e);return Mu.encodeByteArray(t,!0)},yi=function(e){return xg(e).replace(/\./g,"")},xu=function(e){try{return Mu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Fg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bg(){const e=Pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $g(){try{return typeof indexedDB=="object"}catch{return!1}}function Hg(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function Vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Wg=()=>Vg().__FIREBASE_DEFAULTS__,Kg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},zg=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xu(e[1]);return t&&JSON.parse(t)},zo=()=>{try{return Wg()||Kg()||zg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Uu=e=>{var t,n;return(n=(t=zo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qg=e=>{const t=Uu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Gg=()=>{var e;return(e=zo())===null||e===void 0?void 0:e.config},Fu=e=>{var t;return(t=zo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Jg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Xg(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[yi(JSON.stringify(n)),yi(JSON.stringify(o)),a].join(".")}/**
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
 */const Yg="FirebaseError";class Rt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Yg,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Qg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,s)}}function Qg(e,t){return e.replace(Zg,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Zg=/\{\$([^}]+)}/g;function em(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function vi(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(vc(r)&&vc(o)){if(!vi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vc(e){return e!==null&&typeof e=="object"}/**
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
 */function ks(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Qn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function Zn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function tm(e,t){const n=new nm(e,t);return n.subscribe.bind(n)}class nm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=vr),i.error===void 0&&(i.error=vr),i.complete===void 0&&(i.complete=vr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function vr(){}/**
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
 */function Ot(e){return e&&e._delegate?e._delegate:e}class fn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class im{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Jg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(om(t))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=en){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=en){return this.instances.has(t)}getOptions(t=en){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rm(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=en){return this.component?this.component.multipleInstances?t:en:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rm(e){return e===en?void 0:e}function om(e){return e.instantiationMode==="EAGER"}/**
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
 */class am{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new im(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const cm={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},lm=ne.INFO,um={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},hm=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=um[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qo{constructor(t){this.name=t,this._logLevel=lm,this._logHandler=hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const fm=(e,t)=>t.some(n=>e instanceof n);let Ec,Ic;function dm(){return Ec||(Ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pm(){return Ic||(Ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ju=new WeakMap,no=new WeakMap,Bu=new WeakMap,Er=new WeakMap,Go=new WeakMap;function gm(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Vt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ju.set(n,e)}).catch(()=>{}),Go.set(t,e),t}function mm(e){if(no.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});no.set(e,t)}let so={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return no.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _m(e){so=e(so)}function ym(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ir(this),t,...n);return Bu.set(s,t.sort?t.sort():[t]),Vt(s)}:pm().includes(e)?function(...t){return e.apply(Ir(this),t),Vt(ju.get(this))}:function(...t){return Vt(e.apply(Ir(this),t))}}function vm(e){return typeof e=="function"?ym(e):(e instanceof IDBTransaction&&mm(e),fm(e,dm())?new Proxy(e,so):e)}function Vt(e){if(e instanceof IDBRequest)return gm(e);if(Er.has(e))return Er.get(e);const t=vm(e);return t!==e&&(Er.set(e,t),Go.set(t,e)),t}const Ir=e=>Go.get(e);function Em(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Vt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Im=["get","getKey","getAll","getAllKeys","count"],wm=["put","add","delete","clear"],wr=new Map;function wc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(wr.get(t))return wr.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=wm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Im.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return wr.set(t,r),r}_m(e=>({...e,get:(t,n,s)=>wc(t,n)||e.get(t,n,s),has:(t,n)=>!!wc(t,n)||e.has(t,n)}));/**
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
 */class bm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const io="@firebase/app",bc="0.9.0";/**
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
 */const dn=new qo("@firebase/app"),Am="@firebase/app-compat",Sm="@firebase/analytics-compat",Cm="@firebase/analytics",Rm="@firebase/app-check-compat",Om="@firebase/app-check",km="@firebase/auth",Pm="@firebase/auth-compat",Nm="@firebase/database",Dm="@firebase/database-compat",Lm="@firebase/functions",Mm="@firebase/functions-compat",xm="@firebase/installations",Um="@firebase/installations-compat",Fm="@firebase/messaging",jm="@firebase/messaging-compat",Bm="@firebase/performance",$m="@firebase/performance-compat",Hm="@firebase/remote-config",Vm="@firebase/remote-config-compat",Wm="@firebase/storage",Km="@firebase/storage-compat",zm="@firebase/firestore",qm="@firebase/firestore-compat",Gm="firebase",Jm="9.15.0";/**
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
 */const ro="[DEFAULT]",Xm={[io]:"fire-core",[Am]:"fire-core-compat",[Cm]:"fire-analytics",[Sm]:"fire-analytics-compat",[Om]:"fire-app-check",[Rm]:"fire-app-check-compat",[km]:"fire-auth",[Pm]:"fire-auth-compat",[Nm]:"fire-rtdb",[Dm]:"fire-rtdb-compat",[Lm]:"fire-fn",[Mm]:"fire-fn-compat",[xm]:"fire-iid",[Um]:"fire-iid-compat",[Fm]:"fire-fcm",[jm]:"fire-fcm-compat",[Bm]:"fire-perf",[$m]:"fire-perf-compat",[Hm]:"fire-rc",[Vm]:"fire-rc-compat",[Wm]:"fire-gcs",[Km]:"fire-gcs-compat",[zm]:"fire-fst",[qm]:"fire-fst-compat","fire-js":"fire-js",[Gm]:"fire-js-all"};/**
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
 */const Ei=new Map,oo=new Map;function Ym(e,t){try{e.container.addComponent(t)}catch(n){dn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xn(e){const t=e.name;if(oo.has(t))return dn.debug(`There were multiple attempts to register component ${t}.`),!1;oo.set(t,e);for(const n of Ei.values())Ym(n,e);return!0}function Jo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Qm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new Os("app","Firebase",Qm);/**
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
 */class Zm{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=Jm;function $u(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ro,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(n||(n=Gg()),!n)throw Wt.create("no-options");const r=Ei.get(i);if(r){if(vi(n,r.options)&&vi(s,r.config))return r;throw Wt.create("duplicate-app",{appName:i})}const o=new am(i);for(const c of oo.values())o.addComponent(c);const a=new Zm(n,s,o);return Ei.set(i,a),a}function Hu(e=ro){const t=Ei.get(e);if(!t&&e===ro)return $u();if(!t)throw Wt.create("no-app",{appName:e});return t}function Kt(e,t,n){var s;let i=(s=Xm[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),dn.warn(a.join(" "));return}xn(new fn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const e_="firebase-heartbeat-database",t_=1,gs="firebase-heartbeat-store";let br=null;function Vu(){return br||(br=Em(e_,t_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(gs)}}}).catch(e=>{throw Wt.create("idb-open",{originalErrorMessage:e.message})})),br}async function n_(e){try{return(await Vu()).transaction(gs).objectStore(gs).get(Wu(e))}catch(t){if(t instanceof Rt)dn.warn(t.message);else{const n=Wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});dn.warn(n.message)}}}async function Tc(e,t){try{const s=(await Vu()).transaction(gs,"readwrite");return await s.objectStore(gs).put(t,Wu(e)),s.done}catch(n){if(n instanceof Rt)dn.warn(n.message);else{const s=Wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(s.message)}}}function Wu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const s_=1024,i_=30*24*60*60*1e3;class r_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ac();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=i_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ac(),{heartbeatsToSend:n,unsentEntries:s}=o_(this._heartbeatsCache.heartbeats),i=yi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ac(){return new Date().toISOString().substring(0,10)}function o_(e,t=s_){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sc(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sc(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class a_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $g()?Hg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Sc(e){return yi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function c_(e){xn(new fn("platform-logger",t=>new bm(t),"PRIVATE")),xn(new fn("heartbeat",t=>new r_(t),"PRIVATE")),Kt(io,bc,e),Kt(io,bc,"esm2017"),Kt("fire-js","")}c_("");function Xo(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n}function Ku(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l_=Ku,zu=new Os("auth","Firebase",Ku());/**
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
 */const Cc=new qo("@firebase/auth");function li(e,...t){Cc.logLevel<=ne.ERROR&&Cc.error(`Auth (${Ps}): ${e}`,...t)}/**
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
 */function Ye(e,...t){throw Yo(e,...t)}function gt(e,...t){return Yo(e,...t)}function qu(e,t,n){const s=Object.assign(Object.assign({},l_()),{[t]:n});return new Os("auth","Firebase",s).create(t,{appName:e.name})}function u_(e,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&Ye(e,"argument-error"),qu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yo(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return zu.create(e,...t)}function j(e,t,...n){if(!e)throw Yo(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw li(t),new Error(t)}function Tt(e,t){e||Et(t)}/**
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
 */const Rc=new Map;function It(e){Tt(e instanceof Function,"Expected a class definition");let t=Rc.get(e);return t?(Tt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Rc.set(e,t),t)}/**
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
 */function h_(e,t){const n=Jo(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(vi(r,t??{}))return i;Ye(i,"already-initialized")}return n.initialize({options:t})}function f_(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(It);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function ao(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function d_(){return Oc()==="http:"||Oc()==="https:"}function Oc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function p_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d_()||Fg()||"connection"in navigator)?navigator.onLine:!0}function g_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ns{constructor(t,n){this.shortDelay=t,this.longDelay=n,Tt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ug()||jg()}get(){return p_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qo(e,t){Tt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Gu{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const __=new Ns(3e4,6e4);function Ds(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ls(e,t,n,s,i={}){return Ju(e,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=ks(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Gu.fetch()(Xu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},r))})}async function Ju(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},m_),t);try{const i=new y_(e),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ti(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ti(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw ti(e,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qu(e,u,l);Ye(e,u)}}catch(i){if(i instanceof Rt)throw i;Ye(e,"network-request-failed")}}async function Ms(e,t,n,s,i={}){const r=await Ls(e,t,n,s,i);return"mfaPendingCredential"in r&&Ye(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Xu(e,t,n,s){const i=`${t}${n}?${s}`;return e.config.emulator?Qo(e.config,i):`${e.config.apiScheme}://${i}`}class y_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gt(this.auth,"network-request-failed")),__.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ti(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=gt(e,t,s);return i.customData._tokenResponse=n,i}/**
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
 */async function v_(e,t){return Ls(e,"POST","/v1/accounts:delete",t)}async function E_(e,t){return Ls(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function rs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function I_(e,t=!1){const n=Ot(e),s=await n.getIdToken(t),i=Zo(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:rs(Tr(i.auth_time)),issuedAtTime:rs(Tr(i.iat)),expirationTime:rs(Tr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Tr(e){return Number(e)*1e3}function Zo(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const i=xu(n);return i?JSON.parse(i):(li("Failed to decode base64 JWT payload"),null)}catch(i){return li("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function w_(e){const t=Zo(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ms(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Rt&&b_(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function b_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class T_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(e){var t;const n=e.auth,s=await e.getIdToken(),i=await ms(e,E_(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?C_(r.providerUserInfo):[],a=S_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Yu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function A_(e){const t=Ot(e);await Ii(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function S_(e,t){return[...e.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function C_(e){return e.map(t=>{var{providerId:n}=t,s=Xo(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function R_(e,t){const n=await Ju(e,{},async()=>{const s=ks({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=Xu(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):w_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return j(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await R_(t,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new _s;return s&&(j(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Pt(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class un{constructor(t){var{uid:n,auth:s,stsTokenManager:i}=t,r=Xo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await ms(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return I_(this,t)}reload(){return A_(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new un(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Ii(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ms(this,v_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,i,r,o,a,c,l,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:W,isAnonymous:z,providerData:oe,stsTokenManager:K}=n;j(P&&K,t,"internal-error");const k=_s.fromJSON(this.name,K);j(typeof P=="string",t,"internal-error"),Pt(f,t.name),Pt(p,t.name),j(typeof W=="boolean",t,"internal-error"),j(typeof z=="boolean",t,"internal-error"),Pt(g,t.name),Pt(v,t.name),Pt(w,t.name),Pt(U,t.name),Pt(O,t.name),Pt(F,t.name);const J=new un({uid:P,auth:t,email:p,emailVerified:W,displayName:f,isAnonymous:z,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:k,createdAt:O,lastLoginAt:F});return oe&&Array.isArray(oe)&&(J.providerData=oe.map(Y=>Object.assign({},Y))),U&&(J._redirectEventId=U),J}static async _fromIdTokenResponse(t,n,s=!1){const i=new _s;i.updateFromServerResponse(n);const r=new un({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Ii(r),r}}/**
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
 */class Qu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Qu.type="NONE";const kc=Qu;/**
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
 */function ui(e,t,n){return`firebase:${e}:${t}:${n}`}class kn{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ui(this.userKey,i.apiKey,r),this.fullPersistenceKey=ui("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?un._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new kn(It(kc),t,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||It(kc);const o=ui(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=un._fromJSON(t,u);l!==r&&(a=f),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new kn(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new kn(r,t,s))}}/**
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
 */function Pc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(th(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sh(t))return"Blackberry";if(ih(t))return"Webos";if(ea(t))return"Safari";if((t.includes("chrome/")||eh(t))&&!t.includes("edge/"))return"Chrome";if(nh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zu(e=Pe()){return/firefox\//i.test(e)}function ea(e=Pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function eh(e=Pe()){return/crios\//i.test(e)}function th(e=Pe()){return/iemobile/i.test(e)}function nh(e=Pe()){return/android/i.test(e)}function sh(e=Pe()){return/blackberry/i.test(e)}function ih(e=Pe()){return/webos/i.test(e)}function qi(e=Pe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function O_(e=Pe()){var t;return qi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function k_(){return Bg()&&document.documentMode===10}function rh(e=Pe()){return qi(e)||nh(e)||ih(e)||sh(e)||/windows phone/i.test(e)||th(e)}function P_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function oh(e,t=[]){let n;switch(e){case"Browser":n=Pc(Pe());break;case"Worker":n=`${Pc(Pe())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class N_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class D_{constructor(t,n,s){this.app=t,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nc(this),this.idTokenSubscription=new Nc(this),this.beforeStateQueue=new N_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await kn.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ii(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=g_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ot(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Os("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&It(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,s,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function mn(e){return Ot(e)}class Nc{constructor(t){this.auth=t,this.observer=null,this.addObserver=tm(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function L_(e,t,n){const s=mn(e);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=ah(t),{host:o,port:a}=M_(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||x_()}function ah(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function M_(e){const t=ah(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Dc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Dc(o)}}}function Dc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function x_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ta{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(t){return Et("not implemented")}_linkToIdToken(t,n){return Et("not implemented")}_getReauthenticationResolver(t){return Et("not implemented")}}async function U_(e,t){return Ls(e,"POST","/v1/accounts:update",t)}/**
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
 */async function F_(e,t){return Ms(e,"POST","/v1/accounts:signInWithPassword",Ds(e,t))}/**
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
 */async function j_(e,t){return Ms(e,"POST","/v1/accounts:signInWithEmailLink",Ds(e,t))}async function B_(e,t){return Ms(e,"POST","/v1/accounts:signInWithEmailLink",Ds(e,t))}/**
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
 */class ys extends ta{constructor(t,n,s,i=null){super("password",s),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ys(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new ys(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return F_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return j_(t,{email:this._email,oobCode:this._password});default:Ye(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return U_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return B_(t,{idToken:n,email:this._email,oobCode:this._password});default:Ye(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Pn(e,t){return Ms(e,"POST","/v1/accounts:signInWithIdp",Ds(e,t))}/**
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
 */const $_="http://localhost";class pn extends ta{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=n,r=Xo(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new pn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Pn(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Pn(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Pn(t,n)}buildRequest(){const t={requestUri:$_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ks(n)}return t}}/**
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
 */function H_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V_(e){const t=Qn(Zn(e)).link,n=t?Qn(Zn(t)).deep_link_id:null,s=Qn(Zn(e)).deep_link_id;return(s?Qn(Zn(s)).link:null)||s||n||t||e}class na{constructor(t){var n,s,i,r,o,a;const c=Qn(Zn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,f=H_((i=c.mode)!==null&&i!==void 0?i:null);j(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=V_(t);try{return new na(n)}catch{return null}}}/**
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
 */class Vn{constructor(){this.providerId=Vn.PROVIDER_ID}static credential(t,n){return ys._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=na.parseLink(n);return j(s,"argument-error"),ys._fromEmailAndCode(t,s.code,s.tenantId)}}Vn.PROVIDER_ID="password";Vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sa{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xs extends sa{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends xs{constructor(){super("facebook.com")}static credential(t){return pn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class ft extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return pn._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ft.credentialFromTaggedObject(t)}static credentialFromError(t){return ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return ft.credential(n,s)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
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
 */class Ut extends xs{constructor(){super("github.com")}static credential(t){return pn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Ft extends xs{constructor(){super("twitter.com")}static credential(t,n){return pn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Ft.credential(n,s)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
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
 */async function ch(e,t){return Ms(e,"POST","/v1/accounts:signUp",Ds(e,t))}/**
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
 */class At{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,i=!1){const r=await un._fromIdTokenResponse(t,s,i),o=Lc(s);return new At({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const i=Lc(s);return new At({user:t,providerId:i,_tokenResponse:s,operationType:n})}}function Lc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function W_(e){var t;const n=mn(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new At({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await ch(n,{returnSecureToken:!0}),i=await At._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class wi extends Rt{constructor(t,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,wi.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,i){return new wi(t,n,s,i)}}function lh(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wi._fromErrorAndOperation(e,r,t,s):r})}async function K_(e,t,n=!1){const s=await ms(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return At._forOperation(e,"link",s)}/**
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
 */async function z_(e,t,n=!1){const{auth:s}=e,i="reauthenticate";try{const r=await ms(e,lh(s,i,t,e),n);j(r.idToken,s,"internal-error");const o=Zo(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(e.uid===a,s,"user-mismatch"),At._forOperation(e,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ye(s,"user-mismatch"),r}}/**
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
 */async function uh(e,t,n=!1){const s="signIn",i=await lh(e,s,t),r=await At._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(r.user),r}async function q_(e,t){return uh(mn(e),t)}async function G_(e,t,n){const s=mn(e),i=await ch(s,{returnSecureToken:!0,email:t,password:n}),r=await At._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function J_(e,t,n){return q_(Ot(e),Vn.credential(t,n))}function X_(e,t,n,s){return Ot(e).onIdTokenChanged(t,n,s)}function Y_(e,t,n){return Ot(e).beforeAuthStateChanged(t,n)}function Q_(e,t,n,s){return Ot(e).onAuthStateChanged(t,n,s)}function Z_(e){return Ot(e).signOut()}const bi="__sak";/**
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
 */class hh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bi,"1"),this.storage.removeItem(bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ey(){const e=Pe();return ea(e)||qi(e)}const ty=1e3,ny=10;class fh extends hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ey()&&P_(),this.fallbackToPolling=rh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&t(n,i,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);k_()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ny):i()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},ty)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}fh.type="LOCAL";const sy=fh;/**
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
 */class dh extends hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}dh.type="SESSION";const ph=dh;/**
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
 */function iy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const s=new Gi(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await iy(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gi.receivers=[];/**
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
 */function ia(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ry{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=ia("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mt(){return window}function oy(e){mt().location.href=e}/**
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
 */function gh(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function ay(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cy(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ly(){return gh()?self:null}/**
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
 */const mh="firebaseLocalStorageDb",uy=1,Ti="firebaseLocalStorage",_h="fbase_key";class Us{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ji(e,t){return e.transaction([Ti],t?"readwrite":"readonly").objectStore(Ti)}function hy(){const e=indexedDB.deleteDatabase(mh);return new Us(e).toPromise()}function co(){const e=indexedDB.open(mh,uy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Ti,{keyPath:_h})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Ti)?t(s):(s.close(),await hy(),t(await co()))})})}async function Mc(e,t,n){const s=Ji(e,!0).put({[_h]:t,value:n});return new Us(s).toPromise()}async function fy(e,t){const n=Ji(e,!1).get(t),s=await new Us(n).toPromise();return s===void 0?null:s.value}function xc(e,t){const n=Ji(e,!0).delete(t);return new Us(n).toPromise()}const dy=800,py=3;class yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await co(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>py)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gi._getInstance(ly()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ay(),!this.activeServiceWorker)return;this.sender=new ry(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||cy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await co();return await Mc(t,bi,"1"),await xc(t,bi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mc(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>fy(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Ji(i,!1).getAll();return new Us(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yh.type="LOCAL";const gy=yh;/**
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
 */function my(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function _y(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=i=>{const r=gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",my().appendChild(s)})}function yy(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ns(3e4,6e4);/**
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
 */function vh(e,t){return t?It(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ra extends ta{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Pn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Pn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Pn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function vy(e){return uh(e.auth,new ra(e),e.bypassAuthState)}function Ey(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),z_(n,new ra(e),e.bypassAuthState)}async function Iy(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),K_(n,new ra(e),e.bypassAuthState)}/**
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
 */class Eh{constructor(t,n,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vy;case"linkViaPopup":case"linkViaRedirect":return Iy;case"reauthViaPopup":case"reauthViaRedirect":return Ey;default:Ye(this.auth,"internal-error")}}resolve(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wy=new Ns(2e3,1e4);async function by(e,t,n){const s=mn(e);u_(e,t,sa);const i=vh(s,n);return new rn(s,"signInViaPopup",t,i).executeNotNull()}class rn extends Eh{constructor(t,n,s,i,r){super(t,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const t=ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,wy.get())};t()}}rn.currentPopupAction=null;/**
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
 */const Ty="pendingRedirect",hi=new Map;class Ay extends Eh{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=hi.get(this.auth._key());if(!t){try{const s=await Sy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}hi.set(this.auth._key(),t)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sy(e,t){const n=Oy(t),s=Ry(e);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Cy(e,t){hi.set(e._key(),t)}function Ry(e){return It(e._redirectPersistence)}function Oy(e){return ui(Ty,e.config.apiKey,e.name)}async function ky(e,t,n=!1){const s=mn(e),i=vh(s,t),o=await new Ay(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const Py=10*60*1e3;class Ny{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Dy(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!Ih(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Py&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uc(t))}saveEventToCache(t){this.cachedEventUids.add(Uc(t)),this.lastProcessedEventTime=Date.now()}}function Uc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ih({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Dy(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ih(e);default:return!1}}/**
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
 */async function Ly(e,t={}){return Ls(e,"GET","/v1/projects",t)}/**
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
 */const My=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xy=/^https?/;async function Uy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ly(e);for(const n of t)try{if(Fy(n))return}catch{}Ye(e,"unauthorized-domain")}function Fy(e){const t=ao(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xy.test(n))return!1;if(My.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const jy=new Ns(3e4,6e4);function Fc(){const e=mt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function By(e){return new Promise((t,n)=>{var s,i,r;function o(){Fc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fc(),n(gt(e,"network-request-failed"))},timeout:jy.get()})}if(!((i=(s=mt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=mt().gapi)===null||r===void 0)&&r.load)o();else{const a=yy("iframefcb");return mt()[a]=()=>{gapi.load?o():n(gt(e,"network-request-failed"))},_y(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw fi=null,t})}let fi=null;function $y(e){return fi=fi||By(e),fi}/**
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
 */const Hy=new Ns(5e3,15e3),Vy="__/auth/iframe",Wy="emulator/auth/iframe",Ky={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qy(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qo(t,Wy):`https://${e.config.authDomain}/${Vy}`,s={apiKey:t.apiKey,appName:e.name,v:Ps},i=zy.get(e.config.apiHost);i&&(s.eid=i);const r=e._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ks(s).slice(1)}`}async function Gy(e){const t=await $y(e),n=mt().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:qy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ky,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=gt(e,"network-request-failed"),a=mt().setTimeout(()=>{r(o)},Hy.get());function c(){mt().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Jy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xy=500,Yy=600,Qy="_blank",Zy="http://localhost";class jc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ev(e,t,n,s=Xy,i=Yy){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jy),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Pe().toLowerCase();n&&(a=eh(l)?Qy:n),Zu(l)&&(t=t||Zy,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(O_(l)&&a!=="_self")return tv(t||"",a),new jc(null);const f=window.open(t||"",a,u);j(f,e,"popup-blocked");try{f.focus()}catch{}return new jc(f)}function tv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const nv="__/auth/handler",sv="emulator/auth/handler";function Bc(e,t,n,s,i,r){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Ps,eventId:i};if(t instanceof sa){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",em(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(t instanceof xs){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${iv(e)}?${ks(a).slice(1)}`}function iv({config:e}){return e.emulator?Qo(e,sv):`https://${e.authDomain}/${nv}`}/**
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
 */const Ar="webStorageSupport";class rv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ph,this._completeRedirectFn=ky,this._overrideRedirectResult=Cy}async _openPopup(t,n,s,i){var r;Tt((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Bc(t,n,s,ao(),i);return ev(t,o,ia())}async _openRedirect(t,n,s,i){return await this._originValidation(t),oy(Bc(t,n,s,ao(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Tt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await Gy(t),s=new Ny(t);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ar,{type:Ar},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ar];o!==void 0&&n(!!o),Ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return rh()||ea()||qi()}}const ov=rv;var $c="@firebase/auth",Hc="0.21.0";/**
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
 */class av{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cv(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lv(e){xn(new fn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{j(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oh(e)},u=new D_(a,c,l);return f_(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),xn(new fn("auth-internal",t=>{const n=mn(t.getProvider("auth").getImmediate());return(s=>new av(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt($c,Hc,cv(e)),Kt($c,Hc,"esm2017")}/**
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
 */const uv=5*60,hv=Fu("authIdTokenMaxAge")||uv;let Vc=null;const fv=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hv)return;const i=n==null?void 0:n.token;Vc!==i&&(Vc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dv(e=Hu()){const t=Jo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=h_(e,{popupRedirectResolver:ov,persistence:[gy,sy,ph]}),s=Fu("authTokenSyncURL");if(s){const r=fv(s);Y_(n,r,()=>r(n.currentUser)),X_(n,o=>r(o))}const i=Uu("auth");return i&&L_(n,`http://${i}`),n}lv("Browser");var pv="firebase",gv="9.15.0";/**
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
 */Kt(pv,gv,"app");var mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,oa=oa||{},B=mv||self;function Ai(){}function Xi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Fs(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _v(e){return Object.prototype.hasOwnProperty.call(e,Sr)&&e[Sr]||(e[Sr]=++yv)}var Sr="closure_uid_"+(1e9*Math.random()>>>0),yv=0;function vv(e,t,n){return e.call.apply(e.bind,arguments)}function Ev(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Re(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Re=vv:Re=Ev,Re.apply(null,arguments)}function ni(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Te(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Gt(){this.s=this.s,this.o=this.o}var Iv=0;Gt.prototype.s=!1;Gt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Iv!=0)&&_v(this)};Gt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function aa(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Wc(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Xi(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Oe(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var wv=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{B.addEventListener("test",Ai,t),B.removeEventListener("test",Ai,t)}catch{}return e}();function Si(e){return/^[\s\xa0]*$/.test(e)}var Kc=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Cr(e,t){return e<t?-1:e>t?1:0}function Yi(){var e=B.navigator;return e&&(e=e.userAgent)?e:""}function dt(e){return Yi().indexOf(e)!=-1}function ca(e){return ca[" "](e),e}ca[" "]=Ai;function bv(e){var t=Sv;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Tv=dt("Opera"),vs=dt("Trident")||dt("MSIE"),bh=dt("Edge"),lo=bh||vs,Th=dt("Gecko")&&!(Yi().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Av=Yi().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function Ah(){var e=B.document;return e?e.documentMode:void 0}var uo;e:{var Rr="",Or=function(){var e=Yi();if(Th)return/rv:([^\);]+)(\)|;)/.exec(e);if(bh)return/Edge\/([\d\.]+)/.exec(e);if(vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Av)return/WebKit\/(\S+)/.exec(e);if(Tv)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Or&&(Rr=Or?Or[1]:""),vs){var kr=Ah();if(kr!=null&&kr>parseFloat(Rr)){uo=String(kr);break e}}uo=Rr}var Sv={};function Cv(){return bv(function(){let e=0;const t=Kc(String(uo)).split("."),n=Kc("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Cr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Cr(i[2].length==0,r[2].length==0)||Cr(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}B.document&&vs&&Ah();function Es(e,t){if(Oe.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Th){e:{try{ca(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Rv[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Es.X.h.call(this)}}Te(Es,Oe);var Rv={2:"touch",3:"pen",4:"mouse"};Es.prototype.h=function(){Es.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),Ov=0;function kv(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Ov,this.ba=this.ea=!1}function Qi(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function la(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Sh(e){const t={};for(const n in e)t[n]=e[n];return t}const zc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ch(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<zc.length;r++)n=zc[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Zi(e){this.src=e,this.g={},this.h=0}Zi.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=fo(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new kv(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function ho(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=wh(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Qi(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function fo(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var ua="closure_lm_"+(1e6*Math.random()|0),Pr={};function Rh(e,t,n,s,i){if(s&&s.once)return kh(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Rh(e,t[r],n,s,i);return null}return n=da(n),e&&e[js]?e.N(t,n,Fs(s)?!!s.capture:!!s,i):Oh(e,t,n,!1,s,i)}function Oh(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Fs(i)?!!i.capture:!!i,a=fa(e);if(a||(e[ua]=a=new Zi(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Pv(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)wv||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Nh(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Pv(){function e(n){return t.call(e.src,e.listener,n)}const t=Nv;return e}function kh(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)kh(e,t[r],n,s,i);return null}return n=da(n),e&&e[js]?e.O(t,n,Fs(s)?!!s.capture:!!s,i):Oh(e,t,n,!0,s,i)}function Ph(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Ph(e,t[r],n,s,i);else s=Fs(s)?!!s.capture:!!s,n=da(n),e&&e[js]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=fo(r,n,s,i),-1<n&&(Qi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=fa(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fo(t,n,s,i)),(n=-1<e?t[e]:null)&&ha(n))}function ha(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[js])ho(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Nh(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=fa(t))?(ho(n,e),n.h==0&&(n.src=null,t[ua]=null)):Qi(e)}}}function Nh(e){return e in Pr?Pr[e]:Pr[e]="on"+e}function Nv(e,t){if(e.ba)e=!0;else{t=new Es(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&ha(e),e=n.call(s,t)}return e}function fa(e){return e=e[ua],e instanceof Zi?e:null}var Nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(e){return typeof e=="function"?e:(e[Nr]||(e[Nr]=function(t){return e.handleEvent(t)}),e[Nr])}function we(){Gt.call(this),this.i=new Zi(this),this.P=this,this.I=null}Te(we,Gt);we.prototype[js]=!0;we.prototype.removeEventListener=function(e,t,n,s){Ph(this,e,t,n,s)};function be(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Oe(t,e);else if(t instanceof Oe)t.target=t.target||e;else{var i=t;t=new Oe(s,e),Ch(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=si(o,s,!0,t)&&i}if(o=t.g=e,i=si(o,s,!0,t)&&i,i=si(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=si(o,s,!1,t)&&i}we.prototype.M=function(){if(we.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Qi(n[s]);delete e.g[t],e.h--}}this.I=null};we.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};we.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function si(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ho(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var pa=B.JSON.stringify;function Dv(){var e=Mh;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Lv{constructor(){this.h=this.g=null}add(t,n){const s=Dh.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Dh=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Mv,e=>e.reset());class Mv{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xv(e){B.setTimeout(()=>{throw e},0)}function Lh(e,t){po||Uv(),go||(po(),go=!0),Mh.add(e,t)}var po;function Uv(){var e=B.Promise.resolve(void 0);po=function(){e.then(Fv)}}var go=!1,Mh=new Lv;function Fv(){for(var e;e=Dv();){try{e.h.call(e.g)}catch(n){xv(n)}var t=Dh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}go=!1}function er(e,t){we.call(this),this.h=e||1,this.g=t||B,this.j=Re(this.lb,this),this.l=Date.now()}Te(er,we);D=er.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),be(this,"tick"),this.ca&&(ga(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ga(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}D.M=function(){er.X.M.call(this),ga(this),delete this.g};function ma(e,t,n){if(typeof e=="function")n&&(e=Re(e,n));else if(e&&typeof e.handleEvent=="function")e=Re(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:B.setTimeout(e,t||0)}function xh(e){e.g=ma(()=>{e.g=null,e.i&&(e.i=!1,xh(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class jv extends Gt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:xh(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(e){Gt.call(this),this.h=e,this.g={}}Te(Is,Gt);var qc=[];function Uh(e,t,n,s){Array.isArray(n)||(n&&(qc[0]=n.toString()),n=qc);for(var i=0;i<n.length;i++){var r=Rh(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Fh(e){la(e.g,function(t,n){this.g.hasOwnProperty(n)&&ha(t)},e),e.g={}}Is.prototype.M=function(){Is.X.M.call(this),Fh(this)};Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tr(){this.g=!0}tr.prototype.Aa=function(){this.g=!1};function Bv(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function $v(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function An(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Vv(e,n)+(s?" "+s:"")})}function Hv(e,t){e.info(function(){return"TIMEOUT: "+t})}tr.prototype.info=function(){};function Vv(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pa(n)}catch{return t}}var Wn={},Gc=null;function _a(){return Gc=Gc||new we}Wn.Pa="serverreachability";function jh(e){Oe.call(this,Wn.Pa,e)}Te(jh,Oe);function ws(e){const t=_a();be(t,new jh(t))}Wn.STAT_EVENT="statevent";function Bh(e,t){Oe.call(this,Wn.STAT_EVENT,e),this.stat=t}Te(Bh,Oe);function Me(e){const t=_a();be(t,new Bh(t,e))}Wn.Qa="timingevent";function $h(e,t){Oe.call(this,Wn.Qa,e),this.size=t}Te($h,Oe);function Bs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){e()},t)}var ya={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function va(){}va.prototype.h=null;function Jc(e){return e.h||(e.h=e.i())}function Kv(){}var $s={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ea(){Oe.call(this,"d")}Te(Ea,Oe);function Ia(){Oe.call(this,"c")}Te(Ia,Oe);var mo;function nr(){}Te(nr,va);nr.prototype.g=function(){return new XMLHttpRequest};nr.prototype.i=function(){return{}};mo=new nr;function Hs(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Is(this),this.O=zv,e=lo?125:void 0,this.T=new er(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Hh}function Hh(){this.i=null,this.g="",this.h=!1}var zv=45e3,_o={},Ci={};D=Hs.prototype;D.setTimeout=function(e){this.O=e};function yo(e,t,n){e.K=1,e.v=ir(St(t)),e.s=n,e.P=!0,Vh(e,null)}function Vh(e,t){e.F=Date.now(),Vs(e),e.A=St(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Yh(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Hh,e.g=vf(e.l,n?t:null,!e.s),0<e.N&&(e.L=new jv(Re(e.La,e,e.g),e.N)),Uh(e.S,e.g,"readystatechange",e.ib),t=e.H?Sh(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ws(),Bv(e.j,e.u,e.A,e.m,e.U,e.s)}D.ib=function(e){e=e.target;const t=this.L;t&&wt(e)==3?t.l():this.La(e)};D.La=function(e){try{if(e==this.g)e:{const u=wt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||lo||this.g&&(this.h.h||this.g.fa()||Zc(this.g)))){this.I||u!=4||t==7||(t==8||0>=f?ws(3):ws(2)),sr(this);var n=this.g.aa();this.Y=n;t:if(Wh(this)){var s=Zc(this.g);e="";var i=s.length,r=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),os(this);var o="";break t}this.h.i=new B.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,$v(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Si(a)){var l=a;break t}}l=null}if(n=l)An(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vo(this,n);else{this.i=!1,this.o=3,Me(12),on(this),os(this);break e}}this.P?(Kh(this,u,o),lo&&this.i&&u==3&&(Uh(this.S,this.T,"tick",this.hb),this.T.start())):(An(this.j,this.m,o,null),vo(this,o)),u==4&&on(this),this.i&&!this.I&&(u==4?gf(this.l,this):(this.i=!1,Vs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),on(this),os(this)}}}catch{}finally{}};function Wh(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Kh(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=qv(e,n),i==Ci){t==4&&(e.o=4,Me(14),s=!1),An(e.j,e.m,null,"[Incomplete Response]");break}else if(i==_o){e.o=4,Me(15),An(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else An(e.j,e.m,i,null),vo(e,i);Wh(e)&&i!=Ci&&i!=_o&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Me(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ra(t),t.K=!0,Me(11))):(An(e.j,e.m,n,"[Invalid Chunked Response]"),on(e),os(e))}D.hb=function(){if(this.g){var e=wt(this.g),t=this.g.fa();this.C<t.length&&(sr(this),Kh(this,e,t),this.i&&e!=4&&Vs(this))}};function qv(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ci:(n=Number(t.substring(n,s)),isNaN(n)?_o:(s+=1,s+n>t.length?Ci:(t=t.substr(s,n),e.C=s+n,t)))}D.cancel=function(){this.I=!0,on(this)};function Vs(e){e.V=Date.now()+e.O,zh(e,e.O)}function zh(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Bs(Re(e.gb,e),t)}function sr(e){e.B&&(B.clearTimeout(e.B),e.B=null)}D.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Hv(this.j,this.A),this.K!=2&&(ws(),Me(17)),on(this),this.o=2,os(this)):zh(this,this.V-e)};function os(e){e.l.G==0||e.I||gf(e.l,e)}function on(e){sr(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ga(e.T),Fh(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vo(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Eo(n.h,e))){if(!e.J&&Eo(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)ki(n),cr(n);else break e;Ca(n),Me(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Bs(Re(n.cb,n),6e3));if(1>=ef(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else an(n,11)}else if((e.J||n.g==e)&&ki(n),!Si(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(wa(r,r.h),r.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,ue(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=yf(s,s.H?s.ka:null,s.V),o.J){tf(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(sr(a),Vs(a)),s.g=o}else df(s);0<n.i.length&&lr(n)}else l[0]!="stop"&&l[0]!="close"||an(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?an(n,7):Sa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ws(4)}catch{}}function Gv(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Xi(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Jv(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Xi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function qh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Jv(e),s=Gv(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Gh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xv(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof hn){this.h=t!==void 0?t:e.h,Ri(this,e.j),this.s=e.s,this.g=e.g,Oi(this,e.m),this.l=e.l,t=e.i;var n=new bs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Xc(this,n),this.o=e.o}else e&&(n=String(e).match(Gh))?(this.h=!!t,Ri(this,n[1]||"",!0),this.s=es(n[2]||""),this.g=es(n[3]||"",!0),Oi(this,n[4]),this.l=es(n[5]||"",!0),Xc(this,n[6]||"",!0),this.o=es(n[7]||"")):(this.h=!!t,this.i=new bs(null,this.h))}hn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ts(t,Yc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ts(t,Yc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ts(n,n.charAt(0)=="/"?Zv:Qv,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ts(n,t0)),e.join("")};function St(e){return new hn(e)}function Ri(e,t,n){e.j=n?es(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Oi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Xc(e,t,n){t instanceof bs?(e.i=t,n0(e.i,e.h)):(n||(t=ts(t,e0)),e.i=new bs(t,e.h))}function ue(e,t,n){e.i.set(t,n)}function ir(e){return ue(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function es(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ts(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Yv),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yv(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Yc=/[#\/\?@]/g,Qv=/[#\?:]/g,Zv=/[#\?]/g,e0=/[#\?@]/g,t0=/#/g;function bs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&Xv(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}D=bs.prototype;D.add=function(e,t){Jt(this),this.i=null,e=Kn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Jh(e,t){Jt(e),t=Kn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Xh(e,t){return Jt(e),t=Kn(e,t),e.g.has(t)}D.forEach=function(e,t){Jt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};D.oa=function(){Jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};D.W=function(e){Jt(this);let t=[];if(typeof e=="string")Xh(this,e)&&(t=t.concat(this.g.get(Kn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};D.set=function(e,t){return Jt(this),this.i=null,e=Kn(this,e),Xh(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};D.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Yh(e,t,n){Jh(e,t),0<n.length&&(e.i=null,e.g.set(Kn(e,t),aa(n)),e.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Kn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function n0(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Jh(this,s),Yh(this,i,n))},e)),e.j=t}var s0=class{constructor(e,t){this.h=e,this.g=t}};function Qh(e){this.l=e||i0,B.PerformanceNavigationTiming?(e=B.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i0=10;function Zh(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ef(e){return e.h?1:e.g?e.g.size:0}function Eo(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function wa(e,t){e.g?e.g.add(t):e.h=t}function tf(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Qh.prototype.cancel=function(){if(this.i=nf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function nf(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return aa(e.i)}function ba(){}ba.prototype.stringify=function(e){return B.JSON.stringify(e,void 0)};ba.prototype.parse=function(e){return B.JSON.parse(e,void 0)};function r0(){this.g=new ba}function o0(e,t,n){const s=n||"";try{qh(e,function(i,r){let o=i;Fs(i)&&(o=pa(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function a0(e,t){const n=new tr;if(B.Image){const s=new Image;s.onload=ni(ii,n,s,"TestLoadImage: loaded",!0,t),s.onerror=ni(ii,n,s,"TestLoadImage: error",!1,t),s.onabort=ni(ii,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=ni(ii,n,s,"TestLoadImage: timeout",!1,t),B.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ii(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function rr(e){this.l=e.ac||null,this.j=e.jb||!1}Te(rr,va);rr.prototype.g=function(){return new or(this.l,this.j)};rr.prototype.i=function(e){return function(){return e}}({});function or(e,t){we.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ta,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Te(or,we);var Ta=0;D=or.prototype;D.open=function(e,t){if(this.readyState!=Ta)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ts(this)};D.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||B).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=Ta};D.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sf(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function sf(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}D.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ws(this):Ts(this),this.readyState==3&&sf(this)}};D.Va=function(e){this.g&&(this.response=this.responseText=e,Ws(this))};D.Ua=function(e){this.g&&(this.response=e,Ws(this))};D.ga=function(){this.g&&Ws(this)};function Ws(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ts(e)}D.setRequestHeader=function(e,t){this.v.append(e,t)};D.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ts(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var c0=B.JSON.parse;function ge(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rf,this.K=this.L=!1}Te(ge,we);var rf="",l0=/^https?$/i,u0=["POST","PUT"];D=ge.prototype;D.Ka=function(e){this.L=e};D.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mo.g(),this.C=this.u?Jc(this.u):Jc(mo),this.g.onreadystatechange=Re(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Qc(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=B.FormData&&e instanceof B.FormData,!(0<=wh(u0,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cf(this),0<this.B&&((this.K=h0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Re(this.qa,this)):this.A=ma(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Qc(this,r)}};function h0(e){return vs&&Cv()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}D.qa=function(){typeof oa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))};function Qc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,of(e),ar(e)}function of(e){e.D||(e.D=!0,be(e,"complete"),be(e,"error"))}D.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),ar(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ar(this,!0)),ge.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?af(this):this.fb())};D.fb=function(){af(this)};function af(e){if(e.h&&typeof oa<"u"&&(!e.C[1]||wt(e)!=4||e.aa()!=2)){if(e.v&&wt(e)==4)ma(e.Ha,0,e);else if(be(e,"readystatechange"),wt(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Gh)[1]||null;if(!i&&B.self&&B.self.location){var r=B.self.location.protocol;i=r.substr(0,r.length-1)}s=!l0.test(i?i.toLowerCase():"")}n=s}if(n)be(e,"complete"),be(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",of(e)}}finally{ar(e)}}}}function ar(e,t){if(e.g){cf(e);const n=e.g,s=e.C[0]?Ai:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=s}catch{}}}function cf(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(B.clearTimeout(e.A),e.A=null)}function wt(e){return e.g?e.g.readyState:0}D.aa=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),c0(t)}};function Zc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case rf:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lf(e){let t="";return la(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Aa(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=lf(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ue(e,t,n))}function Gn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function uf(e){this.Ca=0,this.i=[],this.j=new tr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,e),this.bb=Gn("retryDelaySeedMs",1e4,e),this.$a=Gn("forwardChannelMaxRetries",2,e),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Qh(e&&e.concurrentRequestLimit),this.Fa=new r0,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=uf.prototype;D.ma=8;D.G=1;function Sa(e){if(hf(e),e.G==3){var t=e.U++,n=St(e.F);ue(n,"SID",e.I),ue(n,"RID",t),ue(n,"TYPE","terminate"),Ks(e,n),t=new Hs(e,e.j,t,void 0),t.K=2,t.v=ir(St(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(t.v.toString(),"")),!n&&B.Image&&(new Image().src=t.v,n=!0),n||(t.g=vf(t.l,null),t.g.da(t.v)),t.F=Date.now(),Vs(t)}_f(e)}function cr(e){e.g&&(Ra(e),e.g.cancel(),e.g=null)}function hf(e){cr(e),e.u&&(B.clearTimeout(e.u),e.u=null),ki(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&B.clearTimeout(e.m),e.m=null)}function lr(e){Zh(e.h)||e.m||(e.m=!0,Lh(e.Ja,e),e.C=0)}function f0(e,t){return ef(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Bs(Re(e.Ja,e,t),mf(e,e.C)),e.C++,!0)}D.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Hs(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Sh(r),Ch(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ff(this,i,t),n=St(this.F),ue(n,"RID",e),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Ks(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(lf(r)))+"&"+t:this.o&&Aa(n,this.o,r)),wa(this.h,i),this.Ya&&ue(n,"TYPE","init"),this.O?(ue(n,"$req",t),ue(n,"SID","null"),i.Z=!0,yo(i,n,null)):yo(i,n,t),this.G=2}}else this.G==3&&(e?el(this,e):this.i.length==0||Zh(this.h)||el(this))};function el(e,t){var n;t?n=t.m:n=e.U++;const s=St(e.F);ue(s,"SID",e.I),ue(s,"RID",n),ue(s,"AID",e.T),Ks(e,s),e.o&&e.s&&Aa(s,e.o,e.s),n=new Hs(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ff(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),wa(e.h,n),yo(n,s,t)}function Ks(e,t){e.ia&&la(e.ia,function(n,s){ue(t,s,n)}),e.l&&qh({},function(n,s){ue(t,s,n)})}function ff(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Re(e.l.Ra,e.l,e):null;e:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{o0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,s}function df(e){e.g||e.u||(e.Z=1,Lh(e.Ia,e),e.A=0)}function Ca(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Bs(Re(e.Ia,e),mf(e,e.A)),e.A++,!0)}D.Ia=function(){if(this.u=null,pf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Bs(Re(this.eb,this),e)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Me(10),cr(this),pf(this))};function Ra(e){e.B!=null&&(B.clearTimeout(e.B),e.B=null)}function pf(e){e.g=new Hs(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=St(e.sa);ue(t,"RID","rpc"),ue(t,"SID",e.I),ue(t,"CI",e.L?"0":"1"),ue(t,"AID",e.T),ue(t,"TYPE","xmlhttp"),Ks(e,t),e.o&&e.s&&Aa(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ir(St(t)),n.s=null,n.P=!0,Vh(n,e)}D.cb=function(){this.v!=null&&(this.v=null,cr(this),Ca(this),Me(19))};function ki(e){e.v!=null&&(B.clearTimeout(e.v),e.v=null)}function gf(e,t){var n=null;if(e.g==t){ki(e),Ra(e),e.g=null;var s=2}else if(Eo(e.h,t))n=t.D,tf(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=_a(),be(s,new $h(s,n)),lr(e)}else df(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&f0(e,t)||s==2&&Ca(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}}function mf(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function an(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Re(e.kb,e);n||(n=new hn("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Ri(n,"https"),ir(n)),a0(n.toString(),s)}else Me(2);e.G=0,e.l&&e.l.va(t),_f(e),hf(e)}D.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function _f(e){if(e.G=0,e.la=[],e.l){const t=nf(e.h);(t.length!=0||e.i.length!=0)&&(Wc(e.la,t),Wc(e.la,e.i),e.h.i.length=0,aa(e.i),e.i.length=0),e.l.ua()}}function yf(e,t,n){var s=n instanceof hn?St(n):new hn(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Oi(s,s.m);else{var i=B.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new hn(null,void 0);s&&Ri(r,s),t&&(r.g=t),i&&Oi(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&ue(s,n,t),ue(s,"VER",e.ma),Ks(e,s),s}function vf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new ge(new rr({jb:!0})):new ge(e.ra),t.Ka(e.H),t}function Ef(){}D=Ef.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Qe(e,t){we.call(this),this.g=new uf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Si(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Si(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new zn(this)}Te(Qe,we);Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Me(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=yf(e,null,e.V),lr(e)};Qe.prototype.close=function(){Sa(this.g)};Qe.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=pa(e),e=n);t.i.push(new s0(t.ab++,e)),t.G==3&&lr(t)};Qe.prototype.M=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,Qe.X.M.call(this)};function If(e){Ea.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Te(If,Ea);function wf(){Ia.call(this),this.status=1}Te(wf,Ia);function zn(e){this.g=e}Te(zn,Ef);zn.prototype.xa=function(){be(this.g,"a")};zn.prototype.wa=function(e){be(this.g,new If(e))};zn.prototype.va=function(e){be(this.g,new wf)};zn.prototype.ua=function(){be(this.g,"b")};Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;ya.NO_ERROR=0;ya.TIMEOUT=8;ya.HTTP_ERROR=6;Wv.COMPLETE="complete";Kv.EventType=$s;$s.OPEN="a";$s.CLOSE="b";$s.ERROR="c";$s.MESSAGE="d";we.prototype.listen=we.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.Oa;ge.prototype.getLastErrorCode=ge.prototype.Ea;ge.prototype.getStatus=ge.prototype.aa;ge.prototype.getResponseJson=ge.prototype.Sa;ge.prototype.getResponseText=ge.prototype.fa;ge.prototype.send=ge.prototype.da;ge.prototype.setWithCredentials=ge.prototype.Ka;const tl="@firebase/firestore";/**
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
 */class Ae{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
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
 */let zs="9.15.0";/**
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
 */const Un=new qo("@firebase/firestore");function Ve(e,...t){if(Un.logLevel<=ne.DEBUG){const n=t.map(ka);Un.debug(`Firestore (${zs}): ${e}`,...n)}}function Oa(e,...t){if(Un.logLevel<=ne.ERROR){const n=t.map(ka);Un.error(`Firestore (${zs}): ${e}`,...n)}}function d0(e,...t){if(Un.logLevel<=ne.WARN){const n=t.map(ka);Un.warn(`Firestore (${zs}): ${e}`,...n)}}function ka(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function Pa(e="Unexpected state"){const t=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+e;throw Oa(t),new Error(t)}function Pi(e,t){e||Pa()}/**
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
 */const We={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ke extends Rt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class bf{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class p0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ae.UNAUTHENTICATED))}shutdown(){}}class g0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class m0{constructor(t){this.t=t,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Nn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Ve("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Ve("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Nn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(Ve("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pi(typeof s.accessToken=="string"),new bf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Pi(t===null||typeof t=="string"),new Ae(t)}}class _0{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Pi(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class y0{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new _0(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class v0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E0{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&Ve("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,Ve("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{Ve("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):Ve("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Pi(typeof n.token=="string"),this.A=n.token,new v0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function I0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class w0{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=I0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function Tf(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class b0{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ni{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ni&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var nl,X;(X=nl||(nl={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";function Dr(){return typeof document<"u"?document:null}class T0{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&Ve("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Na{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Na(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ke(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function A0(e,t){if(Oa("AsyncQueue",`${t}: ${e}`),Tf(e))return new Ke(We.UNAVAILABLE,`${t}: ${e}`);throw e}function S0(e,t,n,s){if(t===!0&&s===!0)throw new Ke(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function C0(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Pa()}function R0(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ke(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=C0(e);throw new Ke(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const sl=new Map;class il{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Ke(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ke(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,S0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Af{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ke(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ke(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new p0;switch(n.type){case"gapi":const s=n.client;return new y0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ke(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=sl.get(t);n&&(Ve("ComponentProvider","Removing Datastore"),sl.delete(t),n.terminate())}(this),Promise.resolve()}}function O0(e,t,n,s={}){var i;const r=(e=R0(e,Af))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&d0("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ae.MOCK_USER;else{o=Xg(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new Ke(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ae(c)}e._authCredentials=new g0(new bf(o,a))}}/**
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
 */class k0{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=w0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Ve("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Ve("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ke(We.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=A0(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}class P0{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new T0(this,"async_queue_retry"),this.Wc=()=>{const n=Dr();n&&Ve("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Dr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Dr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Nn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Tf(t))throw t;Ve("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Oa("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Na.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&Pa()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class N0 extends Af{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new P0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||L0(this),this._firestoreClient.terminate()}}function D0(e,t){const n=typeof e=="object"?e:Hu(),s=typeof e=="string"?e:t||"(default)",i=Jo(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=qg("firestore");r&&O0(i,...r)}return i}function L0(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new b0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new k0(e._authCredentials,e._appCheckCredentials,e._queue,s)}(function(e,t=!0){(function(n){zs=n})(Ps),xn(new fn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new N0(new m0(n.getProvider("auth-internal")),new E0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ke(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Kt(tl,"3.8.0",e),Kt(tl,"3.8.0","esm2017")})();const M0={apiKey:"AIzaSyBH8wU30GdqXR1_zjs9oCNmLoMsY0KqzHc",authDomain:"ease-7f317.firebaseapp.com",projectId:"ease-7f317",storageBucket:"ease-7f317.appspot.com",messagingSenderId:"672496361182",appId:"1:672496361182:web:f2fe928fc36237d1896c4f",measurementId:"G-YPCEGS2713"},Sf=$u(M0);D0(Sf);const In=dv(Sf),Da=mg("authStore",{state:()=>({user:{}}),actions:{init(){Q_(In,e=>{e?this.user={id:e.uid,email:e.email,photo:e.photoURL,name:e.displayName,creationTime:e.metadata.creationTime}:console.log("sign out")})},registerNewUser(e){G_(In,e.email,e.password).then(t=>{t.user}).catch(t=>{console.log(t.message)})},signInEmailUser(e){J_(In,credentials.email,credentials.password).then(t=>{const n=t.user;console.log(n)}).catch(t=>{console.log(err.message)})},signOutUser(){Z_(In).then(()=>{}).catch(e=>{})},demo(){W_(In).then(()=>{}).catch(e=>{console.log(e.message)})},signInGoogle(){const e=new ft;by(In,e).then(t=>{ft.credentialFromResult(t).accessToken;const s=t.user;console.log(s)}).catch(t=>{console.log(t.message)})}}});const x0={class:"app"},U0={class:"main"},F0={__name:"App",setup(e){const t=Da();return $o(()=>t.init()),(n,s)=>{const i=fu("RouterView");return $e(),nt("div",x0,[re("header",null,[Ce(Lg)]),re("main",U0,[Ce(i)])])}}},j0=Rs(F0,[["__scopeId","data-v-81896543"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bn=typeof window<"u";function B0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const te=Object.assign;function Lr(e,t){const n={};for(const s in t){const i=t[s];n[s]=at(i)?i.map(e):e(i)}return n}const as=()=>{},at=Array.isArray,$0=/\/$/,H0=e=>e.replace($0,"");function Mr(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=z0(s??t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function V0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function rl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function W0(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Fn(t.matched[s],n.matched[i])&&Cf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Cf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!K0(e[n],t[n]))return!1;return!0}function K0(e,t){return at(e)?ol(e,t):at(t)?ol(t,e):e===t}function ol(e,t){return at(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function z0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var As;(function(e){e.pop="pop",e.push="push"})(As||(As={}));var cs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(cs||(cs={}));function q0(e){if(!e)if(bn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),H0(e)}const G0=/^[^#]+#/;function J0(e,t){return e.replace(G0,"#")+t}function X0(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ur=()=>({left:window.pageXOffset,top:window.pageYOffset});function Y0(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=X0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function al(e,t){return(history.state?history.state.position-t:-1)+e}const Io=new Map;function Q0(e,t){Io.set(e,t)}function Z0(e){const t=Io.get(e);return Io.delete(e),t}let eE=()=>location.protocol+"//"+location.host;function Rf(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),rl(c,"")}return rl(n,e)+s+i}function tE(e,t,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const g=Rf(e,location),v=n.value,w=t.value;let U=0;if(p){if(n.value=g,t.value=p,o&&o===v){o=null;return}U=w?p.position-w.position:0}else s(g);i.forEach(O=>{O(n.value,v,{delta:U,type:As.pop,direction:U?U>0?cs.forward:cs.back:cs.unknown})})};function c(){o=n.value}function l(p){i.push(p);const g=()=>{const v=i.indexOf(p);v>-1&&i.splice(v,1)};return r.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:ur()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function cl(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?ur():null}}function nE(e){const{history:t,location:n}=window,s={value:Rf(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:eE()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=te({},t.state,cl(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=te({},i.value,t.state,{forward:c,scroll:ur()});r(u.current,u,!0);const f=te({},cl(s.value,c,null),{position:u.position+1},l);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function sE(e){e=q0(e);const t=nE(e),n=tE(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:e,go:s,createHref:J0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function iE(e){return typeof e=="string"||e&&typeof e=="object"}function Of(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},kf=Symbol("");var ll;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ll||(ll={}));function jn(e,t){return te(new Error,{type:e,[kf]:!0},t)}function yt(e,t){return e instanceof Error&&kf in e&&(t==null||!!(e.type&t))}const ul="[^/]+?",rE={sensitive:!1,strict:!1,start:!0,end:!0},oE=/[.+*?^${}()[\]/\\]/g;function aE(e,t){const n=te({},rE,t),s=[];let i=n.start?"^":"";const r=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(oE,"\\$&"),g+=40;else if(p.type===1){const{value:v,repeatable:w,optional:U,regexp:O}=p;r.push({name:v,repeatable:w,optional:U});const F=O||ul;if(F!==ul){g+=10;try{new RegExp(`(${F})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${v}" (${F}): `+W.message)}}let P=w?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;f||(P=U&&l.length<2?`(?:/${P})`:"/"+P),U&&(P+="?"),i+=P,g+=20,U&&(g+=-8),w&&(g+=-20),F===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",v=r[p-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:w,optional:U}=g,O=v in l?l[v]:"";if(at(O)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const F=at(O)?O.join("/"):O;if(!F)if(U)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function cE(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function lE(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=cE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(hl(s))return 1;if(hl(i))return-1}return i.length-s.length}function hl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const uE={type:0,value:""},hE=/[a-zA-Z0-9_]/;function fE(e){if(!e)return[[]];if(e==="/")return[[uE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function f(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:hE.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function dE(e,t,n){const s=aE(fE(e.path),n),i=te(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function pE(e,t){const n=[],s=new Map;t=pl({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function r(u,f,p){const g=!p,v=gE(u);v.aliasOf=p&&p.record;const w=pl(t,u),U=[v];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of P)U.push(te({},v,{components:p?p.record.components:v.components,path:W,aliasOf:p?p.record:v}))}let O,F;for(const P of U){const{path:W}=P;if(f&&W[0]!=="/"){const z=f.record.path,oe=z[z.length-1]==="/"?"":"/";P.path=f.record.path+(W&&oe+W)}if(O=dE(P,f,w),p?p.alias.push(O):(F=F||O,F!==O&&F.alias.push(O),g&&u.name&&!dl(O)&&o(u.name)),v.children){const z=v.children;for(let oe=0;oe<z.length;oe++)r(z[oe],O,p&&p.children[oe])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return F?()=>{o(F)}:as}function o(u){if(Of(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&lE(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Pf(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!dl(u)&&s.set(u.record.name,u)}function l(u,f){let p,g={},v,w;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw jn(1,{location:u});w=p.record.name,g=te(fl(f.params,p.keys.filter(F=>!F.optional).map(F=>F.name)),u.params&&fl(u.params,p.keys.map(F=>F.name))),v=p.stringify(g)}else if("path"in u)v=u.path,p=n.find(F=>F.re.test(v)),p&&(g=p.parse(v),w=p.record.name);else{if(p=f.name?s.get(f.name):n.find(F=>F.re.test(f.path)),!p)throw jn(1,{location:u,currentLocation:f});w=p.record.name,g=te({},f.params,u.params),v=p.stringify(g)}const U=[];let O=p;for(;O;)U.unshift(O.record),O=O.parent;return{name:w,path:v,params:g,matched:U,meta:_E(U)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function fl(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function gE(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:mE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function mE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function dl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _E(e){return e.reduce((t,n)=>te(t,n.meta),{})}function pl(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Pf(e,t){return t.children.some(n=>n===e||Pf(e,n))}const Nf=/#/g,yE=/&/g,vE=/\//g,EE=/=/g,IE=/\?/g,Df=/\+/g,wE=/%5B/g,bE=/%5D/g,Lf=/%5E/g,TE=/%60/g,Mf=/%7B/g,AE=/%7C/g,xf=/%7D/g,SE=/%20/g;function La(e){return encodeURI(""+e).replace(AE,"|").replace(wE,"[").replace(bE,"]")}function CE(e){return La(e).replace(Mf,"{").replace(xf,"}").replace(Lf,"^")}function wo(e){return La(e).replace(Df,"%2B").replace(SE,"+").replace(Nf,"%23").replace(yE,"%26").replace(TE,"`").replace(Mf,"{").replace(xf,"}").replace(Lf,"^")}function RE(e){return wo(e).replace(EE,"%3D")}function OE(e){return La(e).replace(Nf,"%23").replace(IE,"%3F")}function kE(e){return e==null?"":OE(e).replace(vE,"%2F")}function Di(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function PE(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Df," "),o=r.indexOf("="),a=Di(o<0?r:r.slice(0,o)),c=o<0?null:Di(r.slice(o+1));if(a in t){let l=t[a];at(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function gl(e){let t="";for(let n in e){const s=e[n];if(n=RE(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(at(s)?s.map(r=>r&&wo(r)):[s&&wo(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function NE(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=at(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const DE=Symbol(""),ml=Symbol(""),Ma=Symbol(""),Uf=Symbol(""),bo=Symbol("");function Jn(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Mt(e,t,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(jn(4,{from:n,to:t})):f instanceof Error?a(f):iE(f)?a(jn(2,{from:t,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},l=e.call(s&&s.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function xr(e,t,n,s){const i=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(LE(a)){const l=(a.__vccOpts||a)[t];l&&i.push(Mt(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=B0(l)?l.default:l;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Mt(p,n,s,r,o)()}))}}return i}function LE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _l(e){const t=pt(Ma),n=pt(Uf),s=Le(()=>t.resolve(He(e.to))),i=Le(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Fn.bind(null,u));if(p>-1)return p;const g=yl(c[l-2]);return l>1&&yl(u)===g&&f[f.length-1].path!==g?f.findIndex(Fn.bind(null,c[l-2])):p}),r=Le(()=>i.value>-1&&FE(n.params,s.value.params)),o=Le(()=>i.value>-1&&i.value===n.matched.length-1&&Cf(n.params,s.value.params));function a(c={}){return UE(c)?t[He(e.replace)?"replace":"push"](He(e.to)).catch(as):Promise.resolve()}return{route:s,href:Le(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const ME=au({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_l,setup(e,{slots:t}){const n=gn(_l(e)),{options:s}=pt(Ma),i=Le(()=>({[vl(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vl(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Ru("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),xE=ME;function UE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function FE(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!at(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function yl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const vl=(e,t,n)=>e??t??n,jE=au({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=pt(bo),i=Le(()=>e.route||s.value),r=pt(ml,0),o=Le(()=>{let l=He(r);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Le(()=>i.value.matched[o.value]);oi(ml,Le(()=>o.value+1)),oi(DE,a),oi(bo,i);const c=jt();return On(()=>[c.value,a.value,e.name],([l,u,f],[p,g,v])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Fn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return El(n.default,{Component:p,route:l});const g=f.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,U=Ru(p,te({},v,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return El(n.default,{Component:U,route:l})||U}}});function El(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const BE=jE;function $E(e){const t=pE(e.routes,e),n=e.parseQuery||PE,s=e.stringifyQuery||gl,i=e.history,r=Jn(),o=Jn(),a=Jn(),c=Td(Nt);let l=Nt;bn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lr.bind(null,y=>""+y),f=Lr.bind(null,kE),p=Lr.bind(null,Di);function g(y,R){let S,L;return Of(y)?(S=t.getRecordMatcher(y),L=R):L=y,t.addRoute(L,S)}function v(y){const R=t.getRecordMatcher(y);R&&t.removeRoute(R)}function w(){return t.getRoutes().map(y=>y.record)}function U(y){return!!t.getRecordMatcher(y)}function O(y,R){if(R=te({},R||c.value),typeof y=="string"){const h=Mr(n,y,R.path),d=t.resolve({path:h.path},R),m=i.createHref(h.fullPath);return te(h,d,{params:p(d.params),hash:Di(h.hash),redirectedFrom:void 0,href:m})}let S;if("path"in y)S=te({},y,{path:Mr(n,y.path,R.path).path});else{const h=te({},y.params);for(const d in h)h[d]==null&&delete h[d];S=te({},y,{params:f(y.params)}),R.params=f(R.params)}const L=t.resolve(S,R),Q=y.hash||"";L.params=u(p(L.params));const fe=V0(s,te({},y,{hash:CE(Q),path:L.path})),q=i.createHref(fe);return te({fullPath:fe,hash:Q,query:s===gl?NE(y.query):y.query||{}},L,{redirectedFrom:void 0,href:q})}function F(y){return typeof y=="string"?Mr(n,y,c.value.path):te({},y)}function P(y,R){if(l!==y)return jn(8,{from:R,to:y})}function W(y){return K(y)}function z(y){return W(te(F(y),{replace:!0}))}function oe(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:S}=R;let L=typeof S=="function"?S(y):S;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=F(L):{path:L},L.params={}),te({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function K(y,R){const S=l=O(y),L=c.value,Q=y.state,fe=y.force,q=y.replace===!0,h=oe(S);if(h)return K(te(F(h),{state:typeof h=="object"?te({},Q,h.state):Q,force:fe,replace:q}),R||S);const d=S;d.redirectedFrom=R;let m;return!fe&&W0(s,L,S)&&(m=jn(16,{to:d,from:L}),Xt(L,L,!0,!1)),(m?Promise.resolve(m):J(d,L)).catch(_=>yt(_)?yt(_,2)?_:Ze(_):ae(_,d,L)).then(_=>{if(_){if(yt(_,2))return K(te({replace:q},F(_.to),{state:typeof _.to=="object"?te({},Q,_.to.state):Q,force:fe}),R||d)}else _=de(d,L,!0,q,Q);return Y(d,L,_),_})}function k(y,R){const S=P(y,R);return S?Promise.reject(S):Promise.resolve()}function J(y,R){let S;const[L,Q,fe]=HE(y,R);S=xr(L.reverse(),"beforeRouteLeave",y,R);for(const h of L)h.leaveGuards.forEach(d=>{S.push(Mt(d,y,R))});const q=k.bind(null,y,R);return S.push(q),wn(S).then(()=>{S=[];for(const h of r.list())S.push(Mt(h,y,R));return S.push(q),wn(S)}).then(()=>{S=xr(Q,"beforeRouteUpdate",y,R);for(const h of Q)h.updateGuards.forEach(d=>{S.push(Mt(d,y,R))});return S.push(q),wn(S)}).then(()=>{S=[];for(const h of y.matched)if(h.beforeEnter&&!R.matched.includes(h))if(at(h.beforeEnter))for(const d of h.beforeEnter)S.push(Mt(d,y,R));else S.push(Mt(h.beforeEnter,y,R));return S.push(q),wn(S)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),S=xr(fe,"beforeRouteEnter",y,R),S.push(q),wn(S))).then(()=>{S=[];for(const h of o.list())S.push(Mt(h,y,R));return S.push(q),wn(S)}).catch(h=>yt(h,8)?h:Promise.reject(h))}function Y(y,R,S){for(const L of a.list())L(y,R,S)}function de(y,R,S,L,Q){const fe=P(y,R);if(fe)return fe;const q=R===Nt,h=bn?history.state:{};S&&(L||q?i.replace(y.fullPath,te({scroll:q&&h&&h.scroll},Q)):i.push(y.fullPath,Q)),c.value=y,Xt(y,R,S,q),Ze()}let ve;function Fe(){ve||(ve=i.listen((y,R,S)=>{if(!qs.listening)return;const L=O(y),Q=oe(L);if(Q){K(te(Q,{replace:!0}),L).catch(as);return}l=L;const fe=c.value;bn&&Q0(al(fe.fullPath,S.delta),ur()),J(L,fe).catch(q=>yt(q,12)?q:yt(q,2)?(K(q.to,L).then(h=>{yt(h,20)&&!S.delta&&S.type===As.pop&&i.go(-1,!1)}).catch(as),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ae(q,L,fe))).then(q=>{q=q||de(L,fe,!1),q&&(S.delta&&!yt(q,8)?i.go(-S.delta,!1):S.type===As.pop&&yt(q,20)&&i.go(-1,!1)),Y(L,fe,q)}).catch(as)}))}let Ne=Jn(),Ee=Jn(),me;function ae(y,R,S){Ze(y);const L=Ee.list();return L.length?L.forEach(Q=>Q(y,R,S)):console.error(y),Promise.reject(y)}function se(){return me&&c.value!==Nt?Promise.resolve():new Promise((y,R)=>{Ne.add([y,R])})}function Ze(y){return me||(me=!y,Fe(),Ne.list().forEach(([R,S])=>y?S(y):R()),Ne.reset()),y}function Xt(y,R,S,L){const{scrollBehavior:Q}=e;if(!bn||!Q)return Promise.resolve();const fe=!S&&Z0(al(y.fullPath,0))||(L||!S)&&history.state&&history.state.scroll||null;return jo().then(()=>Q(y,R,fe)).then(q=>q&&Y0(q)).catch(q=>ae(q,y,R))}const et=y=>i.go(y);let xe;const yn=new Set,qs={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:U,getRoutes:w,resolve:O,options:e,push:W,replace:z,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ee.add,isReady:se,install(y){const R=this;y.component("RouterLink",xE),y.component("RouterView",BE),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>He(c)}),bn&&!xe&&c.value===Nt&&(xe=!0,W(i.location).catch(Q=>{}));const S={};for(const Q in Nt)S[Q]=Le(()=>c.value[Q]);y.provide(Ma,R),y.provide(Uf,gn(S)),y.provide(bo,c);const L=y.unmount;yn.add(y),y.unmount=function(){yn.delete(y),yn.size<1&&(l=Nt,ve&&ve(),ve=null,c.value=Nt,xe=!1,me=!1),L()}}};return qs}function wn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function HE(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(l=>Fn(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Fn(l,c))||i.push(c))}return[n,s,i]}const VE={};function WE(e,t){return $e(),nt("p",null,"Testing")}const KE=Rs(VE,[["render",WE]]),zE="/assets/annie-spratt-1-e7fa5dd0.jpg";const _n=e=>(eu("data-v-c560c6e6"),e=e(),tu(),e),qE=["onSubmit"],GE=_n(()=>re("div",{class:"form-design"},[re("img",{src:zE})],-1)),JE={class:"form-input-container"},XE={class:"form-input-grid"},YE=["type","placeholder"],QE=_n(()=>re("input",{class:"form-submit-btn btns",type:"submit",value:"SUBMIT"},null,-1)),ZE={key:0},eI=_n(()=>re("p",null,"Already have an account ",-1)),tI={key:1},nI=_n(()=>re("p",null,"Create a new account",-1)),sI=_n(()=>re("button",{class:"google-btn btns"},[re("i",{class:"fab fa-google"}),Ss(" Google ")],-1)),iI=_n(()=>re("i",{class:"fas fa-person"},null,-1)),rI=_n(()=>re("div",null,null,-1)),oI={__name:"Form",props:{formDetails:{type:Array,required:!0}},setup(e){const t=Da(),n=jt(!0),s=Le(()=>n.value?"Sign Up":"Sign In"),i=gn({firstname:"",lastname:"",password:"",confirmPass:""});Le(()=>i.firstname+i.lastname);const r=()=>{n&&t.registerNewUser(),t.signInEmailuser()};return(o,a)=>($e(),nt("form",{class:"form-container",onSubmit:rg(r,["prevent"])},[GE,re("div",JE,[re("header",null,[re("h1",null,Ur(He(s)),1)]),re("div",XE,[($e(!0),nt(Ge,null,du(e.formDetails,c=>($e(),nt("div",null,[re("label",null,Ur(c.label),1),($e(),nt("input",{key:c.label,class:"form-inputs",type:c.type,placeholder:c.placeholder},null,8,YE))]))),256)),QE,n.value?($e(),nt("span",ZE,[eI,re("p",{onClick:a[0]||(a[0]=c=>n.value=!n.value)}," Sign in ? ")])):_i("",!0),n.value?_i("",!0):($e(),nt("span",tI,[nI,re("p",{onClick:a[1]||(a[1]=c=>n.value=!n.value)}," Sign up ? ")]))]),re("section",{class:"auth-btns",onClick:a[3]||(a[3]=(...c)=>He(t).signInGoogle&&He(t).signInGoogle(...c))},[sI,re("button",{class:"demo-btn btns",onClick:a[2]||(a[2]=(...c)=>He(t).demo&&He(t).demo(...c))},[iI,Ss(" Demo ")])]),rI])],40,qE))}},aI=Rs(oI,[["__scopeId","data-v-c560c6e6"]]);const cI={__name:"Authpage",setup(e){const t=Da(),n=[{label:"FIRST NAME",type:"text",placeholder:"John"},{label:"LAST NAME",type:"text",placeholder:"Doe"},{label:"PASSWORD",type:"password",placeholder:"eg - 8*jfaVnci"},{label:"CONFIRM PASSWORD",type:"password",placeholder:"eg - 8*jfaVnci"}];return(s,i)=>He(t).user.id?($e(),bu(aI,{key:0,formDetails:n})):_i("",!0)}},lI=Rs(cI,[["__scopeId","data-v-05f0c1cd"]]),uI=[{path:"/",name:"home",component:KE},{path:"/auth",name:"auth",component:lI}],hI=$E({history:sE("/"),routes:uI}),xa=cg(j0),fI=hg();xa.use(fI);xa.use(hI);xa.mount("#app");
