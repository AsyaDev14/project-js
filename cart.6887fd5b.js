function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},c=t.parcelRequired7c6;null==c&&((c=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var c={id:e,exports:{}};return s[e]=c,t.call(c.exports,c,c.exports),c.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=c);var a=c.register;a("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return s},set:function(e){return s=e},enumerable:!0,configurable:!0});var s,r=new Map;s=function(e,t){for(var s=0;s<t.length-1;s+=2)r.set(t[s],{baseUrl:e,path:t[s+1]})}}),a("2CmVG",function(e,t){e.exports=new URL("icons.ba4cab42.svg",import.meta.url).toString()}),c("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.6887fd5b.js","2Gq7C","icons.ba4cab42.svg","9HE1Y","success.bc633c77.webp","e6Ojf","cart.1f8dc9ee.js"]')),c("epHO8"),c("bUb57");const o=document.querySelector(".js-cart-span"),n=document.querySelector(".js-all-cart-content"),l=document.querySelector(".js-cart-list"),i=document.querySelector(".js-order-container"),d=document.querySelector(".js-empty-cart"),u=document.querySelector(".js-delete-all");document.querySelector(".js-delete");var p={cartSpan:o,cartContent:n,productList:l,customerOrder:i,emptyCart:d,deleteAll:u,successModal:document.querySelector(".js-success")},m=c("fO53X"),f=c("2CmVG"),v=c("bUb57"),y=c("jQ7WT"),b={};b=new URL("success.bc633c77.webp",import.meta.url).toString();var g=c("5uEKZ"),v=c("bUb57");function h(){localStorage.clear(),p.productList.innerHTML="",(0,v.updateCartFromStorage)(p.cartSpan),(0,v.updateCartOnHeader)(),p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden")}p.deleteAll.addEventListener("click",h),p.productList.addEventListener("click",function(e){if(!e.target.closest(".delete-btn.js-delete"))return;let t=e.target.closest("li").dataset.productId,s=(0,g.default).load("localKey"),r=[];for(let e=0;e<s.length;e++){let c=s[e];c!==t&&r.push(c)}if((0,g.default).remove("localKey"),0===r.length){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden"),(0,v.updateCartFromStorage)(p.cartSpan),(0,v.updateCartOnHeader)();return}(0,g.default).save("localKey",r),p.productList.innerHTML="",C()}),window.addEventListener("load",C);const S=new m.FoodBoutiqueAPI;function L({_id:t,name:s,img:r,category:c,size:a,price:o}){return`
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
                <p class="product-category"><span class="notation">Category: </span>${c}</p>
                <p class="product-size"><span class="notation"> Size: </span>${a}</p>
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
    `}function w(e){let t=function(e){let t=0;for(let s of e){let e=void 0===s.quantity?1:s.quantity;t+=s.price*e}return parseFloat(t.toFixed(2))}(e);p.customerOrder.innerHTML=`
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
              pattern=".{8,}"
              placeholder="Enter your email"
              autocomplete="email"
              title="valid@email.com"
              required
            />
          </div>
          <button class="order-btn" type="submit">Checkout</button>
        </form>
    `}async function C(){(0,v.updateCartFromStorage)(p.cartSpan),(0,v.updateCartOnHeader)();let e=localStorage.getItem("localKey");if(!e||"[]"===e){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden");return}let t=JSON.parse(localStorage.getItem("localKey"));try{let e=t.map(e=>S.fetchCachedById(e)),s=await Promise.all(e);!function(e){let t=e.map(L).join("");p.productList.insertAdjacentHTML("beforeend",t)}(s),w(s)}catch(e){console.error(e)}p.productList.children.length>3?p.productList.classList.add("show-scroll"):p.productList.classList.remove("show-scroll")}function E(){document.removeEventListener("keydown",q),p.successModal.classList.add("is-hidden"),(0,y.enableBodyScroll)(p.successModal),h()}function q({code:e}){p.successModal.querySelector(".js-close-success").removeEventListener("click",E),"Escape"===e&&E(),document.removeEventListener("keydown",q)}p.productList.addEventListener("click",e=>{let t=e.target;if(t.classList.contains("counter-btn")){let e=t.closest(".cart-list-item").querySelector(".counter-value"),s=t.getAttribute("data-action"),r=parseInt(e.textContent);"increment"===s?r++:"decrement"===s&&r>1&&r--,e.textContent=r,function(){let e=p.productList.querySelectorAll(".cart-list-item"),t=[];e.forEach(e=>{let s=e.getAttribute("data-product-id"),r=parseFloat(e.querySelector(".cart-price").textContent.replace("$","")),c=parseInt(e.querySelector(".counter-value").textContent);t.push({_id:s,price:r,quantity:c})}),w(t)}()}}),p.customerOrder.addEventListener("submit",async t=>{t.preventDefault();let s=document.getElementById("email").value,r=p.productList.querySelectorAll(".cart-list-item"),c=[];r.forEach(e=>{let t=e.getAttribute("data-product-id"),s=parseFloat(e.querySelector(".cart-price").textContent.replace("$","")),r=parseInt(e.querySelector(".counter-value").textContent);c.push({_id:t,price:s,quantity:r})});try{let t=await S.postOrders(s,c);if(t){var a;a=t.message,p.successModal.innerHTML=`<div class="success-modal">
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
              ${a}
            </p>
          </div>
        </div>
      </div>`,p.successModal.classList.remove("is-hidden"),(0,y.disableBodyScroll)(p.successModal),p.successModal.querySelector(".js-close-success").addEventListener("click",E),document.addEventListener("keydown",q)}}catch(e){console.log(e)}});
//# sourceMappingURL=cart.6887fd5b.js.map
