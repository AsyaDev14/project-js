import { changeBtnTo, enabledBuyProductById } from './checkProducts';
import { updateCartOnHeader } from './header';
import Storage from './storage.js';

const STORAGE_KEY = 'localKey';

export function onModalRemoveBtnClick(button) {
  const cardEl = button.closest('[data-product-id]');
  const id = cardEl.dataset.productId;
  if (!removeIdFromStorage(id)) {
    return;
  }

  changeBtnTo(button, 'add');
  enabledBuyProductById(id);
  updateCartOnHeader();
}

function removeIdFromStorage(id) {
  let selectedProdIds = Storage.load(STORAGE_KEY);
  if (!selectedProdIds) {
    selectedProdIds = [];
  }
  if (!selectedProdIds.some(productId => (productId === id))) {
    return false;
  } else {
    selectedProdIds = selectedProdIds.filter(productId => (productId !== id))
    Storage.save(STORAGE_KEY, selectedProdIds);
    return true;
  }
}