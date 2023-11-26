!function(){function t(t,e,r,a){Object.defineProperty(t,e,{get:r,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=e.parcelRequired7c6;null==n&&((n=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=n);var o=n.register;o("iE7OH",function(e,r){t(e.exports,"register",function(){return a},function(t){return a=t});var a,n=new Map;a=function(t,e){for(var r=0;r<e.length-1;r+=2)n.set(e[r],{baseUrl:t,path:e[r+1]})}}),o("aNJCr",function(e,r){t(e.exports,"getBundleURL",function(){return a},function(t){return a=t});var a,n={};a=function(t){var e=n[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[t]=e),e}}),n("iE7OH").register(n("aNJCr").getBundleURL("86U9d"),JSON.parse('["86U9d","cart.9b36481c.js","8AgqT","icons.fd7a5cf9.svg","ffbzm","cart.b6918210.js"]')),n("7hKzD"),n("i8Q71");let c=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),s=document.querySelector(".js-cart-list"),i=document.querySelector(".js-order-container"),d=document.querySelector(".js-empty-cart"),u=document.querySelector(".js-delete-all");document.querySelector(".js-delete"),document.querySelector(".js-success");var p={cartSpan:c,cartContent:l,productList:s,customerOrder:i,emptyCart:d,deleteAll:u},f=n("81wSt"),m={};m=n("aNJCr").getBundleURL("86U9d")+"icons.fd7a5cf9.svg";var y=n("i8Q71");window.addEventListener("load",()=>h(!0));let v=new f.FoodBoutiqueAPI;function g({_id:t,name:e,img:r,category:a,size:n,price:o}){var c;return`
        <li class="cart-list-item" data-product-id=${t}>
            <img
              class="product-img"
              src="${r}"
              alt="${e}"
              width="64"
              height="64"
              loading='lazy'
            />
            <div class="product-info-container">
              <h3 class="product-name">${e}</h3>
              <div class="product-dscr">
                <p class="product-category"><span class="notation">Category: </span>${a}</p>
                <p class="product-size"><span class="notation"> Size: </span>${n}</p>
              </div>
              <p class="cart-price">$${o}</p>
            </div>
            <button class="delete-btn js-delete" type="button">
              <svg class="" width="18" height="18">
                <use href="${(c=m)&&c.__esModule?c.default:c}#icon-close"></use>
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
    `}function b(t){let e=function(t){let e=0;for(let r of t){let t=void 0===r.quantity?1:r.quantity;e+=r.price*t}return parseFloat(e.toFixed(2))}(t);p.customerOrder.innerHTML=`
        <h2 class="order-title">Your order</h2>
        <div class="total-container">
          <p class="sub-title">Total</p>
          <p class="total-price">
            <span class="notation">Sum: </span>$${e}
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
    `}async function h(t=!1){(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)();let e=localStorage.getItem("localKey");if(!e||"[]"===e){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden");return}let r=JSON.parse(localStorage.getItem("localKey"));try{let e=r.map(t=>v.fetchCachedById(t)),a=await Promise.all(e);!function(t){let e=t.map(g).join("");p.productList.insertAdjacentHTML("beforeend",e)}(a),b(a),t&&p.productList.addEventListener("click",t=>{let e=t.target;if(e.classList.contains("counter-btn")){let t=e.getAttribute("data-action"),r=e.parentElement.querySelector(".counter-value"),n=Number(r.textContent);"increment"===t?n++:"decrement"===t&&n>1&&n--,r.textContent=n;let o=e.closest(".cart-list-item").dataset.productId;b(a.map(t=>(t._id===o&&(t.quantity=n),t)));return}})}catch(t){console.error(t)}p.productList.children.length>3?p.productList.classList.add("show-scroll"):p.productList.classList.remove("show-scroll")}console.dir(document.querySelector(".input-container #email"));var L=n("jzQFI"),y=n("i8Q71");p.deleteAll.addEventListener("click",function(){(0,L.default).remove("localKey"),p.productList.innerHTML="",(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)(),p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden")}),p.productList.addEventListener("click",function(t){if(!t.target.closest(".delete-btn.js-delete"))return;let e=t.target.closest("li").dataset.productId,r=(0,L.default).load("localKey"),a=[];for(let t=0;t<r.length;t++){let n=r[t];n!==e&&a.push(n)}if((0,L.default).remove("localKey"),0===a.length){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden"),(0,y.updateCartFromStorage)(p.cartSpan),(0,y.updateCartOnHeader)();return}(0,L.default).save("localKey",a),p.productList.innerHTML="",h()})}();
//# sourceMappingURL=cart.9b36481c.js.map
