var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r.register;o("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),o("2CmVG",function(e,t){e.exports=new URL("icons.1c31bae1.svg",import.meta.url).toString()}),r("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["7bk21","index.18f1d3e6.js","2Gq7C","icons.1c31bae1.svg","28uIt","cart.ea51eff8.js","aIVm5","cart.runtime.3af2fe06.js"]'));var a=r("2CmVG"),l=r("krGWQ"),d=r("5uEKZ");const i="localKey";(0,l.default).allProductsWrapperEl.addEventListener("click",function(e){let t,n;if(!e.target.closest("button"))return;e.stopPropagation();let r=e.target.closest("li").dataset.productId;(t=(0,d.default).load(i))||(t=[]),t.some(e=>e===r)||(t.push(r),(0,d.default).save(i,t),0)||(function(e){(0,l.default).allProductsWrapperEl.querySelectorAll(`[data-product-id='${e}']`).forEach(e=>{let t=e.querySelector("button");e.querySelector("button use").setAttribute("href",`${a&&a.__esModule?a.default:a}#icon-check`),t.disabled=!0})}(r),n=Number(l.default.cartCountSpan.textContent),l.default.cartCountSpan.textContent=(++n).toString())}),r("epHO8"),r("bUb57"),r("krGWQ");var l=r("krGWQ");function c(e){e.preventDefault(),"UL"!==e.target.nodeName&&"BUTTON"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName&&"A"!==e.target.nodeName&&((0,l.default).modalEl.classList.remove("is-hidden"),(0,l.default).closeModalBtn.addEventListener("click",function(){(0,l.default).modalEl.classList.add("is-hidden")}),document.addEventListener("keydown",function e({code:t}){"Escape"===t&&((0,l.default).modalEl.classList.add("is-hidden"),document.removeEventListener("keydown",e))}),(0,l.default).modalEl.addEventListener("click",function e(t){t.target.classList.contains("backdrop-modal")&&(0,l.default).modalEl.classList.add("is-hidden"),(0,l.default).modalEl.removeEventListener("click",e)}))}(0,l.default).productsListEl.addEventListener("click",c),(0,l.default).popularListElement.addEventListener("click",c),(0,l.default).discountProductsEl.addEventListener("click",c);var s=r("fO53X"),l=r("krGWQ"),u=r("hXmjU");const f=document.querySelector(".filters-form-search"),p=new s.FoodBoutiqueAPI;f.addEventListener("submit",function(e){e.preventDefault(),p.category=l.default.categorySelectEl.value,"Show All"===p.category&&(p.category="",console.log(p.category)),p.fetchProductsByQuery().then(e=>{let t=e.results.map(e=>(0,u.getCardMarkup)(e)).join("");l.default.productsListEl.innerHTML=t})}),p.fetchCategories().then(e=>{let t=e.map(e=>`<option value='${e}'>${e}</option>`).join("");(0,l.default).categorySelectEl.insertAdjacentHTML("beforeend",t),(0,l.default).categorySelectEl.insertAdjacentHTML("beforeend","<option value='Show All'>Show All</option>")}),r("8ykkE");
//# sourceMappingURL=index.18f1d3e6.js.map
