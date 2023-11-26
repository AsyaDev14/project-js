import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import refs from './refs';
import { renderPopularProducts } from './popularProduct';
import { renderDiscountCards } from './discountProducts';
import { updateCartOnHeader } from './header';
import { onAddBtnClick } from './addProduct.js';
import throttle from 'lodash/throttle';
import { manageUpBtn, scrollUp } from './scrollUp';
import { changeProductsCount, queryDesktop, queryTablet } from './windowSizeChange';
import { fetchPages, getProductsList } from './createPagination';

const foodBoutiqueApi = new FoodBoutiqueAPI();

window.addEventListener(`DOMContentLoaded`, onDOMContentLoaded);

async function onDOMContentLoaded() {
  try {
    updateCartOnHeader();
    changeProductsCount();

    getProductsList();

    const [popularProducts, discountProducts] = await Promise.all([
      foodBoutiqueApi.fetchPopular(),
      foodBoutiqueApi.fetchDiscount(),
      fetchPages()
    ]);

    refs.popularListElement.innerHTML = renderPopularProducts(popularProducts);
    renderDiscountCards(discountProducts, refs.discountProductsEl);

    try {
      document.onscroll = throttle(manageUpBtn, 300);
      refs.btnUpEl.onclick = scrollUp;
    } catch (err) {
      console.log(err);
    }

    try {
      queryTablet.addEventListener('change', throttle(changeProductsCount, 300));
      queryDesktop.addEventListener('change', throttle(changeProductsCount, 300));
    } catch (err) {
      console.log(err);
    }

    refs.allProductsWrapperEl.addEventListener('click', onAddBtnClick);
  } catch (err) {
    console.log(err);
  }
}