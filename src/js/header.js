// import load from './storage.js';
// import refs from './refs.js';

// export const cartCount = [];
// const localCartCount = load('localKey');
// JSON => Array
// const localCartCount = JSON.parse(localCartCountJson);

// if (localCartCount) {
//   localCartCount.forEach(element => cartCount.push(element));
//   refs.cartCountSpan.textContent = cartCount.length;
// }

import refs from './refs.js';
import Storage from './storage.js';

const STORAGE_KEY = 'localKey';

function updateCartFromStorage() {
  const selectedProdIds = Storage.load(STORAGE_KEY) || [];
  refs.cartCountSpan.textContent = selectedProdIds.length.toString();
}

window.addEventListener('load', updateCartFromStorage);

export default updateCartFromStorage;
