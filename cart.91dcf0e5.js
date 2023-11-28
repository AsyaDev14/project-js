function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},c=t.parcelRequired7c6;null==c&&((c=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var c={id:e,exports:{}};return s[e]=c,t.call(c.exports,c,c.exports),c.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=c);var a=c.register;a("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return s},set:function(e){return s=e},enumerable:!0,configurable:!0});var s,r=new Map;s=function(e,t){for(var s=0;s<t.length-1;s+=2)r.set(t[s],{baseUrl:e,path:t[s+1]})}}),a("2CmVG",function(e,t){e.exports=new URL("icons.ba4cab42.svg",import.meta.url).toString()}),c("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.91dcf0e5.js","2Gq7C","icons.ba4cab42.svg","9HE1Y","success.bc633c77.webp","e6Ojf","cart.ba926e28.js"]')),c("epHO8"),c("bUb57");const o=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),n=document.querySelector(".js-cart-list"),d=document.querySelector(".js-order-container"),i=document.querySelector(".js-empty-cart"),u=document.querySelector(".js-delete-all");document.querySelector(".js-delete");var p={cartSpan:o,cartContent:l,productList:n,customerOrder:d,emptyCart:i,deleteAll:u,successModal:document.querySelector(".js-success")},m=c("fO53X"),f=c("5uEKZ"),v=c("2CmVG"),y=c("bUb57"),g=c("jQ7WT"),h={};h=new URL("success.bc633c77.webp",import.meta.url).toString();var f=c("5uEKZ"),y=c("bUb57");function b(){localStorage.clear(),p.productList.innerHTML="",(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)(),p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden")}p.deleteAll.addEventListener("click",b),p.productList.addEventListener("click",function(e){if(!e.target.closest(".delete-btn.js-delete"))return;let t=e.target.closest("li").dataset.productId,s=(0,f.default).load("localKey"),r=[];for(let e=0;e<s.length;e++){let c=s[e];c!==t&&r.push(c)}if((0,f.default).remove("localKey"),0===r.length){(0,f.default).remove(`product_${t}`),p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden"),(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)();return}(0,f.default).save("localKey",r),(0,f.default).remove(`product_${t}`),p.productList.innerHTML="";let c=[];for(let e=0;e<r.length;e++){let t=r[e],s=(0,f.default).load(`product_${t}`);c.push(s)}w(c),C(E()),p.productList.children.length>3?p.productList.classList.add("show-scroll"):p.productList.classList.remove("show-scroll"),(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)()}),window.addEventListener("load",_);const L=new m.FoodBoutiqueAPI;function S({_id:t,name:s,img:r,category:c,size:a,price:o,counter:l}){return l||(l=1),`
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
                <use href="${e(v)}#icon-close"></use>
              </svg>
            </button>
            <div class="counter-container">
              <button class="counter-btn" type="button" data-action="decrement">
                -
              </button>
              <span class="counter-value">${l}</span>
              <button class="counter-btn" type="button" data-action="increment">
                +
              </button>
            </div>
        </li>
    `}function w(e){let t=e.map(S).join("");p.productList.insertAdjacentHTML("beforeend",t)}function C(e){let t=function(e){let t=0;for(let s of e){let e=s.counter;t+=s.price*e}return parseFloat(t.toFixed(2))}(e);p.customerOrder.innerHTML=`
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
    `}function E(){let e=(0,f.default).load("localKey"),t=[];for(let s=0;s<e.length;s++){let r=e[s],c=(0,f.default).load(`product_${r}`);c.counter?c.counter:(c.counter=1,(0,f.default).save(`product_${r}`,c)),t.push(c)}return t}async function _(){(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)();let e=localStorage.getItem("localKey");if(!e||"[]"===e){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden");return}let t=JSON.parse(localStorage.getItem("localKey"));try{let e=t.map(e=>L.fetchCachedById(e)),s=await Promise.all(e);w(s),C(E())}catch(e){console.error(e)}p.productList.children.length>3?p.productList.classList.add("show-scroll"):p.productList.classList.remove("show-scroll")}function H(){document.removeEventListener("keydown",$),p.successModal.classList.add("is-hidden"),(0,g.enableBodyScroll)(p.successModal),b()}function $({code:e}){p.successModal.querySelector(".js-close-success").removeEventListener("click",H),"Escape"===e&&H(),document.removeEventListener("keydown",$)}p.productList.addEventListener("click",e=>{let t=e.target;if(t.classList.contains("counter-btn")){let e=t.closest(".cart-list-item"),s=e.querySelector(".counter-value"),r=t.getAttribute("data-action"),c=parseInt(s.textContent);"increment"===r?c++:"decrement"===r&&c>1&&c--,s.textContent=c;let a=e.dataset.productId,o=(0,f.default).load(`product_${a}`);o.counter=c,(0,f.default).save(`product_${a}`,o),C(E())}}),p.customerOrder.addEventListener("submit",async t=>{t.preventDefault();let s=document.getElementById("email").value,r=p.productList.querySelectorAll(".cart-list-item"),c=[];r.forEach(e=>{let t=e.getAttribute("data-product-id"),s=parseFloat(e.querySelector(".cart-price").textContent.replace("$","")),r=parseInt(e.querySelector(".counter-value").textContent);c.push({_id:t,price:s,quantity:r})});try{let t=await L.postOrders(s,c);if(t){var a;a=t.message,p.successModal.innerHTML=`<div class="success-modal">
        <div class="order-success-window">
          <button class="success-delete-btn js-close-success" data-modal-close>
            <svg  width="22" height="22">
              <use href="${e(v)}#icon-close"></use>
            </svg>
          </button>
          <img class="success-img"
            src="${e(h)}"
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
      </div>`,p.successModal.classList.remove("is-hidden"),(0,g.disableBodyScroll)(p.successModal),p.successModal.querySelector(".js-close-success").addEventListener("click",H),document.addEventListener("keydown",$)}}catch(e){console.log(e)}});
//# sourceMappingURL=cart.91dcf0e5.js.map
