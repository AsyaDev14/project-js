function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in a)return a[t].exports;if(t in s){var e=s[t];delete s[t];var r={id:t,exports:{}};return a[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},e.parcelRequired7c6=r),(0,r.register)("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return a},set:function(t){return a=t},enumerable:!0,configurable:!0});var a,s=new Map;a=function(t,e){for(var a=0;a<e.length-1;a+=2)s.set(e[a],{baseUrl:t,path:e[a+1]})}}),r("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["7bk21","index.b15b5eb6.js","2Gq7C","icons.1c31bae1.svg","RXqlW","cart.ef5bebf1.js"]'));var i={};i=new URL("icons.1c31bae1.svg",import.meta.url).toString();var o=r("krGWQ"),n=r("5uEKZ");const c="localKey";(0,o.default).allProductsWrapperEl.addEventListener("click",function(e){let a,s;if(!e.target.closest("button"))return;e.stopPropagation();let r=e.target.closest("li").dataset.productId;(a=(0,n.default).load(c))||(a=[]),a.some(t=>t===r)||(a.push(r),(0,n.default).save(c,a),0)||(function(e){(0,o.default).allProductsWrapperEl.querySelectorAll(`[data-product-id='${e}']`).forEach(e=>{let a=e.querySelector("button");e.querySelector("button use").setAttribute("href",`${t(i)}#icon-check`),a.disabled=!0})}(r),s=Number(o.default.cartCountSpan.textContent),o.default.cartCountSpan.textContent=(++s).toString())}),r("epHO8"),r("bUb57"),r("krGWQ"),r("bTcpz");var l=r("2shzp");class u{constructor(){this.page=1,this.query=null,this.category=null,this.byABC=!0,this.byPrice=!0,this.byPopularity=!0,this.limit=9,l.default.defaults.baseURL="https://food-boutique.b.goit.study"}async fetchProductsByQuery(){let t={params:{keyword:this.query,category:this.category,byABC:this.byABC,byPrice:this.byPrice,byPopularity:this.byPopularity,page:this.page,limit:this.limit}};return(await (0,l.default).get("/api/products",t)).data}async fetchPopular(){return(await (0,l.default).get("/api/products/popular",{params:{limit:5}})).data}async fetchDiscount(){return(await (0,l.default).get("/api/products/discount")).data}async fetchCategories(){return(await (0,l.default).get("/api/products/categories")).data}async fetchById(t){return(await (0,l.default).get(`/api/products/${t}`)).data}async postOrders(){return(await (0,l.default).post("/api/products/orders")).data}async postSubscription(){return(await (0,l.default).post("/api/products/subscription")).data}}var o=r("krGWQ");function p({_id:e,name:a,img:s,category:r,size:o,popularity:n,price:c,is10PercentOff:l}){return`
  <li class='product-item' data-product-id='${e}'>
    <div class='product-img-container'>
      <img
        src='${s}'
        alt='${a}'
        width='140'
        height='140'
        loading='lazy'/>
    </div>
    <h3 class='product-name'>${a}</h3>
    <ul class='product-props'>
      <li class='prop'>
        <span class='prop-name'>Category:</span>
        <span class='prop-value'>${r}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Size:</span>
        <span class='prop-value'>${o}</span>
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
          <use href='${t(i)}#icon-cart' />
        </svg>
      </button>
    </div>
      ${l?`<svg class='product-discount' width='60' height='60'>
      <use href='${t(i)}#icon-discount'/>
    </svg>`:""}
  </li>`}const d=document.querySelector(".filters-form-search"),f=new u;d.addEventListener("submit",function(t){t.preventDefault(),f.category=o.default.categorySelectEl.value,"Show All"===f.category&&(f.category="",console.log(f.category)),f.fetchProductsByQuery().then(t=>{let e=t.results.map(t=>p(t)).join("");o.default.productsListEl.innerHTML=e})}),f.fetchCategories().then(t=>{let e=t.map(t=>`<option value='${t}'>${t}</option>`).join("");(0,o.default).categorySelectEl.insertAdjacentHTML("beforeend",e),(0,o.default).categorySelectEl.insertAdjacentHTML("beforeend","<option value='Show All'>Show All</option>")});var o=r("krGWQ");function g(e){let{_id:a,name:s,img:r,category:o,size:n,popularity:c}=e;return`<li class="popular-item" data-product-id='${a}'>
      <div class="popular-product-img">
        <img src="${r}" alt="" width="56" height="56" />
      </div>
      <button class="cart-btn" type="button">
        <svg width="12" height="12">
          <use href="${t(i)}#icon-cart"></use>
        </svg>
      </button>
      <div class="popular-item-info">
        <h3 class="popular-info-title">${s}</h3>
        <p class="popular-category">
          <span class="popular-accent">Category:</span> ${o}
        </p>
        <p class="popular-info-descr">
          <span class="popular-accent">Size:</span>${n}
          <span class="popular-accent">Popularity:</span> ${c}
        </p>
      </div>
    </li>`}function h({_id:e,name:a,img:s,price:r}){return`
  <li class="discount-item" data-product-id='${e}'>
            <div class="discount-img-box">
                <img class="discount-img" src="${s}">
                <svg class="discount-svg" width="60" height="60">
                    <use href="${t(i)}#icon-discount"></use>
                </svg>
            </div>
            <div class="discount-bottom">
                <p class="discount-txt">${a}</p>
                <p class="discount-txt discount-price">$${r}</p>
                <button class='discount-btn-buy' type='button'>
                    <svg width='18' height='18'>
                        <use href='${t(i)}#icon-cart' />
                    </svg>
                </button>
            </div>
        </li>`}var y=r("bUb57");const b=new u;async function v(){try{var t,e,a;let s;(0,y.updateCartOnHeader)(),t=(await b.fetchProductsByQuery()).results,o.default.productsListEl.innerHTML=t.map(p).join("");let r=await b.fetchPopular();o.default.popularListElement.innerHTML=r.map(g).join(""),e=await b.fetchDiscount(),a=o.default.discountProductsEl,s=Math.ceil(7*Math.random()),a.innerHTML=e.map(h).slice(s,s+2).join("")}catch(t){console.log("err")}}window.addEventListener("DOMContentLoaded",v);
//# sourceMappingURL=index.b15b5eb6.js.map
