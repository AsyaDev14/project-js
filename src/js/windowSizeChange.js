import { getProductsList } from './createPagination';
import storage from './storage';


export const queryTablet = matchMedia('(min-width: 768px)');
export const queryDesktop = matchMedia('(min-width: 1280px)');

export function changeProductsCount() {
  setProductsPerPage()
  getProductsList();
}

function calcProductsPerPage() {
  const width = window.innerWidth;
  let productsPerPage = 6;
  if (width >= 768 && width < 1280) {
    productsPerPage = 8;
  } else if (width >= 1280) {
    productsPerPage = 9;
  }
  return productsPerPage;
}

function setProductsPerPage() {
  const requestData = storage.load(storage.KEY_QUERY);
  requestData.limit = calcProductsPerPage();
  storage.save(storage.KEY_QUERY, requestData);
}