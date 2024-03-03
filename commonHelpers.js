import{a as y,i as c,S as L}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();async function g(r){r=encodeURIComponent(r),n.innerHTML='<div class="loader"></div>';const o="42609290-856768105ab9e79485c69bf61",s=new URLSearchParams({_per_page:p,_page:a,key:o,image_type:"photo",orientation:"horizontal",safesearch:"false"});return(await y.get(`https://pixabay.com/api/?${s}&q=${r}`)).data}async function h(r){n.innerHTML="",console.log(r);const o=r.hits;o.length==0&&c.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const s=o.map(e=>`<li class="gallery-item">
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
      </li>`).join("");n.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt"};let t=new L(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const n=document.querySelector("ul.gallery");let l="";const u=document.getElementById("search-input");let a=1,p=15,m=Math.ceil(p/p);u.addEventListener("input",r=>{l=u.value.trim(),n.innerHTML=""});const b=document.getElementById("search-button"),f=document.getElementById("load-button");b.addEventListener("click",async()=>{n.innerHTML='<div class="loader"></div>',f.classList="",a=1;try{if(l){const r=await g(l);m=Math.ceil(r.totalHits/p),h(r),a+=1}}catch(r){console.log(r),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});f.addEventListener("click",async()=>{if(a>m)return c.error({position:"topRight",message:"We're sorry, there are no more posts to load"});try{if(l){const r=await g(l);h(r),a+=1}}catch(r){console.log(r),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
