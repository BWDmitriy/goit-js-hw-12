import{a as f,i as u,S as L}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function l(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(o){if(o.ep)return;o.ep=!0;const e=l(o);fetch(o.href,e)}})();async function m(t){t=encodeURIComponent(t);const s="42609290-856768105ab9e79485c69bf61",l=new URLSearchParams({per_page:r,page:c,key:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await f.get(`https://pixabay.com/api/?${l}&q=${t}`)).data}async function g(t){console.log(t);const s=t.hits;s.length==0&&(n.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"}));const l=s.map(e=>`<li class="gallery-item">
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
      </li>`).join("");h.insertAdjacentHTML("beforeend",l);const a={captionsData:"alt"};let o=new L(".gallery a",a);o.on("show.simplelightbox",function(){}),o.refresh()}const h=document.querySelector("ul.gallery");let i="";const p=document.getElementById("search-input");let c=1,r=15,y=Math.ceil(r/r);p.addEventListener("input",t=>{i=p.value.trim()});const b=document.getElementById("search-button"),n=document.getElementById("load-button");document.getElementById("loader");b.addEventListener("click",async()=>{h.innerHTML="",loader.className="loader",c=1,r=15;try{if(i){n.className="";const t=await m(i);y=Math.ceil(t.totalHits/r),g(t),c+=1}}catch(t){n.className="visually-hidden",console.log(t),u.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});n.addEventListener("click",async()=>{loader.className="loader";try{if(i){loader.className="loader visually-hidden";const t=await m(i);y=Math.ceil(t.totalHits/r),g(t),c+=1;const s=n.getBoundingClientRect();scrollBy(s.x,s.y)}}catch(t){console.log(t),u.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
