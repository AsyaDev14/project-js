import storage from './storage';
import refs from './refs';
import { fetchPages, getProductsList } from './createPagination';

export const queryTablet = matchMedia('(min-width: 768px)');
export const queryDesktop = matchMedia('(min-width: 1272px)');

export function calcProductsPerPage() {
  const width = window.innerWidth;
  let productsPerPage = 6;
  if (width >= 768 && width < 1272) {
    productsPerPage = 8;
  } else if (width >= 1272) {
    productsPerPage = 9;
  }
  return productsPerPage;
}

export function setProductsPerPage() {
  const requestData = storage.load(storage.KEY_QUERY);
  const { limit, page } = requestData;
  const newLimit = calcProductsPerPage();
  const newPage = Math.ceil((page * limit - limit + 1) / newLimit);
  requestData.limit = newLimit;
  requestData.page = newPage;
  storage.save(storage.KEY_QUERY, requestData);
}

export async function onChangeProductsCount() {
  setProductsPerPage();
  refs.loaderEl.classList.remove('is-hidden');
  refs.productsListEl.classList.add('is-hidden');
  refs.nothingFoundEl.classList.add('visually-hidden');

  const filteredProducts = await fetchPages();

  refs.loaderEl.classList.add('is-hidden');
  refs.productsListEl.classList.remove('is-hidden');

  getProductsList(filteredProducts);
}