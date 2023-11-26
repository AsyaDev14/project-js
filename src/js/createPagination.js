import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import { renderProductsCards } from './productsList';
import refs from './refs';
import Storage from './storage';

const foodBoutiqueAPI = new FoodBoutiqueAPI();

function getRequestData() {
  return  Storage.load(Storage.KEY_QUERY);
}

export async function fetchPages() {
    const { keyword, category, page, limit } = getRequestData();
    foodBoutiqueAPI.query = keyword;
    foodBoutiqueAPI.limit = limit;
    foodBoutiqueAPI.page = page;
    foodBoutiqueAPI.category = category;
    return await foodBoutiqueAPI.fetchProductsByQuery();
}

export function getProductsList() {
  /*refs.loaderEl.classList.remove('is-hidden');
  refs.productsListEl.classList.add('is-hidden');*/
  fetchPages()
    .then(res => {
      /*refs.loaderEl.classList.add('is-hidden');
      refs.productsListEl.classList.remove('is-hidden');*/
      const { page, perPage, totalPages, results } = res
      if (totalPages < 2) {
        refs.paginationSectionEl.classList.add('visually-hidden')
      }
      else {
        refs.paginationSectionEl.classList.remove('visually-hidden')
      }

      const optionsPagination = {
        totalItems: (totalPages * perPage),
        itemsPerPage: perPage,
        visiblePages: 3,
        page: page,
        centerAlign: true,
        template: {
          moreButton:
            "<span class= 'dots'>...</span>"
        }
      }
      const pagination = new Pagination('#pagination', optionsPagination);

      pagination.on('beforeMove', (event) => {
        const currentPage = event.page;
        const requestData = Storage.load(Storage.KEY_QUERY);
        requestData.page = currentPage;
        Storage.save(Storage.KEY_QUERY, requestData)
        getProductsList();
        if (currentPage === totalPages) {
          return false;
        }
      });

    })
    .catch(err => console.log(err.message))
}

export function renderFilteredProducts(results) {
  renderProductsCards(results, refs.productsListEl)
}