import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import axios from 'axios';
import { renderProductsCards } from './productsList'
import refs from './refs';
import storage from "./storage";

const BASE_URL = 'https://food-boutique.b.goit.study/api';
const END_POINT = 'products';
let currentCategory='';
let currentPage = 1;

refs.filtersFormSearchEL.addEventListener('submit', getCurrentCategory);

function getCurrentCategory(){
  currentCategory = storage.load('productsQuery').category;
  console.log(currentCategory)
}

async function fetchPages(page, category = "Dairy") {
  try {
    return await axios.get(`${BASE_URL}/${END_POINT}`, {
      params: {
        limit: 6,
        page: page,
        category: category,
        byABC: true,
        byPrice: true,
        byPopularity: true,
      }
    })
  } catch (error) {
    console.log(error.code)
  }
}

export function getProductsList() {
  fetchPages(currentPage)
    .then(res => {
      console.log(res.data);
      const { page, perPage, totalPages, results } = res.data
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
        currentPage = event.page;
        getProductsList();
        // function renderPages()
        if (currentPage === totalPages) {
          return false;
        }
      });

    })
    .catch(err => console.log(err.message))
}
getProductsList();