var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n.register;o("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("2CmVG",function(e,t){e.exports=new URL("icons.f68dd9ec.svg",import.meta.url).toString()}),n("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.57d0daee.js","2Gq7C","icons.f68dd9ec.svg","28uIt","cart.3c9f6f07.js","aIVm5","cart.runtime.f863a370.js"]')),n("epHO8"),n("bUb57");const a=document.querySelector(".js-cart-span"),c=document.querySelector(".js-all-cart-content"),s=document.querySelector(".js-cart-list"),l=(document.querySelector(".js-cart-list"),document.querySelector(".js-order-container")),i=document.querySelector(".js-empty-cart");document.querySelector(".js-delete-all"),document.querySelectorAll(".js-delete"),document.querySelector(".js-success");var u={cartSpan:a,cartContent:c,productList:s,customerOrder:l,emptyCart:i};n("5uEKZ");var d=n("fO53X"),p=n("2CmVG"),m=n("bUb57");window.addEventListener("load",y);const f=new d.FoodBoutiqueAPI;function b({_id:e,name:t,img:r,category:n,size:o,price:a}){return`
        <li class="cart-list-item" data-product-id=${e}>
            <img
              class="product-img"
              src="${r}"
              alt="${t}"
              loading='lazy'
            />
            <div class="product-info-container">
              <h3 class="product-name">${t}</h3>
              <div class="product-dscr">
                <p class="product-category"><span class="notation">Category: </span>${n}</p>
                <p class="product-size"><span class="notation"> Size: </span>${o}</p>
              </div>
              <p class="cart-price">$${a}</p>
            </div>
            <button class="delete-btn js-delete" type="button">
              <svg class="" width="18" height="18">
                <use href="${p&&p.__esModule?p.default:p}#icon-close"></use>
              </svg>
            </button>
            <div class="counter-container">
              <button class="counter-btn" type="button" data-action="decrement">
                -
              </button>
              <span class="counter-value">0</span>
              <button class="counter-btn" type="button" data-action="increment">
                +
              </button>
            </div>
        </li>
    `}async function y(){if((0,m.updateCartFromStorage)(u.cartSpan),null===localStorage.getItem("localKey")){u.cartContent.classList.add("visually-hidden"),u.emptyCart.classList.remove("visually-hidden");return}let e=JSON.parse(localStorage.getItem("localKey"));try{let t=e.map(e=>f.fetchById(e)),r=await Promise.all(t);!function(e){let t=e.map(b).join("");u.productList.insertAdjacentHTML("beforeend",t)}(r),function(e){let t=function(e){let t=0;for(let r of e)t+=r.price;return t}(e);u.customerOrder.innerHTML=`
        <h2 class="order-title">Your order</h2>
        <div class="total-container">
          <p class="sub-title">Total</p>
          <p class="total-price">
            <span class="notation">Sum: </span>$${t}
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
    `}(r)}catch(e){console.error(e)}}n("8ykkE");
//# sourceMappingURL=cart.57d0daee.js.map
