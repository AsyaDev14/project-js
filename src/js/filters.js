import { FoodBoutiqueAPI } from "./foodBoutiqueApi";
import { categorySelectEl, productListEl, filtersFormEL } from "./refs";
import { getCardMarkup, renderProductsCards } from "./productsList";

const foodBoutiqueAPI = new FoodBoutiqueAPI();

categorySelectEl.addEventListener('change', onCategorySelectChange);

foodBoutiqueAPI.fetchCategories().then((res) => {

    const categoriesList = res.map(category => createMarkupForSelect(category)).join('');

    categorySelectEl.insertAdjacentHTML('beforeend', categoriesList)
});

function createMarkupForSelect(category) {
    return `<option value='${category}'>${category}</option>`
}

function onCategorySelectChange(event) {
    foodBoutiqueAPI.category = event.target.value;
    console.log(foodBoutiqueAPI.category);
    foodBoutiqueAPI.fetchProductsByQuery().then(res => {
        const listOfProducts = res.results.map(item => getCardMarkup(item)).join('');
        productListEl.innerHTML = listOfProducts;

    });
}