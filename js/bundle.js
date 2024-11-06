(()=>{var t={354:function(t,e,n){var o;!function(r){var i=r.Promise,s=i&&"resolve"in i&&"reject"in i&&"all"in i&&"race"in i&&function(){var t;return new i((function(e){t=e})),"function"==typeof t}();e?(e.Promise=s?i:q,e.Polyfill=q):void 0===(o=function(){return s?i:q}.call(e,n,e,t))||(t.exports=o);var a="pending",c="sealed",l="fulfilled",d="rejected",u=function(){};function h(t){return"[object Array]"===Object.prototype.toString.call(t)}var f,p="undefined"!=typeof setImmediate?setImmediate:setTimeout,m=[];function y(){for(var t=0;t<m.length;t++)m[t][0](m[t][1]);m=[],f=!1}function _(t,e){m.push([t,e]),f||(f=!0,p(y,0))}function v(t){var e=t.owner,n=e.state_,o=e.data_,r=t[n],i=t.then;if("function"==typeof r){n=l;try{o=r(o)}catch(t){x(i,t)}}g(i,o)||(n===l&&w(i,o),n===d&&x(i,o))}function g(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"==typeof e)){var o=e.then;if("function"==typeof o)return o.call(e,(function(o){n||(n=!0,e!==o?w(t,o):b(t,o))}),(function(e){n||(n=!0,x(t,e))})),!0}}catch(e){return n||x(t,e),!0}return!1}function w(t,e){t!==e&&g(t,e)||b(t,e)}function b(t,e){t.state_===a&&(t.state_=c,t.data_=e,_(E,t))}function x(t,e){t.state_===a&&(t.state_=c,t.data_=e,_(S,t))}function L(t){var e=t.then_;t.then_=void 0;for(var n=0;n<e.length;n++)v(e[n])}function E(t){t.state_=l,L(t)}function S(t){t.state_=d,L(t)}function q(t){if("function"!=typeof t)throw new TypeError("Promise constructor takes a function argument");if(this instanceof q==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],function(t,e){function n(t){x(e,t)}try{t((function(t){w(e,t)}),n)}catch(t){n(t)}}(t,this)}q.prototype={constructor:q,state_:a,then_:null,data_:void 0,then:function(t,e){var n={owner:this,then:new this.constructor(u),fulfilled:t,rejected:e};return this.state_===l||this.state_===d?_(v,n):this.then_.push(n),n.then},catch:function(t){return this.then(null,t)}},q.all=function(t){if(!h(t))throw new TypeError("You must pass an array to Promise.all().");return new this((function(e,n){var o=[],r=0;function i(t){return r++,function(n){o[t]=n,--r||e(o)}}for(var s,a=0;a<t.length;a++)(s=t[a])&&"function"==typeof s.then?s.then(i(a),n):o[a]=s;r||e(o)}))},q.race=function(t){if(!h(t))throw new TypeError("You must pass an array to Promise.race().");return new this((function(e,n){for(var o,r=0;r<t.length;r++)(o=t[r])&&"function"==typeof o.then?o.then(e,n):e(o)}))},q.resolve=function(t){return t&&"object"==typeof t&&t.constructor===this?t:new this((function(e){e(t)}))},q.reject=function(t){return new this((function(e,n){n(t)}))}}("undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:this)},914:()=>{window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";n(914);function t(t){const e=document.querySelector(t);e.classList.add("sidepanel__hide"),e.classList.remove("sidepanel__show"),document.body.style.overflow=""}function e(t){const e=document.querySelector(t);e.classList.add("sidepanel__show"),e.classList.remove("sidepanel__hide")}n(354).Promise,window.addEventListener("DOMContentLoaded",(()=>{(function(t,e,n,o){const r=document.querySelectorAll(t),i=document.querySelector(n),s=document.querySelectorAll(e);function a(){r.forEach((t=>{t.classList.remove(o)})),s.forEach((t=>{t.classList.add("sidepanel__hide"),t.classList.remove("sidepanel__show")}))}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[t].classList.add(o),s[t].classList.remove("sidepanel__hide"),s[t].classList.add("sidepanel__show")}a(),c(),i.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&r.forEach(((t,e)=>{n==t&&(a(),c(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o){const r=document.querySelectorAll(n),i=document.querySelector(o);r.forEach((t=>{t.addEventListener("click",(()=>e(o)))})),i.addEventListener("click",(e=>{e.target!==i&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&i.classList.contains("show")&&t(o)}))}("[data-modal]",".modal"),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const o=document.querySelector(t),r=o.querySelector("#days"),i=o.querySelector("#hours"),s=o.querySelector("#minutes"),a=o.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,days:n(Math.floor(e/864e5)),hours:n(Math.floor(e/36e5%24)),minutes:n(Math.floor(e/1e3/60%60)),seconds:n(Math.floor(e/1e3%60))}}(e);r.innerHTML=t.days,i.innerHTML=t.hours,s.innerHTML=t.minutes,a.innerHTML=t.seconds,t.total<=0&&clearInterval(c)}l()}(t,e)}(".timer","2025-06-09"),function(){class t{constructor(t,e,n,o,r,i,s){this.webp=t,this.src=e,this.alt=n,this.title=o,this.descr=r;for(var a=arguments.length,c=new Array(a>7?a-7:0),l=7;l<a;l++)c[l-7]=arguments[l];this.classes=c,this.price=i,this.parent=document.querySelector(s),this.course=27,this.convertUSDUAH()}convertUSDUAH(){this.price=this.price*this.course}render(){const t=document.createElement("div");0===this.classes.length?(this.div="menu__item",t.classList.add(this.div)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n        <picture>\n          <source srcset=${this.webp} type="image/webp" />\n          <img src="${this.src}" alt="${this.alt}" />\n        </picture>\n        <h3 class="menu__item-subtitle">${this.title}</h3>\n        <div class="menu__item-descr">${this.descr}</div>\n        <div class="menu__item-divider"></div>\n        <div class="menu__item-price">\n            <div class="menu__item-cost">Цена:</div>\n            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n        </div>\n      `,this.parent.append(t)}}(async()=>{const t=await fetch("https://api.jsonbin.io/v3/b/64d74da7b89b1e2299cf7fe3",{method:"GET",headers:{"X-Access-Key":"$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy0VcOnlcWDM.Oh9CT4o1QxvuFq","X-JSON-Path":"$.menu[*]"}});return await t.json()})().then((e=>{e.record.forEach((e=>{let{webp:n,img:o,altimg:r,title:i,descr:s,price:a}=e;new t(n,o,r,i,s,a,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,r=localStorage.getItem("id")||"female",i=localStorage.getItem("data-ratio")||"1.375";function s(t,e,n,o){document.querySelectorAll(`${t} div`).forEach((t=>{!function(t,e,n,o){t.classList.remove(o),(t.getAttribute(e)&&t.getAttribute(e)===localStorage.getItem(e)||t.getAttribute(e)===n)&&t.classList.add(o)}(t,e,n,o)}))}function a(){t.textContent=r&&e&&n&&o&&i?"female"===r?Math.round((447.6+9.2*n+3.1*e-4.3*o)*i):Math.round((88.36+13.4*n+4.8*e-5.7*o)*i):"____"}function c(t,e){const n=document.querySelectorAll(`${t} div`);n.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("data-ratio",i)):(r=t.target.getAttribute("id"),localStorage.setItem("id",r)),n.forEach((t=>{t.classList.remove(e)})),t.target.classList.add(e),a()}))}))}function l(t){const r=document.querySelector(t);r.addEventListener("input",(()=>{switch(r.value.match(/\D/g)?r.style.border="1px solid red":r.style.border="none",r.getAttribute("id")){case"height":e=+r.value;break;case"weight":n=+r.value;break;case"age":o=+r.value}a()}))}s("#gender","id",r,"calculating__choose-item_active"),s(".calculating__choose_big","data-ratio",i,"calculating__choose-item_active"),a(),c("#gender","calculating__choose-item_active"),c(".calculating__choose_big","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n){const o=document.querySelectorAll(n),r={loading:"icons/spinner.svg",success:"Thanks! We will call you soon!",failure:"Error happened. Try once again!"};function i(n){const o=document.querySelector(".modal__dialog");o.classList.add("sidepanel__hide"),e(".modal");const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n    <div class="modal__content">\n      <div class="modal__close" data-close>x</div>\n      <div class="modal__title">${n}</div>\n    </div>\n    `,document.querySelector(".modal").append(r),setTimeout((()=>{r.remove(),o.classList.add("sidepanel__show"),o.classList.remove("sidepanel__hide"),t(".modal")}),4e3)}o.forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("div");n.src=r.loading,n.style.cssText="\n        display: block;\n        margin: 0 auto;\n      ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{const n=await fetch("https://api.jsonbin.io/v3/b/64d76407b89b1e2299cf891e",{method:"PUT",headers:{"Content-type":"application/json","X-Access-Key":"$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy0VcOnlcWDM.Oh9CT4o1QxvuFq"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{i(r.success),r.remove()})).catch((()=>{i(r.failure)})).finally((()=>{e.reset()}))}))}))}("form"),function(t){let{container:e,slide:n,nextArrow:o,prevArrow:r,totalCount:i,currentCounter:s,wrapper:a,field:c}=t;const l=document.querySelectorAll(n),d=document.querySelector(e),u=document.querySelector(r),h=document.querySelector(o),f=document.querySelector(i),p=document.querySelector(s),m=document.querySelector(a),y=document.querySelector(c);let _=1,v=m.clientWidth,g=0;window.addEventListener("resize",(()=>{v=m.clientWidth,0===g||(g=parseInt(v)),y.style.transform=`translateX(-${g}px)`})),l.length<10?(f.textContent=`0${l.length}`,p.textContent=`0${_}`):(f.textContent=l.length,p.textContent=_),y.style.width=100*l.length+"%",y.style.display="flex",y.style.transition="0.5s all",m.style.overflow="hidden",l.forEach((t=>{t.style.maxWidth=v})),h.addEventListener("click",(()=>{g==parseInt(v)*(l.length-1)?g=0:g+=parseInt(v),y.style.transform=`translateX(-${g}px)`,_==l.length?_=1:_++,l.length<10?p.textContent=`0${_}`:p.textContent=_,b.forEach((t=>t.style.opacity=".5")),b[_-1].style.opacity=1})),u.addEventListener("click",(()=>{0==g?g=parseInt(v)*(l.length-1):g-=parseInt(v),y.style.transform=`translateX(-${g}px)`,1==_?_=l.length:_--,l.length<10?p.textContent=`0${_}`:p.textContent=_,b.forEach((t=>t.style.opacity=".5")),b[_-1].style.opacity=1})),d.style.position="relative";const w=document.createElement("ol"),b=[];w.classList.add("carousel-indicators"),w.style.cssText="\n    position: absolute;\n    right: 0;\n    bottom: 2%;\n    left: 0;\n    z-index: 15;\n    display: flex;\n    justify-content: center;\n    margin-right: 15%;\n    margin-left: 15%;\n    list-style: none;\n  ",d.append(w);for(let t=0;t<l.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n      box-sizing: content-box;\n      flex: 0 1 auto;\n      width: 30px;\n      height: 6px;\n      margin-right: 3px;\n      margin-left: 3px;\n      cursor: pointer;\n      background-color: #fff;\n      background-clip: padding-box;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      opacity: .5;\n      transition: opacity .6s ease;\n    ",0==t&&(e.style.opacity=1),w.append(e),b.push(e)}b.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");_=e,g=parseInt(v)*(e-1),y.style.transform=`translateX(-${g}px)`,b.forEach((t=>t.style.opacity=".5")),b[_-1].style.opacity=1,l.length<10?p.textContent=`0${_}`:p.textContent=_}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCount:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})()})();
//# sourceMappingURL=bundle.js.map