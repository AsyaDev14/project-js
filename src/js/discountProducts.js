import iconsPath from '../icons/icons.svg';

function discountProductsMarkup({ _id: id, name, img, price }) {
  return `
  <li class="discount-item" data-product-id='${id}'>
            <div class="discount-img-box">
                <img class="discount-img" src="${img}">
                <svg class="discount-svg" width="60" height="60">
                    <use href="${iconsPath}#icon-discount"></use>
                </svg>
            </div>
            <div class="discount-bottom">
                <p class="discount-txt">${name}</p>
                <p class="discount-price">${price}</p>
                <button class='discount-btn-buy' type='button'>
                    <svg width='18' height='18'>
                        <use href='${iconsPath}#icon-cart' />
                    </svg>
                </button>
            </div>
        </li>`;
}

export function renderDiscountCards(listOfProducts, listElement) {
  listElement.innerHTML = listOfProducts.map(discountProductsMarkup).join('');
}
