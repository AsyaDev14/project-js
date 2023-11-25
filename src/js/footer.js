import axios from 'axios';
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
  const { elements } = form;

  const subscriber = {
    email: elements.userEmail.value,
  };
  try {
    const newSubscriber = await foodBoutiqueAPI.postSubscription(subscriber);
    return Notify.success(
      'Your subscription is confirmed! Welcome to the Food Boutique! 🥦🍓 ',
      paramsNotify
    );
  } catch (error) {
    if (error.response.status === 409) {
      return Notify.warning('Subscription already exists', paramsNotify);
    } else {
      return Notify.failure(
        'Sorry, something went wrong. Please try again later.',
        paramsNotify
      );
    }
  }
  form.reset();
}
