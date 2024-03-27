import{a as y,i,S as f}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();async function p(s){s=encodeURIComponent(s);const r="42609290-856768105ab9e79485c69bf61",a=new URLSearchParams({per_page:g,page:d,key:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await y.get(`https://pixabay.com/api/?${a}&q=${s}`)).data}async function h(s){console.log(s);const r=s.hits;r.length==0&&(l.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",i.error({title:"Error",message:"No such pictures",position:"topRight"}));const a=r.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");u.insertAdjacentHTML("beforeend",a);const o={captionsData:"alt"};let t=new f(".gallery a",o);t.on("show.simplelightbox",function(){}),t.refresh()}const u=document.querySelector("ul.gallery");let n="";const m=document.getElementById("search-input");let d=1,g=15;const l=document.getElementById("load-button");document.getElementById("loader");m.addEventListener("input",s=>{n=m.value.trim(),u.innerHTML="",l.className="visually-hidden",loader.className="visually-hidden"});const L=document.getElementById("search-button");L.addEventListener("click",async()=>{u.innerHTML="",loader.className="loader",d=1,g=15;try{if(n){l.className="";const s=await p(n);h(s),loader.className="loader visually-hidden",d+=1}}catch(s){l.className="visually-hidden",console.log(s),i.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});l.addEventListener("click",async()=>{loader.className="loader";try{if(n){const s=await p(n),r=s.totalHits;if(document.querySelectorAll(".gallery-item").length>=r)return l.className="visually-hidden",loader.className="visually-hidden",i.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});h(s),loader.className="loader visually-hidden";const o=l.getBoundingClientRect();scrollBy(o.x,o.y)}}catch(s){console.log(s),i.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
