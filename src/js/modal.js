import refs from './refs'

refs.productsListEl.addEventListener('click', onProductListElClick)
refs.popularListElement.addEventListener('click', onProductListElClick)
refs.discountProductsEl.addEventListener('click', onProductListElClick)

function onProductListElClick(event) {
    event.preventDefault();

    if (event.target.classList.contains('btn-buy') || event.target.classList.contains('products-list')
        || event.target.classList.contains('discount-btn-buy') || event.target.classList.contains('js-discount-products')
        || event.target.classList.contains('popular-list') || event.target.classList.contains('cart-btn')
        || event.target.classList.contains('js-icon-buy')) {
        return;
    }

    refs.modalEl.classList.remove('is-hidden');

    function onCloseModalBtnClick() {
        refs.modalEl.classList.add('is-hidden')
    }

    function onBackdropKeydown({ code }) {
        if (code === 'Escape') {
            refs.modalEl.classList.add('is-hidden')
            document.removeEventListener('keydown', onBackdropKeydown);
        }
    }

    function onBackdropCLick(event) {
        if (event.target.classList.contains('backdrop-modal')) {
            refs.modalEl.classList.add('is-hidden');
        }

        refs.modalEl.removeEventListener('click', onBackdropCLick)
    }

    refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick)
    document.addEventListener('keydown', onBackdropKeydown);
    refs.modalEl.addEventListener('click', onBackdropCLick)
}


