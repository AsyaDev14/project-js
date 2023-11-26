import Storage from './storage.js';
import { updateCartOnHeader } from './header.js';
import { changeBtnTo, disableBuyProductById } from './checkProducts.js';

export function onAddBtnClick(e) {
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
  let selectedProdIds = Storage.load(Storage.STORAGE_KEY);
  if (!selectedProdIds) {
    selectedProdIds = [];
  }
  if (selectedProdIds.some(productId => (productId === id))) {
    return false;
  } else {
    selectedProdIds.push(id);
    Storage.save(Storage.STORAGE_KEY, selectedProdIds);
    return true;
  }
}

export function onModalAddBtnClick(button) {
  const cardEl = button.closest('[data-product-id]');
  const id = cardEl.dataset.productId;
  if (!saveIdToStorage(id)) {
    return;
  }

  changeBtnTo(button, 'remove');
  disableBuyProductById(id);
  updateCartOnHeader();
}