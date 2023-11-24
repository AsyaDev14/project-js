!function(){function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=a.parcelRequired7c6;null==l&&((l=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){o[t]=e},a.parcelRequired7c6=l);var r=l.register;r("iE7OH",function(e,a){t(e.exports,"register",function(){return n},function(t){return n=t});var n,o=new Map;n=function(t,e){for(var a=0;a<e.length-1;a+=2)o.set(e[a],{baseUrl:t,path:e[a+1]})}}),r("aNJCr",function(e,a){t(e.exports,"getBundleURL",function(){return n},function(t){return n=t});var n,o={};n=function(t){var e=o[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[t]=e),e}}),l("iE7OH").register(l("aNJCr").getBundleURL("9p9yL"),JSON.parse('["9p9yL","index.236b4d94.js","8AgqT","icons.f68dd9ec.svg","djwkb","cart.208fd48c.js","6XgHV","cart.runtime.5e745ec2.js"]'));var s={};s=l("aNJCr").getBundleURL("9p9yL")+"icons.f68dd9ec.svg";var i=l("4Nugj"),c=l("jzQFI");let d="localKey";(0,i.default).allProductsWrapperEl.addEventListener("click",function(t){let a,n;if(!t.target.closest("button"))return;t.stopPropagation();let o=t.target.closest("li").dataset.productId;(a=(0,c.default).load(d))||(a=[]),a.some(t=>t===o)||(a.push(o),(0,c.default).save(d,a),0)||(function(t){(0,i.default).allProductsWrapperEl.querySelectorAll(`[data-product-id='${t}']`).forEach(t=>{let a=t.querySelector("button");t.querySelector("button use").setAttribute("href",`${e(s)}#icon-check`),a.disabled=!0})}(o),n=Number(i.default.cartCountSpan.textContent),i.default.cartCountSpan.textContent=(++n).toString())}),l("7hKzD"),l("i8Q71"),l("4Nugj");var u=l("81wSt"),i=l("4Nugj");(0,i.default).productsListEl.addEventListener("click",p),(0,i.default).popularListElement.addEventListener("click",p),(0,i.default).discountProductsEl.addEventListener("click",p);let f=new u.FoodBoutiqueAPI;function p(t){if(t.preventDefault(),t.target.classList.contains("btn-buy")||t.target.classList.contains("products-list")||t.target.classList.contains("discount-btn-buy")||t.target.classList.contains("js-discount-products")||t.target.classList.contains("popular-list")||t.target.classList.contains("cart-btn")||t.target.classList.contains("js-icon-buy"))return;function a(){(0,i.default).modalEl.classList.add("is-hidden"),i.default.modalEl.innerHTML=""}(0,i.default).modalEl.classList.remove("is-hidden");let n=t.target.closest("li").dataset.productId;f.fetchById(n).then(t=>{(0,i.default).modalEl.insertAdjacentHTML("beforeend",function({_id:t,name:a,img:n,category:o,size:l,popularity:r,price:i,desc:c}){return`<div class="modal container" data-product-id="${t}">
      <button class="modal-close-btn button" type="button" data-modal-close>
    <svg class="modal-close-icon" width="22" height="22">
      <use href="${e(s)}#icon-close"></use>
    </svg>
  </button>
    <div class="modal-card">
      <img
        src="${n}"
        alt="${a}"
        class="modal-img"
      />
      <div class="product-info">
        <h2 class="modal-product-name">${a}</h2>
        <ul class="product-info-list">
          <li class="product-info-item">
            Category: <span class="info-item-text">${o}</span>
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
          <use href="${e(s)}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>`}(t)),(0,i.default).modalEl.querySelector("[data-modal-close]").addEventListener("click",a)}),document.addEventListener("keydown",function t({code:e}){"Escape"===e&&((0,i.default).modalEl.classList.add("is-hidden"),document.removeEventListener("keydown",t),i.default.modalEl.innerHTML="")}),(0,i.default).modalEl.addEventListener("click",function t(e){e.target.classList.contains("backdrop-modal")&&((0,i.default).modalEl.classList.add("is-hidden"),i.default.modalEl.innerHTML=""),(0,i.default).modalEl.removeEventListener("click",t)})}var u=l("81wSt"),i=l("4Nugj"),g=l("juvAr");let m=document.querySelector(".filters-form-search"),v=new u.FoodBoutiqueAPI;m.addEventListener("submit",function(t){t.preventDefault(),v.category=i.default.categorySelectEl.value,"Show All"===v.category&&(v.category="",console.log(v.category)),v.fetchProductsByQuery().then(t=>{let e=t.results.map(t=>(0,g.getCardMarkup)(t)).join("");i.default.productsListEl.innerHTML=e})}),v.fetchCategories().then(t=>{let e=t.map(t=>`<option value='${t}'>${t}</option>`).join("");(0,i.default).categorySelectEl.insertAdjacentHTML("beforeend",e),(0,i.default).categorySelectEl.insertAdjacentHTML("beforeend","<option value='Show All'>Show All</option>")}),l("9JQa4")}();
//# sourceMappingURL=index.236b4d94.js.map
