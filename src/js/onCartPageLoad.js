import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import cartRefs from './cartRefs.js';
import iconsPath from '../icons/icons.svg';
import { updateCartFromStorage, updateCartOnHeader } from './header.js';

window.addEventListener('load', () => onCartPageLoad(true));

const foodBoutiqueApi = new FoodBoutiqueAPI();

function productTemplate({ _id: id, name, img, category, size, price }) {
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
              <span class="counter-value">1</span>
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
    const quantity = product.quantity === undefined ? 1 : product.quantity;
    totalPrice += product.price * quantity;
  }

  return parseFloat(totalPrice.toFixed(2));
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
        <form class="cart-form js-cart-form" name="Order">
          <div class="input-container">
            <label class="notation" for="email">Mail:</label>
            <input
              type="email"
              id="email"
              pattern=".+@example\.com"
              placeholder="Enter your email"
              autocomplete="email"
              required
            />
          </div>
          <button class="order-btn" type="submit">Checkout</button>
        </form>
    `;
}

function processCounterClick(data) {
  cartRefs.productList.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('counter-btn')) {
      const action = target.getAttribute('data-action');
      const valueEl = target.parentElement.querySelector('.counter-value');
      let counterValue = Number(valueEl.textContent);

      if (action === 'increment') {
        counterValue++;
      } else if (action === 'decrement' && counterValue > 1) {
        counterValue--;
      }

      valueEl.textContent = counterValue;
      const productId = target.closest('.cart-list-item').dataset.productId;
      const updatedData = data.map(product => {
        if (product._id === productId) {
          product.quantity = counterValue;
        }
        return product;
      });
      renderOrder(updatedData);
      return;
    }
  });
}

export async function onCartPageLoad(firstLoad = false) {
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

    renderOrder(dataArray);
    if (firstLoad) {
      processCounterClick(dataArray);
    }
  } catch (error) {
    console.error(error);
  }
  if (cartRefs.productList.children.length > 3) {
    cartRefs.productList.classList.add('show-scroll');
  } else {
    cartRefs.productList.classList.remove('show-scroll');
  }
}

const cartFormInput = document.querySelector('.input-container #email');
console.dir(cartFormInput);
