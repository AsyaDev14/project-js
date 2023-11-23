import { productListEl, closeModalBtn, modalEl, popularListEl, discountProductsEl } from "./refs";

productListEl.addEventListener('click', onProductListElClick)
popularListEl.addEventListener('click', onProductListElClick)
discountProductsEl.addEventListener('click', onProductListElClick)

function onProductListElClick(event) {
    event.preventDefault();


    if (event.target.nodeName === 'UL' || event.target.nodeName === 'BUTTON' || event.target.nodeName === 'svg'
        || event.target.nodeName === 'use' || event.target.nodeName === 'A') {
        return;
    }

    modalEl.classList.remove('is-hidden');

    function onCloseModalBtnClick() {
        modalEl.classList.add('is-hidden')
    }

    function onBackdropKeydown({ code }) {
        if (code === 'Escape') {
            modalEl.classList.add('is-hidden')
            document.removeEventListener('keydown', onBackdropKeydown);
        }
    }

    function onBackdropCLick(event) {
        if (event.target.classList.contains('backdrop-modal')) {
            modalEl.classList.add('is-hidden');
        }

        modalEl.removeEventListener('click', onBackdropCLick)
    }

    closeModalBtn.addEventListener('click', onCloseModalBtnClick)
    document.addEventListener('keydown', onBackdropKeydown);
    modalEl.addEventListener('click', onBackdropCLick)
}


