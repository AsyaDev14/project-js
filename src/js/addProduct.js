import iconsPath from '../icons/icons.svg';
import refs from './refs.js';
import Storage from './storage.js';

const STORAGE_KEY = 'localKey';

refs.allProductsWrapperEl.addEventListener('click', onAddBtnClick);

function onAddBtnClick(e) {
  if (!e.target.closest('button')) {
    return;
  }

  e.stopPropagation();
  const cardEl = e.target.closest('li');
  const id = cardEl.dataset.productId;
  if (!saveIdToStorage(id)) {
    return;
  }

  disableBuyProductById(id);
  increaseCartCounter();
}

function saveIdToStorage(id) {
  let selectedProdIds = Storage.load(STORAGE_KEY);
  if (!selectedProdIds) {
    selectedProdIds = [];
  }
  if (selectedProdIds.some(productId => (productId === id))) {
    return false;
  } else {
    selectedProdIds.push(id);
    Storage.save(STORAGE_KEY, selectedProdIds);
    return true;
  }
}

function disableBuyProductById(id) {
  const cardsEls = refs.allProductsWrapperEl.querySelectorAll(`[data-product-id='${id}']`);
  cardsEls.forEach(cardEl => {
    const button = cardEl.querySelector('button');
    const useTag = cardEl.querySelector('button use');
    useTag.setAttribute('href', `${iconsPath}#icon-check`);
    button.disabled = true;
  });
}

function increaseCartCounter() {
  let cartValue = Number(refs.cartCountSpan.textContent);
  refs.cartCountSpan.textContent = (++cartValue).toString();
}