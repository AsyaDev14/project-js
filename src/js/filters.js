import { FoodBoutiqueAPI } from "./foodBoutiqueApi";
import refs from './refs'

import { getCardMarkup } from "./productsList";

const foodBoutiqueAPI = new FoodBoutiqueAPI();

refs.categorySelectEl.addEventListener('change', onCategorySelectChange);

foodBoutiqueAPI.fetchCategories().then((res) => {

    const categoriesList = res.map(category => createMarkupForSelect(category)).join('');

    refs.categorySelectEl.insertAdjacentHTML('beforeend', categoriesList)
});

function createMarkupForSelect(category) {
    return `<option value='${category}'>${category}</option>`
}

function onCategorySelectChange(event) {
    foodBoutiqueAPI.category = event.target.value;

    foodBoutiqueAPI.fetchProductsByQuery().then(res => {
        const listOfProducts = res.results.map(item => getCardMarkup(item)).join('');
        refs.productsListEl.innerHTML = listOfProducts;
    });
}