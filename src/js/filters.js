import { FoodBoutiqueAPI } from "./foodBoutiqueApi";
import refs from './refs'
import storage from "./storage";
import { getCardMarkup } from "./productsList";
import { Notify } from "notiflix";

const foodBoutiqueAPI = new FoodBoutiqueAPI();

refs.filtersFormSearchEL.addEventListener('submit', onFiltersFormSubmit);

foodBoutiqueAPI.fetchCategories().then((res) => {

    const categoriesList = res.map(category => createMarkupForSelect(category)).join('');

    refs.categorySelectEl.insertAdjacentHTML('beforeend', categoriesList);
    refs.categorySelectEl.insertAdjacentHTML('beforeend', `<option value='Show All'>Show All</option>`);
});

function createMarkupForSelect(category) {
    return `<option value='${category}'>${category}</option>`
}
const productsQueryObj = storage.load('productsQuery') || { keyword: null, category: null, page: 1, limit: 6 }

storage.save("productsQuery", productsQueryObj);



function onFiltersFormSubmit(event) {
    event.preventDefault();

    productsQueryObj.category = refs.categorySelectEl.value;
    productsQueryObj.keyword = refs.searchInputEl.value;
    storage.save("productsQuery", productsQueryObj);

    foodBoutiqueAPI.category = storage.load('productsQuery').category;

    foodBoutiqueAPI.query = storage.load('productsQuery').keyword;


    if (foodBoutiqueAPI.category === 'Show All') {
        productsQueryObj.category = '';
        storage.save("productsQuery", productsQueryObj);
        foodBoutiqueAPI.category = storage.load('productsQuery').category;
    }

    foodBoutiqueAPI.fetchProductsByQuery().then(res => {
        if (res.results.length === 0) {
            productsQueryObj.keyword = '';
            storage.save("productsQuery", productsQueryObj);
            foodBoutiqueAPI.query = storage.load('productsQuery').keyword;

            refs.searchInputEl.value = '';

            Notify.failure('Sorry, there are no products matching your search query. Please try again.');
        }
        console.log(res);

        const listOfProducts = res.results.map(item => getCardMarkup(item)).join('');
        refs.productsListEl.innerHTML = listOfProducts;
    });
}

