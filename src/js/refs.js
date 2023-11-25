const allProductsWrapperEl = document.querySelector('.all-products');
const productsListEl = allProductsWrapperEl.querySelector('#products-list .products-list');
const popularListElement = allProductsWrapperEl.querySelector('.popular-list');
const cartCountSpan = document.querySelector('.header-cart-span');
const categorySelectEl = document.querySelector('#categories');
const modalEl = document.querySelector('[data-modal]');
const discountProductsEl = allProductsWrapperEl.querySelector('.discount-products');
const footerFormEl = document.querySelector('.footer-form');
const filtersFormSearchEL = document.querySelector('.filters-form-search');
const searchInputEl = document.querySelector('.search-input');
const nothingFoundEl = allProductsWrapperEl.querySelector('div.nothing-found');

export default {
  allProductsWrapperEl,
  productsListEl,
  popularListElement,
  cartCountSpan,
  categorySelectEl,
  modalEl,
  discountProductsEl,
  footerFormEl,
  filtersFormSearchEL,
  searchInputEl,
  nothingFoundEl,
};
