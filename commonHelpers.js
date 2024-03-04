import{a as y,i as u,S as L}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(o){if(o.ep)return;o.ep=!0;const e=n(o);fetch(o.href,e)}})();async function h(t){t=encodeURIComponent(t),i.innerHTML='<div class="loader"></div>';const r="42609290-856768105ab9e79485c69bf61",n=new URLSearchParams({per_page:s,page:c,key:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await y.get(`https://pixabay.com/api/?${n}&q=${t}`)).data}async function m(t){i.innerHTML="",console.log(t);const r=t.hits;r.length==0&&u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const n=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");i.insertAdjacentHTML("beforeend",n);const l={captionsData:"alt"};let o=new L(".gallery a",l);o.on("show.simplelightbox",function(){}),o.refresh()}const i=document.querySelector("ul.gallery");let a="";const g=document.getElementById("search-input");let c=1,s=15,f=Math.ceil(s/s);g.addEventListener("input",t=>{a=g.value.trim(),i.innerHTML=""});const b=document.getElementById("search-button"),p=document.getElementById("load-button");b.addEventListener("click",async()=>{i.innerHTML='<div class="loader"></div>',c=1,s=15;try{if(a){p.classList="";const t=await h(a);f=Math.ceil(t.totalHits/s),m(t),c+=1,s=30}}catch(t){console.log(t),u.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});p.addEventListener("click",async()=>{i.innerHTML='<div class="loader"></div>';try{if(a){const t=await h(a);f=Math.ceil(t.totalHits/s),m(t),c+=1,s=15*c;const r=p.getBoundingClientRect();scrollBy(r.x,r.y)}}catch(t){console.log(t),u.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
