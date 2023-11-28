import refs from './refs';
import Storage from './storage';

export function getSortCriteria() {
  const sortValue = refs.sortEl.value;
  const sortCriteria = {
    criteriaName: sortValue,
  };

  switch (sortValue) {
    case 'a-to-z':
      sortCriteria.criteriaName = 'byABC';
      sortCriteria.criteriaValue = true;
      break;

    case 'z-to-a':
      sortCriteria.criteriaName = 'byABC';
      sortCriteria.criteriaValue = false;
      break;

    case 'cheap':
      sortCriteria.criteriaName = 'byPrice';
      sortCriteria.criteriaValue = true;
      break;

    case 'expensive':
      sortCriteria.criteriaName = 'byPrice';
      sortCriteria.criteriaValue = false;
      break;

    case 'popular':
      sortCriteria.criteriaName = 'byPopularity';
      sortCriteria.criteriaValue = false;
      break;

    case 'not-popular':
      sortCriteria.criteriaName = 'byPopularity';
      sortCriteria.criteriaValue = true;
      break;
  }

  return sortCriteria;
}

export function setSortOption() {
  const { sortCriteria, sortValue } = Storage.load(Storage.KEY_QUERY);
  let selectedCategory;
  switch (sortCriteria) {
    case 'byABC':
      selectedCategory = sortValue ? 'a-to-z' : 'z-to-a';
      break;

    case 'byPrice':
      selectedCategory = sortValue ? 'cheap' : 'expensive';
      break;

    case 'byPopularity':
      selectedCategory = sortValue ? 'not-popular' : 'popular';
      break;
  }
  const selectedOption = document.querySelector(`[value = '${selectedCategory}']`);

  selectedOption.selected = true;
}