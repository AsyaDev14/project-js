function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in s){var e=s[t];delete s[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){s[t]=e},e.parcelRequired7c6=o);var n=o.register;n("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return a},set:function(t){return a=t},enumerable:!0,configurable:!0});var a,s=new Map;a=function(t,e){for(var a=0;a<e.length-1;a+=2)s.set(e[a],{baseUrl:t,path:e[a+1]})}}),n("2CmVG",function(t,e){t.exports=new URL("icons.f68dd9ec.svg",import.meta.url).toString()}),o("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["7bk21","index.7aa5d0f1.js","2Gq7C","icons.f68dd9ec.svg","hG0XF","cart.77f71116.js"]'));var i=o("2CmVG"),c=o("krGWQ"),l=o("5uEKZ");const r="localKey";(0,c.default).allProductsWrapperEl.addEventListener("click",function(e){let a,s;if(!e.target.closest("button"))return;e.stopPropagation();let o=e.target.closest("li").dataset.productId;(a=(0,l.default).load(r))||(a=[]),a.some(t=>t===o)||(a.push(o),(0,l.default).save(r,a),0)||(function(e){(0,c.default).allProductsWrapperEl.querySelectorAll(`[data-product-id='${e}']`).forEach(e=>{let a=e.querySelector("button");e.querySelector("button use").setAttribute("href",`${t(i)}#icon-check`),a.disabled=!0})}(o),s=Number(c.default.cartCountSpan.textContent),c.default.cartCountSpan.textContent=(++s).toString())}),o("epHO8"),o("bUb57"),o("krGWQ");var d=o("fO53X"),c=o("krGWQ"),i=o("2CmVG");(0,c.default).productsListEl.addEventListener("click",p),(0,c.default).popularListElement.addEventListener("click",p),(0,c.default).discountProductsEl.addEventListener("click",p);const u=new d.FoodBoutiqueAPI;function p(e){if(e.preventDefault(),e.target.classList.contains("btn-buy")||e.target.classList.contains("products-list")||e.target.classList.contains("discount-btn-buy")||e.target.classList.contains("js-discount-products")||e.target.classList.contains("popular-list")||e.target.classList.contains("cart-btn")||e.target.classList.contains("js-icon-buy"))return;function a(){(0,c.default).modalEl.classList.add("is-hidden"),c.default.modalEl.innerHTML=""}(0,c.default).modalEl.classList.remove("is-hidden");let s=e.target.closest("li").dataset.productId;u.fetchById(s).then(e=>{(0,c.default).modalEl.insertAdjacentHTML("beforeend",function({_id:e,name:a,img:s,category:o,size:n,popularity:c,price:l,desc:r}){return`<div class="modal container" data-product-id="${e}">
      <button class="modal-close-btn button" type="button" data-modal-close>
    <svg class="modal-close-icon" width="22" height="22">
      <use href="${t(i)}#icon-close"></use>
    </svg>
  </button>
    <div class="modal-card">
      <img
        src="${s}"
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
            Size: <span class="info-item-text">${n}</span>
          </li>
          <li class="product-info-item">
            Popularity: <span class="info-item-text">${c}</span>
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
          <use href="${t(i)}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>`}(e)),(0,c.default).modalEl.querySelector("[data-modal-close]").addEventListener("click",a)}),document.addEventListener("keydown",function t({code:e}){"Escape"===e&&((0,c.default).modalEl.classList.add("is-hidden"),document.removeEventListener("keydown",t),c.default.modalEl.innerHTML="")}),(0,c.default).modalEl.addEventListener("click",function t(e){e.target.classList.contains("backdrop-modal")&&((0,c.default).modalEl.classList.add("is-hidden"),c.default.modalEl.innerHTML=""),(0,c.default).modalEl.removeEventListener("click",t)})}var d=o("fO53X"),c=o("krGWQ"),l=o("5uEKZ"),i=o("2CmVG");function f({_id:e,name:a,img:s,category:o,size:n,popularity:c,price:l,is10PercentOff:r}){return`
  <li class='product-item' data-product-id='${e}'>
    <div class='product-img-container'>
      <img
        src='${s}'
        alt='${a}'
        width='140'
        height='140'
        loading='lazy'/>
    </div>
    <h3 class='product-name'>${a}</h3>
    <ul class='product-props'>
      <li class='prop'>
        <span class='prop-name'>Category:</span>
        <span class='prop-value'>${o}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Size:</span>
        <span class='prop-value'>${n}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Popularity:</span>
        <span class='prop-value'>${c}</span>
      </li>
    </ul>
    <div class='product-buy-container'>
      <p class='price'>$${l}</p>
      <button class='btn-buy' type='button'>
        <svg width='18' height='18' class='js-icon-buy'>
          <use href='${t(i)}#icon-cart' class='js-icon-buy' />
        </svg>
      </button>
    </div>
      ${r?`<svg class='product-discount' width='60' height='60'>
      <use href='${t(i)}#icon-discount'/>
    </svg>`:""}
  </li>`}const m=new d.FoodBoutiqueAPI;filtersFormSearchEL.addEventListener("submit",function(t){t.preventDefault(),(0,l.default).save("category",c.default.categorySelectEl.value),m.category=(0,l.default).load("category"),"Show All"===m.category&&((0,l.default).save("category",""),m.category=(0,l.default).load("category")),m.fetchProductsByQuery().then(t=>{let e=t.results.map(t=>f(t)).join("");c.default.productsListEl.innerHTML=e})}),m.fetchCategories().then(t=>{let e=t.map(t=>`<option value='${t}'>${t}</option>`).join("");(0,c.default).categorySelectEl.insertAdjacentHTML("beforeend",e),(0,c.default).categorySelectEl.insertAdjacentHTML("beforeend","<option value='Show All'>Show All</option>")});var d=o("fO53X"),c=o("krGWQ");function g(e){let{_id:a,name:s,img:o,category:n,size:c,popularity:l}=e;return`<li class="popular-item" data-product-id='${a}'>
      <div class="popular-product-img">
        <img src="${o}" alt="${s}" width="56" height="56" />
      </div>
      <button class="cart-btn" type="button">
        <svg width="12" height="12" class='js-icon-buy'>
          <use href="${t(i)}#icon-cart" class='js-icon-buy'></use>
        </svg>
      </button>
      <div class="popular-item-info">
        <h3 class="popular-info-title">${s}</h3>
        <p class="popular-category">
          <span class="popular-accent">Category:</span> ${n}
        </p>
        <p class="popular-info-descr">
          <span class="popular-accent">Size:</span> ${c}
          <span class="popular-accent">Popularity:</span> ${l}
        </p>
      </div>
    </li>`}var i=(o("2CmVG"),o("2CmVG"));function v({_id:e,name:a,img:s,price:o}){return`
  <li class="discount-item" data-product-id='${e}'>
            <div class="discount-img-box">
                <img class="discount-img" src="${s}">
                <svg class="discount-svg" width="60" height="60">
                    <use href="${t(i)}#icon-discount"></use>
                </svg>
            </div>
            <div class="discount-bottom">
                <p class="discount-txt">${a}</p>
                <p class="discount-txt discount-price">$${o}</p>
                <button class='discount-btn-buy' type='button' class='js-icon-buy'>
                    <svg width='18' height='18' class='js-icon-buy'>
                        <use href='${t(i)}#icon-cart' class='js-icon-buy'/>
                    </svg>
                </button>
            </div>
        </li>`}var h=o("bUb57");const b=new d.FoodBoutiqueAPI;async function y(){try{var t,e,a;let s;(0,h.updateCartOnHeader)(),t=(await b.fetchProductsByQuery()).results,c.default.productsListEl.innerHTML=t.map(f).join("");let o=await b.fetchPopular();c.default.popularListElement.innerHTML=o.sort(()=>Math.random()-.5).map(g).join(""),e=await b.fetchDiscount(),a=c.default.discountProductsEl,s=Math.ceil(7*Math.random()),a.innerHTML=e.map(v).slice(s,s+2).join("")}catch(t){console.log("err")}}window.addEventListener("DOMContentLoaded",y);
//# sourceMappingURL=index.7aa5d0f1.js.map
