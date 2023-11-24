function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},n=e.parcelRequired7c6;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){o[t]=e},e.parcelRequired7c6=n);var l=n.register;l("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return a},set:function(t){return a=t},enumerable:!0,configurable:!0});var a,o=new Map;a=function(t,e){for(var a=0;a<e.length-1;a+=2)o.set(e[a],{baseUrl:t,path:e[a+1]})}}),l("2CmVG",function(t,e){t.exports=new URL("icons.f68dd9ec.svg",import.meta.url).toString()}),n("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["7bk21","index.a35acf94.js","2Gq7C","icons.f68dd9ec.svg","28uIt","cart.3c9f6f07.js","aIVm5","cart.runtime.f863a370.js"]'));var s=n("2CmVG"),r=n("krGWQ"),i=n("5uEKZ");const c="localKey";(0,r.default).allProductsWrapperEl.addEventListener("click",function(e){let a,o;if(!e.target.closest("button"))return;e.stopPropagation();let n=e.target.closest("li").dataset.productId;(a=(0,i.default).load(c))||(a=[]),a.some(t=>t===n)||(a.push(n),(0,i.default).save(c,a),0)||(function(e){(0,r.default).allProductsWrapperEl.querySelectorAll(`[data-product-id='${e}']`).forEach(e=>{let a=e.querySelector("button");e.querySelector("button use").setAttribute("href",`${t(s)}#icon-check`),a.disabled=!0})}(n),o=Number(r.default.cartCountSpan.textContent),r.default.cartCountSpan.textContent=(++o).toString())}),n("epHO8"),n("bUb57"),n("krGWQ");var d=n("fO53X"),r=n("krGWQ"),s=n("2CmVG");(0,r.default).productsListEl.addEventListener("click",f),(0,r.default).popularListElement.addEventListener("click",f),(0,r.default).discountProductsEl.addEventListener("click",f);const u=new d.FoodBoutiqueAPI;function f(e){if(e.preventDefault(),e.target.classList.contains("btn-buy")||e.target.classList.contains("products-list")||e.target.classList.contains("discount-btn-buy")||e.target.classList.contains("js-discount-products")||e.target.classList.contains("popular-list")||e.target.classList.contains("cart-btn")||e.target.classList.contains("js-icon-buy"))return;function a(){(0,r.default).modalEl.classList.add("is-hidden"),r.default.modalEl.innerHTML=""}(0,r.default).modalEl.classList.remove("is-hidden");let o=e.target.closest("li").dataset.productId;u.fetchById(o).then(e=>{(0,r.default).modalEl.insertAdjacentHTML("beforeend",function({_id:e,name:a,img:o,category:n,size:l,popularity:r,price:i,desc:c}){return`<div class="modal container" data-product-id="${e}">
      <button class="modal-close-btn button" type="button" data-modal-close>
    <svg class="modal-close-icon" width="22" height="22">
      <use href="${t(s)}#icon-close"></use>
    </svg>
  </button>
    <div class="modal-card">
      <img
        src="${o}"
        alt="${a}"
        class="modal-img"
      />
      <div class="product-info">
        <h2 class="modal-product-name">${a}</h2>
        <ul class="product-info-list">
          <li class="product-info-item">
            Category: <span class="info-item-text">${n}</span>
          </li>
          <li class="product-info-item">
            Size: <span class="info-item-text">${l}</span>
          </li>
          <li class="product-info-item">
            Popularity: <span class="info-item-text">${r}</span>
          </li>
        </ul>
        <p class="product-description">
          ${c}
        </p>
      </div>
    </div>
    <div class="cart-modal-container">
      <p class="product-price">$${i}</p>
      <button class="modal-cart-btn" type="button">
        Add to
        <svg class="cart-modal-icon" width="18" height="18">
          <use href="${t(s)}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>`}(e)),(0,r.default).modalEl.querySelector("[data-modal-close]").addEventListener("click",a)}),document.addEventListener("keydown",function t({code:e}){"Escape"===e&&((0,r.default).modalEl.classList.add("is-hidden"),document.removeEventListener("keydown",t),r.default.modalEl.innerHTML="")}),(0,r.default).modalEl.addEventListener("click",function t(e){e.target.classList.contains("backdrop-modal")&&((0,r.default).modalEl.classList.add("is-hidden"),r.default.modalEl.innerHTML=""),(0,r.default).modalEl.removeEventListener("click",t)})}var d=n("fO53X"),r=n("krGWQ"),p=n("hXmjU");const m=document.querySelector(".filters-form-search"),g=new d.FoodBoutiqueAPI;m.addEventListener("submit",function(t){t.preventDefault(),g.category=r.default.categorySelectEl.value,"Show All"===g.category&&(g.category="",console.log(g.category)),g.fetchProductsByQuery().then(t=>{let e=t.results.map(t=>(0,p.getCardMarkup)(t)).join("");r.default.productsListEl.innerHTML=e})}),g.fetchCategories().then(t=>{let e=t.map(t=>`<option value='${t}'>${t}</option>`).join("");(0,r.default).categorySelectEl.insertAdjacentHTML("beforeend",e),(0,r.default).categorySelectEl.insertAdjacentHTML("beforeend","<option value='Show All'>Show All</option>")}),n("8ykkE");
//# sourceMappingURL=index.a35acf94.js.map
