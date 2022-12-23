(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Co(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Ro(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=ye(s)?Hf(s):Ro(s);if(i)for(const r in i)t[r]=i[r]}return t}else{if(ye(e))return e;if(he(e))return e}}const $f=/;(?![^(]*\))/g,jf=/:([^]+)/,Bf=/\/\*.*?\*\//gs;function Hf(e){const t={};return e.replace(Bf,"").split($f).forEach(n=>{if(n){const s=n.split(jf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ko(e){let t="";if(ye(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const s=ko(e[n]);s&&(t+=s+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Wf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vf=Co(Wf);function Ac(e){return!!e||e===""}const Oo=e=>ye(e)?e:e==null?"":W(e)||he(e)&&(e.toString===Oc||!V(e.toString))?JSON.stringify(e,Cc,2):String(e),Cc=(e,t)=>t&&t.__v_isRef?Cc(e,t.value):Rn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Rc(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!W(t)&&!Pc(t)?String(t):t,ce={},Cn=[],rt=()=>{},zf=()=>!1,Kf=/^on[^a-z]/,Mi=e=>Kf.test(e),Po=e=>e.startsWith("onUpdate:"),De=Object.assign,Do=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qf=Object.prototype.hasOwnProperty,ee=(e,t)=>qf.call(e,t),W=Array.isArray,Rn=e=>xi(e)==="[object Map]",Rc=e=>xi(e)==="[object Set]",V=e=>typeof e=="function",ye=e=>typeof e=="string",No=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",kc=e=>he(e)&&V(e.then)&&V(e.catch),Oc=Object.prototype.toString,xi=e=>Oc.call(e),Gf=e=>xi(e).slice(8,-1),Pc=e=>xi(e)==="[object Object]",Lo=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ai=Co(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ui=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xf=/-(\w)/g,yt=Ui(e=>e.replace(Xf,(t,n)=>n?n.toUpperCase():"")),Jf=/\B([A-Z])/g,Hn=Ui(e=>e.replace(Jf,"-$1").toLowerCase()),Fi=Ui(e=>e.charAt(0).toUpperCase()+e.slice(1)),dr=Ui(e=>e?`on${Fi(e)}`:""),ps=(e,t)=>!Object.is(e,t),pr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},gi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Dc=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let za;const Yf=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let He;class Nc{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}run(t){if(this.active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Lc(e){return new Nc(e)}function Qf(e,t=He){t&&t.active&&t.effects.push(e)}function Mc(){return He}function xc(e){He&&He.cleanups.push(e)}const Mo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Uc=e=>(e.w&qt)>0,Fc=e=>(e.n&qt)>0,Zf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt},ed=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];Uc(i)&&!Fc(i)?i.delete(e):t[n++]=i,i.w&=~qt,i.n&=~qt}t.length=n}},$r=new WeakMap;let ts=0,qt=1;const jr=30;let st;const hn=Symbol(""),Br=Symbol("");class xo{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qf(this,s)}run(){if(!this.active)return this.fn();let t=st,n=Bt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=st,st=this,Bt=!0,qt=1<<++ts,ts<=jr?Zf(this):Ka(this),this.fn()}finally{ts<=jr&&ed(this),qt=1<<--ts,st=this.parent,Bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){st===this?this.deferStop=!0:this.active&&(Ka(this),this.onStop&&this.onStop(),this.active=!1)}}function Ka(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Bt=!0;const $c=[];function Wn(){$c.push(Bt),Bt=!1}function Vn(){const e=$c.pop();Bt=e===void 0?!0:e}function Ke(e,t,n){if(Bt&&st){let s=$r.get(e);s||$r.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=Mo()),jc(i)}}function jc(e,t){let n=!1;ts<=jr?Fc(e)||(e.n|=qt,n=!Uc(e)):n=!e.has(st),n&&(e.add(st),st.deps.push(e))}function St(e,t,n,s,i,r){const o=$r.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&W(e)){const l=Dc(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":W(e)?Lo(n)&&a.push(o.get("length")):(a.push(o.get(hn)),Rn(e)&&a.push(o.get(Br)));break;case"delete":W(e)||(a.push(o.get(hn)),Rn(e)&&a.push(o.get(Br)));break;case"set":Rn(e)&&a.push(o.get(hn));break}if(a.length===1)a[0]&&Hr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Hr(Mo(l))}}function Hr(e,t){const n=W(e)?e:[...e];for(const s of n)s.computed&&qa(s);for(const s of n)s.computed||qa(s)}function qa(e,t){(e!==st||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const td=Co("__proto__,__v_isRef,__isVue"),Bc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(No)),nd=Uo(),sd=Uo(!1,!0),id=Uo(!0),Ga=rd();function rd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=te(this);for(let r=0,o=this.length;r<o;r++)Ke(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wn();const s=te(this)[t].apply(this,n);return Vn(),s}}),e}function Uo(e=!1,t=!1){return function(s,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?wd:Kc:t?zc:Vc).get(s))return s;const o=W(s);if(!e&&o&&ee(Ga,i))return Reflect.get(Ga,i,r);const a=Reflect.get(s,i,r);return(No(i)?Bc.has(i):td(i))||(e||Ke(s,"get",i),t)?a:pe(a)?o&&Lo(i)?a:a.value:he(a)?e?qc(a):yn(a):a}}const od=Hc(),ad=Hc(!0);function Hc(e=!1){return function(n,s,i,r){let o=n[s];if(Ln(o)&&pe(o)&&!pe(i))return!1;if(!e&&(!mi(i)&&!Ln(i)&&(o=te(o),i=te(i)),!W(n)&&pe(o)&&!pe(i)))return o.value=i,!0;const a=W(n)&&Lo(s)?Number(s)<n.length:ee(n,s),l=Reflect.set(n,s,i,r);return n===te(r)&&(a?ps(i,o)&&St(n,"set",s,i):St(n,"add",s,i)),l}}function ld(e,t){const n=ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&St(e,"delete",t,void 0),s}function cd(e,t){const n=Reflect.has(e,t);return(!No(t)||!Bc.has(t))&&Ke(e,"has",t),n}function ud(e){return Ke(e,"iterate",W(e)?"length":hn),Reflect.ownKeys(e)}const Wc={get:nd,set:od,deleteProperty:ld,has:cd,ownKeys:ud},hd={get:id,set(e,t){return!0},deleteProperty(e,t){return!0}},fd=De({},Wc,{get:sd,set:ad}),Fo=e=>e,$i=e=>Reflect.getPrototypeOf(e);function Js(e,t,n=!1,s=!1){e=e.__v_raw;const i=te(e),r=te(t);n||(t!==r&&Ke(i,"get",t),Ke(i,"get",r));const{has:o}=$i(i),a=s?Fo:n?Bo:gs;if(o.call(i,t))return a(e.get(t));if(o.call(i,r))return a(e.get(r));e!==i&&e.get(t)}function Ys(e,t=!1){const n=this.__v_raw,s=te(n),i=te(e);return t||(e!==i&&Ke(s,"has",e),Ke(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Qs(e,t=!1){return e=e.__v_raw,!t&&Ke(te(e),"iterate",hn),Reflect.get(e,"size",e)}function Xa(e){e=te(e);const t=te(this);return $i(t).has.call(t,e)||(t.add(e),St(t,"add",e,e)),this}function Ja(e,t){t=te(t);const n=te(this),{has:s,get:i}=$i(n);let r=s.call(n,e);r||(e=te(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?ps(t,o)&&St(n,"set",e,t):St(n,"add",e,t),this}function Ya(e){const t=te(this),{has:n,get:s}=$i(t);let i=n.call(t,e);i||(e=te(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&St(t,"delete",e,void 0),r}function Qa(){const e=te(this),t=e.size!==0,n=e.clear();return t&&St(e,"clear",void 0,void 0),n}function Zs(e,t){return function(s,i){const r=this,o=r.__v_raw,a=te(o),l=t?Fo:e?Bo:gs;return!e&&Ke(a,"iterate",hn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ei(e,t,n){return function(...s){const i=this.__v_raw,r=te(i),o=Rn(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...s),u=n?Fo:t?Bo:gs;return!t&&Ke(r,"iterate",l?Br:hn),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Pt(e){return function(...t){return e==="delete"?!1:this}}function dd(){const e={get(r){return Js(this,r)},get size(){return Qs(this)},has:Ys,add:Xa,set:Ja,delete:Ya,clear:Qa,forEach:Zs(!1,!1)},t={get(r){return Js(this,r,!1,!0)},get size(){return Qs(this)},has:Ys,add:Xa,set:Ja,delete:Ya,clear:Qa,forEach:Zs(!1,!0)},n={get(r){return Js(this,r,!0)},get size(){return Qs(this,!0)},has(r){return Ys.call(this,r,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:Zs(!0,!1)},s={get(r){return Js(this,r,!0,!0)},get size(){return Qs(this,!0)},has(r){return Ys.call(this,r,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:Zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ei(r,!1,!1),n[r]=ei(r,!0,!1),t[r]=ei(r,!1,!0),s[r]=ei(r,!0,!0)}),[e,n,t,s]}const[pd,gd,md,_d]=dd();function $o(e,t){const n=t?e?_d:md:e?gd:pd;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(ee(n,i)&&i in s?n:s,i,r)}const yd={get:$o(!1,!1)},vd={get:$o(!1,!0)},Ed={get:$o(!0,!1)},Vc=new WeakMap,zc=new WeakMap,Kc=new WeakMap,wd=new WeakMap;function Id(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bd(e){return e.__v_skip||!Object.isExtensible(e)?0:Id(Gf(e))}function yn(e){return Ln(e)?e:jo(e,!1,Wc,yd,Vc)}function Td(e){return jo(e,!1,fd,vd,zc)}function qc(e){return jo(e,!0,hd,Ed,Kc)}function jo(e,t,n,s,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=bd(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function Ht(e){return Ln(e)?Ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Ln(e){return!!(e&&e.__v_isReadonly)}function mi(e){return!!(e&&e.__v_isShallow)}function Gc(e){return Ht(e)||Ln(e)}function te(e){const t=e&&e.__v_raw;return t?te(t):e}function Mn(e){return gi(e,"__v_skip",!0),e}const gs=e=>he(e)?yn(e):e,Bo=e=>he(e)?qc(e):e;function Xc(e){Bt&&st&&(e=te(e),jc(e.dep||(e.dep=Mo())))}function Jc(e,t){e=te(e),e.dep&&Hr(e.dep)}function pe(e){return!!(e&&e.__v_isRef===!0)}function jt(e){return Yc(e,!1)}function Sd(e){return Yc(e,!0)}function Yc(e,t){return pe(e)?e:new Ad(e,t)}class Ad{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:te(t),this._value=n?t:gs(t)}get value(){return Xc(this),this._value}set value(t){const n=this.__v_isShallow||mi(t)||Ln(t);t=n?t:te(t),ps(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:gs(t),Jc(this))}}function be(e){return pe(e)?e.value:e}const Cd={get:(e,t,n)=>be(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Qc(e){return Ht(e)?e:new Proxy(e,Cd)}function Rd(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=Od(e,n);return t}class kd{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Od(e,t,n){const s=e[t];return pe(s)?s:new kd(e,t,n)}var Zc;class Pd{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zc]=!1,this._dirty=!0,this.effect=new xo(t,()=>{this._dirty||(this._dirty=!0,Jc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=te(this);return Xc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zc="__v_isReadonly";function Dd(e,t,n=!1){let s,i;const r=V(e);return r?(s=e,i=rt):(s=e.get,i=e.set),new Pd(s,i,r||!i,n)}function Wt(e,t,n,s){let i;try{i=s?e(...s):e()}catch(r){ji(r,t,n)}return i}function Ye(e,t,n,s){if(V(e)){const r=Wt(e,t,n,s);return r&&kc(r)&&r.catch(o=>{ji(o,t,n)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(Ye(e[r],t,n,s));return i}function ji(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Wt(l,null,10,[e,o,a]);return}}Nd(e,n,i,s)}function Nd(e,t,n,s=!0){console.error(e)}let ms=!1,Wr=!1;const Re=[];let ft=0;const kn=[];let wt=null,sn=0;const eu=Promise.resolve();let Ho=null;function Wo(e){const t=Ho||eu;return e?t.then(this?e.bind(this):e):t}function Ld(e){let t=ft+1,n=Re.length;for(;t<n;){const s=t+n>>>1;_s(Re[s])<e?t=s+1:n=s}return t}function Vo(e){(!Re.length||!Re.includes(e,ms&&e.allowRecurse?ft+1:ft))&&(e.id==null?Re.push(e):Re.splice(Ld(e.id),0,e),tu())}function tu(){!ms&&!Wr&&(Wr=!0,Ho=eu.then(su))}function Md(e){const t=Re.indexOf(e);t>ft&&Re.splice(t,1)}function xd(e){W(e)?kn.push(...e):(!wt||!wt.includes(e,e.allowRecurse?sn+1:sn))&&kn.push(e),tu()}function Za(e,t=ms?ft+1:0){for(;t<Re.length;t++){const n=Re[t];n&&n.pre&&(Re.splice(t,1),t--,n())}}function nu(e){if(kn.length){const t=[...new Set(kn)];if(kn.length=0,wt){wt.push(...t);return}for(wt=t,wt.sort((n,s)=>_s(n)-_s(s)),sn=0;sn<wt.length;sn++)wt[sn]();wt=null,sn=0}}const _s=e=>e.id==null?1/0:e.id,Ud=(e,t)=>{const n=_s(e)-_s(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function su(e){Wr=!1,ms=!0,Re.sort(Ud);const t=rt;try{for(ft=0;ft<Re.length;ft++){const n=Re[ft];n&&n.active!==!1&&Wt(n,null,14)}}finally{ft=0,Re.length=0,nu(),ms=!1,Ho=null,(Re.length||kn.length)&&su()}}function Fd(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ce;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||ce;p&&(i=n.map(g=>ye(g)?g.trim():g)),f&&(i=n.map(Dc))}let a,l=s[a=dr(t)]||s[a=dr(yt(t))];!l&&r&&(l=s[a=dr(Hn(t))]),l&&Ye(l,e,6,i);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ye(c,e,6,i)}}function iu(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!V(e)){const l=c=>{const u=iu(c,t,!0);u&&(a=!0,De(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(he(e)&&s.set(e,null),null):(W(r)?r.forEach(l=>o[l]=null):De(o,r),he(e)&&s.set(e,o),o)}function Bi(e,t){return!e||!Mi(t)?!1:(t=t.slice(2).replace(/Once$/,""),ee(e,t[0].toLowerCase()+t.slice(1))||ee(e,Hn(t))||ee(e,t))}let Je=null,Hi=null;function _i(e){const t=Je;return Je=e,Hi=e&&e.type.__scopeId||null,t}function zo(e){Hi=e}function Ko(){Hi=null}function ru(e,t=Je,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&cl(-1);const r=_i(t);let o;try{o=e(...i)}finally{_i(r),s._d&&cl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function gr(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:g,ctx:v,inheritAttrs:I}=e;let F,k;const $=_i(e);try{if(n.shapeFlag&4){const z=i||s;F=ht(u.call(z,z,f,r,g,p,v)),k=l}else{const z=t;F=ht(z.length>1?z(r,{attrs:l,slots:a,emit:c}):z(r,null)),k=t.props?l:$d(l)}}catch(z){ls.length=0,ji(z,e,1),F=ke(ot)}let P=F;if(k&&I!==!1){const z=Object.keys(k),{shapeFlag:q}=P;z.length&&q&7&&(o&&z.some(Po)&&(k=jd(k,o)),P=Gt(P,k))}return n.dirs&&(P=Gt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),F=P,_i($),F}const $d=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mi(n))&&((t||(t={}))[n]=e[n]);return t},jd=(e,t)=>{const n={};for(const s in e)(!Po(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Bd(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?el(s,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Bi(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?el(s,o,c):!0:!!o;return!1}function el(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!Bi(n,r))return!0}return!1}function Hd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Wd=e=>e.__isSuspense;function Vd(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):xd(e)}function li(e,t){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[e]=t}}function gt(e,t,n=!1){const s=we||Je;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&V(t)?t.call(s.proxy):t}}const ti={};function On(e,t,n){return ou(e,t,n)}function ou(e,t,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ce){const a=we;let l,c=!1,u=!1;if(pe(e)?(l=()=>e.value,c=mi(e)):Ht(e)?(l=()=>e,s=!0):W(e)?(u=!0,c=e.some(P=>Ht(P)||mi(P)),l=()=>e.map(P=>{if(pe(P))return P.value;if(Ht(P))return Sn(P);if(V(P))return Wt(P,a,2)})):V(e)?t?l=()=>Wt(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ye(e,a,3,[p])}:l=rt,t&&s){const P=l;l=()=>Sn(P())}let f,p=P=>{f=k.onStop=()=>{Wt(P,a,4)}},g;if(Es)if(p=rt,t?n&&Ye(t,a,3,[l(),u?[]:void 0,p]):l(),i==="sync"){const P=$p();g=P.__watcherHandles||(P.__watcherHandles=[])}else return rt;let v=u?new Array(e.length).fill(ti):ti;const I=()=>{if(k.active)if(t){const P=k.run();(s||c||(u?P.some((z,q)=>ps(z,v[q])):ps(P,v)))&&(f&&f(),Ye(t,a,3,[P,v===ti?void 0:u&&v[0]===ti?[]:v,p]),v=P)}else k.run()};I.allowRecurse=!!t;let F;i==="sync"?F=I:i==="post"?F=()=>$e(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),F=()=>Vo(I));const k=new xo(l,F);t?n?I():v=k.run():i==="post"?$e(k.run.bind(k),a&&a.suspense):k.run();const $=()=>{k.stop(),a&&a.scope&&Do(a.scope.effects,k)};return g&&g.push($),$}function zd(e,t,n){const s=this.proxy,i=ye(e)?e.includes(".")?au(s,e):()=>s[e]:e.bind(s,s);let r;V(t)?r=t:(r=t.handler,n=t);const o=we;xn(this);const a=ou(i,r.bind(s),n);return o?xn(o):fn(),a}function au(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Sn(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))Sn(e.value,t);else if(W(e))for(let n=0;n<e.length;n++)Sn(e[n],t);else if(Rc(e)||Rn(e))e.forEach(n=>{Sn(n,t)});else if(Pc(e))for(const n in e)Sn(e[n],t);return e}function Kd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qo(()=>{e.isMounted=!0}),fu(()=>{e.isUnmounting=!0}),e}const qe=[Function,Array],qd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},setup(e,{slots:t}){const n=Au(),s=Kd();let i;return()=>{const r=t.default&&cu(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const I of r)if(I.type!==ot){o=I;break}}const a=te(e),{mode:l}=a;if(s.isLeaving)return mr(o);const c=tl(o);if(!c)return mr(o);const u=Vr(c,a,s,n);zr(c,u);const f=n.subTree,p=f&&tl(f);let g=!1;const{getTransitionKey:v}=c.type;if(v){const I=v();i===void 0?i=I:I!==i&&(i=I,g=!0)}if(p&&p.type!==ot&&(!rn(c,p)||g)){const I=Vr(p,a,s,n);if(zr(p,I),l==="out-in")return s.isLeaving=!0,I.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},mr(o);l==="in-out"&&c.type!==ot&&(I.delayLeave=(F,k,$)=>{const P=lu(s,p);P[String(p.key)]=p,F._leaveCb=()=>{k(),F._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=$})}return o}}},Gd=qd;function lu(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Vr(e,t,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:I,onAppear:F,onAfterAppear:k,onAppearCancelled:$}=t,P=String(e.key),z=lu(n,e),q=(O,J)=>{O&&Ye(O,s,9,J)},oe=(O,J)=>{const Q=J[1];q(O,J),W(O)?O.every(de=>de.length<=1)&&Q():O.length<=1&&Q()},K={mode:r,persisted:o,beforeEnter(O){let J=a;if(!n.isMounted)if(i)J=I||a;else return;O._leaveCb&&O._leaveCb(!0);const Q=z[P];Q&&rn(e,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),q(J,[O])},enter(O){let J=l,Q=c,de=u;if(!n.isMounted)if(i)J=F||l,Q=k||c,de=$||u;else return;let ve=!1;const je=O._enterCb=Le=>{ve||(ve=!0,Le?q(de,[O]):q(Q,[O]),K.delayedLeave&&K.delayedLeave(),O._enterCb=void 0)};J?oe(J,[O,je]):je()},leave(O,J){const Q=String(e.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return J();q(f,[O]);let de=!1;const ve=O._leaveCb=je=>{de||(de=!0,J(),je?q(v,[O]):q(g,[O]),O._leaveCb=void 0,z[Q]===e&&delete z[Q])};z[Q]=e,p?oe(p,[O,ve]):ve()},clone(O){return Vr(O,t,n,s)}};return K}function mr(e){if(Wi(e))return e=Gt(e),e.children=null,e}function tl(e){return Wi(e)?e.children?e.children[0]:void 0:e}function zr(e,t){e.shapeFlag&6&&e.component?zr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cu(e,t=!1,n){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ge?(o.patchFlag&128&&i++,s=s.concat(cu(o.children,t,a))):(t||o.type!==ot)&&s.push(a!=null?Gt(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function uu(e){return V(e)?{setup:e,name:e.name}:e}const ci=e=>!!e.type.__asyncLoader,Wi=e=>e.type.__isKeepAlive;function Xd(e,t){hu(e,"a",t)}function Jd(e,t){hu(e,"da",t)}function hu(e,t,n=we){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Vi(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Wi(i.parent.vnode)&&Yd(s,t,n,i),i=i.parent}}function Yd(e,t,n,s){const i=Vi(t,e,s,!0);du(()=>{Do(s[t],i)},n)}function Vi(e,t,n=we,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Wn(),xn(n);const a=Ye(t,n,e,o);return fn(),Vn(),a});return s?i.unshift(r):i.push(r),r}}const kt=e=>(t,n=we)=>(!Es||e==="sp")&&Vi(e,(...s)=>t(...s),n),Qd=kt("bm"),qo=kt("m"),Zd=kt("bu"),ep=kt("u"),fu=kt("bum"),du=kt("um"),tp=kt("sp"),np=kt("rtg"),sp=kt("rtc");function ip(e,t=we){Vi("ec",e,t)}function Qt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Wn(),Ye(l,n,8,[e.el,a,e,t]),Vn())}}const pu="components";function gu(e,t){return op(pu,e,!0,t)||e}const rp=Symbol();function op(e,t,n=!0,s=!1){const i=Je||we;if(i){const r=i.type;if(e===pu){const a=xp(r,!1);if(a&&(a===t||a===yt(t)||a===Fi(yt(t))))return r}const o=nl(i[e]||r[e],t)||nl(i.appContext[e],t);return!o&&s?r:o}}function nl(e,t){return e&&(e[t]||e[yt(t)]||e[Fi(yt(t))])}function ap(e,t,n,s){let i;const r=n&&n[s];if(W(e)||ye(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,r&&r[o])}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=t(e[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Kr=e=>e?Cu(e)?Yo(e)||e.proxy:Kr(e.parent):null,as=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>Go(e),$forceUpdate:e=>e.f||(e.f=()=>Vo(e.update)),$nextTick:e=>e.n||(e.n=Wo.bind(e.proxy)),$watch:e=>zd.bind(e)}),_r=(e,t)=>e!==ce&&!e.__isScriptSetup&&ee(e,t),lp={get({_:e},t){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(_r(s,t))return o[t]=1,s[t];if(i!==ce&&ee(i,t))return o[t]=2,i[t];if((c=e.propsOptions[0])&&ee(c,t))return o[t]=3,r[t];if(n!==ce&&ee(n,t))return o[t]=4,n[t];qr&&(o[t]=0)}}const u=as[t];let f,p;if(u)return t==="$attrs"&&Ke(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ce&&ee(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,ee(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return _r(i,t)?(i[t]=n,!0):s!==ce&&ee(s,t)?(s[t]=n,!0):ee(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==ce&&ee(e,o)||_r(t,o)||(a=r[0])&&ee(a,o)||ee(s,o)||ee(as,o)||ee(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ee(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let qr=!0;function cp(e){const t=Go(e),n=e.proxy,s=e.ctx;qr=!1,t.beforeCreate&&sl(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:v,activated:I,deactivated:F,beforeDestroy:k,beforeUnmount:$,destroyed:P,unmounted:z,render:q,renderTracked:oe,renderTriggered:K,errorCaptured:O,serverPrefetch:J,expose:Q,inheritAttrs:de,components:ve,directives:je,filters:Le}=t;if(c&&up(c,s,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const ie=o[ae];V(ie)&&(s[ae]=ie.bind(n))}if(i){const ae=i.call(n,n);he(ae)&&(e.data=yn(ae))}if(qr=!0,r)for(const ae in r){const ie=r[ae],et=V(ie)?ie.bind(n,n):V(ie.get)?ie.get.bind(n,n):rt,Yt=!V(ie)&&V(ie.set)?ie.set.bind(n):rt,tt=Te({get:et,set:Yt});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Fe=>tt.value=Fe})}if(a)for(const ae in a)mu(a[ae],s,n,ae);if(l){const ae=V(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(ie=>{li(ie,ae[ie])})}u&&sl(u,e,"c");function me(ae,ie){W(ie)?ie.forEach(et=>ae(et.bind(n))):ie&&ae(ie.bind(n))}if(me(Qd,f),me(qo,p),me(Zd,g),me(ep,v),me(Xd,I),me(Jd,F),me(ip,O),me(sp,oe),me(np,K),me(fu,$),me(du,z),me(tp,J),W(Q))if(Q.length){const ae=e.exposed||(e.exposed={});Q.forEach(ie=>{Object.defineProperty(ae,ie,{get:()=>n[ie],set:et=>n[ie]=et})})}else e.exposed||(e.exposed={});q&&e.render===rt&&(e.render=q),de!=null&&(e.inheritAttrs=de),ve&&(e.components=ve),je&&(e.directives=je)}function up(e,t,n=rt,s=!1){W(e)&&(e=Gr(e));for(const i in e){const r=e[i];let o;he(r)?"default"in r?o=gt(r.from||i,r.default,!0):o=gt(r.from||i):o=gt(r),pe(o)&&s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function sl(e,t,n){Ye(W(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function mu(e,t,n,s){const i=s.includes(".")?au(n,s):()=>n[s];if(ye(e)){const r=t[e];V(r)&&On(i,r)}else if(V(e))On(i,e.bind(n));else if(he(e))if(W(e))e.forEach(r=>mu(r,t,n,s));else{const r=V(e.handler)?e.handler.bind(n):t[e.handler];V(r)&&On(i,r,e)}}function Go(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(c=>yi(l,c,o,!0)),yi(l,t,o)),he(t)&&r.set(t,l),l}function yi(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&yi(e,r,n,!0),i&&i.forEach(o=>yi(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=hp[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const hp={data:il,props:tn,emits:tn,methods:tn,computed:tn,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:tn,directives:tn,watch:dp,provide:il,inject:fp};function il(e,t){return t?e?function(){return De(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function fp(e,t){return tn(Gr(e),Gr(t))}function Gr(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function tn(e,t){return e?De(De(Object.create(null),e),t):t}function dp(e,t){if(!e)return t;if(!t)return e;const n=De(Object.create(null),e);for(const s in t)n[s]=Me(e[s],t[s]);return n}function pp(e,t,n,s=!1){const i={},r={};gi(r,Ki,1),e.propsDefaults=Object.create(null),_u(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:Td(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function gp(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=te(i),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Bi(e.emitsOptions,p))continue;const g=t[p];if(l)if(ee(r,p))g!==r[p]&&(r[p]=g,c=!0);else{const v=yt(p);i[v]=Xr(l,a,v,g,e,!1)}else g!==r[p]&&(r[p]=g,c=!0)}}}else{_u(e,t,i,r)&&(c=!0);let u;for(const f in a)(!t||!ee(t,f)&&((u=Hn(f))===f||!ee(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Xr(l,a,f,void 0,e,!0)):delete i[f]);if(r!==a)for(const f in r)(!t||!ee(t,f))&&(delete r[f],c=!0)}c&&St(e,"set","$attrs")}function _u(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(ai(l))continue;const c=t[l];let u;i&&ee(i,u=yt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Bi(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=te(n),c=a||ce;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Xr(i,l,f,c[f],e,!ee(c,f))}}return o}function Xr(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=ee(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&V(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(xn(i),s=c[n]=l.call(null,t),fn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Hn(n))&&(s=!0))}return s}function yu(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!V(e)){const u=f=>{l=!0;const[p,g]=yu(f,t,!0);De(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return he(e)&&s.set(e,Cn),Cn;if(W(r))for(let u=0;u<r.length;u++){const f=yt(r[u]);rl(f)&&(o[f]=ce)}else if(r)for(const u in r){const f=yt(u);if(rl(f)){const p=r[u],g=o[f]=W(p)||V(p)?{type:p}:Object.assign({},p);if(g){const v=ll(Boolean,g.type),I=ll(String,g.type);g[0]=v>-1,g[1]=I<0||v<I,(v>-1||ee(g,"default"))&&a.push(f)}}}const c=[o,a];return he(e)&&s.set(e,c),c}function rl(e){return e[0]!=="$"}function ol(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function al(e,t){return ol(e)===ol(t)}function ll(e,t){return W(t)?t.findIndex(n=>al(n,e)):V(t)&&al(t,e)?0:-1}const vu=e=>e[0]==="_"||e==="$stable",Xo=e=>W(e)?e.map(ht):[ht(e)],mp=(e,t,n)=>{if(t._n)return t;const s=ru((...i)=>Xo(t(...i)),n);return s._c=!1,s},Eu=(e,t,n)=>{const s=e._ctx;for(const i in e){if(vu(i))continue;const r=e[i];if(V(r))t[i]=mp(i,r,s);else if(r!=null){const o=Xo(r);t[i]=()=>o}}},wu=(e,t)=>{const n=Xo(t);e.slots.default=()=>n},_p=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=te(t),gi(t,"_",n)):Eu(t,e.slots={})}else e.slots={},t&&wu(e,t);gi(e.slots,Ki,1)},yp=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=ce;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(De(i,t),!n&&a===1&&delete i._):(r=!t.$stable,Eu(t,i)),o=t}else t&&(wu(e,t),o={default:1});if(r)for(const a in i)!vu(a)&&!(a in o)&&delete i[a]};function Iu(){return{app:null,config:{isNativeTag:zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vp=0;function Ep(e,t){return function(s,i=null){V(s)||(s=Object.assign({},s)),i!=null&&!he(i)&&(i=null);const r=Iu(),o=new Set;let a=!1;const l=r.app={_uid:vp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:jp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...u)):V(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const p=ke(s,i);return p.appContext=r,u&&t?t(p,c):e(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Yo(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Jr(e,t,n,s,i=!1){if(W(e)){e.forEach((p,g)=>Jr(p,t&&(W(t)?t[g]:t),n,s,i));return}if(ci(s)&&!i)return;const r=s.shapeFlag&4?Yo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ce?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ye(c)?(u[c]=null,ee(f,c)&&(f[c]=null)):pe(c)&&(c.value=null)),V(l))Wt(l,a,12,[o,u]);else{const p=ye(l),g=pe(l);if(p||g){const v=()=>{if(e.f){const I=p?ee(f,l)?f[l]:u[l]:l.value;i?W(I)&&Do(I,r):W(I)?I.includes(r)||I.push(r):p?(u[l]=[r],ee(f,l)&&(f[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,ee(f,l)&&(f[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,$e(v,n)):v()}}}const $e=Vd;function wp(e){return Ip(e)}function Ip(e,t){const n=Yf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=rt,insertStaticContent:v}=e,I=(h,d,m,_=null,E=null,T=null,C=!1,b=null,S=!!d.dynamicChildren)=>{if(h===d)return;h&&!rn(h,d)&&(_=A(h),Fe(h,E,T,!0),h=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:x,shapeFlag:D}=d;switch(w){case zi:F(h,d,m,_);break;case ot:k(h,d,m,_);break;case yr:h==null&&$(d,m,_,C);break;case Ge:ve(h,d,m,_,E,T,C,b,S);break;default:D&1?q(h,d,m,_,E,T,C,b,S):D&6?je(h,d,m,_,E,T,C,b,S):(D&64||D&128)&&w.process(h,d,m,_,E,T,C,b,S,Z)}x!=null&&E&&Jr(x,h&&h.ref,T,d||h,!d)},F=(h,d,m,_)=>{if(h==null)s(d.el=a(d.children),m,_);else{const E=d.el=h.el;d.children!==h.children&&c(E,d.children)}},k=(h,d,m,_)=>{h==null?s(d.el=l(d.children||""),m,_):d.el=h.el},$=(h,d,m,_)=>{[h.el,h.anchor]=v(h.children,d,m,_,h.el,h.anchor)},P=({el:h,anchor:d},m,_)=>{let E;for(;h&&h!==d;)E=p(h),s(h,m,_),h=E;s(d,m,_)},z=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),i(h),h=m;i(d)},q=(h,d,m,_,E,T,C,b,S)=>{C=C||d.type==="svg",h==null?oe(d,m,_,E,T,C,b,S):J(h,d,E,T,C,b,S)},oe=(h,d,m,_,E,T,C,b)=>{let S,w;const{type:x,props:D,shapeFlag:U,transition:H,dirs:X}=h;if(S=h.el=o(h.type,T,D&&D.is,D),U&8?u(S,h.children):U&16&&O(h.children,S,null,_,E,T&&x!=="foreignObject",C,b),X&&Qt(h,null,_,"created"),D){for(const re in D)re!=="value"&&!ai(re)&&r(S,re,null,D[re],T,h.children,_,E,R);"value"in D&&r(S,"value",null,D.value),(w=D.onVnodeBeforeMount)&&ut(w,_,h)}K(S,h,h.scopeId,C,_),X&&Qt(h,null,_,"beforeMount");const le=(!E||E&&!E.pendingBranch)&&H&&!H.persisted;le&&H.beforeEnter(S),s(S,d,m),((w=D&&D.onVnodeMounted)||le||X)&&$e(()=>{w&&ut(w,_,h),le&&H.enter(S),X&&Qt(h,null,_,"mounted")},E)},K=(h,d,m,_,E)=>{if(m&&g(h,m),_)for(let T=0;T<_.length;T++)g(h,_[T]);if(E){let T=E.subTree;if(d===T){const C=E.vnode;K(h,C,C.scopeId,C.slotScopeIds,E.parent)}}},O=(h,d,m,_,E,T,C,b,S=0)=>{for(let w=S;w<h.length;w++){const x=h[w]=b?Lt(h[w]):ht(h[w]);I(null,x,d,m,_,E,T,C,b)}},J=(h,d,m,_,E,T,C)=>{const b=d.el=h.el;let{patchFlag:S,dynamicChildren:w,dirs:x}=d;S|=h.patchFlag&16;const D=h.props||ce,U=d.props||ce;let H;m&&Zt(m,!1),(H=U.onVnodeBeforeUpdate)&&ut(H,m,d,h),x&&Qt(d,h,m,"beforeUpdate"),m&&Zt(m,!0);const X=E&&d.type!=="foreignObject";if(w?Q(h.dynamicChildren,w,b,m,_,X,T):C||ie(h,d,b,null,m,_,X,T,!1),S>0){if(S&16)de(b,d,D,U,m,_,E);else if(S&2&&D.class!==U.class&&r(b,"class",null,U.class,E),S&4&&r(b,"style",D.style,U.style,E),S&8){const le=d.dynamicProps;for(let re=0;re<le.length;re++){const _e=le[re],nt=D[_e],wn=U[_e];(wn!==nt||_e==="value")&&r(b,_e,nt,wn,E,h.children,m,_,R)}}S&1&&h.children!==d.children&&u(b,d.children)}else!C&&w==null&&de(b,d,D,U,m,_,E);((H=U.onVnodeUpdated)||x)&&$e(()=>{H&&ut(H,m,d,h),x&&Qt(d,h,m,"updated")},_)},Q=(h,d,m,_,E,T,C)=>{for(let b=0;b<d.length;b++){const S=h[b],w=d[b],x=S.el&&(S.type===Ge||!rn(S,w)||S.shapeFlag&70)?f(S.el):m;I(S,w,x,null,_,E,T,C,!0)}},de=(h,d,m,_,E,T,C)=>{if(m!==_){if(m!==ce)for(const b in m)!ai(b)&&!(b in _)&&r(h,b,m[b],null,C,d.children,E,T,R);for(const b in _){if(ai(b))continue;const S=_[b],w=m[b];S!==w&&b!=="value"&&r(h,b,w,S,C,d.children,E,T,R)}"value"in _&&r(h,"value",m.value,_.value)}},ve=(h,d,m,_,E,T,C,b,S)=>{const w=d.el=h?h.el:a(""),x=d.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:H}=d;H&&(b=b?b.concat(H):H),h==null?(s(w,m,_),s(x,m,_),O(d.children,m,x,E,T,C,b,S)):D>0&&D&64&&U&&h.dynamicChildren?(Q(h.dynamicChildren,U,m,E,T,C,b),(d.key!=null||E&&d===E.subTree)&&bu(h,d,!0)):ie(h,d,m,x,E,T,C,b,S)},je=(h,d,m,_,E,T,C,b,S)=>{d.slotScopeIds=b,h==null?d.shapeFlag&512?E.ctx.activate(d,m,_,C,S):Le(d,m,_,E,T,C,S):Ee(h,d,S)},Le=(h,d,m,_,E,T,C)=>{const b=h.component=Pp(h,_,E);if(Wi(h)&&(b.ctx.renderer=Z),Dp(b),b.asyncDep){if(E&&E.registerDep(b,me),!h.el){const S=b.subTree=ke(ot);k(null,S,d,m)}return}me(b,h,d,m,E,T,C)},Ee=(h,d,m)=>{const _=d.component=h.component;if(Bd(h,d,m))if(_.asyncDep&&!_.asyncResolved){ae(_,d,m);return}else _.next=d,Md(_.update),_.update();else d.el=h.el,_.vnode=d},me=(h,d,m,_,E,T,C)=>{const b=()=>{if(h.isMounted){let{next:x,bu:D,u:U,parent:H,vnode:X}=h,le=x,re;Zt(h,!1),x?(x.el=X.el,ae(h,x,C)):x=X,D&&pr(D),(re=x.props&&x.props.onVnodeBeforeUpdate)&&ut(re,H,x,X),Zt(h,!0);const _e=gr(h),nt=h.subTree;h.subTree=_e,I(nt,_e,f(nt.el),A(nt),h,E,T),x.el=_e.el,le===null&&Hd(h,_e.el),U&&$e(U,E),(re=x.props&&x.props.onVnodeUpdated)&&$e(()=>ut(re,H,x,X),E)}else{let x;const{el:D,props:U}=d,{bm:H,m:X,parent:le}=h,re=ci(d);if(Zt(h,!1),H&&pr(H),!re&&(x=U&&U.onVnodeBeforeMount)&&ut(x,le,d),Zt(h,!0),D&&G){const _e=()=>{h.subTree=gr(h),G(D,h.subTree,h,E,null)};re?d.type.__asyncLoader().then(()=>!h.isUnmounted&&_e()):_e()}else{const _e=h.subTree=gr(h);I(null,_e,m,_,h,E,T),d.el=_e.el}if(X&&$e(X,E),!re&&(x=U&&U.onVnodeMounted)){const _e=d;$e(()=>ut(x,le,_e),E)}(d.shapeFlag&256||le&&ci(le.vnode)&&le.vnode.shapeFlag&256)&&h.a&&$e(h.a,E),h.isMounted=!0,d=m=_=null}},S=h.effect=new xo(b,()=>Vo(w),h.scope),w=h.update=()=>S.run();w.id=h.uid,Zt(h,!0),w()},ae=(h,d,m)=>{d.component=h;const _=h.vnode.props;h.vnode=d,h.next=null,gp(h,d.props,_,m),yp(h,d.children,m),Wn(),Za(),Vn()},ie=(h,d,m,_,E,T,C,b,S=!1)=>{const w=h&&h.children,x=h?h.shapeFlag:0,D=d.children,{patchFlag:U,shapeFlag:H}=d;if(U>0){if(U&128){Yt(w,D,m,_,E,T,C,b,S);return}else if(U&256){et(w,D,m,_,E,T,C,b,S);return}}H&8?(x&16&&R(w,E,T),D!==w&&u(m,D)):x&16?H&16?Yt(w,D,m,_,E,T,C,b,S):R(w,E,T,!0):(x&8&&u(m,""),H&16&&O(D,m,_,E,T,C,b,S))},et=(h,d,m,_,E,T,C,b,S)=>{h=h||Cn,d=d||Cn;const w=h.length,x=d.length,D=Math.min(w,x);let U;for(U=0;U<D;U++){const H=d[U]=S?Lt(d[U]):ht(d[U]);I(h[U],H,m,null,E,T,C,b,S)}w>x?R(h,E,T,!0,!1,D):O(d,m,_,E,T,C,b,S,D)},Yt=(h,d,m,_,E,T,C,b,S)=>{let w=0;const x=d.length;let D=h.length-1,U=x-1;for(;w<=D&&w<=U;){const H=h[w],X=d[w]=S?Lt(d[w]):ht(d[w]);if(rn(H,X))I(H,X,m,null,E,T,C,b,S);else break;w++}for(;w<=D&&w<=U;){const H=h[D],X=d[U]=S?Lt(d[U]):ht(d[U]);if(rn(H,X))I(H,X,m,null,E,T,C,b,S);else break;D--,U--}if(w>D){if(w<=U){const H=U+1,X=H<x?d[H].el:_;for(;w<=U;)I(null,d[w]=S?Lt(d[w]):ht(d[w]),m,X,E,T,C,b,S),w++}}else if(w>U)for(;w<=D;)Fe(h[w],E,T,!0),w++;else{const H=w,X=w,le=new Map;for(w=X;w<=U;w++){const Be=d[w]=S?Lt(d[w]):ht(d[w]);Be.key!=null&&le.set(Be.key,w)}let re,_e=0;const nt=U-X+1;let wn=!1,Ha=0;const Qn=new Array(nt);for(w=0;w<nt;w++)Qn[w]=0;for(w=H;w<=D;w++){const Be=h[w];if(_e>=nt){Fe(Be,E,T,!0);continue}let ct;if(Be.key!=null)ct=le.get(Be.key);else for(re=X;re<=U;re++)if(Qn[re-X]===0&&rn(Be,d[re])){ct=re;break}ct===void 0?Fe(Be,E,T,!0):(Qn[ct-X]=w+1,ct>=Ha?Ha=ct:wn=!0,I(Be,d[ct],m,null,E,T,C,b,S),_e++)}const Wa=wn?bp(Qn):Cn;for(re=Wa.length-1,w=nt-1;w>=0;w--){const Be=X+w,ct=d[Be],Va=Be+1<x?d[Be+1].el:_;Qn[w]===0?I(null,ct,m,Va,E,T,C,b,S):wn&&(re<0||w!==Wa[re]?tt(ct,m,Va,2):re--)}}},tt=(h,d,m,_,E=null)=>{const{el:T,type:C,transition:b,children:S,shapeFlag:w}=h;if(w&6){tt(h.component.subTree,d,m,_);return}if(w&128){h.suspense.move(d,m,_);return}if(w&64){C.move(h,d,m,Z);return}if(C===Ge){s(T,d,m);for(let D=0;D<S.length;D++)tt(S[D],d,m,_);s(h.anchor,d,m);return}if(C===yr){P(h,d,m);return}if(_!==2&&w&1&&b)if(_===0)b.beforeEnter(T),s(T,d,m),$e(()=>b.enter(T),E);else{const{leave:D,delayLeave:U,afterLeave:H}=b,X=()=>s(T,d,m),le=()=>{D(T,()=>{X(),H&&H()})};U?U(T,X,le):le()}else s(T,d,m)},Fe=(h,d,m,_=!1,E=!1)=>{const{type:T,props:C,ref:b,children:S,dynamicChildren:w,shapeFlag:x,patchFlag:D,dirs:U}=h;if(b!=null&&Jr(b,null,m,h,!0),x&256){d.ctx.deactivate(h);return}const H=x&1&&U,X=!ci(h);let le;if(X&&(le=C&&C.onVnodeBeforeUnmount)&&ut(le,d,h),x&6)y(h.component,m,_);else{if(x&128){h.suspense.unmount(m,_);return}H&&Qt(h,null,d,"beforeUnmount"),x&64?h.type.remove(h,d,m,E,Z,_):w&&(T!==Ge||D>0&&D&64)?R(w,d,m,!1,!0):(T===Ge&&D&384||!E&&x&16)&&R(S,d,m),_&&En(h)}(X&&(le=C&&C.onVnodeUnmounted)||H)&&$e(()=>{le&&ut(le,d,h),H&&Qt(h,null,d,"unmounted")},m)},En=h=>{const{type:d,el:m,anchor:_,transition:E}=h;if(d===Ge){Xs(m,_);return}if(d===yr){z(h);return}const T=()=>{i(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:C,delayLeave:b}=E,S=()=>C(m,T);b?b(h.el,T,S):S()}else T()},Xs=(h,d)=>{let m;for(;h!==d;)m=p(h),i(h),h=m;i(d)},y=(h,d,m)=>{const{bum:_,scope:E,update:T,subTree:C,um:b}=h;_&&pr(_),E.stop(),T&&(T.active=!1,Fe(C,h,d,m)),b&&$e(b,d),$e(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},R=(h,d,m,_=!1,E=!1,T=0)=>{for(let C=T;C<h.length;C++)Fe(h[C],d,m,_,E)},A=h=>h.shapeFlag&6?A(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),M=(h,d,m)=>{h==null?d._vnode&&Fe(d._vnode,null,null,!0):I(d._vnode||null,h,d,null,null,null,m),Za(),nu(),d._vnode=h},Z={p:I,um:Fe,m:tt,r:En,mt:Le,mc:O,pc:ie,pbc:Q,n:A,o:e};let fe,G;return t&&([fe,G]=t(Z)),{render:M,hydrate:fe,createApp:Ep(M,fe)}}function Zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function bu(e,t,n=!1){const s=e.children,i=t.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Lt(i[r]),a.el=o.el),n||bu(o,a)),a.type===zi&&(a.el=o.el)}}function bp(e){const t=e.slice(),n=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(i=n[n.length-1],e[i]<c){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const Tp=e=>e.__isTeleport,Ge=Symbol(void 0),zi=Symbol(void 0),ot=Symbol(void 0),yr=Symbol(void 0),ls=[];let it=null;function xe(e=!1){ls.push(it=e?null:[])}function Sp(){ls.pop(),it=ls[ls.length-1]||null}let ys=1;function cl(e){ys+=e}function Tu(e){return e.dynamicChildren=ys>0?it||Cn:null,Sp(),ys>0&&it&&it.push(e),e}function Xe(e,t,n,s,i,r){return Tu(N(e,t,n,s,i,r,!0))}function Yr(e,t,n,s,i){return Tu(ke(e,t,n,s,i,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Ki="__vInternal",Su=({key:e})=>e??null,ui=({ref:e,ref_key:t,ref_for:n})=>e!=null?ye(e)||pe(e)||V(e)?{i:Je,r:e,k:t,f:!!n}:e:null;function N(e,t=null,n=null,s=0,i=null,r=e===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Su(t),ref:t&&ui(t),scopeId:Hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Je};return a?(Jo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),ys>0&&!o&&it&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&it.push(l),l}const ke=Ap;function Ap(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===rp)&&(e=ot),Qr(e)){const a=Gt(e,t,!0);return n&&Jo(a,n),ys>0&&!r&&it&&(a.shapeFlag&6?it[it.indexOf(e)]=a:it.push(a)),a.patchFlag|=-2,a}if(Up(e)&&(e=e.__vccOpts),t){t=Cp(t);let{class:a,style:l}=t;a&&!ye(a)&&(t.class=ko(a)),he(l)&&(Gc(l)&&!W(l)&&(l=De({},l)),t.style=Ro(l))}const o=ye(e)?1:Wd(e)?128:Tp(e)?64:he(e)?4:V(e)?2:0;return N(e,t,n,s,i,o,r,!0)}function Cp(e){return e?Gc(e)||Ki in e?De({},e):e:null}function Gt(e,t,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=e,a=t?Rp(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Su(a),ref:t&&t.ref?n&&i?W(i)?i.concat(ui(t)):[i,ui(t)]:ui(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function vs(e=" ",t=0){return ke(zi,null,e,t)}function an(e="",t=!1){return t?(xe(),Yr(ot,null,e)):ke(ot,null,e)}function ht(e){return e==null||typeof e=="boolean"?ke(ot):W(e)?ke(Ge,null,e.slice()):typeof e=="object"?Lt(e):ke(zi,null,String(e))}function Lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function Jo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Jo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ki in t)?t._ctx=Je:i===3&&Je&&(Je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),s&64?(n=16,t=[vs(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rp(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=ko([t.class,s.class]));else if(i==="style")t.style=Ro([t.style,s.style]);else if(Mi(i)){const r=t[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function ut(e,t,n,s=null){Ye(e,t,7,[n,s])}const kp=Iu();let Op=0;function Pp(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||kp,r={uid:Op++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yu(s,i),emitsOptions:iu(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Fd.bind(null,r),e.ce&&e.ce(r),r}let we=null;const Au=()=>we||Je,xn=e=>{we=e,e.scope.on()},fn=()=>{we&&we.scope.off(),we=null};function Cu(e){return e.vnode.shapeFlag&4}let Es=!1;function Dp(e,t=!1){Es=t;const{props:n,children:s}=e.vnode,i=Cu(e);pp(e,n,i,t),_p(e,s);const r=i?Np(e,t):void 0;return Es=!1,r}function Np(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Mn(new Proxy(e.ctx,lp));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?Mp(e):null;xn(e),Wn();const r=Wt(s,e,0,[e.props,i]);if(Vn(),fn(),kc(r)){if(r.then(fn,fn),t)return r.then(o=>{ul(e,o,t)}).catch(o=>{ji(o,e,0)});e.asyncDep=r}else ul(e,r,t)}else Ru(e,t)}function ul(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=Qc(t)),Ru(e,n)}let hl;function Ru(e,t,n){const s=e.type;if(!e.render){if(!t&&hl&&!s.render){const i=s.template||Go(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=De(De({isCustomElement:r,delimiters:a},o),l);s.render=hl(i,c)}}e.render=s.render||rt}xn(e),Wn(),cp(e),Vn(),fn()}function Lp(e){return new Proxy(e.attrs,{get(t,n){return Ke(e,"get","$attrs"),t[n]}})}function Mp(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Lp(e))},slots:e.slots,emit:e.emit,expose:t}}function Yo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qc(Mn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in as)return as[n](e)},has(t,n){return n in t||n in as}}))}function xp(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Up(e){return V(e)&&"__vccOpts"in e}const Te=(e,t)=>Dd(e,t,Es);function ku(e,t,n){const s=arguments.length;return s===2?he(t)&&!W(t)?Qr(t)?ke(e,null,[t]):ke(e,t):ke(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qr(n)&&(n=[n]),ke(e,t,n))}const Fp=Symbol(""),$p=()=>gt(Fp),jp="3.2.45",Bp="http://www.w3.org/2000/svg",on=typeof document<"u"?document:null,fl=on&&on.createElement("template"),Hp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?on.createElementNS(Bp,e):on.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>on.createTextNode(e),createComment:e=>on.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>on.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{fl.innerHTML=s?`<svg>${e}</svg>`:e;const a=fl.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Wp(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vp(e,t,n){const s=e.style,i=ye(n);if(n&&!i){for(const r in n)Zr(s,r,n[r]);if(t&&!ye(t))for(const r in t)n[r]==null&&Zr(s,r,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const dl=/\s*!important$/;function Zr(e,t,n){if(W(n))n.forEach(s=>Zr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=zp(e,t);dl.test(n)?e.setProperty(Hn(s),n.replace(dl,""),"important"):e[s]=n}}const pl=["Webkit","Moz","ms"],vr={};function zp(e,t){const n=vr[t];if(n)return n;let s=yt(t);if(s!=="filter"&&s in e)return vr[t]=s;s=Fi(s);for(let i=0;i<pl.length;i++){const r=pl[i]+s;if(r in e)return vr[t]=r}return t}const gl="http://www.w3.org/1999/xlink";function Kp(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(gl,t.slice(6,t.length)):e.setAttributeNS(gl,t,n);else{const r=Vf(t);n==null||r&&!Ac(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function qp(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ac(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Gp(e,t,n,s){e.addEventListener(t,n,s)}function Xp(e,t,n,s){e.removeEventListener(t,n,s)}function Jp(e,t,n,s,i=null){const r=e._vei||(e._vei={}),o=r[t];if(s&&o)o.value=s;else{const[a,l]=Yp(t);if(s){const c=r[t]=eg(s,i);Gp(e,a,c,l)}else o&&(Xp(e,a,o,l),r[t]=void 0)}}const ml=/(?:Once|Passive|Capture)$/;function Yp(e){let t;if(ml.test(e)){t={};let s;for(;s=e.match(ml);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Hn(e.slice(2)),t]}let Er=0;const Qp=Promise.resolve(),Zp=()=>Er||(Qp.then(()=>Er=0),Er=Date.now());function eg(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ye(tg(s,n.value),t,5,[s])};return n.value=e,n.attached=Zp(),n}function tg(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const _l=/^on[a-z]/,ng=(e,t,n,s,i=!1,r,o,a,l)=>{t==="class"?Wp(e,s,i):t==="style"?Vp(e,n,s):Mi(t)?Po(t)||Jp(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sg(e,t,s,i))?qp(e,t,s,r,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Kp(e,t,s,i))};function sg(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&_l.test(t)&&V(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_l.test(t)&&ye(n)?!1:t in e}const ig={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gd.props;const rg=["ctrl","shift","alt","meta"],og={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rg.some(n=>e[`${n}Key`]&&!t.includes(n))},ag=(e,t)=>(n,...s)=>{for(let i=0;i<t.length;i++){const r=og[t[i]];if(r&&r(n,t))return}return e(n,...s)},lg=De({patchProp:ng},Hp);let yl;function cg(){return yl||(yl=wp(lg))}const ug=(...e)=>{const t=cg().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=hg(s);if(!i)return;const r=t._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function hg(e){return ye(e)?document.querySelector(e):e}var fg=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Ou;const qi=e=>Ou=e,Pu=Symbol();function eo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var cs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(cs||(cs={}));function dg(){const e=Lc(!0),t=e.run(()=>jt({}));let n=[],s=[];const i=Mn({install(r){qi(i),i._a=r,r.provide(Pu,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!fg?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Du=()=>{};function vl(e,t,n,s=Du){e.push(t);const i=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),s())};return!n&&Mc()&&xc(i),i}function In(e,...t){e.slice().forEach(n=>{n(...t)})}function to(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];eo(i)&&eo(s)&&e.hasOwnProperty(n)&&!pe(s)&&!Ht(s)?e[n]=to(i,s):e[n]=s}return e}const pg=Symbol();function gg(e){return!eo(e)||!e.hasOwnProperty(pg)}const{assign:Mt}=Object;function mg(e){return!!(pe(e)&&e.effect)}function _g(e,t,n,s){const{state:i,actions:r,getters:o}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=i?i():{});const u=Rd(n.state.value[e]);return Mt(u,r,Object.keys(o||{}).reduce((f,p)=>(f[p]=Mn(Te(()=>{qi(n);const g=n._s.get(e);return o[p].call(g,g)})),f),{}))}return l=Nu(e,c,t,n,s,!0),l.$reset=function(){const f=i?i():{};this.$patch(p=>{Mt(p,f)})},l}function Nu(e,t,n={},s,i,r){let o;const a=Mt({actions:{}},n),l={deep:!0};let c,u,f=Mn([]),p=Mn([]),g;const v=s.state.value[e];!r&&!v&&(s.state.value[e]={}),jt({});let I;function F(K){let O;c=u=!1,typeof K=="function"?(K(s.state.value[e]),O={type:cs.patchFunction,storeId:e,events:g}):(to(s.state.value[e],K),O={type:cs.patchObject,payload:K,storeId:e,events:g});const J=I=Symbol();Wo().then(()=>{I===J&&(c=!0)}),u=!0,In(f,O,s.state.value[e])}const k=Du;function $(){o.stop(),f=[],p=[],s._s.delete(e)}function P(K,O){return function(){qi(s);const J=Array.from(arguments),Q=[],de=[];function ve(Ee){Q.push(Ee)}function je(Ee){de.push(Ee)}In(p,{args:J,name:K,store:q,after:ve,onError:je});let Le;try{Le=O.apply(this&&this.$id===e?this:q,J)}catch(Ee){throw In(de,Ee),Ee}return Le instanceof Promise?Le.then(Ee=>(In(Q,Ee),Ee)).catch(Ee=>(In(de,Ee),Promise.reject(Ee))):(In(Q,Le),Le)}}const z={_p:s,$id:e,$onAction:vl.bind(null,p),$patch:F,$reset:k,$subscribe(K,O={}){const J=vl(f,K,O.detached,()=>Q()),Q=o.run(()=>On(()=>s.state.value[e],de=>{(O.flush==="sync"?u:c)&&K({storeId:e,type:cs.direct,events:g},de)},Mt({},l,O)));return J},$dispose:$},q=yn(z);s._s.set(e,q);const oe=s._e.run(()=>(o=Lc(),o.run(()=>t())));for(const K in oe){const O=oe[K];if(pe(O)&&!mg(O)||Ht(O))r||(v&&gg(O)&&(pe(O)?O.value=v[K]:to(O,v[K])),s.state.value[e][K]=O);else if(typeof O=="function"){const J=P(K,O);oe[K]=J,a.actions[K]=O}}return Mt(q,oe),Mt(te(q),oe),Object.defineProperty(q,"$state",{get:()=>s.state.value[e],set:K=>{F(O=>{Mt(O,K)})}}),s._p.forEach(K=>{Mt(q,o.run(()=>K({store:q,app:s._a,pinia:s,options:a})))}),v&&r&&n.hydrate&&n.hydrate(q.$state,v),c=!0,u=!0,q}function yg(e,t,n){let s,i;const r=typeof t=="function";typeof e=="string"?(s=e,i=r?n:t):(i=e,s=e.id);function o(a,l){const c=Au();return a=a||c&&gt(Pu,null),a&&qi(a),a=Ou,a._s.has(s)||(r?Nu(s,t,i,a):_g(s,i,a)),a._s.get(s)}return o.$id=s,o}var El;const Ps=typeof window<"u",vg=e=>typeof e=="string",Eg=()=>{};Ps&&((El=window==null?void 0:window.navigator)!=null&&El.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function no(e){return typeof e=="function"?e():be(e)}function wg(e){return e}function Ig(e){return Mc()?(xc(e),!0):!1}const bg=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Tg=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Sg=(e,t,n,s)=>{let i=e<12?"AM":"PM";return s&&(i=i.split("").reduce((r,o)=>r+=`${o}.`,"")),n?i.toLowerCase():i},Ag=(e,t,n={})=>{var s;const i=e.getFullYear(),r=e.getMonth(),o=e.getDate(),a=e.getHours(),l=e.getMinutes(),c=e.getSeconds(),u=e.getMilliseconds(),f=e.getDay(),p=(s=n.customMeridiem)!=null?s:Sg,g={YY:()=>String(i).slice(-2),YYYY:()=>i,M:()=>r+1,MM:()=>`${r+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(o),DD:()=>`${o}`.padStart(2,"0"),H:()=>String(a),HH:()=>`${a}`.padStart(2,"0"),h:()=>`${a%12||12}`.padStart(1,"0"),hh:()=>`${a%12||12}`.padStart(2,"0"),m:()=>String(l),mm:()=>`${l}`.padStart(2,"0"),s:()=>String(c),ss:()=>`${c}`.padStart(2,"0"),SSS:()=>`${u}`.padStart(3,"0"),d:()=>f,dd:()=>e.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>p(a,l),AA:()=>p(a,l,!1,!0),a:()=>p(a,l,!0),aa:()=>p(a,l,!0,!0)};return t.replace(Tg,(v,I)=>I||g[v]())},Cg=e=>{if(e===null)return new Date(NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(bg);if(t){const n=t[2]-1||0,s=(t[7]||"0").substring(0,3);return new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,s)}}return new Date(e)};function Rg(e,t="HH:mm:ss",n={}){return Te(()=>Ag(Cg(no(e)),no(t),n))}function ns(e){var t;const n=no(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Lu=Ps?window:void 0;Ps&&window.document;Ps&&window.navigator;Ps&&window.location;function ni(...e){let t,n,s,i;if(vg(e[0])||Array.isArray(e[0])?([n,s,i]=e,t=Lu):[t,n,s,i]=e,!t)return Eg;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,f,p)=>(u.addEventListener(f,p,i),()=>u.removeEventListener(f,p,i)),l=On(()=>ns(t),u=>{o(),u&&r.push(...n.flatMap(f=>s.map(p=>a(u,f,p))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return Ig(c),c}function kg(e,t,n={}){const{window:s=Lu,ignore:i=[],capture:r=!0,detectIframe:o=!1}=n;if(!s)return;let a=!0,l;const c=g=>i.some(v=>{if(typeof v=="string")return Array.from(s.document.querySelectorAll(v)).some(I=>I===g.target||g.composedPath().includes(I));{const I=ns(v);return I&&(g.target===I||g.composedPath().includes(I))}}),u=g=>{s.clearTimeout(l);const v=ns(e);if(!(!v||v===g.target||g.composedPath().includes(v))){if(g.detail===0&&(a=!c(g)),!a){a=!0;return}t(g)}},f=[ni(s,"click",u,{passive:!0,capture:r}),ni(s,"pointerdown",g=>{const v=ns(e);v&&(a=!g.composedPath().includes(v)&&!c(g))},{passive:!0}),ni(s,"pointerup",g=>{if(g.button===0){const v=g.composedPath();g.composedPath=()=>v,l=s.setTimeout(()=>u(g),50)}},{passive:!0}),o&&ni(s,"blur",g=>{var v;const I=ns(e);((v=s.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(I!=null&&I.contains(s.document.activeElement))&&t(g)})].filter(Boolean);return()=>f.forEach(g=>g())}const so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},io="__vueuse_ssr_handlers__";so[io]=so[io]||{};so[io];var wl;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(wl||(wl={}));var Og=Object.defineProperty,Il=Object.getOwnPropertySymbols,Pg=Object.prototype.hasOwnProperty,Dg=Object.prototype.propertyIsEnumerable,bl=(e,t,n)=>t in e?Og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ng=(e,t)=>{for(var n in t||(t={}))Pg.call(t,n)&&bl(e,n,t[n]);if(Il)for(var n of Il(t))Dg.call(t,n)&&bl(e,n,t[n]);return e};const Lg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ng({linear:wg},Lg);const zn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},Mg=e=>(zo("data-v-8e6a3b19"),e=e(),Ko(),e),xg={class:"nav-container"},Ug={class:"primary-nav"},Fg={key:0,class:"secoundary-nav"},$g=Mg(()=>N("button",{class:"cart-btn"},[vs(" CART "),N("i",{class:"fas fa-shopping-cart"})],-1)),jg={__name:"TheNavbar",setup(e){const t=jt(null),n=jt(null),s=jt(""),i=jt(""),r=()=>{n.value<=600?t.value=!t.value:t.value};kg(()=>s,()=>{n.value<=600?t.value=!1:t.value},{ignore:[i]});const o=()=>{n.value=window.innerWidth,n.value<=600?t.value=!1:t.value=!0};o(),window.addEventListener("resize",o);const a=[{name:"Home",path:"home"},{name:"PROFILE",path:"auth"}];return(l,c)=>{const u=gu("RouterLink");return xe(),Xe("nav",xg,[N("div",{class:"inner-nav-cont",ref_key:"NavbarRef",ref:s},[N("div",Ug,[N("h1",{onClick:c[0]||(c[0]=f=>l.$router.push({name:"home"}))}," Ease "),N("i",{onClick:r,class:"fas fa-bars",ref_key:"NavBtnRef",ref:i},null,512)]),t.value?(xe(),Xe("div",Fg,[(xe(),Xe(Ge,null,ap(a,f=>ke(u,{to:{name:f.path}},{default:ru(()=>[vs(Oo(f.name),1)]),_:2},1032,["to"])),64)),$g])):an("",!0)],512)])}}},Bg=zn(jg,[["__scopeId","data-v-8e6a3b19"]]);/**
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
 */const Mu=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Hg=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Mu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Hg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const p=r<<2|a>>4;if(s.push(p),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const v=c<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Wg=function(e){const t=Mu(e);return xu.encodeByteArray(t,!0)},vi=function(e){return Wg(e).replace(/\./g,"")},Uu=function(e){try{return xu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function zg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qg(){const e=Ne();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Gg(){try{return typeof indexedDB=="object"}catch{return!1}}function Xg(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function Jg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yg=()=>Jg().__FIREBASE_DEFAULTS__,Qg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Zg=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Uu(e[1]);return t&&JSON.parse(t)},Qo=()=>{try{return Yg()||Qg()||Zg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Fu=e=>{var t,n;return(n=(t=Qo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},em=e=>{const t=Fu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},tm=()=>{var e;return(e=Qo())===null||e===void 0?void 0:e.config},$u=e=>{var t;return(t=Qo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class nm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function sm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[vi(JSON.stringify(n)),vi(JSON.stringify(o)),a].join(".")}/**
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
 */const im="FirebaseError";class Ot extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=im,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?rm(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,s)}}function rm(e,t){return e.replace(om,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const om=/\{\$([^}]+)}/g;function am(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ei(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Tl(r)&&Tl(o)){if(!Ei(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Tl(e){return e!==null&&typeof e=="object"}/**
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
 */function Ns(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function ss(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function is(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function lm(e,t){const n=new cm(e,t);return n.subscribe.bind(n)}class cm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");um(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=wr),i.error===void 0&&(i.error=wr),i.complete===void 0&&(i.complete=wr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function um(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function wr(){}/**
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
 */function vt(e){return e&&e._delegate?e._delegate:e}class gn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class hm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new nm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dm(t))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nn){return this.instances.has(t)}getOptions(t=nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fm(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=nn){return this.component?this.component.multipleInstances?t:nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fm(e){return e===nn?void 0:e}function dm(e){return e.instantiationMode==="EAGER"}/**
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
 */class pm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const gm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},mm=se.INFO,_m={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},ym=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=_m[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zo{constructor(t){this.name=t,this._logLevel=mm,this._logHandler=ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const vm=(e,t)=>t.some(n=>e instanceof n);let Sl,Al;function Em(){return Sl||(Sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wm(){return Al||(Al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ju=new WeakMap,ro=new WeakMap,Bu=new WeakMap,Ir=new WeakMap,ea=new WeakMap;function Im(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Vt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ju.set(n,e)}).catch(()=>{}),ea.set(t,e),t}function bm(e){if(ro.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});ro.set(e,t)}let oo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ro.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Tm(e){oo=e(oo)}function Sm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(br(this),t,...n);return Bu.set(s,t.sort?t.sort():[t]),Vt(s)}:wm().includes(e)?function(...t){return e.apply(br(this),t),Vt(ju.get(this))}:function(...t){return Vt(e.apply(br(this),t))}}function Am(e){return typeof e=="function"?Sm(e):(e instanceof IDBTransaction&&bm(e),vm(e,Em())?new Proxy(e,oo):e)}function Vt(e){if(e instanceof IDBRequest)return Im(e);if(Ir.has(e))return Ir.get(e);const t=Am(e);return t!==e&&(Ir.set(e,t),ea.set(t,e)),t}const br=e=>ea.get(e);function Cm(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Vt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Vt(o.result),l.oldVersion,l.newVersion,Vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Rm=["get","getKey","getAll","getAllKeys","count"],km=["put","add","delete","clear"],Tr=new Map;function Cl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Tr.get(t))return Tr.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=km.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Rm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Tr.set(t,r),r}Tm(e=>({...e,get:(t,n,s)=>Cl(t,n)||e.get(t,n,s),has:(t,n)=>!!Cl(t,n)||e.has(t,n)}));/**
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
 */class Om{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Pm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ao="@firebase/app",Rl="0.9.0";/**
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
 */const mn=new Zo("@firebase/app"),Dm="@firebase/app-compat",Nm="@firebase/analytics-compat",Lm="@firebase/analytics",Mm="@firebase/app-check-compat",xm="@firebase/app-check",Um="@firebase/auth",Fm="@firebase/auth-compat",$m="@firebase/database",jm="@firebase/database-compat",Bm="@firebase/functions",Hm="@firebase/functions-compat",Wm="@firebase/installations",Vm="@firebase/installations-compat",zm="@firebase/messaging",Km="@firebase/messaging-compat",qm="@firebase/performance",Gm="@firebase/performance-compat",Xm="@firebase/remote-config",Jm="@firebase/remote-config-compat",Ym="@firebase/storage",Qm="@firebase/storage-compat",Zm="@firebase/firestore",e_="@firebase/firestore-compat",t_="firebase",n_="9.15.0";/**
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
 */const lo="[DEFAULT]",s_={[ao]:"fire-core",[Dm]:"fire-core-compat",[Lm]:"fire-analytics",[Nm]:"fire-analytics-compat",[xm]:"fire-app-check",[Mm]:"fire-app-check-compat",[Um]:"fire-auth",[Fm]:"fire-auth-compat",[$m]:"fire-rtdb",[jm]:"fire-rtdb-compat",[Bm]:"fire-fn",[Hm]:"fire-fn-compat",[Wm]:"fire-iid",[Vm]:"fire-iid-compat",[zm]:"fire-fcm",[Km]:"fire-fcm-compat",[qm]:"fire-perf",[Gm]:"fire-perf-compat",[Xm]:"fire-rc",[Jm]:"fire-rc-compat",[Ym]:"fire-gcs",[Qm]:"fire-gcs-compat",[Zm]:"fire-fst",[e_]:"fire-fst-compat","fire-js":"fire-js",[t_]:"fire-js-all"};/**
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
 */const wi=new Map,co=new Map;function i_(e,t){try{e.container.addComponent(t)}catch(n){mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Un(e){const t=e.name;if(co.has(t))return mn.debug(`There were multiple attempts to register component ${t}.`),!1;co.set(t,e);for(const n of wi.values())i_(n,e);return!0}function ta(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const r_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zt=new Ds("app","Firebase",r_);/**
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
 */class o_{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=n_;function Hu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:lo,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=tm()),!n)throw zt.create("no-options");const r=wi.get(i);if(r){if(Ei(n,r.options)&&Ei(s,r.config))return r;throw zt.create("duplicate-app",{appName:i})}const o=new pm(i);for(const l of co.values())o.addComponent(l);const a=new o_(n,s,o);return wi.set(i,a),a}function Wu(e=lo){const t=wi.get(e);if(!t&&e===lo)return Hu();if(!t)throw zt.create("no-app",{appName:e});return t}function Kt(e,t,n){var s;let i=(s=s_[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mn.warn(a.join(" "));return}Un(new gn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const a_="firebase-heartbeat-database",l_=1,ws="firebase-heartbeat-store";let Sr=null;function Vu(){return Sr||(Sr=Cm(a_,l_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ws)}}}).catch(e=>{throw zt.create("idb-open",{originalErrorMessage:e.message})})),Sr}async function c_(e){try{return(await Vu()).transaction(ws).objectStore(ws).get(zu(e))}catch(t){if(t instanceof Ot)mn.warn(t.message);else{const n=zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mn.warn(n.message)}}}async function kl(e,t){try{const s=(await Vu()).transaction(ws,"readwrite");return await s.objectStore(ws).put(t,zu(e)),s.done}catch(n){if(n instanceof Ot)mn.warn(n.message);else{const s=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(s.message)}}}function zu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const u_=1024,h_=30*24*60*60*1e3;class f_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ol();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=h_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ol(),{heartbeatsToSend:n,unsentEntries:s}=d_(this._heartbeatsCache.heartbeats),i=vi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ol(){return new Date().toISOString().substring(0,10)}function d_(e,t=u_){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Pl(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pl(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class p_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gg()?Xg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await c_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Pl(e){return vi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function g_(e){Un(new gn("platform-logger",t=>new Om(t),"PRIVATE")),Un(new gn("heartbeat",t=>new f_(t),"PRIVATE")),Kt(ao,Rl,e),Kt(ao,Rl,"esm2017"),Kt("fire-js","")}g_("");function na(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n}function Ku(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m_=Ku,qu=new Ds("auth","Firebase",Ku());/**
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
 */const Dl=new Zo("@firebase/auth");function hi(e,...t){Dl.logLevel<=se.ERROR&&Dl.error(`Auth (${Ls}): ${e}`,...t)}/**
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
 */function Qe(e,...t){throw sa(e,...t)}function mt(e,...t){return sa(e,...t)}function Gu(e,t,n){const s=Object.assign(Object.assign({},m_()),{[t]:n});return new Ds("auth","Firebase",s).create(t,{appName:e.name})}function __(e,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&Qe(e,"argument-error"),Gu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sa(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return qu.create(e,...t)}function j(e,t,...n){if(!e)throw sa(t,...n)}function It(e){const t="INTERNAL ASSERTION FAILED: "+e;throw hi(t),new Error(t)}function At(e,t){e||It(t)}/**
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
 */const Nl=new Map;function bt(e){At(e instanceof Function,"Expected a class definition");let t=Nl.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Nl.set(e,t),t)}/**
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
 */function y_(e,t){const n=ta(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ei(r,t??{}))return i;Qe(i,"already-initialized")}return n.initialize({options:t})}function v_(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(bt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function uo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function E_(){return Ll()==="http:"||Ll()==="https:"}function Ll(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function w_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E_()||zg()||"connection"in navigator)?navigator.onLine:!0}function I_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ms{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=Vg()||Kg()}get(){return w_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ia(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Xu{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const b_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const T_=new Ms(3e4,6e4);function xs(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Kn(e,t,n,s,i={}){return Ju(e,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ns(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Xu.fetch()(Yu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ju(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},b_),t);try{const i=new S_(e),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw si(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw si(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw si(e,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gu(e,u,c);Qe(e,u)}}catch(i){if(i instanceof Ot)throw i;Qe(e,"network-request-failed")}}async function Us(e,t,n,s,i={}){const r=await Kn(e,t,n,s,i);return"mfaPendingCredential"in r&&Qe(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Yu(e,t,n,s){const i=`${t}${n}?${s}`;return e.config.emulator?ia(e.config,i):`${e.config.apiScheme}://${i}`}class S_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(mt(this.auth,"network-request-failed")),T_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=mt(e,t,s);return i.customData._tokenResponse=n,i}/**
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
 */async function A_(e,t){return Kn(e,"POST","/v1/accounts:delete",t)}async function C_(e,t){return Kn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function us(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function R_(e,t=!1){const n=vt(e),s=await n.getIdToken(t),i=ra(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:us(Ar(i.auth_time)),issuedAtTime:us(Ar(i.iat)),expirationTime:us(Ar(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ar(e){return Number(e)*1e3}function ra(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uu(n);return i?JSON.parse(i):(hi("Failed to decode base64 JWT payload"),null)}catch(i){return hi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function k_(e){const t=ra(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Fn(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Ot&&O_(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function O_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class P_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(e){var t;const n=e.auth,s=await e.getIdToken(),i=await Fn(e,C_(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?L_(r.providerUserInfo):[],a=N_(e.providerData,o),l=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Qu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function D_(e){const t=vt(e);await Ii(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function N_(e,t){return[...e.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function L_(e){return e.map(t=>{var{providerId:n}=t,s=na(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function M_(e,t){const n=await Ju(e,{},async()=>{const s=Ns({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=Yu(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):k_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return j(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await M_(t,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Is;return s&&(j(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Dt(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class dn{constructor(t){var{uid:n,auth:s,stsTokenManager:i}=t,r=na(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Qu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return R_(this,t)}reload(){return D_(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new dn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Ii(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Fn(this,A_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,i,r,o,a,l,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:z,isAnonymous:q,providerData:oe,stsTokenManager:K}=n;j(P&&K,t,"internal-error");const O=Is.fromJSON(this.name,K);j(typeof P=="string",t,"internal-error"),Dt(f,t.name),Dt(p,t.name),j(typeof z=="boolean",t,"internal-error"),j(typeof q=="boolean",t,"internal-error"),Dt(g,t.name),Dt(v,t.name),Dt(I,t.name),Dt(F,t.name),Dt(k,t.name),Dt($,t.name);const J=new dn({uid:P,auth:t,email:p,emailVerified:z,displayName:f,isAnonymous:q,photoURL:v,phoneNumber:g,tenantId:I,stsTokenManager:O,createdAt:k,lastLoginAt:$});return oe&&Array.isArray(oe)&&(J.providerData=oe.map(Q=>Object.assign({},Q))),F&&(J._redirectEventId=F),J}static async _fromIdTokenResponse(t,n,s=!1){const i=new Is;i.updateFromServerResponse(n);const r=new dn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Ii(r),r}}/**
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
 */class Zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Zu.type="NONE";const Ml=Zu;/**
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
 */function fi(e,t,n){return`firebase:${e}:${t}:${n}`}class Pn{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=fi(this.userKey,i.apiKey,r),this.fullPersistenceKey=fi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?dn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Pn(bt(Ml),t,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||bt(Ml);const o=fi(s,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=dn._fromJSON(t,u);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Pn(r,t,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Pn(r,t,s))}}/**
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
 */function xl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(eh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ih(t))return"Blackberry";if(rh(t))return"Webos";if(oa(t))return"Safari";if((t.includes("chrome/")||th(t))&&!t.includes("edge/"))return"Chrome";if(sh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function eh(e=Ne()){return/firefox\//i.test(e)}function oa(e=Ne()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function th(e=Ne()){return/crios\//i.test(e)}function nh(e=Ne()){return/iemobile/i.test(e)}function sh(e=Ne()){return/android/i.test(e)}function ih(e=Ne()){return/blackberry/i.test(e)}function rh(e=Ne()){return/webos/i.test(e)}function Gi(e=Ne()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function x_(e=Ne()){var t;return Gi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function U_(){return qg()&&document.documentMode===10}function oh(e=Ne()){return Gi(e)||sh(e)||rh(e)||ih(e)||/windows phone/i.test(e)||nh(e)}function F_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ah(e,t=[]){let n;switch(e){case"Browser":n=xl(Ne());break;case"Worker":n=`${xl(Ne())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${s}`}/**
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
 */class $_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class j_{constructor(t,n,s){this.app=t,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ul(this),this.idTokenSubscription=new Ul(this),this.beforeStateQueue=new $_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ii(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?vt(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ds("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&bt(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,s,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function vn(e){return vt(e)}class Ul{constructor(t){this.auth=t,this.observer=null,this.addObserver=lm(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function B_(e,t,n){const s=vn(e);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=lh(t),{host:o,port:a}=H_(t),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||W_()}function lh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function H_(e){const t=lh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Fl(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Fl(o)}}}function Fl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function W_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class aa{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(t){return It("not implemented")}_linkToIdToken(t,n){return It("not implemented")}_getReauthenticationResolver(t){return It("not implemented")}}async function V_(e,t){return Kn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function z_(e,t){return Us(e,"POST","/v1/accounts:signInWithPassword",xs(e,t))}/**
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
 */async function K_(e,t){return Us(e,"POST","/v1/accounts:signInWithEmailLink",xs(e,t))}async function q_(e,t){return Us(e,"POST","/v1/accounts:signInWithEmailLink",xs(e,t))}/**
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
 */class bs extends aa{constructor(t,n,s,i=null){super("password",s),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new bs(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new bs(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return z_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return K_(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return V_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return q_(t,{idToken:n,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Dn(e,t){return Us(e,"POST","/v1/accounts:signInWithIdp",xs(e,t))}/**
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
 */const G_="http://localhost";class _n extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new _n(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=n,r=na(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new _n(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Dn(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Dn(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dn(t,n)}buildRequest(){const t={requestUri:G_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ns(n)}return t}}/**
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
 */function X_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J_(e){const t=ss(is(e)).link,n=t?ss(is(t)).deep_link_id:null,s=ss(is(e)).deep_link_id;return(s?ss(is(s)).link:null)||s||n||t||e}class la{constructor(t){var n,s,i,r,o,a;const l=ss(is(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,f=X_((i=l.mode)!==null&&i!==void 0?i:null);j(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=J_(t);try{return new la(n)}catch{return null}}}/**
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
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(t,n){return bs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=la.parseLink(n);return j(s,"argument-error"),bs._fromEmailAndCode(t,s.code,s.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ca{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fs extends ca{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ut extends Fs{constructor(){super("facebook.com")}static credential(t){return _n._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
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
 */class dt extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return _n._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return dt.credentialFromTaggedObject(t)}static credentialFromError(t){return dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return dt.credential(n,s)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
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
 */class Ft extends Fs{constructor(){super("github.com")}static credential(t){return _n._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
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
 */class $t extends Fs{constructor(){super("twitter.com")}static credential(t,n){return _n._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return $t.credential(n,s)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */async function ch(e,t){return Us(e,"POST","/v1/accounts:signUp",xs(e,t))}/**
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
 */class Ct{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,i=!1){const r=await dn._fromIdTokenResponse(t,s,i),o=$l(s);return new Ct({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const i=$l(s);return new Ct({user:t,providerId:i,_tokenResponse:s,operationType:n})}}function $l(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function Y_(e){var t;const n=vn(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new Ct({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await ch(n,{returnSecureToken:!0}),i=await Ct._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class bi extends Ot{constructor(t,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,bi.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,i){return new bi(t,n,s,i)}}function uh(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?bi._fromErrorAndOperation(e,r,t,s):r})}async function Q_(e,t,n=!1){const s=await Fn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ct._forOperation(e,"link",s)}/**
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
 */async function Z_(e,t,n=!1){const{auth:s}=e,i="reauthenticate";try{const r=await Fn(e,uh(s,i,t,e),n);j(r.idToken,s,"internal-error");const o=ra(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(e.uid===a,s,"user-mismatch"),Ct._forOperation(e,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),r}}/**
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
 */async function hh(e,t,n=!1){const s="signIn",i=await uh(e,s,t),r=await Ct._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(r.user),r}async function ey(e,t){return hh(vn(e),t)}async function ty(e,t,n){const s=vn(e),i=await ch(s,{returnSecureToken:!0,email:t,password:n}),r=await Ct._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function ny(e,t,n){return ey(vt(e),qn.credential(t,n))}/**
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
 */async function sy(e,t){return Kn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function iy(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const s=vt(e),r={idToken:await s.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Fn(s,sy(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function ry(e,t,n,s){return vt(e).onIdTokenChanged(t,n,s)}function oy(e,t,n){return vt(e).beforeAuthStateChanged(t,n)}function ay(e,t,n,s){return vt(e).onAuthStateChanged(t,n,s)}function ly(e){return vt(e).signOut()}const Ti="__sak";/**
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
 */class fh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cy(){const e=Ne();return oa(e)||Gi(e)}const uy=1e3,hy=10;class dh extends fh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cy()&&F_(),this.fallbackToPolling=oh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&t(n,i,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);U_()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,hy):i()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}dh.type="LOCAL";const fy=dh;/**
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
 */class ph extends fh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ph.type="SESSION";const gh=ph;/**
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
 */function dy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const s=new Xi(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await dy(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xi.receivers=[];/**
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
 */function ua(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class py{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ua("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _t(){return window}function gy(e){_t().location.href=e}/**
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
 */function mh(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function my(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _y(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function yy(){return mh()?self:null}/**
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
 */const _h="firebaseLocalStorageDb",vy=1,Si="firebaseLocalStorage",yh="fbase_key";class $s{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ji(e,t){return e.transaction([Si],t?"readwrite":"readonly").objectStore(Si)}function Ey(){const e=indexedDB.deleteDatabase(_h);return new $s(e).toPromise()}function ho(){const e=indexedDB.open(_h,vy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Si,{keyPath:yh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Si)?t(s):(s.close(),await Ey(),t(await ho()))})})}async function jl(e,t,n){const s=Ji(e,!0).put({[yh]:t,value:n});return new $s(s).toPromise()}async function wy(e,t){const n=Ji(e,!1).get(t),s=await new $s(n).toPromise();return s===void 0?null:s.value}function Bl(e,t){const n=Ji(e,!0).delete(t);return new $s(n).toPromise()}const Iy=800,by=3;class vh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ho(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>by)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xi._getInstance(yy()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await my(),!this.activeServiceWorker)return;this.sender=new py(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_y()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ho();return await jl(t,Ti,"1"),await Bl(t,Ti),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>jl(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>wy(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Ji(i,!1).getAll();return new $s(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Iy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vh.type="LOCAL";const Ty=vh;/**
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
 */function Sy(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Ay(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=i=>{const r=mt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Sy().appendChild(s)})}function Cy(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ms(3e4,6e4);/**
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
 */function Eh(e,t){return t?bt(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ha extends aa{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Ry(e){return hh(e.auth,new ha(e),e.bypassAuthState)}function ky(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),Z_(n,new ha(e),e.bypassAuthState)}async function Oy(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),Q_(n,new ha(e),e.bypassAuthState)}/**
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
 */class wh{constructor(t,n,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ry;case"linkViaPopup":case"linkViaRedirect":return Oy;case"reauthViaPopup":case"reauthViaRedirect":return ky;default:Qe(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Py=new Ms(2e3,1e4);async function Dy(e,t,n){const s=vn(e);__(e,t,ca);const i=Eh(s,n);return new ln(s,"signInViaPopup",t,i).executeNotNull()}class ln extends wh{constructor(t,n,s,i,r){super(t,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,Py.get())};t()}}ln.currentPopupAction=null;/**
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
 */const Ny="pendingRedirect",di=new Map;class Ly extends wh{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=di.get(this.auth._key());if(!t){try{const s=await My(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}di.set(this.auth._key(),t)}return this.bypassAuthState||di.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function My(e,t){const n=Fy(t),s=Uy(e);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function xy(e,t){di.set(e._key(),t)}function Uy(e){return bt(e._redirectPersistence)}function Fy(e){return fi(Ny,e.config.apiKey,e.name)}async function $y(e,t,n=!1){const s=vn(e),i=Eh(s,t),o=await new Ly(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const jy=10*60*1e3;class By{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Hy(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!Ih(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hl(t))}saveEventToCache(t){this.cachedEventUids.add(Hl(t)),this.lastProcessedEventTime=Date.now()}}function Hl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ih({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Hy(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ih(e);default:return!1}}/**
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
 */async function Wy(e,t={}){return Kn(e,"GET","/v1/projects",t)}/**
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
 */const Vy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zy=/^https?/;async function Ky(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Wy(e);for(const n of t)try{if(qy(n))return}catch{}Qe(e,"unauthorized-domain")}function qy(e){const t=uo(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zy.test(n))return!1;if(Vy.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Gy=new Ms(3e4,6e4);function Wl(){const e=_t().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Xy(e){return new Promise((t,n)=>{var s,i,r;function o(){Wl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wl(),n(mt(e,"network-request-failed"))},timeout:Gy.get()})}if(!((i=(s=_t().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=_t().gapi)===null||r===void 0)&&r.load)o();else{const a=Cy("iframefcb");return _t()[a]=()=>{gapi.load?o():n(mt(e,"network-request-failed"))},Ay(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw pi=null,t})}let pi=null;function Jy(e){return pi=pi||Xy(e),pi}/**
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
 */const Yy=new Ms(5e3,15e3),Qy="__/auth/iframe",Zy="emulator/auth/iframe",ev={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nv(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ia(t,Zy):`https://${e.config.authDomain}/${Qy}`,s={apiKey:t.apiKey,appName:e.name,v:Ls},i=tv.get(e.config.apiHost);i&&(s.eid=i);const r=e._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ns(s).slice(1)}`}async function sv(e){const t=await Jy(e),n=_t().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:nv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ev,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=mt(e,"network-request-failed"),a=_t().setTimeout(()=>{r(o)},Yy.get());function l(){_t().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const iv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rv=500,ov=600,av="_blank",lv="http://localhost";class Vl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cv(e,t,n,s=rv,i=ov){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},iv),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ne().toLowerCase();n&&(a=th(c)?av:n),eh(c)&&(t=t||lv,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(x_(c)&&a!=="_self")return uv(t||"",a),new Vl(null);const f=window.open(t||"",a,u);j(f,e,"popup-blocked");try{f.focus()}catch{}return new Vl(f)}function uv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const hv="__/auth/handler",fv="emulator/auth/handler";function zl(e,t,n,s,i,r){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Ls,eventId:i};if(t instanceof ca){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",am(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(t instanceof Fs){const l=t.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${dv(e)}?${Ns(a).slice(1)}`}function dv({config:e}){return e.emulator?ia(e,fv):`https://${e.authDomain}/${hv}`}/**
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
 */const Cr="webStorageSupport";class pv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gh,this._completeRedirectFn=$y,this._overrideRedirectResult=xy}async _openPopup(t,n,s,i){var r;At((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=zl(t,n,s,uo(),i);return cv(t,o,ua())}async _openRedirect(t,n,s,i){return await this._originValidation(t),gy(zl(t,n,s,uo(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(At(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await sv(t),s=new By(t);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Cr,{type:Cr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Cr];o!==void 0&&n(!!o),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ky(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return oh()||oa()||Gi()}}const gv=pv;var Kl="@firebase/auth",ql="0.21.0";/**
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
 */class mv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _v(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yv(e){Un(new gn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{j(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ah(e)},u=new j_(a,l,c);return v_(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Un(new gn("auth-internal",t=>{const n=vn(t.getProvider("auth").getImmediate());return(s=>new mv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Kl,ql,_v(e)),Kt(Kl,ql,"esm2017")}/**
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
 */const vv=5*60,Ev=$u("authIdTokenMaxAge")||vv;let Gl=null;const wv=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ev)return;const i=n==null?void 0:n.token;Gl!==i&&(Gl=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Iv(e=Wu()){const t=ta(e,"auth");if(t.isInitialized())return t.getImmediate();const n=y_(e,{popupRedirectResolver:gv,persistence:[Ty,fy,gh]}),s=$u("authTokenSyncURL");if(s){const r=wv(s);oy(n,r,()=>r(n.currentUser)),ry(n,o=>r(o))}const i=Fu("auth");return i&&B_(n,`http://${i}`),n}yv("Browser");var bv="firebase",Tv="9.15.0";/**
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
 */Kt(bv,Tv,"app");var Sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,fa=fa||{},B=Sv||self;function Ai(){}function Yi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function js(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Av(e){return Object.prototype.hasOwnProperty.call(e,Rr)&&e[Rr]||(e[Rr]=++Cv)}var Rr="closure_uid_"+(1e9*Math.random()>>>0),Cv=0;function Rv(e,t,n){return e.call.apply(e.bind,arguments)}function kv(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Oe(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=Rv:Oe=kv,Oe.apply(null,arguments)}function ii(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Ae(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Xt(){this.s=this.s,this.o=this.o}var Ov=0;Xt.prototype.s=!1;Xt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ov!=0)&&Av(this)};Xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function da(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Xl(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Yi(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Pe(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var Pv=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{B.addEventListener("test",Ai,t),B.removeEventListener("test",Ai,t)}catch{}return e}();function Ci(e){return/^[\s\xa0]*$/.test(e)}var Jl=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function kr(e,t){return e<t?-1:e>t?1:0}function Qi(){var e=B.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return Qi().indexOf(e)!=-1}function pa(e){return pa[" "](e),e}pa[" "]=Ai;function Dv(e){var t=Mv;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Nv=pt("Opera"),Ts=pt("Trident")||pt("MSIE"),Th=pt("Edge"),fo=Th||Ts,Sh=pt("Gecko")&&!(Qi().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),Lv=Qi().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function Ah(){var e=B.document;return e?e.documentMode:void 0}var po;e:{var Or="",Pr=function(){var e=Qi();if(Sh)return/rv:([^\);]+)(\)|;)/.exec(e);if(Th)return/Edge\/([\d\.]+)/.exec(e);if(Ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Lv)return/WebKit\/(\S+)/.exec(e);if(Nv)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Pr&&(Or=Pr?Pr[1]:""),Ts){var Dr=Ah();if(Dr!=null&&Dr>parseFloat(Or)){po=String(Dr);break e}}po=Or}var Mv={};function xv(){return Dv(function(){let e=0;const t=Jl(String(po)).split("."),n=Jl("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=kr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||kr(i[2].length==0,r[2].length==0)||kr(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}B.document&&Ts&&Ah();function Ss(e,t){if(Pe.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Sh){e:{try{pa(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Uv[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ss.X.h.call(this)}}Ae(Ss,Pe);var Uv={2:"touch",3:"pen",4:"mouse"};Ss.prototype.h=function(){Ss.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Bs="closure_listenable_"+(1e6*Math.random()|0),Fv=0;function $v(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Fv,this.ba=this.ea=!1}function Zi(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ga(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ch(e){const t={};for(const n in e)t[n]=e[n];return t}const Yl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rh(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Yl.length;r++)n=Yl[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function er(e){this.src=e,this.g={},this.h=0}er.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=mo(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new $v(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function go(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=bh(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Zi(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function mo(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var ma="closure_lm_"+(1e6*Math.random()|0),Nr={};function kh(e,t,n,s,i){if(s&&s.once)return Ph(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)kh(e,t[r],n,s,i);return null}return n=va(n),e&&e[Bs]?e.N(t,n,js(s)?!!s.capture:!!s,i):Oh(e,t,n,!1,s,i)}function Oh(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=js(i)?!!i.capture:!!i,a=ya(e);if(a||(e[ma]=a=new er(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=jv(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Pv||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Nh(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jv(){function e(n){return t.call(e.src,e.listener,n)}const t=Bv;return e}function Ph(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ph(e,t[r],n,s,i);return null}return n=va(n),e&&e[Bs]?e.O(t,n,js(s)?!!s.capture:!!s,i):Oh(e,t,n,!0,s,i)}function Dh(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Dh(e,t[r],n,s,i);else s=js(s)?!!s.capture:!!s,n=va(n),e&&e[Bs]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=mo(r,n,s,i),-1<n&&(Zi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ya(e))&&(t=e.g[t.toString()],e=-1,t&&(e=mo(t,n,s,i)),(n=-1<e?t[e]:null)&&_a(n))}function _a(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Bs])go(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Nh(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ya(t))?(go(n,e),n.h==0&&(n.src=null,t[ma]=null)):Zi(e)}}}function Nh(e){return e in Nr?Nr[e]:Nr[e]="on"+e}function Bv(e,t){if(e.ba)e=!0;else{t=new Ss(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&_a(e),e=n.call(s,t)}return e}function ya(e){return e=e[ma],e instanceof er?e:null}var Lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function va(e){return typeof e=="function"?e:(e[Lr]||(e[Lr]=function(t){return e.handleEvent(t)}),e[Lr])}function Ie(){Xt.call(this),this.i=new er(this),this.P=this,this.I=null}Ae(Ie,Xt);Ie.prototype[Bs]=!0;Ie.prototype.removeEventListener=function(e,t,n,s){Dh(this,e,t,n,s)};function Se(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Pe(t,e);else if(t instanceof Pe)t.target=t.target||e;else{var i=t;t=new Pe(s,e),Rh(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=ri(o,s,!0,t)&&i}if(o=t.g=e,i=ri(o,s,!0,t)&&i,i=ri(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=ri(o,s,!1,t)&&i}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Zi(n[s]);delete e.g[t],e.h--}}this.I=null};Ie.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};Ie.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ri(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&go(e.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ea=B.JSON.stringify;function Hv(){var e=xh;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wv{constructor(){this.h=this.g=null}add(t,n){const s=Lh.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Lh=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Vv,e=>e.reset());class Vv{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zv(e){B.setTimeout(()=>{throw e},0)}function Mh(e,t){_o||Kv(),yo||(_o(),yo=!0),xh.add(e,t)}var _o;function Kv(){var e=B.Promise.resolve(void 0);_o=function(){e.then(qv)}}var yo=!1,xh=new Wv;function qv(){for(var e;e=Hv();){try{e.h.call(e.g)}catch(n){zv(n)}var t=Lh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}yo=!1}function tr(e,t){Ie.call(this),this.h=e||1,this.g=t||B,this.j=Oe(this.lb,this),this.l=Date.now()}Ae(tr,Ie);L=tr.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(wa(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wa(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}L.M=function(){tr.X.M.call(this),wa(this),delete this.g};function Ia(e,t,n){if(typeof e=="function")n&&(e=Oe(e,n));else if(e&&typeof e.handleEvent=="function")e=Oe(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:B.setTimeout(e,t||0)}function Uh(e){e.g=Ia(()=>{e.g=null,e.i&&(e.i=!1,Uh(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Gv extends Xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Uh(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(e){Xt.call(this),this.h=e,this.g={}}Ae(As,Xt);var Ql=[];function Fh(e,t,n,s){Array.isArray(n)||(n&&(Ql[0]=n.toString()),n=Ql);for(var i=0;i<n.length;i++){var r=kh(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function $h(e){ga(e.g,function(t,n){this.g.hasOwnProperty(n)&&_a(t)},e),e.g={}}As.prototype.M=function(){As.X.M.call(this),$h(this)};As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nr(){this.g=!0}nr.prototype.Aa=function(){this.g=!1};function Xv(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Jv(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function An(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Qv(e,n)+(s?" "+s:"")})}function Yv(e,t){e.info(function(){return"TIMEOUT: "+t})}nr.prototype.info=function(){};function Qv(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ea(n)}catch{return t}}var Gn={},Zl=null;function ba(){return Zl=Zl||new Ie}Gn.Pa="serverreachability";function jh(e){Pe.call(this,Gn.Pa,e)}Ae(jh,Pe);function Cs(e){const t=ba();Se(t,new jh(t))}Gn.STAT_EVENT="statevent";function Bh(e,t){Pe.call(this,Gn.STAT_EVENT,e),this.stat=t}Ae(Bh,Pe);function Ue(e){const t=ba();Se(t,new Bh(t,e))}Gn.Qa="timingevent";function Hh(e,t){Pe.call(this,Gn.Qa,e),this.size=t}Ae(Hh,Pe);function Hs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){e()},t)}var Ta={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sa(){}Sa.prototype.h=null;function ec(e){return e.h||(e.h=e.i())}function e0(){}var Ws={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Aa(){Pe.call(this,"d")}Ae(Aa,Pe);function Ca(){Pe.call(this,"c")}Ae(Ca,Pe);var vo;function sr(){}Ae(sr,Sa);sr.prototype.g=function(){return new XMLHttpRequest};sr.prototype.i=function(){return{}};vo=new sr;function Vs(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new As(this),this.O=t0,e=fo?125:void 0,this.T=new tr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Wh}function Wh(){this.i=null,this.g="",this.h=!1}var t0=45e3,Eo={},Ri={};L=Vs.prototype;L.setTimeout=function(e){this.O=e};function wo(e,t,n){e.K=1,e.v=rr(Rt(t)),e.s=n,e.P=!0,Vh(e,null)}function Vh(e,t){e.F=Date.now(),zs(e),e.A=Rt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Qh(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Wh,e.g=Ef(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Gv(Oe(e.La,e,e.g),e.N)),Fh(e.S,e.g,"readystatechange",e.ib),t=e.H?Ch(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Cs(),Xv(e.j,e.u,e.A,e.m,e.U,e.s)}L.ib=function(e){e=e.target;const t=this.L;t&&Tt(e)==3?t.l():this.La(e)};L.La=function(e){try{if(e==this.g)e:{const u=Tt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||fo||this.g&&(this.h.h||this.g.fa()||ic(this.g)))){this.I||u!=4||t==7||(t==8||0>=f?Cs(3):Cs(2)),ir(this);var n=this.g.aa();this.Y=n;t:if(zh(this)){var s=ic(this.g);e="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),hs(this);var o="";break t}this.h.i=new B.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Jv(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(a)){var c=a;break t}}c=null}if(n=c)An(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Io(this,n);else{this.i=!1,this.o=3,Ue(12),cn(this),hs(this);break e}}this.P?(Kh(this,u,o),fo&&this.i&&u==3&&(Fh(this.S,this.T,"tick",this.hb),this.T.start())):(An(this.j,this.m,o,null),Io(this,o)),u==4&&cn(this),this.i&&!this.I&&(u==4?mf(this.l,this):(this.i=!1,zs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ue(12)):(this.o=0,Ue(13)),cn(this),hs(this)}}}catch{}finally{}};function zh(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Kh(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=n0(e,n),i==Ri){t==4&&(e.o=4,Ue(14),s=!1),An(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Eo){e.o=4,Ue(15),An(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else An(e.j,e.m,i,null),Io(e,i);zh(e)&&i!=Ri&&i!=Eo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ue(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),La(t),t.K=!0,Ue(11))):(An(e.j,e.m,n,"[Invalid Chunked Response]"),cn(e),hs(e))}L.hb=function(){if(this.g){var e=Tt(this.g),t=this.g.fa();this.C<t.length&&(ir(this),Kh(this,e,t),this.i&&e!=4&&zs(this))}};function n0(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ri:(n=Number(t.substring(n,s)),isNaN(n)?Eo:(s+=1,s+n>t.length?Ri:(t=t.substr(s,n),e.C=s+n,t)))}L.cancel=function(){this.I=!0,cn(this)};function zs(e){e.V=Date.now()+e.O,qh(e,e.O)}function qh(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Hs(Oe(e.gb,e),t)}function ir(e){e.B&&(B.clearTimeout(e.B),e.B=null)}L.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Yv(this.j,this.A),this.K!=2&&(Cs(),Ue(17)),cn(this),this.o=2,hs(this)):qh(this,this.V-e)};function hs(e){e.l.G==0||e.I||mf(e.l,e)}function cn(e){ir(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,wa(e.T),$h(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Io(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||bo(n.h,e))){if(!e.J&&bo(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Pi(n),cr(n);else break e;Na(n),Ue(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Hs(Oe(n.cb,n),6e3));if(1>=tf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else un(n,11)}else if((e.J||n.g==e)&&Pi(n),!Ci(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ra(r,r.h),r.h=null))}if(s.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.za=I,ue(s.F,s.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=vf(s,s.H?s.ka:null,s.V),o.J){nf(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(ir(a),zs(a)),s.g=o}else pf(s);0<n.i.length&&ur(n)}else c[0]!="stop"&&c[0]!="close"||un(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?un(n,7):Da(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Cs(4)}catch{}}function s0(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Yi(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function i0(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Yi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Gh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Yi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=i0(e),s=s0(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Xh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r0(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function pn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof pn){this.h=t!==void 0?t:e.h,ki(this,e.j),this.s=e.s,this.g=e.g,Oi(this,e.m),this.l=e.l,t=e.i;var n=new Rs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tc(this,n),this.o=e.o}else e&&(n=String(e).match(Xh))?(this.h=!!t,ki(this,n[1]||"",!0),this.s=rs(n[2]||""),this.g=rs(n[3]||"",!0),Oi(this,n[4]),this.l=rs(n[5]||"",!0),tc(this,n[6]||"",!0),this.o=rs(n[7]||"")):(this.h=!!t,this.i=new Rs(null,this.h))}pn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(os(t,nc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(os(t,nc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(os(n,n.charAt(0)=="/"?l0:a0,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",os(n,u0)),e.join("")};function Rt(e){return new pn(e)}function ki(e,t,n){e.j=n?rs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Oi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tc(e,t,n){t instanceof Rs?(e.i=t,h0(e.i,e.h)):(n||(t=os(t,c0)),e.i=new Rs(t,e.h))}function ue(e,t,n){e.i.set(t,n)}function rr(e){return ue(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function os(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,o0),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function o0(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var nc=/[#\/\?@]/g,a0=/[#\?:]/g,l0=/[#\?]/g,c0=/[#\?@]/g,u0=/#/g;function Rs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&r0(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}L=Rs.prototype;L.add=function(e,t){Jt(this),this.i=null,e=Xn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Jh(e,t){Jt(e),t=Xn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Yh(e,t){return Jt(e),t=Xn(e,t),e.g.has(t)}L.forEach=function(e,t){Jt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};L.oa=function(){Jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};L.W=function(e){Jt(this);let t=[];if(typeof e=="string")Yh(this,e)&&(t=t.concat(this.g.get(Xn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};L.set=function(e,t){return Jt(this),this.i=null,e=Xn(this,e),Yh(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};L.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Qh(e,t,n){Jh(e,t),0<n.length&&(e.i=null,e.g.set(Xn(e,t),da(n)),e.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Xn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function h0(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Jh(this,s),Qh(this,i,n))},e)),e.j=t}var f0=class{constructor(e,t){this.h=e,this.g=t}};function Zh(e){this.l=e||d0,B.PerformanceNavigationTiming?(e=B.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var d0=10;function ef(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function tf(e){return e.h?1:e.g?e.g.size:0}function bo(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ra(e,t){e.g?e.g.add(t):e.h=t}function nf(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Zh.prototype.cancel=function(){if(this.i=sf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function sf(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return da(e.i)}function ka(){}ka.prototype.stringify=function(e){return B.JSON.stringify(e,void 0)};ka.prototype.parse=function(e){return B.JSON.parse(e,void 0)};function p0(){this.g=new ka}function g0(e,t,n){const s=n||"";try{Gh(e,function(i,r){let o=i;js(i)&&(o=Ea(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function m0(e,t){const n=new nr;if(B.Image){const s=new Image;s.onload=ii(oi,n,s,"TestLoadImage: loaded",!0,t),s.onerror=ii(oi,n,s,"TestLoadImage: error",!1,t),s.onabort=ii(oi,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=ii(oi,n,s,"TestLoadImage: timeout",!1,t),B.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function oi(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function or(e){this.l=e.ac||null,this.j=e.jb||!1}Ae(or,Sa);or.prototype.g=function(){return new ar(this.l,this.j)};or.prototype.i=function(e){return function(){return e}}({});function ar(e,t){Ie.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Oa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(ar,Ie);var Oa=0;L=ar.prototype;L.open=function(e,t){if(this.readyState!=Oa)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ks(this)};L.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||B).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=Oa};L.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rf(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function rf(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}L.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ks(this):ks(this),this.readyState==3&&rf(this)}};L.Va=function(e){this.g&&(this.response=this.responseText=e,Ks(this))};L.Ua=function(e){this.g&&(this.response=e,Ks(this))};L.ga=function(){this.g&&Ks(this)};function Ks(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ks(e)}L.setRequestHeader=function(e,t){this.v.append(e,t)};L.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ks(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var _0=B.JSON.parse;function ge(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=of,this.K=this.L=!1}Ae(ge,Ie);var of="",y0=/^https?$/i,v0=["POST","PUT"];L=ge.prototype;L.Ka=function(e){this.L=e};L.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vo.g(),this.C=this.u?ec(this.u):ec(vo),this.g.onreadystatechange=Oe(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){sc(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=B.FormData&&e instanceof B.FormData,!(0<=bh(v0,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cf(this),0<this.B&&((this.K=E0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.qa,this)):this.A=Ia(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){sc(this,r)}};function E0(e){return Ts&&xv()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}L.qa=function(){typeof fa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function sc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,af(e),lr(e)}function af(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}L.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),lr(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lr(this,!0)),ge.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?lf(this):this.fb())};L.fb=function(){lf(this)};function lf(e){if(e.h&&typeof fa<"u"&&(!e.C[1]||Tt(e)!=4||e.aa()!=2)){if(e.v&&Tt(e)==4)Ia(e.Ha,0,e);else if(Se(e,"readystatechange"),Tt(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Xh)[1]||null;if(!i&&B.self&&B.self.location){var r=B.self.location.protocol;i=r.substr(0,r.length-1)}s=!y0.test(i?i.toLowerCase():"")}n=s}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var o=2<Tt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",af(e)}}finally{lr(e)}}}}function lr(e,t){if(e.g){cf(e);const n=e.g,s=e.C[0]?Ai:null;e.g=null,e.C=null,t||Se(e,"ready");try{n.onreadystatechange=s}catch{}}}function cf(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(B.clearTimeout(e.A),e.A=null)}function Tt(e){return e.g?e.g.readyState:0}L.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),_0(t)}};function ic(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case of:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uf(e){let t="";return ga(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Pa(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=uf(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ue(e,t,n))}function Zn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function hf(e){this.Ca=0,this.i=[],this.j=new nr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Zn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Zn("baseRetryDelayMs",5e3,e),this.bb=Zn("retryDelaySeedMs",1e4,e),this.$a=Zn("forwardChannelMaxRetries",2,e),this.ta=Zn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Zh(e&&e.concurrentRequestLimit),this.Fa=new p0,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=hf.prototype;L.ma=8;L.G=1;function Da(e){if(ff(e),e.G==3){var t=e.U++,n=Rt(e.F);ue(n,"SID",e.I),ue(n,"RID",t),ue(n,"TYPE","terminate"),qs(e,n),t=new Vs(e,e.j,t,void 0),t.K=2,t.v=rr(Rt(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(t.v.toString(),"")),!n&&B.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ef(t.l,null),t.g.da(t.v)),t.F=Date.now(),zs(t)}yf(e)}function cr(e){e.g&&(La(e),e.g.cancel(),e.g=null)}function ff(e){cr(e),e.u&&(B.clearTimeout(e.u),e.u=null),Pi(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&B.clearTimeout(e.m),e.m=null)}function ur(e){ef(e.h)||e.m||(e.m=!0,Mh(e.Ja,e),e.C=0)}function w0(e,t){return tf(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Hs(Oe(e.Ja,e,t),_f(e,e.C)),e.C++,!0)}L.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Vs(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Ch(r),Rh(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=df(this,i,t),n=Rt(this.F),ue(n,"RID",e),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),qs(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(uf(r)))+"&"+t:this.o&&Pa(n,this.o,r)),Ra(this.h,i),this.Ya&&ue(n,"TYPE","init"),this.O?(ue(n,"$req",t),ue(n,"SID","null"),i.Z=!0,wo(i,n,null)):wo(i,n,t),this.G=2}}else this.G==3&&(e?rc(this,e):this.i.length==0||ef(this.h)||rc(this))};function rc(e,t){var n;t?n=t.m:n=e.U++;const s=Rt(e.F);ue(s,"SID",e.I),ue(s,"RID",n),ue(s,"AID",e.T),qs(e,s),e.o&&e.s&&Pa(s,e.o,e.s),n=new Vs(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=df(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Ra(e.h,n),wo(n,s,t)}function qs(e,t){e.ia&&ga(e.ia,function(n,s){ue(t,s,n)}),e.l&&Gh({},function(n,s){ue(t,s,n)})}function df(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Oe(e.l.Ra,e.l,e):null;e:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{g0(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,s}function pf(e){e.g||e.u||(e.Z=1,Mh(e.Ia,e),e.A=0)}function Na(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Hs(Oe(e.Ia,e),_f(e,e.A)),e.A++,!0)}L.Ia=function(){if(this.u=null,gf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Hs(Oe(this.eb,this),e)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ue(10),cr(this),gf(this))};function La(e){e.B!=null&&(B.clearTimeout(e.B),e.B=null)}function gf(e){e.g=new Vs(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Rt(e.sa);ue(t,"RID","rpc"),ue(t,"SID",e.I),ue(t,"CI",e.L?"0":"1"),ue(t,"AID",e.T),ue(t,"TYPE","xmlhttp"),qs(e,t),e.o&&e.s&&Pa(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=rr(Rt(t)),n.s=null,n.P=!0,Vh(n,e)}L.cb=function(){this.v!=null&&(this.v=null,cr(this),Na(this),Ue(19))};function Pi(e){e.v!=null&&(B.clearTimeout(e.v),e.v=null)}function mf(e,t){var n=null;if(e.g==t){Pi(e),La(e),e.g=null;var s=2}else if(bo(e.h,t))n=t.D,nf(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=ba(),Se(s,new Hh(s,n)),ur(e)}else pf(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&w0(e,t)||s==2&&Na(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:un(e,5);break;case 4:un(e,10);break;case 3:un(e,6);break;default:un(e,2)}}}function _f(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function un(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Oe(e.kb,e);n||(n=new pn("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||ki(n,"https"),rr(n)),m0(n.toString(),s)}else Ue(2);e.G=0,e.l&&e.l.va(t),yf(e),ff(e)}L.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function yf(e){if(e.G=0,e.la=[],e.l){const t=sf(e.h);(t.length!=0||e.i.length!=0)&&(Xl(e.la,t),Xl(e.la,e.i),e.h.i.length=0,da(e.i),e.i.length=0),e.l.ua()}}function vf(e,t,n){var s=n instanceof pn?Rt(n):new pn(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Oi(s,s.m);else{var i=B.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new pn(null,void 0);s&&ki(r,s),t&&(r.g=t),i&&Oi(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&ue(s,n,t),ue(s,"VER",e.ma),qs(e,s),s}function Ef(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new ge(new or({jb:!0})):new ge(e.ra),t.Ka(e.H),t}function wf(){}L=wf.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function Ze(e,t){Ie.call(this),this.g=new hf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Ci(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ci(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Jn(this)}Ae(Ze,Ie);Ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ue(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=vf(e,null,e.V),ur(e)};Ze.prototype.close=function(){Da(this.g)};Ze.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ea(e),e=n);t.i.push(new f0(t.ab++,e)),t.G==3&&ur(t)};Ze.prototype.M=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,Ze.X.M.call(this)};function If(e){Aa.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ae(If,Aa);function bf(){Ca.call(this),this.status=1}Ae(bf,Ca);function Jn(e){this.g=e}Ae(Jn,wf);Jn.prototype.xa=function(){Se(this.g,"a")};Jn.prototype.wa=function(e){Se(this.g,new If(e))};Jn.prototype.va=function(e){Se(this.g,new bf)};Jn.prototype.ua=function(){Se(this.g,"b")};Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;Ta.NO_ERROR=0;Ta.TIMEOUT=8;Ta.HTTP_ERROR=6;Zv.COMPLETE="complete";e0.EventType=Ws;Ws.OPEN="a";Ws.CLOSE="b";Ws.ERROR="c";Ws.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.Oa;ge.prototype.getLastErrorCode=ge.prototype.Ea;ge.prototype.getStatus=ge.prototype.aa;ge.prototype.getResponseJson=ge.prototype.Sa;ge.prototype.getResponseText=ge.prototype.fa;ge.prototype.send=ge.prototype.da;ge.prototype.setWithCredentials=ge.prototype.Ka;const oc="@firebase/firestore";/**
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
 */class Ce{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
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
 */let Gs="9.15.0";/**
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
 */const $n=new Zo("@firebase/firestore");function We(e,...t){if($n.logLevel<=se.DEBUG){const n=t.map(xa);$n.debug(`Firestore (${Gs}): ${e}`,...n)}}function Ma(e,...t){if($n.logLevel<=se.ERROR){const n=t.map(xa);$n.error(`Firestore (${Gs}): ${e}`,...n)}}function I0(e,...t){if($n.logLevel<=se.WARN){const n=t.map(xa);$n.warn(`Firestore (${Gs}): ${e}`,...n)}}function xa(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function Ua(e="Unexpected state"){const t=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: `+e;throw Ma(t),new Error(t)}function Di(e,t){e||Ua()}/**
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
 */const Ve={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ze extends Ot{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tf{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class b0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ce.UNAUTHENTICATED))}shutdown(){}}class T0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class S0{constructor(t){this.t=t,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Nn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{We("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(We("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Nn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(We("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Di(typeof s.accessToken=="string"),new Tf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Di(t===null||typeof t=="string"),new Ce(t)}}class A0{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Di(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class C0{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new A0(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k0{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&We("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,We("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{We("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):We("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Di(typeof n.token=="string"),this.A=n.token,new R0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function O0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class P0{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=O0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function Sf(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class D0{constructor(t,n,s,i,r,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ni{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ni&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var ac,Y;(Y=ac||(ac={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";function Mr(){return typeof document<"u"?document:null}class N0{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&We("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Fa{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Fa(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ze(Ve.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function L0(e,t){if(Ma("AsyncQueue",`${t}: ${e}`),Sf(e))return new ze(Ve.UNAVAILABLE,`${t}: ${e}`);throw e}function M0(e,t,n,s){if(t===!0&&s===!0)throw new ze(Ve.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function x0(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Ua()}function U0(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ze(Ve.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=x0(e);throw new ze(Ve.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const lc=new Map;class cc{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new ze(Ve.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ze(Ve.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,M0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Af{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ze(Ve.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ze(Ve.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new b0;switch(n.type){case"gapi":const s=n.client;return new C0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ze(Ve.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=lc.get(t);n&&(We("ComponentProvider","Removing Datastore"),lc.delete(t),n.terminate())}(this),Promise.resolve()}}function F0(e,t,n,s={}){var i;const r=(e=U0(e,Af))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&I0("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ce.MOCK_USER;else{o=sm(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ze(Ve.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ce(l)}e._authCredentials=new T0(new Tf(o,a))}}/**
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
 */class $0{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ce.UNAUTHENTICATED,this.clientId=P0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{We("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(We("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ze(Ve.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=L0(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}class j0{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new N0(this,"async_queue_retry"),this.Wc=()=>{const n=Mr();n&&We("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Mr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Mr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Nn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Sf(t))throw t;We("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ma("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Fa.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&Ua()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class B0 extends Af{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new j0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||W0(this),this._firestoreClient.terminate()}}function H0(e,t){const n=typeof e=="object"?e:Wu(),s=typeof e=="string"?e:t||"(default)",i=ta(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=em("firestore");r&&F0(i,...r)}return i}function W0(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new D0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new $0(e._authCredentials,e._appCheckCredentials,e._queue,s)}(function(e,t=!0){(function(n){Gs=n})(Ls),Un(new gn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new B0(new S0(n.getProvider("auth-internal")),new k0(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ze(Ve.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Kt(oc,"3.8.0",e),Kt(oc,"3.8.0","esm2017")})();const V0={apiKey:"AIzaSyBH8wU30GdqXR1_zjs9oCNmLoMsY0KqzHc",authDomain:"ease-7f317.firebaseapp.com",projectId:"ease-7f317",storageBucket:"ease-7f317.appspot.com",messagingSenderId:"672496361182",appId:"1:672496361182:web:f2fe928fc36237d1896c4f",measurementId:"G-YPCEGS2713"},Cf=Hu(V0);H0(Cf);const en=Iv(Cf),hr=yg("authStore",{state:()=>({user:{}}),actions:{init(){ay(en,e=>{e?(this.user={id:e.uid,email:e.email,img:e.photoURL,name:e.displayName,isAnonymous:e.isAnonymous,emailVerified:e.emailVerified,creationTime:e.metadata.creationTime},console.log(this.user)):(console.log("user sign out"),this.clearUser())})},registerNewUser(e){ty(en,e.email,e.password).then(t=>{t.user,this.updateUserInfo(e.fullName)}).catch(t=>{alert("Already used email please sign in instead.")})},signInEmailUser(e){ny(en,e.email,e.password).then(t=>{t.user}).catch(t=>{console.log(err.message)})},demoUser(){Y_(en).then(()=>{}).catch(e=>{console.log(e.message)})},signInGoogle(){const e=new dt;Dy(en,e).then(t=>{dt.credentialFromResult(t).accessToken,t.user}).catch(t=>{console.log(t.message)})},signOutUser(){ly(en).then(()=>{}).catch(e=>{})},updateUserInfo(e,t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xSz0eMW7GmpKukczOHvPWWGDqaBCqWA-Mw&usqp=CAU"){iy(en.currentUser,{displayName:e,photoURL:t})},clearUser(){this.user={}}}});const z0={class:"app"},K0={class:"main"},q0={__name:"App",setup(e){const t=hr();return qo(()=>t.init()),(n,s)=>{const i=gu("RouterView");return xe(),Xe("div",z0,[N("header",null,[ke(Bg)]),N("main",K0,[ke(i)])])}}},G0=zn(q0,[["__scopeId","data-v-b1045406"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Tn=typeof window<"u";function X0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function xr(e,t){const n={};for(const s in t){const i=t[s];n[s]=at(i)?i.map(e):e(i)}return n}const fs=()=>{},at=Array.isArray,J0=/\/$/,Y0=e=>e.replace(J0,"");function Ur(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=tE(s??t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Q0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function uc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Z0(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&jn(t.matched[s],n.matched[i])&&Rf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function jn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Rf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!eE(e[n],t[n]))return!1;return!0}function eE(e,t){return at(e)?hc(e,t):at(t)?hc(t,e):e===t}function hc(e,t){return at(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function tE(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Os;(function(e){e.pop="pop",e.push="push"})(Os||(Os={}));var ds;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ds||(ds={}));function nE(e){if(!e)if(Tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Y0(e)}const sE=/^[^#]+#/;function iE(e,t){return e.replace(sE,"#")+t}function rE(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function oE(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=rE(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function fc(e,t){return(history.state?history.state.position-t:-1)+e}const To=new Map;function aE(e,t){To.set(e,t)}function lE(e){const t=To.get(e);return To.delete(e),t}let cE=()=>location.protocol+"//"+location.host;function kf(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),uc(l,"")}return uc(n,e)+s+i}function uE(e,t,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const g=kf(e,location),v=n.value,I=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===v){o=null;return}F=I?p.position-I.position:0}else s(g);i.forEach(k=>{k(n.value,v,{delta:F,type:Os.pop,direction:F?F>0?ds.forward:ds.back:ds.unknown})})};function l(){o=n.value}function c(p){i.push(p);const g=()=>{const v=i.indexOf(p);v>-1&&i.splice(v,1)};return r.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:fr()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function dc(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?fr():null}}function hE(e){const{history:t,location:n}=window,s={value:kf(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:cE()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=ne({},t.state,dc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ne({},i.value,t.state,{forward:l,scroll:fr()});r(u.current,u,!0);const f=ne({},dc(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function fE(e){e=nE(e);const t=hE(e),n=uE(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ne({location:"",base:e,go:s,createHref:iE.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function dE(e){return typeof e=="string"||e&&typeof e=="object"}function Of(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pf=Symbol("");var pc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pc||(pc={}));function Bn(e,t){return ne(new Error,{type:e,[Pf]:!0},t)}function Et(e,t){return e instanceof Error&&Pf in e&&(t==null||!!(e.type&t))}const gc="[^/]+?",pE={sensitive:!1,strict:!1,start:!0,end:!0},gE=/[.+*?^${}()[\]/\\]/g;function mE(e,t){const n=ne({},pE,t),s=[];let i=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const p=c[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(gE,"\\$&"),g+=40;else if(p.type===1){const{value:v,repeatable:I,optional:F,regexp:k}=p;r.push({name:v,repeatable:I,optional:F});const $=k||gc;if($!==gc){g+=10;try{new RegExp(`(${$})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${v}" (${$}): `+z.message)}}let P=I?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;f||(P=F&&c.length<2?`(?:/${P})`:"/"+P),F&&(P+="?"),i+=P,g+=20,F&&(g+=-8),I&&(g+=-20),$===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",v=r[p-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:I,optional:F}=g,k=v in c?c[v]:"";if(at(k)&&!I)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const $=at(k)?k.join("/"):k;if(!$)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=$}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function _E(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function yE(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=_E(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(mc(s))return 1;if(mc(i))return-1}return i.length-s.length}function mc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const vE={type:0,value:""},EE=/[a-zA-Z0-9_]/;function wE(e){if(!e)return[[]];if(e==="/")return[[vE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:EE.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function IE(e,t,n){const s=mE(wE(e.path),n),i=ne(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function bE(e,t){const n=[],s=new Map;t=vc({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function r(u,f,p){const g=!p,v=TE(u);v.aliasOf=p&&p.record;const I=vc(t,u),F=[v];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of P)F.push(ne({},v,{components:p?p.record.components:v.components,path:z,aliasOf:p?p.record:v}))}let k,$;for(const P of F){const{path:z}=P;if(f&&z[0]!=="/"){const q=f.record.path,oe=q[q.length-1]==="/"?"":"/";P.path=f.record.path+(z&&oe+z)}if(k=IE(P,f,I),p?p.alias.push(k):($=$||k,$!==k&&$.alias.push(k),g&&u.name&&!yc(k)&&o(u.name)),v.children){const q=v.children;for(let oe=0;oe<q.length;oe++)r(q[oe],k,p&&p.children[oe])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&l(k)}return $?()=>{o($)}:fs}function o(u){if(Of(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&yE(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Df(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!yc(u)&&s.set(u.record.name,u)}function c(u,f){let p,g={},v,I;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw Bn(1,{location:u});I=p.record.name,g=ne(_c(f.params,p.keys.filter($=>!$.optional).map($=>$.name)),u.params&&_c(u.params,p.keys.map($=>$.name))),v=p.stringify(g)}else if("path"in u)v=u.path,p=n.find($=>$.re.test(v)),p&&(g=p.parse(v),I=p.record.name);else{if(p=f.name?s.get(f.name):n.find($=>$.re.test(f.path)),!p)throw Bn(1,{location:u,currentLocation:f});I=p.record.name,g=ne({},f.params,u.params),v=p.stringify(g)}const F=[];let k=p;for(;k;)F.unshift(k.record),k=k.parent;return{name:I,path:v,params:g,matched:F,meta:AE(F)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function _c(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function TE(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:SE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function SE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function yc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function AE(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function vc(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Df(e,t){return t.children.some(n=>n===e||Df(e,n))}const Nf=/#/g,CE=/&/g,RE=/\//g,kE=/=/g,OE=/\?/g,Lf=/\+/g,PE=/%5B/g,DE=/%5D/g,Mf=/%5E/g,NE=/%60/g,xf=/%7B/g,LE=/%7C/g,Uf=/%7D/g,ME=/%20/g;function $a(e){return encodeURI(""+e).replace(LE,"|").replace(PE,"[").replace(DE,"]")}function xE(e){return $a(e).replace(xf,"{").replace(Uf,"}").replace(Mf,"^")}function So(e){return $a(e).replace(Lf,"%2B").replace(ME,"+").replace(Nf,"%23").replace(CE,"%26").replace(NE,"`").replace(xf,"{").replace(Uf,"}").replace(Mf,"^")}function UE(e){return So(e).replace(kE,"%3D")}function FE(e){return $a(e).replace(Nf,"%23").replace(OE,"%3F")}function $E(e){return e==null?"":FE(e).replace(RE,"%2F")}function Li(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function jE(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Lf," "),o=r.indexOf("="),a=Li(o<0?r:r.slice(0,o)),l=o<0?null:Li(r.slice(o+1));if(a in t){let c=t[a];at(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Ec(e){let t="";for(let n in e){const s=e[n];if(n=UE(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(at(s)?s.map(r=>r&&So(r)):[s&&So(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function BE(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=at(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const HE=Symbol(""),wc=Symbol(""),ja=Symbol(""),Ff=Symbol(""),Ao=Symbol("");function es(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function xt(e,t,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Bn(4,{from:n,to:t})):f instanceof Error?a(f):dE(f)?a(Bn(2,{from:t,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},c=e.call(s&&s.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Fr(e,t,n,s){const i=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(WE(a)){const c=(a.__vccOpts||a)[t];c&&i.push(xt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=X0(c)?c.default:c;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&xt(p,n,s,r,o)()}))}}return i}function WE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ic(e){const t=gt(ja),n=gt(Ff),s=Te(()=>t.resolve(be(e.to))),i=Te(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(jn.bind(null,u));if(p>-1)return p;const g=bc(l[c-2]);return c>1&&bc(u)===g&&f[f.length-1].path!==g?f.findIndex(jn.bind(null,l[c-2])):p}),r=Te(()=>i.value>-1&&qE(n.params,s.value.params)),o=Te(()=>i.value>-1&&i.value===n.matched.length-1&&Rf(n.params,s.value.params));function a(l={}){return KE(l)?t[be(e.replace)?"replace":"push"](be(e.to)).catch(fs):Promise.resolve()}return{route:s,href:Te(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const VE=uu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ic,setup(e,{slots:t}){const n=yn(Ic(e)),{options:s}=gt(ja),i=Te(()=>({[Tc(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Tc(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:ku("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),zE=VE;function KE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qE(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!at(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function bc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Tc=(e,t,n)=>e??t??n,GE=uu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=gt(Ao),i=Te(()=>e.route||s.value),r=gt(wc,0),o=Te(()=>{let c=be(r);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Te(()=>i.value.matched[o.value]);li(wc,Te(()=>o.value+1)),li(HE,a),li(Ao,i);const l=jt();return On(()=>[l.value,a.value,e.name],([c,u,f],[p,g,v])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!jn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return Sc(n.default,{Component:p,route:c});const g=f.props[u],v=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=ku(p,ne({},v,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Sc(n.default,{Component:F,route:c})||F}}});function Sc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const XE=GE;function JE(e){const t=bE(e.routes,e),n=e.parseQuery||jE,s=e.stringifyQuery||Ec,i=e.history,r=es(),o=es(),a=es(),l=Sd(Nt);let c=Nt;Tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xr.bind(null,y=>""+y),f=xr.bind(null,$E),p=xr.bind(null,Li);function g(y,R){let A,M;return Of(y)?(A=t.getRecordMatcher(y),M=R):M=y,t.addRoute(M,A)}function v(y){const R=t.getRecordMatcher(y);R&&t.removeRoute(R)}function I(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function k(y,R){if(R=ne({},R||l.value),typeof y=="string"){const h=Ur(n,y,R.path),d=t.resolve({path:h.path},R),m=i.createHref(h.fullPath);return ne(h,d,{params:p(d.params),hash:Li(h.hash),redirectedFrom:void 0,href:m})}let A;if("path"in y)A=ne({},y,{path:Ur(n,y.path,R.path).path});else{const h=ne({},y.params);for(const d in h)h[d]==null&&delete h[d];A=ne({},y,{params:f(y.params)}),R.params=f(R.params)}const M=t.resolve(A,R),Z=y.hash||"";M.params=u(p(M.params));const fe=Q0(s,ne({},y,{hash:xE(Z),path:M.path})),G=i.createHref(fe);return ne({fullPath:fe,hash:Z,query:s===Ec?BE(y.query):y.query||{}},M,{redirectedFrom:void 0,href:G})}function $(y){return typeof y=="string"?Ur(n,y,l.value.path):ne({},y)}function P(y,R){if(c!==y)return Bn(8,{from:R,to:y})}function z(y){return K(y)}function q(y){return z(ne($(y),{replace:!0}))}function oe(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:A}=R;let M=typeof A=="function"?A(y):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=$(M):{path:M},M.params={}),ne({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function K(y,R){const A=c=k(y),M=l.value,Z=y.state,fe=y.force,G=y.replace===!0,h=oe(A);if(h)return K(ne($(h),{state:typeof h=="object"?ne({},Z,h.state):Z,force:fe,replace:G}),R||A);const d=A;d.redirectedFrom=R;let m;return!fe&&Z0(s,M,A)&&(m=Bn(16,{to:d,from:M}),Yt(M,M,!0,!1)),(m?Promise.resolve(m):J(d,M)).catch(_=>Et(_)?Et(_,2)?_:et(_):ae(_,d,M)).then(_=>{if(_){if(Et(_,2))return K(ne({replace:G},$(_.to),{state:typeof _.to=="object"?ne({},Z,_.to.state):Z,force:fe}),R||d)}else _=de(d,M,!0,G,Z);return Q(d,M,_),_})}function O(y,R){const A=P(y,R);return A?Promise.reject(A):Promise.resolve()}function J(y,R){let A;const[M,Z,fe]=YE(y,R);A=Fr(M.reverse(),"beforeRouteLeave",y,R);for(const h of M)h.leaveGuards.forEach(d=>{A.push(xt(d,y,R))});const G=O.bind(null,y,R);return A.push(G),bn(A).then(()=>{A=[];for(const h of r.list())A.push(xt(h,y,R));return A.push(G),bn(A)}).then(()=>{A=Fr(Z,"beforeRouteUpdate",y,R);for(const h of Z)h.updateGuards.forEach(d=>{A.push(xt(d,y,R))});return A.push(G),bn(A)}).then(()=>{A=[];for(const h of y.matched)if(h.beforeEnter&&!R.matched.includes(h))if(at(h.beforeEnter))for(const d of h.beforeEnter)A.push(xt(d,y,R));else A.push(xt(h.beforeEnter,y,R));return A.push(G),bn(A)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),A=Fr(fe,"beforeRouteEnter",y,R),A.push(G),bn(A))).then(()=>{A=[];for(const h of o.list())A.push(xt(h,y,R));return A.push(G),bn(A)}).catch(h=>Et(h,8)?h:Promise.reject(h))}function Q(y,R,A){for(const M of a.list())M(y,R,A)}function de(y,R,A,M,Z){const fe=P(y,R);if(fe)return fe;const G=R===Nt,h=Tn?history.state:{};A&&(M||G?i.replace(y.fullPath,ne({scroll:G&&h&&h.scroll},Z)):i.push(y.fullPath,Z)),l.value=y,Yt(y,R,A,G),et()}let ve;function je(){ve||(ve=i.listen((y,R,A)=>{if(!Xs.listening)return;const M=k(y),Z=oe(M);if(Z){K(ne(Z,{replace:!0}),M).catch(fs);return}c=M;const fe=l.value;Tn&&aE(fc(fe.fullPath,A.delta),fr()),J(M,fe).catch(G=>Et(G,12)?G:Et(G,2)?(K(G.to,M).then(h=>{Et(h,20)&&!A.delta&&A.type===Os.pop&&i.go(-1,!1)}).catch(fs),Promise.reject()):(A.delta&&i.go(-A.delta,!1),ae(G,M,fe))).then(G=>{G=G||de(M,fe,!1),G&&(A.delta&&!Et(G,8)?i.go(-A.delta,!1):A.type===Os.pop&&Et(G,20)&&i.go(-1,!1)),Q(M,fe,G)}).catch(fs)}))}let Le=es(),Ee=es(),me;function ae(y,R,A){et(y);const M=Ee.list();return M.length?M.forEach(Z=>Z(y,R,A)):console.error(y),Promise.reject(y)}function ie(){return me&&l.value!==Nt?Promise.resolve():new Promise((y,R)=>{Le.add([y,R])})}function et(y){return me||(me=!y,je(),Le.list().forEach(([R,A])=>y?A(y):R()),Le.reset()),y}function Yt(y,R,A,M){const{scrollBehavior:Z}=e;if(!Tn||!Z)return Promise.resolve();const fe=!A&&lE(fc(y.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return Wo().then(()=>Z(y,R,fe)).then(G=>G&&oE(G)).catch(G=>ae(G,y,R))}const tt=y=>i.go(y);let Fe;const En=new Set,Xs={currentRoute:l,listening:!0,addRoute:g,removeRoute:v,hasRoute:F,getRoutes:I,resolve:k,options:e,push:z,replace:q,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ee.add,isReady:ie,install(y){const R=this;y.component("RouterLink",zE),y.component("RouterView",XE),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),Tn&&!Fe&&l.value===Nt&&(Fe=!0,z(i.location).catch(Z=>{}));const A={};for(const Z in Nt)A[Z]=Te(()=>l.value[Z]);y.provide(ja,R),y.provide(Ff,yn(A)),y.provide(Ao,l);const M=y.unmount;En.add(y),y.unmount=function(){En.delete(y),En.size<1&&(c=Nt,ve&&ve(),ve=null,l.value=Nt,Fe=!1,me=!1),M()}}};return Xs}function bn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function YE(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(c=>jn(c,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>jn(c,l))||i.push(l))}return[n,s,i]}const QE={};function ZE(e,t){return xe(),Xe("p",null,"Testing")}const ew=zn(QE,[["render",ZE]]),tw="/assets/annie-spratt-1-e7fa5dd0.jpg";const lt=e=>(zo("data-v-f3c357dc"),e=e(),Ko(),e),nw={class:"form-container"},sw=lt(()=>N("div",{class:"form-design"},[N("img",{src:tw})],-1)),iw={class:"form-input-container"},rw=["onSubmit"],ow={key:0},aw=lt(()=>N("label",null,"FIRST NAME",-1)),lw=["value"],cw={key:1},uw=lt(()=>N("label",null,"LAST NAME",-1)),hw=["value"],fw=lt(()=>N("label",null,"EMAIL",-1)),dw=["value"],pw=lt(()=>N("label",null,"PASSWORD",-1)),gw=["value"],mw=lt(()=>N("input",{class:"form-submit-btn btns",type:"submit",value:"SUBMIT"},null,-1)),_w={key:2},yw=lt(()=>N("p",null,"Already have an account ",-1)),vw={key:3},Ew=lt(()=>N("p",null,"Create a new account",-1)),ww={class:"auth-btns"},Iw=lt(()=>N("i",{class:"fab fa-google"},null,-1)),bw=lt(()=>N("i",{class:"fas fa-user"},null,-1)),Tw=lt(()=>N("div",null,null,-1)),Sw={__name:"Form",props:{firstname:{type:String,default:""},lastname:{type:String,default:""},email:{type:String,default:""},password:{type:String,default:""}},setup(e){const t=e,n=hr(),s=jt(!0),i=Te(()=>s.value?"Sign Up":"Sign In"),r=()=>{const o={fullName:`${t.firstname} ${t.lastname}`,email:t.email,password:t.password};(o.fullName===""||o.email===""||o.password==="")&&alert("Please complete the form."),s.value?n.registerNewUser(o):n.signInEmailUser(o)};return(o,a)=>(xe(),Xe("div",nw,[sw,N("div",iw,[N("header",null,[N("h1",null,Oo(be(i)),1)]),N("form",{class:"form-input-grid",onSubmit:ag(r,["prevent"])},[s.value?(xe(),Xe("div",ow,[aw,N("input",{value:e.firstname,onInput:a[0]||(a[0]=l=>o.$emit("update:firstname",l.target.value)),class:"form-inputs",type:"text",placeholder:"John"},null,40,lw)])):an("",!0),s.value?(xe(),Xe("div",cw,[uw,N("input",{value:e.lastname,onInput:a[1]||(a[1]=l=>o.$emit("update:lastname",l.target.value)),class:"form-inputs",type:"text",placeholder:"Doe"},null,40,hw)])):an("",!0),N("div",null,[fw,N("input",{value:e.email,onInput:a[2]||(a[2]=l=>o.$emit("update:email",l.target.value)),class:"form-inputs",type:"email",placeholder:"eg - johndoe@gmail.com"},null,40,dw)]),N("div",null,[pw,N("input",{value:e.password,onInput:a[3]||(a[3]=l=>o.$emit("update:password",l.target.value)),class:"form-inputs",type:"password",placeholder:"eg - 8*jfaVnci"},null,40,gw)]),mw,s.value?(xe(),Xe("span",_w,[yw,N("p",{onClick:a[4]||(a[4]=l=>s.value=!s.value)}," Sign in ? ")])):an("",!0),s.value?an("",!0):(xe(),Xe("span",vw,[Ew,N("p",{onClick:a[5]||(a[5]=l=>s.value=!s.value)}," Sign up ? ")]))],40,rw),N("div",ww,[N("button",{class:"google-btn btns",onClick:a[6]||(a[6]=(...l)=>be(n).signInGoogle&&be(n).signInGoogle(...l))},[Iw,vs(" Google ")]),N("button",{class:"demo-btn btns",onClick:a[7]||(a[7]=(...l)=>be(n).demoUser&&be(n).demoUser(...l))},[bw,vs(" Demo ")])]),Tw])]))}},Aw=zn(Sw,[["__scopeId","data-v-f3c357dc"]]);const Yn=e=>(zo("data-v-402d1138"),e=e(),Ko(),e),Cw={class:"profile-container"},Rw=Yn(()=>N("div",{class:"primary-grid"},[N("span",null,[N("i",{class:"cart fas fa-shopping-cart"}),N("p",null,"CartList")]),N("span",null,[N("i",{class:"heart fas fa-heart"}),N("p",null,"WishList")])],-1)),kw={class:"secoundary-grid"},Ow=Yn(()=>N("h3",null,"Account Settings",-1)),Pw=Yn(()=>N("span",null,[N("i",{class:"fas fa-user"}),N("p",null,"Edit Profile")],-1)),Dw=Yn(()=>N("span",null,[N("i",{class:"fas fa-circle-half-stroke"}),N("p",null,"Theme")],-1)),Nw=Yn(()=>N("i",{class:"fas fa-sign-out"},null,-1)),Lw=Yn(()=>N("p",null,"Logout",-1)),Mw=[Nw,Lw],xw={__name:"Profile",setup(e){const t=hr();Te(()=>Rg(t.user.creationTime,"DD-MM-YY").value);const n=Te(()=>{let s="Unknown";return t.user.isAnonymous===!1&&(s=t.user.name),`Hey! ${s}`});return(s,i)=>(xe(),Xe("div",Cw,[N("header",null,[N("span",null,[N("i",{class:"fas fa-chevron-left",onClick:i[0]||(i[0]=r=>s.$router.go(-1))}),N("p",null,Oo(be(n)),1)])]),N("main",null,[Rw,N("div",kw,[Ow,Pw,Dw,N("span",{onClick:i[1]||(i[1]=(...r)=>be(t).signOutUser&&be(t).signOutUser(...r))},Mw)])])]))}},Uw=zn(xw,[["__scopeId","data-v-402d1138"]]);const Fw={__name:"Authpage",setup(e){const t=hr(),n=yn({firstname:"",lastname:"",email:"",password:""});return(s,i)=>(xe(),Xe(Ge,null,[be(t).user.id?an("",!0):(xe(),Yr(Aw,{key:0,firstname:n.firstname,"onUpdate:firstname":i[0]||(i[0]=r=>n.firstname=r),lastname:n.lastname,"onUpdate:lastname":i[1]||(i[1]=r=>n.lastname=r),email:n.email,"onUpdate:email":i[2]||(i[2]=r=>n.email=r),password:n.password,"onUpdate:password":i[3]||(i[3]=r=>n.password=r)},null,8,["firstname","lastname","email","password"])),be(t).user.id?(xe(),Yr(Uw,{key:1})):an("",!0)],64))}},$w=zn(Fw,[["__scopeId","data-v-63129a2e"]]),jw=[{path:"/",name:"home",component:ew},{path:"/auth",name:"auth",component:$w}],Bw=JE({history:fE("/"),routes:jw}),Ba=ug(G0),Hw=dg();Ba.use(Hw);Ba.use(Bw);Ba.mount("#app");
