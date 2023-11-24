import refs from './refs.js';
import Storage from './storage.js';
import { updateCartOnHeader } from './header.js';
import { disableBuyProductById } from './checkProducts.js';

const STORAGE_KEY = 'localKey';

refs.allProductsWrapperEl.addEventListener('click', onAddBtnClick);

function onAddBtnClick(e) {
  if (!e.target.closest('button.js-buy-btn')) {
    return;
  }

  e.stopPropagation();
  const cardEl = e.target.closest('li');
  const id = cardEl.dataset.productId;
  if (!saveIdToStorage(id)) {
    return;
  }

  disableBuyProductById(id);
  updateCartOnHeader();
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