import{a as y,i as c,S as f}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(o){if(o.ep)return;o.ep=!0;const e=l(o);fetch(o.href,e)}})();async function h(t){t=encodeURIComponent(t);const r="42609290-856768105ab9e79485c69bf61",l=new URLSearchParams({per_page:n,page:d,key:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await y.get(`https://pixabay.com/api/?${l}&q=${t}`)).data}async function g(t){console.log(t);const r=t.hits;r.length==0&&(s.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",c.error({title:"Error",message:"No such pictures",position:"topRight"}));const l=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");m.insertAdjacentHTML("beforeend",l);const a={captionsData:"alt"};let o=new f(".gallery a",a);o.on("show.simplelightbox",function(){}),o.refresh()}const m=document.querySelector("ul.gallery");let i="";const p=document.getElementById("search-input");let d=1,n=15,L=Math.ceil(n/n);p.addEventListener("input",t=>{i=p.value.trim(),m.innerHTML=""});const b=document.getElementById("search-button"),s=document.getElementById("load-button");document.getElementById("loader");b.addEventListener("click",async()=>{m.innerHTML="",loader.className="loader",d=1,n=15;try{if(i){s.className="";const t=await h(i);g(t),loader.className="loader visually-hidden",d+=1}}catch(t){s.className="visually-hidden",console.log(t),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});s.addEventListener("click",async()=>{loader.className="loader";try{if(i){const t=await h(i);if(document.querySelectorAll(".gallery-item").length>t.totalHits)return s.className="visually-hidden",c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});L=Math.ceil(t.totalHits/n),g(t),loader.className="loader visually-hidden",d+=1;const r=s.getBoundingClientRect();scrollBy(r.x,r.y)}}catch(t){console.log(t),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
