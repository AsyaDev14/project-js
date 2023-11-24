import axios from 'axios';
import load from './storage.js';
import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import cartRefs from './cartRefs.js';
import iconsPath from '../icons/icons.svg';
import { updateCartFromStorage } from './header.js';

window.addEventListener('load', onCartPageLoad);
// deleteAll.addEventListener('click', onDeleteAllClick);
// deleteThis.addEventListener('click', onDeleteThisllClick);

const foodBoutiqueApi = new FoodBoutiqueAPI();

function productTemplate({ _id: id, name, img, category, size, price }) {
  return `
        <li class="cart-list-item" data-product-id=${id}>
            <img
              class="product-img"
              src="${img}"
              alt="${name}"
              loading='lazy'
            />
            <div class="product-info-container">
              <h3 class="product-name">${name}</h3>
              <div class="product-dscr">
                <p class="product-category"><span class="notation">Category: </span>${category}</p>
                <p class="product-size"><span class="notation"> Size: </span>${size}</p>
              </div>
              <p class="cart-price">$${price}</p>
            </div>
            <button class="delete-btn js-delete" type="button">
              <svg class="" width="18" height="18">
                <use href="${iconsPath}#icon-close"></use>
              </svg>
            </button>
            <div class="counter-container">
              <button class="counter-btn" type="button" data-action="decrement">
                -
              </button>
              <span class="counter-value">0</span>
              <button class="counter-btn" type="button" data-action="increment">
                +
              </button>
            </div>
        </li>
    `;
}

function productsTemplate(productsArr) {
  return productsArr.map(productTemplate).join('');
}

function renderProductsCards(data) {
  const productsHtml = productsTemplate(data);
  cartRefs.productList.insertAdjacentHTML('beforeend', productsHtml);
}

function calcTotalPrice(data) {
  let totalPrice = 0;

  for (const product of data) {
    totalPrice += product.price;
  }
  return totalPrice;
}

function renderOrder(data) {
  const totalPrice = calcTotalPrice(data);
  cartRefs.customerOrder.innerHTML = `
        <h2 class="order-title">Your order</h2>
        <div class="total-container">
          <p class="sub-title">Total</p>
          <p class="total-price">
            <span class="notation">Sum: </span>$${totalPrice}
          </p>
        </div>
        <form class="cart-form" name="Order">
          <div class="input-container">
            <label class="notation" for="email">Mail:</label>
            <input
              type="email"
              id="email"
              pattern=".+@example\.com"
              placeholder="Enter your email"
              required
            />
          </div>
          <button class="order-btn">Checkout</button>
        </form>
    `;
}

async function onCartPageLoad() {
  updateCartFromStorage(cartRefs.cartSpan);

  if (localStorage.getItem('localKey') === null) {
    cartRefs.cartContent.classList.add('visually-hidden');
    cartRefs.emptyCart.classList.remove('visually-hidden');
    return;
  }

  const idsArrString = localStorage.getItem('localKey');
  const idsArr = JSON.parse(idsArrString);

  try {
    const dataPromises = idsArr.map(id => foodBoutiqueApi.fetchById(id));
    const dataArray = await Promise.all(dataPromises);

    renderProductsCards(dataArray);
    renderOrder(dataArray);
  } catch (error) {
    console.error(error);
  }
}
