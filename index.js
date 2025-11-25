import{a as L,S as b,i}from"./assets/vendor-BGjKfUOh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const w="53373379-a0adfea61f6f24f47cc9d7e62",v="https://pixabay.com/api/";async function S(o,e){const r={key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await L.get(v,{params:r})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more");let u;function q(){p.classList.remove("is-hidden")}function B(){p.classList.add("is-hidden")}function P(){m.innerHTML=""}function I(o){const e=o.map(r=>`
                <li class="gallery-item">
                    <a href="${r.largeImageURL}" class="gallery-link">
                        <img
                            src="${r.webformatURL}"
                            alt="${r.tags}"
                            class="gallery-image"
                        >
                    </a>
                    <div class="info-box">
                        <p class="info-item"><b>Likes</b> ${r.likes}</p>
                        <p class="info-item"><b>Views</b> ${r.views}</p>
                        <p class="info-item"><b>Comments</b> ${r.comments}</p>
                        <p class="info-item"><b>Downloads</b> ${r.downloads}</p>
                    </div>
                </li>
            `).join("");m.insertAdjacentHTML("beforeend",e),u?u.refresh():u=new b(".gallery a",{captionsData:"alt",captionDelay:250})}function H(){const o=document.querySelector(".gallery-item");return o?o.getBoundingClientRect().height:0}function $(){h.classList.remove("is-hidden")}function d(){h.classList.add("is-hidden")}let n=1,g="";const x=15;let c=0;const M=document.querySelector(".form"),f=document.querySelector('input[name="search-text"]'),R=document.querySelector(".load-more");M.addEventListener("submit",A);R.addEventListener("click",O);async function O(){n+=1,await y(!0)}async function A(o){o.preventDefault();const e=f.value.trim();if(!e){i.error({message:"Please enter a search term!",position:"topRight"});return}g=e,n=1,c=0,P(),d(),await y(!1),f.value=""}async function y(o=!1){q(),d();try{const e=await S(g,n),r=e.hits;if(r.length===0&&n===1){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}o||(c=e.totalHits),I(r),n*x<c?$():(d(),c>0&&i.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:5e3})),o&&E()}catch(e){i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}finally{B()}}function E(){const o=H();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
