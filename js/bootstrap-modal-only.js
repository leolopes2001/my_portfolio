/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/ !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).bootstrap=t()}(this,function(){"use strict";let e=new Map,t={set(t,i,s){e.has(t)||e.set(t,new Map);let n=e.get(t);n.has(i)||0===n.size?n.set(i,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,i)=>e.has(t)&&e.get(t).get(i)||null,remove(t,i){if(!e.has(t))return;let s=e.get(t);s.delete(i),0===s.size&&e.delete(t)}},i="transitionend",s=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),n=e=>{e.dispatchEvent(new Event(i))},r=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),o=e=>r(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(s(e)):null,l=e=>{if(!r(e)||0===e.getClientRects().length)return!1;let t="visible"===getComputedStyle(e).getPropertyValue("visibility"),i=e.closest("details:not([open])");if(!i)return t;if(i!==e){let s=e.closest("summary");if(s&&s.parentNode!==i||null===s)return!1}return t},a=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),h=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?h(e.parentNode):null},c=()=>{},u=e=>{e.offsetHeight},d=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],g=()=>"rtl"===document.documentElement.dir,m=e=>{var t;t=()=>{let t=d();if(t){let i=e.NAME,s=t.fn[i];t.fn[i]=e.jQueryInterface,t.fn[i].Constructor=e,t.fn[i].noConflict=()=>(t.fn[i]=s,e.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",()=>{for(let e of f)e()}),f.push(t)):t()},p=(e,t=[],i=e)=>"function"==typeof e?e(...t):i,b=(e,t,s=!0)=>{if(!s)return void p(e);let r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:i}=window.getComputedStyle(e),s=Number.parseFloat(t),n=Number.parseFloat(i);return s||n?(t=t.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(i))):0})(t)+5,o=!1,l=({target:s})=>{s===t&&(o=!0,t.removeEventListener(i,l),p(e))};t.addEventListener(i,l),setTimeout(()=>{o||n(t)},r)},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,A=/::\d+$/,E={},w=1,C={mouseenter:"mouseover",mouseleave:"mouseout"},T=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll",]);function k(e,t){return t&&`${t}::${w++}`||e.uidEvent||w++}function $(e){let t=k(e);return e.uidEvent=t,E[t]=E[t]||{},E[t]}function D(e,t,i=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===i)}function N(e,t,i){let s="string"==typeof t,n=P(e);return T.has(n)||(n=e),[s,s?i:t||i,n]}function S(e,t,i,s,n){var r,o,l,a,h,c;if("string"!=typeof t||!e)return;let[u,d,f]=N(t,i,s);t in C&&(d=(r=d,function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return r.call(this,e)}));let g=$(e),m=g[f]||(g[f]={}),p=D(m,d,u?i:null);if(p)return void(p.oneOff=p.oneOff&&n);let b=k(d,t.replace(v,"")),y=u?(o=e,l=i,a=d,function e(t){let i=o.querySelectorAll(l);for(let{target:s}=t;s&&s!==this;s=s.parentNode)for(let n of i)if(n===s)return M(t,{delegateTarget:s}),e.oneOff&&F.off(o,t.type,l,a),a.apply(s,[t])}):(h=e,c=d,function e(t){return M(t,{delegateTarget:h}),e.oneOff&&F.off(h,t.type,c),c.apply(h,[t])});y.delegationSelector=u?i:null,y.callable=d,y.oneOff=n,y.uidEvent=b,m[b]=y,e.addEventListener(f,y,u)}function L(e,t,i,s,n){let r=D(t[i],s,n);r&&(e.removeEventListener(i,r,Boolean(n)),delete t[i][r.uidEvent])}function O(e,t,i,s){let n=t[i]||{};for(let[r,o]of Object.entries(n))r.includes(s)&&L(e,t,i,o.callable,o.delegationSelector)}function P(e){return C[e=e.replace(y,"")]||e}let F={on(e,t,i,s){S(e,t,i,s,!1)},one(e,t,i,s){S(e,t,i,s,!0)},off(e,t,i,s){if("string"!=typeof t||!e)return;let[n,r,o]=N(t,i,s),l=o!==t,a=$(e),h=a[o]||{},c=t.startsWith(".");if(void 0===r){if(c)for(let u of Object.keys(a))O(e,a,u,t.slice(1));for(let[d,f]of Object.entries(h)){let g=d.replace(A,"");l&&!t.includes(g)||L(e,a,o,f.callable,f.delegationSelector)}}else{if(!Object.keys(h).length)return;L(e,a,o,r,n?i:null)}},trigger(e,t,i){if("string"!=typeof t||!e)return null;let s=d(),n=null,r=!0,o=!0,l=!1;t!==P(t)&&s&&(n=s.Event(t,i),s(e).trigger(n),r=!n.isPropagationStopped(),o=!n.isImmediatePropagationStopped(),l=n.isDefaultPrevented());let a=M(new Event(t,{bubbles:r,cancelable:!0}),i);return l&&a.preventDefault(),o&&e.dispatchEvent(a),a.defaultPrevented&&n&&n.preventDefault(),a}};function M(e,t={}){for(let[i,s]of Object.entries(t))try{e[i]=s}catch(n){Object.defineProperty(e,i,{configurable:!0,get:()=>s})}return e}function _(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function x(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}let j={setDataAttribute(e,t,i){e.setAttribute(`data-bs-${x(t)}`,i)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${x(t)}`)},getDataAttributes(e){if(!e)return{};let t={},i=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(let s of i){let n=s.replace(/^bs/,"");t[n=n.charAt(0).toLowerCase()+n.slice(1,n.length)]=_(e.dataset[s])}return t},getDataAttribute:(e,t)=>_(e.getAttribute(`data-bs-${x(t)}`))};class z{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let i=r(t)?j.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...r(t)?j.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){var i;for(let[s,n]of Object.entries(t)){let o=e[s],l=r(o)?"element":null==(i=o)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!RegExp(n).test(l))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${l}" but expected type "${n}".`)}}}class I extends z{constructor(e,i){super(),(e=o(e))&&(this._element=e,this._config=this._getConfig(i),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){for(let e of(t.remove(this._element,this.constructor.DATA_KEY),F.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this)))this[e]=null}_queueCallback(e,t,i=!0){b(e,t,i)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(o(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}let H=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let i=e.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),t=i&&"#"!==i?s(i.trim()):null}return t},W={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let i=[],s=e.parentNode.closest(t);for(;s;)i.push(s),s=s.parentNode.closest(t);return i},prev(e,t){let i=e.previousElementSibling;for(;i;){if(i.matches(t))return[i];i=i.previousElementSibling}return[]},next(e,t){let i=e.nextElementSibling;for(;i;){if(i.matches(t))return[i];i=i.nextElementSibling}return[]},focusableChildren(e){let t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]',].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(e=>!a(e)&&l(e))},getSelectorFromElement(e){let t=H(e);return t&&W.findOne(t)?t:null},getElementFromSelector(e){let t=H(e);return t?W.findOne(t):null},getMultipleElementsFromSelector(e){let t=H(e);return t?W.find(t):[]}},q=(e,t="hide")=>{let i=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;F.on(document,i,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),a(this))return;let n=W.getElementFromSelector(this)||this.closest(`.${s}`);e.getOrCreateInstance(n)[t]()})},B="backdrop",V="show",Y=`mousedown.bs.${B}`,K={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},R={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Q extends z{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return K}static get DefaultType(){return R}static get NAME(){return B}show(e){if(!this._config.isVisible)return void p(e);this._append();let t=this._getElement();this._config.isAnimated&&u(t),t.classList.add(V),this._emulateAnimation(()=>{p(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(V),this._emulateAnimation(()=>{this.dispose(),p(e)})):p(e)}dispose(){this._isAppended&&(F.off(this._element,Y),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){let e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=o(e.rootElement),e}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),F.on(e,Y,()=>{p(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){b(e,this._getElement(),this._config.isAnimated)}}let U=".bs.focustrap",G=`focusin${U}`,Z=`keydown.tab${U}`,J="backward",X={autofocus:!0,trapElement:null},ee={autofocus:"boolean",trapElement:"element"};class et extends z{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return X}static get DefaultType(){return ee}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),F.off(document,U),F.on(document,G,e=>this._handleFocusin(e)),F.on(document,Z,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,F.off(document,U))}_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let i=W.focusableChildren(t);0===i.length?t.focus():this._lastTabNavDirection===J?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?J:"forward")}}let ei=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",es=".sticky-top",en="padding-right",er="margin-right";class eo{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,en,t=>t+e),this._setElementAttributes(ei,en,t=>t+e),this._setElementAttributes(es,er,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,en),this._resetElementAttributes(ei,en),this._resetElementAttributes(es,er)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,i){let s=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+s)return;this._saveInitialAttribute(e,t);let n=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${i(Number.parseFloat(n))}px`)})}_saveInitialAttribute(e,t){let i=e.style.getPropertyValue(t);i&&j.setDataAttribute(e,t,i)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let i=j.getDataAttribute(e,t);null!==i?(j.removeDataAttribute(e,t),e.style.setProperty(t,i)):e.style.removeProperty(t)})}_applyManipulationCallback(e,t){if(r(e))t(e);else for(let i of W.find(e,this._element))t(i)}}let el=".bs.modal",ea=`hide${el}`,eh=`hidePrevented${el}`,ec=`hidden${el}`,eu=`show${el}`,ed=`shown${el}`,ef=`resize${el}`,eg=`click.dismiss${el}`,e8=`mousedown.dismiss${el}`,em=`keydown.dismiss${el}`,ep=`click${el}.data-api`,eb="modal-open",ev="show",ey="modal-static",eA={backdrop:!0,focus:!0,keyboard:!0},eE={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ew extends I{constructor(e,t){super(e,t),this._dialog=W.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new eo,this._addEventListeners()}static get Default(){return eA}static get DefaultType(){return eE}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||F.trigger(this._element,eu,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(eb),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(F.trigger(this._element,ea).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ev),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){F.off(window,el),F.off(this._dialog,el),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Q({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new et({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let t=W.findOne(".modal-body",this._dialog);t&&(t.scrollTop=0),u(this._element),this._element.classList.add(ev),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,F.trigger(this._element,ed,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){F.on(this._element,em,e=>{"Escape"===e.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),F.on(window,ef,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),F.on(this._element,e8,e=>{F.one(this._element,eg,t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(eb),this._resetAdjustments(),this._scrollBar.reset(),F.trigger(this._element,ec)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(F.trigger(this._element,eh).defaultPrevented)return;let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;"hidden"===t||this._element.classList.contains(ey)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(ey),this._queueCallback(()=>{this._element.classList.remove(ey),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),i=t>0;if(i&&!e){let s=g()?"paddingLeft":"paddingRight";this._element.style[s]=`${t}px`}if(!i&&e){let n=g()?"paddingRight":"paddingLeft";this._element.style[n]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){let i=ew.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===i[e])throw TypeError(`No method named "${e}"`);i[e](t)}})}}F.on(document,ep,'[data-bs-toggle="modal"]',function(e){let t=W.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),F.one(t,eu,e=>{e.defaultPrevented||F.one(t,ec,()=>{l(this)&&this.focus()})});let i=W.findOne(".modal.show");i&&ew.getInstance(i).hide(),ew.getOrCreateInstance(t).toggle(this)}),q(ew),m(ew);let eC=".bs.offcanvas",eT=".data-api",ek=`load${eC}${eT}`,e$="show",eD="showing",eN="hiding",eS=".offcanvas.show",eL=`show${eC}`,e9=`shown${eC}`,eO=`hide${eC}`,eP=`hidePrevented${eC}`,eF=`hidden${eC}`,eM=`resize${eC}`,e_=`click${eC}${eT}`,ex=`keydown.dismiss${eC}`,ej={backdrop:!0,keyboard:!0,scroll:!1},ez={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class eI extends I{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ej}static get DefaultType(){return ez}static get NAME(){return"offcanvas"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||F.trigger(this._element,eL,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new eo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(eD),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(e$),this._element.classList.remove(eD),F.trigger(this._element,e9,{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(F.trigger(this._element,eO).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(eN),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(e$,eN),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new eo().reset(),F.trigger(this._element,eF)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let e=Boolean(this._config.backdrop);return new Q({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{"static"!==this._config.backdrop?this.hide():F.trigger(this._element,eP)}:null})}_initializeFocusTrap(){return new et({trapElement:this._element})}_addEventListeners(){F.on(this._element,ex,e=>{"Escape"===e.key&&(this._config.keyboard?this.hide():F.trigger(this._element,eP))})}static jQueryInterface(e){return this.each(function(){let t=eI.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw TypeError(`No method named "${e}"`);t[e](this)}})}}F.on(document,e_,'[data-bs-toggle="offcanvas"]',function(e){let t=W.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),a(this))return;F.one(t,eF,()=>{l(this)&&this.focus()});let i=W.findOne(eS);i&&i!==t&&eI.getInstance(i).hide(),eI.getOrCreateInstance(t).toggle(this)}),F.on(window,ek,()=>{for(let e of W.find(eS))eI.getOrCreateInstance(e).show()}),F.on(window,eM,()=>{for(let e of W.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&eI.getOrCreateInstance(e).hide()}),q(eI),m(eI);let eH={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},eW=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href",]),eq=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,eB=(e,t)=>{let i=e.nodeName.toLowerCase();return t.includes(i)?!eW.has(i)||Boolean(eq.test(e.nodeValue)):t.filter(e=>e instanceof RegExp).some(e=>e.test(i))},eV={allowList:eH,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},eY={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},eK={entry:"(string|element|function|null)",selector:"(string|element)"};class eR extends z{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return eV}static get DefaultType(){return eY}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement("div");for(let[t,i]of(e.innerHTML=this._maybeSanitize(this._config.template),Object.entries(this._config.content)))this._setContent(e,i,t);let s=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&s.classList.add(...n.split(" ")),s}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,i]of Object.entries(e))super._typeCheckConfig({selector:t,entry:i},eK)}_setContent(e,t,i){let s=W.findOne(i,e);s&&((t=this._resolvePossibleFunction(t))?r(t)?this._putElementInTemplate(o(t),s):this._config.html?s.innerHTML=this._maybeSanitize(t):s.textContent=t:s.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,i){if(!e.length)return e;if(i&&"function"==typeof i)return i(e);let s=new window.DOMParser().parseFromString(e,"text/html"),n=[].concat(...s.body.querySelectorAll("*"));for(let r of n){let o=r.nodeName.toLowerCase();if(!Object.keys(t).includes(o)){r.remove();continue}let l=[].concat(...r.attributes),a=[].concat(t["*"]||[],t[o]||[]);for(let h of l)eB(h,a)||r.removeAttribute(h.nodeName)}return s.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return p(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}let eQ=new Set(["sanitize","allowList","sanitizeFn"]),eU="fade",e1="show",e3=".modal",e4="hide.bs.modal",e0="hover",eG="focus",eZ={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},e2={allowList:eH,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},e7={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class eJ extends I{constructor(e,t){if(void 0===vi)throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return e2}static get DefaultType(){return e7}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),F.off(this._element.closest(e3),e4,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;let e=F.trigger(this._element,this.constructor.eventName("show")),t=(h(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();let i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));let{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),F.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(e1),"ontouchstart"in document.documentElement)for(let n of[].concat(...document.body.children))F.on(n,"mouseover",c);this._queueCallback(()=>{F.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!F.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(e1),"ontouchstart"in document.documentElement)for(let e of[].concat(...document.body.children))F.off(e,"mouseover",c);this._activeTrigger.click=!1,this._activeTrigger[eG]=!1,this._activeTrigger[e0]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),F.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(eU,e1),t.classList.add(`bs-${this.constructor.NAME}-auto`);let i=(e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute("id",i),this._isAnimated()&&t.classList.add(eU),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new eR({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(eU)}_isShown(){return this.tip&&this.tip.classList.contains(e1)}_createPopper(e){let t=p(this._config.placement,[this,e,this._element]),i=eZ[t.toUpperCase()];return bi(this._element,e,this._getPopperConfig(i))}_getOffset(){let{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return p(e,[this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}},]};return{...t,...p(this._config.popperConfig,[t])}}_setListeners(){let e=this._config.trigger.split(" ");for(let t of e)if("click"===t)F.on(this._element,this.constructor.eventName("click"),this._config.selector,e=>{this._initializeOnDelegatedTarget(e).toggle()});else if("manual"!==t){let i=t===e0?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),s=t===e0?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");F.on(this._element,i,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?eG:e0]=!0,t._enter()}),F.on(this._element,s,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?eG:e0]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},F.on(this._element.closest(e3),e4,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=j.getDataAttributes(this._element);for(let i of Object.keys(t))eQ.has(i)&&delete t[i];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:o(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,i]of Object.entries(this._config))this.constructor.Default[t]!==i&&(e[t]=i);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){let t=eJ.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw TypeError(`No method named "${e}"`);t[e]()}})}}return m(eJ),{Modal:ew}});