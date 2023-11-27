import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import refs from './refs';
import iconsPath from '../icons/icons.svg';
import { onModalAddBtnClick } from './addProduct';
import { checkProductStatusOnModal } from './checkProducts.js';
import { onModalRemoveBtnClick } from './removeProduct';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

refs.productsListEl.addEventListener('click', onProductListElClick);
refs.popularListElement.addEventListener('click', onProductListElClick);
refs.discountProductsEl.addEventListener('click', onProductListElClick);

const foodBoutiqueAPI = new FoodBoutiqueAPI();

function onProductListElClick(event) {
  event.preventDefault();

  if (
    event.target.classList.contains('btn-buy') ||
    event.target.classList.contains('products-list') ||
    event.target.classList.contains('discount-btn-buy') ||
    event.target.classList.contains('js-discount-products') ||
    event.target.classList.contains('popular-list') ||
    event.target.classList.contains('cart-btn') ||
    event.target.classList.contains('js-icon-buy')
  ) {
    return;
  }

  refs.modalEl.classList.remove('is-hidden');
  disableBodyScroll(refs.modalEl);
  document.body.style.paddingRight = '16px';

  function onCloseModalBtnClick() {
    refs.modalEl.classList.add('is-hidden');
    refs.modalEl.innerHTML = "<p class='loader is-hidden'></p>";
    enableBodyScroll(refs.modalEl);
    document.body.style.paddingRight = '0px';
  }

  function onBackdropKeydown({ code }) {
    if (code === 'Escape') {
      refs.modalEl.classList.add('is-hidden');
      document.removeEventListener('keydown', onBackdropKeydown);
      refs.modalEl.innerHTML = "<p class='loader is-hidden'></p>";
      enableBodyScroll(refs.modalEl);
    }
    document.body.style.paddingRight = '0px';
  }

  function onBackdropCLick(event) {
    if (event.target.classList.contains('backdrop-modal')) {
      refs.modalEl.classList.add('is-hidden');
      refs.modalEl.innerHTML = "<p class='loader is-hidden'></p>";
      enableBodyScroll(refs.modalEl);
      refs.modalEl.removeEventListener('click', onBackdropCLick);
      document.body.style.paddingRight = '0px';
    }
  }

  const itemId = event.target.closest('li:not(.prop)').dataset.productId;

  const loaderEl = refs.modalEl.querySelector('.loader');
  loaderEl.classList.remove('is-hidden');
  foodBoutiqueAPI
    .fetchByIdForModal(itemId)
    .then(res => {
      loaderEl.classList.add('is-hidden');
      refs.modalEl.insertAdjacentHTML('beforeend', getModalMarkup(res));

      const closeModalBtn = refs.modalEl.querySelector('[data-modal-close]');
      closeModalBtn.addEventListener('click', onCloseModalBtnClick);
    })
    .then(() => {
      const addRemoveBtn = refs.modalEl.querySelector('button.modal-cart-btn');
      checkProductStatusOnModal(addRemoveBtn, itemId);
      addRemoveBtn.addEventListener('click', onModalAddRemoveBtnClick);
    });

  document.addEventListener('keydown', onBackdropKeydown);
  refs.modalEl.addEventListener('click', onBackdropCLick);
}

function getModalMarkup({
  _id,
  name,
  img,
  category,
  size,
  popularity,
  price,
  desc,
}) {
  return `<div class='modal container' data-product-id='${_id}'>
      <button class='modal-close-btn button' type='button' data-modal-close>
    <svg class='modal-close-icon' width='22' height='22'>
      <use href='${iconsPath}#icon-close'></use>
    </svg>
  </button>
    <div class='modal-card'>
      <img
        src='${img}'
        alt='${name}'
        class='modal-img'
      />
      <div class='product-info'>
        <h2 class='modal-product-name'>${name}</h2>
        <ul class='product-info-list'>
          <li class='product-info-item'>
            Category: <span class='info-item-text'>${category}</span>
          </li>
          <li class='product-info-item'>
            Size: <span class='info-item-text'>${size}</span>
          </li>
          <li class='product-info-item'>
            Popularity: <span class='info-item-text'>${popularity}</span>
          </li>
        </ul>
        <p class='product-description'>
          ${desc}
        </p>
      </div>
    </div>
    <div class='cart-modal-container'>
      <p class='product-price'>$${price}</p>
      <button class='modal-cart-btn' data-state='add' type='button'>
        Add to
        <svg class='cart-modal-icon' width='18' height='18'>
          <use href='${iconsPath}#icon-cart'></use>
        </svg>
      </button>
    </div>
  </div>`;
}

function onModalAddRemoveBtnClick({ currentTarget: button }) {
  button.blur();
  if (button.dataset.state === 'add') {
    onModalAddBtnClick(button);
  } else {
    onModalRemoveBtnClick(button);
  }
}
