import load from './storage.js';
import refs from './refs.js';

export const cartCount = [];

// const button = document.querySelector('.test');
// console.log('btn', button);
// button.addEventListener('click', onButtonClick);

// function onButtonClick() {
//   cartCount.push(testItem);
//   localStorage.setItem('localKey', JSON.stringify(cartCount))
//   refs.cartCountSpan.textContent = cartCount.length;
// };

// localStorage.setItem('localKey', JSON.stringify(test))

// get JSON from localStorage
// const localCartCountJson = localStorage.getItem('localKey');
const localCartCount = load('localKey');

// JSON => Array
// const localCartCount = JSON.parse(localCartCountJson);

if (localCartCount) {
  localCartCount.forEach(element => cartCount.push(element));
  refs.cartCountSpan.textContent = cartCount.length;
}
