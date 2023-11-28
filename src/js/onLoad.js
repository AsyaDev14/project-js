import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import refs from './refs';
import { renderPopularProducts } from './popularProduct';
import { renderDiscountCards } from './discountProducts';
import { updateCartOnHeader } from './header';
import { onAddBtnClick } from './addProduct.js';
import throttle from 'lodash/throttle';
import { manageUpBtn, scrollUp } from './scrollUp';
import { onChangeProductsCount, queryDesktop, queryTablet, setProductsPerPage } from './windowSizeChange';
import { fetchPages, getProductsList } from './createPagination';
import { setSortOption } from './sort';

const foodBoutiqueApi = new FoodBoutiqueAPI();

window.addEventListener(`DOMContentLoaded`, onDOMContentLoaded);

function onDOMContentLoaded() {
  try {
    updateCartOnHeader();
    setSortOption();
    setProductsPerPage();

    refs.loaderEl.classList.remove('is-hidden');
    refs.productsListEl.classList.add('is-hidden');
    Promise.all([
      foodBoutiqueApi.fetchPopular(),
      foodBoutiqueApi.fetchDiscount(),
      fetchPages()
    ])
      .then(([popularProducts, discountProducts, filteredProducts]) => {
        refs.loaderEl.classList.add('is-hidden');
        refs.productsListEl.classList.remove('is-hidden');
        getProductsList(filteredProducts);
        refs.popularListElement.innerHTML = renderPopularProducts(popularProducts);
        renderDiscountCards(discountProducts, refs.discountProductsEl);
      });

    try {
      document.onscroll = throttle(manageUpBtn, 300);
      refs.btnUpEl.onclick = scrollUp;
    } catch (err) {
      console.log(err);
    }

    try {
      queryTablet.addEventListener('change', throttle(onChangeProductsCount, 300));
      queryDesktop.addEventListener('change', throttle(onChangeProductsCount, 300));
    } catch (err) {
      console.log(err);
    }

    refs.allProductsWrapperEl.addEventListener('click', onAddBtnClick);
  } catch (err) {
    console.log(err);
  }
}