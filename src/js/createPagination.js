import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import axios from 'axios';


// 1variant

// const BASE_URL = 'https://food-boutique.b.goit.study/api';
// const END_POINT = 'products'
// const btnPagination = document.querySelector('#pagination');
// const arrowPaginPrev = document.querySelector('.tui-prev');
// const arrowPaginNext = document.querySelector('.tui-next');

// const limit = 6;
// let page = 1;

// async function getPages(limit, page, category= "Pantry_Items") {
//   try {
//     return await axios.get(`${BASE_URL}/${END_POINT}`, {
//       params: {
//         limit: limit,
//         page: page,
//         category: category,
//         byABC: true,
//         byPrice: true,
//         byPopularity: true,
//       }
//     })
//   } catch (error) {
//     console.log(error.code)
//   }
// }
// document.addEventListener('DOMContentLoaded', renderPages);
// btnPagination.addEventListener('click', onThisPage);

// function renderPages() {
//   getPages(limit, page)
//     .then(res => {
//       const { page, perPage, totalPages } = res.data
//       const options = {
//         totalItems: totalPages,
//         itemsPerPage: perPage,
//         visiblePages: 5,
//         page: page,
//       }
//       const pagination = new Pagination('pagination', options);

//       console.log(res.data)
//     })
//     .catch(err => console.log(err.message))
// }

// function onThisPage(ev) {
//   page = ev.target.textContent;
//   renderPages();
// }

// 2 variant

const BASE_URL = 'https://food-boutique.b.goit.study/api';
const END_POINT = 'products';

let currentPage = 1;

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

function getPages() {
  fetchPages(currentPage)
    .then(res => {
      console.log(res.data);
      const { page, perPage, totalPages, results } = res.data
      const optionsPagination = {
        totalItems: (totalPages * perPage),
        itemsPerPage: perPage,
        visiblePages: 4,
        page: page,
        template: {
          moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>'
        }
      }
      const pagination = new Pagination('#pagination', optionsPagination);

      pagination.on('beforeMove', (event) => {
        currentPage = event.page;
        getPages();
        // function renderPages()
        if (currentPage === totalPages) {
          return false;
        }
      });

    })
    .catch(err => console.log(err.message))
}
getPages();