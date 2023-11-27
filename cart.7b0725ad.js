function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var c=a.register;c("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return s},set:function(e){return s=e},enumerable:!0,configurable:!0});var s,r=new Map;s=function(e,t){for(var s=0;s<t.length-1;s+=2)r.set(t[s],{baseUrl:e,path:t[s+1]})}}),c("2CmVG",function(e,t){e.exports=new URL("icons.ba4cab42.svg",import.meta.url).toString()}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.7b0725ad.js","2Gq7C","icons.ba4cab42.svg","9HE1Y","success.bc633c77.webp","e6Ojf","cart.1f8dc9ee.js"]')),a("epHO8"),a("bUb57");const o=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),n=document.querySelector(".js-cart-list"),i=document.querySelector(".js-order-container"),d=document.querySelector(".js-empty-cart"),u=document.querySelector(".js-delete-all");document.querySelector(".js-delete");var p={cartSpan:o,cartContent:l,productList:n,customerOrder:i,emptyCart:d,deleteAll:u,successModal:document.querySelector(".js-success")},m=a("fO53X"),f=a("2CmVG"),y=a("bUb57"),v=a("jQ7WT"),b={};b=new URL("success.bc633c77.webp",import.meta.url).toString(),window.addEventListener("load",L);const g=new m.FoodBoutiqueAPI;function h({_id:t,name:s,img:r,category:a,size:c,price:o}){return`
        <li class="cart-list-item" data-product-id=${t}>
            <img
              class="product-img"
              src="${r}"
              alt="${s}"
              width="64"
              height="64"
              loading='lazy'
            />
            <div class="product-info-container">
              <h3 class="product-name">${s}</h3>
              <div class="product-dscr">
                <p class="product-category"><span class="notation">Category: </span>${a}</p>
                <p class="product-size"><span class="notation"> Size: </span>${c}</p>
              </div>
              <p class="cart-price">$${o}</p>
            </div>
            <button class="delete-btn js-delete" type="button">
              <svg class="" width="18" height="18">
                <use href="${e(f)}#icon-close"></use>
              </svg>
            </button>
            <div class="counter-container">
              <button class="counter-btn" type="button" data-action="decrement">
                -
              </button>
              <span class="counter-value">1</span>
              <button class="counter-btn" type="button" data-action="increment">
                +
              </button>
            </div>
        </li>
    `}function S(e){let t=function(e){let t=0;for(let s of e){let e=void 0===s.quantity?1:s.quantity;t+=s.price*e}return parseFloat(t.toFixed(2))}(e);p.customerOrder.innerHTML=`
        <h2 class="order-title">Your order</h2>
        <div class="total-container">
          <p class="sub-title">Total</p>
          <p class="total-price">
            <span class="notation">Sum: </span>$${t}
          </p>
        </div>
        <form class="cart-form js-cart-form" name="Order">
          <div class="input-container">
            <label class="notation" for="email">Mail:</label>
            <input
              type="email"
              id="email"
              pattern=".+@example.com"
              placeholder="Enter your email"
              autocomplete="email"
              required
            />
          </div>
          <button class="order-btn" type="submit">Checkout</button>
        </form>
    `}async function L(){(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)();let e=localStorage.getItem("localKey");if(!e||"[]"===e){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden");return}let t=JSON.parse(localStorage.getItem("localKey"));try{let e=t.map(e=>g.fetchCachedById(e)),s=await Promise.all(e);!function(e){let t=e.map(h).join("");p.productList.insertAdjacentHTML("beforeend",t)}(s),S(s)}catch(e){console.error(e)}p.productList.children.length>3?p.productList.classList.add("show-scroll"):p.productList.classList.remove("show-scroll")}function C(){p.successModal.classList.add("is-hidden"),(0,v.enableBodyScroll)(p.successModal),localStorage.clear(),p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden")}p.productList.addEventListener("click",e=>{let t=e.target;if(t.classList.contains("counter-btn")){let e=t.closest(".cart-list-item").querySelector(".counter-value"),s=t.getAttribute("data-action"),r=parseInt(e.textContent);"increment"===s?r++:"decrement"===s&&r>1&&r--,e.textContent=r,function(){let e=p.productList.querySelectorAll(".cart-list-item"),t=[];e.forEach(e=>{let s=e.getAttribute("data-product-id"),r=parseFloat(e.querySelector(".cart-price").textContent.replace("$","")),a=parseInt(e.querySelector(".counter-value").textContent);t.push({_id:s,price:r,quantity:a})}),S(t)}()}}),p.customerOrder.addEventListener("submit",async t=>{t.preventDefault();let s=document.getElementById("email").value,r=p.productList.querySelectorAll(".cart-list-item"),a=[];r.forEach(e=>{let t=e.getAttribute("data-product-id"),s=parseFloat(e.querySelector(".cart-price").textContent.replace("$","")),r=parseInt(e.querySelector(".counter-value").textContent);a.push({_id:t,price:s,quantity:r})});try{let t=await g.postOrders(s,a);if(t){var c;c=t.message,p.successModal.innerHTML=`<div class="success-modal">
        <div class="order-success-window">
          <button class="success-delete-btn js-close-success" data-modal-close>
            <svg  width="22" height="22">
              <use href="${e(f)}#icon-close"></use>
            </svg>
          </button>
          <img class="success-img"
            src="${e(b)}"
            alt="Success Order"
            width="140"
            height="140"
            loading="lazy"
          />
          <div class="success-text">
            <h2 class="success-title">Order success</h2>
            <p class="success-descr">
              ${c}
            </p>
          </div>
        </div>
      </div>`,p.successModal.classList.remove("is-hidden"),(0,v.disableBodyScroll)(p.successModal),p.successModal.querySelector(".js-close-success").addEventListener("click",C)}}catch(e){console.log(e)}});var q=a("5uEKZ"),y=a("bUb57");p.deleteAll.addEventListener("click",function(){localStorage.clear(),p.productList.innerHTML="",(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)(),p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden")}),p.productList.addEventListener("click",function(e){if(!e.target.closest(".delete-btn.js-delete"))return;let t=e.target.closest("li").dataset.productId,s=(0,q.default).load("localKey"),r=[];for(let e=0;e<s.length;e++){let a=s[e];a!==t&&r.push(a)}if((0,q.default).remove("localKey"),0===r.length){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden"),(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)();return}(0,q.default).save("localKey",r),p.productList.innerHTML="",L()});
//# sourceMappingURL=cart.7b0725ad.js.map
