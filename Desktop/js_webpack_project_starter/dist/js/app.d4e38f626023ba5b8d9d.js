(()=>{var t={792:()=>{const e=document.querySelector("#gl-menu"),t=document.querySelector(".gl-size-select"),n=document.querySelector(".gl-speed-select"),o=document.querySelectorAll(".gl-random-btn"),s=document.querySelector(".gl-self-select-btn"),c=document.querySelector(".gl-canvas-container"),a=document.querySelector(".gl-pattern"),r=document.querySelector(".gl-controller"),l=document.querySelector(".gl-back-to-menu"),i=canvas.getContext("2d");let d,u,m,h=t.value,g=n.value,p=!1;const v="#0aa",y="#f55",f="#0f7",L="#000";t.addEventListener("change",(()=>{h=t.value})),n.addEventListener("change",(()=>{g=n.value})),o.forEach((t=>{t.addEventListener("click",(()=>{e.classList.add("hide"),c.classList.add("active"),p=!0,r.textContent="Pause",r.style.backgroundColor=y,d=function(e){d=function(){u=canvas.width/h,m=canvas.height/h;let e=new Array(u);for(let t=0;t<e.length;t++)e[t]=new Array(m);return e}();for(let t=0;t<u;t++)for(let n=0;n<m;n++)d[t][n]=Math.floor(Math.random()*e);return d}(t.dataset.value),function(e){for(let t=0;t<u;t++)for(let n=0;n<m;n++){let o=t*h,s=n*h;1===e[t][n]?(i.fillStyle=f,i.fillRect(o,s,h,h)):(i.fillStyle=L,i.fillRect(o,s,h,h))}}(d)}))})),s.addEventListener("click",(()=>{e.classList.add("hide"),c.classList.add("active"),a.classList.add("active"),r.textContent="Generate",r.style.backgroundColor=v})),l.addEventListener("click",(()=>{e.classList.remove("hide"),c.classList.remove("active"),a.classList.remove("active"),p=!1})),r.addEventListener("click",(()=>{p=!p,p?(r.textContent="Pause",r.style.backgroundColor=y):(r.textContent="Resume",r.style.backgroundColor=v)}))},165:()=>{const e=document.querySelector(".mc-deck"),t=document.querySelector(".mc-congrats"),n=document.querySelector(".mc-time"),o=document.querySelector(".mc-matched"),s=document.querySelector(".mc-failed"),c=document.querySelector(".mc-reset-btn"),a=document.querySelector(".mc-congrats >h2>span"),r=document.querySelector(".mc-retry-btn");let l,i,d=[],u=0,m=0,h=0,g=!1;const p=["bug","upload","configuration","connection","database","www","mobile","keyboard"],v={bug:"./images/memory_card/bug.svg",upload:"./images/memory_card/upload.svg",configuration:"./images/memory_card/configuration.svg",connection:"./images/memory_card/connection.svg",database:"./images/memory_card/database.svg",www:"./images/memory_card/www.svg",mobile:"./images/memory_card/mobile.svg",keyboard:"./images/memory_card/keyboard.svg"};function y(){(function(e){let t=e.slice();for(let e=t.length-1;e>-1;e--){let n=Math.floor(Math.random()*t.length),o=t[e];t[e]=t[n],t[n]=o}return t})([...p,...p]).forEach((t=>{const n=function(){const e=document.createElement("div");e.classList.add("mc-card");const t=document.createElement("div");t.classList.add("mc-front");const n=document.createElement("img");t.appendChild(n);const o=document.createElement("div");o.classList.add("mc-back");const s=document.createElement("img");return s.setAttribute("src","./images/memory_card/hand.svg"),o.appendChild(s),e.appendChild(t),e.appendChild(o),e}();n.querySelector(".mc-front > img").setAttribute("src",v[t]),e.appendChild(n),n.addEventListener("click",f)}))}function f(){if(g||(g=!0,l=setInterval((()=>{m++,n.textContent=m}),1e3)),0===d.length)this.classList.add("rotate"),d.push(this);else if(1===d.length){if(this===d.length===1)return;this.classList.add("rotate"),d.push(this),function(e,n){const c=[e,n],r=e.querySelector(".mc-front > img").src,g=n.querySelector(".mc-front > img").src;r===g?(u++,o.textContent=u,c.forEach((e=>{e.classList.add("matched"),e.removeEventListener("click",f)})),8===u&&(clearInterval(l),i=m,a.textContent=i,setTimeout((()=>{t.classList.add("show")}),2500)),d=[]):(h++,s.textContent=h,setTimeout((()=>{c.forEach((e=>{e.classList.remove("rotate"),d=[]}))}),800))}(d[0],d[1])}}function L(){u=0,o.textContent=u,h=0,s.textContent=h,m=0,n.textContent=m,d=[],e.innerHTML="",g=!1,clearInterval(l),y()}c.addEventListener("click",(()=>{L()})),r.addEventListener("click",(()=>{t.classList.remove("show"),L()})),L()},205:()=>{const e=document.querySelector(".sp-cover"),t=document.querySelectorAll(".sp-menu > li"),n=document.querySelector(".sp-back-to-menu"),o=document.querySelector("#sp-original-image"),s=document.querySelector("#sp-show-original-btn"),c=document.querySelector(".sp-screen"),a=document.querySelector(".sp-counter");let r,l,i,d,u=[],m=[],h=0;const g=["space","veges"];let p;const v={easy:{grid:"auto auto",size:2},medium:{grid:"auto auto auto",size:3},difficult:{grid:"auto auto auto auto",size:4}};function y(e){c.innerHTML="",e.forEach(((e,t)=>{const n=document.createElement("div");n.classList.add("sp-tile"),t===i&&n.classList.add("hidden"),n.style.backgroundImage=`url(./images/slide_puzzle/${p}/${r}/tile${e}.png)`,c.appendChild(n)}))}function f(){d=document.querySelectorAll(".sp-tile");const e=Math.floor(i/l),t=i%l;function n(e){m=function(e,t,n){const o=e[t];return e[t]=e[n],e[n]=o,e}(m,e,i),i=e,y(m),h++,a.textContent=h,setTimeout((()=>{JSON.stringify(m)===JSON.stringify(u)&&(d[i].classList.remove("hidden"),c.classList.add("zoom"),d.forEach((e=>{e.classList.add("complete")})))}))}d.forEach(((o,s)=>{o.addEventListener("click",(()=>{const o=Math.floor(s/l),c=s%l;("easy"===r||o===e&&1===Math.abs(c-t)||c===t&&1===Math.abs(o-e))&&n(s),f()}))}))}t.forEach((t=>{t.addEventListener("click",(()=>{e.classList.add("hide"),r=t.dataset.level,l=v[r].size,u=[];for(let e=0;e<l;e++)for(let t=0;t<l;t++){let n=""+e+t;u.push(n)}i=Math.floor(Math.random()*l**2),c.style.gridTemplateColumns=v[r].grid,p=g[Math.floor(Math.random()*g.length)],o.setAttribute("src",`./images/slide_puzzle/${p}/${p}.png`),h=0,a.textContent=h,m=function(e){let t=e.slice();for(let e=t.length-1;e>-1;e--){let n=Math.floor(Math.random()*t.length),o=t[e];t[e]=t[n],t[n]=o}return t}(u),y(m),f()}))})),n.addEventListener("click",(()=>{e.classList.remove("hide"),c.classList.remove("zoom")})),o.onload=()=>{const e=o.naturalWidth,t=o.naturalHeight,n=Math.floor(t/e*1e3)/1e3;c.style.width="480px",c.style.height=`${Math.floor(480*n)}px`,console.log(e)},s.addEventListener("mouseover",(()=>{o.classList.add("show")})),s.addEventListener("mouseleave",(()=>{o.classList.remove("show")}))},493:()=>{const e=document.querySelector("#ty-start-page"),t=document.querySelector("#ty-game"),n=document.querySelector("#ty-title-time"),o=document.querySelector("#ty-timer"),s=document.querySelector(".ty-time-select"),c=document.querySelector("#typing"),a=document.querySelector("#ty-back-to-start"),r=document.querySelector("#ty-result-container"),l=document.querySelector("#ty-textarea"),i=document.querySelector("#ty-quote"),d=document.querySelector("#ty-author-name"),u=document.querySelector("#ty-LPM"),m=document.querySelector("#ty-quote-review");let h,g,p,v,y=30,f=!1,L=!1,S=null;function q(){l.disabled=!0,r.classList.add("show"),clearInterval(S),v=0===h?Math.floor(60*p/y):Math.floor(60*p/(time.limit-h)),m.innerHTML=`${g.quote}<br> --- ${g.author}`;let e=0;setTimeout((()=>{r.classList.add("show");const t=setInterval((()=>{u.textContent=e,e+=1,e>=v&&clearInterval(t)}),20)}),1e3)}s.addEventListener("change",(()=>{y=s.value})),window.addEventListener("keypress",(s=>{f=c.classList.contains("active"),"Enter"===s.key&&f&&!L&&(!async function(){e.classList.remove("show"),t.classList.add("show"),n.textContent=y,h=y,o.textContent=h,await async function(){i.innerHTML="",l.value="";const e="https://api.quotable.io/quotes/random",t=await fetch(e),n=await t.json();g={quote:n.content,author:n.author},g={quote:n[0].content,author:n[0].author},console.log(g),g.quote.split("").forEach((e=>{const t=document.createElement("span");t.textContent=e,i.appendChild(t)})),d.textContent=g.author,console.log(i),console.log(d)}(),l.disabled=!1,l.focus(),p=0,S=setInterval((()=>{h-=1,o.textContent=h,h<=0&&q()}),1e3)}(),f=!1,L=!0)})),a.addEventListener("click",(()=>{t.classList.remove("show"),r.classList.remove("show"),e.classList.add("show"),L=!1})),l.addEventListener("input",(()=>{let e=l.value.split(""),t=i.querySelectorAll("span");t.forEach((e=>{e.className=""})),p=0,e.forEach(((e,n)=>{e===t[n].textContent?(t[n].classList.add("correct")," "!==t[n].textContent&&(p+=1)):(t[n].classList.add("wrong"),""===t[n]&&t[n].classList.add("bar"))})),t.length===e.length&&[...t].every((e=>e.classList.contains("correct")))&&q()}))}},n={};function o(e){var s=n[e];if(void 0!==s)return s.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=n[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{"use strict";const t=o.p+"images/js_images/up.png",n=o.p+"images/js_images/ok.png",s=o.p+"images/js_images/cancel.png",c=document.querySelector(".td-add-form"),a=document.querySelector(".td-add-input"),r=document.querySelector(".todos"),l=document.querySelector(".dones"),i=document.querySelector(".td-search-form"),d=document.querySelector(".td-search-input");let u=[];function m(){localStorage.setItem("myTodo",JSON.stringify(u))}function h(){r.innerHTML=" ",l.innerHTML=" ",u=JSON.parse(localStorage.getItem("myTodo"))||[],u.forEach((e=>{!function(e){const o=document.createElement("li");o.classList.add("td-item");const c=document.createElement("p");c.classList.add("td-content"),c.textContent=e.content,o.appendChild(c);const i=document.createElement("div");i.classList.add("td-btn-container");const d=document.createElement("img");d.classList.add("td-btn");const g=d.cloneNode(!1);g.setAttribute("src",t),e.isDone?(g.classList.add("undo-btn"),d.classList.add("delete-btn"),d.setAttribute("src",s),i.appendChild(d),i.appendChild(g),o.appendChild(i),l.appendChild(o)):(g.classList.add("edit-btn"),d.classList.add("isDone-btn"),d.setAttribute("src",n),i.appendChild(d),i.appendChild(g),o.appendChild(i),r.appendChild(o)),o.addEventListener("click",(t=>{t.target.classList.contains("isDone-btn")&&(e.isDone=!0),t.target.classList.contains("undo-btn")&&(e.isDone=!1),t.target.classList.contains("edit-btn")&&(a.value=t.target.parentElement.previousElementSibling.textContent,u=u.filter((t=>t!==e)),a.focus()),t.target.classList.contains("delete-btn")&&(u=u.filter((t=>t!==e))),m(),h()}))}(e)}))}c.addEventListener("submit",(e=>{e.preventDefault();let t={content:a.value.trim(),isDone:!1};t.content&&u.push(t),a.value=" ",m(),h()})),h(),i.addEventListener("submit",(()=>{e.preventDefault()})),d.addEventListener("keyup",(()=>{const e=d.value.trim().toLowerCase();document.querySelectorAll(".td-item").forEach((t=>{t.classList.remove("hide"),t.textContent.toLowerCase().includes(e)||t.classList.add("hide")}))}));o(493),o(205),o(165),o(792);const g=document.querySelector("#nav"),p=document.querySelector("#cover");["todo","typing","slide-puzzle","memory-card","life"].forEach((e=>{const t=document.createElement("a");t.classList.add("nav-menu"),t.textContent=e.toUpperCase(),t.addEventListener("click",(()=>{p.classList.remove("active");document.querySelectorAll(".app").forEach((e=>{e.classList.remove("active")}));document.getElementById(e).classList.add("active");document.querySelectorAll(".nav-menu").forEach((e=>{e.classList.remove("active")})),t.classList.add("active")})),g.appendChild(t)}))})()})();