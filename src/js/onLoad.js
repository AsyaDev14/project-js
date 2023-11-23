import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import refs from './refs';
import { renderPopularProducts } from './popularProduct';
import { renderProductsCards } from './productsList';

const foodBoutiqueApi = new FoodBoutiqueAPI();

window.addEventListener(`DOMContentLoaded`, onDOMContentLoaded);

async function onDOMContentLoaded() {
  let allProducts = await foodBoutiqueApi.fetchProductsByQuery();
  renderProductsCards(allProducts.results, refs.productsListEl)

  let popularProducts = await foodBoutiqueApi.fetchPopular();
  refs.popularListElement.innerHTML = renderPopularProducts(popularProducts);
}
