!function(){function t(t,e,a,r){Object.defineProperty(t,e,{get:a,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},i=a.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in s){var e=s[t];delete s[t];var a={id:t,exports:{}};return r[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},a.parcelRequired7c6=i);var n=i.register;n("iE7OH",function(e,a){t(e.exports,"register",function(){return r},function(t){return r=t});var r,s=new Map;r=function(t,e){for(var a=0;a<e.length-1;a+=2)s.set(e[a],{baseUrl:t,path:e[a+1]})}}),n("aNJCr",function(e,a){t(e.exports,"getBundleURL",function(){return r},function(t){return r=t});var r,s={};r=function(t){var e=s[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),s[t]=e),e}}),i("iE7OH").register(i("aNJCr").getBundleURL("9p9yL"),JSON.parse('["9p9yL","index.2803d73e.js","8AgqT","icons.1c31bae1.svg","8iqWS","cart.893ddeda.js"]'));var o={};o=i("aNJCr").getBundleURL("9p9yL")+"icons.1c31bae1.svg";var c=i("4Nugj"),u=i("jzQFI");let l="localKey";(0,c.default).allProductsWrapperEl.addEventListener("click",function(t){let a,r;if(!t.target.closest("button"))return;t.stopPropagation();let s=t.target.closest("li").dataset.productId;(a=(0,u.default).load(l))||(a=[]),a.some(t=>t===s)||(a.push(s),(0,u.default).save(l,a),0)||(function(t){(0,c.default).allProductsWrapperEl.querySelectorAll(`[data-product-id='${t}']`).forEach(t=>{let a=t.querySelector("button");t.querySelector("button use").setAttribute("href",`${e(o)}#icon-check`),a.disabled=!0})}(s),r=Number(c.default.cartCountSpan.textContent),c.default.cartCountSpan.textContent=(++r).toString())}),i("7hKzD"),i("i8Q71"),i("4Nugj"),i("5xtVg");var p=i("dIxxU");class d{constructor(){this.page=1,this.query=null,this.category=null,this.byABC=!0,this.byPrice=!0,this.byPopularity=!0,this.limit=9,p.default.defaults.baseURL="https://food-boutique.b.goit.study"}async fetchProductsByQuery(){let t={params:{keyword:this.query,category:this.category,byABC:this.byABC,byPrice:this.byPrice,byPopularity:this.byPopularity,page:this.page,limit:this.limit}};return(await (0,p.default).get("/api/products",t)).data}async fetchPopular(){return(await (0,p.default).get("/api/products/popular",{params:{limit:5}})).data}async fetchDiscount(){return(await (0,p.default).get("/api/products/discount")).data}async fetchCategories(){return(await (0,p.default).get("/api/products/categories")).data}async fetchById(t){return(await (0,p.default).get(`/api/products/${t}`)).data}async postOrders(){return(await (0,p.default).post("/api/products/orders")).data}async postSubscription(){return(await (0,p.default).post("/api/products/subscription")).data}}var c=i("4Nugj");function f({_id:t,name:a,img:r,category:s,size:i,popularity:n,price:c,is10PercentOff:u}){return`
  <li class='product-item' data-product-id='${t}'>
    <div class='product-img-container'>
      <img
        src='${r}'
        alt='${a}'
        width='140'
        height='140'
        loading='lazy'/>
    </div>
    <h3 class='product-name'>${a}</h3>
    <ul class='product-props'>
      <li class='prop'>
        <span class='prop-name'>Category:</span>
        <span class='prop-value'>${s}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Size:</span>
        <span class='prop-value'>${i}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Popularity:</span>
        <span class='prop-value'>${n}</span>
      </li>
    </ul>
    <div class='product-buy-container'>
      <p class='price'>$${c}</p>
      <button class='btn-buy' type='button'>
        <svg width='18' height='18'>
          <use href='${e(o)}#icon-cart' />
        </svg>
      </button>
    </div>
      ${u?`<svg class='product-discount' width='60' height='60'>
      <use href='${e(o)}#icon-discount'/>
    </svg>`:""}
  </li>`}let g=new d;(0,c.default).categorySelectEl.addEventListener("change",function(t){g.category=t.target.value,g.fetchProductsByQuery().then(t=>{let e=t.results.map(t=>f(t)).join("");c.default.productsListEl.innerHTML=e})}),g.fetchCategories().then(t=>{let e=t.map(t=>`<option value='${t}'>${t}</option>`).join("");(0,c.default).categorySelectEl.insertAdjacentHTML("beforeend",e)});var c=i("4Nugj");function h(t){let{_id:a,name:r,img:s,category:i,size:n,popularity:c}=t;return`<li class="popular-item" data-product-id='${a}'>
      <div class="popular-product-img">
        <img src="${s}" alt="" width="56" height="56" />
      </div>
      <button class="cart-btn" type="button">
        <svg width="12" height="12">
          <use href="${e(o)}#icon-cart"></use>
        </svg>
      </button>
      <div class="popular-item-info">
        <h3 class="popular-info-title">${r}</h3>
        <p class="popular-category">
          <span class="popular-accent">Category:</span> ${i}
        </p>
        <p class="popular-info-descr">
          <span class="popular-accent">Size:</span>${n}
          <span class="popular-accent">Popularity:</span> ${c}
        </p>
      </div>
    </li>`}function y({_id:t,name:a,img:r,price:s}){return`
  <li class="discount-item" data-product-id='${t}'>
            <div class="discount-img-box">
                <img class="discount-img" src="${r}">
                <svg class="discount-svg" width="60" height="60">
                    <use href="${e(o)}#icon-discount"></use>
                </svg>
            </div>
            <div class="discount-bottom">
                <p class="discount-txt">${a}</p>
                <p class="discount-txt discount-price">$${s}</p>
                <button class='discount-btn-buy' type='button'>
                    <svg width='18' height='18'>
                        <use href='${e(o)}#icon-cart' />
                    </svg>
                </button>
            </div>
        </li>`}var b=i("i8Q71");let v=new d;async function m(){try{var t,e,a;let r;(0,b.updateCartOnHeader)(),t=(await v.fetchProductsByQuery()).results,c.default.productsListEl.innerHTML=t.map(f).join("");let s=await v.fetchPopular();c.default.popularListElement.innerHTML=s.map(h).join(""),e=await v.fetchDiscount(),a=c.default.discountProductsEl,r=Math.ceil(7*Math.random()),a.innerHTML=e.map(y).slice(r,r+2).join("")}catch(t){console.log("err")}}window.addEventListener("DOMContentLoaded",m)}();
//# sourceMappingURL=index.2803d73e.js.map
