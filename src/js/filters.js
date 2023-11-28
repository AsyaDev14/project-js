import { FoodBoutiqueAPI } from "./foodBoutiqueApi";
import refs from './refs'
import storage from "./storage";
import { fetchPages, getProductsList } from './createPagination';
import { getSortCriteria } from './sort';
import { calcProductsPerPage } from './windowSizeChange';

const foodBoutiqueAPI = new FoodBoutiqueAPI();

refs.filtersFormSearchEL.addEventListener('submit', onFiltersFormSubmit);
refs.categorySelectEl.addEventListener('change', onCategorySelectChange)
refs.sortEl.addEventListener('change', onSortSelectChange)

foodBoutiqueAPI.fetchCategories().then((res) => {

    const categoriesList = res.map(category => createMarkupForSelect(category)).join('');

    refs.categorySelectEl.insertAdjacentHTML('beforeend', categoriesList);
    refs.categorySelectEl.insertAdjacentHTML('beforeend', `<option value='Show All'>Show All</option>`);

    const selectedCategory = storage.load('productsQuery').category.replaceAll('_', ' ');
    const selectedOption = document.querySelector(`[value = '${selectedCategory}']`);

    selectedOption.setAttribute('selected', "");
});

function createMarkupForSelect(category) {
    return `<option value='${category}'>${category}</option>`
}
const productsQueryObj = storage.load('productsQuery') || { keyword: '', category: '', page: 1, limit: 6, sortCriteria: 'byABC', sortValue: true }

storage.save("productsQuery", productsQueryObj);


async function onCategorySelectChange() {
    productsQueryObj.category = refs.categorySelectEl.value.replaceAll(' ', '_');
    productsQueryObj.page = 1;
    productsQueryObj.keyword = '';
    refs.searchInputEl.value = '';

    if (productsQueryObj.category === 'Show_All') {
        productsQueryObj.category = '';
    }
    const sortObj = getSortCriteria();
    productsQueryObj.sortCriteria = sortObj.criteriaName;
    productsQueryObj.sortValue = sortObj.criteriaValue;

    storage.save("productsQuery", productsQueryObj);

    refs.loaderEl.classList.remove('is-hidden');
    refs.productsListEl.classList.add('is-hidden');
    refs.nothingFoundEl.classList.add('visually-hidden');

    const filteredProducts = await fetchPages();

    refs.loaderEl.classList.add('is-hidden');
    refs.productsListEl.classList.remove('is-hidden');

    getProductsList(filteredProducts);
}

async function onSortSelectChange() {
    productsQueryObj.category = refs.categorySelectEl.value.replaceAll(' ', '_');
    if (productsQueryObj.category === 'Show_All') {
      productsQueryObj.category = '';
    }
    productsQueryObj.page = 1;
    productsQueryObj.keyword = refs.searchInputEl.value.trim();
    const sortObj = getSortCriteria();
    productsQueryObj.sortCriteria = sortObj.criteriaName;
    productsQueryObj.sortValue = sortObj.criteriaValue;

    storage.save(storage.KEY_QUERY, productsQueryObj);

    refs.loaderEl.classList.remove('is-hidden');
    refs.productsListEl.classList.add('is-hidden');
    refs.nothingFoundEl.classList.add('visually-hidden');

    const filteredProducts = await fetchPages();

    refs.loaderEl.classList.add('is-hidden');
    refs.productsListEl.classList.remove('is-hidden');

    getProductsList(filteredProducts);
}

async function onFiltersFormSubmit(event) {
    event.preventDefault();

    productsQueryObj.category = refs.categorySelectEl.value.replaceAll(' ', '_');
    if (productsQueryObj.category === 'Show_All') {
        productsQueryObj.category = '';
    }
    productsQueryObj.keyword = refs.searchInputEl.value.trim();
    productsQueryObj.page = 1;
    const sortObj = getSortCriteria();
    productsQueryObj.sortCriteria = sortObj.criteriaName;
    productsQueryObj.sortValue = sortObj.criteriaValue;
    storage.save("productsQuery", productsQueryObj);

    refs.loaderEl.classList.remove('is-hidden');
    refs.productsListEl.classList.add('is-hidden');
    refs.nothingFoundEl.classList.add('visually-hidden');

    const filteredProducts = await fetchPages();

    refs.loaderEl.classList.add('is-hidden');
    refs.productsListEl.classList.remove('is-hidden');

    getProductsList(filteredProducts);
}