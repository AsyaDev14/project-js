import cartRefs from './cartRefs';
import storage from './storage';
import { onCartPageLoad } from './onCartPageLoad.js';

cartRefs.deleteAll.addEventListener('click', onDeleteAllClick);
cartRefs.productList.addEventListener('click', onDeleteItemClick);

function onDeleteAllClick() {
  storage.remove('localKey');
  // storage.save('localKey', []);
  cartRefs.productList.innerHTML = '';
}
function onDeleteItemClick(e) {
  const cardEl = e.target.closest('li');
  const id = cardEl.dataset.productId;

  const oldCartArr = storage.load('localKey');
  let newCartArr = [];

  for (let i = 0; i < oldCartArr.length; i++) {
    const element = oldCartArr[i];
    if (!(element === id)) {
      newCartArr.push(element);
    }
  }

  storage.remove('localKey');
  storage.save('localKey', newCartArr);

  cartRefs.productList.innerHTML = '';

  onCartPageLoad();
}
