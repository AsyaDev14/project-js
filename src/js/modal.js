const refs = {
    productListEl: document.querySelector('.products-list'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalEl: document.querySelector('[data-modal]'),
    popularListEl: document.querySelector('.popular-list'),
    discountProductsEl: document.querySelector('.discount-products')

}
const { productListEl, closeModalBtn, modalEl, popularListEl, discountProductsEl } = refs;

function onProductListElClick(event) {
    event.preventDefault();
    if (event.target.nodeName === 'UL' || event.target.nodeName === 'BUTTON' || event.target.nodeName === 'svg' || event.target.nodeName === 'use' || event.target.nodeName === 'A') {
        return;
    }
    console.log(event.target.nodeName);
    modalEl.classList.remove('is-hidden');

    function onCloseModalBtnClick() {
        modalEl.classList.add('is-hidden')
    }

    closeModalBtn.addEventListener('click', onCloseModalBtnClick)
    productListEl.removeEventListener('click', onProductListElClick)

}

productListEl.addEventListener('click', onProductListElClick)
popularListEl.addEventListener('click', onProductListElClick)
discountProductsEl.addEventListener('click', onProductListElClick)
