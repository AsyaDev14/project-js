import { FoodBoutiqueAPI } from "./foodBoutiqueApi";
import refs from './refs'

import { getCardMarkup } from "./productsList";
import { all } from "axios";

const filtersFormSearchEL = document.querySelector('.filters-form-search')

const foodBoutiqueAPI = new FoodBoutiqueAPI();

filtersFormSearchEL.addEventListener('submit', onFiltersFormSubmit);


foodBoutiqueAPI.fetchCategories().then((res) => {

    const categoriesList = res.map(category => createMarkupForSelect(category)).join('');

    refs.categorySelectEl.insertAdjacentHTML('beforeend', categoriesList);
    refs.categorySelectEl.insertAdjacentHTML('beforeend', `<option value='Show All'>Show All</option>`);
});

function createMarkupForSelect(category) {
    return `<option value='${category}'>${category}</option>`
}

function onFiltersFormSubmit(event) {
    event.preventDefault();
    foodBoutiqueAPI.category = refs.categorySelectEl.value;
    if (foodBoutiqueAPI.category === 'Show All') {
        foodBoutiqueAPI.category = '';
        console.log(foodBoutiqueAPI.category);
    }

    foodBoutiqueAPI.fetchProductsByQuery().then(res => {
        const listOfProducts = res.results.map(item => getCardMarkup(item)).join('');
        refs.productsListEl.innerHTML = listOfProducts;
    });
}

