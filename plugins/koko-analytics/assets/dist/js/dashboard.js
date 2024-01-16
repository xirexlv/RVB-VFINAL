!function(){"use strict";var t={d:function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{format:function(){return c},isLastDayOfMonth:function(){return i},parseISO8601:function(){return l},toISO8601:function(){return s}});const{nonce:n,root:o}=window.koko_analytics;function r(t,e={}){let r=o+"koko-analytics/v1"+t;return r=r+(r.indexOf("?")>-1?"&":"?")+new URLSearchParams(e),fetch(r,{headers:{"X-WP-Nonce":n,Accepts:"application/json"},credentials:"same-origin"}).then((t=>{if(t.status>=400)throw console.error("Koko Analytics encountered an error trying to request data from the REST endpoints. Please check your PHP error logs for the error that occurred."),new Error(t.statusText);return t})).then((t=>t.json()))}function i(t){let e=new Date(t);return e.setDate(e.getDate()+1),t.getMonth()!==e.getMonth()}function l(t){if(null===t)return null;const e=t.split("-");if(2===e.length&&e.push("1"),3!==e.length)return null;let[n,o,r]=e.map((t=>parseInt(t,10)));return n<1e3&&(n+=2e3),n<2e3||n>3e3||o<1||o>12||r<1||r>31?null:new Date(n,o-1,r)}function a(t){return t<10?"0"+t:t}function s(t){return`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())}`}function c(t,e){t="string"==typeof t?l(t):t,e=e||{day:"numeric",month:"short",year:"numeric"};try{return new Intl.DateTimeFormat(void 0,e).format(t)}catch(t){}return t.toLocaleDateString()}function d(t,e,n,o,r){return{sel:t,data:e,children:n,text:o,elm:r,key:void 0===e?void 0:e.key}}window.setTimeout((()=>{window.location.reload()}),432e5);const u=Array.isArray;function f(t){return"string"==typeof t||"number"==typeof t||t instanceof String||t instanceof Number}function h(t){if(p(t)){for(;t&&p(t);)t=v(t).parent;return null!=t?t:null}return t.parentNode}function p(t){return 11===t.nodeType}function v(t,e){var n,o,r;const i=t;return null!==(n=i.parent)&&void 0!==n||(i.parent=null!=e?e:null),null!==(o=i.firstChildNode)&&void 0!==o||(i.firstChildNode=t.firstChild),null!==(r=i.lastChildNode)&&void 0!==r||(i.lastChildNode=t.lastChild),i}const g={createElement:function(t,e){return document.createElement(t,e)},createElementNS:function(t,e,n){return document.createElementNS(t,e,n)},createTextNode:function(t){return document.createTextNode(t)},createDocumentFragment:function(){return v(document.createDocumentFragment())},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){if(p(t)){let e=t;for(;e&&p(e);)e=v(e).parent;t=null!=e?e:t}p(e)&&(e=v(e,t)),n&&p(n)&&(n=v(n).firstChildNode),t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){p(e)&&(e=v(e,t)),t.appendChild(e)},parentNode:h,nextSibling:function(t){var e;if(p(t)){const n=v(t),o=h(n);if(o&&n.lastChildNode){const t=Array.from(o.childNodes),r=t.indexOf(n.lastChildNode);return null!==(e=t[r+1])&&void 0!==e?e:null}return null}return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},getTextContent:function(t){return t.textContent},isElement:function(t){return 1===t.nodeType},isText:function(t){return 3===t.nodeType},isComment:function(t){return 8===t.nodeType},isDocumentFragment:p};function m(t){return void 0===t}function y(t){return void 0!==t}const k=d("",{},[],void 0,void 0);function x(t,e){var n,o;const r=t.key===e.key,i=(null===(n=t.data)||void 0===n?void 0:n.is)===(null===(o=e.data)||void 0===o?void 0:o.is),l=t.sel===e.sel,a=!(!t.sel&&t.sel===e.sel)||typeof t.text==typeof e.text;return l&&r&&i&&a}function w(){throw new Error("The document fragment is not supported on this platform.")}function S(t,e,n){var o;const r={};for(let i=e;i<=n;++i){const e=null===(o=t[i])||void 0===o?void 0:o.key;void 0!==e&&(r[e]=i)}return r}const C=["create","update","remove","destroy","pre","post"];function b(t,e,n){const o={create:[],update:[],remove:[],destroy:[],pre:[],post:[]},r=void 0!==e?e:g;for(const e of C)for(const n of t){const t=n[e];void 0!==t&&o[e].push(t)}function i(t,e){return function(){if(0==--e){const e=r.parentNode(t);r.removeChild(e,t)}}}function l(t,e){var i,a,s,c;let d,h=t.data;if(void 0!==h){const e=null===(i=h.hook)||void 0===i?void 0:i.init;y(e)&&(e(t),h=t.data)}const p=t.children,v=t.sel;if("!"===v)m(t.text)&&(t.text=""),t.elm=r.createComment(t.text);else if(void 0!==v){const n=v.indexOf("#"),i=v.indexOf(".",n),s=n>0?n:v.length,c=i>0?i:v.length,g=-1!==n||-1!==i?v.slice(0,Math.min(s,c)):v,m=t.elm=y(h)&&y(d=h.ns)?r.createElementNS(d,g,h):r.createElement(g,h);for(s<c&&m.setAttribute("id",v.slice(s+1,c)),i>0&&m.setAttribute("class",v.slice(c+1).replace(/\./g," ")),d=0;d<o.create.length;++d)o.create[d](k,t);if(u(p))for(d=0;d<p.length;++d){const t=p[d];null!=t&&r.appendChild(m,l(t,e))}else f(t.text)&&r.appendChild(m,r.createTextNode(t.text));const x=t.data.hook;y(x)&&(null===(a=x.create)||void 0===a||a.call(x,k,t),x.insert&&e.push(t))}else if((null===(s=null==n?void 0:n.experimental)||void 0===s?void 0:s.fragments)&&t.children){for(t.elm=(null!==(c=r.createDocumentFragment)&&void 0!==c?c:w)(),d=0;d<o.create.length;++d)o.create[d](k,t);for(d=0;d<t.children.length;++d){const n=t.children[d];null!=n&&r.appendChild(t.elm,l(n,e))}}else t.elm=r.createTextNode(t.text);return t.elm}function a(t,e,n,o,i,a){for(;o<=i;++o){const i=n[o];null!=i&&r.insertBefore(t,l(i,a),e)}}function s(t){var e,n;const r=t.data;if(void 0!==r){null===(n=null===(e=null==r?void 0:r.hook)||void 0===e?void 0:e.destroy)||void 0===n||n.call(e,t);for(let e=0;e<o.destroy.length;++e)o.destroy[e](t);if(void 0!==t.children)for(let e=0;e<t.children.length;++e){const n=t.children[e];null!=n&&"string"!=typeof n&&s(n)}}}function c(t,e,n,l){for(var a,d;n<=l;++n){let l,u;const f=e[n];if(null!=f)if(y(f.sel)){s(f),l=o.remove.length+1,u=i(f.elm,l);for(let t=0;t<o.remove.length;++t)o.remove[t](f,u);const t=null===(d=null===(a=null==f?void 0:f.data)||void 0===a?void 0:a.hook)||void 0===d?void 0:d.remove;y(t)?t(f,u):u()}else f.children?(s(f),c(t,f.children,0,f.children.length-1)):r.removeChild(t,f.elm)}}function h(t,e,n){var i,s,d,u,f,p,v,g;const k=null===(i=e.data)||void 0===i?void 0:i.hook;null===(s=null==k?void 0:k.prepatch)||void 0===s||s.call(k,t,e);const w=e.elm=t.elm;if(t===e)return;if(void 0!==e.data||y(e.text)&&e.text!==t.text){null!==(d=e.data)&&void 0!==d||(e.data={}),null!==(u=t.data)&&void 0!==u||(t.data={});for(let n=0;n<o.update.length;++n)o.update[n](t,e);null===(v=null===(p=null===(f=e.data)||void 0===f?void 0:f.hook)||void 0===p?void 0:p.update)||void 0===v||v.call(p,t,e)}const C=t.children,b=e.children;m(e.text)?y(C)&&y(b)?C!==b&&function(t,e,n,o){let i,s,d,u,f=0,p=0,v=e.length-1,g=e[0],y=e[v],k=n.length-1,w=n[0],C=n[k];for(;f<=v&&p<=k;)null==g?g=e[++f]:null==y?y=e[--v]:null==w?w=n[++p]:null==C?C=n[--k]:x(g,w)?(h(g,w,o),g=e[++f],w=n[++p]):x(y,C)?(h(y,C,o),y=e[--v],C=n[--k]):x(g,C)?(h(g,C,o),r.insertBefore(t,g.elm,r.nextSibling(y.elm)),g=e[++f],C=n[--k]):x(y,w)?(h(y,w,o),r.insertBefore(t,y.elm,g.elm),y=e[--v],w=n[++p]):(void 0===i&&(i=S(e,f,v)),s=i[w.key],m(s)?r.insertBefore(t,l(w,o),g.elm):(d=e[s],d.sel!==w.sel?r.insertBefore(t,l(w,o),g.elm):(h(d,w,o),e[s]=void 0,r.insertBefore(t,d.elm,g.elm))),w=n[++p]);p<=k&&(u=null==n[k+1]?null:n[k+1].elm,a(t,u,n,p,k,o)),f<=v&&c(t,e,f,v)}(w,C,b,n):y(b)?(y(t.text)&&r.setTextContent(w,""),a(w,null,b,0,b.length-1,n)):y(C)?c(w,C,0,C.length-1):y(t.text)&&r.setTextContent(w,""):t.text!==e.text&&(y(C)&&c(w,C,0,C.length-1),r.setTextContent(w,e.text)),null===(g=null==k?void 0:k.postpatch)||void 0===g||g.call(k,t,e)}return function(t,e){let n,i,a;const s=[];for(n=0;n<o.pre.length;++n)o.pre[n]();for(function(t,e){return t.isElement(e)}(r,t)?t=function(t){const e=t.id?"#"+t.id:"",n=t.getAttribute("class"),o=n?"."+n.split(" ").join("."):"";return d(r.tagName(t).toLowerCase()+e+o,{},[],void 0,t)}(t):function(t,e){return t.isDocumentFragment(e)}(r,t)&&(t=d(void 0,{},[],void 0,t)),x(t,e)?h(t,e,s):(i=t.elm,a=r.parentNode(i),l(e,s),null!==a&&(r.insertBefore(a,e.elm,r.nextSibling(i)),c(a,[t],0,0))),n=0;n<s.length;++n)s[n].data.hook.insert(s[n]);for(n=0;n<o.post.length;++n)o.post[n]();return e}}function E(t,e){let n;const o=e.elm;let r=t.data.attrs,i=e.data.attrs;if((r||i)&&r!==i){for(n in r=r||{},i=i||{},i){const t=i[n];r[n]!==t&&(!0===t?o.setAttribute(n,""):!1===t?o.removeAttribute(n):120!==n.charCodeAt(0)?o.setAttribute(n,t):58===n.charCodeAt(3)?o.setAttributeNS("http://www.w3.org/XML/1998/namespace",n,t):58===n.charCodeAt(5)?o.setAttributeNS("http://www.w3.org/1999/xlink",n,t):o.setAttribute(n,t))}for(n in r)n in i||o.removeAttribute(n)}}const M={create:E,update:E};function L(t,e,n){if("function"==typeof t)t.call(e,n,e);else if("object"==typeof t)for(let o=0;o<t.length;o++)L(t[o],e,n)}function N(t,e){const n=t.type,o=e.data.on;o&&o[n]&&L(o[n],e,t)}function _(t,e){const n=t.data.on,o=t.listener,r=t.elm,i=e&&e.data.on,l=e&&e.elm;let a;if(n!==i){if(n&&o)if(i)for(a in n)i[a]||r.removeEventListener(a,o,!1);else for(a in n)r.removeEventListener(a,o,!1);if(i){const o=e.listener=t.listener||function t(e){N(e,t.vnode)};if(o.vnode=e,n)for(a in i)n[a]||l.addEventListener(a,o,!1);else for(a in i)l.addEventListener(a,o,!1)}}}const D={create:_,update:_,destroy:_};function q(t,e,n){if(t.ns="http://www.w3.org/2000/svg","foreignObject"!==n&&void 0!==e)for(let t=0;t<e.length;++t){const n=e[t];if("string"==typeof n)continue;const o=n.data;void 0!==o&&q(o,n.children,n.sel)}}function A(t,e,n){let o,r,i,l={};if(void 0!==n?(null!==e&&(l=e),u(n)?o=n:f(n)?r=n.toString():n&&n.sel&&(o=[n])):null!=e&&(u(e)?o=e:f(e)?r=e.toString():e&&e.sel?o=[e]:l=e),void 0!==o)for(i=0;i<o.length;++i)f(o[i])&&(o[i]=d(void 0,void 0,void 0,o[i],void 0));return"s"!==t[0]||"v"!==t[1]||"g"!==t[2]||3!==t.length&&"."!==t[3]&&"#"!==t[3]||q(l,o,t),d(t,l,o,r,void 0)}const T=window.koko_analytics.items_per_page,O=b([M,D]);function $(t,e,n,o,i,l,a){let s=t.nextElementSibling,c=s.nextElementSibling,d=c.children[0],u=c.children[1],f=0,h=e.length;function p(){r(i,{offset:f,limit:T,start_date:n,end_date:o}).then((e=>{h=e.length,t=O(t,v(e)),a&&a(e)}))}function v(t){return u.classList.toggle("disabled",h<T),d.classList.toggle("disabled",0===f),s.style.display=t.length?"none":"",c.style.display=t.length<T&&0===f?"none":"",A("div.ka-topx--body",t.map(((t,e)=>l(t,f+e+1))))}return t=O(t,v(e)),a&&a(e),d.addEventListener("click",(()=>{0!==f&&(f=Math.max(0,f-T),p())})),u.addEventListener("click",(()=>{h<T||(f+=T,p())})),{update:function(t,e){n=t,o=e,f=0,p()}}}Object.assign(window.koko_analytics,{components:{BlockComponent:$},util:{request:r,dates:e}});const B=1e6,F=/\.0+$/;function P(t){let e=0;return t>=B?(t/=B,e=Math.max(0,3-String(Math.round(t)).length),t.toFixed(e).replace(F,"")+"M"):t>=1e4?(t/=1e3,e=Math.max(0,3-String(Math.round(t)).length),t.toFixed(e).replace(F,"")+"K"):String(t)}const{i18n:j}=window.koko_analytics,H=b([D,M]),I=function(){const t=document.createElement("div");return t.style.display="none",t.className="ka-chart--tooltip",t.innerHTML=`\n<div class="ka-chart--tooltip-box">\n  <div class="ka-chart--tooltip-heading"></div>\n  <div style="display: flex">\n    <div class="ka-chart--tooltip-content ka--visitors">\n      <div class="ka-chart--tooltip-amount"></div>\n      <div>${j.Visitors}</div>\n    </div>\n    <div class="ka-chart--tooltip-content ka--pageviews">\n      <div class="ka-chart--tooltip-amount"></div>\n      <div>${j.Pageviews}</div>\n    </div>\n  </div>\n</div>\n<div class="ka-chart--tooltip-arrow"></div>`,t}();function R(){I.style.display="none"}let{startDate:U,endDate:Y,data:W}=window.koko_analytics,X=0,K=document.querySelector(".ka-page-filter");function V(t,e,n){X=String(t)===String(X)?0:t,[G,J].forEach((t=>t.update(U,Y,X)));let o=document.createElement("a");o.setAttribute("href",n),o.textContent=e,K.children[1].replaceChildren(o),K.style.display=X>0?"block":"none",document.body.classList.toggle("page-filter-active",X>0)}document.querySelector(".ka-page-filter--close").addEventListener("click",(()=>{V(0,"")}));const z=[function(t,e,n,o,r){return $(t,e,n,o,"/posts",(function(t,e){return A("div.ka-topx--row ka-fade",[A("div.ka-topx--rank",{},e),A("div.ka-topx--col",{},[A("a",{attrs:{href:t.post_permalink},on:{click:e=>{e.preventDefault(),r(t.id,t.post_title,t.post_permalink)}}},t.post_title||"(no title)")]),A("div.ka-topx--amount",Math.max(1,t.visitors)),A("div.ka-topx--amount",t.pageviews)])}))}(document.querySelector("#ka-top-posts"),W.posts,U,Y,V),function(t,e,n,o){return $(t,e,n,o,"/referrers",(function(t,e){return t=function(t){return t.displayUrl=t.url.replace(/^https?:\/\/(www\.)?(.+?)\/?$/,"$2"),0===t.url.indexOf("https://t.co/")?t.url="https://twitter.com/search?q="+encodeURI(t.url):0===t.url.indexOf("android-app://")&&(t.displayUrl=t.url.replace("android-app://","Android app: "),t.url=t.url.replace("android-app://","https://play.google.com/store/apps/details?id=")),t}(t),A("div.ka-topx--row ka-fade",[A("div.ka-topx--rank",{},e),A("div.ka-topx--col",{},[A("a",{attrs:{href:t.url}},t.displayUrl)]),A("div.ka-topx--amount",Math.max(1,t.visitors)),A("div.ka-topx--amount",t.pageviews)])}))}(document.querySelector("#ka-top-referrers"),W.referrers,U,Y)],G=function(t){function e(t,e,n,o){var r;t.children[1].children[0].textContent=P(e),t.children[1].children[1].textContent=null!==o?(r=o,(r=Math.round(100*r))>=0?`+${r}%`:`${r}%`):"",t.classList.toggle("ka-up",n>0),t.classList.toggle("ka-down",n<0),t.children[2].firstElementChild.textContent=P(Math.abs(n))}return window.setInterval((function(){r("/realtime",{since:"-1 hour"}).then((e=>{t.children[2].children[1].textContent=P(e)}))}),6e4),{update:function(n,o,i){r("/totals",{start_date:n,end_date:o,page:i}).then((n=>{e(t.children[0],n.visitors,n.visitors_change,n.visitors_change_rel),e(t.children[1],n.pageviews,n.pageviews_change,n.pageviews_change_rel)}))}}}(document.querySelector("#ka-totals")),J=function(t,e,n,o,i,a){a||(a=280);const s=t.clientWidth;t.parentElement.style.minHeight=`${a+4}px`;let d=o-n>=314496e5?{month:"short",year:"numeric"}:void 0;function u(e,n,o){const i=l(n)-l(e)>=314496e5;d=i?{month:"short",year:"numeric"}:void 0,r("/stats",{start_date:e,end_date:n,monthly:i?1:0,page:o>0?o:0}).then((e=>{t=H(t,h(e))}))}function f(t){return Math.round(100*t)/100}function h(t){if(t.length<=1)return A("!");const e=function(t){let e,n=0;for(let o=0;o<t.length;o++)e=t[o].pageviews,e>n&&(n=e);return n}(t),n=function(t){if(t<10)return 10;const e=Math.floor(Math.log10(t)),n=Math.pow(10,e);return Math.ceil(t/n)*n}(e),o=[0,n/2,n],r=t.length<=90,i=4+8*Math.max(5,String(P(n)).length),l=s-i,u=a-24-6,h=u/n,p=f(l/t.length),v=7*t.length<l?2:0,g=p-2*v,m=t=>f(t*p),y=n<=0?()=>u:t=>u-t*h;return A("svg",{attrs:{width:"100%",height:a}},[A("g",[A("g",{attrs:{transform:"translate(0, 6)","text-anchor":"end"}},o.map((t=>{const e=y(t);return A("g",[A("line",{attrs:{stroke:"#eee",x1:i,x2:l+i,y1:e,y2:e}}),A("text",{attrs:{y:e,fill:"#757575",x:f(.9*i-4),dy:"0.33em"}},P(t))])}))),A("g",{attrs:{class:"axes-x","text-anchor":"start",transform:`translate(${i}, ${6+u})`}},t.map(((e,n)=>{let o=0===n||n===t.length-1?e.date:null;if(!r&&!o)return null;const i=m(n)+.5*p;return A("g",[A("line",{attrs:{stroke:"#ddd",x1:i,x2:i,y1:0,y2:6}}),o?A("text",{attrs:{fill:"#757575",x:i,y:10,dy:"1em","text-anchor":0===n?"start":"end"}},c(e.date,d)):""])})).filter((t=>null!==t)))]),A("g",{attrs:{class:"bars",transform:`translate(${i}, 6)`}},t.map(((t,e)=>{const n=t.pageviews*h,o=t.visitors*h,r=m(e),i=function(t,e){return n=>{I.querySelector(".ka-chart--tooltip-heading").textContent=c(t.date,d),I.querySelector(".ka--visitors").children[0].textContent=t.visitors,I.querySelector(".ka--pageviews").children[0].textContent=t.pageviews,I.style.display="block";const o=n.currentTarget.getBoundingClientRect(),r=o.left+window.scrollX-.5*I.clientWidth+.5*e+"px",i=o.y+window.scrollY-I.clientHeight+"px";I.style.left=r,I.style.top=i}}(t,g);return A("g",{on:{click:i,mouseenter:i,mouseleave:R}},[A("rect",{attrs:{class:"ka--pageviews",height:n,width:g,x:r+v,y:y(t.pageviews)}}),A("rect",{attrs:{class:"ka--visitors",height:o,width:g,x:r+v,y:y(t.visitors)}})])})))])}return e.length?t=H(t,h(e)):u(n,o,i),document.body.appendChild(I),addEventListener("click",(e=>{for(let n=e.target;null!==n;n=n.parentElement)if(n===t.elm)return;R()})),{update:u}}(document.querySelector("#ka-chart"),W.chart,U,Y,X);!function(t,e){const n=t.querySelector("#ka-datepicker-dropdown"),o=t.querySelector("#ka-date-start"),r=t.querySelector("#ka-date-end"),a=t.querySelector(".ka-datepicker--label"),d=t.querySelector(".ka-datepicker--quicknav-heading"),u=t.querySelector("#ka-date-presets"),f=t.querySelector(".ka-datepicker--quicknav-prev"),h=t.querySelector(".ka-datepicker--quicknav-next");let p=l(o.value),v=l(r.value),g=!1;function m(t){g="boolean"==typeof t?t:!g,n.style.display=g?"":"none",a.setAttribute("aria-expanded",g)}function y(t){const n=`${c(p)} — ${c(v)}`;a.textContent=n,d.textContent=n,!0===t&&e(p,v)}function k(t){if(1===p.getDate()&&i(v)){const e=(v.getMonth()-p.getMonth()+1)*t;p=new Date(p.getFullYear(),p.getMonth()+e,1,0,0,0),v=new Date(v.getFullYear(),v.getMonth()+e+1,0,23,59,59)}else{p.setHours(0,0,0),v.setHours(23,59,59);const e=(v-p)/864e5,n=Math.round(e*t);p.setDate(p.getDate()+n),v.setDate(v.getDate()+n)}u.value="custom",o.value=s(p),r.value=s(v),y(!0)}document.addEventListener("click",(e=>{for(let n=e.target;null!==n;n=n.parentNode)if(n===t)return;m(!1)})),o.addEventListener("change",(t=>{let e=l(t.target.value);e&&(p=e,u.value="custom",y(!0))})),r.addEventListener("change",(t=>{let e=l(t.target.value);e&&(v=e,u.value="custom",y(!0))})),u.addEventListener("change",(t=>{"custom"!==t.target.value&&(p=l(t.target.selectedOptions[0].dataset.startDate),v=l(t.target.selectedOptions[0].dataset.endDate),o.value=s(p),r.value=s(v),y(!0))})),document.addEventListener("keydown",(t=>{"ArrowLeft"!==t.key&&"ArrowRight"!==t.key||k("ArrowLeft"===t.key?-1:1)})),t.addEventListener("click",(t=>{switch(t.target){case f:k(-1);break;case h:k(1);break;case a:m()}})),y()}(document.querySelector(".ka-datepicker"),((t,e)=>{U=s(t),Y=s(e),[G,J].forEach((t=>t.update(U,Y,X))),z.forEach((t=>t.update(U,Y)));let n=new URLSearchParams(location.search);n.set("start_date",U),n.set("end_date",Y),history.replaceState(void 0,void 0,location.pathname+"?"+n)})),window.koko_analytics.registerDashboardComponent=function(t){z.push(t)},setInterval((()=>{l(Y).setHours(23,59,59)<new Date||([G,J].forEach((t=>t.update(U,Y,X))),z.forEach((t=>t.update(U,Y))))}),6e4)}();