import{a as y,i as l}from"./assets/vendor-22aaac4a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function u(r){r=encodeURIComponent(r),c.innerHTML='<div class="loader"></div>';const o="42609290-856768105ab9e79485c69bf61",n=new URLSearchParams({_limit:m,_page:s,key:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await y.get(`https://pixabay.com/api/?${n}&q=${r}`)).data}const c=document.querySelector("ul.gallery");let f="";const d=document.getElementById("search-input");let s=1,m=15;const g=Math.ceil(100/m);d.addEventListener("input",r=>{f=d.value.trim(),c.innerHTML=""});const p=document.getElementById("search-button");p.addEventListener("click",async()=>{if(c.innerHTML='<div class="loader"></div>',s>g)return l.error({position:"topRight",message:"We're sorry, there are no more posts to load"});try{if(f){const r=await u();u(r),s+=1,s>1&&(p.textContent="Fetch more posts")}}catch(r){console.log(r),l.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
