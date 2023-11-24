!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var o=a.register;o("iE7OH",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e});var n,a=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,a={};n=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),a("iE7OH").register(a("aNJCr").getBundleURL("86U9d"),JSON.parse('["86U9d","cart.3d3ffe32.js","8AgqT","icons.f68dd9ec.svg","339t1","cart.b6dbdd86.js"]')),a("7hKzD"),a("i8Q71");let c=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),s=document.querySelector(".js-cart-list"),i=document.querySelector(".js-order-container"),u=document.querySelector(".js-empty-cart"),d=document.querySelector(".js-delete-all");document.querySelector(".js-delete"),document.querySelector(".js-success");var p={cartSpan:c,cartContent:l,productList:s,customerOrder:i,emptyCart:u,deleteAll:d};a("jzQFI");var f=a("81wSt"),m={};m=a("aNJCr").getBundleURL("86U9d")+"icons.f68dd9ec.svg";var v=a("i8Q71");window.addEventListener("load",b);let y=new f.FoodBoutiqueAPI;function g({_id:e,name:t,img:r,category:n,size:a,price:o}){var c;return`
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
                <p class="product-size"><span class="notation"> Size: </span>${a}</p>
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
              <span class="counter-value">0</span>
              <button class="counter-btn" type="button" data-action="increment">
                +
              </button>
            </div>
        </li>
    `}async function b(){if((0,v.updateCartFromStorage)(p.cartSpan),null===localStorage.getItem("localKey")){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden");return}let e=JSON.parse(localStorage.getItem("localKey"));try{let t=e.map(e=>y.fetchById(e)),r=await Promise.all(t);!function(e){let t=e.map(g).join("");p.productList.insertAdjacentHTML("beforeend",t)}(r),function(e){let t=function(e){let t=0;for(let r of e)t+=r.price;return t}(e);p.customerOrder.innerHTML=`
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
    `}(r)}catch(e){console.error(e)}}var h=a("jzQFI");p.deleteAll.addEventListener("click",function(){(0,h.default).remove("localKey"),p.productList.innerHTML=""}),p.productList.addEventListener("click",function(e){let t=e.target.closest("li").dataset.productId,r=(0,h.default).load("localKey"),n=[];for(let e=0;e<r.length;e++){let a=r[e];a!==t&&n.push(a)}(0,h.default).remove("localKey"),(0,h.default).save("localKey",n),p.productList.innerHTML="",b()})}();
//# sourceMappingURL=cart.3d3ffe32.js.map