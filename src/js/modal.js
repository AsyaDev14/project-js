import refs from './refs'

refs.productListEl.addEventListener('click', onProductListElClick)
refs.popularListEl.addEventListener('click', onProductListElClick)
refs.discountProductsEl.addEventListener('click', onProductListElClick)

function onProductListElClick(event) {
    event.preventDefault();


    if (event.target.nodeName === 'UL' || event.target.nodeName === 'BUTTON' || event.target.nodeName === 'svg'
        || event.target.nodeName === 'use' || event.target.nodeName === 'A') {
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


