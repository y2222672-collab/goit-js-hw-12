import{a as d,S as p,i}from"./assets/vendor-BGjKfUOh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="53373379-a0adfea61f6f24f47cc9d7e62",y="https://pixabay.com/api/";async function h(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(y,{params:o})).data.hits}const u=document.querySelector(".gallery"),f=document.querySelector(".loader");let a;function g(){f.classList.remove("is-hidden")}function b(){f.classList.add("is-hidden")}function L(){u.innerHTML=""}function w(s){const o=s.map(e=>`
                <li class="gallery-item">
                    <a href="${e.largeImageURL}" class="gallery-link">
                        <img
                            src="${e.webformatURL}"
                            alt="${e.tags}"
                            class="gallery-image"
                        >
                    </a>
                    <div class="info-box">
                        <p class="info-item"><b>Likes</b> ${e.likes}</p>
                        <p class="info-item"><b>Views</b> ${e.views}</p>
                        <p class="info-item"><b>Comments</b> ${e.comments}</p>
                        <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
                    </div>
                </li>
            `).join("");u.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new p(".gallery a",{captionsData:"alt",captionDelay:250})}const S=document.querySelector(".form"),l=document.querySelector('input[name="search-text"]');S.addEventListener("submit",v);function v(s){s.preventDefault();const o=l.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}L(),g(),h(o).then(e=>{e.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):w(e)}).catch(e=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}).finally(()=>{b(),l.value=""})}
//# sourceMappingURL=index.js.map
