import refs from './refs';
import iconsPath from '../icons/icons.svg';
import Storage from './storage';


export function disableBuyProductById(id) {
  const cardsEls = refs.allProductsWrapperEl.querySelectorAll(`[data-product-id='${id}']`);
  cardsEls.forEach(cardEl => {
    const button = cardEl.querySelector('button');
    const useTag = cardEl.querySelector('button use');
    useTag.setAttribute('href', `${iconsPath}#icon-check`);
    button.disabled = true;
  });
}

export function enabledBuyProductById(id) {
  const cardsEls = refs.allProductsWrapperEl.querySelectorAll(`[data-product-id='${id}']`);
  cardsEls.forEach(cardEl => {
    const button = cardEl.querySelector('button');
    const useTag = cardEl.querySelector('button use');
    useTag.setAttribute('href', `${iconsPath}#icon-cart`);
    button.disabled = false;
  });
}

export function checkProducts(productsIdList) {
  productsIdList.forEach(disableBuyProductById);
}

export function changeBtnTo(button, changeTo) {
  button.dataset.state = changeTo;
  switch (changeTo) {
    case 'add':
      button.firstChild.textContent = 'Add to ';
      break;
    case 'remove':
      button.firstChild.textContent = 'Remove from ';
      break;
    default:
      console.log(`No such option as "${changeTo}"`);
  }
}

export function checkProductStatusOnModal(button, id) {
  let selectedProdIds = Storage.load(Storage.STORAGE_KEY);

  if (!selectedProdIds) {
    selectedProdIds = [];
  }

  if (selectedProdIds.includes(id)) {
    changeBtnTo(button, 'remove');
  } else {
    changeBtnTo(button, 'add');
  }
}