import { FoodBoutiqueAPI } from "./foodBoutiqueApi";
import { categorySelectEl } from "./refs";

const foodBoutiqueAPI = new FoodBoutiqueAPI();

foodBoutiqueAPI.fetchCategories().then((res) => {

    const categoriesList = res.map(category => createMarkupForSelect(category)).join('');

    categorySelectEl.insertAdjacentHTML('beforeend', categoriesList)

});

function createMarkupForSelect(category) {
    return `<option value='${category}'>${category}</option>`
}
