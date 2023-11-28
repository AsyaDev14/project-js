!function(){function e(e,t,r,s){Object.defineProperty(e,t,{get:r,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},c={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in s)return s[e].exports;if(e in c){var t=c[e];delete c[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){c[e]=t},r.parcelRequired7c6=a);var n=a.register;n("iE7OH",function(t,r){e(t.exports,"register",function(){return s},function(e){return s=e});var s,c=new Map;s=function(e,t){for(var r=0;r<t.length-1;r+=2)c.set(t[r],{baseUrl:e,path:t[r+1]})}}),n("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return s},function(e){return s=e});var s,c={};s=function(e){var t=c[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),c[e]=t),t}}),a("iE7OH").register(a("aNJCr").getBundleURL("86U9d"),JSON.parse('["86U9d","cart.67e766dc.js","8AgqT","icons.ba4cab42.svg","hRigT","success.bc633c77.webp","ceYlc","cart.7788b690.js"]')),a("7hKzD"),a("i8Q71");let o=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),i=document.querySelector(".js-cart-list"),d=document.querySelector(".js-order-container"),u=document.querySelector(".js-empty-cart"),p=document.querySelector(".js-delete-all");document.querySelector(".js-delete");var f={cartSpan:o,cartContent:l,productList:i,customerOrder:d,emptyCart:u,deleteAll:p,successModal:document.querySelector(".js-success")},m=a("81wSt"),v={};v=a("aNJCr").getBundleURL("86U9d")+"icons.ba4cab42.svg";var y=a("i8Q71"),g=a("gnsaF"),h={};h=a("aNJCr").getBundleURL("86U9d")+"success.bc633c77.webp";var b=a("jzQFI"),y=a("i8Q71");function L(){localStorage.clear(),f.productList.innerHTML="",(0,y.updateCartFromStorage)(f.cartSpan),(0,y.updateCartOnHeader)(),f.cartContent.classList.add("visually-hidden"),f.emptyCart.classList.remove("visually-hidden")}f.deleteAll.addEventListener("click",L),f.productList.addEventListener("click",function(e){if(!e.target.closest(".delete-btn.js-delete"))return;let t=e.target.closest("li").dataset.productId,r=(0,b.default).load("localKey"),s=[];for(let e=0;e<r.length;e++){let c=r[e];c!==t&&s.push(c)}if((0,b.default).remove("localKey"),0===s.length){f.cartContent.classList.add("visually-hidden"),f.emptyCart.classList.remove("visually-hidden"),(0,y.updateCartFromStorage)(f.cartSpan),(0,y.updateCartOnHeader)();return}(0,b.default).save("localKey",s),f.productList.innerHTML="",q()}),window.addEventListener("load",q);let S=new m.FoodBoutiqueAPI;function w({_id:e,name:r,img:s,category:c,size:a,price:n}){return`
        <li class="cart-list-item" data-product-id=${e}>
            <img
              class="product-img"
              src="${s}"
              alt="${r}"
              width="64"
              height="64"
              loading='lazy'
            />
            <div class="product-info-container">
              <h3 class="product-name">${r}</h3>
              <div class="product-dscr">
                <p class="product-category"><span class="notation">Category: </span>${c}</p>
                <p class="product-size"><span class="notation"> Size: </span>${a}</p>
              </div>
              <p class="cart-price">$${n}</p>
            </div>
            <button class="delete-btn js-delete" type="button">
              <svg class="" width="18" height="18">
                <use href="${t(v)}#icon-close"></use>
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
    `}function C(e){let t=function(e){let t=0;for(let r of e){let e=void 0===r.quantity?1:r.quantity;t+=r.price*e}return parseFloat(t.toFixed(2))}(e);f.customerOrder.innerHTML=`
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
    `}async function q(){(0,y.updateCartFromStorage)(f.cartSpan),(0,y.updateCartOnHeader)();let e=localStorage.getItem("localKey");if(!e||"[]"===e){f.cartContent.classList.add("visually-hidden"),f.emptyCart.classList.remove("visually-hidden");return}let t=JSON.parse(localStorage.getItem("localKey"));try{let e=t.map(e=>S.fetchCachedById(e)),r=await Promise.all(e);!function(e){let t=e.map(w).join("");f.productList.insertAdjacentHTML("beforeend",t)}(r),C(r)}catch(e){console.error(e)}f.productList.children.length>3?f.productList.classList.add("show-scroll"):f.productList.classList.remove("show-scroll")}function E(){document.removeEventListener("keydown",H),f.successModal.classList.add("is-hidden"),(0,g.enableBodyScroll)(f.successModal),L()}function H({code:e}){f.successModal.querySelector(".js-close-success").removeEventListener("click",E),"Escape"===e&&E(),document.removeEventListener("keydown",H)}f.productList.addEventListener("click",e=>{let t=e.target;if(t.classList.contains("counter-btn")){let e=t.closest(".cart-list-item").querySelector(".counter-value"),r=t.getAttribute("data-action"),s=parseInt(e.textContent);"increment"===r?s++:"decrement"===r&&s>1&&s--,e.textContent=s,function(){let e=f.productList.querySelectorAll(".cart-list-item"),t=[];e.forEach(e=>{let r=e.getAttribute("data-product-id"),s=parseFloat(e.querySelector(".cart-price").textContent.replace("$","")),c=parseInt(e.querySelector(".counter-value").textContent);t.push({_id:r,price:s,quantity:c})}),C(t)}()}}),f.customerOrder.addEventListener("submit",async e=>{e.preventDefault();let r=document.getElementById("email").value,s=f.productList.querySelectorAll(".cart-list-item"),c=[];s.forEach(e=>{let t=e.getAttribute("data-product-id"),r=parseFloat(e.querySelector(".cart-price").textContent.replace("$","")),s=parseInt(e.querySelector(".counter-value").textContent);c.push({_id:t,price:r,quantity:s})});try{let e=await S.postOrders(r,c);if(e){var a;a=e.message,f.successModal.innerHTML=`<div class="success-modal">
        <div class="order-success-window">
          <button class="success-delete-btn js-close-success" data-modal-close>
            <svg  width="22" height="22">
              <use href="${t(v)}#icon-close"></use>
            </svg>
          </button>
          <img class="success-img"
            src="${t(h)}"
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
      </div>`,f.successModal.classList.remove("is-hidden"),(0,g.disableBodyScroll)(f.successModal),f.successModal.querySelector(".js-close-success").addEventListener("click",E),document.addEventListener("keydown",H)}}catch(e){console.log(e)}})}();
//# sourceMappingURL=cart.67e766dc.js.map
