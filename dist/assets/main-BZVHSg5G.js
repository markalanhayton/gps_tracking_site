var ft=Object.defineProperty;var mt=(r,t,e)=>t in r?ft(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var A=(r,t,e)=>mt(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,V=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),G=new WeakMap;let st=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=G.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&G.set(e,t))}return t}toString(){return this.cssText}};const $t=r=>new st(typeof r=="string"?r:r+"",void 0,W),O=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new st(e,r,W)},gt=(r,t)=>{if(V)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},q=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return $t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:yt,getOwnPropertyDescriptor:vt,getOwnPropertyNames:At,getOwnPropertySymbols:bt,getPrototypeOf:xt}=Object,g=globalThis,K=g.trustedTypes,Et=K?K.emptyScript:"",L=g.reactiveElementPolyfillSupport,w=(r,t)=>r,j={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},rt=(r,t)=>!_t(r,t),J={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&yt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=vt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const c=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...At(e),...bt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(q(i))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:j;this._$Em=i,this[i]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??rt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[w("elementProperties")]=new Map,b[w("finalized")]=new Map,L==null||L({ReactiveElement:b}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,R=P.trustedTypes,Y=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,ot="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+$,St=`<${nt}>`,v=document,C=()=>v.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",F=Array.isArray,wt=r=>F(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,Q=/>/g,_=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,tt=/"/g,at=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),T=Pt(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),et=new WeakMap,y=v.createTreeWalker(v,129);function lt(r,t){if(!F(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const Ct=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=S;for(let c=0;c<e;c++){const a=r[c];let h,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=Z:p[1]!==void 0?n=Q:p[2]!==void 0?(at.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=i??S,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?_:p[3]==='"'?tt:X):n===tt||n===X?n=_:n===Z||n===Q?n=S:(n=_,i=void 0);const m=n===_&&r[c+1].startsWith("/>")?" ":"";o+=n===S?a+St:l>=0?(s.push(h),a.slice(0,l)+ot+a.slice(l)+$+m):a+$+(l===-2?c:m)}return[lt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class k{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[h,p]=Ct(t,e);if(this.el=k.createElement(h,s),y.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=y.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ot)){const u=p[n++],m=i.getAttribute(l).split($),M=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:M[2],strings:m,ctor:M[1]==="."?kt:M[1]==="?"?Ot:M[1]==="@"?Tt:z}),i.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:o}),i.removeAttribute(l));if(at.test(i.tagName)){const l=i.textContent.split($),u=l.length-1;if(u>0){i.textContent=R?R.emptyScript:"";for(let m=0;m<u;m++)i.append(l[m],C()),y.nextNode(),a.push({type:2,index:++o});i.append(l[u],C())}}}else if(i.nodeType===8)if(i.data===nt)a.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf($,l+1))!==-1;)a.push({type:7,index:o}),l+=$.length-1}o++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function E(r,t,e=r,s){var n,c;if(t===x)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);y.currentNode=i;let o=y.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new H(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new Ht(o,this,t)),this._$AV.push(h),a=s[++c]}n!==(a==null?void 0:a.index)&&(o=y.nextNode(),n++)}return y.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=k.createElement(lt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new Ut(i,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new k(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new H(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const c=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=E(this,c[s+a],e,a),h===x&&(h=this._$AH[a]),n||(n=!U(h)||h!==this._$AH[a]),h===d?t=d:t!==d&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class kt extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ot extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Tt extends z{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===x)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const D=P.litHtmlPolyfillSupport;D==null||D(k,H),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.1");const Mt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new H(t.insertBefore(C(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var it;f._$litElement$=!0,f.finalized=!0,(it=globalThis.litElementHydrateSupport)==null||it.call(globalThis,{LitElement:f});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class ct extends f{render(){return T`
      <nav>
        <a href="/index.html" class="logo">FleetTrack Pro</a>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/src/pages/products.html">Products</a></li>
          <li><a href="/src/pages/about.html">About</a></li>
          <li><a href="/src/pages/contact.html">Contact</a></li>
        </ul>
      </nav>
    `}}A(ct,"styles",O`
    :host {
      display: block;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #646cff;
      text-decoration: none;
    }
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a {
      color: #213547;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      color: #646cff;
    }
  `);customElements.define("nav-bar",ct);class ht extends f{render(){return T`
      <div class="hero-content">
        <h1>Track Your Fleet in Real-Time</h1>
        <p>Optimize routes, reduce costs, and improve efficiency with our advanced GPS tracking solutions</p>
        <a href="/contact" class="cta-button">Get Started</a>
      </div>
    `}}A(ht,"styles",O`
    :host {
      display: block;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                  url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');
      background-size: cover;
      background-position: center;
      padding: 6rem 2rem;
      text-align: center;
      color: white;
    }
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    .cta-button {
      background: #646cff;
      color: white;
      padding: 1rem 2rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
    }
  `);customElements.define("hero-section",ht);class dt extends f{render(){return T`
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-map-marked-alt"></i></div>
          <h3>Real-Time Tracking</h3>
          <p>Monitor your fleet's location and status in real-time</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
          <h3>Analytics</h3>
          <p>Detailed reports and insights for better decision making</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-gas-pump"></i></div>
          <h3>Fuel Management</h3>
          <p>Optimize fuel consumption and reduce costs</p>
        </div>
      </div>
    `}}A(dt,"styles",O`
    :host {
      display: block;
      padding: 2rem;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .feature-card {
      padding: 1.5rem;
      background: #f5f5f5;
      border-radius: 8px;
      text-align: center;
    }
    .feature-icon {
      font-size: 2rem;
      color: #646cff;
      margin-bottom: 1rem;
    }
  `);customElements.define("features-section",dt);class pt extends f{render(){return T`
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Basic</h3>
          <div class="price">$29/mo</div>
          <ul class="features-list">
            <li>Up to 5 vehicles</li>
            <li>Real-time tracking</li>
            <li>Basic reports</li>
          </ul>
          <a href="/contact" class="cta-button">Get Started</a>
        </div>
        <div class="pricing-card">
          <h3>Pro</h3>
          <div class="price">$49/mo</div>
          <ul class="features-list">
            <li>Up to 15 vehicles</li>
            <li>Advanced analytics</li>
            <li>Fuel management</li>
          </ul>
          <a href="/contact" class="cta-button">Get Started</a>
        </div>
        <div class="pricing-card">
          <h3>Enterprise</h3>
          <div class="price">$99/mo</div>
          <ul class="features-list">
            <li>Unlimited vehicles</li>
            <li>Custom solutions</li>
            <li>24/7 support</li>
          </ul>
          <a href="/contact" class="cta-button">Contact Sales</a>
        </div>
      </div>
    `}}A(pt,"styles",O`
    :host {
      display: block;
      padding: 2rem;
    }
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .pricing-card {
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }
    .price {
      font-size: 2.5rem;
      font-weight: bold;
      color: #646cff;
      margin: 1rem 0;
    }
    .features-list {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
    }
    .features-list li {
      margin: 0.5rem 0;
    }
    .cta-button {
      background: #646cff;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      display: inline-block;
      margin-top: 1rem;
    }
  `);customElements.define("pricing-section",pt);class ut extends f{render(){return T`
      <div class="footer-content">
        <div>
          <h3>FleetTrack Pro</h3>
          <p>Advanced GPS fleet tracking solutions for modern businesses.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/src/pages/products.html">Products</a></li>
            <li><a href="/src/pages/about.html">About Us</a></li>
            <li><a href="/src/pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: info@fleettrackpro.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Fleet Street, City, Country</li>
          </ul>
        </div>
      </div>
    `}}A(ut,"styles",O`
    :host {
      display: block;
      background: #213547;
      color: white;
      padding: 3rem 2rem;
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    h3 {
      color: #646cff;
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin-bottom: 0.5rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: #646cff;
    }
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    .social-links a {
      font-size: 1.5rem;
    }
  `);customElements.define("site-footer",ut);
