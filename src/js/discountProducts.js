import iconsPath from '../icons/icons.svg';

function discountProductsMarkup({ _id: id, name, img, price }) {
  return `
  <li class="discount-item" data-product-id='${id}'>
            <div class="discount-img-box">
                <img class="discount-img"
                src="${img}"
                alt='${name}'
                width='114'
                height='114'
                loading='lazy'/>
                <svg class="discount-svg" width="60" height="60">
                    <use href="${iconsPath}#icon-discount"></use>
                </svg>
            </div>
            <div class="discount-bottom">
                <p class="discount-txt">${name}</p>
                <p class="discount-txt discount-price">$${price}</p>
                <button class='discount-btn-buy js-buy-btn' type='button' aria-label="Button Buy">
                    <svg width='18' height='18' class='js-icon-buy'>
                        <use href='${iconsPath}#icon-cart' class='js-icon-buy'/>
                    </svg>
                </button>
            </div>
        </li>`;
}

export function renderDiscountCards(listOfProducts, listElement) {
  let random = Math.ceil(Math.random() * 7);
  listElement.innerHTML = listOfProducts
    .map(discountProductsMarkup)
    .slice(random, random + 2)
    .join('');
}
