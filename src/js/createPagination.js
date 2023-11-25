import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import axios from 'axios';


// 1variant

// axios.defaults.baseURL='https://food-boutique.b.goit.study/api';

const BASE_URL = 'https://food-boutique.b.goit.study/api';
const END_POINT = 'products'
const btnPagination = document.querySelector('#pagination');
const arrowPaginPrev = document.querySelector('.tui-prev');
const arrowPaginNext = document.querySelector('.tui-next')

async function getPages(limit, page) {
  try {
    return await axios.get(`${BASE_URL}/${END_POINT}`, {
      params: {
        limit: limit,
        page: page,
        category: "Pantry_Items",
        byABC: true,
        byPrice: true,
        byPopularity: true,
      }
    })
  } catch (error) {
    console.log(error.code)
  }
}
document.addEventListener('DOMContentLoaded', renderPages);
btnPagination.addEventListener('click', onThisPage);


const limit = 6;
let page = 1;

function renderPages() {
  getPages(limit, page)
    .then(res => {
      const { page, perPage, totalPages } = res.data
      const options = {
        totalItems: totalPages,
        itemsPerPage: perPage,
        visiblePages: 5,
        page: page,
      }
      const pagination = new Pagination('pagination', options);

      console.log(res.data)
    })
    .catch(err => console.log(err.message))
}

function onThisPage(ev) {
  page = ev.target.textContent;
  renderPages();
}


// 2 variant
// const BASE_URL = 'https://food-boutique.b.goit.study/api';
// const END_POINT = 'products';
// const options = {
//   totalItems: 60,
//   itemsPerPage: 6,
//   visiblePages: 5,
//   page: 1,
// }
// const limit = 6;
// let page = 1;
// const pagination = new Pagination('pagination', options);

// pagination.on('beforeMove', evt => {
//   const { page } = evt;
//   const result = axios.get(`${BASE_URL}/${END_POINT}`, {
//     params: {
//       limit: 5,
//       page: page,
//       category: "Pantry_Items",
//       byABC: true,
//       byPrice: true,
//       byPopularity: true,
//     }
//   });

//   if (result) {
//     pagination.movePageTo(page);
//   } else {
//     return false;
//   }
// });

// pagination.on('afterMove', ({ page }) => console.log(page));