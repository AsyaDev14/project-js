const productsListEl = document.querySelector('#products-list .products-list');
const popularListElement = document.querySelector('.popular-list');
const cartCountSpan = document.querySelector('.header-cart-span')
const categorySelectEl = document.querySelector('#categories');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('[data-modal]');
const discountProductsEl = document.querySelector('.discount-products');

export default {
    productsListEl,
    popularListElement,
    cartCountSpan,
    categorySelectEl,
    closeModalBtn,
    modalEl,
    discountProductsEl
};
