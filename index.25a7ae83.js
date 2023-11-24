!function(){function t(t,e,s,a){Object.defineProperty(t,e,{get:s,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=s.parcelRequired7c6;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var s={id:t,exports:{}};return a[t]=s,e.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},s.parcelRequired7c6=o);var i=o.register;i("iE7OH",function(e,s){t(e.exports,"register",function(){return a},function(t){return a=t});var a,n=new Map;a=function(t,e){for(var s=0;s<e.length-1;s+=2)n.set(e[s],{baseUrl:t,path:e[s+1]})}}),i("aNJCr",function(e,s){t(e.exports,"getBundleURL",function(){return a},function(t){return a=t});var a,n={};a=function(t){var e=n[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[t]=e),e}}),o("iE7OH").register(o("aNJCr").getBundleURL("9p9yL"),JSON.parse('["9p9yL","index.25a7ae83.js","8AgqT","icons.f68dd9ec.svg","339t1","cart.b6dbdd86.js"]'));var c={};c=o("aNJCr").getBundleURL("9p9yL")+"icons.f68dd9ec.svg";var l=o("4Nugj"),r=o("jzQFI");let d="localKey";(0,l.default).allProductsWrapperEl.addEventListener("click",function(t){let s,a;if(!t.target.closest("button"))return;t.stopPropagation();let n=t.target.closest("li").dataset.productId;(s=(0,r.default).load(d))||(s=[]),s.some(t=>t===n)||(s.push(n),(0,r.default).save(d,s),0)||(function(t){(0,l.default).allProductsWrapperEl.querySelectorAll(`[data-product-id='${t}']`).forEach(t=>{let s=t.querySelector("button");t.querySelector("button use").setAttribute("href",`${e(c)}#icon-check`),s.disabled=!0})}(n),a=Number(l.default.cartCountSpan.textContent),l.default.cartCountSpan.textContent=(++a).toString())}),o("7hKzD"),o("i8Q71"),o("4Nugj");var u=o("81wSt"),l=o("4Nugj");(0,l.default).productsListEl.addEventListener("click",f),(0,l.default).popularListElement.addEventListener("click",f),(0,l.default).discountProductsEl.addEventListener("click",f);let p=new u.FoodBoutiqueAPI;function f(t){if(t.preventDefault(),t.target.classList.contains("btn-buy")||t.target.classList.contains("products-list")||t.target.classList.contains("discount-btn-buy")||t.target.classList.contains("js-discount-products")||t.target.classList.contains("popular-list")||t.target.classList.contains("cart-btn")||t.target.classList.contains("js-icon-buy"))return;function s(){(0,l.default).modalEl.classList.add("is-hidden"),l.default.modalEl.innerHTML=""}(0,l.default).modalEl.classList.remove("is-hidden");let a=t.target.closest("li").dataset.productId;p.fetchById(a).then(t=>{(0,l.default).modalEl.insertAdjacentHTML("beforeend",function({_id:t,name:s,img:a,category:n,size:o,popularity:i,price:l,desc:r}){return`<div class="modal container" data-product-id="${t}">
      <button class="modal-close-btn button" type="button" data-modal-close>
    <svg class="modal-close-icon" width="22" height="22">
      <use href="${e(c)}#icon-close"></use>
    </svg>
  </button>
    <div class="modal-card">
      <img
        src="${a}"
        alt="${s}"
        class="modal-img"
      />
      <div class="product-info">
        <h2 class="modal-product-name">${s}</h2>
        <ul class="product-info-list">
          <li class="product-info-item">
            Category: <span class="info-item-text">${n}</span>
          </li>
          <li class="product-info-item">
            Size: <span class="info-item-text">${o}</span>
          </li>
          <li class="product-info-item">
            Popularity: <span class="info-item-text">${i}</span>
          </li>
        </ul>
        <p class="product-description">
          ${r}
        </p>
      </div>
    </div>
    <div class="cart-modal-container">
      <p class="product-price">$${l}</p>
      <button class="modal-cart-btn" type="button">
        Add to
        <svg class="cart-modal-icon" width="18" height="18">
          <use href="${e(c)}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>`}(t)),(0,l.default).modalEl.querySelector("[data-modal-close]").addEventListener("click",s)}),document.addEventListener("keydown",function t({code:e}){"Escape"===e&&((0,l.default).modalEl.classList.add("is-hidden"),document.removeEventListener("keydown",t),l.default.modalEl.innerHTML="")}),(0,l.default).modalEl.addEventListener("click",function t(e){e.target.classList.contains("backdrop-modal")&&((0,l.default).modalEl.classList.add("is-hidden"),l.default.modalEl.innerHTML=""),(0,l.default).modalEl.removeEventListener("click",t)})}var u=o("81wSt"),l=o("4Nugj");function g({_id:t,name:s,img:a,category:n,size:o,popularity:i,price:l,is10PercentOff:r}){return`
  <li class='product-item' data-product-id='${t}'>
    <div class='product-img-container'>
      <img
        src='${a}'
        alt='${s}'
        width='140'
        height='140'
        loading='lazy'/>
    </div>
    <h3 class='product-name'>${s}</h3>
    <ul class='product-props'>
      <li class='prop'>
        <span class='prop-name'>Category:</span>
        <span class='prop-value'>${n}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Size:</span>
        <span class='prop-value'>${o}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Popularity:</span>
        <span class='prop-value'>${i}</span>
      </li>
    </ul>
    <div class='product-buy-container'>
      <p class='price'>$${l}</p>
      <button class='btn-buy' type='button'>
        <svg width='18' height='18' class='js-icon-buy'>
          <use href='${e(c)}#icon-cart' class='js-icon-buy' />
        </svg>
      </button>
    </div>
      ${r?`<svg class='product-discount' width='60' height='60'>
      <use href='${e(c)}#icon-discount'/>
    </svg>`:""}
  </li>`}let m=document.querySelector(".filters-form-search"),h=new u.FoodBoutiqueAPI;m.addEventListener("submit",function(t){t.preventDefault(),h.category=l.default.categorySelectEl.value,"Show All"===h.category&&(h.category="",console.log(h.category)),h.fetchProductsByQuery().then(t=>{let e=t.results.map(t=>g(t)).join("");l.default.productsListEl.innerHTML=e})}),h.fetchCategories().then(t=>{let e=t.map(t=>`<option value='${t}'>${t}</option>`).join("");(0,l.default).categorySelectEl.insertAdjacentHTML("beforeend",e),(0,l.default).categorySelectEl.insertAdjacentHTML("beforeend","<option value='Show All'>Show All</option>")});var u=o("81wSt"),l=o("4Nugj");function v(t){let{_id:s,name:a,img:n,category:o,size:i,popularity:l}=t;return`<li class="popular-item" data-product-id='${s}'>
      <div class="popular-product-img">
        <img src="${n}" alt="${a}" width="56" height="56" />
      </div>
      <button class="cart-btn" type="button">
        <svg width="12" height="12" class='js-icon-buy'>
          <use href="${e(c)}#icon-cart" class='js-icon-buy'></use>
        </svg>
      </button>
      <div class="popular-item-info">
        <h3 class="popular-info-title">${a}</h3>
        <p class="popular-category">
          <span class="popular-accent">Category:</span> ${o}
        </p>
        <p class="popular-info-descr">
          <span class="popular-accent">Size:</span> ${i}
          <span class="popular-accent">Popularity:</span> ${l}
        </p>
      </div>
    </li>`}function b({_id:t,name:s,img:a,price:n}){return`
  <li class="discount-item" data-product-id='${t}'>
            <div class="discount-img-box">
                <img class="discount-img" src="${a}">
                <svg class="discount-svg" width="60" height="60">
                    <use href="${e(c)}#icon-discount"></use>
                </svg>
            </div>
            <div class="discount-bottom">
                <p class="discount-txt">${s}</p>
                <p class="discount-txt discount-price">$${n}</p>
                <button class='discount-btn-buy' type='button' class='js-icon-buy'>
                    <svg width='18' height='18' class='js-icon-buy'>
                        <use href='${e(c)}#icon-cart' class='js-icon-buy'/>
                    </svg>
                </button>
            </div>
        </li>`}var y=o("i8Q71");let L=new u.FoodBoutiqueAPI;async function E(){try{var t,e,s;let a;(0,y.updateCartOnHeader)(),t=(await L.fetchProductsByQuery()).results,l.default.productsListEl.innerHTML=t.map(g).join("");let n=await L.fetchPopular();l.default.popularListElement.innerHTML=n.sort(()=>Math.random()-.5).map(v).join(""),e=await L.fetchDiscount(),s=l.default.discountProductsEl,a=Math.ceil(7*Math.random()),s.innerHTML=e.map(b).slice(a,a+2).join("")}catch(t){console.log("err")}}window.addEventListener("DOMContentLoaded",E)}();
//# sourceMappingURL=index.25a7ae83.js.map
