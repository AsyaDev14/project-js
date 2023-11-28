!function(){function e(e,t,r,s){Object.defineProperty(e,t,{get:r,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},c={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in s)return s[e].exports;if(e in c){var t=c[e];delete c[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){c[e]=t},r.parcelRequired7c6=a);var o=a.register;o("iE7OH",function(t,r){e(t.exports,"register",function(){return s},function(e){return s=e});var s,c=new Map;s=function(e,t){for(var r=0;r<t.length-1;r+=2)c.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return s},function(e){return s=e});var s,c={};s=function(e){var t=c[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),c[e]=t),t}}),a("iE7OH").register(a("aNJCr").getBundleURL("86U9d"),JSON.parse('["86U9d","cart.c16acd6d.js","8AgqT","icons.ba4cab42.svg","hRigT","success.bc633c77.webp","ceYlc","cart.2f07cb4a.js"]')),a("7hKzD"),a("i8Q71");let n=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),d=document.querySelector(".js-cart-list"),i=document.querySelector(".js-order-container"),u=document.querySelector(".js-empty-cart"),p=document.querySelector(".js-delete-all");document.querySelector(".js-delete");var f={cartSpan:n,cartContent:l,productList:d,customerOrder:i,emptyCart:u,deleteAll:p,successModal:document.querySelector(".js-success")},m=a("81wSt"),v=a("jzQFI"),h={};h=a("aNJCr").getBundleURL("86U9d")+"icons.ba4cab42.svg";var g=a("i8Q71"),y=a("gnsaF"),b={};b=a("aNJCr").getBundleURL("86U9d")+"success.bc633c77.webp";var v=a("jzQFI"),g=a("i8Q71");function L(){localStorage.clear(),f.productList.innerHTML="",(0,g.updateCartFromStorage)(f.cartSpan),(0,g.updateCartOnHeader)(),f.cartContent.classList.add("visually-hidden"),f.emptyCart.classList.remove("visually-hidden")}f.deleteAll.addEventListener("click",L),f.productList.addEventListener("click",function(e){if(!e.target.closest(".delete-btn.js-delete"))return;let t=e.target.closest("li").dataset.productId,r=(0,v.default).load("localKey"),s=[];for(let e=0;e<r.length;e++){let c=r[e];c!==t&&s.push(c)}if((0,v.default).remove("localKey"),0===s.length){(0,v.default).remove(`product_${t}`),f.cartContent.classList.add("visually-hidden"),f.emptyCart.classList.remove("visually-hidden"),(0,g.updateCartFromStorage)(f.cartSpan),(0,g.updateCartOnHeader)();return}(0,v.default).save("localKey",s),(0,v.default).remove(`product_${t}`),f.productList.innerHTML="";let c=[];for(let e=0;e<s.length;e++){let t=s[e],r=(0,v.default).load(`product_${t}`);c.push(r)}C(c),E($()),f.productList.children.length>3?f.productList.classList.add("show-scroll"):f.productList.classList.remove("show-scroll"),(0,g.updateCartFromStorage)(f.cartSpan),(0,g.updateCartOnHeader)()}),window.addEventListener("load",_);let S=new m.FoodBoutiqueAPI;function w({_id:e,name:r,img:s,category:c,size:a,price:o,counter:n}){return n||(n=1),`
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
              <p class="cart-price">$${o}</p>
            </div>
            <button class="delete-btn js-delete" type="button">
              <svg class="" width="18" height="18">
                <use href="${t(h)}#icon-close"></use>
              </svg>
            </button>
            <div class="counter-container">
              <button class="counter-btn" type="button" data-action="decrement">
                -
              </button>
              <span class="counter-value">${n}</span>
              <button class="counter-btn" type="button" data-action="increment">
                +
              </button>
            </div>
        </li>
    `}function C(e){let t=e.map(w).join("");f.productList.insertAdjacentHTML("beforeend",t)}function E(e){let t=function(e){let t=0;for(let r of e){let e=r.counter;t+=r.price*e}return parseFloat(t.toFixed(2))}(e);f.customerOrder.innerHTML=`
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
    `}function $(){let e=(0,v.default).load("localKey"),t=[];for(let r=0;r<e.length;r++){let s=e[r],c=(0,v.default).load(`product_${s}`);c.counter?c.counter:(c.counter=1,(0,v.default).save(`product_${s}`,c)),t.push(c)}return t}async function _(){(0,g.updateCartFromStorage)(f.cartSpan),(0,g.updateCartOnHeader)();let e=localStorage.getItem("localKey");if(!e||"[]"===e){f.cartContent.classList.add("visually-hidden"),f.emptyCart.classList.remove("visually-hidden");return}let t=JSON.parse(localStorage.getItem("localKey"));try{let e=t.map(e=>S.fetchCachedById(e)),r=await Promise.all(e);C(r),E($())}catch(e){console.error(e)}f.productList.children.length>3?f.productList.classList.add("show-scroll"):f.productList.classList.remove("show-scroll")}function H(){document.removeEventListener("keydown",j),f.successModal.classList.add("is-hidden"),(0,y.enableBodyScroll)(f.successModal),L()}function j({code:e}){f.successModal.querySelector(".js-close-success").removeEventListener("click",H),"Escape"===e&&H(),document.removeEventListener("keydown",j)}f.productList.addEventListener("click",e=>{let t=e.target;if(t.classList.contains("counter-btn")){let e=t.closest(".cart-list-item"),r=e.querySelector(".counter-value"),s=t.getAttribute("data-action"),c=parseInt(r.textContent);"increment"===s?c++:"decrement"===s&&c>1&&c--,r.textContent=c;let a=e.dataset.productId,o=(0,v.default).load(`product_${a}`);o.counter=c,(0,v.default).save(`product_${a}`,o),E($())}}),f.customerOrder.addEventListener("submit",async e=>{e.preventDefault();let r=document.getElementById("email").value,s=f.productList.querySelectorAll(".cart-list-item"),c=[];s.forEach(e=>{let t=e.getAttribute("data-product-id"),r=parseFloat(e.querySelector(".cart-price").textContent.replace("$","")),s=parseInt(e.querySelector(".counter-value").textContent);c.push({_id:t,price:r,quantity:s})});try{let e=await S.postOrders(r,c);if(e){var a;a=e.message,f.successModal.innerHTML=`<div class="success-modal">
        <div class="order-success-window">
          <button class="success-delete-btn js-close-success" data-modal-close>
            <svg  width="22" height="22">
              <use href="${t(h)}#icon-close"></use>
            </svg>
          </button>
          <img class="success-img"
            src="${t(b)}"
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
      </div>`,f.successModal.classList.remove("is-hidden"),(0,y.disableBodyScroll)(f.successModal),f.successModal.querySelector(".js-close-success").addEventListener("click",H),document.addEventListener("keydown",j)}}catch(e){console.log(e)}})}();
//# sourceMappingURL=cart.c16acd6d.js.map
