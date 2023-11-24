var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o=a.register;o("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,a=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("2CmVG",function(e,t){e.exports=new URL("icons.f68dd9ec.svg",import.meta.url).toString()}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.48bb1743.js","2Gq7C","icons.f68dd9ec.svg","hG0XF","cart.77f71116.js"]')),a("epHO8"),a("bUb57");const n=document.querySelector(".js-cart-span"),c=document.querySelector(".js-all-cart-content"),l=document.querySelector(".js-cart-list"),s=document.querySelector(".js-order-container"),i=document.querySelector(".js-empty-cart"),d=document.querySelector(".js-delete-all");document.querySelector(".js-delete"),document.querySelector(".js-success");var u={cartSpan:n,cartContent:c,productList:l,customerOrder:s,emptyCart:i,deleteAll:d};a("5uEKZ");var p=a("fO53X"),f=a("2CmVG"),m=a("bUb57");window.addEventListener("load",v);const b=new p.FoodBoutiqueAPI;function y({_id:e,name:t,img:r,category:a,size:o,price:n}){return`
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
                <p class="product-size"><span class="notation"> Size: </span>${o}</p>
              </div>
              <p class="cart-price">$${n}</p>
            </div>
            <button class="delete-btn js-delete" type="button">
              <svg class="" width="18" height="18">
                <use href="${f&&f.__esModule?f.default:f}#icon-close"></use>
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
    `}async function v(){if((0,m.updateCartFromStorage)(u.cartSpan),(0,m.updateCartOnHeader)(),null===localStorage.getItem("localKey")){u.cartContent.classList.add("visually-hidden"),u.emptyCart.classList.remove("visually-hidden");return}let e=JSON.parse(localStorage.getItem("localKey"));try{let t=e.map(e=>b.fetchById(e)),r=await Promise.all(t);!function(e){let t=e.map(y).join("");u.productList.insertAdjacentHTML("beforeend",t)}(r),function(e){let t=function(e){let t=0;for(let r of e)t+=r.price;return parseFloat(t.toFixed(2))}(e);u.customerOrder.innerHTML=`
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
    `}(r)}catch(e){console.error(e)}}var g=a("5uEKZ"),m=a("bUb57");u.deleteAll.addEventListener("click",function(){(0,g.default).remove("localKey"),u.productList.innerHTML="",(0,m.updateCartFromStorage)(u.cartSpan),(0,m.updateCartOnHeader)()}),u.productList.addEventListener("click",function(e){let t=e.target.closest("li").dataset.productId,r=(0,g.default).load("localKey"),a=[];for(let e=0;e<r.length;e++){let o=r[e];o!==t&&a.push(o)}(0,g.default).remove("localKey"),(0,g.default).save("localKey",a),u.productList.innerHTML="",v()});
//# sourceMappingURL=cart.48bb1743.js.map
