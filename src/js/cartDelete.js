import cartRefs from './cartRefs';
import storage from './storage';
import {
  renderProductsCards,
  renderOrder,
  fakeApiForCart,
} from './onCartPageLoad.js';
import { updateCartFromStorage, updateCartOnHeader } from './header.js';

cartRefs.deleteAll.addEventListener('click', onDeleteAllClick);
cartRefs.productList.addEventListener('click', onDeleteItemClick);

export function onDeleteAllClick() {
  localStorage.clear();

  cartRefs.productList.innerHTML = '';
  updateCartFromStorage(cartRefs.cartSpan);
  updateCartOnHeader();
  cartRefs.cartContent.classList.add('visually-hidden');
  cartRefs.emptyCart.classList.remove('visually-hidden');
}

function onDeleteItemClick(e) {
  if (!e.target.closest('.delete-btn.js-delete')) {
    return;
  }

  const cardEl = e.target.closest('li');
  const id = cardEl.dataset.productId;

  const oldCartArr = storage.load('localKey');
  let newCartArr = [];

  for (let i = 0; i < oldCartArr.length; i++) {
    const element = oldCartArr[i];
    if (!(element === id)) {
      newCartArr.push(element);
    }
  }

  storage.remove('localKey');

  if (newCartArr.length === 0) {
    storage.remove(`product_${id}`);
    cartRefs.cartContent.classList.add('visually-hidden');
    cartRefs.emptyCart.classList.remove('visually-hidden');
    updateCartFromStorage(cartRefs.cartSpan);
    updateCartOnHeader();
    return;
  }

  storage.save('localKey', newCartArr);
  storage.remove(`product_${id}`);

  cartRefs.productList.innerHTML = '';

  let updatedCartArr = [];

  for (let i = 0; i < newCartArr.length; i++) {
    const id = newCartArr[i];
    const product = storage.load(`product_${id}`);
    updatedCartArr.push(product);
  }

  renderProductsCards(updatedCartArr);
  renderOrder(fakeApiForCart());

  if (cartRefs.productList.children.length > 3) {
    cartRefs.productList.classList.add('show-scroll');
  } else {
    cartRefs.productList.classList.remove('show-scroll');
  }

  updateCartFromStorage(cartRefs.cartSpan);
  updateCartOnHeader();
}
