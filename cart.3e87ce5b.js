!function(){function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var o=n.register;o("iE7OH",function(t,r){e(t.exports,"register",function(){return a},function(e){return a=e});var a,n=new Map;a=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,n={};a=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),n("iE7OH").register(n("aNJCr").getBundleURL("86U9d"),JSON.parse('["86U9d","cart.3e87ce5b.js","8AgqT","icons.f68dd9ec.svg","339t1","cart.fa11685b.js"]')),n("7hKzD"),n("i8Q71");let c=document.querySelector(".js-cart-span"),l=document.querySelector(".js-all-cart-content"),s=document.querySelector(".js-cart-list"),i=document.querySelector(".js-order-container"),u=document.querySelector(".js-empty-cart"),d=document.querySelector(".js-delete-all");document.querySelector(".js-delete"),document.querySelector(".js-success");var p={cartSpan:c,cartContent:l,productList:s,customerOrder:i,emptyCart:u,deleteAll:d};n("jzQFI");var f=n("81wSt"),m={};m=n("aNJCr").getBundleURL("86U9d")+"icons.f68dd9ec.svg";var v=n("i8Q71");window.addEventListener("load",b);let y=new f.FoodBoutiqueAPI;function g({_id:e,name:t,img:r,category:a,size:n,price:o}){var c;return`
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
    `}async function b(){if((0,v.updateCartFromStorage)(p.cartSpan),(0,v.updateCartOnHeader)(),null===localStorage.getItem("localKey")){p.cartContent.classList.add("visually-hidden"),p.emptyCart.classList.remove("visually-hidden");return}let e=JSON.parse(localStorage.getItem("localKey"));try{let t=e.map(e=>y.fetchById(e)),r=await Promise.all(t);!function(e){let t=e.map(g).join("");p.productList.insertAdjacentHTML("beforeend",t)}(r),function(e){let t=function(e){let t=0;for(let r of e)t+=r.price;return parseFloat(t.toFixed(2))}(e);p.customerOrder.innerHTML=`
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
    `}(r)}catch(e){console.error(e)}}var h=n("jzQFI"),v=n("i8Q71");p.deleteAll.addEventListener("click",function(){(0,h.default).remove("localKey"),p.productList.innerHTML="",(0,v.updateCartFromStorage)(p.cartSpan),(0,v.updateCartOnHeader)()}),p.productList.addEventListener("click",function(e){let t=e.target.closest("li").dataset.productId,r=(0,h.default).load("localKey"),a=[];for(let e=0;e<r.length;e++){let n=r[e];n!==t&&a.push(n)}(0,h.default).remove("localKey"),(0,h.default).save("localKey",a),p.productList.innerHTML="",b()})}();
//# sourceMappingURL=cart.3e87ce5b.js.map
