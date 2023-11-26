import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import refs from './refs';

refs.footerFormEl.addEventListener('submit', onFooterFormElSubmit);

const paramsNotify = {
  width: '500px',
  position: 'right-bottom',
  fontSize: '20px',
};
const foodBoutiqueAPI = new FoodBoutiqueAPI();

async function onFooterFormElSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const subscriber = {
    email: form.elements.userEmail.value,
  };
  try {
    const newSubscriber = await foodBoutiqueAPI.postSubscription(subscriber);
    form.reset();

    return Notify.success(
      'Your subscription is confirmed! Welcome to the Food Boutique! 🥦🍓 ',
      paramsNotify
    );
  } catch (error) {
    form.reset();

    if (error.response.status === 409) {
      return Notify.warning(
        'It looks you are already subscribed to our newsletter! Thank you 🥦🍓',
        paramsNotify
      );
    } else {
      return Notify.failure(
        'Sorry, something went wrong. Please try again.',
        paramsNotify
      );
    }
  }
}
