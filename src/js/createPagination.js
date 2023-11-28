import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import { renderProductsCards } from './productsList';
import refs from './refs';
import Storage from './storage';
import { calcProductsPerPage } from './windowSizeChange';

const foodBoutiqueAPI = new FoodBoutiqueAPI();

function getRequestData() {
  return Storage.load(Storage.KEY_QUERY);
}

export async function fetchPages() {
  const { keyword, category, page, sortCriteria, sortValue } = getRequestData();
  foodBoutiqueAPI.query = keyword;
  foodBoutiqueAPI.limit = calcProductsPerPage();
  foodBoutiqueAPI.page = page;
  foodBoutiqueAPI.category = category;
  foodBoutiqueAPI[sortCriteria] = sortValue;
  return await foodBoutiqueAPI.fetchProductsByQuery();
}

export function getProductsList(data) {
  const { page, perPage, totalPages, results } = data;
  if (totalPages < 2) {
    refs.paginationSectionEl.classList.add('visually-hidden');
  } else {
    refs.paginationSectionEl.classList.remove('visually-hidden');
  }
  renderProductsCards(results, refs.productsListEl);

  const optionsPagination = {
    totalItems: (totalPages * perPage),
    itemsPerPage: perPage,
    visiblePages: 3,
    page: page,
    centerAlign: true,
    template: {
      moreButton:
        '<span class= \'dots\'>...</span>',
    },
  };
  const pagination = new Pagination('#pagination', optionsPagination);

  pagination.on('beforeMove', async (event) => {
    const currentPage = event.page;
    const requestData = Storage.load(Storage.KEY_QUERY);
    requestData.page = currentPage;
    Storage.save(Storage.KEY_QUERY, requestData);

    refs.loaderEl.classList.remove('is-hidden');
    refs.productsListEl.classList.add('is-hidden');
    refs.nothingFoundEl.classList.add('visually-hidden');

    const filteredProducts = await fetchPages();

    refs.loaderEl.classList.add('is-hidden');
    refs.productsListEl.classList.remove('is-hidden');

    getProductsList(filteredProducts);

    if (currentPage === totalPages) {
      return false;
    }
  });
}