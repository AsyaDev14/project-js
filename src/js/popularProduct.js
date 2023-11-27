import iconPath from '../icons/icons.svg';

function popularProductTemplate(popular) {
  const { _id: id, name, img, category, size, popularity } = popular;
  return `<li class="popular-item" data-product-id='${id}'>
      <div class="popular-product-img">
        <img src="${img}" alt="${name}" width="56" height="56" />
      </div>
      <button class="cart-btn js-buy-btn" type="button" aria-label="Button Buy" >
        <svg width="12" height="12" class='js-icon-buy'>
          <use href="${iconPath}#icon-cart" class='js-icon-buy'></use>
        </svg>
      </button>
      <div class="popular-item-info">
        <h3 class="popular-info-title">${name}</h3>
        <p class="popular-category">
          <span class="popular-accent">Category:</span> ${category}
        </p>
        <p class="popular-info-descr">
          <span class="popular-accent">Size:</span> ${size}
          <span class="popular-accent">Popularity:</span> ${popularity}
        </p>
      </div>
    </li>`;
}

function popularProductsTemplate(popularArr) {
  const randomPopularArr = popularArr.sort(() => Math.random() - 0.5); // Перемішуємо масив рандомно
  return randomPopularArr.map(popularProductTemplate).join('');
}

export function renderPopularProducts(popularArr) {
  return popularProductsTemplate(popularArr);
}
