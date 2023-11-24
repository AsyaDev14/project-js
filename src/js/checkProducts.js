import refs from './refs';
import iconsPath from '../icons/icons.svg';

export function disableBuyProductById(id) {
  const cardsEls = refs.allProductsWrapperEl.querySelectorAll(`[data-product-id='${id}']`);
  cardsEls.forEach(cardEl => {
    const button = cardEl.querySelector('button');
    const useTag = cardEl.querySelector('button use');
    useTag.setAttribute('href', `${iconsPath}#icon-check`);
    button.disabled = true;
  });
}

export function checkProducts(productsIdList) {
  productsIdList.forEach(disableBuyProductById)
}