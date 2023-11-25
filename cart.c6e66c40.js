var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in r){var a=r[t];delete r[t];var n={id:t,exports:{}};return e[t]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequired7c6=a);var n=a.register;n("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return r},set:function(t){return r=t},enumerable:!0,configurable:!0});var r,a=new Map;r=function(t,e){for(var r=0;r<e.length-1;r+=2)a.set(e[r],{baseUrl:t,path:e[r+1]})}}),n("2CmVG",function(t,e){t.exports=new URL("icons.f68dd9ec.svg",import.meta.url).toString()}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.c6e66c40.js","2Gq7C","icons.f68dd9ec.svg","a2O5Z","cart.71bccf20.js"]')),a("epHO8"),a("bUb57");const o=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),c=document.querySelector(".js-cart-list"),s=document.querySelector(".js-order-container"),i=document.querySelector(".js-empty-cart"),d=document.querySelector(".js-delete-all");document.querySelector(".js-delete"),document.querySelector(".js-success");var u={cartSpan:o,cartContent:l,productList:c,customerOrder:s,emptyCart:i,deleteAll:d},p=a("fO53X"),m=a("2CmVG"),f=a("bUb57");window.addEventListener("load",g);const y=new p.FoodBoutiqueAPI;function b({_id:t,name:e,img:r,category:a,size:n,price:o}){return`
        <li class="cart-list-item" data-product-id=${t}>
            <img
              class="product-img"
              src="${r}"
              alt="${e}"
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
                <use href="${m&&m.__esModule?m.default:m}#icon-close"></use>
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
    `}function v(t){let e=function(t){let e=0;for(let r of t){let t=void 0===r.quantity?1:r.quantity;e+=r.price*t}return parseFloat(e.toFixed(2))}(t);u.customerOrder.innerHTML=`
        <h2 class="order-title">Your order</h2>
        <div class="total-container">
          <p class="sub-title">Total</p>
          <p class="total-price">
            <span class="notation">Sum: </span>$${e}
          </p>
        </div>
        <form class="cart-form" name="Order">
          <div class="input-container">
            <label class="notation" for="email">Mail:</label>
            <input
              type="email"
              id="email"
              pattern=".+@example.com"
              placeholder="Enter your email"
              required
            />
          </div>
          <button class="order-btn">Checkout</button>
        </form>
    `}async function g(){if((0,f.updateCartFromStorage)(u.cartSpan),(0,f.updateCartOnHeader)(),null===localStorage.getItem("localKey")){u.cartContent.classList.add("visually-hidden"),u.emptyCart.classList.remove("visually-hidden");return}let t=JSON.parse(localStorage.getItem("localKey"));try{let e=t.map(t=>y.fetchById(t)),r=await Promise.all(e);!function(t){let e=t.map(b).join("");u.productList.insertAdjacentHTML("beforeend",e)}(r),v(r),u.productList.addEventListener("click",t=>{let e=t.target;if(e.classList.contains("counter-btn")){let t=e.getAttribute("data-action"),a=e.parentElement.querySelector(".counter-value"),n=Number(a.textContent);"increment"===t?n++:"decrement"===t&&n>1&&n--,a.textContent=n;let o=e.closest(".cart-list-item").dataset.productId;v(r.map(t=>(t._id===o&&(t.quantity=n),t)));return}})}catch(t){console.error(t)}}var S=a("5uEKZ"),f=a("bUb57");u.deleteAll.addEventListener("click",function(){(0,S.default).remove("localKey"),u.productList.innerHTML="",(0,f.updateCartFromStorage)(u.cartSpan),(0,f.updateCartOnHeader)(),u.cartContent.classList.add("visually-hidden"),u.emptyCart.classList.remove("visually-hidden")}),u.productList.addEventListener("click",function(t){if(!t.target.closest(".delete-btn.js-delete"))return;let e=t.target.closest("li").dataset.productId,r=(0,S.default).load("localKey"),a=[];for(let t=0;t<r.length;t++){let n=r[t];n!==e&&a.push(n)}if((0,S.default).remove("localKey"),0===a.length){u.cartContent.classList.add("visually-hidden"),u.emptyCart.classList.remove("visually-hidden"),(0,f.updateCartFromStorage)(u.cartSpan),(0,f.updateCartOnHeader)();return}(0,S.default).save("localKey",a),u.productList.innerHTML="",g()});
//# sourceMappingURL=cart.c6e66c40.js.map
