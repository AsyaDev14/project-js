!function(){function t(t,e,a,s){Object.defineProperty(t,e,{get:a,set:s,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},o=a.parcelRequired7c6;null==o&&((o=function(t){if(t in s)return s[t].exports;if(t in n){var e=n[t];delete n[t];var a={id:t,exports:{}};return s[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},a.parcelRequired7c6=o);var i=o.register;i("iE7OH",function(e,a){t(e.exports,"register",function(){return s},function(t){return s=t});var s,n=new Map;s=function(t,e){for(var a=0;a<e.length-1;a+=2)n.set(e[a],{baseUrl:t,path:e[a+1]})}}),i("aNJCr",function(e,a){t(e.exports,"getBundleURL",function(){return s},function(t){return s=t});var s,n={};s=function(t){var e=n[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[t]=e),e}}),o("iE7OH").register(o("aNJCr").getBundleURL("9p9yL"),JSON.parse('["9p9yL","index.9413a20e.js","8AgqT","icons.f68dd9ec.svg","339t1","cart.fa11685b.js"]'));var l={};l=o("aNJCr").getBundleURL("9p9yL")+"icons.f68dd9ec.svg";var c=o("4Nugj"),r=o("jzQFI");let d="localKey";(0,c.default).allProductsWrapperEl.addEventListener("click",function(t){let a,s;if(!t.target.closest("button"))return;t.stopPropagation();let n=t.target.closest("li").dataset.productId;(a=(0,r.default).load(d))||(a=[]),a.some(t=>t===n)||(a.push(n),(0,r.default).save(d,a),0)||(function(t){(0,c.default).allProductsWrapperEl.querySelectorAll(`[data-product-id='${t}']`).forEach(t=>{let a=t.querySelector("button");t.querySelector("button use").setAttribute("href",`${e(l)}#icon-check`),a.disabled=!0})}(n),s=Number(c.default.cartCountSpan.textContent),c.default.cartCountSpan.textContent=(++s).toString())}),o("7hKzD"),o("i8Q71"),o("4Nugj");var u=o("81wSt"),c=o("4Nugj");(0,c.default).productsListEl.addEventListener("click",f),(0,c.default).popularListElement.addEventListener("click",f),(0,c.default).discountProductsEl.addEventListener("click",f);let p=new u.FoodBoutiqueAPI;function f(t){if(t.preventDefault(),t.target.classList.contains("btn-buy")||t.target.classList.contains("products-list")||t.target.classList.contains("discount-btn-buy")||t.target.classList.contains("js-discount-products")||t.target.classList.contains("popular-list")||t.target.classList.contains("cart-btn")||t.target.classList.contains("js-icon-buy"))return;function a(){(0,c.default).modalEl.classList.add("is-hidden"),c.default.modalEl.innerHTML=""}(0,c.default).modalEl.classList.remove("is-hidden");let s=t.target.closest("li").dataset.productId;p.fetchById(s).then(t=>{(0,c.default).modalEl.insertAdjacentHTML("beforeend",function({_id:t,name:a,img:s,category:n,size:o,popularity:i,price:c,desc:r}){return`<div class="modal container" data-product-id="${t}">
      <button class="modal-close-btn button" type="button" data-modal-close>
    <svg class="modal-close-icon" width="22" height="22">
      <use href="${e(l)}#icon-close"></use>
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
      <p class="product-price">$${c}</p>
      <button class="modal-cart-btn" type="button">
        Add to
        <svg class="cart-modal-icon" width="18" height="18">
          <use href="${e(l)}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>`}(t)),(0,c.default).modalEl.querySelector("[data-modal-close]").addEventListener("click",a)}),document.addEventListener("keydown",function t({code:e}){"Escape"===e&&((0,c.default).modalEl.classList.add("is-hidden"),document.removeEventListener("keydown",t),c.default.modalEl.innerHTML="")}),(0,c.default).modalEl.addEventListener("click",function t(e){e.target.classList.contains("backdrop-modal")&&((0,c.default).modalEl.classList.add("is-hidden"),c.default.modalEl.innerHTML=""),(0,c.default).modalEl.removeEventListener("click",t)})}var u=o("81wSt"),c=o("4Nugj"),r=o("jzQFI");function g({_id:t,name:a,img:s,category:n,size:o,popularity:i,price:c,is10PercentOff:r}){return`
  <li class='product-item' data-product-id='${t}'>
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
      <p class='price'>$${c}</p>
      <button class='btn-buy' type='button'>
        <svg width='18' height='18' class='js-icon-buy'>
          <use href='${e(l)}#icon-cart' class='js-icon-buy' />
        </svg>
      </button>
    </div>
      ${r?`<svg class='product-discount' width='60' height='60'>
      <use href='${e(l)}#icon-discount'/>
    </svg>`:""}
  </li>`}let m=new u.FoodBoutiqueAPI;filtersFormSearchEL.addEventListener("submit",function(t){t.preventDefault(),(0,r.default).save("category",c.default.categorySelectEl.value),m.category=(0,r.default).load("category"),"Show All"===m.category&&((0,r.default).save("category",""),m.category=(0,r.default).load("category")),m.fetchProductsByQuery().then(t=>{let e=t.results.map(t=>g(t)).join("");c.default.productsListEl.innerHTML=e})}),m.fetchCategories().then(t=>{let e=t.map(t=>`<option value='${t}'>${t}</option>`).join("");(0,c.default).categorySelectEl.insertAdjacentHTML("beforeend",e),(0,c.default).categorySelectEl.insertAdjacentHTML("beforeend","<option value='Show All'>Show All</option>")});var u=o("81wSt"),c=o("4Nugj");function v(t){let{_id:a,name:s,img:n,category:o,size:i,popularity:c}=t;return`<li class="popular-item" data-product-id='${a}'>
      <div class="popular-product-img">
        <img src="${n}" alt="${s}" width="56" height="56" />
      </div>
      <button class="cart-btn" type="button">
        <svg width="12" height="12" class='js-icon-buy'>
          <use href="${e(l)}#icon-cart" class='js-icon-buy'></use>
        </svg>
      </button>
      <div class="popular-item-info">
        <h3 class="popular-info-title">${s}</h3>
        <p class="popular-category">
          <span class="popular-accent">Category:</span> ${o}
        </p>
        <p class="popular-info-descr">
          <span class="popular-accent">Size:</span> ${i}
          <span class="popular-accent">Popularity:</span> ${c}
        </p>
      </div>
    </li>`}function h({_id:t,name:a,img:s,price:n}){return`
  <li class="discount-item" data-product-id='${t}'>
            <div class="discount-img-box">
                <img class="discount-img" src="${s}">
                <svg class="discount-svg" width="60" height="60">
                    <use href="${e(l)}#icon-discount"></use>
                </svg>
            </div>
            <div class="discount-bottom">
                <p class="discount-txt">${a}</p>
                <p class="discount-txt discount-price">$${n}</p>
                <button class='discount-btn-buy' type='button' class='js-icon-buy'>
                    <svg width='18' height='18' class='js-icon-buy'>
                        <use href='${e(l)}#icon-cart' class='js-icon-buy'/>
                    </svg>
                </button>
            </div>
        </li>`}var b=o("i8Q71");let y=new u.FoodBoutiqueAPI;async function L(){try{var t,e,a;let s;(0,b.updateCartOnHeader)(),t=(await y.fetchProductsByQuery()).results,c.default.productsListEl.innerHTML=t.map(g).join("");let n=await y.fetchPopular();c.default.popularListElement.innerHTML=n.sort(()=>Math.random()-.5).map(v).join(""),e=await y.fetchDiscount(),a=c.default.discountProductsEl,s=Math.ceil(7*Math.random()),a.innerHTML=e.map(h).slice(s,s+2).join("")}catch(t){console.log("err")}}window.addEventListener("DOMContentLoaded",L)}();
//# sourceMappingURL=index.9413a20e.js.map
