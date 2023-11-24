const allProductsWrapperEl = document.querySelector('.all-products');
const productsListEl = document.querySelector('#products-list .products-list');
const popularListElement = document.querySelector('.popular-list');
const cartCountSpan = document.querySelector('.header-cart-span');
const categorySelectEl = document.querySelector('#categories');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('[data-modal]');
const discountProductsEl = document.querySelector('.discount-products');
const footerFormEl = document.querySelector('.footer-form');

export default {
    allProductsWrapperEl,
    productsListEl,
    popularListElement,
    cartCountSpan,
    categorySelectEl,
    closeModalBtn,
    modalEl,
    discountProductsEl,
    footerFormEl
};
