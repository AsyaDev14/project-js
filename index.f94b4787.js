var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},d={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in d){var o=d[e];delete d[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){d[e]=t},e.parcelRequired7c6=o);var n=o.register;n("epHO8",function(e,t){}),n("bUb57",function(e,t){}),n("bTcpz",function(e,t){let{productListEl:d,closeModalBtn:o,modalEl:n,popularListEl:r,discountProductsEl:c}={productListEl:document.querySelector(".products-list"),closeModalBtn:document.querySelector("[data-modal-close]"),modalEl:document.querySelector("[data-modal]"),popularListEl:document.querySelector(".popular-list"),discountProductsEl:document.querySelector(".discount-products")};function i(e){e.preventDefault(),"UL"!==e.target.nodeName&&"BUTTON"!==e.target.nodeName&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName&&"A"!==e.target.nodeName&&(n.classList.remove("is-hidden"),o.addEventListener("click",function(){n.classList.add("is-hidden")}),document.addEventListener("keydown",function e({code:t}){"Escape"===t&&(n.classList.add("is-hidden"),document.removeEventListener("keydown",e))}),n.addEventListener("click",function e(t){t.target.classList.contains("backdrop-modal")&&n.classList.add("is-hidden"),n.removeEventListener("click",e)}))}d.addEventListener("click",i),r.addEventListener("click",i),c.addEventListener("click",i)}),o("epHO8"),o("bUb57"),document.querySelector("#products-list .products-list"),o("bTcpz");
//# sourceMappingURL=index.f94b4787.js.map
