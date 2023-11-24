import iconsPath from '../icons/icons.svg'

export function getCardMarkup({ _id: id, name, img, category, size, popularity, price, is10PercentOff }) {
  return `
  <li class='product-item' data-product-id='${id}'>
    <div class='product-img-container'>
      <img
        src='${img}'
        alt='${name}'
        width='140'
        height='140'
        loading='lazy'/>
    </div>
    <h3 class='product-name'>${name}</h3>
    <ul class='product-props'>
      <li class='prop'>
        <span class='prop-name'>Category:</span>
        <span class='prop-value'>${category}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Size:</span>
        <span class='prop-value'>${size}</span>
      </li>
      <li class='prop'>
        <span class='prop-name'>Popularity:</span>
        <span class='prop-value'>${popularity}</span>
      </li>
    </ul>
    <div class='product-buy-container'>
      <p class='price'>$${price}</p>
      <button class='btn-buy' type='button'>
        <svg width='18' height='18' class='js-icon-buy'>
          <use href='${iconsPath}#icon-cart' class='js-icon-buy'/>
        </svg>
      </button>
    </div>
      ${is10PercentOff ? `<svg class='product-discount' width='60' height='60'>
      <use href='${iconsPath}#icon-discount'/>
    </svg>` : ''}
  </li>`;
}

export function renderProductsCards(listOfProducts, listElement) {
  listElement.innerHTML = listOfProducts.map(getCardMarkup).join('');
}
