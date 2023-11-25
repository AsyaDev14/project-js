var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a.register;n("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,a=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})}}),n("2CmVG",function(e,t){e.exports=new URL("icons.f68dd9ec.svg",import.meta.url).toString()}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.3f0e1d84.js","2Gq7C","icons.f68dd9ec.svg","a2O5Z","cart.fa1b3999.js"]')),a("epHO8"),a("bUb57");const o=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),c=document.querySelector(".js-cart-list"),s=document.querySelector(".js-order-container"),i=document.querySelector(".js-empty-cart"),d=document.querySelector(".js-delete-all");document.querySelector(".js-delete"),document.querySelector(".js-success");var u={cartSpan:o,cartContent:l,productList:c,customerOrder:s,emptyCart:i,deleteAll:d},p=a("fO53X"),m=a("2CmVG"),f=a("bUb57");window.addEventListener("load",v);const y=new p.FoodBoutiqueAPI;function b({_id:e,name:t,img:r,category:a,size:n,price:o}){return`
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
              <span class="counter-value">0</span>
              <button class="counter-btn" type="button" data-action="increment">
                +
              </button>
            </div>
        </li>
    `}async function v(){if((0,f.updateCartFromStorage)(u.cartSpan),(0,f.updateCartOnHeader)(),null===localStorage.getItem("localKey")){u.cartContent.classList.add("visually-hidden"),u.emptyCart.classList.remove("visually-hidden");return}let e=JSON.parse(localStorage.getItem("localKey"));try{let t=e.map(e=>y.fetchById(e)),r=await Promise.all(t);!function(e){let t=e.map(b).join("");u.productList.insertAdjacentHTML("beforeend",t)}(r),function(e){let t=function(e){let t=0;for(let r of e)t+=r.price;return parseFloat(t.toFixed(2))}(e);u.customerOrder.innerHTML=`
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
    `}(r)}catch(e){console.error(e)}}var g=a("5uEKZ"),f=a("bUb57");u.deleteAll.addEventListener("click",function(){(0,g.default).remove("localKey"),u.productList.innerHTML="",(0,f.updateCartFromStorage)(u.cartSpan),(0,f.updateCartOnHeader)(),u.cartContent.classList.add("visually-hidden"),u.emptyCart.classList.remove("visually-hidden")}),u.productList.addEventListener("click",function(e){let t=e.target.closest("li").dataset.productId,r=(0,g.default).load("localKey"),a=[];for(let e=0;e<r.length;e++){let n=r[e];n!==t&&a.push(n)}if((0,g.default).remove("localKey"),0===a.length){u.cartContent.classList.add("visually-hidden"),u.emptyCart.classList.remove("visually-hidden"),(0,f.updateCartFromStorage)(u.cartSpan),(0,f.updateCartOnHeader)();return}(0,g.default).save("localKey",a),u.productList.innerHTML="",v()});
//# sourceMappingURL=cart.3f0e1d84.js.map
