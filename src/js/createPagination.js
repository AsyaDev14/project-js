import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import axios from 'axios';
import { renderProductsCards } from './productsList'
import refs from './refs';
import storage from "./storage";

const BASE_URL = 'https://food-boutique.b.goit.study/api';
const END_POINT = 'products';
const KEY_QUERY = 'productsQuery';
const foodBoutiqueAPI = new FoodBoutiqueAPI();

refs.filtersFormSearchEL.addEventListener('submit', getProductsList);

function getRequestData() {
  const requestData = storage.load(KEY_QUERY);
  console.log(requestData)
  return requestData;
}

async function fetchPages() {
  try {
    const { keyword, category, page, limit } = getRequestData();
    foodBoutiqueAPI.query = keyword;
    foodBoutiqueAPI.limit = limit;
    foodBoutiqueAPI.page = page;
    foodBoutiqueAPI.category = category;
    return await foodBoutiqueAPI.fetchProductsByQuery();

  } catch (error) {
    console.log(error.code)
  }
}

export function getProductsList() {
  fetchPages()
    .then(res => {
      console.log(res);
      const { page, perPage, totalPages, results } = res
      renderProductsCards(results, refs.productsListEl)
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
        const requestData = storage.load(KEY_QUERY);
        requestData.page = currentPage;
        storage.save(KEY_QUERY, requestData)
        getProductsList();
        if (currentPage === totalPages) {
          return false;
        }
      });

    })
    .catch(err => console.log(err.message))
}
getProductsList();