var e,t,d,o,n;e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},d={},null==(o=e.parcelRequired7c6)&&((o=function(e){if(e in t)return t[e].exports;if(e in d){var o=d[e];delete d[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){d[e]=t},e.parcelRequired7c6=o),(n=o.register)("7hKzD",function(e,t){}),n("i8Q71",function(e,t){}),n("5xtVg",function(e,t){let{productListEl:d,closeModalBtn:o,modalEl:n,popularListEl:i,discountProductsEl:r}={productListEl:document.querySelector(".products-list"),closeModalBtn:document.querySelector("[data-modal-close]"),modalEl:document.querySelector("[data-modal]"),popularListEl:document.querySelector(".popular-list"),discountProductsEl:document.querySelector(".discount-products")};function c(e){e.preventDefault(),"UL"!==e.target.nodeName&&"BUTTON"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName&&"A"!==e.target.nodeName&&(n.classList.remove("is-hidden"),o.addEventListener("click",function(){n.classList.add("is-hidden")}),document.addEventListener("keydown",function e({code:t}){"Escape"===t&&(n.classList.add("is-hidden"),document.removeEventListener("keydown",e))}),n.addEventListener("click",function e(t){t.target.classList.contains("backdrop-modal")&&n.classList.add("is-hidden"),n.removeEventListener("click",e)}))}d.addEventListener("click",c),i.addEventListener("click",c),r.addEventListener("click",c)}),o("7hKzD"),o("i8Q71"),document.querySelector("#products-list .products-list"),o("5xtVg");
//# sourceMappingURL=index.7229b094.js.map
