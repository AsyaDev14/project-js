import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import cartRefs from './cartRefs.js';
import storage from './storage';
import iconsPath from '../icons/icons.svg';
import { updateCartFromStorage, updateCartOnHeader } from './header.js';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import img from '../images/cart/success.webp';
import { onDeleteAllClick } from './cartDelete';

window.addEventListener('load', onCartPageLoad);

const foodBoutiqueApi = new FoodBoutiqueAPI();

function productTemplate({
  _id: id,
  name,
  img,
  category,
  size,
  price,
  counter,
}) {
  if (!counter) {
    counter = 1;
  }
  return `
        <li class="cart-list-item" data-product-id=${id}>
            <img
              class="product-img"
              src="${img}"
              alt="${name}"
              width="64"
              height="64"
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
              <span class="counter-value">${counter}</span>
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

export function renderProductsCards(data) {
  const productsHtml = productsTemplate(data);
  cartRefs.productList.insertAdjacentHTML('beforeend', productsHtml);
}

function calcTotalPrice(data) {
  let totalPrice = 0;

  for (const product of data) {
    const counter = product.counter;
    totalPrice += product.price * counter;
  }

  return parseFloat(totalPrice.toFixed(2));
}

export function renderOrder(data) {
  const totalPrice = calcTotalPrice(data);
  cartRefs.customerOrder.innerHTML = `
        <h2 class="order-title">Your order</h2>
        <div class="total-container">
          <p class="sub-title">Total</p>
          <p class="total-price">
            <span class="notation">Sum: </span>$${totalPrice}
          </p>
        </div>
        <form class="cart-form js-cart-form" name="Order">
          <div class="input-container">
            <label class="notation" for="email">Mail:</label>
            <input
              type="email"
              id="email"
              pattern=".{8,}"
              placeholder="Enter your email"
              autocomplete="email"
              title="valid@email.com"
              required
            />
          </div>
          <button class="order-btn" type="submit">Checkout</button>
        </form>
    `;
}

export function fakeApiForCart() {
  const idArr = storage.load('localKey');
  let cartArr = [];

  for (let i = 0; i < idArr.length; i++) {
    const id = idArr[i];
    const product = storage.load(`product_${id}`);

    if (!product.counter) {
      product.counter = 1;
      storage.save(`product_${id}`, product);
    } else {
      product.counter;
    }
    cartArr.push(product);
  }
  return cartArr;
}

export async function onCartPageLoad() {
  updateCartFromStorage(cartRefs.cartSpan);
  updateCartOnHeader();

  const storageValue = localStorage.getItem('localKey');
  if (!storageValue || storageValue === '[]') {
    cartRefs.cartContent.classList.add('visually-hidden');
    cartRefs.emptyCart.classList.remove('visually-hidden');
    return;
  }

  const idsArrString = localStorage.getItem('localKey');
  const idsArr = JSON.parse(idsArrString);

  try {
    const dataPromises = idsArr.map(id => foodBoutiqueApi.fetchCachedById(id));
    const dataArray = await Promise.all(dataPromises);

    renderProductsCards(dataArray);

    renderOrder(fakeApiForCart());
  } catch (error) {
    console.error(error);
  }
  if (cartRefs.productList.children.length > 3) {
    cartRefs.productList.classList.add('show-scroll');
  } else {
    cartRefs.productList.classList.remove('show-scroll');
  }
}

// counter buttons
cartRefs.productList.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('counter-btn')) {
    const listItem = target.closest('.cart-list-item');
    const counterValue = listItem.querySelector('.counter-value');
    const action = target.getAttribute('data-action');
    let counter = parseInt(counterValue.textContent);

    if (action === 'increment') {
      counter++;
    } else if (action === 'decrement' && counter > 1) {
      counter--;
    }

    counterValue.textContent = counter;

    const id = listItem.dataset.productId;
    const product = storage.load(`product_${id}`);
    product.counter = counter;

    storage.save(`product_${id}`, product);

    renderOrder(fakeApiForCart());
  }
});

// export function recalculateTotal() {
//   const productListItems =
//     cartRefs.productList.querySelectorAll('.cart-list-item');
//   const productsData = [];

//   productListItems.forEach(item => {
//     const productId = item.getAttribute('data-product-id');
//     const productPrice = parseFloat(
//       item.querySelector('.cart-price').textContent.replace('$', '')
//     );
//     const quantity = parseInt(item.querySelector('.counter-value').textContent);

//     const product = {
//       _id: productId,
//       price: productPrice,
//       quantity: quantity,
//     };

//     productsData.push(product);
//   });

//   renderOrder(productsData);
// }

function cartModalMarkup(message) {
  return `<div class="success-modal">
        <div class="order-success-window">
          <button class="success-delete-btn js-close-success" data-modal-close>
            <svg  width="22" height="22">
              <use href="${iconsPath}#icon-close"></use>
            </svg>
          </button>
          <img class="success-img"
            src="${img}"
            alt="Success Order"
            width="140"
            height="140"
            loading="lazy"
          />
          <div class="success-text">
            <h2 class="success-title">Order success</h2>
            <p class="success-descr">
              ${message}
            </p>
          </div>
        </div>
      </div>`;
}

function renderCartModal(message) {
  cartRefs.successModal.innerHTML = cartModalMarkup(message);
  cartRefs.successModal.classList.remove('is-hidden');
  disableBodyScroll(cartRefs.successModal);

  const closeModalBtn =
    cartRefs.successModal.querySelector('.js-close-success');
  closeModalBtn.addEventListener('click', onCloseModalBtnClick);
  document.addEventListener('keydown', onKeydownClick);
}

cartRefs.customerOrder.addEventListener('submit', async event => {
  event.preventDefault();

  const email = document.getElementById('email').value;

  const productListItems =
    cartRefs.productList.querySelectorAll('.cart-list-item');
  const productsData = [];

  productListItems.forEach(item => {
    const productId = item.getAttribute('data-product-id');
    const productPrice = parseFloat(
      item.querySelector('.cart-price').textContent.replace('$', '')
    );
    const quantity = parseInt(item.querySelector('.counter-value').textContent);

    const product = {
      _id: productId,
      price: productPrice,
      quantity: quantity,
    };

    productsData.push(product);
  });

  try {
    const response = await foodBoutiqueApi.postOrders(email, productsData);
    if (response) {
      renderCartModal(response.message);
    }
  } catch (error) {
    console.log(error);
  }
});

function onCloseModalBtnClick() {
  document.removeEventListener('keydown', onKeydownClick);

  cartRefs.successModal.classList.add('is-hidden');
  enableBodyScroll(cartRefs.successModal);

  onDeleteAllClick();
}

function onKeydownClick({ code }) {
  const closeModalBtn =
    cartRefs.successModal.querySelector('.js-close-success');
  closeModalBtn.removeEventListener('click', onCloseModalBtnClick);

  if (code === 'Escape') {
    onCloseModalBtnClick();
  }

  document.removeEventListener('keydown', onKeydownClick);
}
